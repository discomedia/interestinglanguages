import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Hindi",
    slug: "hindi",
    relationship: "The other standardized register of Hindustani",
    explanation: cited(
      "At conversational level, standard Urdu and standard Hindi share the grammar and much of the everyday vocabulary of Hindustani. A Lahore speaker and a Delhi speaker can often converse without treating the exchange as translation. The standards diverge most visibly in script and in cultivated vocabulary: Urdu normally uses Nastaliq and reaches toward Persian and Arabic for formal words, while Hindi uses Devanagari and often reaches toward Sanskrit. Films, songs, jokes, and ordinary talk occupy a broad middle ground.",
      "wiki-hindustani",
      "wiki-urdu"
    )
  },
  {
    name: "Punjabi",
    relationship: "Closely related Indo-Aryan neighbor in sustained contact",
    explanation: cited(
      "Punjabi and Urdu belong to the Indo-Aryan branch and coexist throughout Pakistan and northern India. Many Pakistanis use Punjabi at home and Urdu in education, media, or cross-regional conversation, so influence runs through accent, idiom, and code-switching. They remain distinct languages: Punjabi has its own sound patterns, grammar, literary histories, and Shahmukhi and Gurmukhi writing traditions.",
      "glottolog-urdu",
      "pbs-census"
    )
  },
  {
    name: "Persian",
    slug: "persian",
    relationship: "Unrelated Iranian language with foundational literary influence",
    explanation: cited(
      "Persian is Indo-Iranian but not Indo-Aryan, so it is not Urdu's close sister. Its influence came through Persianate administration, education, poetry, and courtly culture. Urdu adopted a Perso-Arabic alphabet, the izafat linking construction, poetic genres, and a large learned vocabulary, yet kept Indo-Aryan sentence structure. Similar-looking pages therefore contain genuine shared words without becoming mutually intelligible prose.",
      "dd-persian-arabic",
      "wiki-urdu"
    )
  },
  {
    name: "Arabic",
    slug: "arabic",
    relationship: "Semitic source language for learned and religious vocabulary",
    explanation: cited(
      "Arabic is not genealogically related to Urdu. Much Arabic vocabulary reached Urdu through Persian, while religious scholarship also supported direct borrowing. Urdu reshapes borrowed words within its own pronunciation and grammar: Arabic-origin کتاب kitāb ‘book’ takes Urdu postpositions and plural patterns. Knowing the Arabic alphabet helps only partly because Urdu adds letters, assigns some symbols different values, and is conventionally set in Nastaliq rather than Arabic Naskh.",
      "dd-arabic-facts",
      "unicode-arabic",
      "wiki-urdu"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const urduGuide = {
  slug: "urdu",
  name: "Urdu",
  autonym: "اُردُو",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Urdu is a South Asian language of conversation, cinema, journalism, lyric poetry, and digital life: grammatically close to Hindi, written in flowing Nastaliq, and shaped by centuries of exchange among Indic, Persian, Arabic, and English worlds.",
  family: "Indo-European, Indo-Aryan",
  macroRegion: "South Asia",
  primaryScript: "Nastaliq Perso-Arabic script",
  difficultyLabel: "Demanding",
  learnerHook: "Urdu lets a learner move from widely understood Hindustani conversation into a remarkably layered written culture, where the shape of a line, the social weight of a pronoun, and the double meaning of a poetic word all matter.",
  hero: {
    imageAlt: "Urdu in flowing Nastaliq beside contemporary printed and digital text.",
    callToActionLabel: "Explore Urdu in use"
  },
  classification: "Perso-Arabic-script standard of the Hindustani continuum",
  speakerCommunity: "Urdu is Pakistan's national language and a bridge among people whose home languages include Punjabi, Pashto, Sindhi, Saraiki, and Balochi. Pakistan's 2023 census recorded Urdu as the mother tongue of 9.25 percent, so national reach does not mean majority first-language status. In India, Urdu is constitutionally recognized and sustains communities, schools, publishing, performance, and public use. It is also heard across diasporas in the Gulf, Britain, North America, Australia, and elsewhere. Speakers may call shared speech Urdu, Hindi, or Hindustani according to place, education, family, and identity; no one community owns the common language.",
  facts: [
    { label: "Family", value: "Indo-European · Indo-Iranian · Indo-Aryan" },
    { label: "Shared speech base", value: "Hindustani / Hindi–Urdu" },
    { label: "Pakistan", value: "National language; 9.25% reported it as mother tongue in the 2023 census" },
    { label: "India", value: "One of 22 languages recognized in the Eighth Schedule" },
    { label: "Script", value: "Right-to-left Perso-Arabic alphabet, normally in Nastaliq style" },
    { label: "Literary touchstones", value: "Ghazal, nazm, short story, novel, criticism, journalism, film song, and dramatic dialogue" }
  ],
  learnerOverview: "Begin with the language people actually use around you. Heritage speakers, poetry readers, and film enthusiasts need different first word lists, but all benefit from pairing sound and script from week one. Learn reusable Hindustani sentences; notice whether a source says tum or āp; and copy Nastaliq daily. Do not postpone the script until you are ‘fluent’: Roman Urdu is useful but inconsistent, hiding spelling families and the visual memory needed for dictionaries. Do not imitate a nineteenth-century ghazal at the tea shop either. Label material as conversational, formal, journalistic, or poetic. Progress becomes visible when registers connect: a plain verb in an interview, an Arabic-origin noun in an editorial, and a Persian image in a song can inhabit the same grammatical frame.",
  origins: {
    overview: cited(
      "Urdu's grammar descends from Indo-Aryan speech. Its immediate story belongs to the multilingual cities, military settlements, markets, shrines, and courts of North India and the Deccan. Local speech interacted with Persian, the prestige language of administration and high culture under several dynasties, and with Arabic and Turkic vocabularies carried through religion and learning. Names such as Hindavi, Hindi, Dehlavi, Dakhini, Rekhta, Hindustani, and Urdu appeared in different periods and contexts; they should not be forced into today's national boxes. A recognizable Urdu literary standard emerged gradually from this field rather than on a single birthday.",
      "wiki-urdu",
      "wiki-hindustani",
      "uchicago-urdu"
    ),
    timeline: [
      {
        period: "13th–16th centuries",
        event: cited(
          "Vernacular Indo-Aryan speech in and around Delhi circulated within a Persianate cultural world. Writers used several labels for related vernaculars, and multilingual composition crossed boundaries that later histories sometimes present as fixed. Persian supplied prestige vocabulary and literary models without replacing the language's Indo-Aryan grammatical base.",
          "wiki-urdu",
          "wiki-hindustani"
        )
      },
      {
        period: "15th–18th centuries",
        event: cited(
          "Dakhini literature flourished in the Deccan, while the mixed poetic idiom often called Rekhta gained increasing prestige in northern centers. The ghazal adapted a Persian form to South Asian linguistic and imaginative settings. Delhi and later Lucknow became famous nodes, but neither city exhausts the language's history.",
          "wiki-urdu",
          "columbia-ghazal"
        )
      },
      {
        period: "18th–19th centuries",
        event: cited(
          "The name Urdu became increasingly established for a literary standard. Poets including Mir and Ghalib worked within a sophisticated ghazal culture, while prose expanded through religious writing, translation, education, printing, journalism, and new genres. Colonial institutions helped codify both Hindi and Urdu, often sharpening script and vocabulary distinctions that had once been more fluid.",
          "wiki-urdu",
          "columbia-ghazal"
        )
      },
      {
        period: "Late 19th century–1947",
        event: cited(
          "Language became entangled with education, religion, and nationalism. Campaigns for Urdu in Perso-Arabic script and Hindi in Devanagari converted a flexible continuum into competing public standards. Yet theatre, song, publishing, and everyday conversation continued to cross that line.",
          "wiki-hindustani",
          "wiki-urdu"
        )
      },
      {
        period: "1947 to the digital present",
        event: cited(
          "Pakistan adopted Urdu as the national language even though most citizens had another mother tongue; India retained Urdu as a scheduled language with regional official uses. Migration remade literary centers in Karachi, Lahore, Delhi, Hyderabad, Lucknow, and the diaspora. Television and film carried shared Hindustani widely, while texting encouraged Roman Urdu. Current type designers, corpus builders, archives, and platforms are making searchable Nastaliq text easier to create and study.",
          "nlpd-pakistan",
          "pbs-census",
          "unicode-arabic",
          "rekhta-dictionary"
        )
      }
    ],
    contactHistory: cited(
      "Urdu's vocabulary is layered, but layers are not separate boxes. Core items such as پانی pānī ‘water,’ آنا ānā ‘to come,’ and دل dil ‘heart’ sit beside Persian words, Arabic words often transmitted through Persian, Turkic traces, regional borrowings, Portuguese-era items, and modern English. Borrowing changes sound and behavior: an Arabic plural may survive in formal writing while an Urdu plural is common elsewhere. Persian contributed the izafat linker and a treasury of compounds and images. English now supplies institutional and technical terms, especially in Pakistan's bilingual professional life. Speakers choose among near-synonyms to position a sentence as intimate, bureaucratic, comic, poetic, religious, or deliberately plain.",
      "wiki-urdu",
      "platts-dictionary",
      "dd-persian-arabic"
    ),
    standardization: cited(
      "Standard Urdu is taught through a relatively stable grammar and Perso-Arabic orthography, but no academy controls every utterance. Pakistan's National Language Promotion Department develops terminology and supports official use; publishers, broadcasters, schools, dictionaries, and literary institutions also shape norms. Pronunciation models may preserve the loan consonants q, x, ɣ, and f more carefully than everyday regional speech. In India and Pakistan alike, a highly Persianized address and relaxed conversation can sound dramatically different while remaining Urdu. ‘Pure Urdu’ is therefore better understood as a social and stylistic project than as a contact-free historical language.",
      "nlpd-pakistan",
      "wiki-urdu",
      "uchicago-urdu"
    )
  },
  variants: {
    overview: cited(
      "Variation follows region, first language, education, generation, genre, and audience. A Punjabi-speaking Lahori, a Muhajir family in Karachi, an Old Delhi household, and a Dakhini speaker from Hyderabad may all identify their speech as Urdu while differing in rhythm and vocabulary. One person may use colloquial Hindustani with friends, a Persianized literary register, and English-heavy professional speech at work. These are social resources, not signs of incomplete competence.",
      "pbs-census",
      "wiki-urdu",
      "wiki-hindustani"
    ),
    items: [
      {
        name: "Standard Pakistani Urdu",
        note: cited(
          "The school, publishing, news, and national public norm in Pakistan. It is widely used as an additional language, so regional accents and code-switching are normal parts of its life. Formal vocabulary can be markedly Persian-Arabic, while ordinary broadcasts often remain broadly accessible.",
          "nlpd-pakistan",
          "pbs-census"
        )
      },
      {
        name: "Indian Urdu",
        note: cited(
          "A standard with major historical centers including Delhi, Lucknow, Hyderabad, and Aligarh and living use across several states. It shares the standard literary tradition while local speech reflects neighboring Hindi, Dakhini, Punjabi, Kashmiri, Bengali, Marathi, and other ecologies.",
          "uchicago-urdu",
          "wiki-urdu"
        )
      },
      {
        name: "Dakhini",
        note: cited(
          "A southern Indo-Aryan variety with a centuries-old literary history and contemporary speech communities, especially around Hyderabad and elsewhere in the Deccan. Treating it merely as ‘incorrect northern Urdu’ erases its own grammar, vocabulary, and cultural archive.",
          "wiki-urdu",
          "uchicago-urdu"
        )
      },
      {
        name: "Colloquial Hindustani",
        note: cited(
          "The large shared conversational zone in which many Urdu and Hindi speakers communicate with little difficulty. Boundaries become clearer when the script is visible or the topic demands formal, religious, legal, or literary vocabulary. Cinema dialogue and songs often work inside this shared zone.",
          "wiki-hindustani",
          "wiki-hindustani-grammar"
        )
      },
      {
        name: "Roman Urdu and digitally mixed Urdu",
        note: cited(
          "Latin-script Urdu is ubiquitous in messages, search, advertising, and diaspora conversation, frequently mixed with English. It has no single spelling norm: مجھے might appear as mujhe, mjhe, or mughe. That flexibility makes it immediate for conversation but poor as the only route to precise pronunciation, dictionary use, and literature.",
          "unicode-arabic",
          "rekhta-dictionary"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Urdu's sound system is fundamentally Indo-Aryan. Learners meet dental and retroflex consonants, unaspirated and aspirated stops, vowel length, and nasalized vowels. A dental ت t is made with the tongue near the upper teeth; retroflex ٹ ṭ curls the tongue tip back, producing a separate category rather than an emphatic version of English t. Aspiration distinguishes pairs such as پال pāl ‘raise’ and پھال phāl in forms where a breathy release belongs to the consonant. Persian-Arabic loans add sounds written ق q, خ x/kh, غ ġ/gh, ژ zh, and ف f, but many speakers merge some of them with k, kh, g, z, or ph according to region and formality.",
      "wiki-urdu",
      "wiki-hindustani-grammar"
    ),
    script: "Urdu Nastaliq; transliteration here marks retroflexion with dots and long vowels with macrons",
    soundSystem: cited(
      "Vowel length distinguishes meaning, and vowel quality matters as much as spelling. Nasalization, shown by final ں or contextual marks, can distinguish forms and contributes strongly to the sound of songs and poetry. Urdu also preserves a four-way stop contrast typical of Indo-Aryan descriptions: voiceless unaspirated k, voiceless aspirated kh, voiced g, and voiced breathy gh. In transliteration, kh may unfortunately represent either aspirated کھ or the velar fricative خ; always learn the Urdu spelling. Double consonants in careful words such as محبت muḥabbat are also worth hearing rather than flattening.",
      "wiki-hindustani-grammar",
      "wiki-urdu"
    ),
    prosody: cited(
      "Stress is less dominant than in English and does not carry the whole identity of a word. Syllable weight helps place prominence, but naturalness depends on phrase rhythm, vowel length, and intonation. Questions need not copy an English rise, and respectful requests often unfold over a longer melodic phrase. Poetry adds meters inherited and adapted through Persian prosody, while film song may stretch vowels for music. Shadow whole clauses from one speaker before trying to manufacture a generalized ‘Urdu accent.’",
      "columbia-ghazal",
      "columbia-modules"
    ),
    learnerTraps: [
      "Reading every ت / ٹ and د / ڈ pair as the same English sound",
      "Confusing aspirated consonants such as کھ with fricatives such as خ because both may be romanized kh",
      "Guessing omitted short vowels from the script without checking a recording or dictionary",
      "Over-pronouncing q, gh, and zh in casual speech, or erasing them when reading a careful formal text",
      "Using English-style heavy stress while shortening Urdu long vowels"
    ],
    sampleWords: [
      { original: "تال", transliteration: "tāl", translation: "rhythm / beat", note: "Dental t: the tongue approaches the teeth." },
      { original: "ٹال", transliteration: "ṭāl", translation: "postpone", note: "Retroflex ṭ contrasts with dental t." },
      { original: "پَل", transliteration: "pal", translation: "moment", note: "Short a and unaspirated p." },
      { original: "پھل", transliteration: "phal", translation: "fruit", note: "The added breath belongs to aspirated ph." },
      { original: "کَل", transliteration: "kal", translation: "yesterday or tomorrow", note: "Context resolves the famous time-direction ambiguity." },
      { original: "خال", transliteration: "xāl / khāl", translation: "mole; maternal aunt in some compounds", note: "خ is a back fricative, not aspirated ک." },
      { original: "میں", transliteration: "maiṅ", translation: "I", note: "The vowel is nasalized; compare postposition میں meṅ ‘in’." },
      { original: "قلم", transliteration: "qalam", translation: "pen", note: "Careful q may merge toward k in some everyday accents." }
    ]
  },
  writing: {
    overview: cited(
      "Urdu is written right to left in an extended Perso-Arabic alphabet, conventionally using the diagonal, cascading Nastaliq style. Letters change shape according to position, and some do not connect to the following letter. Urdu adds or specializes letters for Indo-Aryan contrasts, including ٹ ṭ, ڈ ḍ, ڑ ṛ, aspirated digraphs with ھ, and nasal ں. Short vowels are usually omitted, so a reader identifies a word from consonants, long-vowel letters, grammar, and context. This is not simply ‘Arabic writing’: shared Unicode characters coexist with Urdu spelling, letter inventory, joining behavior, and typography.",
      "unicode-arabic",
      "unicode-chapter9",
      "wiki-urdu"
    ),
    primaryScript: "Perso-Arabic alphabet in Nastaliq style",
    romanization: cited(
      "Roman Urdu is a living digital practice rather than one standardized transliteration. It is excellent for a quick message but ambiguous for learners: kal can represent کل, while kh can hide کھ or خ. A marked system such as the one in this guide clarifies long vowels and retroflex consonants, but real users rarely type macrons and dots. Use romanization to find the sound, then store the word in Urdu script with audio.",
      "unicode-arabic",
      "rekhta-dictionary"
    ),
    spellingNorms: cited(
      "Spelling preserves etymological distinctions that everyday pronunciation may merge. Several Arabic letters can represent z-like sounds, and words of Arabic or Persian origin retain their conventional forms. The two h-like letters ہ and ح, several y and he forms, izafat, hamza, and aspiration demand attention. Unicode encodes characters, not a separate Nastaliq alphabet: shaping software and a suitable font create the style. Learners should type underlying characters rather than copy compatibility presentation forms, then verify that a search can find the result.",
      "unicode-arabic",
      "unicode-chapter9",
      "nlpd-pakistan"
    ),
    styleNotes: [
      cited(
        "Nastaliq's diagonal flow makes word silhouettes less linear than Naskh. Start with frequent whole words—ہے hai, نہیں nahīṅ, میں maiṅ/meṅ—while still learning how each letter joins.",
        "unicode-arabic"
      ),
      cited(
        "Vowel marks are useful in primers, dictionaries, sacred quotation, and ambiguous names but absent from most ordinary prose. Add a recording or transliteration to beginner cards instead of inventing vowels from appearance.",
        "platts-dictionary",
        "rekhta-dictionary"
      ),
      cited(
        "A beautiful font is not cosmetic for sustained Urdu reading: poor line height or inappropriate Naskh can make familiar words feel foreign. Test text selection, search, and copy-paste as well as visual appearance.",
        "unicode-chapter9"
      )
    ]
  },
  grammar: {
    overview: cited(
      "Urdu grammar is essentially Hindustani grammar. It uses postpositions after nouns, usually places the verb at the end of a neutral clause, marks two grammatical genders, and builds tense and aspect with participles plus forms of ہونا honā ‘to be.’ Nouns and pronouns change into an oblique form before many postpositions. Perfective transitive clauses can show ergative alignment: the agent takes نے ne and agreement behaves differently from a simple present sentence. None of these structures comes from Persian or Arabic, despite the script and large loan vocabulary.",
      "wiki-hindustani-grammar",
      "wiki-hindustani",
      "wiki-urdu"
    ),
    typologicalProfile: cited(
      "A neutral Urdu clause is subject–object–verb, but constituents can move for topic, focus, contrast, and style because case markers and agreement preserve relationships. Urdu is partly inflectional and strongly periphrastic: small changes on nouns, adjectives, participles, and auxiliaries work together. Gender is grammatical, not a claim about a thing's natural sex, and polite agreement may be plural. Learn each pattern as a complete sentence with a speaker and context.",
      "wiki-hindustani-grammar"
    ),
    morphology: cited(
      "Many masculine nouns in -ā alternate between direct singular لڑکا laṛkā, oblique singular لڑکے laṛke, and plural forms; feminine patterns differ. Adjectives such as اچھا acchā ‘good’ agree when they are declinable, while many borrowed adjectives do not. Verbs combine a stem with aspectual forms—کرتا kartā ‘doing/habitual,’ کیا kiyā ‘done’—and auxiliaries. Productive causatives, compound verbs, and noun–verb predicates make word formation rich without requiring Arabic root-and-pattern morphology.",
      "wiki-hindustani-grammar",
      "platts-dictionary"
    ),
    syntax: cited(
      "Postpositions do work that English often assigns to prepositions: گھر میں ghar meṅ ‘house in’ means ‘in the house.’ Relative-correlative pairs connect جو jo ‘who/which’ with وہ voh ‘that one.’ Negation normally uses نہیں nahīṅ, while نہ na appears in prohibitions, wishes, and subordinate patterns. Because the verb often arrives late, advanced listening improves when learners hold the topic and case-marked participants in memory rather than translating word by word.",
      "wiki-hindustani-grammar"
    ),
    advancedPainPoints: [
      "Predicting noun gender and maintaining agreement across a long phrase",
      "Applying perfective ergativity without treating ne as a universal past-tense marker",
      "Choosing plain, respectful, or intimate pronouns and verb forms consistently",
      "Understanding compound-verb nuance rather than translating both verbs literally",
      "Reading izafat and highly Persianized noun phrases that omit familiar Hindustani cues"
    ],
    topics: [
      {
        title: "Gender and agreement",
        body: cited(
          "Urdu has masculine and feminine grammatical gender. Adjectives and participles that can inflect agree with the relevant noun, and the copula agrees for number or honorificity. Gender must be learned with a noun: کتاب kitāb ‘book’ is feminine, despite having no transparent final marker.",
          "wiki-hindustani-grammar"
        ),
        example: "یہ نئی کتاب بہت اچھی ہے۔ yeh naī kitāb bahut acchī hai.",
        exampleTranslation: "This new book is very good. (naī and acchī are feminine singular.)"
      },
      {
        title: "Postpositions and the oblique case",
        body: cited(
          "A noun or pronoun commonly takes an oblique form before a postposition. Thus لڑکا laṛkā ‘boy’ becomes لڑکے laṛke before کے ساتھ ke sāth ‘with.’ Pronouns have special forms such as مجھ mujh and ہم ham in postpositional phrases.",
          "wiki-hindustani-grammar"
        ),
        example: "میں لڑکے کے ساتھ بازار جا رہی ہوں۔ maiṅ laṛke ke sāth bāzār jā rahī hūṅ.",
        exampleTranslation: "I (female speaker) am going to the market with the boy."
      },
      {
        title: "Habitual, progressive, and perfective aspect",
        body: cited(
          "Urdu distinguishes how an event unfolds. The habitual participle presents a regular pattern, رہنا rahnā helps form a progressive, and the perfective presents a bounded whole. Auxiliaries then locate that aspect in time. English tense labels alone obscure this architecture.",
          "wiki-hindustani-grammar"
        ),
        example: "وہ ہر روز پڑھتی ہے، مگر ابھی سو رہی ہے۔ voh har roz paṛhtī hai, magar abhī so rahī hai.",
        exampleTranslation: "She studies every day, but right now she is sleeping."
      },
      {
        title: "Perfective ergativity with نے ne",
        body: cited(
          "In many perfective clauses with a transitive verb, the agent takes نے ne. The verb agrees with an unmarked object; if the object is marked by کو ko, the verb often appears in masculine singular default form. This split pattern is conditioned by aspect and transitivity, not simply by past time.",
          "wiki-hindustani-grammar"
        ),
        example: "عائشہ نے چٹھی لکھی۔ ʿĀʾishah ne chiṭṭhī likhī.",
        exampleTranslation: "Aisha wrote the letter. (likhī agrees with feminine chiṭṭhī.)"
      },
      {
        title: "Compound verbs and event texture",
        body: cited(
          "A lexical verb can combine with a light verb such as لینا lenā ‘take,’ دینا denā ‘give,’ جانا jānā ‘go,’ or پڑنا paṛnā ‘fall.’ The second verb loses much of its literal meaning and adds completion, suddenness, benefactive direction, or another viewpoint. The combination لکھ دینا likh denā means more than mechanically ‘write give.’",
          "wiki-hindustani-grammar"
        ),
        example: "براہِ کرم اپنا پتا لکھ دیجیے۔ barāh-e karam apnā patā likh dījiye.",
        exampleTranslation: "Please write down your address (for me/us)."
      },
      {
        title: "Respect, pronouns, and imperatives",
        body: cited(
          "تو tū is intimate and can be insulting outside close or devotional contexts; تم tum is familiar; آپ āp is respectful and takes plural-style agreement. Imperatives likewise range from کر kar to کرو karo to کیجیے kījiye. Social choice cannot be repaired by correct dictionary vocabulary alone.",
          "wiki-hindustani-grammar",
          "columbia-modules"
        ),
        example: "آپ کہاں رہتے ہیں؟ āp kahāṅ rahte haiṅ? / آپ کہاں رہتی ہیں؟ āp kahāṅ rahtī haiṅ?",
        exampleTranslation: "Where do you live? (respectful; masculine / feminine addressee.)"
      },
      {
        title: "Relative–correlative sentences",
        body: cited(
          "Urdu often answers a relative جو jo ‘who/which/that’ with a correlative وہ voh ‘that one.’ This balanced structure is common in speech, proverbs, and formal prose and does not map word-for-word onto the English relative clause.",
          "wiki-hindustani-grammar"
        ),
        example: "جو محنت کرتا ہے، وہ سیکھتا ہے۔ jo mehnat kartā hai, voh sīkhtā hai.",
        exampleTranslation: "The one who works hard learns."
      },
      {
        title: "Persian izafat inside Urdu",
        body: cited(
          "Formal and literary Urdu uses the Persian linker izafat, pronounced -e or -ye, to connect a noun with a modifier or possessor. It may be only partly visible in ordinary spelling, so readers must recognize the phrase. It belongs mainly to Persianized compounds rather than replacing the everyday Urdu postposition کا kā.",
          "wiki-urdu",
          "platts-dictionary"
        ),
        example: "جشنِ آزادی jashn-e āzādī",
        exampleTranslation: "celebration of independence / Independence Day celebration"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Urdu's map depends on what is being counted: first language, additional language, literacy, literary affiliation, or media comprehension. Pakistan's mother-tongue figure is much smaller than the population able to use Urdu. In India, strong historical and contemporary communities are distributed rather than confined to one Urdu-speaking state. Shared Hindustani media increases receptive reach beyond people who identify their language as Urdu. Diaspora homes may maintain speech while script literacy weakens, creating a different learner profile again.",
      "pbs-census",
      "uchicago-urdu",
      "wiki-urdu"
    ),
    regions: [
      {
        place: "Pakistan",
        note: cited(
          "Urdu is the national language and a nationwide lingua franca, but the 2023 census reported it as mother tongue for 9.25 percent. Karachi has a particularly large first-language community; throughout the country Urdu coexists with provincial and local languages and with English in government, education, and professional life.",
          "pbs-census",
          "nlpd-pakistan"
        )
      },
      {
        place: "India",
        note: cited(
          "Urdu is constitutionally recognized and has official status in several jurisdictions. Delhi, Uttar Pradesh, Bihar, Telangana and the Deccan, Jammu and Kashmir, and other regions sustain different combinations of home use, schooling, press, performance, and literature.",
          "uchicago-urdu",
          "wiki-urdu"
        )
      },
      {
        place: "Gulf, Britain, North America, Australia, and wider diaspora",
        note: cited(
          "Migration has carried Urdu into multilingual homes, community media, religious institutions, poetry gatherings, film audiences, and digital networks. Diaspora speech often overlaps with Hindi, Punjabi, Gujarati, Bengali, Arabic, and English, while literary organizations maintain Nastaliq and mushaira performance.",
          "uchicago-urdu",
          "columbia-modules"
        )
      },
      {
        place: "Transnational media space",
        note: cited(
          "Bollywood and Pakistani cinema, television drama, streaming video, music, and social platforms circulate broadly intelligible Hindustani. They do not erase the distinction between standards, but they give learners a vast listening zone in which register can be compared in real time.",
          "wiki-hindustani",
          "columbia-modules"
        )
      }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "For an English-speaking beginner, conversational Urdu grammar is substantial but learnable, and the abundance of Hindustani media helps. The larger challenge is developing balanced literacy: fast Nastaliq reading, accurate listening, socially appropriate speech, and access to formal and literary vocabulary. The Perso-Arabic script normally omits short vowels, an issue Discover Discomfort highlights across languages using related scripts. A heritage speaker may reverse the profile—excellent informal speech but limited reading—so a single difficulty ranking says little about the actual work ahead.",
      "dd-hardest",
      "unicode-arabic",
      "columbia-modules"
    ),
    easierAspects: [
      "Conversational overlap with Hindi opens an enormous shared media and tutoring ecosystem",
      "Word order and postpositions become predictable once learned through full clauses",
      "Urdu spelling preserves families and etymology, which becomes helpful after the first reading barrier",
      "Speakers are accustomed to multilingual interaction and often accommodate learners"
    ],
    hardAspects: [
      "Nastaliq reading speed and omitted short vowels",
      "Dental, retroflex, aspirated, and breathy consonant contrasts",
      "Gender agreement and aspect-conditioned ergativity",
      "The vocabulary distance between casual conversation and formal or classical prose",
      "Unwritten social knowledge behind pronouns, politeness, and poetic allusion"
    ],
    plateauRisks: [
      "Depending on Roman Urdu until every Perso-Arabic word still looks unfamiliar",
      "Watching subtitled film while reading English instead of testing Urdu listening",
      "Learning highly Persianized synonyms but sounding unnatural in ordinary conversation",
      "Speaking fluently at home while avoiding sustained Nastaliq prose",
      "Reading poetry only through translations and never hearing its meter or recitation"
    ],
    workload: cited(
      "A practical first year can split time among conversation, script, and listening: short daily Nastaliq reading is more effective than a weekly decoding marathon. At intermediate level, add one news or essay source and one drama or interview series, maintaining separate notebooks for conversational chunks and formal vocabulary. Advanced learners need long texts, correction from educated speakers in their target community, and deliberate movement among everyday speech, journalism, criticism, and literature. Measure progress by tasks—reading a page without romanization, following an interview, explaining a couplet—not by an imagined finish line called ‘knowing Urdu.’",
      "columbia-modules",
      "columbia-ghazal",
      "uchicago-urdu"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build a two-register curriculum. In the conversational track, record short exchanges, shadow a consistent speaker, and rewrite useful sentences with new nouns and aspect forms. In the literacy track, read one paragraph repeatedly: first for gist, then with a dictionary, then aloud alongside audio. Add a literary track only after the basic grammar is stable, beginning with annotated poems or short prose rather than an unglossed divan. Columbia's modules and ghazal reader demonstrate how video, orthography, vocabulary, grammar, and cultural commentary can support one another.",
      "columbia-modules",
      "columbia-ghazal"
    ),
    mediaPractice: cited(
      "Rotate genres because each teaches a different Urdu. Drama supplies family interaction and indirect requests; interviews reveal educated spontaneous speech; television news supplies formal compounds; stand-up and social video expose code-switching; ghazal recitation trains long vowels and cultural images. Use a three-pass method: watch without subtitles, check Urdu subtitles or transcript, then replay and imitate. English subtitles belong after the first attempt, not under every minute.",
      "columbia-modules",
      "uchicago-urdu"
    ),
    dictionariesAndCorpora: cited(
      "Use more than one kind of lookup. Rekhta's dictionary is convenient for modern learners and connects vocabulary to literature; Platts is historical and especially valuable for etymology and older senses, but its nineteenth-century labels require judgment. Searchable literary archives reveal collocations that a bilingual gloss cannot. When a word differs between Hindi and Urdu registers, compare actual sentences instead of assuming that Sanskrit origin means ‘Hindi only’ or Arabic origin means ‘Urdu only.’",
      "rekhta-dictionary",
      "platts-dictionary",
      "uchicago-urdu"
    ),
    resources: [
      {
        type: "course",
        title: "AIIS–Columbia Urdu Audio-Visual Modules",
        url: "https://urduaiis.lrc.columbia.edu/",
        level: "all",
        description: cited(
          "Twenty-eight thematic modules supported by the American Institute of Indian Studies and Columbia's Language Resource Center. They combine situated video with language and cultural study and are particularly useful for hearing Urdu beyond isolated studio phrases.",
          "columbia-modules"
        )
      },
      {
        type: "dictionary",
        title: "Rekhta Urdu Dictionary",
        url: "https://www.rekhtadictionary.com/",
        level: "all",
        description: cited(
          "A learner-friendly searchable dictionary connected to Rekhta's broader literary ecosystem, useful for Urdu script, meanings, pronunciation support, and movement from a word into poetry and usage.",
          "rekhta-dictionary"
        )
      },
      {
        type: "corpus",
        title: "Digital Dictionaries of South Asia: Platts",
        url: "https://dsal.uchicago.edu/dictionaries/platts/",
        level: "advanced",
        description: cited(
          "The University of Chicago's digital edition of John T. Platts's historical dictionary of Urdu, classical Hindi, and English. It is excellent for etymology and older texts, though modern learners should cross-check current usage.",
          "platts-dictionary"
        )
      },
      {
        type: "book",
        title: "Columbia Digital Urdu Ghazal Reader",
        url: "https://www.columbia.edu/itc/mealac/urdutech/ghazalreader/",
        level: "intermediate",
        description: cited(
          "An interactive course reader presenting complete ghazals with help for orthography, pronunciation, vocabulary, grammar, and literary context. It turns canonical poetry into teachable reading rather than decorative quotation.",
          "columbia-ghazal"
        )
      },
      {
        type: "other",
        title: "Discover Discomfort: Arabic Facts",
        url: "https://discoverdiscomfort.com/arabic-facts/",
        level: "beginner",
        description: cited(
          "A quick corrective for learners who equate Arabic-looking scripts with related languages. Its comparison helps establish that Urdu, Persian, and Arabic can share writing ancestry and loanwords without sharing a grammar family.",
          "dd-arabic-facts"
        )
      },
      {
        type: "other",
        title: "Unicode Arabic Script FAQ",
        url: "https://www.unicode.org/faq/arabic.html",
        level: "advanced",
        description: cited(
          "The authoritative technical reference for how Arabic-derived scripts are encoded and shaped, including why Nastaliq is treated as a style rather than a separately encoded script. Essential for anyone publishing or programming Urdu.",
          "unicode-arabic"
        )
      }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Urdu words accumulate social and literary echoes. محبت muḥabbat is ordinary ‘love’ and part of a poetic lexicon; کل kal can mean yesterday or tomorrow because context locates the day; دل dil is heart, emotional center, courage, desire, and a participant in countless compounds. Ghazal poetry intensifies this polysemy: the beloved, wine, garden, cage, candle, and moth may work sensually, spiritually, politically, or together. Modern Urdu also thrives in short fiction, novels, feminist writing, journalism, satire, television drama, film song, rap, and online comedy.",
      "uchicago-urdu",
      "columbia-ghazal",
      "rekhta-dictionary"
    ),
    notableWords: [
      {
        term: "محبت",
        transliteration: "muḥabbat / mohabbat",
        meaning: "love, affection",
        note: cited(
          "An Arabic-origin word completely at home in everyday Urdu, songs, and poetry. Its doubled middle consonant is clearer in careful speech than casual romanization suggests.",
          "rekhta-dictionary",
          "platts-dictionary"
        )
      },
      {
        term: "دنیا",
        transliteration: "dunyā",
        meaning: "world; worldly life",
        note: cited(
          "A common Arabic-origin word whose range stretches from ‘everyone in the world’ to the temporal world contrasted with an afterlife. Register comes from the sentence, not the etymology alone.",
          "rekhta-dictionary"
        )
      },
      {
        term: "دل",
        transliteration: "dil",
        meaning: "heart, mind, inclination",
        note: cited(
          "An Indo-Iranian word shared through long regional histories and one of Urdu's most productive emotional nouns: dil lagnā can mean becoming attached or finding interest, while dil ṭūṭnā is a heart breaking.",
          "platts-dictionary",
          "columbia-ghazal"
        )
      },
      {
        term: "جُگَت",
        transliteration: "jugat",
        meaning: "witticism, comic line, repartee",
        note: cited(
          "A useful reminder that Urdu is not only solemn refinement. In Punjabi–Urdu popular performance, quick verbal play and teasing can carry an interaction.",
          "rekhta-dictionary"
        )
      },
      {
        term: "تہذیب",
        transliteration: "tahzīb",
        meaning: "culture, refinement, civilization",
        note: cited(
          "An Arabic-origin formal word whose translation changes with argument and era. In discussions of adab and social behavior it can imply cultivated manners, not merely ‘culture’ as a neutral category.",
          "rekhta-dictionary",
          "platts-dictionary"
        )
      },
      {
        term: "آزادی",
        transliteration: "āzādī",
        meaning: "freedom, independence",
        note: cited(
          "Built from Persian āzād with an abstract-noun suffix, this is both an everyday political word and the centerpiece of historical and contemporary slogans across South Asia.",
          "platts-dictionary",
          "nlpd-pakistan"
        )
      },
      {
        term: "غزل",
        transliteration: "ghazal",
        meaning: "a lyric genre built from autonomous couplets in a formal rhyme structure",
        note: cited(
          "A ghazal is not simply any sad love song. Its couplets share meter, rhyme, and often a refrain while each can form a complete semantic world; performance and popular music have also widened the label.",
          "columbia-ghazal"
        )
      },
      {
        term: "خیر",
        transliteration: "xair / khair",
        meaning: "good, well-being; anyway / well then",
        note: cited(
          "Beyond its dictionary sense, xair is an agile discourse word: it can close a topic, concede a point, reset a story, or ask after someone's welfare in خیریت xairiyat.",
          "rekhta-dictionary"
        )
      }
    ],
    loanwordLayers: cited(
      "Do not measure Urdu authenticity by counting Arabic and Persian words. The grammatical skeleton and much basic vocabulary are Indo-Aryan; Persianate culture contributed compounds, genres, and a prestige lexicon; Arabic supplied learned vocabulary often through Persian; regional languages continually shape local speech; English is conspicuous in education, technology, law, and business. A speaker may say a plain Hindustani word in one setting and a Persian-Arabic or English near-synonym in another. The most advanced skill is not choosing the ‘purest’ option but hearing what each option does socially.",
      "wiki-urdu",
      "wiki-hindustani",
      "dd-persian-arabic"
    ),
    idioms: [
      { original: "ناک میں دم کرنا", transliteration: "nāk meṅ dam karnā", translation: "to make someone's life difficult; pester relentlessly", note: "Literally, ‘to put breath in the nose.’ Stronger and more vivid than merely ‘annoy.’" },
      { original: "آنکھوں کا تارا", transliteration: "āṅkhoṅ kā tārā", translation: "the apple of one's eye; a dearly loved person", note: "Literally, ‘the star/pupil of the eyes.’ Agreement around the expression follows its role in the sentence." },
      { original: "نو دو گیارہ ہونا", transliteration: "nau do gyārah honā", translation: "to make oneself scarce; run away", note: "Literally, ‘to become nine-two-eleven.’ Often playful, as when telling someone to disappear quickly." },
      { original: "آسمان سر پر اٹھانا", transliteration: "āsmān sar par uṭhānā", translation: "to raise a huge commotion", note: "Literally, ‘to lift the sky onto one's head.’ Used for loud protest, crying, or uproar." },
      { original: "ہاتھ پاؤں پھولنا", transliteration: "hāth pāṅv phūlnā", translation: "to panic or lose one's nerve", note: "Literally, ‘for the hands and feet to swell.’ The body image describes being too flustered to act." }
    ],
    textGenres: [
      "ghazal and nazm poetry, including recitation and song",
      "dastan storytelling, drama, and comic performance",
      "afsana short fiction, novels, memoir, and literary criticism",
      "newspapers, editorials, television news, and long-form interviews",
      "film dialogue, playback song, television serials, and streaming drama",
      "religious scholarship, sermons, devotional poetry, and translation",
      "social video, stand-up, rap, podcasts, memes, and Roman Urdu messaging"
    ]
  },
  relationships: {
    overview: cited(
      "Urdu belongs genealogically with Indo-Aryan languages, shares its standardized grammatical base most closely with Hindi, and carries unusually visible Persian and Arabic contact layers. Script can therefore mislead in both directions: Urdu is not a form of Arabic because it looks similar, and Hindi is not unrelated because it looks different. Family, shared standardization, contact, and identity are four separate relationships that a good comparison keeps apart.",
      "glottolog-urdu",
      "wiki-hindustani",
      "dd-arabic-facts"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "An Urdu learner soon encounters adab, a word for literature, cultured conduct, and respectful social form. How you address an elder, disagree, recite a couplet, or praise someone matters alongside grammar. Mushairas—poetry gatherings—make literature a social event, with listeners responding during recitation. Yet Urdu culture is larger than courtly etiquette or ghazal melancholy. Feminist poets, satirists, novelists, screenwriters, rappers, journalists, and comedians have used it to argue, expose, flirt, and laugh. Urdu is neither inherently Muslim nor exclusively Pakistani: its literature and speech were made across religious and national identities. Still, script, educational access, and political history affect who reads and claims it today.",
  resources: [
    {
      type: "course",
      title: "AIIS–Columbia Urdu Audio-Visual Modules",
      url: "https://urduaiis.lrc.columbia.edu/",
      level: "all",
      description: cited("Thematic video modules for connecting grammar and vocabulary to social situations and cultural context.", "columbia-modules")
    },
    {
      type: "dictionary",
      title: "Rekhta Dictionary",
      url: "https://www.rekhtadictionary.com/",
      level: "all",
      description: cited("A modern searchable Urdu dictionary and a practical doorway into Rekhta's poetry, prose, audio, and video collections.", "rekhta-dictionary")
    },
    {
      type: "dictionary",
      title: "Platts: A Dictionary of Urdu, Classical Hindi, and English",
      url: "https://dsal.uchicago.edu/dictionaries/platts/",
      level: "advanced",
      description: cited("A historical dictionary digitized by the University of Chicago; best for etymology, older vocabulary, and literary investigation rather than uncritical modern usage.", "platts-dictionary")
    },
    {
      type: "book",
      title: "Digital Urdu Ghazal Reader",
      url: "https://www.columbia.edu/itc/mealac/urdutech/ghazalreader/",
      level: "intermediate",
      description: cited("Complete annotated ghazals arranged as an advanced classroom reader, with orthographic, grammatical, and cultural support.", "columbia-ghazal")
    },
    {
      type: "other",
      title: "Discover Discomfort: Persian vs Arabic",
      url: "https://discoverdiscomfort.com/farsi-persian-vs-arabic-similarities-and-differences/",
      level: "beginner",
      description: cited("A clear comparison of script sharing, vocabulary contact, and genealogical difference that transfers directly to common misconceptions about Urdu.", "dd-persian-arabic")
    }
  ],
  relatedLanguages,
  phrases: [
    { original: "السلام علیکم", transliteration: "as-salāmu ʿalaikum", translation: "Hello / peace be upon you", literalMeaning: "Peace be upon you", usageNote: "A widespread greeting; the usual reply is وعلیکم السلام wa-ʿalaikum as-salām." },
    { original: "آپ کیسے ہیں؟", transliteration: "āp kaise haiṅ?", translation: "How are you?", usageNote: "Respectful, traditionally to a masculine addressee; many speakers also use it generically. Feminine: آپ کیسی ہیں؟ āp kaisī haiṅ?" },
    { original: "میں ٹھیک ہوں، شکریہ۔", transliteration: "maiṅ ṭhīk hūṅ, shukriyah.", translation: "I'm well, thank you." },
    { original: "آپ کا نام کیا ہے؟", transliteration: "āp kā nām kyā hai?", translation: "What is your name?", usageNote: "Respectful. kā agrees with masculine nām, not with the person addressed." },
    { original: "میرا نام … ہے۔", transliteration: "merā nām … hai.", translation: "My name is …" },
    { original: "براہِ کرم آہستہ بولیے۔", transliteration: "barāh-e karam āhistah boliye.", translation: "Please speak slowly.", literalMeaning: "By way of kindness, speak slowly.", usageNote: "Formal/polite; مہربانی کر کے mehrbānī kar ke is another natural ‘please.’" },
    { original: "مجھے سمجھ نہیں آئی۔", transliteration: "mujhe samajh nahīṅ āī.", translation: "I didn't understand.", literalMeaning: "Understanding did not come to me." },
    { original: "کیا آپ دوبارہ کہہ سکتے ہیں؟", transliteration: "kyā āp dobārah kah sakte haiṅ?", translation: "Can you say that again?", usageNote: "To a female addressee, سکتی ہیں saktī haiṅ is traditional agreement." },
    { original: "اس لفظ کا کیا مطلب ہے؟", transliteration: "is lafz kā kyā matlab hai?", translation: "What does this word mean?" },
    { original: "میں اردو سیکھ رہا ہوں۔", transliteration: "maiṅ Urdū sīkh rahā hūṅ.", translation: "I am learning Urdu.", usageNote: "Male speaker; a female speaker says سیکھ رہی ہوں sīkh rahī hūṅ." },
    { original: "یہ کتنے کا ہے؟", transliteration: "yeh kitne kā hai?", translation: "How much is this?", usageNote: "Common shopping question; agreement can change with the item." },
    { original: "کوئی بات نہیں۔", transliteration: "koī bāt nahīṅ.", translation: "No problem / never mind.", literalMeaning: "There is no matter." },
    { original: "پھر ملیں گے۔", transliteration: "phir mileṅge.", translation: "See you again.", literalMeaning: "We will meet again." },
    { original: "خدا حافظ", transliteration: "xudā hāfiz / khudā hāfiz", translation: "Goodbye.", literalMeaning: "May God be your protector.", usageNote: "Widely understood; اللہ حافظ Allāh hāfiz is also common in Pakistan." }
  ],
  sources: [
    { id: "dd-arabic-facts", title: "Eight Interesting Arabic Facts — For Beginners", url: "https://discoverdiscomfort.com/arabic-facts/", publisher: "Discover Discomfort", updatedAt: "2023-09-13", accessedAt: "2026-07-10" },
    { id: "dd-hardest", title: "The 4 Hardest Languages to Learn for English Speakers", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-persian-arabic", title: "Persian vs Arabic — All the Similarities and Differences", url: "https://discoverdiscomfort.com/farsi-persian-vs-arabic-similarities-and-differences/", publisher: "Discover Discomfort", updatedAt: "2023-09-13", accessedAt: "2026-07-10" },
    { id: "wiki-urdu", title: "Urdu", url: "https://en.wikipedia.org/wiki/Urdu", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-hindustani", title: "Hindustani language", url: "https://en.wikipedia.org/wiki/Hindustani_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-hindustani-grammar", title: "Hindustani grammar", url: "https://en.wikipedia.org/wiki/Hindustani_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "unicode-arabic", title: "FAQ: Arabic Script", url: "https://www.unicode.org/faq/arabic.html", publisher: "Unicode Consortium", accessedAt: "2026-07-10" },
    { id: "unicode-chapter9", title: "The Unicode Standard, Chapter 9: Middle East-I", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-9/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "glottolog-urdu", title: "Glottolog 5.3: Urdu", url: "https://glottolog.org/resource/languoid/id/urdu1245", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "nlpd-pakistan", title: "National Language Promotion Department", url: "https://nlpd.gov.pk/eng-site/index.php", publisher: "Government of Pakistan", accessedAt: "2026-07-10" },
    { id: "pbs-census", title: "7th Population and Housing Census 2023: National Census Report", url: "https://www.pbs.gov.pk/sites/default/files/population/2023/reports/National%20Census%20Report-2023.pdf", publisher: "Pakistan Bureau of Statistics", publishedAt: "2025", accessedAt: "2026-07-10" },
    { id: "uchicago-urdu", title: "Urdu Language Study", url: "https://salc.uchicago.edu/language-study/urdu", publisher: "University of Chicago", accessedAt: "2026-07-10" },
    { id: "platts-dictionary", title: "A Dictionary of Urdu, Classical Hindi, and English", url: "https://dsal.uchicago.edu/dictionaries/platts/", publisher: "Digital South Asia Library, University of Chicago", publishedAt: "1884", accessedAt: "2026-07-10" },
    { id: "rekhta-dictionary", title: "Rekhta Dictionary", url: "https://www.rekhtadictionary.com/", publisher: "Rekhta Foundation", accessedAt: "2026-07-10" },
    { id: "columbia-modules", title: "Urdu AIIS Audio-Visual Modules", url: "https://urduaiis.lrc.columbia.edu/", publisher: "American Institute of Indian Studies and Columbia University", accessedAt: "2026-07-10" },
    { id: "columbia-ghazal", title: "Digital Urdu Ghazal Reader", url: "https://www.columbia.edu/itc/mealac/urdutech/ghazalreader/", publisher: "Columbia University", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Urdu Language Guide: Nastaliq, Grammar, History, and Real Usage",
    description: "A detailed, example-rich guide to Urdu: its relationship with Hindi and Hindustani, Nastaliq writing, sounds, grammar, registers, literature, phrases, and learning resources."
  }
} satisfies LanguageGuide;
