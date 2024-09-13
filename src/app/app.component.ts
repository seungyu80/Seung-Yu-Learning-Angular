import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from "./models/user";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Seung Yu';
  course :string = 'Javascript Frameworks';
  section :string = '001'

  titleAssignment2: string = 'User Generation';
  //user1: User = {userId: 1, firstName: "Seung", lastName: "Yu", phoneNumber: "2261111000", isAdmin: true};
  userList: User[] = [
    {userId: 1, firstName: "Seung", lastName: "Yu", phoneNumber: "2261111000", isAdmin: true},
    {userId: 2, firstName: "Lebron ", lastName: "James", phoneNumber: "2261111001", isAdmin: false},
    {userId: 3, firstName: "Stephen", lastName: "Curry", phoneNumber: "2261111002", isAdmin: false},
    {userId: 4, firstName: "Kevin", lastName: "Durant", phoneNumber: "2261111003", isAdmin: false},
    {userId: 5, firstName: "Shohei", lastName: "Ohtani", phoneNumber: "2261111004", isAdmin: false},
    {userId: 6, firstName: "Mike", lastName: "Trout", phoneNumber: "2261111005", isAdmin: false}
  ];
}
