import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { TddAppComponent } from '../app/tdd.component';

beforeEachProviders(() => [TddAppComponent]);

describe('App: Tdd', () => {
  it('should create the app',
      inject([TddAppComponent], (app: TddAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'tdd works!\'',
      inject([TddAppComponent], (app: TddAppComponent) => {
    expect(app.title).toEqual('tdd works!');
  }));
});
