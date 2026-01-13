/**
 * Utilitaire pour gérer les images du site
 * Assure la correspondance entre les zones et les images
 */

import SITE_CONFIG from '../config.js';

/**
 * Applique les images depuis la configuration aux éléments correspondants
 */
export function applyImagesFromConfig() {
    const config = SITE_CONFIG.images;
    
    // Hero image
    const heroImage = document.getElementById('heroImage');
    if (heroImage) {
        heroImage.style.backgroundImage = `url('${config.hero}')`;
    }
    
    // Appliquer les images via data-image attribute (méthode principale)
    document.querySelectorAll('[data-image]').forEach(element => {
        const imageKey = element.getAttribute('data-image');
        if (config[imageKey]) {
            element.style.backgroundImage = `url('${config[imageKey]}')`;
        }
    });
    
    // Galerie - utilise data-galerie-index pour correspondance exacte
    const galerieItems = document.querySelectorAll('.galerie-item');
    galerieItems.forEach((item) => {
        const index = parseInt(item.getAttribute('data-galerie-index'));
        if (!isNaN(index) && config.galerie && config.galerie[index]) {
            const galerieImage = item.querySelector('.image-placeholder');
            if (galerieImage) {
                galerieImage.style.backgroundImage = `url('${config.galerie[index]}')`;
            }
        }
    });
}

/**
 * Vérifie si une image existe
 */
export async function checkImageExists(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = url;
    });
}

/**
 * Applique un fallback si l'image n'existe pas
 */
export function applyImageFallback(element, fallbackColor = '#a0826d') {
    element.style.backgroundColor = fallbackColor;
    element.style.backgroundImage = 'none';
    if (!element.querySelector('.image-fallback-text')) {
        const fallbackText = document.createElement('div');
        fallbackText.className = 'image-fallback-text';
        fallbackText.style.cssText = 'display: flex; align-items: center; justify-content: center; height: 100%; color: rgba(255,255,255,0.5); font-size: 0.9rem;';
        fallbackText.textContent = 'Image à venir';
        element.appendChild(fallbackText);
    }
}

