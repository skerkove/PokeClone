import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _router: Router
  ) { }
  allPokemon: any;

  ngOnInit() {
    this.getAllPokemonFromService();
    
  }
  
  getAllPokemonFromService() {
    let obs = this._httpService.getAllPokemonNum();
    obs.subscribe(data => {
      if (data['results']) {
        this.allPokemon = data['results'];

      }
    })

  }
}