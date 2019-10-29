import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAnimeDropdownComponent } from './add-anime-dropdown.component';

describe('AddAnimeDropdownComponent', () => {
  let component: AddAnimeDropdownComponent;
  let fixture: ComponentFixture<AddAnimeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAnimeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAnimeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
