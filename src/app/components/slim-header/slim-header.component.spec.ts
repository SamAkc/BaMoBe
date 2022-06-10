import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlimHeaderComponent } from './slim-header.component';

describe('SlimHeaderComponent', () => {
  let component: SlimHeaderComponent;
  let fixture: ComponentFixture<SlimHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlimHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlimHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
