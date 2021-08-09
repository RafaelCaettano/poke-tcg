import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {
	
	loading = new BehaviorSubject<Boolean>(false);

	start(): void {
		console.log('START LOADING');
		this.loading.next(true);
	}

	stop(): void {
		console.log('STOP LOADING');
		this.loading.next(false)
	}

}
