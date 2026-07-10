import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Czech",
    relationship: "Closest major West Slavic neighbor",
    explanation: cited(
      "Polish and Czech share much inherited grammar and vocabulary, but centuries of separate sound change make apparent cognates behave unexpectedly. Polish miasto “city” corresponds to Czech město, and Polish szukać “look for” resembles Czech šukat with a radically different and vulgar meaning. Reading transfers faster than effortless conversation, and false friends reward caution.",
      "glottolog-polish",
      "wiki-polish"
    )
  },
  {
    name: "Slovak",
    relationship: "West Slavic relative",
    explanation: cited(
      "Slovak sits with Czech in the Czech–Slovak branch while Polish is Lechitic. Southern Polish and northern Slovak speech meet across the Carpathians, and the languages share transparent structures such as case, aspect, and grammatical gender. Standard spelling and everyday vocabulary still differ enough that mutual comprehension depends heavily on exposure.",
      "glottolog-polish",
      "wiki-polish"
    )
  },
  {
    name: "Kashubian",
    relationship: "Fellow living Lechitic language",
    explanation: cited(
      "Kashubian is a related language centered in Pomerania and legally recognized in Poland as a regional language. It is not simply “Polish with an accent”: it has its own literary practices, vocabulary, and sound history. Comparing it with Polish reveals features of the wider Lechitic branch without erasing Kashubian speakers’ distinct institutions and identity.",
      "wiki-polish",
      "glottolog-polish"
    )
  },
  {
    name: "Russian",
    slug: "russian",
    relationship: "More distant East Slavic relative and contact language",
    explanation: cited(
      "Russian shares the Slavic inheritance of case, verbal aspect, and much basic vocabulary, but belongs to the East Slavic branch and normally uses Cyrillic. Contact intensified under partitions, empire, war, and state socialism; it is historically important but does not make Polish a transitional Russian variety. Polish remains structurally and historically West Slavic.",
      "wiki-history",
      "glottolog-polish"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const polishGuide = {
  slug: "polish",
  name: "Polish",
  autonym: "polski / język polski",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Polish is a West Slavic language whose dense-looking spelling records precise sound contrasts, and whose cases, verbal aspect, literature, humor, and everyday courtesy reveal a culture of unusually expressive grammatical choices.",
  family: "Indo-European, Slavic, West Slavic, Lechitic",
  macroRegion: "Poland, neighboring European communities, and a global diaspora",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "The first cluster may look forbidding, but Polish spelling soon becomes a map: once cz, sz, ś, ź, ć, and dź stop blending together, the language opens into sharp humor, intimate family history, ambitious fiction, and some of Europe’s most distinctive cinema and song.",
  hero: {
    imageAlt: "A Polish book and handwritten notes showing diacritics and characteristic consonant spellings.",
    callToActionLabel: "Hear Polish in use"
  },
  classification: "An Indo-European language in the Lechitic subgroup of West Slavic",
  speakerCommunity: "Polish is Poland’s common public language and one of the European Union’s largest. Its community includes schoolchildren, engineers naming technology, readers debating Szymborska, regional speakers moving between local and national forms, and families abroad whose Polish mixes with a surrounding language. The standard is widely understood but not socially uniform. Accent, age, and setting shape address, slang, and borrowing. Learners enter this community by listening for who is speaking to whom, not treating every grammatical sentence as equally usable.",
  facts: [
    { label: "Family", value: "Indo-European · Slavic · West Slavic · Lechitic" },
    { label: "Core community", value: "About 40 million first-language speakers worldwide; estimates vary by census definition" },
    { label: "Official role", value: "Official language of Poland and an official language of the European Union" },
    { label: "Writing", value: "Latin alphabet with ą, ć, ę, ł, ń, ó, ś, ź, and ż" },
    { label: "Grammar", value: "Seven cases, three singular genders, verbal aspect, and a special masculine-personal plural category" },
    { label: "Typical stress", value: "Usually on the next-to-last syllable, with important patterned exceptions" }
  ],
  learnerOverview: "A useful first month begins by making Polish spelling audible, not by reciting seven case tables. Learn that sz, ś, and s are different sounds and practice greetings with their rhythm. Collect case forms inside phrases: do domu “homeward,” w domu “at home,” z domu “from home.” Then build families: pisać “write” connects to napisać “write to completion,” pisarz “writer,” and podpis “signature.” Beginners can communicate with imperfect endings while advanced learners continue refining aspect, numeral agreement, courtesy, and idiom. Let a living interest—a relative, city, game, film, or poem—choose the vocabulary you retain.",
  origins: {
    overview: cited(
      "Polish descends from Proto-Slavic through West Slavic and Lechitic. It differentiated gradually among neighboring varieties. State formation and Christianization in 966 created Latin-writing institutions that increasingly recorded Polish names, glosses, and sentences. The 1136 Bull of Gniezno contains hundreds of local names; an early continuous sentence appears in the 13th-century Book of Henryków. Religious writing, law, towns, and print pushed regional speech toward wider written conventions. Renaissance authors made Polish a language of sophisticated prose and poetry. It later developed under different Prussian, Russian, and Austrian regimes during the partitions. War, border shifts, forced migration, urbanization, schools, broadcasting, and post-1989 mobility then transformed its regional map.",
      "wiki-history",
      "wiki-polish",
      "glottolog-polish"
    ),
    timeline: [
      {
        period: "10th–14th centuries",
        event: cited(
          "Christianization connected the emerging Polish polity to Latin literacy. Polish first surfaces through names, glosses, prayers, and sentences inside a manuscript world dominated by Latin; its alphabet had to be adapted for Slavic sounds that Latin spelling did not neatly represent.",
          "wiki-history",
          "rjp-polish"
        )
      },
      {
        period: "15th–16th centuries",
        event: cited(
          "Longer religious and secular works appeared, and print increased pressure for repeatable spelling. Renaissance authors such as Mikołaj Rej and Jan Kochanowski demonstrated that Polish could carry argument, drama, lyric subtlety, and civic identity alongside Latin.",
          "wiki-history",
          "culture-literature"
        )
      },
      {
        period: "17th–18th centuries",
        event: cited(
          "Polish operated across the multilingual Polish–Lithuanian Commonwealth, where Latin, Ruthenian varieties, Yiddish, German, Lithuanian, Armenian, and other languages met. Elite fashions brought strong French influence, while political contraction preceded the partitions of 1772–1795.",
          "wiki-history",
          "wiki-polish"
        )
      },
      {
        period: "1795–1918",
        event: cited(
          "With Polish lands divided among Russia, Prussia, and Austria, schooling and public use differed by partition. Literature and private cultural life carried exceptional symbolic weight. This history helps explain why debates over correctness can still feel tied to continuity and sovereignty rather than mere punctuation.",
          "wiki-history",
          "culture-literature"
        )
      },
      {
        period: "1918 to the digital present",
        event: cited(
          "Independence restored nationwide institutions; the 1936 reform consolidated major spelling norms. War, the Holocaust, border shifts, population transfers, and postwar standard education changed the linguistic map. Today online conversation expands colloquial writing and English-derived vocabulary while institutions document and periodically revise the public norm.",
          "wiki-history",
          "rjp-council",
          "nkjp"
        )
      }
    ],
    contactHistory: cited(
      "Polish vocabulary is an archive of its neighborhoods and fashions. Medieval Christianity and scholarship brought Latin and Czech mediation; town life, crafts, trade, and administration produced layers of German contact. The Commonwealth linked Polish to East Slavic, Lithuanian, Yiddish, Turkic, Armenian, and other communities. Italian terms arrived with Renaissance court culture, French became influential among elites, and Russian left a politically charged contact history during partition and Soviet dominance. Modern English supplies biznes, weekend, komputer, streaming, and workplace jargon, though borrowings are normally bent to Polish spelling, gender, case, and pronunciation. The important story is not “purity” but domestication: obcy “foreign” words become grammatically Polish and acquire local shades of meaning.",
      "wiki-polish",
      "wsjp"
    ),
    standardization: cited(
      "Contemporary standard Polish—polszczyzna ogólna—is sustained through education, publishing, broadcasting, dictionaries, and everyday accommodation across regions. The Polish Language Council, established within the Polish Academy of Sciences under the Language Act, issues opinions and establishes orthographic and punctuation principles, but speakers and editors still negotiate style and new usage. A visible example is the package of spelling changes taking effect in 2026, presented as simplification and greater consistency. “Standard” therefore means a shared and maintained public convention, not a frozen language or proof that regional speech is defective.",
      "rjp-council",
      "language-act",
      "rjp-changes"
    )
  },
  variants: {
    overview: cited(
      "Most speakers understand the national standard, though local vowels, intonation, words, and grammar remain. Traditional descriptions group dialects around Greater Poland, Lesser Poland, Mazovia, and Silesia, with Goral and postwar mixed areas adding complexity. Those labels do not settle identity: Kashubian has legal status as a regional language, while Silesian’s classification is contested. Respect speakers’ chosen labels and never use “dialect” to mean incorrect speech.",
      "wiki-polish",
      "wiki-polish"
    ),
    items: [
      {
        name: "Standard Polish (język ogólnopolski)",
        note: cited(
          "The nationwide norm used in schooling, national media, public administration, and most teaching materials. Actual educated speech is not accentless: speakers retain regional and generational features while sharing the norm.",
          "rjp-polish",
          "wiki-polish"
        )
      },
      {
        name: "Greater Polish and Poznań speech",
        note: cited(
          "Western varieties include local phonetic patterns and a recognizable Poznań vocabulary shaped partly by German contact. Many localisms now function as identity markers rather than a complete alternative grammar used in every setting.",
          "wiki-polish"
        )
      },
      {
        name: "Lesser Polish and Goral varieties",
        note: cited(
          "Southern speech is diverse. Highland Goral forms around the Carpathians are especially audible in music, tourism, and regional performance, but should not be reduced to a costume accent; they belong to living communities with cross-border histories.",
          "wiki-polish"
        )
      },
      {
        name: "Mazovian and Warsaw usage",
        note: cited(
          "Mazovian varieties historically include features such as mazurzenie, where one set of hushing consonants merges with a dental series. Modern Warsaw speech has been heavily reshaped by migration and war, yet urban vocabulary and stylistic identity remain subjects of interest.",
          "wiki-polish"
        )
      },
      {
        name: "Silesian and borderland Polish",
        note: cited(
          "Silesian has vigorous literature, media, advocacy, and disputed classification. Eastern borderland forms reflect long multilingual contact and communities now divided by national borders. Both show why linguistic maps must be read beside migration and political history.",
          "wiki-polish",
          "wiki-polish"
        )
      },
      {
        name: "Diaspora and heritage Polish",
        note: cited(
          "Communities in the United Kingdom, Germany, the United States, Canada, Brazil, Australia, and elsewhere combine Polish with surrounding languages. Heritage speakers may understand family conversation brilliantly while lacking school vocabulary or formal spelling; that is an uneven bilingual profile, not failed Polish.",
          "wiki-polish",
          "wiki-polish"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Polish uses diacritics and digraphs for a rich consonant system. Organize the thicket into three rows: s, z, c, dz are dental; sz, ż/rz, cz, dż are retracted “hushing” sounds; ś/si, ź/zi, ć/ci, dź/dzi are palatal, with the tongue raised toward the hard palate. English “sh” cannot replace both sz and ś. Polish also allows heavy clusters and devoices many consonants word-finally. The letters ą and ę change according to the following sound rather than representing one fixed French-like nasal vowel.",
      "rjp-polish",
      "wiki-polish"
    ),
    script: "Polish Latin alphabet; learner cues use familiar spellings rather than a full phonetic transcription",
    soundSystem: cited(
      "History leaves duplicate spellings: ó/u, rz/ż, and—for most speakers—ch/h are pronounced alike. The letter i may be a vowel, a sign of palatalization, or both; ł is normally w-like. Clusters such as szcz in szczęście are genuine sequences, but fluent speech coordinates them economically. Inserting English-style neutral vowels makes words harder to recognize. Build a cluster from the final syllable outward and imitate natural voicing rather than pronouncing every letter separately.",
      "rjp-polish",
      "rjp-polish"
    ),
    prosody: cited(
      "Stress usually falls on the penultimate syllable: ko-BIE-ta “woman,” ko-BIE-ty “women,” roz-MA-wiam “I talk.” Predictability is a gift, but not an absolute. Certain learned words, conditional forms, and some numeral constructions preserve patterns that can place stress earlier; colloquial speech may regularize them toward the penultimate rule. Intonation carries stance strongly: a short no can mean polite hesitation, surprise, challenge, or “well then” depending on melody. Shadow whole clauses so clusters, stress, and final devoicing live inside Polish rhythm rather than as isolated mouth exercises.",
      "rjp-polish",
      "pitt-grammar"
    ),
    learnerTraps: [
      "Merging sz, ś, and s, or cz, ć, and c, when Polish listeners hear separate categories",
      "Pronouncing written ą and ę as one fixed nasal sound regardless of the consonant that follows",
      "Reading ł as English l instead of the usual w-like sound",
      "Adding a small vowel inside clusters such as kto, trzy, or Gdańsk",
      "Voicing final consonants exactly as spelled instead of hearing normal final devoicing",
      "Applying penultimate stress mechanically to every learned word or compound form"
    ],
    sampleWords: [
      { original: "szybki", translation: "fast", note: "The initial sz is the retracted hushing sound; keep the y central and unrounded rather than turning it into English ee." },
      { original: "siwy", translation: "grey-haired", note: "Compare the softer palatal ś, written si before a vowel, with sz in szybki." },
      { original: "sypać", translation: "to pour or sprinkle loose material", note: "The opening plain s completes a practical three-way contrast with sz and ś." },
      { original: "cześć", translation: "hello; bye; honor", note: "This tiny greeting moves from retracted cz to palatal ś and ć; learn it as one timed gesture." },
      { original: "szczęście", translation: "happiness; good luck", note: "Do not insert vowels into szcz. The ę is conditioned by what follows, and the ending contains the palatal sequence ście." },
      { original: "kąt", translation: "corner; angle", note: "Before t, ą is commonly realized with an oral vowel plus a nasal consonant-like closure, not as a single unchanging nasal vowel." },
      { original: "prośba", translation: "request", note: "The written śb sequence triggers voicing assimilation in ordinary pronunciation; listen before trying to articulate each letter separately." },
      { original: "Wrocław", translation: "Wrocław", note: "Both instances of ł are w-like. The final written w is devoiced, illustrating why spelling and surface pronunciation are close but not identical." }
    ]
  },
  writing: {
    overview: cited(
      "Polish adds nine letters to the Latin alphabet: ą, ć, ę, ł, ń, ó, ś, ź, and ż. Digraphs such as cz, dź, rz, and sz are stable units, while q, v, and x mainly occur in foreign material. An unfamiliar native word can usually be pronounced plausibly. Spelling also preserves history and morphology: ó/u and rz/ż have merged in speech, while alternations such as stół “table” and stoły “tables” expose the relationship.",
      "rjp-polish",
      "unicode-polish",
      "rjp-polish"
    ),
    primaryScript: "Polish Latin alphabet",
    romanization: cited(
      "Polish needs no separate romanization because it already uses Latin script. For learners, respelling Polish as English—writing “cheshch” for cześć—usually creates more ambiguity than it removes. Learn the Polish letter-to-sound system directly. When a keyboard lacks Polish input, people sometimes omit diacritics informally, but this can merge distinct words and looks careless in edited text. Unicode encodes Polish letters reliably; selecting a Polish keyboard layout is more useful than maintaining an ASCII substitute system.",
      "unicode-polish",
      "rjp-polish"
    ),
    spellingNorms: cited(
      "Spelling frequently makes a word family visible across sound alternation. The same prefix or root may be pronounced differently through assimilation while its conventional spelling stays stable. Learners must also master when nie is joined to or separated from another word, capitalization of nationalities and adjectives, and comma rules around subordinate clauses. The Polish Language Council’s 2026 changes adjust several conventions, including capitalization and combined or separate writing; current learners should check the date of prescriptive materials rather than assume an old exercise book reflects the active norm.",
      "rjp-changes",
      "rjp-council",
      "wsjp"
    ),
    styleNotes: [
      cited("Treat diacritics as letters, not decoration: z, ź, and ż can distinguish words and occupy separate positions in dictionary order.", "unicode-polish", "rjp-polish"),
      cited("Notice alternations across a family—ręka “hand,” ręce “hand” in the locative, rąk “of hands”—rather than memorizing every form as an unrelated spelling surprise.", "pitt-grammar"),
      cited("Use an up-to-date institutional spelling reference for formal writing because the public norm can change; spellcheckers may lag or disagree during transitions.", "rjp-changes"),
      cited("Read Polish punctuation as structure. Commas often mark subordinate clauses where English punctuation might omit one, but transferring every English comma produces errors.", "rjp-council")
    ]
  },
  grammar: {
    overview: cited(
      "Polish endings often bundle case, number, and gender, while verbs identify person and number without an overt pronoun. Learn these large paradigms through contrasts: Widzę dom “I see a house” becomes Nie widzę domu “I don’t see a house”; Jestem studentką “I am a female student” puts the role noun in the instrumental. Each pair connects an ending to a communicative job, and flexible order gradually becomes expressive rather than chaotic.",
      "rjp-polish",
      "pitt-grammar",
      "wiki-grammar"
    ),
    typologicalProfile: cited(
      "Nouns and their modifiers decline through nominative, genitive, dative, accusative, instrumental, locative, and vocative cases. Singular nouns are conventionally masculine, feminine, or neuter; in the plural, agreement centrally distinguishes masculine-personal groups from everything else. Verbs conjugate for person and number, past forms agree in gender, and aspect contrasts an event viewed as ongoing/repeated with one viewed as bounded or completed. Basic clauses often resemble subject–verb–object order, yet case marking lets speakers move constituents to manage topic, contrast, and focus.",
      "rjp-polish",
      "wiki-grammar"
    ),
    morphology: cited(
      "A Polish dictionary gives a starting form, not the only form encountered in text. Adjectives agree with nouns, numerals can impose special case and agreement patterns, and common stems alternate at morpheme boundaries: ręka becomes ręce, noga becomes nodze, and człowiek has the irregular plural ludzie. Verbs often come in imperfective–perfective pairs such as pisać/napisać “write/be writing” versus “write to completion,” but prefixes can add lexical meaning and pairs are not mechanical twins. Derivation is exceptionally productive: dom “house,” domek “little house,” domowy “domestic/home,” bezdomny “homeless,” and zadomowić się “make oneself at home” form a learnable network.",
      "wiki-grammar",
      "wsjp"
    ),
    syntax: cited(
      "Neutral order often places known information early and the newest or most contrastive material late. Pronouns may disappear because verb endings identify the subject: Mieszkam w Krakowie means “I live in Kraków” without ja. Moving ja forward can mark contrast—Ja mieszkam w Krakowie, “I’m the one who lives in Kraków.” Negation normally uses nie immediately before the finite verb and can trigger genitive on an object that would be accusative affirmatively. Questions need no English-style auxiliary: Czy masz czas? or simply Masz czas? means “Do you have time?” Small particles such as już, jeszcze, przecież, chyba, właśnie, and nawet carry much of natural conversational stance.",
      "wiki-grammar",
      "nkjp"
    ),
    advancedPainPoints: [
      "Choosing case from the governing verb or preposition while also producing the right gender and number ending",
      "Selecting aspect according to event structure, repetition, intention, negation, and conversational framing",
      "Handling numerals, especially forms whose noun and verb agreement does not match English intuition",
      "Controlling masculine-personal plural forms without treating mixed human groups as ordinary noun plurals",
      "Using word order and particles to sound appropriately emphatic rather than merely grammatical",
      "Switching among intimate ty, plural wy, and honorific Pan/Pani/Państwo with matching third-person grammar"
    ],
    topics: [
      {
        title: "Case marks a noun’s role",
        body: cited("Case is a set of noun, adjective, pronoun, and numeral forms licensed by syntactic roles and governing words. Do not translate an ending by one English preposition: learn a construction. The preposition z takes instrumental for “with” but genitive for “from,” so the relationship determines the form.", "pitt-grammar", "wiki-grammar"),
        example: "Idę z moją siostrą, ale wracam z pracy sam.",
        exampleTranslation: "I’m going with my sister, but I’m returning from work alone."
      },
      {
        title: "Negation can change the object",
        body: cited("A direct object often appears in the accusative in an affirmative clause but the genitive under negation. In real usage the system has lexical and stylistic complexities, yet this central contrast is frequent enough to learn immediately.", "wiki-grammar", "nkjp"),
        example: "Mam nowy telefon. Nie mam nowego telefonu.",
        exampleTranslation: "I have a new phone. I don’t have a new phone."
      },
      {
        title: "Aspect describes the shape of an event",
        body: cited("Imperfective verbs present activity, process, or repetition; perfective partners present a bounded event, often with an achieved result. Aspect is not simply present versus past: both members can appear in the past, while a formally present perfective usually refers to the future.", "wiki-grammar", "rjp-polish"),
        example: "Pisałam raport przez godzinę, ale jeszcze go nie napisałam.",
        exampleTranslation: "I was writing the report for an hour, but I still haven’t finished writing it."
      },
      {
        title: "Past tense shows gender",
        body: cited("Past-tense forms historically combine an l-participle with person marking and agree with the subject’s gender and number. A woman says zrobiłam, a man zrobiłem, while plural forms additionally distinguish masculine-personal groups.", "wiki-grammar", "pitt-grammar"),
        example: "Wczoraj byłam zmęczona, więc poszłam spać wcześniej.",
        exampleTranslation: "Yesterday I was tired, so I went to bed earlier. (said by a woman)"
      },
      {
        title: "Masculine-personal plural reshapes agreement",
        body: cited("Plural agreement distinguishes groups containing male persons from non-masculine-personal groups. Thus dobrzy studenci “good male/mixed students” contrasts with dobre studentki “good female students.” The distinction affects adjectives, pronouns, numerals, and past verbs, not only one noun ending.", "wiki-grammar", "rjp-polish"),
        example: "Nowi nauczyciele przyszli, a nowe nauczycielki już czekały.",
        exampleTranslation: "The new male teachers arrived, while the new female teachers were already waiting."
      },
      {
        title: "Numbers govern surprising forms",
        body: cited("After dwa, trzy, and cztery, many counted nouns use a nominative-like plural; after pięć and higher, they commonly use genitive plural and the verb appears in singular neuter. This is why a numeral phrase must be learned with its noun and verb, not as arithmetic vocabulary alone.", "wiki-grammar", "pitt-grammar"),
        example: "Dwie osoby czekały, ale pięć osób już weszło.",
        exampleTranslation: "Two people were waiting, but five people had already gone in."
      },
      {
        title: "Word order manages focus",
        body: cited("Because endings identify roles, order can respond to discourse. Książkę kupiła Anna naturally highlights the book or corrects what was bought; Anna kupiła książkę is a more neutral report. These are not interchangeable in every context even though the participants remain the same.", "wiki-grammar", "nkjp"),
        example: "To nie Marek napisał ten list — napisała go Ania.",
        exampleTranslation: "It wasn’t Marek who wrote this letter—Ania wrote it."
      },
      {
        title: "Courtesy has grammar",
        body: cited("Polish commonly addresses an unfamiliar adult with Pan “Mr/sir,” Pani “Ms/madam,” or plural Państwo plus a third-person verb. Using ty can signal closeness, solidarity, age hierarchy, aggression, or an explicitly negotiated shift, so textbook “you” is a social decision.", "wiki-polish", "nkjp"),
        example: "Czy może mi pani pomóc? Możemy przejść na ty?",
        exampleTranslation: "Could you help me, ma’am? Can we use first-name/informal terms?"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Polish is overwhelmingly centered in Poland but has several kinds of community beyond it. Some speakers belong to long-established minorities in Lithuania, Belarus, Ukraine, and the Czech Republic; others descend from economic and political migrations to the Americas, western Europe, Israel, and Australia; newer European mobility has built large networks especially in the United Kingdom, Germany, Ireland, the Netherlands, and Scandinavia. Counts differ because censuses may ask about mother tongue, home language, ability, nationality, or ancestry—categories that are not interchangeable.",
      "wiki-polish",
      "wiki-polish"
    ),
    regions: [
      { place: "Poland", note: cited("The national public language and home language of the great majority, used across administration, education, broadcasting, publishing, and digital life alongside recognized minority and regional languages.", "language-act", "wiki-polish") },
      { place: "Lithuania, Belarus, Ukraine, and Czechia", note: cited("Historic Polish-speaking communities remain, especially around Vilnius and in border regions. Their speech and institutions reflect changing frontiers and multilingual contact rather than simply recent emigration.", "wiki-polish") },
      { place: "Germany, the United Kingdom, Ireland, and western Europe", note: cited("Postwar and post-EU-accession migration supports schools, churches, shops, media, and families where Polish ranges from dominant adult language to a heritage language for children.", "wiki-polish") },
      { place: "United States and Canada", note: cited("Multiple migration waves created durable Polish and Polish-American institutions. Community speech may preserve regional or older vocabulary while code-switching and language shift vary sharply by generation.", "wiki-polish") },
      { place: "Brazil, Argentina, Israel, and Australia", note: cited("These communities arose through distinct migrations and cannot be described by one diaspora story. Speakers’ Polish may connect family memory, religion, wartime displacement, or renewed contact with contemporary Poland.", "wiki-polish") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Polish asks English-speaking learners to coordinate unfamiliar consonants, case agreement, aspect, gender, and flexible order. Calling it “the world’s hardest language” is marketing: Slavic-language and heritage learners begin with different advantages. Progress is uneven too—basic interaction may improve quickly while natural aspect and case remain long projects. Use difficulty to choose training: isolate sound contrasts, recycle complete phrases, and seek correction.",
      "rjp-polish",
      "pitt-grammar"
    ),
    easierAspects: [
      "The Latin-based spelling system is substantially more regular than English once its digraphs and diacritics are learned",
      "Stress is usually predictable, reducing the number of arbitrary word-level accents",
      "Verb endings often reveal the subject, and there are no articles equivalent to English a and the",
      "Polish has abundant dictionaries, corpora, subtitled media, teachers, and contemporary publishing",
      "Word families make derivation and prefixes increasingly useful as vocabulary grows"
    ],
    hardAspects: [
      "Three sibilant series and consonant clusters require listening categories that English does not supply",
      "Case endings interact with gender, animacy, number, prepositions, verbs, and sound alternations",
      "Aspect pairs must be learned through meaning and usage rather than one reliable formation rule",
      "Numerals and masculine-personal plural agreement produce forms unlike English counting phrases",
      "Formal address and particles require social and pragmatic judgment beyond literal translation"
    ],
    plateauRisks: [
      "Reading fluently while continuing to merge ś/sz or ć/cz in speech",
      "Knowing case charts but not the verb-plus-case and preposition-plus-case chunks that drive real sentences",
      "Choosing a perfective prefix mechanically and accidentally changing the verb’s lexical meaning",
      "Watching media passively without replaying and transcribing short passages",
      "Using ty with everyone or avoiding Polish honorifics because English translations hide the distinction"
    ],
    workload: cited(
      "A serious week might include three short pronunciation sessions, daily sentence review, one grammar lesson, one corrected conversation, and one replayed media clip. Beginners need stable high-frequency constructions more than perfect endings. Intermediate learners can retell one event as ongoing, habitual, and completed to train aspect, then record corrections by pattern. Advanced learners should compare genres such as interviews, workplace email, fiction, and family voice notes. Consistency outperforms a short intensive course followed by silence.",
      "dd-resources",
      "nkjp"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Give each tool one job: a course for sequence, a teacher for correction, sentence cards for review, a dictionary for inflection, a corpus for authentic combinations, and media you genuinely follow. This applies Discover Discomfort’s preference for structure, sentences, sound, correction, and people over collecting apps. Tag Polish phrases for case, aspect, and register: store pomagać komuś w czymś “help someone with something,” not simply pomagać “help.”",
      "dd-resources",
      "wsjp",
      "nkjp"
    ),
    mediaPractice: cited(
      "Polskie Radio supplies news, interviews, culture, and regional voices; Culture.pl leads into writers, cinema, and music before you tackle originals. Listen once for the situation, again with text, extract five phrases, then retell the piece aloud. Recorded poetry exposes rhythm and consonant control, but pair it with conversation so elevated vocabulary does not become your default voice.",
      "polskie-radio",
      "culture-literature"
    ),
    dictionariesAndCorpora: cited(
      "WSJP PAN is a descriptive, corpus-based dictionary of contemporary Polish with meanings, usage labels, combinations, inflection, and often etymology. The National Corpus of Polish contains a large, genre-diverse collection of literature, press, conversation, ephemeral writing, and internet material with search tools sensitive to inflection. Use the dictionary to discover a construction, then the corpus to compare speakers and genres. Frequency alone is not correctness: inspect dates, source type, capitalization, and whether a result is quotation, typo, or deliberately nonstandard dialogue.",
      "wsjp",
      "nkjp"
    ),
    resources: [
      { type: "course", title: "Polski.info", url: "https://polski.info/", level: "beginner", description: cited("A free multilingual learning platform with leveled Polish materials. Use it as the sequenced spine of a beginner program and bring its sentences to a teacher for pronunciation and expansion.", "polski-info") },
      { type: "dictionary", title: "Wielki słownik języka polskiego PAN", url: "https://wsjp.pl/", level: "all", description: cited("The Polish Academy’s large contemporary dictionary, grounded in corpus evidence and rich in usage, inflection, collocation, and style information.", "wsjp") },
      { type: "corpus", title: "Narodowy Korpus Języka Polskiego", url: "https://nkjp.pl/", level: "advanced", description: cited("A reference corpus exceeding 1.5 billion words across varied genres. Search declined forms and constructions to test what polished examples omit.", "nkjp") },
      { type: "media", title: "Polskie Radio", url: "https://www.polskieradio.pl/", level: "intermediate", description: cited("National radio networks and podcasts spanning news, music, history, science, and culture. Repeated short segments provide controlled exposure to formal and conversational registers.", "polskie-radio") },
      { type: "media", title: "Culture.pl", url: "https://culture.pl/en", level: "all", description: cited("English- and Polish-language introductions to literature, film, music, theater, design, and history. It helps learners choose culturally meaningful Polish originals rather than generic exercises.", "culture-literature") },
      { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A practical guide to combining a course, sentence source, audio habit, human correction, and community. Polish has more material than many languages discussed, but the resource-stack method transfers directly.", "dd-resources") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Derivation makes Polish roots radiate into families, while diminutives and particles add interpersonal color. Kawka can mean a small coffee, an affectionate coffee break, or simply coffee in a warm frame. “Untranslatable” lists exaggerate uniqueness, but prefixes, suffixes, and flexible order do create expressive effects. Learn each attractive word with its grammar and setting, not as a cultural slogan.",
      "wsjp",
      "nkjp"
    ),
    notableWords: [
      { term: "szczęście", meaning: "happiness; luck; good fortune", note: cited("The word covers both an emotional state and favorable chance. Mam szczęście means “I’m lucky,” while dużo szczęścia can wish someone plenty of happiness or luck. Its famous spelling is also an excellent pronunciation workout.", "wsjp") },
      { term: "tęsknota", meaning: "longing; yearning", note: cited("Related to tęsknić “to miss/long for,” it can point toward a person, place, time, or lost possibility. It is emotionally resonant but not proof of a uniquely Polish feeling; what matters is how readily the noun frames absence as an object of reflection.", "wsjp", "nkjp") },
      { term: "załatwić", meaning: "arrange, take care of, obtain, or settle", note: cited("A high-value verb whose meaning depends on its object: załatwić sprawę is to sort out a matter, załatwić bilet may be to procure a ticket. It can imply efficient handling, negotiation, or euphemistic disposal, so context is essential.", "wsjp", "nkjp") },
      { term: "kombinować", meaning: "figure out, devise, maneuver, or scheme", note: cited("Sometimes it praises resourcefulness; sometimes it suspects rule-bending. Co ty kombinujesz? can mean “What are you up to?” The register and speaker’s tone decide whether ingenuity or dubious maneuvering dominates.", "wsjp", "nkjp") },
      { term: "ogarniać", meaning: "embrace/cover; colloquially understand or get under control", note: cited("In contemporary colloquial use, Nie ogarniam can mean “I don’t get it” or “I can’t cope with all this,” while ogarnąć mieszkanie means get the flat sorted. It is useful but informal and semantically broad.", "wsjp", "nkjp") },
      { term: "przykro", meaning: "sorry; sad or unpleasant", note: cited("The impersonal phrase Jest mi przykro literally frames unpleasantness as being “to me” and can express sympathy, regret, or an apology. It does not map perfectly onto every English use of sorry.", "wsjp") },
      { term: "swojski", meaning: "familiar, home-like, local, unpretentious", note: cited("From swój “one’s own,” swojski can warmly describe food, atmosphere, humor, or a person as comfortably familiar. Depending on context it may also suggest rustic simplicity rather than cosmopolitan polish.", "wsjp", "nkjp") },
      { term: "żal", meaning: "regret, sorrow, resentment, or pity", note: cited("A compact noun with a wide emotional field. Żal mi means “I feel sorry for/I regret,” mieć żal do kogoś means hold a grievance against someone, and szkoda can be a better everyday equivalent for some English regrets.", "wsjp") }
    ],
    loanwordLayers: cited(
      "Latin appears in religious, legal, and scholarly layers; German contact is visible in urban, craft, culinary, and commercial vocabulary; Italian and French mark particular eras of court, fashion, art, and cuisine. Yiddish and East Slavic contact contributed to colloquial and regional life, though etymologies are sometimes popularly oversimplified. Recent English loans enter technology, business, sport, and youth language, then take Polish endings: hejt “online hate” produces hejtować “to post hate,” and scrollować “to scroll” conjugates like a Polish verb. Borrowing is productive grammar in action, not a failure to invent.",
      "wiki-polish",
      "wsjp"
    ),
    idioms: [
      { original: "Nie mój cyrk, nie moje małpy.", translation: "Not my problem or responsibility.", note: "Literally “not my circus, not my monkeys.” Playful and now internationally famous; useful when distancing yourself from someone else’s chaos, but too flippant for another person’s serious misfortune." },
      { original: "Trzymać kciuki.", translation: "To keep one’s fingers crossed; wish luck.", note: "Literally “to hold thumbs.” Polish luck is conventionally held in the thumbs rather than crossed fingers: Trzymam kciuki za ciebie means “I’m rooting for you.”" },
      { original: "Bułka z masłem.", translation: "Something very easy; a piece of cake.", note: "Literally “a bread roll with butter.” Conversational and vivid. To say an exam was easy: Egzamin był bułką z masłem." },
      { original: "Rzucać grochem o ścianę.", translation: "To speak in vain to someone who will not listen.", note: "Literally “to throw peas at a wall.” The image emphasizes that advice simply bounces back without effect." },
      { original: "Co ma piernik do wiatraka?", translation: "What does that have to do with anything?", note: "Literally “what does gingerbread have to do with a windmill?” Used when a connection seems irrelevant or absurd; tone can be humorous or sharply dismissive." }
    ],
    textGenres: [
      "Poetry, from Kochanowski and Mickiewicz to Miłosz, Szymborska, Herbert, and living performance poets",
      "Reportaż, the Polish tradition of literary reportage associated with writers such as Ryszard Kapuściński and Hanna Krall",
      "Crime fiction, speculative fiction, fantasy, and games writing with large contemporary audiences",
      "Film dialogue, cabaret, stand-up, podcasts, and internet commentary where timing and particles matter",
      "Song lyrics across sung poetry, folk, jazz, rock, hip-hop, electronic music, and regional traditions"
    ]
  },
  relationships: {
    overview: cited(
      "Distinct Slavic standards reflect sound change, literature, institutions, borders, and identity. Polish speakers recognize roots and case ideas in Czech, Slovak, Ukrainian, or Russian, but resemblance neither guarantees understanding nor makes one language a distorted version of another. Kashubian is a living fellow Lechitic language; Czech and Slovak are neighboring West Slavic relatives.",
      "glottolog-polish",
      "wiki-polish"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Polish public courtesy is built into address: Dzień dobry spans much of the day, Pan and Pani take third-person grammar, and titles may remain useful where English shifts to first names. Friendship can then bring diminutives, irony, teasing, and shared references. Explore Szymborska’s deceptively plain poetry, Lem’s philosophical science fiction, Tokarczuk’s layered prose, reportage, crime fiction, film, hip-hop, and podcasts. Learn through specific works and conversations rather than asking one novel to explain “the Polish mentality.”",
  resources: [
    { type: "course", title: "Polski.info", url: "https://polski.info/", level: "beginner", description: cited("A structured free platform for building an initial grammar and phrase base. Its leveled organization makes it more useful as a main path than as another tab in an app collection.", "polski-info") },
    { type: "dictionary", title: "Wielki słownik języka polskiego PAN", url: "https://wsjp.pl/", level: "all", description: cited("Use its meanings, qualifiers, collocations, and inflection to decide not only what a word can mean but where it sounds at home.", "wsjp") },
    { type: "corpus", title: "National Corpus of Polish", url: "https://nkjp.pl/", level: "advanced", description: cited("Search authentic combinations across conversation, journalism, literature, and online text; compare many results before generalizing.", "nkjp") },
    { type: "media", title: "Polskie Radio", url: "https://www.polskieradio.pl/", level: "intermediate", description: cited("Choose one recurring host or series so the voice and topic become familiar enough for intensive replay.", "polskie-radio") },
    { type: "media", title: "Culture.pl", url: "https://culture.pl/en", level: "all", description: cited("A discovery layer for Polish books, films, music, design, and cultural history, with accessible English context alongside Polish names and works.", "culture-literature") },
    { type: "other", title: "Polish Language Council", url: "https://rjp.pan.pl/", level: "advanced", description: cited("The institutional source for current public-language opinions, spelling principles, and explanations of normative change.", "rjp-council", "rjp-changes") },
    { type: "other", title: "Discover Discomfort learning-resource method", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A concise way to audit whether your study plan has structure, sentences, audio, correction, and people instead of redundant tools.", "dd-resources") }
  ],
  relatedLanguages,
  phrases: [
    { original: "Dzień dobry.", translation: "Good morning / good day.", usageNote: "The safe standard greeting for shops, workplaces, strangers, and daytime formal interaction." },
    { original: "Cześć!", translation: "Hi! / Bye!", usageNote: "Informal; use with friends, children, and people with whom informal terms are established." },
    { original: "Dobry wieczór.", translation: "Good evening.", usageNote: "An evening greeting, not normally the phrase said when taking leave." },
    { original: "Do widzenia.", translation: "Goodbye.", literalMeaning: "Until seeing [each other].", usageNote: "Neutral and polite for taking leave." },
    { original: "Proszę.", translation: "Please; here you are; you’re welcome; go ahead.", usageNote: "A remarkably context-dependent courtesy word. Intonation and situation select the sense." },
    { original: "Dziękuję.", translation: "Thank you.", usageNote: "Dzięki is the common informal equivalent; bardzo dziękuję adds emphasis." },
    { original: "Przepraszam.", translation: "Excuse me; I’m sorry.", usageNote: "Use to attract attention, pass someone, or apologize; a fuller apology explains what happened." },
    { original: "Czy mówi pan / pani po angielsku?", translation: "Do you speak English, sir / ma’am?", usageNote: "Choose pan for a man and pani for a woman; the third-person verb is part of polite address." },
    { original: "Nie rozumiem.", translation: "I don’t understand.", usageNote: "Add Czy może pan/pani powtórzyć? to politely ask someone to repeat." },
    { original: "Poproszę kawę.", translation: "I’d like a coffee, please.", literalMeaning: "I will ask for a coffee.", usageNote: "A natural service encounter formula; the requested item takes the accusative." },
    { original: "Ile to kosztuje?", translation: "How much does this cost?", usageNote: "A useful neutral question in shops and markets." },
    { original: "Gdzie jest toaleta?", translation: "Where is the toilet?", usageNote: "Direct but normal; przepraszam can introduce the question politely." },
    { original: "Miło mi.", translation: "Nice to meet you.", literalMeaning: "It is pleasant to me.", usageNote: "Often follows an introduction; Bardzo mi miło is warmer or more formal." },
    { original: "Smacznego!", translation: "Enjoy your meal!", literalMeaning: "[Something] tasty!", usageNote: "Said to people who are eating, including when you join or pass a table." },
    { original: "Na zdrowie!", translation: "Cheers! / Bless you!", literalMeaning: "To health!", usageNote: "Used for a toast and after a sneeze; context makes the meaning obvious." }
  ],
  sources: [
    { id: "dd-resources", title: "Best Less-Common Language Learning Resources: What Actually Works", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", updatedAt: "2026-05-11", accessedAt: "2026-07-10" },
    { id: "wiki-polish", title: "Polish language", url: "https://en.wikipedia.org/wiki/Polish_language", publisher: "Wikipedia", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "wiki-history", title: "History of the Polish language", url: "https://en.wikipedia.org/wiki/History_of_the_Polish_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-grammar", title: "Polish grammar", url: "https://en.wikipedia.org/wiki/Polish_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "glottolog-polish", title: "Glottolog 5.3: Polish", url: "https://glottolog.org/resource/languoid/id/poli1260", publisher: "Max Planck Institute for Evolutionary Anthropology", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "rjp-council", title: "Rada Języka Polskiego przy Prezydium PAN", url: "https://rjp.pan.pl/", publisher: "Polish Language Council, Polish Academy of Sciences", accessedAt: "2026-07-10" },
    { id: "rjp-polish", title: "The Polish Language", url: "https://rjp.pan.pl/app/uploads/2025/10/jp_angielski.pdf", publisher: "Polish Language Council", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "rjp-changes", title: "Polish Language Council communiqué on spelling rules effective 1 January 2026", url: "https://rjp.pan.pl/zmiany-pisowni-2026/komunikatradyjezykapolskiegoprzyprezydiumpanzdnia10pazdziernika20204r/", publisher: "Polish Language Council", publishedAt: "2024-10-10", accessedAt: "2026-07-10" },
    { id: "language-act", title: "Act of 7 October 1999 on the Polish Language", url: "https://eli.gov.pl/api/acts/DU/1999/999/text.html", publisher: "Republic of Poland Electronic Legislation", publishedAt: "1999-10-07", accessedAt: "2026-07-10" },
    { id: "nkjp", title: "Narodowy Korpus Języka Polskiego", url: "https://nkjp.pl/", publisher: "Institute of Computer Science PAN and partner institutions", updatedAt: "2012", accessedAt: "2026-07-10" },
    { id: "wsjp", title: "Wielki słownik języka polskiego PAN", url: "https://wsjp.pl/", publisher: "Institute of Polish Language, Polish Academy of Sciences", accessedAt: "2026-07-10" },
    { id: "unicode-polish", title: "CLDR Collation Chart: Polish", url: "https://www.unicode.org/cldr/charts/46/collation/pl.html", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-07-10" },
    { id: "pitt-grammar", title: "A Grammar of Contemporary Polish", url: "https://www.lektorek.org/lektorek/grammar.pdf", publisher: "University of Pittsburgh / Oscar E. Swan", accessedAt: "2026-07-10" },
    { id: "polski-info", title: "Polski.info: Multilingual Portal for Learning Polish", url: "https://polski.info/", publisher: "polski.info", accessedAt: "2026-07-10" },
    { id: "polskie-radio", title: "Polskie Radio", url: "https://www.polskieradio.pl/", publisher: "Polskie Radio", accessedAt: "2026-07-10" },
    { id: "culture-literature", title: "Polish Culture and Literature", url: "https://culture.pl/en", publisher: "Adam Mickiewicz Institute", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Polish Language Guide: Sounds, Cases, Aspect, Culture and Learning",
    description: "A detailed, example-rich guide to Polish history, pronunciation, spelling, seven cases, verbal aspect, dialects, courtesy, literature, phrases, and modern learning resources."
  }
} satisfies LanguageGuide;
