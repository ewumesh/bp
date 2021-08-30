import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    RouterModule.forRoot([
      {path: 'home', loadChildren: () => import('./modules/home/home.module').then(r => r.HomeModule) },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: '**', redirectTo: '404' },
      { path: '*', redirectTo: 'notfound' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
