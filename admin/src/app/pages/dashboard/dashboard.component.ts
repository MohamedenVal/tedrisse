import { Component, OnInit } from '@angular/core';
import { DashService } from 'src/app/services/dash.service';

export interface Stat {
  name: string;
  count: number;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats: Stat[] = [];

  constructor(private dashService: DashService) { }

  ngOnInit(): void {
    this.getCount();
  }

  getCount() {
    this.dashService.postCount()
      .subscribe((res) => {
        this.stats.push(
          { name: 'Posts', count: res }
        )
      });
    this.dashService.categoryCount()
      .subscribe((res) => {
        this.stats.push(
          { name: 'Categories', count: res }
        )
      });

    this.dashService.courseCount()
      .subscribe((res) => {
        this.stats.push(
          { name: 'Courses', count: res }
        )
      });

    this.dashService.lessonCount()
      .subscribe((res) => {
        this.stats.push(
          { name: 'Lessons', count: res }
        )
      })

    this.dashService.messageCount()
      .subscribe((res) => {
        this.stats.push(
          { name: 'Unread Messages', count: res.length }
        )
      })
  }

}
