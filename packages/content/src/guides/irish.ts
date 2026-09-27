import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Scottish Gaelic",
    relationship: "Closest major Goidelic relative",
    explanation: cited(
      "Irish and Scottish Gaelic grew from the same medieval Gaelic speech world. Their words, grammar, and spelling still show the family connection, especially when you listen to Donegal Irish. Each has its own modern standard and sound patterns, so knowing one helps with the other without guaranteeing comprehension.",
      "wiki-irish",
      "glottolog"
    )
  },
  {
    name: "Manx",
    relationship: "Revived Goidelic sister language",
    explanation: cited(
      "Manx is another Goidelic language. Its words and grammar can look familiar to an Irish speaker, though its spelling follows different conventions. Manx communities have used recordings, teaching, and new speakers to bring the language into new generations.",
      "wiki-irish",
      "glottolog"
    )
  },
  {
    name: "Welsh",
    slug: "welsh",
    relationship: "Brittonic Celtic relative",
    explanation: cited(
      "Welsh and Irish belong to different branches of Celtic. Both change some word beginnings and join prepositions to pronouns, but their common words and sounds differ greatly. A Welsh speaker cannot expect to understand Irish without study.",
      "wiki-irish",
      "glottolog"
    )
  },
  {
    name: "English",
    relationship: "Dominant contact language",
    explanation: cited(
      "English belongs to the Germanic family and has shaped Irish daily life for centuries. Government, schooling, migration, and media helped move many communities toward English. Irish also left words and patterns in Irish English, while today's bilingual speakers choose languages according to the people and setting.",
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
  summary: "Irish changes the beginnings of words as people speak. Hear that pattern in Gaeltacht conversation, explore three regional dialects, and learn the standard spelling that connects written Irish across communities.",
  family: "Indo-European, Celtic, Goidelic",
  macroRegion: "Ireland, especially Gaeltacht communities, with urban and diaspora networks",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Mo bhád means “my boat”; ár mbád means “our boat.” A small change at the start tells you who owns it, and real conversations give you many chances to hear that pattern.",
  hero: {
    imageAlt: "Irish-language books and contemporary community media representing Gaeilge as a language in daily use.",
    callToActionLabel: "Hear Gaeilge in use"
  },
  classification: "A Goidelic Celtic language closely related to Scottish Gaelic and Manx",
  speakerCommunity: "Irish lives in Gaeltacht homes, schools, workplaces, and local clubs. These districts lie in Donegal, Mayo, Galway, Kerry, Cork, Waterford, and Meath. Speakers also build Irish-speaking families and friendships in towns, cities, and diaspora communities.\n\nA census answer about ability to speak Irish cannot tell us how fluent someone is or how often their family uses it together. A school learner, an urban new speaker, and a child growing up with Irish in a Gaeltacht community can have quite different experiences of the language. The 2022 figures below separate reported ability from daily use.",
  facts: [
    { label: "Family", value: "Indo-European · Celtic · Goidelic" },
    { label: "Republic of Ireland, 2022", value: "1,873,997 reported an ability to speak Irish; nearly 72,000 used it daily outside education" },
    { label: "Community heartlands", value: "Gaeltacht areas in seven counties, alongside urban and all-island networks" },
    { label: "Status", value: "First official language of Ireland; an official EU language" },
    { label: "Writing", value: "Latin alphabet; acute accent (síneadh fada) marks long vowels" },
    { label: "Major dialect groupings", value: "Munster, Connacht, and Ulster, with substantial local variation" }
  ],
  introduction: cited("Irish, or Gaeilge, is spoken in Gaeltacht districts along Ireland’s western and southern coasts and in Irish-speaking networks in towns, cities, and abroad. Families, schools, broadcasters, clubs, and workplaces all give it places in daily life. Ireland’s 2022 census recorded people who said they could speak Irish and separately asked how often they used it; ability and daily use are different measures, and neither describes every speaker’s fluency or family history.\n\nIrish belongs to the Goidelic branch of the Celtic languages, alongside Scottish Gaelic and Manx. Its written standard gives readers a shared spelling system, while speakers in Munster, Connacht, and Ulster bring different sounds and local forms to conversation.\n\nA change at the beginning of a word can carry a grammatical meaning: bád is “boat,” mo bhád is “my boat,” and ár mbád is “our boat.” Those changes, called initial mutations, are part of ordinary Irish speech and writing rather than decoration on unfamiliar spellings.", "cso-2022", "foras-community", "glottolog", "caighdean", "varieties-focloir", "wiki-mutations"),
  origins: {
    overview: cited(
      "The earliest direct evidence of Irish comes from short ogham inscriptions, mostly names cut into stone from around the fourth century. Christian scribes later wrote Irish with Latin letters. Their Old Irish notes and manuscripts let us see a much fuller language.\n\nMiddle Irish came next. Poets and scholars in Ireland and Gaelic Scotland later shared a literary form often called Classical Gaelic, while people continued to speak changing local forms. That gap between a common written tradition and local speech runs through much of Irish history.",
      "wiki-history",
      "wiki-irish",
      "maynooth-history"
    ),
    timeline: [
      {
        period: "c. 4th–6th centuries",
        event: cited("Ogham inscriptions preserve Primitive Irish, usually names cut along stone edges. They tell us little about ordinary conversation.", "wiki-history", "maynooth-history")
      },
      {
        period: "c. 6th–10th centuries",
        event: cited("Scribes used Old Irish for notes in Latin manuscripts and for law, stories, poetry, and religious writing. Latin and Irish met in the same scholarly circles.", "wiki-history", "maynooth-history")
      },
      {
        period: "c. 10th–17th centuries",
        event: cited("Middle Irish and then Early Modern Irish appear in a wide manuscript tradition. A shared literary Gaelic connected scholars in Ireland and Scotland as local speech changed.", "wiki-history", "wiki-irish")
      },
      {
        period: "17th–19th centuries",
        event: cited("Conquest and confiscation broke old patronage networks. English gained ground in government and commerce; famine and migration then devastated many Irish-speaking communities. By the late nineteenth century, daily use had retreated heavily toward western districts.", "wiki-history", "maynooth-history")
      },
      {
        period: "1893–1945",
        event: cited("The Gaelic League, writers, and teachers organized a revival. After independence, the state gave Irish official status and a place in schools. Those changes could not alone restore daily home use.", "wiki-history", "wiki-irish")
      },
      {
        period: "1945–present",
        event: cited("Spelling reform and An Caighdeán Oifigiúil gave public writing a shared norm. Radio, TG4, Irish-medium schools, urban groups, and online publishing created more places to use Irish. Census figures still raise concern about daily Gaeltacht use.", "caighdean", "cso-2022", "tg4")
      }
    ],
    contactHistory: cited(
      "Christian learning brought Latin words, including eaglais, “church,” and leabhar, “book.” Norse settlement left some maritime and place-name vocabulary. Anglo-Norman French and then English added further layers as law, trade, schooling, and daily life changed.\n\nIrish speakers fit borrowed words into Irish sounds and grammar. They also make new terms and switch languages when a conversation calls for it. Look at who uses a word and where before treating its origin as a judgment on it.",
      "wiki-history",
      "teanglann",
      "corpas"
    ),
    standardization: cited(
      "An Caighdeán Oifigiúil gives public writers and schools a common spelling and grammar. Mid-twentieth-century reform simplified many spellings, and the Oireachtas revised the standard again in 2017.\n\nThe standard does not prescribe one accent. People from Corca Dhuibhne, Conamara, and Gaoth Dobhair may write the same form and say it differently. Learn the standard for reading and writing, then listen to a regional speaker before deciding how you will pronounce it.",
      "caighdean",
      "wiki-orthography",
      "wiki-irish"
    )
  },
  variants: {
    overview: cited(
      "Irish speakers often group traditional dialects as Munster, Connacht, and Ulster. Each region contains local differences: speakers from Conamara and Mayo, for example, do not sound identical. Words, verb endings, vowels, stress, and short grammatical forms can vary.\n\nMany people also speak Irish outside the Gaeltacht. Their speech may draw on family usage, schools, media, and several regional models. Listen for a person's background and setting instead of assuming that a written standard tells you how every speaker sounds.",
      "wiki-irish",
      "varieties-focloir",
      "cso-2022"
    ),
    items: [
      { name: "Munster Irish", note: cited("Speakers in Kerry, Cork, and Waterford use several local forms. Stress can fall later in a word than learners expect, and some verb endings include the subject. Compare recordings from Corca Dhuibhne and Múscraí before calling either one the whole region.", "wiki-irish", "teanglann") },
      { name: "Connacht Irish", note: cited("Conamara and the Aran Islands are major centres of daily use; Mayo has its own traditions. Teaching materials draw on Connacht forms, but the region does not have one pronunciation.", "wiki-irish", "teanglann") },
      { name: "Ulster Irish", note: cited("Living Ulster Irish now centres chiefly on Donegal. Its pronouns, negatives, words, and sounds can resemble Scottish Gaelic more closely than southern Irish does. Hear a Gaoth Dobhair speaker to notice the difference.", "wiki-irish", "teanglann") },
      { name: "An Caighdeán Oifigiúil", note: cited("The common official written norm supports legislation, education, translation, and publication. It draws on regional forms but does not supply a mandatory spoken accent.", "caighdean", "wiki-orthography") },
      { name: "Urban and new-speaker Irish", note: cited("Dublin, Belfast, Galway, and other towns support speakers who learned Irish through family, Irish-medium education, adult study, or mixed networks. Their usage may combine standard and regional features. Listen to how people speak in their own settings instead of applying a native-versus-fake test.", "cso-2022", "foras-community", "varieties-focloir") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Irish consonants come in broad and slender forms. The back of the tongue moves toward the soft palate for many broad sounds; slender ones move toward the hard palate, often giving a y-like quality.\n\nNearby vowels tell you which form to expect. Irish writers sum up the spelling rule as caol le caol agus leathan le leathan, “slender with slender and broad with broad.” A written vowel may guide the consonant rather than add a syllable.\n\nThe exact sounds differ by region. Hear a word in your chosen dialect before relying on an English-style pronunciation hint.",
      "wiki-orthography",
      "teanglann"
    ),
    script: "Modern Latin alphabet with the acute accent; IPA and regional audio can help with pronunciation",
    soundSystem: cited(
      "Vowel length can change a word: fear means “man,” while féar means “grass.” The fada over é marks the longer vowel.\n\nA preceding word can change the sound at the start of bád, “boat.” Lenition, or séimhiú, gives mo bhád, “my boat”; the bh may sound like /w/ or /v/ depending on dialect. Eclipsis, or urú, gives ár mbád, “our boat,” with an initial /m/.\n\nIrish also distinguishes consonant qualities that spelling does not always show clearly. A cluster may gain an audible vowel: ainm, “name,” can sound like two syllables. Check recordings from the region you are learning.",
      "wiki-mutations",
      "wiki-orthography",
      "teanglann"
    ),
    prosody: cited(
      "Many Irish words stress the first syllable. Munster speakers often place stress later when a later syllable has a long vowel or another feature that attracts it.\n\nIn fast conversation, unstressed vowels weaken and small words run together. Listen to a complete question or reply from one speaker and repeat its timing. An isolated dictionary recording cannot teach you the whole rhythm.",
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
      { original: "Gaeilge", transliteration: "pronunciation varies by region; hear the recorded dialects", translation: "Irish language", note: "The name itself varies: you may hear Gaeilge, Gaolainn, or Gaeilig. Use regional audio before choosing a pronunciation." }
    ]
  },
  writing: {
    overview: cited(
      "Modern Irish uses the Latin alphabet. An acute accent called the síneadh fada marks a long vowel, as in bád, “boat.” Keep it when you type capitals too: Éire, not Eire.\n\nOlder printed books may use Gaelic type, which shapes familiar Latin letters differently. Writers once marked lenition with a dot over a consonant; modern spelling usually adds h instead, as in bh. Ogham belongs to early inscriptions, not everyday modern writing.",
      "wiki-orthography",
      "caighdean"
    ),
    primaryScript: "Latin alphabet; older Gaelic type and historical ogham appear in cultural and scholarly contexts",
    romanization: cited("Irish does not need a separate romanization because it is already written in the Latin alphabet. English-style pronunciation respellings are temporary aids at best: they conceal broad/slender distinctions and become misleading across dialects.", "wiki-orthography"),
    spellingNorms: cited(
      "Vowels beside a consonant group usually agree about its quality: e and i signal slenderness, while a, o, and u signal broadness. Compare bád with báid: the i signals that the final d changes quality.\n\nHistorical spellings and word boundaries complicate that rule. The official standard also simplified many older forms, so a book printed before the reform may spell a familiar word differently. Keep fadas when you search or write.",
      "caighdean",
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
      "An Irish sentence often begins with a verb. Other small patterns do much of the work: a word's first sound may change, and a preposition may join a pronoun.\n\nTá carr agam means “I have a car,” but literally places the car “at me.” Tá ocras orm puts hunger “on me.” Learn these as whole expressions with audio, then notice how the same pieces turn up elsewhere.",
      "wiki-irish",
      "focloir"
    ),
    typologicalProfile: cited(
      "In Léann Síle an leabhar, “Síle reads the book,” the verb comes first. Grammarians call this verb–subject–object order.\n\nIrish uses forms of bí for many states and locations, as in Tá Síle anseo, “Síle is here.” A different short verb, the copula is, links identities or categories: Is múinteoir í Síle, “Síle is a teacher.” Many adjectives follow their nouns, and possession often uses ag, “at,” rather than a verb meaning “have.”",
      "wiki-irish",
      "maynooth-history"
    ),
    morphology: cited(
      "Irish nouns have masculine or feminine gender, plural forms, and some case changes. An article or adjective may reveal a noun's gender by changing its first sound.\n\nVerbs change for tense and sometimes for the little words before them. Some verb endings already show who acts; other forms use a separate pronoun, and dialects differ in which they favor. A verbal noun can express an ongoing action, as in ag caint, “talking.”\n\nLearn a base word beside the forms you actually hear. A dictionary entry alone will not prepare you to recognize it after a mutation.",
      "wiki-mutations",
      "focloir",
      "teanglann"
    ),
    syntax: cited(
      "The verb normally leads a statement, followed by the subject. Questions and negatives put a small word before the verb; that word can change the verb's form or first sound.\n\nIrish speakers usually answer a yes-or-no question by repeating the verb.\n\nAsk An dtuigeann tú? Answer Tuigim, “I do,” or Ní thuigim, “I don't.” The copula also lets speakers put special focus on a person, thing, or place.",
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
        body: cited("Irish often puts the verb first, even in everyday speech. Chonaic mé é means “I saw him” or “I saw it”: Chonaic is the past verb, and mé is the subject. Find the verb first when you listen, then ask who did the action.", "wiki-irish", "focloir"),
        example: "Léann Aoife an nuacht gach maidin.",
        exampleTranslation: "Aoife reads the news every morning. (Literally: Reads Aoife the news every morning.)"
      },
      {
        title: "The substantive verb and the copula",
        body: cited("Tá tells you a state or place: Tá Nóra sa bhaile means “Nóra is at home.” The copula is puts someone in a category: Is múinteoir í Nóra means “Nóra is a teacher.” Learn the two kinds of sentence side by side; the copula also has its own negative and past forms.", "focloir", "teanglann"),
        example: "Tá an caife te agus is caife maith é.",
        exampleTranslation: "The coffee is hot, and it is good coffee."
      },
      {
        title: "Lenition and eclipsis",
        body: cited("Irish marks some grammatical relationships by changing a word's beginning. Mo bhróg means “my shoe,” with lenition after mo; ár mbróg means “our shoe,” with eclipsis after ár. Learn each trigger with a few nouns, and listen for the change as well as reading it.", "wiki-mutations", "teanglann"),
        example: "Tá mo bhád in aice lenár mbád.",
        exampleTranslation: "My boat is beside our boat."
      },
      {
        title: "Prepositional pronouns",
        body: cited("Irish can join a preposition to a pronoun: le plus mé becomes liom, “with me,” and ag plus mé becomes agam, “at me.” Tá carr agam means “I have a car,” and Is maith liom é means “I like it.” In Tá ocras orm, “I'm hungry,” hunger is “on me.”", "focloir", "teanglann"),
        example: "Tá dhá cheist agam agus tá cabhair uaim.",
        exampleTranslation: "I have two questions and I need help. (Literally: two questions are at me and help is from me.)"
      },
      {
        title: "Verbal nouns",
        body: cited("To describe an action underway, Irish often puts ag before a verbal noun: Tá siad ag caint means “They're talking.” The same form appears in other patterns, including Ba mhaith liom Gaeilge a fhoghlaim, “I'd like to learn Irish.” Learn each verbal noun in a sentence so you also learn where its object goes.", "focloir", "teanglann"),
        example: "Bhí na páistí ag léamh an scéil.",
        exampleTranslation: "The children were reading the story."
      },
      {
        title: "Questions and short answers",
        body: cited("Irish usually answers a yes-or-no question by repeating its verb.\n\nAsk An mbeidh tú ann? Answer Beidh, “I will,” or Ní bheidh, “I won't.” Sea and ní hea answer some questions built with the copula; they do not replace every yes and no.", "focloir", "wiki-irish"),
        example: "Ar chuala tú an clár? Chuala. / Níor chuala.",
        exampleTranslation: "Did you hear the programme? Yes, I did. / No, I didn't."
      },
      {
        title: "Gender inside the noun phrase",
        body: cited("A noun's gender can change the article, the noun's first sound, or an adjective. Feminine bean, “woman,” becomes an bhean, “the woman”; masculine fear, “man,” becomes an fear. Learn the article and noun together so gender has a sound you can remember.", "focloir", "teanglann"),
        example: "Chonaic mé an bhean óg agus an fear óg.",
        exampleTranslation: "I saw the young woman and the young man."
      },
      {
        title: "Possession and the genitive",
        body: cited("Doras an tí means “the door of the house.” The second noun changes form to show the relationship; grammarians call this the genitive. Longer phrases vary in writing and speech, so check an edited example before building one yourself.", "caighdean", "focloir"),
        example: "Tá doras an tí oscailte.",
        exampleTranslation: "The door of the house is open."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "A Gaeltacht is an officially designated area, not a promise that every resident speaks Irish each day. In the 2022 census, 65,156 of 102,973 Gaeltacht residents aged three or older reported that they could speak Irish; 20,261 of those speakers said they used it daily.\n\nLocal networks still matter, but a family's opportunities to use Irish can change with housing, work, travel, and English-language services. Outside the Gaeltacht, people form other networks through schools, media, arts, and friendships. Diaspora learners face a different mix of distance and online access.",
      "cso-2022",
      "foras-community"
    ),
    regions: [
      { place: "County Galway and the Aran Islands", note: cited("Galway County has the largest number of daily Gaeltacht speakers in the 2022 census. Conamara and the Aran Islands have different local speech, while Galway city links Gaeltacht and urban speakers.", "cso-2022", "wiki-irish") },
      { place: "County Donegal", note: cited("Gaoth Dobhair, Cloich Cheann Fhaola, and Na Rosa support Ulster Irish communities. Listen to local recordings before treating an unfamiliar form as an error.", "cso-2022", "teanglann") },
      { place: "Kerry, Cork, and Waterford", note: cited("Corca Dhuibhne, Uíbh Ráthach, Múscraí, and An Rinn represent distinct Munster traditions. Community density and daily use vary sharply even within legal Gaeltacht boundaries.", "cso-2022") },
      { place: "Mayo and Meath", note: cited("Mayo has its own Connacht varieties. Families from Conamara founded the Meath Gaeltacht communities of Ráth Chairn and Baile Ghib in the twentieth century.", "wiki-irish", "cso-2022") },
      { place: "Belfast and Northern Ireland", note: cited("Irish-medium education, classes, arts groups, and community language plans give speakers places to use Irish. Foras na Gaeilge has supported Irish Language Network planning in Belfast.", "foras-community") },
      { place: "Dublin and other cities", note: cited("Families, schools, work groups, festivals, and media bring Irish speakers together outside the Gaeltacht. City speakers have varied accents and learning histories.", "foras-community", "varieties-focloir") },
      { place: "Diaspora", note: cited("Irish speakers and learners also meet through classes, families, and online groups outside Ireland. A course can provide structure; current radio and conversation partners help you hear how the language is used today.", "wiki-irish", "dcu-learn") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Irish asks an English-speaking learner to hear broad and slender consonants and notice changes at the beginnings of words. Its spelling gives clues once you know what to look for, and free dictionaries let you compare regional audio.\n\nYour workload depends on the goal. Someone returning to school Irish, someone reading Old Irish, and someone hoping to chat comfortably with Gaeltacht speakers need different practice. Count conversations and texts you can understand rather than trusting a universal hour estimate.",
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
      "Pair a course with a short recording from one dialect each day. Practice questions, negatives, possession, and forms such as agam and liom before memorizing every mutation rule.\n\nWhen you can follow a conversation, transcribe a short clip and retell it aloud. Later, move among radio, edited prose, regional literature, corpus searches, and feedback from speakers. Regular contact will help more than an occasional long session.",
      "dcu-learn",
      "teanglann",
      "rte-rnag"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Choose one region for the Irish you speak first. A course and regular speakers from that region will help your sounds and common phrases settle together. Listen to Ulster, Connacht, and Munster clips too, so other voices do not surprise you.\n\nRecord a short account of your day and compare it with a native recording. Check uncertain phrases in a corpus, then ask a speaker which version sounds natural in that situation. Note the region and setting beside expressions you want to reuse.",
      "teanglann",
      "corpas",
      "dcu-learn"
    ),
    mediaPractice: cited(
      "Watch a TG4 programme about a subject you already know, then replay one scene with subtitles. Write down a few phrases that fit your own life and listen again without reading.\n\nRaidió na Gaeltachta gives you regional voices in interviews and community programmes. Follow one presenter for several weeks so you can hear their habits. Tuairisc.ie offers daily journalism once learner texts feel too controlled; songs add another kind of listening, but their timing differs from ordinary conversation.",
      "tg4",
      "rte-rnag",
      "tuairisc"
    ),
    dictionariesAndCorpora: cited(
      "Use Foclóir.ie when you start with an English idea and need a contemporary Irish phrase. Teanglann.ie brings together older bilingual dictionaries, grammar lookup, and recordings from the three main dialect regions.\n\nNua-Chorpas na hÉireann lets you see how writers use a word in fiction, journalism, and official text. Search both its base form and mutated forms. Read the sentences around a result before borrowing it for speech; a corpus shows what people wrote, not what suits every conversation.",
      "focloir",
      "teanglann",
      "corpas"
    ),
    resources: [
      { type: "course", title: "Learning Irish at DCU", url: "https://www.futurelearn.com/courses/irish-language", level: "beginner", description: cited("Dublin City University's online course teaches beginner Irish through contemporary cultural topics. Its lesson sequence helps learners who need more structure than a phrase list.", "dcu-learn") },
      { type: "dictionary", title: "Teanglann.ie", url: "https://www.teanglann.ie/en/", level: "all", description: cited("A free dictionary and grammar hub whose most valuable learner feature is word audio from Ulster, Connacht, and Munster speakers.", "teanglann") },
      { type: "dictionary", title: "Foclóir.ie", url: "https://www.focloir.ie/", level: "all", description: cited("Foras na Gaeilge's modern English–Irish dictionary gives contextual translations, examples, and links into related grammatical resources.", "focloir") },
      { type: "corpus", title: "Nua-Chorpas na hÉireann", url: "https://corpas.focloir.ie/", level: "advanced", description: cited("Search published Irish by word and context. Compare nearby words and genres before you copy a phrase into speech.", "corpas") },
      { type: "media", title: "TG4", url: "https://www.tg4.ie/", level: "all", description: cited("The Irish-language public-service broadcaster provides general-audience television, news, sport, children's programmes, and on-demand video.", "tg4") },
      { type: "media", title: "RTÉ Raidió na Gaeltachta", url: "https://www.rte.ie/radio/rnag/", level: "intermediate", description: cited("Live and on-demand radio offers sustained regional speech, interviews, music, news, and community coverage from Gaeltacht perspectives.", "rte-rnag") },
      { type: "media", title: "Tuairisc.ie", url: "https://tuairisc.ie/", level: "intermediate", description: cited("A current Irish-language news and analysis site that supplies daily reading beyond learner topics.", "tuairisc") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "A word's meaning changes with its speaker and setting. Craic came from English crack and can mean fun, news, or a social occasion; dúchas can point to inherited identity, tradition, or a home place. Check a word in a full sentence before putting it on a list of supposed untranslatables.",
      "teanglann",
      "corpas"
    ),
    notableWords: [
      { term: "dúchas", meaning: "native inheritance, tradition, connection by birth or place", note: cited("Its meaning depends on context and can concern heritage, disposition, or a home territory. The national folklore collection Dúchas.ie gives the word a prominent modern institutional life.", "teanglann", "corpas") },
      { term: "meitheal", meaning: "cooperative work group; collective effort", note: cited("Traditionally associated with neighbours joining for farm work, it now productively names teams, organizations, and collaborative action. It is cultural vocabulary that remains available for new settings.", "teanglann", "corpas") },
      { term: "craic", meaning: "fun, news, entertainment, social goings-on", note: cited("Borrowed from English crack, naturalized in Irish, and later popularized in Irish English. Cad é an craic? asks what is happening as much as whether something is amusing.", "teanglann", "corpas") },
      { term: "grá", meaning: "love", note: cited("A short everyday noun with broad cultural reach. Tá grá agam duit expresses love through a construction literally involving love “at me” for you.", "focloir", "teanglann") },
      { term: "fios", meaning: "knowledge, information, awareness", note: cited("Tá a fhios agam means “I know [a fact],” literally “its knowledge is at me.” Learn the whole phrase: a one-word gloss will not show you how to say you know something.", "focloir", "teanglann") },
      { term: "scéal", meaning: "story, account, news, situation", note: cited("The plural scéalta covers stories, while Cad é an scéal? can work as “What's the story/what's happening?” Context ranges from oral narrative to journalism and casual greeting.", "teanglann", "corpas") },
      { term: "muintearas", meaning: "kinship, affinity, belonging among people", note: cited("A speaker may use this word for family connection, neighbourliness, or closeness in a community. Read the surrounding sentence to see which meaning they intend.", "teanglann", "corpas") },
      { term: "misneach", meaning: "courage, spirit, confidence", note: cited("Used in ordinary encouragement and as the name of activist initiatives. The phrase Misneach! can urge someone to take heart.", "teanglann", "corpas") }
    ],
    loanwordLayers: cited(
      "Irish vocabulary carries Latin, Norse, Anglo-Norman, and English contact. Technical writers also create terms: ríomhaire, “computer,” relates to ríomh, “calculation,” while idirlíon means “internet.” Check a corpus to see whether people use an official term in the kind of text you plan to write.",
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
      "Irish, Scottish Gaelic, and Manx belong to the Goidelic branch of Celtic. Welsh, Breton, and Cornish belong to the other living branch, Brittonic. Their shared ancestry does not make them mutually understandable today.\n\nEnglish, Latin, Norse, and French left traces through contact, too. A borrowed word shows a meeting between speakers; it does not move Irish into another language family.",
      "glottolog",
      "wiki-irish",
      "wiki-history"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "People use Irish for family life, work, sport, news, comedy, children's television, novels, music, and political disagreement. If you mainly know folk songs or school exercises, follow a current creator or broadcaster to hear what people discuss today.\n\nA language also needs places where families and friends can use it regularly. Housing, schools, jobs, services, and local clubs affect that opportunity. As a learner, you can pay teachers, buy books, attend events for their content, and respect the regional knowledge of the people you meet.",
  resources: [
    { type: "course", title: "Learning Irish at DCU", url: "https://www.futurelearn.com/courses/irish-language", level: "beginner", description: cited("A structured online introduction created by Dublin City University, linking language to contemporary Irish culture.", "dcu-learn") },
    { type: "dictionary", title: "Teanglann.ie", url: "https://www.teanglann.ie/en/", level: "all", description: cited("Dictionaries, grammar lookup, and pronunciation recordings from the three major dialect regions.", "teanglann") },
    { type: "dictionary", title: "Foclóir.ie", url: "https://www.focloir.ie/", level: "all", description: cited("The modern English–Irish dictionary from Foras na Gaeilge, with contextual equivalents and examples.", "focloir") },
    { type: "corpus", title: "Nua-Chorpas na hÉireann", url: "https://corpas.focloir.ie/", level: "advanced", description: cited("Compare a word's neighbors in published writing. The genre and surrounding sentences help you decide whether a phrase fits your own text.", "corpas") },
    { type: "media", title: "TG4", url: "https://www.tg4.ie/", level: "all", description: cited("Television and on-demand Irish-language drama, documentary, sport, news, children's content, and entertainment.", "tg4") },
    { type: "media", title: "RTÉ Raidió na Gaeltachta", url: "https://www.rte.ie/radio/rnag/", level: "intermediate", description: cited("Hear Gaeltacht voices in regional news, interviews, music, and community discussion. Choose a familiar programme before tackling faster live conversation.", "rte-rnag") },
    { type: "media", title: "Tuairisc.ie", url: "https://tuairisc.ie/", level: "intermediate", description: cited("Daily journalism, analysis, opinion, and cultural coverage written for Irish readers rather than as graded study material.", "tuairisc") },
    { type: "other", title: "Téarma.ie", url: "https://www.tearma.ie/", level: "intermediate", description: cited("Foras na Gaeilge's terminology database helps with technical, professional, and institutional vocabulary.", "foras") }
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
    { id: "foras", title: "Lexicography and Terminology", url: "https://www.forasnagaeilge.ie/about-foras-na-gaeilge/lexicography-and-terminology/?lang=en", publisher: "Foras na Gaeilge", accessedAt: "2026-09-27" },
    { id: "foras-community", title: "Community Support", url: "https://www.forasnagaeilge.ie/support/community-support/?lang=en", publisher: "Foras na Gaeilge", accessedAt: "2026-09-27" },
    { id: "caighdean", title: "An Caighdeán Oifigiúil, 2017", url: "https://www.oireachtas.ie/en/how-parliament-is-run/houses-of-the-oireachtas-service/rannog-an-aistriuchain/", publisher: "Houses of the Oireachtas", publishedAt: "2017", accessedAt: "2026-09-27" },
    { id: "varieties-focloir", title: "Varieties of Irish", url: "https://www.focloir.ie/en/additional-resources", publisher: "Foras na Gaeilge", publishedAt: "2020", accessedAt: "2026-09-27" },
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
