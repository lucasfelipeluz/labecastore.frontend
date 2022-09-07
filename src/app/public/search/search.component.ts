import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  public contentLoaded: boolean = false;
  public products: any;
  public categories: any;
  public keyword: any;
  public error: boolean = false;
  public notFound: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private publicService: PublicService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => {
      this.error = false;
      this.notFound = false;
      this.loadContent();
    });
  }

  loadContent() {
    this.keyword = this.activatedRoute.snapshot.params['keyword'];
    this.publicService.search(this.keyword).subscribe(
      (data: any) => {
        this.products = data.data.products;
        this.categories = data.data.categories;

        if (this.products.length < 1 && this.categories.length < 1) {
          this.contentLoaded = true;
          this.notFound = true;
        }

        this.contentLoaded = true;
      },
      (error) => {
        console.log(error);
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
