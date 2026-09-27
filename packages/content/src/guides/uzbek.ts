import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  { name: "Uyghur", relationship: "Closest major Karluk relative", explanation: cited("Uzbek and Uyghur descend from closely related Karluk varieties. They share inherited words and many ways of building sentences, but each has developed its own sounds, writing practices, and public standard. A reader who knows one should expect to study the other, especially to follow fast speech.", "celcar-portal", "glottolog") },
  { name: "Turkish", slug: "turkish", relationship: "Turkic relative in the Oghuz branch", explanation: cited("Turkish and Uzbek share Turkic ancestry, suffixes, and some basic vocabulary. Turkish belongs to the Oghuz branch, while the main Uzbek standard belongs to Karluk. Common words can help a Turkish speaker begin reading Uzbek, but the sound systems and ordinary vocabulary differ too much to assume easy conversation.", "celcar-portal", "glottolog") },
  { name: "Persian", slug: "persian", relationship: "Longstanding contact, separate family", explanation: cited("Persian is an Iranian language, not a Turkic one. Centuries of bilingual life and Persian literary influence brought words and some patterns into Uzbek. Persian and Uzbek speakers still share multilingual communities in places such as Samarkand and Bukhara, although neither language descends from the other.", "celcar-portal", "wiki-uzbek") },
  { name: "Kazakh", relationship: "Turkic relative in the Kipchak branch", explanation: cited("Kazakh is another Turkic language spoken in and around Uzbekistan. It preserves vowel harmony more strongly than the urban varieties behind standard Uzbek, and the two have different sound patterns and standard vocabularies. Similar suffixes reflect family history; shared border communities add a separate history of contact.", "celcar-portal", "wiki-uzbek") }
] satisfies LanguageGuide["relationships"]["languages"];

