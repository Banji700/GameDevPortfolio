import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-aboutme',
  imports: [],
  templateUrl: './aboutme.html',
  styleUrl: './aboutme.css',
})
export class Aboutme {
  
  constructor(private titleService: Title){
    this.titleService.setTitle('Banji Shittu - About Me')
  }

}
