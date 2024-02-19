//! tropela-app translation file
//! locale : Dutch [nl]
//! author : eillarra : https://github.com/eillarra

export default {
  welcome:
    'Welkom bij Tropela, een gratis online wielerspel waar je kunt strijden tegen je vrienden, familie en andere wielerfans.',
  menu: {
    home: 'Home',
    races: 'Wedstrijden',
    seasons: 'Seizoenen',
    rules: 'Reglement',
    premium: 'Meesterknechten',
    blog: 'Blog',
    store: 'Winkel',
    about: 'Over ons',
    privacy: 'Privacybeleid',
    terms: 'Gebruiksvoorwaarden',
    contact: 'Contact',
    tropeltxos: 'Tropeltxos',
  },
  auth: {
    login: {
      title: 'Welkom.',
      link: 'Heb je al een account? Meld je aan',
    },
    signup: {
      title: 'Race in het peloton.',
      link: 'Nog geen account? Registreer',
    },
    passwordReset: {
      title: 'Wachtwoord herstellen.',
      intro: 'Ben je je wachtwoord vergeten? Vul je e-mailadres in en we sturen je een link om het te herstellen.',
      link: 'Wachtwoord vergeten?',
    },
  },
  countdown: {
    months: 'maand | maanden',
    days: 'dag | dagen',
    hours: 'uur | uren',
    minutes: 'minuut | minuten',
    seconds: 'seconde | seconden',
  },
  season: {
    menu: {
      standings: 'Algemeen klassement',
    },
    collection: 'Collectie | Collecties',
    race: 'Wedstrijd | Wedstrijden',
    racesCount: 'Geen wedstrijden | Een wedstrijd | {n} wedstrijden',
  },
  race: {
    menu: {
      presentation: 'Overzicht',
      standings: 'Klassement',
      points: 'Punten renners',
      dorsals: 'Rennerslijst',
      news: 'Nieuws',
      createPorra: 'Team samenstellen',
      myPorra: 'Mijn team',
    },
    canceled: 'Afgelast',
    stage: 'Etappe | Etappes',
    team: 'Team | Teams',
    dorsal: {
      filter: 'Filter op naam, team of land',
      group: 'Groep | Groepen',
      status: 'Status | Statussen',
      statuses: {
        unconfirmed: 'Onzeker',
        participating: 'Zeker',
        notParticipating: 'Komt niet',
        retired: 'Gestopt',
      },
      sort: {
        alpha: 'Sorteer op naam',
        percent: 'Sorteer op percentage',
        position: 'Sorteer op positie',
      },
    },
    porra: {
      registrationOpens: 'Inschrijvingen openen over',
      registrationOpenFor: 'Inschrijvingen open voor',
      showAllStages: 'Toon alle etappes',
    },
    porrasCount: 'Geen teams | Een team | {n} teams',
  },
  place: {
    menu: {
      standings: 'Klassement van mijn gemeente',
    },
  },
  user: {
    menu: {
      admin: 'Admin area',
      avatar: 'Mijn renner',
      dashboard: 'Dashboard',
      privacy: 'Privacy',
      profile: 'Profiel',
      settings: 'Instellingen',
      settingsAndPrivacy: 'Instellingen en privacy',
      notifications: 'Notificaties',
      subscriptions: 'Abonnementen',
      login: 'Aanmelden',
      logout: 'Afmelden',
      passwordChange: 'Wachtwoord',
      emails: 'E-mailadressen',
      socialConnections: 'Sociale accounts',
      signup: 'Registreren',
      standings: 'Mijn klassement',
      tropeltxos: 'Mijn tropeltxos',
    },
    change_language:
      'Je kunt hier de taal van de applicatie wijzigen. De wijziging wordt onmiddellijk toegepast en opgeslagen in je profiel, zodat deze kan worden onthouden wanneer je de volgende keer inlogt (op elk apparaat).',
    confirm: {
      logout: 'Weet je zeker dat je wilt afmelden?',
    },
    tropeltxo: 'Tropeltxo',
  },
  ui: {
    form: {
      actions: {
        change: 'Wijzig',
        delete: 'Verwijder',
        update: 'Bijwerken',
        reset: 'Reset',
        save: 'Opslaan',
        submit: 'Verstuur',
        typeMessage: 'Typ jouw bericht',
        login: 'Aanmelden',
        signup: 'Registreren',
      },
      fields: {
        username: 'Gebruikersnaam',
        password: 'Wachtwoord',
        password2: 'Herhaal wachtwoord',
        email: 'E-mailadres',
        firstName: 'Naam',
        lastName: 'Achternaam',
        city: 'Gemeente',
        flag: 'Jouw vlag',
      },
      hints: {
        city: 'Wij gebruiken deze informatie om je te tonen in het klassement van je gemeente.',
        flag: 'Als getoonde in het klassement.',
      },
      required: 'Verplicht veld.',
      rules: {
        required: 'Dit veld is verplicht.',
      },
      social: {
        facebook: 'Doorgaan met Facebook',
        google: 'Doorgaan met Google',
        twitter: 'Doorgaan met Twitter / X',
      },
    },
    select: {
      all: 'Alle | Alles',
      aggregate: 'Algemeen',
      locale: 'Taal',
      stage: 'Etappe',
      finalStage: 'Einde',
    },
    nav: {
      pageFirst: 'Eerste pagina',
      pagePrevious: 'Vorige pagina',
      pageNext: 'Volgende pagina',
      pageLast: 'Laatste pagina',
    },
    or: 'of',
  },
  message: {
    loggedIn: 'Aangemeld als {username}',
    loggedOut: 'Je bent afgemeld',
    passwordResetRequested: 'Een e-mail voor het opnieuw instellen van het wachtwoord is verzonden',
    porraCreated: 'Je team is aangemaakt',
    porraUpdated: 'Je team is bijgewerkt',
    userProfileUpdated: 'Je profiel is bijgewerkt',
  },
  notice: {
    noTropeltxoMessages: 'Je hebt geen tropeltxo-berichten',
    placeStandingsLogIn: 'Meld je aan om de standen van jouw gemeente te zien.',
    placeStandingsNoPlace: 'Werk je gemeente-informatie bij om de standen van jouw gemeente te zien.',
    porraClosed: 'Je kunt geen team maken voor deze race.',
    porraCreateLogIn: 'Je moet je aanmelden om een team te maken.',
    xedapAds: 'Wil je hier jouw advertenties zien? Neem contact met ons op!',
  },
  premium: {
    banner: {
      join: 'Word een Meesterknecht en geniet van extra functies!',
      noAds: 'Zonder advertenties!',
    },
    action: {
      upgrade: 'Upgrade',
    },
  },
  privacy: {
    shareOnSocialMedia: 'Deel je activiteit op sociale media',
    shareOnSocialMediaDescription:
      'Wanneer je een team maakt, deel het dan op sociale media (als je inlogt met Twitter of Facebook).',
    makeProfilePublic: 'Maak je profiel publiek',
    makeProfilePublicDescription:
      'Je kunt je profiel publiek maken, zodat andere gebruikers jouw Tropela-geschiedenis en resultaten kunnen zien.',
    receiveEmails: 'Ontvang e-mails van Tropela',
    receiveEmailsDescription: 'Herinneringen om een team te maken, nieuws, etc.',
    receiveNotifications: 'Ontvang pushmeldingen',
    receiveNotificationsDescription: 'Ontvang pushmeldingen op mobiele apparaten wanneer we een nieuw spel openen.',
  },
  xedap: {
    banner: {
      updateRider:
        'Update je renner in je instellingen. Honderden verschillende combinaties om je unieke avatar te maken, duizenden als je een Meesterknecht bent!',
    },
  },
};
