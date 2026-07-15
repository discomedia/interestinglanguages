import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Dari",
    relationship: "The Afghan standard of Persian",
    explanation: cited(
      "Dari is the official name for Persian in Afghan government and education. It shares a formal core with Iranian Persian, but Afghan speakers use their own pronunciations, everyday words, regional varieties, and literary traditions. A learner who wants to speak with family in Kabul or read Afghan news should study Afghan voices from the start.",
      "iranica-dari",
      "iranica-kaboli",
      "afghan-constitution"
    )
  },
  {
    name: "Tajik",
    relationship: "The Central Asian standard of Persian",
    explanation: cited(
      "Tajik is the Persian standard used in Tajikistan and parts of neighboring Central Asia. It uses a modified Cyrillic alphabet and has absorbed plenty of Russian and Uzbek vocabulary, but much of its grammar and inherited vocabulary remains recognizably Persian. Formal prose and classical poetry make the connection especially easy to see once you learn the script.",
      "iranica-tajik",
      "loc-scripts"
    )
  },
  {
    name: "Kurdish",
    slug: "kurdish",
    relationship: "A related group of Western Iranian languages",
    explanation: cited(
      "Persian and Kurdish varieties belong to the Iranian branch of the Indo-European family. That makes them relatives, but neither descends from the other and they are not mutually intelligible. Centuries of contact have also moved words between them, so shared vocabulary can come from both ancestry and borrowing.",
      "wiki-persian",
      "iranica-early"
    )
  },
  {
    name: "Arabic",
    slug: "arabic",
    relationship: "An unrelated language with a major historical influence",
    explanation: cited(
      "Persian borrowed its main alphabet and a large learned vocabulary from Arabic, but the two languages come from different families. Persian has no grammatical gender and does not build words with the Arabic root-and-pattern system. Persian speakers changed the pronunciation of many loans and combined them with Persian endings and verbs.",
      "dd-persian-arabic",
      "unicode-persian"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const persianGuide = {
  slug: "persian",
  name: "Persian",
  autonym: "فارسی",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Persian links everyday conversation in Iran, Afghanistan, and Central Asia with one of the world's great literary traditions—and it does so through several modern standards, two main scripts, and many local voices.",
  family: "Indo-European, Indo-Iranian, Iranian, Southwestern Iranian",
  macroRegion: "Iran, Afghanistan, Central Asia, and global diasporas",
  primaryScript: "Perso-Arabic in Iran and Afghanistan; Cyrillic in Tajikistan",
  difficultyLabel: "Demanding",
  learnerHook: "Persian lets beginners build useful sentences without grammatical gender or noun cases. The real adventure comes from learning an unvowelled script, hearing the gap between written and spoken Persian, and discovering how simple words carry humor, courtesy, and centuries of poetry.",
  hero: {
    imageAlt: "Persian in contemporary Perso-Arabic type beside Tajik Cyrillic and a classical manuscript page.",
    callToActionLabel: "Hear Persian in use"
  },
  classification: "A Southwestern Iranian language with major Iranian Persian, Dari, and Tajik standards",
  speakerCommunity: "Persian is not tied to one passport or one ethnic group. It serves as Iran's national public language, connects many communities across Afghanistan under the official name Dari, and anchors public life in Tajikistan as Tajik. Large diasporas also use Persian at home, in schools, in media, and online, so one learner may be decoding family voice notes while another is reading Hafez or watching an Iranian comedy.",
  facts: [
    { label: "Family", value: "Indo-European · Indo-Iranian · Iranian · Southwestern" },
    { label: "Major standards", value: "Iranian Persian, Dari, and Tajik" },
    { label: "Common English name", value: "Persian; fārsi is the Iranian Persian name" },
    { label: "Scripts", value: "Perso-Arabic in Iran/Afghanistan; Cyrillic in Tajikistan" },
    { label: "Basic word order", value: "Usually subject–object–verb" },
    { label: "Signature connector", value: "Ezāfe -e/-ye links nouns to modifiers and possessors" }
  ],
  learnerOverview: "Persian is an umbrella language with three major modern standards: Iranian Persian, Dari in Afghanistan, and Tajik in Tajikistan. They share a great deal, especially in careful writing and formal speech, but they differ in pronunciation, everyday vocabulary, recent loanwords, and social context. Choose the people and media you care about most as your starting point, then branch out once the common structure feels familiar.",
  origins: {
    overview: cited(
      "Persian has a long written history, but it has not stayed frozen for 2,500 years. Old Persian appears in Achaemenid cuneiform inscriptions, while Middle Persian became important under the Sasanian Empire and used several writing traditions. New Persian emerged after the Arab-Islamic conquest, adopted Arabic script and many Arabic words, and grew into a major literary language without giving up its Iranian grammar.",
      "iranica-early",
      "loc-book",
      "wiki-persian"
    ),
    timeline: [
      {
        period: "6th–4th centuries BCE",
        event: cited("Achaemenid rulers used Old Persian in monumental inscriptions, often beside other imperial languages. Old Persian belongs to the language's family history, but a modern Persian speaker cannot simply read it as an old-fashioned spelling of today's language.", "loc-scripts", "wiki-persian")
      },
      {
        period: "3rd–7th centuries CE",
        event: cited("Middle Persian played major courtly, administrative, and religious roles under the Sasanians. Its Pahlavi writing tradition could represent a Persian word with an older Aramaic written form, which makes its texts much less transparent than modern Persian script.", "loc-scripts", "loc-book")
      },
      {
        period: "8th–11th centuries",
        event: cited("Writers developed Early New Persian in the multilingual cities of eastern Iran and Central Asia. They used Arabic script and borrowed heavily from Arabic, but the language kept Persian sentence structure and verb grammar. Poets such as Rudaki and Ferdowsi helped make it a prestigious literary language.", "iranica-early", "loc-book")
      },
      {
        period: "11th–19th centuries",
        event: cited("Persian traveled far beyond modern Iran through poetry, scholarship, diplomacy, and government. Courts and writers used it from Anatolia and the Caucasus to Central and South Asia. That wider Persianate world left a deep mark on languages such as Urdu and Ottoman Turkish.", "loc-book")
      },
      {
        period: "20th century to today",
        event: cited("Schools, broadcasting, national institutions, and new borders strengthened separate Iranian, Afghan, and Tajik standards. Tajik moved from Arabic to Latin and then Cyrillic under Soviet rule. Today, Persian speakers also negotiate keyboards, half-spaces, mixed scripts, and informal online spelling.", "iranica-tajik", "unicode-persian")
      }
    ],
    contactHistory: cited(
      "Persian has always borrowed words and passed them on. Arabic supplied a large layer connected with religion, law, scholarship, and government, while long contact with Turkic languages added courtly, military, pastoral, and everyday vocabulary. Modern Iranian Persian took many words from French and later English; Tajik shows strong Russian and Uzbek contact; and Afghan Persian lives alongside Pashto, Turkic, Indic, and English influences.",
      "iranica-early",
      "iranica-tajik",
      "dd-persian-arabic"
    ),
    standardization: cited(
      "Persian has several centers rather than one authority for the whole language. Iran's Academy recommends spellings and new terms, Afghan schools and broadcasters maintain Dari norms, and Tajik institutions use a Cyrillic standard shaped by twentieth-century history. Tehran, Kabul, and Dushanbe speech influence media, but none of them represents every Persian speaker in its country.",
      "unicode-persian",
      "afghan-constitution",
      "iranica-tajik"
    )
  },
  variants: {
    overview: cited(
      "The names Persian, Farsi, Dari, and Tajik carry linguistic, national, and personal meanings. Persian is the established English umbrella name, while many Iranian and Afghan speakers call their language fārsi in everyday life. Careful formal varieties remain close, but fast local conversation can sound surprisingly different when pronunciation, vocabulary, and media exposure all change at once.",
      "wiki-persian",
      "iranica-tajik",
      "iranica-kaboli"
    ),
    items: [
      {
        name: "Iranian Persian (فارسی)",
        note: cited("Iranian Persian uses the Perso-Arabic script and provides the model heard in most media from Iran. Everyday Tehran-influenced speech contracts verbs, shifts some vowels, and uses colloquial pronouns and object markers. Speakers from Shiraz, Mashhad, Esfahan, the Gulf, and many other regions bring their own accents and expressions.", "dd-resources", "wiki-persian")
      },
      {
        name: "Dari / Afghan Persian (دری / فارسی)",
        note: cited("Dari is one of Afghanistan's nationwide official languages and a common bridge across communities. Afghan Persian often preserves sound distinctions that have merged in common Iranian speech, but it is not one accent. Kabul, Herat, Hazaragi, Panjshir, Badakhshan, and other varieties each deserve their own label.", "afghan-constitution", "iranica-dari", "iranica-kaboli")
      },
      {
        name: "Tajik (тоҷикӣ)",
        note: cited("Tajik normally uses a modified Cyrillic alphabet, which writes vowels more openly than Persian script. Russian and neighboring Turkic languages have shaped its modern vocabulary, and Tajik has also developed its own sound and grammar patterns. Local speech varies across Tajikistan and Persian-speaking parts of Uzbekistan.", "iranica-tajik", "loc-scripts")
      },
      {
        name: "Formal and literary Persian",
        note: cited("Edited Iranian and Afghan prose stays closer than everyday conversation does. Classical Persian gives readers a shared archive, but poetry bends word order and draws on old vocabulary, meter, and inherited images. Reading a ghazal takes more than sounding out a modern newspaper sentence.", "loc-book")
      },
      {
        name: "Diaspora and heritage Persian",
        note: cited("Diaspora families often mix Persian with English, German, French, Swedish, or another local language. Heritage speakers may understand intimate family speech while reading slowly or missing formal vocabulary. Those uneven skills reflect where they have used Persian, not a lack of authenticity.", "dd-heritage", "dd-resources")
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Persian spelling gives you consonants and long vowels, but it normally leaves short vowels unwritten. The major standards also use different vowel systems: a word learned from Tehran audio may sound noticeably different in Kabul or Dushanbe. Treat the script as a strong clue, then use recordings from your target community to learn the full word.",
      "wiki-persian",
      "iranica-tajik",
      "iranica-kaboli"
    ),
    script: "Perso-Arabic examples with practical Iranian transliteration; regional differences are labeled",
    soundSystem: cited(
      "Start by separating خ x, the rough sound in Scottish loch, from the lighter ه h. Persian also uses ژ /ʒ/ as in English measure, چ /tʃ/ as in church, and ج /dʒ/ as in judge. Many Iranians merge ق q and غ gh in speech, while Afghan and Tajik varieties may keep contrasts or pronounce the same words differently.",
      "wiki-persian",
      "dd-resources"
    ),
    prosody: cited(
      "Persian sounds more natural when you keep small grammatical links light and let the whole phrase carry the rhythm. The ezāfe link in کتابِ خوب ketāb-e xub, “a good book,” is short and unstressed, while casual Iranian speech compresses forms such as می‌خواهم mi-khāham into می‌خوام mi-khām. Listen to whole invitations, refusals, and questions because melody often carries politeness and attitude.",
      "dd-phrases",
      "persian-online"
    ),
    learnerTraps: [
      "Guessing unmarked short vowels instead of checking audio or a dictionary",
      "Pronouncing Arabic loanwords as Arabic instead of learning their Persian form",
      "Missing the quiet ezāfe sound between nouns, adjectives, and possessors",
      "Reading formal spelling aloud while trying to copy casual Tehran speech",
      "Treating Iranian, Afghan, and Tajik vowel systems as one identical target",
      "Using an English r without listening for Persian taps and trills"
    ],
    sampleWords: [
      { original: "خوب", transliteration: "xub", translation: "good", note: "Practice the rough x at the start. Careful Afghan speech may sound closer to xōb, and Tajik writes хуб." },
      { original: "هوا", transliteration: "havā", translation: "air; weather", note: "Contrast the light initial h with the x in xub, then keep the final vowel long." },
      { original: "زندگی", transliteration: "zendegi", translation: "life", note: "The script omits the short vowels. Learn the sound of the whole word instead of trying to pronounce the bare letters z-n-d-g-y." },
      { original: "مژه", transliteration: "može", translation: "eyelash", note: "The letter ژ represents /ʒ/, the middle sound in English measure." },
      { original: "قهوه", transliteration: "qahve", translation: "coffee", note: "Many Iranians pronounce q much like gh. The final h helps shape the spelling but does not sound like a full final consonant." },
      { original: "می‌خواهم", transliteration: "mi-khāham; colloquial mi-khām", translation: "I want", note: "The first form suits formal reading. The second is a common Iranian conversational contraction." }
    ]
  },
  writing: {
    overview: cited(
      "Iranian Persian and Dari use an Arabic-derived alphabet that runs from right to left. Persian added the letters پ p, چ ch, ژ zh, and گ g, while several Arabic letters now share one Persian sound—س, ص, and ث all usually sound like s. Tajik uses modified Cyrillic, runs left to right, and writes more vowels explicitly.",
      "loc-scripts",
      "unicode-persian"
    ),
    primaryScript: "Perso-Arabic (Iranian Persian and Dari); modified Cyrillic (Tajik)",
    romanization: cited(
      "You will see several Latin spellings for the same Persian sound, including x or kh, š or sh, and q or gh. Romanization can help during your first lessons, but it hides how Persian letters join and which short vowels the script leaves out. Learn Tajik Cyrillic directly if Tajik is your goal instead of passing every word through Latin letters.",
      "loc-scripts",
      "dd-resources"
    ),
    spellingNorms: cited(
      "Edited Iranian Persian often uses a zero-width non-joiner, or half-space, inside words such as می‌روم mi-ravam and خانه‌ها xāne-hā. Unicode also distinguishes Persian ی and ک from similar Arabic code points that can cause search and display problems. Real writers vary in their use of half-spaces, joined affixes, vowel marks, and colloquial spelling, so expect more than one digital form.",
      "unicode-persian"
    ),
    styleNotes: [
      cited("Learn the letters through useful words and start typing early. Copying isolated alphabet forms will not teach you how letters join inside a word.", "dd-resources"),
      cited("Read beginner texts with audio, then graduate to ordinary text without vowel marks. Adult Persian prose normally expects readers to supply short vowels from vocabulary and context.", "persian-online"),
      cited("Notice half-spaces in edited Iranian text and preserve them when you can. A normal space or the wrong Arabic character may look similar while behaving differently in search and layout.", "unicode-persian"),
      cited("Make a two-script list if you want to compare standards. Persian افغانستان and Tajik Афғонистон become obvious partners once you stop treating Cyrillic as an unrelated code.", "loc-scripts", "iranica-tajik")
    ]
  },
  grammar: {
    overview: cited(
      "Persian grammar gives beginners some welcome shortcuts: nouns have no grammatical gender, adjectives do not change for gender, and modern nouns carry little case marking. Verbs do more work, often through two stems, prefixes, endings, and helper words. Natural Persian also depends on ezāfe links, the object marker rā, thousands of compound verbs, and a clear difference between edited writing and regional conversation.",
      "wiki-grammar",
      "persian-online"
    ),
    typologicalProfile: cited(
      "A neutral Persian sentence usually puts the verb at the end, as in “Sara the book read.” Prepositions come before nouns, while rā follows a specific direct object, and ezāfe links a noun to the description or owner that follows it. Persian often drops a subject such as “I” or “we” because the verb ending already identifies the person.",
      "wiki-grammar",
      "wiki-persian"
    ),
    morphology: cited(
      "Persian verbs normally have a past stem and a present stem, and the relationship is not always predictable. رفتن raftan, “to go,” uses raft- in رفتم raftam, “I went,” but rav- in می‌روم mi-ravam, “I go” or “I am going.” Learn an infinitive with both stems, then add common pieces such as mi- for ongoing or habitual action, be- for many subjunctives and commands, and na-/ne- for negation.",
      "wiki-grammar",
      "persian-online"
    ),
    syntax: cited(
      "Persian can move words to highlight a topic, even though the verb usually comes last. Ezāfe can build long chains such as کتابِ جدیدِ دوستِ من ketāb-e jadid-e dust-e man, “my friend's new book,” and ke introduces many relative clauses. Short pronouns can also attach to nouns, prepositions, or verbs, so learners make faster progress when they save whole phrases instead of translating one word at a time.",
      "wiki-grammar",
      "persian-online"
    ),
    advancedPainPoints: [
      "Choosing the conventional light verb instead of translating English do, make, take, or become",
      "Following long ezāfe chains when the script does not show the linking vowel",
      "Using rā for specific objects instead of marking every English direct object",
      "Switching cleanly between edited Persian and a regional conversational style",
      "Hearing attached pronouns and omitted subjects in quick speech",
      "Reading poetic word order, older vocabulary, meter, and metaphor"
    ],
    topics: [
      {
        title: "Ezāfe connects a noun to what follows",
        body: cited("Persian adds a quiet -e or -ye sound between a noun and its adjective, owner, or related noun. Writers usually leave that sound out of the script, so you learn to supply it while reading. Each new link extends the same chain.", "wiki-grammar", "persian-online"),
        example: "خانهٔ کوچکِ مادربزرگم — xāne-ye kuchak-e mādarbozorgam",
        exampleTranslation: "my grandmother's small house. Ezāfe links house to small and grandmother, while -am means my."
      },
      {
        title: "Rā marks many specific objects",
        body: cited("Persian often places را rā after a direct object that the speakers can identify or treat as specific. Casual Iranian speech normally pronounces it ro after a consonant and o after a vowel. Context matters, so rā is not simply a marker that belongs after every object.", "wiki-grammar"),
        example: "آن فیلم را دیشب دیدم. — ān film rā dišab didam.",
        exampleTranslation: "I saw that film last night. The ending on didam already tells us the subject is I."
      },
      {
        title: "Verbs use past and present stems",
        body: cited("An infinitive does not always reveal its present stem, so save both stems when you learn a verb. The prefix mi- commonly adds an ongoing or habitual meaning, while be- appears in many commands and subjunctives. Once the stems are known, person endings behave quite regularly.", "wiki-grammar", "persian-online"),
        example: "هر روز می‌روم، ولی دیروز نرفتم. — har ruz mi-ravam, vali diruz naraftam.",
        exampleTranslation: "I go every day, but yesterday I did not go. The same verb uses rav- in the present and raft- in the past."
      },
      {
        title: "Compound verbs carry everyday meanings",
        body: cited("Persian combines a noun, adjective, or short phrase with a light verb such as kardan, “do,” or šodan, “become.” The pair acts as one verb, and you need to learn which light verb sounds natural. Save the whole expression with a common object or preposition.", "wiki-grammar", "dd-resources"),
        example: "دارم فارسی یاد می‌گیرم. — dāram fārsi yād mi-giram.",
        exampleTranslation: "I am learning Persian. Yād gereftan works as the complete verb to learn."
      },
      {
        title: "Present-tense ‘be’ often becomes an ending",
        body: cited("Persian usually attaches a short form of “be” to the word before it. Casual Iranian speech reduces these endings even further, while the independent verb hastan adds emphasis or expresses existence. Listen for a final vowel that the spelling may not make obvious.", "wiki-grammar"),
        example: "این کتاب جالب است. — in ketāb jāleb ast.",
        exampleTranslation: "This book is interesting. In casual Iranian speech, you will often hear in ketāb jālebe."
      },
      {
        title: "Wants and necessities often trigger the subjunctive",
        body: cited("Persian commonly uses a subjunctive verb after expressions of wanting, possibility, necessity, and purpose. Many affirmative forms show the prefix be-, though compound and prefixed verbs follow their own patterns. Learn the trigger and the following verb together.", "wiki-grammar", "persian-online"),
        example: "می‌خواهم فردا زودتر بیایم. — mi-xāham fardā zudtar biyāyam.",
        exampleTranslation: "I want to come earlier tomorrow. Common Iranian conversation contracts this to mi-khām fardā zudtar biyām."
      },
      {
        title: "Ke introduces many relative clauses",
        body: cited("Persian places ke after the noun that a relative clause describes. English often uses who, which, or that in the same job, but Persian usually leaves a gap inside the clause. More complex relatives may add a preposition or a short pronoun.", "wiki-grammar"),
        example: "دوستی که در کابل زندگی می‌کند — dusti ke dar Kābol zendegi mi-konad",
        exampleTranslation: "a friend who lives in Kabul. The relative clause follows dusti and ends with its verb."
      },
      {
        title: "Formal and conversational Persian follow different patterns",
        body: cited("Everyday Iranian Persian shortens verbs, changes some vowels, and uses colloquial pronouns and endings. These changes form a system rather than random sloppy speech. Learn formal and casual versions as complete pairs so you know which one fits a conversation, message, presentation, or news report.", "dd-resources", "dd-phrases"),
        example: "Formal: من نمی‌دانم. man nemidānam. · Colloquial Iranian: من نمی‌دونم. man nemidunam.",
        exampleTranslation: "I don't know. The second version belongs to ordinary Iranian conversation."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Persian serves as a national or state language in Iran, Afghanistan, and Tajikistan, but those borders do not contain its whole story. Persian-speaking communities also live across Uzbekistan and in large diasporas, while South Asia preserves centuries of Persian literature, inscriptions, and scholarship. Source totals vary because some count only first-language speakers and others combine Persian, Dari, Tajik, and second-language use.",
      "wiki-persian",
      "afghan-constitution",
      "iranica-tajik"
    ),
    regions: [
      { place: "Iran", note: cited("Persian is the nationwide public language in a highly multilingual country. Tehran media reaches a wide audience, but regional accents and languages remain central to people's daily lives and identities.", "wiki-persian") },
      { place: "Afghanistan", note: cited("Dari and Pashto have nationwide official status under the 2004 constitution. Persian connects people across many regions and communities, but Afghan Persian itself includes several strong local varieties.", "afghan-constitution", "iranica-dari") },
      { place: "Tajikistan and Uzbekistan", note: cited("Tajik is the state language of Tajikistan, and Persian-speaking communities have deep roots across Central Asia. Cyrillic schooling, Russian bilingualism, Uzbek contact, and twentieth-century borders all shape the way people use it today.", "iranica-tajik") },
      { place: "Persianate South Asia", note: cited("Persian no longer holds its old administrative role in South Asia, but manuscripts, monuments, histories, poetry, and Urdu vocabulary preserve its influence. Scholars still study a large Persian archive produced in the region.", "loc-book") },
      { place: "Global diasporas", note: cited("Families and artists sustain Persian through conversation, community schools, film, music, comedy, publishing, podcasts, and social media. Heritage speakers often have different levels of listening, speaking, reading, and formal vocabulary.", "dd-heritage", "dd-resources") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Persian is friendlier at the beginning than its script may suggest. You do not need to learn grammatical gender or a large noun-case system, and the core sound inventory has no lexical tones. The challenge grows later, when unwritten vowels, two verb stems, compound verbs, formal-versus-spoken differences, regional standards, idioms, and literary references all start to matter.",
      "dd-resources",
      "dd-heritage",
      "wiki-grammar"
    ),
    easierAspects: [
      "No grammatical gender or gender agreement on adjectives",
      "Little noun-case morphology in modern Persian",
      "A compact sound system without lexical tones",
      "Regular personal endings once both verb stems are known",
      "Large collections of film, music, television, literature, and online speech",
      "A strong shared formal core across the major standards"
    ],
    hardAspects: [
      "Reading a script that normally omits short vowels",
      "Memorizing present stems and conventional compound verbs",
      "Hearing ezāfe and attached pronouns in quick phrases",
      "Separating written Persian from regional conversational systems",
      "Understanding etiquette, irony, understatement, and ta'ārof",
      "Reading classical poetry with older language, meter, and allusion"
    ],
    plateauRisks: [
      "Depending on transliteration instead of recognizing Persian word shapes",
      "Studying only formal textbook Persian and finding ordinary speech opaque",
      "Learning only Tehran conversation and treating it as Dari or Tajik too",
      "Memorizing nouns while neglecting compound verbs and their partners",
      "Taking every polite formula literally instead of watching the interaction",
      "Avoiding longer reading because dictionary lookup still feels slow"
    ],
    workload: cited(
      "During your first year, combine a little script reading every day with structured grammar, conversation in one regional model, and media you genuinely enjoy. Reread short texts with audio instead of spending weeks copying alphabet charts, then add formal news and unscripted speech as your base grows. Heritage learners should test listening, literacy, and formal vocabulary separately because each skill may sit at a different level.",
      "dd-resources",
      "dd-study",
      "dd-heritage"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build your notes around choices that Persian speakers actually make. Save every compound verb with its usual object or preposition, keep formal and colloquial versions of the same sentence together, and ask a tutor to mark register slips in messages and voice notes. Once your main variety feels stable, compare Iranian, Afghan, and Tajik clips on the same topic to discover regular differences instead of collecting random curiosities.",
      "dd-resources",
      "persian-online"
    ),
    mediaPractice: cited(
      "Film and television let you watch courtesy, family roles, humor, and disagreement unfold in context. Transcribe a short scene, compare subtitles, and shadow the actors' hesitations and tone—not just their consonants. Use Afghan creators for Dari and Tajik audio with Cyrillic text for Tajik rather than assuming Iranian media can stand in for every target.",
      "dd-heritage",
      "dd-study",
      "dd-chai"
    ),
    dictionariesAndCorpora: cited(
      "Use a bilingual dictionary for speed, then check important words in a monolingual reference or real examples. Dehkhoda is wonderful for historical and literary meanings, but it is too broad to tell a beginner what sounds normal in today's conversation. Search phrases with and without half-spaces, and use a corpus to answer a specific question such as which light verb partners with a noun or whether a phrase mainly belongs to journalism.",
      "dehkhoda",
      "unicode-persian"
    ),
    resources: [
      { type: "other", title: "Discover Discomfort: Best Persian Learning Resources", url: "https://discoverdiscomfort.com/learn-improve-farsi-persian-resources/", level: "all", description: cited("This first-person guide compares books, tutors, audio tools, dictionaries, and free sites. It pays special attention to the gap between formal and conversational Iranian Persian.", "dd-resources") },
      { type: "course", title: "Persian Language Online", url: "https://persianlanguageonline.com/", level: "beginner", description: cited("This free multimedia course combines script, dialogues, grammar, exercises, and cultural material. Note whether each example sounds formal, neutral, or conversational as you work through it.", "persian-online", "dd-resources") },
      { type: "course", title: "Chai and Conversation", url: "https://www.chaiandconversation.com/", level: "beginner", description: cited("The course focuses on spoken Iranian Persian through audio lessons and cultural explanations. Discover Discomfort's detailed review recommends it especially for learners who want natural conversation.", "dd-chai") },
      { type: "course", title: "SOAS Persian short courses", url: "https://www.soas.ac.uk/study/find-course/persian-beginners-course", level: "beginner", description: "These teacher-led courses balance speaking, listening, reading, writing, grammar, and cultural context. They suit learners who want a schedule and direct correction." },
      { type: "other", title: "A Thousand Years of the Persian Book", url: "https://www.loc.gov/exhibits/thousand-years-of-the-persian-book/", level: "all", description: cited("The Library of Congress uses digitized manuscripts and books to introduce Persian scripts, epic, religion, science, history, and literature. It turns an abstract literary timeline into objects you can explore.", "loc-book") },
      { type: "dictionary", title: "Dehkhoda Dictionary", url: "https://dehkhoda.ut.ac.ir/", level: "advanced", description: cited("The University of Tehran's monumental dictionary is invaluable for literary and historical research. Pair it with a current concise dictionary so you do not mistake every recorded sense for everyday modern usage.", "dehkhoda") },
      { type: "other", title: "Discover Discomfort Persian phrase guide", url: "https://discoverdiscomfort.com/farsi-persian-basic-phrases-sound-local/", level: "beginner", description: cited("This audio-supported guide centers on phrases people use in social interaction, including the versatile befarmāyid. Its examples focus on Iranian Persian, so label them accordingly.", "dd-phrases") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "A small Persian word can carry a remarkable amount of emotional and cultural weight. دل del means “heart” but also appears in expressions for courage, mood, desire, and missing someone, while جان jān can mean “life” or “soul” and becomes an affectionate word after a name. Poetry adds more layers to everyday words such as گل gol, “rose,” بلبل bolbol, “nightingale,” and راه rāh, “road” or “way,” but modern speakers also use, remix, and joke about those old images.",
      "dd-phrases",
      "loc-book",
      "dd-proverbs"
    ),
    notableWords: [
      { term: "دل", transliteration: "del", meaning: "heart; feeling; courage", note: cited("Del names the emotional center of many Persian expressions. Delam barāyat tang šode, literally “my heart has become tight for you,” means “I miss you.”", "dd-phrases") },
      { term: "جان", transliteration: "jān", meaning: "life; soul; dear", note: cited("Put jān after a name to add warmth or affection. Said by itself in a close relationship, it can also mean an attentive “yes?”", "dd-phrases") },
      { term: "تعارف", transliteration: "ta'ārof", meaning: "ritualized courtesy and social deference", note: cited("Ta'ārof covers practices such as offering, declining, insisting, and showing modesty. It is not a secret code in which every offer is fake, so watch the people and situation instead of applying a stereotype.", "dd-phrases") },
      { term: "بفرمایید", transliteration: "befarmāyid", meaning: "please; go ahead; come in; help yourself", note: cited("Befarmāyid is a social multitool. A gesture or situation can turn it into an invitation to enter, take food, speak, order, or go first.", "dd-phrases") },
      { term: "خسته نباشید", transliteration: "xaste nabāšid", meaning: "may you not be tired", note: cited("Persian speakers use this phrase to recognize someone's work or effort. You might say it to a colleague, teacher, shopkeeper, or someone who has just finished a task.", "dd-phrases") },
      { term: "آزادی", transliteration: "āzādi", meaning: "freedom; liberty", note: cited("The adjective āzād means “free,” and the suffix -i turns it into an abstract noun. Āzādi appears in everyday, philosophical, poetic, and political speech across Persian-speaking societies.", "wiki-persian") },
      { term: "همزبان", transliteration: "ham-zabān", meaning: "someone who shares your language", note: cited("The compound literally means “same-language.” It can express connection across borders while leaving room for different Iranian, Afghan, Tajik, regional, and diaspora identities.", "iranica-tajik") }
    ],
    loanwordLayers: cited(
      "Everyday Persian mixes inherited words such as mādar, “mother,” barādar, “brother,” and nām, “name,” with centuries of borrowing. Arabic words fill many formal fields, Turkic words appear throughout ordinary life and government, French left modern Iranian words such as مرسی mersi, and Russian has a much larger presence in Tajik. English now supplies plenty of technology and popular-culture vocabulary, but the balance changes by country, generation, and setting.",
      "dd-persian-arabic",
      "iranica-tajik",
      "unicode-persian"
    ),
    idioms: [
      { original: "دلم برایت تنگ شده", transliteration: "delam barāyat tang šode", translation: "I miss you", note: "Literally, “my heart has become tight for you.” Iranian conversation often shortens barāyat to barāt." },
      { original: "دستت درد نکند", transliteration: "dastet dard nakonad", translation: "Thank you for what you did", note: "Literally, “may your hand not hurt.” It thanks someone for effort, food, repairs, or practical help." },
      { original: "چشم", transliteration: "češm", translation: "Certainly; I'll do it", note: "The literal meaning is “eye.” As a reply, it respectfully accepts a request, though tone can also make it playful." },
      { original: "آب از سرش گذشته", transliteration: "āb az saraš gozašte", translation: "The situation is already beyond saving", note: "Literally, “the water has passed over their head.” Speakers change the pronoun and tense to fit the situation." },
      { original: "یک دست صدا ندارد", transliteration: "yek dast sedā nadārad", translation: "One person cannot do everything alone", note: "Literally, “one hand has no sound.” The proverb emphasizes cooperation." }
    ],
    textGenres: [
      "Classical ghazal, qasida, masnavi, and roba'i poetry",
      "Epic narrative, especially Ferdowsi's Shahnameh",
      "Modern short stories, novels, memoir, and graphic narrative",
      "Iranian, Afghan, Tajik, and diaspora film and television dialogue",
      "News, essays, reportage, blogs, captions, and messaging",
      "Song lyrics spanning classical vocal, folk, pop, rap, and rock",
      "Oral storytelling, proverbs, jokes, and family histories"
    ]
  },
  relationships: {
    overview: cited(
      "Persian belongs to the Iranian branch of Indo-European, where it has relatives such as Kurdish varieties, Balochi, Pashto, and Ossetian. Dari and Tajik sit inside the modern Persian continuum rather than beside it as distant family members. Arabic and Turkic languages tell a different story: close contact changed Persian vocabulary and writing, but it did not turn those languages into Persian's genetic parents.",
      "wiki-persian",
      "iranica-early",
      "dd-persian-arabic"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Persian speakers often use or reference poetry in everyday conversation, as well as in music, ads, television, speeches, and condolences. People differ enormously in literary knowledge, though—you don't need to assume everyone has memorized Hafez. Contemporary Persian culture also lives in comedy, football commentary, recipe videos, rap, film, podcasts, and group chats, while social practices such as ta'ārof only make sense when you watch the relationship and situation.",
  resources: [
    { type: "other", title: "Discover Discomfort Persian resources", url: "https://discoverdiscomfort.com/learn-improve-farsi-persian-resources/", level: "all", description: cited("A practical, experience-based guide to Persian books, tutoring, listening tools, dictionaries, and free courses. It clearly distinguishes formal material from conversational Iranian Persian.", "dd-resources") },
    { type: "other", title: "Discover Discomfort: Persian phrases with audio", url: "https://discoverdiscomfort.com/farsi-persian-basic-phrases-sound-local/", level: "beginner", description: cited("A conversational Iranian Persian phrase guide with audio and useful social context. It is especially good for courtesy, greetings, and naturally shortened forms.", "dd-phrases") },
    { type: "other", title: "Discover Discomfort: Persian proverbs", url: "https://discoverdiscomfort.com/persian-proverbs-for-beginners/", level: "intermediate", description: cited("A readable collection of proverbs with translations and explanations. Use it to notice metaphor and cultural references, not as a list of lines to force into every conversation.", "dd-proverbs") },
    { type: "course", title: "Persian Language Online", url: "https://persianlanguageonline.com/", level: "beginner", description: cited("Free lessons combine dialogue, script, grammar, exercises, and cultural notes. The mix of formal and conversational forms makes it useful for learning to label register.", "persian-online") },
    { type: "course", title: "Chai and Conversation", url: "https://www.chaiandconversation.com/", level: "beginner", description: cited("An audio-led course in conversational Iranian Persian with cultural explanations. It works well for learners who want to sound natural before they can read quickly.", "dd-chai") },
    { type: "dictionary", title: "Dehkhoda Dictionary", url: "https://dehkhoda.ut.ac.ir/", level: "advanced", description: cited("A major historical dictionary for literary and research work. Pair it with a smaller modern dictionary when your question is about everyday speech.", "dehkhoda") },
    { type: "media", title: "A Thousand Years of the Persian Book", url: "https://www.loc.gov/exhibits/thousand-years-of-the-persian-book/", level: "all", description: cited("A free Library of Congress exhibition covering scripts, manuscripts, epic, science, history, and literature. It gives the language's long written history a visual form.", "loc-book") },
    { type: "other", title: "Unicode Persian guidance", url: "https://cldr.unicode.org/translation/language-specific/persian", level: "advanced", description: cited("A practical reference for correct Persian characters, spacing, spelling conventions, and software localization. Writers and developers will find it especially useful.", "unicode-persian") }
  ],
  relatedLanguages,
  phrases: [
    { original: "سلام", transliteration: "salām", translation: "Hello", usageNote: "This works broadly, but the rest of the greeting changes with region and relationship." },
    { original: "حال شما چطور است؟", transliteration: "hāl-e šomā chetor ast?", translation: "How are you?", usageNote: "Polite Iranian Persian. Everyday conversation often uses hāletun chetore?" },
    { original: "خیلی ممنون", transliteration: "xeyli mamnun", translation: "Thank you very much", usageNote: "Common in Iran. Sepāsgozāram sounds more formal." },
    { original: "خواهش می‌کنم", transliteration: "xāheš mi-konam", translation: "You're welcome; please", literalMeaning: "I make a request", usageNote: "The phrase can answer thanks or soften a request." },
    { original: "بفرمایید", transliteration: "befarmāyid", translation: "Please; go ahead; come in; help yourself", usageNote: "A gesture and the situation supply the exact meaning." },
    { original: "ببخشید", transliteration: "bebaxšid", translation: "Excuse me; sorry", usageNote: "Use it to get attention, pass someone, or apologize." },
    { original: "متوجه نشدم", transliteration: "motavajjeh našodam", translation: "I didn't understand", usageNote: "This sounds neutral and polite. Nafahmidam is more direct in Iranian conversation." },
    { original: "می‌شود دوباره بگویید؟", transliteration: "mi-šavad dobare beguyid?", translation: "Could you say it again?", usageNote: "Iranian conversation often shortens this to mi-še dobare begin?" },
    { original: "این یعنی چه؟", transliteration: "in ya'ni che?", translation: "What does this mean?", usageNote: "Point to the text or repeat the word before asking." },
    { original: "من دارم فارسی یاد می‌گیرم", transliteration: "man dāram fārsi yād mi-giram", translation: "I'm learning Persian", usageNote: "This is Iranian Persian. Say Dari or Tajik if that is your actual target." },
    { original: "لطفاً آهسته‌تر صحبت کنید", transliteration: "lotfan āheste-tar sohbat konid", translation: "Please speak more slowly", usageNote: "This is polite and fairly formal. Iranian conversation often ends it with sohbat konin." },
    { original: "خسته نباشید", transliteration: "xaste nabāšid", translation: "Thank you for your effort", literalMeaning: "May you not be tired", usageNote: "Say it to acknowledge someone who is working or has just finished a task." },
    { original: "خوشبختم", transliteration: "xošbaxtam", translation: "Pleased to meet you", literalMeaning: "I am fortunate", usageNote: "This often follows an exchange of names." },
    { original: "خداحافظ", transliteration: "xodāhāfez", translation: "Goodbye", literalMeaning: "May God protect you", usageNote: "Speakers use it widely regardless of its literal religious wording." }
  ],
  sources: [
    { id: "dd-resources", title: "The Best Persian Learning Resources", url: "https://discoverdiscomfort.com/learn-improve-farsi-persian-resources/", publisher: "Discover Discomfort", publishedAt: "2019-07-13", updatedAt: "2023-11-04", accessedAt: "2026-07-15" },
    { id: "dd-phrases", title: "40+ Common Persian Phrases to Sound like a Native Speaker", url: "https://discoverdiscomfort.com/farsi-persian-basic-phrases-sound-local/", publisher: "Discover Discomfort", publishedAt: "2019-11-11", updatedAt: "2023-09-13", accessedAt: "2026-07-15" },
    { id: "dd-study", title: "Where to Learn Persian Outside Iran", url: "https://discoverdiscomfort.com/learn-persian-outside-iran/", publisher: "Discover Discomfort", publishedAt: "2019-09-19", accessedAt: "2026-07-15" },
    { id: "dd-persian-arabic", title: "Persian vs Arabic — All the Similarities and Differences", url: "https://discoverdiscomfort.com/farsi-persian-vs-arabic-similarities-and-differences/", publisher: "Discover Discomfort", publishedAt: "2019-10-12", updatedAt: "2023-09-13", accessedAt: "2026-07-15" },
    { id: "dd-heritage", title: "How to (Re-)Learn Your Mother Tongue or Heritage Language", url: "https://discoverdiscomfort.com/how-to-learn-your-mother-tongue/", publisher: "Discover Discomfort", accessedAt: "2026-07-15" },
    { id: "dd-chai", title: "Chai and Conversation Review — My Favourite Persian Course", url: "https://discoverdiscomfort.com/learn-persian-chai-conversation-review/", publisher: "Discover Discomfort", accessedAt: "2026-07-15" },
    { id: "dd-proverbs", title: "Persian Proverbs for Beginners", url: "https://discoverdiscomfort.com/persian-proverbs-for-beginners/", publisher: "Discover Discomfort", accessedAt: "2026-07-15" },
    { id: "wiki-persian", title: "Persian language", url: "https://en.wikipedia.org/wiki/Persian_language", publisher: "Wikipedia", accessedAt: "2026-07-15" },
    { id: "wiki-grammar", title: "Persian grammar", url: "https://en.wikipedia.org/wiki/Persian_grammar", publisher: "Wikipedia", accessedAt: "2026-07-15" },
    { id: "iranica-early", title: "Persian Language I: Early New Persian", url: "https://www.iranicaonline.org/articles/persian-language-1-early-new-persian/", publisher: "Encyclopaedia Iranica", accessedAt: "2026-07-15" },
    { id: "iranica-dari", title: "Darī", url: "https://www.iranicaonline.org/articles/dari/", publisher: "Encyclopaedia Iranica", accessedAt: "2026-07-15" },
    { id: "iranica-kaboli", title: "Kāboli", url: "https://www.iranicaonline.org/articles/kaboli-colloquial-persian/", publisher: "Encyclopaedia Iranica", accessedAt: "2026-07-15" },
    { id: "iranica-tajik", title: "Tajik II: Tajiki Persian", url: "https://www.iranicaonline.org/articles/tajik-ii-tajiki-persian/", publisher: "Encyclopaedia Iranica", updatedAt: "2012-10-26", accessedAt: "2026-07-15" },
    { id: "unicode-persian", title: "Persian language-specific translation and orthography guidance", url: "https://cldr.unicode.org/translation/language-specific/persian", publisher: "Unicode CLDR", accessedAt: "2026-07-15" },
    { id: "loc-scripts", title: "Writing Systems and Scripts — A Thousand Years of the Persian Book", url: "https://www.loc.gov/exhibits/thousand-years-of-the-persian-book/writing-systems-and-scripts.html", publisher: "Library of Congress", accessedAt: "2026-07-15" },
    { id: "loc-book", title: "A Thousand Years of the Persian Book", url: "https://www.loc.gov/exhibits/thousand-years-of-the-persian-book/", publisher: "Library of Congress", accessedAt: "2026-07-15" },
    { id: "afghan-constitution", title: "Constitution of Afghanistan, Article 16", url: "https://moj.gov.af/en/enforced-constitution-afghanistan", publisher: "Afghanistan Ministry of Justice", publishedAt: "2004-01-26", accessedAt: "2026-07-15" },
    { id: "persian-online", title: "Persian Language Online", url: "https://persianlanguageonline.com/", publisher: "Persian Language Foundation", accessedAt: "2026-07-15" },
    { id: "dehkhoda", title: "Dehkhoda Dictionary Institute and International Center for Persian Studies", url: "https://dehkhoda.ut.ac.ir/", publisher: "University of Tehran", accessedAt: "2026-07-15" }
  ],
  seo: {
    title: "Persian Language Guide: Farsi, Dari, Tajik, Grammar and Culture",
    description: "A clear, example-rich guide to Persian across Iran, Afghanistan, and Tajikistan, including script, pronunciation, grammar, phrases, literature, media, and learning resources."
  }
} satisfies LanguageGuide;
