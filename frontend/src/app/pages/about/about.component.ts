import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  countries = [
    {
      value: 'Mauritania',
      name: 'موريتانيا'
    },
    {
      value: 'Algeria',
      name: 'الجزائر'
    },
    {
      value: 'Marroco',
      name: 'المغرب'
    },
    {
      value: 'Tunisia',
      name: 'تونس'
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
