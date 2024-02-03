import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloginpageComponent } from './userloginpage.component';

describe('UserloginpageComponent', () => {
  let component: UserloginpageComponent;
  let fixture: ComponentFixture<UserloginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserloginpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserloginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
