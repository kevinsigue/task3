import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';

formatDate(new Date(), 'yyyy/MM/dd', 'en');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DatePipe]
})


export class AppComponent {
  title = 'Task3';
  selectedValue: string;
}
