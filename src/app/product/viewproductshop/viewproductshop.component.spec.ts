import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewproductshopComponent } from './viewproductshop.component';

describe('ViewproductshopComponent', () => {
  let component: ViewproductshopComponent;
  let fixture: ComponentFixture<ViewproductshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewproductshopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewproductshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
