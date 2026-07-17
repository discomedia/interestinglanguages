import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const sources = [
  { id: "dd-resources", title: "The Best Korean Language Learning Resources — No Rubbish", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/learn-korean-online-free-resources/", publishedAt: "2020-01-09", updatedAt: "2022-12-03", accessedAt: "2026-07-18" },
  { id: "dd-vocabulary", title: "Korean Vocabulary — The 4 Best Resources", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/korean-vocabulary/", publishedAt: "2020-08-30", updatedAt: "2023-05-10", accessedAt: "2026-07-18" },
  { id: "dd-honorifics", title: "A Simple Guide to Korean Honorifics", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/korean-honorifics-simple-guide/", publishedAt: "2023-12-29", updatedAt: "2023-12-29", accessedAt: "2026-07-18" },
  { id: "dd-restaurant", title: "Korean Restaurant Phrases — Eating Out in Korea", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/eating-out-korea-korean-restaurant-phrases/", publishedAt: "2023-12-23", updatedAt: "2023-12-23", accessedAt: "2026-07-18" },
  { id: "dd-three-months", title: "Learning Korean in Korea in Three Months: Recap", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/learning-korean-in-three-months-in-korea/", publishedAt: "2022-12-15", updatedAt: "2023-12-23", accessedAt: "2026-07-18" },
  { id: "dd-facts", title: "9 Korean Language Facts that Nobody Thought to Tell Me", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/korean-language-facts/", publishedAt: "2020-06-01", updatedAt: "2021-07-10", accessedAt: "2026-07-18" },
  { id: "dd-daga", title: "The Three Meanings of 다가 (Korean Grammar)", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/korean-grammar-meanings-of-%EB%8B%A4%EA%B0%80/", publishedAt: "2022-12-03", updatedAt: "2022-12-03", accessedAt: "2026-07-18" },
  { id: "dd-and", title: "4 Ways to Say And in Korean", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/and-in-korean-how-to-say/", accessedAt: "2026-07-18" },
  { id: "dd-bjj", title: "Learning BJJ / MMA in Korean — Vocabulary and Phrases", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/learning-bjj-mma-in-korean-vocabulary/", accessedAt: "2026-07-18" },
  { id: "dd-seoul", title: "Living in Seoul as a Digital Nomad", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/living-in-seoul-korea-digital-nomad/", accessedAt: "2026-07-18" },
  { id: "dd-laughter", title: "How People Laugh Online in Different Languages", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/how-people-laugh-online-different-languages/", accessedAt: "2026-07-18" },
  { id: "wikipedia", title: "Korean language", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Korean_language", accessedAt: "2026-07-18" },
  { id: "north-south", title: "North–South differences in the Korean language", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/North%E2%80%93South_differences_in_the_Korean_language", accessedAt: "2026-07-18" },
  { id: "dialects", title: "Korean dialects", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Korean_dialects", accessedAt: "2026-07-18" },
  { id: "speech-levels", title: "Korean speech levels", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Korean_speech_levels", accessedAt: "2026-07-18" },
  { id: "nikl-norms", title: "Korean Language Norms", publisher: "National Institute of Korean Language", url: "https://korean.go.kr/kornorms/main/main.do", accessedAt: "2026-07-18" },
  { id: "nikl-roman", title: "Romanization of Korean", publisher: "National Institute of Korean Language", url: "https://www.korean.go.kr/front_eng/roman/roman_01.do", accessedAt: "2026-07-18" },
  { id: "nikl-hangeul", title: "About Hangeul", publisher: "National Institute of Korean Language", url: "https://www.korean.go.kr/eng_hangeul/short/001.html", accessedAt: "2026-07-18" },
  { id: "krdict", title: "Basic Korean Dictionary", publisher: "National Institute of Korean Language", url: "https://krdict.korean.go.kr/eng", accessedAt: "2026-07-18" },
  { id: "unicode", title: "The Unicode Standard, Chapter 18: East Asia", publisher: "Unicode Consortium", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-18/", updatedAt: "2025-09-09", accessedAt: "2026-07-18" },
  { id: "glottolog", title: "Korean", publisher: "Glottolog 5.2", url: "https://glottolog.org/resource/languoid/id/kore1280", accessedAt: "2026-07-18" },
  { id: "wals", title: "Korean", publisher: "World Atlas of Language Structures Online", url: "https://wals.info/languoid/lect/wals_code_kor", accessedAt: "2026-07-18" },
  { id: "ksi", title: "Online King Sejong Institute", publisher: "King Sejong Institute Foundation", url: "https://www.iksi.or.kr/lms/main/main.do?lang=EN", accessedAt: "2026-07-18" },
  { id: "ksi-roadmap", title: "Korean Study Roadmap", publisher: "King Sejong Institute Foundation", url: "https://nuri.iksi.or.kr/front/page/siteguide/learning/roadmap/main.do", accessedAt: "2026-07-18" },
  { id: "rutgers-politeness", title: "Linguistic Politeness in Korean: Speech Levels and Terms of Address", publisher: "Rutgers University", url: "https://www.researchwithrutgers.org/en/publications/linguistic-politeness-in-korean-speech-levels-and-terms-of-addres/", publishedAt: "2021", accessedAt: "2026-07-18" }
] satisfies LanguageGuide["sources"];

const relatedLanguages: LanguageGuide["relationships"]["languages"] = [
  {
    name: "Jejueo",
    relationship: "The other clearly distinct Koreanic language in many modern classifications",
    explanation: cited("Jejueo grew on Jeju Island from the same Koreanic background as Korean, but many linguists now classify it as a separate language. Its vocabulary, sounds, and grammar differ enough that calling it merely a quirky accent can hide both that distance and its endangered position.", "glottolog", "dialects")
  },
  {
    name: "Japanese",
    slug: "japanese",
    relationship: "A structurally similar neighbor, not a proven close genetic relative",
    explanation: cited("Japanese and Korean both put the predicate late, use particles, and build social meaning into verb forms. Those parallels help learners, but linguists have not demonstrated a recent shared ancestor, and centuries of contact complicate easy comparisons.", "wikipedia", "wals")
  },
  {
    name: "Mandarin Chinese",
    slug: "mandarin-chinese",
    relationship: "A major source of learned vocabulary, not the parent of Korean grammar",
    explanation: cited("Korean built a huge learned vocabulary from Chinese characters and their Korean readings. Words such as 문화 munhwa, ‘culture,’ and 경제 gyeongje, ‘economy,’ belong to that Sino-Korean layer, while Korean sentence structure and native vocabulary come from a different lineage.", "wikipedia", "krdict")
  }
];

const resources: LanguageGuide["resources"] = [
  {
    type: "course",
    title: "Online King Sejong Institute",
    url: "https://www.iksi.or.kr/lms/main/main.do?lang=EN",
    level: "all",
    description: cited("This official platform offers a real path from introductory Hangul through advanced Korean, including conversation and business courses. Use one level as your main sequence instead of jumping between unrelated lessons.", "ksi", "ksi-roadmap")
  },
  {
    type: "dictionary",
    title: "Basic Korean Dictionary (한국어기초사전)",
    url: "https://krdict.korean.go.kr/eng",
    level: "all",
    description: cited("The National Institute designed this dictionary for learners, with definitions, examples, labels, and audio. Search the dictionary form—듣다 rather than 들었어요—when an ending or stem change hides the word.", "krdict")
  },
  {
    type: "other",
    title: "Discover Discomfort: Korean learning resources",
    url: "https://discoverdiscomfort.com/learn-korean-online-free-resources/",
    level: "all",
    description: cited("This hands-on guide compares free courses, books, dictionaries, videos, and sentence tools that its authors actually used. Some product details may age, but its advice to combine structured grammar, audio, and full sentences remains practical.", "dd-resources")
  },
  {
    type: "other",
    title: "Discover Discomfort: Korean honorifics",
    url: "https://discoverdiscomfort.com/korean-honorifics-simple-guide/",
    level: "beginner",
    description: cited("This plain-language introduction separates polite endings, honorific verbs, and titles. It works best as an orientation before you check individual forms in a dictionary or course.", "dd-honorifics")
  },
  {
    type: "other",
    title: "Discover Discomfort: Korean vocabulary resources",
    url: "https://discoverdiscomfort.com/korean-vocabulary/",
    level: "beginner",
    description: cited("This guide argues for learning words inside recorded sentences rather than memorizing naked English equivalents. That approach matters in Korean because particles, endings, and social setting often decide how a word actually behaves.", "dd-vocabulary")
  },
  {
    type: "media",
    title: "KBS News",
    url: "https://news.kbs.co.kr/",
    level: "intermediate",
    description: "KBS pairs formal broadcast audio with written reports on the same events. Compare the headline, article, and spoken report so you can hear how written and broadcast styles differ."
  },
  {
    type: "media",
    title: "EBS",
    url: "https://www.ebs.co.kr/",
    level: "intermediate",
    description: "EBS documentaries, interviews, and educational programs offer more topic range and clearer exposition than a drama-only media diet. Choose one recurring series so the voices and subject vocabulary become familiar."
  }
];

export const koreanGuide: LanguageGuide = {
  slug: "korean",
  name: "Korean",
  autonym: "한국어 / 조선말",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Korean combines the quickly learned Hangul alphabet with a spoken language shaped by sound change, omitted context, expressive endings, and careful choices about relationships.",
  family: "Koreanic",
  macroRegion: "East Asia",
  primaryScript: "Hangul; limited Hanja",
  difficultyLabel: "Demanding",
  learnerHook: "You can learn to read Hangul in days. The deeper adventure is hearing what the spelling does in real speech and choosing an ending that fits the moment.",
  hero: {
    imageAlt: "Hangul syllable blocks beside a contemporary Korean conversation.",
    callToActionLabel: "Explore Korean"
  },
  classification: "The main language of the Koreanic family, with no proven close relative outside that family",
  speakerCommunity: "Around 80 million people speak Korean on the Korean peninsula and in communities across China, Japan, Central Asia, North America, and elsewhere. South Koreans commonly call it 한국어 Hangugeo or 한국말 Hangungmal, while North Koreans use 조선말 Chosŏnmal or 조선어 Chosŏnŏ.\n\nThis guide teaches contemporary Seoul-based Standard Korean as its learning anchor because that is what most international courses offer. It also labels North Korean standards, regional voices, and diaspora Korean rather than pretending every speaker sounds like Seoul television.",
  facts: [
    { label: "Autonyms", value: "한국어 Hangugeo; 조선말 Chosŏnmal" },
    { label: "Family", value: "Koreanic" },
    { label: "Core area", value: "The Korean peninsula" },
    { label: "Main script", value: "Hangul syllable blocks" },
    { label: "Common order", value: "Subject–object–verb, with frequent omission" },
    { label: "State standards", value: "South Korean Pyojuneo; North Korean Munhwaŏ" }
  ],
  learnerOverview: "Hangul gives Korean learners an unusually satisfying start. Once 한글 hangeul stops looking decorative, you can decode signs, names, and menus before you understand them.\n\nThen spoken Korean changes the game. 같이 gachi, ‘together,’ sounds like 가치, subjects disappear, and requests change with the relationship.\n\nUse polite Seoul speech as a first home base, especially the everyday -요 style. Add casual speech, formal announcements, regional voices, and North Korean forms as labeled varieties.\n\nMedia gives you endless material, but subtitles often restore pronouns that Korean leaves unsaid and flatten speech levels. Check useful lines against Korean captions, a dictionary, and a speaker who can explain the scene.",

  origins: {
    overview: cited("Korean is the best documented member of the Koreanic family. Early evidence survives in place names, inscriptions, glosses, and texts, but educated writers used Literary Chinese for many formal purposes.\n\nWriters also adapted Chinese characters through systems called idu, hyangchal, and gugyeol to represent Korean words, sounds, or grammatical cues. These were clever solutions for fitting Korean into an inherited writing culture, not failed attempts at modern Hangul.\n\nKing Sejong's court created Hunminjeongeum in the fifteenth century, giving Korean a purpose-built alphabet. Modern Korean later developed from Middle Korean while contact with Chinese, Japanese, Mongolic languages, Russian, English, and neighboring communities added new layers.", "wikipedia", "nikl-hangeul", "unicode"),
    timeline: [
      {
        period: "Before the fifteenth century",
        event: cited("Koreans spoke their own language while elite writing relied heavily on Literary Chinese. Adapted character systems recorded names, poems, administrative language, and guides for reading Chinese texts in Korean order.", "wikipedia")
      },
      {
        period: "1443–1446",
        event: cited("King Sejong's court completed and published Hunminjeongeum, the script now called Hangul in South Korea. The explanatory text connects several letter shapes to how the mouth forms their sounds and groups letters into syllable blocks.", "nikl-hangeul", "unicode")
      },
      {
        period: "Fifteenth to nineteenth centuries",
        event: cited("Early Hangul texts preserve Middle Korean sounds and pitch markings that modern standard spelling no longer uses. Letters, fiction, religious works, and practical texts expanded Hangul's reach while Literary Chinese and mixed character writing kept high prestige.", "wikipedia", "unicode")
      },
      {
        period: "Since 1945",
        event: cited("Political division created separate language institutions in North and South Korea. Their standards remain broadly intelligible, but schooling, media, terminology, spelling, and pronunciation policy have pushed some forms apart.", "north-south", "nikl-norms")
      }
    ],
    contactHistory: cited("Chinese shaped Korean most visibly through Sino-Korean vocabulary. These roots fill everyday words for education, government, science, dates, and abstract ideas.\n\nContact with Japan introduced words and translated expressions over many periods, including during colonial rule. After liberation, planners replaced some Japanese-associated forms while others remained ordinary.\n\nPostwar South Korean speech reshaped English words such as 아파트 apateu, ‘apartment.’ North Korean and diaspora communities developed different contact vocabularies through Russian, Mandarin, Japanese, English, and local languages.", "wikipedia", "north-south", "krdict"),
    standardization: cited("South Korea's standard-language rule takes the modern Seoul speech widely used by educated people as its official base. The National Institute publishes norms for spelling, pronunciation, loanwords, and romanization, but real Seoul speakers still vary by age, neighborhood, and situation.\n\nNorth Korea calls its standard 문화어 Munhwaŏ, ‘cultured language,’ and publicly associates it with Pyongyang. It differs from the South Korean standard in some spellings, pronunciations, word choices, and conventions, such as South Korean 여자 yeoja versus North Korean 녀자 nyŏja for ‘woman.’\n\nA standard helps schools and public institutions coordinate. It does not make regional or everyday speech defective, and it does not capture everything that Seoul or Pyongyang residents say.", "nikl-norms", "north-south", "dialects")
  },

  variants: {
    overview: cited("Korean changes across region, generation, and social group. Traditional dialect areas include Central, Chungcheong, Jeolla, Gyeongsang, Pyongan, and Hamgyong.\n\nRegional Korean can differ in vowels, pitch, particles, endings, and vocabulary. Entertainment often exaggerates a Busan or rural voice, so one actor should never stand in for a whole region.", "dialects", "wikipedia"),
    items: [
      { name: "Contemporary Seoul and the South Korean standard", note: cited("This guide uses polite contemporary Seoul-based Korean as its main learning anchor. Younger Seoul speakers have shifted or merged some older sound contrasts, and casual conversation includes contractions that formal reading does not show.", "nikl-norms", "dialects") },
      { name: "Gyeongsang varieties", note: cited("Speech around Busan, Daegu, and neighboring areas uses distinctive vowels, endings, and word-level pitch patterns. These pitch contrasts make Gyeongsang Korean sound strikingly different from Seoul Korean, but stylized television imitation often reduces the system to a melody.", "dialects") },
      { name: "North Korean Munhwaŏ and northern regional speech", note: cited("Munhwaŏ follows its own official rules, while everyday northern speech also includes Pyongan and Hamgyong regional varieties. Highly formal political broadcasting is a special genre, not a sample of how every North Korean talks at home.", "north-south", "dialects") },
      { name: "Jejueo", note: cited("Many linguists classify Jejueo as a separate Koreanic language rather than a Korean dialect. Its endangered status and structural distance deserve more than a footnote about a colorful island accent.", "glottolog", "dialects") },
      { name: "Heritage and diaspora Korean", note: cited("Koryo-mar in Central Asia, Korean in northeast China, and heritage Korean elsewhere grew through different migrations and contact histories. Speakers may have strong home vocabulary but less formal literacy, or the reverse, so one Seoul-centered proficiency scale cannot describe every life.", "wikipedia", "dialects") }
    ]
  },

  pronunciation: {
    overview: cited("Hangul shows the structure of Korean words, but it does not tell you to pronounce each block in isolation. Neighboring sounds regularly trigger liaison, nasalization, tensification, aspiration, and palatalization.\n\nThat is why 같이 ‘together’ sounds like 가치 and 국물 ‘broth’ sounds roughly like 궁물. Learn the spelling and the sound together so a correct written form never becomes a slow letter-by-letter recital.", "nikl-norms", "wikipedia"),
    script: "Hangul",
    soundSystem: cited("Korean contrasts three consonant series. Learners often call them lax, aspirated, and tense: 달 dal, ‘moon,’ 딸 ttal, ‘daughter,’ and 탈 tal, ‘mask,’ begin with a meaningful three-way contrast.\n\nAt the end of a syllable, written consonants collapse into a small set of unreleased sounds called 받침 batchim. A following vowel can carry a consonant forward, while another consonant may change it through assimilation.\n\nTextbooks list vowel contrasts that many younger Seoul speakers no longer keep consistently, especially ㅐ and ㅔ. Learn the standard spellings, but let current audio teach you what your target speakers actually distinguish.", "nikl-norms", "wikipedia"),
    prosody: cited("Standard Seoul Korean has neither English-style word stress nor Mandarin-style lexical tone, yet pitch and phrasing still carry a great deal of meaning. Contemporary Seoul speakers often use the pitch after an initial consonant to help distinguish consonant series.\n\nIntonation also signals questions, continuation, surprise, insistence, and stance. Gyeongsang varieties go further and preserve word-level pitch contrasts, so do not force every Korean voice into Seoul prosody.", "dialects", "wikipedia"),
    learnerTraps: [
      "Treating ㄱ, ㅋ, and ㄲ as a simple English g/k contrast. Listen for aspiration, tension, and the pitch of the following vowel.",
      "Releasing every final consonant strongly. Most batchim end without the burst an English speaker expects.",
      "Pronouncing 국물 as two careful dictionary blocks instead of hearing the normal nasalized form 궁물.",
      "Reading Revised Romanization as English. The letter groups eo and eu name Korean vowels, not English sound sequences.",
      "Copying one actor's exaggerated regional pitch or tough-guy voice without checking age, region, and genre."
    ],
    sampleWords: [
      { original: "달 / 딸 / 탈", transliteration: "dal / ttal / tal", translation: "moon / daughter / mask", note: "The three initial consonants show the lax, tense, and aspirated contrast in contemporary Seoul Korean." },
      { original: "한국말", transliteration: "Hangungmal", translation: "Korean speech; the Korean language", note: "The written sequence 한국말 Hangukmal undergoes nasal assimilation and sounds roughly like 한궁말." },
      { original: "같이", transliteration: "gachi", translation: "together", note: "The final ㅌ meets 이 and becomes a ㅊ-like sound through palatalization." },
      { original: "읽어요", transliteration: "ilgeoyo", translation: "read; reads (polite)", note: "The consonant cluster in 읽다 changes before endings, and the ㄱ links into the following vowel." },
      { original: "좋다", transliteration: "jota", translation: "to be good", note: "The ㅎ combines with following ㄷ and produces an aspirated ㅌ-like sound." },
      { original: "설날", transliteration: "Seollal", translation: "Lunar New Year", note: "The ㄹ and ㄴ assimilate to a long or doubled lateral sound, close to 설랄." }
    ]
  },

  writing: {
    overview: cited("Hangul is an alphabet arranged into syllable-shaped blocks. 한 combines ㅎ h, ㅏ a, and final ㄴ n.\n\nThe modern inventory has 14 consonant and 10 vowel letters, plus doubled consonants and combined vowels. Several consonant shapes reflect how the mouth forms related sounds, so linguists call the design featural.\n\nUnicode stores syllables as complete blocks or sequences of individual jamo. Identical-looking strings can therefore differ underneath, which matters in search and software.", "unicode", "nikl-hangeul"),
    primaryScript: "Hangul, with limited Hanja",
    romanization: cited("South Korea uses Revised Romanization for many official place names and general public purposes. It writes 어 as eo and 으 as eu, giving names such as 부산 Busan and 경복궁 Gyeongbokgung.\n\nMcCune–Reischauer remains common in scholarship, while North Korea uses a related convention with its own details. Personal names often follow established family preferences, so do not ‘correct’ someone's spelling to match a table.", "nikl-roman", "north-south"),
    spellingNorms: cited("South Korean spelling often keeps a word's underlying parts visible even when speech changes them. 꽃이, ‘flower + subject marker,’ keeps 꽃 in writing but sounds like 꼬치, while 꽃만, ‘only flowers,’ sounds like 꼰만.\n\nSpaces separate grammatical words, but particles attach directly to nouns. Dependent nouns and auxiliary constructions make spacing genuinely difficult, so native writers also consult official dictionaries and norms.\n\nNorth and South Korea differ in some spellings, spacing choices, and alphabetical order. Always check the standard you mean to use rather than blending conventions by accident.", "nikl-norms", "north-south"),
    styleNotes: [
      cited("Contemporary South Korean public writing is overwhelmingly Hangul-based. Hanja still appears in historical work, academic explanation, names, and occasional disambiguation, but ordinary literacy does not require mixed-script fluency.", "wikipedia", "unicode"),
      "Formal reports often use 합니다-style or plain written 한다-style endings. Messages, dialogue, and personal posts choose different endings to create a voice, so copy the genre as well as the vocabulary.",
      cited("Repeated ㅋ often represents laughter online, while ㅎㅎ can look softer or more restrained. Context, quantity, and relationship change their tone, just as English ‘haha’ can sound warm or dismissive.", "dd-laughter"),
      "Do not put a space between every Hangul block. Blocks make syllables inside words, and particles such as 은/는, 이/가, and 을/를 attach to the noun."
    ]
  },

  grammar: {
    overview: cited("Korean usually saves the predicate for the end of the clause. Nouns take particles, modifiers appear before what they describe, and verbs gather endings for time, connection, stance, politeness, and sentence type.\n\nLinguists call Korean agglutinative because many of those endings remain recognizable when they stack. Real usage is still more interesting than a neat suffix chart, since sounds contract and one ending can do different work in different scenes.", "wals", "wikipedia"),
    typologicalProfile: cited("A neutral Korean sentence follows subject–object–verb order: 민지가 책을 읽어요 Minji-ga chaeg-eul ilgeoyo, ‘Minji reads a book.’\n\nSpeakers omit any part that the conversation already makes clear, so 읽었어요? might mean ‘Did you read it?’ or simply ‘Finished reading?’\n\nKorean has no grammatical gender or articles like English a and the. It does use numeral classifiers, places relative clauses before nouns, and makes detailed social choices through address terms and predicates.", "wals", "wikipedia"),
    morphology: cited("Dictionary verbs end in -다: 먹다 meokda, ‘eat,’ and 가다 gada, ‘go.’ Remove -다 and add an ending to make 먹어요, polite conversational ‘eat,’ 먹었습니다, formal ‘ate,’ or 먹으면, ‘if someone eats.’\n\nSome stems change before endings, as when 듣다, ‘listen,’ becomes 들어요. Nouns do not carry large case endings, but particles such as 이/가, 은/는, 을/를, 에, and 에서 attach to a whole noun phrase and show its role or conversational frame.", "krdict", "wikipedia"),
    syntax: cited("Korean listeners often wait until the final predicate to learn whether a thought becomes a question, report, or suggestion. Connective endings such as -고, ‘and,’ and -지만, ‘although,’ help you follow that path.\n\nParticles allow some word-order movement, but not every order is neutral. Adding an English-style pronoun to each clause can sound heavy because Korean relies on shared context.", "wals", "krdict"),
    advancedPainPoints: [
      "Choosing topic 은/는 or subject 이/가 from the conversation, not from a one-line English translation.",
      "Tracking omitted people and objects across several turns without inventing a pronoun each time.",
      "Separating listener-directed speech level from honorification of the person discussed.",
      "Hearing contractions such as 저는 becoming 전 and 것이 becoming 게 in quick Seoul speech.",
      "Learning how connective endings change meaning with tense, intonation, and the relationship between events.",
      "Building enough Sino-Korean roots and collocations for news, study, and professional life."
    ],
    topics: [
      {
        title: "Topic and subject give different views",
        body: cited("이/가 often identifies or focuses the grammatical subject, while 은/는 sets a topic or contrast. 비가 와요 means ‘It is raining,’ but 오늘은 비가 와요 means ‘As for today, it is raining,’ and may contrast today with another day.\n\nThe difference is about how speakers organize information, not a mechanical new-versus-old rule. In 이 책은 사진이 좋아요, the book is the topic and its photographs form the subject of ‘are good.’", "krdict", "wikipedia"),
        example: "이 책은 사진이 좋아요.",
        exampleTranslation: "As for this book, its photographs are good."
      },
      {
        title: "Speech endings address your listener",
        body: cited("The final ending helps place your words in relation to the listener. 지금 가요 is polite and conversational, 지금 갑니다 is formal and deferential, and 지금 가 is casual speech for a relationship where 반말 banmal fits.\n\nThese are not three rungs from bad to good. An unusually formal ending among close friends may sound distant, comic, or deliberately dramatic.", "dd-honorifics", "speech-levels", "rutgers-politeness"),
        example: "지금 가요. / 지금 갑니다. / 지금 가.",
        exampleTranslation: "I am going now. (polite conversational / formal deferential / casual)"
      },
      {
        title: "Subject honorification respects the person discussed",
        body: cited("The suffix -(으)시- honors the subject, which is a different choice from speaking politely to your listener. 선생님이 오세요 means ‘The teacher is coming,’ with honorific 오시- and a polite -어요 ending.\n\nKorean also has special honorific words such as 계시다, ‘be/stay,’ 드시다, ‘eat,’ and 주무시다, ‘sleep.’ You can honor a teacher while speaking casually to a close friend who is listening.", "dd-honorifics", "krdict", "rutgers-politeness"),
        example: "할머니께서 벌써 주무세요.",
        exampleTranslation: "Grandmother is already sleeping. (honored subject, polite listener ending)"
      },
      {
        title: "Modifiers stand before nouns",
        body: cited("Korean turns verbs into noun modifiers without a word for English who or that. 읽는 사람 is ‘a person who reads,’ 읽은 책 is ‘a book someone read,’ and 읽을 책 is ‘a book to read.’\n\nThe missing role comes from context. 제가 만난 사람 means ‘the person I met,’ while 제가 사는 도시 means ‘the city where I live.’", "wikipedia", "krdict"),
        example: "어제 도서관에서 빌린 책을 다 읽었어요.",
        exampleTranslation: "I finished reading the book that I borrowed from the library yesterday."
      },
      {
        title: "Connective endings build a train of thought",
        body: cited("Korean often links predicates instead of breaking every idea into a new sentence. -고 joins or sequences, -지만 introduces contrast, and -아/어서 can show a reason or close sequence.\n\nA connector rarely has one perfect English equivalent. Learn 비가 오지만 갈 거예요, ‘Although it is raining, I will go,’ as a full thought rather than treating -지만 as a detachable vocabulary card.", "krdict", "dd-and"),
        example: "일이 끝나서 동료하고 저녁을 먹었어요.",
        exampleTranslation: "Work finished, so I ate dinner with a colleague."
      },
      {
        title: "Negation has short and long forms",
        body: cited("Put 안 before a predicate for common short negation: 안 가요 means ‘I am not going.’ The longer construction -지 않다 gives 가지 않아요, while 못 가요 says circumstances or ability prevent you from going.\n\nWith many noun-plus-하다 verbs, 안 sits between the noun and 하다. 공부 안 해요 is the normal shape for ‘I do not study.’", "krdict"),
        example: "매운 음식은 잘 못 먹어요.",
        exampleTranslation: "I cannot eat spicy food very well."
      },
      {
        title: "-다가 connects interrupted and changed events",
        body: cited("The ending -다가 often presents one action that another interrupts: 공부하다가 잠이 들었어요 means ‘I fell asleep while studying.’ Related forms can show fetching something from elsewhere or completing one action before a contrasting change.\n\nThe whole construction decides the meaning, so translating every 다가 as ‘while’ will fail. Discover Discomfort's learner guide compares these uses through complete scenes rather than a single gloss.", "dd-daga", "krdict"),
        example: "카페에 갔다가 지갑을 두고 와서 돌아왔어요.",
        exampleTranslation: "I went to the café, but came back because I had left my wallet behind."
      }
    ]
  },

  whereSpoken: {
    overview: cited("The Korean peninsula remains the language's main center, but migration and displacement created long-standing communities elsewhere. Borders reinforce state standards without erasing regional links or diaspora speech.\n\nSpeaker totals depend on whether a count measures home language, ability, ethnicity, or heritage. ‘Around 80 million’ is more honest than false precision.", "wikipedia", "dialects"),
    regions: [
      { place: "South Korea", note: cited("Korean dominates education, public life, and media, with Pyojuneo as the official standard. Regional speech remains active even as Seoul-centered broadcasting and migration influence younger speakers.", "nikl-norms", "dialects") },
      { place: "North Korea", note: cited("Public institutions teach Munhwaŏ, the North Korean standard. Outsiders have much easier access to formal state broadcasts than ordinary conversation, so those broadcasts should never represent every northern voice.", "north-south", "dialects") },
      { place: "China", note: cited("Long-standing Korean-speaking communities live especially in northeast China, including Yanbian. Schooling, Mandarin contact, and local history distinguish their Korean from both recent expatriate speech and a simple copy of either state standard.", "wikipedia", "dialects") },
      { place: "Japan and Central Asia", note: cited("Zainichi Korean communities in Japan and Koryo-saram communities across Central Asia grew through different histories of colonialism, migration, and displacement. Their language choices may include Korean varieties, Japanese, Russian, and other local languages.", "wikipedia", "dialects") },
      { place: "Global diaspora", note: cited("Communities in North America, Australia, Europe, and elsewhere include immigrants, adoptees, mixed families, and heritage learners with very different speaking and literacy profiles. Even in Seoul, meaningful interaction grows through relationships and shared interests rather than a perfect set of tourist lines.", "dd-seoul", "wikipedia") }
    ]
  },

  difficulty: {
    label: "Demanding",
    overview: cited("Korean asks an English-speaking learner to wait for final predicates, infer missing people, hear unfamiliar consonant contrasts, and choose socially appropriate endings. Hangul softens the beginning, and many verb patterns repeat clearly.\n\nThat friendly start can hide the longer climb from reading signs to following casual speech. Your previous languages, target variety, literacy goals, and access to Korean-speaking friends will shape the difficulty more than any universal ranking.", "dd-facts", "dd-three-months", "wikipedia"),
    easierAspects: [
      "Hangul has a small, systematic inventory, so careful basic reading can develop quickly.",
      "Verbs do not change for grammatical person or number; 가요 can go with I, she, or they when context supplies the subject.",
      "Korean has no grammatical gender and no article system equivalent to English a and the.",
      "Particles and endings recur productively, which makes families of sentences easier to analyze over time.",
      "Courses, learner dictionaries, teachers, and subtitled media are plentiful for South Korean Standard Korean."
    ],
    hardAspects: [
      "Lax, tense, and aspirated consonants require focused listening, and their strongest cues vary by position and generation.",
      "Regular sound changes make continuous speech look different from a beginner's careful reading.",
      "Speech levels, honorifics, titles, and address terms require social knowledge as well as conjugation practice.",
      "Speakers omit subjects and objects so freely that listeners must remember the wider conversation.",
      "News, study, and professional reading bring dense Sino-Korean vocabulary and formal connective styles."
    ],
    plateauRisks: [
      "Continuing to rely on romanization after learning Hangul, which weakens the direct link between Korean spelling and sound.",
      "Knowing many isolated nouns but few particles, collocations, and endings that turn them into useful sentences.",
      "Watching translated subtitles and mistaking plot comprehension for Korean listening practice.",
      "Using safe -요 endings everywhere without learning how friends, colleagues, writing, and announcements sound different.",
      "Copying only Seoul entertainment speech and failing to recognize news, workplace language, or regional voices."
    ],
    workload: cited("A solid first year can cover Hangul, common particles, everyday -요 endings, sound changes, and core vocabulary. Independent conversation needs people who will explain why a grammatical sentence feels too formal, too casual, or unnatural.\n\nAt intermediate level, choose depth over more beginner material. Transcribe a short program, follow a podcast, or read a webtoon while keeping pronunciation and speech-level review alive.", "ksi", "ksi-roadmap", "dd-three-months")
  },

  advancedLearning: {
    strategy: cited("Start with Hangul and one structured course, then save useful sentences with audio and social setting. Record who speaks to whom, because ‘I am going’ is not enough information to learn 지금 가요 well.\n\nRetell one event in casual 해-style, polite 해요-style, and formal 합니다-style. This shows whether you understand the endings rather than memorizing unrelated phrases.\n\nDiscover Discomfort's three-month account shows how tutoring and real use expose gaps that apps hide. Its martial-arts glossary also shows how a personal interest can turn abstract study into a useful domain.", "dd-three-months", "dd-resources", "dd-vocabulary", "dd-honorifics", "dd-bjj"),
    mediaPractice: cited("Work through short clips in passes. Follow the scene, replay with Korean captions, mark the endings, shadow one speaker, then summarize without subtitles.\n\nMix drama with interviews, news, and ordinary online video. Dramas show relationship shifts well, but some voices are theatrical.\n\nLabel regional and North Korean clips, and treat ㅋㅋㅋ and ㅎㅎㅎ as digital interaction rather than formal prose. Variety trains you to hear genre as well as vocabulary.", "dd-laughter", "dialects", "dd-three-months"),
    dictionariesAndCorpora: cited("Begin with the Basic Korean Dictionary because it gives learner-friendly definitions, audio, labels, and examples. Look up stems: test 듣다 for 들었어요 and both 돕다 and 주다 when you meet 도와줘요.\n\nUse National Institute norms for spacing, standard pronunciation, and romanization questions. At advanced level, compare examples across genres before adopting an abstract connector or workplace phrase, because a dictionary proves that a form exists but usage shows where it belongs.", "krdict", "nikl-norms", "nikl-roman"),
    resources
  },

  wordsAndTexts: {
    overview: cited("Korean vocabulary draws from native Korean, Sino-Korean roots, and newer international loans. Native 말 mal means ‘speech’ or ‘word,’ while Sino-Korean 언어 eoneo is the learned term ‘language’; 집 jip is everyday ‘home,’ while 주택 jutaek appears in the broader idea of housing.\n\nBorrowed English also takes on Korean sound and meaning. 핸드폰 haendeupon means a mobile phone, so pronouncing it like two English words misses the fact that it now belongs to Korean.", "krdict", "dd-vocabulary"),
    notableWords: [
      { term: "눈치", transliteration: "nunchi", meaning: "social perception; reading a situation", note: cited("눈치 names your sense of other people's reactions and the unspoken shape of a scene. 눈치를 보다 means to watch the room or gauge how people are responding.", "krdict") },
      { term: "정", transliteration: "jeong", meaning: "affection or attachment built through a relationship", note: cited("정 often describes a bond that grows through shared time, care, and familiarity. 정이 들다 means to become attached, while 정이 많다 describes someone warm-hearted.", "krdict") },
      { term: "답답하다", transliteration: "dapdaphada", meaning: "stifling, frustrated, or emotionally blocked", note: cited("답답하다 can describe a stuffy room, a tight chest, a frustrating delay, or someone who refuses to understand. Its range shows why learners need situations rather than one-word translations.", "krdict") },
      { term: "아깝다", transliteration: "akkapda", meaning: "too valuable to waste; regrettably close", note: cited("Use 아깝다 when food, money, or effort would go to waste. 아깝게 졌어요 means a team lost by a painfully small margin.", "krdict") },
      { term: "수고", transliteration: "sugo", meaning: "effort, trouble, or labor", note: cited("Phrases such as 수고하세요 and 수고하셨습니다 acknowledge work in progress or completed effort. Hierarchy and workplace custom shape who says them to whom, so ‘good job’ is only a rough translation.", "krdict", "dd-honorifics") },
      { term: "덕질", transliteration: "deokjil", meaning: "active fandom; doing fan activities", note: "This playful modern word can cover collecting, attending events, translating, editing clips, or following a subject in depth. Speakers may use it with self-mockery or proud expertise." },
      { term: "좀", transliteration: "jom", meaning: "a little; a softener in requests", note: cited("The dictionary meaning is ‘a little,’ but 좀 often makes a request feel less abrupt. 물 좀 주세요 therefore sounds more natural than treating each word as a literal quantity statement.", "krdict", "dd-restaurant") }
    ],
    loanwordLayers: cited("Sino-Korean vocabulary appears in numbers, weekdays, schools, government, science, and daily abstractions. Native and Sino-Korean numerals divide the work: 세 명 means ‘three people,’ while 삼 층 means ‘third floor.’\n\nSouth Korean English loans may shorten or recombine their sources, as in 리모컨 rimokeon from ‘remote control’ and 셀카 selka from ‘self camera.’ North Korean standards sometimes prefer another formation, so vocabulary can create friction even when the grammar remains familiar.", "north-south", "krdict", "dd-facts"),
    idioms: [
      { original: "식은 죽 먹기", transliteration: "sigeun juk meokgi", translation: "A piece of cake; something very easy", note: "Literally, ‘eating cooled porridge.’ The informal phrase can sound boastful if you use it about another person's difficult task." },
      { original: "눈이 높다", transliteration: "nuni nopda", translation: "To have high standards", note: "Literally, ‘the eyes are high.’ Speakers often use it about selective taste in partners, fashion, or choices." },
      { original: "손이 크다", transliteration: "soni keuda", translation: "To be generous or prepare large quantities", note: "Literally, ‘the hand is big.’ It commonly describes someone who makes or gives far more food than strictly necessary." },
      { original: "발이 넓다", transliteration: "bari neolpda", translation: "To know a wide network of people", note: "Literally, ‘the feet are wide.’ The phrase praises social reach rather than describing a body." },
      { original: "입이 무겁다", transliteration: "ibi mugeopda", translation: "To be discreet; to keep secrets", note: "Literally, ‘the mouth is heavy.’ It contrasts with someone whose words travel too easily." }
    ],
    textGenres: [
      "Webtoons, where pictures, sound effects, spacing, and colloquial dialogue work together",
      "Contemporary novels and web fiction, from dialogue-heavy stories to compressed literary narration",
      "News reports and editorials using formal endings and dense Sino-Korean vocabulary",
      "Drama, film, variety shows, interviews, and livestreams with distinct degrees of scripting",
      "Lyrics and fan communication, where omitted subjects and address choices complicate translation",
      "Classical sijo poetry and historical mixed-script texts that require specialist support"
    ]
  },

  relationships: {
    overview: cited("Korean belongs to the Koreanic family, and many classifications treat Jejueo as its only other clearly separate member. Proposals connecting Korean genetically to Japanese, Tungusic, Mongolic, or a broad Altaic family have not produced scholarly consensus.\n\nStructural resemblance still helps learners, and contact with Chinese and Japanese left deep marks on vocabulary and writing. Keep ancestry, borrowed words, and similar grammar as three separate questions.", "glottolog", "wikipedia", "wals"),
    languages: relatedLanguages
  },
  culturalNotes: "Korean gives speakers many ways to shape a relationship, but honorifics do not turn interaction into a rigid chart. Ask what an ending does between these people, especially when a drama character switches between 존댓말 jondaenmal and 반말 banmal.\n\nA female speaker may call an older sister or close older woman 언니 eonni. 선배 seonbae names someone senior in a school, club, or professional cohort.\n\nA Seoul office, Jeju household, Koryo-saram family, and online game do not share one politeness script. Notice the choice and let speakers explain their own world.",
  resources,
  relatedLanguages,
  phrases: [
    { original: "안녕하세요?", transliteration: "Annyeonghaseyo?", translation: "Hello", literalMeaning: "Are you at peace?", usageNote: "A broadly useful polite greeting for first meetings and everyday encounters." },
    { original: "안녕!", transliteration: "Annyeong!", translation: "Hi!; Bye!", usageNote: "Casual speech for close friends, children, or a relationship where banmal already fits." },
    { original: "감사합니다.", transliteration: "Gamsahamnida.", translation: "Thank you.", usageNote: "Formal-polite and dependable in public, workplace, or service interactions." },
    { original: "고마워요.", transliteration: "Gomawoyo.", translation: "Thank you.", usageNote: "Polite conversational and often warmer in personal interaction; 고마워 is casual." },
    { original: "죄송합니다.", transliteration: "Joesonghamnida.", translation: "I am sorry; excuse me.", usageNote: "A formal-polite apology, stronger than every small English ‘excuse me.’" },
    { original: "괜찮아요.", transliteration: "Gwaenchanayo.", translation: "It is okay; I am okay; no thank you.", usageNote: "Intonation and context make it reassurance, a report, or a polite refusal." },
    { original: "이거 하나 주세요.", transliteration: "Igeo hana juseyo.", translation: "Please give me one of these.", literalMeaning: "This thing, one, please give.", usageNote: "Point clearly, and name the item when several things are nearby." },
    { original: "물 좀 주세요.", transliteration: "Mul jom juseyo.", translation: "Please give me some water.", usageNote: "좀 literally means ‘a little’ and also softens the request." },
    { original: "한국어를 배우고 있어요.", transliteration: "Hangugeoreul baeugo isseoyo.", translation: "I am learning Korean.", usageNote: "Contemporary polite South Korean form; -고 있어요 presents an ongoing activity." },
    { original: "천천히 말씀해 주세요.", transliteration: "Cheoncheonhi malsseumhae juseyo.", translation: "Please speak slowly.", usageNote: "말씀 is an honorific or polite word for speech; 말해 주세요 is less deferential." },
    { original: "다시 한번 말해 주세요.", transliteration: "Dasi han beon malhae juseyo.", translation: "Please say that once again.", usageNote: "A useful polite conversational request when you did not catch a sentence." },
    { original: "무슨 뜻이에요?", transliteration: "Museun tteusieyo?", translation: "What does it mean?", literalMeaning: "What meaning is it?", usageNote: "Repeat the unknown word or point to the text before asking." },
    { original: "잘 모르겠어요.", transliteration: "Jal moreugesseoyo.", translation: "I am not sure; I do not really understand.", usageNote: "This polite phrase often sounds softer than a direct 몰라요, ‘I don't know.’" },
    { original: "매운 음식 잘 못 먹어요.", transliteration: "Maeun eumsik jal mot meogeoyo.", translation: "I cannot eat spicy food very well.", usageNote: "Useful when ordering; 잘 못 describes limited ability rather than a total refusal." },
    { original: "수고하셨습니다.", transliteration: "Sugohasyeotseumnida.", translation: "Thank you for your work; you worked hard.", usageNote: "A formal acknowledgment after shared work; hierarchy and workplace custom affect its use." },
    { original: "잘 먹겠습니다.", transliteration: "Jal meokgetseumnida.", translation: "Thank you for the meal; I will eat well.", usageNote: "Say it before eating, especially when another person provides or pays for the meal." }
  ],
  sources,
  seo: {
    title: "Korean Language Guide: Hangul, Grammar, Speech Levels and Varieties",
    description: "A clear, example-rich guide to contemporary Korean, including Hangul, Seoul pronunciation, grammar, speech levels, honorifics, regional voices, media, phrases, and learning resources."
  }
} satisfies LanguageGuide;
