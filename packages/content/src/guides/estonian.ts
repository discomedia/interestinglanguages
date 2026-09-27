import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const sources = [
  { id: "wiki-estonian", title: "Estonian language", url: "https://en.wikipedia.org/wiki/Estonian_language", publisher: "Wikipedia", accessedAt: "2026-09-27" },
  { id: "wiki-grammar", title: "Estonian grammar", url: "https://en.wikipedia.org/wiki/Estonian_grammar", publisher: "Wikipedia", accessedAt: "2026-09-27" },
  { id: "census-2021", title: "243 mother tongues spoken in Estonia", url: "https://www.stat.ee/en/news/243-mother-tongues-spoken-estonia", publisher: "Statistics Estonia", publishedAt: "2023-03-14", accessedAt: "2026-09-27" },
  { id: "glottolog-estonian", title: "Glottolog: Estonian", url: "https://glottolog.org/resource/languoid/id/esto1258", publisher: "Glottolog", accessedAt: "2026-09-27" },
  { id: "estinst-language", title: "The Estonian Language", url: "https://estinst.ee/wp-content/uploads/2017/03/589_Estonian_Language_2015_WEB.pdf", publisher: "Estonian Institute", publishedAt: "2015", accessedAt: "2026-09-27" },
  { id: "eki-spelling", title: "Eesti keele õigekirja põhireeglid", url: "https://teatmik.eki.ee/teatmik/eesti-keele-oigekirja-pohireeglid/", publisher: "Institute of the Estonian Language", publishedAt: "2025-05-07", accessedAt: "2026-09-27" },
  { id: "quantity-study", title: "On quantity and stress in Estonian", url: "https://www.tandfonline.com/doi/abs/10.1080/03740463.1966.10411446", publisher: "Acta Linguistica Hafniensia", publishedAt: "1966", accessedAt: "2026-09-27" },
  { id: "eki-quantity", title: "Hääldusmärgid EKI ühendsõnastikus ja ÕS 2025-s", url: "https://eki.ee/teatmik/haaldusmargid-uhendsonastikus-ja-os-2025-s/", publisher: "Institute of the Estonian Language", publishedAt: "2026-06-06", accessedAt: "2026-09-27" },
  { id: "sonaveeb", title: "Sõnaveeb: about the dictionaries", url: "https://sonaveeb.ee/about/?lang=en", publisher: "Institute of the Estonian Language", accessedAt: "2026-09-27" },
  { id: "eki-korp", title: "Korp: Estonian language corpora", url: "https://korp.eki.ee/", publisher: "Institute of the Estonian Language", accessedAt: "2026-09-27" },
  { id: "tartu-partitive", title: "ONENESS: Partitive singular", url: "https://keeleweb2.ut.ee/kursused/grammar-2/1351-gr-2-1-ainsuse-osastav-partitive-singular?print=1&tmpl=component", publisher: "University of Tartu", accessedAt: "2026-09-27" },
  { id: "tartu-locative", title: "ONENESS: Locative cases", url: "https://keeleweb2.ut.ee/kursused/grammar-3/1384-gr-3-1-locative-cases?print=1&tmpl=component", publisher: "University of Tartu", accessedAt: "2026-09-27" },
  { id: "tartu-verbs", title: "ONENESS: Basic verb forms", url: "https://keeleweb2.ut.ee/kursused/grammar-2/1353-gr-2-4-verb-pohivormid-basic-forms?print=1&tmpl=component", publisher: "University of Tartu", accessedAt: "2026-09-27" },
  { id: "tartu-plural", title: "ONENESS: Genitive plural and case formation", url: "https://keeleweb2.ut.ee/kursused/grammar-6/1362-gr-6-1-mitmuse-omastav-genitive-plural", publisher: "University of Tartu", accessedAt: "2026-09-27" },
  { id: "voro-institute", title: "Võro Language", url: "https://wi.ee/en/voro-language/", publisher: "Võro Institute", accessedAt: "2026-09-27" },
  { id: "seto-institute", title: "Seto keel", url: "https://www.setoinstituut.ee/mis-on-tehtud/seto-keel/", publisher: "Seto Institute", accessedAt: "2026-09-27" },
  { id: "unicode-et", title: "CLDR Estonian collation", url: "https://unicode.org/cldr/charts/42/collation/et.html", publisher: "Unicode Consortium", accessedAt: "2026-09-27" },
  { id: "integration-study", title: "Independent study and materials", url: "https://integratsioon.ee/en/independent-study-and-materials", publisher: "Integration Foundation", accessedAt: "2026-09-27" },
  { id: "keeleklikk", title: "Keeleklikk", url: "https://www.keeleklikk.ee/", publisher: "Keeleklikk", accessedAt: "2026-09-27" },
  { id: "keeletee", title: "Keeletee", url: "https://www.keeletee.ee/", publisher: "Keeletee", accessedAt: "2026-09-27" },
  { id: "dd-estonia", title: "Living in Estonia: Tallinn, Costs, E-Residency and Daily Life", url: "https://discoverdiscomfort.com/living-in-estonia/", publisher: "Discover Discomfort", updatedAt: "2026-08", accessedAt: "2026-09-27" },
  { id: "dd-apps", title: "Our Favourite Apps to Learn Languages Quickly", url: "https://discoverdiscomfort.com/language-learning-apps-for-fast-learning/", publisher: "Discover Discomfort", accessedAt: "2026-09-27" }
] satisfies LanguageGuide["sources"];

