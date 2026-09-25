/* ENKO website model: content data. [TBC] = to be confirmed by ENKO. */
window.ENKO = window.ENKO || {};

ENKO.ARTISTS = [
  { id: 'carpetman', name: 'Carpetman', img: 'assets/img/artists/carpetman.jpg', role: { en: 'Full management', uk: 'Повний менеджмент' }, note: { en: 'Music Moves Europe Award 2026', uk: 'Music Moves Europe Award 2026' } },
  { id: 'kalush', name: 'Kalush Orchestra', img: 'assets/img/artists/kalush-orchestra.jpg', role: { en: 'Distribution', uk: 'Дистрибуція' }, note: { en: 'Eurovision 2022 winners', uk: 'Переможці Євробачення 2022' } },
  { id: 'alyona', name: 'alyona alyona', img: 'assets/img/artists/alyona-alyona.jpg', role: { en: 'Distribution & publishing', uk: 'Дистрибуція і паблішинг' }, note: { en: 'Eurovision 2024 top-3', uk: 'Топ-3 Євробачення 2024' } },
  { id: 'shugar', name: 'Шугар', img: 'assets/img/artists/shugar.jpg', role: { en: 'Promo, distribution & publishing', uk: 'Промо, дистрибуція і паблішинг' }, note: { en: '3 platinum hits', uk: '3 платинові хіти' } },
  { id: 'mamarika', name: 'MamaRika', img: 'assets/img/artists/mamarika.jpg', role: { en: 'Promo & distribution', uk: 'Промо і дистрибуція' }, note: { en: 'Platinum hit «Зв\'язок»', uk: 'Платиновий хіт «Зв\'язок»' } },
  { id: 'kola', name: 'KOLA', img: 'assets/img/artists/kola.jpg', role: { en: 'Distribution', uk: 'Дистрибуція' }, note: { en: 'Spotify EQUAL ambassador', uk: 'Амбасадорка Spotify EQUAL' } },
  { id: 'aira', name: 'AIRA', img: 'assets/img/artists/aira.jpg', role: { en: 'Distribution & promo', uk: 'Дистрибуція і промо' }, note: { en: '', uk: '' } },
  { id: 'lemka', name: 'LÉMKA', img: 'assets/img/artists/lemka.jpg', role: { en: 'Distribution & promo', uk: 'Дистрибуція і промо' }, note: { en: '', uk: '' } }
];
ENKO.ROSTER_TOTAL = 170;

/* Trophy shelf. Wording rule: never "Grammy nominee"; only "first-round consideration". */
ENKO.AWARDS = [
  { icon: 'trophy', year: '2022', title: { en: 'Eurovision Song Contest, 1st place', uk: 'Євробачення, 1 місце' }, who: { en: 'Kalush Orchestra, «Stefania», 631 points', uk: 'Kalush Orchestra, «Stefania», 631 бал' } },
  { icon: 'trophy', year: '2024', title: { en: 'Eurovision Song Contest, top-3', uk: 'Євробачення, топ-3' }, who: { en: 'alyona alyona & Jerry Heil, «Teresa & Maria»', uk: 'alyona alyona і Jerry Heil, «Teresa & Maria»' } },
  { icon: 'star', year: '2026', title: { en: 'Music Moves Europe Award', uk: 'Music Moves Europe Award' }, who: { en: 'Carpetman, Eurosonic Noorderslag, Groningen', uk: 'Carpetman, Eurosonic Noorderslag, Гронінген' } },
  { icon: 'academy', year: '2026', title: { en: 'Recording Academy membership', uk: 'Членство в Recording Academy' }, who: { en: 'Ivan Klymenko, voting member; Usein Bekirov, member, 3× first-round GRAMMY consideration', uk: 'Іван Клименко, член з правом голосу; Усеїн Бекіров, член, 3 рази у першому раунді відбору GRAMMY' } },
  { icon: 'equal', year: '2023–2026', title: { en: 'Spotify EQUAL: 8 artists', uk: 'Spotify EQUAL: 8 артистів' }, who: { en: 'Eight ENKO artists fronted the program, including Times Square billboards', uk: 'Вісім артистів ENKO стали обличчями програми, включно з білбордами на Times Square' } },
  { icon: 'apple', year: '2024–2026', title: { en: 'Apple Music Up Next & Sessions', uk: 'Apple Music Up Next і Sessions' }, who: { en: 'Platform programs fronted by ENKO artists', uk: 'Програми платформ з артистами ENKO' } },
  { icon: 'chart', year: '2026', title: { en: 'Shazam Global Chart, #11', uk: 'Shazam Global Chart, #11' }, who: { en: 'Carpetman, «Feel So Cold»', uk: 'Carpetman, «Feel So Cold»' } },
  { icon: 'cover', year: '2020–2026', title: { en: '150 editorial playlist covers', uk: '150 обкладинок редакторських плейлистів' }, who: { en: 'Spotify, Apple Music, YouTube Music', uk: 'Spotify, Apple Music, YouTube Music' } }
];

