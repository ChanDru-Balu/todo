import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsServicesComponent } from './forms-services.component';

describe('FormsServicesComponent', () => {
  let component: FormsServicesComponent;
  let fixture: ComponentFixture<FormsServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
