import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  mail = "hussinayan@gmail.com"

  sidebarLinks = [
    'Account',
    'Notifications',
    'Playback and performance',
    'Downloads',
    'Privacy',
    'Connected apps',
    'Purchases and memberships',
    'Bills and payments',
    'Advanced settings'
  ];

}
