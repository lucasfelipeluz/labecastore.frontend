import { Component, OnInit, AfterContentInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit {
  public idProduct: any;
  public product: any;

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) {
  }
  
  checkInventory(inventory: number): boolean {
    if (inventory > 0) return true
    return false
  }
  
  ngOnInit():void {
    this.idProduct = parseInt(this.activatedRoute.snapshot.params['id'])
    this.product = this.adminService.getProductsById(this.idProduct)
  }

}
