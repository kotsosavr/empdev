import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevEditComponent } from './dev-edit.component';

describe('DevEditComponent', () => {
  let component: DevEditComponent;
  let fixture: ComponentFixture<DevEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
