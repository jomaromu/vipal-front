import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorreoService {

  constructor(
    private http: HttpClient
  ) { }

  envioCorreo(data: FormData): Observable<any> {

    const url = '';
    return this.http.post(url, data)
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }
}
