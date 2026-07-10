import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Khanty",
    relationship: "Distant Ugric relative within Uralic",
    explanation: cited(
      "Khanty is one of Hungarian's closest living genealogical relatives, but “closest” here still means a separation measured in millennia. A Hungarian speaker cannot understand Khanty without study. Comparisons are valuable because inherited vocabulary and structural correspondences help linguists reconstruct earlier stages, not because the modern languages sound alike.",
      "glottolog-hungarian",
      "nsul"
    )
  },
  {
    name: "Mansi",
    relationship: "Distant Ugric relative within Uralic",
    explanation: cited(
      "Mansi is conventionally grouped with Hungarian and Khanty in the Ugric branch. The exact internal history of Uralic continues to be researched, and modern Mansi is endangered. For learners, the important correction is simple: a family tree records common descent, not present-day mutual intelligibility.",
      "glottolog-hungarian",
      "wiki-hungarian"
    )
  },
  {
    name: "Finnish",
    slug: "finnish",
    relationship: "Distant Uralic relative",
    explanation: cited(
      "Finnish and Hungarian share remote Uralic ancestry and some broad typological tendencies, including extensive suffixing and no grammatical gender. Their everyday vocabularies and sound histories have diverged so far that they are not mutually intelligible. Similar-looking grammar is not evidence that one is a dialect of the other.",
      "glottolog-hungarian",
      "wiki-hungarian"
    )
  },
  {
    name: "Turkish",
    slug: "turkish",
    relationship: "Unrelated language with historical contact and typological similarities",
    explanation: cited(
      "Turkish is Turkic, not Uralic. Hungarian nevertheless contains old Turkic loan layers, and both languages use vowel harmony and long suffix sequences. Those resemblances make comparison useful, but they do not establish close descent; Hungarian also absorbed later Ottoman Turkish words during centuries of direct contact.",
      "wiki-hungarian",
      "uesz"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const hungarianGuide = {
  slug: "hungarian",
  name: "Hungarian",
  autonym: "magyar",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Hungarian is a Uralic language at the center of a Central European speech community, famous for expressive word order, vowel harmony, precise spatial suffixes, and a literary culture that sounds unlike its Indo-European neighbors.",
  family: "Uralic, Ugric",
  macroRegion: "Hungary, the Carpathian Basin, and global Hungarian communities",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Hungarian lets a speaker build startlingly precise words from compact pieces, then reshape the same sentence to say what is already known, what is new, and what matters most.",
  hero: {
    imageAlt: "Contemporary Hungarian text showing accented vowels and characteristic digraphs.",
    callToActionLabel: "Explore Hungarian in use"
  },
  classification: "A Ugric language in the Uralic family and the national language of Hungary",
  speakerCommunity: "Hungarian is the ordinary public and private language of Hungary and the home language of historic communities elsewhere in the Carpathian Basin. In Romania, Slovakia, Serbia, Ukraine, Austria, Croatia, and Slovenia, borders moved around long-established speakers during the twentieth century. Newer diasporas sustain schools, associations, publishing, and online media worldwide. Census categories such as mother tongue, ethnicity, language known, and family use count different things, so one global total can mislead. Hungary's 2022 census reports that 99 percent of residents speak Hungarian, while estimates commonly place the worldwide community at roughly 13 million. Language choice may carry family history and political weight.",
  facts: [
    { label: "Family", value: "Uralic · conventionally Ugric" },
    { label: "Community", value: "Roughly 13 million speakers worldwide; census definitions vary" },
    { label: "Core region", value: "Hungary and historic communities across the Carpathian Basin" },
    { label: "Writing", value: "Latin alphabet with long vowels and multi-letter consonants" },
    { label: "Stress", value: "Normally on the first syllable of a word" },
    { label: "Signature grammar", value: "Suffix chains, vowel harmony, two object-sensitive verb conjugations, and discourse-shaped word order" }
  ],
  learnerOverview: "Hungarian offers fewer familiar words than an English speaker may expect in Central Europe, but it is not a maze of exceptions. Spelling is informative, stress is steady, nouns have no grammatical gender, and suffixes have recurring jobs. Instead of memorizing házban “in the house” as opaque, recognize ház “house” plus -ban “inside/in,” then compare házba “into” and házból “out of.” Learn a noun with its plural, accusative, and one local form; learn a verb in neutral and focused sentences. Preserve vowel length from week one: kor “age” and kór “disease” differ. Full dialogues reveal polite address, definite conjugation, and prefix placement. Endings act like camera controls: they locate events, identify objects, and direct attention.",
  origins: {
    overview: cited(
      "Hungarian belongs to Uralic and is conventionally placed with Khanty and Mansi in Ugric, though that subgroup's internal history remains under study. Ancestors of Hungarian speakers moved west through long contact before Magyar groups entered the Carpathian Basin around the late ninth century. Language and population history are not interchangeable: languages spread and shift without mapping neatly onto genes. After the Christian kingdom formed around 1000, Latin dominated literacy, while Hungarian increasingly appeared inside Latin documents. The 1055 Tihany charter contains Hungarian phrases; the Funeral Sermon and Prayer of about 1192–1195 is the earliest surviving continuous text. Printing, Bible translation, literature, and nineteenth-century reform expanded its public roles.",
      "wiki-hungarian",
      "wiki-hungarian",
      "tihany"
    ),
    timeline: [
      {
        period: "Before the late 9th century",
        event: cited(
          "Early Hungarian developed within the Uralic world and through contact on the Eurasian steppe. Iranian and several Turkic layers entered the vocabulary before settlement in the Carpathian Basin; words connected with pastoral life, agriculture, trade, and social organization preserve parts of that history.",
          "wiki-hungarian",
          "uesz"
        )
      },
      {
        period: "c. 895–1200",
        event: cited(
          "Magyar groups established themselves in the Carpathian Basin, and the Christian kingdom adopted Latin literacy. Hungarian personal names and phrases occur in Latin charters. The Tihany charter of 1055 includes the celebrated sequence feheruuaru rea meneh hodu utu rea, while the Funeral Sermon offers a sustained view of late twelfth-century Hungarian.",
          "tihany",
          "wiki-hungarian"
        )
      },
      {
        period: "16th–18th centuries",
        event: cited(
          "Printing and religious division stimulated vernacular writing. Gáspár Károli's 1590 Bible became especially influential. The kingdom's division among Habsburg, Ottoman, and Transylvanian centers intensified multilingual contact, while Hungarian remained a literary and community language beside Latin, German, Turkish, Slavic languages, and Romanian.",
          "wiki-hungarian",
          "wiki-hungarian"
        )
      },
      {
        period: "Late 18th–19th centuries",
        event: cited(
          "The nyelvújítás, or language-renewal movement, coined and revived thousands of terms so Hungarian could carry modern science, administration, philosophy, and art. The Hungarian Academy of Sciences, founded in 1825, became a central standardizing institution; Hungarian replaced Latin as the kingdom's official language in 1844.",
          "standard-history",
          "wiki-hungarian"
        )
      },
      {
        period: "20th century to the digital present",
        event: cited(
          "Border changes after the First World War left large Hungarian communities outside Hungary. Education, broadcasting, and urban mobility strengthened the standard, while regional and minority varieties continued. Today digital publishing and social media join a mature national media system to active cross-border cultural networks.",
          "wiki-hungarian",
          "ksh-2022",
          "national-atlas-dialects"
        )
      }
    ],
    contactHistory: cited(
      "Hungarian vocabulary maps repeated contact. Its Uralic core includes basic verbs, body terms, kinship, numbers, and nature. Iranian and early Turkic loans reflect steppe life; Slavic layers are prominent in agriculture, Christianity, food, and settlement; German shaped crafts and urban life; Latin supplied church, school, and law; Ottoman contact added later Turkish words; neighboring languages influenced regional speech. Modern technical terms often have international or English sources. Loans adapt to Hungarian sounds, stress, and suffixes. The New Hungarian Etymological Dictionary matters because resemblance alone is unreliable.",
      "uesz",
      "wiki-hungarian"
    ),
    standardization: cited(
      "Modern standard Hungarian grew from overlapping northeastern and eastern-central written traditions rather than from one instant decree. Writers, printers, schools, the language-renewal movement, and the Academy all contributed. The Academy's spelling rules have institutional force in education and publishing, but everyday speech remains socially and regionally varied. Standard Hungarian is not identical to formal bureaucratic prose: contemporary conversation permits contractions, particles, discourse markers, and choices that textbooks may postpone. Across borders, local standards may retain vocabulary or constructions influenced by Romanian, Slovak, Serbian, or Ukrainian. Treat these as real Hungarian in real multilingual settings, not as failed copies of Budapest speech.",
      "standard-history",
      "national-atlas-dialects",
      "hunren-tools"
    )
  },
  variants: {
    overview: cited(
      "Hungarian dialects are broadly mutually understandable but differ in vowels, vocabulary, suffix forms, and intonation. School and media norms can cause speakers to level local features. Dialect geography crosses borders: Palóc speech spans northern Hungary and southern Slovakia; Székely varieties center on eastern Transylvania; Vojvodina and Transcarpathia have distinct contact settings. Moldavian Csángó varieties are more divergent and face severe intergenerational shift. No regional accent is evidence of poor education.",
      "national-atlas-dialects",
      "csango-study",
      "national-atlas-dialects"
    ),
    items: [
      {
        name: "Contemporary standard Hungarian",
        note: cited("The reference variety of schools, national news, most publishing, and language courses. Educated conversation is less formal than written institutional Hungarian and contains abundant particles such as hát, ugye, and persze.", "standard-history", "hnc")
      },
      {
        name: "Palóc and northern varieties",
        note: cited("Spoken across northern Hungary and adjacent Slovakia, with characteristic vowel realizations and local vocabulary. The region is internally diverse; “Palóc accent” is an umbrella, not a single uniform voice.", "national-atlas-dialects")
      },
      {
        name: "Székely and other Transylvanian varieties",
        note: cited("Hungarian in Romania includes urban standard-like speech and regional varieties with distinctive vocabulary, pronunciation, and contact features. Székely identity and speech are not interchangeable with all Transylvanian Hungarian.", "national-atlas-dialects", "hnc")
      },
      {
        name: "Vojvodina, southern Slovakia, and Transcarpathia",
        note: cited("These historic minority settings sustain Hungarian education and media to different degrees. Contact vocabulary and code-switching reflect multilingual lives; local forms may be perfectly conventional within their communities.", "hnc", "wiki-hungarian")
      },
      {
        name: "Moldavian Csángó varieties",
        note: cited("Several traditional varieties in Romanian Moldavia preserve unusual features and show extensive Romanian contact. Shift to Romanian has reduced transmission, so learners should approach recordings as the voices of living communities rather than linguistic fossils.", "csango-study", "hunren-tools")
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Hungarian spelling gives learners a good route into pronunciation, provided every accent and consonant sequence is taken seriously. Word stress normally falls on the first syllable, including in long words, but vowel and consonant length can distinguish meaning. The vowel inventory pairs short and long qualities: a/á and e/é differ in quality as well as duration, while i/í, o/ó, ö/ő, and u/ú, ü/ű contrast chiefly by length. Front rounded ö/ő and ü/ű require lip rounding while the tongue stays forward. Consonant letters such as sz, s, cs, gy, ny, ty, and zs represent single sounds; their spelling cannot be decoded by English habits.",
      "wiki-hungarian",
      "wiki-hungarian"
    ),
    script: "Modern Hungarian Latin alphabet; pronunciation notes use simple IPA-style descriptions",
    soundSystem: cited(
      "Length is structural. Short kor /kor/ “age” contrasts with kór /koːr/ “disease,” and megy “goes” contrasts with meggy “sour cherry” through consonant length. Hungarian also applies voicing assimilation in consonant clusters: spelling preserves morphology while speech may make one consonant match its neighbor in voicing. The digraph gy is a palatal stop, approximately a single d-like sound made with the middle of the tongue raised toward the hard palate; ty is its voiceless partner, and ny resembles Spanish ñ. Hungarian r is usually tapped or trilled. Native words generally obey front–back vowel harmony, though neutral vowels, compounds, and loanwords complicate the classroom rule.",
      "wiki-hungarian",
      "wiki-grammar"
    ),
    prosody: cited(
      "Fixed initial stress does not make every first syllable equally loud. In connected speech, sentence focus, contrast, and phrasing create stronger accents, while post-focus material can be compressed. Long suffix chains still begin with one lexical stress: egészségedre “to your health” starts strongly on e-, not on each meaningful ending. Questions are especially worth copying from recordings: yes–no questions often have a characteristic rise–fall contour rather than simply rising at the end. Shadow whole clauses and tap the long vowels and doubled consonants; otherwise English stress habits can shorten the very contrasts spelling carefully marks.",
      "wiki-hungarian",
      "wiki-grammar"
    ),
    learnerTraps: [
      "Reading sz as English /ʃ/: Hungarian sz is /s/, while s is /ʃ/",
      "Treating á, é, í, ó, ő, ú, and ű as decorative accents instead of separate long vowels",
      "Pronouncing gy as two sounds /g/ + /j/ rather than one palatal consonant",
      "Dropping consonant length in words such as meggy or hall, which can change the word",
      "Stressing a late suffix because it carries important meaning; lexical stress remains initial",
      "Applying vowel harmony as if every loanword and neutral-vowel stem were mechanically predictable"
    ],
    sampleWords: [
      { original: "kor / kór", translation: "age / disease", note: "A compact demonstration that ó is not merely a typographic variant of o." },
      { original: "örül / őrül", translation: "is glad / goes mad", note: "Keep the lips rounded in both words, then lengthen the vowel in őrül." },
      { original: "megy / meggy", translation: "goes / sour cherry", note: "The doubled gy is held longer; it is not written for decoration." },
      { original: "szél / cél", translation: "wind / aim", note: "Sz is /s/, while c is /ts/; both contain long é." },
      { original: "sör", translation: "beer", note: "S represents English-like “sh,” and ö is a short front rounded vowel." },
      { original: "gyönyörű", translation: "beautiful", note: "A useful workout for gy, ö, ny, and final long ű, with stress on the first syllable." },
      { original: "tyúk", translation: "hen", note: "Ty is one voiceless palatal consonant, followed by a long ú." }
    ]
  },
  writing: {
    overview: cited(
      "Modern Hungarian uses a Latin alphabet that treats digraphs and one trigraph as letters in their own right: cs, dz, dzs, gy, ly, ny, sz, ty, and zs. Dictionaries alphabetize them as units. The letters ő and ű use the double acute accent, represented in Unicode as precomposed characters or canonically equivalent base-plus-combining sequences. Historical Hungarian also has a right-to-left runiform script encoded by Unicode as Old Hungarian; it appears today in cultural, scholarly, educational, and decorative contexts, but ordinary literacy uses Latin script.",
      "unicode-latin",
      "unicode-old-hungarian",
      "wiki-hungarian"
    ),
    primaryScript: "Hungarian Latin alphabet",
    romanization: cited(
      "Hungarian already uses Latin letters, so learners need pronunciation guidance rather than a separate romanization. English-friendly respellings often create more problems than they solve: writing “sh” for s hides the actual alphabet and makes sz harder. Learn the Hungarian letter values directly and keep accents when searching, texting, and making flashcards.",
      "wiki-hungarian",
      "unicode-latin"
    ),
    spellingNorms: cited(
      "Hungarian spelling balances pronunciation, morphology, convention, and etymology. Suffixes may trigger apparent changes while spelling keeps word structure visible. Definite articles are a before consonants and az before vowels. Family names and historical spellings preserve combinations such as cz, y, or th that are not productive modern sound rules. The letter ly is usually pronounced like j in the standard, but etymological spelling keeps the distinction. Long consonants normally double the first character of a digraph: hosszú “long” contains ssz, not szsz. Compound spelling can become technical, so polished formal writing benefits from an Academy dictionary or spell-checker rather than intuition alone.",
      "wiki-hungarian",
      "hunren-tools"
    ),
    styleNotes: [
      cited("Type ő and ű correctly. Replacing them with o, u, ô, or û can obscure words and looks careless in public prose; Unicode supports the proper characters everywhere modern text should work.", "unicode-latin"),
      cited("Learn digraphs as alphabetic units, but remember that morphology can place ordinary letters beside each other across a boundary. Dictionary lookup and slow pronunciation resolve ambiguity.", "wiki-hungarian"),
      cited("Expect older names and quotations to preserve historical spelling. Do not modernize a person's name simply because its letters look unfamiliar.", "wiki-hungarian"),
      cited("Use the Hungarian National Corpus to compare a suspected formal phrase with actual journalism, literature, science, and conversational data before copying it into an essay.", "hnc")
    ]
  },
  grammar: {
    overview: cited(
      "Hungarian is strongly agglutinative: many words are built by adding recognizable suffixes in an ordered chain. “Agglutinative” does not mean every boundary is perfectly transparent; linking vowels, stem alternations, assimilation, and irregular high-frequency forms still matter. Grammatical relations are marked mainly on words, allowing sentence order to organize discourse as well as identify roles. Hungarian lacks noun gender, permits omitted subject pronouns when the verb makes the person clear, has no distinct possessive verb equivalent to English “have,” and conjugates many transitive verbs differently according to the object.",
      "wiki-grammar",
      "nsul"
    ),
    typologicalProfile: cited(
      "A noun can combine plural, possession, case, and other derivation: ház “house,” házak “houses,” házam “my house,” házamban “in my house.” Descriptions differ on the exact number of cases because some endings sit on the border between case suffixes and derivational or adverbial markers. Quoting “18 cases” is a useful textbook convention, not a fact that all linguists segment identically. Several local cases form elegant three-way sets: -ban/-ben “in,” -ba/-be “into,” -ból/-ből “out of”; -on/-en/-ön “on,” -ra/-re “onto,” -ról/-ről “off/about”; and -nál/-nél “at,” -hoz/-hez/-höz “to,” -tól/-től “from.”",
      "wiki-grammar",
      "nsul"
    ),
    morphology: cited(
      "Vowel harmony chooses among suffix forms so vowels agree broadly in frontness, sometimes also rounding: házban “in a house,” kertben “in a garden,” földön “on the ground.” Some suffixes have one form; others have two or three. Neutral i, í, e, and é in a stem can behave historically rather than visually, so learners should record an example suffixed form with each new noun. Verbs mark person, number, tense, mood, and the indefinite/definite contrast. Derivation is highly productive: tanul “study,” tanuló “learner,” tanulás “studying,” tanulmány “study/article,” though meanings cannot always be assembled mechanically.",
      "wiki-grammar",
      "wiki-hungarian"
    ),
    syntax: cited(
      "Hungarian is often called a discourse-configurational language: the positions around the verb help mark topic, focus, and the scope of negation. A neutral sentence may resemble subject–verb–object, but moving an element is not random decoration. The immediately preverbal focus position commonly identifies an exhaustive or contrastive answer. Éva elolvasta a könyvet is a neutral “Éva read the book,” while ÉVA olvasta el a könyvet answers “Who read it?” and places the prefix el after the verb. Case suffixes keep Éva and a könyvet recognizable, but order tells the listener how the statement fits the conversation.",
      "wiki-grammar",
      "wiki-grammar"
    ),
    advancedPainPoints: [
      "Choosing definite versus indefinite verb endings from the actual referential status of the object",
      "Placing verbal prefixes around focus, negation, imperatives, infinitives, and auxiliaries",
      "Hearing vowel and consonant length while processing several suffixes",
      "Using case endings idiomatically with verbs rather than translating English prepositions",
      "Controlling polite maga/ön address, tegezés, and register without sounding stiff or intrusive",
      "Reading information structure from word order instead of calling every grammatical order interchangeable"
    ],
    topics: [
      {
        title: "Vowel harmony makes suffixes fit the stem",
        body: cited("Many suffixes select a back-vowel or front-vowel form; rounded front stems sometimes select a third. The dictionary does not list kertben and házban as separate words because -ban/-ben performs the same job. Mixed stems, loanwords, and neutral-vowel roots must still be learned from evidence.", "wiki-grammar", "wiki-hungarian"),
        example: "A házban lakom, de a kertben dolgozom.",
        exampleTranslation: "I live in the house, but I work in the garden."
      },
      {
        title: "Case suffixes encode spatial geometry",
        body: cited("Hungarian distinguishes rest, movement toward, and movement away within several spatial series. These endings extend metaphorically: a könyvről can mean “off the book” in a physical context or “about the book” in conversation. Learn the noun together with the verb that selects it.", "wiki-grammar", "nsul"),
        example: "Bemegyek a boltba, a boltban veszek kenyeret, aztán kijövök a boltból.",
        exampleTranslation: "I go into the shop, buy bread in the shop, then come out of the shop."
      },
      {
        title: "The verb tracks whether an object is definite",
        body: cited("With an indefinite or absent object, first-person singular olvasok means “I read/am reading.” With a specific definite object, olvasom means “I read/am reading it.” Proper names, demonstratives, possessed nouns, and objects with the definite article normally trigger the definite series; first- and second-person objects have special behavior.", "wiki-grammar"),
        example: "Olvasok egy könyvet. Olvasom a könyvet.",
        exampleTranslation: "I am reading a book. I am reading the book."
      },
      {
        title: "Possession is built into the noun phrase",
        body: cited("Hungarian commonly expresses “I have” as a possessive construction with van “is”: literally, “there is a book-my.” The possessor can carry -nak/-nek, especially when explicit or emphasized, while the possessed noun bears a person-number suffix.", "nsul", "wiki-grammar"),
        example: "Van egy jó könyvem. Péternek két testvére van.",
        exampleTranslation: "I have a good book. Péter has two siblings."
      },
      {
        title: "Verbal prefixes shape aspect and direction",
        body: cited("Prefixes such as meg-, el-, be-, ki-, and fel- can add completion, direction, or a lexicalized meaning. In a neutral finite clause a prefix often stands before the verb, but focus, negation, and some imperative structures separate or reverse it. Its movement is therefore a visible clue to sentence structure.", "wiki-grammar"),
        example: "Péter megírta a levelet. PÉTER írta meg a levelet. Péter nem írta meg a levelet.",
        exampleTranslation: "Péter wrote the letter. It was PÉTER who wrote the letter. Péter did not write the letter."
      },
      {
        title: "Word order manages topic and focus",
        body: cited("Case marking allows several orders, but each choice packages information differently. Material before the focus can establish a topic; the focused constituent immediately before the verb commonly answers a contrastive question. After the focus, the verb may lose its prefix and following material receives less prominence.", "wiki-grammar"),
        example: "János tegnap ment Budapestre. János BUDAPESTRE ment tegnap.",
        exampleTranslation: "János went to Budapest yesterday. It was TO BUDAPEST that János went yesterday."
      },
      {
        title: "Articles and number behave differently from English",
        body: cited("Hungarian has indefinite egy and definite a/az articles. After numerals, a noun normally stays morphologically singular: három könyv, literally “three book.” A plural object still takes its case ending after the plural marker, as in könyveket “books” as an object.", "wiki-grammar"),
        example: "Három almát kérek, nem az egész kosarat.",
        exampleTranslation: "I'd like three apples, not the whole basket."
      },
      {
        title: "Politeness changes pronouns and verb forms",
        body: cited("Hungarian distinguishes informal te from polite forms such as ön and maga, alongside titles and name-based address. Informal plural ti contrasts with önök/maguk. The social choice is not reducible to age: workplace culture, family introductions, service settings, and an explicit invitation to tegeződni all matter.", "wiki-grammar", "hnc"),
        example: "Hogy vagy? Hogy van? Tegeződhetünk?",
        exampleTranslation: "How are you? [informal] How are you? [polite] May we use informal address?"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Hungarian's geography is best understood as a language continuum centered on Hungary but extending across the modern borders of the Carpathian Basin. About 99 percent of Hungary's residents reported knowledge of Hungarian in the 2022 census. Large historic communities live in Romania, especially Transylvania; southern Slovakia; Serbia's Vojvodina; and western Ukraine's Transcarpathia, with smaller established populations in Austria, Croatia, and Slovenia. Political status, schooling, public signage, and daily bilingualism differ sharply by country. Diaspora speakers elsewhere range from first-generation adults to heritage learners rebuilding a language heard from grandparents.",
      "ksh-2022",
      "wiki-hungarian",
      "national-atlas-dialects"
    ),
    regions: [
      { place: "Hungary", note: cited("The national language across government, education, media, literature, and daily life. Budapest speech is influential but does not erase regional identities or the distinction between conversational and institutional registers.", "ksh-2022", "hnc") },
      { place: "Romania", note: cited("Transylvania contains the largest Hungarian-speaking population outside Hungary, including Székely-majority districts and bilingual cities. Romanian contact and minority-language institutions shape vocabulary and usage.", "wiki-hungarian", "national-atlas-dialects") },
      { place: "Slovakia and Serbia", note: cited("Southern Slovakia and northern Vojvodina sustain historic Hungarian communities, schools, publishing, and media. Local repertoires often include Slovak or Serbian as well as Hungarian.", "wiki-hungarian", "hnc") },
      { place: "Ukraine, Austria, Croatia, and Slovenia", note: cited("Smaller historic communities use Hungarian under different legal and educational conditions. Current speaker totals may change quickly through migration, particularly in and from Ukraine.", "wiki-hungarian") },
      { place: "Global diaspora", note: cited("Twentieth- and twenty-first-century migration created communities across Western Europe, North America, Australia, Israel, and elsewhere. Heritage ability may be strongest in family conversation and weaker in spelling or formal registers.", "wiki-hungarian") }
    ],
    mapImageAlt: "Hungarian-speaking areas in Hungary and neighboring parts of the Carpathian Basin."
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Hungarian is demanding for an English-speaking learner chiefly because its basic vocabulary offers few easy cognates and its grammar packages familiar meanings in unfamiliar places. The popular image of “35 cases” or “impossibly long words” exaggerates the wrong thing. Most suffixes are learnable and regular; selecting the idiomatic case, controlling verb–object agreement, and arranging information naturally take longer. Difficulty also depends on goals: functional Budapest conversation comes far sooner than effortless reading of Dezső Kosztolányi or confident participation in a cross-border professional setting.",
      "wiki-grammar",
      "wiki-hungarian"
    ),
    easierAspects: [
      "First-syllable lexical stress is stable",
      "Modern spelling is relatively systematic once the alphabet is learned",
      "Nouns and pronouns have no grammatical masculine/feminine distinction",
      "Present-tense subject pronouns are often unnecessary because verb endings identify the speaker",
      "Suffix chains are frequently segmentable and reuse spatial patterns"
    ],
    hardAspects: [
      "Little immediately recognizable core vocabulary for most English speakers",
      "Vowel and consonant length must survive fast connected speech",
      "The definite/indefinite conjugation depends on object type and discourse",
      "Verbal prefixes change position and meaning with focus, negation, and aspect",
      "Word order is grammatical but guided by information structure rather than a single memorized template",
      "Case selection and polite address require collocational and social judgment"
    ],
    plateauRisks: [
      "Calling word order free and producing sentences that are possible but answer the wrong question",
      "Learning nouns without a harmonized suffix form and then guessing endings",
      "Reading accents accurately but neutralizing length in speech",
      "Using only translated beginner dialogues and never hearing particles or casual reductions",
      "Treating every speaker outside Hungary as a learner or every regional form as an error"
    ],
    workload: cited(
      "A sustainable path is roughly an hour most days divided among structured grammar, sentence review, listening, and live interaction. In the first months, make vowel length, core case series, present-tense endings, and several hundred high-frequency chunks automatic. At intermediate level, transcribe short audio and rewrite one sentence under different focus conditions. Advanced progress requires long-form reading, monolingual dictionary use, and feedback on register. Thousands of comprehensible sentences help, but repetition alone cannot explain why meg moves or why a speaker chooses ön; combine pattern exposure with focused correction.",
      "dd-glossika",
      "hnc",
      "wiki-grammar"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build each entry in a personal lexicon as a usable family. For a noun record the plural, accusative, one local case, and a collocation; for a verb record present indefinite and definite forms, its prefix behavior, and a sentence with the case it governs. Once comfortable, search those forms in the Hungarian National Corpus rather than trusting a single bilingual gloss. Keep a second notebook for information structure: copy neutral clauses, then note what changes under contrast, negation, and questions. A tutor can check whether the result is merely grammatical or actually answers the intended conversational prompt.",
      "hnc",
      "hunren-tools",
      "wiki-grammar"
    ),
    mediaPractice: cited(
      "Use news for clear standard pronunciation, then add interviews, comedy, podcasts, drama, and regional recordings. Public and independent outlets expose different political and stylistic vocabularies, so one channel should not define “normal Hungarian.” Read fiction aloud to practice long words without moving stress. Songs help memory but distort prosody; follow them with spoken interviews. Consult dialect research before imitating a regional feature.",
      "hnc",
      "national-atlas-dialects",
      "national-atlas-dialects"
    ),
    dictionariesAndCorpora: cited(
      "The HUN-REN Research Centre for Linguistics maintains a rich tool directory: the Hungarian National Corpus, historical corpora, dictionary projects, and databases for Uralic comparison. The corpus lets a learner compare genres and cross-border material; the New Hungarian Etymological Dictionary explains origin and historical layers. Use a current bilingual dictionary for access, then confirm meaning, government, and register in corpus lines. Corpus frequency is evidence of use, not automatic proof that a phrase suits your audience.",
      "hunren-tools",
      "hnc",
      "uesz"
    ),
    resources: [
      { type: "course", title: "MagyarOK", url: "https://magyar-ok.hu/en/home.html", level: "beginner", description: cited("A communicative textbook and online-materials series developed at the University of Pécs, useful for building a coherent standard-Hungarian progression rather than collecting disconnected app lessons.", "magyarok") },
      { type: "corpus", title: "Hungarian National Corpus", url: "https://hnc.nytud.hu/", level: "intermediate", description: cited("A searchable multi-genre resource that includes material from Hungary and Hungarian communities beyond the border; use it to test collocations, endings, and register.", "hnc") },
      { type: "dictionary", title: "New Hungarian Etymological Dictionary", url: "https://uesz.nytud.hu/", level: "advanced", description: cited("A HUN-REN dictionary for investigating inherited words, contact layers, obsolete forms, and the history hidden behind modern spelling.", "uesz") },
      { type: "other", title: "Nominal Structures of Uralic Languages", url: "https://nsul.nytud.hu/", level: "advanced", description: cited("English explanations, glossed examples, and translations for Hungarian and several other Uralic languages; excellent for a technically curious learner who wants to compare possession and case without assuming mutual intelligibility.", "nsul") },
      { type: "app", title: "Glossika sentence practice", url: "https://ai.glossika.com/", level: "all", description: cited("Hungarian audio sentences can provide high-volume listening and recall practice. Discover Discomfort's general review is positive about sentence repetition but explicitly recommends combining it with grammar and other study.", "dd-glossika") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Hungarian vocabulary becomes surprisingly visual through compounds and derivation: szabadság “freedom” contains szabad “free” plus -ság; napraforgó “sunflower” is “sun-toward-turning.” Particles are equally revealing. Hát can frame hesitation, conclusion, or disagreement; ugye invites confirmation; persze ranges from easy agreement to irony. Literature and film live in this ground between dictionary gloss and social meaning.",
      "hnc",
      "uesz"
    ),
    notableWords: [
      { term: "szabadság", meaning: "freedom; liberty", note: cited("Built from szabad “free” and -ság, this word ranges from personal free time to political liberty; context decides whether “freedom” is too grand a translation.", "uesz", "hnc") },
      { term: "honvágy", meaning: "homesickness", note: cited("A compact compound of hon “homeland/home country” and vágy “longing.” It is expressive but not uniquely untranslatable; its value lies in how transparently Hungarian compounding frames the feeling.", "uesz") },
      { term: "egészség", meaning: "health", note: cited("Related to egész “whole.” In egészségedre, suffixes produce “to your health,” used for a toast and also as the response to a sneeze.", "uesz", "hnc") },
      { term: "napraforgó", meaning: "sunflower", note: cited("Literally a “sun-toward-turner”: nap “sun,” -ra “onto/toward,” and forgó “turning.” It shows case-like material inside a lexicalized compound.", "uesz") },
      { term: "világ", meaning: "world; light (in older/derived uses)", note: cited("A short, high-frequency word with a long semantic history, visible in világos “light/clear” and felvilágosít “enlighten/inform.” Word families often travel farther than one English gloss.", "uesz", "hnc") },
      { term: "otthon", meaning: "at home; home", note: cited("It functions naturally as both a place expression and a noun-like idea of home. Compare otthon vagyok “I am at home” and az otthonom “my home.”", "hnc") },
      { term: "fröccs", meaning: "wine mixed with soda water", note: cited("The drink has a detailed Hungarian naming culture: proportions produce names such as kisfröccs and nagyfröccs. The doubled cs also makes it a useful pronunciation test.", "hnc") },
      { term: "híd", meaning: "bridge", note: cited("A common short word whose long í is easy to lose. Its plural hidak illustrates that stems can alternate, another reason to learn plural forms with nouns.", "wiki-grammar") }
    ],
    loanwordLayers: cited(
      "Inherited words dominate many intimate and grammatical domains, while loans reveal centuries of neighborhood. Slavic jövevényszavak include everyday cultural terms; German contact appears in urban and technical vocabulary; Latin shaped school, law, religion, and scholarship; Turkic layers come from both pre-conquest steppe contact and the Ottoman period. Modern English is conspicuous in business, computing, fitness, and youth speech. Purist replacements sometimes coexist with international forms. Rather than judging one as “more Hungarian,” search who uses each term, in which genre, and with what tone.",
      "uesz",
      "hnc",
      "wiki-hungarian"
    ),
    idioms: [
      { original: "Nem eszik olyan forrón a kását.", translation: "It isn't as bad or urgent as it first appears.", note: "Literally, “Porridge isn't eaten that hot.” Used to cool panic or overstatement: circumstances may soften before action is required." },
      { original: "Kutyából nem lesz szalonna.", translation: "People do not easily change their fundamental nature.", note: "Literally, “You can't make bacon from a dog.” Often humorous or cynical; it can sound harsh when aimed directly at someone." },
      { original: "Sok lúd disznót győz.", translation: "Many weaker people together can defeat a stronger opponent.", note: "Literally, “Many geese defeat a pig.” A proverb about strength in numbers, useful in collective or playful contexts." },
      { original: "Bagoly mondja verébnek, hogy nagyfejű.", translation: "The pot calling the kettle black.", note: "Literally, “The owl tells the sparrow that it has a big head.” Said when criticism exposes the critic's same fault." },
      { original: "Addig nyújtózkodj, ameddig a takaród ér.", translation: "Live within your means.", note: "Literally, “Stretch only as far as your blanket reaches.” Advice about financial or practical limits; the imperative can sound parental." }
    ],
    textGenres: [
      "Medieval linguistic monuments such as the Funeral Sermon and Prayer",
      "Poetry from Sándor Petőfi and Endre Ady to Ágnes Nemes Nagy and contemporary spoken-word work",
      "Short fiction and novels by writers such as Mór Jókai, Dezső Kosztolányi, Magda Szabó, Imre Kertész, and László Krasznahorkai",
      "Essays, literary journals, reportage, and a politically diverse news ecosystem",
      "Folk ballads, nóta, táncház music, rock, hip-hop, and singer-songwriter lyrics",
      "Film, animation, dubbed television, stand-up, podcasts, and unscripted online video",
      "Cross-border Hungarian publishing from Transylvania, Slovakia, Vojvodina, and other communities"
    ]
  },
  relationships: {
    overview: cited(
      "Hungarian's nearest genealogical relatives are far away geographically and linguistically. Khanty and Mansi are the usual Ugric comparanda; Finnish and Estonian are more distant Uralic relatives. None is mutually intelligible with Hungarian. Central European neighbors such as Slovak, German, Croatian, Serbian, Romanian, and Ukrainian are mostly Indo-European, yet centuries of bilingualism and borrowing make them central to Hungarian's actual history. Family resemblance and contact resemblance answer different questions.",
      "glottolog-hungarian",
      "wiki-hungarian",
      "uesz"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Hungarian culture is not a checklist of paprika and thermal baths. Magyar can name a language, ethnicity, citizenship context, or cultural identification, and those categories do not always coincide. Use Hungarian place names when relevant without denying official Romanian, Slovak, Serbian, or Ukrainian names; bilingual naming reflects real communities. Notice address forms, traditional family-name-first order, and invitations to switch from polite to informal speech. Ask speakers about their own setting rather than assuming Budapest represents everyone or treating a regional accent as a museum object.",
  resources: [
    { type: "course", title: "MagyarOK", url: "https://magyar-ok.hu/en/home.html", level: "beginner", description: cited("University of Pécs course materials centered on communicative, contemporary Hungarian, with audio and structured progression.", "magyarok") },
    { type: "corpus", title: "Hungarian National Corpus", url: "https://hnc.nytud.hu/", level: "intermediate", description: cited("Search authentic forms across genres and regions; especially useful when two dictionaries give the same English gloss but different Hungarian patterns.", "hnc") },
    { type: "dictionary", title: "HUN-REN language tools and dictionaries", url: "https://nytud.hu/en/tools", level: "all", description: cited("A maintained gateway to spelling, etymological, historical, dialect, and corpus resources from Hungary's principal linguistics research center.", "hunren-tools") },
    { type: "other", title: "Hungarian Reference", url: "https://www.hungarianreference.com/", level: "intermediate", description: "A learner-oriented grammar reference with detailed tables. Cross-check fine points against corpus examples and a modern grammar." },
    { type: "book", title: "Hungarian: An Essential Grammar by Carol Rounds", url: "https://www.routledge.com/Hungarian-An-Essential-Grammar/Rounds/p/book/9780415777377", level: "all", description: "A substantial English-language reference for morphology and syntax; use it as a map while continuing to collect spoken examples." },
    { type: "app", title: "Glossika Hungarian", url: "https://ai.glossika.com/", level: "all", description: cited("High-volume sentence audio can reinforce rhythm and endings. The Discover Discomfort review usefully describes both the retention benefits and the need for grammar and complementary practice.", "dd-glossika") },
    { type: "media", title: "Médiaklikk", url: "https://mediaklikk.hu/", level: "intermediate", description: "Hungarian public television and radio streams, news, culture, drama, and archives. Pair it with independent media to broaden register and viewpoint." }
  ],
  relatedLanguages,
  phrases: [
    { original: "Szia!", translation: "Hi! / Bye!", usageNote: "Informal singular greeting and farewell. To several people, sziasztok is common." },
    { original: "Jó napot kívánok!", translation: "Good day.", literalMeaning: "I wish [you] a good day.", usageNote: "A safe polite greeting; Jó napot is the shorter everyday form." },
    { original: "Köszönöm szépen.", translation: "Thank you very much.", literalMeaning: "I thank [you] nicely.", usageNote: "Polite and widely useful. Köszi is informal." },
    { original: "Kérem.", translation: "Please. / You're welcome. / Here you are.", usageNote: "Its exact function depends on context and intonation; tessék is another essential service and offering word." },
    { original: "Elnézést!", translation: "Excuse me! / Sorry.", literalMeaning: "Forgiveness/pardon.", usageNote: "Useful for attracting attention or apologizing for a small intrusion." },
    { original: "Nem értem.", translation: "I don't understand.", usageNote: "Add pontosan “exactly” if you understood part but not the precise point." },
    { original: "Megismételné, kérem?", translation: "Could you repeat that, please?", literalMeaning: "Would you repeat [it], please?", usageNote: "Polite address. Informally: Megismételnéd?" },
    { original: "Beszélne egy kicsit lassabban?", translation: "Could you speak a little more slowly?", usageNote: "Polite and practical; lassabban is the comparative adverb “more slowly.”" },
    { original: "Hogy mondják ezt magyarul?", translation: "How do you say this in Hungarian?", literalMeaning: "How do they say this in Hungarian?", usageNote: "Hungarian uses an impersonal third-person plural here." },
    { original: "Hol van a mosdó?", translation: "Where is the restroom?", usageNote: "Mosdó is a polite, broadly useful public term." },
    { original: "Egy kávét kérek.", translation: "A coffee, please.", literalMeaning: "I request a coffee.", usageNote: "Notice the accusative -t on kávét." },
    { original: "Mennyibe kerül?", translation: "How much does it cost?", literalMeaning: "Into how much does it come?", usageNote: "A very common shopping question illustrating the fixed expression kerül valamennyibe." },
    { original: "Egészségedre!", translation: "Cheers! / Bless you!", literalMeaning: "To your health.", usageNote: "Informal singular. Egészségére is polite singular; egészségetekre addresses several people informally." },
    { original: "Örülök, hogy megismerhetem.", translation: "Pleased to meet you.", literalMeaning: "I am glad that I may get to know you.", usageNote: "Polite/formal. In relaxed introductions, Örülök is often enough." },
    { original: "Viszontlátásra!", translation: "Goodbye.", literalMeaning: "Until seeing [each other] again.", usageNote: "Polite. Viszlát is the common shorter form." }
  ],
  sources: [
    { id: "dd-glossika", title: "Glossika Review — The Best, But Not the Only", url: "https://discoverdiscomfort.com/glossika-review-language-learning-app/", publisher: "Discover Discomfort", publishedAt: "2020-04-20", updatedAt: "2023-05-10", accessedAt: "2026-07-10" },
    { id: "wiki-hungarian", title: "Hungarian language", url: "https://en.wikipedia.org/wiki/Hungarian_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-grammar", title: "Hungarian grammar", url: "https://en.wikipedia.org/wiki/Hungarian_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-hungarian", title: "Glottolog 5.2: Hungarian", url: "https://glottolog.org/resource/languoid/id/hung1274", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "ksh-2022", title: "Census 2022 — Main Population Characteristics", url: "https://nepszamlalas2022.ksh.hu/en/results/final-data/publication/", publisher: "Hungarian Central Statistical Office", publishedAt: "2023", accessedAt: "2026-07-10" },
    { id: "hunren-tools", title: "Language Resources and Tools", url: "https://nytud.hu/en/tools", publisher: "HUN-REN Research Centre for Linguistics", accessedAt: "2026-07-10" },
    { id: "hnc", title: "Hungarian National Corpus", url: "https://hnc.nytud.hu/", publisher: "HUN-REN Research Centre for Linguistics", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "uesz", title: "New Hungarian Etymological Dictionary", url: "https://uesz.nytud.hu/", publisher: "HUN-REN Research Centre for Linguistics", accessedAt: "2026-07-10" },
    { id: "nsul", title: "Nominal Structures of Uralic Languages", url: "https://nsul.nytud.hu/", publisher: "HUN-REN Research Centre for Linguistics", accessedAt: "2026-07-10" },
    { id: "national-atlas-dialects", title: "The Spatial Distribution of Hungarian Dialects", url: "https://www.nemzetiatlasz.hu/MNA/National-Atlas-of-Hungary_Vol1_Ch9.pdf", publisher: "National Atlas of Hungary", publishedAt: "2024", accessedAt: "2026-07-10" },
    { id: "csango-study", title: "Situation of the Csángó Dialect of Moldavia in Romania", url: "https://ahea.pitt.edu/ojs/ahea/article/view/231", publisher: "Hungarian Cultural Studies", publishedAt: "2016", accessedAt: "2026-07-10" },
    { id: "standard-history", title: "The Formation of the Hungarian Standard Language", url: "https://epa.oszk.hu/01400/01462/00021/pdf/EPA01462_Hungarian_Studies_1998-1999_Vol13_No1.pdf", publisher: "Hungarian Studies", publishedAt: "1999", accessedAt: "2026-07-10" },
    { id: "tihany", title: "The Tihany Foundation Charter and Early Hungarian Records", url: "https://mek.oszk.hu/01900/01955/html/index10.html", publisher: "Hungarian Electronic Library", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "Latin Extended-A Character Names List", url: "https://www.unicode.org/charts/nameslist/n_0100.html", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "unicode-old-hungarian", title: "The Unicode Standard, Chapter 8: Old Hungarian", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-8/", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-07-10" },
    { id: "magyarok", title: "MagyarOK Hungarian Language Course", url: "https://magyar-ok.hu/en/home.html", publisher: "University of Pécs", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Hungarian Language Guide: Pronunciation, Grammar and Culture",
    description: "A source-backed, example-rich guide to Hungarian history, communities, vowel harmony, cases, definite conjugation, word order, writing, culture, phrases, and learning resources."
  }
} satisfies LanguageGuide;
