import { Component, OnInit } from '@angular/core';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  public products: any;
  public imgMain: any;

  public contentLoaded: boolean = false;

  constructor(private publicService: PublicService) {}

  ngOnInit(): void {
    this.publicService.getAllProduct().subscribe(
      (responseServer: any) => {
        this.products = responseServer.data;

        if (this.products) this.contentLoaded = true;
      },
      (error) => {
        console.log(error);
      }
    );
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
