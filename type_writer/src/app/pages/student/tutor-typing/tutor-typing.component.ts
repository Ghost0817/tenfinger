import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/core/services/api.service';

@Component({
  selector: 'app-tutor-typing',
  templateUrl: './tutor-typing.component.html',
  styleUrls: ['./tutor-typing.component.scss']
})
export class TutorTypingComponent implements OnInit {

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

  wpm = 0;
  //whole
  lwpm = 0;
  // mistake count
  errors = 0;
  // it is only count current text value. 
  characters = 0;
  accuracy = 100;

  speedType = 'wpm';
  typingProcess: any = [];
  testIndex = 0;
  wordIndex = 0;
  letterIndex = 0;
  words: any;
  formGroup!: FormGroup;
  wrote = new FormControl("");
  timer: any = 0;


  private sub: any;
  lang: any;
  category: any;
  wallOfFame: any = {}
  
  constructor(private activatedRoute: ActivatedRoute,
    private api: ApiService) {
      
    activatedRoute.queryParams.subscribe(params => {
      console.log(params['lang']);
      console.log(params['category']);
      if(params['lang'] == "1-minute") {
      }
      if(params['category'] == "1-minute") {
      }
    });

    this.api.get('/wall-of-fame').subscribe((response: any) => {
      this.wallOfFame = response;
    });
  }

  ngOnInit(): void {
    this.sub = this.activatedRoute.params.subscribe(params => {
      this.lang = params['lang']; // (+) converts string 'id' to a number
      this.category = params['category'];
      this.lang = params['lang']; 
      // In a real app: dispatch action to load the details here.

      const body = {
        lang: params['lang'],
        category: params['category']
      }
      this.api.post('/exercise', body).subscribe((response: any) => {
        this.lessons = response;

        this.testIndex = 0;
        this.words = this.lessons[this.testIndex].tutor.split(" ").map((word: String) => {
          return word + " ";
        });
        this.formGroup = new FormGroup({
          wrote: new FormControl("")
        });
        this.formGroup.valueChanges.subscribe(change => {
          console.log(change);
          this.onChange(change.wrote);
        });
        this.words.forEach((word: any) => {
          this.typingProcess.push({word, status: 'unknown', letters: []});
        });

      });
    });
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

  getLetters(word: String) {
    return word.split("");
  }

  onChange(wrote: any) {
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
    console.log(this.formGroup)
    // Calculate Accuracy
    this.accuracy = 100-Math.round((this.errors/this.characters)*100);
    // Calculate WPM
    this.wpm = this.calculateSpeed(this.characters,this.timeTricker,this.errors);
    this.lwpm = this.wpm;
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

  setCurrentWrote(text: String) {
    this.formGroup.controls['wrote'].setValue(text);
  }

  getStatus() {
    const status = {missedWord: 0, missedLetter: 0};
    status.missedWord = this.typingProcess.filter((process: any) => process.status === 'wrong').length;
    this.typingProcess.filter((process: any) => process.status === 'wrong').forEach((process: any) => {
      status.missedLetter += process.letters.filter((letter: any) => letter === false).length;
    });
    return status;
  }

  getbackfocus(e: any) {
    e.target.focus();
  }

  interval: any;
  playSounds = true;

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

}
