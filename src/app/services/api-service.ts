import { Injectable } from '@angular/core'
import  { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { IPokemon } from '../interfaces/pokemon.interface';
import { IResponseRepositoryWS } from '../interfaces/api-response.interface';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(
    private http: HttpClient,
  ) { }
  private baseUrl = AppSettings.API_ENDPOINT;

  public getUsers() {

  }

  public getPokemon(pokeId: number): Observable<any> {
    const url: string = `https://pokeapi.co/api/v2/pokemon/${pokeId}/`;
    return this.http.get(url);
  }

  public getPokemonImageURL(pokeId: number) {
    const imageURL: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png/`;
    return imageURL;
  }

  public getPokeUsers(): Observable<IResponseRepositoryWS> {
    const url = this.baseUrl + "/allPokemons";
    // return this.http.get<IResponseRepositoryWS>(url).pipe(
    //   catchError( err => of(undefined))
    // );
    return this.http.get<IResponseRepositoryWS>(url)
  }

}
