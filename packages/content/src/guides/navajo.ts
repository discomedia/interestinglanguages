import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Western Apache",
    relationship: "Close Southern Athabaskan relative",
    explanation: cited(
      "Western Apache shares a Southern Athabaskan history and many verb patterns with Navajo. It is a distinct community language; a Navajo learner should not assume that familiar words make conversation automatic.",
      "glottolog-navajo",
      "wiki-navajo"
    )
  },
  {
    name: "Mescalero-Chiricahua Apache",
    relationship: "Southern Athabaskan relative",
    explanation: cited(
      "Mescalero-Chiricahua Apache is another Southern Athabaskan language. Related words and verb prefixes show ancestry, while each community has its own speech and history.",
      "glottolog-navajo",
      "wiki-navajo"
    )
  },
  {
    name: "Dene Kedé and other Northern Dene languages",
    relationship: "More distant Athabaskan relatives",
    explanation: cited(
      "Dena’ina, Ahtna, Koyukon, and other northern Athabaskan languages share deeper ancestry with Navajo. Their long separate histories mean a Navajo speaker cannot simply understand everyday speech from the north.",
      "glottolog-navajo",
      "wiki-navajo"
    )
  },
  {
    name: "Pueblo languages",
    relationship: "Long-standing neighboring languages, not genealogical relatives",
    explanation: cited(
      "Hopi, Zuni, and Keresan languages have long shared the Southwest with Diné communities. Contact can bring exchanged words and practices, but these languages belong to different families.",
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
  summary: "Diné Bizaad is spoken in homes, schools, government, radio, and online across Diné communities. Its written accents and hooks show sounds that English spelling cannot.",
  family: "Na-Dene, Athabaskan",
  macroRegion: "North America",
  primaryScript: "Latin",
  difficultyLabel: "Very demanding",
  learnerHook: "Hear how a vowel changes when it is long, high toned, or nasal, then learn a verb in the sentence where a speaker uses it.",
  hero: {
    imageAlt: "Diné Bizaad text in its modern Latin orthography, including tone and nasalization marks.",
    callToActionLabel: "Hear Diné Bizaad in use"
  },
  classification: "A Southern Athabaskan language in the Na-Dene family",
  speakerCommunity: "Diné Bizaad belongs to Diné people across Diné Bikéyah and in cities and households beyond the Navajo Nation. A census question about language at home cannot tell you who understands an elder, speaks with children, or reads a public notice. Use dated figures only with their survey definition.\n\nMany fluent speakers are older adults, while many children grow up mainly in English. Families, teachers, immersion schools, broadcasters, tribal colleges, and artists also use and teach Diné Bizaad now. Their work includes everyday talk as well as formal occasions.\n\nThe Navajo Nation made Diné Bizaad its official language through legislation signed in December 2024. A January 2025 executive order told executive offices to use it in written documents and explore staff learning and bilingual signs. The law expresses a public commitment; it does not mean every office or family already uses the language in the same way.",
  facts: [
    { label: "Autonym", value: "Diné Bizaad — ‘the people's language’" },
    { label: "Family", value: "Na-Dene · Athabaskan · Southern Athabaskan" },
    { label: "Homeland", value: "Diné Bikéyah across Arizona, New Mexico, and Utah" },
    { label: "Writing", value: "Latin alphabet with acute accents, ogoneks, and apostrophes" },
    { label: "Sound", value: "Tone, vowel length, nasal vowels, and glottalized consonants" },
    { label: "National status", value: "Official language of the Navajo Nation since 2024" }
  ],
  introduction: cited("Diné Bizaad is spoken across Diné Bikéyah in Arizona, New Mexico, and Utah, and by Diné families in towns and cities beyond the Navajo Nation. It is heard in homes, schools, public announcements, and new audio stories. The University of New Mexico's Navajo Sound Profile relays an undated Ethnologue estimate of about 156,000 speakers, while also reporting that relatively few children in the communities it studied were acquiring the language at home.\n\nKnown as Navajo in English, Diné Bizaad belongs to the Southern Athabaskan branch of a language family with relatives far to the north. Its written accents and hooks mark differences that affect pronunciation: á has high tone, ą is nasal, and aa lasts longer than a. The verb can carry information that English spreads across several words, including who takes part and how an action unfolds.\n\nThe Navajo Nation designated Diné Bizaad its official language through legislation signed in December 2024. A January 2025 executive order directed executive offices to include the language in written documents and examine staff learning and bilingual signs. Those public measures sit alongside work by Diné families, teachers, broadcasters, and writers who use the language today.", "unm-sound", "navajo-stories", "glottolog-navajo", "nla-lexicon", "navajo-official", "dine-college"),

  origins: {
    overview: cited(
      "Diné Bizaad belongs to the Southern Athabaskan branch of a language family with relatives far to the north. Comparative linguistics traces a southern movement of Athabaskan-speaking ancestors before Spanish colonization. Diné accounts of homeland and emergence address relationships and responsibilities that a migration map cannot explain.\n\nDiné communities built lives around farming, sheep, trade, craft, and exchange with Pueblo peoples and later neighbors. Those relationships changed words and ways of speaking while the language kept its Athabaskan grammar. Learn this history through Diné accounts as well as linguistic research.",
      "glottolog-navajo",
      "wiki-navajo",
      "dine-history"
    ),
    timeline: [
      {
        period: "Before sustained European colonization",
        event: cited(
          "Southern Athabaskan-speaking communities established distinct Navajo and Apache histories in the Southwest. Diné accounts of homeland also explain relationships that a linguistic family tree cannot.",
          "wiki-navajo",
          "dine-history"
        )
      },
      {
        period: "17th–mid-19th centuries",
        event: cited(
          "Spanish and later Mexican rule changed trade, land use, and livestock economies. Diné people incorporated sheep and horses on their own terms, and some related words entered the language.",
          "wiki-navajo",
          "dine-history"
        )
      },
      {
        period: "1863–1868",
        event: cited(
          "The U.S. military forced thousands of Diné people on the Long Walk to Bosque Redondo, where many died. The 1868 treaty allowed survivors to return to part of Diné Bikéyah.",
          "dine-treaty",
          "dine-history"
        )
      },
      {
        period: "Late 19th–20th centuries",
        event: cited(
          "Federal and mission boarding schools separated many children from family and punished Native-language use. Diné speakers and educators also developed spelling, dictionaries, and teaching materials. Navajo Code Talkers used a specialized code in World War II, one chapter in a much larger language history.",
          "nps-codetalkers",
          "ucla-revitalization",
          "wiki-navajo"
        )
      },
      {
        period: "1968 to the present",
        event: cited(
          "Diné College began as Navajo Community College in 1968 and centered Diné language in higher education. Other community and university programs grew alongside it. Official-language legislation in 2024 and public audio stories launched in 2026 connect policy with daily learning.",
          "dine-college",
          "navajo-official",
          "navajo-stories",
          "unm-mission"
        )
      }
    ],
    contactHistory: cited(
      "Contact brought new words into Diné Bizaad. Spanish affected terms for livestock and introduced goods, while English appears in school, government, medicine, and technology. Speakers may borrow a word, switch languages, or make a descriptive Diné expression.\n\nA speaker’s choice can reflect the audience and subject rather than a lack of fluency. Check the history of an individual word in a specialist dictionary before assuming that it came from Spanish, a Pueblo language, or English.",
      "wiki-navajo",
      "nla-lexicon"
    ),
    standardization: cited(
      "Diné speakers and educators developed a practical spelling system for books, lessons, and public writing. It shows tone, vowel length, nasalization, and glottal stops, though it cannot capture every local accent.\n\nNavajo Nation legislation signed on December 24, 2024 made Diné Bizaad the Nation’s official language. A January 14, 2025 order directed executive offices to include at least one Diné Bizaad word or phrase in written documents, examine staff learning, and assess bilingual signs. These are specific instructions, not evidence that every service is already bilingual.",
      "navajo-official",
      "unm-sound"
    )
  },

  variants: {
    overview: cited(
      "Diné speakers can understand much speech across Diné Bikéyah, and they also notice differences among places and families. The UNM Navajo Sound Profile says its recordings center on Eastern Agency speech while planning broader regional coverage. Use its audio as a model with that scope in mind.\n\nAge, work, schooling, and family history also shape a person’s vocabulary. Someone may speak comfortably at home and still need help with legal terms; a student may read marked spelling but need more conversation. Treat each repertoire as part of living Diné Bizaad.",
      "unm-sound",
      "nla-lexicon",
      "wiki-navajo"
    ),
    items: [
      { name: "Western Navajo Nation", note: cited("Communities in western Arizona show local pronunciations and vocabulary shaped by family histories and contact with Hopi and English. Begin with a course, then ask local teachers what sounds natural.", "wiki-navajo", "unm-resources") },
      { name: "Central and northern communities", note: cited("Speech around Window Rock, Chinle, Shiprock, and many smaller communities is internally diverse. Government, school, grazing, chapter-house, and home domains each cultivate different vocabulary.", "navajo-official", "unm-resources") },
      { name: "Eastern and satellite communities", note: cited("Eastern Navajo communities in New Mexico and the satellite sections of the Nation have distinct contact histories. Borders on a map do not predict a person's accent, competence, or identity.", "dine-history", "wiki-navajo") },
      { name: "Formal, educational, and public language", note: cited("Classrooms and broadcasts often favor standardized spelling and explicit grammatical vocabulary. Public speaking can use parallelism and forms of address that a phrasebook conversation never teaches.", "unm-mission", "dine-college") },
      { name: "Culturally governed knowledge", note: cited("Some narratives, names, songs, and ceremonial language belong to particular people, seasons, or responsibilities. Public language study is not blanket permission to record, repeat, publish, or commercialize them. Ask the relevant Diné teacher or knowledge holder.", "unm-mission", "dine-college") }
    ]
  },

  pronunciation: {
    overview: cited(
      "Listen to a, á, ą, and ą́ in a Diné recording. They differ in tone or nasal airflow even though an English speaker may first hear one “a.” A doubled vowel such as aa also lasts longer than a single a.\n\nNavajo spelling marks these differences: an acute accent shows high tone, a small hook called an ogonek shows nasalization, and doubling shows length. Low tone has no accent. A long vowel can move from high to low or low to high, so read both vowel positions.",
      "unm-sound",
      "unicode-marks",
      "wiki-navajo"
    ),
    script: "Standard Navajo Latin orthography; acute accent marks high tone, ogonek marks nasalization, doubled vowels mark length",
    soundSystem: cited(
      "Navajo has four basic written vowel qualities: a, e, i, and o. Each can be short or long, oral or nasal, and high or low in tone. The UNM Sound Profile gives recordings of these combinations; compare two at a time.\n\nConsonants also carry contrasts English does not. The letter ł sounds when air passes along the sides of the tongue without voice. An apostrophe marks a glottal stop or a glottalized consonant such as tłʼ.\n\nHear these in whole words before trying to imitate them.",
      "unm-sound",
      "learn-navajo"
    ),
    prosody: cited(
      "Tone helps identify a Navajo word. A verb may also change its stem or tone as it describes an ongoing, completed, or repeated action. The written marks help you find those patterns.\n\nListen to a short recording at normal speed, then replay one phrase slowly. Keep long vowels long as you copy it. Ask the owner of a personal or place name for its pronunciation rather than relying on an unmarked English spelling.",
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
      { original: "kin", translation: "house; building", note: "A short word heard in many compounds and place names; keep all three sounds clear." }
    ]
  },

  writing: {
    overview: cited(
      "The Navajo alphabet uses Latin letters, including ł, plus accents, hooks, and apostrophes. These marks help a reader distinguish sounds and find words in a dictionary. A text without them may be harder to read even when its letters look familiar.\n\nOlder print, phone keyboards, and messages do not always show the marks consistently. Begin with fully marked words from a trusted source, then learn to recognize the shortcuts people actually use.",
      "unicode-marks",
      "nla-lexicon",
      "wiki-navajo"
    ),
    primaryScript: "Latin alphabet adapted for Navajo phonology",
    romanization: cited(
      "The ordinary Navajo spelling already uses Latin letters, so you do not need a second romanization. English approximations such as “yah-ta-hey” conceal several sounds in Yá’át’ééh. Copy the Navajo form and listen to a speaker.\n\nA computer may store the same-looking accents and hooks in more than one Unicode sequence. Use a Navajo keyboard and keep your notes consistent so searches work.",
      "unicode-marks"
    ),
    spellingNorms: cited(
      "An acute accent marks high tone; an unaccented vowel normally has low tone. The hook below a vowel marks nasalization, as in ą, and ą́ has both marks. Doubling marks a long vowel, so check both positions when you write it.\n\nAn apostrophe can represent a sound, not a pause in the sentence. Keep personal and clan names as their owners spell them. If search fails, check apostrophe shape and Unicode composition before assuming the word is absent.",
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
      "A Navajo verb can carry the work of an English verb, pronoun, and several extra words. Prefixes before the stem show participants and other information; the stem itself can change with the kind of event. Learn a complete spoken form before you study its pieces.\n\nA grammar may lay the prefixes out in numbered positions. That chart helps after you know some verbs, but it is not a recipe for assembling conversation. Compare a few related forms with a teacher and listen for the parts that change.",
      "nla-lexicon",
      "wiki-navajo"
    ),
    typologicalProfile: cited(
      "A Navajo clause often places the actor, then the object, then the verb. The verb can identify its participants, so speakers can vary the order for context. The order and the verb form work together when two third-person participants are involved.\n\nEnglish tense labels alone will not explain Navajo verbs. A speaker also chooses how to view an action: ongoing, completed, repeated, or expected. Linguists call these event viewpoints aspect and the broader verb forms mode.",
      "wiki-navajo",
      "nla-lexicon"
    ),
    morphology: cited(
      "A verb has a stem and ordered prefixes. Some prefixes identify the people involved, while others add direction or alter how an event unfolds. Neighboring sounds may blend, so the spoken result does not always reveal neat boundaries.\n\nThe stem for handling an object can depend on whether that object is round, long, flexible, granular, or plural. Grammars also use “classifier” for four prefixes near the stem; these do not classify nouns. Learn them through recorded verbs and real objects rather than the label alone.",
      "nla-lexicon",
      "wiki-navajo"
    ),
    syntax: cited(
      "Navajo speakers often put a person before an animal or object, even when that person receives the action. The verb can then show who acted on whom through a yi-/bi- pattern. Scholars differ over the full analysis, so start with attested sentence pairs.\n\nQuestions keep much of the same clause structure. Negation often puts doo before an expression and da after it. Longer sentences can use verb forms to describe people, things, and events without matching English word order piece by piece.",
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
        body: cited("Listen to two forms of the same action: one presents play in progress, and another reports it completed. The verb changes more than an English tense ending, so save both whole forms with their audio.", "learn-navajo", "nla-lexicon"),
        example: "Naashné. / Niséné.",
        exampleTranslation: "I am playing. / I played. LearnNavajo.com lists these together, letting you compare their prefixes and stems."
      },
      {
        title: "The doo ... da negative frame",
        body: cited("Negation commonly has two parts: doo appears before the expression being negated and da closes the frame. Person and aspect still appear inside the verb.", "learn-navajo", "nla-lexicon"),
        example: "Doo shił bééhózin da.",
        exampleTranslation: "I don't know it. Literally the construction frames shił bééhózin, ‘it is known by/with me.’"
      },
      {
        title: "Possession and kinship",
        body: cited("Many possessed nouns take a pronominal prefix. Learn kin and body-part words in sets such as ‘my,’ ‘your,’ and ‘his or her.’ English glosses do not capture every Diné kinship relationship.", "learn-navajo", "nla-lexicon"),
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
        body: cited("An English request such as ‘carry it’ leaves the object vague. Navajo handling verbs can select different stems for a compact item, a long rigid item, a flexible item, or an open container with contents. The UCI teaching example contrasts stems -aah, -kaah, and -lé; learn each in a recorded sentence before using it.", "nla-lexicon", "uci-grammar")
      },
      {
        title: "Animacy and yi-/bi- tracking",
        body: cited("The verb can show which of two people acts. In this documented pair, the nouns stay in the same order, but yi- and bi- switch who saw whom. Other patterns depend on the participants and their place in the conversation.", "uci-grammar", "nla-lexicon"),
        example: "Ashkii at’ééd yiyiiltsá. / Ashkii at’ééd biilstá.",
        exampleTranslation: "The boy saw the girl. / The girl saw the boy. Listen for the verb, because noun order alone does not settle who saw whom."
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
      "Diné Bikéyah spans northeastern Arizona, northwestern New Mexico, and southeastern Utah. Diné speakers also live in nearby towns and cities across the United States. Families move among these places for work, school, care, and visits.\n\nUnited States Census language tables count reported language use at home, which differs from fluency or Diné ideas of speakerhood. The UNM Sound Profile describes a marked age shift in its research. Read any speaker number with its year, method, and community setting.",
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
      "An English-speaking learner must hear tone, vowel length, nasal vowels, and consonants they may never have distinguished before. They also need many forms of a verb rather than one English translation. These tasks take repeated listening and correction.\n\nA heritage learner may already understand family conversation but want to read or speak more confidently. A teacher may need writing and classroom vocabulary. Set goals around the people and situations you want to speak with.",
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
      "Practice with short Diné recordings several times a week. Transcribe a few seconds with all marks, check against a trusted text, and repeat the phrase until you can hear its vowel length and tone. Keep the whole sentence with each verb in your notes.\n\nReturn to that sentence in a story, lesson, or conversation. A children’s book with audio or a public Navajo Nation story gives you repeated language in context. Make time for a teacher or speaker who can correct your use, and respect their time.",
      "unm-resources",
      "learn-navajo",
      "navajo-stories"
    )
  },

  advancedLearning: {
    strategy: cited(
      "Choose a domain you will actually discuss: family, food, school, weather, livestock, or chapter government. Gather a small set of recorded sentences and ask a teacher which forms fit your community. Change one part at a time after you can say the original naturally.\n\nAsk before recording a speaker or sharing a story. Heritage learners can let relatives set topics and privacy boundaries. Public classes and paid instruction give other learners a clear place to begin.",
      "unm-mission",
      "dine-college",
      "unm-resources"
    ),
    mediaPractice: cited(
      "Listen to publicly shared Diné Bizaad stories, government announcements, radio, interviews, and lessons. First hear a short clip without text; then read along, mark the words you missed, and listen again. The Navajo Nation’s audio stories offer a direct pairing of narration and written text.\n\nChildren’s books can help because pictures and repetition support a new reader. Check whether a song or narrative was shared for public use before saving or quoting it. Keep ceremonial material within the conditions Diné teachers set.",
      "navajo-stories",
      "unm-resources",
      "nla-lexicon"
    ),
    dictionariesAndCorpora: cited(
      "The Navajo Language Academy’s talking dictionary pairs entries with audio and grammatical examples. Use it to compare a form you heard with related verbs, not just to find an English equivalent. A word may begin with several prefixes before the part a dictionary groups it under.\n\nYoung and Morgan’s grammar and dictionary give fuller analysis, while public teaching sites offer smaller steps. Check an unfamiliar written example with a speaker before treating it as a model for your own conversation.",
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
      { type: "book", title: "Diné Bizaad Bínáhoo'aah: Rediscovering the Navajo Language", url: "https://salinabookshelf.com/products/dine-bizaad-binahooaah-rediscovering-the-navajo-language", level: "beginner", description: cited("Evangeline Parsons Yazzie and Margaret Speas's learner textbook fits a structured course with fluent audio and correction.", "unm-resources") }
    ]
  },

  wordsAndTexts: {
    overview: cited(
      "Hózhǫ́ and k’é connect language with ways of living and relating to others. An English gloss such as “beauty” or “kinship” names only part of either word’s use. Listen to Diné explanations and ask how the words work in a particular sentence.\n\nPlace names may describe land and history in details an English map label omits. Verbs can distinguish how an object is carried or how someone moves. Collect words inside sentences from Diné speakers rather than as detachable cultural slogans.",
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
      "Navajo speakers have borrowed words during long contact with Spanish and English. A borrowed word may take Navajo sounds and grammar, while another speaker may choose a descriptive Diné expression or switch to English for a topic. Those choices vary by setting and generation.\n\nDo not label a form authentic or inauthentic by its origin. Check an etymology in a specialist dictionary: a familiar sound alone does not prove where a word came from.",
      "wiki-navajo",
      "nla-lexicon"
    ),
    idioms: [
      { original: "T'áá hwó' ají t'éego.", translation: "It is up to oneself, through one's own effort.", note: "Literally, roughly ‘only oneself, as one does/acts.’ A widely cited expression of self-reliance and responsibility; its social meaning is richer than individualistic ‘do it alone.’" },
      { original: "T’áá hó ágít’éego.", translation: "Success is up to you.", note: "LearnNavajo.com gives this as an encouragement in its education lesson. Ask a speaker when it fits a real conversation." },
      { original: "Hózhǫ́ náhásdlį́į́'.", translation: "Harmony or beauty has been restored.", note: "Literally, ‘hózhǫ́ has become again.’ Known from a culturally important closing expression. Do not use it as a casual exotic flourish; learn its setting from Diné teachers." },
      { original: "T'áá íiyisíí ahéhee'.", translation: "Thank you very much.", note: "A stronger expression of thanks heard in Diné public remarks. Listen to its rhythm in a complete speech." }
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
      "Navajo is closest to the Apache languages within Southern Athabaskan. It shares more distant ancestry with Athabaskan languages in Alaska, Canada, and the Pacific Coast. That family history does not make everyday conversation mutually intelligible across the whole group.\n\nDiné people have also lived beside Pueblo communities and speakers of Spanish and English for generations. Contact can spread words and practices without making those languages genealogical relatives.",
      "glottolog-navajo",
      "wiki-navajo",
      "nps-codetalkers"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Diné speakers use their language for family talk, humor, work, politics, songs, education, and online life. Some stories, names, and ceremonial expressions carry restrictions tied to family, season, training, or consent. Ask a Diné teacher or knowledge holder what may be repeated or shared.\n\nOutsiders can pay teachers, buy Diné-produced materials, preserve written marks, and state their own level honestly. Heritage learners may be rebuilding transmission interrupted by schooling or other policies; let them set the pace and purpose.",

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
    { original: "Bíhoosh’aah.", translation: "I am learning.", usageNote: "A first-person learning verb given in LearnNavajo.com's education lesson." },
    { original: "Doo shił bééhózin da.", translation: "I don't know.", literalMeaning: "It is not known with/by me.", usageNote: "Notice the two-part negative frame doo ... da." },
    { original: "Diné bizaad shił bééhózin.", translation: "I know Navajo.", literalMeaning: "The Diné language is known with/by me.", usageNote: "Use modestly: knowing a few phrases is not the same as claiming broad competence." },
    { original: "Nitahísh yá’áhoot’ééh?", translation: "Are you feeling well?", usageNote: "LearnNavajo.com lists this in its health lesson; it asks about well-being rather than functioning as every greeting." },
    { original: "Shitah yá’áhoot’ééh.", translation: "I am feeling well.", usageNote: "A reply from the same health lesson. Listen for how speakers use it in context." }
  ],

  sources: [
    { id: "navajo-official", title: "Executive Order No. 01-2025: Diné Bizaad Official Language of the Navajo Nation", url: "https://opvp.navajo-nsn.gov/executive-order-no-01-2025-dine-bizaad-official-language-of-the-navajo-nation/", publisher: "Office of the President and Vice President, Navajo Nation", publishedAt: "2025-01-14", accessedAt: "2026-07-10" },
    { id: "unm-sound", title: "Navajo Sound Profile", url: "https://navajo.unm.edu/dinesound/html/main.html", publisher: "University of New Mexico Navajo Language Program", accessedAt: "2026-09-27" },
    { id: "uci-grammar", title: "Language Structure, Lecture 17", url: "https://sites.socsci.uci.edu/~lpearl/courses/psych156A_2008spring/lectures/Lecture17-LanguageStructureBW.pdf", publisher: "University of California, Irvine", accessedAt: "2026-09-27" },
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
