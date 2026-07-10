import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Ancient Greek",
    relationship: "Earlier historical stages",
    explanation: cited(
      "Modern Greek continues the same long-documented language tradition, but it is not Classical Greek pronounced differently. Sound changes, the loss of the infinitive and productive dative, new tense constructions, vocabulary change, and two millennia of ordinary speech separate a modern conversation from Plato. Ancient study helps with learned vocabulary and older texts; modern fluency does not automatically unlock Homer, and classical training does not automatically produce natural conversation.",
      "wiki-history",
      "wiki-modern"
    )
  },
  {
    name: "Tsakonian",
    relationship: "Divergent Hellenic relative",
    explanation: cited(
      "Tsakonian is the exceptional living Hellenic variety usually traced primarily to Doric rather than to the Koine line behind most Modern Greek varieties. It is severely endangered and substantially different from Standard Modern Greek, so presenting it as a picturesque Greek accent understates both its linguistic distance and the community work needed to sustain it.",
      "glottolog",
      "wiki-greek"
    )
  },
  {
    name: "Albanian",
    relationship: "Balkan contact language",
    explanation: cited(
      "Albanian is a separate Indo-European branch, not a close Greek sibling. Long neighborhood in the Balkans nevertheless produced shared vocabulary and converging structures. The comparison is useful precisely because genealogy and contact tell different stories: similar constructions need not descend from a recent common Greek–Albanian parent.",
      "wiki-greek",
      "glottolog"
    )
  },
  {
    name: "Turkish",
    slug: "turkish",
    relationship: "Major contact language",
    explanation: cited(
      "Turkish is unrelated genealogically, yet Ottoman-era coexistence left a visible layer in colloquial vocabulary, food, music, urban life, and family names. Greek also contributed words to Turkish. Some inherited loans became politically marked or attracted formal replacements, while many remain completely ordinary; etymology alone does not predict how a speaker feels about a word.",
      "wiki-history",
      "triantafyllides"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

const resources = [
  {
    type: "course",
    title: "Greek to Me",
    url: "https://greektome.greeklanguage.gr/learn-modern-greek/",
    level: "beginner",
    description: cited("The Centre for the Greek Language's structured online route through A1–B1 Modern Greek.", "greek-to-me")
  },
  {
    type: "dictionary",
    title: "Dictionary of Standard Modern Greek",
    url: "https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/",
    level: "all",
    description: cited("A free monolingual reference for definitions, spelling, inflection, expressions, and etymology.", "triantafyllides")
  },
  {
    type: "corpus",
    title: "Centre for the Greek Language Corpora",
    url: "https://www.greek-language.gr/greekLang/modern_greek/tools/corpora/corpora/search.html",
    level: "advanced",
    description: cited("Search inflected forms, collocations, prepositions, and register in connected modern writing.", "cgl-corpora")
  },
  {
    type: "corpus",
    title: "Hellenic National Corpus",
    url: "https://hnc.ilsp.gr/",
    level: "advanced",
    description: cited("A major collection for checking vocabulary and constructions across contemporary written genres.", "hnc", "athena-corpus")
  },
  {
    type: "course",
    title: "Modern Greek Language Teaching Center, University of Athens",
    url: "https://en.greekcourses.uoa.gr/",
    level: "all",
    description: cited("University-based instruction in Athens, with practical CEFR-aligned level descriptions.", "uoa-courses")
  },
  {
    type: "other",
    title: "Certificate of Attainment in Greek",
    url: "https://www.greek-language.gr/certification/",
    level: "all",
    description: cited("Official level specifications, examination information, and sample tasks for progress checks.", "cgl-certification")
  },
] satisfies LanguageGuide["resources"];

export const greekGuide = {
  slug: "greek",
  name: "Greek",
  autonym: "Ελληνικά",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Modern Greek is a living language of Greece, Cyprus, and a worldwide diaspora: historically deep, unmistakably contemporary, and full of expressive choices that cannot be learned by treating today's speech as a simplified classical text.",
  family: "Indo-European, Hellenic",
  macroRegion: "Southeastern Europe and the eastern Mediterranean",
  primaryScript: "Greek alphabet",
  difficultyLabel: "Moderate",
  learnerHook: "The alphabet opens quickly; the richer project is learning how a modern speaker moves among intimate conversation, public language, regional speech, songs, news, and a vocabulary whose older layers remain visible without controlling every sentence.",
  hero: {
    imageAlt: "Contemporary Greek handwriting and print showing the modern monotonic alphabet.",
    callToActionLabel: "Explore Greek in use"
  },
  classification: "The principal modern language of the Hellenic branch of Indo-European",
  speakerCommunity: "Greek is the official language of Greece and, alongside Turkish, of the Republic of Cyprus; it is also one of the European Union's official languages. Its communities extend through long-established diasporas in Australia, the United States, Canada, Germany, the United Kingdom, southern Africa, and elsewhere. A single speaker may use Standard Modern Greek in school or public writing, a regionally colored urban vernacular with friends, a stronger village or Cypriot variety with family, and inherited expressions in church, song, politics, or ceremony. That range is ordinary multilingual-style competence within Greek, not evidence that everyday speech is an imperfect version of a classical ideal.",
  facts: [
    { label: "Family", value: "Indo-European · Hellenic" },
    { label: "Modern users", value: "About 13 million first- and second-language speakers worldwide" },
    { label: "Official use", value: "Greece; Cyprus (with Turkish); European Union" },
    { label: "Standard", value: "Standard Modern Greek, based mainly on Demotic" },
    { label: "Writing", value: "24-letter Greek alphabet; modern monotonic accenting" },
    { label: "Documented history", value: "More than three millennia, beginning with Mycenaean Linear B" }
  ],
  learnerOverview: "Begin with the language people use now. Learn the alphabet's modern values, then attach every noun to its article and every verb to two useful stems in complete phrases. Historical curiosity is welcome, but label its sources: Ancient, Koine, Medieval, Katharevousa, Standard Modern, Cypriot, or another regional variety. Greek has enough continuity that old forms surface often and enough change that false familiarity is a trap. Build around voices you enjoy—interviews, drama, sport, songs, or family audio—and investigate them with dictionaries and corpora. That route opens contemporary fiction, cinema, comedy, politics, food writing, migration stories, and diasporic life.",
  origins: {
    overview: cited(
      "Greek has the longest documented history of any living Indo-European language. Mycenaean Greek appears in second-millennium BCE Linear B tablets. Later alphabetic dialects include Ionic-Attic, Aeolic, Doric, and others, so “Ancient Greek” already spans several periods and varieties. A common Koine spread after Alexander through a multilingual eastern Mediterranean; beyond the New Testament, it served administration and everyday exchange. Medieval Greek ranged from classicizing prose to vernacular texts. Modern varieties emerged through that continuum, not a clean death and rebirth.",
      "wiki-greek",
      "wiki-history",
      "britannica"
    ),
    timeline: [
      {
        period: "c. 1400–1200 BCE",
        event: cited(
          "Mycenaean Greek was recorded in Linear B, a syllabic administrative script. The tablets mostly inventory goods and people, but they establish Greek's extraordinary written depth; Linear B is not the ancestor of the later Greek alphabet.",
          "wiki-history",
          "unicode"
        )
      },
      {
        period: "8th–4th centuries BCE",
        event: cited(
          "Alphabetic Greek appears in several dialect traditions. Epic, drama, philosophy, history, inscriptions, and private documents were not all written in one uniform “Classical Greek.” Athens made Attic especially influential, while other dialects remained culturally important.",
          "wiki-greek",
          "britannica"
        )
      },
      {
        period: "4th century BCE–6th century CE",
        event: cited(
          "Koine spread as a supraregional language across the Hellenistic and Roman eastern Mediterranean. Pronunciation and grammar continued changing: the vowel system moved toward modern patterns, the optative and infinitive declined, and new analytic constructions grew.",
          "wiki-history",
          "wiki-modern"
        )
      },
      {
        period: "6th–15th centuries",
        event: cited(
          "Medieval Greek covered both spoken change and an unusually wide register gap in writing. Administrators, theologians, poets, chroniclers, and vernacular authors could choose forms closer to contemporary speech or imitate prestigious ancient models.",
          "wiki-history",
          "cgl-portal"
        )
      },
      {
        period: "19th century–1976",
        event: cited(
          "The modern Greek state inherited a “language question.” Demotic represented living vernacular usage; Katharevousa was a learned, purifying variety designed to bridge modern and ancient forms and used heavily in government and education. The conflict was social and political as well as grammatical. Demotic became the official language of the state in 1976.",
          "wiki-history",
          "wiki-modern"
        )
      },
      {
        period: "1982 to the digital present",
        event: cited(
          "Greece officially adopted monotonic orthography in 1982, replacing routine polytonic accents in ordinary modern writing with a single stress mark plus the diaeresis where needed. Digital Greek now ranges from carefully accented publishing to messages with omitted accents and occasional Greeklish in Latin letters.",
          "unicode",
          "wiki-modern"
        )
      }
    ],
    contactHistory: cited(
      "Continuity never meant isolation. Greek exchanged words with Latin and Romance, South Slavic languages, Albanian, Aromanian, Turkish, Italian, French, and English. Contact differed by place: island vocabulary preserves Venetian layers, northern speech shares Balkan features, and Cypriot reflects Turkish and English as well as older French and Venetian rule. International coinages built from Greek material sometimes returned with changed meanings; a recognizable Greek root does not make a technical term an everyday inherited word.",
      "wiki-history",
      "triantafyllides",
      "wiki-greek"
    ),
    standardization: cited(
      "Standard Modern Greek is based chiefly on Demotic but contains a substantial learned inheritance, including forms normalized through Katharevousa. It is therefore misleading to imagine that 1976 simply deleted one language and installed another. Legal, ecclesiastical, academic, and ceremonial writing still contains archaisms; perfectly ordinary expressions such as εντάξει entáxei “okay” preserve an old dative form. The standard is shared across Greece and Cyprus, but Cypriot public speech may carry recognizable phonetic and lexical features. Standard competence and regional identity coexist rather than canceling each other.",
      "wiki-modern",
      "wiki-grammar",
      "cgl-portal"
    )
  },
  variants: {
    overview: cited(
      "Variation follows geography, age, migration, class, medium, and situation. Schooling and national media spread an Athens-based standard without flattening every local system. Speakers often grade between standard and local features rather than switch between sealed codes. Label recordings by place and genre: family conversation, parliament, comedy, song, and an older film make different stylistic choices.",
      "wiki-modern",
      "wiki-greek",
      "cgl-portal"
    ),
    items: [
      {
        name: "Standard Modern Greek",
        note: cited(
          "The norm of education, national broadcasting, public administration, and most publishing. It is based mainly on southern Demotic varieties while incorporating learned vocabulary and structures. Real standard speech still varies by speaker and does not sound like a grammar recording.",
          "wiki-modern",
          "wiki-grammar"
        )
      },
      {
        name: "Cypriot Greek",
        note: cited(
          "A major living variety with distinctive consonants, vocabulary, morphology, and syntax. Many Greek Cypriots command both Cypriot Greek and the standard, using features along a continuum according to audience. Its distance is greater than a small accent difference, yet blanket claims of incomprehensibility ignore accommodation and exposure.",
          "wiki-greek",
          "glottolog"
        )
      },
      {
        name: "Pontic and Cappadocian Greek",
        note: cited(
          "Varieties shaped in Anatolia and transformed by displacement, diaspora, and language contact. Pontic retains a substantial speaker and cultural network; Cappadocian communities have been central to modern documentation and reclamation. Neither should be treated as a museum fossil.",
          "glottolog",
          "wiki-greek"
        )
      },
      {
        name: "Learned, ecclesiastical, and literary registers",
        note: cited(
          "Modern texts can deliberately reach backward through Katharevousa, Koine, or classical forms. Orthodox liturgy is not ordinary Standard Modern Greek, though speakers may recognize much of it through repetition and education. Authors also use dialect, slang, and archaism as artistic choices.",
          "wiki-history",
          "cgl-portal"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Modern Greek has five vowel phonemes /a e i o u/, despite several spellings for /i/. Its consonant system includes sounds English speakers often know from other contexts but not as stable contrasts: θ as in English thin, δ /ð/ as in this, χ /x~ç/ as in Scottish loch or German ich, and γ /ɣ~ʝ/, a voiced partner of χ. The alphabet is consistent once learned with modern values. Do not pronounce β as /b/, η as a separate long vowel, or φ as /pʰ/ merely because a Classical Greek course did so. Reconstructed ancient pronunciations answer historical questions; they are not prestige versions of a modern accent.",
      "wiki-modern",
      "wiki-grammar",
      "britannica"
    ),
    script: "Greek alphabet in modern monotonic spelling; transliterations approximate Standard Modern Greek",
    soundSystem: cited(
      "The letter γ is [ʝ] before front vowels /e i/ and [ɣ] elsewhere; χ similarly alternates between [ç] and [x]. Written μπ, ντ, and γκ represent /b/, /d/, and /g/ in many words, though their realization can be prenasalized or vary by position and speaker. Five spellings—ι, η, υ, ει, οι—commonly represent /i/, the result of historical vowel mergers called iotacism. αυ and ευ normally sound /av, ev/ before voiced sounds and vowels, but /af, ef/ before voiceless consonants: compare αύριο ávrio “tomorrow” with αυτό aftó “this.” These are regular reading patterns, not arbitrary exceptions.",
      "wiki-modern",
      "wiki-grammar",
      "triantafyllides"
    ),
    prosody: cited(
      "Every word of more than one syllable has a stressed syllable, normally written with a tonos: νόμος nómos “law” versus νομός nomós “prefecture.” Stress is restricted to one of the last three syllables. When a possessive or object clitic follows a word, an extra written accent can appear to preserve the rhythm: το αυτοκίνητό μου to aftokínitó mou “my car.” Function words often lean phonologically on neighbors, so fluent speech is organized in groups rather than isolated dictionary words. Shadow whole questions and answers; Greek's lively pitch movement and vowel-to-vowel linking cannot be learned from letter names.",
      "wiki-grammar",
      "unicode"
    ),
    learnerTraps: [
      "Using ancient letter values in modern words, especially β, γ, δ, η, φ, and χ",
      "Reading every written i-spelling differently instead of accepting the modern /i/ merger",
      "Replacing both θ and δ with English t, d, s, or z",
      "Missing the voiced/voiceless alternation in αυ and ευ",
      "Dropping written stress or overlooking the extra accent created before a following clitic",
      "Assuming μπ, ντ, and γκ have one identical realization in every position and region"
    ],
    sampleWords: [
      { original: "βιβλίο", transliteration: "vivlío", translation: "book", note: "Both β letters are /v/; the accent marks stress on the final /i/ syllable." },
      { original: "γεια", transliteration: "ya", translation: "hello; health", note: "In this common greeting γ is a palatal sound like a strongly voiced English y, not hard g." },
      { original: "θέλω", transliteration: "thélo", translation: "I want", note: "Keep θ dental as in thin and stress the first syllable." },
      { original: "δρόμος", transliteration: "drómos", translation: "road; street", note: "Initial δ is the voiced dental fricative heard in English this." },
      { original: "ευχαριστώ", transliteration: "efcharistó", translation: "thank you", note: "ευ becomes /ef/ before voiceless χ; χ here is the back fricative /x/." },
      { original: "άγγελος", transliteration: "ángelos", translation: "angel; messenger", note: "The sequence γγ represents a velar nasal plus /g/ for many standard speakers, not two separate fricatives." },
      { original: "παιδιά", transliteration: "pedyá", translation: "children; guys", note: "The spelling αι gives /e/, while the final sequence is palatalized in ordinary speech." }
    ]
  },
  writing: {
    overview: cited(
      "Modern Greek uses 24 alphabetic letters from alpha Α α to omega Ω ω. Sigma has a final lowercase form ς at the end of a word and σ elsewhere. The script runs left to right, separates words with spaces, and uses a semicolon-shaped question mark: Τι κάνεις; “How are you?” Ordinary modern writing is monotonic: a tonos marks lexical stress on polysyllabic words, while a diaeresis distinguishes vowels that would otherwise be read together, as in Μαΐου Maïou “of May.” Capitalized words normally omit the stress mark, though the diaeresis remains when needed. Ancient and many ecclesiastical editions use polytonic spelling with breathing marks and multiple accents.",
      "unicode",
      "wiki-modern"
    ),
    primaryScript: "Greek alphabet, modern monotonic orthography",
    romanization: cited(
      "Romanization is useful for maps, names, and a first pronunciation note, but conventions differ. The same Greek surname may appear in an official ELOT-style transliteration, an older diaspora spelling, or a form chosen to guide English pronunciation. Greeklish—Greek written with Latin characters—developed in digital settings and remains visible informally, but it has no single spelling norm. Learn to type tonos from the start. Transliteration hides the useful fact that οι and η belong to different word families even though both sound /i/.",
      "unicode",
      "triantafyllides"
    ),
    spellingNorms: cited(
      "Modern spelling is historically deep rather than fully phonemic. The multiple spellings of /i/ preserve etymology and morphological relationships; ω and ο both represent /o/, and αι represents /e/. Stress is generally reliable but can move during inflection: άνθρωπος ánthropos “person,” ανθρώπου anthrópou “of a person.” Final -ν in small words such as τον and δεν follows conventions that interact with the next sound and style. Spelling reform simplified accents, not the inherited vowel spellings. A learner should therefore store the written form, audio, article, and one inflected phrase together.",
      "triantafyllides",
      "wiki-grammar",
      "unicode"
    ),
    styleNotes: [
      cited("Use final sigma only at a word's end: κόσμος, not κόσμοσ. Unicode treats ς as the normal textual final form, not a decorative font choice.", "unicode"),
      cited("The Greek question mark looks like an English semicolon. In mixed-language notes, label it rather than “correcting” it to a Latin question mark.", "unicode"),
      cited("Learn monotonic spelling for modern production. Add polytonic reading only when ancient, Byzantine, liturgical, or editorial goals make it necessary.", "unicode", "wiki-modern"),
      cited("Search the dictionary by lemma when an inflected form fails. A surface ending may encode case, number, gender, tense, voice, or person.", "triantafyllides", "cgl-corpora")
    ]
  },
  grammar: {
    overview: cited(
      "Modern Greek is inflected: endings and stem changes carry information that English often assigns to word order or helper words. Nouns belong to three genders and use four productive cases; verbs distinguish person, number, tense, aspect, mood, and voice. Yet the language is also highly analytic compared with Ancient Greek. It has no productive infinitive and normally builds complements with να na plus a finite verb. Grammar becomes practical when learned as contrasts—γράφω “I write/am writing” beside γράψω in να γράψω “that I write once”—rather than as one enormous historical table.",
      "wiki-grammar",
      "cgl-portal"
    ),
    typologicalProfile: cited(
      "Greek is a fusional Indo-European language: one ending may simultaneously express several categories. It is broadly nominative–accusative, with subjects usually nominative and direct objects accusative. Word order is flexible because case marking and verbal agreement identify roles, but flexibility is not randomness: position and intonation signal topic, focus, contrast, and style. Greek is also a null-subject language, meaning a subject pronoun can be omitted when the verb ending and context identify it. Είμαι εδώ eímai edó already means “I am here”; adding εγώ egó emphasizes or contrasts “I.”",
      "wiki-grammar",
      "wiki-modern"
    ),
    morphology: cited(
      "Articles and adjectives agree with nouns in gender, number, and case: ο καλός φίλος o kalós fílos “the good friend,” της καλής φίλης tis kalís fìlis “of the good female friend.” The productive cases are nominative, genitive, accusative, and vocative; the ancient dative survives only in fixed or learned expressions. Verbs are best recorded with imperfective and perfective stems because the perfective is often unpredictable: γράφω gráfo “write” has γράψ- gráps-, while βλέπω vlépo “see” has δ- d- in δω do “I see once.” Active and mediopassive morphology does not map mechanically onto English active/passive meanings, so learn voice with each verb's actual constructions.",
      "wiki-grammar",
      "triantafyllides"
    ),
    syntax: cited(
      "Finite complement clauses dominate where English uses infinitives: θέλω να φύγω thélo na fígo, literally “I want that I leave,” means “I want to leave.” Weak object pronouns, called clitics, usually stand before a finite verb—τον βλέπω ton vlépo “I see him”—but follow a positive imperative: δες τον des ton “see him.” Negation splits by clause type: δεν den accompanies indicative statements, while μην min occurs with subjunctive-like and prohibitive constructions. Questions need no English-style do-support: Μιλάς ελληνικά; Milás elliniká? means “Do you speak Greek?” through intonation and punctuation.",
      "wiki-grammar",
      "cgl-corpora"
    ),
    advancedPainPoints: [
      "Choosing imperfective or perfective stems according to how an event is viewed",
      "Learning noun gender, plural, genitive, and stress movement together",
      "Placing direct and indirect object clitics naturally, including combinations",
      "Recognizing learned or Katharevousa-derived forms without overproducing them",
      "Using flexible word order for focus rather than copying English sequence",
      "Following rapid speech when function words fuse phonologically with neighbors"
    ],
    topics: [
      {
        title: "Gender, article, and case",
        body: cited(
          "A noun's article is part of its learnable shape. Ο φίλος o fílos is “the male friend,” η φίλη i fíli “the female friend,” and το σπίτι to spíti “the house.” Case changes the article and often the noun: Βλέπω τον φίλο vlépo ton fílo, “I see the friend”; Το σπίτι του φίλου to spíti tou fílou, “the friend's house.” Natural gender helps with people, but grammatical gender of things must be memorized.",
          "wiki-grammar",
          "triantafyllides"
        ),
        example: "Μιλάω με την καινούργια μου φίλη.",
        exampleTranslation: "I am speaking with my new friend (female)."
      },
      {
        title: "Aspect: process versus bounded event",
        body: cited(
          "Greek usually asks whether an event is presented as ongoing, repeated, or internally unfolding (imperfective) versus bounded or viewed as a whole (perfective). Θα γράφω tha gráfo means “I will be writing / write regularly,” while θα γράψω tha grápso means “I will write (on an occasion).” This is not simply present versus past, and perfective does not automatically mean completed in real-world time; particles and context place the event.",
          "wiki-grammar",
          "cgl-corpora"
        ),
        example: "Κάθε μέρα διαβάζω, αλλά απόψε θα διαβάσω μόνο ένα κεφάλαιο.",
        exampleTranslation: "Every day I study/read, but tonight I will read only one chapter."
      },
      {
        title: "The να construction",
        body: cited(
          "Modern Greek replaced most infinitive functions with να plus a verb marked for person. Θέλω να πάω thélo na páo is “I want to go,” but Θέλω να πας thélo na pas is “I want you to go.” This makes the hidden subject explicit in the verb ending and allows tense/aspect contrasts inside the complement. Learn θέλω να, μπορώ να, πρέπει να, and αρχίζω να as sentence frames, not isolated verbs.",
          "wiki-grammar",
          "wiki-history"
        ),
        example: "Πρέπει να φύγουμε πριν αρχίσει η βροχή.",
        exampleTranslation: "We have to leave before the rain starts."
      },
      {
        title: "Object clitics",
        body: cited(
          "Short object forms carry case and person: μου mou “to me/my,” σου sou “to you/your,” τον ton “him,” την tin “her,” and το to “it.” Before ordinary finite verbs, Μου το έδωσε mou to édose means “She/he gave it to me.” A positive command reverses the position: Δώσ' μου το dós mou to, “Give it to me.” Possessive clitics follow nouns, where they may trigger an extra accent on a long host.",
          "wiki-grammar",
          "unicode"
        ),
        example: "Το βιβλίο μου; Μου το έδωσε η Μαρία.",
        exampleTranslation: "My book? Maria gave it to me."
      },
      {
        title: "Past tense and the augment",
        body: cited(
          "Many past forms carry stress early enough that an augment ε- appears: γράφω gráfo “I write” → έγραψα égrapsa “I wrote.” In longer verbs the stress can already fit within the last three syllables, so no visible augment is needed. The imperfect presents an event as ongoing or habitual—έγραφα égrafa “I was writing / used to write”—while the aorist έγραψα views it as bounded. “Aorist” here names an aspectual past form, not an indefinite time expression.",
          "wiki-grammar",
          "triantafyllides"
        ),
        example: "Όταν τηλεφώνησες, έγραφα ένα μήνυμα.",
        exampleTranslation: "When you called, I was writing a message."
      },
      {
        title: "Negation and prohibitions",
        body: cited(
          "Δεν den negates ordinary indicative clauses: Δεν ξέρω den xéro, “I don't know.” Μην min is used with να-type environments and negative commands: Μην φύγεις min fígeis, “Don't leave.” The verb after a prohibition often uses the perfective form when warning against a single bounded action, while imperfective forms can prohibit an ongoing or repeated behavior. Memorizing only a translation of “not” conceals this division.",
          "wiki-grammar",
          "cgl-corpora"
        ),
        example: "Μην το πεις σε κανέναν· δεν είναι ακόμη σίγουρο.",
        exampleTranslation: "Don't tell it to anyone; it isn't certain yet."
      },
      {
        title: "Flexible word order and focus",
        body: cited(
          "Ο Νίκος αγόρασε το βιβλίο O Níkos agórase to vivlío neutrally reports “Nikos bought the book.” Moving the object forward—Το βιβλίο αγόρασε ο Νίκος To vivlío agórase o Níkos—can contrast the book with another item, depending on intonation. Clitic doubling may mark topical objects in colloquial speech. Since English relies more heavily on fixed order, learners should copy complete audio patterns before treating every permutation as interchangeable.",
          "wiki-grammar",
          "cgl-corpora"
        ),
        example: "Αυτό το τραγούδι το ξέρουν όλοι.",
        exampleTranslation: "This song, everyone knows it."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Greek centers demographically on Greece and Cyprus, but its map is also historical and diasporic. Twentieth-century forced migration brought Greek-speaking Orthodox communities from Anatolia into Greece; later labor migration established large communities in Germany and Australia, alongside communities across North America, Britain, southern Africa, and elsewhere. Heritage speakers may understand family Greek while preferring another language for literacy; that mixed repertoire is not failed Athenian monolingualism.",
      "wiki-greek",
      "glottolog",
      "britannica"
    ),
    regions: [
      { place: "Greece", note: cited("Greek is the state language and the language of public education and national media. Regional speech remains audible from Crete and the islands to Epirus, Macedonia, and Thrace, alongside other languages used by citizens and residents.", "wiki-greek", "wiki-modern") },
      { place: "Cyprus", note: cited("Greek is official alongside Turkish in the Republic of Cyprus. Greek Cypriot daily life commonly involves Cypriot Greek and Standard Modern Greek in overlapping functions; the island also has Armenian, Cypriot Maronite Arabic, English, and migrant-language communities.", "wiki-greek", "glottolog") },
      { place: "Historic communities around the Black Sea, southern Italy, and the eastern Mediterranean", note: cited("Pontic, Mariupolitan, Griko, and other communities complicate a nation-state-only map. Some varieties are endangered or disrupted by displacement, and present-day community descriptions should be dated rather than treated as timeless folklore.", "glottolog", "wiki-greek") },
      { place: "Global diaspora", note: cited("Australia, Germany, the United States, Canada, and the United Kingdom contain prominent Greek communities, with institutions, media, churches, schools, and family networks supporting different degrees of maintenance across generations.", "britannica", "wiki-greek") }
    ]
  },
  difficulty: {
    label: "Moderate",
    overview: cited(
      "For an English-speaking learner, the Greek alphabet is a short project; inflection, aspect, clitics, listening speed, and register are the long project. Modern pronunciation is more systematic than English spelling, and stress is visible, but historical spelling means dictation remains demanding. Indo-European family resemblance offers familiar ideas such as agreement and tense without guaranteeing familiar forms. Difficulty also depends on access: a heritage learner surrounded by family speech has a different task from a classical scholar who reads roots easily but has never followed a contemporary voice note.",
      "wiki-grammar",
      "uoa-courses",
      "triantafyllides"
    ),
    easierAspects: [
      "The 24-letter modern alphabet can be learned quickly, and written stress guides pronunciation",
      "Five stable vowel sounds make decoding easier than English once historical spellings are known",
      "Person endings often let speakers omit subject pronouns without ambiguity",
      "Abundant contemporary media, teachers, courses, dictionaries, and diaspora communities support practice",
      "Many international learned roots feel recognizable, provided their modern meaning is checked"
    ],
    hardAspects: [
      "Selecting aspect stems and tense constructions during spontaneous speech",
      "Remembering noun gender, irregular plurals, genitives, and mobile stress",
      "Hearing weak pronouns and particles inside rapid phonological groups",
      "Spelling the several historical representations of /i/, /e/, and /o/",
      "Separating modern standard usage from ancient, liturgical, Katharevousa, and regional forms"
    ],
    plateauRisks: [
      "Remaining in transliteration after the alphabet has ceased to be a real obstacle",
      "Learning only one present-tense verb form and postponing the perfective stem",
      "Understanding textbook dialogues but avoiding unscripted Greek with clitics and reduced function words",
      "Treating every old-looking form as more correct and producing an unintentionally ceremonial register",
      "Relying on international Greek-root vocabulary while missing ordinary high-frequency words"
    ],
    workload: cited(
      "Combine structured lessons, daily reading aloud, short transcription, and conversation focused on a recurring problem. Record nouns with article and plural and verbs in paired imperfective/perfective frames. At intermediate level, follow one news topic, summarize an episode, compare a Cypriot interview with standard subtitles, or search corpus examples of a stubborn preposition. Official certification levels can supply external targets without defining the whole learning life.",
      "cgl-certification",
      "uoa-courses",
      "cgl-corpora"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Keep connected notes for forms, voices, and registers. Store article–noun pairs, genitives, plurals, and both verb stems; transcribe appealing speakers with region and setting; place neutral standard forms beside colloquial, learned, dialectal, or dated alternatives. At intermediate level, investigate unknown words through Greek definitions and examples. If Ancient or Koine is another goal, maintain separate pronunciation and grammar tracks, then compare deliberately.",
      "triantafyllides",
      "cgl-corpora",
      "wiki-history"
    ),
    mediaPractice: cited(
      "Begin with a short scripted scene, transcribe thirty seconds, and shadow its phrasing. Then hear an interview on the same subject, where interruptions, clitics, and regional color emerge. Songs aid memory but stretch vowels and syntax, so pair them with speech. Broadcasting, podcasts, comedy, sport, cooking, and drama offer distinct registers. Save the date and speaker: a Katharevousa newsreel and a present-day vlog are not equivalent formal samples.",
      "hnc",
      "athena-corpus",
      "wiki-modern"
    ),
    dictionariesAndCorpora: cited(
      "The free Triantafyllides dictionary should become a daily tool: its definitions, etymologies, expressions, and inflection links expose far more than a bilingual gloss. The Centre for the Greek Language's parallel corpus search can expand a lemma into inflected forms and show sentence context. The Hellenic National Corpus and Educational Greek Corpus add large contemporary collections across genres. Use this sequence: dictionary for candidate meaning, corpus for collocation and register, then a native consultant for pragmatic force. A phrase that exists is not necessarily the phrase a friend would send in a message.",
      "triantafyllides",
      "cgl-corpora",
      "hnc",
      "athena-corpus"
    ),
    resources
  },
  wordsAndTexts: {
    overview: cited(
      "Greek vocabulary carries its history near the surface, but contemporary meaning belongs to contemporary speakers. A word may be inherited through continuous speech, revived from an older text, coined from Greek pieces, borrowed from Turkish or Italian, or imported from English and reshaped. The everyday pair σπίτι spíti “house/home” and οικία ikía “residence” shows how register can divide near-synonyms: the second is normal in addresses, signs, compounds, and formal contexts but marked in casual talk. The pleasures of Greek lie in such choices, not in proving that an English technical word has a Greek ancestor.",
      "triantafyllides",
      "hnc",
      "wiki-history"
    ),
    notableWords: [
      { term: "φιλότιμο", transliteration: "filótimo", meaning: "sense of honor, responsive generosity, or duty toward others", note: cited("Often advertised as untranslatable, but its force depends on context and can include pride, social obligation, decency, or eagerness to help. Ask what action displays it instead of treating it as a national personality gene.", "triantafyllides", "cgl-corpora") },
      { term: "παρέα", transliteration: "paréa", meaning: "company; a social group spending time together", note: cited("It can name both the people and the condition of companionship: πάμε με την παρέα “we're going with the group.” The word is useful because Greek social life is often narrated through recurring groups rather than isolated appointments.", "triantafyllides") },
      { term: "μεράκι", transliteration: "meráki", meaning: "care, devotion, or creative enthusiasm put into an activity", note: cited("A Turkish-origin word fully at home in Greek. It often praises work, cooking, craft, or performance done with personal feeling; translating it as mere “passion” can miss the visible care in the result.", "triantafyllides") },
      { term: "κέφι", transliteration: "kéfi", meaning: "high spirits; mood for enjoyment", note: cited("Another contact-layer word, associated with sociability, music, and willingness to join in. Έχω κέφι means “I'm in the mood / feeling lively,” while δεν έχω κέφι withdraws from the occasion without a clinical claim.", "triantafyllides") },
      { term: "θαλασσινός", transliteration: "thalassinós", meaning: "of the sea; seafaring person", note: cited("Built transparently from θάλασσα “sea,” it can describe colors, food, people, and imaginative belonging. Derivational families like this make vocabulary growth more satisfying than isolated international roots.", "triantafyllides") },
      { term: "εντάξει", transliteration: "entáxei", meaning: "okay; all right; agreed", note: cited("An everyday fossil of an older dative phrase meaning roughly “in order.” It can agree, reassure, close a topic, or signal reluctant compliance depending on intonation.", "wiki-modern", "triantafyllides") },
      { term: "ρε", transliteration: "re", meaning: "hey; man; mate (highly context-sensitive address particle)", note: cited("Frequent in informal speech among intimates, affectionate or confrontational according to voice and relationship. It is not a general-purpose friendly word for learners to scatter among strangers.", "cgl-corpora", "triantafyllides") },
      { term: "ξενιτιά", transliteration: "xenitiá", meaning: "life or place away from one's homeland", note: cited("A resonant word in folk song, migration narratives, and diaspora experience. Its emotional field can include exile, labor abroad, homesickness, and the foreign land itself.", "triantafyllides", "hnc") }
    ],
    loanwordLayers: cited(
      "Everyday Greek combines inherited words, learned reintroductions, and borrowings without announcing the boundary. Ancient and Koine sources supplied later formal vocabulary; Italian and especially Venetian contact marked navigation, trade, and island life; Turkish contributed foods, objects, music, and conversational words; French influenced nineteenth- and twentieth-century urban culture; English now dominates many areas of technology, business, and youth culture. Speakers may replace, respell, joke about, or code-switch around new English loans. Meanwhile international formations such as telephone were built from Greek material abroad and entered Greek as τηλέφωνο tiléfono. Etymology is a travel history, not a purity score.",
      "triantafyllides",
      "wiki-history",
      "hnc"
    ),
    idioms: [
      { original: "σιγά τα αυγά", transliteration: "sigá ta avgá", translation: "Big deal; it's nothing so impressive.", note: "Literally “easy with the eggs,” an ironic way to deflate exaggerated importance. Tone can be playful or dismissive." },
      { original: "μου έφυγε η ψυχή", transliteration: "mou éfyge i psychí", translation: "I was scared to death / I went through agony.", note: "Literally “my soul left me,” used after a fright or an ordeal. The genitive clitic μου identifies the experiencer." },
      { original: "έφαγα τα μούτρα μου", transliteration: "éfaga ta moútra mou", translation: "I failed badly / fell flat on my face.", note: "Literally “I ate my face,” a vivid colloquial admission that an attempt ended painfully or embarrassingly." },
      { original: "κάνω την πάπια", transliteration: "káno tin pápia", translation: "I pretend not to know; play dumb.", note: "Literally “I do the duck,” used when someone avoids responsibility by acting unaware, not merely silent." },
      { original: "βρέχει καρεκλοπόδαρα", transliteration: "vréchi kareklopódara", translation: "It's raining cats and dogs.", note: "Literally “it is raining chair legs,” a humorous image for very heavy rain." }
    ],
    textGenres: [
      "Contemporary novels, short fiction, essays, graphic narratives, and poetry",
      "Rebetiko, laïko, entechno, folk, hip-hop, rock, and island song traditions",
      "News, political commentary, documentary, sports, and long-form interviews",
      "Cinema, television drama, comedy, web series, and creator video",
      "Diaspora memoir, migration writing, family correspondence, and community media",
      "Koine, Byzantine, liturgical, Katharevousa, and classical texts studied as distinct historical registers"
    ]
  },
  relationships: {
    overview: cited(
      "Greek forms its own Hellenic branch within Indo-European. Its closest relationships are therefore internal and historical, while much of what sounds regionally familiar comes from contact in the Balkans and eastern Mediterranean. Tsakonian preserves an unusually divergent Doric-linked line; most other modern varieties descend primarily through Koine. Albanian, South Slavic languages, Aromanian, Turkish, and Italian are not Greek dialects or close Hellenic siblings, even when centuries of shared life produce parallel structures and vocabulary. Keeping inheritance and borrowing separate makes both stories more interesting.",
      "glottolog",
      "wiki-greek",
      "wiki-history"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Greek belongs to living, internally varied communities, not only to European antiquity. Greece and Cyprus contain multilingual citizens and residents; Greek identity includes regional, diasporic, religious, secular, refugee, and mixed-family histories. Classical, Orthodox, Ottoman, migration, dictatorship, and contemporary European contexts all influence texts. No proverb or “untranslatable word” summarizes a national character: ask who says it, to whom, when, and in what tone.",
  resources,
  relatedLanguages,
  phrases: [
    { original: "Γεια σου! / Γεια σας!", transliteration: "Ya sou! / Ya sas!", translation: "Hello!", literalMeaning: "Health to you!", usageNote: "Use σου to one familiar person and σας to several people or one person addressed politely." },
    { original: "Καλημέρα.", transliteration: "Kaliméra.", translation: "Good morning.", usageNote: "Used through the morning and often into early afternoon; later use καλησπέρα." },
    { original: "Τι κάνεις;", transliteration: "Ti kánis?", translation: "How are you?", literalMeaning: "What are you doing?", usageNote: "Informal singular. The polite/plural form is Τι κάνετε; Ti kánete?" },
    { original: "Ευχαριστώ πολύ.", transliteration: "Efcharistó polí.", translation: "Thank you very much.", usageNote: "Stress falls on the final syllable of ευχαριστώ and the final syllable of πολύ." },
    { original: "Παρακαλώ.", transliteration: "Parakaló.", translation: "Please; you're welcome; yes, how can I help?", usageNote: "A multipurpose politeness word whose translation changes with position and situation." },
    { original: "Συγγνώμη.", transliteration: "Signómi.", translation: "Excuse me; sorry.", usageNote: "Useful for attracting attention, passing someone, or apologizing. A fuller apology is Με συγχωρείτε." },
    { original: "Δεν καταλαβαίνω.", transliteration: "Den katalavéno.", translation: "I don't understand.", usageNote: "Neutral and widely useful; δεν marks ordinary indicative negation." },
    { original: "Μπορείτε να το πείτε ξανά;", transliteration: "Boríte na to píte xaná?", translation: "Could you say it again?", literalMeaning: "Can you say it again?", usageNote: "Polite or plural. To one familiar person: Μπορείς να το πεις ξανά;" },
    { original: "Πιο αργά, παρακαλώ.", transliteration: "Pio argá, parakaló.", translation: "More slowly, please.", usageNote: "A compact request to slow down; follow it with another attempt rather than switching immediately to English." },
    { original: "Μαθαίνω ελληνικά.", transliteration: "Mathéno elliniká.", translation: "I'm learning Greek.", usageNote: "The lower-case adjective ελληνικά functions here as the language name." },
    { original: "Τι σημαίνει αυτή η λέξη;", transliteration: "Ti siméni aftí i léxi?", translation: "What does this word mean?", usageNote: "A useful classroom and dictionary question; note the semicolon-shaped Greek question mark." },
    { original: "Θα ήθελα έναν καφέ, παρακαλώ.", transliteration: "Tha íthela énan kafé, parakaló.", translation: "I would like a coffee, please.", usageNote: "Έναν agrees with masculine καφέ in the accusative. For a feminine item the article changes." },
    { original: "Πού είναι η στάση;", transliteration: "Pou íne i stási?", translation: "Where is the stop?", usageNote: "Use for a bus or transit stop when the context is clear." },
    { original: "Χάρηκα πολύ.", transliteration: "Chárika polí.", translation: "Pleased to meet you.", literalMeaning: "I was very glad.", usageNote: "A natural response after an introduction." },
    { original: "Τα λέμε!", transliteration: "Ta léme!", translation: "See you!", literalMeaning: "We'll say/talk about things.", usageNote: "Informal, warm, and common when expecting to speak again." }
  ],
  sources: [
    { id: "cgl-portal", title: "Portal for the Greek Language", url: "https://www.greek-language.gr/greekLang/index.html", publisher: "Centre for the Greek Language", accessedAt: "2026-07-10" },
    { id: "triantafyllides", title: "Dictionary of Standard Modern Greek", url: "https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/", publisher: "Centre for the Greek Language and Institute for Modern Greek Studies", publishedAt: "1998", accessedAt: "2026-07-10" },
    { id: "cgl-corpora", title: "Parallel Corpus Search for Modern Greek", url: "https://www.greek-language.gr/greekLang/modern_greek/tools/corpora/corpora/search.html", publisher: "Centre for the Greek Language", accessedAt: "2026-07-10" },
    { id: "greek-to-me", title: "Learn Modern Greek", url: "https://greektome.greeklanguage.gr/learn-modern-greek/", publisher: "Centre for the Greek Language", accessedAt: "2026-07-10" },
    { id: "cgl-certification", title: "Certificate of Attainment in Greek", url: "https://www.greek-language.gr/certification/", publisher: "Centre for the Greek Language", accessedAt: "2026-07-10" },
    { id: "hnc", title: "Hellenic National Corpus", url: "https://hnc.ilsp.gr/", publisher: "Institute for Language and Speech Processing, Athena Research Center", accessedAt: "2026-07-10" },
    { id: "athena-corpus", title: "Educational Greek Corpus", url: "https://www.athenarc.gr/en/node/2458", publisher: "Athena Research Center", accessedAt: "2026-07-10" },
    { id: "uoa-courses", title: "Modern Greek Language Teaching Center", url: "https://en.greekcourses.uoa.gr/", publisher: "National and Kapodistrian University of Athens", accessedAt: "2026-07-10" },
    { id: "unicode", title: "The Unicode Standard, Chapter 7: Greek", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "glottolog", title: "Glottolog 5.3: Modern Greek", url: "https://glottolog.org/resource/languoid/id/mode1248", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "britannica", title: "Greek Language", url: "https://www.britannica.com/topic/Greek-language", publisher: "Encyclopaedia Britannica", accessedAt: "2026-07-10" },
    { id: "wiki-greek", title: "Greek language", url: "https://en.wikipedia.org/wiki/Greek_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-modern", title: "Modern Greek", url: "https://en.wikipedia.org/wiki/Modern_Greek", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-grammar", title: "Modern Greek grammar", url: "https://en.wikipedia.org/wiki/Modern_Greek_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of Greek", url: "https://en.wikipedia.org/wiki/History_of_Greek", publisher: "Wikipedia", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Greek Language Guide: Modern Speech, Grammar and History",
    description: "A reader-focused guide to Modern Greek pronunciation, alphabet, grammar, regional varieties, ancient and modern layers, practical phrases, culture, and serious learning resources."
  }
} satisfies LanguageGuide;
