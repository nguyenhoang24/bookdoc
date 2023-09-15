package com.deny.bookdoc.util;

import org.springframework.security.core.Authentication;

public class PermissionUtil {
    public static boolean checkROLE_DOCTOR(Authentication authentication) {
        if (authentication != null && authentication.getAuthorities().stream()
                .anyMatch(auth -> auth.getAuthority().equals("ROLE_DOCTOR"))) {
            return true;
        }
        return false;
    }
}
