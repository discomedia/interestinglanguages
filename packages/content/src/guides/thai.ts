import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Lao",
    relationship: "Close Southwestern Tai relative",
    explanation: cited(
      "Thai and Lao share much basic grammar and vocabulary, and speakers can often accommodate one another, especially with prior media exposure. They are nevertheless standardized as different languages with different scripts, sound histories, institutions, and national settings. Mutual understanding is uneven rather than automatic.",
      "wiki-thai-lao",
      "enfield-thai-isan-lao"
    )
  },
  {
    name: "Isan",
    relationship: "Lao varieties indigenous to northeastern Thailand",
    explanation: cited(
      "Isan is not simply Bangkok Thai with a northeastern accent. It names a diverse Lao-related speech field in Thailand whose local varieties cross the Mekong dialect continuum. Schooling, migration, and national media have produced extensive bilingualism and influence from Standard Thai; those social facts should not be mistaken for proof that Isan has no grammar or identity of its own.",
      "wiki-isan",
      "enfield-thai-isan-lao"
    )
  },
  {
    name: "Northern Thai",
    relationship: "Southwestern Tai relative with a Lanna literary tradition",
    explanation: cited(
      "Northern Thai, often called Kam Mueang, is genealogically close to Central Thai but has its own regional varieties, vocabulary, tone patterns, and cultural history. It was historically written in Tai Tham, also known locally as Tua Mueang; today many speakers write regional speech with Thai characters, while interest in the older script continues.",
      "wiki-northern-thai",
      "unicode-thai"
    )
  },
  {
    name: "Zhuang languages",
    relationship: "More distant relatives in the Tai branch",
    explanation: cited(
      "The many Zhuang languages of southern China show why the Tai family is larger than the modern states of Thailand and Laos. Comparison reveals inherited vocabulary and structural themes, but Central Thai and any particular Zhuang variety are not mutually intelligible. Their relationship is genealogical, not evidence that all Tai-speaking communities share one identity.",
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
  summary: "Thai joins five tones to a historical script, analytic grammar, and finely calibrated social vocabulary heard across conversation, fiction, music, news, and digital life.",
  family: "Kra-Dai, Tai, Southwestern Tai",
  macroRegion: "Thailand, mainland Southeast Asia, and global Thai communities",
  primaryScript: "Thai script",
  difficultyLabel: "Very demanding",
  learnerHook: "Thai makes ordinary scenes legible: a shop sign becomes a sound puzzle, a final particle reveals stance, and television dialogue shows relationships changing.",
  hero: {
    imageAlt: "Thai handwriting and printed type showing consonants, surrounding vowels, and tone marks.",
    callToActionLabel: "Explore Thai in use"
  },
  classification: "A standardized Central Thai language in the Southwestern branch of Tai within Kra-Dai",
  speakerCommunity: "Thai is Thailand's national and principal public language, used in education, government, broadcasting, publishing, commerce, and cross-regional communication. Standard Thai is based on educated Central Thai, especially Bangkok usage, but Thailand is not linguistically uniform. Millions also use Isan/Lao, Northern Thai, Southern Thai, Malay, Khmer, Karen languages, Chinese varieties, and others. A person may speak a regional language with family and more standard Thai at school or work. Diaspora homes, temples, businesses, associations, and online media sustain Thai abroad.",
  facts: [
    { label: "Family", value: "Kra-Dai · Tai · Southwestern Tai" },
    { label: "Standard base", value: "Central Thai, especially educated Bangkok usage" },
    { label: "Sound system", value: "Five lexical tones plus contrastive vowel length" },
    { label: "Script", value: "Left-to-right Brahmi-derived abugida with 44 consonant symbols" },
    { label: "Word spacing", value: "Spaces usually separate larger phrases, not every word" },
    { label: "Major contact layers", value: "Pali, Sanskrit, Khmer, Chinese varieties, Malay, and English" }
  ],
  learnerOverview: "Thai pairs grammatical economy with perceptual complexity. Verbs do not conjugate for person, nouns lack grammatical gender, and number often comes from context. Yet tone, vowel length, omitted subjects, serial verbs, pronouns, and particles make short sentences rich. Begin with sound and script together. Learn ก as a middle-class consonant in words, and notice who uses ครับ khrap or ค่ะ kha and why. Combine a tone-aware course, daily typing, tutor feedback, and replayable dialogues. Discover Discomfort's method—master everyday exchanges, record yourself, and use audio-supported materials—fits Thai well. Tone-free romanization cannot reconstruct speech; alphabet study without conversation becomes code-breaking.",
  origins: {
    overview: cited(
      "Thai belongs to Southwestern Tai within Kra-Dai. Tai-speaking communities spread through a mainland Southeast Asian world already shaped by Austroasiatic languages, trade, Indic religion, and shifting polities. Inherited Tai grammar sits beside vocabulary and literary conventions associated with Khmer, Pali, and Sanskrit; later commerce added Chinese, Malay, Portuguese, and other layers. Varieties ancestral to Central Thai developed around riverine centers including Sukhothai and Ayutthaya. Ayutthaya's destruction in 1767 and the rise of Thonburi and Bangkok changed political centers, but did not reset the language.",
      "glottolog-thai",
      "wiki-thai",
      "unicode-thai"
    ),
    timeline: [
      {
        period: "Before the 13th century",
        event: cited(
          "Tai varieties differentiated through migration and contact across what is now southern China and mainland Southeast Asia. Their speakers entered multilingual zones where Mon, Khmer, and other languages already had long histories; family descent and contact influence must therefore be considered together.",
          "glottolog-thai",
          "wiki-thai"
        )
      },
      {
        period: "13th–14th centuries",
        event: cited(
          "Early inscriptions associated with Sukhothai are central to histories of written Thai. The traditional account credits King Ramkhamhaeng with devising a script in 1283, but the inscription's precise authorship and status have been debated. What is secure is that Thai writing developed from the Brahmi-derived script culture of the region rather than appearing without predecessors.",
          "wiki-thai-script",
          "unicode-thai"
        )
      },
      {
        period: "Ayutthaya era, 1351–1767",
        event: cited(
          "Ayutthaya became a multilingual court and trading center. Khmer court vocabulary, Indic learning, Chinese commerce, Persian and Malay connections, and European contact all contributed while literary and administrative practices grew.",
          "wiki-thai",
          "wiki-thai"
        )
      },
      {
        period: "Bangkok era, late 18th–19th centuries",
        event: cited(
          "Court literature, Buddhist textual work, printing, and education consolidated Bangkok's influence. The Ramakien was revised and performed in Thai forms, while administration brought regional populations into stronger contact with Central Thai.",
          "wiki-thai"
        )
      },
      {
        period: "20th century to the digital present",
        event: cited(
          "Mass schooling, broadcasting, migration, language policy, and Bangkok-centered publishing expanded Standard Thai. Regional languages continue in households, music, performance, local media, and online writing. Digital text adds clipped particles, emoji, and devices such as 555 for laughter.",
          "wiki-thai",
          "dd-laughter",
          "chula-spoken"
        )
      }
    ],
    contactHistory: cited(
      "Everyday core words are largely inherited Tai, while Pali and Sanskrit supply religious, royal, academic, legal, and abstract vocabulary, often through Khmer traditions. Chinese varieties contributed food and trade terms; Malay matters particularly in the south. Portuguese marks early modern trade, and English now supplies technology, sport, business, and popular culture. Loans take Thai syllables and tones: “computer” becomes คอมพิวเตอร์ khomphiotoe. Formal coinages and casual English mixing coexist, so register matters.",
      "wiki-thai",
      "thai-dictionary",
      "chula-spoken"
    ),
    standardization: cited(
      "Standard Thai dominates national institutions, but its norms come from several authorities. The Royal Society publishes the prescriptive dictionary, terminology, spelling guidance, and official transcription. Publishers, schools, broadcasters, and speakers also shape convention. Formal writing favors different pronouns, connectors, compounds, and patterns from casual Bangkok speech. Speakers create registers through particles, titles, kin terms, names, and pronouns. Ask not only “Is this grammatical?” but “Who would say this, to whom, in what medium?”",
      "royal-society",
      "iwasaki-register",
      "wiki-thai"
    )
  },
  variants: {
    overview: cited(
      "Thai can mean Standard/Central Thai narrowly or the national linguistic field broadly. Bangkok and other Central speech differ, while Northern Thai, Southern Thai, and Isan each contain substantial variation and can reasonably be treated as languages. Such labels reflect institutions and identity as well as linguistic distance. Regional speakers may shift toward Standard Thai with outsiders without abandoning local language. Learners should name the model instead of ranking forms as pure or corrupted.",
      "wiki-thai",
      "wiki-isan",
      "wiki-northern-thai"
    ),
    items: [
      {
        name: "Standard and Central Thai",
        note: cited("The nationwide educational and media standard is based on Central Thai and associated especially with educated Bangkok speech. Central Thailand itself contains local varieties, so “standard” is a social target rather than a transcript of everything heard in the capital.", "wiki-thai", "chula-spoken")
      },
      {
        name: "Isan / Thai Lao",
        note: cited("Northeastern Thailand contains a continuum of Lao varieties usually called Isan in Thai national contexts. Most speakers also know Standard Thai, and code-switching is common. Treating this bilingualism as evidence that Isan is merely slang erases both linguistic structure and a politically sensitive history.", "wiki-isan", "enfield-thai-isan-lao")
      },
      {
        name: "Northern Thai / Kam Mueang",
        note: cited("Used across the historical Lanna region, Northern Thai has several tone systems and regional varieties. Standard Thai exerts strong influence, while music, local broadcasting, conversation, and renewed interest in Tai Tham writing maintain distinctive practices.", "wiki-northern-thai", "unicode-thai")
      },
      {
        name: "Southern Thai",
        note: cited("Southern Thai covers related varieties down the peninsula rather than one accent. Speech varies geographically and reflects contact with Standard Thai and Malay; rapid Southern varieties can be difficult for unaccustomed Central Thai listeners.", "wiki-thai")
      },
      {
        name: "Formal, royal, monastic, and intimate registers",
        note: cited("Thai social variation is not reducible to formal versus informal. Royal vocabulary, monastic address, bureaucratic prose, respectful service encounters, peer banter, and family talk recruit different pronouns, particles, titles, and lexical choices. Speakers build an appropriate register from multiple cues.", "iwasaki-register", "royal-society")
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Standard Thai has five lexical tones—mid, low, falling, high, and rising—so pitch distinguishes words. Vowel length also contrasts, aspiration separates ป /p/ and พ /pʰ/, and final stops are unreleased: final ด, จ, and several other letters join the /t/ category. Initial ร is traditionally a trill or tap but varies in casual speech. Train with recordings and imitate whole syllables: correct pitch on the wrong vowel length is still wrong.",
      "thai-dictionary",
      "wiki-thai"
    ),
    script: "Thai script; transliteration below marks long vowels with doubled letters and tone as M, L, F, H, or R",
    soundSystem: cited(
      "Thai spelling encodes tone through an interaction of initial consonant class, tone mark, syllable type, and sometimes vowel length. The 44 consonant symbols fall into middle, high, and low classes; these are historical tone classes, not pitch instructions by themselves. A “live” syllable ends in a long vowel or a sonorant such as /m n ŋ j w/. A “dead” syllable ends in a short vowel or stop /p t k/. Tone marks do not simply label the five tones: the same mark produces different outcomes with different classes, and many syllables have no tone mark. Learn the logic through small families—กา gaa M “crow,” ก่า gaa L (a marked practice form), ก้า gaa F, ก๊า gaa H, ก๋า gaa R—then meet real words in each pattern.",
      "thai-dictionary",
      "unicode-thai"
    ),
    prosody: cited(
      "Tones live inside phrases, not robotic strings of equal syllables. Unstressed words shorten, while focus and emotion overlay lexical tones without deleting them. Compounds may contain reduced vowels hidden by spelling. Identify each syllable slowly, copy one breath group, record it, and compare timing as well as pitch. Songs are rich practice but melodies reshape tones; establish categories through speech first.",
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
      { original: "เข้า", transliteration: "khao F", translation: "to enter", note: "A short diphthong and falling tone; compare เขา khao R “he/she/they; hill” and เข่า khao L “knee.”" },
      { original: "รัก", transliteration: "rak H", translation: "to love", note: "A short vowel plus unreleased final /k/ makes a dead syllable; the low-class initial yields high tone." },
      { original: "มือ", transliteration: "muee M", translation: "hand", note: "Practice the unrounded central vowel /ɯː/, which has no exact everyday English equivalent." },
      { original: "ไก่", transliteration: "kai L", translation: "chicken", note: "The low tone comes from a middle-class initial plus mai ek tone mark, not from the mark alone." }
    ]
  },
  writing: {
    overview: cited(
      "Thai is a left-to-right Brahmi-derived abugida. A consonant carries an inherent vowel in some environments, while vowel signs appear before, after, above, below, or around it. The 44 consonant symbols represent fewer sounds, preserving history and supplying tone classes. Four tone marks combine with class and syllable structure rather than mapping directly to spoken tones. Thai has its own digits, though international digits are common. The dense script contains more pronunciation information than casual romanization.",
      "unicode-thai",
      "wiki-thai-script",
      "thai-dictionary"
    ),
    primaryScript: "Thai script (อักษรไทย)",
    romanization: cited(
      "The Royal Thai General System is useful for maps and public signs, but omits tone and vowel length and merges contrasts: “mai” represents several words. Temporarily choose one tone-complete system—IPA, tone numbers, or a consistent course transcription—while learning Thai spelling. Respect people's established Latin name spellings even when they differ from RTGS.",
      "royal-society",
      "royal-society",
      "wiki-thai"
    ),
    spellingNorms: cited(
      "Thai prose does not space every lexical word. Spaces mark larger boundaries, so readers segment through vocabulary and grammar. Some vowels are typed before the consonant although pronounced after it, and combining marks require correct Unicode order. Spelling preserves Pali-Sanskrit distinctions lost in final pronunciation; thanthakhat ์ marks silence. ๆ shows repetition, as in เร็ว ๆ reo reo “quickly,” while ฯ marks abbreviation. Digital line breaking must discover word boundaries.",
      "unicode-thai",
      "wiki-thai-script",
      "royal-society"
    ),
    styleNotes: [
      cited("Learn consonant sound, class, and a mnemonic word together—ก ไก่ ko kai—then read the letter inside real syllables. Classless alphabet chanting delays the information needed for tones.", "thai-dictionary"),
      cited("Practice segmenting short authentic headlines and captions. Add pencil boundaries after predicting words, then check with a dictionary rather than waiting for spaced beginner text forever.", "thai-dictionary", "chula-spoken"),
      cited("Type Thai early. Correct keyboard and Unicode order make searches reliable, while visually similar copied marks can produce text that renders acceptably but searches badly.", "unicode-thai"),
      cited("Keep etymological spelling and present pronunciation separate. A final written ร or ล may be pronounced /n/, and clusters in learned loans may surface differently in careful and casual speech.", "thai-dictionary", "wiki-thai")
    ]
  },
  grammar: {
    overview: cited(
      "Thai is often called “grammar-light” because words rarely inflect, but meanings that English packs into tense or agreement endings are organized through word order, aspect markers, classifiers, serial verbs, reference, and discourse context. Subjects and objects can be omitted when recoverable. A bare verb may describe present, habitual, or contextually past time; a time phrase or aspect particle makes the intended viewpoint clear. Grammar therefore becomes easier when learned as reusable chunks rather than English sentences with endings removed.",
      "thai-grammar",
      "thai-dictionary"
    ),
    typologicalProfile: cited(
      "Standard Thai is an analytic, tonal language with basic subject–verb–object order, little inflection, productive compounding and reduplication, noun classifiers, serial verb constructions, and a rich inventory of aspect and pragmatic particles. “Analytic” means grammatical relationships are expressed mainly by separate words and order rather than changes inside a word. Adjective-like property words can function as predicates without a copula: อาหารอร่อย ahaan aroi, literally “food delicious,” means “the food is delicious.” Social relationships are indexed through pronouns, names, kin terms, titles, and final particles.",
      "thai-grammar",
      "iwasaki-register"
    ),
    morphology: cited(
      "Words generally do not change for person, number, gender, or tense: กิน kin can mean “eat,” “eats,” or contextually “ate.” New vocabulary grows through compounding—รถไฟ rot-fai, “vehicle-fire,” means “train”—and reduplication can distribute, soften, or intensify meaning depending on the word. Derivational elements from Pali, Sanskrit, Khmer, and modern coinage complicate formal vocabulary, while familiar monosyllables form vivid compounds around ใจ jai “heart/mind.” Because Thai writing does not routinely divide words with spaces, morphology and reading reinforce each other: recognizing a common compound prevents false segmentation.",
      "thai-grammar",
      "thai-dictionary",
      "chula-spoken"
    ),
    syntax: cited(
      "Thai usually places modifiers after nouns and numbers in the pattern noun + number + classifier: หนังสือสามเล่ม nangsue sam lem, “three books.” Topic-first structures are frequent, and omitted arguments require attention to the conversation rather than mechanical pronoun insertion. Relative clauses follow nouns and commonly use ที่ thii. Several verbs can form one predicate without a conjunction: ไปซื้อกาแฟ pai sue kafae, literally “go buy coffee.” The sequence expresses motion and purpose naturally, not two unrelated dictionary entries. Final particles then locate the utterance socially: นะ na may invite alignment or soften, สิ si can urge, and ครับ/ค่ะ khrap/kha contribute politeness in gendered conventional patterns.",
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
        body: cited("With numerals, Thai normally uses a classifier chosen by the noun. The everyday order is noun + number + classifier; the classifier can also host demonstratives or appear when a noun is understood. Class choice is partly semantic and partly lexical, so learn เล่ม lem together with books and knives, and คน khon with people. Do not assume every long object shares one universal counter.", "thai-dictionary", "thai-grammar"),
        example: "ฉันซื้อหนังสือสองเล่ม — chan sue nangsue song lem",
        exampleTranslation: "I bought two books. (literally: I buy book two classifier)"
      },
      {
        title: "Aspect describes how an event unfolds",
        body: cited("Thai does not require a past-tense verb ending. กำลัง kamlang presents an event in progress, แล้ว laeo can mark completion or a new state, เคย khoei marks experience, and จะ ja often presents prospective or future situations. These are not interchangeable English tense labels: context and combinations matter.", "thai-grammar", "thai-dictionary"),
        example: "เขากำลังกินข้าว — khao kamlang kin khao",
        exampleTranslation: "They are eating. (literally: they PROGRESSIVE eat rice/meal)"
      },
      {
        title: "Serial verbs package paths, purposes, and results",
        body: cited("Several verbs can occur in one clause with shared participants. Motion verbs frequently introduce a destination or purpose, and another verb may describe a result. Analyze the real event before inserting English “and” everywhere. In ไปเอาหนังสือ pai ao nangsue, “go get the book,” going enables the getting.", "thai-grammar"),
        example: "เขาเดินเข้าไปในบ้าน — khao doen khao pai nai baan",
        exampleTranslation: "They walked into the house. (walk enter go in house)"
      },
      {
        title: "Pronouns are relationship choices",
        body: cited("ผม phom is a common polite first-person form for men and ดิฉัน dichan a formal form for women, but real conversation also uses ฉัน chan, เรา rao, names, kin terms, occupational titles, and omission. คุณ khun is useful but not a universal neutral “you.” Repeating it in intimate or hierarchical situations may sound distant or odd. Copy whole interactions, not isolated pronoun charts.", "iwasaki-register", "thai-grammar"),
        example: "อาจารย์กินข้าวหรือยังครับ — ajan kin khao rue yang khrap",
        exampleTranslation: "Professor/teacher, have you eaten yet? (The title addresses “you”; no pronoun is needed.)"
      },
      {
        title: "Final particles manage stance and politeness",
        body: cited("ครับ khrap and ค่ะ kha are prominent polite particles, conventionally associated with male and female speakers respectively, but Thai has many more. คะ kha marks some questions in women's speech; นะ na seeks alignment or softens; สิ si urges; หรอก rok can contradict expectations. Their force comes from tone, combination, relationship, and position. One English gloss cannot capture them.", "iwasaki-register", "chula-spoken"),
        example: "รอสักครู่นะครับ — ro sak khru na khrap",
        exampleTranslation: "Please wait a moment, all right? (softening + polite particle)"
      },
      {
        title: "Negation and questions use particles, not inversion",
        body: cited("ไม่ mai precedes the verb or property predicate. Yes-no questions can add ไหม mai at the end without reversing subject and verb; หรือเปล่า rue plao asks whether something is or is not the case. An answer often repeats the relevant verb rather than using a single all-purpose “yes.”", "thai-grammar", "thai-dictionary"),
        example: "คุณดื่มกาแฟไหม — khun duem kafae mai",
        exampleTranslation: "Do you drink coffee? Possible answers: ดื่ม duem “I do” / ไม่ดื่ม mai duem “I don't.”"
      },
      {
        title: "Relative clauses follow what they describe",
        body: cited("The relativizer ที่ thii introduces many clauses after a noun, and the missing role is inferred inside the clause. Thai does not need a different relative pronoun for “who,” “which,” and “that” in the English pattern. This makes long noun phrases compact once readers find their boundary.", "thai-grammar", "chula-spoken"),
        example: "หนังสือที่คุณให้ฉันสนุกมาก — nangsue thii khun hai chan sanuk mak",
        exampleTranslation: "The book that you gave me is very enjoyable."
      },
      {
        title: "Topic and omission keep discourse efficient",
        body: cited("When a referent is obvious, Thai often omits it. A phrase can also be placed first as a topic and followed by a comment. Learners who insert ผม phom or คุณ khun into every sentence sound repetitive and may accidentally over-specify relationships. Follow who is currently topical and restore a noun only when contrast or clarity requires it.", "thai-grammar", "chula-spoken"),
        example: "เรื่องนี้ ไม่รู้เหมือนกัน — rueang ni, mai ru muean kan",
        exampleTranslation: "As for this matter, I don't know either. (The person who does not know is understood.)"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Thai connects national institutions and regions but is not every province's sole home language. Central Thai predominates in much of the center; Isan/Lao in the northeast; Northern Thai in the upper north; Southern Thai across much of the peninsula; and Malay in the far south. Bangkok gathers speakers from every region and migrant communities. Overseas, families, Buddhist institutions, businesses, media, and cultural groups sustain Thai.",
      "wiki-thai",
      "wiki-isan",
      "wiki-northern-thai"
    ),
    regions: [
      { place: "Central Thailand and Bangkok", note: cited("The institutional base of Standard Thai, but not an accent-free zone. Bangkok speech varies by neighborhood, generation, migration history, and formality, and the city is profoundly multilingual.", "wiki-thai", "chula-spoken") },
      { place: "Northeastern Thailand (Isan)", note: cited("Standard Thai is central to schooling and public life, while Lao-related Isan varieties remain important in home life, local performance, music, markets, and identity. Speakers frequently move between them.", "wiki-isan", "enfield-thai-isan-lao") },
      { place: "Northern Thailand", note: cited("Thai coexists with Northern Thai and other languages. Chiang Mai is not a single-variety immersion environment: visitors may hear Standard Thai, regionally colored Thai, Kam Mueang, and multilingual tourism speech.", "wiki-northern-thai") },
      { place: "Southern Thailand", note: cited("Standard Thai connects national institutions while Southern Thai varieties and, especially in the far south, Malay varieties carry strong local community roles.", "wiki-thai") },
      { place: "Global communities", note: cited("Heritage speakers and adult learners encounter Thai through mixed-age families, temples, schools, community events, online media, tourism, food businesses, and friendships. Their strongest register may differ from a Bangkok classroom norm.", "wiki-thai") }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "For an English-speaking learner, Thai's first wall is the combined sound-and-script system: tones, length, aspiration, final categories, consonant classes, and unspaced words must become automatic together. The next is social: grammatical sentences can sound abrupt, stiff, or oddly intimate without particles, omission, pronouns, and register. “Very demanding” describes distance from English, not intrinsic obscurity. Speakers of Lao or another Tai language begin from a radically different position.",
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
      "A balanced week might include four short tone-and-reading drills, two tutor conversations, three transcript-based listening sessions, and daily review of sentence cards with audio. Record a 60-second monologue weekly and ask for correction on only two recurring sound patterns at a time. By the intermediate stage, replace generic “Thai practice” with domains: follow one series, read restaurant reviews, explain your work, or learn the language of a hobby. Discover Discomfort's advice to acquire high-frequency conversational structures before rare textbook topics is particularly apt, but bread-and-butter Thai still needs socially appropriate particles and pronouns. Advanced literacy and flexible regional listening are multi-year projects; steady contact beats a heroic alphabet weekend followed by silence.",
      "dd-how-learn",
      "dd-how-learn",
      "thai-dictionary"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build linked notebooks for sound/spelling families, interactional chunks, and reading. Save each word with Thai spelling, audio, tone-complete transcription, a sentence, and register. Save particles in exchanges, not as English definitions. For formal compounds, find a corpus example and ask how a friend would express the idea. Once Standard Thai is stable, sample a regional language through a named speaker or program. A tutor can explain why a grammatical sentence is socially improbable.",
      "iwasaki-register",
      "chula-spoken",
      "dd-how-learn"
    ),
    mediaPractice: cited(
      "Watch a scene for plot, then transcribe 20–40 seconds, mark omitted subjects and final particles, and shadow one character. Subtitles may condense speech or translate meaning rather than grammar. Alternate drama with interviews, streams, cooking channels, and news so one register does not become “the language.” Music introduces luk thung, molam, indie, rock, rap, and regional voices, but dialogue is safer for establishing tone. Online, 555 means ha-ha-ha because ห้า means “five.”",
      "dd-laughter",
      "chula-spoken",
      "wiki-thai"
    ),
    dictionariesAndCorpora: cited(
      "The Royal Society dictionary is the prescriptive spelling reference. SEAlang's Mary Haas project offers learner-oriented Thai–English lookup; thai-language.com adds audio, classifiers, tone-complete transcription, and spelling references. The Thai Web Corpus supplies concordances and collocations, while the Chulalongkorn spoken corpus grounds research in conversation. Occurrence does not prove a form suits your relationship, so pair frequency with social judgment.",
      "royal-society",
      "sealang-haas",
      "thai-dictionary",
      "chula-spoken",
      "chula-spoken"
    ),
    resources: [
      { type: "other", title: "Discover Discomfort: How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", level: "all", description: cited("A practical method centered on everyday structures, recording yourself, focused vocabulary, tutors, and the language people actually use. Apply its principles with a tone-complete Thai course.", "dd-how-learn") },
      { type: "book", title: "Discover Discomfort: Learn Languages Faster with Books, Not Apps", url: "https://discoverdiscomfort.com/old-school-best-fast-language-learning-tips/", level: "beginner", description: cited("A case for audio-supported textbooks, systematic structures, and active use. Helpful when choosing a Thai foundation instead of collecting disconnected apps.", "dd-how-learn") },
      { type: "dictionary", title: "Mary Haas Thai Dictionary Project", url: "https://sealang.net/thai/tdp.htm", level: "all", description: cited("SEAlang's searchable project incorporates Haas's Thai-English Student's Dictionary and material from the larger dictionary project, with scholarly provenance.", "sealang-haas") },
      { type: "dictionary", title: "Royal Society of Thailand Dictionary", url: "https://dictionary.orst.go.th/", level: "intermediate", description: cited("The authoritative prescriptive Thai dictionary for standard spelling, meanings, and formal usage; best used alongside examples from speech and corpora.", "royal-society") },
      { type: "dictionary", title: "thai-language.com", url: "https://www.thai-language.com/", level: "all", description: cited("A detailed learner reference with recordings, tone-aware transcription, classifier data, and explanations of consonant classes and tone rules.", "thai-dictionary") },
      { type: "corpus", title: "Thai Web Corpus", url: "https://www.thaicorpus.net/", level: "intermediate", description: cited("Search words, collocations, and examples in contextualized web Thai; expect both standard and nonstandard usage.", "chula-spoken") },
      { type: "corpus", title: "Chulalongkorn Corpus of Spoken Thai", url: "https://zenodo.org/records/17366698", level: "advanced", description: cited("A modern university corpus for examining forms in spoken interaction rather than relying entirely on written examples.", "chula-spoken") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Thai words become memorable in social use. ใจ jai “heart/mind” builds compounds about temperament and feeling. สนุก sanuk evaluates enjoyable activities; it is not a slogan about national character. เกรงใจ kreng-jai names restraint from concern about imposing, not one rule governing every interaction. Particles can be equally revealing: นะ na reshapes a request, while ก็ ko links, resumes, or concedes. Record who says a word, what follows, and what response it invites rather than calling it untranslatable.",
      "thai-dictionary",
      "iwasaki-register",
      "chula-spoken"
    ),
    notableWords: [
      { term: "ใจ", transliteration: "jai M", meaning: "heart; mind; disposition", note: cited("A productive element in compounds: เข้าใจ khao-jai “understand,” ใจดี jai-dii “kind-hearted,” and ตกใจ tok-jai “be startled.” Its range resists a single mind-versus-heart division.", "thai-dictionary", "chula-spoken") },
      { term: "เกรงใจ", transliteration: "kreng-jai M", meaning: "to hesitate out of consideration; not want to impose", note: cited("Often explained as uniquely Thai, but its value lies in specific interactions: declining an offer, worrying about burdening a host, or softening a request. Tone and situation can also make it critical rather than admiring.", "thai-dictionary", "iwasaki-register") },
      { term: "สนุก", transliteration: "sanuk L", meaning: "fun; enjoyable", note: cited("A common evaluation of events, work, stories, and company. It is useful precisely because it appears in ordinary predication—หนังสนุก “the film is fun”—not because it encodes an entire national personality.", "thai-dictionary") },
      { term: "สบาย", transliteration: "sabaai L", meaning: "comfortable; well; at ease", note: cited("Appears in สบายดี sabaai dii “well/fine” and สบาย ๆ sabaai sabaai “easygoing; comfortably.” Repetition softens the quality rather than simply making it plural.", "thai-dictionary") },
      { term: "ไม่เป็นไร", transliteration: "mai pen rai F-M-M", meaning: "it's all right; never mind; no problem", note: cited("A response to thanks, apology, concern, or a small mishap. It can reassure warmly or close a topic; translating it as a national philosophy strips away intonation and circumstance.", "thai-dictionary", "chula-spoken") },
      { term: "แซ่บ", transliteration: "saep F", meaning: "deliciously spicy/tasty; exciting", note: cited("A Lao/Isan-associated word now widespread through food talk, music, advertising, and playful praise. Its circulation shows regional culture shaping national popular Thai, not merely borrowing from a peripheral “dialect.”", "wiki-isan", "chula-spoken") },
      { term: "555", transliteration: "ha ha ha", meaning: "hahaha in digital writing", note: cited("The Thai word for five is ห้า haa, so repeated Arabic numerals read as laughter. Thai digits exist, but ordinary online laughter normally uses international 5s.", "dd-laughter") },
      { term: "พี่ / น้อง", transliteration: "phii F / nong H", meaning: "older / younger sibling; relational forms of address", note: cited("These kin terms extend beyond biological siblings to colleagues, acquaintances, and service encounters. Age, role, warmth, and local practice decide whether they sound affiliative, patronizing, or simply ordinary.", "iwasaki-register", "thai-dictionary") }
    ],
    loanwordLayers: cited(
      "Learned vocabulary can look intimidating because one final sound may have many spellings inherited through Pali-Sanskrit conventions. Those layers fill religion, monarchy, administration, education, science, and abstract prose. Khmer contributed deeply to court and historical vocabulary; Chinese varieties shaped food and commerce; Malay connects the peninsula; and English dominates many contemporary technical and pop-cultural domains. Speakers may alternate a formal Thai coinage and an adapted English loan according to audience. Loanwords still receive Thai phonology, tone patterns, spelling compromises, and playful clipping. Etymology is most useful when it helps recognize families and registers, not when it is used to declare one layer more authentically Thai than another.",
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
      "Thai's closest comparisons lie inside Southwestern Tai, but the map is political too. Lao is a national standard; Isan names Lao-related varieties within Thailand; Northern and Southern Thai have regional histories; and Zhuang languages show the Tai family's depth in southern China. Shared classifiers, tones, and cognates aid comparison, but sound change and unequal media exposure shape comprehension. Khmer is a contact language, while Pali and Sanskrit are learned sources—not ancestors of Thai grammar.",
      "glottolog-thai",
      "wiki-thai-lao",
      "enfield-thai-isan-lao"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Thai is not one etiquette script. Particles, monastic address, seniority, teasing, queer styles, hierarchy, and online irony overlap. Observe before copying: คุณ khun may be distant in a family, while constant ครับ khrap sounds stiff among friends. Regional forms carry pride and stigma, so never use Isan or Northern speech as comic costume. Temple narratives, horror, political rap, luk thung, and molam complicate any simple “Thai culture.”",
  resources: [
    { type: "other", title: "Discover Discomfort: How People Laugh Online", url: "https://discoverdiscomfort.com/how-people-laugh-online-different-languages/", level: "beginner", description: cited("A memorable entry into Thai digital writing: 555 reads as ha-ha-ha because ห้า means five. The article clearly labels the author's limited Thai expertise, so use it for this narrow observation.", "dd-laughter") },
    { type: "course", title: "Discover Discomfort: How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", level: "all", description: cited("A reader-focused framework for high-frequency real-life structures, recording yourself, vocabulary groups, and tutoring; combine it with Thai-specific sound instruction.", "dd-how-learn") },
    { type: "dictionary", title: "Royal Society Dictionary", url: "https://dictionary.orst.go.th/", level: "intermediate", description: cited("The prescriptive reference for standard Thai spelling and definitions, valuable once monolingual lookup becomes manageable.", "royal-society") },
    { type: "dictionary", title: "Mary Haas Thai Dictionary Project", url: "https://sealang.net/thai/tdp.htm", level: "all", description: cited("A scholarly Thai–English dictionary resource with learner value and transparent history, hosted by the SEAlang Library.", "sealang-haas") },
    { type: "dictionary", title: "thai-language.com", url: "https://www.thai-language.com/", level: "all", description: cited("Audio, tone-complete transcription, classifier lists, dictionary examples, and unusually thorough explanations of Thai spelling mechanics.", "thai-dictionary") },
    { type: "corpus", title: "Thai Web Corpus", url: "https://www.thaicorpus.net/", level: "intermediate", description: cited("A concordance and collocation tool for checking how words occur in contextualized web writing, including variation outside prescriptive norms.", "chula-spoken") },
    { type: "corpus", title: "Chulalongkorn Corpus of Spoken Thai", url: "https://zenodo.org/records/17366698", level: "advanced", description: cited("A current spoken corpus from Chulalongkorn University for investigating conversational forms and discourse patterns.", "chula-spoken") }
  ],
  relatedLanguages,
  phrases: [
    { original: "สวัสดีครับ / สวัสดีค่ะ", transliteration: "sawatdii khrap / sawatdii kha", translation: "Hello. (common polite forms)", usageNote: "ครับ is conventionally used by male speakers and ค่ะ by female speakers. Familiar greetings also use names, kin terms, or situational questions." },
    { original: "ขอบคุณครับ / ขอบคุณค่ะ", transliteration: "khop khun khrap / khop khun kha", translation: "Thank you.", usageNote: "A reliable polite formula; substantial help can call for warmer thanks." },
    { original: "ขอโทษนะครับ / ขอโทษนะคะ", transliteration: "kho thot na khrap / kho thot na kha", translation: "Excuse me; I'm sorry.", usageNote: "นะ softens; women's question/request particle here is คะ, while the polite statement form is generally ค่ะ." },
    { original: "ไม่เป็นไร", transliteration: "mai pen rai", translation: "It's all right; never mind; no problem.", usageNote: "Useful after thanks, apology, or a minor mishap. Intonation decides whether it warmly reassures or closes discussion." },
    { original: "คุณชื่ออะไร", transliteration: "khun chue arai", translation: "What's your name?", literalMeaning: "You name what?", usageNote: "คุณ is a serviceable polite “you” with an unfamiliar adult, but names and titles often replace pronouns once a relationship is known." },
    { original: "พูดช้า ๆ ได้ไหมครับ / คะ", transliteration: "phut cha cha dai mai khrap / kha", translation: "Could you speak slowly?", literalMeaning: "Speak slowly can question?", usageNote: "ๆ repeats ช้า “slow”; listen for the rising-tone question particle ไหม." },
    { original: "ช่วยพูดอีกครั้งได้ไหม", transliteration: "chuai phut ik khrang dai mai", translation: "Could you say that again?", literalMeaning: "Help speak one more time, can?", usageNote: "Add an appropriate polite particle for the setting and speaker." },
    { original: "ไม่เข้าใจ", transliteration: "mai khao jai", translation: "I don't understand.", literalMeaning: "Not enter heart/mind.", usageNote: "The subject is naturally omitted when obvious. เข้าใจ is a compound built around ใจ “heart/mind.”" },
    { original: "คำนี้แปลว่าอะไร", transliteration: "kham ni plae wa arai", translation: "What does this word mean?", literalMeaning: "This word translates/says that what?", usageNote: "A useful classroom phrase; point or quote the word before asking." },
    { original: "อันนี้เท่าไหร่", transliteration: "an ni thao rai", translation: "How much is this?", literalMeaning: "This item how much?", usageNote: "อัน is a general classifier-like noun for an item. Add ครับ/คะ for a polite market or shop exchange." },
    { original: "เอาอันนี้ครับ / ค่ะ", transliteration: "ao an ni khrap / kha", translation: "I'll take this one.", literalMeaning: "Take/want this item.", usageNote: "เอา is direct but ordinary in a transaction when delivered with suitable tone and politeness." },
    { original: "ห้องน้ำอยู่ที่ไหน", transliteration: "hong nam yu thii nai", translation: "Where is the bathroom?", literalMeaning: "Bathroom is-located at where?", usageNote: "อยู่ locates something; add a polite particle when asking a stranger." },
    { original: "กินข้าวหรือยัง", transliteration: "kin khao rue yang", translation: "Have you eaten yet?", literalMeaning: "Eat rice/meal or not yet?", usageNote: "Can be a genuine question, an invitation, or warm small talk. It is not a word-for-word equivalent of “How are you?” in every context." },
    { original: "แล้วเจอกัน", transliteration: "laeo joe kan", translation: "See you later.", literalMeaning: "Then meet each other.", usageNote: "Natural among people expecting to meet again; ลาก่อน la kon is a more final or formal goodbye." }
  ],
  sources: [
    { id: "dd-laughter", title: "How People Laugh Online in Different Languages", url: "https://discoverdiscomfort.com/how-people-laugh-online-different-languages/", publisher: "Discover Discomfort", publishedAt: "2019-09-25", accessedAt: "2026-07-10" },
    { id: "dd-how-learn", title: "How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", publisher: "Discover Discomfort", publishedAt: "2019-02-01", accessedAt: "2026-07-10" },
    { id: "wiki-thai", title: "Thai language", url: "https://en.wikipedia.org/wiki/Thai_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-thai-script", title: "Thai script", url: "https://en.wikipedia.org/wiki/Thai_script", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-isan", title: "Isan language", url: "https://en.wikipedia.org/wiki/Isan_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-northern-thai", title: "Northern Thai language", url: "https://en.wikipedia.org/wiki/Northern_Thai_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-thai-lao", title: "Comparison of Lao and Thai", url: "https://en.wikipedia.org/wiki/Comparison_of_Lao_and_Thai", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-thai", title: "Glottolog 5.3: Thai", url: "https://glottolog.org/resource/languoid/id/thai1261", publisher: "Glottolog", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "unicode-thai", title: "The Unicode Standard, Chapter 16: Southeast Asia — Thai", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-16/", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-07-10" },
    { id: "royal-society", title: "Royal Society of Thailand Dictionary", url: "https://dictionary.orst.go.th/", publisher: "Royal Society of Thailand", accessedAt: "2026-07-10" },
    { id: "sealang-haas", title: "Mary Haas Thai Dictionary Project", url: "https://sealang.net/thai/tdp.htm", publisher: "SEAlang Library", accessedAt: "2026-07-10" },
    { id: "thai-dictionary", title: "thai-language.com Dictionary and Reference", url: "https://www.thai-language.com/", publisher: "thai-language.com", accessedAt: "2026-07-10" },
    { id: "thai-grammar", title: "A Reference Grammar of Thai", url: "https://www.cambridge.org/core/books/reference-grammar-of-thai/235A50DE94345C8FDDC1DB8B353263EA", publisher: "Cambridge University Press", publishedAt: "2005", accessedAt: "2026-07-10" },
    { id: "iwasaki-register", title: "Creating Speech Register in Thai Conversation", url: "https://www.cambridge.org/core/journals/language-in-society/article/creating-speech-register-in-thai-conversation/92F4296DA273C3FEEFF0D464BAAE0286", publisher: "Cambridge University Press", publishedAt: "2000", accessedAt: "2026-07-10" },
    { id: "enfield-thai-isan-lao", title: "Thai-Isan-Lao: Linguistic and Cultural Relations", url: "https://pure.mpg.de/rest/items/item_58680_2/component/file_58681/content", publisher: "Tai Culture / Max Planck Institute archive", publishedAt: "2002", accessedAt: "2026-07-10" },
    { id: "chula-spoken", title: "Chulalongkorn Corpus of Spoken Thai", url: "https://zenodo.org/records/17366698", publisher: "Chulalongkorn University", publishedAt: "2025", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Thai Language Guide: Tones, Script, Grammar and Real Usage",
    description: "A deeply researched guide to Thai tones, writing, grammar, classifiers, particles, registers, regional languages, culture, phrases, and modern learning resources."
  }
} satisfies LanguageGuide;
