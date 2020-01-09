import { Component, OnInit, HostListener, OnChanges } from '@angular/core';
import { HttpService } from "../http.service";
import { Router } from '@angular/router';


export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37,
  UP_ARROW = 38,
  DOWN_ARROW = 40,
  
 
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor(
    private _httpService: HttpService,
    private _router: Router) { }
  audio: any;
  audioID: any;
  world: any;
  step = 1;
  trainer = {
    x: 0,
    y: 4
  }
  output = "";
  direction = "right";
  ngOnInit() {
    this.world = [

      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 3, 1, 1, 1, 1, 2, 2, 3, 3, 3, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 3, 1, 2, 2, 1, 2, 2, 3, 3, 3, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 3, 1, 3, 2, 1, 2, 2, 3, 3, 3, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [1, 1, 1, 1, 2, 2, 1, 2, 2, 2, 1, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 2, 2, 1, 1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 2, 3, 1, 3, 1, 3, 2, 2, 3, 3, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 3, 2, 3, 1, 1, 1, 3, 3, 3, 3, 3, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      // [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],


    ];
    this.displayWorld();
    this.playAudio();
    this.displaytrainer();
  }


  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.LEFT_ARROW && this.world[this.trainer.y][this.trainer.x - 1] != 2) {
      this.trainer.x--;
      this.direction = 'left';
    }
    if (event.keyCode === KEY_CODE.RIGHT_ARROW && this.world[this.trainer.y][this.trainer.x + 1] != 2) {
      this.trainer.x++;
      this.direction = 'right';
    }
    if (event.keyCode === KEY_CODE.UP_ARROW && this.world[this.trainer.y - 1][this.trainer.x] != 2) {
      this.trainer.y--;
      this.direction = 'top';
    }
    if (event.keyCode === KEY_CODE.DOWN_ARROW && this.world[this.trainer.y + 1][this.trainer.x] != 2) {
      this.trainer.y++;
      this.direction = 'down';
    }
    if (this.world[this.trainer.y][this.trainer.x] == 1) {
      this.stopFlash();
    }
    if (this.world[this.trainer.y][this.trainer.x] == 4) {
      this._router.navigate(['/list'])

    }
    if (this.world[this.trainer.y][this.trainer.x] == 3) {
      var rand = this.getRandomInt(7);
      console.log(rand);
      {
        if (rand == 2) {
          this.stopFlash();
          this.flash();
          setTimeout(() => {
            this._router.navigate(['/battle'])
          }
            , 750);

        }
        else {
          this.stopFlash();
        }
      }
    }
    this.displaytrainer();
  }

  playAudio() {
    this.audioID = document.getElementById("audio1");
    this.audioID.play();
  }
  stopFlash() {
    var element = document.getElementById("container");
    element.classList.remove("flashit");
  }

  displaytrainer() {
    if (this.step == 1) {
      this.step = 2;
    } else {
      this.step = 1;
    }
    document.getElementById('trainer').style.top = this.trainer.y * 40 + "px";
    document.getElementById('trainer').style.left = this.trainer.x * 40 + "px";
    document.getElementById("trainer").style.backgroundImage = "url('../../assets/imgs/" + this.direction + this.step + ".png')";
  }
  displayWorld() {
    for (var i = 0; i < this.world.length; i++) {
      this.output += "<div class='row'>\n"
      for (var j = 0; j < this.world[i].length; j++) {
        if (this.world[i][j] == 2) {
          this.output += "<div class ='grass'></div>";
        }
        if (this.world[i][j] == 1) {
          this.output += "<div class ='path'></div>";
        }
        if (this.world[i][j] == 3) {
          this.output += "<div class ='grass2'></div>";
        }
        if (this.world[i][j] == 0) {
          this.output += "<div class ='empty'></div>";
        }
        if (this.world[i][j] == 4) {
          this.output += "<div class ='building'></div>";
        }
        if (this.world[i][j] == 5) {
          this.output += "<div class ='water'></div>";
        }
      }
      this.output += "\n</div>";
    }
    document.getElementById('world').innerHTML = this.output;
  }

  flash() {
    var element = document.getElementById("container");
    element.classList.toggle("flashit");
  }
  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

}


