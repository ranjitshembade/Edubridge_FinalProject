import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserloggedindashboardComponent } from './userloggedindashboard.component';

describe('UserloggedindashboardComponent', () => {
  let component: UserloggedindashboardComponent;
  let fixture: ComponentFixture<UserloggedindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserloggedindashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserloggedindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
