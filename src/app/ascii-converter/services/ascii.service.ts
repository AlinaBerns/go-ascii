import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AsciiService {

  constructor(private http: HttpClient) { }

  getAsciiArt(text: string, font: string): Observable<string>{
    const url: string = `https://asciified.thelicato.io/api/v2/ascii?text=${text}&font=${font}`;
    return this.http.get(url, {responseType: 'text'})
  }
}
