import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSettimanale } from './menu-settimanale';

describe('MenuSettimanale', () => {
  let component: MenuSettimanale;
  let fixture: ComponentFixture<MenuSettimanale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSettimanale],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuSettimanale);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
