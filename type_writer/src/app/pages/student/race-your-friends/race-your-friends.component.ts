import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { WsapiService } from 'src/app/core/services/wsapi.service';
import { contents } from 'src/app/core/constants/fake-content'

@Component({
  selector: 'app-race-your-friends',
  templateUrl: './race-your-friends.component.html',
  styleUrls: ['./race-your-friends.component.scss']
})
export class RaceYourFriendsComponent implements OnInit {

  webSocketAPI!: WsapiService;
  message = "";
  roomId: string = '';
  messages: any = [];
  members: any = [];
  yourToken : string = "";
  counDown: number = 4;
  startStr: String = "";

  dialogUrlRoom: boolean = true;
  dialogStart: boolean = false;

  // this is test data
  lessons: string | any[] = [];

  // if it is start timer, it will true 
  timeIsRunning = false;
  // this is decide to timer count down or up
  timeCountIsUp = true;
  // this is timer text
  strTime = "0:00";
  // this is seconds
  seconds = 0;
  //this is minutes
  minutes = 0;
  //this is time limit witch is stop there.
  timeLimit = 0;
  // this is 
  timeTricker = 0;
  // is timeout
  isTimeout: boolean = false;

  wpm = 0;
  //whole
  lwpm = 0;
  // mistake count
  errors = 0;
  // it is only count current text value. 
  characters = 0;
  accuracy = 100;
  progressBar = 0;
  progressBarStyle: any = '';
  playSounds = true;

  speedType = 'wpm';
  typingProcess: any = [];
  testIndex = 0;
  wordIndex = 0;
  letterIndex = 0;
  words: any;
  formGroup!: FormGroup;
  wrote = new FormControl("");
  timer: any = 0;
  interval: any;
  users:any;

  wallOfFame: any = {}

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const  __this = this;
    this.route
      .queryParams
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.roomId = params['id'] || "";
        this.webSocketAPI = new WsapiService(this);
        this.webSocketAPI.id = this.roomId;

