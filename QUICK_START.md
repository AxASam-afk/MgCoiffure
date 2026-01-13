# 🚀 Guide de Démarrage Rapide (Vite)

## Étape 1 : Installation

```bash
# Installer les dépendances
npm install
```

## Étape 2 : Ajouter vos images

Placez toutes vos photos dans le dossier `public/images/` avec les noms suivants :

- ✅ `hero-salon.jpg` - Photo principale
- ✅ `salon-dames.jpg` - Salon dames
- ✅ `salon-hommes.jpg` - Salon hommes  
- ✅ `hair-katsura.jpg` - Service Hair Katsura
- ✅ `coffret-rasage.jpg` - Coffret rasage
- ✅ `coffret-barbe.jpg` - Coffret barbe
- ✅ `produits.jpg` - Produits
- ✅ `galerie-1.jpg` à `galerie-6.jpg` - Galerie (minimum 6)

## Étape 3 : Personnaliser les informations

### Modifier dans `src/app.html`

1. **Numéro de téléphone** (ligne ~63) :
   ```html
   <a href="tel:+33612345678" class="btn btn-secondary">
   ```
   Remplacez `+33612345678` par votre numéro.

2. **Google Maps** (ligne ~336) :
   ```html
   <iframe src="https://www.google.com/maps/embed?pb=..." ...>
   ```
   Remplacez l'URL par votre iframe Google Maps.

3. **Réseaux sociaux** (ligne ~330) :
   ```html
   <a href="#" class="social-link">Facebook</a>
   ```
   Remplacez `#` par vos URLs.

## Étape 4 : Lancer en développement

```bash
npm run dev
```

Le site sera accessible sur `http://localhost:3000` avec hot-reload automatique.

## Étape 5 : Build de production

```bash
npm run build
```

Le build optimisé sera généré dans le dossier `dist/`.

## Étape 6 : Déployer

### Vercel (Automatique)

1. Le fichier `vercel.json` est déjà configuré
2. Connectez votre repository GitHub à Vercel
3. Vercel détectera automatiquement Vite et déploiera

### Netlify

Créez un fichier `netlify.toml` :
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

### Autres

Uploadez le contenu du dossier `dist/` sur votre hébergeur.

## ✅ Checklist avant déploiement

- [ ] `npm install` exécuté
- [ ] Toutes les images sont dans `public/images/`
- [ ] Le numéro de téléphone est correct dans `src/app.html`
- [ ] La carte Google Maps fonctionne
- [ ] Les liens réseaux sociaux sont à jour
- [ ] `npm run build` fonctionne sans erreur
- [ ] Le site fonctionne sur mobile (test avec `npm run preview`)

## 🎨 Personnalisation avancée

### Changer les couleurs

Modifiez les variables dans `src/main.css` (lignes 10-20) :

```css
:root {
    --color-gold: #d4af37;  /* Changez cette couleur */
    --color-brown: #8b6f47; /* Et celle-ci */
    /* ... */
}
```

### Désactiver les animations

Dans `src/config.js` :

```javascript
animations: {
    enabled: false,  // Changez à false
    // ...
}
```

## 🐛 Dépannage

### Erreur "Cannot find module"

```bash
# Supprimez node_modules et réinstallez
rm -rf node_modules package-lock.json
npm install
```

### Le site ne se charge pas

Vérifiez que vous êtes dans le bon dossier et que `npm run dev` est lancé.

### Les images ne s'affichent pas

Vérifiez que les images sont bien dans `public/images/` et que les noms correspondent exactement.

---

**Bon développement ! 🚀**
