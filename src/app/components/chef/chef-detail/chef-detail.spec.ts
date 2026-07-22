import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefDetailComponent } from './chef-detail-component';

describe('ChefDetailComponent', () => {
  let component: ChefDetailComponent;
  let fixture: ComponentFixture<ChefDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChefDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ChefDetailComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
