import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Message, MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  form!: FormGroup;
  isSubmited = false;
  message!: Message;
  success = false;

  constructor(
    private formBuilder: FormBuilder,
    private messagesService: MessagesService,
    private title: Title
  ) { }

  ngOnInit(): void {
    this.initform()
    this.title.setTitle('تواصل معنا | تدريس')
  }

  onSubmit() {
    this.isSubmited = true;
    if(this.form.invalid) return;

    const messageFormData = new FormData();

    Object.keys(this.messageForm).map( (key) => {
      messageFormData.append(key, this.messageForm[key].value);
    })

    this.messagesService.createMessgae(messageFormData)
      .subscribe((res) => {
        this.success = true;
        this.message = res;
      })

  }

  private initform() {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  get messageForm() {
    return this.form.controls;
  }

}
