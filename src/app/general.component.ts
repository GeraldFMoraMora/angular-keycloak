import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'general',
    templateUrl: './general.component.html',
    styleUrl: './general.component.css'
  })

export class GeneralComponent {
    title = 'angular-keycloak';
  }