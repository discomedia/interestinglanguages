import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Okinawan",
    relationship: "Japonic relative in the Northern Ryukyuan branch",
    explanation: cited(
      "Okinawan belongs to Japonic but is not simply casual Japanese with an island accent. Its traditional varieties are not mutually intelligible with Standard Japanese, and language shift has put them at risk. Okinawan Japanese—the Japanese variety now widely spoken in Okinawa—is a different thing again, shaped by contact with Ryukyuan languages.",
      "wiki-ryukyuan",
      "agency-endangered"
    )
  },
  {
    name: "Amami",
    relationship: "Japonic relative in the Northern Ryukyuan branch",
    explanation: cited(
      "Amami varieties preserve sound patterns and vocabulary that illuminate the depth of the Japonic family. Japanese learners should resist treating them as quaint relics: they are community languages with contemporary documentation and revitalization work, even as intergenerational transmission has weakened.",
      "agency-endangered",
      "unesco-shimamuni"
    )
  },
  {
    name: "Miyako",
    relationship: "Japonic relative in the Southern Ryukyuan branch",
    explanation: cited(
      "Miyakoan varieties differ sharply from both Japanese and Northern Ryukyuan languages. Their existence makes the family tree concrete: Japanese is one major branch of Japonic, not the whole family. NINJAL research treats documentation and conservation as urgent because speaker communities are aging.",
      "ninjal-miyako",
      "wiki-ryukyuan"
    )
  },
  {
    name: "Korean",
    slug: "korean",
    relationship: "Typologically similar neighbor, but not an established close relative",
    explanation: cited(
      "Japanese and Korean share head-final word order, particles, honorific distinctions, and extensive Chinese-derived vocabulary. Those parallels make each language feel structurally familiar to speakers of the other, but similarity and long contact do not by themselves prove a shared recent ancestor. Mainstream classifications keep Japonic and Koreanic separate unless stronger evidence emerges.",
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
  summary: "Japanese is a Japonic language whose compact sound system supports an intricate world of particles, omitted subjects, social register, pitch, and a writing system that turns script choice into meaning.",
  family: "Japonic",
  macroRegion: "Japan, East Asia, and global diaspora and learner communities",
  primaryScript: "Kanji, hiragana, and katakana",
  difficultyLabel: "Very demanding",
  learnerHook: "Japanese lets a learner move from a two-line text message to a haiku, game menu, workplace exchange, novel, recipe, or comedy routine—but each doorway teaches a different way of packaging context and social distance.",
  hero: {
    imageAlt: "Japanese text mixing kanji, hiragana, and katakana in contemporary print.",
    callToActionLabel: "Explore Japanese in use"
  },
  classification: "The major language of the Japanese branch of Japonic, with no demonstrated close external relative",
  speakerCommunity: "Japanese is the everyday majority language of Japan and is also used in long-established communities in Brazil, Peru, the United States, Canada, and elsewhere, as well as by a very large international learner population. A headline total of roughly 125 million speakers hides useful differences: a Tokyo office worker, an Osaka comedian, an elderly speaker in Aomori, and a heritage speaker in São Paulo may share Standard Japanese yet use different regional forms, vocabulary, and cultural references. Standard Japanese dominates national education and broadcasting, but local dialects remain socially alive. Japan is also multilingual: Ainu, Ryukyuan languages, Japanese Sign Language, immigrant languages, and heritage languages should not be collapsed into a story of one naturally monolingual nation.",
  facts: [
    { label: "Family", value: "Japonic · Japanese branch" },
    { label: "Primary community", value: "About 125 million speakers, overwhelmingly in Japan" },
    { label: "Standard variety", value: "Hyōjungo, broadly based on educated Tokyo speech" },
    { label: "Writing", value: "Kanji + hiragana + katakana, often with Latin letters" },
    { label: "Rhythmic unit", value: "The mora, not simply the syllable" },
    { label: "Common-use kanji", value: "2,136 jōyō kanji in the current official list" }
  ],
  learnerOverview: "Japanese gives beginners quick wins and slow-burn skills. Kana can be learned in weeks, basic verb forms are regular, and abundant subtitled media makes daily contact easy. Yet a simple line may rely on an unspoken subject, shared context, a kanji with several readings, and a socially positioned ending. Begin with hiragana, spoken chunks, and one structured course; add katakana immediately. Learn kanji inside words—会 in 会社 kaisha “company,” 会う au “meet,” and 会議 kaigi “meeting”—because isolated English keywords reveal neither reading nor usage. Label examples as polite, plain, formal written, casual, regional, or fictional when relevant. Discover Discomfort correctly warns that Japanese takes sustained time, but difficulty is uneven: ordering lunch may arrive quickly while reading essays or choosing natural honorifics takes years.",
  origins: {
    overview: cited(
      "Japanese descends from Proto-Japonic, whose other descendants survive in the Ryukyuan islands. Old Japanese becomes directly visible in eighth-century works such as the Kojiki, Nihon Shoki, and Man'yōshū. Their writing used Chinese characters for meaning and sound to represent a language structurally unlike Chinese. Over centuries, Japanese developed kana, absorbed several Sino-Japanese vocabulary layers, and changed its sounds and grammar. The earliest texts do not reveal a sealed language: movement through the archipelago and contact across Korea and China were central to literacy and state formation. The Oxford–NINJAL corpus now makes annotated early texts searchable.",
      "wiki-japanese",
      "ninjal-old-japanese",
      "glottolog-japanese"
    ),
    timeline: [
      {
        period: "Before the 8th century",
        event: cited(
          "Proto-Japonic diversified in the archipelago, ultimately producing Japanese and the Ryukyuan languages. Spoken history reaches farther back than surviving Japanese-language manuscripts, so reconstruction compares later varieties rather than inventing certainty from origin legends.",
          "glottolog-japanese",
          "wiki-ryukyuan"
        )
      },
      {
        period: "8th century",
        event: cited(
          "The earliest substantial records use Chinese characters in multiple ways. Man'yōgana represented Japanese sounds with characters and later helped give rise to hiragana and katakana. Old Japanese retained distinctions that later merged, making early poetry evidence for linguistic history as well as literature.",
          "ninjal-old-japanese",
          "unicode-east-asia"
        )
      },
      {
        period: "9th–16th centuries",
        event: cited(
          "Kana enabled sustained vernacular writing alongside Literary Chinese. Court diaries, tales, poetry, war narratives, sermons, and drama cultivated different styles. Sound change and grammatical reorganization gradually created Middle Japanese, while Chinese-derived vocabulary entered through several pronunciation layers.",
          "wiki-japanese",
          "ninjal-old-japanese"
        )
      },
      {
        period: "17th–19th centuries",
        event: cited(
          "Urban centers supported popular print, theater, travel writing, dictionaries, and literacy. Contact with Portuguese left words such as パン pan “bread”; Dutch learning supplied technical vocabulary during restricted European contact. Edo speech gained influence but did not erase strong regional traditions.",
          "wiki-japanese",
          "ninjal-corpora"
        )
      },
      {
        period: "Meiji period to the digital present",
        event: cited(
          "Modern schooling, mass print, broadcasting, script reform, and national language policy consolidated a standard. New compounds translated Western concepts; later English became the most visible source of loans. Contemporary Japanese now moves between vertical books, horizontal screens, emoji, predictive input, dialect performance, and globally circulated entertainment.",
          "agency-language-policy",
          "unicode-east-asia",
          "wiki-japanese"
        )
      }
    ],
    contactHistory: cited(
      "The deepest visible contact layer is Sino-Japanese: 文化 bunka “culture,” 経済 keizai “economy,” and 電話 denwa “telephone” use Chinese-origin morphemes, though some modern compounds were coined or reshaped in Japan and recirculated in East Asia. Buddhism added specialist vocabulary and readings. Portuguese contributed パン pan “bread”; Dutch entered medicine and science; English now supplies コンピューター konpyūtā “computer” and サブスク sabusuku “subscription service.” Loans adopt Japanese sound patterns and may change meaning: バイキング baikingu usually means buffet, not a Scandinavian raider.",
      "wiki-japanese",
      "unicode-east-asia",
      "jmdict"
    ),
    standardization: cited(
      "Standard Japanese, hyōjungo, grew from upper-middle-class Tokyo speech through education, administration, print, and broadcasting. It is a learned shared variety, not proof Tokyo has no dialect. The Agency for Cultural Affairs maintains guidance including the jōyō kanji list and modern kana usage; publishers and broadcasters have additional style policies. Speakers still shift among standard, local, professional, intimate, and online styles. The 2,136 jōyō characters are a common-use framework, not a complete list: names, literature, and specialist texts go beyond it.",
      "agency-language-policy",
      "wiki-dialects"
    )
  },
  variants: {
    overview: cited(
      "Japanese dialects differ in vocabulary, grammar, sounds, pitch, and endings. Media stereotypes reduce Kansai speech to forms such as や ya and へん hen, but Osaka, Kyoto, Kobe, and their neighbors vary internally. Tōhoku, Kyūshū, Hachijō, and other varieties may challenge native outsiders. Age, mobility, and identity create mixed repertoires rather than pure map compartments. Ryukyuan languages belong on the Japonic family tree and should not be folded into Japanese dialects merely because institutions historically used that label.",
      "wiki-dialects",
      "ninjal-corpora",
      "agency-endangered"
    ),
    items: [
      {
        name: "Standard / Tokyo-based Japanese",
        note: cited("The shared educational and media norm, with Tokyo-type pitch accent. Casual Tokyo speech still has generational, neighborhood, gender, and social variation that textbooks simplify.", "wiki-dialects", "ojad")
      },
      {
        name: "Kansai varieties",
        note: cited("Osaka, Kyoto, Kobe, and neighboring speech share recognizable features but are not interchangeable. Kansai pitch accent differs systematically from Tokyo accent, and local forms can express warmth, comedy, pride, or ordinary home identity depending on who uses them.", "wiki-dialects", "ninjal-corpora")
      },
      {
        name: "Tōhoku varieties",
        note: cited("Northern Honshū includes substantial local diversity in sound and grammar. Some speech is difficult for outsiders, but describing it as slurred or defective confuses unfamiliar phonology with lack of structure.", "wiki-dialects", "ninjal-corpora")
      },
      {
        name: "Kyūshū varieties",
        note: cited("Southern mainland varieties include distinct copulas, particles, verb forms, vocabulary, and accent systems. Fukuoka media speech is only one visible part of a much larger region.", "wiki-dialects", "ninjal-corpora")
      },
      {
        name: "Hachijō and Ryukyuan languages",
        note: cited("These remind learners that political labels and linguistic distance do not always match. Hachijō is highly divergent; Ryukyuan languages form sister branches to Japanese and face serious endangerment.", "agency-endangered", "wiki-ryukyuan")
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Japanese has five core vowels /a i u e o/ and a relatively small consonant inventory, but its timing contrasts carry real meaning. The useful unit is the mora: a short beat that may be a simple kana, the second half of a long vowel, a syllable-final ん n, or the first half of a doubled consonant written with small っ. Thus がっこう gakkō “school” has four morae: ga-k-ko-o. English speakers often compress those beats, turning おばさん obasan “aunt” into おばあさん obāsan “grandmother” or losing the contrast between きて kite “come” and きって kitte “stamp.” Start with length and rhythm before chasing a perfect accent.",
      "wiki-japanese",
      "ojad"
    ),
    script: "Mixed Japanese script; kana readings and Hepburn-style romanization are supplied for sound examples",
    soundSystem: cited(
      "Several sounds vary by position. The /r/ of らりるれろ is usually a brief tap, not an English r or a sustained l. Japanese /u/ is often less rounded than English “oo.” /i/ and /u/ may become devoiced between voiceless consonants, so すき suki can sound close to ski without the vowel being carelessly deleted. ん changes place before following consonants, and final vowels may weaken in polite です desu and ます masu. Palatalized sequences such as きょ kyo occupy one mora, while きよ kiyo has two. Katakana adapts foreign sounds approximately; it does not make Japanese phonology equivalent to English.",
      "wiki-japanese",
      "ojad"
    ),
    prosody: cited(
      "Standard Japanese uses lexical pitch accent: words can differ in where pitch falls, and a following particle may reveal the fall. はし hashi can mean “chopsticks,” “bridge,” or “edge” with different standard patterns, though context usually prevents confusion. Accent systems vary, so Tokyo notation is a target, not a universal standard. Intonation also marks questions, continuation, insistence, and hesitation. Hear pitch early and copy phrases, but do not delay speaking until every noun is memorized from an accent dictionary. Mora length and phrasing deserve priority.",
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
      { original: "きて / きって", transliteration: "kite / kitte", translation: "come / stamp", note: "The small っ represents a timing slot before t; silence or closure is part of the word." },
      { original: "がっこう", transliteration: "gakkō", translation: "school", note: "Count ga-k-ko-o: the doubled consonant and long final vowel each add a mora." },
      { original: "りょうり", transliteration: "ryōri", translation: "cooking; cuisine", note: "Small ょ joins the preceding consonant; the ō remains long: ryo-o-ri." },
      { original: "しんぶん", transliteration: "shinbun", translation: "newspaper", note: "The written ん adapts before b and is often realized near [m], without changing the spelling." },
      { original: "はし", transliteration: "hashi", translation: "chopsticks; bridge; edge", note: "A classic reminder that Tokyo pitch patterns can distinguish words whose segmental sounds match." }
    ]
  },
  writing: {
    overview: cited(
      "A normal sentence assigns jobs to several scripts. Kanji carry lexical content; hiragana writes particles, endings, many native words, and readings; katakana marks many loans, sound symbolism, scientific names, and emphasis. In 私はコーヒーを飲みます watashi wa kōhī o nomimasu, 私 and 飲 are kanji, は・を・みます hiragana, and コーヒー katakana. This mixture exposes word boundaries without spaces. Text runs horizontally left to right or vertically in columns ordered right to left, often mixing Latin letters, numerals, emoji, and symbols.",
      "unicode-east-asia",
      "agency-language-policy"
    ),
    primaryScript: "Kanji, hiragana, and katakana",
    romanization: cited(
      "Hepburn romanization is common in learner materials and public signage, while Kunrei-shiki and Nihon-shiki represent kana relationships differently. Compare し as Hepburn shi and Kunrei si, or つ as tsu and tu. Romanization is useful for typing instructions, names, and a brief pronunciation bridge, but it hides kanji identity, accent, and script conventions. Move flashcards and searches into Japanese early. Input methods usually let users type a reading in Latin letters or kana and then choose among kanji candidates; selecting the right candidate is a vocabulary skill, not mere keyboard mechanics.",
      "wiki-japanese",
      "agency-language-policy"
    ),
    spellingNorms: cited(
      "Kana spelling follows convention, not a phonetic transcript. Topic は is wa, object を normally o, and directional へ e. Long vowels appear as おう, おお, or katakana ー: 学校 がっこう gakkō, 大きい おおきい ōkii, コーヒー kōhī. Kanji have on-readings associated with Sino-Japanese words and kun-readings associated with native words, but labels cannot calculate every form. 今日 kyō “today” and 大人 otona “adult” must be learned whole. Furigana supplies small kana readings when needed.",
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
      "Japanese grammar builds long predicates by attaching pieces in a stable order. A verb can accumulate causative, passive, negative, politeness, tense, and connective meanings, yet agreement does not change for person or number. 食べませんでした tabemasen deshita means “did not eat,” whoever the omitted eater was. That regularity is real; the difficulty lies in discourse. Japanese speakers omit recoverable arguments, use particles to frame information, and choose forms according to relationship and genre. A sentence can be grammatically complete while English demands an explicit “I,” “you,” or “it.” Learn each pattern inside a small scene: who is speaking, what is already known, and how formal is the exchange?",
      "wiki-japanese",
      "ninjal-corpora"
    ),
    typologicalProfile: cited(
      "Japanese is predominantly head-final and agglutinative. Modifiers precede nouns, objects normally precede verbs, and particles follow noun phrases: 昨日、友達と映画を見ました kinō, tomodachi to eiga o mimashita, “Yesterday, I watched a film with a friend.” Agglutinative means grammatical pieces attach in recognizable sequences, though sound changes and a few irregular verbs complicate the picture. Nouns lack grammatical gender and usually do not mark plural. Verbs do not agree with subjects. Politeness, evidential stance, giving and receiving, and sentence-final particles encode distinctions that English often leaves to context or tone.",
      "wiki-japanese",
      "ninjal-corpora"
    ),
    morphology: cited(
      "Verb descriptions differ across textbooks, but the practical stem changes are consistent. 書く kaku “write” yields 書かない kakanai “do not write,” 書いた kaita “wrote,” 書いて kaite “write and/please write,” and 書ける kakeru “can write.” Ichidan verbs such as 食べる taberu replace -ru more simply: 食べない tabenai, 食べた tabeta. The two central irregulars are する suru “do” and 来る kuru “come.” Adjectives also inflect: 高い takai “is expensive/high,” 高くない takakunai “is not,” 高かった takakatta “was.” Copular nouns and na-adjectives use だ da or polite です desu. Memorizing a base word with its transformation family makes authentic sentences easier to parse.",
      "wiki-japanese",
      "jmdict"
    ),
    syntax: cited(
      "The predicate comes late, but rearrangement changes emphasis. Particles mark roles and discourse: が ga often presents a subject; を o a direct object; に ni targets, times, or locations of existence; で de an event location or means; と to quotation or accompaniment. は wa establishes topic or contrast. In 私は魚が好きです watashi wa sakana ga suki desu, “As for me, fish is appealing,” は and が do different work. “I like fish” is natural English, but its subject-object analysis obscures the Japanese construction.",
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
        body: cited("は wa frames what a comment is about or creates contrast; が ga marks a nominative phrase and often identifies new or exhaustive information. After 誰が来ましたか dare ga kimashita ka “Who came?”, 田中さんが来ました Tanaka-san ga kimashita “Tanaka came” answers the open slot. 田中さんは来ました Tanaka-san wa kimashita can contrast Tanaka with others: Tanaka came, at least. Context, not an English translation trick, chooses the particle.", "wiki-japanese", "ninjal-corpora"),
        example: "だれが来ましたか。—田中さんが来ました。",
        exampleTranslation: "Dare ga kimashita ka? — Tanaka-san ga kimashita. “Who came?” — “Mr/Ms Tanaka came.”"
      },
      {
        title: "Arguments disappear when context supplies them",
        body: cited("Japanese has pronouns, but repeated explicit subjects and objects can sound heavy. もう食べました mō tabemashita literally supplies only “already ate,” yet may mean “I have eaten,” “she ate it,” or “we already ate” in the right scene. Omission is not vagueness when participants share the referent. Learners should practice reconstructing context and asking a clarification such as 誰が？ dare ga? “Who?” instead of forcing 私 watashi into every sentence.", "wiki-japanese", "jpf-irodori"),
        example: "A: 昼ご飯は？ B: もう食べました。",
        exampleTranslation: "A: Hirugohan wa? B: Mō tabemashita. “What about lunch?” “I’ve already eaten.”"
      },
      {
        title: "The て-form links actions and requests",
        body: cited("The て-form is a junction rather than one tense. It links events, builds aspect with いる iru, creates requests with ください kudasai, and combines with auxiliaries. ドアを開けて、入ってください doa o akete, haitte kudasai means “Open the door and come in, please.” In 東京に住んでいます Tōkyō ni sunde imasu, the same form plus iru expresses an ongoing state: “I live in Tokyo.” Learn the whole construction rather than translating て itself.", "jpf-irodori", "jmdict"),
        example: "ドアを開けて、入ってください。",
        exampleTranslation: "Doa o akete, haitte kudasai. “Please open the door and come in.”"
      },
      {
        title: "Plain and polite are grammatical styles, not emotion meters",
        body: cited("食べる taberu and 食べます tabemasu share lexical meaning but position the utterance differently. Polite です/ます is a safe early public register; plain forms appear with intimates, in quoted clauses, before many grammar patterns, and throughout writing. A plain form is not automatically rude, and piling polite endings into every embedded clause is not automatically respectful. Compare 明日行くと思います ashita iku to omoimasu, “I think I’ll go tomorrow”: the quoted proposition uses plain 行く iku before the polite main verb.", "jpf-irodori", "wiki-japanese"),
        example: "明日行くと思います。",
        exampleTranslation: "Ashita iku to omoimasu. “I think I’ll go tomorrow.”"
      },
      {
        title: "Honorific and humble verbs track social direction",
        body: cited("Respectful language, sonkeigo, raises the person whose action is described; humble language, kenjōgo, lowers the speaker or in-group in an action directed toward that person. 先生がいらっしゃいます sensei ga irasshaimasu respectfully says “The teacher is here,” while 私が伺います watashi ga ukagaimasu humbly says “I will visit/ask.” These are not interchangeable fancy synonyms. Workplace formulas also depend on who counts as inside or outside the group, so observe recurring scenes before improvising.", "jpf-irodori", "agency-language-policy"),
        example: "先生がいらっしゃいます。私があとで伺います。",
        exampleTranslation: "Sensei ga irasshaimasu. Watashi ga ato de ukagaimasu. “The teacher is here. I will call on them later.”"
      },
      {
        title: "Relative clauses come before the noun",
        body: cited("Japanese places an entire noun-modifying clause before its head noun without a relative pronoun. 昨日駅で買った本 kinō eki de katta hon is “the book [I] bought at the station yesterday.” The listener waits until 本 hon to learn what the clause modifies, and the buyer remains unspoken if obvious. Begin parsing long phrases from the final noun backward, then identify the role missing inside the clause.", "wiki-japanese", "ninjal-corpora"),
        example: "昨日駅で買った本を読みました。",
        exampleTranslation: "Kinō eki de katta hon o yomimashita. “I read the book that I bought at the station yesterday.”"
      },
      {
        title: "Giving and receiving encode viewpoint",
        body: cited("あげる ageru, くれる kureru, and もらう morau all participate in “give/receive” events but choose a viewpoint. 友達が本をくれた tomodachi ga hon o kureta means “A friend gave me/us a book,” presenting the gift toward the speaker’s side. 友達に本をもらった tomodachi ni hon o moratta presents the speaker receiving it. Attached to て-forms, these verbs can show who performs a favor, which is why mechanically translating them as “give” misses their interpersonal force.", "jmdict", "ninjal-corpora"),
        example: "友達が漢字を教えてくれました。",
        exampleTranslation: "Tomodachi ga kanji o oshiete kuremashita. “A friend kindly taught me the kanji.”"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Japanese is unusually concentrated in Japan but not confined there. Colonial history, labor migration, return migration, and education created communities across the Pacific and Americas. In Japan, the standard coexists with regional Japanese, Ryukyuan and Ainu heritage, Japanese Sign Language, Korean and Chinese communities, and newer migration. Its geography includes homes, schools, workplaces, temples, media, and online networks—not only a map.",
      "wiki-japanese",
      "glottolog-japanese",
      "agency-language-policy"
    ),
    regions: [
      { place: "Japan", note: cited("The overwhelming center of first-language use, public institutions, publishing, education, and media. Standard Japanese is shared nationwide, while local varieties remain important markers of place and relationship.", "glottolog-japanese", "wiki-dialects") },
      { place: "Okinawa and the Ryukyu Islands", note: cited("Standard and Okinawan Japanese are widespread, alongside endangered Ryukyuan languages. Do not assume a local Japanese feature and a Ryukyuan-language form are the same phenomenon.", "agency-endangered", "wiki-ryukyuan") },
      { place: "Brazil and Latin America", note: cited("Migration beginning in the early twentieth century created major Nikkei communities. Japanese proficiency varies by generation, and modern mobility has added returnee and temporary-worker networks.", "wiki-japanese") },
      { place: "Hawaiʻi, the continental United States, and Canada", note: cited("Heritage institutions, family histories, schools, religious communities, and contemporary migration sustain Japanese in forms shaped by local English and multilingual life.", "wiki-japanese") },
      { place: "International learner and professional networks", note: cited("Japan Foundation courses, universities, schools, fandoms, business, research, tourism, and online communities support extensive second-language use well beyond diaspora families.", "jpf-irodori") }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "For an English-speaking learner, Japanese demands sustained work because few core words are transparent, the grammar organizes information differently, and adult literacy requires thousands of word-specific kanji readings. Discover Discomfort places it among the hardest widely studied languages and sensibly emphasizes kana, kanji, and a multi-year horizon. Still, a single label can mislead. Japanese has no grammatical gender, verb agreement by person, or irregular plural system; core conjugation is systematic; pronunciation has fewer segmental contrasts than many languages. The steepness comes from stacking competencies: conversational inference, script, vocabulary layers, register, and fast listening develop at different rates.",
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
      "A sustainable week might combine three lessons, daily kanji-word review, two transcript-based listening sessions, one conversation, and one pleasure-reading block. Measure projects: master an exchange, annotate a manga page, retell a news clip, or revise a message with a tutor. Discover Discomfort suggests a year or two of dedicated work for substantial ability; advanced reading and register take longer. Keep sound, interaction, and script together so strength in one mode does not conceal avoidance in another.",
      "dd-hardest",
      "jpf-irodori"
    )
  },
  advancedLearning: {
    strategy: cited(
      "After the beginner sequence, organize study by domains you inhabit. Build tracks for conversation/listening, reading, and corrected output. Mine sentences from a recurring source—a cooking channel, novel, workplace, baseball podcast, or game—and tag formality and speaker. Revisit subjects across media so vocabulary repeats. When intuition fails, NINJAL offers balanced writing, spontaneous speech, historical, dialect, and learner corpora. Its I-JAS data exposes recurring second-language patterns.",
      "ninjal-corpora",
      "jpf-irodori"
    ),
    mediaPractice: cited(
      "Separate character voice from transferable conversation. Anime, drama, games, and manga are excellent, but samurai, delinquents, princesses, and comics are stylized. Transcribe a 30–60 second clip before checking subtitles, mark reductions and omissions, then shadow its social stance. Add interviews, documentaries, radio, and everyday YouTube for self-repair and turn-taking. Japanese subtitles connect sound directly to words and kanji.",
      "ninjal-corpora",
      "jpf-irodori"
    ),
    dictionariesAndCorpora: cited(
      "A lookup should answer more than “what does this character mean?” Check the headword reading, part of speech, transitivity, pitch if relevant, register, typical particles, and two real examples. JMdict is the open multilingual database underneath many learner tools; its tags and cross-references are more informative than a bare gloss. NINJAL's BCCWJ and Tsukuba Web Corpus interfaces reveal collocations and genre. OJAD visualizes Tokyo accent patterns for words and inflected verbs. At an advanced level, add a Japanese–Japanese dictionary so definitions and usage labels stop passing through English.",
      "jmdict",
      "ninjal-corpora",
      "ojad"
    ),
    resources: [
      { type: "course", title: "Irodori: Japanese for Life in Japan", url: "https://www.irodori.jpf.go.jp/en/", level: "beginner", description: cited("Free Japan Foundation coursebooks, audio, and online study organized around practical communication for daily life and work in Japan.", "jpf-irodori") },
      { type: "course", title: "Marugoto Japanese Online Course", url: "https://marugoto.jpf.go.jp/en/e-learning/", level: "all", description: cited("Japan Foundation courses connecting communicative tasks with culture from A1 into intermediate study; useful beyond relocation-focused scenarios.", "jpf-irodori") },
      { type: "dictionary", title: "JMdict / WWWJDIC", url: "https://www.edrdg.org/", level: "all", description: cited("The maintained open Japanese–multilingual lexical database behind many dictionary applications, with readings, senses, usage labels, and related kanji/name projects.", "jmdict") },
      { type: "corpus", title: "NINJAL Corpus Portal", url: "https://clrd.ninjal.ac.jp/en/corpus-list.html", level: "advanced", description: cited("A gateway to balanced written, spontaneous spoken, historical, dialect, and learner Japanese corpora for checking what appears where.", "ninjal-corpora") },
      { type: "other", title: "OJAD: Online Japanese Accent Dictionary", url: "https://www.gavo.t.u-tokyo.ac.jp/ojad/eng/pages/home", level: "intermediate", description: cited("A University of Tokyo/NINJAL-supported tool for visualizing standard accent patterns, verb inflections, and phrase prosody. Treat it as a Tokyo model, not all Japanese.", "ojad") },
      { type: "other", title: "Discover Discomfort: Hardest Languages for English Speakers", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", level: "beginner", description: cited("A candid learner-oriented overview that places the time cost of kana, kanji, and long-term Japanese study in comparative perspective.", "dd-hardest") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Ask not only “what does this mean?” but “who says it, in what script, and what follows?” A native word, Sino-Japanese compound, and English-derived loan may overlap without being interchangeable: 始める hajimeru “begin,” 開始する kaishi suru “commence,” and スタートする sutāto suru “start” occupy different styles. Sound-symbolic どきどき dokidoki “heart pounding” is ordinary vocabulary. Endings and responses—ね ne, よ yo, そう sō, なるほど naruhodo—coordinate stance. Recipes, news, chat, criticism, fiction, and workplace mail teach different lexical worlds.",
      "jmdict",
      "ninjal-corpora"
    ),
    notableWords: [
      { term: "間", transliteration: "ma / aida / kan", meaning: "interval, space, relationship, timing", note: cited("Its reading and sense depend on the word. 間 ma can evoke a meaningful pause or spatial interval, but it is not a mystical untranslatable key to Japan; examples in architecture, music, comedy, and conversation give it substance.", "jmdict") },
      { term: "懐かしい", transliteration: "natsukashii", meaning: "fondly nostalgic; bringing back memories", note: cited("Often exclaimed when a place, song, taste, or object warmly recalls the past. English “nostalgic” can sound sadder or more abstract than the common conversational reaction 懐かしい！", "jmdict") },
      { term: "もったいない", transliteration: "mottainai", meaning: "what a waste; too good to waste", note: cited("Used for wasted food, time, talent, or opportunity. Its everyday range is more useful than presenting it only as an environmental philosophy.", "jmdict") },
      { term: "よろしく", transliteration: "yoroshiku", meaning: "please treat this/my request favorably", note: cited("A relationship-managing formula with no single English equivalent. In よろしくお願いします it can close an introduction, entrust a request, or acknowledge future cooperation.", "jpf-irodori", "jmdict") },
      { term: "やばい", transliteration: "yabai", meaning: "dangerous; awful; amazing; intense", note: cited("A vivid example of semantic expansion. Intonation and setting determine whether the speaker sees trouble, excellence, shock, or sheer degree; it remains casual and may be unsuitable in formal contexts.", "ninjal-corpora", "jmdict") },
      { term: "積ん読", transliteration: "tsundoku", meaning: "books accumulated unread", note: cited("A playful compound associated with 積んでおく tsunde oku “pile up and leave” and 読書 dokusho “reading.” It names a recognizable habit, but Japanese speakers do not all invoke a special cultural philosophy when using it.", "jmdict") },
      { term: "空気を読む", transliteration: "kūki o yomu", meaning: "read the room", note: cited("Literally “read the air.” It concerns inferring unstated social expectations; it can praise sensitivity or criticize pressure to conform, depending on context.", "ninjal-corpora", "jmdict") },
      { term: "木漏れ日", transliteration: "komorebi", meaning: "sunlight filtering through leaves", note: cited("A compact compound whose imagery makes it popular in lists of Japanese words. Its beauty is real, but it belongs in ordinary lexical and literary context rather than claims that it cannot be explained in another language.", "jmdict") }
    ],
    loanwordLayers: cited(
      "Japanese vocabulary is often described in three layers: native yamato kotoba, Sino-Japanese kango, and later loans gairaigo. The distinction predicts style imperfectly but usefully. Native verbs and adjectives dominate basic conversation; Sino-Japanese compounds compress formal and technical ideas; katakana loans are prominent in consumer, business, fashion, and technology language. Abbreviation is productive: パーソナルコンピューター became パソコン pasokon “personal computer,” and セクシュアルハラスメント became セクハラ sekuhara “sexual harassment.” Meanings can narrow or shift: マンション manshon is typically a modern apartment building/unit, not an English-style mansion. Verify usage rather than reverse-engineering from the source language.",
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
      "Japanese belongs to Japonic. Ryukyuan languages prove it has relatives; external relationships remain unproven. Chinese shaped writing and vocabulary but is a contact language, not a close relative. Korean offers structural parallels and contact, yet shared-ancestry proposals remain disputed. Distinguishing inheritance, borrowing, and resemblance prevents origin myths and “same character, same language” assumptions.",
      "glottolog-japanese",
      "wiki-japanese",
      "wiki-ryukyuan"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Japanese politeness is a repertoire shaped by age, workplace, service role, familiarity, genre, and personality—not proof that speakers never communicate directly. Textbook gender rules age quickly: real speakers mix, avoid, parody, and reinterpret gendered forms. Fiction amplifies social voices, so copying a character can produce an unintended class, era, regional, or gender performance. Ask “who would say this to whom?” Japan includes ethnic, regional, signing, immigrant, mixed-heritage, queer, and diaspora communities; no archetype stands for all of them.",
  resources: [
    { type: "course", title: "Irodori: Japanese for Life in Japan", url: "https://www.irodori.jpf.go.jp/en/", level: "beginner", description: cited("Free, audio-rich practical study from the Japan Foundation, especially strong for life and work scenarios rather than decontextualized grammar drills.", "jpf-irodori") },
    { type: "course", title: "Marugoto e-Learning", url: "https://marugoto.jpf.go.jp/en/e-learning/", level: "all", description: cited("A communicative course ecosystem aligned with Japan Foundation Can-do goals and available in several support languages.", "jpf-irodori") },
    { type: "dictionary", title: "JMdict / EDRDG", url: "https://www.edrdg.org/", level: "all", description: cited("A durable open lexical resource for readings, senses, labels, names, and kanji data; many familiar learner dictionaries use its files.", "jmdict") },
    { type: "corpus", title: "NINJAL Corpus Portal", url: "https://clrd.ninjal.ac.jp/en/corpus-list.html", level: "advanced", description: cited("Searchable evidence across balanced writing, speech, history, dialect, and learner language for moving beyond invented examples.", "ninjal-corpora") },
    { type: "other", title: "OJAD Accent Dictionary", url: "https://www.gavo.t.u-tokyo.ac.jp/ojad/eng/pages/home", level: "intermediate", description: cited("Standard Tokyo accent diagrams and speech tools for words, conjugated verbs, and phrases; best used alongside actual recordings.", "ojad") },
    { type: "other", title: "Discover Discomfort Japanese Difficulty Guide", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", level: "beginner", description: cited("A compact expectations-setting piece with a practical initial sequence for hiragana, kanji, and sustained Japanese study.", "dd-hardest") }
  ],
  relatedLanguages,
  phrases: [
    { original: "こんにちは", transliteration: "konnichiwa", translation: "Hello; good afternoon.", usageNote: "A standard daytime greeting. The final は is the topic particle and is pronounced wa." },
    { original: "おはようございます", transliteration: "ohayō gozaimasu", translation: "Good morning.", usageNote: "Polite. おはよう ohayō is natural with family, friends, and close colleagues; some workplaces use it when starting a shift later in the day." },
    { original: "ありがとうございます", transliteration: "arigatō gozaimasu", translation: "Thank you very much.", usageNote: "Polite and broadly useful. ありがとう alone is more casual; ありがとうございました thanks someone for a completed action or past service." },
    { original: "すみません", transliteration: "sumimasen", translation: "Excuse me; I’m sorry; thank you for the trouble.", usageNote: "Useful for getting attention, making a minor apology, or acknowledging inconvenience someone took on for you." },
    { original: "お願いします", transliteration: "onegaishimasu", translation: "Please; I’d like that; I entrust this to you.", literalMeaning: "I make a request.", usageNote: "Used when ordering, requesting cooperation, or closing an introduction; it is not attached mechanically to every English “please.”" },
    { original: "日本語を勉強しています", transliteration: "nihongo o benkyō shite imasu", translation: "I’m studying Japanese.", usageNote: "Polite neutral statement; the subject “I” is naturally omitted when obvious." },
    { original: "もう一度お願いします", transliteration: "mō ichido onegaishimasu", translation: "One more time, please.", usageNote: "A concise classroom or conversation repair phrase. Add ゆっくり yukkuri to request slowly." },
    { original: "もう少しゆっくり話していただけますか", transliteration: "mō sukoshi yukkuri hanashite itadakemasu ka", translation: "Could you speak a little more slowly?", usageNote: "A polite request. In relaxed conversation, もう少しゆっくりお願いします is simpler." },
    { original: "これはどういう意味ですか", transliteration: "kore wa dō iu imi desu ka", translation: "What does this mean?", literalMeaning: "What kind of meaning is this?", usageNote: "Point to a word or phrase. For a specific word, replace これ kore with この言葉 kono kotoba." },
    { original: "おすすめは何ですか", transliteration: "osusume wa nan desu ka", translation: "What do you recommend?", usageNote: "Useful at restaurants and shops; context supplies what kind of recommendation is wanted." },
    { original: "大丈夫です", transliteration: "daijōbu desu", translation: "I’m okay; it’s all right; no thank you.", usageNote: "Meaning depends on the preceding question and gesture. It can accept reassurance or politely decline an offer, so listen for context." },
    { original: "ちょっと分かりません", transliteration: "chotto wakarimasen", translation: "I’m not quite sure / I don’t understand.", literalMeaning: "I understand a little—not (softened).", usageNote: "ちょっと softens the negative. For “I didn’t catch that,” よく聞き取れませんでした is more precise." },
    { original: "失礼します", transliteration: "shitsurei shimasu", translation: "Excuse me; I’m leaving/entering.", literalMeaning: "I will be discourteous.", usageNote: "A formal-social threshold phrase used when entering, interrupting, hanging up, or leaving before others." },
    { original: "またね / また会いましょう", transliteration: "mata ne / mata aimashō", translation: "See you / Let’s meet again.", usageNote: "またね is casual; また会いましょう is polite and warmer or more deliberate." }
  ],
  sources: [
    { id: "dd-hardest", title: "The 4 Hardest Languages to Learn for English Speakers", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "wiki-japanese", title: "Japanese language", url: "https://en.wikipedia.org/wiki/Japanese_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-dialects", title: "Japanese dialects", url: "https://en.wikipedia.org/wiki/Japanese_dialects", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-pitch-accent", title: "Japanese pitch accent", url: "https://en.wikipedia.org/wiki/Japanese_pitch_accent", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-ryukyuan", title: "Ryukyuan languages", url: "https://en.wikipedia.org/wiki/Ryukyuan_languages", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-japanese", title: "Glottolog 5.3: Japanese", url: "https://glottolog.org/resource/languoid/id/nucl1643", publisher: "Glottolog", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "agency-language-policy", title: "Japanese Language Policy and Education", url: "https://www.bunka.go.jp/english/policy/japanese_language/", publisher: "Agency for Cultural Affairs, Government of Japan", accessedAt: "2026-07-10" },
    { id: "agency-endangered", title: "Japanese Language Policy: Endangered Languages and Dialects", url: "https://www.bunka.go.jp/english/policy/japanese_language/policy/", publisher: "Agency for Cultural Affairs, Government of Japan", accessedAt: "2026-07-10" },
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
    description: "A deeply researched guide to Japanese history, dialects, kana and kanji, mora timing, pitch accent, grammar, politeness, useful phrases, culture, and modern learning resources."
  }
} satisfies LanguageGuide;
