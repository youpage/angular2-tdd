import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css']
})
export class MessageComponent implements OnInit {
  
  private message:string = '';

  constructor() {}

  ngOnInit() {
    this.clearMessage();
  }
  
  clearMessage(){
    this.message = '';
  }
  
  setMessage(newMessage:string){
    this.message = newMessage;
  }
  

}
