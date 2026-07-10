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
      "Cornish is especially close genealogically, and its modern revival has often drawn comparison with Welsh language planning. Similar-looking words reward comparison, yet pronunciation, spelling history, and revived usage require Cornish to be learned on its own terms.",
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
  summary: "Welsh is a living Brittonic language of family life, schools, workplaces, broadcasting, music, literature, and online conversation, with an unusually transparent spelling system and a grammar that makes relationships visible at the beginnings of words.",
  family: "Indo-European, Celtic, Brittonic",
  macroRegion: "Wales, with communities elsewhere in Britain and Patagonia",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Welsh turns a landscape of familiar place names into meaningful sentences and offers immediate access to a contemporary public culture—from football commentary and television drama to poetry, memes, local radio, and conversation.",
  hero: {
    imageAlt: "Contemporary Welsh words in print and public signage, representing everyday bilingual Wales.",
    callToActionLabel: "Hear Welsh in use"
  },
  classification: "A Brittonic Celtic language, closely related to Cornish and Breton",
  speakerCommunity: "Welsh belongs to communities, not simply to a statistic. It is acquired at home, through Welsh-medium education, in bilingual schools, at university, in adult classes, and by people returning to a family language. In the 2021 Census, 538,300 usual residents of Wales aged three or over—17.8 percent—reported that they could speak Welsh. That self-report measure differs from the Annual Population Survey and should not be casually mixed with it. Welsh is heard most densely in parts of the north and west, but Cardiff and other cities support substantial, mobile networks of speakers. It is used in public services, shops, agriculture, technology, sport, worship, music, and broadcasting, as well as at the kitchen table. Many speakers are comfortably bilingual; some use Welsh chiefly in one domain and English in another. Learners enter this world as participants, not museum visitors.",
  facts: [
    { label: "Family", value: "Indo-European · Celtic · Brittonic" },
    { label: "2021 Census", value: "538,300 speakers in Wales aged 3+, or 17.8%" },
    { label: "Official status", value: "Official in Wales under the Welsh Language (Wales) Measure 2011" },
    { label: "Writing", value: "Latin alphabet with eight traditional digraph letters" },
    { label: "Common varieties", value: "Broad northern and southern groupings, with strong local and social variation" },
    { label: "Public media", value: "S4C television, BBC Radio Cymru, podcasts, music, news, and digital-first Hansh" }
  ],
  learnerOverview: "Welsh often looks harder on the page than it feels after a few weeks of listening. The spelling is consistent, stress is usually predictable, and a compact set of high-frequency frames produces useful speech quickly: Dw i'n… “I am…,” Dw i eisiau… “I want…,” and Ga i…? “May I…?” The apparent complication is that words change shape. Cymru “Wales” becomes yng Nghymru “in Wales”; Bangor becomes ym Mangor; and cath “cat” becomes y gath “the cat.” These initial mutations carry grammatical information and also preserve the sound flow of older phrases. Do not postpone speaking until every mutation table is perfect. Learn triggers inside whole expressions and let correction sharpen them over time. Choose a course track with a northern or southern spoken model, then listen widely enough to understand both. The real leap comes when Welsh stops being only lesson material: follow weather clips, a sports team, a musician, or a local news story, and use the language with people before you feel fully ready.",
  origins: {
    overview: cited(
      "Welsh descends from the Common Brittonic once spoken across much of Britain. After Roman rule ended and Germanic-speaking kingdoms expanded, western Brittonic varieties developed along separate paths. Scholars use labels such as Primitive Welsh, Old Welsh, Middle Welsh, and Modern Welsh, but the boundaries are conveniences rather than overnight transformations. Early poetry associated with figures such as Taliesin and Aneirin survives through later manuscripts; Middle Welsh is richly represented in law, religious prose, chronicles, poetry, and the narratives now grouped in English as the Mabinogion. The language therefore joins deep manuscript history to uninterrupted reinvention. A medieval tale, a chapel hymn, an industrial ballad, a television thriller, and a group chat do not use one frozen Welsh, but they belong to a connected tradition.",
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
          "Middle Welsh is preserved in a substantial manuscript culture. Prose tales, law texts, medicine, history, devotion, and intricate praise poetry reveal both an elite literary register and a language changing toward modern forms.",
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
      "Latin entered Brittonic during Roman and Christian contact, leaving words connected with institutions, learning, and religion. Norse contact is visible in some names and vocabulary. English became the overwhelmingly important contact language through political incorporation, migration, trade, schooling, industry, and modern media. Welsh has borrowed and naturalized English words, while English in Wales carries Welsh place names, personal names, discourse habits, and loanwords. Patagonia adds a different contact story: settlers established Y Wladfa in Argentina from 1865, and Welsh has since lived alongside Spanish there. Contact does not move only into vocabulary; bilingual speakers make choices about pronunciation, syntax, and code-switching according to person and setting.",
      "wiki-welsh",
      "corcencc",
      "gpc"
    ),
    standardization: cited(
      "Standard written Welsh provides a shared spelling and formal grammar, but it is not a neutral transcript of one town's speech. Literary Welsh preserves constructions and inflected verb forms uncommon in casual conversation; formal public prose ranges from accessible contemporary writing to deliberately elevated style. Spoken teaching commonly offers northern and southern pathways, each a broad learning model rather than a single dialect. The healthiest goal is register control: write an application appropriately, understand a news bulletin, and still sound at ease over coffee. Modern dictionaries, terminology work, broadcasting conventions, publishers, teachers, and users all participate in standardization without extinguishing regional voices.",
      "wiki-welsh",
      "gpc",
      "s4c-guidelines"
    )
  },
  variants: {
    overview: cited(
      "“North” and “south” are useful first coordinates, not a border across which everyone abruptly changes grammar. Vocabulary, vowels, pronouns, verb forms, age, education, and local networks all matter. A northern speaker may say rŵan for “now” where a southern speaker says nawr; “with me” may be gen i or gyda fi; and forms of “I am” range from dw i to wi in some southern speech. Speakers routinely understand more variation than a beginner produces. Course consistency helps at first, but listening should never be confined to one presenter.",
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
          "Welsh has been maintained and taught in Chubut, Argentina, in contact with Spanish. Its history includes migration, education, family transmission, and renewed cultural links with Wales; it should not be reduced to a handful of Spanish loanwords.",
          "wiki-welsh"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Welsh spelling is a strong ally once each letter is given its Welsh value. The alphabet includes the traditional digraph letters ch, dd, ff, ng, ll, ph, rh, and th; they are treated as units in Welsh ordering even though digital systems encode their component characters. The letters f and ff surprise English readers: f is /v/, while ff is /f/. Dd is the voiced sound in English “this,” th the voiceless sound in “thin,” ch resembles the sound in Scots loch, and rh begins with breath before the trill or tap. The famous ll is a voiceless lateral fricative: hold the tongue as for l and let air pass along its sides without voicing.",
      "wiki-welsh",
      "unicode-latin"
    ),
    script: "Welsh Latin alphabet; IPA is used only where it clarifies unfamiliar sounds",
    soundSystem: cited(
      "Vowel quality varies by region, and northern speech maintains contrasts that many southern varieties merge. W and y are full vowel letters as well as consonantal or context-dependent symbols: cwm is one syllable, while y has different values by position and word. Vowel length is meaningful and interacts with following consonants; a circumflex often marks a long vowel where spelling rules would not otherwise predict it, as in tŷ “house.” Consonants can also differ sharply from English expectations: c and g stay hard, si can represent /ʃ/, and final f is never the English /f/. Learn a speaker model, not a spelling caricature.",
      "wiki-welsh",
      "gpc"
    ),
    prosody: cited(
      "Stress usually falls on the penultimate syllable, so Cymru is stressed CYM-ru and Cymraeg cym-RAEG because it has two syllables. Exceptions deserve to be learned with their accents and audio. Welsh intonation often gives prominence after the stressed syllable in a way English listeners mishear, and fluent speech compresses familiar grammatical words. Shadow whole lines rather than polishing isolated ll: natural vowel length, mutation, and rhythm make an ordinary l more useful than a perfect party-trick consonant in an English-timed sentence.",
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
      { original: "Cymraeg", transliteration: "kum-RAIG", translation: "Welsh (language or adjective)", note: "A useful reminder that predictable stress depends on syllable count, not the related word Cymru." },
      { original: "ddraig", transliteration: "approximately /ðraiɡ/", translation: "dragon (soft-mutated form of draig)", note: "Dd is the sound of English “this”; the spelling also displays mutation in y ddraig “the dragon.”" },
      { original: "ffon", transliteration: "approximately /fɔn/", translation: "stick; telephone", note: "The double-letter ff is a single Welsh /f/ sound." },
      { original: "rhaglen", transliteration: "approximately /ˈr̥aɡlɛn/", translation: "programme", note: "Practice the breathy rh and penultimate stress together." },
      { original: "tŷ", transliteration: "approximately /tiː/ (north), often /iː/ quality varies south", translation: "house", note: "The circumflex marks length; compare it visually with unaccented y." }
    ]
  },
  writing: {
    overview: cited(
      "Welsh uses the Latin script with a close sound–spelling relationship. Its 28-letter traditional alphabet includes eight digraphs counted as letters for dictionaries and alphabetic games: ch, dd, ff, ng, ll, ph, rh, and th. J is now established in loans and names, while k, q, v, x, and z generally appear in foreign material or specialized notation. Because Unicode represents a digraph as two ordinary characters, software collation does not automatically follow Welsh dictionary order. The language uses acute, grave, circumflex, and diaeresis marks for stress, vowel quality or length, and syllable separation, though accents are less frequent than in many European languages.",
      "wiki-welsh",
      "unicode-latin"
    ),
    primaryScript: "Latin alphabet with Welsh digraph letters and occasional diacritics",
    romanization: cited(
      "Welsh is already written in Latin letters, so it needs no everyday romanization. English-looking respellings such as “Kum-ry” can provide a first hint but hide vowel length, regional variation, and sounds such as ll. IPA is more precise for dictionaries; ordinary learners should pair standard spelling with audio and discard pronunciation crutches quickly.",
      "wiki-welsh",
      "gpc"
    ),
    spellingNorms: cited(
      "Spelling often exposes grammar. The dictionary form cadair “chair” may appear as gadair after a soft-mutation trigger; learners must mentally reverse the change when looking it up. Apostrophes mark contraction, as in dw i'n from yn, and circumflexes distinguish or clarify length in words such as tŷ. Place names deserve their Welsh spelling and stress rather than being treated as puzzles for English phonics. Contemporary informal writing represents colloquial forms more freely—dwi beside dw i, for example—while edited prose follows established conventions.",
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
      "Welsh grammar becomes much less exotic when learned as a small set of sentence engines. Everyday speech relies heavily on forms of bod “be” plus particles and a verb-noun: Dw i'n darllen literally resembles “I am in reading” and naturally means “I read” or “I am reading.” The verb-noun is a flexible dictionary form, not exactly an English infinitive or gerund. Alongside this periphrastic system, Welsh has compact inflected verbs, especially in past, future, conditional, formal, and literary use. Initial mutations, gender, pronouns, and prepositions then shape the words around that engine.",
      "wiki-welsh",
      "wiki-morphology",
      "corcencc"
    ),
    typologicalProfile: cited(
      "Traditional descriptions call Welsh verb–subject–object because a finite verb can precede its subject: Gwelodd Carys y ci, “Carys saw the dog.” Colloquial periphrastic clauses also begin with an auxiliary: Mae Carys yn gweld y ci, “Carys sees/is seeing the dog.” Focus constructions can bring another element forward, so Welsh word order communicates emphasis as well as grammatical role. Nouns have masculine or feminine gender but no case declension; adjectives often follow nouns. Prepositions can inflect for person, producing forms such as gyda fi “with me” and gyda nhw “with them.”",
      "wiki-welsh",
      "wiki-morphology"
    ),
    morphology: cited(
      "Mutation changes a word's first consonant in a grammatical environment. The soft mutation is most frequent: p→b, t→d, c→g, b→f, d→dd, g disappears, m→f, and ll/rh lose breathiness. Nasal mutation appears prominently after yn “in”: Cymru becomes yng Nghymru and Bangor ym Mangor. Aspirate mutation changes p/t/c to ph/th/ch in a smaller set of contexts. Mutations are not random alternatives and do not create new dictionary headwords. Learn y gath “the cat,” fy nghath “my cat,” and ei chath “her cat” as meaningful phrases, then derive the table from examples.",
      "wiki-morphology",
      "gpc"
    ),
    syntax: cited(
      "Negatives and questions often reshape the opening of the clause. Mae hi'n gweithio “she works” becomes Dydy hi ddim yn gweithio “she doesn't work” in a common colloquial pattern, and Ydy hi'n gweithio? “Does she work?” Possessive constructions frequently use prepositions: Mae car gen i, literally “there is a car with me,” means “I have a car.” Relative clauses can use sydd when the focused noun is the subject—y fenyw sydd yn canu “the woman who is singing”—while other relations employ forms of bod or particles according to register. Welsh syntax rewards copying complete frames before trying word-for-word conversion.",
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
          "Welsh commonly expresses “have” through existence plus a prepositional phrase. Northern courses often favor gan in Mae ci gen i; southern models may use gyda in Mae ci gyda fi. Both literally locate a dog with the speaker and idiomatically mean possession. The preposition changes with person rather than taking a separate object pronoun in a fully regular English pattern.",
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
          "Welsh can place the focused element first. In Carys sy'n canu, the name receives contrastive prominence: it is Carys who is singing. This construction is common in natural speech and explains why a rigid VSO label is only a starting point. Listen for what the speaker is correcting or presenting as new.",
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
      "Welsh is spoken throughout Wales, but ability, daily use, and the social density of speaker networks are different measures. The 2021 Census recorded the highest proportions in parts of the north and west while also finding large absolute numbers in more populous southern authorities. Education and migration create urban networks that a simple heartland map can miss. Outside Wales, speakers live across the United Kingdom and globally; Chubut in Argentina has the best-known organized community. Digital media now lets a learner in Melbourne or Montreal enter Welsh-speaking spaces, though online exposure cannot replace relationships with people and places.",
      "census-2021",
      "commissioner-position",
      "corcencc"
    ),
    regions: [
      { place: "North-west and west Wales", note: cited("Gwynedd, Anglesey, Ceredigion, and Carmarthenshire include many communities where Welsh is used across home, work, school, and public life. Percentages and local practices still vary substantially within each county.", "census-2021", "commissioner-position") },
      { place: "South-east Wales", note: cited("Cardiff and surrounding urban areas contain growing and mobile Welsh-speaking networks connected through schools, workplaces, arts, universities, and events, even where neighborhood density is lower.", "census-2021", "corcencc") },
      { place: "The rest of Wales", note: cited("Welsh speakers and learners live in every local authority. A low percentage is not the same as no community, and schools, mentrau iaith, workplaces, clubs, and online groups create domains for use.", "census-2021", "commissioner-work") },
      { place: "Chubut, Argentina", note: cited("The Welsh-speaking tradition of Y Wladfa dates from nineteenth-century settlement and continues through teaching, cultural activity, family histories, and links with Wales in a Spanish-speaking environment.", "wiki-welsh") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "For an English-speaking learner, Welsh combines unusually friendly spelling with unfamiliar grammar. Mutation is visible, but its very visibility makes it teachable. The deeper challenge is sociolinguistic: courses simplify north and south, written sources vary in formality, and bilingual speakers may switch to English out of courtesy before a learner has shown that Welsh is welcome. There is no defensible single hour count for fluency. Progress depends on whether the target is a holiday conversation, family participation, professional writing, or medieval literature.",
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
      "A practical first year combines a structured course with daily short listening and one recurring conversation. Spend early months automating twenty sentence frames and the most frequent soft mutations, not memorizing every rare trigger. At intermediate level, alternate transcript-supported S4C or podcast work with unprepared conversation. Advanced learners should sample CorCenCC, monolingual dictionary entries, essays, and literature while requesting feedback on register. Five focused hours distributed through a week usually create more retrieval than one long weekend session.",
      "learnwelsh",
      "s4c-learners",
      "corcencc"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build three linked repertoires: a consistent home dialect for speaking, a broad listening repertoire, and a modern written register. Record a two-minute diary, transcribe it, and compare the phrases with corpus results; this turns vague fluency goals into observable choices. Keep mutation triggers in chunks—o Gaerdydd “from Cardiff,” yng Nghymru “in Wales”—and mark whether a new form is northern, southern, formal, literary, or widely shared. Once conversation is comfortable, read one author or topic deeply enough for vocabulary to recur.",
      "corcencc",
      "learnwelsh"
    ),
    mediaPractice: cited(
      "S4C's learner pages point toward clear programmes, subtitles, and general-audience material, while Hansh offers shorter digital-first comedy and stories. Use Welsh subtitles before English ones: first watch for situation, then read, then replay without text. Radio and podcasts remove visual support and expose regional rhythm. Songs help memory but can stretch vowels or use poetic order, so check a prose source before copying a lyric as everyday speech.",
      "s4c-learners",
      "s4c-hansh"
    ),
    dictionariesAndCorpora: cited(
      "Geiriadur Prifysgol Cymru is the standard historical dictionary and is invaluable for etymology, dated senses, plurals, gender, and cited usage; it is not merely an English lookup list. Geiriadur yr Academi is especially useful in the English-to-Welsh direction. CorCenCC contains roughly eleven million words of spoken, written, and electronic Welsh and can filter examples by mode, region, genre, and other variables. Search both the unmutated lemma and forms you actually heard.",
      "gpc",
      "academy-dictionary",
      "corcencc"
    ),
    resources: [
      { type: "course", title: "Learn Welsh / Dysgu Cymraeg", url: "https://learnwelsh.cymru/", level: "all", description: cited("The national adult-learning network offers tutor-led and self-study courses from Entry through Proficiency, with northern and southern pathways and local providers.", "learnwelsh") },
      { type: "corpus", title: "CorCenCC", url: "https://corcencc.org/", level: "intermediate", description: cited("Search authentic spoken, written, and electronic Welsh, filter results, and use the linked Tiwtiadur learning tools.", "corcencc") },
      { type: "dictionary", title: "Geiriadur Prifysgol Cymru", url: "https://www.welsh-dictionary.ac.uk/", level: "advanced", description: cited("The standard historical dictionary supplies evidence-rich definitions, forms, etymologies, and quotations for serious reading and writing.", "gpc") },
      { type: "dictionary", title: "Geiriadur yr Academi", url: "https://geiriaduracademi.org/", level: "all", description: cited("A detailed English–Welsh dictionary useful when choosing among context-sensitive equivalents instead of translating mechanically.", "academy-dictionary") },
      { type: "media", title: "S4C Dysgu Cymraeg", url: "https://www.s4c.cymru/en/dysgu-cymraeg", level: "all", description: cited("A learner-oriented route into S4C programmes, subtitle guidance, and material selected for clear context and accessible language.", "s4c-learners") },
      { type: "media", title: "Hansh", url: "https://www.s4c.cymru/hansh", level: "intermediate", description: cited("Short-form comedy, documentary, and social storytelling made for younger digital audiences rather than as artificial course dialogue.", "s4c-hansh") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Welsh vocabulary carries several histories at once: inherited Brittonic roots, Latin layers, English loans, learned coinages, dialect words, and compounds whose pieces remain vivid. Popular “untranslatable Welsh words” lists often turn ordinary, flexible words into national mysticism. Hiraeth matters because speakers and writers use it, not because English supposedly cannot approach its meanings. The best way to appreciate a word is to watch it move through conversation, song, news, and literature.",
      "gpc",
      "corcencc"
    ),
    notableWords: [
      { term: "hiraeth", meaning: "longing, homesickness, yearning", note: cited("A powerful but context-sensitive word, used for people, places, periods, and belonging. Translate the sentence rather than declaring it untranslatable.", "gpc", "corcencc") },
      { term: "cwtsh / cwtch", meaning: "cuddle; snug or safe nook", note: cited("Especially associated with southern Welsh and also borrowed into Welsh English. Spelling and sense vary by speaker and context.", "gpc", "corcencc") },
      { term: "eisteddfod", meaning: "competitive festival of literature, music, and performance", note: cited("Literally built from elements associated with sitting and gathering, the word now names local, youth, and national institutions rather than one identical event.", "gpc") },
      { term: "cynefin", meaning: "habitat; familiar environment; sense of place", note: cited("Used technically in ecology and more broadly for the environment that makes a person or community at home.", "gpc", "corcencc") },
      { term: "hwyl", meaning: "spirit, fun, mood; a sailing or eloquent lift", note: cited("Its meanings range beyond “fun”; the farewell hwyl and phrase hwyl fawr belong to ordinary use.", "gpc") },
      { term: "llyfrgell", meaning: "library", note: cited("A transparent compound of llyfr “book” and cell “cell/chamber,” with soft mutation inside the compound—a miniature grammar lesson.", "gpc") },
      { term: "pendroni", meaning: "to puzzle, wonder, brood", note: cited("A vivid verb-noun for turning something over mentally; corpus examples show why dictionary glosses need real sentences.", "gpc", "corcencc") }
    ],
    loanwordLayers: cited(
      "Latin loans entered at different periods, including words tied to Christianity and literacy. English loans range from thoroughly integrated everyday forms to visible recent borrowings, and speakers differ in what they prefer. Welsh also creates terms through compounding and planned terminology: cyfrifiadur “computer” relates to cyfrif “count,” while rhyngrwyd “internet” evokes an inter-network. Purism is a poor guide to actual competence; a natural speaker may choose an inherited word, a Welsh coinage, an adapted loan, or code-switching according to audience.",
      "gpc",
      "corcencc",
      "welsh-infrastructure"
    ),
    idioms: [
      { original: "Mae hi'n bwrw hen wragedd a ffyn.", translation: "It's raining very heavily.", note: "Literally “It is throwing old women and sticks”; a memorable rain idiom, best used playfully rather than as the only natural weather sentence." },
      { original: "Ar ben y byd", translation: "Over the moon; extremely happy", note: "Literally “on top of the world”; its imagery aligns closely with English, making it useful without being exoticized." },
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
      "Welsh is Celtic because of historical descent, not because of scenery, music, or a mystical national temperament. Within Celtic it belongs to Brittonic with Cornish and Breton; Irish, Scottish Gaelic, and Manx are Goidelic relatives. Family resemblance appears in mutations, prepositions, and inherited words, while each language has its own long sound changes and contact history. English is genealogically distant but socially inseparable from the story of modern Welsh.",
      "glottolog-welsh",
      "wiki-welsh"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Welsh culture is not one heritage display. The language belongs in the National Eisteddfod and a local eisteddfod, but also in school corridors, football terraces, queer arts, farming, science communication, chapel and secular life, comedy, rap, public administration, and ordinary disagreement. Revitalization is equally more than counting learners: speakers need homes, jobs, education, services, leisure, and relationships in which choosing Welsh remains easy. A respectful learner avoids treating fluent speakers as free tutors or every conversation as a political test. Ask whether Welsh is welcome, persist when a bilingual person initially answers in English, and participate in the activity itself—singing, volunteering, sport, books, coding, or coffee—not only in “language practice.”",
  resources: [
    { type: "course", title: "Learn Welsh / Dysgu Cymraeg", url: "https://learnwelsh.cymru/", level: "all", description: cited("Nationally coordinated online and face-to-face adult courses with progression from Entry to Proficiency.", "learnwelsh") },
    { type: "app", title: "SaySomethinginWelsh", url: "https://www.saysomethingin.com/welsh", level: "beginner", description: "Audio-led speaking practice that emphasizes rapid production; best paired with reading, feedback, and community use." },
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
    { original: "Esgusodwch fi", translation: "Excuse me", usageNote: "Useful for getting attention politely." },
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
    { id: "wiki-welsh", title: "Welsh language", url: "https://en.wikipedia.org/wiki/Welsh_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of the Welsh language", url: "https://en.wikipedia.org/wiki/History_of_the_Welsh_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-morphology", title: "Colloquial Welsh morphology", url: "https://en.wikipedia.org/wiki/Colloquial_Welsh_morphology", publisher: "Wikipedia", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Welsh Language Guide: Sounds, Mutations, Grammar and Modern Use",
    description: "Learn how Welsh works through real examples: pronunciation, initial mutations, north and south varieties, history, modern culture, phrases, and trusted resources."
  }
} satisfies LanguageGuide;
