import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampreviewsComponent } from './campreviews.component';

describe('CampreviewsComponent', () => {
  let component: CampreviewsComponent;
  let fixture: ComponentFixture<CampreviewsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampreviewsComponent]
    });
    fixture = TestBed.createComponent(CampreviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
