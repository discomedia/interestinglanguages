import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Urdu",
    slug: "urdu",
    relationship: "Co-standard of the Hindi–Urdu/Hindustani continuum",
    explanation: cited(
      "Hindi and Urdu share core grammar and much everyday vocabulary. Their written standards use Devanagari and Perso-Arabic Nastaliq respectively, and formal vocabulary often draws on Sanskrit in Hindi and Persian and Arabic in Urdu. A speaker may follow casual conversation across the two but need to study the other script and literary vocabulary; each standard also has its own institutions and literary history.",
      "columbia-hindi-urdu",
      "wiki-hindustani"
    )
  },
  {
    name: "Punjabi",
    relationship: "Neighboring Northwestern Indo-Aryan relative",
    explanation: cited(
      "Punjabi shares substantial Indo-Aryan inheritance and long contact with Hindi–Urdu, but its tone system, verbal patterns, vocabulary, and Gurmukhi and Shahmukhi writing traditions make it a language in its own right. Hindi media and migration encourage bilingualism, which should not be mistaken for automatic mutual intelligibility.",
      "glottolog-hindi",
      "wiki-hindi"
    )
  },
  {
    name: "Bengali",
    slug: "bengali",
    relationship: "Eastern Indo-Aryan relative",
    explanation: cited(
      "Bengali and Hindi descend from different branches of modern Indo-Aryan. Cognates and some shared constructions become visible with study, but Bengali has its own script, sound changes, literary history, and grammar. Comparing them shows that ‘Indian language’ is a geographic label, not a single grammatical type.",
      "glottolog-hindi",
      "wiki-hindi"
    )
  },
  {
    name: "Persian",
    slug: "persian",
    relationship: "Distant Indo-Iranian relative with deep contact influence",
    explanation: cited(
      "Persian and Hindi share distant Indo-Iranian ancestry. Persian also served administration and literature in South Asia for centuries, adding words and styles to Hindustani. ख़ुशी khushī ‘happiness’ and ज़रूरत zarūrat ‘need’ reflect that contact, not recent common ancestry.",
      "wiki-hindustani",
      "ut-hindi"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const hindiGuide = {
  slug: "hindi",
  name: "Hindi",
  autonym: "हिन्दी",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Hindi has a shared spoken base with Urdu and a Devanagari written standard. Follow its everyday speech, changing registers, grammar, films, news, and literature.",
  family: "Indo-European, Indo-Aryan",
  macroRegion: "South Asia and global diasporas",
  primaryScript: "Devanagari",
  difficultyLabel: "Demanding",
  learnerHook: "Learn why a friend may ask for मदद madad while an official notice offers सहायता sahāyatā, and how both fit within Hindi's living vocabulary.",
  hero: {
    imageAlt: "Hindi in Devanagari alongside contemporary conversation, books, and cinema.",
    callToActionLabel: "Explore Hindi in use"
  },
  classification: "A standardized Indo-Aryan register of the pluricentric Hindi–Urdu, or Hindustani, language continuum",
  speakerCommunity: "People across northern and central India speak Hindi as a first language, while many elsewhere use it as an additional or heritage language. India's 2011 census grouped many mother tongues under its Hindi heading, so the total doesn't count speakers of one uniform home variety. Hindi in Devanagari is an official language of India's Union government alongside English; India has no constitutionally designated national language.",
  facts: [
    { label: "Family", value: "Indo-European · Indo-Iranian · Indo-Aryan" },
    { label: "Shared spoken base", value: "Hindi–Urdu / Hindustani" },
    { label: "Script", value: "Devanagari, written left to right" },
    { label: "2011 census", value: "Hindi heading grouped 528 million mother-tongue returns, including multiple varieties" },
    { label: "Union status", value: "Official language of the Union in Devanagari, alongside statutory use of English" },
    { label: "Typical word order", value: "Subject–object–verb, flexible for information structure" }
  ],
  learnerOverview: "A friend may ask for मदद madad, ‘help,’ while a government notice offers सहायता sahāyatā; both are Hindi, but the setting shapes the choice. Learn Devanagari alongside audio, because कमरा looks like kamarā letter by letter but people usually say kamrā, then practice gender, postpositions, and verbs through complete sentences. Films give you memorable dialogue; interviews and voice notes show less scripted speech.",
  origins: {
    overview: cited(
      "Hindi grew from North Indian Indo-Aryan speech through older stages, including Middle Indo-Aryan Prakrits and later Apabhraṃśa traditions. Modern Standard Hindi draws chiefly on Khari Boli around Delhi, while Braj and Awadhi supported major poetry before Khari Boli became the main basis of modern prose. Contact in cities and courts added Persian, Arabic through Persian, and other South Asian influences; Hindi and Urdu later developed different written standards while keeping much everyday grammar in common.",
      "wiki-hindi",
      "wiki-hindustani",
      "columbia-hindi-urdu"
    ),
    timeline: [
      {
        period: "Before c. 1200",
        event: cited("North Indian vernaculars changed across many centuries. Sanskrit continued as a learned language, while Prakrit, Apabhraṃśa, local speech, and regional literature followed their own histories.", "wiki-hindi", "glottolog-hindi")
      },
      {
        period: "13th–17th centuries",
        event: cited("People around Delhi and across North India used changing names, including Hindavi, Hindi, and Dehlavi, for forms of local speech. Persian served courts and administration, while poets and performers worked in Braj, Awadhi, and other regional forms. Historical labels don't map neatly onto today's national or religious identities.", "wiki-hindustani", "ut-hindi")
      },
      {
        period: "18th–19th centuries",
        event: cited("Print, schools, dictionaries, and public debate gave Hindi and Urdu separate written standards. Hindi institutions favored Devanagari and Sanskrit-derived learned words, while Urdu institutions favored Perso-Arabic script and Persian-Arabic vocabulary. Everyday speech continued across that divide.", "wiki-hindustani", "columbia-hindi-urdu")
      },
      {
        period: "1947–1960s",
        event: cited("Partition, independence, and new state institutions gave language choices enormous political weight. India’s Constitution designated Hindi in Devanagari as the Union’s official language and directed its development while explicitly mentioning Hindustani and other Indian languages as sources. The Central Hindi Directorate was established in 1960 to promote and develop Hindi; English continued in official use under law.", "chd", "constitution-india")
      },
      {
        period: "Late 20th century to today",
        event: cited("Cinema, radio, television, migration, advertising, streaming, and social media spread flexible urban Hindustani far beyond its original heartland. Formal government terminology and literary prose coexist with English-heavy workplace speech, Roman-script messaging, regional accents, and an active Devanagari digital sphere.", "wiki-hindi", "census-hindi")
      }
    ],
    contactHistory: cited(
      "Hindi has inherited words that changed over centuries, more direct Sanskrit loans, and many words from Persian and Arabic through Persian. Later contact brought Portuguese and English loans, and regional languages keep adding words. A speaker may choose समय samay or वक़्त vaqt for ‘time,’ पुस्तक pustak or किताब kitāb for ‘book,’ and मित्र mitra or दोस्त dost for ‘friend,’ depending on audience and habit.",
      "wiki-hindi",
      "wiki-hindustani",
      "iit-wordnet"
    ),
    standardization: cited(
      "Schools, publishers, broadcasters, and government offices use Modern Standard Hindi, and the Central Hindi Directorate develops teaching materials and terminology. Dense, Sanskrit-derived official prose can challenge fluent conversational speakers, while Roman-script messages and Hindi–English mixing follow less fixed spelling habits. Learn the standard to read across settings, and listen to regional and casual speech on its own terms.",
      "chd",
      "constitution-india",
      "ut-hindi"
    )
  },
  variants: {
    overview: cited(
      "‘Hindi’ may mean the school standard, the census heading, or a broad region of related speech. Standard Hindi draws on Khari Boli, while people counted under the census heading may name Bhojpuri, Awadhi, Braj, Chhattisgarhi, or another variety as their home language. Those varieties have their own histories, so ask people what they call their home speech and where they use Standard Hindi.",
      "census-hindi",
      "wiki-hindi",
      "glottolog-hindi"
    ),
    items: [
      { name: "Modern Standard Hindi", note: cited("The Devanagari-based norm used in schools, news, formal writing, and national institutions. Actual educated speech normally contains widely shared Persian-Arabic and English vocabulary that prescriptive lists may underrepresent.", "chd", "ut-hindi") },
      { name: "Colloquial Hindustani", note: cited("The broad shared conversational zone in which Hindi and Urdu are often highly mutually intelligible. It is not a perfectly neutral engineered language: speakers still have regional, religious, class, and personal styles.", "columbia-hindi-urdu", "wiki-hindustani") },
      { name: "Bambaiya / Mumbai Hindi", note: cited("A family of urban styles shaped by Marathi, Gujarati, Konkani, Urdu, English, migration, cinema, and neighborhood identities. Film stereotypes capture only a narrow performance of a much richer multilingual city.", "wiki-hindi") },
      { name: "Braj and Awadhi", note: cited("Major literary languages or varieties with their own grammars and histories, associated with writers and performance traditions central to the broader history of ‘Hindi literature.’ They should not be reduced to quaint accents of the modern standard.", "ut-hindi", "glottolog-hindi") },
      { name: "Diaspora Hindi and Hindustani", note: cited("Heritage forms reflect different migrations and contact languages. Communities using names such as Fiji Hindi or Sarnami maintain norms not measured against Delhi speech.", "wiki-hindi", "census-hindi") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Hindi distinguishes sounds by where you place your tongue and whether you release a puff of air: क k, ख kh, ग g, घ gh form a four-way set. Dental त t touches the upper teeth, while retroflex ट ṭ curls the tongue back; vowel length and nasalization can also change a word. Borrowed sounds written with a dot below the letter, such as ज़ z, फ़ f, ख़ x, vary across speakers and settings.",
      "ut-hindi",
      "wiki-hindi"
    ),
    script: "Devanagari with learner-friendly transliteration; macrons mark long vowels and dots mark retroflex consonants",
    soundSystem: cited(
      "Hindi drops the inherent vowel in many positions: नमक looks like namaka letter by letter but sounds namak, while कमरा is kamrā rather than kamarā. It also distinguishes प p from फ ph, as in पल pal ‘moment’ and फल phal ‘fruit’; English speakers may miss the puff of air after ph. Compare र r with the retroflex flap ड़ ṛ, and learn whole recorded words because spelling alone won't settle every sound.",
      "ut-hindi",
      "unicode-devanagari"
    ),
    prosody: cited(
      "Hindi doesn't use English-style stress as the main cue to word identity, so don't blur unstressed vowels when you speak. Pitch across a sentence can convey a question, insistence, or surprise; phrase-final ना nā can invite agreement or sound impatient. Repeat complete recorded clauses, keeping vowel length and consonant contrasts clear.",
      "ut-hindi",
      "dd-how-learn"
    ),
    learnerTraps: [
      "Reading every written inherent vowel, producing kamarā instead of normal kamrā for कमरा",
      "Merging dental त/द with retroflex ट/ड or with English alveolar t/d",
      "Dropping aspiration in contrasts such as क k versus ख kh and ग g versus घ gh",
      "Treating ड़ ṛ and ढ़ ṛh as ordinary र r, including the aspirated sound in पढ़ना paṛhnā ‘to read’",
      "Assuming nukta loan sounds have one compulsory realization across every speaker and register"
    ],
    sampleWords: [
      { original: "कल", transliteration: "kal", translation: "yesterday; tomorrow", note: "The time reference comes from context; use the short vowel and an unaspirated k." },
      { original: "फल", transliteration: "phal", translation: "fruit", note: "The initial ph has a breath of air after p. Compare पल pal ‘moment’ for the unaspirated sound." },
      { original: "ताल", transliteration: "tāl", translation: "rhythm; beat; pond (depending on etymology/context)", note: "The initial त is dental: the tongue touches the upper teeth." },
      { original: "टाल", transliteration: "ṭāl", translation: "postpone; avoid (imperative/stem)", note: "The initial ट is retroflex, contrasting with dental ताल tāl." },
      { original: "पढ़ना", transliteration: "paṛhnā", translation: "to read; to study", note: "The ढ़ letter represents an aspirated retroflex flap; it is not ड़ plus a separate ह." },
      { original: "माँ", transliteration: "mā̃", translation: "mother", note: "The chandrabindu marks vowel nasalization; keep the long vowel nasal rather than adding a full n." },
      { original: "कमरा", transliteration: "kamrā", translation: "room", note: "The first written inherent vowel disappears in ordinary speech: say kamrā, not kamarā." }
    ]
  },
  writing: {
    overview: cited(
      "Devanagari is an abugida: a consonant letter normally carries an inherent vowel, a vowel sign changes it, and the virama suppresses it. Compare क ka, कि ki, की kī, and क् k; joined consonants can change shape, as in शक्ति shakti. In digital text, you type क before the vowel sign ि even though it appears to the left in कि, because the font handles that display change.",
      "unicode-devanagari",
      "dd-read-write"
    ),
    primaryScript: "Devanagari",
    romanization: cited(
      "Academic transliteration marks long vowels (ā, ī, ū), retroflex consonants (ṭ, ḍ, ṛ), and nasalization. Everyday Roman Hindi usually skips those marks, so spellings such as ‘kal’ and ‘achha’ rely on context and shared habits. Roman chat works for conversation, but Devanagari lets you read books, subtitles, signs, and dictionaries without guessing as much.",
      "dd-read-write",
      "ut-hindi"
    ),
    spellingNorms: cited(
      "Hindi spelling points toward pronunciation without recording every sound change, including many dropped inherent vowels. The dot ं can mark a nasal sound that adjusts to the next consonant, the curved mark ँ often marks a nasalized vowel, and a dot below a letter, called nukta, helps write loans such as फ़ f. Writers vary in keeping nukta letters; modern prose commonly uses periods and commas, while literary or formal text may use the danda ।.",
      "unicode-devanagari",
      "chd"
    ),
    styleNotes: [
      cited("Learn the consonant grid by sound groups, then read high-frequency words; copying forty isolated symbols without audio hides the system’s best feature.", "dd-read-write", "ut-hindi"),
      cited("Type with an Indic phonetic input method and inspect the result. A pre-base vowel sign may display before the consonant although you typed it in logical order.", "unicode-devanagari"),
      cited("Keep Devanagari and Roman searches available. Artists, films, and informal phrases may be indexed under several Roman spellings.", "dd-how-learn"),
      cited("Treat conjunct recognition as vocabulary-driven. क्ष, त्र, ज्ञ, and common half-forms deserve early practice, but rare Sanskrit clusters can wait until your reading requires them.", "unicode-devanagari", "dd-read-write")
    ]
  },
  grammar: {
    overview: cited(
      "Hindi usually puts the verb near the end, while speakers move other words to show what they want to stress. Nouns may change before postpositions, small words that follow them, such as को ko ‘to’; verbs often join an action to an auxiliary such as है hai ‘is.’ The examples use broadly standard colloquial Hindi and label important social or formal choices.",
      "ut-grammar",
      "open-hindi-urdu"
    ),
    typologicalProfile: cited(
      "Hindi nouns have masculine or feminine grammatical gender, and adjectives and verbs often change to match a noun. In many completed actions with an object, the doer takes ने ne and the verb agrees with an unmarked object instead; linguists call this pattern split ergativity. Respect also changes grammar: तू tū, तुम tum, and आप āp carry different social meanings, and आप usually takes plural verb forms even for one person.",
      "ut-grammar",
      "wiki-hindustani-grammar"
    ),
    morphology: cited(
      "Nouns often change before postpositions: लड़का laṛkā ‘boy’ becomes लड़के laṛke before को ko, while लड़की laṛkī ‘girl’ may look unchanged. Adjectives agree with nouns, giving अच्छा लड़का acchā laṛkā and अच्छी लड़की acchī laṛkī. Verbs combine stems, forms showing an action's progress or completion, and auxiliaries: करता है kartā hai ‘usually does,’ कर रहा है kar rahā hai ‘is doing,’ किया है kiyā hai ‘has done.’",
      "ut-grammar",
      "open-hindi-urdu"
    ),
    syntax: cited(
      "Postpositions follow a noun: मेज़ पर mez par means ‘on the table,’ and दिल्ली से dillī se means ‘from Delhi.’ Hindi also pairs words such as जो…वह… jo…vah… for ‘the one who…that one…,’ and speakers can leave out a pronoun when context makes it clear. In मैंने उसे किताब दी mainẽ use kitāb dī, ‘I gave her or him a book,’ moving किताब kitāb can highlight the book, but the verb generally stays at the end.",
      "ut-grammar",
      "open-hindi-urdu"
    ),
    advancedPainPoints: [
      "Predicting agreement in perfective clauses containing ने ne and objects with or without को ko",
      "Choosing a light verb—लेना, देना, जाना, पड़ना, उठना—by idiomatic event meaning rather than English translation",
      "Using आप, तुम, and तू with socially appropriate verb forms, names, kin terms, and titles",
      "Understanding fast speech after schwa deletion, vowel coalescence, and familiar words reduce inside phrases",
      "Moving between conversational Hindustani and Sanskritized, Persianized, English-heavy, or regionally marked registers"
    ],
    topics: [
      {
        title: "Postpositions and the oblique form",
        body: cited("Hindi usually expresses relationships after the noun. Many masculine -ā nouns change to -e before a postposition; pronouns often have special forms such as मुझसे mujhse ‘from/by me.’ Learn noun plus postposition as a phrase rather than treating the postposition as a detachable English preposition.", "ut-grammar"),
        example: "लड़के ने दोस्त को चाय दी। — laṛke ne dost ko cāy dī.",
        exampleTranslation: "The boy gave tea to the friend. Laṛkā becomes oblique laṛke before ne; ko marks the recipient."
      },
      {
        title: "Gender and agreement",
        body: cited("Every noun has grammatical gender, and variable adjectives, participles, and some past forms agree. Natural gender helps for many people, but objects must be learned with an agreeing phrase: बड़ी किताब baṛī kitāb ‘big book,’ नया कमरा nayā kamrā ‘new room.’", "ut-grammar", "open-hindi-urdu"),
        example: "नई किताब बहुत अच्छी है। — naī kitāb bahut acchī hai.",
        exampleTranslation: "The new book is very good. Naī and acchī are feminine because kitāb is feminine."
      },
      {
        title: "Habitual and progressive aspect",
        body: cited("The habitual participle describes regular or characteristic activity; रहना-derived progressive forms present an event underway. Both combine with an auxiliary that locates the situation in time and agrees where required.", "ut-grammar"),
        example: "मैं रोज़ पढ़ता हूँ, लेकिन अभी खाना बना रहा हूँ। — maĩ roz paṛhtā hū̃, lekin abhī khānā banā rahā hū̃. [masculine speaker]",
        exampleTranslation: "I study/read every day, but right now I am cooking. A feminine speaker says paṛhtī and banā rahī."
      },
      {
        title: "Perfective transitive clauses and ने ne",
        body: cited("With many transitive perfective verbs, the agent takes ne. If the object is not marked by ko, the verb agrees with it; if the object is ko-marked, agreement is normally default masculine singular. This is the learner’s clearest introduction to split ergativity.", "ut-grammar", "wiki-hindustani-grammar"),
        example: "सीमा ने दो रोटियाँ खाईं। — sīmā ne do roṭiyā̃ khāī̃.",
        exampleTranslation: "Seema ate two flatbreads. The feminine plural verb khāī̃ agrees with unmarked roṭiyā̃, not with the ne-marked agent."
      },
      {
        title: "Compound verbs and viewpoint",
        body: cited("A main verb can combine with a light verb whose dictionary meaning fades but whose event coloring remains. पढ़ लेना paṛh lenā often presents reading as accomplished for one’s purposes; बोल देना bol denā can present saying as decisive or released. Not every combination is equally natural.", "ut-grammar", "open-hindi-urdu"),
        example: "मैंने किताब पढ़ ली। — mainẽ kitāb paṛh lī.",
        exampleTranslation: "I finished reading the book / got the book read. Lī agrees with feminine kitāb and adds a completive, affected nuance."
      },
      {
        title: "Experiencers with को ko",
        body: cited("Hindi often frames sensations, possession, need, and obligation with an experiencer marked by ko rather than an English-style nominative subject. मुझे भूख लगी है literally resembles ‘to me hunger has attached,’ but the natural translation is simply ‘I’m hungry.’", "ut-grammar"),
        example: "मुझे जल्दी जाना है। — mujhe jaldī jānā hai.",
        exampleTranslation: "I have to leave soon. The person under obligation appears as mujhe ‘to me.’"
      },
      {
        title: "Respect, pronouns, and plural agreement",
        body: cited("Āp takes plural agreement even when addressing one person. Tum can be warm, ordinary, or too familiar depending on relationship; tū can express intimacy, devotion, hierarchy, contempt, or aggression. No fixed English label chooses safely for every scene.", "ut-hindi", "open-hindi-urdu"),
        example: "आप कहाँ से आए हैं? — āp kahā̃ se āe haĩ? [to a man]",
        exampleTranslation: "Where have you come from? The respectful pronoun takes plural agreement. To a woman, say आप कहाँ से आई हैं (āp kahā̃ se āī haĩ)."
      },
      {
        title: "Relative-correlative sentences",
        body: cited("Hindi often pairs a relative word beginning with j- with a matching correlative: jo…vo…, jahā̃…vahā̃…, jaisā…vaisā…. The pair lets a speaker build long, balanced sentences without copying an English relative clause.", "open-hindi-urdu"),
        example: "जो मेहनत करता है, वही सीखता है। — jo mehnat kartā hai, vahī sīkhtā hai.",
        exampleTranslation: "The one who works hard is the one who learns. Hī focuses the matching correlative vahī."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Hindi has a large first-language base across northern and central India, and people use it elsewhere through migration, education, work, and media. India's 2011 census counted 528,347,193 people under the Hindi heading, or 43.63% of the population, but that category groups many mother-tongue labels rather than one form of Standard Hindi. Hindi also circulates across South Asian borders and in diaspora communities; its reach doesn't erase other languages or local concerns about Hindi dominance.",
      "census-hindi",
      "wiki-hindi"
    ),
    regions: [
      { place: "Delhi, Uttar Pradesh, Uttarakhand, Haryana, and neighboring areas", note: cited("The historical base of Khari Boli lies around Delhi and the upper Ganges–Yamuna region, but modern urban Hindi here is multilingual and socially varied. Awadhi, Braj, Haryanvi, Punjabi, Urdu, and migration all remain audible.", "wiki-hindi", "glottolog-hindi") },
      { place: "Bihar, Jharkhand, Madhya Pradesh, Rajasthan, and Chhattisgarh", note: cited("Hindi serves major public and educational roles alongside Bhojpuri, Maithili, Magahi, tribal languages, Rajasthani varieties, Chhattisgarhi, and others. Census subsumption under Hindi can hide these distinct identities.", "census-hindi", "glottolog-hindi") },
      { place: "India-wide cities and media", note: cited("Hindi is an additional language for many people whose first language is Bengali, Marathi, Gujarati, Telugu, Tamil, Kannada, Malayalam, Punjabi, or another language. Competence, enthusiasm, and attitudes vary; avoid assuming every Indian speaks Hindi or wishes to use it.", "census-hindi") },
      { place: "The Gulf and global diaspora", note: cited("Hindi, Urdu, and flexible Hindustani often function across South Asian networks in the Gulf. Heritage communities elsewhere may preserve older vocabulary, mix local languages, or learn Standard Hindi through schools and film rather than home transmission.", "wiki-hindi") },
      { place: "Mauritius, Fiji, Suriname, and related migration histories", note: cited("Indenture-era migrations produced new Indo-Aryan community languages and identities. Fiji Hindi and Sarnami are not simply badly preserved Standard Hindi; they developed from particular source varieties under new contact conditions.", "glottolog-hindi", "wiki-hindi") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "An English-speaking learner faces a new script, unfamiliar consonants, noun gender, verb-final sentences, and agreement that changes with sentence type. Devanagari has a regular structure and common verb patterns recur, so early reading and conversation can grow together. Ordering tea, following a comedy scene, and reading a government notice ask for different registers; choose practice material for the situation you care about.",
      "dd-read-write",
      "ut-hindi",
      "wiki-hindi"
    ),
    easierAspects: [
      "Devanagari has an organized sound-based architecture once vowel signs, conjuncts, and schwa deletion are understood",
      "Hindi has no definite or indefinite articles equivalent to English ‘the’ and ‘a’",
      "A huge ecosystem of films, interviews, songs, podcasts, tutors, textbooks, and open university resources supports study",
      "English loans provide entry points in urban, technical, educational, and workplace vocabulary",
      "Hindi and Urdu share enough colloquial structure that one spoken foundation opens a second major cultural sphere"
    ],
    hardAspects: [
      "Producing aspiration, dental/retroflex, vowel-length, and nasalization contrasts consistently in fast speech",
      "Remembering noun gender and carrying agreement across adjectives, participles, and auxiliaries",
      "Handling ne/ko marking and agreement in perfective transitive clauses",
      "Predicting schwa deletion while reading unfamiliar Devanagari words aloud",
      "Understanding regional speech and selecting natural Sanskritic, Persianate, English, and colloquial vocabulary"
    ],
    plateauRisks: [
      "Understanding film plots through visuals and subtitles while never transcribing unscripted speech",
      "Staying in Roman script because texting feels fluent, then remaining unable to read even simple original material",
      "Memorizing noun translations without gender, plural/oblique forms, postpositions, or an example phrase",
      "Speaking around ne and compound verbs so successfully that core intermediate grammar never becomes automatic",
      "Equating advanced Hindi only with rare Sanskrit vocabulary instead of richer control of ordinary style"
    ],
    workload: cited(
      "Try a short Devanagari reading and a brief listening loop several days a week. Transcribe thirty seconds, compare it with captions or a tutor's correction, then repeat the clip and reuse two phrases. Save nouns with gender, verbs in full clauses, and near-synonyms with register labels; pair one conversational source with one formal source.",
      "dd-how-learn",
      "dd-read-write",
      "ut-hindi"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Choose a setting, then collect its actual speech: family stories and kin terms, film dialogue beside actor interviews, or work emails beside colleagues' spoken terms. Keep everyday Hindustani as an anchor while learning more Sanskrit-derived institutional Hindi and more Persian-Arabic literary Urdu for reading and listening. These are register choices shaped by people and setting, not fixed vocabulary lists for religious communities.",
      "ut-hindi",
      "columbia-hindi-urdu",
      "dd-how-learn"
    ),
    mediaPractice: cited(
      "Watch a short scene without subtitles, note the words you catch, then check Hindi captions and replay it. Songs help memory but can bend ordinary word order, so test a phrase against conversation before copying it. Newsreaders offer a formal style; interviews and podcasts show reductions, English mixing, honorifics, and regional rhythm.",
      "ut-hindi",
      "dd-how-learn"
    ),
    dictionariesAndCorpora: cited(
      "Start with a bilingual dictionary, then check Hindi WordNet or a corpus when two words seem interchangeable. IIT Bombay's English–Hindi parallel data shows translation choices, but its sentences include formal and specialized writing rather than a ready-made conversation guide. Search Devanagari and Roman spellings, save a full sentence, and note its genre before using it yourself.",
      "iit-wordnet",
      "iit-corpus",
      "chd"
    ),
    resources: [
      { type: "course", title: "Hindi at the University of Texas at Austin", url: "https://hindi.la.utexas.edu/", level: "all", description: cited("An exceptional open collection: script and pronunciation lessons, grammar, first-year textbooks, dialogues, interviews, podcasts, worksheets, and a Hindi–Urdu common reader.", "ut-hindi") },
      { type: "course", title: "Hindi–Urdu Open Textbook", url: "https://open.lib.umn.edu/hindiurdu/", level: "intermediate", description: cited("Free university lessons use dialogues, readings, news, and grammar notes. The authors designed them for learners who already know basic Hindi–Urdu grammar, so begin with a first-year course if you need that foundation.", "open-hindi-urdu") },
      { type: "dictionary", title: "IndoWordNet / Hindi WordNet", url: "https://www.cfilt.iitb.ac.in/", level: "intermediate", description: cited("IIT Bombay groups Hindi word senses and links them to other Indian languages. Check a corpus before using a newly found synonym in conversation.", "iit-wordnet") },
      { type: "corpus", title: "IIT Bombay English–Hindi Parallel Corpus", url: "https://www.cfilt.iitb.ac.in/iitb_parallel/", level: "advanced", description: cited("A large sentence-aligned resource for studying translation correspondences, terminology, and patterns; parallel sentences are evidence, not a conversational phrasebook.", "iit-corpus") },
      { type: "book", title: "Discover Discomfort: How to Read and Write Any Language", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", level: "beginner", description: cited("A pragmatic guide to beginning a script, with Devanagari used to explain consonants, vowel signs, modifiers, and ligatures. Its time estimates are motivational heuristics, not proficiency guarantees.", "dd-read-write") },
      { type: "other", title: "Central Hindi Directorate publications", url: "https://chdpublication.education.gov.in/english/overview.php", level: "advanced", description: cited("Official dictionaries, terminology, correspondence courses, and publications illuminate the codified register; compare them with current spoken and editorial usage.", "chd") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Small words carry much of Hindi's conversational meaning: तो to can signal a consequence or change the topic, ही hī narrows focus, and भी bhī adds ‘also’ or ‘even.’ Pitch can turn अच्छा acchā from ‘good’ into acknowledgment or surprise. Longer synonyms mark different settings too: Persianate आज़ादी āzādī and Sanskrit-derived स्वतंत्रता svatantratā both mean ‘freedom,’ but a speaker chooses between them in a particular line, not from an automatic Hindi–Urdu rule.",
      "ut-hindi",
      "iit-wordnet",
      "wiki-hindustani"
    ),
    notableWords: [
      { term: "अच्छा", transliteration: "acchā", meaning: "good; okay; really?; I see", note: cited("Its dictionary adjective meaning is only the beginning. Length, pitch, and repetition turn acchā into acknowledgment, surprise, skepticism, transition, or agreement.", "ut-hindi") },
      { term: "जुगाड़", transliteration: "jugāṛ", meaning: "resourceful workaround; improvised arrangement", note: cited("A speaker may mean a clever solution or a temporary patch. Rekhta's dictionary records both the improvised device and the way of arranging one, so listen for approval or frustration in context.", "rekhta-jugaad") },
      { term: "तरबूज", transliteration: "tarbūj", meaning: "watermelon", note: cited("Hindi uses a Persian-derived word for watermelon. Discover Discomfort follows its relatives across several languages; the fruit shows how borrowing can travel farther than a political border.", "dd-watermelon", "platts-dictionary") },
      { term: "अपना", transliteration: "apnā", meaning: "one’s own; belonging to oneself/us", note: cited("A reflexive possessive that normally points back to the clause’s subject. It also carries warmth and belonging in phrases about ‘our own people’ or a place that feels one’s own.", "ut-grammar") },
      { term: "वाला", transliteration: "vālā", meaning: "one associated with; the … one; about to", note: cited("Extraordinarily productive: चायवाला cāyvālā ‘tea seller,’ लाल वाला lāl vālā ‘the red one,’ and जाने वाला jāne vālā ‘about to go / one who goes.’ Agreement changes to vālī/vāle.", "ut-grammar") },
      { term: "नज़ाकत", transliteration: "nazākat", meaning: "delicacy; elegance; subtle grace", note: cited("A Persian-Arabic literary word heard in aesthetic and social description. It illustrates the Urdu-facing vocabulary that remains part of cultivated Hindi worlds.", "wiki-hindustani") },
      { term: "संवाद", transliteration: "saṃvād", meaning: "dialogue; conversation; discourse", note: cited("A Sanskrit-derived term common in formal, theatrical, journalistic, and academic settings. Everyday conversation is more likely बातचीत bātcīt.", "chd") },
      { term: "कल", transliteration: "kal", meaning: "yesterday; tomorrow", note: cited("A compact reminder that context does semantic work: past or future verb forms resolve which adjacent day is intended.", "iit-wordnet") },
      { term: "ना", transliteration: "nā", meaning: "not; conversational tag/softener", note: cited("As negation it precedes or participates in constructions; phrase-final nā can invite agreement, urge, soften, or complain. The melody is part of the meaning.", "ut-hindi") }
    ],
    loanwordLayers: cited(
      "Hindi has inherited Indo-Aryan words, direct Sanskrit loans, and a large Persianate layer that includes words of Arabic origin. English adds words such as मीटिंग mīṭiṅg and फ़ोन fon; डाउनलोड करना ḍāunloḍ karnā shows how a speaker can put an English word into a Hindi verb pattern. Speakers choose among words by audience and topic, and they use Hindi grammar with borrowed words.",
      "wiki-hindi",
      "wiki-hindustani",
      "iit-corpus"
    ),
    idioms: [
      { original: "नाक में दम करना", transliteration: "nāk meṃ dam karnā", translation: "to pester someone relentlessly", note: "Literally ‘put breath in the nose’; often used when children, noise, or repeated demands have made life difficult." },
      { original: "आँखों का तारा", transliteration: "ā̃khoṃ kā tārā", translation: "the apple of someone’s eye", note: "Literally ‘star of the eyes’; an affectionate expression for a deeply cherished person, especially a child." },
      { original: "दाल में कुछ काला है", transliteration: "dāl meṃ kuch kālā hai", translation: "something is suspicious", note: "Literally ‘there is something black in the lentils’; a conversational way to say that a situation does not add up." },
      { original: "नौ दो ग्यारह होना", transliteration: "nau do gyārah honā", translation: "to run off; disappear quickly", note: "Literally ‘become nine-two-eleven.’ The origin is debated, so learn its playful colloquial use rather than a confident folk etymology." },
      { original: "एक पंथ दो काज", transliteration: "ek panth do kāj", translation: "to achieve two aims with one action", note: "Literally ‘one path, two tasks’; a less violent counterpart to English ‘kill two birds with one stone.’" }
    ],
    textGenres: [
      "Contemporary novels, short stories, memoirs, Dalit writing, criticism, and literary magazines",
      "Film dialogue, television serials, streaming drama, stand-up comedy, and unscripted interviews",
      "Bhakti poetry and performance in Braj, Awadhi, and related literary worlds",
      "Modern Hindi poetry, गीत gīt lyric traditions, and Hindi–Urdu film song",
      "News, reportage, essays, government prose, popular science, and digital explainers",
      "Roman and Devanagari social media mixing Hindi, Urdu vocabulary, English, emoji, and regional languages"
    ]
  },
  relationships: {
    overview: cited(
      "Hindi belongs to Indo-Aryan alongside Punjabi, Bengali, Marathi, Gujarati, Nepali, and many other languages; shared ancestry doesn't make them dialects of Hindi. Urdu has a closer relationship because its standard shares the Hindustani grammatical base with Standard Hindi, although the written traditions and identities differ. Persian and English have influenced Hindi through contact, while Braj, Awadhi, Bhojpuri, and other forms sometimes placed under a broad Hindi label have their own histories and community claims.",
      "glottolog-hindi",
      "columbia-hindi-urdu",
      "census-hindi"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Hindi does not stand in for India, so ask which language someone prefers when you have a choice. Sanskrit-derived and Persian-Arabic words cross communities, while greetings such as नमस्ते namaste, सलाम salām, आदाब ādāb, and local forms vary by relationship and setting. Cinema offers one vivid kind of Hindi; journalism, devotional song, comedy, rap, literature, and everyday messages show others.",
  resources: [
    { type: "course", title: "University of Texas Hindi resources", url: "https://hindi.la.utexas.edu/", level: "all", description: cited("Open, academically grounded materials covering script, pronunciation, grammar, conversation, interviews, literature, and Hindi–Urdu comparison.", "ut-hindi") },
    { type: "course", title: "Hindi–Urdu Open Textbook", url: "https://open.lib.umn.edu/hindiurdu/", level: "intermediate", description: cited("This free university course begins around intermediate level and connects grammar to dialogues, news, film, and written genres. Beginners should use its materials after a first-year course.", "open-hindi-urdu") },
    { type: "dictionary", title: "IIT Bombay IndoWordNet", url: "https://www.cfilt.iitb.ac.in/", level: "intermediate", description: cited("A Hindi-centered lexical network linked to other Indian-language wordnets; best used with corpus examples.", "iit-wordnet") },
    { type: "other", title: "Discover Discomfort script-learning guide", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", level: "beginner", description: cited("Explains Devanagari consonants, vowel signs, and joined letters through Hindi examples. Its suggested learning time is a personal estimate, so set your own pace with audio and reading.", "dd-read-write") },
    { type: "other", title: "Discover Discomfort: Watermelon word histories", url: "https://discoverdiscomfort.com/watermelons-etymological-groupings/", level: "intermediate", description: cited("Uses Hindi तरबूज tarbūj to trace a Persian-derived word across several languages. Read it beside a historical dictionary when you want to check a specific etymology.", "dd-watermelon", "platts-dictionary") },
    { type: "corpus", title: "IIT Bombay English–Hindi Parallel Corpus", url: "https://www.cfilt.iitb.ac.in/iitb_parallel/", level: "advanced", description: cited("Searchable/downloadable sentence pairs for investigating terminology and translation patterns.", "iit-corpus") },
    { type: "other", title: "Unicode Devanagari specification", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/", level: "advanced", description: cited("The technical reference for inherent vowels, virama, conjuncts, combining marks, character order, and digital rendering.", "unicode-devanagari") }
  ],
  relatedLanguages,
  phrases: [
    { original: "नमस्ते।", transliteration: "namaste.", translation: "Hello.", literalMeaning: "I bow to you.", usageNote: "Widely understood and polite, but not the only natural greeting; match the community and relationship." },
    { original: "आप कैसे हैं? / आप कैसी हैं?", transliteration: "āp kaise haĩ? / āp kaisī haĩ?", translation: "How are you?", usageNote: "Respectful. The adjective typically reflects the addressee’s gender: kaise for a man, kaisī for a woman." },
    { original: "मैं ठीक हूँ।", transliteration: "maĩ ṭhīk hū̃.", translation: "I’m fine.", usageNote: "Neutral, common reply; ṭhīk also means okay, correct, or settled." },
    { original: "शुक्रिया। / धन्यवाद।", transliteration: "shukriyā. / dhanyavād.", translation: "Thank you.", usageNote: "Both are standard. Shukriyā often feels conversational; dhanyavād may sound more formal, though region and speaker matter." },
    { original: "ज़रा फिर से कहिए।", transliteration: "zarā phir se kahie.", translation: "Please say that again.", literalMeaning: "Say it again a little, please.", usageNote: "Respectful request. Zarā softens it; kahie is honorific." },
    { original: "थोड़ा धीरे बोलिए।", transliteration: "thoṛā dhīre bolie.", translation: "Please speak a little more slowly.", usageNote: "Bolie is respectful; friends may use bolo." },
    { original: "मुझे समझ नहीं आया।", transliteration: "mujhe samajh nahī̃ āyā.", translation: "I didn’t understand.", usageNote: "A common conversational phrase. Ask what was meant after saying it rather than repeating louder." },
    { original: "इसका क्या मतलब है?", transliteration: "iskā kyā matlab hai?", translation: "What does this mean?", literalMeaning: "What is its meaning?", usageNote: "Ask about a word, sign, or situation in everyday speech." },
    { original: "मेरा नाम … है।", transliteration: "merā nām … hai.", translation: "My name is …", usageNote: "Merā agrees with masculine nām, regardless of the speaker’s gender." },
    { original: "आपसे मिलकर खुशी हुई।", transliteration: "āpse milkar khushī huī.", translation: "Pleased to meet you.", literalMeaning: "Happiness happened after meeting you.", usageNote: "Polite and natural after an introduction; formal but not stiff." },
    { original: "मुझे एक चाय चाहिए।", transliteration: "mujhe ek cāy cāhie.", translation: "I’d like/need a tea.", literalMeaning: "To me one tea is wanted.", usageNote: "Normal ordering phrase. Add कृपया kṛpyā in formal settings, but tone and context often do the politeness work." },
    { original: "कितने पैसे हुए?", transliteration: "kitne paise hue?", translation: "How much is it?", literalMeaning: "How much money did it come to?", usageNote: "Ask after a purchase; keep the full phrase together." },
    { original: "कोई बात नहीं।", transliteration: "koī bāt nahī̃.", translation: "No problem; never mind.", literalMeaning: "There is no matter/issue.", usageNote: "This can answer a small apology; a sharp tone may sound dismissive." },
    { original: "फिर मिलेंगे।", transliteration: "phir mileṅge.", translation: "See you again.", literalMeaning: "We will meet again.", usageNote: "Friendly neutral farewell; the plural form can include the listener or function politely." }
  ],
  sources: [
    { id: "dd-read-write", title: "How to Read and Write Any Language — A Quick Guide", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", publisher: "Discover Discomfort", publishedAt: "2018-09-07", accessedAt: "2026-09-27" },
    { id: "dd-watermelon", title: "Watermelons — Etymological Groupings", url: "https://discoverdiscomfort.com/watermelons-etymological-groupings/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", updatedAt: "2026-05-12", accessedAt: "2026-09-27" },
    { id: "dd-how-learn", title: "How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "wiki-hindi", title: "Hindi", url: "https://en.wikipedia.org/wiki/Hindi", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-hindustani", title: "Hindustani language", url: "https://en.wikipedia.org/wiki/Hindustani_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-hindustani-grammar", title: "Hindustani grammar", url: "https://en.wikipedia.org/wiki/Hindustani_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "census-hindi", title: "C-16: Population by Mother Tongue, India — 2011", url: "https://censusindia.gov.in/nada/index.php/catalog/10191", publisher: "Office of the Registrar General & Census Commissioner, India", publishedAt: "2022-07-04", accessedAt: "2026-09-27" },
    { id: "constitution-india", title: "Constitutional Provisions: Official Language", url: "https://rajbhasha.gov.in/en/constitutional-provisions", publisher: "Department of Official Language, Ministry of Home Affairs, Government of India", accessedAt: "2026-07-10" },
    { id: "chd", title: "Central Hindi Directorate: Overview and Publications", url: "https://chdpublication.education.gov.in/english/overview.php", publisher: "Ministry of Education, Government of India", accessedAt: "2026-07-10" },
    { id: "unicode-devanagari", title: "The Unicode Standard, Version 17.0, Chapter 12: Devanagari", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/", publisher: "Unicode Consortium", publishedAt: "2025", accessedAt: "2026-07-10" },
    { id: "ut-hindi", title: "Hindi at the University of Texas at Austin", url: "https://hindi.la.utexas.edu/", publisher: "University of Texas at Austin, Department of Asian Studies", accessedAt: "2026-09-27" },
    { id: "ut-grammar", title: "Hindi Grammar", url: "https://hindi.la.utexas.edu/resources/grammar/", publisher: "University of Texas at Austin, Department of Asian Studies", accessedAt: "2026-07-10" },
    { id: "columbia-hindi-urdu", title: "Hindi–Urdu Program: Frequently Asked Questions", url: "https://www.columbia.edu/cu/mesaas/languages/hindiurdu/", publisher: "Columbia University, MESAAS", accessedAt: "2026-09-27" },
    { id: "platts-dictionary", title: "A Dictionary of Urdu, Classical Hindi, and English", url: "https://dsal.uchicago.edu/dictionaries/platts/", publisher: "Digital South Asia Library, University of Chicago", publishedAt: "1884", accessedAt: "2026-09-27" },
    { id: "rekhta-jugaad", title: "Meaning of jugāṛ", url: "https://www.rekhtadictionary.com/meaning-of-jugaad", publisher: "Rekhta Dictionary", accessedAt: "2026-09-27" },
    { id: "open-hindi-urdu", title: "Hindi–Urdu Open Textbook", url: "https://open.lib.umn.edu/hindiurdu/", publisher: "University of Minnesota Libraries Publishing", accessedAt: "2026-07-10" },
    { id: "iit-wordnet", title: "IndoWordNet and Hindi WordNet", url: "https://www.cfilt.iitb.ac.in/", publisher: "Center for Indian Language Technology, IIT Bombay", accessedAt: "2026-07-10" },
    { id: "iit-corpus", title: "IIT Bombay English–Hindi Parallel Corpus", url: "https://www.cfilt.iitb.ac.in/iitb_parallel/", publisher: "Center for Indian Language Technology, IIT Bombay", accessedAt: "2026-07-10" },
    { id: "glottolog-hindi", title: "Glottolog: Hindi", url: "https://glottolog.org/resource/languoid/id/hind1269", publisher: "Glottolog", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Hindi Language Guide: Devanagari, Hindustani and Grammar",
    description: "Learn how Hindi works in conversation and formal writing. Explore Devanagari, pronunciation, grammar, regional speech, the Hindi–Urdu relationship, phrases, and learning resources."
  }
} satisfies LanguageGuide;
