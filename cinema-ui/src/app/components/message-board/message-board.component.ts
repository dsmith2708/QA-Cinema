import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-message-board',
  templateUrl: './message-board.component.html',
  styleUrls: ['./message-board.component.css']
})

export class MessageBoardComponent implements OnInit {
  messages: Array<any>;
  newMessage: {[k: string]: any} = {};
  today: any;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe(data => {
      this.messages = data;
    });
    this.today = Date.now();
    console.log("just today " this.today);
    //console.log("attempted pipe " this.today | date);
  }


  saveMessage() {
    this.newMessage.postTime = "2018-04-04";
    this.messageService.postMessage(this.newMessage).subscribe();
    console.log(this.newMessage.userName);
  }
}
