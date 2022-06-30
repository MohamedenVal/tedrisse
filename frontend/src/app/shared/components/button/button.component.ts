import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'td-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  buttonText!: string;

  @Input()
  set text(name: string) {
    this.buttonText = name;
  }

  get name(): string {
    return this.buttonText;
  }

  @Input() color: string = '';
  @Input() type: string = 'button';
  @Input() disabled = false;

  @Output() btnClick = new EventEmitter();


  constructor() { }

  onClick() {
    this.btnClick.emit();
  }

}
