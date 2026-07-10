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
  summary: "Georgian is a Kartvelian language whose five vowels, distinctive alphabet, literary history, and informative verbs connect daily conversation with a long written tradition.",
  family: "Kartvelian",
  macroRegion: "South Caucasus and global Georgian communities",
  primaryScript: "Georgian Mkhedruli",
  difficultyLabel: "Very demanding",
  learnerHook: "Learn thirty-three letters and a street sign becomes readable; stay for the verbs, regional voices, films, songs, journalism, and literature, and Georgian becomes a larger intellectual home.",
  hero: {
    imageAlt: "Contemporary Georgian Mkhedruli lettering beside older Georgian manuscript forms.",
    callToActionLabel: "Explore Georgian in use"
  },
  classification: "The largest Kartvelian language and Georgia's principal state and literary language",
  speakerCommunity: "Georgian is the main home, school, media, and public language for several million people. Georgia's preliminary 2024 census reports it as the mother tongue of 85.1 percent of residents, not a worldwide speaker total. Migrant and heritage communities use it across Europe, North America, Israel, Turkey, Russia, and elsewhere. Within Georgia it shares space with Azerbaijani, Armenian, Abkhaz, Ossetian, Russian, Georgian Sign Language, and other Kartvelian languages. Some citizens learn Georgian through school, work, or state programs. “Georgian-speaking” and “ethnically Georgian” are not interchangeable.",
  facts: [
    { label: "Family", value: "Kartvelian · Georgian branch" },
    { label: "2024 census", value: "Mother tongue of 85.1% of Georgia's resident population" },
    { label: "Modern alphabet", value: "33 Mkhedruli letters, written left to right" },
    { label: "Vowels", value: "Five: a, e, i, o, u" },
    { label: "Notable grammar", value: "Seven cases and verbs that can index several participants" },
    { label: "Literary record", value: "Attested from late antiquity" }
  ],
  learnerOverview: "Georgian offers an unusually satisfying beginning. Mkhedruli is visually unfamiliar, yet its thirty-three modern letters have stable values. Learn them through real words—თბილისი Tbilisi, მეტრო metro, პური puri “bread”—and stop leaning on romanization early. Conversation can begin without mastering the whole verb: greetings, question words, noun cases, a small verb set, and chunks such as არ მესმის ar mesmis “I don't understand” create genuine interactions. The long middle begins when one English verb corresponds to several Georgian stems and when person, direction, aspect, and participant roles alter a single word. Discover Discomfort's advice for less commonly taught languages is apt here: assemble one structured course, one sentence source, a correcting speaker, a repeatable audio habit, and a community for questions. GeoFL, university materials, corpora, dictionaries, tutors, television, film, and a vast literary archive provide a serious path.",
  origins: {
    overview: cited(
      "Georgian belongs to Kartvelian, a compact family indigenous to the South Caucasus. Its relatives are Mingrelian, Laz, and Svan; proposed deeper links with other Caucasian families remain hypotheses. The earliest surviving inscriptions date to late antiquity, and the fifth-century Martyrdom of Shushanik is conventionally the earliest substantial literary work. Translation connected Georgian readers with Greek, Armenian, Syriac, Arabic, Persian, and European traditions. High medieval secular writing culminated in Shota Rustaveli's The Knight in the Panther's Skin, still quoted, translated, and learned in school. This is continuity with reinvention: Old, Middle, and Modern Georgian differ, and older texts need specialist help.",
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
      "Georgian records centuries of exchange across Eurasia. Iranian languages contributed old cultural and administrative layers; Greek, Armenian, Arabic, and Syriac accompanied religion and scholarship; Turkic languages entered through regional contact; Russian became especially influential in the nineteenth and twentieth centuries; and English now supplies technical vocabulary. Loans adapt to Georgian sounds and endings: a borrowed noun can take Georgian cases and derivation. Purist debates belong to modern language politics, but borrowing is not new. Ask who uses a form, in which register, alongside what alternatives.",
      "wiki-georgian",
      "ilia-corpus",
      "seelrc-grammar"
    ),
    standardization: cited(
      "Modern Standard Georgian grew primarily from eastern varieties, especially Kartlian and Kakhetian. Dictionaries, schools, publishers, and linguists codify it; Tbilisi speech is influential but mixed. Standard usage does not cancel dialects or turn Mingrelian, Laz, and Svan into accents. GeoFL provides staged learning from beginner through advanced levels.",
      "georgian-encyclopedia-dialects",
      "geofl",
      "wiki-georgian"
    )
  },
  variants: {
    overview: cited(
      "Dialect labels describe bundles of pronunciation, vocabulary, and grammar, while speakers also vary by age, schooling, mobility, and medium. The Georgian Encyclopedia lists thirteen dialects within Georgia and additional forms in Turkey, Azerbaijan, and Iran. East–west groupings orient; they do not rank “correct” and “corrupt.” Migration brings features together, and family voice notes use forms a newsreader may avoid. Learn the standard for broad access while recognizing local patterns.",
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
      "Standard Georgian has five vowels—/a e i o u/—and many consonants. Stops and affricates often form three-way sets: voiced, voiceless aspirated, and ejective. An ejective uses a closed glottis and upward larynx movement for a compressed release; it is not just louder. Thus თ t and ტ t' are different letters. Georgian also permits clusters that English speakers pad with accidental vowels. Aim for coordination, not speed or theatrical “harshness.” Real speakers simplify some clusters and vary by region and style.",
      "jipa-georgian",
      "seelrc-grammar",
      "wiki-georgian"
    ),
    script: "Modern Mkhedruli, with a practical transliteration in examples; apostrophes mark ejectives",
    soundSystem: cited(
      "Pair each ejective with its aspirated and voiced neighbors: პ p' / ფ p / ბ b; ტ t' / თ t / დ d; კ k' / ქ k / გ g; წ ts' / ც ts / ძ dz; ჭ ch' / ჩ ch / ჯ j. Georgian ყ q' is a uvular ejective without an ordinary voiced partner in the same neat set. The spelling usually tells you which consonant is intended, making careful reading an excellent pronunciation drill. Clusters need staging: pronounce the final consonant, add the one before it, then build leftward without inserting a schwa. In წყალი ts'q'ali “water,” the first two written consonants are both real. Record yourself slowly; a clean cluster at half speed is better than a fast form padded with hidden vowels.",
      "jipa-georgian",
      "berkeley-course"
    ),
    prosody: cited(
      "Georgian word stress is relatively weak and descriptions vary with word shape and dialect, so learners should resist stamping a heavy English stress onto one syllable. Phrase intonation does more audible work: information focus, continuation, questions, and emotional stance reshape the melody. Vowels should remain clear when unstressed rather than collapsing automatically into English-like schwa. Shadow whole clauses from one speaker, retaining the timing through clusters and function words. Poetry, song, and formal recitation organize rhythm differently from casual conversation, so a sung vowel length or emphatic stage pronunciation is not automatically an everyday model.",
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
      "Modern Georgian is written left to right in Mkhedruli. Its thirty-three letters represent five vowels and twenty-eight consonants, and spelling is relatively close to sound. Writing culture also includes Asomtavruli and Nuskhuri. In church contexts these work together as Khutsuri and remain visible in manuscripts, inscriptions, iconography, and design. UNESCO's 2016 inscription treats all three as living practice. Master Mkhedruli first, then recognize older scripts for manuscript, church, art-history, or calligraphy interests.",
      "unicode-georgian",
      "unesco-scripts",
      "wiki-georgian-scripts"
    ),
    primaryScript: "Mkhedruli (მხედრული), with Mtavruli display capitals in contemporary typography",
    romanization: cited(
      "Romanization is inconsistent precisely where learners need clarity: some systems use apostrophes for ejectives, while names on maps may follow English, Russian, or simplified conventions. Use transliteration to discuss pronunciation, not as a second permanent orthography. A practical system writes შ sh, ჩ ch, ც ts, ძ dz, ჟ zh and marks ejectives as p', t', k', ts', ch', q'. Search both a Georgian spelling and common Latin variants when looking up people or places.",
      "seelrc-grammar",
      "unicode-georgian"
    ),
    spellingNorms: cited(
      "Mkhedruli traditionally has no upper/lowercase distinction. Modern Mtavruli forms are used like capitals for headings, signage, emphasis, and all-cap display, and Unicode provides formal case mappings between Mkhedruli and Mtavruli. This is a typographic case system, not a reason to capitalize every Georgian proper noun in running text. Georgian normally writes words with spaces and uses familiar modern punctuation. Digital text should use real Unicode characters, not decorative fonts that map Georgian shapes onto Latin code points.",
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
      "Georgian grammar becomes less intimidating when nouns and verbs are approached differently. Nouns have no grammatical gender and no articles; their seven cases are built with fairly visible endings. Verbs are the dense center. A Georgian verb can indicate the subject, an object or indirect object, direction, aspect, causation, and the speaker's relation to an event. Traditional grammar groups forms into screeves—sets that bundle tense, aspect, mood, and patterns of person and case marking. Learners do not need every theoretical label before speaking, but they do need to learn verbs as families of forms rather than one dictionary headword plus mechanical endings.",
      "seelrc-grammar",
      "wiki-georgian-grammar"
    ),
    typologicalProfile: cited(
      "Georgian is often called agglutinative because several recognizable pieces can accumulate around a stem, but it also contains fusion, stem alternation, and irregularity. It has seven noun cases, postpositions, flexible constituent order, and polypersonal agreement—a verb may index more than one participant. Alignment changes across verbal series: the cases used for actor and affected participant are not identical in the present, aorist, and perfect systems. Labels such as “split ergative” or “active” summarize patterns; they do not replace learning which verb class uses which construction.",
      "seelrc-grammar",
      "wiki-georgian-grammar",
      "yale-dative"
    ),
    morphology: cited(
      "A verb may contain a preverb, person markers, a version vowel, the root, a thematic suffix, and a screeve marker or ending. Not every slot appears in every verb, and the same-looking marker can behave differently across classes. Preverbs frequently add direction and help distinguish present/imperfective from future or completed forms. “Version” is the Georgian grammatical tradition's name for vowels that help organize relations among the action and its participants; learners meet them in contrasts such as building something generally versus building it for oneself. Store principal parts with a sentence: present, future, aorist, and perfect or verbal noun. That exposes stem changes that an English-style infinitive list hides.",
      "seelrc-grammar",
      "wiki-georgian-grammar"
    ),
    syntax: cited(
      "A broad subject–object–verb order is a useful neutral starting point, yet Georgian word order is flexible because case and verbal marking identify roles. Position responds to topic, focus, contrast, weight, and genre. Adjectives normally precede nouns and do not reproduce a large gender agreement system. Relative clauses and complementizers require study, but beginners gain more by noticing why a speaker fronts one item than by policing every sentence into English order. In conversation, pronouns may disappear when the verb already identifies the participant; adding მე me “I” can mark contrast rather than merely completing a grammatical subject slot.",
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
        body: cited("Georgian nouns distinguish nominative, ergative, dative, genitive, instrumental, adverbial, and vocative. The label “dative” covers several jobs beyond an English indirect object, while the ergative appears with many active verbs in the aorist series. Learn a noun in short contrasts rather than reciting endings alone: მეგობარი megobari “friend,” მეგობარს megobars “to/for the friend,” მეგობრის megobris “the friend's.” Postpositions often attach to a case form.", "seelrc-grammar", "wiki-georgian-grammar"),
        example: "მეგობარს წიგნი მივეცი. (Megobars ts'igni mivetsi.)",
        exampleTranslation: "I gave my friend a book. The recipient is dative and “book” is nominative."
      },
      {
        title: "Alignment changes with the screeve",
        body: cited("In a present-series sentence, the actor of a typical transitive verb is nominative. In the aorist, that actor commonly takes ergative -მა -ma while the affected noun is nominative. This is why one permanent equation such as “subject equals nominative” fails. Learn the whole construction beside each tense-aspect form and call the semantic participants actor and affected item until the cases become familiar.", "seelrc-grammar", "wiki-georgian-grammar"),
        example: "ბავშვმა წერილი დაწერა. (Bavshvma ts'erili dats'era.)",
        exampleTranslation: "The child wrote the letter. “Child” carries the aorist-series ergative ending -მა."
      },
      {
        title: "Screeves bundle more than clock time",
        body: cited("A screeve is a paradigm row with a characteristic combination of tense, aspect, mood, stem formation, and participant marking. The present, imperfect, future, aorist, perfect, and related forms therefore cannot always be translated by swapping one English auxiliary. Perfect-series forms may convey result, experience, or indirect evidence. Start with the most useful contrasts and revisit the traditional three-series map after each one has appeared in stories.", "seelrc-grammar", "yale-dative", "wiki-georgian-grammar"),
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
        body: cited("Polypersonal agreement means the verb may encode both an actor and another participant. Compare ვწერ vts'er “I write,” გწერ gts'er “I write to you,” and მწერს mts'ers “he or she writes to me.” Pronouns become unnecessary unless contrast or clarity calls for them. Person markers compete for particular positions, so learn common two-person forms aloud rather than treating the verb as a root wrapped in arbitrary noise.", "seelrc-grammar", "wiki-georgian-grammar"),
        example: "ანა წერილს მწერს. (Ana ts'erils mts'ers.)",
        exampleTranslation: "Ana is writing me a letter. The მ- m- in the verb points to “me.”"
      },
      {
        title: "Dative-subject experiences",
        body: cited("With verbs of liking, wanting, knowing, having, and certain sensations, the experiencer often appears in the dative and is indexed like an indirect participant. English translation makes that person look like an ordinary nominative subject, which is why learners misread the endings. Treat the construction as its own frame: “to me, X is pleasing” is a useful bridge, though the natural translation is simply “I like X.”", "yale-dative", "seelrc-grammar"),
        example: "მე ქართული მუსიკა მომწონს. (Me kartuli musika momts'ons.)",
        exampleTranslation: "I like Georgian music. Literally, Georgian music is pleasing to me."
      },
      {
        title: "No gender and no articles",
        body: cited("Georgian does not sort ordinary nouns into masculine and feminine genders and has no direct equivalent of English a and the. The third-person pronoun does not force a he/she distinction. Context, demonstratives, word order, and shared knowledge handle definiteness. This removes one memorization burden, but it also means translations should not invent gender when Georgian leaves it open.", "seelrc-grammar", "wiki-georgian-grammar"),
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
      "Georgian's demographic center is Georgia, but its social geography does not fit one-language national coloring. The 2024 census records a multilingual population; Armenian or Azerbaijani may be the first home language in some communities while Georgian has educational and state functions. Abkhaz has official status in Abkhazia under Georgia's constitutional framework; conflict and displacement make glib mapping inappropriate. Historic Georgian-speaking communities cross present borders, while newer migration creates transnational families with differing literacy and media habits.",
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
      "For an English-speaking learner, Georgian combines a new alphabet, unfamiliar ejective contrasts, consonant clusters, few transparent cognates, seven cases, and a verb system whose participant marking changes across series. That makes advanced accuracy demanding. It does not make every stage equally hard. The script is compact and phonemic, the vowel inventory is small, nouns lack grammatical gender, there are no articles, and welcoming speakers can make basic conversation rewarding early. Difficulty estimates should describe tasks, not people: reading a menu, following a sitcom, discussing a policy issue, and interpreting Rustaveli are different projects.",
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
      "A sustainable week might combine three structured-course sessions, two conversations, daily ten-minute reading or listening, and one longer media transcription. Keep a verb ledger with four or five principal forms and a complete example for each; review cases through phrases, not isolated suffixes. Every month choose a practical performance: read a café menu aloud, narrate yesterday, message a friend, summarize a short news item, or retell a film scene. Discover Discomfort's less-common-language framework is valuable because no single Georgian product covers every skill. Progress accelerates when one textbook supplies sequence, a tutor supplies correction, and corpus or media examples supply reality.",
      "dd-less-common",
      "geofl",
      "ilia-corpus",
      "berkeley-course"
    )
  },
  advancedLearning: {
    strategy: cited(
      "After a beginner course, reorganize study around genres and verb families. Select twenty high-frequency verbs and record their present, future, aorist, perfect, and verbal-noun forms with audio and one natural sentence. Read one topic across a news report, interview, and social post to compare written standard and conversation. Ask a tutor to mark corrections as pronunciation, standard grammar, regional form, or style; those labels prevent useful living variation from becoming a vague list of “mistakes.” If heritage or regional speech is your goal, keep that community's model central while maintaining standard literacy for wider access.",
      "dd-less-common",
      "seelrc-grammar",
      "ilia-corpus"
    ),
    mediaPractice: cited(
      "Georgian cinema offers scripted speech, silence, humor, and social settings that textbooks rarely capture; television interviews and public broadcasters add formal and spontaneous registers. Work in short loops: listen without subtitles, transcribe ten seconds in Mkhedruli, compare available captions, then shadow the speaker. Songs are excellent for memory and cultural reference but may stretch vowels or preserve poetic order. Read contemporary fiction beside an audiobook where possible, and use older literature in modernized or annotated editions before attempting manuscript language.",
      "ilia-corpus",
      "berkeley-course"
    ),
    dictionariesAndCorpora: cited(
      "Ilia State University's Georgian Language Corpus reports more than 100 million word forms across collections including Old, Middle, Modern, and contemporary Georgian and parallel literary texts. Use it to test collocations and historical range, not to assume every attestation is current conversation. Library collections and dictionaries help with terminology. For verbs, consult a grammar and confirm the form in several sentences; machine translation often chooses the wrong class, person relation, or aspect.",
      "ilia-corpus",
      "seelrc-grammar"
    ),
    resources: [
      { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A practical method for constructing a Georgian study stack when no single app is enough: structured course, sentence bank, human correction, audio habit, and learner community.", "dd-less-common") },
      { type: "course", title: "GeoFL — Georgian as a Foreign Language", url: "https://work.geofl.ge/", level: "all", description: cited("State-supported learning resources organized from A1 through C1, with workbooks, grammar, self-assessment, reading, and listening. Some interfaces and instructions require patience or Georgian support.", "geofl") },
      { type: "book", title: "Duke/SEELRC Reference Grammar: Georgian", url: "https://slaviccenters.duke.edu/georgian", level: "advanced", description: cited("Howard Aronson's expert, peer-reviewed reference grammar for learners who need a serious account of cases, screeves, verb classes, and texts.", "seelrc-grammar") },
      { type: "course", title: "UC Berkeley Georgian Language and Culture Beginning Course", url: "https://www.ocf.berkeley.edu/~shorena/PDF/Georgian_BeginningCourse.pdf", level: "beginner", description: cited("A two-year course outline integrating alphabet, grammar, conversation, folklore, history, and literary readings; useful for designing a balanced self-study syllabus.", "berkeley-course") },
      { type: "corpus", title: "Georgian Language Corpus", url: "https://corpora.iliauni.edu.ge/", level: "advanced", description: cited("Search historical and contemporary texts, genres, authors, and parallel works. Ideal for checking a word's company and tracing changes across periods.", "ilia-corpus") },
      { type: "dictionary", title: "National Parliamentary Library of Georgia", url: "https://www.nplg.gov.ge/eng/home", level: "all", description: cited("Gateway to Georgian digital collections, bibliographic tools, dictionaries, historical newspapers, and corpus resources.", "ilia-corpus") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Georgian vocabulary becomes memorable through families and social scenes. საქართველო sakartvelo “Georgia” contains the ethnonym ქართველი kartveli “a Georgian” and relates to ქართული kartuli “Georgian”; the English exonym Georgia does not reveal that internal pattern. Verbal nouns often serve where an English dictionary expects an infinitive: სწავლა sts'avla can mean “learning/to learn,” while the finite verb changes around its participants. Terms of affection such as გენაცვალე genatsvale carry interpersonal force that no one-word gloss reproduces. Build entries with a speaker, relationship, sentence, and response. Literature then stops being a monument and becomes a laboratory for register—from medieval epic and nineteenth-century essays to modernist poetry, Soviet-era prose, contemporary novels, screenplays, rap, and online satire.",
      "ilia-corpus",
      "seelrc-grammar",
      "wiki-georgian"
    ),
    notableWords: [
      { term: "საქართველო", transliteration: "sakartvelo", meaning: "Georgia", note: cited("The Georgian endonym literally belongs to the same word family as kartveli “Georgian person” and kartuli “Georgian language/adjective.” Using it opens a window onto how the country names itself.", "wiki-georgian") },
      { term: "გამარჯობა", transliteration: "gamarjoba", meaning: "hello", note: cited("The everyday greeting is historically connected with victory or success. Its five syllables make a useful first exercise in reading clear vowels and the ჯ j sound.", "geofl") },
      { term: "სუფრა", transliteration: "supra", meaning: "laid table; feast gathering", note: cited("Supra names both a table spread and a structured social occasion of food, toasts, speech, and relationships. Not every meal is a ceremonial supra, and practice varies by setting.", "ilia-corpus") },
      { term: "სადღეგრძელო", transliteration: "sadghegrdzelo", meaning: "toast; words wishing life or well-being", note: cited("A cluster-rich word associated with toasting. Learn it through a real toast rather than reducing hospitality to a tourist spectacle.", "ilia-corpus") },
      { term: "გენაცვალე", transliteration: "genatsvale", meaning: "dear; let me take your place/burden", note: cited("An affectionate expression whose literal history evokes taking another's place. Tone and relationship decide whether it sounds tender, warm, playful, or overfamiliar.", "ilia-corpus") },
      { term: "შემოგევლე", transliteration: "shemogevle", meaning: "my dear; let me circle around you", note: cited("A vivid term of affection associated with devotion and care. It belongs in close social contexts, not as a generic phrase to perform at strangers.", "ilia-corpus") },
      { term: "სამშობლო", transliteration: "samshoblo", meaning: "homeland", note: cited("Built around the family of მშობელი mshobeli “parent” and შობა shoba “birth,” the word carries strong literary and civic associations as well as the ordinary meaning homeland.", "ilia-corpus") },
      { term: "ხასიათი", transliteration: "khasiaTi", meaning: "character; temperament; mood", note: cited("A common word that can describe a person's disposition, a work's character, or someone's current mood. Context matters more than selecting one permanent English equivalent.", "ilia-corpus") }
    ],
    loanwordLayers: cited(
      "The vocabulary contains inherited Kartvelian material alongside Iranian, Greek, Arabic, Armenian, Turkic, and Russian layers, plus current English internationalisms. A loan changes once it enters Georgian: it receives Georgian sounds, case endings, derivations, and sometimes a meaning narrower or broader than its source. ქალაქი kalaki “city,” for example, belongs to an old regional history rather than a recent fashion, while კომპიუტერი k'omp'iut'eri “computer” is transparent modern international vocabulary. Soviet-era Russian loans may compete with revived or newly coined Georgian terms, and youth speech may alternate Georgian and English online. Corpora reveal which alternative appears in law, journalism, scholarship, advertising, or chat.",
      "ilia-corpus",
      "wiki-georgian",
      "seelrc-grammar"
    ),
    idioms: [
      { original: "ასჯერ გაზომე, ერთხელ გაჭერი", transliteration: "asjer gazome, ertkhel gach'eri", translation: "Measure a hundred times; cut once.", note: "A warning to think and check carefully before an irreversible action—the Georgian numeral is emphatically a hundred, not the English proverb's twice." },
      { original: "ენას ძვალი არა აქვს", transliteration: "enas dzvali ara akvs", translation: "The tongue has no bone.", note: "Words can move freely and do harm; used when speech is careless, uncontrolled, or too easy." },
      { original: "წვეთ-წვეთობით ქვა გაიხვრიტება", transliteration: "ts'vet-ts'vetobit kva gaikhvrit'eba", translation: "Drop by drop, stone will be pierced.", note: "Persistence achieves what one forceful attempt cannot; a useful image for long language study." },
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
      "Georgian's closest genealogical map has only three other major names: Mingrelian, Laz, and Svan. Their shared inheritance supports historical comparison but does not grant automatic understanding, and each language belongs to living speakers with their own cultural claims. Armenian, Azerbaijani, Greek, Persian, Turkish, Arabic, and Russian belong to other families; their importance comes from contact, multilingual communities, translation, trade, religion, empire, and modern media. Keeping ancestry and contact separate makes Georgian less isolated, not more: it shows both what speakers inherited and what generations created together.",
      "wiki-kartvelian",
      "glottolog-georgian",
      "wiki-georgian"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Meet Georgian through people and works, not mountains, wine, warriors, and “impossible” words. Supra and the tamada (toast leader) matter, but gatherings differ by family and setting. Georgian Orthodox traditions are visible, while Georgia is also home to Muslim, Armenian Apostolic, Jewish, Catholic, secular, and other communities. Abkhazia and South Ossetia involve war, displacement, competing sovereignties, and living trauma, not scenic trivia. Let contemporary writers, filmmakers, musicians, journalists, scholars, comedians, activists, and relatives complicate any single national story.",
  resources: [
    { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A Georgian-inclusive guide to building a practical learning system from complementary tools instead of waiting for a perfect mainstream app.", "dd-less-common") },
    { type: "course", title: "GeoFL", url: "https://work.geofl.ge/", level: "all", description: cited("Free Georgian materials from A1 to C1, including course books, grammar, listening, assessment, and teacher resources.", "geofl") },
    { type: "book", title: "Reference Grammar: Georgian", url: "https://slaviccenters.duke.edu/georgian", level: "advanced", description: cited("A peer-reviewed specialist grammar hosted by Duke's Center for Slavic, Eurasian and East European Studies and SEELRC.", "seelrc-grammar") },
    { type: "corpus", title: "Georgian Language Corpus", url: "https://corpora.iliauni.edu.ge/", level: "advanced", description: cited("A large searchable collection spanning Old, Middle, Modern, and contemporary Georgian plus bilingual literary corpora.", "ilia-corpus") },
    { type: "course", title: "Georgian Language and Culture at UC Berkeley", url: "https://www.ocf.berkeley.edu/~shorena/PDF/Georgian_BeginningCourse.pdf", level: "beginner", description: cited("A syllabus and learning sequence combining sound, script, grammar, situational speech, folklore, and literary culture.", "berkeley-course") },
    { type: "other", title: "Unicode Georgian Script Specification", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", level: "advanced", description: cited("The technical authority for Georgian characters, Mkhedruli–Mtavruli case behavior, older scripts, and correct digital encoding.", "unicode-georgian") },
    { type: "other", title: "National Parliamentary Library of Georgia", url: "https://www.nplg.gov.ge/eng/home", level: "all", description: cited("A portal for catalogues, digitized books and newspapers, biographies, dictionaries, and Georgian research collections.", "ilia-corpus") }
  ],
  relatedLanguages,
  phrases: [
    { original: "გამარჯობა", transliteration: "gamarjoba", translation: "Hello.", usageNote: "The safe everyday greeting in most settings." },
    { original: "როგორ ხარ? / როგორ ხართ?", transliteration: "rogor khar? / rogor khart?", translation: "How are you? [informal / formal or plural]", usageNote: "Use ხართ khart with one person you address politely or with several people." },
    { original: "კარგად ვარ, მადლობა", transliteration: "k'argad var, madloba", translation: "I'm well, thank you.", literalMeaning: "Well I-am, thanks." },
    { original: "მადლობა", transliteration: "madloba", translation: "Thank you." },
    { original: "თუ შეიძლება", transliteration: "tu sheidzleba", translation: "Please; if possible.", literalMeaning: "If it is possible.", usageNote: "A flexible polite phrase for requests; Georgian also has context-specific ways to invite or offer." },
    { original: "ბოდიში", transliteration: "bodishi", translation: "Sorry; excuse me.", usageNote: "Useful for an apology or to get attention politely." },
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
    { id: "dd-less-common", title: "Best Less-Common Language Learning Resources: What Actually Works", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", updatedAt: "2026-05-11", accessedAt: "2026-07-10" },
    { id: "wiki-georgian", title: "Georgian language", url: "https://en.wikipedia.org/wiki/Georgian_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-kartvelian", title: "Kartvelian languages", url: "https://en.wikipedia.org/wiki/Kartvelian_languages", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-georgian-scripts", title: "Georgian scripts", url: "https://en.wikipedia.org/wiki/Georgian_scripts", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-georgian-grammar", title: "Georgian grammar", url: "https://en.wikipedia.org/wiki/Georgian_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-georgian", title: "Glottolog: Georgian and the languages of Georgia", url: "https://glottolog.org/glottolog/language.map.html?country=GE", publisher: "Glottolog", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "geostat-2024", title: "Main Results of the 2024 Population and Agricultural Census", url: "https://www.geostat.ge/media/80541/Main-Results-of-the-2024-Population-and-Agricultural-Census.pdf", publisher: "National Statistics Office of Georgia", publishedAt: "2026", accessedAt: "2026-07-10" },
    { id: "unicode-georgian", title: "The Unicode Standard, Chapter 7: Georgian", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "unesco-scripts", title: "Living Culture of Three Writing Systems of the Georgian Alphabet", url: "https://ich.unesco.org/en/RL/living-culture-of-three-writing-systems-of-the-georgian-alphabet-01205", publisher: "UNESCO Intangible Cultural Heritage", publishedAt: "2016", accessedAt: "2026-07-10" },
    { id: "seelrc-grammar", title: "Reference Grammar: Georgian", url: "https://slaviccenters.duke.edu/georgian", publisher: "Duke University CSEEES and SEELRC", updatedAt: "2005", accessedAt: "2026-07-10" },
    { id: "jipa-georgian", title: "Standard Georgian", url: "https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/standard-georgian/A7DCF9606BA856FCA5CC25918ADB37EF", publisher: "Journal of the International Phonetic Association", publishedAt: "2006", accessedAt: "2026-07-10" },
    { id: "georgian-encyclopedia-dialects", title: "Dialect", url: "https://georgianencyclopedia.ge/en/form_eng/655", publisher: "Georgian Encyclopedia", accessedAt: "2026-07-10" },
    { id: "ilia-corpus", title: "Georgian Language Corpus", url: "https://corpora.iliauni.edu.ge/", publisher: "Ilia State University Institute for Linguistic Studies", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "geofl", title: "Georgian as a Foreign Language (GeoFL)", url: "https://work.geofl.ge/", publisher: "GeoFL", accessedAt: "2026-07-10" },
    { id: "berkeley-course", title: "Georgian Language and Culture: Beginning Course", url: "https://www.ocf.berkeley.edu/~shorena/PDF/Georgian_BeginningCourse.pdf", publisher: "University of California, Berkeley", accessedAt: "2026-07-10" },
    { id: "yale-dative", title: "Dative Experiencer Verbs in Georgian", url: "https://ling.yale.edu/media/367/download?inline=", publisher: "Yale University Department of Linguistics", publishedAt: "2012", accessedAt: "2026-07-10" },
  ],
  seo: {
    title: "Georgian Language Guide: Alphabet, Sounds, Verbs and Culture",
    description: "A guide to Georgian's Mkhedruli alphabet, ejectives, clusters, cases, screeves, verbs, dialects, literature, phrases, and learning resources."
  }
} satisfies LanguageGuide;
