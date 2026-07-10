import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Itsekiri",
    relationship: "Close Yoruboid relative",
    explanation: cited(
      "Itsekiri is closely related to Yoruba but is a language in its own right, centered in the western Niger Delta. Long contact with Yoruba, Edo, Portuguese, and other regional languages shaped it. A Yoruba speaker may recognize much, yet differences in sound, vocabulary, and grammar make effortless mutual understanding an unsafe assumption.",
      "glottolog-yoruba",
      "wiki-yoruba"
    )
  },
  {
    name: "Igala",
    relationship: "Yoruboid relative",
    explanation: cited(
      "Igala, spoken chiefly east of the Niger–Benue confluence, belongs in the Yoruboid comparison. Shared inherited vocabulary and structures help historical linguists reconstruct the branch. The relationship also complicates neat ethnic maps: language families preserve movements and connections that do not fit modern state borders.",
      "glottolog-yoruba",
      "wiki-yoruba"
    )
  },
  {
    name: "Edo (Bini)",
    relationship: "Neighboring Volta–Niger language",
    explanation: cited(
      "Edo is not Yoruboid, but it is a long-standing neighbor in southern Nigeria. Political, commercial, and family histories created borrowing and multilingual border communities. Comparing the two is a useful lesson in contact: regional resemblance does not automatically prove especially close descent.",
      "glottolog-yoruba",
      "wiki-yoruba"
    )
  },
  {
    name: "Fon and other Gbe languages",
    relationship: "Western neighbors and contact languages",
    explanation: cited(
      "Yoruba varieties meet Fon, Gun, Ewe, and other Gbe languages across Benin and Togo. Markets, migration, religion, and intermarriage have long supported bilingualism. Nago and related identity labels in Benin show why the social name of a community and a linguist's dialect label do not always line up neatly.",
      "language-profiles",
      "wiki-yoruba"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const yorubaGuide = {
  slug: "yoruba",
  name: "Yoruba",
  autonym: "Èdè Yorùbá",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Yoruba is a major West African tone language whose compact grammar carries extraordinary expressive range through pitch, serial verbs, focus, proverbs, praise poetry, film, music, print, and everyday multilingual conversation.",
  family: "Niger–Congo, Atlantic–Congo, Volta–Niger, Yoruboid",
  macroRegion: "West Africa and global Yoruba diasporas",
  primaryScript: "Latin alphabet with vowel and tone diacritics",
  difficultyLabel: "Demanding",
  learnerHook: "Yoruba teaches you to hear meaning in melody: a small set of syllable shapes becomes names, jokes, arguments, songs, prayers, market talk, and poetry when tone and context are doing their full share of the work.",
  hero: {
    imageAlt: "Fully marked Yoruba text alongside contemporary books and media, showing tone marks and underdotted letters.",
    callToActionLabel: "Hear Yoruba in use"
  },
  classification: "A Yoruboid language within Volta–Niger; older literature often uses the broader label Defoid",
  speakerCommunity: "Yoruba is spoken most densely in southwestern Nigeria and across adjoining parts of Benin and Togo, with substantial communities elsewhere in Nigeria and around the world. Published totals vary because sources count first-language speakers, second-language users, ethnic identity, and a dialect continuum differently; a cautious current shorthand is roughly fifty million speakers across categories rather than one falsely exact number. Yoruba is used at home, in markets, schools, churches and mosques, traditional religious practice, radio, television, film, publishing, music, comedy, and social media. Many speakers move among Yoruba, English, Nigerian Pidgin, French, or neighboring languages. In Brazil, Cuba, Trinidad and Tobago, the United States, and elsewhere, Yoruba-derived ritual vocabulary and cultural forms also live in communities whose ordinary language may not be conversational Yoruba.",
  facts: [
    { label: "Family", value: "Niger–Congo · Atlantic–Congo · Volta–Niger · Yoruboid" },
    { label: "Core area", value: "Southwestern Nigeria, Benin, and Togo" },
    { label: "Speaker scale", value: "Roughly 50 million across L1/L2 estimates; definitions differ" },
    { label: "Tone", value: "High, mid, and low; tone is lexical and grammatical" },
    { label: "Standard", value: "Standard Yoruba, historically shaped by Oyo/Ibadan speech and print practice" },
    { label: "Writing", value: "Latin alphabet with ẹ, ọ, ṣ and acute/grave tone marks" }
  ],
  learnerOverview: "Start by treating every new word as a short melody, not an unaccented string of letters. Write Yorùbá, not Yoruba, and record a voice model beside your notes. High tone takes an acute accent, low tone a grave, and mid is normally unmarked: ọkọ can represent different words once its tones are supplied. At the same time, learn useful whole exchanges. Ẹ káàárọ̀ is a respectful or plural ‘good morning’; Káàárọ̀ is familiar. Mo ń kọ́ Yorùbá means ‘I am learning Yoruba,’ where ń marks an action in progress. Standard Yoruba gives access to courses, literacy, news, and speakers across regions, but it should be paired with a real person or media community. An Ibadan tutor, an Ekiti family, and a Lagos comedy sketch will not sound identical. The aim is not to eliminate that diversity; it is to know which forms you are hearing and to avoid an accidental mixture that belongs nowhere.",
  origins: {
    overview: cited(
      "Yoruba belongs to the Yoruboid branch of Volta–Niger within the large Niger–Congo family. ‘Defoid’ appears frequently in older classifications, formed from Èdè, Ifẹ̀, and a wider proposed grouping, but narrower modern classifications often use Yoruboid without treating every older Defoid relationship as settled. Linguistic descent should not be collapsed into one migration legend. Yoruba-speaking societies developed through interconnected towns, kingdoms, trade routes, farms, and religious institutions, including but not limited to Ilé-Ifẹ̀, Ọ̀yọ́, Ìjẹ̀bú, Ẹ̀gbá, Ondo, and Ekiti histories. Oral accounts of Odùduwà and origins at Ilé-Ifẹ̀ carry profound political and cultural meaning; historical linguistics asks a different question, reconstructing earlier speech through systematic correspondences among languages and dialects.",
      "glottolog-yoruba",
      "wiki-yoruba",
      "language-profiles"
    ),
    timeline: [
      {
        period: "Before sustained alphabetic records",
        event: cited(
          "Yoruba knowledge circulated through speech, performance, apprenticeship, material art, praise names, lineage histories, proverbs, and Ifá's organized corpus of verses. Calling this period ‘unwritten’ must not imply that it lacked disciplined forms of preservation or interpretation. Oral specialists work with memory, variation, authority, and audience rather than reproducing a frozen transcript.",
          "unesco-ifa",
          "wiki-yoruba"
        )
      },
      {
        period: "18th–early 19th centuries",
        event: cited(
          "Atlantic enslavement carried Yoruba-speaking people and their neighbors to the Americas, while political conflict and the decline of the Oyo Empire reshaped communities within West Africa. The broad diaspora label ‘Lucumí’ in Cuba and Nagô in Brazil preserves histories of Yoruba-related identity, but their ritual languages should not be presented as unchanged modern Standard Yoruba.",
          "wiki-yoruba",
          "wiki-yoruba"
        )
      },
      {
        period: "1840s–1870s",
        event: cited(
          "Samuel Ajayi Crowther, himself a Yoruba speaker who had been freed from enslavement, published a Yoruba grammar and vocabulary in 1843 and a fuller dictionary and grammar in 1852. Mission printing, translation, schools, and newspapers helped stabilize a Roman-letter convention, while choices among dialect features inevitably gave some forms wider institutional reach than others.",
          "uga-about",
          "wiki-yoruba"
        )
      },
      {
        period: "20th-century standardization",
        event: cited(
          "Schooling, broadcasting, scholarship, creative writing, and orthography committees extended a common standard. The 1966 Yoruba Orthography Committee report and Ayọ Bamgboṣe's work are important landmarks in the modern spelling system. Standardization increased cross-regional literacy, but did not turn local varieties into errors.",
          "wiki-orthography",
          "uga-about"
        )
      },
      {
        period: "Late 20th century to today",
        event: cited(
          "Yoruba expanded through Nollywood film, popular music, radio, television, migration, and digital writing. Online text also exposed an old practical tension: fully marked Yoruba is precise, while keyboards, hurried publishing, and software have often encouraged missing diacritics. Digital dictionaries, corpora, keyboards, and automatic diacritic-restoration research now make careful writing easier.",
          "diacritic-paper",
          "yorubaname",
          "iowa-resources"
        )
      }
    ],
    contactHistory: cited(
      "Yoruba has always lived in a multilingual neighborhood. Contact with Edoid, Igala, Nupe, Gbe, Hausa, and other languages accompanied trade, statecraft, war, religion, and migration. Arabic-origin vocabulary arrived especially through Islam, often by way of Hausa or other mediating languages. Portuguese contact contributed items associated with Atlantic goods; English later became dominant in colonial administration, schooling, technology, and much urban professional life. Contemporary speakers may alternate Yoruba with English or Nigerian Pidgin inside one conversation. Such code-switching can signal topic, humor, education, intimacy, or urban identity. It is not evidence that Yoruba lacks words or grammar.",
      "wiki-yoruba",
      "uga-about",
      "language-profiles"
    ),
    standardization: cited(
      "Standard Yoruba is associated chiefly with Oyo- and Ibadan-area features, modified by the history of mission print and later scholarship. It supports formal education, dictionaries, literature, and cross-regional media, yet no single academy controls every usage. Fully edited prose normally distinguishes e from ẹ, o from ọ, and s from ṣ and marks high and low tones. Informal digital Yoruba often drops some or all diacritics, producing strings a fluent reader resolves from context. Learners should not copy that omission too early: native readers bring lexical and grammatical knowledge that beginners do not yet possess.",
      "uga-about",
      "wiki-orthography",
      "diacritic-paper"
    )
  },
  variants: {
    overview: cited(
      "Yoruba is a dialect continuum: neighboring communities usually share many features, while differences accumulate over distance. Scholars group varieties in several ways, often distinguishing northwestern, central, and southeastern zones, but boundaries and names vary. Sound systems, tone patterns, vocabulary, pronouns, and small grammatical words all differ. Standard Yoruba gives speakers a shared written code, and mobility and media spread Lagos and other urban usages, but a standard-trained learner may still need time with fast Ìjẹ̀bú, Èkìtì, Ondo, Ìjẹ̀ṣà, or other local speech.",
      "wiki-yoruba",
      "uga-about",
      "uga-about"
    ),
    items: [
      { name: "Standard Yoruba", note: cited("The principal norm of schooling, edited print, many courses, and cross-regional formal communication. Spoken standard retains the speaker's regional voice and is not simply one prestige accent.", "uga-about", "wiki-orthography") },
      { name: "Oyo–Ibadan and northwestern varieties", note: cited("Historically influential in the standard and in major urban networks. Oyo and Ibadan speech are themselves not identical, and age and neighborhood matter.", "uga-about", "wiki-yoruba") },
      { name: "Central varieties", note: cited("Varieties associated with Ifẹ̀, Ìjẹ̀ṣà, and Ekiti regions illustrate how bundles of features cross administrative borders. Some preserve vowel or tone distinctions absent from standard descriptions.", "wiki-yoruba", "uga-about") },
      { name: "Southeastern varieties", note: cited("Ondo, Owo, Ikale, Ilaje, and neighboring forms show substantial internal diversity. Labels can cover town-level identities that speakers hear more finely than an introductory map shows.", "wiki-yoruba", "uga-about") },
      { name: "Benin and Togo continua", note: cited("Nago, Ife, and related labels are used in multilingual settings where Standard Yoruba, local Yoruboid speech, French, and neighboring languages may have different roles. Do not assume the Nigerian school standard maps perfectly onto local identity.", "language-profiles", "glottolog-yoruba") },
      { name: "Diaspora ritual registers", note: cited("Lucumí in Cuba and Yoruba-derived religious vocabulary in Brazil and elsewhere preserve important histories. They are best learned through their own communities rather than treated as imperfect conversational Nigerian Yoruba.", "unesco-ifa", "wiki-yoruba") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Yoruba has seven oral vowel qualities in the standard—i, e, ẹ, a, ọ, o, u—and corresponding contrasts involving nasalization, though analyses and dialect inventories vary. Most syllables are a vowel alone, a consonant plus vowel, or a syllabic nasal. Standard native words generally avoid consonant clusters and final oral consonants. That open rhythm can feel accessible, but tone makes every syllable carry more information. The consonants written gb and p are especially notable: standard p commonly represents a voiceless labial-velar stop, while gb is its voiced counterpart, made with closures at the lips and velum nearly together rather than as English-style sequences.",
      "uga-grammar",
      "wiki-yoruba"
    ),
    script: "Fully marked Standard Yoruba orthography; IPA is useful for the labial-velar stops and vowel contrasts",
    soundSystem: cited(
      "Ẹ and ọ are separate letters, representing open-mid vowels distinct from e and o. Ṣ is approximately English sh, while s remains s. Yoruba's three level tones are high, mid, and low. High is written with an acute accent, low with a grave, and mid is normally unmarked. Tone distinguishes words and grammatical forms, so accents are not ornamental stress marks. Surface pitch is also relational: a high tone after a low may be realized lower than an earlier high, a pattern called downstep. Vowel assimilation and elision at word boundaries can reshape careful dictionary forms in fluent phrases.",
      "uga-tones",
      "wiki-orthography",
      "unilag-tones"
    ),
    prosody: cited(
      "Do not map high, mid, and low onto three fixed musical notes for an entire sentence. Speakers adjust their range, questions add intonational effects, and successive tones step through a phrase. Learn a word's tones, then imitate it inside a sentence. Yoruba has no English-style system in which one stressed syllable dominates each word; pitch patterns and phrase timing do different work. A useful drill is to hum a short native recording before repeating its consonants and vowels. Then compare respectful greetings, whose longer phrasing and pronouns are part of social fluency, not mere politeness decoration.",
      "uga-tones",
      "unilag-tones"
    ),
    learnerTraps: [
      "Treating acute and grave accents as optional pronunciation hints rather than part of the word",
      "Using louder volume for high tone instead of controlled relative pitch",
      "Merging e with ẹ or o with ọ, especially when typing without underdots",
      "Pronouncing gb as an English g followed by b rather than a coordinated labial-velar stop",
      "Adding English consonants at the ends of open syllables",
      "Expecting citation forms to remain acoustically unchanged across vowel elision and tone processes"
    ],
    sampleWords: [
      { original: "Yorùbá", translation: "Yoruba", note: "The sequence is mid–low–high. Keep the final high audible without turning it into English stress." },
      { original: "ẹja", translation: "fish", note: "Ẹ is more open than e; both syllables carry mid tone when unmarked." },
      { original: "ọ̀rẹ́", translation: "friend", note: "Practice open ọ plus a low-to-high melody. The underdot and accents encode different information." },
      { original: "ṣé", translation: "question/focus-related particle in common constructions", note: "Ṣ is like English sh; the high tone helps distinguish this small but frequent form." },
      { original: "gbogbo", translation: "all; every", note: "Each gb is one coordinated labial-velar consonant, not a two-consonant cluster." },
      { original: "pápá", translation: "field", note: "Standard Yoruba p is commonly a voiceless labial-velar stop; this word also practices two high tones." },
      { original: "ìyá", translation: "mother", note: "A low-to-high two-syllable pattern; avoid inserting English y-glide timing before the first vowel." }
    ]
  },
  writing: {
    overview: cited(
      "Modern Yoruba uses a Latin alphabet designed to keep several crucial contrasts visible. The underdotted letters ẹ and ọ distinguish open vowels from e and o, and ṣ distinguishes /ʃ/ from s. Acute and grave marks show high and low tone; mid is generally bare. A syllabic nasal can also bear tone. Because a letter may need both an underdot and a tone accent, Yoruba is a good test of whether fonts, keyboards, search engines, and databases handle Unicode combining marks and precomposed characters consistently.",
      "wiki-orthography",
      "unicode-latin",
      "diacritic-paper"
    ),
    primaryScript: "Latin-based Yoruba alphabet",
    romanization: cited(
      "The standard script is already Roman, so an accent-free respelling is not a true romanization. Writing ‘se’ for ṣe or ṣé can hide both consonant quality and tone. Beginners should install a Yoruba keyboard and keep fully marked forms; IPA belongs in pronunciation notes, not as a replacement everyday script.",
      "wiki-orthography",
      "unicode-latin"
    ),
    spellingNorms: cited(
      "Careful spelling marks lexical tones and distinguishes all standard vowel letters. Apostrophes are not normally inserted simply because vowels merge in speech. Word boundaries can reflect conventional contractions, and grammatical tone sometimes means that a familiar morpheme looks or sounds different inside a construction. Names deserve exact diacritics too: Dọ́lá and Dólá are not safely interchangeable merely because many databases strip marks. Search tools may store canonically equivalent Unicode sequences differently, so publishers should normalize text while preserving what the writer entered.",
      "wiki-orthography",
      "yorubaname",
      "diacritic-paper"
    ),
    styleNotes: [
      cited("Use ẹ, ọ, and ṣ from the beginning. Underdots distinguish letters; acute and grave accents distinguish tones.", "wiki-orthography"),
      cited("Check personal names in YorubaName or with their owner rather than reconstructing accents from an unmarked English-language source.", "yorubaname"),
      cited("Keep a fully marked master copy even if a platform forces a plain-text fallback. Restoring diacritics later is a linguistic task, not mechanical decoration.", "diacritic-paper"),
      cited("Expect informal messages, headlines, and subtitles to vary in marking. Read them, but do not use inconsistent text as your only pronunciation model.", "diacritic-paper", "iowa-resources")
    ]
  },
  grammar: {
    overview: cited(
      "Yoruba is comparatively analytic: grammatical relationships are often expressed by separate particles, pronoun sets, tone, and word order rather than long chains of inflection. Basic clauses are commonly subject–verb–object, as in Adé ra ìwé, ‘Ade bought a book.’ That apparent familiarity quickly opens onto distinct systems. Pronoun tone can distinguish persons, aspect particles sit before verbs, multiple verbs can share one subject, and focus uses particles and special clause shapes. Learn these as spoken frames with their tones intact.",
      "uga-grammar",
      "wiki-yoruba"
    ),
    typologicalProfile: cited(
      "Standard Yoruba has SVO order, prepositions rather than a large case system, little grammatical gender, and no productive noun-class agreement of the kind seen in many other Niger–Congo languages. Nouns do not routinely inflect for singular versus plural; àwọn before a noun phrase can mark plurality or association when discourse requires it. Verbs do not change ending for the subject. Instead, preverbal items express progressive, perfect, future, habitual, negation, and other distinctions. Serial verb constructions place verbs in a coordinated event without an overt English-style conjunction.",
      "uga-grammar",
      "wiki-yoruba"
    ),
    morphology: cited(
      "Although words are often short, Yoruba has productive derivation and compounding. Partial or full reduplication can form nouns, distributive expressions, intensity, or repeated meanings. Jẹ ‘eat’ contributes to jíjẹ ‘eating/food’ through a nominalizing pattern with reduplication and tone changes; díẹ̀ ‘a little’ becomes díẹ̀díẹ̀ ‘little by little.’ Compounds and names can compress whole propositions, which is one reason an unmarked name is not always transparent even to a learner who recognizes its pieces. Morphology and tone interact, so copying only the consonants and vowels misses part of the construction.",
      "uga-grammar",
      "yorubaname"
    ),
    syntax: cited(
      "Neutral declaratives tend toward subject–verb–object, but information structure reorganizes clauses. A focused constituent may be followed by ni: Adé ni ó ra ìwé means ‘It was Ade who bought a book.’ Relative clauses use tí and follow their head noun: ìwé tí Adé rà, ‘the book that Ade bought.’ Yes/no questions commonly use ṣé at the beginning, while question words may appear in focus-like constructions. Negation is not one universal word: kò negates many declaratives, má marks negative commands, and forms vary with aspect and clause type. Fluent Yoruba therefore depends on learning families of clauses, not substituting words into English order indefinitely.",
      "uga-grammar",
      "unilag-tones"
    ),
    advancedPainPoints: [
      "Maintaining lexical and grammatical tones when particles and vowels interact",
      "Choosing subject and object pronoun forms with their correct tone",
      "Understanding serial verbs as one event structure rather than separate English clauses",
      "Using ni, tí, and question constructions to manage focus naturally",
      "Following rapid dialect speech after a Standard Yoruba course",
      "Controlling respectful plural pronouns and culturally appropriate greetings"
    ],
    topics: [
      {
        title: "Pronouns are small tone-bearing words",
        body: cited("Subject pronouns precede the verb: mo ‘I,’ o ‘you singular,’ ó ‘he/she/it,’ a ‘we,’ ẹ ‘you plural or respectful,’ and wọ́n ‘they.’ Tone matters: o and ó are not interchangeable. Object forms occur after the verb, as in Ó rí mi, ‘He or she saw me.’ Yoruba third-person pronouns do not encode a male/female contrast, so context supplies what English forces a translator to choose.", "uga-grammar"),
        example: "Ó rí mi ní ọjà.",
        exampleTranslation: "He/she saw me at the market."
      },
      {
        title: "Aspect does more work than tense endings",
        body: cited("The verb itself does not acquire an English-style past ending. ń marks an event in progress: Mo ń ka ìwé, ‘I am reading a book.’ ti presents a completed or already-achieved situation: Mo ti jẹun, ‘I have eaten.’ máa commonly contributes habitual or prospective meaning, while yóò is used for future reference. Time adverbs and context locate events more precisely.", "uga-grammar"),
        example: "A máa ń lọ síbẹ̀ ní Ọjọ́ Àìkú.",
        exampleTranslation: "We usually go there on Sundays."
      },
      {
        title: "Negation changes with the job",
        body: cited("Kò negates many ordinary declaratives: Adé kò wá, ‘Ade did not come/is not coming’ depending on context. Má introduces a negative command: Má lọ! ‘Don't go!’ Kì í appears in habitual or generic negation. These are constructions with their own tones and ordering, not translations of one all-purpose English ‘not.’", "uga-grammar"),
        example: "Mi ò mọ̀; jọ̀wọ́, tún sọ.",
        exampleTranslation: "I don't know; please, say it again."
      },
      {
        title: "Serial verbs build a single route through an event",
        body: cited("In Adé mú ìwé wá, literally ‘Ade take book come,’ mú and wá combine to express bringing. In Ó ra ẹja jẹ, ‘he/she bought fish and ate it,’ the shared subject and object relations are understood without repeating pronouns or inserting an obligatory conjunction. Serial verbs express direction, instrument, result, accompaniment, and tightly linked actions; translating each verb as a separate English sentence obscures their grammar.", "uga-grammar", "wiki-yoruba"),
        example: "Bọ́lá fi ọ̀bẹ gé búrẹ́dì.",
        exampleTranslation: "Bola used a knife to cut bread."
      },
      {
        title: "Focus with ni",
        body: cited("Ni follows a focused noun phrase and a resumptive subject may appear in the following clause. Adé ni ó pè mí answers ‘Who called you?’; ìwé ni Adé rà foregrounds ‘a book’ as what Ade bought. This is not decorative emphasis. Focus changes the clause shape and interacts with tone, questions, relative structures, and what the conversation treats as new or contrastive.", "uga-grammar", "unilag-tones"),
        example: "Ìbàdàn ni mo ń gbé.",
        exampleTranslation: "It is in Ibadan that I live / I live in Ibadan."
      },
      {
        title: "Nouns, number, and modifiers",
        body: cited("A bare noun can be interpreted through context, while àwọn can mark a plural phrase: àwọn ọmọ, ‘the children/children.’ Demonstratives follow the noun: ilé yìí, ‘this house’; ọkùnrin náà, ‘that/the aforementioned man.’ Adjectival ideas often use stative verbs or tightly linked modifiers. Do not expect articles and adjective agreement to map one-for-one from English.", "uga-grammar"),
        example: "Àwọn ọmọ kékeré náà ń ṣeré.",
        exampleTranslation: "Those small children are playing."
      },
      {
        title: "Reduplication creates useful vocabulary",
        body: cited("Repeating all or part of a form can distribute or intensify a meaning and can participate in noun formation. Díẹ̀díẹ̀ means ‘little by little’; ojoojúmọ́ means ‘every day.’ Productive patterns frequently include tone alternations, so learners should record the derived form rather than assume that visual copying preserves the melody.", "uga-grammar"),
        example: "Díẹ̀díẹ̀ la ń kọ́ èdè.",
        exampleTranslation: "We learn a language little by little."
      },
      {
        title: "Respect lives in grammar and routine",
        body: cited("Ẹ is plural ‘you’ and also a respectful singular address form. Greeting formulas often begin with ẹ and recognize the hearer's time, work, journey, or situation: Ẹ káàárọ̀ ‘good morning,’ Ẹ kú iṣẹ́ ‘well done/thanks for your work.’ Using respectful forms is not the same as speaking stiffly; it is an ordinary way to locate age and relationship in interaction.", "uga-grammar", "iowa-resources"),
        example: "Ẹ kú iṣẹ́, màmá.",
        exampleTranslation: "Well done/thank you for your work, ma'am/mother."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "The linguistic center of gravity is southwestern Nigeria, but Yoruba does not stop at a political line. It extends through communities in Benin and Togo, Nigerian cities far outside the southwest, and international migration networks. The language's ceremonial afterlives in the Atlantic diaspora deserve careful description: conversational competence, liturgical vocabulary, music, and cultural identification are related but not identical measures. Current speaker counts therefore depend strongly on who is being counted and for what purpose.",
      "language-profiles",
      "glottolog-yoruba",
      "wiki-yoruba"
    ),
    regions: [
      { place: "Southwestern Nigeria", note: cited("The densest network spans Lagos, Oyo, Ogun, Osun, Ondo, Ekiti, and parts of Kwara and neighboring states. Cities bring local dialects into daily contact with Standard Yoruba, English, and Nigerian Pidgin.", "wiki-yoruba", "language-profiles") },
      { place: "Benin and Togo", note: cited("Yoruba and closely related continua are used under labels including Yoruba, Nago, and Ife in multilingual settings. French and other African languages often share speakers and domains.", "language-profiles", "glottolog-yoruba") },
      { place: "Elsewhere in Nigeria", note: cited("Migration for trade, education, public service, entertainment, and family life has created Yoruba communities in Abuja, northern cities, the Niger Delta, and across the federation.", "wiki-yoruba") },
      { place: "United Kingdom, North America, and newer diasporas", note: cited("Families, associations, churches, mosques, cultural schools, media creators, and university programs support heritage use. English dominance means receptive understanding and speaking ability may differ sharply within one household.", "language-profiles", "iowa-resources") },
      { place: "Atlantic religious-cultural diasporas", note: cited("Cuba, Brazil, Trinidad and Tobago, and other societies maintain Yoruba-derived names, songs, liturgies, and concepts. These traditions have their own histories and should not be graded against present-day Nigerian conversation.", "unesco-ifa", "wiki-yoruba") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Yoruba offers a welcoming syllable structure, relatively little verb inflection, no grammatical gender in pronouns, and familiar SVO clauses. Its difficulty lies less in giant paradigms than in disciplined listening. Tone, open-vowel contrasts, rapid vowel interaction, short grammatical particles, and dialect variation can make a sentence hard to parse even when every dictionary word is familiar. Cultural fluency also includes greeting routines, respectful address, indirection, proverbs, and knowing when English or Pidgin mixing is natural rather than careless.",
      "uga-tones",
      "uga-grammar"
    ),
    easierAspects: [
      "A Latin-based script with consistent core sound-to-letter relationships",
      "No grammatical gender distinction in third-person pronouns",
      "Verbs do not conjugate through large person-ending paradigms",
      "Basic subject–verb–object clauses are easy to begin using",
      "A large ecosystem of music, films, radio, and speakers"
    ],
    hardAspects: [
      "Hearing and producing three tones across whole phrases",
      "Keeping e/ẹ and o/ọ distinct",
      "Recognizing grammatical tone and vowel elision in fluent speech",
      "Following dialects and urban code-switching beyond course audio",
      "Using focus, serial verbs, and respectful forms idiomatically"
    ],
    plateauRisks: [
      "Reading unmarked Yoruba so often that incorrect tone patterns fossilize",
      "Memorizing isolated greetings without learning the pronoun and social choices inside them",
      "Depending on subtitles while failing to identify aspect particles by ear",
      "Treating Standard Yoruba as the only legitimate speech",
      "Learning only ritual or heritage vocabulary when the goal is everyday conversation"
    ],
    workload: cited(
      "A productive first year combines daily ten-minute tone imitation, a structured course, and regular conversation with one primary speaker model. By the intermediate stage, transcribe short clips in fully marked text and ask a proficient writer to correct them. Advanced work means widening deliberately: one regional variety, edited essays, long interviews, proverbs in context, and media where Yoruba mixes naturally with English or Pidgin. Progress will be uneven—reading may race ahead of listening until tones and reductions become automatic.",
      "uga-tones",
      "iowa-resources",
      "yale-dictionary"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Build a three-column notebook: fully marked Yoruba, an audio link or your tutor's recording, and a context-rich English gloss. Tag every entry by speaker, place, and register. Once a week, revisit a twenty-second clip: listen without text, transcribe, compare, shadow, and finally retell it. This forces spelling, tone perception, grammar, and narrative skill to reinforce one another. Search Discover Discomfort first when exploring its language-learning advice, but as of this guide's research there was no directly relevant Yoruba article to recommend; source quality matters more than inserting an unrelated house link.",
      "uga-tones",
      "iowa-resources"
    ),
    mediaPractice: cited(
      "Use BBC News Yorùbá for edited current-affairs language, but compare studio reading with interviews where dialect and code-switching are more audible. Add Yoruba-language film scenes, radio phone-ins, comedy, sermons, music interviews, and lyric videos whose diacritics you verify. Songs are excellent for vocabulary and cultural reference but melody can reshape ordinary pitch, so they should supplement rather than replace spoken tone models. Retell one news item in simple Yoruba instead of collecting links passively.",
      "bbc-yoruba",
      "iowa-resources"
    ),
    dictionariesAndCorpora: cited(
      "Use Yale's searchable Yoruba Dictionary for headwords and meanings, YorubaName for names with audio and cultural explanation, and a corpus or concordancer to see words in surrounding text. No one resource settles every tone, dialect, or modern coinage. Cross-check a dictionary form against recordings and current usage. When search results are sparse, try both fully marked and unmarked spellings, while remembering that the latter may merge many distinct words.",
      "yale-dictionary",
      "yorubaname",
      "sketchengine"
    ),
    resources: [
      { type: "course", title: "Yoruba Online", url: "https://africa.uga.edu/Yoruba/", level: "beginner", description: cited("A University of Georgia course with lessons on tones, grammar, culture, and practical language. Its older web encoding can be uneven, but the instructional sequence remains valuable.", "uga-grammar", "uga-tones") },
      { type: "dictionary", title: "The Yoruba Dictionary", url: "https://yorubadictionary.yale.edu/", level: "all", description: cited("Yale-hosted searchable dictionary for checking fully marked forms and meanings; confirm regional and conversational usage with speakers.", "yale-dictionary") },
      { type: "dictionary", title: "YorubaName", url: "https://www.yorubaname.com/", level: "all", description: cited("A community-built multimedia dictionary of Yoruba names, especially useful because names encode tone, contraction, history, and cultural explanation.", "yorubaname") },
      { type: "media", title: "BBC News Yorùbá", url: "https://www.bbc.com/yoruba", level: "intermediate", description: cited("Current news text, video, and audio for developing formal vocabulary and comparing written headlines with spoken reporting.", "bbc-yoruba") },
      { type: "corpus", title: "Yoruba text corpora in Sketch Engine", url: "https://www.sketchengine.eu/corpora-and-languages/yoruba-text-corpora/", level: "advanced", description: cited("Concordance tools show vocabulary in authentic contexts and help test collocations rather than trusting one-to-one translations.", "sketchengine") },
      { type: "other", title: "University of Iowa Yoruba Language and Culture Resources", url: "https://clcl.uiowa.edu/language-resources/yoruba-language-and-culture-resources", level: "all", description: cited("A curated launch point for pronunciation, tones, dictionaries, poetry, and cultural material.", "iowa-resources") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Yoruba words often travel with more cultural freight than a one-line gloss can show. Orí is literally ‘head’ and also enters philosophical discussion of personhood and destiny; àṣẹ can name authority or efficacy and appears in affirming responses and religious discourse. Neither is a magical keyword detached from syntax. Proverbs, praise poetry, novels, popular song, and screen dialogue place such vocabulary inside social relationships. Ask who says a form, to whom, and in which genre before claiming an untranslatable worldview.",
      "unesco-ifa",
      "yorubaname",
      "iowa-resources"
    ),
    notableWords: [
      { term: "àṣẹ", meaning: "authority, command, enabling power; an affirming response in some contexts", note: cited("The semantic range changes across everyday, political, artistic, and religious use. English ‘amen’ captures only some discourse contexts.", "unesco-ifa", "yale-dictionary") },
      { term: "orí", meaning: "head; also a concept of personal destiny or inner person", note: cited("Ordinary bodily meaning and philosophical-religious uses coexist. Compounds and ritual contexts demand more than the single gloss ‘destiny.’", "yale-dictionary", "unesco-ifa") },
      { term: "ìwà", meaning: "character, conduct, existence/being in some formations", note: cited("The proverb Ìwà l'ẹwà, ‘character is beauty,’ makes moral conduct the measure of attractiveness.", "yale-dictionary", "iowa-resources") },
      { term: "àjọṣe", meaning: "relationship, connection, cooperation", note: cited("Useful in social, institutional, and analytical prose; its exact English rendering depends on what is connected and how.", "yale-dictionary") },
      { term: "ìfẹ́", meaning: "love, desire, wish", note: cited("Tone and context separate this familiar form from lookalikes. Learn it in phrases such as Mo nífẹ̀ẹ́ rẹ, ‘I love you.’", "yale-dictionary") },
      { term: "ọmọlúàbí", meaning: "a person of good character and responsible social conduct", note: cited("Often invoked as an ethical ideal. It should describe practices—respect, integrity, responsibility—not be flattened into a claim that every Yoruba person shares one personality.", "yorubaname", "iowa-resources") },
      { term: "àlàáfíà", meaning: "peace, well-being", note: cited("An Arabic-origin item that reflects older Islamic and regional contact; it is entirely ordinary Yoruba vocabulary today.", "yale-dictionary", "wiki-yoruba") }
    ],
    loanwordLayers: cited(
      "Inherited Yoruboid vocabulary sits alongside layers from neighboring languages, Arabic-associated Islamic learning, Portuguese-era Atlantic contact, and especially English. Loans are remodeled to fit Yoruba sound patterns: consonant clusters may gain vowels, final consonants are avoided, and every syllable receives tone. Modern speakers may either adapt an English item phonologically or code-switch into an English phrase. The choice can mark generation, profession, humor, or topic; a dictionary's coined technical equivalent may be correct without being the most common choice in a Lagos office.",
      "wiki-yoruba",
      "uga-grammar"
    ),
    idioms: [
      { original: "Ìwà l'ẹwà.", translation: "Character is beauty.", note: "A compact ethical statement: appearance without good conduct is not true beauty." },
      { original: "Sùúrù ni baba ìwà.", translation: "Patience is the father/foundation of good character.", note: "Often used to counsel restraint; quoting it is easier than judging when counsel is welcome." },
      { original: "Ọwọ́ kan kò gbé ẹrù dórí.", translation: "One hand cannot lift a load onto the head.", note: "Cooperation is necessary for difficult work; the image comes from carrying loads on the head." },
      { original: "Bí ọmọde bá ṣubú, a wo iwájú; bí àgbàlagbà bá ṣubú, a wo ẹ̀yìn.", translation: "When a child falls, they look ahead; when an elder falls, they look behind.", note: "Experience looks for causes in what came before. Proverbs vary in wording and are selected for a live conversational purpose." },
      { original: "Díẹ̀díẹ̀ nimú ẹlẹ́dẹ̀ẹ́ fi ń wọgbà.", translation: "Little by little, the pig's nose enters the fence.", note: "A vivid proverb for gradual progress or gradual encroachment; confirm local wording with your speaker community." }
    ],
    textGenres: [
      "oríkì praise poetry and personal praise names",
      "Ifá verses and interpretive performance",
      "òwe proverbs and conversational verbal art",
      "novels, drama, essays, and children's literature",
      "news, radio phone-ins, film, and television",
      "fújì, jùjú, gospel, hip-hop, Afrobeats, and other song traditions",
      "sermons, devotional writing, and public ceremonial speech"
    ]
  },
  relationships: {
    overview: cited(
      "Yoruba becomes easier to place when genealogy and contact are kept separate. Itsekiri and Igala are Yoruboid relatives; Edo and Gbe languages are important neighbors; English and Nigerian Pidgin are major present-day contact languages. A borrowed word or shared discourse pattern may be historically fascinating without proving common descent. Conversely, closely related languages can remain socially distinct even when comparison reveals inherited structure.",
      "glottolog-yoruba",
      "wiki-yoruba"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Yoruba-speaking communities include Muslims, Christians, practitioners of oriṣa traditions, people who combine inheritances, and people for whom religion is not central. Avoid presenting Yoruba as a vocabulary list for spirituality or a single ancient kingdom. Contemporary life includes engineering, fashion, memes, electoral argument, parenting, football, business, scholarship, film, and ordinary joking. Respect also has linguistic form: plural pronouns can address one elder, greetings acknowledge work and circumstance, and names are meaningful utterances whose tones matter. Proverbs and oríkì are living arts, not interchangeable pieces of ‘African wisdom’; learn who is entitled to perform or interpret particular material and what audience it addresses.",
  resources: [
    { type: "course", title: "Yoruba Online", url: "https://africa.uga.edu/Yoruba/", level: "beginner", description: cited("Structured university lessons linking tone, grammar, and situational culture.", "uga-grammar", "uga-tones") },
    { type: "dictionary", title: "The Yoruba Dictionary", url: "https://yorubadictionary.yale.edu/", level: "all", description: cited("A practical searchable reference for fully marked headwords and definitions.", "yale-dictionary") },
    { type: "dictionary", title: "YorubaName", url: "https://www.yorubaname.com/", level: "all", description: cited("Multimedia explanations and audio for thousands of names, made through a community lexicography project.", "yorubaname") },
    { type: "media", title: "BBC News Yorùbá", url: "https://www.bbc.com/yoruba", level: "intermediate", description: cited("A continuing stream of contemporary written and spoken current-affairs Yoruba.", "bbc-yoruba") },
    { type: "corpus", title: "Sketch Engine Yoruba corpora", url: "https://www.sketchengine.eu/corpora-and-languages/yoruba-text-corpora/", level: "advanced", description: cited("Searchable examples for studying collocation, frequency, and real textual contexts.", "sketchengine") },
    { type: "other", title: "University of Iowa resource guide", url: "https://clcl.uiowa.edu/language-resources/yoruba-language-and-culture-resources", level: "all", description: cited("Curated links to tones, poetry, pronunciation, and dictionaries.", "iowa-resources") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Ẹ káàárọ̀.", translation: "Good morning.", usageNote: "Respectful singular or plural; Káàárọ̀ is familiar singular." },
    { original: "Ẹ káàsán.", translation: "Good afternoon.", usageNote: "A time-of-day greeting using respectful/plural ẹ." },
    { original: "Ẹ káalẹ́.", translation: "Good evening.", usageNote: "Use after the afternoon; local timing and pronunciation vary." },
    { original: "Báwo ni?", translation: "How are things? / How are you?", literalMeaning: "How is it?", usageNote: "A common familiar question; expand the respectful form with your speaker model." },
    { original: "Mo wà dáadáa.", translation: "I am well." },
    { original: "Ẹ ṣé.", translation: "Thank you.", usageNote: "Respectful or plural; O ṣé is familiar singular." },
    { original: "Jọ̀wọ́.", translation: "Please." },
    { original: "Kò yé mi.", translation: "I don't understand.", literalMeaning: "It is not clear to me." },
    { original: "Ẹ lè tún sọ ọ́?", translation: "Can you say it again?", usageNote: "Respectful/plural request." },
    { original: "Mo ń kọ́ Yorùbá.", translation: "I am learning Yoruba." },
    { original: "Kí ni ọ̀rọ̀ yìí túmọ̀ sí?", translation: "What does this word mean?", literalMeaning: "What does this word translate/amount to?" },
    { original: "Níbo ni ilé ìgbọ̀nsẹ̀ wà?", translation: "Where is the toilet?" },
    { original: "Ẹ kú iṣẹ́.", translation: "Well done / thank you for your work.", usageNote: "A greeting acknowledging someone who is working; the response may be Ẹ ṣé." },
    { original: "Má bínú.", translation: "Sorry / don't be angry.", literalMeaning: "Do not be angry.", usageNote: "Used for apology or to soften an interruption." },
    { original: "Ó dàbọ̀.", translation: "Goodbye." }
  ],
  sources: [
    { id: "wiki-yoruba", title: "Yoruba language", url: "https://en.wikipedia.org/wiki/Yoruba_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-yoruba", title: "Glottolog 5.3: Yoruba", url: "https://glottolog.org/resource/languoid/id/yoru1245", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "uga-about", title: "Yoruba Online: About the Yoruba language", url: "https://africa.uga.edu/Yoruba/yorubaabout.html", publisher: "University of Georgia", accessedAt: "2026-07-10" },
    { id: "uga-tones", title: "Yoruba Online: Tones", url: "https://africa.uga.edu/Yoruba/tones.html", publisher: "University of Georgia", accessedAt: "2026-07-10" },
    { id: "uga-grammar", title: "Yoruba Online: Grammar", url: "https://africa.uga.edu/Yoruba/grammar.html", publisher: "University of Georgia", accessedAt: "2026-07-10" },
    { id: "wiki-orthography", title: "Yoruba alphabet", url: "https://en.wikipedia.org/wiki/Yoruba_alphabet", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "unicode-latin", title: "Latin Extended-A Unicode chart", url: "https://www.unicode.org/charts/PDF/U0100.pdf", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "unilag-tones", title: "Disambiguating Yoruba tones: at the interface between syntax, morphology, phonology and phonetics", url: "https://ir.unilag.edu.ng/items/d6bf236f-6553-4506-bfb0-5333333b9b4d/full", publisher: "University of Lagos Institutional Repository", publishedAt: "2011", accessedAt: "2026-07-10" },
    { id: "yale-dictionary", title: "The Yoruba Dictionary", url: "https://yorubadictionary.yale.edu/", publisher: "Yale University", accessedAt: "2026-07-10" },
    { id: "yorubaname", title: "YorubaName multimedia dictionary", url: "https://www.yorubaname.com/about-us?lang=en", publisher: "YorubaName Project", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "iowa-resources", title: "Yoruba Language and Culture Resources", url: "https://clcl.uiowa.edu/language-resources/yoruba-language-and-culture-resources", publisher: "University of Iowa", accessedAt: "2026-07-10" },
    { id: "sketchengine", title: "Yoruba text corpora", url: "https://www.sketchengine.eu/corpora-and-languages/yoruba-text-corpora/", publisher: "Sketch Engine", accessedAt: "2026-07-10" },
    { id: "diacritic-paper", title: "Improving Yorùbá Diacritic Restoration", url: "https://arxiv.org/abs/2003.10564", publisher: "arXiv", publishedAt: "2020", accessedAt: "2026-07-10" },
    { id: "language-profiles", title: "Yoruba Language Profile", url: "https://languageprofiles.ca/home/yoruba/", publisher: "Language Profiles Project", publishedAt: "2023", accessedAt: "2026-07-10" },
    { id: "unesco-ifa", title: "Ifa divination system", url: "https://ich.unesco.org/en/RL/ifa-divination-system-00146", publisher: "UNESCO Intangible Cultural Heritage", accessedAt: "2026-07-10" },
    { id: "bbc-yoruba", title: "BBC News Yorùbá", url: "https://www.bbc.com/yoruba", publisher: "BBC", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Yoruba Language Guide: Tones, Grammar, Dialects and Culture",
    description: "A deep, practical guide to Yoruba tones, diacritics, grammar, dialects, history, proverbs, media, learning resources, and real-world phrases."
  }
} satisfies LanguageGuide;
