import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetailProductComponent } from './show-detail-product.component';

describe('ShowDetailProductComponent', () => {
  let component: ShowDetailProductComponent;
  let fixture: ComponentFixture<ShowDetailProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowDetailProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetailProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
