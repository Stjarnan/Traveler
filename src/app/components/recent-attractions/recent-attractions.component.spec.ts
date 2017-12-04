import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentAttractionsComponent } from './recent-attractions.component';

describe('RecentAttractionsComponent', () => {
  let component: RecentAttractionsComponent;
  let fixture: ComponentFixture<RecentAttractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentAttractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