ENKO.NEWS = [
  { source: 'UNITED24 Media', date: '2026-07', url: 'https://united24media.com/culture/one-step-closer-to-ukraines-first-grammy-ukrainian-music-producer-ivan-klymenko-joins-recording-academy-20798', title: { en: '“One step closer to Ukraine’s first Grammy”: producer Ivan Klymenko joins the Recording Academy', uk: '«На крок ближче до першого українського Ґреммі»: продюсер Іван Клименко став членом Recording Academy' } },
  { source: 'LIGA.net', date: '2026-07', url: 'https://life.liga.net/en/culture/news/enko-founder-klymenko-becomes-a-member-of-the-academy-that-awards-the-grammy', title: { en: 'ENKO co-founder Klymenko becomes a member of the Academy that awards the Grammy', uk: 'Співзасновник ENKO Клименко став членом академії, яка присуджує Ґреммі' } },
  { source: 'UNITED24 Media', date: '2026-01', url: 'https://united24media.com/latest-news/ukrainian-singer-carpetman-takes-home-the-2026-music-moves-europe-award-15082', title: { en: 'Ukrainian singer Carpetman takes home the 2026 Music Moves Europe Award', uk: 'Український артист Carpetman отримав Music Moves Europe Award 2026' } },
  { source: 'EU Neighbours East', date: '2026-01', url: 'https://euneighbourseast.eu/news/latest-news/carpetman-from-ukraine-among-winners-of-music-moves-europe-awards-2026/', title: { en: 'Carpetman from Ukraine among winners of Music Moves Europe Awards 2026', uk: 'Carpetman з України серед переможців Music Moves Europe Awards 2026' } },
  { source: 'Rubryka', date: '2025-10', url: 'https://rubryka.com/en/2025/10/18/ukrayinskyj-spivak-carpetman/', title: { en: 'Ukrainian artist Carpetman nominated for Music Moves Europe Awards 2026', uk: 'Українського артиста Carpetman номіновано на Music Moves Europe Awards 2026' } }
];

