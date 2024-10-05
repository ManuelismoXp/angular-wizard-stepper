import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard.component.html',
  styleUrl: './wizard.component.css',
})
export class WizardComponent {
  step: number = 1;

  next() {
    if (this.step < 4) {
      this.step++;
    }
  }

  previous() {
    if (this.step > 1) {
      this.step--;
    }
  }

  setStepActivate(actualStep: number, step: number){
    return actualStep === step;
  }
}
