import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Mường",
    relationship: "Vietnamese's closest major Vietic relative",
    explanation: cited(
      "Vietnamese and Mường grew from closely related Vietic varieties. Some Mường varieties preserve consonant clusters that Vietnamese later simplified, so comparison helps linguists reconstruct the language's earlier sound system. They are related languages, not mutually intelligible accents of one standard.",
      "glottolog-vietnamese",
      "wiki-vietnamese"
    )
  },
  {
    name: "Khmer",
    relationship: "A distant Austroasiatic relative and regional neighbor",
    explanation: cited(
      "Khmer and Vietnamese both belong to the Austroasiatic family, but they sit in different branches. Khmer has no lexical tones, which shows that Vietnamese developed its tones later rather than inheriting them from the family's common ancestor. The two languages have also influenced one another through centuries of regional contact.",
      "glottolog-vietnamese",
      "wiki-vietnamese"
    )
  },
  {
    name: "Mandarin Chinese",
    slug: "mandarin-chinese",
    relationship: "An unrelated language with a deep historical influence",
    explanation: cited(
      "Chinese belongs to the Sino-Tibetan family, so it is not a parent or sibling of Vietnamese. Centuries of government, scholarship, religion, and literature brought Vietnamese a large layer of Chinese-derived vocabulary, including học “study,” quốc “country,” and văn “writing or culture.” These words follow Vietnamese pronunciation and grammar even when their history is Chinese.",
      "wiki-vietnamese",
      "bc-quoc-ngu"
    )
  },
  {
    name: "French",
    relationship: "A colonial-era contact language",
    explanation: cited(
      "French influenced Vietnamese schooling, administration, print, and material vocabulary during the colonial period. Words such as cà phê “coffee,” ga “railway station,” and bơ “butter” now sound thoroughly Vietnamese because speakers fitted them to Vietnamese syllables and tones. Knowing the French source will not tell you how to pronounce the Vietnamese result.",
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
  summary: "Vietnamese pairs an approachable alphabet and compact grammar with a precise tone system, relationship-based forms of address, and distinct regional voices across Vietnam and its diasporas.",
  family: "Austroasiatic, Vietic",
  macroRegion: "Vietnam, mainland Southeast Asia, and global diaspora communities",
  primaryScript: "Latin-based chữ Quốc ngữ",
  difficultyLabel: "Demanding",
  learnerHook: "Vietnamese lets you read signs almost immediately, then asks you to hear six written tones, choose a socially fitting word for “you,” and recognize the same spelling in voices from Hà Nội, Huế, and Hồ Chí Minh City.",
  hero: {
    imageAlt: "Vietnamese in chữ Quốc ngữ on contemporary books, signs, and messages.",
    callToActionLabel: "Hear Vietnamese in use"
  },
  classification: "A Vietic language in the Austroasiatic family and the national language of Vietnam",
  speakerCommunity: "Vietnamese is the first language of most Kinh people and a shared public language for Vietnamese people from many linguistic backgrounds. People use it at home, in school and government, in film and music, and across a lively online culture. Large communities in the United States, Australia, Canada, France, Germany, the Czech Republic, and elsewhere add their own heritage and diaspora voices.",
  facts: [
    { label: "Family", value: "Austroasiatic · Vietic" },
    { label: "National role", value: "Vietnam's official and common public language" },
    { label: "Script", value: "Chữ Quốc ngữ, a 29-letter Latin-based alphabet with tone marks" },
    { label: "Major regional groupings", value: "Northern, Central, and Southern continua" },
    { label: "Tone", value: "Six tone spellings, with different regional sound systems" },
    { label: "Grammar", value: "Usually subject–verb–object, with classifiers, aspect words, and sentence particles" }
  ],
  learnerOverview: "This guide uses contemporary standard written Vietnamese and a careful Hà Nội pronunciation as its main learning anchor. That choice gives every example a consistent sound model, but it does not make northern speech more authentic than the voices of Hồ Chí Minh City, Huế, the Mekong Delta, or Vietnamese communities overseas. You should choose Southern Vietnamese instead if that is the language of your family, partner, neighborhood, or future home.",
  origins: {
    overview: cited(
      "Vietnamese belongs to the Vietic branch of Austroasiatic, which makes Mường a close relative and Khmer a much more distant one. Earlier Vietic languages probably used consonant clusters and voicing contrasts where modern Vietnamese uses simpler initials and tones. Linguists call the historical creation of tones tonogenesis: old consonant differences gradually turned into differences in pitch and voice quality.",
      "glottolog-vietnamese",
      "wiki-vietnamese",
      "routledge-grammar"
    ),
    timeline: [
      {
        period: "Early Vietic development",
        event: cited(
          "Vietic varieties developed within Austroasiatic in northern and central mainland Southeast Asia. Linguists compare Vietnamese with Mường and smaller Vietic languages to recover older clusters and consonants. Those comparisons also show that Vietnamese did not begin as a tonal language in its modern form.",
          "glottolog-vietnamese",
          "wiki-vietnamese"
        )
      },
      {
        period: "Chinese rule and later Vietnamese dynasties",
        event: cited(
          "Educated writers used Classical Chinese for government, scholarship, and much literature during Chinese rule and long after political independence. Vietnamese speakers gave Chinese characters systematic local readings and built a large learned vocabulary from them. Spoken Vietnamese kept its own Vietic grammar throughout this contact.",
          "wiki-vietnamese",
          "bc-quoc-ngu"
        )
      },
      {
        period: "From about the 13th century",
        event: cited(
          "Vietnamese writers adapted Chinese characters and created new ones for chữ Nôm, a script that could represent the vernacular language. Nguyễn Du's Truyện Kiều became its most famous literary work. Nôm demanded years of study, though, and writers did not always use the same character for the same word.",
          "nom-foundation",
          "wiki-vietnamese-literature"
        )
      },
      {
        period: "17th century",
        event: cited(
          "Portuguese and Italian Jesuits worked with Vietnamese collaborators to develop Latin transcriptions for learning and evangelization. Alexandre de Rhodes published an influential Vietnamese–Portuguese–Latin dictionary in 1651. He helped spread one version of the system, but he did not single-handedly invent modern quốc ngữ.",
          "bc-quoc-ngu"
        )
      },
      {
        period: "Late 19th to mid-20th century",
        event: cited(
          "French colonial authorities expanded quốc ngữ in administration and schools. Vietnamese journalists, teachers, reformers, and anti-colonial writers then used its relative accessibility to reach a wider reading public. Print culture stabilized the spelling, and quốc ngữ became the national script after independence.",
          "bc-quoc-ngu",
          "wiki-vietnamese-alphabet"
        )
      },
      {
        period: "Digital Vietnamese",
        event: cited(
          "Modern software represents Vietnamese letters and stacked diacritics through Unicode, while national standards also define encoded quốc ngữ. Telex and VNI input methods let people type the marks quickly. Edited writing keeps those marks because removing them erases both vowel and tone information.",
          "unicode-latin",
          "vietnamese-character-standard"
        )
      }
    ],
    contactHistory: cited(
      "Vietnamese vocabulary records several different contact histories. Chinese-derived words dominate many formal and academic fields, while Cham and Khmer contact belongs to the multilingual history of central and southern Vietnam. French contributed words such as cà phê “coffee” and sơ mi “shirt,” and English now supplies plenty of technology, business, and youth vocabulary.",
      "wiki-vietnamese",
      "routledge-grammar",
      "bc-quoc-ngu"
    ),
    standardization: cited(
      "Vietnam has a highly shared spelling system, but it does not have one spoken accent that replaces every other voice. Hà Nội pronunciation carries prestige in much national broadcasting and foreign-language teaching, while Hồ Chí Minh City speech has enormous reach through entertainment, commerce, and diaspora communities. Dictionaries can therefore give one spelling for words that people pronounce differently by region.",
      "wiki-vietnamese",
      "routledge-grammar",
      "wiki-vietnamese-phonology"
    )
  },
  variants: {
    overview: cited(
      "People often divide Vietnamese into Northern, Central, and Southern groups, but each label covers many local accents. The differences include tones, consonants, vowels, final sounds, everyday vocabulary, pronouns, and sentence particles. Speakers usually understand one another through exposure and accommodation, though fast local speech can still be difficult.",
      "wiki-vietnamese",
      "vnu-tones"
    ),
    items: [
      {
        name: "Northern Vietnamese and the Hà Nội learning anchor",
        note: cited(
          "This guide uses careful contemporary Hà Nội speech for its main pronunciation descriptions. That model distinguishes six tone categories and commonly keeps contrasts in writing that other regions merge differently. Northern speech still varies across cities, provinces, generations, and social settings, so “Hà Nội” is an anchor rather than a label for every northern speaker.",
          "wiki-vietnamese-phonology",
          "routledge-grammar"
        )
      },
      {
        name: "Southern Vietnamese",
        note: cited(
          "Hồ Chí Minh City and Mekong Delta voices fill popular entertainment and many diaspora homes. Many southern speakers merge hỏi and ngã into one tone category and pronounce written v, d, and gi alike or nearly alike. Everyday words also differ: southern speakers often say ly “glass,” muỗng “spoon,” and trái “fruit” where northern speakers may prefer cốc, thìa, and quả.",
          "wiki-vietnamese-phonology",
          "wiki-vietnamese"
        )
      },
      {
        name: "Central and north-central Vietnamese",
        note: cited(
          "Central Vietnam contains some of the country's strongest local sound systems. Huế, Đà Nẵng, Vinh, and the speech of Nghệ An and Hà Tĩnh do not form one interchangeable “Central accent.” Learners should label the city or province whenever a Central example differs from their base model.",
          "wiki-vietnamese",
          "wiki-vietnamese-phonology"
        )
      },
      {
        name: "Formal, colloquial, and online Vietnamese",
        note: cited(
          "Formal prose leans toward compact Sino-Vietnamese vocabulary and avoids some intimate address choices. Conversation relies more heavily on relationship terms, particles, repetition, and regional words, while online language adds abbreviations and playful spellings. A sentence can be grammatically sound yet feel strangely formal if you carry it unchanged from a report into a family chat.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        )
      },
      {
        name: "Diaspora and heritage Vietnamese",
        note: cited(
          "Many post-1975 diaspora communities preserve Southern pronunciation and vocabulary associated with earlier generations. Younger speakers also create new patterns through contact with English, French, Czech, German, and other languages. Political-era terms can carry emotional weight, so ask relatives which words feel natural rather than treating a family form as wrong or universally current.",
          "wiki-vietnamese",
          "routledge-grammar"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Every Vietnamese syllable has a tone and a vowel, and it may also have an initial consonant and a final sound. Change any one of those pieces and you may create a different word. The spelling gives you useful clues, but it maps onto several regional sound systems rather than one nationwide pronunciation.",
      "wiki-vietnamese-phonology",
      "routledge-grammar",
      "dd-read-write"
    ),
    script: "Standard chữ Quốc ngữ; pronunciation notes use careful Hà Nội speech unless they carry a regional label",
    soundSystem: cited(
      "Standard spelling names six tones: ngang has no mark, huyền takes a grave accent, sắc an acute, hỏi a hook, ngã a tilde, and nặng a dot below. Hà Nội listeners hear pitch together with breathiness, creak, or a brief glottal interruption, especially in hỏi, ngã, and nặng. Much Southern speech merges hỏi and ngã, while Central systems may organize the same written tones in other ways.",
      "wiki-vietnamese-phonology",
      "vnu-tones"
    ),
    prosody: cited(
      "Vietnamese conversation does not sound like a row of six isolated tone drills. Speakers group syllables into phrases, lighten familiar words, and stretch or compress their pitch range for focus and emotion while keeping enough of each lexical tone to remain clear. Practice cảm ơn chị and Việt Nam as whole phrases, then compare your recording with one regional speaker.",
      "vnu-tones",
      "dd-how-learn"
    ),
    learnerTraps: [
      "Treating tone marks as optional decoration instead of part of the word",
      "Copying pitch while missing the breathy, creaky, or constricted voice quality of a tone",
      "Releasing final -p, -t, or -c with an English-style puff of air",
      "Merging ơ with ô, or ư with u, because English has no matching spelling contrast",
      "Mixing Hà Nội initials with Southern tone mergers before one production model feels stable",
      "Calling a systematic regional pronunciation careless or incorrect"
    ],
    sampleWords: [
      { original: "ma", translation: "ghost", note: "In careful Hà Nội speech, ngang stays fairly level. Keep both the vowel and pitch steady." },
      { original: "má", translation: "mother [common Southern word]", note: "Sắc rises here. On a syllable ending in -p, -t, or -c, the same tone is shorter and more abrupt." },
      { original: "mà", translation: "but; that; or a sentence particle", note: "Huyền falls and may sound breathy in Hà Nội speech. Context decides which grammatical meaning mà carries." },
      { original: "mả", translation: "grave or tomb", note: "Hỏi dips and then rises in a common Hà Nội model. Much Southern speech merges it with ngã." },
      { original: "mã", translation: "code; or horse in learned vocabulary", note: "Hà Nội ngã often includes a glottal break. Many Southern speakers pronounce it like hỏi." },
      { original: "mạ", translation: "rice seedling; or mother in some Central speech", note: "Hà Nội nặng sounds low and constricted. Other regions give it a different contour." },
      { original: "mát / mác", translation: "cool / mark or brand", note: "Close your mouth for the final without adding a burst. The place where that closure happens keeps the words apart." },
      { original: "tư / tu", translation: "fourth or private / to follow religious practice", note: "This pair separates ư from u. Neither vowel is just an English oo copied into both words." }
    ]
  },
  writing: {
    overview: cited(
      "Chữ Quốc ngữ uses the Latin alphabet with seven additional Vietnamese letters: đ, ă, â, ê, ô, ơ, and ư. A vowel may carry one sign for its quality and another for its tone, as ớ does with both a horn and an acute accent. Spaces divide written syllables, so a single word such as sinh viên “university student” appears with a space inside it.",
      "unicode-latin",
      "vietnamese-character-standard",
      "wiki-vietnamese-alphabet"
    ),
    primaryScript: "Latin-based chữ Quốc ngữ",
    romanization: cited(
      "Modern Vietnamese already uses a Latin-based script, so learners do not need a second romanization. Removing the diacritics does not simplify the language; it removes the spelling of vowels and tones. Learn to type complete Vietnamese with Telex or VNI from the beginning.",
      "unicode-latin",
      "dd-read-write"
    ),
    spellingNorms: cited(
      "Shared spelling preserves distinctions that some accents merge. Southern writers keep v, d, and gi separate on the page even if they pronounce them alike, while everyone writes hỏi and ngã separately even where those tones merge. Rules also choose between c, k, and q or ng and ngh according to the following vowel.",
      "unicode-latin",
      "wiki-vietnamese-alphabet"
    ),
    styleNotes: [
      cited("Spaces mark syllables more reliably than dictionary words. Search a compound such as sinh viên as a whole phrase and also learn what its components mean.", "routledge-grammar"),
      cited("Friends may omit diacritics in a quick message when context makes the meaning obvious. Published prose, names, schoolwork, and careful messages normally keep them.", "unicode-latin"),
      cited("Unicode can store the same visible Vietnamese letter as one precomposed character or as several combining characters. Good software normalizes those forms so search and sorting work consistently.", "unicode-latin"),
      cited("Chữ Hán and chữ Nôm still matter in manuscripts, temples, calligraphy, historical records, and literary scholarship. The Nôm Preservation Foundation makes many of those texts and dictionaries available online.", "nom-foundation")
    ]
  },
  grammar: {
    overview: cited(
      "Vietnamese does not change a verb to match I, she, yesterday, or tomorrow. Instead, speakers use word order, context, small aspect words, and sentence particles to show how an event unfolds and how they feel about it. Linguists call this an analytic language because separate words do much of the work that endings do in languages such as Spanish or Russian.",
      "routledge-grammar",
      "wiki-vietnamese-grammar"
    ),
    typologicalProfile: cited(
      "A basic Vietnamese clause usually follows subject–verb–object order, and descriptions generally follow the noun. Nouns have no grammatical gender, while verbs have no person endings and no obligatory tense conjugation. Vietnamese still has plenty of structure through classifiers, aspect words, reduplication, serial verbs, demonstratives, and particles.",
      "routledge-grammar",
      "wiki-vietnamese-grammar"
    ),
    morphology: cited(
      "Many meaningful pieces contain one syllable, but ordinary words often combine two or more of them. Học sinh means “school pupil,” máy tính means “computer,” and cà phê means “coffee,” even though spaces separate their syllables. Speakers also repeat sounds or words to soften a quality, spread an action around, or create an expressive effect.",
      "routledge-grammar",
      "wiki-vietnamese-grammar"
    ),
    syntax: cited(
      "Vietnamese word order tells listeners both who did what and which information matters now. Speakers can put an established topic first, and they usually leave question words where the answer would go. Descriptions and relative clauses follow the noun, so word-for-word translation from English often gives the sentence an unnatural focus.",
      "routledge-grammar",
      "wiki-vietnamese-grammar"
    ),
    advancedPainPoints: [
      "Choosing address terms across age, kinship, status, intimacy, and region",
      "Hearing the difference between time reference and the aspect meanings of đã, đang, rồi, từng, mới, and chưa",
      "Choosing a classifier or knowing when a noun does not need one",
      "Finding word boundaries when written spaces separate syllables",
      "Using final particles naturally without sounding abrupt, theatrical, or regionally mismatched"
    ],
    topics: [
      {
        title: "Classifiers help count and present nouns",
        body: cited(
          "Vietnamese usually puts a classifier between a number and a countable noun. Con goes with many animals, người with people, cuốn or quyển with bound books, and cái with a broad range of objects. The normal order before a demonstrative is number–classifier–noun–this or that.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Tôi mua hai cuốn sách này.",
        exampleTranslation: "I bought these two books. Cuốn presents each book as a bound volume."
      },
      {
        title: "Words for ‘I’ and ‘you’ describe a relationship",
        body: cited(
          "Vietnamese speakers often use family words as personal pronouns. Anh can address an older man or male partner, chị an older woman, and em the younger person in the relationship; cô, chú, bác, ông, and bà cover other ages and roles. People adjust these terms as they learn one another's age, position, and preferred relationship.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Em cảm ơn chị.",
        exampleTranslation: "Thank you. The younger speaker calls themself em and the older woman chị."
      },
      {
        title: "Aspect words show the shape of an event",
        body: cited(
          "Đã often presents something as already realized, đang as ongoing, sẽ as expected, and từng as experienced before. Vietnamese can place an event in time without any of them when context is clear. Learn each marker as a viewpoint on the event, not as a compulsory past, present, or future ending.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Tôi đã ăn rồi, còn anh ăn chưa?",
        exampleTranslation: "I've eaten already; have you eaten yet? Rồi and chưa frame the meal as completed or still pending."
      },
      {
        title: "Several verbs can build one chain",
        body: cited(
          "Vietnamese often places verbs next to one another without an English-style word for “to.” A motion verb can lead into a purpose, and another verb can add a result or direction. Learn common chains as whole patterns rather than assuming every English sequence will transfer.",
          "routledge-grammar"
        ),
        example: "Chiều nay tôi đi chợ mua rau về nấu canh.",
        exampleTranslation: "This afternoon I'm going to the market to buy vegetables, bring them home, and cook soup."
      },
      {
        title: "A topic can come first",
        body: cited(
          "Speakers can place a known or contrasting subject at the front, then say what matters about it. English sometimes adds “as for,” but Vietnamese uses this topic–comment pattern more freely. The object-first order does not replace the language's usual subject–verb–object base.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Cuốn sách này, tôi đọc xong rồi.",
        exampleTranslation: "This book, I've finished it. The book is the topic and the finished reading is the new information."
      },
      {
        title: "Là joins identities, not ordinary adjectives",
        body: cited(
          "Use là when one noun phrase identifies another, as in Lan là bác sĩ, “Lan is a doctor.” An adjective can stand as the predicate by itself, so Trời nóng means “The weather is hot” without là. English speakers sound more natural once they stop inserting là for every form of “be.”",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Cô ấy là giáo viên, nhưng hôm nay cô ấy không khỏe.",
        exampleTranslation: "She is a teacher, but she isn't well today. Là joins her to a profession, while khỏe needs no copula."
      },
      {
        title: "Question words stay where the answer belongs",
        body: cited(
          "Vietnamese normally leaves ai “who,” gì “what,” and ở đâu “where” in the same place that the answer would occupy. Yes-or-no questions can use có ... không, đã ... chưa, or a final particle. Each frame carries its own expectation, so đã ... chưa asks whether something expected has happened yet.",
          "routledge-grammar",
          "wiki-vietnamese-grammar"
        ),
        example: "Chị mua cái này ở đâu?",
        exampleTranslation: "Where did you buy this? The question phrase stays after the verb phrase."
      },
      {
        title: "Final particles change the social tone",
        body: cited(
          "A small word at the end can turn a statement into a suggestion, respectful reply, recognition, or friendly check-in. Nhé often seeks agreement, ạ shows deference, à can mark a question or realization, and rồi can announce a changed state. Their exact effect comes from the relationship, region, and melody.",
          "routledge-grammar"
        ),
        example: "Mai mình gặp lại nhé.",
        exampleTranslation: "Let's meet again tomorrow, okay? Nhé makes the plan collaborative rather than abrupt."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "People use Vietnamese across Vietnam as the national public language alongside the many languages of the country's ethnic minority communities. Families, schools, religious organizations, restaurants, community media, and digital networks also sustain it around the world. Diaspora Vietnamese keeps changing as generations preserve older forms, borrow locally, and reconnect with contemporary media from Vietnam.",
      "wiki-vietnamese",
      "routledge-grammar"
    ),
    regions: [
      { place: "Northern Vietnam", note: cited("Hà Nội media and education make northern speech widely heard, but Hải Phòng, Nam Định, and other northern communities keep distinct accents and vocabulary. Learners should not treat every northern voice as a slight variation on the capital.", "wiki-vietnamese", "wiki-vietnamese-phonology") },
      { place: "Central and north-central Vietnam", note: cited("Huế, Đà Nẵng, Nghệ An, Hà Tĩnh, and nearby areas contain sharply different tone systems and local words. Even Vietnamese speakers from elsewhere may need time to adjust to fast local conversation.", "wiki-vietnamese-phonology") },
      { place: "Southern Vietnam", note: cited("Hồ Chí Minh City provides a major urban media model, while the Mekong Delta contains many local voices. Southern vocabulary and pronunciation also strongly shape Vietnamese in several overseas communities.", "wiki-vietnamese") },
      { place: "United States, Australia, Canada, and Europe", note: cited("Migration created large Vietnamese-speaking communities with schools, newspapers, churches, temples, businesses, arts, and online media. Heritage speakers may speak fluent family Vietnamese while reading slowly or missing vocabulary used in contemporary Vietnam.", "wiki-vietnamese") },
      { place: "Neighboring Southeast Asia", note: cited("Vietnamese speakers have long lived and worked in Cambodia, Laos, Thailand, and other parts of the region. These communities add their own histories of mobility and multilingual contact.", "wiki-vietnamese") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Vietnamese gives beginners several welcome shortcuts: familiar-looking letters, no grammatical gender, and no person endings on verbs. The harder work lies in hearing vowels, finals, and tones accurately while choosing address terms that fit real relationships. Regional differences then become a listening challenge rather than an exception you can postpone forever.",
      "routledge-grammar",
      "dd-language-choice"
    ),
    easierAspects: [
      "A Latin-based script that you can begin reading immediately",
      "No grammatical gender or verb agreement by person",
      "No large table of noun cases",
      "A regular shared spelling system across regions",
      "Compact sentence patterns that become useful early",
      "Abundant contemporary news, music, film, television, and online video"
    ],
    hardAspects: [
      "Coordinating tone, vowel quality, and final consonants inside one syllable",
      "Understanding accents that merge written sounds in different ways",
      "Choosing relationship-based pronouns and address terms",
      "Hearing word boundaries when writing places spaces between syllables",
      "Using aspect words and sentence particles without translating English tense",
      "Recognizing formal Sino-Vietnamese vocabulary beside everyday alternatives"
    ],
    plateauRisks: [
      "Reading quickly while continuing to guess tones",
      "Speaking clear textbook sentences without natural address terms or particles",
      "Switching accents accidentally instead of comparing them deliberately",
      "Depending on English subtitles and never learning to segment Vietnamese speech",
      "Collecting unusual vocabulary before mastering classifier and aspect patterns"
    ],
    workload: cited(
      "Spend the first months building one consistent sound system with daily listening, recording, and regular correction from a speaker of your target region. Add short reading from the beginning, then compare a second accent once your base feels reliable. Measure progress through tasks such as following an interview or addressing everyone at a meal, not through a universal hour estimate.",
      "dd-how-learn",
      "dd-language-choice"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Organize study around sound, relationships, and connected text. Ask a teacher to role-play an older shopkeeper, younger friend, lecturer, and relative so you have to change pronouns and particles rather than repeat one safe sentence. Keep formal and conversational versions together, and label every regional form in your notes.",
      "dd-how-learn",
      "routledge-grammar"
    ),
    mediaPractice: cited(
      "Choose a short clip from one recurring presenter or series and transcribe it before opening Vietnamese captions. Check the text, shadow one sentence at a time, and consult English only after you have worked with the Vietnamese. Rotate northern news, southern entertainment, Central voices, and diaspora creators so wider comprehension grows from a stable base.",
      "dd-how-learn",
      "routledge-grammar"
    ),
    dictionariesAndCorpora: cited(
      "Use a bilingual dictionary for quick lookup, then verify subtle register with a monolingual definition, real examples, and a speaker. The Computational Linguistics Center in Hồ Chí Minh City provides Vietnamese treebank, bilingual, and speech resources, while the Nôm Preservation Foundation opens a path into historical texts. Remember that a corpus heavy in news will tell you more about journalism than family conversation.",
      "hcmus-corpora",
      "nom-foundation",
      "routledge-grammar"
    ),
    resources: [
      { type: "book", title: "Vietnamese: An Essential Grammar", url: "https://www.routledge.com/9781138210707", level: "all", description: cited("This reference explains pronunciation, noun phrases, verbs, particles, and complex sentences through a Hà Nội-based standard. Compare its examples with your target region rather than treating the book's sound model as the whole language.", "routledge-grammar") },
      { type: "course", title: "Center for Vietnamese Language and Culture", url: "https://cvlc.edu.vn/en/", level: "all", description: cited("Vietnam National University Hà Nội's center offers Vietnamese language and culture programs. It is especially useful for learners seeking structured instruction in Vietnam and a clear northern institutional model.", "vnu-language-center") },
      { type: "course", title: "University of Iowa Vietnamese Language and Culture Resources", url: "https://clcl.uiowa.edu/language-resources/vietnamese-language-and-culture-resources", level: "all", description: cited("This university page gathers courses, dictionaries, media, and cultural resources in one maintained starting point. Check the accent and level of each linked resource before building a study sequence.", "iowa-resources") },
      { type: "corpus", title: "CLC Vietnamese Corpora", url: "https://www.clc.hcmus.edu.vn/?lang=en&page_id=467", level: "advanced", description: cited("The center provides Vietnamese treebank, bilingual, segmentation, and speech data. Advanced learners can use samples to investigate word combinations and formal usage instead of relying on invented sentences.", "hcmus-corpora") },
      { type: "other", title: "Vietnamese Nôm Preservation Foundation", url: "https://nomfoundation.org/", level: "advanced", description: cited("Digital dictionaries, manuscripts, and reading tools connect modern quốc ngữ readers with chữ Nôm and older literary traditions. Start here when Truyện Kiều or historical inscriptions become part of your goal.", "nom-foundation") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Vietnamese words often gather new meanings through familiar combinations. Ăn begins as “eat” but appears in phrases about celebrating, doing business, and benefiting, while nước can mean water, country, or a move in a game. Literature and popular culture keep extending these everyday words through poetry, jokes, songs, rap, and online wordplay.",
      "wiki-vietnamese-literature",
      "routledge-grammar"
    ),
    notableWords: [
      { term: "quê", meaning: "home region; countryside; or unfashionable", note: cited("Về quê means to return to your home place, while quê hương evokes a homeland. Calling an object or style quê can also mean rustic or out of fashion, so the word moves between affection and embarrassment.", "routledge-grammar") },
      { term: "tình nghĩa", meaning: "affection joined with loyalty or obligation", note: cited("This learned compound describes relationships sustained by care and remembered duty. A one-word English gloss misses the moral weight that nghĩa adds to tình.", "wiki-vietnamese") },
      { term: "duyên", meaning: "affinity, charm, or a fortunate connection", note: cited("Speakers use duyên for relationships and encounters that seem to fit naturally or arrive through fate. Có duyên can also describe a person who has an engaging charm.", "routledge-grammar") },
      { term: "ăn", meaning: "to eat and a base for many wider activities", note: cited("Vietnamese speakers ăn Tết “celebrate Tết,” làm ăn “do business or make a living,” and say that someone ăn ảnh when they photograph well. Learn these combinations as complete expressions rather than forcing the literal meaning of “eat” into each one.", "routledge-grammar") },
      { term: "nước", meaning: "water; country; liquid; or move", note: cited("Nước Việt Nam names the country, nước mắm means fish sauce, and nước đi means a move in a game or strategy. Context turns one short native word toward geography, food, or action.", "routledge-grammar") },
      { term: "phở", meaning: "Vietnamese noodle soup", note: cited("Phở varies by region, restaurant, family, and diaspora history rather than naming one fixed recipe. Its spelling also tests two important sounds: ơ is not an English o, and hỏi follows your regional tone system.", "wiki-vietnamese") },
      { term: "ạ", meaning: "a deferential sentence-final particle", note: cited("A younger speaker can add ạ to make a reply respectful, as in vâng ạ, “yes.” The particle describes the social stance of the answer rather than adding a separate factual meaning.", "routledge-grammar") }
    ],
    loanwordLayers: cited(
      "Native Vietic words cover much basic action, kinship, landscape, and grammar. Chinese-derived vocabulary fills many academic, governmental, Buddhist, and technical fields, often beside a more everyday native expression. French loans remain common in food, clothing, machinery, and transport, while English is especially visible in technology, business, fitness, and popular culture.",
      "wiki-vietnamese",
      "bc-quoc-ngu"
    ),
    idioms: [
      { original: "Có công mài sắt, có ngày nên kim.", translation: "With enough work, iron can one day become a needle.", note: "People use this proverb to encourage persistence in study, craft, or any difficult long-term effort." },
      { original: "Đi một ngày đàng, học một sàng khôn.", translation: "Travel for a day and gain a basketful of wisdom.", note: "The proverb values knowledge gained through experience beyond home. Đàng is an older or literary word for “road.”" },
      { original: "Ăn quả nhớ kẻ trồng cây.", translation: "When you eat the fruit, remember the person who planted the tree.", note: "This reminds people to acknowledge those whose earlier work made a present benefit possible." },
      { original: "Nước đến chân mới nhảy.", translation: "Only jump when the water reaches your feet.", note: "Use it for someone who delays action until the problem becomes urgent." },
      { original: "Chín người mười ý.", translation: "Nine people, ten opinions.", note: "Even a small group can produce more opinions than people. The line lightly acknowledges disagreement." }
    ],
    textGenres: [
      "Lục bát verse and classics such as Truyện Kiều",
      "Modern fiction, memoir, essays, and diaspora literature",
      "News reports, public information, and academic prose",
      "Ca dao folk verse, proverbs, jokes, and oral storytelling",
      "Bolero, cải lương, folk music, pop, indie music, and rap",
      "Film, television drama, web comedy, podcasts, and social video"
    ]
  },
  relationships: {
    overview: cited(
      "Vietnamese is a Vietic and Austroasiatic language, even though much of its formal vocabulary comes from Chinese. It also shares traits with neighboring languages after centuries of regional contact and has reshaped French and English loans. Family descent, contact, and surface similarity are three different stories, so Vietnamese is not “a kind of Chinese.”",
      "glottolog-vietnamese",
      "wiki-vietnamese"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Vietnamese speakers constantly show relationships through their choice of names, kinship terms, and particles. A meal invitation can include someone in the group, while dạ or ạ can show deference and a carefully chosen anh, chị, cô, or chú can make an interaction warmer. Contemporary Vietnamese culture includes Tết and ancestor remembrance, but it also includes football commentary, recipe channels, comedy, rap, films, games, and fast-moving group chats.",
  resources: [
    { type: "other", title: "Discover Discomfort: How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", level: "all", description: cited("This practical framework emphasizes pronunciation, high-frequency sentences, tutors, and repeated audio. For Vietnamese, apply it to one regional voice first and make every saved sentence socially specific.", "dd-how-learn") },
    { type: "app", title: "Discover Discomfort: Glossika Review", url: "https://discoverdiscomfort.com/glossika-review-language-learning-app/", level: "beginner", description: cited("The review explains how sentence repetition and native audio can build automaticity, and it specifically notes two Vietnamese options. Treat a sentence bank as listening practice rather than a complete grammar or relationship guide.", "dd-glossika") },
    { type: "other", title: "Discover Discomfort: How to Read and Write Any Language", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", level: "beginner", description: cited("This article argues for using the real writing system early and calls out Vietnamese's familiar letters but unfamiliar sounds. In practice, that means typing every diacritic instead of hiding tones behind markless text.", "dd-read-write") },
    { type: "book", title: "Vietnamese: An Essential Grammar", url: "https://www.routledge.com/9781138210707", level: "all", description: cited("This detailed reference covers Hà Nội-based pronunciation, grammar, and common sentence patterns. Use it beside recordings and feedback from the region you actually want to speak in.", "routledge-grammar") },
    { type: "course", title: "Center for Vietnamese Language and Culture", url: "https://cvlc.edu.vn/en/", level: "all", description: cited("This Vietnam National University Hà Nội center teaches Vietnamese language and culture. Its programs offer a direct institutional route for learners who want structured northern-based study.", "vnu-language-center") },
    { type: "course", title: "University of Iowa Vietnamese resources", url: "https://clcl.uiowa.edu/language-resources/vietnamese-language-and-culture-resources", level: "all", description: cited("The university curates courses, dictionaries, media, and cultural links. It works best as a resource map rather than one linear curriculum.", "iowa-resources") },
    { type: "corpus", title: "CLC Vietnamese Corpora", url: "https://www.clc.hcmus.edu.vn/?lang=en&page_id=467", level: "advanced", description: cited("The collection includes Vietnamese treebank, bilingual, segmentation, and speech resources. Use it to check real combinations, while remembering that each dataset represents particular genres.", "hcmus-corpora") },
    { type: "media", title: "VOV – Voice of Vietnam", url: "https://vov.vn/", level: "intermediate", description: "VOV provides current reporting, radio, interviews, and specialist programs. Follow one presenter or recurring program before trying to understand every regional voice at once." },
    { type: "media", title: "VnExpress", url: "https://vnexpress.net/", level: "intermediate", description: "VnExpress offers a large stream of current reading across society, science, business, sport, culture, and everyday advice. Use article audio when available and save phrases rather than isolated words." },
    { type: "other", title: "Vietnamese Nôm Preservation Foundation", url: "https://nomfoundation.org/", level: "advanced", description: cited("The foundation provides digitized Nôm dictionaries, manuscripts, and reading tools. It gives advanced readers a practical bridge from modern quốc ngữ into literary and historical Vietnamese.", "nom-foundation") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Chào anh / Chào chị.", translation: "Hello. (to a somewhat older man / woman)", literalMeaning: "Greetings, older-brother / older-sister.", usageNote: "This often sounds more socially natural than a bare xin chào. Choose the address term for the actual person." },
    { original: "Dạ, vâng ạ.", translation: "Yes. (respectfully)", usageNote: "Vâng is especially common in the north, while dạ is widespread and particularly prominent in the south. Speakers combine them differently by region and situation." },
    { original: "Tôi tên là Dana.", translation: "My name is Dana.", literalMeaning: "I name is Dana.", usageNote: "Tôi is a useful neutral self-reference in an introduction. Speakers may soon switch to relationship-based terms." },
    { original: "Cảm ơn anh / chị.", translation: "Thank you. (to an older man / woman)", usageNote: "Naming the person through an address term often sounds warmer than a bare cảm ơn." },
    { original: "Xin lỗi.", translation: "Excuse me; I'm sorry.", usageNote: "Context and tone distinguish getting attention from apologizing. Add a fitting address term when you know it." },
    { original: "Tôi không hiểu.", translation: "I don't understand.", usageNote: "This is direct and standard. Replace tôi when the relationship calls for a different self-reference." },
    { original: "Anh nói chậm lại được không?", translation: "Could you speak more slowly? (to an older man)", literalMeaning: "Older-brother-you speak slowly again possible not?", usageNote: "Swap anh for chị or another address term that fits the listener." },
    { original: "Từ này nghĩa là gì?", translation: "What does this word mean?", literalMeaning: "Word this meaning is what?", usageNote: "This works in lessons and in ordinary conversation repair." },
    { original: "Nhà vệ sinh ở đâu?", translation: "Where is the restroom?", literalMeaning: "Restroom located where?" },
    { original: "Cái này bao nhiêu tiền?", translation: "How much is this?", literalMeaning: "Classifier this how much money?", usageNote: "Pointing makes cái này practical at a market. Your voice and address term carry much of the politeness." },
    { original: "Cho tôi một ly cà phê sữa đá.", translation: "Please give me an iced coffee with condensed milk.", literalMeaning: "Give me one glass coffee milk ice.", usageNote: "Ly is common in Southern speech, while Northern speakers often say cốc. Ordering patterns also vary by venue." },
    { original: "Tôi đang học tiếng Việt.", translation: "I'm learning Vietnamese.", literalMeaning: "I ongoing learn language Vietnam.", usageNote: "Đang presents the learning as in progress. It is not an obligatory present-tense marker." },
    { original: "Ngon quá!", translation: "So delicious!", literalMeaning: "Delicious to a high degree!", usageNote: "Quá after an adjective often expresses delighted intensity, not a complaint that there is too much." },
    { original: "Hẹn gặp lại nhé.", translation: "See you again, okay?", literalMeaning: "Arrange meet again particle.", usageNote: "Nhé makes the farewell friendly and collaborative." }
  ],
  sources: [
    { id: "dd-how-learn", title: "How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", publisher: "Discover Discomfort", publishedAt: "2019-02-01", accessedAt: "2026-07-18" },
    { id: "dd-language-choice", title: "Choosing a Language to Learn: Motivation, Difficulty, Passion", url: "https://discoverdiscomfort.com/languages-to-learn/", publisher: "Discover Discomfort", accessedAt: "2026-07-18" },
    { id: "dd-glossika", title: "Glossika Review — The Best, But Not the Only", url: "https://discoverdiscomfort.com/glossika-review-language-learning-app/", publisher: "Discover Discomfort", updatedAt: "2022", accessedAt: "2026-07-18" },
    { id: "dd-read-write", title: "How to Read and Write Any Language — A Quick Guide", url: "https://discoverdiscomfort.com/how-to-read-and-write-any-language-and-why-you-should-learn/", publisher: "Discover Discomfort", accessedAt: "2026-07-18" },
    { id: "wiki-vietnamese", title: "Vietnamese language", url: "https://en.wikipedia.org/wiki/Vietnamese_language", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "wiki-vietnamese-phonology", title: "Vietnamese phonology", url: "https://en.wikipedia.org/wiki/Vietnamese_phonology", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "wiki-vietnamese-grammar", title: "Vietnamese grammar", url: "https://en.wikipedia.org/wiki/Vietnamese_grammar", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "wiki-vietnamese-alphabet", title: "Vietnamese alphabet", url: "https://en.wikipedia.org/wiki/Vietnamese_alphabet", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "wiki-vietnamese-literature", title: "Vietnamese literature", url: "https://en.wikipedia.org/wiki/Vietnamese_literature", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "glottolog-vietnamese", title: "Glottolog: Vietnamese", url: "https://glottolog.org/resource/languoid/id/viet1252", publisher: "Glottolog", accessedAt: "2026-07-18" },
    { id: "routledge-grammar", title: "Vietnamese: An Essential Grammar", url: "https://www.routledge.com/9781138210707", publisher: "Routledge", publishedAt: "2020", accessedAt: "2026-07-18" },
    { id: "unicode-latin", title: "The Unicode Standard, Chapter 7: Europe-I, Latin", url: "https://unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-18" },
    { id: "vietnamese-character-standard", title: "TCVN 8271-3:2010: Encoded Character Set — Quốc Ngữ Script", url: "https://tieuchuan.vsqi.gov.vn/tieuchuan/view?sohieu=TCVN+8271-3%3A2010", publisher: "Vietnam Standards and Quality Institute", publishedAt: "2010", accessedAt: "2026-07-18" },
    { id: "bc-quoc-ngu", title: "Questioning the Strategies Used to Create the Chữ Quốc Ngữ Romanized Script (1615–59)", url: "https://jesuitsourcesdigital.bc.edu/jeq_2025v1n2_p313/", publisher: "Institute of Jesuit Sources, Boston College", publishedAt: "2025", accessedAt: "2026-07-18" },
    { id: "vnu-tones", title: "Vietnamese Tones and Intonation", url: "https://js.vnu.edu.vn/FS/article/download/2554/2336", publisher: "VNU Journal of Science, Foreign Languages", publishedAt: "2010", accessedAt: "2026-07-18" },
    { id: "vnu-language-center", title: "Center for Vietnamese Language and Culture", url: "https://cvlc.edu.vn/en/", publisher: "VNU University of Social Sciences and Humanities", accessedAt: "2026-07-18" },
    { id: "iowa-resources", title: "Vietnamese Language and Culture Resources", url: "https://clcl.uiowa.edu/language-resources/vietnamese-language-and-culture-resources", publisher: "University of Iowa", accessedAt: "2026-07-18" },
    { id: "hcmus-corpora", title: "Corpora", url: "https://www.clc.hcmus.edu.vn/?lang=en&page_id=467", publisher: "Computational Linguistics Center, VNUHCM University of Science", accessedAt: "2026-07-18" },
    { id: "nom-foundation", title: "Vietnamese Nôm Preservation Foundation", url: "https://nomfoundation.org/", publisher: "Vietnamese Nôm Preservation Foundation", accessedAt: "2026-07-18" }
  ],
  seo: {
    title: "Vietnamese Language Guide: Tones, Grammar, Dialects and Quốc Ngữ",
    description: "A clear, example-rich guide to Vietnamese tones, regional accents, quốc ngữ, classifiers, pronouns, particles, cultural context, and modern learning resources."
  }
} satisfies LanguageGuide;
