import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { Chef } from './chef';

describe('Chef', () => {
  let component: Chef;
  let fixture: ComponentFixture<Chef>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chef],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Chef);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
