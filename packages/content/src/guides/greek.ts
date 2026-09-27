import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Ancient Greek",
    relationship: "Earlier historical stages",
    explanation: cited(
      "Modern Greek grew from earlier Greek, but a modern conversation differs greatly from Plato's language. Pronunciation, grammar, and vocabulary changed over centuries of everyday use. Ancient Greek can help you recognize older words, yet reading Homer and speaking with a friend in Athens require different skills.",
      "wiki-history",
      "wiki-modern"
    )
  },
  {
    name: "Tsakonian",
    relationship: "Divergent Hellenic relative",
    explanation: cited(
      "Tsakonian follows a largely Doric line rather than the Koine line behind most modern Greek varieties. Speakers and researchers work to sustain it as its community shrinks. Its grammar and sounds differ enough from the standard that calling it an accent hides its distinct history.",
      "glottolog",
      "wiki-greek"
    )
  },
  {
    name: "Albanian",
    relationship: "Balkan contact language",
    explanation: cited(
      "Albanian belongs to another branch of Indo-European. Centuries of life in neighboring Balkan communities brought shared words and some similar ways of building sentences. Those similarities can come from contact without making Albanian a Greek dialect.",
      "wiki-greek",
      "glottolog"
    )
  },
  {
    name: "Turkish",
    slug: "turkish",
    relationship: "Major contact language",
    explanation: cited(
      "Turkish belongs to a different language family. Centuries of Ottoman-era contact left Greek words for food, music, household life, and everyday conversation, while Turkish borrowed from Greek too. A word's history alone cannot tell you whether a speaker hears it as ordinary or politically charged.",
      "wiki-history",
      "triantafyllides"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

const resources = [
  {
    type: "course",
    title: "University of Cyprus School of Modern Greek",
    url: "https://www.ucy.ac.cy/mogr/?lang=en",
    level: "beginner",
    description: cited("The university offers online and in-person Modern Greek classes in Cyprus. Its course notices give dates, levels, and fees; ask how the class handles local Cypriot speech alongside the standard.", "ucy-school")
  },
  {
    type: "dictionary",
    title: "Dictionary of Standard Modern Greek",
    url: "https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/",
    level: "all",
    description: cited("Look up a Greek word's meaning, spelling, forms, expressions, and history here. The definitions are in Greek, so beginners may want a bilingual dictionary beside it.", "triantafyllides")
  },
  {
    type: "corpus",
    title: "Centre for the Greek Language Corpora",
    url: "https://www.greek-language.gr/greekLang/modern_greek/tools/corpora/corpora/search.html",
    level: "advanced",
    description: cited("Search real sentences when you need to check which ending, preposition, or neighboring word sounds natural in written Greek.", "cgl-corpora")
  },
  {
    type: "corpus",
    title: "Hellenic National Corpus",
    url: "https://hnc.ilsp.gr/",
    level: "advanced",
    description: cited("This collection lets advanced readers compare words and constructions across modern written genres. Written examples still need an audio check before you copy them into speech.", "hnc")
  },
  {
    type: "course",
    title: "Modern Greek Language Teaching Center, University of Athens",
    url: "https://en.greekcourses.uoa.gr/",
    level: "all",
    description: cited("The University of Athens teaches Modern Greek in scheduled courses. Its level descriptions help you choose a class and see what the next stage expects.", "uoa-courses")
  },
  {
    type: "other",
    title: "Certificate of Attainment in Greek",
    url: "https://www.greek-language.gr/certification/",
    level: "all",
    description: cited("Use the official level descriptions and sample exam tasks to check your reading, listening, writing, and speaking goals.", "cgl-certification")
  },
] satisfies LanguageGuide["resources"];

export const greekGuide = {
  slug: "greek",
  name: "Greek",
  autonym: "Ελληνικά",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "In Modern Greek, a small accent mark can change a word, while the same speaker may move between everyday conversation and older learned expressions. Explore how people speak and write Greek in Greece, Cyprus, and diasporic communities today.",
  family: "Indo-European, Hellenic",
  macroRegion: "Southeastern Europe and the eastern Mediterranean",
  primaryScript: "Greek alphabet",
  difficultyLabel: "Moderate",
  learnerHook: "You can learn the alphabet quickly, then start hearing how stress, verb endings, and short pronouns shape everyday speech. Greek also lets you explore local voices and older texts without confusing them with today's standard.",
  hero: {
    imageAlt: "Contemporary Greek handwriting and print showing the modern monotonic alphabet.",
    callToActionLabel: "Explore Greek in use"
  },
  classification: "The principal modern language of the Hellenic branch of Indo-European",
  speakerCommunity: "People speak Greek across Greece and Cyprus and in long-established communities in Australia, Germany, North America, Britain, and elsewhere. Greek has official status in Greece and the Republic of Cyprus, where Turkish also has official status.\n\nOne person may write Standard Modern Greek at school, use local forms with family, and recognize older language in church or song. These choices belong to a living language; regional speech does not need to imitate an ancient text.",
  facts: [
    { label: "Family", value: "Indo-European · Hellenic" },
    { label: "Modern users", value: "Millions of first- and additional-language speakers worldwide; estimates vary by definition" },
    { label: "Official use", value: "Greece; Cyprus (with Turkish); European Union" },
    { label: "Standard", value: "Standard Modern Greek, based mainly on Demotic" },
    { label: "Writing", value: "24-letter Greek alphabet; modern monotonic accenting" },
    { label: "Documented history", value: "More than three millennia, beginning with Mycenaean Linear B" }
  ],
  learnerOverview: "Compare νόμος nómos, “law,” with νομός nomós, “district.” The letters nearly match, but the accent changes both stress and meaning. Learn modern letter sounds and written accents first, then practice nouns with their articles and verbs inside full sentences.\n\nThis guide's examples follow Standard Modern Greek unless a note says otherwise. Cypriot Greek, Pontic, and other local varieties have their own patterns. So do Ancient Greek, Koine, and the learned Katharevousa register; an older form in a newspaper or song does not make it the right form for a casual message.\n\nChoose recordings connected to your life: family conversations, interviews, sport, drama, or music. Read along, check unfamiliar forms in a Greek dictionary, and return to the recording. You can build everyday fluency while learning why older layers still appear in modern words and public language.",
  origins: {
    overview: cited(
      "People have written Greek for more than three thousand years. The earliest surviving records are Mycenaean tablets written in Linear B during the second millennium BCE. Later writers used several alphabetic dialects, so “Ancient Greek” names a long history rather than one uniform way of speaking.\n\nAfter Alexander, a shared form called Koine spread around the eastern Mediterranean. People used it for administration, trade, literature, and religious texts, including the New Testament. Medieval speakers kept changing Greek while writers could choose either speech-like or ancient-looking forms; today's varieties grew through that continuous history.",
      "wiki-greek",
      "wiki-history",
      "britannica"
    ),
    timeline: [
      {
        period: "c. 1400–1200 BCE",
        event: cited(
          "Scribes recorded Mycenaean Greek in Linear B, a script whose signs usually represent syllables. Their tablets mostly list goods and people. The later Greek alphabet came from a different writing tradition.",
          "wiki-history",
          "unicode"
        )
      },
      {
        period: "8th–4th centuries BCE",
        event: cited(
          "Writers began using alphabetic Greek in several dialect traditions. Athens made Attic influential in drama, philosophy, and public writing, while other communities kept their own dialects. An epic and a private inscription from this era need not follow the same language norms.",
          "wiki-greek",
          "britannica"
        )
      },
      {
        period: "4th century BCE–6th century CE",
        event: cited(
          "Koine spread across the Hellenistic and Roman eastern Mediterranean as a shared language beyond one city. Speakers changed its sounds and grammar over time. Older verb forms declined, and speakers increasingly built meanings with small words and full verbs.",
          "wiki-history",
          "wiki-modern"
        )
      },
      {
        period: "6th–15th centuries",
        event: cited(
          "Medieval speakers kept changing Greek. Writers could follow current speech more closely or imitate prestigious ancient styles, depending on their audience and purpose. Poems, chronicles, and religious texts therefore show different forms side by side.",
          "wiki-history",
          "cgl-portal"
        )
      },
      {
        period: "19th century–1976",
        event: cited(
          "Greece debated which form should carry public life. Demotic drew on everyday speech; Katharevousa brought older forms into government and education. The choice shaped access to public writing until Greece made Demotic official in 1976.",
          "wiki-history",
          "wiki-modern"
        )
      },
      {
        period: "1982 to the digital present",
        event: cited(
          "Greece adopted monotonic spelling in 1982. Ordinary modern writing now marks stress with one accent and uses a diaeresis when two adjacent vowels need separate reading. People may omit accents in quick messages or write informal Greek in Latin letters, often called Greeklish.",
          "unicode",
          "wiki-modern"
        )
      }
    ],
    contactHistory: cited(
      "Greek speakers borrowed and lent words wherever they lived alongside other communities. Venetian contact left words in island speech, Ottoman Turkish shaped many everyday words, and English now enters technology and popular culture. Cypriot Greek has its own contact history, including Turkish and English.\n\nInternational scholars also made new technical terms from Greek roots. Some later entered modern Greek, but their familiar roots do not mean people have used the whole word unchanged since antiquity.",
      "wiki-history",
      "triantafyllides",
      "wiki-greek"
    ),
    standardization: cited(
      "Standard Modern Greek grew mainly from Demotic, the everyday form championed during Greece's language debate. It also absorbed learned words and constructions used in Katharevousa. The change in official policy in 1976 did not erase these forms: even εντάξει entáxei, “okay,” preserves an old case ending.\n\nSchools and national media use the standard in Greece and Cyprus. Many Cypriot speakers also use features of Cypriot Greek in public and private life; the line between the two varies with the setting and speaker.",
      "wiki-modern",
      "wiki-grammar",
      "cgl-portal"
    )
  },
  variants: {
    overview: cited(
      "Greek changes with place, age, audience, and medium. School and national media spread a common standard, but local speech did not disappear. Speakers may mix standard and regional features within one conversation.\n\nWhen you save audio, record where it came from and who is speaking. A family conversation, parliamentary speech, comedy sketch, and old film make different language choices.",
      "wiki-modern",
      "wiki-greek",
      "cgl-portal"
    ),
    items: [
      {
        name: "Standard Modern Greek",
        note: cited(
          "Schools, national broadcasters, and publishers generally use this shared form. It grew mainly from southern Demotic speech and also carries learned vocabulary. Speakers still bring regional accents and personal habits into standard speech.",
          "wiki-modern",
          "wiki-grammar"
        )
      },
      {
        name: "Cypriot Greek",
        note: cited(
          "Many Greek Cypriots grow up with Cypriot Greek and learn Standard Modern Greek at school. Cypriot sounds, words, and sentence patterns differ from the standard, and speakers may move between them according to setting. How easily outsiders understand a speaker depends on the form they hear and their exposure to it.",
          "cypriot-study",
          "wiki-greek"
        )
      },
      {
        name: "Pontic and Cappadocian Greek",
        note: cited(
          "Pontic and Cappadocian developed among Greek-speaking communities in Anatolia. Forced migration and later diaspora changed where people use them, while contact with neighboring languages shaped their forms. Speakers and researchers continue to document and teach these varieties.",
          "glottolog",
          "wiki-greek"
        )
      },
      {
        name: "Learned, ecclesiastical, and literary registers",
        note: cited(
          "Writers sometimes choose Katharevousa, Koine, or classical forms for formal or artistic effect. Orthodox services use older language rather than ordinary modern conversation. Authors can also choose local speech and slang to give a character a distinct voice.",
          "wiki-history",
          "cgl-portal"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Modern Greek has five vowel sounds: /a e i o u/. Several letter groups spell /i/, but speakers do not give each spelling a different vowel. You will also hear θ as in English thin, δ as in this, and the rough χ heard in Scottish loch.\n\nLearn the alphabet with modern sounds from the start. β sounds /v/, while η sounds /i/; an Ancient Greek course may teach reconstructed older sounds for historical reading. Those older values do not guide an ordinary modern conversation.",
      "wiki-modern",
      "wiki-grammar",
      "britannica"
    ),
    script: "Greek alphabet in modern monotonic spelling; transliterations approximate Standard Modern Greek",
    soundSystem: cited(
      "The sound of γ changes with its next vowel: it sounds like a soft, voiced y before /e/ or /i/ and rougher elsewhere. χ follows a similar pattern without voicing. The letter pairs μπ, ντ, and γκ often spell /b/, /d/, and /g/, although speakers may add a nasal sound in some positions.\n\nFive spellings—ι, η, υ, ει, οι—usually give /i/. Historical sound mergers produced this pattern. The pairs αυ and ευ change with the next sound: αύριο ávrio, “tomorrow,” has /av/, while αυτό aftó, “this,” has /af/ before voiceless /t/.",
      "wiki-modern",
      "wiki-grammar",
      "triantafyllides"
    ),
    prosody: cited(
      "Greek marks the stressed syllable of a word with more than one syllable. Compare νόμος nómos, “law,” and νομός nomós, “district.” Stress falls within the last three syllables, and a short attached word can trigger another written accent: το αυτοκίνητό μου to aftokínitó mou, “my car.”\n\nIn speech, small words lean on their neighbors. Listen to whole questions and answers, then copy their rhythm; naming letters alone will not teach you how the words flow together.",
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
      "Modern Greek writes 24 letters from alpha Α α to omega Ω ω. Lowercase sigma changes shape at the end of a word: σ becomes ς. A Greek question ends with a semicolon-shaped mark, as in Τι κάνεις; “How are you?”\n\nEveryday spelling uses one accent mark to show stress in words with several syllables. A diaeresis separates vowels that a reader might otherwise combine, as in Μαΐου Maïou, “of May.” Ancient and many church editions use older polytonic spelling with several accent and breathing marks.",
      "unicode",
      "wiki-modern"
    ),
    primaryScript: "Greek alphabet, modern monotonic orthography",
    romanization: cited(
      "Latin spellings help with names and maps, but different systems spell the same Greek name differently. A person's official transliteration may differ from a family spelling used abroad. In informal messages some people use Greeklish, or Greek in Latin letters, without one fixed spelling system.\n\nLearn to type Greek accents early. Latin letters can hide spelling differences such as οι and η, which sound alike today but belong to different word families.",
      "unicode",
      "triantafyllides"
    ),
    spellingNorms: cited(
      "Greek spelling keeps older distinctions even when pronunciation has merged. Both ο and ω sound /o/, while αι sounds /e/; several other spellings sound /i/. Endings can also move stress: άνθρωπος ánthropos, “person,” becomes ανθρώπου anthrópou, “of a person.”\n\nThe 1982 reform simplified accent marks but kept historical vowel spellings. Learn a noun's written form, audio, article, and one changed form together rather than guessing its spelling from sound alone.",
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
      "Greek changes word endings to show who acts, who receives an action, and who owns something. Nouns have three grammatical genders and four main case forms. Verbs change with the person, time, and whether the speaker sees an action as ongoing or complete.\n\nModern Greek usually uses να na plus a verb where English uses “to.” Compare γράφω gráfo, “I write,” with να γράψω na grápso, “to write” viewed as one event.",
      "wiki-grammar",
      "cgl-portal"
    ),
    typologicalProfile: cited(
      "One Greek ending can carry several pieces of information. Subjects usually take the nominative form, while direct objects take the accusative, so speakers can move words for emphasis. Position and tone still show what they want to highlight.\n\nSpeakers often leave out “I” because the verb identifies them: Είμαι εδώ eímai edó means “I am here.” Adding εγώ egó emphasizes “I.”",
      "wiki-grammar",
      "wiki-modern"
    ),
    morphology: cited(
      "Articles and adjectives change with nouns: ο καλός φίλος o kalós fílos means “the good friend,” while της καλής φίλης tis kalís fílis means “of the good female friend.” The four living case forms are nominative, genitive, accusative, and vocative. Older dative forms survive in fixed expressions.\n\nVerbs often have one stem for an ongoing action and another for a whole event. Γράφω gráfo changes to γράψ- gráps- in θα γράψω tha grápso, “I will write”; βλέπω vlépo changes more sharply in να δω na do, “to see.”",
      "wiki-grammar",
      "triantafyllides"
    ),
    syntax: cited(
      "Greek uses να na plus a personal verb where English uses “to”: θέλω να φύγω thélo na fígo means “I want to leave.” Short object pronouns go before an ordinary verb, as in τον βλέπω ton vlépo, “I see him,” but after a positive command: δες τον des ton, “see him.”\n\nΔεν den negates ordinary statements; μην min appears in prohibitions and some να constructions. Μιλάς ελληνικά; Milás elliniká? asks “Do you speak Greek?” without an English-style “do.”",
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
          "Learn a noun with its article: ο φίλος o fílos, “the male friend,” η φίλη i fíli, “the female friend,” and το σπίτι to spíti, “the house.” The article and noun change with their role: Βλέπω τον φίλο vlépo ton fílo means “I see the friend”; Το σπίτι του φίλου to spíti tou fílou means “the friend's house.” Objects also have grammatical gender, which you learn with the word.",
          "wiki-grammar",
          "triantafyllides"
        ),
        example: "Μιλάω με την καινούργια μου φίλη.",
        exampleTranslation: "I am speaking with my new friend (female)."
      },
      {
        title: "Aspect: process versus bounded event",
        body: cited(
          "A Greek verb can show an action unfolding or repeating, called imperfective aspect. It can also show one whole event, called perfective aspect. Θα γράφω tha gráfo means “I will be writing” or “I will write regularly”; θα γράψω tha grápso means “I will write” on an occasion.\n\nThese forms show the speaker's view of the action, while other words and context help place it in time.",
          "cgl-aspect",
          "wiki-grammar"
        ),
        example: "Κάθε μέρα διαβάζω, αλλά απόψε θα διαβάσω μόνο ένα κεφάλαιο.",
        exampleTranslation: "Every day I study/read, but tonight I will read only one chapter."
      },
      {
        title: "The να construction",
        body: cited(
          "Greek puts να before a personal verb where English uses “to.” Θέλω να πάω thélo na páo means “I want to go”; Θέλω να πας thélo na pas means “I want you to go.” The ending shows who will go.\n\nPractice frames such as θέλω να, “I want to,” and μπορώ να, “I can.”",
          "wiki-grammar",
          "wiki-history"
        ),
        example: "Πρέπει να φύγουμε πριν αρχίσει η βροχή.",
        exampleTranslation: "We have to leave before the rain starts."
      },
      {
        title: "Object clitics",
        body: cited(
          "Greek has short pronouns that lean on a neighbor; linguists call them clitics. Μου το έδωσε mou to édose means “She or he gave it to me,” with both before the verb. A positive command puts them after it: Δώσ' μου το dós mou to, “Give it to me.”\n\nA possessive form follows its noun and can trigger another accent: το αυτοκίνητό μου to aftokínitó mou, “my car.”",
          "wiki-grammar",
          "unicode"
        ),
        example: "Το βιβλίο μου; Μου το έδωσε η Μαρία.",
        exampleTranslation: "My book? Maria gave it to me."
      },
      {
        title: "Past tense and the augment",
        body: cited(
          "Past forms such as έγραψα égrapsa, “I wrote,” add ε- to carry stress; γράφω gráfo means “I write.” Longer verbs may need no added ε-. Έγραφα égrafa means “I was writing” or “I used to write,” while έγραψα shows a whole event.\n\nGrammar books call the whole-event past the aorist. The name does not mean the time is unknown.",
          "wiki-grammar",
          "triantafyllides"
        ),
        example: "Όταν τηλεφώνησες, έγραφα ένα μήνυμα.",
        exampleTranslation: "When you called, I was writing a message."
      },
      {
        title: "Negation and prohibitions",
        body: cited(
          "Δεν den goes with ordinary statements: Δεν ξέρω den xéro means “I don't know.” Μην min appears in negative commands: Μην φύγεις min fígeis means “Don't leave.” A whole-event form can warn against one action; an ongoing form can prohibit repeated behavior.\n\nNotice which form speakers use in a complete request.",
          "wiki-grammar",
          "cgl-corpora"
        ),
        example: "Μην το πεις σε κανέναν· δεν είναι ακόμη σίγουρο.",
        exampleTranslation: "Don't tell it to anyone; it isn't certain yet."
      },
      {
        title: "Flexible word order and focus",
        body: cited(
          "Ο Νίκος αγόρασε το βιβλίο O Níkos agórase to vivlío says “Nikos bought the book” in a neutral order. Moving the object forward can highlight it, depending on tone. In colloquial speech, a short pronoun may repeat that object: Αυτό το τραγούδι το ξέρουν όλοι, “This song, everyone knows it.”",
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
      "Most Greek speakers live in Greece and Cyprus, but the language also has long diasporic routes. Forced migration moved Greek-speaking Orthodox communities from Anatolia to Greece in the twentieth century. Later migration built communities in Germany, Australia, North America, Britain, and southern Africa.\n\nSome heritage speakers follow family conversations more easily than they read formal Greek. That difference reflects where and how they have used the language.",
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
      "An English speaker can learn the alphabet quickly, then spend much longer on endings, verb aspect, short pronouns, and fast speech. Written accents help with stress, although older spelling distinctions make writing from dictation harder than reading aloud. Your starting point changes the work: a heritage speaker may know family speech but not formal writing, while a classical scholar may recognize roots yet struggle with a modern voice note.",
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
      "Use a structured course for grammar, read aloud with audio, and bring recurring errors to a teacher or conversation partner. Save each noun with its article and plural, and each verb with examples of its ongoing and whole-event forms. Later, follow a news topic or transcribe a short interview; official certificate levels can give you a checkpoint.",
      "cgl-certification",
      "uoa-courses",
      "cgl-corpora"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Keep notes that connect a form to a speaker and setting. Save article–noun pairs, plurals, genitives, and both common verb stems in complete sentences. When you transcribe audio, label local, learned, or dated forms beside their standard equivalents.\n\nAt intermediate level, read Greek dictionary definitions and check examples before adopting a new word. If you also study Ancient or Koine Greek, keep separate pronunciation and grammar notes so an older form does not slip into modern conversation by accident.",
      "triantafyllides",
      "cgl-corpora",
      "wiki-history"
    ),
    mediaPractice: cited(
      "Start with thirty seconds of a scripted scene: listen, write what you hear, and repeat the speaker's phrasing. Then try an interview on the same topic, where interruptions, short pronouns, and local accents enter. Songs can help you remember words, but singers stretch sounds and rearrange lines, so compare them with ordinary speech.\n\nSave the date, place, and speaker for each recording. An older Katharevousa newsreel will teach you a different register from a present-day interview or vlog.",
      "hnc",
      "athena-corpus",
      "wiki-modern"
    ),
    dictionariesAndCorpora: cited(
      "The Triantafyllides dictionary gives definitions, word forms, expressions, and word histories in Greek. Use it to find a likely meaning, then search the Centre for the Greek Language or Hellenic National Corpus for sentences showing nearby words and register. If a phrase sounds odd in a message, ask a speaker how they would say it; a written example may belong to news or formal prose.",
      "triantafyllides",
      "cgl-corpora",
      "hnc",
      "athena-corpus"
    ),
    resources
  },
  wordsAndTexts: {
    overview: cited(
      "Modern Greek words have traveled by different routes. Some passed through everyday speech for centuries, while others came from older books or from contact with Turkish, Italian, and English. Compare σπίτι spíti, “home,” with οικία ikía, “residence”: both can refer to a house, but οικία suits signs and formal writing more readily than casual talk.\n\nPay attention to where speakers choose a word. Its ancient root may explain its history, but context tells you how it works now.",
      "triantafyllides",
      "hnc",
      "wiki-history"
    ),
    notableWords: [
      { term: "φιλότιμο", transliteration: "filótimo", meaning: "sense of honor, generosity, or duty toward others", note: cited("Speakers use this word for actions involving pride, decency, obligation, or eagerness to help. The situation tells you which shade they mean.", "triantafyllides") },
      { term: "παρέα", transliteration: "paréa", meaning: "company; a group spending time together", note: cited("It can mean the group itself or the feeling of having company. Πάμε με την παρέα means “We're going with the group.”", "triantafyllides") },
      { term: "μεράκι", transliteration: "meráki", meaning: "care or devotion put into an activity", note: cited("This Turkish-origin word can praise cooking, craft, or performance done with visible personal care.", "triantafyllides") },
      { term: "κέφι", transliteration: "kéfi", meaning: "high spirits; mood for enjoyment", note: cited("Έχω κέφι means “I'm in the mood” or “I feel lively.” The word often appears around company and music.", "triantafyllides") },
      { term: "θαλασσινός", transliteration: "thalassinós", meaning: "of the sea; seafaring person", note: cited("Built from θάλασσα, “sea,” it can describe food, colors, and people connected to the sea.", "triantafyllides") },
      { term: "εντάξει", transliteration: "entáxei", meaning: "okay; all right; agreed", note: cited("This everyday word preserves an older case form. Tone can make it sound reassuring, matter-of-fact, or reluctant.", "wiki-modern", "triantafyllides") },
      { term: "ρε", transliteration: "re", meaning: "hey; mate (informal address word)", note: cited("Among friends, it may sound warm or sharp depending on tone. Listen before using it with someone you do not know.", "triantafyllides") },
      { term: "ξενιτιά", transliteration: "xenitiá", meaning: "life or place away from one's homeland", note: cited("Songs and migration stories use it for life abroad, separation, and homesickness.", "triantafyllides", "hnc") }
    ],
    loanwordLayers: cited(
      "Greek speakers use inherited words, learned words from older texts, and borrowings in the same conversation. Italian and Venetian contact shaped island and maritime vocabulary; Turkish supplied many ordinary food and household words; French and English later added terms in urban life and technology. People may adapt a new English word, switch languages briefly, or choose a Greek alternative.\n\nSome international inventions used Greek roots abroad and then entered Greek, as τηλέφωνο tiléfono, “telephone,” did. A word's route helps explain its form without ranking it as more or less Greek.",
      "triantafyllides",
      "wiki-history",
      "hnc"
    ),
    idioms: [
      { original: "σιγά τα αυγά", transliteration: "sigá ta avgá", translation: "Big deal; it's nothing so impressive.", note: "Literally “easy with the eggs,” an ironic way to deflate exaggerated importance. Tone can be playful or dismissive." },
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
      "Greek forms the Hellenic branch of Indo-European. Most modern Greek varieties grew largely through Koine, while Tsakonian follows a more divergent line associated with Doric. Albanian, South Slavic languages, Aromanian, Turkish, and Italian share words or patterns with Greek through contact rather than descent from Greek.",
      "glottolog",
      "wiki-greek",
      "wiki-history"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Greek speakers create new music, comedy, fiction, film, and online conversation while drawing on older texts when they choose. Communities in Greece, Cyprus, and abroad bring different regional, religious, secular, refugee, and family histories to that work. Before treating a proverb or famous word as a national trait, ask who uses it, with whom, and in what setting.",
  resources,
  relatedLanguages,
  phrases: [
    { original: "Γεια σου! / Γεια σας!", transliteration: "Ya sou! / Ya sas!", translation: "Hello!", literalMeaning: "Health to you!", usageNote: "Use σου to one familiar person and σας to several people or one person addressed politely." },
    { original: "Καλημέρα.", transliteration: "Kaliméra.", translation: "Good morning.", usageNote: "Used through the morning and often into early afternoon; later use καλησπέρα." },
    { original: "Τι κάνεις;", transliteration: "Ti kánis?", translation: "How are you?", literalMeaning: "What are you doing?", usageNote: "Informal singular. The polite/plural form is Τι κάνετε; Ti kánete?" },
    { original: "Ευχαριστώ πολύ.", transliteration: "Efcharistó polí.", translation: "Thank you very much.", usageNote: "Stress falls on the final syllable of ευχαριστώ and the final syllable of πολύ." },
    { original: "Παρακαλώ.", transliteration: "Parakaló.", translation: "Please; you're welcome; yes, how can I help?", usageNote: "A multipurpose politeness word whose translation changes with position and situation." },
    { original: "Συγγνώμη.", transliteration: "Signómi.", translation: "Excuse me; sorry.", usageNote: "Say it to get attention, pass someone, or apologize. A fuller apology is Με συγχωρείτε." },
    { original: "Δεν καταλαβαίνω.", transliteration: "Den katalavéno.", translation: "I don't understand.", usageNote: "This sounds neutral in ordinary conversation; δεν marks negation in a statement." },
    { original: "Μπορείτε να το πείτε ξανά;", transliteration: "Boríte na to píte xaná?", translation: "Could you say it again?", literalMeaning: "Can you say it again?", usageNote: "Polite or plural. To one familiar person: Μπορείς να το πεις ξανά;" },
    { original: "Πιο αργά, παρακαλώ.", transliteration: "Pio argá, parakaló.", translation: "More slowly, please.", usageNote: "A compact request to slow down; follow it with another attempt rather than switching immediately to English." },
    { original: "Μαθαίνω ελληνικά.", transliteration: "Mathéno elliniká.", translation: "I'm learning Greek.", usageNote: "The lower-case adjective ελληνικά functions here as the language name." },
    { original: "Τι σημαίνει αυτή η λέξη;", transliteration: "Ti siméni aftí i léxi?", translation: "What does this word mean?", usageNote: "Ask this while pointing to a word or quoting it. The Greek question mark looks like a semicolon." },
    { original: "Θα ήθελα έναν καφέ, παρακαλώ.", transliteration: "Tha íthela énan kafé, parakaló.", translation: "I would like a coffee, please.", usageNote: "Έναν agrees with masculine καφέ in the accusative. For a feminine item the article changes." },
    { original: "Πού είναι η στάση;", transliteration: "Pou íne i stási?", translation: "Where is the stop?", usageNote: "Use for a bus or transit stop when the context is clear." },
    { original: "Χάρηκα πολύ.", transliteration: "Chárika polí.", translation: "Pleased to meet you.", literalMeaning: "I was very glad.", usageNote: "A natural response after an introduction." },
    { original: "Τα λέμε!", transliteration: "Ta léme!", translation: "See you!", literalMeaning: "We'll say/talk about things.", usageNote: "Informal, warm, and common when expecting to speak again." }
  ],
  sources: [
    { id: "cgl-portal", title: "Portal for the Greek Language", url: "https://www.greek-language.gr/greekLang/index.html", publisher: "Centre for the Greek Language", accessedAt: "2026-07-10" },
    { id: "triantafyllides", title: "Dictionary of Standard Modern Greek", url: "https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/triantafyllides/", publisher: "Centre for the Greek Language and Institute for Modern Greek Studies", publishedAt: "1998", accessedAt: "2026-07-10" },
    { id: "cgl-corpora", title: "Parallel Corpus Search for Modern Greek", url: "https://www.greek-language.gr/greekLang/modern_greek/tools/corpora/corpora/search.html", publisher: "Centre for the Greek Language", accessedAt: "2026-07-10" },
    { id: "cgl-aspect", title: "Όψη [Aspect]", url: "https://www.greek-language.gr/greekLang/modern_greek/tools/lexica/glossology/show.html?id=124", publisher: "Centre for the Greek Language", accessedAt: "2026-09-27" },
    { id: "ucy-school", title: "School of Modern Greek", url: "https://www.ucy.ac.cy/mogr/?lang=en", publisher: "University of Cyprus", accessedAt: "2026-09-27" },
    { id: "cgl-certification", title: "Certificate of Attainment in Greek", url: "https://www.greek-language.gr/certification/", publisher: "Centre for the Greek Language", accessedAt: "2026-07-10" },
    { id: "hnc", title: "Hellenic National Corpus", url: "https://hnc.ilsp.gr/", publisher: "Institute for Language and Speech Processing, Athena Research Center", accessedAt: "2026-07-10" },
    { id: "athena-corpus", title: "Educational Greek Corpus", url: "https://www.athenarc.gr/en/node/2458", publisher: "Athena Research Center", accessedAt: "2026-07-10" },
    { id: "uoa-courses", title: "Modern Greek Language Teaching Center", url: "https://en.greekcourses.uoa.gr/", publisher: "National and Kapodistrian University of Athens", accessedAt: "2026-07-10" },
    { id: "unicode", title: "The Unicode Standard, Chapter 7: Greek", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "glottolog", title: "Glottolog 5.3: Modern Greek", url: "https://glottolog.org/resource/languoid/id/mode1248", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "cypriot-study", title: "A Small Island With Big Differences? Folk Perceptions in the Context of Dialect Levelling and Koineization", url: "https://www.frontiersin.org/journals/communication/articles/10.3389/fcomm.2021.770088/full", publisher: "Frontiers in Communication", publishedAt: "2022-01-07", accessedAt: "2026-09-27" },
    { id: "britannica", title: "Greek Language", url: "https://www.britannica.com/topic/Greek-language", publisher: "Encyclopaedia Britannica", accessedAt: "2026-07-10" },
    { id: "wiki-greek", title: "Greek language", url: "https://en.wikipedia.org/wiki/Greek_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-modern", title: "Modern Greek", url: "https://en.wikipedia.org/wiki/Modern_Greek", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-grammar", title: "Modern Greek grammar", url: "https://en.wikipedia.org/wiki/Modern_Greek_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of Greek", url: "https://en.wikipedia.org/wiki/History_of_Greek", publisher: "Wikipedia", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Greek Language Guide: Modern Speech, Grammar and History",
    description: "Hear and read Modern Greek as people use it today. Explore the alphabet, stress, grammar, regional voices, history, practical phrases, and specific courses and dictionaries."
  }
} satisfies LanguageGuide;
