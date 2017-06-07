import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StripeNavComponent } from './stripe-nav.component';

describe('StripeNavComponent', () => {
  let component: StripeNavComponent;
  let fixture: ComponentFixture<StripeNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StripeNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StripeNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
