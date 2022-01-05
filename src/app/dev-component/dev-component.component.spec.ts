import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevComponentComponent } from './dev-component.component';

describe('DevComponentComponent', () => {
  let component: DevComponentComponent;
  let fixture: ComponentFixture<DevComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
