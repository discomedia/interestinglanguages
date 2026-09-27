import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Breton",
    relationship: "Brittonic sister language",
    explanation: cited(
      "Breton was carried from Britain to Armorica in the early medieval period and belongs with Welsh and Cornish in the Brittonic branch. Cognates and some structural habits are visible, but centuries of separate development and French contact mean that modern Welsh and Breton are not mutually intelligible.",
      "wiki-welsh",
      "glottolog-welsh"
    )
  },
  {
    name: "Cornish",
    relationship: "Closest revived Brittonic relative",
    explanation: cited(
      "Cornish is especially close genealogically, and its modern revival has often drawn comparison with Welsh language planning. Similar-looking words invite comparison, yet Cornish has its own pronunciation, spelling history, and modern usage.",
      "wiki-welsh",
      "glottolog-welsh"
    )
  },
  {
    name: "Irish",
    slug: "irish",
    relationship: "Goidelic Celtic relative",
    explanation: cited(
      "Irish and Welsh share Insular Celtic features such as initial mutation and inflected prepositions, but they sit in different major branches: Irish is Goidelic, Welsh Brittonic. Their basic vocabulary and sound histories differ enough that neither provides automatic comprehension of the other.",
      "wiki-welsh",
      "glottolog-welsh"
    )
  },
  {
    name: "English",
    relationship: "Dominant contact language in Wales",
    explanation: cited(
      "English is unrelated Germanic rather than Celtic, but long bilingual contact has shaped vocabulary, code-switching, education, and the practical ecology of Welsh. Modern speakers may move between the languages within a day or conversation; that bilingual creativity should not be mistaken for an absence of Welsh grammar.",
      "corcencc",
      "commissioner-position"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const welshGuide = {
  slug: "welsh",
  name: "Welsh",
  autonym: "Cymraeg",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Welsh changes the beginnings of words to show how they fit together. Explore its clear spelling, regional voices, long literary history, and place in everyday life across Wales and beyond.",
  family: "Indo-European, Celtic, Brittonic",
  macroRegion: "Wales, with communities elsewhere in Britain and Patagonia",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Cymru becomes yng Nghymru when someone says “in Wales.” That small change opens a way into Welsh signs, conversations, radio, television, and writing.",
  hero: {
    imageAlt: "Contemporary Welsh words in print and public signage, representing everyday bilingual Wales.",
    callToActionLabel: "Hear Welsh in use"
  },
  classification: "A Brittonic Celtic language, closely related to Cornish and Breton",
  speakerCommunity: "People grow up with Welsh at home, learn it in school or adult classes, and sometimes return to a family language later in life. The 2021 Census counted 538,300 usual residents of Wales aged three or over who said they could speak Welsh, or 17.8 percent of that age group. That count measures reported ability, not how often each person speaks it.\n\nWelsh has especially dense speaker networks in parts of the north and west. Cardiff and other cities also have Welsh-speaking families, schools, workplaces, and arts groups. Many speakers use Welsh and English in different parts of a day; others use Welsh in most settings.\n\nThe census and the Annual Population Survey ask different questions and produce different estimates. Use their numbers with the year and measure attached, rather than combining them into one speaker total.",
  facts: [
    { label: "Family", value: "Indo-European · Celtic · Brittonic" },
    { label: "2021 Census", value: "538,300 speakers in Wales aged 3+, or 17.8%" },
    { label: "Official status", value: "Official in Wales under the Welsh Language (Wales) Measure 2011" },
    { label: "Writing", value: "Latin alphabet with eight traditional digraph letters" },
    { label: "Common varieties", value: "Broad northern and southern groupings, with strong local and social variation" },
    { label: "Public media", value: "S4C television, BBC Radio Cymru, podcasts, music, news, and digital-first Hansh" }
  ],
  introduction: cited("Welsh (Cymraeg) is a Brittonic Celtic language spoken across Wales, with communities elsewhere in Britain and in Chubut, Argentine Patagonia. People use it at home, in schools and workplaces, and in music, television, and public services; some grew up with Welsh, while others learned it later. In the 2021 Census, 538,300 usual residents of Wales aged three or over reported that they could speak Welsh, or 17.8 percent of that age group—a measure of reported ability rather than daily use.\n\nThe language is heard both in parts of the north and west where Welsh-speaking networks are dense and in cities such as Cardiff, where families and schools support it. S4C broadcasts news, drama, and sport in Welsh, while digital media carry local voices across regions and beyond Wales. Welsh also changes the beginning of some words according to their place in a phrase: Cymru, “Wales,” takes a changed first sound in yng Nghymru, “in Wales.”", "glottolog-welsh", "commissioner-position", "census-2021", "british-council-patagonia", "s4c-guidelines", "wiki-morphology"),
  origins: {
    overview: cited(
      "Welsh descends from the Common Brittonic once spoken across much of Britain. After Roman rule ended and Germanic-speaking kingdoms expanded, western Brittonic varieties developed along separate paths.\n\nScholars use labels such as Primitive Welsh, Old Welsh, Middle Welsh, and Modern Welsh, but the boundaries are conveniences rather than overnight transformations. Early poetry associated with figures such as Taliesin and Aneirin survives in later manuscripts. Middle Welsh survives in law, religious prose, chronicles, poetry, and the tales now called the Mabinogion in English.\n\nSpeakers and writers have kept changing Welsh. A medieval tale and a present-day group chat belong to a connected tradition, even though their language differs.",
      "wiki-history",
      "wiki-welsh",
      "gpc"
    ),
    timeline: [
      {
        period: "c. 500–800",
        event: cited(
          "Brittonic varieties in western Britain become recognizably ancestral to Welsh. The earliest poetic tradition is difficult to date because much survives in later copies, yet it anchors Welsh literary memory in the post-Roman north and west of Britain.",
          "wiki-history",
          "wiki-welsh"
        )
      },
      {
        period: "c. 800–1100",
        event: cited(
          "Old Welsh appears in glosses, names, marginal notes, and short texts. Latin remained central to church and scholarship, so written scarcity does not imply that Welsh lacked broad spoken life.",
          "wiki-history"
        )
      },
      {
        period: "c. 1100–1500",
        event: cited(
          "Middle Welsh survives in many manuscripts. Stories, law texts, medicine, history, religion, and formal praise poetry show both a literary style and a language changing toward modern forms.",
          "wiki-history",
          "gpc"
        )
      },
      {
        period: "1588",
        event: cited(
          "William Morgan's complete Welsh Bible gave readers an influential high-register model. Later revisions, schooling, worship, dictionaries, and print culture helped its language travel far beyond the pulpit.",
          "wiki-history",
          "wiki-welsh"
        )
      },
      {
        period: "19th–20th centuries",
        event: cited(
          "Industrial migration, English-dominant institutions, compulsory schooling, urbanization, chapels, newspapers, political activism, and broadcasting pulled Welsh in competing directions. Campaigns for public recognition contributed to Welsh-language broadcasting, education, and legislation rather than a simple story of inevitable decline.",
          "wiki-history",
          "commissioner-position"
        )
      },
      {
        period: "2011–present",
        event: cited(
          "The Welsh Language (Wales) Measure 2011 declared Welsh an official language in Wales and created the Commissioner's office. Welsh now occupies analogue and digital spaces at once: statutory services and school curricula coexist with podcasts, streaming drama, social video, and community-led use.",
          "commissioner-work",
          "census-2021",
          "s4c-learners"
        )
      }
    ],
    contactHistory: cited(
      "Latin entered Brittonic during Roman and Christian contact, leaving words connected with institutions, learning, and religion. Norse contact is visible in some names and vocabulary.\n\nEnglish became the overwhelmingly important contact language through political incorporation, migration, trade, schooling, industry, and modern media. Welsh has borrowed and naturalized English words, while English in Wales carries Welsh names and loanwords.\n\nPatagonia adds a different contact story: settlers established Y Wladfa in Argentina from 1865, and Welsh has since lived alongside Spanish there. Bilingual speakers also choose pronunciations, sentence patterns, and when to switch languages according to the people and setting.",
      "wiki-welsh",
      "corcencc",
      "gpc"
    ),
    standardization: cited(
      "Standard written Welsh provides a shared spelling and formal grammar, but it is not a neutral transcript of one town's speech. Literary Welsh keeps constructions and verb forms uncommon in casual conversation. Formal public prose can be direct or deliberately elevated.\n\nSpoken teaching commonly offers northern and southern pathways, each a broad learning model rather than a single dialect. Aim to understand a news bulletin and speak naturally over coffee before copying older literary forms. Dictionaries, broadcasters, publishers, teachers, and speakers all shape present-day standards.",
      "wiki-welsh",
      "gpc",
      "s4c-guidelines"
    )
  },
  variants: {
    overview: cited(
      "North and south are broad labels, and speakers differ within both regions. A northern speaker may say rŵan for “now” where a southern speaker says nawr. For “I have,” many northern speakers use gen i, while gyda fi is common in southern speech.\n\nSome southern speakers say wi for “I am” where a course may teach dw i. Speakers routinely understand more variation than a beginner produces. Start with one course model, then listen to people from other places too.",
      "wiki-welsh",
      "corcencc"
    ),
    items: [
      {
        name: "Northern spoken Welsh",
        note: cited(
          "A broad teaching label covering varied speech across north Wales. Common learner markers include rŵan “now,” gen i “I have,” and efo “with,” but Gwynedd, Anglesey, the north-east, age groups, and individual speakers remain distinct.",
          "corcencc",
          "learnwelsh"
        )
      },
      {
        name: "Southern spoken Welsh",
        note: cited(
          "Another broad umbrella, encompassing speech from the south-west through the valleys and cities. Nawr “now,” gyda fi “I have/with me,” and colloquial forms such as moyn “want” are familiar, but no checklist represents every southern community.",
          "corcencc",
          "learnwelsh"
        )
      },
      {
        name: "Formal contemporary Welsh",
        note: cited(
          "Used in edited prose, official communication, news, essays, and prepared speech, with register varying by audience. Good modern formal Welsh can be direct and readable; formality need not mean imitating a Bible translation.",
          "s4c-guidelines",
          "gpc"
        )
      },
      {
        name: "Literary Welsh",
        note: cited(
          "A high written register with vocabulary, pronouns, syntax, and synthetic verb forms that may be rare in ordinary speech. It matters for literature and ceremonial writing, but beginners do not need to produce it to converse naturally.",
          "wiki-welsh",
          "gpc"
        )
      },
      {
        name: "Patagonian Welsh",
        note: cited(
          "Welsh has been maintained and taught in Chubut, Argentina, alongside Spanish. The British Council and Welsh Government support teachers in bilingual schools and adult centers there. Local families and teachers also sustain their own Welsh-speaking networks.",
          "british-council-patagonia",
          "wiki-welsh"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Welsh spelling gives strong clues once you learn the letter values. The digraphs ch, dd, ff, ng, ll, ph, rh, and th each count as a letter in traditional Welsh ordering. The letter f sounds like /v/, while ff sounds like /f/.\n\nDd sounds like th in English “this”; th sounds like the th in “thin.” Ch resembles the sound in Scots loch, while rh begins with breath before the trill or tap. To say ll, hold your tongue as for l but let air pass along its sides without voicing. Linguists call this a voiceless lateral fricative.",
      "wiki-welsh",
      "unicode-latin"
    ),
    script: "Welsh Latin alphabet; IPA is used only where it clarifies unfamiliar sounds",
    soundSystem: cited(
      "Vowel quality varies by region, and northern speech maintains contrasts that many southern varieties merge. W and y are full vowel letters as well as consonantal or context-dependent symbols: cwm is one syllable, while y has different values by position and word. Vowel length can change a word's meaning; a circumflex marks length in tŷ, “house.”\n\nConsonants can also differ sharply from English expectations: c and g stay hard, si can represent /ʃ/, and final f is never the English /f/. Learn a speaker model, not a spelling caricature.",
      "wiki-welsh",
      "gpc"
    ),
    prosody: cited(
      "Welsh usually stresses the second-to-last syllable: CYM-ru. Cymraeg is an exception with final stress: cym-RAEG. Learn it as a whole word rather than deriving its stress from Cymru.\n\nIn much Welsh speech, the pitch can rise after the stressed syllable, which may mislead an English listener. Familiar grammatical words also shrink in fast speech. Repeat short recordings as whole phrases, paying attention to rhythm and vowel length along with ll.",
      "wiki-welsh",
      "corcencc"
    ),
    learnerTraps: [
      "Reading Welsh f as /f/ instead of /v/, and ff as if it were a doubled /v/",
      "Replacing ll with English l or th, rather than learning lateral airflow",
      "Pronouncing every w as a consonant even in cwm, bwyd, and drws",
      "Putting English-style stress on the final syllable of longer words",
      "Assuming one north/south vowel realization is the only correct Welsh pronunciation"
    ],
    sampleWords: [
      { original: "llaw", transliteration: "approximately /ɬau/", translation: "hand", note: "Begin with the tongue placed for l, switch off voicing, and let air flow along the tongue's sides." },
      { original: "Cymru", transliteration: "approximately KUM-ri (north) or KUM-ree (many southern speakers)", translation: "Wales", note: "The y and final u illustrate regional vowel differences; the first syllable bears stress." },
      { original: "Cymraeg", transliteration: "kum-RAIG", translation: "Welsh (language or adjective)", note: "Final stress makes this word an exception to the usual pattern, despite its close link to Cymru." },
      { original: "ddraig", transliteration: "approximately /ðraiɡ/", translation: "dragon (soft-mutated form of draig)", note: "Dd is the sound of English “this”; the spelling also displays mutation in y ddraig “the dragon.”" },
      { original: "ffon", transliteration: "approximately /fɔn/", translation: "stick", note: "The double-letter ff is one /f/ sound. Add a circumflex for ffôn, “phone,” which has a long vowel." },
      { original: "rhaglen", transliteration: "approximately /ˈr̥aɡlɛn/", translation: "programme", note: "Practice the breathy rh and penultimate stress together." },
      { original: "tŷ", transliteration: "/tɨː/ (north); /tiː/ (south)", translation: "house", note: "The circumflex marks vowel length. Northern and southern speakers give this vowel different qualities." }
    ]
  },
  writing: {
    overview: cited(
      "Welsh uses Latin letters and a fairly close sound–spelling relationship. Its traditional 28-letter alphabet counts eight digraphs as letters in dictionaries: ch, dd, ff, ng, ll, ph, rh, and th. J appears in established loans and names, while k, q, v, x, and z usually occur in foreign material.\n\nA computer stores a Welsh digraph as two characters, so sorting software needs Welsh-specific rules to match dictionary order. Writers sometimes use acute, grave, circumflex, and diaeresis marks to show stress, vowel quality or length, and separate syllables.",
      "wiki-welsh",
      "unicode-latin"
    ),
    primaryScript: "Latin alphabet with Welsh digraph letters and occasional diacritics",
    romanization: cited(
      "Welsh already uses Latin letters. English-looking respellings such as “Kum-ry” hide vowel length, regional differences, and ll. Pair Welsh spelling with audio; the International Phonetic Alphabet, or IPA, helps when you need an exact sound guide.",
      "wiki-welsh",
      "gpc"
    ),
    spellingNorms: cited(
      "Spelling often exposes grammar. The dictionary form cadair, “chair,” may appear as gadair after a soft-mutation trigger; reverse that change when you look it up. Apostrophes mark contractions, as in dw i'n, while circumflexes can show vowel length: ffon means “stick,” and ffôn means “phone.”\n\nRead place names with their Welsh spelling and stress. In informal messages you may see dwi beside the edited spelling dw i.",
      "gpc",
      "corcencc",
      "commissioner-work"
    ),
    styleNotes: [
      cited("Treat each digraph as one sound-bearing unit when reading, even though a keyboard enters two characters.", "unicode-latin", "wiki-welsh"),
      cited("Look up a mutated word by restoring its likely initial: gath points to cath, and Fangor to Bangor.", "wiki-morphology", "gpc"),
      cited("Keep Welsh diacritics in names and vocabulary. Tŷ is not typographic decoration, and deleting marks can obscure pronunciation or distinction.", "unicode-latin", "gpc"),
      cited("Read conversational transcripts as well as polished prose; CorCenCC lets learners compare spoken, written, and electronic usage rather than assuming one register is the whole language.", "corcencc")
    ]
  },
  grammar: {
    overview: cited(
      "Everyday Welsh often builds a sentence with a form of bod, “be,” plus a verb-noun. Dw i'n darllen means “I read” or “I'm reading,” according to the context. A verb-noun is the dictionary form used for an action; it does several jobs that English divides among forms such as “read,” “reading,” and “to read.”\n\nWelsh also has shorter verbs with endings for person and tense. You will hear them in past and future speech and find more of them in formal writing. Mutation, gender, and prepositions shape the surrounding words.",
      "wiki-welsh",
      "wiki-morphology",
      "corcencc"
    ),
    typologicalProfile: cited(
      "A Welsh sentence can begin with its verb: Gwelodd Carys y ci means “Carys saw the dog.” Everyday speech often starts with a form of bod, “be,” instead: Mae Carys yn gweld y ci means “Carys sees the dog” or “Carys is seeing the dog.” Speakers can move a focused word to the front when they want to emphasize it.\n\nNouns have masculine or feminine gender, and adjectives often follow them. Some prepositions change form with the person: arna i means “on me,” while arnyn nhw means “on them.” These forms differ from simpler phrases such as gyda fi, “with me.”",
      "wiki-welsh",
      "wiki-morphology"
    ),
    morphology: cited(
      "A mutation changes the first sound of a word after certain words or in certain sentence patterns. The most common kind, soft mutation, turns p into b, t into d, and c into g, among other changes. It also removes initial g in some words.\n\nAfter yn, “in,” a nasal mutation turns Cymru into yng Nghymru and Bangor into ym Mangor. Another kind, aspirate mutation, changes p, t, and c into ph, th, and ch in fewer settings. Learn y gath, “the cat,” fy nghath, “my cat,” and ei chath, “her cat,” before memorizing the full tables.",
      "wiki-morphology",
      "gpc"
    ),
    syntax: cited(
      "Negatives and questions often reshape the opening of the clause. Mae hi'n gweithio “she works” becomes Dydy hi ddim yn gweithio “she doesn't work” in a common colloquial pattern, and Ydy hi'n gweithio? “Does she work?” Possessive constructions frequently use prepositions: Mae car gen i, literally “there is a car with me,” means “I have a car.” To describe a person doing the action, speakers can say y fenyw sy'n canu, “the woman who is singing.” Other kinds of relative clause use different forms.\n\nWelsh syntax rewards copying complete frames before trying word-for-word conversion.",
      "wiki-welsh",
      "wiki-morphology"
    ),
    advancedPainPoints: [
      "Choosing mutations automatically while speaking rather than reconstructing a chart",
      "Understanding reduced colloquial forms across northern and southern speech",
      "Separating literary pronouns and synthetic verbs from ordinary conversational choices",
      "Managing gender when mutation is the only audible clue",
      "Recognizing conjugated prepositions and relative constructions in fast speech"
    ],
    topics: [
      {
        title: "Bod plus a verb-noun",
        body: cited(
          "The everyday present uses a form of bod “be,” the aspect particle yn, and a verb-noun. Yn contracts after vowels and does not itself mean English “-ing”: context decides whether a clause describes a current event, habit, or state. Wedi instead gives a completed sense, and mynd i introduces an intended or near-future action.",
          "wiki-morphology",
          "corcencc"
        ),
        example: "Dw i'n darllen y llyfr bob nos. / Dw i wedi darllen y llyfr.",
        exampleTranslation: "I read the book every night. / I have read the book."
      },
      {
        title: "Three initial mutations",
        body: cited(
          "Mutation marks relationships between words. After the feminine singular article, cath “cat” soft-mutates in y gath; after fy “my,” it nasal-mutates in fy nghath; after ei “her,” it aspirate-mutates in ei chath. Not every consonant has every mutation, and actual colloquial frequency differs, so high-value phrases beat abstract completeness.",
          "wiki-morphology",
          "gpc"
        ),
        example: "cath → y gath → fy nghath → ei chath",
        exampleTranslation: "cat → the cat → my cat → her cat"
      },
      {
        title: "Possession as location",
        body: cited(
          "Welsh often expresses “have” by saying that something exists with a person. Northern courses may teach Mae ci gen i, while southern courses may teach Mae ci gyda fi. Both mean “I have a dog.”\n\nThe form of gan changes with the person: gen i means “with me,” while ganddo fe means “with him” in many southern forms.",
          "wiki-morphology",
          "learnwelsh"
        ),
        example: "Mae dau docyn gen i. / Oes amser gyda chi?",
        exampleTranslation: "I have two tickets. / Do you have time?"
      },
      {
        title: "Gender and adjective mutation",
        body: cited(
          "Nouns are masculine or feminine, and plural forms do not always follow one predictable suffix. A feminine singular noun often soft-mutates after the article and may mutate a following adjective: merch fach “a little girl,” from merch and bach. Gender is best stored in a phrase—y bont “the bridge,” not simply pont—because the article reveals behavior.",
          "wiki-morphology",
          "gpc"
        ),
        example: "Mae'r gath ddu ar y gadair fawr.",
        exampleTranslation: "The black cat is on the big chair."
      },
      {
        title: "Inflected past and future verbs",
        body: cited(
          "Welsh can attach person and tense to a lexical verb. Gwelais i means “I saw,” while gwela i commonly means “I will see.” Spoken Welsh often includes the reinforcing pronoun i even though the ending already identifies the person. Periphrastic alternatives also exist, and literary writing uses a wider set of synthetic forms.",
          "wiki-welsh",
          "wiki-morphology"
        ),
        example: "Gwelais i'r ffilm ddoe; gwela i'r ail ran yfory.",
        exampleTranslation: "I saw the film yesterday; I'll see the second part tomorrow."
      },
      {
        title: "Questions and negatives",
        body: cited(
          "The auxiliary changes shape in questions and negatives, while ddim is central to many colloquial negatives. A learner who only adds a rising tone to a statement will be understood but miss the normal Welsh frame. Short answers often repeat an appropriate verb form rather than using one universal word for yes or no.",
          "wiki-morphology",
          "corcencc"
        ),
        example: "Ydy Elin yn dod? Ydy. / Dydy hi ddim yn dod heno.",
        exampleTranslation: "Is Elin coming? Yes. / She isn't coming tonight."
      },
      {
        title: "Emphasis and fronting",
        body: cited(
          "Welsh can place the focused element first. In Carys sy'n canu, the name receives contrastive prominence: it is Carys who is singing. You will hear this kind of fronting in ordinary speech, so a verb-first rule is only a starting point.\n\nListen for what the speaker is correcting or presenting as new.",
          "wiki-welsh",
          "corcencc"
        ),
        example: "Carys sy'n canu, nid Mari.",
        exampleTranslation: "Carys is the one singing, not Mari."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Welsh is spoken throughout Wales, but ability, daily use, and the social density of speaker networks are different measures. The 2021 Census recorded the highest proportions in parts of the north and west while also finding large absolute numbers in more populous southern authorities. Schools and migration also create urban networks.\n\nOutside Wales, speakers live across the United Kingdom and globally; Chubut in Argentina has the best-known organized community. People outside Wales can watch and read Welsh online, then seek conversation with a local or remote group.",
      "census-2021",
      "commissioner-position",
      "corcencc"
    ),
    regions: [
      { place: "North-west and west Wales", note: cited("Gwynedd, Anglesey, Ceredigion, and Carmarthenshire include many communities where Welsh is used across home, work, school, and public life. Percentages and local practices still vary substantially within each county.", "census-2021", "commissioner-position") },
      { place: "South-east Wales", note: cited("Cardiff and surrounding urban areas contain growing and mobile Welsh-speaking networks connected through schools, workplaces, arts, universities, and events, even where neighborhood density is lower.", "census-2021", "corcencc") },
      { place: "The rest of Wales", note: cited("Welsh speakers and learners live in every local authority. A low percentage is not the same as no community, and schools, mentrau iaith, workplaces, clubs, and online groups create domains for use.", "census-2021", "commissioner-work") },
      { place: "Chubut, Argentina", note: cited("The Welsh-speaking tradition of Y Wladfa dates from nineteenth-century settlement. Welsh-Spanish bilingual schools and adult classes still teach the language through local and Wales-linked projects.", "wiki-welsh", "british-council-patagonia") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "For an English-speaking learner, Welsh offers regular spelling and unfamiliar grammar. You can see mutation on the page and practice it in whole phrases.\n\nThe deeper challenge is sociolinguistic: courses simplify north and south, written sources vary in formality, and bilingual speakers may switch to English out of courtesy before a learner has shown that Welsh is welcome. There is no single hour count for fluency.\n\nProgress depends on whether the target is a holiday conversation, family participation, professional writing, or medieval literature.",
      "learnwelsh",
      "corcencc"
    ),
    easierAspects: [
      "A consistent spelling system once Welsh letter values are learned",
      "Usually predictable penultimate stress",
      "Excellent publicly supported courses and abundant broadcaster content",
      "Many recognizable international words alongside memorable Celtic roots",
      "A welcoming adult-learning community with online and in-person options"
    ],
    hardAspects: [
      "Three mutation systems whose triggers overlap with gender and syntax",
      "Substantial differences between colloquial speech and high literary prose",
      "Regional variation in vowels, pronouns, vocabulary, and common verb frames",
      "Inflected prepositions and short answers that resist English word-for-word habits",
      "Fast speech that contracts auxiliary and particle sequences"
    ],
    plateauRisks: [
      "Completing app exercises without building a Welsh-speaking relationship",
      "Treating every mutation error as a reason to stop mid-sentence",
      "Listening only to slow learner audio and never adapting to regional voices",
      "Reading formal news while neglecting conversational verb frames",
      "Letting bilingual partners switch permanently to English instead of negotiating practice"
    ],
    workload: cited(
      "A practical first year combines a structured course with daily short listening and one recurring conversation. Spend early months automating twenty sentence frames and the most frequent soft mutations, not memorizing every rare trigger. At intermediate level, use S4C subtitles or podcast transcripts, then try conversation without a script.\n\nAdvanced learners should sample CorCenCC, monolingual dictionary entries, essays, and literature while requesting feedback on register. Spread practice across the week so you revisit the same forms often.",
      "learnwelsh",
      "s4c-learners",
      "corcencc"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build three linked repertoires: a consistent home dialect for speaking, a broad listening repertoire, and a modern written register. Record a two-minute diary, transcribe it, and compare the phrases with corpus results; this turns vague fluency goals into observable choices. Keep mutation triggers in chunks—o Gaerdydd, “from Cardiff,” and yng Nghymru, “in Wales.” Mark whether a new form is regional, formal, or widely shared.\n\nOnce conversation is comfortable, read one author or topic deeply enough for vocabulary to recur.",
      "corcencc",
      "learnwelsh"
    ),
    mediaPractice: cited(
      "S4C's learner pages point toward clear programmes, subtitles, and general-audience material, while Hansh offers shorter digital-first comedy and stories. Try a scene without subtitles, replay it with Welsh subtitles, then check English if needed.\n\nRadio and podcasts remove visual support and expose regional rhythm. Songs may stretch vowels or use poetic word order. Check prose before copying a lyric into conversation.",
      "s4c-learners",
      "s4c-hansh"
    ),
    dictionariesAndCorpora: cited(
      "Geiriadur Prifysgol Cymru is the standard historical dictionary. Use it to check word histories, dated senses, plurals, gender, and quoted examples. Geiriadur yr Academi helps when you need an English-to-Welsh lookup.\n\nCorCenCC contains roughly eleven million words of spoken, written, and electronic Welsh and can filter examples by mode, region, genre, and other variables. Search both the unmutated lemma and forms you actually heard.",
      "gpc",
      "academy-dictionary",
      "corcencc"
    ),
    resources: [
      { type: "course", title: "Learn Welsh / Dysgu Cymraeg", url: "https://learnwelsh.cymru/", level: "all", description: cited("The national adult-learning network offers tutor-led and self-study courses from Entry through Proficiency, with northern and southern pathways and local providers.", "learnwelsh") },
      { type: "corpus", title: "CorCenCC", url: "https://corcencc.org/", level: "intermediate", description: cited("Search authentic spoken, written, and electronic Welsh, filter results, and use the linked Tiwtiadur learning tools.", "corcencc") },
      { type: "dictionary", title: "Geiriadur Prifysgol Cymru", url: "https://www.welsh-dictionary.ac.uk/", level: "advanced", description: cited("The standard historical dictionary supplies evidence-rich definitions, forms, etymologies, and quotations for serious reading and writing.", "gpc") },
      { type: "dictionary", title: "Geiriadur yr Academi", url: "https://geiriaduracademi.org/", level: "all", description: cited("A detailed English–Welsh dictionary that offers alternatives when one English word has several Welsh equivalents.", "academy-dictionary") },
      { type: "media", title: "S4C Dysgu Cymraeg", url: "https://www.s4c.cymru/en/dysgu-cymraeg", level: "all", description: cited("A learner-oriented route into S4C programmes, subtitle guidance, and material selected for clear context and accessible language.", "s4c-learners") },
      { type: "media", title: "Hansh", url: "https://www.s4c.cymru/hansh", level: "intermediate", description: cited("Short-form comedy, documentary, and social storytelling made for younger digital audiences rather than as artificial course dialogue.", "s4c-hansh") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Welsh vocabulary has inherited Brittonic roots, older Latin layers, English loans, regional words, and newer coinages. A compound can show its parts clearly, as llyfrgell, “library,” does with llyfr, “book.”\n\nPopular lists sometimes call Welsh words impossible to translate. Hiraeth can mean longing or homesickness, with its precise sense coming from the sentence. Compare how a word appears in conversation, song, news, and literature.",
      "gpc",
      "corcencc"
    ),
    notableWords: [
      { term: "hiraeth", meaning: "longing, homesickness, yearning", note: cited("Speakers use this word for people, places, periods, and belonging. Translate its meaning in the full sentence.", "gpc", "corcencc") },
      { term: "cwtsh / cwtch", meaning: "cuddle; snug or safe nook", note: cited("Especially associated with southern Welsh and also borrowed into Welsh English. Spelling and sense vary by speaker and context.", "gpc", "corcencc") },
      { term: "eisteddfod", meaning: "competitive festival of literature, music, and performance", note: cited("Literally built from elements associated with sitting and gathering, the word now names local, youth, and national institutions rather than one identical event.", "gpc") },
      { term: "cynefin", meaning: "habitat; familiar environment; sense of place", note: cited("Used technically in ecology and more broadly for the environment that makes a person or community at home.", "gpc", "corcencc") },
      { term: "hwyl", meaning: "spirit, fun, mood; a sailing or eloquent lift", note: cited("Its meanings range beyond “fun”; the farewell hwyl and phrase hwyl fawr belong to ordinary use.", "gpc") },
      { term: "llyfrgell", meaning: "library", note: cited("A transparent compound of llyfr “book” and cell “cell/chamber,” with soft mutation inside the compound—a miniature grammar lesson.", "gpc") },
      { term: "pendroni", meaning: "to puzzle, wonder, brood", note: cited("A vivid verb-noun for turning something over mentally; corpus examples show why dictionary glosses need real sentences.", "gpc", "corcencc") }
    ],
    loanwordLayers: cited(
      "Latin loans entered at different periods, including words tied to Christianity and literacy. English loans range from familiar everyday forms to recent borrowings. Speakers differ in what they prefer.\n\nWelsh also creates terms through compounding and planned terminology: cyfrifiadur “computer” relates to cyfrif “count,” while rhyngrwyd “internet” evokes an inter-network. Speakers choose inherited words, Welsh coinages, adapted loans, or English phrases according to the conversation.",
      "gpc",
      "corcencc",
      "welsh-infrastructure"
    ),
    idioms: [
      { original: "Mae hi'n bwrw hen wragedd a ffyn.", translation: "It's raining very heavily.", note: "Literally “It is throwing old women and sticks.” Use this rain idiom playfully; ordinary speech has simpler ways to say it is raining." },
      { original: "Ar ben y byd", translation: "Over the moon; extremely happy", note: "Literally “on top of the world”; the image closely matches an English expression." },
      { original: "Rhoi'r ffidil yn y to", translation: "To give up", note: "Literally “to put the fiddle in the roof,” traditionally evoking putting an instrument away; mutation appears in the fixed phrase." },
      { original: "Cenedl heb iaith, cenedl heb galon", translation: "A nation without a language is a nation without a heart", note: "Literally “nation without language, nation without heart”; a cultural slogan, not a neutral description of every Welsh person's identity." },
      { original: "Dyfal donc a dyr y garreg", translation: "Persistence pays", note: "Literally “a persistent tap breaks the stone”; often used to encourage steady effort—appropriate for mutation practice." }
    ],
    textGenres: [
      "Medieval prose tales and cywydd poetry",
      "Strict-metre poetry and contemporary free verse",
      "Hymns, folk song, rock, pop, hip-hop, and electronic music",
      "Novels, short stories, children's books, and graphic narratives",
      "Television drama, comedy, documentaries, sport, and social video",
      "News, public services, workplace communication, podcasts, and everyday messaging"
    ]
  },
  relationships: {
    overview: cited(
      "Welsh belongs to the Celtic family through historical descent. Its closest living relatives are the other Brittonic languages, Cornish and Breton. Irish, Scottish Gaelic, and Manx belong to the other main branch, Goidelic.\n\nYou can compare inherited words and mutations, but sound changes and contact histories differ. English is genealogically distant, while long contact makes it central to the story of modern Welsh.",
      "glottolog-welsh",
      "wiki-welsh"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Welsh belongs in local and national eisteddfodau, schools, sport, farming, arts, public services, and ordinary disagreement.\n\nSpeakers need homes, jobs, education, services, leisure, and relationships where they can choose Welsh easily. Counting learners tells only part of that story.\n\nAsk speakers whether they would like to use Welsh, and join activities as a participant rather than expecting a lesson. Singing, volunteering, sport, books, coding, and coffee all create reasons to keep talking.",
  resources: [
    { type: "course", title: "Learn Welsh / Dysgu Cymraeg", url: "https://learnwelsh.cymru/", level: "all", description: cited("Nationally coordinated online and face-to-face adult courses with progression from Entry to Proficiency.", "learnwelsh") },
    { type: "app", title: "SaySomethinginWelsh", url: "https://www.saysomethingin.com/wp/en/welsh-resources/", level: "beginner", description: "Audio-led speaking practice with free taster clips and a paid subscription. Pair its repetition with reading, feedback, and conversation." },
    { type: "dictionary", title: "Geiriadur Prifysgol Cymru", url: "https://www.welsh-dictionary.ac.uk/", level: "advanced", description: cited("The authoritative historical dictionary for meanings, forms, etymology, and attested examples.", "gpc") },
    { type: "dictionary", title: "Geiriadur yr Academi", url: "https://geiriaduracademi.org/", level: "all", description: cited("A rich English–Welsh dictionary with contextual alternatives and grammatical information.", "academy-dictionary") },
    { type: "corpus", title: "CorCenCC", url: "https://corcencc.org/", level: "intermediate", description: cited("A free, filterable corpus of contemporary speech, writing, and electronic language, plus teaching tools.", "corcencc") },
    { type: "media", title: "S4C Clic and learner guide", url: "https://www.s4c.cymru/en/dysgu-cymraeg", level: "all", description: cited("Welsh-language television and digital programmes with a curated learner entry point and subtitle guidance.", "s4c-learners") },
    { type: "media", title: "BBC Radio Cymru", url: "https://www.bbc.co.uk/sounds/play/live:bbc_radio_cymru", level: "intermediate", description: "Live and on-demand news, conversation, sport, music, and regional voices for daily listening." }
  ],
  relatedLanguages,
  phrases: [
    { original: "Shwmae? / S'mae?", translation: "Hello; how are things?", usageNote: "Common informal greeting, especially associated with the south; helo is widely understood everywhere." },
    { original: "Bore da", translation: "Good morning", literalMeaning: "Good morning" },
    { original: "Diolch yn fawr", translation: "Thank you very much", literalMeaning: "Thanks greatly" },
    { original: "Os gwelwch chi'n dda", translation: "Please", literalMeaning: "If you see well", usageNote: "A polite full form; plîs is also common informally." },
    { original: "Esgusodwch fi", translation: "Excuse me", usageNote: "Use this polite form to get someone's attention." },
    { original: "Dw i'n dysgu Cymraeg", translation: "I'm learning Welsh", literalMeaning: "I am in learning Welsh" },
    { original: "Dw i ddim yn deall", translation: "I don't understand", usageNote: "A common colloquial negative frame." },
    { original: "Fedrwch chi ddweud hynny eto?", translation: "Can you say that again?", usageNote: "Polite/plural chi; the initial f reflects a question mutation and ddweud is mutated dweud." },
    { original: "Beth mae'r gair yma'n ei olygu?", translation: "What does this word mean?", literalMeaning: "What is this word meaning?" },
    { original: "Ga i goffi, os gwelwch chi'n dda?", translation: "May I have a coffee, please?", usageNote: "Ga i…? is an extremely productive request frame." },
    { original: "Ble mae'r orsaf?", translation: "Where is the station?", usageNote: "Gorsaf appears as orsaf after the article because initial g disappears under soft mutation." },
    { original: "Mae'n braf cwrdd â chi", translation: "It's nice to meet you", literalMeaning: "It is pleasant to meet with you" },
    { original: "Hwyl am y tro", translation: "Goodbye for now", literalMeaning: "Cheerio for the time" },
    { original: "Pob lwc!", translation: "Good luck!" }
  ],
  sources: [
    { id: "commissioner-work", title: "Our vision and our work", url: "https://www.welshlanguagecommissioner.wales/about-us/our-vision-and-our-work", publisher: "Welsh Language Commissioner", accessedAt: "2026-07-10" },
    { id: "commissioner-position", title: "2021 Census: the position of the Welsh language", url: "https://www.welshlanguagecommissioner.wales/policy-and-research/the-position-of-the-welsh-language/2021-census", publisher: "Welsh Language Commissioner", accessedAt: "2026-07-10" },
    { id: "census-2021", title: "Welsh language by population characteristics (Census 2021)", url: "https://www.gov.wales/welsh-language-population-characteristics-census-2021-html", publisher: "Welsh Government", publishedAt: "2023-06-08", accessedAt: "2026-07-10" },
    { id: "welsh-infrastructure", title: "Welsh linguistic infrastructure policy", url: "https://www.gov.wales/welsh-linguistic-infrastructure-policy-html", publisher: "Welsh Government", publishedAt: "2023-03-07", accessedAt: "2026-07-10" },
    { id: "corcencc", title: "CorCenCC: National Corpus of Contemporary Welsh", url: "https://corcencc.org/", publisher: "Cardiff, Swansea, Lancaster and Bangor Universities", publishedAt: "2020", accessedAt: "2026-07-10" },
    { id: "gpc", title: "Geiriadur Prifysgol Cymru: Dictionary of the Welsh Language", url: "https://www.welsh-dictionary.ac.uk/", publisher: "University of Wales Centre for Advanced Welsh and Celtic Studies", accessedAt: "2026-07-10" },
    { id: "academy-dictionary", title: "Geiriadur yr Academi: Welsh Academy English–Welsh Dictionary", url: "https://geiriaduracademi.org/", publisher: "University of Wales Centre for Advanced Welsh and Celtic Studies", accessedAt: "2026-07-10" },
    { id: "learnwelsh", title: "The National Centre for Learning Welsh", url: "https://learnwelsh.cymru/about-us/the-national-centre-for-learning-welsh/", publisher: "National Centre for Learning Welsh", accessedAt: "2026-07-10" },
    { id: "s4c-learners", title: "Dysgu Cymraeg: Welsh for learners", url: "https://www.s4c.cymru/en/dysgu-cymraeg", publisher: "S4C", accessedAt: "2026-07-10" },
    { id: "s4c-hansh", title: "Hansh", url: "https://www.s4c.cymru/hansh", publisher: "S4C", accessedAt: "2026-07-10" },
    { id: "s4c-guidelines", title: "S4C Welsh Language Guidelines 2024", url: "https://www.s4c.cymru/media/media_assets/Language_Guidelines_2024_final.pdf", publisher: "S4C", publishedAt: "2024", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "The Unicode Standard: Latin", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "glottolog-welsh", title: "Welsh", url: "https://glottolog.org/resource/languoid/id/wels1247", publisher: "Glottolog", accessedAt: "2026-07-10" },
    { id: "british-council-patagonia", title: "Welsh Language Project", url: "https://wales.britishcouncil.org/en/programmes/education/welsh-language-project", publisher: "British Council Wales", accessedAt: "2026-09-27" },
    { id: "wiki-welsh", title: "Welsh language", url: "https://en.wikipedia.org/wiki/Welsh_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of the Welsh language", url: "https://en.wikipedia.org/wiki/History_of_the_Welsh_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-morphology", title: "Colloquial Welsh morphology", url: "https://en.wikipedia.org/wiki/Colloquial_Welsh_morphology", publisher: "Wikipedia", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Welsh Language Guide: Sounds, Mutations, Grammar and Modern Use",
    description: "Learn how Welsh works through real examples: pronunciation, initial mutations, north and south varieties, history, modern culture, phrases, and trusted resources."
  }
} satisfies LanguageGuide;
