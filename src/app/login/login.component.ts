import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Adicione a lógica de login aqui
    console.log('Login clicked');
  }

  cadastrar() {
    this.router.navigate(['/cadastro']);
  }
}
