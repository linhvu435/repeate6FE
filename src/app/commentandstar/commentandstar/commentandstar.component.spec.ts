import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentandstarComponent } from './commentandstar.component';

describe('CommentandstarComponent', () => {
  let component: CommentandstarComponent;
  let fixture: ComponentFixture<CommentandstarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentandstarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentandstarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
