import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-soul-survivor-page',
  imports: [],
  templateUrl: './soul-survivor-page.html',
  styleUrl: './soul-survivor-page.css',
})
export class SoulSurvivorPage {
  constructor(private titleService: Title){
    this.titleService.setTitle('Banji Shittu - Soul Survivor')
  }
}
