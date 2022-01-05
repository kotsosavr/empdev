import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultcompComponent } from './defaultcomp.component';

describe('DefaultcompComponent', () => {
  let component: DefaultcompComponent;
  let fixture: ComponentFixture<DefaultcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultcompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
