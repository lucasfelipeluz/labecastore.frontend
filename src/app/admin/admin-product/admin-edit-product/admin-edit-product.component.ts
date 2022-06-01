import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.scss']
})
export class AdminEditProductComponent implements OnInit {

  constructor(private adminService: AdminService, private activatedRoute: ActivatedRoute) {
  }
  
  public product: any;
  public categories: any;
  public images: any;

  public idProduct: any;

  ngOnInit(): void {
    this.idProduct = parseInt(this.activatedRoute.snapshot.params['id'])
    this.product =  this.adminService.getProductsById(this.idProduct)
    
    this.categories = this.adminService.getAllCategories()
    this.images = this.adminService.getAllImages();
  }

}
