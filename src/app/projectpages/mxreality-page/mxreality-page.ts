import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mxreality-page',
  imports: [],
  templateUrl: './mxreality-page.html',
  styleUrl: './mxreality-page.css',
})
export class MXrealityPage {
  constructor(private titleService: Title){
    this.titleService.setTitle('Banji Shittu - MxReality')
  }
}
