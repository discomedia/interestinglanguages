import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Ukrainian",
    slug: "ukrainian",
    relationship: "East Slavic sister language",
    explanation: cited(
      "Russian and Ukrainian share East Slavic ancestry, grammar, and many words. They have distinct modern standards, sound systems, writing traditions, and identities. How much a speaker understands depends greatly on exposure.",
      "wiki-russian",
      "glottolog-russian"
    )
  },
  {
    name: "Belarusian",
    relationship: "East Slavic sister language",
    explanation: cited(
      "Belarusian is another close East Slavic relative. Shared words and similar case and verb systems may help a Russian learner start reading it. Belarusian pronunciation, spelling, and vocabulary still require study of their own, and bilingual speakers use both languages in varied ways.",
      "wiki-russian",
      "glottolog-russian"
    )
  },
  {
    name: "Polish",
    slug: "polish",
    relationship: "West Slavic relative",
    explanation: cited(
      "Polish is a more distant Slavic relative. It also has cases and aspect but uses Latin letters and has different sounds. Similar words may be inherited relatives, borrowings, or false friends.",
      "wiki-russian",
      "glottolog-russian"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const russianGuide = {
  slug: "russian",
  name: "Russian",
  autonym: "Русский",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Russian is an East Slavic language written in Cyrillic. Hear how stress changes a word, then see how endings and verb choices shape everyday stories across many communities.",
  family: "Indo-European, Slavic",
  macroRegion: "Eastern Europe, North Asia, the Caucasus, Central Asia, and global diasporas",
  primaryScript: "Cyrillic",
  difficultyLabel: "Demanding",
  learnerHook: "You can learn the letters quickly. Then listen for the vowels that shrink without stress, and notice how a small change to a verb can change the story.",
  hero: {
    imageAlt: "Contemporary Russian Cyrillic type alongside handwritten text, showing the language's print and cursive traditions.",
    callToActionLabel: "Explore Russian in use"
  },
  classification: "Russian belongs to the East Slavic branch of Indo-European. The taught standard grew around central Russian speech, while communities across Eurasia and abroad use many regional forms.",
  speakerCommunity: "A UN Regional Information Centre page says more than 258 million people speak Russian worldwide, without dating the underlying estimate or explaining its method. People use Russian as a first or additional language, and sources count home language, ability, and daily use differently. Russia makes it a state language, and the UN uses it as one of its six official languages.\n\nRussian also belongs to families and communities in Ukraine, Central Asia, the Caucasus, the Baltic states, Israel, Germany, and elsewhere. Its role might be a home language, a shared second language, or an inheritance from imperial and Soviet rule. Russia's full-scale invasion of Ukraine in 2022 has made public language choices more politically charged.\n\nA person's language tells you nothing certain about their citizenship, ethnicity, or political views.",
  facts: [
    { label: "Family", value: "Indo-European · Slavic · East Slavic" },
    { label: "Speakers worldwide", value: "More than 258 million in an undated UN Regional Information Centre estimate" },
    { label: "Alphabet", value: "33 Cyrillic letters" },
    { label: "Core grammar", value: "Six productive cases, three genders, two verbal aspects" },
    { label: "Standard base", value: "Central Russian, historically centered on Moscow" },
    { label: "International role", value: "One of six official UN languages" }
  ],
  introduction: cited("Russian is spoken across Russia and by families and communities in Ukraine, Central Asia, the Caucasus, the Baltic states, Israel, Germany, and elsewhere. It may be a home language, a shared additional language, or part of a family’s history with imperial and Soviet institutions. An undated UN regional estimate puts the worldwide total above 258 million, although it does not explain how that figure was counted.\n\nA person’s language does not establish their citizenship, ethnicity, or political views. Russian belongs to the East Slavic branch of the Indo-European family, alongside Ukrainian and Belarusian. Its Cyrillic alphabet records a long literary and public history, while contemporary speech varies across places and communities.\n\nIn standard pronunciation, stress can change how written vowels sound: the three о letters in молоко́, “milk,” do not all sound alike. Noun endings and verb forms also carry much of a sentence’s meaning. Russian is one of the United Nations’ six official languages, as well as a language of everyday family conversation.", "un-estimate", "un-russian", "glottolog-russian", "wiki-russian", "wiki-phonology", "unicode-cyrillic"),
  origins: {
    overview: cited(
      "Russian grew from East Slavic speech. In the medieval lands often called Kyivan Rus', people spoke related varieties, while religious writers used Church Slavonic in books. Today's Russian, Ukrainian, and Belarusian did not yet exist as separate modern standards.\n\nAs political centers and writing traditions developed, these varieties followed different paths. Moscow's growing influence gave central Russian speech a larger role in administration and print. Writers drew on both everyday speech and Church Slavonic, whose words could sound learned or solemn.\n\nPrinting, science, and European contact brought new subjects into eighteenth-century prose. Pushkin later became a symbol of modern literary Russian because his work joined several styles so effectively. Many writers, editors, teachers, and readers shaped the standard; no single poet invented it.",
      "wiki-russian",
      "unicode-cyrillic",
      "un-russian"
    ),
    timeline: [
      {
        period: "10th–13th centuries",
        event: cited(
          "People spoke East Slavic varieties among other languages. Church writers used forms of Church Slavonic in early Cyrillic. Birch-bark letters and chronicles show different kinds of written language.",
          "wiki-russian",
          "unicode-cyrillic"
        )
      },
      {
        period: "14th–17th centuries",
        event: cited(
          "East Slavic varieties changed as political and cultural centers separated. The growing Muscovite state spread Moscow-area forms through its institutions. Writers still drew heavily on Church Slavonic.",
          "wiki-russian",
          "dialect-atlas"
        )
      },
      {
        period: "18th–19th centuries",
        event: cited(
          "Peter I introduced a new type style for secular Cyrillic printing. Writers and officials expanded Russian prose for science, government, and literature. French and German shaped elite vocabulary, while Pushkin later came to represent a broader change in literary style.",
          "wiki-russian",
          "unicode-cyrillic",
          "un-russian"
        )
      },
      {
        period: "1917–1991",
        event: cited(
          "The 1917–18 reform removed several letters from ordinary spelling. Soviet schools, publishing, broadcasting, and migration spread standard Russian widely. This process often displaced local Russian dialects and other languages, while many people used Russian to communicate across linguistic communities.",
          "wiki-russian",
          "wiki-dialects"
        )
      },
      {
        period: "1991 to the present",
        event: cited(
          "After the Soviet Union ended, new states set their own language policies. Russian-speaking communities took different paths as migration and media changed their connections. Check each country's present rules and actual usage separately.",
          "wiki-russian",
          "un-russian"
        )
      }
    ],
    contactHistory: cited(
      "Church Slavonic gave Russian many religious and learned words. Turkic languages contributed words for trade, food, and daily life; Dutch and German shaped maritime and technical vocabulary; French influenced elite speech; and English supplies many newer business and computing terms. Russian speakers also borrowed from neighbors throughout the empire and Soviet Union.\n\nThe word вокза́л, 'railway station,' came through the English place name Vauxhall. Its history tells you where the word traveled, not how people use it today. Check a current dictionary or a dated corpus example before assuming a loan sounds formal, old, or foreign to speakers.",
      "wiki-russian",
      "ruscorpora"
    ),
    standardization: cited(
      "Schools, publishers, editors, and dictionaries teach a standard based largely on central Russian speech. Gramota.ru brings together dictionaries of spelling, stress, pronunciation, and meaning. Speakers also disagree about some forms, and dictionaries record variation.\n\nRussian has a separate letter ё, but ordinary print often uses е in its place. Editors keep the dots when a name or meaning needs them, and learner texts commonly show them. Check a current dictionary when you are unsure about a word's spelling or stress.",
      "gramota",
      "wiki-russian",
      "wiki-dialects"
    )
  },
  variants: {
    overview: cited(
      "Schooling, travel, and broadcasting brought many city speakers closer to the standard, but Russian still varies across places and social settings. Traditional northern and southern dialects differ in vowel sounds, the sound of г, endings, and vocabulary. The dialect atlas maps these patterns.\n\nPeople also speak differently with friends, at work, and in public writing. Russian spoken in Kazakhstan, Latvia, Dagestan, Ukraine, Israel, or Germany can reflect long contact with local languages. A local word or intonation pattern does not make a speaker's Russian defective, and it does not automatically define a separate dialect.",
      "dialect-atlas",
      "wiki-dialects",
      "ruscorpora"
    ),
    items: [
      { name: "Standard literary Russian", note: cited("Schools, publishers, and broadcasters teach and use this shared norm. Speakers can use it in relaxed conversation as well as careful public speech; the word 'literary' does not require a formal tone.", "gramota", "wiki-russian") },
      { name: "Northern Russian dialects", note: cited("In some northern areas, speakers keep an unstressed о clearer than standard speakers do. Linguists call this pattern okanye. Northern dialects differ among themselves, so one sound cannot describe them all.", "dialect-atlas", "wiki-dialects") },
      { name: "Southern Russian dialects", note: cited("Many southern varieties reduce an unstressed о toward an a-like sound, a pattern called akanye. Some areas also use a breathier sound for г and have different pronouns or endings. These patterns cross administrative borders.", "dialect-atlas", "wiki-dialects") },
      { name: "Urban colloquial Russian", note: cited("Friends shorten set phrases, use small conversational words, and leave sentences unfinished when the meaning is clear. Russian speakers use the term просторечие for more specifically marked nonstandard speech. It does not simply mean all casual conversation.", "wiki-dialects", "ruscorpora") },
      { name: "Heritage and contact varieties", note: cited("Families abroad may keep an older expression, create a new one, or borrow a local word. Multilingual communities in Eurasia may draw on neighboring languages for names, conversational habits, and vocabulary. Describe a form through the community that uses it rather than measuring it only against a Moscow textbook.", "ruscorpora", "wiki-russian") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Russian stress tells you which vowel stands out. In молоко́, 'milk,' only the final о has its full o sound in common standard speech. Stress can shift between forms: го́род means 'city,' while города́ means 'cities.'\n\nConsonants also come in hard and soft forms. To make a soft consonant, raise the middle of your tongue toward the roof of your mouth. Compare мат, 'mat,' with мать, 'mother': the final ь has no sound of its own but marks a soft т.\n\nAt the end of a word, a written voiced consonant often loses its voicing, so spelling alone cannot supply the whole pronunciation.",
      "wiki-phonology",
      "gramota"
    ),
    script: "Russian Cyrillic; acute accents are added here for learner stress and are not normally printed",
    soundSystem: cited(
      "Most descriptions treat Russian as having five basic vowel sounds, though their exact sound changes with stress and nearby consonants. Unstressed о and а often sound alike. After soft consonants, е and я also become less distinct without stress.\n\nThe vowel ы does not sound like English 'ee,' and Russian р usually has a tap or trill. In здравствуйте, 'hello,' everyday speech simplifies the long consonant cluster. Listen to a speaker before trying to pronounce every written letter separately.",
      "wiki-phonology",
      "gramota"
    ),
    prosody: cited(
      "You cannot reliably guess stress from spelling, so look it up with each new word. The same letters can name different things: му́ка means 'torment,' while мука́ means 'flour.' A dictionary shows the stress mark even though everyday printing usually leaves it out.\n\nYour voice also signals whether a sentence is a question, surprise, or plain statement. In Ты до́ма?, 'Are you home?', the pitch often rises on до́ма. Listen to whole exchanges and copy the pitch movement as well as the stressed syllables.",
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
    ]
  },
  writing: {
    overview: cited(
      "Russian uses 33 letters from the Cyrillic script, which many other languages also use. Some shapes look like Latin letters but sound different: Russian В sounds like v, Н like n, Р like r, and С like s. Learn those words in Cyrillic from the start.\n\nThe signs ь and ъ do not name vowel sounds; they change how nearby letters work. Е, Ё, Ю, and Я can begin with a y-like sound, while after many consonants they signal softness. Cursive changes several letter shapes, especially д and т, so handwritten notes take separate practice.",
      "unicode-cyrillic",
      "dd-writing"
    ),
    primaryScript: "Russian Cyrillic alphabet",
    romanization: cited(
      "People write Russian names in Latin letters on maps, passports, and library records, but they follow different systems. English often writes Хрущёв as Khrushchev.\n\nIf you read only Latin letters, you may miss how читать, прочитать, and читатель share a root. Learn to type Cyrillic and use transliteration only as a temporary pronunciation aid.",
      "unicode-cyrillic",
      "dd-writing"
    ),
    spellingNorms: cited(
      "Russian spelling often keeps a word's parts visible even when their sounds change. In вода́, 'water,' the first о loses its full sound, but the stressed form во́ды, 'waters,' helps explain the spelling. Learners also meet rules about which vowel letters follow consonants such as г, к, and х.\n\nThe 1917–18 spelling reform removed several old letters and most final hard signs from ordinary writing. Today the main choice you will notice is ё: dictionaries and learner texts show it, while general print often replaces it with е. Keep ё in your own notes so you can recover both sound and meaning.",
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
      "Russian endings carry several clues at once. A noun or adjective ending may show its sentence role, number, and grammatical gender. Linguists call this kind of packed ending 'fusional.'\n\nLearners usually meet six cases, or sets of noun forms: nominative, accusative, genitive, dative, instrumental, and prepositional. Meaning and nearby words help you choose among them. Verbs also let you view an action as a process or as a whole.\n\nEndings often keep roles clear when words move. Word order and pitch then show what the speaker treats as known or new. Study each short sentence with the question it answers.",
      "wiki-russian",
      "cornell-aspect",
      "ruscorpora"
    ),
    typologicalProfile: cited(
      "Russian groups singular nouns into three grammatical genders, and describing words change to match. A noun's form may also reflect whether it names a living being. Present and future verbs show who acts; past singular verbs often show grammatical gender.\n\nRussian has no articles like 'a' and 'the.' Speakers usually omit 'is' in simple present statements: Москва́ — столи́ца means 'Moscow is a capital.' They can leave out an obvious subject too. Several negatives can work together: Я никогда́ ничего́ не ви́дел means 'I never saw anything.'",
      "wiki-russian",
      "ruscorpora"
    ),
    morphology: cited(
      "Endings repeat, but stress, spelling, and irregular forms complicate the pattern. Learn стол, 'table,' with на столе́, 'on the table,' and со стола́, 'from the table.' These phrases show case and moving stress.\n\nRelated verbs can have different jobs. Писа́ть means 'write,' написа́ть can show completion, записа́ть means 'write down,' and подписа́ть means 'sign.' Diminutives can show affection, irony, or condescension as well as small size; context tells you which.",
      "cornell-aspect",
      "ruscorpora",
      "gramota"
    ),
    syntax: cited(
      "Russian speakers often put familiar information first and the answer's focus later. Ива́н купи́л кни́гу answers what Ivan bought; Кни́гу купи́л Ива́н can answer who bought it. Case endings keep the roles clear while order and pitch change the emphasis.\n\nSome sentences describe an experience without making its experiencer the subject. Мне хо́лодно means 'I'm cold,' with a form meaning 'to me.' Formal prose may pack ideas into dense verb-derived forms, while conversation leans on short clauses and context.",
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
        body: cited("A case is a form that shows what a noun phrase does in a sentence. When you go into Moscow, say в Москву́; when you are in Moscow, say в Москве́. The first phrase marks a destination and the second a location.", "wiki-russian", "cornell-grammar"),
        example: "Я живу́ в Москве́, но за́втра е́ду в Петербу́рг.",
        exampleTranslation: "I live in Moscow, but tomorrow I'm going to Saint Petersburg. Location takes prepositional Москве; destination takes accusative Петербург."
      },
      {
        title: "Aspect: activity, event, and result",
        body: cited("Russian verbs often let you describe the same event from two angles. The imperfective form can show a process or habit; the perfective form presents an action as a whole, often with its endpoint in view. A perfective form that looks like a present tense usually refers to the future.", "cornell-aspect", "ruscorpora"),
        example: "Я чита́л кни́гу весь ве́чер, но не прочита́л её.",
        exampleTranslation: "I was reading the book all evening, but I didn't finish/read it through. The same real-world activity is framed first as process, then as unrealized result."
      },
      {
        title: "Verbs of motion",
        body: cited("To talk about walking, Russian distinguishes a trip in progress from going regularly or in several directions: идти́ and ходи́ть. Е́хать and е́здить make a similar contrast for travel by vehicle. Prefixes can then add meanings such as arrival, departure, or entry.", "cornell-grammar", "ruscorpora"),
        example: "Сейча́с я иду́ домо́й, а обы́чно хожу́ пешко́м че́рез парк.",
        exampleTranslation: "I'm walking home now, and I usually walk through the park. Иду marks the present one-way trip; хожу marks habitual movement."
      },
      {
        title: "Animacy in the accusative",
        body: cited("The form of a direct object changes with whether Russian grammar treats it as animate. For masculine singular and plural nouns, people and animals often take an ending that matches another case, the genitive. Objects usually keep the basic nominative shape, and describing words change along with their nouns.", "cornell-grammar", "wiki-russian"),
        example: "Я ви́жу но́вого студе́нта и но́вый университе́т.",
        exampleTranslation: "I see a new student and a new university. The animate masculine phrase takes genitive-shaped endings; the inanimate one looks nominative."
      },
      {
        title: "Numbers change the noun phrase",
        body: cited("Russian changes nouns after different numbers. In basic counting, two, three, and four usually take a form like the singular genitive; five and higher usually take a plural genitive form. Other cases add more patterns, so begin with the small sequence below.", "cornell-grammar", "gramota"),
        example: "Оди́н но́вый дом, два но́вых до́ма, пять но́вых домо́в.",
        exampleTranslation: "One new house, two new houses, five new houses. Notice that both noun and adjective forms change with the numeral pattern."
      },
      {
        title: "Reflexive -ся and middle meanings",
        body: cited("The ending -ся can show that someone acts on themself or that people act on each other. It also appears in events with no such meaning, including a door opening. Learn the verb and its context before translating -ся as 'oneself.'", "cornell-grammar", "ruscorpora"),
        example: "Две́рь открыва́ется, а встре́ча начина́ется.",
        exampleTranslation: "The door is opening, and the meeting is beginning. Neither verb describes a person acting on themself."
      },
      {
        title: "Flexible word order, precise focus",
        body: cited("Case endings often keep the roles clear when words move. The position of a word and the speaker's pitch tell listeners which part answers the current question. In the example, the book is already in view and Anna is the news.", "ruscorpora", "wiki-russian"),
        example: "Э́ту кни́гу мне дала́ А́нна.",
        exampleTranslation: "It was Anna who gave me this book. Placing Анна last makes the giver the likely focus; эту книгу is already established."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Most first-language speakers live in Russia, but imperial expansion, Soviet education, and later migration carried Russian much farther. Laws give it different roles in Russia, Belarus, Kazakhstan, and Kyrgyzstan; daily use may differ from its legal status. Elsewhere families may speak it at home or people may use it as a shared second language.\n\nUkraine illustrates why a map needs care. Russian remains a home language for some Ukrainians. A 2024 Kyiv International Institute of Sociology survey of adults in Ukrainian government-controlled areas found varied views on its official status, including among people who speak Russian at home.\n\nA person's use of Russian does not reveal their loyalty or politics. Ask which community, generation, and setting a claim describes.",
      "wiki-russian",
      "un-russian",
      "un-estimate",
      "kiis-2024"
    ),
    regions: [
      { place: "Russian Federation", note: cited("Russian is the federal state language, but the federation is multilingual. Russian proficiency is not the same as ethnic Russian identity.", "wiki-russian") },
      { place: "Belarus, Ukraine, and Moldova", note: cited("Families and cities use Russian in different ways, and each state sets its own rules. A 2024 Ukrainian survey recorded both home-language variation and changing views of Russian's public status. Ukraine's multilingual life cannot be reduced to Russia's political claims.", "wiki-russian", "kiis-2024") },
      { place: "Baltic states", note: cited("Estonia, Latvia, and Lithuania contain Russian-speaking communities whose usage varies by city and generation; Russian is not their state language.", "wiki-russian") },
      { place: "Caucasus and Central Asia", note: cited("People use Russian in many cities and cross-border networks alongside national and local languages. Its reach and status vary by country.", "wiki-russian") },
      { place: "Global diasporas", note: cited("Communities in Israel, Germany, the Americas, Australia, and elsewhere may preserve older usage, absorb local vocabulary, or coexist with other heritage languages.", "wiki-russian", "ruscorpora") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "English speakers can learn Cyrillic fairly quickly; choosing endings and hearing reduced vowels take longer. Discover Discomfort points to cases, prefixes, and gender as challenges, but its description of spelling as nearly sound-for-sound misses stress and vowel reduction.\n\nBreak a case table into small tasks. Learn to describe a place, name a destination, and ask for something before memorizing every ending. Begin speaking with a few common verb contrasts while your sense of aspect grows through stories.",
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
      "In a typical week, combine short conversations, listening with a transcript, stress review, and one corrected paragraph. Retell a story with verbs for habits, then with verbs for completed events, and include a trip. Discover Discomfort's one-sentence-a-day routine can keep you in contact with Russian when time is scarce.\n\nCheck progress by what you can understand or say.",
      "dd-one-sentence",
      "dd-writing",
      "ruscorpora"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Choose a task that tests a particular skill. Transcribe one minute of an interview, read a short story with its audio, or follow one verb prefix across several examples. Save the date and genre of each corpus example.\n\nAsk a tutor what situation your sentence suggests and which word gets the listener's attention.",
      "ruscorpora",
      "gramota"
    ),
    mediaPractice: cited(
      "Listen across interviews, fiction, comedy, science, music, and speakers outside Moscow. Compare a scripted introduction with an unscripted answer. Words such as ну and вот can help a speaker pause or guide a listener; notice their job before copying them into your own speech.\n\nAutomatic subtitles may miss reduced sounds or names, so check a transcript when possible. Keep each creator's own national and community context in view. Russian-language work by Ukrainians, Belarusians, Israelis, Central Asians, and emigrants does not all belong under one national label.",
      "ruscorpora",
      "gramota"
    ),
    dictionariesAndCorpora: cited(
      "Use Gramota.ru to check spelling, stress, pronunciation, and meaning. Search the Russian National Corpus for a word in dated texts, speech, newspapers, poetry, and regional collections. Its home page listed more than 17 billion tokens across its collections in September 2026, though their sizes and kinds differ.\n\nOpenRussian shows forms and examples in a learner-friendly layout. For a disputed form, compare it with Gramota and corpus examples. A corpus shows what appears in its selected texts; you still need to judge whether a phrase fits your audience.",
      "gramota",
      "ruscorpora"
    ),
    resources: [
      { type: "corpus", title: "Russian National Corpus", url: "https://ruscorpora.ru/en/", level: "intermediate", description: cited("A large, annotated collection with modern, historical, spoken, poetic, dialect, and parallel subcorpora. Use it to test collocations, government, aspect, and register in dated context.", "ruscorpora") },
      { type: "dictionary", title: "Gramota.ru dictionaries", url: "https://gramota.ru/biblioteka/slovari", level: "intermediate", description: cited("A portal to authoritative Russian spelling, stress, pronunciation, explanatory, proper-name, and specialist dictionaries. Essential when native intuitions disagree.", "gramota") },
      { type: "course", title: "Cornell Russian Grammar: Verbal Aspect", url: "https://russian.cornell.edu/grammar/html/gr04_d.htm", level: "intermediate", description: cited("A compact university explanation separating tense from aspect, with forms and examples suitable for structured review.", "cornell-aspect") },
      { type: "other", title: "Discover Discomfort: The Hardest Languages for English Speakers", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", level: "beginner", description: cited("A candid learner-oriented overview of why Russian cases and verbal morphology feel demanding, plus a practical starting sequence. Treat its phonetic-spelling claim as motivational simplification.", "dd-hardest") },
      { type: "other", title: "Discover Discomfort: How to Read and Write Any Language", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", level: "beginner", description: cited("A short argument for reading Cyrillic in meaningful text early. Its general script advice does not teach Russian stress or reduction.", "dd-writing") },
      { type: "other", title: "Discover Discomfort: Good Morning in Russian", url: "https://discoverdiscomfort.com/good-morning-in-russian/", level: "beginner", description: cited("Compares Доброе утро with warmer and more casual morning greetings. Check the relationship before choosing a playful diminutive form.", "dd-good-morning") },
      { type: "other", title: "Discover Discomfort: The Politeness Word", url: "https://discoverdiscomfort.com/the-politeness-word/", level: "beginner", description: cited("Shows how пожа́луйста can answer thanks, mark a request, or invite someone to go ahead. Pair each meaning with a short exchange.", "dd-politeness") },
      { type: "dictionary", title: "OpenRussian", url: "https://en.openrussian.org/", level: "all", description: cited("A convenient learner dictionary with stress, frequency, forms, and examples; cross-check difficult normative or register questions with Gramota and the national corpus.", "openrussian") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Russian builds many words from a shared root. The пис- family includes писа́ть, 'write,' письмо́, 'letter,' and писа́тель, 'writer.' Related forms do not always share the same everyday use, so check each one in context.\n\nSmall conversational words can carry a lot of meaning. Во́т can point something out or draw a turn to a close; ну can signal a pause, an objection, or encouragement. Diminutives can show affection, irony, or unwanted familiarity.\n\nNotice who speaks to whom before borrowing a phrase.",
      "ruscorpora",
      "gramota"
    ),
    notableWords: [
      { term: "тоска́", transliteration: "toská", meaning: "longing, anguish, melancholy, ennui", note: cited("The word covers boredom through deep longing. Check the sentence before claiming it has no English equivalent.", "ruscorpora", "gramota") },
      { term: "аво́сь", transliteration: "avós'", meaning: "perhaps; relying on luck", note: cited("It can express hope or criticize acting without a plan. You may hear it in idioms and self-irony.", "ruscorpora", "gramota") },
      { term: "душа́", transliteration: "dushá", meaning: "soul; inner self", note: cited("This ordinary word also appears in religious writing and idioms such as от души́, 'wholeheartedly.'", "ruscorpora") },
      { term: "ую́т", transliteration: "uyút", meaning: "coziness, comfort, a welcoming atmosphere", note: cited("Speakers can describe the atmosphere of a home or café with this word. Its adjective ую́тный also appears in reviews and everyday description.", "ruscorpora", "gramota") },
      { term: "почему́чка", transliteration: "pochemúchka", meaning: "a child or person who constantly asks why", note: cited("Speakers build it playfully from почему́, 'why.'", "gramota") },
      { term: "суббо́тник", transliteration: "subbótnik", meaning: "organized communal work day", note: cited("From суббо́та, 'Saturday,' it names cleanups with a Soviet history and current local use.", "ruscorpora") },
      { term: "ничего́", transliteration: "nichegó", meaning: "nothing; not bad; it's all right", note: cited("As a reply, it can mean 'fine,' 'so-so,' or reassurance. Listen to the speaker's tone.", "ruscorpora", "gramota") },
      { term: "дава́й", transliteration: "daváy", meaning: "come on; let's; go ahead; okay, bye", note: cited("The imperative of дава́ть, 'give,' also proposes action, encourages someone, or ends a call.", "ruscorpora") },
    ],
    loanwordLayers: cited(
      "Russian inherited much of its basic vocabulary from earlier Slavic speech and gained a learned layer from Church Slavonic. Compare everyday го́род, 'city,' with град in elevated compounds. Turkic languages contributed words such as сара́й, 'shed,' and арбу́з, 'watermelon.' French, Dutch, German, Italian, and English added words in other periods and fields.\n\nBorrowed words join Russian grammar. The English-derived verb ла́йкать, 'to like an online post,' has a related form ла́йкнуть for one completed click. Watch how speakers adapt a new stem rather than treating every loan as an unchanged foreign word.",
      "wiki-russian",
      "ruscorpora",
      "gramota"
    ),
    idioms: [
      { original: "Ни пу́ха ни пера́!", transliteration: "Ni púkha ni perá!", translation: "Good luck!", note: "Literally “neither fur nor feather.” Said before an exam, performance, or difficult task. The traditional response is К чёрту! “To the devil!” rather than спасибо." },
      { original: "У меня́ ру́ки не дохо́дят.", transliteration: "U menyá rúki ne dokhódyat.", translation: "I never get around to it.", note: "Literally, 'my hands don't reach it.' Use it to explain a postponed task." },
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
      "Russian belongs to the Slavic branch. Ukrainian and Belarusian are its closest modern standardized relatives; Polish, Czech, and Bulgarian share older ancestry at a greater distance. Their speakers do not automatically understand one another, and Russian does not outrank another Slavic language.\n\nScript tells a different story from ancestry. Polish uses Latin letters and is Slavic, while many unrelated languages adopted Cyrillic through their own histories. Borrowing also creates shared words without changing a language's family relationship.",
      "glottolog-russian",
      "unicode-cyrillic",
      "wiki-russian"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Russian-language writing and media come from many countries and political positions. Read the famous nineteenth-century novels, then seek regional writers, women, queer authors, journalists, musicians, and creators in diaspora. Identify a work by its creator and context rather than assuming Russian language means Russian nationality.\n\nEveryday choices also carry social meaning. Ты addresses one person informally; вы can show politeness or address several people. A first name with a patronymic may fit a formal or intergenerational exchange, while a shortened name depends on the relationship.\n\nNo single word, including тоска́, explains a national character.",
  resources: [
    { type: "corpus", title: "Russian National Corpus", url: "https://ruscorpora.ru/en/", level: "intermediate", description: cited("Search Russian writing and speech across centuries and genres, including grammatical patterns and parallel texts.", "ruscorpora") },
    { type: "dictionary", title: "Gramota.ru", url: "https://gramota.ru/", level: "all", description: cited("The place to check stress, spelling, inflection, meaning, stylistic labels, and competing norms in authoritative dictionaries.", "gramota") },
    { type: "course", title: "Cornell Russian Grammar", url: "https://russian.cornell.edu/grammar/", level: "beginner", description: cited("A university reference for case forms, aspect, and motion verbs. Its older web typography may need patience.", "cornell-grammar") },
    { type: "other", title: "Discover Discomfort: Good Morning in Russian", url: "https://discoverdiscomfort.com/good-morning-in-russian/", level: "beginner", description: cited("Compares common and playful morning greetings with notes on who may hear them naturally.", "dd-good-morning") },
    { type: "other", title: "Discover Discomfort: The Politeness Word", url: "https://discoverdiscomfort.com/the-politeness-word/", level: "beginner", description: cited("Explores several conversational uses of пожа́луйста. The Russian section is brief but helps you move beyond a one-word translation.", "dd-politeness") },
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
    { original: "Повтори́те, пожа́луйста.", transliteration: "Povtoríte, pozháluysta.", translation: "Please repeat that.", usageNote: "Polite or plural imperative. Add ещё раз to ask for it once more." },
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
    { id: "dd-good-morning", title: "Mastering Good Morning in Russian for Every Situation", url: "https://discoverdiscomfort.com/good-morning-in-russian/", publisher: "Discover Discomfort", publishedAt: "2023-05-01", updatedAt: "2023-07-02", accessedAt: "2026-09-27" },
    { id: "dd-politeness", title: "The Politeness Word in Different Cultures and Languages", url: "https://discoverdiscomfort.com/the-politeness-word/", publisher: "Discover Discomfort", accessedAt: "2026-09-27" },
    { id: "wiki-russian", title: "Russian language", url: "https://en.wikipedia.org/wiki/Russian_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-phonology", title: "Russian phonology", url: "https://en.wikipedia.org/wiki/Russian_phonology", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-dialects", title: "Russian dialects", url: "https://en.wikipedia.org/wiki/Russian_dialects", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-russian", title: "Glottolog 5.3: Russian", url: "https://glottolog.org/resource/languoid/id/russ1263", publisher: "Glottolog", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "ruscorpora", title: "Russian National Corpus", url: "https://ruscorpora.ru/en/", publisher: "Vinogradov Russian Language Institute, Russian Academy of Sciences", accessedAt: "2026-07-10" },
    { id: "gramota", title: "Dictionaries of the Russian Language", url: "https://gramota.ru/biblioteka/slovari", publisher: "Gramota.ru", accessedAt: "2026-07-10" },
    { id: "dialect-atlas", title: "Dialectological Atlas of the Russian Language", url: "https://da.ruslang.ru/", publisher: "Vinogradov Russian Language Institute, Russian Academy of Sciences", accessedAt: "2026-07-10" },
    { id: "unicode-cyrillic", title: "The Unicode Standard, Chapter 7: Cyrillic", url: "https://unicode.org/versions/Unicode16.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-07-10" },
    { id: "cornell-aspect", title: "Russian Grammar: Verbs — Aspect", url: "https://russian.cornell.edu/grammar/html/gr04_d.htm", publisher: "Cornell University", accessedAt: "2026-07-10" },
    { id: "cornell-grammar", title: "Beginning Russian Grammar: Table of Contents", url: "https://russian.cornell.edu/grammar/toc.htm", publisher: "Cornell University", accessedAt: "2026-09-27" },
    { id: "un-russian", title: "Russian Language Day", url: "https://www.un.org/en/observances/russian-language-day", publisher: "United Nations", accessedAt: "2026-07-10" },
    { id: "un-estimate", title: "Russian language: many shades of blue", url: "https://unric.org/en/russian-language-many-shades-of-blue/", publisher: "United Nations Regional Information Centre for Western Europe", accessedAt: "2026-09-27" },
    { id: "kiis-2024", title: "Dynamics of attitudes towards the status of the Russian language in Ukraine", url: "https://www.kiis.com.ua/?cat=reports&id=1385&lang=eng&page=1", publisher: "Kyiv International Institute of Sociology", accessedAt: "2026-09-27" },
    { id: "openrussian", title: "OpenRussian Dictionary", url: "https://en.openrussian.org/", publisher: "OpenRussian", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Russian Language Guide: Hear the Stress, Read the Script, Tell the Story",
    description: "Read Russian in Cyrillic, hear its shifting stress, and learn how endings and verbs shape a sentence. Explore speakers, regional forms, history, phrases, and study resources."
  }
} satisfies LanguageGuide;
