import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-profe',
  templateUrl: './home-profe.page.html',
  styleUrls: ['./home-profe.page.scss'],
})
export class HomeProfePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  irLoginAlumno(){
    this.router.navigate(['/home'])
  }

}
