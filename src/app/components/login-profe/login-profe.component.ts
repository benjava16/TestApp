import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-profe',
  templateUrl: './login-profe.component.html',
  styleUrls: ['./login-profe.component.scss'],
})
export class LoginProfeComponent  implements OnInit {
  email:string = "";
  password:string = "";

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {}

  async loginProfe(){
    try{
      await this.authService.login(this.email, this.password);
      alert("Logueado correctamente");
      this.router.navigate(['/vista-prof']);
    }catch(error){
      console.error("Error en el login: ", error);
      alert("No se ha podido iniciar sesión");
    }
  }

  async registerProfe(){
    try{
      await this.authService.register(this.email, this.password);
    }catch(error){
      console.error("Problemas al registrar el usuario: ", error);
      alert("No se ha podido crear el usuario");
    }
  }

}
