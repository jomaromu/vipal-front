import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BtnResponsivo } from '../../scripts/bars';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public bandera = false;
  public banderaResp = false;

  @ViewChild('servicio', { static: true }) servicio: ElementRef<HTMLElement>;
  @ViewChild('servicioResp', { static: true }) servicioResp: ElementRef<HTMLElement>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private btnResponsivo: BtnResponsivo
  ) {
  }

  ngOnInit(): void {

    this.servicios();
    this.serviciosResp();
  }

  servicios(): void {

    const enlaces = document.querySelectorAll('#ulNav li');

    const servicio = this.servicio.nativeElement;
    const ulServicios = document.createElement('ul');

    // servicio.style.border = '1px solid red';

    // ulServicios.style.border = '1px solid blue';
    ulServicios.classList.add('ulServicios');
    ulServicios.style.listStyle = 'none';
    ulServicios.style.fontWeight = '400';
    ulServicios.style.width = '100%';
    ulServicios.style.display = 'flex';
    ulServicios.style.flexDirection = 'column';
    ulServicios.style.justifyContent = 'center';
    ulServicios.style.alignItems = 'flex-start';
    ulServicios.style.padding = '10px';

    const alumVidrio = document.createElement('li');
    alumVidrio.innerText = 'Aluminio y vidrios';
    alumVidrio.style.padding = '10px 0px';
    alumVidrio.style.borderBottom = '1px solid gray';
    alumVidrio.style.width = '100%';

    const remode = document.createElement('li');
    remode.innerText = 'Remodelaciones';
    remode.style.padding = '10px 0px';
    remode.style.borderTop = '1px solid gray';
    remode.style.borderBottom = '1px solid gray';
    remode.style.width = '100%';

    const gypsum = document.createElement('li');
    gypsum.innerText = 'Gypsum';
    gypsum.style.padding = '10px 0px';
    gypsum.style.borderBottom = '1px solid gray';
    gypsum.style.width = '100%';

    const electricidad = document.createElement('li');
    electricidad.innerText = 'Electricidad';
    electricidad.style.padding = '10px 0px';
    electricidad.style.borderBottom = '1px solid gray';
    electricidad.style.width = '100%';

    const ebanisteria = document.createElement('li');
    ebanisteria.innerText = 'Ebanistería';
    ebanisteria.style.padding = '10px 0px';
    ebanisteria.style.borderBottom = '1px solid gray';
    ebanisteria.style.width = '100%';

    const divServicio = document.createElement('div');

    // divServicio.style.border = '1px solid green';
    divServicio.style.width = '180px';
    divServicio.style.height = 'auto';
    divServicio.style.backgroundColor = 'rgb(23, 23, 23)';
    divServicio.style.position = 'absolute';
    divServicio.style.top = '60px';
    divServicio.style.left = '0px';
    divServicio.style.display = 'none';

    ulServicios.append(alumVidrio, remode, gypsum, electricidad, ebanisteria);
    divServicio.append(ulServicios);
    servicio.append(divServicio);

    servicio.addEventListener('mouseenter', () => {
      divServicio.style.display = 'flex';
    });

    servicio.addEventListener('mouseleave', () => {
      divServicio.style.display = 'none';
    });

    const efectoServicios = ulServicios.querySelectorAll('li');

    efectoServicios.forEach((ele: any) => {

      ele.addEventListener('mouseenter', () => {
        ele.style.color = '#7D53DE';
      });

      ele.addEventListener('mouseleave', () => {
        ele.style.color = '#d1d1d1';
      });

      ele.addEventListener('click', (e: any) => {
        const valor = e.target.innerText;
        // console.log(valor);

        switch (valor) {
          case 'Remodelaciones':
            this.route.queryParams.subscribe(queries => {
              this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'remodelacion' } });
            });
            break;
          case 'Aluminio y vidrios':
            this.route.queryParams.subscribe(queries => {
              this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'vidrio-aluminio' } });
            });
            break;
          case 'Gypsum':
            this.route.queryParams.subscribe(queries => {
              this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'gypsum' } });
            });
            break;
          case 'Electricidad':
            this.route.queryParams.subscribe(queries => {
              this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'electricidad' } });
            });
            break;
          case 'Ebanistería':
            this.route.queryParams.subscribe(queries => {
              this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'ebanisteria' } });
            });
            break;
        }
      });
    });
  }

  serviciosResp(): void {

    const servicioResp = this.servicioResp.nativeElement;

    servicioResp.addEventListener('click', () => {

      const ulSubResp = document.getElementById('ulSubResp');
      const indicador = document.getElementById('indicador');
      // const ul = servicioResp.querySelector('ul');
      // const i = servicioResp.querySelector('i');

      if (this.banderaResp === false) {

        ulSubResp.style.height = 'auto';
        ulSubResp.style.padding = '25px 10px';
        indicador.classList.remove('fa-plus');
        indicador.classList.add('fa-minus');

        this.banderaResp = true;

      } else {

        ulSubResp.style.height = '0px';
        ulSubResp.style.padding = '0px';

        indicador.classList.add('fa-plus');
        indicador.classList.remove('fa-minus');

        this.banderaResp = false;
      }
    });
  }

  irServicio(ruta: string): void {

    switch (ruta) {
      case 'Aluminio y vidrios':
        this.route.queryParams.subscribe(queries => {
          this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'vidrio-aluminio' } });
        });
        break;
      case 'Remodelaciones':
        this.route.queryParams.subscribe(queries => {
          this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'remodelacion' } });
        });
        break;
      case 'Gypsum':
        this.route.queryParams.subscribe(queries => {
          this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'gypsum' } });
        });
        break;
      case 'Electricidad':
        this.route.queryParams.subscribe(queries => {
          this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'electricidad' } });
        });
        break;
    }
  }

  cerrarAbrir(bandera: boolean): void {

    const bars = document.getElementById('bars');
    const close = document.getElementById('close');
    const navResp = document.getElementById('navResp');

    if (bandera === false) {

      navResp.style.display = 'flex';
      navResp.classList.remove('animate__slideOutLeft');
      navResp.classList.add('animate__slideInLeft');
      this.bandera = true;
    } else {
      navResp.classList.remove('animate__slideInLeft');
      navResp.classList.add('animate__slideOutLeft');
      setTimeout(() => {
        navResp.style.display = 'none';
      }, 400);
      this.bandera = false;
    }

    // console.log(this.bandera);
  }
}
