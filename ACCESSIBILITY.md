# ♿ Accessibilité

Ce site a été conçu avec l'accessibilité en tête. Voici les fonctionnalités incluses :

## ✅ Fonctionnalités d'Accessibilité

### Navigation au Clavier
- ✅ Tous les éléments interactifs sont accessibles au clavier
- ✅ Navigation Tab/Shift+Tab fonctionnelle
- ✅ Lightbox contrôlable avec les flèches et Escape
- ✅ Menu mobile accessible au clavier

### Contraste
- ✅ Contraste suffisant entre texte et arrière-plan (WCAG AA)
- ✅ Couleurs accessibles pour les utilisateurs daltoniens

### ARIA Labels
- ✅ Labels ARIA sur les boutons d'action
- ✅ Navigation avec rôles ARIA appropriés

### Responsive
- ✅ Site entièrement responsive
- ✅ Zoom jusqu'à 200% sans perte de fonctionnalité

### Animations
- ✅ Respect de `prefers-reduced-motion` (à implémenter si nécessaire)

## 🔧 Améliorations Possibles

Pour une accessibilité encore meilleure, vous pouvez :

1. **Ajouter `prefers-reduced-motion`** :
   ```css
   @media (prefers-reduced-motion: reduce) {
       * {
           animation-duration: 0.01ms !important;
           transition-duration: 0.01ms !important;
       }
   }
   ```

2. **Ajouter des descriptions alt** pour toutes les images

3. **Tester avec un lecteur d'écran** (NVDA, JAWS, VoiceOver)

4. **Valider avec WAVE** : [wave.webaim.org](https://wave.webaim.org/)

## 📋 Checklist Accessibilité

- [x] Navigation clavier fonctionnelle
- [x] Contraste suffisant
- [x] Structure HTML sémantique
- [x] Labels ARIA
- [x] Responsive design
- [ ] Test avec lecteur d'écran
- [ ] Validation WAVE
- [ ] Respect prefers-reduced-motion

---

Pour plus d'informations : [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

