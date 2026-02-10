//! tropela-app translation file
//! locale : Catalan [ca]
//! author : eillarra : https://github.com/eillarra

export default {
  // app: cadenes generals de l'aplicació
  app: {
    updated: "Hem actualitzat l'aplicació. Refresca per utilitzar l'última versió.",
    welcome: 'A Tropela.eus pots competir amb la teva família i amics en les millors curses ciclistes de la temporada.',
  },

  // auth: autenticació i gestió de comptes
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
    passwordResetConfirm: {
      title: 'Nova contrasenya.',
      intro: 'Escriu aquí la teva nova contrasenya; podràs utilitzar-la per accedir a Tropela.',
    },
  },

  // countdown: unitats de temps per comptes enrere
  countdown: {
    months: 'mes | mesos',
    days: 'dia | dies',
    hours: 'hora | hores',
    minutes: 'minut | minuts',
    seconds: 'segon | segons',
  },

  // error: missatges d'error genèrics
  error: {
    generic: "S'ha produït un error. Torna-ho a provar.",
    loadingFailed: 'Error en carregar les dades.',
    paymentFailed: 'El pagament ha fallat. Torna-ho a provar.',
  },

  // faq: preguntes freqüents
  faq: {
    title: 'Preguntes freqüents',
    helpTropela: {
      q: 'Com puc ajudar Tropela?',
      description: 'Fes-te Gregari de luxe per donar suport als nostres projectes.',
    },
    translateTropela: {
      q: 'Puc ajudar amb les traduccions?',
      description:
        'Donem suport a les llengües minoritàries i a les parlades en països amb una forta cultura ciclista. Pots afegir nous idiomes o millorar les traduccions mitjançant el nostre repositori públic.',
    },
    dashboardPercentage: {
      q: 'Què signifiquen els percentatges al teu dashboard?',
      description:
        "Al teu Tropela, els percentatges indiquen el teu rendiment en cada competició. El percentatge és el percentatge d'usuaris que han acabat darrere teu.",
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
      description: "Per participar en aquesta competició, has d'iniciar sessió i fer el teu equip.",
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
        'Els ciclistes amb estrelles estan a la porra ideal; és a dir, són la millor opció per guanyar aquesta competició.',
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
    seasonIcs: {
      q: 'Com puc rebre el calendari de competicions?',
      description:
        'Amb aquest enllaç pots descarregar un fitxer ICS per afegir les competicions de la temporada al teu calendari digital.',
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

  // game: funcions de competicions patrocinades
  game: {
    menu: {
      standings: 'Classificacions patrocinades',
    },
    banner: 'Aquesta és una competició patrocinada, amb premis per als usuaris de Tropela.',
    legal: 'Bases legals',
    prizes: 'Premis',
  },

  // menu: navegació principal
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

  // message: feedback per a l'usuari
  message: {
    toast: {
      invalidCredentials: "El nom d'usuari i/o la contrasenya que has especificat no són correctes.",
      loggedIn: 'Has iniciat sessió com {username}',
      loggedOut: 'Has tancat sessió',
      passwordResetRequested: "S'ha enviat un email per restablir la contrasenya",
      porraSaveDelay: 'El teu equip es guardarà en {seconds} segons',
      porraCreated: "El teu equip s'ha creat correctament",
      porraUpdated: "El teu equip s'ha actualitzat",
      porraRandomSelected: "S'ha proposat un equip aleatori",
      searchDelay: 'La cerca es realitzarà en {seconds} segons',
      userProfileUpdated: "El teu perfil s'ha actualitzat",
      userProfileUpdateError: "S'ha produït un error en actualitzar el teu perfil.",
      emailTaken: 'Aquesta adreça de correu electrònic ja està en ús.',
      passwordsDontMatch: 'Les contrasenyes no coincideixen.',
      signupError: "S'ha produït un error en el registre. Torna-ho a provar.",
      usernameTaken: "Aquest nom d'usuari ja està en ús.",
    },
    inline: {
      noTropeltxoMessages: 'No tens missatges en aquest tropeltxo.',
      placeStandingsLogIn: 'Inicia sessió per veure les classificacions locals.',
      placeStandingsNoPlace: 'Actualitza la teva informació de ciutat per veure les classificacions locals.',
      porraClosed: 'No pots fer un equip per a aquesta competició.',
      porraCreateLogIn: "Has d'iniciar sessió per fer un equip.",
      porraViewLogIn: 'Inicia sessió per veure aquest equip.',
      xedapAds: 'Vols veure els teus anuncis aquí? Contacta amb nosaltres!',
    },
  },

  // notification: notificacions push
  notification: {
    dorsalsNotParticipating:
      'Alguns ciclistes del teu equip (#{porra_id}) no participaran a {race_name}. Hauries de revisar la teva selecció de ciclistes!',
    emptyTropeltxo:
      'Estàs sol en un dels teus tropeltxos per a {race_name}... digues-ho als teus amics! Tropela és més divertit amb amics i família.|Estàs sol en {count} dels teus tropeltxos per a {race_name}... digues-ho als teus amics! Tropela és més divertit amb amics i família.',
    porraPending: 'No oblidis fer el teu equip per a {race_name}!',
    tropeltxoMembershipPending:
      'Hi ha una sol·licitud pendent al tropeltxo "{tropeltxo_name}".|Hi ha {count} sol·licituds pendents al tropeltxo "{tropeltxo_name}".',
    tropeltxoMessage: 'Hi ha nous missatges al xat del tropeltxo "{tropeltxo_name}".',
  },

  // payment: flux de pagament
  payment: {
    title: 'Detalls del pagament',
    secure: 'Pagament segur processat per Stripe',
    pay: 'Pagar {amount}',
    card: 'Informació de la targeta',
  },

  // place: funcions basades en ubicació
  place: {
    menu: {
      standings: 'Classificacions locals',
    },
  },

  // premium: promoció de subscripció
  premium: {
    banner: {
      join: 'Uneix-te als Gregaris de luxe i gaudeix de avantatges exclusius.',
      noAds: 'I sense publicitat!',
    },
    action: {
      upgrade: 'Fes-te Gregari',
    },
  },

  // privacy: configuració de privacitat
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

  // race: pàgines de competicions
  race: {
    metaDescription:
      '{name} {season} - Joc de ciclisme fantasy. Tria els teus ciclistes i competeix amb els teus amics a Tropela.eus.',
    menu: {
      presentation: 'Presentació',
      standings: 'Classificacions',
      standings2: 'Classificacions (fins a aquesta cursa)',
      points: 'Punts dels ciclistes',
      dorsals: 'Dorsals',
      news: 'Notícies',
      createPorra: 'Fer equip',
      myPorra: 'El meu equip',
    },
    canceled: 'Cancel·lada',
    stage: 'Etapa | Etapes',
    stageToday: "Etapa d'avui | Etapes d'avui",
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

  // season: funcions de temporada
  season: {
    allRaces: 'Totes les competicions',
    calendar: 'Calendari',
    nextRace: 'Propera competició | Properes competicions',
    menu: {
      presentation: 'Presentació de la temporada',
      standings: 'Classificacions de la temporada',
    },
    collection: 'Col·lecció | Col·leccions',
    race: 'Competició | Competicions',
    racesCount: 'No hi ha competicions | Una competició | {n} competicions',
    performance: 'Rendiment',
  },

  // subscription: flux de subscripció premium
  subscription: {
    active: 'Subscripció activa',
    available: 'Plans disponibles',
    expiresAt: 'Caduca el {date}',
    subscribe: "Subscriure's",
    success: 'Subscripció realitzada amb èxit! Gràcies pel teu suport.',
    benefits: {
      title: 'Per què fer-se Gregari de Luxe?',
      adFree: 'Experiència sense anuncis: gaudeix de Tropela sense distraccions.',
      badges: 'Insígnia exclusiva: mostra una insígnia especial al costat del teu nom a les classificacions.',
      stats: 'Estadístiques avançades: accedeix a dades històriques detallades i anàlisis.',
      support: 'Dona suport al projecte: ajuda a mantenir els servidors i a desenvolupar noves funcions.',
    },
  },

  // tropeltxo: funcions de tropeltxo (grups)
  tropeltxo: {
    chat: 'Xat',
    limitReached: "Has arribat al límit de tropeltxos. Surt d'un tropeltxo o elimina'n un.",
    create: 'Crear un nou tropeltxo',
    search: 'Cercar un tropeltxo',
    membership: 'Pertinença',
    membershipLevel: {
      admin: 'Admin',
      adminDescription: 'Control total sobre el tropeltxo. Pot gestionar membres i configuracions.',
      moderator: 'Moderador',
      moderatorDescription: 'Pot gestionar membres.',
      member: 'Membre',
      memberDescription: 'Pot veure classificacions.',
      pending: 'Pendent',
      pendingDescription: 'Ha sol·licitat accés al tropeltxo però encara no ha estat acceptat.',
      invited: 'Convidat',
      invitedDescription: 'Ha estat convidat al tropeltxo però encara no ha acceptat.',
      rejected: 'Rebutjat',
    },
    members: 'Membres',
    public: 'Públic',
    private: 'Privat',
    publicDescription: 'Qualsevol pot trobar i unir-se a aquest tropeltxo.',
    privateDescription: 'Només els usuaris convidats poden unir-se a aquest tropeltxo.',
    createTropeltxo: {
      action: 'Crear tropeltxo',
      description:
        'Pots crear un tropeltxo amb els teus amics, família, companys de feina o veïns per veure subclassificacions.',
      success: 'Tropeltxo creat correctament',
    },
    deleteTropeltxo: {
      action: 'Eliminar tropeltxo',
      description:
        "Aquesta acció no es pot desfer. Tots els membres perdran l'accés a les classificacions del tropeltxo i totes les dades seran eliminades.",
      confirm: 'Estàs segur que vols eliminar aquest tropeltxo?',
      success: 'Tropeltxo eliminat correctament',
    },
    leaveTropeltxo: {
      action: 'Deixar el tropeltxo',
      description:
        "Perdràs l'accés a les classificacions del tropeltxo. Pots sol·licitar accés de nou en qualsevol moment.",
      adminDescription:
        "Com que ets l'únic administrador, has de donar el rol d'administrador a un altre membre abans de deixar el tropeltxo.",
      confirm: 'Estàs segur que vols deixar aquest tropeltxo?',
      success: 'Has deixat el tropeltxo',
    },
    inviteMember: {
      action: 'Convidar usuari',
    },
    removeMember: {
      action: 'Eliminar membre',
      description: "Vols eliminar l'usuari del tropeltxo? Perdrà l'accés a les classificacions del tropeltxo.",
      confirm: "Estàs segur que vols eliminar aquest membre d'aquest tropeltxo?",
      success: 'Membre eliminat del tropeltxo',
    },
    searchTropeltxo: {
      placeholder: 'Cercar...',
      noResults: "No s'han trobat tropeltxos amb aquesta cerca.",
      error: 'Error en la cerca. Torna-ho a provar més tard.',
      joinedPublic: "T'has unit al tropeltxo públic.",
      requestSent: "S'ha enviat la sol·licitud per unir-se al tropeltxo privat.",
    },
    form: {
      name: 'Nom del tropeltxo',
      nameRequired: 'El nom del tropeltxo és obligatori',
      nameMinLength: 'Mínim 4 caràcters',
      isPublic: 'Tropeltxo públic',
      createError: 'Ha ocorregut un error en crear el tropeltxo.',
    },
    changeLevel: {
      confirm: "Estàs segur que vols canviar el nivell d'aquest membre?",
      adminConfirm: "Si dones el rol d'administrador a aquest membre, el teu rol baixarà a moderador.",
      success: 'El nivell del membre ha estat canviat.',
    },
    joinByCode: {
      title: 'Unir-se a un tropeltxo',
      action: 'Unir-se amb codi',
      placeholder: "Introdueix el codi d'invitació",
      confirm: 'Vols unir-te al tropeltxo "{name}"?',
      membersCount: '{count} membres',
      success: "T'has unit al tropeltxo!",
      invalidCode: "El codi d'invitació no és vàlid.",
      alreadyMember: "Ja ets membre d'aquest tropeltxo.",
      loginRequired: "Has d'iniciar sessió per unir-te a un tropeltxo.",
    },
    share: {
      title: 'Compartir tropeltxo',
      shareText: 'Uneix-te al meu tropeltxo!',
      inviteUrl: "Enllaç d'invitació",
      copyCode: 'Copiar codi',
      codeCopied: 'Codi copiat!',
      copyLink: 'Copiar enllaç',
      linkCopied: 'Enllaç copiat!',
      shareLink: 'Compartir enllaç',
      qrCode: 'Codi QR',
      downloadQr: 'Descarregar codi QR',
    },
  },

  // ui: elements d'interfície compartits
  ui: {
    form: {
      actions: {
        ok: "D'acord",
        cancel: 'Cancel·lar',
        change: 'Canviar',
        close: 'Tancar',
        confirm: 'Confirmar',
        create: 'Crear',
        delete: 'Esborrar',
        dismiss: 'Descartar',
        downloadIcs: 'Descarregar calendari',
        filter: 'Filtrar',
        login: 'Iniciar sessió',
        pay: 'Pagar',
        refresh: 'Refrescar',
        reset: 'Reiniciar',
        save: 'Desar',
        search: 'Cercar',
        share: 'Compartir',
        signup: 'Registrar-se',
        submit: 'Enviar',
        typeMessage: 'Escriu el teu missatge',
        update: 'Actualitzar',
      },
      fields: {
        username_email: "Nom d'usuari o correu electrònic",
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
      race: 'Competició',
      stage: 'Etapa',
      finalStage: 'Final',
      annual: 'Anual',
    },
    nav: {
      pageFirst: 'Primera pàgina',
      pagePrevious: 'Pàgina anterior',
      pageNext: 'Pàgina següent',
      pageLast: 'Última pàgina',
    },
    search: {
      placeholder: 'Cercar...',
    },
    or: 'o',
    loading: 'Carregant...',
    retry: 'Tornar a provar',
  },

  // user: perfil d'usuari i compte
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
    changeLanguage:
      "Pots canviar l'idioma de l'aplicació aquí. El canvi s'aplicarà immediatament i es guardarà al teu perfil, perquè es pugui recordar la propera vegada que iniciïs sessió (en qualsevol dispositiu).",
    confirm: {
      logout: 'Estàs segur que vols tancar sessió?',
    },
    tropeltxo: 'Tropeltxo | Tropeltxos',
  },

  // xedap: editor d'avatar del ciclista
  xedap: {
    banner: {
      updateRider:
        'Actualitza el teu ciclista a la teva configuració. Centenars de combinacions diferents per crear el teu avatar únic, milers si ets Gregari de luxe!',
    },
    form: {
      height: {
        label: 'Alçada',
      },
      weight: {
        label: 'Pes',
      },
      skin: {
        label: 'To de pell',
      },
      bikes: {
        label: 'Bicicleta',
        options: {
          bike_road: 'Carretera',
          bike_victorian: 'Victoriana',
          bike_mountain: 'BTT',
        },
      },
    },
  },
};
