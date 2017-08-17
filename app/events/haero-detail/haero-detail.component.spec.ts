import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaeroDetailComponent } from './haero-detail.component';

describe('HaeroDetailComponent', () => {
  let component: HaeroDetailComponent;
  let fixture: ComponentFixture<HaeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaeroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
