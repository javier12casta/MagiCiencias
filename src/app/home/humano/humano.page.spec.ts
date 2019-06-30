import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HumanoPage } from './humano.page';

describe('HumanoPage', () => {
  let component: HumanoPage;
  let fixture: ComponentFixture<HumanoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HumanoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HumanoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
