import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from 'src/app/models/message.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-messgaes',
  templateUrl: './messgaes.component.html',
  styleUrls: ['./messgaes.component.scss']
})
export class MessgaesComponent implements OnInit {
  messages!: Observable<Message[]>;

  constructor(
    private mesService: MessageService,
  ) { }

  ngOnInit(): void {
    this.getMessages()
  }

  getMessages() {
    this.messages = this.mesService.getMessages();
  }

}
