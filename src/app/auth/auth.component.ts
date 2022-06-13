import { Component } from '@angular/core';

@Component({
  selector: 'view-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent {

  baseHref: string = "";
  backgroundImageURL: string = "";

  ngOnInit() {

    console.log("location", location);

    // console.log("location.href", location.href);

    // console.log("location.origin", location.origin);

    this.baseHref = location.origin;
    // this.backgroundImageURL = location.origin + location.pathname + "assets/img/auth-bg.jpg";
    // this.backgroundImageURL = location.origin + this.environment.baseHref + "assets/images/wmap-grca.png";

  }
}
