import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework1',
  templateUrl: './homework1.component.html',
  styleUrls: ['./homework1.component.css'],
})
export class Homework1Component implements OnInit {
  users = [
    {
      firstName: 'Giorgi',
      lastName: 'Kuprashvili',
      about: 'smthing',
      birthDate: 2001,
      status: 'active',
    },
    {
      firstName: 'Giorgi2',
      lastName: 'Kuprashvili2',
      about: 'smthing2',
      birthDate: 2000,
      status: 'notActive',
    },
    {
      firstName: 'Giorgi3',
      lastName: 'Kuprashvili3',
      about: 'smthing3',
      birthDate: 2003,
      status: 'disabled',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
