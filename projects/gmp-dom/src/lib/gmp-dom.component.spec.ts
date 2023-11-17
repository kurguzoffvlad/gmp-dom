import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmpDomComponent } from './gmp-dom.component';

describe('GmpDomComponent', () => {
  let component: GmpDomComponent;
  let fixture: ComponentFixture<GmpDomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmpDomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmpDomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
