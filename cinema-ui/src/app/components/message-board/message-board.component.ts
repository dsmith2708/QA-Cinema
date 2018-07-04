import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})

export class MessageBoardComponent implements OnInit {
  messages: Array<any>;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe(data => {
      this.messages = data;
    });
  };
}
