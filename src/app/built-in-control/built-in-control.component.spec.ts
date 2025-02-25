import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuiltInControlComponent } from './built-in-control.component';

describe('BuiltInControlComponent', () => {
  let component: BuiltInControlComponent;
  let fixture: ComponentFixture<BuiltInControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuiltInControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuiltInControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
