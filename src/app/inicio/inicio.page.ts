import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private aRoute:ActivatedRoute, private aService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.aService.logout();
    alert("Sesión cerrada");
    this.router.navigate(["/home"]);
  }

}
