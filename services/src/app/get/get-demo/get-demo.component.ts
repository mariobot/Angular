import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-get-demo',
  templateUrl: './get-demo.component.html',
  styleUrls: ['./get-demo.component.css']
})
export class GetDemoComponent implements OnInit {

  notFound = false;
  user: User;

  constructor(private serviceUser: UserService ) { }

  ngOnInit(): void {
  }

  getUser(userId: string){
    this.notFound = false;
    this.user = null;
    this.serviceUser.getUser(userId).subscribe((userfromapi : User) => 
      {
        this.user = userfromapi;
      }, (error: any) => 
      {
        console.log(error);
        this.notFound = true;
      }
    )
  }



}
