import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingSplashComponent } from './bing-splash.component';

describe('BingSplashComponent', () => {
  let component: BingSplashComponent;
  let fixture: ComponentFixture<BingSplashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingSplashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingSplashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
