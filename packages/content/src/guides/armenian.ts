import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

const relatedLanguages = [
  {
    name: "Greek",
    slug: "greek",
    relationship: "Indo-European relative and long-standing contact language",
    explanation: cited(
      "Armenian and Greek are separate branches of Indo-European. They share inherited features and centuries of cultural contact, especially in Christian scholarship and the Byzantine world, but neither is a form of the other. Similarities in vocabulary may be inherited, borrowed, or coincidental, so historical linguists compare regular sound correspondences rather than isolated look-alikes.",
      "glottolog",
      "wiki-language"
    )
  },
  {
    name: "Persian",
    slug: "persian",
    relationship: "Iranian relative with exceptionally deep contact",
    explanation: cited(
      "Persian is another Indo-European language, but Armenian and Iranian languages diverged long ago. Iranian political and cultural influence contributed so much vocabulary that early scholars sometimes misclassified Armenian as Iranian. Systematic comparison eventually showed that Armenian forms its own branch while preserving Iranian loan layers from different periods.",
      "britannica",
      "wiki-language"
    )
  },
  {
    name: "Georgian",
    slug: "georgian",
    relationship: "Unrelated South Caucasian neighbor",
    explanation: cited(
      "Georgian belongs to the Kartvelian family, not Indo-European. Armenian and Georgian nevertheless share a Caucasian geography, long histories of Christianity and manuscript culture, and sustained contact. Their scripts are independent, and similarities produced by contact should not be mistaken for common descent.",
      "glottolog",
      "wiki-language"
    )
  },
  {
    name: "Classical Armenian",
    relationship: "Earliest extensively attested historical stage",
    explanation: cited(
      "Classical Armenian, usually called գրաբար grabar, is the language of the fifth-century translation movement and a vast religious, historical, philosophical, and literary archive. It is not ordinary modern conversation, but it remains present in Armenian Apostolic liturgy and rewards readers of manuscripts and premodern texts.",
      "ut-classical",
      "unicode"
    )
  }
] satisfies LanguageGuide["relationships"]["languages"];

