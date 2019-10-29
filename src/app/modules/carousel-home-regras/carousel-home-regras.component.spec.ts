import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHomeRegrasComponent } from './carousel-home-regras.component';

describe('CarouselHomeRegrasComponent', () => {
  let component: CarouselHomeRegrasComponent;
  let fixture: ComponentFixture<CarouselHomeRegrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselHomeRegrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselHomeRegrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
