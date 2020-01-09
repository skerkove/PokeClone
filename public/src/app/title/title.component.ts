import { Component, OnInit, HostListener } from '@angular/core';
import { HttpService } from "../http.service";

export enum KEY_CODE {
  ONE = 49,
  TWO = 50,
  THREE = 51,
  FOUR = 52,
  FIVE = 53,
  SIX = 54,
}

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  audioID: any;

  ngOnInit() {
    this.pulse();
    this.playAudio();

  }
  playAudio() {
    this.audioID = document.getElementById("audio5");
    this.audioID.play();
  }
  pulse() {
    var element = document.getElementById("nodemon");
    element.classList.toggle("pulseit");
    element.classList.toggle("pulseend");

  }
  extend() {
    var element = document.getElementById("menu");
    element.classList.toggle("extend");
    element.classList.toggle("extendend");
  }

  @HostListener('window:keydown', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.keyCode === KEY_CODE.ONE) {
      this.audioID.pause();
      this.audioID = document.getElementById("audio1");
      this.audioID.play();
    }
    if (event.keyCode === KEY_CODE.TWO) {
      this.audioID.pause();
      this.audioID = document.getElementById("audio2");
      this.audioID.play();
    }
    if (event.keyCode === KEY_CODE.THREE) {
      this.audioID.pause();
      this.audioID = document.getElementById("audio3");
      this.audioID.play();
    }
    if (event.keyCode === KEY_CODE.FOUR) {
      this.audioID.pause();
      this.audioID = document.getElementById("audio4");
      this.audioID.play();
    }
    if (event.keyCode === KEY_CODE.FIVE) {
      this.audioID.pause();
      this.audioID = document.getElementById("audio5");
      this.audioID.play();
    }
  }
}


