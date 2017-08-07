import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-nick',
  templateUrl: './nick.component.html',
  styleUrls: ['./nick.component.css']
})
export class NickComponent implements OnInit {
  private user: User = new User();

  constructor(private router: Router) {}

  save(value: any) {
    this.router.navigateByUrl('user/' + value.name);
  }
  ngOnInit() {
  }

}
