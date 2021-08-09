import { LoadingService } from './../../services/loading/loading.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {

  loading$ = this.loadingService.loading;

  constructor(private loadingService: LoadingService) { }

}
