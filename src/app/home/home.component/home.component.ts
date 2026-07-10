import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home.component',
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private titleService: Title){
    this.titleService.setTitle('Banji Shittu - Home')
  }
}
