import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bai12-attributedirectives';

  cone = true;
  ctwo = true;

  style = "italic";
  size = '30px';


  Toggle(){
      this.cone = !this.cone;
      this.ctwo = !this.ctwo;
  }
}
