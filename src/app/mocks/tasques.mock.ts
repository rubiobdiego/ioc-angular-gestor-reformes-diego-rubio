import type { Tasca } from '../models/tasca.model';

export const TASQUES_MOCK: Tasca[] = [
  {
    id: 1,
    titol: 'Protegir paviments i mobles',
    descripcio: 'Cobrir les zones de pas abans de començar la reforma.',
    categoria: 'Preparació',
    dataPrevista: '2026-11-02',
    horesEstimades: 2
  },
  {
    id: 2,
    titol: 'Retirar rajoles del bany',
    descripcio: 'Retirar les rajoles antigues de les parets del bany.',
    categoria: 'Preparació',
    dataPrevista: '2026-11-03',
    horesEstimades: 8,
    destacada: true
  },
  {
    id: 3,
    titol: 'Enderrocar envà interior',
    descripcio: 'Retirar un envà per ampliar la zona de la cuina.',
    categoria: 'Preparació',
    dataPrevista: '2026-11-04',
    horesEstimades: 6
  },
  {
    id: 4,
    titol: 'Renovar cablejat elèctric',
    descripcio: 'Substituir el cablejat i revisar els circuits.',
    categoria: 'Instal·lacions',
    dataPrevista: '2026-11-05',
    horesEstimades: 12,
    destacada: true
  },
  {
    id: 5,
    titol: 'Instal·lar punts de llum',
    descripcio: 'Preparar connexions per als nous punts de llum.',
    categoria: 'Instal·lacions',
    dataPrevista: '2026-11-06',
    horesEstimades: 4
  },
  {
    id: 6,
    titol: 'Renovar canonades',
    descripcio: 'Canviar les canonades del bany i de la cuina.',
    categoria: 'Instal·lacions',
    dataPrevista: '2026-11-09',
    horesEstimades: 10
  },
  {
    id: 7,
    titol: 'Col·locar paviment ceràmic',
    descripcio: 'Col·locar les rajoles del nou paviment.',
    categoria: 'Acabats',
    dataPrevista: '2026-11-10',
    horesEstimades: 16,
    destacada: true
  },
  {
    id: 8,
    titol: 'Pintar parets i sostres',
    descripcio: 'Preparar les superfícies i aplicar la pintura.',
    categoria: 'Acabats',
    dataPrevista: '2026-11-11',
    horesEstimades: 12
  },
  {
    id: 9,
    titol: 'Muntar portes interiors',
    descripcio: 'Col·locar les portes i ajustar els marcs.',
    categoria: 'Acabats',
    dataPrevista: '2026-11-12',
    horesEstimades: 6
  },
  {
    id: 10,
    titol: 'Segellar juntes del bany',
    descripcio: 'Segellar les juntes de la dutxa i del rentamans.',
    categoria: 'Acabats',
    dataPrevista: '2026-11-13',
    horesEstimades: 3
  }
];