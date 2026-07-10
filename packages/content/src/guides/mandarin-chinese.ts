import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

export const mandarinChineseGuide: LanguageGuide = {
  slug: "mandarin-chinese",
  name: "Mandarin Chinese",
  autonym: "普通话 / 國語",
  status: "published",
  publishedAt: "2026-07-09",
  summary:
    "A reader-first guide to Mandarin Chinese: tones in real speech, characters in two standards, regional voices, expressive grammar, practical phrases, and a route from first conversation to serious literacy.",
  family: "Sino-Tibetan, Sinitic",
  macroRegion: "East Asia",
  primaryScript: "Chinese characters (simplified and traditional), with Hanyu Pinyin or Zhuyin for pronunciation",
  difficultyLabel: "Very demanding",
  learnerHook:
    "Mandarin offers unusually quick access to basic sentence-making, then asks for a long, fascinating apprenticeship in listening, characters, word choice, and the gap between conversation and polished writing.",
  hero: {
    imageAlt: "Chinese characters and tone-marked pinyin introducing Mandarin Chinese.",
    callToActionLabel: "Explore Mandarin Chinese"
  },
  classification:
    "A standardized form of the Mandarin branch of Sinitic, itself conventionally classified within the Sino-Tibetan language family; its core pronunciation is based on Beijing speech, but the standard is not identical to everyday Beijing dialect.",
  speakerCommunity:
    "Mandarin is a local first language across much of northern and southwestern China, a school-taught common language throughout the PRC, Guoyu or Huayu in Taiwan and Southeast Asia, and a family or professional language in diasporas worldwide. 中文 (Zhōngwén, Chinese) may also mean Cantonese, Hokkien, Hakka, or another Sinitic language. Respectful learners follow speakers' own labels rather than assuming nation, ethnicity, script, and mother tongue coincide.",
  facts: [
    { label: "Language family", value: "Sino-Tibetan → Sinitic → Mandarin" },
    { label: "Standard names", value: "普通话 Pǔtōnghuà; 國語 Guóyǔ; 華語 Huáyǔ" },
    { label: "Sound system", value: "Four lexical tones plus a context-sensitive neutral tone" },
    { label: "Writing", value: "Simplified or traditional Chinese characters; pinyin or zhuyin as phonetic aids" },
    { label: "Core word order", value: "Usually subject–verb–object, strongly shaped by topic and information flow" },
    { label: "Learning profile", value: "Light inflection; sustained demands in listening, vocabulary, literacy, and register" }
  ],
  learnerOverview:
    "Mandarin gives direct access to ordinary presents: a grandmother narrating a recipe, a livestream seller improvising, a Taiwanese essay playing with homophones, or friends reducing an opinion to a four-character joke. Beginners make real sentences early because verbs do not change for person and nouns lack grammatical gender. The deeper language organizes events through aspect, result complements, classifiers, and particles such as 了, 吧, and 呢. Characters connect word families and centuries of writing but require repeated encounters in meaningful phrases. Treat pronunciation, conversation, reading, and writing as cooperating tracks, starting with one regional model while staying curious about others.",
  origins: {
    overview: cited(
      "Modern Standard Mandarin grew from northern Sinitic varieties, not directly from one ancient classroom norm. Multilingual dynasties used Literary Chinese for educated writing while officials, travelers, and merchants developed interregional spoken koines called 官话 (guānhuà, 'officials' speech'). Nanjing-associated pronunciation once held wide influence; Beijing gained weight after becoming the Ming and Qing capital. Modern Mandarin thus joins northern sounds and grammar to a written tradition shared far beyond the Mandarin-speaking north.",
      "wiki-mandarin",
      "dd-facts"
    ),
    timeline: [
      {
        period: "Late imperial China",
        event: cited(
          "Regional speech remained diverse while officials used forms of guānhuà for communication across the empire. Beijing court speech became increasingly influential, but no audio-era uniform national pronunciation existed, and Literary Chinese remained the prestigious written medium.",
          "wiki-mandarin"
        )
      },
      {
        period: "Early twentieth century",
        event: cited(
          "Language reformers debated what a national spoken standard should sound like and how closely writing should represent everyday speech. The eventual pronunciation norm centered on Beijing rather than mechanically combining features from many regions; the vernacular-writing movement helped make 白话文 (báihuàwén), writing based more closely on modern speech, central to education and public life.",
          "wiki-mandarin"
        )
      },
      {
        period: "1950s–1980s",
        event: cited(
          "The People's Republic promoted Putonghua, introduced official character simplifications, and adopted Hanyu Pinyin as the principal romanization. Taiwan maintained traditional characters, taught Mandarin as Guoyu, and commonly used Zhuyin symbols for pronunciation. These policies produced two major educational ecosystems with a highly shared linguistic core but visible differences in script, terminology, and preferred readings.",
          "prc-language-law",
          "taiwan-moe",
          "unicode-han"
        )
      },
      {
        period: "Digital present",
        event: cited(
          "Phones and computers usually let users enter characters through pinyin, zhuyin, handwriting, or shape-based methods. Digital communication has not displaced characters; it has accelerated punning, abbreviation, code-switching, and circulation across regional standards. Large searchable corpora now let learners test whether a phrase belongs to news, literature, conversation, academic prose, or internet writing.",
          "unicode-han",
          "ccl-corpus",
          "bcc-corpus"
        )
      }
    ],
    contactHistory: cited(
      "Mandarin vocabulary preserves many contacts: Buddhist translation from Indic languages; Mongolian, Manchu, and Central Asian exchange; and continual traffic among Sinitic languages. Modern technical compounds often circulated through Japanese while using Chinese characters. Newer loans imitate sound, as in 沙发 shāfā 'sofa'; translate meaning, as in 软件 ruǎnjiàn 'software'; build hybrid brand names; or retain Latin letters such as AI. Regions may choose different translations. These layers show speakers adapting Mandarin, not damaging a pure system.",
      "wiki-mandarin",
      "dd-identity"
    ),
    standardization: cited(
      "PRC Putonghua is defined around Beijing-based pronunciation, northern vocabulary, and exemplary modern vernacular grammar; a revised language law took effect in 2026. Taiwan Guoyu shares its core while official dictionaries record local readings, traditional forms, and preferred words. Singapore generally calls the language Huayu. Standard Chinese is therefore pluricentric in practice. Learners can choose one production norm while recognizing 垃圾 lājī/lèsè 'rubbish', 出租车 chūzūchē versus 計程車 jìchéngchē 'taxi', and 软件 ruǎnjiàn versus 軟體 ruǎntǐ 'software'.",
      "prc-language-law",
      "prc-2026-law",
      "taiwan-moe",
      "unicode-han"
    )
  },
  variants: {
    overview: cited(
      "Mandarin can mean a broad branch of northern and southwestern varieties or the school-taught standard. A speaker may use local Mandarin at home and Standard Mandarin formally; elsewhere it is learned alongside Cantonese, Hokkien, Hakka, Tibetan, Uyghur, or another first language. Accent is expected. Ask which features belong to your model, which occur elsewhere, and what social meaning they carry.",
      "wiki-mandarin",
      "dd-identity"
    ),
    items: [
      {
        name: "Mainland Putonghua",
        note: cited(
          "The national classroom and broadcast norm uses simplified characters in most settings and pinyin for phonetic annotation. Everyday speech varies substantially by region. Speakers in northern cities may use more 儿化 érhuà, the r-colored suffix heard in 哪儿 nǎr 'where', while many southern speakers maintain fewer retroflex contrasts or use locally influenced vocabulary. A polished regional accent is still Mandarin; it need not imitate a Beijing street accent to be legitimate.",
          "prc-language-law",
          "dd-facts"
        )
      },
      {
        name: "Beijing speech",
        note: cited(
          "Beijing pronunciation contributed to the standard, but local Beijing speech contains vocabulary, reductions, rhythm, and heavier érhuà that textbooks may not teach. Newsreader Putonghua and a rapid conversation between lifelong Beijingers can sound strikingly different. Learners should use standard recordings for a stable foundation, then add local listening rather than treating the capital's colloquial speech as the only authentic target.",
          "wiki-mandarin",
          "dd-facts"
        )
      },
      {
        name: "Taiwan Mandarin",
        note: cited(
          "Taiwan's standard is usually written with traditional characters and taught with Zhuyin, though pinyin is also encountered. Common speech has its own vocabulary and preferred pronunciations; retroflex initials may be less strongly differentiated in casual styles, and sentence-final particles can carry locally characteristic contours. Mandarin also coexists with Taiwanese Hokkien, Hakka, Indigenous languages, and newer community languages, so borrowing and code-switching are part of ordinary life.",
          "taiwan-moe",
          "taiwan-languages",
          "dd-taiwan"
        )
      },
    ]
  },
  pronunciation: {
    overview: cited(
      "A Mandarin syllable is often taught as an initial consonant plus a final carrying a tone. Pinyin represents a coherent Mandarin system, not English letter values. Contrasts among j/q/x, zh/ch/sh, z/c/s, and unaspirated versus aspirated stops need patient ear training. Record words and sentences because tones change shape in connected speech.",
      "dd-start",
      "dd-facts"
    ),
    script: "Hanyu Pinyin with tone marks; Zhuyin is widely used in Taiwan",
    soundSystem: cited(
      "Standard Mandarin has four lexical tones plus a context-sensitive neutral tone. First is high, second rises, third is usually low, and fourth falls sharply. Written b/p, d/t, g/k, z/c, and zh/ch contrast mainly by aspiration, not English-style voicing. Pinyin j/q/x use a forward tongue position; ü loses its dots after them, so 去 qù does not contain English 'oo'. The -i after z/c/s or zh/ch/sh/r represents special syllabic vowels.",
      "dd-start",
      "wiki-mandarin"
    ),
    prosody: cited(
      "Connected speech reshapes citation tones. Before another third tone, 你好 nǐ hǎo commonly sounds ní hǎo. 不 bù becomes bú before fourth tone, and 一 yī changes with what follows. Neutral syllables shorten: 妈妈 māma is not two full first tones. Focus expands pitch while unstressed material compresses it. Shadow phrases, marking low points, rises, and nearly disappearing syllables instead of pronouncing every character as an isolated dictionary contour.",
      "dd-start",
      "dd-facts"
    ),
    learnerTraps: [
      "Reading pinyin as English spelling instead of learning each initial–final combination by ear",
      "Producing a theatrical fall–rise for every third tone rather than the common low or sandhi forms",
      "Confusing aspiration pairs such as b/p and d/t, especially while concentrating on tone",
      "Flattening neutral-tone syllables or giving particles such as 的 de and 了 le full citation tones",
      "Assuming any northern r-coloring is required for correct Standard Mandarin"
    ],
    sampleWords: [
      {
        original: "妈妈 / 麻 / 马 / 骂",
        transliteration: "māma / má / mǎ / mà",
        translation: "mother / hemp or numb / horse / scold",
        note: "The familiar tone set is useful only as a starting contrast. Notice that 妈妈 has a high first syllable and a light neutral second syllable; natural words, not four isolated shouts, should be the practice unit."
      },
      {
        original: "你好",
        transliteration: "nǐ hǎo → ní hǎo",
        translation: "hello; literally 'you good'",
        note: "The spelling preserves two third tones, while normal pronunciation applies third-tone sandhi. The greeting is correct but can sound formal or marked among people who already know one another."
      },
      {
        original: "不是",
        transliteration: "bù shì → bú shì",
        translation: "is not; no, that's not it",
        note: "不 changes from fourth to rising tone before another fourth tone. In connected speech, the whole two-syllable word should feel like one rhythmic gesture."
      },
      {
        original: "学习 / 學習",
        transliteration: "xuéxí",
        translation: "to study; to learn",
        note: "Both syllables rise, but x is not English x: keep the tongue forward and spread the lips slightly. The word also demonstrates that two characters commonly form one lexical word."
      },
      {
        original: "女儿 / 女兒",
        transliteration: "nǚ'ér",
        translation: "daughter",
        note: "The apostrophe separates syllables and prevents an ambiguous pinyin parse. Maintain rounded lips for ü; the second syllable begins independently rather than becoming the northern suffix -r."
      },
      {
        original: "出租车 / 出租車",
        transliteration: "chūzūchē",
        translation: "taxi (common mainland term)",
        note: "This short word contrasts retroflex ch with dental z and ends in ch again. In Taiwan, 計程車 jìchéngchē is the usual word, making pronunciation and regional vocabulary visible together."
      }
    ]
  },
  writing: {
    overview: cited(
      "Chinese characters, 汉字/漢字 hànzì, represent morphemes and syllables, not whole abstract ideas. Most are phono-semantic compounds: one component hints at meaning and another at inherited pronunciation. Text lacks obligatory word spaces, so readers segment strings into words and constructions. Simplified and traditional are regional standards, not spoken languages. Some correspondences are many-to-one or vocabulary-dependent, so automatic conversion can choose the wrong character or ignore local wording.",
      "unicode-han",
      "dd-facts"
    ),
    primaryScript: "Chinese characters: simplified in mainland China and Singapore; traditional in Taiwan, Hong Kong, and many community contexts",
    romanization: cited(
      "Hanyu Pinyin spells Standard Mandarin pronunciation; careful learning uses tone marks: mā, má, mǎ, mà, ma. Numbered ma3 is convenient plain text but should not replace marked forms. Pinyin follows word-level conventions and supports pronunciation and input rather than replacing characters. Taiwan's Zhuyin symbols, beginning ㄅㄆㄇㄈ, remain central in schools and dictionaries. Zhuyin is optional for most learners but unlocks local materials in Taiwan.",
      "dd-start",
      "taiwan-moe"
    ),
    spellingNorms: cited(
      "Match the script standard to your main community, then learn recognition across both. Conversion is not a reversible cipher: simplified 发 corresponds to 發 in 發現/发现 'discover' and 髮 in 頭髮/头发 'hair'. Learn characters inside words: 会 has several functions, while 学会/學會 xuéhuì means 'learn how to' and 会议/會議 huìyì 'meeting'. Handwriting a core can sharpen components, but reading and typed retrieval usually matter more than calligraphic perfection.",
      "unicode-han",
      "unicode-han"
    ),
    styleNotes: [
      cited(
        "Modern written Chinese ranges from chat that closely mirrors speech to compressed institutional prose. Read a message thread, a feature article, and a government notice side by side before calling any form 'written Chinese'. Formal text favors compact compounds and connectors that may be rare in conversation.",
        "ccl-corpus",
        "bcc-corpus"
      ),
      cited(
        "Punctuation is modern but regionally styled. Simplified publishing commonly uses curved quotation marks, while traditional publishing often uses corner brackets such as 「」. Book and work titles appear inside 《》. Follow the house style of the text you are producing.",
        "unicode-han"
      ),
      cited(
        "Character knowledge is not a single number. Recognizing a character in context, recalling its pronunciation, distinguishing its regional form, handwriting it, and using its words naturally are separate abilities. Track words and encounters rather than chasing a vanity total.",
        "dd-start",
        "dd-facts"
      ),
      cited("Classical allusions remain visible in headlines and idioms. Build a modern reading base first, then study literary grammar when texts you care about demand it.", "dd-proverbs")
    ]
  },
  grammar: {
    overview: cited(
      "Mandarin verbs do not conjugate for person, but grammar lives in word order, particles, aspect, classifiers, and shared context. 我吃 wǒ chī can mean 'I eat', 'I am eating', or 'I will eat' when time is clear. Speakers still choose constructions to present events as completed, experienced, ongoing, caused, or resulting in a new state. Learn meaningful viewpoints rather than English tense substitutions.",
      "wiki-mandarin",
      "dd-start"
    ),
    typologicalProfile: cited(
      "Mandarin is analytic: grammar rarely changes a word's internal form. Clauses are often subject–verb–object, but topic–comment order also matters. Modifiers precede nouns: 我的书 wǒ de shū 'my book', 我昨天买的书 wǒ zuótiān mǎi de shū 'the book I bought yesterday'. Numerals require classifiers, while verbs combine with result or direction elements. Advanced grammar is therefore an architecture of constructions rather than endings.",
      "wiki-mandarin",
      "wiki-mandarin"
    ),
    morphology: cited(
      "Many Mandarin words join two morphemes, such as 文化 wénhuà 'culture'. Compounding is productive: 火车/火車 huǒchē is 'fire vehicle' and 手机/手機 shǒujī 'hand device'. 第 dì- forms ordinals, while -们/-們 -men marks human plurals only in restricted contexts. Reduplication softens or limits an action: 看看 kànkan 'have a look'. Morphology centers on compounds, constructions, and word boundaries rather than inflection tables.",
      "wiki-mandarin",
      "ccl-corpus"
    ),
    syntax: cited(
      "A useful order is subject, time, place, manner, verb, object: 我今天在家认真地看了那本书, 'Today I read that book carefully at home.' Real sentences reorganize old and new information, and omit subjects or objects supplied by context. 把 bǎ places a known object before a phrase describing its fate; 被 bèi introduces a passive. Syntax therefore depends on discourse perspective, not one rigid template.",
      "wiki-mandarin",
      "bcc-corpus"
    ),
    advancedPainPoints: [
      "Choosing among 了, 过/過, 着/著, 在, and unmarked verbs from the speaker's viewpoint rather than English tense",
      "Building result, direction, and potential complements without losing their literal spatial logic",
      "Knowing when a noun phrase is sufficiently definite or affected for 把, and when ordinary order is better",
      "Interpreting omitted subjects and objects in fast conversation and long written argument",
      "Separating near-synonyms by collocation and register rather than relying on one English gloss",
      "Reading formal compression and classical residues without reproducing them unnaturally"
    ],
    topics: [
      {
        title: "Aspect: viewing an event, not locating it on a tense line",
        body: cited(
          "Perfective 了 le often presents an event as bounded; experiential 过/過 guo says it has happened at least once; 着/著 zhe presents a continuing state; and 在 zài can place an action in progress. None maps one-to-one onto English past or present perfect. Compare 我去了北京 Wǒ qù le Běijīng 'I went to Beijing' with 我去过北京 Wǒ qùguo Běijīng 'I have been to Beijing'. Sentence-final 了 can instead signal a new situation: 下雨了 Xiàyǔ le, 'It has started raining / Now it's raining.' Ask what perspective the speaker chooses, not which English tense triggered the particle.",
          "wiki-mandarin",
          "bcc-corpus"
        ),
        example: "我看过那部电影，可是已经忘得差不多了。",
        exampleTranslation: "Wǒ kànguo nà bù diànyǐng, kěshì yǐjīng wàng de chàbuduō le. 'I've seen that film, but by now I've forgotten almost all of it.' 过 marks experience; final 了 marks the changed present state."
      },
      {
        title: "Classifiers: counting through categories",
        body: cited(
          "A number or demonstrative usually reaches a noun through a classifier: 三本书/三本書 sān běn shū 'three volumes of books', 两张票/兩張票 liǎng zhāng piào 'two flat tickets', 那位老师/那位老師 nà wèi lǎoshī 'that teacher' with a respectful human classifier. 个/個 ge is broad and often acceptable in casual speech, but specific classifiers are part of the word's natural company. They can also foreground shape or presentation: 一片云/一片雲 yí piàn yún imagines a patch of cloud. Learn a noun with one common classifier, then notice alternatives as expressive vocabulary rather than a taxonomy exam.",
          "wiki-mandarin",
          "ccl-corpus"
        ),
        example: "麻烦给我两杯茶和一壶热水。",
        exampleTranslation: "Máfan gěi wǒ liǎng bēi chá hé yì hú rèshuǐ. 'Please give me two cups of tea and one pot of hot water.' 杯 classifies cupfuls; 壶/壺 classifies a pot and its contents."
      },
      {
        title: "Result complements: saying what the action achieved",
        body: cited(
          "Mandarin frequently joins a verb to a second element that states the result: 听懂/聽懂 tīngdǒng 'hear and understand', 写完/寫完 xiěwán 'write to completion', 找到 zhǎodào 'search and find', 说清楚/說清楚 shuō qīngchu 'explain clearly'. English often hides this structure in a single verb or implication. The negative uses 没/沒 before the compound for a result that did not occur: 我没听懂/我沒聽懂 Wǒ méi tīngdǒng, 'I didn't understand what I heard.' Potential forms insert 得 or 不—看得见/看得見 kàn de jiàn 'can see', 看不见/看不見 kàn bu jiàn 'cannot see'—and are not interchangeable with every use of 能 néng.",
          "bcc-corpus",
          "wiki-mandarin"
        ),
        example: "字我都看懂了，可是笑话没听明白。",
        exampleTranslation: "Zì wǒ dōu kàndǒng le, kěshì xiàohua méi tīngmíngbai. 'I understood all the written words, but I didn't understand the joke I heard.' The paired complements contrast decoding with grasping the point."
      },
      {
        title: "把: presenting the fate of a known object",
        body: cited(
          "The 把 bǎ construction moves a usually specific, identifiable object before the verb and says what happens to it. 我把钥匙放在桌上了/我把鑰匙放在桌上了 Wǒ bǎ yàoshi fàng zài zhuōshang le means 'I put the keys on the table.' The verb phrase normally needs a result, location, quantity, or other endpoint; bare *我把书看 is incomplete in ordinary usage. 把 is not simply a formal way to mark any object. It is useful when a discourse already contains the object and the new information is its disposal, transformation, movement, or effect.",
          "wiki-mandarin",
          "ccl-corpus"
        ),
        example: "请把声音调小一点，孩子睡着了。",
        exampleTranslation: "Qǐng bǎ shēngyīn tiáo xiǎo yìdiǎn, háizi shuìzháo le. 'Please turn the volume down a little; the child has fallen asleep.' 调小 specifies the resulting lower setting."
      },
      {
        title: "Topic–comment: starting from shared ground",
        body: cited(
          "Mandarin often opens with what the sentence is about and then comments on it: 这本书，我还没看完/這本書，我還沒看完 Zhè běn shū, wǒ hái méi kànwán, 'This book, I haven't finished it yet.' The topic need not be the grammatical subject. In 大象鼻子很长/大象鼻子很長 Dàxiàng bízi hěn cháng, 'Elephants have long trunks', 大象 sets the domain and 鼻子 is the subject of the comment. This structure supports omitted pronouns and explains why mechanically forcing every sentence into an English subject-first frame produces stilted Mandarin.",
          "wiki-mandarin",
          "bcc-corpus"
        ),
        example: "周末我有空，星期一就不一定了。",
        exampleTranslation: "Zhōumò wǒ yǒu kòng, xīngqīyī jiù bù yídìng le. 'As for the weekend, I'm free; Monday is less certain.' The two time topics make the contrast explicit without repeating every element."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Mandarin's reach reflects local continuity in northern and southwestern China, PRC schooling and mobility, policy in Taiwan, multilingualism in Singapore, and migration. A map cannot show whether it is someone's home, school, professional, or recently acquired community language. In Guangzhou, Taipei, Kashgar, Singapore, and Melbourne, the standard enters life through different local languages and identities.",
      "wiki-mandarin",
      "dd-identity"
    ),
    regions: [
      {
        place: "Northern and southwestern China",
        note: cited(
          "Broad Mandarin varieties are indigenous across much of this territory, with substantial internal differences in tones, vocabulary, and grammar. Standard Putonghua is based on northern vocabulary and Beijing pronunciation but should not erase these local systems.",
          "wiki-mandarin"
        )
      },
      {
        place: "The rest of mainland China",
        note: cited(
          "Putonghua functions widely in education, national media, travel, and communication among people with different first languages. Its spread creates opportunities and also debates about the vitality of local Sinitic and minority languages; learners can value common communication without treating linguistic diversity as an obstacle.",
          "prc-language-law",
          "dd-identity"
        )
      },
      {
        place: "Taiwan",
        note: cited(
          "Guoyu is widely used, but it shares public and private space with Taiwanese Hokkien, Hakka, Indigenous languages, Taiwan Sign Language, and immigrant languages. Traditional characters and local vocabulary make Taiwan a distinct Mandarin literacy environment rather than merely a different accent.",
          "taiwan-languages",
          "taiwan-moe",
          "dd-taiwan"
        )
      }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "Mandarin offers quick entry into basic word order but a long route to balanced proficiency. Tones and rapid listening challenge early speech; characters create a second curriculum; advanced vocabulary divides among conversation, formal writing, regions, and classical inheritance. A heritage learner may speak fluently but need literacy, while a Japanese reader may recognize characters yet rebuild pronunciation and syntax. Replace 'easy grammar, impossible writing' with a diagnosis of the next concrete skill.",
      "dd-start"
    ),
    easierAspects: [
      "Verbs do not agree with person and do not require conjugation tables for tense",
      "Nouns have no grammatical gender and generally no case declension",
      "Basic subject–verb–object sentences become productive early",
      "A vast ecosystem of teachers, graded readers, dictionaries, audio, and media supports independent study"
    ],
    hardAspects: [
      "Tone perception and production while also managing unfamiliar consonants and natural rhythm",
      "Segmenting fast speech, where weak syllables and predictable words are heavily reduced",
      "Accumulating enough character–word knowledge for effortless adult reading",
      "Selecting aspect, complements, particles, and omitted arguments from discourse context",
      "Crossing from textbook Mandarin into regional voices and spontaneous interaction"
    ],
    plateauRisks: [
      "Remaining dependent on pinyin or subtitles after basic listening and character recognition should be growing",
      "Memorizing single characters and English glosses without collocations, classifiers, or full sentences",
      "Speaking around missing tones because familiar teachers understand, then struggling with new listeners",
      "Consuming only learner audio and never adapting to interruptions, reductions, accents, or noisy environments",
      "Chasing HSK lists as a complete curriculum while neglecting personally meaningful domains"
    ],
    workload: cited(
      "Build around daily contact, not heroic sessions. Early on, compare short recordings with a teacher and add characters through sentences you already hear. An intermediate week can include conversations, repeated work on one authentic clip, easier extensive reading, and one corrected text. Advanced progress becomes domain-specific: family fluency does not supply finance or history vocabulary. Measure tasks—following an interview, reading a feature, repairing misunderstanding—not only hours or test levels.",
      "dd-start",
      "dd-resources"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Choose one pronunciation and script environment for output without hiding from variation. Learn high-frequency spoken phrases with sound correction, then let literacy and grammar grow together: characters inside words, words inside examples, patterns inside contrasts. At intermediate level, mine a content lane you genuinely follow and revisit the same speakers until comprehension becomes predictive. Ask tutors to diagnose recurring errors, role-play difficult situations, and compare regional phrasing rather than read a textbook aloud.",
      "dd-start",
      "dd-resources"
    ),
    mediaPractice: cited(
      "Use three passes: understand without help, consult Chinese subtitles or a dictionary for expressions blocking the message, then shadow and retell selected lines. Mix clear scripted material with interviews and livestreams. News teaches formal compounds but not friendship; drama teaches interaction but exaggerates genre; songs bend tone to melody. Keep one intensive item under a microscope and several easier items moving for pleasure.",
      "dd-resources",
      "ccl-corpus"
    ),
    dictionariesAndCorpora: cited(
      "Bilingual dictionaries offer candidate meanings; monolingual dictionaries and corpora show how words behave. Pleco combines dictionaries, handwriting, and document lookup. Taiwan's Ministry of Education records Guoyu readings and traditional forms. For advanced usage, compare phrases across BCC or CCL conversation, news, literary, academic, and historical collections. Corpus counts reflect uneven genres, not commandments. Save representative sentences and ask what social setting they evoke.",
      "taiwan-moe",
      "ccl-corpus",
      "bcc-corpus"
    ),
    resources: [
      {
        type: "course",
        title: "Discover Discomfort: How I'd Learn Chinese Again from Scratch",
        url: "https://discoverdiscomfort.com/learn-chinese-from-scratch/",
        level: "beginner",
        description: cited(
          "A pragmatic sequence emphasizing pinyin, coached pronunciation, high-frequency spoken vocabulary, early grammar, and gradual character study. Use it as a plan to customize, not as a promise that one resource fits every community target.",
          "dd-start"
        )
      },
      {
        type: "dictionary",
        title: "Taiwan Ministry of Education language resources",
        url: "https://english.moe.gov.tw/np-33-1.html",
        level: "intermediate",
        description: cited(
          "The official portal links dictionaries for Mandarin pronunciation, meanings, idioms, and character variants. It is especially important for learners using traditional characters or Taiwan Mandarin rather than silently treating a mainland dictionary as universal.",
          "taiwan-moe"
        )
      },
      {
        type: "corpus",
        title: "BLCU BCC Corpus",
        url: "https://bcc.blcu.edu.cn/",
        level: "advanced",
        description: cited(
          "A large searchable collection with news, literature, conversation, modern historical, classical, and mixed-domain channels. Compare the same construction by channel to see why a dictionary-correct phrase may still sound journalistic or old-fashioned.",
          "bcc-corpus"
        )
      }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Mandarin words become memorable when treated as social tools rather than museum labels. Some reveal productive compounds, some package a relationship, and some are ordinary words whose English translation hides a different boundary. Four-character idioms, 成语/成語 chéngyǔ, are one visible part of expression, but not every elegant phrase is a chengyu and not every chengyu belongs in casual speech. The safest path is to collect who said an expression, in what sentence, with what effect. A perfectly translated idiom can still sound pompous, joking, archaic, or regionally unexpected when moved into the wrong mouth.",
      "dd-idioms",
      "dd-proverbs"
    ),
    notableWords: [
      {
        term: "关系 / 關係",
        transliteration: "guānxi",
        meaning: "relationship; connection",
        note: cited(
          "The word ranges from a neutral relationship—国际关系/國際關係 'international relations'—to socially cultivated connections. 没关系/沒關係 méi guānxi means 'it doesn't matter / no problem', showing why a single English gloss never defines the word's life.",
          "ccl-corpus"
        )
      },
      {
        term: "缘分 / 緣分",
        transliteration: "yuánfèn",
        meaning: "the affinity or chance that brings people together",
        note: cited(
          "Often translated as 'fate', but it is usually lighter and relational: 有缘/有緣 yǒuyuán says circumstances have created a meaningful connection. It can be sincere, playful, romantic, or consoling; avoid turning it into a claim that all Chinese speakers hold one metaphysical belief.",
          "bcc-corpus"
        )
      },
      {
        term: "麻烦 / 麻煩",
        transliteration: "máfan",
        meaning: "trouble; troublesome; to trouble someone with a request",
        note: cited(
          "This versatile word handles both inconvenience and politeness. 麻烦你帮我看一下/麻煩你幫我看一下 'Could I trouble you to take a look?' frames a request by acknowledging effort. Tone and relationship decide whether it sounds courteous, warm, or impatient.",
          "ccl-corpus"
        )
      },
      {
        term: "加油",
        transliteration: "jiāyóu",
        meaning: "keep going; you've got this; cheer on",
        note: cited(
          "Literally 'add fuel', 加油 is shouted at a race, sent before an exam, or offered during a hard week. English needs several translations because Mandarin packages encouragement without specifying whether the listener should work harder, stay brave, or simply persist.",
          "bcc-corpus"
        )
      },
      {
        term: "靠谱 / 靠譜",
        transliteration: "kàopǔ",
        meaning: "reliable; plausible; sound",
        note: cited(
          "A colloquial evaluation for people, plans, information, or estimates: 这个办法靠谱吗/這個辦法靠譜嗎? 'Is this plan sound?' It is common in mainland usage; Taiwan speakers may choose 可靠 kěkào or other phrasing, another reminder that high-frequency colloquial vocabulary is regional.",
          "bcc-corpus"
        )
      },
      {
        term: "不好意思",
        transliteration: "bù hǎoyìsi",
        meaning: "sorry; excuse me; embarrassed",
        note: cited(
          "This phrase can open a request, acknowledge a minor imposition, attract attention, or describe feeling self-conscious. It is usually lighter than a full apology with 对不起/對不起 duìbuqǐ. Learning the difference makes everyday interaction more precise than memorizing one universal 'sorry'.",
          "ccl-corpus"
        )
      },
    ],
    loanwordLayers: cited(
      "Loanwords rarely announce one clean origin. 咖啡 kāfēi 'coffee' and 沙发/沙發 shāfā 'sofa' approximate sound; 电脑/電腦 diànnǎo 'computer' and 热狗/熱狗 règǒu 'hot dog' translate meaning; 可口可乐/可口可樂 Kěkǒukělè makes Coca-Cola sound like an auspicious Chinese phrase while echoing the brand. Twentieth-century compounds connected with politics, society, and science often circulated through Japanese, where writers had coined new meanings with Chinese characters, allowing the forms to be read naturally in Chinese. Contemporary speech also absorbs English initials and internet forms, but acceptance differs by profession, age, region, and editorial policy. Ask not only 'Is this a loan?' but 'Through which route, in which form, and who uses it now?'",
      "wiki-mandarin",
      "ccl-corpus"
    ),
    idioms: [
      {
        original: "说曹操，曹操到 / 說曹操，曹操到",
        transliteration: "shuō Cáo Cāo, Cáo Cāo dào",
        translation: "Speak of Cao Cao, and Cao Cao arrives—'speak of the devil.'",
        note: "A lively conversational saying when the person just mentioned appears. It alludes to the Three Kingdoms figure Cao Cao; use it playfully, not as a literal judgment that the arriving person is devilish."
      },
      {
        original: "半途而废 / 半途而廢",
        transliteration: "bàntú'érfèi",
        translation: "Give up halfway; abandon something before completion.",
        note: "A common four-character idiom that works in advice and criticism. Because it evaluates perseverance, directing it at someone can sound moralizing; it is safer when describing one's own temptation or a general pattern."
      },
      {
        original: "与众不同 / 與眾不同",
        transliteration: "yǔzhòngbùtóng",
        translation: "Different from the crowd; distinctive.",
        note: "This can be complimentary, neutral, or gently ironic depending on the noun and tone. In polished description it is ordinary; stacking it with several other chengyu can make casual conversation sound like promotional copy."
      },
      {
        original: "塞翁失马，焉知非福 / 塞翁失馬，焉知非福",
        transliteration: "Sàiwēng shī mǎ, yān zhī fēi fú",
        translation: "When the frontier old man lost his horse, who knew it was not a blessing? A setback may turn fortunate.",
        note: "This proverb comes from a story in which apparent luck repeatedly reverses. It fits reflection after an outcome changes; offering it immediately after someone suffers a serious loss can feel glib rather than wise."
      },
    ],
    textGenres: [
      "Private chat and social posts, rich in omission, particles, emoji, homophones, and regional slang",
      "Reported features and essays, which bridge conversational narrative and formal written vocabulary",
      "News, policy, and institutional prose, dense with compact compounds and parallel structure",
      "Subtitled drama, variety shows, interviews, livestreams, and podcasts with different degrees of scripting",
      "Modern fiction and creative nonfiction, ranging from speech-like narration to literary compression"
    ]
  },
  relationships: {
    overview: cited(
      "Mandarin sits inside a Sinitic continuum whose branches share historical ancestry and a writing tradition but are not merely accents of one spoken language. Mandarin and Cantonese may write closely related formal sentences while pronouncing them very differently and using distinct everyday grammar and vocabulary. Japanese, Korean, and Vietnamese are not genetically Chinese languages, yet centuries of contact brought large layers of vocabulary derived from Chinese and, historically, Chinese-character literacy. Similar-looking words can be a powerful bridge, but pronunciation and grammar must be learned on their own terms.",
      "wiki-mandarin",
      "dd-identity"
    ),
    languages: [
      {
        name: "Cantonese",
        relationship: "A fellow Sinitic language, not a dialect of Standard Mandarin in the ordinary mutual-intelligibility sense",
        explanation: cited(
          "Cantonese and Mandarin share much inherited vocabulary and can participate in a common formal written standard, but everyday speech differs substantially in sound system, words, and constructions. Calling Cantonese 'Chinese' is normal in many communities; context determines whether 中文 means Cantonese, Mandarin, written Chinese, or a broader identity.",
          "dd-identity"
        )
      },
      {
        name: "Taiwanese Hokkien",
        relationship: "A Southern Min Sinitic language in sustained contact with Taiwan Mandarin",
        explanation: cited(
          "Hokkien and Mandarin are historically related but not mutually intelligible. Taiwan speech, media, and daily life show borrowing and code-switching in both directions. Learning Mandarin does not make Hokkien a local accent; even a modest Hokkien effort opens a separate sound and vocabulary system.",
          "dd-taiwan",
          "taiwan-languages"
        )
      },
      {
        name: "Japanese",
        relationship: "Unrelated language with extensive Sino-Japanese vocabulary and shared character history",
        explanation: cited(
          "Kanji knowledge gives readers many visual and semantic clues, while modern technical terms have also traveled from Japanese into Chinese. But Japanese morphology, word order, and character readings differ radically. Familiar-looking compounds can help or mislead, so transfer should always be checked in actual sentences.",
          "unicode-han"
        )
      },
    ]
  },
  culturalNotes:
    "Mandarin is not a passport into one 'Chinese culture.' Its speakers have different nationalities, ethnicities, home languages, and relationships to the standard. Names carry history: 普通话 emphasizes common speech, 國語 national language, and 華語 a broader Chinese cultural frame. Follow your interlocutor's term. Do not treat appearance as a language test or ask where someone is 'really' from. Observe real relationships—who uses titles, when friends tease, and how refusals are repaired—rather than memorizing national personality traits.",
  resources: [
    {
      type: "course",
      title: "Discover Discomfort: How I'd Learn Chinese Again from Scratch",
      url: "https://discoverdiscomfort.com/learn-chinese-from-scratch/",
      level: "beginner",
      description: cited(
        "A field-tested starting sequence with unusual emphasis on getting pronunciation corrected before a large vocabulary hides weak foundations. Its strongest advice is to connect pinyin, useful words, grammar, characters, and tutoring instead of waiting to finish one track.",
        "dd-start"
      )
    },
    {
      type: "other",
      title: "Discover Discomfort: Being and Speaking Chinese",
      url: "https://discoverdiscomfort.com/being-and-speaking-chinese/",
      level: "all",
      description: cited(
        "A valuable essay on why 'Chinese,' Mandarin, Cantonese, nationality, ancestry, and identity do not map neatly onto one another. Read it early enough that respectful language choices become part of proficiency rather than an advanced afterthought.",
        "dd-identity"
      )
    },
    {
      type: "other",
      title: "Discover Discomfort: Essential Chinese Idioms for Conversation",
      url: "https://discoverdiscomfort.com/essential-chinese-idioms-for-conversation/",
      level: "intermediate",
      description: cited(
        "A concise, audio-supported set selected for actual usefulness rather than obscurity. Learn the surrounding sentence and pragmatic caution with each expression; reciting isolated chengyu is not the same as sounding natural.",
        "dd-idioms"
      )
    },
    {
      type: "other",
      title: "Discover Discomfort: Chinese Proverbs That Teach You About China",
      url: "https://discoverdiscomfort.com/chinese-proverbs-learning-chinese/",
      level: "intermediate",
      description: cited(
        "Proverbs with audio and cultural explanation, useful for reading allusions and discussing the assumptions behind a saying. Test frequency and register with speakers before turning every memorable proverb into conversational advice.",
        "dd-proverbs"
      )
    },
    {
      type: "app",
      title: "Pleco Chinese Dictionary",
      url: "https://www.pleco.com/",
      level: "all",
      description:
        "A mobile dictionary platform with handwriting, optical lookup, audio, flashcards, document reading, and optional specialist dictionaries. Configure it for your script standard and learn what each installed dictionary is designed to cover."
    },
    {
      type: "dictionary",
      title: "Taiwan Ministry of Education dictionaries",
      url: "https://english.moe.gov.tw/np-33-1.html",
      level: "intermediate",
      description: cited(
        "Official traditional-character references for Taiwan Mandarin, including concise and comprehensive dictionaries. Compare them with a mainland-oriented dictionary to discover genuine regional alternatives rather than assuming one is a typo.",
        "taiwan-moe"
      )
    }
  ],
  relatedLanguages: [
    {
      name: "Cantonese",
      relationship: "A fellow Sinitic language, not a dialect of Standard Mandarin in the ordinary mutual-intelligibility sense",
      explanation: cited(
        "Cantonese and Mandarin share much inherited vocabulary and can participate in a common formal written standard, but everyday speech differs substantially in sound system, words, and constructions. Calling Cantonese 'Chinese' is normal in many communities; context determines what the term means.",
        "dd-identity"
      )
    },
    {
      name: "Taiwanese Hokkien",
      relationship: "A Southern Min Sinitic language in sustained contact with Taiwan Mandarin",
      explanation: cited(
        "Hokkien and Mandarin are historically related but not mutually intelligible. Taiwan speech and media show borrowing and code-switching in both directions, but learning Mandarin does not make Hokkien a local accent.",
        "dd-taiwan",
        "taiwan-languages"
      )
    },
    {
      name: "Japanese",
      relationship: "Unrelated language with extensive Sino-Japanese vocabulary and shared character history",
      explanation: cited(
        "Kanji gives readers visual and semantic clues, while grammar and pronunciation remain very different. Similar-looking compounds must be checked in context rather than assumed to be interchangeable.",
        "unicode-han"
      )
    },
  ],
  phrases: [
    {
      original: "你好。",
      transliteration: "Nǐ hǎo.",
      translation: "Hello.",
      literalMeaning: "You good.",
      usageNote: "A safe first greeting, though colleagues and friends often move directly to a name, question, or situational remark. Pronounce the two written third tones with sandhi: ní hǎo."
    },
    {
      original: "不好意思，请问一下…… / 不好意思，請問一下……",
      transliteration: "Bù hǎoyìsi, qǐngwèn yíxià…",
      translation: "Excuse me, may I ask…?",
      literalMeaning: "I'm embarrassed / excuse me; please ask briefly…",
      usageNote: "A natural way to approach someone or preface a small request. 一下 softens the action by presenting it as limited, not necessarily literally brief."
    },
    {
      original: "这个怎么说？ / 這個怎麼說？",
      transliteration: "Zhège zěnme shuō?",
      translation: "How do you say this?",
      literalMeaning: "This, how say?",
      usageNote: "Point or supply the concept. Add 中文 zhōngwén 'in Chinese' when the language is not already obvious."
    },
    {
      original: "我没听懂，可以再说一遍吗？ / 我沒聽懂，可以再說一遍嗎？",
      transliteration: "Wǒ méi tīngdǒng, kěyǐ zài shuō yí biàn ma?",
      translation: "I didn't understand; could you say it once more?",
      literalMeaning: "I did not hear-understand; can again say one time?",
      usageNote: "Better than pretending. 遍 is a classifier for an action performed from beginning to end."
    },
    {
      original: "麻烦说慢一点。 / 麻煩說慢一點。",
      transliteration: "Máfan shuō màn yìdiǎn.",
      translation: "Could you speak a little more slowly?",
      literalMeaning: "Trouble [you to] speak slow a little.",
      usageNote: "Polite and compact. Ask for slower speech before asking for louder speech; volume rarely solves segmentation."
    },
    {
      original: "你觉得怎么样？ / 你覺得怎麼樣？",
      transliteration: "Nǐ juéde zěnmeyàng?",
      translation: "What do you think? / How do you find it?",
      literalMeaning: "You feel how?",
      usageNote: "An everyday invitation for an opinion about a plan, object, experience, or person; context supplies the topic."
    },
    {
      original: "都可以，你决定吧。 / 都可以，你決定吧。",
      transliteration: "Dōu kěyǐ, nǐ juédìng ba.",
      translation: "Either is fine; you decide.",
      literalMeaning: "All can; you decide [suggestive particle].",
      usageNote: "More helpful than a bare 随便 suíbiàn when you genuinely have no preference. 吧 softens the handover."
    },
    {
      original: "我先走了，回头见。 / 我先走了，回頭見。",
      transliteration: "Wǒ xiān zǒu le, huítóu jiàn.",
      translation: "I'll head off first; see you later.",
      literalMeaning: "I first leave now; later see.",
      usageNote: "A socially natural departure. 先 acknowledges that others remain, and 了 marks the new situation of leaving."
    },
    {
      original: "辛苦了。",
      transliteration: "Xīnkǔ le.",
      translation: "Thanks for your hard work / That was a lot of work.",
      literalMeaning: "[You] have undergone hardship.",
      usageNote: "Acknowledges effort after work, travel, organizing, or helping. The best English translation changes with the relationship and event."
    },
    {
      original: "没关系，慢慢来。 / 沒關係，慢慢來。",
      transliteration: "Méi guānxi, mànmàn lái.",
      translation: "No problem; take your time.",
      literalMeaning: "No relationship/matter; come slowly.",
      usageNote: "Reassuring after a minor apology or difficulty. 慢慢来 means proceed without rushing, not literally approach at low speed."
    }
  ],
  sources: [
    {
      id: "dd-start",
      title: "How I'd Learn Chinese Again from Scratch — Complete Guide",
      url: "https://discoverdiscomfort.com/learn-chinese-from-scratch/",
      publisher: "Discover Discomfort",
      publishedAt: "2020-02-20",
      updatedAt: "2023-09-08",
      accessedAt: "2026-07-10"
    },
    {
      id: "dd-facts",
      title: "20+ Chinese Language Facts — Fun and Sometimes Surprising!",
      url: "https://discoverdiscomfort.com/chinese-language-facts/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-10"
    },
    {
      id: "dd-identity",
      title: "Being and Speaking Chinese",
      url: "https://discoverdiscomfort.com/being-and-speaking-chinese/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-10"
    },
    {
      id: "dd-idioms",
      title: "15 Essential Chinese Idioms for Conversation (With Audio)",
      url: "https://discoverdiscomfort.com/essential-chinese-idioms-for-conversation/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-10"
    },
    {
      id: "dd-proverbs",
      title: "Chinese Proverbs That Teach You About China — With Audio",
      url: "https://discoverdiscomfort.com/chinese-proverbs-learning-chinese/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-10"
    },
    {
      id: "dd-resources",
      title: "Only the BEST Resources to Learn Chinese Online",
      url: "https://discoverdiscomfort.com/learn-chinese-online-best-resources/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-10"
    },
    {
      id: "dd-taiwan",
      title: "Living in Taiwan: A Complete Guide for Culture Nomads",
      url: "https://discoverdiscomfort.com/guide-to-living-in-taiwan/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-10"
    },
    {
      id: "wiki-mandarin",
      title: "Mandarin Chinese",
      url: "https://en.wikipedia.org/wiki/Mandarin_Chinese",
      publisher: "Wikipedia",
      accessedAt: "2026-07-10"
    },
    {
      id: "prc-language-law",
      title: "Law on the Standard Spoken and Written Chinese Language of the People's Republic of China",
      url: "https://en.moe.gov.cn/documents/laws_policies/201506/t20150626_191388.html",
      publisher: "Ministry of Education of the People's Republic of China",
      publishedAt: "2000-10-31",
      accessedAt: "2026-07-10"
    },
    {
      id: "prc-2026-law",
      title: "China unveils revised law on standard Chinese language",
      url: "https://en.moe.gov.cn/news/press_releases/202512/t20251231_1425379.html",
      publisher: "Ministry of Education of the People's Republic of China",
      publishedAt: "2025-12-29",
      accessedAt: "2026-07-10"
    },
    {
      id: "taiwan-moe",
      title: "Language Resources",
      url: "https://english.moe.gov.tw/np-33-1.html",
      publisher: "Ministry of Education, Republic of China (Taiwan)",
      accessedAt: "2026-07-10"
    },
    {
      id: "taiwan-languages",
      title: "Development of National Languages Act",
      url: "https://www.moc.gov.tw/en/cp.aspx?n=412",
      publisher: "Ministry of Culture, Republic of China (Taiwan)",
      accessedAt: "2026-07-10"
    },
    {
      id: "unicode-han",
      title: "The Unicode Standard, Chapter 18: East Asia",
      url: "https://unicode.org/versions/Unicode16.0.0/core-spec/chapter-18/",
      publisher: "Unicode Consortium",
      accessedAt: "2026-07-10"
    },
    {
      id: "ccl-corpus",
      title: "CCL Corpus Statistics and Documentation",
      url: "https://corpus.pku.edu.cn/statistics/ccl_corpus_statistics.html",
      publisher: "Center for Chinese Linguistics, Peking University",
      updatedAt: "2026-04-16",
      accessedAt: "2026-07-10"
    },
    {
      id: "bcc-corpus",
      title: "BCC Chinese Corpus — User Guide",
      url: "https://bcc.blcu.edu.cn/help.html",
      publisher: "Beijing Language and Culture University",
      updatedAt: "2026-05-21",
      accessedAt: "2026-07-10"
    }
  ],
  seo: {
    title: "Mandarin Chinese: An Engaging Guide to Tones, Characters, Grammar, and Real Use",
    description:
      "Explore Mandarin Chinese through real examples: tones and pinyin, simplified and traditional characters, expressive grammar, regional varieties, useful phrases, idioms, learning strategy, and carefully selected modern sources."
  }
};
