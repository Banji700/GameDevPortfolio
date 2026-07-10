import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-zombie-shooter-page',
  imports: [],
  templateUrl: './zombie-shooter-page.html',
  styleUrl: './zombie-shooter-page.css',
})
export class ZombieShooterPage {
  constructor(private titleService: Title){
    this.titleService.setTitle('Banji Shittu - Zombie Shooter')
  }
}
