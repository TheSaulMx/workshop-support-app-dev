import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterEquipmentComponent } from './register-equipment.component';

describe('RegisterEquipmentComponent', () => {
  let component: RegisterEquipmentComponent;
  let fixture: ComponentFixture<RegisterEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterEquipmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
