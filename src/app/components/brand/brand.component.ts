import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = [];

  constructor(private brandService:BrandService){}

  ngOnInit(): void {
    this.getBrand();
  }

  getBrand() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    })
  }
}