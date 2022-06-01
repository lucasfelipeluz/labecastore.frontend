import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  
  public admin_nome: string = '';

  ngOnInit(): void {
    
    const admin = this.adminService.getAdmin()
    this.admin_nome = admin.nome
    

  }


}
