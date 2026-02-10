//! tropela-app translation file
//! locale : Italian [it]
//! author : github : https://github.com/github

export default {
  updated: "Abbiamo aggiornato l'app. Ricarica per utilizzare l'ultima versione.",
  welcome:
    'Tropela.eus è un gioco di ciclismo fantasy dove puoi giocare con i tuoi amici e familiari, gratuitamente, nelle gare più emozionanti della stagione.',
  menu: {
    home: 'Home',
    races: 'Gare',
    seasons: 'Temporade',
    rules: 'Regole',
    premium: 'Primo domestico | Primi domestici',
    blog: 'Blog',
    store: 'Negozio',
    about: 'Chi siamo',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini di utilizzo',
    contact: 'Contatti',
    tropeltxos: 'Tropeltxos',
  },
  auth: {
    login: {
      title: 'Bentornato.',
      link: 'Hai già un account? Accedi',
    },
    signup: {
      title: 'Unisciti al gruppo.',
      link: 'Non hai ancora un account? Registrati',
    },
    passwordReset: {
      title: 'Reimposta la password.',
      intro: 'Hai dimenticato la password? Inserisci il tuo indirizzo email e ti invieremo un link per reimpostarla.',
      link: 'Hai dimenticato la password?',
    },
    passwordResetConfirm: {
      intro: 'Inserisci la tua nuova password qui; potrai usarla per accedere a Tropela.',
    },
  },
  countdown: {
    months: 'mese | mesi',
    days: 'giorno | giorni',
    hours: 'ora | ore',
    minutes: 'minuto | minuti',
    seconds: 'secondo | secondi',
  },
  season: {
    calendar: 'Calendario',
    nextRace: 'Prossima gara | Prossime gare',
    menu: {
      standings: 'Classifica stagione',
    },
    collection: 'Collezione | Collezioni',
    race: 'Gara | Gare',
    racesCount: 'Nessuna gara | Una gara | {n} gare',
    performance: 'Prestazioni',
  },
  race: {
    metaDescription:
      '{name} {season} - Gioco di ciclismo fantasy. Scegli i tuoi ciclisti e sfida i tuoi amici su Tropela.eus.',
    menu: {
      presentation: 'Presentazione',
      standings: 'Classifiche',
      points: 'Punti ciclisti',
      dorsals: 'Elenco ciclisti',
      news: 'Notizie',
      createPorra: 'Crea una squadra',
      myPorra: 'La mia squadra',
    },
    canceled: 'Annullato',
    stage: 'Tappa | Tappe',
    stage_today: 'Tappa di oggi | Tappe di oggi',
    team: 'Squadra | Squadre',
    dorsal: {
      filter: 'Filtra per nome, squadra o paese',
      group: 'Gruppo | Gruppi',
      status: 'Stato | Stati',
      statuses: {
        unconfirmed: 'Non confermato',
        participating: 'Partecipante',
        notParticipating: 'Non partecipante',
        retired: 'Ritirato',
      },
      sort: {
        alpha: 'Ordina per nome',
        percent: 'Ordina per percentuale',
        position: 'Ordina per punti',
      },
    },
    porra: {
      registrationOpens: 'Le registrazioni aprono in',
      registrationOpenFor: 'Crea la tua squadra in',
      showAllStages: 'Mostra tutte le tappe',
    },
    porrasCount: 'Nessuna squadra | Una squadra | {n} squadre',
    pointsRules: 'Punteggi',
  },
  place: {
    menu: {
      standings: 'Classifiche locali',
    },
  },
  game: {
    menu: {
      standings: 'Classifiche del gioco',
    },
    banner: 'Questa è una gara sponsorizzata, con bei premi per gli utenti di Tropela.',
    legal: 'Basi legali',
    prizes: 'Premi',
  },
  tropeltxo: {
    limitReached: 'Hai raggiunto il limite di tropeltxo. Esci o elimina un tropeltxo.',
    create: 'Crea un nuovo tropeltxo',
    search: 'Cerca un tropeltxo',
    membership: 'Appartenenza',
    membershipLevel: {
      admin: 'Admin',
      adminDescription: 'Controllo totale sul tropeltxo. Può gestire membri e impostazioni.',
      moderator: 'Moderatore',
      moderatorDescription: 'Può gestire i membri.',
      member: 'Membro',
      memberDescription: 'Può visualizzare le classifiche.',
      pending: 'In attesa',
      pendingDescription: 'Ha richiesto accesso al tropeltxo ma non è ancora stato accettato.',
      invited: 'Invitato',
      rejected: 'Rifiutato',
    },
    members: 'Membri',
    public: 'Pubblico',
    private: 'Privato',
    publicDescription: 'Chiunque può trovare e unirsi a questo tropeltxo.',
    privateDescription: 'Solo gli utenti invitati possono unirsi a questo tropeltxo.',
    createTropeltxo: {
      action: 'Crea tropeltxo',
      description:
        'Puoi creare un tropeltxo con i tuoi amici, familiari, colleghi o vicini per vedere le sottoclassifiche.',
      success: 'Tropeltxo creato con successo',
    },
    deleteTropeltxo: {
      action: 'Elimina tropeltxo',
      description:
        "Questa azione è irreversibile. Tutti i membri perderanno l'accesso alle classifiche del tropeltxo e tutti i dati saranno eliminati.",
      confirm: 'Sei sicuro di voler eliminare questo tropeltxo?',
      success: 'Tropeltxo eliminato con successo',
    },
    leaveTropeltxo: {
      action: 'Abbandona tropeltxo',
      description:
        "Perderai l'accesso alle classifiche del tropeltxo. Puoi richiedere l'accesso nuovamente in qualsiasi momento.",
      adminDescription:
        "Essendo l'unico admin, devi trasferire il ruolo di admin a un altro membro prima di abbandonare il tropeltxo.",
      confirm: 'Sei sicuro di voler abbandonare questo tropeltxo?',
      success: 'Hai abbandonato il tropeltxo',
    },
    inviteMember: {
      action: 'Invita utente',
    },
    removeMember: {
      action: 'Rimuovi membro',
      description: "Rimuovere l'utente dal tropeltxo? Perderà l'accesso alle classifiche del tropeltxo.",
      confirm: 'Sei sicuro di voler rimuovere questo membro da questo tropeltxo?',
      success: 'Membro rimosso dal tropeltxo',
    },
    searchTropeltxo: {
      placeholder: 'Cerca...',
      noResults: 'Nessun tropeltxo trovato per questa ricerca.',
      error: 'Errore durante la ricerca. Riprova più tardi.',
      joinedPublic: 'Ti sei unito al tropeltxo pubblico.',
      requestSent: 'È stata inviata una richiesta per unirsi al tropeltxo privato.',
    },
    form: {
      name: 'Nome del tropeltxo',
      nameRequired: 'Il nome del tropeltxo è obbligatorio',
      nameMinLength: 'Minimo 4 caratteri',
      isPublic: 'Tropeltxo pubblico',
      createError: 'Si è verificato un errore durante la creazione del tropeltxo.',
    },
    changeLevel: {
      confirm: 'Sei sicuro di voler cambiare il livello di questo membro?',
      adminConfirm: 'Se dai il ruolo di admin a questo membro, il tuo ruolo verrà declassato a moderatore.',
      success: 'Il livello del membro è stato cambiato.',
    },
    joinByCode: {
      title: 'Unisciti a un tropeltxo',
      action: 'Unisciti con codice',
      placeholder: 'Inserisci il codice di invito',
      confirm: 'Vuoi unirti al tropeltxo "{name}"?',
      membersCount: '{count} membri',
      success: 'Ti sei unito al tropeltxo!',
      invalidCode: 'Il codice di invito non è valido.',
      alreadyMember: 'Sei già membro di questo tropeltxo.',
      loginRequired: 'Devi effettuare il login per unirti a un tropeltxo.',
    },
    share: {
      title: 'Condividi tropeltxo',
      shareText: 'Unisciti al mio tropeltxo!',
      inviteUrl: 'Link di invito',
      copyCode: 'Copia codice',
      codeCopied: 'Codice copiato!',
      copyLink: 'Copia link',
      linkCopied: 'Link copiato!',
      shareLink: 'Condividi link',
      qrCode: 'Codice QR',
      downloadQr: 'Scarica codice QR',
    },
  },
  user: {
    menu: {
      admin: 'Area amministrativa',
      avatar: 'Ciclista',
      dashboard: 'Dashboard',
      privacy: 'Privacy',
      profile: 'Profilo',
      settings: 'Impostazioni',
      settingsAndPrivacy: 'Impostazioni e privacy',
      notifications: 'Notifiche',
      subscriptions: 'Abbonamenti',
      login: 'Accedi',
      logout: 'Esci',
      passwordChange: 'Cambia password',
      emails: 'Email',
      socialConnections: 'Connessioni social',
      signup: 'Registrati',
      standings: 'Le mie classifiche',
      tropeltxos: 'I miei tropeltxos',
    },
    change_language:
      "Puoi cambiare la lingua dell'applicazione qui. Il cambiamento verrà applicato immediatamente e salvato nel tuo profilo, in modo che possa essere ricordato la prossima volta che accedi (su qualsiasi dispositivo).",
    confirm: {
      logout: 'Sei sicuro di voler uscire?',
    },
    tropeltxo: 'Tropeltxo | Tropeltxos',
  },
  ui: {
    form: {
      actions: {
        ok: 'OK',
        cancel: 'Annulla',
        change: 'Cambia',
        create: 'Crea',
        delete: 'Elimina',
        update: 'Aggiorna',
        refresh: 'Aggiorna',
        reset: 'Resetta',
        save: 'Salva',
        search: 'Cerca',
        share: 'Condividi',
        submit: 'Invia',
        filter: 'Filtra',
        dismiss: 'Annulla',
        typeMessage: 'Scrivi il tuo messaggio',
        login: 'Accedi',
        signup: 'Registrati',
      },
      fields: {
        username_email: 'Nome utente o email',
        username: 'Nome utente',
        password: 'Password',
        password2: 'Password (ripeti)',
        email: 'Email',
        firstName: 'Nome',
        lastName: 'Cognome',
        city: 'Città',
        flag: 'La tua bandiera',
      },
      hints: {
        city: 'La tua città verrà utilizzata per mostrare le classifiche locali.',
        flag: 'Quella mostrata nelle classifiche.',
      },
      required: 'Richiesto.',
      rules: {
        required: 'Il campo è obbligatorio.',
      },
      social: {
        facebook: 'Continua con Facebook',
        google: 'Continua con Google',
        twitter: 'Continua con Twitter / X',
      },
    },
    select: {
      all: 'Tutto | Tutti',
      aggregate: 'Aggregato',
      locale: 'Lingua',
      race: 'Gara',
      stage: 'Tappa',
      finalStage: 'Finale',
      annual: 'Annuale',
    },
    nav: {
      pageFirst: 'Prima pagina',
      pagePrevious: 'Pagina precedente',
      pageNext: 'Pagina successiva',
      pageLast: 'Ultima pagina',
    },
    or: 'o',
  },
  message: {
    invalidCredentials: 'Il nome utente e/o la password specificati non sono corretti.',
    loggedIn: 'Accesso effettuato come {username}',
    loggedOut: "Hai effettuato l'uscita",
    passwordResetRequested: 'È stata inviata una email per il ripristino della password',
    porraSaveDelay: 'La tua squadra verrà salvata in {seconds} secondi',
    porraCreated: 'La tua squadra è stata creata',
    porraUpdated: 'La tua squadra è stata aggiornata',
    porraRandomSelected: 'È stata proposta una squadra casuale',
    searchDelay: 'La ricerca verrà avviata in {seconds} secondi',
    userProfileUpdated: 'Il tuo profilo è stato aggiornato',
  },
  notice: {
    noTropeltxoMessages: 'Non hai messaggi tropeltxo',
    placeStandingsLogIn: 'Accedi per vedere le tue classifiche locali.',
    placeStandingsNoPlace: 'Aggiorna le informazioni sulla tua città per vedere le classifiche locali.',
    porraClosed: 'Non puoi creare una squadra per questa gara.',
    porraCreateLogIn: 'Devi accedere per creare una squadra.',
    xedapAds: 'Vuoi vedere qui i tuoi annunci? Contattaci!',
  },
  notification: {
    dorsalsNotParticipating:
      'Alcuni corridori della tua squadra (#{porra_id}) non parteciperanno a {race_name}. Dovresti controllare la tua selezione di corridori!',
    emptyTropeltxo:
      'Sei tutto solo in uno dei tu tropeltxos per {race_name}... parlane con i tuoi amici! Tropela è più divertente con amici e familiari.|Sei tutto solo in {count} dei tuoi tropeltxos per {race_name}... parlane con i tuoi amici! Tropela è più divertente con amici e familiari.',
    porraPending: 'Non dimenticare di creare la tua squadra per {race_name}!',
    tropeltxoMembershipPending:
      'C\'è una richiesta in sospeso nel tropeltxo "{tropeltxo_name}".|Ci sono {count} richieste in sospeso nel tropeltxo "{tropeltxo_name}".',
    tropeltxoMessage: 'Ci sono nuovi messaggi nella chat del tropeltxo "{tropeltxo_name}".',
  },
  premium: {
    banner: {
      join: 'Diventa un Primo domestico e goditi alcune funzionalità extra!',
      noAds: 'Senza pubblicità!',
    },
    action: {
      upgrade: 'Aggiorna',
    },
  },
  privacy: {
    shareOnSocialMedia: 'Condividi la tua attività sui social media',
    shareOnSocialMediaDescription:
      'Quando crei una squadra, condividila sui social media (se stai usando il login di Twitter o Facebook).',
    makeProfilePublic: 'Rendi il tuo profilo pubblico',
    makeProfilePublicDescription:
      'Puoi rendere il tuo profilo pubblico, in modo che gli altri utenti possano vedere la tua storia e i risultati di Tropela.',
    receiveEmails: 'Ricevi email da Tropela',
    receiveEmailsDescription: 'Promemoria per creare una squadra, notizie, ecc.',
    receiveNotifications: 'Ricevi notifiche push',
    receiveNotificationsDescription: 'Ricevi notifiche push sui dispositivi mobili, quando apriamo un nuovo gioco.',
  },
  faq: {
    title: 'Domande frequenti',
    helpTropela: {
      q: 'Come posso aiutare Tropela?',
      description: 'Diventa un Primo domestico per sostenere i nostri progetti.',
    },
    translateTropela: {
      q: 'Posso aiutare con le traduzioni?',
      description:
        'Supportiamo le lingue minoritarie e quelle parlate nei paesi con una forte cultura ciclistica. Puoi aggiungere nuove lingue o migliorare le traduzioni tramite il nostro repository pubblico.',
    },
    dashboardPercentage: {
      q: 'Cosa significano le percentuali nel tuo dashboard?',
      description:
        'Nel tuo Tropela, le percentuali indicano le tue prestazioni in ogni competizione. La percentuale è la percentuale di utenti che sono finiti dietro di te.',
    },
    profileAvatar: {
      q: 'Come posso cambiare il mio ciclista?',
      description:
        'Puoi cambiare il tuo pilota nelle impostazioni. Centinaia di diverse combinazioni per creare il tuo avatar unico!',
    },
    profilePremium: {
      q: 'Perché alcuni utenti hanno questa icona?',
      description: 'I Primi domestici sono utenti che aiutano Tropela e godono di vantaggi esclusivi.',
    },
    raceLoginToCreatePorra: {
      q: 'Come posso partecipare a questa competizione?',
      description: 'Per partecipare a questa competizione, devi accedere e creare la tua squadra.',
    },
    raceDorsalsRetired: {
      q: 'Dove posso vedere i dorsali ritirati?',
      description: 'Puoi filtrare i dorsali per stato per vedere solo quelli ritirati.',
    },
    racePointsAbc: {
      q: 'Cosa significano le lettere accanto ai corridori?',
      description:
        'Le lettere mostrano quanti utenti hanno selezionato i corridori. Ci sono quattro lettere: A (>%30), B (%30-%3), C (%3-%1) e D (<%1).',
    },
    racePointsStars: {
      q: 'Cosa significano le stelle accanto ai corridori?',
      description:
        'I corridori con le stelle sono nella squadra ideale; cioè, sono la migliore opzione per vincere questa competizione.',
    },
    raceStandings: {
      q: 'Come vengono calcolate le classifiche?',
      description:
        'Alla fine di ogni tappa, riceverai i punti dei corridori che hai selezionato nella tua squadra. Questi punti determinano la classifica.',
    },
    racePlaceStandings: {
      q: 'Cosa posso fare se non vedo le classifiche locali?',
      description: 'Per vedere le classifiche locali, devi specificare la tua città nel tuo profilo.',
    },
    racePorraRiskFactor: {
      q: 'Qual è il significato della barra?',
      description:
        "La barra indica il livello di rischio da 0 a 10: il rischio che l'utente ha assunto quando ha creato la sua squadra.",
    },
    racePorraMyRiskFactor: {
      q: 'Qual è il livello di rischio della mia squadra?',
      description: 'Il rischio che hai assunto quando hai creato la tua squadra, da 0 a 10:',
    },
    racePorraAds: {
      q: 'Perché vedo annunci prima di salvare la mia squadra?',
      description: 'Solo i Primi domestici possono salvare la loro squadra senza vedere annunci.',
    },
    racePorraCreateRandom: {
      q: 'Puoi creare una squadra casuale per me?',
      description: 'Certo. Scegli le lettere che dovremmo considerare e ti proporremo una squadra!',
    },
    tropeltxos: {
      q: 'Dove posso gestire i miei tropeltxos?',
      description:
        'Con i tropeltxos puoi vedere le sottoclassifiche con i tuoi amici, familiari, colleghi di lavoro o vicini.',
    },
    tropeltxoPrize: {
      q: 'Ci sono premi per il vincitore del tropeltxo?',
      description:
        'Tropela non offre premi nei tropeltxos, ma non dimenticare che abbiamo un negozio se vuoi distribuire premi!',
    },
  },
  xedap: {
    banner: {
      updateRider:
        'Aggiorna il tuo pilota nelle impostazioni. Centinaia di diverse combinazioni per creare il tuo avatar unico, migliaia se sei un Primo domestico!',
    },
    form: {
      height: {
        label: 'Altezza',
      },
      weight: {
        label: 'Peso',
      },
      skin: {
        label: 'Tonalità della pelle',
      },
      bikes: {
        label: 'Bici',
        options: {
          bike_road: 'Strada',
          bike_victorian: 'Vittoriano',
          bike_mountain: 'MTB',
        },
      },
    },
  },
};
