import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialEmployeeComponent } from './material-employee.component';

describe('MaterialEmployeeComponent', () => {
  let component: MaterialEmployeeComponent;
  let fixture: ComponentFixture<MaterialEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