ENKO.CASES = [
  { id: 'carpetman', img: 'assets/img/photos/carpetman-hood.jpg', name: 'Carpetman', tag: { en: 'Full management · since first release', uk: 'Повний менеджмент · з першого релізу' },
    headline: { en: 'From zero to 17M+ monthly listeners', uk: 'Від нуля до 17M+ слухачів на місяць' },
    stats: [ { n: '17M+', l: { en: 'Spotify monthly listeners', uk: 'слухачів на місяць у Spotify' } }, { n: '500M', l: { en: 'video views', uk: 'переглядів відео' } }, { n: '#11', l: { en: 'Shazam Global, «Feel So Cold»', uk: 'Shazam Global, «Feel So Cold»' } } ],
    text: { en: 'The talent is all his: he writes and produces every track. We handled strategic marketing, pitching and distribution. Organic growth from under 5M to 17M+ monthly listeners in six months, a US tour with Hippie Sabotage and the Music Moves Europe Award 2026.', uk: 'Талант повністю його: пише і продюсує кожен трек сам. Ми взяли на себе стратегічний маркетинг, пітчинг і дистрибуцію. Органічний ріст з менш ніж 5M до 17M+ слухачів на місяць за пів року, тур США з Hippie Sabotage і Music Moves Europe Award 2026.' },
    tbc: { en: '[Confirm: 17M+ (site, 09.2026) vs 2.1M (press release, 08.2026)]', uk: '[Підтвердити: 17M+ (сайт, 09.2026) чи 2.1M (прес-реліз, 08.2026)]' } },
  { id: 'fiinka', img: '', name: 'FIЇNKA', tag: { en: 'Distribution & marketing · since 2022', uk: 'Дистрибуція і маркетинг · з 2022' },
    headline: { en: 'From 315K to 9.9M streams a year', uk: 'Від 315K до 9.9M стрімів на рік' },
    stats: [ { n: '31×', l: { en: 'growth in yearly Spotify streams, 2022 → 2025', uk: 'ріст річних стрімів у Spotify, 2022 → 2025' } }, { n: '20.4M', l: { en: 'Spotify streams to date', uk: 'стрімів у Spotify загалом' } }, { n: '2', l: { en: 'platinum hits: «Грушка», «Афини»', uk: 'платинові хіти: «Грушка», «Афини»' } } ],
    text: { en: 'We spotted the potential early and invested in growth: release plan, editorial pitching and content strategy turned an ethno-pop voice into a platinum catalogue.', uk: 'Ми побачили потенціал рано і вклалися в ріст: релізний план, редакторський пітчинг і контент-стратегія перетворили етно-поп голос на платиновий каталог.' },
    tbc: { en: '[Figures from ENKO deck, 07.2026: confirm]', uk: '[Цифри з презентації ENKO, 07.2026: підтвердити]' } },
  { id: 'liulenov', img: '', name: 'IVAN LIULENOV', tag: { en: 'Distribution & marketing · since 2023', uk: 'Дистрибуція і маркетинг · з 2023' },
    headline: { en: 'From 1.4M to 14M streams a year', uk: 'Від 1.4M до 14M стрімів на рік' },
    stats: [ { n: '10×', l: { en: 'growth in yearly Spotify streams, 2022 → 2025', uk: 'ріст річних стрімів у Spotify, 2022 → 2025' } }, { n: '228M', l: { en: 'streams, «Шовковиця» (platinum)', uk: 'стрімів, «Шовковиця» (платина)' } }, { n: '2023', l: { en: 'collaboration started', uk: 'початок співпраці' } } ],
    text: { en: 'A catalogue that used to sit still. Release cadence, TikTok sound seeding and playlist work multiplied yearly streams tenfold in two years.', uk: 'Каталог, який стояв на місці. Релізний темп, засів звуків у TikTok і плейлистна робота збільшили річні стріми в десять разів за два роки.' },
    tbc: { en: '[Figures from ENKO deck, 07.2026: confirm]', uk: '[Цифри з презентації ENKO, 07.2026: підтвердити]' } },
  { id: 'kola', img: 'assets/img/artists/kola.jpg', name: 'KOLA', tag: { en: 'Distribution · since 2022', uk: 'Дистрибуція · з 2022' },
    headline: { en: 'From 90K to 94M streams a year', uk: 'Від 90K до 94M стрімів на рік' },
    stats: [ { n: '1000×', l: { en: 'growth in yearly Spotify streams, 2021 → 2025', uk: 'ріст річних стрімів у Spotify, 2021 → 2025' } }, { n: '106M', l: { en: 'Spotify streams to date', uk: 'стрімів у Spotify загалом' } }, { n: 'EQUAL', l: { en: 'Spotify EQUAL ambassador', uk: 'амбасадорка Spotify EQUAL' } } ],
    text: { en: 'Six platinum and gold hits, a Spotify EQUAL campaign and consistent editorial support: the fastest-growing catalogue in the roster.', uk: 'Шість платинових і золотих хітів, кампанія Spotify EQUAL і стабільна редакторська підтримка: каталог, що росте найшвидше в ростері.' },
    tbc: { en: '[Figures from ENKO deck, 07.2026: confirm]', uk: '[Цифри з презентації ENKO, 07.2026: підтвердити]' } }
];

ENKO.COVERS = [
  'assets/img/covers/solovyinoyu.jpg', 'assets/img/covers/hot-hits.jpg', 'assets/img/covers/equal.jpg', 'assets/img/covers/narodzhennia-zirky.jpg',
  'assets/img/covers/viralni-hity.jpg', 'assets/img/covers/sessions-alyona-jerry.jpg', 'assets/img/covers/alpha.jpg', 'assets/img/covers/hot-hits-2.jpg'
];

