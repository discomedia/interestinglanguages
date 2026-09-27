import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Khanty",
    relationship: "Distant Ugric relative within Uralic",
    explanation: cited(
      "Khanty and Hungarian share distant Uralic ancestry. Their common history reaches back so far that speakers can't understand each other without study. Linguists compare inherited words and grammar to learn about that history.",
      "glottolog-hungarian",
      "nsul"
    )
  },
  {
    name: "Mansi",
    relationship: "Distant Ugric relative within Uralic",
    explanation: cited(
      "Linguists usually group Mansi, Khanty, and Hungarian in the Ugric branch of Uralic, though they continue to study the branch's early history. Mansi has far fewer speakers than Hungarian and is endangered. The family connection doesn't make modern Mansi understandable to a Hungarian speaker.",
      "glottolog-hungarian",
      "wiki-hungarian"
    )
  },
  {
    name: "Finnish",
    slug: "finnish",
    relationship: "Distant Uralic relative",
    explanation: cited(
      "Finnish and Hungarian share distant Uralic ancestry. Both attach many endings to words and lack grammatical gender, but their everyday words and sounds differ greatly. Speakers don't understand each other without study.",
      "glottolog-hungarian",
      "wiki-hungarian"
    )
  },
  {
    name: "Turkish",
    slug: "turkish",
    relationship: "Unrelated language with historical contact and typological similarities",
    explanation: cited(
      "Turkish belongs to the Turkic family. It resembles Hungarian in some ways, including vowel harmony and long sequences of endings, and Hungarian has borrowed Turkic words at different times. Contact and similar grammar don't make the languages close relatives.",
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
  summary: "Hungarian is the everyday language of Hungary and long-standing communities across the Carpathian Basin. Learn how its vowel harmony, word endings, and word order shape speech and writing.",
  family: "Uralic, Ugric",
  macroRegion: "Hungary, the Carpathian Basin, and global Hungarian communities",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Házban means “in the house”; házba means “into the house.” Learn a few endings, then listen for how word order points to the new or contrasting idea in a sentence.",
  hero: {
    imageAlt: "Contemporary Hungarian text showing accented vowels and characteristic digraphs.",
    callToActionLabel: "Explore Hungarian in use"
  },
  classification: "A Ugric language in the Uralic family and the national language of Hungary",
  speakerCommunity: "People use Hungarian at home, at work, in school, and in public life throughout Hungary. Long-established communities also speak it in Romania, Slovakia, Serbia, Ukraine, Austria, Croatia, and Slovenia. Borders changed around many of those communities in the twentieth century.\n\nHungary's 2022 census found that 99 percent of residents could speak Hungarian. A research overview estimates more than 13 million speakers worldwide, but countries count mother tongue, ability, ethnicity, and home use differently. Families in newer diasporas maintain the language through schools, associations, media, and daily conversation.",
  facts: [
    { label: "Family", value: "Uralic · conventionally Ugric" },
    { label: "Community", value: "More than 13 million speakers estimated worldwide; definitions vary" },
    { label: "Core region", value: "Hungary and historic communities across the Carpathian Basin" },
    { label: "Writing", value: "Latin alphabet with long vowels and multi-letter consonants" },
    { label: "Stress", value: "Normally on the first syllable of a word" },
    { label: "Signature grammar", value: "Suffix chains, vowel harmony, two object-sensitive verb conjugations, and discourse-shaped word order" }
  ],
  learnerOverview: "Hungarian makes you notice small changes inside a word. Ház means “house,” házban means “in the house,” házba means “into the house,” and házból means “out of the house.” The endings keep their jobs as you meet new nouns.\n\nStart with the alphabet and the length of each sound: kor means “age,” while kór means “disease.” Then learn common endings through short sentences, not isolated tables. You can add the two verb patterns for different kinds of objects once you can follow a simple conversation.\n\nWord order comes later. Speakers shift words to show what the listener already knows and what they want to stress. Record that change in real dialogues before trying to produce every possible order yourself.",
  origins: {
    overview: cited(
      "Hungarian belongs to the Uralic family. Linguists usually group it with Khanty and Mansi in the Ugric branch, though they continue to study that branch's early history. The ancestors of Hungarian speakers moved west before Magyar groups entered the Carpathian Basin in the late ninth century.\n\nAfter the Christian kingdom formed around 1000, scribes mainly wrote in Latin. They included Hungarian names and phrases in Latin documents, including the 1055 Tihany charter. The Funeral Sermon and Prayer, from around 1192–1195, is the earliest surviving continuous Hungarian text.\n\nPrinting, Bible translation, literature, and nineteenth-century language reform brought Hungarian into more public settings. The language's history doesn't map neatly onto ancestry: communities can move, mix, and change languages.",
      "wiki-hungarian",
      "nsul",
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
          "Magyar groups settled in the Carpathian Basin, and the Christian kingdom adopted Latin literacy. Scribes placed Hungarian names and phrases inside Latin charters. The 1055 Tihany charter preserves more than 50 Hungarian words and word groups; the late twelfth-century Funeral Sermon gives us a longer continuous text.",
          "tihany",
          "wiki-hungarian"
        )
      },
      {
        period: "16th–18th centuries",
        event: cited(
          "Printers and religious communities produced more books in Hungarian. Gáspár Károli's 1590 Bible reached many readers. Political division brought Hungarian speakers into sustained contact with Latin, German, Turkish, Slavic languages, and Romanian.",
          "wiki-hungarian",
          "standard-history"
        )
      },
      {
        period: "Late 18th–19th centuries",
        event: cited(
          "The nyelvújítás, or language-renewal movement, created and revived words for science, government, philosophy, and art. The Hungarian Academy of Sciences, founded in 1825, became an important institution for the standard language. Hungarian replaced Latin as the kingdom's official language in 1844.",
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
      "Everyday Hungarian still has inherited Uralic words for parts of the body, family, numbers, and basic actions. Long contact on the steppe brought Iranian and early Turkic loans. Later Slavic, German, Latin, and Ottoman Turkish words entered through religion, food, trades, law, and city life.\n\nSpeakers also borrow and adapt international terms today. They give those words Hungarian stress and endings. The New Hungarian Etymological Dictionary helps trace a word's history when a chance resemblance makes a tempting story.",
      "uesz",
      "wiki-hungarian"
    ),
    standardization: cited(
      "Writers, printers, schools, reformers, and the Hungarian Academy of Sciences all helped form today's standard. The Academy's spelling rules guide education and publishing. Conversation has its own particles, shortened forms, and local choices.\n\nHungarian spoken across the border may include words and patterns shaped by Romanian, Slovak, Serbian, or Ukrainian contact. Those forms belong to living Hungarian communities. A Budapest textbook gives you one starting point, not a measure of everyone's speech.",
      "standard-history",
      "national-atlas-dialects",
      "hunren-tools"
    )
  },
  variants: {
    overview: cited(
      "Hungarian speakers across the Carpathian Basin usually understand one another, though they notice different vowels, words, and endings. Palóc speech crosses the Hungary–Slovakia border, while Székely varieties are prominent in eastern Transylvania. Vojvodina and Transcarpathia have their own contact histories.\n\nMoldavian Csángó varieties are more distinct, and many families now use Romanian instead. Schools and national media spread the standard, but local speech remains part of community life. A regional accent says nothing about a speaker's education.",
      "national-atlas-dialects",
      "csango-study"
    ),
    items: [
      {
        name: "Contemporary standard Hungarian",
        note: cited("Schools, national news, most publishers, and language courses use this variety. In conversation, speakers add particles such as hát, ugye, and persze and sound less formal than an official notice.", "standard-history", "hnc")
      },
      {
        name: "Palóc and northern varieties",
        note: cited("People speak these varieties in northern Hungary and neighboring Slovakia. Pronunciation and vocabulary vary within the region, so “Palóc accent” doesn't describe one uniform voice.", "national-atlas-dialects")
      },
      {
        name: "Székely and other Transylvanian varieties",
        note: cited("Hungarian speakers in Romania use both urban speech close to the standard and local varieties with different words and sounds. Székely speech and identity describe part of Transylvania's Hungarian community, not all of it.", "national-atlas-dialects", "hnc")
      },
      {
        name: "Vojvodina, southern Slovakia, and Transcarpathia",
        note: cited("Historic communities in these regions maintain Hungarian schools and media under different conditions. Speakers also use neighboring languages, and local Hungarian includes contact words that are ordinary within the community.", "hnc", "wiki-hungarian")
      },
      {
        name: "Moldavian Csángó varieties",
        note: cited("Several varieties in Romanian Moldavia preserve features uncommon elsewhere in Hungarian and show strong Romanian contact. Fewer children learn them now. Research recordings document living speakers and their communities.", "csango-study", "hunren-tools")
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Hungarian usually stresses the first syllable, even in a long word. That steady rhythm helps you hear where a word begins. Sound length still changes meaning, so hold a long vowel or doubled consonant rather than treating the accent as decoration.\n\nThe pairs a/á and e/é differ in sound quality as well as length. In pairs such as ö/ő and ü/ű, you also need to round your lips while keeping your tongue forward. Several two-letter spellings, including sz, gy, and ny, each represent one consonant.",
      "wiki-hungarian",
      "wiki-grammar"
    ),
    script: "Modern Hungarian Latin alphabet; pronunciation notes use simple IPA-style descriptions",
    soundSystem: cited(
      "Kor /kor/ means “age,” while kór /koːr/ means “disease.” Megy “goes” and meggy “sour cherry” contrast a short and long gy consonant. The written form often keeps a word's parts visible even when neighboring consonants influence each other in speech.\n\nHungarian gy and ty are each one sound made with the tongue raised toward the hard palate; ny is close to Spanish ñ. Speakers usually tap or trill r. Listen to these sounds in recorded words before guessing from English spelling.",
      "wiki-hungarian",
      "wiki-grammar"
    ),
    prosody: cited(
      "Word stress normally starts on the first syllable: egészségedre “to your health” begins strongly on e-, even though several endings follow. In a sentence, speakers can give extra emphasis to the word that answers a question or marks a contrast. Later words may sound less prominent.\n\nYes–no questions often rise and then fall near the end, rather than simply rising as in many English questions. Copy whole spoken sentences, including their timing. Keep long vowels and consonants long while you do it.",
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
      { original: "gyönyörű", translation: "beautiful", note: "Practice gy, ö, ny, and final long ű, with stress on the first syllable." },
      { original: "tyúk", translation: "hen", note: "Ty is one voiceless palatal consonant, followed by a long ú." }
    ]
  },
  writing: {
    overview: cited(
      "Hungarian readers use the Latin alphabet. Its two-letter units cs, dz, gy, ly, ny, sz, ty, and zs, plus the three-letter dzs, count as letters when dictionaries alphabetize words. The double acute marks long ő and ű.\n\nAn older right-to-left script also appears in historical study and some cultural displays. Unicode calls it Old Hungarian. Contemporary books, schools, and messages use the Latin script.",
      "unicode-latin",
      "unicode-old-hungarian",
      "wiki-hungarian"
    ),
    primaryScript: "Hungarian Latin alphabet",
    romanization: cited(
      "Hungarian already uses Latin letters, so you don't need another romanization system. Learn each letter's Hungarian sound instead of writing “sh” for s; that English shortcut makes sz harder to remember. Keep the accents in searches, messages, and flashcards.",
      "wiki-hungarian",
      "unicode-latin"
    ),
    spellingNorms: cited(
      "Hungarian spelling often shows how a word is built. The definite article changes from a before a consonant sound to az before a vowel sound, while ly and j usually sound alike in the standard despite their different spelling. Long sz becomes ssz, as in hosszú “long.”\n\nHistorical family names can keep spellings such as cz or th. Compound spelling has detailed rules, so check an Academy spelling resource when you write formal text. Don't change someone's name to make it look more modern.",
      "wiki-hungarian",
      "hunren-tools"
    ),
    styleNotes: [
      cited("Type ő and ű as written. Other accent marks can change the word and make a dictionary search fail.", "unicode-latin"),
      cited("Learn digraphs as alphabetic units, but remember that morphology can place ordinary letters beside each other across a boundary. Dictionary lookup and slow pronunciation resolve ambiguity.", "wiki-hungarian"),
      cited("Expect older names and quotations to preserve historical spelling. Do not modernize a person's name simply because its letters look unfamiliar.", "wiki-hungarian"),
      cited("Check an unfamiliar formal phrase in the Hungarian National Corpus before copying it into an essay. You can compare the kinds of text where it occurs.", "hnc")
    ]
  },
  grammar: {
    overview: cited(
      "Hungarian often adds several endings to one word. Linguists call that pattern agglutination: each ending usually has a job you can recognize. The pieces don't always join without sound changes.\n\nNouns have no grammatical gender. A verb ending often tells you who acts, so speakers can leave out a subject pronoun. Many verbs also change their ending according to the kind of object they have.",
      "wiki-grammar",
      "nsul"
    ),
    typologicalProfile: cited(
      "Compare ház “house,” házak “houses,” házam “my house,” and házamban “in my house.” An ending can show number, ownership, or a relationship such as location or movement. Grammars often list 18 cases, though linguists disagree about where some case endings stop and other kinds of suffix begin.\n\nFor a first pattern, compare -ban/-ben “in,” -ba/-be “into,” and -ból/-ből “out of.” You can learn other location sets later, such as -ra/-re “onto” and -ról/-ről “off or about.” Start with the meaning and a whole word, then learn the label “case.”",
      "wiki-grammar",
      "nsul"
    ),
    morphology: cited(
      "The ending changes its vowel to fit the word: házban means “in the house,” while kertben means “in the garden.” This is vowel harmony. Some endings have two or three forms, and words with certain vowels or loanword histories need checking.\n\nHungarian verbs mark the subject, time, and whether the object is definite. Word-building also creates families such as tanul “study,” tanuló “learner,” and tanulás “studying.” Learn each new word's actual meaning rather than trusting the pieces alone.",
      "wiki-grammar",
      "wiki-hungarian"
    ),
    syntax: cited(
      "Hungarian word order helps show what the sentence is about and what information answers the immediate question. Éva elolvasta a könyvet says “Éva read the book” without singling out the reader. ÉVA olvasta el a könyvet stresses that Éva was the one who read it; the small verb element el moves after the verb.\n\nLinguists call the stressed answer “focus.” It often stands just before the verb, and a verb prefix then follows the verb. The endings still help identify each word's role, but changing the order changes the message.",
      "wiki-grammar",
      "cambridge-focus"
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
        body: cited("The same “inside” ending appears as -ban after ház and -ben after kert. The vowel fits the sounds in the word; linguists call this vowel harmony. Some words and loans don't follow the simple classroom pattern, so check a whole example when you're unsure.", "wiki-grammar", "nsul"),
        example: "A házban lakom, de a kertben dolgozom.",
        exampleTranslation: "I live in the house, but I work in the garden."
      },
      {
        title: "Endings show where something is or goes",
        body: cited("Boltba places movement into a shop, boltban places an action inside it, and boltból marks movement out. Hungarian has similar sets for being on or near something. An ending can also extend beyond physical place: a könyvről often means “about the book.”", "wiki-grammar", "nsul"),
        example: "Bemegyek a boltba, a boltban veszek kenyeret, aztán kijövök a boltból.",
        exampleTranslation: "I go into the shop, buy bread in the shop, then come out of the shop."
      },
      {
        title: "The verb tracks whether an object is definite",
        body: cited("Olvasok egy könyvet means “I'm reading a book,” while olvasom a könyvet means “I'm reading the book.” The ending changes because the second object is definite. Objects with a definite article, a name, or a possessive form usually call for that verb pattern; first- and second-person objects need their own rule.", "syntax-hungarian"),
        example: "Olvasok egy könyvet. Olvasom a könyvet.",
        exampleTranslation: "I am reading a book. I am reading the book."
      },
      {
        title: "Possession is built into the noun phrase",
        body: cited("Hungarian has no everyday verb that works exactly like English “have.” In van egy könyvem, the book carries an ending meaning “my,” and van says that it exists. An expressed possessor can take -nak/-nek, as in Péternek két testvére van.", "nsul", "wiki-grammar"),
        example: "Van egy jó könyvem. Péternek két testvére van.",
        exampleTranslation: "I have a good book. Péter has two siblings."
      },
      {
        title: "Verbal prefixes shape aspect and direction",
        body: cited("Small elements such as meg-, el-, be-, and ki- can mark a result, a direction, or a meaning specific to the verb. In a neutral sentence the element usually stands before the verb. A focused word or negation can put it after the verb instead.", "wiki-grammar", "cambridge-focus"),
        example: "Péter megírta a levelet. PÉTER írta meg a levelet. Péter nem írta meg a levelet.",
        exampleTranslation: "Péter wrote the letter. It was PÉTER who wrote the letter. Péter did not write the letter."
      },
      {
        title: "Word order manages topic and focus",
        body: cited("Several word orders are possible because endings show each word's role. In a neutral sentence, János can set the topic, and the verb prefix stays in front of the verb. Put BUDAPESTRE directly before the verb to answer “Where did he go?”\n\nThe prefix then follows the verb.", "wiki-grammar", "cambridge-focus"),
        example: "János tegnap elment Budapestre. János tegnap BUDAPESTRE ment el.",
        exampleTranslation: "János went to Budapest yesterday. Yesterday, János went TO BUDAPEST."
      },
      {
        title: "Articles and number behave differently from English",
        body: cited("Egy is the indefinite article, while a/az marks a definite noun. After a number, the noun normally stays singular: három könyv means “three books.” For a plural object without a number, könyveket has both a plural ending and an object ending.", "wiki-grammar"),
        example: "Három almát kérek, nem az egész kosarat.",
        exampleTranslation: "I'd like three apples, not the whole basket."
      },
      {
        title: "Politeness changes pronouns and verb forms",
        body: cited("Te is an informal “you,” while ön and maga are polite forms. Speakers also use titles or names, and relationships and settings guide the choice.\n\nTegeződhetünk? asks whether both people may switch to informal address.", "wiki-grammar", "hnc"),
        example: "Hogy vagy? Hogy van? Tegeződhetünk?",
        exampleTranslation: "How are you? [informal] How are you? [polite] May we use informal address?"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Hungarian extends beyond Hungary's borders across the Carpathian Basin. Historic communities live in Transylvania in Romania, southern Slovakia, Vojvodina in Serbia, and Transcarpathia in Ukraine. Smaller established communities live in Austria, Croatia, and Slovenia.\n\nHungary's 2022 census found that 99 percent of residents could speak Hungarian. That figure measures knowledge inside Hungary, not the number of first-language speakers worldwide. Schooling, signage, and everyday bilingualism differ across neighboring countries, while newer diasporas include both fluent speakers and heritage learners.",
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
      "If you know English, many common Hungarian words will be new to you. Endings take time too, especially when a verb changes for its object or a noun's ending depends on another word. The patterns become clearer through examples, but choosing the natural pattern still takes practice.\n\nYour goal affects the workload. Everyday conversations call for fewer words and styles than a novel by Dezső Kosztolányi or professional discussion across different Hungarian communities. Build each level from speech and texts you expect to use.",
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
      "Practice on most days if your schedule allows, mixing a structured course with listening and conversation. Early on, hear vowel length and learn the most common location endings and present-tense verb patterns. Review short sentences until you can use them without rebuilding each word.\n\nAt an intermediate level, transcribe brief recordings and compare neutral sentences with focused ones. Later, read longer texts and ask a speaker or teacher to check register. Repetition helps, but someone needs to explain why a verb prefix moves or why a person chooses ön.",
      "magyarok",
      "hnc",
      "cambridge-focus"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Record each noun with a plural, an object form, and one location form. Record verbs with both object-sensitive endings when they exist, plus a sentence showing where the verb prefix goes. These examples make the grammar easier to retrieve in conversation.\n\nOnce you can read short texts, search the Hungarian National Corpus for those forms. Compare a neutral sentence with one that stresses a particular answer, then ask a teacher or speaker whether both fit the conversation. A bilingual gloss alone cannot show that difference.",
      "hnc",
      "hunren-tools",
      "wiki-grammar"
    ),
    mediaPractice: cited(
      "Start with clear news or course audio, then add interviews and unscripted conversation. Try public and independent outlets so one broadcaster doesn't define all the vocabulary you hear. Regional recordings help you recognize speech outside the standard.\n\nRead a short passage aloud and keep stress at the start of each word. Songs can help memory, but their melody changes ordinary sentence rhythm. Follow them with spoken audio before copying pronunciation.",
      "hnc",
      "national-atlas-dialects"
    ),
    dictionariesAndCorpora: cited(
      "HUN-REN collects Hungarian dictionaries and corpora in one tool directory. Its National Corpus lets you compare words across genres and regions, while the New Hungarian Etymological Dictionary explains older forms and loan histories. Start with a bilingual dictionary when you need a quick meaning.\n\nThen check the word in full corpus sentences. Notice which ending its verb takes and whether it appears in news, fiction, or conversation. Frequency shows that people use a phrase; it doesn't tell you whether it suits your audience.",
      "hunren-tools",
      "hnc",
      "uesz"
    ),
    resources: [
      { type: "course", title: "MagyarOK", url: "https://isc.pte.hu/hu/tananyagok", level: "beginner", description: cited("This University of Pécs course pairs standard-Hungarian dialogues with audio and a sequence of exercises. The university's resource page is in Hungarian; add casual speech through interviews as you progress.", "magyarok") },
      { type: "corpus", title: "Hungarian National Corpus", url: "https://hnc.nytud.hu/", level: "intermediate", description: cited("Search words in several genres and regional collections. The interface takes practice, but real sentences show you which endings and neighboring words occur together.", "hnc") },
      { type: "dictionary", title: "New Hungarian Etymological Dictionary", url: "https://uesz.nytud.hu/index.html", level: "advanced", description: cited("Use this HUN-REN dictionary to investigate a word's older forms and possible origin. It serves historical questions better than quick everyday translation.", "uesz") },
      { type: "other", title: "Nominal Structures of Uralic Languages", url: "https://nsul.nytud.hu/index.html", level: "advanced", description: cited("This research database explains Hungarian noun patterns in English and compares them with other Uralic languages. Its technical detail suits advanced learners more than beginners.", "nsul") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Hungarian often builds a new word from familiar parts. Szabadság “freedom” includes szabad “free” and an ending that makes a noun; napraforgó “sunflower” contains words for sun and turning. These pieces help you remember a word even when its full meaning needs context.\n\nSmall conversational words need context too. Hát can introduce hesitation or a conclusion, ugye asks for confirmation, and persze can sound sincere or ironic. Listen to a whole exchange before copying one of them.",
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
      { term: "fröccs", meaning: "wine mixed with soda water", note: cited("The drink has several Hungarian names for different proportions, including kisfröccs and nagyfröccs. Its doubled cs also gives you a pronunciation test.", "hnc") },
      { term: "híd", meaning: "bridge", note: cited("A common short word whose long í is easy to lose. Its plural hidak illustrates that stems can alternate, another reason to learn plural forms with nouns.", "wiki-grammar") }
    ],
    loanwordLayers: cited(
      "Hungarian keeps inherited Uralic words in much of its basic vocabulary. Loanwords tell another part of its history: Slavic, German, Latin, and Turkic contact added terms for everyday life, trades, faith, and government. Those words took Hungarian sounds and endings.\n\nSpeakers now also borrow English and other international terms, especially in technology and business. A Hungarian-made alternative may coexist with a loan. Check which word speakers actually use in the kind of conversation or text you have in mind.",
      "uesz",
      "hnc",
      "wiki-hungarian"
    ),
    idioms: [
      { original: "Nem eszik olyan forrón a kását.", translation: "It isn't as bad or urgent as it first appears.", note: "Literally, “Porridge isn't eaten that hot.” Used to cool panic or overstatement: circumstances may soften before action is required." },
      { original: "Kutyából nem lesz szalonna.", translation: "People do not easily change their fundamental nature.", note: "Literally, “You can't make bacon from a dog.” Often humorous or cynical; it can sound harsh when aimed directly at someone." },
      { original: "Sok lúd disznót győz.", translation: "Many weaker people together can defeat a stronger opponent.", note: "Literally, “Many geese defeat a pig.” Speakers use it for strength in numbers, sometimes playfully." },
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
      "Hungarian's closest relatives in the usual Ugric grouping are Khanty and Mansi, spoken far to the east. Finnish and Estonian are more distant Uralic relatives. None is mutually intelligible with Hungarian.\n\nMost neighboring languages in Central Europe belong to the Indo-European family. Speakers have lived alongside one another and borrowed words for centuries. A borrowed word tells you about contact; an inherited pattern helps establish family history.",
      "glottolog-hungarian",
      "wiki-hungarian",
      "uesz"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Magyar can describe a language, an ethnic identity, or a cultural connection. Citizenship, family history, and language ability do not always line up. Ask people how they describe their own community.\n\nPlace names may have both Hungarian and another local or official form. Use the name that fits the person and setting without erasing either community. In conversation, pay attention to polite address, family-name-first ordering, and invitations to switch to informal speech.",
  resources: [
    { type: "course", title: "MagyarOK", url: "https://isc.pte.hu/hu/tananyagok", level: "beginner", description: cited("Follow University of Pécs dialogues, audio, and exercises in sequence. This university page is in Hungarian and links to the materials.", "magyarok") },
    { type: "corpus", title: "Hungarian National Corpus", url: "https://hnc.nytud.hu/", level: "intermediate", description: cited("Search real examples across genres and regions. Use it when two dictionary entries share an English gloss but take different Hungarian endings.", "hnc") },
    { type: "dictionary", title: "HUN-REN language tools and dictionaries", url: "https://nytud.hu/en/tools", level: "all", description: cited("Find spelling, historical, dialect, and corpus tools collected by Hungary's linguistics research centre. Choose the tool for your question; this page is a directory rather than a beginner course.", "hunren-tools") },
    { type: "other", title: "Hungarian Reference", url: "https://www.hungarianreference.com/", level: "intermediate", description: "Consult its tables when an ending or verb form puzzles you. Check examples in a corpus because this learner site is an older reference." },
    { type: "book", title: "Hungarian: An Essential Grammar by Carol Rounds", url: "https://www.routledge.com/Hungarian-An-Essential-Grammar/Rounds/p/book/9780415777377", level: "all", description: "Use this English-language reference for morphology and syntax questions. Keep listening to real conversation so tables do not become your only model." },
    { type: "media", title: "Médiaklikk", url: "https://mediaklikk.hu/", level: "intermediate", description: "Watch or listen to Hungarian public television and radio. Add independent and regional outlets to hear more voices and styles." }
  ],
  relatedLanguages,
  phrases: [
    { original: "Szia!", translation: "Hi! / Bye!", usageNote: "Informal singular greeting and farewell. To several people, sziasztok is common." },
    { original: "Jó napot kívánok!", translation: "Good day.", literalMeaning: "I wish [you] a good day.", usageNote: "A safe polite greeting; Jó napot is the shorter everyday form." },
    { original: "Köszönöm szépen.", translation: "Thank you very much.", literalMeaning: "I thank [you] nicely.", usageNote: "Polite in many settings. Köszi is informal." },
    { original: "Szívesen.", translation: "You're welcome.", literalMeaning: "Gladly.", usageNote: "A common reply to thanks. A formal speaker may also answer Kérem." },
    { original: "Tessék!", translation: "Here you are. / Yes?", usageNote: "Say it when handing something over or inviting someone to speak; context decides the meaning." },
    { original: "Elnézést!", translation: "Excuse me! / Sorry.", literalMeaning: "Forgiveness/pardon.", usageNote: "Say this to attract attention or apologize for a small intrusion." },
    { original: "Nem értem.", translation: "I don't understand.", usageNote: "Add pontosan “exactly” if you understood part but not the precise point." },
    { original: "Megismételné, kérem?", translation: "Could you repeat that, please?", literalMeaning: "Would you repeat [it], please?", usageNote: "Polite address. Informally: Megismételnéd?" },
    { original: "Beszélne egy kicsit lassabban?", translation: "Could you speak a little more slowly?", usageNote: "Polite and practical; lassabban is the comparative adverb “more slowly.”" },
    { original: "Hogy mondják ezt magyarul?", translation: "How do you say this in Hungarian?", literalMeaning: "How do they say this in Hungarian?", usageNote: "Hungarian uses an impersonal third-person plural here." },
    { original: "Hol van a mosdó?", translation: "Where is the restroom?", usageNote: "Mosdó is a polite term for a public restroom." },
    { original: "Egy kávét kérek.", translation: "A coffee, please.", literalMeaning: "I request a coffee.", usageNote: "Notice the accusative -t on kávét." },
    { original: "Mennyibe kerül?", translation: "How much does it cost?", literalMeaning: "Into how much does it come?", usageNote: "A very common shopping question illustrating the fixed expression kerül valamennyibe." },
    { original: "Egészségedre!", translation: "Cheers! / Bless you!", literalMeaning: "To your health.", usageNote: "Informal singular. Egészségére is polite singular; egészségetekre addresses several people informally." },
    { original: "Örülök, hogy megismerhetem.", translation: "Pleased to meet you.", literalMeaning: "I am glad that I may get to know you.", usageNote: "Polite/formal. In relaxed introductions, Örülök is often enough." },
    { original: "Viszontlátásra!", translation: "Goodbye.", literalMeaning: "Until seeing [each other] again.", usageNote: "Polite. Viszlát is the common shorter form." }
  ],
  sources: [
    { id: "wiki-hungarian", title: "Hungarian language", url: "https://en.wikipedia.org/wiki/Hungarian_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-grammar", title: "Hungarian grammar", url: "https://en.wikipedia.org/wiki/Hungarian_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "syntax-hungarian", title: "Syntax of Hungarian: Nouns and Noun Phrases, Volume 1", url: "https://mek.oszk.hu/19200/19291/pdf/19291_1.pdf", publisher: "Amsterdam University Press", publishedAt: "2018", accessedAt: "2026-09-27" },
    { id: "cambridge-focus", title: "Children's comprehension of prosodically marked focus in Hungarian", url: "https://www.cambridge.org/core/journals/journal-of-child-language/article/childrens-comprehension-of-prosodically-marked-focus-in-hungarian-how-mandatory-syntactic-focusmarking-affects-the-trajectory-of-acquisition/2416B48CE4B2DCB59CE1D5F1A9D3C5A0", publisher: "Journal of Child Language", publishedAt: "2021-05-19", accessedAt: "2026-09-27" },
    { id: "glottolog-hungarian", title: "Glottolog 5.2: Hungarian", url: "https://glottolog.org/resource/languoid/id/hung1274", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "ksh-2022", title: "Census 2022 — Main Population Characteristics", url: "https://nepszamlalas2022.ksh.hu/en/results/final-data/publication/", publisher: "Hungarian Central Statistical Office", publishedAt: "2023", accessedAt: "2026-07-10" },
    { id: "hunren-tools", title: "Language Resources and Tools", url: "https://nytud.hu/en/tools", publisher: "HUN-REN Research Centre for Linguistics", accessedAt: "2026-07-10" },
    { id: "hnc", title: "Hungarian National Corpus", url: "https://hnc.nytud.hu/", publisher: "HUN-REN Research Centre for Linguistics", accessedAt: "2026-09-27" },
    { id: "uesz", title: "New Hungarian Etymological Dictionary", url: "https://uesz.nytud.hu/index.html", publisher: "HUN-REN Research Centre for Linguistics", updatedAt: "2025-08-14", accessedAt: "2026-09-27" },
    { id: "nsul", title: "Nominal Structures of Uralic Languages", url: "https://nsul.nytud.hu/index.html", publisher: "HUN-REN Research Centre for Linguistics", accessedAt: "2026-09-27" },
    { id: "national-atlas-dialects", title: "The Spatial Distribution of Hungarian Dialects", url: "https://www.nemzetiatlasz.hu/MNA/National-Atlas-of-Hungary_Vol1_Ch9.pdf", publisher: "National Atlas of Hungary", publishedAt: "2024", accessedAt: "2026-07-10" },
    { id: "csango-study", title: "Situation of the Csángó Dialect of Moldavia in Romania", url: "https://ahea.pitt.edu/ojs/ahea/article/view/231", publisher: "Hungarian Cultural Studies", publishedAt: "2016", accessedAt: "2026-07-10" },
    { id: "standard-history", title: "The Formation of the Hungarian Standard Language", url: "https://epa.oszk.hu/01400/01462/00021/pdf/EPA01462_Hungarian_Studies_1998-1999_Vol13_No1.pdf", publisher: "Hungarian Studies", publishedAt: "1999", accessedAt: "2026-07-10" },
    { id: "tihany", title: "The Tihany Foundation Charter and Early Hungarian Records", url: "https://mek.oszk.hu/01900/01955/html/index10.html", publisher: "Hungarian Electronic Library", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "Latin Extended-A Code Chart", url: "https://www.unicode.org/Public/18.0.0/charts/PDF/U0100.pdf", publisher: "Unicode Consortium", updatedAt: "2026", accessedAt: "2026-09-27" },
    { id: "unicode-old-hungarian", title: "The Unicode Standard, Chapter 8: Old Hungarian", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-8/", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-07-10" },
    { id: "magyarok", title: "MagyarOK Hungarian Language Course", url: "https://isc.pte.hu/hu/tananyagok", publisher: "University of Pécs", accessedAt: "2026-09-27" }
  ],
  seo: {
    title: "Hungarian Language Guide: Pronunciation, Grammar and Culture",
    description: "A source-backed, example-rich guide to Hungarian history, communities, vowel harmony, cases, definite conjugation, word order, writing, culture, phrases, and learning resources."
  }
} satisfies LanguageGuide;
