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
  addMessageState: boolean = false;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.getMessages().subscribe(data => {
      this.messages = data;
    });
    this.today = Date.now();
    //console.log("just today " this.today);
  }

  addingMessage() {
    this.addMessageState = !this.addMessageState;
  }

  saveMessage() {
    if (this.newMessage.userName == null) {
      window.alert("You must enter a name to post a message");
    }
    else if (this.newMessage.messageText == null) {
      window.alert("You do realise that you have not entered a message right?");
    }
    else {
      this.newMessage.postTime = "0001-01-01";
      this.messageService.postMessage(this.newMessage).subscribe();
      location.reload();
    }

  }
}
