import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IngredientsService {

  constructor(private httpClient: HttpClient) { }

  public get(){
    return this.httpClient.get<any>(`https://us-central1-lazycook-4fc7a.cloudfunctions.net/getIngredients`);
  }
}
