import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cellule } from './cellule';

describe('Cellule', () => {
  let component: Cellule;
  let fixture: ComponentFixture<Cellule>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cellule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Cellule);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
