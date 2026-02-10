//! tropela-app translation file
//! locale : French [fr]
//! author : github : https://github.com/github

export default {
  // app: chaînes générales de l'application
  app: {
    updated: "Nous avons mis à jour l'application. Veuillez actualiser pour utiliser la dernière version.",
    welcome:
      'Tropela.eus est un jeu de cyclisme fantastique où vous pouvez jouer avec vos amis et votre famille, gratuitement, dans les courses les plus excitantes de la saison.',
  },

  // auth: authentification et gestion de compte
  auth: {
    login: {
      title: 'Bienvenue.',
      link: 'Vous avez déjà un compte ? Connectez-vous',
    },
    signup: {
      title: 'Rejoignez le peloton.',
      link: 'Pas encore de compte? Inscrivez-vous',
    },
    passwordReset: {
      title: 'Réinitialiser le mot de passe.',
      intro:
        'Avez-vous oublié votre mot de passe ? Remplissez votre adresse e-mail et nous vous enverrons un lien pour le réinitialiser.',
      link: 'Mot de passe oublié ?',
    },
    passwordResetConfirm: {
      title: 'Nouveau mot de passe.',
      intro: 'Entrez votre nouveau mot de passe ici ; vous pourrez l\u2019utiliser pour accéder à Tropela.',
    },
  },

  // countdown: unités de temps pour les comptes à rebours
  countdown: {
    months: 'mois | mois',
    days: 'jour | jours',
    hours: 'heure | heures',
    minutes: 'minute | minutes',
    seconds: 'seconde | secondes',
  },

  // error: messages d'erreur génériques
  error: {
    generic: 'Une erreur est survenue. Veuillez réessayer.',
    loadingFailed: 'Échec du chargement des données.',
    paymentFailed: 'Le paiement a échoué. Veuillez réessayer.',
  },

  // faq: questions fréquentes
  faq: {
    title: 'FAQ',
    helpTropela: {
      q: 'Comment puis-je aider Tropela ?',
      description: 'Devenez un Premier domestique pour soutenir nos projets.',
    },
    translateTropela: {
      q: 'Puis-je aider avec les traductions ?',
      description:
        'Nous soutenons les langues minoritaires et celles parlées dans les pays ayant une forte culture cycliste. Vous pouvez ajouter de nouvelles langues ou améliorer les traductions via notre dépôt public.',
    },
    dashboardPercentage: {
      q: 'Que signifient les pourcentages dans votre tableau de bord ?',
      description:
        'Dans votre Tropela, les pourcentages indiquent votre performance dans chaque compétition. Le pourcentage est le pourcentage d\u2019utilisateurs qui se sont retrouvés derrière vous.',
    },
    profileAvatar: {
      q: 'Comment puis-je changer mon coureur ?',
      description:
        'Vous pouvez changer votre coureur dans vos paramètres. Des centaines de combinaisons différentes pour créer votre avatar unique!',
    },
    profilePremium: {
      q: 'Pourquoi certains utilisateurs ont-ils cet icône ?',
      description:
        "Les premiers domestiques sont des utilisateurs qui aident Tropela et bénéficient d'avantages exclusifs.",
    },
    raceLoginToCreatePorra: {
      q: 'Comment puis-je participer à cette compétition ?',
      description: 'Pour participer à cette compétition, vous devez vous connecter et créer votre équipe.',
    },
    raceDorsalsRetired: {
      q: 'Où puis-je voir les dossards retirés ?',
      description: 'Vous pouvez filtrer les dossards par statut pour voir uniquement les retraités.',
    },
    racePointsAbc: {
      q: 'Que signifient les lettres à côté des coureurs ?',
      description:
        "Les lettres montrent combien d'utilisateurs ont sélectionné les coureurs. Il y a quatre lettres : A (>%30), B (%30-%3), C (%3-%1) et D (<%1).",
    },
    racePointsStars: {
      q: 'Que signifient les étoiles à côté des coureurs ?',
      description:
        "Les coureurs avec des étoiles sont dans l'équipe idéale ; c'est-à-dire, ils sont la meilleure option pour gagner cette compétition.",
    },
    raceStandings: {
      q: 'Comment les classements sont-ils calculés ?',
      description:
        'À la fin de chaque étape, vous recevez les points des coureurs que vous avez sélectionnés dans votre équipe. Ces points déterminent le classement.',
    },
    racePlaceStandings: {
      q: 'Que puis-je faire si je ne vois pas le classement local ?',
      description: 'Pour voir le classement local, vous devez spécifier votre ville dans votre profil.',
    },
    racePorraRiskFactor: {
      q: 'Que signifie la barre ?',
      description:
        "La barre indique le niveau de risque de 0 à 10 : le risque que l'utilisateur a pris en créant son équipe.",
    },
    racePorraMyRiskFactor: {
      q: 'Quel est le niveau de risque de mon équipe ?',
      description: 'Le risque que vous avez pris en créant votre équipe, de 0 à 10 :',
    },
    racePorraAds: {
      q: "Pourquoi je vois des annonces avant d'enregistrer mon équipe ?",
      description: "Seuls les premiers domestiques peuvent enregistrer leur équipe sans voir d'annonces.",
    },
    racePorraCreateRandom: {
      q: 'Pouvez-vous me faire une équipe aléatoire ?',
      description:
        'Bien sûr. Choisissez les lettres que nous devrions considérer et nous vous proposerons une équipe !',
    },
    seasonIcs: {
      q: 'Comment puis-je recevoir le calendrier des compétitions ?',
      description:
        'Avec ce lien, vous pouvez télécharger un fichier ICS pour ajouter les compétitions de la saison à votre calendrier numérique.',
    },
    tropeltxos: {
      q: 'Où puis-je gérer mes tropeltxos ?',
      description:
        'Avec tropeltxos, vous pouvez voir des sous-classifications avec vos amis, votre famille, vos collègues de travail ou vos voisins.',
    },
    tropeltxoPrize: {
      q: 'Y a-t-il des prix pour le gagnant du tropeltxo ?',
      description:
        "Tropela n'offre pas de prix aux tropeltxos, mais n'oubliez pas que nous avons une boutique si vous voulez distribuer des prix !",
    },
  },

  // game: compétitions sponsorisées
  game: {
    menu: {
      standings: 'Classement du jeu',
    },
    banner: 'Cette course est sponsorisée, avec de beaux prix pour les utilisateurs de Tropela.',
    legal: 'Bases légales',
    prizes: 'Prix',
  },

  // menu: navigation principale
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

  // message: feedback pour l'utilisateur
  message: {
    toast: {
      invalidCredentials:
        'Le nom d\u2019utilisateur et/ou le mot de passe que vous avez spécifié ne sont pas corrects.',
      loggedIn: 'Connecté en tant que {username}',
      loggedOut: 'Vous vous êtes déconnecté',
      passwordResetRequested: 'Un email de réinitialisation de mot de passe a été envoyé',
      porraSaveDelay: 'Votre équipe sera enregistrée dans {seconds} secondes',
      porraCreated: 'Votre équipe a été créée',
      porraUpdated: 'Votre équipe a été mise à jour',
      porraRandomSelected: 'Une équipe aléatoire a été proposée',
      searchDelay: 'La recherche commencera dans {seconds} secondes',
      userProfileUpdated: 'Votre profil a été mis à jour',
      userProfileUpdateError: 'Une erreur est survenue lors de la mise à jour de votre profil.',
      emailTaken: 'Cette adresse email est déjà utilisée.',
      passwordsDontMatch: 'Les mots de passe ne correspondent pas.',
      signupError: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
      usernameTaken: "Ce nom d'utilisateur est déjà pris.",
    },
    inline: {
      noTropeltxoMessages: "Vous n'avez aucun message tropeltxo",
      placeStandingsLogIn: 'Connectez-vous pour voir votre classement local.',
      placeStandingsNoPlace: 'Mettez à jour vos informations de ville pour voir votre classement local.',
      porraClosed: "Vous ne pouvez pas créer d'équipe pour cette course.",
      porraCreateLogIn: 'Vous devez vous connecter pour créer une équipe.',
      porraViewLogIn: 'Connectez-vous pour voir cette équipe.',
      xedapAds: 'Voulez-vous voir vos annonces ici ? Contactez-nous !',
    },
  },

  // notification: notifications push
  notification: {
    dorsalsNotParticipating:
      'Certains coureurs de votre équipe (#{porra_id}) ne participeront pas à {race_name}. Vous devriez vérifier votre sélection de coureurs !',
    emptyTropeltxo:
      'Vous êtes tout seul dans un de vos tropeltxos pour {race_name}... dites-le à vos amis ! Tropela est plus amusant avec des amis et de la famille.|Vous êtes tout seul dans {count} de vos tropeltxos pour {race_name}... dites-le à vos amis ! Tropela est plus amusant avec des amis et de la famille.',
    porraPending: "N'oubliez pas de créer votre équipe pour {race_name} !",
    tropeltxoMembershipPending:
      'Il y a une demande en attente dans le tropeltxo "{tropeltxo_name}".|Il y a {count} demandes en attente dans le tropeltxo "{tropeltxo_name}".',
    tropeltxoMessage: 'Il y a de nouveaux messages dans le chat du tropeltxo "{tropeltxo_name}".',
  },

  // payment: flux de paiement
  payment: {
    title: 'Détails du paiement',
    secure: 'Paiement sécurisé traité par Stripe',
    pay: 'Payer {amount}',
    card: 'Informations de carte',
  },

  // place: fonctionnalités basées sur la localisation
  place: {
    menu: {
      standings: 'Classement local',
    },
  },

  // premium: promotion d'abonnement
  premium: {
    banner: {
      join: 'Devenez un Premier domestique et profitez de fonctionnalités supplémentaires !',
      noAds: 'Sans publicité !',
    },
    action: {
      upgrade: 'Mettre à niveau',
    },
  },

  // privacy: paramètres de confidentialité
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

  // race: pages de compétitions
  race: {
    metaDescription:
      '{name} {season} - Jeu de cyclisme fantasy. Choisissez vos coureurs et affrontez vos amis sur Tropela.eus.',
    menu: {
      presentation: 'Présentation',
      standings: 'Classement',
      standings2: "Classement (jusqu'à cette course)",
      points: 'Points des coureurs',
      dorsals: 'Liste des coureurs',
      news: 'Actualités',
      createPorra: 'Créer une équipe',
      myPorra: 'Mon équipe',
    },
    canceled: 'Annulé',
    stage: 'Étape | Étapes',
    stageToday: 'Étape du jour | Étapes du jour',
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
    pointsRules: 'Barème',
  },

  // season: fonctionnalités de saison
  season: {
    allRaces: 'Toutes les courses',
    calendar: 'Calendrier',
    nextRace: 'Prochaine course | Prochaines courses',
    menu: {
      presentation: 'Présentation de la saison',
      standings: 'Classement de la saison',
    },
    collection: 'Collection | Collections',
    race: 'Course | Courses',
    racesCount: 'Aucune course | Une course | {n} courses',
    performance: 'Performance',
  },

  // subscription: flux d'abonnement premium
  subscription: {
    active: 'Abonnement actif',
    available: 'Plans disponibles',
    expiresAt: 'Expire le {date}',
    subscribe: "S'abonner",
    success: 'Abonnement réussi ! Merci pour votre soutien.',
    benefits: {
      title: 'Pourquoi devenir Premier domestique ?',
      adFree: 'Expérience sans publicité : profitez de Tropela sans distractions.',
      badges: 'Badge exclusif : affichez un badge spécial à côté de votre nom dans les classements.',
      stats: 'Statistiques avancées : accédez à des données historiques détaillées et des analyses.',
      support: 'Soutenez le projet : aidez à maintenir les serveurs et développer de nouvelles fonctionnalités.',
    },
  },

  // tropeltxo: fonctionnalités de tropeltxo (groupes)
  tropeltxo: {
    chat: 'Chat',
    limitReached: 'Vous avez atteint la limite de tropeltxos. Quittez ou supprimez un tropeltxo.',
    create: 'Créer un nouveau tropeltxo',
    search: 'Chercher un tropeltxo',
    membership: 'Adhésion',
    membershipLevel: {
      admin: 'Admin',
      adminDescription: 'Contrôle total sur le tropeltxo. Peut gérer les membres et les paramètres.',
      moderator: 'Modérateur',
      moderatorDescription: 'Peut gérer les membres.',
      member: 'Membre',
      memberDescription: 'Peut voir les classements.',
      pending: 'En attente',
      pendingDescription: "A demandé l'accès au tropeltxo mais n'a pas encore été accepté.",
      invited: 'Invité',
      invitedDescription: "A été invité au tropeltxo mais n'a pas encore accepté.",
      rejected: 'Rejeté',
    },
    members: 'Membres',
    public: 'Public',
    private: 'Privé',
    publicDescription: 'Tout le monde peut trouver et rejoindre ce tropeltxo.',
    privateDescription: 'Seuls les utilisateurs invités peuvent rejoindre ce tropeltxo.',
    createTropeltxo: {
      action: 'Créer un tropeltxo',
      description:
        'Vous pouvez créer un tropeltxo avec vos amis, votre famille, vos collègues ou vos voisins pour voir des sous-classements.',
      success: 'Tropeltxo créé avec succès',
    },
    deleteTropeltxo: {
      action: 'Supprimer le tropeltxo',
      description:
        "Cette action est irréversible. Tous les membres perdront l'accès aux classements du tropeltxo et toutes les données seront supprimées.",
      confirm: 'Êtes-vous sûr de vouloir supprimer ce tropeltxo ?',
      success: 'Tropeltxo supprimé avec succès',
    },
    leaveTropeltxo: {
      action: 'Quitter le tropeltxo',
      description:
        "Vous perdrez l'accès aux classements du tropeltxo. Vous pouvez demander l'accès à nouveau à tout moment.",
      adminDescription:
        "En tant que seul administrateur, vous devez transférer le rôle d'administrateur à un autre membre avant de quitter le tropeltxo.",
      confirm: 'Êtes-vous sûr de vouloir quitter ce tropeltxo ?',
      success: 'Vous avez quitté le tropeltxo',
    },
    inviteMember: {
      action: 'Inviter un utilisateur',
    },
    removeMember: {
      action: 'Supprimer le membre',
      description: "Supprimer l'utilisateur du tropeltxo ? Il perdra l'accès aux classements du tropeltxo.",
      confirm: 'Êtes-vous sûr de vouloir supprimer ce membre de ce tropeltxo ?',
      success: 'Membre supprimé du tropeltxo',
    },
    searchTropeltxo: {
      placeholder: 'Chercher...',
      noResults: 'Aucun tropeltxo trouvé pour cette recherche.',
      error: 'Erreur lors de la recherche. Réessayez plus tard.',
      joinedPublic: 'Vous avez rejoint le tropeltxo public.',
      requestSent: 'Une demande pour rejoindre le tropeltxo privé a été envoyée.',
    },
    form: {
      name: 'Nom du tropeltxo',
      nameRequired: 'Le nom du tropeltxo est requis',
      nameMinLength: 'Au moins 4 caractères',
      isPublic: 'Tropeltxo public',
      createError: 'Une erreur est survenue lors de la création du tropeltxo.',
    },
    changeLevel: {
      confirm: 'Êtes-vous sûr de vouloir changer le niveau de ce membre ?',
      adminConfirm: "Si vous donnez le rôle d'administrateur à ce membre, votre rôle sera rétrogradé à modérateur.",
      success: 'Le niveau du membre a été modifié.',
    },
    joinByCode: {
      title: 'Rejoindre un tropeltxo',
      action: 'Rejoindre avec un code',
      placeholder: "Entrez le code d'invitation",
      confirm: 'Voulez-vous rejoindre le tropeltxo "{name}" ?',
      membersCount: '{count} membres',
      success: 'Vous avez rejoint le tropeltxo !',
      invalidCode: "Le code d'invitation n'est pas valide.",
      alreadyMember: 'Vous êtes déjà membre de ce tropeltxo.',
      loginRequired: 'Vous devez vous connecter pour rejoindre un tropeltxo.',
    },
    share: {
      title: 'Partager le tropeltxo',
      shareText: 'Rejoignez mon tropeltxo !',
      inviteUrl: "Lien d'invitation",
      copyCode: 'Copier le code',
      codeCopied: 'Code copié !',
      copyLink: 'Copier le lien',
      linkCopied: 'Lien copié !',
      shareLink: 'Partager le lien',
      qrCode: 'Code QR',
      downloadQr: 'Télécharger le code QR',
    },
  },

  // ui: éléments d'interface partagés
  ui: {
    form: {
      actions: {
        ok: 'OK',
        cancel: 'Annuler',
        change: 'Changer',
        close: 'Fermer',
        confirm: 'Confirmer',
        create: 'Créer',
        delete: 'Supprimer',
        dismiss: 'Rejeter',
        downloadIcs: 'Télécharger le calendrier',
        filter: 'Filtrer',
        login: 'Se connecter',
        pay: 'Payer',
        refresh: 'Rafraîchir',
        reset: 'Réinitialiser',
        save: 'Enregistrer',
        search: 'Rechercher',
        share: 'Partager',
        signup: "S'inscrire",
        submit: 'Envoyer',
        typeMessage: 'Tapez votre message',
        update: 'Mettre à jour',
      },
      fields: {
        username_email: 'Nom d\u2019utilisateur ou email',
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
      race: 'Course',
      stage: 'Étape',
      finalStage: 'Finale',
      annual: 'Annuel',
    },
    nav: {
      pageFirst: 'Première page',
      pagePrevious: 'Page précédente',
      pageNext: 'Page suivante',
      pageLast: 'Dernière page',
    },
    search: {
      placeholder: 'Rechercher...',
    },
    or: 'ou',
    loading: 'Chargement...',
    retry: 'Réessayer',
  },

  // user: profil utilisateur et compte
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
    changeLanguage:
      "Vous pouvez changer la langue de l'application ici. Le changement sera appliqué immédiatement et enregistré dans votre profil, afin qu'il puisse être mémorisé la prochaine fois que vous vous connectez (sur n'importe quel appareil).",
    confirm: {
      logout: 'Êtes-vous sûr de vouloir vous déconnecter ?',
    },
    tropeltxo: 'Tropeltxo | Tropeltxos',
  },

  // xedap: éditeur d'avatar du coureur
  xedap: {
    banner: {
      updateRider:
        'Mettez à jour votre coureur dans vos paramètres. Des centaines de combinaisons différentes pour créer votre avatar unique, des milliers si vous êtes un Premier domestique!',
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
