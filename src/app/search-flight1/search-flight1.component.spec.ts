import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFlight1Component } from './search-flight1.component';

describe('SearchFlight1Component', () => {
  let component: SearchFlight1Component;
  let fixture: ComponentFixture<SearchFlight1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchFlight1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFlight1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
