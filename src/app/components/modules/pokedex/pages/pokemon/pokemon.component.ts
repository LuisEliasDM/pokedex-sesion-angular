import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {
  public id: number = 0;
  public pokemon!: any;

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = parseInt(params['id']);
    })

    this.activatedRoute.data.subscribe(response => {
      this.pokemon = response['pokemon']
      console.log(this.pokemon);
    })
  }

  getNextId(){
    return this.id + 1;
  }

  getPreviusId(){
    return this.id - 1;
  }

}
