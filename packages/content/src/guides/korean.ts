import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const sources = [
  { id: "dd-honorifics", title: "A Simple Guide to Korean Honorifics", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/korean-honorifics-simple-guide/", publishedAt: "2023-01-31", accessedAt: "2026-07-10" },
  { id: "dd-laughter", title: "How People Laugh Online in Different Languages", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/how-people-laugh-online-different-languages/", accessedAt: "2026-07-10" },
  { id: "dd-seoul", title: "Living in Seoul as a Digital Nomad", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/living-in-seoul-korea-digital-nomad/", accessedAt: "2026-07-10" },
  { id: "wikipedia", title: "Korean language", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Korean_language", accessedAt: "2026-07-10" },
  { id: "north-south", title: "North-South differences in the Korean language", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/North%E2%80%93South_differences_in_the_Korean_language", accessedAt: "2026-07-10" },
  { id: "dialects", title: "Korean dialects", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Korean_dialects", accessedAt: "2026-07-10" },
  { id: "nikl-norms", title: "Korean Language Norms: Spelling, Standard Language, Loanwords and Romanization", publisher: "National Institute of Korean Language", url: "https://korean.go.kr/kornorms/main/main.do", accessedAt: "2026-07-10" },
  { id: "nikl-roman", title: "Romanization of Korean", publisher: "National Institute of Korean Language", url: "https://www.korean.go.kr/front_eng/roman/roman_01.do", accessedAt: "2026-07-10" },
  { id: "krdict", title: "Basic Korean Dictionary", publisher: "National Institute of Korean Language", url: "https://krdict.korean.go.kr/eng", accessedAt: "2026-07-10" },
  { id: "unicode", title: "The Unicode Standard, Chapter 18: East Asia", publisher: "Unicode Consortium", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-18/", updatedAt: "2025-09-09", accessedAt: "2026-07-10" },
  { id: "glottolog", title: "Korean", publisher: "Glottolog 5.2", url: "https://glottolog.org/resource/languoid/id/kore1280", accessedAt: "2026-07-10" },
  { id: "wals", title: "Korean", publisher: "World Atlas of Language Structures Online", url: "https://wals.info/languoid/lect/wals_code_kor", accessedAt: "2026-07-10" },
  { id: "ksi", title: "Online King Sejong Institute", publisher: "King Sejong Institute Foundation", url: "https://www.iksi.or.kr/lms/main/main.do?lang=EN", accessedAt: "2026-07-10" },
  { id: "ksi-apps", title: "King Sejong Institute Learning Apps", publisher: "King Sejong Institute Foundation", url: "https://app.ksif.or.kr/home/index.do?lang=en", accessedAt: "2026-07-10" }
] satisfies LanguageGuide["sources"];

const relatedLanguages: LanguageGuide["relationships"]["languages"] = [
  {
    name: "Jejueo",
    relationship: "Closest clearly separate Koreanic language, or highly divergent variety in some traditions",
    explanation: cited("Jejueo, traditionally spoken on Jeju Island, shares Koreanic ancestry with Korean but has enough distinctive vocabulary, sound patterns and grammar to be classified as a separate language by many linguists. Calling it simply a colorful accent can obscure both its structural distance and its endangered status; local identity and scholarly classification do not always draw the boundary in the same place.", "glottolog", "dialects")
  },
  {
    name: "Japanese",
    slug: "japanese",
    relationship: "Typologically similar neighbor; no demonstrated close genetic relationship",
    explanation: cited("Japanese and Korean both favor subject-object-verb order, place modifiers before heads, use particles and build elaborate predicate endings. Those similarities make each grammar feel less alien to learners of the other, but proposals of a shared recent ancestor remain unproven. Centuries of contact, translation and parallel use of Literary Chinese also shaped comparable learned vocabularies.", "wikipedia", "wals")
  },
  {
    name: "Mandarin Chinese",
    slug: "mandarin-chinese",
    relationship: "Major historical source of learned vocabulary, not a genetic parent",
    explanation: cited("A very large layer of Korean vocabulary is Sino-Korean: words created from Chinese characters and read with Korean pronunciations, such as 문화 munhwa ‘culture’ and 경제 gyeongje ‘economy.’ Korean grammar is not descended from Chinese grammar, and everyday Korean also contains a deep native lexicon. Hanja knowledge becomes useful chiefly for distinguishing learned roots and homophones.", "wikipedia", "krdict")
  }
];

const resources: LanguageGuide["resources"] = [
  {
    type: "course",
    title: "Online King Sejong Institute",
    url: "https://www.iksi.or.kr/lms/main/main.do?lang=EN",
    level: "all",
    description: cited("A public, structured curriculum with levelled Korean language and culture courses; use it as the backbone for systematic study rather than as a pile of disconnected lessons.", "ksi")
  },
  {
    type: "app",
    title: "King Sejong Institute Learning Apps",
    url: "https://app.ksif.or.kr/home/index.do?lang=en",
    level: "beginner",
    description: cited("Official mobile tools for vocabulary, grammar, conversation and pronunciation that pair naturally with the Sejong curriculum.", "ksi-apps")
  },
  {
    type: "dictionary",
    title: "Basic Korean Dictionary (한국어기초사전)",
    url: "https://krdict.korean.go.kr/eng",
    level: "all",
    description: cited("A learner-oriented National Institute dictionary with definitions, usage labels, examples, audio and multilingual support. Search conjugated-looking forms by finding their dictionary stem.", "krdict")
  },
  {
    type: "other",
    title: "Discover Discomfort: Korean Honorifics",
    url: "https://discoverdiscomfort.com/korean-honorifics-simple-guide/",
    level: "beginner",
    description: cited("A practical orientation to titles, honorific vocabulary and the difference between respecting the person discussed and speaking politely to the listener.", "dd-honorifics")
  },
  {
    type: "corpus",
    title: "National Institute of Korean Language resources",
    url: "https://www.korean.go.kr/",
    level: "advanced",
    description: cited("The institutional gateway to dictionaries, language norms and corpus resources. It is especially valuable when a textbook rule collides with actual spelling or usage questions.", "nikl-norms", "krdict")
  },
  {
    type: "media",
    title: "KBS News Korean",
    url: "https://news.kbs.co.kr/",
    level: "intermediate",
    description: "Broadcast clips and written reports provide matching formal audio and prose; compare headlines with the fuller spoken report rather than copying headline fragments into conversation."
  },
  {
    type: "media",
    title: "EBS Korean educational media",
    url: "https://www.ebs.co.kr/",
    level: "intermediate",
    description: "Documentaries, interviews and educational programs provide clearer diction and broader subject matter than relying only on scripted drama dialogue."
  }
];

export const koreanGuide: LanguageGuide = {
  slug: "korean",
  name: "Korean",
  autonym: "한국어 / 조선말",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Korean joins a remarkably learnable script to a language of social calibration: particles, verb endings, sound change and word choice continually show how a speaker frames an event and a relationship.",
  seo: {
    title: "Korean Language Guide: Hangul, Grammar, Speech Levels and Varieties",
    description: "A reader-focused guide to Korean history, Hangul, pronunciation, grammar, honorifics, North and South standards, regional varieties and serious learning resources."
  },
  family: "Koreanic",
  macroRegion: "East Asia",
  primaryScript: "Hangul; Hanja in limited contexts",
  difficultyLabel: "Demanding",
  learnerHook: "Hangul opens the door quickly; the long adventure is learning to hear sound changes, build clauses from the end, and choose a voice that fits the person and moment.",
  hero: {
    imageAlt: "Hangul syllable blocks arranged beside a contemporary Korean conversation.",
    callToActionLabel: "Explore Korean"
  },
  classification: "The principal language of the Koreanic family, with no demonstrated close external relative",
  speakerCommunity: "Korean is spoken by roughly eighty million people, principally in South Korea and North Korea and in communities across China, Japan, Central Asia and farther abroad. The label covers two state standards, regional voices and diaspora experiences. In South Korea the language is normally called 한국어 Hangugeo or 한국말 Hangungmal; in North Korea, 조선말 Chosŏnmal or 조선어 Chosŏnŏ is usual. These are identity-laden names, not two mutually unintelligible languages. Global courses mostly teach the South Korean standard; learners should label that target honestly rather than presenting Seoul usage as the only authentic Korean.",
  facts: [
    { label: "Autonyms", value: "한국어 Hangugeo; 조선말 Chosŏnmal" },
    { label: "Family", value: "Koreanic" },
    { label: "Core area", value: "Korean peninsula" },
    { label: "Main script", value: "Hangul syllable blocks" },
    { label: "Basic order", value: "Subject-object-verb, with frequent omission" },
    { label: "Standards", value: "South Korean Pyojuneo; North Korean Munhwaŏ" }
  ],
  learnerOverview: "The first satisfying moment often comes within days, when 한글 hangeul stops being decoration and becomes readable. Then written 같이 gachi ‘together’ turns out to sound roughly [가치], subjects vanish when context supplies them, and a request changes its ending with relationship and setting. None of this is random: spelling preserves structure, particles frame phrases, and predicate endings shape stance. Collect complete, situated lines. Contrast 친구랑 먹어요 ‘I eat with a friend,’ 먼저 드세요 ‘Please eat first’ to an honored listener, and 다 먹었어? ‘Did you finish?’ between intimates. Media offers enormous motivation, but subtitles flatten address terms and omitted information. Let dramas and songs generate questions, then answer them with transcripts, dictionaries, teachers and conversation.",

  origins: {
    overview: cited("Korean is the best-attested member of the small Koreanic family. Earlier forms are recovered from place names, glosses, inscriptions and texts produced on the peninsula, but the record is uneven because educated writing long relied heavily on Literary Chinese. Systems called idu, hyangchal and gugyeol used Chinese characters to represent Korean meanings, sounds or grammatical cues. They reveal ingenuity rather than a simple stage of ‘writing Korean badly.’ The creation of Hunminjeongeum in the fifteenth century made Korean sounds and endings representable with a purpose-built script. Modern Korean grew through major phonological and grammatical changes from Middle Korean, and through contact with Classical Chinese, Mongolic languages, Japanese, Russian, English and neighboring communities. Its external family relationship remains unsettled: resemblance to Japanese or so-called Altaic groupings is not proof of common descent.", "wikipedia", "glottolog", "unicode"),
    timeline: [
      {
        period: "Before the fifteenth century",
        event: cited("Korean speech existed alongside a prestige written culture centered on Literary Chinese. Adapted character systems represented Korean names, poetry, grammatical endings and reading aids in different ways. Surviving hyangga songs and administrative materials offer precious but difficult evidence for Old Korean and its successors.", "wikipedia")
      },
      {
        period: "1443–1446",
        event: cited("King Sejong's court completed and promulgated Hunminjeongeum, the script now called Hangul. Its explanatory text describes letter shapes in relation to articulation and combines letters into syllable blocks. The script expanded possible readership, although character-based elite writing continued for centuries.", "unicode", "wikipedia")
      },
      {
        period: "Fifteenth–nineteenth centuries",
        event: cited("Early Hangul documents preserve Middle Korean distinctions later lost or reorganized, including pitch marking and letters no longer used in ordinary modern spelling. Vernacular fiction, letters, religious texts and practical works gradually broadened Hangul's domains while mixed Hangul-Hanja writing remained important.", "unicode", "wikipedia")
      },
      {
        period: "Since 1945",
        event: cited("Political division produced separate institutions and standards. South Korean Pyojuneo and North Korean Munhwaŏ retain a common structural base and broad intelligibility, but decades of separate education, media, terminology and language policy have widened differences in vocabulary, spelling, alphabetical order and some pronunciation conventions.", "north-south", "nikl-norms")
      }
    ],
    contactHistory: cited("Chinese influence is deepest in the learned lexicon: Sino-Korean morphemes build terms across government, science, education and everyday life. Character knowledge once made those relationships visible; Hangul-only spelling can leave homophonous roots less transparent. Japanese rule and earlier exchange introduced words and calques, some of which became ordinary while others were deliberately replaced after liberation. In South Korea, postwar English contact produced words such as 컴퓨터 keompyuteo ‘computer’ and 아파트 apateu ‘apartment,’ often with meanings or abbreviations specific to Korean. North Korean policy has more often promoted native formations or different international sources, though neat claims that one side uses only English and the other only Russian are false. Diaspora varieties likewise reflect contact: Koryo-mar in Central Asia, Korean in China and heritage Korean elsewhere have their own histories.", "north-south", "wikipedia", "krdict"),
    standardization: cited("South Korea's standard-language regulation defines its basis in the modern Seoul speech widely used by educated speakers, while spelling and standard pronunciation are maintained through official norms and dictionaries. This is a prescriptive public standard, not a claim that every Seoul resident sounds the same. North Korea calls its standard Munhwaŏ, ‘cultured language,’ and officially associates it with Pyongyang; its relationship to older Seoul-based norms and actual Pyongan speech is more complicated than that slogan suggests. The standards differ in forms such as South Korean 여자 yeoja versus North Korean 녀자 nyŏja ‘woman,’ in spacing and vocabulary preferences, and in romanization. Learners should state which convention they use, especially in reference material, without treating either population's everyday speech as identical to a rulebook.", "nikl-norms", "north-south", "dialects")
  },

  variants: {
    overview: cited("Korean variation follows geography, generation, mobility and social network. Traditional dialect zones include Central, Chungcheong, Jeolla, Gyeongsang, Hamgyong and Pyongan areas, but contemporary city speech is shaped by migration and standard-language media. A dialect is not merely standard Korean pronounced with comic intonation: it may have its own endings, particles and vocabulary. Entertainment often uses stylized regional speech to signal toughness, warmth or rurality, so it is safer to learn from actual speakers and documentaries than from a single fictional character.", "dialects", "wikipedia"),
    items: [
      { name: "Seoul and South Korean standard", note: cited("Pyojuneo is based on a codified ideal of modern Seoul speech. Younger Seoul speakers have merged or shifted some traditional vowel contrasts, and everyday conversation uses reductions absent from formal reading. ‘Standard’ describes institutional reach, not accentlessness.", "nikl-norms", "dialects") },
      { name: "Gyeongsang varieties", note: cited("Southeastern varieties around Busan, Daegu and neighboring regions preserve lexical pitch contrasts or pitch-accent patterns absent from standard Seoul Korean. Their sentence endings, vowels and vocabulary are also distinctive; a dramatic ‘Busan accent’ imitation rarely captures the full system.", "dialects", "wikipedia") },
      { name: "North Korean Munhwaŏ and regional speech", note: cited("The North Korean standard has separate normative vocabulary, spelling and pronunciation practices, while actual northern regional varieties include Pyongan and Hamgyong speech. Political broadcasts are an unusually formal genre and are poor evidence for how every North Korean converses.", "north-south", "dialects") },
      { name: "Jejueo", note: cited("Jejueo is sufficiently divergent that many sources classify it separately within Koreanic. Learners should not fold it casually into a list of mutually intelligible South Korean accents, and should recognize community-led documentation and revitalization as language work in its own right.", "glottolog", "dialects") }
    ]
  },

  pronunciation: {
    overview: cited("Hangul names the pieces of Korean speech clearly, but modern pronunciation is not a letter-by-letter recital. Consonants contrast in three series often called lax, aspirated and tense; syllable-final consonants are restricted; and neighboring sounds trigger liaison, nasalization, tensification and palatalization. These patterns make 같이 ‘together’ sound like [가치] and 국물 ‘broth’ like [궁물]. Learn the spelling because it exposes related word forms, then attach an audio memory to every useful phrase.", "nikl-norms", "wikipedia"),
    script: "Hangul",
    soundSystem: cited("At the start of a word, ㄱ, ㄷ, ㅂ and ㅈ are not simply English g, d, b and j; their phonetic realization depends on position and generation. They contrast with strongly aspirated ㅋ, ㅌ, ㅍ, ㅊ and constricted tense ㄲ, ㄸ, ㅃ, ㅉ. At the end of a syllable, many written consonants collapse to a small set of unreleased codas, called 받침 batchim. A following vowel may release the underlying consonant into the next syllable, while a following consonant may transform it. Standard descriptions list more vowel distinctions than many younger Seoul speakers maintain consistently, notably the traditional ㅐ/ㅔ contrast.", "nikl-norms", "wikipedia"),
    prosody: cited("Standard Seoul Korean does not use lexical stress like English or lexical tone like Mandarin, but pitch, phrase boundaries and rhythm are crucial. Contemporary Seoul speech often uses the pitch after an initial consonant as a cue distinguishing lax from aspirated or tense series. Intonation also marks questions, continuation, surprise and politeness. Regional systems differ: Gyeongsang varieties can preserve word-level pitch contrasts. Shadow complete clauses rather than placing equal emphasis on each Hangul block.", "dialects", "wikipedia"),
    learnerTraps: [
      "Mapping ㄱ/ㅋ/ㄲ onto English g/k as if voicing alone distinguished them; aspiration, constriction and phrase position all matter.",
      "Releasing every final consonant strongly. Most batchim are unreleased unless liaison supplies a following vowel.",
      "Reading spelling through sound change too late: 국물 is normally [궁물], not a careful guk-mul sequence.",
      "Treating Revised Romanization as a pronunciation key; spellings such as eo and eu are conventions, not English vowel instructions.",
      "Copying the exaggerated pitch of a character or broadcaster without checking region, genre and age."
    ],
    sampleWords: [
      { original: "달 / 딸 / 탈", transliteration: "dal / ttal / tal", translation: "moon / daughter / mask", note: "A lax–tense–aspirated three-way contrast; listen to the onset and the following vowel's pitch and breath." },
      { original: "한국말", transliteration: "Hangungmal", translation: "Korean speech/language", note: "Written 한국말 Hangukmal is pronounced with nasal assimilation: roughly 한궁말." },
      { original: "같이", transliteration: "gachi", translation: "together", note: "The final ㅌ before the i-like vowel of 이 is palatalized, producing a ㅊ sound." },
      { original: "읽어요", transliteration: "ilgeoyo", translation: "read; reads (polite)", note: "The cluster in 읽다 behaves differently before the vowel-initial ending: the ㄱ links forward." },
      { original: "좋다", transliteration: "jota", translation: "to be good", note: "The ㅎ combines with following ㄷ to yield an aspirated ㅌ-like sound." },
      { original: "설날", transliteration: "Seollal", translation: "Lunar New Year", note: "The ㄹ/ㄴ sequence assimilates to a doubled lateral sound, approximately 설랄." }
    ]
  },

  writing: {
    overview: cited("Hangul letters are arranged into square-looking syllable blocks: 한 combines ㅎ h, ㅏ a and final ㄴ n, while 글 combines ㄱ g/k, ㅡ eu and ㄹ l/r. This makes a linear alphabet visually syllabic. The original design is often called featural because related consonant shapes encode shared places or manners of articulation. Modern Korean uses 24 basic jamo—14 consonants and 10 vowels—plus doubled and combined forms. Unicode supports both precomposed modern syllables and sequences of conjoining jamo, which explains why two visually identical strings can have different underlying code sequences.", "unicode", "wikipedia"),
    primaryScript: "Hangul, with limited Hanja",
    romanization: cited("South Korea's Revised Romanization, promulgated in 2000, is the common official system for place names and general use. It writes 어 as eo, 으 as eu and distinguishes some consonants by position: 부산 Busan but 경복궁 Gyeongbokgung. McCune–Reischauer remains visible in scholarship and is related to, but not identical with, North Korean romanization: 평양 may appear as Pyeongyang or P'yŏngyang. Personal names often follow established individual spellings instead of mechanically applying one system.", "nikl-roman", "north-south"),
    spellingNorms: cited("Modern South Korean spelling is morphophonemic: it often keeps a morpheme recognizable even when pronunciation changes. 꽃이 ‘flower + subject marker’ is written with underlying 꽃 and pronounced 꼬치; 꽃만 ‘only flowers’ is pronounced 꼰만. Spacing separates grammatical words, but particles attach to the preceding noun and many dependent nouns or auxiliary constructions create genuine difficulty even for native writers. North and South rules differ in some initial-sound spellings, spacing and alphabetical order. Consult the relevant norm rather than treating autocorrect as linguistic authority.", "nikl-norms", "north-south"),
    styleNotes: [
      cited("Contemporary South Korean public prose is overwhelmingly Hangul-based. Hanja appears selectively in historical material, academic contexts, newspapers or parenthetical disambiguation, and it remains useful for unpacking Sino-Korean vocabulary without being required for ordinary messaging.", "wikipedia", "unicode"),
      "Formal writing favors complete connective logic and 합니다-style predicates; personal essays, fiction and online posts may use 해요, 해 or plain written 한다 styles for distinct voices.",
      cited("Digital Korean has genre-specific conventions. Repeated ㅋ represents laughter, while ㅎㅎ is a softer or more restrained laugh; neither has a fixed emotional value outside its conversational context.", "dd-laughter"),
      "Do not leave spaces between every syllable block. Hangul blocks form words, and particles such as 은/는, 이/가 and 을/를 attach directly to the noun."
    ]
  },

  grammar: {
    overview: cited("Korean grammar is organized around the predicate at the end of the clause. Noun phrases receive particles, modifiers precede what they modify, and verbs or descriptive verbs accumulate endings for tense, aspect, connection, stance, politeness and sentence type. The language is often called agglutinative because these pieces can remain identifiable, but sound alternations and overlapping meanings prevent simple one-suffix-one-translation arithmetic.", "wals", "wikipedia"),
    typologicalProfile: cited("Neutral order is subject-object-verb: 민지가 책을 읽어요 Minji-ga chaeg-eul ilgeoyo, ‘Minji reads a book.’ Yet understood arguments are omitted freely, so 읽었어요? can mean ‘Did you read it?,’ ‘Did she read it?’ or simply ‘Finished reading?’ according to context. Korean lacks grammatical gender and articles, but distinguishes numeral-classifier constructions and makes fine social choices in address and predicates. Relative clauses come before nouns and do not use a relative pronoun: 어제 산 책, literally ‘yesterday bought book.’", "wals", "wikipedia"),
    morphology: cited("A dictionary verb ends in -다: 먹다 meokda ‘eat,’ 가다 gada ‘go.’ Remove -다 to expose a stem, then add endings: 먹어요 ‘eat/am eating’ in polite 해요-style, 먹었습니다 ‘ate/have eaten’ in formal deferential style, 먹으면 ‘if/when [someone] eats.’ Some stems change before endings—듣다 ‘listen’ gives 들어요—and contraction is normal. Nouns do not decline through large case paradigms; particles such as 이/가, 은/는, 을/를, 에 and 에서 attach to whole noun phrases and express role or discourse framing.", "krdict", "wikipedia"),
    syntax: cited("Korean builds information before the final predicate. A listener may hold several subordinate clauses in memory before learning whether the sentence is a question, denial or report. Clause-chaining endings such as -고 ‘and,’ -지만 ‘although’ and -아서/어서 ‘because/and then’ are therefore essential listening units. Word order can change for emphasis because particles and context recover roles, but unmarked patterns remain strong. Translating every omitted pronoun back into Korean usually produces heavy, unnatural prose.", "wals", "krdict"),
    advancedPainPoints: [
      "Choosing between topic 은/는 and subject 이/가 from discourse context rather than a memorized English gloss.",
      "Tracking omitted subjects and objects across turns without inventing a pronoun for every English clause.",
      "Separating speech level, sentence ending and subject honorification: related systems that do different jobs.",
      "Hearing contractions such as 저는 → 전 and 것이 → 게 in quick speech while retaining their grammatical analysis.",
      "Interpreting connective endings whose meaning shifts with tense, intonation and the relationship between clauses.",
      "Acquiring Sino-Korean abstract vocabulary and collocations after conversational grammar begins to feel comfortable."
    ],
    topics: [
      {
        title: "Topic and subject are different lenses",
        body: cited("이/가 commonly identifies or focuses a grammatical subject; 은/는 marks a topic or contrast. 비가 와요 means ‘It is raining,’ presenting rain as the event. 오늘은 비가 와요 means ‘As for today, it is raining,’ potentially contrasting today with another day. In 저는 학생이에요, ‘As for me, I am a student,’ 저 is the conversational topic. This is not a rule that old information always takes 은/는: predicates, contrast and genre shape the choice.", "krdict", "wikipedia"),
        example: "이 책은 사진이 좋아요.",
        exampleTranslation: "As for this book, its photographs are good. (책 is the topic; 사진 is subject of 좋아요.)"
      },
      {
        title: "Speech endings address the listener",
        body: cited("A predicate's ending helps position the utterance toward the audience. 해요-style, as in 가요, is broadly polite and conversational. 합니다-style, as in 갑니다, is formal and deferential, common in presentations, announcements and service encounters. 해-style, 가, is intimate or casual and requires an appropriate relationship. No single level is universally ‘respectful’: an excessively formal ending among close friends can be humorous, distant or situationally marked.", "dd-honorifics", "krdict"),
        example: "지금 가요. / 지금 갑니다. / 지금 가.",
        exampleTranslation: "I am going now. (polite conversational / formal deferential / intimate-casual)"
      },
      {
        title: "Subject honorification respects the person discussed",
        body: cited("The suffix -(으)시- honors the subject, independently of politeness to the listener. 선생님이 오세요 means ‘The teacher is coming,’ with 오시- plus polite -어요. A speaker can honor the subject while using intimate speech to a family member, or speak politely about a non-honored subject. Special vocabulary participates: 계시다 is honorific ‘to be/stay,’ 드시다 honorific ‘eat,’ and 주무시다 honorific ‘sleep.’", "dd-honorifics", "krdict"),
        example: "할머니께서 벌써 주무세요.",
        exampleTranslation: "Grandmother is already sleeping. (honored subject, polite listener ending)"
      },
      {
        title: "Modifiers come before nouns",
        body: cited("Korean verbs turn into noun modifiers with forms that encode time or aspect. 읽는 사람 is ‘a person who reads/is reading’; 읽은 책 is ‘a book [someone] read’; 읽을 책 is ‘a book to read.’ There is no relative pronoun equivalent to English who or that. The missing role is inferred: 제가 만난 사람 ‘the person I met,’ 제가 사는 도시 ‘the city where I live.’", "wikipedia", "krdict"),
        example: "어제 도서관에서 빌린 책을 다 읽었어요.",
        exampleTranslation: "I finished reading the book that I borrowed from the library yesterday."
      },
      {
        title: "Connective endings build trains of thought",
        body: cited("Instead of making every idea a separate sentence, Korean links predicates. -고 coordinates or sequences, -지만 introduces contrast, and -아/어서 can express cause or close sequence. 비가 오지만 갈 거예요 is ‘Although it is raining, I will go.’ Because -아/어서 does not map to one English conjunction in every context, collect examples with their discourse situation.", "krdict"),
        example: "일이 끝나서 동료하고 저녁을 먹었어요.",
        exampleTranslation: "Work finished, so I ate dinner with a colleague."
      },
      {
        title: "Negation offers a short and a long strategy",
        body: cited("안 before a predicate gives common short negation: 안 가요 ‘I do not go/am not going.’ The construction -지 않다 gives long negation: 가지 않아요. 못 marks inability or circumstances preventing an action: 못 가요 ‘I cannot go.’ With some noun-plus-하다 verbs, 안 often sits between noun and 하다—공부 안 해요 ‘I do not study’—rather than before the entire written unit.", "krdict"),
        example: "매운 음식은 잘 못 먹어요.",
        exampleTranslation: "I cannot eat spicy food very well."
      }
    ]
  },

  whereSpoken: {
    overview: cited("The peninsula remains Korean's demographic and institutional center, but its linguistic geography extends through migration, forced displacement, colonial history and contemporary mobility. National borders matter because schooling and media reinforce different standards; they do not erase regional continuities or diaspora innovation. Speaker totals vary with whether censuses count home language, ethnicity, competence or heritage affiliation, so an approximate global figure is more honest than a spurious exact number.", "wikipedia", "dialects"),
    regions: [
      { place: "South Korea", note: cited("Korean dominates public life, education and media, with South Korean Standard Korean as the institutional norm. Regional dialects remain active, while Seoul-centered mobility and broadcasting influence younger speech across the country.", "nikl-norms", "dialects") },
      { place: "North Korea", note: cited("Korean is organized publicly around Munhwaŏ. Information about ordinary conversational variation is harder to access than official publications, and foreign learners should not treat formal state broadcasting as a complete sociolinguistic sample.", "north-south", "dialects") },
      { place: "China", note: cited("Korean has long-standing communities especially in the northeast, including the Yanbian Korean Autonomous Prefecture. Schooling, media and contact with Mandarin and regional languages give these varieties histories distinct from recent expatriate Korean.", "wikipedia", "dialects") },
      { place: "Global diaspora", note: cited("Large communities in North America and growing networks elsewhere include first-language speakers, adoptees, mixed families and heritage learners with widely different literacy and speaking profiles. In Seoul itself, meaningful interaction depends on social context and shared interests, not just memorizing transactions.", "dd-seoul", "wikipedia") }
    ]
  },

  difficulty: {
    label: "Demanding",
    overview: cited("Korean asks an English-speaking learner to rebuild several instincts at once: wait for the final predicate, infer omitted participants, hear unfamiliar consonant contrasts and choose socially situated endings. Hangul makes entry unusually friendly, and much morphology is patterned. That combination can produce a misleading early curve: reading arrives fast, while understanding ordinary speech and sounding appropriately natural develop over years. Difficulty is not a property of Korean alone; prior languages, access to speakers, literacy goals and the target variety change the workload.", "dd-honorifics", "wikipedia"),
    easierAspects: [
      "Hangul's small inventory and systematic block construction make basic decoding achievable early.",
      "Verbs do not conjugate for grammatical person or number: 가요 can accompany I, you, she or they when context supplies the subject.",
      "There is no grammatical gender or article system equivalent to English a/the.",
      "Predicate endings and particles recur productively, so whole families of sentences become analyzable.",
      "Courses, dictionaries, subtitled media and teachers are abundant for the South Korean standard."
    ],
    hardAspects: [
      "Lax, tense and aspirated consonants take ear training, and their acoustic cues vary by position and generation.",
      "Written forms undergo multiple regular sound changes in continuous speech.",
      "Politeness, honorification, titles and address choices require social knowledge as well as grammar.",
      "Arguments are omitted so freely that comprehension depends heavily on discourse memory.",
      "Advanced reading requires dense Sino-Korean vocabulary, connective logic and genre-specific written styles."
    ],
    plateauRisks: [
      "Remaining dependent on romanization after learning Hangul, which blocks accurate sound–spelling connections.",
      "Knowing many isolated words but not the particles, collocations and endings that make them usable.",
      "Watching subtitled media passively and mistaking plot comprehension for Korean listening comprehension.",
      "Using 해요-style safely everywhere without learning intimate speech, formal prose or shifts within relationships.",
      "Studying only Seoul entertainment speech and failing to recognize news, workplace language or regional voices."
    ],
    workload: cited("A strong first year can establish Hangul, core particles, common endings, sound-change awareness and several thousand high-frequency word families. Reaching independent conversation requires regular interaction where partners do not silently repair every ending. Advanced progress comes from domain depth: transcribe one news story, follow a podcast series, read a short novel with a dictionary, or learn the vocabulary of your profession. Schedule pronunciation review throughout; batchim and consonant contrasts do not fix themselves merely because grammar improves. Treat speech-level choice as a conversation with real people, not a ladder on which ‘more formal’ always means ‘better.’", "ksi", "ksi-apps", "dd-honorifics")
  },

  advancedLearning: {
    strategy: cited("Build a three-column study system: the exact Korean line, a natural translation, and a note on situation or register. Tag who is speaking to whom. Mine only sentences whose audio you can replay and whose grammar you can explain. Once a week, retell one event in three modes: relaxed 해-style to a friend, polite 해요-style to an unfamiliar adult, and formal 합니다-style as a short report. The facts may stay constant while endings, titles and vocabulary move. This exposes gaps that flashcards hide.", "dd-honorifics", "krdict"),
    mediaPractice: cited("Use media in passes. First watch a short scene or report for meaning; next replay with Korean captions and mark clause-final endings; then shadow one speaker's complete turns; finally summarize without subtitles. Compare drama with unscripted interviews and broadcast reporting. Online laughter such as ㅋㅋㅋ or ㅎㅎㅎ, clipped spellings and emoji belong to digital interaction and should be learned through conversational context, not read aloud as ordinary prose. Keep North Korean or regional clips labeled rather than feeding every voice into one imitation model.", "dd-laughter", "dialects"),
    dictionariesAndCorpora: cited("Begin with the Basic Korean Dictionary, whose learner definitions, usage notes and audio are less overwhelming than a translation-only search. Look up stems: for 들었어요, test 듣다; for 도와줘요, test 돕다 and 주다. Use official norms when spacing, standard pronunciation or romanization matters. At advanced levels, compare several corpus examples before adopting a connector or abstract noun, noting genre and collocates. A dictionary tells you a form exists; a corpus shows who actually places it beside which words.", "krdict", "nikl-norms", "nikl-roman"),
    resources
  },

  wordsAndTexts: {
    overview: cited("Korean vocabulary has native, Sino-Korean and international layers that often divide semantic labor. Native 말 mal means ‘speech/word,’ while Sino-Korean 언어 eoneo is the learned term ‘language’; 집 jip is ‘house/home,’ while 주택 jutaek is ‘housing/residence.’ English-origin items are reshaped phonologically and semantically: 핸드폰 haendeupon means mobile phone, not any ‘hand phone’ used in English. Good vocabulary study therefore groups roots, register and collocations instead of collecting one translation per spelling.", "krdict", "north-south"),
    notableWords: [
      { term: "눈치", transliteration: "nunchi", meaning: "social perception; reading a situation", note: cited("눈치 names sensitivity to other people's moods, intentions and the unspoken shape of a situation. It is ordinary vocabulary, not a mystical national trait: 눈치를 보다 means to watch the room or gauge reactions.", "krdict") },
      { term: "정", transliteration: "jeong", meaning: "affection or attachment accumulated through relationship", note: cited("정 can describe a bond that grows through shared time, care or even difficult familiarity. Translation depends on construction: 정이 들다 is to become attached, while 정이 많다 describes someone warm or affectionate.", "krdict") },
      { term: "답답하다", transliteration: "dapdaphada", meaning: "stifling, frustrated, exasperating or emotionally blocked", note: cited("The word can describe a stuffy room, tight chest, frustrating delay or a person who will not understand. Its range shows why adjective lists need situations, not just English equivalents.", "krdict") },
      { term: "아깝다", transliteration: "akkapda", meaning: "too valuable to waste; regrettably close", note: cited("Use 아깝다 when food, money or effort would be wasted, or when a near miss feels regrettable: 아깝게 졌어요, ‘They lost by a painfully small margin.’", "krdict") },
      { term: "수고", transliteration: "sugo", meaning: "effort, trouble, labor", note: cited("Forms such as 수고하세요 and 수고하셨습니다 acknowledge ongoing or completed work. Their appropriateness depends on hierarchy and workplace culture; the English gloss ‘good job’ misses that relational texture.", "krdict", "dd-honorifics") },
      { term: "덕질", transliteration: "deokjil", meaning: "active fandom; doing fan activities", note: "A playful modern formation associated with enthusiast culture. It can cover collecting, attending events, translating, editing clips or deeply following a subject, and its tone varies from self-mocking to proudly expert." }
    ],
    loanwordLayers: cited("Sino-Korean vocabulary is not an exotic add-on: numbers, weekdays, institutions and abstract concepts use it every day. Native and Sino-Korean numerals divide tasks—세 명 ‘three people’ but 삼 층 ‘third floor’—with some overlap. Modern South Korean English loans may shorten or recombine source forms: 리모컨 rimokeon from ‘remote control,’ 셀카 selka from ‘self camera.’ North Korean equivalents may favor another formation, one reason vocabulary can obstruct comprehension before grammar does. Borrowed forms are Korean words once integrated; pronounce them through Korean syllable structure rather than performing the English source.", "north-south", "krdict"),
    idioms: [
      { original: "식은 죽 먹기", transliteration: "sigeun juk meokgi", translation: "a piece of cake; something very easy", note: "Literally ‘eating cooled porridge’: an easy action, though the phrase is informal and context can make it boastful." },
      { original: "눈이 높다", transliteration: "nuni nopda", translation: "to have high standards", note: "Literally ‘the eyes are high’; often used about demanding taste in partners, fashion or choices." },
      { original: "손이 크다", transliteration: "soni keuda", translation: "to be generous or prepare large quantities", note: "Literally ‘the hand is big’; commonly praises someone who makes or gives more food than strictly needed." },
      { original: "발이 넓다", transliteration: "bari neolpda", translation: "to have a wide network of acquaintances", note: "Literally ‘the feet are wide’; it describes social connections, not foot shape." },
      { original: "입이 무겁다", transliteration: "ibi mugeopda", translation: "to be discreet; good at keeping secrets", note: "Literally ‘the mouth is heavy,’ contrasting with a person who lets words travel easily." }
    ],
    textGenres: [
      "Contemporary novels and web fiction, ranging from plain dialogue to compressed literary narration",
      "Webtoons, where image, sound effects, spacing and colloquial dialogue work together",
      "News reports and editorials in formal written styles with dense Sino-Korean vocabulary",
      "Lyrics and fan communication, where translation must account for omitted subjects and address",
      "Essays, memoirs and long-form interviews that bridge conversational and literary registers",
      "Classical sijo poetry and mixed-script historical texts requiring specialist guidance"
    ]
  },

  relationships: {
    overview: cited("Korean sits in Koreanic; Jejueo is its closest clearly distinguishable fellow member under classifications that treat it as a language. Broader proposals linking Korean genetically with Japanese, Tungusic, Mongolic or a large Altaic family have not achieved demonstration by the comparative method. Typological resemblance is still useful to learners, and contact with Chinese and Japanese profoundly shaped vocabulary and writing. Keep three questions separate: common ancestry, structural similarity and historical borrowing.", "glottolog", "wikipedia", "wals"),
    languages: relatedLanguages
  },

  culturalNotes: "Korean is not a decoder ring for one national personality. Honorifics do not make every interaction rigidly hierarchical, and dialect does not predict temperament. Ask narrower questions: what relationship does this ending construct, and why does a character switch from 존댓말 polite speech to 반말 casual speech here? Titles and kin terms emerge from relationships, not permanent ranks. 언니 eonni is literally an older sister used by a female speaker, but can address a close older woman; 선배 seonbae names a senior in a school or professional cohort. A Seoul office, Jeju household, Koryo-saram family and online gaming group do not share one cultural script. Learn enough Korean to notice the difference and let people explain their own worlds.",
  resources,
  relatedLanguages,
  phrases: [
    { original: "안녕하세요?", transliteration: "Annyeonghaseyo?", translation: "Hello; how are you?", literalMeaning: "Are you at peace?", usageNote: "Safe polite greeting in many first meetings and everyday encounters; the question mark does not require a health report." },
    { original: "안녕!", transliteration: "Annyeong!", translation: "Hi! / Bye!", usageNote: "Casual; use with close friends, children or relationships where 반말 has been established, not automatically with every younger adult." },
    { original: "감사합니다.", transliteration: "Gamsahamnida.", translation: "Thank you.", usageNote: "Formal-polite and widely useful in public or service interactions." },
    { original: "고마워요.", transliteration: "Gomawoyo.", translation: "Thank you.", usageNote: "Polite conversational and warmer in many personal interactions; 고마워 is casual." },
    { original: "죄송합니다.", transliteration: "Joesonghamnida.", translation: "I am sorry; excuse me.", usageNote: "Formal-polite apology. For squeezing past someone, context and a lighter 실례합니다 may fit better." },
    { original: "괜찮아요.", transliteration: "Gwaenchanayo.", translation: "It is okay; I am okay; no thank you.", usageNote: "Meaning depends strongly on intonation and situation; it can reassure, decline or report that no harm was done." },
    { original: "이거 주세요.", transliteration: "Igeo juseyo.", translation: "Please give me this one.", literalMeaning: "This thing, please give.", usageNote: "Polite and useful while pointing; naming the object is clearer when several items are nearby." },
    { original: "어디에서 왔어요?", transliteration: "Eodieseo wasseoyo?", translation: "Where are you from?", literalMeaning: "From where did you come?", usageNote: "Polite conversational. It may ask nationality, hometown or immediate origin depending on context." },
    { original: "한국어를 배우고 있어요.", transliteration: "Hangugeoreul baeugo isseoyo.", translation: "I am learning Korean.", usageNote: "Polite conversational; -고 있어요 marks an ongoing activity." },
    { original: "천천히 말씀해 주세요.", transliteration: "Cheoncheonhi malsseumhae juseyo.", translation: "Please speak slowly.", usageNote: "Polite; 말씀 is honorific/polite ‘speech.’ 말해 주세요 is also common but less deferential." },
    { original: "다시 한번 말해 주세요.", transliteration: "Dasi han beon malhae juseyo.", translation: "Please say that once again.", usageNote: "Polite conversational request; combine with 죄송하지만 ‘I am sorry, but…’ when interrupting." },
    { original: "무슨 뜻이에요?", transliteration: "Museun tteusieyo?", translation: "What does it mean?", literalMeaning: "What meaning is it?", usageNote: "Polite and ideal for keeping a Korean-language conversation going." },
    { original: "잘 모르겠어요.", transliteration: "Jal moreugesseoyo.", translation: "I am not sure; I do not really understand.", usageNote: "Polite and softer than a blunt 몰라요; -겠- here helps present uncertainty." },
    { original: "먼저 가 보겠습니다.", transliteration: "Meonjeo ga bogetseumnida.", translation: "I will be leaving first.", usageNote: "Formal-polite workplace or group-leaving formula; not a literal experiment in going." },
    { original: "수고하셨습니다.", transliteration: "Sugohasyeotseumnida.", translation: "Thank you for your work; you worked hard.", usageNote: "Formal-polite acknowledgment after shared work. Hierarchy and workplace custom affect who says it to whom." },
    { original: "잘 먹겠습니다.", transliteration: "Jal meokgetseumnida.", translation: "Thank you for the meal; I will eat well.", usageNote: "Said before eating, especially when someone provides or pays; formal-polite conventional expression." }
  ],
  sources
};
