import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PublicService } from '../public.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public idProduct: any;
  public product: any;
  public contentLoaded: boolean = false;

  constructor(
    private publicService: PublicService,
    private activatedRoute: ActivatedRoute
  ) {}

  checkInventory(inventory: number): boolean {
    if (inventory > 0) return true;
    return false;
  }

  async ngOnInit(): Promise<void> {
    this.idProduct = parseInt(this.activatedRoute.snapshot.params['id']);
    this.publicService.getProductById(this.idProduct).subscribe(
      (data: any) => {
        this.product = data.data[0];

        if (this.product) this.contentLoaded = true;
        console.log(this.product);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
