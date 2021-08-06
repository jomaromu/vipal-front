import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Servicio } from '../../interface/servicio';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit, AfterViewInit {

  public tipServicio: Servicio;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => {
      return false;
    };
  }

  ngOnInit(): void {
    this.servicio();
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }

  servicio(): void {
    const tipoServicio = this.route.snapshot.queryParamMap.get('tipoServicio');

    if (tipoServicio === 'remodelacion') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/remodelacion/remodelacion1.png',
        tituloBanner: 'Remodelación',
        descripcionBanner: 'Remodelaciones de casas, edificios, apartamentos entre otros.',
        servicio: [
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/remodelacion/remodelacion2.png', tituloServicio: 'Remodelación de casas', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: false
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/remodelacion/remodelacion4.png', tituloServicio: 'Remodelación de apartamentos', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/remodelacion/locales-comerciales.jpeg', tituloServicio: 'Remodelación de locales comerciales', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: false },
        ]
      };

    } else if (tipoServicio === 'vidrio-aluminio') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/vidrio-aluminio/vidrio-aluminio1.png',
        tituloBanner: 'Vidrio y Aluminio',
        descripcionBanner: 'Instalación de Vidrios y todas sus aplicaciones',
        servicio: [
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/vidrio-aluminio/vidrio-tem.jpeg', tituloServicio: 'Vidrio templado', descServicio: 'Fachadas comerciales de vidrio templado, divisiones de oficinas, ventanas fijas, puertas corredizas, puertas automaticas, techos de vidrios templado, puertas para baño, sobres y muro cortina.', revers: false
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/vidrio-aluminio/lowe.jpeg', tituloServicio: 'Louvers', descServicio: 'Los louvers son sistemas para a protección de espacios en zonas residenciales, comerciales e industriales que favorecen y controlan la ventilación del área protegida, limitando al mismo tiempo el paso de elementos externos presentes en el ambiente.', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/vidrio-aluminio/techos-vidrios.jpeg', tituloServicio: 'Techos de vidrio', descServicio: 'Un techo de cristal es una estructura de aluminio y cristal templado que cubre un espacio abierto como puede ser una pérgola, porche, terraza o patio interior.', revers: false },
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/vidrio-aluminio/diviones de ofinas.jpeg', tituloServicio: 'Divisiones de oficina', descServicio: 'Divisiones de oficina. Divisiones de oficinas en vidrio templado de seguridad y con estructura en aluminio arquitectonico.', revers: true
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/vidrio-aluminio/sistema-escaleras.jpeg', tituloServicio: 'Barandas', descServicio: 'Sistemas de Barandas de Vidrio Para escaleras, terrazas, balcones...', revers: false },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/vidrio-aluminio/paños fijos y puertas.jpeg', tituloServicio: 'Paño fijo y puertas', descServicio: 'Divisiones de oficina - Fachadas comerciales y residenciales - Tableros en vidrio. Vidrio crudo, templado, laminado, Insulado - Aluminio.', revers: true },
        ]
      };

    } else if (tipoServicio === 'gypsum') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/gypsum/gypsum.png',
        tituloBanner: 'Gypsum',
        descripcionBanner: 'Aplicaciones Gypsum para cielo raso, paredes, lamina de gypsum.',
        servicio: [
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/gypsum/gypsum1.png', tituloServicio: 'Gypsum', descServicio: ' Construcción de diseños de Gypsum para techo y paredes. material se caracteriza por una alta plasticidad, lo que permite realizar numerosas soluciones.', revers: false
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/gypsum/gypsum-ser.jpeg', tituloServicio: 'Diseño de cielo razos', descServicio: ' Cielo falso según necesidad y por encima de la estética, techo falso suspendido, placas de techo o cielo raso', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/gypsum/PAREDES-GYPSUM.jpeg', tituloServicio: ' Paredes de Gypsum', descServicio: 'Las paredes construidas con gypsum son igual de resistentes que cualquier otro muro por lo tanto son sismorresistentes y es poco probable que se rompan.', revers: false },
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/gypsum/gypsum5.png', tituloServicio: 'Techos de Gypsum', descServicio: 'Sistemas de techos en gypsum, brinda a tus espacios sensaciones de amplitud, muy útiles en los espacios con áreas reducidas.', revers: true
          },

          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/gypsum/gypsum2.png', tituloServicio: 'Decoraciones con Gypsum', descServicio: 'Decoración para paredes de salón. Decoración de interior, exterior y terraza, ideal para todo tipo de instalacion, oficinas, casas, apattamentos y locales comerciales.', revers: false },
        ]
      };

    } else if (tipoServicio === 'electricidad') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/electricidad/banner.png',
        tituloBanner: 'Electricidad residencial',
        descripcionBanner: 'Canalizaciones, Estructuras, Conductores, Accesorios, Dispositivos',
        servicio: [
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/electricidad/electricidad1.png', tituloServicio: 'Electricidad', descServicio: 'Instalacion y Mantenimiento de caja brekera.', revers: false
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/mantenimiento-sistema-el.jpeg', tituloServicio: 'Mantenimiento sistema de electrico', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/distribucion.jpeg', tituloServicio: 'Distribuicion del panel hasta el interior de la casa', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: false },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/iluminarias.jpeg', tituloServicio: 'Luminarias tomas e interruptores.', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/tomas.jpeg', tituloServicio: 'Instalacion de tomas y lamparas', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: false },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/bombas.jpeg', tituloServicio: 'Instalcion de sensores y bombas de agua', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: true },
        ]

      };

    } else if (tipoServicio === 'ebanisteria') {

      this.tipServicio = {
        ImgBanner: '../../../assets/servicios/electricidad/banner.png',
        tituloBanner: 'Ebanistería',
        descripcionBanner: 'Loremp Ipsum',
        servicio: [
          // tslint:disable-next-line: max-line-length
          {
            // tslint:disable-next-line: max-line-length
            imgServicio: '../../../assets/servicios/electricidad/electricidad1.png', tituloServicio: 'Ebanistería', descServicio: 'Instalacion y Mantenimiento de caja brekera.', revers: false
          },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/mantenimiento-sistema-el.jpeg', tituloServicio: 'Mantenimiento sistema de electrico', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/distribucion.jpeg', tituloServicio: 'Distribuicion del panel hasta el interior de la casa', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: false },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/iluminarias.jpeg', tituloServicio: 'Luminarias tomas e interruptores.', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: true },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/tomas.jpeg', tituloServicio: 'Instalacion de tomas y lamparas', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: false },
          // tslint:disable-next-line: max-line-length
          { imgServicio: '../../../assets/servicios/electricidad/bombas.jpeg', tituloServicio: 'Instalcion de sensores y bombas de agua', descServicio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley', revers: true },
        ]

      };

    } else if ((tipoServicio !== 'remodelacion') && (tipoServicio !== 'vidrio-aluminio') && (tipoServicio !== 'gypsum') && (tipoServicio !== 'electricidad') && (tipoServicio !== 'ebanisteria')) {
      this.router.navigate(['/inicio']);
    }

  }

}
