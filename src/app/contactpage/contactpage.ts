import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contactpage',
  imports: [],
  templateUrl: './contactpage.html',
  styleUrl: './contactpage.css',
})
export class Contactpage {
  constructor(private titleService: Title){
    this.titleService.setTitle('Banji Shittu - Contact')
  }
}
