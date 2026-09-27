import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Persian",
    slug: "persian",
    relationship: "A fellow Iranian language from a different branch",
    explanation: cited("Pashto belongs to the Eastern Iranian group, while Persian belongs to Southwestern Iranian. Their shared ancestry explains some patterns, and long contact added another layer of shared vocabulary. A Persian speaker still needs to learn Pashto sounds, forms, and sentence habits rather than treating it as a Persian dialect.", "wiki-pashto", "iranica-frontier")
  },
  {
    name: "Urdu",
    slug: "urdu",
    relationship: "A contact language in Pakistan, not a close genetic relative",
    explanation: cited("Urdu is Indo-Aryan, whereas Pashto is Iranian. Many speakers meet both languages in Pakistani schools, cities, broadcasting, and family networks, but shared words often reflect borrowing or wider regional vocabulary. Similar-looking Arabic-derived letters do not mean that their spelling systems or grammars are interchangeable.", "wiki-pashto", "pbs-census", "unicode-arabic")
  },
  {
    name: "Other Eastern Iranian languages",
    relationship: "More distant relatives within the Eastern Iranian group",
    explanation: cited("Pashto is usually classified with the Eastern Iranian languages, a group that also includes languages such as Ossetian. Membership in that branch signals historical relationship, not automatic mutual understanding. For a learner, that history explains the relationship but does not make conversations or vocabulary transfer directly.", "wiki-pashto", "glottolog-pashto")
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const pashtoGuide = {
  slug: "pashto",
  name: "Pashto",
  autonym: "پښتو",
  status: "published",
  publishedAt: "2026-09-27",
  summary: "Pashto connects communities across Afghanistan and Pakistan through conversation, poetry, news, and a rich written tradition, with regional voices that call for careful listening.",
  family: "Indo-European, Indo-Iranian, Iranian, Eastern Iranian",
  macroRegion: "Afghanistan, Pakistan, and global diasporas",
  primaryScript: "Pashto Arabic-derived script, written right to left",
  difficultyLabel: "Very demanding",
  learnerHook: "Pashto gives you a way into the everyday speech and literary life of communities across Afghanistan and Pakistan. Start with a voice and a spelling convention, then let repeated listening connect the script to the sounds you actually hear.",
  hero: { imageAlt: "Pashto text in its Arabic-derived script alongside a spoken-language notebook", callToActionLabel: "Explore Pashto sounds" },
  seo: {
    title: "Pashto Language Guide: Sounds, Script, Grammar, and Learning Resources",
    description: "Learn where Pashto is spoken, how its regional sounds and Arabic-derived script work, what its grammar asks of learners, and which verified phrases and resources can help you begin."
  },
  classification: "An Eastern Iranian language of the Indo-European family, with several regional dialect groups",
  speakerCommunity: "Pashto belongs to many communities in Afghanistan and Pakistan, as well as families abroad. Some speakers use it in the home alongside Dari, Urdu, English, or other local languages, and their choices can change with setting and generation. The language appears in daily conversation, songs, poetry, broadcasting, print, and online writing.",
  facts: [
    { label: "Autonym", value: "پښتو (Pashto/Pashtu)" },
    { label: "Family", value: "Indo-European · Indo-Iranian · Eastern Iranian" },
    { label: "Main regions", value: "Afghanistan and Pakistan" },
    { label: "Writing direction", value: "Right to left" },
    { label: "Typical clause order", value: "Subject–object–verb" },
    { label: "Pakistan census", value: "18.15% reported Pushto as mother tongue in 2023" }
  ],
  introduction: cited(
    "Pashto is spoken in Afghanistan and Pakistan, especially in communities across the borderlands and adjoining cities and districts. It is an Eastern Iranian language in the Indo-European family. Its speakers include people who use Pashto every day at home and people who move among Pashto, Dari, Urdu, and other languages as their setting changes.\n\nThe language has an Arabic-derived script of its own and a broad oral and written life. News, family conversation, popular music, poetry, and short online messages expose learners to different rhythms and word choices. A form heard around Kabul or Jalalabad may sound different from one heard near Kandahar or Peshawar, even when readers recognize a shared written form.\n\nIn Afghanistan, Pashto appears in public institutions and everyday multilingual life; in Pakistan, it is a major mother tongue recorded by the 2023 census. Cross-border connections bring speakers into more than one national language system. Those settings shape the vocabulary, spelling, and level of formality that a reader or listener encounters.",
    "wiki-pashto", "ldc-peculiarities", "celcar-portal", "pbs-census"
  ),
  origins: {
    overview: cited("Pashto's place in Eastern Iranian connects it to a long history of Iranian languages, but its own written record is more recent than the oldest Iranian inscriptions. Oral verse, inherited speech forms, and later manuscripts each preserve different parts of that history. Claims about a single ancient birthplace or an exact age for every modern dialect go beyond what the available evidence can show.\n\nThe language developed in contact with Persian and with languages of the Indian subcontinent. The border between today's Afghanistan and Pakistan is recent compared with many speech networks in the region. Reading its history through modern state boundaries alone hides older travel, trade, and literary exchange.", "wiki-pashto", "iranica-frontier", "iranica-khushal"),
    timeline: [
      { period: "Before a sustained written record", event: cited("The ancestors of Pashto developed within the Iranian branch of Indo-European. Spoken change and contact preceded the manuscripts available to modern researchers, so reconstructed family relationships tell us more than any proposed exact founding date.", "wiki-pashto", "glottolog-pashto") },
      { period: "Early modern centuries", event: cited("Pashto writing and verse became increasingly visible in the surviving record. Seventeenth-century Khushal Khan Khattak is a well-documented literary figure whose poetry and prose show a developed written culture, rather than its sudden beginning.", "iranica-khushal") },
      { period: "Twentieth century", event: cited("Schooling, dictionaries, print, and broadcasting gave written Pashto more public reach. Publishing also made choices about spelling and vocabulary more visible, while local speech continued to vary across regions.", "ldc-peculiarities", "loc-kandahar") },
      { period: "Today", event: cited("Pashto circulates through public media and phones as well as family and community speech. Different audiences may expect different dialects, levels of formality, or writing conventions, so a learner should attach a source and a location to each unfamiliar form.", "celcar-portal", "lingdocs-yeys") }
    ],
    contactHistory: cited("Persian has been a major neighboring literary and administrative language, and Urdu is an important contact language for many speakers in Pakistan. Borrowed Arabic words often arrived through wider Persianate and Islamic learning rather than by one simple route. Pashto also has inherited Iranian vocabulary and local expressions that cannot be explained as loans from either neighbor.\n\nA familiar-looking word can mislead. Compare its meaning and pronunciation in an actual Pashto sentence before importing the usage you know from Persian or Urdu. Those languages can help you recognize a layer of vocabulary, but they do not supply Pashto verb endings or agreement rules.", "iranica-frontier", "wiki-pashto", "pbs-census"),
    standardization: cited("Pashto has shared literary conventions, yet there is no single pronunciation used by every speaker. The LDC dialect survey describes several broad regional groupings and notes that writing does not consistently spell their different sounds. Its Kandahar-centered southwestern written reference describes one convention; publications and speakers also follow others.\n\nAfghan and Pakistani materials can also differ in letter choices, transliteration, and vocabulary. Learners who mix a spelling from one course with audio from another may mistake regular regional differences for random exceptions. Record the source and the intended audience before deciding a word has only one correct form.", "ldc-peculiarities", "lingdocs-yeys")
  },
  variants: {
    overview: cited("Dialect labels such as Northern, Southern, and Central summarize patterns across a continuum; they do not divide every village neatly. The clearest beginner-facing difference is how letters such as ښ and ږ sound. A textbook romanization may hide that difference by giving one symbol for a letter whose local realization changes.\n\nUse a label that names a location or speaker community when possible. Afghan written forms make a workable reading anchor here, while recordings from Kandahar, Kabul, Jalalabad, or Peshawar give the sound a real address. Social register matters too: the respectful plural pronoun تاسې or تاسو fits many conversations with people you have just met, while ته is familiar singular.", "ldc-peculiarities", "celcar-phrasebook", "lingdocs-yeys"),
    items: [
      { name: "Southwestern and Kandahar-area speech", note: cited("This group is often used as a reference in descriptions of literary Pashto. In the LDC account, ښ and ږ have retroflex fricative pronunciations here, unlike some northeastern realizations. Do not assume the written form alone tells you what a particular speaker will say.", "ldc-peculiarities") },
      { name: "Northeastern speech around Peshawar and Jalalabad", note: cited("Here the same letters can sound like x and g in the LDC description, a striking difference for newcomers who learned a southern recording first. Vocabulary and accent also vary locally. Listen to full sentences rather than trying to classify someone from one letter.", "ldc-peculiarities") },
      { name: "Other central and southeastern varieties", note: cited("The LDC overview gives further outcomes for ښ and ږ in central and southeastern areas. These are broad survey labels, not a promise that every person within a region uses an identical accent. Treat locally recorded speech as the deciding evidence for your own learning target.", "ldc-peculiarities") },
      { name: "Formal writing and daily speech", note: cited("News prose, classroom examples, and household speech can differ in vocabulary and sentence length even when their spelling looks similar. A polished written sentence can help you read, but natural conversation needs listening practice with people in the setting you hope to enter.", "celcar-portal", "tegey-robson") }
    ]
  },
  pronunciation: {
    overview: cited("Pashto pronunciation asks an English speaker to hear contrasts that familiar spellings do not mark for them. Retroflex consonants, consonants represented by several related Arabic-derived letters, and stress all deserve attention. Some letters also have regionally different sounds, so choose recordings from a known area before you memorize a romanized line.\n\nStart with short pairs and a whole phrase. Hear the word, copy its rhythm, and then check the script; reading a transcription first may make you impose English vowel values. The sample words below use approximate reading cues and should be heard in a recording before you imitate them.", "ldc-peculiarities", "lingdocs-minimal"),
    script: "Pashto Arabic-derived script with approximate Latin cues",
    soundSystem: cited("Pashto includes retroflex sounds made with the tongue tip curled back, including the consonants written ټ, ډ, and ړ. Contrasts like ت versus ټ and ر versus ړ can distinguish words, rather than merely changing an accent. The letters ښ and ږ show one of the largest regional sound shifts: southern retroflex fricatives correspond to other pronunciations in northern and central varieties.\n\nShort vowel marks are often absent from ordinary writing, so a learner cannot reliably pronounce every new word by sight. The alphabet includes letters for sounds inherited in Pashto and letters retained in Arabic-derived spellings. Sound, letter, and word origin do not always line up one to one.", "ldc-peculiarities", "lingdocs-minimal", "unicode-arabic"),
    prosody: cited("Stress can distinguish words and forms, but ordinary Pashto spelling usually leaves it unmarked. A learner who reads only letter by letter may get all the consonants right and still sound unfamiliar because the strong syllable is misplaced. Record the stressed syllable when you save a new word, and compare it in a complete spoken sentence.\n\nSpeech rate changes what you hear. In a greeting or short reply, unstressed vowels and little connecting words may pass quickly, while the accented word carries the message. Replay a few seconds of audio to hear these patterns in speech, then return to the alphabet chart as needed.", "ldc-peculiarities", "lingdocs-minimal"),
    learnerTraps: [
      "Reading ټ and ت as the same t sound, or treating ړ as an ordinary r.",
      "Assuming ښ and ږ have one fixed pronunciation across all regions.",
      "Adding written short vowels that the word does not contain, or guessing stress from spelling.",
      "Using a Latin transcription without checking which dialect and transcription system it represents."
    ],
    sampleWords: [
      { original: "بوت", transliteration: "boot", translation: "boot", note: "Compare with بوټ: the last consonant changes from plain ت to retroflex ټ." },
      { original: "بوټ", transliteration: "booṭ", translation: "shoe or boot", note: "This minimal pair lets you hear the retroflex consonant; the English glosses overlap." },
      { original: "سور", transliteration: "soor", translation: "red", note: "Listen to the final ordinary ر and compare it with ړ in سوړ." },
      { original: "سوړ", transliteration: "sooṛ", translation: "cold", note: "The vowel and final consonant contrast with سور; the Latin cue only approximates the sound." },
      { original: "مور", transliteration: "mor", translation: "mother", note: "Compare the final ر with the retroflex ړ of موړ." },
      { original: "موړ", transliteration: "moṛ", translation: "full, satiated", note: "A short everyday adjective that trains the retroflex contrast." }
    ]
  },
  writing: {
    overview: cited("Pashto uses a right-to-left Arabic-derived alphabet adapted for its own sounds. A page may look familiar to readers of Persian or Urdu, but it contains distinct letters and spelling habits. Short vowels are often not written in ordinary text, which makes known vocabulary easier to read than unfamiliar vocabulary.\n\nLearn the shapes in connected words rather than as a detached chart. Watch how a letter changes shape at the start, middle, or end of a word, and compare text with recorded speech. Once you can recognize a small set of common words, newspaper headlines and short messages repeat words you have already met.", "unicode-arabic", "ldc-peculiarities", "lingdocs-yeys"),
    primaryScript: "Pashto Arabic-derived script",
    romanization: cited("There is no single Latin spelling used by all courses. English-language materials may write the autonym as Pashto, Pashtu, or Pakhto because they follow different local pronunciations or transcription choices. The Latin cues in this guide are aids to finding a sound, not an official alternative to Pashto script; compare them with recordings from your target community.", "ldc-peculiarities", "tegey-robson"),
    spellingNorms: cited("Several Pashto letters resemble one another visually but carry different grammatical and lexical jobs. The five yeh letters—ي, ې, ی, ۍ, and ئ—are especially easy to collapse while typing, yet they should not be replaced at random. LingDocs describes Afghan spelling conventions and notes that Pakistani conventions may differ; keep the convention of the source you are reading.\n\nUnicode gives these signs separate code points, and visually similar Arabic or Persian characters can create search failures. If a dictionary search gives no result, check the exact final letter before deciding the word is absent. Copy a reliable keyboard layout and type whole examples instead of mixing code points from unrelated alphabets.", "lingdocs-yeys", "lingdocs-typing", "unicode-arabic"),
    styleNotes: [
      cited("Write complete words right to left and learn their connected forms. Some letters do not join the next letter, so a space-like visual break is not necessarily a word boundary.", "unicode-arabic"),
      cited("Keep a notebook of source spelling, audio, and meaning together. Romanization helps at first, but a script-only review trains the skill you need for actual pages and messages.", "celcar-phrasebook", "lingdocs-yeys"),
      cited("Expect formal writing to preserve forms you may not hear in every local recording. Read the written line and the spoken line as two pieces of evidence about the same language.", "ldc-peculiarities", "tegey-robson")
    ]
  },
  grammar: {
    overview: cited("Pashto sentences often put the verb after the object, and verbs carry information about person, number, tense, and aspect. Nouns and adjectives participate in gender and case patterns. The most surprising change for many learners comes in the past tense of transitive verbs, where agreement and pronoun forms work differently from simple present clauses.\n\nYou do not need to master every paradigm before speaking. Learn a small group of complete sentences, compare what changes, and then add the grammar name. The sample clauses here follow commonly taught Afghan spellings and should be checked against your target dialect's recordings.", "lingdocs-past", "lingdocs-gender", "tegey-robson"),
    typologicalProfile: cited("Pashto has a typical subject–object–verb order, postpositions and circumpositions, and a rich verbal system. It distinguishes grammatical masculine and feminine, and some noun and pronoun forms change with case. These features give short words such as pronouns and endings a large role in meaning, even when the larger content words look familiar.", "wiki-pashto-grammar", "lingdocs-gender", "lingdocs-past"),
    morphology: cited("Gender appears in nouns and adjectives, and verb forms agree with the relevant argument. The contrast between وږی and وږې in a statement of hunger is a practical first reminder that a speaker's or referent's gender can affect an adjective. Verb stems and aspect are a separate challenge: a new tense is not always made by adding a simple ending to the form you know.\n\nMake small cards for a full form and its context. A list of bare dictionary headwords cannot show all the gender, case, and past-tense patterns you will meet in real sentences. When a form surprises you, look for its lemma and the grammatical role it plays before treating it as a new word.", "celcar-phrasebook", "lingdocs-gender", "lingdocs-past", "lingdocs-aspect"),
    syntax: cited("Objects generally precede the verb, while prepositions and postpositions can frame a noun phrase. Questions often retain much of the statement's order, with a question word in the relevant slot and a changed intonation. Respectful second-person forms also matter: تاسې or تاسو pairs with plural verb forms when addressing one person politely or several people.", "wiki-pashto-grammar", "celcar-phrasebook", "celcar-portal"),
    advancedPainPoints: [
      "Tracking which argument a past transitive verb agrees with.",
      "Recognizing a verb's aspect or alternate stem in fast speech.",
      "Choosing gender and case forms while speaking without long pauses.",
      "Interpreting weak pronouns and small particles in dense sentences."
    ],
    topics: [
      { title: "A complete clause and verb-final order", body: cited("A simple present sentence often places its object before the verb. In زه ډوډۍ خورم, the eating verb closes the clause. Once you can hear the order in a short example, look for it in news captions and dialogues, where longer phrases may intervene.", "wiki-pashto-grammar", "afghan-schoolbook"), example: "زه ډوډۍ خورم.", exampleTranslation: "I eat food." },
      { title: "Gender in everyday descriptions", body: cited("Pashto adjectives can show masculine and feminine forms. A male speaker can say زه وږی یم for 'I am hungry,' while a female speaker uses زه وږې یم in the phrasebook's examples. Keep both forms with their speaker context instead of memorizing one as universal.", "celcar-phrasebook", "lingdocs-gender"), example: "زه وږې یم.", exampleTranslation: "I am hungry (said by a woman)." },
      { title: "The copula and respectful address", body: cited("The verb for 'be' changes with person and number. تاسې څنګه یاست؟ uses a respectful or plural 'you' and the matching verb; compare the reply زه ښه یم. Practice these as a pair so the verb ending becomes part of the greeting rather than an abstract table.", "celcar-portal", "celcar-phrasebook"), example: "تاسې څنګه یاست؟", exampleTranslation: "How are you? (respectful or plural)" },
      { title: "Question words inside familiar frames", body: cited("Questions can reuse the structure of a known statement. In ستاسو نوم څه دئ؟, the question word څه asks for the name, while ستاسو marks respectful 'your.' The portal's spelling of the final copula is retained here, so compare it with the convention in your own course.", "celcar-portal"), example: "ستاسو نوم څه دئ؟", exampleTranslation: "What is your name? (respectful)" },
      { title: "Past transitive alignment", body: cited("Past clauses with a transitive verb require a different agreement analysis from many present clauses. A past agent can appear in an oblique form, while the verb's agreement is associated with the object. Work through a textbook paradigm with both singular and plural objects before inventing past-tense sentences; the contrast is systematic, but one English translation can hide it.", "lingdocs-past", "afghan-schoolbook"), example: "ما کتاب ولوست.", exampleTranslation: "I read the book." },
      { title: "Aspect as a separate choice", body: cited("Pashto contrasts imperfective and perfective ways of presenting an event. The choice interacts with tense and the shape of the verb, so learn each new verb with several complete forms. When a course gives two stems, annotate when each occurs instead of calling the second one irregular without further analysis.", "lingdocs-aspect", "lingdocs-past"), example: "زه ډوډۍ خورم.", exampleTranslation: "I eat food / I am eating food, depending on context." }
    ]
  },
  whereSpoken: {
    overview: cited("Pashto is strongly associated with Afghanistan and Pakistan, but neither country has one uniform language map. Pashto speakers also live in cities far from an ancestral district and in diasporas where children may grow up with several household languages. The 2023 Pakistan census reported Pushto as the mother tongue of 18.15% of respondents; that figure is a census category within Pakistan, not a worldwide speaker count.\n\nMaps usually simplify multilingual households, movement, and mixed neighborhoods. If your goal is conversation with relatives or colleagues, ask which town, family network, or media variety they use. That answer will guide your audio choices better than a national label alone.", "pbs-census", "wiki-pashto", "ldc-peculiarities"),
    regions: [
      { place: "Afghanistan", note: cited("Pashto is used in public life and in many households, with important regional differences in pronunciation and vocabulary. Kabul, Kandahar, Jalalabad, and other centers provide different listening anchors. Dari and other Afghan languages also share many speakers' daily lives.", "wiki-pashto", "ldc-peculiarities") },
      { place: "Pakistan", note: cited("Pashto is a major mother tongue, especially in the northwest but also in urban communities elsewhere. The 2023 census places Pushto at 18.15% of reported mother tongues nationwide. Urdu and other local languages commonly form part of speakers' wider environment.", "pbs-census", "wiki-pashto") },
      { place: "Diaspora communities", note: cited("Migration has brought Pashto into homes, community events, radio, and online spaces far beyond the two main countries. Such communities may keep a local family variety while children learn the majority language of a new country. Ask speakers which variety they want you to use with them.", "wiki-pashto", "celcar-portal") }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited("Pashto asks an English-speaking learner to handle a new right-to-left script, sound contrasts, gender and case, and a verb system whose past transitive patterns may feel unfamiliar. Materials also reflect more than one regional pronunciation and written convention. Progress becomes steadier when you settle on one course and one recording community for the first stage, then expand deliberately.\n\nDifficulty is personal. A learner who already reads Arabic-derived script saves time on letter shapes; a Persian or Urdu speaker may recognize some loans but still needs Pashto grammar and local pronunciation. Someone with family access may hear daily speech that a textbook learner has to seek out.", "ldc-peculiarities", "lingdocs-past", "unicode-arabic"),
    easierAspects: [
      "The right-to-left page becomes much less intimidating once common letter joins are familiar.",
      "Short, repeated greetings give immediate material for listening and speaking.",
      "A known Persian or Urdu loan can help with meaning after its Pashto use is checked.",
      "A clear choice of target speaker or region keeps early audio practice focused."
    ],
    hardAspects: [
      "Regional pronunciations of ښ and ږ can make one written word sound different across recordings.",
      "Unwritten short vowels and unmarked stress leave some pronunciation uncertain on first sight.",
      "Gender, case, aspect, and past transitive agreement require more than word-for-word substitution.",
      "Different spelling or romanization systems can make dictionary lookup feel inconsistent."
    ],
    plateauRisks: [
      "Reading only romanized phrase lists and never gaining fluency in Pashto script.",
      "Using one formal text as the only model for casual conversation.",
      "Memorizing verb tables without hearing complete clauses from a consistent dialect."
    ],
    workload: cited("For the first month, spend a short daily session on connected script and another on replaying a few seconds of one speaker's audio. Learn greetings, needs, names, and places as complete exchanges. Once those are comfortable, work through one beginner course in order and add a small weekly conversation or recording task.\n\nLater, split study between listening, reading, and building sentences. Keep a correction log for stress, gender, case, and verbs, then revisit it with new examples. A few minutes of focused listening every day usually reveals more than an occasional long session spent only on vocabulary lists.", "celcar-phrasebook", "tegey-robson", "lingdocs-past")
  },
  advancedLearning: {
    strategy: cited("At an intermediate level, build parallel collections of short recordings and their written equivalents. Read a news paragraph, hear a report on the same topic, and note where the spoken version shortens, replaces, or stresses a word differently. Mark the speaker's location, the publication's audience, and the date, because a form that looks unfamiliar may belong to a local variety rather than a new grammatical rule.\n\nChoose one grammar question each week: a past transitive clause, a yeh ending, or a postposition. Find several natural examples before writing your own. Ask a teacher or trusted speaker to correct full sentences and explain which variety their correction belongs to.\n\nMove into other dialects only after your first listening anchor has become stable.", "ldc-peculiarities", "lingdocs-past", "lingdocs-yeys"),
    mediaPractice: cited("Use short news audio or interviews for repeatable listening, and keep poetry or songs as a separate register. First listen for the main point without a transcript, then read or transcribe a few lines and listen again. A proverb, verse, or formal broadcast may use expressions that sound memorable but do not fit an ordinary greeting; note where and with whom each expression belongs.\n\nCompare two speakers on the same topic only after you can follow one reasonably well. This reveals regional sounds without making every unknown syllable feel like a failure. Preserve the original audio link in your notes so you can revisit your first hearing later.", "celcar-portal", "loc-kandahar", "ldc-peculiarities"),
    dictionariesAndCorpora: cited("A dictionary entry should give more than an English equivalent. Check spelling, gender, inflected forms, an example sentence, and the dialect or publication behind the entry where available. LingDocs provides searchable words and grammar explanations, while the Universal Dependencies Pashto treebank offers annotated sentences for learners comfortable with linguistic tags.\n\nSearch with the exact Pashto letters before assuming a word is missing. Similar yeh shapes and keyboard substitutions can defeat a literal search. Save whole phrases as well as headwords, because a translation rarely tells you how a postposition or small pronoun fits in the sentence.", "lingdocs-home", "ud-pashto", "lingdocs-typing"),
    resources: [
      { type: "course", title: "Beginning Pashto", url: "https://files.eric.ed.gov/fulltext/ED364085.pdf", level: "beginner", description: cited("A structured older course by Tegey and Robson with dialogues and grammar. Its Afghan-centered pronunciation anchor and publication date make the dialect and register worth checking against current recordings.", "tegey-robson") },
      { type: "dictionary", title: "LingDocs Pashto Dictionary", url: "https://dictionary.lingdocs.com/", level: "all", description: cited("Search written words and examine forms alongside the linked grammar. It helps when a sentence contains an unfamiliar inflection rather than a new dictionary headword.", "lingdocs-home") },
      { type: "corpus", title: "Universal Dependencies Pashto Prince Treebank", url: "https://universaldependencies.org/treebanks/ps_prince/", level: "advanced", description: cited("An annotated Pashto sentence collection for checking syntax and morphology. It is a small research resource, so use it to inspect patterns rather than as a complete map of spoken usage.", "ud-pashto") }
    ]
  },
  wordsAndTexts: {
    overview: cited("A Pashto word can tell several stories at once: inherited vocabulary, regional pronunciation, a borrowed literary term, or a grammatical ending that changes with context. Learn new words inside short spoken or written passages. For texts, move between a phrasebook exchange, a short report, a poem, and a family story; each teaches a different kind of language.\n\nThe sample words below are common building blocks, but their Latin cues are approximate. Listen to speakers from your target community and keep the Pashto spelling in your notes. Proverbs and poetic lines are memorable reading material, yet they are not a substitute for ordinary conversation.", "celcar-portal", "lingdocs-minimal", "iranica-khushal", "wiki-pashto-literature"),
    notableWords: [
      { term: "پښتو", transliteration: "Pashto / Pakhto", meaning: "Pashto language", note: cited("The autonym's Latin spelling varies partly because the letter ښ has different regional pronunciations. Use the Pashto script when searching across romanization systems.", "ldc-peculiarities") },
      { term: "سلام", transliteration: "salām", meaning: "hello; peace", note: cited("A common greeting also familiar in neighboring languages. In a conversation, listen for the response and for the level of formality around it.", "celcar-portal", "celcar-phrasebook") },
      { term: "مننه", transliteration: "manəna", meaning: "thanks", note: cited("An everyday reply. Practice it after a real request or offer so its rhythm stays attached to a social situation.", "celcar-portal") },
      { term: "ښه", transliteration: "ṣa / kha, regionally", meaning: "good; well", note: cited("This short word exposes the regional sound of ښ and appears in replies and welcome expressions. A Latin rendering from one course may not match another speaker's voice.", "celcar-portal", "ldc-peculiarities") },
      { term: "نوم", transliteration: "num", meaning: "name", note: cited("The question about someone's name gives you an early frame for practicing respectful address and a complete answer.", "celcar-portal") },
      { term: "کور", transliteration: "kor", meaning: "home; house", note: cited("This everyday noun appears in warm social expressions such as کور مو ودان. Learn the expression's use before translating each part literally.", "celcar-phrasebook") },
      { term: "ډوډۍ", transliteration: "ḍoḍay", meaning: "bread; food; meal", note: cited("The word can refer to a meal in ordinary clauses and phrasebook examples. Its two retroflex ډ sounds are good pronunciation practice.", "afghan-schoolbook", "lingdocs-minimal") }
    ],
    loanwordLayers: cited("Contact with Persian, Arabic, Urdu, and other languages has left vocabulary layers in Pashto, but shared spelling alone cannot identify a word's route into the language. A loan may take Pashto pronunciation or endings, and a familiar Persian word may carry a different everyday meaning. Keep the language's inherited Eastern Iranian core in view as well.\n\nIn reading, ask what kind of text you have. Religious and learned prose, a government notice, and household talk can favor different vocabulary. The goal is to choose a word that fits a speaker and setting, not to maximize the number of cognates you recognize.", "iranica-frontier", "wiki-pashto", "ldc-peculiarities"),
    idioms: [
      { original: "کار په کولو کیږي", transliteration: "Kār pə kəwəlo kiʒi", translation: "Work gets done by doing it.", note: "A proverb urging action; the precise sound of ږ varies by region." },
      { original: "ژرنده که د پلار ده هم په وار ده", transliteration: "Zhranda ka də plār da ham pə wār da", translation: "Even if the mill is your father's, you still wait your turn.", note: "A reminder that familiar connections do not cancel a fair order." },
      { original: "غوا که توره ده، شيدې يې سپينې دي", transliteration: "Ghwā ka tora da, shide ye spine di", translation: "A black cow can give white milk.", note: "Often read as a warning against judging value by appearance; spelling and delivery vary." },
      { original: "اوبه په ډانګ نه بېلېږي", transliteration: "Obə pə ḍāng nə beleʒi", translation: "Water cannot be divided with a stick.", note: "Used for a bond that a superficial quarrel cannot sever; ask a speaker when it fits." }
    ],
    textGenres: ["Daily dialogue and family messages", "News reports and interviews", "Landay or tappa couplets and other oral verse", "Printed poetry and prose", "Public notices and classroom writing", "Short online posts"]
  },
  relationships: {
    overview: cited("Pashto's Iranian ancestry makes it a relative of Persian, but the two occupy different Iranian branches and are separate languages. Urdu belongs to the Indo-Aryan branch, though many Pashto speakers meet it in Pakistan and shared vocabulary can make an occasional word look familiar. Compare full sentences to see the difference: ancestry and contact are different explanations for resemblance.\n\nThe related-language links here serve distinct purposes. Persian provides a family comparison and a major historical contact language; Urdu provides a living contact comparison in Pakistan. Neither should stand in for a Pashto speaker's own variety, grammar, or cultural setting.", "wiki-pashto", "iranica-frontier", "pbs-census"),
    languages: relatedLanguages
  },
  culturalNotes: "Pashto poetry and proverbs are living forms rather than just historical specimens. Khushal Khan Khattak is one documented early modern literary voice; short landay or tappa couplets also circulate through oral traditions, including women's voices.\n\nRead a verse with its performer, date, and setting where possible. A line that works in a song or proverb may sound grand or misplaced in an everyday exchange.",
  resources: [
    { type: "course", title: "CeLCAR Pashto Language Portal", url: "https://celcar.indiana.edu/materials/language-portal/pashto.html", level: "beginner", description: cited("An Indiana University starting point with language background and common phrases. Use its recordings and written lines together, and note that its romanization reflects a teaching convention.", "celcar-portal") },
    { type: "book", title: "CeLCAR Pashto Phrasebook", url: "https://celcar.indiana.edu/materials/phrasebooks2/pashto_phrasebook_5x7.pdf", level: "beginner", description: cited("A compact PDF of greetings and practical exchanges with Pashto script and Latin cues. Keep the polite and gendered forms attached to their usage notes.", "celcar-phrasebook") },
    { type: "course", title: "LingDocs Pashto Grammar", url: "https://grammar.lingdocs.com/", level: "all", description: cited("A searchable grammar that explains verb aspect, past transitive clauses, noun gender, and spelling issues. Pair each explanation with a spoken example from your target variety.", "lingdocs-home", "lingdocs-past") },
    { type: "dictionary", title: "LingDocs Pashto Dictionary", url: "https://dictionary.lingdocs.com/", level: "all", description: cited("A practical lookup tool for written forms and inflections. Check exact yeh letters if a copied word does not appear in a search.", "lingdocs-home", "lingdocs-typing") },
    { type: "course", title: "Beginning Pashto", url: "https://files.eric.ed.gov/fulltext/ED364085.pdf", level: "beginner", description: cited("A full introductory course with dialogues and explanations. Its age and Afghan pronunciation focus make it best paired with current recordings and a clear local goal.", "tegey-robson") },
    { type: "corpus", title: "UD Pashto Prince Treebank", url: "https://universaldependencies.org/treebanks/ps_prince/", level: "advanced", description: cited("Annotated sentences support careful study of forms and syntax. It is a limited corpus, so verify any general claim against broader texts and speakers.", "ud-pashto") }
  ],
  relatedLanguages,
  phrases: [
    { original: "سلام", transliteration: "salām", translation: "Hello.", usageNote: "A common greeting; the reply and extra courtesies depend on the setting." },
    { original: "تاسې څنګه یاست؟", transliteration: "tāse tsənga yāst?", translation: "How are you?", usageNote: "Respectful or plural address in the CeLCAR portal's Afghan teaching convention." },
    { original: "زه ښه یم، مننه.", transliteration: "zə ṣa yəm, manəna", translation: "I am well, thank you.", usageNote: "The sound represented here by ṣ varies regionally; listen to a local recording." },
    { original: "ستاسو نوم څه دئ؟", transliteration: "stāso num tsa dəy?", translation: "What is your name?", usageNote: "Respectful address; spelling retained from the CeLCAR portal." },
    { original: "تاسو د کوم ځای یاست؟", transliteration: "tāso də kom dzāy yāst?", translation: "Where are you from?", usageNote: "A polite question; answer with the place name and practice the whole exchange." },
    { original: "مننه", transliteration: "manəna", translation: "Thank you.", usageNote: "An everyday expression of thanks." },
    { original: "ښه راغلاست", transliteration: "ṣa rāghlāst", translation: "Welcome.", usageNote: "Said to someone arriving; pronunciation of ښ depends on variety." },
    { original: "په مخه مو ښه", transliteration: "pə moxa mo ṣa", translation: "Goodbye.", usageNote: "A parting expression; do not translate each word as an ordinary sentence." },
    { original: "زه وږی یم.", transliteration: "zə wəʒay yəm", translation: "I am hungry (said by a man).", usageNote: "The adjective changes with the speaker's gender in this phrasebook example." },
    { original: "زه وږې یم.", transliteration: "zə wəʒe yəm", translation: "I am hungry (said by a woman).", usageNote: "Compare وږې with masculine وږی." },
    { original: "کور مو ودان", transliteration: "kor mo wadān", translation: "May your home prosper; thank you.", usageNote: "A warm expression whose force depends on the social setting; learn it from a speaker." }
  ],
  sources: [
    { id: "wiki-pashto", title: "Pashto", url: "https://en.wikipedia.org/wiki/Pashto", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-pashto-grammar", title: "Pashto grammar", url: "https://en.wikipedia.org/wiki/Pashto_grammar", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-pashto-literature", title: "Pashto literature and poetry", url: "https://en.wikipedia.org/wiki/Pashto_literature_and_poetry", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "glottolog-pashto", title: "Pashto family", url: "https://glottolog.org/resource/languoid/id/pash1269", publisher: "Glottolog", accessedAt: "2026-09-27" },
    { id: "ldc-peculiarities", title: "Language Specific Peculiarities: Pashto", url: "https://catalog.ldc.upenn.edu/docs/LDC2016S09/LSP_104_final.pdf", publisher: "Linguistic Data Consortium", accessedAt: "2026-09-27" },
    { id: "pbs-census", title: "National Census Report 2023", url: "https://www.pbs.gov.pk/wp-content/uploads/2020/07/National-Census-Report-2023-1.pdf", publisher: "Pakistan Bureau of Statistics", accessedAt: "2026-09-27" },
    { id: "celcar-portal", title: "Pashto Language Portal", url: "https://celcar.indiana.edu/materials/language-portal/pashto.html", publisher: "Indiana University CeLCAR", accessedAt: "2026-09-27" },
    { id: "celcar-phrasebook", title: "Pashto Phrasebook", url: "https://celcar.indiana.edu/materials/phrasebooks2/pashto_phrasebook_5x7.pdf", publisher: "Indiana University CeLCAR", accessedAt: "2026-09-27" },
    { id: "afghan-schoolbook", title: "Pashto Grade 3 textbook", url: "https://moe.gov.af/sites/default/files/2019-12/P_G-3_Pashto.pdf", publisher: "Afghanistan Ministry of Education", accessedAt: "2026-09-27" },
    { id: "lingdocs-minimal", title: "Minimal Pairs", url: "https://grammar.lingdocs.com/writing/minimal-pairs/", publisher: "LingDocs", accessedAt: "2026-09-27" },
    { id: "lingdocs-yeys", title: "The Five Yeys", url: "https://grammar.lingdocs.com/writing/the-five-yeys/", publisher: "LingDocs", accessedAt: "2026-09-27" },
    { id: "lingdocs-typing", title: "Typing Issues", url: "https://grammar.lingdocs.com/writing/typing-issues/", publisher: "LingDocs", accessedAt: "2026-09-27" },
    { id: "lingdocs-gender", title: "Noun Gender", url: "https://grammar.lingdocs.com/nouns/nouns-gender/", publisher: "LingDocs", accessedAt: "2026-09-27" },
    { id: "lingdocs-past", title: "Past Verbs", url: "https://grammar.lingdocs.com/verbs/past-verbs/", publisher: "LingDocs", accessedAt: "2026-09-27" },
    { id: "lingdocs-aspect", title: "Verb Aspect", url: "https://grammar.lingdocs.com/verbs/verb-aspect/", publisher: "LingDocs", accessedAt: "2026-09-27" },
    { id: "lingdocs-home", title: "LingDocs Pashto Resources", url: "https://www.lingdocs.com/", publisher: "LingDocs", accessedAt: "2026-09-27" },
    { id: "unicode-arabic", title: "Unicode Standard, Chapter 9: Middle Eastern Scripts", url: "https://www.unicode.org/versions/Unicode18.0.0/core-spec/chapter-9/", publisher: "Unicode Consortium", accessedAt: "2026-09-27" },
    { id: "tegey-robson", title: "Beginning Pashto", url: "https://files.eric.ed.gov/fulltext/ED364085.pdf", publisher: "Center for Applied Linguistics", accessedAt: "2026-09-27" },
    { id: "iranica-frontier", title: "Indo-Iranian Frontier Languages and the Influence of Persian", url: "https://www.iranicaonline.org/articles/indo-iranian-frontier-languages-and-the-influence-of-persian/", publisher: "Encyclopaedia Iranica", accessedAt: "2026-09-27" },
    { id: "iranica-khushal", title: "Khushal Khan Khattak", url: "https://www.iranicaonline.org/articles/%E1%B8%B5os%E1%B8%A5al-khan-%E1%B8%B5a%E1%B9%AD%E1%B9%ADak/", publisher: "Encyclopaedia Iranica", accessedAt: "2026-09-27" },
    { id: "loc-kandahar", title: "Kandahār magazine record", url: "https://www.loc.gov/item/2010344413/", publisher: "Library of Congress", accessedAt: "2026-09-27" },
    { id: "ud-pashto", title: "UD Pashto Prince Treebank", url: "https://universaldependencies.org/treebanks/ps_prince/", publisher: "Universal Dependencies", accessedAt: "2026-09-27" }
  ]
} satisfies LanguageGuide;
