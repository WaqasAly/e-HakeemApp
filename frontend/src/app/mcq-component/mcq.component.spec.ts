import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McqComponent } from './mcq.component';

describe('McqComponentComponent', () => {
  let component: McqComponent;
  let fixture: ComponentFixture<McqComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [McqComponent],
    });
    fixture = TestBed.createComponent(McqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
