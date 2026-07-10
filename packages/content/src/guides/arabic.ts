import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Hebrew",
    slug: "hebrew",
    relationship: "Northwest Semitic relative",
    explanation: cited(
      "Arabic and Hebrew share a distant Semitic inheritance: consonantal roots, related derivational patterns, grammatical gender, and recognizable cognates such as Arabic salām and Hebrew shalom. They are not mutually intelligible, and their modern histories differ sharply, but comparison can make features such as root families feel less mysterious.",
      "wiki-arabic",
      "glottolog-arabic"
    )
  },
  {
    name: "Aramaic",
    relationship: "Northwest Semitic relative and historical contact language",
    explanation: cited(
      "Aramaic is both a relative and an important historical neighbor. Varieties of Aramaic were used across the Near East before and alongside Arabic, and contact is visible in religious and learned vocabulary. Modern Aramaic varieties survive today, so the relationship belongs to living communities as well as ancient manuscripts.",
      "wiki-arabic",
      "glottolog-arabic"
    )
  },
  {
    name: "Amharic",
    slug: "amharic",
    relationship: "Ethio-Semitic relative",
    explanation: cited(
      "Amharic shows how diverse the Semitic family is outside the Arabic–Hebrew comparison. It retains root-based morphology but uses the Ethiopic script and has developed in a different regional ecology. Arabic and Amharic have also exchanged vocabulary through religion, trade, migration, and the Red Sea world.",
      "glottolog-arabic",
      "unesco-arabic"
    )
  },
  {
    name: "Persian",
    slug: "persian",
    relationship: "Unrelated Iranian language with deep literary contact",
    explanation: cited(
      "Persian is Indo-European, not Semitic, yet centuries of scholarship and administration created an enormous shared learned vocabulary. Persian adapted the Arabic script with additional letters; Arabic in turn received Persian words. Similar-looking texts therefore conceal very different grammar.",
      "unicode-arabic",
      "unesco-arabic"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const arabicGuide = {
  slug: "arabic",
  name: "Arabic",
  autonym: "العربية",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Arabic is a family of closely related spoken varieties joined by a powerful written standard, a shared literary inheritance, and an unusually mobile culture of news, music, faith, film, and conversation.",
  family: "Afro-Asiatic, Semitic",
  macroRegion: "Middle East, North Africa, the Horn of Africa, and global diasporas",
  primaryScript: "Arabic",
  difficultyLabel: "Very demanding",
  learnerHook: "Arabic opens several doors at once: intimate local conversation through a regional variety, a transnational public sphere through Modern Standard Arabic, and more than a millennium of poetry, scholarship, storytelling, and religious writing.",
  hero: {
    imageAlt: "Arabic calligraphy and contemporary printed Arabic representing the language's literary and everyday registers.",
    callToActionLabel: "Explore Arabic in use"
  },
  classification: "A Central Semitic language complex whose standardized literary form coexists with many regional vernaculars",
  speakerCommunity: "Arabic is used daily by more than 400 million people, but that headline number describes a multilingual social world rather than 400 million people speaking identically. A family in Casablanca, Cairo, Beirut, Khartoum, Baghdad, or Muscat normally uses a local variety at home. Education, books, public institutions, formal speeches, and much pan-Arab news use Modern Standard Arabic, while speakers continuously mix registers according to audience and purpose. Arabic is also a liturgical and scholarly language for Muslims far beyond Arab-majority societies, and an important heritage language in diasporas on every inhabited continent.",
  facts: [
    { label: "Family", value: "Afro-Asiatic · Semitic · Central Semitic" },
    { label: "Daily users", value: "More than 400 million across all forms (UNESCO)" },
    { label: "Formal standard", value: "Modern Standard Arabic (العربية الفصحى)" },
    { label: "Everyday speech", value: "Regional vernaculars such as Egyptian, Levantine, Gulf, Iraqi, Sudanese, and Maghrebi" },
    { label: "Script", value: "Right-to-left Arabic abjad; short vowels usually omitted" },
    { label: "UN status", value: "One of six official languages since 1973" }
  ],
  learnerOverview: "The first honest answer to “Which Arabic should I learn?” is another question: what do you want to do? For relatives in Jordan, choose Jordanian or broadly Levantine speech. If Cairo and Egyptian cinema are the magnet, study Egyptian. For newspapers, literature, diplomacy, or academic work across countries, begin with Modern Standard Arabic (MSA). Most serious learners eventually combine one spoken variety with MSA, but they need not wait years before speaking. Pair the alphabet and some formal reading with greetings, questions, and high-frequency verbs from one community. Discover Discomfort's writers selected Egyptian for immersion, then treated MSA as a related second register rather than pretending one course covered both. Keep notes labeled—MSA, Egyptian, Levantine, Gulf, or another variety—because an unlabeled phrase list produces unnatural mixtures. Arabic also offers satisfying systems: once k-t-b connects kitāb “book,” kātib “writer,” and maktaba “library,” vocabulary becomes a network rather than a pile of blocks.",
  origins: {
    overview: cited(
      "Arabic belongs to the Semitic branch of Afro-Asiatic. Its history is more complicated than a language appearing fully formed with Islam: inscriptions document several ancient languages and scripts, while Old Arabic precedes the classical literary tradition. The Qur'an and early poetry became central witnesses to Classical Arabic without erasing spoken diversity. After the seventh-century conquests, Arabic expanded through the Levant, Mesopotamia, Egypt, North Africa, and beyond through religion, administration, trade, and urban life. Communities shifted over centuries and carried traces of Aramaic, Coptic, Greek, Amazigh languages, and Persian into regional speech. Medieval Arabic became a vehicle for philosophy, medicine, mathematics, astronomy, law, travel, poetry, and popular narrative. Modern Arabic thus inherits both Arabian roots and a cosmopolitan history of circulation.",
      "wiki-arabic",
      "unesco-arabic",
      "glottolog-arabic"
    ),
    timeline: [
      {
        period: "Before the 7th century",
        event: cited(
          "Old Arabic is attested in inscriptions written in more than one script. The linguistic landscape of Arabia included other Semitic languages as well, so “pre-Islamic Arabic” should not be imagined as a uniform modern national language waiting for a standard alphabet.",
          "wiki-arabic",
          "glottolog-arabic"
        )
      },
      {
        period: "7th–10th centuries",
        event: cited(
          "The Qur'an, poetry, grammar, and lexicography gave Classical Arabic exceptional prestige. Expansion of Islamic polities carried Arabic into older Aramaic-, Greek-, Coptic-, Persian-, Latin-, and Amazigh-speaking regions, where language shift and bilingualism unfolded unevenly.",
          "wiki-arabic",
          "unesco-arabic"
        )
      },
      {
        period: "8th–15th centuries",
        event: cited(
          "Arabic served broad scholarly and commercial networks. Writers translated, debated, and extended earlier knowledge while creating new traditions in science, philosophy, history, geography, adab literature, and poetry; everyday varieties continued changing beneath the literary norm.",
          "unesco-arabic"
        )
      },
      {
        period: "19th–20th centuries",
        event: cited(
          "The Nahda, or Arab cultural renaissance, new schools, printing, journalism, translation, and broadcasting accelerated modernization of literary vocabulary and prose. The resulting standard is commonly called Modern Standard Arabic, though it remains closely connected to Classical Arabic.",
          "wiki-msa",
          "wiki-arabic"
        )
      },
      {
        period: "1973 to the digital present",
        event: cited(
          "Arabic became the sixth official language of the United Nations in 1973. Satellite television, migration, social media, subtitling, and Arabizi—informal Arabic written with Latin letters and numerals—now expose speakers to more cross-regional variation than older national media systems did.",
          "unesco-arabic",
          "unicode-arabic"
        )
      }
    ],
    contactHistory: cited(
      "Arabic's vocabulary records movement in both directions. Persian administration, Greek scholarship, and neighboring Semitic languages left layers; Arabic later contributed words to Persian, Turkish, Urdu, Swahili, Spanish, and many others. Modern varieties absorbed French, English, Italian, and Turkish vocabulary in different regions. Borrowing does not make a variety “less Arabic”: Moroccan dārija and Egyptian ʿāmmiyya combine inherited structure with local history, while formal Arabic creates technical terms through derivation, translation, and borrowing. A familiar loan may still have shifted sense or register.",
      "unesco-arabic",
      "dd-dialects",
      "wiki-arabic"
    ),
    standardization: cited(
      "Modern Standard Arabic is a pluricentric written standard, not the home speech of one capital. Academies, ministries, publishers, broadcasters, and professional conventions all influence it; no global authority controls every new word. Formal speech ranges from carefully inflected presentation to flexible educated Arabic colored by region. Classical Arabic remains essential for premodern and Islamic texts, while MSA supplies contemporary institutional vocabulary. Calling MSA “the real Arabic” obscures systematic vernacular grammars; calling it “dead” ignores daily reading, writing, broadcasting, and lecturing.",
      "wiki-msa",
      "dd-msa",
      "dd-dialects"
    )
  },
  variants: {
    overview: cited(
      "Arabic varieties form overlapping continua, not boxes with crisp borders. Geography matters alongside city, countryside, religion, age, class, migration, and formality. Speakers may slow down, avoid local words, borrow from MSA, or switch variety across regions. Labels such as “Egyptian” and “Levantine” are learning umbrellas, not claims that Alexandria and Upper Egypt, or Beirut and rural Jordan, sound identical. Media exposure can matter as much as structural distance for mutual understanding.",
      "dd-dialects",
      "wiki-arabic"
    ),
    items: [
      {
        name: "Modern Standard Arabic (MSA / fuṣḥā)",
        note: cited(
          "The shared variety of publishing, news scripts, official documents, education, and prepared speech. It offers wide reading access but is not children's ordinary home variety.",
          "wiki-msa",
          "dd-msa"
        )
      },
      {
        name: "Egyptian Arabic (maṣri)",
        note: cited(
          "Egypt has many local varieties; Cairo speech is especially visible in courses, film, comedy, and music. Its media reach creates familiarity abroad, not universal effortless understanding.",
          "dd-why-egyptian",
          "dd-egyptian-facts"
        )
      },
      {
        name: "Levantine Arabic (shāmi)",
        note: cited(
          "A continuum across Lebanon, Syria, Jordan, and Palestine with urban and rural differences. Drama, music, tutors, and courses are abundant; pronunciation and vocabulary still locate speakers more precisely.",
          "dd-levantine-resources",
          "dd-dialects"
        )
      },
      {
        name: "Iraqi and Peninsular varieties",
        note: cited(
          "Iraqi, Gulf, Hejazi, Najdi, Yemeni, and Omani speech cannot be one “Gulf accent.” Choose a community, then refine by city and speaker instead of using a synthetic list.",
          "dd-dialects",
          "wiki-arabic"
        )
      },
      {
        name: "Maghrebi Arabic (dārija)",
        note: cited(
          "Moroccan, Algerian, Tunisian, Libyan, and Hassaniya varieties form a diverse western field shaped by Amazigh languages, French, Spanish, and local histories. Eastern listeners may need accommodation, while Maghrebi speakers often know eastern media.",
          "dd-dialects",
          "wiki-arabic"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Arabic pronunciation becomes manageable when sounds are learned as contrasts rather than theatrical “throat noises.” MSA teaching commonly presents 28 consonant letters, three short vowels /a i u/, corresponding long vowels, and diphthongs. The exact sound values change by region: the letter ج is /dʒ/ in many MSA traditions, /g/ in much Egyptian speech, and /ʒ/ in parts of the Levant and North Africa. ق may be [q], [ʔ], [g], or another realization depending on variety and social context. None is a lazy corruption. A learner needs one stable production target and enough comparative listening to recognize alternatives.",
      "wiki-arabic",
      "dd-dialects"
    ),
    script: "Arabic script with optional vowel marks; examples use a readable academic-style transliteration",
    soundSystem: cited(
      "Three distinctions deserve early attention. First, consonants such as س s and ص ṣ contrast through pharyngealization, often called “emphasis”; the emphatic consonant also colors nearby vowels. Second, ح ḥ and ع ʿ are pharyngeal consonants with no simple English equivalent, while خ kh and غ gh are produced farther back than English h. Third, vowel length can distinguish words: مَلِك malik “king” and مَالِك mālik “owner” are not merely different accents. Consonant length matters too: دَرَسَ darasa “he studied” versus دَرَّسَ darrasa “he taught.” Train these with short recorded pairs, then place them in sentences so correct timing survives real speech.",
      "wiki-arabic",
      "loc-romanization"
    ),
    prosody: cited(
      "Stress is predictable enough within a chosen variety but not identical across the Arabic world. Heavy syllables—those with a long vowel or ending in a consonant—help determine stress, and dialects reshape syllables when short vowels disappear. Formal case vowels can alter the rhythm of carefully read MSA, while ordinary unvowelled reading often pauses without them. Listen for phrase melody as well as individual consonants: a perfectly formed ʿayn inside English timing still sounds foreign. Shadow one speaker, mark long vowels and doubled consonants, and imitate an entire breath group before analyzing it.",
      "wiki-arabic",
      "dd-egyptian-phrases"
    ),
    learnerTraps: [
      "Replacing both ح ḥ and ه h with English h, which erases meaningful contrasts",
      "Treating ع ʿ as a pause or ignoring it instead of learning it as a consonant",
      "Shortening long vowels and doubled consonants when speaking quickly",
      "Assuming one pronunciation of ج or ق is universally correct",
      "Pronouncing every written final case ending in contexts where speakers normally pause"
    ],
    sampleWords: [
      { original: "قَلْب", transliteration: "qalb", translation: "heart (MSA)", note: "Use it to practice ق q and the final cluster; Levantine urban speech may use ʾalb with a glottal stop." },
      { original: "كَلْب", transliteration: "kalb", translation: "dog (MSA)", note: "A classic minimal contrast with qalb: only the first consonant changes." },
      { original: "حُبّ", transliteration: "ḥubb", translation: "love", note: "Both features matter: the pharyngeal ḥ and the doubled b." },
      { original: "عَرَبِيّ", transliteration: "ʿarabiyy", translation: "Arabic; Arab (masculine)", note: "Begin with a gentle voiced ʿayn rather than forcing a harsh growl." },
      { original: "صَباح", transliteration: "ṣabāḥ", translation: "morning", note: "Contrasts emphatic ṣ, long ā, and final pharyngeal ḥ in one common word." },
      { original: "مُدَرِّس", transliteration: "mudarris", translation: "teacher", note: "Hold the doubled r: consonant length belongs to the word's morphology." }
    ]
  },
  writing: {
    overview: cited(
      "Arabic is written right to left in a connected script. Most letters change shape according to position, but Unicode stores the underlying character and rendering software selects the contextual glyph. Six common letters—ا د ذ ر ز و—connect to the preceding letter but not the following one, creating visible breaks inside words. The system is often called an abjad because consonant letters carry most of the lexical information. Short vowels can be shown with marks above or below letters, but adult prose normally omits them. This does not make reading a guessing game once grammar, roots, and vocabulary supply context; it does make beginner texts and dictionaries especially valuable.",
      "unicode-arabic",
      "wiki-arabic"
    ),
    primaryScript: "Arabic script",
    romanization: cited(
      "Romanization has several jobs and therefore several standards. ALA-LC is designed for libraries and represents details that casual learners may not need; scholarly systems use symbols such as ḥ, ṣ, and ʿ; online Arabizi may use numerals such as 3 for ع and 7 for ح. Use transliteration long enough to hear and record distinctions, but type Arabic from the beginning. Romanization cannot reliably solve omitted vowels, dialect spelling, or the visual memory needed for fluent reading.",
      "loc-romanization",
      "dd-egyptian-phrases"
    ),
    spellingNorms: cited(
      "Arabic spelling combines sound, morphology, and convention. The definite article ال is always written al-, but its l assimilates in speech before “sun letters”: الشمس is al-shams in transliteration but pronounced ash-shams. Hamza has several written “seats” depending on surrounding vowels. Tāʾ marbūṭa ة usually marks a feminine ending and is pronounced -a/-ah in pause but -at when linked in an iḍāfa or with case marking. Alif maqṣūra ى looks like dotless yāʾ at the end of a word. Informal dialect writing is increasingly common but less standardized, so the same Egyptian word may appear in more than one plausible spelling.",
      "unicode-arabic",
      "dd-egyptian-free"
    ),
    styleNotes: [
      cited("Learn letters inside real words rather than memorizing isolated shapes for weeks; joining behavior becomes meaningful only in sequence.", "unicode-arabic"),
      cited("Read both fully vowelled beginner lines and ordinary unvowelled prose. Removing all vowel support too early trains frustration, while keeping it forever delays normal reading.", "wiki-arabic"),
      cited("Treat Arabic script, formal transliteration, and Arabizi as different tools. Do not infer pronunciation mechanically from social-media spellings without knowing the writer's dialect.", "loc-romanization", "dd-egyptian-phrases"),
      cited("Use a proper bidirectional editor when mixing Arabic and Latin text; punctuation may look misplaced even though the stored character order is correct.", "unicode-arabic")
    ]
  },
  grammar: {
    overview: cited(
      "Arabic grammar is famous for tables, but its most productive ideas are patterns. Words often organize around consonantal roots whose meaning is shaped by vocalic and affixal templates. The root k-t-b relates to writing, yet a root is not itself a word and patterns are not perfectly predictable. Learners should meet morphology through sentences: a headline, a voice note, and a dictionary entry reveal different parts of the system. The examples below use MSA unless labeled otherwise, because dialect grammar deserves its own complete description rather than a list of “missing” MSA endings.",
      "wiki-arabic",
      "dd-egyptian-facts"
    ),
    typologicalProfile: cited(
      "Arabic is a fusional Semitic language: a single ending or internal vowel pattern may express several grammatical properties at once. MSA marks masculine and feminine gender, singular/dual/plural number, person on verbs, and—in fully inflected formal speech—case and mood. Word order can be verb–subject–object or subject–verb–object, with agreement and information structure interacting. Spoken varieties generally lose productive case endings, reshape the verb system, and develop their own particles, negation patterns, and preferred word orders.",
      "wiki-arabic",
      "wiki-msa"
    ),
    morphology: cited(
      "Roots and patterns are the memorable center, not a rule without exceptions. From k-t-b come كَتَبَ kataba “he wrote,” كِتاب kitāb “book,” كاتِب kātib “writer,” مَكْتَب maktab “office/desk,” and مَكْتَبة maktaba “library/bookshop.” Derived verb forms add recurring meanings such as causative, reciprocal, or reflexive, but actual usage must be learned verb by verb. Plurals may take suffixes or change the inside of the noun: مُدَرِّس mudarris “teacher” has مُدَرِّسون mudarrisūn in one case form, while كِتاب kitāb becomes كُتُب kutub. A dictionary organized by roots becomes powerful once learners can remove common prefixes and recognize weak roots containing w or y.",
      "wiki-arabic",
      "arabicorpus"
    ),
    syntax: cited(
      "MSA allows both verbal and nominal openings. In a verb-initial sentence the verb often remains singular before an explicit plural subject—وَصَلَ الطُلّابُ waṣala al-ṭullābu, “the students arrived”—whereas a subject-first sentence uses plural agreement: الطُلّابُ وَصَلوا al-ṭullābu waṣalū. Present-tense “to be” is normally absent: البَيْتُ كَبيرٌ al-baytu kabīrun, “the house is big.” Definiteness spreads through the iḍāfa construct differently from English, and attached pronouns can mean “my,” “him,” or “to her” according to their host. Spoken varieties share much of this architecture while using different particles and agreement conventions.",
      "wiki-arabic",
      "arabicorpus"
    ),
    advancedPainPoints: [
      "Selecting a natural register instead of producing a sentence that is grammatical but socially mismatched",
      "Recognizing broken plurals and weak-root verbs quickly in unvowelled text",
      "Controlling MSA case and verb mood when the setting actually calls for them",
      "Learning dialect grammar positively rather than deriving every form as a damaged version of MSA",
      "Following code-switching when a speaker moves toward MSA for quotation, humor, authority, or precision"
    ],
    topics: [
      {
        title: "Root-and-pattern word families",
        body: cited("A root offers a semantic field while a pattern creates a particular word. The relationship can aid memory, but meaning is conventional: not every mathematically possible pattern exists. Collect a family from real text and note its prepositions and collocations.", "arabicorpus", "wiki-arabic"),
        example: "كَتَبَتِ الكاتِبةُ كِتابًا. — katabat al-kātibatu kitāban.",
        exampleTranslation: "The (female) writer wrote a book. The k-t-b root appears in the verb, agent noun, and object."
      },
      {
        title: "Nominal sentences and the zero copula",
        body: cited("In present-tense equational sentences, MSA normally uses no word corresponding to English “is.” Definiteness helps distinguish a complete statement from a noun phrase. Past and future meanings bring in kāna “was” and related verbs.", "wiki-arabic"),
        example: "القَهْوةُ جاهِزةٌ. — al-qahwatu jāhizatun.",
        exampleTranslation: "The coffee is ready. Literally, “the-coffee ready.” In ordinary pause, the final case vowels are not pronounced."
      },
      {
        title: "The iḍāfa possession construction",
        body: cited("Two nouns can form a tight “X of Y” unit. The first noun does not take al- or nunation; the final noun determines the phrase's definiteness. Adjectives must be placed carefully so the reader knows which noun they describe.", "wiki-arabic", "arabicorpus"),
        example: "بابُ البَيْتِ القَديمِ — bābu al-bayti al-qadīmi",
        exampleTranslation: "The door of the old house. Here “old” agrees with “house”; moving agreement can change the intended attachment."
      },
      {
        title: "Gender, number, and non-human plurals",
        body: cited("Arabic agreement is not simply “make everything plural.” In MSA, plural nouns referring to non-human things usually trigger feminine singular adjective and verb agreement, a pattern visible constantly in news and descriptive prose.", "wiki-arabic"),
        example: "الكُتُبُ الجَديدةُ وَصَلَتْ. — al-kutubu al-jadīdatu waṣalat.",
        exampleTranslation: "The new books arrived. Although “books” is plural, “new” and “arrived” take feminine singular agreement."
      },
      {
        title: "Aspect, tense, and mood in MSA",
        body: cited("The suffix conjugation often presents an event as complete, while the prefix conjugation combines with particles and context for present, future, habitual, subjunctive, or jussive readings. Learning particles with the following verb form is more useful than equating the two stems with English past and present.", "wiki-msa", "arabicorpus"),
        example: "لَنْ أَنْسى هٰذا اليَوْمَ. — lan ansā hādhā al-yawma.",
        exampleTranslation: "I will not forget this day. The particle lan gives future negation and selects the subjunctive form ansā."
      },
      {
        title: "Egyptian circumfix negation",
        body: cited("Egyptian Arabic can wrap ma- and -sh around a verb or certain predicate forms. This is a genuine grammatical system, not random slang, and it differs from common Levantine and MSA strategies. Usage varies by construction and speaker.", "dd-egyptian-facts", "dd-egyptian-phrases"),
        example: "مافهمتش. — ma-fhimt-esh. [Egyptian]",
        exampleTranslation: "I didn't understand. The negative appears on both sides of fhimt “I understood.”"
      },
      {
        title: "Levantine b- and progressive ʿam",
        body: cited("Many Levantine varieties use a b-prefix for habitual or indicative present forms and ʿam for an action in progress. Exact combinations and vowels vary locally, so learn them from a consistent speaker rather than a pan-Levantine chart.", "dd-levantine-resources", "dd-dialects"),
        example: "عَم بَتْعَلَّم عَرَبي. — ʿam btaʿallam ʿarabi. [Levantine]",
        exampleTranslation: "I'm learning Arabic. The sentence is everyday Levantine, not MSA with letters removed."
      },
      {
        title: "Attached pronouns",
        body: cited("Short pronoun suffixes attach to nouns, prepositions, and verbs. Their role depends on the host: kitābī is “my book,” lahā is “for her,” and raʾaytuhu is “I saw him/it.” Spoken forms vary substantially but the principle travels well.", "wiki-arabic"),
        example: "أَعْطَيْتُها كِتابي. — aʿṭaytuhā kitābī.",
        exampleTranslation: "I gave her my book. The suffix -hā marks the recipient on the verb, and -ī marks the possessor on the noun."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Arabic is official or co-official from Mauritania and Morocco to Iraq and Oman, with major communities in the Sahel, the Horn of Africa, Israel/Palestine, Iran, Turkey, Europe, the Americas, and Australia. Borders cut across dialect continua, and Arabic coexists with Amazigh languages, Kurdish, South Arabian languages, Nubian languages, Somali, French, English, Hebrew, and many others. UNESCO's figure of more than 400 million daily users covers classic, standard, dialectal, oral, and written forms rather than one uniform mother tongue.",
      "unesco-arabic",
      "wiki-arabic"
    ),
    regions: [
      {
        place: "Egypt and Sudan",
        note: cited("Egyptian media gives Cairo-centered speech exceptional visibility, while Egypt and Sudan each contain substantial internal variation. Sudanese Arabic varieties connect the Nile Valley, Sahel, and Red Sea worlds and should not be treated as a footnote to Egyptian.", "dd-why-egyptian", "wiki-arabic")
      },
      {
        place: "The Levant and Iraq",
        note: cited("Lebanon, Syria, Jordan, and Palestine form the broad Levantine field; Iraq includes qeltu and gilit varieties and strong Kurdish, Aramaic, Persian, and Turkish contact histories. Media labels hide local urban, rural, and communal patterns.", "dd-dialects", "wiki-arabic")
      },
      {
        place: "Arabian Peninsula",
        note: cited("Saudi Arabia, Yemen, Oman, the UAE, Qatar, Bahrain, and Kuwait contain many Peninsular varieties, including speech that does not fit the commercial textbook label “Gulf Arabic.” Migration also makes South Asian and other languages part of daily urban life.", "dd-dialects", "wiki-arabic")
      },
      {
        place: "Northwest Africa",
        note: cited("Moroccan, Algerian, Tunisian, Libyan, Mauritanian, and Saharan Arabic varieties participate in local continua and long contact with Amazigh languages, French, Spanish, and sub-Saharan languages. Hassaniya extends well beyond the states usually placed on an “Arab world” map.", "dd-dialects", "wiki-arabic")
      },
      {
        place: "Diaspora communities",
        note: cited("Diaspora Arabic may preserve a village variety, mix several national forms, or shift toward a heritage register shaped by schooling and family networks. A learner should ask which Arabic relatives actually use rather than assuming a country label supplies the answer.", "unesco-arabic")
      }
    ]
  },
  difficulty: {
    label: "Very demanding",
    overview: cited(
      "Arabic combines a new script, unfamiliar consonants, root-and-pattern morphology, grammatical gender, and relatively few obvious English cognates. The larger challenge is sociolinguistic: newspaper language differs from relaxed family conversation. A course that silently mixes them turns normal variation into apparent failure. Measure tasks instead—read a vowelled paragraph, follow a two-minute Egyptian exchange, write a formal email. Discover Discomfort's intensive experiments show that focused daily contact can produce useful spoken progress quickly while the wider Arabic landscape remains a long-term project.",
      "dd-plan",
      "dd-msa",
      "dd-dialects"
    ),
    easierAspects: [
      "Spelling is substantially more systematic than English once letters, hamza conventions, and omitted vowels are understood",
      "Root families and recurring word patterns turn vocabulary into connected networks",
      "A vast ecosystem of teachers, media, dictionaries, courses, subtitles, and heritage speakers supports study",
      "MSA provides access to publishing and formal communication across many countries"
    ],
    hardAspects: [
      "Building MSA literacy and spontaneous dialect conversation as related but distinct competencies",
      "Hearing and producing pharyngeal, uvular, emphatic, long-vowel, and doubled-consonant contrasts",
      "Reading unvowelled text before enough vocabulary and morphology have become automatic",
      "Managing irregular plurals, weak verbs, and formal case/mood endings",
      "Understanding unfamiliar regional varieties without stereotyping their speakers"
    ],
    plateauRisks: [
      "Completing years of MSA exercises without sustained conversation in any spoken variety",
      "Speaking one dialect comfortably but avoiding the script and all formal media",
      "Collecting word lists without roots, plurals, prepositions, example sentences, or register labels",
      "Jumping among dialects every week and never developing one reliable listening model"
    ],
    workload: cited(
      "Give both tracks regular attention: for example, four weekly sessions in one spoken variety, three short MSA readings, and daily script or vocabulary review. Weight the ratio toward your goals, but do not postpone either track indefinitely. Replace generic study time with projects: transcribe a scene, follow one news story for a week, keep voice notes, or compare an interviewer's formal introduction with informal questions. Discover Discomfort's four-hour days produced striking short-term results, but sustainable consistency matters more. Comfortable movement across registers takes years because several worthwhile competencies share one name.",
      "dd-plan",
      "dd-why-egyptian"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build a two-column Arabic life. Choose a spoken anchor tied to people and media—Cairo Egyptian, Ammani Levantine, Moroccan dārija, or another specific community—while growing MSA through graded reading, headlines, essays, and formal audio. Tag flashcards and examples by register, then connect related forms deliberately. Keep tutor sessions mostly in the target variety and focus correction on recurring problems. Discover Discomfort's Egyptian immersion is a case study, not a commandment: family, destination, favorite media, or research should decide your anchor.",
      "dd-plan",
      "dd-why-egyptian",
      "dd-msa"
    ),
    mediaPractice: cited(
      "Start with a 30-second clip whose variety you can identify, make a transcript, circle unknown chunks, and shadow it before watching the surrounding scene. News often alternates between a presenter's MSA script and interviewees' local speech; label that switch. Egyptian film, Levantine drama, Gulf podcasts, Maghrebi comedy, audiobooks, and dubbed animation broaden recognition. Subtitles are often MSA summaries rather than transcripts, so save places where subtitle and speech diverge: the gap teaches register efficiently.",
      "dd-dialects",
      "dd-egyptian-phrases",
      "dd-levantine-resources"
    ),
    dictionariesAndCorpora: cited(
      "Use a learner dictionary for quick decoding, then confirm serious questions in a root-aware dictionary and corpus. BYU's arabiCorpus searches newspapers, literature, nonfiction, Egyptian colloquial material, and premodern texts, though its announced July 2027 retirement makes a backup workflow important. Lisaan Masry provides Egyptian entries, recordings, and examples where translators often return MSA. The Library of Congress table handles formal romanization. Record source, country, date, and register for every surprising form.",
      "arabicorpus",
      "dd-egyptian-free",
      "loc-romanization"
    ),
    resources: [
      {
        type: "course",
        title: "Discover Discomfort: Learn Arabic in 60 Days",
        url: "https://discoverdiscomfort.com/learn-arabic-plan/",
        level: "beginner",
        description: cited("An experience-based Egyptian plan covering goals, hours, tutors, materials, pronunciation, and dialect versus MSA. Adapt its intensive sprint to a sustainable schedule.", "dd-plan")
      },
      {
        type: "other",
        title: "Discover Discomfort: Arabic Dialects Compared",
        url: "https://discoverdiscomfort.com/arabic-dialects-maghrebi-egyptian-levantine-gulf-hejazi-msa/",
        level: "all",
        description: cited("A learner's map of MSA, Egyptian, Levantine, Hejazi, Gulf, and Maghrebi options. Use its groupings as orientation, not hard borders.", "dd-dialects")
      },
      {
        type: "course",
        title: "Discover Discomfort: How to Learn Modern Standard Arabic",
        url: "https://discoverdiscomfort.com/learn-modern-standard-arabic-msa/",
        level: "beginner",
        description: cited("Explains what MSA is for, when to study it, and why spoken goals may call for a dialect first.", "dd-msa")
      },
      {
        type: "dictionary",
        title: "Discover Discomfort: Free Egyptian Arabic Resources",
        url: "https://discoverdiscomfort.com/learn-egyptian-arabic-free-resources/",
        level: "all",
        description: cited("A gateway to Egyptian dictionaries, recordings, and learner material, including Lisaan Masry for checking conversational usage.", "dd-egyptian-free")
      },
      {
        type: "corpus",
        title: "BYU arabiCorpus",
        url: "https://arabicorpus.byu.edu/",
        level: "advanced",
        description: cited("Search newspapers, literature, nonfiction, Egyptian colloquial texts, and premodern Arabic for roots and collocations; note its announced July 2027 retirement.", "arabicorpus")
      },
      {
        type: "other",
        title: "Library of Congress Arabic Romanization Table",
        url: "https://www.loc.gov/catdir/cpso/romanization/arabic.pdf",
        level: "advanced",
        description: cited("The detailed ALA-LC cataloging scheme, useful for names, bibliography work, and comparing variant spellings of Arabic titles.", "loc-romanization")
      }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Arabic words travel between sacred recitation, a Cairo joke, a government form, a pop lyric, and a family WhatsApp thread, changing pronunciation and social force along the way. The root system produces memorable clusters, but usage lives in phrases. سلام salām can denote peace, participate in a greeting, or close an interaction; خلص khalaṣ can describe completion and, in colloquial speech, mean “enough,” “done,” or “okay then.” A learner who records only a one-word English gloss misses the interesting part. Collect an audio example, a setting, and a response: expressions such as in shāʾ Allāh or yaʿnī organize conversation as well as conveying dictionary meaning.",
      "dd-egyptian-phrases",
      "dd-dialects",
      "arabicorpus"
    ),
    notableWords: [
      { term: "كِتاب", transliteration: "kitāb", meaning: "book", note: cited("The textbook doorway into k-t-b: compare kātib “writer,” maktab “office/desk,” and maktaba “library or bookshop.”", "arabicorpus") },
      { term: "طَرَب", transliteration: "ṭarab", meaning: "musical enchantment; rapture", note: cited("Often discussed around emotionally absorbing Arabic music, especially the listener-performer relationship. No single English word captures all of its aesthetic history.", "unesco-arabic") },
      { term: "وَسْطة", transliteration: "wāsṭa", meaning: "connections or mediation used to get something done", note: cited("Related to a root concerning the middle or mediation. Its tone ranges from helpful networking to criticism of favoritism, so context decides whether it is neutral or disapproving.", "arabicorpus") },
      { term: "يَعْني", transliteration: "yaʿnī", meaning: "it means; I mean; like", note: cited("A standard verb form that also works as a very common discourse marker across varieties. Listening for it reveals how speakers hold the floor, clarify, and soften claims.", "dd-egyptian-phrases") },
      { term: "خَلاص", transliteration: "khalāṣ", meaning: "finished; enough; settled", note: cited("In conversation its meaning depends dramatically on intonation: relief, impatience, agreement, resignation, or a simple announcement that something is over.", "dd-egyptian-phrases") },
      { term: "مَعْلِش", transliteration: "maʿlesh", meaning: "never mind; sorry; it can't be helped (Egyptian)", note: cited("A socially useful Egyptian expression with no single fixed translation. It can console, apologize, dismiss a minor problem, or acknowledge an inconvenience.", "dd-egyptian-phrases") },
      { term: "تَفَضَّل", transliteration: "tafaḍḍal", meaning: "please; go ahead; here you are", note: cited("An invitation rather than an all-purpose translation of English “please.” Gesture and context tell whether someone is offering a seat, an object, food, or permission to proceed.", "dd-egyptian-phrases", "dd-levantine-resources") },
      { term: "حَنين", transliteration: "ḥanīn", meaning: "longing; nostalgia", note: cited("Frequent in poetry and song, it names yearning toward a person, place, or past and rewards learning through complete lyrical lines rather than isolated vocabulary.", "unesco-arabic") }
    ],
    loanwordLayers: cited(
      "Borrowing tells a regional history. MSA uses inherited derivation and internationally shared forms side by side: تِلِفاز tilfāz “television” coexists with تلفزيون tilifizyūn. Egyptian Arabic contains Ottoman Turkish and European layers; Levantine speech reflects Turkish, French, and English contact; North African varieties have extensive Amazigh and French interaction. Arabic loans themselves have traveled widely—English algebra and algorithm came through Arabic scholarly vocabulary, while Spanish preserves many Arabic-origin words. Avoid folk etymologies based on resemblance alone. A good dictionary or corpus should confirm the route, because words may have passed through several languages and shifted meaning each time.",
      "unesco-arabic",
      "arabicorpus",
      "wiki-arabic"
    ),
    idioms: [
      { original: "العَيْن بَصيرة واليَد قَصيرة", transliteration: "al-ʿayn baṣīra wa-l-yad qaṣīra", translation: "The eye sees, but the hand is short.", note: "Broadly understood proverb: I can see what should be done or desired, but I lack the means." },
      { original: "في المِشْمِش", transliteration: "fi-l-mishmish", translation: "When apricots are in season—probably never.", note: "Egyptian colloquial idiom for a promise unlikely to happen; humor comes from the apricot season's brevity." },
      { original: "دِقّ الحَديد وهو حامي", transliteration: "diʾʾ il-ḥadīd w-huwwe ḥāmi", translation: "Strike the iron while it is hot.", note: "Levantine colloquial form of an internationally familiar proverb; pronunciation varies across the region." },
      { original: "اللّي فات مات", transliteration: "illi fāt māt", translation: "What has passed is dead and gone.", note: "Common Egyptian/colloquial sentiment used to close the door on an old problem." },
      { original: "رُبَّ ضارَّةٍ نافِعة", transliteration: "rubba ḍārratin nāfiʿa", translation: "A harmful thing may prove beneficial.", note: "Formal/classical-register maxim, roughly “a blessing in disguise,” often quoted in educated speech and writing." }
    ],
    textGenres: [
      "Qur'anic and classical religious Arabic with specialized recitation and interpretation traditions",
      "Classical and modern poetry, where meter, rhyme, dialect, and performance all matter",
      "Modern novels, short stories, memoirs, and graphic narratives",
      "MSA journalism, documentary narration, essays, and institutional writing",
      "Dialect cinema, television drama, stand-up comedy, podcasts, and song",
      "Digital writing that mixes MSA, dialect spelling, Arabizi, emoji, and multilingual code-switching"
    ]
  },
  relationships: {
    overview: cited(
      "Arabic's family relationships and contact relationships are different maps. Hebrew, Aramaic, and Amharic are genealogical relatives within Semitic; Persian, Turkish, Amazigh languages, Swahili, Spanish, and Urdu are not close relatives simply because they share vocabulary or, in some cases, script. This distinction prevents two common errors: assuming every shared word proves close ancestry, and overlooking the human history carried by borrowing. Arabic itself is internally diverse enough that Glottolog catalogs numerous spoken languages and varieties rather than treating MSA as a complete description of the family.",
      "glottolog-arabic",
      "wiki-arabic",
      "unesco-arabic"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Arabic is not owned by one religion, ethnicity, state, or register. Muslims, Christians, Jews, Druze, secular speakers, and many other communities shaped it; many Muslims who worship in Arabic are not Arab, and not every Arab has Arabic as a straightforward first language. Expressions involving God are ordinary social language across communities, not automatically “religious phrases.” Follow local people rather than performing a generalized “Arab culture,” and ask which city, generation, medium, and relationship a form belongs to. An Alexandria joke, Palestinian wedding song, Moroccan voice note, and UN address are all Arabic but demand different knowledge.",
  resources: [
    {
      type: "other",
      title: "Discover Discomfort Arabic Dialects Compared",
      url: "https://discoverdiscomfort.com/arabic-dialects-maghrebi-egyptian-levantine-gulf-hejazi-msa/",
      level: "all",
      description: cited("A first stop for the regional and register choices hidden inside “Arabic,” with links to deeper Egyptian and MSA material.", "dd-dialects")
    },
    {
      type: "course",
      title: "Discover Discomfort Egyptian Arabic 60-Day Plan",
      url: "https://discoverdiscomfort.com/learn-arabic-plan/",
      level: "beginner",
      description: cited("A concrete immersion plan with hours, materials, tutors, and retrospective lessons, adaptable beyond Egyptian.", "dd-plan")
    },
    {
      type: "course",
      title: "Discover Discomfort Levantine Arabic Resources",
      url: "https://discoverdiscomfort.com/best-resources-learn-levantine-arabic/",
      level: "all",
      description: cited("Books, websites, tutor tools, and vocabulary resources for Lebanon, Syria, Jordan, and Palestine, with candid evaluations.", "dd-levantine-resources")
    },
    {
      type: "dictionary",
      title: "Discover Discomfort Free Egyptian Arabic Resources",
      url: "https://discoverdiscomfort.com/learn-egyptian-arabic-free-resources/",
      level: "all",
      description: cited("Egyptian vocabulary, recordings, and examples to use alongside MSA references and standard-only translators.", "dd-egyptian-free")
    },
    {
      type: "corpus",
      title: "arabiCorpus",
      url: "https://arabicorpus.byu.edu/",
      level: "advanced",
      description: cited("Search frequency and context across modern and premodern genres; its announced 2027 retirement makes a backup corpus important.", "arabicorpus")
    },
    {
      type: "other",
      title: "Unicode Arabic Script Specification",
      url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-9/",
      level: "advanced",
      description: cited("The definitive technical reference for Arabic joining, encoding, ligatures, and extended Arabic-script alphabets.", "unicode-arabic")
    }
  ],
  relatedLanguages,
  phrases: [
    { original: "السَّلامُ عَلَيْكُم", transliteration: "as-salāmu ʿalaykum", translation: "Peace be upon you; hello.", literalMeaning: "Peace be upon you.", usageNote: "Widely used across formal, colloquial, and religious contexts; the conventional reply is وعليكم السلام wa-ʿalaykum as-salām." },
    { original: "صَباح الخَيْر", transliteration: "ṣabāḥ al-khayr", translation: "Good morning.", literalMeaning: "Morning of goodness.", usageNote: "A broadly understood greeting; a common response is صباح النور ṣabāḥ an-nūr, “morning of light.”" },
    { original: "شُكْرًا", transliteration: "shukran", translation: "Thank you.", usageNote: "Standard and widely understood. Local alternatives add warmth, but this is never the wrong starting point." },
    { original: "لَوْ سَمَحْت", transliteration: "law samaḥt", translation: "Please; excuse me.", literalMeaning: "If you permit.", usageNote: "Common across several varieties; endings and vowels vary by addressee and region." },
    { original: "مُمْكِن؟", transliteration: "mumkin?", translation: "Is it possible? May I?", literalMeaning: "Possible?", usageNote: "A wonderfully flexible request opener in conversation; follow it with what you need." },
    { original: "مَش فاهِم / مَش فاهْمة", transliteration: "mish fāhim / mish fāhma", translation: "I don't understand. [Egyptian]", literalMeaning: "Not understanding (masculine/feminine speaker).", usageNote: "The form agrees with the speaker's gender. In MSA, say لا أفهم lā afham." },
    { original: "مُمْكِن تِحْكي شْوَي شْوَي؟", transliteration: "mumkin tiḥki shway shway?", translation: "Could you speak slowly? [Levantine]", literalMeaning: "Can you speak little by little?", usageNote: "A practical Levantine request; exact vowels vary by locality." },
    { original: "ماذا تَعْني هٰذِهِ الكَلِمة؟", transliteration: "mādhā taʿnī hādhihi al-kalima?", translation: "What does this word mean? [MSA]", usageNote: "Useful in a classroom or formal learning conversation; ask your tutor for the natural local equivalent too." },
    { original: "بِدّي قَهْوة، لَوْ سَمَحْت", transliteration: "biddī qahwe, law samaḥt", translation: "I'd like a coffee, please. [Levantine]", literalMeaning: "I want coffee, if you permit.", usageNote: "Biddī is characteristic of Levantine speech; qahwe pronunciation varies locally." },
    { original: "عَايِز الحِساب، لَوْ سَمَحْت", transliteration: "ʿāyiz il-ḥisāb, law samaḥt", translation: "I'd like the bill, please. [Egyptian, masculine speaker]", usageNote: "A feminine speaker commonly says ʿāyza. Other regions use different words for “I want.”" },
    { original: "مَعَ السَّلامة", transliteration: "maʿa as-salāma", translation: "Goodbye.", literalMeaning: "With safety.", usageNote: "Broadly understood; local responses and alternatives vary." },
    { original: "تَشَرَّفْنا", transliteration: "tasharrafnā", translation: "Pleased to meet you.", literalMeaning: "We were honored.", usageNote: "A polite formula common in many regions, often used after exchanging names." }
  ],
  sources: [
    { id: "dd-dialects", title: "Arabic Dialects Compared: Maghrebi, Egyptian, Levantine, Hejazi, Gulf, and MSA", url: "https://discoverdiscomfort.com/arabic-dialects-maghrebi-egyptian-levantine-gulf-hejazi-msa/", publisher: "Discover Discomfort", updatedAt: "2024-07-17", accessedAt: "2026-07-10" },
    { id: "dd-why-egyptian", title: "Why Learn Egyptian Arabic?", url: "https://discoverdiscomfort.com/why-learn-egyptian-arabic-dialect/", publisher: "Discover Discomfort", publishedAt: "2018-12-31", updatedAt: "2020-10-27", accessedAt: "2026-07-10" },
    { id: "dd-plan", title: "Learn Arabic in 60 Days — A Plan with Results", url: "https://discoverdiscomfort.com/learn-arabic-plan/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-msa", title: "How to Learn Modern Standard Arabic (MSA)", url: "https://discoverdiscomfort.com/learn-modern-standard-arabic-msa/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-egyptian-facts", title: "Egyptian Arabic FAQ — Ten Interesting Facts and Figures", url: "https://discoverdiscomfort.com/egyptian-arabic-faq-facts-and-figures/", publisher: "Discover Discomfort", updatedAt: "2024-07-17", accessedAt: "2026-07-10" },
    { id: "dd-egyptian-phrases", title: "40 Basic Egyptian Arabic Phrases to Sound Local", url: "https://discoverdiscomfort.com/colloquial-egyptian-arabic-phrases/", publisher: "Discover Discomfort", updatedAt: "2023-10-08", accessedAt: "2026-07-10" },
    { id: "dd-egyptian-free", title: "Learn Egyptian Arabic — Free Super Useful Resources", url: "https://discoverdiscomfort.com/learn-egyptian-arabic-free-resources/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-levantine-resources", title: "Best Resources to Learn Levantine Arabic", url: "https://discoverdiscomfort.com/best-resources-learn-levantine-arabic/", publisher: "Discover Discomfort", updatedAt: "2026-05-11", accessedAt: "2026-07-10" },
    { id: "wiki-arabic", title: "Arabic", url: "https://en.wikipedia.org/wiki/Arabic", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-msa", title: "Modern Standard Arabic", url: "https://en.wikipedia.org/wiki/Modern_Standard_Arabic", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "unesco-arabic", title: "World Arabic Language Day", url: "https://www.unesco.org/en/world-arabic-language-day", publisher: "UNESCO", accessedAt: "2026-07-10" },
    { id: "glottolog-arabic", title: "Glottolog: Arabic and Standard Arabic", url: "https://glottolog.org/resource/languoid/id/arab1395", publisher: "Glottolog", accessedAt: "2026-07-10" },
    { id: "unicode-arabic", title: "The Unicode Standard, Chapter 9: Middle East-I, Arabic", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-9/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "loc-romanization", title: "Arabic Romanization Table", url: "https://www.loc.gov/catdir/cpso/romanization/arabic.pdf", publisher: "Library of Congress", updatedAt: "2012", accessedAt: "2026-07-10" },
    { id: "arabicorpus", title: "arabiCorpus", url: "https://arabicorpus.byu.edu/", publisher: "Brigham Young University College of Humanities", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Arabic Language Guide: Dialects, MSA, Script and Grammar",
    description: "A deeply researched guide to Arabic varieties, Modern Standard Arabic, pronunciation, writing, grammar, culture, useful phrases, learning strategy, and modern resources."
  }
} satisfies LanguageGuide;
