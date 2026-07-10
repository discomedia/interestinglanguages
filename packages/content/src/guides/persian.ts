import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Dari",
    relationship: "Afghan standard of Persian",
    explanation: cited(
      "Dari is the official name used for Persian in Afghan state institutions and one of Afghanistan's two nationwide official languages under the 2004 constitution. Afghan Persian has its own regional varieties, prestigious norms, vocabulary, and literary life. Formal varieties remain widely accessible across the Persian-speaking world, while fast local conversation can require adjustment.",
      "iranica-dari",
      "afghan-constitution"
    )
  },
  {
    name: "Tajik",
    relationship: "Central Asian standard of Persian",
    explanation: cited(
      "Tajik is a Persian standard shaped by Central Asian history and normally written in a modified Cyrillic alphabet in Tajikistan. Russian and Turkic contact, twentieth-century borders, sound change, and separate institutions have produced real differences. Once the script barrier is crossed, shared grammar and much inherited vocabulary become visible, especially in formal prose and classical literature.",
      "iranica-tajik",
      "loc-scripts"
    )
  },
  {
    name: "Kurdish",
    slug: "kurdish",
    relationship: "Related Western Iranian language group",
    explanation: cited(
      "Kurdish varieties and Persian belong to the Iranian branch of Indo-European, but neither descends from the other and they are not mutually intelligible. Long contact has created shared vocabulary without erasing distinct Kurdish languages and identities.",
      "wiki-persian",
      "iranica-early"
    )
  },
  {
    name: "Arabic",
    slug: "arabic",
    relationship: "Unrelated Semitic language and major contact source",
    explanation: cited(
      "Arabic and Persian share a script tradition and a large learned vocabulary, but they belong to different language families. Persian has no grammatical gender or Arabic-style root-and-pattern morphology. Persian speakers adapted the alphabet, pronounced many loans in Persian ways, and built Persian compounds from Arabic material, making contact creative rather than simple copying.",
      "dd-persian-arabic",
      "unicode-persian"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const persianGuide = {
  slug: "persian",
  name: "Persian",
  autonym: "فارسی",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Persian is a pluricentric Iranian language whose everyday warmth, compact grammar, and living media lead into a literary world shared across Iran, Afghanistan, Central Asia, South Asia, and a global diaspora.",
  family: "Indo-European, Indo-Iranian, Iranian, Southwestern Iranian",
  macroRegion: "Iran, Afghanistan, Central Asia, and global diasporas",
  primaryScript: "Perso-Arabic in Iran and Afghanistan; Cyrillic in Tajikistan",
  difficultyLabel: "Demanding",
  learnerHook: "A beginner can make useful sentences quickly because Persian has no grammatical gender and little noun inflection; mastery comes from hearing unwritten vowels, controlling formal and conversational registers, and learning the compound verbs, etiquette, allusion, and poetry that make simple words culturally dense.",
  hero: {
    imageAlt: "Persian in contemporary Perso-Arabic type beside Tajik Cyrillic and a classical manuscript page.",
    callToActionLabel: "Hear Persian in use"
  },
  classification: "A pluricentric Southwestern Iranian language with Iranian Persian, Dari, and Tajik standards",
  speakerCommunity: "Persian belongs to overlapping communities, not one ethnicity or passport. It is Iran's national language within a multilingual country. Afghan Persian—officially Dari—is a lingua franca used by communities of many backgrounds alongside Pashto and regional languages. Tajik is central to public life in Tajikistan and is also spoken in neighboring Uzbekistan. Persian additionally lives in global diasporas. Heritage speakers may understand family conversation but read slowly; literary specialists may read Hafez yet struggle with a Tehran voice note. Both are genuine learners with different starting maps.",
  facts: [
    { label: "Family", value: "Indo-European · Indo-Iranian · Iranian · Southwestern" },
    { label: "Major standards", value: "Iranian Persian, Dari, and Tajik" },
    { label: "Common English name", value: "Persian; fārsi is the language's Iranian Persian name" },
    { label: "Scripts", value: "Perso-Arabic in Iran/Afghanistan; Cyrillic in Tajikistan" },
    { label: "Basic word order", value: "Usually subject–object–verb" },
    { label: "Signature connector", value: "Ezāfe -e/-ye links nouns to modifiers and possessors" }
  ],
  learnerOverview: "Choose a center of gravity: Afghan voices for Kabul family, contemporary Iranian conversation for a Tehran partner, or Tajik Cyrillic and local audio for Dushanbe. A shared formal core lets you broaden later. Pair script with colloquial listening: written می‌خواهم بروم mi-khāham beravam, “I want to go,” is commonly می‌خوام برم mi-khām beram in Iranian conversation. The forms do different jobs. For each item, note its edited form, your target speakers' form, and a natural situation. بفرمایید befarmāyid can invite someone to enter, take food, speak, or go first; its meaning comes from the scene. Discover Discomfort's phrase guide usefully prioritizes such interactions. Since short vowels are unmarked, read a graded text aloud, check audio, then reread without transliteration.",
  origins: {
    overview: cited(
      "Persian's visible history is not one unchanged language. Old Persian appears in Achaemenid cuneiform inscriptions. Middle Persian, associated with the Sasanians and often called Pahlavi in its written traditions, used other scripts and differed substantially. New Persian emerged after the Arab-Islamic conquest in a multilingual world. Its early literature developed strongly around Khorasan and Transoxiana, continuing Iranian speech while adopting Arabic script and extensive vocabulary—not Arabic grammar. By the eleventh century, writers including Rudaki and Ferdowsi had made it a prestigious literary language. Modern educated readers can approach much millennium-old poetry with help, although sounds, meanings, syntax, and conventions have changed.",
      "iranica-early",
      "loc-book",
      "wiki-persian"
    ),
    timeline: [
      {
        period: "6th–4th centuries BCE",
        event: cited("Old Persian appears in Achaemenid inscriptions, most famously in monumental multilingual texts. It is an ancestor within Persian's historical line, not modern Persian written in a peculiar alphabet.", "loc-scripts", "wiki-persian")
      },
      {
        period: "3rd–7th centuries CE",
        event: cited("Middle Persian served important administrative, courtly, and Zoroastrian textual roles under the Sasanians. Pahlavi writing could be difficult because Aramaic-derived written forms sometimes represented Persian words.", "loc-scripts", "loc-book")
      },
      {
        period: "8th–11th centuries",
        event: cited("Early New Persian developed as an Islamic literary language in eastern Iranian and Central Asian centers. Arabic script and vocabulary entered a language whose core grammar remained Iranian; there was no single uniform Early New Persian grammar.", "iranica-early", "iranica-dari")
      },
      {
        period: "11th–19th centuries",
        event: cited("Persian traveled far beyond modern Iran as a language of poetry, scholarship, diplomacy, historiography, and administration. Persianate courts and writers shaped cultural life from Anatolia and the Caucasus through Central and South Asia.", "loc-book")
      },
      {
        period: "20th century to the digital present",
        event: cited("Nation-states, mass schooling, radio, cinema, and language planning strengthened separate Iranian, Afghan, and Tajik norms. Tajik passed through Arabic, Latin, and Cyrillic policies; digital Persian now raises practical questions about character encoding, spacing, keyboards, and cross-script access.", "iranica-tajik", "unicode-persian")
      }
    ],
    contactHistory: cited(
      "Persian has repeatedly borrowed and lent. Arabic supplied a vast vocabulary of religion, law, scholarship, administration, and abstract thought after the seventh century. Persian phonology and syntax reshaped those words, and Persian word-building joined them to Iranian elements. Turkic languages contributed courtly, military, pastoral, and everyday vocabulary through long bilingual contact; Mongol rule added another historical layer. In modern Iran, French helped furnish educational and technical vocabulary before English became increasingly prominent. Tajik bears Russian and Uzbek influence; Afghan Persian has its own contact with Pashto, Turkic, Indic, and English vocabularies. In the other direction, Persian profoundly influenced Ottoman Turkish, Urdu and other South Asian languages, Caucasian languages, and literary Arabic. A borrowed word is evidence of social history, not a measure of purity.",
      "iranica-early",
      "iranica-tajik",
      "dd-persian-arabic"
    ),
    standardization: cited(
      "Persian is pluricentric: related standards have institutions, schools, and media in several states. Iran's Academy recommends orthography and terminology, though practice varies. Tehran speech influences Iranian broadcasting without representing every accent. Dari has official standing in Afghanistan; Kabul speech is only one Afghan model. Tajik was standardized in modified Cyrillic under Soviet conditions and developed vocabulary partly through Russian. Calling all three identical misses identities; calling them unrelated hides their shared inheritance. Ask “whose Persian, in which setting?”",
      "unicode-persian",
      "afghan-constitution",
      "iranica-tajik"
    )
  },
  variants: {
    overview: cited(
      "Persian, Farsi, Dari, and Tajik mix linguistic, political, and social meanings. Persian is the established English name; fārsi is the Iranian autonym and is common in English too. Dari is the official Afghan name, though many Afghans also say fārsi. Tajik names a standard and an identity. Within each are regional, social, and register differences. Careful formal speech is often mutually accessible, while unfamiliar local conversation and unequal media exposure can obstruct understanding.",
      "wiki-persian",
      "iranica-tajik",
      "dd-study"
    ),
    items: [
      { name: "Iranian Persian (فارسی)", note: cited("The Iranian national standard is written in Perso-Arabic script. Formal writing is shared widely, while everyday Tehran-influenced speech shows vowel shifts, contractions, different pronouns, and conversational verb forms. Shirazi, Mashhadi, Esfahani, southern, and many other accents have their own profiles.", "dd-resources", "wiki-persian") },
      { name: "Dari / Afghan Persian (دری / فارسی)", note: cited("Dari is an official language of Afghanistan alongside Pashto. It generally preserves distinctions lost in common Iranian pronunciation, but Afghanistan contains diverse Persian varieties; Herat, Kabul, Hazaragi, Panjshir, Badakhshan, and other speech should not be collapsed into one accent.", "afghan-constitution", "iranica-dari") },
      { name: "Tajik (тоҷикӣ)", note: cited("Tajik's Cyrillic orthography makes more vowels visible than Perso-Arabic spelling. Its vocabulary reflects Russian and neighboring Turkic contact, while formal texts and classical verse expose shared Persian structures. Local varieties in Tajikistan and Uzbekistan remain diverse.", "iranica-tajik", "loc-scripts") },
      { name: "Formal and literary Persian", note: cited("Edited prose across Iran and Afghanistan is closer than casual conversation. Classical verse forms a shared archive but requires training in older vocabulary, flexible word order, meter, imagery, and conventions; reading a ghazal is not simply decoding modern newspaper Persian.", "loc-book") },
      { name: "Diaspora and heritage Persian", note: cited("Diaspora Persian often mixes English, German, French, Swedish, or another community language and may preserve family expressions from an earlier migration period. Heritage speakers commonly have uneven skills—excellent listening, limited literacy, or intimate vocabulary without formal vocabulary—rather than simply “bad Persian.”", "dd-heritage", "dd-resources") }
    ]
  },
  pronunciation: {
    overview: cited(
      "Persian's consonants are approachable for many learners, but spelling hides important vowels and national standards do not sound identical. Contemporary Iranian Persian commonly has six vowel phonemes, plus diphthongs in many analyses. Dari preserves a larger set of vowel contrasts often described with a traditional long/short distinction, while Tajik has undergone its own restructuring. The letters ق and غ are often merged in Iranian speech but can be distinct elsewhere. و may represent v, the long vowel u, or the glide/diphthong element; ی may represent y or i. Therefore a written word is not a complete pronunciation guide. Choose recordings from the community you intend to understand, and label comparisons rather than treating Iranian pronunciation as universal.",
      "wiki-persian",
      "iranica-tajik",
      "dd-study"
    ),
    script: "Perso-Arabic examples with practical Iranian transliteration; variant pronunciations are labeled",
    soundSystem: cited(
      "Three habits improve intelligibility quickly. First, distinguish x, the voiceless velar fricative in خوب xub “good,” from h in هوا havā “air”; x resembles the sound in Scottish loch. Second, make ژ /ʒ/ as in French jour and keep چ /tʃ/ distinct from ج /dʒ/. Third, learn vowels from audio, because short a, e, and o are normally absent from the script. Iranian ā has shifted toward a back rounded quality for many speakers, while equivalent words can sound different in Afghan and Tajik norms. Stress usually falls near the end of a simple word, but enclitics, verb prefixes, compound structure, and emphasis alter the surface pattern. Avoid turning every written alef into the same English “ah.”",
      "wiki-persian",
      "dd-resources"
    ),
    prosody: cited(
      "Persian sounds natural when short grammatical links stay light and the phrase carries the rhythm. Ezāfe is typically an unstressed -e after a consonant and -ye after a vowel: کتابِ خوب ketāb-e xub, “a good book.” Object marker rā often becomes ro after consonants and o after vowels in colloquial Iranian speech. Common verb sequences compress: می‌خواهم mi-khāham becomes می‌خوام mi-khām; می‌روم mi-ravam becomes می‌رم mi-ram. Question intonation can distinguish a yes/no question without changing word order. Shadow complete turns—invitation, refusal, insistence—because politeness melody matters as much as perfect consonants.",
      "dd-phrases",
      "persian-online"
    ),
    learnerTraps: [
      "Guessing unmarked short vowels from the alphabet instead of checking a recording or dictionary",
      "Pronouncing Arabic loanwords as Arabic rather than learning their conventional Persian form",
      "Failing to hear unstressed ezāfe between a noun, adjective, and possessor",
      "Reading formal spelling aloud while trying to imitate casual Tehran conversation",
      "Assuming Iranian, Afghan, and Tajik vowel systems are merely accents with one identical target",
      "Using English r without listening for Persian's tap or trill patterns"
    ],
    sampleWords: [
      { original: "خوب", transliteration: "xub", translation: "good", note: "Practice the velar x. In careful Afghan pronunciation the vowel may sound closer to xōb; Tajik writes хуб." },
      { original: "هوا", transliteration: "havā", translation: "air; weather", note: "Contrast initial h with x in xub, and keep the final vowel long." },
      { original: "زندگی", transliteration: "zendegi", translation: "life", note: "The short vowels are not written; learn the whole sound shape rather than spelling it z-n-d-g-y." },
      { original: "مژه", transliteration: "može", translation: "eyelash", note: "ژ represents /ʒ/, a sound absent from the Arabic alphabet but familiar from English measure." },
      { original: "قهوه", transliteration: "qahve", translation: "coffee", note: "Many Iranians merge q with gh; spelling preserves ق and the final h is not pronounced as a full consonant." },
      { original: "می‌خواهم", transliteration: "mi-khāham; colloquial mi-khām", translation: "I want", note: "Compare the formal reading with a common Iranian conversational contraction." }
    ]
  },
  writing: {
    overview: cited(
      "Iranian Persian and Dari use an Arabic-derived script written right to left. Persian added پ p, چ ch, ژ zh, and گ g, and several historically distinct Arabic letters now represent the same Persian sound: س, ص, and ث all usually represent s, for example. Short vowels are normally omitted; long vowels are represented, though not always unambiguously. Letters join in context, except that ا د ذ ر ز ژ و do not connect to the following letter. Tajik uses a modified Cyrillic alphabet that represents vowels more explicitly. Persian has also been written in Hebrew script in Judeo-Persian traditions and in other scripts across its long history, a reminder that language and alphabet are not the same thing.",
      "loc-scripts",
      "unicode-persian"
    ),
    primaryScript: "Perso-Arabic (Iranian Persian and Dari); modified Cyrillic (Tajik)",
    romanization: cited(
      "There is no single romanization used everywhere. Scholarly transliteration may distinguish ā and use x or kh; passports, maps, and diaspora writing use competing conventions such as sh/š and gh/q. Romanization helps explain sound but hides joining, spelling families, and the silent short vowels a learner must eventually infer. Use it beside script for the first weeks, then reserve it for pronunciation notes. If Tajik matters, learn Cyrillic directly rather than routing every word through Latin letters.",
      "loc-scripts",
      "dd-resources"
    ),
    spellingNorms: cited(
      "The zero-width non-joiner keeps letters visually separate without a full space, as in می‌روم mi-ravam and خانه‌ها xāne-hā. Unicode specifies Persian yeh and kaf rather than visually similar Arabic code points. Writers vary in half-spaces, attached affixes, diacritics, and colloquial spelling. The Academy's دستور خط فارسی is influential in Iran, while Afghan conventions and Tajik Cyrillic have their own histories. Search tools can expose encoding differences invisible to the eye.",
      "unicode-persian"
    ),
    styleNotes: [
      cited("Learn letters through high-frequency words and type from the beginning; copying isolated forms does not teach joining or keyboard behavior.", "dd-resources"),
      cited("Practice with fully supported beginner audio and ordinary unvowelled text. Vowel marks are training wheels, not the normal surface of adult Persian prose.", "persian-online"),
      cited("Notice the zero-width non-joiner in edited Iranian text and do not replace it indiscriminately with a normal space or invisible Arabic character variants.", "unicode-persian"),
      cited("For cross-regional study, keep a two-script list: Persian افغانستان and Tajik Афғонистон become recognizable partners only after deliberate script comparison.", "loc-scripts", "iranica-tajik")
    ]
  },
  grammar: {
    overview: cited(
      "Persian grammar offers beginners quick wins: nouns have no grammatical gender, adjectives do not agree for gender or number, and modern nouns have little case inflection. The complexity lies elsewhere. Verbs distinguish past and present stems; prefixes, endings, auxiliaries, and participles build tense, aspect, mood, voice, and negation. Thousands of ordinary meanings use compound verbs such as صحبت کردن sohbat kardan, “to talk,” literally “conversation do.” Noun phrases are woven by ezāfe, objects can be marked by rā, and natural word order responds to whether information is known, contrasted, or new. Spoken Iranian Persian reshapes pronouns, prepositions, object marking, and verb forms, while Dari and Tajik preserve or innovate differently. Learn the formal grammar as a system, then learn a spoken system beside it.",
      "wiki-grammar",
      "persian-online"
    ),
    typologicalProfile: cited(
      "Persian is largely subject–object–verb and uses prepositions, postposed rā, and suffixes or clitics. It is often called an analytic language because nouns carry little inflection, but verbs and clitic chains still pack substantial information into words. Modifiers usually follow nouns through ezāfe; subordinate clauses often precede the final verb or follow a noun introduced by ke “that/which.” Subjects can be omitted when verbal endings make them recoverable. Definiteness has no direct equivalent of English the: specificity, context, rā, the indefinite enclitic -i, and word order share that work.",
      "wiki-grammar",
      "wiki-persian"
    ),
    morphology: cited(
      "A Persian dictionary normally lists an infinitive ending in -an or -dan, but learners need both verb stems. رفتن raftan “to go” has past stem raft- and present stem rav-: رفتم raftam “I went,” می‌روم mi-ravam “I go/am going,” and برو boro “go!” in common Iranian speech. Regular person endings help, yet the relation between stems can be unpredictable. The imperfective prefix mi-, subjunctive/imperative be-, negative na-/ne-, participle -e, and forms of budan “be” combine productively. Compound verbs pair a noun, adjective, or preverb with a light verb: تصمیم گرفتن tasmim gereftan “decide,” یاد گرفتن yād gereftan “learn,” and عوض شدن avaz shodan “change.” The nonverbal element may carry the core meaning, but each combination has its own collocations.",
      "wiki-grammar",
      "persian-online"
    ),
    syntax: cited(
      "Neutral clauses usually place the verb last: سارا کتاب را خواند Sārā ketāb rā xānd, “Sara read the book.” Persian can move constituents for topic and focus, and colloquial speech often places afterthoughts beyond the verb. Ezāfe links recursively: کتابِ جدیدِ دوستِ من ketāb-e jadid-e dust-e man, “my friend's new book.” Relative clauses use ke and normally leave the head noun outside: کتابی که خریدم ketābi ke xaridam, “the book that I bought.” Enclitic pronouns attach to nouns, prepositions, or verbs—کتابم ketābam “my book,” دیدمش didameš “I saw him/her”—and their position can feel mobile to English speakers. Natural mastery therefore depends on chunks, not word-for-word rearrangement.",
      "wiki-grammar",
      "persian-online"
    ),
    advancedPainPoints: [
      "Choosing the conventional light verb in a compound rather than translating English do, make, take, or become",
      "Following long ezāfe chains when the linking vowel is absent from the script",
      "Using rā according to specificity and discourse instead of marking every English direct object",
      "Switching consistently between edited formal Persian and a regional conversational grammar",
      "Interpreting enclitic pronouns and omitted subjects in rapid speech",
      "Recognizing poetic word order, ellipsis, older vocabulary, and metaphor without forcing modern prose syntax"
    ],
    topics: [
      {
        title: "Ezāfe builds noun phrases",
        body: cited("The unstressed connector -e/-ye links a noun to a following adjective, possessor, or another noun. It is usually pronounced but not written, so learners must supply it while reading. A chain is parsed from relationships, not translated mechanically left to right.", "wiki-grammar", "persian-online"),
        example: "خانهٔ کوچکِ مادربزرگم — xāne-ye kuchak-e mādarbozorgam",
        exampleTranslation: "my grandmother's small house. Ezāfe links house to small and grandmother; -am means my."
      },
      {
        title: "The specific object marker rā",
        body: cited("The postposition را rā often marks a definite or specific direct object; colloquial Iranian Persian normally pronounces it ro after a consonant and o after a vowel. Its distribution is discourse-sensitive, so “accusative marker” is only a first approximation.", "wiki-grammar"),
        example: "آن فیلم را دیشب دیدم. — ān film rā dišab didam.",
        exampleTranslation: "I saw that film last night. The pronoun subject “I” is recoverable from didam."
      },
      {
        title: "Past and present verb stems",
        body: cited("Infinitives do not predict every present stem. Learn raftan/raft-/rav- as a three-part entry. The prefix mi- marks imperfective or habitual meaning, while be- commonly appears in subjunctives and imperatives.", "wiki-grammar", "persian-online"),
        example: "هر روز می‌روم، ولی دیروز نرفتم. — har ruz mi-ravam, vali diruz naraftam.",
        exampleTranslation: "I go every day, but yesterday I did not go. The same verb uses rav- in the present and raft- in the past."
      },
      {
        title: "Compound verbs carry everyday meaning",
        body: cited("Persian freely combines a meaningful nonverbal element with light verbs such as kardan “do,” šodan “become,” zadan “hit,” gereftan “take,” and dādan “give.” Learn the entire unit and an object or preposition it commonly selects.", "wiki-grammar", "dd-resources"),
        example: "دارم فارسی یاد می‌گیرم. — dāram fārsi yād mi-giram.",
        exampleTranslation: "I am learning Persian. Literally, “I have Persian memory take,” but yād gereftan functions as one verb."
      },
      {
        title: "Present-tense “be” and enclitics",
        body: cited("Persian normally expresses present “be” with short endings attached to the predicate. In colloquial Iranian speech these forms reduce further. Independent hastan is available when existence or emphasis matters.", "wiki-grammar"),
        example: "این کتاب جالب است. — in ketāb jāleb ast.",
        exampleTranslation: "This book is interesting. In casual Iranian speech: in ketāb jālebe."
      },
      {
        title: "Subjunctive after wishes and necessity",
        body: cited("Present subjunctive forms commonly follow expressions of wanting, possibility, necessity, purpose, and commands. The prefix be- is visible in many affirmative forms, though compound and prefixed verbs require their own patterns.", "wiki-grammar", "persian-online"),
        example: "می‌خواهم فردا زودتر بیایم. — mi-xāham fardā zudtar biyāyam.",
        exampleTranslation: "I want to come earlier tomorrow. Colloquial Iranian: mi-khām fardā zudtar biyām."
      },
      {
        title: "Relative clauses with ke",
        body: cited("A head noun can take the indefinite/relative marker -i and be followed by a ke-clause. Persian often leaves a gap where English uses who, which, or that; prepositions and resumptive pronouns appear in more complex relatives.", "wiki-grammar"),
        example: "دوستی که در کابل زندگی می‌کند — dusti ke dar Kābol zendegi mi-konad",
        exampleTranslation: "a/the friend who lives in Kabul. The relative clause follows dusti and ends in its verb."
      },
      {
        title: "Formal writing and colloquial speech are parallel systems",
        body: cited("Common Iranian conversation changes ān to un in many words, compresses verbs, and uses colloquial pronouns and object forms. Do not produce random mixtures: map equivalent whole sentences and learn where formal forms remain natural, such as presentations, news, writing, or deliberate politeness.", "dd-resources", "dd-phrases"),
        example: "Formal: من نمی‌دانم. man nemidānam. · Colloquial Iranian: من نمی‌دونم. man nemidunam.",
        exampleTranslation: "I don't know. Both are systematic; the second belongs to ordinary Iranian conversation."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Persian is Iran's national public language within a multilingual country. Dari connects communities across Afghanistan in government, education, journalism, trade, and literature alongside Pashto and regional languages. Tajik is Tajikistan's state language and has substantial use in Uzbekistan. Persian's literary geography extends beyond its current home-language map, while migration has created media-producing diasporas. Speaker estimates vary because sources combine standards and count first- and second-language users differently; community descriptions are more honest than one deceptively exact total.",
      "wiki-persian",
      "afghan-constitution",
      "iranica-tajik"
    ),
    regions: [
      { place: "Iran", note: cited("Persian is the nationwide public language and a first or additional language for people across a highly multilingual country. Tehran media is influential, but regional accents and local languages remain central to identity.", "wiki-persian") },
      { place: "Afghanistan", note: cited("Dari and Pashto are the nationwide official languages under the 2004 constitution, with additional languages officially recognized regionally. Persian functions broadly across ethnic and regional lines; Afghan Persian itself is diverse.", "afghan-constitution", "iranica-dari") },
      { place: "Tajikistan and Uzbekistan", note: cited("Tajik is standardized in Tajikistan and Persian varieties have deep roots across Central Asia. Soviet borders, Cyrillic literacy, Russian bilingualism, Uzbek contact, and state categories have shaped contemporary use.", "iranica-tajik") },
      { place: "Persianate South Asia", note: cited("Persian no longer has its former administrative position, but manuscripts, inscriptions, histories, poetry, Urdu vocabulary, and scholarly traditions preserve centuries of use across India and Pakistan.", "loc-book") },
      { place: "Global diasporas", note: cited("Diaspora communities sustain Persian through family life, schools, satellite television, film, music, podcasts, publishing, comedy, and social media. Heritage proficiency varies by generation and domain.", "dd-heritage", "dd-resources") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "Persian is easier to begin than its script suggests: there is no grammatical gender, noun inflection is limited, person endings are regular, and pronunciation has no tones. Yet “easy grammar” misleads at intermediate level. Unwritten vowels slow reading; verbs need two stems; compound verbs are conventional; ezāfe is heard but usually unseen; and edited prose differs from rapid conversation. Advanced speakers navigate courtesy, idiom, classical quotation, and regional standards. Chatting with relatives, reading news, studying Rumi, and reporting from Afghanistan are different projects.",
      "dd-resources",
      "dd-heritage",
      "wiki-grammar"
    ),
    easierAspects: [
      "No grammatical gender and no gender agreement on adjectives",
      "Little noun case morphology in modern Persian",
      "A compact core sound system for many learners",
      "Regular personal endings once both verb stems are known",
      "Large bodies of film, music, television, literature, and online conversation",
      "Substantial shared formal vocabulary across national standards"
    ],
    hardAspects: [
      "Reading an abjad that normally omits short vowels",
      "Memorizing unpredictable present stems and conventional compound verbs",
      "Hearing ezāfe and clitics in fast phrases",
      "Separating formal written grammar from regional colloquial systems",
      "Acquiring pragmatic etiquette, irony, understatement, and ta'ārof",
      "Reading classical poetry with older language, meter, and allusion"
    ],
    plateauRisks: [
      "Remaining dependent on transliteration instead of building word-shape recognition",
      "Learning only textbook formal Persian and finding ordinary speech opaque",
      "Learning only Tehran conversation and assuming it represents Dari or Tajik",
      "Memorizing nouns while neglecting compound verbs and their collocations",
      "Treating every polite formula literally instead of observing interaction",
      "Postponing sustained reading because dictionary lookup feels slow"
    ],
    workload: cited(
      "In the first year, alternate daily script reading, structured grammar, conversation in one regional model, and enjoyable transcribed media. Reread short voiced texts instead of copying alphabet charts. Next add formal news, unscripted audio, and a phrase notebook organized around compound verbs. Heritage learners should diagnose listening, literacy, and formal vocabulary separately. Begin literature with modern prose and annotated poems. After building a stable base, compare Iranian, Afghan, and Tajik clips on one topic and record systematic correspondences.",
      "dd-resources",
      "dd-study",
      "dd-resources"
    )
  },
  advancedLearning: {
    strategy: cited(
      "Move from rules to choices. For every compound verb, save its object marking, preposition, and a sourced sentence. Keep paired formal/colloquial transcripts. Retell one event as a voice note, friendly message, and formal paragraph; a tutor can mark register slips. Add regional comparison after stabilizing your primary model. Read a modern story beside a film scene and an annotated poem to connect prose, living speech, and literary allusion.",
      "dd-resources",
      "persian-online",
      "loc-book"
    ),
    mediaPractice: cited(
      "Film makes pragmatics visible through family negotiation and hierarchy. Transcribe a two-minute scene, compare Persian subtitles, then shadow each turn including hesitation and politeness. Balance formal news with interviews, cooking videos, comedy, and podcasts. For Dari, seek Afghan creators rather than substituting Iranian material; for Tajik, pair Cyrillic news with conversational audio. Discover Discomfort's heritage-language account points to A Separation as compelling study material: attachment makes repetition sustainable.",
      "dd-heritage",
      "dd-study"
    ),
    dictionariesAndCorpora: cited(
      "Use bilingual dictionaries for speed, then verify behavior in a monolingual reference or corpus. Dehkhoda is a monumental historical and encyclopedic dictionary, valuable for literary words and attestations but not a simple guide to today's conversation. The Academy's واژه‌یاب resources and major Mo'in or Amid traditions help with standard meanings; pronunciation audio should be checked against the target region. Search exact phrases with and without half-spaces because Persian digital spelling varies. A corpus query is most revealing when it tests a decision—whether a noun takes rā, which light verb accompanies it, or whether a phrase belongs mainly to journalism.",
      "dehkhoda",
      "unicode-persian"
    ),
    resources: [
      { type: "other", title: "Discover Discomfort: Best Persian Learning Resources", url: "https://discoverdiscomfort.com/learn-improve-farsi-persian-resources/", level: "all", description: cited("A first-person, tested survey of courses, tutors, dictionaries, audio, and free sites, with useful warnings about formal versus colloquial focus. Use it as a decision guide rather than attempting every listed tool.", "dd-resources") },
      { type: "course", title: "Persian Language Online", url: "https://persianlanguageonline.com/", level: "beginner", description: cited("A multimedia course developed with university support, presenting script, dialogues, grammar, and culture. Its mixed formal and conversational material is most effective when each example is labeled in your notes.", "persian-online", "dd-resources") },
      { type: "course", title: "SOAS Persian short courses", url: "https://www.soas.ac.uk/study/find-course/persian-beginners-course", level: "beginner", description: "Teacher-led contemporary Persian courses balancing speaking, listening, reading, writing, grammar, translation, and cultural appropriateness. Useful for learners who want scheduled feedback." },
      { type: "other", title: "A Thousand Years of the Persian Book", url: "https://www.loc.gov/exhibits/thousand-years-of-the-persian-book/", level: "all", description: cited("The Library of Congress exhibition connects scripts, the Shahnameh, religion, science, history, and literature through digitized objects. Browse it to give vocabulary a material history.", "loc-book") },
      { type: "dictionary", title: "Dehkhoda Dictionary", url: "https://dehkhoda.ut.ac.ir/", level: "advanced", description: cited("The University of Tehran's monumental lexicographical project is indispensable for historical and literary research. Beginners should pair it with a concise modern dictionary rather than treating every attested sense as current.", "dehkhoda") },
      { type: "other", title: "Discover Discomfort Persian phrase guide", url: "https://discoverdiscomfort.com/farsi-persian-basic-phrases-sound-local/", level: "beginner", description: cited("Audio-supported Iranian Persian phrases centered on social interaction, including the multipurpose befarmāyid. Compare its colloquial forms with formal textbook equivalents.", "dd-phrases") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Persian often places cultural weight in ordinary-looking words. دل del can be heart, courage, mood, desire, or the emotional center of an idiom. جان jān means life or soul and becomes an affectionate suffix after a name. Courtesy formulas invoke tiredness, hands, eyes, and honor in ways that literal translation cannot predict. Literature magnifies this semantic layering: گل gol “rose/flower,” بلبل bolbol “nightingale,” می mey “wine,” and راه rāh “road/way” participate in poetic traditions but remain everyday words. Modern writers and musicians reuse, resist, and parody inherited images. The best vocabulary notebook therefore has a literal sense, a collocation, a social setting, and a source—not just an English gloss.",
      "dd-phrases",
      "loc-book",
      "loc-book"
    ),
    notableWords: [
      { term: "دل", transliteration: "del", meaning: "heart; inner feeling; courage", note: cited("Del names an emotional center and appears in countless compounds and idioms: delam tang šode, literally “my heart has become tight,” expresses missing someone.", "dd-phrases") },
      { term: "جان", transliteration: "jān", meaning: "life; soul; dear", note: cited("Placed after a name, jān expresses affection or warmth. By itself as a response it can mean “yes?” in an intimate, attentive way; register and relationship decide the effect.", "dd-phrases") },
      { term: "تعارف", transliteration: "ta'ārof", meaning: "ritualized courtesy; polite offering and refusal", note: cited("Ta'ārof is not a code in which every offer is false. It names interactional practices involving hospitality, deference, insistence, modesty, and role; observe the specific exchange instead of stereotyping Persian speakers as indirect.", "dd-phrases") },
      { term: "بفرمایید", transliteration: "befarmāyid", meaning: "please; go ahead; come in; help yourself", note: cited("This imperative of farmudan “to say/command” is a social multitool. Gesture and context turn it into an invitation to enter, take something, speak, order, or precede the host.", "dd-phrases") },
      { term: "خسته نباشید", transliteration: "xaste nabāšid", meaning: "may you not be tired", note: cited("Said to acknowledge work or effort, it can greet a shopkeeper, colleague, teacher, or someone finishing a task. A literal “don't be tired” misses its appreciative force.", "dd-phrases") },
      { term: "آزادی", transliteration: "āzādi", meaning: "freedom; liberty", note: cited("Built from āzād “free” plus abstract noun suffix -i, the word moves between everyday, philosophical, poetic, and political registers across Persian-speaking societies.", "wiki-persian") },
      { term: "همزبان", transliteration: "ham-zabān", meaning: "someone who shares one's language", note: cited("Literally “same-language,” this transparent compound can express linguistic kinship across borders while leaving room for different national and regional identities.", "iranica-tajik") }
    ],
    loanwordLayers: cited(
      "Everyday Persian combines inherited Iranian words such as mādar “mother,” barādar “brother,” and nām “name” with centuries of borrowing. Arabic-origin words dominate many formal semantic fields, but Persian plural endings and compound verbs can make them behave in thoroughly Persian ways. Turkic-origin words are common in ordinary life and administration; French loans such as مرسی mersi “thanks” and آسانسور āsānsor “elevator” mark modern contact in Iran; Russian layers are prominent in Tajik; English supplies contemporary technology and popular culture. Language planners coin Persian equivalents, speakers select among them, and the outcome varies by country and register. Avoid simplistic percentages: dictionaries, literary corpora, and daily conversation yield very different counts.",
      "dd-persian-arabic",
      "iranica-tajik",
      "unicode-persian"
    ),
    idioms: [
      { original: "دلم برایت تنگ شده", transliteration: "delam barāyat tang šode", translation: "I miss you", note: "Literally, “my heart has become tight for you.” Warm and common; Iranian colloquial speech may say delam barāt tang šode." },
      { original: "دستت درد نکند", transliteration: "dastet dard nakonad", translation: "Thank you for what you did", note: "Literally, “may your hand not hurt.” It appreciates effort, food, repair, or practical help." },
      { original: "چشم", transliteration: "češm", translation: "Certainly; I'll do it", note: "Literally “eye.” As a response, it respectfully accepts a request; tone can also make it playful." },
      { original: "آب از سرش گذشته", transliteration: "āb az saraš gozašte", translation: "The situation is already beyond saving", note: "Literally, “the water has passed over his/her head.” Pronouns and tense change with context." },
      { original: "یک دست صدا ندارد", transliteration: "yek dast sedā nadārad", translation: "One person cannot do everything alone", note: "Literally, “one hand has no sound.” Used to emphasize cooperation." }
    ],
    textGenres: [
      "Classical ghazal, qasida, masnavi, and roba'i poetry",
      "Epic narrative, especially Ferdowsi's Shahnameh",
      "Modern short stories, novels, memoir, and graphic narrative",
      "Iranian, Afghan, Tajik, and diaspora film and television dialogue",
      "News, essays, reportage, blogs, captions, and messaging",
      "Song lyrics spanning classical vocal, folk, pop, rap, and rock",
      "Oral storytelling, proverbs, jokes, and family histories"
    ]
  },
  relationships: {
    overview: cited(
      "Persian's closest story is both genealogical and social. It is an Iranian language related at different distances to Kurdish, Balochi, Pashto, Ossetian, and many smaller Iranian languages; “Iranian” here is a linguistic branch, not citizenship. Dari and Tajik are major standards within the Persian continuum. Contact created another network: Arabic profoundly shaped vocabulary and script, Turkic languages exchanged words through centuries of bilingual life, and Persian became a major literary and administrative source for Urdu and Ottoman Turkish. Similar script does not prove close descent, and political borders do not automatically create unrelated languages.",
      "wiki-persian",
      "iranica-early",
      "wiki-persian"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Poetry can appear in a speech, song, condolence, advertisement, or caption, but speakers differ enormously in literary knowledge; do not assume everyone recites Hafez. Contemporary culture also lives in comedy, football commentary, recipe videos, rap, film, and group chats. Ta'ārof includes offering, declining, honoring, and insisting, yet meaning depends on power, intimacy, age, and circumstance. A first refusal is not always fake: observe, ask trusted friends, and allow a sincere no. Language labels can be tied to identity and conflict, so let speakers name their Persian rather than correcting them.",
  resources: [
    { type: "other", title: "Discover Discomfort Persian resources", url: "https://discoverdiscomfort.com/learn-improve-farsi-persian-resources/", level: "all", description: cited("A practical, experience-based starting point covering books, tutoring, audio tools, dictionaries, and free courses.", "dd-resources") },
    { type: "other", title: "Discover Discomfort: Persian phrases with audio", url: "https://discoverdiscomfort.com/farsi-persian-basic-phrases-sound-local/", level: "beginner", description: cited("A reader-focused collection of conversational Iranian Persian phrases, especially valuable for courtesy and naturally reduced forms.", "dd-phrases") },
    { type: "course", title: "Persian Language Online", url: "https://persianlanguageonline.com/", level: "beginner", description: cited("Free multimedia lessons with dialogues, script, grammar, and cultural material; useful for bridging formal and conversational Persian.", "persian-online") },
    { type: "course", title: "SOAS Persian courses", url: "https://www.soas.ac.uk/study/find-course/persian-beginners-course", level: "beginner", description: "Structured instruction with teacher feedback and balanced four-skill practice." },
    { type: "dictionary", title: "Dehkhoda Dictionary", url: "https://dehkhoda.ut.ac.ir/", level: "advanced", description: cited("A monumental historical dictionary for serious reading and literary research, best paired with a current concise dictionary.", "dehkhoda") },
    { type: "media", title: "A Thousand Years of the Persian Book", url: "https://www.loc.gov/exhibits/thousand-years-of-the-persian-book/", level: "all", description: cited("A freely browsable exhibition of scripts, manuscripts, epic, science, religion, history, and literature from the Library of Congress.", "loc-book") },
    { type: "other", title: "Unicode Persian guidance", url: "https://cldr.unicode.org/translation/language-specific/persian", level: "advanced", description: cited("A practical reference for correct Persian characters, orthography, spacing, and localization—particularly helpful to writers and developers.", "unicode-persian") }
  ],
  relatedLanguages,
  phrases: [
    { original: "سلام", transliteration: "salām", translation: "Hello", usageNote: "Works broadly; the following conversation differs by region and relationship." },
    { original: "حال شما چطور است؟", transliteration: "hāl-e šomā chetor ast?", translation: "How are you?", usageNote: "Polite/formal Iranian Persian. Common conversation: hāletun chetore?" },
    { original: "خیلی ممنون", transliteration: "xeyli mamnun", translation: "Thank you very much", usageNote: "Common in Iran; سپاسگزارم sepāsgozāram is more formal." },
    { original: "خواهش می‌کنم", transliteration: "xāheš mi-konam", translation: "You're welcome; please", literalMeaning: "I make a request", usageNote: "Also softens requests; colloquial Iranian xāheš mi-konam." },
    { original: "بفرمایید", transliteration: "befarmāyid", translation: "Please; go ahead; come in; help yourself", usageNote: "Meaning comes from gesture and situation." },
    { original: "ببخشید", transliteration: "bebaxšid", translation: "Excuse me; sorry", usageNote: "Useful for getting attention, passing someone, or apologizing." },
    { original: "متوجه نشدم", transliteration: "motavajjeh našodam", translation: "I didn't understand", usageNote: "Neutral and polite; colloquial Iranian nafahmidam is more direct." },
    { original: "می‌شود دوباره بگویید؟", transliteration: "mi-šavad dobare beguyid?", translation: "Could you say it again?", usageNote: "Formal-neutral; Iranian conversation: mi-še dobare begin?" },
    { original: "این یعنی چه؟", transliteration: "in ya'ni che?", translation: "What does this mean?", usageNote: "Point to text or repeat the word before the question." },
    { original: "من دارم فارسی یاد می‌گیرم", transliteration: "man dāram fārsi yād mi-giram", translation: "I'm learning Persian", usageNote: "Iranian Persian; name Dari or Tajik if that is your actual target." },
    { original: "لطفاً آهسته‌تر صحبت کنید", transliteration: "lotfan āheste-tar sohbat konid", translation: "Please speak more slowly", usageNote: "Polite/formal; colloquial Iranian uses sohbat konin." },
    { original: "خسته نباشید", transliteration: "xaste nabāšid", translation: "Thank you for your effort", literalMeaning: "May you not be tired", usageNote: "Acknowledge someone working or finishing a task." },
    { original: "خوشبختم", transliteration: "xošbaxtam", translation: "Pleased to meet you", literalMeaning: "I am fortunate", usageNote: "Common in introductions, often after stating a name." },
    { original: "خداحافظ", transliteration: "xodāhāfez", translation: "Goodbye", literalMeaning: "May God protect [you]", usageNote: "Used widely regardless of the literal religious wording." }
  ],
  sources: [
    { id: "dd-resources", title: "The Best Persian Learning Resources", url: "https://discoverdiscomfort.com/learn-improve-farsi-persian-resources/", publisher: "Discover Discomfort", publishedAt: "2019-07-13", updatedAt: "2023-11-04", accessedAt: "2026-07-10" },
    { id: "dd-phrases", title: "40+ Common Persian Phrases to Sound like a Native Speaker", url: "https://discoverdiscomfort.com/farsi-persian-basic-phrases-sound-local/", publisher: "Discover Discomfort", publishedAt: "2019-11-11", updatedAt: "2023-09-13", accessedAt: "2026-07-10" },
    { id: "dd-study", title: "Where to Learn Persian Outside Iran", url: "https://discoverdiscomfort.com/learn-persian-outside-iran/", publisher: "Discover Discomfort", publishedAt: "2019-09-19", accessedAt: "2026-07-10" },
    { id: "dd-persian-arabic", title: "Persian vs Arabic — All the Similarities and Differences", url: "https://discoverdiscomfort.com/farsi-persian-vs-arabic-similarities-and-differences/", publisher: "Discover Discomfort", publishedAt: "2019-10-12", updatedAt: "2023-09-13", accessedAt: "2026-07-10" },
    { id: "dd-heritage", title: "How to (Re-)Learn Your Mother Tongue or Heritage Language", url: "https://discoverdiscomfort.com/how-to-learn-your-mother-tongue/", publisher: "Discover Discomfort", accessedAt: "2026-07-10" },
    { id: "wiki-persian", title: "Persian language", url: "https://en.wikipedia.org/wiki/Persian_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-grammar", title: "Persian grammar", url: "https://en.wikipedia.org/wiki/Persian_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "iranica-early", title: "Persian Language I: Early New Persian", url: "https://www.iranicaonline.org/articles/persian-language-1-early-new-persian/", publisher: "Encyclopaedia Iranica", accessedAt: "2026-07-10" },
    { id: "iranica-dari", title: "Darī", url: "https://www.iranicaonline.org/articles/dari/", publisher: "Encyclopaedia Iranica", accessedAt: "2026-07-10" },
    { id: "iranica-tajik", title: "Tajik II: Tajiki Persian", url: "https://www.iranicaonline.org/articles/tajik-ii-tajiki-persian/", publisher: "Encyclopaedia Iranica", updatedAt: "2012-10-26", accessedAt: "2026-07-10" },
    { id: "unicode-persian", title: "Persian language-specific translation and orthography guidance", url: "https://cldr.unicode.org/translation/language-specific/persian", publisher: "Unicode CLDR", accessedAt: "2026-07-10" },
    { id: "loc-scripts", title: "Writing Systems and Scripts — A Thousand Years of the Persian Book", url: "https://www.loc.gov/exhibits/thousand-years-of-the-persian-book/writing-systems-and-scripts.html", publisher: "Library of Congress", accessedAt: "2026-07-10" },
    { id: "loc-book", title: "A Thousand Years of the Persian Book", url: "https://www.loc.gov/exhibits/thousand-years-of-the-persian-book/", publisher: "Library of Congress", accessedAt: "2026-07-10" },
    { id: "afghan-constitution", title: "Constitution of Afghanistan, Article 16", url: "https://moj.gov.af/en/enforced-constitution-afghanistan", publisher: "Afghanistan Ministry of Justice", publishedAt: "2004-01-26", accessedAt: "2026-07-10" },
    { id: "persian-online", title: "Persian Language Online", url: "https://persianlanguageonline.com/", publisher: "Persian Language Foundation", accessedAt: "2026-07-10" },
    { id: "dehkhoda", title: "Dehkhoda Dictionary Institute and International Center for Persian Studies", url: "https://dehkhoda.ut.ac.ir/", publisher: "University of Tehran", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Persian Language Guide: Farsi, Dari, Tajik, Grammar and Culture",
    description: "An in-depth guide to Persian across Iran, Afghanistan, and Tajikistan, with script, pronunciation, grammar, phrases, literature, media, and modern learning resources."
  }
} satisfies LanguageGuide;
