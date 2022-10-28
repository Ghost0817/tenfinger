package com.tw.bicheech.socker.controller;

import com.tw.bicheech.socker.model.*;
import com.tw.bicheech.socker.service.WSService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import java.security.SecureRandom;
import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;
import java.util.Random;

@Controller
public class RaceController {

    @Autowired
    private WSService service;

    private final Random RANDOM = new SecureRandom();
    private final String ALPHABET = "0123456789QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    private List<RoomsModels> objRoomForUserList = new ArrayList<>();

    public String generateRandomString(int length) {
        StringBuffer buffer = new StringBuffer(length);
        for (int i = 0; i < length; i++) {
            buffer.append(ALPHABET.charAt(RANDOM.nextInt(ALPHABET.length())));
        }
        return new String(buffer);
    }

    @MessageMapping("/private-system-message")
    @SendToUser("/topic/private-system-messages")
    public ResponseMessage getPrivateMessage(final StompPrincipal principal,
                                             final TextMessage message) throws InterruptedException {
        String myRoomId = "";

        RoomsModels objRoomsModels = new RoomsModels();
        objRoomsModels.setRoomId(generateRandomString(12));
        objRoomsModels.setHostUserId(principal.getName());
        objRoomsModels.setIsStarted(false);
        objRoomsModels.setIsFinished(false);
        objRoomsModels.setIsExistsed(true);
        objRoomsModels.setCreatedAt(new Date(Calendar.getInstance().getTime().getTime()));
        objRoomsModels.setFinishedAt(new Date(Calendar.getInstance().getTime().getTime()));
        objRoomsModels.setObjRoomForUser(new ArrayList<>());

        RoomForUser objRoomForUser = new RoomForUser();
        objRoomForUser.setUserId(principal.getName());
        objRoomForUser.setUserName(principal.getUsername());
        objRoomForUser.setScore(0.0);


        myRoomId = objRoomsModels.getRoomId();
        objRoomsModels.getObjRoomForUser().add(objRoomForUser);

        service.notifyToRoom(objRoomsModels, objRoomForUser.getUserId(), objRoomsModels.getRoomId());

        objRoomForUserList.add(objRoomsModels);

        return new ResponseMessage(HtmlUtils.htmlEscape(message.getText()), new Date(Calendar.getInstance().getTime().getTime()),myRoomId);
    }

    @MessageMapping("/members/{roomId}")
    @SendToUser("/topic/members")
    public RoomsModels getMembers(final StompPrincipal principal,
                                        @DestinationVariable final String roomId) throws InterruptedException {
        RoomsModels objRoomsModels = new RoomsModels();
        for (int i = 0; i < objRoomForUserList.size(); i++) {
            if(roomId.equalsIgnoreCase(objRoomForUserList.get(i).getRoomId()) ) {
                objRoomsModels = (RoomsModels) objRoomForUserList.get(i);
            }
        }

        return objRoomsModels;
    }

//    @MessageMapping({ "/private-close/{roomId}" })
//    @SendToUser("/topic/private-close")
//    public String hello(final StompPrincipal principal, final TextMessage message, @DestinationVariable final String roomId) {
//
//        System.out.println("roomId:"+roomId);
//        System.out.println("objRoomForUserList.size():"+objRoomForUserList.size());
//
//        for (int i = 0; i < objRoomForUserList.size(); i++) {
//            if(objRoomForUserList.get(i).getRoomId().equals(roomId) && objRoomForUserList.get(i).getUserId().equalsIgnoreCase(principal.getName())) {
//                objRoomForUserList.remove(objRoomForUserList.get(i));
//            }
//        }
//
//        List<RoomForUser> objRoomForUsers = new ArrayList<>();
//        for(RoomForUser objUser:objRoomForUserList) {
//            if(objUser.getRoomId().equals(roomId)) {
//                objRoomForUsers.add(objUser);
//            }
//        }
//        for (int i = 0; i < objRoomForUserList.size(); i++) {
//            service.notifyToRoom(objRoomForUsers, objRoomForUserList.get(i).getUserId(), objRoomForUserList.get(i).getRoomId());
//        }
//        return "";
//    }
}
