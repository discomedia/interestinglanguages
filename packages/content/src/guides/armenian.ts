import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Greek",
    slug: "greek",
    relationship: "Indo-European relative and long-standing contact language",
    explanation: cited(
      "Greek and Armenian both belong to the Indo-European family, but each forms its own branch. Centuries of contact also linked their Christian scholarship. To trace inherited words, linguists compare regular sound patterns rather than isolated resemblances.",
      "glottolog",
      "wiki-language"
    )
  },
  {
    name: "Persian",
    slug: "persian",
    relationship: "Iranian relative with exceptionally deep contact",
    explanation: cited(
      "Persian and Armenian are distant Indo-European relatives. Persian and other Iranian languages also supplied many Armenian words over centuries of contact. That borrowing once led scholars to misclassify Armenian as Iranian, until comparisons of inherited grammar and sounds established its separate branch.",
      "britannica",
      "wiki-language"
    )
  },
  {
    name: "Georgian",
    slug: "georgian",
    relationship: "Unrelated South Caucasian neighbor",
    explanation: cited(
      "Georgian belongs to the Kartvelian family, so it is not a genealogical relative of Armenian. The two languages have long shared a region, Christian scholarship, and everyday contact. Their alphabets are different scripts.",
      "glottolog",
      "wiki-language"
    )
  },
  {
    name: "Classical Armenian",
    relationship: "Earliest extensively attested historical stage",
    explanation: cited(
      "Classical Armenian, or գրաբար grabar, preserves the language of early translations and a large religious and literary record. It is still heard in Armenian Apostolic worship. Modern readers need separate grammar study to read those texts comfortably.",
      "ut-classical",
      "unicode"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const armenianGuide = {
  slug: "armenian",
  name: "Armenian",
  autonym: "Հայերեն (hayeren)",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Armenian has its own alphabet and two modern standards, Eastern and Western. Its written history reaches back to the fifth century, and people use it today in Armenia and communities across the world.",
  family: "Indo-European, Armenian",
  macroRegion: "Armenian Highlands, South Caucasus, and global diaspora",
  primaryScript: "Armenian alphabet",
  difficultyLabel: "Demanding",
  learnerHook: "Learn one Armenian alphabet, then notice how Eastern and Western speakers give some letters different sounds and often use different spellings.",
  hero: {
    imageAlt: "Modern Armenian handwriting beside printed Armenian type showing the language's distinctive alphabet.",
    callToActionLabel: "Explore Armenian in use"
  },
  classification: "An independent branch of the Indo-European language family, represented today chiefly by Eastern and Western Armenian",
  speakerCommunity: "Armenian is the state language of the Republic of Armenia and a community language in many other countries. Eastern Armenian anchors public life in Armenia and is also spoken in Iran. Western Armenian grew as a literary standard among Ottoman Armenians and now lives mainly through families, schools, churches, media, and arts across the diaspora.\n\nThe two standards share a literary inheritance, but some sounds, common words, verb forms, and spellings differ. They are not labels for two ethnicities. Many speakers understand both, though their schooling and family histories affect which forms feel natural.\n\nHeritage ability varies too. Someone may follow a grandparent from Aleppo but read slowly; another may write formal Eastern Armenian while speaking Russian or English with friends. Both are part of Armenian life today.",
  facts: [
    { label: "Family", value: "Indo-European · independent Armenian branch" },
    { label: "Modern standards", value: "Eastern Armenian and Western Armenian" },
    { label: "Historical language", value: "Classical Armenian (grabar), extensively attested from the 5th century" },
    { label: "Writing", value: "Left-to-right Armenian alphabet; 36 original letters plus օ and ֆ added later" },
    { label: "Orthographies", value: "Reformed spelling in Armenia; traditional spelling in most Western Armenian and Iranian Armenian publishing" },
    { label: "Community reality", value: "A national language in Armenia and a heritage/community language across diverse diasporas" }
  ],
  introduction: cited(
    "Armenian is spoken in the Republic of Armenia and in communities shaped by generations of migration. In Armenia it is the language of government, school, and public media; abroad it remains present in homes, schools, churches, books, and broadcasts. Those communities do not all speak or write exactly alike.\n\nArmenian belongs to the Indo-European family as its own branch, rather than as a variety of a neighboring language. Its two main modern literary standards are Eastern and Western Armenian: Eastern anchors public life in Armenia, while Western grew in Ottoman Armenian centers and is now sustained chiefly by diaspora communities. Their speakers share a written inheritance, yet everyday pronunciation, some grammar, and some common words differ.\n\nAround 406 CE, Mesrop Mashtots devised the Armenian alphabet for a Christian community translating scripture and writing worship texts. The same script now carries both standards, but the reformed spelling used in Armenia differs from the traditional spelling retained by most Western Armenian publishers. The difference appears in an ordinary greeting: բարև in Armenia's reformed spelling becomes բարեւ in traditional spelling, even though both mean “hello.”",
    "glottolog",
    "wiki-language",
    "wiki-eastern",
    "wiki-western",
    "unicode",
    "ut-classical",
    "gulbenkian-western",
    "nayiri"
  ),
  origins: {
    overview: cited(
      "Armenian is its own branch of the Indo-European language family. Persian, Greek, and neighboring languages have influenced it, but Armenian did not arise by mixing them.\n\nThe oldest substantial texts follow the creation of the Armenian alphabet by Mesrop Mashtots and collaborators around 405–406 CE. Translations, histories, theology, and poetry soon followed. Some Greek or Syriac works survive only through their Armenian translations.\n\nClassical Armenian later developed into Middle Armenian varieties and two modern literary standards. That long written record lets researchers trace changes over many centuries.",
      "wiki-language",
      "unicode",
      "ut-classical",
      "britannica"
    ),
    timeline: [
      {
        period: "Before the 5th century",
        event: cited(
          "Armenian speech existed long before it had a surviving national literary tradition. The Armenian Highlands were multilingual, and Armenian developed amid Iranian, Anatolian, Greek, Semitic, and Caucasian contact. Names and foreign transcriptions offer clues, but a continuous Armenian-language manuscript record had not yet begun.",
          "britannica",
          "wiki-language"
        )
      },
      {
        period: "c. 405–406 and the 5th century",
        event: cited(
          "Mesrop Mashtots is credited with devising the alphabet in a Christian scholarly setting where Greek and Syriac texts mattered greatly. Translation and original composition rapidly established Classical Armenian as a literary language. The achievement was not merely a cipher: the script represented Armenian sound distinctions and supported a durable intellectual culture.",
          "unicode",
          "ut-classical",
          "wiki-alphabet"
        )
      },
      {
        period: "11th–17th centuries",
        event: cited(
          "Pronunciation and grammar continued changing while Classical Armenian retained prestige. Texts conventionally grouped as Middle Armenian show features closer to later vernaculars, particularly in Cilician settings. Copyists, clergy, merchants, and printers carried Armenian writing through shifting political centers; the first Armenian printed book appeared in Venice in 1512.",
          "wiki-language",
          "unicode"
        )
      },
      {
        period: "19th century",
        event: cited(
          "Writers and educators increasingly used modern vernacular-based standards rather than grabar alone. Eastern Armenian developed around Transcaucasian and Iranian centers, while Western Armenian's literary norm was strongly associated with Constantinople and Ottoman Armenian publishing. Newspapers, schools, theater, and translation enlarged both publics.",
          "wiki-eastern",
          "wiki-western",
          "wiki-language"
        )
      },
      {
        period: "20th century to the digital present",
        event: cited(
          "Genocide, displacement, Soviet language planning, migration, and new diaspora centers radically altered where Armenian was spoken. Soviet Armenia introduced reformed spelling in the 1920s, with later adjustment, while most Western Armenian and Iranian Armenian institutions retained traditional spelling. Today Unicode publishing, searchable corpora, online dictionaries, podcasts, and remote teaching connect communities once separated by print and geography.",
          "unicode",
          "gulbenkian-western",
          "eanc"
        )
      }
    ],
    contactHistory: cited(
      "Armenian borrowed many words from Iranian languages during long periods of political and cultural contact. Greek and Syriac were important in early Christian translation and learning. Arabic, Turkic languages, Georgian, Kurdish, French, and Russian left other layers in different places and periods.\n\nPeople also switch languages today. A speaker in Yerevan might use Russian in a casual exchange, while someone in Beirut may move between Armenian and Arabic. Ask who uses a borrowed form and in what setting before judging its tone.",
      "britannica",
      "wiki-language",
      "eanc"
    ),
    standardization: cited(
      "Eastern and Western Armenian are two modern standards. Eastern Armenian shapes public life in the Republic of Armenia. Many Iranian Armenian communities speak Eastern Armenian but write with traditional spelling and use their own local forms.\n\nWestern Armenian grew through Ottoman Armenian schools and publishing; today its institutions span several countries. Classical Armenian remains a language of worship and scholarship. When you compare materials, keep three labels separate: spoken standard, regional model, and spelling system.",
      "wiki-language",
      "wiki-eastern",
      "wiki-western",
      "gulbenkian-western"
    )
  },
  variants: {
    overview: cited(
      "Eastern and Western name broad standards, but local Armenian speech has never fit into just two boxes. Migration, violence, schooling, and city life have changed which local forms people hear and use.\n\nWestern Armenian also has many community accents. A Beirut speaker and an Istanbul speaker may share the standard while sounding different. Ask speakers how they name their variety rather than assuming one “diaspora accent.”",
      "wiki-language",
      "wiki-western",
      "gulbenkian-western"
    ),
    items: [
      {
        name: "Republic of Armenia Eastern Armenian",
        note: cited(
          "The basis of schools, government, national broadcasting, and most Yerevan-centered courses. Everyday Yerevan speech contains reductions, colloquial particles, and Russian-influenced vocabulary that a formal textbook may postpone.",
          "wiki-eastern",
          "eanc"
        )
      },
      {
        name: "Iranian Eastern Armenian",
        note: cited(
          "Spoken especially in Iran's Armenian communities. It belongs on the Eastern side grammatically but generally uses traditional orthography and has its own phonetic and contact profile. Do not infer spelling tradition directly from the Eastern/Western speech label.",
          "wiki-eastern",
          "unicode"
        )
      },
      {
        name: "Standard Western Armenian",
        note: cited(
          "Used across diaspora education, publishing, church and cultural life, with important communities and institutions in Lebanon, Turkey, Europe, and the Americas. It differs systematically from Eastern Armenian in consonant values, some inflection, common words, and the formation of certain verb tenses.",
          "wiki-western",
          "gulbenkian-western"
        )
      },
      {
        name: "Heritage and mixed community Armenian",
        note: cited(
          "Diaspora speakers often distribute languages by domain: Armenian with relatives or at church, another language at school or work, and mixed forms among peers. Vocabulary gaps beside excellent listening ability are a normal outcome of bilingual life. Revitalization succeeds by creating new spaces for friendship, art, play, and technology, not by shaming mixed speakers.",
          "gulbenkian-western",
          "dd-less-common"
        )
      },
      {
        name: "Classical Armenian (grabar)",
        note: cited(
          "The language of the oldest literary canon and continuing liturgy. Modern literacy helps with the script, but grammar and vocabulary require separate study. Reading a modern pronunciation of a classical text also differs from reconstructing historical sound values.",
          "ut-classical",
          "unicode"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Choose a speaker model before memorizing letter sounds. In Armenia’s Eastern Armenian, many consonants form three sets: voiced, plain voiceless, and voiceless with an audible puff of air. The last set includes թ, ք, փ, ց, and չ.\n\nWestern Armenian assigns different sounds to several of the same letters. The word գիրք, “book,” begins roughly like English g in Eastern speech and k in Western speech. Learn one model for speaking, then compare the other for listening.",
      "wiki-language",
      "wiki-eastern",
      "wiki-western"
    ),
    script: "Armenian alphabet; examples below follow modern Eastern Armenian in Armenia unless marked otherwise",
    soundSystem: cited(
      "Eastern Armenian has six main vowel sounds in common descriptions. For consonants, listen for the puff of air that separates plain տ in տուն (tun), “house,” from aspirated թ in թուղթ (tʿuġtʿ), “paper.”\n\nThe letters ղ and խ represent different sounds made toward the back of the mouth. The letter ռ is a stronger trill than ր. Western Armenian reorganizes some consonant correspondences, so learn its sound chart as a system rather than swapping letters one at a time.",
      "wiki-eastern",
      "wiki-western",
      "unicode-phonetic"
    ),
    prosody: cited(
      "Modern Armenian often stresses the last full vowel of a word, but endings and reduced vowels can change what you hear. The letter ը represents a central vowel like the last sound of English “sofa.”\n\nArmenian questions put a special mark above a vowel in the word being questioned, not at the end of the sentence. Copy whole recorded questions and answers to learn where the mark, stress, and intonation belong.",
      "wiki-language",
      "unicode"
    ),
    learnerTraps: [
      "Using one alphabet chart without checking whether its sound values are Eastern or Western",
      "Collapsing plain and aspirated stops, especially տ/թ, կ/ք, and պ/փ",
      "Pronouncing every written vowel with equal weight instead of listening for reduction",
      "Treating ղ and խ as interchangeable approximations of English h or k",
      "Confusing the lighter ր with the stronger trilled ռ",
      "Putting Armenian question and exclamation marks at the end as if they were English punctuation"
    ],
    sampleWords: [
      { original: "տուն", transliteration: "tun", translation: "house", note: "Eastern Armenian տ is a plain voiceless stop; compare the aspirated թ in the next example." },
      { original: "թուղթ", transliteration: "tʿuġtʿ", translation: "paper", note: "Both թ sounds are aspirated. The transliteration apostrophe marks aspiration, not a separate pause." },
      { original: "գիրք", transliteration: "girkʿ (Eastern), kirkʿ (Western)", translation: "book", note: "A compact reminder that shared spelling does not guarantee shared consonant values across the standards." },
      { original: "խաղող", transliteration: "xaġoġ", translation: "grape", note: "Listen for the contrast between խ x and the more voiced back sound ղ ġ." },
      { original: "երրորդ", transliteration: "yerrord", translation: "third", note: "The spelling and natural cluster train the stronger ռ sound; imitate a recording rather than forcing every letter separately." },
      { original: "ընկեր", transliteration: "ënker", translation: "friend", note: "The initial ը is a central vowel. This letter is common but often visually overlooked by beginners." },
      { original: "ջուր", transliteration: "jur", translation: "water", note: "Eastern ջ begins with a voiced affricate similar to English j; standard Western correspondence differs." }
    ]
  },
  writing: {
    overview: cited(
      "Armenian is written left to right. The alphabet began with 36 letters; օ and ֆ were added later. Letters have uppercase and lowercase forms, and spaces divide words.\n\nArmenian punctuation may surprise you. The question mark ՞ and exclamation mark ՜ sit above a vowel inside a word. Install an Armenian keyboard so your writing uses the correct Unicode letters and marks.",
      "unicode",
      "wiki-alphabet"
    ),
    primaryScript: "Armenian alphabet in either reformed or traditional orthography",
    romanization: cited(
      "Latin-letter spellings vary between textbooks, maps, and messages. One source may write aspirated sounds with an apostrophe, another with a raised mark or h.\n\nTransliteration can help you compare pronunciation, but it often hides spelling differences between reformed and traditional Armenian. Move to Armenian script early and keep one consistent system for your own notes.",
      "unicode-phonetic",
      "wiki-alphabet"
    ),
    spellingNorms: cited(
      "Soviet Armenia introduced reformed spelling in 1922 and adjusted it later. The Republic of Armenia uses it today. Most Western Armenian publishers and Iranian Armenian communities keep traditional spelling.\n\nThe difference appears in letter combinations such as է/ե, օ/ո, and the form written և in reformed spelling. Both systems write modern Armenian. If a search returns few results, try the other spelling before assuming the word is absent.",
      "unicode",
      "wiki-alphabet"
    ),
    styleNotes: [
      cited("Learn lowercase first for reading, then uppercase forms for names, headlines, and all-caps text; some pairs are less visually obvious than Latin case pairs.", "unicode"),
      cited("Keep a separate spelling column when comparing Eastern and Western resources. A pronunciation difference and an orthographic difference are independent facts.", "unicode", "wiki-western"),
      cited("Type with a Unicode Armenian keyboard and preserve Armenian punctuation. Latin look-alikes and legacy fonts make text hard to search and may break accessibility.", "unicode"),
      cited("Read handwriting as a distinct skill. Connected personal forms can look far less like textbook type than a new learner expects.", "wiki-alphabet")
    ]
  },
  grammar: {
    overview: cited(
      "Armenian changes noun endings to show roles such as “from” or “with.” It puts the definite article, the equivalent of English “the,” at the end of a noun. Nouns have no grammatical gender.\n\nMany Eastern Armenian present-tense verbs combine a main form with a form of “be.” Western Armenian often uses a different pattern with կը. Both standards allow words to move when a speaker wants to highlight a particular part of a sentence.",
      "wiki-language",
      "wiki-eastern",
      "wiki-western"
    ),
    typologicalProfile: cited(
      "A noun can change form to show its role in a sentence. Grammars usually list seven cases, though several forms look the same. Short words following nouns, called postpositions, also express relationships such as location.\n\nAdjectives do not change for masculine or feminine nouns because Armenian has no grammatical gender. The definite article attaches to the end of a noun: գիրք (girkʿ), “book,” becomes գիրքը (girkʿë), “the book.”",
      "wiki-language",
      "wiki-eastern"
    ),
    morphology: cited(
      "Learn a noun with its plural and a form meaning “of”: գիրք (girkʿ), “book”; գրքեր (grkʿer), “books”; and գրքի (grkʿi), “of the book.” The stem can change, so the dictionary form alone will not explain every form in a sentence.\n\nVerbs also have related forms worth learning together. Word families help with vocabulary: հայ (hay) means an Armenian person, Հայաստան (Hayastan) means Armenia, and հայերեն (hayeren) means the Armenian language or “in Armenian.”",
      "wiki-language",
      "eanc",
      "nayiri"
    ),
    syntax: cited(
      "A common Eastern Armenian sentence puts the object before the main verb: Աննան գիրքը կարդում է (Annan girkʿë kardum e) means “Anna is reading the book.” Speakers move words to show what is already known and what they want to highlight.\n\nThe small helper verb can move with that emphasis. A subject can also be left out when the verb makes clear who is acting. Notice these patterns in real conversations instead of relying on one English word order.",
      "wiki-eastern",
      "eanc"
    ),
    advancedPainPoints: [
      "Keeping Eastern and Western verb paradigms separate while learning to recognize both",
      "Choosing the case required by a postposition or idiomatic verb",
      "Using articles -ը and -ն naturally around vowels and connected speech",
      "Recognizing reduced stems such as գիրք → գրքի rather than expecting the citation form unchanged",
      "Managing information-sensitive word order instead of using one rigid English template",
      "Distinguishing conversational forms from literary and Classical Armenian constructions"
    ],
    topics: [
      {
        title: "Definiteness lives at the end",
        body: cited(
          "Modern Armenian normally marks ‘the’ with a suffix: գիրք girkʿ is ‘a book/book,’ while գիրքը girkʿë is ‘the book.’ The article appears as -ը or -ն according to phonological context. This is an enclitic article: a small grammatical element attached to its host, not a separate word before the noun.",
          "wiki-eastern"
        ),
        example: "Գիրքը սեղանի վրա է։ Girkʿë seġani vra e.",
        exampleTranslation: "The book is on the table."
      },
      {
        title: "Cases build compact relationships",
        body: cited(
          "The genitive–dative form can express possession or a recipient, while ablative marks movement from and instrumental can express means. Learn endings through contrasts: Երևանում Yerevanum ‘in Yerevan,’ Երևանից Yerevanicʿ ‘from Yerevan,’ and Երևան Yerevan ‘to Yerevan’ in an ordinary motion expression. Case names describe patterns; the phrase determines the natural choice.",
          "wiki-language",
          "eanc"
        ),
        example: "Ես Երևանից եմ։ Yes Yerevanicʿ em.",
        exampleTranslation: "I am from Yerevan."
      },
      {
        title: "There is no grammatical gender",
        body: cited(
          "Nouns and adjectives do not divide into masculine and feminine agreement classes. Նա na can mean ‘he’ or ‘she,’ with context supplying the referent. This reduces agreement memorization but creates translation choices when English demands a gendered pronoun.",
          "wiki-language"
        ),
        example: "Նա լավ ուսուցիչ է։ Na lav usucʿičʿ e.",
        exampleTranslation: "He or she is a good teacher."
      },
      {
        title: "The present uses a participle and auxiliary",
        body: cited(
          "In modern Eastern Armenian, many present-progressive meanings combine an -ում form with the present of ‘be.’ The auxiliary often follows the focused early constituent rather than mechanically sitting at the end. Treat կարդում եմ kardum em ‘I read/am reading’ as a working unit before abstracting the paradigm.",
          "wiki-eastern",
          "eanc"
        ),
        example: "Ես հայերեն եմ սովորում։ Yes hayeren em sovorum.",
        exampleTranslation: "I am learning Armenian."
      },
      {
        title: "Western Armenian builds the present differently",
        body: cited(
          "Standard Western Armenian commonly forms the present with the particle կը gë before a finite verb, where Eastern Armenian uses its participle-plus-auxiliary construction. The contrast is systematic, not a handful of accent changes. Beginners should produce one model consistently while learning high-frequency equivalents in the other.",
          "wiki-western",
          "wiki-eastern"
        ),
        example: "Ես հայերէն կը սորվիմ։ Yes hayerēn gə sorvim. (Western Armenian)",
        exampleTranslation: "I learn/am learning Armenian."
      },
      {
        title: "Negation changes the verb phrase",
        body: cited(
          "Eastern Armenian uses չ- čʿ- and negative forms of the auxiliary; word order may shift compared with the affirmative. Memorize matched pairs rather than adding a free-standing ‘not’ at random: հասկանում եմ haskanum em ‘I understand,’ չեմ հասկանում čʿem haskanum ‘I do not understand.’",
          "wiki-eastern"
        ),
        example: "Ես չեմ հասկանում։ Yes čʿem haskanum.",
        exampleTranslation: "I do not understand."
      },
      {
        title: "Possession has more than one natural shape",
        body: cited(
          "A genitive possessor precedes the possessed noun, and possessive suffixes can attach to the noun. Իմ գիրքը im girkʿë means ‘my book,’ while գիրքս girkʿs can express ‘my book’ compactly. The final consonant is grammatical, not merely a clipped pronoun.",
          "wiki-language",
          "eanc"
        ),
        example: "Սա իմ ընկերոջ գիրքն է։ Sa im ënkeroǰ girkʿn e.",
        exampleTranslation: "This is my friend's book."
      },
      {
        title: "Word order serves focus",
        body: cited(
          "Armenian is often summarized as subject–object–verb, but authentic clauses move material to highlight contrast, introduce a topic, or place focus near the auxiliary. Ask a tutor what a rearrangement emphasizes rather than whether it is simply ‘allowed.’ Corpus searches reveal recurring constructions beyond invented textbook sentences.",
          "eanc"
        ),
        example: "Աննան է գիրքը բերել։ Annan e girkʿë berel.",
        exampleTranslation: "It was Anna who brought the book."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Armenian lives in a country and in communities shaped by several waves of migration. The Republic of Armenia has the largest public sphere for the language. Communities in Georgia and Iran have long local histories, while Western Armenian networks now link families and institutions across several continents.\n\nSpeaker totals are hard to compare. One census may ask about ethnicity, another about a first language, and another about what people use at home. Keep the measure and place attached to any number.",
      "wiki-language",
      "glottolog",
      "gulbenkian-western"
    ),
    regions: [
      { place: "Republic of Armenia", note: cited("Armenian is the state language and the medium of most public education, government, publishing, and national media. Everyday urban speech is more colloquial and contact-rich than formal news prose.", "wiki-eastern", "eanc") },
      { place: "Georgia and the South Caucasus", note: cited("Long-established Armenian communities remain in Georgia, including Tbilisi and Javakhk, alongside newer mobility across the region. Local repertoires can include Georgian and Russian as well as Armenian.", "glottolog", "wiki-language") },
      { place: "Iran", note: cited("Iranian Armenians generally use an Eastern Armenian standard with traditional orthography. Community schools, churches, and publishing preserve a model distinct from both Yerevan colloquial speech and Western Armenian.", "wiki-eastern", "unicode") },
      { place: "Lebanon, Syria, and Istanbul", note: cited("These have been crucial centers of Western Armenian education, journalism, literature, and performance. War, migration, and assimilation have changed their scale, but describing them only as remnants misses active cultural production.", "wiki-western", "gulbenkian-western") },
      { place: "Russia, Europe, and the Americas", note: cited("Large and internally diverse communities include recent migrants from Armenia and older Western and Eastern diasporas. Los Angeles alone contains multiple Armenian regional and educational histories, so ‘diaspora accent’ is not a single variety.", "wiki-language", "gulbenkian-western") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "The Armenian alphabet can look daunting at first, but its letter set is finite and the script runs left to right. There is no grammatical gender, and many endings recur.\n\nThe longer task is choosing a speaking model, learning its verb and noun patterns, and finding enough audio at your level. You may eventually read both spelling systems. A heritage learner with family contacts and an independent learner studying alone will have different strengths and needs.",
      "dd-less-common",
      "wiki-language"
    ),
    easierAspects: [
      "An alphabetic script with a manageable inventory and consistent left-to-right layout",
      "No grammatical gender or adjective agreement by gender",
      "Many reusable suffixes and transparent word families",
      "A strong relationship between literacy, community institutions, and cultural participation",
      "Expanding online dictionaries, corpora, courses, radio, and video"
    ],
    hardAspects: [
      "Selecting and consistently producing Eastern or Western pronunciation",
      "Learning case forms, stem alternations, and verb constructions in complete phrases",
      "Reading both reformed and traditional spelling when interests cross communities",
      "Finding graded listening with accurate transcripts",
      "Handling gaps between formal written Armenian and fast colloquial speech"
    ],
    plateauRisks: [
      "Continuing to read romanization after the first few weeks",
      "Mixing standards without labeling forms or asking how speakers perceive the mixture",
      "Reading literary prose while postponing unscripted conversation",
      "Treating heritage speakers as free proofreaders rather than building reciprocal relationships",
      "Equating correction with purity and avoiding the mixed spaces where Armenian is actually used"
    ],
    workload: cited(
      "Many learners can learn the letters and basic sounds in a few weeks. Conversation takes much longer because you need listening practice, full sentences, and feedback.\n\nTry twelve weeks with one course and one speaker or teacher. Work through the lessons in order, repeat one short recording at a time, and write a small corrected paragraph each week. Then deepen a topic that matters to you, such as family stories, news, cooking, or music.",
      "dd-less-common",
      "gulbenkian-western"
    )
  },
  advancedLearning: {
    strategy: cited(
      "At the intermediate stage, keep conversational phrases exactly as you hear them and compare them with edited prose. If you study both standards, make a separate page for Eastern and Western forms and for reformed and traditional spellings.\n\nRecord yourself telling a short personal story. Ask a speaker to correct it, then retell it without reading. This gives the grammar a job to do in speech.",
      "eanc",
      "dd-less-common"
    ),
    mediaPractice: cited(
      "Use Armenian news for careful Eastern speech, then interviews or comedy for faster everyday language. Western Armenian podcasts, newspapers, and community broadcasts let you hear another standard. Songs are memorable, though their grammar and rhythm may differ from conversation.\n\nWork with a minute of audio at a time. Listen, write what you heard, check it against a transcript or speaker, and repeat the corrected version. Summarize the clip aloud once you understand it.",
      "gulbenkian-western",
      "eanc"
    ),
    dictionariesAndCorpora: cited(
      "Nayiri lets you search multiple Armenian dictionaries. Check which dictionary supplied an entry, since it may represent Eastern, Western, or Classical Armenian.\n\nThe Eastern Armenian National Corpus was described in 2022 as containing about 110 million word tokens from written and spoken material dating from the mid-nineteenth century onward. It can show words in context when its search site is available. A frequent form in a corpus may still be wrong for your region or setting.",
      "nayiri",
      "eanc"
    ),
    resources: [
      { type: "course", title: "AGBU Armenian Virtual College", url: "https://www.avc-agbu.org/", level: "beginner", description: cited("Structured online Armenian courses with multimedia study; verify whether a class follows Eastern or Western Armenian before enrolling.", "avc") },
      { type: "course", title: "Classical Armenian Online", url: "https://lrc.la.utexas.edu/eieol_toc/armol", level: "advanced", description: cited("The University of Texas offers annotated Classical Armenian lessons built around historical texts, grammar points, and a base-form dictionary.", "ut-classical") },
      { type: "dictionary", title: "Nayiri Armenian dictionaries", url: "https://www.nayiri.com/", level: "all", description: cited("A searchable gateway to multiple Eastern, Western, Classical, explanatory, and bilingual dictionaries. Always note the selected dictionary and orthography.", "nayiri") },
      { type: "corpus", title: "Eastern Armenian National Corpus", url: "https://eanc.net/", level: "intermediate", description: cited("An academically documented collection of Eastern Armenian texts. Its search site may be unavailable; the linked research paper describes the corpus.", "eanc") },
      { type: "other", title: "Gulbenkian Western Armenian initiatives", url: "https://gulbenkian.pt/armenian-communities/priorities-and-activities/the-western-armenian-language/", level: "all", description: cited("A hub for understanding and finding contemporary Western Armenian revitalization, pedagogy, media, and technology projects.", "gulbenkian-western") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Հայ (hay) means an Armenian person. Related forms include հայերեն (hayeren), “Armenian language” or “in Armenian,” and Հայաստան (Hayastan), “Armenia.” These words show how familiar pieces reappear in longer forms.\n\nWriting may stay similar across Eastern and Western Armenian even when pronunciation changes. Keep a phrase beside each new word, and label the speaker model you heard.",
      "wiki-language",
      "nayiri"
    ),
    notableWords: [
      { term: "հայերեն", transliteration: "hayeren", meaning: "the Armenian language; in Armenian", note: cited("Built from հայ hay ‘Armenian’ and the language/adverbial ending -երեն. It is the natural answer to ‘What language?’ rather than merely an English label translated letter by letter.", "nayiri") },
      { term: "բարև", transliteration: "barev", meaning: "hello (Eastern spelling)", note: cited("The everyday greeting is written բարեւ barev in traditional orthography. One friendly word therefore demonstrates the orthographic split without implying a different meaning.", "unicode", "nayiri") },
      { term: "ընկեր", transliteration: "ënker", meaning: "friend; companion; colleague", note: cited("Context determines whether ընկեր is an intimate friend, classmate, colleague, or companion. Its first letter also lets learners practice the central vowel ը.", "nayiri") },
      { term: "ջան", transliteration: "jan", meaning: "dear; affectionate address particle", note: cited("Placed after a name or kin term—Անի ջան Ani jan—it conveys warmth. Its exact force depends on relationship and tone; mechanical use with strangers can sound overly familiar.", "nayiri", "eanc") },
      { term: "կարոտ", transliteration: "karot", meaning: "longing; missing someone or somewhere", note: cited("A culturally resonant word in songs and diaspora conversation, but also an ordinary noun. Կարոտել karotel means ‘to miss/long for’; learn it in a real sentence rather than treating it as untranslatable folklore.", "nayiri", "eanc") },
      { term: "հայրենիք", transliteration: "hayrenikʿ", meaning: "homeland", note: cited("Prominent in political, literary, and diaspora language. The referent and emotion are contextual: homeland can mean a state, ancestral place, lived home, or imagined community.", "nayiri", "gulbenkian-western") },
      { term: "խոսք", transliteration: "xoskʿ", meaning: "word; speech; discourse", note: cited("This compact word appears in compounds and expressions about promises, speaking, and public address. Its initial խ gives pronunciation practice.", "nayiri", "eanc") },
      { term: "աշխարհ", transliteration: "ašxarh", meaning: "world", note: cited("A recognizable literary and everyday word whose final cluster challenges beginners. Classical and modern texts make it a productive search term for seeing the continuity and change of Armenian writing.", "ut-classical", "nayiri") }
    ],
    loanwordLayers: cited(
      "Iranian loanwords entered Armenian over many centuries. Greek and Syriac terms often appear in early scholarship and Christianity; Arabic, Turkic, French, and Russian left other traces in different places and periods. English now appears in technology and youth culture.\n\nA speaker may choose a Russian-derived casual word in conversation and an Armenian coinage in formal writing. That is a choice of tone and setting. Check actual usage before calling a borrowed word wrong.",
      "britannica",
      "wiki-language",
      "eanc"
    ),
    idioms: [
      { original: "աչքի լույս", transliteration: "ačkʿi luys", translation: "someone dearly cherished", note: "Literally ‘light of the eye’; it belongs to affectionate and literary language, so learn who can naturally say it to whom." },
      { original: "գլուխ հանել", transliteration: "glux hanel", translation: "to understand or manage something", note: "Literally ‘to bring out a head’; used when getting to the bottom of a task or figuring something out. The object commonly appears with an ablative form." },
      { original: "ձեռք մեկնել", transliteration: "dzerkʿ meknel", translation: "to lend a hand; offer help", note: "Literally ‘to extend a hand.’ Learn the Armenian phrase rather than translating English ‘give a hand’ word by word." },
      { original: "քիթը խոթել", transliteration: "kʿitʿë xotʿel", translation: "to stick one's nose into something", note: "Literally ‘to push the nose in.’ Colloquial and disapproving; articles and case forms change with the sentence." },
      { original: "սիրտ տալ", transliteration: "sirt tal", translation: "to encourage", note: "Literally ‘to give heart,’ a memorable example of an ordinary noun forming a meaning larger than its parts." }
    ],
    textGenres: [
      "fifth-century histories, translations, theology, and Classical Armenian liturgy",
      "medieval manuscript poetry, colophons, fables, and Cilician writing",
      "nineteenth- and twentieth-century Eastern and Western Armenian novels, newspapers, memoirs, and poetry",
      "diaspora newspapers, school magazines, podcasts, and children's literature",
      "contemporary Armenia-based fiction, journalism, film dialogue, rap, rock, and social media"
    ]
  },
  relationships: {
    overview: cited(
      "Armenian has its own branch within Indo-European. It shares ancient ancestry with Greek, Persian, and other languages in that family, but its present-day grammar has followed its own path.\n\nPersian helps explain borrowed words, Georgian helps explain regional contact, and Classical Armenian shows older stages of Armenian itself. These are three different kinds of relationship: family, contact, and historical continuity.",
      "glottolog",
      "britannica",
      "ut-classical"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "For many Armenians, the alphabet connects family, schooling, worship, and survival. Ask speakers which Armenian they use and how they learned it; spelling choices can reflect different community histories.\n\nArmenian literature includes Hovhannes Tumanyan’s stories, Yeghishe Charents’s poetry, and Zabel Yesayan’s prose. Journalism, comedy, music, and family messages show how people use the language now.\n\nThe genocide is essential to understanding the displacement of Western Armenian communities. Today people keep Western Armenian active through schools, camps, books, podcasts, friendships, and new art.",
  resources: [
    { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A practical framework for building a study system when Armenian resources are scattered: one main course, audio, checked sentences, a teacher, and community feedback.", "dd-less-common") },
    { type: "course", title: "AGBU Armenian Virtual College", url: "https://www.avc-agbu.org/", level: "beginner", description: cited("Online language and culture study with multimedia materials. Confirm the standard and course calendar before committing.", "avc") },
    { type: "dictionary", title: "Nayiri.com", url: "https://www.nayiri.com/", level: "all", description: cited("Search numerous Armenian dictionaries from one interface; particularly valuable when moving between Eastern, Western, traditional, and reformed forms.", "nayiri") },
    { type: "corpus", title: "Eastern Armenian National Corpus", url: "https://eanc.net/", level: "intermediate", description: cited("The corpus documents Eastern Armenian use across time and genres. Its search site may be unavailable; start with the linked research paper if it does not load.", "eanc") },
    { type: "course", title: "University of Texas Classical Armenian Online", url: "https://lrc.la.utexas.edu/eieol_toc/armol", level: "advanced", description: cited("A free text-centered route into grabar with lessons, grammar points, and lexical tools.", "ut-classical") },
    { type: "community", title: "Calouste Gulbenkian Foundation Armenian Communities", url: "https://gulbenkian.pt/en/armenians/", level: "all", description: cited("Follow Western Armenian language, education, cultural creativity, and revitalization initiatives across the diaspora.", "gulbenkian-western") },
    { type: "media", title: "Public Radio of Armenia — Հայերեն", url: "https://hy.armradio.am/", level: "intermediate", description: cited("Armenian-language news and audio from Armenia. Try one short report for transcription and shadowing practice.", "armradio-hy") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Բարև։", transliteration: "Barev.", translation: "Hello.", usageNote: "Common Eastern Armenian greeting; traditional spelling writes բարեւ." },
    { original: "Բարև ձեզ։", transliteration: "Barev dzez.", translation: "Hello (polite or plural).", literalMeaning: "Hello to you.", usageNote: "A safe greeting for strangers, elders, or more than one person." },
    { original: "Ինչպե՞ս եք։", transliteration: "Inčʿpes ekʿ?", translation: "How are you? (polite/plural)", usageNote: "Notice that the Armenian question mark sits over the stressed vowel inside the question word." },
    { original: "Լավ եմ, շնորհակալություն։", transliteration: "Lav em, šnorhakalutʿyun.", translation: "I'm well, thank you." },
    { original: "Խնդրում եմ։", transliteration: "Xndrum em.", translation: "Please; you're welcome.", literalMeaning: "I request.", usageNote: "Context distinguishes a request marker from the response to thanks." },
    { original: "Կներեք։", transliteration: "Knerekʿ.", translation: "Excuse me; sorry.", usageNote: "Polite/plural Eastern form for gaining attention as well as apologizing." },
    { original: "Ես հայերեն եմ սովորում։", transliteration: "Yes hayeren em sovorum.", translation: "I am learning Armenian." },
    { original: "Ես չեմ հասկանում։", transliteration: "Yes čʿem haskanum.", translation: "I don't understand." },
    { original: "Կարո՞ղ եք կրկնել։", transliteration: "Karoġ ekʿ krknel?", translation: "Can you repeat that? (polite/plural)" },
    { original: "Խնդրում եմ, ավելի դանդաղ։", transliteration: "Xndrum em, aveli dandaġ.", translation: "More slowly, please." },
    { original: "Սա ի՞նչ է նշանակում։", transliteration: "Sa inčʿ e nšanakum?", translation: "What does this mean?" },
    { original: "Որտե՞ղ է կայարանը։", transliteration: "Vorteġ e kayaranë?", translation: "Where is the station?" },
    { original: "Որքա՞ն արժե։", transliteration: "Orkʿan arže?", translation: "How much does it cost?" },
    { original: "Ցտեսություն։", transliteration: "Cʿtesutʿyun.", translation: "Goodbye.", usageNote: "Neutral standard farewell; among friends you will also hear borrowed informal forms in some communities." },
    { original: "Բարի գիշեր։", transliteration: "Bari gišer.", translation: "Good night." }
  ],
  sources: [
    { id: "dd-less-common", title: "Best Less-Common Language Learning Resources: What Actually Works", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", updatedAt: "2026-05-11", accessedAt: "2026-09-27" },
    { id: "wiki-language", title: "Armenian language", url: "https://en.wikipedia.org/wiki/Armenian_language", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-alphabet", title: "Armenian alphabet", url: "https://en.wikipedia.org/wiki/Armenian_alphabet", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-eastern", title: "Eastern Armenian", url: "https://en.wikipedia.org/wiki/Eastern_Armenian", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-western", title: "Western Armenian", url: "https://en.wikipedia.org/wiki/Western_Armenian", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "unicode", title: "The Unicode Standard, Chapter 7.6: Armenian", url: "https://unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-09-27" },
    { id: "unicode-phonetic", title: "Armenian Phonetic Characters in Unicode", url: "https://www.unicode.org/L2/L2017/17032-armenian-add.pdf", publisher: "Unicode Consortium", publishedAt: "2017", accessedAt: "2026-09-27" },
    { id: "glottolog", title: "Eastern-Western Armenian", url: "https://glottolog.org/resource/languoid/id/east2768", publisher: "Glottolog 5.3", updatedAt: "2026", accessedAt: "2026-09-27" },
    { id: "ut-classical", title: "Classical Armenian Online", url: "https://lrc.la.utexas.edu/eieol_toc/armol", publisher: "Linguistics Research Center, University of Texas at Austin", accessedAt: "2026-09-27" },
    { id: "gulbenkian-western", title: "The Western Armenian Language", url: "https://gulbenkian.pt/armenian-communities/priorities-and-activities/the-western-armenian-language/", publisher: "Calouste Gulbenkian Foundation Armenian Communities Department", updatedAt: "2023-02-24", accessedAt: "2026-09-27" },
    { id: "eanc", title: "Eastern Armenian National Corpus: State of the Art and Perspectives", url: "https://aclanthology.org/2022.digitam-1.5/", publisher: "ACL Anthology", publishedAt: "2022", accessedAt: "2026-09-27" },
    { id: "nayiri", title: "Nayiri Armenian Dictionary Library", url: "https://www.nayiri.com/", publisher: "Nayiri.com", accessedAt: "2026-09-27" },
    { id: "avc", title: "Armenian Virtual College", url: "https://www.avc-agbu.org/", publisher: "Armenian General Benevolent Union", accessedAt: "2026-09-27" },
    { id: "armradio-hy", title: "Public Radio of Armenia — Armenian edition", url: "https://hy.armradio.am/", publisher: "Public Radio of Armenia", accessedAt: "2026-09-27" },
    { id: "britannica", title: "Armenian language", url: "https://www.britannica.com/topic/Armenian-language", publisher: "Encyclopaedia Britannica", accessedAt: "2026-09-27" }
  ],
  seo: {
    title: "Armenian Language Guide: Eastern, Western, Alphabet and Grammar",
    description: "Learn Armenian through its Eastern and Western standards, alphabet, spelling systems, grammar examples, history, communities, phrases, and study resources."
  }
} satisfies LanguageGuide;
