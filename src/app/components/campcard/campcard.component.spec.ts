import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampcardComponent } from './campcard.component';

describe('CampcardComponent', () => {
  let component: CampcardComponent;
  let fixture: ComponentFixture<CampcardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CampcardComponent]
    });
    fixture = TestBed.createComponent(CampcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
