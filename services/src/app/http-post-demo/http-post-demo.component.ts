import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-http-post-demo',
  templateUrl: './http-post-demo.component.html',
  styleUrls: ['./http-post-demo.component.css'],
})
export class HttpPostDemoComponent implements OnInit {
  model: User = { id: 0, name: '', username: '' };

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    // console.log(this.model);
    this.userService
      .createUser(this.model)
      .subscribe((response: User) => console.log(response));
  }
}
