import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampNewComponent } from './camp-new.component';

describe('CampNewComponent', () => {
  let component: CampNewComponent;
  let fixture: ComponentFixture<CampNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampNewComponent]
    });
    fixture = TestBed.createComponent(CampNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
