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
  summary: "Tagalog is the language of Manila and much of southern Luzon, the principal basis of Filipino, and a vivid medium for family life, argument, comedy, music, cinema, literature, and multilingual urban conversation.",
  family: "Austronesian, Malayo-Polynesian, Philippine, Central Philippine",
  macroRegion: "The Philippines and global Filipino diasporas",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Tagalog turns an everyday event around like a camera: verb forms let speakers frame the doer, the thing affected, a place, or a beneficiary, while particles make conversation warm, tentative, emphatic, teasing, or respectful.",
  hero: {
    imageAlt: "Contemporary Filipino books, handwritten Tagalog, and a phone conversation representing literary and everyday language.",
    callToActionLabel: "Hear Tagalog in use"
  },
  classification: "A Central Philippine Austronesian language and the main structural basis of the national language called Filipino",
  speakerCommunity: "Tagalog has an unusually broad social footprint without being the Philippines’ only major language. It is native to Manila and surrounding Tagalog regions and is learned across the archipelago through school, national media, migration, and work. The 2020 Philippine census counted Tagalog as the language generally spoken at home in 10.52 million households, 39.9 percent of all households; Bisaya/Binisaya, Hiligaynon, Ilocano, Cebuano, Bikol, Waray, Kapampangan, and many other languages remain central to their own communities. Overseas, Tagalog and Filipino connect families in the United States, Canada, the Gulf, Australia, Europe, and elsewhere. A single speaker may use a regional language with grandparents, Tagalog or Filipino with friends, English at work, and a fluid mixture online. That multilingual normality is not background noise: it is part of how the language lives.",
  facts: [
    { label: "Family", value: "Austronesian · Malayo-Polynesian · Central Philippine" },
    { label: "Home use", value: "10.52 million Philippine households in the 2020 census" },
    { label: "National standard", value: "Filipino, constitutionally designated alongside English as an official language" },
    { label: "Core region", value: "Metro Manila, CALABARZON, Central Luzon, and MIMAROPA" },
    { label: "Writing", value: "Modern Latin alphabet; Baybayin has historical and contemporary cultural use" },
    { label: "Signature grammar", value: "Philippine-type voice, aspect-rich verbs, case-marking particles, and linkers" }
  ],
  learnerOverview: "Tagalog becomes far more interesting when it stops being treated as English with Filipino words. The familiar-looking alphabet and many English or Spanish loans give a friendly entrance, but the language organizes events on its own terms. Start with complete scenes: Kumain ako ng mangga “I ate a mango,” then Kinain ko ang mangga “I ate the mango / the mango is what I ate.” The event is similar, but the verb and noun markers frame different participants. Learn these pairings aloud instead of memorizing one English gloss per affix. At the same time, acquire the small words that make real speech human: po for respectful interaction, naman for contrast or soft insistence, pala for newly realized information, and daw for reported information. Ask conversation partners whether a form sounds formal, regional, bookish, or natural among friends. “Filipino” and “Tagalog” overlap heavily in daily usage, but the names also carry institutional and political histories. A learner can say they are studying Tagalog while recognizing Filipino as the national language and respecting the country’s many non-Tagalog languages.",
  origins: {
    overview: cited(
      "Tagalog belongs to the Austronesian family, a vast network extending from Taiwan and Island Southeast Asia across the Pacific and to Madagascar. Its closer relatives are other Central Philippine languages. The name is often explained from tagá-ilog, “from the river,” though labels and communities are older and messier than a neat etymology suggests. Before Spanish colonization, communities around Manila Bay and southern Luzon participated in maritime trade and used writing traditions now grouped under the name Baybayin. Spanish rule after the sixteenth century brought Christianity, colonial administration, printing, and a large loanword layer, but missionaries also produced grammars and dictionaries that preserved early Tagalog material. American rule made English a powerful educational and administrative language. Modern Tagalog therefore carries inherited Austronesian structure through centuries of contact rather than representing either an untouched precolonial relic or a Spanish creole.",
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
          "Revolutionary, nationalist, literary, and journalistic writing expanded Tagalog’s public range. Under American colonial rule, English grew through mass education. The 1935 Constitution called for a national language based on one existing native language, and Tagalog was selected as the basis in 1937—a decision with lasting benefits, debates, and regional resistance.",
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
      "Tagalog vocabulary makes history audible. Sanskrit-linked words such as mukha “face” and guro “teacher” entered through old regional networks; Malay and other Philippine languages contributed or reinforced forms; Hokkien contact is visible in food and trade vocabulary; Spanish supplied thousands of words, from kutsilyo “knife” to Huwebes “Thursday”; English now feeds technology, education, business, and youth slang. Borrowing often triggers creative Tagalog morphology: mag-drive “to drive,” nag-text “texted,” and i-save “save it” place English roots inside Tagalog verb patterns. Code-switching can mark topic, audience, humor, expertise, or social stance. It is not evidence that speakers lack either language.",
      "wiki-tagalog",
      "kwf-orthography"
    ),
    standardization: cited(
      "The safest short account is that Filipino is the national language and is predominantly based on Tagalog, while Tagalog is also the name of a particular historical and regional language. In everyday conversation the labels are often interchangeable, especially abroad, but institutions use Filipino to signal a nationwide, developing standard. The Komisyon sa Wikang Filipino’s mandate includes developing and promoting Filipino and the other languages of the Philippines. Critics have reasonably observed that formal Filipino remains structurally very close to Tagalog and that Manila’s power can marginalize regional languages. Learners should neither pretend the distinction is absolute nor announce that Cebuano, Ilocano, Hiligaynon, Waray, Kapampangan, and others are merely “dialects.”",
      "kwf-history",
      "kwf-filipino",
      "constitution"
    )
  },
  variants: {
    overview: cited(
      "Tagalog varies across place, generation, class, occupation, and situation. Manila speech is influential but not neutral: Batangas, Bulacan, Quezon, Marinduque, and other Tagalog areas preserve vocabulary, intonation, and grammatical preferences that urban learners may initially find unfamiliar. Filipino spoken by people whose first language is Cebuano, Ilocano, Hiligaynon, Waray, or another Philippine language can carry regional sounds and constructions. Diaspora speakers may maintain family vocabulary while shifting toward English-dominant syntax. There is no single percentage of English that turns speech into “Taglish”; code-switching ranges from a borrowed noun to rapid alternation across clauses.",
      "wiki-tagalog",
      "psa-language"
    ),
    items: [
      {
        name: "Metro Manila Filipino/Tagalog",
        note: "The dominant broadcast and educational reference point. Everyday Manila speech often uses English loans and code-switching, reduces some careful distinctions, and draws vocabulary from speakers across the country."
      },
      {
        name: "Southern Tagalog varieties",
        note: "Batangas, Quezon, Marinduque, Laguna, Cavite, and Mindoro do not form one uniform dialect. Batangas is famous for particles and older vocabulary, while island and provincial varieties can preserve locally distinctive rhythm and lexicon."
      },
      {
        name: "Central Luzon Tagalog",
        note: "Bulacan, Bataan, Nueva Ecija, and neighboring areas contain Tagalog speech shaped by contact with Kapampangan, Sambalic, and other languages as well as by migration toward Manila."
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
        note: "English–Tagalog switching is a skilled bilingual practice, not one fixed variety. A Manila professional meeting, a family chat in California, and a comedy sketch may mix languages differently. Heritage learners should ask what relatives actually say rather than policing every English element."
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Tagalog’s consonants and five-vowel system are approachable, but stress and the glottal stop can distinguish words even though ordinary spelling rarely marks them. The modern alphabet also includes letters used in loans and names. Native vocabulary usually favors simple syllables; older Spanish loans were adapted accordingly, while recent English loans may keep clusters. Manila speech can merge or relax contrasts in casual delivery, and regional accents may preserve different patterns. Learn whole recorded words, not just their unmarked spelling.",
      "wiki-tagalog",
      "kwf-orthography"
    ),
    script: "Latin alphabet; dictionary accents can mark stress and final glottal stop",
    soundSystem: cited(
      "The core vowels are /a e i o u/. In many native words e and i, or o and u, reflect historical alternations, though modern loans make all five useful contrasts. The consonant ng represents /ŋ/, including at the beginning of words such as ngayon “now.” Tagalog also contrasts a plain vowel onset with a glottal stop, and many vowel-final words carry an unwritten final glottal stop. Stress can shift meaning: súka “vomit” and sukà “vinegar” differ in both stress and final glottal behavior. The tap or trill r and a clear unaspirated p, t, k help speech sound less English-shaped.",
      "wiki-tagalog",
      "kwf-orthography"
    ),
    prosody: cited(
      "Stress is normally on the penultimate or final syllable and belongs to the lexical identity of a word. Dictionaries may use acute, grave, and circumflex accents to distinguish stress and glottal closure, but everyday writing leaves readers to infer them. Sentence melody carries attitude, and clitic particles tend to gather in the second position of a clause, creating a characteristic rhythmic bundle: Kumain na ba siya? “Has he or she eaten already?” Practice that phrase as a unit rather than giving every word equal English-style stress.",
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
      { original: "báta", transliteration: "BA-ta", translation: "child", note: "Penultimate stress contrasts with batà “bathrobe,” which has final stress and a final glottal stop." },
      { original: "súka", transliteration: "SU-ka", translation: "vomit", note: "Compare sukà “vinegar”; accents appear in dictionaries, not usually in messages." },
      { original: "pag-ibig", transliteration: "pag-I-big", translation: "love", note: "Keep the three syllables clear and avoid reducing unstressed vowels to English schwa." },
      { original: "kumain", transliteration: "ku-MA-in", translation: "ate; has eaten", note: "The adjacent a and i belong to separate syllables after the -um- infix." },
      { original: "trabaho", transliteration: "tra-BA-ho", translation: "work; job", note: "A Spanish loan fully at home in Tagalog pronunciation and morphology." }
    ]
  },
  writing: {
    overview: cited(
      "Modern Tagalog uses the Latin alphabet. The current Filipino alphabet has 28 letters, adding letters needed for loans, names, and other Philippine languages to the older abakada. Spelling is relatively transparent when stress and glottal stops are known, but those two features are normally omitted. The sequences ng and mga deserve special attention: ng is a grammatical marker pronounced nang, while mga marks plurality and is commonly pronounced manga. Hyphens clarify certain affix combinations, reduplication, and forms involving names or foreign words. Natural digital writing often ignores formal niceties, so learners need both edited and conversational models.",
      "kwf-orthography",
      "wiki-tagalog"
    ),
    primaryScript: "Latin alphabet (Alpabetong Filipino)",
    romanization: "No separate romanization is needed. Pronunciation aids in this guide capitalize the stressed syllable; dictionaries use diacritics more precisely.",
    spellingNorms: cited(
      "KWF orthographic guidance balances phonemic spelling with established forms and the realities of borrowing. Older Spanish loans commonly use adapted spellings—kutsara, bintana, sapatos—while newer technical terms may retain foreign letters or compete with localized forms. The marker ng must not be confused with nang: ng marks relationships including non-focused arguments and possession, whereas nang has adverbial and connective functions. Even native writers debate some edge cases, so use a current dictionary rather than treating social-media correction as linguistic authority.",
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
      "Tagalog grammar is built from roots, productive affixes, noun markers, pronoun sets, linkers, and discourse particles. The celebrated voice system is real, but it is not a decorative choice for “emphasis.” A verb form signals which participant has the privileged ang-marked relationship to the clause, and definiteness, affectedness, intention, and discourse context influence the choice. Terminology varies—focus, trigger, voice, pivot—because Tagalog does not fit the active/passive template of English. Learners make progress by comparing complete sentence pairs and observing what speakers choose in context.",
      "uh-grammar",
      "seasite",
      "wiki-grammar"
    ),
    typologicalProfile: cited(
      "Basic clauses are often predicate-initial: verbal Kumakain ang bata “The child is eating,” adjectival Masarap ang sopas “The soup is delicious,” nominal Guro si Ana “Ana is a teacher,” or locative Nasa bahay sila “They are at home.” Tagalog has no obligatory copular verb equivalent to English is in these ordinary present descriptions. Word order is flexible because markers identify grammatical roles, but flexible does not mean random: information structure, weight, pronouns, and style shape what sounds natural. The ay construction places a topic first and is common in formal or contrastive styles, not the default transformation every sentence requires.",
      "wiki-grammar",
      "seasite"
    ),
    morphology: cited(
      "Affixation and reduplication do enormous work. From sulat “write,” speakers build sumulat “wrote,” sumusulat “is writing,” susulat “will write,” sinulat “wrote it,” sulatan “write to/on,” magsulat “write,” manunulat “writer,” and pagsusulat “the activity of writing.” These are not produced by one universal conjugation table: roots have preferred affix classes and meanings can shift with a new voice or derivation. Learn a new verb with its usual actor-voice and undergoer-voice forms, a sentence, and its aspect pattern.",
      "uh-grammar",
      "wiki-grammar"
    ),
    syntax: cited(
      "The markers ang, ng, and sa organize common nouns; si, ni, and kay perform related work with personal names. Pronouns come in matching sets: ako/ko/akin, ikaw/mo/iyo, siya/niya/kaniya, and plural forms that include the important distinction between inclusive tayo “we including you” and exclusive kami “we excluding you.” Short pronouns and particles usually occupy an early clitic cluster, where ordering is conventional. Possessors often follow what they modify: bahay ko “my house.” Modifiers attach through the linker -ng after a vowel or na after most consonants: magandang araw “beautiful day,” mabait na tao “kind person.”",
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
          "Actor-voice affixes such as -um- and mag- make the ang-marked participant the actor. Undergoer-voice forms such as -in-, -an, and i- select an affected thing, location, beneficiary, instrument, or conveyed entity. The labels are a map, not a promise that every root behaves identically. Compare Bumili ang babae ng isda, where the buyer is ang-marked, with Binili ng babae ang isda, where the specific fish is ang-marked. Both translate naturally with English active clauses.",
          "uh-grammar",
          "wiki-grammar"
        ),
        example: "Bumili ang babae ng isda. / Binili ng babae ang isda.",
        exampleTranslation: "The woman bought a fish. / The woman bought the fish."
      },
      {
        title: "Aspect rather than simple tense",
        body: cited(
          "Verbs commonly contrast completed, incompleted, and contemplated events. Time words establish calendar location, while the verb presents the event as finished, ongoing/habitual, or not begun. With kain, kumain is completed, kumakain is incompleted, and kakain is contemplated. Reduplication and affix changes interact, so the pattern must be learned by class rather than applied blindly to every root.",
          "uh-grammar",
          "wiki-grammar"
        ),
        example: "Kumakain siya ngayon, pero kumain na ako.",
        exampleTranslation: "She or he is eating now, but I have already eaten."
      },
      {
        title: "Markers, names, and pronoun sets",
        body: cited(
          "Ang marks the privileged common-noun phrase; ng marks various non-privileged participants and possessors; sa covers locations, directions, recipients, and other obliques. Personal names use si, ni, and kay. These are not interchangeable versions of English the, of, and to. Pronouns encode the same contrasts, which is why one English I appears as ako or ko depending on construction.",
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
        body: "The linker joins modifiers, nouns, numbers, and certain complements. After a vowel it normally attaches as -ng: maganda + bahay becomes magandang bahay. After most consonants it is na: tahimik na lugar. Linkers are not ornamental; omitting one can sound abrupt or alter the structure. The same element appears in gusto kong matuto “I want to learn,” literally connecting my desire and the following action.",
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
        body: "May or mayroon introduces existence or possession, while wala negates it. Hindi negates many predicates and completed or ongoing assertions; huwag forms negative commands. The choice is structural: Hindi ako pagod means “I’m not tired,” but Wala akong pera means “I have no money.” Notice the linker on akong, joining ako to the possessed noun phrase.",
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
      "Tagalog’s historical heartland includes Metro Manila and provinces across southern and central Luzon and nearby islands, but Filipino is used nationwide as a second language and lingua franca. The PSA’s household figure measures the language generally spoken at home, not everyone able to speak it, and should not be converted casually into a count of native speakers. In multilingual cities, speakers may choose Filipino because it is shared while maintaining Cebuano, Ilocano, Hiligaynon, Waray, Tausug, Maranao, or another language at home. Overseas census categories often merge “Tagalog” and “Filipino,” and heritage ability ranges from full literacy to receptive family understanding.",
      "psa-language",
      "wiki-tagalog"
    ),
    regions: [
      { place: "Metro Manila", note: "A major center of media, publishing, education, migration, and linguistic mixing; Manila usage strongly influences the national standard." },
      { place: "CALABARZON and neighboring Tagalog provinces", note: "A large native-speaking heartland including Cavite, Laguna, Batangas, Rizal, and Quezon, with meaningful local variation." },
      { place: "Central Luzon and MIMAROPA", note: "Tagalog coexists with Kapampangan, Sambalic languages, Mangyan languages, and others; migration and language shift make simple maps misleading." },
      { place: "The wider Philippines", note: cited("Filipino functions as a nationwide school, media, and interregional language, but census data shows a richly multilingual home-language landscape.", "psa-language", "constitution") },
      { place: "Global diaspora", note: "Large communities in North America, the Gulf, Australia, Europe, and Asia use Tagalog/Filipino in families, churches, media, community organizations, and transnational online life." }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "For an English-speaking learner, pronunciation and spelling are less forbidding than in many languages, and familiar loanwords create quick wins. The demanding part is learning to package events without forcing them through English subject–verb–object habits. Voice selection, aspect, marker sets, affix classes, and particles interact in every ordinary conversation. The result is not chaotic: it is systematic but semantically rich. Heritage learners may understand family speech well yet need explicit help with spelling, formal vocabulary, or producing verb forms; their path should not be measured against a beginner textbook sequence.",
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
    workload: "A steady year can build warm family conversation and useful media comprehension if study combines structured grammar, repeated listening, and frequent interaction. Advanced control takes longer because learners must acquire not just possible verb forms but speakers’ preferred forms in particular contexts. Record short retellings, have a tutor recast them naturally, and save corrections as paired examples. Ten well-observed sentences around one root will teach more than a page of affix names without context."
  },
  advancedLearning: {
    strategy: cited(
      "At intermediate level, organize study around roots and discourse choices. Take one scene from a drama or vlog, transcribe twenty seconds, label voice and markers, then retell it twice with a different participant as the ang phrase. Ask a speaker whether the reframing is grammatical, natural, and appropriate to the same context—three different questions. Keep separate notes for careful Filipino, relaxed Tagalog, regional expressions, and Taglish. Read edited prose to strengthen spelling and formal vocabulary while continuing to imitate spontaneous audio.",
      "uh-grammar",
      "seasite"
    ),
    mediaPractice: "Use news for deliberate formal Filipino, teleserye and independent cinema for interpersonal language, interviews for long conversational turns, and OPM music for memorable phrases—while remembering that lyrics bend syntax. Watch once for the story, again with Filipino subtitles, then shadow a short exchange. Search the same topic in Filipino and English to notice how writers switch vocabulary by domain. For diaspora goals, record consenting relatives’ stories and build a personal corpus of family-specific words, places, and honorific habits.",
    dictionariesAndCorpora: cited(
      "A dictionary entry is especially valuable when it marks stress, final glottal stop, affix behavior, and example sentences. The KWF online dictionary provides a normative reference; Tagalog.com is convenient for learner searches and audio but should be cross-checked for subtle grammar. The University of Hawai‘i and NIU SEAsite lessons explain verb and marker systems. For advanced computational work, the Leipzig Corpora Collection and Universal Dependencies Tagalog resources provide searchable or annotated data, though a corpus records what its sources contain rather than declaring every form universally natural.",
      "kwf-dictionary",
      "uh-grammar",
      "seasite",
      "ud-tagalog"
    ),
    resources: [
      { type: "course", title: "University of Hawai‘i Filipino Grammar Topics", url: "https://www.hawaii.edu/filipino/Grammar_Topics/Grammar_2-1.html", level: "all", description: "Clear university-hosted lessons on aspect, voice, affixes, and example sentences; useful as a structured grammar spine." },
      { type: "course", title: "NIU SEAsite Tagalog", url: "https://seasite.niu.edu/Tagalog/Tagalog_mainpage.htm", level: "beginner", description: "An older interface containing substantial lessons on markers, focus, pronunciation, and cultural situations." },
      { type: "dictionary", title: "Diksiyonaryo.ph", url: "https://diksiyonaryo.ph/", level: "all", description: cited("The online KWF dictionary is valuable for Filipino definitions, spelling, stress, and word history. Reading definitions in Filipino becomes a useful advanced exercise.", "kwf-dictionary") },
      { type: "corpus", title: "Universal Dependencies Tagalog treebanks", url: "https://universaldependencies.org/tl/", level: "advanced", description: cited("Annotated Tagalog sentence collections support grammatical and computational exploration; users should check each treebank’s genre and license.", "ud-tagalog") },
      { type: "app", title: "Glossika Filipino", url: "https://ai.glossika.com/", level: "beginner", description: cited("Sentence-based listening and repetition can supplement explicit grammar. Discover Discomfort has noted Filipino/Tagalog among Glossika’s less commonly taught offerings; confirm current course availability and pricing before subscribing.", "dd-tools") }
    ]
  },
  wordsAndTexts: {
    overview: "Tagalog’s most revealing words often resist a one-word English substitute because they describe relationships, knowledge, and social texture. Particles show whether information is new, reported, continuing, or politely offered; kin terms extend beyond a narrow biological family; reduplication turns roots into playful, iterative, distributive, or attenuated expressions. Literature ranges from oral forms and devotional texts to revolutionary prose, modernist poetry, comics, romance, speculative fiction, spoken word, online essays, and screenwriting. A learner who reads only institutional Filipino misses the comic timing and intimacy of conversation; one who watches only vlogs misses deliberate literary craft.",
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
      "Loans reveal both chronology and creativity. Spanish-derived oras “time,” mesa “table,” kuwento “story,” and sapatos “shoes” are thoroughly naturalized. English roots can remain visibly foreign while accepting Tagalog morphology: nag-email, mag-meeting, i-print. Chinese-linked culinary and commercial vocabulary, Sanskrit-derived cultural words, and exchange among Philippine languages complicate any simple Spanish-plus-English story. Formal language planners also coin or revive words, but adoption depends on writers and speakers, not etymological purity alone.",
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
      "revolutionary essays, novels, and vernacular journalism",
      "modern poetry, spoken word, komiks, romance, and speculative fiction",
      "screenplays, teleserye dialogue, OPM lyrics, podcasts, and social video"
    ]
  },
  relationships: {
    overview: cited(
      "Tagalog sits inside a dense Philippine linguistic neighborhood. Shared pronouns, numerals, roots, and voice patterns connect it to other Philippine languages, while deeper comparisons link it to Malay, Indonesian, Māori, Hawaiian, Malagasy, and hundreds more across Austronesian. Contact adds a different kind of resemblance: Spanish and English loans may be obvious even where grammar remains characteristically Tagalog. Family relationship, borrowing, and national political status are three separate stories and should not be collapsed.",
      "glottolog",
      "wiki-tagalog"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Respect is grammatical but not reducible to a po button. Po/opo, titles such as Ate and Kuya, kin terms extended to non-relatives, voice quality, humor, and the choice among Tagalog, English, and another Philippine language all position speakers socially. Observe the household you are entering. Filipino media has immense regional reach, yet “Filipino culture” should never be treated as synonymous with Tagalog culture alone. Seek work created in Cebuano, Hiligaynon, Ilocano, Waray, Kapampangan, and other languages too. In Tagalog arts, begin with writers and performers rather than only translated national symbols: read poems aloud, watch how comedy times particles, compare a news report with a barkada group chat, and ask whose Manila or province a character’s voice evokes.",
  resources: [
    { type: "course", title: "University of Hawai‘i Filipino Program", url: "https://www.hawaii.edu/filipino/", level: "all", description: "University-hosted language and literature materials with focused grammar explanations and cultural context." },
    { type: "course", title: "NIU SEAsite Tagalog", url: "https://seasite.niu.edu/Tagalog/Tagalog_mainpage.htm", level: "beginner", description: "Free lessons and drills whose dated design conceals a useful archive of grammar and situational language." },
    { type: "dictionary", title: "Diksiyonaryo.ph", url: "https://diksiyonaryo.ph/", level: "all", description: cited("A KWF dictionary for definitions, standard forms, accents, and etymological information.", "kwf-dictionary") },
    { type: "dictionary", title: "Tagalog.com Dictionary", url: "https://www.tagalog.com/dictionary/", level: "all", description: "A convenient learner dictionary with example and audio features; verify difficult senses against KWF material and native context." },
    { type: "media", title: "ABS-CBN News", url: "https://news.abs-cbn.com/", level: "intermediate", description: "A large source of current Filipino reporting and video. Compare headlines, written reports, and interviews to hear register differences." },
    { type: "media", title: "GMA Public Affairs", url: "https://www.gmanetwork.com/news/publicaffairs/", level: "intermediate", description: "Documentary, current-affairs, and human-interest material offering formal narration alongside regional and conversational speech." },
    { type: "corpus", title: "Universal Dependencies Tagalog", url: "https://universaldependencies.org/tl/", level: "advanced", description: cited("An entry point to syntactically annotated Tagalog datasets for advanced learners and researchers.", "ud-tagalog") },
    { type: "app", title: "Glossika Filipino", url: "https://ai.glossika.com/", level: "beginner", description: cited("A commercial sentence-repetition option also identified in Discover Discomfort’s survey of language-learning tools; confirm Filipino availability and use it as listening practice, not as the sole explanation of grammar.", "dd-tools") }
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
    { original: "Puwede bang pakiulit?", translation: "Could you please repeat that?", usageNote: "A useful polite request; add po for respectful situations." },
    { original: "Ano ang ibig sabihin nito?", translation: "What does this mean?", literalMeaning: "What is the meaning of this?" },
    { original: "Saan ang sakayan?", translation: "Where is the place to catch a ride?", usageNote: "Ask more specifically for the jeep, bus, train, or ferry when needed." },
    { original: "Magkano po ito?", translation: "How much is this?", usageNote: "Respectful and natural in a shop or market." },
    { original: "Kain tayo!", translation: "Let’s eat!", literalMeaning: "We-including-you eat", usageNote: "An invitation whose tayo explicitly includes the listener." },
    { original: "Ingat ka.", translation: "Take care.", literalMeaning: "You be careful", usageNote: "A warm everyday farewell." },
    { original: "Sige, mamaya na lang.", translation: "Okay, let’s just do it later.", usageNote: "Na lang packages a choice or fallback; context supplies the omitted action." }
  ],
  sources: [
    { id: "psa-language", title: "Tagalog is the Most Widely Spoken Language at Home (2020 Census of Population and Housing)", url: "https://psa.gov.ph/content/tagalog-most-widely-spoken-language-home-2020-census-population-and-housing", publisher: "Philippine Statistics Authority", publishedAt: "2023-03-07", accessedAt: "2026-07-10" },
    { id: "constitution", title: "1987 Constitution of the Republic of the Philippines, Article XIV", url: "https://www.officialgazette.gov.ph/constitutions/1987-constitution/", publisher: "Official Gazette of the Republic of the Philippines", publishedAt: "1987-02-02", accessedAt: "2026-07-10" },
    { id: "kwf-history", title: "Kasaysayan at Mandato", url: "https://kwf.gov.ph/kasaysayan-at-mandato/", publisher: "Komisyon sa Wikang Filipino", accessedAt: "2026-07-10" },
    { id: "kwf-filipino", title: "The Language that is Filipino", url: "https://kwf.gov.ph/the-language-that-is-filipino/", publisher: "Komisyon sa Wikang Filipino", accessedAt: "2026-07-10" },
    { id: "kwf-orthography", title: "Manwal sa Masinop na Pagsulat", url: "https://kwf.gov.ph/wp-content/uploads/MMP_Full.pdf", publisher: "Komisyon sa Wikang Filipino", accessedAt: "2026-07-10" },
    { id: "kwf-dictionary", title: "Diksiyonaryo ng Wikang Filipino", url: "https://diksiyonaryo.ph/", publisher: "Komisyon sa Wikang Filipino", accessedAt: "2026-07-10" },
    { id: "uh-grammar", title: "Filipino Grammar Topics: The Verb, Aspect and Focus", url: "https://www.hawaii.edu/filipino/Grammar_Topics/Grammar_2-1.html", publisher: "University of Hawai‘i at Mānoa Filipino and Philippine Literature Program", accessedAt: "2026-07-10" },
    { id: "seasite", title: "Tagalog Grammar: Markers and Focus", url: "https://seasite.niu.edu/trans/tagalog/Grammar%201/Markers/markersintro.htm", publisher: "Northern Illinois University SEAsite", accessedAt: "2026-07-10" },
    { id: "glottolog", title: "Tagalog", url: "https://glottolog.org/resource/languoid/id/taga1280", publisher: "Glottolog 5.2", accessedAt: "2026-07-10" },
    { id: "unicode-baybayin", title: "Unicode Standard, Chapter 17: Indonesia and Oceania (Tagalog/Baybayin)", url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-17/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "ud-tagalog", title: "Universal Dependencies: Tagalog", url: "https://universaldependencies.org/tl/", publisher: "Universal Dependencies", accessedAt: "2026-07-10" },
    { id: "dd-tools", title: "Black Friday Language Learning Deals 2021", url: "https://discoverdiscomfort.com/black-friday-language-learning-deals/", publisher: "Discover Discomfort", publishedAt: "2021", accessedAt: "2026-07-10" },
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
