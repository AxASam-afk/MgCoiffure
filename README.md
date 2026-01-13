# MG Coiffure - Site Web Premium

Site web immersif et moderne pour **MG Coiffure Masculin & Féminin**, salon de coiffure haut de gamme à Bram (11150).

## 🎨 Caractéristiques

- **Design Premium** : Interface élégante avec palette de couleurs sophistiquée (noir, brun, beige, or)
- **Animations 3D** : Effets Three.js et GSAP pour une expérience immersive
- **Scroll Animations** : Animations fluides au scroll avec ScrollTrigger
- **Responsive** : Optimisé pour desktop, tablette et mobile
- **Performance** : Lazy loading, optimisations pour une navigation fluide

## 🚀 Technologies

- **HTML5** / **CSS3** / **JavaScript ES6+**
- **GSAP 3.12** avec ScrollTrigger
- **Three.js** pour les effets 3D
- **Google Maps API** pour la localisation

## 📁 Structure du Projet

```
Mg_Coiffure/
├── index.html          # Page principale
├── css/
│   └── main.css        # Styles premium
├── js/
│   └── main.js         # Animations et interactions
├── images/             # Photos du salon (à ajouter)
│   ├── hero-salon.jpg
│   ├── salon-dames.jpg
│   ├── salon-hommes.jpg
│   ├── hair-katsura.jpg
│   ├── coffret-rasage.jpg
│   ├── coffret-barbe.jpg
│   ├── produits.jpg
│   └── galerie-*.jpg
├── package.json
└── README.md
```

## 🖼️ Images Requises

Placez vos images dans le dossier `images/` avec les noms suivants :

- `hero-salon.jpg` - Image principale du hero
- `salon-dames.jpg` - Photo du salon dames
- `salon-hommes.jpg` - Photo du salon hommes
- `hair-katsura.jpg` - Image pour le service Hair Katsura
- `coffret-rasage.jpg` - Photo coffret rasage
- `coffret-barbe.jpg` - Photo coffret barbe
- `produits.jpg` - Photo des produits
- `galerie-1.jpg` à `galerie-6.jpg` - Photos de la galerie (minimum 6)

## 🛠️ Installation et Utilisation

### Développement Local

```bash
# Installer les dépendances (optionnel, utilise CDN)
npm install

# Lancer un serveur local
npm start
# ou
npx serve .
```

Le site sera accessible sur `http://localhost:3000`

### Déploiement

Le site est statique et peut être déployé sur :
- **Netlify**
- **Vercel**
- **GitHub Pages**
- **Serveur web classique** (Apache, Nginx)

1. Ajoutez toutes vos images dans le dossier `images/`
2. Mettez à jour les coordonnées Google Maps dans `index.html` (ligne ~280)
3. Mettez à jour le numéro de téléphone dans `index.html` (ligne ~270)
4. Déployez les fichiers sur votre hébergeur

## 📝 Personnalisation

### Couleurs

Modifiez les variables CSS dans `css/main.css` :

```css
:root {
    --color-black: #0a0a0a;
    --color-brown: #8b6f47;
    --color-gold: #d4af37;
    /* ... */
}
```

### Coordonnées Google Maps

Dans `index.html`, remplacez l'URL de l'iframe Google Maps par vos coordonnées :

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.123456789!2d2.123456!3d43.123456!..."
    ...
></iframe>
```

### Numéro de Téléphone

Remplacez `+33612345678` par votre numéro réel dans `index.html`.

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

## 🔧 Optimisations

- Lazy loading des images
- Animations performantes avec `will-change`
- CSS optimisé avec variables
- JavaScript modulaire et commenté

## 📞 Support

Pour toute question ou personnalisation, contactez le développeur.

---

**MG Coiffure © 2017 - 2026 – Tous droits réservés**  
*Coiffure Dames & Hommes à Bram (Aude)*