ENKO.PARTNERS = [
  { name: 'Universal Music Group', img: 'assets/img/logos/umg-light.png', role: { en: 'distribution', uk: 'дистрибуція' } },
  { name: 'Sony Music Publishing', img: 'assets/img/logos/sony-mp.png', role: { en: 'publishing', uk: 'паблішинг' } },
  { name: 'Kobalt', img: 'assets/img/logos/kobalt.png', role: { en: 'publishing', uk: 'паблішинг' } },
  { name: 'THE TEAM', img: 'assets/img/logos/the-team.png', role: { en: 'touring', uk: 'тури' } },
  { name: 'LYRA', img: '', role: { en: 'marketing', uk: 'маркетинг' }, url: 'https://lyra.promo' }
];

ENKO.TEAM = [
  { name: 'Ivan Klymenko', role: { en: 'Co-founder, producer', uk: 'Співзасновник, продюсер' }, weight: { en: 'Producer of «Stefania» and «Teresa & Maria», 300+ tracks, Recording Academy voting member', uk: 'Продюсер «Stefania» і «Teresa & Maria», 300+ треків, член Recording Academy з правом голосу' } },
  { name: '[Name TBC]', role: { en: 'Co-founder, CEO', uk: 'Співзасновниця, CEO' }, weight: { en: '[Weight TBC: one line with a number]', uk: '[Вага TBC: один рядок з цифрою]' } },
  { name: '[Name TBC]', role: { en: 'Co-founder', uk: 'Співзасновник' }, weight: { en: '[Weight TBC]', uk: '[Вага TBC]' } },
  { name: '[Name TBC]', role: { en: 'Head of Distribution', uk: 'Керівник дистрибуції' }, weight: { en: '[Weight TBC]', uk: '[Вага TBC]' } }
];

ENKO.STUDIOS = [
  { name: { en: 'Carpathians, Ukraine', uk: 'Карпати, Україна' }, type: { en: 'Creative residency', uk: 'Креативна резиденція' }, status: { en: 'Open', uk: 'Працює' } },
  { name: { en: 'Los Angeles, USA', uk: 'Лос-Анджелес, США' }, type: { en: 'Production studio', uk: 'Продакшн-студія' }, status: { en: 'Open', uk: 'Працює' } },
  { name: { en: 'ENKO Hub, Kyiv', uk: 'ENKO Hub, Київ' }, type: { en: 'Full complex', uk: 'Повний комплекс' }, status: { en: 'In development', uk: 'У розробці' } }
];

ENKO.OPPORTUNITIES = [
  { title: { en: 'Catalog acquisition & evergreens', uk: 'Викуп каталогів і евергріни' }, text: { en: 'We acquire Ukrainian evergreen catalogs and grow them in three stages: acquisition, marketing test against KPIs, remarketing. Royalty revenue of the ENKO label doubled from 2023 to 2024.', uk: 'Купуємо українські евергрін-каталоги і розвиваємо їх у три етапи: викуп, маркетинговий тест за KPI, ремаркетинг. Роялті-дохід лейблу ENKO подвоївся з 2023 до 2024 року.' } },
  { title: { en: 'Studios', uk: 'Студії' }, text: { en: 'Creative residency in the Carpathians, a production studio in Los Angeles and ENKO Hub in Kyiv, a full complex in development.', uk: 'Креативна резиденція в Карпатах, продакшн-студія в Лос-Анджелесі та ENKO Hub у Києві, повний комплекс у розробці.' } },
  { title: { en: 'Venture projects with artists', uk: 'Венчурні проєкти з артистами' }, text: { en: 'Carpetman was built from zero into an international act. The model is now a service: we co-invest, run the analytics and share the upside.', uk: 'Carpetman зібраний з нуля в міжнародний проєкт. Тепер ця модель є послугою: ми співінвестуємо, ведемо аналітику і ділимо результат.' } }
];

ENKO.FORMATS = [
  { title: 'Brand Deals', text: { en: 'Artists for campaigns, launches and integrations. Two Eurovision entries and 1B+ views of reach.', uk: 'Артисти для кампаній, запусків та інтеграцій. Два Євробачення і 1B+ переглядів охоплення.' } },
  { title: 'Sync Licensing', text: { en: 'Film, TV, trailers, advertising, games. One catalog, one contact, worldwide clearance through Sony Music Publishing and Kobalt.', uk: 'Кіно, ТБ, трейлери, реклама, ігри. Один каталог, один контакт, світове очищення прав через Sony Music Publishing і Kobalt.' } },
  { title: 'Catalog Acquisition', text: { en: 'We buy or manage catalogs: transparent reporting, platform optimization, sync placements.', uk: 'Купуємо або керуємо каталогами: прозора звітність, оптимізація на платформах, sync-розміщення.' } },
  { title: 'Sublabel Partnership', text: { en: 'Keep your brand and A&R. Use our distribution, marketing, legal and reporting infrastructure.', uk: 'Зберігаєте свій бренд і A&R. Користуєтесь нашою дистрибуцією, маркетингом, юридичною підтримкою і звітністю.' } }
];

