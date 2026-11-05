export type CategoriaTasca =
  | 'Preparació'
  | 'Instal·lacions'
  | 'Acabats'
  | 'Altres';

export type EstatTasca = 'Pendent' | 'En curs' | 'Completada';

export interface Tasca {
  id: number;
  titol: string;
  descripcio: string;
  categoria: CategoriaTasca;
  dataPrevista: string;
  estat: EstatTasca;
  horesEstimades: number;
  destacada?: boolean;
}