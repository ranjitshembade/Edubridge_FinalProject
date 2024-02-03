import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductspageComponent } from './productspage.component';

describe('ProductspageComponent', () => {
  let component: ProductspageComponent;
  let fixture: ComponentFixture<ProductspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
