import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineRoomComponentComponent } from './online-room-component.component';

describe('OnlineRoomComponentComponent', () => {
  let component: OnlineRoomComponentComponent;
  let fixture: ComponentFixture<OnlineRoomComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnlineRoomComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnlineRoomComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
