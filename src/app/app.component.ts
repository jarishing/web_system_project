import { Component, OnInit } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-front';

  constructor(
    private dataService: DataService
  ){}

  async ngOnInit() {
    
    await this.dataService.setData();
  }
}
