import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Error } from '../../models/error.interface';

@Injectable({
	providedIn: 'root'
})
export class ErrorService {

	error = new BehaviorSubject<Error>({
		icon: '',
		title: '',
		description: '',
		link: ''
	});

	errors = new Map([
		[
			'GENERIC',
			{
				icon: '',
				title: '',
				description: '',
				link: ''
			}
		],
		[
			'WHITOUT_CARDS',
			{
				icon: '',
				title: '',
				description: '',
				link: ''
			}
		]
	]);

	constructor(private router: Router) { }

	setError(error: string = 'GENERIC'): void {
		this.errors.forEach((value: Error, key: string) => {
			if(key === error) {
				this.error.next(value);
			}
		});
	}

}
