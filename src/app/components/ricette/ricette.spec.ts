import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ricette } from './ricette';

describe('Ricette', () => {
  let component: Ricette;
  let fixture: ComponentFixture<Ricette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ricette],
    }).compileComponents();

    fixture = TestBed.createComponent(Ricette);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
