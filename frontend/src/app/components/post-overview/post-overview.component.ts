import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-overview',
  templateUrl: './post-overview.component.html',
  styleUrls: ['./post-overview.component.css']
})
export class PostOverviewComponent implements OnInit {

  @Input() post!: any;
  constructor() { }

  ngOnInit(): void {
  }

}
