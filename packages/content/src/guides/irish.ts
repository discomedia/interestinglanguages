import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Scottish Gaelic",
    relationship: "Closest major Goidelic relative",
    explanation: cited(
      "Irish and Scottish Gaelic descend from the medieval Gaelic continuum and still share conspicuous vocabulary, grammatical structures, and spelling principles. Donegal Irish often makes the relationship especially audible. They are nevertheless separate modern languages with different standards, sound changes, and public histories; knowledge of one gives leverage, not effortless comprehension of the other.",
      "wiki-irish",
      "glottolog"
    )
  },
  {
    name: "Manx",
    relationship: "Revived Goidelic sister language",
    explanation: cited(
      "Manx belongs to the same Goidelic branch and preserves many recognizable structures, although its English-influenced conventional spelling looks strikingly different from Irish. Its twentieth-century revitalization also offers a useful comparison: language continuity can include new speakers, recordings, schools, and deliberate community work without making the result inauthentic.",
      "wiki-irish",
      "glottolog"
    )
  },
  {
    name: "Welsh",
    slug: "welsh",
    relationship: "Brittonic Celtic relative",
    explanation: cited(
      "Welsh and Irish are Celtic relatives in different branches. Both use initial consonant changes and inflected prepositions, but centuries of separate development produced very different core vocabulary, sound systems, and everyday grammar. The word Celtic describes historical descent, not mutual intelligibility.",
      "wiki-irish",
      "glottolog"
    )
  },
  {
    name: "English",
    relationship: "Dominant contact language",
    explanation: cited(
      "English is Germanic rather than Celtic, yet it has been Irish's most consequential contact language for centuries. Political power, schooling, migration, and mass media drove language shift, while Irish shaped Irish English vocabulary, syntax, names, and conversational style. Today's speakers may code-switch, translate professionally, or keep particular relationships and activities in Irish.",
      "wiki-history",
      "cso-2022"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const irishGuide = {
  slug: "irish",
  name: "Irish",
  autonym: "Gaeilge",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Irish is a living Goidelic language with regional native-speaking communities, expanding urban networks, a formidable literary record, and a grammar that makes sound, place, and relationship visible inside everyday words.",
  family: "Indo-European, Celtic, Goidelic",
  macroRegion: "Ireland, especially Gaeltacht communities, with urban and diaspora networks",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Irish lets a learner hear Ireland on different terms: not as decorative heritage, but through family talk, sharp radio debate, island storytelling, football commentary, contemporary fiction, memes, music, and ordinary plans for tomorrow.",
  hero: {
    imageAlt: "Irish-language books and contemporary community media representing Gaeilge as a language in daily use.",
    callToActionLabel: "Hear Gaeilge in use"
  },
  classification: "A Goidelic Celtic language closely related to Scottish Gaelic and Manx",
  speakerCommunity: "Irish belongs to overlapping communities. In Gaeltacht districts in Donegal, Mayo, Galway, Kerry, Cork, Waterford, and Meath, it can be a home language and the ordinary language of neighbours, schools, work, sport, and local argument. Elsewhere, speakers build Irish-speaking lives through Gaelscoileanna, universities, families, arts, media, and urban networks. Census 2022 recorded 1,873,997 people aged three or over in the Republic who said they could speak Irish, but only nearly 72,000 reported using it daily outside education. In Gaeltacht areas, just over 65,000 reported an ability and just over 20,000 daily use. These self-reports cover very different proficiencies. The honest picture is neither “everybody speaks it” nor “nobody really does”: Irish is lived intensely by a minority, known by many more, creatively productive, and under pressure where intergenerational use is weakest.",
  facts: [
    { label: "Family", value: "Indo-European · Celtic · Goidelic" },
    { label: "Republic of Ireland, 2022", value: "1,873,997 reported an ability to speak Irish; nearly 72,000 used it daily outside education" },
    { label: "Community heartlands", value: "Gaeltacht areas in seven counties, alongside urban and all-island networks" },
    { label: "Status", value: "First official language of Ireland; an official EU language" },
    { label: "Writing", value: "Latin alphabet; acute accent (síneadh fada) marks long vowels" },
    { label: "Major dialect groupings", value: "Munster, Connacht, and Ulster, with substantial local variation" }
  ],
  learnerOverview: "A good course quickly gives you sentences that work: Tá mé réidh “I am ready,” Ba mhaith liom caife “I would like coffee,” and An dtuigeann tú? “Do you understand?” The surprises are systematic. Consonants are broad or slender; word beginnings change after familiar triggers; and “have,” “like,” and “know” are often relationships involving prepositions. Learn them as meaningful phrases, not penalties on a grammar test. Choose one regional audio model early—the standard regulates writing more than pronunciation—then listen broadly. Put Irish around an activity: attend a conversation circle, follow a presenter, read with audio, play a sport, or message a friend. Native Gaeltacht speech, fluent new-speaker usage, formal public Irish, and classroom interlanguage are not interchangeable; place and register labels help you navigate them.",
  origins: {
    overview: cited(
      "The oldest directly attested ancestor is Primitive Irish, carved in ogham—usually names in short memorial inscriptions—from roughly the fourth century onward. Christian manuscript culture brought the Latin alphabet. From the sixth century, Old Irish appears in glosses and a large learned tradition with intricate verb and sound systems. Middle Irish followed, and a shared Classical Gaelic standard served poets and scholars in Ireland and Gaelic Scotland for centuries. Modern dialects did not suddenly replace it: speech kept changing while a conservative written register crossed regional boundaries. Irish therefore has both unusual textual depth and a long history of distance between a prestigious page and local speech.",
      "wiki-history",
      "wiki-irish",
      "maynooth-history"
    ),
    timeline: [
      {
        period: "c. 4th–6th centuries",
        event: cited("Ogham inscriptions preserve Primitive Irish, most often as compact names and genealogical formulas cut along stone edges. They are precious evidence, but not transcripts of everyday conversation or proof that Irish was used only for monuments.", "wiki-history", "maynooth-history")
      },
      {
        period: "c. 6th–10th centuries",
        event: cited("Old Irish appears in manuscript glosses and develops across law, narrative, poetry, genealogy, religion, and scholarship. Latin and Irish coexisted in learned environments, producing loans and a multilingual intellectual culture rather than two sealed worlds.", "wiki-history", "maynooth-history")
      },
      {
        period: "c. 10th–17th centuries",
        event: cited("Middle Irish and then Early Modern Irish support a wide manuscript world. A standardized Classical Gaelic register connected professional literary families in Ireland and Scotland even as local spoken forms diverged.", "wiki-history", "wiki-irish")
      },
      {
        period: "17th–19th centuries",
        event: cited("Conquest, confiscation, the collapse of learned patronage, penal and economic pressures, English-dominant administration, famine, and migration transformed the language ecology. Irish remained widely spoken into the nineteenth century, but catastrophic demographic loss and language shift pushed it toward western districts.", "wiki-history", "maynooth-history")
      },
      {
        period: "1893–1945",
        event: cited("The Gaelic League, writers, teachers, collectors, and political movements made Irish central to cultural revival. Independence brought constitutional recognition and compulsory school study, but state status could not by itself reproduce dense networks of home and community use.", "wiki-history", "wiki-irish")
      },
      {
        period: "1945–present",
        event: cited("Spelling reform and An Caighdeán Oifigiúil created a common official written norm. Later decades brought Raidió na Gaeltachta, TG4, Irish-medium education, new urban networks, digital publishing, EU working-language infrastructure, and local language-planning efforts, alongside continued concern about daily use in Gaeltacht communities.", "caighdean", "cso-2022", "tg4")
      }
    ],
    contactHistory: cited(
      "Latin vocabulary entered through Christianity and learning: eaglais “church” ultimately reflects ecclesia, while leabhar “book” is associated with liber. Norse settlement left a smaller maritime and place-name layer. Anglo-Norman French entered law, material culture, and administration; English later became the social language of power and a huge vocabulary source. Loans fit Irish sound patterns, gender, plurals, and mutations. Contact also ran outward: smithereens and slogan have Gaelic histories, and Irish English preserves effects of bilingualism. Speakers now coin terms, adapt international words, or code-switch according to audience. Ask not whether a word is “pure,” but who uses it and where.",
      "wiki-history",
      "teanglann",
      "corpas"
    ),
    standardization: cited(
      "An Caighdeán Oifigiúil is the official standard used in state writing and widely taught in schools. The mid-twentieth-century spelling reform removed many silent letters and regularized forms; later editions revised grammatical guidance. It is chiefly a written standard, not a single prescribed accent. A broadcaster from Corca Dhuibhne, a writer from Conamara, and a speaker from Gaoth Dobhair may all write standard forms while pronouncing them differently or choosing regional grammar in speech. Standardization solves genuine problems of shared publication and administration, but learners should not treat every dialect form as an error. Read the standard, speak from a coherent dialect model, and learn to recognize the alternatives that actual people use.",
      "caighdean",
      "wiki-orthography",
      "wiki-irish"
    )
  },
  variants: {
    overview: cited(
      "The familiar three-way map—Munster, Connacht, Ulster—is a useful beginning, not three uniform boxes. Kerry Irish differs within Munster; Conamara, the Aran Islands, and Mayo are not identical within Connacht; and surviving Ulster Irish is concentrated chiefly in Donegal, with important local differences. Vocabulary, verb endings, stress, vowels, and common particles vary. There is also fluent urban Irish shaped by schools, mixed-dialect networks, media, and the standard. Calling all non-Gaeltacht speech “artificial” ignores real families and communities; pretending all varieties carry the same transmission history ignores social reality.",
      "wiki-irish",
      "corpas",
      "cso-2022"
    ),
    items: [
      { name: "Munster Irish", note: cited("Spoken in parts of Kerry, Cork, and Waterford. Learners often notice stress moving away from the first syllable when a historically long or heavy later syllable attracts it, as well as synthetic verb endings and regional vocabulary. Corca Dhuibhne and Múscraí provide different strong models.", "wiki-irish", "teanglann") },
      { name: "Connacht Irish", note: cited("Conamara and the Aran Islands are major contemporary centres, while Mayo preserves distinct traditions. Connacht forms have influenced teaching and media, but “Connacht Irish” is not synonymous with the official standard or one universal pronunciation.", "wiki-irish", "teanglann") },
      { name: "Ulster Irish", note: cited("Now centred in Donegal, especially the north-west. Pronouns, negative forms, vocabulary, and sound patterns can resemble Scottish Gaelic more closely than southern varieties do. Gaoth Dobhair audio is an excellent antidote to the idea that spelling dictates one pronunciation.", "wiki-irish", "teanglann") },
      { name: "An Caighdeán Oifigiúil", note: cited("The common official written norm supports legislation, education, translation, and publication. It selects and regularizes forms from a dialect landscape; it does not supply a mandatory spoken accent.", "caighdean", "wiki-orthography") },
      { name: "Urban and new-speaker Irish", note: cited("Dublin, Belfast, Galway, and other towns support speakers who acquired Irish through family, Irish-medium education, adult learning, or mixed networks. Their usage may combine standard and regional features. Evaluate it by context and competence, not by a simplistic native-versus-fake test.", "cso-2022", "foras", "tuairisc") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Irish spelling becomes intelligible when you stop asking each letter for one English sound. Every consonant belongs to a broad or slender series. Broad consonants are typically velarized—the back of the tongue is raised—while slender consonants are palatalized toward a y-like position. Surrounding vowels signal the series, summarized by caol le caol agus leathan le leathan, “slender with slender and broad with broad.” The extra vowel letters are often guides to consonant quality, not extra syllables. Dialects realize the contrast differently, so dictionary audio matters more than an improvised English respelling.",
      "wiki-orthography",
      "teanglann"
    ),
    script: "Modern Latin alphabet with the acute accent; IPA and dialect audio are useful pronunciation aids",
    soundSystem: cited(
      "Long and short vowels contrast: fear “man” and féar “grass” differ in length and quality. Consonants change at word boundaries for grammatical reasons. Lenition (séimhiú) is usually written with h: bád becomes bhád, whose initial sound may be /w/ or /v/ by dialect. Eclipsis (urú) writes the new sound before the old letter: bád becomes mbád, pronounced initially /m/. Irish r, l, and n have contrasts rarely represented fully in spelling, and clusters may contain an audible inserted vowel, so ainm “name” can sound like two syllables. There is no neutral pan-Irish accent; choose audio labelled for Ulster, Connacht, or Munster.",
      "wiki-mutations",
      "wiki-orthography",
      "teanglann"
    ),
    prosody: cited(
      "Stress normally falls on the first syllable, but Munster varieties often shift it when a later syllable is historically long or otherwise heavy. Unstressed vowels reduce, and connected speech reshapes small words: particles and pronouns do not arrive with classroom spacing. Intonation carries stance and turn-taking just as powerfully as consonants do. Shadow a single regional speaker through full questions, stories, and corrections; a carefully produced isolated word may still sound foreign if every phrase follows English timing.",
      "wiki-irish",
      "teanglann"
    ),
    learnerTraps: [
      "Pronouncing every written vowel separately instead of reading vowels as cues to broad and slender consonants",
      "Treating bh, mh, dh, and gh as fixed English-style digraphs despite position and dialect differences",
      "Ignoring mutation in speech because the dictionary headword looks familiar",
      "Using one online voice as if it represented every Gaeltacht variety",
      "Dropping the fada, which can distinguish words and is part of correct spelling",
      "Giving every syllable equal English-style stress"
    ],
    sampleWords: [
      { original: "bád", transliteration: "approximately /bˠaːd̪ˠ/", translation: "boat", note: "Both consonants are broad and the á is long; compare the grammatical forms an bád, mo bhád, and i mbád." },
      { original: "báid", transliteration: "approximately /bˠaːdʲ/", translation: "boats; of a boat", note: "The final consonant is slender, signalled by i; that contrast carries grammatical information." },
      { original: "ceol", transliteration: "roughly kyohl; dialect realization varies", translation: "music", note: "The initial c is slender. Do not pronounce e and o as two independent vowel syllables." },
      { original: "bhfuil", transliteration: "approximately /wɪlʲ/ or regional equivalent", translation: "is; are (dependent form)", note: "In an bhfuil…? the written bhf represents eclipsed f; the b is not sounded separately." },
      { original: "oíche", transliteration: "approximately EE-huh / EE-khuh by dialect", translation: "night", note: "The long initial vowel and final slender consonant vary regionally; use Teanglann's three-dialect audio." },
      { original: "ainm", transliteration: "approximately AN-im", translation: "name", note: "Many speakers insert a vowel in the difficult nm cluster, although no extra vowel is written." },
      { original: "Gaeilge", transliteration: "roughly GWAYL-guh, GAEL-ig, or regional equivalent", translation: "Irish language", note: "The autonym itself is a compact demonstration of dialect variation; Gaeilge, Gaolainn, and Gaeilig may all be encountered." }
    ]
  },
  writing: {
    overview: cited(
      "Modern Irish uses Roman type and the acute accent called the síneadh fada. Older printed books commonly use Gaelic type, whose letterforms can initially look like another alphabet but encode Latin letters. Traditional lenition was marked by a dot above a consonant; modern spelling normally follows it with h, so a dotted b corresponds to bh. Ogham matters historically and culturally but is not the everyday script of modern Irish. Literacy therefore requires three modest extensions to familiar Latin letters: reliable fadas, mutation spelling, and enough palaeographic confidence to recognize older type.",
      "wiki-orthography",
      "wiki-orthography"
    ),
    primaryScript: "Latin alphabet; older Gaelic type and historical ogham appear in cultural and scholarly contexts",
    romanization: cited("Irish does not need a separate romanization because it is already written in the Latin alphabet. English-style pronunciation respellings are temporary aids at best: they conceal broad/slender distinctions and become misleading across dialects.", "wiki-orthography"),
    spellingNorms: cited(
      "The spelling principle caol le caol agus leathan le leathan requires vowels on either side of a consonant group to agree in signalling slenderness (e/i) or broadness (a/o/u). Morphological boundaries and historical spelling complicate the rule, but it explains forms such as bád and báid. Prefix letters used for eclipsis remain lowercase in ordinary title capitalization, and fadas should survive capitals: Éire, not Eire. The official standard simplified many pre-reform spellings, so older texts and dialect writing may present unfamiliar forms without being careless.",
      "caighdean",
      "wiki-orthography",
      "wiki-orthography"
    ),
    styleNotes: [
      cited("Use Irish quotation, capitalization, and punctuation conventions from an edited contemporary source rather than mechanically copying English typography.", "caighdean"),
      cited("Check names and official terminology in Foclóir.ie or Téarma.ie; the first plausible dictionary equivalent may have the wrong register or grammatical frame.", "focloir", "foras"),
      cited("When reading pre-reform material, expect additional silent letters and the Gaelic typeface; normalize for searching only after preserving what the source actually says.", "wiki-orthography"),
      "Install an Irish keyboard or learn the long-press shortcuts so missing fadas do not become a permanent habit."
    ]
  },
  grammar: {
    overview: cited(
      "Irish grammar is less a set of exotic exceptions than a network of recurring relationships. The default clause begins with a verb; nouns have gender and case remnants; prepositions fuse with pronouns; and the first sound of a word changes to show its environment. The language often divides meanings differently from English: possession is “at” someone, a feeling may be “on” someone, and knowing a fact versus knowing a person uses different constructions. These patterns become manageable when learned as contrasting sentences with audio.",
      "wiki-irish",
      "focloir"
    ),
    typologicalProfile: cited(
      "Irish is primarily verb–subject–object (VSO): Léann Síle an leabhar, literally “Reads Síle the book.” It has two present-tense verbs conventionally translated as “be”: the substantive verb bí describes states and location, while the copula is classifies or identifies. Noun phrases place many adjectives after nouns, and possession normally uses prepositional structures rather than an independent verb “have.”",
      "wiki-irish",
      "maynooth-history"
    ),
    morphology: cited(
      "Nouns distinguish masculine and feminine gender, singular and plural, and limited case forms; the article and a following adjective can reveal gender through mutation. Verbs combine tense or mood with independent and dependent forms selected by particles. Traditional synthetic endings encode the subject inside the verb, while analytic forms use separate pronouns, with distribution varying by dialect. Verbal nouns do work performed by English infinitives and participles. Mutation reaches across morphology and syntax, so a learner must know both the base word and its predictable contextual shapes.",
      "wiki-mutations",
      "focloir",
      "teanglann"
    ),
    syntax: cited(
      "A finite verb normally leads the clause, followed by subject and complements. Negatives, questions, relative clauses, and subordinate clauses introduce particles that may select a dependent verb form and trigger mutation. There are no universal standalone equivalents of English yes and no: speakers answer by repeating the appropriate verb, as in An dtuigeann tú? Tuigim / Ní thuigim, “Do you understand? I understand / I do not understand.” Focus constructions with the copula allow a speaker to foreground who, what, or where without forcing English order onto Irish.",
      "wiki-irish",
      "wiki-mutations",
      "focloir"
    ),
    advancedPainPoints: [
      "Choosing dialectal versus standard verb and pronoun forms consistently",
      "Predicting lenition, eclipsis, or no mutation after overlapping triggers",
      "Controlling gender and genitive constructions in spontaneous speech",
      "Distinguishing the copula from forms of bí in classification and description",
      "Interpreting fast sequences of particles, dependent verbs, and pronouns",
      "Using verbal-noun complements without importing English infinitive syntax"
    ],
    topics: [
      {
        title: "Verb-first clauses",
        body: cited("The neutral order begins with the finite verb. This is not merely literary: everyday sentences such as Chonaic mé é “I saw him/it” place the past verb before the subject mé. Train comprehension by locating the verb and its polarity first, then the subject.", "wiki-irish", "focloir"),
        example: "Léann Aoife an nuacht gach maidin.",
        exampleTranslation: "Aoife reads the news every morning. (Literally: Reads Aoife the news every morning.)"
      },
      {
        title: "The substantive verb and the copula",
        body: cited("Tá answers where or how: Tá Nóra sa bhaile “Nóra is at home.” Is links identity or class: Is múinteoir í Nóra “Nóra is a teacher.” English “is” hides this division, so learn paired situations. The copula has its own negative and past/conditional forms and is not simply another conjugation of bí.", "focloir", "teanglann"),
        example: "Tá an caife te, ach is caife maith é.",
        exampleTranslation: "The coffee is hot, and it is good coffee."
      },
      {
        title: "Lenition and eclipsis",
        body: cited("Mutation marks grammatical context at the word's beginning. Mo lenites: mo bhróg “my shoe.” Ár eclipses: ár mbróg “our shoe.” The article, numbers, particles, and prepositions create further patterns. Rather than memorizing one giant table, store a trigger with several useful nouns and notice the sound as well as the spelling.", "wiki-mutations", "teanglann"),
        example: "Tá mo bhád in aice lenár mbád.",
        exampleTranslation: "My boat is beside our boat."
      },
      {
        title: "Prepositional pronouns",
        body: cited("A preposition and pronoun fuse into a single form: le + mé becomes liom “with me,” and ag + mé becomes agam “at me.” These forms express core meanings, not decorative idioms. Tá carr agam means “I have a car”; Is maith liom é means “I like it”; Tá ocras orm says hunger is “on me.”", "focloir", "teanglann"),
        example: "Tá dhá cheist agam agus tá cabhair uaim.",
        exampleTranslation: "I have two questions and I need help. (Literally: two questions are at me and help is from me.)"
      },
      {
        title: "Verbal nouns",
        body: cited("The verbal noun appears after ag for an activity in progress: Tá siad ag caint “They are talking.” After another verb, ownership and word order matter: Ba mhaith liom Gaeilge a fhoghlaim “I would like to learn Irish.” Each verbal noun has lexical details, including its genitive and complements, so learn it with a sentence rather than as an English infinitive.", "focloir", "teanglann"),
        example: "Bhí na páistí ag léamh an scéil.",
        exampleTranslation: "The children were reading the story."
      },
      {
        title: "Questions and short answers",
        body: cited("Irish normally answers a yes/no question by echoing its verb in a positive or negative form. This makes tense and person part of the answer. An mbeidh tú ann? Beidh / Ní bheidh, “Will you be there? I will / I will not.” Memorized sea and ní hea belong primarily to copular questions, not every situation.", "focloir", "wiki-irish"),
        example: "Ar chuala tú an clár? Chuala. / Níor chuala.",
        exampleTranslation: "Did you hear the programme? Yes, I did. / No, I didn't."
      },
      {
        title: "Gender inside the noun phrase",
        body: cited("Gender can alter the article, mutation, adjective, and genitive phrase. Bean “woman” is feminine, producing an bhean “the woman,” while fear “man” is masculine, an fear. Dialects and lexical exceptions matter, but article-plus-noun chunks make gender audible instead of an abstract label.", "focloir", "teanglann"),
        example: "Chonaic mé an bhean óg agus an fear óg.",
        exampleTranslation: "I saw the young woman and the young man."
      },
      {
        title: "Possession and the genitive",
        body: cited("Two nouns can form a genitive relationship, traditionally with the possessor second: doras an tí “the door of the house.” Modern usage varies in how fully complex phrases mark the genitive, and the standard, dialects, and spontaneous speech do not always align. Read edited examples before constructing long official-sounding compounds.", "caighdean", "focloir"),
        example: "Tá doras an tí oscailte.",
        exampleTranslation: "The door of the house is open."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Place changes what “speaking Irish” means. A Gaeltacht is a legally designated area, not a guarantee that every resident uses Irish daily. Census 2022 found growth in Gaeltacht population but a fall to 66 percent in the proportion reporting Irish ability; daily use among those speakers was 31 percent. Strong networks persist, yet housing, commuting, tourism, and English-dominant institutions can reduce the situations in which Irish is the easy default. Beyond the Gaeltacht, communities use Irish in education, media, arts, work, and friendship; diaspora groups have a different ecology again.",
      "cso-2022",
      "foras"
    ),
    regions: [
      { place: "County Galway and the Aran Islands", note: cited("Conamara contains the largest concentration of daily Gaeltacht use and a powerful media and literary infrastructure. The Aran Islands preserve distinct speech, while Galway city supports both Gaeltacht-linked and urban networks.", "cso-2022", "rte-rnag") },
      { place: "County Donegal", note: cited("The Gaoth Dobhair, Cloich Cheann Fhaola, and Na Rosa area sustains major Ulster Irish communities, music, schooling, and media. Its speech should be heard directly rather than treated as a list of deviations from a southern norm.", "cso-2022", "teanglann") },
      { place: "Kerry, Cork, and Waterford", note: cited("Corca Dhuibhne, Uíbh Ráthach, Múscraí, and An Rinn represent distinct Munster traditions. Community density and daily use vary sharply even within legal Gaeltacht boundaries.", "cso-2022") },
      { place: "Mayo and Meath", note: cited("Mayo retains historically rooted Connacht varieties; the Meath Gaeltacht communities of Ráth Chairn and Baile Ghib were established in the twentieth century by families from Conamara and developed their own local institutions.", "wiki-irish", "cso-2022") },
      { place: "Belfast and Northern Ireland", note: cited("Irish-medium education, the Shaw's Road community, arts organizations, classes, and neighbourhood initiatives sustain a growing public network. Language politics matter, but ordinary speakers' educational, family, and creative lives cannot be reduced to a constitutional position.", "foras") },
      { place: "Dublin and other cities", note: cited("Large numbers of learners and fluent speakers create schools, families, professional networks, media, festivals, and social spaces outside designated Gaeltacht areas. Urban Irish is a social reality, not one homogeneous accent.", "cso-2022", "tuairisc") },
      { place: "Diaspora", note: cited("Universities, cultural centres, online groups, and family networks support Irish in Britain, North America, Australia, and elsewhere. Diaspora learning is strongest when it connects to current speakers and media rather than reenacting a timeless “Gaelic” past.", "foras", "dcu-learn") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Irish is demanding for an English-speaking learner because familiar letters conceal a different sound organization and because grammar operates at word beginnings as well as endings. Yet the system is learnable: spelling carries information, high-frequency sentence frames recur constantly, and excellent free dictionaries provide dialect audio. There is no reliable universal number of hours to fluency. Someone reclaiming school Irish, a linguist reading Old Irish, and a beginner aiming for relaxed Gaeltacht conversation have different starting points and destinations.",
      "teanglann",
      "focloir"
    ),
    easierAspects: [
      "A Latin alphabet and a spelling system that becomes informative after its principles are learned",
      "Strong free reference tools with grammar information and three-dialect audio",
      "Abundant broadcasting, subtitles, news, literature, and structured adult courses",
      "A compact set of productive conversational frames",
      "Many communities actively welcome learners who commit to using the language"
    ],
    hardAspects: [
      "Broad and slender consonants absent as a systematic contrast in English",
      "Mutation triggers distributed across articles, possession, numbers, particles, and syntax",
      "A written standard alongside multiple living pronunciation and grammar models",
      "Verb-first order, dependent verb forms, and copular constructions",
      "Gender, genitive phrases, and irregular plurals",
      "Fast native speech with reduced particles and locally specific vocabulary"
    ],
    plateauRisks: [
      "Continuing to pronounce from print without adopting a regional audio model",
      "Knowing grammar terminology but never retrieving whole sentences in conversation",
      "Treating school examination Irish as the only legitimate register",
      "Consuming learner content indefinitely without entering general-audience media",
      "Switching to English whenever a fluent speaker answers quickly",
      "Collecting decontextualized “untranslatable” words instead of reading and listening"
    ],
    workload: cited(
      "Pair a structured course with ten minutes of one-dialect audio daily. Automate questions, negatives, possession, and frequent prepositional-pronoun phrases before tackling every mutation table. At intermediate level, transcribe and retell short clips and meet the same speakers regularly. Advanced work should rotate among radio, edited prose, dialect literature, corpus searches, and feedback. Frequency matters more than heroic weekend sessions.",
      "dcu-learn",
      "teanglann",
      "rte-rnag"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build one productive dialect and receptive familiarity with all three regions. Follow a course rooted in one place so pronunciation and common forms cohere, while sampling Ulster, Connacht, and Munster weekly. Label examples by place, speaker, register, and source. Record and transcribe a two-minute account, check uncertain phrases in the corpus, and ask which correction sounds natural rather than merely possible.",
      "teanglann",
      "corpas",
      "dcu-learn"
    ),
    mediaPractice: cited(
      "TG4 offers drama, documentary, sport, children's programming, and news. Raidió na Gaeltachta is indispensable for regional unscripted speech; begin with a recurring presenter and familiar topic. Tuairisc.ie supplies journalism and commentary. Use subtitles in three passes: understand the scene, mine five reusable phrases, then replay without text. Songs deepen cultural listening but stretch timing and syntax, so do not make a lyric your only conversational model.",
      "tg4",
      "rte-rnag",
      "tuairisc"
    ),
    dictionariesAndCorpora: cited(
      "Foclóir.ie is strongest from English toward contemporary Irish and provides examples and grammar support. Teanglann.ie combines the Ó Dónaill Irish–English dictionary, de Bhaldraithe English–Irish dictionary, and grammatical database, with recordings from three major dialects. Nua-Chorpas na hÉireann lets advanced users inspect real fiction, journalism, official writing, and other genres. Search a base form and its mutations; then read several lines around each result before copying it. A corpus reports usage, not automatic correctness or suitability for your conversation.",
      "focloir",
      "teanglann",
      "corpas"
    ),
    resources: [
      { type: "course", title: "Learning Irish at DCU", url: "https://www.futurelearn.com/courses/irish-language", level: "beginner", description: cited("Dublin City University's online course introduces useful Irish through contemporary cultural contexts and provides a structured entry point for independent learners.", "dcu-learn") },
      { type: "dictionary", title: "Teanglann.ie", url: "https://www.teanglann.ie/en/", level: "all", description: cited("A free dictionary and grammar hub whose most valuable learner feature is word audio from Ulster, Connacht, and Munster speakers.", "teanglann") },
      { type: "dictionary", title: "Foclóir.ie", url: "https://www.focloir.ie/", level: "all", description: cited("Foras na Gaeilge's modern English–Irish dictionary gives contextual translations, examples, and links into related grammatical resources.", "focloir") },
      { type: "corpus", title: "Nua-Chorpas na hÉireann", url: "https://corpas.focloir.ie/", level: "advanced", description: cited("A searchable contemporary corpus spanning fiction, factual writing, journalism, and official material; useful for collocation and register checks.", "corpas") },
      { type: "media", title: "TG4", url: "https://www.tg4.ie/", level: "all", description: cited("The Irish-language public-service broadcaster provides general-audience television, news, sport, children's programmes, and on-demand video.", "tg4") },
      { type: "media", title: "RTÉ Raidió na Gaeltachta", url: "https://www.rte.ie/radio/rnag/", level: "intermediate", description: cited("Live and on-demand radio offers sustained regional speech, interviews, music, news, and community coverage from Gaeltacht perspectives.", "rte-rnag") },
      { type: "media", title: "Tuairisc.ie", url: "https://tuairisc.ie/", level: "intermediate", description: cited("A current Irish-language news and analysis site that supplies daily reading beyond learner topics.", "tuairisc") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Irish words are often marketed as relics of a misty worldview, but real usage is more interesting. Meaning changes with grammar, dialect, genre, irony, and speaker. Craic came from English and became emblematic of Irishness; dúchas can concern inheritance, place, or tradition without being “untranslatable.” Approach vocabulary as evidence of people making meanings, not a cabinet of national essences.",
      "teanglann",
      "corpas"
    ),
    notableWords: [
      { term: "dúchas", meaning: "native inheritance, tradition, connection by birth or place", note: cited("Its meaning depends on context and can concern heritage, disposition, or a home territory. The national folklore collection Dúchas.ie gives the word a prominent modern institutional life.", "teanglann", "corpas") },
      { term: "meitheal", meaning: "cooperative work group; collective effort", note: cited("Traditionally associated with neighbours joining for farm work, it now productively names teams, organizations, and collaborative action. It is cultural vocabulary that remains available for new settings.", "teanglann", "corpas") },
      { term: "craic", meaning: "fun, news, entertainment, social goings-on", note: cited("Borrowed from English crack, naturalized in Irish, and later popularized in Irish English. Cad é an craic? asks what is happening as much as whether something is amusing.", "teanglann", "corpas") },
      { term: "grá", meaning: "love", note: cited("A short everyday noun with broad cultural reach. Tá grá agam duit expresses love through a construction literally involving love “at me” for you.", "focloir", "teanglann") },
      { term: "fios", meaning: "knowledge, information, awareness", note: cited("Irish distinguishes constructions: Tá a fhios agam means “I know [a fact],” literally “its knowledge is at me.” This noun unlocks a more useful sentence pattern than a one-word gloss suggests.", "focloir", "teanglann") },
      { term: "scéal", meaning: "story, account, news, situation", note: cited("The plural scéalta covers stories, while Cad é an scéal? can work as “What's the story/what's happening?” Context ranges from oral narrative to journalism and casual greeting.", "teanglann", "corpas") },
      { term: "muintearas", meaning: "kinship, affinity, belonging among people", note: cited("Especially resonant in community discussion, but not a magical untranslatable. Corpus context shows whether the emphasis is family connection, neighbourliness, or social intimacy.", "teanglann", "corpas") },
      { term: "misneach", meaning: "courage, spirit, confidence", note: cited("Used in ordinary encouragement and as the name of activist initiatives. The phrase Misneach! can urge someone to take heart.", "teanglann", "corpas") }
    ],
    loanwordLayers: cited(
      "Latin learned loans sit beside Norse maritime vocabulary, Anglo-Norman terms, and centuries of English contact. Technical Irish uses international borrowings, compounds, and planned terminology: ríomhaire “computer” relates to ríomh “calculation,” while idirlíon “internet” evokes an inter-network. Speakers do not select by etymological purity; corpus evidence distinguishes an available official term from what a genre actually prefers.",
      "focloir",
      "corpas",
      "foras"
    ),
    idioms: [
      { original: "Is glas iad na cnoic i bhfad uainn.", translation: "The grass is greener on the other side.", note: "Literally “The hills far from us are green.” The eclipsed form i bhfad is built into the phrase; distance flatters what we do not have." },
      { original: "Ar scáth a chéile a mhaireann na daoine.", translation: "People depend on one another.", note: "Literally “It is in one another's shelter that people live.” Its familiarity should not substitute for explaining the concrete cooperation at issue." },
      { original: "Níl aon tinteán mar do thinteán féin.", translation: "There's no place like home.", note: "Literally “There is no hearth like your own hearth.” A classic homecoming sentiment; do triggers lenition in thinteán." },
      { original: "Tús maith leath na hoibre.", translation: "A good start is half the work.", note: "Literally “A good beginning [is] half of the work.” A compact copula-less proverb and practical advice for starting a demanding task." },
      { original: "Mol an óige agus tiocfaidh sí.", translation: "Encourage young people and they will flourish.", note: "Literally “Praise the youth and she/it will come.” Often cited in education; óige is grammatically feminine, hence sí." },
      { original: "Ní neart go cur le chéile.", translation: "Unity is strength.", note: "Literally “There is no strength until putting together.” A compressed proverbial construction used for collective action." }
    ],
    textGenres: [
      "Early glosses, law, saga, saints' lives, genealogy, and learned verse",
      "Bardic poetry, devotional writing, and manuscript miscellanies",
      "Folklore, oral history, storytelling, song, and sean-nós performance",
      "Modernist poetry, novels, short fiction, memoir, drama, and children's literature",
      "Broadcast news, documentaries, sport, radio conversation, podcasts, and social video",
      "Public administration, translation, terminology, journalism, criticism, and everyday messaging"
    ]
  },
  relationships: {
    overview: cited(
      "Irish belongs to Goidelic with Scottish Gaelic and Manx; Welsh, Breton, and Cornish are Brittonic. “Celtic” names historical descent, not a single modern language or personality. Centuries of contact with English, Latin, Norse, and French explain social patterns and vocabulary that genealogy alone cannot.",
      "glottolog",
      "wiki-irish",
      "wiki-history"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Irish culture in Irish is not confined to folklore. It includes Gaeltacht family life, local knowledge, experimental novels, comedy, sport, queer art, political disagreement, children's television, hip-hop, science, memes, and bureaucracy. Revitalization is material: a language needs affordable homes, community-connected schools, workplaces, services, friendships, and leisure—not only status. Learners can pay teachers and creators, buy books, attend events for their substance, respect dialect expertise, and continue after an awkward reply. Do not ask a native speaker to perform authenticity or settle national politics; become a participant whose interests happen through Irish.",
  resources: [
    { type: "course", title: "Learning Irish at DCU", url: "https://www.futurelearn.com/courses/irish-language", level: "beginner", description: cited("A structured online introduction created by Dublin City University, linking language to contemporary Irish culture.", "dcu-learn") },
    { type: "dictionary", title: "Teanglann.ie", url: "https://www.teanglann.ie/en/", level: "all", description: cited("Dictionaries, grammar lookup, and exceptionally useful pronunciation recordings from the three major dialect regions.", "teanglann") },
    { type: "dictionary", title: "Foclóir.ie", url: "https://www.focloir.ie/", level: "all", description: cited("The modern English–Irish dictionary from Foras na Gaeilge, with contextual equivalents and examples.", "focloir") },
    { type: "corpus", title: "Nua-Chorpas na hÉireann", url: "https://corpas.focloir.ie/", level: "advanced", description: cited("A broad searchable corpus for testing collocations, constructions, spelling variants, and genre differences.", "corpas") },
    { type: "media", title: "TG4", url: "https://www.tg4.ie/", level: "all", description: cited("Television and on-demand Irish-language drama, documentary, sport, news, children's content, and entertainment.", "tg4") },
    { type: "media", title: "RTÉ Raidió na Gaeltachta", url: "https://www.rte.ie/radio/rnag/", level: "intermediate", description: cited("The essential radio source for long-form Gaeltacht voices, regional news, interviews, music, and live conversation.", "rte-rnag") },
    { type: "media", title: "Tuairisc.ie", url: "https://tuairisc.ie/", level: "intermediate", description: cited("Daily journalism, analysis, opinion, and cultural coverage written for Irish readers rather than as graded study material.", "tuairisc") },
    { type: "other", title: "Téarma.ie", url: "https://www.tearma.ie/", level: "intermediate", description: cited("Foras na Gaeilge's terminology database is particularly useful for technical, professional, and institutional vocabulary.", "foras") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Dia dhuit", transliteration: "roughly DEE-uh gwit; varies by dialect", translation: "Hello", literalMeaning: "God to you", usageNote: "Traditional singular greeting; many speakers also use Haigh or Heileo informally. The reply is Dia is Muire dhuit." },
    { original: "Conas atá tú?", translation: "How are you?", literalMeaning: "How are you?", usageNote: "Widely taught; Cad é mar atá tú? is characteristic in Ulster, and Cén chaoi a bhfuil tú? is common in Connacht." },
    { original: "Tá mé go maith, go raibh maith agat.", translation: "I'm well, thank you.", literalMeaning: "I am well; may good be at you", usageNote: "Go raibh maith agat is singular; agaibh addresses more than one person or is used politely in some contexts." },
    { original: "Cad is ainm duit?", translation: "What's your name?", literalMeaning: "What name is to you?" },
    { original: "Dana is ainm dom.", translation: "My name is Dana.", literalMeaning: "Dana is name to me" },
    { original: "Tá mé ag foghlaim Gaeilge.", translation: "I'm learning Irish.", literalMeaning: "I am at learning Irish" },
    { original: "Ní thuigim.", translation: "I don't understand.", usageNote: "Thuigim is the lenited present form after the negative particle ní." },
    { original: "An bhféadfá é sin a rá arís?", translation: "Could you say that again?", literalMeaning: "Could you that say again?", usageNote: "A polite conditional request; the initial bhf shows eclipsis after the question particle." },
    { original: "Níos moille, le do thoil.", translation: "More slowly, please.", literalMeaning: "Slower, with your will", usageNote: "Le do thoil is singular; le bhur dtoil addresses more than one person." },
    { original: "Cad is brí leis an bhfocal seo?", translation: "What does this word mean?", literalMeaning: "What meaning is with this word?" },
    { original: "Cá bhfuil an stáisiún?", translation: "Where is the station?", usageNote: "Cá eclipses f in bhfuil; the answer may begin Tá sé… “It is…”" },
    { original: "Ba mhaith liom caife, le do thoil.", translation: "I'd like a coffee, please.", literalMeaning: "A coffee would be good with me" },
    { original: "Cé mhéad atá air?", translation: "How much is it?", literalMeaning: "How much is on it?" },
    { original: "Tá áthas orm bualadh leat.", translation: "I'm delighted to meet you.", literalMeaning: "Joy is on me meeting with you" },
    { original: "Slán go fóill.", translation: "Goodbye for now.", literalMeaning: "Safe until later" },
    { original: "Go n-éirí leat!", translation: "Good luck!", literalMeaning: "May it rise/succeed with you!" }
  ],
  sources: [
    { id: "cso-2022", title: "Census of Population 2022 Profile 8: Irish Language and the Gaeltacht", url: "https://www.cso.ie/en/releasesandpublications/ep/p-cpp8/censusofpopulation2022profile8-theirishlanguageandeducation/irishlanguageandthegaeltacht/", publisher: "Central Statistics Office, Ireland", publishedAt: "2023-12-19", accessedAt: "2026-07-10" },
    { id: "foras", title: "Foras na Gaeilge", url: "https://www.forasnagaeilge.ie/", publisher: "Foras na Gaeilge", accessedAt: "2026-07-10" },
    { id: "caighdean", title: "An Caighdeán Oifigiúil", url: "https://www.gov.ie/en/department-of-the-taoiseach/publications/an-caighdean-oifigiuil/", publisher: "Department of the Taoiseach", updatedAt: "2017", accessedAt: "2026-07-10" },
    { id: "focloir", title: "Foclóir.ie: New English–Irish Dictionary", url: "https://www.focloir.ie/", publisher: "Foras na Gaeilge", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "teanglann", title: "Teanglann.ie: Dictionary and Language Library", url: "https://www.teanglann.ie/en/", publisher: "Foras na Gaeilge", accessedAt: "2026-07-10" },
    { id: "corpas", title: "Nua-Chorpas na hÉireann", url: "https://corpas.focloir.ie/", publisher: "Foras na Gaeilge", accessedAt: "2026-07-10" },
    { id: "tg4", title: "TG4: Irish-language public service media", url: "https://www.tg4.ie/", publisher: "TG4", accessedAt: "2026-07-10" },
    { id: "rte-rnag", title: "RTÉ Raidió na Gaeltachta", url: "https://www.rte.ie/radio/rnag/", publisher: "RTÉ", accessedAt: "2026-07-10" },
    { id: "tuairisc", title: "Tuairisc.ie", url: "https://tuairisc.ie/", publisher: "Tuairisc Bheo Teoranta", accessedAt: "2026-07-10" },
    { id: "dcu-learn", title: "Irish 101: An Introduction to Irish Language and Culture", url: "https://www.futurelearn.com/courses/irish-language", publisher: "Dublin City University / FutureLearn", accessedAt: "2026-07-10" },
    { id: "glottolog", title: "Irish", url: "https://glottolog.org/resource/languoid/id/iris1253", publisher: "Glottolog", accessedAt: "2026-07-10" },
    { id: "maynooth-history", title: "Irish Language: Historical Linguistic Overview", url: "https://mural.maynoothuniversity.ie/12890/1/Stifter%20Encyc.pdf", publisher: "Maynooth University", accessedAt: "2026-07-10" },
    { id: "wiki-irish", title: "Irish language", url: "https://en.wikipedia.org/wiki/Irish_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of the Irish language", url: "https://en.wikipedia.org/wiki/History_of_the_Irish_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-orthography", title: "Irish orthography", url: "https://en.wikipedia.org/wiki/Irish_orthography", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-mutations", title: "Irish initial mutations", url: "https://en.wikipedia.org/wiki/Irish_initial_mutations", publisher: "Wikipedia", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Irish Language Guide: Gaeilge Sounds, Grammar, Dialects and Use",
    description: "Explore living Irish through Gaeltacht communities, dialect audio, broad and slender consonants, mutations, verb-first grammar, modern media, phrases, and trusted resources."
  }
} satisfies LanguageGuide;
