import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import {User} from './user';
import { ChatComponent } from './chat/chat.component';
import { NickComponent } from './nick/nick.component';

const appRoutes: Routes = [
  { path: '', component: NickComponent },
  {
    path: 'user/:name',
    component: ChatComponent,
    data: { title: 'Heroes List' }
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    NickComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
