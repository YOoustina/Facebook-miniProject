import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListingComponentComponent } from './post-listing-component.component';

describe('PostListingComponentComponent', () => {
  let component: PostListingComponentComponent;
  let fixture: ComponentFixture<PostListingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
