import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBikeComponent } from './home-bike.component';

describe('HomeBikeComponent', () => {
  let component: HomeBikeComponent;
  let fixture: ComponentFixture<HomeBikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeBikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeBikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
