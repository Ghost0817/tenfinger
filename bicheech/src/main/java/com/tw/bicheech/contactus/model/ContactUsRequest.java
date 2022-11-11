package com.tw.bicheech.contactus.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@AllArgsConstructor
@NoArgsConstructor
public class ContactUsRequest {
    private String name;
    private String email;
    private String content;
}
