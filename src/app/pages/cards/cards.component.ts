import { LoadingService } from './../../shared/services/loading/loading.service';
import { Card } from './../../shared/models/card.interface';
import { ErrorService } from './../../shared/services/error/error.service';
import { CardsService } from './../../shared/services/cards/cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cards: Card[] = [];

  constructor(
    private cardsService: CardsService,
    private errorService: ErrorService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards(page: number = 1, pageSize: number = 10): void {
    this.cardsService.getCards(page, pageSize).subscribe(
      (cards: Card[]) => {
        console.log(cards)
      },

      (error) => {

      }
    );
  }

}
