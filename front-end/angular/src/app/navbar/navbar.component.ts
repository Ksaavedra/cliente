import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink:['/home']},
      //{label: 'Investidor', icon: 'pi pi-fw pi-wallet', 
      //  items:[
      //    {label: 'Investir', icon: 'pi pi-fw pi-money-bill', routerLink:['/investir'],
      //      styleClass: 'menucus'
      //    }
      //  ]
      //},
      {label: 'Sobre nós', icon: 'pi pi-fw pi-users ', routerLink:['/sobre']},
      {label: 'Cadastra sua startup', icon: 'pi pi-fw pi-plus-circle', routerLink:['/startup']},
      {label: 'Entrar', icon: 'pi pi-fw pi-sign-in', routerLink:['/login']}
    ];
  }

  constructor() { }

}