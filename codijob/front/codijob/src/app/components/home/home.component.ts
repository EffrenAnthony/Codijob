import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  switchLogin:boolean = true;
  objCredenciales = {
    per_nom: '',
    per_ape: '',
    per_email: '',
    usu_pass: ''
  }


  constructor(private _sAuth:AuthService) { }

  ngOnInit() {
  }

  changeTab(evento){
    // cancela las acciones por defecto
    evento.preventDefault();
    
    // esta varibale será o false o tru, cuando ese sea true pasará a false y viceversa
    this.switchLogin = this.switchLogin ? false : true;
  }
  onRegister(){
    
    console.log(this.objCredenciales);
    this._sAuth.registrar(this.objCredenciales).subscribe((response:any)=>{
      this._sAuth.saveToken(response.token);
      console.log(this._sAuth.getUserDetails());
      this.clearCredentials();
    });    
  }

  clearCredentials(){
    this.objCredenciales.per_nom = '';
    this.objCredenciales.per_ape = '';
    this.objCredenciales.per_email = '';
    this.objCredenciales.usu_pass = '';
  }

  login(){
    this._sAuth.login(this.objCredenciales).subscribe((response:any)=>{
      console.log(response);
      this._sAuth.saveToken(response.token);
      this.clearCredentials();

      
    })
  }
}