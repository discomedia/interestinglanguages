import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const sources = [
  { id: "dd-complete", title: "Complete Guide to Swahili / Kiswahili", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/kiswahili-swahili-complete-guide/", updatedAt: "2025-11-19", accessedAt: "2026-07-10" },
  { id: "dd-learn", title: "How to Learn Swahili Quickly — How We'd Do It Again", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/how-to-learn-swahili/", updatedAt: "2025-11-19", accessedAt: "2026-07-10" },
  { id: "dd-phrases", title: "Swahili Phrases and Words for Tanzania and Kenya", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/swahili-everyday-words-and-phrases/", updatedAt: "2025-11-19", accessedAt: "2026-07-10" },
  { id: "dd-hello", title: "Hello in Swahili — Eight Simple Greetings That Aren't Jambo", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/hello-in-swahili/", updatedAt: "2025-11-19", accessedAt: "2026-07-10" },
  { id: "dd-classes", title: "Swahili Noun Classes — Ultimate Cheat Sheet", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/swahili-noun-classes-cheat-sheet/", updatedAt: "2025-11-19", accessedAt: "2026-07-10" },
  { id: "dd-verbs", title: "Ultimate List of 200+ Swahili Verbs Plus Example Sentences", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/200-plus-swahili-verbs-examples/", updatedAt: "2025-11-19", accessedAt: "2026-07-10" },
  { id: "dd-why", title: "Why Learn Swahili and How Hard Is Swahili?", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/learn-swahili-plan/", updatedAt: "2025-11-19", accessedAt: "2026-07-10" },
  { id: "dd-reference", title: "Swahili Grammar Reference Cheat Sheet", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/wp-content/uploads/2019/07/Discover-Discomfort-Swahili-Grammar-Reference.pdf", accessedAt: "2026-07-10" },
  { id: "unesco", title: "World Kiswahili Language Day", publisher: "UNESCO", url: "https://www.unesco.org/en/days/kiswahili-language", updatedAt: "2026-07-03", accessedAt: "2026-07-10" },
  { id: "oxford-history", title: "History of the Standard Swahili Language", publisher: "Oxford Research Encyclopedia of African History", url: "https://www.history.msstate.edu/sites/www.history.msstate.edu/files/2024-09/History%20of%20Standard%20Swahili.pdf", publishedAt: "2024-08-22", accessedAt: "2026-07-10" },
  { id: "glottolog", title: "Swahili", publisher: "Glottolog 5.2", url: "https://glottolog.org/resource/languoid/id/swah1253", accessedAt: "2026-07-10" },
  { id: "wals", title: "Swahili", publisher: "World Atlas of Language Structures Online", url: "https://wals.info/languoid/lect/wals_code_swa", accessedAt: "2026-07-10" },
  { id: "kamusi", title: "Kamusi: The Global Online Living Dictionary", publisher: "Kamusi Project International", url: "https://www.kamusi.org/", accessedAt: "2026-07-10" },
  { id: "wikipedia", title: "Swahili language", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Swahili_language", updatedAt: "2026-05-01", accessedAt: "2026-07-10" },
  { id: "swahili-grammar", title: "Swahili Grammar Guide", publisher: "SwahiliGrammar.com", url: "https://swahiligrammar.com/", accessedAt: "2026-07-10" }
] satisfies LanguageGuide["sources"];

const relatedLanguages: LanguageGuide["relationships"]["languages"] = [
  {
    name: "Comorian",
    relationship: "Close Sabaki relative",
    explanation: cited("The Comorian varieties of the Indian Ocean share a comparatively recent Sabaki inheritance with Swahili. A Swahili learner will notice familiar noun-class and verb-building logic, but should not mistake family resemblance for effortless mutual intelligibility.", "glottolog", "wikipedia")
  },
  {
    name: "Mijikenda",
    relationship: "Close coastal Bantu relative",
    explanation: cited("The Mijikenda languages of coastal Kenya—including Giriama—belong to the same broader Sabaki cluster. Comparing everyday roots reveals Swahili's African genealogy more clearly than looking only at its conspicuous Arabic loans.", "glottolog", "wikipedia")
  },
  {
    name: "Pokomo",
    relationship: "Close Sabaki relative",
    explanation: cited("Pokomo, spoken around Kenya's Tana River, is another Sabaki relative. It helps place Swahili within a network of northeast-coast Bantu histories rather than imagining that the language sprang directly from trade contact.", "glottolog")
  },
  {
    name: "Arabic",
    slug: "arabic",
    relationship: "Major contact language, not a genetic parent",
    explanation: cited("Arabic supplied a large and culturally visible vocabulary layer, especially around religion, trade, administration, writing and abstract discourse. Swahili grammar, its basic lexicon and its noun-class system remain Bantu; the relationship is historical contact, not descent.", "oxford-history", "dd-complete")
  }
];

const resources: LanguageGuide["resources"] = [
  {
    type: "course",
    title: "Discover Discomfort: How to Learn Swahili",
    url: "https://discoverdiscomfort.com/how-to-learn-swahili/",
    level: "beginner",
    description: cited("An experience-based sequence joining grammar, sentence drills and tutor practice.", "dd-learn")
  },
  {
    type: "other",
    title: "Discover Discomfort Swahili Grammar Reference",
    url: "https://discoverdiscomfort.com/wp-content/uploads/2019/07/Discover-Discomfort-Swahili-Grammar-Reference.pdf",
    level: "all",
    description: cited("A printable map of noun-class agreement and core verb morphology.", "dd-reference", "dd-classes")
  },
  {
    type: "dictionary",
    title: "Kamusi Project",
    url: "https://www.kamusi.org/",
    level: "all",
    description: cited("A living multilingual dictionary project whose history began with Swahili.", "kamusi")
  },
  {
    type: "other",
    title: "Discover Discomfort: 200+ Swahili Verbs",
    url: "https://discoverdiscomfort.com/200-plus-swahili-verbs-examples/",
    level: "beginner",
    description: cited("High-frequency verb roots presented through useful complete sentences.", "dd-verbs")
  },
  {
    type: "media",
    title: "BBC News Swahili",
    url: "https://www.bbc.com/swahili",
    level: "intermediate",
    description: "Current reporting with audio for repeated listening and transcription."
  },
  {
    type: "media",
    title: "Deutsche Welle Kiswahili",
    url: "https://www.dw.com/sw/",
    level: "intermediate",
    description: "News, interviews and video in an East African broadcast register."
  }
];

export const swahiliGuide: LanguageGuide = {
  slug: "swahili",
  name: "Swahili",
  autonym: "Kiswahili",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Swahili is East Africa's great connective language: structurally Bantu, enriched by centuries of Indian Ocean exchange, and alive in street greetings, poetry, classrooms, newsrooms and digital culture.",
  family: "Niger-Congo, Atlantic-Congo, Bantu (Sabaki)",
  macroRegion: "East and Central Africa",
  primaryScript: "Latin; historically also Arabic-derived Ajami",
  difficultyLabel: "Moderate",
  learnerHook: "Its spelling and verb patterns become readable quickly, while noun-class agreement, social greetings and regional voices provide a deep path beyond survival conversation.",
  hero: {
    imageAlt: "Kiswahili text and conversation across the East African coast.",
    callToActionLabel: "Explore Kiswahili"
  },
  classification: "A Northeast Coast Bantu language in the Sabaki group and a major regional lingua franca",
  speakerCommunity: "Swahili is not owned by one country or one kind of speaker. It is a home language in historic coastal communities, Zanzibar and many urban families; a national language and everyday public medium in Tanzania and Kenya; and a second or additional language across a much wider East and Central African zone. That range produces radically different relationships to the language. One person may inherit a coastal dialect and poetic tradition, another may learn Standard Swahili at school beside a different home language, and another may use an inland regional variety for trade or city life. UNESCO now describes a community of more than 200 million speakers and celebrates 7 July as World Kiswahili Language Day. Treat that figure as a broad estimate spanning different proficiency levels, not a count of identical native speakers.",
  facts: [
    { label: "Autonym", value: "Kiswahili" },
    { label: "Family", value: "Niger-Congo → Bantu → Sabaki" },
    { label: "Core area", value: "Tanzania, Kenya and the East African coast" },
    { label: "Writing", value: "Latin alphabet; older Ajami traditions" },
    { label: "Sound profile", value: "Five vowels; usually penultimate stress" },
    { label: "Global recognition", value: "World Kiswahili Language Day: 7 July" }
  ],
  learnerOverview: "Swahili gives a learner unusually fast access to meaningful structure. A word such as ninakupenda is not an arbitrary long unit: ni-na-ku-penda packages ‘I–present–you–love’ into one verb. Once those slots become visible, unfamiliar forms stop looking opaque. The deeper pleasure comes from watching the same system spread across a sentence: watoto wawili wazuri wamefika, ‘two good children have arrived,’ repeats wa- agreement in several places. Yet fluency is not a matter of solving morphology alone. Real Swahili lives in greeting sequences, choices between formal and relaxed speech, coastal and inland accents, proverbs, taarab lyrics, hip-hop, novels and multilingual conversation. Textbook jambo is intelligible, but a friend in Dar es Salaam may open with mambo? and expect poa; an elder may be greeted with shikamoo and reply marahaba. The best learning path therefore joins the elegant grammar to social listening from the beginning. Learn why the forms work, then notice who actually uses them, where and with whom.",

  origins: {
    overview: cited("Swahili grew from Bantu-speaking communities on the East African coast, within the Sabaki branch that also includes languages such as Comorian, Mijikenda and Pokomo. Its core grammar and much everyday vocabulary are inherited Bantu. From early centuries of the Common Era, coastal settlements participated in networks joining the African interior to Arabia, Persia, India and, later, Europe. Those contacts left material and lexical traces, but the old claim that Swahili was an Arabic ‘mixed language’ reverses the evidence: loanwords entered an already Bantu grammatical system. Even kitabu ‘book,’ from Arabic kitāb, behaves as a Swahili noun, taking the class-8 plural vitabu and agreements such as vitabu hivi vizuri, ‘these good books.’ The language's history is therefore not a choice between ‘African’ and ‘cosmopolitan.’ It is a particularly African history of coastal urbanism and outward connection.", "glottolog", "oxford-history", "wikipedia"),
    timeline: [
      {
        period: "First millennium CE",
        event: cited("Ancestral Sabaki-speaking communities developed along the northeast African coast. Archaeology, historical linguistics and early records point to African coastal towns whose inhabitants traded across the Indian Ocean while maintaining local agricultural and maritime worlds.", "oxford-history", "wikipedia")
      },
      {
        period: "c. 1000–1500",
        event: cited("A chain of Swahili city-states—from places such as Kilwa and Mombasa to the Lamu archipelago—flourished through commerce and Islam. Arabic-script literacy supported religion, correspondence and poetry, while speech remained grammatically Bantu. Persian, Arabic and South Asian connections became part of coastal culture without erasing local foundations.", "oxford-history", "wikipedia")
      },
      {
        period: "1500s–1800s",
        event: cited("Portuguese intervention and then Omani influence changed coastal power and trade. Zanzibar's nineteenth-century commercial prominence helped Kiunguja, its local variety, travel inland with caravans. Words such as meza ‘table’ and pesa ‘money’ recall Portuguese contact; many administrative, religious and literary terms reflect Arabic.", "dd-complete", "oxford-history")
      },
      {
        period: "Late 1800s–1960",
        event: cited("Missionaries, colonial administrations and schools expanded print and selected forms for teaching. German rule promoted Swahili administration in Tanganyika; British-era standardizers later privileged Kiunguja through the Inter-Territorial Language Committee. Roman script became dominant, and a supradialectal Standard Swahili acquired dictionaries, grammars and institutional authority.", "oxford-history")
      },
      {
        period: "Independence to the present",
        event: cited("Tanzanian nation-building gave Kiswahili exceptional public reach in politics and education, while Kenya developed its own multilingual balance among Swahili, English and local languages. Regional institutions, broadcasting and mobility widened its footprint. UNESCO's 2021 proclamation of 7 July as World Kiswahili Language Day gave international recognition to that modern role.", "unesco", "oxford-history")
      }
    ],
    contactHistory: cited("Loanwords reveal different rooms in Swahili history. Arabic is conspicuous in dini ‘religion,’ habari ‘news,’ safari ‘journey,’ wakati ‘time’ and serikali ‘government’ (the last through Arabic from Persian). Portuguese contributed items including meza ‘table,’ gereza ‘prison’ and pesa ‘money.’ German survives in a smaller layer such as shule ‘school,’ while English feeds modern technology and institutional vocabulary. Borrowing is not simple copying: sounds are adapted to Swahili's syllable patterns, and nouns enter classes. Arabic kitāb becomes kitabu/vitabu; English ‘bank’ becomes benki, commonly class 9/10. Meanwhile contact with neighboring African languages and multilingual urban speech continues, often less visibly documented than overseas loans.", "dd-complete", "wikipedia"),
    standardization: cited("Standard Swahili is largely based on Kiunguja, especially the speech associated with Zanzibar Town, but it is an institutional compromise rather than a transcript of one community's conversation. Mission presses and colonial committees made spelling, vocabulary and grammar choices; post-independence Tanzanian bodies, universities, schools, broadcasters and writers developed the standard further. Standardization increased access across borders, but it also gave some forms more prestige than older literary dialects such as Kiamu or local forms such as Kimvita. Learners should master the standard because it unlocks education and media, then listen without treating every regional departure as an error.", "oxford-history", "wikipedia")
  },

  variants: {
    overview: cited("‘Swahili’ covers a standard and a dialect continuum, plus contact varieties used far inland. Variation touches pronunciation, vocabulary, morphology and conversational style. Country labels are only a first approximation: coastal Kenyan speech differs internally, Zanzibar contains more than one variety, and urban youth registers move rapidly through music and social media. Start with the standard, but label recordings by place and setting so variation becomes evidence rather than noise.", "wikipedia", "oxford-history"),
    items: [
      { name: "Kiunguja and Standard Swahili", note: cited("Kiunguja is associated with Zanzibar City and strongly shaped the modern standard. Actual Zanzibari conversation still has local vocabulary, reduction and rhythm that a careful standard speaker may not reproduce.", "wikipedia", "oxford-history") },
      { name: "Kimvita", note: cited("The Mombasa variety belongs to the northern dialect zone and carries its own coastal identity and lexical preferences. Kenyan media Swahili should not automatically be equated with traditional Kimvita.", "wikipedia") },
      { name: "Kiamu", note: cited("The Lamu variety has particular importance in classical poetry and older literary traditions. Reading it may require dialect vocabulary and familiarity with Arabic-script manuscripts or scholarly transliteration.", "wikipedia") },
      { name: "Tanzanian urban speech", note: cited("Dar es Salaam conversation ranges from careful standard language to relaxed colloquial speech and youth styles. Forms such as mambo/poa belong to a social repertoire that textbooks centered on habari or hujambo may underrepresent.", "dd-phrases", "dd-hello") },
      { name: "Kenyan urban Swahili and Sheng", note: "Kenyan Swahili coexists with English and many Kenyan languages. Sheng is a changing urban youth code with Swahili grammatical and lexical material among several sources; it is not simply ‘bad Swahili’ and should not be used as a synonym for all colloquial Kenyan speech." },
      { name: "Congo Swahili", note: cited("Eastern Democratic Republic of the Congo contains a broad set of inland Swahili varieties, often grouped under Congo Swahili, shaped by regional languages and histories. Some are substantially different from the East African coastal standard in sound, vocabulary and grammar.", "wikipedia") }
    ]
  },

  pronunciation: {
    overview: cited("Standard spelling gives a reliable first map: five written vowels correspond to five basic vowel qualities, most consonants are consistent, and stress normally falls on the penultimate syllable. The challenge is not decoding but keeping vowels full, coordinating prenasalized consonants and hearing where everyday speech compresses careful forms. Record whole phrases; isolated word perfection will not teach the buoyant rhythm listeners recognize.", "wikipedia", "dd-complete"),
    script: "Latin alphabet",
    soundSystem: cited("The vowels a, e, i, o, u are broadly like those in Spanish or Italian and are not routinely reduced to English schwa: baba ‘father,’ bebea ‘carry on the back,’ bidi ‘effort,’ boma ‘enclosure,’ bubu ‘mute person.’ Consonant spellings sh and ch resemble English ‘ship’ and ‘church’; ny is like the middle of ‘canyon.’ Swahili distinguishes ng' /ŋ/ as in ng'ombe ‘cow’ from sequences written ng, while dh, th, gh and kh occur especially in Arabic-origin vocabulary and vary among speakers. Doubled vowels belong to separate syllabic timing or historical sequences rather than an English-style spelling flourish.", "wikipedia", "dd-complete"),
    prosody: cited("Stress generally lands on the next-to-last syllable: ki-TA-bu ‘book,’ wa-TA-ka ‘they will want,’ ni-na-ku-PEN-da ‘I love you.’ A final clitic or suffix can shift the rhythm. Unlike many Bantu languages, Standard Swahili is not lexical-tone based, so pitch does not normally distinguish dictionary meanings. Intonation still matters: ndiyo? with a questioning rise seeks confirmation, while a firm ndiyo answers ‘yes.’ In connected speech, focus and emotion reshape the contour without changing the underlying word.", "wikipedia", "wals"),
    learnerTraps: [
      "Reducing unstressed vowels as in English, turning every clear a/e/i/o/u into an indistinct central vowel.",
      "Pronouncing every written r as a heavy English r rather than listening for the local tap or trill.",
      "Confusing ng'ombe with an n-plus-g sequence; ng' marks the velar nasal sound /ŋ/.",
      "Adding stress to the first syllable of long words instead of finding the penultimate syllable.",
      "Copying one regional realization of Arabic-origin dh, th, gh or kh and assuming all speakers use it."
    ],
    sampleWords: [
      { original: "Kiswahili", translation: "the Swahili language", note: "ki-swa-HI-li: the penultimate syllable carries the normal stress." },
      { original: "ng'ombe", translation: "cow/cattle", note: "The apostrophe separates the single /ŋ/ sound from spellings with /ŋg/." },
      { original: "chakula", translation: "food", note: "ch sounds like English ‘ch’; keep all three vowels audible: cha-KU-la." },
      { original: "dhahabu", translation: "gold", note: "The Arabic-origin dh may be dental in careful speech but has regional realizations; listen before imitating." },
      { original: "kondoo", translation: "sheep", note: "The written oo spans a long or two-vowel sequence historically created by consonant loss; do not collapse it to the vowel of English ‘book.’" },
      { original: "nyanya", translation: "tomato; also grandmother in another noun-class analysis/context", note: "Both ny sequences use the palatal nasal heard in English ‘canyon’; context and agreement help disambiguate meanings." }
    ]
  },

  writing: {
    overview: cited("Contemporary Swahili is written in a relatively phonemic Latin orthography: once you know the digraphs, unfamiliar words are usually pronounceable. But Swahili also has an older Ajami tradition, adapting Arabic script for poetry, religious writing and correspondence. Romanization was not the start of Swahili literacy; it was a shift in technology, institutions and readership. Modern learners will live mostly in Latin script, while Ajami matters for intellectual history and specialist reading.", "oxford-history", "wikipedia"),
    primaryScript: "Latin alphabet",
    romanization: cited("The everyday Latin spelling is already the standard romanization. There is no competing learner transliteration system to memorize. Linguistic works may add IPA or mark morpheme boundaries—ni-li-ku-ona, ‘I saw you’—but ordinary writing uses nilikuona.", "dd-complete"),
    spellingNorms: cited("Words are normally spaced as independent grammatical words even when a verb contains many morphemes: watoto walikuwa wakisoma, ‘the children were reading.’ Verb prefixes and extensions are written together. The infinitive marker ku- attaches to the root (kusoma ‘to read’), and locative -ni attaches to nouns (nyumbani ‘at home’). Proper names are capitalized; language names retain their class prefix, hence Kiswahili and Kiingereza. An apostrophe in ng' prevents ambiguity, but casual digital writing may omit it.", "dd-complete", "dd-reference"),
    styleNotes: [
      cited("Formal prose favors standardized vocabulary, explicit connective phrases and controlled agreement. News is an excellent model, but its compressed headlines and institutional terms do not sound like a relaxed conversation.", "oxford-history"),
      "Punctuation broadly follows international Latin-script practice. In dialogue and messaging, speakers also use repeated letters, emoji and code-switching to represent emphasis and stance.",
      cited("Older poetry may use dialect forms, archaic vocabulary and Ajami spelling. Treat it as a distinct reading apprenticeship, not proof that your modern dictionary is defective.", "wikipedia"),
      "Apostrophes and diacritics in names borrowed from Arabic are not wholly uniform. Follow the spelling preferred by the person, publication or institution concerned."
    ]
  },

  grammar: {
    overview: cited("Swahili grammar is beautifully architectural. Nouns belong to classes; those classes send agreement markers onto adjectives, demonstratives, possessives and verbs. Verbs assemble subject, tense/aspect, object and derivational meaning around a root. The pieces are regular enough to analyze, but fluent comprehension requires recognizing the whole before consciously naming each block.", "dd-classes", "wikipedia", "dd-reference"),
    typologicalProfile: cited("Swahili is mainly agglutinative: grammatical meanings tend to appear as identifiable affixes strung together. Its neutral clause order is subject–verb–object, modifiers usually follow nouns, and subject information is obligatorily represented on most finite verbs even when no separate noun or pronoun appears. There is no masculine/feminine grammatical gender and no case declension comparable to Latin or Russian; noun classes and verbal marking do much of the relational work.", "wals", "dd-complete"),
    morphology: cited("A practical verb template is subject prefix + tense/aspect/negative material + object prefix + root + extensions + final vowel. In nitakupikia, ni- is ‘I,’ -ta- future, -ku- ‘you,’ -pik- ‘cook,’ -i- applicative ‘for,’ and -a the final vowel: ‘I will cook for you.’ Not every slot appears, and negatives reorganize the pattern. Nouns likewise combine class prefixes with stems: m-tu/wa-tu ‘person/people,’ ki-tu/vi-tu ‘thing/things.’ The class is revealed as much by agreement as by the noun's visible prefix.", "dd-verbs", "dd-reference", "dd-classes"),
    syntax: cited("Basic order resembles English, but agreement lets speakers omit an understood subject and move constituents for topic or focus. Ninasoma kitabu means ‘I am reading a book’ without mimi ‘I.’ Kitabu ninakisoma foregrounds ‘the book’ and repeats it through object marker -ki-. Descriptions follow the noun—kitabu kizuri ‘a good book’—and relational phrases use an agreeing form of -a: kitabu cha Amina ‘Amina's book,’ vitabu vya Amina ‘Amina's books.’", "wals", "wikipedia"),
    advancedPainPoints: [
      "Choosing agreement from a noun's grammatical class rather than translating English number or gender.",
      "Hearing tense/aspect contrasts such as -na-, -li-, -me-, -ki- and habitual hu- as discourse choices, not one-to-one English tenses.",
      "Using object markers and relative forms naturally instead of either omitting them or repeating every noun mechanically.",
      "Controlling verbal extensions—applicative, causative, passive, reciprocal and stative—when several combine.",
      "Understanding locative classes and -ni forms whose agreement changes the speaker's spatial construal.",
      "Separating standard written negation from faster, regionally variable conversational forms."
    ],
    topics: [
      {
        title: "Noun classes make agreement visible",
        body: cited("Rather than memorizing ‘eighteen genders,’ learn common singular/plural partnerships and the agreement they trigger. Class 1/2 often contains people: mtoto mdogo anaanguka, ‘the small child is falling’; watoto wadogo wanaanguka, ‘the small children are falling.’ M-/mi- class 3/4 often includes plants and elongated objects: mti huu mrefu / miti hii mirefu, ‘this tall tree / these tall trees.’ Semantic tendencies help, but agreement is the final evidence.", "dd-classes", "wikipedia"),
        example: "Watoto wawili wazuri wamefika.",
        exampleTranslation: "Two good children have arrived. (wa- agreement recurs across the phrase and verb.)"
      },
      {
        title: "The verb is a compact sentence",
        body: cited("Finite verbs normally identify their subject and tense/aspect before the root. Ninaandika divides as ni-na-andika, ‘I am writing’; uliandika is u-li-andika, ‘you wrote’; wataandika is wa-ta-andika, ‘they will write.’ An object marker fits before the root: ninakuona, ni-na-ku-ona, ‘I see you.’ Drill one root across a grid so the slots become expectations rather than arithmetic.", "dd-verbs", "dd-reference"),
        example: "Tutawaonyesha picha kesho.",
        exampleTranslation: "We will show them the pictures tomorrow. (tu-ta-wa-onyesha = we–future–them–show.)"
      },
      {
        title: "Tense and aspect choose a viewpoint",
        body: cited("The marker -li- locates a completed past event, -na- presents an ongoing/current situation, and -me- commonly presents a resulting state or recent completion. Thus alifika is ‘he/she arrived,’ anafika ‘he/she is arriving/arrives,’ and amefika ‘he/she has arrived/is now here.’ The -ki- form often sets a simultaneous or conditional frame: akifika, tutaanza, ‘when/if he arrives, we will begin.’ Context matters more than English labels.", "swahili-grammar", "dd-reference"),
        example: "Nilipofika, walikuwa wameanza kula.",
        exampleTranslation: "When I arrived, they had begun eating."
      },
      {
        title: "Negation changes more than one prefix",
        body: cited("Present-tense negatives combine a negative subject form with a final -i: ninasoma ‘I am reading’ becomes sisomi ‘I am not reading’; anasoma becomes hasomi. Past and future keep markers: hakusoma ‘he/she did not read,’ hatasoma ‘he/she will not read.’ The negative subjunctive uses -si-: usisahau, ‘do not forget.’ Learn positive and negative sentences as paired rhythms.", "swahili-grammar", "dd-reference"),
        example: "Hatujakiona kitabu hicho.",
        exampleTranslation: "We have not yet seen that book. (-ja- adds the sense ‘not yet.’)"
      },
      {
        title: "Verbal extensions redirect the action",
        body: cited("Suffixes after the root alter who benefits, causes, participates or receives the action. From -soma ‘read/study’ come -somea ‘read for/to,’ -somesha ‘teach, cause to study,’ and -someka ‘be readable.’ With -penda ‘love,’ pendana is ‘love one another’ and pendwa ‘be loved.’ These are productive grammar, not just dictionary accidents.", "swahili-grammar", "dd-verbs"),
        example: "Mwalimu aliwasomea watoto hadithi.",
        exampleTranslation: "The teacher read the children a story. (The applicative -e- adds the beneficiary.)"
      },
      {
        title: "Relative clauses agree with their head",
        body: cited("Relative meaning can be built inside the verb or with the invariable relative strategy using ambaye and its class forms. Mtu anayepika is ‘the person who is cooking,’ while kitabu nilichonunua is ‘the book that I bought’: -cho- agrees with class-7 kitabu. In speech, ambaye forms can feel easier; integrated relatives are common and worth learning as complete chunks.", "swahili-grammar", "dd-reference"),
        example: "Vitabu tulivyonunua jana vimepotea.",
        exampleTranslation: "The books that we bought yesterday have disappeared."
      },
      {
        title: "Location is a grammatical perspective",
        body: cited("Adding -ni creates many locative expressions: nyumba ‘house,’ nyumbani ‘at/to home’; meza ‘table,’ mezani ‘on/at the table.’ Swahili's locative classes can distinguish a specific place (pa-), a broader direction or area (ku-) and an inside space (mu-), though everyday usage and dialects do not always mirror tidy textbook tables. The choice controls agreement: hapa pana watu ‘there are people here.’", "dd-reference", "wals"),
        example: "Chumbani mna giza, lakini nje kuna mwanga.",
        exampleTranslation: "Inside the room it is dark, but outside there is light."
      },
      {
        title: "The subjunctive handles wishes and polite action",
        body: cited("A final -e often marks the subjunctive after requests, purpose, suggestion or desire: twende, ‘let us go’; nataka usome, ‘I want you to read’; aje kesho, ‘let him/her come tomorrow.’ This form is everywhere in useful conversation. The negative inserts -si-: tusiende, ‘let us not go.’", "swahili-grammar", "dd-verbs"),
        example: "Tafadhali uniambie ukifika salama.",
        exampleTranslation: "Please tell me when you arrive safely."
      }
    ]
  },

  whereSpoken: {
    overview: cited("Swahili's geography is a set of overlapping zones, not a single block on a map. The coast is its historical heart; Tanzania gives it perhaps its deepest national public reach; Kenya sustains both standard and vibrant urban repertoires; Uganda, Rwanda, Burundi and eastern Congo use it in different institutional and community roles. Migration, broadcasting, regional organizations and education carry it farther through Africa and the diaspora.", "unesco", "wikipedia"),
    regions: [
      { place: "Tanzania and Zanzibar", note: cited("Kiswahili is central to national public life and widely used across ethnolinguistic backgrounds. Zanzibar is historically crucial, but mainland urban and regional speech has its own authority and diversity.", "unesco", "dd-complete") },
      { place: "Kenya", note: cited("Swahili is a national and official language alongside English and interacts continually with Kenyan languages. Coastal heritage varieties, school Standard Swahili, broadcast speech and multilingual urban styles should be distinguished.", "wikipedia", "dd-complete") },
      { place: "Uganda, Rwanda and Burundi", note: cited("Swahili functions as a regional language with expanding institutional importance, but individual proficiency and everyday use vary by locality, generation and professional network.", "unesco", "wikipedia") },
      { place: "Eastern Democratic Republic of the Congo", note: cited("Regional Swahili varieties serve large populations across a wide inland zone. Their histories and forms differ enough that coastally trained learners need dedicated exposure rather than expecting the standard alone to cover every conversation.", "wikipedia") },
      { place: "Northern Mozambique, Somalia and Indian Ocean islands", note: cited("Swahili-related coastal varieties and communities extend south and north of the best-known Tanzania–Kenya center. Classification boundaries between a ‘Swahili dialect’ and a distinct Sabaki language can depend on linguistic and identity criteria.", "glottolog", "wikipedia") },
      { place: "Diaspora and international institutions", note: cited("Universities, media, migration and pan-African cultural movements give Kiswahili global audiences. UNESCO's annual language day frames it as a language of dialogue and multilingual inclusion rather than merely a travel tool.", "unesco") }
    ]
  },

  difficulty: {
    label: "Moderate",
    overview: cited("For an English speaker, Swahili combines a gentle sound-to-spelling relationship with a grammatical system that is unfamiliar but patterned. The question is not whether it is ‘easy’ in the abstract. Basic social conversation can arrive quickly; accurate agreement and effortless listening across regions take sustained work. Learners who enjoy systems often find its transparent morphology satisfying.", "dd-why", "dd-learn"),
    easierAspects: [
      "Five stable vowels and a largely predictable spelling system make reading aloud accessible early.",
      "Verb affixes occupy recurring slots, and irregular verbs are fewer than in many familiar European languages.",
      "Basic subject–verb–object order gives English speakers a usable first sentence frame.",
      "No articles, grammatical masculine/feminine gender or large case-declension system must be memorized.",
      "A large media ecosystem and many second-language speakers make communicative practice realistic."
    ],
    hardAspects: [
      "Noun classes require agreement across verbs, adjectives, demonstratives, possessives and relatives.",
      "Dense verbs must be heard as wholes while the listener tracks several morphemes at conversational speed.",
      "Tense/aspect forms rarely map perfectly onto English tense labels.",
      "Textbook standard, coastal dialects, inland varieties and urban slang can sound strikingly different.",
      "Greeting and respect routines demand social judgment as well as vocabulary.",
      "Advanced vocabulary spans inherited Bantu roots, old contact layers and modern coined terminology."
    ],
    plateauRisks: [
      "Staying in hospitality or tourist exchanges where predictable questions hide weak narrative comprehension.",
      "Memorizing noun-class tables without attaching each noun to several real agreement phrases.",
      "Reading news only and developing no ear for relaxed, turn-taking conversation.",
      "Using one all-purpose greeting and missing age, familiarity, religion and local style.",
      "Guessing Arabic-looking words while neglecting the much larger inherited Bantu core."
    ],
    workload: cited("A realistic first phase is several months of frequent, short sessions: build pronunciation, high-frequency verbs, class 1/2 and the most common additional class pairs, plus a repertoire of genuine greetings. Move next to hundreds of hours of comprehensible listening and corrected conversation. Advanced growth comes from reading novels and commentary, following unscripted interviews, retelling stories and receiving feedback on agreement—not from collecting ever longer word lists. Discover Discomfort's experience-based plan makes the same useful point: grammar, sentence drilling and a human tutor reinforce one another.", "dd-learn", "dd-why")
  },

  advancedLearning: {
    strategy: cited("Build a two-track routine. On the structure track, choose one verb root each week and generate tense, negative, object and extension variants; choose one noun-class pair and write descriptions with demonstratives, possessives and relatives. On the social track, collect complete turns from speakers: a greeting plus response, a polite request plus likely answer, a disagreement softened in context. Ask a tutor to mark whether a form is incorrect, merely bookish, regional or inappropriate for the relationship. That label is more valuable than a red cross. Discover Discomfort's noun-class sheet and verb examples provide raw material, but your own recordings and corrected mini-stories create retrieval speed.", "dd-learn", "dd-classes", "dd-verbs"),
    mediaPractice: cited("Use news for clarity, then deliberately leave it. Take a two-minute interview clip: listen without text, write what you hear, compare any transcript, mark verb complexes and shadow the speaker. Songs expose poetic compression and code-switching; taarab opens coastal imagery and Arabic-derived registers, while bongo flava and Kenyan music capture urban language play. Read children's stories for narrative connectors, then novels or essays for viewpoint and style. Keep regional playlists separately labeled so ‘variation’ becomes a set of recognizable voices.", "unesco", "dd-complete"),
    dictionariesAndCorpora: cited("Look up more than an English gloss. Record a noun's class and plural, a verb's root and common extensions, example collocations, register and region. Kamusi is convenient for exploration, while substantial TUKI/University of Dar es Salaam dictionaries remain valuable reference works. Search news sites for a phrase in quotation marks to see what surrounds it; compare several hits before treating frequency as grammaticality. For disputed examples, ask a proficient speaker from the relevant region and preserve their correction with context.", "kamusi", "dd-classes"),
    resources
  },

  wordsAndTexts: {
    overview: cited("Swahili words often carry a double story: their roots point toward Bantu inheritance or centuries of contact, while their prefixes show how fully they belong to Swahili grammar. Do not use etymology as a substitute for present meaning. Safari simply means a journey in Swahili, not necessarily wildlife tourism; habari literally concerns news but also opens a family of greetings. Meaning lives in contemporary phrases.", "dd-complete", "dd-phrases"),
    notableWords: [
      { term: "habari", meaning: "news; state of affairs; greeting prompt", note: cited("From Arabic khabar ‘news,’ habari appears in Habari yako? ‘How are you?’ and Habari za kazi? ‘How is work?’ The expected response describes the situation—nzuri, salama—not a literal news report.", "dd-hello", "dd-phrases") },
      { term: "safari", meaning: "journey; trip", note: cited("English narrowed this Arabic-derived Swahili word toward wildlife travel. In Swahili, safari can be an ordinary journey: Safari njema! means ‘Have a good trip.’", "dd-complete") },
      { term: "uhuru", meaning: "freedom, independence", note: "Built with abstract class-11 prefix u-, uhuru has powerful political resonance in East African independence history and remains an ordinary word for freedom." },
      { term: "kitabu / vitabu", meaning: "book / books", note: cited("An Arabic loan transformed by Bantu morphology: singular class-7 ki-, plural class-8 vi-. Its agreements make the integration visible: kitabu hiki / vitabu hivi, ‘this book / these books.’", "dd-classes", "dd-complete") },
      { term: "pole", meaning: "sympathy; gently/slowly", note: cited("Pole is offered for hardship, pain or fatigue; pole pole means ‘slowly, gently.’ It is not an automatic equivalent of English ‘sorry’ for every apology—samahani often fits requests for pardon or attention better.", "dd-phrases") },
      { term: "shwari", meaning: "calm, tranquil; all good", note: cited("A maritime word for calm conditions that also works as an informal greeting or status report. Shwari? invites an equally relaxed response in appropriate settings.", "dd-phrases") },
      { term: "harambee", meaning: "pulling together; collective effort", note: "Widely associated with Kenyan public culture and fundraising, harambee illustrates how a command or work cry can become a national civic keyword." },
      { term: "utu", meaning: "humaneness, personhood", note: "Related to mtu ‘person’ and watu ‘people,’ utu uses the abstract u- class to name human quality or humane conduct; it is cognate in concept and form with better-known southern African ubuntu." }
    ],
    loanwordLayers: cited("Arabic-origin vocabulary is extensive but uneven by domain and dialect: dini ‘religion,’ elimu ‘education/knowledge,’ sheria ‘law,’ rafiki ‘friend’ and dakika ‘minute’ sit beside inherited Bantu basics such as mtu ‘person,’ maji ‘water,’ kula ‘eat’ and kwenda ‘go.’ Persian reached Swahili both directly and through Arabic in items such as serikali ‘government.’ Portuguese left meza, pesa and gereza; German is associated with shule; English continues to supply and inspire terms such as kompyuta. Speakers also create new words through Swahili resources, and institutions debate terminology for science and technology. Borrowing demonstrates adaptability, not lexical deficiency.", "dd-complete", "unesco"),
    idioms: [
      { original: "Haraka haraka haina baraka.", translation: "Hurry, hurry has no blessing.", note: "A warning that rushing spoils the result; repetition gives the proverb its memorable beat." },
      { original: "Haba na haba hujaza kibaba.", translation: "Little by little fills the measure.", note: "Haba ‘a little’ accumulates until the kibaba measure is full—a fitting image for steady study or saving." },
      { original: "Asiyefunzwa na mamaye hufunzwa na ulimwengu.", translation: "One who is not taught by their mother is taught by the world.", note: "The integrated relative asiyefunzwa means ‘one who is not taught’; the proverb contrasts early guidance with harsher experience." },
      { original: "Mgeni njoo, mwenyeji apone.", translation: "Let the guest come so the host may benefit/recover.", note: "Often used playfully around hospitality: a guest's arrival can bring special food or welcome changes that the household also enjoys." },
      { original: "Samaki mkunje angali mbichi.", translation: "Bend the fish while it is still fresh.", note: "A proverb about forming habits or teaching while someone is young, comparable in function—not imagery—to ‘as the twig is bent.’" }
    ],
    textGenres: [
      "utenzi and other classical poetic forms",
      "taarab lyrics and coastal song traditions",
      "riwaya (novels), short stories and literary essays",
      "methali (proverbs) and oral narrative",
      "broadcast news, interviews and political speeches",
      "bongo flava, Kenyan popular music and spoken-word performance",
      "sermons, religious teaching and devotional writing",
      "social-media comedy, messaging and multilingual urban commentary"
    ]
  },

  relationships: {
    overview: cited("Swahili belongs genetically to the Sabaki group of Bantu languages. That fact explains the noun classes, verb architecture and much basic vocabulary. Arabic, Persian, Portuguese, German and English belong elsewhere on the family tree; their contribution is contact. Keeping genealogy and borrowing separate allows a richer picture: Swahili is both deeply Bantu and deeply connected to Indian Ocean and colonial histories.", "glottolog", "oxford-history", "dd-complete"),
    languages: relatedLanguages
  },
  culturalNotes: "A good Swahili conversation begins before the ‘information’ begins. Greetings acknowledge age, work, family, health and the time of day; moving too quickly to a request can sound abrupt. Shikamoo, conventionally offered to an elder, invites marahaba, while peers may trade habari, mambo or other locally appropriate openings. None is a magic password for all East Africa. Islamic greetings are ordinary in many Muslim coastal settings but are socially situated. Swahili culture is equally too broad to reduce to greetings: it includes centuries of manuscript poetry, architecture and maritime life, inland histories, Tanzanian nation-building, Kenyan multilingual cities, Congolese regional worlds, comedy, journalism, football talk and new digital terminology. Approach each source with a place, generation and genre attached. That habit prevents the standard language from becoming a stereotype of its speakers.",
  resources,
  relatedLanguages,
  phrases: [
    { original: "Habari yako?", translation: "How are you? / How are things with you?", literalMeaning: "Your news?", usageNote: "A versatile singular greeting; Habari zenu? addresses several people." },
    { original: "Mambo vipi? — Poa!", translation: "How's it going? — Cool/good!", literalMeaning: "How are matters? — Cool!", usageNote: "Casual, especially among peers; do not use it as your only greeting everywhere." },
    { original: "Shikamoo. — Marahaba.", translation: "My respects. — I accept/acknowledge them.", usageNote: "A conventional respect exchange with someone notably older; regional and family practice varies." },
    { original: "Asante sana.", translation: "Thank you very much.", usageNote: "Asante is singular/general thanks; asanteni can thank several people or add plural politeness." },
    { original: "Samahani, naomba kuuliza…", translation: "Excuse me, I'd like to ask…", literalMeaning: "Pardon, I request to ask…", usageNote: "A useful polite runway before a question." },
    { original: "Sijaelewa.", translation: "I haven't understood.", literalMeaning: "I have not yet understood.", usageNote: "More precise than claiming you understand; -ja- conveys ‘not yet.’" },
    { original: "Unaweza kusema tena, pole pole?", translation: "Can you say it again, slowly?", usageNote: "Pole pole means slowly/gently; keep both words." },
    { original: "Neno hili lina maana gani?", translation: "What does this word mean?", literalMeaning: "This word has what meaning?", usageNote: "Hili and lina agree with class-5 neno." },
    { original: "Ninajifunza Kiswahili.", translation: "I'm learning Swahili.", literalMeaning: "I am teaching myself Swahili.", usageNote: "The reflexive -ji- in kujifunza gives the sense ‘learn/teach oneself.’" },
    { original: "Ningependa chai bila sukari.", translation: "I would like tea without sugar.", usageNote: "Ningependa is softer than nataka ‘I want.’" },
    { original: "Bei ni shilingi ngapi?", translation: "How many shillings is the price?", usageNote: "A neutral way to ask the price; shingapi is a common colloquial contraction in some settings." },
    { original: "Tutaonana kesho.", translation: "We'll see each other tomorrow.", usageNote: "A natural ‘see you tomorrow’; -on- plus reciprocal -an- gives ‘see one another.’" },
    { original: "Safari njema!", translation: "Have a good journey!", literalMeaning: "Good journey!", usageNote: "Suitable for any trip, not only a wildlife safari." },
    { original: "Hamna shida.", translation: "No problem.", literalMeaning: "There is no problem.", usageNote: "Common colloquial reassurance; hakuna shida is the fuller standard-shaped alternative." }
  ],
  sources,
  seo: {
    title: "Swahili (Kiswahili): Language, Grammar and Culture Guide",
    description: "A detailed, source-backed guide to Kiswahili: its Bantu roots, coastal history, dialects, pronunciation, noun classes, verb grammar, social greetings, literature and learning resources."
  }
};
