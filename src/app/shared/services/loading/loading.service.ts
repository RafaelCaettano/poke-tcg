import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingService {
	
	loading = new BehaviorSubject<Boolean>(false);

	start(): void {
		this.loading.next(true);
	}

	stop(): void {
		this.loading.next(false)
	}

}
