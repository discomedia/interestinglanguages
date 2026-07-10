import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Aquitanian",
    relationship: "Ancient language closely connected to ancestral Basque",
    explanation: cited(
      "Personal and divine names recorded in Roman-period Aquitania contain elements that compare convincingly with Basque words and names. Specialists usually treat Aquitanian as ancestral to Basque or as its closest known ancient relative. The evidence is mostly onomastic—names rather than running prose—so it illuminates continuity without giving us a complete ancient grammar.",
      "cambridge-aquitanian",
      "wiki-basque"
    )
  },
  {
    name: "Spanish",
    relationship: "Dominant Romance contact language south of the Pyrenees",
    explanation: cited(
      "Spanish is genealogically unrelated to Basque, but centuries of bilingualism have created extensive borrowing, shared discourse habits, and daily code-switching. Most Basque speakers in Spain also speak Spanish. Similar vocabulary can therefore reflect contact, while the core grammar—case suffixes, ergative marking, and auxiliary agreement—remains strikingly different.",
      "survey-2021",
      "wiki-basque"
    )
  },
  {
    name: "French",
    relationship: "Dominant Romance contact language north of the Pyrenees",
    explanation: cited(
      "French frames education, administration, and much public life in the Northern Basque Country. Northern speech has its own Romance contact layers and sociolinguistic pressures. Learners who know only peninsular Batua media should still listen north of the border, where pronunciation, vocabulary, address forms, and the balance between standard and dialect can differ.",
      "survey-2021",
      "basque-language-book"
    )
  },
  {
    name: "Gascon and Occitan",
    relationship: "Long-standing neighboring Romance languages",
    explanation: cited(
      "Gascon varieties have shared the western Pyrenean region with Basque for centuries. Place names and vocabulary record contact in both directions. This neighborhood is historically important, but borrowing is not descent: resemblance produced through trade, migration, and bilingualism does not turn Basque into a Romance language.",
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
  summary: "Basque is a living language of the western Pyrenees whose clear spelling, richly inflected words, many regional voices, and remarkable revitalization make it much more interesting than the usual ‘mysterious isolate’ headline.",
  family: "Language isolate",
  macroRegion: "Western Europe: the Basque Country in Spain and France",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Basque lets you hear a familiar European landscape organized by an unfamiliar grammar—and then watch that grammar at work in schools, novels, football commentary, improvised verse, science communication, and ordinary family life.",
  hero: {
    imageAlt: "Contemporary Basque words in public print, representing Euskara Batua and regional speech.",
    callToActionLabel: "Meet Euskara in use"
  },
  classification: "A language isolate with no demonstrated genealogical relationship to any living language",
  speakerCommunity: "Euskara belongs to a cross-border community, not one uniform social setting. It is spoken in the Basque Autonomous Community, parts of Navarre, and the Northern Basque Country in France. The 2021 sociolinguistic survey estimated that 30.2 percent of residents aged sixteen or over across those territories could speak Basque: 36.2 percent in the autonomous community, 14.1 percent in Navarre, and 20.1 percent in the north. Eustat’s separate census counted 936,812 speakers aged two or over in the autonomous community; its different threshold means the totals should not be combined. Many younger speakers acquired Basque through immersion schooling. Their Euskara may be strongest in study, friendship, or work while Spanish or French dominates elsewhere. New speakers are central to Basque’s future.",
  facts: [
    { label: "Classification", value: "Language isolate; Aquitanian is the closest securely connected ancient language" },
    { label: "2021 survey", value: "30.2% of residents aged 16+ across the Basque Country were Basque speakers" },
    { label: "Standard", value: "Euskara Batua, developed under Euskaltzaindia from 1968" },
    { label: "Writing", value: "Latin alphabet with regular spellings such as tx, ts, tz, and x" },
    { label: "Core region", value: "Basque Autonomous Community, Navarre, and Northern Basque Country" },
    { label: "Living ecology", value: "Home transmission, immersion schools, adult euskaltegiak, media, literature, music, and public services" }
  ],
  learnerOverview: "Begin with Batua, the unified standard, because it gives you coherent courses, dictionaries, news, and a bridge across regions. Choose accompanying voices early: Bilbao, Donostia, Baiona, and Maule offer different models. Spelling gives quick returns: tx resembles English ‘ch,’ x resembles ‘sh,’ while z, s, and their affricates are distinct in careful descriptions. Learn grammar through complete frames. Etxean nago means ‘I am at home’; etxera noa, ‘I am going home’; etxetik nator, ‘I come from home.’ The noun remains recognizable while its ending draws a miniature map. Do not postpone speech for an ergativity lecture. Learn Nik kafea nahi dut, ‘I want coffee,’ notice why nik has -k, and revisit the analysis as your auxiliary system grows.",
  origins: {
    overview: cited(
      "Basque is an isolate in the technical sense: comparison has not demonstrated a common ancestor with any present-day language. That does not mean it developed without contact, never changed, or emerged from prehistory in its current form. Aquitanian names in Roman inscriptions show persuasive correspondences, while linguists reconstruct earlier Basque by comparing dialects, texts, and loanword sound changes. Claims linking it to Iberian, Etruscan, Caucasian languages, or one prehistoric population remain unproven. ‘Pre-Indo-European’ is chronological shorthand, not one language family. The interesting story is long continuity alongside exchange.",
      "cambridge-aquitanian",
      "glottolog-basque",
      "wiki-basque"
    ),
    timeline: [
      {
        period: "Antiquity",
        event: cited(
          "Roman-period inscriptions in Aquitania preserve personal and divine names with elements comparable to Basque, including forms associated with words for ‘man,’ ‘woman,’ and kinship. Because the record consists mainly of names, scholars can establish a close relationship more confidently than they can reconstruct ordinary conversation.",
          "cambridge-aquitanian",
          "wiki-basque"
        )
      },
      {
        period: "Roman and early medieval centuries",
        event: cited(
          "Latin and emerging Romance varieties surrounded and interacted with ancestral Basque. Early evidence survives in names, glosses, and loanwords rather than a continuous native literature. Latin loans whose sounds changed inside Basque help linguists order historical developments, but they also show that contact was old and intimate.",
          "basque-language-book",
          "wiki-basque"
        )
      },
      {
        period: "1545",
        event: cited(
          "Bernard Etxepare’s Linguae Vasconum Primitiae became the first book printed in Basque. Its famous invitation for Euskara to ‘go out into the world’ now reads less like the birth of the language than a new technological moment for a much older spoken tradition.",
          "basque-language-book",
          "wiki-basque"
        )
      },
      {
        period: "1919–1968",
        event: cited(
          "Euskaltzaindia, the Academy of the Basque Language, was founded in 1919. In 1968 it approved foundational proposals associated with Koldo Mitxelena for a unified written standard, addressing spelling, nominal inflection, vocabulary, and later auxiliary forms.",
          "education-basque",
          "euskaltzaindia"
        )
      },
      {
        period: "Late 20th century",
        event: cited(
          "After severe restriction—especially under Franco’s dictatorship in Spain—Basque gained co-official status in the Basque Autonomous Community and zoned recognition in Navarre. Immersion schools, adult-language centers, publishing, broadcasting, and public administration greatly expanded the domains in which it could be learned and used.",
          "education-basque",
          "survey-2021"
        )
      },
      {
        period: "2021 and after",
        event: cited(
          "Younger cohorts show much higher knowledge than older ones in several territories, largely reflecting education. Use has not risen automatically at the same rate: opportunities, peer networks, confidence, and the dominant language of a setting all affect whether competence becomes everyday speech.",
          "euskadi-data",
          "eustat-2021"
        )
      }
    ],
    contactHistory: cited(
      "Basque vocabulary contains layers from Latin and later Romance languages, with Spanish, Gascon, and French especially important; modern international terms often arrive through English. Borrowed nouns take Basque determiners and case endings like inherited ones. Bilingual speakers also code-switch, calque expressions, and choose Romance words for humor, precision, or audience. Contact runs outward too: Spanish izquierda ‘left’ is widely connected with Basque ezker, and Basque names travel globally. Purity is a poor measure of vitality. Ask instead which community uses a form, in which register, and whether its alternative feels ordinary, technical, marked, or newly promoted.",
      "basque-language-book",
      "academy-corpus",
      "wiki-basque"
    ),
    standardization: cited(
      "Euskara Batua—literally ‘unified Basque’—is a common written and educated standard, not a dialect that replaced all others overnight. Euskaltzaindia’s work from 1968 drew substantially on central varieties while making cross-regional choices in spelling, inflection, vocabulary, and auxiliary conjugation. The letter h became a famous controversy: retaining it connected the standard to northern pronunciation and writing traditions even though many southern speakers do not pronounce it. Batua now supports schooling, university, administration, national media, and most learner material. Local dialects remain important in family talk, performance, local media, and identity, and speakers often blend standard and regional resources rather than selecting one sealed code.",
      "education-basque",
      "basque-language-book",
      "euskaltzaindia"
    )
  },
  variants: {
    overview: cited(
      "Modern dialect classifications usually describe a western variety, a central variety, Navarrese, Navarrese-Lapurdian, and Souletin/Zuberoan, with transition zones and substantial local variation. Older labels such as Biscayan and Gipuzkoan remain common. Boundaries reflect bundles of sound, vocabulary, morphology, and auxiliary differences, not political provinces traced with a ruler. Batua has increased mutual access, yet a learner trained only on careful standard audio may still find rapid village speech difficult. Age, schooling, city life, and whether someone learned at home also shape speech.",
      "basque-language-book",
      "basque-language-book",
      "wiki-basque"
    ),
    items: [
      { name: "Euskara Batua", note: cited("The shared standard used across education, publishing, public institutions, and cross-regional media. Spoken Batua is normally colored by the speaker’s region; there is no need to erase a local accent to speak the standard well.", "education-basque", "euskaltzaindia") },
      { name: "Western / Bizkaian", note: cited("Strong in much of Bizkaia and neighboring areas, with distinctive vocabulary, verb forms, and sound patterns. Its distance from the central base of Batua made early standardization debates especially sensitive.", "education-basque", "basque-language-book") },
      { name: "Central", note: cited("Spoken broadly through Gipuzkoa and adjoining areas. Central forms contributed heavily to Batua, but everyday central speech is not simply the standard read aloud.", "basque-language-book", "wiki-basque") },
      { name: "Navarrese and Navarrese-Lapurdian", note: cited("Varieties extend across political and state borders, reminding learners that Navarre, Lapurdi, and nearby zones form a historical continuum. French- and Spanish-dominant settings create different modern pressures.", "survey-2021", "basque-language-book") },
      { name: "Souletin / Zuberoan", note: cited("The easternmost major dialect, associated with Zuberoa/Soule, is notable for its sound system, vocabulary, and performance traditions. It can be challenging for Batua-trained listeners, but is a living voice rather than an antique curiosity.", "basque-language-book", "basque-language-book") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Standard Basque orthography is admirably consistent, although dialects do not assign every spelling exactly the same sound. The five vowel letters a, e, i, o, u have values broadly familiar to speakers of Spanish. Consonants require finer attention: x is like English sh; tx is like ch; j ranges regionally from a y-like sound to a stronger velar or postalveolar sound; and r contrasts with rr between vowels. Basque also distinguishes several sibilants. In careful standard descriptions, z, s, and x represent different fricatives, paired with affricates tz, ts, and tx. Many speakers merge parts of this system, so learn to recognize variation without flattening every spelling in your own speech.",
      "wiki-basque",
      "basque-language-book"
    ),
    script: "Basque Latin alphabet in Euskara Batua orthography",
    soundSystem: cited(
      "The vowel system is compact; consonant detail carries more of the learner’s work. Z is conventionally a laminal or dental-alveolar sibilant, s a more retracted apical sound, and x a postalveolar sound. Their affricate partners begin with a stop-like closure. English speakers often hear z and s as variants of one /s/, while Spanish speakers may import local Spanish mergers. Palatal sounds can also signal expressive or diminutive meanings in some words and dialects. H is pronounced in some northern varieties but silent for most southern speakers. There is no single accentless target: choose a reliable model, preserve spelling contrasts in literacy, and understand which spoken distinctions that model maintains.",
      "basque-language-book",
      "wiki-basque"
    ),
    prosody: cited(
      "Stress is less uniform than beginner summaries suggest. Regional systems range from relatively regular phrase-level patterns to lexically contrastive accent systems, and Batua spelling normally does not mark stress. A safe learning habit is to copy whole phrases from one speaker rather than assign Spanish or English stress mechanically word by word. Listen for where focus falls: Basque information structure often places the focused constituent immediately before the verb, and prosody helps signal that structure. Record your own versions of short question-answer pairs; the melody of Nor etorri da?—Ane etorri da makes the answer ‘Ane’ prominent more effectively than an isolated pronunciation drill.",
      "basque-language-book",
      "ehu-grammar"
    ),
    learnerTraps: [
      "Pronouncing written z as English /z/; it represents a voiceless sibilant",
      "Collapsing z, s, and x—and tz, ts, and tx—before learning what your model distinguishes",
      "Reading every j with one Spanish value despite substantial regional variation",
      "Rolling every written r strongly; single intervocalic r and rr contrast",
      "Assuming Batua spelling encodes one universal stress pattern"
    ],
    sampleWords: [
      { original: "euskara", translation: "Basque language", note: "The middle s is not English /z/. Copy a native recording rather than anglicizing the sequence eu-." },
      { original: "etxe", translation: "house", note: "Tx is the affricate heard approximately in English ‘church’; x by itself has a different sound." },
      { original: "itsaso", translation: "sea", note: "A useful contrast drill: ts is an affricate, while the following s is a fricative." },
      { original: "zortzi", translation: "eight", note: "This compact word contains z and tz. Keep both voiceless and avoid English /z/." },
      { original: "txakur", translation: "dog", note: "Begin with tx as in English ‘ch,’ then keep the final r light according to your speaker model." },
      { original: "herri", translation: "town; people; country in compounds", note: "The h may be audible in northern speech and silent in much southern speech; rr is the stronger rhotic." }
    ]
  },
  writing: {
    overview: cited(
      "Basque uses the Latin script and needs no transliteration. Batua spelling regularized older and regional practices so one written form could circulate across the whole speech area. The alphabet avoids c, q, v, w, and y in ordinary native spelling except in names and loans. Digraphs such as dd, ll, rr, ts, tt, tx, and tz represent sound sequences or palatal consonants; they are not separate Unicode characters. This simplicity matters digitally: normal Latin text tools work well, although spellcheckers and search systems must still analyze richly inflected word forms.",
      "education-basque",
      "education-basque"
    ),
    primaryScript: "Latin script",
    romanization: cited("Basque is already written in Latin letters, so learner respelling usually creates more problems than it solves. IPA is useful for comparing dialect sounds, but standard orthography should be learned from the first lesson.", "education-basque", "wiki-basque"),
    spellingNorms: cited(
      "Case markers attach to the end of the entire noun phrase, making long written words that remain structurally transparent. Etxe ‘house,’ etxea ‘the house,’ etxean ‘in the house,’ etxeko ‘of/from the house’ as a modifier, and etxeetara ‘to the houses’ are not arbitrary dictionary entries. Proper names take endings too: Bilbon ‘in Bilbao,’ Donostiatik ‘from Donostia.’ Hyphens and apostrophes should not be inserted merely because English would use a preposition. The standard h must be written even by speakers who do not pronounce it. Capitalization is restrained, and language names such as euskara are normally lowercase inside a sentence.",
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
      "Basque grammar packages relationships into endings and auxiliary forms. It is often called agglutinative because morphemes—small meaningful pieces—can be added in a relatively segmentable sequence. But tidy charts hide two facts: endings may change shape after consonants or vowels, and everyday fluency depends on selecting whole constructions quickly. The most productive study unit is therefore a short sentence whose participants you can swap. Gizona etorri da, ‘the man has come’; Gizonak ogia ekarri du, ‘the man has brought the bread’; Gizonak haurrari ogia eman dio, ‘the man has given the child bread.’ Those three lines reveal case alignment and auxiliary agreement together.",
      "ehu-cases",
      "ehu-grammar"
    ),
    typologicalProfile: cited(
      "Basque has ergative-absolutive case marking. The sole participant of an intransitive verb and the direct object of a transitive verb take the absolutive, normally with no dedicated case consonant. The agent-like subject of a transitive verb takes ergative -k, while an indirect object takes dative -i. Finite auxiliaries can index all three participants. This is typologically unusual to many European-language learners but not psychologically exotic: speakers acquire patterns, not diagrams. Basque is generally head-final, uses postpositions and case suffixes, places relative clauses before nouns, and allows word order to respond strongly to topic and focus.",
      "ehu-cases",
      "ehu-grammar",
      "ehu-grammar"
    ),
    morphology: cited(
      "A noun phrase usually ends with a determiner that combines with number and case. Mendi-a-n can be segmented as mountain-the-in, ‘in the mountain’; mendi-e-ta-tik contains plural, local, and source material, ‘from the mountains.’ Only the edge of the phrase carries the case ending: etxe handi hartan, ‘in that big house.’ Verbs divide labor between a non-finite lexical form and a finite auxiliary: ikusi dut, ‘I have seen it,’ combines ikusi ‘seen’ with dut, which indexes a first-person ergative subject and third-person absolutive object. A smaller set of common verbs has synthetic forms, such as nator ‘I am coming.’ The system becomes manageable when learned as valency frames: nor ‘who/what absolutive,’ nori ‘to whom,’ and nork ‘who ergative.’",
      "ehu-cases",
      "ehu-grammar"
    ),
    syntax: cited(
      "Basque is often labeled SOV because neutral transitive clauses commonly place subject, object, then verb, but conversational order is guided by information structure. The focused answer typically stands immediately before the verb. Nor etorri da? ‘Who came?’ invites Ane etorri da, with Ane directly before etorri da. Zer erosi du Anek? ‘What did Ane buy?’ invites Liburua erosi du Anek, ‘Ane bought the book,’ foregrounding liburua. This flexibility does not mean random order: moving a constituent changes what sounds given, contrastive, or newsworthy. Negative clauses have their own ordering, commonly placing ez before the finite auxiliary: Ez dut ulertzen, ‘I do not understand.’ Relative clauses precede the noun: erosi dudan liburua, literally ‘bought I-have-it-that book,’ means ‘the book that I bought.’",
      "ehu-grammar",
      "ehu-grammar"
    ),
    advancedPainPoints: [
      "Choosing ergative, absolutive, and dative frames automatically in conversation",
      "Matching auxiliaries to person, number, tense, and all indexed arguments",
      "Recognizing dialectal auxiliary and lexical forms after learning Batua",
      "Using word order and intonation for focus rather than copying Spanish, French, or English",
      "Understanding allocutive forms that encode a familiar addressee in the verb"
    ],
    topics: [
      {
        title: "Ergative alignment without the mythology",
        body: cited("Compare Mutila etorri da, ‘the boy came,’ with Neskak mutila ikusi du, ‘the girl saw the boy.’ Mutila is absolutive in both: it is the only participant of ‘come’ and the object of ‘see.’ Neskak adds ergative -k because it is the transitive subject. Learn the marker with verb frames, since some predicates do not map neatly onto English ideas of action.", "ehu-cases", "ehu-grammar"),
        example: "Neskak mutila ikusi du.",
        exampleTranslation: "The girl saw the boy."
      },
      {
        title: "The auxiliary is a participant map",
        body: cited("In Liburua irakurri dut, dut indicates ‘I have it’; in Liburuak irakurri ditut, ditut reflects a plural absolutive object. Haurrari liburua eman diot, ‘I gave the child the book,’ adds a third-person dative participant. Learners should color-code nor, nori, and nork in examples before memorizing full paradigms.", "ehu-grammar", "ehu-cases"),
        example: "Haurrari liburua eman diot.",
        exampleTranslation: "I gave the child the book."
      },
      {
        title: "Place is built from cases",
        body: cited("Basque distinguishes location, destination, source, path, and relation through suffixes: etxean ‘at/in the house,’ etxera ‘to the house,’ etxetik ‘from the house,’ etxetik zehar ‘through/by way of the house area,’ and etxeko atea ‘the house door.’ Animates often use forms built around -gan: lagunarengana, ‘to the friend.’", "ehu-cases"),
        example: "Bilbotik Donostiara noa.",
        exampleTranslation: "I am going from Bilbao to Donostia."
      },
      {
        title: "Determiners sit at the phrase edge",
        body: cited("The article -a is suffixed: liburu ‘book,’ liburua ‘the book.’ In liburu berri handia, ‘the big new book,’ only the final adjective bears the determiner. Case follows that edge: liburu berri handian, ‘in the big new book.’ The sequence explains why dictionary headwords and forms in running text often look different.", "ehu-cases", "ehu-grammar"),
        example: "Etxe handi hartan bizi naiz.",
        exampleTranslation: "I live in that big house."
      },
      {
        title: "Focus often stands before the verb",
        body: cited("A question helps locate focus. Nork egin du? ‘Who did it?’—Mirenek egin du, ‘Miren did it.’ Zer egin du Mirenek? ‘What did Miren do?’—Kafea egin du Mirenek, ‘Miren made coffee.’ The same participants can be ordered differently because the answer supplies different new information.", "ehu-grammar"),
        example: "Mirenek egin du.",
        exampleTranslation: "Miren did it."
      },
      {
        title: "Negation reorganizes the verbal group",
        body: cited("In affirmative periphrastic forms the lexical verb precedes the auxiliary: ulertzen dut, ‘I understand.’ With ez, the finite auxiliary follows the negative particle and the lexical verb moves later: ez dut ulertzen, ‘I do not understand.’ Learn affirmative-negative pairs aloud because translating word by word encourages the wrong order.", "ehu-grammar", "ehu-grammar"),
        example: "Ez dut ulertzen.",
        exampleTranslation: "I do not understand."
      },
      {
        title: "Relative clauses come before nouns",
        body: cited("The ending -n links a finite clause to the noun it modifies: atzo erosi nuen liburua, ‘the book that I bought yesterday.’ English learners must wait until the final noun to learn what the description belongs to. Begin with short chunks, then expand the material before the verb.", "ehu-grammar", "ehu-grammar"),
        example: "Atzo erosi nuen liburua ona da.",
        exampleTranslation: "The book that I bought yesterday is good."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "The Basque Country, Euskal Herria in a broad cultural sense, spans seven historical territories across Spain and France. Legal status and speaker density vary sharply. Basque is co-official with Spanish throughout the Basque Autonomous Community. Navarre applies different language regimes by zone. France does not give Basque co-official status, although local institutions, associations, schools, and media sustain it. Geography is not destiny: dense Basque-speaking towns exist alongside predominantly Spanish- or French-speaking cities, while urban schools and adult learning have created new networks far from the strongest traditional zones.",
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
      "Basque is demanding for English speakers principally because few familiar words or grammatical shortcuts transfer, not because it violates human logic. Spelling, a five-vowel core, lack of grammatical gender, and productive suffixes are friendly. The difficult concentration comes in verb argument structure: you must know who does what to whom to choose case and auxiliary forms. Abundant Spanish- and French-medium teaching can also be a practical barrier for an English-only learner. Difficulty changes dramatically with access to an euskaltegi, immersion environment, or patient conversation partner.",
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
      "A sustainable path is about five focused hours weekly plus lightweight daily contact. During the first months, build A1 conversational frames and the location cases; then add past tense, plural objects, relative clauses, and increasingly unscripted listening. Reaching independent B-level use normally requires hundreds of hours, while comfortable C-level work or dialect comprehension is a multi-year project. HABE structures adult learning from A1 through C2, giving learners concrete local milestones without pretending that an exam certificate and effortless community participation are identical.",
      "habe-ikasbil",
      "habe-ikasbil"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Use a three-track notebook. Track one holds reusable sentence frames labeled by argument structure: nor, nor–nork, or nor–nori–nork. Track two holds linked word families and case forms, not isolated translations. Track three records social evidence: who said a form, where, and whether it was Batua, local, formal, joking, or intimate. Work with a tutor or euskaltegi long enough to stop treating ergative errors as random. Once you can narrate a day, retell the same event from another participant’s perspective; that forces case and auxiliary choices to change for a communicative reason.",
      "habe-ikasbil",
      "ehu-grammar"
    ),
    mediaPractice: cited(
      "EITB offers news, television, radio, sport, and entertainment in Basque; use short clips repeatedly before graduating to live radio. Argia and Berria provide current prose, while children’s or learner materials supply more transparent syntax. Bertsolaritza—improvised sung verse—becomes especially rewarding at advanced levels because rhyme, meter, dialect, humor, and topical argument meet in real time. Do not judge your listening by one genre: a scripted weather report, a streamer, a Zuberoan interview, and a bertsolari demand different skills.",
      "eitb",
      "habe-ikasbil",
      "basque-language-book"
    ),
    dictionariesAndCorpora: cited(
      "Use Elhuyar for bilingual lookup and examples, then Euskaltzaindia’s dictionary for standard senses and normative information. The Academy’s Lexicon Observatory assembles lemmatized contemporary texts, especially media, so a search can recover many inflected forms under one lemma. Euskalterm is useful for technical terminology. A corpus does not decide what you should say by raw frequency alone: compare date, genre, region, and surrounding construction, then ask a speaker when two forms feel socially different.",
      "academy-corpus",
      "elhuyar",
      "euskaltzaindia"
    ),
    resources: [
      { type: "course", title: "HABE / IKASBIL", url: "https://www.ikasbil.eus/en/home", level: "all", description: cited("The public adult-learning portal supplies level-tagged audio, video, texts, exercises, exam models, and teaching materials from A1 through C levels.", "habe-ikasbil") },
      { type: "course", title: "INGURA online Basque", url: "https://www.inguraonline.eus/", level: "beginner", description: cited("A multilingual digital environment backed by HABE for structured online learning, including guided A1 and A2 pathways through participating centers.", "habe-ikasbil") },
      { type: "dictionary", title: "Elhuyar Dictionary", url: "https://hiztegiak.elhuyar.eus/", level: "all", description: cited("A practical bilingual reference with translations, domain and usage labels, and examples, aligned with Euskaltzaindia recommendations.", "elhuyar") },
      { type: "corpus", title: "Euskaltzaindia Lexicon Observatory", url: "https://www.euskaltzaindia.eus/index.php?option=com_oehberria&task=bilaketa&Itemid=413&lang=eu", level: "advanced", description: cited("A large lemmatized corpus of contemporary written Basque for checking forms, collocations, genres, and change.", "academy-corpus") },
      { type: "media", title: "EITB Nahieran", url: "https://www.eitb.eus/eu/nahieran/", level: "intermediate", description: cited("On-demand Basque television and radio across news, culture, children’s programming, documentary, drama, and sport.", "eitb") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Basque vocabulary makes relationships visible through productive composition. Etxe is ‘house’; etxeko is ‘of/from the house’ as a modifier; etxekoandre historically combines house and woman, though social usage needs care; and countless surnames and place names contain etxe. The language’s public vocabulary also records deliberate modernization: scientists, journalists, translators, and terminology planners adapt inherited resources and international forms. The best words are not museum tokens but entrances into practices—auzolan into collective work, bertso into improvised verse, and euskaldun into a revealing definition of identity through language.",
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
      { term: "maite", meaning: "beloved; dear; to love in maite izan", note: cited("Basque commonly expresses ‘love’ with the construction maite izan. Maite also appears as an adjective, noun, and personal name, making it a useful lesson in learning words through constructions.", "elhuyar") },
      { term: "pintxo", meaning: "small bar snack", note: cited("The Basque spelling uses tx. The food culture is now internationally branded, but ordering, sharing, and regional practice are richer than treating pintxo as simply a miniature meal.", "elhuyar") },
      { term: "agur", meaning: "goodbye; greeting", note: cited("Often taught as both hello and goodbye, though modern frequency and nuance vary by region and situation. It also carries literary and ceremonial resonance.", "euskaltzaindia") }
    ],
    loanwordLayers: cited(
      "Old Latin loans are valuable historical evidence because they were remodeled by Basque sound changes; later Spanish, French, Gascon, and international loans sit beside them. Some borrowed words coexist with planned or revived Basque terms, and the choice can signal genre or speaker preference. Technology vocabulary demonstrates several strategies: direct international forms, semantic extension, and native compounds. Do not label every Romance-looking word ‘corruption,’ and do not assume every opaque word is prehistoric. Euskaltzaindia’s historical and standard dictionaries, supported by corpora, are safer than attractive folk etymologies built from accidental resemblance.",
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
      "A language isolate is not a language without relationships. It means the comparative method has not established a genealogical family beyond the ancient Aquitanian connection. Basque has nevertheless spent its documented history beside Celtic, Latin, Gascon, Spanish, French, and other languages, exchanging words and communicative habits. Claims of kinship with Georgian, Berber, Iberian, or distant languages need regular sound correspondences and shared inherited morphology, not a list of look-alike words. Contact relationships are historically rich in their own right and should not be disguised as family trees.",
      "glottolog-basque",
      "cambridge-aquitanian",
      "wiki-basque"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Euskara is entwined with identity, but no speaker represents one politics or history. Donostia/San Sebastián, Iruña/Pamplona, and Baiona/Bayonne reflect multilingual histories. Begin in Basque, accept a switch without reading it as rejection, and ask to continue when appropriate. Support the ecosystem: attend bertso events, buy books and music, use Basque services, and value new speakers alongside home-language dialect speakers.",
  resources: [
    { type: "course", title: "IKASBIL learner portal", url: "https://www.ikasbil.eus/en/home", level: "all", description: cited("HABE’s extensive collection of graded activities, video, audio, reading, exam practice, and adult-learning materials.", "habe-ikasbil") },
    { type: "course", title: "INGURA", url: "https://www.inguraonline.eus/", level: "beginner", description: cited("A structured online environment for beginning Basque, connected to the public adult-education system and guided course provision.", "habe-ikasbil") },
    { type: "dictionary", title: "Euskaltzaindiaren Hiztegia", url: "https://www.euskaltzaindia.eus/index.php?option=com_hiztegianbilatu&view=frontpage&Itemid=410&lang=eu", level: "all", description: cited("The Academy’s standard dictionary for definitions, accepted forms, usage information, and normative checking.", "euskaltzaindia") },
    { type: "dictionary", title: "Elhuyar Hiztegiak", url: "https://hiztegiak.elhuyar.eus/", level: "all", description: cited("Fast bilingual lookup with examples and subject or usage labels; pair it with the monolingual Academy dictionary as proficiency grows.", "elhuyar") },
    { type: "media", title: "EITB Nahieran", url: "https://www.eitb.eus/eu/nahieran/", level: "intermediate", description: cited("A large on-demand library of contemporary Basque radio and television, useful for building genre and accent range.", "eitb") },
    { type: "other", title: "Etxepare Basque Institute resources", url: "https://www.etxepare.eus/en/online-resources", level: "all", description: cited("A gateway to dictionaries, learning materials, culture, and university study abroad.", "etxepare-resources") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Kaixo!", translation: "Hello!", usageNote: "A widely understood informal greeting. Egun on is often more natural in a shop or morning encounter." },
    { original: "Egun on.", translation: "Good morning; good day.", literalMeaning: "Good day.", usageNote: "A dependable daytime greeting; use arratsalde on later in the day and gabon at night." },
    { original: "Zer moduz?", translation: "How are things?", literalMeaning: "In what manner?", usageNote: "An ordinary informal check-in; Ondo, eta zu? means ‘Good, and you?’" },
    { original: "Mesedez.", translation: "Please.", usageNote: "Useful for polite requests. Place it naturally with a complete request rather than translating every English ‘please’ mechanically." },
    { original: "Eskerrik asko.", translation: "Thank you very much.", usageNote: "The standard all-purpose expression of thanks; mila esker, literally ‘a thousand thanks,’ is another common form." },
    { original: "Ez horregatik.", translation: "You’re welcome.", literalMeaning: "Not for that.", usageNote: "A conventional response to thanks." },
    { original: "Barkatu.", translation: "Excuse me; sorry.", usageNote: "Use it to get attention, pass someone, or apologize; context and intonation distinguish the force." },
    { original: "Ez dut ulertzen.", translation: "I don’t understand.", usageNote: "Notice negative order: ez + auxiliary dut + lexical verb ulertzen." },
    { original: "Polikiago, mesedez.", translation: "More slowly, please.", usageNote: "A concise request when speech is too fast. Add hitz egin, ‘speak,’ if you want a fuller sentence." },
    { original: "Nola esaten da hau euskaraz?", translation: "How do you say this in Basque?", literalMeaning: "How is this said in Basque?", usageNote: "A high-value classroom and conversation-repair phrase." },
    { original: "Kafe bat nahi dut, mesedez.", translation: "I would like a coffee, please.", literalMeaning: "I want one coffee, please.", usageNote: "The subject ‘I’ is encoded in dut; explicit nik is unnecessary unless contrastive." },
    { original: "Non dago komuna?", translation: "Where is the toilet?", usageNote: "Non asks location; compare nora ‘to where?’ and nondik ‘from where?’" },
    { original: "Pozten naiz zu ezagutzeaz.", translation: "Pleased to meet you.", literalMeaning: "I am glad about meeting you.", usageNote: "A polite full expression; conversation may use shorter formulas." },
    { original: "Gero arte!", translation: "See you later!", literalMeaning: "Until later!", usageNote: "A common, non-final leave-taking. Agur is also used for goodbye." }
  ],
  sources: [
    { id: "wiki-basque", title: "Basque language", url: "https://en.wikipedia.org/wiki/Basque_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-basque", title: "Glottolog: Basque", url: "https://glottolog.org/resource/languoid/id/basq1248", publisher: "Glottolog", accessedAt: "2026-07-10" },
    { id: "cambridge-aquitanian", title: "The Relationship between Aquitanian and Basque: Achievements and Challenges of the Comparative Method", url: "https://www.cambridge.org/core/books/language-change-and-linguistic-diversity/relationship-between-aquitanian-and-basque-achievements-and-challenges-of-the-comparative-method-in-a-context-of-poor-documentation/9EB6514ED397F9F107DF53036B83C842", publisher: "Cambridge University Press", publishedAt: "2024", accessedAt: "2026-07-10" },
    { id: "basque-language-book", title: "Euskara: The Basque Language", url: "https://basqueculture.eus/media/uploads/libros/basque_euskara_eus-en1.pdf", publisher: "Etxepare Basque Institute", accessedAt: "2026-07-10" },
    { id: "education-basque", title: "Basque in Education in the Basque Autonomous Community", url: "https://www.euskadi.eus/web01-s2hhome/en/contenidos/informacion/dia6/en_2027/adjuntos/publications_in_english/Basque_in_Education_en_2020_berrituta.pdf", publisher: "Basque Government Department of Education", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "survey-2021", title: "Seventh Sociolinguistic Survey 2021", url: "https://www.euskadi.eus/contenidos/informacion/eas_ikerketak/en_def/adjuntos/Seventh_Sociolinguistic_Survey_2021.pdf", publisher: "Basque Government, Government of Navarre, and Euskararen Erakunde Publikoa", publishedAt: "2023", accessedAt: "2026-07-10" },
    { id: "euskadi-data", title: "Basque Language System of Indicators: Significant Data", url: "https://www.euskadi.eus/significant-data/web01-a3eas/en/", publisher: "Basque Government", accessedAt: "2026-07-10" },
    { id: "eustat-2021", title: "In 2021, 62.4% of people residing in the Basque Country had some knowledge of Basque", url: "https://en.eustat.eus/elementos/ele0020200/ti_in-2021-624-of-people-residing-in-the-basque-country-had-some-knowledge-of-basque/not0020231_i.html", publisher: "Eustat — Basque Statistics Institute", publishedAt: "2022-10-27", accessedAt: "2026-07-10" },
    { id: "euskaltzaindia", title: "Euskaltzaindia — Academy of the Basque Language", url: "https://www.euskaltzaindia.eus/en/", publisher: "Euskaltzaindia", accessedAt: "2026-07-10" },
    { id: "ehu-cases", title: "Cases and Postpositions", url: "https://www.ehu.eus/en/web/eins/cases-and-postpositions", publisher: "Basque Language Institute, University of the Basque Country (UPV/EHU)", accessedAt: "2026-07-10" },
    { id: "ehu-grammar", title: "A Brief Grammar of Euskara, the Basque Language", url: "https://www.ehu.eus/en/web/eins/basque-grammar", publisher: "Basque Language Institute, University of the Basque Country (UPV/EHU)", accessedAt: "2026-07-10" },
    { id: "habe-ikasbil", title: "IKASBIL: Learn Basque", url: "https://www.ikasbil.eus/en/home", publisher: "HABE, Basque Government", accessedAt: "2026-07-10" },
    { id: "academy-corpus", title: "Lexicon Observatory, a Basque Corpus of Nearly 60 Million Words", url: "https://www.elhuyar.eus/en/press-room/lexicon-observatory-a-basque-corpus-of-almost-60-million-words", publisher: "Elhuyar and Euskaltzaindia", publishedAt: "2017-03-07", accessedAt: "2026-07-10" },
    { id: "elhuyar", title: "Elhuyar Dictionary", url: "https://hiztegiak.elhuyar.eus/", publisher: "Elhuyar", accessedAt: "2026-07-10" },
    { id: "eitb", title: "EITB Nahieran", url: "https://www.eitb.eus/eu/nahieran/", publisher: "Euskal Irrati Telebista", accessedAt: "2026-07-10" },
    { id: "etxepare-resources", title: "Online Resources", url: "https://www.etxepare.eus/en/online-resources", publisher: "Etxepare Basque Institute", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Basque Language Guide: Euskara, Grammar, Dialects and Learning",
    description: "A source-backed guide to Basque: its communities, history, Batua and dialects, sounds, ergative grammar, words, culture, practical phrases, and modern learning resources."
  }
} satisfies LanguageGuide;
