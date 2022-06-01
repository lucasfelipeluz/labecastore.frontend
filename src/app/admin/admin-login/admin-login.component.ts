import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  usuario: Usuario = new Usuario()
  alertWarning: boolean = false;
  alertDanger: boolean = false;
  
  constructor(private adminService: AdminService) { }
  
  fazerLogin(){
    const response = this.adminService.login(this.usuario);
    if (response === null){
      this.showAlertWarning()
    }
    if (response === false) {
      this.showAlertDanger()
    }
  }

  showAlertWarning(): void{
    this.alertWarning = true;
    const timeAlert = setTimeout(() => {
      this.alertWarning = false;
    }, 3000)
  }

  showAlertDanger(): void{
    this.alertDanger = true;
    const timeAlert = setTimeout(() => {
      this.alertDanger = false;
    }, 3000)
  }
  
  ngOnInit(): void {
  }

}