const relatedLanguages = [
  { name: "Finnish", slug: "finnish", relationship: "Close Finnic relative", explanation: cited("Finnish and Estonian share many inherited roots: kala means ‘fish’ in both. Their grammar also uses case forms and length contrasts, though sound change and separate histories have made ordinary conversation hard to follow across the Gulf of Finland without exposure. A Finnish speaker may recognize a sign before understanding a rapid conversation.", "glottolog-estonian", "estinst-language") },
  { name: "Võro", relationship: "South Estonian regional language", explanation: cited("Võro belongs to the South Estonian side of the Finnic family. Its speakers and institutions cultivate written Võro, teaching, books, and media. Calling it a mere deviation from standard Estonian misses that separate literary and community history; the standard examples in this guide are not Võro examples.", "voro-institute", "wiki-estonian") },
  { name: "Livonian", relationship: "Related Finnic language with Baltic contact", explanation: cited("Livonian developed in the eastern Baltic alongside other Finnic languages and shows its own contact with Latvian. Its heritage is distinct from Estonian, even where older words look familiar. Genetic kinship does not turn Livonian into an Estonian dialect.", "glottolog-estonian", "estinst-language") },
  { name: "Hungarian", slug: "hungarian", relationship: "Distant Uralic relative", explanation: cited("Hungarian belongs to another branch of Uralic. The relationship is old enough that shared ancestry seldom supplies an obvious everyday word or mutual understanding. Its case endings do not mean that an Estonian learner can transfer Hungarian grammar wholesale.", "glottolog-estonian", "wiki-estonian") }
] satisfies LanguageGuide["relationships"]["languages"];

