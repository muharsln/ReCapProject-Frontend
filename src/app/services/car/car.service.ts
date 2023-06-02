import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/car/carDetail';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:44361/api/Cars/";

  constructor(private httpClient: HttpClient) { }

  getCar(): Observable<ListResponseModel<Car>> {
    return this.httpClient.get<ListResponseModel<Car>>(this.apiUrl + "getall");
  }

  getDetail():Observable<ListResponseModel<CarDetail>>{
    return this.httpClient.get<ListResponseModel<CarDetail>>(this.apiUrl + "getdetails");
  }

}
