import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  profilepic="https://i.postimg.cc/ydx0YbQV/1338840.png"
  name='User'
  settingsMenuHeight=false;
  print(){
    this.settingsMenuHeight = !this.settingsMenuHeight;
    console.log('hota')
  }

}
