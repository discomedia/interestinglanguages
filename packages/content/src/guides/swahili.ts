import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const sources = [
  { id: "dd-complete", title: "Complete Guide to Swahili / Kiswahili", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/kiswahili-swahili-complete-guide/", accessedAt: "2026-07-18" },
  { id: "dd-learn", title: "How to Learn Swahili Quickly — How We'd Do It Again", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/how-to-learn-swahili/", accessedAt: "2026-07-18" },
  { id: "dd-phrases", title: "Swahili Phrases and Words for Tanzania and Kenya", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/swahili-everyday-words-and-phrases/", accessedAt: "2026-07-18" },
  { id: "dd-hello", title: "Hello in Swahili — Eight Simple Greetings That Aren't Jambo", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/hello-in-swahili/", accessedAt: "2026-07-18" },
  { id: "dd-classes", title: "Swahili Noun Classes — Ultimate Cheat Sheet", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/swahili-noun-classes-cheat-sheet/", accessedAt: "2026-07-18" },
  { id: "dd-verbs", title: "Ultimate List of 200+ Swahili Verbs Plus Example Sentences", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/200-plus-swahili-verbs-examples/", accessedAt: "2026-07-18" },
  { id: "dd-why", title: "Why Learn Swahili and How Hard Is Swahili?", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/learn-swahili-plan/", accessedAt: "2026-07-18" },
  { id: "dd-reference", title: "Swahili Grammar Reference Cheat Sheet", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/wp-content/uploads/2019/07/Discover-Discomfort-Swahili-Grammar-Reference.pdf", accessedAt: "2026-07-18" },
  { id: "unesco", title: "World Kiswahili Language Day", publisher: "UNESCO", url: "https://www.unesco.org/en/days/kiswahili-language", accessedAt: "2026-07-18" },
  { id: "oxford-history", title: "History of the Standard Swahili Language", publisher: "Oxford Research Encyclopedia of African History", url: "https://www.history.msstate.edu/sites/www.history.msstate.edu/files/2024-09/History%20of%20Standard%20Swahili.pdf", publishedAt: "2024-08-22", accessedAt: "2026-07-18" },
  { id: "glottolog", title: "Swahili", publisher: "Glottolog 5.2", url: "https://glottolog.org/resource/languoid/id/swah1253", accessedAt: "2026-07-18" },
  { id: "wals", title: "Swahili", publisher: "World Atlas of Language Structures Online", url: "https://wals.info/languoid/lect/wals_code_swa", accessedAt: "2026-07-18" },
  { id: "kamusi", title: "Kamusi: The Global Online Living Dictionary", publisher: "Kamusi Project International", url: "https://www.kamusi.org/", accessedAt: "2026-07-18" },
  { id: "wikipedia", title: "Swahili language", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Swahili_language", accessedAt: "2026-07-18" },
  { id: "swahili-grammar", title: "Swahili grammar", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Swahili_grammar", accessedAt: "2026-07-18" }
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
  summary: "Swahili connects communities across East and Central Africa. Its Bantu grammar carries centuries of coastal history into everyday conversation, classrooms, music, literature, news, and online life.",
  family: "Niger-Congo, Atlantic-Congo, Bantu (Sabaki)",
  macroRegion: "East and Central Africa",
  primaryScript: "Latin; historically also Arabic-derived Ajami",
  difficultyLabel: "Moderate",
  learnerHook: "You can read Swahili spelling quite quickly and start building long verbs from small, regular pieces. Noun-class agreement, greeting customs, and regional voices then give you plenty to explore.",
  hero: {
    imageAlt: "Kiswahili text and conversation across the East African coast.",
    callToActionLabel: "Explore Kiswahili"
  },
  classification: "A Northeast Coast Bantu language in the Sabaki group and a major regional lingua franca",
  speakerCommunity: "Swahili belongs to many different communities. Some people grow up speaking a coastal variety at home, while millions more learn it at school or use it beside another home language in work, trade, government, and city life. UNESCO describes a broad community of more than 200 million speakers, but that total includes people with very different levels and kinds of fluency.",
  facts: [
    { label: "Autonym", value: "Kiswahili" },
    { label: "Family", value: "Niger-Congo → Bantu → Sabaki" },
    { label: "Core area", value: "Tanzania, Kenya and the East African coast" },
    { label: "Writing", value: "Latin alphabet; older Ajami traditions" },
    { label: "Sound profile", value: "Five vowels; usually penultimate stress" },
    { label: "Global recognition", value: "World Kiswahili Language Day: 7 July" }
  ],
  learnerOverview: "Standard Swahili gives you a practical base for education, news, formal writing, and conversation across borders. Its long-looking words soon become readable: ni-na-ku-penda combines “I,” present time, “you,” and the root “love” to make ninakupenda, “I love you.” The same agreement system appears across watoto wawili wazuri wamefika, “two good children have arrived,” where several words echo the wa- class of watoto.\n\nGrammar is only half the story. Friends in Dar es Salaam may greet each other with Mambo? and Poa!, while a younger person may greet an elder with Shikamoo and hear Marahaba in reply.\n\nLearn the standard first, then listen to speakers from the places and communities that matter to you so you can hear regional forms as real Swahili rather than mistakes.",

  origins: {
    overview: cited("Swahili grew among Bantu-speaking communities on the East African coast. Linguists place it in the Sabaki branch with Comorian, Mijikenda, and Pokomo, and its grammar and most basic vocabulary come from that African inheritance. Coastal communities also traded across the Indian Ocean for centuries, so Arabic, Persian, South Asian, Portuguese, and later European contact added new words and cultural connections.\n\nThose borrowed words did not replace the language's Bantu structure. Arabic kitāb became Swahili kitabu, “book,” then took the Bantu plural vitabu and agreements such as vitabu hivi vizuri, “these good books.” Swahili is both deeply African and deeply connected to the wider Indian Ocean world.", "glottolog", "oxford-history", "wikipedia"),
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
    contactHistory: cited("You can hear several periods of contact in everyday vocabulary. Arabic contributed dini, “religion,” habari, “news,” safari, “journey,” and many other words; Portuguese contributed meza, “table,” and pesa, “money”; German is associated with shule, “school”; and English keeps supplying technology and institutional terms. Speakers reshape every loan to fit Swahili sounds and grammar, just as English “bank” becomes benki and joins a noun class.\n\nNeighboring African languages have also influenced regional Swahili, and multilingual city speakers continue to create new forms. Their influence is sometimes less visible in popular histories than the older overseas loans, but it matters just as much to modern speech.", "dd-complete", "wikipedia"),
    standardization: cited("Standard Swahili grew from several rounds of decisions by missionaries, colonial committees, schools, universities, broadcasters, writers, and post-independence language bodies. It draws heavily on Kiunguja, the variety associated with Zanzibar City, but it does not reproduce every feature of everyday Zanzibari conversation.\n\nThe standard gives learners access to education, news, and communication across borders. It also carries more institutional prestige than some older coastal varieties, so learn it as a common tool without calling Kimvita, Kiamu, urban speech, or other regional forms broken Swahili.", "oxford-history", "wikipedia")
  },

  variants: {
    overview: cited("Standard Swahili is the best common starting point, but it is not the only real Swahili. Coastal dialects, inland varieties, national media styles, and fast-changing urban registers differ in sound, vocabulary, grammar, and conversational habits. Label recordings by place, speaker, and setting so you can learn the pattern behind the variation.", "wikipedia", "oxford-history"),
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
    overview: cited("Standard Swahili spelling tells you a great deal about pronunciation. The five written vowels stay clear, most consonants behave consistently, and stress usually falls on the next-to-last syllable. Your main job is to keep the vowels full and copy the rhythm of whole phrases instead of polishing isolated words.", "wikipedia", "dd-complete"),
    script: "Latin alphabet",
    soundSystem: cited("Swahili uses five basic vowels, a, e, i, o, and u, which stay much clearer than unstressed English vowels. The spellings sh and ch sound much like the beginnings of English ship and church, while ny resembles the middle of canyon. The apostrophe separates ng' /ŋ/, as in ng'ombe, “cow,” from other ng sequences, and speakers vary in how they pronounce Arabic-origin dh, th, gh, and kh.", "wikipedia", "dd-complete"),
    prosody: cited("Stress usually falls on the next-to-last syllable: ki-TA-bu, “book,” and ni-na-ku-PEN-da, “I love you.” Standard Swahili does not use lexical tone to separate dictionary meanings, unlike many other Bantu languages.\n\nPitch still carries questions, emphasis, and emotion, so copy the melody of ndiyo? as well as the consonants and vowels.", "wikipedia", "wals"),
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
    overview: cited("Modern Swahili uses a Latin alphabet whose spelling follows pronunciation closely. Earlier writers also adapted Arabic script, often called Ajami, for poetry, religious works, and correspondence. Most learners can focus on Latin script while remembering that Swahili literacy began long before colonial romanization.", "oxford-history", "wikipedia"),
    primaryScript: "Latin alphabet",
    romanization: cited("The everyday Latin spelling is already the standard romanization. There is no competing learner transliteration system to memorize. Linguistic works may add IPA or mark morpheme boundaries—ni-li-ku-ona, ‘I saw you’—but ordinary writing uses nilikuona.", "dd-complete"),
    spellingNorms: cited("Writers join all parts of one verb, so ni-li-ku-ona appears as nilikuona, “I saw you.” The infinitive ku- also joins its root in kusoma, “to read,” and locative -ni joins a noun in nyumbani, “at home.” Language names keep their class prefix and a capital letter, as in Kiswahili and Kiingereza, while the apostrophe in ng' prevents a sound ambiguity.", "dd-complete", "dd-reference"),
    styleNotes: [
      cited("Formal prose favors standardized vocabulary, explicit connective phrases and controlled agreement. News is an excellent model, but its compressed headlines and institutional terms do not sound like a relaxed conversation.", "oxford-history"),
      "Punctuation broadly follows international Latin-script practice. In dialogue and messaging, speakers also use repeated letters, emoji and code-switching to represent emphasis and stance.",
      cited("Older poetry may use dialect forms, archaic vocabulary and Ajami spelling. Treat it as a distinct reading apprenticeship, not proof that your modern dictionary is defective.", "wikipedia"),
      "Apostrophes and diacritics in names borrowed from Arabic are not wholly uniform. Follow the spelling preferred by the person, publication or institution concerned."
    ]
  },

  grammar: {
    overview: cited("Swahili grammar builds meaning from pieces you can see and hear. Nouns belong to classes that control agreement on nearby words, while verbs can show the subject, time, object, and direction of an action. The patterns are regular, but fluent listeners learn to hear the whole sentence before naming every prefix.", "dd-classes", "wikipedia", "dd-reference"),
    typologicalProfile: cited("Linguists call Swahili agglutinative because it strings several meaningful prefixes and suffixes around a root. A neutral sentence usually follows subject–verb–object order, and descriptions usually follow the noun. Swahili has no masculine and feminine grammatical gender; its noun classes organize agreement in a different way.", "wals", "dd-complete"),
    morphology: cited("Think of a verb as a row of useful slots: subject, tense or aspect, object, root, extension, and final vowel. Nitakupikia means “I will cook for you” because ni- marks “I,” -ta- the future, -ku- “you,” -pik- “cook,” and the applicative ending adds “for.” Nouns also pair prefixes with stems, as in m-tu/wa-tu, “person/people,” and ki-tu/vi-tu, “thing/things.”", "dd-verbs", "dd-reference", "dd-classes"),
    syntax: cited("Basic word order looks familiar to English speakers, but agreement gives Swahili more room to move information around. Ninasoma kitabu means “I am reading a book” without a separate mimi, “I,” while Kitabu ninakisoma brings “the book” forward and repeats its class inside the verb. Descriptions follow nouns, and an agreeing form of -a links possession: kitabu cha Amina, “Amina's book,” but vitabu vya Amina, “Amina's books.”", "wals", "wikipedia"),
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
        body: cited("Learn noun classes as common singular–plural pairs and the agreement patterns they trigger. Class 1/2 often includes people, so mtoto mdogo anaanguka, “the small child is falling,” becomes watoto wadogo wanaanguka, “the small children are falling.” Meaning offers clues, but the agreement on surrounding words tells you how a noun actually behaves.", "dd-classes", "wikipedia"),
        example: "Watoto wawili wazuri wamefika.",
        exampleTranslation: "Two good children have arrived. (wa- agreement recurs across the phrase and verb.)"
      },
      {
        title: "The verb is a compact sentence",
        body: cited("A finite verb normally shows its subject and time before the root. Ninaandika breaks into ni-na-andika, “I am writing,” while uliandika means “you wrote” and wataandika means “they will write.” Add an object marker before the root and ninakuona becomes “I see you.”", "dd-verbs", "dd-reference"),
        example: "Tutawaonyesha picha kesho.",
        exampleTranslation: "We will show them the pictures tomorrow. (tu-ta-wa-onyesha = we–future–them–show.)"
      },
      {
        title: "Tense and aspect choose a viewpoint",
        body: cited("The marker -li- usually places an event in the completed past, -na- presents an ongoing or current situation, and -me- often highlights a present result. Alifika means “they arrived,” anafika “they are arriving,” and amefika “they have arrived and are now here.” The -ki- form can set a simultaneous or conditional frame, as in akifika, tutaanza, “when or if they arrive, we will begin.”", "swahili-grammar", "dd-reference"),
        example: "Nilipofika, walikuwa wameanza kula.",
        exampleTranslation: "When I arrived, they had begun eating."
      },
      {
        title: "Negation changes more than one prefix",
        body: cited("Present-tense negatives change both ends of the verb: ninasoma, “I am reading,” becomes sisomi, “I am not reading,” and anasoma becomes hasomi. Past and future negatives keep their time markers, as in hakusoma, “they did not read,” and hatasoma, “they will not read.” The negative subjunctive uses -si-, which you hear in usisahau, “don't forget.”", "swahili-grammar", "dd-reference"),
        example: "Hatujakiona kitabu hicho.",
        exampleTranslation: "We have not yet seen that book. (-ja- adds the sense ‘not yet.’)"
      },
      {
        title: "Verbal extensions redirect the action",
        body: cited("Suffixes after a verb root can add a beneficiary, cause, partner, or receiver. From -soma, “read or study,” speakers build -somea, “read for,” -somesha, “teach,” and -someka, “be readable.” These endings form a productive system, so learning them lets you understand and create more than a list of fixed verbs.", "swahili-grammar", "dd-verbs"),
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
    overview: cited("Swahili spreads across overlapping communities rather than one neat block on a map. The East African coast is its historical heart, Tanzania gives it especially deep national reach, and Kenya supports coastal, standard, and urban forms. Uganda, Rwanda, Burundi, eastern Congo, migration, broadcasting, and regional institutions extend the language much farther.", "unesco", "wikipedia"),
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
    overview: cited("English speakers often find Swahili spelling welcoming and its grammar unfamiliar but highly patterned. You can reach basic social conversation fairly quickly, but accurate agreement and easy listening across regions take much longer. The language suits learners who enjoy seeing how small pieces build larger meanings.", "dd-why", "dd-learn"),
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
    workload: cited("Spend your first few months on pronunciation, common verbs, the most useful noun-class pairs, and genuine greeting exchanges. Then add large amounts of understandable listening, regular conversation, short writing, and correction from a teacher or proficient speaker. At advanced levels, novels, commentary, unscripted interviews, and retold stories will help more than another disconnected word list.", "dd-learn", "dd-why")
  },

  advancedLearning: {
    strategy: cited("Split your practice between structure and social use. Build several sentences from one verb root or noun class, then collect complete exchanges such as a greeting and response or a polite request and likely answer. Ask a tutor whether a form is wrong, bookish, regional, or simply unsuitable for that relationship, because those labels teach you more than a red mark.", "dd-learn", "dd-classes", "dd-verbs"),
    mediaPractice: cited("Start with news because presenters speak clearly, then move into interviews, comedy, drama, and everyday video. Transcribe a short clip, mark the verb complexes, and shadow the speaker's timing before checking a transcript. Keep separate playlists for coastal speech, Tanzanian and Kenyan cities, and any inland variety you need, so regional differences become familiar voices rather than one blur.", "unesco", "dd-complete"),
    dictionariesAndCorpora: cited("Record more than an English meaning when you look up a word. Save a noun with its class and plural, a verb with common extensions, and every item with a natural phrase, region, and register. Kamusi helps with exploration, while searchable news and feedback from speakers can show whether a phrase is common, formal, local, or simply awkward.", "kamusi", "dd-classes"),
    resources
  },

  wordsAndTexts: {
    overview: cited("Swahili words often carry two stories at once: a root may come from Bantu inheritance or centuries of contact, while its prefixes show how it works in modern Swahili grammar. Etymology does not fix today's meaning, so safari means any journey rather than only a wildlife trip. Habari still means “news,” but speakers also use it to open a whole family of greetings.", "dd-complete", "dd-phrases"),
    notableWords: [
      { term: "habari", meaning: "news; state of affairs; greeting prompt", note: cited("From Arabic khabar ‘news,’ habari appears in Habari yako? ‘How are you?’\n\nYou can also ask Habari za kazi? ‘How is work?’ The expected response describes the situation—nzuri, salama—not a literal news report.", "dd-hello", "dd-phrases") },
      { term: "safari", meaning: "journey; trip", note: cited("English narrowed this Arabic-derived Swahili word toward wildlife travel. In Swahili, safari can be an ordinary journey: Safari njema! means ‘Have a good trip.’", "dd-complete") },
      { term: "uhuru", meaning: "freedom, independence", note: "Built with abstract class-11 prefix u-, uhuru has powerful political resonance in East African independence history and remains an ordinary word for freedom." },
      { term: "kitabu / vitabu", meaning: "book / books", note: cited("An Arabic loan transformed by Bantu morphology: singular class-7 ki-, plural class-8 vi-. Its agreements make the integration visible: kitabu hiki / vitabu hivi, ‘this book / these books.’", "dd-classes", "dd-complete") },
      { term: "pole", meaning: "sympathy; gently/slowly", note: cited("Pole is offered for hardship, pain or fatigue; pole pole means ‘slowly, gently.’ It is not an automatic equivalent of English ‘sorry’ for every apology—samahani often fits requests for pardon or attention better.", "dd-phrases") },
      { term: "shwari", meaning: "calm, tranquil; all good", note: cited("A maritime word for calm conditions that also works as an informal greeting or status report. Shwari? invites an equally relaxed response in appropriate settings.", "dd-phrases") },
      { term: "harambee", meaning: "pulling together; collective effort", note: "Widely associated with Kenyan public culture and fundraising, harambee illustrates how a command or work cry can become a national civic keyword." },
      { term: "utu", meaning: "humaneness, personhood", note: "Related to mtu ‘person’ and watu ‘people,’ utu uses the abstract u- class to name human quality or humane conduct; it is cognate in concept and form with better-known southern African ubuntu." }
    ],
    loanwordLayers: cited("Inherited Bantu words such as mtu, “person,” maji, “water,” kula, “eat,” and kwenda, “go,” form the language's basic core. Arabic-origin dini, “religion,” elimu, “education or knowledge,” sheria, “law,” and rafiki, “friend,” sit beside Portuguese meza and pesa, German-associated shule, and newer English loans such as kompyuta. Speakers and language institutions also create Swahili terms for science and technology, so borrowing is only one part of how the vocabulary grows.", "dd-complete", "unesco"),
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
    overview: cited("Swahili belongs to the Sabaki group of Bantu languages, which explains its noun classes, verb structure, and much of its basic vocabulary. Arabic, Persian, Portuguese, German, and English belong to other families and influenced Swahili through contact instead. Keeping ancestry and borrowing separate shows how the language can be thoroughly Bantu and thoroughly connected to Indian Ocean and colonial histories at the same time.", "glottolog", "oxford-history", "dd-complete"),
    languages: relatedLanguages
  },
  culturalNotes: "Swahili speakers often spend time on greetings before they move to the practical reason for a conversation. Age, familiarity, religion, region, work, family, health, and time of day can all shape the exchange, so no single greeting works as a magic password across East Africa. The language also lives far beyond greetings in manuscript poetry, taarab and popular music, novels, comedy, journalism, football talk, film, sermons, city slang, and everyday messaging.",
  resources,
  relatedLanguages,
  phrases: [
    { original: "Habari yako?", translation: "How are you? / How are things with you?", literalMeaning: "Your news?", usageNote: "A versatile singular greeting; Habari zenu? addresses several people." },
    { original: "Mambo vipi? — Poa!", translation: "How's it going? — Cool/good!", literalMeaning: "How are matters? — Cool!", usageNote: "Casual, especially among peers; do not use it as your only greeting everywhere." },
    { original: "Shikamoo. — Marahaba.", translation: "My respects. — I accept/acknowledge them.", usageNote: "A conventional respect exchange with someone notably older; regional and family practice varies." },
    { original: "Asante sana.", translation: "Thank you very much.", usageNote: "Asante is singular/general thanks; asanteni can thank several people or add plural politeness." },
    { original: "Samahani, naomba kuuliza…", translation: "Excuse me, I'd like to ask…", literalMeaning: "Pardon, I request to ask…", usageNote: "A useful polite runway before a question." },
    { original: "Sijaelewa.", translation: "I haven't understood.", literalMeaning: "I have not yet understood.", usageNote: "More precise than claiming you understand; -ja- conveys ‘not yet.’" },
    { original: "Tafadhali sema tena polepole.", translation: "Please say it again slowly.", usageNote: "Polepole is the standard written adverb; casual signs and messages sometimes separate it for emphasis." },
    { original: "Neno hili lina maana gani?", translation: "What does this word mean?", literalMeaning: "This word has what meaning?", usageNote: "Hili and lina agree with class-5 neno." },
    { original: "Ninajifunza Kiswahili.", translation: "I'm learning Swahili.", literalMeaning: "I am teaching myself Swahili.", usageNote: "The reflexive -ji- in kujifunza gives the sense ‘learn/teach oneself.’" },
    { original: "Ningependa chai bila sukari.", translation: "I would like tea without sugar.", usageNote: "Ningependa is softer than nataka ‘I want.’" },
    { original: "Ni shilingi ngapi?", translation: "How many shillings is it?", usageNote: "Use this when the item is already clear. Bei ni gani? asks more generally, “What is the price?”" },
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
