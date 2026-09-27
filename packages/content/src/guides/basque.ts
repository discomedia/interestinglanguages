import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Aquitanian",
    relationship: "Ancient language closely connected to ancestral Basque",
    explanation: cited(
      "Roman-era inscriptions in Aquitania record names with parts that resemble Basque words and names. Scholars see Aquitanian as ancestral to Basque or its closest known ancient relative. Names cannot tell us everything about the language’s everyday grammar.",
      "cambridge-aquitanian",
      "wiki-basque"
    )
  },
  {
    name: "Spanish",
    relationship: "Dominant Romance contact language south of the Pyrenees",
    explanation: cited(
      "Spanish and Basque come from different language families, but many speakers use both every day. Basque has borrowed Spanish words while keeping its own patterns for endings and verbs. A familiar word may therefore reflect centuries of contact rather than shared ancestry.",
      "survey-2021",
      "wiki-basque"
    )
  },
  {
    name: "French",
    relationship: "Dominant Romance contact language north of the Pyrenees",
    explanation: cited(
      "French is the main language of school, government, and much public life in the Northern Basque Country. Northern Basque has its own words and sounds shaped partly by that setting. If you learn from southern Batua recordings, spend time with northern speech too.",
      "survey-2021",
      "basque-language-book"
    )
  },
  {
    name: "Gascon (Occitan)",
    relationship: "Long-standing neighboring Romance variety",
    explanation: cited(
      "Gascon and Basque have been neighbors in the western Pyrenees for centuries. Place names and borrowed words show that people have crossed linguistic boundaries there. That history of contact does not make Basque a Romance language.",
      "basque-language-book",
      "wiki-basque"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const basqueGuide = {
  slug: "basque",
  name: "Basque",
  autonym: "Euskara",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "In Basque, etxe means “house,” etxera means “to the house,” and etxean means “in the house.” Learn how these endings work alongside Euskara’s sounds, communities, literature, and regional voices.",
  family: "Language isolate",
  macroRegion: "Western Europe: the Basque Country in Spain and France",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Learn the shared standard, Euskara Batua, then listen to how people speak in Bilbao, Donostia, Baiona, and villages across the western Pyrenees.",
  hero: {
    imageAlt: "Contemporary Basque words in public print, representing Euskara Batua and regional speech.",
    callToActionLabel: "Meet Euskara in use"
  },
  classification: "A language isolate with no demonstrated genealogical relationship to any living language",
  speakerCommunity: "Euskara is spoken in the Basque Autonomous Community, parts of Navarre, and the Northern Basque Country in France. Schools, families, adult classes, media, and local groups all keep it in use.\n\nIn the 2021 sociolinguistic survey, 30.2 percent of residents aged 16 or over across these territories said they could speak Basque. The shares were 36.2 percent in the autonomous community, 14.1 percent in Navarre, and 20.1 percent in the north.\n\nEustat’s separate 2021 census counted 936,812 speakers aged two or over in the autonomous community. That census covers a different age range and territory, so don’t add its total to the survey figure. Many younger speakers learned Basque in school and also use Spanish or French in other parts of their lives.",
  facts: [
    { label: "Classification", value: "Language isolate; Aquitanian is the closest securely connected ancient language" },
    { label: "2021 survey", value: "30.2% of residents aged 16+ across the Basque Country were Basque speakers" },
    { label: "Standard", value: "Euskara Batua, developed under Euskaltzaindia from 1968" },
    { label: "Writing", value: "Latin alphabet with regular spellings such as tx, ts, tz, and x" },
    { label: "Core region", value: "Basque Autonomous Community, Navarre, and Northern Basque Country" },
    { label: "Living ecology", value: "Home transmission, immersion schools, adult euskaltegiak, media, literature, music, and public services" }
  ],
  introduction: cited("Basque, or Euskara, is spoken on both sides of the western Pyrenees, in Spain’s Basque Autonomous Community and Navarre and in the Northern Basque Country of France. Families, schools, broadcasters, and local institutions use it alongside Spanish or French. A 2021 survey found that 30.2 percent of residents aged 16 or older across those territories could speak Basque; a separate census counted 936,812 speakers aged two or older in the autonomous community alone.\n\nThe figures describe different populations and cannot be added together. Basque has no demonstrated family relationship to any living language, although ancient Aquitanian names are closely connected to it. That makes it a language isolate, a classification about ancestry rather than about how many people speak it or how widely they use it today.\n\nEuskara Batua gives schools and publishers a shared written standard, while regional forms continue in conversation, music, and local writing. The word etxe, “house,” becomes etxera for movement toward the house and etxean for being in it: familiar roots carry different endings as a sentence changes.", "survey-2021", "eustat-2021", "glottolog-basque", "cambridge-aquitanian", "euskaltzaindia", "ehu-cases"),
  origins: {
    overview: cited(
      "No other living language has a proven family connection to Basque. Linguists call a language in that position an isolate. It has still changed over time and borrowed from its neighbors.\n\nRoman-period Aquitanian names contain recognizable links with Basque. Later texts, dialects, and old loanwords help scholars trace more of its history. Claims that Basque belongs to an Iberian, Caucasian, or other distant family remain unproven.\n\n“Pre-Indo-European” places older forms of Basque before Indo-European languages reached the region. It does not name a separate language family.",
      "cambridge-aquitanian",
      "glottolog-basque",
      "wiki-basque"
    ),
    timeline: [
      {
        period: "Antiquity",
        event: cited(
          "Roman-era inscriptions in Aquitania preserve personal and divine names with elements that resemble Basque words for people and kin. Because nearly all the evidence is names, scholars can establish a close link more confidently than they can reconstruct ordinary speech.",
          "cambridge-aquitanian",
          "wiki-basque"
        )
      },
      {
        period: "Roman and early medieval centuries",
        event: cited(
          "Ancestral Basque lived beside Latin and the Romance languages that grew from it. Names, brief glosses, and borrowed words give us glimpses of this period, but there is no continuous body of Basque writing. The sounds of old loans help linguists put some changes in order.",
          "basque-language-book",
          "wiki-basque"
        )
      },
      {
        period: "1545",
        event: cited(
          "Bernard Etxepare published Linguae Vasconum Primitiae, the first printed Basque book. Printing gave a long-spoken language a new way to travel between readers.",
          "basque-language-book",
          "wiki-basque"
        )
      },
      {
        period: "1919–1968",
        event: cited(
          "Euskaltzaindia, the Academy of the Basque Language, was founded in 1919. In 1968, the academy backed proposals for a shared written standard, including choices about spelling and word forms.",
          "education-basque",
          "euskaltzaindia"
        )
      },
      {
        period: "Late 20th century",
        event: cited(
          "Franco’s dictatorship sharply restricted Basque in public life in Spain. Later laws gave it co-official status in the Basque Autonomous Community and recognition in parts of Navarre. Schools, adult classes, publishers, broadcasters, and public offices expanded where people could learn and use it.",
          "education-basque",
          "survey-2021"
        )
      },
      {
        period: "2021 and after",
        event: cited(
          "Many younger people know Basque because they learned it in school. Yet knowing a language does not guarantee using it every day. Friends, workplaces, confidence, and the language spoken around someone all shape that choice.",
          "euskadi-data",
          "eustat-2021"
        )
      }
    ],
    contactHistory: cited(
      "Latin and later Romance languages left many words in Basque. Spanish, Gascon, and French have been especially close neighbors, while newer international terms also circulate. Basque speakers fit borrowed nouns into Basque grammar by adding the same articles and case endings used with inherited words.\n\nBilingual speakers may switch languages or choose a loan for its tone, audience, or meaning. Contact also runs outward: Spanish izquierda, “left,” is commonly traced to Basque ezker. To understand a form, ask who uses it and in what setting.",
      "basque-language-book",
      "academy-corpus",
      "wiki-basque"
    ),
    standardization: cited(
      "Euskara Batua means “unified Basque.” Euskaltzaindia began shaping this shared written standard in 1968, drawing especially on central varieties while making choices for the wider language community. It gave schools, publishers, and broadcasters common spellings and forms.\n\nThe letter h shows how those choices worked. Northern speakers often pronounce it, while most southern speakers do not; the standard keeps it in writing. People still use local varieties in homes, performance, and regional media, and their everyday speech may mix local and standard forms.",
      "education-basque",
      "basque-language-book",
      "euskaltzaindia"
    )
  },
  variants: {
    overview: cited(
      "Across the Basque-speaking area, people use western, central, Navarrese, Navarrese-Lapurdian, and Zuberoan forms, with local differences inside each area. These groupings describe patterns of sound, words, and verb forms; they do not follow province lines exactly.\n\nBatua lets people read and communicate across regions, but careful standard audio will not prepare you for every village conversation. Listen to regional voices as you learn. Age, schooling, and whether someone learned Basque at home also shape how they speak.",
      "basque-language-book",
      "wiki-basque"
    ),
    items: [
      { name: "Euskara Batua", note: cited("Batua gives schools, publishers, public institutions, and cross-regional media a shared form. Speakers still bring their regional accents to it.", "education-basque", "euskaltzaindia") },
      { name: "Western / Bizkaian", note: cited("Many people in Bizkaia and nearby areas use western forms with distinctive words, sounds, and verbs. These forms can differ noticeably from Batua, whose early choices leaned toward central varieties.", "education-basque", "basque-language-book") },
      { name: "Central", note: cited("People use central forms across Gipuzkoa and nearby areas. Central varieties helped shape Batua, but daily speech there is not simply the standard read aloud.", "basque-language-book", "wiki-basque") },
      { name: "Navarrese and Navarrese-Lapurdian", note: cited("Related local forms run through Navarre, Lapurdi, and neighboring areas across a state border. Speakers also live in very different Spanish- and French-dominant settings.", "survey-2021", "basque-language-book") },
      { name: "Souletin / Zuberoan", note: cited("Zuberoan is an eastern variety associated with Zuberoa/Soule. It has its own sounds, words, and performance traditions, and it may take time for a Batua learner to follow.", "basque-language-book") }
    ]
  },
  pronunciation: {
    overview: cited(
      "The five vowel letters a, e, i, o, u keep fairly consistent values in the standard spelling. Start with the consonant pairs: x sounds roughly like English “sh,” while tx is closer to “ch.” Written j and h sound different across regions.\n\nBasque spelling also distinguishes z, s, and x, plus the related combinations tz, ts, and tx. Some speakers merge parts of this system in ordinary speech. Learn what your speaker model says and keep the spellings distinct when you write.",
      "wiki-basque",
      "basque-language-book"
    ),
    script: "Basque Latin alphabet in Euskara Batua orthography",
    soundSystem: cited(
      "Basque has five core vowel sounds, so most of your pronunciation work lies in its consonants. In careful descriptions, z and s are two different hiss-like sounds, while x is farther back in the mouth; tz, ts, and tx begin with a brief closure. If they sound alike at first, compare recordings of short words instead of guessing from English letters.\n\nNorthern speakers may pronounce h where most southern speakers leave it silent. Regional j also varies. A good listening model will help you hear the forms used in the community you want to understand.",
      "basque-language-book",
      "wiki-basque"
    ),
    prosody: cited(
      "Stress changes across Basque dialects, and standard spelling usually leaves it unmarked. Copy a whole phrase from a speaker instead of putting Spanish or English stress on each word.\n\nA speaker often puts the new or contrasted part of a sentence just before the verb.\n\nNor etorri da? means “Who came?” The answer Ane etorri da puts Ane, the new information, in that position. Listen to the sentence melody along with the word order.",
      "basque-language-book",
      "ehu-grammar"
    ),
    learnerTraps: [
      "Pronouncing written z as English /z/; it represents a voiceless sibilant",
      "Collapsing z, s, and x—and tz, ts, and tx—before learning what your model distinguishes",
      "Reading every j with one Spanish value despite substantial regional variation",
      "Treating every r alike; single r and rr contrast between vowels, while final r follows other patterns",
      "Assuming Batua spelling encodes one universal stress pattern"
    ],
    sampleWords: [
      { original: "euskara", translation: "Basque language", note: "The middle s is not English /z/. Copy a native recording rather than anglicizing the sequence eu-." },
      { original: "etxe", translation: "house", note: "Tx begins roughly like English ‘ch’ in church; x by itself is closer to ‘sh’." },
      { original: "itsaso", translation: "sea", note: "Compare ts, a sound that begins with a brief closure, with the following hiss-like s." },
      { original: "zortzi", translation: "eight", note: "This compact word contains z and tz. Keep both voiceless and avoid English /z/." },
      { original: "txakur", translation: "dog", note: "Tx begins roughly like English “ch.” Word-final r does not follow the simple intervocalic r/rr spelling contrast, so copy a recording of the full word." },
      { original: "herri", translation: "town; people; country in compounds", note: "The h may be audible in northern speech and silent in much southern speech; rr is the stronger rhotic." }
    ]
  },
  writing: {
    overview: cited(
      "Basque uses the Latin alphabet, so you can read standard text without learning a new script. Batua spelling gives readers from different regions a shared form, even when they pronounce a word differently.\n\nWritten tx, ts, and tz combine letters to show consonant sounds. Ordinary native words seldom use c, q, v, w, or y, though names and loans may. Digital text needs no special script support, but spellcheck and search tools must still handle the many endings attached to words.",
      "education-basque"
    ),
    primaryScript: "Latin script",
    romanization: cited("Basque is already written in Latin letters, so learner respelling usually creates more problems than it solves. Sound charts can help you compare dialects, but learn standard spelling from the first lesson.", "education-basque", "wiki-basque"),
    spellingNorms: cited(
      "Basque puts many meanings that English expresses with separate words at the end of a noun phrase. Compare etxe “house,” etxea “the house,” etxean “in the house,” and etxeetara “to the houses.” In etxe handi hartan, “in that big house,” the location ending goes on the final word.\n\nPlace names take endings too: Bilbon means “in Bilbao,” and Donostiatik means “from Donostia.” Write those suffixes as part of the word. Standard spelling keeps h even when your speaker does not pronounce it.",
      "ehu-cases",
      "euskaltzaindia"
    ),
    styleNotes: [
      cited("Treat suffixes as part of the written word: analyze etxe-etara internally, but write etxeetara without a learner’s hyphen.", "ehu-cases"),
      cited("Use Euskaltzaindia’s dictionary to check standard forms, register, and accepted variants rather than guessing from Spanish or French spelling.", "euskaltzaindia"),
      cited("Keep dialect writing and Batua distinct in your notes. A local form may be excellent Basque while still being inappropriate for a standardized exam answer.", "basque-language-book", "education-basque"),
      cited("Search corpora by lemma when possible. Surface forms proliferate because determiners, number, and case cluster at the right edge of noun phrases.", "academy-corpus")
    ]
  },
  grammar: {
    overview: cited(
      "Start with three short sentences: Gizona etorri da, “The man has come”; Gizonak ogia ekarri du, “The man has brought the bread”; and Gizonak haurrari ogia eman dio, “The man has given the child bread.” The endings and helper verbs change as the participants change.\n\nBasque builds many word forms by adding meaningful pieces. Linguists call that pattern agglutination. The pieces are easier to learn inside sentences than in long charts, because their shape and choice depend on the whole construction.",
      "ehu-cases",
      "ehu-grammar"
    ),
    typologicalProfile: cited(
      "In Basque, the subject of “come” and the object of “see” take the same basic case. The subject of “see” takes an extra ending, usually -k; this pattern is called ergative–absolutive alignment. A recipient often takes -i.\n\nThe helper verb can change to reflect these participants too. Basque often puts the verb near the end and places a describing clause before its noun. Conversation can move other words around to show what is new or important.",
      "ehu-cases",
      "ehu-grammar"
    ),
    morphology: cited(
      "A noun phrase can end with an article, number marker, and case ending. In mendian, “on the mountain,” the final -n marks location. In etxe handi hartan, “in that big house,” the ending belongs to the whole phrase and appears on hartan, “that.”\n\nMany verbs combine a main form with a helper verb: ikusi dut means “I have seen it.” The helper dut marks who saw and what was seen. Common verbs also have one-word forms, such as nator, “I am coming.”",
      "ehu-cases",
      "ehu-grammar"
    ),
    syntax: cited(
      "A straightforward Basque sentence often places the person doing an action, then its object, then the verb. Conversation changes that order when the speaker wants to highlight a different answer.\n\nNor etorri da? means “Who came?” The answer Ane etorri da places Ane immediately before the verb.\n\nTo say “I do not understand,” put ez before the helper verb: Ez dut ulertzen. A clause describing a noun comes first: erosi dudan liburua means “the book I bought.” Learn these patterns as complete phrases before moving their parts around.",
      "ehu-grammar"
    ),
    advancedPainPoints: [
      "Choosing ergative, absolutive, and dative frames automatically in conversation",
      "Matching auxiliaries to person, number, tense, and all indexed arguments",
      "Recognizing dialectal auxiliary and lexical forms after learning Batua",
      "Using word order and intonation for focus rather than copying Spanish, French, or English",
      "Understanding allocutive verb forms, which change with a familiar person being addressed"
    ],
    topics: [
      {
        title: "Who gets the -k ending?",
        body: cited("Compare Mutila etorri da, ‘the boy came,’ with Neskak mutila ikusi du, ‘the girl saw the boy.’ Mutila keeps the same form in both: it is the only participant of ‘come’ and the object of ‘see.’ Neskak has -k because the girl is the one doing the seeing. Learn the pattern with whole verb phrases, since some verbs do not line up neatly with English ideas of action.", "ehu-cases", "ehu-grammar"),
        example: "Neskak mutila ikusi du.",
        exampleTranslation: "The girl saw the boy."
      },
      {
        title: "The helper verb tracks participants",
        body: cited("In Liburua irakurri dut, ‘I’ve read the book,’ dut points to one book. In Liburuak irakurri ditut, ‘I’ve read the books,’ ditut changes with the plural object. Haurrari liburua eman diot, ‘I gave the child the book,’ adds a recipient, and the helper verb changes again.", "ehu-grammar", "ehu-cases"),
        example: "Haurrari liburua eman diot.",
        exampleTranslation: "I gave the child the book."
      },
      {
        title: "Place is built from cases",
        body: cited("The ending changes the direction of travel: etxean means ‘in the house,’ etxera means ‘to the house,’ and etxetik means ‘from the house.’ With people, you will also meet forms built around -gan, such as lagunarengana, ‘to the friend.’", "ehu-cases"),
        example: "Bilbotik Donostiara noa.",
        exampleTranslation: "I am going from Bilbao to Donostia."
      },
      {
        title: "The article goes at the phrase edge",
        body: cited("The article -a is suffixed: liburu ‘book,’ liburua ‘the book.’ In liburu berri handia, ‘the big new book,’ only the final adjective bears the determiner. Case follows that edge: liburu berri handian, ‘in the big new book.’ The sequence explains why dictionary headwords and forms in running text often look different.", "ehu-cases", "ehu-grammar"),
        example: "Etxe handi hartan bizi naiz.",
        exampleTranslation: "I live in that big house."
      },
      {
        title: "Focus often stands before the verb",
        body: cited("A question tells you which part of the answer to emphasize.\n\nNork egin du? means ‘Who did it?’ The answer Mirenek egin du, ‘Miren did it,’ places Mirenek just before the verb.\n\nIf you ask Zer egin du Mirenek? (‘What did Miren do?’), the answer Kafea egin du Mirenek (‘Miren made coffee’) puts kafea in that position instead.", "ehu-grammar"),
        example: "Mirenek egin du.",
        exampleTranslation: "Miren did it."
      },
      {
        title: "Saying no changes verb order",
        body: cited("Ulertzen dut means ‘I understand,’ with the main verb before its helper. Add ez for ‘not,’ and the helper moves ahead of the main verb: Ez dut ulertzen, ‘I do not understand.’ Practice the two orders as a pair.", "ehu-grammar"),
        example: "Ez dut ulertzen.",
        exampleTranslation: "I do not understand."
      },
      {
        title: "Descriptions come before nouns",
        body: cited("Atzo erosi nuen liburua means ‘the book that I bought yesterday.’ The description comes first and ends in -n; liburua, ‘the book,’ arrives at the end. Begin with short descriptions before adding more detail.", "ehu-grammar"),
        example: "Atzo erosi nuen liburua ona da.",
        exampleTranslation: "The book that I bought yesterday is good."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Euskal Herria names a cultural region with seven historical territories across Spain and France. Basque is co-official with Spanish throughout the Basque Autonomous Community. Navarre gives it different legal standing by zone, while France does not make it co-official.\n\nA border or city limit cannot tell you what language someone speaks. Some towns have dense Basque-speaking networks; schools and adult classes have also helped create new speakers in predominantly Spanish- or French-speaking cities.",
      "survey-2021",
      "euskadi-data",
      "eustat-2021"
    ),
    regions: [
      { place: "Basque Autonomous Community", note: cited("In the 2021 survey, 36.2 percent of residents aged sixteen or over were Basque speakers. Gipuzkoa has the highest overall density, while Bilbao and Vitoria-Gasteiz contain large and growing speaker networks despite lower percentages.", "survey-2021", "eustat-2021") },
      { place: "Navarre", note: cited("The 2021 survey reported 14.1 percent Basque speakers aged sixteen or over. Knowledge and legal provision are strongest in the north, but speakers, schools, courses, and cultural activity also exist in Pamplona/Iruña and mixed zones.", "euskadi-data", "survey-2021") },
      { place: "Northern Basque Country", note: cited("Lapurdi, Lower Navarre, and Zuberoa lie in France. The 2021 survey reported 20.1 percent Basque speakers aged sixteen or over, with stronger transmission concerns and a public sphere dominated by French.", "survey-2021", "basque-language-book") },
      { place: "Diaspora communities", note: cited("Basque clubs, university programs, and family networks in the Americas and elsewhere teach Euskara and support cultural practice. Diaspora use rarely reproduces one village variety unchanged; it connects heritage, Batua instruction, migration history, and new local identities.", "etxepare-resources") }
    ],
    mapImageAlt: "The Basque-speaking territories around the western Pyrenees in Spain and France."
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "English gives you few shortcuts for Basque vocabulary or verb patterns, so you will have to build new habits. The spelling is fairly regular, the five core vowels are approachable, and nouns have no grammatical gender.\n\nThe harder work is tracking who does what to whom: that choice affects both noun endings and the helper verb. Many courses also assume some Spanish or French. An euskaltegi, a local adult Basque school, or a patient conversation partner can make the path much easier.",
      "habe-ikasbil",
      "ehu-cases",
      "ehu-grammar"
    ),
    easierAspects: [
      "Regular standard spelling and a compact core vowel system",
      "No grammatical gender and no gender agreement on ordinary nouns or adjectives",
      "Suffixes recur with recognizable meanings across large numbers of words",
      "Strong institutional courses, public media, dictionaries, and graded materials"
    ],
    hardAspects: [
      "Ergative, absolutive, and dative case selection",
      "Auxiliaries that agree with multiple participants",
      "Flexible word order driven by focus and discourse context",
      "The listening gap between careful Batua and regional informal speech",
      "Relatively few obvious cognates for an English speaker"
    ],
    plateauRisks: [
      "Memorizing declension and auxiliary tables without retrieving them in meaningful sentences",
      "Reading Batua well while avoiding unscripted local speech",
      "Using Spanish or French word order with Basque endings attached",
      "Waiting for perfect grammar before joining a speaking community"
    ],
    workload: cited(
      "If you have about five focused hours a week, use them for a course, short listening sessions, and conversation. Begin with greetings, location endings, and sentence frames you can reuse. Then add past forms, plural objects, and unscripted speech.\n\nHABE offers A1 through C2 levels for adult learners, so you can set concrete course goals. A certificate and easy conversation in a local dialect measure different skills. There is no fixed number of hours that fits every learner.",
      "habe-ikasbil"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Keep short sentences that show a person arriving, seeing someone, or giving something to someone. Label who acts, what changes hands, and who receives it; the noun endings and helper verb will start to line up. Add related word forms such as etxean, etxera, and etxetik beside each sentence.\n\nWhen you hear a form you did not learn in Batua, note the speaker, place, and setting. Ask a teacher or speaker whether it is local, casual, or part of the shared standard. Once you can tell a simple story, retell it from another participant’s point of view to practice changing the case endings.",
      "habe-ikasbil",
      "ehu-grammar"
    ),
    mediaPractice: cited(
      "EITB has Basque news, sport, and entertainment. ETB On offers live and on-demand television; EITB’s radio content now lives on GUAU. Replay short clips with transcripts or familiar topics before trying live broadcasts.\n\nArgia and Berria give you current written Basque; learner materials offer shorter sentences. At an advanced level, try bertsolaritza, improvised sung verse. Performers work with rhyme, meter, topical arguments, and regional speech in front of an audience.",
      "eitb",
      "habe-ikasbil",
      "basque-language-book"
    ),
    dictionariesAndCorpora: cited(
      "Look up a new word in Elhuyar, then check Euskaltzaindia’s dictionary for its standard meaning and usage. The Lexicon Observatory lets you see forms in contemporary written texts; Euskalterm helps with technical words.\n\nA frequent form in a corpus may still belong to a particular genre or region. Read the surrounding sentence and note its date and setting. Ask a speaker when two alternatives seem close in meaning but different in tone.",
      "academy-corpus",
      "elhuyar",
      "euskaltzaindia"
    ),
    resources: [
      { type: "course", title: "HABE / IKASBIL", url: "https://www.ikasbil.eus/en/home", level: "all", description: cited("The public adult-learning portal supplies level-tagged audio, video, texts, exercises, exam models, and teaching materials from A1 through C levels.", "habe-ikasbil") },
      { type: "course", title: "INGURA online Basque", url: "https://inguraonline.eus/", level: "beginner", description: cited("A multilingual digital environment backed by HABE for structured online learning, including guided A1 and A2 pathways through participating centers.", "habe-ikasbil") },
      { type: "dictionary", title: "Elhuyar Dictionary", url: "https://hiztegiak.elhuyar.eus/", level: "all", description: cited("A practical bilingual reference with translations, domain and usage labels, and examples, aligned with Euskaltzaindia recommendations.", "elhuyar") },
      { type: "corpus", title: "Euskaltzaindia Lexicon Observatory", url: "https://www.euskaltzaindia.eus/index.php?option=com_oehberria&task=bilaketa&Itemid=413&lang=eu", level: "advanced", description: cited("A large lemmatized corpus of contemporary written Basque for checking forms, collocations, genres, and change.", "academy-corpus") },
      { type: "media", title: "ETB On", url: "https://etbon.eus/", level: "intermediate", description: cited("EITB’s streaming television service has live channels and on-demand Basque programs. Radio content has moved to GUAU.", "eitb") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "The word etxe, “house,” appears in many longer words and place names. Etxeko can mean “of the house,” while etxekoandre traditionally names a woman who runs a household; its social use needs context.\n\nBasque writers, scientists, and journalists also make terms for modern topics, sometimes choosing a new compound and sometimes an international word. Words such as auzolan, “communal work,” and bertso, “verse,” point to living practices as well as dictionary meanings.",
      "euskaltzaindia",
      "academy-corpus",
      "basque-language-book"
    ),
    notableWords: [
      { term: "euskaldun", meaning: "Basque speaker; Basque person in many contexts", note: cited("Morphologically related to euskara and the suffix -dun ‘one who has.’ Its history foregrounds language, but modern identity terms depend on context: not every ethnic Basque speaks Euskara, and not every fluent speaker shares one ancestry.", "euskaltzaindia", "survey-2021") },
      { term: "auzolan", meaning: "communal work", note: cited("Built from auzo ‘neighborhood/neighbour’ and lan ‘work.’ It evokes organized shared labor, but contemporary uses range from literal local projects to a wider metaphor for cooperation.", "euskaltzaindia") },
      { term: "bertso", meaning: "improvised or composed verse", note: cited("Central to bertsolaritza, in which performers create sung rhymed verses under formal constraints, often responding to a theme, opponent, or current event before a live audience.", "basque-language-book") },
      { term: "txoko", meaning: "corner; nook; club room", note: cited("A physical ‘corner’ that can also name a cozy space or gastronomic society premises. Borrowed uses outside Basque sometimes narrow its social range, so examples matter.", "euskaltzaindia") },
      { term: "herri", meaning: "town; people; country", note: cited("A compact word whose translation changes by compound and context: Euskal Herria is the Basque Country, herriko plaza is the town square, and herri can foreground a people or popular community.", "euskaltzaindia", "basque-language-book") },
      { term: "maite", meaning: "beloved; dear; to love in maite izan", note: cited("Basque commonly expresses ‘love’ with the construction maite izan. Maite also appears as an adjective, noun, and personal name, so learn it through whole phrases.", "elhuyar") },
      { term: "pintxo", meaning: "small bar snack", note: cited("The Basque spelling uses tx. The food culture is now internationally branded, but ordering, sharing, and regional practice are richer than treating pintxo as simply a miniature meal.", "elhuyar") },
      { term: "agur", meaning: "goodbye; greeting", note: cited("Often taught as both hello and goodbye, though modern frequency and nuance vary by region and situation. It also carries literary and ceremonial resonance.", "euskaltzaindia") }
    ],
    loanwordLayers: cited(
      "Old Latin loans entered Basque early enough to change with its sounds. Later Spanish, French, Gascon, and international loans sit beside inherited words. A word may also have a planned or revived Basque alternative.\n\nDo not assume a Romance-looking word is bad Basque, or that an unfamiliar one must be prehistoric. Check the Academy’s dictionaries and real examples before trusting an attractive folk etymology.",
      "basque-language-book",
      "academy-corpus",
      "euskaltzaindia"
    ),
    idioms: [
      { original: "Gero gerokoak.", translation: "Later things are for later.", note: "A compact way to postpone worrying about what has not happened yet: deal with the future when it arrives." },
      { original: "Euria ari du.", translation: "It is raining.", note: "Literally ‘it is doing rain’: not a proverb, but an essential impersonal weather construction that reveals Basque expression." },
      { original: "Ez adiorik.", translation: "No farewell; until we meet again.", note: "Literally ‘no goodbye’: a warmer or more literary leave-taking that refuses the finality of a permanent goodbye." },
      { original: "Nolako zura, halako ezpala.", translation: "Like wood, like chip.", note: "Roughly ‘like parent, like child’: the chip shows the qualities of the wood it came from." },
      { original: "Hitz gutxi eta haiek onak.", translation: "Few words, and those good ones.", note: "A proverb praising concise, worthwhile speech rather than sheer quantity." }
    ],
    textGenres: [
      "Bertsolaritza: improvised sung verse, championship performance, and written bertso traditions",
      "Modern novels, short fiction, memoir, comics, children’s literature, and translation",
      "Berria and Argia journalism, essays, criticism, and science communication",
      "EITB television, radio, podcasts, sport, drama, and digital entertainment",
      "Dialect theater, pastoral performance in Zuberoa, song, oral narrative, and local media",
      "Public administration, education, academic writing, terminology, and social-media conversation"
    ]
  },
  relationships: {
    overview: cited(
      "No comparison has established that Basque descends from the same language as any living neighbor. Aquitanian names give scholars a close ancient connection, although they do not preserve a full grammar.\n\nBasque has lived beside Celtic, Latin, Gascon, Spanish, French, and other languages for centuries. Shared words can come from borrowing rather than common ancestry. Proposed distant relatives need regular sound patterns and shared inherited forms, not a handful of similar-looking words.",
      "glottolog-basque",
      "cambridge-aquitanian",
      "wiki-basque"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Euskara matters to many people’s sense of home and identity, but speakers hold different politics and histories. Place names such as Donostia/San Sebastián and Baiona/Bayonne show that several languages live in the same area.\n\nTry a greeting in Basque, and accept it if the conversation moves to Spanish or French. If you want more practice, ask whether the other person would like to continue in Basque. Books, local media, performances, and services offer other ways to support the language.",
  resources: [
    { type: "course", title: "IKASBIL learner portal", url: "https://www.ikasbil.eus/en/home", level: "all", description: cited("HABE’s extensive collection of graded activities, video, audio, reading, exam practice, and adult-learning materials.", "habe-ikasbil") },
    { type: "course", title: "INGURA", url: "https://inguraonline.eus/", level: "beginner", description: cited("A structured online environment for beginning Basque, connected to the public adult-education system and guided course provision.", "habe-ikasbil") },
    { type: "dictionary", title: "Euskaltzaindiaren Hiztegia", url: "https://www.euskaltzaindia.eus/index.php?option=com_hiztegianbilatu&view=frontpage&Itemid=410&lang=eu", level: "all", description: cited("The Academy’s standard dictionary for definitions, accepted forms, usage information, and normative checking.", "euskaltzaindia") },
    { type: "dictionary", title: "Elhuyar Hiztegiak", url: "https://hiztegiak.elhuyar.eus/", level: "all", description: cited("Fast bilingual lookup with examples and subject or usage labels; pair it with the monolingual Academy dictionary as proficiency grows.", "elhuyar") },
    { type: "media", title: "ETB On", url: "https://etbon.eus/", level: "intermediate", description: cited("EITB’s current television platform has live streams and on-demand programs. Select Basque-language content for listening practice.", "eitb") },
    { type: "other", title: "Etxepare Basque Institute resources", url: "https://www.etxepare.eus/en/online-resources", level: "all", description: cited("A gateway to dictionaries, learning materials, culture, and university study abroad.", "etxepare-resources") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Kaixo!", translation: "Hello!", usageNote: "A widely understood informal greeting. Egun on is often more natural in a shop or morning encounter." },
    { original: "Egun on.", translation: "Good morning; good day.", literalMeaning: "Good day.", usageNote: "A dependable daytime greeting; use arratsalde on later in the day and gabon at night." },
    { original: "Zer moduz?", translation: "How are things?", literalMeaning: "In what manner?", usageNote: "An ordinary informal check-in; Ondo, eta zu? means ‘Good, and you?’" },
    { original: "Mesedez.", translation: "Please.", usageNote: "Use it with a request, but do not add it mechanically every time English uses ‘please.’" },
    { original: "Eskerrik asko.", translation: "Thank you.", usageNote: "The standard all-purpose expression of thanks; mila esker, literally ‘a thousand thanks,’ is another common form." },
    { original: "Ez horregatik.", translation: "You’re welcome.", literalMeaning: "Not for that.", usageNote: "A conventional response to thanks." },
    { original: "Barkatu.", translation: "Excuse me; sorry.", usageNote: "Use it to get attention, pass someone, or apologize; context and intonation distinguish the force." },
    { original: "Ez dut ulertzen.", translation: "I don’t understand.", usageNote: "Notice negative order: ez + auxiliary dut + lexical verb ulertzen." },
    { original: "Polikiago, mesedez.", translation: "More slowly, please.", usageNote: "A concise request when speech is too fast. Add hitz egin, ‘speak,’ if you want a fuller sentence." },
    { original: "Nola esaten da hau euskaraz?", translation: "How do you say this in Basque?", literalMeaning: "How is this said in Basque?", usageNote: "Ask this when you need a word in class or conversation." },
    { original: "Kafe bat nahi dut, mesedez.", translation: "I would like a coffee, please.", literalMeaning: "I want one coffee, please.", usageNote: "The subject ‘I’ is encoded in dut; explicit nik is unnecessary unless contrastive." },
    { original: "Non dago komuna?", translation: "Where is the toilet?", usageNote: "Non asks location; compare nora ‘to where?’ and nondik ‘from where?’" },
    { original: "Pozten naiz zu ezagutzeaz.", translation: "Pleased to meet you.", literalMeaning: "I am glad about meeting you.", usageNote: "A polite full expression; conversation may use shorter formulas." },
    { original: "Gero arte!", translation: "See you later!", literalMeaning: "Until later!", usageNote: "A common, non-final leave-taking. Agur is also used for goodbye." }
  ],
  sources: [
    { id: "wiki-basque", title: "Basque language", url: "https://en.wikipedia.org/wiki/Basque_language", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "glottolog-basque", title: "Glottolog: Basque", url: "https://glottolog.org/resource/languoid/id/basq1248", publisher: "Glottolog", accessedAt: "2026-09-27" },
    { id: "cambridge-aquitanian", title: "The Relationship between Aquitanian and Basque: Achievements and Challenges of the Comparative Method", url: "https://www.cambridge.org/core/books/language-change-and-linguistic-diversity/relationship-between-aquitanian-and-basque-achievements-and-challenges-of-the-comparative-method-in-a-context-of-poor-documentation/9EB6514ED397F9F107DF53036B83C842", publisher: "Cambridge University Press", publishedAt: "2024", accessedAt: "2026-09-27" },
    { id: "basque-language-book", title: "Euskara: The Basque Language", url: "https://basqueculture.eus/media/uploads/libros/basque_euskara_eus-en1.pdf", publisher: "Etxepare Basque Institute", accessedAt: "2026-09-27" },
    { id: "education-basque", title: "Basque in Education in the Basque Autonomous Community", url: "https://www.euskadi.eus/web01-s2hhome/en/contenidos/informacion/dia6/en_2027/adjuntos/publications_in_english/Basque_in_Education_en_2020_berrituta.pdf", publisher: "Basque Government Department of Education", accessedAt: "2026-09-27" },
    { id: "survey-2021", title: "Seventh Sociolinguistic Survey 2021", url: "https://www.euskadi.eus/contenidos/informacion/eas_ikerketak/en_def/adjuntos/Seventh_Sociolinguistic_Survey_2021.pdf", publisher: "Basque Government, Government of Navarre, and Euskararen Erakunde Publikoa", publishedAt: "2024", accessedAt: "2026-09-27" },
    { id: "euskadi-data", title: "Basque Language System of Indicators: Significant Data", url: "https://www.euskadi.eus/significant-data/web01-a3eas/en/", publisher: "Basque Government", accessedAt: "2026-09-27" },
    { id: "eustat-2021", title: "In 2021, 62.4% of people residing in the Basque Country had some knowledge of Basque", url: "https://en.eustat.eus/elementos/ele0020200/ti_in-2021-624-of-people-residing-in-the-basque-country-had-some-knowledge-of-basque/not0020231_i.html", publisher: "Eustat — Basque Statistics Institute", publishedAt: "2022-10-27", accessedAt: "2026-09-27" },
    { id: "euskaltzaindia", title: "Euskaltzaindia — Academy of the Basque Language", url: "https://www.euskaltzaindia.eus/en/", publisher: "Euskaltzaindia", accessedAt: "2026-09-27" },
    { id: "ehu-cases", title: "Cases and Postpositions", url: "https://www.ehu.eus/en/web/eins/cases-and-postpositions", publisher: "Basque Language Institute, University of the Basque Country (UPV/EHU)", accessedAt: "2026-09-27" },
    { id: "ehu-grammar", title: "A Brief Grammar of Euskara, the Basque Language", url: "https://www.ehu.eus/en/web/eins/basque-grammar", publisher: "Basque Language Institute, University of the Basque Country (UPV/EHU)", accessedAt: "2026-09-27" },
    { id: "habe-ikasbil", title: "IKASBIL: Learn Basque", url: "https://www.ikasbil.eus/en/home", publisher: "HABE, Basque Government", accessedAt: "2026-09-27" },
    { id: "academy-corpus", title: "Observatory of the Lexicon, a Basque Corpus of Almost 60 Million Words", url: "https://www.elhuyar.eus/en/press-room/observatory-lexicon-corpus-basque-almost-60-million-words", publisher: "Elhuyar and Euskaltzaindia", publishedAt: "2017-03-07", accessedAt: "2026-09-27" },
    { id: "elhuyar", title: "Elhuyar Dictionary", url: "https://hiztegiak.elhuyar.eus/", publisher: "Elhuyar", accessedAt: "2026-09-27" },
    { id: "eitb", title: "ETB On, EITB’s new television platform", url: "https://www.eitb.eus/es/grupo-eitb/detalle/10158736/etb-on-nueva-plataforma-digital-de-television-de-eitb-se-presenta-esta-tarde-en-sociedad/", publisher: "Euskal Irrati Telebista", publishedAt: "2025-12-16", accessedAt: "2026-09-27" },
    { id: "etxepare-resources", title: "Online Resources", url: "https://www.etxepare.eus/en/online-resources", publisher: "Etxepare Basque Institute", accessedAt: "2026-09-27" }
  ],
  seo: {
    title: "Basque Language Guide: Euskara, Grammar, Dialects and Learning",
    description: "Learn Basque through its speakers, regional varieties, clear spelling, grammar examples, everyday phrases, history, literature, and current learning resources."
  }
} satisfies LanguageGuide;
