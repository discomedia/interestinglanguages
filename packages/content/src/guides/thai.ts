import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Lao",
    relationship: "Close Southwestern Tai relative",
    explanation: cited(
      "Thai and Lao share many words and grammar patterns. Speakers sometimes adjust to one another, especially if they've heard the other's language in media. Each language has its own standard, script, and institutions, so understanding varies with the people and situation.",
      "wiki-thai-lao",
      "enfield-thai-isan-lao"
    )
  },
  {
    name: "Isan",
    relationship: "Lao varieties indigenous to northeastern Thailand",
    explanation: cited(
      "Isan names Lao-related varieties spoken in northeastern Thailand. Local speech also connects with varieties across the Mekong. Many speakers know Standard Thai through school, work, and media, while continuing to use Isan with their communities.",
      "wiki-isan",
      "enfield-thai-isan-lao"
    )
  },
  {
    name: "Northern Thai",
    relationship: "Southwestern Tai relative with a Lanna literary tradition",
    explanation: cited(
      "Northern Thai, often called Kam Mueang, is a close Tai relative with its own words and tone patterns. Writers historically used Tai Tham, also called Tua Mueang locally. Many people now write Northern Thai with Thai characters, while some continue teaching the older script.",
      "wiki-northern-thai",
      "unicode-thai"
    )
  },
  {
    name: "Zhuang languages",
    relationship: "More distant relatives in the Tai branch",
    explanation: cited(
      "Zhuang languages in southern China also belong to the Tai branch. Some words and patterns reflect shared ancestry, but a Standard Thai speaker cannot assume they'll understand a Zhuang variety. Family classification doesn't make these communities one people.",
      "glottolog-thai",
      "wiki-thai"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const thaiGuide = {
  slug: "thai",
  name: "Thai",
  autonym: "ภาษาไทย",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "In Standard Thai, five tones change word meanings, spelling helps you recover those tones, and small particles shape everyday conversations.",
  family: "Kra-Dai, Tai, Southwestern Tai",
  macroRegion: "Thailand, mainland Southeast Asia, and global Thai communities",
  primaryScript: "Thai script",
  difficultyLabel: "Very demanding",
  learnerHook: "A Thai sign gives you clues to a word's sound, while a tiny word at the end of a sentence can tell you how the speaker sees the listener.",
  hero: {
    imageAlt: "Thai handwriting and printed type showing consonants, surrounding vowels, and tone marks.",
    callToActionLabel: "Explore Thai in use"
  },
  classification: "Standard Thai grows from Central Thai and belongs to the Southwestern Tai branch of the Kra-Dai family.",
  speakerCommunity: "People use Standard Thai in schools, government, national news, publishing, and conversations across regions. It draws especially on educated Bangkok speech. At home, many people also speak Isan, Northern Thai, Southern Thai, Malay, Khmer, Karen languages, Chinese varieties, and other languages.\n\nA family may use one language at home and Standard Thai at school or work. Thai-speaking communities also keep the language in use through families, temples, businesses, and online media outside Thailand.",
  facts: [
    { label: "Family", value: "Kra-Dai · Tai · Southwestern Tai" },
    { label: "Standard base", value: "Central Thai, especially educated Bangkok usage" },
    { label: "Sound system", value: "Five lexical tones plus contrastive vowel length" },
    { label: "Script", value: "Left-to-right script with 44 traditional consonant letters" },
    { label: "Word spacing", value: "Spaces usually separate larger phrases, not every word" },
    { label: "Major contact layers", value: "Pali, Sanskrit, Khmer, Chinese varieties, Malay, and English" }
  ],
  introduction: cited(
    "Thai is heard from Bangkok's national newsrooms and classrooms to households across the country. Standard Thai grew from Central Thai and serves government, education, and much national media, while many people also speak Isan, Northern Thai, Southern Thai, or other home languages. Thai-speaking communities abroad continue family conversation and gather around schools, temples, associations, and media.\n\nThai belongs to the Southwestern Tai branch of the Kra-Dai family, which also includes Lao and several regional languages of Thailand. Standard Thai draws especially on educated Bangkok speech, while local varieties reflect different regional histories and contacts. In conversation, people choose pronouns, names, and sentence-ending particles in ways that signal familiarity, respect, or social distance.\n\nThe script makes the link between sound and meaning visible. ปา (paa) means “throw”, ป่า (pàa) means “forest”, and ป้า (pâa) means “aunt”: the same consonant and vowel take different marks and tones. Standard Thai has five lexical tones, and a syllable's tone depends on its consonant class, mark, and ending; some written vowel signs also appear before the consonant they follow in speech.",
    "wiki-thai",
    "glottolog-thai",
    "enfield-thai-isan-lao",
    "wiki-northern-thai",
    "unicode-thai",
    "thai-dictionary",
    "iwasaki-register"
  ),
  origins: {
    overview: cited(
      "Thai belongs to the Southwestern Tai branch of Kra-Dai. Its ancestors developed among Tai-speaking communities in mainland Southeast Asia, where other languages and trade networks were already established.\n\nCentral Thai grew around political and river-trade centers that included Sukhothai and Ayutthaya. When the political center moved to Thonburi and then Bangkok after Ayutthaya's fall in 1767, speakers kept adapting the language. Khmer, Pali, Sanskrit, Chinese varieties, and other contacts left different marks on its vocabulary and writing.",
      "glottolog-thai",
      "wiki-thai",
      "unicode-thai"
    ),
    timeline: [
      {
        period: "Before the 13th century",
        event: cited(
          "Tai varieties spread and changed through migration and contact across what is now southern China and mainland Southeast Asia. Speakers lived among Mon, Khmer, and other communities whose languages had long histories of their own.",
          "glottolog-thai",
          "wiki-thai"
        )
      },
      {
        period: "13th–14th centuries",
        event: cited(
          "Early Sukhothai inscriptions show Thai writing taking shape. A traditional account credits King Ramkhamhaeng with creating the script in 1283, though scholars have debated the famous inscription's date and authorship. Thai writing grew from older regional scripts rather than appearing from nowhere.",
          "wiki-thai-script",
          "unicode-thai"
        )
      },
      {
        period: "Ayutthaya era, 1351–1767",
        event: cited(
          "Ayutthaya brought together court officials, religious teachers, merchants, and writers from several language backgrounds. Thai gained court vocabulary and new literary and administrative practices through these contacts.",
          "wiki-thai"
        )
      },
      {
        period: "Bangkok era, late 18th–19th centuries",
        event: cited(
          "Bangkok's court sponsored literature and Buddhist texts, including new versions of the Ramakien. Printing, administration, and schools brought more people into contact with Central Thai.",
          "wiki-thai"
        )
      },
      {
        period: "20th century to the digital present",
        event: cited(
          "Schools, broadcasting, migration, and publishing spread Standard Thai. Regional languages continue in homes, music, local media, and online writing. People also shorten particles, add emoji, and type 555 for laughter in digital Thai.",
          "wiki-thai",
          "dd-laughter",
          "dd-laughter"
        )
      }
    ],
    contactHistory: cited(
      "Thai keeps many basic words from earlier Tai speech. Pali and Sanskrit, often through Khmer traditions, contributed much religious, royal, legal, and scholarly vocabulary. Chinese varieties added food and trade words, while Malay contacts matter especially in the south.\n\nEnglish now supplies words for technology, sport, and popular culture. Speakers adapt loans to Thai sounds and tones: 'computer' becomes คอมพิวเตอร์. A formal Thai coinage and an English loan may name the same thing in different settings.",
      "wiki-thai",
      "thai-dictionary",
      "wiki-thai"
    ),
    standardization: cited(
      "The Royal Society publishes a dictionary and guidance on spelling, terminology, and romanization. Schools, publishers, broadcasters, and speakers also shape what readers recognize as Standard Thai.\n\nFormal writing often uses different words and sentence patterns from a chat among friends. In speech, people choose particles, names, family terms, and titles according to the relationship. A sentence can be grammatical but awkward for the person you're talking to.",
      "royal-society",
      "iwasaki-register",
      "wiki-thai"
    )
  },
  variants: {
    overview: cited(
      "This guide teaches Standard Thai, the nationwide school and media form based on Central Thai. People also use 'Thai' more broadly for language in Thailand, but Isan, Northern Thai, and Southern Thai have their own varieties and histories. A speaker may switch to Standard Thai with someone from another region and use a local language at home.",
      "wiki-thai",
      "wiki-isan",
      "wiki-northern-thai"
    ),
    items: [
      {
        name: "Standard and Central Thai",
        note: cited("Schools and national media teach a standard based on Central Thai, especially educated Bangkok speech. People in Bangkok and Central Thailand also use local and casual forms, so the standard doesn't describe every conversation there.", "wiki-thai", "thai-grammar")
      },
      {
        name: "Isan / Thai Lao",
        note: cited("Isan names Lao-related varieties across northeastern Thailand. Many speakers also know Standard Thai and switch between them according to the setting. Isan has its own structure and community history.", "wiki-isan", "enfield-thai-isan-lao")
      },
      {
        name: "Northern Thai / Kam Mueang",
        note: cited("People use Northern Thai across the historical Lanna region, with local differences in sounds and words. Music, broadcasting, and daily conversation keep it visible alongside Standard Thai. Some communities also teach its older Tai Tham script.", "wiki-northern-thai", "unicode-thai")
      },
      {
        name: "Southern Thai",
        note: cited("Southern Thai covers related varieties down the peninsula. Their sounds and words vary by place and reflect contact with Standard Thai and Malay. A Central Thai speaker may need time to follow an unfamiliar variety.", "wiki-thai")
      },
      {
        name: "Formal, royal, monastic, and intimate registers",
        note: cited("A speaker doesn't choose from only 'formal' and 'informal'. Royal vocabulary, monastic address, office writing, a service encounter, and a family chat each call for different words. People combine titles, pronouns, particles, and tone of voice to fit the moment.", "iwasaki-register", "royal-society")
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Standard Thai uses five tones: mid, low, falling, high, and rising. Changing the pitch pattern can change a word's meaning. Vowel length matters too, and ป /p/ differs from พ /pʰ/ by the puff of air after the consonant.\n\nFinal /p/, /t/, and /k/ stop without the strong release English often gives them. Several written final letters share each of these sounds. Listen to a whole recorded syllable before trying to learn its tone from spelling alone.",
      "thai-dictionary",
      "wiki-thai"
    ),
    script: "Thai script; pronunciation examples mark tones as M (mid), L (low), F (falling), H (high), or R (rising). Other romanization is approximate; use audio for exact pronunciation.",
    soundSystem: cited(
      "A Thai consonant letter belongs to a middle, high, or low class. Its class combines with any tone mark and the syllable's ending to tell you the tone; the class name isn't the pitch you'll always hear.\n\nA syllable ending in a long vowel or /m/, /n/, /ŋ/, /j/, or /w/ is called 'live'. One ending in /p/, /t/, or /k/ is 'dead'; most short open vowels count as dead too, with a few vowel-pattern exceptions.\n\nThe four written tone marks don't simply name the five spoken tones, and many words have no mark. Compare ปา paa M 'throw', ป่า paa L 'forest', ป้า paa F 'aunt', ป๊า paa H 'dad', and ป๋า paa R 'dad' in familiar speech. Listen to each word as you learn the spelling pattern.",
      "thai-dictionary",
      "unicode-thai"
    ),
    prosody: cited(
      "Thai speakers don't give every syllable the same weight. Unstressed words may shorten, while emphasis and emotion alter pitch without erasing the word's tone. Copy a short spoken phrase, record yourself, and compare its timing with the original.\n\nSongs can help you recognize words and styles, but a melody changes their pitch. Use ordinary speech to learn the five tone categories first.",
      "thai-dictionary",
      "chula-spoken"
    ),
    learnerTraps: [
      "Treating every unmarked syllable as mid tone instead of applying consonant-class and live/dead rules",
      "Hearing aspiration as emphasis and merging ป /p/ with พ /pʰ/, or ต /t/ with ท /tʰ/",
      "Ignoring vowel length, especially before final consonants",
      "Releasing final /p t k/ as in English or pronouncing written final letters by their initial values",
      "Using English question intonation so strongly that lexical tone becomes unrecognizable",
      "Trusting road-sign romanization, which normally omits tone and vowel length"
    ],
    sampleWords: [
      { original: "ไหม", transliteration: "mai R", translation: "question particle; silk", note: "Compare ใหม่ mai L “new,” ไม่ mai F “not,” and ไหม้ mai F “burn.” Spelling and context distinguish forms that romanization often collapses." },
      { original: "ข้าว", transliteration: "khaao F", translation: "rice; meal", note: "Keep the vowel long and compare ข่าว khaao L “news” and ขาว khaao R “white.”" },
      { original: "ปา", transliteration: "paa M", translation: "to throw", note: "The initial is unaspirated. Compare พา phaa M “to take or lead someone.”" },
      { original: "เข้า", transliteration: "khao F", translation: "to enter", note: "Compare its falling tone with เขา khao R 'they; hill' and เข่า khao L 'knee'." },
      { original: "รัก", transliteration: "rak H", translation: "to love", note: "A short vowel plus unreleased final /k/ makes a dead syllable; the low-class initial yields high tone." },
      { original: "มือ", transliteration: "muee M", translation: "hand", note: "Practice the unrounded central vowel /ɯː/, which has no exact everyday English equivalent." },
      { original: "ไก่", transliteration: "kai L", translation: "chicken", note: "The low tone comes from a middle-class initial plus mai ek tone mark, not from the mark alone." }
    ]
  },
  writing: {
    overview: cited(
      "Thai runs from left to right. Its consonant letters may carry an unwritten vowel, while written vowel signs can sit before, after, above, or below a consonant. Linguists call this kind of writing system an abugida.\n\nThe traditional alphabet lists 44 consonant letters, including some now rare or obsolete ones. Thai also has its own digits, though you'll often see international digits. Spelling preserves distinctions that a road sign's Latin letters usually miss, especially the clues needed to work out a tone.",
      "unicode-thai",
      "wiki-thai-script",
      "thai-dictionary"
    ),
    primaryScript: "Thai script (อักษรไทย)",
    romanization: cited(
      "The Royal Thai General System of Transcription appears on maps and public signs. It leaves out tone and vowel length, so 'mai' can stand for several Thai words.\n\nA course transcription that includes those details helps while you learn the script. Keep people's established Latin name spellings even when they differ from the official system.",
      "royal-society",
      "wiki-thai"
    ),
    spellingNorms: cited(
      "Thai writers usually put spaces between larger stretches of text rather than between every word. You find word boundaries through vocabulary and grammar. In เก่ง keng 'skilled', the vowel sign เ stands before ก, though you pronounce the vowel after it.\n\nSpelling also preserves some historical differences that speech no longer keeps. The mark ์ can silence a letter, and ๆ can repeat a word, as in เร็ว ๆ 'quickly'. When you type Thai, the order of combining marks matters for reliable display and search.",
      "unicode-thai",
      "wiki-thai-script",
      "royal-society"
    ),
    styleNotes: [
      cited("Learn consonant sound, class, and a mnemonic word together—ก ไก่ ko kai—then read the letter inside real syllables. Classless alphabet chanting delays the information needed for tones.", "thai-dictionary"),
      cited("Practice segmenting short authentic headlines and captions. Mark likely word boundaries, then check them with a dictionary.", "thai-dictionary"),
      cited("Type Thai early. Correct keyboard and Unicode order make searches reliable, while visually similar copied marks can produce text that renders acceptably but searches badly.", "unicode-thai"),
      cited("Keep etymological spelling and present pronunciation separate. A final written ร or ล may be pronounced /n/, and clusters in learned loans may surface differently in careful and casual speech.", "thai-dictionary", "wiki-thai")
    ]
  },
  grammar: {
    overview: cited(
      "Thai verbs don't change shape when the subject or time changes. Speakers use word order, time words, and small marker words to say what happened and how it unfolded. They can leave out a subject or object when the conversation already makes it clear.\n\nLearn a short exchange rather than translating an English sentence word by word. You'll hear where a marker goes and when a speaker simply leaves a name or pronoun unsaid.",
      "thai-grammar",
      "thai-dictionary"
    ),
    typologicalProfile: cited(
      "A basic Thai sentence often puts a subject before a verb and its object. Separate words and word order do much of the work that verb endings do in some other languages; linguists call this pattern 'analytic'.\n\nA descriptive word can make a full statement without a word for 'is': อาหารอร่อย ahaan aroi means 'the food is delicious'. Speakers also join words into compounds, repeat words for particular effects, and add small words that show whether an action is continuing or how an utterance lands socially.",
      "thai-grammar",
      "iwasaki-register"
    ),
    morphology: cited(
      "กิน kin can mean 'eat', 'eats', or 'ate' when the time is already clear. The verb itself stays the same. Speakers also build words by joining shorter ones: รถไฟ rot fai combines 'vehicle' and 'fire' to mean 'train'.\n\nRepeating a word can soften, spread, or strengthen a meaning, depending on the word. Formal vocabulary may contain older Pali, Sanskrit, or Khmer elements. As you learn common pieces such as ใจ jai 'heart; mind', you can spot more compounds in writing that has no spaces between words.",
      "thai-grammar",
      "thai-dictionary",
      "thai-grammar"
    ),
    syntax: cited(
      "For 'three books', Thai says หนังสือสามเล่ม nangsue sam lem: book, three, then a word used when counting books. A descriptive clause follows the noun too, often with ที่ thii.\n\nSpeakers can place the topic first or leave out a person everyone already knows they're discussing. Several verbs can also work together: ไปซื้อกาแฟ pai sue kafae means 'go buy coffee'. A final particle such as นะ na or ครับ khrap then adds a social cue to the sentence.",
      "thai-grammar",
      "iwasaki-register"
    ),
    advancedPainPoints: [
      "Choosing pronouns, kin terms, names, titles, or omission appropriately for a changing relationship",
      "Distinguishing completion, experience, continuation, imminence, and change of state through aspect particles",
      "Segmenting unspaced prose and recognizing formal compounds whose spoken equivalents differ",
      "Interpreting serial verbs without forcing an English conjunction or tense onto every verb",
      "Hearing reduced syllables and particles in fast conversation while preserving lexical tone contrasts"
    ],
    topics: [
      {
        title: "Classifiers make counted nouns into phrases",
        body: cited("Thai usually puts a counting word after a number. For books, that word is เล่ม lem: หนังสือสองเล่ม nangsue song lem means 'two books'. Learn each counting word with a noun, because shape alone doesn't always predict the choice.", "thai-dictionary", "thai-grammar"),
        example: "ฉันซื้อหนังสือสองเล่ม — chan sue nangsue song lem",
        exampleTranslation: "I bought two books. (literally: I buy book two classifier)"
      },
      {
        title: "Aspect describes how an event unfolds",
        body: cited("Thai doesn't add a past-tense ending to the verb. กำลัง kamlang shows an action in progress, เคย khoei points to experience, and แล้ว laeo can show completion or a new state. These words tell you how to view the action; a time phrase or the context tells you when it happened.", "thai-grammar", "thai-dictionary"),
        example: "เขากำลังกินข้าว — khao kamlang kin khao",
        exampleTranslation: "They are eating. (literally: they PROGRESSIVE eat rice/meal)"
      },
      {
        title: "Serial verbs package paths, purposes, and results",
        body: cited("Thai can place several verbs in one stretch without 'and'. In ไปเอาหนังสือ pai ao nangsue, 'go get the book', the first verb tells you the movement and the second tells you its purpose. Listen for the single event the verbs describe together.", "thai-grammar"),
        example: "เขาเดินเข้าไปในบ้าน — khao doen khao pai nai baan",
        exampleTranslation: "They walked into the house. (walk enter go in house)"
      },
      {
        title: "Pronouns are relationship choices",
        body: cited("People choose ways to say 'I' and 'you' according to the relationship. A speaker may use ผม phom, ดิฉัน dichan, a name, a family term, or no pronoun at all. คุณ khun works in many polite settings, but repeating it with a close friend may sound distant.", "iwasaki-register", "thai-grammar"),
        example: "อาจารย์กินข้าวหรือยังครับ — ajan kin khao rue yang khrap",
        exampleTranslation: "Professor/teacher, have you eaten yet? (The title addresses “you”; no pronoun is needed.)"
      },
      {
        title: "Final particles manage stance and politeness",
        body: cited("A small word at the end can change how a sentence sounds to someone else. ครับ khrap and ค่ะ kha commonly signal politeness in conventions associated with male and female speakers; คะ kha appears in many questions and requests in women's speech. นะ na can soften a request, while สิ si can press someone to act, with tone and relationship affecting each choice.", "iwasaki-register", "thai-grammar"),
        example: "รอสักครู่นะครับ — ro sak khru na khrap",
        exampleTranslation: "Please wait a moment, all right? (softening + polite particle)"
      },
      {
        title: "Negation and questions use particles, not inversion",
        body: cited("Put ไม่ mai before a verb or description to negate it. A question can end in ไหม mai without changing the basic order of the sentence. People often answer by repeating the verb, with or without ไม่, rather than using one word for every kind of 'yes'.", "thai-grammar", "thai-dictionary"),
        example: "คุณดื่มกาแฟไหม — khun duem kafae mai",
        exampleTranslation: "Do you drink coffee? Possible answers: ดื่ม duem “I do” / ไม่ดื่ม mai duem “I don't.”"
      },
      {
        title: "Relative clauses follow what they describe",
        body: cited("To describe a noun with a longer idea, Thai often puts ที่ thii and the description after that noun. The example means 'the book that you gave me', with หนังสือ nangsue 'book' first. Thai doesn't need separate forms matching English 'who', 'which', and 'that' here.", "thai-grammar"),
        example: "หนังสือที่คุณให้ฉันสนุกมาก — nangsue thii khun hai chan sanuk mak",
        exampleTranslation: "The book that you gave me is very enjoyable."
      },
      {
        title: "Topic and omission keep discourse efficient",
        body: cited("Thai speakers often leave out someone already clear from the conversation. They can also name a topic first and then comment on it. In the example, เรื่องนี้ rueang ni 'this matter' comes first, while the person who doesn't know is understood.", "thai-grammar"),
        example: "เรื่องนี้ ไม่รู้เหมือนกัน — rueang ni, mai ru muean kan",
        exampleTranslation: "As for this matter, I don't know either. (The person who does not know is understood.)"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Standard Thai connects people across Thailand, but it isn't the only language they use. Many people in the northeast speak Lao-related Isan varieties, while Northern Thai, Southern Thai, Malay, and other languages have strong regional communities.\n\nBangkok brings together speakers from across the country. Thai also travels through families, temples, businesses, and media abroad.",
      "wiki-thai",
      "wiki-isan",
      "wiki-northern-thai"
    ),
    regions: [
      { place: "Central Thailand and Bangkok", note: cited("Standard Thai draws especially on educated Bangkok speech. People in the city speak with different local, generational, and family backgrounds.", "wiki-thai", "thai-grammar") },
      { place: "Northeastern Thailand (Isan)", note: cited("Schools and public institutions use Standard Thai. Lao-related Isan varieties also carry family life, music, local performance, and everyday conversation. Many speakers move between them.", "wiki-isan", "enfield-thai-isan-lao") },
      { place: "Northern Thailand", note: cited("Standard Thai lives alongside Northern Thai and other languages. In Chiang Mai, you may hear the national standard, regional Thai speech, and Kam Mueang in different places.", "wiki-northern-thai") },
      { place: "Southern Thailand", note: cited("Standard Thai connects national institutions while Southern Thai varieties and, especially in the far south, Malay varieties carry strong local community roles.", "wiki-thai") },
      { place: "Global communities", note: cited("Families, temples, schools, businesses, friendships, and media keep Thai in use outside Thailand. A heritage speaker may know family conversation better than formal Bangkok writing.", "wiki-thai") }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "If English is your starting point, Thai asks you to coordinate unfamiliar sounds with a new script. Tones, vowel length, consonant classes, and text without spaces between words take sustained practice.\n\nThe social choices take practice too: a correct sentence can sound stiff or too familiar if you choose the wrong pronoun or particle. The difficulty label describes this distance from English. A speaker of Lao or another Tai language starts with different advantages.",
      "thai-grammar",
      "thai-dictionary",
      "iwasaki-register"
    ),
    easierAspects: [
      "Verbs do not conjugate for person and nouns lack grammatical gender",
      "Basic subject–verb–object order often feels familiar to English speakers",
      "Compounds are vivid and productive once common pieces such as ใจ jai become recognizable",
      "A large ecosystem of teachers, dramas, music, podcasts, dictionaries, and subtitled video supports practice",
      "The script usually lets a trained reader derive pronunciation, including tone, far better than public romanization does"
    ],
    hardAspects: [
      "Coordinating lexical tone, vowel length, aspiration, and final consonants in spontaneous speech",
      "Deriving tone from consonant class, marks, live/dead syllables, and length",
      "Segmenting running text without spaces between every word",
      "Selecting pronouns, particles, and vocabulary appropriate to relationship and setting",
      "Understanding rapid speech with omitted arguments, reduced syllables, and serial verbs"
    ],
    plateauRisks: [
      "Remaining dependent on tone-free romanization and recognizing words only in one spelling system",
      "Learning polite tourist formulas but never studying ordinary peer conversation",
      "Reading aloud accurately while avoiding unscripted listening and speaking",
      "Using one pronoun pair and ครับ/ค่ะ as substitutes for the wider register system",
      "Assuming Standard Thai automatically provides comprehension of Isan, Northern Thai, or Southern Thai"
    ],
    workload: cited(
      "Practice a few sound-and-spelling contrasts each week, then use them in a short exchange with a teacher or conversation partner. Keep audio with your sentence cards and ask for corrections on two recurring sound problems at a time.\n\nAs you progress, choose a domain: follow one series, read restaurant reviews, or explain your work. Keep listening for pronouns and particles alongside vocabulary. Comfortable reading and flexible regional listening take repeated contact over time.",
      "thai-dictionary",
      "iwasaki-register"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Save a new word with Thai spelling, audio, a tone-aware reading aid, and a sentence that shows who says it. Keep particles in full exchanges, since a one-word English gloss hides their social work.\n\nFor a formal compound, find an example in a corpus and ask how a friend would express the same thought. Once you're comfortable with Standard Thai, listen to a named regional speaker or program rather than treating every unfamiliar form as an accent.",
      "iwasaki-register",
      "thai-national-corpus"
    ),
    mediaPractice: cited(
      "Watch a scene once for the story, then transcribe a short stretch and mark its final particles and omitted subjects. Subtitles may condense what the actors say. Try an interview, stream, cooking show, or news clip too, so you hear more than one register.\n\nMusic brings you regional voices and styles, including luk thung and molam. Use dialogue to establish tones, since melody changes pitch. In chats, 555 reads as laughter because ห้า haa means 'five'.",
      "dd-laughter",
      "iwasaki-register",
      "wiki-thai"
    ),
    dictionariesAndCorpora: cited(
      "Use the Royal Society dictionary to check standard spelling. SEAlang's Mary Haas project gives Thai–English entries, while thai-language.com adds audio, classifiers, and tone-aware spelling help. The Thai National Corpus lets you search words in context, check nearby words, and compare genres.\n\nThe Chulalongkorn Corpus of Spoken Thai is a downloadable research dataset with spontaneous and read speech. It takes more work to use than a learner dictionary, but it can help advanced readers study pronunciation. A corpus hit alone cannot tell you whether a phrase suits your relationship with someone.",
      "royal-society",
      "sealang-haas",
      "thai-dictionary",
      "thai-national-corpus",
      "chula-spoken"
    ),
    resources: [
      { type: "dictionary", title: "Mary Haas Thai Dictionary Project", url: "http://sealang.net/thai/tdp.htm", level: "all", description: cited("SEAlang's searchable project incorporates Haas's Thai-English Student's Dictionary and material from the larger dictionary project, with scholarly provenance.", "sealang-haas") },
      { type: "dictionary", title: "Royal Society of Thailand Dictionary", url: "https://dictionary.orst.go.th/", level: "intermediate", description: cited("The authoritative prescriptive Thai dictionary for standard spelling, meanings, and formal usage; best used alongside examples from speech and corpora.", "royal-society") },
      { type: "dictionary", title: "thai-language.com", url: "http://www.thai-language.com/", level: "all", description: cited("A detailed learner reference with recordings, tone-aware transcription, classifier data, and explanations of consonant classes and tone rules.", "thai-dictionary") },
      { type: "corpus", title: "Thai National Corpus (v.4)", url: "https://app.stichula.org/py/tnc4/", level: "intermediate", description: cited("Search Thai words in context, check collocations and frequency, and filter results by genre or domain. The institute describes all three search modes.", "thai-national-corpus") },
      { type: "corpus", title: "Chulalongkorn Corpus of Spoken Thai", url: "https://zenodo.org/records/17366698", level: "advanced", description: cited("Download recordings and phonetic annotations of Standard Thai speech; this research dataset requires more work than a searchable learner corpus.", "chula-spoken") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "ใจ jai means 'heart' or 'mind' and turns up in compounds about feelings and understanding. สนุก sanuk says something is enjoyable; เกรงใจ kreng jai can describe someone's concern about imposing. Their meanings become clearer in real interactions than in a list of supposed 'untranslatable' national traits.\n\nSmall words carry social meaning too. นะ na can soften a request, while ก็ ko can connect a thought to what came before. Keep the exchange around a word when you save it.",
      "thai-dictionary",
      "iwasaki-register",
      "thai-grammar"
    ),
    notableWords: [
      { term: "ใจ", transliteration: "jai M", meaning: "heart; mind; disposition", note: cited("A common piece of compounds: เข้าใจ khao jai 'understand', ใจดี jai dii 'kind-hearted', and ตกใจ tok jai 'be startled'. One English word won't cover every use.", "thai-dictionary") },
      { term: "เกรงใจ", transliteration: "kreng-jai M", meaning: "to hesitate out of consideration; not want to impose", note: cited("Often explained as uniquely Thai, but its value lies in specific interactions: declining an offer, worrying about burdening a host, or softening a request. Tone and situation can also make it critical rather than admiring.", "thai-dictionary", "iwasaki-register") },
      { term: "สนุก", transliteration: "sa L nuk L", meaning: "fun; enjoyable", note: cited("Speakers can call an event, story, or film สนุก. หนังสนุก means 'the film is fun'. The word describes an experience, not an entire national personality.", "thai-dictionary") },
      { term: "สบาย", transliteration: "sa L baai M", meaning: "comfortable; well; at ease", note: cited("Appears in สบายดี sabaai dii 'well; fine' and สบาย ๆ sabaai sabaai 'easygoing; comfortably'. Repetition softens the quality rather than simply making it plural.", "thai-dictionary") },
      { term: "ไม่เป็นไร", transliteration: "mai F pen M rai M", meaning: "it's all right; never mind; no problem", note: cited("Speakers use this after thanks, an apology, or a small mishap. It can reassure or close a topic depending on the voice and situation.", "thai-dictionary") },
      { term: "แซ่บ", transliteration: "saep F", meaning: "deliciously spicy/tasty; exciting", note: cited("This Isan-associated word appears in food talk and popular Thai. The spelling แซ่บ has a falling tone; compare Isan แซบ with its different spelling and high tone.", "wiki-isan", "thai-dictionary") },
      { term: "555", transliteration: "ha ha ha", meaning: "hahaha in digital writing", note: cited("The Thai word for five is ห้า haa, so repeated Arabic numerals read as laughter. Thai digits exist, but ordinary online laughter normally uses international 5s.", "dd-laughter") },
      { term: "พี่ / น้อง", transliteration: "phii F / nong H", meaning: "older / younger sibling; relational forms of address", note: cited("These kin terms extend beyond biological siblings to colleagues, acquaintances, and service encounters. Age, role, warmth, and local practice decide whether they sound affiliative, patronizing, or simply ordinary.", "iwasaki-register", "thai-dictionary") }
    ],
    loanwordLayers: cited(
      "Pali and Sanskrit words fill much religious, legal, academic, and royal writing. Their historical spellings can look unlike the way people now pronounce final sounds. Khmer also shaped court vocabulary; Chinese varieties contributed food and trade terms, and Malay contact matters in the south.\n\nEnglish loans now appear in technology and entertainment. Speakers may choose a formal Thai coinage in one setting and an adapted loan in another. Word history helps you recognize these different registers; it doesn't rank one layer as more authentically Thai.",
      "wiki-thai",
      "royal-society",
      "thai-dictionary"
    ),
    idioms: [
      { original: "ขี่ช้างจับตั๊กแตน", transliteration: "khii chang jap takkaten", translation: "Ride an elephant to catch a grasshopper.", note: "Use disproportionate effort or resources for a tiny task—the image matters more than a word-for-word English equivalent." },
      { original: "น้ำขึ้นให้รีบตัก", transliteration: "nam khuen hai rip tak", translation: "When the water rises, hurry to scoop it.", note: "Take an opportunity while conditions are favorable, comparable to “make hay while the sun shines.”" },
      { original: "หนีเสือปะจระเข้", transliteration: "nii suea pa jorakhe", translation: "Flee a tiger only to meet a crocodile.", note: "Escape one danger and encounter another; the compact animal scene makes it popular in headlines and conversation." },
      { original: "ไก่เห็นตีนงู งูเห็นนมไก่", transliteration: "kai hen tin ngu, ngu hen nom kai", translation: "The chicken sees the snake's feet; the snake sees the chicken's breasts.", note: "Two people know each other's hidden faults or secrets. The impossible anatomy makes the mutual exposure comic." },
      { original: "เข้าเมืองตาหลิ่ว ต้องหลิ่วตาตาม", transliteration: "khao mueang ta liu, tong liu ta tam", translation: "Enter the town of squinters and you must squint along.", note: "Adapt to local custom, similar to “when in Rome”; it can be practical advice or a wry comment on conformity." }
    ],
    textGenres: [
      "Classical verse and court literature, including many Thai transformations of the Ramakien",
      "Buddhist sermons, jataka narratives, temple publications, and modern religious discussion",
      "Modern novels, short stories, comics, web fiction, essays, and translated literature",
      "Television drama, film, advertising, stand-up, game streams, podcasts, and social video",
      "Luk thung, molam, phleng phuea chiwit, pop, indie, rock, and rap across regional voices",
      "News, royal and bureaucratic language, academic prose, and the Royal Gazette",
      "Everyday chats that use clipped spellings, repeated letters, stickers, emoji, and 555"
    ]
  },
  relationships: {
    overview: cited(
      "Thai shares a branch of the Tai family with Lao and several other languages. Isan names Lao-related varieties in Thailand, while Northern Thai and Southern Thai have their own regional histories. Shared words and grammar can help speakers understand one another, but exposure and local varieties affect how much they understand.\n\nKhmer influenced Thai through contact. Pali and Sanskrit contributed many learned words. Neither relationship makes those languages ancestors of Thai.",
      "glottolog-thai",
      "wiki-thai-lao",
      "enfield-thai-isan-lao"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Thai speakers draw on titles, family terms, particles, humor, and different registers as relationships change. คุณ khun may sound distant at home, while constant ครับ khrap may sound stiff among close friends. Listen to how people address one another before copying a line from a drama.\n\nRegional speech can carry pride and stigma. Treat Isan or Northern Thai as living community language, not a comic accent. Temple stories, horror, political rap, luk thung, and molam show different voices within Thai public life.",
  resources: [
    { type: "other", title: "Discover Discomfort: How People Laugh Online", url: "https://discoverdiscomfort.com/how-people-laugh-online-different-languages/", level: "beginner", description: cited("A memorable entry into Thai digital writing: 555 reads as ha-ha-ha because ห้า means five. The article clearly labels the author's limited Thai expertise, so use it for this narrow observation.", "dd-laughter") },
    { type: "dictionary", title: "Royal Society Dictionary", url: "https://dictionary.orst.go.th/", level: "intermediate", description: cited("The prescriptive reference for standard Thai spelling and definitions, valuable once monolingual lookup becomes manageable.", "royal-society") },
    { type: "dictionary", title: "Mary Haas Thai Dictionary Project", url: "http://sealang.net/thai/tdp.htm", level: "all", description: cited("A scholarly Thai–English dictionary based on Mary Haas's work, hosted by the SEAlang Library.", "sealang-haas") },
    { type: "dictionary", title: "thai-language.com", url: "http://www.thai-language.com/", level: "all", description: cited("Audio, tone-aware transcription, classifiers, examples, and detailed explanations of Thai spelling.", "thai-dictionary") },
    { type: "corpus", title: "Thai National Corpus (v.4)", url: "https://app.stichula.org/py/tnc4/", level: "intermediate", description: cited("Search words with context, nearby words, and frequency across different genres. The Sirindhorn Thai Language Institute runs this tool.", "thai-national-corpus") },
    { type: "corpus", title: "Chulalongkorn Corpus of Spoken Thai", url: "https://zenodo.org/records/17366698", level: "advanced", description: cited("Download audio and annotations for research on Standard Thai pronunciation; this isn't a point-and-click dictionary.", "chula-spoken") }
  ],
  relatedLanguages,
  phrases: [
    { original: "สวัสดีครับ / สวัสดีค่ะ", transliteration: "sawatdii khrap / sawatdii kha", translation: "Hello. (common polite forms)", usageNote: "ครับ is conventionally used by male speakers and ค่ะ by female speakers. Familiar greetings also use names, kin terms, or situational questions." },
    { original: "ขอบคุณครับ / ขอบคุณค่ะ", transliteration: "khop khun khrap / khop khun kha", translation: "Thank you.", usageNote: "A reliable polite formula; substantial help can call for warmer thanks." },
    { original: "ขอโทษนะครับ / ขอโทษนะคะ", transliteration: "kho thot na khrap / kho thot na kha", translation: "Excuse me; I'm sorry.", usageNote: "นะ softens; women's question/request particle here is คะ, while the polite statement form is generally ค่ะ." },
    { original: "ไม่เป็นไร", transliteration: "mai pen rai", translation: "It's all right; never mind; no problem.", usageNote: "Say this after thanks, an apology, or a minor mishap. Intonation decides whether it warmly reassures or closes discussion." },
    { original: "คุณชื่ออะไร", transliteration: "khun chue arai", translation: "What's your name?", literalMeaning: "You name what?", usageNote: "คุณ is a serviceable polite “you” with an unfamiliar adult, but names and titles often replace pronouns once a relationship is known." },
    { original: "พูดช้า ๆ ได้ไหมครับ / คะ", transliteration: "phut cha cha dai mai khrap / kha", translation: "Could you speak slowly?", literalMeaning: "Speak slowly can question?", usageNote: "ๆ repeats ช้า “slow”; listen for the rising-tone question particle ไหม." },
    { original: "ช่วยพูดอีกครั้งได้ไหม", transliteration: "chuai phut ik khrang dai mai", translation: "Could you say that again?", literalMeaning: "Help speak one more time, can?", usageNote: "Add an appropriate polite particle for the setting and speaker." },
    { original: "ไม่เข้าใจ", transliteration: "mai khao jai", translation: "I don't understand.", literalMeaning: "Not enter heart/mind.", usageNote: "The subject is naturally omitted when obvious. เข้าใจ is a compound built around ใจ “heart/mind.”" },
    { original: "คำนี้แปลว่าอะไร", transliteration: "kham ni plae wa arai", translation: "What does this word mean?", literalMeaning: "This word translates/says that what?", usageNote: "Point to or quote the word before asking in class." },
    { original: "อันนี้เท่าไหร่", transliteration: "an ni thao rai", translation: "How much is this?", literalMeaning: "This item how much?", usageNote: "อัน is a general classifier-like noun for an item. Add ครับ/คะ for a polite market or shop exchange." },
    { original: "เอาอันนี้ครับ / ค่ะ", transliteration: "ao an ni khrap / kha", translation: "I'll take this one.", literalMeaning: "Take/want this item.", usageNote: "เอา is direct but ordinary in a transaction when delivered with suitable tone and politeness." },
    { original: "ห้องน้ำอยู่ที่ไหน", transliteration: "hong nam yu thii nai", translation: "Where is the bathroom?", literalMeaning: "Bathroom is-located at where?", usageNote: "อยู่ locates something; add a polite particle when asking a stranger." },
    { original: "กินข้าวหรือยัง", transliteration: "kin khao rue yang", translation: "Have you eaten yet?", literalMeaning: "Eat rice/meal or not yet?", usageNote: "Can be a genuine question, an invitation, or warm small talk. It is not a word-for-word equivalent of “How are you?” in every context." },
    { original: "แล้วเจอกัน", transliteration: "laeo joe kan", translation: "See you later.", literalMeaning: "Then meet each other.", usageNote: "Natural among people expecting to meet again; ลาก่อน la kon is a more final or formal goodbye." }
  ],
  sources: [
    { id: "dd-laughter", title: "How People Laugh Online in Different Languages", url: "https://discoverdiscomfort.com/how-people-laugh-online-different-languages/", publisher: "Discover Discomfort", publishedAt: "2019-09-25", accessedAt: "2026-07-10" },
    { id: "wiki-thai", title: "Thai language", url: "https://en.wikipedia.org/wiki/Thai_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-thai-script", title: "Thai script", url: "https://en.wikipedia.org/wiki/Thai_script", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-isan", title: "Isan language", url: "https://en.wikipedia.org/wiki/Isan_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-northern-thai", title: "Northern Thai language", url: "https://en.wikipedia.org/wiki/Northern_Thai_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-thai-lao", title: "Comparison of Lao and Thai", url: "https://en.wikipedia.org/wiki/Comparison_of_Lao_and_Thai", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-thai", title: "Glottolog 5.3: Thai", url: "https://glottolog.org/resource/languoid/id/thai1261", publisher: "Glottolog", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "unicode-thai", title: "The Unicode Standard, Chapter 16: Southeast Asia — Thai", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-16/", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-07-10" },
    { id: "royal-society", title: "Royal Society of Thailand Dictionary", url: "https://dictionary.orst.go.th/", publisher: "Royal Society of Thailand", accessedAt: "2026-07-10" },
    { id: "sealang-haas", title: "Mary Haas Thai Dictionary Project", url: "http://sealang.net/thai/tdp.htm", publisher: "SEAlang Library", accessedAt: "2026-09-27" },
    { id: "thai-dictionary", title: "thai-language.com Dictionary and Reference", url: "http://www.thai-language.com/", publisher: "thai-language.com", accessedAt: "2026-09-27" },
    { id: "thai-grammar", title: "Iwasaki and Ingkaphirom, A Reference Grammar of Thai", url: "https://books.google.com/books/about/A_Reference_Grammar_of_Thai.html?id=YE29njS4qSUC", publisher: "Cambridge University Press", publishedAt: "2005", accessedAt: "2026-09-27" },
    { id: "iwasaki-register", title: "Creating Speech Register in Thai Conversation", url: "https://www.cambridge.org/core/journals/language-in-society/article/creating-speech-register-in-thai-conversation/92F4296DA273C3FEEFF0D464BAAE0286", publisher: "Cambridge University Press", publishedAt: "2000", accessedAt: "2026-07-10" },
    { id: "enfield-thai-isan-lao", title: "Thai-Isan-Lao: Linguistic and Cultural Relations", url: "https://pure.mpg.de/rest/items/item_58680_2/component/file_58681/content", publisher: "Tai Culture / Max Planck Institute archive", publishedAt: "2002", accessedAt: "2026-07-10" },
    { id: "chula-spoken", title: "Chulalongkorn Corpus of Spoken Thai", url: "https://zenodo.org/records/17366698", publisher: "Chulalongkorn University / Zenodo", publishedAt: "2025-10-16", accessedAt: "2026-09-27" },
    { id: "thai-national-corpus", title: "Thai National Corpus (v.4)", url: "https://stichula.org/thai-national-corpus-v-4/", publisher: "Sirindhorn Thai Language Institute, Chulalongkorn University", publishedAt: "2026-02-25", accessedAt: "2026-09-27" }
  ],
  seo: {
    title: "Thai Language Guide: Tones, Script, Grammar and Real Usage",
    description: "A deeply researched guide to Thai tones, writing, grammar, classifiers, particles, registers, regional languages, culture, phrases, and modern learning resources."
  }
} satisfies LanguageGuide;
