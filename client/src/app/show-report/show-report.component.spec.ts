import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReportComponent } from './show-report.component';

describe('ShowReportComponent', () => {
  let component: ShowReportComponent;
  let fixture: ComponentFixture<ShowReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
