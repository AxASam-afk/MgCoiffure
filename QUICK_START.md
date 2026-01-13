# 🚀 Guide de Démarrage Rapide

## Étape 1 : Ajouter vos images

Placez toutes vos photos dans le dossier `images/` avec les noms suivants :

- ✅ `hero-salon.jpg` - Photo principale
- ✅ `salon-dames.jpg` - Salon dames
- ✅ `salon-hommes.jpg` - Salon hommes  
- ✅ `hair-katsura.jpg` - Service Hair Katsura
- ✅ `coffret-rasage.jpg` - Coffret rasage
- ✅ `coffret-barbe.jpg` - Coffret barbe
- ✅ `produits.jpg` - Produits
- ✅ `galerie-1.jpg` à `galerie-6.jpg` - Galerie (minimum 6)

## Étape 2 : Personnaliser les informations

### Option A : Modifier directement dans `index.html`

1. **Numéro de téléphone** (ligne ~322) :
   ```html
   <a href="tel:+33612345678" class="btn btn-primary">
   ```
   Remplacez `+33612345678` par votre numéro.

2. **Google Maps** (ligne ~340) :
   ```html
   <iframe src="https://www.google.com/maps/embed?pb=..." ...>
   ```
   Remplacez l'URL par votre iframe Google Maps.

3. **Réseaux sociaux** (ligne ~329) :
   ```html
   <a href="#" class="social-link">Facebook</a>
   ```
   Remplacez `#` par vos URLs.

### Option B : Utiliser `js/config.js` (recommandé)

Modifiez le fichier `js/config.js` avec vos informations, puis mettez à jour `js/main.js` pour utiliser ces valeurs.

## Étape 3 : Tester localement

```bash
# Option 1 : Avec npm
npm start

# Option 2 : Avec npx
npx serve .

# Option 3 : Ouvrir directement
# Ouvrez index.html dans votre navigateur
```

## Étape 4 : Déployer

### Netlify
1. Glissez-déposez le dossier sur [netlify.com/drop](https://app.netlify.com/drop)
2. C'est tout ! 🎉

### Vercel
```bash
npx vercel
```

### GitHub Pages
1. Créez un repository GitHub
2. Activez GitHub Pages dans les paramètres
3. Le site sera disponible sur `username.github.io/repo-name`

## ✅ Checklist avant déploiement

- [ ] Toutes les images sont ajoutées dans `images/`
- [ ] Le numéro de téléphone est correct
- [ ] La carte Google Maps fonctionne
- [ ] Les liens réseaux sociaux sont à jour
- [ ] Le site fonctionne sur mobile
- [ ] Toutes les animations sont fluides

## 🎨 Personnalisation avancée

### Changer les couleurs

Modifiez les variables dans `css/main.css` (lignes 10-20) :

```css
:root {
    --color-gold: #d4af37;  /* Changez cette couleur */
    --color-brown: #8b6f47; /* Et celle-ci */
    /* ... */
}
```

### Désactiver les animations

Dans `js/config.js` :

```javascript
animations: {
    enabled: false,  // Changez à false
    // ...
}
```

## 📞 Besoin d'aide ?

Consultez le `README.md` pour plus de détails.

---

**Bon déploiement ! 🚀**

