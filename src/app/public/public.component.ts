import { Component, OnInit } from '@angular/core';
import { PublicService } from './public.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss'],
})
export class PublicComponent implements OnInit {
  public products: any;

  constructor(private publicService: PublicService) {}

  ngOnInit(): void {
    this.publicService.getAllProduct().subscribe(
      (responseServer: any) => {
        this.products = responseServer.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
