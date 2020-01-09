import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';

import { AttacksComponent } from '../attacks/attacks.component';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.css']
})
export class BattleComponent implements OnInit {

  constructor(private _http: HttpClient,
    private _httpService: HttpService,
    private _router: Router) { }
  pokemon: any;
  wildPokemon: any;
  randNum: any;
  audioID: any;
  damage: any;
  enemyHealth: any;
  updateEnemyHealth: any;
  heroHealth: any;
  updateHeroHealth: any;
  message: any;
  caught: any;
  newPokemon: any;



  ngOnInit() {
    this.getWildPokemon();
    this.getMyPokemon();
    this.randNum;
    this.playAudio();
    this.updateEnemyHealth;
    this.updateHeroHealth;
  }


  getMyPokemon() {
    let obs = this._httpService.getPokemon();
    obs.subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon)
      this.updateHeroHealth = this.pokemon.stats[5].base_stat
    })
  }
  getWildPokemon() {
    let obs = this._httpService.getBadPokemon();
    obs.subscribe(data => {
      this.wildPokemon = data;
      console.log(this.wildPokemon.stats[5].base_stat)
      this.updateEnemyHealth = this.wildPokemon.stats[5].base_stat
      this.message = (`Its a ${this.wildPokemon.species.name}!`)
      this.faintAudio();
      this.newPokemon = {
        number: this.wildPokemon.id,
        name: this.wildPokemon.species.name,
        image: this.wildPokemon.sprites.front_default
      }
    })
  }
  playAudio() {
    this.audioID = document.getElementById("audio4");
    this.audioID.play();
  }
  attackAudio() {
    this.audioID = document.getElementById("audio6");
    this.audioID.play();
  }
  faintAudio() {
    this.audioID = document.getElementById("audio7");
    this.audioID.play();
  }

  heroAttacks() {
    this.damage = Math.floor(this.pokemon.stats[2].base_stat * .30);
    this.updateEnemyHealth -= this.damage;
    this.attackAudio();
    if (this.updateEnemyHealth <= 0) {
      this.updateEnemyHealth = 0;
      this.message = (`${this.pokemon.species.name} attacked ${this.wildPokemon.species.name} for ${this.damage} damage...  ${this.wildPokemon.species.name} has died!`);
      this.faintAudio();
      this.faintBadPokemon();
      setTimeout(() => {
        this._router.navigate(['/map']);
      }
        , 4000);
    }
    else {
      this.message = (`${this.pokemon.species.name} attacked ${this.wildPokemon.species.name} for ${this.damage} damage.... Ouchhh, thats gotta hurt! `);
      setTimeout(() => {
        this.enemyAttacks();
      }
        , 5000);
    }
  }
  enemyAttacks() {
    this.damage = Math.floor(this.wildPokemon.stats[2].base_stat * .30);
    this.updateHeroHealth -= this.damage;
    this.attackAudio();
    if (this.updateHeroHealth <= 0) {
      this.updateHeroHealth = 0;
      this.message = (`${this.wildPokemon.species.name} attacked your ${this.pokemon.species.name} for ${this.damage} damage...  your ${this.pokemon.species.name} has died!`);
      this.faintAudio();
      this.faintMyPokemon();
      setTimeout(() => {
        this._router.navigate(['/map']);
      }
        , 4000);
    }
    else {
      this.message = (`${this.wildPokemon.species.name} attacked your ${this.pokemon.species.name} for ${this.damage} damage! `);
    }
  }

  catchPokemon() {
    var element = document.getElementById("pokeball");
    element.classList.remove("hidden");
    element.classList.toggle("pokeball");
    var rand = this.getRandomInt(2)
    if (rand == 1) {
      this.caught = true;
    }
    else {
      this.caught = false;
    }
    if (this.caught == true) {
      setTimeout(() => {
        var element2 = document.getElementById("toppic");
        element2.classList.toggle("caught");
        this.message = (`Congratulations.... the wild ${this.wildPokemon.species.name} was caught!`)
        this.showAddToCollection();
      }, 2000);
    }
    else {
      setTimeout(() => {
      this.message = (`The wild ${this.wildPokemon.species.name} got away!`)
    }, 2500);
      setTimeout(() => {
        this._router.navigate(['/map'])
      }, 4000);
    }

  }
  faintBadPokemon() {
    var element = document.getElementById("toppic");
    element.classList.toggle("fadeOut");
  }
  faintMyPokemon() {
    var element = document.getElementById("btmpic");
    element.classList.toggle("fadeOut");
  }
  showAddToCollection() {
    var element = document.getElementById("capture");
    element.classList.toggle("hidden");
  }
  addPokemon() {
    let obs = this._httpService.catchWildPokemon(this.newPokemon);
    obs.subscribe(data => {
      if (data['results']) {
        this._router.navigate(['/list'])
      }
    })
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}


