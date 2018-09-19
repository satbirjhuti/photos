import { async } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(async(() => {
    component = new AppComponent();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'photos'`, async(() => {
    expect(component.title).toEqual('Photos');
  }));
});
