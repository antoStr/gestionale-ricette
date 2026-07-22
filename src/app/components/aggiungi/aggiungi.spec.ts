import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aggiungi } from './aggiungi';

describe('Aggiungi', () => {
  let component: Aggiungi;
  let fixture: ComponentFixture<Aggiungi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aggiungi],
    }).compileComponents();

    fixture = TestBed.createComponent(Aggiungi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
