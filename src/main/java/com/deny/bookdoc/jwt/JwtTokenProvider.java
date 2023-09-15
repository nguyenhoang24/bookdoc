package com.deny.bookdoc.jwt;

import com.deny.bookdoc.security.CustomUserDetails;
import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
@Slf4j
public class JwtTokenProvider {
    @Value("${ra.jwt.secret}")
    private String JWT_SECRET;
    @Value("${ra.jwt.expiration}")
    private int JWT_EXPIRATION;

    //Tạo ra jwt từ thông tin User
    public String generateToken(CustomUserDetails customUserDetails){
        Date now = new Date(); // ngày hiện tại
        Date dateExpired = new Date(now.getTime() + JWT_EXPIRATION); // ngày hết hạn
        // Tạo chuỗi jwt từ username
        return Jwts.builder().setSubject(customUserDetails.getUsername())
                .setIssuedAt(now)
                .setExpiration(dateExpired)
                .signWith(SignatureAlgorithm.HS512, JWT_SECRET)
                .compact();
    }

    // Lấy thông tin từ Jwt
    public String getUserNameFromJwt(String token){
        Claims claims = Jwts.parser().setSigningKey(JWT_SECRET)
                .parseClaimsJws(token).getBody();
        //Trả lại thông tin username
        return claims.getSubject();
    }

    // Validate thông tin của JWT
    public boolean validateToken(String token){
        try {
            Jwts.parser().setSigningKey(JWT_SECRET)
                    .parseClaimsJws(token).getBody();
            return true;
        }catch (MalformedJwtException ex){
            log.error("Invalid JWT Token"); // không đúng chuỗi token
        }catch (ExpiredJwtException ex){
            log.error("Expired JWT Token"); // hết hạn chuỗi token
        }catch (UnsupportedJwtException ex){
            log.error("Unsupported JWT Token"); // Không hỗ trợ token
        }catch (IllegalArgumentException ex){
            log.error("JWT claims String is empty"); // Chuỗi bị empty
        }
        return false;
    }
}
