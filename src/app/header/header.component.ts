import { Component, OnInit } from '@angular/core';
import navbar from '@assets/navbar.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  dropItem: number = -1;
  menuArray = navbar;
  menuToggle(index: number) {
    if (this.dropItem === index){
      this.dropItem = -1;
    } else {
      this.dropItem = index;
    }
  }

  closeMenu() {
    this.dropItem = -1;
  }
constructor() { }

ngOnInit() {
  }

}
