// Translations object
const translations = {
  fr: {
    // Navigation
    "nav-home": "Accueil",
    "nav-services": "Services",
    "nav-features": "Fonctionnalités",
    "nav-about": "À propos",
    "nav-contact": "Contact",
    "nav-inscription": "Inscription",
    "nav-mentorat": "Mentorat",

    // Hero section
    "hero-title": "xaam ça yoon.<span class=\"muted\">Votre assistant juridique et Fiscalité</span>.",
    "hero-subtitle": "Rendez le droit accessible : conseils rapides, génération de documents, simulateurs fiscaux et mise en relation avec des experts.",
    "hero-signup": "S'inscrire",
    "hero-quote": "Demander un devis",
    "hero-demo": "Démo Chat",
    "hero-demo-subtitle": "remplie le formalite Demander.",
    "hero-quick-q": "Ex: Ecrite votre nom et prenom ?",
    "hero-ask": "Poser",
    "hero-templates": "Modèles rapides",
    "hero-generate": "Générer",

    // Services
    "services-title": "Nos services",
    "service-chatbot": "Chatbot IA",
    "service-chatbot-desc": "Assistant instantané pour questions juridiques et fiscales. Intégration OpenAI possible.",
    "service-generator": "Générateur de documents",
    "service-generator-desc": "Création et téléchargement de contrats, lettres officielles et attestations.",
    "service-matching": "Mise en relation",
    "service-matching-desc": "Référencement d'avocats et experts fiscaux au Sénégal.",
    "service-simulators": "Simulateurs fiscaux",
    "service-simulators-desc": "Calculez impôts, TVA, et charges sociales avec guides pas‑à‑pas.",

    // Features
    "features-title": "Fonctionnalités",
    "feature-history": "Historique et export",
    "feature-history-desc": "Sauvegardez vos conversations, exportez PDF.",
    "feature-templates": "Templates personnalisés",
    "feature-templates-desc": "Créez des modèles de contrats selon votre entreprise.",
    "feature-connection": "Connexion experts",
    "feature-connection-desc": "Prise de rendez‑vous, paiement en ligne possible.",
    "feature-security": "Sécurité & conformité",
    "feature-security-desc": "Chiffrement, stockage conforme et politique de confidentialité.",

    // About
    "about-title": "À propos",
    "about-subtitle": "Découvrez l'histoire et la mission de YOON, votre partenaire juridique au Sénégal.",
    "about-mission": "Notre Mission",
    "about-mission-text": "YOON signifie « loi » en wolof. Nous aidons les particuliers et professionnels au Sénégal à comprendre et appliquer la loi via des outils numériques simples et accessibles.",
    "about-platform": "Notre plateforme révolutionne l'accès au droit en combinant intelligence artificielle, génération automatique de documents et mise en relation avec des experts qualifiés.",
    "about-accessibility": "Accessibilité",
    "about-accessibility-desc": "Rendre le droit accessible à tous, sans barrières linguistiques ou géographiques.",
    "about-innovation": "Innovation",
    "about-innovation-desc": "Utiliser les dernières technologies pour simplifier les démarches juridiques.",
    "about-community": "Communauté",
    "about-community-desc": "Construire une communauté de professionnels et de citoyens informés.",

    // Gallery
    "gallery-title": "Photos de droit",
    "gallery-law-title": "Le Droit au Sénégal",
    "gallery-law-desc": "Symbolisant le droit et la justice au Sénégal, ces institutions représentent les fondements de notre système juridique moderne.",
    "gallery-balance-title": "La Balance de la Justice",
    "gallery-balance-desc": "La balance de la justice, garante de l'équité et de l'impartialité dans tous les domaines du droit sénégalais.",
    "gallery-contracts-title": "Les Contrats Juridiques",
    "gallery-contracts-desc": "Un contrat signé représente la base des accords juridiques, essentiel pour la sécurité des transactions commerciales.",

    // Contact
    "contact-title": "Contactez-nous",
    "contact-subtitle": "Nous sommes là pour répondre à toutes vos questions. N'hésitez pas à nous contacter !",
    "contact-info-title": "Informations de contact",
    "contact-address-label": "Adresse :",
    "contact-address-value": "Dakar, Sénégal",
    "contact-phone-label": "Téléphone :",
    "contact-phone-value": "+221 76 690 2590",
    "contact-email-label": "Email :",
    "contact-email-value": "contact@yoon.sn",
    "contact-form-title": "Envoyez-nous un message",
    "contact-cabinet": "Sélectionnez un cabinet",
    "contact-name": "Nom",
    "contact-name-placeholder": "Votre nom",
    "contact-email-placeholder": "Votre email",
    "contact-message": "Message",
    "contact-message-placeholder": "Votre message",
    "contact-send": "Envoyer",

    // Footer
    "footer-newsletter": "Restez informé",
    "footer-newsletter-input": "Votre email",
    "footer-subscribe": "S'abonner",
    "footer-quick-links": "Liens rapides",
    "footer-contact": "Contact",
    "footer-privacy": "Politique de confidentialité",
    "footer-terms": "Conditions d'utilisation",
    "footer-legal": "Mentions légales",
    "footer-copyright": "© 2024 YOON - Legal-Tech Sénégal. Tous droits réservés.",

    // Inscription page
    "inscription-title": "Inscription",
    "inscription-subtitle": "Créez votre compte pour accéder à nos services personnalisés.",
    "inscription-fullname": "Nom complet",
    "inscription-fullname-placeholder": "Votre nom complet",
    "inscription-email": "Email",
    "inscription-email-placeholder": "votre.email@example.com",
    "inscription-phone": "Téléphone (WhatsApp)",
    "inscription-phone-placeholder": "+221 XX XXX XX XX",
    "inscription-password": "Mot de passe",
    "inscription-password-placeholder": "Minimum 8 caractères",
    "inscription-confirm-password": "Confirmer le mot de passe",
    "inscription-confirm-placeholder": "Répétez votre mot de passe",
    "inscription-submit": "S'inscrire",

    // Mentorat page
    "mentorat-videos-title": "Vidéos Tutoriels",
    "mentorat-videos-subtitle": "Découvrez nos vidéos explicatives pour une inscription simplifiée",
    "mentorat-video1-title": "Inscription Étape par Étape",
    "mentorat-video1-desc": "Guide vidéo complet pour créer votre compte YOON en 5 minutes",
    "mentorat-video2-title": "Premiers Pas sur la Plateforme",
    "mentorat-video2-desc": "Découvrez l'interface et les fonctionnalités principales",
    "mentorat-video3-title": "Générer votre Premier Document",
    "mentorat-video3-desc": "Créez votre premier contrat en quelques clics",

    "mentorat-cours-title": "Cours en Droit & Documents",
    "mentorat-cours-subtitle": "Apprenez les bases du droit sénégalais avec nos cours gratuits",
    "mentorat-cours1-title": "Introduction au Droit des Contrats",
    "mentorat-cours1-desc": "Apprenez les principes fondamentaux des contrats au Sénégal",
    "mentorat-cours1-duration": "Durée: 45 min",
    "mentorat-cours1-button": "Commencer",
    "mentorat-cours2-title": "Fiscalité des Entreprises",
    "mentorat-cours2-desc": "Comprendre la TVA, l'impôt sur les sociétés et les charges sociales",
    "mentorat-cours2-duration": "Durée: 60 min",
    "mentorat-cours2-button": "Commencer",
    "mentorat-cours3-title": "Droit du Travail",
    "mentorat-cours3-desc": "CDD, CDI, licenciement : tout ce qu'il faut savoir",
    "mentorat-cours3-duration": "Durée: 50 min",
    "mentorat-cours3-button": "Commencer",
    "mentorat-documents-title": "Modèles de Documents",
    "mentorat-documents-desc": "Téléchargez gratuitement nos modèles de contrats et lettres",
    "mentorat-documents-count": "20+ modèles",
    "mentorat-documents-button": "Explorer",

    "mentorat-reviews-title": "Avis des Utilisateurs",
    "mentorat-reviews-subtitle": "Découvrez ce que disent nos utilisateurs de la plateforme YOON",
    "mentorat-review-form-title": "Laissez votre avis",
    "mentorat-review-name": "Votre nom",
    "mentorat-review-email": "Votre email",
    "mentorat-review-rating": "Note :",
    "mentorat-review-message": "Partagez votre expérience avec YOON...",
    "mentorat-review-submit": "Publier mon avis",

    "hero-service1-title": "Conseils instantanés",
    "hero-service1-desc": "Réponses claires via le chatbot (IA) pour questions générales.",
    "hero-service2-title": "Générateur de contrats",
    "hero-service2-desc": "Modèles prêts à remplir (CDD, bail, contrat de prestation).",
    "hero-demo-title": "Démo Chat",
    "hero-demo-input-placeholder": "Ex: Ecrite votre nom et prenom ?",
    "hero-demo-ask": "Poser",
    "hero-demo-templates-title": "Modèles rapides",
    "hero-demo-option1": "Contrat de Prestation",
    "hero-demo-option2": "Lettre Mise en Demeure",
    "hero-demo-option3": "Cession de Créance",
    "hero-demo-option4": "Contrat de Bail",
    "hero-demo-generate": "Générer",
    "services-chatbot-title": "Chatbot IA",
    "services-chatbot-desc": "Assistant instantané pour questions juridiques et fiscales. Intégration OpenAI possible.",
    "services-generator-title": "Générateur de documents",
    "services-generator-desc": "Création et téléchargement de contrats, lettres officielles et attestations.",
    "services-connection-title": "Mise en relation",
    "services-connection-desc": "Référencement d'avocats et experts fiscaux au Sénégal.",
    "services-simulators-title": "Simulateurs fiscaux",
    "services-simulators-desc": "Calculez impôts, TVA, et charges sociales avec guides pas‑à‑pas.",
    "features-history-title": "Historique et export",
    "features-history-desc": "Sauvegardez vos conversations, exportez PDF.",
    "features-templates-title": "Templates personnalisés",
    "features-templates-desc": "Créez des modèles de contrats selon votre entreprise.",
    "features-experts-title": "Connexion experts",
    "features-experts-desc": "Prise de rendez‑vous, paiement en ligne possible.",
    "features-security-title": "Sécurité & conformité",
    "features-security-desc": "Chiffrement, stockage conforme et politique de confidentialité.",
    "gallery-item1-title": "Le Droit au Sénégal",
    "gallery-item1-desc": "Symbolisant le droit et la justice au Sénégal, ces institutions représentent les fondements de notre système juridique moderne.",
    "gallery-item2-title": "La Balance de la Justice",
    "gallery-item2-desc": "La balance de la justice, garante de l'équité et de l'impartialité dans tous les domaines du droit sénégalais.",
    "gallery-item3-title": "Les Contrats Juridiques",
    "gallery-item3-desc": "Un contrat signé représente la base des accords juridiques, essentiel pour la sécurité des transactions commerciales.",
    "about-mission-title": "Notre Mission",
    "about-mission-desc1": "YOON signifie « loi » en wolof. Nous aidons les particuliers et professionnels au Sénégal à comprendre et appliquer la loi via des outils numériques simples et accessibles.",
    "about-mission-desc2": "Notre plateforme révolutionne l'accès au droit en combinant intelligence artificielle, génération automatique de documents et mise en relation avec des experts qualifiés.",
    "about-feature1-title": "Accessibilité",
    "about-feature1-desc": "Rendre le droit accessible à tous, sans barrières linguistiques ou géographiques.",
    "about-feature2-title": "Innovation",
    "about-feature2-desc": "Utiliser les dernières technologies pour simplifier les démarches juridiques.",
    "about-feature3-title": "Communauté",
    "about-feature3-desc": "Construire une communauté de professionnels et de citoyens informés.",
    "contact-form-title": "Envoyez-nous un message",
    "contact-cabinet": "Sélectionnez un cabinet",
    "contact-name": "Nom",
    "contact-name-placeholder": "Votre nom",
    "contact-email-placeholder": "Votre email",
    "contact-message": "Message",
    "contact-message-placeholder": "Votre message",
    "contact-send": "Envoyer",
    "contact-form-cabinet-option1": "Cabinet de Droit Civil",
    "contact-form-cabinet-option2": "Cabinet de Droit Pénal",
    "contact-form-cabinet-option3": "Cabinet de Droit Commercial",
    "contact-form-cabinet-option4": "Cabinet de Droit Fiscal",
    "contact-form-cabinet-option5": "Cabinet de Droit du Travail",
    "contact-form-cabinet-option6": "Cabinet de Droit de la Famille",
    "contact-form-cabinet-option7": "Cabinet de Notaire",
    "contact-form-cabinet-option8": "Cabinet d'Avocate",

    "footer-newsletter": "Restez informé",
    "footer-newsletter-input": "Votre email",
    "footer-subscribe": "S'abonner",
    "footer-quick-links": "Liens rapides",
    "footer-contact": "Contact",
    "footer-privacy": "Politique de confidentialité",
    "footer-terms": "Conditions d'utilisation",
    "footer-legal": "Mentions légales",
    "footer-copyright": "© 2024 YOON - Legal-Tech Sénégal. Tous droits réservés."
  },

  en: {
    // Navigation
    "nav-home": "Home",
    "nav-services": "Services",
    "nav-features": "Features",
    "nav-about": "About",
    "nav-contact": "Contact",
    "nav-inscription": "Sign Up",
    "nav-mentorat": "Mentoring",

    // Hero section
    "hero-title": "xaam ça yoon.<span class=\"muted\">Your Legal and Tax Assistant</span>.",
    "hero-subtitle": "Make law accessible: quick advice, document generation, tax simulators and connection with experts.",
    "hero-signup": "Sign Up",
    "hero-quote": "Request a Quote",
    "hero-demo": "Chat Demo",
    "hero-demo-subtitle": "Fill in the formality request.",
    "hero-quick-q": "Ex: Write your first and last name?",
    "hero-ask": "Ask",
    "hero-templates": "Quick Templates",
    "hero-generate": "Generate",

    // Services
    "services-title": "Our Services",
    "service-chatbot": "AI Chatbot",
    "service-chatbot-desc": "Instant assistant for legal and tax questions. OpenAI integration possible.",
    "service-generator": "Document Generator",
    "service-generator-desc": "Creation and download of contracts, official letters and certificates.",
    "service-matching": "Expert Matching",
    "service-matching-desc": "Directory of lawyers and tax experts in Senegal.",
    "service-simulators": "Tax Simulators",
    "service-simulators-desc": "Calculate taxes, VAT, and social charges with step-by-step guides.",

    // Features
    "features-title": "Features",
    "feature-history": "History and Export",
    "feature-history-desc": "Save your conversations, export PDF.",
    "feature-templates": "Custom Templates",
    "feature-templates-desc": "Create contract templates according to your business.",
    "feature-connection": "Expert Connection",
    "feature-connection-desc": "Appointment booking, online payment possible.",
    "feature-security": "Security & Compliance",
    "feature-security-desc": "Encryption, compliant storage and privacy policy.",

    // About
    "about-title": "About",
    "about-subtitle": "Discover the history and mission of YOON, your legal partner in Senegal.",
    "about-mission": "Our Mission",
    "about-mission-text": "YOON means 'law' in Wolof. We help individuals and professionals in Senegal understand and apply the law through simple and accessible digital tools.",
    "about-platform": "Our platform revolutionizes access to law by combining artificial intelligence, automatic document generation and connection with qualified experts.",
    "about-accessibility": "Accessibility",
    "about-accessibility-desc": "Make law accessible to everyone, without linguistic or geographical barriers.",
    "about-innovation": "Innovation",
    "about-innovation-desc": "Use the latest technologies to simplify legal procedures.",
    "about-community": "Community",
    "about-community-desc": "Build a community of informed professionals and citizens.",

    // Gallery
    "gallery-title": "Law Photos",
    "gallery-law-title": "Law in Senegal",
    "gallery-law-desc": "Symbolizing law and justice in Senegal, these institutions represent the foundations of our modern legal system.",
    "gallery-balance-title": "The Scales of Justice",
    "gallery-balance-desc": "The scales of justice, guaranteeing equity and impartiality in all areas of Senegalese law.",
    "gallery-contracts-title": "Legal Contracts",
    "gallery-contracts-desc": "A signed contract represents the basis of legal agreements, essential for the security of commercial transactions.",

    // Contact
    "contact-title": "Contact Us",
    "contact-subtitle": "We are here to answer all your questions. Don't hesitate to contact us!",
    "contact-info-title": "Contact Information",
    "contact-address-label": "Address:",
    "contact-address-value": "Dakar, Senegal",
    "contact-phone-label": "Phone:",
    "contact-phone-value": "+221 76 690 2590",
    "contact-email-label": "Email:",
    "contact-email-value": "contact@yoon.sn",
    "contact-form-title": "Send us a message",
    "contact-cabinet": "Select a firm",
    "contact-name": "Name",
    "contact-name-placeholder": "Your name",
    "contact-email-placeholder": "Your email",
    "contact-message": "Message",
    "contact-message-placeholder": "Your message",
    "contact-send": "Send",

    // Footer
    "footer-newsletter": "Stay Informed",
    "footer-newsletter-input": "Your email",
    "footer-subscribe": "Subscribe",
    "footer-quick-links": "Quick Links",
    "footer-contact": "Contact",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms of Use",
    "footer-legal": "Legal Notice",
    "footer-copyright": "© 2024 YOON - Legal-Tech Senegal. All rights reserved.",

    // Inscription page
    "inscription-title": "Sign Up",
    "inscription-subtitle": "Create your account to access our personalized services.",
    "inscription-fullname": "Full Name",
    "inscription-fullname-placeholder": "Your full name",
    "inscription-email": "Email",
    "inscription-email-placeholder": "your.email@example.com",
    "inscription-phone": "Phone (WhatsApp)",
    "inscription-phone-placeholder": "+221 XX XXX XX XX",
    "inscription-password": "Password",
    "inscription-password-placeholder": "Minimum 8 characters",
    "inscription-confirm-password": "Confirm Password",
    "inscription-confirm-placeholder": "Repeat your password",
    "inscription-submit": "Sign Up",

    // Mentorat page
    "mentorat-videos-title": "Tutorial Videos",
    "mentorat-videos-subtitle": "Discover our explanatory videos for simplified registration",
    "mentorat-video1-title": "Step-by-Step Registration",
    "mentorat-video1-desc": "Complete video guide to create your YOON account in 5 minutes",
    "mentorat-video2-title": "First Steps on the Platform",
    "mentorat-video2-desc": "Discover the interface and main features",
    "mentorat-video3-title": "Generate Your First Document",
    "mentorat-video3-desc": "Create your first contract in a few clicks",

    "mentorat-cours-title": "Law Courses & Documents",
    "mentorat-cours-subtitle": "Learn the basics of Senegalese law with our free courses",
    "mentorat-cours1-title": "Introduction to Contract Law",
    "mentorat-cours1-desc": "Learn the fundamental principles of contracts in Senegal",
    "mentorat-cours1-duration": "Duration: 45 min",
    "mentorat-cours1-button": "Start",
    "mentorat-cours2-title": "Business Taxation",
    "mentorat-cours2-desc": "Understand VAT, corporate tax and social charges",
    "mentorat-cours2-duration": "Duration: 60 min",
    "mentorat-cours2-button": "Start",
    "mentorat-cours3-title": "Labor Law",
    "mentorat-cours3-desc": "Fixed-term, permanent contracts, dismissal: everything you need to know",
    "mentorat-cours3-duration": "Duration: 50 min",
    "mentorat-cours3-button": "Start",
    "mentorat-documents-title": "Document Templates",
    "mentorat-documents-desc": "Download our contract and letter templates for free",
    "mentorat-documents-count": "20+ templates",
    "mentorat-documents-button": "Explore",

    "mentorat-reviews-title": "User Reviews",
    "mentorat-reviews-subtitle": "Discover what our users say about the YOON platform",
    "mentorat-review-form-title": "Leave your review",
    "mentorat-review-name": "Your name",
    "mentorat-review-email": "Your email",
    "mentorat-review-rating": "Rating:",
    "mentorat-review-message": "Share your experience with YOON...",
    "mentorat-review-submit": "Publish my review",

    "hero-service1-title": "Instant Advice",
    "hero-service1-desc": "Clear responses via AI chatbot for general questions.",
    "hero-service2-title": "Contract Generator",
    "hero-service2-desc": "Ready-to-fill templates (CDD, lease, service contract).",
    "hero-demo-title": "Chat Demo",
    "hero-demo-input-placeholder": "Ex: Write your first and last name?",
    "hero-demo-ask": "Ask",
    "hero-demo-templates-title": "Quick Templates",
    "hero-demo-option1": "Service Contract",
    "hero-demo-option2": "Formal Notice Letter",
    "hero-demo-option3": "Assignment of Claim",
    "hero-demo-option4": "Lease Contract",
    "hero-demo-generate": "Generate",
    "services-chatbot-title": "AI Chatbot",
    "services-chatbot-desc": "Instant assistant for legal and tax questions. OpenAI integration possible.",
    "services-generator-title": "Document Generator",
    "services-generator-desc": "Creation and download of contracts, official letters and certificates.",
    "services-connection-title": "Expert Matching",
    "services-connection-desc": "Directory of lawyers and tax experts in Senegal.",
    "services-simulators-title": "Tax Simulators",
    "services-simulators-desc": "Calculate taxes, VAT, and social charges with step-by-step guides.",
    "features-history-title": "History and Export",
    "features-history-desc": "Save your conversations, export PDF.",
    "features-templates-title": "Custom Templates",
    "features-templates-desc": "Create contract templates according to your business.",
    "features-experts-title": "Expert Connection",
    "features-experts-desc": "Appointment booking, online payment possible.",
    "features-security-title": "Security & Compliance",
    "features-security-desc": "Encryption, compliant storage and privacy policy.",
    "gallery-item1-title": "Law in Senegal",
    "gallery-item1-desc": "Symbolizing law and justice in Senegal, these institutions represent the foundations of our modern legal system.",
    "gallery-item2-title": "The Scales of Justice",
    "gallery-item2-desc": "The scales of justice, guaranteeing equity and impartiality in all areas of Senegalese law.",
    "gallery-item3-title": "Legal Contracts",
    "gallery-item3-desc": "A signed contract represents the basis of legal agreements, essential for the security of commercial transactions.",
    "about-mission-title": "Our Mission",
    "about-mission-desc1": "YOON means 'law' in Wolof. We help individuals and professionals in Senegal understand and apply the law through simple and accessible digital tools.",
    "about-mission-desc2": "Our platform revolutionizes access to law by combining artificial intelligence, automatic document generation and connection with qualified experts.",
    "about-feature1-title": "Accessibility",
    "about-feature1-desc": "Make law accessible to everyone, without linguistic or geographical barriers.",
    "about-feature2-title": "Innovation",
    "about-feature2-desc": "Use the latest technologies to simplify legal procedures.",
    "about-feature3-title": "Community",
    "about-feature3-desc": "Build a community of informed professionals and citizens.",
    "contact-form-title": "Send us a message",
    "contact-cabinet": "Select a firm",
    "contact-name": "Name",
    "contact-name-placeholder": "Your name",
    "contact-email-placeholder": "Your email",
    "contact-message": "Message",
    "contact-message-placeholder": "Your message",
    "contact-send": "Send",
    "contact-form-cabinet-option1": "Civil Law Office",
    "contact-form-cabinet-option2": "Criminal Law Office",
    "contact-form-cabinet-option3": "Commercial Law Office",
    "contact-form-cabinet-option4": "Tax Law Office",
    "contact-form-cabinet-option5": "Labor Law Office",
    "contact-form-cabinet-option6": "Family Law Office",
    "contact-form-cabinet-option7": "Notary Office",
    "contact-form-cabinet-option8": "Lawyer's Office",

    "footer-newsletter": "Stay Informed",
    "footer-newsletter-input": "Your email",
    "footer-subscribe": "Subscribe",
    "footer-quick-links": "Quick Links",
    "footer-contact": "Contact",
    "footer-privacy": "Privacy Policy",
    "footer-terms": "Terms of Use",
    "footer-legal": "Legal Notice",
    "footer-copyright": "© 2024 YOON - Legal-Tech Senegal. All rights reserved."
  },

  wo: {
    // Navigation
    "nav-home": "Kër gi",
    "nav-services": "Ay services",
    "nav-features": "Ay fonctionnalités",
    "nav-about": "Ci mbir mi",
    "nav-contact": "Jokkoo",
    "nav-inscription": "Bindu",
    "nav-mentorat": "Mentorat",

    // Hero section
    "hero-title": "xaam ça yoon.<span class=\"muted\">Sa mbirum mbir ak sa fiscalité</span>.",
    "hero-subtitle": "Defaral yoon yi accessible: conseils bu gaaw, génération document yi, simulateurs fiscaux ak jokkoo ak experts yi.",
    "hero-signup": "Bindu",
    "hero-quote": "Laaj yi devis",
    "hero-demo": "Chat Demo",
    "hero-demo-subtitle": "Tëral formalité yi laaj.",
    "hero-quick-q": "Misal: Bind sa tur ak sa tudd?",
    "hero-ask": "Laaj",
    "hero-templates": "Modèles bu gaaw",
    "hero-generate": "Générer",

    // Services
    "services-title": "Sunu services",
    "service-chatbot": "Chatbot IA",
    "service-chatbot-desc": "Mbokk bu gaaw ngir laaj yi ci mbir ak fiscalité. Intégration OpenAI mën na.",
    "service-generator": "Générateur document yi",
    "service-generator-desc": "Création ak téléchargement contrats yi, bataaxal yi officiel ak attestations yi.",
    "service-matching": "Jokkoo ak experts",
    "service-matching-desc": "Annuaire avocats ak experts fiscaux ci Sénégal.",
    "service-simulators": "Simulateurs fiscaux",
    "service-simulators-desc": "Xëy impôts yi, TVA, ak charges sociales ak guides pas-à-pas.",

    // Features
    "features-title": "Fonctionnalités",
    "feature-history": "Historique ak export",
    "feature-history-desc": "Aar sunu conversations, export PDF.",
    "feature-templates": "Templates personnalisés",
    "feature-templates-desc": "Sos modèles contrats yi nekk ci sa entreprise.",
    "feature-connection": "Jokkoo ak experts",
    "feature-connection-desc": "Rendez-vous yi, paiement online mën na.",
    "feature-security": "Kàddu ak conformité",
    "feature-security-desc": "Chiffrement, stockage conforme ak politique confidentialité.",

    // About
    "about-title": "Ci mbir mi",
    "about-subtitle": "Gis tarikh ak mission YOON, sa partenaire juridique ci Sénégal.",
    "about-mission": "Sunu Mission",
    "about-mission-text": "YOON dafa ne 'yoon' ci wolof. Nu dimbali nit ñi ak professionnels ci Sénégal yi ngir fàmm yoon yi ak def sunu jumtukaayu dijital yi bu yomb ak bu accessible.",
    "about-platform": "Sunu plateforme dafa toggal accès bi ci yoon yi ci bokk intelligence artificielle, génération automatique document yi ak jokkoo ak experts yi bu am compétence.",
    "about-accessibility": "Accessibilité",
    "about-accessibility-desc": "Defaral yoon yi accessible ci yëpp, bu am barrières linguistiques walla géographiques.",
    "about-innovation": "Innovation",
    "about-innovation-desc": "Jëfandikoo teknologies yi ñu mujj ngir yombal démarches juridiques yi.",
    "about-community": "Mbooloo",
    "about-community-desc": "Toggal mbooloo professionnels ak citoyens yi am xam-xam.",

    // Gallery
    "gallery-title": "Nataal yoon",
    "gallery-law-title": "Yoon ci Sénégal",
    "gallery-law-desc": "Nataal yoon ak jëmm ci Sénégal, institutions yi dafa ne fondements yu sunu système juridique moderne.",
    "gallery-balance-title": "Kërëg jëmm yi",
    "gallery-balance-desc": "Kërëg jëmm yi, garante équité ak impartialité ci yëpp domaine yoon sénégalais.",
    "gallery-contracts-title": "Contrats juridiques",
    "gallery-contracts-desc": "Contrat bu bindee dafa ne basaaccord yi juridique, essentiel ngir kàddu transactions commerciales.",

    // Contact
    "contact-title": "Jokkoo ak nun",
    "contact-subtitle": "Nu ngi ci fi ngir tontu laaj yi yëpp. Bul xaar jokkoo ak nun!",
    "contact-info-title": "Xibaar jokkoo",
    "contact-address-label": "Adresse:",
    "contact-address-value": "Dakar, Sénégal",
    "contact-phone-label": "Téléphone:",
    "contact-phone-value": "+221 76 690 2590",
    "contact-email-label": "Email:",
    "contact-email-value": "contact@yoon.sn",
    "contact-form-title": "Yónne nu bataaxal",
    "contact-cabinet": "Tànn cabinet bi",
    "contact-name": "Tur",
    "contact-name-placeholder": "Sa tur",
    "contact-email-placeholder": "Sa email",
    "contact-message": "Bataaxal",
    "contact-message-placeholder": "Sa bataaxal",
    "contact-send": "Yónne",

    // Footer
    "footer-newsletter": "Door a am xibaar",
    "footer-newsletter-input": "Sa email",
    "footer-subscribe": "Bindu",
    "footer-quick-links": "Lien yi bu gaaw",
    "footer-contact": "Jokkoo",
    "footer-privacy": "Politique confidentialité",
    "footer-terms": "Conditions utilisation",
    "footer-legal": "Mentions légales",
    "footer-copyright": "© 2024 YOON - Legal-Tech Sénégal. Yëpp droit yi àtte.",

    // Inscription page
    "inscription-title": "Bindu",
    "inscription-subtitle": "Sos sa compte ngir accéder services yi bu personnalisé.",
    "inscription-fullname": "Tur complet",
    "inscription-fullname-placeholder": "Sa tur complet",
    "inscription-email": "Email",
    "inscription-email-placeholder": "sa.email@example.com",
    "inscription-phone": "Téléphone (WhatsApp)",
    "inscription-phone-placeholder": "+221 XX XXX XX XX",
    "inscription-password": "Bàyyi",
    "inscription-password-placeholder": "Minimum 8 caractères",
    "inscription-confirm-password": "Confirmer bàyyi bi",
    "inscription-confirm-placeholder": "Waxaat sa bàyyi",
    "inscription-submit": "Bindu",

    // Mentorat page
    "mentorat-videos-title": "Vidéos Tutoriels",
    "mentorat-videos-subtitle": "Gis sunu vidéos explicatives ngir bindu bu yomb",
    "mentorat-video1-title": "Bindu Etap par Etap",
    "mentorat-video1-desc": "Guide vidéo complet ngir sos sa compte YOON ci 5 minutes",
    "mentorat-video2-title": "Premiers Pas ci Plateforme bi",
    "mentorat-video2-desc": "Gis interface bi ak fonctionnalités yi principales",
    "mentorat-video3-title": "Générer sa Premier Document",
    "mentorat-video3-desc": "Sos sa premier contrat ci clics yu nekk",

    "mentorat-cours-title": "Cours ci Yoon ak Documents",
    "mentorat-cours-subtitle": "Jàng yoon sénégalais yi ak sunu cours yi buñ laajal",
    "mentorat-cours1-title": "Introduction ci Droit des Contrats",
    "mentorat-cours1-desc": "Jàng principes fondamentaux contrats yi ci Sénégal",
    "mentorat-cours1-duration": "Yoon: 45 min",
    "mentorat-cours1-button": "Tàmbali",
    "mentorat-cours2-title": "Fiscalité Entreprises yi",
    "mentorat-cours2-desc": "Fàmm TVA, impôt sociétés ak charges sociales",
    "mentorat-cours2-duration": "Yoon: 60 min",
    "mentorat-cours2-button": "Tàmbali",
    "mentorat-cours3-title": "Droit du Travail",
    "mentorat-cours3-desc": "CDD, CDI, licenciement: yëpp lu la nekk fàmm",
    "mentorat-cours3-duration": "Yoon: 50 min",
    "mentorat-cours3-button": "Tàmbali",
    "mentorat-documents-title": "Modèles Documents",
    "mentorat-documents-desc": "Téléchargé sunu modèles contrats ak bataaxal yi buñ laajal",
    "mentorat-documents-count": "20+ modèles",
    "mentorat-documents-button": "Gis",

    "mentorat-reviews-title": "Avis Utilisateurs yi",
    "mentorat-reviews-subtitle": "Gis lu utilisateurs yi plateforme YOON di wax",
    "mentorat-review-form-title": "Jox sa avis",
    "mentorat-review-name": "Sa tur",
    "mentorat-review-email": "Sa email",
    "mentorat-review-rating": "Note:",
    "mentorat-review-message": "Wax sa expérience ak YOON...",
    "mentorat-review-submit": "Publié sa avis",

    "hero-service1-title": "Conseils bu gaaw",
    "hero-service1-desc": "Tontu bu leer ak chatbot IA ngir laaj yi bu yomb.",
    "hero-service2-title": "Générateur contrats",
    "hero-service2-desc": "Modèles buñ laajal ngir tànn (CDD, bail, contrat prestation).",
    "hero-demo-title": "Chat Demo",
    "hero-demo-input-placeholder": "Misal: Bind sa tur ak sa tudd?",
    "hero-demo-ask": "Laaj",
    "hero-demo-templates-title": "Modèles bu gaaw",
    "hero-demo-option1": "Contrat Prestation",
    "hero-demo-option2": "Lettre Mise en Demeure",
    "hero-demo-option3": "Cession Créance",
    "hero-demo-option4": "Contrat Bail",
    "hero-demo-generate": "Générer",
    "services-chatbot-title": "Chatbot IA",
    "services-chatbot-desc": "Mbokk bu gaaw ngir laaj yi ci mbir ak fiscalité. Intégration OpenAI mën na.",
    "services-generator-title": "Générateur document yi",
    "services-generator-desc": "Création ak téléchargement contrats yi, bataaxal yi officiel ak attestations yi.",
    "services-connection-title": "Jokkoo ak experts",
    "services-connection-desc": "Annuaire avocats ak experts fiscaux ci Sénégal.",
    "services-simulators-title": "Simulateurs fiscaux",
    "services-simulators-desc": "Xëy impôts yi, TVA, ak charges sociales ak guides pas-à-pas.",
    "features-history-title": "Historique ak export",
    "features-history-desc": "Aar sunu conversations, export PDF.",
    "features-templates-title": "Templates personnalisés",
    "features-templates-desc": "Sos modèles contrats yi nekk ci sa entreprise.",
    "features-experts-title": "Jokkoo ak experts",
    "features-experts-desc": "Rendez-vous yi, paiement online mën na.",
    "features-security-title": "Kàddu ak conformité",
    "features-security-desc": "Chiffrement, stockage conforme ak politique confidentialité.",
    "gallery-item1-title": "Yoon ci Sénégal",
    "gallery-item1-desc": "Nataal yoon ak jëmm ci Sénégal, institutions yi dafa ne fondements yu sunu système juridique moderne.",
    "gallery-item2-title": "Kërëg jëmm yi",
    "gallery-item2-desc": "Kërëg jëmm yi, garante équité ak impartialité ci yëpp domaine yoon sénégalais.",
    "gallery-item3-title": "Contrats juridiques",
    "gallery-item3-desc": "Contrat bu bindee dafa ne basaaccord yi juridique, essentiel ngir kàddu transactions commerciales.",
    "about-mission-title": "Sunu Mission",
    "about-mission-desc1": "YOON dafa ne 'yoon' ci wolof. Nu dimbali nit ñi ak professionnels ci Sénégal yi ngir fàmm yoon yi ak def sunu jumtukaayu dijital yi bu yomb ak bu accessible.",
    "about-mission-desc2": "Sunu plateforme dafa toggal accès bi ci yoon yi ci bokk intelligence artificielle, génération automatique document yi ak jokkoo ak experts yi bu am compétence.",
    "about-feature1-title": "Accessibilité",
    "about-feature1-desc": "Defaral yoon yi accessible ci yëpp, bu am barrières linguistiques walla géographiques.",
    "about-feature2-title": "Innovation",
    "about-feature2-desc": "Jëfandikoo teknologies yi ñu mujj ngir yombal démarches juridiques yi.",
    "about-feature3-title": "Mbooloo",
    "about-feature3-desc": "Toggal mbooloo professionnels ak citoyens yi am xam-xam.",
    "contact-form-title": "Yónne nu bataaxal",
    "contact-cabinet": "Tànn cabinet bi",
    "contact-name": "Tur",
    "contact-name-placeholder": "Sa tur",
    "contact-email-placeholder": "Sa email",
    "contact-message": "Bataaxal",
    "contact-message-placeholder": "Sa bataaxal",
    "contact-send": "Yónne",
    "contact-form-cabinet-option1": "Cabinet de Yoon Civil",
    "contact-form-cabinet-option2": "Cabinet de Yoon Pénal",
    "contact-form-cabinet-option3": "Cabinet de Yoon Commercial",
    "contact-form-cabinet-option4": "Cabinet de Yoon Fiscal",
    "contact-form-cabinet-option5": "Cabinet de Yoon du Travail",
    "contact-form-cabinet-option6": "Cabinet de Yoon de la Famille",
    "contact-form-cabinet-option7": "Cabinet de Notaire",
    "contact-form-cabinet-option8": "Cabinet d'Avocate",
    "footer-newsletter": "Door a am xibaar",
    "footer-newsletter-input": "Sa email",
    "footer-subscribe": "Bindu",
    "footer-quick-links": "Lien yi bu gaaw",
    "footer-contact": "Jokkoo",
    "footer-privacy": "Politique confidentialité",
    "footer-terms": "Conditions utilisation",
    "footer-legal": "Mentions légales",
    "footer-copyright": "© 2024 YOON - Legal-Tech Sénégal. Yëpp droit yi àtte."
  },

  ar: {
    // Navigation
    "nav-home": "الرئيسية",
    "nav-services": "الخدمات",
    "nav-features": "الميزات",
    "nav-about": "حولنا",
    "nav-contact": "اتصل بنا",
    "nav-inscription": "التسجيل",
    "nav-mentorat": "التوجيه",

    // Hero section
    "hero-title": "xaam ça yoon.<span class=\"muted\">مساعدك القانوني والضريبي</span>.",
    "hero-subtitle": "اجعل القانون متاحًا: نصائح سريعة، إنشاء وثائق، محاكيات ضريبية وربط بالخبراء.",
    "hero-signup": "سجل",
    "hero-quote": "اطلب عرض أسعار",
    "hero-demo": "عرض الدردشة",
    "hero-demo-subtitle": "املأ طلب الإجراءات.",
    "hero-quick-q": "مثال: اكتب اسمك الأول ولقبك؟",
    "hero-ask": "اسأل",
    "hero-templates": "قوالب سريعة",
    "hero-generate": "إنشاء",

    // Services
    "services-title": "خدماتنا",
    "service-chatbot": "روبوت الدردشة الذكي",
    "service-chatbot-desc": "مساعد فوري للأسئلة القانونية والضريبية. إمكانية دمج OpenAI.",
    "service-generator": "مولد الوثائق",
    "service-generator-desc": "إنشاء وتحميل العقود والرسائل الرسمية والشهادات.",
    "service-matching": "ربط بالخبراء",
    "service-matching-desc": "دليل المحامين والخبراء الضريبيين في السنغال.",
    "service-simulators": "محاكيات ضريبية",
    "service-simulators-desc": "احسب الضرائب وقيمة الضريبة المضافة والرسوم الاجتماعية مع دليل خطوة بخطوة.",

    // Features
    "features-title": "الميزات",
    "feature-history": "التاريخ والتصدير",
    "feature-history-desc": "احفظ محادثاتك، صدر PDF.",
    "feature-templates": "قوالب مخصصة",
    "feature-templates-desc": "أنشئ قوالب عقود حسب شركتك.",
    "feature-connection": "ربط بالخبراء",
    "feature-connection-desc": "حجز مواعيد، دفع إلكتروني ممكن.",
    "feature-security": "الأمان والامتثال",
    "feature-security-desc": "تشفير، تخزين متوافق وسياسة خصوصية.",

    // About
    "about-title": "حولنا",
    "about-subtitle": "اكتشف تاريخ ومهمة YOON، شريكك القانوني في السنغال.",
    "about-mission": "مهمتنا",
    "about-mission-text": "YOON تعني 'قانون' بالولوف. نساعد الأفراد والمهنيين في السنغال على فهم القانون وتطبيقه من خلال أدوات رقمية بسيطة ومتاحة.",
    "about-platform": "منصتنا تغير وجه الوصول إلى القانون من خلال الجمع بين الذكاء الاصطناعي وإنشاء الوثائق التلقائي وربط بالخبراء المؤهلين.",
    "about-accessibility": "الإمكانية",
    "about-accessibility-desc": "اجعل القانون متاحًا للجميع، بدون حواجز لغوية أو جغرافية.",
    "about-innovation": "الابتكار",
    "about-innovation-desc": "استخدم أحدث التقنيات لتبسيط الإجراءات القانونية.",
    "about-community": "المجتمع",
    "about-community-desc": "بناء مجتمع من المهنيين والمواطنين المطلعين.",

    // Gallery
    "gallery-title": "صور قانونية",
    "gallery-law-title": "القانون في السنغال",
    "gallery-law-desc": "ترمز إلى القانون والعدالة في السنغال، تمثل هذه المؤسسات أسس نظامنا القانوني الحديث.",
    "gallery-balance-title": "ميزان العدالة",
    "gallery-balance-desc": "ميزان العدالة، ضامن للعدالة والحيادية في جميع مجالات القانون السنغالي.",
    "gallery-contracts-title": "العقود القانونية",
    "gallery-contracts-desc": "العقد الموقع يمثل أساس الاتفاقات القانونية، أمر حاسم لأمان المعاملات التجارية.",

    // Contact
    "contact-title": "اتصل بنا",
    "contact-subtitle": "نحن هنا للإجابة على جميع أسئلتك. لا تتردد في الاتصال بنا!",
    "contact-info-title": "معلومات الاتصال",
    "contact-address-label": "العنوان:",
    "contact-address-value": "داكار، السنغال",
    "contact-phone-label": "الهاتف:",
    "contact-phone-value": "+221 76 690 2590",
    "contact-email-label": "البريد الإلكتروني:",
    "contact-email-value": "contact@yoon.sn",
    "contact-form-title": "أرسل لنا رسالة",
    "contact-cabinet": "اختر مكتب",
    "contact-name": "الاسم",
    "contact-name-placeholder": "اسمك",
    "contact-email-placeholder": "بريدك الإلكتروني",
    "contact-message": "الرسالة",
    "contact-message-placeholder": "رسالتك",
    "contact-send": "إرسال",

    // Footer
    "footer-newsletter": "ابق على اطلاع",
    "footer-newsletter-input": "بريدك الإلكتروني",
    "footer-subscribe": "اشترك",
    "footer-quick-links": "روابط سريعة",
    "footer-contact": "اتصل بنا",
    "footer-privacy": "سياسة الخصوصية",
    "footer-terms": "شروط الاستخدام",
    "footer-legal": "الإشعار القانوني",
    "footer-copyright": "© 2024 YOON - Legal-Tech السنغال. جميع الحقوق محفوظة.",

    // Inscription page
    "inscription-title": "التسجيل",
    "inscription-subtitle": "أنشئ حسابك للوصول إلى خدماتنا المخصصة.",
    "inscription-fullname": "الاسم الكامل",
    "inscription-fullname-placeholder": "اسمك الكامل",
    "inscription-email": "البريد الإلكتروني",
    "inscription-email-placeholder": "your.email@example.com",
    "inscription-phone": "الهاتف (واتساب)",
    "inscription-phone-placeholder": "+221 XX XXX XX XX",
    "inscription-password": "كلمة المرور",
    "inscription-password-placeholder": "8 أحرف كحد أدنى",
    "inscription-confirm-password": "تأكيد كلمة المرور",
    "inscription-confirm-placeholder": "أعد كلمة مرورك",
    "inscription-submit": "سجل",

    // Mentorat page
    "mentorat-videos-title": "فيديوهات تعليمية",
    "mentorat-videos-subtitle": "اكتشف فيديوهاتنا التوضيحية للتسجيل المبسط",
    "mentorat-video1-title": "التسجيل خطوة بخطوة",
    "mentorat-video1-desc": "دليل فيديو كامل لإنشاء حساب YOON الخاص بك في 5 دقائق",
    "mentorat-video2-title": "الخطوات الأولى على المنصة",
    "mentorat-video2-desc": "اكتشف الواجهة والميزات الرئيسية",
    "mentorat-video3-title": "إنشاء وثيقتك الأولى",
    "mentorat-video3-desc": "أنشئ عقدك الأول بضع نقرات",

    "mentorat-cours-title": "دروس القانون والوثائق",
    "mentorat-cours-subtitle": "تعلم أساسيات القانون السنغالي بدروسنا المجانية",
    "mentorat-cours1-title": "مقدمة في قانون العقود",
    "mentorat-cours1-desc": "تعلم المبادئ الأساسية للعقود في السنغال",
    "mentorat-cours1-duration": "المدة: 45 دقيقة",
    "mentorat-cours1-button": "ابدأ",
    "mentorat-cours2-title": "ضرائب الأعمال",
    "mentorat-cours2-desc": "فهم ضريبة القيمة المضافة وضريبة الشركات والرسوم الاجتماعية",
    "mentorat-cours2-duration": "المدة: 60 دقيقة",
    "mentorat-cours2-button": "ابدأ",
    "mentorat-cours3-title": "قانون العمل",
    "mentorat-cours3-desc": "قانون العمل، التعاقد الثابت، الدائم، الفصل: كل ما تحتاجه لمعرفته",
    "mentorat-cours3-duration": "المدة: 50 دقيقة",
    "mentorat-cours3-button": "ابدأ",
    "mentorat-documents-title": "قوالب الوثائق",
    "mentorat-documents-desc": "قم بتنزيل قوالب العقود والرسائل الخاصة بنا مجانًا",
    "mentorat-documents-count": "20+ قالب",
    "mentorat-documents-button": "استكشف",
    "mentorat-reviews-title": "آراء المستخدمين",
    "mentorat-reviews-subtitle": "اكتشف ما يقوله مستخدمونا عن منصة YOON",
    "mentorat-review-form-title": "اترك رأيك",
    "mentorat-review-name": "اسمك",
    "mentorat-review-email": "بريدك الإلكتروني",
    "mentorat-review-rating": "التقييم:",
    "mentorat-review-message": "شارك تجربتك مع YOON...",
    "mentorat-review-submit": "انشر رأيي",

    "hero-service1-title": "نصائح فورية",
    "hero-service1-desc": "إجابات واضحة عبر روبوت الدردشة الذكي للأسئلة العامة.",
    "hero-service2-title": "مولد العقود",
    "hero-service2-desc": "قوالب جاهزة للملء (CDD، إيجار، عقد خدمة).",
    "hero-demo-title": "عرض الدردشة",
    "hero-demo-input-placeholder": "مثال: اكتب اسمك الأول ولقبك؟",
    "hero-demo-ask": "اسأل",
    "hero-demo-templates-title": "قوالب سريعة",
    "hero-demo-option1": "عقد الخدمة",
    "hero-demo-option2": "رسالة إشعار رسمي",
    "hero-demo-option3": "تنازل عن المطالبة",
    "hero-demo-option4": "عقد إيجار",
    "hero-demo-generate": "إنشاء",
    "services-chatbot-title": "روبوت الدردشة الذكي",
    "services-chatbot-desc": "مساعد فوري للأسئلة القانونية والضريبية. إمكانية دمج OpenAI.",
    "services-generator-title": "مولد الوثائق",
    "services-generator-desc": "إنشاء وتحميل العقود والرسائل الرسمية والشهادات.",
    "services-connection-title": "ربط بالخبراء",
    "services-connection-desc": "دليل المحامين والخبراء الضريبيين في السنغال.",
    "services-simulators-title": "محاكيات ضريبية",
    "services-simulators-desc": "احسب الضرائب وقيمة الضريبة المضافة والرسوم الاجتماعية مع دليل خطوة بخطوة.",
    "features-history-title": "التاريخ والتصدير",
    "features-history-desc": "احفظ محادثاتك، صدر PDF.",
    "features-templates-title": "قوالب مخصصة",
    "features-templates-desc": "أنشئ قوالب عقود حسب شركتك.",
    "features-experts-title": "ربط بالخبراء",
    "features-experts-desc": "حجز مواعيد، دفع إلكتروني ممكن.",
    "features-security-title": "الأمان والامتثال",
    "features-security-desc": "تشفير، تخزين متوافق وسياسة خصوصية.",
    "gallery-item1-title": "القانون في السنغال",
    "gallery-item1-desc": "ترمز إلى القانون والعدالة في السنغال، تمثل هذه المؤسسات أسس نظامنا القانوني الحديث.",
    "gallery-item2-title": "ميزان العدالة",
    "gallery-item2-desc": "ميزان العدالة، ضامن للعدالة والحيادية في جميع مجالات القانون السنغالي.",
    "gallery-item3-title": "العقود القانونية",
    "gallery-item3-desc": "العقد الموقع يمثل أساس الاتفاقات القانونية، أمر حاسم لأمان المعاملات التجارية.",
    "about-mission-title": "مهمتنا",
    "about-mission-desc1": "YOON تعني 'قانون' بالولوف. نساعد الأفراد والمهنيين في السنغال على فهم القانون وتطبيقه من خلال أدوات رقمية بسيطة ومتاحة.",
    "about-mission-desc2": "منصتنا تغير وجه الوصول إلى القانون من خلال الجمع بين الذكاء الاصطناعي وإنشاء الوثائق التلقائي وربط بالخبراء المؤهلين.",
    "about-feature1-title": "الإمكانية",
    "about-feature1-desc": "اجعل القانون متاحًا للجميع، بدون حواجز لغوية أو جغرافية.",
    "about-feature2-title": "الابتكار",
    "about-feature2-desc": "استخدم أحدث التقنيات لتبسيط الإجراءات القانونية.",
    "about-feature3-title": "المجتمع",
    "about-feature3-desc": "بناء مجتمع من المهنيين والمواطنين المطلعين.",
    "contact-form-title": "أرسل لنا رسالة",
    "contact-cabinet": "اختر مكتب",
    "contact-name": "الاسم",
    "contact-name-placeholder": "اسمك",
    "contact-email-placeholder": "بريدك الإلكتروني",
    "contact-message": "الرسالة",
    "contact-message-placeholder": "رسالتك",
    "contact-send": "إرسال",
    "footer-newsletter": "ابق على اطلاع",
    "footer-newsletter-input": "بريدك الإلكتروني",
    "footer-subscribe": "اشترك",
    "footer-quick-links": "روابط سريعة",
    "footer-contact": "اتصل بنا",
    "footer-privacy": "سياسة الخصوصية",
    "footer-terms": "شروط الاستخدام",
    "footer-legal": "الإشعار القانوني",
    "footer-copyright": "© 2024 YOON - Legal-Tech السنغال. جميع الحقوق محفوظة."
  }
};

