//! tropela-app translation file
//! locale : Spanish [es]
//! author : eillarra : https://github.com/eillarra

export default {
  updated: 'Contenido actualizado. Por favor, refresca la página.',
  welcome:
    'En Tropela.eus puedes competir con tus familiares y amigos en las mejores carreras ciclistas de la temporada.',
  menu: {
    home: 'Inicio',
    races: 'Competiciones',
    seasons: 'Temporadas',
    rules: 'Reglas',
    premium: 'Gregario de lujo | Gregarios de lujo',
    blog: 'Blog',
    store: 'Tienda',
    about: 'Asociación',
    privacy: 'Política de privacidad',
    terms: 'Términos de uso',
    contact: 'Contacto',
    tropeltxos: 'Tropeltxos',
  },
  auth: {
    login: {
      title: 'Bienvenido.',
      link: '¿Ya tienes una cuenta? Inicia sesión',
    },
    signup: {
      title: 'Únete al pelotón.',
      link: '¿No tienes cuenta? Regístrate',
    },
    passwordReset: {
      title: 'Restablecer contraseña.',
      intro: '¿Has olvidado tu contraseña? Escribe tu dirección de email y te enviaremos un enlace para restablecerla.',
      link: '¿Has olvidado tu contraseña?',
    },
  },
  countdown: {
    months: 'mes | meses',
    days: 'día | días',
    hours: 'hora | horas',
    minutes: 'minuto | minutos',
    seconds: 'segundo | segundos',
  },
  season: {
    calendar: 'Calendario',
    nextRace: 'Próxima competición | Próximas competiciones',
    menu: {
      standings: 'Clasificaciones de la temporada',
    },
    collection: 'Colección | Colecciones',
    race: 'Competición | Competiciones',
    racesCount: 'No hay competiciones | Una competición | {n} competiciones',
  },
  race: {
    menu: {
      presentation: 'Presentación',
      standings: 'Clasificaciones',
      points: 'Puntos de los ciclistas',
      dorsals: 'Dorsales',
      news: 'Noticias',
      createPorra: 'Hacer equipo',
      myPorra: 'Mi equipo',
    },
    canceled: 'Cancelada',
    stage: 'Etapa | Etapas',
    stage_today: 'Etapa de hoy | Etapas de hoy',
    team: 'Equipo | Equipos',
    dorsal: {
      filter: 'Filtrar por nombre, equipo o país',
      group: 'Grupo | Grupos',
      status: 'Estado | Estados',
      statuses: {
        unconfirmed: 'Sin confirmar',
        participating: 'Confirmado',
        notParticipating: 'No participa',
        retired: 'Retirado',
      },
      sort: {
        alpha: 'Ordenar por nombre',
        percent: 'Ordenar por porcentaje',
        position: 'Ordenar por puntos',
      },
    },
    porra: {
      registrationOpens: 'Abrimos en',
      registrationOpenFor: 'Haz tu equipo en',
      showAllStages: 'Mostrar todas las etapas',
    },
    porrasCount: 'No hay equipos | Un equipo | {n} equipos',
    pointsRules: 'Puntuaciones',
  },
  place: {
    menu: {
      standings: 'Clasificaciones locales',
    },
  },
  game: {
    menu: {
      standings: 'Clasificaciones patrocinadas',
    },
    banner: 'Ésta es una competición patrocinada, con premios para los usuarios de Tropela.',
    legal: 'Bases legales',
    prizes: 'Premios',
  },
  user: {
    menu: {
      admin: 'Zona de administración',
      avatar: 'Mi ciclista',
      dashboard: 'Mis estadísticas',
      privacy: 'Privacidad',
      profile: 'Perfil',
      settings: 'Configuración',
      settingsAndPrivacy: 'Configuración y privacidad',
      notifications: 'Notificaciones',
      subscriptions: 'Suscripciones',
      login: 'Iniciar sesión',
      logout: 'Cerrar sesión',
      passwordChange: 'Contraseña',
      emails: 'Emails',
      socialConnections: 'Conexiones sociales',
      signup: 'Registrarse',
      standings: 'Mis clasificaciones',
      tropeltxos: 'Mis tropeltxos',
    },
    change_language:
      'Puedes cambiar el idioma de la aplicación aquí. El cambio se aplicará inmediatamente y se guardará en tu perfil, para que se recuerde la próxima vez que inicies sesión (en cualquier dispositivo).',
    confirm: {
      logout: '¿Estás seguro de que quieres cerrar sesión?',
    },
    tropeltxo: 'Tropeltxo | Tropeltxos',
  },
  ui: {
    form: {
      actions: {
        change: 'Cambiar',
        create: 'Crear',
        delete: 'Borrar',
        update: 'Actualizar',
        refresh: 'Actualizar',
        reset: 'Resetear',
        save: 'Guardar',
        submit: 'Enviar',
        filter: 'Filtrar',
        dismiss: 'Descartar',
        typeMessage: 'Escribe tu mensaje',
        login: 'Iniciar sesión',
        signup: 'Regístrate',
      },
      fields: {
        username: 'Nombre de usuario',
        password: 'Contraseña',
        password2: 'Repite la contraseña',
        email: 'Email',
        firstName: 'Nombre',
        lastName: 'Apellidos',
        city: 'Ciudad',
        flag: 'Tu bandera',
      },
      hints: {
        city: 'Emplearemos esto para las clasificaciones locales.',
        flag: 'Se muestra en las clasificaciones.',
      },
      required: 'Obligatorio.',
      rules: {
        required: 'Este campo es obligatorio.',
      },
      social: {
        facebook: 'Continuar con Facebook',
        google: 'Continuar con Google',
        twitter: 'Continuar con Twitter / X',
      },
    },
    select: {
      all: 'Todo | Todos',
      aggregate: 'General',
      locale: 'Idioma',
      stage: 'Etapa',
      finalStage: 'Final',
    },
    nav: {
      pageFirst: 'Primera página',
      pagePrevious: 'Página anterior',
      pageNext: 'Página siguiente',
      pageLast: 'Última página',
    },
    or: 'o',
  },
  message: {
    loggedIn: 'Has iniciado sesión como {username}',
    loggedOut: 'Has cerrado sesión',
    passwordResetRequested: 'Se ha enviado un email para restablecer la contraseña',
    porraSaveDelay: 'Tu porra se guardará en {seconds} segundos',
    porraCreated: 'Tu porra se ha creado correctamente',
    porraUpdated: 'Tu porra se ha actualizado',
    porraRandomSelected: 'Se ha propuesto una porra aleatoria',
    userProfileUpdated: 'Tu perfil se ha actualizado',
  },
  premium: {
    banner: {
      join: 'Únete a los Gregarios de lujo y disfruta de ventajas exclusivas.',
      noAds: 'Y sin publicidad!',
    },
    action: {
      upgrade: 'Hazte Gregario',
    },
  },
  privacy: {
    shareOnSocialMedia: 'Compartir tu actividad en redes sociales',
    shareOnSocialMediaDescription:
      'Cuando creas un equipo, puedes compartir en redes sociales que estás participando (si accedes via Twitter o Facebook).',
    makeProfilePublic: 'Hacer público tu perfil',
    makeProfilePublicDescription: 'Puedes hacer público tu perfil y compartir tus resultados y estadísticas.',
    receiveEmails: 'Recibir emails de Tropela',
    receiveEmailsDescription: 'Recordatorios, novedades, etc.',
    receiveNotifications: 'Recibir notificaciones',
    receiveNotificationsDescription:
      'Recibir notificaciones `push` en dispositivos móviles, cuando abrimos una nueva competición.',
  },
  faq: {
    title: 'Preguntas frecuentes',
    helpTropela: {
      q: '¿Cómo puedo ayudar a Tropela?',
      description: 'Hazte Gregario de Lujo para apoyar nuestros proyectos.',
    },
    profileAvatar: {
      q: '¿Cómo puedo cambiar mi ciclista?',
      description: 'Puedes cambiar tu ciclista en tu perfil. ¡Tienes cientos de combinaciones posibles!',
    },
    profilePremium: {
      q: '¿Por qué algunos usuarios tienen este icono?',
      description: 'Los Gregarios de lujo son usuarios que ayudan a Tropela, y disfrutan de ventajas exclusivas.',
    },
    raceLoginToCreatePorra: {
      q: '¿Cómo puedo participar en esta competición?',
      description: 'Para participar en esta competición, debes iniciar sesión y hacer tu porra.',
    },
    raceDorsalsRetired: {
      q: '¿Dónde puedo ver los dorsales retirados?',
      description: 'Puedes filtrar los dorsales por estado para ver los retirados.',
    },
    racePointsAbc: {
      q: '¿Qué significan las letras que aparecen junto a los dorsales?',
      description:
        'Las letras muestran cuántos usuarios han seleccionado a los ciclistas. Hay cuatro letras: A (>%30), B (%30-%3), C (%3-%1) y D (<%1).',
    },
    racePointsStars: {
      q: '¿Qué quieren decir las estrellas junto a los ciclistas?',
      description:
        'Los ciclistas con estrellas están en la porra ideal; es decir, son la mejor opción para ganar esta competición.',
    },
    raceStandings: {
      q: '¿Cómo se calculan las clasificaciones?',
      description:
        'Al final de cada etapa, recibirás los puntos de los ciclistas que has seleccionado en tu porra. Estos puntos son los que determinan las clasificaciones.',
    },
    racePlaceStandings: {
      q: '¿Qué puedo hacer si no veo las clasificaciones locales?',
      description: 'Para ver las clasificaciones locales, debes especificar tu ciudad en tu perfil.',
    },
    racePorraRiskFactor: {
      q: '¿Cuál es el significado de la barra?',
      description:
        'La barra indica el nivel de riesgo de 0 a 10: el riesgo que el usuario ha tomado al hacer su porra.',
    },
    racePorraMyRiskFactor: {
      q: '¿Cuál es el nivel de riesgo de mi porra?',
      description: 'El riesgo que has tomado al hacer tu porra, de 0 a 10:',
    },
    racePorraAds: {
      q: '¿Por qué veo anuncios antes de guardar mi porra?',
      description: 'Sólo los Gregarios de lujo pueden guardar su porra sin ver anuncios.',
    },
    racePorraCreateRandom: {
      q: '¿Podéis hacer una porra aleatoria para mí?',
      description: 'Por supuesto. ¡Elige las letras que debemos tener en cuenta y te propondremos una porra!',
    },
    tropeltxos: {
      q: '¿Dónde puedo gestionar mis tropeltxos?',
      description:
        'Con los tropeltxos podrás ver subclasificaciones con tus amigos, familiares, compañeros de trabajo o vecinos.',
    },
  },
};
