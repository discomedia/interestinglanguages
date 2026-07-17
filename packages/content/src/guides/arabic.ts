import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Hebrew",
    slug: "hebrew",
    relationship: "Northwest Semitic relative",
    explanation: cited(
      "Arabic and Hebrew inherited related roots, word-building patterns, grammatical gender, and cognates such as Arabic salām and Hebrew shalom. They aren't mutually intelligible, but the comparison can make Semitic word families feel less unfamiliar.",
      "wiki-arabic",
      "glottolog-arabic"
    )
  },
  {
    name: "Aramaic",
    relationship: "Northwest Semitic relative and historical neighbor",
    explanation: cited(
      "Aramaic is both a relative of Arabic and one of its most important historical neighbors. People used Aramaic varieties across much of the Near East before and alongside Arabic, and modern Aramaic-speaking communities still carry that history today.",
      "wiki-arabic",
      "glottolog-arabic"
    )
  },
  {
    name: "Amharic",
    slug: "amharic",
    relationship: "Ethio-Semitic relative",
    explanation: cited(
      "Amharic shows how varied the Semitic family becomes beyond Arabic and Hebrew. It builds many words around consonantal roots, but it uses the Ethiopic script and has its own grammar shaped by the Horn of Africa.",
      "glottolog-arabic"
    )
  },
  {
    name: "Persian",
    slug: "persian",
    relationship: "Unrelated language with deep literary contact",
    explanation: cited(
      "Persian belongs to the Indo-European family, so it isn't a close relative of Arabic. Centuries of scholarship, religion, and government nevertheless gave Persian a large Arabic-derived vocabulary, while Persian adapted the Arabic script with extra letters.",
      "wiki-arabic",
      "unicode-arabic"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const arabicGuide = {
  slug: "arabic",
  name: "Arabic — Modern Standard Arabic (MSA)",
  autonym: "العربية الفصحى الحديثة",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Modern Standard Arabic is the shared language of Arabic books, news, education, public life, and cross-border formal communication, while regional Arabic varieties carry most everyday conversation.",
  family: "Afro-Asiatic, Semitic",
  macroRegion: "Middle East, North Africa, the Horn of Africa, and global diasporas",
  primaryScript: "Arabic",
  difficultyLabel: "Very demanding",
  learnerHook: "Learn MSA and you can follow writing and formal media across the Arabic-speaking world; add one regional variety when you want everyday conversation to sound local.",
  hero: {
    imageAlt: "Modern Standard Arabic in contemporary print and digital typography.",
    callToActionLabel: "Explore MSA in use"
  },
  classification: "The modern standardized register of Arabic, a Central Semitic language continuum",
  speakerCommunity: "Modern Standard Arabic, usually shortened to MSA, connects readers and formal audiences from Morocco to Oman. People learn it through school and meet it in books, journalism, official documents, documentaries, speeches, subtitles, and prepared broadcasts.",
  facts: [
    { label: "Guide focus", value: "Modern Standard Arabic (MSA / fuṣḥā)" },
    { label: "Family", value: "Afro-Asiatic · Semitic · Central Semitic" },
    { label: "Everyday speech", value: "Regional Arabic varieties, not usually MSA" },
    { label: "Script", value: "Right-to-left Arabic abjad; short vowels usually omitted" },
    { label: "Public reach", value: "Education, publishing, news, institutions, and formal cross-border speech" },
    { label: "UN status", value: "Arabic has been an official UN language since 1973" }
  ],
  learnerOverview: "This guide anchors every script, pronunciation, grammar, and phrase example in Modern Standard Arabic. MSA gives you a stable target for reading and formal communication, even though no single city owns its pronunciation.\n\nThink of MSA as the shared formal layer of a much larger Arabic world. A news presenter from Tunisia and a lecturer from Jordan may both use it, but their voices can still reveal where they come from.\n\nYour goal decides what comes next. If you mainly want books, current affairs, public talks, or academic work, MSA can stay at the center; if you want relaxed conversation with family or friends, pair it early with the variety they actually speak.\n\nThe two tracks support each other without doing the same job. MSA makes signs, articles, subtitles, and formal vocabulary easier to recognize, while a regional variety teaches you how people joke, interrupt, soften requests, and tell stories at home.",
  origins: {
    overview: cited(
      "Arabic belongs to the Semitic branch of the Afro-Asiatic family. Old Arabic inscriptions predate Islam, while the Qur'an and early poetry became central witnesses to the classical literary language that later writers and grammarians studied in detail.",
      "wiki-arabic",
      "glottolog-arabic"
    ),
    timeline: [
      {
        period: "Before the 7th century",
        event: cited(
          "People wrote forms of Old Arabic in several scripts, and Arabia also contained other Semitic languages. The evidence doesn't point to one uniform spoken language waiting for the modern alphabet.",
          "wiki-arabic",
          "glottolog-arabic"
        )
      },
      {
        period: "7th–10th centuries",
        event: cited(
          "The Qur'an, poetry, grammar, and dictionaries gave Classical Arabic lasting prestige. As Islamic states expanded, Arabic entered regions where people already spoke Aramaic, Greek, Coptic, Persian, Latin, Amazigh languages, and many others.",
          "wiki-arabic",
          "unesco-arabic"
        )
      },
      {
        period: "8th–15th centuries",
        event: cited(
          "Writers used Arabic across major networks of scholarship, trade, law, travel, literature, and government. Spoken varieties kept changing throughout this period, so literary continuity never meant that everyday speech stood still.",
          "unesco-arabic",
          "georgetown-modern-arabic"
        )
      },
      {
        period: "19th–20th centuries",
        event: cited(
          "Schools, printing, journalism, translation, and broadcasting helped shape a modern prose standard during the cultural movement known as the Nahda. Writers expanded formal vocabulary for modern politics, science, technology, and public life while keeping a close connection to Classical Arabic.",
          "wiki-msa",
          "georgetown-modern-arabic"
        )
      },
      {
        period: "1973 to today",
        event: cited(
          "Arabic became the sixth official language of the United Nations in 1973. Satellite television and digital media now put MSA beside regional speech, code-switching, and informal Arabic written in Latin letters and numerals.",
          "unesco-arabic",
          "unicode-arabic"
        )
      }
    ],
    contactHistory: cited(
      "Arabic has always exchanged words with its neighbors. Greek scholarship, Persian government, Aramaic-speaking communities, Ottoman Turkish, European colonial languages, and modern English all left different traces, while Arabic vocabulary traveled into Persian, Turkish, Urdu, Swahili, Spanish, and many more languages.\n\nMSA often turns to Arabic roots when it needs a new formal term, but writers also translate international compounds or adapt a foreign word. Regional speakers make different choices, so the formal word on a news report may sit beside a French- or English-derived word in everyday conversation.",
      "wiki-arabic",
      "unesco-arabic"
    ),
    standardization: cited(
      "MSA is a shared modern standard rather than the speech of one capital. Publishers, schools, broadcasters, language academies, and government institutions all shape its conventions, but no single worldwide authority decides every word or pronunciation.",
      "wiki-msa",
      "georgetown-modern-arabic"
    )
  },
  variants: {
    overview: cited(
      "Arabic speakers often move along a scale between formal MSA and local conversation instead of flipping between two sealed boxes. Linguists call this situation diglossia: a community uses related varieties for different jobs, with plenty of mixing in the middle.",
      "wiki-msa",
      "cambridge-diglossia",
      "dd-dialects"
    ),
    items: [
      {
        name: "Modern Standard Arabic (MSA / fuṣḥā)",
        note: cited(
          "MSA carries most books, journalism, official documents, formal education, and prepared pan-Arab speech. Children generally learn it alongside literacy rather than acquiring it as their ordinary home variety.",
          "wiki-msa",
          "dd-msa"
        )
      },
      {
        name: "Classical Arabic",
        note: cited(
          "Classical Arabic is the language of the Qur'an and a large premodern literary and scholarly tradition. MSA keeps much of its grammar and core vocabulary, but modern prose has its own vocabulary, conventions, and normal range of styles.",
          "wiki-classical",
          "wiki-msa"
        )
      },
      {
        name: "Egyptian Arabic",
        note: cited(
          "Egyptians normally use local speech in everyday conversation, and Cairo-based cinema, comedy, music, and television made Egyptian forms familiar far beyond Egypt. Egyptian isn't informal MSA; it has its own regular pronunciation, vocabulary, and grammar.",
          "dd-why-egyptian",
          "dd-egyptian-facts"
        )
      },
      {
        name: "Levantine, Iraqi, and Peninsular Arabic",
        note: cited(
          "These labels cover many city, rural, national, and social varieties across the eastern Arabic-speaking world. A learner who needs conversation should choose a real community rather than treating “Levantine” or “Gulf” as one accent.",
          "dd-dialects",
          "dd-levantine-resources"
        )
      },
      {
        name: "Maghrebi Arabic",
        note: cited(
          "Moroccan, Algerian, Tunisian, Libyan, and Hassaniya varieties form a diverse western field shaped by local histories and contact with Amazigh languages, French, Spanish, and others. MSA remains important in public writing, but it won't by itself make fast local conversation easy.",
          "dd-dialects",
          "wiki-arabic"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "MSA courses usually teach 28 consonant letters, three short vowels, matching long vowels, and two common diphthongs. Because MSA has no single native city accent, educated speakers carry regional cues into formal speech, especially in letters such as ج jīm and in rhythm and melody.\n\nYou don't need to erase every regional cue to speak credible MSA. Choose one careful model for consistency, then listen widely enough that another speaker's jīm, vowels, or sentence melody doesn't throw you off.",
      "wiki-standard-phonology",
      "malta-arabic"
    ),
    script: "Arabic script with vowel marks in beginner examples; transliteration follows a readable academic style",
    soundSystem: cited(
      "Arabic distinguishes sounds that English speakers often merge. ح ḥ and ه h differ, ع ʿ is a full consonant, and emphatic consonants such as ص ṣ pull the tongue back and color nearby vowels.\n\nPractice the contrasts in short words before trying to sound forceful. A relaxed, repeatable ḥ or ʿ will serve you better than a dramatic sound that disappears as soon as you speak at normal speed.",
      "wiki-standard-phonology",
      "loc-romanization"
    ),
    prosody: cited(
      "Length matters as much as sound quality. مَلِك malik means “king,” while مَالِك mālik means “owner,” and a doubled consonant can separate دَرَسَ darasa “he studied” from دَرَّسَ darrasa “he taught.”",
      "wiki-standard-phonology",
      "malta-arabic"
    ),
    learnerTraps: [
      "Replacing both ح ḥ and ه h with the same English h",
      "Skipping ع ʿ because the transliteration symbol looks like punctuation",
      "Shortening long vowels and doubled consonants in fast speech",
      "Treating one regional pronunciation of ج as the only correct MSA choice",
      "Reading every final case ending in situations where an MSA speaker would naturally pause"
    ],
    sampleWords: [
      { original: "قَلْب", transliteration: "qalb", translation: "heart", note: "MSA uses q for ق here. Some spoken varieties replace it with a glottal stop or g." },
      { original: "كَلْب", transliteration: "kalb", translation: "dog", note: "Compare it with qalb: one consonant changes the whole word." },
      { original: "حُبّ", transliteration: "ḥubb", translation: "love", note: "The word combines the pharyngeal ḥ with a doubled b." },
      { original: "عَرَبِيّ", transliteration: "ʿarabiyy", translation: "Arabic; Arab (masculine)", note: "Treat ʿayn as a voiced consonant rather than a dramatic growl." },
      { original: "صَباح", transliteration: "ṣabāḥ", translation: "morning", note: "Listen for emphatic ṣ, long ā, and final ḥ." },
      { original: "مُدَرِّس", transliteration: "mudarris", translation: "teacher", note: "Hold the doubled r because consonant length helps build the word." }
    ]
  },
  writing: {
    overview: cited(
      "Arabic runs from right to left, and most letters join their neighbors. Unicode stores each underlying character once, while fonts choose its beginning, middle, end, or isolated shape on screen.\n\nSix common letters—ا د ذ ر ز و—join to the letter before them but not to the one after. Those breaks are part of normal Arabic writing, not spaces or word boundaries.",
      "unicode-arabic",
      "unicode-faq"
    ),
    primaryScript: "Arabic script",
    romanization: cited(
      "Romanization systems serve different readers. Libraries use detailed ALA-LC spellings, academic texts mark contrasts with symbols such as ḥ, ṣ, and ʿ, and informal Arabizi may use 7 for ح or 3 for ع.",
      "loc-romanization",
      "dd-egyptian-phrases"
    ),
    spellingNorms: cited(
      "Adult MSA normally leaves short vowels unwritten, although children's books, teaching materials, dictionaries, and religious texts often add vowel marks. Readers recover the missing vowels from grammar, word patterns, and context, which is why a familiar sentence feels much easier than an isolated unfamiliar word.\n\nSeveral small spelling rules carry a lot of information. Tāʾ marbūṭa ة often marks a feminine ending, hamza ء changes its written seat according to nearby vowels, and alif maqṣūra ى represents a final long ā even though it resembles a dotless yāʾ.",
      "unicode-faq",
      "r12a-orthography"
    ),
    styleNotes: [
      cited("Learn joined letter shapes inside useful words instead of waiting to finish an isolated alphabet chart.", "unicode-arabic"),
      cited("Read fully vowelled beginner text and ordinary unvowelled prose side by side. Remove support gradually as your vocabulary grows.", "r12a-orthography"),
      cited("The definite article is always written ال al-, but speakers assimilate its l before sun letters: الشمس al-shams sounds like ash-shams.", "r12a-orthography"),
      cited("Use a bidirectional text editor when Arabic and English share a line. Punctuation can jump visually even when the stored characters are correct.", "unicode-arabic")
    ]
  },
  grammar: {
    overview: cited(
      "MSA grammar looks less intimidating when you start with patterns instead of complete tables. Many words grow around consonantal roots, nouns show gender and number, and verbs tell you who acts through their endings and prefixes.\n\nLearn each new structure in a sentence you could actually read or say. A chart helps you notice the system, but a headline, short dialogue, or paragraph teaches you which choices writers make in context.",
      "wiki-arabic-grammar",
      "malta-arabic"
    ),
    typologicalProfile: cited(
      "MSA can place a verb before its subject or begin with a noun phrase, and the choice changes emphasis and agreement. Its formal grammar also marks three noun cases with short final vowels, though writers usually omit those vowels and speakers often drop them at a pause.",
      "wiki-arabic-grammar",
      "georgetown-modern-arabic"
    ),
    morphology: cited(
      "A root such as k-t-b carries a broad idea connected with writing, while patterns turn it into words such as كَتَبَ kataba “he wrote,” كاتِب kātib “writer,” and مَكْتَبة maktaba “library.” Roots guide memory, but they don't let you predict every meaning, plural, or vowel automatically.",
      "wiki-arabic-grammar",
      "arabicorpus"
    ),
    syntax: cited(
      "MSA often leaves out present-tense forms of “to be.” هذا كِتابٌ hādhā kitābun means “This is a book,” with no separate word for “is,” while past and future statements use explicit verbs.",
      "wiki-arabic-grammar",
      "malta-arabic"
    ),
    advancedPainPoints: [
      "Choosing case endings and knowing when real formal speech leaves them unspoken",
      "Learning broken plurals whose internal vowels and consonant patterns change",
      "Recognizing the same root inside weak verbs that contain w or y",
      "Matching agreement to word order, human reference, and non-human plurals",
      "Keeping clear boundaries between MSA forms and a chosen spoken variety"
    ],
    topics: [
      {
        title: "No present-tense ‘is’",
        body: cited("An MSA noun sentence simply places the subject and description together in the present. This pattern makes early descriptions pleasantly compact.", "wiki-arabic-grammar", "malta-arabic"),
        example: "البيتُ كبيرٌ. Al-baytu kabīrun.",
        exampleTranslation: "The house is big. In ordinary unvowelled writing, you will see البيت كبير."
      },
      {
        title: "The definite article",
        body: cited("Arabic uses the same written article ال al- for every gender and number. Its pronunciation changes before sun letters, but its spelling stays stable.", "r12a-orthography"),
        example: "الشَّمْسُ ساطِعةٌ. Ash-shamsu sāṭiʿatun.",
        exampleTranslation: "The sun is bright. The written al- sounds like ash- before sh."
      },
      {
        title: "Adjectives follow nouns",
        body: cited("An adjective usually follows its noun and agrees with it in gender, number, definiteness, and case. Put the article on both words when you mean one definite phrase.", "wiki-arabic-grammar"),
        example: "قَرَأْتُ الكِتابَ الجَديدَ. Qaraʾtu al-kitāba al-jadīda.",
        exampleTranslation: "I read the new book. Both “book” and “new” carry the definite article."
      },
      {
        title: "Possession through iḍāfa",
        body: cited("Arabic links two nouns directly to express possession or close association. Grammarians call this an iḍāfa construction, and only the final noun normally takes the definite article.", "wiki-arabic-grammar", "malta-arabic"),
        example: "بابُ المَدْرَسةِ مَفْتوحٌ. Bābu al-madrasati maftūḥun.",
        exampleTranslation: "The school's door is open. Literally, “the door of the school is open.”"
      },
      {
        title: "Verb roots and patterns",
        body: cited("Related patterns can add meanings such as causing, participating, or seeking. Learn each verb with its present form and a sentence because a root alone doesn't tell you how the verb behaves.", "wiki-arabic-grammar", "arabicorpus"),
        example: "دَرَسَ الطّالِبُ العَرَبِيَّةَ، ودَرَّسَها الأُسْتاذُ. Darasa al-ṭālibu al-ʿarabiyyata, wa-darrasahā al-ustādhu.",
        exampleTranslation: "The student studied Arabic, and the teacher taught it. Doubling r changes Form I darasa into causative Form II darrasa."
      },
      {
        title: "Verb-first and subject-first sentences",
        body: cited("MSA allows both verb–subject–object and subject–verb–object orders. When a plural subject follows the verb, formal agreement can be singular; when the subject comes first, the verb normally shows plural agreement.", "wiki-arabic-grammar"),
        example: "وَصَلَ الطُّلّابُ / الطُّلّابُ وَصَلوا. Waṣala al-ṭullābu / al-ṭullābu waṣalū.",
        exampleTranslation: "The students arrived. The first version begins with a singular-marked verb; the second begins with the plural subject and uses a plural verb."
      },
      {
        title: "Non-human plurals",
        body: cited("Formal Arabic often treats a non-human plural as feminine singular for adjective and pronoun agreement. The rule surprises learners because the noun itself still looks plural.", "wiki-arabic-grammar"),
        example: "الكُتُبُ الجَديدةُ مُفيدةٌ. Al-kutubu al-jadīdatu mufīdatun.",
        exampleTranslation: "The new books are useful. Both “new” and “useful” appear in feminine singular form."
      },
      {
        title: "Case endings and pausing",
        body: cited("Careful MSA can mark a noun's role with final vowels: -u for the basic subject form, -a for many objects, and -i after prepositions or in possessive links. Speakers usually drop the final short vowel when they pause, so learn the grammar without forcing a recital style into every sentence.", "wiki-arabic-grammar", "georgetown-modern-arabic"),
        example: "كَتَبَ المُعَلِّمُ رِسالةً لِلطّالِبِ. Kataba al-muʿallimu risālatan li-l-ṭālibi.",
        exampleTranslation: "The teacher wrote a letter to the student. The endings show subject, object, and the noun governed by “to.”"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "MSA belongs to a shared public sphere rather than one local neighborhood. Schools and institutions use it across Arab League states, broadcasters send it across borders, and diaspora readers meet it in community media, education, religion, and online publishing.",
      "wiki-msa",
      "unesco-arabic"
    ),
    regions: [
      { place: "North Africa", note: cited("Morocco, Algeria, Tunisia, Libya, Egypt, and neighboring communities use MSA in formal writing and public institutions beside very different everyday varieties.", "wiki-msa", "dd-dialects") },
      { place: "The Levant and Iraq", note: cited("MSA links national education, books, news, and official communication across Lebanon, Syria, Jordan, Palestine, and Iraq, while daily speech remains local.", "wiki-msa", "dd-levantine-resources") },
      { place: "The Arabian Peninsula", note: cited("Saudi Arabia, Yemen, Oman, the Gulf states, and their migrant communities use MSA in public life beside numerous Peninsular varieties.", "wiki-msa", "dd-dialects") },
      { place: "The Horn of Africa", note: cited("Arabic has official, educational, religious, and media roles in parts of the Horn, but its place differs by country and community.", "unesco-arabic", "wiki-arabic") },
      { place: "Global diasporas", note: cited("Heritage schools, publishers, broadcasters, mosques, churches, universities, and digital communities keep MSA visible far beyond Arabic-majority states.", "unesco-arabic") }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "MSA asks English-speaking learners to build a new script, sound system, vocabulary base, and grammar at once. The bigger strategic challenge is that formal reading skill doesn't automatically become natural local conversation.",
      "dd-msa",
      "dd-dialects"
    ),
    easierAspects: [
      "The spelling system becomes regular once you know joining and the letter inventory",
      "Root-and-pattern families help related vocabulary reinforce itself",
      "MSA has a huge supply of books, courses, news, dictionaries, and subtitled formal media",
      "The same standard gives access to texts produced across many countries"
    ],
    hardAspects: [
      "Adult text usually omits short vowels",
      "Several consonants and length contrasts need deliberate listening practice",
      "Broken plurals and weak verbs require more than one predictable ending",
      "Case, agreement, and word order interact in formal sentences",
      "Everyday speech differs substantially from MSA and varies by region"
    ],
    plateauRisks: [
      "Reading lessons forever without listening to unscripted formal speech",
      "Mixing Egyptian, Levantine, Gulf, and MSA forms without labels",
      "Memorizing roots and grammar charts without learning whole phrases",
      "Waiting for perfect case endings before speaking at all"
    ],
    workload: cited(
      "Start with a narrow goal: read current affairs, follow formal video, study literature, or support a spoken variety with literacy. MSA grows through repeated reading and listening, while everyday conversation needs a separate stream of work with speakers from your target community.",
      "dd-msa",
      "dd-plan"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Spend the first stage learning the script through useful MSA sentences, not isolated letters alone. Then cycle through a short text: read it with vowels, hear it, mark the root families and grammar, and reread the unvowelled version until the words arrive as phrases.\n\nAt an intermediate level, follow one topic across several formats. Read a short article, watch an explainer on the same subject, and collect the phrases that both sources repeat instead of building separate lists of isolated words.\n\nAdvanced learners need range as well as difficulty. Compare formal news, literary prose, interviews, dubbed media, and a speaker who moves between MSA and local Arabic, then note which grammar and vocabulary survive every shift.",
      "dd-msa",
      "malta-arabic"
    ),
    mediaPractice: cited(
      "Use prepared news and educational video before jumping to live political debate. Read a transcript, watch once with support, then shadow one short section and notice where the presenter pauses instead of pronouncing every possible case vowel.",
      "dd-msa",
      "georgetown-modern-arabic"
    ),
    dictionariesAndCorpora: cited(
      "Look up a word by root when ordinary search fails, but save the complete phrase that brought you there. Corpora such as arabiCorpus can reveal common partners and genres, while the Library of Congress table helps when you need consistent scholarly romanization.",
      "arabicorpus",
      "loc-romanization"
    ),
    resources: [
      { type: "course", title: "Discover Discomfort: How to Learn MSA", url: "https://discoverdiscomfort.com/learn-modern-standard-arabic-msa/", level: "all", description: cited("This candid guide explains what MSA does well, what it won't do for casual local conversation, and which learning resources the author found useful.", "dd-msa") },
      { type: "course", title: "Al Jazeera Learning Arabic", url: "https://learning.aljazeera.net/en", level: "all", description: cited("Al Jazeera's free lessons build MSA reading and listening around video, news, grammar, and graded activities. The material suits learners who want contemporary media language.", "aljazeera-learning") },
      { type: "corpus", title: "BYU arabiCorpus", url: "https://arabicorpus.byu.edu/", level: "advanced", description: cited("Search newspapers, literature, nonfiction, Egyptian material, and premodern texts for words and collocations. The site has announced a July 2027 retirement, so don't make it your only archive.", "arabicorpus") },
      { type: "other", title: "Discover Discomfort: Arabic Dialects Compared", url: "https://discoverdiscomfort.com/arabic-dialects-maghrebi-egyptian-levantine-gulf-hejazi-msa/", level: "all", description: cited("Use this guide when you are ready to pair MSA with a spoken target. It compares broad regional choices without pretending the borders are exact.", "dd-dialects") },
      { type: "other", title: "Library of Congress Arabic Romanization Table", url: "https://www.loc.gov/catdir/cpso/romanization/arabic.pdf", level: "advanced", description: cited("ALA-LC romanization is detailed and designed for cataloging. It helps researchers match names and titles across library records.", "loc-romanization") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "MSA vocabulary comes alive in families rather than isolated flashcards. Once you connect كِتاب kitāb “book” with كاتِب kātib “writer” and مَكْتَبة maktaba “library,” the spelling and meaning begin to support each other.",
      "wiki-arabic-grammar",
      "arabicorpus"
    ),
    notableWords: [
      { term: "كِتاب", transliteration: "kitāb", meaning: "book", note: cited("This familiar k-t-b word opens a large family connected with writing, offices, writers, libraries, and correspondence.", "arabicorpus") },
      { term: "فُصْحى", transliteration: "fuṣḥā", meaning: "eloquent; standard Arabic", note: cited("Arabic speakers commonly use fuṣḥā for the formal literary standard. The label can include both modern and classical forms depending on context.", "wiki-msa") },
      { term: "عِلْم", transliteration: "ʿilm", meaning: "knowledge; science", note: cited("The root ʿ-l-m appears in words for knowing, teaching, learning, information, and a scholar. Context decides whether ʿilm means knowledge broadly or a particular science.", "arabicorpus") },
      { term: "مُجْتَمَع", transliteration: "mujtamaʿ", meaning: "society; community", note: cited("Modern journalism and public writing use this word constantly. Its root relates to gathering and brings together words for meetings, groups, and universities.", "arabicorpus") },
      { term: "حُرِّيّة", transliteration: "ḥurriyya", meaning: "freedom", note: cited("The word appears across political, philosophical, literary, and everyday writing. Its doubled r and final -iyya also make it a useful pronunciation pattern.", "arabicorpus") },
      { term: "تَفَضَّل", transliteration: "tafaḍḍal", meaning: "please; go ahead", note: cited("This invitation appears in formal and colloquial interaction. Gesture tells you whether someone means “come in,” “take this,” “speak,” or “go first.”", "dd-egyptian-phrases", "dd-levantine-resources") },
      { term: "يَعْني", transliteration: "yaʿnī", meaning: "it means; I mean", note: cited("In MSA it can introduce a meaning or explanation. In regional conversation it also works as a discourse marker much like “I mean.”", "dd-egyptian-phrases") }
    ],
    loanwordLayers: cited(
      "MSA creates modern vocabulary through inherited patterns, translated compounds, and direct borrowing. Regional varieties show different French, English, Italian, Turkish, Amazigh, and other layers, so a familiar local loan may not belong in formal writing.",
      "wiki-arabic",
      "georgetown-modern-arabic"
    ),
    idioms: [
      { original: "العَيْنُ بَصيرةٌ واليَدُ قَصيرةٌ", transliteration: "al-ʿaynu baṣīratun wa-l-yadu qaṣīratun", translation: "The eye sees, but the hand is short.", note: "A formal proverb for seeing what should be done while lacking the means to do it." },
      { original: "رُبَّ ضارَّةٍ نافِعةٌ", transliteration: "rubba ḍārratin nāfiʿatun", translation: "A harmful thing may turn out to be beneficial.", note: "A formal maxim close to “a blessing in disguise.”" },
      { original: "الصَّديقُ وَقْتَ الضّيقِ", transliteration: "al-ṣadīqu waqta al-ḍīqi", translation: "A true friend appears in hard times.", note: "Literally, “the friend at the time of distress.”" },
      { original: "لا يُلْدَغُ المُؤْمِنُ مِن جُحْرٍ واحِدٍ مَرَّتَيْنِ", transliteration: "lā yuldaghu al-muʾminu min juḥrin wāḥidin marratayn", translation: "A believer isn't stung from the same hole twice.", note: "A formal saying that warns against repeating the same mistake." }
    ],
    textGenres: [
      "Contemporary MSA journalism, documentary narration, and public essays",
      "Modern novels, short stories, memoirs, and children's literature",
      "Official documents, speeches, reports, and academic prose",
      "Classical poetry and prose studied through their relationship to modern usage",
      "Subtitles and dubbing, which often use MSA even when the original dialogue is casual",
      "Digital articles, explainers, newsletters, and educational video scripts"
    ]
  },
  relationships: {
    overview: cited(
      "Arabic's family tree and its contact history answer different questions. Hebrew, Aramaic, and Amharic are genetic relatives, while Persian, Turkish, Swahili, Urdu, Amazigh languages, and Spanish share vocabulary because communities met, traded, governed, studied, migrated, and wrote together.",
      "glottolog-arabic",
      "wiki-arabic"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "MSA appears in serious news and government, but it isn't confined to solemn subjects. Writers use it for children's stories, science explainers, football analysis, comedy captions, fantasy novels, dubbed cartoons, recipes, and online arguments. Arabic speakers also bring regional rhythm and vocabulary into formal situations, so real public Arabic often sounds more flexible than a grammar exercise.\n\nArabic doesn't belong to one religion, ethnicity, or country. Muslims, Christians, Jews, Druze, secular speakers, and many other communities have shaped its texts and public life, while millions of Muslims who study or recite Arabic don't identify as Arab.\n\nExpressions that mention God can function as everyday social language as well as religious speech. Listen to who says them, in which setting, and with what tone before deciding what they mean in a particular conversation.",
  resources: [
    { type: "course", title: "Discover Discomfort: How to Learn Modern Standard Arabic", url: "https://discoverdiscomfort.com/learn-modern-standard-arabic-msa/", level: "all", description: cited("A practical overview of MSA goals, courses, books, and tradeoffs. It is especially honest about why MSA alone won't produce local everyday conversation.", "dd-msa") },
    { type: "other", title: "Discover Discomfort: Arabic Dialects Compared", url: "https://discoverdiscomfort.com/arabic-dialects-maghrebi-egyptian-levantine-gulf-hejazi-msa/", level: "all", description: cited("A clear map of the choice between MSA and broad spoken regions. Read it before adding a conversational track to your study plan.", "dd-dialects") },
    { type: "course", title: "Discover Discomfort: Learn Arabic in 60 Days", url: "https://discoverdiscomfort.com/learn-arabic-plan/", level: "beginner", description: cited("This first-person Egyptian immersion plan shows how tutoring, self-study, pronunciation, and clear goals fit together. Borrow the method while remembering that its conversation target isn't MSA.", "dd-plan") },
    { type: "course", title: "Al Jazeera Learning Arabic", url: "https://learning.aljazeera.net/en", level: "all", description: cited("Free graded lessons connect MSA vocabulary and grammar with contemporary video and news. It gives learners a bridge from exercises to real formal media.", "aljazeera-learning") },
    { type: "corpus", title: "BYU arabiCorpus", url: "https://arabicorpus.byu.edu/", level: "advanced", description: cited("A searchable collection for checking frequency, collocations, and genre. Note the site's announced July 2027 retirement and save a second corpus option.", "arabicorpus") },
    { type: "other", title: "Unicode Arabic Script Specification", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-9/", level: "advanced", description: cited("The technical reference for Arabic joining, directionality, characters, and rendering. It is useful when text looks wrong in software even though the language is correct.", "unicode-arabic") },
    { type: "dictionary", title: "Discover Discomfort: Free Egyptian Arabic Resources", url: "https://discoverdiscomfort.com/learn-egyptian-arabic-free-resources/", level: "all", description: cited("A useful collection of dictionaries and audio for the Egyptian conversation track that many MSA learners add. Keep its colloquial forms labeled as Egyptian.", "dd-egyptian-free") },
    { type: "other", title: "Discover Discomfort: Best Levantine Arabic Resources", url: "https://discoverdiscomfort.com/best-resources-learn-levantine-arabic/", level: "all", description: cited("Books, tutors, dictionaries, and media for learners who pair MSA with a Levantine variety. The article also makes clear where broad labels hide local differences.", "dd-levantine-resources") }
  ],
  relatedLanguages,
  phrases: [
    { original: "السَّلامُ عَلَيْكُم", transliteration: "as-salāmu ʿalaykum", translation: "Peace be upon you; hello.", usageNote: "Broadly understood in MSA and regional speech. The conventional reply is وَعَلَيْكُمُ السَّلام wa-ʿalaykumu as-salām." },
    { original: "صَباحُ الخَيْرِ", transliteration: "ṣabāḥu al-khayri", translation: "Good morning.", literalMeaning: "Morning of goodness.", usageNote: "The full endings show careful MSA. In ordinary use, you will usually hear ṣabāḥ al-khayr." },
    { original: "شُكْرًا", transliteration: "shukran", translation: "Thank you.", usageNote: "Standard and understood everywhere, though local alternatives may sound warmer in conversation." },
    { original: "مِن فَضْلِكَ / مِن فَضْلِكِ", transliteration: "min faḍlika / min faḍliki", translation: "Please. [to a man / to a woman]", literalMeaning: "From your kindness.", usageNote: "A clear MSA request phrase. Regional speech often prefers other forms." },
    { original: "عَفْوًا", transliteration: "ʿafwan", translation: "You're welcome; excuse me.", usageNote: "The situation decides whether it answers thanks or politely seeks attention." },
    { original: "لا أَفْهَمُ", transliteration: "lā afhamu", translation: "I don't understand.", usageNote: "This is MSA. Everyday regional equivalents differ." },
    { original: "هَلْ يُمْكِنُكَ أَنْ تَتَكَلَّمَ بِبُطْءٍ؟", transliteration: "hal yumkinuka an tatakallama bi-buṭʾin?", translation: "Can you speak slowly? [to a man]", usageNote: "Change yumkinuka and tatakallama for a female addressee in careful MSA." },
    { original: "ماذا تَعْني هٰذِهِ الكَلِمَةُ؟", transliteration: "mādhā taʿnī hādhihi al-kalimatu?", translation: "What does this word mean?", usageNote: "Useful in a classroom or formal learning conversation." },
    { original: "هَلْ يُمْكِنُكَ أَنْ تُعيدَ ذٰلِكَ؟", transliteration: "hal yumkinuka an tuʿīda dhālika?", translation: "Can you repeat that? [to a man]", usageNote: "In normal paused MSA, speakers won't pronounce every written case ending." },
    { original: "أَتَعَلَّمُ اللُّغَةَ العَرَبِيَّةَ", transliteration: "ataʿallamu al-lughata al-ʿarabiyyata", translation: "I'm learning Arabic.", usageNote: "This sentence uses MSA vocabulary and grammar." },
    { original: "أَيْنَ مَحَطَّةُ القِطارِ؟", transliteration: "ayna maḥaṭṭatu al-qiṭāri?", translation: "Where is the railway station?", usageNote: "A clear MSA question, although local speech may use a different word or pronunciation." },
    { original: "كَمْ سِعْرُ هٰذا؟", transliteration: "kam siʿru hādhā?", translation: "How much does this cost?", literalMeaning: "What is the price of this?", usageNote: "This sounds formal and is most natural in an MSA-learning context or when accommodating across varieties." },
    { original: "مَعَ السَّلامَةِ", transliteration: "maʿa as-salāmati", translation: "Goodbye.", literalMeaning: "With safety.", usageNote: "Broadly understood. Speakers usually pause without the final -i." },
    { original: "تَشَرَّفْتُ بِمَعْرِفَتِكَ", transliteration: "tasharraftu bi-maʿrifatika", translation: "Pleased to meet you. [to a man]", literalMeaning: "I was honored by knowing you.", usageNote: "Polite MSA; everyday versions vary by region and addressee." }
  ],
  sources: [
    { id: "dd-msa", title: "How to Learn Modern Standard Arabic (MSA) and Why", url: "https://discoverdiscomfort.com/learn-modern-standard-arabic-msa/", publisher: "Discover Discomfort", publishedAt: "2019-10-28", updatedAt: "2023-05-08", accessedAt: "2026-07-18" },
    { id: "dd-dialects", title: "Arabic Dialects Compared: Maghrebi, Egyptian, Levantine, Hejazi, Gulf, and MSA", url: "https://discoverdiscomfort.com/arabic-dialects-maghrebi-egyptian-levantine-gulf-hejazi-msa/", publisher: "Discover Discomfort", updatedAt: "2024-07-17", accessedAt: "2026-07-18" },
    { id: "dd-plan", title: "Learn Arabic in 60 Days — A Plan with Results", url: "https://discoverdiscomfort.com/learn-arabic-plan/", publisher: "Discover Discomfort", accessedAt: "2026-07-18" },
    { id: "dd-why-egyptian", title: "Why Learn Egyptian Arabic?", url: "https://discoverdiscomfort.com/why-learn-egyptian-arabic-dialect/", publisher: "Discover Discomfort", publishedAt: "2018-12-31", updatedAt: "2020-10-27", accessedAt: "2026-07-18" },
    { id: "dd-egyptian-facts", title: "Egyptian Arabic FAQ — Ten Interesting Facts and Figures", url: "https://discoverdiscomfort.com/egyptian-arabic-faq-facts-and-figures/", publisher: "Discover Discomfort", updatedAt: "2024-07-17", accessedAt: "2026-07-18" },
    { id: "dd-egyptian-phrases", title: "40 Basic Egyptian Arabic Phrases to Sound Local", url: "https://discoverdiscomfort.com/colloquial-egyptian-arabic-phrases/", publisher: "Discover Discomfort", updatedAt: "2023-10-08", accessedAt: "2026-07-18" },
    { id: "dd-egyptian-free", title: "Learn Egyptian Arabic — Free Super Useful Resources", url: "https://discoverdiscomfort.com/learn-egyptian-arabic-free-resources/", publisher: "Discover Discomfort", accessedAt: "2026-07-18" },
    { id: "dd-levantine-resources", title: "Best Resources to Learn Levantine Arabic", url: "https://discoverdiscomfort.com/best-resources-learn-levantine-arabic/", publisher: "Discover Discomfort", updatedAt: "2026-05-11", accessedAt: "2026-07-18" },
    { id: "wiki-arabic", title: "Arabic", url: "https://en.wikipedia.org/wiki/Arabic", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "wiki-msa", title: "Modern Standard Arabic", url: "https://en.wikipedia.org/wiki/Modern_Standard_Arabic", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "wiki-classical", title: "Classical Arabic", url: "https://en.wikipedia.org/wiki/Classical_Arabic", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "wiki-arabic-grammar", title: "Arabic grammar", url: "https://en.wikipedia.org/wiki/Arabic_grammar", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "wiki-standard-phonology", title: "Standard Arabic phonology", url: "https://en.wikipedia.org/wiki/Standard_Arabic_phonology", publisher: "Wikipedia", accessedAt: "2026-07-18" },
    { id: "unesco-arabic", title: "World Arabic Language Day", url: "https://www.unesco.org/en/world-arabic-language-day", publisher: "UNESCO", accessedAt: "2026-07-18" },
    { id: "glottolog-arabic", title: "Glottolog: Arabic and Standard Arabic", url: "https://glottolog.org/resource/languoid/id/arab1395", publisher: "Glottolog", accessedAt: "2026-07-18" },
    { id: "unicode-arabic", title: "The Unicode Standard, Chapter 9: Arabic", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-9/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-18" },
    { id: "unicode-faq", title: "Arabic Script FAQ", url: "https://www.unicode.org/faq/arabic.html", publisher: "Unicode Consortium", accessedAt: "2026-07-18" },
    { id: "r12a-orthography", title: "Arabic Orthography Notes", url: "https://r12a.github.io/scripts/arab/arb.html", publisher: "Richard Ishida", updatedAt: "2026", accessedAt: "2026-07-18" },
    { id: "loc-romanization", title: "Arabic Romanization Table", url: "https://www.loc.gov/catdir/cpso/romanization/arabic.pdf", publisher: "Library of Congress", updatedAt: "2012", accessedAt: "2026-07-18" },
    { id: "georgetown-modern-arabic", title: "Modern Arabic: Structures, Functions, and Varieties", url: "https://press.georgetown.edu/Book/Modern-Arabic", publisher: "Georgetown University Press", accessedAt: "2026-07-18" },
    { id: "cambridge-diglossia", title: "Diglossia — The Arabic Language", url: "https://www.cambridge.org/core/books/abs/arabic-language/diglossia/1A61D491169E658A864F85D9DBABBF06", publisher: "Cambridge University Press", publishedAt: "2022-11-18", accessedAt: "2026-07-18" },
    { id: "malta-arabic", title: "Arabic 1 for Near Eastern Studies", url: "https://www.um.edu.mt/courses/studyunit/ARB1020", publisher: "University of Malta", accessedAt: "2026-07-18" },
    { id: "aljazeera-learning", title: "Learning Arabic", url: "https://learning.aljazeera.net/en", publisher: "Al Jazeera", accessedAt: "2026-07-18" },
    { id: "arabicorpus", title: "arabiCorpus", url: "https://arabicorpus.byu.edu/", publisher: "Brigham Young University College of Humanities", accessedAt: "2026-07-18" }
  ],
  seo: {
    title: "Arabic — Modern Standard Arabic (MSA): Script, Grammar and Learning Guide",
    description: "A clear, example-rich guide to Modern Standard Arabic, including its relationship with spoken Arabic varieties, pronunciation, script, grammar, phrases, media, and learning resources."
  }
} satisfies LanguageGuide;
