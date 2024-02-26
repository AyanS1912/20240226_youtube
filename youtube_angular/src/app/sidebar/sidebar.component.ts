import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarIcon = [
    {
      "span_name":"home",
      "text":"Home"
    },
    {
      "span_name":"add_to_queue",
      "text": "Shorts"
    },
    {
      "span_name":"subscriptions",
      "text" : "Subscription"
    },
    {
      "span_name":"person",
      "text": "You"
    }]
}
