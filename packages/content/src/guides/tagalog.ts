import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Cebuano",
    relationship: "Central Philippine relative",
    explanation: cited(
      "Cebuano and Tagalog share Austronesian inheritance and recognizably Philippine systems of voice, aspect, markers, and linkers, but they are separate languages rather than accents of one national tongue. A Tagalog speaker will notice cognates and familiar grammatical architecture without automatically understanding ordinary Cebuano conversation.",
      "glottolog",
      "wiki-tagalog"
    )
  },
  {
    name: "Indonesian",
    slug: "indonesian",
    relationship: "More distant Malayo-Polynesian relative",
    explanation: cited(
      "Indonesian and Tagalog share roots such as anak “child,” mata “eye,” and lima “five.” Their modern grammars feel quite different: Indonesian has lost much of the Philippine-type voice system and developed in a different contact and national-language history. Comparing them reveals family resemblance without implying easy mutual intelligibility.",
      "glottolog",
      "wiki-tagalog"
    )
  },
  {
    name: "Malay",
    relationship: "Austronesian relative and historical trade contact language",
    explanation: cited(
      "Malay is both a relative and a historic language of regional trade. Tagalog words such as guro “teacher” and certain Indic cultural terms traveled through multilingual Southeast Asian networks, often via Malay, while many everyday cognates descend from older shared ancestry.",
      "wiki-tagalog",
      "glottolog"
    )
  },
  {
    name: "Spanish",
    relationship: "Unrelated language with several centuries of contact",
    explanation: cited(
      "Spanish is Indo-European, yet it supplied a conspicuous layer of Tagalog vocabulary, especially for time, religion, government, food, and material culture. Borrowed words were naturalized: Spanish trabajo became trabaho and cuchara became kutsara. Tagalog grammar did not thereby become Romance.",
      "wiki-tagalog",
      "kwf-orthography"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const tagalogGuide = {
  slug: "tagalog",
  name: "Tagalog",
  autonym: "Tagalog / Filipino",
  status: "published",
  publishedAt: "2025-03-05",
  summary: "Tagalog is spoken in Manila and much of southern Luzon. It supplies the main structure of Filipino, the national language, and connects people through family, media, and literature.",
  family: "Austronesian, Malayo-Polynesian, Philippine, Central Philippine",
  macroRegion: "The Philippines and global Filipino diasporas",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Tagalog verb forms help you show who acts and what the action affects. Small words can make the same conversation warmer, more tentative, or more respectful.",
  hero: {
    imageAlt: "Contemporary Filipino books, handwritten Tagalog, and a phone conversation representing literary and everyday language.",
    callToActionLabel: "Hear Tagalog in use"
  },
  classification: "A Central Philippine Austronesian language and the main structural basis of the national language called Filipino",
  speakerCommunity: "Tagalog is the home language of many families in Manila and nearby provinces, and millions more learn Filipino through school and media. The 2020 Philippine census counted Tagalog as the language generally spoken at home in 10.52 million households, or 39.9 percent of all households. That counts households, not individual first-language speakers.\n\nOther Philippine languages remain central to family and public life. One person might use Cebuano at home, Filipino with colleagues, and English at work. Families abroad may call their language Tagalog or Filipino and move between it and the language of their new home.",
  facts: [
    { label: "Family", value: "Austronesian · Malayo-Polynesian · Central Philippine" },
    { label: "Home use", value: "10.52 million Philippine households in the 2020 census" },
    { label: "National standard", value: "Filipino, constitutionally designated alongside English as an official language" },
    { label: "Core region", value: "Metro Manila, CALABARZON, Central Luzon, and MIMAROPA" },
    { label: "Writing", value: "Modern Latin alphabet; Baybayin has historical and contemporary cultural use" },
    { label: "Signature grammar", value: "Philippine-type voice, aspect-rich verbs, case-marking particles, and linkers" }
  ],
  introduction: cited(
    "Tagalog is a Central Philippine language in the Austronesian family, rooted in Manila and neighboring parts of Luzon. Tagalog-speaking communities also live elsewhere in the Philippines and in the Filipino diaspora, where family speech may share space with other languages. In the 2020 Philippine census, 10.52 million households reported Tagalog as the language generally spoken at home; that figure counts households, not individual speakers.\n\nTagalog provides the main structure of Filipino, the Philippines' national language and one of its official languages alongside English. The names often overlap in everyday use, while the constitution calls for Filipino to develop using other Philippine languages as well. That national role sits alongside the country's many other home languages, including Cebuano, Ilocano, and Hiligaynon.\n\nToday's Tagalog is usually written in Latin letters. Earlier writers used Baybayin, a Philippine script documented in Tagalog texts by the mid-1500s. In Baybayin, a consonant sign carries an a sound unless a mark changes it, so its letters work differently from the Latin alphabet now seen in books and messages.",
    "psa-language",
    "constitution",
    "glottolog",
    "unicode-baybayin",
    "wiki-tagalog"
  ),
  origins: {
    overview: cited(
      "Tagalog belongs to the Austronesian family. Its closer relatives include other Central Philippine languages, while more distant relatives stretch across Island Southeast Asia and the Pacific. The familiar explanation of its name links tagá-ilog to people “from the river”; that short etymology cannot capture the full history of Tagalog communities.\n\nBefore Spanish colonization, people around Manila Bay and southern Luzon traded across a multilingual maritime region. Some used writing traditions now grouped under Baybayin. Spanish rule brought Christianity, colonial institutions, print, and many loanwords; missionaries also recorded Tagalog in grammars and dictionaries.\n\nAmerican colonial schooling later strengthened English. Tagalog kept its inherited grammatical structure while speakers adapted words, scripts, and public uses over centuries of contact.",
      "wiki-tagalog",
      "glottolog",
      "unicode-baybayin"
    ),
    timeline: [
      {
        period: "Before the 16th century",
        event: cited(
          "Tagalog-speaking communities around Manila Bay and neighboring river and lake systems traded within multilingual maritime Southeast Asia. Indic, Malay, Chinese, and Arabic-linked cultural vocabulary reflects networks rather than one simple source. Baybayin and related Philippine scripts belonged to the wider Brahmic script family.",
          "wiki-tagalog",
          "unicode-baybayin"
        )
      },
      {
        period: "16th–19th centuries",
        event: cited(
          "Spanish colonial rule transformed institutions and vocabulary. Religious works appeared in Tagalog and Baybayin as well as Roman letters; missionaries analyzed the language, and the Vocabulario de la lengua tagala became a major lexicographic record. Spanish loans were reshaped by Tagalog sound patterns rather than copied unchanged.",
          "wiki-tagalog",
          "wiki-vocabulario"
        )
      },
      {
        period: "1890s–1930s",
        event: cited(
          "Independence-era writing and journalism expanded Tagalog’s public range. Under American colonial rule, English grew through mass education. The 1935 Constitution called for a national language based on an existing native language, and officials selected Tagalog in 1937, a choice that also drew regional criticism.",
          "kwf-history",
          "wiki-filipino"
        )
      },
      {
        period: "1959–1987",
        event: cited(
          "The national language was called Pilipino from 1959. The 1973 constitutional period promoted Filipino, and the 1987 Constitution named Filipino and English as official languages while describing Filipino as a language to be developed and enriched from Philippine and other languages. That wording matters: Filipino is not supposed to make other Philippine languages disappear.",
          "kwf-history",
          "constitution"
        )
      },
      {
        period: "Broadcast era to the digital present",
        event: cited(
          "Manila-centered film, radio, television, popular music, schooling, labor migration, and social platforms greatly widened comprehension. Contemporary usage includes formal Filipino, regionally inflected forms, dense English code-switching, and renewed public interest in Baybayin, all alongside continuing use of other Philippine languages.",
          "kwf-filipino",
          "psa-language"
        )
      }
    ],
    contactHistory: cited(
      "Tagalog words record several kinds of contact. Sanskrit-linked mukha “face” and guro “teacher” reached the region through older networks. Hokkien contributed food and trade terms, Spanish gave words such as kutsilyo “knife,” and English supplies many current technical terms.\n\nSpeakers can place borrowed roots inside Tagalog verb forms: mag-drive “to drive” and nag-text “texted.” They also switch between Tagalog and English within a conversation. The choice may fit the audience, topic, joke, or setting.",
      "wiki-tagalog",
      "kwf-orthography"
    ),
    standardization: cited(
      "Filipino is the national language and draws its main structure from Tagalog. Tagalog also names a regional language with its own history and local varieties. People often use the names interchangeably, while public institutions use Filipino for a nationwide standard that can grow through other Philippine languages.\n\nThe 1987 Constitution names Filipino and English as official languages. It also recognizes regional languages as auxiliary official languages in their regions. In practice, Manila-centered Filipino still carries political weight, and speakers of Cebuano, Ilocano, Hiligaynon, and other languages have questioned Tagalog's privileged role.",
      "kwf-history",
      "kwf-filipino",
      "constitution"
    )
  },
  variants: {
    overview: cited(
      "Manila speech strongly influences broadcast and school Filipino, but it cannot stand for every Tagalog variety. Speakers in Batangas, Bulacan, Quezon, and other areas use local words, rhythms, and constructions. Listen for these differences before treating a familiar Manila form as the only natural choice.\n\nMany people who speak Filipino also grew up with Cebuano, Ilocano, Hiligaynon, Waray, or another language. Diaspora families add further patterns of language use. Taglish covers many ways of switching between Tagalog and English, from a borrowed word to a whole clause.",
      "wiki-tagalog",
      "psa-language"
    ),
    items: [
      {
        name: "Metro Manila Filipino/Tagalog",
        note: cited("Manila speech strongly influences school and broadcast Filipino. In daily conversation, speakers also borrow and switch between languages as people move into and through the city.", "wiki-tagalog", "kwf-filipino")
      },
      {
        name: "Southern Tagalog varieties",
        note: cited("Batangas, Quezon, Marinduque, Laguna, Cavite, and Mindoro have their own local patterns. A listener may hear differences in particles, vocabulary, and rhythm across these provinces.", "wiki-tagalog")
      },
      {
        name: "Central Luzon Tagalog",
        note: cited("People in Bulacan, Bataan, Nueva Ecija, and neighboring areas use local Tagalog forms. Contact with nearby languages and movement toward Manila also shape what speakers hear.", "wiki-tagalog")
      },
      {
        name: "Formal Filipino",
        note: cited(
          "Used in education, public communication, journalism, and ceremonial contexts. Its vocabulary may favor institutional coinages or carefully selected native forms that sound marked in casual conversation, while the constitutional project invites enrichment from other Philippine languages.",
          "constitution",
          "kwf-filipino"
        )
      },
      {
        name: "Taglish and diaspora speech",
        note: cited("English–Tagalog switching takes different forms in a Manila meeting, a family chat abroad, or a comedy sketch. Heritage learners can listen for the patterns their own relatives use instead of treating every English word as a mistake.", "wiki-tagalog")
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "The alphabet will look familiar to an English reader. The surprises come when ordinary spelling leaves stress and a final glottal stop unmarked. Both can change which word a listener hears, so learn a word from audio as well as print.\n\nMany older loans fit Tagalog sound patterns, while newer English loans may keep unfamiliar consonant clusters. Regional and casual speech can differ from a careful recorded model.",
      "wiki-tagalog",
      "kwf-orthography"
    ),
    script: "Latin alphabet; dictionary accents can mark stress and final glottal stop",
    soundSystem: cited(
      "Tagalog has five core vowels: /a e i o u/. The letters ng write one consonant, /ŋ/, even at the start of ngayon “now.” A glottal stop is the brief catch in the throat that speakers can make before or after a vowel.\n\nOrdinary spelling hides some final glottal stops and stress differences. Dictionaries can distinguish súka “vomit” from sukà “vinegar.” Listen also for lighter p, t, and k sounds than those at the start of English pie, tie, and kite.",
      "wiki-tagalog",
      "kwf-orthography"
    ),
    prosody: cited(
      "Stress usually falls on the next-to-last or last syllable, and moving it can change a word. Dictionaries may mark stress and a final glottal stop with accents; ordinary writing usually does not. Listen before trusting an unaccented spelling.\n\nThe question “Kumain na ba siya?” asks whether someone has eaten already. The particles na and ba follow the verb. Practice the question as one rhythmic unit.",
      "wiki-tagalog",
      "kwf-dictionary"
    ),
    learnerTraps: [
      "Pronouncing initial ng as two sounds instead of one /ŋ/ consonant",
      "Ignoring stress because it is normally unwritten",
      "Dropping final glottal stops that distinguish otherwise similar words",
      "Giving p, t, and k strong English aspiration",
      "Reading every Spanish-looking loan with modern Spanish pronunciation"
    ],
    sampleWords: [
      { original: "ngayon", transliteration: "nga-YON", translation: "now", note: "Begins with the single sound /ŋ/, like the end of English sing." },
      { original: "batà", transliteration: "BA-ta'", translation: "child", note: "The final glottal stop distinguishes this from báta “robe,” which lacks it; dictionary accents show the difference." },
      { original: "súka", transliteration: "SU-ka", translation: "vomit", note: "Compare sukà “vinegar”; accents appear in dictionaries, not usually in messages." },
      { original: "pag-ibig", transliteration: "pag-I-big", translation: "love", note: "Keep the three syllables clear and avoid reducing unstressed vowels to English schwa." },
      { original: "kumain", transliteration: "ku-MA-in", translation: "ate; has eaten", note: "The adjacent a and i belong to separate syllables after the -um- infix." },
      { original: "trabaho", transliteration: "tra-BA-ho", translation: "work; job", note: "A Spanish loan fully at home in Tagalog pronunciation and morphology." }
    ]
  },
  writing: {
    overview: cited(
      "Modern Tagalog uses Latin letters. The Filipino alphabet has 28 letters, including ones used for loans, names, and other Philippine languages. Everyday spelling usually leaves stress and final glottal stops unmarked.\n\nThe marker ng is pronounced nang, while plural mga is often pronounced manga. Read edited texts to learn hyphens and standard forms, then compare them with messages, where spelling may be looser.",
      "kwf-orthography",
      "wiki-tagalog"
    ),
    primaryScript: "Latin alphabet (Alpabetong Filipino)",
    romanization: "No separate romanization is needed. Pronunciation aids in this guide capitalize the stressed syllable; dictionaries use diacritics more precisely.",
    spellingNorms: cited(
      "The KWF writing manual weighs sound-based spelling against established forms. Spanish loans such as kutsara and sapatos use adapted spelling, while newer technical terms may keep foreign letters.\n\nThe marker ng shows relationships such as possession and a participant outside the ang phrase. Nang has other jobs, including linking an action to a manner or another clause. Check a current dictionary when a spelling choice is disputed.",
      "kwf-orthography",
      "kwf-dictionary"
    ),
    styleNotes: [
      "Sentence-initial words and proper names are capitalized; ordinary language names and demonyms follow Filipino editorial conventions rather than English capitalization automatically.",
      "The apostrophe can show omitted material in colloquial forms such as ’di for hindi, while hyphens often separate affixes from acronyms, numerals, or foreign expressions.",
      cited(
        "Baybayin is an abugida: consonant signs carry an inherent vowel modified by marks. It is culturally important and encoded in Unicode, but it is not a drop-in substitute for modern spelling and is not the ordinary script of contemporary Tagalog publishing.",
        "unicode-baybayin"
      )
    ]
  },
  grammar: {
    overview: cited(
      "Tagalog speakers build sentences from roots, verb affixes, noun markers, pronouns, and small conversational particles. A verb form helps select which participant the sentence treats as its central, ang-marked phrase. Linguists call this pattern voice or focus; it covers more choices than English active and passive.\n\nCompare whole sentences instead of learning an affix from an English gloss alone. The person doing an action, the thing affected, and the surrounding conversation all help shape the form a speaker chooses.",
      "uh-grammar",
      "uh-voice",
      "seasite",
      "wiki-grammar"
    ),
    typologicalProfile: cited(
      "A Tagalog clause often puts the description first: Kumakain ang bata “The child is eating,” Masarap ang sopas “The soup is delicious,” or Guro si Ana “Ana is a teacher.” These ordinary present-tense descriptions need no word equivalent to English is.\n\nMarkers show how the parts of a clause relate, so speakers can change the order for a reason. The ay construction puts a topic first, often in formal or contrastive speech. It is one option among natural sentence patterns.",
      "wiki-grammar",
      "seasite"
    ),
    morphology: cited(
      "Speakers add pieces to a root and sometimes repeat a syllable. From sulat “write,” they can build sumulat “wrote,” sumusulat “is writing,” susulat “will write,” and sinulat “wrote it.” The repeated su in sumusulat and susulat helps mark how the action unfolds.\n\nOther forms change the job of the word: manunulat means “writer,” while pagsusulat names the activity of writing. Each root favors particular patterns. Learn its common forms inside complete sentences.",
      "uh-grammar",
      "wiki-grammar"
    ),
    syntax: cited(
      "The small words ang, ng, and sa mark different relationships between a common noun and the rest of a sentence. Names have a related set: si, ni, and kay. Pronouns change form too, so “I” can be ako or ko depending on the construction.\n\nTagalog distinguishes tayo “we, including you” from kami “we, excluding you.” A possessor often follows its noun, as in bahay ko “my house.” The linker joins a modifier to another word: magandang araw “beautiful day,” but mabait na tao “kind person.”",
      "seasite",
      "wiki-grammar"
    ),
    advancedPainPoints: [
      "Choosing voice from discourse context rather than translating English active and passive mechanically",
      "Learning which affix set a root naturally selects and how derivation changes meaning",
      "Placing multiple pronouns and particles in an idiomatic clitic order",
      "Distinguishing ng from nang in edited writing",
      "Following rapid Taglish while noticing which language supplies the clause frame"
    ],
    topics: [
      {
        title: "Actor voice and undergoer voice",
        body: cited(
          "An actor-voice form such as bumili makes the buyer the ang-marked participant. In Binili ng babae ang isda, the fish receives ang instead. Both sentences describe the woman buying fish, and both can use an English active translation.\n\nDifferent verb affixes can center an actor, affected thing, place, beneficiary, or instrument. Linguists use labels such as actor voice and undergoer voice for these choices. Each root has its own common patterns, so learn the forms in sentences.\n\nThe English article a or the helps translate each scene; it does not select a Tagalog verb form on its own.",
          "uh-grammar",
          "uh-voice",
          "wiki-grammar"
        ),
        example: "Bumili ang babae ng isda. / Binili ng babae ang isda.",
        exampleTranslation: "The woman bought fish. / The woman bought the fish."
      },
      {
        title: "Aspect rather than simple tense",
        body: cited(
          "Tagalog verbs show whether an action is completed, ongoing or habitual, or still contemplated. With the root kain “eat,” compare kumain, kumakain, and kakain. A time word can place any of these in a wider timeline.\n\nSpeakers often repeat part of a root to make an aspect form. Linguists call that reduplication. The exact pattern changes with the verb’s affix class.",
          "uh-grammar",
          "wiki-grammar"
        ),
        example: "Kumakain siya ngayon, pero kumain na ako.",
        exampleTranslation: "She or he is eating now, but I have already eaten."
      },
      {
        title: "Markers, names, and pronoun sets",
        body: cited(
          "Ang marks the central common-noun phrase in a clause. Ng marks other participants or a possessor, while sa often marks a place or recipient. Names take a related set: si, ni, and kay.\n\nThese words do not map neatly onto English the, of, and to. Pronouns reflect similar relationships, which is why English I can appear as ako or ko.",
          "seasite",
          "wiki-grammar"
        ),
        example: "Ibinigay ni Liza kay Ben ang libro ko.",
        exampleTranslation: "Liza gave my book to Ben."
      },
      {
        title: "Inclusive and exclusive ‘we’",
        body: "Tayo includes the person addressed; kami excludes them. This grammatical distinction prevents a common social ambiguity in English. Pupunta tayo means the listener is invited or included, while Pupunta kami reports that my group will go without necessarily including the listener.",
        example: "Kakain tayo mamaya; naghihintay na ang mga kaibigan natin.",
        exampleTranslation: "We—including you—will eat later; our friends are already waiting."
      },
      {
        title: "Linkers inside phrases",
        body: "A linker joins a describing word to what it describes. After a vowel it often attaches as -ng: maganda + bahay becomes magandang bahay. After most consonants it is na, as in tahimik na lugar “quiet place.”\n\nThe same linker appears in gusto kong matuto “I want to learn.” Learn it with whole phrases because leaving it out can change how the parts connect.",
        example: "Naghahanap ako ng tahimik na lugar na mapag-aaralan.",
        exampleTranslation: "I’m looking for a quiet place where I can study."
      },
      {
        title: "Particles and respectful speech",
        body: "Po and its response form opo index respect, especially toward elders, customers, or people with institutional authority, but relationships and regional norms matter. Other particles manage shared knowledge: ba marks a question, na signals “already/now,” pa “still/yet/more,” pala a realization, daw reported information, and naman a wide range of contrastive or softening meanings. Their best translation changes with the scene.",
        example: "Tapos na po ba kayo? — Hindi pa po.",
        exampleTranslation: "Are you finished? — Not yet. (respectful)"
      },
      {
        title: "Existence, possession, and negation",
        body: "May or mayroon can say that something exists or that someone has it; wala says it is absent. Hindi negates many descriptions and statements, while huwag makes a negative command.\n\nHindi ako pagod means “I’m not tired,” but Wala akong pera means “I have no money.” The -ng in akong links ako to the noun phrase that follows.",
        example: "May oras ka ba bukas? Wala akong pasok.",
        exampleTranslation: "Do you have time tomorrow? I don’t have work/classes."
      },
      {
        title: "Questions without English inversion",
        body: "Yes/no questions commonly add ba near the beginning rather than reversing a subject and auxiliary. Content words include sino “who,” ano “what,” saan “where,” kailan “when,” bakit “why,” and paano “how.” The answer expected by a negative question can differ pragmatically from English, so listen to how oo, hindi, and corrective phrases work in real exchanges.",
        example: "Saan ka natutong mag-Tagalog?",
        exampleTranslation: "Where did you learn to speak Tagalog?"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Tagalog has long-standing communities in and around Metro Manila, southern Luzon, and nearby islands. Filipino is also a nationwide language of school, media, and communication between people with different first languages.\n\nThe 2020 census counted households by the language generally spoken at home. Its Tagalog figure does not count everyone who can speak Filipino or tell us how many people learned Tagalog first. A family may use another Philippine language at home and Filipino in a wider setting.",
      "psa-language",
      "wiki-tagalog"
    ),
    regions: [
      { place: "Metro Manila", note: cited("A center of media, education, migration, and many languages. Manila usage strongly influences the national standard.", "wiki-tagalog", "kwf-filipino") },
      { place: "CALABARZON and neighboring Tagalog provinces", note: cited("Cavite, Laguna, Batangas, Rizal, and Quezon form part of the Tagalog-speaking heartland. Local speech varies across them.", "wiki-tagalog") },
      { place: "Central Luzon and MIMAROPA", note: cited("Tagalog shares these regions with Kapampangan, Sambalic, Mangyan, and other languages. A simple language map cannot show every local household or community.", "wiki-tagalog", "psa-language") },
      { place: "The wider Philippines", note: cited("Schools, media, and people speaking across regional language lines use Filipino throughout the country. Census data also records many different home languages.", "psa-language", "constitution") },
      { place: "Global diaspora", note: cited("Families abroad use Tagalog and Filipino in homes, community groups, media, and online conversation. A heritage learner may understand family speech more easily than formal writing.", "wiki-tagalog") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "English-speaking learners can recognize the alphabet and many borrowed words early on. The harder work is learning to choose a verb form and noun markers for a whole scene instead of translating an English sentence piece by piece. Voice, aspect, and particles appear in ordinary conversation, so practice them together.\n\nHeritage learners may already understand family speech. They may want separate help with spelling, formal vocabulary, or producing verb forms. Their starting point differs from that of a textbook beginner.",
      "uh-grammar",
      "kwf-orthography"
    ),
    easierAspects: [
      "A familiar Latin alphabet and mostly transparent sound-to-letter relationships",
      "No grammatical gender agreement and no articles matching English a/the",
      "Many recognizable English and Spanish loans in urban conversation",
      "Abundant music, film, television, social video, and diaspora speakers",
      "Predicate patterns that become productive once learned as complete frames"
    ],
    hardAspects: [
      "A voice system with no neat one-to-one English equivalent",
      "Large families of affixes whose meaning depends partly on the root",
      "Unwritten lexical stress and final glottal stops",
      "Several marker and pronoun sets plus conventional clitic order",
      "A wide gap between controlled textbook Tagalog and rapid, code-switched speech"
    ],
    plateauRisks: [
      "Using only actor voice because it feels closest to English",
      "Memorizing root translations without their common affixes and sentence frames",
      "Avoiding Taglish so completely that everyday media remains opaque",
      "Speaking around particles and therefore sounding blunt or missing attitude",
      "Letting fluent relatives answer in English instead of negotiating Tagalog time"
    ],
    workload: "Combine a structured course with repeated listening and regular conversation. For each new root, save a few natural sentences that show its common affixes and markers.\n\nAsk a speaker to recast a short retelling, then keep your version beside theirs. These comparisons show which forms people choose in context."
  },
  advancedLearning: {
    strategy: cited(
      "At intermediate level, take twenty seconds of a drama or interview and write down what you hear. Mark the verb form and each ang, ng, or sa phrase. Then retell the scene with a different participant in the ang phrase, and ask a speaker whether that version fits the context.\n\nKeep examples from careful Filipino, relaxed Tagalog, regional speech, and Taglish in separate notes. Read edited prose for spelling and formal vocabulary while continuing to listen to spontaneous speech.",
      "uh-grammar",
      "seasite"
    ),
    mediaPractice: "News offers careful Filipino; dramas and interviews offer more conversational turns. Watch once for the story, again with subtitles, then repeat a short exchange aloud. Songs can help you remember phrases, though lyrics may bend ordinary syntax.\n\nIf you are learning for family conversation, ask relatives which words and honorifics they use. With their consent, record short stories and build a personal collection of expressions that matter at home.",
    dictionariesAndCorpora: cited(
      "Look for a dictionary entry that marks stress, a final glottal stop, and an example sentence. The KWF dictionary helps with standard spelling and definitions; a learner dictionary can make quick searches easier. Cross-check subtle grammar with a fuller reference.\n\nThe University of Hawai‘i lessons explain verb and marker patterns. Universal Dependencies has annotated Tagalog sentences for advanced analysis. Check the genre behind any corpus example before treating it as a model for conversation.",
      "kwf-dictionary",
      "uh-grammar",
      "seasite",
      "ud-tagalog"
    ),
    resources: [
      { type: "course", title: "University of Hawai‘i Filipino Grammar Topics", url: "https://www.hawaii.edu/filipino/Grammar.html", level: "all", description: "University lessons on aspect, voice, affixes, and complete examples." },
      { type: "course", title: "NIU SEAsite Tagalog Markers", url: "https://seasite.niu.edu/trans/tagalog/Grammar%201/Markers/markersintro.htm", level: "beginner", description: "An older lesson that introduces ang, ng, and sa with examples. Its terminology needs comparing with a fuller grammar." },
      { type: "dictionary", title: "Diksiyonaryo.ph", url: "https://diksiyonaryo.ph/", level: "all", description: cited("The online KWF dictionary gives Filipino definitions, spelling, stress, and word history. Reading its entries in Filipino offers practice for advanced learners.", "kwf-dictionary") },
      { type: "corpus", title: "Universal Dependencies Tagalog treebanks", url: "https://universaldependencies.org/tl/", level: "advanced", description: cited("Annotated Tagalog sentence collections support grammatical and computational exploration; users should check each treebank’s genre and license.", "ud-tagalog") },
      { type: "book", title: "Tagalog for Beginners (University of Hawai‘i Press)", url: "https://manifold.uhpress.hawaii.edu/projects/tagalog-for-beginners", level: "beginner", description: cited("Read the full university textbook online or download it. Its sequenced lessons and pronunciation drills make a clear starting point, though its examples reflect an older edition.", "uh-book") }
    ]
  },
  wordsAndTexts: {
    overview: "Particles such as pala can show that a speaker has just realized something; daw can mark reported information. Kin terms also reach beyond a narrow biological family. A dictionary gloss rarely captures the whole social setting.\n\nTagalog writing includes riddles and proverbs, devotional works, independence-era prose, poetry, komiks, fiction, and scripts. Read an edited story beside a conversation or video transcript. Each shows choices that the other leaves out.",
    notableWords: [
      { term: "kilig", meaning: "a flutter of romantic excitement", note: "Often used for the delighted thrill caused by a romantic moment, whether one’s own or observed in a story. English descriptions tend to explain a scene that Tagalog names quickly." },
      { term: "gigil", meaning: "an intense urge to squeeze, pinch, or act from overwhelming feeling", note: "Commonly triggered by cuteness or exasperation. It is not simply anger; context and facial expression determine whether it is affectionate or frustrated." },
      { term: "bayanihan", meaning: "communal cooperation", note: "Frequently symbolized by neighbors carrying a house together. Modern use can inspire real collective action, but ceremonial praise should not hide who actually performs unpaid labor." },
      { term: "kapwa", meaning: "shared self; fellow person", note: "More relational than a generic “other.” It appears in philosophical and psychological discussions as well as the everyday kapwa-tao, one’s fellow human being." },
      { term: "pasalubong", meaning: "a gift brought home from a trip", note: "The object may be food or a souvenir, but the practice matters: travel is folded back into relationships through something carried home." },
      { term: "pala", meaning: "particle marking discovery or realization", note: "In Ikaw pala! it conveys something like “Oh, it’s you!” Its force belongs to the speaker’s changed state of knowledge, not a fixed dictionary translation." },
      { term: "pakikipagkapwa", meaning: "engaging with others as fellow persons", note: "Its stacked morphology shows how Tagalog roots and affixes package an ethical social process into one word." }
    ],
    loanwordLayers: cited(
      "Spanish-derived oras “time,” mesa “table,” and sapatos “shoes” now feel at home in Tagalog. English roots can also take Tagalog affixes: nag-email, mag-meeting, i-print.\n\nOlder exchange with Chinese, Malay, and other Philippine languages left further word layers. Writers and language institutions sometimes coin or revive words, while everyday adoption depends on speakers.",
      "wiki-tagalog",
      "kwf-orthography"
    ),
    idioms: [
      { original: "balat-sibuyas", translation: "overly sensitive", note: "Literally “onion-skinned”; used for someone easily hurt or offended. Tone can be teasing or dismissive." },
      { original: "makapal ang mukha", translation: "shameless; brazen", note: "Literally “the face is thick,” a strong judgment about social nerve rather than appearance." },
      { original: "butas ang bulsa", translation: "broke; spending heavily", note: "Literally “the pocket has a hole,” suggesting money disappearing through a tear." },
      { original: "nasa Diyos ang awa, nasa tao ang gawa", translation: "hope or mercy is with God, but action is with people", note: "Literally “with God is mercy; with people is action.” It invokes faith while insisting that people still have work to do." },
      { original: "pagputi ng uwak", translation: "never", note: "Literally “when the crow turns white,” an impossible condition." }
    ],
    textGenres: [
      "bugtong (riddles), salawikain (proverbs), and oral storytelling",
      "the awit and korido metrical narrative traditions",
      "independence-era essays, novels, and vernacular journalism",
      "modern poetry, spoken word, komiks, romance, and speculative fiction",
      "screenplays, teleserye dialogue, OPM lyrics, podcasts, and social video"
    ]
  },
  relationships: {
    overview: cited(
      "Tagalog shares inherited roots and grammatical patterns with other Philippine languages. More distant Austronesian relatives include Malay, Indonesian, Māori, Hawaiian, and Malagasy. A few shared words across this family can be striking, but they do not make the languages mutually intelligible.\n\nSpanish and English contributed many loans through contact. Their visible words tell a different story from Tagalog’s family ancestry or Filipino’s national role.",
      "glottolog",
      "wiki-tagalog"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Speakers can show respect with po or opo, titles such as Ate and Kuya, tone of voice, and the choice of language. Watch how the family or community you are speaking with uses these forms. A fixed rule will miss much of the relationship.\n\nFilipino media reaches across the country, while Tagalog arts have their own local histories. Read a poem aloud, notice how a comedian times a particle, and compare a news report with a barkada group chat. Look for work in Cebuano, Hiligaynon, Ilocano, Waray, Kapampangan, and other languages as well.",
  resources: [
    { type: "course", title: "University of Hawai‘i Filipino Program", url: "https://www.hawaii.edu/filipino/", level: "all", description: "University-hosted language and literature materials with focused grammar explanations and cultural context." },
    { type: "course", title: "NIU SEAsite Tagalog Markers", url: "https://seasite.niu.edu/trans/tagalog/Grammar%201/Markers/markersintro.htm", level: "beginner", description: "An older grammar lesson on the ang, ng, and sa markers, with linked follow-up sections." },
    { type: "dictionary", title: "Diksiyonaryo.ph", url: "https://diksiyonaryo.ph/", level: "all", description: cited("A KWF dictionary for definitions, standard forms, accents, and etymological information.", "kwf-dictionary") },
    { type: "dictionary", title: "Tagalog.com Dictionary", url: "https://www.tagalog.com/dictionary/", level: "all", description: "A convenient learner dictionary with example and audio features; verify difficult senses against KWF material and native context." },
    { type: "media", title: "ABS-CBN News", url: "https://news.abs-cbn.com/", level: "intermediate", description: "A large source of current Filipino reporting and video. Compare headlines, written reports, and interviews to hear register differences." },
    { type: "media", title: "GMA Public Affairs", url: "https://www.gmanetwork.com/news/publicaffairs/", level: "intermediate", description: "Documentary, current-affairs, and human-interest material offering formal narration alongside regional and conversational speech." },
    { type: "corpus", title: "Universal Dependencies Tagalog", url: "https://universaldependencies.org/tl/", level: "advanced", description: cited("An entry point to syntactically annotated Tagalog datasets for advanced learners and researchers.", "ud-tagalog") },
    { type: "book", title: "Tagalog for Beginners (University of Hawai‘i Press)", url: "https://manifold.uhpress.hawaii.edu/projects/tagalog-for-beginners", level: "beginner", description: cited("A free online textbook with lessons, pronunciation drills, and grammar notes. Its original edition is older, so pair it with current conversation and media.", "uh-book") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Kumusta?", translation: "How are you? / Hello.", usageNote: "Common and friendly; Kamusta is also widespread in informal spelling." },
    { original: "Magandang umaga po.", translation: "Good morning.", literalMeaning: "Respectful: beautiful morning", usageNote: "Po adds respect; remove it among close peers if appropriate." },
    { original: "Salamat.", translation: "Thank you." },
    { original: "Maraming salamat po.", translation: "Thank you very much.", literalMeaning: "Many thanks (respectful)" },
    { original: "Walang anuman.", translation: "You’re welcome.", literalMeaning: "It’s nothing." },
    { original: "Paumanhin.", translation: "Excuse me / I’m sorry.", usageNote: "Formal or careful; Sorry and Pasensiya na are common in conversation." },
    { original: "Hindi ko naiintindihan.", translation: "I don’t understand." },
    { original: "Puwede bang pakiulit?", translation: "Could you please repeat that?", usageNote: "A polite request; add po when a more respectful tone fits." },
    { original: "Ano ang ibig sabihin nito?", translation: "What does this mean?", literalMeaning: "What is the meaning of this?" },
    { original: "Saan ang sakayan?", translation: "Where is the place to catch a ride?", usageNote: "Ask more specifically for the jeep, bus, train, or ferry when needed." },
    { original: "Magkano po ito?", translation: "How much is this?", usageNote: "Respectful and natural in a shop or market." },
    { original: "Kain tayo!", translation: "Let’s eat!", literalMeaning: "We-including-you eat", usageNote: "An invitation whose tayo explicitly includes the listener." },
    { original: "Ingat ka.", translation: "Take care.", literalMeaning: "You be careful", usageNote: "A warm everyday farewell." },
    { original: "Sige, mamaya na lang.", translation: "Okay, let’s just do it later.", usageNote: "Na lang packages a choice or fallback; context supplies the omitted action." }
  ],
  sources: [
    { id: "psa-language", title: "Tagalog is the Most Widely Spoken Language at Home (2020 Census of Population and Housing)", url: "https://psa.gov.ph/content/tagalog-most-widely-spoken-language-home-2020-census-population-and-housing", publisher: "Philippine Statistics Authority", publishedAt: "2023-03-07", accessedAt: "2026-07-10" },
    { id: "constitution", title: "1987 Constitution of the Republic of the Philippines, Article XIV", url: "https://elibrary.judiciary.gov.ph/thebookshelf/showdocs/3/353", publisher: "Supreme Court E-Library", publishedAt: "1987-02-02", accessedAt: "2026-09-27" },
    { id: "kwf-history", title: "Kasaysayan at Mandato", url: "https://kwf.gov.ph/kasaysayan-at-mandato/", publisher: "Komisyon sa Wikang Filipino", accessedAt: "2026-07-10" },
    { id: "kwf-filipino", title: "The Language that is Filipino", url: "https://kwf.gov.ph/the-language-that-is-filipino/", publisher: "Komisyon sa Wikang Filipino", accessedAt: "2026-07-10" },
    { id: "kwf-orthography", title: "Manwal sa Masinop na Pagsulat", url: "https://kwf.gov.ph/wp-content/uploads/MMP_Full.pdf", publisher: "Komisyon sa Wikang Filipino", accessedAt: "2026-07-10" },
    { id: "kwf-dictionary", title: "Diksiyonaryo ng Wikang Filipino", url: "https://diksiyonaryo.ph/", publisher: "Komisyon sa Wikang Filipino", accessedAt: "2026-07-10" },
    { id: "uh-grammar", title: "Filipino Grammar Topics: Verb Aspect", url: "https://www.hawaii.edu/filipino/Grammar_Topics/Grammar_2-1.html", publisher: "University of Hawai‘i at Mānoa Filipino and Philippine Literature Program", accessedAt: "2026-09-27" },
    { id: "uh-voice", title: "Filipino Grammar Topics: Focus", url: "https://www.hawaii.edu/filipino/Grammar_Topics/Grammar_2-2.html", publisher: "University of Hawai‘i at Mānoa Filipino and Philippine Literature Program", accessedAt: "2026-09-27" },
    { id: "seasite", title: "Tagalog Grammar: Markers and Focus", url: "https://seasite.niu.edu/trans/tagalog/Grammar%201/Markers/markersintro.htm", publisher: "Northern Illinois University SEAsite", accessedAt: "2026-07-10" },
    { id: "glottolog", title: "Tagalog", url: "https://glottolog.org/resource/languoid/id/taga1280", publisher: "Glottolog 5.2", accessedAt: "2026-07-10" },
    { id: "unicode-baybayin", title: "Unicode Standard, Chapter 17: Indonesia and Oceania (Tagalog/Baybayin)", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-17/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "ud-tagalog", title: "Universal Dependencies: Tagalog", url: "https://universaldependencies.org/tl/", publisher: "Universal Dependencies", accessedAt: "2026-07-10" },
    { id: "uh-book", title: "Tagalog for Beginners", url: "https://manifold.uhpress.hawaii.edu/projects/tagalog-for-beginners", publisher: "University of Hawai‘i Press", publishedAt: "1971", accessedAt: "2026-09-27" },
    { id: "wiki-tagalog", title: "Tagalog language", url: "https://en.wikipedia.org/wiki/Tagalog_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-filipino", title: "Filipino language", url: "https://en.wikipedia.org/wiki/Filipino_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-grammar", title: "Tagalog grammar", url: "https://en.wikipedia.org/wiki/Tagalog_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-vocabulario", title: "Vocabulario de la lengua tagala", url: "https://en.wikipedia.org/wiki/Vocabulario_de_la_lengua_tagala", publisher: "Wikipedia", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Tagalog Language Guide: Filipino Grammar, History and Real Usage",
    description: "An in-depth, example-rich guide to Tagalog and Filipino: voice and aspect, pronunciation, Taglish, language policy, culture, phrases, and trusted resources."
  }
} satisfies LanguageGuide;
