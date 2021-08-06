import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import anime from 'animejs/lib/anime.es.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit, AfterViewInit {

  @ViewChild('video', { static: true }) video: ElementRef<HTMLVideoElement>;
  public anio: number;

  constructor(
    private router: Router,
    private breakPointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
    this.anio = new Date().getFullYear();
    // this.efectoGaleria();
    this.videBanner();
    this.galeriaResponsiva();
  }

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }

  efectoGaleria(): void {

    const divGal = document.getElementsByClassName('efectoGalery');
    const arrayDivGal: any = Array.from(divGal);

    arrayDivGal.forEach(ele => {
      ele.addEventListener('mouseenter', (e) => {
        const efecto = e.target.querySelector('div');

        anime({
          targets: efecto,
          translateY: -40
        });
      });
    });

    arrayDivGal.forEach(ele => {
      ele.addEventListener('mouseleave', (e) => {
        const efecto = e.target.querySelector('div');

        anime({
          targets: efecto,
          translateY: 0
        });
      });
    });
  }

  videBanner(): void {

    const video = this.video.nativeElement;
    window.dispatchEvent(new Event('click'));

    setTimeout(() => {
      video.muted = true;
      video.play();
    }, 1000);
  }

  irAluminio(): void {

    this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'vidrio-aluminio' } });
  }
  irRemodelacion(): void {

    this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'remodelacion' } });
  }
  irGypsum(): void {

    this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'gypsum' } });
  }
  irElectricidad(): void {

    this.router.navigate(['/servicios'], { queryParams: { tipoServicio: 'electricidad' } });
  }

  galeriaResponsiva(): void {

    const gal1 = document.getElementById('gal1');
    const gal2 = document.getElementById('gal2');

    const eleGal1: any = document.getElementsByClassName('divGal')[0];
    const eleGal2: any = document.getElementsByClassName('divGal')[1];
    const todosEleGal: any = document.getElementsByClassName('divGal');
    // const divGal = document.getElementsByClassName('divGal');

    // console.log(divGal[0].getElementsByClassName('efectoGalery')[2]);
    // gal1.removeChild(divGal[0].getElementsByClassName('efectoGalery')[2]);

    setInterval(() => {
      

    }, 300);
    this.breakPointObserver.observe(['(max-width: 1647px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {

          // eleGal1.getElementsByClassName('efectoGalery')[2].style.visibility = 'hidden';
          // eleGal1.getElementsByClassName('efectoGalery')[2].style.width = '0px';
          // eleGal1.getElementsByClassName('efectoGalery')[2].style.height = '0px';
          // gal1.style.gridTemplateColumns = 'repeat(2, 400px)';

          eleGal2.getElementsByClassName('efectoGalery')[3].style.visibility = 'hidden';
          eleGal2.getElementsByClassName('efectoGalery')[3].style.width = '0px';
          eleGal2.getElementsByClassName('efectoGalery')[3].style.height = '0px';
          gal2.style.gridTemplateColumns = 'repeat(3, 400px)';



        } else {

          // eleGal1.getElementsByClassName('efectoGalery')[2].style.visibility = 'visible';
          // eleGal1.getElementsByClassName('efectoGalery')[2].style.width = 'auto';
          // eleGal1.getElementsByClassName('efectoGalery')[2].style.height = 'auto';
          // gal1.style.gridTemplateColumns = 'repeat(3, 400px)';

          eleGal2.getElementsByClassName('efectoGalery')[3].style.visibility = 'visible';
          eleGal2.getElementsByClassName('efectoGalery')[3].style.width = 'auto';
          eleGal2.getElementsByClassName('efectoGalery')[3].style.height = 'auto';
          gal2.style.gridTemplateColumns = 'repeat(4, 400px)';

        }
      });


    this.breakPointObserver.observe(['(max-width: 1230px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {

          eleGal1.getElementsByClassName('efectoGalery')[2].style.visibility = 'hidden';
          eleGal1.getElementsByClassName('efectoGalery')[2].style.width = '0px';
          eleGal1.getElementsByClassName('efectoGalery')[2].style.height = '0px';
          gal1.style.gridTemplateColumns = 'repeat(2, 400px)';

          eleGal2.getElementsByClassName('efectoGalery')[3].style.visibility = 'visible';
          eleGal2.getElementsByClassName('efectoGalery')[3].style.width = 'auto';
          eleGal2.getElementsByClassName('efectoGalery')[3].style.height = 'auto';
          gal2.style.gridTemplateColumns = 'repeat(2, 400px)';
          gal2.style.rowGap = '10px';
          gal2.style.columnGap = '10px';

        } else {

          eleGal1.getElementsByClassName('efectoGalery')[2].style.visibility = 'visible';
          eleGal1.getElementsByClassName('efectoGalery')[2].style.width = 'auto';
          eleGal1.getElementsByClassName('efectoGalery')[2].style.height = 'auto';
          gal1.style.gridTemplateColumns = 'repeat(3, 400px)';


          eleGal2.getElementsByClassName('efectoGalery')[3].style.visibility = 'hidden';
          eleGal2.getElementsByClassName('efectoGalery')[3].style.width = '0px';
          eleGal2.getElementsByClassName('efectoGalery')[3].style.height = '0px';
          gal2.style.gridTemplateColumns = 'repeat(3, 400px)';

        }
      });

    this.breakPointObserver.observe(['(max-width: 833px)'])
      .subscribe((state: BreakpointState) => {

        if (state.matches) {
          gal1.style.gridTemplateColumns = 'repeat(1, 80%)';
          gal1.style.gridTemplateRows = 'auto auto auto';
          gal1.style.rowGap = '10px';

          gal2.style.gridTemplateColumns = 'repeat(1, 80%)';
          gal2.style.gridTemplateRows = 'auto auto auto';
          gal2.style.rowGap = '10px';


        } else {
          // gal1.style.gridTemplateColumns = 'repeat(2, 400px)';
          // gal2.style.gridTemplateColumns = 'repeat(2, 400px)';
        }
      });

    this.breakPointObserver.observe(['(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          gal1.style.gridTemplateColumns = 'repeat(1, 90%)';
          gal2.style.gridTemplateColumns = 'repeat(1, 90%)';
        } else {
          // gal1.style.gridTemplateColumns = 'repeat(1, 80%)';
          // gal2.style.gridTemplateColumns = 'repeat(1, 80%)';
        }
      });

    this.breakPointObserver.observe(['(max-width: 576px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          gal1.style.gridTemplateColumns = 'repeat(1, 95%)';
          gal2.style.gridTemplateColumns = 'repeat(1, 95%)';
        } else {
          // gal1.style.gridTemplateColumns = 'repeat(1, 90%)';
          // gal2.style.gridTemplateColumns = 'repeat(1, 90%)';
        }
      });


  }

}
