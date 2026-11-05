export interface TascaApi {
  id: number;
  nom: string;
  descripcio: string;
  categoria: string;
  data_prevista: string;
  estat: string;
  hores_estimades: number | string;
  destacada?: boolean;
}