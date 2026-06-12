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

Exemple de configuration nginx (`/etc/nginx/conf.d/clubcode.fr.conf`), le TLS étant ensuite ajouté par `certbot --nginx` :

```nginx
map $uri $cache_control {
    ~^/_astro/  "public, max-age=31536000, immutable";
    ~^/fonts/   "public, max-age=31536000, immutable";
    default     "no-cache";
}

server {
    listen 80;
    listen [::]:80;
    server_name clubcode.fr www.clubcode.fr;

    root /var/www/clubcode.fr/dist;
    index index.html;
    charset utf-8;
    server_tokens off;

    add_header Cache-Control $cache_control always;

    add_header Content-Security-Policy "default-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none'; frame-ancestors 'none'; base-uri 'self'" always;
    add_header X-Content-Type-Options nosniff always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;
    # add_header Strict-Transport-Security "max-age=63072000" always;

    location / {
        try_files $uri $uri/ =404;
    }

    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_min_length 256;
    gzip_types text/css application/javascript text/javascript image/svg+xml;
}
```
