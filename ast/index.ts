//! tropela-app translation file
//! locale : Asturian [ast]
//! author : github : https://github.com/github

export default {
  updated: 'Hemos actualizáu la aplicación. Refresca pa usar la última versión.',
  welcome: 'En Tropela.eus pues competir colos tos familiares y amigos nes meyores carreres ciclistes de la temporada.',
  menu: {
    home: 'Entamu',
    races: 'Competiciones',
    seasons: 'Temporadas',
    rules: 'Regles',
    premium: 'Gregariu de lluxu | Gregarios de lluxu',
    blog: 'Blog',
    store: 'Tienda',
    about: 'Asociación',
    privacy: 'Política de privacidá',
    terms: "Términos d'usu",
    contact: 'Contactu',
    tropeltxos: 'Tropeltxos',
  },
  auth: {
    login: {
      title: 'Bienveníu.',
      link: '¿Yá tienes una cuenta? Anicia sesión',
    },
    signup: {
      title: 'Únete al pelotón.',
      link: '¿Nun tienes cuenta? Rexístrate',
    },
    passwordReset: {
      title: 'Restablecer contraseña.',
      intro:
        '¿Esquéciste la to contraseña? Escribe la to direición de corréu y unviarémoste un enllaz pa restablecela.',
      link: '¿Has olvidáu la to contraseña?',
    },
    passwordResetConfirm: {
      intro: 'Escribe equí la to nueva contraseña; podrás usala pa acceder a Tropela.',
    },
  },
  countdown: {
    months: 'mes | meses',
    days: 'día | díes',
    hours: 'hora | hores',
    minutes: 'minutu | minutos',
    seconds: 'segundu | segundos',
  },
  season: {
    allRaces: 'Toles competiciones',
    calendar: 'Calendariu',
    nextRace: 'Próxima competición | Próximes competiciones',
    menu: {
      standings: 'Clasificaciones de la temporada',
    },
    collection: 'Colección | Colecciones',
    race: 'Competición | Competiciones',
    racesCount: 'Nun hai competiciones | Una competición | {n} competiciones',
    performance: 'Rendimientu',
  },
  race: {
    metaDescription:
      '{name} {season} - Xuegu de ciclismu fantasy. Escueye los tos ciclistes y compite colos tos amigos en Tropela.eus.',
    menu: {
      presentation: 'Presentación',
      standings: 'Clasificaciones',
      standings2: 'Clasificaciones (hasta esta carrera)',
      points: 'Puntos de los ciclistes',
      dorsals: 'Dorsales',
      news: 'Noticies',
      createPorra: 'Facer equipu',
      myPorra: 'Mi equipu',
    },
    canceled: 'Cancelada',
    stage: 'Etapa | Etapes',
    stage_today: 'Etapa de güei | Etapes de güei',
    team: 'Equipu | Equipos',
    dorsal: {
      filter: 'Filtrar por nome, equipu o país',
      group: 'Grupu | Grupos',
      status: 'Estáu | Estáos',
      statuses: {
        unconfirmed: 'Ensin confirmar',
        participating: 'Confirmáu',
        notParticipating: 'Nun participa',
        retired: 'Retiráu',
      },
      sort: {
        alpha: 'Ordenar por nome',
        percent: 'Ordenar por porcentaxe',
        position: 'Ordenar por puntos',
      },
    },
    porra: {
      registrationOpens: 'Abrimos en',
      registrationOpenFor: "Fai'l to equipu en",
      showAllStages: 'Amosar toles etapes',
    },
    porrasCount: 'Nun hai equipos | Un equipu | {n} equipos',
    pointsRules: 'Puntuaciones',
  },
  place: {
    menu: {
      standings: 'Clasificaciones locales',
    },
  },
  game: {
    menu: {
      standings: 'Clasificaciones patrocinaes',
    },
    banner: 'Esta ye una competición patrocina, con premios pa los usuarios de Tropela.',
    legal: 'Bases llexales',
    prizes: 'Premios',
  },
  tropeltxo: {
    limitReached: "Llegasti al llímite de tropeltxos. Sal d'un tropeltxo o elimina unu.",
    create: 'Crear un nuevu tropeltxo',
    search: 'Guetar un tropeltxo',
    membership: 'Pertenencia',
    membershipLevel: {
      admin: 'Admin',
      adminDescription: "Control total sobre'l tropeltxo. Puede xestionar miembros y configuraciones.",
      moderator: 'Moderador',
      moderatorDescription: 'Puede xestionar miembros.',
      member: 'Miembru',
      memberDescription: 'Puede ver clasificaciones.',
      pending: 'Pendiente',
      pendingDescription: 'Solicitó accesu al tropeltxo pero entá nun foi aceptáu.',
      invited: 'Convidáu',
      rejected: 'Refugáu',
    },
    members: 'Miembros',
    public: 'Públicu',
    private: 'Priváu',
    publicDescription: 'Cualesquier puede atopar y xunise a esti tropeltxo.',
    privateDescription: 'Namás los usuarios convidaos pueden xunise a esti tropeltxo.',
    createTropeltxo: {
      action: 'Crear tropeltxo',
      description:
        'Pues crear un tropeltxo colos tos amigos, familia, compañeros de trabayu o vecinos pa ver subclasificaciones.',
      success: 'Tropeltxo creáu correutamente',
    },
    deleteTropeltxo: {
      action: 'Eliminar tropeltxo',
      description:
        "Esta aición nun se puede desacer. Tolos miembros perderán l'accesu a les clasificaciones del tropeltxo y tolos datos serán eliminaos.",
      confirm: '¿De xuru que quies eliminar esti tropeltxo?',
      success: 'Tropeltxo eliminau correutamente',
    },
    leaveTropeltxo: {
      action: 'Dexar el tropeltxo',
      description:
        "Perderás l'accesu a les clasificaciones del tropeltxo. Pues solicitar accesu de nuevu en cualesquier momentu.",
      adminDescription:
        "Como yes l'únicu alministrador, tienes que da-y el rol d'alministrador a otru miembru enantes de dexar el tropeltxo.",
      confirm: '¿De xuru que quies dexar esti tropeltxo?',
      success: "Dexasti'l tropeltxo",
    },
    inviteMember: {
      action: 'Convidar usuariu',
    },
    removeMember: {
      action: 'Eliminar miembru',
      description: "¿Quies eliminar al usuariu del tropeltxo? Perderá l'accesu a les clasificaciones del tropeltxo.",
      confirm: "¿De xuru que quies eliminar esti miembru d'esti tropeltxo?",
      success: 'Miembru eliminau del tropeltxo',
    },
    searchTropeltxo: {
      placeholder: 'Guetar...',
      noResults: "Nun s'atoparon tropeltxos con esta gueta.",
      error: 'Error na gueta. Inténtalo de nuevu más tardi.',
      joinedPublic: 'Xunícheste al tropeltxo públicu.',
      requestSent: 'Unvióse la solicitú pa xunise al tropeltxo priváu.',
    },
    form: {
      name: 'Nome del tropeltxo',
      nameRequired: 'El nome del tropeltxo ye obligatoriu',
      nameMinLength: 'Mínimu 4 carauteres',
      isPublic: 'Tropeltxo públicu',
      createError: 'Asocedió un error al crear el tropeltxo.',
    },
    changeLevel: {
      confirm: "¿De xuru que quies camudar el nivel d'esti miembru?",
      adminConfirm: "Si-y das el rol d'alministrador a esti miembru, el to rol baxará a moderador.",
      success: 'El nivel del miembru foi camudáu.',
    },
    joinByCode: {
      title: 'Xunise a un tropeltxo',
      action: 'Xunise con códigu',
      placeholder: "Introduz el códigu d'invitación",
      confirm: '¿Quies xunite al tropeltxo "{name}"?',
      membersCount: '{count} miembros',
      success: '¡Xunícheste al tropeltxo!',
      invalidCode: "El códigu d'invitación nun ye válidu.",
      alreadyMember: "Yá yes miembru d'esti tropeltxo.",
      loginRequired: "Tienes d'aniciar sesión pa xunite a un tropeltxo.",
    },
    share: {
      title: 'Compartir tropeltxo',
      shareText: '¡Xúnite al mio tropeltxo!',
      inviteUrl: "Enllaz d'invitación",
      copyCode: 'Copiar códigu',
      codeCopied: '¡Códigu copiáu!',
      copyLink: 'Copiar enllaz',
      linkCopied: '¡Enllaz copiáu!',
      shareLink: 'Compartir enllaz',
      qrCode: 'Códigu QR',
      downloadQr: 'Descargar códigu QR',
    },
  },
  user: {
    menu: {
      admin: "Zona d'aministración",
      avatar: 'Mi ciclista',
      dashboard: 'Mis estadístiques',
      privacy: 'Privacidá',
      profile: 'Perfil',
      settings: 'Configuración',
      settingsAndPrivacy: 'Configuración y privacidá',
      notifications: 'Notificaciones',
      subscriptions: 'Suscripciones',
      login: 'Aniciar sesión',
      logout: 'Zarrar sesión',
      passwordChange: 'Contraseña',
      emails: 'Emails',
      socialConnections: 'Conexones sociales',
      signup: 'Rexistrase',
      standings: 'Mis clasificaciones',
      tropeltxos: 'Mis tropeltxos',
    },
    change_language:
      'Pues camudar el idioma de la aplicación equí. El cambéu aplicarase de siguío y guardarase nel to perfil, pa que se recuerde la próxima vez que entres (en cualquier dispositivu).',
    confirm: {
      logout: '¿Tas seguru de que quies zarrar sesión?',
    },
    tropeltxo: 'Tropeltxo | Tropeltxos',
  },
  ui: {
    form: {
      actions: {
        ok: 'Aceutar',
        cancel: 'Encaboxar',
        change: 'Cambiar',
        create: 'Crear',
        delete: 'Esborrar',
        update: 'Actualizar',
        refresh: 'Actualizar',
        reset: 'Resetear',
        save: 'Guardar',
        search: 'Buscar',
        share: 'Compartir',
        submit: 'Unviar',
        filter: 'Filtrar',
        dismiss: 'Descartar',
        typeMessage: 'Escribe el to mensaxe',
        login: 'Aniciar sesión',
        signup: 'Rexístrate',
        downloadIcs: 'Descargar calendariu',
      },
      fields: {
        username_email: "Nome d'usuariu o corréu",
        username: "Nome d'usuariu",
        password: 'Contraseña',
        password2: 'Repit la contraseña',
        email: 'Corréu',
        firstName: 'Nome',
        lastName: 'Apellíos',
        city: 'Ciudá',
        flag: 'La to bandera',
      },
      hints: {
        city: 'Emplegaremos esto pa les clasificaciones locales.',
        flag: 'Amuésase nes clasificaciones.',
      },
      required: 'Obligatoriu.',
      rules: {
        required: 'Esti campu ye obligatoriu.',
      },
      social: {
        facebook: 'Continuar con Facebook',
        google: 'Continuar con Google',
        twitter: 'Continuar con Twitter / X',
      },
    },
    select: {
      all: 'To | Todos',
      aggregate: 'Xeneral',
      locale: 'Idioma',
      race: 'Competición',
      stage: 'Etapa',
      finalStage: 'Final',
      annual: 'Anual',
    },
    nav: {
      pageFirst: 'Primera páxina',
      pagePrevious: 'Páxina anterior',
      pageNext: 'Páxina siguiente',
      pageLast: 'Cabera páxina',
    },
    or: 'o',
  },
  message: {
    invalidCredentials: "El nome d'usuariu y/o la contraseña que has especificáu nun son correutos.",
    loggedIn: 'Entresti como {username}',
    loggedOut: 'Has zarráu sesión',
    passwordResetRequested: 'Unvióse un corréu pa restablecer la contraseña',
    porraSaveDelay: 'La to porra guardarase en {seconds} segundos',
    porraCreated: 'La to porra creóse correutamente',
    porraUpdated: 'La to porra actualizóse',
    porraRandomSelected: 'Propúnxose una porra aleatoria',
    searchDelay: 'La búsqueda realizaráse en {seconds} segundos',
    userProfileUpdated: 'El to perfil actualizóse',
  },
  notification: {
    porraPending: '¡Nun escaezas facer el to equipu pa {race_name}!',
  },
  premium: {
    banner: {
      join: 'Únete a los Gregarios de lluxu y disfruta de ventaxes exclusives.',
      noAds: '¡Y ensin publicidá!',
    },
    action: {
      upgrade: 'Faite Gregariu',
    },
  },
  privacy: {
    shareOnSocialMedia: 'Compartir la to actividá en redes sociales',
    shareOnSocialMediaDescription:
      'Cuando faigas un equipu, puedes compartir en redes sociales que tas participando (si accedes vía Twitter o Facebook).',
    makeProfilePublic: 'Facer públicu el to perfil',
    makeProfilePublicDescription: 'Puedes facer públicu el to perfil y compartir los tos resultaos y estadístiques.',
    receiveEmails: 'Recibir correos de Tropela',
    receiveEmailsDescription: 'Recordatorios, novedaes, etc.',
    receiveNotifications: 'Recibir notificaciones',
    receiveNotificationsDescription:
      'Recibir notificaciones `push` en dispositivos móviles, cuando abrimos una nueva competición.',
  },
  faq: {
    title: 'Preguntes frecuentes',
    helpTropela: {
      q: '¿Cómo puedo ayudar a Tropela?',
      description: 'Faite Gregariu de Lluxu pa apoyar los nuestros proyectos.',
    },
    translateTropela: {
      q: '¿Puedo ayudar coles traducciones?',
      description:
        'Apoyamos les llingües minoritaries y aquelles falaes en países con una fuerte cultura ciclista. Puedes amestar nuevos idiomes o meyorar les traducciones a través del nuesu repositoriu públicu.',
    },
    dashboardPercentage: {
      q: '¿Qué signifiquen los porcentaxes nel to dashboard?',
      description:
        "Nel to Tropela, los porcentaxes indiquen el to rendimientu en cada competición. El porcentaxe ye el porcentaxe d'usuarios que terminaron detrás de ti.",
    },
    profileAvatar: {
      q: '¿Cómo puedo cambiar el mi ciclista?',
      description: 'Puedes cambiar el to ciclista nel to perfil. ¡Tienes cientos de combinaciones posibles!',
    },
    profilePremium: {
      q: '¿Por qué dalgunos usuarios tienen esti iconu?',
      description: 'Los Gregarios de lluxu son usuarios que ayuden a Tropela, y disfruten de ventaxes exclusives.',
    },
    raceLoginToCreatePorra: {
      q: '¿Cómo puedo participar nesta competición?',
      description: 'Pa participar nesta competición, tienes que aniciar sesión y facer la to porra.',
    },
    raceDorsalsRetired: {
      q: '¿Dónde puedo ver los dorsales retiraos?',
      description: 'Puedes filtrar los dorsales por estáu pa ver los retiraos.',
    },
    racePointsAbc: {
      q: '¿Qué signifiquen les lletres que apaecen xunto a los dorsales?',
      description:
        'Les lletres amuesen cuántos usuarios seleccionaron a los ciclistes. Hai cuatro lletres: A (>%30), B (%30-%3), C (%3-%1) y D (<%1).',
    },
    racePointsStars: {
      q: '¿Qué quier dicir les estrelles xunto a los ciclistes?',
      description:
        'Los ciclistes con estrelles tán na porra ideal; ye dicir, son la meyor opción pa ganar esta competición.',
    },
    raceStandings: {
      q: '¿Cómo se calculen les clasificaciones?',
      description:
        'Al final de cada etapa, recibirás los puntos de los ciclistes que seleccionasti na to porra. Estos puntos son los que determinen les clasificaciones.',
    },
    racePlaceStandings: {
      q: '¿Qué puedo facer si nun veo les clasificaciones locales?',
      description: 'Pa ver les clasificaciones locales, tienes que especificar la to ciudá nel to perfil.',
    },
    racePorraRiskFactor: {
      q: "¿Cuál ye'l significáu de la barra?",
      description: "La barra indica'l nivel de riesgu de 0 a 10: el riesgu que l'usuariu tomó al facer la so porra.",
    },
    racePorraMyRiskFactor: {
      q: "¿Cuál ye'l nivel de riesgu de la mio porra?",
      description: "El riesgu que l'usuariu tomó al facer la so porra.",
    },
    racePorraAds: {
      q: '¿Por qué veo anuncios antes de guardar la mi porra?',
      description: 'Sólo los Gregarios de lluxu pueden guardar la so porra ensin ver anuncios.',
    },
    racePorraCreateRandom: {
      q: '¿Podeis facer una porra aleatoria pa mi?',
      description: 'Por supuesto. ¡Elige les lletres que debemos tener en cuenta y te propondremos una porra!',
    },
    seasonIcs: {
      q: '¿Cómo puedo recibir el calendariu de competiciones?',
      description:
        'Con esti enllaz pues descargar un ficheru ICS pa amestar les competiciones de la temporada al to calendariu dixital.',
    },
    tropeltxos: {
      q: '¿Cómo puedo xestionar los tropeltxos?',
      description:
        'Con los tropeltxos podrás ver subclasificaciones con los tos amigos, familiares, compañeros de trabayu o vecinos.',
    },
    tropeltxoPrize: {
      q: '¿Hai premios pal ganador del tropeltxo?',
      description:
        'Tropela nun ofrece premios nos tropeltxos, pero nun escaezas que tenemos una tienda si quies repartir premios!',
    },
  },
  xedap: {},
};
