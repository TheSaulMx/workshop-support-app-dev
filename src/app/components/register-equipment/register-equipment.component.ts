import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-register-equipment',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatButtonModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatGridListModule, MatCardModule],
  templateUrl: './register-equipment.component.html',
  styleUrl: './register-equipment.component.scss'
})
export class RegisterEquipmentComponent {

  constructor(private _formBuilder: FormBuilder) { }

  hideRequiredControl = new FormControl(false);

  floatLabelControl = new FormControl('auto' as FloatLabelType);
  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

}
