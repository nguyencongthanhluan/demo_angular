import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demobinding',
  templateUrl: './demobinding.component.html',
  styleUrls: ['./demobinding.component.css'],
})
export class DemobindingComponent implements OnInit {
  name: string = 'Hello';
  disabled: boolean = true;
  message: string = '';
  email: string = '';
  fullname: string = '';

  constructor() {}

  ngOnInit(): void {}

  changeName(name: any): void {
    this.name = name.value;
  }
  changeMessage(event: any): void {
    this.message = event.target.value;
  }
}
