import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowfooterComponent } from './showfooter.component';

describe('ShowfooterComponent', () => {
  let component: ShowfooterComponent;
  let fixture: ComponentFixture<ShowfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
