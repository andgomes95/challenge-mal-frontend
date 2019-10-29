import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankMalComponent } from './rank-mal.component';

describe('RankMalComponent', () => {
  let component: RankMalComponent;
  let fixture: ComponentFixture<RankMalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankMalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankMalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
