import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MessageComponent } from './message.component';

describe('Component: Message', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [MessageComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([MessageComponent],
      (component: MessageComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(MessageComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(MessageComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

describe('Testing message state in message.component', () => {
  beforeEach(() => {
    this.app = new MessageComponent();
  });
  
  it('should clear the message on Init', () => {
    this.app.ngOnInit();
    expect(this.app.message).toBe('');
  });
  
  it('should set new message', () => {
    this.app.setMessage('Testing');
    expect(this.app.message).toBe('Testing');
  });
  
  it('should clear the message', () => {
    this.app.clearMessage();
    expect(this.app.message).toBe('');
  });  
});

@Component({
  selector: 'test',
  template: `
    <app-message></app-message>
  `,
  directives: [MessageComponent]
})
class MessageComponentTestController {
}

