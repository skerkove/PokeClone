import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpClient } from '@angular/common/http';
import { Toppy } from 'toppy';



@Component({
  selector: 'app-attacks',
  templateUrl: './attacks.component.html',
  styleUrls: ['./attacks.component.css']
})
export class AttacksComponent implements OnInit {

  constructor(private _http: HttpClient,
    private _httpService: HttpService, ) { }
  pokemon: any;
  ModalService:any;
  ngOnInit() {
    this.getAttacks();
  }

  getAttacks() {
    let obs = this._httpService.getPokemon();
    obs.subscribe(data => {
      this.pokemon = data;
      console.log(this.pokemon)
    })
  }
  

}












