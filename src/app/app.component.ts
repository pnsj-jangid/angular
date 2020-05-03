import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-all-binding';
  cntString = 'test string 2';
  inntertextBind = "Inner text property binding";
  pageCount = 0;
  red = 'red';
  link = 'https://www.google.com';
  target = "_blank";
}
