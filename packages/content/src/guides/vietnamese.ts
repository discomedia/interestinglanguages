import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Mường",
    relationship: "Closest major Vietic relative",
    explanation: cited(
      "Vietnamese and Mường descend from closely related Vietic varieties. Comparison matters because it reveals that familiar Vietnamese features did not all arrive together: some conservative Mường varieties preserve consonant clusters and syllable shapes that Vietnamese later simplified, while Vietnamese developed its present tone system through sound changes and contact. They are relatives, not mutually intelligible accents of one standard language.",
      "glottolog-vietnamese",
      "wiki-vietnamese"
    )
  },
  {
    name: "Khmer",
    relationship: "Austroasiatic relative and regional contact language",
    explanation: cited(
      "Khmer and Vietnamese belong to Austroasiatic but sit in different branches. Khmer is non-tonal, a useful reminder that Vietnamese tones are an innovation rather than an Austroasiatic family inheritance. Long contact in mainland Southeast Asia has also produced shared areal habits and vocabulary, although the languages remain structurally and lexically distinct.",
      "glottolog-vietnamese",
      "wiki-vietnamese"
    )
  },
  {
    name: "Mandarin Chinese",
    slug: "mandarin-chinese",
    relationship: "Unrelated language with profound historical contact",
    explanation: cited(
      "Chinese is Sino-Tibetan, not Austroasiatic, yet centuries of government, scholarship, religion, and literary culture left an enormous Sino-Vietnamese vocabulary. Vietnamese readings such as học “study,” quốc “country,” and văn “writing or culture” preserve a systematic historical layer, comparable in social role to learned Greek and Latin vocabulary in English. Shared-looking compounds do not imply shared grammar or easy mutual comprehension.",
      "wiki-vietnamese",
      "bc-quoc-ngu"
    )
  },
  {
    name: "French",
    relationship: "Colonial-era contact language",
    explanation: cited(
      "French shaped modern schooling, administration, print culture, and selected vocabulary during the colonial period. Everyday loans include cà phê “coffee,” ga “railway station,” and bơ “butter.” Vietnamese reshaped these words to its own syllables and tones, so recognizing the source rarely tells a learner how the Vietnamese word should sound.",
      "wiki-vietnamese",
      "bc-quoc-ngu"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const vietnameseGuide = {
  slug: "vietnamese",
  name: "Vietnamese",
  autonym: "Tiếng Việt",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Vietnamese combines a compact, analytic grammar with an intricate sound system, socially precise forms of address, layered vocabulary, and regional voices heard across Vietnam and a global diaspora.",
  family: "Austroasiatic, Vietic",
  macroRegion: "Vietnam, mainland Southeast Asia, and global diaspora communities",
  primaryScript: "Latin-based chữ Quốc ngữ",
  difficultyLabel: "Demanding",
  learnerHook: "The alphabet lets you read from the first week, but the real adventure begins when one written syllable changes sound across regions, a family noun becomes “you,” and a short sentence reveals centuries of Chinese, Southeast Asian, and French contact.",
  hero: {
    imageAlt: "Vietnamese text in chữ Quốc ngữ alongside contemporary books, signs, and conversation.",
    callToActionLabel: "Hear Vietnamese in use"
  },
  classification: "A Vietic language of the Austroasiatic family and the national language of Vietnam",
  speakerCommunity: "Vietnamese is the first language of the large Kinh majority and a shared public language for Vietnamese citizens from many linguistic backgrounds. It carries family conversation, schooling, government, publishing, television, cinema, music, and online comedy. War, study, labor, and family migration created substantial communities in the United States, Australia, Canada, France, Germany, the Czech Republic, and elsewhere. A child in Hà Nội, a fish seller in Huế, a filmmaker in Hồ Chí Minh City, and a California heritage learner all speak Vietnamese, but not interchangeably.",
  facts: [
    { label: "Family", value: "Austroasiatic · Vietic" },
    { label: "National role", value: "Official and common public language of Vietnam" },
    { label: "Script", value: "Chữ Quốc ngữ, a 29-letter Latin-based alphabet with tone marks" },
    { label: "Major regional groupings", value: "Northern, Central, and Southern continua" },
    { label: "Tone", value: "Six named tones in standard spelling; phonetic realization varies by region" },
    { label: "Grammar profile", value: "Analytic, generally subject–verb–object, with classifiers and discourse particles" }
  ],
  learnerOverview: "Vietnamese combines immediate access with delayed difficulty. The writing is alphabetic, verbs do not conjugate for person, nouns have no grammatical gender, and a useful statement can be only three words. Yet every syllable asks for control of its vowel, final, and tone; address terms locate age and relationship; and one spelling can have different northern and southern pronunciations. Choose a listening base—usually Hà Nội or Hồ Chí Minh City—without treating it as the only legitimate Vietnamese. Learn whole exchanges from one set of speakers, including final particles that make them warm or abrupt. Read from the beginning: ma, má, mà, mả, mã, and mạ are different words. Then widen your ear to systematic regional differences. Discover Discomfort's general method is apt here: establish pronunciation, high-frequency sentences, corrective speakers, and repeated audio before collecting apps. Sound, address, collocation, and register determine whether a grammatical sentence is one people actually say.",
  origins: {
    overview: cited(
      "Vietnamese belongs to Vietic within Austroasiatic, making it a relative of Mường and more distantly Khmer—not Chinese, despite Chinese-looking vocabulary. Earlier Vietic probably had richer consonant clusters and no modern tones. Loss or weakening of consonants helped create pitch and voice-quality contrasts, a process called tonogenesis. Tai and Sinitic contact placed these compact syllables in a wider mainland Southeast Asian area. Classical Chinese literacy transformed formal vocabulary without replacing the Austroasiatic core. Native ăn “eat,” mẹ “mother,” and nước “water/country” sit beside learned giáo dục “education” and văn hóa “culture.”",
      "glottolog-vietnamese",
      "wiki-vietnamese",
      "routledge-grammar"
    ),
    timeline: [
      {
        period: "Early Vietic development",
        event: cited(
          "Vietic varieties differentiated within Austroasiatic in northern and central mainland Southeast Asia. Historical comparison with Mường and smaller Vietic languages helps reconstruct consonant clusters and voicing contrasts that later Vietnamese transformed into new initials and tones.",
          "glottolog-vietnamese",
          "wiki-vietnamese"
        )
      },
      {
        period: "Chinese rule and the independent dynastic era",
        event: cited(
          "Classical Chinese served administration, scholarship, and much elite literature. Vietnamese developed systematic Sino-Vietnamese readings for characters and absorbed learned vocabulary, while spoken Vietnamese continued on its own grammatical path. After political independence, chữ Hán remained prestigious rather than suddenly becoming foreign.",
          "wiki-vietnamese",
          "bc-quoc-ngu"
        )
      },
      {
        period: "From about the 13th century",
        event: cited(
          "Writers used chữ Nôm, adapting and creating character forms to represent vernacular Vietnamese. Nôm made major works such as Nguyễn Du's Truyện Kiều and vernacular verse possible, but its large, non-uniform character inventory meant literacy demanded substantial training.",
          "nom-foundation",
          "wiki-vietnamese-literature"
        )
      },
      {
        period: "17th century",
        event: cited(
          "Portuguese and Italian Jesuits, Vietnamese collaborators, and later Alexandre de Rhodes developed Latin transcriptions for learning and evangelization. De Rhodes's 1651 Vietnamese–Portuguese–Latin dictionary publicized one influential form, but modern scholarship rejects the tidy story that one French missionary single-handedly invented quốc ngữ.",
          "bc-quoc-ngu",
          "bc-quoc-ngu"
        )
      },
      {
        period: "Late 19th to mid-20th century",
        event: cited(
          "Colonial administration and schools expanded quốc ngữ, while journalists, reformers, and anti-colonial intellectuals turned the comparatively learnable script into a medium for mass education and political debate. Print culture helped stabilize spelling. Quốc ngữ ultimately outlived colonial rule and became the official national script after independence.",
          "bc-quoc-ngu",
          "wiki-vietnamese-alphabet"
        )
      },
      {
        period: "Digital present",
        event: cited(
          "Unicode encodes the Latin letters, vowel-quality signs, and tone marks needed for Vietnamese. Telex and VNI input methods let typists produce stacked diacritics quickly. Texting may omit marks for speed, but edited Vietnamese retains them because removing tone and vowel signs creates extensive ambiguity.",
          "unicode-latin",
          "unicode-latin"
        )
      }
    ],
    contactHistory: cited(
      "Contact appears in vocabulary layers, not a simple loanword percentage. Sino-Vietnamese readings support formal pairs: máy bay is everyday “airplane,” while hàng không is learned “aviation.” Cham and Khmer contact belongs to multilingual central and southern history. French contributed colonial-era material vocabulary, from cà phê “coffee” and ga “station” to sơ mi “shirt.” English now supplies technology, business, and youth terms, which speakers may preserve, respell, or calque. Beneath these layers, the core grammar remains Vietic.",
      "wiki-vietnamese",
      "routledge-grammar",
      "bc-quoc-ngu"
    ),
    standardization: cited(
      "National spelling is highly standardized, but there is no single spoken accent used in every domain. Hà Nội pronunciation has institutional prestige in much northern broadcasting and foreign-language teaching; Hồ Chí Minh City speech has enormous demographic, commercial, musical, and diaspora reach. Newsreaders may aim for a careful regional standard rather than erase their region. Dictionaries list one orthography even where speakers merge consonants or tones differently. A productive learner therefore separates “standard written Vietnamese” from “one standard pronunciation” and records who says each form.",
      "wiki-vietnamese",
      "routledge-grammar",
      "wiki-vietnamese-phonology"
    )
  },
  variants: {
    overview: cited(
      "The Northern–Central–Southern map is a first approximation, not three sealed boxes. Speech changes across provinces, ages, migration histories, and urban or rural identities. Differences cluster in tones, initial mergers, vowels and finals, everyday vocabulary, and particles. Written news is broadly shared, while a fast joke from Huế or the Mekong Delta can challenge a learner trained only on Hà Nội audio. Speakers routinely accommodate across regions.",
      "wiki-vietnamese",
      "vnu-tones"
    ),
    items: [
      {
        name: "Northern varieties",
        note: cited(
          "Hà Nội speech commonly anchors northern teaching models and distinguishes six tones. In careful descriptions it also contrasts initials that much southern speech merges, including tr/ch and s/x. Even within the north, Hải Phòng, Nam Định, Nghệ An-adjacent areas, and rural communities do not form a single accent.",
          "wiki-vietnamese-phonology",
          "wiki-vietnamese-phonology"
        )
      },
      {
        name: "Central and north-central varieties",
        note: cited(
          "Central Vietnam contains striking internal diversity. Huế speech is culturally prominent and has its own tone patterns, vocabulary, and courtly associations; Nghệ An and Hà Tĩnh varieties can be difficult even for other Vietnamese listeners. “Central accent” should never be used as if Đà Nẵng, Huế, and Vinh sounded alike.",
          "wiki-vietnamese",
          "wiki-vietnamese-phonology"
        )
      },
      {
        name: "Southern varieties",
        note: cited(
          "Hồ Chí Minh City and Mekong Delta speech are widely heard in entertainment and diaspora communities. Many southern speakers merge hỏi and ngã, yielding five phonemic tone categories, and commonly pronounce written v, d, and gi alike or nearly alike. Vocabulary choices such as ly “drinking glass,” muỗng “spoon,” and trái “fruit” contrast with common northern cốc, thìa, and quả.",
          "wiki-vietnamese-phonology",
          "wiki-vietnamese-phonology"
        )
      },
      {
        name: "Diaspora and heritage Vietnamese",
        note: cited(
          "Communities formed after 1975 often preserve southern pronunciations and vocabulary associated with earlier generations, while younger speakers innovate under English, French, Czech, German, or Australian English contact. Differences in political-era terminology can carry emotional weight. Heritage learners should ask relatives which region, generation, and register a word belongs to rather than treating family usage as defective or universally current.",
          "wiki-vietnamese",
          "routledge-grammar"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "A Vietnamese syllable packs an initial, vowel sequence, optional final, and tone; changing any one can change the word. Learners who drill only six tone melodies miss vowel contrasts such as a/ă/â and o/ô/ơ, or release final -t and -c like English. Spelling is informative but maps onto regional systems: d is typically /z/ in much northern speech and /j/ in much southern speech, while r and gi vary. Use one recorded production model and learn another system for comprehension.",
      "wiki-vietnamese-phonology",
      "routledge-grammar",
      "dd-read-write"
    ),
    script: "Chữ Quốc ngữ; examples follow standard spelling and note regional contrasts rather than adding a separate romanization",
    soundSystem: cited(
      "The six traditional tone names are ngang (unmarked), huyền (grave), sắc (acute), hỏi (hook), ngã (tilde), and nặng (dot below). Pitch alone is not the whole story. In northern speech, hỏi, ngã, and nặng can involve creaky voice, glottal constriction, or a break; listeners recognize a package of contour and phonation. Southern systems generally merge hỏi and ngã but realize other tones differently. Final -p, -t, and -c/-ch are unreleased stops: the mouth closes, but there is no English-style burst. Only sắc and nặng occur on these “checked” syllables. Final -m, -n, -ng/-nh are nasal. Vietnamese also has a rich vowel inventory, so copying tone onto an English-like vowel is not enough.",
      "wiki-vietnamese-phonology",
      "vnu-tones",
      "wiki-vietnamese-phonology"
    ),
    prosody: cited(
      "Tone belongs to every lexical syllable, yet conversation is not six isolated musical notes. Vietnamese rhythm groups words into phrases; focus, emotion, politeness, and questions reshape pitch range without deleting lexical contrasts. Function words may be lighter, while a corrected or contrasted word expands. Practice a tone inside a two- or three-word frame—cà phê, cảm ơn chị, Việt Nam—not only in the famous ma series. Shadow one regional speaker at normal speed, then compare your recording for vowel length, final closure, voice quality, and phrase melody. Discover Discomfort's advice to imitate a specific “muse” is more useful than aiming at an abstract national accent.",
      "vnu-tones",
      "dd-how-learn"
    ),
    learnerTraps: [
      "Treating tone marks as optional accents instead of part of the spelling and word",
      "Learning a tone as pitch only and missing northern breathy, creaky, or glottal voice quality",
      "Adding a released English puff after final -t, -p, or -c",
      "Collapsing ơ with ô or ư with u because English spelling offers no equivalent",
      "Mixing northern initials with southern tones before one production system is stable",
      "Assuming a speaker who merges two written sounds is careless rather than regionally consistent"
    ],
    sampleWords: [
      { original: "ma", translation: "ghost", note: "Level ngang tone in a common northern teaching model; keep the vowel steady." },
      { original: "má", translation: "mother [common southern usage]", note: "Sắc rises; on a checked final, sắc is shorter and more abrupt than here." },
      { original: "mà", translation: "but; that; sentence particle, depending on context", note: "Huyền falls and is often breathier in northern speech." },
      { original: "mả", translation: "grave, tomb", note: "Hỏi has a dipping or low-rising shape depending on region; it merges with ngã in much southern speech." },
      { original: "mã", translation: "code; horse in Sino-Vietnamese vocabulary", note: "Northern ngã often includes a glottal interruption; many southern speakers pronounce it like hỏi." },
      { original: "mạ", translation: "rice seedling; mother in some central usage", note: "Nặng is low and constricted in northern speech, but its exact contour is regional." },
      { original: "mát / mác", translation: "cool / mark or brand", note: "Both end without an audible release; the final place of articulation distinguishes them." },
      { original: "tư / tu", translation: "fourth or private / to practice religious discipline", note: "A useful ư versus u contrast: do not substitute one rounded English vowel for both." }
    ]
  },
  writing: {
    overview: cited(
      "Chữ Quốc ngữ uses 29 letters: the Latin set minus f, j, w, and z in native alphabet order, plus đ, ă, â, ê, ô, ơ, and ư. Five marks plus an unmarked tone represent six tones. Vowel and tone signs do different jobs: in ớ, the horn identifies ơ and the acute marks sắc. Spaces divide syllables even inside lexical words, so máy bay “airplane” looks like two words. Names retain full diacritics.",
      "unicode-latin",
      "unicode-latin",
      "wiki-vietnamese-alphabet"
    ),
    primaryScript: "Latin-based chữ Quốc ngữ",
    romanization: cited(
      "The standard script is already romanized, so stripping diacritics is not a beginner aid—it removes vowel and tone information. Type proper Vietnamese immediately. Telex creates marks with letter sequences such as aa → â, ow → ơ, and s → acute; VNI uses numbers. Learners can choose either input method, but should normalize copied text and keep marks on names and citations.",
      "unicode-latin",
      "dd-read-write"
    ),
    spellingNorms: cited(
      "Spelling reflects a historical standard rather than every modern accent. Northern readers write hỏi and ngã separately even when some other regions merge them; southern readers write v, d, and gi separately even where they sound alike. Initial c, k, and q represent related sounds but occur before different vowels by spelling rule; ng and ngh behave similarly. Tone placement follows the vowel nucleus, which can look surprising in sequences such as hòa or khỏe. Unicode permits precomposed and combining representations, so two visually identical strings may differ internally; well-built software normalizes them for search.",
      "unicode-latin",
      "unicode-latin"
    ),
    styleNotes: [
      cited("Spaces divide syllables, not reliably dictionary words: sinh viên “student” is one lexical unit written as two syllables. Search compounds both as a phrase and by component.", "routledge-grammar"),
      cited("Online chat may omit diacritics where context is strong, but published prose and respectful writing retain them. A learner gains nothing by making markless text the default.", "unicode-latin"),
      cited("Chữ Hán and chữ Nôm remain important for historical documents, calligraphy, temples, family records, and literary scholarship even though quốc ngữ dominates modern life.", "nom-foundation"),
      cited("Formal writing favors Sino-Vietnamese compounds and compact nominal style; conversation favors pronouns, particles, repetition, and regionally specific everyday words.", "routledge-grammar")
    ]
  },
  grammar: {
    overview: cited(
      "Vietnamese grammar is analytic: relationships appear through word order, particles, context, and compounding rather than endings. A verb does not change for I, she, yesterday, or tomorrow. Work moves elsewhere: speakers choose aspect markers for event shape, classifiers for how a noun is presented, pronouns for relationships, and final particles for attitude. The best grammar unit is a situated utterance, not a bare verb.",
      "routledge-grammar",
      "wiki-vietnamese-grammar"
    ),
    typologicalProfile: cited(
      "Basic clauses are generally subject–verb–object, modifiers often follow nouns, and topic–comment organization is common. Vietnamese lacks obligatory grammatical gender, articles equivalent to English a/the, plural marking on every noun, and person or tense inflection on verbs. It does have numeral classifiers, productive reduplication, serial-verb patterns, comparison constructions, rich demonstratives, and a large inventory of modal and discourse particles. Calling it “grammarless” confuses little inflection with little structure.",
      "routledge-grammar",
      "wiki-vietnamese-grammar"
    ),
    morphology: cited(
      "Many morphemes are one syllable, but many everyday words contain two or more written syllables: học sinh “pupil,” sinh viên “university student,” máy tính “computer,” and cà phê “coffee.” Compounds and reduplication build vocabulary without changing a stem through conjugation. Reduplication can soften, distribute, intensify, or create expressive sound patterns: đỏ “red” and đo đỏ “reddish,” người người “people everywhere.” Sino-Vietnamese components are especially productive in formal terminology, while native compounds often feel more concrete and conversational.",
      "routledge-grammar",
      "wiki-vietnamese-grammar"
    ),
    syntax: cited(
      "Word order carries grammatical and informational weight. Time expressions commonly appear before or after the subject, and a known object can be placed first as topic. Relative clauses and descriptive material follow the noun without a relative pronoun matching English who or which. Questions may use a final particle, an interrogative in the position of the missing information, or an A-not-A frame. Natural syntax depends on what the listener already knows, so translating English word by word produces grammatical-looking but oddly focused Vietnamese.",
      "routledge-grammar",
      "wiki-vietnamese-grammar"
    ),
    advancedPainPoints: [
      "Choosing address terms and self-reference across age, kinship, status, intimacy, and region",
      "Separating tense-like translations from the discourse meanings of đã, đang, sẽ, rồi, từng, mới, and chưa",
      "Selecting a classifier or deciding when a classifier is unnecessary",
      "Hearing word boundaries when orthographic spaces mark syllables",
      "Using sentence-final particles naturally without sounding blunt, theatrical, or regionally mismatched"
    ],
    topics: [
      {
        title: "Classifiers make a noun countable and present it from a viewpoint",
        body: cited(
          "A numeral normally reaches a count noun through a classifier: con for many animals, người for people, quyển or cuốn for bound volumes, and cái as a broad inanimate classifier. Classifiers are not empty equivalents of “piece”; choosing one categorizes the referent. With demonstratives, the usual sequence is numeral–classifier–noun–demonstrative. Bare nouns remain common when counting is not the point.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Tôi mua hai cuốn sách này.",
        exampleTranslation: "I bought these two books. (two + volume-classifier + book + this)"
      },
      {
        title: "Pronouns are social relationships",
        body: cited(
          "Vietnamese often recruits kinship and status nouns for I and you. Anh can mean older brother, an older male addressee, or a male partner; chị similarly indexes an older woman; em is the younger party; cô, chú, bác, ông, and bà locate other age and family-like relationships. Tôi is a relatively neutral “I,” but pairing it mechanically with bạn can sound distant, textbook-like, or inappropriately peer-assuming. Speakers negotiate terms as they learn one another's age and role.",
          "routledge-grammar",
          "routledge-grammar"
        ),
        example: "Em cảm ơn chị.",
        exampleTranslation: "Thank you. (literally, younger-self thanks older-woman-you)"
      },
      {
        title: "Aspect markers describe event shape, not a conjugation table",
        body: cited(
          "Đã often presents a situation as prior or realized, đang as ongoing, sẽ as prospective, từng as experienced before, and mới as newly or only just. Context can locate time without any marker, and these words can combine with rồi “already/then” or chưa “yet/not yet.” Treating đã as compulsory past tense creates overmarked sentences; ask what the speaker asserts about completion, current relevance, or expectation.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Tôi đã ăn rồi, còn anh ăn chưa?",
        exampleTranslation: "I've eaten already; have you eaten yet?"
      },
      {
        title: "Serial verbs package motion, purpose, and result",
        body: cited(
          "Several verbs can share a subject without English-style infinitive marking. A motion verb may lead into a purpose; another verb can describe manner or result. The construction is compact, but not every English string of verbs transfers directly. Learn recurring frames such as đi mua “go buy,” mang về “bring back,” and lấy ra “take out.”",
          "routledge-grammar"
        ),
        example: "Chiều nay tôi đi chợ mua rau về nấu canh.",
        exampleTranslation: "This afternoon I'm going to the market to buy vegetables and bring them back to cook soup."
      },
      {
        title: "Topic–comment order highlights what the sentence is about",
        body: cited(
          "A noun phrase can be placed first and then resumed or understood inside the comment. English sometimes uses “as for,” but Vietnamese topicalization is far more ordinary. This is also why object-first lines appear in conversation without meaning that basic word order has changed. The topic is old or contrastive information; the comment says what matters about it now.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Cuốn sách này, tôi đọc xong rồi.",
        exampleTranslation: "This book, I've finished reading it."
      },
      {
        title: "Là links nouns, but adjectives usually need no copula",
        body: cited(
          "Use là when identifying one noun phrase with another: Lan là bác sĩ “Lan is a doctor.” A property word can predicate directly: Trời nóng “The weather is hot,” not normally Trời là nóng. English-speaking learners overinsert là because English requires is in both sentences. Negation makes the contrast visible: không phải là rejects an identity; không directly negates many properties and verbs.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Cô ấy là giáo viên, nhưng hôm nay cô ấy không khỏe.",
        exampleTranslation: "She is a teacher, but today she isn't well."
      },
      {
        title: "Questions keep the information word in place",
        body: cited(
          "Vietnamese wh-words usually remain where the answer would appear: ai “who,” gì “what,” ở đâu “where,” and bao giờ or khi nào “when.” Yes/no questions often use có ... không, đã ... chưa, or a final particle. These frames carry assumptions: đã ... chưa asks whether something expected has happened yet, not merely a neutral past-tense question.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Chị mua cái này ở đâu?",
        exampleTranslation: "Where did you buy this? (older-woman-you bought this where?)"
      },
      {
        title: "Sentence particles tune stance and relationship",
        body: cited(
          "Final nhé can soften a suggestion or seek alignment; ạ marks deference, especially from a younger speaker; à can register a question or recognition; rồi can signal a changed state; mà can insist, explain, or push back. Their meanings depend on contour and relationship. Subtitles are valuable here because dictionaries reduce a particle to an inadequate one-word gloss.",
          "routledge-grammar",
          "routledge-grammar"
        ),
        example: "Mai mình gặp lại nhé.",
        exampleTranslation: "Let's meet again tomorrow, okay?"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Vietnamese is used throughout Vietnam as the national public language, alongside more than one hundred languages spoken by ethnic minority communities. It also travels through family networks, temples and churches, restaurants, schools, community radio, literature, and digital media. Diaspora varieties are not frozen replicas of 1975: speakers maintain older southern forms, borrow locally, shift between generations, and reconnect with contemporary media from Vietnam. A learner's most useful map is therefore social as well as geographic—who speaks to whom, in which generation and medium.",
      "wiki-vietnamese",
      "routledge-grammar"
    ),
    regions: [
      { place: "Northern Vietnam", note: cited("Hà Nội dominates many institutional and teaching models, while the Red River Delta, northern coast, mountains, and north-central transition contain substantial accent diversity.", "wiki-vietnamese") },
      { place: "Central Vietnam", note: cited("Huế, Đà Nẵng, Quảng Nam, Nghệ An, Hà Tĩnh, and neighboring areas contribute highly recognizable but internally different tone systems and local vocabularies.", "wiki-vietnamese-phonology") },
      { place: "Southern Vietnam", note: cited("Hồ Chí Minh City speech circulates widely through commerce and entertainment; Mekong Delta varieties add further phonetic, lexical, and particle differences.", "wiki-vietnamese") },
      { place: "United States and Canada", note: cited("Large post-1975 and later communities support newspapers, television, worship, heritage schools, businesses, and intergenerational varieties, especially around California and Texas.", "routledge-grammar") },
      { place: "Australia, France, Europe, and elsewhere", note: cited("Different migration histories—from colonial-era students to refugees, contract workers, and recent professionals—produce different regional bases and patterns of language maintenance.", "wiki-vietnamese") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Vietnamese is not uniformly hard. An English-speaking learner can read signs quickly and form clauses without conjugation. The cost is auditory: unfamiliar vowels, tones with voice quality, unreleased finals, and regional correspondences operate in short syllables. Social grammar grows harder as conversations become real: a teacher, older cousin, younger colleague, and partner require more choices than English I/you. Rankings based on classroom hours also miss heritage learners, tonal-language speakers, and learners who know Chinese characters.",
      "dd-language-choice",
      "routledge-grammar"
    ),
    easierAspects: [
      "No person conjugation, grammatical gender, or large case system",
      "A standardized alphabet that records tone and vowel quality",
      "Basic subject–verb–object clauses often align with English order",
      "Abundant contemporary music, television, news, social video, and diaspora speakers",
      "Productive compounding makes vocabulary families increasingly visible"
    ],
    hardAspects: [
      "Maintaining vowel, final, tone contour, and voice quality simultaneously",
      "Understanding fast regional speech beyond one course accent",
      "Choosing pronouns and particles that fit age, status, intimacy, and setting",
      "Segmenting multi-syllable words when spaces separate syllables",
      "Recognizing formal Sino-Vietnamese vocabulary alongside everyday alternatives"
    ],
    plateauRisks: [
      "Reading fluently while guessing tones and never correcting fossilized pronunciation",
      "Speaking grammatical textbook Vietnamese without relationship-sensitive address or final particles",
      "Switching between northern and southern models accidentally rather than understanding both deliberately",
      "Depending on English subtitles and failing to build Vietnamese word boundaries",
      "Collecting rare vocabulary before mastering classifier–noun and aspect frames"
    ],
    workload: cited(
      "Front-load sound and reusable exchanges: daily contrasts, short transcription, and weekly correction from one regional speaker. After a beginner course, do narrow listening and reading in one domain while adding a second regional model. Advanced literacy needs Sino-Vietnamese word-family work and prose editing. Measure progress by tasks—following a ten-minute interview or addressing everyone at a meal naturally—not a universal hour estimate.",
      "dd-how-learn",
      "dd-language-choice"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build a three-part routine: precise sound, social interaction, and connected text. Keep recorded contrasts from one speaker. Ask a tutor to role-play an older shopkeeper, younger friend, lecturer, and aunt, correcting pronouns and particles. Read one beat repeatedly and mark compounds as units despite their spaces. Group components into families: học appears in học sinh “pupil,” đại học “university,” and khoa học “science.” Sample another region monthly and list systematic differences.",
      "dd-how-learn",
      "routledge-grammar"
    ),
    mediaPractice: cited(
      "Use a transcript ladder: watch a one-minute clip for context, transcribe before opening Vietnamese captions, check phrases, shadow one sentence, and only then consult English. VTV and VOV provide formal northern-heavy registers; southern entertainment and diaspora channels broaden the ear. Melody can override ordinary tone in songs, so confirm lyrics in speech. Rotate news, interviews, drama, comedy, and family conversation.",
      "routledge-grammar",
      "dd-how-learn"
    ),
    dictionariesAndCorpora: cited(
      "A bilingual gloss is only a start. VDict is convenient but includes contributed data, so check subtle register against a monolingual dictionary, a speaker, and examples. The Computational Linguistics Center in Hồ Chí Minh City documents treebanks and corpora; the Nôm Preservation Foundation offers historical dictionaries and texts. Record each example's region, and distrust frequency claims drawn from one news-heavy corpus.",
      "routledge-grammar",
      "hcmus-corpora",
      "nom-foundation"
    ),
    resources: [
      { type: "book", title: "Vietnamese: An Essential Grammar", url: "https://www.routledge.com/9781138210707", level: "all", description: cited("A structured reference for pronunciation, noun phrases, verbs, particles, and complex sentences; use it to explain patterns noticed in real conversations.", "routledge-grammar") },
      { type: "course", title: "University of Iowa Vietnamese Language and Culture Resources", url: "https://clcl.uiowa.edu/language-resources/vietnamese-language-and-culture-resources", level: "all", description: cited("A curated university gateway to introductory text, audio, dictionaries, and cultural materials rather than a single commercial course.", "routledge-grammar") },
      { type: "corpus", title: "CLC Vietnamese Corpora", url: "https://www.clc.hcmus.edu.vn/?lang=en&page_id=467", level: "advanced", description: cited("Vietnamese treebank, word-segmentation, speech, and other corpus resources maintained by a computational linguistics center in Hồ Chí Minh City.", "hcmus-corpora") },
      { type: "dictionary", title: "VDict", url: "https://vdict.com/", level: "all", description: cited("A fast Vietnamese–English–French lookup tool; confirm nuanced or regional entries because its database includes community contributions.", "routledge-grammar") },
      { type: "other", title: "Vietnamese Nôm Preservation Foundation", url: "https://nomfoundation.org/", level: "advanced", description: cited("Digital dictionaries, manuscripts, and tools for learners moving from modern quốc ngữ toward chữ Nôm and literary history.", "nom-foundation") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Vietnamese words join conversational meanings to social associations. Quê can be countryside, hometown, or family origin; tình is affection but builds formal compounds; ăn “eat” expands into livelihood and celebration. Literature exploits tone and syllable count in lục bát, alternating six- and eight-syllable lines. Language play thrives in reduplication, rap, comedy, and online writing. Learn each word with its classifier, partner, region, and a memorable sentence.",
      "wiki-vietnamese-literature",
      "routledge-grammar"
    ),
    notableWords: [
      { term: "quê", meaning: "home region; countryside; rustic", note: cited("In quê hương it evokes homeland; về quê means return to one's home place. Calling something quê can also mean unfashionable, so affection and embarrassment can coexist.", "routledge-grammar") },
      { term: "tình nghĩa", meaning: "affection joined with loyalty or moral obligation", note: cited("A Sino-Vietnamese compound useful for relationships sustained not only by feeling but by remembered duty and mutual care.", "wiki-vietnamese") },
      { term: "duyên", meaning: "affinity, fated connection, or charm", note: cited("Common in talk about relationships and fortunate encounters; có duyên can describe personal charm or a connection that seems meant to happen.", "routledge-grammar") },
      { term: "ăn", meaning: "to eat; to participate in or benefit from many activities", note: cited("Beyond meals, ăn appears in ăn Tết “celebrate Tết,” ăn ảnh “photograph well,” and làm ăn “do business or make a living.” Collocations reveal more than the dictionary gloss.", "routledge-grammar") },
      { term: "nước", meaning: "water; country; liquid or move, by context", note: cited("Nước Việt Nam is the country Vietnam; nước mắm is fish sauce; nước đi is a move in a game or strategy. One short native word spans concrete and political life.", "routledge-grammar") },
      { term: "phở", meaning: "Vietnamese noodle soup", note: cited("Globally familiar but locally varied. Its spelling is a compact pronunciation test: ơ is not English o, and hỏi must follow the learner's regional system.", "wiki-vietnamese") },
      { term: "ạ", meaning: "deferential sentence-final particle", note: cited("A tiny word that can make a younger speaker's reply respectful: vâng ạ “yes.” Its social meaning matters more than a literal translation.", "routledge-grammar") }
    ],
    loanwordLayers: cited(
      "Native Vietic vocabulary dominates basic actions, body terms, kinship, landscape, and everyday grammar. Sino-Vietnamese forms dominate many abstract, academic, governmental, Buddhist, and technical compounds, often alongside a native near-synonym. French loans tend to cluster around foods, clothing, machinery, transport, and colonial-era institutions; English is prominent in computing, business, fitness, and popular culture. Loans are rebuilt in Vietnamese sound and grammar: cà phê carries tones, takes a classifier such as ly or cốc, and can enter a fully Vietnamese sentence. Register matters more than etymological purity.",
      "wiki-vietnamese",
      "bc-quoc-ngu"
    ),
    idioms: [
      { original: "Có công mài sắt, có ngày nên kim.", translation: "With the work of grinding iron, one day it becomes a needle.", note: "Persistence can accomplish a seemingly impossible task; often offered as encouragement for study or work." },
      { original: "Đi một ngày đàng, học một sàng khôn.", translation: "Travel one day on the road, learn a basketful of wisdom.", note: "Experience and travel teach knowledge unavailable at home; đàng is a literary or older word for road." },
      { original: "Ăn quả nhớ kẻ trồng cây.", translation: "When eating the fruit, remember the person who planted the tree.", note: "A reminder to acknowledge those whose earlier work made present benefits possible." },
      { original: "Nước đến chân mới nhảy.", translation: "Only jump when the water reaches your feet.", note: "To delay action until a problem becomes urgent—the procrastinator's familiar predicament." },
      { original: "Chín người mười ý.", translation: "Nine people, ten opinions.", note: "A compact comment on disagreement: even a small group can produce more views than people." }
    ],
    textGenres: [
      "Lục bát verse and classics such as Truyện Kiều",
      "Modern short fiction, novels, memoir, and diasporic literature",
      "News reports, essays, and official public prose",
      "Ca dao folk verse, proverbs, and oral storytelling",
      "Bolero, cải lương, revolutionary song, pop, indie music, and rap",
      "Film, television drama, web comedy, podcasts, and social video"
    ]
  },
  relationships: {
    overview: cited(
      "Vietnamese sits at the intersection of genealogy and contact. It is Vietic and Austroasiatic, shares traits with neighboring tonal languages, has a deeply Sinographic learned register, and has reshaped French and English loans. Contact does not redraw the family tree, and family relationship does not guarantee surface similarity. Vietnamese is not “a kind of Chinese.”",
      "glottolog-vietnamese",
      "wiki-vietnamese"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Vietnamese changes social temperature economically. A meal invitation can include someone; a pronoun can establish sibling-like rapport; dạ or ạ signals respect; omitting a pronoun can avoid committing to a relationship. Tết, ancestor remembrance, food names, and address keep family and place audible. Truyện Kiều circulates through allusion, while contemporary artists debate migration, class, and urban change. Ask who uses an expression, with whom, and whether it feels warm, old-fashioned, bureaucratic, regional, overseas, or playfully online.",
  resources: [
    { type: "course", title: "Discover Discomfort: How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", level: "all", description: cited("A practical framework for pronunciation, tutors, high-frequency phrases, and recording yourself; apply it to one Vietnamese regional model before widening out.", "dd-how-learn") },
    { type: "app", title: "Discover Discomfort: Glossika Review", url: "https://discoverdiscomfort.com/glossika-review-language-learning-app/", level: "beginner", description: cited("A detailed assessment of sentence repetition and native audio that explicitly notes northern and southern Vietnamese options; best used as one component, not an entire curriculum.", "dd-glossika") },
    { type: "other", title: "Discover Discomfort: How to Read and Write Any Language", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", level: "beginner", description: cited("A case for learning the real script early. For Vietnamese, that means typing and reading full diacritics rather than hiding them behind markless text.", "dd-read-write") },
    { type: "book", title: "Vietnamese: An Essential Grammar", url: "https://www.routledge.com/9781138210707", level: "all", description: cited("A substantial grammar reference to consult alongside recorded examples and regional feedback.", "routledge-grammar") },
    { type: "dictionary", title: "VDict", url: "https://vdict.com/", level: "all", description: cited("Rapid multilingual lookup with broad coverage; verify fine-grained register and regional claims using additional sources.", "routledge-grammar") },
    { type: "corpus", title: "CLC Vietnamese Corpora", url: "https://www.clc.hcmus.edu.vn/?lang=en&page_id=467", level: "advanced", description: cited("Research-oriented treebank, segmentation, and speech resources for inspecting Vietnamese beyond translated dictionary examples.", "hcmus-corpora") },
    { type: "media", title: "VOV – Voice of Vietnam", url: "https://vov.vn/", level: "intermediate", description: "Current reporting, radio, interviews, and specialist programs. Begin with one recurring presenter so topic and voice stay predictable." },
    { type: "media", title: "VnExpress", url: "https://vnexpress.net/", level: "intermediate", description: "High-volume contemporary reading across society, science, business, sport, culture, and everyday advice; use article audio where available." },
    { type: "other", title: "Vietnamese Nôm Preservation Foundation", url: "https://nomfoundation.org/", level: "advanced", description: cited("The bridge from modern Vietnamese into digitized Nôm dictionaries, manuscripts, and literary heritage.", "nom-foundation") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Chào anh / Chào chị.", translation: "Hello. (to a somewhat older man / woman)", literalMeaning: "Greet older-brother / older-sister.", usageNote: "Often more socially natural than generic xin chào. Choose the address term for the person and setting." },
    { original: "Dạ, vâng ạ.", translation: "Yes. (respectfully)", usageNote: "Vâng is especially northern; dạ is widespread and especially prominent in the south. Exact combinations vary." },
    { original: "Tôi tên là Dana.", translation: "My name is Dana.", literalMeaning: "I name is Dana.", usageNote: "Tôi is a safe neutral self-reference in an introduction, though new speakers may soon negotiate kinship-style terms." },
    { original: "Cảm ơn anh / chị.", translation: "Thank you. (to an older man / woman)", usageNote: "Naming the addressee often sounds warmer and more complete than a bare cảm ơn." },
    { original: "Xin lỗi.", translation: "Excuse me; I'm sorry.", usageNote: "Context and tone distinguish getting attention from apologizing. Add an address term when appropriate." },
    { original: "Tôi không hiểu.", translation: "I don't understand.", usageNote: "A direct, standard phrase; replace tôi when the relationship calls for another self-reference." },
    { original: "Anh nói chậm lại được không?", translation: "Could you speak more slowly? (to an older man)", literalMeaning: "Older-brother-you speak slow again can not?", usageNote: "Swap anh for chị or another suitable address term." },
    { original: "Từ này nghĩa là gì?", translation: "What does this word mean?", literalMeaning: "Word this meaning is what?", usageNote: "A useful classroom and conversation-repair question." },
    { original: "Nhà vệ sinh ở đâu?", translation: "Where is the restroom?", literalMeaning: "Restroom located where?" },
    { original: "Cái này bao nhiêu tiền?", translation: "How much is this?", literalMeaning: "Classifier this how much money?", usageNote: "Pointing plus cái này makes this practical at markets; politeness comes from voice and address too." },
    { original: "Cho tôi một ly cà phê sữa đá.", translation: "Please give me an iced coffee with condensed milk.", literalMeaning: "Give me one glass coffee milk ice.", usageNote: "Ly is common in the south; cốc is common in the north. Ordering styles vary by venue." },
    { original: "Tôi đang học tiếng Việt.", translation: "I'm learning Vietnamese.", literalMeaning: "I ongoing learn language Vietnam.", usageNote: "Đang presents the learning as in progress; it is not an obligatory present-tense marker." },
    { original: "Ngon quá!", translation: "So delicious!", literalMeaning: "Delicious excessively!", usageNote: "Quá after an adjective often means very or wonderfully, not literally too much." },
    { original: "Hẹn gặp lại nhé.", translation: "See you again, okay?", literalMeaning: "Arrange meet again particle.", usageNote: "Nhé makes the farewell collaborative and friendly." }
  ],
  sources: [
    { id: "dd-how-learn", title: "How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", publisher: "Discover Discomfort", publishedAt: "2019-02-01", accessedAt: "2026-07-10" },
    { id: "dd-language-choice", title: "Choosing a Language to Learn: Motivation, Difficulty, Passion", url: "https://discoverdiscomfort.com/languages-to-learn/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-glossika", title: "Glossika Review — The Best, But Not the Only", url: "https://discoverdiscomfort.com/glossika-review-language-learning-app/", publisher: "Discover Discomfort", updatedAt: "2022", accessedAt: "2026-07-10" },
    { id: "dd-read-write", title: "How to Read and Write Any Language — A Quick Guide", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "wiki-vietnamese", title: "Vietnamese language", url: "https://en.wikipedia.org/wiki/Vietnamese_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-vietnamese-phonology", title: "Vietnamese phonology", url: "https://en.wikipedia.org/wiki/Vietnamese_phonology", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-vietnamese-grammar", title: "Vietnamese grammar", url: "https://en.wikipedia.org/wiki/Vietnamese_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-vietnamese-alphabet", title: "Vietnamese alphabet", url: "https://en.wikipedia.org/wiki/Vietnamese_alphabet", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-vietnamese-literature", title: "Vietnamese literature", url: "https://en.wikipedia.org/wiki/Vietnamese_literature", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-vietnamese", title: "Glottolog: Vietnamese", url: "https://glottolog.org/resource/languoid/id/viet1252", publisher: "Glottolog", accessedAt: "2026-07-10" },
    { id: "routledge-grammar", title: "Vietnamese: An Essential Grammar", url: "https://www.routledge.com/9781138210707", publisher: "Routledge", publishedAt: "2020", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "The Unicode Standard, Chapter 7: Europe-I, Latin", url: "https://unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "bc-quoc-ngu", title: "Questioning the Strategies Used to Create the Chữ Quốc Ngữ Romanized Script (1615–59)", url: "https://jesuitsourcesdigital.bc.edu/jeq_2025v1n2_p313/", publisher: "Institute of Jesuit Sources, Boston College", publishedAt: "2025", accessedAt: "2026-07-10" },
    { id: "vnu-tones", title: "Vietnamese Tones and Intonation", url: "https://js.vnu.edu.vn/FS/article/download/2554/2336", publisher: "VNU Journal of Science, Foreign Languages", publishedAt: "2010", accessedAt: "2026-07-10" },
    { id: "hcmus-corpora", title: "Corpora", url: "https://www.clc.hcmus.edu.vn/?lang=en&page_id=467", publisher: "Computational Linguistics Center, VNUHCM University of Science", accessedAt: "2026-07-10" },
    { id: "nom-foundation", title: "Vietnamese Nôm Preservation Foundation", url: "https://nomfoundation.org/", publisher: "Vietnamese Nôm Preservation Foundation", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Vietnamese Language Guide: Tones, Grammar, Dialects and Quốc Ngữ",
    description: "A detailed guide to Vietnamese tones, regional accents, quốc ngữ, classifiers, pronouns, aspect, vocabulary, culture, practical phrases, and modern learning resources."
  }
} satisfies LanguageGuide;
