import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewproductbyidComponent } from './adminviewproductbyid.component';

describe('AdminviewproductbyidComponent', () => {
  let component: AdminviewproductbyidComponent;
  let fixture: ComponentFixture<AdminviewproductbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewproductbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewproductbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
