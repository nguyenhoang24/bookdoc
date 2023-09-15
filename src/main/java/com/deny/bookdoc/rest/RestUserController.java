package com.deny.bookdoc.rest;

import com.deny.bookdoc.domain.User;
import com.deny.bookdoc.dto.PagingDto;
import com.deny.bookdoc.dto.UserDto;
import com.deny.bookdoc.dto.response.JwtResponse;
import com.deny.bookdoc.dto.response.MessageResponse;
import com.deny.bookdoc.jwt.JwtTokenProvider;
import com.deny.bookdoc.security.CustomUserDetails;
import com.deny.bookdoc.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping(value = "/api/v1/user")
public class RestUserController {

    @Autowired
    private UserService userService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenProvider tokenProvider;

    @PostMapping("/sign-up")
    public ResponseEntity<?> registerUser(@RequestBody UserDto userDto) {
        //Check thêm username tồn tại chưa ở đây
        User userCheck = userService.findByUserName(userDto.getUsername());
        if(userCheck != null) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username exist"));
        } else {
            UserDto user = userService.saveOrUpdate(userDto);
            if(user != null) {
                return ResponseEntity.ok(new MessageResponse("User registered successfully"));
            }
        }
        return ResponseEntity.badRequest().body(new MessageResponse("Error register"));
    }

    @PostMapping("/sign-in")
    public ResponseEntity<?> loginUser(@RequestBody UserDto userDto) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(userDto.getUsername(), userDto.getPassword())
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        CustomUserDetails customUserDetails = (CustomUserDetails) authentication.getPrincipal();
        String jwt = tokenProvider.generateToken(customUserDetails);
        List<String> listRoles = customUserDetails.getAuthorities().stream()
                .map(item->item.getAuthority()).collect(Collectors.toList());

        return ResponseEntity.ok(new JwtResponse(jwt, customUserDetails.getUsername(), customUserDetails.getEmail(),
                customUserDetails.getPhone(), listRoles));
    }

    @PostMapping("/paging-doctor")
    public ResponseEntity<Page<UserDto>> paging(@RequestBody PagingDto pagingDto) throws Exception{
        Page<UserDto> result = userService.pagingDoctor(pagingDto);
        return new ResponseEntity<>(result, (result != null) ? HttpStatus.OK : HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/getCurrentUser")
    public ResponseEntity<UserDto> getCurrentUser(HttpServletRequest request) {
        String token = extractTokenFromRequest(request);
        if (token == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        UserDto currentUser = userService.getCurrentUser(token);
        if (currentUser == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        return ResponseEntity.ok(currentUser);
    }

    private String extractTokenFromRequest(HttpServletRequest request) {
        String header = request.getHeader("Authorization");
        if (header != null && header.startsWith("Bearer ")) {
            return header.substring(7); // Bỏ qua "Bearer "
        }
        return null;
    }
}
