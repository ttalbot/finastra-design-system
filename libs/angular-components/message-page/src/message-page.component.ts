import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';

export interface MessagePageItemWEvent {
  value: any;
  $event: MouseEvent;
}

@Component({
  selector: 'uxg-message-page',
  templateUrl: './message-page.component.html',
  styleUrls: ['./message-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MessagePageComponent implements OnInit {
  @Input() title = 'This is a title';
  @Input() subtitle = 'This is a subtitle';
  @Input() description = 'This is a description';
  @Input() redirectLink = '';
  @Input() redirectLabel = 'This is a label';
  @Input() backLabel = 'back';
  @Input() autoRedirect?: boolean;
  @Input() imgClass= '';

  @Output() itemClick = new EventEmitter<MessagePageItemWEvent>();

  ngOnInit() {}
}

