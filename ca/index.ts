//! tropela-app translation file
//! locale : Catalan [ca]
//! author : eillarra : https://github.com/eillarra

export default {
  updated: 'Contingut actualitzat. Si us plau, refresca la pàgina.',
  welcome: 'A Tropela.eus pots competir amb la teva família i amics en les millors curses ciclistes de la temporada.',
  menu: {
    home: 'Inici',
    races: 'Competicions',
    seasons: 'Temporades',
    rules: 'Regles',
    premium: 'Gregari de luxe | Gregaris de luxe',
    blog: 'Blog',
    store: 'Botiga',
    about: 'Associació',
    privacy: 'Política de privacitat',
    terms: "Termes d'ús",
    contact: 'Contacte',
    tropeltxos: 'Tropeltxos',
  },
  auth: {
    login: {
      title: 'Benvingut.',
      link: 'Ja tens un compte? Inicia sessió',
    },
    signup: {
      title: 'Uneix-te al pelotó.',
      link: "No tens compte? Registra't",
    },
    passwordReset: {
      title: 'Restablir contrasenya.',
      intro:
        "Has oblidat la teva contrasenya? Escriu la teva adreça de correu electrònic i t'enviarem un enllaç per restablir-la.",
      link: 'Has oblidat la teva contrasenya?',
    },
  },
  countdown: {
    months: 'mes | mesos',
    days: 'dia | dies',
    hours: 'hora | hores',
    minutes: 'minut | minuts',
    seconds: 'segon | segons',
  },
  season: {
    calendar: 'Calendari',
    nextRace: 'Propera competició | Properes competicions',
    menu: {
      standings: 'Classificacions de la temporada',
    },
    collection: 'Col·lecció | Col·leccions',
    race: 'Competició | Competicions',
    racesCount: 'No hi ha competicions | Una competició | {n} competicions',
  },
  race: {
    menu: {
      presentation: 'Presentació',
      standings: 'Classificacions',
      points: 'Punts dels ciclistes',
      dorsals: 'Dorsals',
      news: 'Notícies',
      createPorra: 'Fer equip',
      myPorra: 'El meu equip',
    },
    canceled: 'Cancel·lada',
    stage: 'Etapa | Etapes',
    stage_today: "Etapa d'avui | Etapes d'avui",
    team: 'Equip | Equips',
    dorsal: {
      filter: 'Filtrar per nom, equip o país',
      group: 'Grup | Grups',
      status: 'Estat | Estats',
      statuses: {
        unconfirmed: 'Sense confirmar',
        participating: 'Confirmat',
        notParticipating: 'No participa',
        retired: 'Retirat',
      },
      sort: {
        alpha: 'Ordenar per nom',
        percent: 'Ordenar per percentatge',
        position: 'Ordenar per punts',
      },
    },
    porra: {
      registrationOpens: 'Obrim en',
      registrationOpenFor: 'Fes el teu equip a',
      showAllStages: 'Mostrar totes les etapes',
    },
    porrasCount: 'No hi ha equips | Un equip | {n} equips',
    pointsRules: 'Puntuacions',
  },
  place: {
    menu: {
      standings: 'Classificacions locals',
    },
  },
  game: {
    menu: {
      standings: 'Classificacions patrocinades',
    },
    banner: 'Aquesta és una competició patrocinada, amb premis per als usuaris de Tropela.',
    legal: 'Bases legals',
    prizes: 'Premis',
  },
  user: {
    menu: {
      admin: "Zona d'administració",
      avatar: 'El meu ciclista',
      dashboard: 'Les meves estadístiques',
      privacy: 'Privacitat',
      profile: 'Perfil',
      settings: 'Configuració',
      settingsAndPrivacy: 'Configuració i privacitat',
      notifications: 'Notificacions',
      subscriptions: 'Subscripcions',
      login: 'Iniciar sessió',
      logout: 'Tancar sessió',
      passwordChange: 'Contrasenya',
      emails: 'Emails',
      socialConnections: 'Connexions socials',
      signup: 'Registrar-se',
      standings: 'Les meves classificacions',
      tropeltxos: 'Els meus tropeltxos',
    },
    change_language:
      "Pots canviar l'idioma de l'aplicació aquí. El canvi s'aplicarà immediatament i es guardarà al teu perfil, perquè es pugui recordar la propera vegada que iniciïs sessió (en qualsevol dispositiu).",
    confirm: {
      logout: 'Estàs segur que vols tancar sessió?',
    },
    tropeltxo: 'Tropeltxo | Tropeltxos',
  },
  ui: {
    form: {
      actions: {
        change: 'Canviar',
        create: 'Crear',
        delete: 'Esborrar',
        update: 'Actualitzar',
        refresh: 'Refrescar',
        reset: 'Reiniciar',
        save: 'Desar',
        submit: 'Enviar',
        filter: 'Filtrar',
        dismiss: 'Descartar',
        typeMessage: 'Escriu el teu missatge',
        login: 'Iniciar sessió',
        signup: 'Registrar-se',
      },
      fields: {
        username: "Nom d'usuari",
        password: 'Contrasenya',
        password2: 'Repeteix la contrasenya',
        email: 'Email',
        firstName: 'Nom',
        lastName: 'Cognoms',
        city: 'Ciutat',
        flag: 'La teva bandera',
      },
      hints: {
        city: 'Emprarem això per a les classificacions locals.',
        flag: 'Es mostra a les classificacions.',
      },
      required: 'Obligatori.',
      rules: {
        required: 'Aquest camp és obligatori.',
      },
      social: {
        facebook: 'Continuar amb Facebook',
        google: 'Continuar amb Google',
        twitter: 'Continuar amb Twitter / X',
      },
    },
    select: {
      all: 'Tot | Tots',
      aggregate: 'General',
      locale: 'Idioma',
      stage: 'Etapa',
      finalStage: 'Final',
    },
    nav: {
      pageFirst: 'Primera pàgina',
      pagePrevious: 'Pàgina anterior',
      pageNext: 'Pàgina següent',
      pageLast: 'Última pàgina',
    },
    or: 'o',
  },
  message: {
    loggedIn: 'Has iniciat sessió com {username}',
    loggedOut: 'Has tancat sessió',
    passwordResetRequested: "S'ha enviat un email per restablir la contrasenya",
    porraSaveDelay: 'El teu equip es guardarà en {seconds} segons',
    porraCreated: "El teu equip s'ha creat correctament",
    porraUpdated: "El teu equip s'ha actualitzat",
    porraRandomSelected: "S'ha proposat un equip aleatori",
    userProfileUpdated: "El teu perfil s'ha actualitzat",
  },
  premium: {
    banner: {
      join: 'Uneix-te als Gregaris de luxe i gaudeix de avantatges exclusius.',
      noAds: 'I sense publicitat!',
    },
    action: {
      upgrade: 'Fes-te Gregari',
    },
  },
  privacy: {
    shareOnSocialMedia: 'Compartir la teva activitat en xarxes socials',
    shareOnSocialMediaDescription:
      'Quan crees un equip, pots compartir en xarxes socials que estàs participant (si accedeixes via Twitter o Facebook).',
    makeProfilePublic: 'Fer públic el teu perfil',
    makeProfilePublicDescription: 'Pots fer públic el teu perfil i compartir els teus resultats i estadístiques.',
    receiveEmails: 'Rebre emails de Tropela',
    receiveEmailsDescription: 'Recordatoris, novetats, etc.',
    receiveNotifications: 'Rebre notificacions',
    receiveNotificationsDescription:
      'Rebre notificacions `push` en dispositius mòbils, quan obrim una nova competició.',
  },
  faq: {
    title: 'Preguntes freqüents',
    helpTropela: {
      q: 'Com puc ajudar Tropela?',
      description: 'Fes-te Gregari de luxe per donar suport als nostres projectes.',
    },
    profileAvatar: {
      q: 'Com puc canviar el meu ciclista?',
      description: 'Pots canviar el teu ciclista al teu perfil. Tens centenars de combinacions possibles!',
    },
    profilePremium: {
      q: 'Per què alguns usuaris tenen aquest icona?',
      description: "Els Gregaris de luxe són usuaris que ajuden a Tropela, i gaudeixen d'avantatges exclusius.",
    },
    raceLoginToCreatePorra: {
      q: 'Com puc participar en aquesta competició?',
      description:
        "Per participar en aquesta competició, has d'iniciar sessió i fer la teva por en aquesta competició.",
    },
    raceDorsalsRetired: {
      q: 'On puc veure els dorsals retirats?',
      description: 'Pots filtrar els dorsals per estat per veure els retirats.',
    },
    racePointsAbc: {
      q: 'Què volen dir les lletres que apareixen al costat dels dorsals?',
      description:
        'Les lletres mostren quantes persones han seleccionat els ciclistes. Hi ha quatre lletres: A (>%30), B (%30-%3), C (%3-%1) i D (<%1).',
    },
    racePointsStars: {
      q: 'Què volen dir les estrelles al costat dels ciclistes?',
      description:
        'Els ciclistes amb estrelles estan a la por ideal; és a dir, són la millor opció per guanyar aquesta competició.',
    },
    raceStandings: {
      q: 'Com es calculen les classificacions?',
      description:
        'Al final de cada etapa, rebràs els punts dels ciclistes que has seleccionat a la teva porra. Aquests punts són els que determinen les classificacions.',
    },
    racePlaceStandings: {
      q: 'Què puc fer si no veig les classificacions locals?',
      description: "Per veure les classificacions locals, has d'especificar la teva ciutat al teu perfil.",
    },
    racePorraRiskFactor: {
      q: 'Quin és el significat de la barra?',
      description: "La barra indica el nivell de risc de 0 a 10: el risc que l'usuari ha pres al fer la seva porra.",
    },
    racePorraMyRiskFactor: {
      q: 'Quin és el nivell de risc de la meva porra?',
      description: 'El risc que has pres al fer la teva porra, de 0 a 10:',
    },
    racePorraAds: {
      q: 'Per què veig anuncis abans de desar la meva porra?',
      description: 'Només els Gregaris de luxe poden desar la seva porra sense veure anuncis.',
    },
    racePorraCreateRandom: {
      q: 'Podeu fer una porra aleatòria per mi?',
      description: 'Per descomptat. Trieu les lletres que hem de tenir en compte i us farem una porra!',
    },
    tropeltxos: {
      q: 'On puc gestionar els meus tropeltxos?',
      description:
        'Amb els tropeltxos podràs veure subclassificacions amb els teus amics, familiars, companys de feina o veïns.',
    },
    tropeltxoPrize: {
      q: 'Hi ha premis per al guanyador del tropeltxo?',
      description:
        'Tropela no ofereix premis als tropeltxos, però no oblidis que tenim una botiga si vols repartir premis!',
    },
  },
};
