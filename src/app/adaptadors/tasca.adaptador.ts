import type { TascaApi } from '../models/tasca-api.model';
import type { CategoriaTasca, EstatTasca, Tasca } from '../models/tasca.model';

function normalitzarClau(valor: string): string {
  return valor
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[·_\s-]/g, '');
}

function normalitzarCategoria(valor: string): CategoriaTasca {
  switch (normalitzarClau(valor)) {
    case 'preparacio':
      return 'Preparació';
    case 'installacions':
      return 'Instal·lacions';
    case 'acabats':
      return 'Acabats';
    default:
      return 'Altres';
  }
}

function normalitzarEstat(valor: string): EstatTasca {
  switch (normalitzarClau(valor)) {
    case 'encurs':
      return 'En curs';
    case 'completada':
      return 'Completada';
    default:
      return 'Pendent';
  }
}

export function adaptarTascaApi(dades: TascaApi): Tasca {
  const hores = typeof dades.hores_estimades === 'string'
    ? Number(dades.hores_estimades.trim())
    : dades.hores_estimades;

  return {
    id: dades.id,
    titol: dades.nom.trim() || 'Tasca sense títol',
    descripcio: dades.descripcio.trim() || 'Sense descripció.',
    categoria: normalitzarCategoria(dades.categoria),
    dataPrevista: dades.data_prevista.trim(),
    estat: normalitzarEstat(dades.estat),
    horesEstimades: Number.isFinite(hores) && hores >= 0 ? hores : 0,
    destacada: dades.destacada ?? false,
  };
}