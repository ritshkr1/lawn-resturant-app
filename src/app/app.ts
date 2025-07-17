import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './shared/api-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'lawn-resturant-app';
  constructor(private api: ApiService){
    this.api.getData();
  }
}
