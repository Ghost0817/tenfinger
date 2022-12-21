package com.tw.bicheech.contactus.controller;

import com.tw.bicheech.contactus.model.ContactUsRequest;
import com.tw.bicheech.contactus.service.ContactUsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ContactUsController {
    @Autowired
    private ContactUsService objContactUsService;

    @RequestMapping(value = "/contactus", method = RequestMethod.POST)
    public ResponseEntity<?> execrise(@RequestBody final ContactUsRequest contactusRequest) {
        System.out.println(contactusRequest.getName());
        System.out.println(contactusRequest.getEmail());
        System.out.println(contactusRequest.getContent());
        objContactUsService.save(contactusRequest.getName(), contactusRequest.getEmail(), contactusRequest.getContent());
        return ResponseEntity.ok("");
    }
}
