import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { AppRoutingModule } from '../../app-routing.module';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li {
      cursor: pointer
    }
    `
  ]
})
export class SidebarComponent {

  constructor() { }



}
