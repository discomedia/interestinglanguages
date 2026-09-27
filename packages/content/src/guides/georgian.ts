import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Mingrelian",
    relationship: "Kartvelian relative in the Georgian-Zan branch",
    explanation: cited(
      "Mingrelian is a language in its own right, not a rustic form of Georgian. It is traditionally spoken in western Georgia, especially Samegrelo, and is more closely related to Laz than to Georgian. Many Mingrelian speakers also use Georgian, but that bilingualism should not be confused with mutual intelligibility.",
      "wiki-kartvelian",
      "glottolog-georgian"
    )
  },
  {
    name: "Laz",
    relationship: "Kartvelian relative in the Georgian-Zan branch",
    explanation: cited(
      "Laz and Mingrelian form the Zan side of the family. Laz is associated particularly with Black Sea communities in Turkey and Georgia. Shared inherited vocabulary and structures reward comparison, although a Georgian learner cannot simply understand ordinary Laz conversation without studying it.",
      "wiki-kartvelian",
      "glottolog-georgian"
    )
  },
  {
    name: "Svan",
    relationship: "More distant Kartvelian relative",
    explanation: cited(
      "Svan represents the earliest-diverging major branch in conventional descriptions of Kartvelian. It has distinctive phonology and grammar and remains tied to Svan-speaking communities rather than serving as an ancient stage of Georgian. Georgian literacy often coexists with spoken Svan bilingualism.",
      "wiki-kartvelian",
      "glottolog-georgian"
    )
  },
  {
    name: "Armenian",
    slug: "armenian",
    relationship: "Unrelated neighboring language with long contact",
    explanation: cited(
      "Armenian is Indo-European, not Kartvelian, but Armenian and Georgian have shared cities, frontiers, religious debates, translation networks, trade, and modern public life for centuries. Contact and parallel cultural histories are real; similar-looking words alone do not demonstrate common descent.",
      "wiki-georgian",
      "geostat-2024"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const georgianGuide = {
  slug: "georgian",
  name: "Georgian",
  autonym: "ქართული",
  status: "published",
  publishedAt: "2025-01-01",
  summary: "Georgian uses a 33-letter alphabet, five vowels, and verbs that can show who did what to whom. Its speakers also have a long and varied written tradition.",
  family: "Kartvelian",
  macroRegion: "South Caucasus and global Georgian communities",
  primaryScript: "Georgian Mkhedruli",
  difficultyLabel: "Very demanding",
  learnerHook: "Learn the letters through signs and short messages, then listen for the people and actions packed into a Georgian verb.",
  hero: {
    imageAlt: "Contemporary Georgian Mkhedruli lettering beside older Georgian manuscript forms.",
    callToActionLabel: "Explore Georgian in use"
  },
  classification: "The largest Kartvelian language and Georgia's principal state and literary language",
  speakerCommunity: "Georgian is the main home and public language for millions of people in Georgia. The 2024 census counted 3,343,987 residents who named Georgian as their mother tongue, or 85.1% of the population covered by that census. That figure is neither a worldwide total nor a count of everyone who can speak Georgian.\n\nGeorgian also lives in migrant and heritage communities across Europe, North America, Israel, Turkey, Russia, and elsewhere. Within Georgia, many people grow up with Azerbaijani, Armenian, another Kartvelian language, or another home language alongside Georgian. Don't treat language ability and ethnicity as the same thing.",
  facts: [
    { label: "Family", value: "Kartvelian · Georgian branch" },
    { label: "2024 census", value: "Mother tongue of 85.1% of the population covered by Georgia's census" },
    { label: "Modern alphabet", value: "33 Mkhedruli letters, written left to right" },
    { label: "Vowels", value: "Five: a, e, i, o, u" },
    { label: "Notable grammar", value: "Seven cases and verbs that can index several participants" },
    { label: "Literary record", value: "Attested from late antiquity" }
  ],
  learnerOverview: "ქართული kartuli starts with a striking fact: its 33 modern letters usually give you a good guide to the sounds of a word. Once you can read თბილისის Tbilisi, პური p'uri “bread,” and წყალი ts'q'ali “water,” you can practice from signs and menus instead of relying on Latin spelling.\n\nThe verb takes longer. One form may tell you who acts, who receives something, and whether an action is complete.\n\nBegin with whole phrases such as არ მესმის ar mesmis “I don't understand,” then compare the present and past forms of a few common verbs. GeoFL lessons, a correcting speaker, and short recordings give you a path from readable words to conversation.",
  origins: {
    overview: cited(
      "Georgian belongs to the Kartvelian family with Mingrelian, Laz, and Svan. Scholars have proposed wider Caucasian links, but none has become an established family relationship.\n\nGeorgian writing goes back to late antiquity. The fifth-century Martyrdom of Shushanik is among the earliest surviving substantial literary works. Translators and writers later drew on Greek, Armenian, Syriac, Arabic, Persian, and European traditions.\n\nRustaveli's medieval poem The Knight in the Panther's Skin is famous, but Georgian literature reaches well beyond it. Old and modern texts differ enough that new readers need help with older language.",
      "wiki-georgian",
      "unicode-georgian",
      "unesco-scripts",
      "ilia-corpus"
    ),
    timeline: [
      {
        period: "5th–10th centuries",
        event: cited(
          "Early inscriptions and manuscripts establish Georgian as a written language of late antiquity. Asomtavruli, the monumental rounded script, appears in inscriptions; Nuskhuri later developed as a compact manuscript hand. Together those two forms became known as Khutsuri in ecclesiastical use.",
          "unesco-scripts",
          "unicode-georgian",
          "wiki-georgian"
        )
      },
      {
        period: "11th–13th centuries",
        event: cited(
          "Translation schools participated in a multilingual Christian intellectual world while historiography, hymnography, philosophy, and secular court literature expanded. Rustaveli's The Knight in the Panther's Skin became the best-known work of the Georgian canon, but it does not stand alone.",
          "ilia-corpus",
          "wiki-georgian"
        )
      },
      {
        period: "17th–18th centuries",
        event: cited(
          "Georgian printing began abroad before presses were established in Tbilisi. Alphabets, religious works, dictionaries, and grammars helped regularize typography while manuscript culture continued. Mkhedruli increasingly became the general secular script.",
          "unicode-georgian",
          "unesco-scripts"
        )
      },
      {
        period: "19th century",
        event: cited(
          "Schools, newspapers, theatre, and writers including Ilia Chavchavadze and Akaki Tsereteli shaped modern literary usage under the Russian Empire. Georgian became a vehicle for modern political, scientific, and civic prose as well as poetry.",
          "wiki-georgian",
          "ilia-corpus"
        )
      },
      {
        period: "20th century to the digital present",
        event: cited(
          "Soviet education widened literacy while Russian exerted institutional and lexical pressure. Since restored independence, Georgian has remained central to state life and media. Unicode, Georgian keyboards, corpora, publishing, and social networks make the script at home on screens.",
          "unicode-georgian",
          "ilia-corpus",
          "geostat-2024"
        )
      }
    ],
    contactHistory: cited(
      "Centuries of contact have left traces in Georgian vocabulary. Iranian languages contributed older layers; Greek, Armenian, Arabic, and Syriac shaped religious and scholarly exchange; Turkic languages came through regional contact. Russian became influential under empire and Soviet rule, while English now supplies many technology terms.\n\nA borrowed word can take Georgian sounds, case endings, and new meanings. When you meet two words for the same object, check who uses each one and whether one belongs to formal writing, casual speech, or a particular generation.",
      "wiki-georgian",
      "ilia-corpus",
      "seelrc-grammar"
    ),
    standardization: cited(
      "Modern Standard Georgian grew mainly from eastern varieties, especially speech associated with Kartli and Kakheti. Schools, dictionaries, publishers, and broadcasters spread the written norm. Tbilisi speech brings many backgrounds together and does not mirror one pure dialect.\n\nThe standard helps people communicate widely. It does not make other Georgian dialects defective, and it does not turn Mingrelian, Laz, or Svan into Georgian dialects. GeoFL teaches the standard as a practical starting point.",
      "georgian-encyclopedia-dialects",
      "geofl",
      "wiki-georgian"
    )
  },
  variants: {
    overview: cited(
      "Georgian dialects differ in sounds, words, and grammar. The Georgian Encyclopedia describes thirteen dialects inside Georgia and several historic varieties across today's borders. These labels describe speech communities rather than a scale of correctness.\n\nAge, schooling, migration, and setting also change how a person speaks. Learn the written standard, then listen to family conversation or regional interviews so you can hear what a textbook leaves out.",
      "georgian-encyclopedia-dialects",
      "jipa-georgian",
      "wiki-georgian"
    ),
    items: [
      { name: "Standard Georgian", note: cited("The national written norm and the basis of most education, publishing, national broadcasting, and foreign-language teaching. Formal spoken Georgian is not identical to spontaneous Tbilisi conversation.", "geofl", "wiki-georgian") },
      { name: "Kartlian and Kakhetian", note: cited("Major eastern dialect areas with an important role in the formation of the literary standard. Local speech still carries vocabulary, intonation, and grammatical forms not reducible to a textbook norm.", "georgian-encyclopedia-dialects") },
      { name: "Imeretian, Gurian, Adjarian, Rachan, and Lechkhumian", note: cited("Western varieties display their own phonetic and morphological patterns. Gurian's reputation for rapid delivery should not become a caricature of its speakers; sustained listening reveals patterned differences.", "georgian-encyclopedia-dialects") },
      { name: "Mountain dialects", note: cited("Tush, Pshavian, Khevsurian, Mokhevian, and Mtiuletian-Gudamakrian are linked to highland communities and oral traditions. Their speakers are not confined to mountain settlements.", "georgian-encyclopedia-dialects") },
      { name: "Fereydanian, Ingiloan, and Imerkhevian", note: cited("Georgian varieties maintained by historic communities in Iran, Azerbaijan, and Turkey preserve distinctive features under different patterns of multilingual contact. Their histories cannot be inferred from the borders of present-day Georgia alone.", "georgian-encyclopedia-dialects") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Georgian has five vowels, /a e i o u/, and a larger set of consonants. The letters თ t and ტ t' name different sounds: the first releases a puff of air, while the second uses a tight burst called an ejective. Speakers also distinguish voiced sounds such as დ d.\n\nSeveral consonants can meet without a vowel between them, as in წყალი ts'q'ali “water.” Practice the sequence slowly and keep the vowels you actually hear. Regional and casual pronunciations vary, so use real recordings alongside the letter chart.",
      "jipa-georgian",
      "seelrc-grammar",
      "wiki-georgian"
    ),
    script: "Modern Mkhedruli, with a practical transliteration in examples; apostrophes mark ejectives",
    soundSystem: cited(
      "Compare three sounds at a time: ბ b, ფ p, პ p'; დ d, თ t, ტ t'; and გ g, ქ k, კ k'. The apostrophe in this guide marks an ejective, a sound made with a brief closed-throat release. Georgian ყ q' is a deeper ejective without a matching three-part set.\n\nThe same contrast appears among sounds like English ts and ch: ძ dz / ც ts / წ ts', and ჯ j / ჩ ch / ჭ ch'. Build a cluster from its last sound, then add the earlier sounds without slipping in a neutral vowel. Record a slow version of წყალი before trying to say it quickly.",
      "jipa-georgian",
      "berkeley-course"
    ),
    prosody: cited(
      "Georgian word stress is usually light, and descriptions differ by word shape and dialect. Keep the five vowels clear instead of reducing the unstressed ones as you might in English.\n\nThe melody of a whole phrase carries questions, emphasis, and feeling. Copy a short spoken sentence with its timing intact. A singer or actor may stretch sounds for effect, so compare performance with ordinary conversation.",
      "jipa-georgian",
      "seelrc-grammar"
    ),
    learnerTraps: [
      "Treating ejective and aspirated letters as decorative spelling variants",
      "Inserting an English-style neutral vowel inside every difficult cluster",
      "Reading transliteration after the Mkhedruli letters are already familiar",
      "Over-stressing one syllable and reducing the surrounding vowels",
      "Assuming every careful dictionary pronunciation matches every regional conversation"
    ],
    sampleWords: [
      { original: "პური", transliteration: "p'uri", translation: "bread", note: "Begin with a compact ejective პ, not English p with a strong puff of air." },
      { original: "ფერი", transliteration: "peri", translation: "color", note: "Contrast aspirated ფ with the ejective პ in პური." },
      { original: "კარი", transliteration: "k'ari", translation: "door", note: "The initial კ is ejective; compare ქ, the aspirated k sound, in ქართული kartuli." },
      { original: "წყალი", transliteration: "ts'q'ali", translation: "water", note: "Practice the initial cluster slowly without adding a vowel between წ and ყ." },
      { original: "მწვანე", transliteration: "mts'vane", translation: "green", note: "A three-consonant opening whose written sequence closely guides the sound." },
      { original: "თბილისი", transliteration: "tbilisi", translation: "Tbilisi", note: "The initial tb cluster is fully normal in Georgian; Georgian stress is lighter than many English pronunciations suggest." },
      { original: "ბაყაყი", transliteration: "baq'aq'i", translation: "frog", note: "A memorable drill for two occurrences of the uvular ejective ყ." }
    ]
  },
  writing: {
    overview: cited(
      "People write almost all modern Georgian in Mkhedruli, from left to right. Its 33 letters include five vowels and 28 consonants, and the spelling usually gives a good guide to pronunciation.\n\nOlder Asomtavruli and Nuskhuri forms still appear in religious and artistic settings. UNESCO recognizes the living culture of the three Georgian writing systems. Learn Mkhedruli first; older scripts become relevant when you read manuscripts, visit churches, or study calligraphy.",
      "unicode-georgian",
      "unesco-scripts",
      "wiki-georgian-scripts"
    ),
    primaryScript: "Mkhedruli (მხედრული), with Mtavruli display capitals in contemporary typography",
    romanization: cited(
      "Latin spellings help briefly, but they often hide the difference between ejective and aspirated sounds. This guide marks ejectives with apostrophes: p', t', k', ts', ch', and q'. It writes შ as sh, ჩ as ch, ც as ts, ძ as dz, and ჟ as zh.\n\nStart typing Georgian words as soon as you recognize the letters. When looking up a name or place, try its Georgian spelling as well as any Latin forms you find on maps.",
      "seelrc-grammar",
      "unicode-georgian"
    ),
    spellingNorms: cited(
      "Ordinary Mkhedruli text does not capitalize the first letter of a sentence or name. Mtavruli gives printers and designers capital-like forms for headings, signs, and emphasis; Unicode pairs them with Mkhedruli letters. Georgian has no routine title case for each word.\n\nWriters separate words with spaces and use familiar modern punctuation. Use Unicode Georgian characters in digital text so search, copying, and screen readers work as expected.",
      "unicode-georgian"
    ),
    styleNotes: [
      cited("Learn letters in contrasting sound sets and type them from the first week; keyboard recall helps break dependence on alphabetical charts.", "berkeley-course"),
      cited("Do not call Asomtavruli simply “uppercase Mkhedruli.” It is historically and graphically a distinct script; Mtavruli is the modern display partner encoded for case behavior.", "unicode-georgian", "unesco-scripts"),
      cited("Old Georgian texts demand historical grammar and vocabulary as well as older letterforms. Deciphering the alphabet alone does not make a medieval manuscript transparent.", "ilia-corpus", "seelrc-grammar"),
      cited("Handwriting varies, but contemporary print and cursive remain the same alphabet. Copy connected words rather than perfecting thirty-three isolated ornamental symbols.", "geofl")
    ]
  },
  grammar: {
    overview: cited(
      "Georgian nouns have no grammatical gender and no articles. Their endings show jobs such as possession or a recipient, while a verb can identify more than one person in the event. The noun system is easier to see on the page; verbs take more time.\n\nGeorgian grammars group verb forms into screeves. Each group combines time with meanings such as completion, possibility, or how the speaker knows about an event. Learn a common verb through short sentences in several forms, then attach the traditional labels to patterns you already recognize.",
      "seelrc-grammar",
      "wiki-georgian-grammar"
    ),
    typologicalProfile: cited(
      "A Georgian verb can carry several meaningful pieces around its root. Linguists call that polypersonal agreement when the verb points to more than one participant. Nouns take seven cases, and words for relations often follow the noun rather than precede it.\n\nThe same actor does not always take the same noun ending. With many verbs, present, aorist past, and perfect forms place participants in different cases. Descriptions call this split alignment; a learner needs to check the actual pattern for each verb class.",
      "seelrc-grammar",
      "wiki-georgian-grammar",
      "yale-dative"
    ),
    morphology: cited(
      "A verb may add a prefix for direction, markers for people, a vowel associated with the action's participants, and endings for its time or mood. Some verbs use only part of that pattern, and stems can change. A single dictionary form will not tell you the forms you need.\n\nKeep the present, future, aorist past, and perfect forms of common verbs beside complete sentences. Georgian grammars call some of the internal vowels “version vowels”; study what changes in meaning rather than memorizing a slot name alone.",
      "seelrc-grammar",
      "wiki-georgian-grammar"
    ),
    syntax: cited(
      "Georgian often places an object before its verb, but speakers can move words to highlight what they are discussing or contrasting. Case endings and verb markers help listeners keep track of who does what.\n\nAdjectives usually come before nouns. Speakers can leave out a pronoun when the verb already identifies the person; an explicit მე me “I” may add emphasis. Listen to a full exchange before deciding why a speaker changed the word order.",
      "seelrc-grammar",
      "wiki-georgian-grammar"
    ),
    advancedPainPoints: [
      "Learning the principal parts and class behavior of common verbs instead of predicting everything from one form",
      "Following case changes across present, aorist, and perfect series",
      "Separating subject, direct-object, and indirect-object person markers inside a verb",
      "Understanding the directional, aspectual, and lexical effects of preverbs",
      "Recognizing colloquial reductions and regional forms after mastering written paradigms"
    ],
    topics: [
      {
        title: "Seven cases, usually visible at the noun's edge",
        body: cited("Georgian nouns distinguish nominative, ergative, dative, genitive, instrumental, adverbial, and vocative. The label “dative” covers several jobs beyond an English indirect object, while the ergative appears with many active verbs in the aorist series. \n\nLearn a noun in short contrasts rather than reciting endings alone: მეგობარი megobari “friend,” მეგობარს megobars “to/for the friend,” მეგობრის megobris “the friend's.” Postpositions often attach to a case form.", "seelrc-grammar", "wiki-georgian-grammar"),
        example: "მეგობარს წიგნი მივეცი. (Megobars ts'igni mivetsi.)",
        exampleTranslation: "I gave my friend a book. The recipient is dative and “book” is nominative."
      },
      {
        title: "Alignment changes with the screeve",
        body: cited("In a present-series sentence, the actor of a typical transitive verb is nominative. In the aorist, that actor commonly takes ergative -მა -ma while the affected noun is nominative. This is why one permanent equation such as “subject equals nominative” fails.\n\nLearn the whole construction beside each tense-aspect form and call the semantic participants actor and affected item until the cases become familiar.", "seelrc-grammar", "wiki-georgian-grammar"),
        example: "ბავშვმა წერილი დაწერა. (Bavshvma ts'erili dats'era.)",
        exampleTranslation: "The child wrote the letter. “Child” carries the aorist-series ergative ending -მა."
      },
      {
        title: "Screeves bundle more than clock time",
        body: cited("A screeve is a paradigm row with a characteristic combination of tense, aspect, mood, stem formation, and participant marking. The present, imperfect, future, aorist, perfect, and related forms therefore cannot always be translated by swapping one English auxiliary. Perfect-series forms may convey result, experience, or indirect evidence.\n\nStart with the present, aorist, and perfect contrasts and revisit the traditional three-series map after each one has appeared in stories.", "seelrc-grammar", "yale-dative", "wiki-georgian-grammar"),
        example: "წერილს წერს / წერილი დაწერა. (Ts'erils ts'ers / ts'erili dats'era.)",
        exampleTranslation: "He or she is writing the letter / wrote the letter. The verb form and the letter's case both change."
      },
      {
        title: "Preverbs carry direction and aspect",
        body: cited("Prefixes such as მი- mi-, მო- mo-, შე- she-, გა- ga-, and და- da- historically or productively indicate paths like toward, hither, inward, outward, and down, but many combinations have lexicalized meanings. With numerous verbs, adding a preverb also builds a future or completed form. Never translate a preverb in isolation; compare a motion diagram and several real sentences.", "seelrc-grammar", "wiki-georgian-grammar"),
        example: "ვწერ / დავწერ. (Vts'er / davts'er.)",
        exampleTranslation: "I write/am writing / I will write (or write to completion in the appropriate context)."
      },
      {
        title: "One verb can point to several people",
        body: cited("A Georgian verb can point to both the writer and the person receiving a letter. Compare ვწერ vts'er “I write,” გწერ gts'er “I write to you,” and მწერს mts'ers “that person writes to me.” Linguists call this polypersonal agreement.\n\nPronouns may disappear unless a speaker needs contrast or clarity. Learn common two-person forms in whole sentences so the markers have a job you can hear.", "seelrc-grammar", "wiki-georgian-grammar", "geofl-functional-grammar"),
        example: "ის მე წერილს მწერს. (Is me ts'erils mts'ers.)",
        exampleTranslation: "That person is writing me a letter. The მ- m- in the verb points to “me.”"
      },
      {
        title: "Dative-subject experiences",
        body: cited("With verbs of liking, wanting, knowing, having, and certain sensations, the person who feels or has something often takes the dative case. English usually translates that person as the subject, so learners may misread the Georgian endings. Treat the construction as its own frame: “to me, X is pleasing” can help you read the structure, though the natural translation is simply “I like X.”", "yale-dative", "seelrc-grammar"),
        example: "მე ქართული მუსიკა მომწონს. (Me kartuli musika momts'ons.)",
        exampleTranslation: "I like Georgian music. Literally, Georgian music is pleasing to me."
      },
      {
        title: "No gender and no articles",
        body: cited("Georgian does not sort ordinary nouns into masculine and feminine genders and has no direct equivalent of English a and the. The third-person pronoun does not force a he/she distinction. Context, demonstratives, word order, and shared knowledge handle definiteness.\n\nThis removes one memorization burden, but it also means translations should not invent gender when Georgian leaves it open.", "seelrc-grammar", "wiki-georgian-grammar"),
        example: "ის ექიმია. (Is ekimia.)",
        exampleTranslation: "He or she is a doctor. The Georgian sentence does not specify gender."
      },
      {
        title: "Flexible order serves information structure",
        body: cited("Because cases and verb markers identify roles, Georgian can reorder major constituents for topic and focus. A learner can begin with subject–object–verb, then collect alternatives from dialogue and ask what each speaker contrasts. Fronting the object is not random freedom: it changes the discourse presentation, just as vocal emphasis does in English.", "seelrc-grammar"),
        example: "ამ წიგნს მე ვკითხულობ. (Am ts'igns me vkitkhulob.)",
        exampleTranslation: "This book, I am the one reading it. The order highlights both the book and the contrasted reader."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Most Georgian speakers live in Georgia, where the language dominates state institutions, schools, and national media. The 2024 census also records many residents whose mother tongue is Azerbaijani, Armenian, Russian, or another language. People may learn Georgian for school or work while keeping another home language.\n\nHistoric Georgian-speaking communities live in Turkey, Azerbaijan, and Iran. Newer migration links Georgian families across several continents. Conflict and displacement in Abkhazia and South Ossetia make a simple language map misleading.",
      "geostat-2024",
      "wiki-georgian",
      "georgian-encyclopedia-dialects"
    ),
    regions: [
      { place: "Tbilisi and eastern Georgia", note: cited("Tbilisi is the largest media, education, and publishing center and draws speakers from throughout the country. Kartli and Kakheti are important eastern dialect zones, but urban Tbilisi speech is not a pure synonym for either one.", "georgian-encyclopedia-dialects", "geostat-2024") },
      { place: "Western Georgia and the Black Sea region", note: cited("Imeretian, Gurian, Adjarian, Rachan, and Lechkhumian Georgian coexist with other languages and varieties. Samegrelo is also a major Mingrelian-speaking area; Adjara's history and contemporary life include Muslim as well as Christian communities.", "georgian-encyclopedia-dialects", "wiki-kartvelian") },
      { place: "Mountain regions", note: cited("Highland dialects are associated with Tusheti, Pshavi, Khevsureti, Mtiuleti, and neighboring areas, while Svan is a separate Kartvelian language of Svaneti. Seasonal movement, education, and urban migration extend these speech networks beyond mountain settlements.", "georgian-encyclopedia-dialects", "wiki-kartvelian") },
      { place: "Turkey, Azerbaijan, and Iran", note: cited("Imerkhevian in Turkey, Ingiloan in Azerbaijan, and Fereydanian in Iran reflect long-standing communities and distinct contact histories. Their presence predates many modern border assumptions.", "georgian-encyclopedia-dialects") },
      { place: "Newer diasporas", note: cited("Migration to Europe, North America, Israel, Russia, and elsewhere produces heritage classrooms, churches, family networks, digital media audiences, and mixed-language households. Competence may range from fluent literacy to receptive family Georgian.", "wiki-georgian") }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "English-speaking beginners face a new alphabet, ejective sounds, consonant clusters, seven noun cases, and verbs that change shape with time and participant roles. The verb system usually becomes the longest project.\n\nThe first steps can still be concrete. Georgian has only five vowel sounds, no grammatical gender or articles, and a compact modern alphabet. Reading a sign, following a comedy, debating a policy, and reading medieval poetry each demand a different level of skill.",
      "dd-less-common",
      "seelrc-grammar",
      "berkeley-course"
    ),
    easierAspects: [
      "Thirty-three modern letters provide a relatively direct route from spelling to pronunciation",
      "Only five vowel phonemes need to be kept distinct in the standard system",
      "Nouns have no grammatical gender and Georgian has no articles",
      "Cases are often more regular and visible than the verb system",
      "A rich film, music, television, literary, and online environment supports immersion"
    ],
    hardAspects: [
      "Producing ejectives and long consonant clusters without adding vowels",
      "Learning multiple stems and principal parts for common verbs",
      "Tracking actor and object case across present, aorist, and perfect series",
      "Decoding several participant markers inside a single verb",
      "Moving from careful standard materials into fast regional and colloquial speech"
    ],
    plateauRisks: [
      "Reading romanization fluently while still decoding Mkhedruli letter by letter",
      "Memorizing one present form per verb and being surprised by every future or past stem",
      "Completing grammar exercises without building automatic listening chunks",
      "Treating all non-textbook forms as errors instead of checking region, generation, and register",
      "Waiting for a perfect all-in-one app instead of combining several strong resources"
    ],
    workload: cited(
      "Choose a pace you can repeat: work through a course, read or listen to Georgian each day, and have a speaker correct sentences you want to use. Keep the present, future, aorist, and perfect of each new verb with an example rather than a bare list of endings.\n\nTest your progress with tasks you can actually perform: read a menu, describe yesterday, message a friend, or summarize a short interview. Discover Discomfort's resource guide explains why a course, audio, correction, and real examples work well together when no single app covers everything.",
      "dd-less-common",
      "geofl",
      "ilia-corpus",
      "berkeley-course"
    )
  },
  advancedLearning: {
    strategy: cited(
      "After a beginner course, organize study by verb family and by the kind of text you want to understand. For frequent verbs, collect the present, future, aorist, perfect, and verbal noun with one natural sentence each. Compare a news report, interview, and social post on the same subject to hear the difference between written and casual Georgian.\n\nAsk a teacher to label a correction as a standard form, regional form, pronunciation issue, or style choice. If family or regional speech is your goal, learn from that community while keeping standard literacy for wider reading.",
      "dd-less-common",
      "seelrc-grammar",
      "ilia-corpus"
    ),
    mediaPractice: cited(
      "Use short clips from interviews, films, or television. Listen once for the situation, then transcribe ten seconds in Mkhedruli and compare with any captions. Copy one speaker's timing instead of trying to imitate every voice at once.\n\nSongs can fix words in memory, but singers stretch vowels and change ordinary word order. For older literature, begin with annotated or modernized editions before trying manuscript language.",
      "ilia-corpus",
      "berkeley-course"
    ),
    dictionariesAndCorpora: cited(
      "Ilia State University's searchable corpus includes recent writing and older Georgian texts. Compare several examples of a word before using it in conversation; a historical occurrence may not reflect today's speech.\n\nThe Comprehensive English-Georgian Online Dictionary helps you check English meanings against Georgian equivalents. Confirm an unfamiliar Georgian form in a corpus and grammar too, because an English gloss cannot show its person markers or past stem.",
      "ilia-corpus",
      "seelrc-grammar",
      "dictionary-ge"
    ),
    resources: [
      { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A practical method for constructing a Georgian study stack when no single app is enough: structured course, sentence bank, human correction, audio habit, and learner community.", "dd-less-common") },
      { type: "course", title: "GeoFL — Georgian as a Foreign Language", url: "https://work.geofl.ge/", level: "all", description: cited("State-supported learning resources organized from A1 through C1, with workbooks, grammar, self-assessment, reading, and listening. Some interfaces and instructions require patience or Georgian support.", "geofl") },
      { type: "book", title: "Duke/SEELRC Reference Grammar: Georgian", url: "https://slaviccenters.duke.edu/georgian", level: "advanced", description: cited("Howard Aronson's expert, peer-reviewed reference grammar for learners who need a serious account of cases, screeves, verb classes, and texts.", "seelrc-grammar") },
      { type: "course", title: "UC Berkeley Georgian Language and Culture Beginning Course", url: "https://www.ocf.berkeley.edu/~shorena/PDF/Georgian_BeginningCourse.pdf", level: "beginner", description: cited("A two-year course outline integrating alphabet, grammar, conversation, folklore, history, and literary readings; a model for planning balanced self-study.", "berkeley-course") },
      { type: "corpus", title: "Georgian Language Corpus", url: "https://corpora.iliauni.edu.ge/", level: "advanced", description: cited("Search historical and contemporary texts, genres, authors, and parallel works. Ideal for checking a word's company and tracing changes across periods.", "ilia-corpus") },
      { type: "dictionary", title: "Comprehensive English-Georgian Online Dictionary", url: "https://dictionary.ge/en/?hl=en-US", level: "all", description: cited("Search English meanings and compare Georgian equivalents; check inflected Georgian forms in the corpus.", "dictionary-ge") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "The country's Georgian name, საქართველო sakartvelo, belongs to the same word family as ქართველი kartveli “Georgian person” and ქართული kartuli “Georgian.” A word family like this makes vocabulary easier to recognize than isolated flashcards.\n\nGeorgian verbs also have noun forms. სწავლა sts'avla can mean “learning” or name the activity “to learn,” while a sentence needs a changing finite verb. Affectionate words such as გენაცვალე genatsvale depend on closeness and tone. Explore them in conversation before borrowing them for your own speech.\n\nTexts offer several registers: medieval poetry, nineteenth-century essays, contemporary fiction, screenplays, songs, and online humor. Reading more than one genre shows which word or construction belongs to daily speech and which belongs to literary style.",
      "ilia-corpus",
      "seelrc-grammar",
      "wiki-georgian"
    ),
    notableWords: [
      { term: "საქართველო", transliteration: "sakartvelo", meaning: "Georgia", note: cited("The Georgian endonym literally belongs to the same word family as kartveli “Georgian person” and kartuli “Georgian language/adjective.” Using it opens a window onto how the country names itself.", "wiki-georgian") },
      { term: "გამარჯობა", transliteration: "gamarjoba", meaning: "hello", note: cited("The everyday greeting is historically connected with victory or success. Its four syllables make a first exercise in reading clear vowels and the ჯ j sound.", "geofl") },
      { term: "სუფრა", transliteration: "supra", meaning: "laid table; feast gathering", note: cited("Supra names both a table spread and a structured social occasion of food, toasts, speech, and relationships. Not every meal is a ceremonial supra, and practice varies by setting.", "ilia-corpus") },
      { term: "სადღეგრძელო", transliteration: "sadghegrdzelo", meaning: "toast; words wishing life or well-being", note: cited("A cluster-rich word associated with toasting. Learn it through a real toast rather than reducing hospitality to a tourist spectacle.", "ilia-corpus") },
      { term: "გენაცვალე", transliteration: "genatsvale", meaning: "dear; let me take your place/burden", note: cited("An affectionate expression whose literal history evokes taking another's place. Tone and relationship decide whether it sounds tender, warm, playful, or overfamiliar.", "ilia-corpus") },
      { term: "შემოგევლე", transliteration: "shemogevle", meaning: "my dear; let me circle around you", note: cited("A vivid term of affection associated with devotion and care. It belongs in close social contexts, not as a generic phrase to perform at strangers.", "ilia-corpus") },
      { term: "სამშობლო", transliteration: "samshoblo", meaning: "homeland", note: cited("Built around the family of მშობელი mshobeli “parent” and შობა shoba “birth,” the word carries strong literary and civic associations as well as the ordinary meaning homeland.", "ilia-corpus") },
      { term: "ხასიათი", transliteration: "khasiati", meaning: "character; temperament; mood", note: cited("A common word that can describe a person's disposition, a work's character, or someone's current mood. Context matters more than selecting one permanent English equivalent.", "ilia-corpus") }
    ],
    loanwordLayers: cited(
      "Georgian has inherited Kartvelian words and borrowings from Iranian, Greek, Arabic, Armenian, Turkic, Russian, and newer English sources. Borrowed nouns take Georgian endings and sometimes change meaning.\n\nკომპიუტერი k'omp'iut'eri “computer” is recognizable international vocabulary. Older loans are harder to spot. Check corpus examples when a Georgian and borrowed alternative appear side by side in journalism, law, advertising, or chat.",
      "ilia-corpus",
      "wiki-georgian",
      "seelrc-grammar"
    ),
    idioms: [
      { original: "ასჯერ გაზომე, ერთხელ გაჭერი", transliteration: "asjer gazome, ertkhel gach'eri", translation: "Measure a hundred times; cut once.", note: "A warning to think and check carefully before an irreversible action—the Georgian numeral is emphatically a hundred, not the English proverb's twice." },
      { original: "ენას ძვალი არა აქვს", transliteration: "enas dzvali ara akvs", translation: "The tongue has no bone.", note: "Words can move freely and do harm; used when speech is careless, uncontrolled, or too easy." },
      { original: "წვეთ-წვეთობით ქვა გაიხვრიტება", transliteration: "ts'vet-ts'vetobit kva gaikhvrit'eba", translation: "Drop by drop, stone will be pierced.", note: "Gradual effort can wear down a seemingly immovable problem." },
      { original: "სადაც არის ბედი შენი, იქ მიგიყვანს ფეხი შენი", transliteration: "sadats aris bedi sheni, ik mig'iq'vans pekhi sheni", translation: "Where your fate is, your feet will carry you.", note: "A rhyming proverb about destiny and the road that leads a person toward it." },
      { original: "მგელი მგლობას არ მოიშლის", transliteration: "mgeli mglobas ar moishlis", translation: "A wolf will not give up being a wolf.", note: "Said skeptically when someone is expected to return to an ingrained nature or habit." }
    ],
    textGenres: [
      "Old Georgian hagiography, chronicles, hymnography, and translated theological or philosophical texts",
      "Medieval court poetry, especially The Knight in the Panther's Skin and its performance and translation traditions",
      "Nineteenth-century journalism, essays, poetry, theatre, and national public writing",
      "Twentieth- and twenty-first-century novels, short fiction, memoir, experimental poetry, and literary translation",
      "Film dialogue, television drama, documentary, comedy, animation, and subtitling",
      "Polyphonic song, urban music, rock, hip-hop, spoken performance, podcasts, and digital satire"
    ]
  },
  relationships: {
    overview: cited(
      "Georgian shares a family with Mingrelian, Laz, and Svan. These are separate living languages, and knowing Georgian does not give you effortless understanding of any of them.\n\nArmenian, Azerbaijani, Greek, Persian, Turkish, Arabic, and Russian come from other families. Their historical importance to Georgian comes from contact, migration, trade, religion, and media. A shared word may show borrowing rather than common ancestry.",
      "wiki-kartvelian",
      "glottolog-georgian",
      "wiki-georgian"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Read Georgian through its speakers and works. A supra is a gathering with food and toasts, often led by a tamada, but families and settings differ. Contemporary novels, films, music, journalism, and comedy reveal many ways Georgians talk about their lives.\n\nGeorgia also includes Muslim, Armenian Apostolic, Jewish, Catholic, secular, and other communities alongside Georgian Orthodox traditions. Abkhazia and South Ossetia involve war and displacement; treat people's names, language choices, and memories with care.",
  resources: [
    { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A Georgian-inclusive guide to building a practical learning system from complementary tools instead of waiting for a perfect mainstream app.", "dd-less-common") },
    { type: "course", title: "GeoFL", url: "https://work.geofl.ge/", level: "all", description: cited("Free Georgian materials from A1 to C1, including course books, grammar, listening, assessment, and teacher resources.", "geofl") },
    { type: "book", title: "Reference Grammar: Georgian", url: "https://slaviccenters.duke.edu/georgian", level: "advanced", description: cited("A peer-reviewed specialist grammar hosted by Duke's Center for Slavic, Eurasian and East European Studies and SEELRC.", "seelrc-grammar") },
    { type: "corpus", title: "Georgian Language Corpus", url: "https://corpora.iliauni.edu.ge/", level: "advanced", description: cited("A large searchable collection spanning Old, Middle, Modern, and contemporary Georgian plus bilingual literary corpora.", "ilia-corpus") },
    { type: "course", title: "Georgian Language and Culture at UC Berkeley", url: "https://www.ocf.berkeley.edu/~shorena/PDF/Georgian_BeginningCourse.pdf", level: "beginner", description: cited("A syllabus and learning sequence combining sound, script, grammar, situational speech, folklore, and literary culture.", "berkeley-course") },
    { type: "other", title: "Unicode Georgian Script Specification", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", level: "advanced", description: cited("The technical authority for Georgian characters, Mkhedruli–Mtavruli case behavior, older scripts, and correct digital encoding.", "unicode-georgian") },
    { type: "other", title: "Comprehensive English-Georgian Online Dictionary", url: "https://dictionary.ge/en/?hl=en-US", level: "all", description: cited("Look up English headwords and compare Georgian equivalents with usage examples. Use a grammar or corpus to check the form you need.", "dictionary-ge") }
  ],
  relatedLanguages,
  phrases: [
    { original: "გამარჯობა", transliteration: "gamarjoba", translation: "Hello.", usageNote: "The safe everyday greeting in most settings." },
    { original: "როგორ ხარ? / როგორ ხართ?", transliteration: "rogor khar? / rogor khart?", translation: "How are you? [informal / formal or plural]", usageNote: "Use ხართ khart with one person you address politely or with several people." },
    { original: "კარგად ვარ, მადლობა", transliteration: "k'argad var, madloba", translation: "I'm well, thank you.", literalMeaning: "Well I-am, thanks." },
    { original: "მადლობა", transliteration: "madloba", translation: "Thank you." },
    { original: "თუ შეიძლება", transliteration: "tu sheidzleba", translation: "Please; if possible.", literalMeaning: "If it is possible.", usageNote: "A flexible polite phrase for requests; Georgian also has context-specific ways to invite or offer." },
    { original: "ბოდიში", transliteration: "bodishi", translation: "Sorry; excuse me.", usageNote: "Use this to apologize or get someone's attention politely." },
    { original: "არ მესმის", transliteration: "ar mesmis", translation: "I don't understand.", literalMeaning: "It is not understood/heard by me." },
    { original: "გაიმეორეთ, თუ შეიძლება", transliteration: "gaimeoret, tu sheidzleba", translation: "Please repeat that.", usageNote: "This uses the polite/plural imperative; with a friend the verb can be გაიმეორე gaimeore." },
    { original: "უფრო ნელა ილაპარაკეთ, თუ შეიძლება", transliteration: "upro nela ilap'arak'et, tu sheidzleba", translation: "Please speak more slowly.", usageNote: "A polite request addressed to one person formally or to several people." },
    { original: "რას ნიშნავს ეს სიტყვა?", transliteration: "ras nishnavs es sit'q'va?", translation: "What does this word mean?" },
    { original: "ქართულს ვსწავლობ", transliteration: "kartuls vsts'avlob", translation: "I'm learning Georgian.", usageNote: "The language name appears in the dative case as the object of “study/learn.”" },
    { original: "სად არის მეტრო?", transliteration: "sad aris met'ro?", translation: "Where is the metro?" },
    { original: "რა ღირს?", transliteration: "ra ghirs?", translation: "How much does it cost?", literalMeaning: "What is it worth?" },
    { original: "ნახვამდის", transliteration: "nakhvamdis", translation: "Goodbye; see you.", literalMeaning: "Until seeing." }
  ],
  sources: [
    { id: "dd-less-common", title: "Best Less-Common Language Learning Resources: What Actually Works", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", updatedAt: "2026-05-11", accessedAt: "2026-09-27" },
    { id: "wiki-georgian", title: "Georgian language", url: "https://en.wikipedia.org/wiki/Georgian_language", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-kartvelian", title: "Kartvelian languages", url: "https://en.wikipedia.org/wiki/Kartvelian_languages", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-georgian-scripts", title: "Georgian scripts", url: "https://en.wikipedia.org/wiki/Georgian_scripts", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-georgian-grammar", title: "Georgian grammar", url: "https://en.wikipedia.org/wiki/Georgian_grammar", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "glottolog-georgian", title: "Glottolog: Georgian and the languages of Georgia", url: "https://glottolog.org/glottolog/language.map.html?country=GE", publisher: "Glottolog", accessedAt: "2026-09-27" },
    { id: "geostat-2024", title: "Main Results of the 2024 Population and Agricultural Census", url: "https://www.geostat.ge/media/80541/Main-Results-of-the-2024-Population-and-Agricultural-Census.pdf", publisher: "National Statistics Office of Georgia", publishedAt: "2026-06-22", accessedAt: "2026-09-27" },
    { id: "unicode-georgian", title: "The Unicode Standard, Chapter 7: Georgian", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-09-27" },
    { id: "unesco-scripts", title: "Living Culture of Three Writing Systems of the Georgian Alphabet", url: "https://ich.unesco.org/en/RL/living-culture-of-three-writing-systems-of-the-georgian-alphabet-01205", publisher: "UNESCO Intangible Cultural Heritage", publishedAt: "2016", accessedAt: "2026-09-27" },
    { id: "seelrc-grammar", title: "Reference Grammar: Georgian", url: "https://slaviccenters.duke.edu/georgian", publisher: "Duke University CSEEES and SEELRC", accessedAt: "2026-09-27" },
    { id: "jipa-georgian", title: "Standard Georgian", url: "https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/standard-georgian/A7DCF9606BA856FCA5CC25918ADB37EF", publisher: "Journal of the International Phonetic Association", publishedAt: "2006", accessedAt: "2026-09-27" },
    { id: "georgian-encyclopedia-dialects", title: "Dialect", url: "https://georgianencyclopedia.ge/en/form_eng/655", publisher: "Georgian Encyclopedia", accessedAt: "2026-09-27" },
    { id: "ilia-corpus", title: "Georgian Language Corpus", url: "https://corpora.iliauni.edu.ge/", publisher: "Ilia State University Institute for Linguistic Studies", accessedAt: "2026-09-27" },
    { id: "geofl", title: "Georgian as a Foreign Language (GeoFL)", url: "https://work.geofl.ge/", publisher: "GeoFL", accessedAt: "2026-09-27" },
    { id: "berkeley-course", title: "Georgian Language and Culture: Beginning Course", url: "https://www.ocf.berkeley.edu/~shorena/PDF/Georgian_BeginningCourse.pdf", publisher: "University of California, Berkeley", accessedAt: "2026-09-27" },
    { id: "geofl-functional-grammar", title: "Functional Grammar in Relation to Systemic Grammar", url: "https://www.geofl.ge/resource/researchText/rusudan_zekalashvili.pdf", publisher: "GeoFL", accessedAt: "2026-09-27" },
    { id: "dictionary-ge", title: "Comprehensive English-Georgian Online Dictionary", url: "https://dictionary.ge/en/?hl=en-US", publisher: "Centre for Lexicography and Language Technologies, Ivane Javakhishvili Tbilisi State University", accessedAt: "2026-09-27" },
    { id: "yale-dative", title: "Dative Experiencer Verbs in Georgian", url: "https://ling.yale.edu/media/367/download?inline=", publisher: "Yale University Department of Linguistics", publishedAt: "2008", accessedAt: "2026-09-27" },
  ],
  seo: {
    title: "Georgian Language Guide: Alphabet, Sounds, Verbs and Culture",
    description: "A guide to Georgian's Mkhedruli alphabet, ejectives, clusters, cases, screeves, verbs, dialects, literature, phrases, and learning resources."
  }
} satisfies LanguageGuide;
