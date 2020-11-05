import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBooksComponent } from './dash-books.component';

describe('DashBooksComponent', () => {
  let component: DashBooksComponent;
  let fixture: ComponentFixture<DashBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
