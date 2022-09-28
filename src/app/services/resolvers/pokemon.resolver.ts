import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<boolean> {
  constructor(private httpClient: HttpClient){
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const pokemonId: number = route.params['id'];
    const url: string = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;
    return this.httpClient.get(url);
  }
}
