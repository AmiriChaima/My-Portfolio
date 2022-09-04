import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {



  showMenu = false;
  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }

 
  constructor() { }

  ngOnInit(): void {
  }

}
