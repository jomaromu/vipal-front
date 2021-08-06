import { Injectable } from '@angular/core';

@Injectable()

export class BtnResponsivo {

    public bandera = false;


    constructor() { }

    public barsClose(): void {

        const bars = document.getElementById('bars');
        const close = document.getElementById('close');
        const navResp = document.getElementById('navResp');

        setInterval(() => {
            console.log(bars);
        }, 3000);

        bars.addEventListener('click', (e: Event) => {

            e.preventDefault();

            console.log('ok');

            if (this.bandera === false) {
                navResp.style.display = 'flex';
                this.bandera = true;
            } else {
                navResp.style.display = 'none';
                this.bandera = false;
            }

            console.log(this.bandera);
        });
    }
}
