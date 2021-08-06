export interface Servicio {
    ImgBanner: string;
    tituloBanner: string;
    descripcionBanner: string;
    servicio: Array<DetalleServicio>;
}

interface DetalleServicio {
    imgServicio: string;
    tituloServicio: string;
    descServicio: string;
    revers?: boolean;
}
