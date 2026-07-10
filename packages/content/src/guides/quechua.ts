import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Kichwa",
    relationship: "Northern Quechuan languages and Ecuadorian standard",
    explanation: cited(
      "Kichwa is the usual Ecuadorian spelling and the name used for a northern group of Quechuan varieties, also extending into Colombia and Amazonian Peru. It is not merely Southern Quechua with q and aspirated sounds removed: its history, grammar, regional identities, and educational standard deserve to be learned on their own terms.",
      "wiki-quechuan",
      "ecuador-eib"
    )
  },
  {
    name: "Southern Quechua",
    relationship: "Largest interconnected Quechuan branch and standard cluster",
    explanation: cited(
      "Ayacucho/Chanka, Cusco-Collao, South Bolivian, and neighboring forms belong to the Southern Quechua continuum. Shared written forms can travel widely, but ejective and aspirated consonants, vocabulary, suffix shapes, and everyday conventions differ. This guide uses Southern examples only when explicitly labeled.",
      "minedu-southern",
      "wiki-southern"
    )
  },
  {
    name: "Central Quechua",
    relationship: "Diverse sister branch within Quechuan",
    explanation: cited(
      "The Quechua I or Central languages of Ancash, Huanuco, Pasco, Junin, and Lima provinces preserve distinctions and innovations not captured by a Southern textbook. Their internal diversity is one reason a family-wide word list cannot substitute for a local teacher and grammar.",
      "bdpi-quechua",
      "minedu-central"
    )
  },
  {
    name: "Aymara",
    slug: "aymara",
    relationship: "Unrelated Andean neighbor shaped by long contact",
    explanation: cited(
      "Quechuan and Aymaran languages share striking structural and lexical features after many centuries of contact, but a common ancestor has not been demonstrated. Treating them as a single 'Quechumaran' family hides the more interesting story: bilingual communities can make unrelated languages converge.",
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
  summary: "Quechua is a family of Andean languages whose speakers make policy, raise families, trade, joke, sing, broadcast, and write across several countries—not a frozen language of the Inca past.",
  family: "Quechuan",
  macroRegion: "Andes and adjacent Amazonian lowlands",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Choose one community's Quechua and a learner discovers a remarkably transparent architecture of suffixes, subtle ways of locating knowledge, and a living cultural world extending from village radio to cinema, migration, classrooms, poetry, and digital activism.",
  hero: {
    imageAlt: "Contemporary Quechua writing and conversation representing several living Andean communities.",
    callToActionLabel: "Hear Quechua in use"
  },
  classification: "A family of related Quechuan languages, conventionally divided into Central Quechua and a widely dispersed Quechua II branch",
  speakerCommunity: "Quechuan languages are spoken from southern Colombia through Ecuador, Peru, Bolivia, northern Chile, and northwestern Argentina, as well as in coastal cities and international diasporas. Speaker totals depend on whether a census asks about childhood language, present ability, main language, or ethnic identity, and whether several varieties are combined. Peru's 2017 census recorded 3,805,531 people who learned Quechua in childhood; Bolivia's 2024 census now publishes separate tables for language learned, language of greatest use, and multilingualism. Those measures are more honest than a timeless global headline. Many speakers use Spanish too, while others are reclaiming a language interrupted by discrimination or schooling. The community includes farmers and pastoralists, teachers, nurses, lawyers, market traders, artists, programmers, broadcasters, students, and urban families. Fluency, literacy, variety, and identification do not line up in one simple way.",
  facts: [
    { label: "Family", value: "Quechuan · dozens of named languages and varieties" },
    { label: "Core branches", value: "Quechua I (Central) and Quechua II (northern, peripheral, and southern groups)" },
    { label: "Peru census", value: "3,805,531 learned Quechua in childhood (2017)" },
    { label: "Geographic span", value: "Seven South American countries in Peruvian official documentation" },
    { label: "Common self-names", value: "Runasimi, Runa shimi, Qichwa, Qhichwa, Kichwa, and local names" },
    { label: "Writing", value: "Several Latin-based official and community orthographies" }
  ],
  learnerOverview: "Before buying a book, decide whose speech you hope to understand. A Cusco course is a sensible choice for travel and relationships around Cusco, but it will not prepare you automatically for Ancash Quechua or Ecuadorian Kichwa. Ask a teacher for their town, family variety, and preferred spelling; then label every note. This is not fussy academic housekeeping. A learner who mixes Ayacucho vowels, Cusco ejectives, Ecuadorian grammar, and internet coinages may produce a sentence no community owns. Start with greetings and recorded mini-dialogues, but notice the suffixes inside them. In allillanmi, for example, the small ending -mi does social work that an English translation such as “I’m fine” leaves invisible. Build literacy and listening together: official school manuals give systematic spelling, while radio, songs, interviews, and conversation reveal how bilingual speakers actually use the language. The goal is not to impersonate an imagined precolonial speaker. It is to participate respectfully in a present-day network and understand why people choose Quechua, Spanish, or both in a particular moment.",
  origins: {
    overview: cited(
      "Quechuan did not originate as the language of a fully formed Inca Empire. Comparative linguistics points to an earlier common ancestor and deep diversification in what is now Peru. The exact homeland and expansion routes remain debated, but the greatest internal diversity lies in central Peru, while later movements carried Quechuan forms north and south. The Inca state adopted and spread a prestigious general language across a multilingual realm; it did not invent Quechua or make every subject abandon other languages. Chimu, Aymaran, Puquina, and many Amazonian languages remained part of the landscape. After the Spanish invasion, colonial officials and missionaries used a standardized lengua general for evangelization and administration, while local speech continued changing. The first printed grammar and lexicon, Domingo de Santo Tomas's 1560 works, are therefore evidence of an already established language and of a colonial project, not a neutral recording of all Quechua.",
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
          "The Inca state expanded a useful interregional language through administration, resettlement, military movement, and exchange. Its prestige explains part of Southern Quechua's reach, but northern and central histories do not reduce to one imperial wave.",
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
          "illinois-quechua"
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
      "Quechuan history is a history of contact. Prolonged interaction with Aymaran languages contributed to shared sound patterns, suffix-like organization, evidential categories, and vocabulary, though specialists disagree over the direction and age of particular features. Northern Kichwa interacted with Barbacoan and Amazonian languages; Central and Southern communities maintained other local networks. Spanish later supplied words such as pero “but,” familiya “family,” and modern administrative terms, while Andean Spanish received cancha, chacra, llama, puma, quinoa, and countless regional expressions. Bilingual speakers also reshape discourse patterns in both directions. Calling every Spanish loan corruption ignores how speakers make new registers; assuming every pan-Andean concept is ancient Quechua is equally misleading.",
      "wiki-quechuan",
      "minedu-southern",
      "ecuador-eib"
    ),
    standardization: cited(
      "There is no international academy whose spelling represents every Quechuan language. Peru's Ministry of Education recognizes official alphabets and produces separate Central and Southern writing manuals through consultation with teachers, community representatives, and specialists. The Peruvian Southern standard uses three vowel letters, a, i, u, because many linguists analyze three underlying vowels; near the uvular q, i and u can sound more like [e] and [o]. Some Cusco institutions and writers prefer five vowel letters and defend local literary tradition. Ecuador's Kichwa standard has its own educational materials, while Bolivia and local organizations follow related but distinct conventions. A useful standard connects readers across a region; it should not be confused with a command to erase local speech.",
      "bdpi-quechua",
      "minedu-southern",
      "minedu-central",
      "ecuador-eib"
    )
  },
  variants: {
    overview: cited(
      "“Dialect” can sound like a small accent difference, but Quechuan varieties may be mutually unintelligible and are cataloged as distinct languages. Two broad historical branches—Quechua I and Quechua II—are useful, yet neither tells a learner exactly what is spoken in one district. Migration also creates urban repertoires: a Lima household may connect Ayacucho and Cusco forms, or use receptive Quechua with mostly Spanish replies. Ask about locality and generation instead of policing which version is pure.",
      "glottolog-quechuan",
      "bdpi-quechua"
    ),
    items: [
      { name: "Ayacucho / Chanka Quechua", note: cited("A major Southern variety used in Ayacucho and neighboring regions. It lacks the phonemic aspirated and ejective stop series characteristic of Cusco-Collao, making apparently similar written forms sound noticeably different.", "minedu-southern", "illinois-quechua") },
      { name: "Cusco-Collao Quechua", note: cited("A Southern continuum associated with Cusco, Puno, and adjoining Bolivia. Contrasts such as k, kh, and k' can distinguish words; tourism has made Cusco forms unusually visible to outsiders without making them universal.", "minedu-southern", "wiki-southern") },
      { name: "South Bolivian Quechua", note: cited("Widely used across Cochabamba, Chuquisaca, Potosi, and migration networks. It shares much with neighboring Southern forms but has its own sound, vocabulary, schooling, and Spanish-contact patterns.", "bolivia-ine", "wiki-southern") },
      { name: "Central Quechua languages", note: cited("Ancash, Huanuco, Pasco, Junin, and highland Lima contain substantial internal diversity, including vowel length and consonants absent from many Southern descriptions. Use the Central writing manual as a doorway, then seek locality-specific materials.", "minedu-central", "bdpi-quechua") },
      { name: "Ecuadorian and Colombian Kichwa", note: cited("Kichwa includes highland and Amazonian varieties and a national educational standard. Northern changes include reduced inherited morphology and distinctive vocabulary; Colombian Inga/Ingano belongs in this northern history but has its own identity.", "ecuador-eib", "wiki-quechuan") },
      { name: "Peripheral and endangered varieties", note: cited("Cajamarca, Lambayeque, Yauyos, Pacaraos, Amazonian, Argentine, and other communities complicate every neat map. Some varieties are vigorous locally; others face severe interruption. Vitality must be assessed variety by variety, not inferred from the family's total population.", "bdpi-quechua", "yauyos-grammar") }
    ]
  },
  pronunciation: {
    overview: cited(
      "A Southern three-vowel spelling can initially look easier than Spanish, but good pronunciation depends on the chosen variety. Most roots favor simple syllables, stress often falls on the next-to-last syllable, and suffixes extend a word without destroying its rhythmic shape. The uvular q is made farther back than k and changes nearby vowel quality. In Cusco-Collao, plain, aspirated, and ejective stops contrast: k is plain, kh releases a breath, and k' is produced with a compressed glottalic release. Ayacucho speakers do not reproduce that three-way series. Central languages may add vowel length or consonant contrasts that a Southern chart omits.",
      "minedu-southern",
      "minedu-central"
    ),
    script: "Latin alphabet; examples below use official-style Southern spellings and identify variety-sensitive sounds",
    soundSystem: cited(
      "In a common Southern analysis, /a i u/ are the underlying vowels. Beside q, /i/ and /u/ lower toward sounds outsiders hear as e and o; this is why qucha “lake” is often encountered as cocha in names and Spanish loans. Spelling with i and u makes the repeating root easier to recognize across suffixes, while five-vowel advocates prioritize established regional reading habits. The consonants ll and ñ are single sounds, ch is an affricate, and h varies regionally. Cusco-Collao q, qh, q' form a uvular series alongside velar k, kh, k'. Never add apostrophes decoratively: in these orthographies they identify an ejective consonant and can distinguish words.",
      "minedu-southern",
      "unicode-latin"
    ),
    prosody: cited(
      "Quechua words can become long while remaining rhythmically clear: wasi-yki-chik-kuna-manta “about/from your(plural) houses” is a chain of recognizable pieces. Practice such chains forward from the root, then as one phrase. Default penultimate stress is a useful Southern starting point, but emphatic particles, questions, Spanish contact, and local phrase melody change what sounds natural. Record a speaker saying a whole exchange such as Allillanchu? Allillanmi; copying only isolated nouns misses the intonation that makes the response warm rather than mechanical.",
      "illinois-quechua",
      "minedu-southern"
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
      { original: "qhari", translation: "man; male person [Cusco-Collao]", note: "The q is uvular and can lower the following a/i coloring; Ayacucho commonly has wari/runa-based alternatives depending on sense." },
      { original: "qucha", translation: "lake [Southern three-vowel spelling]", note: "The u sounds lowered beside q, explaining the familiar Spanish spelling cocha." },
      { original: "kanka", translation: "you will be; you are to be [Southern]", note: "Plain k contrasts with aspirated kh and ejective k' where those series exist." },
      { original: "k'anchay", translation: "light; to illuminate [Cusco-Collao]", note: "Release k' sharply without an following puff of air; the apostrophe marks an ejective." },
      { original: "pacha", translation: "time, place, world, or situated domain", note: "Keep ch as one affricate sound; context—not a mystical one-word gloss—selects the sense." },
      { original: "ñuqanchik", translation: "we, including you [Southern]", note: "Practice initial ñ and the final chain as one word; compare exclusive ñuqayku." }
    ]
  },
  writing: {
    overview: cited(
      "Quechuan languages were recorded before alphabetic writing through technologies and practices that included khipu, visual design, named places, and highly trained oral performance. Colonial writers adapted the Latin alphabet, producing a rich but inconsistent archive. Modern spelling is therefore neither immemorial nor fake: it is infrastructure built for schooling, literature, public service, research, and messages between speakers. Good readers learn to recognize older Spanish-shaped spellings alongside a current local standard.",
      "minedu-southern",
      "wiki-quechuan"
    ),
    primaryScript: "Latin alphabets adapted by country and regional variety",
    romanization: cited(
      "Because the normal script is already Latin, “romanization” really means conversion between spelling systems. Cuzco, Cusco, and Qusqu can point to the same place through Spanish and Quechua conventions; Quechua, Qichwa, Qhichwa, and Kichwa likewise encode history and sound choices. Preserve a person's preferred name and quote a text in its own orthography. For normalized search notes, record the original spelling plus your target standard rather than silently replacing one with another.",
      "minedu-southern",
      "ecuador-eib"
    ),
    spellingNorms: cited(
      "Peru's Southern manual teaches roots and suffixes consistently with a, i, u, while consonant inventories reflect regional contrasts. Ecuadorian Kichwa uses k where Southern standards often use q/k distinctions and follows its own morphology. Apostrophe-like marks in Cusco-Collao indicate ejectives; Unicode recommends a modifier letter apostrophe when a mark functions as a letter, although ordinary keyboards and published materials often use straight or curly apostrophes. Search engines may treat those characters differently, so robust digital tools should normalize variants without flattening the linguistic distinction.",
      "minedu-southern",
      "ecuador-eib",
      "unicode-latin"
    ),
    styleNotes: [
      cited("Choose an orthography tied to your teacher and reading community, then remain consistent inside one exercise.", "minedu-southern"),
      cited("Keep the root visible when segmenting: wasi-kuna-pi is house-plural-in, but ordinary prose writes one word, wasikunapi.", "illinois-quechua"),
      cited("Expect colonial, academic, ministry, and community publications to differ. Variation is a reading skill, not proof that spelling is impossible.", "minedu-central", "minedu-southern"),
      cited("Use Unicode-aware fonts and search both straight and modifier apostrophes when working with ejectives in digital collections.", "unicode-latin")
    ]
  },
  grammar: {
    overview: cited(
      "Quechuan grammar is often introduced as agglutinative: roots take ordered suffixes whose functions usually remain identifiable. That makes an unfamiliar long word less frightening, but the pieces are not interchangeable beads. Their order, sound shape, scope, and regional distribution matter. Southern Quechua examples below illustrate a system; they are not promises about every family member. Learn each suffix inside a short exchange, including what prompted the speaker to choose it.",
      "illinois-quechua",
      "wiki-quechuan"
    ),
    typologicalProfile: cited(
      "Quechuan languages are predominantly suffixing and favor subject–object–verb order, though focus and topic allow flexible ordering. Nouns take case and possessive endings; verbs mark subject and, in many forms, the person of an object. There is no grammatical gender comparable to Spanish, and adjectives do not agree for gender. Evidential or validation particles indicate the speaker's relation to information. Subordinate verbs can show whether their subject is the same as or different from the main clause subject—a system called switch-reference.",
      "wiki-quechuan",
      "yauyos-grammar"
    ),
    morphology: cited(
      "The classic demonstration begins with wasi “house”: wasiy “my house,” wasikuna “houses,” wasikunapi “in the houses,” and wasiykichikkunamanta “from/about your(plural) houses.” A learner can see possession, number, and case in sequence. Verbs similarly grow from a root: riku- “see,” riku-rqa-nki “you saw,” riku-wa-nki “you see me.” Actual suffix shapes vary and some combinations fuse or trigger sound adjustments. Segmenting is valuable, but fluent comprehension eventually recognizes frequent bundles without translating each part.",
      "illinois-quechua",
      "minedu-southern"
    ),
    syntax: cited(
      "A neutral Southern clause can place the verb last: Mariya tantata mikun, “Maria eats bread,” where -ta marks the object. But Quechua uses ordering and particles to manage what conversation is about and what is asserted. Mariyaqa introduces Maria as topic; tantatam highlights bread with direct-evidence -m. Relative clauses normally precede nouns, and postpositions or case suffixes do work English assigns to prepositions. Spanish-dominant bilingual speech may prefer different orders without ceasing to be Quechua.",
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
        body: cited("Nouns mark roles with endings: -ta commonly marks a direct object, -pi location, -manta source or topic, -man direction, -wan accompaniment/instrument, and -pa possessor. Their translations change with the verb. Wasimanta can mean “from the house” or “about the house”; context prevents a suffix from becoming a rigid English preposition.", "minedu-southern", "illinois-quechua"),
        example: "Wawqa wasimanta chakraman rin.",
        exampleTranslation: "The child goes from the house to the field. [Southern teaching example]"
      },
      {
        title: "Inclusive and exclusive ‘we’",
        body: cited("Southern Quechua distinguishes ñuqanchik, “we including you,” from ñuqayku, “we excluding you.” The difference changes invitations, political speeches, and family plans. A translation that simply says “we” loses information about whether the listener belongs inside the group.", "wiki-quechuan", "minedu-southern"),
        example: "Ñuqanchik kuska llamk'asunchik; ñuqayku paqarin kutimusqayku.",
        exampleTranslation: "Let us (you and I) work together; we (not you) will return tomorrow. [Cusco-style Southern]"
      },
      {
        title: "Evidentials position a claim",
        body: cited("In Southern varieties, -mi/-m commonly presents information as directly grounded, -si/-s attributes it to report, and -chá marks conjecture or probability. These do not mechanically mean “I saw,” “someone said,” and “maybe” in every sentence; they interact with focus and discourse. Compare Paymi hamun “It is he/she who is coming / I affirm it,” Paysi hamun “They say he/she is coming,” and Paychá hamun “He/she is probably coming.”", "quechua-evidentials", "wiki-quechuan"),
        example: "Paramunmi. / Paramunsi. / Paramunqachá.",
        exampleTranslation: "It is raining (directly grounded). / Reportedly it is raining. / It will probably rain. [Southern]"
      },
      {
        title: "Topic and focus organize conversation",
        body: cited("The topic marker -qa frames what a clause concerns, while evidential enclitics often attach to the focused constituent. In Taytayqa chakrapim llamk'an, “As for my father, he works in the field,” -qa keeps father as topic and -m foregrounds the location. English word stress performs only part of this work.", "wiki-quechuan", "minedu-southern"),
        example: "Kay libruqa Qusqupim ruwasqa karqan.",
        exampleTranslation: "As for this book, it was made in Cusco. [Southern]"
      },
      {
        title: "Verbs can index two participants",
        body: cited("Many Quechuan verb paradigms mark both subject and object. Rikuwa-nki contains -wa for a first-person object and -nki for a second-person subject: “you see me.” Such forms are called bipersonal or polypersonal agreement. Do not search for a free-standing word meaning “me” in every sentence; the verb may already carry it.", "wiki-quechuan", "illinois-quechua"),
        example: "Qamqa rikuwanki, ñuqataq rikuyki.",
        exampleTranslation: "You see me, and I see you. [Southern; exact second form varies regionally]"
      },
      {
        title: "Switch-reference links events",
        body: cited("A nonfinite suffix can tell whether the subject continues. In a Southern teaching contrast, -spa normally indicates that the subordinate and main action share a subject, while -pti- introduces a different subject. Hamuspa mikurqani means “I came and ate”; pay hamuptin mikurqani means “when he/she came, I ate.” This keeps narratives clear without repeating pronouns.", "yauyos-grammar", "wiki-quechuan"),
        example: "Hamuspa rimarqani; pay hamuptin uyarirqani.",
        exampleTranslation: "I came and spoke; when he/she came, I listened. [Southern teaching example]"
      },
      {
        title: "Negation wraps around the clause",
        body: cited("Southern Quechua commonly pairs mana “not” with the suffix -chu on the negated word or predicate: Manam yachanichu, “I do not know.” Ama forms prohibitions, often with a negative imperative construction: Ama llullakuychu, “Do not lie.” The -chu ending also participates in questions, so intonation and the preceding word matter.", "minedu-southern", "wiki-southern"),
        example: "Manam qichwata allinta rimani-chu; yachakuchkanim.",
        exampleTranslation: "I do not speak Quechua well; I am learning. [Southern]"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "A map of the Andes can mislead if it colors only remote highlands. Quechua is spoken in villages and provincial capitals, but also in Lima, Arequipa, La Paz, Cochabamba, Quito, Buenos Aires, northern Chile, and migrant neighborhoods farther abroad. Use varies by home, market, school, clinic, government office, church, festival, radio station, and phone. Census categories reveal different pieces of this ecology rather than a single definitive speaker number.",
      "bdpi-quechua",
      "bolivia-ine"
    ),
    regions: [
      { place: "Peru", note: cited("Peru contains the family's greatest diversity. The 2017 census recorded more than 3.8 million childhood Quechua speakers, but individual varieties range from broadly used Southern forms to severely endangered local languages.", "bdpi-quechua") },
      { place: "Bolivia", note: cited("Quechua is an official Indigenous language and a major part of multilingual life, especially in Cochabamba, Chuquisaca, and Potosi. The 2024 census publishes language learned, current use, and multilingualism separately.", "bolivia-ine") },
      { place: "Ecuador and Colombia", note: cited("Highland and Amazonian Kichwa communities use related northern languages across national borders. Ecuador's bilingual-education institutions publish dictionaries, pedagogical grammar, readers, and teacher materials.", "ecuador-eib") },
      { place: "Argentina and Chile", note: cited("Santiagueño Quechua in Argentina and Southern Quechua in border and migrant communities show that the family is not confined to the central Andean republics. Local histories and norms must guide learning.", "wiki-quechuan") },
      { place: "Urban and international diasporas", note: cited("Migration carries family varieties into coastal cities and overseas communities. Heritage learners may understand grandparents, sing, or recognize household speech without writing the official standard; that partial knowledge is a starting point, not a failure.", "bdpi-people") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "The suffixing system is logical enough to deliver early wins, and the Latin script removes one barrier for readers of Spanish or English. The real difficulty is sociolinguistic: finding materials, audio, and correction for the same variety. Spanish helps with access to teachers and manuals, but it can also hide Quechua sound distinctions and encourage calques. A monolingual English learner should expect to use Spanish as a bridge or work closely with bilingual teachers.",
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
      "A focused learner can build courteous conversation and parse basic suffixes in a few months. Functional community participation takes longer because listening must survive several speakers, code-switching, and local vocabulary. Use one structured course, one speaker or tutor, one dependable audio source, a sentence notebook, and a community connection—the compact stack Discover Discomfort recommends for less-commonly taught languages. After the first course, move into one recurring domain such as family stories, health interpreting, radio news, weaving, football, or songs rather than collecting disconnected beginner lists.",
      "dd-less-common"
    )
  },
  advancedLearning: {
    strategy: cited(
      "At intermediate level, create a variety map for every source: speaker's locality, age, medium, spelling, and whether the language is spontaneous or translated. Transcribe thirty seconds of one recording before consulting a transcript. Segment verbs and nouns, then ask a teacher which suffixes are required, which are stylistic, and which sound imported. Retell the same story three times—casual conversation, a careful audio message, and written prose—to expose register rather than only grammar gaps.",
      "dd-less-common",
      "minedu-southern"
    ),
    mediaPractice: cited(
      "Pair public news such as Ñuqanchik with community radio, music, film, comedy, oral histories, and creators who discuss contemporary life. News offers clear recurring vocabulary but often a planned standard; unscripted interviews reveal hesitation, code-switching, particles, and local rhythm. Songs preserve poetic compression and regional sound, while recent Quechua cinema and Q-pop reject the idea that Indigenous-language art must depict a timeless village.",
      "radio-nuqanchik",
      "bdpi-people"
    ),
    dictionariesAndCorpora: cited(
      "A dictionary must match the text. Use Clodoaldo Soto's Ayacucho materials for Ayacucho, Ecuadorian ministry dictionaries for Kichwa, and locality-specific lexicons for Central or Yauyos texts. Qichwa 2.0 offers searchable tools and Gerald Taylor materials, while a descriptive grammar supplies meanings that bilingual glosses cannot. Search alternate spellings, then confirm a new word in two complete sentences from speakers or reliable texts.",
      "illinois-quechua",
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
      "Quechua vocabulary becomes interesting when a broad gloss opens into local usage. Runa is often translated “person,” but social context decides whether it means people, an Indigenous/Quechua person, an adult, or humanity. Pacha can concern time, place, weather, world, or an ordered domain; it is not a magical untranslatable noun. Learn collocations, suffixes, and who uses a word. Oral genres and alphabetic literature likewise belong together: a story may move through performance, transcription, translation, radio, schoolbook, and film without one version being the only authentic form.",
      "bdpi-people",
      "minedu-southern"
    ),
    notableWords: [
      { term: "runa", meaning: "person; people; human", note: cited("The source of Runasimi, literally “people's speech.” Its social range varies, so do not turn it automatically into a racial label.", "bdpi-people") },
      { term: "simi / shimi", meaning: "mouth; language; speech", note: cited("Southern simi and northern shimi show a regular regional sound correspondence and a semantic path from mouth to speech/language.", "ecuador-eib", "minedu-southern") },
      { term: "pacha", meaning: "time, place, world, weather, situated sphere", note: cited("Compounds and context select among connected senses. Pachamama is a relational being and named concept, not proof that pacha has one English equivalent.", "bdpi-people") },
      { term: "ayllu", meaning: "kin and community group; locally organized social unit", note: cited("Its historical and present institutions vary. Translating it as either “family” or “clan” can erase land, reciprocity, descent, and political dimensions.", "bdpi-people") },
      { term: "minka / mink'a", meaning: "organized collective work", note: cited("The exact institution and spelling vary across the Andes. The word is useful when learned through who calls the work, who participates, and how reciprocity is managed.", "bdpi-people") },
      { term: "yachay", meaning: "to know; knowledge; learning", note: cited("A productive root appears in yachachiq “teacher” and yachakuy “to learn.” Suffixes show relationships among knowing, teaching, and becoming knowledgeable.", "minedu-southern") },
      { term: "sunqu / shunku", meaning: "heart; inner feeling or disposition", note: cited("Regional sound and spelling vary. It occurs in affectionate and evaluative expressions but should not be given one universal Andean philosophy.", "ecuador-eib", "minedu-southern") }
    ],
    loanwordLayers: cited(
      "Some Spanish words were absorbed so thoroughly that speakers add Quechua suffixes freely: familiayku “our family,” litrupi “in a liter,” or peroqa “but/as for however,” depending on variety. Earlier contact also left Aymaran and other Indigenous layers, and Quechua sent words outward into regional Spanish and global languages: papa, puma, condor (through Spanish), llama, quinoa, guano, and coca have complex routes. New terminology may borrow, extend an old root, or be deliberately coined by educators and activists. Ask whether a term is conversational, school-standard, humorous, or bureaucratic before using it.",
      "wiki-quechuan",
      "minedu-southern"
    ),
    idioms: [
      { original: "Pisi pisillamanta", translation: "Little by little.", note: "Literally “from a very small amount at a time”; a Southern expression for gradual progress whose repeated diminutive is warmer and more emphatic than a bare “slowly.”" },
      { original: "Ama llulla, ama suwa, ama qilla", translation: "Do not lie, do not steal, do not be idle.", note: "Widely circulated pan-Andean ethical maxim in modern public life. Spellings vary; avoid presenting its familiar three-part form as an uncontested verbatim law from antiquity." },
      { original: "Sunquypim apayki", translation: "I carry you in my heart.", note: "Literally “in my heart I carry you”; a Southern affectionate expression in which -pi marks location, -m grounds/emphasizes it, and -yki indexes “you” as object." },
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
      "Quechuan is a family, so relationships inside it are genealogical: Kichwa, Central Quechua, and Southern Quechua descend from earlier Quechuan forms. Aymara is different. Long contact created a shared Andean linguistic area, making unrelated neighbors resemble one another in sound and grammar. Spanish is a later contact language with immense social power and two-way influence. Keeping ancestry and contact separate explains more than treating every similarity as proof of one family.",
      "glottolog-quechuan",
      "wiki-quechuan"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Do not approach Quechua as a password to “Inca wisdom,” or expect speakers to perform tradition. Ask what name they use for their language: Quechua, Qichwa, Qhichwa, Kichwa, Runasimi, or a locality name. Pay teachers and translators, seek consent before recording, and do not upload private stories as “language data.” Language shift often reflects punishment, racism, migration, and restricted services rather than family indifference. Heritage learners may carry pain as well as pride. Contemporary Quechua belongs in courtrooms, clinics, memes, elections, cinema, classrooms, laboratories, love songs, and ordinary teasing. Respect Spanish–Quechua bilingualism instead of demanding purity.",
  resources: [
    { type: "course", title: "Discover Discomfort: Best Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("Explicitly includes Quechua and explains how to assemble a robust learning system when no single commercial app covers the language well.", "dd-less-common") },
    { type: "book", title: "Urin Qichwa Qillqay Yachana Mayt'u — Southern Quechua Writing Manual", url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/7190", level: "all", description: cited("Peru's detailed official manual, useful for sound–spelling relationships, suffix writing, punctuation, and the history of standardization.", "minedu-southern") },
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
    { original: "Musuqmanta niway.", translation: "Tell me again. [Southern]", literalMeaning: "Say it to me from new/again.", usageNote: "A useful lesson phrase; ni-wa-y combines say, first-person object, and imperative." },
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
    { id: "minedu-southern", title: "Urin Qichwa Qillqay Yachana Mayt'u: Manual de escritura quechua sureño", url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/7190", publisher: "Peru Ministry of Education", publishedAt: "2020", accessedAt: "2026-07-10" },
    { id: "minedu-central", title: "Chawpin qichwata qillqanapaq maytu: Manual de escritura quechua central", url: "https://repositorio.minedu.gob.pe/handle/20.500.12799/8170", publisher: "Peru Ministry of Education", publishedAt: "2022-03", accessedAt: "2026-07-10" },
    { id: "ecuador-eib", title: "Recursos de apoyo de Educación Intercultural Bilingüe", url: "https://educacion.gob.ec/recursos-de-apoyo-eib/", publisher: "Ecuador Ministry of Education", accessedAt: "2026-07-10" },
    { id: "bolivia-ine", title: "Idiomas: Censos de Población y Vivienda 2012 y 2024", url: "https://www.ine.gob.bo/index.php/estadisticas-sociales/idiomas/", publisher: "Bolivia National Institute of Statistics", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "The Unicode Standard, Chapter 6: Writing Systems and Punctuation", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-6/", publisher: "Unicode Consortium", publishedAt: "2024", accessedAt: "2026-07-10" },
    { id: "illinois-quechua", title: "Quechua at the Center for Latin American and Caribbean Studies", url: "https://clacs.illinois.edu/", publisher: "University of Illinois Urbana-Champaign", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "yauyos-grammar", title: "A Grammar of Yauyos Quechua", url: "https://open.umn.edu/opentextbooks/textbooks/a-grammar-of-yauyos-quechua", publisher: "Open Textbook Library, University of Minnesota", accessedAt: "2026-07-10" },
    { id: "quechua-evidentials", title: "Distribution of Evidential Markers in a Cuzco Quechua Corpus", url: "https://journals.linguisticsociety.org/proceedings/index.php/PLSA/article/view/5899", publisher: "Linguistic Society of America", publishedAt: "2025", accessedAt: "2026-07-10" },
    { id: "qichwa20", title: "Qichwa 2.0: Quechua Language and Knowledge Tools", url: "https://qichwa.net/en/", publisher: "Qichwa 2.0", accessedAt: "2026-07-10" },
    { id: "radio-nuqanchik", title: "Ñuqanchik", url: "https://www.radionacional.gob.pe/programas/nuqanchik", publisher: "Radio Nacional del Perú", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Quechua Language Guide: Varieties, Sounds, Grammar and Learning",
    description: "A deeply researched guide to Quechuan diversity, Southern Quechua and Kichwa, history, pronunciation, writing debates, suffixes, evidentials, useful phrases, culture, and current resources."
  }
} satisfies LanguageGuide;
