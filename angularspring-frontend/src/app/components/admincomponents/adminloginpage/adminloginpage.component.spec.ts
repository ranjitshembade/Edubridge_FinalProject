import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginpageComponent } from './adminloginpage.component';

describe('AdminloginpageComponent', () => {
  let component: AdminloginpageComponent;
  let fixture: ComponentFixture<AdminloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminloginpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
