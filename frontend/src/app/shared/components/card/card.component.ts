import { Component, Input, OnInit } from '@angular/core';

export class Card {
  title!: string;
  subtitle?: string;
  content!: string;
  image?: string;
  muted!: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card!: Card;
  constructor() { }

  ngOnInit(): void {
    this.card = {
      title: 'Text title',
      subtitle: 'subtitle',
      content: 'The card content and much more ...',
      image: 'https://www.w3schools.com/howto/img_avatar2.png',
      muted: 'muted text'
    }
  }

}