// Enhanced reveal animations with Intersection Observer
  document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger reveal for elements inside the section
          const revealsInside = entry.target.querySelectorAll('.reveal');
          revealsInside.forEach((el, elIndex) => {
            setTimeout(() => el.classList.add('visible'), elIndex * 150);
          });

          // Add section-specific animation
          if (entry.target.id === 'services') {
            entry.target.classList.add('slide-in-left');
          } else if (entry.target.id === 'about') {
            entry.target.classList.add('fade-up-scale');
          } else if (entry.target.id === 'contact') {
            entry.target.classList.add('slide-in-right');
          } else if (entry.target.id === 'features') {
            entry.target.classList.add('zoom-in');
          } else if (entry.target.id === 'gallery') {
            entry.target.classList.add('bounce-in');
          }

          // Stop observing after animation
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe sections instead of individual reveals
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      observer.observe(section);
    });

    // menu toggle
    document.querySelector('.menu-toggle').addEventListener('click',()=>{
      document.querySelector('.nav-links').classList.toggle('open');
    });

    // close menu on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
      });
    });

    // quick ask
    const askQuickBtn = document.getElementById('ask-quick');
    const quickQ = document.getElementById('quick-q');
    if (askQuickBtn && quickQ) {
      askQuickBtn.addEventListener('click', () => {
        const q = quickQ.value.trim(); if (!q) return alert('Écrivez une question');
        sendToServer(q);
      });
    }

    // chat widget send (guarded: some pages may not include the chat DOM)
    const sendChatBtn = document.getElementById('sendChat');
    const chatInputEl = document.getElementById('chatInput');
    if (sendChatBtn && chatInputEl) {
      sendChatBtn.addEventListener('click', () => {
        const q = chatInputEl.value.trim(); if (!q) return;
        pushUserMsg(q); sendToServer(q); chatInputEl.value = '';
      });
      chatInputEl.addEventListener('keypress', e => { if (e.key === 'Enter') { sendChatBtn.click(); } });
    }

    const closeChatBtn = document.getElementById('closeChat');
    if (closeChatBtn) {
      closeChatBtn.addEventListener('click', () => { const cw = document.getElementById('chatWidget'); if (cw) cw.style.display = 'none'; });
    }



    // generate doc buttons
    window.generateDoc = function(title){
      const content = `--- ${title} ---\n\n[REMPLIR ICI LES CLAUSES ESSENTIELLES]\n\nCet exemplaire est fournie à titre indicatif. Consultez un avocat pour validation.`;
      const blob = new Blob([content],{type:'text/plain'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download = title.replace(/\s+/g,'_') + '.txt'; a.click(); URL.revokeObjectURL(url);
    }

    // telecharge button for select
    document.getElementById('telechargeBtn').addEventListener('click', () => {
      const select = document.getElementById('docSelect');
      const selectedTitle = select.value;
      if (selectedTitle) {
        // Show payment modal instead of direct download
        document.getElementById('paymentModal').style.display = 'flex';
        // Store the selected title for later use
        window.selectedDocTitle = selectedTitle;
      }
    });

    // Payment form submission
    document.getElementById('paymentForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const selectedPayment = document.querySelector('input[name="payment"]:checked');
      if (selectedPayment) {
        // Simulate payment success
        alert(`Paiement simulé avec ${selectedPayment.value}. Téléchargement en cours...`);
        // Hide modal
        document.getElementById('paymentModal').style.display = 'none';
        // Proceed to download
        generateDoc(window.selectedDocTitle);
        // Reset form
        document.getElementById('paymentForm').reset();
      }
    });

    // Cancel payment
    document.getElementById('cancelPayment').addEventListener('click', () => {
      document.getElementById('paymentModal').style.display = 'none';
      document.getElementById('paymentForm').reset();
    });

    // contact cabinet button
    document.getElementById('contactCabinetBtn').addEventListener('click', () => {
      const select = document.getElementById('cabinetSelect');
      const selectedEmail = select.value;
      if (selectedEmail) {
        window.location.href = `mailto:${selectedEmail}`;
      } else {
        alert('Veuillez sélectionner un cabinet.');
      }
    });
  });

  // Function to update language
  function updateLanguage(lang) {
    const currentLang = translations[lang];
    if (!currentLang) return;

    // Update elements with data-lang attribute
    document.querySelectorAll('[data-lang]').forEach(el => {
      const key = el.getAttribute('data-lang');
      if (currentLang[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = currentLang[key];
        } else if (currentLang[key].includes('<')) {
          el.innerHTML = currentLang[key];
        } else {
          el.textContent = currentLang[key];
        }
      }
    });

  // Update document lang attribute
    document.documentElement.lang = lang;
  }

  // language selector
  document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('langSelect');
    if (langSelect) {
      // Load saved language or default to 'fr'
      const savedLang = localStorage.getItem('selectedLanguage') || 'fr';
      langSelect.value = savedLang;
      updateLanguage(savedLang);

      langSelect.addEventListener('change', (e) => {
        const selectedLang = e.target.value;
        localStorage.setItem('selectedLanguage', selectedLang);
        updateLanguage(selectedLang);
      });
    }
  });

  // UI: append messages
  function pushUserMsg(text){
    const body = document.getElementById('chatBody');
    const d = document.createElement('div'); d.className='msg user'; d.textContent=text; body.appendChild(d); body.scrollTop = body.scrollHeight;
  }
  function pushBotMsg(text){
    const body = document.getElementById('chatBody');
    const d = document.createElement('div'); d.className='msg bot'; d.textContent=text; body.appendChild(d); body.scrollTop = body.scrollHeight;
  }

  // send to server (integrates with n8n chat webhook)
  async function sendToServer(prompt){
    const sessionId = localStorage.getItem('sessionId') || (localStorage.setItem('sessionId', Date.now().toString()), localStorage.getItem('sessionId'));
    try{
      const res = await fetch('http://localhost:5678/webhook/47f73a41-52a0-43df-972a-b050e605b49c/chat',{
        method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({chatInput: prompt, sessionId})
      });
      const data = await res.json();
      if(res.ok && data && data.answer){ alert(data.answer); }
      else if(data && data.error){ alert('Erreur: '+data.error); }
      else { alert('Impossible d\'obtenir une réponse pour le moment.'); }
    }catch(err){
      console.error(err); alert('Erreur réseau lors de la requête.');
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const status = document.getElementById('contactStatus');
    const flash = document.getElementById('flashMessage');

    if (!form) return;

    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      if (status) status.textContent = '';

      const data = {
        name: (form.querySelector('[name="name"]') || {}).value?.trim() || '',
        email: (form.querySelector('[name="email"]') || {}).value?.trim() || '',
        phone: (form.querySelector('[name="phone"]') || {}).value?.trim() || '',
        message: (form.querySelector('[name="message"]') || {}).value?.trim() || ''
      };

      // validations simples
      const errors = [];
      if (!data.name) errors.push('Nom requis.');
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Email invalide.');
      if (!data.phone) errors.push('Téléphone requis.');
      if (!data.message) errors.push('Message requis.');

      if (errors.length) {
        if (status) { status.style.color = 'var(--accent)'; status.textContent = errors.join(' '); }
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      if (btn) { btn.disabled = true; btn.textContent = 'Envoi...'; }

      try {
        const resp = await fetch(form.action || 'contact.php', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify(data)
        });

        const json = await resp.json();

        if (resp.ok && json.ok) {
          // affiche message succès en haut et scroll vers le haut
          if (flash) {
            flash.className = 'flash success';
            flash.textContent = 'Envoi réussi. Merci !';
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => { if (flash) { flash.className = ''; flash.textContent = ''; } }, 5000);
          }
          form.reset();
        } else {
          const msg = (json.errors ? json.errors.join(' ') : (json.error || 'Erreur serveur'));
          if (flash) {
            flash.className = 'flash error';
            flash.textContent = msg;
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setTimeout(() => { if (flash) { flash.className = ''; flash.textContent = ''; } }, 5000);
          } else if (status) {
            status.style.color = '#ff6b6b';
            status.textContent = msg;
          }
        }
      } catch (err) {
        if (flash) {
          flash.className = 'flash error';
          flash.textContent = 'Erreur réseau, réessayez.';
          window.scrollTo({ top: 0, behavior: 'smooth' });
          setTimeout(() => { if (flash) { flash.className = ''; flash.textContent = ''; } }, 5000);
        }
        console.error(err);
      } finally {
        try {
          if (btn) { btn.disabled = false; btn.textContent = 'Envoyer la demande'; }
        } catch (cleanupErr) {
          console.error('Cleanup error in finally (form submit):', cleanupErr);
        }
      }
    });
  });

