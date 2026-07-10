import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Ukrainian",
    slug: "ukrainian",
    relationship: "East Slavic sister language",
    explanation: cited(
      "Russian and Ukrainian descend from the East Slavic continuum and share a great deal of inherited grammar and vocabulary, but they are separate modern languages with distinct standards, sound systems, literary histories, and identities. Partial comprehension varies with exposure and should never be turned into a claim that one is merely a version of the other.",
      "wiki-russian",
      "glottolog-russian"
    )
  },
  {
    name: "Belarusian",
    relationship: "East Slavic sister language",
    explanation: cited(
      "Belarusian is Russian's other closest standardized relative. Cognates and similar case-and-aspect systems give Russian learners a useful foothold, while Belarusian akanne, spelling, vocabulary, and morphology quickly show that closeness does not equal identity. Bilingual history has also produced mixed and shifting speech practices that simple family trees cannot capture.",
      "wiki-russian",
      "glottolog-russian"
    )
  },
  {
    name: "Polish",
    slug: "polish",
    relationship: "West Slavic relative",
    explanation: cited(
      "Polish is more distant than Ukrainian or Belarusian but makes a rewarding comparison: it preserves Slavic case and aspect in a Latin-based spelling system and has undergone different sound changes. Similar-looking words may be reliable cognates, false friends, or borrowings carried through centuries of contact.",
      "wiki-russian",
      "glottolog-russian"
    )
  },
  {
    name: "Bulgarian",
    relationship: "South Slavic relative and source of Church Slavonic influence",
    explanation: cited(
      "Modern Bulgarian is a South Slavic relative whose grammar has moved in a different direction, notably losing most noun case endings and developing articles. Medieval South Slavic Church Slavonic traditions nevertheless supplied Russian writing with a lasting high-register vocabulary and stylistic layer.",
      "wiki-russian",
      "unicode-cyrillic"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const russianGuide = {
  slug: "russian",
  name: "Russian",
  autonym: "Русский",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Russian is an East Slavic language whose compact Cyrillic alphabet opens onto mobile stress, expressive word order, a rich system of aspect and motion, and cultural worlds stretching far beyond a single state.",
  family: "Indo-European, Slavic",
  macroRegion: "Eastern Europe, North Asia, the Caucasus, Central Asia, and global diasporas",
  primaryScript: "Cyrillic",
  difficultyLabel: "Demanding",
  learnerHook: "The alphabet is the weekend project; learning to hear an unstressed о, choose an aspect, and make a sentence sound like an answer rather than a dictionary entry is the absorbing long game.",
  hero: {
    imageAlt: "Contemporary Russian Cyrillic type alongside handwritten text, showing the language's print and cursive traditions.",
    callToActionLabel: "Explore Russian in use"
  },
  classification: "East Slavic language with a Moscow-centered standard and broad Eurasian and diasporic use",
  speakerCommunity: "Russian is a first language for roughly 150 million people and is used by many more as an additional language; totals vary because censuses measure home language, proficiency, and regular use differently. It is Russia's state language, one of the UN's official languages, and has recognized roles in several other post-Soviet states. Communities across Ukraine, the Baltic states, the Caucasus, Central Asia, Israel, Germany, North America, Australia, and elsewhere do not form a political bloc. Russian may be a family language, lingua franca, literary medium, colonial inheritance, or several at once. Since Russia's full-scale invasion of Ukraine in 2022, language choice can carry acute meaning. Never equate Russian language, citizenship, ethnicity, and support for a government.",
  facts: [
    { label: "Family", value: "Indo-European · Slavic · East Slavic" },
    { label: "First-language speakers", value: "About 150 million in widely cited estimates; totals depend on definitions" },
    { label: "Alphabet", value: "33 Cyrillic letters" },
    { label: "Core grammar", value: "Six productive cases, three genders, two verbal aspects" },
    { label: "Standard base", value: "Central Russian, historically centered on Moscow" },
    { label: "International role", value: "One of six official UN languages" }
  ],
  learnerOverview: "Cyrillic becomes readable much faster than it looks. Then the interesting work begins. молоко has three о letters but sounds approximately ma-la-KO in common standard speech because only the last is stressed. Noun endings show roles such as subject, possession, destination, instrument, or setting. Verbs form aspectual families: читать presents reading as activity or habit, while прочитать presents it as completed. Motion verbs ask whether you are going one way now, habitually, on foot, or by vehicle. Build from complete phrases with stress and audio. Learn each noun with a revealing form and verbs in contrasting sentences. Discover Discomfort rightly urges learners to attach a new alphabet to useful text, but its claim that Russian spelling maps sounds one-to-one is too simple: fluent pronunciation requires stress, reduction, and consonant softness.",
  origins: {
    overview: cited(
      "Russian belongs to East Slavic. Medieval varieties were used across the polity conventionally called Kyivan Rus', alongside written Church Slavonic; projecting today's national languages unchanged into the eleventh century is misleading. Diverging centers, migration, contact, and literary institutions gradually produced Russian, Ukrainian, and Belarusian standards. Moscow's growth made central dialects influential. Written Russian combined vernacular material with Church Slavonic forms that often supplied elevated alternatives. Eighteenth-century printing, science, administration, and European contact widened its range. Pushkin symbolically represents writers who brought literary prose and cultivated speech closer, but nobody individually “invented” modern Russian.",
      "wiki-russian",
      "unicode-cyrillic",
      "un-russian"
    ),
    timeline: [
      {
        period: "10th–13th centuries",
        event: cited(
          "East Slavic speech existed in a multilingual medieval landscape, while Christian book culture used forms of Church Slavonic written in early Cyrillic. Birch-bark letters and chronicles reveal that everyday and literary usage were never identical registers.",
          "wiki-russian",
          "unicode-cyrillic"
        )
      },
      {
        period: "14th–17th centuries",
        event: cited(
          "As political and cultural centers diverged, the East Slavic continuum developed along different paths. Moscow-centered varieties gained institutional reach in the growing Muscovite state, while written language retained substantial Church Slavonic texture.",
          "wiki-russian",
          "dialect-atlas"
        )
      },
      {
        period: "18th–19th centuries",
        event: cited(
          "Peter I's civil type reform simplified the appearance of printed Cyrillic for secular publishing. Scientific, bureaucratic, and literary prose expanded; French and German contact was conspicuous among elites. Pushkin's prestige later made him a convenient emblem of modern literary Russian, though standardization was collective and gradual.",
          "wiki-russian",
          "unicode-cyrillic",
          "un-russian"
        )
      },
      {
        period: "1917–1991",
        event: cited(
          "The 1917–18 spelling reform removed several letters and regularized conventions. Mass literacy, education, internal migration, broadcasting, and Soviet institutions spread the standard over an enormous area, often at the expense of local Russian dialects and many non-Russian languages. Russian became a major interethnic language of the USSR.",
          "wiki-russian",
          "wiki-dialects"
        )
      },
      {
        period: "1991 to the present",
        event: cited(
          "After the Soviet Union dissolved, successor states developed different language policies and Russian-speaking communities followed different trajectories. Migration, digital media, war, and generational change continue to alter where and how Russian is used; present-day status must be checked country by country rather than inferred from Soviet history.",
          "wiki-russian",
          "un-russian"
        )
      }
    ],
    contactHistory: cited(
      "Church Slavonic contributed learned and religious vocabulary; Turkic languages words of steppe life, administration, food, and trade; Dutch and German military, maritime, craft, and technical terms; French elite prestige vocabulary; and English much recent computing and business language. Russian also influenced and was reshaped by languages inside the empire and USSR. вокзал vokzal “railway station,” borrowed through the name Vauxhall, shows how surprising routes can be. Use a corpus to discover whether an international-looking word is formal, dated, ironic, or ordinary.",
      "wiki-russian",
      "ruscorpora"
    ),
    standardization: cited(
      "Standard Russian has a strong educational and publishing norm supported by dictionaries, schools, editors, and the Vinogradov Russian Language Institute. Gramota.ru unites major spelling, stress, pronunciation, and explanatory dictionaries. The standard is historically central and Moscow-centered, but is neither frozen nor unanimous: dictionaries record competing stress and changing usage. Ё is a separate letter but is commonly printed as е unless clarity, pedagogy, names, or editorial policy requires dots. Consult a current dictionary rather than treating one teacher's preference as timeless law.",
      "gramota",
      "wiki-russian",
      "wiki-dialects"
    )
  },
  variants: {
    overview: cited(
      "Russian urban variation is less conspicuous than its geography suggests because schooling, mobility, and broadcasting leveled features. Traditional northern, southern, and central groups still differ in vowel reduction, /g/, endings, and vocabulary; the Academy of Sciences atlas maps them. Variation also follows age, class, ethnicity, city, medium, and formality. Russian in Kazakhstan, Latvia, Dagestan, Ukraine, Israel, or Germany can have stable local vocabulary and intonation. Calling everything an “accent” may miss grammar; calling every contact variety a dialect may exaggerate boundaries.",
      "dialect-atlas",
      "wiki-dialects",
      "ruscorpora"
    ),
    items: [
      { name: "Standard literary Russian", note: cited("The national education, publishing, administration, and much broadcast norm. Spoken standard Russian still ranges from careful news diction to relaxed urban conversation and does not require sounding ceremonious.", "gramota", "wiki-russian") },
      { name: "Northern Russian dialects", note: cited("Traditional northern varieties are associated with features such as less reduction of unstressed /o/ in some areas, a pattern popularly called okanye. They are internally diverse and increasingly encountered through dialect archives rather than in major-city speech.", "dialect-atlas", "wiki-dialects") },
      { name: "Southern Russian dialects", note: cited("Southern varieties include forms of akanye and, in some areas, a fricative realization of historical /g/, alongside distinct pronouns, endings, and vocabulary. Boundaries form continua rather than matching modern administrative maps.", "dialect-atlas", "wiki-dialects") },
      { name: "Urban colloquial Russian", note: cited("Everyday conversation shortens formulas, favors particles, tolerates unfinished syntax, and uses vocabulary absent from formal essays. просторечие prostorechie refers more specifically to socially marked nonstandard speech and should not be used as a synonym for all colloquial language.", "wiki-dialects", "ruscorpora") },
      { name: "Heritage and contact varieties", note: cited("Russian maintained across migration or alongside another dominant language may simplify, innovate, or preserve older features. In multilingual Eurasian communities, local languages contribute names, particles, vocabulary, and conversational expectations; these patterns belong to speakers' histories, not a deficit model.", "ruscorpora", "wiki-russian") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Russian pronunciation revolves around stress and hard versus soft consonants. “Soft” means palatalized: the tongue rises toward the palate. Compare мат mat “mat” with мать mat' “mother”; ь has no sound alone but signals a different final consonant. Stress can move: го́род górod “city,” города́ gorodá “cities.” Unstressed vowels reduce, final voiced consonants devoice, and neighbors assimilate in voicing. Aim for a stable stressed vowel and convincing consonant quality, not equal emphasis on every written letter.",
      "wiki-phonology",
      "gramota"
    ),
    script: "Russian Cyrillic; acute accents are added here for learner stress and are not normally printed",
    soundSystem: cited(
      "Standard analyses usually identify five vowel phonemes whose sounds vary with stress and neighboring consonants. Unstressed о and а often converge; е and я reduce after soft consonants. Palatalization is contrastive, and ы is not English “ee.” Russian р is tapped or trilled. Ordinary speech simplifies the frightening здравств- cluster in здравствуйте. Morphological spelling keeps word parts recognizable even when pronunciation changes them.",
      "wiki-phonology",
      "gramota"
    ),
    prosody: cited(
      "Lexical stress is not reliably predictable, so dictionaries mark it and learners should too. Stress controls vowel quality and can distinguish words or forms: му́ка múka means “torment,” while мука́ muká means “flour.” Russian intonation signals completion, contrast, surprise, and yes–no questions without needing English-style auxiliary verbs. In Ты дома? “Are you home?”, the main rise commonly falls on до́ма. Sentence focus also interacts with flexible word order: moving an element toward the end often makes it new or contrastive. Shadow whole exchanges, not isolated nouns, and copy where the pitch turns as carefully as where the word stress falls.",
      "wiki-phonology",
      "ruscorpora"
    ),
    learnerTraps: [
      "Pronouncing every written о as [o] instead of following stress-driven reduction",
      "Treating soft consonants as consonants followed by a full y sound",
      "Guessing stress from spelling and then memorizing the wrong word melody",
      "Voicing final б, д, г, в, з, or ж as written rather than recognizing regular final devoicing",
      "Reading Cyrillic lookalikes as Latin: Russian В is /v/, Н is /n/, Р is /r/, С is /s/, and У is /u/"
    ],
    sampleWords: [
      { original: "молоко́", transliteration: "molokó", translation: "milk", note: "Only the last о is stressed; the first two vowels reduce in common standard speech." },
      { original: "мать", transliteration: "mat'", translation: "mother", note: "Contrast the soft final ть with the hard т of мат “mat.”" },
      { original: "быть", transliteration: "byt'", translation: "to be", note: "The letter ы follows a hard б; avoid turning it into a separate bwee sequence." },
      { original: "хорошо́", transliteration: "khoroshó", translation: "well; good (predicative/adverb)", note: "Practice х at the back of the mouth and let the unstressed о vowels reduce." },
      { original: "му́ка / мука́", transliteration: "múka / muká", translation: "torment / flour", note: "A clean demonstration that stress can distinguish lexical meaning." },
      { original: "сча́стье", transliteration: "schást'ye", translation: "happiness", note: "The spelling is fuller than everyday pronunciation; listen for the softened cluster rather than articulating every letter equally." }
    ]
  },
  writing: {
    overview: cited(
      "Modern Russian uses 33 Cyrillic letters. Russian is only one of many Cyrillic languages, not the whole script. А, К, М, О, Т look friendly; false friends В, Н, Р, С, У, Х punish Latin guessing. Ъ and ь do not represent vowels but separate or modify surrounding sounds. Е, Ё, Ю, Я can signal /j/ word-initially or after vowels/signs, and softness after a consonant. Handwriting differs substantially from print, especially lowercase д, т, and joined cursive, so real notes need separate practice.",
      "unicode-cyrillic",
      "dd-writing"
    ),
    primaryScript: "Russian Cyrillic alphabet",
    romanization: cited(
      "Romanization serves catalogues, passports, maps, and a first pronunciation lesson, but schemes differ: Хрущёв becomes Khrushchev in familiar English spelling. Romanization hides relationships such as читать, прочитать, and читатель. Type Cyrillic immediately and retain transliteration only to clarify stress or pronunciation.",
      "unicode-cyrillic",
      "dd-writing"
    ),
    spellingNorms: cited(
      "Russian spelling is morphophonemic: it represents both sound and stable word structure. The unstressed vowel in вода́ “water” is pronounced differently from its stressed counterpart in во́ды “waters,” but the shared spelling preserves the stem. Spelling rules after г, к, х and the spelling categories often taught as the seven-letter and five-letter rules constrain which vowel letters follow certain consonants. The 1917–18 reform removed Ѣ, І, Ѳ, and final hard signs in ordinary contexts. Ё remains the most visible modern editorial choice: dictionaries distinguish it, children's texts usually print it, and general publications often replace it with е. Never omit the dots in a learner's own vocabulary record if they identify pronunciation.",
      "gramota",
      "unicode-cyrillic",
      "wiki-russian"
    ),
    styleNotes: [
      cited("Learn print, keyboard, and cursive as three connected skills. Cursive is not a decorative advanced topic when forms, notes, and personal messages use it.", "dd-writing"),
      cited("Add acute stress marks to new vocabulary—окно́, о́кна—even though normal Russian prose omits them. The mark is study metadata, not part of ordinary spelling.", "gramota"),
      cited("Keep ё in names and vocabulary notes. Searching both ё and е may be necessary because publishers follow different policies.", "gramota", "ruscorpora"),
      cited("Do not copy historical Church Slavonic-looking letters or other languages' Cyrillic characters into modern Russian words; Unicode encodes a much larger script than Russian uses.", "unicode-cyrillic")
    ]
  },
  grammar: {
    overview: cited(
      "Russian is a fusional language: one ending can bundle case, number, and gender, while a verb ending bundles person and number. That makes tables compact but real choices contextual. The six productive cases are nominative, accusative, genitive, dative, instrumental, and prepositional; vestiges of other forms survive in limited expressions. Cases work together with prepositions, verbs, animacy, and meaning. Verbs distinguish imperfective and perfective aspect, and derivational prefixes create networks of related actions. Word order is flexible because endings identify roles, but it is not free: order packages old versus new information, contrast, emotion, and register. The productive study unit is therefore a short sentence with an answer to “why this form here?”",
      "wiki-russian",
      "cornell-aspect",
      "ruscorpora"
    ),
    typologicalProfile: cited(
      "Russian has three grammatical genders in the singular, adjective–noun agreement, six cases, animate–inanimate distinctions that affect some accusative forms, and verbs inflected for person in the present/future and for gender in the past singular. It normally lacks articles. Present-tense forms of быть byt' “to be” are usually absent in simple identity and property statements: Москва — столица “Moscow is a capital.” Subjects can be omitted when context and verb forms identify them. Negation has its own case patterns, and Russian freely permits multiple negative elements: Я никогда ничего не видел “I never saw anything.”",
      "wiki-russian",
      "ruscorpora"
    ),
    morphology: cited(
      "Case endings recur in families but stress, stem changes, spelling rules, and irregular plurals prevent pure mechanical assembly. Learn стол “table” with на столе́ “on the table” and со стола́ “from the table,” not with an abstract label alone. Adjectives make case more audible because they agree with their noun. Verbs are best stored as imperfective–perfective constellations rather than assumed one-to-one pairs: писать “write” relates to написать “write/finish,” записать “write down/record,” переписать “rewrite,” and подписать “sign.” Suffixes form people, actions, qualities, and affectionate or evaluative shades; diminutives can express intimacy, politeness, irony, or condescension, not merely physical smallness.",
      "cornell-aspect",
      "ruscorpora",
      "gramota"
    ),
    syntax: cited(
      "A neutral Russian clause often places given information earlier and the focal information later. Иван купи́л кни́гу naturally answers what Ivan did or bought; кни́гу купи́л Ива́н can answer who bought the book. Cases preserve the core roles, while order and intonation reshape the message. Russian also favors impersonal constructions: Мне хо́лодно literally patterns as “to me [it is] cold,” and Меня́ тошни́т puts the experiencer in the accusative. Formal written Russian can pack information into participles and verbal nouns; conversation relies more on finite clauses, particles, ellipsis, and shared context.",
      "wiki-russian",
      "ruscorpora"
    ),
    advancedPainPoints: [
      "Choosing aspect from the speaker's view of an event rather than mechanically translating an English tense",
      "Combining motion-verb directionality, transport mode, aspect, and prefixes in real time",
      "Predicting mobile stress and stem alternations across inflected forms",
      "Using word order and particles to sound neutral, emphatic, skeptical, warm, or abrupt",
      "Moving between conversational Russian, edited prose, bureaucracy, literature, and internet slang without accidental parody"
    ],
    topics: [
      {
        title: "Cases as viewpoints on a noun",
        body: cited("A case is a form that helps show a noun phrase's role or relationship. Prepositions narrow the possibilities, but meanings matter: в Москву uses accusative for motion into Moscow, while в Москве uses prepositional for location. Learn the contrast as a miniature scene.", "wiki-russian", "ruscorpora"),
        example: "Я живу́ в Москве́, но за́втра е́ду в Петербу́рг.",
        exampleTranslation: "I live in Moscow, but tomorrow I'm going to Saint Petersburg. Location takes prepositional Москве; destination takes accusative Петербург."
      },
      {
        title: "Aspect: activity, event, and result",
        body: cited("Imperfective presents an action from inside—as process, habit, repeated event, or general fact—while perfective commonly presents a bounded whole or result. Context matters more than the misleading labels “unfinished” and “finished,” and a perfective non-past form normally has future meaning.", "cornell-aspect", "ruscorpora"),
        example: "Я чита́л кни́гу весь ве́чер, но не прочита́л её.",
        exampleTranslation: "I was reading the book all evening, but I didn't finish/read it through. The same real-world activity is framed first as process, then as unrealized result."
      },
      {
        title: "Verbs of motion",
        body: cited("Unprefixed motion verbs contrast a current or one-direction journey with multidirectional, habitual, or general movement. Идти/ходить concern movement on foot; ехать/ездить concern transport. Prefixes then add paths such as arrival, departure, entry, crossing, or a short side trip.", "wiki-russian", "ruscorpora"),
        example: "Сейча́с я иду́ домо́й, а обы́чно хожу́ пешко́м че́рез парк.",
        exampleTranslation: "I'm walking home now, and I usually walk through the park. Иду marks the present one-way trip; хожу marks habitual movement."
      },
      {
        title: "Animacy in the accusative",
        body: cited("For masculine singular and all plural nouns, the accusative can copy the genitive for animate referents but the nominative for inanimate ones. Adjectives and pronouns show the same pattern, making animacy visible across the phrase.", "wiki-russian"),
        example: "Я ви́жу но́вого студе́нта и но́вый университе́т.",
        exampleTranslation: "I see a new student and a new university. The animate masculine phrase takes genitive-shaped endings; the inanimate one looks nominative."
      },
      {
        title: "Numbers change the noun phrase",
        body: cited("After два, три, четыре in basic nominative/accusative counting, nouns use a genitive-singular-looking form; after five and higher they normally use genitive plural. Compound numbers follow their final component, while case outside the basic counting form adds another layer.", "gramota", "ruscorpora"),
        example: "Оди́н но́вый дом, два но́вых до́ма, пять но́вых домо́в.",
        exampleTranslation: "One new house, two new houses, five new houses. Notice that both noun and adjective forms change with the numeral pattern."
      },
      {
        title: "Reflexive -ся and middle meanings",
        body: cited("The suffix -ся began with a reflexive pronoun but now marks many relationships: direct reflexive action, reciprocal action, passive-like constructions, spontaneous events, and verbs that simply must be learned with -ся. It is not always translatable as “oneself.”", "wiki-russian", "ruscorpora"),
        example: "Две́рь открыва́ется, а встре́ча начина́ется.",
        exampleTranslation: "The door is opening, and the meeting is beginning. Neither verb describes a person acting on themself."
      },
      {
        title: "Flexible word order, precise focus",
        body: cited("Endings allow several orders without losing who did what, but intonation and context decide what sounds neutral. Move a word only after deciding which question the sentence answers; copying English order forever produces correct but monotonous Russian.", "ruscorpora", "wiki-russian"),
        example: "Э́ту кни́гу мне дала́ А́нна.",
        exampleTranslation: "It was Anna who gave me this book. Placing Анна last makes the giver the likely focus; эту книгу is already established."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Russian's largest speaker population is in the Russian Federation, but the language's map reflects imperial expansion, Soviet mobility, education, displacement, and post-1991 migration. It has official status in Russia and institutional status of different kinds in Belarus, Kazakhstan, Kyrgyzstan, and some contested or internationally unrecognized territories. Elsewhere it may be a minority, heritage, or common second language without nationwide official status. Legal wording and actual daily use can differ. In Ukraine, Russian remains a home language for many citizens even as Russia's war has led many people to change language practices and reject claims that Russian-speaking identity determines political loyalty. A responsible guide avoids coloring whole countries as “Russian-speaking” and asks which community, generation, and domain is meant.",
      "wiki-russian",
      "un-russian"
    ),
    regions: [
      { place: "Russian Federation", note: cited("Russian is the federal state language, but the federation is multilingual. Russian proficiency is not the same as ethnic Russian identity.", "wiki-russian") },
      { place: "Belarus, Ukraine, and Moldova", note: cited("Family and urban use is deep, but status, education, and attitudes differ sharply. Ukraine's multilingual reality is separate from Russia's political claims.", "wiki-russian") },
      { place: "Baltic states", note: cited("Estonia, Latvia, and Lithuania contain Russian-speaking communities whose usage varies by city and generation; Russian is not their state language.", "wiki-russian") },
      { place: "Caucasus and Central Asia", note: cited("Russian remains useful in many cities and cross-border networks alongside national and local languages. Its reach and status vary by country.", "wiki-russian") },
      { place: "Global diasporas", note: cited("Communities in Israel, Germany, the Americas, Australia, and elsewhere may preserve older usage, absorb local vocabulary, or coexist with other heritage languages.", "wiki-russian", "ruscorpora") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "For an English-speaking learner, Russian's difficulty is concentrated less in Cyrillic than in grammatical choices and sound patterns that English leaves implicit. Discover Discomfort highlights cases, prefixes, conjugation, and gender, though its claim that spelling maps sounds one-to-one is too optimistic: stress and reduction make pronunciation a separate skill. The language becomes manageable when “learn six cases” is replaced by smaller jobs—ask for something with the genitive, describe a location with the prepositional, recognize an animate accusative. Likewise, do not wait to master aspect before speaking. Learn a few high-frequency contrasts in stories and accept that advanced aspect remains interpretive.",
      "dd-hardest",
      "wiki-phonology",
      "cornell-aspect"
    ),
    easierAspects: [
      "Cyrillic has only 33 letters and can become basically readable in a few focused sessions",
      "Russian has no articles and relatively few basic tense forms compared with some Western European languages",
      "Many international scientific, artistic, and technical words are recognizable once transliterated",
      "A large ecosystem of teachers, graded readers, dictionaries, corpora, subtitles, and media supports every level"
    ],
    hardAspects: [
      "Unpredictable and mobile word stress, with extensive unstressed-vowel reduction",
      "Case choice and agreement across nouns, adjectives, pronouns, numerals, and participles",
      "Aspectual distinctions whose best translation changes with discourse context",
      "Motion-verb systems combining direction, repetition, means, prefixes, and aspect",
      "Natural focus, particles, and register after the grammar is technically correct"
    ],
    plateauRisks: [
      "Reading confidently in Cyrillic while never training reduced vowels or conversational listening",
      "Reciting case tables but not learning which verbs and prepositions select each form",
      "Memorizing perfective counterparts as dictionary pairs without contrasting contexts",
      "Consuming only translated classics or state news and mistaking one narrow style for the living language",
      "Using automatic translation for stress or aspect without checking a dictionary and corpus"
    ],
    workload: cited(
      "A sustainable week can combine short speaking sessions, daily stress review, graded listening with transcripts, and one writing correction. Recycle one story: tell habits with imperfective verbs, one event with perfectives, and journeys with motion verbs. Discover Discomfort's one-sentence-a-day method is a useful low-intensity alternative. Progress is uneven: Cyrillic may click in days, case recognition in months, and idiomatic aspect over years. Measure what you can do with a voice note, article, or conversation.",
      "dd-one-sentence",
      "dd-writing",
      "ruscorpora"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Replace “improve Russian” with register projects: transcribe an interview minute weekly, pair a short story with its audiobook, or collect how one prefix changes ten verbs. Keep corpus examples with date, genre, stress, government, and your own variation. Alternate intensive reading with reading for plot. Ask tutors what situation a sentence implies and which word sounds focused, not merely whether it is grammatical.",
      "ruscorpora",
      "gramota"
    ),
    mediaPractice: cited(
      "Mix fiction, independent journalism, interviews, comedy, science, music, and speakers outside Moscow. Compare scripted introductions with unscripted answers. Podcasts reveal fillers such as ну, вот, короче, типа, and как бы; learn their function rather than sprinkling them into formal speech. Verify automatic subtitles against transcripts and dictionaries. Label Russian-language work by Ukrainians, Belarusians, Israelis, Central Asians, and emigrants rather than absorbing everyone into vague “Russian culture.”",
      "ruscorpora",
      "gramota"
    ),
    dictionariesAndCorpora: cited(
      "Use Gramota.ru for spelling, stress, pronunciation, meanings, and usage notes. The Russian National Corpus offers more than two billion annotated tokens in spoken, newspaper, poetry, dialect, parallel, and other collections. Search exact forms, then use annotation and compare dates. OpenRussian supplies learner-friendly forms, but check serious uncertainty against Gramota and corpus evidence. A corpus reports its selected texts; it cannot decide what suits your audience.",
      "gramota",
      "ruscorpora"
    ),
    resources: [
      { type: "corpus", title: "Russian National Corpus", url: "https://ruscorpora.ru/en/", level: "intermediate", description: cited("A large, annotated collection with modern, historical, spoken, poetic, dialect, and parallel subcorpora. Use it to test collocations, government, aspect, and register in dated context.", "ruscorpora") },
      { type: "dictionary", title: "Gramota.ru dictionaries", url: "https://gramota.ru/biblioteka/slovari", level: "intermediate", description: cited("A portal to authoritative Russian spelling, stress, pronunciation, explanatory, proper-name, and specialist dictionaries. Essential when native intuitions disagree.", "gramota") },
      { type: "course", title: "Cornell Russian Grammar: Verbal Aspect", url: "https://russian.cornell.edu/grammar/html/gr04_d.htm", level: "intermediate", description: cited("A compact university explanation separating tense from aspect, with forms and examples suitable for structured review.", "cornell-aspect") },
      { type: "other", title: "Discover Discomfort: The Hardest Languages for English Speakers", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", level: "beginner", description: cited("A candid learner-oriented overview of why Russian cases and verbal morphology feel demanding, plus a practical starting sequence. Treat its phonetic-spelling claim as motivational simplification.", "dd-hardest") },
      { type: "other", title: "Discover Discomfort: How to Read and Write Any Language", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", level: "beginner", description: cited("A useful push to stop fearing new scripts and attach Cyrillic to meaningful text rather than remaining in romanization.", "dd-writing") },
      { type: "dictionary", title: "OpenRussian", url: "https://en.openrussian.org/", level: "all", description: cited("A convenient learner dictionary with stress, frequency, forms, and examples; cross-check difficult normative or register questions with Gramota and the national corpus.", "openrussian") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Russian roots announce relationships: пис- links писать “write,” письмо “letter,” писатель “writer,” записка “note,” and переписка “correspondence.” But morphology cannot guarantee current use. Particles often matter more than “untranslatable” nouns: вот can point, conclude, present, or mark a turn; ну can urge, hesitate, object, or concede. Diminutives signal affection, hierarchy, irony, or unwanted familiarity as well as size. Record who said a form to whom.",
      "ruscorpora",
      "gramota"
    ),
    notableWords: [
      { term: "тоска́", transliteration: "toská", meaning: "longing, anguish, melancholy, ennui", note: cited("Often advertised as untranslatable, but its range is the real story: contexts run from boredom to profound spiritual longing. Search examples before reaching for a mystical cultural explanation.", "ruscorpora", "gramota") },
      { term: "аво́сь", transliteration: "avós'", meaning: "perhaps; relying on luck", note: cited("Can name a hopeful “maybe” or criticize action taken without adequate planning. It survives in idiom, commentary, and self-irony more readily than as a neutral everyday equivalent of perhaps.", "ruscorpora", "gramota") },
      { term: "душа́", transliteration: "dushá", meaning: "soul; inner self", note: cited("Appears in religion, literature, intimate description, and idioms such as от души “wholeheartedly.” Its frequency makes it ordinary as well as culturally resonant.", "ruscorpora") },
      { term: "уют", transliteration: "uyút", meaning: "coziness, comfort, a welcoming atmosphere", note: cited("Refers to the felt comfort of a home, café, or arrangement, not simply physical softness. The adjective уютный is extremely useful in reviews and everyday description.", "ruscorpora", "gramota") },
      { term: "почемучка", transliteration: "pochemúchka", meaning: "a child or person who constantly asks why", note: cited("Built playfully from почему “why” with a person-forming suffix. It illustrates Russian's productive affectionate and evaluative word formation.", "gramota") },
      { term: "суббо́тник", transliteration: "subbótnik", meaning: "organized voluntary communal work day", note: cited("Derived from суббота “Saturday,” the word carries Soviet institutional history and continues in contemporary use for neighborhood or workplace cleanups, sometimes sincerely and sometimes ironically.", "ruscorpora") },
      { term: "ничего́", transliteration: "nichegó", meaning: "nothing; not bad; it's all right", note: cited("Its dictionary meaning is only the beginning. As a reply it may mean “fine,” “so-so,” or reassurance after an apology; intonation supplies the difference.", "ruscorpora", "gramota") },
      { term: "дава́й", transliteration: "daváy", meaning: "come on; let's; go ahead; okay, bye", note: cited("The imperative of давать “give” has become a conversational workhorse for proposals, encouragement, permission, and closing a call. Learn it as several interaction patterns, not one translation.", "ruscorpora") }
    ],
    loanwordLayers: cited(
      "Russian combines inherited Slavic material with Church Slavonic doublets and centuries of loans. Sometimes relatives divide by register: город “city” and град in elevated compounds reflect different sound histories. French left words of fashion, cuisine, society, and culture; German and Dutch contributed craft and maritime vocabulary; Turkic sources supplied everyday words including сарай “shed” and арбуз “watermelon”; Italian is visible in music; English supplies стартап, блогер, лайкать, and workplace jargon. Borrowed stems immediately acquire Russian grammar—лайкать conjugates and produces лайкнуть—showing that borrowing is active Russian word formation, not an alien object pasted into a sentence.",
      "wiki-russian",
      "ruscorpora",
      "gramota"
    ),
    idioms: [
      { original: "Ни пу́ха ни пера́!", transliteration: "Ni púkha ni perá!", translation: "Good luck!", note: "Literally “neither fur nor feather.” Said before an exam, performance, or difficult task. The traditional response is К чёрту! “To the devil!” rather than спасибо." },
      { original: "Ру́ки не дохо́дят.", transliteration: "Rúki ne dokhódyat.", translation: "I never get around to it.", note: "Literally “my hands don't reach it.” A common way to explain a postponed task; change the dative possessor as needed: у меня руки не доходят." },
      { original: "Де́ло в ша́пке.", transliteration: "Délo v shápke.", translation: "It's in the bag; the matter is settled.", note: "Literally “the business is in the hat.” Informal and upbeat, used when success seems secured or arrangements are complete." },
      { original: "После до́ждичка в четве́рг.", transliteration: "Pósle dózhdichka v chetvérg.", translation: "When pigs fly; at some unlikely time.", note: "Literally “after a little rain on Thursday.” Playful skepticism about a promise or date; the diminutive дождичка contributes to the idiomatic flavor." },
      { original: "Семь раз отме́рь, оди́н раз отре́жь.", transliteration: "Sem' raz otmér', odín raz otrézh'.", translation: "Measure twice, cut once.", note: "Literally “measure seven times, cut once.” A familiar proverb urging care before irreversible action." }
    ],
    textGenres: [
      "Nineteenth-century novels, poetry, drama, letters, and criticism—prestigious but not templates for casual modern conversation",
      "Twentieth-century modernist, Soviet, émigré, samizdat, dissident, and post-Soviet writing",
      "Contemporary novels, speculative fiction, crime, memoir, comics, and digital literary magazines",
      "Independent, state, regional, exile, and specialist journalism with sharply different editorial positions",
      "Film, serial drama, animation, stand-up, video essays, podcasts, rap, rock, pop, and bard song",
      "Messaging and social media rich in ellipsis, memes, profanity, transliteration, emoji, and multilingual code-switching"
    ]
  },
  relationships: {
    overview: cited(
      "Russian sits inside Slavic, not inside a vague family of all Cyrillic languages. Ukrainian and Belarusian are its closest standardized relatives; Polish, Czech, Bulgarian, Serbian, and other Slavic languages share older grammar and vocabulary at greater distance. Cyrillic does not prove close ancestry: Kazakh, Kyrgyz, Mongolian, Tajik, and many languages of Russia adopted or adapted Cyrillic through specific political histories. Conversely, Polish is plainly related despite using Latin letters. Contact can produce hundreds of shared words without changing the family tree.",
      "glottolog-russian",
      "unicode-cyrillic",
      "wiki-russian"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Russian is a language, not a personality test or government. Its archive includes imperial and Soviet institutions, censorship, exile, minority voices, underground circulation, anti-war writing, entertainment, and work produced abroad. Do not turn тоска into genetic melancholy or claim speakers are blunt because articles are absent. Ты and вы encode relationship; first-name-plus-patronymic remains useful in formal or intergenerational settings; diminutive names require social knowledge. Pair the famous canon with contemporary women, queer and regional authors, translators, journalists, musicians, and Russian-language creators from Ukraine, Belarus, Central Asia, Israel, and diasporas. During the war against Ukraine, identify creators carefully: language alone does not assign nationality or politics.",
  resources: [
    { type: "corpus", title: "Russian National Corpus", url: "https://ruscorpora.ru/en/", level: "intermediate", description: cited("The strongest all-purpose tool for seeing real Russian across centuries and genres, with grammatical search and parallel texts.", "ruscorpora") },
    { type: "dictionary", title: "Gramota.ru", url: "https://gramota.ru/", level: "all", description: cited("The place to check stress, spelling, inflection, meaning, stylistic labels, and competing norms in authoritative dictionaries.", "gramota") },
    { type: "course", title: "Cornell Russian Grammar", url: "https://russian.cornell.edu/grammar/", level: "beginner", description: cited("A university-hosted reference for foundational morphology and syntax, especially useful after a first textbook explanation.", "cornell-aspect") },
    { type: "other", title: "Discover Discomfort writing-system guide", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", level: "beginner", description: cited("A practical argument for getting out of romanization and making Russian print and handwriting part of study from the start.", "dd-writing") },
    { type: "other", title: "Discover Discomfort one-sentence-a-day method", url: "https://discoverdiscomfort.com/one-sentence-a-day-language-learning/", level: "all", description: cited("A low-volume routine illustrated with Russian audio: useful for maintaining careful daily contact when an intensive plan is unrealistic.", "dd-one-sentence") },
    { type: "dictionary", title: "OpenRussian learner dictionary", url: "https://en.openrussian.org/", level: "all", description: cited("Fast access to stress, declension, conjugation, frequency, and examples, best used alongside normative and corpus tools.", "openrussian") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Здра́вствуйте!", transliteration: "Zdrávstvuyte!", translation: "Hello!", usageNote: "Polite or plural. The consonant cluster is simplified in natural speech; do not force every written segment equally." },
    { original: "Приве́т!", transliteration: "Privét!", translation: "Hi!", usageNote: "Informal, suitable with friends and in casual peer settings, not a default to every stranger." },
    { original: "Спаси́бо.", transliteration: "Spasíbo.", translation: "Thank you.", usageNote: "Neutral and universal. Большо́е спаси́бо adds “many thanks.”" },
    { original: "Пожа́луйста.", transliteration: "Pozháluysta.", translation: "Please; you're welcome; here you are.", usageNote: "Its exact job comes from the exchange: a request, a response to thanks, or an invitation to proceed." },
    { original: "Извини́те.", transliteration: "Izviníte.", translation: "Excuse me; I'm sorry.", usageNote: "Polite/plural. Извини is the informal singular form." },
    { original: "Я не понима́ю.", transliteration: "Ya ne ponimáyu.", translation: "I don't understand.", usageNote: "Imperfective понима́ть describes the current state of not understanding." },
    { original: "Повтори́те, пожа́луйста.", transliteration: "Povtoríte, pozháluysta.", translation: "Please repeat that.", usageNote: "Polite/plural imperative. Add ещё раз “once more” if useful." },
    { original: "Мо́жно поме́дленнее?", transliteration: "Mózhno pomédlenneye?", translation: "Could you speak more slowly?", literalMeaning: "Is it possible [to do it] more slowly?", usageNote: "A natural impersonal request; context supplies the omitted action." },
    { original: "Что э́то зна́чит?", transliteration: "Shto éto znáchit?", translation: "What does this mean?", usageNote: "Use Как э́то по-ру́сски? for “How do you say this in Russian?”" },
    { original: "Как вас зову́т?", transliteration: "Kak vas zovút?", translation: "What's your name?", literalMeaning: "What do they call you?", usageNote: "Polite. Informally ask Как тебя́ зову́т?" },
    { original: "О́чень прия́тно.", transliteration: "Óchen' priyátno.", translation: "Pleased to meet you.", literalMeaning: "Very pleasant.", usageNote: "A compact response after an introduction; no present-tense “is” appears." },
    { original: "Где нахо́дится метро́?", transliteration: "Gde nakhóditsya metró?", translation: "Where is the metro?", usageNote: "Метро is indeclinable, which makes this phrase unusually forgiving." },
    { original: "Ско́лько э́то сто́ит?", transliteration: "Skól'ko éto stóit?", translation: "How much does this cost?", usageNote: "Notice initial ст in стоит and keep stress on the first syllable." },
    { original: "До свида́ния!", transliteration: "Do svidániya!", translation: "Goodbye!", literalMeaning: "Until [our next] meeting.", usageNote: "Neutral and polite. Пока́ is an informal “bye.”" }
  ],
  sources: [
    { id: "dd-hardest", title: "The 4 Hardest Languages to Learn for English Speakers", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-writing", title: "How to Read and Write Any Language — A Quick Guide", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-one-sentence", title: "The One Sentence a Day Language Learning Method", url: "https://discoverdiscomfort.com/one-sentence-a-day-language-learning/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "wiki-russian", title: "Russian language", url: "https://en.wikipedia.org/wiki/Russian_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-phonology", title: "Russian phonology", url: "https://en.wikipedia.org/wiki/Russian_phonology", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-dialects", title: "Russian dialects", url: "https://en.wikipedia.org/wiki/Russian_dialects", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-russian", title: "Glottolog 5.3: Russian", url: "https://glottolog.org/resource/languoid/id/russ1263", publisher: "Glottolog", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "ruscorpora", title: "Russian National Corpus", url: "https://ruscorpora.ru/en/", publisher: "Vinogradov Russian Language Institute, Russian Academy of Sciences", accessedAt: "2026-07-10" },
    { id: "gramota", title: "Dictionaries of the Russian Language", url: "https://gramota.ru/biblioteka/slovari", publisher: "Gramota.ru", accessedAt: "2026-07-10" },
    { id: "dialect-atlas", title: "Dialectological Atlas of the Russian Language", url: "https://da.ruslang.ru/", publisher: "Vinogradov Russian Language Institute, Russian Academy of Sciences", accessedAt: "2026-07-10" },
    { id: "unicode-cyrillic", title: "The Unicode Standard, Chapter 7: Cyrillic", url: "https://unicode.org/versions/Unicode16.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-07-10" },
    { id: "cornell-aspect", title: "Russian Grammar: Verbs — Aspect", url: "https://russian.cornell.edu/grammar/html/gr04_d.htm", publisher: "Cornell University", accessedAt: "2026-07-10" },
    { id: "un-russian", title: "Russian Language Day", url: "https://www.un.org/en/observances/russian-language-day", publisher: "United Nations", accessedAt: "2026-07-10" },
    { id: "openrussian", title: "OpenRussian Dictionary", url: "https://en.openrussian.org/", publisher: "OpenRussian", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Russian Language Guide: Cyrillic, Cases, Aspect and Culture",
    description: "A researched, example-rich guide to Russian history, communities, Cyrillic, pronunciation, cases, verbal aspect, motion verbs, registers, culture, phrases, and modern learning resources."
  }
} satisfies LanguageGuide;
