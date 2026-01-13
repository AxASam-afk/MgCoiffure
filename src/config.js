/**
 * MG COIFFURE - CONFIGURATION
 * Personnalisez facilement les informations du site
 */

const SITE_CONFIG = {
    // Informations de contact
    contact: {
        phone: '+33612345678', // Remplacez par votre numéro
        address: {
            street: 'Bram',
            city: 'Bram',
            postalCode: '11150',
            region: 'Aude',
            country: 'France'
        },
        // Coordonnées GPS pour Google Maps
        coordinates: {
            lat: 43.123456, // Latitude de Bram
            lng: 2.123456   // Longitude de Bram
        }
    },
    
    // Réseaux sociaux
    social: {
        facebook: '#', // URL de votre page Facebook
        instagram: '#'  // URL de votre compte Instagram
    },
    
    // Google Maps
    maps: {
        // URL complète de l'iframe Google Maps
        // Générez-la sur https://www.google.com/maps
        embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2900.123456789!2d2.123456!3d43.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDA3JzI0LjQiTiAywrAwNyczNC40IkU!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr'
    },
    
    // Animations
    animations: {
        enabled: true,
        speed: 'normal', // 'slow', 'normal', 'fast'
        parallax: true
    },
    
    // Images (chemins depuis public/)
    images: {
        hero: '/images/hero-salon.jpg',
        salonDames: '/images/salon-dames.jpg',
        salonHommes: '/images/salon-hommes.jpg',
        hairKatsura: '/images/hair-katsura.jpg',
        coffretRasage: '/images/coffret-rasage.jpg',
        coffretBarbe: '/images/coffret-barbe.jpg',
        produits: '/images/produits.jpg',
        galerie: [
            '/images/galerie-1.jpg',
            '/images/galerie-2.jpg',
            '/images/galerie-3.jpg',
            '/images/galerie-4.jpg',
            '/images/galerie-5.jpg',
            '/images/galerie-6.jpg'
        ]
    }
};

// Export pour utilisation dans main.js (ES modules)
export default SITE_CONFIG;