// Gestion du système de notation par étoiles
let selectedRating = 0;

function initializeStarRating() {
  const stars = document.querySelectorAll('.rating-stars .star');
  if (stars.length === 0) return;

  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedRating = parseInt(star.getAttribute('data-rating'));
      updateStarDisplay(stars, selectedRating);
    });

    star.addEventListener('mouseover', () => {
      const rating = parseInt(star.getAttribute('data-rating'));
      updateStarDisplay(stars, rating);
    });

    star.addEventListener('mouseout', () => {
      updateStarDisplay(stars, selectedRating);
    });
  });
}

function updateStarDisplay(stars, rating) {
  stars.forEach((star, index) => {
    if (index < rating) {
      star.style.color = '#ffd700';
    } else {
      star.style.color = '#666';
    }
  });
}

// Gestion du formulaire d'avis
const reviewForm = document.getElementById('reviewForm');
if (reviewForm) {
  reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('reviewName').value;
    const email = document.getElementById('reviewEmail').value;
    const message = document.getElementById('reviewMessage').value;

    if (!selectedRating) {
      alert('Veuillez sélectionner une note avec les étoiles.');
      return;
    }

    const statusDiv = document.getElementById('reviewStatus');
    statusDiv.textContent = 'Publication de votre avis...';
    statusDiv.style.color = '#ea6464';

    // Simulation d'envoi
    setTimeout(() => {
      statusDiv.textContent = 'Merci pour votre avis ! Il sera publié après modération.';
      statusDiv.style.color = '#4CAF50';

      // Réinitialiser le formulaire
      reviewForm.reset();
      selectedRating = 0;
      const stars = document.querySelectorAll('.rating-stars .star');
      updateStarDisplay(stars, 0);
    }, 2000);
  });
}

