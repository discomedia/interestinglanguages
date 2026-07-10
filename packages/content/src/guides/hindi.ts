import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Urdu",
    slug: "urdu",
    relationship: "Co-standard of the Hindi–Urdu/Hindustani continuum",
    explanation: cited(
      "Everyday Standard Hindi and Urdu share their central grammar and much ordinary vocabulary. Their institutional standards diverge most visibly in script—Devanagari for Hindi, Perso-Arabic Nastaliq for Urdu—and in the learned vocabulary favored at the formal end. A Hindi speaker may follow an Urdu conversation easily yet struggle with an Urdu newspaper, and the reverse can also be true. Treating either language as merely a costume worn by the other ignores distinct literary traditions and identities; treating them as unrelated hides their shared spoken architecture.",
      "uw-hindi-urdu",
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
    relationship: "Unrelated Iranian language with deep contact influence",
    explanation: cited(
      "Persian is a distant Indo-Iranian relative. Historically it served administration and literature in South Asia, contributing words and styles to Hindustani. Words such as ख़ुशी khushī ‘happiness’ and ज़रूरत zarūrat ‘need’ belong to this contact layer.",
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
  summary: "Hindi is a Devanagari-written standard of the Hindi–Urdu continuum: a language of intimate conversation, public life, migration, cinema, internet comedy, journalism, and literature whose real texture lies between tidy textbook labels.",
  family: "Indo-European, Indo-Aryan",
  macroRegion: "South Asia and global diasporas",
  primaryScript: "Devanagari",
  difficultyLabel: "Demanding",
  learnerHook: "Hindi gives learners immediate access to a huge contemporary media world, then keeps unfolding: everyday Hindustani, regionally colored speech, formal Sanskrit-derived prose, Urdu-inflected poetry and film dialogue, and the elegant logic of Devanagari.",
  hero: {
    imageAlt: "Hindi in Devanagari alongside contemporary conversation, books, and cinema.",
    callToActionLabel: "Explore Hindi in use"
  },
  classification: "A standardized Indo-Aryan register of the pluricentric Hindi–Urdu, or Hindustani, language continuum",
  speakerCommunity: "Hindi is a first language for many people across northern and central India, an additional language for millions elsewhere, and a heritage language in global diasporas. Census labels require care: India’s 2011 tables grouped numerous reported mother tongues under the scheduled-language heading Hindi, not one uniform home variety. In Delhi, Lucknow, Mumbai, Jaipur, Patna, or an online gaming chat, speech draws differently on local languages, Urdu, English, social styles, and media Hindi. The Constitution makes Hindi in Devanagari the official language of the Union; India does not thereby have a constitutionally declared ‘national language.’ Hindi coexists with English in Union work and with India’s many state and scheduled languages.",
  facts: [
    { label: "Family", value: "Indo-European · Indo-Iranian · Indo-Aryan" },
    { label: "Shared spoken base", value: "Hindi–Urdu / Hindustani" },
    { label: "Script", value: "Devanagari, written left to right" },
    { label: "2011 census", value: "Hindi heading grouped 528 million mother-tongue returns, including multiple varieties" },
    { label: "Union status", value: "Official language of the Union in Devanagari, alongside statutory use of English" },
    { label: "Typical word order", value: "Subject–object–verb, flexible for information structure" }
  ],
  learnerOverview: "Begin with the Hindi people around you actually use, not an imaginary choice between ‘pure Hindi’ and ‘slang.’ Learn Devanagari from the first week, pairing writing with audio: कमरा is written kamarā yet normally pronounced kamrā. Build around pronouns, postpositions, aspect, gender, and the light verbs जाना jānā ‘go’ and लेना lenā ‘take.’ Label register too. मदद madad and सहायता sahāyatā both mean ‘help,’ but a friend is likelier to ask for madad while sahāyatā suits formal notices. Keep Persian-Arabic words in your notebook: the shared Hindi–Urdu middle is enormous. Discover Discomfort’s method—learn the script, master ordinary interaction, then mine vocabulary from your life—fits Hindi. Cinema motivates, but dialogue is scripted and subtitles paraphrase, so add unscripted interviews and voice notes.",
  origins: {
    overview: cited(
      "Hindi is a modern Indo-Aryan language. Its ancestry runs through stages conventionally described as Old Indo-Aryan, Middle Indo-Aryan Prakrits and Apabhraṃśa traditions, and later vernaculars. Modern Standard Hindi is based chiefly on Khari Boli around Delhi and the upper Ganges–Yamuna region, but ‘Hindi’ has also labeled several North Indian traditions. Braj Bhasha and Awadhi supported major poetry before Khari Boli became the chief basis of modern prose. In multilingual cities and courts, local speech interacted with Persian, Arabic through Persian, Turkic varieties, and other South Asian languages. Hindustani became a wide lingua franca; later Hindi and Urdu institutions cultivated distinct scripts and high registers without creating separate grammars.",
      "wiki-hindi",
      "wiki-hindustani",
      "uw-hindi-urdu"
    ),
    timeline: [
      {
        period: "Before c. 1200",
        event: cited("North Indian vernaculars developed through centuries of Indo-Aryan change rather than descending directly from the grammar of Classical Sanskrit in a single jump. Sanskrit remained a prestigious learned language while Prakrit and Apabhraṃśa traditions, local speech, and regional literary forms evolved alongside it.", "wiki-hindi", "glottolog-hindi")
      },
      {
        period: "13th–17th centuries",
        event: cited("Contact around Delhi and wider North Indian networks fostered forms called by changing names such as Hindavi, Hindi, Dehlavi, and later Rekhta. Persian served important courtly and administrative roles, while vernacular devotional and literary work flourished in Braj, Awadhi, and other varieties. These labels never mapped neatly onto today’s nation, religion, and language boxes.", "wiki-hindustani", "ut-hindi")
      },
      {
        period: "18th–19th centuries",
        event: cited("Print, colonial education, grammars, dictionaries, and public debate helped sharpen Hindi and Urdu as separate institutional standards. Devanagari Hindi increasingly selected Sanskrit as a source for learned vocabulary, while Urdu maintained the Perso-Arabic script and cultivated Persian-Arabic resources. Ordinary Hindustani speech continued to cross the proposed boundary.", "wiki-hindustani", "uw-hindi-urdu")
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
      "Hindi vocabulary is layered. Inherited tadbhava words changed through Indo-Aryan history; tatsama words were borrowed more directly from Sanskrit; Persian and Arabic-through-Persian contributed daily words; Portuguese and English supplied further layers. A speaker may say समय samay or वक़्त vaqt for ‘time,’ पुस्तक pustak or किताब kitāb for ‘book,’ and मित्र mitra or दोस्त dost for ‘friend,’ with audience, collocation, and habit deciding more than a Hindi-versus-Urdu switch. Regional languages continuously feed Hindi too.",
      "wiki-hindi",
      "wiki-hindustani",
      "iit-wordnet"
    ),
    standardization: cited(
      "Modern Standard Hindi is codified for education, publishing, broadcasting, and government, with the Central Hindi Directorate among the bodies promoting terminology and orthographic norms. It is not identical to every person’s home speech, nor does one institution control every natural innovation. Highly Sanskritized official prose can be difficult even for fluent conversational speakers. At the other end, Roman-script Hindi and Hindi–English code-switching have conventions but no single spelling authority. Learners should regard the standard as a powerful shared literacy while treating colloquial and regional usage as structured language, not failed textbook Hindi.",
      "chd",
      "constitution-india",
      "ut-hindi"
    )
  },
  variants: {
    overview: cited(
      "‘Hindi’ can name the standard, a broad census category, or a wider belt of Indo-Aryan varieties. Standard Hindi is based on Khari Boli, while speech labeled Hindi may reflect Haryanvi, Rajasthani varieties, Bhojpuri, Magahi, Chhattisgarhi, Bundeli, Braj, Awadhi, Punjabi, Marathi, and others. Several have strong recognition as separate languages. Ask speakers what they call home speech and where they use Standard Hindi.",
      "census-hindi",
      "wiki-hindi",
      "glottolog-hindi"
    ),
    items: [
      { name: "Modern Standard Hindi", note: cited("The Devanagari-based norm used in schools, news, formal writing, and national institutions. Actual educated speech normally contains widely shared Persian-Arabic and English vocabulary that prescriptive lists may underrepresent.", "chd", "ut-hindi") },
      { name: "Colloquial Hindustani", note: cited("The broad shared conversational zone in which Hindi and Urdu are often highly mutually intelligible. It is not a perfectly neutral engineered language: speakers still have regional, religious, class, and personal styles.", "uw-hindi-urdu", "wiki-hindustani") },
      { name: "Bambaiya / Mumbai Hindi", note: cited("A family of urban styles shaped by Marathi, Gujarati, Konkani, Urdu, English, migration, cinema, and neighborhood identities. Film stereotypes capture only a narrow performance of a much richer multilingual city.", "wiki-hindi") },
      { name: "Braj and Awadhi", note: cited("Major literary languages or varieties with their own grammars and histories, associated with writers and performance traditions central to the broader history of ‘Hindi literature.’ They should not be reduced to quaint accents of the modern standard.", "ut-hindi", "glottolog-hindi") },
      { name: "Diaspora Hindi and Hindustani", note: cited("Heritage forms reflect different migrations and contact languages. Communities using names such as Fiji Hindi or Sarnami maintain norms not measured against Delhi speech.", "wiki-hindi", "census-hindi") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Hindi rewards attention to consonant contrasts. Stops are organized by place of articulation and by voicing and aspiration: क k, ख kh, ग g, घ gh form a four-way set. Dental त t and retroflex ट ṭ are different sounds, not decorative accents; the tongue touches the teeth for the dental and curls back for the retroflex. Vowel length and quality matter, nasalized vowels can distinguish words, and borrowed sounds written with nukta—such as ज़ z, फ़ f, ख़ x—vary by speaker and formality. Careful Hindi may preserve them; many speakers merge some with native sounds without communicating incorrectly.",
      "ut-hindi",
      "wiki-hindi"
    ),
    script: "Devanagari with learner-friendly transliteration; macrons mark long vowels and dots mark retroflex consonants",
    soundSystem: cited(
      "The writing system presents a highly organized consonant grid, but speech adds two crucial processes. First, the inherent vowel commonly transcribed a is a central schwa and is deleted in many positions: नमक namak ‘salt’ keeps both, while कमरा is kamrā, not kamarā. The rules are patterned but lexical and morphological knowledge helps. Second, English-speaking learners often replace aspiration with a consonant cluster or ignore it: पाल pāl ‘raise/support’ and फल phal ‘fruit’ begin differently. Hindi also contrasts tapped र r with retroflex flap ड़ ṛ, as in पढ़ paṛh ‘read.’ Learn whole recorded words, not Roman spellings alone.",
      "ut-hindi",
      "unicode-devanagari"
    ),
    prosody: cited(
      "Hindi stress is less dramatically contrastive than English stress, and rhythm depends strongly on syllable weight. English speakers often over-stress one syllable and reduce the others, obscuring Hindi vowels. Intonation carries politeness, surprise, insistence, and the difference between a neutral and echo question. The particle ना nā can soften a request, seek agreement, or add impatience depending on melody. Shadow complete clauses and preserve vowel length, aspiration, and phrase-final movement rather than chasing a single theatrical ‘Indian accent.’",
      "ut-hindi",
      "dd-how-learn"
    ),
    learnerTraps: [
      "Reading every written inherent vowel, producing kamarā instead of normal kamrā for कमरा",
      "Merging dental त/द with retroflex ट/ड or with English alveolar t/d",
      "Dropping aspiration in contrasts such as क k versus ख kh and ग g versus घ gh",
      "Pronouncingड़ ṛ as ordinary र r and missing words such as पढ़ना paṛhnā ‘to read’",
      "Assuming nukta loan sounds have one compulsory realization across every speaker and register"
    ],
    sampleWords: [
      { original: "कल", transliteration: "kal", translation: "yesterday; tomorrow", note: "The time reference comes from context; use the short vowel and an unaspirated k." },
      { original: "खाल", transliteration: "khāl", translation: "skin; hide", note: "Contrasts aspiration and the long ā with काल kāl ‘time/era/death.’" },
      { original: "ताल", transliteration: "tāl", translation: "rhythm; beat; pond (depending on etymology/context)", note: "The initial त is dental: the tongue touches the upper teeth." },
      { original: "टाल", transliteration: "ṭāl", translation: "postpone; avoid (imperative/stem)", note: "The initial ट is retroflex, contrasting with dental ताल tāl." },
      { original: "पढ़ना", transliteration: "paṛhnā", translation: "to read; to study", note: "Practice the retroflex flap ड़ and aspiration represented by the following ह." },
      { original: "माँ", transliteration: "mā̃", translation: "mother", note: "The chandrabindu marks vowel nasalization; keep the long vowel nasal rather than adding a full n." },
      { original: "कमरा", transliteration: "kamrā", translation: "room", note: "A useful schwa-deletion example: spelling-to-speech is not one letter at a time." }
    ]
  },
  writing: {
    overview: cited(
      "Devanagari is an abugida: each consonant letter normally includes an inherent vowel, while dependent vowel signs modify it and virama suppresses it. Thus क is ka, कि is ki, की is kī, and क् is k without the vowel. Consonant clusters can form conjuncts or half-forms, as in हिन्दी hindī and शक्ति shakti. The horizontal headline helps readers perceive units but is not a separate character joining an entire sentence. Unicode stores characters in logical order even when a vowel sign such as ि appears visually before its consonant: कि is encoded as क plus ि. Good fonts and shaping software perform the display work.",
      "unicode-devanagari",
      "dd-read-write"
    ),
    primaryScript: "Devanagari",
    romanization: cited(
      "Academic transliteration distinguishes long vowels (ā, ī, ū), retroflex consonants (ṭ, ḍ, ṛ), and nasalization. Everyday Roman Hindi usually does not: ‘kal,’ ‘kya,’ and ‘achha’ rely on shared knowledge, while long vowels and aspiration are inconsistently shown. Roman chat is real Hindi writing, but it is a poor sole teacher of pronunciation and blocks independent access to books, subtitles, signs, and dictionaries. Use it to communicate while steadily moving reading and flashcards into Devanagari.",
      "dd-read-write",
      "ut-hindi"
    ),
    spellingNorms: cited(
      "Hindi spelling is shallower than English but not perfectly phonetic. Schwa deletion is generally not written; anusvara ं may represent a homorganic nasal whose spoken place changes before the next consonant; chandrabinduँ commonly marks vowel nasalization; and nukta़ extends letters for contact sounds. Loan spelling and pronunciation can diverge: फ़िल्म film may retain फ़ f or be written and pronounced with फ ph/f depending on user and context. Modern prose mainly uses international punctuation, while the danda । remains visible in some formal and literary settings.",
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
      "Hindi grammar becomes coherent when learners stop translating English word by word. Nouns and pronouns change before postpositions; verbs build meanings from aspectual participles plus forms of होना honā ‘be’; agreement follows patterns that sometimes appear to ‘skip’ the subject; and compact light verbs color an event as completed, sudden, beneficial, regrettable, or directed. The neutral tendency is subject–object–verb, but constituents move for topic, focus, contrast, and rhythm. The examples use broadly standard colloquial Hindi rather than artificially Sanskritized prose.",
      "ut-grammar",
      "open-hindi-urdu"
    ),
    typologicalProfile: cited(
      "Hindi is a fusional Indo-Aryan language with two grammatical genders, direct and oblique noun forms, postpositions, adjective and verb agreement, and split ergative alignment. ‘Split ergative’ means that alignment changes in particular grammatical environments: in many perfective transitive clauses, the agent takes ने ne and the verb normally agrees with an unmarked object rather than that agent. Hindi also has honorific agreement and a three-way everyday address system—तू tū, तुम tum, आप āp—whose social meanings cannot be captured as singular/plural alone.",
      "ut-grammar",
      "wiki-hindustani-grammar"
    ),
    morphology: cited(
      "Nouns display modest inflection but interact constantly with postpositions. Masculine लड़का laṛkā ‘boy’ becomes लड़के laṛke before को ko, से se, or ने ne; feminine लड़की laṛkī stays visibly unchanged in many such contexts. Adjectives ending in -ā usually agree: अच्छा लड़का acchā laṛkā, अच्छी लड़की acchī laṛkī, अच्छे लड़के acche laṛke. Verbs are built from a stem plus participles and auxiliaries: करता है kartā hai ‘does/usually does,’ कर रहा है kar rahā hai ‘is doing,’ किया है kiyā hai ‘has done.’ Gender in these forms often reveals whose perspective grammar is tracking.",
      "ut-grammar",
      "open-hindi-urdu"
    ),
    syntax: cited(
      "Postpositions follow their complements: मेज़ पर mez par ‘on the table,’ दिल्ली से dillī se ‘from Delhi.’ Relative-correlative pairs often bracket a thought: जो…वह… jo…vah… ‘the one who…that one…’. Hindi can omit recoverable pronouns and the present copula in some headlines or styles, but ordinary finite clauses often retain auxiliaries. Word order is flexible, not free. मैंने उसे किताब दी mainẽ use kitāb dī is neutral ‘I gave her/him a book’; moving किताब kitāb can contrast the book with something else, while the verb strongly prefers its final zone.",
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
        example: "आप कहाँ से आए हैं? — āp kahā̃ se āe haĩ?",
        exampleTranslation: "Where have you come from? / Where are you from? The honorific pronoun takes plural āe haĩ."
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
      "Hindi has its densest first-language base across northern and central India and a broad additional-language presence through education, migration, government, trade, and media. The 2011 Census recorded 528,347,193 people under the Hindi scheduled-language heading, 43.63 percent of India’s population at that census, but the total aggregates many mother-tongue labels and should not be presented as half a billion speakers of identical Standard Hindi. Hindi also circulates in Nepal and South Asian borderlands, the Gulf labor and professional world, and large global diasporas. Local language politics matter: practical usefulness does not erase resistance to Hindi dominance or the rights of other languages.",
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
      "For an English-speaking learner, Hindi asks for a new script, unfamiliar consonant contrasts, grammatical gender, head-final sentence habits, and agreement patterns that shift in perfective clauses. Yet it offers unusually abundant rewards early: Devanagari is systematic, everyday morphology recurs constantly, and vast quantities of video and music make listening projects easy to personalize. The difficulty is uneven. Ordering tea may arrive quickly; following comic timing, reading a government notice, or catching a rural interview may feel like separate languages because register and region matter so much.",
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
      "A sustainable week might include three conversations, four short Devanagari readings, and daily listening loops. Transcribe thirty seconds, check it, shadow it, and reuse two phrases. Stay with one speaker or series long enough for pronunciation and vocabulary to stabilize. Discover Discomfort’s sentence-bank advice fits Hindi: save gender with nouns, aspect with verbs, and register with synonyms. Pair one conversational source with one formal source rather than waiting for literacy to appear by itself.",
      "dd-how-learn",
      "dd-read-write",
      "ut-hindi"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Organize study around domains rather than generic ‘fluency.’ For family conversation, collect kinship terms, habitual stories, teasing, and polite disagreement from relatives. For cinema, compare dialogue, subtitles, reviews, and interviews with the actors. For professional Hindi, gather real emails and presentations and ask which translated technical terms colleagues actually say. Keep a register ladder: everyday Hindustani in the center, more Sanskrit-derived institutional Hindi on one side, more Persian-Arabic literary Urdu on the other. Crossing it builds comprehension without turning vocabulary into communal stereotypes.",
      "ut-hindi",
      "uw-hindi-urdu",
      "dd-how-learn"
    ),
    mediaPractice: cited(
      "Use scenes first without subtitles to mark chunks, then with Hindi captions. Songs aid memory but bend word order, so confirm phrases in conversation. Newsreaders offer formal pronunciation; street interviews and podcasts reveal reductions, English mixing, honorifics, and regional rhythm. The University of Texas collections include dialogues, unscripted conversations, interviews, and a common Hindi–Urdu reader for comparing genres.",
      "ut-hindi",
      "dd-how-learn"
    ),
    dictionariesAndCorpora: cited(
      "Use a bilingual dictionary for speed, then verify meaning through a Hindi dictionary, IndoWordNet, and corpora. IIT Bombay’s language-technology resources include Hindi WordNet and English–Hindi parallel data; semantic groupings are useful for distinguishing near-synonyms, while parallel corpora show translation choices rather than guaranteed conversational equivalents. Search both Devanagari and Roman variants, and compare Hindi and Urdu spellings when tracing poetry or Persianate vocabulary. Save the full sentence and source date: frequency, genre, and collocation answer questions a one-word gloss cannot.",
      "iit-wordnet",
      "iit-corpus",
      "chd"
    ),
    resources: [
      { type: "course", title: "Hindi at the University of Texas at Austin", url: "https://hindi.la.utexas.edu/", level: "all", description: cited("An exceptional open collection: script and pronunciation lessons, grammar, first-year textbooks, dialogues, interviews, podcasts, worksheets, and a Hindi–Urdu common reader.", "ut-hindi") },
      { type: "course", title: "Hindi–Urdu Open Textbook", url: "https://open.lib.umn.edu/hindiurdu/", level: "beginner", description: cited("A free structured textbook with dialogues and grammar notes designed around the shared language while making script and register visible.", "open-hindi-urdu") },
      { type: "dictionary", title: "IndoWordNet / Hindi WordNet", url: "https://www.cfilt.iitb.ac.in/", level: "intermediate", description: cited("IIT Bombay’s linked lexical resource groups Hindi senses and connects wordnets across Indian languages; useful for synonym exploration after checking live usage.", "iit-wordnet") },
      { type: "corpus", title: "IIT Bombay English–Hindi Parallel Corpus", url: "https://www.cfilt.iitb.ac.in/iitb_parallel/", level: "advanced", description: cited("A large sentence-aligned resource for studying translation correspondences, terminology, and patterns; parallel sentences are evidence, not a conversational phrasebook.", "iit-corpus") },
      { type: "book", title: "Discover Discomfort: How to Read and Write Any Language", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", level: "beginner", description: cited("A pragmatic guide to beginning a script, with Devanagari used to explain consonants, vowel signs, modifiers, and ligatures. Its time estimates are motivational heuristics, not proficiency guarantees.", "dd-read-write") },
      { type: "other", title: "Central Hindi Directorate publications", url: "https://chdpublication.education.gov.in/english/overview.php", level: "advanced", description: cited("Official dictionaries, terminology, correspondence courses, and publications illuminate the codified register; compare them with current spoken and editorial usage.", "chd") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Hindi’s most revealing words are often tiny. तो to can mark consequence, contrast, or ‘as for…’; ही hī narrows focus to ‘only/precisely’; भी bhī adds ‘also/even’; अच्छा acchā can evaluate, acknowledge, discover, doubt, or close a topic. Their intonation organizes relationships. Longer words reveal historical layers: आज़ादी āzādī ‘freedom’ belongs to a Persianate layer, स्वतंत्रता svatantratā is Sanskrit-derived, and फ़्रीडम frīḍam may appear in English-mixed speech. They overlap without being interchangeable in every slogan, poem, or conversation. Learn the line in which a word does social work.",
      "ut-hindi",
      "iit-wordnet",
      "wiki-hindustani"
    ),
    notableWords: [
      { term: "अच्छा", transliteration: "acchā", meaning: "good; okay; really?; I see", note: cited("Its dictionary adjective meaning is only the beginning. Length, pitch, and repetition turn acchā into acknowledgment, surprise, skepticism, transition, or agreement.", "ut-hindi") },
      { term: "जुगाड़", transliteration: "jugāṛ", meaning: "resourceful workaround; improvised arrangement", note: cited("Often celebrated as ingenuity but also used critically for a patch that bypasses robust systems. Context determines whether it is admiration, realism, or complaint.", "iit-wordnet") },
      { term: "अपना", transliteration: "apnā", meaning: "one’s own; belonging to oneself/us", note: cited("A reflexive possessive that normally points back to the clause’s subject. It also carries warmth and belonging in phrases about ‘our own people’ or a place that feels one’s own.", "ut-grammar") },
      { term: "वाला", transliteration: "vālā", meaning: "one associated with; the … one; about to", note: cited("Extraordinarily productive: चायवाला cāyvālā ‘tea seller,’ लाल वाला lāl vālā ‘the red one,’ and जाने वाला jāne vālā ‘about to go / one who goes.’ Agreement changes to vālī/vāle.", "ut-grammar") },
      { term: "नज़ाकत", transliteration: "nazākat", meaning: "delicacy; elegance; subtle grace", note: cited("A Persian-Arabic literary word heard in aesthetic and social description. It illustrates the Urdu-facing vocabulary that remains part of cultivated Hindi worlds.", "wiki-hindustani") },
      { term: "संवाद", transliteration: "saṃvād", meaning: "dialogue; conversation; discourse", note: cited("A Sanskrit-derived term common in formal, theatrical, journalistic, and academic settings. Everyday conversation is more likely बातचीत bātcīt.", "chd") },
      { term: "कल", transliteration: "kal", meaning: "yesterday; tomorrow", note: cited("A compact reminder that context does semantic work: past or future verb forms resolve which adjacent day is intended.", "iit-wordnet") },
      { term: "ना", transliteration: "nā", meaning: "not; conversational tag/softener", note: cited("As negation it precedes or participates in constructions; phrase-final nā can invite agreement, urge, soften, or complain. The melody is part of the meaning.", "ut-hindi") }
    ],
    loanwordLayers: cited(
      "Hindi’s inherited core includes words transformed from earlier Indo-Aryan; direct Sanskrit reborrowings supply learned and institutional vocabulary. Persian provided a major layer, including Arabic words transmitted through Persianate culture, while Turkic and Portuguese contacts left smaller but familiar traces. English borrowing is now prolific: मीटिंग mīṭiṅg, फ़ोन fon, डाउनलोड ḍāunloḍ, and hybrid verbs such as डाउनलोड करना ḍāunloḍ karnā place an English noun or stem before Hindi ‘do.’ Borrowing is not grammatical decay. Speakers inflect and combine loans through Hindi patterns, and the choice among synonyms signals audience and domain.",
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
      "Hindi’s closest map is both genealogical and social. It belongs to Indo-Aryan alongside Urdu, Punjabi, Bengali, Marathi, Gujarati, Nepali, and many other languages, but shared ancestry does not make them dialects of Hindi. Urdu is a special case because Standard Hindi and Standard Urdu are widely analyzed as standardized registers of the same Hindi–Urdu/Hindustani grammatical base. Persian and English are contact languages, not close relatives. Braj, Awadhi, Bhojpuri, Rajasthani varieties, and other forms sometimes gathered beneath a broad Hindi label have their own literary and community claims. Classification should describe, not overrule, identity.",
      "glottolog-hindi",
      "uw-hindi-urdu",
      "census-hindi"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Hindi cannot stand in for India. Ask before switching to Hindi where another language is central, and never interpret reluctance as inability. Religion does not mechanically determine vocabulary: Sanskrit-derived and Persian-Arabic words circulate across communities. Namaste is useful but not universal; प्रणाम praṇām, नमस्कार namaskār, सलाम salām, आदाब ādāb, hello, kin terms, and local forms position speakers differently. Cinema is a spectacular archive, yet performance, television, devotional song, rap, journalism, memes, and literature reveal Hindi lives that ‘Bollywood Hindi’ cannot contain.",
  resources: [
    { type: "course", title: "University of Texas Hindi resources", url: "https://hindi.la.utexas.edu/", level: "all", description: cited("Open, academically grounded materials covering script, pronunciation, grammar, conversation, interviews, literature, and Hindi–Urdu comparison.", "ut-hindi") },
    { type: "course", title: "Hindi–Urdu Open Textbook", url: "https://open.lib.umn.edu/hindiurdu/", level: "beginner", description: cited("A structured free course that keeps shared grammar and real dialogue in view.", "open-hindi-urdu") },
    { type: "dictionary", title: "IIT Bombay IndoWordNet", url: "https://www.cfilt.iitb.ac.in/", level: "intermediate", description: cited("A Hindi-centered lexical network linked to other Indian-language wordnets; best used with corpus examples.", "iit-wordnet") },
    { type: "other", title: "Discover Discomfort script-learning guide", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", level: "beginner", description: cited("A motivating overview of how Devanagari combines consonants, vowel signs, modifiers, and ligatures, plus a practical case for learning the script early.", "dd-read-write") },
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
    { original: "थोड़ा धीरे बोलिए।", transliteration: "thoṛā dhīre bolie.", translation: "Please speak a little more slowly.", usageNote: "Polite and useful. Bolie is respectful; friends may use bolo." },
    { original: "मुझे समझ नहीं आया। / आई।", transliteration: "mujhe samajh nahī̃ āyā / āī.", translation: "I didn’t understand.", literalMeaning: "Understanding did not come to me.", usageNote: "Āyā agrees with masculine samajh in common usage; āī is also heard when understanding is conceptualized differently or in regional usage. सरल ‘मैं समझा नहीं’ varies by speaker gender." },
    { original: "इसका क्या मतलब है?", transliteration: "iskā kyā matlab hai?", translation: "What does this mean?", literalMeaning: "What is its meaning?", usageNote: "Everyday Hindustani and useful for words, signs, or situations." },
    { original: "मेरा नाम … है।", transliteration: "merā nām … hai.", translation: "My name is …", usageNote: "Merā agrees with masculine nām, regardless of the speaker’s gender." },
    { original: "आपसे मिलकर खुशी हुई।", transliteration: "āpse milkar khushī huī.", translation: "Pleased to meet you.", literalMeaning: "Happiness happened after meeting you.", usageNote: "Polite and natural after an introduction; formal but not stiff." },
    { original: "मुझे एक चाय चाहिए।", transliteration: "mujhe ek cāy cāhie.", translation: "I’d like/need a tea.", literalMeaning: "To me one tea is wanted.", usageNote: "Normal ordering phrase. Add कृपया kṛpyā in formal settings, but tone and context often do the politeness work." },
    { original: "कितने पैसे हुए?", transliteration: "kitne paise hue?", translation: "How much is it?", literalMeaning: "How many rupees/money did it come to?", usageNote: "Common after a purchase; क्या हुआ? means something quite different, so learn the whole phrase." },
    { original: "कोई बात नहीं।", transliteration: "koī bāt nahī̃.", translation: "No problem; never mind.", literalMeaning: "There is no matter/issue.", usageNote: "Useful response to a small apology or inconvenience; intonation can also make it dismissive." },
    { original: "फिर मिलेंगे।", transliteration: "phir mileṅge.", translation: "See you again.", literalMeaning: "We will meet again.", usageNote: "Friendly neutral farewell; the plural form can include the listener or function politely." }
  ],
  sources: [
    { id: "dd-read-write", title: "How to Read and Write Any Language — A Quick Guide", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", publisher: "Discover Discomfort", publishedAt: "2018-09-07", accessedAt: "2026-07-10" },
    { id: "dd-how-learn", title: "How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "wiki-hindi", title: "Hindi", url: "https://en.wikipedia.org/wiki/Hindi", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-hindustani", title: "Hindustani language", url: "https://en.wikipedia.org/wiki/Hindustani_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-hindustani-grammar", title: "Hindustani grammar", url: "https://en.wikipedia.org/wiki/Hindustani_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "census-hindi", title: "C-16: Population by Mother Tongue, India — 2011", url: "https://censusindia.gov.in/nada/index.php/catalog/10191", publisher: "Office of the Registrar General & Census Commissioner, India", publishedAt: "2011", accessedAt: "2026-07-10" },
    { id: "constitution-india", title: "Constitutional Provisions: Official Language", url: "https://rajbhasha.gov.in/en/constitutional-provisions", publisher: "Department of Official Language, Ministry of Home Affairs, Government of India", accessedAt: "2026-07-10" },
    { id: "chd", title: "Central Hindi Directorate: Overview and Publications", url: "https://chdpublication.education.gov.in/english/overview.php", publisher: "Ministry of Education, Government of India", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "unicode-devanagari", title: "The Unicode Standard, Version 17.0, Chapter 12: Devanagari", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/", publisher: "Unicode Consortium", publishedAt: "2025", accessedAt: "2026-07-10" },
    { id: "ut-hindi", title: "Hindi at the University of Texas at Austin", url: "https://hindi.la.utexas.edu/", publisher: "University of Texas at Austin, Department of Asian Studies", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "ut-grammar", title: "Hindi Grammar", url: "https://hindi.la.utexas.edu/resources/grammar/", publisher: "University of Texas at Austin, Department of Asian Studies", accessedAt: "2026-07-10" },
    { id: "uw-hindi-urdu", title: "Hindi–Urdu", url: "https://alc.wisc.edu/languages/hindi-urdu/", publisher: "University of Wisconsin–Madison, Asian Languages and Cultures", accessedAt: "2026-07-10" },
    { id: "open-hindi-urdu", title: "Hindi–Urdu Open Textbook", url: "https://open.lib.umn.edu/hindiurdu/", publisher: "University of Minnesota Libraries Publishing", accessedAt: "2026-07-10" },
    { id: "iit-wordnet", title: "IndoWordNet and Hindi WordNet", url: "https://www.cfilt.iitb.ac.in/", publisher: "Center for Indian Language Technology, IIT Bombay", accessedAt: "2026-07-10" },
    { id: "iit-corpus", title: "IIT Bombay English–Hindi Parallel Corpus", url: "https://www.cfilt.iitb.ac.in/iitb_parallel/", publisher: "Center for Indian Language Technology, IIT Bombay", accessedAt: "2026-07-10" },
    { id: "glottolog-hindi", title: "Glottolog: Hindi", url: "https://glottolog.org/resource/languoid/id/hind1269", publisher: "Glottolog", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Hindi Language Guide: Devanagari, Hindustani and Grammar",
    description: "A deeply researched guide to Hindi, Hindustani and Urdu relationships, Devanagari, pronunciation, grammar, regional speech, culture, useful phrases, and modern learning resources."
  }
} satisfies LanguageGuide;