        this.webSocketAPI._connect();
        
      });
      
    //This is a very elegant method - for a single component.
    //window.onbeforeunload = () => this.ngOnDestroy();

    this.lessons = contents;
    
    this.testIndex = this.randomNumber(0, this.lessons.length - 1);
    this.words = this.lessons[this.testIndex].tutor.split(" ").map((word: string) => {
      return word + " ";
    });
    this.formGroup = new FormGroup({
      wrote: new FormControl("")
    });
    this.formGroup.valueChanges.subscribe(change => {
      this.onChange(change.wrote);
    });
    this.words.forEach((word: any) => {
      this.typingProcess.push({word, status: 'unknown', letters: []});
    });
  }

  ngOnDestroy(): void {
    this.webSocketAPI._disconnect();
    //throw new Error('Method not implemented.');
  }

  setUserToken(member: string): void{
    this.yourToken = member
  }

  handlePrivateMessage(message: any){
    if(this.roomId == "") {
      this.roomId=message.roomId;
      this.webSocketAPI.id = this.roomId;
    }
    this.messages.push({"text": message.content});
  }

  handlePrivateMember(message: any){
    this.users  = message;
  }

  sendPrivateMessage() {
    if(this.message != "") {
      this.webSocketAPI._sendPrivate("/app/private-message" ,this.message);
      this.message = "";
    }
  }

  getMessage(message: any): string {
    return message["text"];
  }

  getBaseUrl(): string {
    return location.href;
  }

  handleMembers(members: any){
    this.members = members;
  }

  getUsername(member: any): string{
    return member["userName"];
  }

  isMe(member: any): boolean{

    if(member["userId"]==this.yourToken)
      return true;
    return false;
  }

  open(): void {
    this.dialogUrlRoom = true;
  }

  close(): void {
    this.dialogUrlRoom = false;

  }

  open1(): void {
    this.dialogUrlRoom = true;
  }

  close1(): void {
    this.dialogUrlRoom = false;

  }

  start(): void {
    this.dialogStart = true;
    this.interval = setInterval(() => {
      this.counDown = this.counDown - 1;
      this.startStr = "Waiting for competitors... " + this.counDown;
      if(this.counDown == 0) {
        clearInterval(this.interval);
        this.dialogStart = false;
        this.counDown = 4;
        this.startStr = "Waiting for competitors... " + this.counDown;
        this.timeIsRunning = true;
      }
      
    },1000);
  }

  leave(): void {
    this.dialogStart = false;
    clearInterval(this.interval);
    this.counDown = 4;
    this.startStr = "Waiting for competitors... " + this.counDown;
    this.timeIsRunning = false;
  }

  leaveRace():void {

  }



  getStatus() {
    const status = {missedWord: 0, missedLetter: 0};
    status.missedWord = this.typingProcess.filter((process:any) => process.status === 'wrong').length;
    this.typingProcess.filter((process:any) => process.status === 'wrong').forEach((process:any) => {
      status.missedLetter += process.letters.filter((letter:boolean) => letter === false).length;
    });
    return status;
  }


  randomNumber(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  calculateSpeed(characters: number, seconds: number, errors: number) {
    var words, minutes, speed;
    if (this.speedType == "kph") {
      speed = Math.round(characters / seconds * 3600);
    } else if (this.speedType == "wpm") {
      words = (characters - (errors * 5)) / 5;		// begin WPM calculation
      minutes = seconds / 60;
      speed = Math.max(Math.round(words / minutes), 0);
    } else {
      words = (characters - (errors * 5));		// begin WPM calculation
      minutes = seconds / 60;
      speed = Math.max(Math.round(words / minutes), 0);
    }
    return (speed == Infinity) ? 100 : speed;
  }

  getLetters(word: string) {
    return word.split("");
  }

  playSound() {
		if (!this.playSounds) return;

		if (navigator.userAgent.match(/MSIE 10/)) {
			return
		}
    new Audio('../../../assets/audio/fail.mp3').play();
  }

	toggleSound() {
		if (this.playSounds) {
			this.playSounds = false;
		} else {
			this.playSounds = true;
		}
		// sound enable xiij baigaa xeseg end xiij bn ajax call xiij bn. '/student/lesson/sound/'
	}

  onSpace() {
    if (this.currentWrote.length === this.words[this.wordIndex].length) {
      this.wordIndex++;
      this.letterIndex = 0;
      this.setCurrentWrote('');
    }

    let result = document.getElementsByClassName("word-" + this.wordIndex) as HTMLCollection;
    for (let i=0; i < result.length; i++) {
      const spanElement = result.item(i) as HTMLSpanElement;
      let box =  (document.getElementsByClassName("typing-box") as HTMLCollection)[0] as HTMLDivElement;
      let inp =  (document.getElementsByClassName("inp_text") as HTMLCollection)[0] as HTMLInputElement;
      inp.style.top = spanElement.offsetTop+'px';
      box.scrollTop = spanElement.offsetTop;
    }
  }

  onBackspace() {
    if (this.typingProcess[this.wordIndex].letters.length === 0) {
      this.wordIndex > 0 ? this.wordIndex-- : this.wordIndex = 0;
      this.letterIndex = 0;
      if (this.wordIndex === 0) {
        if (this.typingProcess[this.wordIndex].letters.length === 0) {
          this.setCurrentWrote('');
        } else {
          this.setCurrentWrote(this.words[this.wordIndex])
        }
      } else {
        this.setCurrentWrote(this.words[this.wordIndex])
      }
    } else {
      if (this.currentWrote.length < this.words[this.wordIndex].length) {
        this.typingProcess[this.wordIndex].letters = this.typingProcess[this.wordIndex].letters.slice(0, this.currentWrote.length);
      }
    }
  }

  get currentWrote() {
    return this.formGroup.controls['wrote'].value;
  }

  setCurrentWrote(text: string) {
    this.formGroup.controls['wrote'].setValue(text);
  }

  onChange(wrote: string) {
    if(this.timeIsRunning == false) {
      this.startTimer();
      this.timeIsRunning = true;
    }
    if (wrote !== '') {
      this.characters++;
    }

    const letterIndex = wrote.length - 1;
    if (wrote.length <= this.words[this.wordIndex].length) {
      if (wrote === this.words[this.wordIndex].substr(0, wrote.length)) {
        this.typingProcess[this.wordIndex].status = "right";
      } else {
        this.typingProcess[this.wordIndex].status = "wrong";

        this.errors++;
        
        // make sound
        this.playSound();
      }

      if (letterIndex !== -1) {
        wrote[letterIndex] === this.words[this.wordIndex][letterIndex] ?
          this.typingProcess[this.wordIndex].letters[letterIndex] = true :
          this.typingProcess[this.wordIndex].letters[letterIndex] = false;
      }
    } else {
      this.formGroup.controls['wrote'].setValue(wrote.substr(0, this.words[this.wordIndex].length));
    }
    //console.log(this.formGroup);
    // Calculate Accuracy
    this.accuracy = 100-Math.round((this.errors/this.characters)*100);
    // Calculate WPM
    this.wpm = this.calculateSpeed(this.characters,this.timeTricker,this.errors);
    this.lwpm = this.wpm;
  }

  getbackfocus(e: any) {
    e.target.focus();
  }

  startTimer() {
    this.characters = 0;
    this.interval = setInterval(() => {
      if (this.timeTricker <= this.timeLimit) {
        this.minutes = Math.floor(this.timeTricker/60);
        this.seconds = this.timeTricker-(this.minutes*60);
        this.strTime = this.minutes +":"+ this.seconds.toString().padStart(2, '0');
        this.timeTricker +=1;
      } else {
        clearInterval(this.interval);
        this.strTime = "Time Out";
      }

    },1000)
  }

  getMembers(): any {
    if(this.users == undefined)
      return [];
    return this.users.objRoomForUser;
  }

  trackByFn(index:number, el:any) {
    return el.member;
  }

}
