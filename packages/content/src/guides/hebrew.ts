import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

export const hebrewGuide: LanguageGuide = {
  slug: "hebrew",
  name: "Hebrew",
  autonym: "עברית",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "A reader-first guide to Hebrew across its biblical, rabbinic, medieval, revival, and contemporary lives, with practical Israeli examples and a candid account of script, society, and language contact.",
  family: "Afro-Asiatic, Semitic, Northwest Semitic",
  macroRegion: "Middle East and Jewish diaspora",
  primaryScript: "Hebrew alphabet",
  difficultyLabel: "Demanding",
  learnerHook: "Hebrew lets a learner read a café notice, a new novel, a medieval poem, and a biblical line in related forms of one language—but each belongs to a different linguistic and social world.",
  hero: {
    imageAlt: "Hebrew writing in contemporary printed and handwritten forms.",
    callToActionLabel: "Explore Hebrew"
  },
  classification: "A Northwest Semitic language with ancient written strata and a modern vernacular shaped through revival, continuity, migration, and contact",
  speakerCommunity: "Hebrew is the majority language of Israel and a learned, literary, liturgical, or communal language for Jews elsewhere. It is also spoken as a first or additional language by Israeli citizens whose home languages include Palestinian Arabic, Russian, Amharic, Yiddish, English, French, and many others. Those speakers do not form one homogeneous community. Hebrew can be a family language, an institution's language, a sacred inheritance, a route through school and work, or a politically charged second language—sometimes several at once.",
  facts: [
    { label: "Family", value: "Afro-Asiatic → Semitic → Northwest Semitic" },
    { label: "Main modern centre", value: "Israel; also Jewish communities worldwide" },
    { label: "Writing", value: "Right-to-left Hebrew alphabet, usually without vowel points" },
    { label: "Key learner divide", value: "Modern spoken Hebrew versus older textual Hebrew" },
    { label: "Modern status", value: "Language of the State of Israel; Arabic has special status under the 2018 Basic Law" }
  ],
  learnerOverview: "Hebrew becomes interesting when it stops looking like a code and starts behaving like a living set of choices. אז יאללה, נדבר—az yalla, nedaber, “so, okay, we’ll talk”—combines an inherited Hebrew verb, an Arabic discourse word, and an intonation no textbook can print. A headline may omit “to be,” attach several particles to words, and expect you to restore vowels from context. A blessing, political slogan, rhyme, and WhatsApp message are all Hebrew but require different knowledge. This guide begins with contemporary Israeli Hebrew, then shows how Biblical, Mishnaic or Rabbinic, and medieval layers remain available without pretending they are interchangeable. Learn the alphabet immediately, whole phrases with gender and register, and roots as clues rather than equations. Attach words to speakers and situations: people use Hebrew to joke, worship, argue, raise children, make art, and encounter institutions in a multilingual society.",

  origins: {
    overview: cited("Hebrew is a Canaanite Northwest Semitic language, alongside ancient Phoenician and Moabite. “Biblical Hebrew” covers texts composed and transmitted across time, while Second Temple material shows change rather than a frozen standard. Mishnaic Hebrew differs noticeably in vocabulary and grammar, and neighbouring Aramaic profoundly marked Jewish textual culture. Hebrew ceased to be whole communities’ ordinary first language but never disappeared: Jews read, wrote, prayed, composed, corresponded, and sometimes communicated across vernacular backgrounds in it. Calling it simply “dead” erases those uses; calling Modern Hebrew unchanged erases its extraordinary transformation into an all-purpose native language.", "hebrew-wikipedia", "huji-department", "dd-history"),
    timeline: [
      {
        period: "First millennium BCE — Biblical and epigraphic Hebrew",
        event: cited("Inscriptions and biblical compositions attest ancient forms written first in Paleo-Hebrew and later the square script descended through Aramaic. The corpus varies by genre and date. Learners usually meet it through editions whose Tiberian vowel points were added by medieval Masoretes to preserve a reading tradition.", "hebrew-wikipedia", "unicode")
      },
      {
        period: "Second Temple and rabbinic eras — Mishnaic Hebrew and Aramaic contact",
        event: cited("Hebrew remained productive as Jewish communities shifted toward Aramaic and other daily languages. Mishnaic Hebrew has everyday vocabulary and constructions rare in the Bible, while Hebrew and Aramaic sit together throughout rabbinic literature. Many ordinary modern words have rabbinic rather than biblical sources.", "huji-department", "academy-dictionary")
      },
      {
        period: "Medieval to early modern — a transregional written language",
        event: cited("Poets, philosophers, rabbis, merchants, and translators expanded Hebrew in communities speaking Arabic, Judeo-Arabic, Romance varieties, Yiddish, and other languages. Andalusi poets combined biblical diction with Arabic metres. They left later writers not one neutral style but a library of registers.", "academy-dictionary", "dd-history")
      },
      {
        period: "Nineteenth and twentieth centuries — vernacularization",
        event: cited("The Haskalah enlarged secular print before organized efforts made Hebrew an everyday language in Ottoman and Mandate Palestine. Eliezer Ben-Yehuda was influential, but families, teachers, schools, writers, newspapers, committees, immigrants, and children made the shift. Zionist promotion also lowered the status of Yiddish and other Jewish languages and occurred amid conflict and dispossession affecting Palestinian Arabic speakers.", "revival-wikipedia", "dd-history", "huji-emergence")
      }
    ],
    contactHistory: cited("Ancient Aramaic supplied words and textual habits; medieval Hebrew worked intimately with Arabic; diaspora languages carried Hebrew-Aramaic vocabulary and later fed expressions back into revived speech. Early Modern Hebrew speakers brought Yiddish, Russian, Polish, German, Ladino, Arabic and other languages, whose depth of grammatical influence scholars still debate. Today טלפון telefon sits beside Arabic markers such as יאללה yalla, “come on.” Contact is not automatically equal: Hebrew and Palestinian Arabic meet amid political asymmetry, so borrowing, accent judgments, schooling, and public services have social stakes. Enjoy cognates without treating Arabic merely as material for Hebrew slang.", "dd-arabic", "huji-emergence", "knesset-law"),
    standardization: cited("The Hebrew Language Committee, founded in 1890, and its successor, the Academy of the Hebrew Language, established by law in 1953, have issued decisions on terminology, spelling, punctuation, and transliteration. Their coinages sometimes become invisible successes and sometimes lose to popular usage. Standard Modern Hebrew is taught in schools and used in public institutions and edited media, but no academy can prevent speakers from shortening forms, borrowing words, or reorganizing grammar. Under Israel’s 2018 Nation-State Basic Law, Hebrew is “the language of the State,” while Arabic receives “special status” and its prior practical status is not to be harmed. That wording is part of a contested political and legal history, not a purely linguistic fact. For learners, “standard” should mean a widely teachable reference variety, not the only legitimate voice.", "academy-home", "knesset-law")
  },

  variants: {
    overview: cited("Modern Israeli Hebrew varies by age, community, first language, religiosity, ethnicity, education, and situation. Some Mizrahi and Arabic-speaking Israelis preserve distinctions mainstream speech merges; Russian-influenced Hebrew has recognizable features. Haredi repertoires may combine Israeli Hebrew, liturgical traditions, and Yiddish. Biblical, Mishnaic, and medieval Hebrew are historical stages, while diverse reading traditions remain living practices—not errors against one norm.", "huji-department", "hebrew-wikipedia"),
    items: [
      { name: "Contemporary colloquial Israeli Hebrew", note: "The broad spoken vernacular heard in family life, work, entertainment, and online conversation. It reduces some formal distinctions, uses many discourse particles, and shifts rapidly by generation. Learn it from recordings, not by reading unpointed spelling aloud mechanically." },
      { name: "Formal and edited Modern Hebrew", note: "News, law, essays, and prepared speech favour denser phrases and prescribed forms that may sound inflated in conversation. Broadcast speech should not be your only model." },
      { name: "Biblical Hebrew", note: "A set of ancient textual varieties with grammar and vocabulary distinct from Modern Hebrew. Modern speakers recognize many phrases, but a learner who addresses a waiter with biblical verb forms sounds less “authentic” than accidentally theatrical." },
      { name: "Mishnaic and rabbinic Hebrew", note: "The Mishnah and later literature contributed heavily to modern vocabulary. This stage is essential for traditional study and tracing post-biblical roots." },
      { name: "Liturgical reading traditions", note: "Ashkenazi, Sephardi, Yemenite, Iraqi, Moroccan, and other communities preserve different vowel qualities, consonants, stress patterns, and melodies. These traditions encode histories of Jewish communities; Israeli pronunciation did not simply replace them." },
      { name: "Community and second-language Hebrew", note: "Arabic-, Russian-, Amharic-, English-, French-, and Yiddish-influenced repertoires are part of Hebrew’s reality. Some features are temporary learner transfer; others are stable markers of belonging, generation, humour, or style." }
    ]
  },

  pronunciation: {
    overview: cited("Mainstream Israeli Hebrew has five vowels. Stress is contrastive and often final, though many words are penultimate. ח and dotless כ share /χ/; ר is often produced in the back of the mouth. א and ע are frequently silent or glottal, while Arabic-influenced and some Mizrahi speech distinguishes them. ט/ת and כּ/ק also merge for many speakers; preserved distinctions can carry cultural meaning.", "academy-orthography", "hebrew-wikipedia"),
    script: "Hebrew alphabet (right to left); examples include both normal unpointed spelling and selective vowel points",
    soundSystem: cited("Dagesh changes three modern pairs: בּ /b/ beside ב /v/, כּ /k/ beside כ /χ/, and פּ /p/ beside פ /f/. שׁ is “sh,” while שׂ is /s/. In speech, articles and prepositions run into words, unstressed vowels may weaken, and loans add /dʒ/ ג׳ and /tʃ/ צ׳. Listen for stress and whole phrases: מה אתה רוצה? ma ata rotse? “what do you want?” is one rhythmic unit, not three careful words.", "academy-orthography", "unicode"),
    prosody: "Hebrew conversation is rhythmically direct but not emotionally uniform. Yes/no questions can rise, yet intonation also marks disbelief, impatience, warmth, and whether a turn is finished. Stress mistakes can change a word or merely advertise a learner: בירה bira with penultimate stress means “beer,” while בירה birá with final stress means “capital city.” Many borrowed words resist the default final stress, and personal names preserve community patterns. Shadow short exchanges with their pauses and particles—נו nu, אז az, כאילו ke’ilu—rather than treating intonation as decoration added after grammar.",
    learnerTraps: [
      "Giving every written א, ע, ה, ו, or י a separate English-like sound; letters and vowels do not map one-to-one.",
      "Putting stress automatically on the first syllable or trusting inconsistent English spellings such as Hanukkah and Chanukah.",
      "Using an exaggerated pharyngeal ח while leaving the rest of one’s pronunciation unchanged; choose a coherent model and listen to varied speakers.",
      "Pausing between attached prefixes and the word: ובבית uvabayit, “and in the house,” is one phonological phrase, not three isolated items.",
      "Learning only carefully pointed forms and failing to recognize reductions, contractions, or borrowed sounds in ordinary speech."
    ],
    sampleWords: [
      { original: "שָׁלוֹם / שלום", transliteration: "shalóm", translation: "peace; hello", note: "Final stress. In real greetings שלום can be neutral or formal; היי hay is common too." },
      { original: "בִּירָה / בירה", transliteration: "bíra", translation: "beer", note: "Penultimate stress distinguishes it from בירָה birá, “capital city.” Unpointed, both are written identically." },
      { original: "חָבֵר / חבר", transliteration: "khavér", translation: "male friend; member", note: "The first consonant is usually /χ/ in mainstream speech; feminine חברה khaverá means “female friend,” while the same unpointed letters can also be read khevrá, “company/society.”" },
      { original: "עִבְרִית / עברית", transliteration: "ivrít", translation: "Hebrew", note: "Mainstream pronunciation normally begins with a vowel; some traditional or Arabic-influenced pronunciations realize ע as a pharyngeal consonant." },
      { original: "רֶגַע / רגע", transliteration: "réga", translation: "moment; wait a second", note: "Usually penultimate stress. As an interjection it can politely or sharply interrupt, depending on intonation." },
      { original: "מַשֶּׁהוּ / משהו", transliteration: "máshehu", translation: "something", note: "Everyday speech often compresses it toward másheu, an example of why printed spelling alone cannot supply conversational pronunciation." }
    ]
  },

  writing: {
    overview: cited("The Hebrew alphabet has twenty-two letters and runs right to left. It is an abjad: core letters historically represent consonants, though ו and י also signal vowels. Five letters have final forms: ך ם ן ף ץ. Vowel and cantillation marks sit around letters but are omitted in most adult prose; children’s books, poetry, dictionaries, teaching, and scripture use them more. Handwriting has a distinct unconnected cursive set. Numerals remain left to right, making mixed lines tricky on screens.", "unicode", "academy-orthography"),
    primaryScript: "Square Hebrew print and a separate modern cursive hand",
    romanization: cited("There is no single everyday romanization. Academy systems coexist with spellings where ח becomes h, ḥ, ch, or kh, and both ק and כּ become k. Romanization hides roots and unpointed ambiguity, so use it briefly with audio, then default to Hebrew. Here kh represents /χ/, sh /ʃ/, and an accent marks stress only when needed.", "academy-transliteration"),
    spellingNorms: cited("Modern Hebrew has a standard vocalized spelling and a standard unvocalized spelling, and the latter is not merely the former with dots erased. Unvocalized כתיב מלא ktiv male, “full spelling,” uses ו and י more extensively to reduce ambiguity. Even so, context does major work: ספר can be séfer “book,” safár “he counted,” or sapár “barber.” Fluent reading is therefore predictive pattern recognition. The Academy’s current rules matter in edited prose, but signage, names, brands, texting, and older publications vary. Punctuation broadly resembles European practice, while Hebrew quotation marks and the marks ׳ and ״ have specialized uses. Digital writers should use proper directionality and Unicode characters rather than visually reversing text.", "academy-orthography", "unicode"),
    styleNotes: [
      "Learn the five final letters as part of each word, then learn cursive early enough that handwriting does not become a second alphabet crisis.",
      "Keep pointed and unpointed versions together in beginner notes, but test yourself on ordinary unpointed sentences from the start.",
      "When a word is ambiguous, record a phrase, not an isolated spelling: את הספר et ha-séfer, “the book,” supplies grammar and context.",
      "Do not paste Hebrew and English punctuation blindly in code or design; inspect bidirectional rendering on an actual narrow screen.",
      "Search names under several romanizations, and search Hebrew words in Hebrew script for substantially better dictionaries and media results."
    ]
  },

  grammar: {
    overview: cited("Hebrew packs information inside words. Particles and pronouns attach to hosts; nouns and adjectives mark gender and number; verbs combine tense, person, gender, and number. Yet Modern Hebrew has no productive noun cases and usually follows subject–verb–object order. Consonantal roots are useful clues, not formulas: patterns, sound change, history, and borrowing still make each word lexical.", "modern-grammar-wikipedia", "dd-arabic"),
    typologicalProfile: cited("Modern Hebrew is a fusional, root-and-pattern Semitic language. “Fusional” means that one ending can express several grammatical facts at once: כתבתם katávtem means “you masculine-plural wrote,” with the ending marking person, number, and gender together. “Root-and-pattern” means that many lexical families organize consonants inside recurring vocalic and affixal shapes. The root כ־ת־ב k-t-v links כתב katáv “he wrote,” מכתב mikhtáv “letter,” כתיבה ktivá “writing,” and הכתיב hikhtív “he dictated,” but their exact meanings must still be learned. Modern usage combines this inheritance with borrowed nouns, analytic constructions using separate words, and productive ways of turning loans into Hebrew verbs.", "modern-grammar-wikipedia", "academy-dictionary"),
    morphology: "Nouns are masculine or feminine and usually pluralize with ־ים -im or ־ות -ot, though gender and ending often mismatch. Adjectives agree: ילד קטן yéled katán, “small boy”; ילדה קטנה yaldá ktaná, “small girl.” Seven binyanim combine roots with verb patterns. Past forms chiefly use suffixes, future forms prefixes plus endings, and present participles mark gender and number but not person. Attached ש־ “that,” ו־ “and,” ב־ “in,” ל־ “to,” and ה־ “the” are small but essential.",
    syntax: "Hebrew often follows subject–verb–object order but fronts topics and omits recoverable subjects. Present clauses lack overt “be”: היא סטודנטית hi studentit, “she is a student.” יש yesh and אין en express existence and possession: יש לי זמן yesh li zman, literally “there is to me time,” means “I have time.” Definite objects receive את et; relative clauses commonly begin with ש־ she-.",
    advancedPainPoints: [
      "Recognizing weak-root verbs whose consonants disappear or change across a paradigm.",
      "Choosing gender and number agreement in speech before the end of a long noun phrase.",
      "Reading unpointed words whose possible vowels correspond to different grammatical forms.",
      "Separating productive modern syntax from prestigious biblical echoes and prescriptive preferences.",
      "Managing formal number agreement, especially the masculine-feminine reversal in cardinal numerals."
    ],
    topics: [
      {
        title: "Roots, patterns, and binyanim",
        body: cited("A binyan is a verb-pattern family, not a tense. With ל־מ־ד l-m-d, למד lamád is “he learned,” לימד liméd “he taught,” and נלמד nilmád “was learned.” Relationships are not mechanically guaranteed. Learn an infinitive, present forms, past citation form, and a sentence together; that bundle reveals weak-root behaviour.", "modern-grammar-wikipedia", "dd-resources"),
        example: "היא למדה עברית באוניברסיטה, ועכשיו היא מלמדת ילדים.",
        exampleTranslation: "Hi lamda ivrit ba-universita, ve-akhshav hi melamedet yeladim. “She studied Hebrew at university, and now she teaches children.” The two related verbs use different binyanim and feminine singular forms."
      },
      {
        title: "Present tense, gender, and the missing copula",
        body: "Present-tense verbs agree in gender and number, not person: אני כותב ani kotev is “I write/am writing” said by a man; אני כותבת ani kotevet is said by a woman. Nominal and adjectival clauses simply juxtapose subject and predicate in the present. In past and future, forms of היה haya “be” appear. This makes a beginner sentence wonderfully short, but it also means agreement carries information that English puts elsewhere.",
        example: "הספר הזה מעניין, אבל הדוגמאות קשות.",
        exampleTranslation: "Ha-sefer ha-ze me'anyen, aval ha-dugma'ot kashot. “This book is interesting, but the examples are difficult.” There is no written “is/are”; both adjectives agree with their nouns."
      },
      {
        title: "Definiteness and the direct-object marker את",
        body: "את et precedes definite direct objects and has no English translation. Compare קראתי ספר karáti séfer, “I read a book,” with קראתי את הספר karáti et ha-séfer, “I read the book.” In rapid speech it may join the article. The same unpointed spelling also represents את at, feminine “you.”",
        example: "ראינו את הסרט החדש אתמול.",
        exampleTranslation: "Ra'inu et ha-séret he-khadásh etmol. “We saw the new film yesterday.” Both the noun and following adjective are definite, while את marks the definite object phrase."
      },
      {
        title: "Possession: של and יש",
        body: "של shel takes suffixes: הספר שלי ha-séfer sheli, “my book”; הבית שלהם ha-báyit shelahem, “their house.” Clausal possession uses יש/אין plus ל־: יש לי yesh li, “I have”; אין לנו en lanu, “we don’t have.” Learn these as complete frames.",
        example: "אין לי מכונית, אבל יש לי אופניים.",
        exampleTranslation: "En li mekhonit, aval yesh li ofanáyim. “I don’t have a car, but I have a bicycle.” Literally, “there isn’t to me a car, but there is to me a bicycle.”"
      },
      {
        title: "Smikhut: the construct chain",
        body: "סמיכות smikhut links nouns without “of.” בית ספר bet séfer, literally “house-of book,” means “school”; מדינת ישראל medinát Yisra'el is “State of Israel.” The first noun may change, and definiteness covers the chain: בית הספר bet ha-séfer, “the school.” Long colloquial phrases often prefer של.",
        example: "מורי בית הספר נפגשו בחדר המורים.",
        exampleTranslation: "Moréi bet ha-séfer nifgeshú be-khéder ha-morím. “The school’s teachers met in the staff room.” The sentence contains two construct chains, one with a plural construct form מורֵי morei."
      },
      {
        title: "Prepositions and pronominal suffixes",
        body: "Prepositions fuse with pronouns: איתי iti “with me,” איתך itkha/itakh “with you,” עליו alav “about him,” בשבילנו bishvilénu “for us.” Learn them as vocabulary; *עם אני, literally “with I,” cannot replace איתי.",
        example: "דיברתי איתה על זה, והיא הסכימה איתי.",
        exampleTranslation: "Dibárti itá al ze, ve-hi hiskíma iti. “I spoke with her about it, and she agreed with me.” Hebrew distinguishes איתה “with her” from איתי “with me” inside the preposition."
      }
    ]
  },

  whereSpoken: {
    overview: cited("Israel is the centre of native Modern Hebrew: it is dominant in government, Jewish-majority schooling, most national media, and much public commerce. The same space is multilingual. Palestinian Arabic is the home language of many citizens and the wider region; Russian, Amharic, English, French, Yiddish, and other languages have visible communities. Hebrew is also taught and used in Jewish schools, synagogues, universities, cultural organizations, and families worldwide, but competence ranges from decoding prayers to contemporary native fluency. A diaspora learner’s Hebrew may centre on scripture, liturgy, Israeli relatives, literature, politics, or all of them. The 2018 legal designation of Hebrew and special status for Arabic should not be mistaken for a neutral description of who lives where or which language matters to whom.", "knesset-law", "hebrew-wikipedia"),
    regions: [
      { place: "Israel", note: cited("The main environment for native contemporary Hebrew, with significant social variation and widespread multilingualism. Learners encounter Hebrew on transport, television, technology, education, religion, and bureaucracy, but Arabic remains central to many citizens and to the region.", "knesset-law") },
      { place: "North America, Europe, Australia, and other diaspora communities", note: "Hebrew appears in community education, worship, summer camps, cultural events, publishing, and family networks. Israeli emigrant communities may maintain it as a home language, while heritage learners often understand more ritual or family vocabulary than everyday grammar." },
      { place: "Universities and seminaries worldwide", note: "Biblical Hebrew, Jewish studies, theology, archaeology, and modern Israel studies produce different learning traditions. Ask whether a course teaches contemporary conversation, biblical reading, rabbinic texts, or a combination; the label “Hebrew” alone is insufficient." },
      { place: "Digital media", note: "Streaming television, podcasts, music, gaming, social networks, and diaspora group chats expose learners to styles once available mainly through local immersion. Online text is often deliberately nonstandard and may mix Hebrew, Arabic, Russian, and English." }
    ],
    mapImageAlt: "Israel and worldwide Jewish communities where Hebrew is spoken, studied, or used in communal life."
  },

  difficulty: {
    label: "Demanding",
    overview: "For an English speaker, Hebrew’s alphabet and right-to-left layout create an obvious first barrier, but they are finite: a focused learner can recognize print quickly. The longer challenge is reading without vowels while simultaneously predicting morphology, syntax, and meaning. Gender agreement, shifting weak-root verbs, compact prepositions, and unfamiliar vocabulary demand sustained exposure. The encouraging side is that the sound inventory is manageable, present-tense clauses can be economical, spelling has consistent structure once roots become visible, and modern media and teaching resources are abundant. “Demanding” describes the distance from English, not a property of Hebrew speakers or a guarantee that every stage will feel hard.",
    easierAspects: [
      "Only five core vowels in mainstream Israeli pronunciation.",
      "No productive noun cases and a broadly familiar subject–verb–object baseline.",
      "Roots and recurring patterns make vocabulary families increasingly visible.",
      "A large supply of courses, dictionaries, subtitled media, teachers, and community contexts."
    ],
    hardAspects: [
      "Ordinary text omits most vowels, producing many possible readings for beginners.",
      "Verb paradigms change around weak consonants and do not map neatly onto English tense labels.",
      "Gender and number agreement extend through verbs, adjectives, pronouns, and numerals.",
      "Older textual layers are accessible enough to tempt misuse but different enough to require separate study.",
      "Colloquial speech compresses words and uses particles rarely explained well in formal textbooks."
    ],
    plateauRisks: [
      "Remaining dependent on vowel points or romanization instead of building prediction from context.",
      "Collecting roots without learning actual sentences, prepositions, and register.",
      "Understanding news prose but not turn-taking, slang, reductions, and humour in conversation.",
      "Treating native variation as noise and listening only to one polished instructional voice."
    ],
    workload: cited("A useful first phase is script plus survival conversation; the Discover Discomfort 30-day experiment found value in learning ten personally useful sentences a day with a teacher. That approach creates momentum, but durable literacy needs a second track: graded reading first with and then without points, daily listening, and systematic verb review. At intermediate level, choose a domain—television drama, food writing, family interviews, technology, religious text—and mine complete phrases from it. Keep Biblical Hebrew separate unless it is your goal. An hour divided among audio, reading, and active sentence production is usually more productive than an hour of isolated vocabulary. Expect several hundred hours for comfortable everyday independence and much longer for effortless unpointed literature or cross-period reading; individual background and access to speakers matter more than a universal timetable.", "dd-30days", "dd-resources")
  },

  advancedLearning: {
    strategy: cited("Keep linked notes for sound, morphology, and reading context. Store short recordings with stress; verb families with real examples; and ambiguous unpointed words inside sentences. End each week with a performance such as arranging a lesson or retelling a scene. Discover Discomfort’s ten-sentences-a-day experiment works best when sentences come from your life and a teacher corrects them. Alternate colloquial and edited sources so “natural” and “correct” do not collapse into one standard.", "dd-30days", "dd-resources"),
    mediaPractice: cited("Choose media you would enjoy anyway. Predict a news headline’s vowels, or replay thirty seconds of drama until you hear its particles, then compare Hebrew captions. Translations often paraphrase; songs distort neutral stress. Bring clips to a tutor and ask “who would say this, and when?” Everyday fluency lives in responses such as ברור barur, “sure,” and חבל khaval, “what a pity,” not only textbook questions.", "dd-phrases", "dd-resources"),
    dictionariesAndCorpora: cited("Pealim provides verb tables and roots; the Academy terminology database investigates official coinages; Ma’agarim tracks language across two millennia. Morfix or Rav-Milim supplies current senses. Search phrases in news and subtitles for collocation, recording date and genre. Historical corpora and modern web frequency answer different questions, and no dictionary alone marks an expression as warm, bureaucratic, religious, old-fashioned, or political.", "academy-dictionary", "academy-home", "dd-resources"),
    resources: [
      { type: "other", title: "Discover Discomfort: Our Favourite Free and Cheap Hebrew Resources", url: "https://discoverdiscomfort.com/hebrew-learning-resources-free-cheap/", level: "all", description: cited("A field-tested survey of courses, teachers, conjugation tools, books, and audio. Use it to assemble a mixed toolkit rather than expecting one app to teach every skill.", "dd-resources") },
      { type: "dictionary", title: "Pealim", url: "https://www.pealim.com/", level: "all", description: "A searchable modern Hebrew dictionary centered on roots, word families, and full verb conjugation tables, with pointed spelling and audio on many entries. Particularly good for answering “what form did I just see?”" },
      { type: "corpus", title: "Ma’agarim Historical Dictionary Project", url: "https://maagarim.hebrew-academy.org.il/", level: "advanced", description: cited("Search words, roots, and texts across periods, replacing vague “biblical” or “rabbinic” labels with evidence.", "academy-dictionary") },
      { type: "course", title: "Colloquial Hebrew by Zippi Lyttleton and Tamar Wang", url: "https://www.routledge.com/Colloquial-Hebrew/Lyttleton-Wang/p/book/9781138950160", level: "beginner", description: "A structured modern course with dialogues and audio that aims at spoken use. Pair it with live correction and contemporary media because any fixed course inevitably ages." },
      { type: "podcast", title: "Streetwise Hebrew", url: "https://tlv1.fm/podcasts/streetwise-hebrew-show/", level: "intermediate", description: "Short episodes unpack colloquial words, pronunciation, songs, signs, and the gap between a gloss and interactive meaning." },
      { type: "media", title: "כאן — Kan public media", url: "https://www.kan.org.il/", level: "intermediate", description: "Television, radio, podcasts, news, and children’s programmes provide sharply different registers." }
    ]
  },

  wordsAndTexts: {
    overview: cited("Hebrew vocabulary is an archaeological site still growing. A word may be biblical, rabbinic, medieval, newly coined, borrowed whole, or reshaped as Hebrew. Speakers exploit layers for jokes: a biblical phrase in an advertisement can sound grand or ironic. Etymology is not meaning—דווקא davka resists a root-based translation, and חבל khaval changes with context. Learn small discourse words as carefully as literary vocabulary.", "academy-dictionary", "dd-phrases"),
    notableWords: [
      { term: "שלום", transliteration: "shalom", meaning: "peace; hello", note: cited("Built on the Semitic root associated with wholeness and peace, שלום carries religious and political resonance but is also an ordinary greeting. It is less universal as a casual goodbye than phrasebooks imply; להתראות lehitra'ot is explicit “see you.”", "dd-arabic", "dd-phrases") },
      { term: "דווקא", transliteration: "davka", meaning: "precisely; actually; contrary to expectation", note: "A celebrated context word. אני דווקא אוהב את זה ani davka ohev et ze means roughly “I actually like it,” often correcting an expectation. One English gloss will fail; collect contrasting examples." },
      { term: "חבל", transliteration: "khaval", meaning: "rope; region; pity/shame", note: "In חבל! khaval! the common conversational meaning is “what a pity.” חבל על הזמן khaval al ha-zman is literally “a waste of time” but can colloquially praise something as amazing, a reminder that phrases outrank component words." },
      { term: "פרגון", transliteration: "firgun", meaning: "generous, ungrudging delight in another’s success", note: "From Yiddish farginen and now thoroughly Hebrew, the noun and verb לפרגן lefargen fill a useful social niche. It is often marketed as “untranslatable,” though a full English paraphrase works perfectly well." },
      { term: "סבבה", transliteration: "sababa", meaning: "great; okay; cool", note: cited("Borrowed through Arabic and now emblematic casual Israeli Hebrew. It can enthusiastically praise something or simply acknowledge a plan. Knowing its Arabic history should lead toward Arabic learning and living speakers, not a story that Hebrew slang appeared from nowhere.", "dd-arabic", "dd-phrases") },
      { term: "תכלס", transliteration: "takhles", meaning: "practically; bottom line; in fact", note: "A Yiddish-mediated form ultimately connected to Hebrew תכלית takhlit, “purpose/end.” Speakers use תכלס to cut through theory: תכלס, מה עושים? “Bottom line, what are we doing?” The word’s round trip captures Hebrew–Yiddish contact." },
      { term: "יאללה", transliteration: "yalla", meaning: "come on; let’s go; okay then", note: "An Arabic borrowing ranging from encouragement to dismissal. יאללה ביי yalla bye combines Arabic and English in casual leave-taking." }
    ],
    loanwordLayers: cited("Aramaic shaped religious and ordinary vocabulary; medieval Hebrew expanded under Arabic intellectual models. Revivalists reused roots and calqued European expressions while speakers borrowed directly. Yiddish supplied תכלס takhles and פרגון firgun; Russian, Ladino, Judeo-Arabic, French, and English left traces. Arabic loans such as אחלה akhla, סבבה sababa, and יאללה yalla are visible, but contact is asymmetric: Hebrew has greater state power, while Palestinian Arabic speakers borrow Hebrew for institutions and work. Vocabulary history should reveal that inequality, not aestheticize a frictionless “mix.”", "dd-arabic", "huji-emergence", "knesset-law"),
    idioms: [
      { original: "יהיה בסדר", transliteration: "yihye beséder", translation: "It’ll be okay; it’ll work out.", note: "Literally “it will be in order.” Reassuring in one voice, dismissive in another; a compact window onto Israeli improvisational confidence and its critics." },
      { original: "חבל על הזמן", transliteration: "khaval al ha-zman", translation: "Amazing; out of this world (colloquial), or literally a waste of time.", note: "Context reverses the apparent evaluation. הוא שף חבל על הזמן hu shef khaval al ha-zman can enthusiastically mean “He’s an incredible chef.”" },
      { original: "לא דובים ולא יער", transliteration: "lo dubim ve-lo ya'ar", translation: "There’s nothing to it; the whole story is invented.", note: "Literally “neither bears nor forest.” Used to deny a rumour or supposed danger completely: not only are there no bears, there is not even a forest." },
      { original: "על הפנים", transliteration: "al ha-panim", translation: "Terrible; in awful condition.", note: "Literally “on the face.” הסרט היה על הפנים ha-seret haya al ha-panim means “the film was awful.” It is common and informal, not a description of physical position." },
      { original: "יצא המרצע מן השק", transliteration: "yatsa ha-martsea min ha-sak", translation: "The hidden truth or motive came out.", note: "Literally “the awl came out of the sack.” A literary proverb suited to commentary more than casual beginner conversation; it shows how older imagery remains available in modern prose." }
    ],
    textGenres: [
      "WhatsApp messages, memes, stand-up, and unscripted conversation",
      "Newspapers, public broadcasting, essays, and political commentary",
      "Modern fiction, poetry, children’s literature, and graphic novels",
      "Biblical, rabbinic, liturgical, and medieval texts in distinct study traditions",
      "Songs from piyyut and folk repertoires to rock, hip-hop, pop, and Mizrahi music",
      "Law, bureaucracy, academic prose, technology, and advertising"
    ]
  },

  relationships: {
    overview: cited("Hebrew is Northwest Semitic, while Arabic belongs to another Semitic branch; Aramaic is genealogically closer and a major contact language. Roots and morphology resemble one another without creating mutual intelligibility. Yiddish, Ladino, and Judeo-Arabic belong elsewhere in the family tree but contain Hebrew-Aramaic layers and influenced modern usage in return. Comparison should explain patterns, not turn living languages into mirrors.", "dd-arabic", "hebrew-wikipedia"),
    languages: [
      { name: "Arabic", slug: "arabic", relationship: "Semitic relative and major contact language", explanation: cited("Arabic shares root-and-pattern morphology and many cognates: Hebrew שלום shalom and Arabic سلام salam both concern peace. Sound correspondences are systematic but meanings and grammar have diverged. The two languages also meet daily under unequal social and political conditions in Israel and Palestine.", "dd-arabic") },
      { name: "Aramaic", relationship: "Northwest Semitic relative and long-term textual neighbour", explanation: "Aramaic appears throughout Jewish liturgy and rabbinic literature and supplied Hebrew vocabulary and expressions. Familiar words such as אבא aba “dad” entered modern everyday Hebrew through an Aramaic history." },
      { name: "Yiddish", relationship: "Germanic Jewish language with two-way contact", explanation: "Yiddish contains a substantial Hebrew-Aramaic component pronounced according to its own system. Speakers involved in Hebrew vernacularization brought Yiddish patterns and words, even while institutions often promoted Hebrew at Yiddish’s expense." },
      { name: "Ladino / Judeo-Spanish", relationship: "Romance Jewish language and contact source", explanation: "Sephardi communities used Judeo-Spanish alongside Hebrew, often writing it in Hebrew characters. Its cultural vocabulary, literature, and music form part of the multilingual background from which Israeli Hebrew emerged." },
      { name: "Amharic", slug: "amharic", relationship: "More distant Semitic relative in modern community contact", explanation: "Amharic and Hebrew share ancient Semitic structural ancestry but are not mutually intelligible. Ethiopian Israeli communities add a contemporary layer of contact involving Amharic, Hebrew, identity, education, and generational change." }
    ]
  },
  culturalNotes: "Hebrew is Jewish memory and cultural creativity, a mother tongue, and a landmark for revitalization movements. It is also the dominant state language where Palestinian Arabic speakers face conflict and institutional inequality; its nationalization pressured other Jewish languages. Responsible learning hears Israeli Jewish and Palestinian perspectives. A Yemenite biblical reading, secular sketch, Haredi notice, Arabic-speaking nurse’s professional Hebrew, and poet’s archaism show who makes the language meaningful.",

  resources: [
    { type: "other", title: "Discover Discomfort: Hebrew and Arabic Similarities and Differences", url: "https://discoverdiscomfort.com/arabic-hebrew-similarities-differences/", level: "all", description: cited("An accessible side-by-side introduction to scripts, shared Semitic roots, grammar, and cognates. Use it to generate questions for deeper study, while remembering that comparison does not make the languages mutually intelligible or their societies interchangeable.", "dd-arabic") },
    { type: "other", title: "Discover Discomfort: 30 Days of Hebrew, Ten Sentences a Day", url: "https://discoverdiscomfort.com/30-days-month-hebrew-ten-sentences/", level: "beginner", description: cited("A concrete account of building useful spoken Hebrew through daily personalized sentences and tutoring. It is valuable as a model for active practice, especially when supplemented with systematic listening and unpointed reading.", "dd-30days") },
    { type: "other", title: "Discover Discomfort: Hebrew Words and Phrases to Sound Local", url: "https://discoverdiscomfort.com/hebrew-phrases-words-to-sound-local/", level: "intermediate", description: cited("A compact collection of high-frequency colloquial responses and discourse words. Treat it as a listening checklist: intonation, relationship, and timing determine whether a phrase sounds friendly, ironic, abrupt, or forced.", "dd-phrases") },
    { type: "other", title: "Discover Discomfort: History of the Hebrew Language", url: "https://discoverdiscomfort.com/history-of-hebrew-language/", level: "all", description: cited("A readable path through ancient strata, continued textual use, and modern vernacularization. Pair it with academic histories to explore why “revival,” “continuity,” and “dead language” each highlight some facts and conceal others.", "dd-history") },
    { type: "dictionary", title: "Academy of the Hebrew Language terminology database", url: "https://terms.hebrew-academy.org.il/", level: "advanced", description: cited("Search Academy-approved specialist terms and general vocabulary in Hebrew. It is especially revealing when compared with the English loanword or colloquial expression speakers actually choose.", "academy-home") },
    { type: "other", title: "Academy of the Hebrew Language: Orthography", url: "https://eng.hebrew-academy.org.il/our-work/language-decisions/orthography/", level: "intermediate", description: cited("A clear English overview of vocalized and unvocalized spelling, the role of nikkud, and the relation between traditional and contemporary pronunciation. Follow its links into the full Hebrew rules as literacy grows.", "academy-orthography") },
    { type: "media", title: "Project Ben-Yehuda", url: "https://benyehuda.org/", level: "advanced", description: "A free digital library of Hebrew literature, essays, translations, and historical writing. Choose by author and period, then read with a dictionary and note which forms are literary rather than conversational." }
  ],
  relatedLanguages: [
    { name: "Arabic", slug: "arabic", relationship: "Semitic relative and major contact language", explanation: cited("Arabic and Hebrew share deep Semitic architecture and striking cognates while remaining distinct languages shaped by different histories. Modern contact adds borrowing in both directions under unequal conditions.", "dd-arabic") },
    { name: "Aramaic", relationship: "Northwest Semitic relative", explanation: "A closer genealogical relative with extensive presence in Jewish texts and a deep contribution to Hebrew vocabulary." },
    { name: "Amharic", slug: "amharic", relationship: "Semitic relative", explanation: "A more distant Semitic comparison and, through Ethiopian Israeli life, a contemporary community contact language." }
  ],

  phrases: [
    { original: "שלום, מה נשמע?", transliteration: "Shalom, ma nishma?", translation: "Hi, how’s it going?", literalMeaning: "Hello, what is heard?", usageNote: "A common neutral greeting. מה קורה? ma kore? is more casual. No gender change is needed here." },
    { original: "תודה רבה.", transliteration: "Toda raba.", translation: "Thank you very much.", usageNote: "רבה raba agrees historically with feminine תודה toda. Plain תודה is enough in most situations." },
    { original: "בבקשה.", transliteration: "Bevakasha.", translation: "Please; you’re welcome; here you are.", usageNote: "Its function comes from position: before a request it is “please,” after thanks it is “you’re welcome.”" },
    { original: "סליחה, לא הבנתי.", transliteration: "Slikha, lo hevanti.", translation: "Sorry/excuse me, I didn’t understand.", usageNote: "הבנתי hevanti is the same for any speaker in the past first-person singular." },
    { original: "אפשר לדבר יותר לאט?", transliteration: "Efshar ledaber yoter le'at?", translation: "Could you speak more slowly?", literalMeaning: "Is it possible to speak more slowly?", usageNote: "The impersonal אפשר avoids choosing a gendered imperative and sounds natural." },
    { original: "אפשר להגיד את זה שוב?", transliteration: "Efshar lehagid et ze shuv?", translation: "Could you say that again?", usageNote: "A practical repair phrase. את marks זה “this/that” as the definite direct object." },
    { original: "מה פירוש המילה הזאת?", transliteration: "Ma perush ha-mila ha-zot?", translation: "What does this word mean?", literalMeaning: "What is the meaning of this word?", usageNote: "המילה הזאת ha-mila ha-zot shows feminine agreement and double definiteness." },
    { original: "אני לומד עברית. / אני לומדת עברית.", transliteration: "Ani lomed ivrit. / Ani lomedet ivrit.", translation: "I’m learning Hebrew.", usageNote: "Use לומד if you identify grammatically masculine and לומדת if feminine." },
    { original: "אני רוצה קפה. / אני רוצה קפה.", transliteration: "Ani rotse kafe. / Ani rotsa kafe.", translation: "I’d like coffee.", usageNote: "The spelling רוצה is identical: masculine rotse, feminine rotsa. Context supplies the vowels." },
    { original: "אין בעיה.", transliteration: "En be'aya.", translation: "No problem.", literalMeaning: "There is no problem.", usageNote: "An extremely common reassurance or acceptance. Tone can make it genuinely helpful or mildly impatient." },
    { original: "יאללה, להתראות!", transliteration: "Yalla, lehitra'ot!", translation: "Okay then, see you!", usageNote: "Casual leave-taking combining an Arabic-origin discourse marker with the standard Hebrew “see you.”" }
  ],

  sources: [
    { id: "dd-resources", title: "Our Favourite Free and Cheap Hebrew Resources", url: "https://discoverdiscomfort.com/hebrew-learning-resources-free-cheap/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-30days", title: "30 Days of Hebrew — Ten Sentences a Day", url: "https://discoverdiscomfort.com/30-days-month-hebrew-ten-sentences/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-arabic", title: "Hebrew and Arabic — Similarities and Differences", url: "https://discoverdiscomfort.com/arabic-hebrew-similarities-differences/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-phrases", title: "Hebrew Words and Phrases to Sound Local", url: "https://discoverdiscomfort.com/hebrew-phrases-words-to-sound-local/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-history", title: "History of the Hebrew Language", url: "https://discoverdiscomfort.com/history-of-hebrew-language/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "hebrew-wikipedia", title: "Hebrew language", url: "https://en.wikipedia.org/wiki/Hebrew_language", publisher: "Wikipedia", updatedAt: "2026-07-10", accessedAt: "2026-07-10" },
    { id: "revival-wikipedia", title: "Revival of the Hebrew language", url: "https://en.wikipedia.org/wiki/Revival_of_the_Hebrew_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "modern-grammar-wikipedia", title: "Modern Hebrew grammar", url: "https://en.wikipedia.org/wiki/Modern_Hebrew_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "academy-home", title: "The Academy of the Hebrew Language", url: "https://eng.hebrew-academy.org.il/", publisher: "Academy of the Hebrew Language", accessedAt: "2026-07-10" },
    { id: "academy-orthography", title: "Orthography", url: "https://eng.hebrew-academy.org.il/our-work/language-decisions/orthography/", publisher: "Academy of the Hebrew Language", publishedAt: "2024-01-24", accessedAt: "2026-07-10" },
    { id: "academy-transliteration", title: "Transliteration", url: "https://eng.hebrew-academy.org.il/our-work/language-decisions/transliteration/", publisher: "Academy of the Hebrew Language", publishedAt: "2024-01-24", accessedAt: "2026-07-10" },
    { id: "academy-dictionary", title: "Historical Dictionary Project", url: "https://eng.hebrew-academy.org.il/our-work/historical-dictionary-project/", publisher: "Academy of the Hebrew Language", accessedAt: "2026-07-10" },
    { id: "unicode", title: "The Unicode Standard, Chapter 9: Hebrew", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-9/", publisher: "Unicode Consortium", updatedAt: "2024-09-10", accessedAt: "2026-07-10" },
    { id: "huji-department", title: "Department of Hebrew Language — About", url: "https://en.hebrew-language.huji.ac.il/about", publisher: "Hebrew University of Jerusalem", accessedAt: "2026-07-10" },
    { id: "huji-emergence", title: "The Emergence of Modern Hebrew as a Case-Study of Linguistic Discontinuity", url: "https://llcc.huji.ac.il/erc-0", publisher: "Hebrew University of Jerusalem", accessedAt: "2026-07-10" },
    { id: "knesset-law", title: "Basic-Law: Israel — The Nation State of the Jewish People", url: "https://main.knesset.gov.il/EN/activity/documents/BasicLawsPDF/BasicLawNationState.pdf", publisher: "The Knesset", publishedAt: "2018-07-19", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Hebrew Language Guide: Modern Speech, Script, Grammar, and History",
    description: "Learn how Hebrew works across modern Israeli speech and its biblical, rabbinic, and medieval layers, with accurate examples, pronunciation, grammar, cultural context, resources, and sources."
  }
};
