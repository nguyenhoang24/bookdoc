package com.deny.bookdoc.service.impl;

import com.deny.bookdoc.config.TwilioConfig;
import com.deny.bookdoc.service.AppointmentsService;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SmsService {

    @Autowired
    private TwilioConfig twilioConfig;

    @Autowired
    private AppointmentsService appointmentsService;

    public String sendTest() {
        PhoneNumber to = new PhoneNumber("+84984395898");
        PhoneNumber from = new PhoneNumber(twilioConfig.getPhoneNumber());

        Message message = Message
                .creator(to, from, "Bắt con Ninh Bình đem đi bán")
                .create();

        return "ok";
    }
}
