import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

export const mandarinChineseGuide: LanguageGuide = {
  slug: "mandarin-chinese",
  name: "Mandarin Chinese",
  autonym: "普通话 / 國語",
  status: "published",
  publishedAt: "2026-07-09",
  summary:
    "A practical guide to Standard Mandarin: how tones work in real speech, why Mainland and Taiwan usage differ, how characters fit together, and what learners need beyond beginner conversation.",
  family: "Sino-Tibetan, Sinitic",
  macroRegion: "East Asia",
  primaryScript: "Chinese characters (simplified and traditional), with Hanyu Pinyin or Zhuyin for pronunciation",
  difficultyLabel: "Very demanding",
  learnerHook:
    "You can make useful Mandarin sentences surprisingly early. The longer journey lies in hearing tones at speed, reading characters comfortably, and choosing words that suit the place and situation.",
  hero: {
    imageAlt: "Chinese characters and tone-marked pinyin introducing Mandarin Chinese.",
    callToActionLabel: "Explore Mandarin Chinese"
  },
  classification:
    "Standard Mandarin is the school-taught form of the much larger Mandarin branch of Sinitic. Linguists usually place Sinitic within the Sino-Tibetan family. The standard draws its pronunciation from Beijing speech, but it isn't the same thing as everyday Beijing dialect.",
  speakerCommunity:
    "People grow up speaking Mandarin varieties across much of northern and southwestern China. Millions more learn the standard at school or use it at work, including speakers whose home language is Cantonese, Hokkien, Hakka, Tibetan, Uyghur, or something else. 中文 Zhōngwén means 'Chinese', so ask what a speaker means instead of assuming it always means Mandarin.",
  facts: [
    { label: "Language family", value: "Sino-Tibetan → Sinitic → Mandarin" },
    { label: "Standard names", value: "普通话 Pǔtōnghuà; 國語 Guóyǔ; 華語 Huáyǔ" },
    { label: "Sound system", value: "Four lexical tones plus a context-sensitive neutral tone" },
    { label: "Writing", value: "Simplified or traditional Chinese characters; pinyin or zhuyin as phonetic aids" },
    { label: "Core word order", value: "Usually subject–verb–object, strongly shaped by topic and information flow" },
    { label: "Learning profile", value: "Light inflection; sustained demands in listening, vocabulary, literacy, and register" }
  ],
  learnerOverview:
    "Mandarin can take you from a family recipe to a livestream, a Taiwanese podcast, or a joke built around similar-sounding words. Beginners can form real sentences early because verbs don't change for person and nouns have no grammatical gender. The language becomes richer through tones, aspect, result complements, classifiers, sentence particles, and characters, so learn those systems together rather than treating them as separate courses.",
  origins: {
    overview: cited(
      "Modern Standard Mandarin grew from northern Sinitic speech, but no single ancient dialect simply turned into today's classroom standard. Officials once used interregional forms called 官话 guānhuà, or 'officials' speech', while educated writers used Literary Chinese across many spoken-language boundaries. Nanjing pronunciation held influence for centuries before Beijing speech became the main model for the modern standard.",
      "wiki-mandarin",
      "dd-facts"
    ),
    timeline: [
      {
        period: "Late imperial China",
        event: cited(
          "Officials used forms of guānhuà to communicate across regions whose everyday speech differed greatly. Beijing court speech gained prestige over time, but the empire never had one uniformly spoken national language. Literary Chinese remained the main high-status written form.",
          "wiki-mandarin"
        )
      },
      {
        period: "Early twentieth century",
        event: cited(
          "Reformers argued over what a national spoken language should sound like and how closely writing should follow speech. An early hybrid pronunciation gave way to a Beijing-centered norm. The vernacular-writing movement also pushed 白话文 báihuàwén, writing closer to modern speech, into schools and public life.",
          "wiki-mandarin"
        )
      },
      {
        period: "1950s–1980s",
        event: cited(
          "The People's Republic promoted Putonghua, simplified many character forms, and adopted Hanyu Pinyin as its main romanization. Taiwan taught Mandarin as Guoyu, kept traditional characters, and used Zhuyin symbols to show pronunciation. Learners now meet two closely related systems with visible differences in script, vocabulary, and some preferred readings.",
          "prc-language-law",
          "taiwan-moe",
          "unicode-han"
        )
      },
      {
        period: "Digital present",
        event: cited(
          "People now type characters through pinyin, zhuyin, handwriting, or shape-based input methods. Digital communication has made puns, abbreviations, and regional slang easier to circulate rather than pushing characters aside. Searchable corpora also let learners check whether a phrase sounds at home in conversation, news, literature, or academic writing.",
          "unicode-han",
          "ccl-corpus",
          "bcc-corpus"
        )
      }
    ],
    contactHistory: cited(
      "Mandarin carries traces of Buddhist translation, contact with Mongolian and Manchu, and constant exchange among Sinitic languages. Some modern technical words came through Japanese but used familiar Chinese characters, while newer loans may copy a sound, translate a meaning, or keep Latin letters such as AI. Mainland China, Taiwan, and Singapore don't always choose the same new word, which makes borrowing part of regional style as well as history.",
      "wiki-mandarin",
      "dd-identity"
    ),
    standardization: cited(
      "Mainland Putonghua uses Beijing-based pronunciation, northern vocabulary, and modern vernacular writing as its official reference points. Taiwan Guoyu shares that core but keeps traditional characters and its own dictionary readings and preferred words, while Singapore commonly calls the standard Huayu. Choose one model for speaking and writing, then learn to recognize pairs such as 出租车 chūzūchē and 計程車 jìchéngchē for 'taxi'.",
      "prc-language-law",
      "prc-2026-law",
      "taiwan-moe",
      "unicode-han"
    )
  },
  variants: {
    overview: cited(
      "The word Mandarin can name a huge branch of local varieties or the school-taught standard. Someone may speak a local Mandarin at home and Putonghua in formal settings, while another person learns the standard alongside Cantonese, Hokkien, Hakka, Tibetan, or Uyghur. This guide anchors examples in Standard Mandarin and labels important Mainland and Taiwan differences.",
      "wiki-mandarin",
      "dd-identity"
    ),
    items: [
      {
        name: "Mainland Putonghua",
        note: cited(
          "Mainland schools teach Putonghua with simplified characters and Hanyu Pinyin. Everyday accents still vary widely: northern speakers may use more 儿化 érhuà, while many southern speakers use fewer retroflex sounds or local vocabulary. A clear regional accent can still be excellent Mandarin; it doesn't need to copy Beijing street speech.",
          "prc-language-law",
          "dd-facts"
        )
      },
      {
        name: "Beijing speech",
        note: cited(
          "Beijing pronunciation shaped the standard, but local Beijing speech uses its own slang, reductions, rhythm, and often heavier érhuà. A newsreader and two lifelong Beijingers chatting quickly can sound surprisingly different. Start with standard recordings, then add local speech when it matches your interests.",
          "wiki-mandarin",
          "dd-facts"
        )
      },
      {
        name: "Taiwan Mandarin",
        note: cited(
          "Taiwan usually writes Guoyu with traditional characters and teaches pronunciation through Zhuyin, though learners also see pinyin. Everyday Taiwan Mandarin has its own words, preferred readings, and accent patterns, including less strongly retroflex speech for many speakers. It also lives beside Taiwanese Hokkien, Hakka, Indigenous languages, and newer community languages.",
          "taiwan-moe",
          "taiwan-languages",
          "dd-taiwan"
        )
      },
    ]
  },
  pronunciation: {
    overview: cited(
      "Most Mandarin syllables combine an opening consonant, a final, and a tone. Pinyin gives you a consistent map of that system, but familiar letters don't keep their English sounds. Train contrasts such as j/q/x, zh/ch/sh, and z/c/s inside whole words and sentences, because natural speech changes the neat contours shown in tone charts.",
      "dd-start",
      "dd-facts"
    ),
    script: "Hanyu Pinyin with tone marks; Zhuyin is widely used in Taiwan",
    soundSystem: cited(
      "Standard Mandarin has four main tones plus a light, context-sensitive neutral tone. The first stays high, the second rises, the third is usually low in real speech, and the fourth falls sharply. Pinyin pairs such as b/p and d/t mainly contrast a small or strong puff of air, while j/q/x use a tongue position that English doesn't package in the same way.",
      "dd-start",
      "wiki-mandarin"
    ),
    prosody: cited(
      "Tones change shape when words meet. Two written third tones in 你好 nǐ hǎo normally sound like ní hǎo, while 不 bù becomes bú before a fourth tone and 一 yī changes according to what follows. Shadow whole phrases so you hear low points, shortened neutral syllables, and emphasized words instead of giving every character a full dictionary tone.",
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
      "Chinese characters, 汉字/漢字 hànzì, usually represent one syllable and one meaningful part of a word. Most combine a component that hints at meaning with another that hints at pronunciation, so they aren't simply pictures or abstract ideas. Simplified and traditional forms belong to different writing standards, not different spoken languages, and automatic conversion can fail when several traditional characters share one simplified form.",
      "unicode-han",
      "dd-facts"
    ),
    primaryScript: "Chinese characters: simplified in mainland China and Singapore; traditional in Taiwan, Hong Kong, and many community contexts",
    romanization: cited(
      "Hanyu Pinyin spells Standard Mandarin and marks tones as mā, má, mǎ, mà, and ma. It helps with pronunciation and keyboard input, but it works best beside characters rather than as a permanent replacement for them. Taiwan schools and dictionaries use Zhuyin symbols such as ㄅㄆㄇㄈ, so learning them is worthwhile if Taiwan is your focus.",
      "dd-start",
      "taiwan-moe"
    ),
    spellingNorms: cited(
      "Write the character set used by your main community, then build recognition in the other set. Simplified 发 can correspond to 發 in 發現/发现 'discover' or 髮 in 頭髮/头发 'hair', so conversion isn't a reversible code. Learn characters inside words such as 学会/學會 xuéhuì 'learn how to' and 会议/會議 huìyì 'meeting' instead of collecting isolated meanings.",
      "unicode-han",
      "unicode-han"
    ),
    styleNotes: [
      cited(
        "Modern writing ranges from speech-like chat to tightly compressed institutional prose. Compare a message thread, a feature article, and a government notice before deciding what 'written Chinese' sounds like. Formal texts favor compact compounds and connectors that friends may rarely say aloud.",
        "ccl-corpus",
        "bcc-corpus"
      ),
      cited(
        "Punctuation is modern but regionally styled. Simplified publishing commonly uses curved quotation marks, while traditional publishing often uses corner brackets such as 「」 and puts book titles inside 《》. Follow the house style of the text you are producing.",
        "unicode-han"
      ),
      cited(
        "Knowing a character isn't one yes-or-no skill. You may recognize it in context but forget its sound, traditional form, or natural compounds. Track useful words and repeated encounters instead of chasing an impressive character total.",
        "dd-start",
        "dd-facts"
      ),
      cited("Classical allusions remain visible in headlines and idioms. Build a modern reading base first, then study literary grammar when texts you care about demand it.", "dd-proverbs")
    ]
  },
  grammar: {
    overview: cited(
      "Mandarin verbs don't change for person, but that doesn't make the grammar empty. Speakers use word order, particles, aspect, classifiers, and context to show how an event unfolds. 我吃 wǒ chī can mean 'I eat', 'I'm eating', or 'I'll eat' when the surrounding conversation supplies the time.",
      "wiki-mandarin",
      "dd-start"
    ),
    typologicalProfile: cited(
      "Mandarin is analytic, which means words rarely change their internal form to show grammar. Clauses often follow subject–verb–object order, but speakers also begin with a topic and then comment on it. Modifiers come before nouns, as in 我的书 wǒ de shū 'my book' and 我昨天买的书 wǒ zuótiān mǎi de shū 'the book I bought yesterday'.",
      "wiki-mandarin",
      "wiki-mandarin"
    ),
    morphology: cited(
      "Mandarin builds many words by joining small meaningful pieces. 火车/火車 huǒchē is literally 'fire vehicle', while 手机/手機 shǒujī is a 'hand device'. Other small patterns matter too: 第 dì- forms ordinals, -们/-們 -men marks some human plurals, and reduplication makes 看看 kànkan mean 'have a look'.",
      "wiki-mandarin",
      "ccl-corpus"
    ),
    syntax: cited(
      "A useful beginner order is subject, time, place, manner, verb, and object. Real speakers move information around and leave out subjects or objects that everyone already understands. Constructions such as 把 bǎ and 被 bèi help speakers focus on what happens to an object, so Mandarin word order responds to the conversation rather than one rigid template.",
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
          "Mandarin aspect shows how a speaker views an event rather than simply placing it in past, present, or future. 了 le can present an action as complete, 过/過 guo marks past experience, 着/著 zhe shows a continuing state, and 在 zài can put an action in progress. Compare 我去了北京 Wǒ qù le Běijīng 'I went to Beijing' with 我去过北京 Wǒ qùguo Běijīng 'I have been to Beijing', while sentence-final 了 in 下雨了 Xiàyǔ le announces that it has started raining.",
          "wiki-mandarin",
          "bcc-corpus"
        ),
        example: "我看过那部电影，可是已经忘得差不多了。",
        exampleTranslation: "Wǒ kànguo nà bù diànyǐng, kěshì yǐjīng wàng de chàbuduō le. 'I've seen that film, but by now I've forgotten almost all of it.' 过 marks experience; final 了 marks the changed present state."
      },
      {
        title: "Classifiers: counting through categories",
        body: cited(
          "Numbers and demonstratives usually connect to a noun through a classifier: 三本书/三本書 sān běn shū is 'three books', while 两张票/兩張票 liǎng zhāng piào is 'two tickets'. 个/個 ge works broadly in casual speech, but specific choices can show shape, presentation, or respect, as 位 wèi does for a person. Learn each new noun with one common classifier, then notice alternatives without turning them into a taxonomy exam.",
          "wiki-mandarin",
          "ccl-corpus"
        ),
        example: "麻烦给我两杯茶和一壶热水。",
        exampleTranslation: "Máfan gěi wǒ liǎng bēi chá hé yì hú rèshuǐ. 'Please give me two cups of tea and one pot of hot water.' 杯 classifies cupfuls; 壶/壺 classifies a pot and its contents."
      },
      {
        title: "Result complements: saying what the action achieved",
        body: cited(
          "Mandarin often joins a verb to a second element that names its result. 听懂/聽懂 tīngdǒng means 'hear and understand', 写完/寫完 xiěwán means 'write to completion', and 找到 zhǎodào means 'search and find'. Put 没/沒 before the compound when the result didn't happen, or insert 得 and 不 in forms such as 看得见/看得見 kàn de jiàn 'can see' and 看不见/看不見 kàn bu jiàn 'can't see'.",
          "bcc-corpus",
          "wiki-mandarin"
        ),
        example: "字我都看懂了，可是笑话没听明白。",
        exampleTranslation: "Zì wǒ dōu kàndǒng le, kěshì xiàohua méi tīngmíngbai. 'I understood all the written words, but I didn't understand the joke I heard.' The paired complements contrast decoding with grasping the point."
      },
      {
        title: "把: presenting the fate of a known object",
        body: cited(
          "The 把 bǎ construction moves a familiar or specific object before a phrase that tells you what happens to it. 我把钥匙放在桌上了/我把鑰匙放在桌上了 Wǒ bǎ yàoshi fàng zài zhuōshang le means 'I put the keys on the table'. The verb normally needs a result, location, quantity, or endpoint, which is why bare *我把书看 feels unfinished.",
          "wiki-mandarin",
          "ccl-corpus"
        ),
        example: "请把声音调小一点，孩子睡着了。",
        exampleTranslation: "Qǐng bǎ shēngyīn tiáo xiǎo yìdiǎn, háizi shuìzháo le. 'Please turn the volume down a little; the child has fallen asleep.' 调小 specifies the resulting lower setting."
      },
      {
        title: "Topic–comment: starting from shared ground",
        body: cited(
          "Mandarin often starts with what everyone is talking about and then adds a comment. 这本书，我还没看完/這本書，我還沒看完 Zhè běn shū, wǒ hái méi kànwán means 'This book, I haven't finished it yet'. The topic doesn't have to be the grammatical subject, which helps explain why speakers omit so many obvious pronouns and objects.",
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
      "Mandarin makes basic word order accessible early, but balanced proficiency takes time. Tones and fast listening challenge speech, characters add a large literacy project, and advanced vocabulary changes between conversation, formal writing, and regions. Your own starting point matters: a heritage speaker may need literacy, while a Japanese reader may recognize characters but still need new pronunciation and grammar.",
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
      "Build the language around regular contact rather than occasional heroic sessions. Early on, compare short recordings with a teacher and learn characters through sentences you already understand; later, combine conversation, repeated work on one authentic clip, easy reading, and corrected writing. Measure real tasks such as following an interview or repairing a misunderstanding, because test levels don't automatically supply family, finance, or history vocabulary.",
      "dd-start",
      "dd-resources"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Choose one pronunciation and script environment for your own output, but keep listening to other varieties. Start with high-frequency phrases and sound correction, then learn characters inside words and grammar inside useful contrasts. At intermediate level, follow a topic and the same speakers long enough to predict their language, and ask tutors to diagnose recurring errors rather than simply read the lesson aloud.",
      "dd-start",
      "dd-resources"
    ),
    mediaPractice: cited(
      "Try a clip three times: first understand what you can, then check Chinese subtitles or a dictionary, and finally shadow and retell selected lines. Mix clear scripted material with interviews and livestreams because news teaches formal compounds, drama teaches interaction, and songs reshape tones around melody. Study one short item closely while keeping easier material moving for pleasure.",
      "dd-resources",
      "ccl-corpus"
    ),
    dictionariesAndCorpora: cited(
      "A bilingual dictionary gives you possible meanings, while monolingual dictionaries and corpora show how words actually behave. Pleco handles quick lookup, Taiwan's Ministry of Education records Guoyu readings and traditional forms, and BCC or CCL let advanced learners compare conversation with news, literature, and academic writing. Treat corpus counts as evidence from uneven collections, not rules, and save examples with their social setting.",
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
      "Mandarin words become easier to remember when you learn what people do with them. Some build productive compounds, some manage a relationship, and some divide experience differently from their nearest English gloss. Four-character idioms, 成语/成語 chéngyǔ, can sound elegant, funny, formal, or pompous, so record who used one and what effect it had instead of treating every idiom as casual conversation.",
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
          "This versatile word handles both inconvenience and politeness. 麻烦你帮我看一下/麻煩你幫我看一下 'Could I trouble you to take a look?' frames a request by acknowledging effort.\n\nTone and relationship decide whether it sounds courteous, warm, or impatient.",
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
      "Mandarin borrows in several ways. 咖啡 kāfēi 'coffee' and 沙发/沙發 shāfā 'sofa' echo sound, while 电脑/電腦 diànnǎo 'computer' and 热狗/熱狗 règǒu 'hot dog' translate meaning; 可口可乐/可口可樂 Kěkǒukělè does both for Coca-Cola. Modern compounds also travelled through Japanese, and today's speakers use English initials and internet forms differently according to profession, age, region, and editorial style.",
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
      "Mandarin belongs to the Sinitic group, whose members share ancestry and a writing tradition but aren't merely accents of one spoken language. Mandarin and Cantonese can write similar formal sentences while sounding very different and using distinct everyday grammar. Japanese, Korean, and Vietnamese aren't Sinitic, though long contact brought them large layers of Chinese-derived vocabulary and a history of character use.",
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
    "Mandarin doesn't give you access to one single 'Chinese culture'. Its speakers have different nationalities, ethnicities, home languages, and feelings about the standard, while names such as 普通话, 國語, and 華語 carry different histories. Follow the term your conversation partner uses and watch how real people handle titles, teasing, favors, and refusals instead of memorizing national personality rules.",
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
      accessedAt: "2026-07-18"
    },
    {
      id: "dd-facts",
      title: "20+ Chinese Language Facts — Fun and Sometimes Surprising!",
      url: "https://discoverdiscomfort.com/chinese-language-facts/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-18"
    },
    {
      id: "dd-identity",
      title: "Being and Speaking Chinese",
      url: "https://discoverdiscomfort.com/being-and-speaking-chinese/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-18"
    },
    {
      id: "dd-idioms",
      title: "15 Essential Chinese Idioms for Conversation (With Audio)",
      url: "https://discoverdiscomfort.com/essential-chinese-idioms-for-conversation/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-18"
    },
    {
      id: "dd-proverbs",
      title: "Chinese Proverbs That Teach You About China — With Audio",
      url: "https://discoverdiscomfort.com/chinese-proverbs-learning-chinese/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-18"
    },
    {
      id: "dd-resources",
      title: "Only the BEST Resources to Learn Chinese Online",
      url: "https://discoverdiscomfort.com/learn-chinese-online-best-resources/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-18"
    },
    {
      id: "dd-taiwan",
      title: "Living in Taiwan: A Complete Guide for Culture Nomads",
      url: "https://discoverdiscomfort.com/guide-to-living-in-taiwan/",
      publisher: "Discover Discomfort",
      accessedAt: "2026-07-18"
    },
    {
      id: "wiki-mandarin",
      title: "Mandarin Chinese",
      url: "https://en.wikipedia.org/wiki/Mandarin_Chinese",
      publisher: "Wikipedia",
      accessedAt: "2026-07-18"
    },
    {
      id: "prc-language-law",
      title: "Law on the Standard Spoken and Written Chinese Language of the People's Republic of China",
      url: "https://en.moe.gov.cn/documents/laws_policies/201506/t20150626_191388.html",
      publisher: "Ministry of Education of the People's Republic of China",
      publishedAt: "2000-10-31",
      accessedAt: "2026-07-18"
    },
    {
      id: "prc-2026-law",
      title: "China unveils revised law on standard Chinese language",
      url: "https://en.moe.gov.cn/news/press_releases/202512/t20251231_1425379.html",
      publisher: "Ministry of Education of the People's Republic of China",
      publishedAt: "2025-12-29",
      accessedAt: "2026-07-18"
    },
    {
      id: "taiwan-moe",
      title: "Language Resources",
      url: "https://english.moe.gov.tw/np-33-1.html",
      publisher: "Ministry of Education, Republic of China (Taiwan)",
      accessedAt: "2026-07-18"
    },
    {
      id: "taiwan-languages",
      title: "Development of National Languages Act",
      url: "https://www.moc.gov.tw/en/cp.aspx?n=412",
      publisher: "Ministry of Culture, Republic of China (Taiwan)",
      accessedAt: "2026-07-18"
    },
    {
      id: "unicode-han",
      title: "The Unicode Standard, Chapter 18: East Asia",
      url: "https://unicode.org/versions/Unicode16.0.0/core-spec/chapter-18/",
      publisher: "Unicode Consortium",
      accessedAt: "2026-07-18"
    },
    {
      id: "ccl-corpus",
      title: "CCL Corpus Statistics and Documentation",
      url: "https://corpus.pku.edu.cn/statistics/ccl_corpus_statistics.html",
      publisher: "Center for Chinese Linguistics, Peking University",
      updatedAt: "2026-04-16",
      accessedAt: "2026-07-18"
    },
    {
      id: "bcc-corpus",
      title: "BCC Chinese Corpus — User Guide",
      url: "https://bcc.blcu.edu.cn/help.html",
      publisher: "Beijing Language and Culture University",
      updatedAt: "2026-05-21",
      accessedAt: "2026-07-18"
    }
  ],
  seo: {
    title: "Mandarin Chinese: An Engaging Guide to Tones, Characters, Grammar, and Real Use",
    description:
      "Explore Mandarin Chinese through real examples: tones and pinyin, simplified and traditional characters, expressive grammar, regional varieties, useful phrases, idioms, learning strategy, and carefully selected modern sources."
  }
};
