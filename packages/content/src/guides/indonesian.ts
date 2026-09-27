import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Malaysian Malay",
    relationship: "Sibling national standard within the wider Malay language world",
    explanation: cited(
      "Indonesian and Malaysian Malay developed from closely related Malay varieties. Readers can usually follow careful formal writing across the two standards, though everyday vocabulary and speech differ.\n\nSchools, media, local languages, and different borrowing histories shaped each standard. People also speak many local Malay varieties, which deserve their own names and descriptions.",
      "mabbim",
      "wiki-indonesian"
    )
  },
  {
    name: "Javanese",
    relationship: "Separate Austronesian language in close contact on Java",
    explanation: cited(
      "Javanese has its own literature and ways of marking social relationships in speech. It is a separate Austronesian language, rather than an Indonesian dialect. Long contact has brought Javanese words and conversational habits into Indonesian on Java; Indonesian also enters Javanese-speaking homes, schools, and media.",
      "bps-languages",
      "wiki-indonesian"
    )
  },
  {
    name: "Sundanese",
    relationship: "Regional Austronesian neighbor and contact language",
    explanation: cited(
      "Sundanese is a separate language centered in western Java. A conversation in Bandung may combine Indonesian with Sundanese address words and local vocabulary. Casual Indonesian changes from place to place; Jakarta slang is only one variety.",
      "bps-languages",
      "ui-colloquial"
    )
  },
  {
    name: "Tagalog",
    slug: "tagalog",
    relationship: "More distant Austronesian relative",
    explanation: cited(
      "Tagalog and Indonesian share Austronesian ancestry, and some words reveal that history. They have developed separately for centuries, so knowing Indonesian won't let you follow a Tagalog conversation. Their different ways of putting an actor or affected thing in focus make an interesting comparison once you know both languages.",
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
  summary: "Indonesian grew from Malay into a shared national language. Hear how its affixes, regional speech, and everyday social choices connect people across Indonesia.",
  family: "Austronesian, Malayo-Polynesian, Malayic",
  macroRegion: "Indonesia and maritime Southeast Asia",
  primaryScript: "Latin",
  difficultyLabel: "Moderate",
  learnerHook: "You can start a conversation with a few clear sentences. Then listen for how affixes change a word, why friends sound different from newsreaders, and how local languages shape Indonesian.",
  hero: {
    imageAlt: "Printed and handwritten Indonesian representing formal and everyday language across the archipelago.",
    callToActionLabel: "Explore Indonesian in use"
  },
  classification: "A standardized Malayic national language within the Austronesian family",
  speakerCommunity: "Indonesian is Indonesia's national language and a common way to speak across communities. Many people also use Javanese, Sundanese, Balinese, Bugis, a Papuan language, a local Malay variety, or another home language. The 2020 Long Form census examined how people use regional languages with family and in the community.\n\nFor some urban families, Indonesian is the first language children learn. Their speech still carries local accents and words. The national language takes shape through these multilingual lives.",
  facts: [
    { label: "Family", value: "Austronesian · Malayo-Polynesian · Malayic" },
    { label: "Constitutional role", value: "National and official language of Indonesia" },
    { label: "National declaration", value: "Named the language of unity in the 1928 Youth Pledge" },
    { label: "Script", value: "Latin alphabet under EYD V spelling guidance" },
    { label: "Use", value: "First language for many urban speakers; additional language for many multilingual Indonesians" },
    { label: "Close standards", value: "Malaysian, Bruneian, and Singaporean standards of Malay" }
  ],
  introduction: cited("Indonesian, or Bahasa Indonesia, is Indonesia’s national language and a common way for people from different language communities to speak to one another. Many residents also use Javanese, Sundanese, Balinese, Bugis, regional Malay varieties, Papuan languages, or other home languages. For some city families Indonesian itself is the first language children learn, and their speech still carries local words and accents.\n\nIndonesian is a standardized Malayic language in the Austronesian family. Its national role grew through twentieth-century movements for a shared language, while schools, publishing, broadcasting, and daily conversation have continued to shape it. The standard used in formal writing coexists with relaxed urban and regional forms.\n\nIndonesian verbs do not change to agree with “I,” “you,” or “they,” but prefixes and suffixes make related words from one root: tulis means “write,” menulis means “to write,” and penulis means “writer.” That pattern helps explain how ordinary words connect across news, books, and conversation.", "glottolog-indonesian", "bps-languages", "youth-pledge", "wiki-indonesian", "niu-grammar"),
  origins: {
    overview: cited(
      "Indonesian has an old Malayic foundation and a modern national name. People used Malay varieties for trade, religion, and communication across maritime Southeast Asia long before Indonesia became independent. Early inscriptions record Malay, while later courts, ports, and printers spread changing forms of it.\n\nUnder Dutch rule, schools, newspapers, organizations, and writers expanded Malay's role in public debate. Nationalists named their shared language bahasa Indonesia as they argued for a future country. The name and national institutions took shape in the twentieth century; speakers inherited a much older language tradition.",
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
      "Indonesian has borrowed words through trade, religion, colonial rule, and everyday contact. Sanskrit and Arabic left words for ideas and institutions; Portuguese, Dutch, Chinese varieties, English, and regional languages added many more. Dutch kantoor became kantor “office,” Portuguese mesa became meja “table,” and Arabic mumkin became mungkin “perhaps.”\n\nSpeakers now use these as Indonesian words. A word's history can explain its spelling or meaning, but its present use tells you how to say it naturally.",
      "wiki-indonesian",
      "kbbi"
    ),
    standardization: cited(
      "Indonesia's language agency, Badan Bahasa, maintains the KBBI dictionary and the EYD spelling guide. These references tell editors and learners how to write standard Indonesian. The agency also works with counterparts in Malaysia and Brunei through MABBIM on shared terminology.\n\nStandard spelling has a clear job in public writing. Friends may still say nggak “not” or use the Jakarta ending -in. The setting decides whether those forms fit.",
      "kbbi",
      "eyd-v",
      "mabbim",
      "wiki-indonesian"
    )
  },
  variants: {
    overview: cited(
      "Edited writing and prepared speeches often follow the national standard. Conversation changes with place and relationship: speakers shorten words, choose local forms of address, and bring words from other home languages.\n\nJakarta casual speech travels widely through film, music, and online media. You may hear its forms far from Jakarta, but people elsewhere also have their own everyday Indonesian. Learn the common Jakarta forms for listening, then ask which local languages shape the speech around you.",
      "ui-colloquial",
      "wiki-indonesian"
    ),
    items: [
      { name: "Formal Standard Indonesian", note: cited("Officials, researchers, and journalists use the standard in documents, reports, and prepared speeches. They usually write full affixes and codified words, though spoken delivery still carries a regional accent.", "eyd-v") },
      { name: "Neutral educated conversation", note: cited("Many speakers choose a middle register for everyday conversations with people they do not know closely. They may leave out what context supplies and mix standard with casual forms while keeping the words broadly understood.", "wiki-indonesian", "ui-colloquial") },
      { name: "Colloquial Jakarta Indonesian", note: cited("This urban variety uses forms such as nggak “not,” udah “already,” gue “I,” lu “you,” and verbal -in. Speakers choose among forms to show relationships and identity. Listen to how people address strangers before you copy an intimate form.", "wiki-indonesian", "ui-gue-lo") },
      { name: "Regional Indonesian", note: cited("Medan, Bandung, Yogyakarta, Makassar, Manado, Ambon, Papua, and other places have recognizable vocabulary, rhythm, and grammatical preferences influenced by local languages and migration. Some areas also use regional Malay varieties that should not be flattened into 'accented standard Indonesian.'", "bps-languages", "glottolog-indonesian") },
      { name: "Indonesian–Malay cross-border use", note: cited("Readers can often follow formal text across Indonesian and Malay national standards. Everyday words may still surprise you: Indonesian mobil is commonly Malaysian kereta “car,” while Indonesian kantor contrasts with Malaysian pejabat “office.” Speakers adjust as they talk across borders.", "mabbim", "wiki-indonesian") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Indonesian spelling usually helps you predict a word's sound. The letter e takes more than one sound, though: compare the weak vowel in apel “roll call” with the clearer vowel in apel “apple.” Audio or a dictionary can settle words whose spelling looks the same.\n\nThe letter c sounds like English ch, and ng can begin a word, as in ngantuk “sleepy.” Speakers often tap or trill r. Accents vary across Indonesia, so use a clear model for practice while learning to hear other speakers comfortably.",
      "wiki-indonesian",
      "kbbi"
    ),
    script: "Latin alphabet; examples follow current standard spelling",
    soundSystem: cited(
      "English spelling habits can mislead you. Cari “look for” starts with a ch sound, pergi “go” has a hard g, and sy in syarat “condition” sounds close to sh. In careful speech, kh in akhir “end” comes from farther back in the mouth than English h.\n\nThe beginning of a root can also change when speakers add a prefix. Tulis “write” becomes menulis, while baca “read” becomes membaca. Listening for those related forms helps you find a familiar root in a longer word.",
      "kbbi",
      "uh-indonesian"
    ),
    prosody: cited(
      "Indonesian words usually do not rely on English-style stress contrasts for meaning. Speakers use the rise and fall of a whole phrase to ask, disagree, soften a request, or show that a turn is over.\n\nIn casual speech, sudah often becomes udah and bagaimana becomes gimana. Practice with a news clip for careful articulation, then an interview for these shorter forms. Their different rhythms prepare you for different settings.",
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
      "Modern Indonesian uses Latin letters and the EYD V spelling guide. Older writing may have oe where you now see u, tj for c, or dj for j. The historical name Soekarno and modern spelling Sukarno refer to the same president.\n\nIn chats, people may write yg for yang or use the numeral 2 to repeat a word. Those shortcuts help with informal messages, while books, applications, and news use standard spelling.",
      "eyd-v",
      "wiki-indonesian"
    ),
    primaryScript: "Latin alphabet under Ejaan Bahasa Indonesia yang Disempurnakan (EYD V)",
    romanization: cited("Indonesian already uses Latin letters, so learners need pronunciation guidance rather than a separate romanization. Approximate English respellings quickly become harmful; use standard Indonesian spelling and audio from the start.", "eyd-v"),
    spellingNorms: cited(
      "Spaces can change the meaning. Attach di- to a verb in ditulis “written”; write the place word di separately in di Jakarta “in Jakarta.” Repeat a word with a hyphen, as in buku-buku “books.”\n\nIndonesian capitalizes the country name in bahasa Indonesia but leaves bahasa lower-case in running text. KBBI confirms standard words, and EYD explains punctuation and spelling.",
      "eyd-v",
      "kbbi"
    ),
    styleNotes: [
      cited("Learn di- versus di as meaning, not typography: attached di- marks a patient-oriented verb, while separate di locates something.", "eyd-v"),
      cited("Expect historical spellings in names and archives; do not silently modernize a person's chosen spelling.", "wiki-indonesian"),
      cited("Treat chat abbreviations as forms for informal messages. Recognize yg when you read it, but write yang in an application letter.", "eyd-v")
    ]
  },
  grammar: {
    overview: cited(
      "Indonesian verbs stay the same for I, you, and they. Nouns have no grammatical gender, and speakers often show time with separate words. That lets you make a first sentence quickly.\n\nFor longer conversations, watch how people choose a verb prefix to highlight the actor or the thing affected. A root can also grow into several words with different jobs. Casual speakers may shorten standard forms, but their speech has patterns of its own.",
      "wiki-indonesian",
      "uh-indonesian"
    ),
    typologicalProfile: cited(
      "In a basic sentence, the actor usually comes before the verb and its object. Describing words often follow the noun: rumah besar means “big house.” Yang introduces a description such as rumah yang besar “the house that is big.”\n\nSeparate words carry much of Indonesian grammar, but prefixes and suffixes build many new words. The way speakers frame an event around an actor or an affected thing also shapes what sounds natural. Pronouns and short conversational words can show closeness, respect, or local identity.",
      "wiki-indonesian",
      "indra-grammar"
    ),
    morphology: cited(
      "Start with a root and learn its family. Ajar connects belajar “study,” mengajar “teach,” pelajar “student,” and pelajaran “lesson.” You'll remember the differences more easily if you save a sentence for each word.\n\nThe meN- prefix changes to fit the root's first sound. Tulis becomes menulis, sapu becomes menyapu, and baca becomes membaca. Suffixes such as -kan and -i can change who or what participates in an action, so learn them in whole clauses rather than as fixed English equivalents.",
      "indra-grammar",
      "kbbi"
    ),
    syntax: cited(
      "A time word such as kemarin “yesterday” can place an event in the past. Sedang points to an action in progress, sudah to something completed, and belum to something that hasn't happened yet. The verb itself does not need a tense ending.\n\nDescriptions usually follow nouns: rumah besar “big house,” rumah saya “my house.” In conversation, people may leave out a subject or object when everyone knows it already. Follow what the speakers are talking about before you leave out a word yourself.",
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
        body: cited("When a sentence starts with the person doing the action, a standard transitive verb often takes meN-. This prefix changes shape around the root: tulis “write” becomes menulis. Casual speakers may shorten it, but you'll need the full form for most edited writing.", "indra-grammar", "niu-grammar"),
        example: "Rina menulis surat itu tadi malam.",
        exampleTranslation: "Rina wrote that letter last night."
      },
      {
        title: "Two ways to start with the affected thing",
        body: cited("To start with the affected thing, Indonesian often adds di- to the verb: surat itu ditulis Rina, “Rina wrote that letter.” With I or you as the actor, a pronoun can come directly before the bare verb: surat ini saya tulis, “I wrote this letter.” Grammars call the second arrangement passive type two; standard writing keeps the pronoun next to its verb.", "niu-grammar", "indra-grammar"),
        example: "Surat itu ditulis Rina; surat ini saya tulis.",
        exampleTranslation: "That letter was written by Rina; this letter was written by me / I wrote this letter."
      },
      {
        title: "-kan and -i change the scene",
        body: cited("A suffix can change the scene around a verb. Membeli buku means “buy a book”; membelikan adik buku adds a younger sibling who benefits from the purchase. Other roots use -kan and -i differently, so check a complete example before applying a rule.", "niu-grammar", "kbbi"),
        example: "Tolong bukakan pintu untuk saya.",
        exampleTranslation: "Please open the door for me."
      },
      {
        title: "Reduplication is more than plural",
        body: cited("Repeating a word can show more than one item, but a noun doesn't always need a plural form. Jalan-jalan means “go for a stroll,” while hati-hati means “be careful.” After a number, tiga buku is the usual way to say “three books.”", "wiki-indonesian", "kbbi"),
        example: "Anak-anak sedang bermain; saya mau jalan-jalan.",
        exampleTranslation: "The children are playing; I want to go out for a stroll."
      },
      {
        title: "Pronouns are social choices",
        body: cited("Saya works in many polite settings; aku often sounds closer, and gue belongs to Jakarta-style casual speech. Kamu may sound friendly or too direct, depending on whom you address. People also use a name or title such as Ibu, Bapak, or Kak where English would say “you.”", "ui-gue-lo", "bipa"),
        example: "Ibu mau pesan apa? — Saya mau teh saja.",
        exampleTranslation: "What would you like to order, ma'am? — Just tea for me."
      },
      {
        title: "Particles make conversation human",
        body: cited("Short words such as kok, dong, and sih can show surprise, encouragement, or an expectation that the listener shares. Their meaning changes with voice and relationship. Hear them in several real conversations before trying one yourself.", "ui-particles"),
        example: "Coba dulu, dong—enak, kok!",
        exampleTranslation: "Come on, just try it—it really is tasty!"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Indonesian links people across an archipelago with hundreds of languages. BPS's Long Form 2020 census publication describes regional languages used with family and in the community; it does not give a simple count of everyone's first language. This helps show why a national common language and local languages can thrive in the same lives.\n\nIndonesian also reaches people in Timor-Leste, international classrooms, and diaspora communities. Outside Indonesia, “Indonesian” makes the language clear; bahasa alone means “language” in Indonesian.",
      "bps-languages",
      "glottolog-indonesian"
    ),
    regions: [
      { place: "Java and major cities", note: cited("Indonesian is increasingly a home language in urban and mixed-family settings, while Javanese, Sundanese, Betawi, and many migrant languages shape local speech. Jakarta media are influential but not a demographic substitute for the whole island.", "bps-languages", "ui-colloquial") },
      { place: "Sumatra and the Riau Islands", note: cited("The region contains diverse Malayic varieties as well as Acehnese, Batak languages, Minangkabau, and others. Indonesian may sit especially close to local Malay speech here, yet local identity and vocabulary remain distinct.", "glottolog-indonesian") },
      { place: "Kalimantan, Sulawesi, Maluku, Papua, Bali, and Nusa Tenggara", note: cited("Indonesian often bridges communities with very different first languages. Regional Malay varieties, trade histories, schooling, and local grammatical patterns give Indonesian recognizable eastern and island-specific forms.", "bps-languages", "glottolog-indonesian") },
      { place: "Timor-Leste and neighboring Southeast Asia", note: cited("Timor-Leste names Indonesian a working language alongside English, while Tetum and Portuguese are official languages. In Malaysia, Brunei, and Singapore, related Malay standards support communication, though everyday words differ.", "timor-government", "mabbim") },
      { place: "Global diaspora and classrooms", note: cited("Indonesian is maintained among families, students, researchers, workers, and cultural communities abroad. BIPA programs and university courses treat it as a foreign language while connecting learners to contemporary Indonesian voices.", "bipa", "uh-indonesian") }
    ]
  },
  difficulty: {
    label: "Moderate",
    overview: cited(
      "You can order food and describe your day without conjugation tables or a new script. Later, a friend may shorten a word you only know from a textbook, while an article may pack several affixes into one noun.\n\nThat shift explains why a quick start can lead to a listening or reading plateau. Keep learning the standard for writing, and add the local conversational forms you actually hear. Your goal matters more than a universal difficulty ranking.",
      "bipa",
      "uh-indonesian"
    ),
    easierAspects: [
      "A familiar Latin alphabet and relatively systematic modern spelling",
      "No grammatical gender or person-based verb conjugation",
      "Time can be expressed transparently with adverbs and aspect words",
      "Basic word order supports everyday sentences early",
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
      "Try a week with short grammar sessions, repeated listening, one conversation, and a brief edited text. Keep related forms together: lihat, melihat, dilihat, terlihat, and kelihatan belong on one page with examples. Then compare a news clip with a casual interview on the same subject and note which words or endings change.",
      "kbbi",
      "bipa"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Study standard Indonesian and one speaker community side by side. Use a course to learn spelling and affixes; ask a tutor or friend how they would say the same thing naturally. Mark each form formal, neutral, casual, or regional.\n\nLater, tell the same story as a voice note to a friend and as a short news-style report.\n\nWhen you lose the thread, ask Maksudnya apa? “What do you mean?”\n\nYou can also ask Yang biasa orang bilang apa? “What do people normally say?” These questions help you hear where your textbook sentence sounds too stiff.",
      "uh-indonesian",
      "bipa"
    ),
    mediaPractice: cited(
      "News and documentaries give you careful speech; interviews and comedy give you shorter words and conversational particles. Take one minute of audio, write down what you hear, compare it with subtitles, then replay it aloud. Subtitles may paraphrase speech, so check the audio before treating them as a transcript.\n\nFollow creators from more than one region. Note where the speaker is from and who they are talking to; that context helps you understand which forms travel widely and which belong to a local setting.",
      "ui-colloquial",
      "bipa"
    ),
    dictionariesAndCorpora: cited(
      "Use KBBI for standard definitions and word families, and EYD for spelling questions. The Leipzig corpus lets you inspect words in longer sentences. A study found that some Malay and Indonesian web texts in corpus collections can be mislabeled, so check where each example came from.\n\nWhen a form sounds unfamiliar, compare sources and ask a speaker whether they would use it in writing, conversation, or their region. A dictionary entry alone can't settle that social question.",
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
      { type: "other", title: "Northern Illinois University Indonesian Grammar", url: "https://seasite.niu.edu/Indonesian/overview_me_di_kan_i.htm", level: "intermediate", description: cited("Examples show how meN-, di-, -kan, and -i change a verb's participants. Pair this older teaching page with current EYD spelling and a tutor's natural-usage check.", "niu-grammar") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "A short Indonesian word can carry several meanings. Bisa can mean “can” or, as a separate word with the same spelling, “venom.” Sayang can express affection or regret, while lumayan may signal modest approval or a larger amount than expected.\n\nAffixes give you another way to follow meaning. Merdeka means “free” or “independent,” and kemerdekaan means “independence”; beda “different” leads to perbedaan “difference.” Listen for these families in songs, stories, political speeches, and ordinary chats.",
      "kbbi",
      "leipzig-corpus"
    ),
    notableWords: [
      { term: "gotong royong", meaning: "mutual cooperation", note: cited("A public ideal of shared work often invoked for neighborhood projects, civic life, and national values. Its use can describe genuine reciprocity or serve as aspirational political language, so context matters.", "kbbi") },
      { term: "merantau", meaning: "leave one's home region to seek experience or livelihood", note: cited("Especially associated with Minangkabau social history but widely intelligible in Indonesian. It carries more cultural texture than generic pergi “go.”", "kbbi") },
      { term: "nongkrong", meaning: "hang out; spend time casually", note: cited("A colloquial staple for unstructured social time at a café, roadside stall, campus, or online. It is natural in conversation but usually replaced in formal prose.", "kbbi", "ui-colloquial") },
      { term: "mudik", meaning: "return to one's home area, especially for a major holiday", note: cited("Prominent in annual reporting around Lebaran, when millions travel from cities toward family homes. The word links personal reunion to transport, labor, and urbanization.", "kbbi") },
      { term: "sayang", meaning: "affection; dear; what a pity", note: cited("Intonation and syntax decide whether it names love, addresses someone tenderly, or introduces regret: Sayang sekali means “What a shame.”", "kbbi") },
      { term: "lumayan", meaning: "fairly good; not bad; a decent amount", note: cited("Speakers may use lumayan for modest approval or pleasant surprise. Lumayan mahal can mean “rather expensive,” so the word is not always praise.", "kbbi") },
      { term: "jam karet", meaning: "rubber time; flexible lateness", note: cited("A humorous, sometimes critical expression for schedules that stretch. Avoid treating it as an essential national trait; punctuality varies by institution, city, person, and stakes.", "kbbi") }
    ],
    loanwordLayers: cited(
      "Borrowed words show several layers of Indonesian history. Kantor “office” and kualitas “quality” reflect European contact; kitab “book” and kabar “news” have Arabic histories. Raja “king” and bahasa “language” came through Sanskrit, meja “table” through Portuguese, and bakmi through Chinese-Indonesian food culture.\n\nEnglish contributes digital terms today, alongside Indonesian alternatives such as unggah “upload” and unduh “download.” Regional languages keep contributing too. Speakers have shaped the language through this contact for centuries.",
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
      "Indonesian belongs to the Malayic branch of the Austronesian language family. Its national standard grew from Malay, so Malaysian Malay is a close relative and counterpart. Javanese is a separate Austronesian language that can still strongly shape a person's Indonesian.\n\nTagalog shares more distant family ancestry. Dutch, Arabic, Sanskrit, and English supplied loanwords but are not Austronesian relatives. Family history, borrowing, and daily contact explain different kinds of similarity.",
      "glottolog-indonesian",
      "mabbim",
      "bps-languages"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Indonesians use the national language across islands, communities, and religions, alongside many other languages. Ask someone what they speak at home and what they call that language.\n\nAddress words often matter more than a flawless verb. Bapak and Ibu can be respectful titles; Kak may address an older peer or someone helping you in a shop. People may use a name where English uses “you.”\n\nListen to how people introduce one another or make requests before copying an intimate Jakarta pronoun. Say bahasa Indonesia when you mean the language in Indonesian; bahasa by itself simply means “language.”",
  resources: [
    { type: "course", title: "BIPA Daring learning materials", url: "https://bipa.kemendikdasmen.go.id/belajar_eng", level: "all", description: cited("Official leveled materials, videos, exercises, and cultural topics give foreign learners a foundation in standard Indonesian.", "bipa") },
    { type: "dictionary", title: "KBBI VI Daring", url: "https://kbbi.kemendikdasmen.go.id/", level: "intermediate", description: cited("The essential official monolingual dictionary for meanings, derivatives, standard forms, and contemporary updates.", "kbbi") },
    { type: "other", title: "EYD V online", url: "https://ejaan.kemendikdasmen.go.id/eyd/", level: "advanced", description: cited("The current official spelling and punctuation reference; especially valuable for di-/di, compounds, reduplication, capitals, and edited writing.", "eyd-v") },
    { type: "course", title: "University of Hawaiʻi Indonesian", url: "https://manoa.hawaii.edu/ipll/language-programs/indonesian/index.php", level: "all", description: cited("A mature university sequence using interactive materials, with pathways into conversation, structure, history, and literature.", "uh-indonesian") },
    { type: "corpus", title: "Leipzig Indonesian Corpus", url: "https://corpora.uni-leipzig.de/en?corpusId=ind_mixed_2013", level: "advanced", description: cited("Search words in sentence context and inspect common collocations, while checking dates, genres, and possible Malay–Indonesian labeling noise.", "leipzig-corpus", "corpus-reclassification") },
    { type: "other", title: "Northern Illinois University Indonesian Grammar", url: "https://seasite.niu.edu/Indonesian/overview_me_di_kan_i.htm", level: "intermediate", description: cited("Read paired examples of verb prefixes and suffixes, then check current spelling in EYD.", "niu-grammar") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Selamat pagi.", translation: "Good morning.", literalMeaning: "Safe/blessed morning.", usageNote: "A standard greeting. Use selamat siang, sore, or malam for later parts of the day, though local boundaries vary." },
    { original: "Apa kabar?", translation: "How are you?", literalMeaning: "What news?", usageNote: "A broadly understood greeting; Baik, terima kasih is a safe textbook response, but real replies vary." },
    { original: "Terima kasih.", translation: "Thank you.", literalMeaning: "Receive affection/love.", usageNote: "Standard and universal. Makasih is a common informal reduction." },
    { original: "Permisi.", translation: "Excuse me; may I pass/enter?", usageNote: "Say this when entering, interrupting, attracting attention politely, or moving past someone." },
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
    { id: "niu-grammar", title: "Indonesian Grammar: Overview of meN-, di-, -kan, and -i", url: "https://seasite.niu.edu/Indonesian/overview_me_di_kan_i.htm", publisher: "Northern Illinois University", accessedAt: "2026-09-27" },
    { id: "wiki-indonesian", title: "Indonesian language", url: "https://en.wikipedia.org/wiki/Indonesian_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-indonesian", title: "Glottolog 5.3: Standard Indonesian", url: "https://glottolog.org/resource/languoid/id/indo1316", publisher: "Glottolog", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "youth-pledge", title: "Sejarah Sumpah Pemuda", url: "https://muspada.kemenbud.go.id/sejarah-sumpah-pemuda/", publisher: "Museum Sumpah Pemuda, Ministry of Culture of Indonesia", accessedAt: "2026-07-10" },
    { id: "bps-languages", title: "Profile of Ethnic Groups and Regional Language Diversity: Long Form 2020 Population Census", url: "https://www.bps.go.id/id/publication/2024/12/12/6feb932e24186429686fb57b/profile-of-ethnic-groups-and-regional-language-diversity-results-of-the-2020-population-census-long-form.html", publisher: "Badan Pusat Statistik", publishedAt: "2024-12-12", accessedAt: "2026-07-10" },
    { id: "kbbi", title: "KBBI VI Daring", url: "https://kbbi.kemendikdasmen.go.id/", publisher: "Badan Pengembangan dan Pembinaan Bahasa", updatedAt: "2026-04", accessedAt: "2026-07-10" },
    { id: "eyd-v", title: "Ejaan Bahasa Indonesia yang Disempurnakan, Edisi V", url: "https://ejaan.kemendikdasmen.go.id/eyd/", publisher: "Badan Pengembangan dan Pembinaan Bahasa", publishedAt: "2022-08-16", accessedAt: "2026-07-10" },
    { id: "mabbim", title: "Strengthening Language Cooperation in Three Countries: MABBIM", url: "https://www.kemendikdasmen.go.id/berita/4195-perkuat-kerja-sama-kebahasaan-di-tiga-negara-sidang-mabbim-k", publisher: "Ministry of Primary and Secondary Education of Indonesia", accessedAt: "2026-07-10" },
    { id: "ui-colloquial", title: "A Literature Study on the Intonation of Colloquial Indonesian", url: "https://scholar.ui.ac.id/en/publications/a-literature-study-on-the-intonation-of-colloquial-indonesian/", publisher: "Universitas Indonesia", accessedAt: "2026-07-10" },
    { id: "ui-particles", title: "Indonesian Discourse Particles in Conversations and Written Text", url: "https://scholarhub.ui.ac.id/wacana/vol22/iss2/3/", publisher: "Wacana, Universitas Indonesia", publishedAt: "2021", accessedAt: "2026-09-27" },
    { id: "ui-gue-lo", title: "Gue Lo: Form of Address as a Strategy for Negotiating Cultural Identity", url: "https://scholarhub.ui.ac.id/irhs/vol10/iss2/6/", publisher: "International Review of Humanities Studies, Universitas Indonesia", publishedAt: "2025", accessedAt: "2026-09-27" },
    { id: "timor-government", title: "About Timor-Leste", url: "https://timor-leste.gov.tl/?lang=en&p=547", publisher: "Government of Timor-Leste", accessedAt: "2026-09-27" },
    { id: "bipa", title: "BIPA Daring Learning Reference Materials", url: "https://bipa.kemendikdasmen.go.id/belajar_eng", publisher: "Badan Pengembangan dan Pembinaan Bahasa", accessedAt: "2026-07-10" },
    { id: "uh-indonesian", title: "Indonesian Language Program", url: "https://manoa.hawaii.edu/ipll/language-programs/indonesian/index.php", publisher: "University of Hawaiʻi at Mānoa", accessedAt: "2026-07-10" },
    { id: "leipzig-corpus", title: "Leipzig Corpora Collection: Indonesian Mixed 2013", url: "https://corpora.uni-leipzig.de/en?corpusId=ind_mixed_2013", publisher: "Leipzig University", accessedAt: "2026-07-10" },
    { id: "corpus-reclassification", title: "Reclassification of the Leipzig Corpora Collection for Malay and Indonesian", url: "https://tufs.repo.nii.ac.jp/record/1419/files/Nomoto_et_al.pdf", publisher: "Tokyo University of Foreign Studies", publishedAt: "2024", accessedAt: "2026-07-10" },
    { id: "indra-grammar", title: "Building an HPSG-based Indonesian Resource Grammar (INDRA)", url: "https://aclanthology.org/W15-3302/", publisher: "ACL Anthology", publishedAt: "2015", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Indonesian Language Guide: Real Speech, Affixes and Culture",
    description: "Learn how Indonesian grew from Malay, how its affixes change meaning, and how standard and everyday speech differ across Indonesia."
  }
} satisfies LanguageGuide;