export const armenianGuide = {
  slug: "armenian",
  name: "Armenian",
  autonym: "Հայերեն (hayeren)",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Armenian is an independent branch of Indo-European with its own alphabet, two modern standards, a literature beginning in late antiquity, and living communities stretching from Yerevan and Iran to Beirut, Istanbul, Los Angeles, Paris, and beyond.",
  family: "Indo-European, Armenian",
  macroRegion: "Armenian Highlands, South Caucasus, and global diaspora",
  primaryScript: "Armenian alphabet",
  difficultyLabel: "Demanding",
  learnerHook: "A few dozen letters unlock street signs, family messages, medieval chronicles, contemporary novels, rock lyrics, comedy, and news in a language that resembles no other modern branch of Indo-European.",
  hero: {
    imageAlt: "Modern Armenian handwriting beside printed Armenian type showing the language's distinctive alphabet.",
    callToActionLabel: "Explore Armenian in use"
  },
  classification: "An independent branch of the Indo-European language family, represented today chiefly by Eastern and Western Armenian",
  speakerCommunity: "Armenian is the state language of the Republic of Armenia and a community language across a far-flung diaspora. Eastern Armenian anchors public life in Armenia and is also spoken in Iran and many post-Soviet communities. Western Armenian developed as a literary standard among Ottoman Armenians and now lives principally through diaspora families, schools, churches, newspapers, artists, and revitalization projects. These are not two ethnicities or mutually sealed languages: speakers share a literary inheritance and often accommodate one another, while pronunciation, everyday vocabulary, morphology, and spelling can reveal distinct educational histories. Heritage ability is equally varied. Someone may understand grandparents from Aleppo perfectly yet read slowly; another may write formal Eastern Armenian but use Russian or English freely in casual speech. All are part of Armenian's present rather than deviations from an imagined uniform community.",
  facts: [
    { label: "Family", value: "Indo-European · independent Armenian branch" },
    { label: "Modern standards", value: "Eastern Armenian and Western Armenian" },
    { label: "Historical language", value: "Classical Armenian (grabar), extensively attested from the 5th century" },
    { label: "Writing", value: "Left-to-right Armenian alphabet; 36 original letters plus օ and ֆ added later" },
    { label: "Orthographies", value: "Reformed spelling in Armenia; traditional spelling in most Western Armenian and Iranian Armenian publishing" },
    { label: "Community reality", value: "A national language in Armenia and a heritage/community language across diverse diasporas" }
  ],
  learnerOverview: "Begin with a person, place, or body of media, not with the abstract label ‘Armenian.’ If your family is from Lebanon, Syria, Istanbul, or an older Western diaspora, Western Armenian will probably bring the quickest emotional recognition. If your destination is Yerevan or your media diet is Armenia-based, choose Eastern Armenian in reformed spelling. Iranian Armenian usually means Eastern speech with traditional orthography. Label every course, keyboard, dictionary, and recording by standard. The alphabet itself is quite learnable; confusion comes when two resources assign different sounds to the same letters or spell the same word differently without explaining why. Spend the first week reading real names and short phrases, then replace transliteration. Build grammar from sentences: ես Երևանում եմ, yes Yerevanum em, ‘I am in Yerevan,’ teaches a pronoun, a place ending, and the position of ‘am’ at once. Because mainstream app coverage is uneven, Discover Discomfort's advice for less commonly taught languages is especially apt: use one sequenced course, one dependable audio source, a tutor or informed speaker, and a growing bank of checked sentences rather than collecting disconnected apps.",
  origins: {
    overview: cited(
      "Armenian is not a blend of Persian, Greek, and Caucasian languages, although all helped shape its history. It descends from Indo-European and constitutes a branch of its own. The earliest extensive record begins after Mesrop Mashtots and his collaborators created the Armenian alphabet in the early fifth century, traditionally dated around 405–406. The translation of scripture was followed by histories, theology, philosophy, lives of saints, and translated works whose lost Greek or Syriac originals sometimes survive only through Armenian. Classical Armenian later gave way to Middle Armenian varieties and, by the nineteenth century, two major modern literary standards. The long written record makes Armenian unusually valuable for historical linguistics, while its independence means that knowing Russian, Persian, or Greek provides contact vocabulary but no shortcut to its core grammar.",
      "wiki-language",
      "unicode",
      "ut-classical",
      "britannica"
    ),
    timeline: [
      {
        period: "Before the 5th century",
        event: cited(
          "Armenian speech existed long before it had a surviving national literary tradition. The Armenian Highlands were multilingual, and Armenian developed amid Iranian, Anatolian, Greek, Semitic, and Caucasian contact. Names and foreign transcriptions offer clues, but a continuous Armenian-language manuscript record had not yet begun.",
          "britannica",
          "wiki-language"
        )
      },
      {
        period: "c. 405–406 and the 5th century",
        event: cited(
          "Mesrop Mashtots is credited with devising the alphabet in a Christian scholarly setting where Greek and Syriac texts mattered greatly. Translation and original composition rapidly established Classical Armenian as a literary language. The achievement was not merely a cipher: the script represented Armenian sound distinctions and supported a durable intellectual culture.",
          "unicode",
          "ut-classical",
          "wiki-alphabet"
        )
      },
      {
        period: "11th–17th centuries",
        event: cited(
          "Pronunciation and grammar continued changing while Classical Armenian retained prestige. Texts conventionally grouped as Middle Armenian show features closer to later vernaculars, particularly in Cilician settings. Copyists, clergy, merchants, and printers carried Armenian writing through shifting political centers; the first Armenian printed book appeared in Venice in 1512.",
          "wiki-language",
          "unicode"
        )
      },
      {
        period: "19th century",
        event: cited(
          "Writers and educators increasingly used modern vernacular-based standards rather than grabar alone. Eastern Armenian developed around Transcaucasian and Iranian centers, while Western Armenian's literary norm was strongly associated with Constantinople and Ottoman Armenian publishing. Newspapers, schools, theater, and translation enlarged both publics.",
          "wiki-eastern",
          "wiki-western",
          "wiki-language"
        )
      },
      {
        period: "20th century to the digital present",
        event: cited(
          "Genocide, displacement, Soviet language planning, migration, and new diaspora centers radically altered where Armenian was spoken. Soviet Armenia introduced reformed spelling in the 1920s, with later adjustment, while most Western Armenian and Iranian Armenian institutions retained traditional spelling. Today Unicode publishing, searchable corpora, online dictionaries, podcasts, and remote teaching connect communities once separated by print and geography.",
          "unicode",
          "gulbenkian-western",
          "eanc"
        )
      }
    ],
    contactHistory: cited(
      "Iranian contact is the largest historical vocabulary layer: words entered Armenian during multiple periods of political and cultural proximity, which once disguised its independent Indo-European status. Greek and Syriac were central to early Christian translation and learning. Arabic, Turkic varieties, Georgian, Kurdish, and later French and Russian contributed in different regions and registers. Contemporary speakers may code-switch with Russian in Armenia and post-Soviet communities, Turkish in Istanbul, Arabic in Beirut, French in France, or English in North America. A borrowed word is not evidence of deficient Armenian. The revealing question is who uses it, with whom, and whether a more literary Armenian alternative changes the tone.",
      "britannica",
      "wiki-language",
      "eanc"
    ),
    standardization: cited(
      "Eastern and Western Armenian are pluricentric modern standards, not a formal language and its slang. Modern Eastern Armenian is the public standard of Armenia; an Iranian Eastern tradition uses many of the same grammatical patterns but normally retains traditional orthography and has distinctive pronunciation and vocabulary. Western Armenian grew through Ottoman Armenian schools and publishing and now has no single territorial state center. Its standard is maintained across institutions whose local speech histories differ. Classical Armenian remains a liturgical and scholarly register. Learners should therefore record three labels independently: modern standard, regional model, and orthography.",
      "wiki-language",
      "wiki-eastern",
      "wiki-western",
      "gulbenkian-western"
    )
  },
  variants: {
    overview: cited(
      "The convenient Eastern–Western division describes standards, but Armenia historically contained a much denser dialect landscape. Migration and mass violence broke many local continuities; Soviet education and urbanization further spread the Eastern standard. Modern community speech still varies by region, generation, class, and contact language. ‘Western Armenian’ likewise covers standard usage and many community accents rather than one sound frozen in pre-1915 Constantinople.",
      "wiki-language",
      "wiki-western",
      "gulbenkian-western"
    ),
    items: [
      {
        name: "Republic of Armenia Eastern Armenian",
        note: cited(
          "The basis of schools, government, national broadcasting, and most Yerevan-centered courses. Everyday Yerevan speech contains reductions, colloquial particles, and Russian-influenced vocabulary that a formal textbook may postpone.",
          "wiki-eastern",
          "eanc"
        )
      },
      {
        name: "Iranian Eastern Armenian",
        note: cited(
          "Spoken especially in Iran's Armenian communities. It belongs on the Eastern side grammatically but generally uses traditional orthography and has its own phonetic and contact profile. Do not infer spelling tradition directly from the Eastern/Western speech label.",
          "wiki-eastern",
          "unicode"
        )
      },
      {
        name: "Standard Western Armenian",
        note: cited(
          "Used across diaspora education, publishing, church and cultural life, with important communities and institutions in Lebanon, Turkey, Europe, and the Americas. It differs systematically from Eastern Armenian in consonant values, some inflection, common words, and the formation of certain verb tenses.",
          "wiki-western",
          "gulbenkian-western"
        )
      },
      {
        name: "Heritage and mixed community Armenian",
        note: cited(
          "Diaspora speakers often distribute languages by domain: Armenian with relatives or at church, another language at school or work, and mixed forms among peers. Vocabulary gaps beside excellent listening ability are a normal outcome of bilingual life. Revitalization succeeds by creating new spaces for friendship, art, play, and technology, not by shaming mixed speakers.",
          "gulbenkian-western",
          "dd-less-common"
        )
      },
      {
        name: "Classical Armenian (grabar)",
        note: cited(
          "The language of the oldest literary canon and continuing liturgy. Modern literacy helps with the script, but grammar and vocabulary require separate study. Reading a modern pronunciation of a classical text also differs from reconstructing historical sound values.",
          "ut-classical",
          "unicode"
        )
      }
    ]
  },
  pronunciation: {
    overview: cited(
      "Choose a standard before memorizing letter sounds. Eastern Armenian as spoken in Armenia preserves a three-way series of many stops and affricates: voiced, plain voiceless, and aspirated voiceless. Aspiration is the audible puff in թ, ք, փ, ց, and չ. Standard Western Armenian reorganized several historical consonant series, so the same printed letter may have a different value. Thus գիրք ‘book’ is roughly girk in Eastern but kirk in Western. Neither pronunciation is a spelling mistake. A comparative alphabet chart is useful for recognition, but production should follow one consistent speaker.",
      "wiki-language",
      "wiki-eastern",
      "wiki-western"
    ),
    script: "Armenian alphabet; examples below follow modern Eastern Armenian in Armenia unless marked otherwise",
    soundSystem: cited(
      "Modern Eastern Armenian has six basic vowel phonemes in common analyses and a rich consonant inventory. English speakers must hear aspiration as contrastive: տ tun ‘house’ begins differently from թ թուղթ tʿuġtʿ ‘paper.’ The letters ղ and խ represent back fricatives, while ռ is a stronger trill than ր. In casual speech, clusters and unstressed vowels may be reduced, so a word learned only from print can be difficult to recognize. Western Armenian's consonant correspondences need systematic retraining rather than ad hoc substitution.",
      "wiki-eastern",
      "wiki-western",
      "unicode-phonetic"
    ),
    prosody: cited(
      "Stress in modern Armenian commonly falls near the end of the word, often on the final full vowel, but suffixes, clitics, and reduced vowels complicate a one-line rule. The vowel written ը, conventionally transliterated ë or ə, is a central vowel like the sound in English ‘sofa’; it may be heard where learners do not expect a full written vowel. Armenian questions are especially visible on the page because the question mark is placed over the stressed vowel of the focused word rather than at the sentence edge. Shadow whole questions and answers so stress, reduction, and intonation develop together.",
      "wiki-language",
      "unicode"
    ),
    learnerTraps: [
      "Using one alphabet chart without checking whether its sound values are Eastern or Western",
      "Collapsing plain and aspirated stops, especially տ/թ, կ/ք, and պ/փ",
      "Pronouncing every written vowel with equal weight instead of listening for reduction",
      "Treating ղ and խ as interchangeable approximations of English h or k",
      "Confusing the lighter ր with the stronger trilled ռ",
      "Putting Armenian question and exclamation marks at the end as if they were English punctuation"
    ],
    sampleWords: [
      { original: "տուն", transliteration: "tun", translation: "house", note: "Eastern Armenian տ is a plain voiceless stop; compare the aspirated թ in the next example." },
      { original: "թուղթ", transliteration: "tʿuġtʿ", translation: "paper", note: "Both թ sounds are aspirated. The transliteration apostrophe marks aspiration, not a separate pause." },
      { original: "գիրք", transliteration: "girkʿ (Eastern), kirkʿ (Western)", translation: "book", note: "A compact reminder that shared spelling does not guarantee shared consonant values across the standards." },
      { original: "խաղող", transliteration: "xaġoġ", translation: "grape", note: "This useful market word contrasts խ x with the more voiced back sound ղ ġ." },
      { original: "երրորդ", transliteration: "yerrord", translation: "third", note: "The spelling and natural cluster train the stronger ռ sound; imitate a recording rather than forcing every letter separately." },
      { original: "ընկեր", transliteration: "ënker", translation: "friend", note: "The initial ը is a central vowel. This letter is common but often visually overlooked by beginners." },
      { original: "ջուր", transliteration: "jur", translation: "water", note: "Eastern ջ begins with a voiced affricate similar to English j; standard Western correspondence differs." }
    ]
  },
  writing: {
    overview: cited(
      "Armenian is written left to right with an alphabet created for Armenian around the beginning of the fifth century. The original set had 36 letters; օ and ֆ entered later. Letters have upper- and lowercase forms. Words are separated by spaces, but punctuation supplies a delightful early surprise: ՞ and ՜ sit above a vowel inside the word carrying the question or exclamation. Unicode encodes Armenian letters and punctuation, so learners should install an Armenian keyboard rather than paste look-alike characters from other scripts.",
      "unicode",
      "wiki-alphabet"
    ),
    primaryScript: "Armenian alphabet in either reformed or traditional orthography",
    romanization: cited(
      "Several romanization systems coexist, and informal spellings often sacrifice distinctions. One source may write Հայերեն as hayeren, another as hayerēn; aspirated letters may appear with an apostrophe, modifier mark, or h. Transliteration is useful for discussing sound across standards, but it cannot replace script because it often conceals spelling families and punctuation. Pick one scholarly convention for notes and recognize common informal alternatives.",
      "unicode-phonetic",
      "wiki-alphabet"
    ),
    spellingNorms: cited(
      "Reformed orthography was introduced in Soviet Armenia in 1922 and modified later; it is standard in the Republic of Armenia and much of the former Soviet sphere. Traditional or Mesropian orthography remains standard in Western Armenian publishing and among Eastern Armenians in Iran. The two systems alter more than typography—for example, they distribute historical spellings involving է/ե, օ/ո, and the ligature և differently. Learners should not call one ‘old Armenian’ and the other ‘modern Armenian.’ Both write modern language, and digital search often requires trying both forms.",
      "unicode",
      "wiki-alphabet"
    ),
    styleNotes: [
      cited("Learn lowercase first for reading, then uppercase forms for names, headlines, and all-caps text; some pairs are less visually obvious than Latin case pairs.", "unicode"),
      cited("Keep a separate spelling column when comparing Eastern and Western resources. A pronunciation difference and an orthographic difference are independent facts.", "unicode", "wiki-western"),
      cited("Type with a Unicode Armenian keyboard and preserve Armenian punctuation. Latin look-alikes and legacy fonts make text hard to search and may break accessibility.", "unicode"),
      cited("Read handwriting as a distinct skill. Connected personal forms can look far less like textbook type than a new learner expects.", "wiki-alphabet")
    ]
  },
  grammar: {
    overview: cited(
      "Modern Armenian grammar combines familiar Indo-European ideas with forms that deserve to be learned on their own terms. Nouns decline for case but have no grammatical gender. Definite articles attach to the end of a noun. Verbs mark tense, mood, person, and number through a mixture of inflection and auxiliary constructions. Basic word order often looks subject–object–verb, yet constituents move for topic and focus, and colloquial speech makes heavy use of particles. Eastern and Western Armenian share this architecture while differing in important details of forms and usage.",
      "wiki-language",
      "wiki-eastern",
      "wiki-western"
    ),
    typologicalProfile: cited(
      "Armenian is a moderately inflected, mostly suffixing language. Modern descriptions commonly recognize seven noun cases, although some forms coincide. Postpositions are frequent, adjectives do not agree with nouns in gender, and there is no grammatical gender comparable to French or Russian. The definite article is enclitic—that is, it leans phonologically on the end of the noun. Eastern Armenian distinguishes present, past, future, subjunctive, imperative, and other verbal categories through synthetic and analytic patterns.",
      "wiki-language",
      "wiki-eastern"
    ),
    morphology: cited(
      "A practical noun entry should include its plural and genitive because stem changes and declension classes matter: գիրք girkʿ ‘book,’ գրքեր grkʿer ‘books,’ գրքի grkʿi ‘of the book.’ Case endings combine with number and definiteness, while postpositions may require a particular case. A practical verb entry should include the infinitive and several stems or principal forms, not just an English gloss. Derivational suffixes create dense word families: հայ hay ‘Armenian person’ connects to Հայաստան Hayastan ‘Armenia,’ հայերեն hayeren ‘the Armenian language/in Armenian,’ and հայկական haykakan ‘Armenian’ as an adjective.",
      "wiki-language",
      "eanc",
      "nayiri"
    ),
    syntax: cited(
      "Neutral clauses often put the object before the verb: Աննան գիրքը կարդում է, Annan girkʿë kardum e, ‘Anna is reading the book.’ But Armenian word order responds to what is already known, what is contrasted, and what receives focus. The auxiliary frequently occupies a characteristic second-position-like slot in Eastern Armenian, and moving it can change emphasis. Subjects may be omitted because the verb identifies person. Relative clauses precede or follow their head in patterns that learners should collect from texts rather than translate word by word from English.",
      "wiki-eastern",
      "eanc"
    ),
    advancedPainPoints: [
      "Keeping Eastern and Western verb paradigms separate while learning to recognize both",
      "Choosing the case required by a postposition or idiomatic verb",
      "Using articles -ը and -ն naturally around vowels and connected speech",
      "Recognizing reduced stems such as գիրք → գրքի rather than expecting the citation form unchanged",
      "Managing information-sensitive word order instead of using one rigid English template",
      "Distinguishing conversational forms from literary and Classical Armenian constructions"
    ],
    topics: [
      {
        title: "Definiteness lives at the end",
        body: cited(
          "Modern Armenian normally marks ‘the’ with a suffix: գիրք girkʿ is ‘a book/book,’ while գիրքը girkʿë is ‘the book.’ The article appears as -ը or -ն according to phonological context. This is an enclitic article: a small grammatical element attached to its host, not a separate word before the noun.",
          "wiki-eastern"
        ),
        example: "Գիրքը սեղանի վրա է։ Girkʿë seġani vra e.",
        exampleTranslation: "The book is on the table."
      },
      {
        title: "Cases build compact relationships",
        body: cited(
          "The genitive–dative form can express possession or a recipient, while ablative marks movement from and instrumental can express means. Learn endings inside useful contrasts: Երևանում Yerevanum ‘in Yerevan,’ Երևանից Yerevanicʿ ‘from Yerevan,’ and Երևան Yerevan ‘to Yerevan’ in an ordinary motion expression. Case names describe patterns; the phrase determines the natural choice.",
          "wiki-language",
          "eanc"
        ),
        example: "Ես Երևանից եմ։ Yes Yerevanicʿ em.",
        exampleTranslation: "I am from Yerevan."
      },
      {
        title: "There is no grammatical gender",
        body: cited(
          "Nouns and adjectives do not divide into masculine and feminine agreement classes. Նա na can mean ‘he’ or ‘she,’ with context supplying the referent. This reduces agreement memorization but creates translation choices when English demands a gendered pronoun.",
          "wiki-language"
        ),
        example: "Նա լավ ուսուցիչ է։ Na lav usucʿičʿ e.",
        exampleTranslation: "He or she is a good teacher."
      },
      {
        title: "The present uses a participle and auxiliary",
        body: cited(
          "In modern Eastern Armenian, many present-progressive meanings combine an -ում form with the present of ‘be.’ The auxiliary often follows the focused early constituent rather than mechanically sitting at the end. Treat կարդում եմ kardum em ‘I read/am reading’ as a working unit before abstracting the paradigm.",
          "wiki-eastern",
          "eanc"
        ),
        example: "Ես հայերեն եմ սովորում։ Yes hayeren em sovorum.",
        exampleTranslation: "I am learning Armenian."
      },
      {
        title: "Western Armenian builds the present differently",
        body: cited(
          "Standard Western Armenian commonly forms the present with the particle կը gë before a finite verb, where Eastern Armenian uses its participle-plus-auxiliary construction. The contrast is systematic, not a handful of accent changes. Beginners should produce one model consistently while learning high-frequency equivalents in the other.",
          "wiki-western",
          "wiki-eastern"
        ),
        example: "Ես հայերէն կը սորվիմ։ Yes hayerēn gə sorvim. (Western Armenian)",
        exampleTranslation: "I learn/am learning Armenian."
      },
      {
        title: "Negation changes the verb phrase",
        body: cited(
          "Eastern Armenian uses չ- čʿ- and negative forms of the auxiliary; word order may shift compared with the affirmative. Memorize matched pairs rather than adding a free-standing ‘not’ at random: հասկանում եմ haskanum em ‘I understand,’ չեմ հասկանում čʿem haskanum ‘I do not understand.’",
          "wiki-eastern"
        ),
        example: "Ես չեմ հասկանում։ Yes čʿem haskanum.",
        exampleTranslation: "I do not understand."
      },
      {
        title: "Possession has more than one natural shape",
        body: cited(
          "A genitive possessor precedes the possessed noun, and possessive suffixes can attach to the noun. Իմ գիրքը im girkʿë means ‘my book,’ while գիրքս girkʿs can express ‘my book’ compactly. The final consonant is grammatical, not merely a clipped pronoun.",
          "wiki-language",
          "eanc"
        ),
        example: "Սա իմ ընկերոջ գիրքն է։ Sa im ënkeroǰ girkʿn e.",
        exampleTranslation: "This is my friend's book."
      },
      {
        title: "Word order serves focus",
        body: cited(
          "Armenian is often summarized as subject–object–verb, but authentic clauses move material to highlight contrast, introduce a topic, or place focus near the auxiliary. Ask a tutor what a rearrangement emphasizes rather than whether it is simply ‘allowed.’ Corpus searches are particularly useful because they reveal recurring constructions beyond invented textbook sentences.",
          "eanc"
        ),
        example: "Աննան է գիրքը բերել։ Annan e girkʿë berel.",
        exampleTranslation: "It was Anna who brought the book."
      }
    ]
  },
  whereSpoken: {
    overview: cited(
      "Armenian's map is made by both territory and migration. The Republic of Armenia supplies the largest continuous public sphere, while communities in Georgia and Iran have deep regional histories. Western Armenian networks were remade after the destruction and displacement of Ottoman Armenian communities and now operate through cities, institutions, families, and digital spaces across several continents. Speaker counts vary because censuses distinguish citizenship, ethnicity, mother tongue, home use, and proficiency differently.",
      "wiki-language",
      "glottolog",
      "gulbenkian-western"
    ),
    regions: [
      { place: "Republic of Armenia", note: cited("Armenian is the state language and the medium of most public education, government, publishing, and national media. Everyday urban speech is more colloquial and contact-rich than formal news prose.", "wiki-eastern", "eanc") },
      { place: "Georgia and the South Caucasus", note: cited("Long-established Armenian communities remain in Georgia, including Tbilisi and Javakhk, alongside newer mobility across the region. Local repertoires can include Georgian and Russian as well as Armenian.", "glottolog", "wiki-language") },
      { place: "Iran", note: cited("Iranian Armenians generally use an Eastern Armenian standard with traditional orthography. Community schools, churches, and publishing preserve a model distinct from both Yerevan colloquial speech and Western Armenian.", "wiki-eastern", "unicode") },
      { place: "Lebanon, Syria, and Istanbul", note: cited("These have been crucial centers of Western Armenian education, journalism, literature, and performance. War, migration, and assimilation have changed their scale, but describing them only as remnants misses active cultural production.", "wiki-western", "gulbenkian-western") },
      { place: "Russia, Europe, and the Americas", note: cited("Large and internally diverse communities include recent migrants from Armenia and older Western and Eastern diasporas. Los Angeles alone contains multiple Armenian regional and educational histories, so ‘diaspora accent’ is not a single variety.", "wiki-language", "gulbenkian-western") }
    ]
  },
  difficulty: {
    label: "Demanding",
    overview: cited(
      "For an English speaker, Armenian's alphabet and inflection make the beginning look harder than it feels after sustained practice. The script is finite and alphabetic, there is no grammatical gender, and spelling often gives useful guidance. The longer challenge is sociolinguistic: learners must choose a standard, recognize another, navigate two orthographies, and find enough level-appropriate audio. Difficulty depends strongly on access to speakers and motivation; a heritage learner and an independent reader face very different workloads.",
      "dd-less-common",
      "wiki-language"
    ),
    easierAspects: [
      "An alphabetic script with a manageable inventory and consistent left-to-right layout",
      "No grammatical gender or adjective agreement by gender",
      "Many reusable suffixes and transparent word families",
      "A strong relationship between literacy, community institutions, and cultural participation",
      "Expanding online dictionaries, corpora, courses, radio, and video"
    ],
    hardAspects: [
      "Selecting and consistently producing Eastern or Western pronunciation",
      "Learning case forms, stem alternations, and verb constructions in complete phrases",
      "Reading both reformed and traditional spelling when interests cross communities",
      "Finding graded listening with accurate transcripts",
      "Handling gaps between formal written Armenian and fast colloquial speech"
    ],
    plateauRisks: [
      "Continuing to read romanization after the first few weeks",
      "Mixing standards without labeling forms or asking how speakers perceive the mixture",
      "Reading literary prose while postponing unscripted conversation",
      "Treating heritage speakers as free proofreaders rather than building reciprocal relationships",
      "Equating correction with purity and avoiding the mixed spaces where Armenian is actually used"
    ],
    workload: cited(
      "A focused beginner can learn the letters and basic sound system in weeks, but conversational independence requires hundreds of hours of listening, sentence practice, and feedback. Use a twelve-week cycle: finish consecutive lessons in one course, meet one speaker weekly, master a short recording every few days, and write a corrected paragraph each week. After that, choose a domain—family stories, news, cooking, film, church, or literature—and deepen it. For Western Armenian especially, paying teachers, subscribing to media, and joining programs supports the ecosystem that makes learning possible.",
      "dd-less-common",
      "gulbenkian-western"
    )
  },
  advancedLearning: {
    strategy: cited(
      "At intermediate level, stop measuring progress by grammar chapters and build parallel registers. Keep one notebook for conversational phrases exactly as heard, one for edited prose, and one comparative page for Eastern/Western or reformed/traditional equivalents. Search the Eastern Armenian National Corpus to test collocations, then confirm living use with a speaker. Translate a short personal story into Armenian, record it, receive correction, and retell it without reading. Repeated ownership of meaningful material produces more flexible speech than endlessly sampling new content.",
      "eanc",
      "dd-less-common"
    ),
    mediaPractice: cited(
      "Rotate formats deliberately. Armenia's Public Radio and television news offer careful Eastern Armenian; interviews and comedy expose colloquial reductions; songs make phrasing memorable but stretch normal syntax; Western Armenian podcasts, newspapers, children's media, and community broadcasts broaden recognition. Work with one minute at a time: listen blind, transcribe, compare with captions or a speaker, mark unknown chunks, then shadow. Once a week, summarize the clip aloud for someone who has not heard it.",
      "gulbenkian-western",
      "eanc"
    ),
    dictionariesAndCorpora: cited(
      "Nayiri aggregates major Armenian dictionaries, including monolingual Eastern and Western works, bilingual references, and historical lexicons. Search in Armenian script and check which dictionary produced an entry. The Eastern Armenian National Corpus offers roughly 110 million tokens across written and oral discourse from the mid-nineteenth century onward, making it useful for collocations and change over time. Corpus frequency is evidence of attestation, not automatic proof that a phrase suits your setting.",
      "nayiri",
      "eanc"
    ),
    resources: [
      { type: "course", title: "AGBU Armenian Virtual College", url: "https://www.avc-agbu.org/", level: "beginner", description: cited("Structured online Armenian courses with multimedia study; verify whether a class follows Eastern or Western Armenian before enrolling.", "avc") },
      { type: "course", title: "Classical Armenian Online", url: "https://lrc.la.utexas.edu/eieol_toc/armol", level: "advanced", description: cited("The University of Texas offers annotated Classical Armenian lessons built around historical texts, grammar points, and a base-form dictionary.", "ut-classical") },
      { type: "dictionary", title: "Nayiri Armenian dictionaries", url: "https://www.nayiri.com/", level: "all", description: cited("A searchable gateway to multiple Eastern, Western, Classical, explanatory, and bilingual dictionaries. Always note the selected dictionary and orthography.", "nayiri") },
      { type: "corpus", title: "Eastern Armenian National Corpus", url: "https://eanc.net/", level: "intermediate", description: cited("A large searchable collection for checking words, collocations, and contexts across genres and time periods.", "eanc") },
      { type: "other", title: "Gulbenkian Western Armenian initiatives", url: "https://gulbenkian.pt/armenian-communities/priorities-and-activities/the-western-armenian-language/", level: "all", description: cited("A hub for understanding and finding contemporary Western Armenian revitalization, pedagogy, media, and technology projects.", "gulbenkian-western") }
    ]
  },
  wordsAndTexts: {
    overview: cited(
      "Armenian words often carry several maps at once: an inherited Indo-European history, centuries of contact, a literary afterlife, and a modern community setting. Հայ hay means an Armenian person; adding productive material yields հայերեն hayeren ‘Armenian language/in Armenian’ and Հայաստան Hayastan ‘Armenia.’ Everyday words can shift pronunciation across standards while remaining immediately recognizable in writing. Record the article and a phrase with every noun, and the standard with every conversational expression.",
      "wiki-language",
      "nayiri"
    ),
    notableWords: [
      { term: "հայերեն", transliteration: "hayeren", meaning: "the Armenian language; in Armenian", note: cited("Built from հայ hay ‘Armenian’ and the language/adverbial ending -երեն. It is the natural answer to ‘What language?’ rather than merely an English label translated letter by letter.", "nayiri") },
      { term: "բարև", transliteration: "barev", meaning: "hello (Eastern spelling)", note: cited("The everyday greeting is written բարեւ barev in traditional orthography. One friendly word therefore demonstrates the orthographic split without implying a different meaning.", "unicode", "nayiri") },
      { term: "ընկեր", transliteration: "ënker", meaning: "friend; companion; colleague", note: cited("Context determines whether ընկեր is an intimate friend, classmate, colleague, or companion. Its first letter also gives learners a useful encounter with the central vowel ը.", "nayiri") },
      { term: "ջան", transliteration: "jan", meaning: "dear; affectionate address particle", note: cited("Placed after a name or kin term—Անի ջան Ani jan—it conveys warmth. Its exact force depends on relationship and tone; mechanical use with strangers can sound overly familiar.", "nayiri", "eanc") },
      { term: "կարոտ", transliteration: "karot", meaning: "longing; missing someone or somewhere", note: cited("A culturally resonant word in songs and diaspora conversation, but also an ordinary noun. Կարոտել karotel means ‘to miss/long for’; learn it in a real sentence rather than treating it as untranslatable folklore.", "nayiri", "eanc") },
      { term: "հայրենիք", transliteration: "hayrenikʿ", meaning: "homeland", note: cited("Prominent in political, literary, and diaspora language. The referent and emotion are contextual: homeland can mean a state, ancestral place, lived home, or imagined community.", "nayiri", "gulbenkian-western") },
      { term: "խոսք", transliteration: "xoskʿ", meaning: "word; speech; discourse", note: cited("This compact word appears in compounds and expressions about promises, speaking, and public address. Its initial խ gives pronunciation practice.", "nayiri", "eanc") },
      { term: "աշխարհ", transliteration: "ašxarh", meaning: "world", note: cited("A recognizable literary and everyday word whose final cluster challenges beginners. Classical and modern texts make it a productive search term for seeing the continuity and change of Armenian writing.", "ut-classical", "nayiri") }
    ],
    loanwordLayers: cited(
      "Loanwords reveal chronology and social routes. Iranian layers are deep and often feel entirely native; Greek and Syriac words cluster around early scholarship and Christianity; Arabic and Turkic contact reflects trade and political history; French influenced parts of Western Armenian urban culture; Russian supplied Soviet institutions and contemporary colloquial items in Armenia. English now enters technology and global youth culture. Speakers may replace a Russian-derived colloquialism with an Armenian coinage in formal writing, but choice is a register decision, not a simple contest between correct and corrupt.",
      "britannica",
      "wiki-language",
      "eanc"
    ),
    idioms: [
      { original: "աչքի լույս", transliteration: "ačkʿi luys", translation: "someone dearly cherished", note: "Literally ‘light of the eye’; it belongs to affectionate and literary language, so learn who can naturally say it to whom." },
      { original: "գլուխ հանել", transliteration: "glux hanel", translation: "to understand or manage something", note: "Literally ‘to bring out a head’; used when getting to the bottom of a task or figuring something out. The object commonly appears with an ablative form." },
      { original: "ձեռք մեկնել", transliteration: "jeṙkʿ meknel", translation: "to lend a hand; offer help", note: "Literally ‘to extend a hand.’ Learn the fixed Armenian verb rather than translating English ‘give a hand.’" },
      { original: "քիթը խոթել", transliteration: "kʿitʿë xotʿel", translation: "to stick one's nose into something", note: "Literally ‘to push the nose in.’ Colloquial and disapproving; articles and case forms change with the sentence." },
      { original: "սիրտ տալ", transliteration: "sirt tal", translation: "to encourage", note: "Literally ‘to give heart,’ a memorable example of an ordinary noun forming a meaning larger than its parts." }
    ],
    textGenres: [
      "fifth-century histories, translations, theology, and Classical Armenian liturgy",
      "medieval manuscript poetry, colophons, fables, and Cilician writing",
      "nineteenth- and twentieth-century Eastern and Western Armenian novels, newspapers, memoirs, and poetry",
      "diaspora newspapers, school magazines, podcasts, and children's literature",
      "contemporary Armenia-based fiction, journalism, film dialogue, rap, rock, and social media"
    ]
  },
  relationships: {
    overview: cited(
      "Armenian's nearest useful comparisons are not necessarily its genealogically nearest ones. As its own Indo-European branch, it shares ancient inheritance with Greek, Iranian, Slavic, Germanic, and other branches while remaining structurally distinct. Persian helps explain loan layers; Georgian illuminates regional contact; Classical Armenian opens the internal historical record. Relationship is therefore a three-part story of descent, contact, and literary continuity.",
      "glottolog",
      "britannica",
      "ut-classical"
    ),
    languages: relatedLanguages
  },
  culturalNotes: "Armenian literacy is often emotionally charged because the alphabet links sacred history, schooling, family, and survival. That importance should invite curiosity, not turn every spelling choice into a loyalty test. A Yerevan musician switching into Russian, a Beirut child learning Western Armenian through theater, an Iranian Armenian reading traditional orthography, and a church singer pronouncing grabar all inhabit different parts of the language. Ask speakers which Armenian they use and what they call it. Read across genre: Hovhannes Tumanyan's stories, Yeghishe Charents's poetry, Zabel Yesayan's prose, William Saroyan's multilingual Armenian-American world, contemporary journalism, stand-up, and music prevent ‘Armenian culture’ from shrinking into monuments and tragedy. The genocide is indispensable to understanding the rupture of Western Armenian communities, but Western Armenian is not a memorial object. Its future is being made in classrooms, camps, publishing projects, keyboards, podcasts, friendships, and new art.",
  resources: [
    { type: "other", title: "Discover Discomfort: Less-Common Language Learning Resources", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", level: "all", description: cited("A practical framework for building a study system when Armenian resources are scattered: one main course, audio, checked sentences, a teacher, and community feedback.", "dd-less-common") },
    { type: "course", title: "AGBU Armenian Virtual College", url: "https://www.avc-agbu.org/", level: "beginner", description: cited("Online language and culture study with multimedia materials. Confirm the standard and course calendar before committing.", "avc") },
    { type: "dictionary", title: "Nayiri.com", url: "https://www.nayiri.com/", level: "all", description: cited("Search numerous Armenian dictionaries from one interface; particularly valuable when moving between Eastern, Western, traditional, and reformed forms.", "nayiri") },
    { type: "corpus", title: "Eastern Armenian National Corpus", url: "https://eanc.net/", level: "intermediate", description: cited("Use concordance results to investigate collocations, registers, and historical change, then verify conversational suitability with a speaker.", "eanc") },
    { type: "course", title: "University of Texas Classical Armenian Online", url: "https://lrc.la.utexas.edu/eieol_toc/armol", level: "advanced", description: cited("A free text-centered route into grabar with lessons, grammar points, and lexical tools.", "ut-classical") },
    { type: "community", title: "Calouste Gulbenkian Foundation Armenian Communities", url: "https://gulbenkian.pt/en/armenians/", level: "all", description: cited("Follow Western Armenian language, education, cultural creativity, and revitalization initiatives across the diaspora.", "gulbenkian-western") },
    { type: "media", title: "Public Radio of Armenia", url: "https://en.armradio.am/", level: "intermediate", description: "News and audio from Armenia; use Armenian-language broadcasts for short transcription and shadowing practice." }
  ],
  relatedLanguages,
  phrases: [
    { original: "Բարև։", transliteration: "Barev.", translation: "Hello.", usageNote: "Common Eastern Armenian greeting; traditional spelling writes բարեւ." },
    { original: "Բարև ձեզ։", transliteration: "Barev dzez.", translation: "Hello (polite or plural).", literalMeaning: "Hello to you.", usageNote: "A safe greeting for strangers, elders, or more than one person." },
    { original: "Ինչպե՞ս եք։", transliteration: "Inčʿpes ekʿ?", translation: "How are you? (polite/plural)", usageNote: "Notice that the Armenian question mark sits over the stressed vowel inside the question word." },
    { original: "Լավ եմ, շնորհակալություն։", transliteration: "Lav em, šnorhakalutʿyun.", translation: "I'm well, thank you." },
    { original: "Խնդրում եմ։", transliteration: "Xndrum em.", translation: "Please; you're welcome.", literalMeaning: "I request.", usageNote: "Context distinguishes a request marker from the response to thanks." },
    { original: "Կներեք։", transliteration: "Knerekʿ.", translation: "Excuse me; sorry.", usageNote: "Polite/plural Eastern form useful for gaining attention as well as apologizing." },
    { original: "Ես հայերեն եմ սովորում։", transliteration: "Yes hayeren em sovorum.", translation: "I am learning Armenian." },
    { original: "Ես չեմ հասկանում։", transliteration: "Yes čʿem haskanum.", translation: "I don't understand." },
    { original: "Կարո՞ղ եք կրկնել։", transliteration: "Karoġ ekʿ krknel?", translation: "Can you repeat that? (polite/plural)" },
    { original: "Խնդրում եմ, ավելի դանդաղ։", transliteration: "Xndrum em, aveli dandaġ.", translation: "More slowly, please." },
    { original: "Սա ի՞նչ է նշանակում։", transliteration: "Sa inčʿ e nšanakum?", translation: "What does this mean?" },
    { original: "Որտե՞ղ է կայարանը։", transliteration: "Vorteġ e kayaranë?", translation: "Where is the station?" },
    { original: "Որքա՞ն արժե։", transliteration: "Orkʿan arže?", translation: "How much does it cost?" },
    { original: "Ցտեսություն։", transliteration: "Cʿtesutʿyun.", translation: "Goodbye.", usageNote: "Neutral standard farewell; among friends you will also hear borrowed informal forms in some communities." },
    { original: "Բարի գիշեր։", transliteration: "Bari gišer.", translation: "Good night." }
  ],
  sources: [
    { id: "dd-less-common", title: "Best Less-Common Language Learning Resources: What Actually Works", url: "https://discoverdiscomfort.com/less-common-language-learning-resources/", publisher: "Discover Discomfort", publishedAt: "2026-05-11", updatedAt: "2026-05-11", accessedAt: "2026-07-10" },
    { id: "wiki-language", title: "Armenian language", url: "https://en.wikipedia.org/wiki/Armenian_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-alphabet", title: "Armenian alphabet", url: "https://en.wikipedia.org/wiki/Armenian_alphabet", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-eastern", title: "Eastern Armenian", url: "https://en.wikipedia.org/wiki/Eastern_Armenian", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "wiki-western", title: "Western Armenian", url: "https://en.wikipedia.org/wiki/Western_Armenian", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "unicode", title: "The Unicode Standard, Chapter 7.6: Armenian", url: "https://unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/", publisher: "Unicode Consortium", updatedAt: "2025", accessedAt: "2026-07-10" },
    { id: "unicode-phonetic", title: "Armenian Phonetic Characters in Unicode", url: "https://www.unicode.org/L2/L2017/17032-armenian-add.pdf", publisher: "Unicode Consortium", publishedAt: "2017", accessedAt: "2026-07-10" },
    { id: "glottolog", title: "Eastern-Western Armenian", url: "https://glottolog.org/resource/languoid/id/east2768", publisher: "Glottolog 5.3", updatedAt: "2026", accessedAt: "2026-07-10" },
    { id: "ut-classical", title: "Classical Armenian Online", url: "https://lrc.la.utexas.edu/eieol_toc/armol", publisher: "Linguistics Research Center, University of Texas at Austin", accessedAt: "2026-07-10" },
    { id: "gulbenkian-western", title: "The Western Armenian Language", url: "https://gulbenkian.pt/armenian-communities/priorities-and-activities/the-western-armenian-language/", publisher: "Calouste Gulbenkian Foundation Armenian Communities Department", updatedAt: "2023-02-24", accessedAt: "2026-07-10" },
    { id: "eanc", title: "Eastern Armenian National Corpus: State of the Art and Perspectives", url: "https://aclanthology.org/2022.digitam-1.5/", publisher: "ACL Anthology", publishedAt: "2022", accessedAt: "2026-07-10" },
    { id: "nayiri", title: "Nayiri Armenian Dictionary Library", url: "https://www.nayiri.com/", publisher: "Nayiri.com", accessedAt: "2026-07-10" },
    { id: "avc", title: "Armenian Virtual College", url: "https://www.avc-agbu.org/", publisher: "Armenian General Benevolent Union", accessedAt: "2026-07-10" },
    { id: "britannica", title: "Armenian language", url: "https://www.britannica.com/topic/Armenian-language", publisher: "Encyclopaedia Britannica", accessedAt: "2026-07-10" }
  ],
  seo: {
    title: "Armenian Language Guide: Eastern, Western, Alphabet and Grammar",
    description: "A reader-focused guide to Armenian's alphabet, Eastern and Western standards, pronunciation, grammar, history, phrases, literature, communities, and learning resources."
  }
} satisfies LanguageGuide;
