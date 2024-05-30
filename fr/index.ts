//! tropela-app translation file
//! locale : French [fr]
//! author : eillarra : https://github.com/eillarra

export default {
  welcome:
    'Tropela.eus est un jeu de cyclisme fantastique où vous pouvez jouer avec vos amis et votre famille, gratuitement, dans les courses les plus excitantes de la saison.',
  menu: {
    home: 'Accueil',
    races: 'Courses',
    seasons: 'Saisons',
    rules: 'Règles',
    premium: 'Premier domestique | Premiers domestiques',
    blog: 'Blog',
    store: 'Magasin',
    about: 'À propos de nous',
    privacy: 'Politique de confidentialité',
    terms: "Conditions d'utilisation",
    contact: 'Contact',
    tropeltxos: 'Tropeltxos',
  },
  auth: {
    login: {
      title: 'Bienvenue.',
      link: 'Vous avez déjà un compte? Connectez-vous',
    },
    signup: {
      title: 'Rejoignez le peloton.',
      link: 'Pas encore de compte? Inscrivez-vous',
    },
    passwordReset: {
      title: 'Réinitialiser le mot de passe.',
      intro:
        'Avez-vous oublié votre mot de passe? Remplissez votre adresse e-mail et nous vous enverrons un lien pour le réinitialiser.',
      link: 'Mot de passe oublié?',
    },
  },
  countdown: {
    months: 'mois | mois',
    days: 'jour | jours',
    hours: 'heure | heures',
    minutes: 'minute | minutes',
    seconds: 'seconde | secondes',
  },
  season: {
    calendar: 'Calendrier',
    nextRace: 'Prochaine course | Prochaines courses',
    menu: {
      standings: 'Classement de la saison',
    },
    collection: 'Collection | Collections',
    race: 'Course | Courses',
    racesCount: 'Aucune course | Une course | {n} courses',
  },
  race: {
    menu: {
      presentation: 'Présentation',
      standings: 'Classement',
      points: 'Points des coureurs',
      dorsals: 'Liste des coureurs',
      news: 'Actualités',
      createPorra: 'Créer une équipe',
      myPorra: 'Mon équipe',
    },
    canceled: 'Annulé',
    stage: 'Étape | Étapes',
    stage_today: 'Étape du jour | Étapes du jour',
    team: 'Équipe | Équipes',
    dorsal: {
      filter: 'Filtrer par nom, équipe ou pays',
      group: 'Groupe | Groupes',
      status: 'Statut | Statuts',
      statuses: {
        unconfirmed: 'Non confirmé',
        participating: 'Participant',
        notParticipating: 'Non participant',
        retired: 'Retiré',
      },
      sort: {
        alpha: 'Trier par nom',
        percent: 'Trier par pourcentage',
        position: 'Trier par points',
      },
    },
    porra: {
      registrationOpens: 'Inscription ouverte dans',
      registrationOpenFor: 'Créez votre équipe dans',
      showAllStages: 'Afficher toutes les étapes',
    },
    porrasCount: 'Aucune équipe | Une équipe | {n} équipes',
  },
  place: {
    menu: {
      standings: 'Classement local',
    },
  },
  game: {
    menu: {
      standings: 'Classement du jeu',
    },
    banner: 'Cette course est sponsorisée, avec de beaux prix pour les utilisateurs de Tropela.',
    legal: 'Bases légales',
    prizes: 'Prix',
  },
  user: {
    menu: {
      admin: 'Espace administrateur',
      avatar: 'Coureur',
      dashboard: 'Tableau de bord',
      privacy: 'Confidentialité',
      profile: 'Profil',
      settings: 'Paramètres',
      settingsAndPrivacy: 'Paramètres et confidentialité',
      notifications: 'Notifications',
      subscriptions: 'Abonnements',
      login: 'Se connecter',
      logout: 'Se déconnecter',
      passwordChange: 'Changer de mot de passe',
      emails: 'Emails',
      socialConnections: 'Connexions sociales',
      signup: "S'inscrire",
      standings: 'Mon classement',
      tropeltxos: 'Mes tropeltxos',
    },
    change_language:
      "Vous pouvez changer la langue de l'application ici. Le changement sera appliqué immédiatement et enregistré dans votre profil, afin qu'il puisse être mémorisé la prochaine fois que vous vous connectez (sur n'importe quel appareil).",
    confirm: {
      logout: 'Êtes-vous sûr de vouloir vous déconnecter ?',
    },
    tropeltxo: 'Tropeltxo | Tropeltxos',
  },
  ui: {
    form: {
      actions: {
        change: 'Changer',
        create: 'Créer',
        delete: 'Supprimer',
        update: 'Mettre à jour',
        reset: 'Réinitialiser',
        save: 'Enregistrer',
        submit: 'Envoyer',
        filter: 'Filtrer',
        typeMessage: 'Tapez votre message',
        login: 'Se connecter',
        signup: "S'inscrire",
      },
      fields: {
        username: "Nom d'utilisateur",
        password: 'Mot de passe',
        password2: 'Mot de passe (répéter)',
        email: 'Email',
        firstName: 'Prénom',
        lastName: 'Nom de famille',
        city: 'Ville',
        flag: 'Votre drapeau',
      },
      hints: {
        city: 'Votre ville sera utilisée pour afficher le classement local.',
        flag: 'Celui affiché dans le classement.',
      },
      required: 'Obligatoire.',
      rules: {
        required: 'Le champ est obligatoire.',
      },
      social: {
        facebook: 'Continuer avec Facebook',
        google: 'Continuer avec Google',
        twitter: 'Continuer avec Twitter / X',
      },
    },
    select: {
      all: 'Tous | Toutes',
      aggregate: 'Agrégat',
      locale: 'Langue',
      stage: 'Étape',
      finalStage: 'Finale',
    },
    nav: {
      pageFirst: 'Première page',
      pagePrevious: 'Page précédente',
      pageNext: 'Page suivante',
      pageLast: 'Dernière page',
    },
    or: 'ou',
  },
  message: {
    loggedIn: 'Connecté en tant que {username}',
    loggedOut: 'Vous vous êtes déconnecté',
    passwordResetRequested: 'Un email de réinitialisation de mot de passe a été envoyé',
    porraSaveDelay: 'Votre équipe sera enregistrée dans {seconds} secondes',
    porraCreated: 'Votre équipe a été créée',
    porraUpdated: 'Votre équipe a été mise à jour',
    userProfileUpdated: 'Votre profil a été mis à jour',
  },
  notice: {
    noTropeltxoMessages: "Vous n'avez aucun message tropeltxo",
    placeStandingsLogIn: 'Connectez-vous pour voir votre classement local.',
    placeStandingsNoPlace: 'Mettez à jour vos informations de ville pour voir votre classement local.',
    porraClosed: "Vous ne pouvez pas créer d'équipe pour cette course.",
    porraCreateLogIn: 'Vous devez vous connecter pour créer une équipe.',
    xedapAds: 'Voulez-vous voir vos annonces ici ? Contactez-nous !',
  },
  premium: {
    banner: {
      join: 'Devenez un Premier Domestique et profitez de fonctionnalités supplémentaires !',
      noAds: 'Sans publicité !',
    },
    action: {
      upgrade: 'Mettre à niveau',
    },
  },
  privacy: {
    shareOnSocialMedia: 'Partager votre activité sur les réseaux sociaux',
    shareOnSocialMediaDescription:
      'Lorsque vous créez une équipe, partagez-la sur les réseaux sociaux (si vous utilisez une connexion Twitter ou Facebook).',
    makeProfilePublic: 'Rendre votre profil public',
    makeProfilePublicDescription:
      "Vous pouvez rendre votre profil public, afin que d'autres utilisateurs puissent voir votre historique et vos résultats sur Tropela.",
    receiveEmails: 'Recevoir des emails de Tropela',
    receiveEmailsDescription: 'Rappels pour créer une équipe, actualités, etc.',
    receiveNotifications: 'Recevoir des notifications push',
    receiveNotificationsDescription:
      'Recevoir des notifications push sur les appareils mobiles, lorsque nous ouvrons un nouveau jeu.',
  },
  faq: {
    title: 'FAQ',
  },
  xedap: {
    banner: {
      updateRider:
        'Mettez à jour votre coureur dans vos paramètres. Des centaines de combinaisons différentes pour créer votre avatar unique, des milliers si vous êtes un Premier Domestique !',
    },
    form: {
      height: {
        label: 'Taille',
      },
      weight: {
        label: 'Poids',
      },
      skin: {
        label: 'Teint de peau',
      },
      bikes: {
        label: 'Vélo',
        options: {
          bike_road: 'Route',
          bike_victorian: 'Victorien',
          bike_mountain: 'VTT',
        },
      },
    },
  },
};
