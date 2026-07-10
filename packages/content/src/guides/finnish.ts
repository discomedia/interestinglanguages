import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Estonian",
    relationship: "Close Finnic relative",
    explanation: cited(
      "Finnish and Estonian share much inherited vocabulary and grammar, but centuries of separate development prevent effortless mutual understanding. Finnish kala and Estonian kala both mean “fish,” while Finnish mennä “go” corresponds to Estonian minema. Estonian has lost most word-final vowels and much productive vowel harmony, so its forms often look compressed beside Finnish ones. A Finnish learner will recognize patterns, not receive Estonian for free.",
      "glottolog",
      "wiki-finnish"
    )
  },
  {
    name: "Karelian",
    relationship: "Closest major linguistic relative",
    explanation: cited(
      "Karelian is a distinct Finnic language spoken in Finland and Russia, not the same thing as the southeastern dialects of Finnish called Karelian dialects. The languages form a close continuum of historical relationships and contact, yet Karelian has its own varieties, literature, institutions, and endangered-language revitalization. Learners should resist treating it as quaint or incorrect Finnish.",
      "kotus-languages",
      "glottolog"
    )
  },
  {
    name: "Northern Sámi",
    relationship: "More distant Uralic relative and contact language",
    explanation: cited(
      "Finnish and the Sámi languages belong to Uralic but to different branches. They share ancient inherited material and later contact, while remaining plainly different languages. Sámi languages are Indigenous languages of Sápmi, not northern Finnish dialects. Modern Finland recognizes specific Sámi language rights, and responsible comparison begins with that political and cultural fact.",
      "kotus-languages",
      "language-act"
    )
  },
  {
    name: "Hungarian",
    slug: "hungarian",
    relationship: "Distant Uralic relative",
    explanation: cited(
      "Hungarian and Finnish share deep Uralic ancestry, but their last common stages lie thousands of years back. Neither language is mutually intelligible with the other. Similar habits—suffixing, vowel harmony, rich case inventories, no grammatical gender—are useful comparison points, but many are typological tendencies rather than matching pieces inherited unchanged. Ordinary vocabulary and grammar differ substantially.",
      "glottolog",
      "wiki-finnish"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const finnishGuide = {
  slug: "finnish",
  name: "Finnish",
  autonym: "suomi / suomen kieli",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Finnish is a Finnic Uralic language whose clear spelling, meaningful length contrasts, flexible suffixes, lively spoken varieties, literature, music, and public media reward attention to whole phrases rather than fear of case tables.",
  family: "Uralic, Finnic",
  macroRegion: "Finland, northern Europe, and Finnish communities abroad",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Finnish lets a learner read aloud almost immediately, then gradually reveals how vowel length, compact endings, particles, and the gap between edited and casual speech turn simple-looking words into precise social choices.",
  hero: {
    imageAlt: "A Finnish novel beside a notebook showing doubled vowels, umlauted letters, and case endings.",
    callToActionLabel: "Hear Finnish in use"
  },
  classification: "A Finnic language in the Uralic family and a national language of Finland",
  speakerCommunity: "Finnish is the first language of most people in Finland and a second language for many more, but its community is not a single cultural voice. It includes Helsinki schoolchildren who say mä oon where a textbook prints minä olen, Savonian storytellers whose intonation and forms mark home, Swedish-speaking Finns who use Finnish daily, new residents learning it for work and belonging, Tornedalian and Kven communities whose related histories cross modern borders, and descendants in Sweden, North America, Australia, and elsewhere. The Finnish state records one registered mother tongue per person, a useful administrative measure that cannot fully represent multilingual lives. Finnish shares Finland with Swedish, Sámi languages, Finnish and Finland-Swedish sign languages, Karelian, Romani, and rapidly growing immigrant languages. Learning Finnish therefore means joining particular conversations, not collecting evidence for a mythically silent or homogeneous nation.",
  facts: [
    { label: "Family", value: "Uralic · Finnic" },
    { label: "Registered in Finland", value: "4,719,802 residents had Finnish as their registered language at the end of 2025" },
    { label: "National status", value: "One of Finland’s two national languages, alongside Swedish" },
    { label: "Writing", value: "Latin alphabet; ä and ö are independent letters, and doubled letters mark length" },
    { label: "Grammar", value: "15 conventionally named cases, rich derivation, verb agreement, participles, infinitives, and enclitic particles" },
    { label: "Typical stress", value: "The first syllable carries primary stress, including in long and borrowed words" }
  ],
  learnerOverview: "Begin with sound and a small social repertoire. Finnish spelling makes words inspectable, but only if you hear the difference between tuli “fire,” tuuli “wind,” and tulli “customs.” Learn minä olen and its everyday partner mä oon together, each labeled for setting. Build endings inside useful contrasts: talossa “in the house,” talosta “out of the house,” taloon “into the house.” Store verbs with the cases they invite: pidän kahvista “I like coffee,” not merely pitää “like.” Finnish is rich in patterns, but patterns become fluent through many encounters, not one heroic suffix chart. A first path can combine a structured course, Yle’s learner media, short conversation with correction, and a personal subject—ice hockey, design, metal, ecology, games, cooking, politics, film, or fiction—that gives the next thousand words somewhere to live.",
  origins: {
    overview: cited(
      "Finnish belongs to the Finnic branch of Uralic, alongside Estonian, Karelian, Veps, and smaller related languages. “Uralic” names a demonstrated language family, not a claim that modern Finns migrated directly from one neat point on a map. Proto-Finnic developed around the eastern Baltic through long interaction among mobile communities. Sound change, settlement, trade, and contact produced western and eastern Finnish dialect areas rather than one untouched ancestral form. For much of the medieval period, Finnish was primarily spoken while Latin served the church and Swedish served expanding administration. Written evidence before the sixteenth century consists largely of names and scattered words. The Reformation created demand for vernacular religious text, and Mikael Agricola’s ABC book and 1548 New Testament established an influential, experimental written Finnish based especially on southwestern forms.",
      "wiki-history",
      "kotus-finnish",
      "wiki-history"
    ),
    timeline: [
      {
        period: "1540s–1642",
        event: cited(
          "Mikael Agricola published the first known Finnish primer and translated the New Testament in 1548. His spelling varied because he was building conventions for sounds and endings with no settled model. The complete Bible of 1642 broadened religious literacy and stabilized many practices, though written language remained strongly western in its base.",
          "wiki-history",
          "wiki-history"
        )
      },
      {
        period: "1809–late nineteenth century",
        event: cited(
          "After Finland became an autonomous Grand Duchy in the Russian Empire, language politics changed. Scholars and writers collected eastern dialect vocabulary and oral poetry; Elias Lönnrot’s Kalevala and dictionary work enlarged the literary repertoire. The 1863 Language Decree began a process toward Finnish parity with Swedish in administration. Newspapers, schools, civic organizations, novels, and translation made Finnish usable across new public domains.",
          "wiki-history",
          "wiki-finnish"
        )
      },
      {
        period: "Twentieth century to the digital present",
        event: cited(
          "Independence, mass education, migration from countryside to towns, the displacement of Karelians after war, nationwide broadcasting, and later digital media reshaped how varieties met. Standard Finnish remained strong in public writing while urban spoken Finnish became more visible in dialogue, advertising, subtitles, music, and messaging. Contemporary corpora now allow learners to inspect both edited and conversational usage.",
          "kotus-registers",
          "kielipankki-korp"
        )
      }
    ],
    contactHistory: cited(
      "Finnish vocabulary records sustained multilingual life. Ancient Baltic and Germanic loans include basic cultural terms; Slavic contact contributed another early layer. Centuries within Sweden made Swedish the largest historical source of newer loans in administration, trade, urban life, food, and education, sometimes alongside Low German. Russian influence is especially visible in eastern dialects and particular everyday terms. Christianity and scholarship carried Greek and Latin material, often through Swedish. Modern English supplies technology, business, sport, entertainment, and youth vocabulary: some items remain visibly international, while others take Finnish endings and derivation without fuss. Finnish has also influenced neighboring varieties. Borrowing is not damage around an otherwise pure core; it is evidence that speakers have continuously adapted Finnish to the worlds they inhabit.",
      "wiki-finnish",
      "kotus-finnish"
    ),
    standardization: cited(
      "Standard written Finnish, yleiskieli, was deliberately assembled from multiple dialect resources rather than copied from one modern city. Its spelling and grammar are maintained through education, publishing, public administration, dictionaries, and recommendations from the Institute for the Languages of Finland. Standard Finnish is internally variable and keeps changing. It should not be confused with all Finnish: regional dialects and colloquial forms share core grammar while following their own natural norms. A newsreader, parliamentary report, text message, stand-up set, and conversation at a bus stop can all be competent Finnish. Learners need standard Finnish for broad literacy and public life, but treating it as the only correct speech makes ordinary conversation unnecessarily mysterious.",
      "kotus-registers",
      "kotus-finnish"
    )
  },
  variants: {
    overview: cited(
      "Traditional Finnish dialectology draws a broad western–eastern division and many regional groups: southwestern, Häme, Ostrobothnian, far-northern, Savo, and southeastern varieties among them. Those categories describe bundles of features, not fenced-off speech. Urbanization and mobility have produced regional colloquial forms that mix local and nationwide tendencies. Age, occupation, medium, and relationship may predict a form as strongly as birthplace. The Institute’s archives contain recordings from essentially every Finnish parish, making variation something learners can hear rather than a decorative map.",
      "kotus-dialects"
    ),
    items: [
      {
        name: "Standard written Finnish (yleiskieli / kirjakieli)",
        note: cited(
          "The shared form used in most books, news prose, official communication, education, and learner materials. Formal speech often approaches it but rarely sounds like text read word by word. It remains the essential bridge across region and generation.",
          "kotus-registers"
        )
      },
      {
        name: "Nationwide colloquial Finnish (puhekieli)",
        note: cited(
          "Common conversation includes minä → mä, sinä → sä, olen → oon, and third-person plural forms such as ne tulee beside standard he tulevat. These are patterned choices, not careless deletions. Their distribution varies, so learn complete equivalents from real speakers rather than applying a universal shortening algorithm.",
          "kotus-registers",
          "kielipankki-korp"
        )
      },
      {
        name: "Savo and other eastern varieties",
        note: cited(
          "Savo varieties cover a wide region and are associated with recognizable diphthong patterns, consonant behavior, vocabulary, and intonation. Their famous indirectness is a cultural stereotype, not a grammar rule. Listen to individual speakers and genres instead of turning a complex region into comic characterization.",
          "kotus-dialects"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Finnish has eight core vowel letters—a, e, i, o, u, y, ä, ö—and treats length as meaning-changing for both vowels and consonants. The contrast is written transparently: tuli “fire,” tuuli “wind,” and tulli “customs” are three different words. Vowels commonly participate in harmony: native suffixes choose back-vowel forms with a, o, u and front-vowel forms with ä, ö, y, while e and i are neutral. Harmony is a property learners can hear and produce through word families, not an exotic mental calculation.",
      "wiki-grammar",
      "kotus-finnish"
    ),
    script: "Finnish Latin alphabet; examples use standard Finnish spelling rather than a separate romanization",
    soundSystem: cited(
      "Most letter–sound relationships are stable. Finnish y resembles French u or German ü, not English y; ä is an open front vowel, and ö is rounded. The r is normally trilled and h changes color according to neighboring sounds. Native vocabulary historically favors a restricted consonant set, but loans expand it. Consonant gradation alternates strong and weak stem shapes: kauppa “shop” → kaupassa “in the shop,” katu “street” → kadulla “on the street,” and lukea “read” → luen “I read.” Learn the forms as families; gradation is systematic but its lexical and historical patterns are not all predictable from one rule.",
      "wiki-grammar",
      "visk"
    ),
    prosody: cited(
      "Primary stress normally falls on the first syllable, even in long compounds and recent loans. Secondary stresses help organize later feet, while sentence focus and intonation decide what sounds contrasted, unfinished, doubtful, or obvious. Finnish rhythm is not simply flat: quantity remains crucial in unstressed syllables, and casual speech compresses familiar sequences. Shadow full clauses without replacing every unstressed vowel by English schwa. A correct first-syllable beat cannot rescue wrong length, because the listener may hear a different word.",
      "wiki-finnish",
      "wiki-grammar"
    ),
    learnerTraps: [
      "Treating doubled letters as emphasis instead of holding the vowel or consonant longer",
      "Pronouncing y like English consonantal y rather than a rounded front vowel",
      "Losing the ä/a and ö/o distinction in unstressed syllables",
      "Expecting one dictionary stem to remain unchanged before every ending",
      "Moving stress toward the end of a long word as English often does",
      "Reading casual speech with fully articulated standard forms instead of learning its own regular shapes"
    ],
    sampleWords: [
      { original: "tuli / tuuli / tulli", translation: "fire / wind / customs", note: "A compact demonstration that short u, long uu, and long ll distinguish words. Keep first-syllable stress in all three." },
      { original: "sydän", translation: "heart", note: "Both y and ä are front vowels; round the lips for y while keeping the tongue forward. The final n is fully audible." },
      { original: "yö", translation: "night", note: "One syllable containing the diphthong yö. Begin with rounded front y and move toward ö without inserting a consonantal English y." },
      { original: "sauna", translation: "sauna", note: "Finnish normally has two syllables, sau-na, with first-syllable stress. The first vowel sequence is a diphthong, not English saw-na." },
      { original: "kauppa / kaupassa", translation: "shop / in the shop", note: "The strong pp becomes weak p before the inessive ending; quantity and morphology work together." },
      { original: "tapaan / tapan", translation: "I meet / I kill", note: "The long aa versus short a changes the verb. This sobering pair is good motivation to train duration early." }
    ]
  },
  writing: {
    overview: cited(
      "Finnish uses the Latin alphabet with ä and ö as independent letters placed after z in Finnish alphabetical order. Å belongs to the alphabet and occurs mainly in Swedish names; š and ž appear in recommendations for certain foreign words and names, while many keyboards and texts use adapted spellings. Double vowels and consonants directly mark phonemic length. The result is unusually transparent spelling, although morphophonological alternations mean the same lexical stem can appear in several written shapes.",
      "unicode-cldr",
      "kotus-finnish"
    ),
    primaryScript: "Latin alphabet with Finnish orthographic conventions",
    romanization: cited(
      "Finnish is already written in Latin script, so it needs no general romanization. Learner respellings such as “oo” for long o are actively misleading because Finnish oo already has an exact spelling and sound value. Preserve ä and ö in names and words; replacing them with a and o can change pronunciation or identity. Unicode encodes them routinely, and modern systems should handle them without improvised substitutions.",
      "unicode-cldr"
    ),
    spellingNorms: cited(
      "Write compounds together when they function as one word, a practice that creates forms long enough to attract internet jokes but ordinary enough to matter in searches and editing. Use a hyphen where structure or adjacent vowels require clarification. Commas, capitalization, and foreign names follow maintained conventions rather than sound alone. Spoken spellings—mä, oon, tuun—are common in quoted dialogue and informal messages, but a learner should distinguish purposeful colloquial writing from random omission.",
      "kotus-registers",
      "kotus-dictionary"
    ),
    styleNotes: [
      cited("Treat ä and ö as letters, not decorated versions of a and o; dictionary and alphabetical order reflect that distinction.", "unicode-cldr"),
      cited("Learn the spelling and sound of both strong and weak stems: matto, maton, matolla tells a more useful story than the isolated headword “rug.”", "visk"),
      cited("Keep standard and conversational spellings tagged by genre. A novel’s dialogue, a group chat, and an application form make different orthographic promises.", "kotus-registers"),
      cited("When a compound is hard to parse, work from its rightmost head: kirjakauppa is a kind of kauppa “shop,” and tiedekirjakauppa is a science-book shop.", "kotus-dictionary")
    ]
  },
  grammar: {
    overview: cited(
      "Finnish often places several meaningful endings after a stem: talo-i-ssa-ni-kin can be parsed roughly as house-plural-in-my-also, “in my houses too.” Linguists call this agglutination when boundaries remain relatively segmentable. Real Finnish is not a box of perfectly snapping bricks: vowel harmony selects ending shapes, consonant gradation changes stems, endings overlap in function, and common words preserve irregular history. The useful insight is that long forms contain clues. Learn to peel them from the outside while reading them as complete expressions.",
      "kotus-finnish",
      "visk"
    ),
    typologicalProfile: cited(
      "Finnish is largely suffixing, has no grammatical gender or articles, and normally uses subject–verb–object order when context is neutral. Nouns, adjectives, pronouns, numerals, and participles inflect; verbs mark person, tense, mood, and voice-like constructions. Fifteen cases are conventionally listed, but frequency and productivity differ. Word order is flexible because endings identify many roles, yet it is not free: order, stress, and particles package old information, new information, contrast, and stance.",
      "kotus-finnish",
      "wiki-grammar",
      "visk"
    ),
    morphology: cited(
      "A learner needs stems as much as suffixes. Nainen “woman” has the genitive naisen; vesi “water” has veden; käsi “hand” has käden; huone “room” has huoneen. Productive derivation creates families: kirja “book,” kirjasto “library,” kirjailija “author,” kirjoittaa “write,” kirjoitus “piece of writing.” Clitic particles follow other endings: -kin adds “also/even,” -kaan/-kään participates in negative “either,” -ko/-kö makes questions, and -han/-hän can mark shared knowledge, insistence, or softening. Their translation belongs to a sentence and tone, not a fixed English word.",
      "kotus-finnish",
      "visk",
      "kotus-dictionary"
    ),
    syntax: cited(
      "Neutral Hän osti kirjan means “she/he bought the book.” Kirjan hän osti foregrounds the book—perhaps contrasting it with something not bought—and Hän kirjan osti can carry another marked focus. Finnish pronouns do not distinguish he from she: hän refers to a person in the singular standard language, while se is common for people in colloquial speech and not automatically insulting. Subjects can disappear when the verb ending identifies them: tulen “I come.” The absence of articles means definiteness emerges through context, word order, case, quantity, and construction.",
      "wiki-grammar",
      "visk",
      "kotus-registers"
    ),
    advancedPainPoints: [
      "Choosing nominative, accusative-like total-object forms, or partitive for objects and quantities",
      "Recognizing spoken equivalents quickly rather than mentally expanding every form into the written standard",
      "Selecting internal and external local cases idiomatically with places, states, possession, and government",
      "Controlling consonant gradation and multiple stems during unrehearsed speech",
      "Interpreting participial and infinitival constructions in dense edited prose",
      "Using word order and clitic particles for information structure without sounding mechanically emphatic"
    ],
    topics: [
      {
        title: "Local cases draw paths and social relations",
        body: cited(
          "The internal trio talossa “in the house,” talosta “out of the house,” taloon “into the house” contrasts with the external trio pöydällä “on the table,” pöydältä “off the table,” pöydälle “onto the table.” External cases also express possession: Minulla on koira, literally “at me is a dog,” means “I have a dog.” Case choice is partly spatial and partly lexical, so store named places and verbs in phrases: Helsingissä “in Helsinki” but asemalla “at the station.”",
          "wiki-grammar",
          "visk"
        ),
        example: "Olen kirjastossa, mutta menen kohta asemalle.",
        exampleTranslation: "I’m in the library, but I’m going to the station soon."
      },
      {
        title: "The partitive presents an open quantity or event",
        body: cited(
          "The partitive is not simply “some.” It appears with unbounded substances and quantities, under negation, after many verbs, and when an event is ongoing or lacks a bounded result. Join vettä “some water,” juon vettä “I’m drinking water,” and en juo vettä “I don’t drink water.” Compare luen kirjaa “I am reading the book / a book” with luen kirjan “I will read the book through.” The contrast packages the event, not merely the noun.",
          "wiki-grammar",
          "visk"
        ),
        example: "Kirjoitin kirjettä, mutta en kirjoittanut sitä loppuun.",
        exampleTranslation: "I was writing the letter, but I didn’t finish writing it."
      },
      {
        title: "Consonant gradation links grammar to stem shape",
        body: cited(
          "Stops alternate between strong and weak grades in defined morphological environments. Kukka “flower” gives kukan “of the flower”; matto “rug” gives matolla “on the rug”; kaupunki “city” gives kaupungissa “in the city.” Gradation can change quantity, voice a consonant, or remove k, and newer loans may participate. Identify the nominative and genitive together, then let frequent forms establish the family.",
          "visk",
          "visk"
        ),
        example: "Kaupungissa on kaksi uutta kukkakauppaa.",
        exampleTranslation: "There are two new flower shops in the city."
      },
      {
        title: "Verbs agree, while colloquial speech redraws the paradigm",
        body: cited(
          "Standard present forms include tulen “I come,” tulet “you come,” tulee “she/he comes,” tulemme, tulette, tulevat. Everyday speech often has mä tuun, sä tuut, se tulee, me tullaan, te tuutte, ne tulee. The colloquial first-person plural uses a form historically related to the passive, and the third-person plural often uses the singular verb. Learn both systems as parallel repertoires, not one correct table plus mistakes.",
          "kotus-registers",
          "kielipankki-korp"
        ),
        example: "Me tullaan huomenna. / Me tulemme huomenna.",
        exampleTranslation: "We’re coming tomorrow. (colloquial / standard)"
      },
      {
        title: "Negation has its own verb",
        body: cited(
          "The negative element agrees with the subject—en, et, ei, emme, ette, eivät—while the lexical verb appears in a nonfinite-looking connegative form. En tiedä is “I don’t know”; emme menneet is “we didn’t go.” Negative clauses normally trigger partitive objects. This pattern makes ei more than an invariant “not,” though colloquial paradigms may reduce distinctions.",
          "wiki-grammar",
          "visk"
        ),
        example: "En löytänyt avaimia, joten emme päässeet sisään.",
        exampleTranslation: "I didn’t find the keys, so we couldn’t get inside."
      },
      {
        title: "Infinitives describe purpose, manner, timing, and participation",
        body: cited(
          "The dictionary form in -a/-ä is only one member of a larger system. Menen syömään means “I’m going to eat,” tulen syömästä “I’m coming from eating,” and opin puhumalla “I learn by speaking.” The form must be learned with the construction and governing verb. Traditional numbered labels differ across grammars, so attach each form to a meaning and model sentence before memorizing terminology.",
          "visk",
          "wiki-grammar"
        ),
        example: "Suomea oppii käyttämällä sitä joka päivä.",
        exampleTranslation: "You learn Finnish by using it every day."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "At the end of 2025, Statistics Finland recorded 4,719,802 residents with Finnish as their registered language, out of 5,652,881 residents. That count measures registration, not every competent speaker: many Swedish-speaking, Sámi, immigrant, and multilingual residents use Finnish extensively while registered under another language. Finnish is a national language throughout Finland and has public functions shaped by Finland’s bilingual legal framework. Communities also live in Sweden, Norway, Estonia, Russia, the United States, Canada, Australia, and elsewhere, with distinct histories and differing relationships to standard Finnish.",
      "statistics-finland",
      "language-act",
      "kotus-languages"
    ),
    regions: [
      { place: "Finland", note: cited("The main institutional and demographic center: Finnish is used across education, government, media, work, literature, and daily life, alongside Swedish and many other languages. Municipal language arrangements and individual rights are governed by law rather than by a claim that every locality is monolingual.", "statistics-finland", "language-act") },
      { place: "Sweden", note: cited("Large Finnish-speaking and heritage communities reflect centuries of movement and especially postwar labor migration. Finnish is one of Sweden’s national minority languages; Meänkieli, closely related but separately recognized, has its own identity and standardization.", "kotus-languages") },
      { place: "Northern Norway and cross-border regions", note: cited("Finnish speakers coexist with Kven and Sámi histories. Similarity among varieties does not erase separate language rights or community labels; ask what speakers call their language.", "kotus-languages") },
      { place: "Karelia, Ingria, and Russia", note: cited("Finnish has historical and present connections here through settlement, migration, war, and border change. It must be distinguished from Karelian, Ingrian, and Ingrian Finnish varieties rather than used as a blanket label.", "kotus-languages", "wiki-history") },
      { place: "Global diaspora", note: cited("North American, Australian, and other communities range from recent emigrants to heritage networks several generations old.", "kotus-languages") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Finnish asks an English-speaking learner to notice length, reshape stems, select cases, and acquire a large vocabulary with relatively few obvious cognates. That makes it a long project, not an inaccessible one. Transparent spelling, predictable first-syllable stress, no articles, no grammatical gender, and extensive patterning offer genuine leverage. Estonian, Karelian, Hungarian, Turkish, Japanese, or other language backgrounds change the starting point in different ways, so a universal ranking says little about an individual learner.",
      "wiki-finnish",
      "kotus-finnish"
    ),
    easierAspects: [
      "Stable spelling makes dictionaries, captions, and read-aloud practice useful from the beginning",
      "Primary stress is normally predictable on the first syllable",
      "There is no grammatical gender and no he/she distinction in the standard third-person singular pronoun",
      "Suffix families recur across large parts of the grammar",
      "High-quality public dictionaries, corpora, courses, easy news, and captioned media are available online"
    ],
    hardAspects: [
      "Vowel and consonant length must remain distinct even in unstressed syllables",
      "Case selection is semantic and lexical, not a one-to-one replacement for English prepositions",
      "Consonant gradation and stem alternations complicate both production and dictionary lookup",
      "Everyday colloquial Finnish differs noticeably from the standard introduced in many courses",
      "Dense prose uses derivation, compounds, participles, and infinitives to package information compactly"
    ],
    plateauRisks: [
      "Reading standard Finnish well while still failing to recognize common forms such as mä oon, me mennään, and tuutsä",
      "Reciting case names but not knowing the case frames of frequent verbs and adjectives",
      "Guessing quantity from spelling without training the ear and body to produce it",
      "Using famous cultural words as substitutes for broad everyday vocabulary",
      "Collecting resources without assigning each one a repeatable role"
    ],
    workload: cited(
      "Build two coordinated tracks from the start: standard literacy and one real spoken model. In a daily hour, spend time on a structured lesson, replayable audio with transcript, and active production that receives correction. At intermediate level, replace general review with specific questions: which case follows this verb, is this form conversational or edited, and what changed in the stem? Discover Discomfort’s broader resource advice is useful here: a path, examples, audio, correction, and people matter more than a crowded app folder. Expect comfortable interaction to arrive domain by domain; reading literature, following unscripted group conversation, and writing polished institutional Finnish are separate advanced achievements.",
      "dd-resources",
      "yle-learn",
      "kielipankki-korp"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Give every new item a three-part record: a whole phrase, its register, and one contrasting form. For nähdä “see,” save Näen hänet huomenna “I’ll see her/him tomorrow,” en näe häntä “I don’t see her/him,” and colloquial Mä nään sen huomenna. Build case knowledge from verb frames, not alphabetized endings. Once a week, transcribe thirty seconds of one familiar speaker, compare captions or a transcript, and have a teacher explain two differences. This turns the spoken–written gap into a finite collection of patterns rather than a second language lurking behind the textbook.",
      "dd-resources",
      "kielipankki-korp",
      "visk"
    ),
    mediaPractice: cited(
      "Yle offers news, drama, radio, podcasts, children’s programming, and learner materials, including easy-language news. Begin with a recurring format whose presenters and subject become predictable. Listen for situation, then with Finnish text, then retell the item using five phrases. Songs help memory but stretch vowels and syntax; comedy and reality television reveal stance but demand cultural context. Pair one edited source with one conversational source so neither newsreader Finnish nor slang becomes your only model.",
      "yle-learn",
      "kielipankki-korp"
    ),
    dictionariesAndCorpora: cited(
      "Kielitoimiston sanakirja is the Institute’s dictionary of contemporary standard Finnish; it gives meanings, usage labels, inflection types, and examples. The online Iso suomen kielioppi, VISK, is a descriptive reference for structure rather than a beginner course. Kielipankki’s Korp searches grammatically annotated written and spoken corpora, including historical and parallel collections. Search a lemma to gather its forms, compare a phrase across genres, and read enough context to avoid treating one concordance line as a rule. Oppijan Korp provides a more learner-oriented route into authentic examples.",
      "kotus-dictionary",
      "visk",
      "kielipankki-korp"
    ),
    resources: [
      { type: "course", title: "Yle: Learn Finnish", url: "https://yle.fi/oppiminen/opisuomea", level: "all", description: cited("A public collection of Finnish study material, easy news, phrases, and programs. Use one series consistently and move from learner content toward ordinary Yle media.", "yle-learn") },
      { type: "dictionary", title: "Kielitoimiston sanakirja", url: "https://www.kielitoimistonsanakirja.fi/", level: "all", description: cited("The authoritative contemporary standard-language dictionary. Check inflection and usage labels, then confirm conversational behavior in spoken examples.", "kotus-dictionary") },
      { type: "other", title: "VISK: Iso suomen kielioppi verkossa", url: "https://kaino.kotus.fi/visk/etusivu.php", level: "advanced", description: cited("A comprehensive descriptive grammar maintained online by Kotus. Search it when a real sentence raises a question; it is a reference, not a cover-to-cover beginner syllabus.", "visk") },
      { type: "corpus", title: "Kielipankki Korp", url: "https://www.kielipankki.fi/korp/", level: "advanced", description: cited("Search modern written and spoken Finnish, older literary Finnish, and parallel text. Filter by corpus so forum language, news, and historical prose do not blur together.", "kielipankki-korp") },
      { type: "media", title: "Yle Selkouutiset", url: "https://yle.fi/selkouutiset", level: "beginner", description: cited("Current news in easy Finnish with regular audio and text. Repeated public vocabulary makes it an effective bridge from lessons to ordinary reporting.", "yle-learn") },
      { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A practical audit for a study system: choose a path, real examples, sound, correction, and people. Finnish resources are plentiful enough that avoiding duplicate tools is especially useful.", "dd-resources") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Finnish word families are often more revealing than celebrated “untranslatable” nouns. Juosta “run” connects to juoksu “a run/running,” juoksija “runner,” and juoksennella “run around intermittently.” Derivation can mark causation, repetition, smallness, agency, or attitude, while compounds specify a category from right to left. Culturally famous words such as sisu and sauna have real histories and flexible uses, but neither encodes an emotion unavailable to outsiders. Learn what speakers do with a word in actual sentences.",
      "kotus-dictionary",
      "kielipankki-korp"
    ),
    notableWords: [
      { term: "sisu", meaning: "tenacity; inner resolve under difficulty", note: cited("Sisu can praise sustained courage or stubborn endurance, appear in brands and political rhetoric, and be questioned when persistence becomes self-harm. “Grit” is a starting gloss, not a national personality diagnosis.", "kotus-dictionary", "kielipankki-korp") },
      { term: "löyly", meaning: "steam and heat rising when water is thrown on sauna stones", note: cited("The word belongs to sauna practice but also appears in figurative expressions. It names the experienced wave of heat rather than simply water vapor in a technical sense.", "kotus-dictionary") },
      { term: "arki", meaning: "weekday; everyday life; the ordinary", note: cited("Arki contrasts with holidays and ceremony, but also names the routines that make up life: lapsiperheen arki is the everyday life of a family with children. It can sound burdensome, grounding, or affectionate.", "kotus-dictionary", "kielipankki-korp") },
      { term: "jaksaa", meaning: "have the energy or capacity to continue", note: cited("Jaksatko? can ask whether someone has strength, energy, patience, or willingness. En jaksa may mean “I don’t have the energy” rather than a dramatic claim of physical impossibility.", "kotus-dictionary") },
      { term: "kai", meaning: "presumably; I suppose; probably", note: cited("This small particle calibrates certainty and appeals to shared inference. Se tulee kai huomenna presents tomorrow as likely but not fully asserted; intonation can make it hopeful, doubtful, or mildly challenging.", "visk", "kielipankki-korp") },
      { term: "mökki", meaning: "cottage; cabin", note: cited("A mökki may be a simple summer cabin, a winterized second home, rented accommodation, or a powerful family place. The word evokes practices, but ownership and enthusiasm are not universal Finnish traits.", "kotus-dictionary") }
    ],
    loanwordLayers: cited(
      "Early Baltic and Germanic loans reach into kinship, seafaring, farming, and material culture; Slavic contact added another old layer. Swedish later supplied extensive vocabulary for government, occupations, towns, food, and social institutions. Russian loans are especially salient in eastern usage and certain foods or objects. International Greek and Latin elements often arrived through Swedish or learned coinage. English now feeds technology, gaming, work, sport, and entertainment. Borrowed nouns acquire harmony-sensitive endings—blogissa “in the blog”—and borrowed verbs receive Finnish morphology, showing that contact vocabulary is handled by the living grammatical system.",
      "wiki-finnish",
      "kotus-dictionary"
    ),
    idioms: [
      { original: "Ei olla jäniksen selässä.", translation: "There is no need to rush.", note: "Literally “we’re not on a hare’s back.” A conversational reminder that the situation is not racing away beneath us." },
      { original: "Olla puulla päähän lyöty.", translation: "To be completely astonished or at a loss.", note: "Literally “to be struck on the head with a piece of wood.” It describes the stunned state, not a literal injury." },
      { original: "Nostaa kissa pöydälle.", translation: "To bring a difficult issue into the open.", note: "Literally “to lift the cat onto the table.” Used when a group finally names the awkward matter everyone has avoided." },
      { original: "Mennä metsään.", translation: "To go wrong; fail badly.", note: "Literally “to go into the forest.” Context separates an actual woodland trip from a plan, answer, or performance that misses its mark." }
    ],
    textGenres: [
      "Oral poetry and Kalevala-meter traditions, read with attention to collectors, performers, regions, and later nation-building",
      "Novels and short fiction from Aleksis Kivi and Minna Canth to modernist, Sámi, migrant, crime, speculative, and contemporary voices",
      "Poetry, comics, children’s literature, and the globally traveling Moomin works of Swedish-writing Finnish author Tove Jansson",
      "Newspaper prose, literary essays, nature writing, and public broadcasting in standard and easy Finnish",
      "Rock, metal, folk, schlager, electronic music, hip-hop, stand-up, television dialogue, games, and online conversation"
    ]
  },
  relationships: {
    overview: cited(
      "Finnish makes most sense inside Finnic and Uralic history, but family resemblance is not mutual intelligibility. Estonian and Karelian are close relatives shaped by separate communities; Sámi languages are more distant Uralic relatives with their own Indigenous histories; Hungarian is distant enough that similarities require linguistic reconstruction. Contact with Swedish, Russian, Baltic, Germanic, and now English has been at least as important to the visible vocabulary as family trees alone.",
      "glottolog",
      "kotus-languages",
      "wiki-finnish"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Finnish interaction varies widely despite stereotypes of silence and bluntness. Explore Minna Canth, Aleksis Kivi, Väinö Linna, Eeva-Liisa Manner, Rosa Liksom, Sofi Oksanen, Pajtim Statovci, film, metal, rap, games, and Yle’s changing voices. Finland’s literature is multilingual: “Finnish literature” and “literature in Finnish” are not identical categories.",
  resources: [
    { type: "course", title: "Yle: Learn Finnish", url: "https://yle.fi/oppiminen/opisuomea", level: "all", description: cited("Free learner material connected to Finland’s public broadcaster, useful for moving from exercises to current audio and video.", "yle-learn") },
    { type: "dictionary", title: "Kielitoimiston sanakirja", url: "https://www.kielitoimistonsanakirja.fi/", level: "all", description: cited("The first stop for current standard meanings, inflection, compounds, and usage labels; pair it with spoken evidence for colloquial questions.", "kotus-dictionary") },
    { type: "other", title: "VISK online grammar", url: "https://kaino.kotus.fi/visk/etusivu.php", level: "advanced", description: cited("A deep searchable description of Finnish grammar. Follow internal links from a construction you actually encountered rather than memorizing its terminology in isolation.", "visk") },
    { type: "corpus", title: "Kielipankki Korp", url: "https://www.kielipankki.fi/korp/", level: "advanced", description: cited("Concordances from annotated written, spoken, historical, and parallel corpora. Choose comparable genres before drawing conclusions from frequency.", "kielipankki-korp") },
    { type: "media", title: "Yle Selkouutiset", url: "https://yle.fi/selkouutiset", level: "beginner", description: cited("Easy-language current news with recurring vocabulary. Read, listen, shadow one paragraph, and then compare the same story in ordinary Yle reporting.", "yle-learn") },
    { type: "other", title: "Discover Discomfort learning-resource guide", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("Use its five-part resource test to keep a Finnish plan balanced among sequence, examples, audio, correction, and people.", "dd-resources") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Hei!", translation: "Hi!", usageNote: "Neutral and widely usable. Moi and moikka are common informal alternatives and can also be used when leaving." },
    { original: "Hyvää huomenta.", translation: "Good morning.", literalMeaning: "[I wish you] good morning.", usageNote: "The partitive form reflects an omitted wishing formula; huomenta alone is more casual." },
    { original: "Kiitos.", translation: "Thank you.", usageNote: "Also useful for accepting an offer; kiitti is casual, while kiitos paljon adds emphasis." },
    { original: "Ole hyvä. / Olkaa hyvä.", translation: "Please; here you are; you’re welcome.", usageNote: "Ole is singular informal; olkaa is plural or polite. In everyday replies to thanks, ei mitään “it’s nothing” is also common." },
    { original: "Anteeksi.", translation: "Excuse me; sorry.", usageNote: "Use for attracting attention, passing, or a light apology. Olen pahoillani is a fuller “I’m sorry” for serious sympathy or regret." },
    { original: "En ymmärrä.", translation: "I don’t understand.", usageNote: "The negative verb en marks first-person singular; the lexical verb appears as ymmärrä." },
    { original: "Voisitko sanoa sen uudestaan?", translation: "Could you say that again?", literalMeaning: "Could-you say it anew?", usageNote: "A polite request. In fast speech, voisitko may sound compressed but remains recognizable." },
    { original: "Puhutko englantia?", translation: "Do you speak English?", usageNote: "Englantia is partitive. Add anteeksi before the question for a gentle opening with a stranger." },
    { original: "Opiskelen suomea.", translation: "I’m studying Finnish.", usageNote: "Suomea is partitive because the activity is ongoing and the language is the object of study." },
    { original: "Mitä tämä sana tarkoittaa?", translation: "What does this word mean?", usageNote: "A high-value classroom and conversation-repair question." },
    { original: "Missä vessa on?", translation: "Where is the toilet?", usageNote: "Ordinary and direct. WC is also common on signs; missä asks location, while mihin asks destination." },
    { original: "Paljonko tämä maksaa?", translation: "How much does this cost?", usageNote: "A normal question in shops and markets." },
    { original: "Yksi kahvi, kiitos.", translation: "One coffee, please.", literalMeaning: "One coffee, thank you.", usageNote: "A natural concise order. Longer conditional forms are possible but not required for politeness." },
    { original: "Nähdään!", translation: "See you!", literalMeaning: "[We] will be seen.", usageNote: "A common informal goodbye; näkemiin is a more formal leave-taking." },
    { original: "Ei se mitään.", translation: "It’s all right; don’t worry about it.", literalMeaning: "It [is] nothing.", usageNote: "A common response to a minor apology. Tone matters if the problem was not actually minor." }
  ],
  sources: [
    { id: "dd-resources", title: "Best Less-Common Language Learning Resources: What Actually Works", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", updatedAt: "2026-05-11", accessedAt: "2026-07-10" },
    { id: "wiki-finnish", title: "Finnish language", url: "https://en.wikipedia.org/wiki/Finnish_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of the Finnish language", url: "https://en.wikipedia.org/wiki/History_of_the_Finnish_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-grammar", title: "Finnish grammar", url: "https://en.wikipedia.org/wiki/Finnish_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog", title: "Glottolog 5.3: Finnish", url: "https://glottolog.org/resource/languoid/id/finn1318", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "kotus-finnish", title: "The Finnish language", url: "https://en.kotus.fi/on-language/languages-of-finland-and-language-policy/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-07-10" },
    { id: "kotus-languages", title: "Languages of Finland and language policy", url: "https://en.kotus.fi/on-language/languages-of-finland-and-language-policy/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-07-10" },
    { id: "kotus-dialects", title: "Dialects", url: "https://en.kotus.fi/on-language/dialects/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-07-10" },
    { id: "kotus-registers", title: "Yleiskieli ja muut kielimuodot", url: "https://kotus.fi/kielenhuolto/yleiskieli-ja-sen-kehitys/yleiskieli-ja-muut-kielimuodot/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-07-10" },
    { id: "kotus-dictionary", title: "Kielitoimiston sanakirja", url: "https://www.kielitoimistonsanakirja.fi/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-07-10" },
    { id: "visk", title: "VISK: Iso suomen kielioppi verkossa", url: "https://kaino.kotus.fi/visk/etusivu.php", publisher: "Institute for the Languages of Finland", publishedAt: "2008", accessedAt: "2026-07-10" },
    { id: "statistics-finland", title: "Population 31.12. by language, 2025", url: "https://pxdata.stat.fi/PxWeb/pxweb/en/StatFin/StatFin__vaerak/11rm.px/table/tableViewLayout1/", publisher: "Statistics Finland", updatedAt: "2026-04-01", accessedAt: "2026-07-10" },
    { id: "language-act", title: "Language Act 423/2003", url: "https://www.finlex.fi/en/legislation/translations/2003/eng/423", publisher: "Finlex, Ministry of Justice of Finland", publishedAt: "2003-06-06", accessedAt: "2026-07-10" },
    { id: "kielipankki-korp", title: "Korp user guide", url: "https://www.kielipankki.fi/support/korp/", publisher: "The Language Bank of Finland", accessedAt: "2026-07-10" },
    { id: "yle-learn", title: "Opi suomea: Yle learning materials", url: "https://yle.fi/oppiminen/opisuomea", publisher: "Yle", accessedAt: "2026-07-10" },
    { id: "unicode-cldr", title: "CLDR Collation Chart: Finnish", url: "https://www.unicode.org/cldr/charts/latest/collation/fi.html", publisher: "Unicode Consortium", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Finnish Language Guide: Sounds, Cases, Spoken Finnish and Culture",
    description: "An example-rich guide to Finnish history, communities, pronunciation, transparent spelling, cases, consonant gradation, spoken varieties, literature, phrases, and modern learning resources."
  }
} satisfies LanguageGuide;
