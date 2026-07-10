import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Malayalam",
    slug: "malayalam",
    relationship: "Tamil's closest major literary relative",
    explanation: cited("Tamil and Malayalam belong to the South Dravidian branch and descend from a comparatively recent shared stage. Kerala formed part of the wider early Tamil literary world, but Malayalam developed its own recognizable language and literature over the medieval period. Modern similarities are real, especially in basic vocabulary and grammatical architecture, yet sound change, Sanskrit-derived vocabulary, and separate standard traditions prevent easy mutual understanding.", "glottolog", "wiki-tamil")
  },
  {
    name: "Kannada",
    relationship: "A neighboring South Dravidian language",
    explanation: cited("Kannada shares inherited Dravidian patterns such as suffixing morphology, retroflex consonants, and verb-final clauses, but it is not a dialect of Tamil and has an independent inscriptional and literary history. Centuries of migration and political contact have also produced bilingual communities and loans in both directions. Recognizing a cognate can help; assuming its modern meaning or level of politeness is identical can mislead.", "glottolog", "wiki-tamil")
  },
  {
    name: "Telugu",
    relationship: "A major Dravidian neighbor from another branch",
    explanation: cited("Telugu belongs to South-Central Dravidian rather than Tamil's immediate subgroup. It still offers useful typological familiarity: postpositions, case endings, participial constructions, and head-final syntax. Contact is especially visible in border districts, cinema, music, and urban speech. Shared Sanskrit loans sometimes look more alike than inherited vocabulary, which is why resemblance alone cannot establish family history.", "glottolog", "upenn")
  },
  {
    name: "Sinhala",
    relationship: "Long-standing Indo-Aryan contact language in Sri Lanka",
    explanation: cited("Sinhala and Tamil are genealogically unrelated but have influenced each other through many centuries of coexistence in Sri Lanka. Their contact cannot be reduced to word borrowing: multilingual neighborhoods, trade, administration, education, displacement, and political conflict all shape language choice. Tamil and Sinhala are both official and national languages under Sri Lanka's constitutional framework, while actual access to services can vary by place and institution.", "sri-lanka-olc", "sri-lanka-census")
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const tamilGuide = {
  slug: "tamil",
  name: "Tamil",
  autonym: "தமிழ்",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Tamil is a global Dravidian language in which ancient poetry, contemporary cinema, regional conversation, digital writing, and sharply different formal and spoken registers remain part of the same living practice.",
  family: "Dravidian, South Dravidian",
  macroRegion: "South India, Sri Lanka, Southeast Asia, and a worldwide diaspora",
  primaryScript: "Tamil script",
  difficultyLabel: "Very demanding",
  learnerHook: "Tamil gives you two discoveries at once: an everyday language alive in jokes, family calls, film dialogue, and street argument, and a literary world whose earliest surviving texts are more than two millennia old.",
  hero: {
    imageAlt: "Tamil letters alongside a conversation, newspaper, and classical verse, showing the language's many registers.",
    callToActionLabel: "Hear Tamil in use"
  },
  classification: "A major South Dravidian language with ancient attestations and multiple modern standards",
  speakerCommunity: "Tamil belongs to overlapping communities rather than a single nation or accent. India's 2011 census counted about 69 million people reporting Tamil as a mother tongue; that dated figure is not a current global total. Tamil is the principal language of Tamil Nadu and Puducherry. In Sri Lanka it is spoken by Sri Lankan Tamil, Malaiyaha Tamil, Muslim, and other communities, whose identities must not be collapsed into one census label. It is official in Sri Lanka and Singapore and has deep roots in Malaysia. Migration, war, commerce, and education created communities from Mauritius and South Africa to the Gulf, Europe, North America, and Australia. A Toronto heritage learner, Jaffna journalist, and Chennai filmmaker can all use Tamil while differing in accent, vocabulary, and literacy history.",
  facts: [
    { label: "Family", value: "Dravidian; South Dravidian branch" },
    { label: "India census", value: "About 69 million mother-tongue respondents in 2011" },
    { label: "Historical depth", value: "Tamil-Brahmi inscriptions and a literary record extending over two millennia" },
    { label: "Registers", value: "Modern formal/written Tamil and several spoken standards differ substantially" },
    { label: "Script", value: "A Brahmi-derived abugida with 12 vowel letters, 18 basic consonant letters, and āytam" },
    { label: "Public status", value: "Official in Tamil Nadu and Puducherry; official nationally in Sri Lanka and Singapore" }
  ],
  learnerOverview: "Start by deciding which conversation you want to join. For most learners in India or the wider diaspora, a Chennai-oriented educated colloquial variety is a practical spoken base; learners with Sri Lankan family or community goals should use a Sri Lankan model from the beginning. Study modern written Tamil beside it, not instead of it. The perfectly ordinary spoken question நீங்க எங்கே போறீங்க? nīnga eṅgē pōrīnga? ‘Where are you going?’ corresponds to formal நீங்கள் எங்கே போகிறீர்கள்? nīṅkaḷ eṅkē pōkiṟīrkaḷ? The difference is systematic, but large enough that a reader-only course can leave you sounding ceremonial and unable to follow a film. Learn the script early, record vowel length and retroflexion carefully, and store phrases as paired spoken and formal forms. Tamil grammar becomes less forbidding when suffixes are read as a sequence of decisions: வீட்டிலிருந்து vīṭṭiliruntu means ‘from the house,’ with house + locative + source. Let literature enter gradually through a modern translation, song, proverb, or two-line poem rather than through claims that ancient Tamil is transparent to every modern speaker.",
  origins: {
    overview: cited("Tamil is a Dravidian language, not an offshoot of Sanskrit. Its earliest secure written evidence includes Tamil-Brahmi inscriptions from the last centuries BCE, while Old Tamil literature preserves an exceptionally early South Asian corpus. Scholars conventionally describe Old Tamil, Middle Tamil, and Modern Tamil, but period boundaries summarize many overlapping sound, grammar, and literary changes. The celebrated Sangam anthologies contain poems about love, warfare, generosity, grief, landscape, and public life. Traditional stories of three vast poetic academies are culturally influential; they should not be mistaken for a securely dated institutional history. The surviving works are remarkable without stretching their chronology beyond the evidence.", "wiki-tamil", "wiki-literature", "upenn"),
    timeline: [
      { period: "Late centuries BCE", event: cited("Tamil-Brahmi inscriptions on caves, pottery, and other objects provide early written evidence. Their language and script link Tamil to both a regional social history and the wider Brahmi writing tradition; dates and individual readings continue to be refined by epigraphists.", "wiki-tamil", "unicode") },
      { period: "Roughly early centuries BCE–CE", event: cited("The works now grouped as Sangam literature took shape across a debated range of dates. They organize interior love poetry and exterior public poetry through sophisticated conventions of landscape, mood, action, and voice. The corpus is literature, not a census transcript of ancient society, but it remains a major historical and aesthetic source.", "wiki-literature", "project-madurai") },
      { period: "Early medieval period", event: cited("Jain and Buddhist epics, ethical works, and the devotional poetry of Shaiva Nayanmars and Vaishnava Alvars expanded Tamil's genres and sacred geographies. Tamil and Sanskrit interacted in scholarship, worship, courtly life, and vocabulary; neither simple replacement nor sealed purity describes that history.", "wiki-literature", "upenn") },
      { period: "Medieval–early modern centuries", event: cited("Commentaries, temple inscriptions, grammar, medicine, performance, and courtly works sustained multiple learned traditions. Muslim Tamil writing and Christian print later added genres and lexical layers, including Arabic, Persian, Portuguese, and other contact forms.", "wiki-literature", "tamil-lexicon") },
      { period: "Nineteenth–twentieth centuries", event: cited("Print culture, manuscript recovery, mass education, journalism, lexicography, nationalist movements, and the Pure Tamil movement reshaped ideas of correctness and heritage. U. V. Swaminatha Iyer's editions helped return many classical works to wide circulation. Language reform was tied to caste, religion, colonial knowledge, and Dravidian politics, so ‘purification’ was never merely a neutral vocabulary exercise.", "wiki-literature", "tamil-lexicon") },
      { period: "2004 to the present", event: cited("India formally recognized Tamil as a Classical Language in 2004. Today it operates simultaneously in government, education, global entertainment, family networks, social media, computing, and scholarship. Institutional celebration does not erase unequal literacy, dialect prejudice, or debates over which spoken voices appear in formal spaces.", "india-classical", "tva") }
    ],
    contactHistory: cited("Tamil has exchanged words and practices with Sanskrit and Prakrit for many centuries, and later with Persian, Arabic, Portuguese, Dutch, English, Sinhala, Malay, and neighboring Dravidian languages. A Sanskrit-derived item may sound scholarly, devotional, perfectly ordinary, or politically marked depending on speaker and context. Arabic-derived vocabulary is especially visible in Muslim communities; Portuguese and English contributed terms connected with material culture, administration, and modernity. English code-switching is now conspicuous in urban professional and digital life. The twentieth-century Pure Tamil movement promoted replacements for many Sanskrit forms and influenced public vocabulary, but no single ratio of ‘native’ to ‘borrowed’ words measures authentic Tamil. Learn both alternatives and their social distribution.", "upenn", "tamil-lexicon", "wiki-tamil"),
    standardization: cited("Modern Standard Written Tamil is used in education, serious prose, government, much journalism, and formal broadcasting across regions, with some Indian–Sri Lankan differences. Spoken Tamil is not simply careless writing: it has systematic sound changes, forms, vocabulary, and regional norms of its own. This coexistence is called diglossia, a stable division of labor between socially differentiated varieties. Formal speech may approach written grammar; film dialogue and interviews range from stylized colloquial to strongly local. The labels ‘high’ and ‘low’ describe conventional domains, not the worth or complexity of speakers. Contemporary informal writing—messages, subtitles, fiction, and social posts—also makes the boundary porous.", "upenn", "ashoka-diglossia", "ut-diglossia")
  },
  variants: {
    overview: cited("Tamil variation crosses regions, religions, caste histories, class, age, medium, and migration experience. Broad labels such as ‘Indian Tamil’ and ‘Sri Lankan Tamil’ hide substantial internal diversity. Chennai speech has media reach but is not the neutral source of all colloquial Tamil; Jaffna speech is prominent in descriptions of Sri Lankan Tamil but does not stand for Batticaloa, Muslim, or Malaiyaha varieties. Some differences preserve older contrasts, while others arise through contact and local innovation. Learners should name their model and expand comprehension without turning features into caricatures.", "upenn", "ashoka-diglossia", "wiki-tamil"),
    items: [
      { name: "Modern Standard Written Tamil", note: cited("The cross-regional learned variety used in most edited prose, schooling, administration, and news. Pronunciation varies by speaker, and Sri Lankan editorial preferences can differ from Indian ones. It is alive and changing, not identical to Sangam Tamil.", "ashoka-diglossia", "upenn") },
      { name: "Tamil Nadu educated colloquial", note: cited("An umbrella for speech that reduces strongly local markers while retaining colloquial grammar. Chennai media has made some of its forms widely recognizable: formal போகிறேன் pōkiṟēṉ ‘I go/am going’ commonly appears as போறேன் pōrēn. Actual Chennai speech also varies by neighborhood and social network.", "ut-diglossia", "ashoka-diglossia") },
      { name: "Southern and western Tamil Nadu varieties", note: "Madurai, Tirunelveli, Coimbatore, Kongu-region, and other varieties have recognizable pronouns, endings, sounds, and vocabulary. Film comedy sometimes stereotypes local or caste-associated features; learn them from speakers in context." },
      { name: "Sri Lankan Tamil varieties", note: cited("Jaffna, Batticaloa, Trincomalee, Muslim, and Malaiyaha Tamil speech differ from one another as well as from common Tamil Nadu models. Some retain distinctions changed in much Indian speech, and contact with Sinhala and English varies. War and displacement have carried these varieties into major diaspora communities.", "sri-lanka-census", "upenn") },
      { name: "Diaspora and contact varieties", note: "Communities across Southeast Asia, the Indian Ocean, the Gulf, Europe, and North America have different migration histories. Contact with Malay, English, French, Arabic, and other home languages produces local vocabulary and different paths to literacy." }
    ]
  },
  pronunciation: {
    overview: cited("Tamil spelling is structured and learnable, but it is not a narrow phonetic transcript. Vowel length is contrastive: கல் kal ‘stone’ and கால் kāl ‘leg/foot’ differ in duration. Tamil also contrasts dental, retroflex, and in some positions alveolar places of articulation. Retroflex sounds are made with the tongue curled or retracted; they are not merely emphatic English consonants. A single consonant letter can have different phonetic realizations depending on position: க may be [k], [g], or a fricative-like sound in modern speech. Choose recordings from your target variety because colloquial reductions vary.", "tva", "openlearn-script", "wiki-tamil"),
    script: "Tamil script, supported by IPA or a consistent scholarly transliteration for sound study",
    soundSystem: cited("The vowel system distinguishes short அ a, இ i, உ u, எ e, ஒ o from long ஆ ā, ஈ ī, ஊ ū, ஏ ē, ஓ ō, with ஐ ai and ஔ au traditionally classed as diphthongs. Consonant length also matters: பட்டம் paṭṭam ‘kite/title’ and படம் paṭam ‘picture’ contrast. Three lateral letters—ல l, ள ḷ, ழ ḻ—and several rhotics/nasals demand careful listening. The famous ழ, conventionally transliterated ḻ, is a retroflex approximant, not English z. Stop voicing is largely predictable from position rather than written with separate basic letters; Grantha-derived ஜ ś ṣ s h spell many loans.", "openlearn-script", "unicode", "wiki-tamil"),
    prosody: "Tamil rhythm depends heavily on vowel and consonant quantity, phrase grouping, and intonation rather than a single forceful stress rule learners can apply to every word. Preserve long vowels even in unstressed syllables, and do not insert an English-style puff of air after unaspirated stops. In questions, politeness and stance emerge from the whole contour and final particles. Shadow short exchanges rather than isolated lists: எப்படி இருக்கீங்க? eppaṭi irukkīnga? ‘How are you?’ should become one rhythmic unit. Literary recitation, newsreading, cinema dialogue, and home conversation use conspicuously different pacing.",
    learnerTraps: [
      "Shortening long vowels, which can change a word or make it hard to recognize",
      "Pronouncing ழ ḻ as z, l, or r without learning a target articulation",
      "Merging dental த and retroflex ட because English lacks the contrast",
      "Reading க, ச, ட, த, and ப as one invariant stop regardless of position",
      "Copying formal spelling as conversational pronunciation and missing systematic reductions"
    ],
    sampleWords: [
      { original: "தமிழ்", transliteration: "tamiḻ", translation: "Tamil", note: "The final ழ is the emblematic retroflex approximant; in natural speech the exact realization varies." },
      { original: "கல் / கால்", transliteration: "kal / kāl", translation: "stone / leg, foot", note: "Hold ā longer; the spelling and meaning both depend on vowel length." },
      { original: "படம் / பட்டம்", transliteration: "paṭam / paṭṭam", translation: "picture / kite; title", note: "The second word has a sustained retroflex stop: consonant length is structural, not expressive emphasis." },
      { original: "பல் / பள் / பழம்", transliteration: "pal / paḷ / paḻam", translation: "tooth / (sound drill) / fruit", note: "Use these forms to separate ல l, ள ḷ, and ழ ḻ; the middle item is mainly a drill syllable." },
      { original: "தண்ணீர்", transliteration: "taṇṇīr", translation: "water", note: "Begin with dental த, then retract the tongue for doubled retroflex ண்ண; keep ī long." },
      { original: "வணக்கம்", transliteration: "vaṇakkam", translation: "greetings", note: "The doubled k is longer than an English single consonant; initial வ may range between v- and w-like realizations." }
    ]
  },
  writing: {
    overview: cited("Tamil is written left to right in a Brahmi-derived abugida. An abugida writes consonants with an inherent vowel and modifies them with vowel signs. The traditional school inventory has 12 independent vowels, 18 basic consonants, and āytam ஃ; combining consonants and vowels yields the familiar 216 uyirmey forms. This does not mean memorizing 247 unrelated drawings. Learn each consonant's base shape, its puḷḷi form that cancels the vowel, and the recurring vowel-sign patterns. The modern script has relatively few conjunct consonant ligatures compared with many Indic scripts.", "unicode", "openlearn-script", "tva"),
    primaryScript: "Tamil abugida (Unicode Tamil block U+0B80–U+0BFF)",
    romanization: "Romanization is useful for annotating retroflexion and vowel length, but no single casual spelling is reliable. This guide uses readable scholarly marks such as ā, ṭ, ṇ, ḷ, ḻ, and ṟ. Tamil speakers often type colloquial Tamil in Latin letters without a common standard, so ‘enna’, ‘enna?’, and ‘yenaa’ may represent different intended forms. Move into script early and treat transliteration as a pronunciation note, not the language's real orthography.",
    spellingNorms: cited("A consonant such as க normally includes inherent a; க் with puḷḷi represents bare k, while கி, கீ, கு, கூ, கெ, கே, கை, கொ, கோ, and கௌ combine vowel signs with it. Some signs render visually before or on both sides of the consonant even though their Unicode order follows the consonant. Do not type what the final glyph looks like by manually rearranging code points. Tamil spelling often preserves morphological and historical information that colloquial pronunciation reduces. Formal என்று eṉṟu may be spoken ன்னு ṉṉu in some Tamil Nadu contexts, but edited prose retains என்று.", "unicode", "ut-diglossia"),
    styleNotes: [
      cited("Use a Tamil keyboard and a modern Unicode font. Legacy font encodings can display correctly on one machine while storing meaningless Latin code points underneath.", "unicode"),
      "Learn the Grantha-derived letters ஜ, ஷ, ஸ, ஹ and the ligature க்ஷ as reading tools for loans and names, while noting that spelling choices can carry stylistic or purist associations.",
      "Keep spoken transcripts and edited prose in separate notebook columns. Writing every colloquial reduction as though it were standard prose prevents register control; correcting every text message into literary Tamil hides living usage.",
      cited("Use the University of Madras Tamil Lexicon or Tamil Virtual Academy tools to check a form, then verify it in current sentences. Historical dictionary glosses may not reveal present-day register.", "tamil-lexicon", "tva")
    ]
  },
  grammar: {
    overview: "Tamil is predominantly suffixing and head-final: case follows nouns, auxiliary material follows verb stems, relative clauses precede nouns, and the finite verb usually comes late. ‘Agglutinative’ means that several meaningful pieces can be joined in a reasonably segmentable chain; it does not promise that every boundary remains unchanged. Sandhi—sound adjustments where pieces meet—creates alternate stems and linking consonants. Learn grammar from paired colloquial and formal sentences so a neat chart becomes something you can recognize at conversational speed.",
    typologicalProfile: cited("Tamil generally has subject–object–verb order, nominative–accusative alignment, postpositions, extensive case marking, no grammatical gender distinction in first- and second-person pronouns, and gender/animacy distinctions in parts of the third person. Subjects can be omitted when context and the verb make them recoverable. Word order is flexible for topic and focus, but flexibility is not randomness: moving an element changes what feels given, contrasted, or prominent.", "upenn", "msu-basic-tamil"),
    morphology: cited("Nouns can take plural, oblique-linking material, case, and clitic-like additions: வீடு vīṭu ‘house,’ வீட்டில் vīṭṭil ‘in the house,’ வீடுகளிலிருந்து vīṭukaḷiliruntu ‘from the houses.’ Verbs build tense, aspect, mood, negation, person-number-gender agreement, and politeness through stems, suffixes, auxiliaries, and participles. Spoken forms frequently contract: formal வந்திருக்கிறார் vantirukkiṟār ‘he/she has come’ has colloquial counterparts such as வந்திருக்காரு vantirukkāru in some Indian varieties. Paradigms must therefore be indexed by register as well as tense.", "msu-basic-tamil", "ut-diglossia"),
    syntax: "Tamil often connects ideas through non-finite verbs rather than a string of English-style finite clauses. A verb can mark an action as completed before the next—சாப்பிட்டுவிட்டு வந்தேன் cāppiṭṭuviṭṭu vantēṉ, ‘I ate and then came’—or modify a following noun: நான் நேற்று வாங்கிய புத்தகம் nāṉ nēṟṟu vāṅkiya puttakam, ‘the book that I bought yesterday.’ There is no relative pronoun equivalent to English ‘that’ in this construction. Copulas may be absent in simple present nominal sentences, and possession is commonly expressed as ‘to me there is’: எனக்கு ஒரு கேள்வி இருக்கு eṉakku oru kēḷvi irukku, ‘I have a question.’",
    advancedPainPoints: [
      "Maintaining separate productive spoken and written paradigms",
      "Hearing case endings after stem changes and rapid reductions",
      "Selecting honorific agreement and address forms without overgeneralizing",
      "Interpreting long participial and nominalized clauses before their head",
      "Learning where a formally possible form sounds unnatural in a particular community"
    ],
    topics: [
      { title: "Case chains make relationships visible", body: cited("Tamil marks roles with suffixes: accusative -ஐ -ai, dative -க்கு -kku, sociative/instrumental -ஆல் -āl, genitive forms, and several locative or source constructions. Spoken Tamil may reduce or omit accusative marking when the object is nonspecific, while a definite human object strongly favors it. Study the stem changes with each noun rather than attaching one printed ending mechanically.", "msu-basic-tamil"), example: "நான் ரவியைப் பார்த்தேன். Nāṉ Raviyai pārttēṉ.", exampleTranslation: "I saw Ravi. The human object Ravi takes accusative -ai; the final verb identifies the first-person past subject." },
      { title: "Agglutination builds a route", body: "Suffixes can encode a miniature spatial argument. வீட்டிலிருந்து vīṭṭiliruntu combines the oblique form of ‘house,’ locative -il, and source -iruntu. Add a focus particle and you get வீட்டிலிருந்தே vīṭṭiliruntē, ‘from the house itself/right from the house.’ Segment long words aloud, then restore them to complete sentences.", example: "அவள் வீட்டிலிருந்து வேலை செய்கிறாள். Avaḷ vīṭṭiliruntu vēlai ceykiṟāḷ.", exampleTranslation: "She works from home. In colloquial Tamil Nadu speech, the verb may be வேல செய்றாங்க/செய்றா depending on respect and variety." },
      { title: "Relative participles come before nouns", body: "A Tamil relative construction puts a specially formed verb before the noun it describes. The missing participant is interpreted from context, whether English would call it subject, object, place, or time. This makes compact noun phrases but requires listeners to hold the clause until its head arrives.", example: "நான் படித்த புத்தகம் மிகவும் நல்லது. Nāṉ paṭitta puttakam mikavum nallatu.", exampleTranslation: "The book that I read is very good. Paṭitta ‘read’ modifies puttakam ‘book’; there is no separate word for ‘that.’" },
      { title: "Verbs encode tense and participants", body: "Finite verbs distinguish tense and commonly agree with a third-person subject in person, number, and gender or rationality classes. First- and second-person endings do not encode gender. Spoken Tamil reorganizes and contracts much of the written paradigm, so போகிறேன் pōkiṟēṉ and போறேன் pōrēn are not interchangeable in every setting even though both can mean ‘I am going/I go.’", example: "அவர்கள் நாளை வருவார்கள். Avarkaḷ nāḷai varuvārkaḷ.", exampleTranslation: "They will come tomorrow. The formal plural/honorific ending -ārkaḷ belongs to the written or careful register." },
      { title: "Honorificity reaches agreement", body: "Respect is expressed through pronouns, titles, plural-like forms, and verb agreement. அவர் avar can respectfully refer to one person; அவர்கள் avarkaḷ may be plural or more honorific. Spoken systems differ regionally. Do not map English ‘you’ onto நீ nī everywhere: நீங்கள் nīṅkaḷ or colloquial நீங்க nīnga is safer with an unfamiliar adult, but relationships and local norms decide.", example: "அவர் இப்போது வருகிறார். Avar ippōtu varukiṟār.", exampleTranslation: "He/she (respectful) is coming now. The verb uses honorific -ār; gender is not specified." },
      { title: "Negation uses more than one strategy", body: "Tamil has negative auxiliaries and special negative forms rather than one universal word equivalent to ‘not.’ இல்லை illai negates existence or nominal predicates; வேண்டாம் vēṇṭām means ‘not wanted/don't’; verbal constructions include -வில்லை -villai in common formal usage and contracted colloquial forms. Prohibitions use -ஆதே -ātē or plural/respectful -ஆதீர்கள் -ātīrkaḷ, with spoken alternatives.", example: "எனக்குத் தெரியவில்லை. Eṉakkut teriyavillai.", exampleTranslation: "I don't know. Literally the construction presents knowing as not available ‘to me’; colloquial forms include எனக்குத் தெரியல eṉakkut teriyala." },
      { title: "Clause chaining keeps stories moving", body: "Conjunctive participles let one subject perform a sequence without repeating finite marking. Auxiliary verbs after a main verb can add completion, benefaction, attempt, or speaker attitude; their meaning is not always the same as the standalone verb. These chains are crucial in narrative and ordinary instructions.", example: "கதவைத் திறந்து உள்ளே வாருங்கள். Katavait tiṟantu uḷḷē vāruṅkaḷ.", exampleTranslation: "Open the door and come inside. Only the final verb carries the polite imperative; tiṟantu links the preceding action." }
    ]
  },
  whereSpoken: {
    overview: cited("Tamil's geography is a network of homelands, old trading settlements, indenture-era communities, refugee and professional migration, and newer student or labor routes. Official status does not guarantee equal use in every school, court, or office, and minority status does not mean a community is recent. Census categories count people in different ways—mother tongue, ethnicity, ability, or literacy—so figures from India, Sri Lanka, Singapore, and diaspora states should not be added as if they measured the same thing.", "india-classical", "sri-lanka-census", "sri-lanka-olc"),
    regions: [
      { place: "Tamil Nadu and Puducherry, India", note: cited("The largest concentration of Tamil speakers and the center of a huge publishing, television, music, and film economy. The 2011 Indian census remains the latest completed nationwide language census available for detailed mother-tongue totals as of this guide's publication context.", "india-classical") },
      { place: "Sri Lanka", note: cited("Tamil is an official and national language alongside Sinhala, with English designated the link language. Northern, eastern, hill-country, Colombo, Muslim, and displaced communities have distinct histories. The 2024 census reports language literacy by ethnic category, illustrating multilingualism while also showing why language and ethnicity cannot be treated as synonyms.", "sri-lanka-census", "sri-lanka-olc") },
      { place: "Singapore and Malaysia", note: "Tamil is official in multilingual Singapore and has a long Malaysian institutional presence. English- and Malay-dominant education shapes code-switching and how younger speakers learn formal Tamil." },
      { place: "Indian Ocean and southern Africa", note: "Communities in Mauritius, Réunion, and South Africa grew through distinct colonial labor and mercantile histories. Tamil may be a home, liturgical, heritage, or emblematic language." },
      { place: "Gulf, Europe, North America, and Australasia", note: "Diasporas include migrants from India and Sri Lanka. Community schools, worship, online media, and family calls sustain Tamil alongside new bilingual repertoires." }
    ],
    mapImageAlt: "Major Tamil-speaking regions in South Asia and long-established diaspora centers."
  },
  difficulty: {
    label: "Very demanding",
    overview: "Tamil's challenge is not that every component is irregular. The script is finite, suffixes often reveal their function, and everyday clauses can be short. The workload comes from two interconnected grammatical repertoires, unfamiliar sound contrasts, a largely non-European vocabulary, and socially meaningful variation. Basic exchanges can arrive quickly with a good spoken course; reading editorials, following regional comedy, and appreciating classical allusion are separate projects. Heritage learners may reverse that profile: fluent family conversation can coexist with limited reading or formal vocabulary.",
    easierAspects: [
      "No grammatical gender distinction in first- or second-person pronouns",
      "A learnable script whose vowel-sign patterns repeat across consonants",
      "Suffix sequences make many relationships visible once segmentation becomes automatic",
      "A vast supply of films, songs, interviews, news, literature, and speakers"
    ],
    hardAspects: [
      "A large gap between ordinary speech and formal written forms",
      "Vowel length, consonant length, and dental–retroflex–alveolar contrasts",
      "Stem alternations and sandhi when suffixes attach",
      "Honorific choices and dialect associations not captured by literal translation",
      "Long head-final clauses whose key noun or finite verb arrives late"
    ],
    plateauRisks: [
      "Producing grammatical book Tamil while failing to parse routine colloquial contractions",
      "Using Chennai film speech as if it represented every Indian and Sri Lankan community",
      "Reading through transliteration and never automating Tamil-script word shapes",
      "Collecting literary vocabulary without sustained listening or interaction"
    ],
    workload: cited("Use milestones tied to domains rather than a universal hour ranking. First automate script and a few hundred spoken sentence frames; next pair a structured course with weekly corrected conversation; then add short edited prose and subtitled unscripted media. Discover Discomfort's advice for less-commonly taught languages is useful here: build a stack with one coherent course, a sentence source, a human speaker, regular audio, and somewhere to ask questions. Tamil has more resources than many languages, but they often disagree about register. Label every saved example ‘formal,’ ‘colloquial—region,’ or ‘shared.’", "dd-less-common", "tva", "ashoka-diglossia")
  },
  advancedLearning: {
    strategy: cited("Run two linked tracks. In speech, choose a community model, transcribe short clips, shadow them, and ask a speaker to correct sound and social fit. In literacy, work through a structured sequence, then annotate one short article weekly. Connect the tracks by rewriting formal prose as something your tutor would say, and conversation as edited prose. Follow curiosity into recipes, cricket, essays, devotional music, labor history, computing, or cinema; subject knowledge makes dense suffix chains predictable.", "tva", "dd-less-common", "ut-diglossia"),
    mediaPractice: "Triangulate genres. News teaches formal syntax and public vocabulary but not ordinary conversation. Film supplies memorable dialogue but may exaggerate caste, class, region, or comic persona. Long interviews reveal educated register-shifting; call-in shows and street reporting add interruption and regional voices. Songs distort ordinary word order for meter but make literary imagery memorable. Keep a listening log with speaker origin, genre, and whether captions reproduce the audio or silently normalize it. At advanced level, compare coverage of the same issue from Tamil Nadu, Sri Lankan, Malaysian, and diaspora outlets.",
    dictionariesAndCorpora: cited("The University of Madras Tamil Lexicon is historically indispensable and searchable online, but its English definitions and citations reflect the period of compilation. Pair it with current dictionaries, Tamil Virtual Academy resources, and real usage searches. Project Madurai provides free electronic editions of many classical and modern public-domain texts; editions and encoding quality vary, so check scholarly editions for close quotation. Corpora are best queried by lemma plus likely inflected forms because a single noun or verb generates many surface strings.", "tamil-lexicon", "project-madurai", "tva"),
    resources: [
      { type: "course", title: "Tamil Virtual Academy lessons", url: "https://www.tamilvu.org/en/lessons", level: "all", description: cited("Public lessons in script, language, literature, and culture; pair their formal orientation with spoken audio.", "tva") },
      { type: "course", title: "University of Texas Tamil Script Learner's Manual", url: "https://sites.la.utexas.edu/tamilscript/", level: "beginner", description: cited("Focused script instruction that explicitly relates written and spoken Tamil.", "ut-diglossia") },
      { type: "dictionary", title: "University of Madras Tamil Lexicon", url: "https://dsal.uchicago.edu/dictionaries/tamil-lex/", level: "advanced", description: cited("A historical Tamil–English lexicon with literary citations; check modern register separately.", "tamil-lexicon") },
      { type: "corpus", title: "Project Madurai", url: "https://www.projectmadurai.org/", level: "intermediate", description: cited("A searchable volunteer digital library of Tamil literature; edition quality varies.", "project-madurai") },
      { type: "book", title: "Basic Tamil open textbook", url: "https://openbooks.lib.msu.edu/basictamil/", level: "beginner", description: cited("An open textbook with explicit grammar lessons and practice.", "msu-basic-tamil") },
      { type: "community", title: "A speaker from your target Tamil community", level: "all", description: "Ask a speaker which forms they use, what sounds literary, and where other regions differ." }
    ]
  },
  wordsAndTexts: {
    overview: "Tamil words often carry several histories at once: an inherited Dravidian root, a classical poetic association, an everyday contracted shape, or a political preference among synonyms. Treat dictionary meanings as entrances rather than fences. அகம் akam can mean ‘inside’ or ‘interior,’ but in classical poetics it also names the domain of love and inner life; புறம் puṟam, ‘outside,’ frames public action, war, generosity, and fame. Modern writers continually reuse this old conceptual pair in new contexts.",
    notableWords: [
      { term: "அன்பு", transliteration: "aṉpu", meaning: "love; affection", note: "A broad and productive word appearing in intimate address, ethical prose, names, and formal letter closings. Spoken pronunciation may sound closer to anbu because the stop voices after the nasal." },
      { term: "அறம்", transliteration: "aṟam", meaning: "virtue; ethical rightness", note: cited("Central to ethical and literary discussion, famously associated with the opening division of the Tirukkural. No single English gloss captures duty, virtue, and right conduct in every passage.", "project-madurai") },
      { term: "ஊர்", transliteration: "ūr", meaning: "village; town; home place", note: "More socially textured than a dot on a map: asking ஒரே ஊரா? ‘Are you from the same place?’ can locate kinship, origin, and belonging. The suffix survives in many South Indian place names." },
      { term: "ழ", transliteration: "ḻ", meaning: "the letter/sound ḻ", note: "A sound that has become a cultural emblem, especially because it occurs in தமிழ் tamiḻ. Pride in it is understandable; speakers whose dialect realizes it differently are not speaking defective Tamil." },
      { term: "சங்கம்", transliteration: "caṅkam", meaning: "association; assembly", note: cited("Used for organizations today and conventionally for the ancient poetic corpus. The legendary academy narratives and the scholarly dating of surviving poems are related cultural stories, not identical claims.", "wiki-literature") },
      { term: "உரிமை", transliteration: "urimai", meaning: "right; entitlement; ownership", note: "A key word in civic, political, and personal language: மொழி உரிமை moḻi urimai means ‘language right.’ Context distinguishes a legal right from possession or relational claim." },
      { term: "வணக்கம்", transliteration: "vaṇakkam", meaning: "greetings; salutation", note: "Widely recognized and suitable in many public encounters. Friends often choose time-specific, English-derived, religious, kinship, or more casual greetings instead; frequency is social, not just lexical." }
    ],
    loanwordLayers: cited("Sanskrit loans range from ancient and fully naturalized to conspicuously learned; Tamil alternatives promoted by language reform may now be completely ordinary. Persian and Arabic forms traveled through administration, trade, and Muslim life. Portuguese left words for objects and institutions, while English supplies vast modern layers and code-switched verbs. Borrowing adapts to Tamil phonology and morphology: a loan can take Tamil case and verbalizing material. Sri Lankan Tamil also reflects Sinhala contact, and Southeast Asian varieties reflect Malay and English. Give each word a domain and speaker instead of stamping it ‘pure’ or ‘foreign.’", "upenn", "tamil-lexicon"),
    idioms: [
      { original: "கற்றது கைமண் அளவு, கல்லாதது உலகளவு", transliteration: "kaṟṟatu kaimaṇ aḷavu, kallātatu ulakaḷavu", translation: "What is learned is a handful of sand; what is not learned is the size of the world.", note: "A proverb about intellectual humility, often attributed in popular circulation to Avvaiyar." },
      { original: "காக்கைக்கும் தன் குஞ்சு பொன் குஞ்சு", transliteration: "kākkaikkum taṉ kuñcu poṉ kuñcu", translation: "Even to a crow, its chick is a golden chick.", note: "Affection makes one's own child or creation precious; it can be tender or gently teasing." },
      { original: "ஒரு கை ஓசை எழுப்பாது", transliteration: "oru kai ōcai eḻuppātu", translation: "One hand does not make a sound.", note: "Used when cooperation—or two sides of a dispute—is necessary. Context decides whether it invites teamwork or distributes blame." },
      { original: "அளவுக்கு மீறினால் அமிர்தமும் நஞ்சு", transliteration: "aḷavukku mīṟiṉāl amirtamum nañcu", translation: "Beyond the proper measure, even nectar is poison.", note: "A compact warning that excess can spoil something beneficial." }
    ],
    textGenres: [
      "Sangam akam and puram poetry",
      "ethical couplets, epics, and medieval commentary",
      "Shaiva, Vaishnava, Muslim, Christian, and secular devotional writing",
      "modernist poetry, novels, short stories, and political oratory",
      "film dialogue, song lyrics, comedy, and television serials",
      "news, essays, social media, subtitles, and diaspora writing"
    ]
  },
  relationships: {
    overview: cited("Tamil is one member of a diverse Dravidian family whose languages are spoken mainly in South Asia. Family relationship means descent from earlier shared languages, not that modern speakers can automatically understand one another. Tamil has also lived for centuries beside Indo-Aryan, Dravidian, European, Semitic, and Southeast Asian languages. Contact can create shared words or structures without changing genealogy. The best comparison asks three separate questions: what is inherited, what was borrowed, and what developed independently in parallel.", "glottolog", "wiki-tamil"),
    languages: relatedLanguages
  },
  culturalNotes: "Tamil identities vary. Language movements, minority rights, devotion, cinema, and diaspora schooling carry competing meanings. Avoid reducing Tamil culture to one religion or politics. Dialect judgments can reproduce caste and class hierarchies; lexical preferences may be political or habitual. Ask how a form lands.",
  resources: [
    { type: "course", title: "Tamil Virtual Academy", url: "https://www.tamilvu.org/en/lessons", level: "all", description: cited("Public lessons spanning language and literature.", "tva") },
    { type: "course", title: "UT Austin Tamil Script Learner's Manual", url: "https://sites.la.utexas.edu/tamilscript/", level: "beginner", description: cited("Script instruction attentive to diglossia.", "ut-diglossia") },
    { type: "book", title: "Basic Tamil (Michigan State University)", url: "https://openbooks.lib.msu.edu/basictamil/", level: "beginner", description: cited("An open, sequenced grammar course.", "msu-basic-tamil") },
    { type: "dictionary", title: "University of Madras Tamil Lexicon", url: "https://dsal.uchicago.edu/dictionaries/tamil-lex/", level: "advanced", description: cited("A searchable historical dictionary.", "tamil-lexicon") },
    { type: "corpus", title: "Project Madurai", url: "https://www.projectmadurai.org/", level: "intermediate", description: cited("Free searchable Tamil literary texts.", "project-madurai") },
    { type: "other", title: "Discover Discomfort: less-common language resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A framework for building a balanced study stack.", "dd-less-common") }
  ],
  relatedLanguages,
  phrases: [
    { original: "வணக்கம்", transliteration: "vaṇakkam", translation: "Hello / greetings", usageNote: "Widely useful and polite; not the only greeting used among friends." },
    { original: "நன்றி", transliteration: "naṉṟi", translation: "Thank you", usageNote: "Standard across regions; everyday speakers may also use English ‘thanks.’" },
    { original: "நீங்கள் எப்படி இருக்கிறீர்கள்?", transliteration: "nīṅkaḷ eppaṭi irukkiṟīrkaḷ?", translation: "How are you?", usageNote: "Formal/written. Tamil Nadu colloquial: நீங்க எப்படி இருக்கீங்க? nīnga eppaṭi irukkīnga?" },
    { original: "என் பெயர் மாயா.", transliteration: "eṉ peyar Māyā", translation: "My name is Maya.", literalMeaning: "My name Maya", usageNote: "A simple copula-less present sentence." },
    { original: "எனக்குத் தமிழ் கொஞ்சம் தெரியும்.", transliteration: "eṉakkut tamiḻ koñcam teriyum", translation: "I know a little Tamil.", literalMeaning: "To me, Tamil a little is-known", usageNote: "A natural way to frame knowledge or ability." },
    { original: "எனக்குப் புரியவில்லை.", transliteration: "eṉakkup puriyavillai", translation: "I don't understand.", usageNote: "Formal/shared; colloquial Tamil Nadu often shortens the ending: எனக்குப் புரியல puriyala." },
    { original: "மறுபடியும் சொல்ல முடியுமா?", transliteration: "maṟupaṭiyum colla muṭiyumā?", translation: "Could you say it again?", usageNote: "Polite and widely comprehensible." },
    { original: "இதற்கு என்ன அர்த்தம்?", transliteration: "itaṟku eṉṉa arttam?", translation: "What does this mean?", literalMeaning: "For this, what meaning?" },
    { original: "கொஞ்சம் மெதுவாகப் பேசுங்கள்.", transliteration: "koñcam metuvākap pēcuṅkaḷ", translation: "Please speak a little more slowly.", usageNote: "Polite formal/shared request; spoken endings vary." },
    { original: "எங்கே போகிறீர்கள்?", transliteration: "eṅkē pōkiṟīrkaḷ?", translation: "Where are you going?", usageNote: "Formal. Common Tamil Nadu colloquial: எங்கே போறீங்க? eṅgē pōrīnga?" },
    { original: "எவ்வளவு?", transliteration: "evvaḷavu?", translation: "How much?" },
    { original: "சரி, பார்க்கலாம்.", transliteration: "cari, pārkkalām", translation: "Okay, let's see / we'll see.", usageNote: "Useful but stance depends on intonation; it may be an agreement, postponement, or mild noncommitment." },
    { original: "போயிட்டு வரேன்.", transliteration: "pōyiṭṭu varēṉ", translation: "I'm heading out; see you.", literalMeaning: "I will go and come", usageNote: "Tamil Nadu colloquial leave-taking. Sri Lankan and other varieties use different conventional forms." },
    { original: "உங்களைச் சந்தித்ததில் மகிழ்ச்சி.", transliteration: "uṅkaḷaic cantittatil makiḻcci", translation: "Pleased to meet you.", usageNote: "Formal and suitable for introductions." }
  ],
  sources: [
    { id: "dd-less-common", title: "Best Less-Common Language Learning Resources: What Actually Works", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", accessedAt: "2026-07-10" },
    { id: "wiki-tamil", title: "Tamil language", url: "https://en.wikipedia.org/wiki/Tamil_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-literature", title: "Tamil literature", url: "https://en.wikipedia.org/wiki/Tamil_literature", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "tva", title: "Tamil Virtual Academy lessons", url: "https://www.tamilvu.org/en/lessons", publisher: "Tamil Virtual Academy, Government of Tamil Nadu", accessedAt: "2026-07-10" },
    { id: "unicode", title: "The Unicode Standard, Version 17.0: Tamil", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/", publisher: "Unicode Consortium", publishedAt: "2025", accessedAt: "2026-07-10" },
    { id: "upenn", title: "Tamil Language and Literature", url: "https://www.southasia.upenn.edu/languages/explore-languages/tamil-language-and-literature", publisher: "University of Pennsylvania South Asia Studies", accessedAt: "2026-07-10" },
    { id: "ashoka-diglossia", title: "The Diglossic Beauty of Tamil", url: "https://www.ashoka.edu.in/courses/cla-0037-the-diglossic-beauty-of-tamil/", publisher: "Ashoka University", accessedAt: "2026-07-10" },
    { id: "ut-diglossia", title: "Tamil Script Learners Manual: Tamil Diglossia", url: "https://sites.la.utexas.edu/tamilscript/tamil-diglossia/190", publisher: "University of Texas at Austin", accessedAt: "2026-07-10" },
    { id: "openlearn-script", title: "Beginners' Tamil: Tamil script", url: "https://www.open.edu/openlearn/languages/beginners-tamil-taster-course/content-section-2", publisher: "The Open University", accessedAt: "2026-07-10" },
    { id: "msu-basic-tamil", title: "Basic Tamil", url: "https://openbooks.lib.msu.edu/basictamil/", publisher: "Michigan State University Libraries", accessedAt: "2026-07-10" },
    { id: "india-classical", title: "Classical Languages and Census 2011 speaker figures", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2222111", publisher: "Press Information Bureau, Government of India", publishedAt: "2026", accessedAt: "2026-07-10" },
    { id: "sri-lanka-census", title: "Census of Population and Housing 2024: Final Report", url: "https://www.statistics.gov.lk/Resource/en/Population/CPH_2024/CPH2024_Final_Eng.pdf", publisher: "Department of Census and Statistics, Sri Lanka", publishedAt: "2026", accessedAt: "2026-07-10" },
    { id: "sri-lanka-olc", title: "Official Languages and Language Rights", url: "https://olc.gov.lk/en/home/", publisher: "Official Languages Commission of Sri Lanka", accessedAt: "2026-07-10" },
    { id: "glottolog", title: "Tamil language classification", url: "https://glottolog.org/resource/languoid/id/tami1289", publisher: "Glottolog", accessedAt: "2026-07-10" },
    { id: "tamil-lexicon", title: "University of Madras Tamil Lexicon", url: "https://dsal.uchicago.edu/dictionaries/tamil-lex/", publisher: "Digital South Asia Library, University of Chicago", accessedAt: "2026-07-10" },
    { id: "project-madurai", title: "Project Madurai: Tamil Electronic Texts", url: "https://www.projectmadurai.org/", publisher: "Project Madurai", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Tamil Language Guide: Spoken Tamil, Script, Grammar and Literature",
    description: "A source-backed, reader-focused guide to Tamil pronunciation, script, spoken–written diglossia, grammar, regional varieties, communities, literature, phrases, and learning resources."
  }
} satisfies LanguageGuide;
