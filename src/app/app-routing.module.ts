import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ 	
		path: '', 
		pathMatch: 'full', 
		redirectTo: 'cards'	
	},
  { 
    path: 'cards', 
    loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
