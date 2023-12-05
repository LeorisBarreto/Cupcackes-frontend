import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Adicione a lógica de login aqui
    console.log('Login clicked');
  }

  cadastrar() {
    this.router.navigate(['/home']);
  }
}
