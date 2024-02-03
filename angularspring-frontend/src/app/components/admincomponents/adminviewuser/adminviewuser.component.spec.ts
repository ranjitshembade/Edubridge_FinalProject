import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewuserComponent } from './adminviewuser.component';

describe('AdminviewuserComponent', () => {
  let component: AdminviewuserComponent;
  let fixture: ComponentFixture<AdminviewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminviewuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminviewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
