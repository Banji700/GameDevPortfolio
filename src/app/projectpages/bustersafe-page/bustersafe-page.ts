import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bustersafe-page',
  imports: [],
  templateUrl: './bustersafe-page.html',
  styleUrl: './bustersafe-page.css',
})
export class BustersafePage {
  constructor(private titleService: Title){
    this.titleService.setTitle('Banji Shittu - Buster Safe')
  }
}
