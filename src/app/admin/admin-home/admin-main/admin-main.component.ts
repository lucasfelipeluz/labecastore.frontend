import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  public products: Array<any> = [{}]
  public admin = ''

  public classLa = false;

  calcuteInventory (product: any): Boolean {
    if (product.inventoryP > 0) return true
    if (product.inventoryPP > 0) return true
    if (product.inventoryM > 0) return true
    if (product.inventoryG > 0) return true
    if (product.inventoryGG > 0) return true
    if (product.inventoryEG > 0) return true
    if (product.inventoryEGG> 0) return true
    return false;
  }

  ngOnInit(): void {
    this.products = this.adminService.getProducts()
    this.admin = this.adminService.getAdmin().nome
    
  }

}
