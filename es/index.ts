//! tropela-app translation file
//! locale : Spanish [es]
//! author : eillarra : https://github.com/eillarra

export default {
  updated: 'Hemos actualizado la aplicación. Refresca para usar la última versión.',
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
    passwordResetConfirm: {
      intro: 'Escribe aquí tu nueva contraseña; podrás usarla para acceder a Tropela.',
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
    allRaces: 'Todas las competiciones',
    calendar: 'Calendario',
    nextRace: 'Próxima competición | Próximas competiciones',
    menu: {
      standings: 'Clasificaciones de la temporada',
    },
    collection: 'Colección | Colecciones',
    race: 'Competición | Competiciones',
    racesCount: 'No hay competiciones | Una competición | {n} competiciones',
    performance: 'Rendimiento',
  },
  race: {
    metaDescription:
      '{name} {season} - Juego de ciclismo fantasy. Elige a tus ciclistas y compite con tus amigos en Tropela.eus.',
    menu: {
      presentation: 'Presentación',
      standings: 'Clasificaciones',
      standings2: 'Clasificaciones (hasta esta carrera)',
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
  payment: {
    title: 'Detalles del pago',
    secure: 'Pago seguro procesado por Stripe',
    pay: 'Pagar {amount}',
    card: 'Información de la tarjeta',
    error: 'El pago ha fallado. Por favor, inténtalo de nuevo.',
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
  tropeltxo: {
    limitReached: 'Has alcanzado el límite de tropeltxos. Sal de un tropeltxo o elimina uno.',
    create: 'Crear un nuevo tropeltxo',
    search: 'Buscar un tropeltxo',
    membership: 'Membresía',
    membershipLevel: {
      admin: 'Admin',
      adminDescription: 'Control total sobre el tropeltxo. Puede gestionar miembros y configuraciones.',
      moderator: 'Moderador',
      moderatorDescription: 'Puede aprobar y gestionar miembros.',
      member: 'Miembro',
      memberDescription: 'Puede ver clasificaciones.',
      pending: 'Pendienten',
      pendingDescription: 'Ha solicitado acceso al tropeltxo pero aún no ha sido aceptado.',
      invited: 'Invitado',
      invitedDescription: 'Ha sido invitado al tropeltxo pero aún no ha aceptado.',
      rejected: 'Rechazado',
    },
    members: 'Miembros',
    public: 'Público',
    private: 'Privado',
    publicDescription: 'Cualquiera puede encontrar y unirse a este tropeltxo.',
    privateDescription2: 'Sólo los usuarios invitados pueden unirse a este tropeltxo.',
    createTropeltxo: {
      action: 'Crear tropeltxo',
      description:
        'Puedes crear un tropeltxo con tus amigos, familiares, compañeros de trabajo o vecinos para ver subclasificaciones.',
      success: 'Tropeltxo creado correctamente',
    },
    deleteTropeltxo: {
      action: 'Eliminar tropeltxo',
      description:
        'Esta acción no se puede deshacer. Todos los miembros perderán el acceso a las clasificaciones del tropeltxo y se eliminarán todos los datos del tropeltxo.',
      confirm: '¿Estás seguro de que quieres eliminar este tropeltxo?',
      success: 'Tropeltxo eliminado correctamente',
    },
    leaveTropeltxo: {
      action: 'Dejar tropeltxo',
      description:
        'Perderás el acceso a las clasificaciones del tropeltxo. Puedes solicitar acceso nuevamente en cualquier momento.',
      adminDescription:
        'Como eres el único administrador, debes dar el rol de administrador a otro miembro antes de dejar el tropeltxo.',
      confirm: '¿Estás seguro de que quieres dejar este tropeltxo?',
      success: 'Has dejado el tropeltxo',
    },
    inviteMember: {
      action: 'Invitar usuario',
    },
    removeMember: {
      action: 'Eliminar miembro',
      description: '¿Quieres eliminar al usuario del tropeltxo? Perderá el acceso a las clasificaciones del tropeltxo.',
      confirm: '¿Estás seguro de que quieres eliminar a este miembro de este tropeltxo?',
      success: 'Miembro eliminado del tropeltxo',
    },
    searchTropeltxo: {
      placeholder: 'Buscar...',
      noResults: 'No se han encontrado tropeltxos con esta búsqueda.',
      error: 'Error en la búsqueda. Inténtalo de nuevo más tarde.',
      joinedPublic: 'Te has unido al tropeltxo público.',
      requestSent: 'Se ha enviado la solicitud para unirse al tropeltxo privado.',
    },
    form: {
      name: 'Nombre del tropeltxo',
      nameRequired: 'El nombre del tropeltxo es obligatorio',
      nameMinLength: 'Mínimo 4 caracteres',
      isPublic: 'Tropeltxo público',
      createError: 'Ha ocurrido un error al crear el tropeltxo.',
    },
    changeLevel: {
      confirm: '¿Estás seguro de que quieres cambiar el nivel de este miembro?',
      adminConfirm: 'Si le das el rol de administrador a este miembro, tu rol bajará a moderador.',
      success: 'El nivel del miembro ha sido cambiado.',
    },
    joinByCode: {
      title: 'Unirse a un tropeltxo',
      action: 'Unirse con código',
      placeholder: 'Introduce el código de invitación',
      confirm: '¿Quieres unirte al tropeltxo "{name}"?',
      membersCount: '{count} miembros',
      success: '¡Te has unido al tropeltxo!',
      invalidCode: 'El código de invitación no es válido.',
      alreadyMember: 'Ya eres miembro de este tropeltxo.',
      loginRequired: 'Debes iniciar sesión para unirte a un tropeltxo.',
    },
    share: {
      title: 'Compartir tropeltxo',
      shareText: '¡Únete a mi tropeltxo!',
      inviteUrl: 'Enlace de invitación',
      copyCode: 'Copiar código',
      codeCopied: '¡Código copiado!',
      copyLink: 'Copiar enlace',
      linkCopied: '¡Enlace copiado!',
      shareLink: 'Compartir enlace',
      qrCode: 'Código QR',
      downloadQr: 'Descargar código QR',
    },
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
        ok: 'Aceptar',
        cancel: 'Cancelar',
        change: 'Cambiar',
        create: 'Crear',
        delete: 'Borrar',
        update: 'Actualizar',
        refresh: 'Actualizar',
        reset: 'Resetear',
        save: 'Guardar',
        search: 'Buscar',
        share: 'Compartir',
        submit: 'Enviar',
        filter: 'Filtrar',
        dismiss: 'Descartar',
        typeMessage: 'Escribe tu mensaje',
        login: 'Iniciar sesión',
        signup: 'Regístrate',
        downloadIcs: 'Descargar calendario',
      },
      fields: {
        username_email: 'Nombre de usuario o email',
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
      race: 'Competición',
      stage: 'Etapa',
      finalStage: 'Final',
      annual: 'Anual',
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
    invalidCredentials: 'El nombre de usuario y/o la contraseña que has especificado no son correctos.',
    loggedIn: 'Has iniciado sesión como {username}',
    loggedOut: 'Has cerrado sesión',
    passwordResetRequested: 'Se ha enviado un email para restablecer la contraseña',
    porraSaveDelay: 'Tu porra se guardará en {seconds} segundos',
    porraCreated: 'Tu porra se ha creado correctamente',
    porraUpdated: 'Tu porra se ha actualizado',
    porraRandomSelected: 'Se ha propuesto una porra aleatoria',
    searchDelay: 'La búsqueda se realizará en {seconds} segundos',
    userProfileUpdated: 'Tu perfil se ha actualizado',
  },
  notice: {
    porraViewLogIn: 'Inicia sesión para ver este equipo.',
  },
  notification: {
    dorsalsNotParticipating:
      'Algunos ciclistas de tu equipo (#{porra_id}) no participarán en {race_name}. ¡Deberías revisar tu selección de ciclistas!',
    emptyTropeltxo:
      'Estás solo en uno de tus tropeltxos para {race_name}... ¡díselo a tus amigos! Tropela es más divertido con amigos y familia.|Estás solo en {count} de tus tropeltxos para {race_name}... ¡díselo a tus amigos! Tropela es más divertido con amigos y familia.',
    porraPending: '¡No olvides hacer tu equipo para {race_name}!',
    tropeltxoMembershipPending:
      'Hay una solicitud pendiente en el tropeltxo "{tropeltxo_name}".|Hay {count} solicitudes pendientes en el tropeltxo "{tropeltxo_name}".',
    tropeltxoMessage: 'Hay nuevos mensajes en el chat del tropeltxo "{tropeltxo_name}".',
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
    translateTropela: {
      q: '¿Puedo ayudar con las traducciones?',
      description:
        'Apoyamos las lenguas minoritarias y aquellas habladas en países con una fuerte cultura ciclista. Puedes añadir nuevos idiomas o mejorar las traducciones a través de nuestro repositorio público.',
    },
    dashboardPercentage: {
      q: '¿Qué significan los porcentajes en tu dashboard?',
      description:
        'En tu Tropela, los porcentajes indican tu rendimiento en cada competición. El porcentaje es el porcentaje de usuarios que han terminado por detrás de ti.',
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
    seasonIcs: {
      q: '¿Cómo puedo recibir el calendario de competiciones?',
      description:
        'Con el siguiente enlace puedes descargar un fichero ICS con el que puedes añadir las competiciones de la temporada a tu calendario digital.',
    },
    tropeltxos: {
      q: '¿Dónde puedo gestionar mis tropeltxos?',
      description:
        'Con los tropeltxos podrás ver subclasificaciones con tus amigos, familiares, compañeros de trabajo o vecinos.',
    },
    tropeltxoPrize: {
      q: '¿Hay premios para el ganador del tropeltxo?',
      description:
        'Tropela no ofrece premios en los tropeltxos, pero no olvides que tenemos una tienda si quieres repartir premios!',
    },
  },
  xedap: {},
  subscription: {
    active: 'Suscripción activa',
    available: 'Planes disponibles',
    expiresAt: 'Caduca el {date}',
    subscribe: 'Suscribirse',
    success: '¡Suscripción realizada con éxito! Gracias por tu apoyo.',
    benefits: {
      title: '¿Por qué hacerse Gregario de Lujo?',
      adFree: 'Experiencia sin anuncios: disfruta de Tropela sin distracciones.',
      badges: 'Insignia exclusivas: luce una insignia especial junto a tu nombre en las clasificaciones.',
      stats: 'Estadísticas avanzadas: accede a datos históricos detallados y análisis.',
      support: 'Apoya el proyecto: ayúdanos a mantener los servidores y desarrollar nuevas funciones.',
    },
  },
};
