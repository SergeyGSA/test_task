import { Component, OnInit, ViewChild } from '@angular/core';

interface INavItem {
  name: string
  route: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public navItems: INavItem[] = [
    {
      name:'Home',
      route: ''
    }, 
    {
      name:'My CV',
      route: ''
    }, 
    {
      name:'About me',
      route: ''
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
