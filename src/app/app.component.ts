import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WizardComponent } from "./wizard/wizard.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WizardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wizard';
}
