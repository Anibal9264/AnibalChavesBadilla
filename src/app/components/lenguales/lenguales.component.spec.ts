import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengualesComponent } from './lenguales.component';

describe('LengualesComponent', () => {
  let component: LengualesComponent;
  let fixture: ComponentFixture<LengualesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengualesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengualesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
