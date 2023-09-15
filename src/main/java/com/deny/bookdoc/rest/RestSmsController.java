package com.deny.bookdoc.rest;

import com.deny.bookdoc.service.impl.SmsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/sms")
public class RestSmsController {

    @Autowired
    private SmsService smsService;

    @GetMapping("/test")
    private String sendTest() {
        return smsService.sendTest();
    }
}
