import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Malaysian Malay",
    relationship: "Sibling national standard within the wider Malay language world",
    explanation: cited(
      "Indonesian and Malaysian Malay grew from closely related Malay bases and remain substantially intelligible in careful formal use. They are neither carbon copies nor cleanly separated natural species: education, national institutions, local languages, media, and different loanword histories have pushed vocabulary and everyday style apart. Treat the relationship as pluricentric—one broad language tradition with national standards and many local Malay varieties—while respecting the names speakers use.",
      "mabbim",
      "wiki-indonesian"
    )
  },
  {
    name: "Javanese",
    relationship: "Fellow Austronesian language and Indonesia's largest regional-language influence",
    explanation: cited(
      "Javanese is not an ancestor or dialect of Indonesian. It is a separate Austronesian language with its own speech-level system and literature. Long bilingual contact has contributed vocabulary, particles, address practices, and conversational habits to Indonesian, especially on Java, while Indonesian increasingly enters Javanese-speaking homes, schools, and media.",
      "bps-languages",
      "wiki-indonesian"
    )
  },
  {
    name: "Sundanese",
    relationship: "Regional Austronesian neighbor and contact language",
    explanation: cited(
      "Sundanese is another separate language, centered in western Java. A Bandung conversation can combine Indonesian structure with Sundanese address words, intonation, and local vocabulary. This is a useful reminder that 'colloquial Indonesian' has regional forms rather than being Jakarta slang reproduced everywhere unchanged.",
      "bps-languages",
      "ui-colloquial"
    )
  },
  {
    name: "Tagalog",
    slug: "tagalog",
    relationship: "More distant Western Malayo-Polynesian relative",
    explanation: cited(
      "Tagalog and Indonesian share Austronesian ancestry and occasionally reveal satisfying cognates, but centuries of independent development make them mutually unintelligible. Comparing their voice systems can be illuminating for linguists; a beginner should not expect Indonesian vocabulary to unlock a Tagalog conversation.",
      "glottolog-indonesian"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const indonesianGuide = {
  slug: "indonesian",
  name: "Indonesian",
  autonym: "Bahasa Indonesia",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Indonesian is a deliberately shared national language built on Malay, spoken through hundreds of local accents and language histories, and transformed every day between official prose, regional conversation, pop culture, and social media.",
  family: "Austronesian, Malayo-Polynesian, Malayic",
  macroRegion: "Indonesia and maritime Southeast Asia",
  primaryScript: "Latin",
  difficultyLabel: "Moderate",
  learnerHook: "Indonesian lets a learner begin real conversations early, then keeps opening deeper questions: how a root changes through affixes, why a newsreader and a Jakarta friend sound so different, and how one common language works inside one of the world's most multilingual societies.",
  hero: {
    imageAlt: "Printed and handwritten Indonesian representing formal and everyday language across the archipelago.",
    callToActionLabel: "Explore Indonesian in use"
  },
  classification: "A standardized Malayic national language within the Austronesian family",
  speakerCommunity: "Indonesian is the national language and overwhelmingly widespread common language of Indonesia, but for many citizens it is not the only language or the first language learned at home. People may use Javanese, Sundanese, Balinese, Minangkabau, Acehnese, Bugis, a Papuan language, a local Malay variety, or another community language with relatives, then Indonesian at school, work, online, or across ethnic and regional boundaries. Urban children increasingly grow up with Indonesian as a first language, often in a locally colored form. The result is not one neutral accent floating above the country: it is a shared language continually shaped by multilingual speakers.",
  facts: [
    { label: "Family", value: "Austronesian · Malayo-Polynesian · Malayic" },
    { label: "Constitutional role", value: "National and official language of Indonesia" },
    { label: "National declaration", value: "Named the language of unity in the 1928 Youth Pledge" },
    { label: "Script", value: "Latin alphabet under EYD V spelling guidance" },
    { label: "Use", value: "First language for many urban speakers; additional language for many multilingual Indonesians" },
    { label: "Close standards", value: "Malaysian, Bruneian, and Singaporean standards of Malay" }
  ],
  learnerOverview: "Early Indonesian is unusually welcoming to an English-speaking learner: familiar letters, no grammatical gender, no case endings, and no verb forms that change for I, you, or they. Saya makan can mean “I eat,” “I am eating,” or—with a time phrase—“I ate.” That accessibility is real, but descriptions of Indonesian as grammar-free are not. A small root such as tulis “write” participates in menulis “to write,” ditulis “be written,” penulis “writer,” tulisan “writing,” and menuliskan “write something for/on behalf of.” Everyday speech may then shorten or replace standard forms. Learn the clean standard because it unlocks education, journalism, books, and cross-regional communication; at the same time, collect the relaxed speech of actual people. Label examples formal, neutral, Jakarta-colloquial, or regional. The goal is not to perform maximum slang. It is to choose language that fits a teacher, colleague, market vendor, close friend, or public audience without sounding like a government circular at dinner.",
  origins: {
    overview: cited(
      "Indonesian is a modern national standard with an old linguistic foundation. Malayic varieties were used for trade, diplomacy, religion, and intercommunity exchange around maritime Southeast Asia long before the Republic of Indonesia existed. Inscriptions show early written Malay; later courts, ports, Islamic scholarship, and print networks carried changing forms across islands. Dutch colonial administration used Malay in uneven ways, while schools, newspapers, organizations, and writers turned it into a medium of modern public argument. Nationalists chose the name bahasa Indonesia, not because Malay belonged nowhere, but because a common language needed to belong politically to a future Indonesian public. The choice also avoided making numerically dominant Javanese the sole national norm. This history should not be reduced to a language invented in 1945: the standardized name and institutions are twentieth-century, while the Malayic grammar, vocabulary, texts, and speech networks are much older.",
      "wiki-indonesian",
      "glottolog-indonesian",
      "youth-pledge"
    ),
    timeline: [
      {
        period: "7th century onward",
        event: cited("Old Malay inscriptions associated with Srivijaya demonstrate an early written and administrative role. Later Malay varieties circulated through ports and courts; there was never one frozen ancestral standard spoken identically across the archipelago.", "wiki-indonesian")
      },
      {
        period: "16th–19th centuries",
        event: cited("Trade, Islamic learning, European colonialism, and printing expanded Malay's domains. Portuguese and Dutch contact left vocabulary, while Arabic and Persian learning and older Sanskrit prestige had already contributed important layers.", "wiki-indonesian")
      },
      {
        period: "28 October 1928",
        event: cited("Delegates at the Second Youth Congress pledged one homeland, one nation, and one language of unity: Indonesian. The official museum history emphasizes that young people from varied regional, ethnic, and religious backgrounds formulated this political commitment before independence.", "youth-pledge")
      },
      {
        period: "1945 and the early republic",
        event: cited("Article 36 of the Constitution established Indonesian as the state language. Mass schooling, administration, radio, publishing, internal migration, and later television spread practical command far beyond the smaller population that had used it as a home language.", "glottolog-indonesian", "wiki-indonesian")
      },
      {
        period: "1972 to the present",
        event: cited("Coordinated spelling reform aligned several Indonesian and Malaysian conventions, while national vocabulary continued to diverge. Indonesia's current EYD fifth edition, issued in 2022, updates punctuation, capitalization, loanword, and word-formation guidance for contemporary use.", "eyd-v", "mabbim")
      }
    ],
    contactHistory: cited(
      "Indonesian vocabulary is a map of mobility rather than a purity test. Sanskrit supplied terms associated with early religion, politics, and literature; Arabic contributed widely through Islam; Portuguese words often entered material and domestic life; Dutch left a large administrative, educational, legal, and technical layer; Hokkien and other Chinese varieties influenced commerce and food vocabulary; English is prominent in technology and global culture. Regional Indonesian languages contribute continuously too. Loanwords are remade through Indonesian sound and spelling: Dutch kantoor became kantor “office,” Portuguese mesa became meja “table,” and Arabic mumkin appears as mungkin “perhaps.” Etymology is interesting, but present usage matters more than origin.",
      "wiki-indonesian",
      "kbbi"
    ),
    standardization: cited(
      "Badan Bahasa codifies spelling and maintains KBBI, the major official monolingual dictionary. KBBI is updated twice yearly and accepts evidence-driven public proposals; EYD V explicitly responds to language change rather than pretending it can stop it. Regional cooperation also matters: MABBIM joins the language authorities of Indonesia, Malaysia, and Brunei around terminology and development of Indonesian/Malay. A standard is therefore a maintained public convention, not proof that casual forms such as nggak “not” or the Jakarta suffix -in are mistakes in every setting. Good Indonesian—bahasa Indonesia yang baik—fits its situation; correct standard Indonesian—yang benar—follows codified norms where those norms are expected.",
      "kbbi",
      "eyd-v",
      "mabbim"
    )
  },
  variants: {
    overview: cited(
      "The gap a learner hears is partly register and partly region. Standard Indonesian is relatively uniform in edited writing and prepared public speech. Conversation is more varied: speakers reduce affixes, choose local pronouns and particles, borrow from another home language, and use different melodies. Colloquial Jakarta Indonesian has exceptional national visibility through broadcasting, film, music, celebrity culture, and online media, but it is not the private speech of every Indonesian. Universitas Indonesia research describes it as the most influential colloquial variety, not the only one. Learn to recognize its common features while asking where a speaker grew up and what other languages shape their Indonesian.",
      "ui-colloquial",
      "wiki-indonesian"
    ),
    items: [
      { name: "Formal Standard Indonesian", note: cited("Used in legislation, academic prose, official documents, much news writing, and prepared speeches. It favors full affixes, explicit linking, and codified vocabulary; spoken delivery still carries a regional accent.", "eyd-v") },
      { name: "Neutral educated conversation", note: cited("A practical learner target between ceremonial prose and intimate slang. Speakers omit what context supplies, mix standard and colloquial morphology, and choose broadly understood words without sounding as if they are reading an essay.", "uh-indonesian") },
      { name: "Colloquial Jakarta Indonesian", note: cited("Influenced historically by Betawi and subsequent urban contact, it features forms such as nggak “not,” udah “already,” gue “I,” lu “you,” and verbal -in. These forms carry relationships and personas; copying all of them with strangers can be socially off-key.", "ui-colloquial") },
      { name: "Regional Indonesian", note: cited("Medan, Bandung, Yogyakarta, Makassar, Manado, Ambon, Papua, and other places have recognizable vocabulary, rhythm, and grammatical preferences influenced by local languages and migration. Some areas also use regional Malay varieties that should not be flattened into 'accented standard Indonesian.'", "bps-languages", "glottolog-indonesian") },
      { name: "Indonesian–Malay cross-border use", note: cited("Formal texts are often accessible across Indonesia, Malaysia, Brunei, and Singapore, but everyday vocabulary can surprise: Indonesian mobil is commonly Malaysian kereta “car,” while Indonesian kantor contrasts with Malaysian pejabat “office.” Accommodation is normal and usually more useful than arguing over which word is authentic.", "mabbim") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Indonesian spelling offers a reliable path into pronunciation, but not a perfect one-letter machine. Five vowel letters represent a system in which e can be schwa /ə/ or a mid front vowel /e, ɛ/; dictionaries may distinguish these for learners even though ordinary spelling does not. Most consonants are familiar, but c is always like English ch, j is like English j, and ng represents the final sound of sing even at the beginning of ngantuk “sleepy.” R is commonly tapped or trilled. Regional accents may merge or shift vowels, alter final sounds, and give words different rhythm. Choose a clear model without treating other Indonesian accents as deficient.",
      "wiki-indonesian",
      "dd-choosing"
    ),
    script: "Latin alphabet; examples follow current standard spelling",
    soundSystem: cited(
      "Learners should train whole contrasts rather than trust English reading habits. The pair apel /apəl/ “roll call” and apel /apel/ “apple” shows why written e sometimes needs dictionary or audio confirmation. C in cari “look for” is /tʃ/, never /k/; g in pergi “go” remains hard; sy in syarat “condition” approximates English sh; kh in akhir “end” is a back fricative in careful speech. Prefixes also react to roots: meN- plus tulis yields menulis, while meN- plus baca yields membaca. These changes are morphology, not casual mispronunciation, and hearing the root inside them is a major listening skill.",
      "kbbi",
      "uh-indonesian"
    ),
    prosody: cited(
      "Word stress in Indonesian is less lexically dramatic than in English and varies by region and analysis, so exaggerated textbook rules can mislead. Phrase-level intonation carries questions, contrast, politeness, disbelief, and whether a speaker has finished. Colloquial speech compresses frequent items—sudah to udah, tidak to tak or nggak, bagaimana to gimana—and links words into quick rhythmic groups. Shadowing a newsreader helps with clear formal articulation; shadowing interviews and dramas teaches turn-taking and reductions. Keep these as two listening tracks instead of expecting one recording style to represent the country.",
      "ui-colloquial",
      "bipa"
    ),
    learnerTraps: [
      "Reading c as /k/ or /s/ instead of the ch sound /tʃ/",
      "Giving every written e the same vowel without checking audio or a dictionary",
      "Using English /r/ instead of learning a light Indonesian tap or trill",
      "Dropping initial ng in words such as ngerti or ngantuk because English rarely begins words that way",
      "Pronouncing careful written forms perfectly but failing to recognize common reductions such as sudah → udah"
    ],
    sampleWords: [
      { original: "cari", transliteration: "cha-ree", translation: "look for; seek", note: "C is consistently the sound in English church, and final i is a clear vowel." },
      { original: "jalan", transliteration: "jah-lahn", translation: "road; walk", note: "Keep both a vowels open and the j voiced; jalan-jalan means going out or strolling, not simply two roads." },
      { original: "ngantuk", transliteration: "ngahn-took", translation: "sleepy", note: "Begin directly with /ŋ/, the sound at the end of English sing." },
      { original: "apel", transliteration: "ah-puhl", translation: "roll call; assembly", note: "Here e is normally schwa; compare apel “apple,” usually pronounced with /e/." },
      { original: "syukur", transliteration: "shoo-koor", translation: "gratitude; thankfulness", note: "Sy is approximately sh, while each u remains audible." },
      { original: "akhir", transliteration: "ah-kheer", translation: "end; final", note: "Careful kh is made farther back than English h, though realizations vary." }
    ]
  },
  writing: {
    overview: cited(
      "Modern Indonesian uses the Latin alphabet and current EYD V conventions. Earlier texts look different because spelling reforms replaced Dutch-influenced oe with u, tj with c, dj with j, j with y, and several other sequences. Thus Soekarno and Sukarno can name the same president, with the older spelling retained in his preferred name. Contemporary digital writing is lively: people shorten yang to yg, sudah to udh, repeat a word with the numeral 2, and mix English or regional-language material. Those practices belong to informal channels; they do not replace editorial spelling.",
      "eyd-v",
      "wiki-indonesian"
    ),
    primaryScript: "Latin alphabet under Ejaan Bahasa Indonesia yang Disempurnakan (EYD V)",
    romanization: cited("Indonesian already uses Latin letters, so learners need pronunciation guidance rather than a separate romanization. Approximate English respellings quickly become harmful; use standard Indonesian spelling and audio from the start.", "eyd-v"),
    spellingNorms: cited(
      "Spaces and affixes encode grammar. The passive prefix di- attaches to a verb—ditulis “written”—but the preposition di remains separate—di Jakarta “in Jakarta.” Reduplicated words normally take a hyphen, as in buku-buku, while compounds and derived forms follow more detailed rules. Capitalization is less expansive than English: language and nationality adjectives are normally lower-case in running Indonesian, as in bahasa Indonesia. KBBI confirms headwords; EYD answers punctuation and spelling questions.",
      "eyd-v",
      "kbbi"
    ),
    styleNotes: [
      cited("Learn di- versus di as meaning, not typography: attached di- marks a patient-oriented verb, while separate di locates something.", "eyd-v"),
      cited("Expect historical spellings in names and archives; do not silently modernize a person's chosen spelling.", "wiki-indonesian"),
      cited("Treat chat abbreviations as register-specific. Reading yg is useful, but writing it in an application letter signals the wrong genre.", "eyd-v")
    ]
  },
  grammar: {
    overview: cited(
      "Indonesian does not conjugate verbs for person, number, or tense, and nouns lack grammatical gender and obligatory case marking. Meaning instead accumulates through word order, time expressions, aspect words, voice, productive affixes, reduplication, particles, and context. This makes the first sentence easy and the hundredth subtle. The same root can become several word classes, and the choice between an actor-oriented and patient-oriented clause often reflects what the conversation is about. Informal varieties simplify some standard morphology but add their own regular patterns. Grammar is therefore not absent; it is distributed differently from familiar European paradigms.",
      "wiki-indonesian",
      "uh-indonesian"
    ),
    typologicalProfile: cited(
      "Basic clauses commonly follow subject–verb–object order, modifiers usually follow nouns, and relative clauses use yang. Indonesian is often described as analytic because separate words carry much grammatical work, yet its derivational morphology is rich. Voice is especially central: an event can be framed around an actor or patient without merely copying English active/passive preferences. Pronouns and particles encode social distance, stance, and regional identity more than verb endings do.",
      "wiki-indonesian",
      "indra-grammar"
    ),
    morphology: cited(
      "Affix families are best learned as contrasts around a root. From ajar “teach/learn” come belajar “study,” mengajar “teach,” pelajar “student,” pelajaran “lesson,” and pembelajaran “learning process.” The nasal in meN- changes according to the first sound of a root, sometimes replacing it: tulis → menulis, sapu → menyapu, kirim → mengirim, baca → membaca. Suffixes -kan and -i alter argument structure and nuance; nominal prefixes peN- and per- and circumfixes such as ke-...-an create people, processes, states, and abstractions. Memorizing a single English gloss for each affix fails. Save whole clauses that show who does what to whom.",
      "indra-grammar",
      "kbbi"
    ),
    syntax: cited(
      "Time is normally established by context or adverbs: kemarin “yesterday,” sedang “in progress,” sudah “already/completed,” belum “not yet,” akan “will/intend,” and masih “still.” Noun phrases place most descriptions after the noun: rumah besar “big house,” rumah saya “my house,” rumah yang besar itu “that big house.” Subjects, objects, and pronouns disappear when recoverable, especially in conversation. A grammatical translation may therefore sound unnecessarily heavy if it repeats saya in every sentence. Natural control comes from tracking the shared topic, not deleting words at random.",
      "wiki-indonesian",
      "bipa"
    ),
    advancedPainPoints: [
      "Choosing actor voice, di- passive, or pronoun-led patient voice according to discourse rather than English form",
      "Understanding how -kan and -i redistribute meanings and participants across different roots",
      "Recognizing meN- roots automatically after nasal assimilation or deletion",
      "Moving between full standard affixes and regional colloquial forms without producing an accidental hybrid",
      "Selecting pronouns, kin terms, titles, and particles that fit age, intimacy, hierarchy, and region"
    ],
    topics: [
      {
        title: "Time without tense conjugation",
        body: cited("The verb itself can stay unchanged while a time expression or aspect marker supplies the frame. Sudah usually presents something as achieved or relevantly complete; sedang zooms in on an ongoing action; belum means “not yet” and keeps a future possibility open. Do not force one English tense onto each marker.", "bipa"),
        example: "Saya sudah makan, tetapi dia belum makan.",
        exampleTranslation: "I have eaten, but they have not eaten yet."
      },
      {
        title: "Actor voice with meN-",
        body: cited("Actor-voice clauses make the actor a prominent subject and commonly mark a transitive verb with meN-. The prefix changes shape around the root. In ordinary speech it may be reduced, but the standard form remains essential for reading and formal production.", "indra-grammar"),
        example: "Rina menulis surat itu tadi malam.",
        exampleTranslation: "Rina wrote that letter last night."
      },
      {
        title: "Two useful patient-oriented patterns",
        body: cited("With a third-person actor, di- commonly marks the verb and the actor may follow with oleh. With a first- or second-person actor, a pronoun can stand directly before the bare verb. The latter is often called passive type two; separating the pronoun from its verb with extra material can be ungrammatical in the standard pattern.", "indra-grammar", "wiki-indonesian"),
        example: "Surat itu ditulis Rina; surat ini saya tulis.",
        exampleTranslation: "That letter was written by Rina; this letter was written by me / I wrote this letter."
      },
      {
        title: "-kan and -i change the scene",
        body: cited("These suffixes are not simple translations. -kan often makes something causative or adds a beneficiary/theme, while -i often highlights a location, repeated application, or recipient, depending on the root. Compare membelikan adik buku “buy a book for a younger sibling” with membeli buku “buy a book.”", "indra-grammar", "kbbi"),
        example: "Tolong bukakan pintu untuk saya.",
        exampleTranslation: "Please open the door for me."
      },
      {
        title: "Reduplication is more than plural",
        body: cited("Full repetition can express plurality or variety when number is relevant, but Indonesian nouns do not require plural marking. It can also build lexical meanings: jalan-jalan “go for a stroll,” sayur-mayur “assorted vegetables,” and hati-hati “be careful.” After a numeral, *tiga buku-buku is normally redundant for “three books.”", "wiki-indonesian", "kbbi"),
        example: "Anak-anak sedang bermain; saya mau jalan-jalan.",
        exampleTranslation: "The children are playing; I want to go out for a stroll."
      },
      {
        title: "Pronouns are social choices",
        body: cited("Saya is broadly polite or neutral; aku is intimate or personal in many settings; gue is strongly associated with Jakarta-style informality. Kamu can be friendly but too direct toward some strangers or elders. Indonesians often use names, titles, and kin terms such as Bapak, Ibu, Kak, and Mas instead of English-style you. Ask what people call one another before optimizing for brevity.", "ui-colloquial", "bipa"),
        example: "Ibu mau pesan apa? — Saya mau teh saja.",
        exampleTranslation: "What would you like to order, ma'am? — Just tea for me."
      },
      {
        title: "Particles make conversation human",
        body: cited("Small words such as kok, dong, sih, deh, kan, and nih communicate assumptions, insistence, softening, shared knowledge, or surprise. Their force depends on intonation and relationship, so dictionary glosses are crude. Begin by recognizing them in repeated scenes; add one to your own speech only after hearing who uses it to whom.", "ui-colloquial"),
        example: "Coba dulu, dong—enak, kok!",
        exampleTranslation: "Come on, just try it—it really is tasty!"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Indonesian links an archipelago where hundreds of languages remain in use. BPS's Long Form 2020 census publications profile which languages people first acquired and which regional languages they use with family and community. Those data make two points visible at once: Indonesian has extraordinary reach, and local multilingualism remains central. It also has important communities in neighboring Timor-Leste, in the Netherlands and Australia, among students and workers abroad, and online. Outside Indonesia, speakers may call it Indonesian to distinguish it from Malay, while the phrase Bahasa alone simply means “language” and is incomplete in Indonesian.",
      "bps-languages",
      "glottolog-indonesian"
    ),
    regions: [
      { place: "Java and major cities", note: cited("Indonesian is increasingly a home language in urban and mixed-family settings, while Javanese, Sundanese, Betawi, and many migrant languages shape local speech. Jakarta media are influential but not a demographic substitute for the whole island.", "bps-languages", "ui-colloquial") },
      { place: "Sumatra and the Riau Islands", note: cited("The region contains diverse Malayic varieties as well as Acehnese, Batak languages, Minangkabau, and others. Indonesian may sit especially close to local Malay speech here, yet local identity and vocabulary remain distinct.", "glottolog-indonesian") },
      { place: "Kalimantan, Sulawesi, Maluku, Papua, Bali, and Nusa Tenggara", note: cited("Indonesian often bridges communities with very different first languages. Regional Malay varieties, trade histories, schooling, and local grammatical patterns give Indonesian recognizable eastern and island-specific forms.", "bps-languages", "glottolog-indonesian") },
      { place: "Timor-Leste and neighboring Southeast Asia", note: cited("Indonesian remains widely understood in Timor-Leste through recent history, media, education, and cross-border contact. In Malaysia, Brunei, and Singapore, related Malay standards support communication while requiring vocabulary adjustment.", "mabbim") },
      { place: "Global diaspora and classrooms", note: cited("Indonesian is maintained among families, students, researchers, workers, and cultural communities abroad. BIPA programs and university courses treat it as a foreign language while connecting learners to contemporary Indonesian voices.", "bipa", "uh-indonesian") }
    ]
  },
  difficulty: {
    label: "Moderate",
    overview: cited(
      "Indonesian is beginner-friendly without being shallow. A learner can order food and describe a day without verb tables, gender agreement, or a new script. That fast start creates a particular plateau: textbook sentences remain clear while friends seem to remove prefixes, swap pronouns, and finish thoughts through particles and context. Advanced reading introduces dense nominalizations and institutional vocabulary; accurate writing demands affix and spelling control. The fairest assessment is therefore a gentle entry followed by a long register-and-morphology climb, not “the world's easiest language.” Discover Discomfort likewise treats pronunciation and limited inflection as advantages while warning that every learner's motivation, vocabulary distance, and exposure change the calculation.",
      "dd-choosing",
      "uh-indonesian"
    ),
    easierAspects: [
      "A familiar Latin alphabet and relatively systematic modern spelling",
      "No grammatical gender or person-based verb conjugation",
      "Time can be expressed transparently with adverbs and aspect words",
      "Basic word order supports useful sentences early",
      "Large communities of speakers and abundant contemporary media"
    ],
    hardAspects: [
      "Separating a root from productive, sound-changing affixes in fast listening",
      "Choosing voice and -kan/-i constructions for Indonesian discourse rather than English translation",
      "Understanding regional and colloquial speech after standard-only study",
      "Using pronouns, titles, kin terms, and particles with appropriate social meaning",
      "Reading formal prose packed with nominalizations and long noun phrases"
    ],
    plateauRisks: [
      "Assuming easy beginner grammar means affixes are optional decoration",
      "Speaking only careful textbook Indonesian and avoiding unscripted audio",
      "Copying Jakarta slang indiscriminately in regions or relationships where it sounds performative",
      "Recognizing many roots but failing to learn their common derived families",
      "Using English subtitles so heavily that Indonesian word boundaries never become automatic"
    ],
    workload: cited(
      "A balanced week can include three structured grammar sessions, several ten-minute listening loops, one conversation, and one short edited text. Build a root-family notebook: one page for lihat, melihat, dilihat, terlihat, kelihatan, and penglihatan is more valuable than six disconnected flashcards. Every week compare a formal item—a news report, BIPA unit, or essay—with a casual interview on the same topic. Discover Discomfort's 80–20 advice is useful at the start: master high-frequency words through many sentences. Indonesian morphology then multiplies what those roots can do.",
      "dd-8020",
      "bipa"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Use a two-register curriculum from the first month. Let standard Indonesian provide spelling, affixes, and broadly portable sentences; let one real community provide natural conversation. Ask a tutor to mark each correction F for formal, N for neutral, C for colloquial, and R for regional. Later, retell the same story as a voice note to a friend and as a 200-word news-style report. This exposes false equivalences better than another fill-in-the-blank page. Discover Discomfort recommends mastering bread-and-butter structures and beginning conversation early; for Indonesian, that should include repair questions such as Maksudnya apa? “What do you mean?” and Yang biasa orang bilang apa? “What do people normally say?”",
      "dd-how-learn",
      "bipa"
    ),
    mediaPractice: cited(
      "Rotate through clean and messy audio. News and documentaries train standard vocabulary; films, comedy, podcasts, livestreams, and street interviews reveal reductions and particles. Work deeply with one minute: transcribe it, compare subtitles, restore any omitted elements, label colloquial forms, then shadow the speaker. Indonesian subtitles often paraphrase rather than reproduce speech, so the mismatch is evidence, not a nuisance. Follow creators outside Jakarta and record region, age, setting, and topic with each clip.",
      "ui-colloquial",
      "dd-how-learn"
    ),
    dictionariesAndCorpora: cited(
      "KBBI should become the anchor for definitions, standard headwords, usage labels, and derived forms; its Indonesian definitions also train reading. EYD answers spelling questions. The Leipzig Indonesian corpus helps test collocations and frequency in real text, but its material and date need checking, and a recent reclassification study warns that Malay and Indonesian web corpora can be mislabeled. Search several sources, inspect complete sentences, and ask a speaker whether the result is written, conversational, regional, or dated.",
      "kbbi",
      "eyd-v",
      "leipzig-corpus",
      "corpus-reclassification"
    ),
    resources: [
      { type: "course", title: "BIPA Daring", url: "https://bipa.kemendikdasmen.go.id/belajar_eng", level: "all", description: cited("The Indonesian government's portal for Indonesian as a foreign language, with staged Sahabatku Indonesia materials, supporting resources, exercises, broadcasts, and tutorial videos.", "bipa") },
      { type: "dictionary", title: "KBBI VI Daring", url: "https://kbbi.kemendikdasmen.go.id/", level: "intermediate", description: cited("The official, actively updated Indonesian monolingual dictionary. Use it for standard forms, derivations, definitions, and labels rather than demanding a one-word English equivalent.", "kbbi") },
      { type: "course", title: "University of Hawaiʻi Indonesian Program and The Indonesian Way", url: "https://manoa.hawaii.edu/ipll/language-programs/indonesian/index.php", level: "beginner", description: cited("A university program built around interactive Indonesian materials and a long sequence from elementary language through structure, history, conversation, and literature.", "uh-indonesian") },
      { type: "corpus", title: "Leipzig Corpora Collection: Indonesian", url: "https://corpora.uni-leipzig.de/en?corpusId=ind_mixed_2013", level: "advanced", description: cited("A searchable collection for checking surrounding words and sentence patterns. Treat genre, date, and possible Indonesian–Malay classification noise as part of the evidence.", "leipzig-corpus", "corpus-reclassification") },
      { type: "other", title: "Discover Discomfort: How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", level: "all", description: cited("A practical framework for pronunciation, conversation, high-frequency structures, recording yourself, and building language around daily life. Apply it with explicit Indonesian register labels.", "dd-how-learn") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Indonesian words often become memorable because their everyday use exceeds a dictionary gloss. Bisa means “can” but also “venom” as a different lexical item; sayang can be affection, pity, or a tender form of address; lumayan evaluates something as reasonably good, more than expected, or at least not bad. Affixes make words feel like narratives: merdeka “free/independent,” kemerdekaan “independence”; beda “different,” membedakan “distinguish,” perbedaan “difference.” Learn these in dialogue and public culture. A political slogan, a dangdut lyric, a literary short story, and a group chat may draw on the same root with very different emotional weight.",
      "kbbi",
      "leipzig-corpus"
    ),
    notableWords: [
      { term: "gotong royong", meaning: "mutual cooperation", note: cited("A public ideal of shared work often invoked for neighborhood projects, civic life, and national values. Its use can describe genuine reciprocity or serve as aspirational political language, so context matters.", "kbbi") },
      { term: "merantau", meaning: "leave one's home region to seek experience or livelihood", note: cited("Especially associated with Minangkabau social history but widely intelligible in Indonesian. It carries more cultural texture than generic pergi “go.”", "kbbi") },
      { term: "nongkrong", meaning: "hang out; spend time casually", note: cited("A colloquial staple for unstructured social time at a café, roadside stall, campus, or online. It is natural in conversation but usually replaced in formal prose.", "kbbi", "ui-colloquial") },
      { term: "mudik", meaning: "return to one's home area, especially for a major holiday", note: cited("Prominent in annual reporting around Lebaran, when millions travel from cities toward family homes. The word links personal reunion to transport, labor, and urbanization.", "kbbi") },
      { term: "sayang", meaning: "affection; dear; what a pity", note: cited("Intonation and syntax decide whether it names love, addresses someone tenderly, or introduces regret: Sayang sekali means “What a shame.”", "kbbi") },
      { term: "lumayan", meaning: "fairly good; not bad; a decent amount", note: cited("A useful conversational evaluator whose tone ranges from modest approval to pleasant surprise. Lumayan mahal can mean “rather expensive,” showing that the word is not always praise.", "kbbi") },
      { term: "jam karet", meaning: "rubber time; flexible lateness", note: cited("A humorous, sometimes critical expression for schedules that stretch. Avoid treating it as an essential national trait; punctuality varies by institution, city, person, and stakes.", "kbbi") }
    ],
    loanwordLayers: cited(
      "Loanword pairs reveal competing histories. kantor “office,” kualitas “quality,” and universitas reflect European contact; kitab “book,” kabar “news,” and selamat “safe/greetings” have Arabic histories; raja “king,” bahasa “language,” and pustaka “book/literature” came through Sanskrit; meja “table” and gereja “church” reflect Portuguese; bakmi and related food words connect Chinese-Indonesian histories. English now supplies digital terms, but official coinages and spontaneous adaptations coexist: unggah and unduh compete with upload and download. Regional sources matter equally. Borrowing is not a modern failure of standard Indonesian—it is one of the processes from which Indonesian was made.",
      "wiki-indonesian",
      "kbbi"
    ),
    idioms: [
      { original: "besar kepala", translation: "arrogant; conceited", note: "Literally “big-headed”; used of someone whose pride has become excessive, not simply someone physically important." },
      { original: "kambing hitam", translation: "scapegoat", note: "Literally “black goat.” Common in news and conversation: mengambinghitamkan means to make someone the scapegoat." },
      { original: "buah tangan", translation: "a gift or souvenir brought back from a trip", note: "Literally “fruit of the hand”; often something brought for family, friends, or colleagues after traveling." },
      { original: "panjang tangan", translation: "thievish; prone to stealing", note: "Literally “long-handed.” It is a negative description of a person, not the neutral ability to reach something." },
      { original: "air tenang menghanyutkan", translation: "A quiet person may have hidden depth or power.", note: "Literally “still water can carry things away”; a proverb warning against underestimating someone because they are quiet." }
    ],
    textGenres: [
      "Pantun and other Malay-derived oral and written verse traditions",
      "Modern novels, short stories, essays, and poetry from Balai Pustaka onward",
      "Newspapers, investigative reporting, long-form magazines, and documentary narration",
      "Film, sinetron television drama, comedy, web series, and creator video",
      "Pop, rock, indie, dangdut, hip-hop, and regional multilingual song",
      "Group chats and social media mixing standard Indonesian, local languages, English, abbreviations, and particles"
    ]
  },
  relationships: {
    overview: cited(
      "Indonesian sits inside overlapping maps. Genealogically it is Malayic and Austronesian; historically it is a standardized form of Malay selected for a national project; socially it lives alongside hundreds of Indonesian languages. Malaysian Malay is therefore much closer than Javanese, even though Javanese contact may be more audible in a particular speaker's Indonesian. Tagalog is a family relative but distant; Dutch, Arabic, Sanskrit, and English are sources of loanwords, not Austronesian siblings. Keeping ancestry, standardization, and contact separate prevents nationalist stories from replacing linguistic evidence.",
      "glottolog-indonesian",
      "mabbim",
      "bps-languages"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Bahasa Indonesia belongs to Indonesians across ethnicity, island, and religion, but it does not replace the country's other languages. Ask people what they speak at home and what they call their local variety. Forms of address often matter more than a perfect verb: Bapak and Ibu can be respectful titles, Kak addresses an older peer or service worker in many settings, and a person's name may replace “you.” Do not use Bahasa by itself as though it were the language's proper name; in Indonesian it simply means “language.” Notice also that relaxed friendliness is not permission to flatten hierarchy or copy intimate Jakarta pronouns. Listen for how people introduce one another, disagree, apologize, and close requests.",
  resources: [
    { type: "course", title: "BIPA Daring learning materials", url: "https://bipa.kemendikdasmen.go.id/belajar_eng", level: "all", description: cited("Official leveled materials, video, exercises, and cultural topics for foreign learners, useful as the standard-language spine of a broader study plan.", "bipa") },
    { type: "dictionary", title: "KBBI VI Daring", url: "https://kbbi.kemendikdasmen.go.id/", level: "intermediate", description: cited("The essential official monolingual dictionary for meanings, derivatives, standard forms, and contemporary updates.", "kbbi") },
    { type: "other", title: "EYD V online", url: "https://ejaan.kemendikdasmen.go.id/eyd/", level: "advanced", description: cited("The current official spelling and punctuation reference; especially valuable for di-/di, compounds, reduplication, capitals, and edited writing.", "eyd-v") },
    { type: "course", title: "University of Hawaiʻi Indonesian", url: "https://manoa.hawaii.edu/ipll/language-programs/indonesian/index.php", level: "all", description: cited("A mature university sequence using interactive materials, with pathways into conversation, structure, history, and literature.", "uh-indonesian") },
    { type: "corpus", title: "Leipzig Indonesian Corpus", url: "https://corpora.uni-leipzig.de/en?corpusId=ind_mixed_2013", level: "advanced", description: cited("Search words in sentence context and inspect common collocations, while checking dates, genres, and possible Malay–Indonesian labeling noise.", "leipzig-corpus", "corpus-reclassification") },
    { type: "other", title: "Discover Discomfort 80–20 Language Learning", url: "https://discoverdiscomfort.com/get-fluent-faster-with-easier-words/", level: "beginner", description: cited("A sentence-centered approach to mastering a compact core vocabulary. Pair it with Indonesian root families rather than treating each affixed form as unrelated.", "dd-8020") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Selamat pagi.", translation: "Good morning.", literalMeaning: "Safe/blessed morning.", usageNote: "A standard greeting. Use selamat siang, sore, or malam for later parts of the day, though local boundaries vary." },
    { original: "Apa kabar?", translation: "How are you?", literalMeaning: "What news?", usageNote: "A broadly understood greeting; Baik, terima kasih is a safe textbook response, but real replies vary." },
    { original: "Terima kasih.", translation: "Thank you.", literalMeaning: "Receive affection/love.", usageNote: "Standard and universal. Makasih is a common informal reduction." },
    { original: "Permisi.", translation: "Excuse me; may I pass/enter?", usageNote: "Useful when entering, interrupting, attracting attention politely, or moving past someone." },
    { original: "Maaf, saya belum mengerti.", translation: "Sorry, I don't understand yet.", literalMeaning: "Sorry, I not-yet understand.", usageNote: "Belum is encouraging: it presents understanding as something that has not happened yet." },
    { original: "Bisa bicara lebih pelan?", translation: "Could you speak more slowly?", literalMeaning: "Can speak more slow?", usageNote: "Add sedikit “a little” to soften it further: Bisa bicara sedikit lebih pelan?" },
    { original: "Maksudnya apa?", translation: "What does that mean?", literalMeaning: "Its intended meaning is what?", usageNote: "Natural for clarifying an idea or utterance; Kata ini artinya apa? asks what a word means." },
    { original: "Berapa harganya?", translation: "How much does it cost?", literalMeaning: "How much is its price?", usageNote: "A neutral shopping question. Listen for colloquial reductions rather than assuming every seller will answer in textbook style." },
    { original: "Saya mau pesan ini.", translation: "I'd like to order this.", literalMeaning: "I want order this.", usageNote: "Mau is direct but ordinary; pointing plus ini makes it practical in cafés and restaurants." },
    { original: "Di mana kamar kecil?", translation: "Where is the restroom?", literalMeaning: "At where small room?", usageNote: "Toilet is also widely understood. Di mana is two words because di is a location preposition." },
    { original: "Boleh saya bertanya?", translation: "May I ask a question?", literalMeaning: "Allowed I ask?", usageNote: "A polite opener in class, interviews, or unfamiliar company." },
    { original: "Sampai jumpa.", translation: "See you.", literalMeaning: "Until meeting.", usageNote: "A standard farewell; sampai nanti means “see you later.”" }
  ],
  sources: [
    { id: "dd-choosing", title: "Choosing a Language to Learn: Motivation, Difficulty, Passion", url: "https://discoverdiscomfort.com/languages-to-learn/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-how-learn", title: "How We Learn Languages", url: "https://discoverdiscomfort.com/how-to-learn-languages/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "dd-8020", title: "80-20 Language Learning: Get Fluent Faster with Easier Words", url: "https://discoverdiscomfort.com/get-fluent-faster-with-easier-words/", publisher: "Discover Discomfort", updatedAt: "2023-07-17", accessedAt: "2026-07-10" },
    { id: "wiki-indonesian", title: "Indonesian language", url: "https://en.wikipedia.org/wiki/Indonesian_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-indonesian", title: "Glottolog 5.3: Standard Indonesian", url: "https://glottolog.org/resource/languoid/id/indo1316", publisher: "Glottolog", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "youth-pledge", title: "Sejarah Sumpah Pemuda", url: "https://muspada.kemenbud.go.id/sejarah-sumpah-pemuda/", publisher: "Museum Sumpah Pemuda, Ministry of Culture of Indonesia", accessedAt: "2026-07-10" },
    { id: "bps-languages", title: "Profile of Ethnic Groups and Regional Language Diversity: Long Form 2020 Population Census", url: "https://www.bps.go.id/id/publication/2024/12/12/6feb932e24186429686fb57b/profile-of-ethnic-groups-and-regional-language-diversity-results-of-the-2020-population-census-long-form.html", publisher: "Badan Pusat Statistik", publishedAt: "2024-12-12", accessedAt: "2026-07-10" },
    { id: "kbbi", title: "KBBI VI Daring", url: "https://kbbi.kemendikdasmen.go.id/", publisher: "Badan Pengembangan dan Pembinaan Bahasa", updatedAt: "2026-04", accessedAt: "2026-07-10" },
    { id: "eyd-v", title: "Ejaan Bahasa Indonesia yang Disempurnakan, Edisi V", url: "https://ejaan.kemendikdasmen.go.id/eyd/", publisher: "Badan Pengembangan dan Pembinaan Bahasa", publishedAt: "2022-08-16", accessedAt: "2026-07-10" },
    { id: "mabbim", title: "Strengthening Language Cooperation in Three Countries: MABBIM", url: "https://www.kemendikdasmen.go.id/berita/4195-perkuat-kerja-sama-kebahasaan-di-tiga-negara-sidang-mabbim-k", publisher: "Ministry of Primary and Secondary Education of Indonesia", accessedAt: "2026-07-10" },
    { id: "ui-colloquial", title: "A Literature Study on the Intonation of Colloquial Indonesian", url: "https://scholar.ui.ac.id/en/publications/a-literature-study-on-the-intonation-of-colloquial-indonesian/", publisher: "Universitas Indonesia", accessedAt: "2026-07-10" },
    { id: "bipa", title: "BIPA Daring Learning Reference Materials", url: "https://bipa.kemendikdasmen.go.id/belajar_eng", publisher: "Badan Pengembangan dan Pembinaan Bahasa", accessedAt: "2026-07-10" },
    { id: "uh-indonesian", title: "Indonesian Language Program", url: "https://manoa.hawaii.edu/ipll/language-programs/indonesian/index.php", publisher: "University of Hawaiʻi at Mānoa", accessedAt: "2026-07-10" },
    { id: "leipzig-corpus", title: "Leipzig Corpora Collection: Indonesian Mixed 2013", url: "https://corpora.uni-leipzig.de/en?corpusId=ind_mixed_2013", publisher: "Leipzig University", accessedAt: "2026-07-10" },
    { id: "corpus-reclassification", title: "Reclassification of the Leipzig Corpora Collection for Malay and Indonesian", url: "https://tufs.repo.nii.ac.jp/record/1419/files/Nomoto_et_al.pdf", publisher: "Tokyo University of Foreign Studies", publishedAt: "2024", accessedAt: "2026-07-10" },
    { id: "indra-grammar", title: "Building an HPSG-based Indonesian Resource Grammar (INDRA)", url: "https://aclanthology.org/W15-3302/", publisher: "ACL Anthology", publishedAt: "2015", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Indonesian Language Guide: Real Speech, Affixes and Culture",
    description: "A deeply researched guide to Indonesian history, Malay relationships, pronunciation, spelling, affixes, voice, regional speech, useful phrases, culture, and learning resources."
  }
} satisfies LanguageGuide;
