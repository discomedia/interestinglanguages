import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Okinawan",
    relationship: "Japonic relative in the Northern Ryukyuan branch",
    explanation: cited(
      "Okinawan belongs to Japonic, but its traditional varieties are not mutually intelligible with Standard Japanese. Language shift has put them at risk. Okinawan Japanese is a different variety: it is Japanese shaped by contact with Ryukyuan languages.",
      "wiki-ryukyuan",
      "ninjal-endangered"
    )
  },
  {
    name: "Amami",
    relationship: "Japonic relative in the Northern Ryukyuan branch",
    explanation: cited(
      "Amami varieties show how far apart Japonic languages can be. They are community languages with ongoing documentation and revitalization work, even as fewer children learn them at home.",
      "ninjal-endangered",
      "unesco-shimamuni"
    )
  },
  {
    name: "Miyako",
    relationship: "Japonic relative in the Southern Ryukyuan branch",
    explanation: cited(
      "Miyakoan varieties differ from both Japanese and Northern Ryukyuan languages. They show that Japanese is one branch of Japonic, not the whole family. NINJAL works with communities to document endangered local languages.",
      "ninjal-miyako",
      "wiki-ryukyuan"
    )
  },
  {
    name: "Korean",
    slug: "korean",
    relationship: "Typologically similar neighbor, but not an established close relative",
    explanation: cited(
      "Japanese and Korean share verb-final order, particles, social styles, and many Chinese-derived words. Similarity and long contact do not prove a recent common ancestor. Current classifications place Japonic and Koreanic in separate families.",
      "glottolog-japanese",
      "wiki-japanese"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const japaneseGuide = {
  slug: "japanese",
  name: "Japanese",
  autonym: "日本語",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Japanese pairs short sound units with pitch patterns, particles, and flexible social styles. Learn how its three scripts work together and why context often supplies what a sentence leaves unsaid.",
  family: "Japonic",
  macroRegion: "Japan, East Asia, and global diaspora and learner communities",
  primaryScript: "Kanji, hiragana, and katakana",
  difficultyLabel: "Very demanding",
  learnerHook: "A Japanese sentence can say who did what through particles and context, even when it never names the person. Follow that pattern from a text message to a recipe or workplace exchange.",
  hero: {
    imageAlt: "Japanese text mixing kanji, hiragana, and katakana in contemporary print.",
    callToActionLabel: "Explore Japanese in use"
  },
  classification: "The major language of the Japanese branch of Japonic, with no demonstrated close external relative",
  speakerCommunity: "Most people who use Japanese every day live in Japan. Families and schools in Brazil, Peru, the United States, Canada, and elsewhere also use it, though heritage speakers differ widely in how much they speak, read, or write.\n\nJapan's 2025 census counted 123.05 million residents; that is a population figure, not a Japanese speaker count. Standard Japanese connects schools, broadcasters, and public life, while local varieties still carry regional identity. People in Japan also use Ainu, Ryukyuan languages, Japanese Sign Language, immigrant languages, and other heritage languages.",
  facts: [
    { label: "Family", value: "Japonic · Japanese branch" },
    { label: "Primary community", value: "Japan; the 2025 census counted 123.05 million residents, not language speakers" },
    { label: "Standard variety", value: "Hyōjungo, broadly based on educated Tokyo speech" },
    { label: "Writing", value: "Kanji + hiragana + katakana, often with Latin letters" },
    { label: "Rhythmic unit", value: "The mora, not simply the syllable" },
    { label: "Common-use kanji", value: "2,136 jōyō kanji in the current official list" }
  ],
  introduction: cited("Japanese is the main language of everyday public life in Japan and is also used in family and community networks abroad, including in Brazil, Peru, and North America. Within Japan it shares space with Ryukyuan languages, Ainu, Japanese Sign Language, and languages brought by migration. Heritage speakers abroad have different experiences of speaking, reading, and writing Japanese, shaped by family life and schooling.\n\nJapanese belongs to the Japonic family, whose other living members include the Ryukyuan languages. Standard Japanese connects schools, national media, and most textbooks, while regional varieties remain important to local speech and identity. Writing combines kanji characters with the hiragana and katakana syllabaries, often within one sentence.\n\nIn conversation, people may leave out a subject everyone already understands, and their choice of verb form or address can reflect the relationship with the listener. A printed sentence can therefore tell only part of the story about how it will sound in a real exchange.", "glottolog-japanese", "wiki-japanese", "wiki-ryukyuan", "census-2025", "wiki-dialects", "unicode-east-asia"),
  origins: {
    overview: cited(
      "Japanese belongs to Japonic, a family that also includes the Ryukyuan languages. The surviving record becomes substantial in eighth-century works such as the Kojiki, Nihon Shoki, and Man'yōshū. Their writers adapted Chinese characters to record Japanese words and sounds.\n\nThose texts show an earlier form of Japanese, not the language's absolute beginning. Later writing developed kana, and Japanese changed its sounds and grammar while absorbing several layers of Chinese-derived vocabulary. The Oxford–NINJAL corpus lets readers search and compare annotated Old Japanese texts.",
      "wiki-japanese",
      "ninjal-old-japanese",
      "glottolog-japanese"
    ),
    timeline: [
      {
        period: "Before the 8th century",
        event: cited(
          "The ancestor of Japanese and the Ryukyuan languages diversified before the earliest surviving Japanese texts. Scholars compare later varieties to reconstruct this earlier stage; no written record fixes its exact date or place of origin.",
          "glottolog-japanese",
          "wiki-ryukyuan"
        )
      },
      {
        period: "8th century",
        event: cited(
          "Writers used Chinese characters for meanings and for Japanese sounds. The sound-based practice called man'yōgana helped lead to hiragana and katakana. Old poetry also preserves sound contrasts that later Japanese lost.",
          "ninjal-old-japanese",
          "unicode-east-asia"
        )
      },
      {
        period: "9th–16th centuries",
        event: cited(
          "Kana gave writers more ways to record Japanese alongside Literary Chinese. Court diaries, tales, poetry, sermons, and war narratives developed different written voices. Meanwhile, sounds and grammar changed, and Chinese-derived words entered through more than one reading tradition.",
          "wiki-japanese",
          "ninjal-old-japanese"
        )
      },
      {
        period: "17th–19th centuries",
        event: cited(
          "Urban readers bought popular print, theater scripts, and travel writing. Portuguese contact left パン (pan, “bread”), while Dutch learning brought technical terms. Edo speech grew in influence without erasing local varieties.",
          "wiki-japanese",
          "ninjal-corpora"
        )
      },
      {
        period: "Meiji period to the digital present",
        event: cited(
          "Schools, publishing, broadcasting, and language policy spread a national standard. Writers coined compounds for new fields and later borrowed many words from English. Readers now meet Japanese in vertical books, horizontal screens, text messages, and media made for audiences far beyond Japan.",
          "agency-language-policy",
          "unicode-east-asia",
          "wiki-japanese"
        )
      }
    ],
    contactHistory: cited(
      "Chinese supplied characters and a vast stock of word parts. 文化 (bunka, “culture”) and 経済 (keizai, “economy”) show that layer; some newer compounds made in Japan later traveled to other East Asian languages. Buddhist texts also carried specialist words and readings.\n\nPortuguese contact gave Japanese パン (pan, “bread”), and Dutch study shaped technical vocabulary. Modern English loans include コンピューター (konpyūtā, “computer”). Borrowing changes meaning as well as sound: a Japanese バイキング (baikingu) is commonly a buffet.",
      "wiki-japanese",
      "unicode-east-asia",
      "jmdict"
    ),
    standardization: cited(
      "The shared standard, hyōjungo, drew heavily on educated Tokyo speech. Schools, government, publishers, and broadcasters helped spread it, while people kept local speech for many settings. Tokyo itself also has varied everyday speech.\n\nThe Agency for Cultural Affairs issues guidance on common-use kanji and modern kana spelling. Its 2,136 jōyō characters guide general public writing; names, literature, and specialist texts use others. Publishers and broadcasters make further style choices of their own.",
      "agency-language-policy",
      "wiki-dialects"
    )
  },
  variants: {
    overview: cited(
      "Local Japanese varieties differ in words, grammar, sounds, and pitch. Kansai media often highlights や (ya) and へん (hen), but Osaka, Kyoto, and Kobe speakers don't all sound alike. Tōhoku and Kyūshū contain their own diverse varieties.\n\nSpeakers also shift styles as they move, age, and build relationships. Hachijō is unusually divergent, and specialists differ over where to draw its language boundary. Ryukyuan languages belong to other branches of Japonic, even when institutions call them “dialects.”",
      "wiki-dialects",
      "ninjal-corpora",
      "ninjal-endangered"
    ),
    items: [
      {
        name: "Standard / Tokyo-based Japanese",
        note: cited("Schools and national media use this shared norm, with Tokyo-type pitch accent. Everyday Tokyo speech still varies across speakers and settings.", "wiki-dialects", "ojad")
      },
      {
        name: "Kansai varieties",
        note: cited("Osaka, Kyoto, and Kobe speech share features but are not identical. Kansai pitch accent differs from Tokyo accent, and speakers use local forms in daily life as well as performance.", "wiki-dialects", "ninjal-corpora")
      },
      {
        name: "Tōhoku varieties",
        note: cited("Northern Honshū has diverse local sounds and grammar. Outsiders may struggle to follow some varieties; that says nothing about their structure or value.", "wiki-dialects", "ninjal-corpora")
      },
      {
        name: "Kyūshū varieties",
        note: cited("Southern mainland varieties differ in particles, verbs, words, and accent. Fukuoka media speech represents only one part of the region.", "wiki-dialects", "ninjal-corpora")
      },
      {
        name: "Hachijō and Ryukyuan languages",
        note: cited("These remind learners that political labels and linguistic distance do not always match. Hachijō is highly divergent; Ryukyuan languages form sister branches to Japanese and face serious endangerment.", "ninjal-endangered", "wiki-ryukyuan")
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Japanese has five core vowels, but timing changes words. Speakers count short beats called morae: がっこう (gakkō, “school”) has four, ga-k-ko-o. Small っ fills one beat before the next consonant, and a long vowel fills an extra beat.\n\nListen to おばさん (obasan, “aunt”) beside おばあさん (obāsan, “grandmother”), or きて (kite, “come”) beside きって (kitte, “stamp”). Practice length and rhythm before worrying about every pitch pattern.",
      "wiki-japanese",
      "ojad"
    ),
    script: "Mixed Japanese script; kana readings and Hepburn-style romanization are supplied for sound examples",
    soundSystem: cited(
      "The sound in らりるれろ is usually a quick tongue tap, unlike a sustained English r or l. The vowel /u/ often has less lip rounding than English “oo.” Between voiceless consonants, /i/ and /u/ can lose their voice, so すき (suki, “like”) may sound close to “ski.”\n\nThe ん in しんぶん (shinbun, “newspaper”) sounds close to [m] before b, although the spelling stays the same. Small ょ joins the previous consonant, so きょ (kyo) takes one beat while きよ (kiyo) takes two. These details matter more in listening than a Roman spelling can show.",
      "wiki-japanese",
      "ojad"
    ),
    prosody: cited(
      "In Tokyo-based Standard Japanese, a word can have a characteristic high-to-low pitch drop. はし (hashi) can mean “chopsticks,” “bridge,” or “edge,” and the pitch pattern helps distinguish them. A following particle can make the drop easier to hear.\n\nOther regions use different accent systems. Listen to pitch in whole phrases and imitate a consistent model, but keep speaking while you learn it. Length, rhythm, and natural pauses also shape how easily others understand you.",
      "wiki-pitch-accent",
      "ojad",
      "wiki-dialects"
    ),
    learnerTraps: [
      "Giving every mora equal loud stress instead of maintaining Japanese timing and pitch movement",
      "Shortening long vowels: おばさん obasan “aunt” versus おばあさん obāsan “grandmother”",
      "Ignoring small っ: きて kite “come” versus きって kitte “stamp”",
      "Turning らりるれろ into a strong English r or l instead of a brief tap",
      "Treating Tokyo pitch accent as either irrelevant in every context or mandatory before conversation"
    ],
    sampleWords: [
      { original: "おばさん", transliteration: "obasan", translation: "aunt; middle-aged woman", note: "Four morae: o-ba-sa-n. Compare the following long-vowel form." },
      { original: "おばあさん", transliteration: "obāsan", translation: "grandmother; elderly woman", note: "Five morae: o-ba-a-sa-n. Hold the second a for a full beat." },
      { original: "きて / きって", transliteration: "kite / kitte", translation: "Come! / postage stamp", note: "The small っ adds a beat of closure before t." },
      { original: "がっこう", transliteration: "gakkō", translation: "school", note: "Count ga-k-ko-o: the doubled consonant and long final vowel each add a mora." },
      { original: "りょうり", transliteration: "ryōri", translation: "cooking; cuisine", note: "Small ょ joins the preceding consonant; the ō remains long: ryo-o-ri." },
      { original: "しんぶん", transliteration: "shinbun", translation: "newspaper", note: "The written ん adapts before b and is often realized near [m], without changing the spelling." },
      { original: "はし", transliteration: "hashi", translation: "chopsticks; bridge; edge", note: "A classic reminder that Tokyo pitch patterns can distinguish words whose segmental sounds match." }
    ]
  },
  writing: {
    overview: cited(
      "A single Japanese sentence can mix three scripts. In 私はコーヒーを飲みます (watashi wa kōhī o nomimasu, “I drink coffee”), 私 and 飲 are kanji, は・を・みます are hiragana, and コーヒー is katakana. Kanji often carry word meaning, hiragana handles particles and endings, and katakana commonly marks loans.\n\nThe mixture helps readers find words without spaces. Books may run vertically in columns from right to left; screens often run horizontally from left to right. Both can also include Latin letters, numerals, and emoji.",
      "unicode-east-asia",
      "agency-language-policy"
    ),
    primaryScript: "Kanji, hiragana, and katakana",
    romanization: cited(
      "Hepburn romanization gives し as shi and つ as tsu; Kunrei-shiki writes si and tu. Roman letters help with names, signs, and early pronunciation, but they hide which kanji a word uses. Move your searches and saved examples into Japanese writing as soon as you can read kana.\n\nMany people type a word's reading and choose kanji from an input menu. That choice needs context: the same sounds can lead to several written words. Learning to recognize the right candidate is part of learning vocabulary.",
      "wiki-japanese",
      "agency-language-policy"
    ),
    spellingNorms: cited(
      "Japanese spelling follows conventions that don't always match a first guess from sound. The topic particle は sounds wa, the object particle を sounds o, and directional へ sounds e. Long vowels appear as おう, おお, or katakana ー: 学校 (がっこう, gakkō), 大きい (おおきい, ōkii), and コーヒー (kōhī).\n\nA kanji can have readings tied to Chinese-derived words and others tied to native Japanese words. The labels on and kun help explain patterns, but they won't let you calculate every reading. Learn 今日 (kyō, “today”) and 大人 (otona, “adult”) as whole words; small furigana can supply their readings in print.",
      "agency-language-policy",
      "unicode-east-asia",
      "jmdict"
    ),
    styleNotes: [
      cited("Learn kanji as part of written vocabulary with reading, meaning, collocation, and example sentence; a character-to-English keyword is only a memory hook.", "jmdict"),
      cited("Keep katakana active by reading menus, product labels, and technology terms. Weak katakana becomes a surprisingly large intermediate bottleneck.", "unicode-east-asia"),
      cited("Notice script choice: writing a familiar word in katakana can signal emphasis, technical classification, voice, or visual style rather than foreign origin.", "unicode-east-asia"),
      cited("Use furigana as scaffolding, then reread without it. Names require special care because the same characters can permit several readings.", "agency-language-policy", "jmdict")
    ]
  },
  grammar: {
    overview: cited(
      "A Japanese verb can carry negation, time, politeness, and other meanings through attached pieces. 食べませんでした (tabemasen deshita) means “didn't eat,” whether the person was I, you, or someone else. Verbs don't change for the subject's person or number.\n\nThe hard part often lies around the verb. Speakers leave out people or things already clear from context, while particles show how the remaining words relate. Learn a pattern with a scene: who is speaking, what do they already know, and how formal is the exchange?",
      "wiki-japanese",
      "ninjal-corpora"
    ),
    typologicalProfile: cited(
      "In a common Japanese sentence, descriptions come before nouns and the verb comes near the end. 昨日、友達と映画を見ました (kinō, tomodachi to eiga o mimashita) means “Yesterday, I watched a film with a friend.” Particles such as と and を follow the words they mark.\n\nGrammatical pieces attach to verbs in a fairly regular order; linguists call this agglutination. Nouns have no grammatical gender, and verbs don't agree with the subject. Politeness, giving and receiving, and sentence endings add meanings that English often leaves to tone or context.",
      "wiki-japanese",
      "ninjal-corpora"
    ),
    morphology: cited(
      "Learn a verb together with the changes you will hear. 書く (kaku, “write”) gives 書かない (kakanai, “don't write”), 書いた (kaita, “wrote”), 書いて (kaite, the linking or request form), and 書ける (kakeru, “can write”). 食べる (taberu, “eat”) follows a simpler pattern: 食べない (tabenai) and 食べた (tabeta).\n\nThe common irregular verbs are する (suru, “do”) and 来る (kuru, “come”). Some adjectives change too: 高い (takai, “expensive”) becomes 高くない (takakunai, “not expensive”) or 高かった (takakatta, “was expensive”). Nouns and so-called na-adjectives use だ (da) or polite です (desu) to close many sentences.",
      "wiki-japanese",
      "jmdict"
    ),
    syntax: cited(
      "Particles show a listener how words fit together. が (ga) often marks a subject, を (o) an object, に (ni) a destination or time, and で (de) a place where something happens. は (wa) sets a topic or draws a contrast.\n\nIn 私は魚が好きです (watashi wa sakana ga suki desu), the natural English is “I like fish.” Japanese frames 私 with は and marks 魚 with が. Translating each particle as an English preposition would miss how the sentence works.",
      "wiki-japanese",
      "ninjal-corpora"
    ),
    advancedPainPoints: [
      "Choosing は wa and が ga from discourse rather than a one-line “topic versus subject” slogan",
      "Recovering omitted subjects, objects, and possessors without inserting English pronouns everywhere",
      "Controlling plain, polite, honorific, humble, written, and casual forms across real relationships",
      "Learning which verb, particle, and noun combinations are conventional rather than merely possible",
      "Reading long noun-modifying clauses before discovering the noun they describe"
    ],
    topics: [
      {
        title: "Topic, subject, and contrast",
        body: cited("は (wa) sets up what a comment is about or contrasts it with something else. が (ga) identifies the person or thing that fills a role.\n\nAfter 誰が来ましたか (dare ga kimashita ka, “Who came?”), 田中さんが来ました (Tanaka-san ga kimashita) gives the answer. 田中さんは来ました can mean “Tanaka came, at least,” leaving others in contrast. The surrounding conversation helps you choose.", "wiki-japanese", "ninjal-corpora"),
        example: "だれが来ましたか。—田中さんが来ました。",
        exampleTranslation: "Dare ga kimashita ka? — Tanaka-san ga kimashita. “Who came?” — “Mr/Ms Tanaka came.”"
      },
      {
        title: "Arguments disappear when context supplies them",
        body: cited("Japanese has pronouns, but speakers often leave out a person or thing that everyone can identify. もう食べました (mō tabemashita) supplies only “already ate”; the scene tells you who ate.\n\nDon't put 私 (watashi, “I”) into every sentence you make. If the missing person isn't clear, you can ask 誰が？ (dare ga, “Who?”).", "wiki-japanese", "jpf-irodori"),
        example: "A: 昼ご飯は？ B: もう食べました。",
        exampleTranslation: "A: Hirugohan wa? B: Mō tabemashita. “What about lunch?” “I’ve already eaten.”"
      },
      {
        title: "The て-form links actions and requests",
        body: cited("The て-form connects a verb to what follows. ドアを開けて、入ってください (doa o akete, haitte kudasai) joins two actions and makes a polite request: “Please open the door and come in.”\n\nIn 東京に住んでいます (Tōkyō ni sunde imasu, “I live in Tokyo”), て joins 住む to いる to express a continuing state. Learn each complete construction instead of assigning one English word to て.", "jpf-irodori", "jmdict"),
        example: "ドアを開けて、入ってください。",
        exampleTranslation: "Doa o akete, haitte kudasai. “Please open the door and come in.”"
      },
      {
        title: "Plain and polite are grammatical styles, not emotion meters",
        body: cited("食べる (taberu) and 食べます (tabemasu) both mean “eat,” but the second fits a polite public exchange. Plain forms appear with close people, inside quoted thoughts, and in many written styles. A plain form is not automatically rude.\n\nIn 明日行くと思います (ashita iku to omoimasu, “I think I'll go tomorrow”), 行く is plain inside the thought and 思います is polite at the end. Notice which part of the sentence carries the relationship with your listener.", "jpf-irodori", "wiki-japanese"),
        example: "明日行くと思います。",
        exampleTranslation: "Ashita iku to omoimasu. “I think I’ll go tomorrow.”"
      },
      {
        title: "Honorific and humble verbs track social direction",
        body: cited("Japanese has special verbs for showing respect to the person doing an action. 先生がいらっしゃいます (sensei ga irasshaimasu) speaks respectfully about the teacher's presence. Linguists call this sonkeigo.\n\nA different set speaks humbly about your own action toward that person. 私があとで伺います (watashi ga ato de ukagaimasu) means “I'll call on them later”; the humble style is kenjōgo. Workplace use also depends on whether the person belongs to your own group or the listener's.", "jpf-irodori", "agency-language-policy"),
        example: "先生がいらっしゃいます。私があとで伺います。",
        exampleTranslation: "Sensei ga irasshaimasu. Watashi ga ato de ukagaimasu. “The teacher is here. I will call on them later.”"
      },
      {
        title: "Relative clauses come before the noun",
        body: cited("Japanese puts the description before the noun. In 昨日駅で買った本 (kinō eki de katta hon), the last word 本 (hon, “book”) is what I bought at the station yesterday. No separate word for “that” or “which” links the parts.\n\nWhen reading a long description, find the final noun first. Then ask what role that noun plays in the preceding clause, and let context supply any person left unsaid.", "wiki-japanese", "ninjal-corpora"),
        example: "昨日駅で買った本を読みました。",
        exampleTranslation: "Kinō eki de katta hon o yomimashita. “I read the book that I bought at the station yesterday.”"
      },
      {
        title: "Giving and receiving encode viewpoint",
        body: cited("あげる (ageru), くれる (kureru), and もらう (morau) describe giving and receiving from different viewpoints. 友達が本をくれた (tomodachi ga hon o kureta) brings a gift toward the speaker's side; 友達に本をもらった (tomodachi ni hon o moratta) centers the receiver.\n\nThese verbs can follow a て-form to show who did a favor for whom. In the example below, くれる tells you that the teaching helped the speaker or someone close to them.", "jmdict", "ninjal-corpora"),
        example: "友達が漢字を教えてくれました。",
        exampleTranslation: "Tomodachi ga kanji o oshiete kuremashita. “A friend kindly taught me the kanji.”"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Most daily Japanese use happens in Japan, whose 2025 census counted 123.05 million residents. That figure measures population, not Japanese speakers. Migration and education have also built family, school, and professional networks across the Americas and Pacific.\n\nWithin Japan, standard and regional Japanese coexist with Ryukyuan languages, Ainu, Japanese Sign Language, and languages brought by migrants.",
      "wiki-japanese",
      "glottolog-japanese",
      "agency-language-policy",
      "census-2025"
    ),
    regions: [
      { place: "Japan", note: cited("The overwhelming center of first-language use, public institutions, publishing, education, and media. Standard Japanese is shared nationwide, while local varieties remain important markers of place and relationship.", "glottolog-japanese", "wiki-dialects") },
      { place: "Okinawa and the Ryukyu Islands", note: cited("Standard and Okinawan Japanese are widespread, alongside endangered Ryukyuan languages. Do not assume a local Japanese feature and a Ryukyuan-language form are the same phenomenon.", "ninjal-endangered", "wiki-ryukyuan") },
      { place: "Brazil and Latin America", note: cited("Migration beginning in the early twentieth century created major Nikkei communities. Japanese proficiency varies by generation, and modern mobility has added returnee and temporary-worker networks.", "wiki-japanese") },
      { place: "Hawaiʻi, the continental United States, and Canada", note: cited("Heritage institutions, family histories, schools, religious communities, and contemporary migration sustain Japanese in forms shaped by local English and multilingual life.", "wiki-japanese") },
      { place: "International learner and professional networks", note: cited("Japan Foundation courses, universities, schools, fandoms, business, research, tourism, and online communities support extensive second-language use well beyond diaspora families.", "jpf-irodori") }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "English speakers often need sustained practice because Japanese asks them to read mixed script, follow unspoken references, and choose forms that fit a relationship. Discover Discomfort's difficulty guide emphasizes the time needed for kana and kanji, though its broad ranking cannot predict any individual's progress.\n\nJapanese also offers regular patterns: nouns have no grammatical gender, verbs don't agree with person, and common conjugations repeat. Reading, conversation, listening, and social register grow at different speeds, so a single “level” will hide what you can actually do.",
      "dd-hardest",
      "wiki-japanese",
      "agency-language-policy"
    ),
    easierAspects: [
      "Hiragana and katakana are compact, systematic syllabaries",
      "Core verb and adjective transformations are relatively regular",
      "Nouns have no grammatical gender and verbs do not agree with person or number",
      "Enormous quantities of audio, books, games, television, podcasts, and teaching material are available",
      "Japanese speakers and institutions support a large global learning ecosystem"
    ],
    hardAspects: [
      "Learning kanji through thousands of words with context-dependent readings",
      "Understanding omitted arguments and particle choices from discourse",
      "Keeping mora length, gemination, connected speech, and pitch patterns audible",
      "Matching plain, polite, honorific, humble, literary, and casual registers to situation",
      "Building a large Sino-Japanese vocabulary whose similar-looking compounds can blur together"
    ],
    plateauRisks: [
      "Recognizing kanji keywords while being unable to read the words containing them",
      "Watching subtitled entertainment passively without replay, transcription, or speaking",
      "Remaining in polite textbook Japanese and never learning ordinary plain-form interaction",
      "Collecting grammar patterns without scenes, collocations, or register labels",
      "Avoiding monolingual definitions and longer native texts after beginner materials become comfortable"
    ],
    workload: cited(
      "A practical week can mix course lessons, kanji words in context, replayed audio, a conversation, and reading you enjoy. Check progress through tasks: handle a restaurant exchange, understand one short clip, or revise a message with a teacher. Keep listening, interaction, and script in the same routine.",
      "dd-hardest",
      "jpf-irodori"
    )
  },
  advancedLearning: {
    strategy: cited(
      "After a beginner course, choose a subject you really follow: cooking, baseball, work, games, or fiction. Return to it across audio and writing so words recur, and save sentences with a note about who said them and to whom.\n\nKeep separate goals for conversation, reading, and corrected writing. When a phrase feels unfamiliar, NINJAL's written, spoken, historical, dialect, and learner corpora can show where people actually use it.",
      "ninjal-corpora",
      "jpf-irodori"
    ),
    mediaPractice: cited(
      "A drama or game character may speak in a stylized social voice. Before borrowing a line, ask whether an ordinary friend, coworker, or shop worker would say it. Compare fiction with interviews, radio, and unscripted video.\n\nReplay 30–60 seconds of audio, write what you hear, then check Japanese subtitles. Mark the omitted words and reduced sounds before you imitate the line. The written subtitles connect sound with kanji, but a conversation partner can tell you whether that register fits your own situation.",
      "ninjal-corpora",
      "jpf-irodori"
    ),
    dictionariesAndCorpora: cited(
      "When you look up a word, check its reading, part of speech, typical particles, register, and a sentence where it appears. JMdict supplies many learner dictionaries with readings and usage tags; NINJAL corpora let you check word partners and genre. OJAD shows Tokyo accent patterns for words and verb forms.\n\nWhen you can read explanations comfortably, add a Japanese–Japanese dictionary. It helps you notice distinctions that a short English gloss hides.",
      "jmdict",
      "ninjal-corpora",
      "ojad"
    ),
    resources: [
      { type: "course", title: "Irodori: Japanese for Life in Japan", url: "https://www.irodori.jpf.go.jp/en/", level: "beginner", description: cited("Free Japan Foundation coursebooks, audio, and online study organized around practical communication for daily life and work in Japan.", "jpf-irodori") },
      { type: "course", title: "Marugoto Japanese Online Course", url: "https://marugoto.jpf.go.jp/en/e-learning/", level: "all", description: cited("Japan Foundation courses connect communication tasks with culture from beginner into intermediate study. Choose this track if you want a broader range than relocation situations.", "jpf-irodori") },
      { type: "dictionary", title: "JMdict / WWWJDIC", url: "https://www.edrdg.org/", level: "all", description: cited("The maintained open Japanese–multilingual lexical database behind many dictionary applications, with readings, senses, usage labels, and related kanji/name projects.", "jmdict") },
      { type: "corpus", title: "NINJAL Corpus Portal", url: "https://clrd.ninjal.ac.jp/en/corpus-list.html", level: "advanced", description: cited("A gateway to balanced written, spontaneous spoken, historical, dialect, and learner Japanese corpora for checking what appears where.", "ninjal-corpora") },
      { type: "other", title: "OJAD: Online Japanese Accent Dictionary", url: "https://www.gavo.t.u-tokyo.ac.jp/ojad/eng/pages/home", level: "intermediate", description: cited("A University of Tokyo/NINJAL-supported tool for visualizing standard accent patterns, verb inflections, and phrase prosody. Treat it as a Tokyo model, not all Japanese.", "ojad") },
      { type: "other", title: "Discover Discomfort: Learning Enough Japanese to Order Food", url: "https://discoverdiscomfort.com/learning-language-to-order-food/", level: "beginner", description: cited("A first-person account of preparing for restaurant interaction with a teacher and food-specific phrases. It shows one focused short-term speaking goal.", "dd-food") },
      { type: "other", title: "Discover Discomfort: Japanese Difficulty Guide", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", level: "beginner", description: cited("The Japanese section sketches a path through kana, kanji, and continued study. Its ranking and time estimate are opinions, not measured outcomes for every learner.", "dd-hardest") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "A Japanese word has a meaning, a written form, and a social setting. 始める (hajimeru, “begin”), 開始する (kaishi suru, “commence”), and スタートする (sutāto suru, “start”) overlap, but they don't always fit the same sentence.\n\nSound-symbolic words such as どきどき (dokidoki, “heart pounding”) belong to ordinary speech. Small endings such as ね (ne) and よ (yo) also help speakers show what they assume their listener knows. Read recipes, chat, news, and fiction to hear how these choices shift by genre.",
      "jmdict",
      "ninjal-corpora"
    ),
    notableWords: [
      { term: "懐かしい", transliteration: "natsukashii", meaning: "fondly nostalgic; bringing back memories", note: cited("Often exclaimed when a place, song, taste, or object warmly recalls the past. English “nostalgic” can sound sadder or more abstract than the common conversational reaction 懐かしい！", "jmdict") },
      { term: "もったいない", transliteration: "mottainai", meaning: "what a waste; too good to waste", note: cited("People say this about wasted food, time, talent, or opportunity. It is an everyday reaction, not only an environmental slogan.", "jmdict") },
      { term: "よろしく", transliteration: "yoroshiku", meaning: "please treat this/my request favorably", note: cited("A relationship-managing formula with no single English equivalent. In よろしくお願いします it can close an introduction, entrust a request, or acknowledge future cooperation.", "jpf-irodori", "jmdict") },
      { term: "やばい", transliteration: "yabai", meaning: "dangerous; awful; amazing; intense", note: cited("A vivid example of semantic expansion. Intonation and setting determine whether the speaker sees trouble, excellence, shock, or sheer degree; it remains casual and may be unsuitable in formal contexts.", "ninjal-corpora", "jmdict") },
      { term: "積ん読", transliteration: "tsundoku", meaning: "books accumulated unread", note: cited("A playful compound associated with 積んでおく tsunde oku “pile up and leave” and 読書 dokusho “reading.” It names a recognizable habit, but Japanese speakers do not all invoke a special cultural philosophy when using it.", "jmdict") },
      { term: "空気を読む", transliteration: "kūki o yomu", meaning: "read the room", note: cited("Literally “read the air.” It concerns inferring unstated social expectations; it can praise sensitivity or criticize pressure to conform, depending on context.", "ninjal-corpora", "jmdict") }
    ],
    loanwordLayers: cited(
      "Japanese draws on native words, Chinese-derived compounds, and later loans from other languages. Native verbs and adjectives carry much daily talk; Chinese-derived compounds appear often in formal and technical writing. Many recent loans use katakana, especially in business, fashion, and technology.\n\nSpeakers also shorten long loans: パーソナルコンピューター became パソコン (pasokon, “personal computer”). A loan may change meaning: マンション (manshon) usually refers to a modern apartment building or unit. Check Japanese usage rather than guessing from the English source word.",
      "wiki-japanese",
      "jmdict",
      "unicode-east-asia"
    ),
    idioms: [
      { original: "猿も木から落ちる", transliteration: "saru mo ki kara ochiru", translation: "Even monkeys fall from trees.", note: "Even experts make mistakes; the humor rests on a monkey failing at its signature skill." },
      { original: "花より団子", transliteration: "hana yori dango", translation: "Dumplings over flowers.", note: "Practical pleasures over aesthetic display; often said lightly about preferring food to blossom viewing." },
      { original: "七転び八起き", transliteration: "nana korobi ya oki", translation: "Fall seven times, rise eight.", note: "A compact encouragement to persist through repeated setbacks; also written 七転八起." },
      { original: "猫の手も借りたい", transliteration: "neko no te mo karitai", translation: "I’d even borrow a cat’s paws.", note: "Used when so busy that help from anyone—even an implausibly unhelpful cat—would be welcome." },
      { original: "出る杭は打たれる", transliteration: "deru kui wa utareru", translation: "The stake that sticks out gets hammered down.", note: "May warn that conspicuous behavior attracts criticism; quotation can endorse conformity or criticize it." }
    ],
    textGenres: [
      "Classical poetry, diaries, tales, war narratives, and theater in historical language",
      "Modern novels, essays, literary magazines, manga, and web fiction",
      "Newspapers, public documents, criticism, academic and technical prose",
      "Television drama, animation, film, games, radio, podcasts, and comedy",
      "Workplace email, service encounters, messaging, social media, and fan communities",
      "Regional-language performance, oral history, dialect archives, and Ryukyuan revitalization media"
    ]
  },
  relationships: {
    overview: cited(
      "Japanese and the Ryukyuan languages belong to Japonic, so Japanese has known relatives. No proposed family link beyond Japonic has gained broad acceptance.\n\nChinese strongly shaped Japanese writing and vocabulary through contact. Korean shares several grammatical patterns and a long contact history, but specialists have not established a close genetic relationship. Similar words or structures alone cannot prove shared ancestry.",
      "glottolog-japanese",
      "wiki-japanese",
      "wiki-ryukyuan"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Japanese speakers choose among styles according to their relationship, role, and setting. A shop worker's speech, a close friend's message, and a novel narrator may use different forms even when they discuss the same event.\n\nTextbook gender labels can miss how people mix, avoid, or parody familiar forms. Fiction often heightens a character's age, region, or social type, so check a line's speaker before copying it. Japan and its diasporas include ethnic, regional, signing, immigrant, mixed-heritage, and queer communities; no single fictional or textbook voice speaks for all of them.",
  resources: [
    { type: "course", title: "Irodori: Japanese for Life in Japan", url: "https://www.irodori.jpf.go.jp/en/", level: "beginner", description: cited("Free, audio-rich practical study from the Japan Foundation, especially strong for life and work scenarios rather than decontextualized grammar drills.", "jpf-irodori") },
    { type: "course", title: "Marugoto e-Learning", url: "https://marugoto.jpf.go.jp/en/e-learning/", level: "all", description: cited("A communicative course ecosystem aligned with Japan Foundation Can-do goals and available in several support languages.", "jpf-irodori") },
    { type: "dictionary", title: "JMdict / EDRDG", url: "https://www.edrdg.org/", level: "all", description: cited("A durable open lexical resource for readings, senses, labels, names, and kanji data; many familiar learner dictionaries use its files.", "jmdict") },
    { type: "corpus", title: "NINJAL Corpus Portal", url: "https://clrd.ninjal.ac.jp/en/corpus-list.html", level: "advanced", description: cited("Searchable evidence across balanced writing, speech, history, dialect, and learner language for moving beyond invented examples.", "ninjal-corpora") },
    { type: "other", title: "OJAD Accent Dictionary", url: "https://www.gavo.t.u-tokyo.ac.jp/ojad/eng/pages/home", level: "intermediate", description: cited("Standard Tokyo accent diagrams and speech tools for words, conjugated verbs, and phrases; best used alongside actual recordings.", "ojad") },
    { type: "other", title: "Discover Discomfort: Learning Enough Japanese to Order Food", url: "https://discoverdiscomfort.com/learning-language-to-order-food/", level: "beginner", description: cited("An account of rehearsing restaurant phrases with a teacher, then using them in Japan. It helps you plan one short-term speaking goal.", "dd-food") },
    { type: "other", title: "Discover Discomfort Japanese Difficulty Guide", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", level: "beginner", description: cited("A learner's view of kana, kanji, and longer study. Treat the ranking as personal guidance rather than a fixed timetable.", "dd-hardest") }
  ],
  relatedLanguages,
  phrases: [
    { original: "こんにちは", transliteration: "konnichiwa", translation: "Hello; good afternoon.", usageNote: "A standard daytime greeting. The final は is the topic particle and is pronounced wa." },
    { original: "おはようございます", transliteration: "ohayō gozaimasu", translation: "Good morning.", usageNote: "Polite. おはよう ohayō is natural with family, friends, and close colleagues; some workplaces use it when starting a shift later in the day." },
    { original: "ありがとうございます", transliteration: "arigatō gozaimasu", translation: "Thank you very much.", usageNote: "Polite in many settings. ありがとう alone is more casual; ありがとうございました thanks someone for a completed action or past service." },
    { original: "すみません", transliteration: "sumimasen", translation: "Excuse me; I’m sorry; thank you for the trouble.", usageNote: "Say this to get attention, make a minor apology, or acknowledge inconvenience someone took on for you." },
    { original: "お願いします", transliteration: "onegaishimasu", translation: "Please; I’d like that; I entrust this to you.", literalMeaning: "I make a request.", usageNote: "Used when ordering, requesting cooperation, or closing an introduction; it is not attached mechanically to every English “please.”" },
    { original: "日本語を勉強しています", transliteration: "nihongo o benkyō shite imasu", translation: "I’m studying Japanese.", usageNote: "Polite neutral statement; the subject “I” is naturally omitted when obvious." },
    { original: "もう一度お願いします", transliteration: "mō ichido onegaishimasu", translation: "One more time, please.", usageNote: "A concise classroom or conversation repair phrase. Add ゆっくり yukkuri to request slowly." },
    { original: "もう少しゆっくり話していただけますか", transliteration: "mō sukoshi yukkuri hanashite itadakemasu ka", translation: "Could you speak a little more slowly?", usageNote: "A polite request. In relaxed conversation, もう少しゆっくりお願いします is simpler." },
    { original: "これはどういう意味ですか", transliteration: "kore wa dō iu imi desu ka", translation: "What does this mean?", literalMeaning: "What kind of meaning is this?", usageNote: "Point to a word or phrase. For a specific word, replace これ kore with この言葉 kono kotoba." },
    { original: "おすすめは何ですか", transliteration: "osusume wa nan desu ka", translation: "What do you recommend?", usageNote: "Ask this at a restaurant or shop; context supplies the kind of recommendation." },
    { original: "大丈夫です", transliteration: "daijōbu desu", translation: "I’m okay; it’s all right; no thank you.", usageNote: "Meaning depends on the preceding question and gesture. It can accept reassurance or politely decline an offer, so listen for context." },
    { original: "ちょっと分かりません", transliteration: "chotto wakarimasen", translation: "I’m not quite sure / I don’t understand.", usageNote: "ちょっと softens the negative. For “I didn’t catch that,” よく聞き取れませんでした is more precise." },
    { original: "失礼します", transliteration: "shitsurei shimasu", translation: "Excuse me; I’m leaving/entering.", literalMeaning: "I will be discourteous.", usageNote: "A formal-social threshold phrase used when entering, interrupting, hanging up, or leaving before others." },
    { original: "またね / また会いましょう", transliteration: "mata ne / mata aimashō", translation: "See you / Let’s meet again.", usageNote: "またね is casual; また会いましょう is polite and warmer or more deliberate." }
  ],
  sources: [
    { id: "dd-hardest", title: "The 4 Hardest Languages to Learn for English Speakers", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", publisher: "Discover Discomfort", accessedAt: "2026-09-27" },
    { id: "dd-food", title: "Learning Just Enough Language to Order Food", url: "https://discoverdiscomfort.com/learning-language-to-order-food/", publisher: "Discover Discomfort", publishedAt: "2022-12-11", updatedAt: "2023-07-01", accessedAt: "2026-09-27" },
    { id: "wiki-japanese", title: "Japanese language", url: "https://en.wikipedia.org/wiki/Japanese_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-dialects", title: "Japanese dialects", url: "https://en.wikipedia.org/wiki/Japanese_dialects", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-pitch-accent", title: "Japanese pitch accent", url: "https://en.wikipedia.org/wiki/Japanese_pitch_accent", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-ryukyuan", title: "Ryukyuan languages", url: "https://en.wikipedia.org/wiki/Ryukyuan_languages", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-japanese", title: "Glottolog 5.3: Japanese", url: "https://glottolog.org/resource/languoid/id/nucl1643", publisher: "Glottolog", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "agency-language-policy", title: "Japanese Language Policy and Education", url: "https://www.bunka.go.jp/english/policy/japanese_language/", publisher: "Agency for Cultural Affairs, Government of Japan", accessedAt: "2026-07-10" },
    { id: "ninjal-endangered", title: "Research on the Conservation of Endangered Languages", url: "https://www.ninjal.ac.jp/english/research/cr-project/project-4/endangered-languages/", publisher: "National Institute for Japanese Language and Linguistics", accessedAt: "2026-09-27" },
    { id: "census-2025", title: "Preliminary Counts of the 2025 Population Census of Japan", url: "https://www.stat.go.jp/english/info/news/20260625.html", publisher: "Statistics Bureau of Japan", publishedAt: "2026-06-25", accessedAt: "2026-09-27" },
    { id: "ninjal-corpora", title: "NINJAL Corpus Portal", url: "https://clrd.ninjal.ac.jp/en/corpus-list.html", publisher: "National Institute for Japanese Language and Linguistics", accessedAt: "2026-07-10" },
    { id: "ninjal-old-japanese", title: "Oxford–NINJAL Corpus of Old Japanese", url: "https://oncoj.ninjal.ac.jp/about_the_project_English.html", publisher: "NINJAL and University of Oxford", accessedAt: "2026-07-10" },
    { id: "ninjal-miyako", title: "Research Report on the Miyako Dialects of Southern Ryukyuan", url: "https://repository.ninjal.ac.jp/record/2538/files/Research_Report_on_Miyako_eng_02.pdf", publisher: "National Institute for Japanese Language and Linguistics", accessedAt: "2026-07-10" },
    { id: "unicode-east-asia", title: "The Unicode Standard, Chapter 18: East Asia", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-18/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "jpf-irodori", title: "Japanese Language Education: Irodori and Marugoto", url: "https://www.jpf.go.jp/e/publish/japanese/", publisher: "The Japan Foundation", accessedAt: "2026-07-10" },
    { id: "jmdict", title: "Electronic Dictionary Research and Development Group: JMdict", url: "https://www.edrdg.org/", publisher: "Electronic Dictionary Research and Development Group", accessedAt: "2026-07-10" },
    { id: "ojad", title: "OJAD: Online Japanese Accent Dictionary", url: "https://www.gavo.t.u-tokyo.ac.jp/ojad/eng/pages/home", publisher: "University of Tokyo", accessedAt: "2026-07-10" },
    { id: "unesco-shimamuni", title: "Safeguarding Mother Tongue and Mother Nature", url: "https://www.unesco.org/en/articles/safeguarding-mother-tongue-and-mother-nature", publisher: "UNESCO", publishedAt: "2024-05-21", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Japanese Language Guide: Scripts, Grammar, Pitch and Register",
    description: "Learn how Japanese speakers use kana and kanji, mora timing, pitch accent, particles, politeness, regional varieties, everyday phrases, and current study resources."
  }
} satisfies LanguageGuide;
