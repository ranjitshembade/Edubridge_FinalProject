import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultnavbarComponent } from './defaultnavbar.component';

describe('DefaultnavbarComponent', () => {
  let component: DefaultnavbarComponent;
  let fixture: ComponentFixture<DefaultnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefaultnavbarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DefaultnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
