import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';

interface INavItem {
  name: string
  route: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
  public navItems: INavItem[] = [
    {
      name:'Home',
      route: 'home'
    }, 
    {
      name:'My CV',
      route: 'my-cv'
    }, 
    {
      name:'About me',
      route: 'about-me'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }
}