// Gestion du formulaire d'inscription
document.addEventListener('DOMContentLoaded', function () {
  const inscriptionForm = document.getElementById('inscriptionForm');
  const inscriptionStatus = document.getElementById('inscriptionStatus');

  if (inscriptionForm) {
    inscriptionForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Récupération des valeurs
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const password = document.getElementById('password').value.trim();
      const confirmPassword = document.getElementById('confirm_password').value.trim();

      // Validation des champs
      const errors = [];
      if (!name) errors.push('Le nom complet est requis.');
      if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Adresse email invalide.');
      if (!phone) errors.push('Le numéro de téléphone est requis.');
      if (!password || password.length < 6) errors.push('Le mot de passe doit contenir au moins 6 caractères.');
      if (password !== confirmPassword) errors.push('Les mots de passe ne correspondent pas.');

      if (errors.length > 0) {
        if (inscriptionStatus) {
          inscriptionStatus.style.color = '#ff6b6b';
          inscriptionStatus.textContent = errors.join(' ');
        }
        return;
      }

      // Désactiver le bouton et afficher le message de chargement
      const submitBtn = document.getElementById('sendInscription');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Inscription en cours...';

      if (inscriptionStatus) {
        inscriptionStatus.style.color = '#ea6464';
        inscriptionStatus.textContent = 'Création de votre compte...';
      }

      try {
        // Simulation d'envoi (remplacer par votre logique réelle)
        const response = await fetch('inscription_handler.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            email: email,
            phone: phone,
            password: password
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          // Message de confirmation de succès
          if (inscriptionStatus) {
            inscriptionStatus.style.color = '#4CAF50';
            inscriptionStatus.innerHTML = `
              <div style="background: rgba(76, 175, 80, 0.1); border: 1px solid #4CAF50; padding: 15px; border-radius: 8px; margin-top: 10px;">
                <h3 style="margin: 0 0 10px 0; color: #4CAF50;">✓ Inscription réussie !</h3>
                <p style="margin: 0; color: #4CAF50;">
                  Bienvenue sur YOON, <strong>${name}</strong> !<br>
                  Votre compte a été créé avec succès.<br>
                  Un email de confirmation a été envoyé à <strong>${email}</strong>.<br><br>
                  Vous pouvez maintenant accéder à tous nos services juridiques et fiscaux.
                </p>
              </div>
            `;
          }

          // Réinitialiser le formulaire
          inscriptionForm.reset();

          // Optionnel: Redirection après quelques secondes
          setTimeout(() => {
            window.location.href = 'yoon.php?welcome=1';
          }, 5000);

        } else {
          // Erreur du serveur
          const errorMsg = result.message || 'Une erreur est survenue lors de l\'inscription.';
          if (inscriptionStatus) {
            inscriptionStatus.style.color = '#ff6b6b';
            inscriptionStatus.textContent = errorMsg;
          }
        }

      } catch (error) {
        console.error('Erreur lors de l\'inscription:', error);
        if (inscriptionStatus) {
          inscriptionStatus.style.color = '#ff6b6b';
          inscriptionStatus.textContent = 'Erreur de connexion. Veuillez réessayer.';
        }
      } finally {
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }
});

// Initialisation des fonctionnalités au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  initializeStarRating();
});
