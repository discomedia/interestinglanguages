import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Nawat",
    relationship: "Nahuan relative in El Salvador",
    explanation: cited(
      "Nawat, also called Pipil, is a Nahuan language of El Salvador. It has its own sound changes, community history, and revitalization work. Learn its name and forms from Nawat speakers before comparing them with Mexican Nahuatl.",
      "glottolog-nahuatl",
      "wiki-nahuatl"
    )
  },
  {
    name: "Classical Nahuatl",
    relationship: "Historical textual varieties",
    explanation: cited(
      "Classical Nahuatl is a name for the central Mexican language represented in many sixteenth- and seventeenth-century texts. Its written record is large. A course in those documents teaches a historical reading target, while the Chicontepec course teaches a living variety.",
      "wiki-history",
      "gdn-unam"
    )
  },
  {
    name: "Ute",
    relationship: "Distant Uto-Aztecan relative",
    explanation: cited(
      "Ute belongs to the northern part of the Uto-Aztecan family. Its relationship to Nahuatl reaches far back in the family tree. Speakers would not understand one another merely because the languages share that ancestry.",
      "glottolog-nahuatl"
    )
  },
  {
    name: "Spanish",
    relationship: "Unrelated language in five centuries of intensive contact",
    explanation: cited(
      "Spanish borrowed words for foods, plants, places, and objects from Nahuatl. Nahuatl varieties also took Spanish words and fitted them to local sounds and grammar. Speakers may switch languages in a conversation when it suits the people and topic.",
      "gdn-unam",
      "wiki-history"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const nahuatlGuide = {
  slug: "nahuatl",
  name: "Nahuatl",
  autonym: "Nawatlahtolli · Nāhuatl · Mexicano",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Nahuatl names a group of related living languages spoken across Mexico and in migrant communities. The guide centers Chicontepec speech for practical examples and treats Classical Nahuatl as a historical reading tradition.",
  family: "Uto-Aztecan, Nahuan",
  macroRegion: "Mexico and diaspora communities, especially the Huasteca and central, eastern, and western regions",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "In the Chicontepec course, nimītztlahpaloa means ‘I greet you.’ Hear how one verb identifies both people, then follow that form into a conversation.",
  hero: {
    imageAlt: "Contemporary Nahuatl writing beside community books and audio recordings, representing a living and internally diverse language.",
    callToActionLabel: "Meet Nahuatl in use"
  },
  classification: "A diverse Nahuan cluster within Uto-Aztecan, including many modern languages and historical Classical Nahuatl",
  speakerCommunity: "Nahua communities use names such as mexicano, masewaltlahtol, and nawatlahtolli for their speech. Their languages differ across towns and regions, and many speakers now live away from their family's home community.\n\nMexico's 2020 census counted 1,651,958 Nahuatl speakers aged three and over. That count records reported ability to speak; it does not count everyone with Nahua identity or partial knowledge. INALI recognizes 30 named variants, so a national total cannot describe each community's transmission.\n\nChildren learn Nahuatl at home in some towns. Elsewhere families and teachers work to restore use after Spanish-only schooling, discrimination, and migration disrupted it. Ask which town and spelling a form comes from before you repeat it.",
  facts: [
    { label: "Family", value: "Uto-Aztecan · Southern Uto-Aztecan · Nahuan" },
    { label: "Mexico census", value: "1,651,958 speakers aged 3+ (INEGI 2020)" },
    { label: "Official catalog", value: "INALI distinguishes 30 Nahuatl variants" },
    { label: "Common autonyms", value: "Nawatlahtolli, masewaltlahtol, mexicano, and regional forms" },
    { label: "Writing", value: "Multiple Latin orthographies; no single community-neutral spelling" },
    { label: "Legal position", value: "A national Indigenous language with equal validity in its territory, location, and context" }
  ],
  learnerOverview: "Start with the speech of one town. If your family speaks Nahuatl, ask which local forms they use. If you're starting without that connection, the free University of Texas and IDIEZ course teaches the variety spoken around Chicontepec, Veracruz.\n\nThe course begins with exchanges such as Piyalli, ¿quēniuhqui motōcah?—‘Hello, what is your name?’ Its reply, Na notōcah Paty, shows how a name fits into a whole sentence. Listen to the recordings before taking a word apart.\n\nOne Nahuatl verb can show who acts and who receives an action. In the same course, nimītztlahpaloa means ‘I greet you.’ The pieces become easier to hear after you know the spoken phrase.\n\nClassical Nahuatl is a separate study target for colonial documents, poetry, and the Florentine Codex. It can explain history, but its textbook forms do not stand in for a living community's conversation. Credit and compensate the people who teach you.",
  origins: {
    overview: cited(
      "Nahuatl belongs to the Nahuan branch of the Uto-Aztecan family. Nahuan languages were spoken by many communities before the Mexica empire grew. Tlaxcalans, Acolhua, Chalca, and other Nahua groups had their own histories.\n\nPeople used these languages in trade, alliances, and government. The power of Tenochtitlan gave a central variety wider reach, but it did not make all Nahua people Mexica.\n\nBefore alphabetic writing, trained readers worked with painted manuscripts, place signs, calendars, and oral explanation. After the Spanish invasion, Nahua writers adapted Latin letters for local records, wills, petitions, histories, songs, and other texts. Those writings give us Indigenous voices working under colonial constraints.",
      "wiki-nahuatl",
      "wiki-history",
      "gdn-unam"
    ),
    timeline: [
      {
        period: "Before 1200 CE",
        event: cited(
          "Nahuan-speaking groups moved and diversified within a multilingual Mesoamerica. The exact chronology and routes remain scholarly questions, but the language family long predates the Mexica empire. Contact with Otomanguean, Mixe-Zoquean, Mayan, Totonacan, and other languages contributed to the shared linguistic ecology called the Mesoamerican linguistic area.",
          "wiki-nahuatl",
          "glottolog-nahuatl"
        )
      },
      {
        period: "1200s–1521",
        event: cited(
          "Multiple Nahua city-states used related varieties. The Triple Alliance centered on Tenochtitlan expanded dramatically in the fifteenth century, giving the speech of central Mexico reach and prestige without making every subject a Nahuatl monolingual or every Nahua a Mexica.",
          "wiki-history",
          "wiki-nahuatl"
        )
      },
      {
        period: "1520s–1700s",
        event: cited(
          "Nahua authors, scribes, interpreters, and Christian institutions developed extensive alphabetic literacy. Alonso de Molina's 1555 and 1571 dictionaries and works associated with the Colegio de Santa Cruz are famous, but thousands of less celebrated local documents show Nahuatl functioning in law, government, religion, household inheritance, and historical memory.",
          "wiki-history",
          "gdn-unam"
        )
      },
      {
        period: "1800s–late 1900s",
        event: cited(
          "Nation-building and Spanish-dominant schooling often punished or stigmatized Indigenous language use. At the same time, Nahua speakers continued oral and written production, and scholars, teachers, and writers assembled grammars, stories, dictionaries, and political texts. Uneven transmission today is inseparable from these institutions, not an individual family's failure.",
          "wiki-history",
          "inali-rights"
        )
      },
      {
        period: "2003 to the present",
        event: cited(
          "Mexico's General Law of Linguistic Rights recognizes Indigenous languages and Spanish as national languages of equal validity in the relevant territory, location, and context. INALI cataloging, community writing work, university partnerships, radio, literature, digital dictionaries, and online teaching have expanded visibility, while access to services and intergenerational transmission remain uneven.",
          "inali-rights",
          "inali-catalog",
          "ut-course"
        )
      }
    ],
    contactHistory: cited(
      "Nahua communities were multilingual before Spanish arrived. Their languages developed alongside Otomanguean, Totonacan, Mixe-Zoquean, Mayan, and other languages, so not every shared pattern comes from colonial contact.\n\nSpanish rule brought new words for religion, offices, animals, and technologies. Spanish also borrowed Nahuatl words through central Mexican usage, including ancestors of English avocado, coyote, and tomato. The route of chocolate is more disputed than a short etymology suggests.\n\nToday speakers may move between Nahuatl and Spanish or fit a Spanish stem into Nahuatl grammar. That belongs to living bilingual speech, though the choices differ by town and speaker.",
      "gdn-unam",
      "online-dictionary",
      "wiki-nahuatl"
    ),
    standardization: cited(
      "No single spoken or written form covers every Nahua community. Colonial spelling often used hu for /w/, x for a sound like English sh, and tl for one consonant. It often left long vowels and the glottal sound unmarked.\n\nModern writers may use k and w, retain older c and hu, or choose other local conventions. INALI has worked with speakers on shared writing criteria while recognizing differences in speech. When you copy a text, keep its spelling and record the community and system behind it.",
      "inali-writing",
      "unicode-latin",
      "gdn-unam"
    )
  },
  variants: {
    overview: cited(
      "INALI recognizes 30 Nahuatl variants, each tied to named communities and places. Glottolog also lists many distinct Nahuatl languages. Speakers do not become one speech community just because a map groups them under one label.\n\nThe Huasteca, central Puebla, Guerrero, and other areas contain further local differences. Migrant families carry those varieties into cities and across borders. Attach every practical form in this guide to Chicontepec unless it is explicitly marked as historical Classical Nahuatl.",
      "inali-catalog",
      "inali-overview",
      "glottolog-nahuatl"
    ),
    items: [
      { name: "Huasteca varieties", note: cited("A large living cluster across parts of Hidalgo, Veracruz, and San Luis Potosí. The UT/IDIEZ course and modern IDIEZ dictionary focus specifically on Chicontepec, Veracruz, giving learners unusually coherent audio, spelling, and grammar support.", "ut-course", "online-dictionary") },
      { name: "Central Puebla and Sierra Norte varieties", note: cited("Communities across Puebla use forms often labeled masewaltlahtol or mexicano as well as Nahuatl. Town-to-town differences matter, and strong community publishing and educational traditions make local sources preferable to a generalized central standard.", "inali-catalog") },
      { name: "Guerrero and Morelos varieties", note: cited("Nahuatl is spoken in numerous communities of Guerrero and Morelos, with local sound, vocabulary, and writing practices. Regional craft, ritual, political, educational, and literary work all provide contexts beyond classroom grammar.", "inali-catalog", "glottolog-nahuatl") },
      { name: "Isthmus, western, and peripheral varieties", note: cited("Varieties in Veracruz's Isthmus, Durango, Michoacán, Jalisco, Colima, Oaxaca, and the western periphery show how misleading a single central-Mexico template can be. Some are especially vulnerable because speaker populations are small or transmission has weakened.", "inali-catalog", "glottolog-nahuatl") },
      { name: "Classical Nahuatl", note: cited("A scholarly umbrella for historical central varieties in colonial sources. Its enormous archive supports advanced reading, but pronunciation and standardized textbook spelling are reconstructions and editorial choices, not recordings of one timeless prestige voice.", "gdn-unam", "wiki-history") }
    ]
  },
  pronunciation: {
    overview: cited(
      "The Chicontepec course marks four main vowel qualities, a, e, i, and o, with a macron when a vowel is long. Many Nahuatl varieties distinguish short and long vowels, but their other sounds differ. Listen to the course's recordings before you generalize its spellings.\n\nThe letter x often sounds like English sh, and tz sounds like the end of cats. The tl sound begins like t and releases air along the sides of the tongue. The glottal sound called saltillo varies across communities and spelling systems.",
      "wiki-nahuatl",
      "ut-course",
      "unicode-latin"
    ),
    script: "Latin alphabet; examples here use macrons for long vowels and h for the Huasteca saltillo when the cited teaching system does",
    soundSystem: cited(
      "Hold a long vowel for more time than a short one. In the course, conētl ‘child’ has a long ē. The spelling helps you notice a contrast you might miss at normal speaking speed.\n\nTreat tl as one coordinated sound rather than adding a vowel between t and l. X in xōchitl sounds like sh; tz in Ximoquētza contains a compact ts sound. The course's h also participates in writing the local glottal sound.\n\nThese are listening instructions for one teaching variety. A Classical transcription or another town's spelling may lead you to a different pronunciation.",
      "ut-course",
      "gdn-unam",
      "wiki-nahuatl"
    ),
    prosody: cited(
      "Many Nahuatl descriptions place the strongest beat on the next-to-last syllable. Long vowels and local glottal sounds can make that simple rule hard to hear, and some varieties have their own patterns. A long vowel is not simply a stressed vowel.\n\nClap a recorded phrase, then repeat its vowel lengths and pauses. A whole line gives you better timing than an isolated word in a dictionary.",
      "ut-course",
      "wiki-nahuatl"
    ),
    learnerTraps: [
      "Pronouncing x as Spanish /x/ instead of checking for Nahuatl /ʃ/",
      "Ignoring vowel length because a colonial spelling omits it",
      "Turning tl into an exaggerated two-syllable sequence",
      "Assuming every written h, apostrophe, j, or saltillo represents the same realization",
      "Applying one central or Classical pronunciation to every modern community"
    ],
    sampleWords: [
      { original: "Piyalli", translation: "hello", note: "A greeting from the Chicontepec course. Hear the course audio before trying to transfer it to another community." },
      { original: "conētl", translation: "child", note: "The course pairs this independent noun with noconēuh, ‘my child.’ Long ē is marked with a macron. [Chicontepec]" },
      { original: "cōmalli", translation: "cooking griddle", note: "A Chicontepec course word with long ō and the ll spelling found in its teaching system." },
      { original: "michin", translation: "fish", note: "The course gives michimeh for a plural form. Listen for the short vowels. [Chicontepec]" },
      { original: "xōchitl", translation: "flower", note: "The course spells this word with x for a sound like English sh and ō for a long vowel. [Chicontepec]" },
      { original: "Ximoquētza", translation: "stand up", note: "A Chicontepec command with x and a long ē; imitate the recorded whole word." }
    ]
  },
  writing: {
    overview: cited(
      "Nahua readers used painted manuscripts before European alphabets arrived. These works combined place signs, names, calendars, tribute records, and images with expert oral reading. Colonial Nahua writers then made Latin letters serve town records, letters, poems, and legal claims.\n\nModern writers use Latin-based systems in books, messages, signs, captions, and teaching materials. The spelling may identify a community or a project. Record its source before changing letters to match another system.",
      "wiki-history",
      "gdn-unam",
      "inali-writing"
    ),
    primaryScript: "Latin, in several colonial, scholarly, institutional, and community orthographies",
    romanization: cited(
      "Nahuatl is already written in Latin letters, so ‘romanization’ usually means changing from one spelling system to another. A normalized Classical edition might write c/qu, hu/uh, and macrons. A modern community text may use k or w instead.\n\nAutomatic letter swaps can change a word incorrectly. Keep the original spelling beside any version you make for searching or study.",
      "gdn-unam",
      "unicode-latin"
    ),
    spellingNorms: cited(
      "INALI's writing work includes speakers, teachers, and writers from different regions. It aims for readable shared criteria while allowing local speech to differ. A text's spelling still needs a community label.\n\nUnicode can store long-vowel marks and several characters used for a glottal sound. Marks that look alike may behave differently in search. Choose the characters required by your source's system and use them consistently.",
      "inali-writing",
      "unicode-latin"
    ),
    styleNotes: [
      cited("Colonial manuscripts vary by writer and period; read paleographic forms alongside normalized forms instead of silently replacing the original.", "gdn-unam"),
      cited("Do not “correct” a community's k/w spelling into c/qu/hu merely because the latter looks more Classical.", "inali-writing"),
      cited("Write compounds and affixes according to the convention of your course or community; spaces imported from Spanish can hide Nahuatl morphology.", "ut-course"),
      cited("Use macrons and saltillo consistently when a teaching system marks them, because they can distinguish words and grammatical forms.", "unicode-latin", "ut-course")
    ]
  },
  grammar: {
    overview: cited(
      "Listen to nimītztlahpaloa, ‘I greet you,’ in the Chicontepec course. The verb carries both people: ni- points to the speaker and mītz- to the person greeted. Other pieces can add time, direction, or how an action happens.\n\nLinguists call this way of building words agglutination. A word can carry much of a sentence's meaning, but its pieces follow patterns you can practice. All practical grammar examples below come from the University of Texas and IDIEZ course for Chicontepec, Veracruz.",
      "ut-course"
    ),
    typologicalProfile: cited(
      "A verb often identifies the person acting, so speakers do not need a separate pronoun in every sentence. Na ‘I’ can still appear when someone introduces themselves or makes a contrast. The course's Na notōcah Paty means ‘My name is Paty.’\n\nWord order can change with the conversation, but the verb's markers help you track who does what. Nouns also distinguish forms used on their own from forms attached to a possessor. Learn those changes with recorded sentences instead of memorizing a single English word order.",
      "ut-course",
      "wiki-nahuatl"
    ),
    morphology: cited(
      "A noun can change when it belongs to someone. The course shows conētl ‘child’ beside noconēuh ‘my child’: no- identifies the possessor, and the noun's ending changes. That is a pattern you can hear in many family and body terms.\n\nVerbs also take prefixes. In nimītztlahpaloa, the beginning identifies ‘I’ and ‘you’ before the greeting verb. Later lessons add endings for time and number, so it helps to keep a full spoken example beside each new form.",
      "ut-course"
    ),
    syntax: cited(
      "Questions can begin with a question word while the verb keeps its ordinary person markers. ¿Quēniuhqui motōcah? asks ‘What is your name?’ The reply uses a possessive form: Na notōcah Paty.\n\nA negative phrase uses a local negative word. In one Chicontepec dialogue, Axcanah nihueliz mōztla means ‘I won't be able to tomorrow.’ Other Nahuatl varieties may choose another negative word, so a Classical textbook answer should not replace the course recording.",
      "ut-course"
    ),
    advancedPainPoints: [
      "Keeping person and object markers automatic while speaking",
      "Recognizing a possessed noun when its independent ending changes",
      "Hearing long vowels and the local glottal sound in fast speech",
      "Following future and past forms through longer verbs",
      "Reading colonial spellings that omit length and saltillo",
      "Using address forms in the relationships where speakers use them"
    ],
    topics: [
      {
        title: "A verb can name both people",
        body: cited("In nimītztlahpaloa, ni- points to ‘I’ and mītz- to ‘you.’ The course translates the whole form as ‘I greet you.’ Hear it in a greeting exchange before separating the pieces.", "ut-unit-11"),
        example: "Nimītztlahpaloa.",
        exampleTranslation: "I greet you. [Chicontepec course]"
      },
      {
        title: "Possession reshapes a noun",
        body: cited("Conētl means ‘child’ as an independent noun in the course. Noconēuh means ‘my child’: no- adds the possessor, and the noun takes a different ending. Learning both forms makes family talk easier to follow.", "ut-unit-8"),
        example: "Noconēuh.",
        exampleTranslation: "My child. [Chicontepec course]"
      },
      {
        title: "Ask and answer a name",
        body: cited("The course asks ¿Quēniuhqui motōcah? for ‘What is your name?’ Its answer, Na notōcah Paty, pairs an independent ‘I’ with a form meaning ‘my name.’ The question and answer are more reliable together than a bare list of name words.", "ut-unit-3"),
        example: "¿Quēniuhqui motōcah?",
        exampleTranslation: "What is your name? [Chicontepec course]"
      },
      {
        title: "An object need not be named",
        body: cited("A Chicontepec exchange uses Nitlahtzoma for ‘I sew.’ The tla- part leaves what is sewn unspecified. A later course lesson teaches this as a non-specific object marker; it has a different job from the marker for a particular thing.", "ut-unit-11", "ut-course"),
        example: "Nitlahtzoma.",
        exampleTranslation: "I sew. [Chicontepec course]"
      },
      {
        title: "Commands change the verb opening",
        body: cited("The course contrasts ordinary verb forms with commands that begin xi-. Ximoquētza means ‘Stand up!’ and includes mo- as part of the verb. Listen to the full command and its tone of voice before using it with someone.", "ut-unit-19"),
        example: "Ximoquētza!",
        exampleTranslation: "Stand up! [Chicontepec course]"
      },
      {
        title: "Negation belongs to a variety",
        body: cited("A course dialogue says Axcanah nihueliz mōztla, ‘I won't be able to tomorrow.’ Axcanah gives the negative meaning in this setting. Classical courses often teach ahmo, which you should keep in the historical reading track.", "ut-unit-11", "gdn-unam"),
        example: "Axcanah nihueliz mōztla.",
        exampleTranslation: "I won't be able to tomorrow. [Chicontepec course]"
      },
      {
        title: "A verb can look ahead",
        body: cited("Mōztla means ‘tomorrow’ in a Chicontepec conversation. The speaker says Mōztla nipixcaz, ‘I will harvest tomorrow’; the ending of the verb also points forward. Learn the time word and verb form together, then compare them with a past-tense example from the same course.", "ut-unit-11"),
        example: "Mōztla nipixcaz.",
        exampleTranslation: "I will harvest tomorrow. [Chicontepec course]"
      },
      {
        title: "Smallness and respect can share forms",
        body: cited("The course teaches pil- and -tzin with nouns. Pilcīntzin can mean ‘little corn,’ but the same pattern can express affection or respect in a suitable setting. Ask a teacher which reading fits the person and situation instead of assigning one meaning to the ending everywhere.", "ut-unit-20"),
        example: "Pilcīntzin.",
        exampleTranslation: "Little corn. [Chicontepec course]"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Nahuatl speakers live across a wide arc through the Huasteca and central and eastern Mexico. INEGI counted 1,651,958 speakers aged three and over in 2020, the largest total for any Indigenous language in that census. The count covers many varieties and does not show whether children learn each one locally.\n\nA town can have active daily use while a nearby town has fewer younger speakers. Families also carry their language to Mexican cities, farm regions, and communities in the United States. Look at local evidence alongside the national count.",
      "inegi-2020",
      "inali-catalog"
    ),
    regions: [
      { place: "The Huasteca", note: cited("Parts of Hidalgo, Veracruz, and San Luis Potosí contain major speaker populations and several distinct Huasteca varieties. Chicontepec in northern Veracruz is the basis of the UT/IDIEZ online course.", "inali-catalog", "ut-course") },
      { place: "Puebla, Tlaxcala, and central highlands", note: cited("Sierra Norte, central Puebla, Tlaxcala, and neighboring areas contain numerous communities with different autonyms and speech forms; “Central Nahuatl” is not a single town-level description.", "inali-catalog", "glottolog-nahuatl") },
      { place: "Guerrero, Morelos, and State of Mexico", note: cited("Living communities use Nahuatl in family, ceremonial, agricultural, educational, commercial, literary, and political settings. Vitality differs sharply by locality and generation.", "inali-catalog") },
      { place: "Veracruz Isthmus, Oaxaca, Durango, and western communities", note: cited("Smaller or geographically separated varieties expand the map beyond central Mexico. They are especially important evidence against treating the speech of the Mexico City basin as the whole language.", "glottolog-nahuatl", "inali-catalog") },
      { place: "Urban and transnational migration", note: cited("Nahua speakers live in Mexican cities and diaspora communities, including the United States. A census map tied only to ancestral municipalities misses these mobile speaker networks and the language practices of second generations.", "wiki-history", "inegi-2020") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "The first hard choice is whose Nahuatl you will study. The Chicontepec course offers a clear sequence with audio, but a family or community may speak another variety. Classical textbooks answer a different question: how to read historical texts.\n\nLong verbs become easier when you hear recurring pieces. Listening and conversation still take time because beginner recordings and transcripts are uneven across varieties. Spanish can help you reach more teachers and locally produced material.",
      "ut-course",
      "online-dictionary",
      "inali-catalog"
    ),
    easierAspects: [
      "A relatively small core vowel inventory in many varieties",
      "Recurring affix slots that make complex words segmentable",
      "Extensive colonial dictionaries and texts for historical study",
      "A free, coherent beginner-to-advanced Huasteca course with audio",
      "Many familiar international and Mexican Spanish loanwords from Nahuatl"
    ],
    hardAspects: [
      "Choosing among varieties and incompatible-looking orthographies",
      "Hearing vowel length and glottal features when they are not consistently written",
      "Producing person and object morphology without pausing",
      "Finding level-appropriate modern audio with accurate transcripts",
      "Learning community-specific pragmatics, respect, and conversational rhythm"
    ],
    plateauRisks: [
      "Remaining in Classical grammar while claiming to speak for modern communities",
      "Collecting impressive compounds without understanding ordinary verbs",
      "Relying on unsourced social-media translations that mix varieties",
      "Reading only about the Mexica and never listening to living Nahua speakers",
      "Treating spelling debates as errors instead of learning what each system represents"
    ],
    workload: cited(
      "Follow a few Chicontepec lessons each week and replay a short recording daily. In the first months, practice greetings, long vowels, person markers, possession, and common questions. Keep a teacher or speaker from the same variety involved when possible.\n\nLater, retell course conversations and transcribe short clips. Add another orthography or Classical reading only when you can label which source each form came from. Judge progress by whether you can introduce yourself, explain a routine, and follow a story.",
      "ut-course",
      "online-dictionary"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Put a place and source beside every new example. Record who said it, when, and whether it came from conversation, a lesson, or a historical text. That small habit keeps similar-looking forms from different varieties apart.\n\nFor a verb, collect an affirmative sentence, a negative one, and a question from the same teaching source. For a noun, keep its independent and possessed forms together. If you read Classical Nahuatl, save the manuscript spelling beside an edited version.",
      "ut-course",
      "gdn-unam"
    ),
    mediaPractice: cited(
      "Search by a town name or autonym as well as by ‘Nahuatl.’ Community radio, interviews, school videos, songs, and oral histories show how speakers use the language in different settings. A recording's place matters as much as its topic.\n\nReplay a short clip, write what you hear, and compare it with a reliable transcript. Ask a teacher which sounds and words are local. Use songs and poetry alongside conversation, since their rhythm and compressed language have different jobs.",
      "inali-catalog",
      "ut-course"
    ),
    dictionariesAndCorpora: cited(
      "The University of Oregon's Online Nahuatl Dictionary includes historical material and modern entries connected with IDIEZ. Check the source label on every result. A colonial word is evidence for its text, not proof that someone in Chicontepec would say it now.\n\nUNAM's Gran Diccionario Náhuatl lets readers compare older and newer dictionaries while keeping original spellings visible. Use it to trace a word across sources, then confirm a living form in your chosen variety's course or with a speaker.",
      "online-dictionary",
      "gdn-unam"
    ),
    resources: [
      { type: "course", title: "Nāhuatlahtolli: Beginner to Advanced Online Course", url: "https://tlahtolli.coerll.utexas.edu/", level: "all", description: cited("A free, self-paced course with grammar, listening, reading, and many units, explicitly based on the Chicontepec, Veracruz variety and IDIEZ analysis.", "ut-course") },
      { type: "dictionary", title: "Online Nahuatl Dictionary", url: "https://nahuatl.wired-humanities.org/", level: "all", description: cited("Search English, Spanish, and Nahuatl across historical sources and modern Huasteca entries; inspect the source label before borrowing a form.", "online-dictionary") },
      { type: "corpus", title: "Gran Diccionario Náhuatl", url: "https://gdn.iib.unam.mx/", level: "advanced", description: cited("UNAM's concordance of dictionaries and textual lexicons from the sixteenth century to modern regional sources, with normalized and paleographic forms.", "gdn-unam") },
      { type: "other", title: "INALI Catalogue of National Indigenous Languages", url: "https://www.inali.gob.mx/sitios/clin-inali/html/v_nahuatl.html", level: "all", description: cited("Find the named Nahuatl variants, their autonyms, and the places where communities speak them.", "inali-catalog") },
      { type: "app", title: "Totlahtol Nahuatl", url: "https://apps.apple.com/us/app/totlahtol-nahuatl/id1182991493", level: "all", description: cited("A dictionary app based on the Chicontepec Huasteca variety and IDIEZ lexical work; use it with the matching course rather than as pan-Nahuatl authority.", "totlahtol-app") },
      { type: "other", title: "Unicode Latin and Glottal Characters Reference", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-7/", level: "advanced", description: cited("A technical reference for choosing consistent glottal-stop and modifier characters in searchable Nahuatl text.", "unicode-latin") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "A word can have a history across several Nahuatl varieties. The Chicontepec course teaches conētl ‘child’ beside noconēuh ‘my child,’ showing how grammar changes the shape of a familiar noun. It also teaches xōchitl ‘flower,’ a word that appears in older central texts with its own spelling history.\n\nClassical Nahuatl manuscripts pair xōchitl ‘flower’ with cuīcatl ‘song’ in an expression often discussed in poetry. Read that expression in an actual text before making it stand for all Nahua art. Contemporary writers, teachers, musicians, broadcasters, and families create different kinds of Nahuatl text today.",
      "gdn-unam",
      "wiki-history",
      "inali-writing",
      "ut-course"
    ),
    notableWords: [
      { term: "conētl", meaning: "child", note: cited("The Chicontepec course uses this independent form to introduce how possession changes a noun.", "ut-course") },
      { term: "noconēuh", meaning: "my child", note: cited("The same course adds no- and changes the noun ending. Keep it beside conētl when reviewing family words.", "ut-course") },
      { term: "michin", meaning: "fish", note: cited("The course gives michimeh as a plural. The pair makes a clearer number lesson than a rule learned alone.", "ut-course") },
      { term: "xōchitl", meaning: "flower", note: cited("A word in the Chicontepec course that also has a long history in central texts. The course marks its long ō.", "ut-course", "gdn-unam") },
      { term: "āmatl", meaning: "paper", note: cited("The course marks the first vowel long. Historical sources may use the same root in other forms and spellings.", "ut-course", "gdn-unam") },
      { term: "cōmalli", meaning: "cooking griddle or comal", note: cited("The course places this everyday cooking word among nouns with an independent ending.", "ut-course") },
      { term: "pilcīntzin", meaning: "little corn", note: cited("The course teaches pil- and -tzin together. Context decides whether such a form sounds small, affectionate, or respectful.", "ut-course") },
      { term: "nimītztlahpaloa", meaning: "I greet you", note: cited("One greeting verb shows both the speaker and the addressee. Hear it in a course conversation.", "ut-course") }
    ],
    loanwordLayers: cited(
      "English received several Nahuatl words through Spanish, including ancestors of avocado, coyote, tomato, and axolotl. Those routes usually reflect older central forms and Spanish adaptation. They cannot tell you how a Chicontepec speaker says the word now.\n\nNahuatl varieties have also borrowed from Spanish. Speakers may adapt a word's sounds or attach Nahuatl grammar to it. Label a vocabulary item by place and source before calling it inherited, borrowed, or newly coined.",
      "gdn-unam",
      "online-dictionary",
      "wiki-history"
    ),
    idioms: [
      { original: "Cualtitoc", translation: "Excellent; that's good", note: "An approving reply in the Chicontepec course's introduction dialogue." },
      { original: "Teipan timoittazceh", translation: "See you later", note: "The course ends a first meeting this way. Teipan adds ‘later’ to the parting. [Chicontepec]" },
      { original: "Axcanah nihueliz mōztla", translation: "I won't be able to tomorrow", note: "A reply to a request for help in the course's greeting and parting lesson. [Chicontepec]" },
      { original: "Neca nionyāuh", translation: "I'm heading off", note: "A leave-taking line in the course. Learn its situation as well as its words. [Chicontepec]" },
      { original: "In xōchitl, in cuīcatl", translation: "Flower and song", note: "A historical Classical Nahuatl expression for study in its text setting, not a Chicontepec farewell or modern phrasebook formula." }
    ],
    textGenres: [
      "Community oral histories, origin narratives, advice, joking, and ceremonial speech",
      "Colonial wills, town records, petitions, annals, land documents, and correspondence",
      "Song-poems, huehuetlahtolli or formal speeches, drama, and Christian texts in historical archives",
      "Contemporary poetry, short fiction, children's books, memoir, translation, and language activism",
      "Community and Indigenous radio, interviews, public-health messages, news, and educational video",
      "Popular music, rap, subtitled social media, messaging, and transnational family audio"
    ]
  },
  relationships: {
    overview: cited(
      "Nawat in El Salvador and extinct Pochutec belong to the Nahuan branch. Ute and Hopi are much more distant relatives in the wider Uto-Aztecan family. Spanish is a contact language, with centuries of borrowing in both directions.\n\nWithin Mexico, ‘Nahuatl’ covers varieties that differ enough for institutions to list them separately. INALI names 30 variants; Glottolog lists multiple Nahuatl languages. These catalogs answer related but different questions about place, identity, and linguistic history.",
      "glottolog-nahuatl",
      "inali-catalog"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Nahua people use their languages in homes, schools, markets, radio, writing, and online life. A colonial manuscript is valuable, but it cannot speak for every living community.\n\nAsk before recording someone. Credit and pay teachers when you can, and buy work published by communities. If a family stopped passing on Nahuatl after discrimination or Spanish-only schooling, treat renewed learning as their work to define.",
  resources: [
    { type: "course", title: "University of Texas Nāhuatlahtolli Course", url: "https://tlahtolli.coerll.utexas.edu/", level: "all", description: cited("The strongest free structured path in this guide, with a clearly identified Chicontepec, Veracruz target and acknowledgment of IDIEZ's collective work.", "ut-course") },
    { type: "dictionary", title: "Online Nahuatl Dictionary", url: "https://nahuatl.wired-humanities.org/", level: "all", description: cited("A trilingual research dictionary spanning historical sources and modern IDIEZ Huasteca contributions, with source labels essential to responsible use.", "online-dictionary") },
    { type: "corpus", title: "UNAM Gran Diccionario Náhuatl", url: "https://gdn.iib.unam.mx/", level: "advanced", description: cited("An open set of roughly twenty dictionaries across four centuries, regions, paleographic originals, normalized forms, and contextual examples.", "gdn-unam") },
    { type: "other", title: "INALI Nahuatl Variant Catalogue", url: "https://www.inali.gob.mx/sitios/clin-inali/html/v_nahuatl.html", level: "all", description: cited("Check the names and locations of the 30 variants before treating a word as common across them.", "inali-catalog") },
    { type: "app", title: "Totlahtol Nahuatl Dictionary App", url: "https://apps.apple.com/us/app/totlahtol-nahuatl/id1182991493", level: "all", description: cited("A mobile dictionary grounded in Chicontepec vocabulary collected with IDIEZ. Pair it with the UT course when checking a form.", "totlahtol-app") },
    { type: "other", title: "INEGI Nahuatl Census Table", url: "https://www.inegi.org.mx/app/tabulados/interactivos/?idrt=132&opc=t&pxq=LenguaIndigena_Lengua_03_2c423f98-1e29-4d68-b5ba-d1e3f9562eba", level: "all", description: cited("The primary 2020 table gives the national total, age threshold, and state and sex breakdown. Compare it with local accounts of language use.", "inegi-2020") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Piyalli", translation: "Hello", usageNote: "Lesson 3 prints Piyalli; another course lesson prints Piyali. Listen to the speaker. [Chicontepec, Veracruz]" },
    { original: "¿Quēniuhqui motōcah?", translation: "What is your name?", usageNote: "A recorded lesson title and conversation question. [Chicontepec, Veracruz]" },
    { original: "Na notōcah Paty.", translation: "My name is Paty.", usageNote: "Replace Paty with your own name after hearing the course exchange. [Chicontepec, Veracruz]" },
    { original: "¿Cānin tiēhua?", translation: "Where are you from?", usageNote: "From the course's introduction dialogue. [Chicontepec, Veracruz]" },
    { original: "Na niēhua Tecomate, Chicōntepēc.", translation: "I am from Tecomate, Chicontepec.", usageNote: "A speaker's answer in the course. [Chicontepec, Veracruz]" },
    { original: "¿Tlen titlamachtia?", translation: "What do you teach?", usageNote: "A course dialogue question; learn it as an exchange. [Chicontepec, Veracruz]" },
    { original: "Na nitlamachtia Nahuatl.", translation: "I teach Nahuatl.", usageNote: "A reply in the course dialogue. [Chicontepec, Veracruz]" },
    { original: "¿Tlen ticchīhua?", translation: "What are you doing?", usageNote: "A greeting exchange in lesson 11. [Chicontepec, Veracruz]" },
    { original: "Quēna.", translation: "Yes.", usageNote: "Appears in the course's conversations. [Chicontepec, Veracruz]" },
    { original: "Cualli.", translation: "Good; fine.", usageNote: "A short response in the course's greeting dialogue. [Chicontepec, Veracruz]" },
    { original: "Nimītztlahpaloa.", translation: "I greet you.", usageNote: "A meeting formula in lesson 11. [Chicontepec, Veracruz]" },
    { original: "Timoittazceh.", translation: "See you; we will see one another.", usageNote: "A parting in the course. [Chicontepec, Veracruz]" },
    { original: "Niyohua.", translation: "I am leaving now.", usageNote: "A speaker uses this while parting. [Chicontepec, Veracruz]" },
    { original: "Mōztlayoc.", translation: "Until tomorrow.", usageNote: "A leave-taking form in the course. [Chicontepec, Veracruz]" }
  ],
  sources: [
    { id: "inali-catalog", title: "Catálogo de las Lenguas Indígenas Nacionales: variantes lingüísticas del náhuatl", url: "https://www.inali.gob.mx/sitios/clin-inali/html/v_nahuatl.html", publisher: "Instituto Nacional de Lenguas Indígenas", publishedAt: "2008", accessedAt: "2026-09-27" },
    { id: "inali-rights", title: "Ley General de Derechos Lingüísticos de los Pueblos Indígenas", url: "https://site.inali.gob.mx/LGDPI/", publisher: "Instituto Nacional de Lenguas Indígenas / Cámara de Diputados", updatedAt: "2023-10-18", accessedAt: "2026-07-10" },
    { id: "inali-writing", title: "Community-based Indigenous-language writing alphabets", url: "https://site.inali.gob.mx/INALIDhuchlab/alfabetos", publisher: "Instituto Nacional de Lenguas Indígenas", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "inegi-2020", title: "Población de 3 años y más hablante de lengua indígena náhuatl por entidad federativa, 2010 y 2020", url: "https://www.inegi.org.mx/app/tabulados/interactivos/?idrt=132&opc=t&pxq=LenguaIndigena_Lengua_03_2c423f98-1e29-4d68-b5ba-d1e3f9562eba", publisher: "Instituto Nacional de Estadística y Geografía", accessedAt: "2026-09-27" },
    { id: "inali-overview", title: "Instituto Nacional de Lenguas Indígenas: Orgullo de hablar una lengua indígena", url: "https://site.inali.gob.mx/Micrositios/orgullo/", publisher: "Instituto Nacional de Lenguas Indígenas", accessedAt: "2026-09-27" },
    { id: "ut-course", title: "Nāhuatlahtolli: A Beginner to Advanced Level Nahuatl Online Course", url: "https://tlahtolli.coerll.utexas.edu/", publisher: "COERLL, University of Texas at Austin, with IDIEZ", accessedAt: "2026-09-27" },
    { id: "ut-unit-3", title: "Nāhuatlahtolli Lesson 3: What Is Your Name?", url: "https://tlahtolli.coerll.utexas.edu/tlamachtiliztli-3-lesson-3-na-niehua-tecomate-chicontepec-i-am-from-tecomate-chicontepec/", publisher: "COERLL, University of Texas at Austin, with IDIEZ", accessedAt: "2026-09-27" },
    { id: "ut-unit-8", title: "Nāhuatlahtolli Lesson 8: Possessive Markers", url: "https://tlahtolli.coerll.utexas.edu/tlamachtiliztli-8-lesson-8-noyollo-possessive-markers/", publisher: "COERLL, University of Texas at Austin, with IDIEZ", accessedAt: "2026-09-27" },
    { id: "ut-unit-11", title: "Nāhuatlahtolli Lesson 11: Greeting and Farewell", url: "https://tlahtolli.coerll.utexas.edu/tlamachtiliztli-11-lesson-11-quemman-motlahpaloa-huan-monahuatihtehua-when-you-greet-and-say-farewell/", publisher: "COERLL, University of Texas at Austin, with IDIEZ", accessedAt: "2026-09-27" },
    { id: "ut-unit-19", title: "Nāhuatlahtolli Lesson 19: Commands", url: "https://tlahtolli.coerll.utexas.edu/tlamachtiliztli-17-lesson-17-ximoquetza-sit-down/", publisher: "COERLL, University of Texas at Austin, with IDIEZ", accessedAt: "2026-09-27" },
    { id: "ut-unit-20", title: "Nāhuatlahtolli Lesson 20: -pil and -tzin", url: "https://tlahtolli.coerll.utexas.edu/tlamachtiliztli-19-lesson-19-topilcinhuan-tlahuel-cualtzin-our-little-corn-is-very-beautiful/", publisher: "COERLL, University of Texas at Austin, with IDIEZ", accessedAt: "2026-09-27" },
    { id: "online-dictionary", title: "Online Nahuatl Dictionary", url: "https://nahuatl.wired-humanities.org/", publisher: "Wired Humanities Projects, University of Oregon", accessedAt: "2026-07-10" },
    { id: "gdn-unam", title: "Gran Diccionario Náhuatl", url: "https://gdn.iib.unam.mx/presentacion", publisher: "Universidad Nacional Autónoma de México", updatedAt: "2012", accessedAt: "2026-07-10" },
    { id: "glottolog-nahuatl", title: "Glottolog 5.3: Nahuatl language entries", url: "https://glottolog.org/glottolog?search=Nahuatl", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "The Unicode Standard, Chapter 7: Europe-I (Latin, glottal stop, and modifier characters)", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-07-10" },
    { id: "wiki-nahuatl", title: "Nahuatl", url: "https://en.wikipedia.org/wiki/Nahuatl", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of Nahuatl", url: "https://en.wikipedia.org/wiki/History_of_Nahuatl", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "totlahtol-app", title: "Totlahtol Nahuatl", url: "https://apps.apple.com/us/app/totlahtol-nahuatl/id1182991493", publisher: "IDIEZ-aligned community dictionary project", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Nahuatl Language Guide: Living Varieties, Grammar and Learning",
    description: "A deeply researched guide to living Nahuatl varieties, Classical texts, pronunciation, orthographies, polysynthetic grammar, community context, phrases, and reliable learning resources."
  }
} satisfies LanguageGuide;
