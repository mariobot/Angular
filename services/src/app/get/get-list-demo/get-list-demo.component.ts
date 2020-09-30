import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-get-list-demo',
  templateUrl: './get-list-demo.component.html',
  styleUrls: ['./get-list-demo.component.css']
})
export class GetListDemoComponent implements OnInit {

  users : User[];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((usersapi : User[]) => {
      this.users = usersapi
    },(error: any) =>{
      console.log(error);
    });
  }
}
