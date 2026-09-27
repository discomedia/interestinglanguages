import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Kichwa",
    relationship: "Northern Quechuan languages and Ecuadorian standard",
    explanation: cited(
      "Kichwa is the name many Ecuadorian communities use for their northern Quechuan languages. Related forms also reach Colombia and Amazonian Peru. Its own history, word forms, and school standard deserve their own course.",
      "wiki-quechuan",
      "ecuador-eib"
    )
  },
  {
    name: "Southern Quechua",
    relationship: "Largest interconnected Quechuan branch and standard cluster",
    explanation: cited(
      "Southern Quechua links Ayacucho, Cusco-Collao, South Bolivian, and nearby forms. Their writing can look similar while sounds and everyday words differ. This guide names Cusco-Collao when an example relies on its stop sounds.",
      "minedu-southern",
      "wiki-southern"
    )
  },
  {
    name: "Central Quechua",
    relationship: "Diverse sister branch within Quechuan",
    explanation: cited(
      "Central Quechua includes languages of Ancash, Huánuco, Pasco, Junín, and parts of Lima. Some have sounds or word endings absent from Southern courses. Begin with a local name and source before transferring a familiar Southern form.",
      "bdpi-quechua",
      "minedu-central"
    )
  },
  {
    name: "Aymara",
    slug: "aymara",
    relationship: "Unrelated Andean neighbor shaped by long contact",
    explanation: cited(
      "Quechuan and Aymaran languages share some words and sentence patterns after long contact. Scholars have not established one common ancestor for them. A shared Andean feature is evidence to investigate, not a reason to merge the families.",
      "glottolog-quechuan",
      "wiki-quechuan"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const quechuaGuide = {
  slug: "quechua",
  name: "Quechua",
  autonym: "Runasimi / Runa shimi",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Quechua names a family of related Andean languages. Speakers use them at home, in schools, on radio, and in public life across several countries.",
  family: "Quechuan",
  macroRegion: "Andes and adjacent Amazonian lowlands",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Start with a community's Quechua. Hear how a small ending changes a claim, then follow the language through family talk, radio, classrooms, poetry, and film.",
  hero: {
    imageAlt: "Contemporary Quechua writing and conversation representing several living Andean communities.",
    callToActionLabel: "Hear Quechua in use"
  },
  classification: "A family of related Quechuan languages, conventionally divided into Central Quechua and a widely dispersed Quechua II branch",
  speakerCommunity: "Quechuan languages stretch from Colombia and Ecuador through Peru and Bolivia to Chile, Argentina, and Brazil. People also speak them in coastal cities and overseas. The family includes distinct local languages, so a single global speaker total can hide more than it tells.\n\nPeru's 2017 census recorded 3,805,531 people who had learned Quechua in childhood. Bolivia's 2024 census separates childhood language, language of greatest use, and other languages spoken. Those questions measure different things, and none tells you every speaker's current fluency.\n\nSpeakers include teachers, health workers, market traders, artists, broadcasters, farmers, students, and urban families. Many also speak Spanish. Some younger people are reclaiming a language that earlier schooling or discrimination interrupted.",
  facts: [
    { label: "Family", value: "Quechuan · dozens of named languages and varieties" },
    { label: "Core branches", value: "Quechua I (Central) and Quechua II (northern, peripheral, and southern groups)" },
    { label: "Peru census", value: "3,805,531 learned Quechua in childhood (2017)" },
    { label: "Geographic span", value: "Seven South American countries in Peruvian official documentation" },
    { label: "Common self-names", value: "Runasimi, Runa shimi, Qichwa, Qhichwa, Kichwa, and local names" },
    { label: "Writing", value: "Several Latin-based official and community orthographies" }
  ],
  learnerOverview: "Before you choose a course, decide whose speech you want to understand. A Cusco course can help around Cusco, but it won't prepare you automatically for Ancash Quechua or Ecuadorian Kichwa. Ask your teacher which town and family variety their examples reflect.\n\nThis guide uses Cusco-Collao Southern Quechua for its main sound and grammar examples. It labels Ayacucho and Ecuadorian Kichwa forms when they appear. Keep the spelling and a recording with each new phrase so you don't blend forms from several communities.\n\nIn allillanmi, “I'm well,” the small ending -mi presents the answer as a grounded statement. You can learn that piece inside a real exchange before studying its full range. Pair a writing manual with radio or conversation, since the page and the speaker teach different skills.",
  origins: {
    overview: cited(
      "Quechuan languages existed before the Inca state. Linguists trace them to an earlier common ancestor, with deep diversity in central Peru. They still debate the exact homeland and routes of expansion.\n\nThe Inca state spread an interregional Quechua across a multilingual empire. Other languages continued to be spoken, and several Quechuan branches had histories of their own. Quechua later spread further under colonial rule as officials and missionaries used it for administration and religious teaching.\n\nDomingo de Santo Tomás published a grammar and dictionary in 1560. Those books show an established language being written for colonial purposes; they don't record every community's speech.",
      "wiki-quechuan",
      "glottolog-quechuan",
      "minedu-southern"
    ),
    timeline: [
      {
        period: "Before the Inca state",
        event: cited(
          "Proto-Quechuan diversified over many centuries. Central Peruvian varieties retain especially deep differences, and place names plus contact vocabulary show an Andes that was always multilingual. Any single date or map of 'the first Quechua' is a hypothesis, not settled memory.",
          "glottolog-quechuan",
          "wiki-quechuan"
        )
      },
      {
        period: "15th–early 16th centuries",
        event: cited(
          "The Inca state spread an interregional Quechua through administration, resettlement, military movement, and exchange. Its prestige helps explain Southern Quechua's reach, while northern and central branches followed other histories too.",
          "wiki-quechuan",
          "minedu-southern"
        )
      },
      {
        period: "1560–18th century",
        event: cited(
          "Grammars, dictionaries, sermons, legal records, songs, and the Huarochiri Manuscript created a large alphabetic archive. Colonial authorities first promoted a general Quechua for conversion, then increasingly imposed Spanish; written sources must be read for Indigenous voices and colonial mediation together.",
          "wiki-quechuan",
          "minedu-southern"
        )
      },
      {
        period: "19th–20th centuries",
        event: cited(
          "Nation-building and Spanish-only schooling stigmatized Quechua in many public settings, even while families, agricultural communities, mines, markets, music, theater, and regional radio sustained it. Peru recognized Quechua officially in 1975 and developed multiple grammars and dictionaries rather than one generic manual.",
          "minedu-southern",
          "bdpi-quechua"
        )
      },
      {
        period: "2010s–2026",
        event: cited(
          "Language-rights laws, interpreter programs, intercultural bilingual education, census translation, public broadcasting, community projects, and digital tools have expanded visible domains. Implementation remains uneven: formal recognition does not by itself end discrimination or restore transmission in every locality.",
          "bdpi-quechua",
          "bolivia-ine",
          "ecuador-eib",
          "radio-nuqanchik"
        )
      }
    ],
    contactHistory: cited(
      "Quechuan and Aymaran speakers have lived together for centuries. Their languages share sounds, words, and ways to build sentences, though specialists still debate the age and direction of particular borrowings. Northern Kichwa also met Amazonian and other northern languages.\n\nSpanish brought new words and public institutions. Bilingual speakers fitted loans into Quechua sentences, while regional Spanish took words such as cancha, chacra, llama, and puma. Listen to the setting before calling a borrowed word unusual: it may be ordinary local speech.",
      "wiki-quechuan",
      "minedu-southern",
      "ecuador-eib"
    ),
    standardization: cited(
      "No single spelling authority represents every Quechuan language. Peru's education ministry worked with teachers, community representatives, and specialists on separate Southern and Central writing manuals. Ecuador publishes Kichwa materials under its own educational standard.\n\nPeru's Southern standard uses the vowel letters a, i, and u. Near the deep-back consonant q, i and u can sound closer to e and o; some Cusco writers prefer five vowel letters. These choices affect readers, teachers, and literary traditions, so follow the convention used by the community whose work you read.",
      "bdpi-quechua",
      "minedu-southern",
      "minedu-central",
      "ecuador-eib"
    )
  },
  variants: {
    overview: cited(
      "Quechua names a family, and speakers of some distant varieties cannot understand one another without learning. Linguists often group the family into Quechua I, centered in Peru's central highlands, and a more dispersed Quechua II. Neither label tells you exactly what someone speaks in one town.\n\nMigration also brings varieties together in cities. Ask about a speaker's locality, generation, and preferred name for their language. You will learn more than you would from calling one form “pure.”",
      "glottolog-quechuan",
      "bdpi-quechua"
    ),
    items: [
      { name: "Ayacucho / Chanka Quechua", note: cited("A major Southern variety used in Ayacucho and nearby regions. It lacks the contrasting breathy and ejective stops heard in Cusco-Collao. Similar written words can therefore sound quite different.", "minedu-southern", "soto-ayacucho") },
      { name: "Cusco-Collao Quechua", note: cited("Cusco-Collao speech links communities around Cusco, Puno, and neighboring Bolivia. In many places, k, kh, and k' are different sounds that can distinguish words. Course materials from Cusco are common, but they do not represent all Quechua.", "minedu-southern", "wiki-southern") },
      { name: "South Bolivian Quechua", note: cited("Speakers use South Bolivian Quechua in Cochabamba, Chuquisaca, Potosí, and cities reached through migration. It shares much with Southern Quechua across the border. Its local sounds, words, and contact with Spanish still deserve separate attention.", "bolivia-ine", "wiki-southern") },
      { name: "Central Quechua languages", note: cited("Central Quechua spans Áncash, Huánuco, Pasco, Junín, and highland Lima. Its varieties differ among themselves and can mark vowel length or consonants a Southern course omits. Use Peru's Central manual, then move to materials for the place you need.", "minedu-central", "bdpi-quechua") },
      { name: "Ecuadorian and Colombian Kichwa", note: cited("Ecuadorian Kichwa includes highland and Amazonian speech alongside a school standard. Its vocabulary and endings differ from Southern Quechua. Colombian Inga belongs to the northern history but has its own community identity.", "ecuador-eib", "wiki-quechuan") },
      { name: "Peripheral and endangered varieties", note: cited("Cajamarca, Lambayeque, Yauyos, Pacaraos, Amazonian, and Argentine communities complicate a simple map. Some varieties have strong local use; others have fewer young speakers. Check each community's situation rather than applying one label to the whole family.", "bdpi-quechua", "yauyos-grammar") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Begin with the sound behind the letter q. Your tongue makes it farther back than k, and the nearby vowel can change color. Many Southern words carry stress near the end, usually on the next-to-last syllable.\n\nCusco-Collao speakers also contrast plain, breathy, and sharply released stops: k, kh, and k'. The last is called ejective; the apostrophe marks a real sound difference. Ayacucho speech lacks this three-way stop contrast, while some Central languages have vowel length or consonants a Southern chart omits.",
      "minedu-southern",
      "minedu-central"
    ),
    script: "Latin alphabet; examples use official-style Southern spelling, mainly Cusco-Collao, with other varieties labeled",
    soundSystem: cited(
      "In the three-vowel Southern spelling, a, i, and u represent the main vowel categories. Beside q, i and u can sound like e and o to a Spanish speaker. That helps explain why the Quechua word qucha, “lake,” appears as cocha in many Spanish place names.\n\nThe letters ll, ñ, and ch each name a consonant sound. Cusco-Collao also distinguishes q from k and marks breathy or ejective versions with h or an apostrophe. Copy those marks from a local source rather than adding them to words from another variety.",
      "minedu-southern",
      "unicode-latin"
    ),
    prosody: cited(
      "A Quechua word can carry several endings and still have a steady rhythm. Say wasi, “house,” then add one ending at a time before reading the whole word again. In Cusco-Collao speech, the next-to-last syllable is a good starting point for stress.\n\nQuestions and emphatic particles change the sound of a full phrase.\n\nRecord the exchange Allillanchu? Allillanmi from a speaker. It teaches a rhythm that a word list cannot show.",
      "minedu-southern",
      "ut-quechua"
    ),
    learnerTraps: [
      "Pronouncing every variety through Spanish, especially replacing uvular q with velar k",
      "Adding Spanish e and o to a three-vowel standard without understanding predictable lowering near q",
      "Ignoring the difference among plain, aspirated, and ejective stops in Cusco-Collao",
      "Assuming a Cusco recording models Ayacucho, Bolivian, Central, or Ecuadorian speech",
      "Reading long suffix chains as separate stressed words instead of one organized unit"
    ],
    sampleWords: [
      { original: "wasi", translation: "house", note: "A clear two-syllable Southern teaching word: WA-si, with penultimate stress." },
      { original: "qhari", translation: "man; male person [Cusco-Collao]", note: "Make the opening q farther back than k. Check local forms before carrying this word to another variety." },
      { original: "qucha", translation: "lake [Southern three-vowel spelling]", note: "The u sounds lowered beside q, explaining the familiar Spanish spelling cocha." },
      { original: "kanki", translation: "you are [Cusco-Collao]", note: "The ending -nki points to one person addressed. Compare kani, “I am.”" },
      { original: "k'anchay", translation: "light; to illuminate [Cusco-Collao]", note: "Release k' sharply without a following puff of air; the apostrophe marks an ejective." },
      { original: "pacha", translation: "time, place, world, or situated domain", note: "Keep ch as one affricate sound; context—not a mystical one-word gloss—selects the sense." },
      { original: "ñuqanchik", translation: "we, including you [Southern]", note: "Practice initial ñ and the final chain as one word; compare exclusive ñuqayku." }
    ]
  },
  writing: {
    overview: cited(
      "Quechuan communities carried history and knowledge through spoken performance, place names, designs, and khipu long before modern alphabetic writing. Colonial writers adapted Latin letters, leaving texts with different spellings and purposes. Today's alphabets support schools, public services, books, and everyday messages.\n\nLearn the current spelling used by your target community. Keep an older or Spanish-shaped spelling beside it when you read historical texts or search an archive.",
      "minedu-southern",
      "wiki-quechuan"
    ),
    primaryScript: "Latin alphabets adapted by country and regional variety",
    romanization: cited(
      "Quechuan languages already use Latin letters, so “romanization” here means moving between spelling traditions. Cusco, Cuzco, and Qusqu can name the same place in different conventions. Quechua, Qichwa, Qhichwa, and Kichwa also reflect different histories and sounds.\n\nKeep a writer's original spelling when you quote them. If you need a search note, add your target variety's spelling beside it instead of silently replacing the original.",
      "minedu-southern",
      "ecuador-eib"
    ),
    spellingNorms: cited(
      "Peru's Southern manual writes roots and endings consistently with a, i, and u. Ecuadorian Kichwa uses its own alphabet and word forms. In Cusco-Collao spelling, an apostrophe after a consonant marks an ejective sound.\n\nDigital keyboards may produce straight, curly, or modifier apostrophes. Search more than one form when you use an online collection, but keep the sound distinction in your notes.",
      "minedu-southern",
      "ecuador-eib",
      "unicode-latin"
    ),
    styleNotes: [
      cited("Choose an orthography tied to your teacher and reading community, then remain consistent inside one exercise.", "minedu-southern"),
      cited("Keep the root visible when segmenting: wasi-kuna-pi is house-plural-in, but ordinary prose writes one word, wasikunapi.", "minedu-southern"),
      cited("Expect colonial, academic, ministry, and community publications to differ. Variation is a reading skill, not proof that spelling is impossible.", "minedu-central", "minedu-southern"),
      cited("Use Unicode-aware fonts and search both straight and modifier apostrophes when working with ejectives in digital collections.", "unicode-latin")
    ]
  },
  grammar: {
    overview: cited(
      "Take wasi, “house,” and add -pi: wasipi means “in the house.” Many Quechuan words grow by adding ordered endings to a root. Linguists call this agglutination.\n\nThe pieces have recognizable jobs, but their order and exact form vary. The examples below focus on Cusco-Collao Southern Quechua. Treat them as an entry to that variety, not a model for the whole family.",
      "minedu-southern",
      "wiki-quechuan"
    ),
    typologicalProfile: cited(
      "Quechuan speakers usually put the verb after the object in a plain statement, though they can move words to highlight a topic. Nouns take endings for place, direction, possession, and other relationships. Verbs show who acts and can also show whom they affect.\n\nQuechua has no Spanish-style masculine and feminine agreement on adjectives. Small endings can show how a speaker knows or presents information; these are often called evidentials. In a longer sentence, another ending can show whether two actions share the same subject, a pattern called switch-reference.",
      "wiki-quechuan",
      "yauyos-grammar"
    ),
    morphology: cited(
      "Start with wasi, “house.” Wasiy means “my house,” wasikuna “houses,” and wasikunapi “in the houses.” Each ending adds one piece of meaning.\n\nA verb can grow the same way: riku- means “see,” rikurqanki “you saw,” and rikuwanki “you see me.” Learn the sound of each whole word as well as its parts. The pieces may change shape in another variety or in fast speech.",
      "ut-quechua",
      "minedu-southern"
    ),
    syntax: cited(
      "In a simple Southern sentence, Mariya tantata mikun means “Maria eats bread.” The ending -ta marks bread as the object, and the verb comes last. Add -qa after Mariya to make her the topic of conversation.\n\nSpeakers can shift order and attach small particles to highlight new information. A clause describing a noun usually comes before that noun. Spanish–Quechua bilingual speech may use another order, so listen to local speakers before treating one textbook pattern as compulsory.",
      "wiki-quechuan",
      "minedu-southern"
    ),
    advancedPainPoints: [
      "Hearing several suffixes in rapid speech rather than only parsing them on paper",
      "Choosing evidential and discourse particles naturally instead of treating them as optional decoration",
      "Maintaining one variety while learning to recognize neighboring forms",
      "Following switch-reference across long narratives",
      "Separating community usage from Spanish calques and invented pan-Quechua forms"
    ],
    topics: [
      {
        title: "Case suffixes make relationships visible",
        body: cited("Nouns mark roles with endings: -ta commonly marks an object, -pi a location, and -man a direction. The ending -manta can mean “from” or “about.” In Wawa wasimanta chakraman rin, the child moves from the house toward the field.", "minedu-southern", "ut-quechua"),
        example: "Wawa wasimanta chakraman rin.",
        exampleTranslation: "The child goes from the house to the field. [Cusco-Collao teaching example]"
      },
      {
        title: "Inclusive and exclusive ‘we’",
        body: cited("Southern Quechua distinguishes ñuqanchik, “we including you,” from ñuqayku, “we excluding you.” The difference changes invitations, political speeches, and family plans. A translation that simply says “we” loses information about whether the listener belongs inside the group.", "wiki-quechuan", "minedu-southern"),
        example: "Ñuqanchik kuska llamk'asunchik; ñuqayku paqarin kutimusqayku.",
        exampleTranslation: "Let us (you and I) work together; we (not you) will return tomorrow. [Cusco-Collao Southern]"
      },
      {
        title: "Evidentials position a claim",
        body: cited("A speaker can add -mi/-m to present a claim as directly grounded, -si/-s to pass on a report, or -chá to mark a possibility. These endings also interact with what the sentence highlights. The rain forms below are a constructed Cusco-Collao teaching contrast; the last form is recorded in a Quechua dictionary, while the marker study supports the pattern.", "quechua-evidentials", "calvo-dictionary"),
        example: "Paramunmi. / Paramunsi. / Paramunqachá.",
        exampleTranslation: "It is raining (directly grounded). / Reportedly it is raining. / It will probably rain. [Constructed Cusco-Collao contrast; forms may vary in spontaneous speech]"
      },
      {
        title: "Topic and focus organize conversation",
        body: cited("The topic marker -qa frames what a clause concerns, while evidential enclitics often attach to the focused constituent. In Taytayqa chakrapim llamk'an, “As for my father, he works in the field,” -qa keeps father as topic and -m foregrounds the location. English word stress performs only part of this work.", "wiki-quechuan", "minedu-southern"),
        example: "Kay libruqa Qusqupim ruwasqa karqan.",
        exampleTranslation: "As for this book, it was made in Cusco. [Cusco-Collao teaching example]"
      },
      {
        title: "Verbs can index two participants",
        body: cited("A verb can point to the person acting and the person affected. In rikuwanki, -wa points to “me” and -nki to “you”: “you see me.” Compare rikuyki, “I see you”; the endings change the roles without two separate pronouns.", "cuzco-verb-study", "wiki-quechuan"),
        example: "Rikuwanki. Rikuyki.",
        exampleTranslation: "You see me. I see you. [Cusco-Collao verb forms attested separately in a specialist study]"
      },
      {
        title: "Switch-reference links events",
        body: cited("An ending on an earlier verb can tell you who takes part in the later action. In Southern Quechua, -spa commonly links actions by the same subject, while -pti- can introduce a different subject. Compare hamuspa mikurqani, “I came and ate,” with pay hamuptin mikurqani, “when that person came, I ate.”", "minedu-southern", "wiki-quechuan"),
        example: "Hamuspa rimarqani; pay hamuptin uyarirqani.",
        exampleTranslation: "I came and spoke; when he/she came, I listened. [Cusco-Collao teaching contrast]"
      },
      {
        title: "Negation wraps around the clause",
        body: cited("Southern Quechua commonly pairs mana “not” with the suffix -chu on the negated word or predicate: Manam yachanichu, “I do not know.” Ama forms prohibitions, often with a negative imperative construction: Ama llullakuychu, “Do not lie.” The -chu ending also participates in questions, so intonation and the preceding word matter.", "minedu-southern", "wiki-southern"),
        example: "Manam qichwata allinta rimanichu; yachakuchkanim.",
        exampleTranslation: "I do not speak Quechua well; I am learning. [Cusco-Collao teaching example]"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Quechuan languages live in highland villages, Amazonian communities, provincial capitals, and large cities. You can hear them at home, on radio, in a clinic, in a market, or through a phone. The language people choose can change with the setting.\n\nA map cannot show all of that movement. Census counts also depend on whether officials ask what someone learned as a child or what they use now. Keep the question and year beside every figure.",
      "bdpi-quechua",
      "bolivia-ine"
    ),
    regions: [
      { place: "Peru", note: cited("Peru contains the family's greatest diversity. The 2017 census recorded more than 3.8 million people who learned Quechua in childhood, but individual varieties range from broadly used Southern forms to severely endangered local languages.", "bdpi-quechua") },
      { place: "Bolivia", note: cited("Quechua is an official Indigenous language and a major part of multilingual life, especially in Cochabamba, Chuquisaca, and Potosi. The 2024 census publishes language learned, current use, and multilingualism separately.", "bolivia-ine") },
      { place: "Ecuador and Colombia", note: cited("Highland and Amazonian Kichwa communities use related northern languages across national borders. Ecuador's bilingual-education institutions publish dictionaries, pedagogical grammar, readers, and teacher materials.", "ecuador-eib") },
      { place: "Argentina and Chile", note: cited("Santiagueño Quechua in Argentina and Southern Quechua in border and migrant communities show that the family is not confined to the central Andean republics. Local histories and norms must guide learning.", "wiki-quechuan") },
      { place: "Urban and international diasporas", note: cited("Migration carries family varieties into coastal cities and overseas communities. Heritage learners may understand grandparents, sing, or recognize household speech without writing the official standard; that partial knowledge is a starting point, not a failure.", "bdpi-people") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "If you read Spanish or English, the Latin script gives you a familiar starting point. Repeating suffixes can also make long words easier to unpack. The hard part is finding audio, texts, and correction for the same local variety.\n\nSpanish can help you reach teachers and manuals. It can also pull your pronunciation toward Spanish and hide the difference between q and k. If you mainly use English, work with a bilingual teacher or choose a course with clear translations and recordings.",
      "dd-less-common",
      "minedu-southern"
    ),
    easierAspects: [
      "Many suffixes have recognizable recurring functions",
      "No grammatical gender agreement like Spanish",
      "Latin-based spelling and strong official manuals for some varieties",
      "Flexible word order allows meaning to remain recoverable while style develops"
    ],
    hardAspects: [
      "Large family diversity and unevenly labeled learning materials",
      "Dense suffix chains in ordinary speech",
      "Evidential, topic, focus, and interpersonal particles with no neat English equivalent",
      "Variety-specific sounds such as ejectives, aspiration, uvulars, or vowel length",
      "Unequal social domains and limited transcripted contemporary media"
    ],
    plateauRisks: [
      "Studying a pan-Quechua vocabulary without one stable pronunciation model",
      "Reading morphology for months without training rapid listening",
      "Treating every missing Spanish equivalent as an ancient worldview claim",
      "Speaking only with learners and never asking speakers about locality, age, or register"
    ],
    workload: cited(
      "Begin with one structured course for your chosen variety, one speaker who can correct you, and one recurring audio source. Discover Discomfort recommends combining a course, sentences, sound, and human feedback when resources are scattered. In Quechua, check that those pieces all point to the same variety.\n\nAfter basic greetings, follow one topic that matters in your life: family stories, radio news, work, songs, or local history. Repeated listening will teach you suffixes and speech rhythm that a list of isolated words cannot.",
      "dd-less-common"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Write the speaker's locality and spelling beside every recording or text you save. Transcribe a short clip before looking at a caption, then ask a teacher which endings sound local and which belong to formal writing.\n\nRetell one story in conversation and in a written message. You will hear which forms change with the audience. Keep a separate note for a neighboring variety instead of folding every new form into one list.",
      "dd-less-common",
      "minedu-southern"
    ),
    mediaPractice: cited(
      "Listen to Ñuqanchik for planned public news, then try community radio or an interview from your chosen region. News repeats public vocabulary; a conversation shows pauses, code-switching, and local particles. Compare the same topic across both.\n\nSongs and films show other voices, including urban life and new art. Record a short passage and ask a speaker what sounds formal, playful, or regionally marked.",
      "radio-nuqanchik",
      "bdpi-people"
    ),
    dictionariesAndCorpora: cited(
      "Use a dictionary tied to the variety in front of you. Clodoaldo Soto's Ayacucho works help with Ayacucho forms; Ecuador's ministry publishes Kichwa materials; Central texts need Central references. Qichwa 2.0 offers searchable tools, but check each entry's source.\n\nSearch a word in two full sentences before copying it into your own. A bilingual gloss may miss tone, register, or a local meaning.",
      "soto-ayacucho",
      "ecuador-eib",
      "qichwa20",
      "yauyos-grammar"
    ),
    resources: [
      { type: "book", title: "Peruvian Ministry Southern Quechua Writing Manual", url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/7190", level: "all", description: cited("A community-informed reference for Southern classification, alphabets, roots, suffixes, punctuation, and standardized writing.", "minedu-southern") },
      { type: "book", title: "Peruvian Ministry Central Quechua Writing Manual", url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/8170", level: "intermediate", description: cited("Essential evidence that Central Quechua cannot be learned as a footnote to Southern norms.", "minedu-central") },
      { type: "dictionary", title: "Qichwa 2.0", url: "https://qichwa.net/en/", level: "all", description: cited("Search tools and digitized Quechua resources; verify each result against the variety named in the underlying work.", "qichwa20") },
      { type: "media", title: "Ñuqanchik — Radio Nacional del Perú", url: "https://www.radionacional.gob.pe/programas/nuqanchik", level: "intermediate", description: cited("A recurring public-news source for careful contemporary Quechua listening and shadowing.", "radio-nuqanchik") },
      { type: "course", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A practical method for building a Quechua study stack when resources are scattered: structured course, sentences, audio, correction, and people.", "dd-less-common") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Runa can mean “person,” but its social meaning changes with a speaker and setting. Pacha can point to time, place, weather, or a world understood in context. Learn these words in phrases rather than assigning each a grand single English meaning.\n\nA story can pass through live telling, a schoolbook, radio, and film. Compare what each version keeps and changes. No one format owns the language.",
      "bdpi-people",
      "minedu-southern"
    ),
    notableWords: [
      { term: "runa", meaning: "person; people; human", note: cited("The source of Runasimi, literally “people's speech.” Its social range varies, so do not turn it automatically into a racial label.", "bdpi-people") },
      { term: "simi / shimi", meaning: "mouth; language; speech", note: cited("Southern simi and northern shimi show a regular regional sound correspondence and a semantic path from mouth to speech/language.", "ecuador-eib", "minedu-southern") },
      { term: "pacha", meaning: "time, place, world, weather, situated sphere", note: cited("Compounds and context select among connected senses. Pachamama is a relational being and named concept, not proof that pacha has one English equivalent.", "bdpi-people") },
      { term: "ayllu", meaning: "kin and community group; locally organized social unit", note: cited("Its historical and present institutions vary. Translating it as either “family” or “clan” can erase land, reciprocity, descent, and political dimensions.", "bdpi-people") },
      { term: "minka / mink'a", meaning: "organized collective work", note: cited("The exact institution and spelling vary across the Andes. Ask who calls the work, who takes part, and how participants return the help.", "bdpi-people") },
      { term: "yachay", meaning: "to know; knowledge; learning", note: cited("A productive root appears in yachachiq “teacher” and yachakuy “to learn.” Suffixes show relationships among knowing, teaching, and becoming knowledgeable.", "minedu-southern") },
      { term: "sunqu / shunku", meaning: "heart; inner feeling or disposition", note: cited("Regional sound and spelling vary. It occurs in affectionate and evaluative expressions but should not be given one universal Andean philosophy.", "ecuador-eib", "minedu-southern") }
    ],
    loanwordLayers: cited(
      "Quechua speakers add their own endings to many Spanish loans. A word for a modern institution may enter through Spanish, while teachers may choose or coin a Quechua term. Ask whether a form belongs to everyday talk, a school standard, or official writing.\n\nBorrowing also went the other way. Spanish and other languages took Quechua words such as papa, puma, llama, and quinoa through different routes. Word history can illuminate a text without dividing today's vocabulary into pure and impure parts.",
      "wiki-quechuan",
      "minedu-southern"
    ),
    idioms: [
      { original: "Pisi pisillamanta", translation: "Little by little.", note: "Literally “from a very small amount at a time”; a Southern expression for gradual progress whose repeated diminutive is warmer and more emphatic than a bare “slowly.”" },
      { original: "Ama llulla, ama suwa, ama qilla", translation: "Do not lie, do not steal, do not be idle.", note: "Widely circulated pan-Andean ethical maxim in modern public life. Spellings vary; avoid presenting its familiar three-part form as an uncontested verbatim law from antiquity." },
      { original: "Tupananchikkama", translation: "Until we meet again.", note: "Literally “until our inclusive meeting”; a farewell whose inclusive -nchik keeps speaker and addressee inside the anticipated reunion." },
      { original: "Ama hina kaspa", translation: "Please; if you would be so kind.", note: "Literally “not being like that”; a Southern politeness formula rather than a direct lexical equivalent of English “please.” Tone and relationship matter." }
    ],
    textGenres: [
      "Oral narratives, riddles, songs, prayers, speeches, and testimonies shaped by performance and audience",
      "Colonial manuscripts, grammars, legal petitions, doctrinal texts, and the multilingual Huarochiri archive",
      "Modern poetry, novels, bilingual editions, memoir, theater, and children's literature",
      "Community radio, public news, football commentary, podcasts, and social video",
      "Huayno and other regional song traditions alongside hip-hop, rock, electronic music, and Q-pop",
      "Quechua-language and bilingual cinema concerned with migration, racism, family, land, humor, and contemporary aspiration"
    ]
  },
  relationships: {
    overview: cited(
      "Kichwa, Central Quechua, and Southern Quechua descend from earlier Quechuan speech. Their family tie does not mean speakers can all understand one another. Compare specific varieties instead of using “Quechua” as if it named one uniform language.\n\nAymaran languages belong to a different family. Long contact made some Quechuan and Aymaran forms look alike; shared structure alone does not prove one ancestor. Spanish brought another long layer of contact and now shapes many bilingual conversations.",
      "glottolog-quechuan",
      "wiki-quechuan"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Ask what speakers call their language: Quechua, Qichwa, Qhichwa, Kichwa, Runasimi, or a local name. Pay teachers and translators, and ask before recording or sharing anyone's story.\n\nEarlier punishment, discrimination, and migration disrupted transmission in some families. A heritage learner may bring both pride and pain to a lesson. Treat partial understanding as a place to begin.\n\nQuechua belongs in courts, clinics, classrooms, songs, film, public debate, and family jokes. Many speakers also use Spanish. Follow their choices rather than demanding a single “pure” way to speak.",
  resources: [
    { type: "course", title: "Discover Discomfort: Best Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("Includes Quechua and shows how to combine a course, audio, a tutor, and community sources when materials are scattered.", "dd-less-common") },
    { type: "book", title: "Urin Qichwa Qillqay Yachana Mayt'u — Southern Quechua Writing Manual", url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/7190", level: "all", description: cited("Peru's Southern manual explains sound–spelling relationships, suffix writing, punctuation, and how its orthography was developed.", "minedu-southern") },
    { type: "book", title: "Chawpin qichwata qillqanapaq maytu — Central Quechua Writing Manual", url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/8170", level: "intermediate", description: cited("A teacher- and community-developed Central Quechua guide that prevents a Southern-only view of the family.", "minedu-central") },
    { type: "dictionary", title: "Ecuador Intercultural Bilingual Education Kichwa Resources", url: "https://educacion.gob.ec/recursos-de-apoyo-eib/", level: "all", description: cited("Official Kichwa–Spanish dictionary, pedagogical grammar, readers, and teaching units for Ecuadorian learners and educators.", "ecuador-eib") },
    { type: "dictionary", title: "Qichwa 2.0", url: "https://qichwa.net/en/", level: "all", description: cited("A searchable Quechua language and knowledge project with tools for learners; always check the variety attached to an entry.", "qichwa20") },
    { type: "book", title: "A Grammar of Yauyos Quechua", url: "https://open.umn.edu/opentextbooks/textbooks/a-grammar-of-yauyos-quechua", level: "advanced", description: cited("An open descriptive grammar showing how a specific, internally varied Quechuan area works beyond Southern textbook generalizations.", "yauyos-grammar") },
    { type: "media", title: "Ñuqanchik", url: "https://www.radionacional.gob.pe/programas/nuqanchik", level: "intermediate", description: cited("Quechua public news from Peru for repeated listening, vocabulary mining, and comparison with less formal regional media.", "radio-nuqanchik") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Rimaykullayki.", translation: "Hello; greetings. [Southern, polite]", literalMeaning: "I respectfully speak/greet you.", usageNote: "Common teaching greeting in Southern Quechua; local everyday openings vary." },
    { original: "Allillanchu?", translation: "Are you well? How are you? [Southern]", literalMeaning: "Just well?", usageNote: "A natural exchange is Allillanchu? Allillanmi." },
    { original: "Allillanmi.", translation: "I'm well. [Southern]", literalMeaning: "I am indeed just fine.", usageNote: "The evidential/validator -mi makes this more than a bare dictionary adjective." },
    { original: "Sulpayki.", translation: "Thank you. [Cusco-Collao / Southern regional]", usageNote: "Widely taught around Cusco; other communities prefer forms such as añay or pachi, so copy your hosts." },
    { original: "Ama hina kaspa.", translation: "Please; if you would be so kind. [Southern]", literalMeaning: "Not being like that.", usageNote: "Use it as a politeness formula, not as a word-for-word universal “please.”" },
    { original: "Manam hamutanichu.", translation: "I don't understand. [Ayacucho-style Southern]", usageNote: "Cusco-area speech often uses a form based on hap'iy/entiendiy or different pronunciation; ask locally." },
    { original: "Musuqmanta niway.", translation: "Tell me again. [Southern]", literalMeaning: "Say it to me from new/again.", usageNote: "A lesson phrase; ni-wa-y combines say, first-person object, and imperative." },
    { original: "Aswan pisillata rimaykuway.", translation: "Please speak a little more slowly/less. [Southern teaching phrase]", literalMeaning: "Speak to me a little less/more gently.", usageNote: "Natural requests vary; ask your teacher to record their preferred version." },
    { original: "Qichwata yachakuchkani.", translation: "I am learning Quechua. [Southern]", usageNote: "Ayacucho and Cusco progressive forms differ in pronunciation and spelling; this is a broadly recognizable standard-style form." },
    { original: "Imataq kay simi nin?", translation: "What does this word mean? [Southern]", literalMeaning: "What does this word say?", usageNote: "Simi can mean mouth, speech, language, or word in context." },
    { original: "Maypitaq bañu kachkan?", translation: "Where is the bathroom? [Southern, with Spanish loan]", literalMeaning: "Where is the bathroom being?", usageNote: "The loan bañu is ordinary in many bilingual settings; local alternatives differ." },
    { original: "Hayk'ataq kay?", translation: "How much is this? [Cusco-Collao]", usageNote: "The ejective k' belongs to this regional pronunciation; Ayacucho spelling and sound differ." },
    { original: "Alli puncha.", translation: "Good day. [Ecuadorian Kichwa]", literalMeaning: "Good day.", usageNote: "A Kichwa greeting, included to show the northern standard rather than mix it silently into Southern speech." },
    { original: "Imashina kanki?", translation: "How are you? [Ecuadorian Kichwa]", literalMeaning: "How are you?", usageNote: "Use with Ecuadorian Kichwa speakers; it is not the default Southern formula." },
    { original: "Tupananchikkama.", translation: "Until we meet again; goodbye. [Southern]", literalMeaning: "Until our inclusive meeting.", usageNote: "A warm farewell; communities also use Spanish loans and other local closings." }
  ],
  sources: [
    { id: "dd-less-common", title: "Best Less-Common Language Learning Resources: What Actually Works", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", updatedAt: "2026-05-11", accessedAt: "2026-07-10" },
    { id: "wiki-quechuan", title: "Quechuan Languages", url: "https://en.wikipedia.org/wiki/Quechuan_languages", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-southern", title: "Southern Quechua", url: "https://en.wikipedia.org/wiki/Southern_Quechua", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-quechuan", title: "Glottolog 5.3: Quechuan", url: "https://glottolog.org/resource/languoid/id/quec1387", publisher: "Glottolog", updatedAt: "2026-03-02", accessedAt: "2026-07-10" },
    { id: "bdpi-quechua", title: "Quechua: Ficha de lengua", url: "https://bdpi.cultura.gob.pe/lenguas/quechua", publisher: "Peru Ministry of Culture, Database of Indigenous Peoples", accessedAt: "2026-07-10" },
    { id: "bdpi-people", title: "Pueblos Quechuas", url: "https://bdpi.cultura.gob.pe/pueblos/quechuas", publisher: "Peru Ministry of Culture, Database of Indigenous Peoples", accessedAt: "2026-07-10" },
    { id: "minedu-southern", title: "Urin Qichwa Qillqay Yachana Mayt'u: Manual de escritura quechua sureño", url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/7190", publisher: "Peru Ministry of Education", publishedAt: "2021", accessedAt: "2026-09-27" },
    { id: "minedu-central", title: "Chawpin qichwata qillqanapaq maytu: Manual de escritura quechua central", url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/8170", publisher: "Peru Ministry of Education", publishedAt: "2022-03", accessedAt: "2026-07-10" },
    { id: "ecuador-eib", title: "Recursos de apoyo de Educación Intercultural Bilingüe", url: "https://educacion.gob.ec/recursos-de-apoyo-eib/", publisher: "Ecuador Ministry of Education", accessedAt: "2026-07-10" },
    { id: "bolivia-ine", title: "Idiomas: Censos de Población y Vivienda 2012 y 2024", url: "https://www.ine.gob.bo/index.php/estadisticas-sociales/idiomas/", publisher: "Bolivia National Institute of Statistics", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "The Unicode Standard, Chapter 6: Writing Systems and Punctuation", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-6/", publisher: "Unicode Consortium", publishedAt: "2024", accessedAt: "2026-07-10" },
    { id: "ut-quechua", title: "Quechua Tinkuy: Cusco Quechua Lessons", url: "https://quechuatinkuy.coerll.utexas.edu/es/yachana-9/", publisher: "University of Texas at Austin, COERLL", accessedAt: "2026-09-27" },
    { id: "soto-ayacucho", title: "Gramática quechua: Ayacucho-Chanca", url: "https://glottolog.org/resource/reference/id/125480", publisher: "Glottolog bibliographic record", publishedAt: "1976", accessedAt: "2026-09-27" },
    { id: "cuzco-verb-study", title: "The Nature and Causes of Allomorphy in Cuzco Quechua", url: "https://research-repository.st-andrews.ac.uk/handle/10023/15505", publisher: "University of St Andrews", publishedAt: "1994", accessedAt: "2026-09-27" },
    { id: "calvo-dictionary", title: "Nuevo diccionario español-quechua, quechua-español, volume 2", url: "https://apl.org.pe/wp-content/uploads/2022/07/DICCIONARIO-Quechua-espanol-VOL_2.pdf", publisher: "Universidad de San Martín de Porres, hosted by Academia Peruana de la Lengua", publishedAt: "2022", accessedAt: "2026-09-27" },
    { id: "yauyos-grammar", title: "A Grammar of Yauyos Quechua", url: "https://open.umn.edu/opentextbooks/textbooks/a-grammar-of-yauyos-quechua", publisher: "Open Textbook Library, University of Minnesota", accessedAt: "2026-07-10" },
    { id: "quechua-evidentials", title: "Distribution of Evidential Markers in a Cuzco Quechua Corpus", url: "https://journals.linguisticsociety.org/proceedings/index.php/PLSA/article/view/5899", publisher: "Linguistic Society of America", publishedAt: "2025", accessedAt: "2026-07-10" },
    { id: "qichwa20", title: "Qichwa 2.0: Quechua Language and Knowledge Tools", url: "https://qichwa.net/en/", publisher: "Qichwa 2.0", accessedAt: "2026-07-10" },
    { id: "radio-nuqanchik", title: "Ñuqanchik", url: "https://www.radionacional.gob.pe/programas/nuqanchik", publisher: "Radio Nacional del Perú", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Quechua Language Guide: Varieties, Sounds, Grammar and Learning",
    description: "Meet the Quechuan language family, with Cusco-Collao examples, regional differences, sound and spelling, suffixes, practical phrases, and learning resources."
  }
} satisfies LanguageGuide;
