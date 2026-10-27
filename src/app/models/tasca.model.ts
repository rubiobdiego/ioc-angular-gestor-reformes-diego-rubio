export type CategoriaTasca =
  | 'Preparació'
  | 'Instal·lacions'
  | 'Acabats';

export interface Tasca {
  id: number;
  titol: string;
  descripcio: string;
  categoria: CategoriaTasca;
  dataPrevista: string;
  horesEstimades: number;
  destacada?: boolean;
}