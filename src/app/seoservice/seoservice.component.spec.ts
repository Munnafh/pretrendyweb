import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeoserviceComponent } from './seoservice.component';

describe('SeoserviceComponent', () => {
  let component: SeoserviceComponent;
  let fixture: ComponentFixture<SeoserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeoserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeoserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
