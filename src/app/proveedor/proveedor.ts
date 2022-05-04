import { GrupoMusical } from "../grupo-musical-module/grupoMusical";
import { RedSocial } from "../red-social/red-social";

export class Proveedor {
  id: number;
  nombre: string;
  descripcion: string;
  trayectoria: string;
  calificacion: string;
  imagen: string;
  redesSociales: RedSocial[];
  gruposMusicales: GrupoMusical[];
  // comentarios: Comentario[],
  // equiposSonido: EquipoSonido[],
  // paquetes: Paquete[],
  // zonas: Zona[],
  // eventos: Evento[]

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    trayectoria: string,
    calificacion: string,
    imagen: string,
    redesSociales: RedSocial[],
    gruposMusicales: GrupoMusical[]
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.trayectoria = trayectoria;
    this.calificacion = calificacion;
    this.imagen = imagen;
    this.redesSociales = redesSociales;
    this.gruposMusicales = gruposMusicales;
  }

  //Retorna los id de los grupos musicales

  public getIdGruposMusicales(): number[] {
    let idGrupos: number[] = [];
    for (let i = 0; i < this.gruposMusicales.length; i++) {
      idGrupos.push(this.gruposMusicales[i].id);
    }
    return idGrupos;
  }

}
