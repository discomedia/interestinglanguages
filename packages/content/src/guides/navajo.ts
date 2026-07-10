import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Western Apache",
    relationship: "Close Southern Athabaskan relative",
    explanation: cited(
      "Western Apache and Navajo descend from neighboring Southern Athabaskan branches and share much vocabulary and grammatical architecture, especially the elaborate verb. They are nevertheless distinct community languages, not interchangeable dialect labels. Comparison is most useful after a learner has established Navajo pronunciation and common verb patterns.",
      "glottolog-navajo",
      "wiki-navajo"
    )
  },
  {
    name: "Mescalero-Chiricahua Apache",
    relationship: "Southern Athabaskan relative",
    explanation: cited(
      "Mescalero-Chiricahua belongs to the same southern migration story as Navajo. Cognates and similar prefix systems are visible, but sound changes, vocabulary, histories, and present-day community norms matter. The family resemblance should invite respectful comparative study, not the assumption that one language can stand in for another.",
      "glottolog-navajo",
      "wiki-navajo"
    )
  },
  {
    name: "Dene Kedé and other Northern Dene languages",
    relationship: "More distant Athabaskan relatives",
    explanation: cited(
      "Languages spoken far to the north in Alaska and Canada—including Dena'ina, Ahtna, Koyukon, and several languages called Dene—confirm a deep Athabaskan relationship across a remarkable geographic span. Similarities in verb structure and basic vocabulary reflect ancestry, while centuries of independent development prevent mutual intelligibility.",
      "glottolog-navajo",
      "wiki-navajo"
    )
  },
  {
    name: "Pueblo languages",
    relationship: "Long-standing neighboring languages, not genealogical relatives",
    explanation: cited(
      "Hopi, Zuni, Keresan, and Tanoan languages belong to other families, yet Diné communities have lived beside Pueblo peoples for centuries. Agriculture, trade, ceremony, conflict, kinship, and refuge created contact without turning these languages into relatives. This distinction between ancestry and relationship-through-history is essential in the Southwest.",
      "wiki-navajo",
      "dine-history"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const navajoGuide = {
  slug: "navajo",
  name: "Navajo",
  autonym: "Diné Bizaad",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Diné Bizaad is a tonal Southern Athabaskan language whose verbs describe motion, shape, viewpoint, and relationship with remarkable precision.",
  family: "Na-Dene, Athabaskan",
  macroRegion: "North America",
  primaryScript: "Latin",
  difficultyLabel: "Very demanding",
  learnerHook: "Learning Diné Bizaad means hearing fine contrasts, building intricate verbs, and understanding connections among language, land, kinship, and contemporary Diné life.",
  hero: {
    imageAlt: "Diné Bizaad text in its modern Latin orthography, including tone and nasalization marks.",
    callToActionLabel: "Hear Diné Bizaad in use"
  },
  classification: "A Southern Athabaskan language in the Na-Dene family",
  speakerCommunity: "Diné Bizaad is spoken across the Navajo Nation—Diné Bikéyah—and in border towns, cities, and diaspora households. Speaker totals depend on whether a survey asks about home use, ability, or identity, and conceal a sharp age gradient: many elders command rich everyday and ceremonial registers while many children grow up primarily in English. Families, immersion schools, teachers, broadcasters, artists, tribal colleges, and digital creators use the language now. In December 2024 the Navajo Nation Council made Diné Bizaad the Nation's official language; a January 2025 executive order directed the executive branch to implement that status.",
  facts: [
    { label: "Autonym", value: "Diné Bizaad — ‘the people's language’" },
    { label: "Family", value: "Na-Dene · Athabaskan · Southern Athabaskan" },
    { label: "Homeland", value: "Diné Bikéyah across Arizona, New Mexico, and Utah" },
    { label: "Writing", value: "Latin alphabet with acute accents, ogoneks, and apostrophes" },
    { label: "Sound", value: "Tone, vowel length, nasal vowels, and glottalized consonants" },
    { label: "National status", value: "Official language of the Navajo Nation since 2024" }
  ],
  learnerOverview: "Start with voices, not a diagram of the verb. Learn the alphabet from recorded Diné speakers, practice one contrast at a time, then attach whole sentences to people and situations. The writing system is a listening tool: á differs from a, ą differs from a, and a doubled vowel is held longer. Do not discard those marks, but do not let spelling replace conversation. Navajo's verb organizes the sentence, and a form learned without its participants, aspect, and setting is hard to reuse. Hear a fluent recording, copy it accurately, identify the stem, change one element with a teacher, and return to the phrase in conversation. For heritage learners, study may involve family histories shaped by schooling and language shift; no outsider's timetable defines reclamation. Non-Diné learners should approach as guests: use public material, compensate teachers, follow community boundaries, and never present vocabulary access as authority over Diné knowledge.",

  origins: {
    overview: cited(
      "Navajo is Athabaskan, a family otherwise concentrated in Alaska, western Canada, and the Pacific Coast. Linguistic evidence places the ancestors of Navajo and Apache peoples in a southward movement, with Southern Athabaskan communities established in the Southwest before sustained Spanish colonization. Diné history is not reducible to a migration arrow. Diné accounts relate people and homeland through the present world, sacred mountains, journeys, and emergence narratives; community knowledge and comparative linguistics need not be forced into identical questions. In the Southwest, Diné people developed pastoral, agricultural, trading, and artistic life through relationships with Pueblo peoples and later neighbors. Athabaskan grammar remained unmistakable while vocabulary and genres responded to new economies and institutions.",
      "glottolog-navajo",
      "wiki-navajo",
      "dine-history"
    ),
    timeline: [
      {
        period: "Before sustained European colonization",
        event: cited(
          "Southern Athabaskan-speaking communities became established in the Southwest and developed distinct Navajo and Apache histories. Contact with Pueblo communities involved exchange, intermarriage, agriculture, refuge, and conflict; linguistic ancestry and cultural relationship should not be collapsed into one story.",
          "wiki-navajo",
          "dine-history"
        )
      },
      {
        period: "17th–mid-19th centuries",
        event: cited(
          "Spanish and then Mexican colonial presence altered trade, land use, warfare, livestock economies, and vocabulary. Diné communities incorporated sheep and horses into a social and economic world on their own terms; Spanish-origin words entered the language without replacing its Athabaskan structure.",
          "wiki-navajo",
          "dine-history"
        )
      },
      {
        period: "1863–1868",
        event: cited(
          "The United States military forcibly removed thousands of Diné people on the Long Walk to incarceration at Bosque Redondo, where hunger, disease, and death were widespread. The Treaty of 1868 permitted survivors to return to part of Diné Bikéyah. Language continuity belongs within this history of survival and sovereignty, not as an abstract linguistic statistic.",
          "dine-treaty",
          "dine-history"
        )
      },
      {
        period: "Late 19th–20th centuries",
        event: cited(
          "Federal and mission boarding schools separated Indigenous children from family life and frequently punished Native-language use. At the same time, Diné speakers, educators, and scholars helped develop a practical orthography, dictionaries, school materials, and bilingual programs. During the Second World War, Navajo Code Talkers used a specialized military code based on the language; their service is important, but it should not eclipse the language's much larger civilian life.",
          "nps-codetalkers",
          "ucla-revitalization",
          "wiki-navajo"
        )
      },
      {
        period: "1968 to the present",
        event: cited(
          "Diné College began as Navajo Community College, the first tribally controlled college in the United States, and made Diné language and knowledge central to higher education. Community schools, the Navajo Language Academy, Navajo Technical University, UNM programs, and family-led work expanded teaching. Official-language legislation in 2024–2025 and a Navajo Nation audio-story initiative launched in 2026 connect sovereignty with daily use.",
          "dine-college",
          "navajo-official",
          "navajo-stories",
          "unm-mission"
        )
      }
    ],
    contactHistory: cited(
      "Spanish contributed vocabulary associated with livestock, food, and introduced objects; English supplies newer institutional and technological terms, sometimes borrowed and sometimes described with Navajo resources. Pueblo contacts are older and multidirectional, and proposed word histories deserve checking rather than guesswork. Speakers also create compounds and extensions based on what an object does, how it moves, or what it resembles. English code-switching may signal audience, age, topic, humor, or convenience; it does not make a speaker's Navajo inauthentic.",
      "wiki-navajo",
      "nla-lexicon"
    ),
    standardization: cited(
      "The modern orthography grew through collaboration among Diné speakers and educators. It represents tone, length, nasalization, and glottal stops, supporting dictionaries, curricula, and digital text without erasing regional speech. In 2024 the Navajo Nation recognized Diné Bizaad as official; a 2025 order called for its use in documents, signs, and staff learning.",
      "navajo-official",
      "unicode-marks",
      "wiki-navajo"
    )
  },

  variants: {
    overview: cited(
      "Navajo is widely mutually intelligible across Diné Bikéyah, but fluent speakers hear differences associated with region, family network, age, and neighboring languages. A speaker can command household or occupational language without using every specialized register. English-dominant learners, receptive bilinguals, teachers, ceremonial practitioners, broadcasters, and elders bring different repertoires. ‘Traditional’ and ‘modern’ are poor boxes: an election broadcast and a grandparent's account of sheep care both draw on living Diné practices.",
      "unm-mission",
      "nla-lexicon",
      "wiki-navajo"
    ),
    items: [
      { name: "Western Navajo Nation", note: cited("Communities in western Arizona show local pronunciations and vocabulary shaped by family histories and contact with Hopi and English. A course's standard form remains useful, but local teachers decide what sounds natural.", "wiki-navajo", "unm-resources") },
      { name: "Central and northern communities", note: cited("Speech around Window Rock, Chinle, Shiprock, and many smaller communities is internally diverse. Government, school, grazing, chapter-house, and home domains each cultivate different vocabulary.", "navajo-official", "unm-resources") },
      { name: "Eastern and satellite communities", note: cited("Eastern Navajo communities in New Mexico and the satellite sections of the Nation have distinct contact histories. Borders on a map do not predict a person's accent, competence, or identity.", "dine-history", "wiki-navajo") },
      { name: "Formal, educational, and public language", note: cited("Classrooms and broadcasts often favor standardized spelling and explicit grammatical vocabulary. Public speaking can use parallelism and forms of address that a phrasebook conversation never teaches.", "unm-mission", "dine-college") },
      { name: "Culturally governed knowledge", note: cited("Some narratives, names, songs, and ceremonial language belong to particular people, seasons, or responsibilities. Public language study is not blanket permission to record, repeat, publish, or commercialize them. Ask the relevant Diné teacher or knowledge holder.", "unm-mission", "dine-college") }
    ]
  },

  pronunciation: {
    overview: cited(
      "Navajo contrasts short and long vowels, oral and nasal vowels, high and low tone, and plain, aspirated, and glottalized consonants. These differences can distinguish words and grammatical forms. Its four basic vowel qualities are written a, e, i, and o. Doubling writes length; an acute accent writes high tone; an ogonek writes nasalization. Long vowels can carry level or contour tones, so áá, aa, áa, and aá require deliberate reading. Learn from audio: the page identifies a contrast but cannot model an individual speaker's voice.",
      "nla-lexicon",
      "unicode-marks",
      "wiki-navajo"
    ),
    script: "Standard Navajo Latin orthography; acute accent marks high tone, ogonek marks nasalization, doubled vowels mark length",
    soundSystem: cited(
      "Several consonants need targeted listening. ł is a voiceless lateral fricative: air passes beside the tongue without vocal-fold vibration. Affricates include dl, tł, and tłʼ; the apostrophe marks glottalization or a glottal stop and belongs to the spelling. Stops and affricates contrast through aspiration and glottalization, not only the English voiced–voiceless pattern. Practice hear–point–repeat: identify the written form before imitating it, because production without perception can stabilize the wrong category.",
      "nla-lexicon",
      "learn-navajo",
      "wiki-navajo"
    ),
    prosody: cited(
      "Tone belongs to words and morphology rather than being an optional expressive melody. Prefixes may have their own tone, and stems can change shape across aspect or mode, so an inflected verb is not always predictable from an English gloss. In connected speech, neighboring vowels and consonants influence one another, and a fluent phrase has timing that an isolated word list hides. Shadow short recordings at half speed, marking vowel length with a continuous line and tone with arrows. Then return to normal speed without shortening long vowels. Names are especially worth checking with their owners: English media spellings often omit the distinctions that Navajo orthography preserves.",
      "nla-lexicon",
      "learn-navajo"
    ),
    learnerTraps: [
      "Dropping acute accents or ogoneks in notes and then trying to reconstruct the pronunciation later",
      "Reading doubled vowels as two syllables instead of one long vowel",
      "Replacing ł with English l, th, or an exaggerated hiss",
      "Treating every apostrophe as punctuation instead of a sound-bearing part of the word",
      "Learning a verb's consonants while ignoring tone changes tied to aspect and mode",
      "Assuming English spellings of place and personal names reproduce Diné pronunciation"
    ],
    sampleWords: [
      { original: "Diné", translation: "the people; Diné", note: "The final é has high tone. Use the community name rather than treating ‘Navajo’ as the only possible label." },
      { original: "bizaad", translation: "his/her/its language; language", note: "The aa is one long low-toned vowel. In Diné Bizaad, the conventional phrase names the Diné language." },
      { original: "hózhǫ́", translation: "beauty, balance, harmony, well-being (context-dependent)", note: "Both vowels are high-toned and the final vowel is nasal. No single English noun covers its cultural range." },
      { original: "łį́į́ʼ", translation: "horse", note: "Begins with voiceless ł; the long nasal vowel carries high tone, and the final apostrophe represents a glottal stop." },
      { original: "tłʼízí", translation: "goat", note: "The opening glottalized lateral affricate tłʼ is a three-character spelling for one consonant unit." },
      { original: "ashkii", translation: "boy", note: "The ii is long. Practice keeping it long even when the word occurs before another word." },
      { original: "kin", translation: "house; building", note: "A short, useful word heard in many compounds and place names; all three sounds should remain crisp." }
    ]
  },

  writing: {
    overview: cited(
      "Navajo's Latin-based alphabet uses acute accents for high tone, ogoneks for nasal vowels, doubled letters for length, and apostrophes for glottal stops or glottalized consonants. The barred l, ł, is its own letter. Navajo dictionary order and raw Unicode sorting are not always identical. Older books, keyboards, and messages may omit marks or use lookalike characters, but learners should begin with full spelling. Accurate text makes dictionaries searchable and respects names.",
      "unicode-marks",
      "nla-lexicon",
      "wiki-navajo"
    ),
    primaryScript: "Latin alphabet adapted for Navajo phonology",
    romanization: cited(
      "The practical orthography is the normal romanization; no pronunciation respelling is needed. Approximations such as ‘yah-ta-hey’ hide the glottal stops, tones, and long vowels in yá'át'ééh. Visually identical precomposed and combining Unicode sequences may be stored differently. Use a Navajo keyboard or trusted dictionary, and never substitute a cedilla for the ogonek.",
      "unicode-marks"
    ),
    spellingNorms: cited(
      "An acute accent marks high tone; low tone is unmarked. An ogonek marks nasalization. A high nasal vowel carries both, as in ą́, and long vowels require marking each position. Straight and typographic apostrophes can break exact search, so normalize your own vocabulary file consistently. Verify clan and place names rather than improvising them from English.",
      "unicode-marks",
      "nla-lexicon"
    ),
    styleNotes: [
      cited("Use full diacritics in study notes and publication. Omitting them removes contrasts that a fluent reader otherwise receives immediately.", "unicode-marks"),
      cited("Search dictionaries with several inflected forms or by a recognizable verb stem; the printed word may begin with multiple grammatical prefixes.", "nla-lexicon"),
      cited("Expect variation in apostrophe typography and Unicode composition when copying digital text; apparent spelling differences may be encoding differences.", "unicode-marks"),
      cited("Do not ‘correct’ a community or person's preferred spelling solely because a general dictionary uses another regional or standardized form.", "unm-mission")
    ]
  },

  grammar: {
    overview: cited(
      "The Navajo verb can express what English distributes across a pronoun, auxiliary, adverb, preposition, and lexical verb. Prefixes occur in a broadly fixed sequence before a stem, and the stem itself changes with aspect and mode. Linguists describe positions or ‘slots,’ but natural speech is not assembled by filling a worksheet from left to right. Many neighboring prefixes interact phonologically, so the surface word can conceal its parts. Begin with high-frequency whole forms, compare small paradigms, and use the template to explain patterns you already hear. Nouns are often less inflected than verbs; possession, postpositions, demonstratives, and word order carry much of the rest of the sentence.",
      "nla-lexicon",
      "wiki-navajo"
    ),
    typologicalProfile: cited(
      "Navajo is strongly head-marking and primarily suffix-free in the ordinary European sense: the verb records participants through prefixes, while relational ideas often use postpositions bound to pronouns. A neutral clause tends toward subject–object–verb order, but the verb's participant marking and discourse structure allow variation. Animacy and topical importance influence which noun phrase appears first. Grammars distinguish mode and aspect rather than mapping every form directly onto past, present, and future. Imperfective, perfective, progressive, iterative, and other viewpoints describe how an event unfolds; mode adds notions such as actuality, command, or possibility.",
      "wiki-navajo",
      "nla-lexicon"
    ),
    morphology: cited(
      "A verb contains an inflectional zone and stem, with derivational material nearer the stem and participants or adverbial ideas in ordered prefix positions. The classifier—a traditional label for prefixes written Ø, ł, l, and d—can affect valency, voice, or transitivity; it is not a noun classifier. Stem shapes change across aspect and mode, often with tone or vowel alternations. Classificatory verb stems select different forms for handling compact, long rigid, flexible, granular, plural, and other configurations. This is ordinary lexical precision, not a curiosity detached from daily life.",
      "nla-lexicon",
      "wiki-navajo"
    ),
    syntax: cited(
      "Navajo often places a more animate or discourse-prominent participant before a less animate one. When that preferred order is reversed, a yi-/bi- alternation in the verb can help indicate which participant acts on which: this is commonly called the direct–inverse system, though descriptions differ on its exact analysis. Questions may use an interrogative word while leaving the verb final. Negation commonly surrounds the relevant expression with doo ... da, creating a discontinuous frame. Relative clauses and nominalized verbs are central to building longer sentences. English translations should therefore be treated as interpretations of a complete construction, not word-for-word assembly instructions.",
      "wiki-navajo",
      "nla-lexicon"
    ),
    advancedPainPoints: [
      "Recognizing prefix boundaries after sounds have merged or changed in fluent speech",
      "Learning a verb as a family of aspect-and-mode stems instead of one dictionary headword",
      "Choosing a classificatory stem that matches an object's shape, number, consistency, and handling",
      "Following yi-/bi- participant tracking when noun phrases reverse their usual animacy order",
      "Distinguishing productive public language from ceremonial or culturally restricted forms",
      "Understanding regional and generational choices without labeling one speaker's repertoire deficient"
    ],
    topics: [
      {
        title: "The verb as a compact clause",
        body: cited("Subject and object prefixes occur inside the verb, so a complete Navajo sentence may be a single written word. Learn forms in contrasting sets: changing one participant can reshape more than one visible segment because prefixes interact.", "nla-lexicon", "learn-navajo"),
        example: "Yishááł.",
        exampleTranslation: "I am walking along. The form packages first-person subject, progressive motion, and the verb stem into one word."
      },
      {
        title: "Aspect and mode, not English tense alone",
        body: cited("Navajo stems and prefixes present an event as ongoing, completed, repeated, customary, beginning, or moving toward a result. A time word may locate the event, but choosing the verb stem still expresses the speaker's view of its internal shape.", "nla-lexicon", "wiki-navajo"),
        example: "Náshdááh. / Níyá.",
        exampleTranslation: "I am sitting down/staying. / He or she arrived. The English tense label does not explain the different lexical stems and event viewpoints."
      },
      {
        title: "The doo ... da negative frame",
        body: cited("Negation commonly has two parts: doo appears before the expression being negated and da closes the frame. Person and aspect remain inside the verb, so the construction is more than adding a free-standing ‘not.’", "learn-navajo", "nla-lexicon"),
        example: "Doo shił bééhózin da.",
        exampleTranslation: "I don't know it. Literally the construction frames shił bééhózin, ‘it is known by/with me.’"
      },
      {
        title: "Possession and kinship",
        body: cited("Many possessed nouns take a pronominal prefix. Body-part and kin terms are naturally relational, and the unpossessed citation form may be less useful than a small set such as ‘my,’ ‘your,’ and ‘his or her.’ Kinship vocabulary also encodes Diné social relationships that English glosses flatten.", "learn-navajo", "nla-lexicon"),
        example: "shimá / nimá / bimá",
        exampleTranslation: "my mother / your mother / his or her mother. The changing prefix identifies the possessor."
      },
      {
        title: "Postpositions are relational words",
        body: cited("Where English puts a preposition before a noun, Navajo often uses a postpositional element after a pronominal prefix. These combinations can express location, accompaniment, direction, benefit, and experienced states.", "nla-lexicon", "learn-navajo"),
        example: "shił / nił / bił",
        exampleTranslation: "with me / with you / with him, her, or it. The pronoun is bound to the relational stem -ł."
      },
      {
        title: "Classificatory handling verbs",
        body: cited("English ‘give’ or ‘carry’ is too general for many Navajo situations. The stem selected can classify the handled entity as compact, long and rigid, flexible, open-container-like, plural, mushy, or granular. Learn each stem with actual objects and recorded scenes rather than a decontextualized chart.", "nla-lexicon", "wiki-navajo"),
        example: "The Navajo equivalent of ‘Give it to me’ changes according to whether ‘it’ is a book, a rope, a cupful, or several objects.",
        exampleTranslation: "Shape and configuration are built into the verb choice; there is no single all-purpose form corresponding to English ‘it.’"
      },
      {
        title: "Animacy and yi-/bi- tracking",
        body: cited("Human and animate participants normally precede less animate ones. The direct construction commonly uses yi- when that order holds; bi- can mark an inverse relationship when the lower-ranked participant is placed first. Study this through paired narratives, because isolated English examples make the system look more mechanical than it is.", "wiki-navajo", "nla-lexicon"),
        example: "Ashkii at'ééd yiyiiłtsą́. / At'ééd ashkii biyiiłtsą́.",
        exampleTranslation: "The boy saw the girl. / The boy saw the girl. The changed order and yi-/bi- marking preserve who saw whom while shifting discourse prominence."
      },
      {
        title: "Questions and predicate nouns",
        body: cited("A present identity statement does not require an English-style verb ‘to be’ in every environment. Question words can stand in the focus position while the predicate supplies person marking or an identifying construction.", "learn-navajo"),
        example: "Haash yinilyé? Shí Dana yinishyé.",
        exampleTranslation: "What are you called? I am called Dana. These are the conventional name question and answer, not word-for-word English calques."
      }
    ]
  },

  whereSpoken: {
    overview: cited(
      "The center of Navajo language life is Diné Bikéyah, especially the Navajo Nation's communities across northeastern Arizona, northwestern New Mexico, and southeastern Utah. Speakers also live in Albuquerque, Phoenix, Flagstaff, Denver, Salt Lake City, Los Angeles, and many other places through work, education, military service, marriage, and family movement. U.S. Census language tables historically identify Navajo as one of the country's largest Indigenous languages by home use, but a household survey is not a fluency examination and is not designed around Diné definitions of speakerhood. Numbers must therefore be dated and read alongside community evidence about intergenerational transmission.",
      "census-language",
      "wiki-navajo",
      "navajo-official"
    ),
    regions: [
      { place: "Arizona", note: cited("A large share of Diné Bikéyah lies in Arizona, including Window Rock, Chinle, Tuba City, Kayenta, and many rural chapters. Navajo appears in homes, schools, radio, public events, government, health care, and commerce, with wide differences in daily density.", "navajo-official", "wiki-navajo") },
      { place: "New Mexico", note: cited("Northwestern New Mexico includes major Diné communities and border-town networks around Shiprock, Crownpoint, Farmington, and Gallup. Diné College, Navajo Technical University, and UNM-linked programs support teaching and research.", "dine-college", "unm-mission") },
      { place: "Utah", note: cited("The northern part of the Navajo Nation extends into southeastern Utah. Community size is smaller than in Arizona or New Mexico, but state-line arithmetic should never be mistaken for the boundaries of language or kinship.", "wiki-navajo", "dine-history") },
      { place: "Urban and diaspora communities", note: cited("Diné families maintain relationships across reservation and urban locations. Digital classes, radio streams, video calls, social media, and visits can connect learners, though technology cannot replace access to patient speakers and ordinary shared activity.", "unm-resources", "navajo-stories") }
    ]
  },

  difficulty: {
    label: "Very demanding",
    overview: cited(
      "For an English-speaking adult, Navajo asks for new listening categories and a new idea of the verb. Tone, nasalization, vowel length, glottalization, prefixing, stem alternations, and limited mass-market media all add work. This reflects grammatical distance and historic underfunding of Indigenous-language learning, not obscurity. A heritage learner seeking family conversation, a teacher pursuing literacy, and a linguist reading grammar need different skills. Measure progress in tasks: greet relatives without a script, follow a weather report, understand a familiar story, or write a correctly marked message.",
      "unm-mission",
      "dine-college",
      "nla-lexicon"
    ),
    easierAspects: [
      "The standard alphabet is compact and unusually informative once its marks are learned",
      "Spelling is more systematic than English and can guide exact listening",
      "Nouns do not require large case-and-gender declension tables",
      "Community institutions publish free audio, stories, lessons, and dictionaries",
      "Recurring verb prefixes become recognizable across a growing repertoire"
    ],
    hardAspects: [
      "Hearing tone, vowel length, nasalization, aspiration, and glottalization simultaneously",
      "Finding the reusable stem inside a long surface verb",
      "Learning multiple aspect-and-mode stems rather than one translation per verb",
      "Choosing classificatory handling verbs naturally",
      "Getting enough sustained, level-appropriate conversation and correction",
      "Respecting boundaries around specialized knowledge while developing cultural competence"
    ],
    plateauRisks: [
      "Memorizing ceremonial-sounding greetings while lacking ordinary household verbs",
      "Using an app streak as a substitute for listening to fluent connected speech",
      "Stripping tone and nasal marks from every flashcard",
      "Analyzing prefix slots indefinitely without building automatic whole phrases",
      "Expecting one speaker to provide unlimited unpaid teaching or cultural explanation"
    ],
    workload: cited(
      "Combine five short listening sessions, two guided lessons, and one longer community or media encounter each week. Prioritize accurate hearing: transcribe ten seconds, compare it with trusted text, and shadow it. Organize a verb notebook by whole example, stem family, aspect, participants, and source—not English keyword alone. Then narrate a routine, follow one news topic, or read a children's book with audio. Strong independent competence takes years. Frequency beats heroic bursts, and responsibility to teachers matters as much as efficiency.",
      "unm-resources",
      "learn-navajo",
      "navajo-stories"
    )
  },

  advancedLearning: {
    strategy: cited(
      "Move from lessons into domains such as family, food, weather, livestock, travel, school, work, or chapter government. Each supplies recurring verbs and meaningful situations. Record fluent models only with permission; transcribe with full marks, ask for correction, then create controlled variations. Heritage learners can let relatives choose topics and privacy boundaries. Non-Diné learners should use public classes and paid instruction rather than turning every encounter into a lesson. Cultivate both listening and literacy: dictionary knowledge does not decode fast conversation, while home fluency does not automatically confer technical writing.",
      "unm-mission",
      "dine-college",
      "unm-resources"
    ),
    mediaPractice: cited(
      "Use Navajo Nation government videos, KTNN radio, publicly shared stories, interviews, weather, and educational channels. A productive cycle is preview the topic in English, listen once without pausing, isolate a 20-second segment, transcribe, check known words in the Navajo Language Academy talking dictionary, and shadow the same speaker. Children's books are valuable because images and repetition reduce lookup burden without simplifying the sound system. Songs and oral narratives require context: confirm that the item is intended for public listening and do not detach ceremonial material from the conditions under which Diné teachers share it.",
      "navajo-stories",
      "unm-resources",
      "nla-lexicon"
    ),
    dictionariesAndCorpora: cited(
      "The Navajo Language Academy, Navajo Technical University, and Swarthmore talking dictionary links audio to searchable lexicons, grammar constructions, and examples. Use it beside Young and Morgan's large analytical dictionary and modern pedagogical works such as Diné Bizaad Bínáhoo'aah. Searching requires grammatical curiosity: remove a familiar outer prefix, look for the stem, and compare recorded forms rather than accepting the first English gloss. Public Navajo Wikipedia can supply reading practice, but community-edited or machine-produced text should be checked with a speaker before it becomes a production model.",
      "nla-lexicon",
      "unm-resources",
      "wiki-navajo"
    ),
    resources: [
      { type: "course", title: "LearnNavajo.com: Diné Bizaad", url: "https://www.learnnavajo.com/", level: "beginner", description: cited("A free public sequence covering the alphabet, verbs, family, cooking, work, numbers, time, and other practical domains, with cultural notes and audio-oriented guidance.", "learn-navajo") },
      { type: "dictionary", title: "Navajo Talking Dictionary", url: "https://talkingdictionary.swarthmore.edu/navajo/", level: "all", description: cited("A collaborative Navajo Language Academy, Navajo Technical University, and Swarthmore resource with searchable lexicons, grammar material, examples, and speaker audio.", "nla-lexicon") },
      { type: "course", title: "UNM Navajo Language Program learning materials", url: "https://navajo.unm.edu/other-resources/", level: "all", description: cited("A curated path to reading practice, videos, study aids, children's books, dictionaries, and community opportunities. Its institutional mission explicitly joins language study with Diné knowledge and revitalization.", "unm-resources", "unm-mission") },
      { type: "media", title: "Navajo Nation Diné Bizaad stories", url: "https://opvp.navajo-nsn.gov/dine-bizaad/", level: "all", description: cited("Monthly original stories paired with fluent-speaker audio, launched by the Office of the President and Vice President for listening, reading, vocabulary, and practical conversation.", "navajo-stories") },
      { type: "community", title: "Diné College Navajo Language program", url: "https://www.dinecollege.edu/academics/b-a-navajo-language/", level: "advanced", description: cited("A tribally controlled degree path centered on speaking, reading, writing, teaching, leadership, and the place of language in community life.", "dine-college") },
      { type: "book", title: "Diné Bizaad Bínáhoo'aah: Rediscovering the Navajo Language", url: "https://salinabookshelf.com/products/dine-bizaad-binahooaah-rediscovering-the-navajo-language", level: "beginner", description: cited("A substantial learner textbook by Evangeline Parsons Yazzie and Margaret Speas, useful for an organized course when paired with fluent audio and correction.", "unm-resources") }
    ]
  },

  wordsAndTexts: {
    overview: cited(
      "A Navajo word is often a doorway into relationship rather than a detachable label. Hózhǫ́ can concern beauty, balance, order, wellness, and the ongoing work of living well; translating it as a mystical slogan empties it. K'é describes kinship and right relationship but is learned through obligations and forms of address, not a one-line definition. Place names describe land, water, color, plants, events, and histories with detail that English map labels often suppress. Verbs contribute equal richness: handling stems make the physical character of an object grammatically salient, while motion verbs track path and manner. Learn words from Diné-produced sentences and note who uses them, with whom, and for what purpose.",
      "dine-college",
      "nla-lexicon",
      "unm-mission"
    ),
    notableWords: [
      { term: "hózhǫ́", meaning: "beauty, harmony, balance, well-being", note: cited("A culturally central, context-dependent idea and verbal root family, not a decorative synonym for ‘pretty.’ Learn it through Diné explanations and complete expressions.", "dine-college", "unm-mission") },
      { term: "k'é", meaning: "kinship and relationship expressed through mutual responsibilities", note: cited("K'é reaches beyond biological relation into how people identify, address, help, and conduct themselves toward one another. English ‘clan’ or ‘family’ captures only part of it.", "dine-college") },
      { term: "Diné Bikéyah", meaning: "Diné homeland; Navajoland", note: cited("Bikéyah relates people and land. The phrase foregrounds a homeland extending across present state borders rather than treating the Navajo Nation as merely a reservation polygon.", "dine-history") },
      { term: "yéego", meaning: "with effort, strongly, diligently", note: cited("Common encouragement whose best translation changes with the verb and situation. It can urge someone to keep going rather than naming a fixed intensity.", "nla-lexicon") },
      { term: "naat'áanii", meaning: "leader; one who speaks and moves on behalf of people", note: cited("Often translated ‘leader’ or historically ‘chief,’ but its use belongs in Diné systems of responsibility and governance rather than imported stereotypes.", "navajo-official", "dine-college") },
      { term: "bizaad", meaning: "his/her/its language; speech", note: cited("The possessive form appears in Diné Bizaad. Language names built with bizaad underscore that speech belongs in relation to a people or community.", "nla-lexicon") },
      { term: "t'ááłá'í", meaning: "one", note: cited("The word offers concentrated pronunciation practice: glottalized consonants and glottal stops are structural, not optional punctuation.", "learn-navajo") }
    ],
    loanwordLayers: cited(
      "Navajo has borrowed and adapted words across long contact. Spanish-era vocabulary accompanied livestock and new material culture; English loans and code-switches appear in school, government, work, medicine, vehicles, and digital life. Speakers also coin descriptive Navajo expressions or extend an existing verb. Borrowing choices differ by generation and context: one speaker may prefer a Diné technical term, another an integrated loan, and another an English switch. None can be evaluated from etymology alone. Historical claims about an apparently Spanish, Pueblo, or English word should be checked in a specialist dictionary because resemblance encourages attractive but false stories.",
      "wiki-navajo",
      "nla-lexicon"
    ),
    idioms: [
      { original: "T'áá hwó' ají t'éego.", translation: "It is up to oneself, through one's own effort.", note: "Literally, roughly ‘only oneself, as one does/acts.’ A widely cited expression of self-reliance and responsibility; its social meaning is richer than individualistic ‘do it alone.’" },
      { original: "Yéego ííyááł.", translation: "Keep going with determination.", note: "Literally, ‘go strongly/with effort.’ An encouraging expression; inflection changes with the person being addressed and the specific action." },
      { original: "Hózhǫ́ náhásdlį́į́'.", translation: "Harmony or beauty has been restored.", note: "Literally, ‘hózhǫ́ has become again.’ Known from a culturally important closing expression. Do not use it as a casual exotic flourish; learn its setting from Diné teachers." },
      { original: "T'áá íiyisíí ahéhee'.", translation: "Thank you very much.", note: "Literally, roughly ‘especially/most of all, thank you.’ A warm expansion of ahéhee'; pronunciation and context matter more than substituting it mechanically for every English thanks." },
      { original: "Nizhónígo ch'aanídíínaał.", translation: "May you live beautifully/well.", note: "Literally, ‘in a beautiful or harmonious way, may one live.’ A blessing-like sentiment whose force depends on relationship and occasion; verify the appropriate addressed form with a speaker." }
    ],
    textGenres: [
      "Family conversation, kinship introductions, teasing, advice, and oral histories",
      "Publicly shareable traditional narratives, with season and ownership observed where required",
      "Contemporary poetry, fiction, memoir, children's literature, and language-learning texts",
      "Radio news, public-service announcements, chapter meetings, government interpretation, and political speeches",
      "Songs, spoken-word performance, film dubbing, podcasts, and social video",
      "Technical language in education, health, law, land stewardship, science, and emergency communication"
    ]
  },

  relationships: {
    overview: cited(
      "Navajo's closest genealogical neighbors are the Apache languages, together forming Southern Athabaskan; more distant relatives stretch north and west. Pueblo languages, Spanish, and English are contact languages, not close family members. Shared grammar and shared history are different evidence. Navajo's public profile reflects its speaker population and the Code Talkers, but it cannot stand in for hundreds of distinct Indigenous languages.",
      "glottolog-navajo",
      "wiki-navajo",
      "nps-codetalkers"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Diné Bizaad is not public domain because its alphabet and dictionaries are public. Greetings, classes, news, and books are available to learners; some stories, songs, names, medicinal knowledge, and ceremonial speech are governed by season, kinship, training, or consent. Ask rather than guessing. Do not frame every conversation around language death, Code Talkers, or grammar: Diné speakers use the language for jokes, childcare, work, politics, art, and technology. Outsiders can pay teachers, buy Diné-produced materials, cite Diné scholarship, retain diacritics, and be honest about limited competence. Heritage learners may be reclaiming transmission interrupted by policy; neither shame nor a stranger's enthusiasm should set the terms.",

  resources: [
    { type: "dictionary", title: "Navajo Language Academy Talking Dictionary", url: "https://talkingdictionary.swarthmore.edu/navajo/", level: "all", description: cited("Speaker audio, lexicons, grammar constructions, and examples from a collaboration involving the Navajo Language Academy and Navajo Technical University.", "nla-lexicon") },
    { type: "course", title: "UNM Navajo Language Program resources", url: "https://navajo.unm.edu/other-resources/", level: "all", description: cited("A well-curated hub for public reading, video, dictionary, children's-book, and community-learning material.", "unm-resources") },
    { type: "media", title: "Navajo Nation Diné Bizaad stories", url: "https://opvp.navajo-nsn.gov/dine-bizaad/", level: "all", description: cited("Short original Diné Bizaad stories with audio by fluent speakers, designed to grow into vocabulary and conversational instruction.", "navajo-stories") },
    { type: "course", title: "LearnNavajo.com", url: "https://www.learnnavajo.com/", level: "beginner", description: cited("A free, domain-based introduction beginning with alphabet and pronunciation and moving through verbs, family, food, education, work, numbers, and time.", "learn-navajo") },
    { type: "community", title: "Diné College Navajo Language BA", url: "https://www.dinecollege.edu/academics/b-a-navajo-language/", level: "advanced", description: cited("A Diné-governed higher-education route integrating fluent speaking, literacy, teaching, government, cultural knowledge, and professional practice.", "dine-college") },
    { type: "other", title: "Unicode FAQ: characters and combining marks", url: "https://www.unicode.org/faq/char_combmark.html", level: "advanced", description: cited("A technical explanation of the ogonek used for Navajo nasalization, normalization, and why a visually similar cedilla is not the same mark.", "unicode-marks") }
  ],
  relatedLanguages,

  phrases: [
    { original: "Yá'át'ééh.", translation: "Hello; it is good.", usageNote: "The standard greeting. Keep both glottal stops and the long high vowel; English ‘yah-ta-hey’ is only a rough approximation." },
    { original: "Yá'át'ééh abíní.", translation: "Good morning.", literalMeaning: "It is good, morning.", usageNote: "A common morning greeting; listen for how fluent speakers join the words." },
    { original: "Ahéhee'.", translation: "Thank you.", usageNote: "A basic expression of thanks. The final apostrophe represents a glottal stop." },
    { original: "T'áá shǫǫdi.", translation: "Please; if you would.", usageNote: "A polite request expression. Appropriate phrasing still depends on the request and relationship." },
    { original: "Hágoónee'.", translation: "Goodbye; until we meet again.", usageNote: "A leave-taking that is often explained through the expectation of meeting again." },
    { original: "Haash yinilyé?", translation: "What is your name?", literalMeaning: "What are you called?", usageNote: "A conventional name question; do not replace haash with an English-style word-by-word guess." },
    { original: "Shí Dana yinishyé.", translation: "My name is Dana.", literalMeaning: "I, Dana, I am called.", usageNote: "Substitute your name. The initial shí is an independent first-person pronoun used for focus." },
    { original: "Haa'át'íísh baa naniná?", translation: "What are you doing?", usageNote: "A useful conversational question; fluent pronunciation compresses more than a slow orthographic reading suggests." },
    { original: "Doo shił bééhózin da.", translation: "I don't know.", literalMeaning: "It is not known with/by me.", usageNote: "Notice the two-part negative frame doo ... da." },
    { original: "Diné bizaad shił bééhózin.", translation: "I know Navajo.", literalMeaning: "The Diné language is known with/by me.", usageNote: "Use modestly: knowing a few phrases is not the same as claiming broad competence." },
    { original: "Díí háísh bee hólǫ́?", translation: "Whose is this?", usageNote: "A possession question whose exact natural form can vary with the object and context; practice it with a teacher using real items." },
    { original: "Nizhónígo adááh naashá.", translation: "Have a good day.", literalMeaning: "Walk about/live through the day in a beautiful way.", usageNote: "A warm wish; learn the sound and addressed variants from a fluent model rather than relying on the English gloss." }
  ],

  sources: [
    { id: "navajo-official", title: "Executive Order No. 01-2025: Diné Bizaad Official Language of the Navajo Nation", url: "https://opvp.navajo-nsn.gov/executive-order-no-01-2025-dine-bizaad-official-language-of-the-navajo-nation/", publisher: "Office of the President and Vice President, Navajo Nation", publishedAt: "2025-01-14", accessedAt: "2026-07-10" },
    { id: "navajo-stories", title: "A New Resource to Learn and Strengthen Diné Bizaad", url: "https://opvp.navajo-nsn.gov/250104-learn-and-strengthen-dine-bizaad/", publisher: "Office of the President and Vice President, Navajo Nation", publishedAt: "2026-01-04", accessedAt: "2026-07-10" },
    { id: "dine-college", title: "B.A. Navajo Language", url: "https://www.dinecollege.edu/academics/b-a-navajo-language/", publisher: "Diné College", accessedAt: "2026-07-10" },
    { id: "dine-history", title: "History", url: "https://www.navajo-nsn.gov/History", publisher: "Navajo Nation", accessedAt: "2026-07-10" },
    { id: "dine-treaty", title: "Treaty of 1868", url: "https://www.navajo-nsn.gov/History/Treaty-of-1868", publisher: "Navajo Nation", accessedAt: "2026-07-10" },
    { id: "unm-mission", title: "Our Mission", url: "https://navajo.unm.edu/mission-statement/", publisher: "University of New Mexico Navajo Language Program", accessedAt: "2026-07-10" },
    { id: "unm-resources", title: "Learning Materials", url: "https://navajo.unm.edu/other-resources/", publisher: "University of New Mexico Navajo Language Program", accessedAt: "2026-07-10" },
    { id: "nla-lexicon", title: "Navajo: Lexicons, Grammars and Examples", url: "https://talkingdictionary.swarthmore.edu/navajo/", publisher: "Navajo Language Academy, Navajo Technical University, and Swarthmore College", accessedAt: "2026-07-10" },
    { id: "learn-navajo", title: "Diné Bizaad: Learn Navajo", url: "https://www.learnnavajo.com/", publisher: "LearnNavajo.com", accessedAt: "2026-07-10" },
    { id: "unicode-marks", title: "FAQ: Characters and Combining Marks", url: "https://www.unicode.org/faq/char_combmark.html", publisher: "Unicode Consortium", accessedAt: "2026-07-10" },
    { id: "glottolog-navajo", title: "Glottolog 5.2: Navajo", url: "https://glottolog.org/resource/languoid/id/nava1243", publisher: "Glottolog", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "census-language", title: "About Language Use in the United States", url: "https://www.census.gov/topics/population/language-use/about.html", publisher: "United States Census Bureau", accessedAt: "2026-07-10" },
    { id: "nps-codetalkers", title: "Navajo Code Talkers and the Unbreakable Code", url: "https://www.nps.gov/articles/navajo-code-talkers.htm", publisher: "U.S. National Park Service", updatedAt: "2023-11-22", accessedAt: "2026-07-10" },
    { id: "ucla-revitalization", title: "Reclaiming a Native-American Language", url: "https://newsroom.ucla.edu/stories/reclaiming-a-native-american-language", publisher: "UCLA Newsroom", publishedAt: "2015-10-27", accessedAt: "2026-07-10" },
    { id: "wiki-navajo", title: "Navajo language", url: "https://en.wikipedia.org/wiki/Navajo_language", publisher: "Wikipedia", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Navajo Language Guide: Diné Bizaad Sounds, Verbs and Learning",
    description: "A reader-focused guide to Diné Bizaad history, community variation, tone and spelling, Navajo verb structure, practical phrases, cultural context, and Diné-led learning resources."
  }
} satisfies LanguageGuide;