ENKO.TESTIMONIALS = [
  { who: 'Universal Music Group', quote: { en: '[Quote pending]', uk: '[Цитата на погодженні]' } },
  { who: 'Sony Music Publishing', quote: { en: '[Quote pending]', uk: '[Цитата на погодженні]' } }
];

ENKO.DEPTS = [
  { id: 'distribution', title: { en: 'Artists & Distribution', uk: 'Артисти і дистрибуція' }, email: 'distribution@enkomusic.com', desc: { en: 'Demos, releases, catalog', uk: 'Демо, релізи, каталог' } },
  { id: 'licensing', title: { en: 'Licensing & Sync', uk: 'Ліцензування і sync' }, email: 'licensing@enkomusic.com', desc: { en: 'Film, TV, ads, games [TBC email]', uk: 'Кіно, ТБ, реклама, ігри [TBC пошта]' } },
  { id: 'business', title: { en: 'Business & Investment', uk: 'Бізнес та інвестиції' }, email: 'business@enkomusic.com', desc: { en: 'Partnerships, catalogs, sublabels [TBC email]', uk: 'Партнерства, каталоги, саблейбли [TBC пошта]' } },
  { id: 'press', title: { en: 'Press', uk: 'Преса' }, email: 'press@enkomusic.com', desc: { en: 'Interviews, media requests [TBC email]', uk: 'Інтерв\'ю, медіазапити [TBC пошта]' } }
];

ENKO.FAQ = {
  en: [
    { q: 'What is ENKO?', a: 'ENKO is a full-cycle music company from Ukraine: distribution, publishing and marketing under one roof. Founded in Kyiv in 2020, offices in Kyiv and Warsaw, 170 artists, 19.5B+ streams.' },
    { q: 'How do I send a demo?', a: 'Email distribution@enkomusic.com with streaming links to your best tracks. Every submission is reviewed within 14 business days.' },
    { q: 'Which markets do you cover?', a: 'All major platforms worldwide through Universal Music Group, 150+ services. Active markets: Ukraine, Poland, Europe and the US.' },
    { q: 'Do you offer advances?', a: 'Yes. Advances are based on performance data and growth potential. Each deal is structured individually.' },
    { q: 'Can you help with sync and licensing?', a: 'Yes. Our publishing arm with Sony Music Publishing and Kobalt clears placements for film, TV, advertising and games worldwide.' },
    { q: 'How does a sublabel partnership work?', a: 'You keep your brand and A&R. We provide distribution, marketing, legal support and reporting.' }
  ],
  uk: [
    { q: 'Що таке ENKO?', a: 'ENKO: музична компанія повного циклу з України. Дистрибуція, паблішинг і маркетинг в одному місці. Заснована в Києві у 2020 році, офіси в Києві та Варшаві, 170 артистів, 19.5B+ стрімів.' },
    { q: 'Як надіслати демо?', a: 'Напишіть на distribution@enkomusic.com з посиланнями на найкращі треки у стрімінгу. Кожну заявку розглядаємо протягом 14 робочих днів.' },
    { q: 'Що входить у дистрибуцію?', a: 'Реліз на 150+ платформ через Universal Music Group, персональний менеджер, пітчинг редакторам, звітність по кожному стріму, юридична підтримка.' },
    { q: 'Чи є аванси?', a: 'Так. Аванси розраховуємо за даними стрімінгу і потенціалом росту. Кожна угода структурується окремо.' },
    { q: 'Чи допомагаєте з маркетингом?', a: 'Так. Промоплан на кожен реліз, платні кампанії у Facebook, TikTok і YouTube, інфлюенсери. Маркетинг ведемо разом із партнером LYRA.' },
    { q: 'Як працює паблішинг?', a: 'Реєструємо ваші твори через Sony Music Publishing і Kobalt, відстежуємо і збираємо роялті по всьому світу, шукаємо sync-розміщення.' }
  ]
};
