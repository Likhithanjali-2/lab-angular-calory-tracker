import { Component, OnInit } from '@angular/core';
import { items } from './../../items';
import { foodItems } from './../../foodItems';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: foodItems[];
  newItem: any = {};
  constructor() {}

  ngOnInit(): void {
    this.items = items;
  }
}
