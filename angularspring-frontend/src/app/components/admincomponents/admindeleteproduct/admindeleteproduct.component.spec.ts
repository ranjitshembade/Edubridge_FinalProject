import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmindeleteproductComponent } from './admindeleteproduct.component';

describe('AdmindeleteproductComponent', () => {
  let component: AdmindeleteproductComponent;
  let fixture: ComponentFixture<AdmindeleteproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdmindeleteproductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmindeleteproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
