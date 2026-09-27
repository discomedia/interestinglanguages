import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Estonian",
    relationship: "Close Finnic relative",
    explanation: cited(
      "Finnish and Estonian share inherited words and grammar, but speakers usually need study or exposure to understand the other language well. Both use kala for “fish”; Finnish mennä, “to go,” corresponds to Estonian minema. Estonian has lost many final vowels and much of its old vowel harmony, so related words can look quite different.",
      "glottolog",
      "wiki-finnish"
    )
  },
  {
    name: "Karelian",
    relationship: "Closest major linguistic relative",
    explanation: cited(
      "Karelian is a separate Finnic language spoken in Finland and Russia. Kotus distinguishes it from the southeastern Finnish dialects also called Karelian. Karelian has its own varieties and written work, and its speakers are working to strengthen its future.",
      "kotus-languages",
      "glottolog"
    )
  },
  {
    name: "Northern Sámi",
    relationship: "More distant Uralic relative and contact language",
    explanation: cited(
      "Finnish and the Sámi languages belong to different branches of Uralic. They share ancient ancestry and later contact, but they are separate languages. Sámi languages are Indigenous languages of Sápmi with specific language rights in Finland.",
      "kotus-languages",
      "language-act"
    )
  },
  {
    name: "Hungarian",
    slug: "hungarian",
    relationship: "Distant Uralic relative",
    explanation: cited(
      "Hungarian and Finnish share distant Uralic ancestry, but their speakers cannot understand each other without study. Both build many words with endings and lack grammatical gender. Those broad similarities will not give you matching everyday vocabulary or identical grammar.",
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
  summary: "In Finnish, tuli is “fire,” tuuli is “wind,” and tulli is “customs.” Learn how sound length, word endings, and everyday speech shape this Finnic language in Finland and beyond.",
  family: "Uralic, Finnic",
  macroRegion: "Finland, northern Europe, and Finnish communities abroad",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "One doubled letter can change a Finnish word. From there, learn why talossa means “in the house” and why a friend may say mä oon where a textbook prints minä olen.",
  hero: {
    imageAlt: "A Finnish novel beside a notebook showing doubled vowels, umlauted letters, and case endings.",
    callToActionLabel: "Hear Finnish in use"
  },
  classification: "A Finnic language in the Uralic family and a national language of Finland",
  speakerCommunity: "Most people in Finland have Finnish as their registered first language, and many others use it as an additional language. Speakers include children who grow up with city colloquial speech, families who keep regional dialects, new residents studying for work, and communities abroad. A register records one language for each resident, so its count cannot describe every multilingual life.\n\nFinnish shares Finland with Swedish, Sámi languages, Karelian, Romani, sign languages, and languages brought by migration. Kven and Meänkieli have related histories across northern borders and their own recognized identities. Learn Finnish through the people and settings you care about, not a national stereotype.",
  facts: [
    { label: "Family", value: "Uralic · Finnic" },
    { label: "Registered in Finland", value: "4,719,802 residents had Finnish as their registered language at the end of 2025" },
    { label: "National status", value: "One of Finland’s two national languages, alongside Swedish" },
    { label: "Writing", value: "Latin alphabet; ä and ö are independent letters, and doubled letters mark length" },
    { label: "Grammar", value: "15 conventionally named cases, rich derivation, verb agreement, participles, infinitives, and enclitic particles" },
    { label: "Typical stress", value: "The first syllable carries primary stress, including in long and borrowed words" }
  ],
  introduction: cited("Finnish is a national language of Finland and the first language recorded for most of its residents. People also speak it in communities abroad, while daily life within Finland includes Swedish, Sámi languages, and many other languages. City speech, regional dialects, and formal writing can sound quite different even when speakers understand one another.\n\nFinnish belongs to the Finnic branch of the Uralic family, alongside languages such as Estonian and Karelian. Its written standard developed over centuries through religious texts, literature, newspapers, and public education. In current use, speakers often move between the standard taught in school and more relaxed forms: written minä olen, “I am,” commonly becomes mä oon in conversation.\n\nWord endings also carry meanings that English often gives to separate words; talossa means “in the house,” while talosta means “out of the house.” Those patterns are part of ordinary speech, not just a feature of grammar books.", "statistics-finland", "kotus-languages", "glottolog", "kotus-old-literary", "kotus-nineteenth", "kotus-registers", "visk"),
  origins: {
    overview: cited(
      "Finnish belongs to the Finnic branch of Uralic, with Estonian, Karelian, and Veps. The family name describes a linguistic relationship; it does not trace every modern Finnish speaker to one ancient homeland. Finnic varieties developed around the eastern Baltic through settlement and contact.\n\nFor centuries, people chiefly spoke Finnish while clergy and officials wrote in Latin or Swedish. The first Finnish books appeared in the 1540s. Mikael Agricola’s primer and his 1548 New Testament helped establish a written form based mainly on western dialects, though spelling still varied.",
      "wiki-history", "kotus-old-literary", "glottolog"
    ),
    timeline: [
      {
        period: "1540s–1642",
        event: cited(
          "Agricola published the first Finnish books in the 1540s, including a primer, and translated the New Testament in 1548. The 1642 Bible extended written Finnish while the literary standard still leaned westward.",
          "kotus-old-literary"
        )
      },
      {
        period: "1809–late nineteenth century",
        event: cited(
          "After 1809, writers brought more eastern dialect forms into the western-based literary language. The Kalevala, newspapers, and schools widened what Finnish writers could do. The 1863 Language Decree set Finnish on a path toward equal use with Swedish in administration.",
          "kotus-nineteenth", "wiki-history"
        )
      },
      {
        period: "Twentieth century to the digital present",
        event: cited(
          "Schools, migration, broadcasting, and later online media brought regional speech into new contact. Standard Finnish continued in public writing, while colloquial forms gained space in subtitles, songs, and messages. Today you can compare both in language corpora.",
          "kotus-registers",
          "kielipankki-korp"
        )
      }
    ],
    contactHistory: cited(
      "Finnish has taken words from its neighbors for centuries. Older Baltic, Germanic, and Slavic contact left different layers; Swedish later contributed many words linked to public life and trade. Russian contact is easier to hear in some eastern varieties.\n\nToday speakers also borrow English words for technology, work, and entertainment. Those words can take Finnish endings, as in blogissa, “in the blog.” Borrowing shows how speakers adapt their language to changing lives.",
      "wiki-finnish",
      "kotus-finnish"
    ),
    standardization: cited(
      "Writers built standard Finnish, or yleiskieli, from more than one regional variety. Schools and publishers teach it, and Kotus advises on its spelling and usage. It is the common form of most news prose and official writing.\n\nPeople also speak regional and colloquial Finnish with their own patterns. Kotus notes that even the written standard allows alternatives. Learn it for reading and public life, then listen to how speakers adjust their language among friends, at work, and online.",
      "kotus-registers", "kotus-nineteenth"
    )
  },
  variants: {
    overview: cited(
      "Finnish dialects have broad western and eastern groupings, with smaller regional groups inside them. The boundaries mark clusters of features, not walls between speakers. City speech also mixes regional and shared colloquial patterns.\n\nAge, setting, and relationship can affect someone's word choice alongside hometown. Kotus preserves a large archive of dialect recordings, so you can hear those differences rather than rely on a map alone.",
      "kotus-dialects", "kotus-archive"
    ),
    items: [
      {
        name: "Standard written Finnish (yleiskieli / kirjakieli)",
        note: cited(
          "Most books, news reports, public instructions, and courses use this shared form. A formal speech may come close to it, but ordinary conversation usually has different shapes. Standard Finnish connects readers across regions.",
          "kotus-registers"
        )
      },
      {
        name: "Nationwide colloquial Finnish (puhekieli)",
        note: cited(
          "Aalto's beginner course pairs minä with mä, and its speakers say Mä oon for “I am.” You may also hear ne tulee where a standard sentence has he tulevat, “they come.” Colloquial forms vary by region and speaker, so learn them in whole exchanges.",
          "kotus-registers", "aalto-greetings"
        )
      },
      {
        name: "Savo and other eastern varieties",
        note: cited(
          "Savo varieties differ in vowel patterns, consonants, and local vocabulary. No one speech style represents every speaker in the region. Listen to a recording and compare a few forms with the standard before making wider claims.",
          "kotus-dialects"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Finnish writes eight main vowel sounds with a, e, i, o, u, y, ä, and ö. A doubled vowel or consonant lasts longer and can change meaning: tuli is “fire,” tuuli “wind,” and tulli “customs.” Train your ear on these short pairs before a long word hides the contrast.\n\nMany endings also match the vowels in the word: talossa means “in the house,” but kylässä means “in the village.” This pattern is called vowel harmony. The letters e and i can appear with either front or back vowels in many native words.",
      "kotus-pronunciation", "kotus-finnish"
    ),
    script: "Finnish Latin alphabet; examples use standard Finnish spelling rather than a separate romanization",
    soundSystem: cited(
      "Most letters give you a dependable sound. Make y with your tongue forward and lips rounded, as in German ü; ä is an open front vowel, and ö is rounded. Finnish r is usually rolled.\n\nSome stems change when an ending arrives: kauppa, “shop,” becomes kaupassa, “in the shop.” Katu, “street,” becomes kadulla, “on the street.” Grammars call this consonant gradation; learn a noun with two or three forms so the change becomes familiar.",
      "kotus-pronunciation", "visk", "uusi-gradation"
    ),
    prosody: cited(
      "The first syllable normally carries the strongest beat, even in a long word. Speakers also use pitch and emphasis to show which part of a sentence they mean to contrast. Listen to whole clauses, not only isolated words.\n\nKeep doubled sounds long even when they fall away from the main stress. Casual speakers may shorten familiar phrases, but the spelling still helps you find their underlying words. Shadow a recording before trying to guess its rhythm from print.",
      "kotus-pronunciation", "wiki-grammar"
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
      "Finnish uses the Latin alphabet and treats ä and ö as separate letters after z in alphabetical order. Å also appears in the alphabet, especially in Swedish names. Writers double a vowel or consonant to show a longer sound.\n\nSpelling often makes pronunciation clear, but an ending can change the stem you expect to see. Learn matto with maton, “of the rug,” rather than assuming every form keeps tt. A dictionary gives you the other common forms.",
      "unicode-cldr",
      "kotus-finnish"
    ),
    primaryScript: "Latin alphabet with Finnish orthographic conventions",
    romanization: cited(
      "Finnish already uses Latin letters, so you do not need a separate romanization. Keep ä and ö in names and words; replacing them with a and o can change how a reader says them. A Finnish keyboard layout lets you type these letters directly.",
      "unicode-cldr"
    ),
    spellingNorms: cited(
      "Writers join many compounds into one word: kirjakauppa is a bookshop. Finnish spelling rules also cover hyphens, names, and punctuation, so sound alone will not settle every editing choice. Look up an unfamiliar compound in the dictionary.\n\nIn dialogue and messages, writers may choose mä or oon to show colloquial speech. Those spellings belong to a recognizable spoken register. Use standard forms for an official letter unless the context calls for a different voice.",
      "kotus-registers",
      "kotus-dictionary"
    ),
    styleNotes: [
      cited("Treat ä and ö as letters, not decorated versions of a and o; dictionary and alphabetical order reflect that distinction.", "unicode-cldr"),
      cited("Learn the spelling and sound of both strong and weak stems: matto, maton, matolla tells you more than the isolated headword “rug.”", "visk"),
      cited("Keep standard and conversational spellings tagged by genre. A novel’s dialogue, a group chat, and an application form make different orthographic promises.", "kotus-registers"),
      cited("When a compound is hard to parse, work from its rightmost head: kirjakauppa is a kind of kauppa “shop,” and tiedekirjakauppa is a science-book shop.", "kotus-dictionary")
    ]
  },
  grammar: {
    overview: cited(
      "Finnish can build a long word from a short base: taloissani means “in my houses.” Talo is “house”; the following pieces add plural, location, and “my.” Linguists call this way of building words agglutination.\n\nEndings do not always snap onto an unchanged stem. Vowel harmony changes their vowels, and consonant gradation can change the base. Read each form as a real word first, then use its pieces to explain what you heard.",
      "kotus-finnish", "visk"
    ),
    typologicalProfile: cited(
      "Finnish puts most grammatical endings after a word. It has no articles like English a and the, and it does not assign grammatical gender to nouns. In a plain statement, the doer often comes before the verb and its object.\n\nNouns can take endings for roles such as location or possession; these are called cases. Finnish grammars usually list fifteen, though some are far more common than others. Speakers also move words to mark a topic or contrast, so endings and word order work together.",
      "kotus-finnish",
      "wiki-grammar",
      "visk"
    ),
    morphology: cited(
      "A dictionary headword will not show you every stem: nainen, “woman,” becomes naisen, “of the woman,” and vesi, “water,” becomes veden. Save these pairs as you meet them. Derivation also builds word families, such as kirja, “book,” kirjasto, “library,” and kirjailija, “author.”\n\nSmall particles can attach after other endings. The particle -kin may mean “also”; -ko or -kö turns a word into a yes-or-no question. Hear the complete sentence before assigning one English word to a particle.",
      "kotus-finnish",
      "visk",
      "kotus-dictionary"
    ),
    syntax: cited(
      "Hän osti kirjan can mean “she bought the book” or “he bought the book”: standard Finnish hän does not mark gender. The verb ending can also identify the person without a separate pronoun, as in tulen, “I come.”\n\nKirjan hän osti puts the book first, perhaps because it contrasts with another purchase. In casual speech, people often use se for a person. Learn that register choice from actual conversations rather than translating English he and she word for word.",
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
          "Talossa means “in the house,” talosta “out of the house,” and taloon “into the house.” Another set gives pöydällä, “on the table,” pöydältä, “off the table,” and pöydälle, “onto the table.” These place endings are called local cases.\n\nThey also do other jobs: Minulla on koira means “I have a dog,” literally “at me is a dog.” Learn a place or verb with its usual ending: Helsingissä is “in Helsinki,” but asemalla is “at the station.”",
          "wiki-grammar",
          "visk"
        ),
        example: "Olen kirjastossa, mutta menen kohta asemalle.",
        exampleTranslation: "I’m in the library, but I’m going to the station soon."
      },
      {
        title: "The partitive presents an open quantity or event",
        body: cited(
          "Finnish often uses the partitive ending for an open amount or an unfinished event: juon vettä means “I’m drinking water.” Negation also commonly calls for it, as in en juo vettä, “I don’t drink water.”\n\nLuen kirjaa presents reading as ongoing, while luen kirjan points toward finishing the whole book. The difference concerns the event, not just whether English says “a” or “the.” Keep each form in a complete sentence.",
          "visk", "uusi-object"
        ),
        example: "Kirjoitin kirjettä, mutta en kirjoittanut sitä loppuun.",
        exampleTranslation: "I was writing the letter, but I didn’t finish writing it."
      },
      {
        title: "Consonant gradation links grammar to stem shape",
        body: cited(
          "Some consonants change when a word takes an ending. Kukka, “flower,” gives kukan, “of the flower”; kaupunki, “city,” gives kaupungissa, “in the city.” This pattern is consonant gradation.\n\nThe change may shorten a doubled consonant or alter a single one. Save the basic and genitive forms together, then practice the family in sentences.",
          "visk", "uusi-gradation"
        ),
        example: "Kaupungissa on kaksi uutta kukkakauppaa.",
        exampleTranslation: "There are two new flower shops in the city."
      },
      {
        title: "Verbs agree, while colloquial speech redraws the paradigm",
        body: cited(
          "The standard present tense includes tulen, “I come,” tulet, “you come,” and tulemme, “we come.” You may hear mä tuun and me tullaan in casual speech. The everyday first-person plural has a different shape from the standard table.\n\nPeople shift among these forms by setting and region. Put a label beside each recorded example, then try both in a suitable conversation.",
          "kotus-registers",
          "kielipankki-korp"
        ),
        example: "Me tullaan huomenna. / Me tulemme huomenna.",
        exampleTranslation: "We’re coming tomorrow. (colloquial / standard)"
      },
      {
        title: "Negation has its own verb",
        body: cited(
          "Finnish changes its negative word for the person: en tiedä means “I don’t know,” while et tiedä means “you don’t know.” The main verb takes a form that follows this negative word. In the past, emme menneet means “we didn’t go.”\n\nA negative sentence also commonly takes a partitive object. Learn en tiedä and en nähnyt häntä, “I didn’t see them,” as full patterns before memorizing the table.",
          "wiki-grammar",
          "visk"
        ),
        example: "En löytänyt avaimia, joten emme päässeet sisään.",
        exampleTranslation: "I didn’t find the keys, so we couldn’t get inside."
      },
      {
        title: "Infinitives describe purpose, manner, timing, and participation",
        body: cited(
          "Menen syömään means “I’m going to eat,” while opin puhumalla means “I learn by speaking.” Both use verb forms beyond the dictionary's basic -a or -ä form. Finnish grammars group these forms as infinitives, sometimes with numbered names.\n\nLearn each in a complete phrase. When you read a new verb form, ask what action it connects to and who is doing it.",
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
      "At the end of 2025, Statistics Finland counted 4,719,802 residents registered with Finnish as their language, out of 5,652,881 residents. The register does not count every person who speaks Finnish as an additional language. Finnish and Swedish are Finland's national languages, while many other communities also use their own languages.\n\nFinnish speakers live beyond Finland, including in Sweden, Norway, Russia, North America, and Australia. Their communities have different histories and ways of keeping the language. Some speakers learn the written standard through school; others inherit local speech at home.",
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
      "An English-speaking learner must learn to hear length and recognize changing stems and case endings. The vocabulary also has fewer obvious English relatives than many European languages. Clear spelling, mostly predictable first-syllable stress, and recurring endings give you ways to practice each challenge.\n\nIf you already know another Finnic language, your starting point will be different. Experience with suffix-heavy languages can help you notice structure, but it will not supply Finnish words or usage automatically. Set goals by the conversations and texts you want to handle.",
      "wiki-finnish",
      "kotus-finnish"
    ),
    easierAspects: [
      "Stable spelling lets you use dictionaries, captions, and read-aloud practice from the beginning",
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
      "Start with a course that teaches standard spelling and a recording of one speaker you can replay. During a short session, hear a length contrast, copy a sentence, and ask for feedback on one form. Aalto's introductory course includes both written lessons and spoken examples.\n\nLater, ask specific questions: which case follows this verb, and would someone say this form in conversation or only in edited writing? Use Yle easy news for reading and listening, then compare it with an unscripted interview. Literature, group conversation, and official writing will each need their own practice.",
      "aalto-course", "yle-learn", "kotus-registers"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Save a new verb inside a whole phrase and tag its register. Näen hänet huomenna means “I'll see them tomorrow”; en näe häntä means “I don't see them.” Notice how the object changes with negation.\n\nOnce a week, transcribe a short passage from a speaker you know. Compare it with subtitles or a transcript, then ask a tutor why two forms differ. Repeat with another passage from the same speaker before moving to a new variety.",
      "uusi-object", "kielipankki-korp", "kotus-registers"
    ),
    mediaPractice: cited(
      "Yle offers learner materials and easy-language news with text and audio. Pick one recurring series so its voices and subjects become familiar. Listen once for the situation, read the Finnish text, then retell it in a few sentences.\n\nAdd an interview or drama scene to hear conversational forms. Songs can help words stick, but melody can stretch vowels beyond ordinary speech. Keep one edited and one spontaneous source in your routine.",
      "yle-learn",
      "kielipankki-korp"
    ),
    dictionariesAndCorpora: cited(
      "Kielitoimiston sanakirja gives standard Finnish meanings, inflections, and usage labels. VISK is a detailed grammar for a question that your course cannot answer. Korp lets you search collections of written and spoken Finnish.\n\nCheck which collection supplied an example before copying it. A historical text, a news article, and a conversation may use the same word differently. Read beyond one search line to see its setting.",
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
      { type: "course", title: "Aalto Introductory Finnish", url: "https://openlearning.aalto.fi/course/view.php?id=59", level: "beginner", description: cited("A free self-study course from first greetings through basic questions, with audio, quizzes, and a section on spoken Finnish. It takes you to lower-beginner level; add live feedback for conversation.", "aalto-course") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Finnish builds word families you can hear and read: juosta means “to run,” juoksu “a run,” and juoksija “a runner.” Added pieces can mark a person, a repeated action, or a smaller version. Compounds narrow a category from right to left: kirjakauppa is a kind of kauppa, “shop.”\n\nWell-known words such as sisu and sauna also have ordinary uses. Read a full sentence before treating a single English gloss as their whole meaning.",
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
      "Old Baltic, Germanic, and Slavic loans sit beside later Swedish words for public life, work, and food. Russian contact is visible in some eastern words. English now supplies terms in technology, games, and work.\n\nBorrowed words still fit Finnish sentences. Blogissa means “in the blog,” with a Finnish location ending on an English-origin noun. Look at the ending before deciding how foreign a word really is in daily use.",
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
      "Finnish shares a family with Estonian and Karelian, and a more distant Uralic history with Sámi languages and Hungarian. Related languages do not automatically let their speakers understand one another.\n\nSwedish and Russian have also shaped Finnish through contact, as have older Baltic and Germanic languages and newer English. Those borrowed words tell a different story from inherited grammar. Keep both stories in view when you compare languages.",
      "glottolog",
      "kotus-languages",
      "wiki-finnish"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Finnish interaction varies widely despite stereotypes of silence and bluntness. Explore Minna Canth, Aleksis Kivi, Väinö Linna, Eeva-Liisa Manner, Rosa Liksom, Sofi Oksanen, Pajtim Statovci, film, metal, rap, games, and Yle’s changing voices. Finland’s literature is multilingual: “Finnish literature” and “literature in Finnish” are not identical categories.",
  resources: [
    { type: "course", title: "Yle: Learn Finnish", url: "https://yle.fi/oppiminen/opisuomea", level: "all", description: cited("Free learner material from Finland’s public broadcaster helps you move from exercises to current audio and video.", "yle-learn") },
    { type: "dictionary", title: "Kielitoimiston sanakirja", url: "https://www.kielitoimistonsanakirja.fi/", level: "all", description: cited("The first stop for current standard meanings, inflection, compounds, and usage labels; pair it with spoken evidence for colloquial questions.", "kotus-dictionary") },
    { type: "other", title: "VISK online grammar", url: "https://kaino.kotus.fi/visk/etusivu.php", level: "advanced", description: cited("A deep searchable description of Finnish grammar. Follow internal links from a construction you actually encountered rather than memorizing its terminology in isolation.", "visk") },
    { type: "corpus", title: "Kielipankki Korp", url: "https://www.kielipankki.fi/korp/", level: "advanced", description: cited("Concordances from annotated written, spoken, historical, and parallel corpora. Choose comparable genres before drawing conclusions from frequency.", "kielipankki-korp") },
    { type: "media", title: "Yle Selkouutiset", url: "https://yle.fi/selkouutiset", level: "beginner", description: cited("Easy-language current news with recurring vocabulary. Read, listen, shadow one paragraph, and then compare the same story in ordinary Yle reporting.", "yle-learn") },
    { type: "course", title: "Aalto Introductory Finnish", url: "https://openlearning.aalto.fi/course/view.php?id=59", level: "beginner", description: cited("Start from the Aalto course's greetings and short questions. Its recordings include casual forms such as mä, while later units introduce more grammar. Ask a teacher or conversation partner to check your own sentences.", "aalto-course", "aalto-greetings") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Hei!", translation: "Hi!", usageNote: "Neutral and widely usable. Moi and moikka are common informal alternatives and can also be used when leaving." },
    { original: "Hyvää huomenta.", translation: "Good morning.", literalMeaning: "[I wish you] good morning.", usageNote: "The partitive form reflects an omitted wishing formula; huomenta alone is more casual." },
    { original: "Kiitos.", translation: "Thank you.", usageNote: "You can also say it when accepting an offer; kiitti is casual, while kiitos paljon adds emphasis." },
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
    { id: "wiki-finnish", title: "Finnish language", url: "https://en.wikipedia.org/wiki/Finnish_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of the Finnish language", url: "https://en.wikipedia.org/wiki/History_of_the_Finnish_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-grammar", title: "Finnish grammar", url: "https://en.wikipedia.org/wiki/Finnish_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog", title: "Glottolog 5.3: Finnish", url: "https://glottolog.org/resource/languoid/id/finn1318", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "kotus-finnish", title: "Suomen kieli", url: "https://kotus.fi/kotus/kielet-ja-kielipolitiikka/kansalliskielet/suomen-kieli/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-09-27" },
    { id: "kotus-languages", title: "Languages of Finland and language policy", url: "https://en.kotus.fi/on-language/languages-of-finland-and-language-policy/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-07-10" },
    { id: "kotus-old-literary", title: "Old Literary Finnish", url: "https://en.kotus.fi/on-language/old-literary-finnish/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-09-27" },
    { id: "kotus-nineteenth", title: "Nineteenth century literary Finnish", url: "https://en.kotus.fi/on-language/nineteenth-century-literary-finnish/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-09-27" },
    { id: "kotus-dialects", title: "Dialects", url: "https://en.kotus.fi/on-language/dialects/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-07-10" },
    { id: "kotus-archive", title: "Suomen kielen nauhoitearkisto", url: "https://kotus.fi/kotus/kieliaineistot/suomen-kielen-nauhoitearkisto/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-09-27" },
    { id: "kotus-registers", title: "Yleiskieli ja muut kielimuodot", url: "https://kotus.fi/kielenhuolto/yleiskieli-ja-sen-kehitys/yleiskieli-ja-muut-kielimuodot/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-07-10" },
    { id: "kotus-pronunciation", title: "Toponymic Guidelines for Map Editors and Other Editors: Finland", url: "https://kotus.fi/wp-content/uploads/2025/04/Toponymic_guidelines_2025.pdf", publisher: "Institute for the Languages of Finland", updatedAt: "2025", accessedAt: "2026-09-27" },
    { id: "kotus-dictionary", title: "Kielitoimiston sanakirja", url: "https://www.kielitoimistonsanakirja.fi/", publisher: "Institute for the Languages of Finland", accessedAt: "2026-07-10" },
    { id: "visk", title: "VISK: Iso suomen kielioppi verkossa", url: "https://kaino.kotus.fi/visk/etusivu.php", publisher: "Institute for the Languages of Finland", publishedAt: "2008", accessedAt: "2026-07-10" },
    { id: "statistics-finland", title: "Population 31.12. by language, 2025", url: "https://pxdata.stat.fi/PxWeb/pxweb/en/StatFin/StatFin__vaerak/11rm.px/table/tableViewLayout1/", publisher: "Statistics Finland", updatedAt: "2026-04-01", accessedAt: "2026-07-10" },
    { id: "language-act", title: "Language Act 423/2003", url: "https://www.finlex.fi/en/legislation/translations/2003/eng/423", publisher: "Finlex, Ministry of Justice of Finland", publishedAt: "2003-06-06", accessedAt: "2026-07-10" },
    { id: "kielipankki-korp", title: "Korp user guide", url: "https://www.kielipankki.fi/support/korp/", publisher: "The Language Bank of Finland", accessedAt: "2026-07-10" },
    { id: "yle-learn", title: "Opi suomea: Yle learning materials", url: "https://yle.fi/oppiminen/opisuomea", publisher: "Yle", accessedAt: "2026-07-10" },
    { id: "aalto-course", title: "Introductory Finnish - Self-study", url: "https://openlearning.aalto.fi/course/view.php?id=59", publisher: "Aalto University", accessedAt: "2026-09-27" },
    { id: "aalto-greetings", title: "Greeting and introducing oneself", url: "https://openlearning.aalto.fi/mod/page/view.php?id=4672", publisher: "Aalto University", accessedAt: "2026-09-27" },
    { id: "uusi-object", title: "Object Sentence Examples: Luen kirjaa / kirjan / kirjat", url: "https://uusikielemme.fi/finnish-grammar/finnish-cases/grammatical-cases/object-sentence-examples-luen-kirjaa-kirjan-kirjat", publisher: "Uusi kielemme", publishedAt: "2019-09-10", updatedAt: "2021-10-01", accessedAt: "2026-09-27" },
    { id: "uusi-gradation", title: "Consonant Gradation", url: "https://uusikielemme.fi/wp-content/uploads/sites/4/2020/08/00102-Uusi-kielemme-Printable-PDF-Consonant-Gradation.pdf", publisher: "Uusi kielemme", accessedAt: "2026-09-27" },
    { id: "unicode-cldr", title: "CLDR Collation Chart: Finnish", url: "https://www.unicode.org/cldr/charts/latest/collation/fi.html", publisher: "Unicode Consortium", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Finnish Language Guide: Sounds, Cases, Spoken Finnish and Culture",
    description: "An example-rich guide to Finnish history, communities, pronunciation, transparent spelling, cases, consonant gradation, spoken varieties, literature, phrases, and modern learning resources."
  }
} satisfies LanguageGuide;
