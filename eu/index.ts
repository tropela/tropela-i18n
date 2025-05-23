//! tropela-app translation file
//! locale : Basque [eu]
//! author : eillarra : https://github.com/eillarra

export default {
  updated: 'Aplikazioa eguneratu dugu. Freskatu azken bertsioa erabiltzeko.',
  welcome: 'Tropela.eus-en zure familia eta lagunekin lehiatu zaitezke denboraldiko txirrindulari lasterketa onenetan.',
  menu: {
    home: 'Sarrera',
    races: 'Lehiaketak',
    seasons: 'Denboraldiak',
    rules: 'Arauak',
    premium: 'Luxuzko gregarioa | Luxuzko gregarioak',
    blog: 'Bloga',
    store: 'Denda',
    about: 'Tropela Elkartea',
    privacy: 'Pribatutasun politika',
    terms: 'Erabilera baldintzak',
    contact: 'Kontaktua',
    tropeltxos: 'Tropeltxoak',
  },
  auth: {
    login: {
      title: 'Ongi etorri.',
      link: 'Kontu bat duzu? Saioa hasi',
    },
    signup: {
      title: 'Tropelean lehiatu.',
      link: 'Ez duzu konturik? Sortu zure kontua',
    },
    passwordReset: {
      title: 'Pasahitza berrezarri.',
      intro:
        'Zure pasahitza ahaztu al duzu? Idatzi zure helbide elektronikoa hemen eta pasahitza berrezartzeko esteka bat bidaliko dizugu.',
      link: 'Pasahitza ahaztu duzu?',
    },
    passwordResetConfirm: {
      intro: 'Idatzi hemen zure pasahitz berria; Tropelan sartzeko erabili ahalko duzu.',
    },
  },
  countdown: {
    months: 'hilabete | hilabete',
    days: 'egun | egun',
    hours: 'ordu | ordu',
    minutes: 'minutu | minutu',
    seconds: 'segundu | segundo',
  },
  season: {
    allRaces: 'Lehiaketa guztiak',
    calendar: 'Egutegia',
    nextRace: 'Hurrengo lehiaketa | Hurrengo lehiaketak',
    menu: {
      presentation: 'Denboraldiaren aurkezpena',
      standings: 'Denboraldiko sailkapenak',
    },
    collection: 'Bilduma | Bildumak',
    race: 'Lehiaketa | Lehiaketak',
    racesCount: 'Lehiaketarik ez | Lehiaketa bat | {n} lehiaketa',
    performance: 'Errendimendua',
  },
  race: {
    menu: {
      presentation: 'Aurkezpena',
      standings: 'Sailkapenak',
      standings2: 'Sailkapenak (lehiaketaraino)',
      points: 'Txirrindularien puntuak',
      dorsals: 'Dortsalak',
      news: 'Berriak',
      createPorra: 'Kiniela egin',
      myPorra: 'Nire kiniela',
    },
    canceled: 'Bertan behera',
    stage: 'Etapa | Etapak',
    stage_today: 'Gaurko etapa | Gaurko etapak',
    team: 'Taldea | Taldeak',
    dorsal: {
      filter: 'Izen, talde edo herrialdearen arabera filtratu',
      group: 'Multzoa | Multzoak',
      status: 'Egoera | Egoerak',
      statuses: {
        unconfirmed: 'Dudan',
        participating: 'Ziur',
        notParticipating: 'Ez doa',
        retired: 'Erretiratuta',
      },
      sort: {
        alpha: 'Izenaren arabera ordenatu',
        percent: 'Aukeren arabera ordenatu',
        position: 'Puntuen arabera ordenatu',
      },
    },
    porra: {
      registrationOpens: 'Kinielak irekitzeko',
      registrationOpenFor: 'Zure kiniela egiteko',
      showAllStages: 'Etapa guztiak erakutsi',
    },
    porrasCount: 'Kinielarik ez | Kiniela bat | {n} kiniela',
    pointsRules: 'Puntuazioa',
  },
  place: {
    menu: {
      standings: 'Herriko sailkapenak',
    },
  },
  game: {
    menu: {
      standings: 'Babestutako sailkapenak',
    },
    banner: 'Lehiaketa hau babestuta dago, eta sari ederrak ditu Tropelako erabiltzaileentzat.',
    legal: 'Oinarriak',
    prizes: 'Sariak',
  },
  tropeltxo: {
    create: 'Tropeltxo berria sortu',
    search: 'Tropeltxo bat bilatu',
    membership: 'Kidetza',
    membershipLevel: {
      admin: 'Kudeatzailea',
      adminDescription: 'Tropeltxoaren kontrol osoa. Kideak eta ezarpenak kudeatu ditzake.',
      moderator: 'Moderatzailea',
      moderatorDescription: 'Kideak kudeatu ditzake.',
      member: 'Kidea',
      memberDescription: 'Sailkapenak ikusi ditzake.',
      pending: 'Zain',
      pendingDescription: 'Tropeltxoan sartzeko onarpenaren zain.',
      invited: 'Gonbidatuta',
      rejected: 'Ezeztatuta',
    },
    members: 'Kideak',
    public: 'Publikoa',
    private: 'Pribatua',
    publicDescription: 'Edonork aurkitu eta sartu dezake tropeltxo honetan.',
    privateDescription: 'Gonbidatutako erabiltzaileak bakarrik sar daitezke tropeltxo honetan.',
    createTropeltxo: {
      action: 'Tropeltxo berria sortu',
      description:
        'Tropeltxo bat sortu dezakezu zure lagunekin, etxekoekin, lankideekin edo ingurukoekin azpisailkapenak ateratzeko modua izango duzu.',
      success: 'Tropeltxoa behar bezala sortu da',
    },
    deleteTropeltxo: {
      action: 'Tropeltxoa ezabatu',
      description:
        'Ekintza hau ezin da desegin. Kide guztiak tropeltxoko sailkapenetara sartzeko aukera galduko dute eta tropeltxoko datu guztiak ezabatuko dira.',
      confirm: 'Ziur al zaude tropeltxo hau ezabatu nahi duzula?',
      success: 'Tropeltxoa behar bezala ezabatu da',
    },
    leaveTropeltxo: {
      action: 'Tropeltxoa utzi',
      description: 'Sailkapenetara sartzeko aukera galduko duzu. Edozein unetan eskatu dezakezu sarrera berriro.',
      adminDescription:
        'Administratzaile bakarra zarenez, beste kide bati administratzaile rola eman behar diozu tropeltxoa utzi aurretik.',
      confirm: 'Ziur al zaude tropeltxo hau utzi nahi duzula?',
      success: 'Tropeltxoa utzi duzu',
    },
    inviteMember: {
      action: 'Erabiltzaileak gonbidatu',
    },
    removeMember: {
      action: 'Kidea ezabatu',
      description: 'Erabiltzailea tropeltxotik atera nahi duzu? Tropeltxoko sailkapenetara sartzeko aukera galduko du.',
      confirm: 'Ziur al zaude kide hau tropeltxo honetatik atera nahi duzula?',
      success: 'Kidea tropeltxotik atera da',
    },
  },
  user: {
    menu: {
      admin: 'Admin gunea',
      avatar: 'Txirrindularia',
      dashboard: 'Nire Tropela',
      privacy: 'Pribatutasuna',
      profile: 'Profila',
      settings: 'Ezarpenak',
      settingsAndPrivacy: 'Ezarpenak eta pribatutasuna',
      notifications: 'Oharrak',
      subscriptions: 'Harpidetzak',
      login: 'Saioa hasi',
      logout: 'Saioa amaitu',
      passwordChange: 'Pasahitza',
      emails: 'Emailak',
      socialConnections: 'Lotutako kontuak',
      signup: 'Kontua sortu',
      standings: 'Nire sailkapenak',
      tropeltxos: 'Nire tropeltxoak',
    },
    change_language:
      'Aplikazioaren hizkuntza aldatu dezakezu hemen. Aldaketak berehala burutuko dira eta hizkuntza zure profilean gordeko da, hurrengo aldiz saioa hasten duzunean gogoratzeko (edozein gailutan).',
    confirm: {
      logout: 'Ziur al zaude saioa amaitu nahi duzula?',
    },
    tropeltxo: 'Tropeltxoa | Tropeltxoak',
  },
  ui: {
    form: {
      actions: {
        ok: 'Bai',
        cancel: 'Ezeztatu',
        change: 'Aldatu',
        create: 'Sortu',
        delete: 'Ezabatu',
        update: 'Eguneratu',
        refresh: 'Freskatu',
        reset: 'Leheneratu',
        save: 'Gorde',
        search: 'Bilatu',
        share: 'Partekatu',
        submit: 'Bidali',
        filter: 'Filtratu',
        dismiss: 'Ezeztatu',
        typeMessage: 'Zure mezua idatzi',
        login: 'Saioa hasi',
        signup: 'Kontua sortu',
        downloadIcs: 'Egutegia jeitsi',
      },
      fields: {
        username_email: 'Erabiltzailea edo emaila',
        username: 'Erabiltzailea',
        password: 'Pasahitza',
        password2: 'Pasahitza (errepikatu)',
        email: 'Emaila',
        firstName: 'Izena',
        lastName: 'Abizenak',
        city: 'Herria',
        flag: 'Zure bandera',
      },
      hints: {
        city: 'Herriko sailkapenentzat erabiliko dugu hau.',
        flag: 'Sailkapenetan erakusten dena.',
      },
      required: 'Beharrezkoa.',
      rules: {
        required: 'Eremu hau beharrezkoa da.',
      },
      social: {
        facebook: 'Facebook bidez jarrraitu',
        google: 'Google bidez jarrraitu',
        twitter: 'Twitter / X bidez jarrraitu',
      },
    },
    select: {
      all: 'Guztia | Guztiak',
      aggregate: 'Metatua',
      locale: 'Hizkuntza',
      race: 'Lehiaketakoa',
      stage: 'Etapakoa',
      finalStage: 'Bukaerakoa',
      annual: 'Urtekoa',
    },
    nav: {
      pageFirst: 'Lehen orria',
      pagePrevious: 'Aurreko orria',
      pageNext: 'Hurrengo orria',
      pageLast: 'Azken orria',
    },
    or: 'edo',
  },
  message: {
    invalidCredentials: 'Zehaztutako erabiltzailea eta/edo pasahitza ez dira zuzenak.',
    loggedIn: 'Saioa hasi duzu {username} bezala',
    loggedOut: 'Saioa amaitu duzu',
    passwordResetRequested: 'Pasahitza berrezartzeko emaila bidali da',
    porraSaveDelay: 'Kiniela {seconds} segundo barru gordeko da',
    porraCreated: 'Kiniela behar bezala sortu da',
    porraUpdated: 'Kiniela eguneratu da',
    porraRandomSelected: 'Kiniela proposatu da',
    searchDelay: 'Bilaketa {seconds} segundo barru burutuko da',
    userProfileUpdated: 'Zure profila eguneratu da',
  },
  notice: {
    noTropeltxoMessages: 'Ez duzu mezurik tropeltxo honetan.',
    placeStandingsLogIn: 'Herriko sailkapenak ikusteko saioa hasi behar duzu.',
    placeStandingsNoPlace: 'Aukeratu zure herria herriko sailkapenak ikusteko.',
    porraClosed: 'Ezin duzu kinielarik egin lehiaketa honetan.',
    porraCreateLogIn: 'Kiniela egin ahal izateko saioa hasi behar duzu.',
    xedapAds: 'Zure iragarkia hemen ikusi nahi duzu? Jarri harremanetan gurekin!',
  },
  notification: {
    dorsalsNotParticipating:
      'Zure kinielako (#{porra_id}) txirrindulariren bat ez da {race_name}-n izango. Eguneratu ezazu zure kiniela lasterketa hasi baino lehen!',
    emptyTropeltxo:
      'Bakar bakarrik zaude tropeltxo batetan {race_name} lehiaketarako... esan zure lagunei! Tropela dibertigarriagoa da lagun eta familiarekin.|Bakar bakarrik zaude, {count} tropeltxotan, {race_name} lehiaketarako... esan zure lagunei! Tropela dibertigarriagoa da lagun eta familiarekin.',
    porraPending: 'Ez ahaztu {race_name} lehiaketarako zure kiniela egitea!',
    tropeltxoMembershipPending:
      'Eskaera bat duzu zain "{tropeltxo_name}" tropeltxoan.|{count} eskaera dituzu zain "{tropeltxo_name}" tropeltxoan.',
    tropeltxoMessage: 'Mezu berriak daude "{tropeltxo_name}" tropeltxoko txatean.',
  },
  premium: {
    banner: {
      join: 'Egin zaitez Luxuzko Gregario eta gozatu abantaila bereziez!',
      noAds: 'Eta iragarkirik gabe!',
    },
    action: {
      upgrade: 'LG bihurtu',
    },
  },
  privacy: {
    shareOnSocialMedia: 'Zure jarduera sare sozialetan partekatu',
    shareOnSocialMediaDescription:
      'Kiniela berri bat egitean, sare sozialetan partekatu (Twitter edo Facebook bidezko logina erabili baduzu).',
    makeProfilePublic: 'Zure profila publiko egin',
    makeProfilePublicDescription:
      'Zure profila publiko egin dezakezu, eta zure Tropelako emaitzen historikoa elkarbanatu.',
    receiveEmails: 'Tropelako emailak jaso',
    receiveEmailsDescription: 'Kiniela egiteko oroigarriak, lehiaketan inguruko informazioa, Tropelako berriak.',
    receiveNotifications: 'Tropelako notifikazioak jaso',
    receiveNotificationsDescription: 'Mugikorretan, `push` notifikazioak jaso kinielak irekitzean.',
  },
  faq: {
    title: 'Ohiko galderak',
    helpTropela: {
      q: 'Nola lagundu diezaioket Tropela Elkarteari?',
      description: 'Egin zaitez Luxuzko Gregario gure proiektuak bultzatzeko.',
    },
    translateTropela: {
      q: 'Itzulpenekin lagundu al dezaket?',
      description:
        'Hizkuntza gutxituak eta txirrindularitza kultura indartsua duten herrialdeetako hizkuntzak babesten ditugu. Hizkuntza berriak gehitu edo itzulpenak hobetu ditzakezu gure biltegi publikoan.',
    },
    dashboardPercentage: {
      q: 'Zer esan nahi dute zure Tropela-ko ehunekoek?',
      description:
        'Zure Tropela-n lehiaketa bakoitzeko ehunekoak zure errendimendua adierazten du. Ehunekoa zure atzetik geratu diren erabiltzaileen ehunekoa da.',
    },
    profileAvatar: {
      q: 'Nola aldatu dezaket nire txirrindularia?',
      description:
        'Zure txirrindularia ezarpenetan aldatu dezakezu. Zure txirrindularia osatzeko ehundaka konbinazio dituzu!',
    },
    profilePremium: {
      q: 'Zergatik dute erabiltzaile batzuk ikur hau?',
      description:
        'Ikur hau dutenak Luxuzko Gregarioak dira: Tropelari lagunduz abantaila bereziak jasotzen dituzten erabiltzaileak.',
    },
    raceLoginToCreatePorra: {
      q: 'Nola jokatu dezaket lehiaketa honetan?',
      description: 'Lehiaketa honetan zure kiniela egin ahal izateko saioa hasi behar duzu.',
    },
    raceDorsalsRetired: {
      q: 'Non aurkitu dezaket erretiratuen zerrenda osoa?',
      description: 'Dortsalen zerrenda filtratu dezakezu erretiratuak bakarrik ikusteko.',
    },
    racePointsAbc: {
      q: 'Zer esan nahi dute dortsalen ondoko letrek?',
      description:
        'Partehartzaileek beraien kinieletan txirrindulari hori zenbatek aukeratu duten adierazten dute. Lau letra daude: A (>%30), B (%30-%3), C (%3-%1) eta D (<%1).',
    },
    racePointsStars: {
      q: 'Zer esan nahi du txirrindulari batek izar bat badu?',
      description:
        'Izar bat duten txirrindulariak kiniela idealean daude; hau da, aukera onena dira lehiaketa irabazteko.',
    },
    raceStandings: {
      q: 'Nola kalkulatzen dira sailkapenak?',
      description:
        'Etapa bakoitzaren amaieran, kinielan aukeratuta dituzun txirrindulariei dagozkien puntuak jasoko dituzu. Puntu hauek lasterketako sailkapenen araberakoak dira.',
    },
    racePlaceStandings: {
      q: 'Zer egin dezaket herriko sailkapenak ikusten ez baditut?',
      description: 'Herriko sailkapenak ikusi ahal izateko, zure herria zehaztu behar duzu zure profilean.',
    },
    racePorraRiskFactor: {
      q: 'Zein da barraren esanahia?',
      description:
        '0tik 10era arrisku maila adirazten du barrak: bere porra egitean erabiltzaileak hartutako arriskua.',
    },
    racePorraMyRiskFactor: {
      q: 'Zein da nire kinielaren arrisku maila?',
      description: 'Porra egitean hartu duzun arrisku maila 0tik 10era adierazita:',
    },
    racePorraAds: {
      q: 'Zergatik ikusten ditut iragarkiak kiniela gorde aurretik?',
      description: 'Iragarkiak ez ikusteko aukera Luxuzko Gregarioentzat bakarrik dago eskuragarri.',
    },
    racePorraCreateRandom: {
      q: 'Egin al dezakezue kiniela proposamen bat niretzat?',
      description: 'Noski. Aukeratu kontutan izan behar ditugun letrak eta kiniela bat proposatuko dizugu!',
    },
    seasonIcs: {
      q: 'Nola jaso dezaket denboraldiaren egutegia?',
      description:
        'Hemengo esteka hau erabiliz ICS fitxategi bat jeitsi dezakezu, zure agenda digitalean denboraldiko lehiaketak ikusi ahal izateko.',
    },
    tropeltxos: {
      q: 'Non kudeatu ditzaket tropeltxoak?',
      description:
        'Tropeltxoen bidez zure lagunekin, etxekoekin, zure lankideekin edota ingurukoekin azpisailkapenak ateratzeko modua izango duzu.',
    },
    tropeltxoPrize: {
      q: 'Ba al daude sariak tropeltxoko irabazlearentzat?',
      description:
        'Tropelak ez ditu sariak ematen tropeltxoetan, baina ez ahaztu denda bat dugula sariren bat banatu nahi baduzue!',
    },
  },
  xedap: {
    banner: {
      updateRider:
        'Zure txirrindularia eguneratu aldagelan. Ehundaka konbinazio dauzkazu zurea osatzeko, milaka Luxuzko Gregarioa bazara!',
    },
    form: {
      height: {
        label: 'Altuera',
      },
      weight: {
        label: 'Pisua',
      },
      skin: {
        label: 'Azal kolorea',
      },
      bikes: {
        label: 'Bizikleta',
        options: {
          bike_road: 'Errepidekoa',
          bike_victorian: 'Viktoriarra',
          bike_mountain: 'BTT',
        },
      },
      head: {
        label: 'Buruan',
        options: {
          helmet: 'Kaskoa',
          short: 'Ile motza',
          long: 'Ile luzea',
          afro: 'Afro',
          punk: 'Punk',
          viet: 'Vietnamarra',
          txapela: 'Txapela',
          copa: 'Kopazko kapela',
        },
      },
      face: {
        label: 'Aurpegian',
        options: {
          colorete: 'Koloreteak',
          clown_nose: 'Pailazo sudurra',
          zorro: 'Mo Zorro',
          glasses: 'Betaurrekoak',
          sunglasses: 'Eguzkitako betaurrekoak',
          madmax: 'Mad Max',
        },
      },
      face_hair: {
        label: 'Bizarra',
        options: {
          beard: 'Bizarra',
          dartagnan: "D'Artagnan",
          bigote: 'Bigotea',
          perilla: 'Perilla',
          bigote_2: 'Tom Ritchey',
        },
      },
      top: {
        label: 'Gainean',
        options: {
          breasts: 'Bularrak',
          mallot_m: 'Mailota',
          mallot_f: 'Mailota 👩',
          solid_short_m: 'Manga motza',
          solid_short_f: 'Manga motza 👩',
          solid_long_m: 'Manga luzea',
          solid_long_f: 'Manga luzea 👩',
          stripes_short_m: 'Marraduna motza',
          stripes_short_f: 'Marraduna motza 👩',
          stripes_long_m: 'Marraduna luzea',
          stripes_long_f: 'Marraduna luzea 👩',
          bikini: 'Bikinia',
        },
      },
      bottom: {
        label: 'Galtzak',
        options: {
          culote: 'Kuloteak',
          short: 'Galtza motzak',
          malla_short: 'Elastiko motzak',
          malla_long: 'Elastiko luzeak',
          bikini: 'Bikinia',
        },
      },
      shoes: {
        label: 'Oinetakoak',
        options: {
          rider: 'Errepidekoak',
          boot: 'Botak',
          aladin: 'Aladinorenak',
        },
      },
    },
  },
};
