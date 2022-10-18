import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringViewComponent } from './scoring-view.component';

describe('ScoringViewComponent', () => {
  let component: ScoringViewComponent;
  let fixture: ComponentFixture<ScoringViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScoringViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScoringViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
