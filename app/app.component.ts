import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { DialogService }  from './dialog.service';
import { HeroService }    from './heroes/hero.service';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="title">Component Router</h1>
    <nav>
      <a routerLink="/crisis-center" routerLinkActive="active"
         [routerLinkActiveOptions]="{ exact: true }">Crisis Center</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/crisis-center/admin" routerLinkActive="active">Crisis Admin</a>
      <a routerLink="/login" routerLinkActive="active">Login</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  providers:  [
    HeroService,
    DialogService
  ],
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/