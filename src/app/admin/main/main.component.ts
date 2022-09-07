import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public contentLoaded: boolean = false;
  public products: any;

  constructor(private adminService: AdminService) {}

  async ngOnInit(): Promise<void> {
    const response: any = await this.adminService.getAllProducts().toPromise();
    this.products = response.data;
    console.log(this.products);
  }

  calcuteInventory(product: any): Boolean {
    if (product.inventoryP > 0) return true;
    if (product.inventoryPP > 0) return true;
    if (product.inventoryM > 0) return true;
    if (product.inventoryG > 0) return true;
    if (product.inventoryGG > 0) return true;
    if (product.inventoryEG > 0) return true;
    if (product.inventoryEGG > 0) return true;
    return false;
  }
}
