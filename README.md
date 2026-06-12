# clubcode.fr

Site vitrine du Club Code de Télécom SudParis. Une page statique, sous Astro 5, FR / EN.

## Commandes

```bash
npm install
npm run dev   
npm run build
npm run preview
```

## Structure

- `src/i18n/ui.ts` — **tous les textes FR/EN et les liens**. C'est le seul fichier à toucher pour modifier le contenu.
- `src/components/` sections, composants.
- `public/` médias statiques.

## Déploiement

`npm run build` produit un dossier `dist/` statique, servi tel quel par n'importe quel serveur web (nginx, Caddy, etc.).
