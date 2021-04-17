import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  public data: any = {
    title: "Якась лікарня",
    options: [
      {
        title: "hello1",
        value: "hello"
      },
      {
        title: "hello2",
        value: "hello"
      },
      {
        title: "hello3",
        value: "hello"
      },
      {
        title: "hello4",
        value: "hello"
      },
    ]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
