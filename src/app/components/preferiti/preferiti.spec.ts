import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

import { Preferiti } from './preferiti';

describe('Preferiti', () => {
  let component: Preferiti;
  let fixture: ComponentFixture<Preferiti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Preferiti],
      providers: [provideHttpClient(), provideHttpClientTesting(), provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Preferiti);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
