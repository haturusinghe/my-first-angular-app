import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InningSummaryComponent } from './inning-summary.component';

describe('InningSummaryComponent', () => {
  let component: InningSummaryComponent;
  let fixture: ComponentFixture<InningSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InningSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InningSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
