import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MybillshopComponent } from './mybillshop.component';

describe('MybillshopComponent', () => {
  let component: MybillshopComponent;
  let fixture: ComponentFixture<MybillshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MybillshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MybillshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
