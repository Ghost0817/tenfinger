import { Inject, Injectable } from '@angular/core';
import {Stomp} from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { RaceYourFriendsComponent } from 'src/app/pages/student/race-your-friends/race-your-friends.component';

@Injectable({
  providedIn: 'root'
})
export class WsapiService {
  webSocketEndPoint: string = 'http://localhost:8080/ws';
  topicPrivate: string = "/user/topic/private-messages";
  topicSystemPrivate: string = "/user/topic/private-system-messages";
  topicMembers: string = "/user/topic/members";
  stompClient: any;
  guestToken: string = "";
  id: string = "";

  objComponent: RaceYourFriendsComponent;
  constructor(objComponent: RaceYourFriendsComponent) { 
    this.objComponent = objComponent;
  }

  _connect() {
    console.log("Initialize WebSocket Connection");
    let ws = new SockJS(this.webSocketEndPoint);
    this.stompClient = Stomp.over(ws);
    const _this = this;
    _this.stompClient.connect({"Authorization": `Bearer ${_this.getAccessUserToken()}`}, function (frame: any) {
      _this.guestToken = frame.headers['user-name'];
      _this.objComponent.setUserToken(_this.guestToken);

      _this.stompClient.subscribe(_this.topicPrivate, function (sdkEvent: any) {
          _this.onPrivateMessageReceived(sdkEvent);
      });
      
      _this.stompClient.subscribe(_this.topicSystemPrivate, function (sdkEvent: any) {
          _this.onPrivateSystemMessageReceived(sdkEvent);
      });
      _this.stompClient.subscribe(_this.topicMembers, function (sdkEvent: any) {
          _this.onPrivateMemberReceived(sdkEvent);
      });
      //_this.stompClient.reconnect_delay = 2000;

      _this.stompClient.send("/app/private-system-message"+((_this.id=="")? '' :'/'+_this.id), {"Authorization": `Bearer ${_this.getAccessUserToken()}`}, JSON.stringify("Guest has entered the racetrack."));
    }, this.errorCallBack);
  }

  getAccessUserToken(): string {
    if(localStorage.getItem('accessToken') != undefined ) {
      // got real user

      // then we need check if it is Guest
      if(this.guestToken != "") {
        // this is not accessed before the real user is login.
        // if it as accessed for Guest we need remove from room.
        // then we can add to room with real user. 

        this.guestToken = "";
      }
      return ""+localStorage.getItem("accessToken");
      //return  "";
    } else {
      return this.guestToken;
    }
  }

  _disconnect() {
      if (this.stompClient !== null) {
          this.stompClient.disconnect();
      }
      console.log("Disconnected");
  }

  // on error, schedule a reconnection attempt
  errorCallBack(error: string) {
    console.log("errorCallBack -> " + error)
    setTimeout(() => {
        this._connect();
    }, 5000);
  }
  _send(path: string,message: string) {
    console.log("calling logout api via web socket");
    this.stompClient.send(
      path, //"/app/message", 
      {"Authorization":`Bearer ${localStorage.getItem('accessToken')}`}, 
      JSON.stringify(message)
    );
  }

  _sendPrivate(path: string,message: string) {
    this.stompClient.send(
      path, //"/app/private-message", 
      {"Authorization":`Bearer ${localStorage.getItem('accessToken')}`}, 
      //{Authorization: this.objComponent.yourToken},
      JSON.stringify(message)
    );
  }
  _sendSystemPrivate(message: string) {
    this.stompClient.send("/app/private-system-message"+(this.objComponent.roomId='')? '' :'/'+this.objComponent.roomId, {"Authorization":`Bearer ${localStorage.getItem('accessToken')}`}, JSON.stringify(message));
  }

  onMessageReceived(message: any) {
    console.log("Message Recieved from Server :: " + message);
    console.log(message.body);
    //this.objComponent.handleMessage(JSON.stringify(message.body));
  }

  onPrivateMessageReceived(message: any) {
    this.objComponent.handlePrivateMessage(JSON.parse(message.body));
    console.log(message.body);
  }

  onPrivateSystemMessageReceived(message: any) {
    console.log("private message Recieved from Server :: " + message);
    console.log(message.body);
    this.objComponent.handlePrivateMessage(JSON.parse(message.body));
  }

  onPrivateMemberReceived(message: any) {
    console.log("members Recieved from Server :: " + message);
    console.log(message.body);
    this.objComponent.handlePrivateMember(JSON.parse(message.body));
  }

  getMember():string {
    return this.guestToken;
  }

}
