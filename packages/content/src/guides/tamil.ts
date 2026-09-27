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
    explanation: cited("Telugu belongs to South-Central Dravidian rather than Tamil's immediate subgroup. Both languages use case endings, participial constructions, and verb-final clauses. Border communities, cinema, and music bring them into contact; shared Sanskrit loans do not by themselves show how closely two languages are related.", "glottolog", "upenn")
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
  summary: "Tamil connects everyday speech with a written tradition more than two thousand years old. Its regional voices, films, books, and digital writing all belong to the language today.",
  family: "Dravidian, South Dravidian",
  macroRegion: "South India, Sri Lanka, Southeast Asia, and a worldwide diaspora",
  primaryScript: "Tamil script",
  difficultyLabel: "Very demanding",
  learnerHook: "Hear the difference between an everyday Tamil question and its formal written version, then learn where each belongs.",
  hero: {
    imageAlt: "Tamil letters alongside a conversation, newspaper, and classical verse, showing the language's many registers.",
    callToActionLabel: "Hear Tamil in use"
  },
  classification: "A major South Dravidian language with ancient attestations and multiple modern standards",
  speakerCommunity: "Tamil is a home and public language across several countries. India's 2011 census recorded 69,026,881 people under Tamil in its mother-tongue language table. That dated India figure is not a present-day worldwide total.\n\nTamil is central to life in Tamil Nadu and Puducherry. Sri Lankan Tamils, Malaiyaha Tamils, and Tamil-speaking Muslims have distinct histories and identities. Singapore recognizes Tamil as an official language.\n\nMalaysia also has long-standing Tamil-speaking communities, and migration has linked speakers across the Gulf, Africa, Europe, North America, Australia, and the Indian Ocean. A family in Jaffna, a student in Singapore, and a filmmaker in Chennai may all use Tamil while sounding different. Choose a community model for speaking, then learn the broader written language.",
  facts: [
    { label: "Family", value: "Dravidian; South Dravidian branch" },
    { label: "India census", value: "About 69 million mother-tongue respondents in 2011" },
    { label: "Historical depth", value: "Tamil-Brahmi inscriptions and a literary record extending over two millennia" },
    { label: "Registers", value: "Modern formal/written Tamil and several spoken standards differ substantially" },
    { label: "Script", value: "A Brahmi-derived abugida with 12 vowel letters, 18 basic consonant letters, and āytam" },
    { label: "Public status", value: "Official in Tamil Nadu and Puducherry; official nationally in Sri Lanka and Singapore" }
  ],
  learnerOverview: "Compare a Tamil Nadu conversational question, நீங்க எங்கே போறீங்க? nīnga eṅgē pōrīnga? (“Where are you going?”), with formal நீங்கள் எங்கே போகிறீர்கள்? nīṅkaḷ eṅkē pōkiṟīrkaḷ? They do the same job in different settings, but their endings sound and look different. That gap between everyday speech and formal writing shapes how you learn Tamil.\n\nIf you plan to speak with family in Sri Lanka, use their variety as your first listening model. If your main goal is Tamil Nadu conversation, begin with a Tamil Nadu colloquial course and add written Tamil beside it. Learn the script early so signs, captions, and messages become practice material.\n\nTamil words often build meaning with endings. வீட்டிலிருந்து vīṭṭiliruntu means “from the house”: வீடு vīṭu “house” changes shape before endings that express location and source. Start with whole sentences and listen for those recurring pieces.",
  origins: {
    overview: cited("Tamil belongs to the Dravidian family; it did not grow out of Sanskrit. Tamil-Brahmi inscriptions from the last centuries BCE provide early written evidence. Surviving Old Tamil poetry gives readers an unusually early literary record.\n\nThe Sangam anthologies include love, war, generosity, grief, and public life. Scholars debate the dates of individual works, and traditional accounts of ancient poetic academies are cultural traditions rather than a securely dated institutional record. Old, Middle, and Modern Tamil name broad stages; you need help with older grammar and vocabulary even if you speak Tamil today.", "wiki-tamil", "wiki-literature", "upenn"),
    timeline: [
      { period: "Late centuries BCE", event: cited("Tamil-Brahmi inscriptions on caves, pottery, and other objects provide early written evidence. Their language and script link Tamil to both a regional social history and the wider Brahmi writing tradition; dates and individual readings continue to be refined by epigraphists.", "wiki-tamil", "unicode") },
      { period: "Roughly early centuries BCE–CE", event: cited("The works now grouped as Sangam literature took shape across a debated range of dates. They organize interior love poetry and exterior public poetry through sophisticated conventions of landscape, mood, action, and voice. The corpus is literature, not a census transcript of ancient society, but it remains a major historical and aesthetic source.", "wiki-literature", "project-madurai") },
      { period: "Early medieval period", event: cited("Jain and Buddhist epics, ethical works, and the devotional poetry of Shaiva Nayanmars and Vaishnava Alvars expanded Tamil's genres and sacred geographies. Tamil and Sanskrit interacted in scholarship, worship, courtly life, and vocabulary; neither simple replacement nor sealed purity describes that history.", "wiki-literature", "upenn") },
      { period: "Medieval–early modern centuries", event: cited("Commentaries, temple inscriptions, grammar, medicine, performance, and courtly works sustained multiple learned traditions. Muslim Tamil writing and Christian print later added genres and lexical layers, including Arabic, Persian, Portuguese, and other contact forms.", "wiki-literature", "tamil-lexicon") },
      { period: "Nineteenth–twentieth centuries", event: cited("Print, manuscript recovery, journalism, and the Pure Tamil movement reshaped ideas of correctness. Editions by Swaminatha Iyer brought classical works to wider readership. Language reform intersected with caste and Dravidian politics.", "wiki-literature", "tamil-lexicon") },
      { period: "2004 to the present", event: cited("India formally recognized Tamil as a Classical Language in 2004. Today it operates simultaneously in government, education, global entertainment, family networks, social media, computing, and scholarship. Institutional celebration does not erase unequal literacy, dialect prejudice, or debates over which spoken voices appear in formal spaces.", "india-classical", "tva") }
    ],
    contactHistory: cited("Tamil speakers have exchanged words with neighbors for centuries. Sanskrit and Prakrit shaped religious and scholarly vocabulary; Persian and Arabic entered through trade and Muslim communities. Portuguese, Dutch, English, Sinhala, Malay, and other Dravidian languages left further traces in different places.\n\nA Sanskrit-derived word may sound formal in one setting and completely ordinary in another. The twentieth-century Pure Tamil movement promoted alternatives to many such words and influenced public writing. Learn which form a speaker actually uses, then ask whether the choice marks region, genre, religion, age, or politics.", "upenn", "tamil-lexicon", "wiki-tamil"),
    standardization: cited("Schools, publishers, government, and news media use Modern Standard Written Tamil across regions. People normally use a different, systematic set of forms in conversation. Linguists call this split diglossia: speakers learn which kind of Tamil fits a setting.\n\nA formal speech may approach written grammar, while film dialogue and family talk use local spoken forms. Messages and subtitles often write speech down, so the boundary is not absolute. Labels such as “high” and “low” describe social settings in scholarship; they do not rank the people who speak them.", "upenn", "ashoka-diglossia", "ut-diglossia")
  },
  variants: {
    overview: cited("Tamil changes across regions and communities as well as between writing and speech. “Indian Tamil” covers many Tamil Nadu varieties; “Sri Lankan Tamil” also covers several distinct histories and accents. Chennai media makes some forms familiar far beyond the city, but it does not set a neutral spoken standard for everyone.\n\nCaste, class, age, religion, and migration can affect a person's word choices. Learn to name the model you are hearing without turning its features into a joke or a judgment.", "upenn", "ashoka-diglossia", "wiki-tamil"),
    items: [
      { name: "Modern Standard Written Tamil", note: cited("The cross-regional learned variety used in most edited prose, schooling, administration, and news. Pronunciation varies by speaker, and Sri Lankan editorial preferences can differ from Indian ones. It is alive and changing, not identical to Sangam Tamil.", "ashoka-diglossia", "upenn") },
      { name: "Tamil Nadu educated colloquial", note: cited("An umbrella for speech that reduces strongly local markers while retaining colloquial grammar. Chennai media has made some of its forms widely recognizable: formal போகிறேன் pōkiṟēṉ ‘I go/am going’ commonly appears as போறேன் pōrēn. Actual Chennai speech also varies by neighborhood and social network.", "ut-diglossia", "ashoka-diglossia") },
      { name: "Southern and western Tamil Nadu varieties", note: cited("Madurai, Tirunelveli, Coimbatore, and Kongu-region speech differ in pronouns, endings, sounds, and vocabulary. Film comedy sometimes stereotypes local or caste-associated features; learn them from speakers in context.", "upenn", "wiki-tamil") },
      { name: "Sri Lankan Tamil varieties", note: cited("Jaffna, Batticaloa, Trincomalee, Muslim, and Malaiyaha Tamil speech differ from one another as well as from common Tamil Nadu models. Some retain distinctions changed in much Indian speech, and contact with Sinhala and English varies. War and displacement have carried these varieties into major diaspora communities.", "sri-lanka-census", "upenn") },
      { name: "Diaspora and contact varieties", note: cited("Communities across Southeast Asia, the Indian Ocean, the Gulf, Europe, and North America have different migration histories. Contact with Malay, English, French, Arabic, and other home languages shapes vocabulary and literacy.", "upenn", "singapore-constitution") }
    ]
  },
  pronunciation: {
    overview: cited("Length matters in Tamil. கல் kal means “stone,” while கால் kāl means “leg” or “foot”; the longer vowel changes the word. Consonant length also separates words.\n\nTamil distinguishes sounds made at the teeth from sounds made with the tongue farther back, called retroflex sounds. A letter such as க can sound different in different positions. Match recordings to the speakers you want to understand.", "tva", "openlearn-script", "wiki-tamil"),
    script: "Tamil script, supported by IPA or a consistent scholarly transliteration for sound study",
    soundSystem: cited("Tamil has five short vowels அ a, இ i, உ u, எ e, ஒ o and five long partners ஆ ā, ஈ ī, ஊ ū, ஏ ē, ஓ ō. Writers also teach ஐ ai and ஔ au as diphthongs. Keep a long vowel long even when the syllable is not emphasized.\n\nTamil has several “l-like” sounds written ல l, ள ḷ, and ழ ḻ. The last is a tongue-curled sound, not English z. Compare படம் paṭam “picture” and பட்டம் paṭṭam “kite” or “title” to hear a longer consonant.\n\nTamil's basic script does not assign a separate letter to each voiced and voiceless stop; position helps determine the sound. Loanwords may use additional letters such as ஜ j, ஷ ṣ, ஸ s, and ஹ h.", "openlearn-script", "unicode", "wiki-tamil"),
    prosody: cited("A long vowel or consonant still needs its full time even in a quick sentence. Tamil rhythm also changes with phrase grouping and intonation. Listen to a complete question, not just a list of words: எப்படி இருக்கீங்க? eppaṭi irukkīnga? means “How are you?” in a Tamil Nadu colloquial style.\n\nNewsreaders, actors, singers, and family members pace sentences differently. Copy one short exchange from your target community before trying to generalize its rhythm.", "msu-basic-tamil", "ut-diglossia"),
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
      { original: "பல் / பள்ளி / பழம்", transliteration: "pal / paḷḷi / paḻam", translation: "tooth / school / fruit", note: "Three real words let you compare ல l, ள ḷ, and ழ ḻ in context." },
      { original: "தண்ணீர்", transliteration: "taṇṇīr", translation: "water", note: "Begin with dental த, then retract the tongue for doubled retroflex ண்ண; keep ī long." },
      { original: "வணக்கம்", transliteration: "vaṇakkam", translation: "greetings", note: "The doubled k is longer than an English single consonant; initial வ may range between v- and w-like realizations." }
    ]
  },
  writing: {
    overview: cited("Tamil writes left to right in a script descended from Brahmi. Each consonant normally carries an a vowel; a vowel sign changes it, and a dot called puḷḷi removes it. Linguists call this kind of writing an abugida.\n\nA school chart counts 12 independent vowels, 18 basic consonants, one āytam ஃ, and 216 consonant-vowel combinations. Those combinations reuse shapes; you do not learn 247 unrelated pictures. Practice one consonant with its signs, then read whole words.", "unicode", "openlearn-script", "tva"),
    primaryScript: "Tamil abugida (Unicode Tamil block U+0B80–U+0BFF)",
    romanization: cited("This guide marks long vowels and tongue position with ā, ṭ, ṇ, ḷ, ḻ, and ṟ. Casual Latin-letter Tamil does not follow one spelling system, so a text message may spell the same spoken word differently from a textbook.\n\nUse romanization while learning sound contrasts. Then search and write in Tamil script so a word's spelling stays stable across lessons, subtitles, and dictionaries.", "unicode", "tva"),
    spellingNorms: cited("A consonant such as க includes an a vowel; க் removes it with puḷḷi. Signs turn that base into கி ki, கீ kī, and கு ku. Some signs appear before the consonant on screen even though the character sequence stores the consonant first; let your keyboard handle that order.\n\nWritten spelling can preserve pieces that everyday speech shortens. Formal என்று eṉṟu may sound like ன்னு ṉṉu in some Tamil Nadu speech. Keep the edited spelling in a formal article, and label spoken spellings when you transcribe conversation.", "unicode", "ut-diglossia"),
    styleNotes: [
      cited("Use a Tamil keyboard and a modern Unicode font. Legacy font encodings can display correctly on one machine while storing meaningless Latin code points underneath.", "unicode"),
      "Learn the Grantha-derived letters ஜ, ஷ, ஸ, ஹ and the ligature க்ஷ as reading tools for loans and names, while noting that spelling choices can carry stylistic or purist associations.",
      "Keep spoken transcripts and edited prose in separate notebook columns. Writing every colloquial reduction as though it were standard prose prevents register control; correcting every text message into literary Tamil hides living usage.",
      cited("Use the University of Madras Tamil Lexicon or Tamil Virtual Academy tools to check a form, then verify it in current sentences. Historical dictionary glosses may not reveal present-day register.", "tamil-lexicon", "tva")
    ]
  },
  grammar: {
    overview: cited("Tamil usually puts a verb at the end of a clause. Endings on nouns show roles such as a recipient or location; endings on verbs can show time and who acts. A clause describing a noun normally comes before that noun.\n\nLinguists call Tamil agglutinative because several meaningful pieces can join in a word. The joins sometimes change sounds, a process called sandhi. Learn each pattern in a sentence, then compare its formal and spoken versions so you can recognize both.", "msu-basic-tamil", "upenn"),
    typologicalProfile: cited("A Tamil sentence often has the order subject, object, verb, though speakers can move words to highlight them. Relation words usually follow a noun, and case endings mark jobs that English often gives to prepositions. A speaker can omit the subject when context and the verb make it clear.\n\nFirst- and second-person pronouns do not mark gender. Some third-person pronouns and verb endings distinguish gender, number, or respect. Those distinctions matter when you address or describe a person, so learn them with real social contexts.", "upenn", "msu-basic-tamil"),
    morphology: cited("Tamil nouns take endings for number and case. Compare வீடு vīṭu “house,” வீட்டில் vīṭṭil “in the house,” and வீடுகளிலிருந்து vīṭukaḷiliruntu “from the houses.” The stem changes as endings attach; a chart should show the whole form, not just a suffix.\n\nVerbs add tense and person endings, and they can combine with other verbs to express completion, ability, or intention. Spoken Tamil often shortens the formal forms. Label every example by register: a written வந்திருக்கிறார் vantirukkiṟār and a Tamil Nadu colloquial வந்திருக்காரு vantirukkāru belong to different settings.", "msu-basic-tamil", "ut-diglossia"),
    syntax: cited("Tamil often joins actions with a verb form that comes before the final verb. சாப்பிட்டுவிட்டு வந்தேன் cāppiṭṭuviṭṭu vantēṉ means “I ate and then came.” Only the last verb finishes the clause.\n\nA verb can also describe a following noun: நான் நேற்று வாங்கிய புத்தகம் nāṉ nēṟṟu vāṅkiya puttakam means “the book I bought yesterday.” Tamil does not need a separate word matching English “that” here. For “I have a question,” a speaker may say எனக்கு ஒரு கேள்வி இருக்கு eṉakku oru kēḷvi irukku, literally placing the question “to me.”", "msu-basic-tamil", "upenn"),
    advancedPainPoints: [
      "Maintaining separate productive spoken and written paradigms",
      "Hearing case endings after stem changes and rapid reductions",
      "Selecting honorific agreement and address forms without overgeneralizing",
      "Interpreting long participial and nominalized clauses before their head",
      "Learning where a formally possible form sounds unnatural in a particular community"
    ],
    topics: [
      { title: "Case chains make relationships visible", body: cited("Tamil marks roles with endings: object -ஐ -ai, recipient -க்கு -kku, and instrument -ஆல் -āl. For “with someone,” it can use -உடன் -uṭaṉ or -ஓடு -ōṭu instead.\n\nSpoken Tamil may reduce or omit object marking when the object is nonspecific, while a definite human object strongly favors it. Study how each noun changes as an ending attaches.", "msu-basic-tamil"), example: "நான் ரவியைப் பார்த்தேன். Nāṉ Raviyai pārttēṉ.", exampleTranslation: "I saw Ravi. The human object Ravi takes -ai; the final verb identifies the first-person past subject." },
      { title: "Agglutination builds a route", body: cited("Suffixes can encode a route. வீட்டிலிருந்து vīṭṭiliruntu combines an altered form of ‘house,’ location -il, and source -iruntu. Add a focus particle and you get வீட்டிலிருந்தே vīṭṭiliruntē, ‘right from the house.’", "msu-basic-tamil"), example: "அவள் வீட்டிலிருந்து வேலை செய்கிறாள். Avaḷ vīṭṭiliruntu vēlai ceykiṟāḷ.", exampleTranslation: "She works from home. வீட்டிலிருந்து gives the starting place." },
      { title: "Relative participles come before nouns", body: cited("A Tamil relative construction puts a specially formed verb before the noun it describes. Context tells you whether the missing participant is an actor, object, place, or time. Listen for the noun that completes the phrase.", "msu-basic-tamil"), example: "நான் படித்த புத்தகம் மிகவும் நல்லது. Nāṉ paṭitta puttakam mikavum nallatu.", exampleTranslation: "The book that I read is very good. Paṭitta ‘read’ modifies puttakam ‘book’; there is no separate word for ‘that.’" },
      { title: "Verbs encode tense and participants", body: cited("Verb endings mark time and, in many forms, the subject's person, number, gender, or respect. First- and second-person endings do not mark gender. Formal போகிறேன் pōkiṟēṉ and Tamil Nadu colloquial போறேன் pōrēṉ can both mean ‘I am going,’ but they fit different settings.", "msu-basic-tamil", "ut-diglossia"), example: "அவர்கள் நாளை வருவார்கள். Avarkaḷ nāḷai varuvārkaḷ.", exampleTranslation: "They will come tomorrow. The formal plural/honorific ending -ārkaḷ belongs to the written or careful register." },
      { title: "Honorificity reaches agreement", body: cited("Pronouns, titles, and verb endings can express respect. அவர் avar can refer respectfully to one person; அவர்கள் avarkaḷ may be plural or more honorific. Spoken choices vary by region, so ask a speaker how they address an unfamiliar adult before choosing between நீ nī and நீங்கள் nīṅkaḷ.", "msu-basic-tamil", "ut-diglossia"), example: "அவர் இப்போது வருகிறார். Avar ippōtu varukiṟār.", exampleTranslation: "He/she (respectful) is coming now. The verb uses honorific -ār; gender is not specified." },
      { title: "Negation uses more than one strategy", body: cited("Tamil uses several ways to say ‘not.’ இல்லை illai negates existence, while வேண்டாம் vēṇṭām can mean ‘not wanted’ or ‘don't.’ A formal verb may use -வில்லை -villai; everyday speech often contracts the result.", "msu-basic-tamil", "ut-diglossia"), example: "எனக்குத் தெரியவில்லை. Eṉakkut teriyavillai.", exampleTranslation: "I don't know. A Tamil Nadu colloquial version is எனக்குத் தெரியல eṉakkut teriyala." },
      { title: "Clause chaining keeps stories moving", body: cited("A nonfinal verb can link actions without repeating a full set of endings. A helper verb can add completion, attempt, or another shade of meaning to the main action. Hear the whole sequence before translating each piece.", "msu-basic-tamil"), example: "கதவைத் திறந்து உள்ளே வாருங்கள். Katavait tiṟantu uḷḷē vāruṅkaḷ.", exampleTranslation: "Open the door and come inside. Only the final verb carries the polite imperative; tiṟantu links the preceding action." }
    ]
  },
  whereSpoken: {
    overview: cited("Tamil-speaking communities formed through trade, labor migration, war, study, and work. Tamil may be a home language, school subject, or public language depending on place. Official status does not tell you which services a local office provides.\n\nCount speakers carefully. India's census tabulates mother tongue, while Sri Lanka's 2024 census reports language literacy in separate tables. These measures cannot be added into one worldwide total.", "census-2011", "sri-lanka-census", "sri-lanka-olc"),
    regions: [
      { place: "Tamil Nadu and Puducherry, India", note: cited("The largest concentration of Tamil speakers and a major center of Tamil publishing, television, music, and film. India's 2011 census provides a nationwide mother-tongue count, which should be labeled by year.", "census-2011", "upenn") },
      { place: "Sri Lanka", note: cited("Tamil is an official and national language alongside Sinhala, with English designated the link language. Northern, eastern, hill-country, Colombo, Muslim, and displaced communities have distinct histories. The 2024 census reports language literacy by ethnic category, illustrating multilingualism while also showing why language and ethnicity cannot be treated as synonyms.", "sri-lanka-census", "sri-lanka-olc") },
      { place: "Singapore and Malaysia", note: cited("Tamil is one of Singapore's official languages and has long-standing communities in Malaysia. English and Malay also shape how many younger speakers learn and use Tamil.", "singapore-constitution", "upenn") },
      { place: "Indian Ocean and southern Africa", note: cited("Communities in Mauritius, Réunion, and South Africa grew through different colonial labor and trade histories. Tamil may be a home, liturgical, or heritage language.", "upenn", "wiki-tamil") },
      { place: "Gulf, Europe, North America, and Australasia", note: cited("Diasporas include migrants from India and Sri Lanka. Community schools, online media, and family calls sustain Tamil alongside other languages.", "upenn", "wiki-tamil") }
    ],
    mapImageAlt: "Major Tamil-speaking regions in South Asia and long-established diaspora centers."
  },
  difficulty: {
    label: "Very demanding",
    overview: cited("Tamil asks an English-speaking learner to hear long vowels and consonants, read a new script, and manage a gap between everyday speech and edited writing. Some suffix patterns become regular once you learn the stems.\n\nA beginner can converse before reading editorials or classical poetry. Heritage learners may have the opposite profile: fluent family speech and limited confidence with formal prose. Pick a goal for each register rather than treating “Tamil fluency” as one finish line.", "msu-basic-tamil", "ut-diglossia"),
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
    workload: cited("Begin with script and a small set of spoken sentences from your target community. Pair a course with regular listening and correction from a speaker, then add short edited texts. Save a colloquial version and a formal version when they differ.\n\nSet tasks you can repeat: read a caption, ask a relative a question, follow a brief interview, and summarize a paragraph. Mark examples “formal,” “shared,” or “colloquial—region” so you do not accidentally use a newsreader's phrasing in a family chat.", "tva", "ashoka-diglossia", "ut-diglossia")
  },
  advancedLearning: {
    strategy: cited("Choose one speech community as your listening base and work with a speaker who can correct how a sentence sounds socially. Transcribe short clips, then read a short article each week. Rewrite a sentence from formal prose as your speaker would say it, and ask what changed.\n\nAs you improve, follow topics you care about in Tamil media. Recipes, cricket, labor history, computing, cinema, or devotional music each bring their own words and styles. Record the source and region so your vocabulary notes have context.", "tva", "upenn", "ut-diglossia"),
    mediaPractice: cited("News teaches edited syntax and public vocabulary; interviews show people moving between formal and conversational styles. Film dialogue can be memorable, but actors may exaggerate region or caste for a role. Compare the same subject in a news clip, an interview, and a conversation.\n\nListen with captions off once, then check whether subtitles match speech or replace it with formal forms. Note where the speaker is from. A song can help you remember imagery, but its rhythm may differ from ordinary speech.", "upenn", "ut-diglossia"),
    dictionariesAndCorpora: cited("The University of Madras Tamil Lexicon is a historical dictionary. It helps with older words and literary citations, but a modern conversation may use a different form or meaning. Check new words in recent sentences before trying them aloud.\n\nProject Madurai shares free digital editions of Tamil literary works. Edition and encoding quality vary, so use a scholarly edition for close quotation. Search more than one inflected form when looking for a noun or verb, because endings create many surface spellings.", "tamil-lexicon", "project-madurai", "tva"),
    resources: [
      { type: "course", title: "Tamil Virtual Academy lessons", url: "https://www.tamilvu.org/en/lessons", level: "all", description: cited("Public lessons in script, language, literature, and culture; pair their formal orientation with spoken audio.", "tva") },
      { type: "course", title: "University of Texas Tamil Script Learner's Manual", url: "https://sites.la.utexas.edu/tamilscript/", level: "beginner", description: cited("Focused script instruction that explicitly relates written and spoken Tamil.", "ut-diglossia") },
      { type: "dictionary", title: "University of Madras Tamil Lexicon", url: "https://dsal.uchicago.edu/dictionaries/tamil-lex/", level: "advanced", description: cited("A historical Tamil–English lexicon with literary citations; check modern register separately.", "tamil-lexicon") },
      { type: "corpus", title: "Project Madurai", url: "https://www.projectmadurai.org/", level: "intermediate", description: cited("A searchable volunteer digital library of Tamil literature; edition quality varies.", "project-madurai") },
      { type: "book", title: "Basic Tamil open textbook", url: "https://openbooks.lib.msu.edu/basictamil/", level: "beginner", description: cited("An open textbook with explicit grammar lessons and practice.", "msu-basic-tamil") },
      { type: "community", title: "A speaker from your target Tamil community", level: "all", description: "Ask which forms they use, what sounds formal, and how other regions may differ." }
    ]
  },
  wordsAndTexts: {
    overview: cited("Tamil words can link ordinary life with old poetry. அகம் akam means “inside,” but classical poetry also uses it for love and inner experience. புறம் puṟam means “outside” and names a poetic domain of public action, generosity, and war.\n\nA dictionary gloss will not tell you which sense a modern writer has in mind. Read a passage, ask who is speaking, and compare a contemporary use with a literary one. Films, speeches, messages, and novels provide different clues.", "wiki-literature", "project-madurai"),
    notableWords: [
      { term: "அன்பு", transliteration: "aṉpu", meaning: "love; affection", note: "A broad and productive word appearing in intimate address, ethical prose, names, and formal letter closings. Spoken pronunciation may sound closer to anbu because the stop voices after the nasal." },
      { term: "அறம்", transliteration: "aṟam", meaning: "virtue; ethical rightness", note: cited("Central to ethical and literary discussion, famously associated with the opening division of the Tirukkural. No single English gloss captures duty, virtue, and right conduct in every passage.", "project-madurai") },
      { term: "ஊர்", transliteration: "ūr", meaning: "village; town; home place", note: "More socially textured than a dot on a map: asking ஒரே ஊரா? ‘Are you from the same place?’ can locate kinship, origin, and belonging. The suffix survives in many South Indian place names." },
      { term: "ழ", transliteration: "ḻ", meaning: "the letter/sound ḻ", note: "A sound that has become a cultural emblem, especially because it occurs in தமிழ் tamiḻ. Pride in it is understandable; speakers whose dialect realizes it differently are not speaking defective Tamil." },
      { term: "சங்கம்", transliteration: "caṅkam", meaning: "association; assembly", note: cited("Used for organizations today and conventionally for the ancient poetic corpus. The legendary academy narratives and the scholarly dating of surviving poems are related cultural stories, not identical claims.", "wiki-literature") },
      { term: "உரிமை", transliteration: "urimai", meaning: "right; entitlement; ownership", note: "A key word in civic, political, and personal language: மொழி உரிமை moḻi urimai means ‘language right.’ Context distinguishes a legal right from possession or relational claim." },
      { term: "வணக்கம்", transliteration: "vaṇakkam", meaning: "greetings; salutation", note: "Widely recognized and suitable in many public encounters. Friends often choose time-specific, English-derived, religious, kinship, or more casual greetings instead; frequency is social, not just lexical." }
    ],
    loanwordLayers: cited("Tamil has long borrowed from Sanskrit and neighboring languages. Persian and Arabic reached different communities through trade, worship, and administration; Portuguese and English brought other words. Some Tamil alternatives promoted by reform movements now sound completely ordinary.\n\nA borrowed word can take Tamil endings and a local meaning. Sri Lankan speech also reflects Sinhala contact, while Malaysian and Singaporean varieties live alongside Malay and English. Note the speaker and setting before calling a word “pure,” “foreign,” or old-fashioned.", "upenn", "tamil-lexicon"),
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
    overview: cited("Tamil belongs to the Dravidian family with Malayalam, Kannada, Telugu, and many other languages. Family members share a history, but modern speakers cannot assume they will understand one another.\n\nTamil also has borrowed from and influenced neighboring languages outside the family, including Sinhala and Sanskrit. A shared word can come from inheritance, contact, or parallel development. Ask which history the evidence supports before calling two languages close relatives.", "glottolog", "wiki-tamil"),
    languages: relatedLanguages
  },
  culturalNotes: "Tamil connects people through many kinds of work: family stories, worship, schools, labor organizing, cinema, literature, and online conversation. No one religion, region, or political movement speaks for every Tamil speaker.\n\nJudgments about dialect can echo caste and class hierarchies. Ask who uses a form and how they feel about it before calling it correct, rustic, or old-fashioned.",
  resources: [
    { type: "course", title: "Tamil Virtual Academy", url: "https://www.tamilvu.org/en/lessons", level: "all", description: cited("Public lessons spanning language and literature.", "tva") },
    { type: "course", title: "UT Austin Tamil Script Learner's Manual", url: "https://sites.la.utexas.edu/tamilscript/", level: "beginner", description: cited("Script instruction attentive to diglossia.", "ut-diglossia") },
    { type: "book", title: "Basic Tamil (Michigan State University)", url: "https://openbooks.lib.msu.edu/basictamil/", level: "beginner", description: cited("An open, sequenced grammar course.", "msu-basic-tamil") },
    { type: "dictionary", title: "University of Madras Tamil Lexicon", url: "https://dsal.uchicago.edu/dictionaries/tamil-lex/", level: "advanced", description: cited("A searchable historical dictionary.", "tamil-lexicon") },
    { type: "corpus", title: "Project Madurai", url: "https://www.projectmadurai.org/", level: "intermediate", description: cited("Free searchable Tamil literary texts.", "project-madurai") },
    { type: "course", title: "Open University Beginners' Tamil taster course", url: "https://www.open.edu/openlearn/languages/beginners-tamil-taster-course/content-section-2", level: "beginner", description: cited("A beginner introduction to Tamil letters and sound patterns.", "openlearn-script") }
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
    { id: "wiki-tamil", title: "Tamil language", url: "https://en.wikipedia.org/wiki/Tamil_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-literature", title: "Tamil literature", url: "https://en.wikipedia.org/wiki/Tamil_literature", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "tva", title: "Tamil Virtual Academy lessons", url: "https://www.tamilvu.org/en/lessons", publisher: "Tamil Virtual Academy, Government of Tamil Nadu", accessedAt: "2026-07-10" },
    { id: "unicode", title: "The Unicode Standard, Version 17.0: Tamil", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-12/", publisher: "Unicode Consortium", publishedAt: "2025", accessedAt: "2026-07-10" },
    { id: "upenn", title: "Tamil Language and Literature", url: "https://www.southasia.upenn.edu/languages/explore-languages/tamil-language-and-literature", publisher: "University of Pennsylvania South Asia Studies", accessedAt: "2026-07-10" },
    { id: "ashoka-diglossia", title: "The Diglossic Beauty of Tamil", url: "https://www.ashoka.edu.in/courses/cla-0037-the-diglossic-beauty-of-tamil/", publisher: "Ashoka University", accessedAt: "2026-07-10" },
    { id: "ut-diglossia", title: "Tamil Script Learners Manual: Tamil Diglossia", url: "https://sites.la.utexas.edu/tamilscript/tamil-diglossia/190", publisher: "University of Texas at Austin", accessedAt: "2026-07-10" },
    { id: "openlearn-script", title: "Beginners' Tamil: Tamil script", url: "https://www.open.edu/openlearn/languages/beginners-tamil-taster-course/content-section-2", publisher: "The Open University", accessedAt: "2026-07-10" },
    { id: "msu-basic-tamil", title: "Basic Tamil", url: "https://openbooks.lib.msu.edu/basictamil/", publisher: "Michigan State University Libraries", accessedAt: "2026-07-10" },
    { id: "india-classical", title: "Classical Languages and Census 2011 speaker figures", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2222111", publisher: "Press Information Bureau, Government of India", publishedAt: "2026-02-02", accessedAt: "2026-09-27" },
    { id: "census-2011", title: "C-16 Population by Mother Tongue, India Census 2011", url: "https://censusindia.gov.in/nada/index.php/catalog/42458/download/46089/C-16_25062018.pdf", publisher: "Office of the Registrar General and Census Commissioner, India", accessedAt: "2026-09-27" },
    { id: "sri-lanka-census", title: "Census of Population and Housing 2024: Final Report", url: "https://www.statistics.gov.lk/Resource/en/Population/CPH_2024/CPH2024_Final_Eng.pdf", publisher: "Department of Census and Statistics, Sri Lanka", publishedAt: "2026", accessedAt: "2026-07-10" },
    { id: "sri-lanka-olc", title: "The Constitution of the Democratic Socialist Republic of Sri Lanka, Articles 18–19", url: "https://www.parliament.lk/files/pdf/constitution.pdf", publisher: "Parliament of Sri Lanka", accessedAt: "2026-09-27" },
    { id: "singapore-constitution", title: "Constitution of the Republic of Singapore, Article 153A", url: "https://www.eld.gov.sg/Resources/Constitution%20of%20the%20Republic%20of%20Singapore.pdf", publisher: "Elections Department Singapore", accessedAt: "2026-09-27" },
    { id: "glottolog", title: "Tamil language classification", url: "https://glottolog.org/resource/languoid/id/tami1289", publisher: "Glottolog", accessedAt: "2026-07-10" },
    { id: "tamil-lexicon", title: "University of Madras Tamil Lexicon", url: "https://dsal.uchicago.edu/dictionaries/tamil-lex/", publisher: "Digital South Asia Library, University of Chicago", accessedAt: "2026-07-10" },
    { id: "project-madurai", title: "Project Madurai: Tamil Electronic Texts", url: "https://www.projectmadurai.org/", publisher: "Project Madurai", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Tamil Language Guide: Spoken Tamil, Script, Grammar and Literature",
    description: "A source-backed, reader-focused guide to Tamil pronunciation, script, spoken–written diglossia, grammar, regional varieties, communities, literature, phrases, and learning resources."
  }
} satisfies LanguageGuide;
