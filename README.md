# MG Coiffure - Site Web Premium (Vite)

Site web immersif et moderne pour **MG Coiffure Masculin & Féminin**, salon de coiffure haut de gamme à Bram (11150).

## 🎨 Caractéristiques

- **Design Premium** : Interface élégante avec palette de couleurs sophistiquée (noir, brun, beige, or)
- **Animations 3D** : Effets Three.js et GSAP pour une expérience immersive
- **Scroll Animations** : Animations fluides au scroll avec ScrollTrigger
- **Responsive** : Optimisé pour desktop, tablette et mobile
- **Performance** : Build optimisé avec Vite, lazy loading, optimisations

## 🚀 Technologies

- **Vite** - Build tool ultra-rapide
- **HTML5** / **CSS3** / **JavaScript ES6+**
- **GSAP 3.12** avec ScrollTrigger
- **Three.js** pour les effets 3D
- **Google Maps API** pour la localisation

## 📁 Structure du Projet

```
Mg_Coiffure/
├── index.html          # Point d'entrée Vite
├── vite.config.js      # Configuration Vite
├── package.json        # Dépendances npm
├── public/            # Assets statiques (images)
│   └── images/        # Photos du salon
├── src/               # Code source
│   ├── main.js        # Point d'entrée JavaScript
│   ├── main.css       # Styles premium
│   ├── app.html       # Contenu HTML de l'application
│   └── config.js      # Configuration
└── dist/              # Build de production (généré)
```

## 🖼️ Images Requises

Placez vos images dans le dossier `public/images/` avec les noms suivants :

- `hero-salon.jpg` - Image principale du hero
- `salon-dames.jpg` - Photo du salon dames
- `salon-hommes.jpg` - Photo du salon hommes
- `hair-katsura.jpg` - Image pour le service Hair Katsura
- `coffret-rasage.jpg` - Photo coffret rasage
- `coffret-barbe.jpg` - Photo coffret barbe
- `produits.jpg` - Photo des produits
- `galerie-1.jpg` à `galerie-6.jpg` - Photos de la galerie (minimum 6)

## 🛠️ Installation et Utilisation

### Prérequis

- Node.js 18+ et npm

### Installation

```bash
# Installer les dépendances
npm install
```

### Développement

```bash
# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000` avec hot-reload automatique.

### Build de Production

```bash
# Créer le build optimisé
npm run build
```

Le build sera généré dans le dossier `dist/`.

### Prévisualisation du Build

```bash
# Prévisualiser le build de production
npm run preview
```

## 📝 Personnalisation

### Couleurs

Modifiez les variables CSS dans `src/main.css` :

```css
:root {
    --color-gold: #d4af37;  /* Changez cette couleur */
    --color-brown: #8b6f47; /* Et celle-ci */
    /* ... */
}
```

### Coordonnées Google Maps

Dans `src/app.html`, remplacez l'URL de l'iframe Google Maps par vos coordonnées.

### Numéro de Téléphone

Remplacez `+33612345678` par votre numéro réel dans `src/app.html`.

## 🚀 Déploiement

### Vercel (Recommandé)

Le fichier `vercel.json` est déjà configuré. Il suffit de :

1. Connecter votre repository GitHub à Vercel
2. Vercel détectera automatiquement la configuration Vite
3. Le build se fera automatiquement à chaque push

### Netlify

1. Créez un fichier `netlify.toml` :
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

2. Connectez votre repository à Netlify

### Autres Plateformes

Le dossier `dist/` contient tous les fichiers statiques nécessaires. Vous pouvez le déployer sur n'importe quel hébergeur statique.

## 🎯 Sections du Site

1. **Hero** - Section d'accueil avec logo 3D et animations
2. **Le Salon** - Présentation des univers Dames & Hommes
3. **Services Premium** - Mise en avant Hair Katsura
4. **Cartes Cadeaux** - Offres avec effets 3D
5. **Coffrets Cadeaux** - Produits et offres spéciales
6. **Fusion & Identité** - Histoire du salon
7. **Galerie** - Photos avec lightbox
8. **Contact** - Adresse, carte, réseaux sociaux

## 📱 Responsive Design

- **Desktop** : Expérience complète avec tous les effets 3D
- **Tablette** : Adaptations des grilles et espacements
- **Mobile** : Menu hamburger, optimisations tactiles

## 🔧 Scripts Disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualiser le build

## 📞 Support

Pour toute question ou personnalisation, contactez le développeur.

---

**MG Coiffure © 2017 - 2026 – Tous droits réservés**  
*Coiffure Dames & Hommes à Bram (Aude)*
