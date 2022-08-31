import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public slugCategory: any;
  public products: any;
  public nameCategory: any;
  public contentLoaded: boolean = false;
  public error: boolean = false;
  public withoutProducts: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private publicService: PublicService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.loadData();
    });
    this.loadData();
  }

  loadData() {
    this.slugCategory = this.activatedRoute.snapshot.params['category'];
    this.publicService.getCategoryBySlug(this.slugCategory).subscribe(
      (data: any) => {
        this.products = data.data;
        this.nameCategory = data.info.name;

        if (this.products) this.contentLoaded = true;
        if (this.products.length < 1) this.withoutProducts = true;
      },
      (error) => {
        this.error = true;
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
