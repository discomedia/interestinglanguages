import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Nawat",
    relationship: "Closest surviving Nahuan relative outside Mexico",
    explanation: cited(
      "Nawat, also called Pipil, is spoken in El Salvador and belongs to the same Nahuan branch. It is not simply Nahuatl with a national border drawn through it: it has its own history, sound changes, community identity, and revitalization movement. Comparison reveals a wider Nahuan world while reminding learners to name each language on its own terms.",
      "glottolog-nahuatl",
      "wiki-nahuatl"
    )
  },
  {
    name: "Classical Nahuatl",
    relationship: "Historical textual varieties",
    explanation: cited(
      "Classical Nahuatl is the conventional label for central Mexican forms represented in sixteenth- and seventeenth-century texts. It is extraordinarily well documented, but it is not a neutral standard for all modern communities. A colonial document course and a conversation course in Chicontepec teach related yet different targets.",
      "wiki-history",
      "gdn-unam"
    )
  },
  {
    name: "Ute",
    relationship: "Distant Uto-Aztecan relative",
    explanation: cited(
      "Ute belongs to the northern part of the Uto-Aztecan family. The relationship is deep rather than conversationally obvious: it reflects descent over a long timescale, not mutual intelligibility or a shared modern culture. It helps place Nahuan languages in a family extending far beyond Mesoamerica.",
      "glottolog-nahuatl"
    )
  },
  {
    name: "Spanish",
    relationship: "Unrelated language in five centuries of intensive contact",
    explanation: cited(
      "Spanish and Nahuatl are genealogically unrelated, but their histories are now inseparable. Spanish borrowed words for foods, plants, places, and material culture; Nahuatl varieties incorporated Spanish vocabulary and adapted it to local sound and grammar. Code-switching today is a normal bilingual practice, not evidence that a speaker's Nahuatl is defective.",
      "gdn-unam",
      "wiki-history"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const nahuatlGuide = {
  slug: "nahuatl",
  name: "Nahuatl",
  autonym: "Nawatlahtolli · Nāhuatl · Mexicano",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Nahuatl is a diverse Nahuan language cluster spoken by living communities across Mexico and in migration, with rich oral traditions, modern media, and one of the Americas' largest colonial-era textual archives.",
  family: "Uto-Aztecan, Nahuan",
  macroRegion: "Mexico and diaspora communities, especially the Huasteca and central, eastern, and western regions",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Learning Nahuatl means choosing a community and variety, then discovering how a single expressive verb can gather the information that English spreads across a sentence.",
  hero: {
    imageAlt: "Contemporary Nahuatl writing beside community books and audio recordings, representing a living and internally diverse language.",
    callToActionLabel: "Meet Nahuatl in use"
  },
  classification: "A diverse Nahuan cluster within Uto-Aztecan, including many modern languages and historical Classical Nahuatl",
  speakerCommunity: "Nahuatl is not one uniform language and Nahua people are not one frozen historical population. Communities use names such as mexicano, masewaltlahtol, nawatlahtolli, or a regional name across many Mexican states and in migrant destinations. INEGI's 2020 census counted roughly 1.65 million speakers aged three and over; INALI reports 853,625 women, 51.67 percent of the total. Those figures measure self-reported speech, not everyone with Nahua identity or partial knowledge. In some towns children acquire Nahuatl at home; elsewhere adults rebuild a language interrupted by schooling, discrimination, migration, or Spanish-only public services. Ask which town, generation, spelling, and teaching authority a form comes from.",
  facts: [
    { label: "Family", value: "Uto-Aztecan · Southern Uto-Aztecan · Nahuan" },
    { label: "Mexico census", value: "About 1.65 million speakers aged 3+ (INEGI 2020)" },
    { label: "Official catalog", value: "INALI distinguishes 30 Nahuatl variants" },
    { label: "Common autonyms", value: "Nawatlahtolli, masewaltlahtol, mexicano, and regional forms" },
    { label: "Writing", value: "Multiple Latin orthographies; no single community-neutral spelling" },
    { label: "Legal position", value: "A national Indigenous language with equal validity in its territory, location, and context" }
  ],
  learnerOverview: "Begin with a person and place, not a generic vocabulary list. If you have family connections, their speech sets the target. Otherwise, the free University of Texas/IDIEZ course offers a coherent route into Chicontepec Nahuatl. For wills, annals, poetry, or the Florentine Codex, study Classical Nahuatl and colonial paleography instead. The tracks illuminate each other, but random mixing creates no community's language. Nahuatl is often called polysynthetic because a word can contain several meaningful pieces. In niccua “I eat it,” ni- marks “I,” -c- the object, and cua the verb. Learn such forms as audible units, then segment them. Hear elders, teachers, musicians, and broadcasters: morphology belongs to voices. Learning an Indigenous language is not costume, ancestry proof, or access to a romantic past. Credit and compensate community educators, and let present-day priorities lead.",
  origins: {
    overview: cited(
      "Nahuatl belongs to the Nahuan branch of Uto-Aztecan. Nahuan speech predates Mexica power, and Tlaxcalans, Acolhua, Chalca, and other Nahuatl-speaking polities had distinct histories. Nahuatl circulated through trade, alliance, migration, and administration. Tenochtitlan made one central variety prominent, but “the Aztec language” shrinks a larger field. Before alphabetic writing, Nahua intellectual practices combined painted manuscripts, oral interpretation, calendrical knowledge, performance, and records. After the invasion, Nahua writers adapted Latin letters for town records, land documents, wills, lawsuits, histories, songs, plays, medicine, and correspondence. This archive contains Indigenous authorship under colonial constraint; it is neither merely European transcription nor an untouched precolonial window.",
      "wiki-nahuatl",
      "wiki-history",
      "gdn-unam"
    ),
    timeline: [
      {
        period: "Before 1200 CE",
        event: cited(
          "Nahuan-speaking groups moved and diversified within a multilingual Mesoamerica. The exact chronology and routes remain scholarly questions, but the language family long predates the Mexica empire. Contact with Otomanguean, Mixe-Zoquean, Mayan, Totonacan, and other languages contributed to the shared linguistic ecology called the Mesoamerican linguistic area.",
          "wiki-nahuatl",
          "glottolog-nahuatl"
        )
      },
      {
        period: "1200s–1521",
        event: cited(
          "Multiple Nahua city-states used related varieties. The Triple Alliance centered on Tenochtitlan expanded dramatically in the fifteenth century, giving the speech of central Mexico reach and prestige without making every subject a Nahuatl monolingual or every Nahua a Mexica.",
          "wiki-history",
          "wiki-nahuatl"
        )
      },
      {
        period: "1520s–1700s",
        event: cited(
          "Nahua authors, scribes, interpreters, and Christian institutions developed extensive alphabetic literacy. Alonso de Molina's 1555 and 1571 dictionaries and works associated with the Colegio de Santa Cruz are famous, but thousands of less celebrated local documents show Nahuatl functioning in law, government, religion, household inheritance, and historical memory.",
          "wiki-history",
          "gdn-unam"
        )
      },
      {
        period: "1800s–late 1900s",
        event: cited(
          "Nation-building and Spanish-dominant schooling often punished or stigmatized Indigenous language use. At the same time, Nahua speakers continued oral and written production, and scholars, teachers, and writers assembled grammars, stories, dictionaries, and political texts. Uneven transmission today is inseparable from these institutions, not an individual family's failure.",
          "wiki-history",
          "inali-rights"
        )
      },
      {
        period: "2003 to the present",
        event: cited(
          "Mexico's General Law of Linguistic Rights recognizes Indigenous languages and Spanish as national languages of equal validity in the relevant territory, location, and context. INALI cataloging, community writing work, university partnerships, radio, literature, digital dictionaries, and online teaching have expanded visibility, while access to services and intergenerational transmission remain uneven.",
          "inali-rights",
          "inali-catalog",
          "ut-course"
        )
      }
    ],
    contactHistory: cited(
      "Nahuatl developed in multilingual Mesoamerica before Spanish contact, so shared patterns such as relational nouns and certain calques cannot all be explained by Europe. Colonial Spanish then brought a powerful new layer: religion, livestock, offices, technologies, and everyday objects acquired borrowed names, while native roots continued forming new compounds. Spanish took Nahuatl words—often through central forms—for avocado, chile, coyote, tomato, and many Mexican place names. Routes can be tangled: English chocolate came through Spanish, but the precise Nahuatl formation and early history are debated, so attractive one-line etymologies deserve checking. Modern speakers may alternate languages inside a conversation or adapt Spanish stems to Nahuatl affixes. That bilingual creativity is part of living grammar.",
      "gdn-unam",
      "online-dictionary",
      "wiki-nahuatl"
    ),
    standardization: cited(
      "There is no universally accepted spoken or written standard above all communities. Colonial spelling uses conventions such as hu for /w/, qu or c for /k/, cu/uc for /kʷ/, tz for /ts/, x for /ʃ/, and tl for /tɬ/; it often leaves vowel length and the glottal stop unmarked. Modern practical orthographies may use w, k, kw, h, j, an apostrophe, saltillo, or doubled/macron vowels. INALI has coordinated a community-participatory writing norm, Nawatlahtolamochtlahkwilolnawatilli, while emphasizing that standardizing written criteria is not the same as homogenizing speech. Orthography is consequently social as well as phonemic. A learner should preserve the spelling of a source, record what system it uses, and convert only with an explicit key.",
      "inali-writing",
      "unicode-latin",
      "gdn-unam"
    )
  },
  variants: {
    overview: cited(
      "INALI's catalog recognizes 30 Nahuatl variants with their own autonyms and geographic references; Glottolog likewise lists many distinct Nahuatl languages. Boundaries do not always match state lines, and mutual intelligibility varies. “Central,” “Huasteca,” or “Guerrero” are useful map labels but still contain local differences. Migration also creates new networks in cities and across the United States. The respectful practical rule is simple: attach a form to a source community instead of presenting it as universal Nahuatl.",
      "inali-catalog",
      "glottolog-nahuatl"
    ),
    items: [
      { name: "Huasteca varieties", note: cited("A large living cluster across parts of Hidalgo, Veracruz, and San Luis Potosí. The UT/IDIEZ course and modern IDIEZ dictionary focus specifically on Chicontepec, Veracruz, giving learners unusually coherent audio, spelling, and grammar support.", "ut-course", "online-dictionary") },
      { name: "Central Puebla and Sierra Norte varieties", note: cited("Communities across Puebla use forms often labeled masewaltlahtol or mexicano as well as Nahuatl. Town-to-town differences matter, and strong community publishing and educational traditions make local sources preferable to a generalized central standard.", "inali-catalog") },
      { name: "Guerrero and Morelos varieties", note: cited("Nahuatl is spoken in numerous communities of Guerrero and Morelos, with local sound, vocabulary, and writing practices. Regional craft, ritual, political, educational, and literary work all provide contexts beyond classroom grammar.", "inali-catalog", "glottolog-nahuatl") },
      { name: "Isthmus, western, and peripheral varieties", note: cited("Varieties in Veracruz's Isthmus, Durango, Michoacán, Jalisco, Colima, Oaxaca, and the western periphery show how misleading a single central-Mexico template can be. Some are especially vulnerable because speaker populations are small or transmission has weakened.", "inali-catalog", "glottolog-nahuatl") },
      { name: "Classical Nahuatl", note: cited("A scholarly umbrella for historical central varieties in colonial sources. Its enormous archive supports advanced reading, but pronunciation and standardized textbook spelling are reconstructions and editorial choices, not recordings of one timeless prestige voice.", "gdn-unam", "wiki-history") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Nahuatl sound systems vary, but many have four vowel qualities—roughly a, e, i, o—and contrast short and long vowels. Many also use a glottal feature often called saltillo, realized as a glottal stop [ʔ], an [h]-like sound, or another reflex depending on variety and position. Colonial writing frequently concealed both length and saltillo, although the seventeenth-century grammarian Horacio Carochi marked them carefully. Consonants such as /tɬ/, written tl, /ts/ tz, /tʃ/ ch, /ʃ/ x, /kʷ/ cu or kw, and /w/ hu or w are less exotic once practiced inside syllables. Do not infer a modern pronunciation solely from a normalized Classical spelling.",
      "wiki-nahuatl",
      "ut-course",
      "unicode-latin"
    ),
    script: "Latin alphabet; examples here use macrons for long vowels and h for the Huasteca saltillo when the cited teaching system does",
    soundSystem: cited(
      "Treat length as part of the vowel, not optional emphasis: ā should occupy more time than a. The famous tl is normally a single voiceless lateral affricate [tɬ], beginning like t and releasing air along the sides of the tongue; it is not necessarily two leisurely English consonants. X is typically [ʃ], like sh in English ship, while tz is [ts] as at the end of cats. Hu before a vowel and uh after one can represent /w/ in colonial spelling. In Chicontepec materials, h participates in representing the glottal feature. Recordings from your target variety outrank any cross-dialect pronunciation recipe.",
      "ut-course",
      "gdn-unam",
      "wiki-nahuatl"
    ),
    prosody: cited(
      "Many descriptions place stress regularly on the penultimate, or next-to-last, syllable, but suffixes, vocatives, word-final glottal features, and local patterns complicate the beginner rule. Long vowels do not simply equal stress. Nahuatl words can also become long through transparent affixation, and fluent speakers group those words into larger intonational phrases. Practice from whole recorded lines: clap the syllables, mark the long vowels, then imitate where the speaker accelerates and where a glottal closure interrupts the airflow.",
      "ut-course",
      "wiki-nahuatl"
    ),
    learnerTraps: [
      "Pronouncing x as Spanish /x/ instead of checking for Nahuatl /ʃ/",
      "Ignoring vowel length because a colonial spelling omits it",
      "Turning tl into an exaggerated two-syllable sequence",
      "Assuming every written h, apostrophe, j, or saltillo represents the same realization",
      "Applying one central or Classical pronunciation to every modern community"
    ],
    sampleWords: [
      { original: "tlahtōlli", transliteration: "tlahtōlli", translation: "word, speech, language (Classical/normalized)", note: "Practice initial tl, the consonant cluster ht, and long ō. Modern Huasteca course spelling has tlahtolli in Nawatlahtolli." },
      { original: "xōchitl", transliteration: "shō-chitl", translation: "flower (Classical/normalized)", note: "X is /ʃ/; the final tl is a lateral release, not English tul." },
      { original: "tzapotl", transliteration: "tsa-potl", translation: "sapote fruit (Classical/central)", note: "Begin with the compact /ts/ of cats and keep the final tl together." },
      { original: "cuāuhtli", transliteration: "kwāw-tli", translation: "eagle (Classical/normalized)", note: "A compact lesson in /kʷ/, long ā, /w/, and tl; historical spellings may look daunting before segmentation." },
      { original: "yōllotl", transliteration: "yōl-lotl", translation: "heart (Classical/normalized)", note: "Hold the first vowel; compare possessed noyōllo “my heart,” where the noun changes shape." },
      { original: "cālli", transliteration: "kāl-li", translation: "house (Classical/normalized)", note: "C before a is /k/ and ā is long. Many modern practical systems write kalli, often without length." }
    ]
  },
  writing: {
    overview: cited(
      "Alphabetic Nahuatl writing emerged in the sixteenth century through collaboration and coercion in colonial institutions, but Nahua graphic literacy did not begin with Europe. Painted manuscripts used place signs, personal names, calendrical signs, tribute lists, genealogies, paths, and images whose interpretation relied on trained readers and oral performance. Alphabetic writers then made the Latin script their own across an astonishing range of genres. Modern writing continues in school materials, poetry, messaging, subtitles, public signs, journalism, and community documentation. The practical challenge is abundance rather than absence: several reasonable spelling systems encode different analytical and political choices.",
      "wiki-history",
      "gdn-unam",
      "inali-writing"
    ),
    primaryScript: "Latin, in several colonial, scholarly, institutional, and community orthographies",
    romanization: cited(
      "Nahuatl already uses Latin letters, so “romanization” usually means converting between orthographies. A common normalized Classical system retains c/qu, hu/uh, cu/uc, tz, x, and tl while adding macrons for vowel length and h or a diacritic for saltillo. Some modern systems prefer k, w, and kw. Automated replacement is risky because colonial c changes value by context and manuscripts vary. Keep a diplomatic transcription for source fidelity and a normalized layer for searching.",
      "gdn-unam",
      "unicode-latin"
    ),
    spellingNorms: cited(
      "INALI's writing work involves speakers, teachers, translators, writers, and representatives from many states. Its stated purpose is to create usable written criteria without erasing spoken diversity. Unicode already encodes ordinary Latin letters, combining macrons, glottal-stop characters, modifier apostrophes, and the saltillo pair, but visually similar marks are not technically identical. Curly quotation marks substituted for a saltillo can break search and sorting. For digital work, follow a named orthography, use the intended Unicode character consistently, and store metadata about variety and source.",
      "inali-writing",
      "unicode-latin"
    ),
    styleNotes: [
      cited("Colonial manuscripts vary by writer and period; read paleographic forms alongside normalized forms instead of silently replacing the original.", "gdn-unam"),
      cited("Do not “correct” a community's k/w spelling into c/qu/hu merely because the latter looks more Classical.", "inali-writing"),
      cited("Write compounds and affixes according to the convention of your course or community; spaces imported from Spanish can hide Nahuatl morphology.", "ut-course"),
      cited("Use macrons and saltillo consistently when a teaching system marks them, because they can distinguish words and grammatical forms.", "unicode-latin", "ut-course")
    ]
  },
  grammar: {
    overview: cited(
      "Nahuatl grammar packs relationships into words. Agglutinative means that identifiable pieces attach in a sequence; polysynthetic means that a word—especially a verb—can express what English treats as several words. These labels describe tendencies, not a contest for the “longest word.” Verbs mark the subject and often the object, then may add direction, reflexive or reciprocal meaning, causation, applicative meaning, tense, and number. Nouns distinguish unpossessed and possessed shapes, and relational nouns do much of the work English assigns to prepositions. Exact affixes differ among varieties, so examples below are labeled Classical/normalized or Chicontepec Huasteca rather than offered as universal templates.",
      "wiki-nahuatl",
      "ut-course",
      "online-dictionary"
    ),
    typologicalProfile: cited(
      "Most Nahuatl descriptions analyze nominative–accusative alignment: subjects of transitive and intransitive verbs use the same subject series, while objects have another series. Basic clauses can appear in several orders because verbal agreement identifies participants and discourse determines what is foregrounded. Nahuatl is not “word-orderless,” however. Information structure, heaviness, animacy, definiteness, genre, and variety shape natural sequences. The language also distinguishes animate plural marking in many systems and often leaves inanimate nouns unpluralized.",
      "wiki-nahuatl",
      "ut-course"
    ),
    morphology: cited(
      "A Classical noun often appears unpossessed with an absolutive ending such as -tl, -tli, or -li: cālli “house,” xōchitl “flower.” Possession removes or changes that ending and adds a person prefix: no-cāl “my house,” ī-cāl “his/her house.” Verbs begin with person markers: ni- “I,” ti- “you/we” in appropriate paradigms, and a zero third-person subject in many forms. Object prefixes follow: nimitz- can mean “I … you,” while nic- can mean “I … it/him/her” in Classical-style analysis. A root may then take derivational and tense material. Learn slot patterns, but confirm every form with a variety-specific grammar and audio.",
      "gdn-unam",
      "ut-course"
    ),
    syntax: cited(
      "Predication does not always require an equivalent of English “be.” Nouns can carry person marking: ni-mācēhualli can mean “I am a commoner/person” in Classical-style examples. Questions may use an interrogative word plus ordinary verbal morphology; the UT course's Quēniuhqui motōcah? asks “What is your name?” Negation differs by variety: the Chicontepec course uses ax in lines such as tlen ax nicāmati “what I do not like,” whereas Classical descriptions commonly teach ahmo. Demonstratives, particles, honorific constructions, and discourse connectives are crucial to natural text, even though beginner charts often spotlight the verb.",
      "ut-course",
      "wiki-nahuatl"
    ),
    advancedPainPoints: [
      "Keeping the person-marking slots automatic during real-time speech",
      "Recognizing a noun after its absolutive ending disappears under possession",
      "Separating productive incorporation from memorized lexical compounds",
      "Tracking directionals and motion-oriented viewpoint in longer verbs",
      "Reading colonial spellings that omit length and saltillo",
      "Controlling honorific and socially situated forms without caricature"
    ],
    topics: [
      {
        title: "Subject and object inside the verb",
        body: cited("Classical-style niccua segments as ni-c-cua: first-person subject, third-person object, “eat.” The independent pronoun nehhuātl “I” is unnecessary unless discourse calls for emphasis or contrast. This is why memorizing cua alone does not yet give you a usable sentence.", "wiki-nahuatl", "gdn-unam"),
        example: "Niccua in tlaxcalli.",
        exampleTranslation: "I eat the tortilla. [Classical/normalized]"
      },
      {
        title: "Possession reshapes nouns",
        body: cited("With many nouns, possession is not just placing “my” before an unchanged dictionary form. The absolutive ending disappears and a possessive prefix appears. Seeing cālli beside nocāl trains the learner to recognize a stem across two grammatical environments.", "gdn-unam"),
        example: "Nocāl",
        exampleTranslation: "My house. [Classical/normalized: no- + cāl(li)]"
      },
      {
        title: "Relational nouns",
        body: cited("Spatial relations are frequently expressed with possessed relational nouns. Icpac concerns a top or upper surface; with ī- “its,” īcpac can function like “on top of it.” The possessive structure makes the landmark grammatically visible rather than hiding it in a free-standing preposition.", "gdn-unam", "wiki-nahuatl"),
        example: "Īcpac in petlatl.",
        exampleTranslation: "On top of the mat. [Classical/normalized]"
      },
      {
        title: "Noun incorporation",
        body: cited("A generic or non-specific noun stem can join a verb, forming one predicate. Incorporation is structured: it may background the object or name a customary activity, and it does not mean speakers can throw arbitrary nouns into any verb. Compare nacatl “meat” with the compound verb ninacacua “I eat meat.”", "wiki-nahuatl", "gdn-unam"),
        example: "Ninacacua.",
        exampleTranslation: "I eat meat / I am meat-eating. [Classical-style]"
      },
      {
        title: "Commands",
        body: cited("The second-person command commonly adds xi- before the verb complex. The UT course title Ximoquētza “Stand up!” also includes mo-, a reflexive/middle marker. Learn commands from recordings because politeness and social force live in particles, intonation, plural marking, and address forms as well as morphology.", "ut-course"),
        example: "Ximoquētza!",
        exampleTranslation: "Stand up! [Chicontepec Huasteca course form]"
      },
      {
        title: "Negation is variety-specific",
        body: cited("The Chicontepec materials use ax as a negator; many Classical courses use ahmo. This small high-frequency difference is a useful warning against blending courses. Once a target variety is chosen, collect negative and affirmative versions of the same verb from the same speaker.", "ut-course"),
        example: "Tlen ax nicāmati",
        exampleTranslation: "What I do not like. [Chicontepec Huasteca]"
      },
      {
        title: "Direction and viewpoint",
        body: cited("Nahuatl verbal systems can specify motion toward, away from, before, or after the main event through directional material. English often translates these with separate verbs such as “go to” or “come and.” The forms vary, but the conceptual lesson is stable: learn an event together with the speaker's viewpoint and path.", "wiki-nahuatl", "ut-course"),
        example: "Nitlacuatīuh.",
        exampleTranslation: "I am going to eat. [Classical-style directional construction]"
      },
      {
        title: "Honorific language",
        body: cited("Respect can be expressed through special morphology, address terms, pluralization, particles, and conventional phrasing. Colonial grammars describe elaborate honorific patterns, while living communities maintain their own norms. Do not mechanically inflate every sentence: relationship, age, setting, and locality determine what sounds considerate rather than theatrical.", "wiki-nahuatl", "online-dictionary")
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Nahuatl's largest concentrations lie in a broad, discontinuous arc through the Huasteca and central and eastern Mexico rather than one compact “Aztec homeland.” INEGI's 2020 results identify Nahuatl as Mexico's most widely reported Indigenous language, accounting for 22.4 percent of people aged three and over who reported speaking an Indigenous language. State totals conceal decisive local patterns: a language may be robust in one municipality and weakly transmitted nearby. Migration links villages with Mexico City, Monterrey, agricultural regions, and cities in the United States, creating families whose Nahuatl networks cross borders.",
      "inegi-2020",
      "inali-catalog"
    ),
    regions: [
      { place: "The Huasteca", note: cited("Parts of Hidalgo, Veracruz, and San Luis Potosí contain major speaker populations and several distinct Huasteca varieties. Chicontepec in northern Veracruz is the basis of the UT/IDIEZ online course.", "inali-catalog", "ut-course") },
      { place: "Puebla, Tlaxcala, and central highlands", note: cited("Sierra Norte, central Puebla, Tlaxcala, and neighboring areas contain numerous communities with different autonyms and speech forms; “Central Nahuatl” is not a single town-level description.", "inali-catalog", "glottolog-nahuatl") },
      { place: "Guerrero, Morelos, and State of Mexico", note: cited("Living communities use Nahuatl in family, ceremonial, agricultural, educational, commercial, literary, and political settings. Vitality differs sharply by locality and generation.", "inali-catalog") },
      { place: "Veracruz Isthmus, Oaxaca, Durango, and western communities", note: cited("Smaller or geographically separated varieties expand the map beyond central Mexico. They are especially important evidence against treating the speech of the Mexico City basin as the whole language.", "glottolog-nahuatl", "inali-catalog") },
      { place: "Urban and transnational migration", note: cited("Nahua speakers live in Mexican cities and diaspora communities, including the United States. A census map tied only to ancestral municipalities misses these mobile speaker networks and the language practices of second generations.", "wiki-history", "inegi-2020") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "For an English speaker, the hardest part is not tl; it is building a reliable ecosystem around one variety. Spanish unlocks far more teachers, descriptions, and community media, while Classical Nahuatl has stronger English-language textbook coverage than most modern forms. Morphology requires new habits but is systematic: recurring person prefixes make long words increasingly transparent. Listening is harder because recordings, searchable transcripts, and beginner sequencing are uneven. Social competence also matters. A grammatically possible phrase can still be wrong for the relationship or imported from another region.",
      "ut-course",
      "online-dictionary",
      "inali-catalog"
    ),
    easierAspects: [
      "A relatively small core vowel inventory in many varieties",
      "Recurring affix slots that make complex words segmentable",
      "Extensive colonial dictionaries and texts for historical study",
      "A free, coherent beginner-to-advanced Huasteca course with audio",
      "Many familiar international and Mexican Spanish loanwords from Nahuatl"
    ],
    hardAspects: [
      "Choosing among varieties and incompatible-looking orthographies",
      "Hearing vowel length and glottal features when they are not consistently written",
      "Producing person and object morphology without pausing",
      "Finding level-appropriate modern audio with accurate transcripts",
      "Learning community-specific pragmatics, respect, and conversational rhythm"
    ],
    plateauRisks: [
      "Remaining in Classical grammar while claiming to speak for modern communities",
      "Collecting impressive compounds without understanding ordinary verbs",
      "Relying on unsourced social-media translations that mix varieties",
      "Reading only about the Mexica and never listening to living Nahua speakers",
      "Treating spelling debates as errors instead of learning what each system represents"
    ],
    workload: cited(
      "A sustainable first year pairs three or four structured lessons a week with daily ten-minute audio loops and one regular session with a speaker or teacher of the same variety. In months one to three, master sound contrasts, person prefixes, possession, basic tense, questions, and fifty useful verbs. In months four to eight, retell course dialogues, transcribe short clips, and read graded stories. Then add a second orthography or historical texts deliberately. Progress should be measured by interactions—introducing family, explaining a routine, following a story—not by the maximum length of a word you can parse.",
      "ut-course",
      "online-dictionary"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build a variety ledger. Every note should name place, speaker or author, date, genre, spelling system, and whether the form is elicited, read, or spontaneous. For each verb, record one affirmative, one negative, one question, and one past or future form in a complete sentence. For each noun, record its unpossessed and possessed shapes. This turns the supposed maze of affixes into repeated contrasts. If studying Classical Nahuatl, maintain a diplomatic transcription beside a normalized version so editorial certainty never replaces manuscript evidence.",
      "ut-course",
      "gdn-unam"
    ),
    mediaPractice: cited(
      "Search by locality and autonym rather than only “Nahuatl.” Community radio, interviews with writers, songs, school videos, oral histories, and public-service messages reveal different registers. Work in thirty-second loops: listen without text, draft a transcription, compare with available captions, then shadow the entire phrase. Ask a teacher which features are local and which are performance style. Poetry and song are invaluable, but their compression and parallelism should not become your only model for conversation.",
      "inali-catalog",
      "ut-course"
    ),
    dictionariesAndCorpora: cited(
      "The University of Oregon Online Nahuatl Dictionary uniquely lets users search historical headwords and modern IDIEZ material, with contributors and provenance visible. UNAM's Gran Diccionario Náhuatl aligns roughly twenty dictionaries from different centuries and regions while retaining paleographic forms; its presentation explicitly warns that central Classical material dominates normalization. Use those tools comparatively, never as a universal translator. A dictionary hit is evidence from a source, period, and place—not automatic permission to use the word in Chicontepec conversation.",
      "online-dictionary",
      "gdn-unam"
    ),
    resources: [
      { type: "course", title: "Nāhuatlahtolli: Beginner to Advanced Online Course", url: "https://tlahtolli.coerll.utexas.edu/", level: "all", description: cited("A free, self-paced course with grammar, listening, reading, and many units, explicitly based on the Chicontepec, Veracruz variety and IDIEZ analysis.", "ut-course") },
      { type: "dictionary", title: "Online Nahuatl Dictionary", url: "https://nahuatl.wired-humanities.org/", level: "all", description: cited("Search English, Spanish, and Nahuatl across historical sources and modern Huasteca entries; inspect the source label before borrowing a form.", "online-dictionary") },
      { type: "corpus", title: "Gran Diccionario Náhuatl", url: "https://gdn.iib.unam.mx/", level: "advanced", description: cited("UNAM's concordance of dictionaries and textual lexicons from the sixteenth century to modern regional sources, with normalized and paleographic forms.", "gdn-unam") },
      { type: "other", title: "INALI Catalogue of National Indigenous Languages", url: "https://panitli.inali.gob.mx/clin-inali/", level: "all", description: cited("The essential map from the broad label Nahuatl to 30 named variants, autonyms, municipalities, and localities.", "inali-catalog") },
      { type: "app", title: "Totlahtol Nahuatl", url: "https://apps.apple.com/us/app/totlahtol-nahuatl/id1182991493", level: "all", description: cited("A dictionary app based on the Chicontepec Huasteca variety and IDIEZ lexical work; use it with the matching course rather than as pan-Nahuatl authority.", "totlahtol-app") },
      { type: "other", title: "Unicode Latin and Glottal Characters Reference", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-7/", level: "advanced", description: cited("A technical reference for glottal-stop and modifier characters useful when building clean searchable Nahuatl text.", "unicode-latin") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Nahuatl becomes memorable through families of words and forms, not exotic curiosities. Tlahtōlli can mean speech, a word, discourse, or language in historical central sources; in Nawatlahtolli it participates in a modern name for the language. Yōllotl “heart” connects body, emotion, and compounds, while its possessed form noyōllo “my heart” exposes grammar. Xōchitl “flower” and cuīcatl “song” appear together in the famous expression in xōchitl in cuīcatl, but reducing all Nahua aesthetics to “flower and song” is another romantic shortcut. Read who used an expression, in which manuscript or performance, for what audience. Modern poets such as Natalio Hernández/Xokoyotsij, community educators, radio presenters, rappers, storytellers, and children writing at school all extend the textual field.",
      "gdn-unam",
      "wiki-history",
      "inali-writing"
    ),
    notableWords: [
      { term: "tlahtōlli", meaning: "word, speech, discourse, language", note: cited("Built on the verb ihtoa “to say” in traditional analysis; its range is wider than English “word.” Modern spellings and exact senses vary.", "gdn-unam") },
      { term: "yōllotl", meaning: "heart", note: cited("A body term productive in expressions and compounds. Possessed noyōllo “my heart” drops the absolutive ending, making it a compact grammar lesson.", "gdn-unam", "ut-course") },
      { term: "xōchitl", meaning: "flower", note: cited("Common in names, poetry, place names, and compounds. Its cultural associations are rich but context-specific, not a universal key to a single “Nahua worldview.”", "gdn-unam") },
      { term: "mācēhualli", meaning: "person, commoner; community member in differing contexts", note: cited("Historical social meanings and modern self-designations cannot be collapsed into one English gloss. Related modern forms such as masewal vary by region.", "online-dictionary", "gdn-unam") },
      { term: "tlaxcalli", meaning: "maize tortilla", note: cited("The source of Mexican Spanish tlaxcal and visible in the place name Tlaxcala; it is also ideal for practicing the initial tl cluster.", "gdn-unam") },
      { term: "ātl", meaning: "water", note: cited("A short word with a long vowel in normalized Classical spelling. It appears in numerous compounds and place names, where the form may change at morpheme boundaries.", "gdn-unam") },
      { term: "tequitl", meaning: "work, task, tribute, office", note: cited("A historically and socially layered word. Colonial contexts can involve labor or tribute obligations; modern uses should be checked by variety rather than inherited from one dictionary gloss.", "gdn-unam", "online-dictionary") },
      { term: "tlazohcāmati", meaning: "thank you; to appreciate (in some modern usage)", note: cited("Widely circulated online as universal “thank you,” but pronunciation, spelling, frequency, and preferred alternatives differ. The Chicontepec course is the right place to confirm its local use.", "ut-course", "online-dictionary") }
    ],
    loanwordLayers: cited(
      "English speakers often meet Nahuatl unknowingly through Spanish: avocado ultimately relates to āhuacatl, coyote to coyōtl, tomato to tomatl, chile to chīlli, and axolotl retains axōlōtl almost visibly. These routes usually reflect central historical forms and Spanish sound adaptation; they do not make English a guide to modern Nahuatl pronunciation. In the other direction, Nahuatl varieties borrowed Spanish words and sometimes attach Nahuatl person, number, or verbal morphology to them. Religious vocabulary may use both calques built from Nahuatl material and loans. A useful vocabulary notebook marks inherited root, Spanish loan, modern coinage, uncertain etymology, and community source separately.",
      "gdn-unam",
      "online-dictionary",
      "wiki-history"
    ),
    idioms: [
      { original: "In xōchitl, in cuīcatl", transliteration: "in shōchitl, in kwīkatl", translation: "Flower and song / poetry and artistic expression", note: "Classical literary parallelism. Often treated as a philosophical slogan; read it inside specific songs and scholarly interpretations rather than as a free-floating universal proverb." },
      { original: "Ca zan tlācatl", transliteration: "ka san tlākatl", translation: "He/she is only human; merely a person", note: "Classical-style expression whose force depends on context. Included as a reading example, not a claim about modern conversational frequency." },
      { original: "Noyōllo", transliteration: "no-yōl-lo", translation: "My heart", note: "Chicontepec course unit title for possession. As an address or expressive fragment its meaning depends on speaker and relationship; grammatically it shows the possessed noun shape." },
      { original: "Timoittazqueh", transliteration: "ti-mo-itta-s-keh", translation: "We will see one another; see you", note: "Commonly taught Classical/central-style farewell formation. Modern communities may use a cognate with different spelling or prefer another leave-taking formula." },
      { original: "Cualli ohtli", transliteration: "kwalli ohtli", translation: "Good road; have a good journey", note: "A transparent Classical/central-style good-wish often circulated as a farewell. Confirm local pronunciation and actual usage before adopting it." }
    ],
    textGenres: [
      "Community oral histories, origin narratives, advice, joking, and ceremonial speech",
      "Colonial wills, town records, petitions, annals, land documents, and correspondence",
      "Song-poems, huehuetlahtolli or formal speeches, drama, and Christian texts in historical archives",
      "Contemporary poetry, short fiction, children's books, memoir, translation, and language activism",
      "Community and Indigenous radio, interviews, public-health messages, news, and educational video",
      "Popular music, rap, subtitled social media, messaging, and transnational family audio"
    ]
  },
  relationships: {
    overview: cited(
      "Family and contact answer different questions. Nawat and extinct Pochutec belong to Nahuan; Ute, Hopi, and Rarámuri are distant Uto-Aztecan relatives. Spanish and neighboring Mexican languages are not close genealogical siblings merely because contact produced shared words or structures. Within Nahuatl, “languages” can be more accurate than “dialects”: Glottolog lists numerous entries, while INALI recognizes 30 variants.",
      "glottolog-nahuatl",
      "inali-catalog"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Learn from contemporary Nahua people as contemporaries. Avoid treating Nahuatl as “Aztec spirituality,” inventing tattoos, or asking a historical dictionary for an ancestral name. Communities differ greatly. Ask consent before recording, credit and compensate teachers, buy community publications, and return useful transcripts. Interrupted transmission can reflect discrimination, not inauthenticity. Revitalization lives in homes, schools, services, radio, literature, and jokes—not outsider mysticism.",
  resources: [
    { type: "course", title: "University of Texas Nāhuatlahtolli Course", url: "https://tlahtolli.coerll.utexas.edu/", level: "all", description: cited("The strongest free structured path in this guide, with a clearly identified Chicontepec, Veracruz target and acknowledgment of IDIEZ's collective work.", "ut-course") },
    { type: "dictionary", title: "Online Nahuatl Dictionary", url: "https://nahuatl.wired-humanities.org/", level: "all", description: cited("A trilingual research dictionary spanning historical sources and modern IDIEZ Huasteca contributions, with source labels essential to responsible use.", "online-dictionary") },
    { type: "corpus", title: "UNAM Gran Diccionario Náhuatl", url: "https://gdn.iib.unam.mx/", level: "advanced", description: cited("An open set of roughly twenty dictionaries across four centuries, regions, paleographic originals, normalized forms, and contextual examples.", "gdn-unam") },
    { type: "other", title: "INALI Nahuatl Variant Catalogue", url: "https://panitli.inali.gob.mx/clin-inali/html/v_nahuatl.html", level: "all", description: cited("Consult this before calling any word simply “Nahuatl”: it identifies 30 variants, community autonyms, and detailed geographic references.", "inali-catalog") },
    { type: "app", title: "Totlahtol Nahuatl Dictionary App", url: "https://apps.apple.com/us/app/totlahtol-nahuatl/id1182991493", level: "all", description: cited("A mobile companion grounded in Chicontepec Huasteca vocabulary collected with IDIEZ; particularly useful alongside the matching UT course.", "totlahtol-app") },
    { type: "other", title: "INEGI Indigenous-language Census Results", url: "https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/nueva_estruc/702825198060.pdf", level: "all", description: cited("The primary 2020 national census source for current speaker proportions and demographic context; use it with local evidence rather than as a vitality score.", "inegi-2020") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Pialli", translation: "Hello", usageNote: "Commonly taught modern greeting, including in Huasteca-oriented materials; local pronunciation and preference vary. [Modern Huasteca-oriented]" },
    { original: "Quēniuhqui motōcah?", transliteration: "kēniuhki motōkah", translation: "What is your name?", literalMeaning: "How is your name?", usageNote: "The title of Unit 3 in the Chicontepec course; macrons follow that course's display. [Chicontepec, Veracruz]" },
    { original: "Na notōcah …", transliteration: "na notōkah …", translation: "My name is …", usageNote: "Use with the question above and imitate the course audio rather than guessing stress. [Chicontepec, Veracruz]" },
    { original: "Quēniuhqui tiitztoc?", transliteration: "kēniuhki tiitstok", translation: "How are you?", literalMeaning: "How are you being/staying?", usageNote: "A Huasteca-course-style conversational question; exact spelling differs across systems. [Chicontepec-oriented]" },
    { original: "Cualli", transliteration: "kwalli", translation: "Good; fine", usageNote: "A compact response and adjective; do not assume it replaces every local greeting formula. [Broad historical/modern cognate]" },
    { original: "Tlazohcāmati", transliteration: "tlasohkāmati", translation: "Thank you", usageNote: "Widely taught but not equally preferred everywhere; verify the local form with a speaker. [Modern teaching form]" },
    { original: "Ax nicahsicamati", transliteration: "ash nikahsikamati", translation: "I do not understand", usageNote: "Uses ax, characteristic of the Chicontepec course's negation. Other varieties may use ahmo and a different verb form. [Chicontepec-oriented]" },
    { original: "Sampa xiquihto", transliteration: "sampa shikihto", translation: "Say it again", literalMeaning: "Again, say it", usageNote: "A practical command assembled in a Huasteca-oriented spelling; confirm politeness and plural address locally. [Huasteca-oriented]" },
    { original: "¿Tlachque quihtoznequi ni tlahtolli?", transliteration: "tlachke kihtosneki ni tlahtolli", translation: "What does this word mean?", usageNote: "A pedagogical Huasteca-oriented question; wording and demonstrative vary by community. [Huasteca-oriented]" },
    { original: "Na nimomachtia Nawatlahtolli", transliteration: "na nimomachtia nawatlahtolli", translation: "I am learning Nahuatl", usageNote: "Names the language Nawatlahtolli, matching the course/institutional modern spelling. [Modern Huasteca-oriented]" },
    { original: "Timoittazqueh", transliteration: "timoittaskeh", translation: "See you; we will see one another", usageNote: "A Classical/central-style future reciprocal often used in teaching. Ask for the natural local farewell. [Classical/central teaching form]" },
    { original: "Cualli ohtli", transliteration: "kwalli ohtli", translation: "Have a good journey", literalMeaning: "Good road", usageNote: "Historical/central-style expression useful in texts; not a universal daily goodbye. [Classical/central]" }
  ],
  sources: [
    { id: "inali-catalog", title: "Catálogo de las Lenguas Indígenas Nacionales: variantes lingüísticas del náhuatl", url: "https://panitli.inali.gob.mx/clin-inali/html/v_nahuatl.html", publisher: "Instituto Nacional de Lenguas Indígenas", publishedAt: "2008", accessedAt: "2026-07-10" },
    { id: "inali-rights", title: "Ley General de Derechos Lingüísticos de los Pueblos Indígenas", url: "https://site.inali.gob.mx/LGDPI/", publisher: "Instituto Nacional de Lenguas Indígenas / Cámara de Diputados", updatedAt: "2023-10-18", accessedAt: "2026-07-10" },
    { id: "inali-writing", title: "Community-based Indigenous-language writing alphabets", url: "https://site.inali.gob.mx/INALIDhuchlab/alfabetos", publisher: "Instituto Nacional de Lenguas Indígenas", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "inegi-2020", title: "Principales resultados del Censo de Población y Vivienda 2020: Estados Unidos Mexicanos", url: "https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/nueva_estruc/702825198060.pdf", publisher: "Instituto Nacional de Estadística y Geografía", publishedAt: "2021", accessedAt: "2026-07-10" },
    { id: "ut-course", title: "Nāhuatlahtolli: A Beginner to Advanced Level Nahuatl Online Course", url: "https://tlahtolli.coerll.utexas.edu/", publisher: "COERLL, University of Texas at Austin, with IDIEZ", accessedAt: "2026-07-10" },
    { id: "online-dictionary", title: "Online Nahuatl Dictionary", url: "https://nahuatl.wired-humanities.org/", publisher: "Wired Humanities Projects, University of Oregon", accessedAt: "2026-07-10" },
    { id: "gdn-unam", title: "Gran Diccionario Náhuatl", url: "https://gdn.iib.unam.mx/presentacion", publisher: "Universidad Nacional Autónoma de México", updatedAt: "2012", accessedAt: "2026-07-10" },
    { id: "glottolog-nahuatl", title: "Glottolog 5.3: Nahuatl language entries", url: "https://glottolog.org/glottolog?search=Nahuatl", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "The Unicode Standard, Chapter 7: Europe-I (Latin, glottal stop, and modifier characters)", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-07-10" },
    { id: "wiki-nahuatl", title: "Nahuatl", url: "https://en.wikipedia.org/wiki/Nahuatl", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of Nahuatl", url: "https://en.wikipedia.org/wiki/History_of_Nahuatl", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "totlahtol-app", title: "Totlahtol Nahuatl", url: "https://apps.apple.com/us/app/totlahtol-nahuatl/id1182991493", publisher: "IDIEZ-aligned community dictionary project", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Nahuatl Language Guide: Living Varieties, Grammar and Learning",
    description: "A deeply researched guide to living Nahuatl varieties, Classical texts, pronunciation, orthographies, polysynthetic grammar, community context, phrases, and reliable learning resources."
  }
} satisfies LanguageGuide;
