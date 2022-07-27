import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private adminService: AdminService) {}

  public admin_nome: string = '';

  ngOnInit(): void {
    const admin = this.adminService.getAdmin();
    this.admin_nome = admin.nome;
  }
}
