package com.tw.bicheech.socker.service;

import com.tw.bicheech.socker.model.ResponseMessage;
import com.tw.bicheech.socker.model.RoomsModels;
import com.tw.bicheech.socker.model.TextMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.Calendar;

@Service
public class WSService {
    private SimpMessagingTemplate messagingTemplate;

    @Autowired
    public WSService(SimpMessagingTemplate messagingTemplate) {
        this.messagingTemplate = messagingTemplate;
    }

    public void notifyFrontend(final TextMessage message) {
        messagingTemplate.convertAndSend("topic/messages", message);
    }

    public void notifyToUser(final String message, final String userId, final String roomId) {
        messagingTemplate.convertAndSendToUser(userId,"topic/private-messages",new ResponseMessage(message, new Date(Calendar.getInstance().getTime().getTime()),roomId));
    }

    public void notifyToRoom(final RoomsModels objRoomsModels, final String userId, final String roomId) {
        messagingTemplate.convertAndSendToUser(userId,"topic/members", objRoomsModels);
    }

}
