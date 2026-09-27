import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const sources = [
  { id: "wiki-cantonese", title: "Cantonese", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Cantonese", accessedAt: "2026-09-27" },
  { id: "wiki-yue", title: "Yue Chinese", publisher: "Wikipedia", url: "https://en.wikipedia.org/wiki/Yue_Chinese", accessedAt: "2026-09-27" },
  { id: "glottolog-yue", title: "Yue Chinese", publisher: "Glottolog", url: "https://glottolog.org/resource/languoid/id/yuec1235", accessedAt: "2026-09-27" },
  { id: "glottolog-shanghai", title: "Shanghainese", publisher: "Glottolog", url: "https://glottolog.org/resource/languoid/id/shan1293", accessedAt: "2026-09-27" },
  { id: "hk-census", title: "2021 Population Census: Main Results", publisher: "Census and Statistics Department, Hong Kong", url: "https://www.censtatd.gov.hk/en/data/stat_report/product/B1120109/att/B11201092021XXXXB0100.pdf", accessedAt: "2026-09-27" },
  { id: "lshk-jyutping", title: "Jyutping FAQ", publisher: "Linguistic Society of Hong Kong", url: "https://lshk.org/jyutping-faq/", accessedAt: "2026-09-27" },
  { id: "jyutping-scheme", title: "Jyutping Scheme", publisher: "Jyutping / CanCLID", url: "https://jyutping.org/en/jyutping/", accessedAt: "2026-09-27" },
  { id: "jyutping-learn", title: "I am a Cantonese learner and I speak English", publisher: "Jyutping / CanCLID", url: "https://jyutping.org/en/learn/", accessedAt: "2026-09-27" },
  { id: "cuhk-grammar-aspect", title: "Cantonese: A Comprehensive Grammar, Chapter 11: Aspect and Verbal Particles", publisher: "Chinese University of Hong Kong", url: "https://www.cuhk.edu.hk/lin/cbrc/CantoneseGrammar/multimedia/11.htm", accessedAt: "2026-09-27" },
  { id: "cuhk-grammar-particles", title: "Cantonese: A Comprehensive Grammar, Chapter 18: Sentence Particles and Interjections", publisher: "Chinese University of Hong Kong", url: "https://www.cuhk.edu.hk/lin/cbrc/CantoneseGrammar/multimedia/18.htm", accessedAt: "2026-09-27" },
  { id: "cuhk-grammar-nouns", title: "Cantonese: A Comprehensive Grammar, Chapter 6: The Noun Phrase", publisher: "Chinese University of Hong Kong", url: "https://www.cuhk.edu.hk/lin/cbrc/CantoneseGrammar/multimedia/06.htm", accessedAt: "2026-09-27" },
  { id: "cuhk-grammar-pronouns", title: "Cantonese: A Comprehensive Grammar, Chapter 5: Pronouns", publisher: "Chinese University of Hong Kong", url: "https://www.cuhk.edu.hk/lin/cbrc/CantoneseGrammar/multimedia/05.htm", accessedAt: "2026-09-27" },
  { id: "cuhk-grammar-politeness", title: "Cantonese: A Comprehensive Grammar, Chapter 20: Politeness and Terms of Address", publisher: "Chinese University of Hong Kong", url: "https://www.cuhk.edu.hk/lin/cbrc/CantoneseGrammar/multimedia/20.htm", accessedAt: "2026-09-27" },
  { id: "words-hk", title: "粵典: Cantonese Dictionary", publisher: "words.hk", url: "https://words.hk/", accessedAt: "2026-09-27" },
  { id: "cuhk-dictionary", title: "粵語審音配詞字庫", publisher: "Chinese University of Hong Kong", url: "https://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/main.php", accessedAt: "2026-09-27" },
  { id: "hkscs", title: "What is Hong Kong Supplementary Character Set (HKSCS)", publisher: "Hong Kong Common Chinese Language Interface", url: "https://www.ccli.gov.hk/en/hkscs/what_is_hkscs.html", accessedAt: "2026-09-27" },
  { id: "hkcc", title: "The Corpus of Mid-20th Century Hong Kong Cantonese", publisher: "Education University of Hong Kong", url: "https://hkcc.eduhk.hk/", accessedAt: "2026-09-27" },
  { id: "cuhk-cancorp", title: "Language Acquisition Laboratory: Cantonese Corpora", publisher: "Chinese University of Hong Kong", url: "https://www.arts.cuhk.edu.hk/~lal/corpora.html", accessedAt: "2026-09-27" },
  { id: "dd-politeness", title: "The Politeness Word in Different Cultures and Languages", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/the-politeness-word/", accessedAt: "2026-09-27" },
  { id: "dd-eat", title: "7 Essential Local Tips on How to Eat in China", publisher: "Discover Discomfort", url: "https://discoverdiscomfort.com/how-to-eat-in-china/", accessedAt: "2026-09-27" },
  { id: "hk-opera", title: "Culture and the Arts", publisher: "Hong Kong Culture, Sports and Tourism Bureau", url: "https://www.cstb.gov.hk/en/policies/culture/culture-and-the-arts.html", accessedAt: "2026-09-27" }
] satisfies LanguageGuide["sources"];

export const cantoneseGuide: LanguageGuide = {
  slug: "cantonese",
  name: "Cantonese",
  autonym: "廣東話 (Gwong2 dung1 waa2)",
  status: "published",
  publishedAt: "2026-09-27",
  summary: "Cantonese is the Guangzhou-rooted Yue language heard across the Pearl River Delta, Hong Kong, Macau, and diaspora communities, with its own tones, everyday grammar, and written voice.",
  family: "Sino-Tibetan → Sinitic → Yue → Cantonese",
  macroRegion: "Southern China, Hong Kong, Macau, and global diaspora",
  primaryScript: "Chinese characters, usually traditional in Hong Kong and Macau",
  difficultyLabel: "Very demanding",
  learnerHook: "Follow Hong Kong and Guangzhou speech from the first tones through its lively particles, then learn when people write Cantonese itself and when they use formal written Chinese.",
  hero: {},
  classification: "A Yue Sinitic language centered on Guangzhou; Hong Kong Cantonese is a closely related reference variety. Yue includes other varieties, such as Taishanese, that this guide does not teach.",
  speakerCommunity: "Cantonese links families, schools, workplaces, media, and performance across the Pearl River Delta, Hong Kong, Macau, and migration communities. Its speakers may also use Mandarin, English, Portuguese, or another Chinese language; those repertoires vary by place and person. The Hong Kong census counted Cantonese as the usual spoken language of 88.2% of residents aged five or above in 2021, a local measure rather than a world speaker total.",
  facts: [
    { label: "Name in speech", value: "廣東話 Gwong2 dung1 waa2; also 廣州話 Gwong2 zau1 waa2" },
    { label: "Guide anchor", value: "Contemporary Hong Kong Cantonese, with Guangzhou as a closely related reference" },
    { label: "Language family", value: "Yue branch of Sinitic; not synonymous with all Yue varieties" },
    { label: "2021 Hong Kong census", value: "88.2% of residents aged 5+ named Cantonese their usual spoken language" },
    { label: "Romanization used here", value: "Jyutping, with tone numbers 1–6" }
  ],
  introduction: cited(
    "Cantonese is the speech of Guangzhou and much of the Pearl River Delta, and a daily language of Hong Kong and Macau. It belongs to Yue, a branch of the Sinitic languages. Speakers also carry it through long-established communities overseas, where a family conversation, a shop counter, and a film may connect several generations.\n\nThis guide focuses on the Cantonese associated with Guangzhou and Hong Kong. Yue is a wider group that includes Taishanese and other varieties; calling all of them Cantonese can hide real differences in speech. Here, traditional characters and numbered Jyutping represent contemporary Hong Kong usage unless a different place or register is named.\n\nCantonese has six tones in the usual Jyutping description, final consonants such as -p and -k, and sentence-ending particles that give a statement its social force. Its written life has two familiar layers: formal written Chinese and writing that follows Cantonese speech more closely. Those layers let one community read a news story, text a friend, and hear an opera without using the same register throughout.",
    "wiki-cantonese", "wiki-yue", "glottolog-yue", "jyutping-scheme", "hkscs"
  ),
  origins: {
    overview: cited(
      "Cantonese grew within the southern Sinitic continuum rather than splitting from modern Mandarin. Population movement, contact, trade, and city life helped the Guangzhou area develop distinctive speech. The English name recalls Canton, an older name for Guangzhou; 廣東話 means 'Guangdong speech.'\n\nGuangzhou's commercial and cultural influence spread its speech through the Pearl River Delta. Yet Guangdong also has Hakka and Min communities, and Yue includes varieties that a Hong Kong speaker may not readily understand.",
      "wiki-cantonese", "wiki-yue", "glottolog-yue"
    ),
    timeline: [
      { period: "Imperial and early modern south", event: cited("Migration and contact shaped southern Sinitic speech while Guangzhou developed into a regional center. Present-day Cantonese preserves some older sound contrasts, but it is a modern language, not a recording of ancient Chinese.", "wiki-cantonese", "wiki-yue") },
      { period: "Nineteenth and twentieth centuries", event: cited("Movement from Guangzhou and nearby districts helped establish Cantonese as a dominant spoken language in Hong Kong and Macau. Overseas migration carried related speech into family and community institutions abroad.", "wiki-cantonese") },
      { period: "1990s onward", event: cited("The Linguistic Society of Hong Kong's Jyutping scheme gave learners and digital projects a consistent way to write pronunciation. Hong Kong's supplementary character set also made many locally used characters easier to exchange in computing.", "lshk-jyutping", "hkscs") }
    ],
    contactHistory: cited(
      "Cantonese vocabulary reflects the places its speakers inhabit. In Hong Kong, English contact is visible in everyday code-switching and loanwords, while regional family speech and more formal written Chinese provide other layers. Borrowing is not a recent defect in the language: people choose words according to topic, audience, medium, and local history.\n\nThe Pearl River Delta also joins communities with different first languages. Cantonese has served as a common regional language, but Mandarin's public role and the language mix in each city have changed with schooling and migration. A census figure for Hong Kong therefore cannot stand in for Guangzhou, Macau, or overseas neighborhoods.",
      "wiki-cantonese", "hk-census"
    ),
    standardization: cited(
      "Guangzhou pronunciation has long carried prestige within Yue, and Hong Kong broadcasting and education have made local Cantonese familiar far beyond the city. Yet there is no single everyday spelling authority that erases regional speech. Dictionaries may record multiple character readings, and the Chinese University of Hong Kong's pronunciation database explicitly compares earlier reference works and Hong Kong colloquial readings.\n\nJyutping, created by the Linguistic Society of Hong Kong, writes sounds with letters and a number after each syllable. It is especially helpful for teaching, dictionaries, and input methods. It does not replace characters in normal prose, and a school notice written in formal Chinese may sound unlike a spoken Cantonese conversation even when someone reads it aloud in Cantonese.",
      "wiki-cantonese", "lshk-jyutping", "cuhk-dictionary", "jyutping-learn"
    )
  },
  variants: {
    overview: cited(
      "Hong Kong and Guangzhou Cantonese are closely linked, but pronunciation and vocabulary can differ. Hong Kong office talk or texting may mix in English; other speakers may prefer a Guangzhou local term. Treat the forms here as a Hong Kong reference, then listen to the people you meet.\n\nRegister matters too. Conversation uses 我哋 ngo5 dei6 for 'we,' while a formal article may use 我們 ngo5 mun4. Readers understand both without saying each in the same setting.",
      "wiki-cantonese", "cuhk-grammar-pronouns", "hkscs"
    ),
    items: [
      { name: "Hong Kong everyday speech", note: cited("This guide's phrase and grammar examples use colloquial Hong Kong Cantonese with traditional characters and Jyutping. Pronouns such as 佢 keoi5 and particles such as 嘅 ge3 are ordinary in speech-like writing.", "words-hk", "cuhk-grammar-pronouns") },
      { name: "Guangzhou Cantonese", note: cited("The historic Guangzhou center shares the guide's broad Cantonese grammar and sound system. Check local pronunciation and wording in Guangzhou material before treating every Hong Kong expression as the only regional form.", "wiki-cantonese", "cuhk-dictionary") },
      { name: "Formal written Chinese", note: cited("News, school, and institutional prose often use standard written Chinese rather than a full transcript of colloquial Cantonese. Speakers can read that writing with Cantonese pronunciations while using different words and particles when they speak freely.", "wiki-cantonese", "hkscs") },
      { name: "Other Yue and diaspora speech", note: cited("Taishanese and other Yue varieties have their own histories and can be difficult for a Hong Kong Cantonese speaker to follow. Diaspora Cantonese may preserve older forms or reflect other contact languages; neither pattern is simply an error against a Hong Kong standard.", "wiki-yue", "glottolog-yue") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Each Cantonese syllable combines an initial sound, a vowel or vowel-plus-ending, and a tone. Jyutping writes that structure compactly: sik6 食 means 'eat,' while the final 6 records its tone. The spelling is a pronunciation guide, not an English approximation; its letters need to be learned on their own terms.\n\nHear the entire syllable before chasing individual tones. Cantonese distinguishes short and long vowel patterns and allows endings such as -m, -n, -ng, -p, -t, and -k. English speakers often miss the closed lips of -m or release a final -p too strongly. \n\nA recording gives you the timing that printed letters cannot.",
      "jyutping-scheme", "cuhk-dictionary"
    ),
    script: "Traditional Chinese characters with Jyutping transliteration",
    soundSystem: cited(
      "Jyutping b, d, and g represent unaspirated sounds; p, t, and k are breathier counterparts. The pairs do not map neatly onto English spelling. The long vowel aa contrasts with short a, and bare m4 in 唔 'not' is a full syllable.\n\nFinal -p, -t, and -k close abruptly, without a strong audible release. They occur with high, mid, or low tone categories in the six-tone analysis. Copy a recording instead of guessing from a character's shape.",
      "jyutping-scheme", "lshk-jyutping"
    ),
    prosody: cited(
      "The six Jyutping tone numbers contrast high level 1, rising 2, mid level 3, low falling 4, low rising 5, and low level 6 in the scheme's description. Older accounts may speak of nine tones because syllables ending in -p, -t, or -k were counted separately as 'entering' tone classes. That is a different way of counting, not a hidden set of three extra pitch contours to memorize.\n\nActual speech is more than six isolated melodies. Phrase rhythm, emphasis, and conversational particles alter what you hear; some speakers also merge distinctions that a teaching chart keeps separate. Learn the dictionary tone first, then test it in a whole utterance from the Hong Kong or Guangzhou speaker whose speech you are following.",
      "jyutping-scheme", "lshk-jyutping"
    ),
    learnerTraps: [
      "Do not read Jyutping b, d, and g as automatically voiced English consonants; compare them with p, t, and k in recorded pairs.",
      "Keep -m distinct from -n and -ng, and stop cleanly on final -p, -t, and -k without adding an extra vowel.",
      "Do not call the six-tone and nine-tone accounts contradictory; the latter separately counts checked syllables.",
      "Do not assume every character has one fixed reading: check a word in context and note colloquial and literary readings."
    ],
    sampleWords: [
      { original: "夫", transliteration: "fu1", translation: "husband; tone 1 in the Jyutping teaching series", note: "A high-level member of the six-way fu tone illustration; these are isolated reading examples, not a sentence." },
      { original: "虎", transliteration: "fu2", translation: "tiger; tone 2", note: "Its rising pitch contrasts with 夫 fu1 while the spelled consonant and vowel stay the same." },
      { original: "副", transliteration: "fu3", translation: "a measure word or 'vice-' element; tone 3", note: "The mid-level pitch is separate from both the high and rising patterns." },
      { original: "扶", transliteration: "fu4", translation: "to support; tone 4", note: "This low-falling contour begins the lower part of the chart." },
      { original: "婦", transliteration: "fu5", translation: "woman, in compounds; tone 5", note: "A low-rising tone; the character is more natural inside a word than as a casual standalone noun." },
      { original: "父", transliteration: "fu6", translation: "father, in compounds; tone 6", note: "The low-level category completes the series presented by the Jyutping scheme." }
    ]
  },
  writing: {
    overview: cited(
      "Cantonese speakers write Chinese characters. Traditional forms dominate public writing in Hong Kong and Macau; simplified forms are common on the mainland. This guide uses traditional characters.\n\nFormal written Chinese follows a broadly shared norm, while written Cantonese represents local speech with forms such as 佢 'he, she, they,' 冇 'not have,' and 咗, an aspect marker. Readers understand both registers but choose them for different settings.",
      "wiki-cantonese", "hkscs", "cuhk-grammar-aspect", "cuhk-grammar-pronouns"
    ),
    primaryScript: "Chinese characters; traditional forms are used for this guide's examples",
    romanization: cited(
      "Jyutping writes each syllable with Roman letters and a tone digit, as in 廣東話 Gwong2 dung1 waa2. The digit comes at the end of the syllable, and spaces show word grouping here for readability. Learn it early for dictionary lookup and pronunciation feedback, then keep reading characters alongside it: ordinary articles and messages rarely print tone numbers above every word.",
      "jyutping-scheme", "jyutping-learn"
    ),
    spellingNorms: cited(
      "Written Cantonese has recognizable conventional characters, but usage can vary, especially in informal digital text. When a device cannot display a less common character, a user may choose another spelling, an English word, or a sound-based substitute. Hong Kong's Supplementary Character Set addresses many locally used characters; Unicode support, a suitable font, and an input method still affect what readers see.\n\nA good dictionary should show both meaning and reading because a single character can have literary, colloquial, or word-specific pronunciations. The Chinese University of Hong Kong's Cantonese database brings several reference traditions together and includes accepted Hong Kong spoken readings. This makes it a better place to check an uncertain character than guessing from Mandarin pinyin.",
      "hkscs", "cuhk-dictionary", "jyutping-learn"
    ),
    styleNotes: [
      cited("Use 係 hai6 for 'be' and 喺 hai2 for 'at/in' in colloquial writing; they are different words and readings even though English learners may associate both with 'is.'", "words-hk"),
      cited("A speech-like text may use 唔 m4, 佢 keoi5, 嘅 ge3, and 咗 zo2 where a formal written passage uses another construction. Read the whole clause before converting vocabulary word by word.", "cuhk-grammar-aspect", "cuhk-grammar-pronouns"),
      cited("Search characters and Jyutping together when possible. Copying a character from a Mandarin-only result can give you the wrong Cantonese reading or miss a local spoken form.", "cuhk-dictionary", "words-hk")
    ]
  },
  grammar: {
    overview: cited(
      "A basic Cantonese sentence often puts subject, verb, and object in that order: 我食飯 ngo5 sik6 faan6, 'I eat rice/a meal.' The verb does not change shape for person or number. Small words around it tell you whether an action is ongoing, completed, habitual, requested, or questioned.\n\nThe examples in this section follow colloquial Hong Kong Cantonese. Their particles and characters belong to spoken-style writing; a formal newspaper sentence may express the same idea differently. Read each example as a complete utterance, then listen for the ending: dropping a final particle may change how a speaker's attitude comes across.",
      "cuhk-grammar-aspect", "cuhk-grammar-particles", "words-hk"
    ),
    typologicalProfile: cited(
      "Cantonese is largely analytic: grammatical relationships rely heavily on word order and separate words rather than verb endings. A topic can come first when a speaker wants to say what the rest of the sentence is about. Nouns also pair with classifiers, the small counting words used with numbers and demonstratives; 個 go3 is common, while 間 gaan1 suits many buildings or rooms.\n\nThe apparent simplicity of unchanged verbs shifts attention to short words. Learners must hear whether a syllable is a pronoun, aspect marker, classifier, negator, or sentence-final particle. Tone and context often distinguish items that an English translation flattens into the same word.",
      "cuhk-grammar-nouns", "cuhk-grammar-aspect", "cuhk-grammar-particles"
    ),
    morphology: cited(
      "Instead of a past-tense ending on 食 sik6 'eat,' Cantonese can put 咗 zo2 after the verb to present an event as completed: 食咗飯 sik6 zo2 faan6. 緊 gan2 follows a verb when an action is in progress. These are aspect markers: they show how a speaker views an event, not simply its position on a calendar.\n\nPlural pronouns use 哋 dei6, as in 我哋 ngo5 dei6 'we,' but ordinary nouns do not take an English-style plural ending every time there is more than one. 冇 mou5 'not have' and 唔 m4 'not' also have different jobs. Memorizing each in a short, natural sentence helps more than translating English 'didn't' or 'don't' mechanically.",
      "cuhk-grammar-aspect", "cuhk-grammar-pronouns", "words-hk"
    ),
    syntax: cited(
      "Cantonese questions can leave the question word where its answer would appear. For example, 你去邊度呀 (nei5 heoi3 bin1 dou6 aa3) means 'Where are you going?' A yes-or-no question can use an A-not-A pattern: 你去唔去 (nei5 heoi3 m4 heoi3) means 'Are you going?'\n\nA sentence-final particle adds a layer of expectation or stance. 呀 aa3 can make a question or statement conversational, while 啦 laa1 can encourage an action in the right setting. These particles are not decoration to scatter freely; their tone, position, and the relationship between speakers matter.",
      "cuhk-grammar-particles", "words-hk"
    ),
    advancedPainPoints: [
      "Choosing among 咗, 緊, 過, 住, and no overt marker requires attention to event type and discourse, not an English tense chart.",
      "Sentence-final particles come in combinations and subtle readings; subtitles often omit or simplify them.",
      "Formal written Chinese and spoken Cantonese may share characters while using different pronouns, vocabulary, and clause patterns.",
      "Classifiers and local readings can vary by noun, register, and speaker; dictionary glosses alone do not settle natural usage."
    ],
    topics: [
      { title: "A complete ordinary clause", body: cited("我食飯 ngo5 sik6 faan6 can mean 'I eat rice' or 'I eat a meal,' depending on context. It shows subject–verb–object order and a verb that stays the same for 'I' as for another person. Add a time word when the time is important; the verb itself does not carry an English present-tense ending.", "cuhk-grammar-aspect"), example: "我食飯。 Ngo5 sik6 faan6.", exampleTranslation: "I'm eating a meal / I eat rice, depending on context." },
      { title: "Completed and ongoing action", body: cited("Compare 我食咗飯 ngo5 sik6 zo2 faan6, 'I've eaten,' with 我食緊飯 ngo5 sik6 gan2 faan6, 'I'm eating.' Both markers follow 食, but 咗 presents the eating as completed and 緊 places you inside the ongoing action. Neither should be translated as a universal past or present tense ending.", "cuhk-grammar-aspect", "words-hk"), example: "我食咗飯。 Ngo5 sik6 zo2 faan6.", exampleTranslation: "I've eaten / I ate a meal." },
      { title: "Negation", body: cited("唔 m4 negates many ordinary verbs and descriptions: 我唔去 ngo5 m4 heoi3 means 'I'm not going.' 冇 mou5 covers 'not have' and is important in negative statements about completed events. The two negatives are not interchangeable just because English uses 'not' in both translations.", "words-hk", "cuhk-grammar-aspect"), example: "我唔去。 Ngo5 m4 heoi3.", exampleTranslation: "I'm not going." },
      { title: "Choosing a classifier", body: cited("我介紹呢位同事俾大家識 ngo5 gaai3 siu6 ni1 wai2 tung4 si6 bei2 daai6 gaa1 sik1 means 'Let me introduce this colleague to everyone.' 位 wai2 is a respectful classifier for a person; 個 go3 is a frequent general classifier elsewhere. Learn the noun and its classifier together rather than inserting 個 everywhere.", "cuhk-grammar-nouns"), example: "我介紹呢位同事俾大家識。 Ngo5 gaai3 siu6 ni1 wai2 tung4 si6 bei2 daai6 gaa1 sik1.", exampleTranslation: "Let me introduce this colleague to everyone." },
      { title: "Locating people and things", body: cited("喺 hai2 points to a place, while 係 hai6 links a person or thing to an identity. 我喺屋企 ngo5 hai2 uk1 kei2 means 'I'm at home.' The similar characters and romanized syllables are worth checking separately because swapping their tones changes the word.", "words-hk", "cuhk-dictionary"), example: "我喺屋企。 Ngo5 hai2 uk1 kei2.", exampleTranslation: "I'm at home." },
      { title: "Asking for the missing information", body: cited("A question word can stay inside the clause, where its answer would appear. In 你去邊度呀 (nei5 heoi3 bin1 dou6 aa3), 邊度 asks for the destination while 呀 gives the question a conversational ending. This word order is a listening clue in fast speech.", "cuhk-grammar-particles", "words-hk"), example: "你去邊度呀？ Nei5 heoi3 bin1 dou6 aa3?", exampleTranslation: "Where are you going?" },
      { title: "Polite requests and stance", body: cited("唔該 m4 goi1 can request attention, make a request polite, or thank someone for a service. In 唔該，俾杯水我 m4 goi1, bei2 bui1 seoi2 ngo5, the request needs the situation and tone of voice as much as its dictionary gloss. 多謝 do1 ze6 is often the better thanks for a gift or favor that someone has chosen to give.", "dd-politeness", "cuhk-grammar-politeness"), example: "唔該，俾杯水我。 M4 goi1, bei2 bui1 seoi2 ngo5.", exampleTranslation: "Could I have a glass of water, please?" }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Cantonese has a strong everyday presence in Hong Kong and Macau and belongs to the speech ecology of Guangzhou and the wider Pearl River Delta. The 2021 Hong Kong census measured 88.2% of residents aged five or above using Cantonese as their usual spoken language and 93.7% reporting an ability to speak it. Those are different measures; neither is a count of all Cantonese speakers worldwide.\n\nMigration has carried Cantonese into many overseas Chinese communities. Community speech may combine different generations, other Yue varieties, Mandarin, and local national languages. A learner should ask which variety a family, school, or media channel uses before treating a single audio course as universal.",
      "hk-census", "wiki-cantonese", "wiki-yue"
    ),
    regions: [
      { place: "Hong Kong", note: cited("The 2021 census identifies Cantonese as the usual spoken language of most residents aged five or above. It is heard across home, street, media, and much public life, alongside English, Mandarin, and other languages.", "hk-census") },
      { place: "Guangzhou and the Pearl River Delta", note: cited("Guangzhou is the historic center of the prestige Cantonese variety. Nearby communities do not all speak the same local language, so city and family background still matter when choosing learning audio.", "wiki-cantonese", "wiki-yue") },
      { place: "Macau", note: cited("Cantonese is a major daily spoken language in Macau. Portuguese and Mandarin also have public roles, and the mix of languages differs from Hong Kong's.", "wiki-cantonese") },
      { place: "Overseas communities", note: cited("Migration has sustained Cantonese in families, businesses, associations, worship, and media outside southern China. Community varieties may preserve older vocabulary or borrow from the surrounding majority language.", "wiki-cantonese") }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "The effort depends on what you know. A Mandarin reader may recognize characters and formal compounds yet need new pronunciation, spoken vocabulary, and listening habits. A beginner in Chinese characters faces literacy too; a heritage listener may need writing practice or speech beyond the home variety.\n\nSix tones and the gap between formal writing and conversation call for different practice. Judge progress by whether you can follow the people and media you care about, not a fixed hour estimate.",
      "jyutping-scheme", "cuhk-grammar-particles", "hkscs"
    ),
    easierAspects: [
      "Verbs do not conjugate for person, so short clauses become usable early once word order and particles are familiar.",
      "Jyutping provides a consistent route from spelling to pronunciation and works in searchable digital dictionaries.",
      "A learner who reads another Chinese language can transfer some character recognition and formal written vocabulary, with careful checking."
    ],
    hardAspects: [
      "Tone contrasts, syllable-final stops, and vowel length require listening and feedback, not just character memorization.",
      "Colloquial speech and formal written Chinese often choose different words and grammar for the same idea.",
      "Particles carry social meaning that one-word English translations usually lose."
    ],
    plateauRisks: [
      "Reading subtitles comfortably while missing fast unscripted speech and sentence-final particles.",
      "Learning characters through Mandarin pronunciations and never securing the Cantonese reading of familiar words.",
      "Copying one speaker's Hong Kong phrasing into every Guangzhou or diaspora setting without checking local usage."
    ],
    workload: cited(
      "For the first stage, pair a small set of recorded Hong Kong phrases with Jyutping and characters. Record yourself saying the same lines and ask a speaker or teacher to correct tones and final consonants. Once basic exchanges work, add speech-like writing and one regular audio source; introduce formal written Chinese as a related reading register rather than pretending it is a transcript. \n\nMore advanced learners can compare Hong Kong and Guangzhou recordings and annotate where vocabulary, tone, or register changes.",
      "jyutping-learn", "jyutping-scheme", "words-hk"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Begin with the six Jyutping tone patterns in recorded words, then move quickly to short exchanges about actual routines: getting attention, making a request, asking someone to repeat, and responding to help. Read each exchange in characters and Jyutping until you can recognize it in audio without staring at either. Keep the reference voice consistent at first; this guide uses Hong Kong speech.\n\nAt the next stage, take a short unscripted clip and mark every particle, aspect marker, and place word you hear. Look up the whole expression in words.hk or a grammar reference, then ask a speaker whether it fits your own situation. Later, compare a Cantonese conversation with a news article on the same subject. Notice what changes in vocabulary and sentence shape instead of assuming the article is 'advanced spoken Cantonese.'",
      "jyutping-learn", "words-hk", "cuhk-grammar-aspect", "cuhk-grammar-particles"
    ),
    mediaPractice: cited(
      "A Hong Kong interview tests fast turn-taking; drama may be scripted; a song makes wording memorable without always sounding casual. Cantonese opera has its own stage language and was listed by UNESCO in 2009. Its lines are not models for ordering lunch.\n\nTranscribe twenty seconds of speech, check uncertain syllables, and replay without the transcript. The Education University of Hong Kong's mid-century corpus shows older usage, not a present-day accent target.",
      "hk-opera", "hkcc", "cuhk-dictionary"
    ),
    dictionariesAndCorpora: cited(
      "Use words.hk for spoken meanings and examples. The Chinese University of Hong Kong pronunciation database compares character readings across reference works. Its child-language corpus and the Education University of Hong Kong's mid-century corpus support research, but neither is a beginner phrasebook.\n\nJyutping.org explains the spelling and input methods. Search both characters and Jyutping; when dictionaries disagree, inspect their examples and regional focus.",
      "words-hk", "cuhk-dictionary", "cuhk-cancorp", "hkcc", "jyutping-learn"
    ),
    resources: [
      { type: "course", title: "Jyutping.org learner path", url: "https://jyutping.org/en/learn/", level: "beginner", description: cited("A concise introduction to numbered pronunciation and character lookup. Use its sound chart with recordings rather than reading Roman letters as English.", "jyutping-learn") },
      { type: "dictionary", title: "粵典 words.hk", url: "https://words.hk/", level: "all", description: cited("A community Cantonese dictionary with Jyutping, spoken meanings, and contextual examples. Compare examples before adopting a colloquial expression.", "words-hk") },
      { type: "book", title: "Cantonese: A Comprehensive Grammar multimedia chapters", url: "https://www.cuhk.edu.hk/lin/cbrc/CantoneseGrammar/multimedia.htm", level: "intermediate", description: cited("University-hosted grammar chapters with detailed treatment of aspect, noun phrases, and particles. The older interface takes patience, but the topics answer questions short apps often skip.", "cuhk-grammar-aspect", "cuhk-grammar-nouns", "cuhk-grammar-particles") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Common Cantonese words show why a character-by-character Mandarin substitution does not produce natural speech. 食 sik6 is a daily verb for eating; 冇 mou5 says something is absent; 唔該 m4 goi1 can make a request or thank someone for service. Their use depends on the whole utterance and relationship, not just the gloss in a word list.\n\nWritten Cantonese also has a range of voices. A personal message may spell out speech and particles, a comic may play with visual forms, and a news story may follow formal written Chinese. Traditional genres such as Cantonese opera have their own literary and performance conventions. \n\nA reader who recognizes one register has learned a real part of the language, though not every part of it.",
      "words-hk", "hkscs", "hk-opera"
    ),
    notableWords: [
      { term: "唔該", transliteration: "m4 goi1", meaning: "please; excuse me; thanks for service", note: cited("A small word with several social jobs. Use it to get attention, soften a request, or thank someone for help or service; context prevents confusion.", "dd-politeness", "words-hk") },
      { term: "多謝", transliteration: "do1 ze6", meaning: "thank you", note: cited("Often thanks someone for a gift or favor, where 唔該 may fit routine service. The distinction is a guide to context rather than a rigid English two-word rule.", "words-hk") },
      { term: "冇", transliteration: "mou5", meaning: "not have; absent", note: cited("This spoken negative is common in everyday Cantonese and appears plainly in speech-like writing. Check it as its own word rather than replacing it mechanically with 唔.", "words-hk", "cuhk-grammar-aspect") },
      { term: "掂", transliteration: "dim6", meaning: "all right; capable; works", note: cited("A compact evaluation in Hong Kong conversation: a plan can be 掂 when it works, and a person can be described as capable. Tone and context can make praise warmer or more restrained.", "words-hk") },
      { term: "一陣", transliteration: "jat1 zan6", meaning: "a little while", note: cited("A handy time expression in messages and speech, but the exact length depends on context. It is not a promise of a fixed number of minutes.", "words-hk") },
      { term: "食飯", transliteration: "sik6 faan6", meaning: "eat a meal", note: cited("Literally 'eat rice,' but often the normal way to speak of having a meal. Context tells you whether rice itself is the point.", "words-hk") }
    ],
    loanwordLayers: cited(
      "Cantonese combines inherited Sinitic vocabulary, shared written Chinese compounds, local colloquial forms, and borrowings from contact languages. Hong Kong speech and media may mix English words into a Cantonese sentence; formal writing may avoid the same choice. Instead of labeling every English item slang, ask who is speaking, where, and for what purpose.\n\nSome apparent equivalents also differ in meaning or frequency across Mandarin and Cantonese. A Mandarin textbook can help a learner recognize characters, but it cannot settle which word a Hong Kong speaker would choose at a restaurant. Discover Discomfort's dining article includes a Cantonese restaurant phrase, yet its informal romanization is not a substitute for checked Jyutping or a current local recording.",
      "wiki-cantonese", "words-hk", "dd-eat"
    ),
    idioms: [
      { original: "塞翁失馬，焉知非福。", transliteration: "Coi3 jung1 sat1 maa5, jin1 zi1 fei1 fuk1.", translation: "A setback may turn out to be a blessing.", note: "A shared literary proverb also explained by Cantonese dictionaries. Use it for reflection after events develop; it can sound glib as an immediate response to someone's serious loss." },
      { original: "唔三唔四", transliteration: "m4 saam1 m4 sei3", translation: "Disreputable or improper; neither one thing nor another.", note: "A colloquial evaluation of a person or situation. Its judgmental force makes it unsuitable as a light label for someone you barely know." },
      { original: "掂過碌蔗", transliteration: "dim6 gwo3 luk6 ze3", translation: "Going very well; working out smoothly.", note: "A playful Hong Kong expression recorded in words.hk under 掂. It is more colorful than a neutral 'okay,' so the context should suit that tone." },
      { original: "橫睇掂睇", transliteration: "waang4 tai2 dim6 tai2", translation: "No matter how you look at it.", note: "A speech-friendly expression built on 'look horizontally, look vertically.' It can lead into a considered conclusion, not necessarily an angry dispute." }
    ],
    textGenres: [
      "Personal messages and social posts that spell out colloquial vocabulary, particles, and code-switching",
      "Comics, scripts, and subtitles that select how much spoken Cantonese to represent",
      "News reports and institutional notices in formal written Chinese read by Cantonese speakers",
      "Hong Kong interviews, podcasts, and talk programs with spontaneous turn-taking",
      "Cantonese opera and song lyrics with performance-specific vocabulary and rhythm"
    ]
  },
  relationships: {
    overview: cited(
      "Cantonese and Mandarin are both Sinitic and share much written vocabulary, but ordinary spoken conversations are not mutually intelligible. A reader may follow a formal Chinese headline yet miss a fast Cantonese exchange; shared characters do not erase different speech systems.\n\nGuangzhou and Hong Kong Cantonese are close. Taishanese shows why Yue does not promise mutual understanding. Shanghainese belongs to Wu, another Sinitic branch, while English contributes Hong Kong borrowings through contact.",
      "wiki-cantonese", "wiki-yue", "glottolog-yue", "glottolog-shanghai"
    ),
    languages: [
      { name: "Mandarin Chinese", slug: "mandarin-chinese", relationship: "Fellow Sinitic language", explanation: cited("Formal writing and many inherited words overlap, but everyday Cantonese speech has different tones, vocabulary, and grammatical markers. Mandarin study helps with some literacy while leaving a separate listening and speaking task.", "wiki-cantonese", "cuhk-grammar-aspect") },
      { name: "Shanghainese", slug: "shanghainese", relationship: "Wu Sinitic language", explanation: cited("Shanghainese and Cantonese have shared Sinitic ancestry but belong to different branches. Neither is a local accent of the other, and a shared character tradition cannot guarantee spoken comprehension.", "glottolog-yue", "glottolog-shanghai") },
      { name: "Taishanese", relationship: "Other Yue variety", explanation: cited("Taishanese belongs within Yue and has strong diaspora histories of its own. It is distinct enough that a Hong Kong Cantonese course should not be advertised as full preparation for Taishanese family speech.", "wiki-yue", "glottolog-yue") }
    ]
  },
  culturalNotes: "Cantonese is a present-day language of family talk, commerce, argument, humor, teaching, film, song, and performance. Cantonese opera is a recognized heritage form, but no single genre speaks for every Cantonese user. Ask how a person names their own language and which form they use at home, at work, and online; those answers reveal more than a broad label on a map.",
  resources: [
    { type: "other", title: "Discover Discomfort: The Politeness Word in Different Cultures and Languages", url: "https://discoverdiscomfort.com/the-politeness-word/", level: "beginner", description: cited("A short, directly relevant explanation of 唔該 in Hong Kong usage. Confirm its Jyutping and the contrast with 多謝 in a Cantonese dictionary before generalizing its uses.", "dd-politeness", "words-hk") },
    { type: "other", title: "Discover Discomfort: 7 Essential Local Tips on How to Eat in China", url: "https://discoverdiscomfort.com/how-to-eat-in-china/", level: "beginner", description: cited("Includes one Cantonese dining question amid broader China travel advice. Use it for context, then check the character wording and pronunciation with a Hong Kong speaker or dictionary; the article is not a Cantonese course.", "dd-eat") },
    { type: "course", title: "Jyutping.org learner path and sound scheme", url: "https://jyutping.org/en/learn/", level: "beginner", description: cited("Starts with the numbered tone spelling and routes learners to character lookup. Pair each syllable with the site's audio sound chart.", "jyutping-learn", "jyutping-scheme") },
    { type: "dictionary", title: "粵典 words.hk", url: "https://words.hk/", level: "all", description: cited("Search characters, Jyutping, and meanings in a dictionary centered on Cantonese usage. Read examples and labels when choosing a phrase for a real conversation.", "words-hk") },
    { type: "dictionary", title: "CUHK Cantonese Pronunciation Database", url: "https://humanum.arts.cuhk.edu.hk/Lexis/lexi-can/main.php", level: "intermediate", description: cited("Compares character readings across reference works and accepted Hong Kong colloquial readings. Strong for checking pronunciation; it is not a complete conversation course.", "cuhk-dictionary") },
    { type: "book", title: "Cantonese: A Comprehensive Grammar multimedia chapters", url: "https://www.cuhk.edu.hk/lin/cbrc/CantoneseGrammar/multimedia.htm", level: "intermediate", description: cited("Detailed university-hosted explanations of noun phrases, aspect, and sentence particles. Follow the examples with current recorded speech.", "cuhk-grammar-nouns", "cuhk-grammar-aspect", "cuhk-grammar-particles") },
    { type: "corpus", title: "Corpus of Mid-20th Century Hong Kong Cantonese", url: "https://hkcc.eduhk.hk/", level: "advanced", description: cited("Historical spoken data for comparing earlier Hong Kong usage with the present. It is a research corpus, so its dates should stay visible in any pronunciation claim.", "hkcc") }
  ],
  relatedLanguages: [
    { name: "Mandarin Chinese", slug: "mandarin-chinese", relationship: "Fellow Sinitic language", explanation: cited("A shared formal writing tradition can help reading, while everyday conversation requires separate Cantonese sound and grammar study.", "wiki-cantonese") },
    { name: "Shanghainese", slug: "shanghainese", relationship: "Wu Sinitic language", explanation: cited("A different Sinitic branch with its own speech tradition, a reminder that Chinese encompasses multiple spoken languages.", "glottolog-yue", "glottolog-shanghai") },
    { name: "Taishanese", relationship: "Other Yue variety", explanation: cited("Related within Yue but not interchangeable with the Hong Kong and Guangzhou forms taught here.", "wiki-yue") }
  ],
  phrases: [
    { original: "你好。", transliteration: "Nei5 hou2.", translation: "Hello.", usageNote: "A clear greeting, though people who know each other may open with a name or situation instead." },
    { original: "早晨。", transliteration: "Zou2 san4.", translation: "Good morning.", usageNote: "A common daytime opening, especially at the start of an encounter." },
    { original: "唔該。", transliteration: "M4 goi1.", translation: "Excuse me; please; thanks for the service.", usageNote: "The intended job depends on the situation. Use it to get attention or thank someone for routine help." },
    { original: "多謝。", transliteration: "Do1 ze6.", translation: "Thank you.", usageNote: "Often suits a gift or favor; compare 唔該 for service and requests." },
    { original: "唔使客氣。", transliteration: "M4 sai2 haak3 hei3.", translation: "You're welcome.", literalMeaning: "No need to be polite.", usageNote: "A response to thanks, also used in other contexts to tell someone not to stand on ceremony." },
    { original: "唔好意思。", transliteration: "M4 hou2 ji3 si1.", translation: "Sorry; excuse me.", usageNote: "A light apology or polite opening; the seriousness of an apology depends on context and tone." },
    { original: "你去邊度呀？", transliteration: "Nei5 heoi3 bin1 dou6 aa3?", translation: "Where are you going?", usageNote: "Casual Hong Kong speech. The final particle makes the question conversational." },
    { original: "我聽唔明。", transliteration: "Ngo5 teng1 m4 ming4.", translation: "I don't understand what I'm hearing.", usageNote: "A direct repair phrase. Follow it with a request for slower speech or repetition." },
    { original: "可唔可以講慢啲？", transliteration: "Ho2 m4 ho2 ji5 gong2 maan6 di1?", translation: "Could you speak a little more slowly?", usageNote: "Uses the can-not-can question pattern and 啲 for 'a little.'" },
    { original: "呢個幾多錢？", transliteration: "Ni1 go3 gei2 do1 cin2?", translation: "How much is this?", usageNote: "A practical price question; gesture at the item when the context is unclear." },
    { original: "我要呢個，唔該。", transliteration: "Ngo5 jiu3 ni1 go3, m4 goi1.", translation: "I'd like this one, please.", usageNote: "A concise purchase or ordering request. The closing 唔該 supplies politeness." },
    { original: "再見。", transliteration: "Zoi3 gin3.", translation: "Goodbye.", usageNote: "A more formal departure phrase. In casual speech many Hong Kong speakers say 拜拜 instead." }
  ],
  sources,
  seo: {
    title: "Cantonese: Hong Kong and Guangzhou Speech, Tones, Writing, and Grammar",
    description: "Explore Cantonese through Hong Kong and Guangzhou speech, six Jyutping tones, written Cantonese, everyday grammar and phrases, Yue relationships, and carefully checked learning sources."
  }
};
