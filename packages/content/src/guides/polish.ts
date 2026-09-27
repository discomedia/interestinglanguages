import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Czech",
    relationship: "Closest major West Slavic neighbor",
    explanation: cited(
      "Polish and Czech share inherited words and grammar, but their sounds have changed along different paths. Polish miasto and Czech město both mean “city.” Shared roots can help you read, though conversation takes practice and look-alike words can mislead you.",
      "glottolog-polish",
      "wiki-polish"
    )
  },
  {
    name: "Slovak",
    relationship: "West Slavic relative",
    explanation: cited(
      "Slovak and Czech belong to one West Slavic branch; Polish belongs to another, called Lechitic. Speakers across the Carpathians have long had contact, and all three languages change noun forms for their role in a sentence. Similar grammar helps, but understanding everyday Slovak still depends on exposure.",
      "glottolog-polish",
      "wiki-polish"
    )
  },
  {
    name: "Kashubian",
    relationship: "Fellow living Lechitic language",
    explanation: cited(
      "Kashubian is a fellow Lechitic language centered in Pomerania. Poland recognizes it as a regional language, and its speakers have their own writing, vocabulary, and institutions. Comparing Kashubian with Polish shows their shared history while respecting that distinct identity.",
      "wiki-polish",
      "glottolog-polish"
    )
  },
  {
    name: "Russian",
    slug: "russian",
    relationship: "More distant East Slavic relative and contact language",
    explanation: cited(
      "Russian belongs to the East Slavic branch and normally uses Cyrillic. It shares older Slavic words and grammar with Polish, including case endings and verbal aspect. Their long contact under the partitions, war, and state socialism affected Polish life and vocabulary without changing Polish's West Slavic ancestry.",
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
  summary: "Polish spells sound differences that English ears may miss. Learn how its consonants, changing noun endings, verb choices, and forms of address work in daily life, writing, and media.",
  family: "Indo-European, Slavic, West Slavic, Lechitic",
  macroRegion: "Poland, neighboring European communities, and a global diaspora",
  primaryScript: "Latin",
  difficultyLabel: "Demanding",
  learnerHook: "In cześć, a casual “hello,” your mouth moves from cz to ś and ć. Hearing those differences makes Polish signs, conversations, songs, and stories easier to follow.",
  hero: {
    imageAlt: "A Polish book and handwritten notes showing diacritics and characteristic consonant spellings.",
    callToActionLabel: "Hear Polish in use"
  },
  classification: "An Indo-European language in the Lechitic subgroup of West Slavic",
  speakerCommunity: "Polish connects people across Poland and families in many other countries. Some speakers use the nationwide standard at school or work and a regional form at home; others learn Polish from relatives abroad. Age, relationship, and setting shape how people greet each other and which new words they adopt.\n\nStart by listening to who speaks to whom. A sentence can be grammatical and still sound too familiar for a stranger or too formal for a friend.",
  facts: [
    { label: "Family", value: "Indo-European · Slavic · West Slavic · Lechitic" },
    { label: "Core community", value: "Tens of millions of speakers; the 2021 Polish census measures home use, not all first-language speakers worldwide" },
    { label: "Official role", value: "Official language of Poland and an official language of the European Union" },
    { label: "Writing", value: "Latin alphabet with ą, ć, ę, ł, ń, ó, ś, ź, and ż" },
    { label: "Grammar", value: "Seven cases, three singular genders, verbal aspect, and a special masculine-personal plural category" },
    { label: "Typical stress", value: "Usually on the next-to-last syllable, with important patterned exceptions" }
  ],
  introduction: cited("Polish is the main public language of Poland and a family and community language in many other countries. Speakers in Poland may use a national written standard at school or work and local forms at home; people abroad may inherit the language from relatives while reading or speaking it with different ease. Polish-language books, radio, and online communities connect speakers across borders.\n\nPolish belongs to the Lechitic group of West Slavic languages, within the Indo-European family. Its Latin alphabet uses letters such as ł, ś, and ż and letter pairs such as sz and cz to represent sounds that matter in everyday words.\n\nNouns change form according to their role in a sentence, and verb pairs often distinguish an ongoing action from a completed one. The language also makes room for social distance: a greeting to a friend and an address to a stranger may use different forms, even when both speakers are fluent Polish users.", "census-2021", "glottolog-polish", "wiki-polish", "wiki-grammar", "unicode-polish", "rjp-polish"),
  origins: {
    overview: cited(
      "Polish grew from the speech of early Slavic communities through the West Slavic and Lechitic branches. Neighboring forms changed gradually; no single day created the language.\n\nAfter the Polish ruler Mieszko I accepted Christianity in 966, church and state writers increasingly recorded Polish names and words in Latin documents. The 1136 Bull of Gniezno preserves many local names, and the 13th-century Book of Henryków contains an early Polish sentence. Later, religious texts, town records, printing, and Renaissance writing helped establish a wider written language.\n\nPolish continued to change while its speakers lived under Prussian, Russian, and Austrian rule during the partitions. War, changed borders, forced migration, schooling, broadcasting, and later mobility reshaped where people spoke regional forms.",
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
          "Russia, Prussia, and Austria governed Polish lands under different school and language policies. Writers, publishers, and families kept Polish in public and private life. Debates about spelling and usage still draw on that history.",
          "wiki-history",
          "culture-literature"
        )
      },
      {
        period: "1918 to the digital present",
        event: cited(
          "Independence restored Polish national institutions, and a 1936 reform set major spelling rules. The Holocaust, war, border shifts, and forced transfers then changed who lived where. Schools and broadcasting spread the standard, while online writing now brings new slang and borrowed words into view.",
          "wiki-history",
          "rjp-council",
          "nkjp"
        )
      }
    ],
    contactHistory: cited(
      "Latin entered Polish through religion and learning. Czech influenced early religious vocabulary, while German speakers brought words through trade, crafts, and town life. The Polish–Lithuanian Commonwealth also connected Polish speakers with East Slavic, Lithuanian, Yiddish, Turkic, Armenian, and other communities.\n\nLater, court and cultural life brought Italian and French words; Russian contact grew under the partitions and in the Soviet era. English now supplies words such as weekend and streaming. Speakers fit many loans into Polish spelling and endings rather than leaving them grammatically foreign.",
      "wiki-polish",
      "wsjp"
    ),
    standardization: cited(
      "Schools, publishers, broadcasters, and speakers across regions maintain a shared form called polszczyzna ogólna, or standard Polish. The Polish Language Council sets spelling and punctuation principles and advises on public usage. Its revised spelling rules took effect on 1 January 2026.\n\nThe standard gives people a common form for school and public writing. Regional speech also has its own history and everyday place.",
      "rjp-council",
      "language-act",
      "rjp-changes"
    )
  },
  variants: {
    overview: cited(
      "Most Polish speakers understand the national standard, but local speech still differs in sound, vocabulary, and sometimes grammar. Dialect maps often name Greater Poland, Lesser Poland, Mazovia, and Silesia; mountain and mixed postwar communities make the picture more detailed.\n\nKashubian has legal recognition as a regional language. Speakers and scholars disagree about how to classify Silesian, and the Polish president vetoed a bill to recognize it as a regional language in February 2026. Follow the names people use for their own speech.",
      "wiki-polish",
      "silesian-veto"
    ),
    items: [
      {
        name: "Standard Polish (język ogólnopolski)",
        note: cited(
          "Schools, national media, public offices, and most teaching materials use this shared form. Educated speakers can still have regional accents and words.",
          "rjp-polish",
          "wiki-polish"
        )
      },
      {
        name: "Greater Polish and Poznań speech",
        note: cited(
          "Speakers in the west keep local sounds and words, including Poznań vocabulary shaped partly by German contact. Someone may use those words to show local identity while using standard Polish in another setting.",
          "wiki-polish"
        )
      },
      {
        name: "Lesser Polish and Goral varieties",
        note: cited(
          "Southern Poland has several local forms. Highland Goral speakers around the Carpathians also use their speech in music and regional media. Their communities have histories on both sides of today's borders.",
          "wiki-polish"
        )
      },
      {
        name: "Mazovian and Warsaw usage",
        note: cited(
          "Some Mazovian varieties merge sounds that standard Polish keeps apart, a pattern called mazurzenie. War and migration reshaped Warsaw speech, while local words and styles continued to change.",
          "wiki-polish"
        )
      },
      {
        name: "Silesian and borderland Polish",
        note: cited(
          "Silesian speakers publish writing and media and advocate for their speech; its classification remains disputed. Polish varieties in eastern borderlands reflect long contact with neighboring languages. Current borders do not contain the full histories of either community.",
          "wiki-polish",
          "silesian-veto"
        )
      },
      {
        name: "Diaspora and heritage Polish",
        note: cited(
          "Polish-speaking families in the United Kingdom, Germany, the Americas, Australia, and elsewhere live among other languages. Some children understand family talk well but have had fewer chances to learn school vocabulary or formal spelling. Their skills reflect the situations where they use Polish.",
          "wiki-polish"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Polish spelling marks three sets of sounds that English speakers often merge. The letters s, z, c, and dz sound sharper; sz, ż/rz, cz, and dż use a tongue farther back; ś/si, ź/zi, ć/ci, and dź/dzi use a tongue raised toward the palate. Hear sz and ś side by side before trying to produce them.\n\nPolish speakers also join several consonants without adding vowels. At the end of many words, a written voiced consonant sounds voiceless. The sound of ą or ę changes with the following consonant, so each letter does not have one fixed sound.",
      "rjp-polish",
      "wiki-polish"
    ),
    script: "Polish Latin alphabet; learner cues use familiar spellings rather than a full phonetic transcription",
    soundSystem: cited(
      "Some spellings sound alike: ó/u, rz/ż, and, for most speakers, ch/h. The letter i can make a vowel sound, signal a softer consonant, or do both; ł usually sounds like English w. In szczęście, speakers pronounce a sequence of consonants without inserting a vowel.\n\nPractice the last syllable first, then add the opening cluster.",
      "rjp-polish",
      "rjp-polish"
    ),
    prosody: cited(
      "Polish usually stresses the next-to-last syllable: ko-BIE-ta means “woman,” and ko-BIE-ty means “women.” Some loanwords, conditional forms, and number expressions place it elsewhere; speakers may also move stress toward the common pattern in casual speech.\n\nPitch changes meaning too. A short no can sound like hesitation, surprise, or “well then,” depending on the voice. Copy whole short sentences so you learn stress and consonant timing together.",
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
      { original: "Wrocław", translation: "Wrocław", note: "The single ł sounds w-like. The final written w sounds f-like because Polish normally devoices it at the end of a word." }
    ]
  },
  writing: {
    overview: cited(
      "Polish adds nine letters to the Latin alphabet: ą, ć, ę, ł, ń, ó, ś, ź, and ż. Letter pairs such as cz, rz, and sz represent single consonant sounds; q, v, and x mostly appear in foreign words and names. Once you know these rules, you can make a fair attempt at an unfamiliar word.\n\nSpelling also preserves links between related forms. Stół means “table,” while stoły means “tables”; the spelling change helps show the sound change inside a familiar word family.",
      "rjp-polish",
      "unicode-polish",
      "rjp-polish"
    ),
    primaryScript: "Polish Latin alphabet",
    romanization: cited(
      "Polish already uses Latin letters, so you don't need romanization. English-style spellings such as “cheshch” for cześć hide the contrasts you need to hear. Learn the Polish letters directly.\n\nPeople sometimes drop diacritics in quick messages. In edited writing, keep them: they can distinguish words, and Polish keyboard layouts make them easy to type.",
      "unicode-polish",
      "rjp-polish"
    ),
    spellingNorms: cited(
      "A spelling can stay steady even when a neighboring sound changes its pronunciation. You also need to learn when writers join nie to a word, when they write capitals, and how commas mark clauses.\n\nThe Polish Language Council changed several spelling rules from 1 January 2026, including some capital letters and joined or separate forms. Check the date on an old exercise book before treating its spelling advice as current.",
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
      "Polish nouns change form to show their job in a sentence, and their endings can also show number and gender. Widzę dom means “I see a house”; Nie widzę domu means “I don't see a house.” The changed ending follows the negative verb.\n\nVerbs often show who acts without a separate pronoun. Learn these patterns in full sentences before you try to memorize every table.",
      "rjp-polish",
      "pitt-grammar",
      "wiki-grammar"
    ),
    typologicalProfile: cited(
      "Polish has seven cases: sets of noun forms that signal roles such as subject, object, or addressee. Describing words change with the noun. Singular nouns fall into masculine, feminine, or neuter classes; plural agreement also singles out groups containing at least one male person.\n\nVerb endings show person and number, and past verbs can show gender. A pair of verbs may distinguish an ongoing or repeated action from a bounded one; linguists call this contrast aspect. Polish often puts subject, verb, and object in that order, but speakers can move them to highlight different information.",
      "rjp-polish",
      "wiki-grammar"
    ),
    morphology: cited(
      "A dictionary gives you a starting form, while real sentences show many others. Ręka “hand” changes to ręce in some settings, and człowiek “person” has the plural ludzie. Number words can change the noun and verb forms around them.\n\nVerb pairs such as pisać “write” and napisać “finish writing” show aspect, but adding a prefix can also change a verb's basic meaning. Learn each pair from examples. Word families help too: dom “house,” domek “little house,” domowy “home-related,” and bezdomny “homeless” share a root.",
      "wiki-grammar",
      "wsjp"
    ),
    syntax: cited(
      "Mieszkam w Krakowie means “I live in Kraków.” The verb ending already shows “I,” so speakers can leave out ja. Adding Ja at the front can stress “I,” often against someone else.\n\nNie usually comes before a verb, and negation can change a direct object's case. For a question, Czy masz czas? and Masz czas? both mean “Do you have time?”\n\nLittle words such as już “already” and chyba “probably” help show the speaker's attitude.",
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
        body: cited("Case changes a noun or describing word to show its job in a sentence. Learn each change inside a phrase, since one ending rarely matches one English preposition. Z takes one form for “with” and another for “from.”", "pitt-grammar", "wiki-grammar"),
        example: "Idę z moją siostrą, ale wracam z pracy sam.",
        exampleTranslation: "I’m going with my sister, but I’m returning from work alone."
      },
      {
        title: "Negation can change the object",
        body: cited("A direct object often changes form after a negative verb. Mam nowy telefon uses the accusative, a common object form; Nie mam nowego telefonu uses the genitive. Learn the pair together.", "pitt-grammar", "wiki-grammar"),
        example: "Mam nowy telefon. Nie mam nowego telefonu.",
        exampleTranslation: "I have a new phone. I don’t have a new phone."
      },
      {
        title: "Aspect describes the shape of an event",
        body: cited("One verb can show an activity in progress or something repeated. Its partner can present the event as bounded, often finished. Both forms can speak about the past; a perfective form shaped like the present usually points to the future.", "pitt-grammar", "wiki-grammar"),
        example: "Pisałam raport przez godzinę, ale jeszcze go nie napisałam.",
        exampleTranslation: "I was writing the report for an hour, but I still haven’t finished writing it."
      },
      {
        title: "Past tense shows gender",
        body: cited("The past verb changes with the speaker's gender in standard Polish. A woman says zrobiłam for “I did it,” while a man says zrobiłem. Plural past verbs also distinguish groups that include male persons.", "wiki-grammar", "pitt-grammar"),
        example: "Wczoraj byłam zmęczona, więc poszłam spać wcześniej.",
        exampleTranslation: "Yesterday I was tired, so I went to bed earlier. (said by a woman)"
      },
      {
        title: "Masculine-personal plural reshapes agreement",
        body: cited("Polish uses a special set of plural forms for a group containing at least one male person. Compare dobrzy studenci, “good male or mixed students,” with dobre studentki, “good female students.” The difference reaches describing words and past verbs as well as nouns.", "pitt-grammar", "wiki-grammar"),
        example: "Nowi nauczyciele przyszli, a nowe nauczycielki już czekały.",
        exampleTranslation: "The new male teachers arrived, while the new female teachers were already waiting."
      },
      {
        title: "Numbers govern surprising forms",
        body: cited("After dwa, trzy, and cztery, many nouns take a familiar plural form. After pięć and higher, they often take another form called the genitive plural, and the verb can switch to singular neuter. Learn a number with the noun and verb around it.", "pitt-grammar", "wiki-grammar"),
        example: "Dwie osoby czekały, ale pięć osób już weszło.",
        exampleTranslation: "Two people were waiting, but five people had already gone in."
      },
      {
        title: "Word order manages focus",
        body: cited("Noun endings show who did what, so speakers can move words to highlight different information. Anna kupiła książkę is a straightforward “Anna bought a book”; Książkę kupiła Anna can stress the book or who bought it. The words describe the same event but fit different conversations.", "pitt-grammar", "wiki-grammar"),
        example: "To nie Marek napisał ten list — napisała go Ania.",
        exampleTranslation: "It wasn’t Marek who wrote this letter—Ania wrote it."
      },
      {
        title: "Courtesy has grammar",
        body: cited("Many speakers address an unfamiliar adult as Pan or Pani with a third-person verb. Państwo addresses several people politely. Ty can signal closeness, but it may sound too familiar with a stranger; ask before switching to it.", "pitt-grammar", "nkjp"),
        example: "Czy może mi pani pomóc? Możemy przejść na ty?",
        exampleTranslation: "Could you help me, ma’am? Can we use first-name/informal terms?"
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Polish is the main public language of Poland, where the 2021 census counted language used at home. That measure does not tell us how many first-language speakers live worldwide.\n\nSome Polish-speaking communities have lived for generations in neighboring countries. Other families moved to western Europe, the Americas, Israel, or Australia at different times and for different reasons. Home language, ancestry, nationality, and language ability describe different things, so diaspora totals vary by the question a survey asks.",
      "wiki-polish",
      "census-2021"
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
      "If you know English but no Slavic language, Polish asks you to hear new consonant contrasts and use changing noun and verb forms. A heritage speaker or Czech speaker starts with a different set of strengths. Basic conversations can arrive before reliable case endings and verb pairs.\n\nWork on one contrast at a time and ask a speaker or teacher to correct your sentences.",
      "rjp-polish",
      "pitt-grammar"
    ),
    easierAspects: [
      "The Latin-based spelling system is substantially more regular than English once its digraphs and diacritics are learned",
      "Stress is usually predictable, reducing the number of arbitrary word-level accents",
      "Verb endings often reveal the subject, and there are no articles equivalent to English a and the",
      "Polish has abundant dictionaries, corpora, subtitled media, teachers, and contemporary publishing",
      "Word families help you recognize new forms as your vocabulary grows"
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
      "If you're starting, spend a little time each day hearing consonant pairs and saying full phrases. Add a short grammar lesson and a corrected conversation each week.\n\nLater, retell one event as something you did regularly and something you finished; this tests your verb pairs. If you read well already, compare an interview, a work email, and a novel passage to hear how tone changes by setting.",
      "pitt-grammar",
      "nkjp"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Use a course to build a sequence, a teacher to correct your speech, and a dictionary to check forms. Save whole Polish patterns, such as pomagać komuś w czymś, “help someone with something,” so you keep the cases attached to the verb. At an advanced level, search a corpus to see whether a phrase belongs in conversation, news, or fiction.",
      "pitt-grammar",
      "wsjp",
      "nkjp"
    ),
    mediaPractice: cited(
      "Polskie Radio carries news, interviews, and culture programs in Polish. Pick a short segment, listen for the situation, replay it with any available text, and retell it aloud. Culture.pl can help you choose a writer or film, but pair literary language with conversation so you hear both registers.",
      "polskie-radio",
      "culture-literature"
    ),
    dictionariesAndCorpora: cited(
      "WSJP PAN explains current meanings, forms, style labels, and common word partners. The National Corpus of Polish lets you search examples from different kinds of writing and speech. Look up a construction in the dictionary, then compare several corpus examples.\n\nCheck their dates and genres before copying a line into your own speech.",
      "wsjp",
      "nkjp"
    ),
    resources: [
      { type: "course", title: "Polski.info", url: "https://polski.info/", level: "beginner", description: cited("A free multilingual learning platform with leveled Polish materials. Use it as the sequenced spine of a beginner program and bring its sentences to a teacher for pronunciation and expansion.", "polski-info") },
      { type: "dictionary", title: "Wielki słownik języka polskiego PAN", url: "https://wsjp.pl/", level: "all", description: cited("The Polish Academy’s large contemporary dictionary, grounded in corpus evidence and rich in usage, inflection, collocation, and style information.", "wsjp") },
      { type: "corpus", title: "Narodowy Korpus Języka Polskiego", url: "https://nkjp.pl/", level: "advanced", description: cited("A reference corpus exceeding 1.5 billion words across varied genres. Search declined forms and constructions to test what polished examples omit.", "nkjp") },
      { type: "media", title: "Polskie Radio", url: "https://www.polskieradio.pl/", level: "intermediate", description: cited("National radio networks and podcasts spanning news, music, history, science, and culture. Repeated short segments provide controlled exposure to formal and conversational registers.", "polskie-radio") },
      { type: "media", title: "Culture.pl", url: "https://culture.pl/en", level: "all", description: cited("English- and Polish-language introductions to literature, film, music, theater, design, and history. It helps learners choose culturally meaningful Polish originals rather than generic exercises.", "culture-literature") },
      { type: "media", title: "Polski z Anią", url: "https://polonicum.uw.edu.pl/polski-z-ania", level: "beginner", description: cited("University of Warsaw grammar videos with Polish and English subtitles. Use a video after a course lesson to hear the same pattern explained another way.", "polski-z-ania") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Polish speakers build families of words around a root. Kawka can mean a small coffee or a relaxed coffee break; its ending can sound affectionate. Small words and endings change tone as well as dictionary meaning.\n\nWhen you learn a new word, note its grammar and the setting where you heard it.",
      "wsjp",
      "nkjp"
    ),
    notableWords: [
      { term: "szczęście", meaning: "happiness; luck; good fortune", note: cited("The word can name a feeling or good fortune. Mam szczęście means “I'm lucky.” Its spelling also gives you a compact pronunciation exercise.", "wsjp") },
      { term: "tęsknota", meaning: "longing; yearning", note: cited("Related to tęsknić, “to miss,” this noun can point to a person, place, or lost time. Learn it with the thing someone longs for rather than treating it as an untranslatable national emotion.", "wsjp", "nkjp") },
      { term: "załatwić", meaning: "arrange, take care of, obtain, or settle", note: cited("A high-value verb whose meaning depends on its object: załatwić sprawę is to sort out a matter, załatwić bilet may be to procure a ticket. It can imply efficient handling, negotiation, or euphemistic disposal, so context is essential.", "wsjp", "nkjp") },
      { term: "kombinować", meaning: "figure out, devise, maneuver, or scheme", note: cited("Sometimes it praises resourcefulness; sometimes it suspects rule-bending. Co ty kombinujesz? can mean “What are you up to?” The register and speaker’s tone decide whether ingenuity or dubious maneuvering dominates.", "wsjp", "nkjp") },
      { term: "ogarniać", meaning: "cover; colloquially understand or get under control", note: cited("In casual speech, Nie ogarniam can mean “I don't get it” or “I can't cope with all this.” Ogarnąć mieszkanie means to get the flat sorted. Check the context before copying it into formal writing.", "wsjp", "nkjp") },
      { term: "przykro", meaning: "sorry; sad or unpleasant", note: cited("The impersonal phrase Jest mi przykro literally frames unpleasantness as being “to me” and can express sympathy, regret, or an apology. It does not map perfectly onto every English use of sorry.", "wsjp") },
      { term: "swojski", meaning: "familiar, home-like, local, unpretentious", note: cited("From swój “one’s own,” swojski can warmly describe food, atmosphere, humor, or a person as comfortably familiar. Depending on context it may also suggest rustic simplicity rather than cosmopolitan polish.", "wsjp", "nkjp") },
      { term: "żal", meaning: "regret, sorrow, resentment, or pity", note: cited("A compact noun with a wide emotional field. Żal mi means “I feel sorry for/I regret,” mieć żal do kogoś means hold a grievance against someone, and szkoda can be a better everyday equivalent for some English regrets.", "wsjp") }
    ],
    loanwordLayers: cited(
      "Latin contributed words for religion, law, and learning; German contact left traces in town, craft, and trade vocabulary. Italian and French loans reflect later court and cultural fashions. Yiddish and East Slavic also shaped some regional and everyday words, though individual word histories need checking.\n\nEnglish now contributes terms for technology and online life. Speakers add Polish endings: hejt “online hate” becomes hejtować “to post hate,” and scrollować “to scroll” takes regular verb endings.",
      "wiki-polish",
      "wsjp"
    ),
    idioms: [
      { original: "Nie mój cyrk, nie moje małpy.", translation: "Not my problem or responsibility.", note: "Literally “not my circus, not my monkeys.” It can sound playful when you leave someone else's mess to them, but it is too flippant for a serious misfortune." },
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
  culturalNotes: "Polish courtesy lives in everyday grammar. Dzień dobry works through much of the day, and Pan or Pani takes a third-person verb when you address someone politely. Friends may switch to ty and use small, affectionate word forms.\n\nFor another side of the language, try Szymborska's poetry, Lem's science fiction, Tokarczuk's novels, reportage, film, or hip-hop. Each shows a particular voice and setting; no single work can stand for everyone who speaks Polish.",
  resources: [
    { type: "course", title: "Polski.info", url: "https://polski.info/", level: "beginner", description: cited("Free lessons give beginners a sequence of Polish phrases and grammar. Follow one level steadily and practice its sentences aloud with a teacher or partner.", "polski-info") },
    { type: "dictionary", title: "Wielki słownik języka polskiego PAN", url: "https://wsjp.pl/", level: "all", description: cited("Use its meanings, qualifiers, collocations, and inflection to decide not only what a word can mean but where it sounds at home.", "wsjp") },
    { type: "corpus", title: "National Corpus of Polish", url: "https://nkjp.pl/", level: "advanced", description: cited("Search authentic combinations across conversation, journalism, literature, and online text; compare many results before generalizing.", "nkjp") },
    { type: "media", title: "Polskie Radio", url: "https://www.polskieradio.pl/", level: "intermediate", description: cited("Choose one recurring host or series so the voice and topic become familiar enough for intensive replay.", "polskie-radio") },
    { type: "media", title: "Culture.pl", url: "https://culture.pl/en", level: "all", description: cited("A discovery layer for Polish books, films, music, design, and cultural history, with accessible English context alongside Polish names and works.", "culture-literature") },
    { type: "other", title: "Polish Language Council", url: "https://rjp.pan.pl/", level: "advanced", description: cited("The institutional source for current public-language opinions, spelling principles, and explanations of normative change.", "rjp-council", "rjp-changes") },
    { type: "media", title: "Polski z Anią", url: "https://polonicum.uw.edu.pl/polski-z-ania", level: "beginner", description: cited("University of Warsaw videos explain Polish grammar with Polish and English subtitles. They work well when a case or verb form from your course still feels unclear.", "polski-z-ania") }
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
    { original: "Ile to kosztuje?", translation: "How much does this cost?", usageNote: "A neutral question in shops and markets." },
    { original: "Gdzie jest toaleta?", translation: "Where is the toilet?", usageNote: "Direct but normal; przepraszam can introduce the question politely." },
    { original: "Miło mi.", translation: "Nice to meet you.", literalMeaning: "It is pleasant to me.", usageNote: "Often follows an introduction; Bardzo mi miło is warmer or more formal." },
    { original: "Smacznego!", translation: "Enjoy your meal!", literalMeaning: "[Something] tasty!", usageNote: "Said to people who are eating, including when you join or pass a table." },
    { original: "Na zdrowie!", translation: "Cheers! / Bless you!", literalMeaning: "To health!", usageNote: "Used for a toast and after a sneeze; context makes the meaning obvious." }
  ],
  sources: [
    { id: "census-2021", title: "National Census 2021: Language Used at Home", url: "https://stat.gov.pl/spisy-powszechne/nsp-2021/nsp-2021-wyniki-ostateczne/tablice-z-ostatecznymi-danymi-w-zakresie-przynaleznosci-narodowo-etnicznej-jezyka-uzywanego-w-domu-oraz-przynaleznosci-do-wyznania-religijnego%2C10%2C1.html", publisher: "Statistics Poland", publishedAt: "2023-09-28", accessedAt: "2026-09-27" },
    { id: "wiki-polish", title: "Polish language", url: "https://en.wikipedia.org/wiki/Polish_language", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-history", title: "History of the Polish language", url: "https://en.wikipedia.org/wiki/History_of_the_Polish_language", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "wiki-grammar", title: "Polish grammar", url: "https://en.wikipedia.org/wiki/Polish_grammar", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "glottolog-polish", title: "Glottolog 5.3: Polish", url: "https://glottolog.org/resource/languoid/id/poli1260", publisher: "Max Planck Institute for Evolutionary Anthropology", accessedAt: "2026-09-27" },
    { id: "rjp-council", title: "Rada Języka Polskiego przy Prezydium PAN", url: "https://rjp.pan.pl/", publisher: "Polish Language Council, Polish Academy of Sciences", accessedAt: "2026-09-27" },
    { id: "rjp-polish", title: "The Polish Language", url: "https://rjp.pan.pl/app/uploads/2025/10/jp_angielski.pdf", publisher: "Polish Language Council", updatedAt: "2025", accessedAt: "2026-09-27" },
    { id: "rjp-changes", title: "Polish Language Council communiqué on spelling rules effective 1 January 2026", url: "https://rjp.pan.pl/zmiany-pisowni-2026/komunikatradyjezykapolskiegoprzyprezydiumpanzdnia10pazdziernika20204r/", publisher: "Polish Language Council", publishedAt: "2024-10-10", accessedAt: "2026-09-27" },
    { id: "silesian-veto", title: "Two laws vetoed by the President of Poland", url: "https://www.prezydent.pl/prawo/ustawy-zawetowane/dwie-ustawy-zawetowane-przez-prezydenta,114983", publisher: "President of the Republic of Poland", publishedAt: "2026-02-12", accessedAt: "2026-09-27" },
    { id: "language-act", title: "Act of 7 October 1999 on the Polish Language", url: "https://eli.gov.pl/api/acts/DU/1999/999/text.html", publisher: "Republic of Poland Electronic Legislation", publishedAt: "1999-10-07", accessedAt: "2026-09-27" },
    { id: "nkjp", title: "Narodowy Korpus Języka Polskiego", url: "https://nkjp.pl/", publisher: "Institute of Computer Science PAN and partner institutions", updatedAt: "2012", accessedAt: "2026-09-27" },
    { id: "wsjp", title: "Wielki słownik języka polskiego PAN", url: "https://wsjp.pl/", publisher: "Institute of Polish Language, Polish Academy of Sciences", accessedAt: "2026-09-27" },
    { id: "unicode-polish", title: "CLDR Collation Chart: Polish", url: "https://www.unicode.org/cldr/charts/46/collation/pl.html", publisher: "Unicode Consortium", updatedAt: "2024", accessedAt: "2026-09-27" },
    { id: "pitt-grammar", title: "A Grammar of Contemporary Polish", url: "https://www.lektorek.org/lektorek/grammar.pdf", publisher: "University of Pittsburgh / Oscar E. Swan", accessedAt: "2026-09-27" },
    { id: "polski-info", title: "Polski.info: Multilingual Portal for Learning Polish", url: "https://polski.info/", publisher: "polski.info", accessedAt: "2026-09-27" },
    { id: "polski-z-ania", title: "Polski z Anią", url: "https://polonicum.uw.edu.pl/polski-z-ania", publisher: "University of Warsaw Polonicum", accessedAt: "2026-09-27" },
    { id: "polskie-radio", title: "Polskie Radio", url: "https://www.polskieradio.pl/", publisher: "Polskie Radio", accessedAt: "2026-09-27" },
    { id: "culture-literature", title: "Polish Culture and Literature", url: "https://culture.pl/en", publisher: "Adam Mickiewicz Institute", accessedAt: "2026-09-27" }
  ],
  seo: {
    title: "Polish Language Guide: Sounds, Grammar, Speech and Writing",
    description: "Hear Polish sound contrasts, see how noun endings and verb pairs work, and explore regional speech, everyday courtesy, literature, and learning resources."
  }
} satisfies LanguageGuide;
