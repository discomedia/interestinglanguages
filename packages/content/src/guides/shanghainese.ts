import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

export const shanghaineseGuide: LanguageGuide = {
  slug: "shanghainese",
  name: "Shanghainese (Wu Chinese)",
  autonym: "上海闲话 / 上海閒話",
  status: "published",
  publishedAt: "2026-09-27",
  summary: "A guide to urban Shanghainese as a Wu Chinese variety: its layered history, distinctive sound and tone patterns, flexible character writing, local expressions, and ways to study real speech.",
  family: "Sino-Tibetan → Sinitic → Wu → Taihu Wu",
  macroRegion: "Shanghai and the lower Yangtze region, East Asia",
  primaryScript: "Chinese characters, usually simplified in Shanghai; no single fixed spelling for all colloquial words",
  difficultyLabel: "Very demanding",
  learnerHook: "Urban Shanghainese rewards careful listening: the pitch pattern of a whole word can matter more than a character's dictionary tone, and a shared character does not give its Mandarin pronunciation.",
  hero: { imageAlt: "The characters 上海闲话 naming Shanghainese speech.", callToActionLabel: "Explore Shanghainese" },
  classification: "This guide covers urban Shanghai speech within Taihu Wu, especially forms described for middle-generation speakers. Wu also includes Suzhou, Ningbo, Wenzhou, and many other varieties; their vocabularies, sounds, and mutual comprehension vary. Shanghainese is not Standard Mandarin pronounced with a Shanghai accent.",
  speakerCommunity: "Shanghainese belongs to families and neighborhoods rooted in Shanghai, including descendants of migrants from elsewhere in the lower Yangtze region. Many speakers also use Standard Mandarin, and younger people's opportunities to acquire local speech differ by home, school, and peer group. 'Shanghai' names a municipality with several local varieties, so a citywide population figure cannot serve as a count of fluent urban Shanghainese speakers.",
  facts: [
    { label: "Local name", value: "上海闲话 / 上海閒話, 'Shanghai speech'; also 上海话" },
    { label: "Family", value: "Sinitic → Wu → Taihu Wu; urban Shanghai is the example anchor" },
    { label: "Sound", value: "Voiced, aspirated, and unaspirated initials; five citation tones in a 2015 urban description" },
    { label: "Prosody", value: "Word and phrase tone sandhi, with pitch distributed across syllables" },
    { label: "Writing", value: "Chinese characters with variable spellings for colloquial words" },
    { label: "Count caution", value: "No current verified total here for fluent urban-variety speakers" }
  ],
  introduction: cited(
    "Shanghainese is a Wu Chinese language spoken in Shanghai, especially associated with families in the city's older urban districts. Speakers call it 上海闲话, and its words and sound patterns differ enough from Standard Mandarin that knowing Mandarin alone does not make everyday Shanghainese conversation understandable. This guide focuses on the urban variety rather than treating all speech across the municipality as identical.\n\nShanghainese took shape through local continuity and migration from neighboring Wu-speaking places, especially as Shanghai expanded in the nineteenth and twentieth centuries. A 2015 phonetic description records an urban speaker from Huangpu and distinguishes that variety from suburban 本地闲话. A citywide population total, or a count of all Wu speakers, cannot stand in for a current count of fluent speakers of this urban variety.\n\nPitch is one of Shanghainese's striking features: a syllable's isolated tone can change when it joins its neighbors. The characters 上海 still name the same city, but their everyday local pronunciation and rhythm are not Mandarin Shànghǎi. This is one way to hear how related Chinese languages have followed distinct paths.",
    "ipa-2015", "glottolog", "shanghai-dialects", "heritage-2022"
  ),
  origins: {
    overview: cited(
      "Shanghainese grew inside the Taihu branch of Wu, in the lower Yangtze region. Earlier speech in the Shanghai area did not simply become today's urban form without interruption. As Shanghai expanded after the treaty-port opening in the nineteenth century, people arrived from Suzhou, Ningbo, neighboring Jiangsu and Zhejiang districts, and farther away; their speech met the local variety in homes, streets, and workplaces.\n\nThe older prestige center for northern Wu was Suzhou. Shanghai's rise changed the region's cultural and commercial gravity, and urban Shanghainese developed as a contact variety rather than a frozen relic. Its present-day pronunciation is therefore evidence of several histories at once: inherited Wu distinctions, innovations in the city, and later influence from Standard Mandarin.",
      "ipa-2015", "shanghai-dialects", "tutorial-2024"
    ),
    timeline: [
      { period: "Before the nineteenth-century port city", event: cited("The Shanghai area formed part of a wider Wu-speaking region. Suzhou speech enjoyed considerable regional prestige, while local towns kept their own varieties.", "tutorial-2024", "glottolog") },
      { period: "Nineteenth and early twentieth centuries", event: cited("Shanghai's growth brought large numbers of migrants from Jiangsu and Zhejiang. Urban speech absorbed neighboring Wu features, and missionaries and scholars began detailed written descriptions of the dialect.", "ipa-2015", "tutorial-2024") },
      { period: "Late twentieth century to today", event: cited("Standard Mandarin became the principal language of formal schooling and much public communication. Researchers now document generational sound change, while local courses, performances, and digital projects make urban speech easier to hear and study.", "ipa-2015", "heritage-2022", "treebank") }
    ],
    contactHistory: cited(
      "Ningbo and Suzhou speech mattered because migrants used them in the city, not because all Wu varieties are interchangeable. 阿拉, a familiar form for 'we', is often connected with Ningbo influence; the Shanghai author's 2024 tutorial contrasts it with an older local 我伲. The exact mix a family uses depends on its history and the generation speaking.\n\nThe port also exposed Shanghai residents to English and other outside languages. Some well-known urban expressions have proposed foreign origins, but folk etymologies circulate freely, so this guide doesn't treat every colorful word as a proven loan. More recent Mandarin contact reaches into vocabulary and pronunciation, and a younger speaker's Shanghainese may differ from the middle-generation reference recorded in the IPA study.",
      "tutorial-2024", "ipa-2015", "shanghai-dialects"
    ),
    standardization: cited(
      "There is no single state-mandated spoken Shanghainese standard comparable to Standard Mandarin. Dictionaries and teaching materials choose a model, often the urban middle-generation pronunciation, but those choices are editorial. Zhu Yuhao's 2024 tutorial explicitly chooses one middle-generation system and says where it differs from newer speech; readers should treat it as a documented teaching model, not as the only legitimate family pronunciation.\n\nChinese characters carry most published material, yet colloquial Shanghainese words do not have universally fixed character spellings. Mission-era romanizations, modern Wu-oriented spelling systems, and phonetic IPA serve different purposes. If two sources spell the same spoken item differently, compare their recordings and stated variety before deciding that one is an error.",
      "tutorial-2024", "treebank-paper", "wiki-shanghainese"
    )
  },
  variants: {
    overview: cited(
      "'Shanghainese' can mean the urban speech of the historic center, a broader set of varieties inside today's municipality, or even Wu Chinese in loose English usage. This article uses the first meaning for examples. The municipal government distinguishes downtown, Chongming, Liantang, Songjiang, and Jiabao dialect areas, and the IPA description contrasts urban 上海闲话 with suburban 本地闲话. \n\nThat is why a phrase recorded in a suburban district cannot automatically stand for downtown speech.\n\nVariation also runs through time. Researchers describe older, middle, and newer urban pronunciations, and individual families combine local forms with Mandarin in different ways. A difference from an older dictionary may reflect real change rather than carelessness.",
      "shanghai-dialects", "ipa-2015", "tutorial-2024"
    ),
    items: [
      { name: "Middle-generation urban Shanghai", note: cited("This guide's main phonetic anchor. The 2015 IPA illustration records a woman born in the 1950s and raised in Huangpu; it should not be generalized to every district or age group.", "ipa-2015") },
      { name: "Newer urban speech", note: cited("Speakers born later may use different consonants, vowels, and lexical choices. Mandarin contact and family transmission both matter, so compare speakers instead of declaring an age group uniformly fluent or nonfluent.", "ipa-2015", "heritage-2022") },
      { name: "Suburban Shanghai varieties", note: cited("Local varieties outside the old center have their own histories. The government's 2025 overview names several dialect areas inside the municipality; their inclusion under 'Shanghai dialects' does not make them identical to urban Shanghai speech.", "shanghai-dialects") },
      { name: "Formal and casual use", note: cited("A person may read standard written Chinese aloud or discuss formal topics in Mandarin, then use Shanghainese in family talk, joking, opera, or a neighborhood exchange. Script choice and spoken-language choice need separate labels.", "treebank-paper", "heritage-2022") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Start with recorded urban speech rather than a Mandarin reading of the same characters. Shanghai Wu can distinguish unaspirated, aspirated, and voiced consonant beginnings. 'Aspirated' means a noticeable puff of air after release; 'voiced' means the vocal folds participate, though the exact sound also depends on tone and context. \n\nA familiar Mandarin pinyin letter is not a guarantee of the same sound here.\n\nThe IPA illustration offers recordings and an explicitly identified speaker, making it a better pronunciation reference than a bare character list. Its transcriptions represent that speaker and analytical choices, not an accentless voice of the entire municipality.",
      "ipa-2015", "tutorial-2024"
    ),
    script: "Chinese characters with IPA for precise sound examples; Wugniu-style spellings in selected phrases are approximate study aids, not Mandarin pinyin",
    soundSystem: cited(
      "Listen for the set of stops that differ by voicing and breath: /p/, /pʰ/, and a voiced series often represented /b/. Shanghainese also has nasal sounds and syllables ending in a short glottal closure /ʔ/, the catch heard in some 'checked' syllables. The place and manner of a sound matter more than how a shared Chinese character is pronounced in Mandarin.\n\nThe vowel inventory is not a simple copy of Mandarin's. In the IPA study, even the analysis of some glides and syllabic sounds differs from older descriptions. Read phonetic symbols as a map to audio, and check a word in a full phrase before trying to freeze its sound from a single character.",
      "ipa-2015", "tutorial-2024"
    ),
    prosody: cited(
      "In isolation, the 2015 account describes five lexical tones for its urban speaker. In connected speech, tone sandhi changes how pitch spreads through a multi-syllable word or phrase. A learner who pronounces every written character with its isolated contour can sound unnatural even when each segment is close.\n\nTreat the pitch pattern as belonging partly to a whole word or rhythmic group. Compare 上海 in a place name, 上海人 in a longer noun, and the same syllables across a pause. The exact grouping and pitch can vary with syntax, emphasis, and speaker generation, so listen to recordings rather than applying a Mandarin four-tone chart.",
      "ipa-2015", "tts-sandhi", "tutorial-2024"
    ),
    learnerTraps: [
      "Reading 上海话 as Mandarin Shànghǎihuà; the characters overlap, but the urban pronunciation and sandhi do not.",
      "Giving every syllable its isolated tone inside a word; record and repeat whole groups instead.",
      "Treating a short glottal-final syllable as an ordinary open vowel, or confusing a voiced initial with an aspirated one.",
      "Assuming one romanization gives a universal spelling; always identify the source's system and speaker."
    ],
    sampleWords: [
      { original: "刀", transliteration: "IPA /tɔ/ (isolated tone T1)", translation: "knife", note: "In the 2015 Huangpu recording, one member of the article's five-tone comparison; the vowel and pitch should be heard together." },
      { original: "島 / 岛", transliteration: "IPA /tɔ/ (isolated tone T2)", translation: "island", note: "The same broad consonant and vowel shape as 刀 in the study, with a contrasting isolated tone." },
      { original: "桃", transliteration: "IPA /dɔ/ (isolated tone T3)", translation: "peach", note: "Compare the voiced beginning with the two /t/-initial items; this is a sound illustration, not a Mandarin pinyin lesson." },
      { original: "督", transliteration: "IPA /tʊʔ/ (isolated tone T4)", translation: "to supervise or check", note: "The final glottal stop makes this syllable shorter and abruptly closed in the IPA illustration." },
      { original: "讀 / 读", transliteration: "IPA /dʊʔ/ (isolated tone T5)", translation: "to read", note: "Pair with 督 to hear both the initial contrast and the short checked ending." }
    ]
  },
  writing: {
    overview: cited(
      "Shanghainese speakers commonly read and write Chinese characters, but standard written Chinese is not a transcript of everyday Shanghainese grammar. A newspaper can be read by a Shanghai resident without being composed in local speech. To represent casual dialogue, writers must decide how to spell local words such as 侬 'you', 勿 'not', and 阿拉 'we'. \n\nThose choices can differ across publishers, families, and online communities.\n\nThe writing problem is practical rather than a sign that the language lacks structure. Recent corpus work notes that speakers may read a Mandarin-character prompt and naturally adapt the vocabulary and grammar when speaking Shanghainese. A source that prints characters without audio therefore needs careful interpretation.",
      "treebank-paper", "tutorial-2024", "wiki-shanghainese"
    ),
    primaryScript: "Chinese characters, predominantly simplified in mainland Shanghai",
    romanization: cited(
      "No romanization has the universal role that Hanyu Pinyin has for Standard Mandarin. The 2024 tutorial teaches a Wu-oriented spelling system, while Wugniu resources use their own conventions and the IPA study writes precise phonetic forms. This guide gives IPA for the five research-based sound comparisons and leaves some conversational phrases in characters where spelling and tone conventions differ. \n\nAny Latin spelling below is a source-specific pronunciation hint, never a Mandarin pinyin reading.",
      "tutorial-2024", "ipa-2015", "omniglot-phrases"
    ),
    spellingNorms: cited(
      "Most ordinary electronic keyboards make standard Chinese characters easy to enter, but locally specific words can demand a deliberate character choice. A writer may prefer a historically motivated character, a familiar sound-based substitute, or a standard Chinese paraphrase. The Wugniu Rime input scheme shows one community attempt to support Shanghai Wu spelling and older and newer pronunciations; it is a tool, not an official orthographic decree.",
      "rime-wugniu", "tutorial-2024", "treebank-paper"
    ),
    styleNotes: [
      cited("Label a sample as spoken urban Shanghainese, suburban Shanghai speech, or standard written Chinese before comparing its forms.", "ipa-2015", "shanghai-dialects"),
      cited("Keep the original characters alongside audio or a named romanization system; character spelling alone cannot show tone sandhi.", "ipa-2015", "tutorial-2024"),
      cited("When a colloquial word has competing character spellings, preserve the spelling used by the quoted source and explain the variation rather than silently normalizing it.", "treebank-paper", "wiki-shanghainese")
    ]
  },
  grammar: {
    overview: cited(
      "Shanghainese puts grammar into word order, small words, and the situation rather than into English-style verb endings. A verb doesn't change form because the subject is 'I' or 'they'. Still, that does not mean you can swap Mandarin words into a Shanghai sentence and call the job done: pronouns, negatives, aspect markers, questions, and the choice of colloquial vocabulary all matter.\n\nThe examples in this section come from a Shanghai author's 2024 teaching text and a labeled Shanghai phrase collection. They illustrate an urban teaching variety, not a universal rule for all Wu speech. Some are short, complete everyday utterances; one longer example belongs to a constructed teaching story, so use it to see a form before checking spontaneous speech.",
      "tutorial-2024", "wiktionary-phrases", "treebank"
    ),
    typologicalProfile: cited(
      "Basic clauses often put a subject before a verb and its object, as in 我辣海看电影, 'I'm watching a film.' Speakers can also place a familiar topic first and then say something about it; the listener uses context to identify omitted subjects or objects. Nouns do not have grammatical gender, and verbs do not conjugate for person. These broad Sinitic similarities should not hide local patterns and words.",
      "tutorial-2024", "treebank"
    ),
    morphology: cited(
      "Small particles do much of the work that English puts into inflected endings. 勿 can negate a predicate, 个 can link a possessor or modifier to a noun, and a phrase-final 伐 can ask for confirmation. Reduplication can soften or reshape the meaning of some verbs and adjectives, but the effect depends on the word and context; it is not a mechanical rule for every item.\n\nClassifiers appear when speakers count or point out nouns: a unit word can identify what kind of thing is meant. The choice is lexical, so learn a noun with a common counting phrase instead of assuming the same general word fits everything.",
      "tutorial-2024", "treebank"
    ),
    syntax: cited(
      "Compare 我勿晓得, 'I don't know,' with 侬晓得何里有店伐？, 'Do you know where there is a shop?' The negative stands before the verb in the first sentence, while the second keeps the local 'where' phrase inside the question and puts 伐 at the end. Word order and final particles tell you what a speaker is doing, so reading the sentence as Mandarin with unusual pronunciation will miss part of its structure.",
      "tutorial-2024", "wiktionary-phrases"
    ),
    advancedPainPoints: [
      "Knowing when an apparently familiar Chinese character represents a different local word or grammatical particle.",
      "Hearing the boundary of a sandhi group before trying to match a written transcript to speech.",
      "Choosing between a household's urban form, a teaching standard, a younger contact-influenced form, and a neighboring Wu variety.",
      "Reading standard written Chinese aloud without assuming its vocabulary equals spontaneous Shanghainese."
    ],
    topics: [
      { title: "Local pronouns", body: cited("侬 is 'you' in familiar urban speech; 阿拉 can mean 'we' and in some uses 'our'. The teaching text contrasts 阿拉 with older local 我伲, an example of how migration can alter even common grammar words. Pronouns make a strong first listening target because they recur in every conversation and can identify which variety a recording reflects.", "tutorial-2024", "wiktionary-phrases"), example: "阿拉侪要过去个。", exampleTranslation: "We all need to go over there. This teaching-text sentence uses 阿拉 for 'we' and 侪 for 'all'." },
      { title: "Negation with 勿", body: cited("Put 勿 before a verb or predicate to make a simple negative. This differs in sound from Mandarin 不 even when the English translation is the same. Learn the whole negative phrase because the preceding and following syllables affect rhythm.", "tutorial-2024", "wiktionary-phrases"), example: "我勿晓得。", exampleTranslation: "I don't know. The urban teaching example uses 勿 before 晓得, 'know'." },
      { title: "A question with 伐", body: cited("A sentence-final 伐 can mark a yes-or-no question. In print you may encounter different characters for similar sounding final particles, so match the particular text to audio. Do not replace the local form with Mandarin 吗 and assume the utterance stayed Shanghainese.", "tutorial-2024", "wiktionary-phrases"), example: "侬晓得何里有店伐？", exampleTranslation: "Do you know where there's a shop? The final 伐 asks for an answer; 何里 supplies 'where'." },
      { title: "Progressive action", body: cited("辣海 can mark an action in progress in the tutorial's urban model. This is different from treating the character 在 in a Mandarin sentence as a ready-made local pronunciation. The same source also discusses 辣海 in location and ongoing-action contexts, so attend to the verb that follows it.", "tutorial-2024"), example: "我辣海看电影。", exampleTranslation: "I'm watching a film. 辣海 places the viewing in progress in this teaching example." },
      { title: "Possession and 个", body: cited("The particle 个 can connect a possessor to what is possessed. In casual writing, the exact character for a spoken particle can vary, but the sound and place in the phrase are what matter. Watch for the same syllable in other functions rather than translating every instance as English 'of'.", "tutorial-2024", "treebank-paper"), example: "我个书。", exampleTranslation: "My book. This is a complete noun phrase from the tutorial, used as a possession example rather than as a full sentence." },
      { title: "All and group reference", body: cited("侪 means 'all' in a local example and can tell you that a statement applies to the whole group. The placement follows the pronoun in 阿拉侪, 'all of us'. Because the teaching sentence also uses 阿拉, it gives a compact contrast with Mandarin-style wording.", "tutorial-2024"), example: "阿拉侪要过去个。", exampleTranslation: "We all need to go over there. Here 侪 expands 阿拉 from a group reference to the whole group." },
      { title: "A soft invitation", body: cited("Verb repetition can soften an action, as in 聊聊天, 'have a chat'. The tutorial's story uses this in an ordinary invitation to return to the dormitory and talk. Compare an actual conversation before applying the pattern to a new verb, since reduplication does not carry one fixed English meaning.", "tutorial-2024"), example: "阿拉回寝室聊聊天。", exampleTranslation: "Let's go back to the dorm and have a chat. The doubled 聊 makes the activity sound light and bounded." }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Urban Shanghainese is rooted in the historic center of Shanghai, but speakers also live throughout the municipality and in families elsewhere. The boundary between an urban Shanghainese speaker and a speaker of another Shanghai-area variety cannot be read from a postal address. People move, marry, switch languages, and pass on different parts of their repertoire to children.\n\nThe city government's 2025 overview maps several dialect areas inside Shanghai. The 2015 IPA illustration specifically anchors its recorded variety in Huangpu. The University of Alberta's Shanghai Spoken Corpus includes recordings made in China and Canada, a reminder that speech communities extend beyond municipal borders.",
      "shanghai-dialects", "ipa-2015", "alberta-corpus"
    ),
    regions: [
      { place: "Historic central Shanghai", note: cited("The guide's example anchor; the IPA article records a Huangpu-raised speaker and calls the variety urban Shanghai Chinese.", "ipa-2015") },
      { place: "Other districts of Shanghai municipality", note: cited("Families use urban speech alongside local suburban varieties; the 2025 municipal account distinguishes Chongming, Liantang, Songjiang, Jiabao, and downtown areas.", "shanghai-dialects") },
      { place: "Communities outside Shanghai", note: cited("Migrants and descendants carry Shanghai speech elsewhere. The Alberta corpus documents speakers in China and Canada, though that corpus does not establish a population total.", "alberta-corpus") }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "For an English-speaking beginner, urban Shanghainese demands new listening habits, character literacy for most printed material, and a willingness to work with sources that disagree in spelling or generation. A Mandarin speaker gains character knowledge and broad Sinitic grammar patterns, but still has to learn local sounds, vocabulary, and conversational use. Difficulty also depends on whether you have relatives or neighbors who can model the precise variety you want to speak.\n\nThe main bottleneck is often evidence rather than a fearsome grammatical table. There are fewer coordinated learner courses than for Standard Mandarin, and the 2019 Discover Discomfort discussion points out that much of the strongest Shanghainese material is in Chinese. That describes the available learning material, though its general ranking of 'hardest languages' is subjective.",
      "dd-hardest", "tutorial-2024", "ipa-2015"
    ),
    easierAspects: [
      "A Mandarin-literate learner already recognizes many characters and can use Chinese-language descriptions of Shanghainese.",
      "Verbs do not require separate endings for each person, so early sentences can focus on local words and sound.",
      "Recorded speech, a detailed IPA illustration, and a community tutorial give concrete comparison points."
    ],
    hardAspects: [
      "Voiced initials, short checked syllables, and vowels require listening that Mandarin pinyin does not teach.",
      "Tone sandhi changes pitch across words; isolated-character drilling does not supply natural phrase rhythm.",
      "Local character spellings and romanization differ among sources, and many tools assume Mandarin by default."
    ],
    plateauRisks: [
      "Understanding a memorized phrase list but not following connected household conversation.",
      "Reading local text as Standard Mandarin and mistaking recognition of characters for comprehension of spoken Shanghainese.",
      "Copying one older teaching model while missing ordinary variation in younger or suburban speech."
    ],
    workload: cited(
      "Plan for sustained listening and real exchanges rather than a promised number of hours to 'fluency'. For a first stage, learn a small set of verified words and questions with audio, practice their complete pitch patterns, and ask a speaker to check the forms that fit their household. Later, transcribe short clips and compare them with the IPA illustration, the 2024 tutorial, and current speech data. \n\nThe right pace depends on access to speakers and whether your goal is family conversation, linguistic reading, or performance.",
      "ipa-2015", "tutorial-2024", "treebank"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Choose the particular Shanghai speech you want to understand. Begin with the IPA article's recorded urban speaker and the tutorial's middle-generation model, then note every place they differ from a relative, colleague, or newer recording. Build your own small notebook around complete audio clips: write the characters the source uses, mark the phrase boundary, record who said it and where, and add your translation.\n\nOnce short exchanges are comfortable, ask a speaker for corrections to timing and word choice, not just single syllables. If your main source is a family member, their preferred spelling may differ from a dictionary; keep both versions rather than erasing one. For formal Chinese reading, study Standard Mandarin or standard written Chinese separately so its vocabulary does not silently replace local speech.",
      "ipa-2015", "tutorial-2024", "treebank-paper"
    ),
    mediaPractice: cited(
      "Use the 2015 IPA recording for careful sound comparison, then move to longer spoken material. The University of Alberta corpus offers documented Shanghai speech for research use, with access conditions; the UD Shanghainese treebank comes from scripted daily-use speech and explicitly focuses on middle and newer urban varieties. Those answer different questions: the first helps you hear real voices in an older collection, while the second supports word and grammar analysis but should not be mistaken for unscripted family talk.\n\nMunicipal videos and local performance such as 沪剧 can add cultural context. A stage voice, a teaching clip, and a spontaneous conversation serve different purposes. Write the genre and date beside every clip so you don't turn a theatrical line into an unmarked everyday phrase.",
      "ipa-2015", "alberta-corpus", "treebank", "shanghai-video"
    ),
    dictionariesAndCorpora: cited(
      "The Rutgers listing for Richard VanNess's Shanghainese-English dictionary and phrasebook is a path into book-length reference material. Zhu Yuhao's free 2024 tutorial offers a systematic middle-generation pronunciation course, while the Wugniu Rime project shows how an input method handles local spelling. For research, the Alberta Spoken Corpus and UD Shanghainese treebank document their data and limits. \n\nCross-check unfamiliar phrases against an audio source, especially when an online dictionary supplies only character-by-character sound.",
      "rutgers-book", "tutorial-2024", "rime-wugniu", "alberta-corpus", "treebank"
    ),
    resources: [
      { type: "book", title: "Zhu Yuhao's Shanghainese tutorial", url: "https://zhuyuhao.com/shanghainese-tutorial/", level: "beginner", description: cited("Free 2024 PDF in Chinese, with a named middle-generation urban sound model, exercises, and a Wu-oriented spelling system; best for readers comfortable with Chinese.", "tutorial-2024") },
      { type: "media", title: "Shanghai Chinese IPA illustration and audio", url: "https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/shanghai-chinese/E58F14205E5EFF63067C6A180DB7AEEA", level: "intermediate", description: cited("Scholarly sound tables and recordings of one Huangpu-raised speaker. Precise for that speaker, but not a whole-city pronunciation norm.", "ipa-2015") },
      { type: "corpus", title: "UD Shanghainese-ShUD", url: "https://universaldependencies.org/treebanks/wuu_shud/index.html", level: "advanced", description: cited("Annotated daily-use speech data focused on middle and newer urban Shanghainese; the underlying material is scripted, so check its genre before generalizing.", "treebank") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Everyday Shanghainese carries meanings that a line of standard written Chinese may flatten. The words below are anchored in a Shanghai teaching text, not gathered from a generic Mandarin list. They show family address, local question words, and social activity; the same characters may appear in other Wu varieties with different sounds.\n\nLonger expressions need even more context. A newspaper's column of Shanghai sayings preserves playful images, while a city government page explains several local turns of phrase. Some are teasing or even threatening, so recognizing them is safer than dropping them into a new conversation without a speaker's guidance.",
      "tutorial-2024", "xinmin-sayings", "shanghai-expressions"
    ),
    notableWords: [
      { term: "侬", transliteration: "non (tutorial spelling)", meaning: "you", note: cited("A familiar second-person word and a quick sign that a line is meant as local speech, not standard Mandarin dialogue.", "tutorial-2024") },
      { term: "阿拉", transliteration: "ah-la (tutorial spelling)", meaning: "we; our in some contexts", note: cited("A widely recognized Shanghai group pronoun connected in the tutorial with Ningbo influence; it doesn't mean all Wu speakers use it.", "tutorial-2024") },
      { term: "啥", transliteration: "sa (tutorial spelling)", meaning: "what", note: cited("Part of local questions such as 啥人, 'who', and 为啥, 'why'; its written character is short but the question's full shape matters.", "tutorial-2024") },
      { term: "晓得", transliteration: "shiau-teh (tutorial spelling)", meaning: "to know", note: cited("Appears in the verified negative sentence 我勿晓得, 'I don't know'. It is worth learning as a whole verb.", "tutorial-2024", "wiktionary-phrases") },
      { term: "白相", transliteration: "bah-sian (tutorial spelling)", meaning: "to play; have fun", note: cited("A locally salient verb in the tutorial's account of leisure; its first character should not be read with a Mandarin pronunciation.", "tutorial-2024") },
      { term: "事体", transliteration: "zy-thi (tutorial spelling)", meaning: "matter; thing to deal with", note: cited("A common noun for an affair or issue. Its meaning depends on context, so 'matter' is usually better than a fixed English one-word equivalent.", "tutorial-2024") },
      { term: "交关", meaning: "very; a lot", note: cited("A degree word described in Shanghai dialect research and heard in examples such as 交关开心, 'very happy'.", "jiaoguan-study", "haici-dictionary") }
    ],
    loanwordLayers: cited(
      "Shanghainese vocabulary comes from inherited Wu words, neighboring regional speech, standard written Chinese, and several periods of contact. 阿拉 is a good case of regional borrowing because a named Shanghai tutorial explains the Ningbo link and its earlier local alternative. Shanghai's treaty-port history also produced foreign-language contact, but individual loanword stories require separate evidence; a colorful English resemblance by itself proves nothing. \n\nToday Mandarin vocabulary enters many speakers' repertoires through schooling, media, and mixed conversation.",
      "tutorial-2024", "ipa-2015", "shanghai-dialects"
    ),
    idioms: [
      { original: "吃勿消", translation: "Can't take it; can't bear it.", note: "A local figurative 'can't digest it' in the municipal overview. Recognize the expression before imitating it in your own style." },
      { original: "拎勿清 / 拎不清", translation: "To be muddled or fail to grasp what matters.", note: "The municipal page explains the expression; spelling may move between local 勿 and standard 不. It can sound critical of a person." },
      { original: "脚踏西瓜皮，滑到啊里是啊里", translation: "Drift along wherever things take you.", note: "A Shanghai-language essay uses this image of slipping on watermelon rind. It is a saying, not a literal travel instruction." },
      { original: "老虎头浪拍苍蝇", translation: "Swatting a fly on a tiger's head: taking a bold risk.", note: "Recorded in a Xinmin Evening News Shanghai-sayings column; treat it as a playful, printed saying rather than a routine greeting." }
    ],
    textGenres: [
      "Family conversations and neighborhood talk, where local pronouns and question particles live.",
      "沪剧 and other performed dialogue, which show rhythm and cultural history but shaped by stage style.",
      "Shanghai-language essays and newspaper columns that deliberately spell local words.",
      "Modern corpora and scripted daily-use speech recordings, valuable when their collection method is stated.",
      "Teaching dialogues and phrasebooks, which provide controlled examples rather than proof of every household's usage."
    ]
  },
  relationships: {
    overview: cited(
      "Shanghainese and Suzhou speech are relatives within Wu, while Mandarin and Cantonese belong to other Sinitic branches. Shared Chinese characters and many cognates show historical connection; they do not make ordinary conversation automatically understandable across branches. Contact adds another layer: Shanghai speech took in forms from neighboring Wu communities and later from Mandarin, so a similarity can come from common ancestry, borrowing, or both.\n\nWu itself is diverse. Urban Shanghai, Suzhou, Ningbo, and Wenzhou should not be collapsed into a single example set. People may understand neighboring varieties to different degrees depending on exposure, age, and topic; the guide avoids a blanket mutual-intelligibility percentage.",
      "glottolog", "ipa-2015", "shanghai-dialects", "dd-facts"
    ),
    languages: [
      { name: "Mandarin Chinese", slug: "mandarin-chinese", relationship: "A separate Sinitic branch and the dominant school standard in Shanghai", explanation: cited("Characters and some grammatical patterns overlap, but local urban speech has its own consonants, tone sandhi, vocabulary, and particles. Mandarin knowledge helps with reading sources, not automatic spoken understanding.", "ipa-2015", "dd-facts") },
      { name: "Cantonese", slug: "cantonese", relationship: "Another Sinitic branch, Yue", explanation: cited("Cantonese and Shanghainese share deep Sinitic history and character-based writing, yet they are distinct spoken systems. The IPA account notes historical Cantonese contact in Shanghai without treating it as the source of Wu classification.", "ipa-2015", "glottolog") },
      { name: "Taiwanese Hokkien", slug: "taiwanese-hokkien", relationship: "A Min Sinitic variety", explanation: cited("Hokkien illustrates another regional Chinese speech tradition with its own pronunciation and writing choices. Its similarities to Shanghainese cannot be assumed to mean that one is a dialect of the other.", "glottolog", "wiki-shanghainese") },
      { name: "Suzhounese", relationship: "A neighboring Taihu Wu variety", explanation: cited("Suzhou had earlier prestige in northern Wu and contributed to Shanghai's contact history. Its speech is related to urban Shanghainese but remains a distinct local variety.", "ipa-2015", "tutorial-2024") }
    ]
  },
  culturalNotes: "上海闲话 is a way to name local belonging, but no one must speak it to count as a Shanghai resident. City families have different migration histories and language choices. An opera scene, an older neighbor's story, and a younger person's chat can all be part of Shanghainese life while sounding different from one another.",
  resources: [
    { type: "book", title: "Zhu Yuhao, A Tutorial in the Shanghainese Language", url: "https://zhuyuhao.com/shanghainese-tutorial/", level: "beginner", description: cited("Free Chinese-language PDF updated in 2024. Strong for a systematic urban pronunciation model; its explicit standard choice is a teaching decision.", "tutorial-2024") },
    { type: "media", title: "Chen and Gussenhoven, Shanghai Chinese", url: "https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/shanghai-chinese/E58F14205E5EFF63067C6A180DB7AEEA", level: "intermediate", description: cited("Peer-reviewed phonetic account with recordings and a documented Huangpu speaker. Use it for sound comparisons, with its speaker scope in mind.", "ipa-2015") },
    { type: "book", title: "Shanghainese-English/English-Shanghainese Dictionary and Phrasebook", url: "https://alc.rutgers.edu/component/content/article/77-shanghainese-englishenglish-shanghainese-dictionary-and-phrasebook?Itemid=137&catid=44%3Afaculty-bookshelf", level: "all", description: cited("Rutgers' description of Richard VanNess's book. A compact bilingual reference; check a contemporary speaker for household-specific usage.", "rutgers-book") },
    { type: "corpus", title: "Shanghai Spoken Corpus 1.0", url: "https://sites.ualberta.ca/~johnnewm/SC/Shanghai/SSC.html", level: "advanced", description: cited("University of Alberta recordings from China and Canada, distributed free to qualifying noncommercial researchers; the collection page dates to 2010.", "alberta-corpus") },
    { type: "corpus", title: "UD Shanghainese-ShUD", url: "https://universaldependencies.org/treebanks/wuu_shud/index.html", level: "advanced", description: cited("Annotated middle and newer urban speech data drawn from scripted daily-use recordings. Supports linguistic queries, with genre limits.", "treebank") },
    { type: "app", title: "Rime Wugniu input scheme", url: "https://github.com/rime/rime-wugniu", level: "intermediate", description: cited("Community input scheme for Shanghai Wu, with older and newer pronunciations. It helps type local material but does not settle spelling disputes.", "rime-wugniu") },
    { type: "other", title: "Discover Discomfort: The Four Hardest Languages to Learn", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", level: "all", description: cited("Includes a short Shanghainese-specific note on scarce resources and Chinese-language learning material. Its broad difficulty ranking is personal, not a Shanghainese curriculum.", "dd-hardest") },
    { type: "other", title: "Discover Discomfort: Chinese Language Facts", url: "https://discoverdiscomfort.com/chinese-language-facts/", level: "all", description: cited("Introduces the distinction among Mandarin, Cantonese, and Shanghainese for general readers. Use the specialist resources above for local grammar and pronunciation.", "dd-facts") }
  ],
  relatedLanguages: [
    { name: "Mandarin Chinese", slug: "mandarin-chinese", relationship: "Sinitic relative and school language", explanation: cited("It shares characters with Shanghainese, yet everyday spoken forms are distinct.", "ipa-2015") },
    { name: "Cantonese", slug: "cantonese", relationship: "Yue Sinitic relative", explanation: cited("Another branch of Sinitic with its own oral system and vernacular writing practices.", "glottolog") },
    { name: "Taiwanese Hokkien", slug: "taiwanese-hokkien", relationship: "Min Sinitic relative", explanation: cited("A separate Chinese variety that helps show why the broad label 'Chinese' needs a named spoken anchor.", "glottolog") },
    { name: "Suzhounese", relationship: "Neighboring Wu variety", explanation: cited("Related through Taihu Wu, with a different local history and sound system.", "ipa-2015") }
  ],
  phrases: [
    { original: "侬好。", transliteration: "non hau (Wugniu-style, tones omitted)", translation: "Hello.", usageNote: "Urban phrase-list form. Verify the whole greeting with a speaker rather than reading Mandarin nǐ hǎo." },
    { original: "再会。", transliteration: "tse-we (Wugniu-style, tones omitted)", translation: "Goodbye.", usageNote: "A farewell in the labeled phrase collection; actual parting expressions vary by person and setting." },
    { original: "谢谢侬。", transliteration: "zhia-zhia non (Wugniu-style, tones omitted)", translation: "Thank you.", usageNote: "The added 侬 addresses the person thanked; hear the full phrase before imitating the rhythm." },
    { original: "对勿起。", transliteration: "te-veq-chi (Wugniu-style, tones omitted)", translation: "Sorry.", usageNote: "Local negative 勿 appears inside this apology; character spelling is not fully standardized." },
    { original: "我勿晓得。", transliteration: "ngu veq-shiau-teq (Wugniu-style, tones omitted)", translation: "I don't know.", usageNote: "Also printed as a complete example in the Shanghai tutorial." },
    { original: "夜饭吃过了伐？", transliteration: "ya-ve chiq-ku-leq-va (Wugniu-style, tones omitted)", translation: "Have you eaten dinner?", usageNote: "A context-dependent social question, not an all-purpose English 'hello'." },
    { original: "侬英文会得讲伐？", transliteration: "non in-ven we-teq kaon va (Wugniu-style, tones omitted)", translation: "Do you speak English?", usageNote: "Use when that question is genuinely relevant; 伐 ends the question." },
    { original: "现在几点钟？", transliteration: "yi-ze ci-ti-tson (Wugniu-style, tones omitted)", translation: "What time is it now?", usageNote: "The characters look familiar to Mandarin readers, but the local sounds differ." },
    { original: "到阿拉屋里向来白相！", transliteration: "tau aq-la oq-li-shian le beq-shian (Wugniu-style, tones omitted)", translation: "Come over to our home and hang out!", usageNote: "An informal invitation from the phrase appendix; 白相 means to play or enjoy oneself." },
    { original: "汏手间勒勒何里耷？", transliteration: "da-seu-ke laq-laq gha-li-taq (Wugniu-style, tones omitted)", translation: "Where's the restroom?", usageNote: "A practical location question from the phrase appendix. Confirm the local word for restroom with the person you're addressing." }
  ],
  sources: [
    { id: "wiki-shanghainese", title: "Shanghainese", url: "https://en.wikipedia.org/wiki/Shanghainese", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "glottolog", title: "Shanghainese classification", url: "https://glottolog.org/resource/languoid/id/shan1293", publisher: "Glottolog", accessedAt: "2026-09-27" },
    { id: "ipa-2015", title: "Shanghai Chinese", url: "https://www.cambridge.org/core/journals/journal-of-the-international-phonetic-association/article/shanghai-chinese/E58F14205E5EFF63067C6A180DB7AEEA", publisher: "Journal of the International Phonetic Association", publishedAt: "2015-12-15", accessedAt: "2026-09-27" },
    { id: "tutorial-2024", title: "标准上海话简明教程: 通用吴语拼音教程", url: "https://zhuyuhao.com/shanghainese-tutorial/", publisher: "Zhu Yuhao", updatedAt: "2024-06-01", accessedAt: "2026-09-27" },
    { id: "shanghai-dialects", title: "Shanghai dialects", url: "https://english.shanghai.gov.cn/en-Overview/20231209/5a1a5c857ccb4b2280aefa3ba7fa836b.html", publisher: "Shanghai Municipal Government", publishedAt: "2025-04-30", accessedAt: "2026-09-27" },
    { id: "shanghai-expressions", title: "Shanghai dialect", url: "https://english.shanghai.gov.cn/en-LearnChinese/20231211/37d2e658b13b42b2a61f873a568535c2.html", publisher: "Shanghai Municipal Government", publishedAt: "2023-12-11", accessedAt: "2026-09-27" },
    { id: "heritage-2022", title: "Factors impacting learners' proficiency in the heritage language Shanghainese", url: "https://ora.ox.ac.uk/objects/uuid:76961dda-2a89-4781-b38d-4f0cc24f62de", publisher: "Oxford University Research Archive", accessedAt: "2026-09-27" },
    { id: "treebank", title: "UD Shanghainese-ShUD", url: "https://universaldependencies.org/treebanks/wuu_shud/index.html", publisher: "Universal Dependencies", accessedAt: "2026-09-27" },
    { id: "treebank-paper", title: "Shanghainese Universal Dependencies treebank paper", url: "https://aclanthology.org/2025.udw-1.20.pdf", publisher: "Association for Computational Linguistics", accessedAt: "2026-09-27" },
    { id: "alberta-corpus", title: "Shanghai Spoken Corpus 1.0", url: "https://sites.ualberta.ca/~johnnewm/SC/Shanghai/SSC.html", publisher: "University of Alberta", updatedAt: "2010-05-17", accessedAt: "2026-09-27" },
    { id: "rutgers-book", title: "Shanghainese-English/English-Shanghainese Dictionary and Phrasebook", url: "https://alc.rutgers.edu/component/content/article/77-shanghainese-englishenglish-shanghainese-dictionary-and-phrasebook?Itemid=137&catid=44%3Afaculty-bookshelf", publisher: "Rutgers University", accessedAt: "2026-09-27" },
    { id: "wiktionary-phrases", title: "Appendix: Basic Chinese phrases, Shanghainese section", url: "https://en.wiktionary.org/wiki/Appendix:Basic_Chinese_phrases", publisher: "Wiktionary", accessedAt: "2026-09-27" },
    { id: "omniglot-phrases", title: "Useful Shanghainese phrases", url: "https://www.omniglot.com/language/phrases/shanghainese.php", publisher: "Omniglot", accessedAt: "2026-09-27" },
    { id: "rime-wugniu", title: "Rime Wugniu input scheme", url: "https://github.com/rime/rime-wugniu", publisher: "Rime community", accessedAt: "2026-09-27" },
    { id: "tts-sandhi", title: "Improving TTS for Shanghainese: Addressing Tone Sandhi via Word Segmentation", url: "https://arxiv.org/abs/2307.16199", publisher: "arXiv", accessedAt: "2026-09-27" },
    { id: "shanghai-video", title: "Speak Shanghainese: Love talks for Qixi", url: "https://english.shanghai.gov.cn/en-LearnChinese/20250829/38999066acb0414eaee9620753fed420.html", publisher: "Shanghai Municipal Government", publishedAt: "2025-08-29", accessedAt: "2026-09-27" },
    { id: "xinmin-sayings", title: "Shanghai sayings in Xinmin Evening News", url: "https://xmwb.xinmin.cn/resfile/2013-01-02/B04/B04.pdf", publisher: "Xinmin Evening News", publishedAt: "2013-01-02", accessedAt: "2026-09-27" },
    { id: "jiaoguan-study", title: "上海话‘交关’的共时用法和历时演变", url: "https://www.fx361.com/page/2023/1216/23626658.shtml", publisher: "Reference Network", publishedAt: "2023-12-16", accessedAt: "2026-09-27" },
    { id: "haici-dictionary", title: "上海话方言词典", url: "https://shh.dict.cn/", publisher: "Dict.cn", accessedAt: "2026-09-27" },
    { id: "dd-hardest", title: "The Four Hardest Languages to Learn for English Speakers", url: "https://discoverdiscomfort.com/hardest-languages-to-learn/", publisher: "Discover Discomfort", updatedAt: "2023-09-15", accessedAt: "2026-09-27" },
    { id: "dd-facts", title: "20+ Chinese Language Facts", url: "https://discoverdiscomfort.com/chinese-language-facts/", publisher: "Discover Discomfort", accessedAt: "2026-09-27" }
  ],
  seo: {
    title: "Shanghainese (Wu Chinese): Sounds, Grammar, Writing, and Urban Speech",
    description: "Explore urban Shanghainese through its Wu Chinese history, tone sandhi, local grammar, flexible character writing, verified phrases, cultural texts, and carefully scoped listening resources."
  }
};
