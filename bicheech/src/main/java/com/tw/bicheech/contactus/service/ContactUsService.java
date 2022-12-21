package com.tw.bicheech.contactus.service;

import com.tw.bicheech.contactus.entity.DAOContactUs;
import com.tw.bicheech.contactus.repository.ContactUsRepository;
import com.tw.bicheech.security.entity.DAOUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContactUsService {

    @Autowired
    private ContactUsRepository objContactUsRepository;

    public boolean save(String name,String email,String content) {
        boolean result = true;
        DAOContactUs objDAOContactUs = new DAOContactUs();
        objDAOContactUs.setName(name);
        objDAOContactUs.setEmail(email);
        objDAOContactUs.setContent(content);
        objContactUsRepository.save(objDAOContactUs);

        return result;
    }
}
