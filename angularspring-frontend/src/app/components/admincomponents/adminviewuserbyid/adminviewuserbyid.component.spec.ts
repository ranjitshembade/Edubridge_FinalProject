import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewuserbyidComponent } from './adminviewuserbyid.component';

describe('AdminviewuserbyidComponent', () => {
  let component: AdminviewuserbyidComponent;
  let fixture: ComponentFixture<AdminviewuserbyidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewuserbyidComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewuserbyidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
