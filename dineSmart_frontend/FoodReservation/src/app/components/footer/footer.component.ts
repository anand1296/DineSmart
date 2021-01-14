import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  userId:any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoHome() {
    this.router.navigate(['/home']);

  }
  gotoFav() {
    this.router.navigate(['favpage']);

  }
  gotoProf() {
    this.router.navigate(['/editinfo']);

  }

  gotoMyOrders() {
    this.router.navigate(['orders'])

  }

}
