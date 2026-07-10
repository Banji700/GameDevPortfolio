import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sindria-knights-page',
  imports: [],
  templateUrl: './sindria-knights-page.html',
  styleUrl: './sindria-knights-page.css',
})
export class SindriaKnightsPage {
  constructor(private titleService: Title){
    this.titleService.setTitle('Banji Shittu - Sindria Kinghts')
  }
}
