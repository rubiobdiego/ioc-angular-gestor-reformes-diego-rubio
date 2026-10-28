# Gestor de Reformes

## Autor

Diego Alexander Rubio Beltran

## Descripció

Aplicació Angular per consultar i organitzar tasques de reformes.

Inclou 10 tasques de mostra amb títol, descripció, categoria, data
prevista i hores estimades. Algunes tasques estan marcades com a
destacades.

Permet cercar per text i categoria, restablir els filtres, consultar
el nombre de resultats i seleccionar una tasca per veure'n el detall.

Les dades són locals i provenen d'un fitxer mock.

## Versions utilitzades

- Node.js: 24.15.0
- npm: 11.12.1
- Angular CLI: 22.2.1
- Angular: 22.2.1
- TypeScript: 6.0.3
- Git: 2.54.0.windows.1

## Projecte i branca

- Carpeta: `ioc-angular-gestor-reformes-diego-rubio`
- Branca de treball de l'EAC2: `ra2-components`
- Components standalone, routing i estils SCSS.
- Projecte sense SSR.

L'EAC1 es conserva a la branca `ra1-setup`. La branca `ra2-components`
parteix del seu estat final.

## Comanda original de creació

```cmd
ng new ioc-angular-gestor-reformes-diego-rubio --routing --style=scss --ssr=false --standalone=true --file-name-style-guide=2016 --skip-git=true --package-manager=npm --defaults
```

## Instal·lació i execució

Per descarregar la branca de l'EAC2:

```cmd
git clone --branch ra2-components https://github.com/rubiobdiego/ioc-angular-gestor-reformes-diego-rubio.git
cd ioc-angular-gestor-reformes-diego-rubio
npm install
ng serve
```

Obriu http://localhost:4200 al navegador.

## Proves i compilació

Per executar les proves una vegada:

```cmd
ng test --watch=false
```

Per generar la compilació de producció:

```cmd
ng build
```

## Components creats

- `LlistaTasquesComponent`: mostra les tasques i transmet la selecció
  al component principal.
- `TargetaTascaComponent`: mostra el resum d'una tasca i emet
  l'esdeveniment de selecció.
- `EtiquetaCategoriaComponent`: mostra la categoria de cada tasca.
- `FiltresTasquesComponent`: gestiona el formulari de cerca, les
  validacions i els esdeveniments d'aplicació i restabliment.

Els components es troben a `src/app/components`.

La comunicació utilitza `@Input`, `@Output` i `EventEmitter`.

## Model i dades

- Model: `src/app/models/tasca.model.ts`
- Dades mock: `src/app/mocks/tasques.mock.ts`
- Nombre de tasques: 10
- Categories: Preparació, Instal·lacions i Acabats

## Formulari i estats de la interfície

El formulari utilitza `FormsModule` i `[(ngModel)]`.

El text de cerca és obligatori i ha de tenir almenys 3 caràcters.
El botó d'aplicar queda deshabilitat quan la cerca és invàlida.

El filtratge combina el text del títol o la descripció amb la categoria.
El botó «Restablir» recupera totes les tasques i elimina la selecció.

La interfície utilitza `@for` amb `track tasca.id`, `@if` i `@else`.
Mostra un comptador, un missatge sense resultats i un panell de detall.
Les dates es formaten amb el pipe `date`.

## Accessibilitat i disseny responsive

- Enllaç «Saltar al contingut principal», visible en rebre el focus.
- Focus visible en enllaços, botons i camps del formulari.
- Etiquetes `label` associades als camps mitjançant `for` i `id`.
- Errors del formulari amb `role="alert"`.
- Comptador de resultats amb `role="status"`.
- Panell de detall amb `aria-live="polite"`.
- Idioma del document definit com a català.
- Llista i detall distribuïts amb CSS Grid.
- A partir de 760 px d'amplada o menys, el layout passa a una columna.
- Camps del formulari i targetes adaptables a l'espai disponible.

## Repositori

[Repositori públic](https://github.com/rubiobdiego/ioc-angular-gestor-reformes-diego-rubio)

[Branca ra2-components](https://github.com/rubiobdiego/ioc-angular-gestor-reformes-diego-rubio/tree/ra2-components)