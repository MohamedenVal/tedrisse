import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  i = 0;
  slides = [
    {
      image: 'assets/slider/coding.jpg',
      title: 'First title',
      highlight: 'Highlight text text tex ....'
    },
    {
      image: 'assets/slider/laptop.jpg',
      title: 'Second title',
      highlight: 'Highlight text text tex ....'
    },
    {
      image: 'assets/slider/laptop2.jpg',
      title: 'Third title',
      highlight: 'Highlight text text tex ....'
    },
  ]
  constructor() { }

  ngOnInit(): void {
    // this.changesSlide();
  }

  public changesSlide(sign: number = 1) {
    this.i = this.i + sign;
    if( this.i >= this.slides.length || this.i < 0) {
      this.i = 0;
    }
  }
}
