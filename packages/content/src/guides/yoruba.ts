import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Itsekiri",
    relationship: "Close Yoruboid relative",
    explanation: cited(
      "Itsekiri is closely related to Yoruba but is a language in its own right, centered in the western Niger Delta. Long contact with Yoruba, Edo, Portuguese, and other regional languages shaped it. A Yoruba speaker may recognize much, yet differences in sound, vocabulary, and grammar make effortless mutual understanding an unsafe assumption.",
      "glottolog-yoruba",
      "wiki-yoruba"
    )
  },
  {
    name: "Igala",
    relationship: "Yoruboid relative",
    explanation: cited(
      "Igala, spoken chiefly east of the Niger–Benue confluence, belongs in the Yoruboid comparison. Shared inherited vocabulary and structures help historical linguists reconstruct the branch. The relationship also complicates neat ethnic maps: language families preserve movements and connections that do not fit modern state borders.",
      "glottolog-yoruba",
      "wiki-yoruba"
    )
  },
  {
    name: "Edo (Bini)",
    relationship: "Neighboring Volta–Niger language",
    explanation: cited(
      "Edo is not Yoruboid, but it is a long-standing neighbor in southern Nigeria. Political, commercial, and family histories created borrowing and multilingual border communities. Comparing the two is a useful lesson in contact: regional resemblance does not automatically prove especially close descent.",
      "glottolog-yoruba",
      "wiki-yoruba"
    )
  },
  {
    name: "Fon and other Gbe languages",
    relationship: "Western neighbors and contact languages",
    explanation: cited(
      "Yoruba varieties meet Fon, Gun, Ewe, and other Gbe languages across Benin and Togo. Markets, migration, religion, and intermarriage have long supported bilingualism. Nago and related identity labels in Benin show why the social name of a community and a linguist's dialect label do not always line up neatly.",
      "language-profiles",
      "wiki-yoruba"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const yorubaGuide = {
  slug: "yoruba",
  name: "Yoruba",
  autonym: "Èdè Yorùbá",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Yoruba is a widely spoken West African language with three tones. Speakers use it across Nigeria, Benin, Togo, and diasporas in conversation, print, film, music, and religious life.",
  family: "Niger–Congo, Atlantic–Congo, Volta–Niger, Yoruboid",
  macroRegion: "West Africa and global Yoruba diasporas",
  primaryScript: "Latin alphabet with vowel and tone diacritics",
  difficultyLabel: "Demanding",
  learnerHook: "Hear how high, middle, and low tones change Yoruba words, then follow those words into greetings, stories, films, and everyday conversation.",
  hero: {
    imageAlt: "Fully marked Yoruba text alongside contemporary books and media, showing tone marks and underdotted letters.",
    callToActionLabel: "Hear Yoruba in use"
  },
  classification: "A Yoruboid language within Volta–Niger; older literature often uses the broader label Defoid",
  speakerCommunity: "Most Yoruba speakers live in southwestern Nigeria, with communities in Benin and Togo and across the world. A 2023 language profile estimates more than 50 million first-language speakers and more than 5 million additional-language users. Counts differ with survey year, varieties included, and how people report their language.\n\nPeople use Yoruba at home, in markets, worship, schools, broadcasting, film, music, and online. Many also speak English, Nigerian Pidgin, French, or another regional language. In the Atlantic diaspora, Yoruba-derived songs and ritual words have their own histories; knowing them does not necessarily mean speaking conversational Yoruba.",
  facts: [
    { label: "Family", value: "Niger–Congo · Atlantic–Congo · Volta–Niger · Yoruboid" },
    { label: "Core area", value: "Southwestern Nigeria, Benin, and Togo" },
    { label: "Speaker scale", value: "More than 50 million first-language speakers in a 2023 profile; estimates vary" },
    { label: "Tone", value: "High, mid, and low; tone is lexical and grammatical" },
    { label: "Standard", value: "Standard Yoruba, historically shaped by Oyo/Ibadan speech and print practice" },
    { label: "Writing", value: "Latin alphabet with ẹ, ọ, ṣ and acute/grave tone marks" }
  ],
  introduction: cited(
    "Yoruba is spoken most widely in southwestern Nigeria, with communities in neighboring Benin and Togo and across a wider diaspora. In current classifications it belongs to the Yoruboid group within Volta–Niger, commonly placed in the broader Niger–Congo family. A language profile published in 2023, drawing on earlier estimates, put first-language speakers above 50 million; counts vary with the varieties included and how speakers are recorded.\n\nYoruba has regional varieties that differ in sound, words, and grammar. A written standard helps connect schooling, newspapers, books, and broadcasting across those differences. Its public history includes nineteenth-century wordlists and grammars, as well as later decisions about how to represent sounds in print.\n\nYoruba uses high, middle, and low speech tones, so changing the pitch of a syllable can change a word's meaning. Standard spelling marks high and low with accents, while middle is usually unmarked. Talking drums can imitate patterns of spoken Yoruba in musical performance.",
    "language-profiles",
    "glottolog-yoruba",
    "uga-about",
    "uga-tones"
  ),
  origins: {
    overview: cited(
      "Yoruba belongs to the Yoruboid branch of the Niger–Congo family. Older sources often use the wider label Defoid, but that name does not settle every proposed family relationship. Linguists compare regular sound and grammar patterns to trace earlier speech.\n\nYoruba-speaking societies grew through linked towns, trade, farming, kingdoms, and religious institutions. Ilé-Ifẹ̀, Ọ̀yọ́, Ìjẹ̀bú, Ẹ̀gbá, Ondo, and Ekiti each have histories. Accounts of Odùduwà and Ilé-Ifẹ̀ carry cultural and political meaning; they answer different questions from a linguistic family tree.",
      "glottolog-yoruba",
      "wiki-yoruba",
      "language-profiles"
    ),
    timeline: [
      {
        period: "Before sustained alphabetic records",
        event: cited(
          "Yoruba knowledge circulated through speech, performance, apprenticeship, material art, praise names, lineage histories, proverbs, and Ifá's organized corpus of verses. Calling this period ‘unwritten’ must not imply that it lacked disciplined forms of preservation or interpretation. Oral specialists work with memory, variation, authority, and audience rather than reproducing a frozen transcript.",
          "unesco-ifa",
          "wiki-yoruba"
        )
      },
      {
        period: "18th–early 19th centuries",
        event: cited(
          "Atlantic enslavement carried Yoruba-speaking people and their neighbors to the Americas, while political conflict and the decline of the Oyo Empire reshaped communities within West Africa. The broad diaspora label ‘Lucumí’ in Cuba and Nagô in Brazil preserves histories of Yoruba-related identity, but their ritual languages should not be presented as unchanged modern Standard Yoruba.",
          "wiki-yoruba"
        )
      },
      {
        period: "1840s–1870s",
        event: cited(
          "Samuel Ajayi Crowther, himself a Yoruba speaker who had been freed from enslavement, published a Yoruba grammar and vocabulary in 1843 and a fuller dictionary and grammar in 1852. Mission printing, translation, schools, and newspapers helped stabilize a Roman-letter convention, while choices among dialect features inevitably gave some forms wider institutional reach than others.",
          "uga-about",
          "wiki-yoruba"
        )
      },
      {
        period: "20th-century standardization",
        event: cited(
          "Schooling, broadcasting, scholarship, creative writing, and orthography committees extended a common standard. The 1966 Yoruba Orthography Committee report and Ayọ Bamgboṣe's work are important landmarks in the modern spelling system. Standardization increased cross-regional literacy, but did not turn local varieties into errors.",
          "wiki-orthography",
          "uga-about"
        )
      },
      {
        period: "Late 20th century to today",
        event: cited(
          "Yoruba expanded through Nollywood film, popular music, radio, television, migration, and digital writing. Online text also exposed an old practical tension: fully marked Yoruba is precise, while keyboards, hurried publishing, and software have often encouraged missing diacritics. Digital dictionaries, corpora, keyboards, and automatic diacritic-restoration research now make careful writing easier.",
          "diacritic-paper",
          "yorubaname",
          "iowa-resources"
        )
      }
    ],
    contactHistory: cited(
      "Yoruba speakers have long met neighbors who use Edoid, Igala, Nupe, Gbe, Hausa, and other languages. Trade, religion, movement, and conflict brought words and practices across these communities. Arabic-origin words often arrived through Islamic learning and sometimes through Hausa.\n\nPortuguese contact added some Atlantic-era vocabulary. English later spread through colonial government and schooling. Today a speaker may shift between Yoruba, English, and Nigerian Pidgin to suit a topic, joke, or audience.",
      "wiki-yoruba",
      "uga-about",
      "language-profiles"
    ),
    standardization: cited(
      "Standard Yoruba draws strongly on Oyo- and Ibadan-area features and the history of mission print. Schools, dictionaries, literature, and cross-regional media use it. Local varieties still carry their own words and sound patterns.\n\nEdited writing distinguishes e from ẹ, o from ọ, and s from ṣ. It also marks high and low tones. Many informal messages omit some marks, but beginners should learn the marked forms before relying on context to fill them in.",
      "uga-about",
      "wiki-orthography",
      "diacritic-paper"
    )
  },
  variants: {
    overview: cited(
      "Nearby Yoruba-speaking communities often share many features, while differences grow across a wider area. Scholars describe several regional groupings, but the boundaries and names vary. Sound patterns, words, pronouns, and small grammatical forms all change from place to place.\n\nStandard Yoruba offers a shared written form. Lagos media also carries urban speech across regions. A learner who knows only the standard may still need time with fast Ìjẹ̀bú, Èkìtì, Ondo, or Ìjẹ̀ṣà speech.",
      "wiki-yoruba",
      "uga-about"
    ),
    items: [
      { name: "Standard Yoruba", note: cited("The principal norm of schooling, edited print, many courses, and cross-regional formal communication. Spoken standard retains the speaker's regional voice and is not simply one prestige accent.", "uga-about", "wiki-orthography") },
      { name: "Oyo–Ibadan and northwestern varieties", note: cited("Historically influential in the standard and in major urban networks. Oyo and Ibadan speech are themselves not identical, and age and neighborhood matter.", "uga-about", "wiki-yoruba") },
      { name: "Central varieties", note: cited("Varieties associated with Ifẹ̀, Ìjẹ̀ṣà, and Ekiti regions illustrate how bundles of features cross administrative borders. Some preserve vowel or tone distinctions absent from standard descriptions.", "wiki-yoruba", "uga-about") },
      { name: "Southeastern varieties", note: cited("Ondo, Owo, Ikale, Ilaje, and neighboring forms show substantial internal diversity. Labels can cover town-level identities that speakers hear more finely than an introductory map shows.", "wiki-yoruba", "uga-about") },
      { name: "Benin and Togo continua", note: cited("Nago, Ife, and related labels are used in multilingual settings where Standard Yoruba, local Yoruboid speech, French, and neighboring languages may have different roles. Do not assume the Nigerian school standard maps perfectly onto local identity.", "language-profiles", "glottolog-yoruba") },
      { name: "Diaspora ritual registers", note: cited("Lucumí in Cuba and Yoruba-derived religious vocabulary in Brazil and elsewhere preserve important histories. They are best learned through their own communities rather than treated as imperfect conversational Nigerian Yoruba.", "unesco-ifa", "wiki-yoruba") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Standard Yoruba has seven oral vowel qualities: i, e, ẹ, a, ọ, o, u. Many syllables consist of a vowel, a consonant and vowel, or a nasal that forms its own syllable. Native words generally avoid consonant clusters and final oral consonants.\n\nThe letters gb and p name sounds made with the lips and the back of the tongue nearly at once. They are labial-velar stops, not English-style consonant sequences. Dialects differ in some vowel and consonant patterns, so choose an audio model before copying a pronunciation chart.",
      "uga-grammar",
      "wiki-yoruba"
    ),
    script: "Fully marked Standard Yoruba orthography; IPA is useful for the labial-velar stops and vowel contrasts",
    soundSystem: cited(
      "Ẹ and ọ represent more open vowels than e and o. Ṣ sounds roughly like English sh, while s remains s. These distinctions belong to the letters, even before tone enters the picture.\n\nYoruba also has high, middle, and low tones. Writers mark high with an acute accent and low with a grave; middle usually has no mark. Tone helps distinguish words and grammatical forms.\n\nIn running speech, one high tone can sound lower than an earlier high after a low tone. Linguists call this downstep.",
      "uga-tones",
      "wiki-orthography",
      "unilag-tones"
    ),
    prosody: cited(
      "High, middle, and low are relative pitches, not three fixed musical notes for a whole sentence. Questions, a speaker’s range, and neighboring tones shape what you hear. Learn a word’s tone pattern, then imitate it inside a short phrase.\n\nYoruba does not use English-style word stress to carry the same job. Hum a short recording first if that helps you hear its contour. Then repeat the vowels, consonants, and tone together.",
      "uga-tones",
      "unilag-tones"
    ),
    learnerTraps: [
      "Treating acute and grave accents as optional pronunciation hints rather than part of the word",
      "Using louder volume for high tone instead of controlled relative pitch",
      "Merging e with ẹ or o with ọ, especially when typing without underdots",
      "Pronouncing gb as an English g followed by b rather than a coordinated labial-velar stop",
      "Adding English consonants at the ends of open syllables",
      "Expecting citation forms to remain acoustically unchanged across vowel elision and tone processes"
    ],
    sampleWords: [
      { original: "Yorùbá", translation: "Yoruba", note: "The sequence is mid–low–high. Keep the final high audible without turning it into English stress." },
      { original: "ẹja", translation: "fish", note: "Ẹ is more open than e; both syllables carry mid tone when unmarked." },
      { original: "ọ̀rẹ́", translation: "friend", note: "Practice open ọ plus a low-to-high melody. The underdot and accents encode different information." },
      { original: "ṣé", translation: "question/focus-related particle in common constructions", note: "Ṣ is like English sh; the high tone helps distinguish this small but frequent form." },
      { original: "gbogbo", translation: "all; every", note: "Each gb is one coordinated labial-velar consonant, not a two-consonant cluster." },
      { original: "pápá", translation: "field", note: "Standard Yoruba p is commonly a voiceless labial-velar stop; this word also practices two high tones." },
      { original: "ìyá", translation: "mother", note: "A low-to-high two-syllable pattern; avoid inserting English y-glide timing before the first vowel." }
    ]
  },
  writing: {
    overview: cited(
      "Yoruba uses Latin letters with a few crucial additions. The underdots on ẹ and ọ distinguish vowels, and ṣ represents a different consonant from s. Acute and grave accents mark high and low tone; a middle tone normally has no accent.\n\nA vowel can carry an underdot and a tone mark at once. Names and ordinary words need both. When a keyboard or font drops a mark, distinct forms may become identical on screen.",
      "wiki-orthography",
      "unicode-latin",
      "diacritic-paper"
    ),
    primaryScript: "Latin-based Yoruba alphabet",
    romanization: cited(
      "Yoruba already uses Latin letters, so removing its marks is not romanization. Writing se for ṣe hides a consonant difference; leaving off tone hides another difference. Install a Yoruba keyboard and keep fully marked notes while you learn.",
      "wiki-orthography",
      "unicode-latin"
    ),
    spellingNorms: cited(
      "Careful writing marks tone and keeps each standard vowel letter distinct. Speech may merge neighboring vowels, but writers do not add an apostrophe at every such boundary. Names deserve the same care as common words.\n\nDigital tools can store the same visible marks in different Unicode sequences. Publishers should normalize text while preserving the writer’s letters and tones. A missing mark can change the word a reader sees.",
      "wiki-orthography",
      "yorubaname",
      "diacritic-paper"
    ),
    styleNotes: [
      cited("Use ẹ, ọ, and ṣ from the beginning. Underdots distinguish letters; acute and grave accents distinguish tones.", "wiki-orthography"),
      cited("Check personal names in YorubaName or with their owner rather than reconstructing accents from an unmarked English-language source.", "yorubaname"),
      cited("Keep a fully marked master copy even if a platform forces a plain-text fallback. Restoring diacritics later is a linguistic task, not mechanical decoration.", "diacritic-paper"),
      cited("Expect informal messages, headlines, and subtitles to vary in marking. Read them, but do not use inconsistent text as your only pronunciation model.", "diacritic-paper", "iowa-resources")
    ]
  },
  grammar: {
    overview: cited(
      "Yoruba usually shows grammar with short words, tone, and word order rather than long endings. Adé ra ìwé means “Ade bought a book,” with a familiar subject–verb–object order. Small changes elsewhere in the sentence can still change the meaning.\n\nPronouns have their own tones, particles can come before verbs, and several verbs may describe one event. Learn these as spoken sentence patterns, with the marks intact.",
      "uga-grammar",
      "wiki-yoruba"
    ),
    typologicalProfile: cited(
      "Standard Yoruba often puts subject, verb, then object. Nouns do not usually change form just to show singular or plural; àwọn can mark a plural group when needed. Verbs do not change ending for each person.\n\nShort words before a verb can show an ongoing action, an already completed situation, a future plan, or a negative statement. Several verbs can also share a subject in one event. Linguists call those serial verb constructions.",
      "uga-grammar",
      "wiki-yoruba"
    ),
    morphology: cited(
      "Yoruba can build new words by joining pieces or repeating part of a form. Jẹ “eat” helps form jíjẹ “eating” through a pattern that also changes tone. Díẹ̀díẹ̀ means “little by little.”\n\nNames and compounds can hold a longer idea inside a short form. Learn the complete pronunciation: copying only consonants and vowels can miss a tone change that belongs to the new word.",
      "uga-grammar",
      "yorubaname"
    ),
    syntax: cited(
      "Yoruba often uses subject–verb–object order, but speakers can put a person or thing in focus. Adé ni ó ra ìwé means “It was Ade who bought a book.” The particle ni and the following clause work together to do that.\n\nA clause with tí can describe a noun: ìwé tí Adé rà means “the book that Ade bought.” Yes/no questions can begin with ṣé. Negation changes with the kind of sentence: kò appears in many statements, while má starts a negative command.",
      "uga-grammar",
      "unilag-tones"
    ),
    advancedPainPoints: [
      "Maintaining lexical and grammatical tones when particles and vowels interact",
      "Choosing subject and object pronoun forms with their correct tone",
      "Understanding serial verbs as one event structure rather than separate English clauses",
      "Using ni, tí, and question constructions to manage focus naturally",
      "Following rapid dialect speech after a Standard Yoruba course",
      "Controlling respectful plural pronouns and culturally appropriate greetings"
    ],
    topics: [
      {
        title: "Pronouns are small tone-bearing words",
        body: cited("Subject pronouns precede the verb: mo ‘I,’ o ‘you singular,’ ó ‘he/she/it,’ a ‘we,’ ẹ ‘you plural or respectful,’ and wọ́n ‘they.’ Tone matters: o and ó are not interchangeable. Object forms occur after the verb, as in Ó rí mi, ‘He or she saw me.’ Yoruba third-person pronouns do not encode a male/female contrast, so context supplies what English forces a translator to choose.", "uga-grammar"),
        example: "Ó rí mi ní ọjà.",
        exampleTranslation: "He/she saw me at the market."
      },
      {
        title: "Aspect does more work than tense endings",
        body: cited("The verb itself does not acquire an English-style past ending. ń marks an event in progress: Mo ń ka ìwé, ‘I am reading a book.’ ti presents a completed or already-achieved situation: Mo ti jẹun, ‘I have eaten.’ máa commonly contributes habitual or prospective meaning, while yóò is used for future reference. Time adverbs and context locate events more precisely.", "uga-grammar"),
        example: "A máa ń lọ síbẹ̀ ní Ọjọ́ Àìkú.",
        exampleTranslation: "We usually go there on Sundays."
      },
      {
        title: "Negation changes with the job",
        body: cited("Kò negates many ordinary declaratives: Adé kò wá, ‘Ade did not come/is not coming’ depending on context. Má introduces a negative command: Má lọ! ‘Don't go!’ Kì í appears in habitual or generic negation. These are constructions with their own tones and ordering, not translations of one all-purpose English ‘not.’", "uga-grammar"),
        example: "Mi ò mọ̀; jọ̀wọ́, tún sọ.",
        exampleTranslation: "I don't know; please, say it again."
      },
      {
        title: "Serial verbs build a single route through an event",
        body: cited("In Adé mú ìwé wá, literally ‘Ade take book come,’ mú and wá combine to express bringing. In Ó ra ẹja jẹ, ‘he/she bought fish and ate it,’ the shared subject and object relations are understood without repeating pronouns or inserting an obligatory conjunction. Serial verbs express direction, instrument, result, accompaniment, and tightly linked actions; translating each verb as a separate English sentence obscures their grammar.", "uga-grammar", "wiki-yoruba"),
        example: "Bọ́lá fi ọ̀bẹ gé búrẹ́dì.",
        exampleTranslation: "Bola used a knife to cut bread."
      },
      {
        title: "Focus with ni",
        body: cited("Ni follows the person or thing a speaker wants to single out. Adé ni ó pè mí answers ‘Who called you?’; ìwé ni Adé rà highlights ‘a book’ as what Ade bought. The rest of the clause changes too, including the subject form in some sentences.\n\nLinguists call this focus. It also matters in questions and relative clauses, so learn the whole sentence rather than inserting ni into an English pattern.", "uga-grammar", "unilag-tones"),
        example: "Ìbàdàn ni mo ń gbé.",
        exampleTranslation: "It is in Ibadan that I live / I live in Ibadan."
      },
      {
        title: "Nouns, number, and modifiers",
        body: cited("A bare noun can be interpreted through context, while àwọn can mark a plural phrase: àwọn ọmọ, ‘the children/children.’ Demonstratives follow the noun: ilé yìí, ‘this house’; ọkùnrin náà, ‘that/the aforementioned man.’ Adjectival ideas often use stative verbs or tightly linked modifiers. Do not expect articles and adjective agreement to map one-for-one from English.", "uga-grammar"),
        example: "Àwọn ọmọ kékeré náà ń ṣeré.",
        exampleTranslation: "Those small children are playing."
      },
      {
        title: "Reduplication creates useful vocabulary",
        body: cited("Repeating all or part of a form can distribute or intensify a meaning and can participate in noun formation. Díẹ̀díẹ̀ means ‘little by little’; ojoojúmọ́ means ‘every day.’ Productive patterns frequently include tone alternations, so learners should record the derived form rather than assume that visual copying preserves the melody.", "uga-grammar", "ui-language-difficulties"),
        example: "Sọ̀rọ̀ díẹ̀díẹ̀.",
        exampleTranslation: "Speak more slowly."
      },
      {
        title: "Respect lives in grammar and routine",
        body: cited("Ẹ is plural ‘you’ and also a respectful singular address form. Greeting formulas often begin with ẹ and recognize the hearer's time, work, journey, or situation: Ẹ káàárọ̀ ‘good morning,’ Ẹ kú iṣẹ́ ‘well done/thanks for your work.’ Using respectful forms is not the same as speaking stiffly; it is an ordinary way to locate age and relationship in interaction.", "uga-grammar", "iowa-resources"),
        example: "Ẹ kú iṣẹ́, màmá.",
        exampleTranslation: "Well done/thank you for your work, ma'am/mother."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Most Yoruba speakers live in southwestern Nigeria. Yoruba also reaches communities in Benin and Togo, Nigerian cities farther north and east, and families around the world. Migration gives speakers more than one regional and national setting for the language.\n\nIn the Atlantic diaspora, Yoruba-derived ritual words and songs have their own histories. Knowing them does not necessarily mean speaking conversational Yoruba. Speaker counts therefore depend on which communities and kinds of use a source includes.",
      "language-profiles",
      "glottolog-yoruba",
      "wiki-yoruba"
    ),
    regions: [
      { place: "Southwestern Nigeria", note: cited("The densest network spans Lagos, Oyo, Ogun, Osun, Ondo, Ekiti, and parts of Kwara and neighboring states. Cities bring local dialects into daily contact with Standard Yoruba, English, and Nigerian Pidgin.", "wiki-yoruba", "language-profiles") },
      { place: "Benin and Togo", note: cited("Yoruba and closely related continua are used under labels including Yoruba, Nago, and Ife in multilingual settings. French and other African languages often share speakers and domains.", "language-profiles", "glottolog-yoruba") },
      { place: "Elsewhere in Nigeria", note: cited("Migration for trade, education, public service, entertainment, and family life has created Yoruba communities in Abuja, northern cities, the Niger Delta, and across the federation.", "wiki-yoruba") },
      { place: "United Kingdom, North America, and newer diasporas", note: cited("Families, associations, churches, mosques, cultural schools, media creators, and university programs support heritage use. English dominance means receptive understanding and speaking ability may differ sharply within one household.", "language-profiles", "iowa-resources") },
      { place: "Atlantic religious-cultural diasporas", note: cited("Cuba, Brazil, Trinidad and Tobago, and other societies maintain Yoruba-derived names, songs, liturgies, and concepts. These traditions have their own histories and should not be graded against present-day Nigerian conversation.", "unesco-ifa", "wiki-yoruba") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Yoruba has many short syllables, little change in verb endings, and a basic subject–verb–object order. Its pronouns do not mark a he–she difference. These features let a beginner make useful sentences early.\n\nListening takes sustained work. Tone, open vowels, quick vowel changes, and small grammatical words can hide the boundaries between familiar words. Conversation also asks you to learn greetings, respectful address, and when a speaker moves between Yoruba, English, or Pidgin.",
      "uga-tones",
      "uga-grammar"
    ),
    easierAspects: [
      "A Latin-based script with consistent core sound-to-letter relationships",
      "No grammatical gender distinction in third-person pronouns",
      "Verbs do not conjugate through large person-ending paradigms",
      "Basic subject–verb–object clauses are easy to begin using",
      "A large ecosystem of music, films, radio, and speakers"
    ],
    hardAspects: [
      "Hearing and producing three tones across whole phrases",
      "Keeping e/ẹ and o/ọ distinct",
      "Recognizing grammatical tone and vowel elision in fluent speech",
      "Following dialects and urban code-switching beyond course audio",
      "Using focus, serial verbs, and respectful forms idiomatically"
    ],
    plateauRisks: [
      "Reading unmarked Yoruba so often that incorrect tone patterns fossilize",
      "Memorizing isolated greetings without learning the pronoun and social choices inside them",
      "Depending on subtitles while failing to identify aspect particles by ear",
      "Treating Standard Yoruba as the only legitimate speech",
      "Learning only ritual or heritage vocabulary when the goal is everyday conversation"
    ],
    workload: cited(
      "In your first year, imitate a short tone recording daily and follow a course with regular conversation. Keep one speaker's pronunciation as your main listening model. At the intermediate stage, transcribe short clips with full marks and ask a proficient writer to correct them.\n\nThen widen the range: follow one regional variety, edited essays, long interviews, and proverbs in context. Listen to media where speakers also use English or Pidgin. Reading may move ahead of listening until tones and quick vowel changes become familiar.",
      "uga-tones",
      "iowa-resources",
      "yale-dictionary"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Keep fully marked Yoruba, a recording, and a short English explanation together for each sentence you study. Tag the speaker's region and the setting. Once a week, replay a twenty-second clip: listen, transcribe, check the marks, and retell it.\n\nDiscover Discomfort includes Yoruba in its guide to learning languages with uneven resource shelves. Its advice to pair a structured course with audio and a human speaker fits tone study here. Let your speaker correct the sounds and regional forms that a general study plan cannot supply.",
      "uga-tones",
      "iowa-resources",
      "dd-less-common"
    ),
    mediaPractice: cited(
      "Use BBC News Yorùbá for edited news language. Compare studio reading with interviews, where you may hear regional speech and changes between languages. Add short film scenes, radio calls, comedy, or sermons that fit your interests.\n\nSongs can teach vocabulary and cultural references, but their melodies alter ordinary pitch. Keep spoken recordings for tone practice. Retell one news item in simple Yoruba and ask someone to correct your version.",
      "bbc-yoruba",
      "iowa-resources"
    ),
    dictionariesAndCorpora: cited(
      "Yale's Yoruba Dictionary helps check marked headwords and meanings. YorubaName adds audio and explanations for names. A text corpus shows how a word appears beside other words.\n\nNo single resource settles every tone, dialect form, or new coinage. Compare a dictionary entry with recordings and current use. Search both marked and unmarked spellings when needed, but remember that missing marks can merge different words.",
      "yale-dictionary",
      "yorubaname",
      "sketchengine"
    ),
    resources: [
      { type: "course", title: "Yoruba Online", url: "https://africa.uga.edu/Yoruba/", level: "beginner", description: cited("A University of Georgia course with lessons on tones, grammar, culture, and practical language. Its older web encoding can be uneven, but the instructional sequence remains valuable.", "uga-grammar", "uga-tones") },
      { type: "dictionary", title: "The Yoruba Dictionary", url: "https://yorubadictionary.yale.edu/", level: "all", description: cited("Yale-hosted searchable dictionary for checking fully marked forms and meanings; confirm regional and conversational usage with speakers.", "yale-dictionary") },
      { type: "dictionary", title: "YorubaName", url: "https://www.yorubaname.com/", level: "all", description: cited("A community-built multimedia dictionary of Yoruba names, especially useful because names encode tone, contraction, history, and cultural explanation.", "yorubaname") },
      { type: "media", title: "BBC News Yorùbá", url: "https://www.bbc.com/yoruba", level: "intermediate", description: cited("Current news text, video, and audio for developing formal vocabulary and comparing written headlines with spoken reporting.", "bbc-yoruba") },
      { type: "corpus", title: "Yoruba text corpora in Sketch Engine", url: "https://www.sketchengine.eu/corpora-and-languages/yoruba-text-corpora/", level: "advanced", description: cited("Concordance tools show vocabulary in authentic contexts and help test collocations rather than trusting one-to-one translations.", "sketchengine") },
      { type: "other", title: "University of Iowa Yoruba Language and Culture Resources", url: "https://clcl.uiowa.edu/language-resources/yoruba-language-and-culture-resources", level: "all", description: cited("A curated launch point for pronunciation, tones, dictionaries, poetry, and cultural material.", "iowa-resources") },
      { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A study-plan article that explicitly includes Yoruba. Use its course, audio, and tutor framework with Yoruba-specific tone and dialect materials.", "dd-less-common") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Yoruba words often carry more than a one-line gloss can show. Orí means ‘head’ and also enters discussion of personhood and destiny. Àṣẹ can mean authority or enabling power and appears in affirming responses and religious speech.\n\nProverbs put words into social action. Owomoyela's collection records Àgbàjọ ọwọ́ la fi ńsọ ayà, which urges people to gather their strength. Ask who says a form, to whom, and in which setting before claiming it expresses a single worldview.",
      "unesco-ifa",
      "yorubaname",
      "iowa-resources",
      "owomoyela-proverbs"
    ),
    notableWords: [
      { term: "àṣẹ", meaning: "authority, command, enabling power; an affirming response in some contexts", note: cited("The semantic range changes across everyday, political, artistic, and religious use. English ‘amen’ captures only some discourse contexts.", "unesco-ifa", "yale-dictionary") },
      { term: "orí", meaning: "head; also a concept of personal destiny or inner person", note: cited("Ordinary bodily meaning and philosophical-religious uses coexist. Compounds and ritual contexts demand more than the single gloss ‘destiny.’", "yale-dictionary", "unesco-ifa") },
      { term: "ìwà", meaning: "character, conduct, existence/being in some formations", note: cited("The proverb Ìwà l'ẹwà, ‘character is beauty,’ makes moral conduct the measure of attractiveness.", "yale-dictionary", "iowa-resources") },
      { term: "àjọṣe", meaning: "relationship, connection, cooperation", note: cited("Useful in social, institutional, and analytical prose; its exact English rendering depends on what is connected and how.", "yale-dictionary") },
      { term: "ìfẹ́", meaning: "love, desire, wish", note: cited("Tone and context separate this familiar form from lookalikes. Learn it in phrases such as Mo nífẹ̀ẹ́ rẹ, ‘I love you.’", "yale-dictionary") },
      { term: "ọmọlúàbí", meaning: "a person of good character and responsible social conduct", note: cited("Often invoked as an ethical ideal. It should describe practices—respect, integrity, responsibility—not be flattened into a claim that every Yoruba person shares one personality.", "yorubaname", "iowa-resources") },
      { term: "àlàáfíà", meaning: "peace, well-being", note: cited("An Arabic-origin item that reflects older Islamic and regional contact; it is entirely ordinary Yoruba vocabulary today.", "yale-dictionary", "wiki-yoruba") }
    ],
    loanwordLayers: cited(
      "Yoruba has inherited words alongside loans from neighboring languages, Islamic learning, Atlantic contact, and English. Borrowed words can gain vowels to break up consonant clusters or avoid a final consonant. They also enter Yoruba's tone patterns.\n\nSpeakers may adapt an English word or switch into an English phrase. The choice can depend on age, work, humor, and topic. A dictionary's technical equivalent may be correct while another form is more common in a Lagos office.",
      "wiki-yoruba",
      "uga-grammar"
    ),
    idioms: [
      { original: "Ìwà l'ẹwà.", translation: "Character is beauty.", note: "A compact ethical statement: appearance without good conduct is not true beauty." },
      { original: "Sùúrù ni baba ìwà.", translation: "Patience is the father/foundation of good character.", note: "Often used to counsel restraint; quoting it is easier than judging when counsel is welcome." },
      { original: "Ọwọ́ kan kò gbé ẹrù dórí.", translation: "One hand cannot lift a load onto the head.", note: "Cooperation is necessary for difficult work; the image comes from carrying loads on the head." },
      { original: "Bí ọmọde bá ṣubú, a wo iwájú; bí àgbàlagbà bá ṣubú, a wo ẹ̀yìn.", translation: "When a child falls, they look ahead; when an elder falls, they look behind.", note: "Experience looks for causes in what came before. Proverbs vary in wording and are selected for a live conversational purpose." },
      { original: "Àgbàjọ ọwọ́ la fi ńsọ ayà.", translation: "We strike the chest with our fingers gathered together.", note: "A proverb about gathering strength for difficult work; Oyekan Owomoyela records this fully marked form." }
    ],
    textGenres: [
      "oríkì praise poetry and personal praise names",
      "Ifá verses and interpretive performance",
      "òwe proverbs and conversational verbal art",
      "novels, drama, essays, and children's literature",
      "news, radio phone-ins, film, and television",
      "fújì, jùjú, gospel, hip-hop, Afrobeats, and other song traditions",
      "sermons, devotional writing, and public ceremonial speech"
    ]
  },
  relationships: {
    overview: cited(
      "Itsekiri and Igala are Yoruboid relatives of Yoruba. Edo and Gbe languages are important neighbors, while English and Nigerian Pidgin have a strong place in present-day contact. These are different kinds of relationship.\n\nA borrowed word or shared conversational habit does not prove common descent. Closely related languages can also belong to distinct communities, even when comparison reveals shared older patterns.",
      "glottolog-yoruba",
      "wiki-yoruba"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Yoruba-speaking communities include Muslims, Christians, practitioners of òrìṣà traditions, people with several inheritances, and people for whom religion is not central. Yoruba also lives in work, sport, family, comedy, politics, film, and everyday chat.\n\nRespect shapes language: a plural pronoun can address one elder, and a greeting can recognize someone's work. Names carry meanings and tones that deserve care. Proverbs and oríkì praise poetry belong to living performances; ask who uses a text and for which audience before repeating it.",
  resources: [
    { type: "course", title: "Yoruba Online", url: "https://africa.uga.edu/Yoruba/", level: "beginner", description: cited("Structured university lessons linking tone, grammar, and situational culture.", "uga-grammar", "uga-tones") },
    { type: "dictionary", title: "The Yoruba Dictionary", url: "https://yorubadictionary.yale.edu/", level: "all", description: cited("A practical searchable reference for fully marked headwords and definitions.", "yale-dictionary") },
    { type: "dictionary", title: "YorubaName", url: "https://www.yorubaname.com/", level: "all", description: cited("Multimedia explanations and audio for thousands of names, made through a community lexicography project.", "yorubaname") },
    { type: "media", title: "BBC News Yorùbá", url: "https://www.bbc.com/yoruba", level: "intermediate", description: cited("A continuing stream of contemporary written and spoken current-affairs Yoruba.", "bbc-yoruba") },
    { type: "corpus", title: "Sketch Engine Yoruba corpora", url: "https://www.sketchengine.eu/corpora-and-languages/yoruba-text-corpora/", level: "advanced", description: cited("Searchable examples for studying collocation, frequency, and real textual contexts.", "sketchengine") },
    { type: "other", title: "University of Iowa resource guide", url: "https://clcl.uiowa.edu/language-resources/yoruba-language-and-culture-resources", level: "all", description: cited("Curated links to tones, poetry, pronunciation, and dictionaries.", "iowa-resources") },
    { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A study plan that names Yoruba and explains how to combine a course, recordings, and speaker feedback. It is a learning-method article, not a Yoruba grammar reference.", "dd-less-common") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Ẹ káàárọ̀.", translation: "Good morning.", usageNote: "Respectful singular or plural; Káàárọ̀ is familiar singular." },
    { original: "Ẹ káàsán.", translation: "Good afternoon.", usageNote: "A time-of-day greeting using respectful/plural ẹ." },
    { original: "Ẹ káalẹ́.", translation: "Good evening.", usageNote: "Use after the afternoon; local timing and pronunciation vary." },
    { original: "Báwo ni?", translation: "How are things? / How are you?", literalMeaning: "How is it?", usageNote: "A common familiar question; expand the respectful form with your speaker model." },
    { original: "Mo wà dáadáa.", translation: "I am well." },
    { original: "Ẹ ṣé.", translation: "Thank you.", usageNote: "Respectful or plural; O ṣé is familiar singular." },
    { original: "Jọ̀wọ́.", translation: "Please." },
    { original: "Kò yé mi.", translation: "I don't understand.", literalMeaning: "It is not clear to me." },
    { original: "Ẹ lè tún sọ ọ́?", translation: "Can you say it again?", usageNote: "Respectful/plural request." },
    { original: "Mo ń kọ́ Yorùbá.", translation: "I am learning Yoruba." },
    { original: "Kí ni ọ̀rọ̀ yìí túmọ̀ sí?", translation: "What does this word mean?", literalMeaning: "What does this word translate/amount to?" },
    { original: "Níbo ni ilé ìgbọ̀nsẹ̀ wà?", translation: "Where is the toilet?" },
    { original: "Ẹ kú iṣẹ́.", translation: "Well done / thank you for your work.", usageNote: "A greeting acknowledging someone who is working; the response may be Ẹ ṣé." },
    { original: "Má bínú.", translation: "Sorry / don't be angry.", literalMeaning: "Do not be angry.", usageNote: "Used for apology or to soften an interruption." },
    { original: "Ó dàbọ̀.", translation: "Goodbye." }
  ],
  sources: [
    { id: "wiki-yoruba", title: "Yoruba language", url: "https://en.wikipedia.org/wiki/Yoruba_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-yoruba", title: "Glottolog 5.3: Yoruba", url: "https://glottolog.org/resource/languoid/id/yoru1245", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "uga-about", title: "Yoruba Online: About the Yoruba language", url: "https://africa.uga.edu/Yoruba/yorubaabout.html", publisher: "University of Georgia", accessedAt: "2026-07-10" },
    { id: "uga-tones", title: "Yoruba Online: Tones", url: "https://africa.uga.edu/Yoruba/tones.html", publisher: "University of Georgia", accessedAt: "2026-07-10" },
    { id: "uga-grammar", title: "Yoruba Online: Grammar", url: "https://africa.uga.edu/Yoruba/grammar.html", publisher: "University of Georgia", accessedAt: "2026-07-10" },
    { id: "wiki-orthography", title: "Yoruba alphabet", url: "https://en.wikipedia.org/wiki/Yoruba_alphabet", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "Latin Extended Additional Unicode chart", url: "https://www.unicode.org/charts/PDF/U1E00.pdf", publisher: "Unicode Consortium", updatedAt: "2026", accessedAt: "2026-09-27" },
    { id: "unilag-tones", title: "Disambiguating Yoruba tones: at the interface between syntax, morphology, phonology and phonetics", url: "https://ir.unilag.edu.ng/items/d6bf236f-6553-4506-bfb0-5333333b9b4d/full", publisher: "University of Lagos Institutional Repository", publishedAt: "2011", accessedAt: "2026-07-10" },
    { id: "yale-dictionary", title: "The Yoruba Dictionary", url: "https://yorubadictionary.yale.edu/", publisher: "Yale University", accessedAt: "2026-07-10" },
    { id: "yorubaname", title: "YorubaName multimedia dictionary", url: "https://www.yorubaname.com/about-us?lang=en", publisher: "YorubaName Project", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "iowa-resources", title: "Yoruba Language and Culture Resources", url: "https://clcl.uiowa.edu/language-resources/yoruba-language-and-culture-resources", publisher: "University of Iowa", accessedAt: "2026-07-10" },
    { id: "sketchengine", title: "Yoruba text corpora", url: "https://www.sketchengine.eu/corpora-and-languages/yoruba-text-corpora/", publisher: "Sketch Engine", accessedAt: "2026-07-10" },
    { id: "diacritic-paper", title: "Improving Yorùbá Diacritic Restoration", url: "https://arxiv.org/abs/2003.10564", publisher: "arXiv", publishedAt: "2020", accessedAt: "2026-07-10" },
    { id: "language-profiles", title: "Yoruba Language Profile", url: "https://languageprofiles.ca/home/yoruba/", publisher: "Language Profiles Project", publishedAt: "2023", accessedAt: "2026-07-10" },
    { id: "unesco-ifa", title: "Ifa divination system", url: "https://ich.unesco.org/en/RL/ifa-divination-system-00146", publisher: "UNESCO Intangible Cultural Heritage", accessedAt: "2026-07-10" },
    { id: "bbc-yoruba", title: "BBC News Yorùbá", url: "https://www.bbc.com/yoruba", publisher: "BBC", accessedAt: "2026-07-10" },
    { id: "dd-less-common", title: "Best Less-Common Language Learning Resources: What Actually Works", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", accessedAt: "2026-09-27" },
    { id: "owomoyela-proverbs", title: "Yoruba Proverbs", url: "https://temployorubapr.com/wp-content/uploads/2025/08/Yoruba_Proverbs_Oyekan_Owoyomoyela.pdf", publisher: "University of Nebraska Press", publishedAt: "2005", accessedAt: "2026-09-27" },
    { id: "ui-language-difficulties", title: "Language Difficulties", url: "https://repository.ui.edu.ng/bitstreams/3e9ad075-aed5-46d7-8f7b-47306cf6b9a9/download", publisher: "University of Ibadan Repository", accessedAt: "2026-09-27" }
  ],
  seo: {
    title: "Yoruba Language Guide: Tones, Grammar, Dialects and Culture",
    description: "A deep, practical guide to Yoruba tones, diacritics, grammar, dialects, history, proverbs, media, learning resources, and real-world phrases."
  }
} satisfies LanguageGuide;
