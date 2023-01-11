import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproductshopComponent } from './myproductshop.component';

describe('MyproductshopComponent', () => {
  let component: MyproductshopComponent;
  let fixture: ComponentFixture<MyproductshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyproductshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyproductshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
