import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BotonesRutaService {

  constructor(
    private router: Router
  ) { }
}
