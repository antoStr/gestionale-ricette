import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { TitleCasePipe } from '@angular/common';
import { ChefService } from '../../services/chef';

@Component({
  selector: 'app-chef',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, TitleCasePipe],
  templateUrl: './chef.html',
  styleUrl: './chef.css'
})
export class Chef implements OnInit {
  chefSvc = inject(ChefService);

  ngOnInit(): void {
    this.chefSvc.caricaChef();
  }
}