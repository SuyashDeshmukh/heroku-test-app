import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  // protected url = 'http://localhost:8080/search'; // Development URL
  protected url = '/search'; // Production URL

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  // Rest Items Service: Read all REST Items
  getAll(tags, count, type) {
    return this.http
      .get<any[]>(this.url, { params : {
          tags: tags,
          count: count,
          type: type
        }
      }).pipe(map(data => data));
  }
}
