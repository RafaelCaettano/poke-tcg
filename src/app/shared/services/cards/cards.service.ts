import { Card } from './../../models/card.interface';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { POKEMON_TCG_API } from '../../consts/pokemonTcg.api';
import { retry, map, catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getCards(page: number = 1, pageSize: number = 10): Observable<Card[]> {
    return this.http.get<PokemonTCGResponse>(`${POKEMON_TCG_API}/cards?pageSize=${pageSize}&page=${page}`)
      .pipe(
        retry(3),
        map(({ data }: PokemonTCGResponse) => {
          if (data.length <= 0) {
            this.errorService.setError('WHITOUT_CARDS');
          }
          return data
        }),
				catchError((error: Error) => {
					this.errorService.setError(error.name);
					return throwError(error);
				}),
      )
  }
}

interface PokemonTCGResponse {
  data: Card[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
