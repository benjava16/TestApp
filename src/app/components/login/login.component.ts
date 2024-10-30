import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {
  email:string = "";
  password:string= "";
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {}

  async login(){
    try{
      await this.authService.login(this.email, this.password);
      alert("Logueado correctamente");
      this.router.navigate(['/inicio']);
    }catch(error){
      console.error("Error en el login: ", error);
      alert("No se ha podido iniciar sesión");
    }
  }

  async register(){
    try{
      await this.authService.register(this.email, this.password);
    }catch(error){
      console.error("Problemas al registrar el usuario: ",error);
      alert("No se ha podido crear el usuario");
    }
  }

}
