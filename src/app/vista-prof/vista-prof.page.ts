import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-vista-prof',
  templateUrl: './vista-prof.page.html',
  styleUrls: ['./vista-prof.page.scss'],
})
export class VistaProfPage implements OnInit {

  constructor(private aRoute:ActivatedRoute, private aService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  logout(){
    this.aService.logout();
    alert("Sesión cerrada");
    this.router.navigate(["/home"]);
  }
}
