import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Hindi",
    slug: "hindi",
    relationship: "The other standardized register of Hindustani",
    explanation: cited(
      "Urdu and Hindi share a Hindustani grammar and much everyday vocabulary. A speaker from Lahore and one from Delhi can often understand each other's informal speech, though accent and vocabulary still vary.\n\nTheir written standards differ more. Urdu normally uses Nastaliq and draws on Persian and Arabic for much formal vocabulary; Hindi uses Devanagari and often draws on Sanskrit. Film dialogue and songs commonly use the shared conversational ground.",
      "wiki-hindustani",
      "wiki-urdu"
    )
  },
  {
    name: "Punjabi",
    relationship: "Closely related Indo-Aryan neighbor in sustained contact",
    explanation: cited(
      "Punjabi and Urdu are related Indo-Aryan languages. Many Pakistanis use Punjabi at home and Urdu in school, media, or conversations across regions. Their speech can influence each other's accents and idioms, while Punjabi keeps its own grammar and literary traditions in Shahmukhi and Gurmukhi scripts.",
      "glottolog-urdu",
      "pbs-census"
    )
  },
  {
    name: "Persian",
    slug: "persian",
    relationship: "Distant Indo-Iranian relative with deep literary influence",
    explanation: cited(
      "Persian belongs to a different branch of Indo-Iranian. Persianate administration, schools, and poetry gave Urdu an alphabet, the izafat linker, literary genres, and many words. Urdu kept its Indo-Aryan sentence patterns, so shared script and vocabulary do not make the two languages mutually intelligible.",
      "utexas-vocabulary",
      "wiki-urdu"
    )
  },
  {
    name: "Arabic",
    slug: "arabic",
    relationship: "Semitic source language for learned and religious vocabulary",
    explanation: cited(
      "Arabic belongs to the Semitic family. Urdu borrowed Arabic words, often through Persian, and fits them into Indo-Aryan grammar: کتاب kitāb, ‘book,’ takes Urdu postpositions and plural forms. Urdu also adds script letters for local sounds and normally uses Nastaliq typography, so knowing Arabic script is a head start rather than complete Urdu literacy.",
      "utexas-vocabulary",
      "unicode-arabic",
      "wiki-urdu"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const urduGuide = {
  slug: "urdu",
  name: "Urdu",
  autonym: "اُردُو",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Urdu shares everyday Hindustani speech with Hindi and carries its own Nastaliq writing tradition. This guide follows its sounds, grammar, social registers, literature, and living communities.",
  family: "Indo-European, Indo-Aryan",
  macroRegion: "South Asia",
  primaryScript: "Nastaliq Perso-Arabic script",
  difficultyLabel: "Demanding",
  learnerHook: "Start with an Urdu conversation and you may recognize lines from a Hindi film. Open an Urdu newspaper or ghazal and Nastaliq script, formal vocabulary, and literary convention ask for new skills.",
  hero: {
    imageAlt: "Urdu in flowing Nastaliq beside contemporary printed and digital text.",
    callToActionLabel: "Explore Urdu in use"
  },
  classification: "Perso-Arabic-script standard of the Hindustani continuum",
  speakerCommunity: "Urdu is Pakistan's national language, and people with many home languages use it to speak across regions. The 2023 Pakistan census recorded Urdu as the mother tongue of 9.25 percent of residents; that measure leaves out its many additional-language speakers.\n\nIndia recognizes Urdu in its Constitution, and communities sustain it through home speech, schools, publishing, and performance. Diaspora speakers also use it across the Gulf, Britain, North America, and Australia. People may call shared conversational speech Urdu, Hindi, or Hindustani according to family, place, and identity.",
  facts: [
    { label: "Family", value: "Indo-European · Indo-Iranian · Indo-Aryan" },
    { label: "Shared speech base", value: "Hindustani / Hindi–Urdu" },
    { label: "Pakistan", value: "National language; 9.25% reported it as mother tongue in the 2023 census" },
    { label: "India", value: "One of 22 languages recognized in the Eighth Schedule" },
    { label: "Script", value: "Right-to-left Perso-Arabic alphabet, normally in Nastaliq style" },
    { label: "Literary touchstones", value: "Ghazal, nazm, short story, novel, criticism, journalism, film song, and dramatic dialogue" }
  ],
  introduction: cited("Urdu (اردو) is an Indo-Aryan language spoken in Pakistan, India, and South Asian communities around the world. It is Pakistan's national language and a shared language for many Pakistanis whose home languages are Punjabi, Pashto, Sindhi, or others; in India, Urdu remains a home, literary, and public language in several regions. Everyday Urdu and Hindi share much of their grammar and conversational vocabulary, while their written standards use different scripts and, especially in formal settings, different word choices.\n\nUrdu is usually written right to left in a Perso-Arabic script, often in the sloping Nastaliq style seen in books, newspapers, and poetry. Its letters connect in changing shapes, and ordinary text usually omits the marks for short vowels, so a written word often relies on context. The ghazal gives Urdu a recognizable literary form: its paired lines and repeated patterns have long circulated in recitation, song, print, and now online.", "glottolog-urdu", "pbs-census", "uchicago-urdu", "utexas-script", "columbia-ghazal"),
  origins: {
    overview: cited(
      "Urdu grew from Indo-Aryan speech in multilingual South Asia. People in northern cities and the Deccan used local speech alongside Persian, a language of courts and learning, while poets and storytellers drew on several traditions.\n\nWriters called related forms Hindavi, Hindi, Dehlavi, Dakhini, Rekhta, and Hindustani at different times. Those names did not mark today's national borders. A recognizable Urdu literary standard took shape gradually, with no single founding day or city.",
      "wiki-urdu",
      "wiki-hindustani",
      "uchicago-urdu"
    ),
    timeline: [
      {
        period: "13th–16th centuries",
        event: cited(
          "Vernacular Indo-Aryan speech in and around Delhi circulated within a Persianate cultural world. Writers used several labels for related vernaculars, and multilingual composition crossed boundaries that later histories sometimes present as fixed. Persian supplied prestige vocabulary and literary models without replacing the language's Indo-Aryan grammatical base.",
          "wiki-urdu",
          "wiki-hindustani"
        )
      },
      {
        period: "15th–18th centuries",
        event: cited(
          "Dakhini literature flourished in the Deccan, while the mixed poetic idiom often called Rekhta gained increasing prestige in northern centers. The ghazal adapted a Persian form to South Asian linguistic and imaginative settings. Delhi and later Lucknow became famous nodes, but neither city exhausts the language's history.",
          "wiki-urdu",
          "columbia-ghazal"
        )
      },
      {
        period: "18th–19th centuries",
        event: cited(
          "The name Urdu became increasingly established for a literary standard. Poets including Mir and Ghalib worked within a sophisticated ghazal culture, while prose expanded through religious writing, translation, education, printing, journalism, and new genres. Colonial institutions helped codify both Hindi and Urdu, often sharpening script and vocabulary distinctions that had once been more fluid.",
          "wiki-urdu",
          "columbia-ghazal"
        )
      },
      {
        period: "Late 19th century–1947",
        event: cited(
          "Language became entangled with education, religion, and nationalism. Campaigns for Urdu in Perso-Arabic script and Hindi in Devanagari converted a flexible continuum into competing public standards. Yet theatre, song, publishing, and everyday conversation continued to cross that line.",
          "wiki-hindustani",
          "wiki-urdu"
        )
      },
      {
        period: "1947 to the digital present",
        event: cited(
          "Pakistan adopted Urdu as the national language even though most citizens had another mother tongue. India kept Urdu in its Eighth Schedule and in several regional public settings. Migration reshaped Urdu literary life in Karachi, Lahore, Delhi, Hyderabad, Lucknow, and the diaspora.\n\nFilm and television carried widely understood Hindustani across borders, while messaging encouraged Roman Urdu. Digital archives and searchable Nastaliq text now give readers new ways into print and manuscript traditions.",
          "nlpd-pakistan",
          "pbs-census",
          "unicode-arabic",
          "rekhta-dictionary"
        )
      }
    ],
    contactHistory: cited(
      "Everyday words such as پانی pānī, ‘water,’ and آنا ānā, ‘to come,’ sit beside Persian and Arabic loans. Regional languages, Turkic languages, Portuguese, and English have also supplied words. Arabic words often came through Persian, and speakers fit borrowed words into Urdu pronunciation and grammar.\n\nPersian also passed on the izafat linker and familiar poetic images. Today a speaker may choose an inherited word, a Persian-Arabic near-synonym, or an English term according to audience and topic. Listen to the choice in a sentence before assigning an entire register to a word's origin.",
      "wiki-urdu",
      "platts-dictionary",
      "utexas-vocabulary"
    ),
    standardization: cited(
      "Schools teach standard Urdu grammar and Perso-Arabic spelling. Pakistan's National Language Promotion Department develops terminology, while publishers, broadcasters, dictionaries, and teachers also shape public usage.\n\nA formal speech may favor Persian-Arabic words and carefully distinguish sounds that local conversation merges. Both belong to Urdu. Calls for ‘pure Urdu’ express a social preference; contact has shaped the language throughout its history.",
      "nlpd-pakistan",
      "wiki-urdu",
      "uchicago-urdu"
    )
  },
  variants: {
    overview: cited(
      "Region, home language, generation, and audience all shape Urdu speech. A Punjabi-speaking Lahori, a Karachi family, an Old Delhi household, and a Hyderabadi Dakhini speaker may share an Urdu identity while using different rhythms and words.\n\nA single speaker can use colloquial Hindustani with friends, a Persianized style in formal writing, and English terms at work. Each choice serves its setting.",
      "pbs-census",
      "wiki-urdu",
      "wiki-hindustani"
    ),
    items: [
      {
        name: "Standard Pakistani Urdu",
        note: cited(
          "The school, publishing, news, and national public norm in Pakistan. It is widely used as an additional language, so regional accents and code-switching are normal parts of its life. Formal vocabulary can be markedly Persian-Arabic, while ordinary broadcasts often remain broadly accessible.",
          "nlpd-pakistan",
          "pbs-census"
        )
      },
      {
        name: "Indian Urdu",
        note: cited(
          "A standard with major historical centers including Delhi, Lucknow, Hyderabad, and Aligarh and living use across several states. It shares the standard literary tradition while local speech reflects neighboring Hindi, Dakhini, Punjabi, Kashmiri, Bengali, Marathi, and other ecologies.",
          "uchicago-urdu",
          "wiki-urdu"
        )
      },
      {
        name: "Dakhini",
        note: cited(
          "A southern Indo-Aryan variety with a centuries-old literary history and contemporary speech communities, especially around Hyderabad and elsewhere in the Deccan. Treating it merely as ‘incorrect northern Urdu’ erases its own grammar, vocabulary, and cultural archive.",
          "wiki-urdu",
          "uchicago-urdu"
        )
      },
      {
        name: "Colloquial Hindustani",
        note: cited(
          "The large shared conversational zone in which many Urdu and Hindi speakers communicate with little difficulty. Boundaries become clearer when the script is visible or the topic demands formal, religious, legal, or literary vocabulary. Cinema dialogue and songs often work inside this shared zone.",
          "wiki-hindustani",
          "wiki-hindustani-grammar"
        )
      },
      {
        name: "Roman Urdu and digitally mixed Urdu",
        note: cited(
          "Latin-script Urdu is ubiquitous in messages, search, advertising, and diaspora conversation, frequently mixed with English. It has no single spelling norm: مجھے might appear as mujhe, mjhe, or mughe. That flexibility makes it immediate for conversation but poor as the only route to precise pronunciation, dictionary use, and literature.",
          "unicode-arabic",
          "rekhta-dictionary"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Urdu distinguishes sounds by tongue position, breath, vowel length, and nasalization. To say dental ت t, touch near the upper teeth; for retroflex ٹ ṭ, curl the tongue tip back. These are different consonants, not strong and weak versions of an English t.\n\nA following ھ marks a breathy release in pairs such as پ p and پھ ph. Persian-Arabic loan letters include ق q, خ x, غ ġ, ژ zh, and ف f. Their pronunciation varies by region and setting, so first learn the spelling and then listen to your target speakers.",
      "utexas-script",
      "wiki-hindustani-grammar"
    ),
    script: "Urdu Nastaliq; transliteration here marks retroflexion with dots and long vowels with macrons",
    soundSystem: cited(
      "Short and long vowels can separate words. Urdu also contrasts plain, aspirated, voiced, and breathy stops, such as k, kh, g, and gh. A final ں can signal a nasalized vowel, as in میں maiṅ, ‘I.’\n\nRoman kh can hide two different spellings: aspirated کھ and the fricative خ, made with air passing over the back of the tongue. Check the Urdu script and a recording together. Careful pronunciation may also keep the doubled middle consonant of محبت muḥabbat, ‘love.’",
      "utexas-script",
      "wiki-urdu"
    ),
    prosody: cited(
      "English-style heavy stress can make Urdu sound abrupt. Vowel length, phrase rhythm, and intonation all help a sentence sound natural, and a question need not end with an English rise. Imitate whole clauses from one speaker before borrowing individual sounds from many accents.\n\nIn a ghazal, a set meter shapes the line. In a film song, music may stretch a vowel beyond its length in ordinary speech. Keep those performances distinct from your model for conversation.",
      "columbia-ghazal",
      "columbia-modules"
    ),
    learnerTraps: [
      "Reading every ت / ٹ and د / ڈ pair as the same English sound",
      "Confusing aspirated consonants such as کھ with fricatives such as خ because both may be romanized kh",
      "Guessing omitted short vowels from the script without checking a recording or dictionary",
      "Over-pronouncing q, gh, and zh in casual speech, or erasing them when reading a careful formal text",
      "Using English-style heavy stress while shortening Urdu long vowels"
    ],
    sampleWords: [
      { original: "تال", transliteration: "tāl", translation: "rhythm / beat", note: "Dental t: the tongue approaches the teeth." },
      { original: "ٹال", transliteration: "ṭāl", translation: "postpone", note: "Retroflex ṭ contrasts with dental t." },
      { original: "پَل", transliteration: "pal", translation: "moment", note: "Short a and unaspirated p." },
      { original: "پھل", transliteration: "phal", translation: "fruit", note: "The added breath belongs to aspirated ph." },
      { original: "کَل", transliteration: "kal", translation: "yesterday or tomorrow", note: "Context resolves the famous time-direction ambiguity." },
      { original: "خال", transliteration: "xāl / khāl", translation: "mole, beauty mark", note: "خ is a back fricative, distinct from aspirated کھ." },
      { original: "میں", transliteration: "maiṅ", translation: "I", note: "The vowel is nasalized; compare postposition میں meṅ ‘in’." },
      { original: "قلم", transliteration: "qalam", translation: "pen", note: "Careful q may merge toward k in some everyday accents." }
    ]
  },
  writing: {
    overview: cited(
      "Urdu reads right to left and usually appears in the sloping Nastaliq style. Letters change shape when they join, though some never join to the next letter. Urdu uses ٹ ṭ, ڈ ḍ, ڑ ṛ, combinations with ھ for aspirated sounds, and ں for nasalized vowels.\n\nMost prose leaves short vowels unwritten. Readers identify a word through its consonants, long-vowel letters, and context. Start by reading frequent whole words while you learn how their letters connect.",
      "unicode-arabic",
      "unicode-chapter9",
      "wiki-urdu"
    ),
    primaryScript: "Perso-Arabic alphabet in Nastaliq style",
    romanization: cited(
      "People write Roman Urdu in messages and searches without a single spelling standard. A typed kh can hide either کھ or خ, and an unmarked long vowel can disappear into an English-looking spelling. This guide marks long vowels and retroflex consonants for learning; ordinary messages rarely do.\n\nSave new words in Urdu script with audio once you know their sound.",
      "unicode-arabic",
      "rekhta-dictionary"
    ),
    spellingNorms: cited(
      "Urdu spelling often keeps letters that current pronunciation merges. Several Arabic-derived letters sound like z, and words preserve their established spelling even where local speech changes a consonant. Learn ہ and ح, the two ye forms, hamza, izafat, and the aspirated pairs in actual words.\n\nUnicode stores the characters; a font and shaping software draw them in Nastaliq. Type the ordinary characters rather than pasted presentation forms. Then check that you can select and search the text you wrote.",
      "unicode-arabic",
      "unicode-chapter9",
      "nlpd-pakistan"
    ),
    styleNotes: [
      cited(
        "Nastaliq's diagonal flow makes word silhouettes less linear than Naskh. Start with frequent whole words—ہے hai, نہیں nahīṅ, میں maiṅ/meṅ—while still learning how each letter joins.",
        "unicode-arabic"
      ),
      cited(
        "Primers and dictionaries may add vowel marks, but ordinary prose usually leaves them out. Pair a new word with audio rather than guessing its vowels from the letters alone.",
        "platts-dictionary",
        "rekhta-dictionary"
      ),
      cited(
        "Choose a readable Nastaliq font and enough line height for its descending shapes. Check selection, search, and copy-paste too, especially in a mixed English-Urdu document.",
        "unicode-chapter9"
      )
    ]
  },
  grammar: {
    overview: cited(
      "Urdu shares its basic grammar with Hindi. A neutral sentence usually puts its verb last, places short relation words after nouns, and distinguishes masculine and feminine agreement. Those relation words are called postpositions: گھر میں ghar meṅ means ‘in the house.’\n\nVerbs combine participles with forms of ہونا honā, ‘to be,’ to show when an event happens and how it unfolds. Nouns can change shape before a postposition. In some completed actions, the doer takes نے ne and the verb may agree with the object instead.",
      "wiki-hindustani-grammar",
      "msu-basic-urdu",
      "wiki-hindustani",
      "wiki-urdu"
    ),
    typologicalProfile: cited(
      "A neutral Urdu clause often follows subject–object–verb order. Speakers can move a word to highlight it because postpositions and agreement help show its role. Endings on nouns, adjectives, and verbs work with small helper verbs; grammarians call these auxiliaries.\n\nA book can have feminine grammatical gender without any natural sex. Respectful آپ āp takes plural-style verb agreement even when you address one person. Learn both patterns through full sentences spoken to someone in a clear setting.",
      "wiki-hindustani-grammar"
    ),
    morphology: cited(
      "Many masculine nouns ending in -ā change before a postposition: لڑکا laṛkā, ‘boy,’ becomes لڑکے laṛke in لڑکے کے ساتھ, ‘with the boy.’ Feminine nouns have other patterns. Some adjectives change to match a noun, as اچھا acchā, ‘good,’ becomes اچھی acchī before feminine کتاب kitāb, ‘book.’\n\nA verb stem combines with forms for habitual or completed action and with a helper verb. Urdu also builds many expressions from a noun plus a verb, or from two verbs together. You can learn these as reusable phrases before naming every grammatical form.",
      "wiki-hindustani-grammar",
      "platts-dictionary"
    ),
    syntax: cited(
      "Urdu places relation words after a noun: گھر میں ghar meṅ means ‘in the house.’ It commonly pairs جو jo, ‘who’ or ‘which,’ with وہ voh, ‘that one,’ to link two clauses. For a plain negative statement, speakers usually use نہیں nahīṅ; commands and wishes may use نہ na.\n\nSince the verb often comes last, hold the people and their postpositions in mind while you listen. Then let the final verb complete the sentence instead of translating each word at once.",
      "wiki-hindustani-grammar"
    ),
    advancedPainPoints: [
      "Predicting noun gender and maintaining agreement across a long phrase",
      "Applying perfective ergativity without treating ne as a universal past-tense marker",
      "Choosing plain, respectful, or intimate pronouns and verb forms consistently",
      "Understanding compound-verb nuance rather than translating both verbs literally",
      "Reading izafat and highly Persianized noun phrases that omit familiar Hindustani cues"
    ],
    topics: [
      {
        title: "Gender and agreement",
        body: cited(
          "Urdu has masculine and feminine grammatical gender. Adjectives and participles that can inflect agree with the relevant noun, and the copula agrees for number or honorificity. Gender must be learned with a noun: کتاب kitāb ‘book’ is feminine, despite having no transparent final marker.",
          "wiki-hindustani-grammar"
        ),
        example: "یہ نئی کتاب بہت اچھی ہے۔ yeh naī kitāb bahut acchī hai.",
        exampleTranslation: "This new book is very good. (naī and acchī are feminine singular.)"
      },
      {
        title: "Postpositions and the oblique case",
        body: cited(
          "A noun or pronoun commonly takes an oblique form before a postposition. Thus لڑکا laṛkā ‘boy’ becomes لڑکے laṛke before کے ساتھ ke sāth ‘with.’ Pronouns have special forms such as مجھ mujh and ہم ham in postpositional phrases.",
          "wiki-hindustani-grammar"
        ),
        example: "میں لڑکے کے ساتھ بازار جا رہی ہوں۔ maiṅ laṛke ke sāth bāzār jā rahī hūṅ.",
        exampleTranslation: "I (female speaker) am going to the market with the boy."
      },
      {
        title: "Habitual, progressive, and perfective aspect",
        body: cited(
          "Urdu shows whether an action is habitual, ongoing, or treated as complete. The habitual participle describes a regular pattern, and رہنا rahnā helps form an ongoing action. A helper verb then places that action in time.\n\nLearn these forms together in complete clauses.",
          "wiki-hindustani-grammar"
        ),
        example: "وہ ہر روز پڑھتی ہے، مگر ابھی سو رہی ہے۔ voh har roz paṛhtī hai, magar abhī so rahī hai.",
        exampleTranslation: "She studies every day, but right now she is sleeping."
      },
      {
        title: "Perfective ergativity with نے ne",
        body: cited(
          "In many perfective clauses with a transitive verb, the agent takes نے ne. The verb agrees with an unmarked object; if the object is marked by کو ko, the verb often appears in masculine singular default form. This split pattern is conditioned by aspect and transitivity, not simply by past time.",
          "wiki-hindustani-grammar"
        ),
        example: "عائشہ نے چٹھی لکھی۔ ʿĀʾishah ne chiṭṭhī likhī.",
        exampleTranslation: "Aisha wrote the letter. (likhī agrees with feminine chiṭṭhī.)"
      },
      {
        title: "Compound verbs and event texture",
        body: cited(
          "Urdu often pairs a main verb with a second, lighter verb such as لینا lenā, ‘take,’ or دینا denā, ‘give.’ The second verb can add a sense of completion or an action done for someone. In لکھ دینا likh denā, the speaker asks someone to write something down for them.",
          "wiki-hindustani-grammar"
        ),
        example: "براہِ کرم اپنا پتا لکھ دیجیے۔ barāh-e karam apnā patā likh dījiye.",
        exampleTranslation: "Please write down your address (for me/us)."
      },
      {
        title: "Respect, pronouns, and imperatives",
        body: cited(
          "تو tū is intimate and can be insulting outside close or devotional contexts; تم tum is familiar; آپ āp is respectful and takes plural-style agreement. Imperatives likewise range from کر kar to کرو karo to کیجیے kījiye. Social choice cannot be repaired by correct dictionary vocabulary alone.",
          "wiki-hindustani-grammar",
          "utexas-dialogue"
        ),
        example: "آپ کہاں رہتے ہیں؟ āp kahāṅ rahte haiṅ? / آپ کہاں رہتی ہیں؟ āp kahāṅ rahtī haiṅ?",
        exampleTranslation: "Where do you live? (respectful; masculine / feminine addressee.)"
      },
      {
        title: "Relative–correlative sentences",
        body: cited(
          "Urdu often answers a relative جو jo ‘who/which/that’ with a correlative وہ voh ‘that one.’ This balanced structure is common in speech, proverbs, and formal prose and does not map word-for-word onto the English relative clause.",
          "wiki-hindustani-grammar"
        ),
        example: "جو محنت کرتا ہے، وہ سیکھتا ہے۔ jo mehnat kartā hai, voh sīkhtā hai.",
        exampleTranslation: "The one who works hard learns."
      },
      {
        title: "Persian izafat inside Urdu",
        body: cited(
          "Urdu borrows the Persian izafat linker, pronounced -e or -ye, to join words in expressions such as جشنِ آزادی jashn-e āzādī, ‘celebration of independence.’ You will see it in headlines, greetings, and poetry, sometimes with a small vowel mark under the first word. Everyday Urdu still uses کا kā for many ordinary possessive phrases.",
          "utexas-izafat",
          "platts-dictionary"
        ),
        example: "جشنِ آزادی مبارک ہو! jashn-e āzādī mubārak ho!",
        exampleTranslation: "Happy Independence Day! The -e links jashn, ‘celebration,’ with āzādī, ‘freedom.’"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Urdu's map changes with the question you ask. Pakistan's mother-tongue count leaves out people who learned Urdu for school, work, or conversation across communities. In India, Urdu-speaking communities live across many states.\n\nFilm and music also reach people who call their own speech Hindi or Hindustani. Some diaspora families pass on spoken Urdu without the same level of Nastaliq reading. A learner's home and reading histories therefore matter as much as their country.",
      "pbs-census",
      "uchicago-urdu",
      "wiki-urdu"
    ),
    regions: [
      {
        place: "Pakistan",
        note: cited(
          "Urdu is the national language and a nationwide lingua franca, but the 2023 census reported it as mother tongue for 9.25 percent. Karachi has a particularly large first-language community; throughout the country Urdu coexists with provincial and local languages and with English in government, education, and professional life.",
          "pbs-census",
          "nlpd-pakistan"
        )
      },
      {
        place: "India",
        note: cited(
          "Urdu is constitutionally recognized and has official status in several jurisdictions. Delhi, Uttar Pradesh, Bihar, Telangana and the Deccan, Jammu and Kashmir, and other regions sustain different combinations of home use, schooling, press, performance, and literature.",
          "uchicago-urdu",
          "wiki-urdu"
        )
      },
      {
        place: "Gulf, Britain, North America, Australia, and wider diaspora",
        note: cited(
          "Migration has carried Urdu into multilingual homes, community media, religious institutions, poetry gatherings, film audiences, and digital networks. Diaspora speech often overlaps with Hindi, Punjabi, Gujarati, Bengali, Arabic, and English, while literary organizations maintain Nastaliq and mushaira performance.",
          "uchicago-urdu",
          "columbia-modules"
        )
      },
      {
        place: "Transnational media space",
        note: cited(
          "Bollywood and Pakistani cinema, television drama, streaming video, music, and social platforms circulate broadly intelligible Hindustani. They do not erase the distinction between standards, but they give learners a vast listening zone in which register can be compared in real time.",
          "wiki-hindustani",
          "columbia-modules"
        )
      }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "An English-speaking beginner must learn unfamiliar sounds, agreement patterns, and a script that usually omits short vowels. Shared Hindustani media gives them abundant listening material, but it does not teach Nastaliq reading on its own. A heritage speaker may start with fluent home speech and need the opposite emphasis: spelling, extended reading, and formal vocabulary.",
      "msu-basic-urdu",
      "unicode-arabic",
      "columbia-modules"
    ),
    easierAspects: [
      "Conversational overlap with Hindi opens an enormous shared media and tutoring ecosystem",
      "Word order and postpositions become predictable once learned through full clauses",
      "Urdu spelling preserves families and etymology, which becomes helpful after the first reading barrier",
      "Speakers are accustomed to multilingual interaction and often accommodate learners"
    ],
    hardAspects: [
      "Nastaliq reading speed and omitted short vowels",
      "Dental, retroflex, aspirated, and breathy consonant contrasts",
      "Gender agreement and aspect-conditioned ergativity",
      "The vocabulary distance between casual conversation and formal or classical prose",
      "Unwritten social knowledge behind pronouns, politeness, and poetic allusion"
    ],
    plateauRisks: [
      "Depending on Roman Urdu until every Perso-Arabic word still looks unfamiliar",
      "Watching subtitled film while reading English instead of testing Urdu listening",
      "Learning highly Persianized synonyms but sounding unnatural in ordinary conversation",
      "Speaking fluently at home while avoiding sustained Nastaliq prose",
      "Reading poetry only through translations and never hearing its meter or recitation"
    ],
    workload: cited(
      "In the first months, give conversation, script, and listening regular time. A few minutes of Nastaliq reading each day can build recognition that an occasional long session does not. At intermediate level, follow one news or essay source and one drama or interview series; keep notes on their different vocabulary.\n\nLonger texts and corrections from speakers in your target community become more valuable later. Check your progress through tasks: read a page without romanization, follow an interview, or explain a couplet in context.",
      "columbia-modules",
      "columbia-ghazal",
      "uchicago-urdu"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Keep two study tracks. For conversation, replay a short exchange with one speaker and change a noun or verb form after you can say the original naturally. For reading, return to the same Nastaliq paragraph three times: first for the general point, then with a dictionary, then aloud.\n\nOnce everyday grammar feels steady, add annotated poems or short prose. Columbia's video modules show spontaneous Delhi Urdu; its ghazal reader supports slower literary study. Note the different register before borrowing a line for conversation.",
      "columbia-modules",
      "columbia-ghazal"
    ),
    mediaPractice: cited(
      "A family drama can teach indirect requests; an interview shows prepared ideas in spontaneous speech; news introduces formal compounds. Watch one short clip first without subtitles, then with Urdu text if available, and finally while repeating a few lines. Ghazal recitation asks for a different listening mode, since meter and old images carry meaning alongside the words.",
      "columbia-modules",
      "uchicago-urdu"
    ),
    dictionariesAndCorpora: cited(
      "Use a current dictionary for everyday meaning, and turn to Platts when an older poem or unusual word needs historical context. Rekhta links entries to literary examples, while Platts dates from the nineteenth century and may describe usage differently from people today. Search for a word in sentences before deciding that its Sanskrit or Arabic origin assigns it exclusively to Hindi or Urdu.",
      "rekhta-dictionary",
      "platts-dictionary",
      "uchicago-urdu"
    ),
    resources: [
      {
        type: "course",
        title: "AIIS–Columbia Urdu Audio-Visual Modules",
        url: "https://urduaiis.lrc.columbia.edu/",
        level: "all",
        description: cited(
          "Twenty-eight thematic modules use short, unscripted video recorded in Delhi. Listen for everyday phrasing and social setting, then compare it with the standard written forms in your course.",
          "columbia-modules"
        )
      },
      {
        type: "dictionary",
        title: "Rekhta Urdu Dictionary",
        url: "https://www.rekhtadictionary.com/",
        level: "all",
        description: cited(
          "Search a word in Urdu, English, or Hindi and inspect its meanings and literary examples. Check a contemporary speaker before using a poetic sense in ordinary conversation.",
          "rekhta-dictionary"
        )
      },
      {
        type: "corpus",
        title: "Digital Dictionaries of South Asia: Platts",
        url: "https://dsal.uchicago.edu/dictionaries/platts/",
        level: "advanced",
        description: cited(
          "The University of Chicago's digital edition of John T. Platts's historical dictionary of Urdu, classical Hindi, and English. It is excellent for etymology and older texts, though modern learners should cross-check current usage.",
          "platts-dictionary"
        )
      },
      {
        type: "book",
        title: "Columbia Digital Urdu Ghazal Reader",
        url: "https://www.columbia.edu/itc/mealac/urdutech/ghazalreader/",
        level: "intermediate",
        description: cited(
          "An interactive course reader presenting complete ghazals with help for orthography, pronunciation, vocabulary, grammar, and literary context. It turns canonical poetry into teachable reading rather than decorative quotation.",
          "columbia-ghazal"
        )
      },
      {
        type: "course",
        title: "Basic Urdu",
        url: "https://openbooks.lib.msu.edu/urdu/",
        level: "beginner",
        description: cited(
          "A free Michigan State textbook with script lessons, dialogues, listening tasks, and grammar exercises. It gives beginners a structured path from letters to connected speech.",
          "msu-basic-urdu"
        )
      },
      {
        type: "other",
        title: "Unicode Arabic Script FAQ",
        url: "https://www.unicode.org/faq/arabic.html",
        level: "advanced",
        description: cited(
          "The authoritative technical reference for how Arabic-derived scripts are encoded and shaped, including why Nastaliq is treated as a style rather than a separately encoded script. Essential for anyone publishing or programming Urdu.",
          "unicode-arabic"
        )
      }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "A word can move between a family conversation and a ghazal. محبت muḥabbat means ‘love’ in both, while دل dil, ‘heart,’ can express feeling, courage, or desire. In poetry, a garden, candle, or moth may suggest several ideas at once.\n\nUrdu writers and performers also work in short fiction, novels, satire, journalism, television drama, film songs, rap, and online comedy. Read and listen beyond one genre to hear the same word change its effect with its setting.",
      "uchicago-urdu",
      "columbia-ghazal",
      "rekhta-dictionary"
    ),
    notableWords: [
      {
        term: "محبت",
        transliteration: "muḥabbat / mohabbat",
        meaning: "love, affection",
        note: cited(
          "An Arabic-origin word completely at home in everyday Urdu, songs, and poetry. Its doubled middle consonant is clearer in careful speech than casual romanization suggests.",
          "rekhta-dictionary",
          "platts-dictionary"
        )
      },
      {
        term: "دنیا",
        transliteration: "dunyā",
        meaning: "world; worldly life",
        note: cited(
          "A common Arabic-origin word whose range stretches from ‘everyone in the world’ to the temporal world contrasted with an afterlife. Register comes from the sentence, not the etymology alone.",
          "rekhta-dictionary"
        )
      },
      {
        term: "دل",
        transliteration: "dil",
        meaning: "heart, mind, inclination",
        note: cited(
          "An Indo-Iranian word shared through long regional histories and one of Urdu's most productive emotional nouns: dil lagnā can mean becoming attached or finding interest, while dil ṭūṭnā is a heart breaking.",
          "platts-dictionary",
          "columbia-ghazal"
        )
      },
      {
        term: "جُگَت",
        transliteration: "jugat",
        meaning: "witticism, comic line, repartee",
        note: cited(
          "In Punjabi–Urdu popular performance, this word points to quick wit and teasing. It shows how lively repartee belongs beside Urdu's better-known literary genres.",
          "rekhta-dictionary"
        )
      },
      {
        term: "تہذیب",
        transliteration: "tahzīb",
        meaning: "culture, refinement, civilization",
        note: cited(
          "An Arabic-origin formal word whose translation changes with argument and era. In discussions of adab and social behavior it can imply cultivated manners, not merely ‘culture’ as a neutral category.",
          "rekhta-dictionary",
          "platts-dictionary"
        )
      },
      {
        term: "آزادی",
        transliteration: "āzādī",
        meaning: "freedom, independence",
        note: cited(
          "Built from Persian āzād with an abstract-noun suffix, this is both an everyday political word and the centerpiece of historical and contemporary slogans across South Asia.",
          "platts-dictionary",
          "nlpd-pakistan"
        )
      },
      {
        term: "غزل",
        transliteration: "ghazal",
        meaning: "a lyric genre built from autonomous couplets in a formal rhyme structure",
        note: cited(
          "A ghazal's couplets share a meter, rhyme, and often a refrain, while each couplet can stand on its own. Performance and popular music have widened how people use the label.",
          "columbia-ghazal"
        )
      },
      {
        term: "خیر",
        transliteration: "xair / khair",
        meaning: "good, well-being; anyway / well then",
        note: cited(
          "Beyond its dictionary sense, xair is an agile discourse word: it can close a topic, concede a point, reset a story, or ask after someone's welfare in خیریت xairiyat.",
          "rekhta-dictionary"
        )
      }
    ],
    loanwordLayers: cited(
      "Urdu keeps an Indo-Aryan grammar and many inherited everyday words. Persian brought compounds, literary genres, and prestige vocabulary; Arabic supplied learned words, often through Persian. Regional languages and English continue to shape local speech.\n\nA speaker may choose a plain Hindustani word in one setting and a Persian-Arabic or English near-synonym in another. The choice can signal an audience, topic, joke, or formal tone. Hear it in context before judging what sounds natural.",
      "wiki-urdu",
      "wiki-hindustani",
      "utexas-vocabulary"
    ),
    idioms: [
      { original: "ناک میں دم کرنا", transliteration: "nāk meṅ dam karnā", translation: "to make someone's life difficult; pester relentlessly", note: "Literally, ‘to put breath in the nose.’ Stronger and more vivid than merely ‘annoy.’" },
      { original: "آنکھوں کا تارا", transliteration: "āṅkhoṅ kā tārā", translation: "the apple of one's eye; a dearly loved person", note: "Literally, ‘the star/pupil of the eyes.’ Agreement around the expression follows its role in the sentence." },
      { original: "نو دو گیارہ ہونا", transliteration: "nau do gyārah honā", translation: "to make oneself scarce; run away", note: "Literally, ‘to become nine-two-eleven.’ Often playful, as when telling someone to disappear quickly." },
      { original: "آسمان سر پر اٹھانا", transliteration: "āsmān sar par uṭhānā", translation: "to raise a huge commotion", note: "Literally, ‘to lift the sky onto one's head.’ Used for loud protest, crying, or uproar." },
      { original: "ہاتھ پاؤں پھولنا", transliteration: "hāth pāṅv phūlnā", translation: "to panic or lose one's nerve", note: "Literally, ‘for the hands and feet to swell.’ The body image describes being too flustered to act." }
    ],
    textGenres: [
      "ghazal and nazm poetry, including recitation and song",
      "dastan storytelling, drama, and comic performance",
      "afsana short fiction, novels, memoir, and literary criticism",
      "newspapers, editorials, television news, and long-form interviews",
      "film dialogue, playback song, television serials, and streaming drama",
      "religious scholarship, sermons, devotional poetry, and translation",
      "social video, stand-up, rap, podcasts, memes, and Roman Urdu messaging"
    ]
  },
  relationships: {
    overview: cited(
      "Urdu and Hindi grew within the Indo-Aryan branch and share much conversational Hindustani grammar. Persian and Arabic shaped Urdu through contact, especially in writing and formal vocabulary. These are different kinds of relationship: descent, shared speech, borrowing, and cultural identity each tell part of the story.",
      "glottolog-urdu",
      "wiki-hindustani",
      "utexas-vocabulary"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Adab can mean literature and cultivated manners. Listen to how a speaker addresses an elder or offers praise, then notice how the same choice appears in a poem or television scene. Mushairas make poetry a social event, with listeners responding during recitation.\n\nUrdu also gives voice to feminist poetry, satire, novels, screenplays, journalism, rap, and comedy. Its speakers and writers cross religious and national identities. Script access, schooling, and political history still shape who reads it and who claims it as their own.",
  resources: [
    {
      type: "course",
      title: "AIIS–Columbia Urdu Audio-Visual Modules",
      url: "https://urduaiis.lrc.columbia.edu/",
      level: "all",
      description: cited("Thematic video modules for connecting grammar and vocabulary to social situations and cultural context.", "columbia-modules")
    },
    {
      type: "dictionary",
      title: "Rekhta Dictionary",
      url: "https://www.rekhtadictionary.com/",
      level: "all",
      description: cited("A modern searchable Urdu dictionary and a practical doorway into Rekhta's poetry, prose, audio, and video collections.", "rekhta-dictionary")
    },
    {
      type: "dictionary",
      title: "Platts: A Dictionary of Urdu, Classical Hindi, and English",
      url: "https://dsal.uchicago.edu/dictionaries/platts/",
      level: "advanced",
      description: cited("A historical dictionary digitized by the University of Chicago; best for etymology, older vocabulary, and literary investigation rather than uncritical modern usage.", "platts-dictionary")
    },
    {
      type: "book",
      title: "Digital Urdu Ghazal Reader",
      url: "https://www.columbia.edu/itc/mealac/urdutech/ghazalreader/",
      level: "intermediate",
      description: cited("Complete annotated ghazals arranged as an advanced classroom reader, with orthographic, grammatical, and cultural support.", "columbia-ghazal")
    },
    {
      type: "other",
      title: "Urdu Script and Pronunciation, University of Texas",
      url: "https://urdu.la.utexas.edu/resources/urdu-script-pronunciation/",
      level: "beginner",
      description: cited("Work through letter families and short-vowel reading with explicit pronunciation notes. Compare the careful sound descriptions with recordings from the Urdu speakers you study.", "utexas-script")
    }
  ],
  relatedLanguages,
  phrases: [
    { original: "السلام علیکم", transliteration: "as-salāmu ʿalaikum", translation: "Hello / peace be upon you", literalMeaning: "Peace be upon you", usageNote: "A widespread greeting; the usual reply is وعلیکم السلام wa-ʿalaikum as-salām." },
    { original: "آپ کیسے ہیں؟", transliteration: "āp kaise haiṅ?", translation: "How are you?", usageNote: "Respectful, traditionally to a masculine addressee; many speakers also use it generically. Feminine: آپ کیسی ہیں؟ āp kaisī haiṅ?" },
    { original: "میں ٹھیک ہوں، شکریہ۔", transliteration: "maiṅ ṭhīk hūṅ, shukriyah.", translation: "I'm well, thank you." },
    { original: "آپ کا نام کیا ہے؟", transliteration: "āp kā nām kyā hai?", translation: "What is your name?", usageNote: "Respectful. kā agrees with masculine nām, not with the person addressed." },
    { original: "میرا نام … ہے۔", transliteration: "merā nām … hai.", translation: "My name is …" },
    { original: "براہِ کرم آہستہ بولیے۔", transliteration: "barāh-e karam āhistah boliye.", translation: "Please speak slowly.", literalMeaning: "By way of kindness, speak slowly.", usageNote: "Formal/polite; مہربانی کر کے mehrbānī kar ke is another natural ‘please.’" },
    { original: "مجھے سمجھ نہیں آئی۔", transliteration: "mujhe samajh nahīṅ āī.", translation: "I didn't understand.", literalMeaning: "Understanding did not come to me." },
    { original: "کیا آپ دوبارہ کہہ سکتے ہیں؟", transliteration: "kyā āp dobārah kah sakte haiṅ?", translation: "Can you say that again?", usageNote: "To a female addressee, سکتی ہیں saktī haiṅ is traditional agreement." },
    { original: "اس لفظ کا کیا مطلب ہے؟", transliteration: "is lafz kā kyā matlab hai?", translation: "What does this word mean?" },
    { original: "میں اردو سیکھ رہا ہوں۔", transliteration: "maiṅ Urdū sīkh rahā hūṅ.", translation: "I am learning Urdu.", usageNote: "Male speaker; a female speaker says سیکھ رہی ہوں sīkh rahī hūṅ." },
    { original: "یہ کتنے کا ہے؟", transliteration: "yeh kitne kā hai?", translation: "How much is this?", usageNote: "Common shopping question; agreement can change with the item." },
    { original: "کوئی بات نہیں۔", transliteration: "koī bāt nahīṅ.", translation: "No problem / never mind.", literalMeaning: "There is no matter." },
    { original: "پھر ملیں گے۔", transliteration: "phir mileṅge.", translation: "See you again.", literalMeaning: "We will meet again." },
    { original: "خدا حافظ", transliteration: "xudā hāfiz / khudā hāfiz", translation: "Goodbye.", literalMeaning: "May God be your protector.", usageNote: "Widely understood; اللہ حافظ Allāh hāfiz is also common in Pakistan." }
  ],
  sources: [
    { id: "msu-basic-urdu", title: "Basic Urdu", url: "https://openbooks.lib.msu.edu/urdu/", publisher: "Michigan State University Libraries", publishedAt: "2022-12-15", accessedAt: "2026-09-27" },
    { id: "utexas-vocabulary", title: "Urdu Vocabulary: A Guided Tour", url: "https://urdu.la.utexas.edu/resources/vocabulary/", publisher: "University of Texas at Austin", accessedAt: "2026-09-27" },
    { id: "utexas-script", title: "Urdu Script & Pronunciation", url: "https://urdu.la.utexas.edu/resources/urdu-script-pronunciation/", publisher: "University of Texas at Austin", accessedAt: "2026-09-27" },
    { id: "utexas-dialogue", title: "A Conversation Amongst Acquaintances", url: "https://urdu.la.utexas.edu/resources/a-conversation-amongst-acquaintances/", publisher: "University of Texas at Austin", accessedAt: "2026-09-27" },
    { id: "utexas-izafat", title: "Persian Grammar in Urdu", url: "https://urdu.la.utexas.edu/resources/persian-grammar-in-urdu/", publisher: "University of Texas at Austin", accessedAt: "2026-09-27" },
    { id: "wiki-urdu", title: "Urdu", url: "https://en.wikipedia.org/wiki/Urdu", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-hindustani", title: "Hindustani language", url: "https://en.wikipedia.org/wiki/Hindustani_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-hindustani-grammar", title: "Hindustani grammar", url: "https://en.wikipedia.org/wiki/Hindustani_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "unicode-arabic", title: "FAQ: Arabic Script", url: "https://www.unicode.org/faq/arabic.html", publisher: "Unicode Consortium", accessedAt: "2026-07-10" },
    { id: "unicode-chapter9", title: "The Unicode Standard, Chapter 9: Middle East-I", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-9/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "glottolog-urdu", title: "Glottolog 5.3: Urdu", url: "https://glottolog.org/resource/languoid/id/urdu1245", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "nlpd-pakistan", title: "National Language Promotion Department", url: "https://nlpd.gov.pk/eng-site/index.php", publisher: "Government of Pakistan", accessedAt: "2026-07-10" },
    { id: "pbs-census", title: "Key Findings of the 7th Population and Housing Census 2023", url: "https://www.pbs.gov.pk/wp-content/uploads/2020/07/Key_Findings_Report.pdf", publisher: "Pakistan Bureau of Statistics", publishedAt: "2025", accessedAt: "2026-09-27" },
    { id: "uchicago-urdu", title: "Urdu Language Study", url: "https://salc.uchicago.edu/language-study/urdu", publisher: "University of Chicago", accessedAt: "2026-07-10" },
    { id: "platts-dictionary", title: "A Dictionary of Urdu, Classical Hindi, and English", url: "https://dsal.uchicago.edu/dictionaries/platts/", publisher: "Digital South Asia Library, University of Chicago", publishedAt: "1884", accessedAt: "2026-07-10" },
    { id: "rekhta-dictionary", title: "Rekhta Dictionary", url: "https://www.rekhtadictionary.com/", publisher: "Rekhta Foundation", accessedAt: "2026-07-10" },
    { id: "columbia-modules", title: "Urdu AIIS Audio-Visual Modules", url: "https://urduaiis.lrc.columbia.edu/", publisher: "American Institute of Indian Studies and Columbia University", accessedAt: "2026-07-10" },
    { id: "columbia-ghazal", title: "Digital Urdu Ghazal Reader", url: "https://www.columbia.edu/itc/mealac/urdutech/ghazalreader/", publisher: "Columbia University", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Urdu Language Guide: Nastaliq, Grammar, History, and Real Usage",
    description: "Read Urdu in Nastaliq and hear how its speakers use shared Hindustani speech, formal vocabulary, and poetic language. Explore grammar, phrases, and learning sources."
  }
} satisfies LanguageGuide;
