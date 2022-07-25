import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message-detail',
  templateUrl: './message-detail.component.html',
  styleUrls: ['./message-detail.component.scss']
})
export class MessageDetailComponent implements OnInit {
  message!: Message;

  constructor(
    private route: ActivatedRoute,
    private msgService: MessageService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      let id = '';
      if (param['id']) {
        id = param['id'];
        // this.getMsg(id);
        this.setread(id)
      }
    })
  }

  getMsg(id: string) {
    this.msgService.getMsg(id).subscribe((res) => {
      this.message = res
    })
  }

  setread(id: string) {
    this.msgService.setRead(id).subscribe((res) => {
      this.message = res;
    })
  }


}
