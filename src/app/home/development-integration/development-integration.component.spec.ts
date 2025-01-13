import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentIntegrationComponent } from './development-integration.component';

describe('DevelopmentIntegrationComponent', () => {
  let component: DevelopmentIntegrationComponent;
  let fixture: ComponentFixture<DevelopmentIntegrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevelopmentIntegrationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevelopmentIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