export const estonianGuide: LanguageGuide = {
  slug: "estonian",
  name: "Estonian",
  autonym: "eesti keel",
  status: "published",
  publishedAt: "2026-09-27",
  summary: "Estonian is the public and home language of much of Estonia, with a Finnic history and a distinctive rhythm. Explore its three-way quantity, changing word stems, regional voices, and practical paths into current speech.",
  family: "Uralic · Finnic",
  macroRegion: "Estonia, the eastern Baltic, and communities abroad",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "Listen to the rhythm of a word, then learn its three main forms. That pair of habits makes Estonian case endings and everyday speech far easier to recognize.",
  hero: { imageAlt: "Estonian text with õ, ä, ö and ü beside a marked page of vocabulary", callToActionLabel: "Explore Estonian speech" },
  classification: "A Finnic language of the Uralic family; this guide's examples use contemporary standard Estonian",
  speakerCommunity: "Estonian is a first language for many residents of Estonia and an additional language for others. The 2021 census reported that 67 percent of residents aged at least three spoke it as a mother tongue and another 17 percent as a foreign language.\n\nSpeakers live in cities, islands, rural districts, and diasporas. Estonian shares public life in Estonia with Russian, Ukrainian, English, sign languages, and many other languages.",
  facts: [
    { label: "Family", value: "Uralic · Finnic" },
    { label: "2021 census", value: "67% of Estonia's residents aged 3+ reported Estonian as a mother tongue; 17% reported it as another language" },
    { label: "Public status", value: "Official language of Estonia and of the European Union" },
    { label: "Writing", value: "Latin alphabet; õ, ä, ö and ü are ordinary Estonian letters" },
    { label: "Core grammar", value: "Nominative, genitive and partitive are the three principal noun forms" },
    { label: "Sound", value: "Three quantity degrees affect stressed syllables; ordinary spelling does not always distinguish the latter two" }
  ],
  introduction: cited("Estonian, or eesti keel, is spoken across Estonia and in communities abroad. It is the country's official language and belongs to the Finnic branch of the Uralic family. In Estonia's 2021 census, 67 percent of residents aged three or older reported Estonian as a mother tongue, while another 17 percent reported speaking it as a foreign language.\n\nThe language has close relatives around the eastern Baltic, especially Finnish, but its present standard grew from North Estonian writing and speech. South Estonian varieties, including Võro and Seto, have their own histories and living communities. A standard Estonian newspaper and a Võro-language text therefore need different labels, even when both are part of Estonia's cultural life.\n\nEstonian's sound system gives a sentence much of its character. A stressed syllable can belong to one of three quantity degrees, a contrast that involves more than simply holding one letter longer. Its spelling marks many sounds clearly yet can write two different quantity patterns the same way.", "census-2021", "glottolog-estonian", "wiki-estonian", "voro-institute", "estinst-language", "eki-quantity"),
  origins: {
    overview: cited("Estonian is Finnic, a branch of Uralic that also includes Finnish, Livonian, Votic, and several other languages.\n\nAcross the eastern Baltic, speakers developed local varieties through generations of settlement and contact. North and South Estonian have long differed; specialists do not all place the boundary between language and dialect in the same spot. This guide follows the modern nationwide standard, whose historical base is northern, while treating Võro and Seto by their own names.", "glottolog-estonian", "wiki-estonian", "estinst-language", "voro-institute"),
    timeline: [
      { period: "13th–16th centuries", event: cited("Medieval records preserve Estonian names and scattered words. Sixteenth-century religious manuscripts and printed works give longer passages, though printers had not yet settled a common spelling. A 1535 bilingual catechism is among the earliest surviving printed Estonian texts.", "estinst-language", "wiki-estonian") },
      { period: "17th–18th centuries", event: cited("Clergy and printers worked with both northern and southern written forms. A South Estonian New Testament appeared in 1686, and a North Estonian Bible followed in 1739. Religious printing helped establish reading conventions while communities continued to speak their local forms.", "estinst-language", "wiki-estonian") },
      { period: "19th century", event: cited("Schools, newspapers, folklore collection, and literature widened Estonian's written public life. North Estonian became the main base for the common literary standard. Writers also kept regional forms visible rather than making them disappear from speech or art.", "estinst-language", "wiki-estonian") },
      { period: "1918–present", event: cited("The republic established Estonian in national public life after independence in 1918. Soviet occupation changed institutions and brought sustained contact with Russian; restored independence in 1991 renewed Estonian's official position. Today's writing, broadcast media, dictionaries, and online conversation continue to change its usage.", "wiki-estonian", "estinst-language", "sonaveeb") }
    ],
    contactHistory: cited("Older Baltic and Germanic contacts helped shape the vocabulary. Middle Low German left many words through trade and towns; later Standard German, Swedish, and Russian contact added other layers. The spelling and sound of a loan can change so much that an English gloss will not reveal its route into Estonian.\n\nModern speakers also adapt international and English-origin words. A borrowed noun may take Estonian case endings once it enters an Estonian sentence.", "estinst-language", "wiki-estonian", "sonaveeb"),
    standardization: cited("Today's standard emerged through print, schools, dictionaries, and language planning, mainly on a North Estonian base. The Institute of the Estonian Language now publishes spelling guidance and Sõnaveeb, whose entries combine lexicography, inflection, translations, and examples. These tools describe and guide public writing without making every local voice a faulty version of it.\n\nSouth Estonian had its own written history and has active contemporary institutions. The Võro Institute supports books and teaching, while the Seto Institute provides Seto learning materials and a language strategy. When a source describes “Estonian dialects,” check whether it is using a broad administrative label or a community's own language name.", "estinst-language", "eki-spelling", "sonaveeb", "voro-institute", "seto-institute")
  },
  variants: {
    overview: cited("Standard Estonian gives people a shared form for schooling, national media, and most official writing. Regional speech does not fall into a neat national versus local split: island, coastal, southern, and urban varieties have different histories, while speakers move among registers in daily life.\n\nThe old North/South division deserves care. Standard Estonian draws mainly on the north; South Estonian encompasses Võro, Seto, Mulgi, and Tartu traditions. Some scholars group these under Estonian dialects, while community institutions may call Võro and Seto languages. \n\nThis guide's unmarked examples are standard Estonian.", "wiki-estonian", "estinst-language", "voro-institute", "seto-institute"),
    items: [
      { name: "Contemporary standard Estonian", note: cited("Schools, national journalism, most books, and official communication rely on a common written form. Formal speech often approaches that standard without matching every written sentence.", "eki-spelling", "sonaveeb") },
      { name: "Everyday colloquial Estonian", note: cited("Conversation may shorten pronouns and familiar expressions, including mina to ma and sina to sa. Speech also has intonation, fillers, and regional choices that a textbook sentence leaves out.", "tartu-verbs", "eki-korp") },
      { name: "Islands, western and northeastern speech", note: cited("Saaremaa, other islands, western areas, and the northeastern coast have recognizable local features and histories of contact. Recordings and local writing show more than a stereotype of an accent.", "wiki-estonian", "estinst-language") },
      { name: "Võro and Seto", note: cited("Võro and Seto are South Estonian varieties with distinct community names, printed material, and cultural work. The Võro Institute argues for recognition as a regional language; the Seto Institute publishes separate Seto resources. They are not interchangeable labels, and the standard forms below should not be presented as their own.", "voro-institute", "seto-institute") }
    ]
  },
  pronunciation: {
    overview: cited("Most native words stress their first syllable. Estonian has nine basic vowel qualities: a, e, i, o, u, õ, ä, ö, and ü. The unfamiliar õ is a back unrounded vowel; hear it in sõna, “word,” and contrast it with rounded o and front rounded ö.\n\nDuration also matters. Traditional descriptions distinguish three quantity degrees, often called short, long, and overlong. The contrast belongs to the rhythm of a stressed syllable and the following syllable, so listening for a single long segment alone can mislead you.", "estinst-language", "eki-quantity"),
    script: "Contemporary standard Estonian in its Latin spelling; no romanization is needed",
    soundSystem: cited("Double vowels and consonants often indicate longer sounds: lina means “linen,” while linna can be a form of linn, “town.” Yet the ordinary spelling linna can represent different grammatical forms with different quantity patterns. A dictionary may add a special grave mark for the third degree; ordinary newspapers do not.\n\nEstonian b, d, and g in native spelling are not simply English voiced stops. They often mark a weaker counterpart to p, t, and k in related forms. Learn a recorded word family, such as tuba, toa, tuba, before making a rule from one isolated letter.", "estinst-language", "eki-quantity", "tartu-partitive", "quantity-study"),
    prosody: cited("Primary stress usually falls on the first syllable, but quantity concerns the timing of a whole foot, roughly a stressed syllable plus what follows. The overlong pattern can have a shorter following syllable than the long pattern. Pitch and sentence emphasis also help listeners interpret the contrast.\n\nDo not write that every doubled letter has three different spellings. In such pairs as genitive linna and partitive linna, ordinary spelling can be identical. Use audio, inflection tables, and context together rather than promising that print alone always settles pronunciation.", "estinst-language", "eki-quantity"),
    learnerTraps: [
      "Replacing õ with o, ö, or English uh instead of listening for its unrounded back quality",
      "Assuming doubled letters always distinguish the second and third quantity degrees in ordinary spelling",
      "Making the first syllable louder but ignoring the timing of the following syllable",
      "Reading written b, d and g as full English voiced stops in native word families",
      "Treating one regional recording as the pronunciation of all Estonian speakers"
    ],
    sampleWords: [
      { original: "sõna", translation: "word", note: "The letter õ has its own vowel quality. Listen beside sona-like guesses and do not round your lips as for o." },
      { original: "öö", translation: "night", note: "The two ö letters represent a long rounded front vowel; stress falls on this only syllable." },
      { original: "lina / linna", translation: "linen / a form of ‘town’", note: "The written n versus nn signals a short versus longer consonant, but the second and third quantity degrees can both be written linna in different grammatical forms." },
      { original: "tuba / toa / tuba", translation: "room / of the room / room as a partitive object", note: "These principal forms from Tartu's grammar show stem alternation; pronunciation also differs across grammatical quantity patterns." },
      { original: "sada / saada (Q2) / saada (Q3)", translation: "hundred / send! / to get or receive", note: "A classic three-degree example. The imperative ‘send!’ and the infinitive ‘to get’ have the same ordinary spelling, but their stressed-syllable quantity differs; Q2 and Q3 are pronunciation labels, not printed letters." },
      { original: "käsi / käe", translation: "hand / of the hand", note: "A changing stem reminds you that clear vowel spelling does not make noun inflection mechanically regular." }
    ]
  },
  writing: {
    overview: cited("Estonian uses the Latin script. Õ, ä, ö, and ü are ordinary letters with their own places in alphabetic order, not optional accents. A reader can often pronounce a new word from its spelling, especially once they know the main vowel values and how doubled letters work.\n\nThe relationship is still not one-to-one. Dictionaries and teaching materials may add pronunciation marks that you would leave out of ordinary prose.", "eki-spelling", "unicode-et", "eki-quantity"),
    primaryScript: "Estonian Latin alphabet",
    romanization: cited("No romanization is needed for contemporary Estonian. Preserve õ, ä, ö, and ü when you copy a name, look up a word, or send a message. Replacing them with plain Latin vowels removes sound distinctions and can make a search less reliable.\n\nUnicode's Estonian sorting rules place these letters after the main a–z sequence in a particular order. Software that uses generic English sorting may put names in an unexpected place.", "eki-spelling", "unicode-et"),
    spellingNorms: cited("EKI's spelling rules cover the alphabet, capitalization, compounds, foreign names, and punctuation. The full Estonian Latin alphabet includes letters such as c, q, w, x, and y chiefly for foreign names and words; native orthography uses a narrower set. Š and ž occur in loanwords.\n\nDo not use a diacritic as decoration or strip one to fit an English keyboard. Check Sõnaveeb when a compound, inflected form, or borrowed spelling feels uncertain.", "eki-spelling", "sonaveeb"),
    styleNotes: [
      cited("Type õ exactly; o and ö represent different vowels, and an omitted tilde can change or obscure a word.", "eki-spelling"),
      cited("Learn the special Estonian alphabet order if you use a paper dictionary or sort names; Unicode CLDR records the locale-specific sequence.", "unicode-et"),
      cited("Treat an added grave pronunciation mark in a dictionary as guidance, not as a letter to reproduce in an email.", "eki-quantity"),
      cited("Preserve a speaker's Võro or Seto orthography when quoting that language; automatic standard-Estonian correction can erase meaningful forms.", "voro-institute", "seto-institute")
    ]
  },
  grammar: {
    overview: cited("An Estonian noun can change shape while an ending adds a role: raamat is “book,” raamatu is its genitive form, and raamatut is its partitive form. The genitive often helps build further cases, while the partitive appears with an open quantity, an ongoing action, and many negative clauses. Learn these three principal forms together.\n\nEstonian has fourteen conventionally named productive noun cases. They are not fourteen one-word replacements for English prepositions. A form can show location, movement, company, or a role in a sentence, while a verb or set phrase can demand a particular case.", "estinst-language", "tartu-partitive", "tartu-plural"),
    typologicalProfile: cited("Estonian is largely suffixing: it puts many grammatical markers after a stem. It also changes stems, as tuba, toa, tuba shows, rather than stacking perfectly predictable pieces. Grammarians call the mixture agglutinative and fusional.\n\nNouns have no grammatical gender and there are no articles equivalent to English a and the. A basic statement commonly has subject, verb, and object in that order, but speakers move familiar or contrasted information to other positions. The object form can signal how complete an event is.", "wiki-grammar", "estinst-language", "tartu-partitive"),
    morphology: cited("The form raamatute is a plural genitive, and raamatutes means “in the books.” But a noun's other forms do not always follow from its nominative by adding a neat suffix. Tartu's materials show hammas, hamba, hammast, “tooth,” and tuba, toa, tuba, “room.”\n\nVerb learning also needs more than one column. Õppima means “to study,” õppida is another infinitive, and õpin means “I study.” The -ma and -da infinitives occur after different verbs and constructions, so a verb card with both forms is more valuable than a bare English translation.", "tartu-plural", "tartu-verbs"),
    syntax: cited("Ma elan Eestis means “I live in Estonia”; the -s on Eestis expresses being inside or in a place. Ma ei ela Ameerikas means “I don't live in America.” The negative ei stays the same across persons in the present, and the following main verb lacks the ordinary personal ending.\n\nWord order can change what sounds like the topic or emphasis. A pronoun may be left out if the verb and context identify the person, but spoken Estonian often keeps short pronouns.", "tartu-verbs", "wiki-grammar"),
    advancedPainPoints: [
      "Choosing a total or partitive object by completion, quantity, negation, and the governing verb",
      "Producing genitive and partitive stems fast enough for spontaneous speech",
      "Hearing quantity contrasts where spelling writes the second and third degrees alike",
      "Choosing internal versus external location cases for particular places and set expressions",
      "Recognizing the -ma and -da infinitives and participles inside longer sentences",
      "Moving between edited standard prose and colloquial speech without confusing their norms"
    ],
    topics: [
      { title: "Three principal noun forms unlock later endings", body: cited("The dictionary headword raamat, “book,” gives raamatu in the genitive and raamatut in the partitive. These forms do different jobs: raamatu can mark a whole singular object in an appropriate clause, while raamatut can mark an ongoing or open event.\n\nThe same three-column habit catches irregular stems. Tuba becomes toa and tuba; hammas becomes hamba and hammast. Practice a noun in short sentences, then ask which stem a new ending attaches to.", "tartu-partitive", "tartu-plural"), example: "Ma loen raamatut.", exampleTranslation: "I'm reading a book. The partitive fits an activity in progress." },
      { title: "The partitive is about scope and verb patterns", body: cited("Otsin korterit means “I'm looking for an apartment,” with korterit in the partitive. Negation also calls for the partitive in many ordinary clauses: Tal ei ole korterit means “They don't have an apartment.” The form is not merely an indefinite article.\n\nSome verbs regularly take a partitive object even where an English speaker imagines a complete thing. Keep the verb and its object together in notes. Tartu's teaching list includes otsima, “look for,” and ootama, “wait for.”", "tartu-partitive"), example: "Üliõpilane otsib korterit.", exampleTranslation: "The student is looking for an apartment." },
      { title: "Location cases distinguish place from movement", body: cited("Eestis means “in Estonia,” Eestisse “into Estonia,” and Eestist “out of Estonia.” Another family, with -l, -le, and -lt, often describes being at, moving to, or coming from a surface or a person. English in, at, and to do not map mechanically onto the Estonian choices.\n\nTartu gives õele, “to the sister,” õel, “the sister has,” and õelt, “from the sister.” The same family can mark recipients or possessors. Learn each place name and common noun with the case it normally takes.", "tartu-locative", "tartu-verbs"), example: "Andsin õele õpiku.", exampleTranslation: "I gave my sister the textbook." },
      { title: "Possession says that something is at someone", body: cited("Õel on uus inglise keele õpik means “My sister has a new English textbook.” The sister has the -l ending, while the book is what exists in her possession. A direct English word-for-word translation would hide the construction.\n\nYou will hear mul on, “I have,” and sul on, “you have,” constantly. Try the pattern with things a person actually owns or needs, then compare it with an ordinary location use of -l.", "tartu-locative"), example: "Mul on uus õpik.", exampleTranslation: "I have a new textbook." },
      { title: "Present verbs agree, but negation uses ei", body: cited("The present of elama, “live,” includes ma elan, sa elad, and ta elab. In the negative, ei appears before a form without those endings: ma ei ela, sa ei ela, ta ei ela. That makes the negative pattern shorter than a learner might expect.\n\nShort pronouns are normal in conversation and appear in teaching examples. Save a positive and negative pair with the same verb, then say both aloud.", "tartu-verbs"), example: "Ma elan Eestis, aga mu sõber ei ela Eestis.", exampleTranslation: "I live in Estonia, but my friend doesn't live in Estonia." },
      { title: "Two infinitives follow different constructions", body: cited("Estonian dictionaries often list a -ma form such as õppima, “to study.” A -da form such as õppida appears in other constructions. These are not two spellings for one interchangeable slot.\n\nTartu's verb lessons list both and show contrasts such as kirjutama, kirjutada, kirjutan. Learn a verb with those forms and one real sentence. The stem may change between them, as õppima, õppida, õpin demonstrates.", "tartu-verbs"), example: "Ma tahan eesti keelt õppida.", exampleTranslation: "I want to learn Estonian." },
      { title: "Numbers can call for a partitive noun", body: cited("After a number greater than one, Estonian often uses a singular partitive noun. Kaks tuba means “two rooms,” even though English makes rooms plural.\n\nThis pattern matters on listings, menus, and tickets. Avoid attaching a plural ending merely because the English translation has one. Check the whole numeral phrase before deciding whether another ending is required.", "tartu-partitive"), example: "Minu korteris on kaks tuba.", exampleTranslation: "There are two rooms in my apartment." }
    ]
  },
  whereSpoken: {
    overview: cited("The 2021 census describes Estonian in Estonia with two broad categories: 67 percent of residents aged three or over named it as a mother tongue, and 17 percent reported it as a foreign language they could speak.\n\nEstonian is used in national institutions, education, publishing, and broadcasting. Residents also bring many other languages into workplaces and homes. In the south, a person may use both standard Estonian and a South Estonian variety, so a simple “Estonian speaker” count can conceal a wider linguistic life.", "census-2021", "wiki-estonian", "voro-institute"),
    regions: [
      { place: "Tallinn and northern Estonia", note: cited("The capital is a major center for standard-language publishing, education, government, and digital media. People also use Russian, English, and other languages there, and everyday Estonian includes local and migrant voices rather than one model accent.", "census-2021", "wiki-estonian") },
      { place: "Tartu and southern Estonia", note: cited("Tartu has an important university and literary history. Standard Estonian is widely used there, while South Estonian traditions remain especially visible farther south and southeast. Historic Tartu-language writing must not be confused with today's nationwide standard.", "estinst-language", "voro-institute") },
      { place: "Võromaa and Setomaa", note: cited("Võro and Seto speakers maintain separate regional names and institutions. Their language work includes teaching material, print, and media. A visitor may encounter standard Estonian and these local languages in the same community.", "voro-institute", "seto-institute") },
      { place: "Islands and western Estonia", note: cited("Saaremaa and other islands have local speech histories shaped by the Baltic Sea and contact among coastal communities. National written Estonian is shared, but a recording from one island should not stand for every western speaker.", "wiki-estonian", "estinst-language") },
      { place: "Diaspora communities", note: cited("Migration and exile carried Estonian beyond the country. Family language, associations, schools, and online media can keep it in use across generations, though community size and daily fluency vary by place.", "wiki-estonian", "estinst-language") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited("An English-speaking beginner can read a surprising amount of Estonian aloud once the alphabet is familiar. Initial stress and a broadly sound-based orthography help. The demanding parts are quantity, changing stems, and case choices that depend on the event and the verb, not simply on an English preposition.\n\nA Finnish speaker has a different starting point because of inherited vocabulary and related structures.", "estinst-language", "eki-spelling", "tartu-partitive"),
    easierAspects: [
      "The Latin alphabet and mostly regular vowel spelling give beginners a quick route into printed text",
      "First-syllable stress is a reliable starting rule for many native words",
      "There is no grammatical gender and no article system to memorize",
      "A small number of principal noun and verb forms reveal many later patterns",
      "Public courses, dictionary tools, corpora, and media give learners authentic material"
    ],
    hardAspects: [
      "The second and third quantity degrees are not consistently distinguished by ordinary spelling",
      "Nominative, genitive, and partitive stems can differ strongly",
      "Object case depends on negation, event completion, quantity, and verb choice",
      "Location cases are partly conventional for particular places and relationships",
      "Colloquial speech may compress forms that a beginner knows only from print"
    ],
    plateauRisks: [
      "Reading subtitles comfortably while failing to hear the quantity and reduced forms in unscripted speech",
      "Memorizing fourteen case names without the three principal forms of common nouns",
      "Choosing a partitive solely by whether English says ‘some’",
      "Treating Võro or Seto text as quirky spelling of standard Estonian"
    ],
    workload: cited("For the first weeks, pair a structured course with short recordings. Practice õ, the front rounded vowels, and a few quantity contrasts before building long lists of nouns. Write each new noun in its nominative, genitive, and partitive forms; say a sentence with each one.\n\nAt an intermediate level, sort your mistakes by object choice, location case, or verb form. Use Sõnaveeb to inspect the paradigm and Korp to see how a phrase appears in edited texts. Add a tutor or conversation group when you want feedback on speech that a dictionary cannot hear.", "integration-study", "sonaveeb", "eki-korp", "eki-quantity")
  },
  advancedLearning: {
    strategy: cited("Begin with Keeleklikk's short lessons and audio, then use Keeletee when the first course no longer stretches you. Keep a three-form noun list and a two-infinitive verb list, but attach each form to a sentence from the course or a dictionary. That prevents a case table from becoming a collection of endings with no situations.\n\nFor serious reading, choose one genre for several weeks: local news, a contemporary novel, or interviews on one subject. Mark every unfamiliar object form and ask what the verb and event are doing.", "integration-study", "tartu-partitive", "tartu-verbs", "sonaveeb"),
    mediaPractice: cited("Pair text and audio whenever possible. Hear a short report once for its subject, read the text, and then listen again for endings that disappeared on the first pass.\n\nDiscover Discomfort's account of living in Estonia gives a small, firsthand set of greetings: tere, aitäh, palun, and vabandust. Its older app review records early Estonian word study but cannot replace a current Estonian course. Treat those articles as context for real interactions, then check forms with EKI or a teacher.", "dd-estonia", "dd-apps", "sonaveeb"),
    dictionariesAndCorpora: cited("Sõnaveeb is the central public dictionary portal from the Institute of the Estonian Language. It brings together meanings, translations, inflection, and usage examples, including corpus material.\n\nEKI's Korp searches modern and historical text collections, learner material, broadcasting transcripts, and some Võro material. Choose a collection before comparing frequency or style.", "sonaveeb", "eki-korp"),
    resources: [
      { type: "course", title: "Keeleklikk", url: "https://www.keeleklikk.ee/", level: "beginner", description: cited("A free online starting course recommended by Estonia's Integration Foundation. Follow its audio and exercises in sequence, then seek feedback on your own pronunciation.", "integration-study", "keeleklikk") },
      { type: "course", title: "Keeletee", url: "https://www.keeletee.ee/", level: "intermediate", description: cited("A follow-on online course with exercises and video. It builds on the basics; pair it with unscripted media so course dialogue does not become your only listening model.", "integration-study", "keeletee") },
      { type: "dictionary", title: "Sõnaveeb", url: "https://sonaveeb.ee/", level: "all", description: cited("EKI's maintained dictionary portal shows forms and examples as well as translations. Use the inflection table before guessing a case from the headword.", "sonaveeb") },
      { type: "corpus", title: "EKI Korp", url: "https://korp.eki.ee/", level: "advanced", description: cited("Searchable Estonian collections across genres and periods. Limit the search to the kind of text you intend to read or write.", "eki-korp") }
    ]
  },
  wordsAndTexts: {
    overview: cited("Estonian words can be short yet carry a full grammatical story. Õu is “yard,” öö is “night,” and sõna is “word”; each shows a vowel that deserves its own sound.\n\nRead words inside texts as well as lists. A folk song, a public notice, a novel, and a message thread choose different repetitions, older forms, and levels of formality. Sõnaveeb and Korp let you trace that difference without treating one English gloss as the whole meaning.", "estinst-language", "sonaveeb", "eki-korp"),
    notableWords: [
      { term: "aitäh", meaning: "thank you", note: cited("An everyday expression of thanks. It appears in Discover Discomfort's short account of local interaction; listen for its final h instead of dropping it as an English speaker might.", "dd-estonia", "sonaveeb") },
      { term: "palun", meaning: "please; here you are; go ahead", note: cited("One small word can frame a request, an offer, or a response. The setting and intonation select its meaning, so a one-word flashcard needs several miniature dialogues.", "dd-estonia", "sonaveeb") },
      { term: "sõna", meaning: "word", note: cited("Its õ makes it a compact pronunciation model. The term also appears in ordinary compounds connected with vocabulary and dictionaries.", "estinst-language", "sonaveeb") },
      { term: "mets", meaning: "forest", note: cited("A common concrete noun in place names, nature writing, and daily speech. Check its inflected forms before adding a location ending; the bare headword is only one member of the family.", "sonaveeb", "eki-korp") },
      { term: "raba", meaning: "bog", note: cited("Raba names a peatland bog, a habitat distinct from a shallow patch of wet ground. Discover Discomfort uses the word in its account of Estonian bog boardwalks.", "dd-estonia", "sonaveeb") },
      { term: "leib", meaning: "bread, especially rye bread", note: cited("The everyday noun often points to dark bread in Estonian food culture, but context still matters. The partitive leiba appears in Tartu's example of buying some bread.", "tartu-partitive", "sonaveeb") }
    ],
    loanwordLayers: cited("Baltic and Germanic loans entered at different periods, with Middle Low German especially visible in older town and trade vocabulary. Later German, Swedish, Russian, and international terms reflect changing institutions and everyday contacts.\n\nDo not infer a word's path from how foreign it looks today. Sõnaveeb is a good first check for current meaning and forms, while historical claims need an etymological reference.", "estinst-language", "wiki-estonian", "sonaveeb"),
    idioms: [
      { original: "Nagu kaks tilka vett.", translation: "Like two peas in a pod; very alike.", note: "Literally ‘like two drops of water.’ Apply it to people or things that look remarkably similar, not to every small resemblance." },
      { original: "Nagu hane selga vesi.", translation: "Like water off a duck’s back; having no effect.", note: "Literally ‘like water onto a goose’s back.’ A remark, warning, or punishment may fail to affect someone at all." },
      { original: "Hoia pöialt!", translation: "Keep your fingers crossed!", note: "Literally ‘hold a thumb.’ Say it when you wish someone luck before a result or event." },
      { original: "Läks metsa.", translation: "It went wrong.", note: "Literally ‘went into the forest.’ A plan, performance, or answer can go metsa; context separates the idiom from an actual walk." }
    ],
    textGenres: [
      "Regilaul, the traditional runic-song repertoire, with performers, collectors, and regional styles kept in view",
      "Nineteenth-century national-awakening writing and the epic Kalevipoeg, read alongside its editorial history",
      "Twentieth-century novels, memoirs, poetry, and writing from exile and Soviet-era Estonia",
      "Contemporary novels, children's books, comics, theatre, film, and lyrics",
      "News reports, public-service notices, interviews, podcasts, and everyday online exchanges",
      "Võro and Seto writing and performance, studied under those communities' own language names"
    ]
  },
  relationships: {
    overview: cited("Estonian and Finnish share Finnic ancestry, while Hungarian is a distant Uralic relative. Genetic kinship means that historical linguists can trace regular inherited patterns.\n\nContact is a second story. Germanic, Baltic, Slavic, and international words entered Estonian at different times; a resemblance may come from borrowing instead of common descent. South Estonian forms also raise a question of naming and identity: Võro and Seto institutions define their own work, while broader classifications sometimes group them with Estonian dialects.", "glottolog-estonian", "estinst-language", "voro-institute", "seto-institute"),
    languages: relatedLanguages
  },
  culturalNotes: "Estonian is heard in classrooms, parliamentary debate, popular music, children's stories, village conversations, and online jokes. Regilaul and Kalevipoeg occupy important places in cultural history, but contemporary literature and media offer many more voices. Read Võro and Seto work as literature in those named varieties, not as colorful errors in the standard.\n\nA text's region, period, and speaker matter as much as its vocabulary.",
  resources: [
    { type: "course", title: "Keeleklikk", url: "https://www.keeleklikk.ee/", level: "beginner", description: cited("A structured free course for early Estonian, with audio and practice. Use it to establish principal forms and everyday questions, then test them in real conversation.", "integration-study", "keeleklikk") },
    { type: "course", title: "Keeletee", url: "https://www.keeletee.ee/", level: "intermediate", description: cited("The next online course after beginner work. Its exercises extend comprehension, but spontaneous conversation still needs a separate source of feedback.", "integration-study", "keeletee") },
    { type: "dictionary", title: "Sõnaveeb", url: "https://sonaveeb.ee/", level: "all", description: cited("Look up meanings, translations, inflection, and examples from the Estonian language institute. Inspect the whole entry before choosing an English equivalent.", "sonaveeb") },
    { type: "corpus", title: "EKI Korp", url: "https://korp.eki.ee/", level: "advanced", description: cited("Search modern and older Estonian texts by collection. It is strongest when you ask a narrow usage question and read enough surrounding context.", "eki-korp") },
    { type: "course", title: "University of Tartu ONENESS grammar", url: "https://keeleweb2.ut.ee/kursused/grammar-2/1351-gr-2-1-ainsuse-osastav-partitive-singular?print=1&tmpl=component", level: "intermediate", description: cited("Short lessons with concrete forms and complete examples for the partitive, location cases, and verbs. Some English glosses are awkward; trust the Estonian example and check a natural translation elsewhere.", "tartu-partitive", "tartu-locative", "tartu-verbs") },
    { type: "other", title: "Võro Institute language pages", url: "https://wi.ee/en/voro-language/", level: "all", description: cited("The community institution explains Võro history, identity, education, and writing. Start here if your interest is Võro rather than nationwide standard Estonian.", "voro-institute") },
    { type: "media", title: "Discover Discomfort: Living in Estonia", url: "https://discoverdiscomfort.com/living-in-estonia/", level: "beginner", description: cited("A firsthand country account with a few practical Estonian greetings and observations. It provides context, not a grammar course or a representative survey of Estonian speakers.", "dd-estonia") },
    { type: "app", title: "Discover Discomfort: language-learning apps", url: "https://discoverdiscomfort.com/language-learning-apps-for-fast-learning/", level: "beginner", description: cited("Includes a brief firsthand trial of Estonian vocabulary in an app, including terviseks and seenele.", "dd-apps") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Tere!", translation: "Hello!", usageNote: "Neutral greeting for most everyday situations; also listed in Discover Discomfort's Estonia account." },
    { original: "Tere hommikust!", translation: "Good morning!", usageNote: "A morning greeting; tere by itself is more flexible across the day." },
    { original: "Aitäh!", translation: "Thank you!", usageNote: "An ordinary expression of thanks. Suur aitäh adds emphasis." },
    { original: "Palun.", translation: "Please; here you are; go ahead.", usageNote: "Its meaning depends on whether you are requesting, handing something over, or inviting someone to speak." },
    { original: "Vabandust!", translation: "Excuse me; sorry!", usageNote: "Said to gain attention or apologize for a minor interruption." },
    { original: "Kuidas läheb?", translation: "How's it going?", usageNote: "Conversational; listen to the reply rather than treating it as a compulsory greeting formula." },
    { original: "Hästi, aitäh.", translation: "Well, thanks.", usageNote: "A short response to a question about how you are doing." },
    { original: "Ma ei saa aru.", translation: "I don't understand.", usageNote: "Ei precedes the verb; use it when you need someone to repeat or rephrase." },
    { original: "Kas te räägite inglise keelt?", translation: "Do you speak English?", usageNote: "Te is a polite singular or a plural ‘you’; kas introduces a yes-or-no question." },
    { original: "Ma õpin eesti keelt.", translation: "I'm learning Estonian.", usageNote: "The language name eesti keel appears here in the partitive eesti keelt." },
    { original: "Kus on bussipeatus?", translation: "Where is the bus stop?", usageNote: "A direct location question; substitute another place name when needed." },
    { original: "Kui palju see maksab?", translation: "How much does this cost?", usageNote: "A practical question in a shop or market." },
    { original: "Nägemist!", translation: "Goodbye!", usageNote: "A common leave-taking; head aega is another option." }
  ],
  sources,
  seo: {
    title: "Estonian Language Guide: Sound, Grammar, History and Learning",
    description: "A researched guide to standard Estonian and its speakers, three-way quantity, noun cases, writing, South Estonian varieties, everyday phrases, and learning resources."
  }
};