export const uzbekGuide = {
  slug: "uzbek",
  name: "Uzbek",
  autonym: "Oʻzbekcha / Oʻzbek tili",
  status: "published",
  publishedAt: "2026-09-27",
  summary: "Uzbek is a Turkic language of Uzbekistan and neighboring communities. Explore its layered scripts, Persian contact, regional voices, suffixes, and everyday speech.",
  family: "Turkic, Common Turkic, Karluk",
  macroRegion: "Uzbekistan, Central Asia, Afghanistan, and diasporas",
  primaryScript: "Latin in Uzbekistan; Cyrillic and Perso-Arabic also used",
  difficultyLabel: "Demanding",
  learnerHook: "A single ending can turn bozor, ‘market,’ into bozorga, ‘to the market.’ Uzbek makes sense when you hear those endings in complete conversations, then learn the scripts that different communities use.",
  hero: { imageAlt: "Uzbek printed in Latin and Cyrillic beside a contemporary Central Asian newspaper.", callToActionLabel: "Read the Uzbek guide" },
  classification: "A Karluk Turkic language; the guide's examples use the contemporary Uzbekistan Latin-script standard unless marked otherwise",
  speakerCommunity: "Uzbek is the main public language of Uzbekistan and a home language across Central Asia and northern Afghanistan. Families, workplaces, classrooms, broadcasters, and online communities use it in different regional styles. Many speakers also use Russian, Tajik, Karakalpak, Kazakh, Dari, or another language, depending on where they live and whom they are speaking with.",
  facts: [
    { label: "Family", value: "Turkic · Karluk; especially close to Uyghur" },
    { label: "2026 Uzbekistan census", value: "35.7 million residents reported Uzbek as their native language (preliminary)" },
    { label: "Writing", value: "Latin and Cyrillic in Uzbekistan; Perso-Arabic in some Afghan communities" },
    { label: "Common sentence order", value: "Subject–object–verb" },
    { label: "Standard examples", value: "Contemporary Uzbekistan Uzbek in Latin script" },
    { label: "Public status", value: "State language of Uzbekistan" }
  ],
  introduction: cited("Uzbek is spoken throughout Uzbekistan and in communities across Central Asia, northern Afghanistan, and farther abroad. In Uzbekistan's preliminary 2026 census, 35.7 million residents named Uzbek as their native language. That count covers a census answer inside Uzbekistan; it isn't a worldwide total.\n\nUzbek belongs to the Karluk branch of the Turkic language family and is especially close to Uyghur. Turkish and Kazakh are more distant Turkic relatives, while Persian has influenced Uzbek through centuries of contact. The language connects people through family conversation, school, news, fiction, music, and work.\n\nReaders meet Uzbek in more than one alphabet. Uzbekistan's official writing system uses Latin letters, yet Cyrillic is still visible. Uzbek communities in Afghanistan may write with a Perso-Arabic alphabet.\n\nThis guide uses contemporary Uzbekistan Latin-script Uzbek for its examples and names a different variety when relevant.", "census-2026", "celcar-portal", "glottolog", "southern-study", "wiki-uzbek"),
  origins: {
    overview: cited("Uzbek grew within the Turkic languages of Central Asia. Medieval and early modern writers used Chagatai, a Turkic literary language associated with Alisher Navoiy, across a wider region than today's Uzbekistan. Local speech, schools, print, and twentieth-century language planning shaped the modern national standard.\n\nThe standard draws heavily on urban speech around Tashkent and the Fergana Valley. Its grammar builds meaning with suffixes, while Persian contact shaped vocabulary and some regional sounds. Calling all older Turkic texts ‘Uzbek’ can obscure the names those writers used.", "celcar-portal", "celcar-pamphlet", "wiki-uzbek"),
    timeline: [
      { period: "15th–16th centuries", event: cited("Alisher Navoiy and other writers gave Chagatai a prominent literary place in Central Asia. Chagatai matters to Uzbek literary history, but readers need historical language study to approach those works directly.", "celcar-pamphlet", "wiki-uzbek") },
      { period: "1929", event: cited("Soviet language planners replaced the earlier Perso-Arabic writing system with a Latin alphabet. The change altered schooling and print even as people continued to speak local varieties.", "celcar-portal", "law-1993") },
      { period: "1940", event: cited("Authorities replaced Latin with Cyrillic for Soviet Uzbek. Cyrillic books, newspapers, and family correspondence remain part of many people's reading lives.", "celcar-portal", "wiki-uzbek") },
      { period: "1993–1995", event: cited("Independent Uzbekistan legislated a return to a Latin-based alphabet and revised its form. The transition has been gradual, so reading life has included both Latin and Cyrillic for decades.", "law-1993", "celcar-portal") },
      { period: "September 2026", event: cited("Uzbekistan's Senate approved an alphabet amendment proposing Ö, Ğ, Ş, and Ç in place of Oʻ, Gʻ, Sh, and Ch, with gradual implementation. At the time of this guide, the government announcement described approval and transition; it did not make older books or documents invalid.", "alphabet-2026") }
    ],
    contactHistory: cited("Persian shaped literature, administration, and urban life across Central Asia, and Uzbek borrowed vocabulary through bilingual contact. Arabic-origin religious and scholarly terms often reached Uzbek through that Persianate world. Russian later supplied modern international and administrative words, especially in the Soviet period.\n\nDifferent communities encounter different mixes. Words such as telefon and mashina are easy to recognize, yet Uzbek speakers attach their own endings to them.", "celcar-portal", "wiki-uzbek"),
    standardization: cited("Schools, publishers, government institutions, and broadcasters promote a written standard in Uzbekistan. The Latin script is official there, but standard spelling does not tell you exactly how people speak in every city or household. Cyrillic remains important for older print and for readers who learned it at school.\n\nThe script transition is still a live public matter. A September 2026 government notice says the Senate approved a further Latin-alphabet revision and says implementation will be gradual. Until that change appears in ordinary texts, learners will keep meeting Oʻ, Gʻ, Sh, and Ch alongside Cyrillic forms and occasional improvised apostrophes on phones and keyboards.", "celcar-portal", "law-1993", "alphabet-2026", "wiki-uzbek")
  },
  variants: {
    overview: cited("Uzbek covers related local varieties rather than one uniform accent. The Uzbekistan standard helps with public writing, but its vowels and words do not represent every community. Researchers distinguish Northern Uzbek, including the Uzbekistan standard, from Southern Uzbek in Afghanistan.", "glottolog", "southern-study", "celcar-portal"),
    items: [
      { name: "Urban standard and Tashkent–Fergana influences", note: cited("The written standard grew with strong input from Tashkent and Fergana urban speech. Those city voices are not identical, and a broadcaster's careful language can differ from the same person's home conversation. Start with this standard for the examples below, then listen to local recordings.", "celcar-portal", "wiki-uzbek") },
      { name: "Khorezm and western varieties", note: cited("Western Uzbek varieties include forms shaped by different Turkic neighbors and local histories. Some can sound closer to Oghuz varieties than the Tashkent-based standard does. Label a recording by place instead of assuming the standard spelling predicts its pronunciation.", "wiki-uzbek", "celcar-portal") },
      { name: "Southern Uzbek in Afghanistan", note: cited("Afghan Uzbek communities have their own phonological, lexical, and writing traditions. Researchers often classify Southern Uzbek separately from Northern Uzbek and document Perso-Arabic script use. A Latin-script Uzbekistan phrasebook is therefore a limited guide to Afghan family speech or print.", "southern-study", "wiki-uzbek") },
      { name: "Formal, familiar, and multilingual styles", note: cited("A government notice, a family message, and a street interview can differ in vocabulary, sentence length, and script. Many people move between Uzbek and another language in daily life. Such movement reflects their networks and circumstances; it does not make a regional voice defective.", "celcar-portal", "wiki-uzbek") }
    ]
  },
  pronunciation: {
    overview: cited("The Latin alphabet looks familiar at first, but a few letters ask your mouth to make distinctions English spelling does not show. Listen to Uzbek recordings while you read, because English-looking letters can invite the wrong sound. This section describes the contemporary Uzbekistan standard; individual speakers and regions differ.", "celcar-alphabet", "celcar-pamphlet", "uzbekcha-alphabet"),
    script: "Contemporary Uzbekistan Latin spelling; Cyrillic equivalents are mentioned where helpful",
    soundSystem: cited("Uzbek writes q for a back-of-the-mouth consonant and x for the rough sound heard in Scottish loch. The letter gʻ is a voiced back consonant, while g is different. Oʻ and plain o represent different vowels; check a speaker's recording before copying an English analogy.\n\nSh and ch each stand for one consonant sound. The major urban standard lacks the regular vowel harmony familiar from many Turkic languages, though some local varieties preserve more. Learn Uzbek endings from Uzbek examples rather than transferring Turkish endings.", "celcar-portal", "celcar-alphabet", "uzbekcha-alphabet"),
    prosody: cited("Stress often falls toward the end of a word, but small grammatical endings and borrowed words can change the pattern. The question marker -mi and negative -ma are frequent exceptions. Practice whole phrases with recordings rather than stressing every suffix equally.\n\nListen also for respectful rhythm. Assalomu alaykum is a full greeting, and Qalaysiz? can be a warm greeting or a genuine request for news. Writing cannot supply that social cue.", "uzbekcha-greetings", "uzbekcha-alphabet", "celcar-pamphlet"),
    learnerTraps: [
      "Reading x as English ‘ks’ instead of the rough consonant in xayr",
      "Collapsing q into ordinary k, or gʻ into ordinary g, before learning the contrast",
      "Treating oʻ and o as decorative spellings of the same vowel",
      "Assuming every suffix must follow Turkish-style vowel harmony",
      "Copying a Latin transliteration of Afghan Uzbek as if it described Uzbekistan standard speech",
      "Guessing stress from spelling without checking a speaker's recording"
    ],
    sampleWords: [
      { original: "xayr", translation: "goodbye", note: "The initial x is a rough sound made farther back than English h; it is not the English letters ks." },
      { original: "qish", translation: "winter", note: "The initial q is farther back than k. Keep sh together as one consonant sound." },
      { original: "oʻzbek", translation: "Uzbek", note: "The opening oʻ is a different letter and vowel from plain o; its mark belongs to the spelling." },
      { original: "gʻisht", translation: "brick", note: "The marked gʻ names a voiced back consonant; contrast it with ordinary g in another recorded word." },
      { original: "choy", translation: "tea", note: "Ch represents one sound, like English ch in chair, and this word is common in everyday invitations." },
      { original: "rahmat", translation: "thank you", note: "Practice the whole word from audio and hear how the two syllables differ in emphasis." }
    ]
  },
  writing: {
    overview: cited("Uzbek readers live with a layered writing history. Uzbekistan uses a Latin-based official alphabet, but Cyrillic books, signs, and posts remain visible. Historical literature used Perso-Arabic script, and some Uzbek communities in Afghanistan still use Arabic-based writing.\n\nThe same language may appear as Oʻzbekcha and Ўзбекча. For a course based in Uzbekistan, learn Latin spellings with sound. Add Cyrillic for older print or particular news sources; add the Arabic-based script if your target is an Afghan community.", "celcar-portal", "law-1993", "wiki-uzbek", "southern-study"),
    primaryScript: "Latin (Uzbekistan standard); Cyrillic and Perso-Arabic in other reading contexts",
    romanization: cited("The Latin standard is an orthography in its own right, not a one-to-one transcription of every local voice. English teaching materials may spell an Uzbek sound with kh or gh, while ordinary Uzbek Latin writing uses x or gʻ. Learn the standard spelling first, then use audio for pronunciation and a script chart for Cyrillic equivalents.", "celcar-alphabet", "celcar-pamphlet", "uzbekcha-alphabet"),
    spellingNorms: cited("Pay attention to the mark in oʻ and gʻ. Writers may type a straight apostrophe, a curly quote, or a modifier letter because keyboards make the official-looking form awkward; visually similar characters can produce different search results. Sh and ch also function as units in traditional alphabet teaching.\n\nA Senate-approved 2026 amendment proposes changing those four spellings to ö, ğ, ş, and ç over time. That announcement also says existing documents remain valid. Do not silently rewrite a person's name, an older citation, or a book title to match a proposed new form.", "uzbekcha-alphabet", "alphabet-2026", "law-1993"),
    styleNotes: [
      cited("Keep the mark in Oʻzbekiston and oʻzbek when you copy text. A plain apostrophe may be common in messages, but it can make dictionary and corpus searches inconsistent.", "uzbekcha-alphabet"),
      cited("Recognize a few Cyrillic pairs early, such as Ў for oʻ and Ғ for gʻ, when you read older Uzbek sources. Do not mistake Cyrillic material for Russian simply because the letters look familiar.", "celcar-alphabet", "wiki-uzbek"),
      cited("Write a personal name as its owner and source write it. Script change has legal and practical effects for names, records, and searches.", "alphabet-2026"),
      cited("Use Latin course texts for standard beginner practice, then choose additional scripts according to the people and texts you actually want to follow.", "celcar-textbooks", "southern-study")
    ]
  },
  grammar: {
    overview: cited("Uzbek puts its main verb near the end of a plain statement and builds much of the rest by adding endings to words. The endings tell you whether someone is going to a place, staying there, coming from it, asking a question, or addressing another person respectfully. Once you recognize the pieces, a long word is less mysterious than it first looks.\n\nUzbek nouns do not have grammatical gender, and ordinary adjectives do not change to agree with a masculine or feminine noun. Verbs still require attention: tense, ongoing action, person, negation, and politeness appear in different forms. The examples below use the contemporary Uzbekistan standard in Latin script.", "celcar-portal", "uzbekcha-grammar", "uztili-grammar"),
    typologicalProfile: cited("In the plain sentence Men kitobni oʻqidim, ‘I read the book,’ the object stands before the verb. The suffix -ni marks a specific direct object here, while men names the reader and the verb ending tells you it was ‘I.’ Linguists call this subject–object–verb order, but actual speakers can move material to foreground a topic.\n\nWords meaning ‘to,’ ‘in,’ and ‘from’ often appear as endings rather than separate prepositions. Uzbek also has postpositions, words placed after a noun phrase, so a learner who waits for an English-style word before every place name will miss the connection.", "uztili-grammar", "ud-case", "celcar-portal"),
    morphology: cited("An ending may follow another ending in a steady order. Kitob is ‘book’; kitoblar is ‘books’; kitoblarim is ‘my books’; and kitoblarimda is ‘in my books.’ The pieces express plural, possession, and location, and each piece remains recognizable. That pattern is called agglutination.\n\nUzbek endings are not completely mechanical. Consonants can adjust at a join, and the form of a destination suffix depends partly on the preceding sound. The strongest urban standard also lacks the broad vowel harmony found in Turkish, so learn Uzbek forms from Uzbek sentences rather than importing a Turkish chart.", "uzbekcha-grammar", "celcar-portal", "ud-case"),
    syntax: cited("A small ending can change what the listener thinks you mean. Men kitob oʻqiyman is a broad ‘I read a book/books,’ while Men kitobni oʻqiyman points to a particular book. Possession usually appears on both sides of a phrase: doʻstimning kitobi means ‘my friend's book,’ with a marker on ‘friend’ and another on ‘book.’\n\nQuestions do not require English-style inversion. Uzbek adds -mi to form many yes/no questions: Yaxshisiz, ‘you are well,’ becomes Yaxshimisiz?, ‘Are you well?’ The respectful -siz helps explain why the whole greeting is more than the word yaxshi, ‘good.’", "ud-case", "uztili-grammar", "uzbekcha-greetings"),
    advancedPainPoints: [
      "Hearing suffix boundaries in fast speech when several endings attach to one noun or verb",
      "Choosing bare and -ni-marked objects according to specificity and context",
      "Knowing which past, ongoing, or reported form fits the speaker's meaning rather than translating one English tense",
      "Following a relative or participial clause before the noun it describes",
      "Keeping polite address in pronouns, questions, and requests consistent"
    ],
    topics: [
      { title: "Destinations and locations", body: cited("Men doʻkonga bordim means ‘I went to the shop’: -ga marks the destination. Men uyda oʻtiribman means ‘I am sitting at home’: -da locates the action. Men maktabdan keldim means ‘I came from school’: -dan marks the starting point.\n\nPractice the three with actual journeys; English may use several prepositions where Uzbek uses one ending.", "uztili-grammar", "ud-case"), example: "Men doʻkonga bordim.", exampleTranslation: "I went to the shop." },
      { title: "A particular object", body: cited("The -ni ending often identifies a particular direct object. Men kitobni oʻqidim says ‘I read the book,’ with a book identifiable in context. A bare kitob can give a broader ‘a book/books’ reading.\n\nThe ending marks how the speaker presents the object, so it does not replace English ‘the’ in every sentence.", "ud-case", "uztili-grammar"), example: "Men kitobni oʻqidim.", exampleTranslation: "I read the book." },
      { title: "Possession on both nouns", body: cited("Doʻstimning kitobi qiziqarli means ‘My friend's book is interesting.’ The friend's noun takes -ning, while kitobi carries a third-person possessive ending. English often places one apostrophe-s before the book, but Uzbek marks the relationship on both sides. Look for the second marker when you read long noun phrases.", "uztili-grammar", "ud-case"), example: "Doʻstimning kitobi qiziqarli.", exampleTranslation: "My friend's book is interesting." },
      { title: "Yes/no questions", body: cited("Yaxshimisiz? is a polite way to ask ‘How are you?’ It includes yaxshi, ‘well,’ the question marker -mi, and polite -siz. The same question marker appears in Chegirma bormi?, ‘Is there a discount?’ Watch where it sits before you try to turn every English question into a single Uzbek pattern; question words such as qayerda, ‘where,’ have their own place too.", "uzbekcha-greetings", "uzbekcha-bazaar"), example: "Chegirma bormi?", exampleTranslation: "Is there a discount?" },
      { title: "Past and ongoing action", body: cited("Men kitobni oʻqidim is a completed ‘I read the book,’ while Men oʻzbekcha oʻrganyapman says ‘I am learning Uzbek’ now. The endings carry both the action's timing and the speaker's person. Memorize each form with a real sentence and audio, since English ‘I read’ can cover habits and completed events with the same letters.", "uztili-grammar", "uzbekcha-speaking"), example: "Men oʻzbekcha oʻrganyapman.", exampleTranslation: "I am learning Uzbek." },
      { title: "Respectful requests", body: cited("Iltimos, sekinroq gapiring asks ‘Please speak more slowly.’ The comparative -roq makes sekin, ‘slow,’ into ‘more slowly,’ while -ing makes the command polite. A familiar command drops that respectful ending. When you speak to an unfamiliar adult, learn the whole polite sentence rather than replacing one English ‘please’ in a bare command.", "uzbekcha-politeness", "uzbekcha-bazaar"), example: "Iltimos, sekinroq gapiring.", exampleTranslation: "Please speak more slowly." },
      { title: "Saying who you are", body: cited("Men Toshkentda yashayman means ‘I live in Tashkent’: -da marks the place and the verb ending identifies ‘I.’ Men Amerikadanman means ‘I am from America,’ with -dan, ‘from,’ followed by a first-person ending. The exact place name changes, but these full introductions teach the order and prevent a word-by-word English translation.", "uzbekcha-speaking", "uzbekcha-introductions"), example: "Men Toshkentda yashayman.", exampleTranslation: "I live in Tashkent." }
    ]
  },
  whereSpoken: {
    overview: cited("Uzbek has a national public role in Uzbekistan, where the preliminary 2026 census found 35.7 million residents identifying it as their native language. That figure does not measure fluency in every situation and excludes speakers outside the country. Uzbek-speaking communities also live in neighboring Central Asian states and Afghanistan, with migration extending the language's reach much farther.\n\nBorders and names should not be mistaken for simple language maps. Tajik-speaking families live in Uzbekistan, Uzbek-speaking families live in Tajikistan and Afghanistan, and many households use more than one language. A good account of a region names those overlapping lives rather than treating each country as one monolingual block.", "census-2026", "celcar-portal", "southern-study"),
    regions: [
      { place: "Uzbekistan", note: cited("Uzbek is the state language and the main language of schools, government, and much public media. The 2026 preliminary census reports 35.7 million residents naming it as their native language, a figure that includes people of more than one ethnicity.", "census-2026", "glottolog") },
      { place: "Tajikistan, Kyrgyzstan, Kazakhstan, and Turkmenistan", note: cited("Uzbek-speaking communities live across these neighboring countries. Public schooling and administration may use another national language, while family, local business, or cross-border networks keep Uzbek in use.", "celcar-portal", "glottolog") },
      { place: "Northern Afghanistan", note: cited("Southern Uzbek communities speak and write in northern Afghanistan, especially in the north and northeast. Researchers document differences from the Uzbekistan-centered standard and the continued relevance of Arabic-based writing.", "southern-study", "wiki-uzbek") },
      { place: "Diaspora communities", note: cited("Uzbek speakers also live in Russia, Turkey, Europe, North America, and elsewhere through work, study, and family migration. A diaspora learner may need family voice messages, Cyrillic social posts, or a particular regional accent more than a national television standard.", "celcar-portal", "wiki-uzbek") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited("An English-speaking learner can read much of the Latin alphabet immediately, and Uzbek nouns have no grammatical gender. The heavier work comes from hearing suffixes, placing the verb naturally at the end, distinguishing q, x, gʻ, and oʻ, and following several scripts or regional styles when a real reading goal calls for them. A Turkish speaker has a different starting point because the Turkic structure is familiar, although Uzbek speech still needs its own study.", "celcar-portal", "celcar-alphabet", "uzbekcha-grammar"),
    easierAspects: [
      "Latin-script material makes many public texts approachable from the beginning",
      "Nouns and adjectives do not require masculine or feminine agreement",
      "Recognizable suffix order lets a learner analyze unfamiliar word forms",
      "Shared Turkic patterns help learners who already know Turkish or another related language"
    ],
    hardAspects: [
      "q, x, gʻ, and oʻ need careful listening rather than English letter names",
      "Several endings can make a common noun or verb look unfamiliar",
      "Latin, Cyrillic, and Arabic-based material answer different reading needs",
      "Regional speech and multilingual vocabulary differ from a beginner course"
    ],
    plateauRisks: [
      "Memorizing roots without the suffixes that make full sentences work",
      "Reading Latin text fluently while avoiding the local voices you want to understand",
      "Applying Turkish vowel-harmony rules to standard Uzbek endings"
    ],
    workload: cited("Plan around the texts and people you care about rather than a fixed number of hours. A learner focused on Uzbekistan news can begin with Latin script and common case endings, then add Cyrillic if older material appears. Someone learning for Afghan family conversation should ask which local variety and writing system the family uses before choosing a course.\n\nRegular listening and corrected short sentences reveal gaps that a flashcard list can hide.", "celcar-textbooks", "southern-study", "uzbekcha-speaking")
  },
  advancedLearning: {
    strategy: cited("Begin with the Latin alphabet used in current Uzbekistan courses, but pair every new word with a recorded phrase. Use a short introduction to learn -man, -dan, and -da in real speech: ‘My name is…,’ ‘I am from…,’ and ‘I live in….’ Then compare bozor, bozorga, and bozorda so that case endings feel like directions rather than a table to recite.\n\nAt the next stage, read a short news story and underline each suffix you can explain. Ask a speaker or teacher which words sound formal, regional, or outdated. If your target community uses Cyrillic or Afghan Uzbek, bring those texts into your practice early; a generic Latin phrase list cannot fill that gap for you.", "celcar-textbooks", "uzbekcha-introductions", "uzbekcha-grammar", "southern-study"),
    mediaPractice: cited("Choose a broadcaster or recording from the region you want to understand. First listen for the topic, then replay with a transcript and mark recurring endings on verbs and nouns. Short, repeated clips make q, x, gʻ, and the phrase's stress easier to hear than hours of background audio.\n\nFor broader reading, compare one Latin-script news item with a Cyrillic item on the same subject when both are available. The comparison teaches script recognition without pretending every sentence is identical. Save a few lines of natural speech each week and ask what you could say in that situation yourself.", "celcar-pamphlet", "celcar-textbooks", "uzbekcha-speaking", "uzbek-corpus"),
    dictionariesAndCorpora: cited("An Uzbek explanatory dictionary helps when an English gloss such as ‘heart’ hides several meanings of koʻngil. Izoh.uz gives definitions, literary examples, and set phrases; confirm whether a quoted phrase belongs to older fiction before using it aloud. The Uzbek language corpus lets you search real text and compare word forms, but a corpus hit alone cannot tell you whether an expression is warm, sarcastic, or formal.\n\nKeep a small note for each new word: the source, script, entire example sentence, region if known, and any suffixes you can separate. When two spellings appear, search both rather than assuming one must be a typo. This habit is especially valuable while script conventions continue to change.", "izoh-koʻngil", "uzbek-corpus", "alphabet-2026"),
    resources: [
      { type: "course", title: "Indiana University CeLCAR Uzbek textbooks", url: "https://celcar.indiana.edu/materials/textbooks.html", level: "all", description: cited("Use the elementary or intermediate books with their companion audio and video. The books are paid resources, so check your library or course access before planning around them.", "celcar-textbooks") },
      { type: "other", title: "CeLCAR Uzbek language portal and pamphlet", url: "https://celcar.indiana.edu/materials/language-portal/uzbek.html", level: "beginner", description: cited("Read the short introduction for family, script history, and a few recorded phrase targets. Its older speaker figure predates the preliminary 2026 census and should not be reused as a current count.", "celcar-portal", "census-2026") },
      { type: "dictionary", title: "Izoh.uz Uzbek explanatory dictionary", url: "https://izoh.uz/", level: "intermediate", description: cited("Search meanings, examples, and idioms in Uzbek. Check the literary source attached to an example before treating it as casual speech.", "izoh-koʻngil") },
      { type: "corpus", title: "Oʻzbek tili korpusi", url: "https://uzbekcorpus.uz/", level: "advanced", description: cited("Search words and forms across collected texts, including concordance and morphology tools. Treat an occurrence as evidence of a context, not as a blanket recommendation to say the phrase everywhere.", "uzbek-corpus") }
    ]
  },
  wordsAndTexts: {
    overview: cited("Uzbek words can be old, borrowed, everyday, or formal. Non names bread in ordinary shopping; koʻngil names an inner feeling or disposition and supports many idioms. Listen for setting as well as dictionary meaning.\n\nChagatai literature, modern novels, journalism, song, film, and family messages bring different scripts and vocabulary to readers.", "celcar-pamphlet", "izoh-koʻngil", "uzbekcha-bazaar", "wiki-uzbek"),
    notableWords: [
      { term: "koʻngil", meaning: "heart; inner feeling or inclination", note: cited("The word can point to feelings, mood, character, or desire rather than the physical organ alone. Its many set phrases show why a single English translation is too narrow.", "izoh-koʻngil") },
      { term: "non", meaning: "bread", note: cited("This common shopping word names bread in a phrasebook and in everyday food talk. Ask which kind someone means instead of assuming every household has the same loaf or eating custom.", "uzbekcha-bazaar") },
      { term: "mahalla", meaning: "neighborhood; local community", note: cited("The term names a local social unit in Uzbekistan and appears in official descriptions of neighborhood-level life. It can mean more than a point on a city map, so read the surrounding context.", "census-2026", "celcar-portal") },
      { term: "bozor", meaning: "market", note: cited("The word gives a clear first example of a case ending: bozorga means ‘to the market.’ It also shows the Persian-contact vocabulary woven into daily Uzbek.", "uzbekcha-grammar", "celcar-portal") },
      { term: "rahmat", meaning: "thank you", note: cited("This everyday thanks can become katta rahmat, ‘thank you very much.’ Tashakkur is a more formal alternative; the choice tells you something about the setting.", "uzbekcha-politeness") },
      { term: "marhamat", meaning: "please go ahead; here you are", note: cited("A person may say this when offering something or inviting another person to proceed. It does a different job from arzimaydi, a reply to thanks, even though English sometimes translates both as ‘you're welcome.’", "uzbekcha-politeness") },
      { term: "oʻzbekcha", meaning: "in Uzbek; Uzbek speech", note: cited("The ending -cha can name a way of speaking. In Men oʻzbekcha oʻrganyapman, a learner says ‘I am learning Uzbek,’ and the marked initial vowel is part of the written word.", "uzbekcha-speaking", "uzbekcha-alphabet") }
    ],
    loanwordLayers: cited("Persian contact helped fill daily and literary Uzbek vocabulary; Arabic-origin words entered religious, learned, and ordinary usage through the same long history; Russian supplied many international and technical words in the modern period. None of these layers is a separate grammar pasted on top of Uzbek. Speakers give borrowed words Uzbek endings and use them in Uzbek conversations.\n\nA dictionary entry may tell you a word's origin, but it cannot tell you which neighbor, school, book, or family passed it to one speaker. Avoid treating an etymology as a biography of the person using the word. The sentence around it gives the better clue to present-day tone.", "celcar-portal", "wiki-uzbek"),
    idioms: [
      { original: "Koʻngli toʻlmoq", translation: "To feel satisfied or reassured", note: "The dictionary links a ‘full heart’ to contentment and peace of mind. A literal translation misses the emotional judgment." },
      { original: "Koʻngil qoʻymoq", translation: "To grow fond of or fall for someone", note: "The phrase can express affection or attachment. The dictionary shows literary uses, so check the relationship and register before repeating it." },
      { original: "Ichi pishmoq", translation: "To get bored or impatient", note: "The picture is of an ‘inside’ growing heated or cooked. The dictionary gives both boredom and impatience; context decides which is meant." },
      { original: "Ichi qora", translation: "Jealous or ill-natured", note: "This is a judgment about a person's character, not their physical appearance. Use it cautiously because it criticizes someone." }
    ],
    textGenres: [
      "Chagatai poetry and manuscripts that require historical language and script study",
      "Modern Uzbek novels, stories, plays, and literary magazines",
      "Current Latin- and Cyrillic-script news, interviews, and opinion writing",
      "Songs, theater, television, podcasts, and short online videos",
      "Family messages and community posts that may mix scripts or languages"
    ]
  },
  relationships: {
    overview: cited("Uzbek's closest widely taught relative is Uyghur, another Karluk Turkic language. Turkish and Kazakh are Turkic relatives from other branches, so their similar suffixes and basic words show shared ancestry without making their everyday speech identical. Some western Uzbek varieties share additional traits with neighboring Oghuz varieties.\n\nPersian is a contact language from a different family. Its influence reaches Uzbek words and some regional patterns through centuries of bilingual life. When a word looks familiar in Persian and Uzbek, ask whether it was borrowed; when a suffix works alike in Uzbek and Turkish, shared Turkic ancestry is often the better first explanation.", "celcar-portal", "glottolog", "wiki-uzbek"),
    languages: relatedLanguages
  },
  culturalNotes: "Uzbek belongs to people in several countries and to families with different combinations of languages. A speaker from Tashkent, a speaker from Faryab, and a heritage speaker abroad may prefer different scripts. Ask what the person uses rather than treating one alphabet as a test of identity.\n\nSiz and respectful verb endings suit many first meetings; sen fits closer relationships and some family settings. Greetings and offers show how you place yourself in a conversation. Follow the form your hosts use.",
  resources: [
    { type: "course", title: "CeLCAR Uzbek elementary and intermediate textbooks", url: "https://celcar.indiana.edu/materials/textbooks.html", level: "all", description: cited("Structured university books with companion audio and video. They cost money; preview the level and check library access first.", "celcar-textbooks") },
    { type: "other", title: "CeLCAR Uzbek language portal", url: "https://celcar.indiana.edu/materials/language-portal/uzbek.html", level: "beginner", description: cited("A compact introduction to classification, contact, and script history. Read its older population figures as historical descriptions, then use the 2026 census for a current Uzbekistan count.", "celcar-portal", "census-2026") },
    { type: "other", title: "CeLCAR Uzbek phrase pamphlet", url: "https://celcar.indiana.edu/materials/language_pamphlets/uzbek.pdf", level: "beginner", description: cited("Use its short greetings and introductions as an audio or tutor practice list. Its romanized pronunciations are approximations, so copy a speaker's voice when possible.", "celcar-pamphlet") },
    { type: "other", title: "Uzbekcha phrasebook", url: "https://www.uzbekcha.app/phrases/", level: "beginner", description: cited("Browse situation-based Latin-script phrases for greetings, the bazaar, and polite requests. The site advertises app lessons and native audio as forthcoming, so do not assume every lesson is already playable.", "uzbekcha-greetings", "uzbekcha-bazaar", "uzbekcha-politeness") },
    { type: "dictionary", title: "Izoh.uz", url: "https://izoh.uz/", level: "intermediate", description: cited("Read Uzbek definitions and example quotations, including many fixed expressions. Notice when a line comes from literature rather than a current spoken exchange.", "izoh-koʻngil", "izoh-ich") },
    { type: "corpus", title: "Oʻzbek tili korpusi", url: "https://uzbekcorpus.uz/", level: "advanced", description: cited("Search tokens, lemmas, and concordances to see words inside real texts. Use the result's genre and date when judging how to speak or write.", "uzbek-corpus") },
    { type: "media", title: "Ozodlik Uzbek-language news", url: "https://www.ozodlik.org/", level: "intermediate", description: cited("Use current news audio and articles for listening and reading practice. It is a journalism outlet with its own editorial perspective, so compare coverage with other Uzbek sources.", "ozodlik") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Assalomu alaykum", translation: "Hello", usageNote: "A broad respectful greeting; Va alaykum assalom is the usual reply." },
    { original: "Salom", translation: "Hi", usageNote: "More familiar than the full greeting." },
    { original: "Xayrli tong", translation: "Good morning", usageNote: "Use in the morning; xayrli kun is ‘good day.’" },
    { original: "Yaxshimisiz?", translation: "How are you?", usageNote: "Polite address with the respectful -siz ending." },
    { original: "Yaxshi, rahmat", translation: "Fine, thanks", usageNote: "A common short reply to a wellbeing question." },
    { original: "Mening ismim Anna", translation: "My name is Anna", usageNote: "Replace Anna with your own name." },
    { original: "Sizning ismingiz nima?", translation: "What is your name?", usageNote: "A polite question; CeLCAR gives this full form." },
    { original: "Men oʻzbekcha oʻrganyapman", translation: "I am learning Uzbek", usageNote: "A complete introduction to your learning goal." },
    { original: "Iltimos, sekinroq gapiring", translation: "Please speak more slowly", usageNote: "Respectful request; -roq means ‘more,’ and -ing marks polite address." },
    { original: "Kechirasiz", translation: "Excuse me; sorry", usageNote: "Use to get attention or apologize for a small interruption." },
    { original: "Rahmat", translation: "Thank you", usageNote: "Katta rahmat makes the thanks stronger." },
    { original: "Arzimaydi", translation: "You're welcome", usageNote: "A reply to thanks; marhamat is more natural when offering something." },
    { original: "Narxi qancha?", translation: "What is the price?", usageNote: "Use when asking about an item for sale." },
    { original: "Menga shuni bering", translation: "Please give me this one", usageNote: "Point to the item; the verb form addresses the listener politely." },
    { original: "Hojatxona qayerda?", translation: "Where is the bathroom?", usageNote: "CeLCAR lists this as a practical location question." },
    { original: "Koʻrishguncha", translation: "See you", usageNote: "A parting expression, literally ‘until we see one another.’" }
  ],
  sources: [
    { id: "census-2026", title: "Preliminary results of the 2026 population and agricultural census", url: "https://stat.uz/en/press-center/news-of-committee/68979-a-oli-va-ishlo-kh-zhaligini-r-jkhatga-olish-tadbirining-dastlabki-natizhalariga-ba-ishlangan-konferentsiya-tkazildi-4", publisher: "National Statistics Committee of Uzbekistan", publishedAt: "2026-06-30", accessedAt: "2026-09-27" },
    { id: "celcar-portal", title: "Uzbek Language Portal", url: "https://celcar.indiana.edu/materials/language-portal/uzbek.html", publisher: "Indiana University CeLCAR", accessedAt: "2026-09-27" },
    { id: "celcar-pamphlet", title: "Uzbek Language Pamphlet", url: "https://celcar.indiana.edu/materials/language_pamphlets/uzbek.pdf", publisher: "Indiana University CeLCAR", accessedAt: "2026-09-27" },
    { id: "celcar-textbooks", title: "CeLCAR Language Textbooks", url: "https://celcar.indiana.edu/materials/textbooks.html", publisher: "Indiana University CeLCAR", accessedAt: "2026-09-27" },
    { id: "celcar-alphabet", title: "Uzbek Alphabet Chart", url: "https://celcar.indiana.edu/materials/alphabet_charts/Uzbek%20Alphabet%20-%20Letter%20Size.pdf", publisher: "Indiana University CeLCAR", accessedAt: "2026-09-27" },
    { id: "law-1993", title: "Law on the introduction of a Latin-based Uzbek alphabet", url: "https://nrm.uz/contentf?doc=56088_zakon_respubliki_uzbekistan_ot_02_09_1993_g_n_931-xii_o_vvedenii_uzbekskogo_alfavita_osnovannogo_na_latinskoy_grafike&products=1_", publisher: "Republic of Uzbekistan via NRM", publishedAt: "1993-09-02", accessedAt: "2026-09-27" },
    { id: "alphabet-2026", title: "The Senate Approved the Law on Amending the Uzbek Alphabet", url: "https://gov.uz/en/kongeotexnazorat/news/view/217317", publisher: "Government of Uzbekistan", publishedAt: "2026-09-10", accessedAt: "2026-09-27" },
    { id: "glottolog", title: "Glottolog: Northern Uzbek", url: "https://glottolog.org/resource/languoid/id/nort2690", publisher: "Glottolog", accessedAt: "2026-09-27" },
    { id: "southern-study", title: "Filling the Gap for Uzbek: Creating Translation Resources for Southern Uzbek", url: "https://aclanthology.org/2025.wmt-1.83.pdf", publisher: "Association for Computational Linguistics", publishedAt: "2025", accessedAt: "2026-09-27" },
    { id: "wiki-uzbek", title: "Uzbek language", url: "https://en.wikipedia.org/wiki/Uzbek_language", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "uzbekcha-alphabet", title: "The Uzbek Latin alphabet: all 29 letters, with pronunciation", url: "https://www.uzbekcha.app/blog/uzbek-latin-alphabet/", publisher: "Uzbekcha", updatedAt: "2026-09-13", accessedAt: "2026-09-27" },
    { id: "uzbekcha-grammar", title: "How to learn Uzbek grammar, not just vocabulary", url: "https://www.uzbekcha.app/guides/learn-uzbek-grammar-not-just-vocabulary/", publisher: "Uzbekcha", updatedAt: "2026-09-17", accessedAt: "2026-09-27" },
    { id: "uzbekcha-greetings", title: "Uzbek greetings and goodbyes", url: "https://www.uzbekcha.app/phrases/greetings/", publisher: "Uzbekcha", updatedAt: "2026-09-13", accessedAt: "2026-09-27" },
    { id: "uzbekcha-bazaar", title: "Uzbek phrases for the bazaar", url: "https://www.uzbekcha.app/phrases/at-the-bazaar/", publisher: "Uzbekcha", updatedAt: "2026-09-13", accessedAt: "2026-09-27" },
    { id: "uzbekcha-introductions", title: "Introducing yourself in Uzbek", url: "https://www.uzbekcha.app/phrases/introducing-yourself/", publisher: "Uzbekcha", updatedAt: "2026-09-13", accessedAt: "2026-09-27" },
    { id: "uzbekcha-politeness", title: "Thank you, please and sorry in Uzbek", url: "https://www.uzbekcha.app/phrases/thank-you-and-please/", publisher: "Uzbekcha", updatedAt: "2026-09-13", accessedAt: "2026-09-27" },
    { id: "uzbekcha-speaking", title: "How to practise speaking Uzbek alone", url: "https://www.uzbekcha.app/guides/practise-speaking-uzbek-alone/", publisher: "Uzbekcha", accessedAt: "2026-09-27" },
    { id: "uztili-grammar", title: "Uzbek Grammar", url: "https://uztili.com/uzbek-grammar?lang=en", publisher: "UzTili", accessedAt: "2026-09-27" },
    { id: "ud-case", title: "Universal Dependencies: Uzbek Case", url: "https://universaldependencies.org/uz/feat/Case.html", publisher: "Universal Dependencies", accessedAt: "2026-09-27" },
    { id: "izoh-koʻngil", title: "Izoh.uz: koʻngil", url: "https://izoh.uz/word/ko%E2%80%98ngil", publisher: "Izoh.uz", accessedAt: "2026-09-27" },
    { id: "izoh-ich", title: "Izoh.uz: ich", url: "https://izoh.uz/word/ich", publisher: "Izoh.uz", accessedAt: "2026-09-27" },
    { id: "uzbek-corpus", title: "Oʻzbek tili korpusi", url: "https://uzbekcorpus.uz/", publisher: "Oʻzbek tili korpusi", accessedAt: "2026-09-27" },
    { id: "ozodlik", title: "Ozodlik Uzbek-language news", url: "https://www.ozodlik.org/", publisher: "Radio Free Europe/Radio Liberty", accessedAt: "2026-09-27" }
  ],
  seo: { title: "Uzbek (Oʻzbekcha): Language, Scripts, Grammar and Regional Speech", description: "Meet Uzbek speakers and communities, compare Latin and Cyrillic writing, learn how suffixes shape sentences, and find resources for listening and reading." }
} satisfies LanguageGuide;
