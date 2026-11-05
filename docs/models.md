# Models i adaptador de tasques

## Fitxers

- Model de l'API: src/app/models/tasca-api.model.ts
- Model intern: src/app/models/tasca.model.ts
- Adaptador: src/app/adaptadors/tasca.adaptador.ts

## Mapatge API -> model intern

| Camp de l'API | Camp intern | Transformació |
| --- | --- | --- |
| id | id | Es conserva l'identificador numèric. |
| nom | titol | S'eliminen espais als extrems. Si queda buit, s'utilitza "Tasca sense títol". |
| descripcio | descripcio | S'eliminen espais als extrems. Si queda buida, s'utilitza "Sense descripció.". |
| categoria | categoria | Es normalitzen majúscules, accents i separadors. Una categoria desconeguda es transforma en "Altres". |
| data_prevista | dataPrevista | S'eliminen espais i es conserva el format ISO YYYY-MM-DD de l'API. |
| estat | estat | Es transforma en "Pendent", "En curs" o "Completada". El valor per defecte és "Pendent". |
| hores_estimades | horesEstimades | Es converteix a número. Els valors no finits o negatius es substitueixen per 0. |
| destacada | destacada | Si el camp no existeix, s'utilitza false. |

## Flux de dades

TasquesService obté TascaApi[] amb HttpClient.

El mètode obtenirTasques() aplica adaptarTascaApi a cada element
i retorna Tasca[].

El component principal rep les tasques adaptades i actualitza la vista.

## Exemples de normalització

- " Protegir paviments i mobles " es converteix en "Protegir paviments i mobles".
- "PREPARACIO" es converteix en "Preparació".
- " 2 " es converteix en el número 2.
- "en_curs" es converteix en "En curs".
- Un camp destacada absent es converteix en false.