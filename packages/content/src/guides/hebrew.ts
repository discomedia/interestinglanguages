import { cited } from "../citations.js";
import type { LanguageGuide } from "../types.js";

export const hebrewGuide: LanguageGuide = {
  slug: "hebrew",
  name: "Hebrew",
  autonym: "עברית",
  status: "published",
  publishedAt: "2026-07-09",
  summary: "Meet the Hebrew you hear in Israel today, then see how biblical, rabbinic, and medieval writing shaped its words, script, and cultural life.",
  family: "Afro-Asiatic, Semitic, Northwest Semitic",
  macroRegion: "Middle East and Jewish diaspora",
  primaryScript: "Hebrew alphabet",
  difficultyLabel: "Demanding",
  learnerHook: "A café sign and a biblical verse both use Hebrew letters, but you need different vocabulary and reading habits for each.",
  hero: {
    imageAlt: "Hebrew writing in contemporary printed and handwritten forms.",
    callToActionLabel: "Explore Hebrew"
  },
  classification: "Hebrew belongs to the Northwest Semitic group. People have written it for millennia and speak a modern form as an everyday language.",
  speakerCommunity: "Many Israelis grow up speaking Hebrew at home, while others learn it through school and work. Palestinian Arabic, Russian, Amharic, Yiddish, English, and French also belong to Israel's language life. Jewish communities elsewhere use Hebrew for worship, study, literature, education, and family life; those uses call for different kinds of fluency.",
  facts: [
    { label: "Family", value: "Afro-Asiatic → Semitic → Northwest Semitic" },
    { label: "Main modern centre", value: "Israel; also Jewish communities worldwide" },
    { label: "Writing", value: "Right-to-left Hebrew alphabet, usually without vowel points" },
    { label: "Key learner divide", value: "Modern spoken Hebrew versus older textual Hebrew" },
    { label: "Modern status", value: "Language of the State of Israel; Arabic has special status under the 2018 Basic Law" }
  ],
  learnerOverview: "Listen to אז יאללה, נדבר az yalla, nedaber, “Okay then, let's talk.” The speaker joins a Hebrew verb to יאללה yalla, a word borrowed from Arabic, and their tone can make the invitation warm or impatient. Written Hebrew asks for another skill: most everyday text leaves out vowel marks, so you use grammar and context to read it.\n\nWe'll start with contemporary Israeli speech and writing, then look at older Hebrew on its own terms. Learn the alphabet alongside complete phrases, and note who says them and when.",

  origins: {
    overview: cited("Hebrew belongs to the Canaanite group of Northwest Semitic languages, alongside ancient Phoenician and Moabite. Its biblical texts span centuries, and later Mishnaic Hebrew has words and grammar that earlier texts do not. After communities stopped passing Hebrew on as their main home language, Jews continued to read, write, pray, and correspond in it; modern speakers later made it an everyday first language again.", "hebrew-wikipedia", "academy-ages"),
    timeline: [
      {
        period: "First millennium BCE — Biblical and epigraphic Hebrew",
        event: cited("Inscriptions and biblical books preserve different ancient forms of Hebrew. Scribes first used Paleo-Hebrew and later the square letters that developed through Aramaic writing. Medieval Masoretes added vowel marks to biblical manuscripts to record a reading tradition.", "hebrew-wikipedia", "unicode")
      },
      {
        period: "Second Temple and rabbinic eras — Mishnaic Hebrew and Aramaic contact",
        event: cited("Jews continued to speak and write Hebrew while many also used Aramaic in daily life. The Mishnah records Hebrew words and sentence patterns that differ from biblical usage. Rabbinic literature often places Hebrew and Aramaic side by side.", "huji-department", "academy-dictionary")
      },
      {
        period: "Medieval to early modern — a transregional written language",
        event: cited("Poets, philosophers, rabbis, and translators wrote Hebrew in communities that also used Arabic, Yiddish, Judeo-Spanish, and other languages. Poets in medieval Iberia drew on biblical words and Arabic poetic forms. Their work gave later readers several literary styles to recognize.", "academy-dictionary", "academy-ages")
      },
      {
        period: "Nineteenth and twentieth centuries — vernacularization",
        event: cited("Jewish writers expanded secular Hebrew publishing before speakers made it an everyday language in Ottoman and Mandate Palestine. Eliezer Ben-Yehuda helped, but families, teachers, children, newspapers, and schools made the change possible. Zionist language policy also put pressure on Yiddish and other Jewish languages as Palestinian Arabic speakers faced conflict and dispossession.", "revival-wikipedia", "academy-history", "huji-emergence")
      }
    ],
    contactHistory: cited("Aramaic shaped ancient and rabbinic Hebrew, while Arabic influenced medieval Jewish writing and present-day Israeli speech. Immigrants brought Yiddish, Russian, Judeo-Spanish, and other languages into modern Hebrew; scholars still debate how deeply they changed its grammar. Hebrew and Palestinian Arabic also meet under unequal political conditions, so a borrowed word such as יאללה yalla, “come on,” has a social history as well as a dictionary meaning.", "dd-arabic", "huji-emergence", "oxford-borrowing"),
    standardization: cited("The Hebrew Language Committee emerged in the late nineteenth century, and the Academy of the Hebrew Language succeeded it in 1953. The Academy sets rules for spelling and terminology, while schools and editors teach a standard that everyday speakers also change. Israel's 2018 Nation-State Basic Law names Hebrew the state's language and gives Arabic special status; that legal wording has political consequences beyond the language classroom.", "academy-history", "knesset-law")
  },

  variants: {
    overview: cited("People speak contemporary Israeli Hebrew in many ways, shaped by their communities, other languages, ages, and situations. Some Mizrahi and Arabic-speaking Israelis pronounce consonants that many other speakers merge, while some Haredi communities also use Yiddish and distinct Hebrew reading traditions. Biblical, Mishnaic, and medieval Hebrew are earlier stages; today's religious reading traditions are living practices, not failed versions of a single accent.", "huji-department", "hebrew-wikipedia"),
    items: [
      { name: "Contemporary colloquial Israeli Hebrew", note: cited("You hear everyday Israeli Hebrew at home, at work, and online. It has small conversational words such as נו nu, and sounds that often differ from careful reading. Listen to real exchanges before guessing pronunciation from bare letters.", "dd-phrases", "academy-orthography") },
      { name: "Formal and edited Modern Hebrew", note: cited("News, law, and essays use forms that can sound stiff in a casual chat. Compare them with interviews and unscripted speech.", "modern-grammar-wikipedia", "academy-home") },
      { name: "Biblical Hebrew", note: cited("Biblical books contain older forms with grammar and words that differ from today's speech. People still quote them, but a biblical verb form can sound theatrical in a café.", "academy-ages") },
      { name: "Mishnaic and rabbinic Hebrew", note: cited("The Mishnah and later Jewish texts preserve forms that shaped modern vocabulary. Study them separately if you want to read rabbinic literature.", "academy-ages", "academy-dictionary") },
      { name: "Liturgical reading traditions", note: cited("Ashkenazi, Sephardi, Yemenite, Iraqi, Moroccan, and other communities maintain different sounds and melodies when reading sacred texts. Each tradition carries a community's history.", "hebrew-wikipedia", "academy-ages") },
      { name: "Community and second-language Hebrew", note: cited("People who learned Arabic, Russian, Amharic, and other languages at home also speak Hebrew. An accent or borrowed word can mark community and personal history rather than a learner's mistake.", "hebrew-wikipedia", "tau-education") }
    ]
  },

  pronunciation: {
    overview: cited("Many Israeli speakers use five vowel sounds: a, e, i, o, and u. They often pronounce ח and the unpointed form of כ alike, roughly like the ch in Scottish loch, and make ר near the back of the mouth. Some Mizrahi and Arabic-speaking Israelis keep sound differences that many speakers merge, especially around ע and ח.", "academy-orthography", "hebrew-wikipedia"),
    script: "Hebrew alphabet (right to left); examples include both normal unpointed spelling and selective vowel points",
    soundSystem: cited("A dot inside ב, כ, or פ marks the sounds b, k, or p in pointed text; without that dot, these letters can sound like v, kh, or f. The dot is called a dagesh, but everyday writing usually leaves it out. In conversation, short words run together, so listen to מה אתה רוצה? ma ata rotse?, “What do you want?”, as a phrase rather than three isolated words.", "academy-orthography", "unicode"),
    prosody: cited("Stress falls on the last syllable of many Hebrew words, but others stress the one before it. בירה bira, “beer,” and בירה bira, “capital,” share the same pointed spelling, so context tells them apart; they do not make a reliable stress pair. Copy short recorded exchanges with their pauses and small words, such as נו nu, before you try to imitate a whole speech.", "academy-orthography", "pealim-bira"),
    learnerTraps: [
      "Giving every written א, ע, ה, ו, or י a separate English-like sound; letters and vowels do not map one-to-one.",
      "Putting stress automatically on the first syllable or trusting English spellings such as Hanukkah and Chanukah to show pronunciation.",
      "Using an exaggerated pharyngeal ח while leaving the rest of one’s pronunciation unchanged; choose a coherent model and listen to varied speakers.",
      "Pausing between attached prefixes and the word: ובבית uvabayit, “and in the house,” is one phonological phrase, not three isolated items.",
      "Learning only carefully pointed forms and failing to recognize reductions, contractions, or borrowed sounds in ordinary speech."
    ],
    sampleWords: [
      { original: "שָׁלוֹם / שלום", transliteration: "shalóm", translation: "peace; hello", note: "Final stress. In real greetings שלום can be neutral or formal; היי hay is common too." },
      { original: "בִּירָה / בירה", transliteration: "bira", translation: "beer; capital city", note: "Pealim lists both meanings with the same pointed spelling. Read the surrounding sentence to tell them apart." },
      { original: "חָבֵר / חבר", transliteration: "khavér", translation: "male friend; member", note: "The first consonant is usually /χ/ in mainstream speech; feminine חברה khaverá means “female friend,” while the same unpointed letters can also be read khevrá, “company/society.”" },
      { original: "עִבְרִית / עברית", transliteration: "ivrít", translation: "Hebrew", note: "Mainstream pronunciation normally begins with a vowel; some traditional or Arabic-influenced pronunciations realize ע as a pharyngeal consonant." },
      { original: "רֶגַע / רגע", transliteration: "réga", translation: "moment; wait a second", note: "Usually penultimate stress. As an interjection it can politely or sharply interrupt, depending on intonation." },
      { original: "מַשֶּׁהוּ / משהו", transliteration: "máshehu", translation: "something", note: "Everyday speech often compresses it toward másheu, an example of why printed spelling alone cannot supply conversational pronunciation." }
    ]
  },

  writing: {
    overview: cited("Hebrew has 22 basic letters, and you read words from right to left. Most letters represent consonants, while ו and י can also help show vowels; linguists call this kind of script an abjad. Five letters change shape at the end of a word: ך ם ן ף ץ.\n\nAdult prose usually leaves out vowel marks, but children's books, dictionaries, and sacred texts often add them.", "unicode", "academy-orthography"),
    primaryScript: "Square Hebrew print and a separate modern cursive hand",
    romanization: cited("People spell Hebrew sounds in Latin letters several ways: ח may appear as h, ḥ, ch, or kh. This guide uses kh for its common Israeli sound and sh for שׁ. Keep audio with new words, since Latin spelling cannot show every difference you need for reading Hebrew.", "academy-transliteration"),
    spellingNorms: cited("The Academy sets separate rules for writing with and without vowel marks. Ordinary unpointed spelling often adds ו and י to give readers clues, but ספר can still mean séfer, “book,” or sapár, “barber.” Read whole phrases for context, and check how mixed Hebrew and English text displays on a phone because the two scripts run in opposite directions.", "academy-orthography", "unicode"),
    styleNotes: [
      "Learn the five final letter shapes with real words, then practice the separate cursive forms you will see in handwriting.",
      "Keep pointed and unpointed spellings together in your notes; test yourself on short unpointed sentences early.",
      "When a word is ambiguous, record a phrase, not an isolated spelling: את הספר et ha-séfer, “the book,” supplies grammar and context.",
      "Check Hebrew and English punctuation together on a narrow screen, where right-to-left display errors become obvious.",
      "Search names under several romanizations, and search Hebrew words in Hebrew script for substantially better dictionaries and media results."
    ]
  },

  grammar: {
    overview: cited("Hebrew often carries several pieces of meaning in one word: a verb can tell you who acted, while an adjective changes with its noun. Short words such as ו־ ve-, “and,” attach to what follows. Everyday sentences often put the doer before the verb and its object, as English does, but you still need to learn each word in context.", "modern-grammar-wikipedia", "dd-arabic"),
    typologicalProfile: cited("One Hebrew verb ending can tell you the person, number, and gender at once: כתבתם katavtem means “you (masculine plural) wrote.” Many words also share a set of consonants, called a root. The root כ־ת־ב k-t-v links כתב katav, “he wrote,” and מכתב mikhtav, “letter,” but the root alone will not tell you what a new word means.", "modern-grammar-wikipedia", "academy-dictionary"),
    morphology: cited("Hebrew nouns have grammatical gender, and adjectives change to match them: ילד קטן yeled katan means “small boy,” while ילדה קטנה yalda ktana means “small girl.” Most plurals end in -im or -ot, although those endings do not always reveal a noun's gender. Verbs follow seven broad patterns called binyanim, which change how a root relates to an action.", "modern-grammar-wikipedia"),
    syntax: cited("In a present-tense sentence, Hebrew often leaves out “am,” “is,” or “are”: היא סטודנטית hi studentit means “she is a student.” To say you have time, say יש לי זמן yesh li zman, literally “there is time to me.” Hebrew places את et before many definite objects, as in קראתי את הספר karati et ha-sefer, “I read the book.”", "modern-grammar-wikipedia"),
    advancedPainPoints: [
      "Recognizing weak-root verbs whose consonants disappear or change across a paradigm.",
      "Choosing gender and number agreement in speech before the end of a long noun phrase.",
      "Reading unpointed words whose possible vowels correspond to different grammatical forms.",
      "Separating productive modern syntax from prestigious biblical echoes and prescriptive preferences.",
      "Managing formal number agreement, especially the masculine-feminine reversal in cardinal numerals."
    ],
    topics: [
      {
        title: "Roots, patterns, and binyanim",
        body: cited("A binyan is a family of verb forms, not a tense. The root ל־מ־ד l-m-d gives למד lamad, “he learned,” and לימד limed, “he taught.” Learn each verb with its infinitive, present and past forms, and a complete sentence instead of guessing its meaning from the root.", "modern-grammar-wikipedia", "dd-resources"),
        example: "היא למדה עברית באוניברסיטה, ועכשיו היא מלמדת ילדים.",
        exampleTranslation: "Hi lamda ivrit ba-universita, ve-akhshav hi melamedet yeladim. “She studied Hebrew at university, and now she teaches children.” The two related verbs use different binyanim and feminine singular forms."
      },
      {
        title: "Present tense, gender, and the missing copula",
        body: cited("Present-tense verbs change for gender and number, but not for person: אני כותב ani kotev and אני כותבת ani kotevet both mean “I write.” In the present, Hebrew also puts a subject and description together without “is” or “are.” Forms of היה haya, “be,” appear when you move that description into the past or future.", "modern-grammar-wikipedia"),
        example: "הספר הזה מעניין, אבל הדוגמאות קשות.",
        exampleTranslation: "Ha-sefer ha-ze me'anyen, aval ha-dugma'ot kashot. “This book is interesting, but the examples are difficult.” There is no written “is/are”; both adjectives agree with their nouns."
      },
      {
        title: "Definiteness and the direct-object marker את",
        body: cited("Place את et before many direct objects that name a specific person or thing. Compare קראתי ספר karati sefer, “I read a book,” with קראתי את הספר karati et ha-sefer, “I read the book.” English has no separate word for this marker, and unpointed את can also be read at, “you” when speaking to a woman.", "modern-grammar-wikipedia"),
        example: "ראינו את הסרט החדש אתמול.",
        exampleTranslation: "Ra'inu et ha-séret he-khadásh etmol. “We saw the new film yesterday.” Both the noun and following adjective are definite, while את marks the definite object phrase."
      },
      {
        title: "Possession: של and יש",
        body: cited("For “my book,” say הספר שלי ha-sefer sheli, putting שלי sheli after the noun. For “I have,” use יש לי yesh li; for “we don't have,” use אין לנו en lanu. Practice each pattern with things you actually own or need.", "modern-grammar-wikipedia"),
        example: "אין לי מכונית, אבל יש לי אופניים.",
        exampleTranslation: "En li mekhonit, aval yesh li ofanáyim. “I don’t have a car, but I have a bicycle.” Literally, “there isn’t to me a car, but there is to me a bicycle.”"
      },
      {
        title: "Smikhut: the construct chain",
        body: cited("Hebrew can join two nouns directly to express a relationship; grammarians call this smikhut, or a construct chain. בית ספר bet sefer means “school,” while בית הספר bet ha-sefer means “the school.” Notice that the article ה־ ha- goes before the second noun in this chain.", "modern-grammar-wikipedia"),
        example: "מורי בית הספר נפגשו בחדר המורים.",
        exampleTranslation: "Moréi bet ha-séfer nifgeshú be-khéder ha-morím. “The school’s teachers met in the staff room.” The sentence contains two construct chains, one with a plural construct form מורֵי morei."
      },
      {
        title: "Prepositions and pronominal suffixes",
        body: cited("Small relationship words often take special forms with pronouns: איתי iti means “with me,” while איתה ita means “with her.” Learn these as whole words. A word-for-word English pattern such as *עם אני, “with I,” will not replace איתי.", "modern-grammar-wikipedia"),
        example: "דיברתי איתה על זה, והיא הסכימה איתי.",
        exampleTranslation: "Dibárti itá al ze, ve-hi hiskíma iti. “I spoke with her about it, and she agreed with me.” Hebrew distinguishes איתה “with her” from איתי “with me” inside the preposition."
      }
    ]
  },

  whereSpoken: {
    overview: cited("Many people grow up speaking Modern Hebrew in Israel, where it also dominates state services, Jewish-majority schools, and national media. Palestinian Arabic and many immigrant and heritage languages share that public life, though they do not have the same legal or social position. Outside Israel, families, schools, synagogues, and universities use Hebrew for different purposes, from contemporary conversation to prayer and historical study.", "knesset-law", "hebrew-wikipedia", "tau-education"),
    regions: [
      { place: "Israel", note: cited("The main environment for native contemporary Hebrew, with significant social variation and widespread multilingualism. Learners encounter Hebrew on transport, television, technology, education, religion, and bureaucracy, but Arabic remains central to many citizens and to the region.", "knesset-law") },
      { place: "North America, Europe, Australia, and other diaspora communities", note: cited("People use Hebrew in community education, worship, cultural events, publishing, and family networks. Israeli emigrant families may also speak contemporary Hebrew at home, while a learner who knows prayers may need separate practice to hold an everyday conversation.", "hebrew-wikipedia", "academy-ages") },
      { place: "Universities and seminaries worldwide", note: cited("Universities offer different kinds of Hebrew study, including contemporary conversation and reading biblical texts. Check which period and skill a course actually teaches before you enroll.", "huji-department", "illinois-hebrew-catalog") },
      { place: "Digital media", note: cited("Israeli news, television, podcasts, and online writing let you hear and read different contemporary styles from outside Israel. Compare a broadcaster's prepared script with an unscripted interview before copying either one.", "kan-media", "dd-resources") }
    ],
    mapImageAlt: "Israel and worldwide Jewish communities where Hebrew is spoken, studied, or used in communal life."
  },

  difficulty: {
    label: "Demanding",
    overview: "If you know English, Hebrew's right-to-left alphabet can feel like the first obstacle, but you can learn its letter shapes one by one. Reading ordinary text without vowels takes longer because you must recognize words and sentence patterns together. The language also asks you to track gender agreement and changing verb forms, while short present-tense sentences and many recorded lessons give you practical ways to start.",
    easierAspects: [
      "Only five core vowels in mainstream Israeli pronunciation.",
      "No productive noun cases and a broadly familiar subject–verb–object baseline.",
      "Roots and recurring patterns make vocabulary families increasingly visible.",
      "A large supply of courses, dictionaries, subtitled media, teachers, and community contexts."
    ],
    hardAspects: [
      "Ordinary text omits most vowels, producing many possible readings for beginners.",
      "Verb paradigms change around weak consonants and do not map neatly onto English tense labels.",
      "Gender and number agreement extend through verbs, adjectives, pronouns, and numerals.",
      "Older textual layers are accessible enough to tempt misuse but different enough to require separate study.",
      "Colloquial speech compresses words and uses particles rarely explained well in formal textbooks."
    ],
    plateauRisks: [
      "Remaining dependent on vowel points or romanization instead of building prediction from context.",
      "Collecting roots without learning actual sentences, prepositions, and register.",
      "Understanding news prose but not turn-taking, slang, reductions, and humour in conversation.",
      "Treating native variation as noise and listening only to one polished instructional voice."
    ],
    workload: cited("Start with the alphabet and short exchanges you might actually use. Discover Discomfort's month of practicing ten personal sentences a day shows how speaking with feedback can build confidence; add graded reading and daily listening if you want to read unpointed text. Once you can follow a simple conversation, choose a subject you care about and collect full phrases from its interviews, stories, or broadcasts.", "dd-30days", "dd-resources")
  },

  advancedLearning: {
    strategy: cited("Save each new word with a short recording and a sentence, especially when its unpointed spelling has several readings. Practice verbs through real sentences, then ask a teacher or conversation partner to correct a short account of your week. Compare everyday speech with edited news so you learn when each style fits.", "dd-30days", "dd-resources"),
    mediaPractice: cited("Replay a brief interview or scene until you hear small responses such as ברור barur, “sure,” and חבל khaval, “what a pity.” Then compare what you heard with Hebrew captions; translated subtitles may paraphrase. Ask a teacher who would use a phrase and whether its tone sounds warm, abrupt, or joking.", "dd-phrases", "dd-resources"),
    dictionariesAndCorpora: cited("Pealim shows verb forms and roots, while the Academy's Ma'agarim database lets you check older texts. A modern dictionary helps with current meanings, but a historical example may sound strange in everyday speech. Search a full phrase in recent news or captions before using it yourself.", "academy-dictionary", "academy-home", "dd-resources"),
    resources: [
      { type: "other", title: "Discover Discomfort: Our Favourite Free and Cheap Hebrew Resources", url: "https://discoverdiscomfort.com/hebrew-learning-resources-free-cheap/", level: "all", description: cited("A field-tested survey of courses, teachers, conjugation tools, books, and audio. Use it to assemble a mixed toolkit rather than expecting one app to teach every skill.", "dd-resources") },
      { type: "dictionary", title: "Pealim", url: "https://www.pealim.com/", level: "all", description: cited("Search modern Hebrew words by form or root and open full verb tables with pointed spelling. Use the audio when the letters leave the pronunciation unclear.", "pealim-home") },
      { type: "corpus", title: "Ma’agarim Historical Dictionary Project", url: "https://maagarim.hebrew-academy.org.il/", level: "advanced", description: cited("Search words, roots, and texts across periods, replacing vague “biblical” or “rabbinic” labels with evidence.", "academy-dictionary") },
      { type: "course", title: "Colloquial Hebrew by Zippi Lyttleton", url: "https://www.routledge.com/Colloquial-Hebrew-The-Complete-Course-for-Beginners/Lyttleton/p/book/9780415475273", level: "beginner", description: cited("Routledge's beginner course supplies lessons and recorded dialogues for contemporary speech. Add current interviews when you want to hear how usage has changed since publication.", "routledge-colloquial") },
      { type: "podcast", title: "Streetwise Hebrew", url: "https://tlv1.fm/podcasts/streetwise-hebrew-show/", level: "intermediate", description: cited("Guy Sharett's short episodes explain modern words and slang through examples. Recent episodes show that the feed is still active.", "streetwise") },
      { type: "media", title: "כאן — Kan public media", url: "https://www.kan.org.il/", level: "intermediate", description: cited("Browse news, radio, television, and other Hebrew programs. Compare prepared and conversational speech across formats.", "kan-media") }
    ]
  },

  wordsAndTexts: {
    overview: cited("A Hebrew word might first appear in a biblical book, a rabbinic text, or a modern advertisement. Speakers can use older wording for solemn effect or for a joke, while everyday words such as דווקא davka change meaning with context. Learn what a phrase does in a real exchange before trying to explain it through its oldest known form.", "academy-dictionary", "dd-phrases"),
    notableWords: [
      { term: "שלום", transliteration: "shalom", meaning: "peace; hello", note: cited("Built on the Semitic root associated with wholeness and peace, שלום carries religious and political resonance but is also an ordinary greeting. It is less universal as a casual goodbye than phrasebooks imply; להתראות lehitra'ot is explicit “see you.”", "dd-arabic", "dd-phrases") },
      { term: "דווקא", transliteration: "davka", meaning: "precisely; actually; contrary to expectation", note: cited("דווקא davka can mean “precisely” or “actually,” depending on the sentence. Compare several recordings before settling on one English gloss.", "pealim-davka") },
      { term: "חבל", transliteration: "khaval", meaning: "what a pity; what a waste", note: cited("חבל khaval can express regret: חבל! means “What a pity!” The same unpointed letters can also be read khevel, “rope,” so the vowels and context matter.", "pealim-chaval", "pealim-chevel") },
      { term: "פרגון", transliteration: "firgun", meaning: "pleasure in someone else's success", note: cited("This noun came through Yiddish and has a related Hebrew verb, לפרגן lefargen. People use it for generous praise or support without envy.", "wiktionary-firgun") },
      { term: "סבבה", transliteration: "sababa", meaning: "great; okay; cool", note: cited("Borrowed through Arabic and now emblematic casual Israeli Hebrew. It can enthusiastically praise something or simply acknowledge a plan. Knowing its Arabic history should lead toward Arabic learning and living speakers, not a story that Hebrew slang appeared from nowhere.", "dd-arabic", "dd-phrases") },
      { term: "תכלס", transliteration: "takhles", meaning: "practically; bottom line; in fact", note: cited("The word reached Israeli Hebrew through a Yiddish pronunciation of תכלית takhlit, “purpose.” In conversation, תכלס asks for the practical point: תכלס, מה עושים? means “So, what are we doing?”", "milog-takhles") },
      { term: "יאללה", transliteration: "yalla", meaning: "come on; let’s go; okay then", note: cited("Hebrew speakers borrowed יאללה yalla from Arabic. They use it to move a plan along or to end an exchange, depending on tone.", "dd-phrases") }
    ],
    loanwordLayers: cited("Hebrew took words from Aramaic, Arabic, Yiddish, English, and other languages at different times. Modern speakers use Arabic-origin יאללה yalla and Yiddish-origin תכלס takhles alongside older Hebrew words. That exchange is unequal in Israel and Palestine: state institutions give Hebrew more power, while Arabic speakers also use Hebrew terms in workplaces and public services.", "dd-arabic", "huji-emergence", "oxford-borrowing"),
    idioms: [
      { original: "יהיה בסדר", transliteration: "yihye beséder", translation: "It’ll be okay; it’ll work out.", note: "Literally “it will be in order.” Reassuring in one voice, dismissive in another; a compact window onto Israeli improvisational confidence and its critics." },
      { original: "חבל על הזמן", transliteration: "khaval al ha-zman", translation: "Amazing; out of this world (colloquial), or literally a waste of time.", note: "Context reverses the apparent evaluation. הוא שף חבל על הזמן hu shef khaval al ha-zman can enthusiastically mean “He’s an incredible chef.”" },
      { original: "לא דובים ולא יער", transliteration: "lo dubim ve-lo ya'ar", translation: "There’s nothing to it; the whole story is invented.", note: "Literally “neither bears nor forest.” Used to deny a rumour or supposed danger completely: not only are there no bears, there is not even a forest." },
      { original: "על הפנים", transliteration: "al ha-panim", translation: "Terrible; in awful condition.", note: "Literally “on the face.” הסרט היה על הפנים ha-seret haya al ha-panim means “the film was awful.” It is common and informal, not a description of physical position." },
      { original: "יצא המרצע מן השק", transliteration: "yatsa ha-martsea min ha-sak", translation: "The hidden truth or motive came out.", note: "Literally “the awl came out of the sack.” A literary proverb suited to commentary more than casual beginner conversation; it shows how older imagery remains available in modern prose." }
    ],
    textGenres: [
      "WhatsApp messages, memes, stand-up, and unscripted conversation",
      "Newspapers, public broadcasting, essays, and political commentary",
      "Modern fiction, poetry, children’s literature, and graphic novels",
      "Biblical, rabbinic, liturgical, and medieval texts in distinct study traditions",
      "Songs from piyyut and folk repertoires to rock, hip-hop, pop, and Mizrahi music",
      "Law, bureaucracy, academic prose, technology, and advertising"
    ]
  },

  relationships: {
    overview: cited("Hebrew and Aramaic belong to the Northwest Semitic group; Arabic is a more distant Semitic relative. They share some roots and word-building patterns, but speaking one does not mean you can understand the others. Yiddish and Judeo-Spanish come from different language families and have long histories of contact with Hebrew.", "dd-arabic", "hebrew-wikipedia"),
    languages: [
      { name: "Arabic", slug: "arabic", relationship: "Semitic relative and major contact language", explanation: cited("Arabic shares word-building patterns and some older roots with Hebrew: שלום shalom and سلام salam both concern peace. Speakers cannot rely on those similarities for easy conversation. Today the two languages meet in schools, workplaces, and public life under unequal conditions.", "dd-arabic", "tau-education") },
      { name: "Aramaic", relationship: "Northwest Semitic relative and long-term textual neighbour", explanation: cited("Aramaic is a close Semitic relative that appears beside Hebrew in rabbinic literature. Centuries of shared texts and speech brought Aramaic words into Hebrew.", "academy-ages") },
      { name: "Yiddish", relationship: "Germanic Jewish language with two-way contact", explanation: cited("Yiddish has a Hebrew-Aramaic layer that speakers pronounce through Yiddish sound patterns. People who shifted to modern Hebrew also brought Yiddish words and habits into it.", "oxford-yiddish", "huji-emergence") },
      { name: "Ladino / Judeo-Spanish", relationship: "Romance Jewish language and contact source", explanation: cited("Sephardi communities used Judeo-Spanish alongside Hebrew and wrote much of it in Hebrew letters. Its songs and texts belong to a multilingual Jewish history, while its basic language structure comes from Spanish.", "jewish-languages-ladino") },
      { name: "Amharic", slug: "amharic", relationship: "More distant Semitic relative in modern community contact", explanation: cited("Amharic is a more distant Semitic relative, so its speakers cannot understand Hebrew on that basis alone. Ethiopian Israeli families bring the two languages into contact in education and home life.", "ethiopian-israeli-study") }
    ]
  },
  culturalNotes: "People use Hebrew to raise children, make art, worship, study, and argue about public life. Jewish reading traditions, secular comedy, and new writing all add to its cultural life. In Israel, Hebrew's state power also shapes how Palestinian Arabic speakers and speakers of other Jewish languages encounter it, so listen to those communities on their own terms.",

  resources: [
    { type: "other", title: "Discover Discomfort: Hebrew and Arabic Similarities and Differences", url: "https://discoverdiscomfort.com/arabic-hebrew-similarities-differences/", level: "all", description: cited("A side-by-side introduction to scripts, roots, and familiar words. Its broad claims about Arabic varieties and pronunciation need checking against specialist sources; the two languages do not make their speakers mutually intelligible.", "dd-arabic") },
    { type: "other", title: "Discover Discomfort: 30 Days of Hebrew, Ten Sentences a Day", url: "https://discoverdiscomfort.com/30-days-month-hebrew-ten-sentences/", level: "beginner", description: cited("The writer describes one month of practicing ten personal sentences a day and recording his speech. Try the method for speaking practice, then add reading and sustained listening.", "dd-30days") },
    { type: "other", title: "Discover Discomfort: Hebrew Words and Phrases to Sound Local", url: "https://discoverdiscomfort.com/hebrew-phrases-words-to-sound-local/", level: "intermediate", description: cited("A compact collection of high-frequency colloquial responses and discourse words. Treat it as a listening checklist: intonation, relationship, and timing determine whether a phrase sounds friendly, ironic, abrupt, or forced.", "dd-phrases") },
    { type: "other", title: "Discover Discomfort: History of the Hebrew Language", url: "https://discoverdiscomfort.com/history-of-hebrew-language/", level: "all", description: cited("A personal overview of Hebrew's history. Its opening says it is a non-scholarly summary, so check dates and historical claims against the Hebrew Academy's detailed timeline.", "dd-history", "academy-ages") },
    { type: "dictionary", title: "Academy of the Hebrew Language terminology database", url: "https://terms.hebrew-academy.org.il/", level: "advanced", description: cited("Search Academy terminology for technical fields and compare it with the wording you hear in conversation. The database tells you what the Academy recommends; it does not show how often speakers use each term.", "academy-terms") },
    { type: "other", title: "Academy of the Hebrew Language: Orthography", url: "https://eng.hebrew-academy.org.il/our-work/language-decisions/orthography/", level: "intermediate", description: cited("A clear English overview of vocalized and unvocalized spelling, the role of nikkud, and the relation between traditional and contemporary pronunciation. Follow its links into the full Hebrew rules as literacy grows.", "academy-orthography") },
    { type: "media", title: "Project Ben-Yehuda", url: "https://benyehuda.org/", level: "advanced", description: cited("This free digital library holds Hebrew literature, essays, and translations from different periods. Choose an author and period before reading, since a historical text may differ sharply from everyday speech.", "ben-yehuda") }
  ],
  relatedLanguages: [
    { name: "Arabic", slug: "arabic", relationship: "Semitic relative and major contact language", explanation: cited("Arabic and Hebrew share deep Semitic architecture and striking cognates while remaining distinct languages shaped by different histories. Modern contact adds borrowing in both directions under unequal conditions.", "dd-arabic") },
    { name: "Aramaic", relationship: "Northwest Semitic relative", explanation: cited("A close relative that also appears in Jewish texts and shaped Hebrew vocabulary.", "academy-ages") },
    { name: "Amharic", slug: "amharic", relationship: "Semitic relative", explanation: cited("A more distant relative that meets Hebrew in Ethiopian Israeli family and school life.", "ethiopian-israeli-study") }
  ],

  phrases: [
    { original: "שלום, מה נשמע?", transliteration: "Shalom, ma nishma?", translation: "Hi, how’s it going?", literalMeaning: "Hello, what is heard?", usageNote: "A common neutral greeting. מה קורה? ma kore? is more casual. No gender change is needed here." },
    { original: "תודה רבה.", transliteration: "Toda raba.", translation: "Thank you very much.", usageNote: "רבה raba agrees historically with feminine תודה toda. Plain תודה is enough in most situations." },
    { original: "בבקשה.", transliteration: "Bevakasha.", translation: "Please; you’re welcome; here you are.", usageNote: "Its function comes from position: before a request it is “please,” after thanks it is “you’re welcome.”" },
    { original: "סליחה, לא הבנתי.", transliteration: "Slikha, lo hevanti.", translation: "Sorry/excuse me, I didn’t understand.", usageNote: "הבנתי hevanti is the same for any speaker in the past first-person singular." },
    { original: "אפשר לדבר יותר לאט?", transliteration: "Efshar ledaber yoter le'at?", translation: "Could you speak more slowly?", literalMeaning: "Is it possible to speak more slowly?", usageNote: "The impersonal אפשר avoids choosing a gendered imperative and sounds natural." },
    { original: "אפשר להגיד את זה שוב?", transliteration: "Efshar lehagid et ze shuv?", translation: "Could you say that again?", usageNote: "A practical repair phrase. את marks זה “this/that” as the definite direct object." },
    { original: "מה פירוש המילה הזאת?", transliteration: "Ma perush ha-mila ha-zot?", translation: "What does this word mean?", literalMeaning: "What is the meaning of this word?", usageNote: "המילה הזאת ha-mila ha-zot shows feminine agreement and double definiteness." },
    { original: "אני לומד עברית. / אני לומדת עברית.", transliteration: "Ani lomed ivrit. / Ani lomedet ivrit.", translation: "I’m learning Hebrew.", usageNote: "Use לומד with masculine agreement and לומדת with feminine agreement. The speaker chooses the form that fits how they refer to themself." },
    { original: "אני רוצה קפה.", transliteration: "Ani rotse kafe. / Ani rotsa kafe.", translation: "I’d like coffee.", usageNote: "The written sentence is the same for a speaker using masculine rotse or feminine rotsa. Vowel points show the difference: רוֹצֶה / רוֹצָה." },
    { original: "אין בעיה.", transliteration: "En be'aya.", translation: "No problem.", literalMeaning: "There is no problem.", usageNote: "An extremely common reassurance or acceptance. Tone can make it genuinely helpful or mildly impatient." },
    { original: "יאללה, להתראות!", transliteration: "Yalla, lehitra'ot!", translation: "Okay then, see you!", usageNote: "Casual leave-taking combining an Arabic-origin discourse marker with the standard Hebrew “see you.”" }
  ],

  sources: [
    { id: "dd-resources", title: "Our Favourite Free and Cheap Hebrew Resources", url: "https://discoverdiscomfort.com/hebrew-learning-resources-free-cheap/", publisher: "Discover Discomfort", publishedAt: "2019-04-10", updatedAt: "2022-02-08", accessedAt: "2026-09-27" },
    { id: "dd-30days", title: "30 Days of Hebrew — Ten Sentences a Day", url: "https://discoverdiscomfort.com/30-days-month-hebrew-ten-sentences/", publisher: "Discover Discomfort", publishedAt: "2019-04-27", updatedAt: "2022-06-02", accessedAt: "2026-09-27" },
    { id: "dd-arabic", title: "Hebrew and Arabic — Similarities and Differences", url: "https://discoverdiscomfort.com/arabic-hebrew-similarities-differences/", publisher: "Discover Discomfort", publishedAt: "2019-03-22", updatedAt: "2022-06-02", accessedAt: "2026-09-27" },
    { id: "dd-phrases", title: "Hebrew Words and Phrases to Sound Local", url: "https://discoverdiscomfort.com/hebrew-phrases-words-to-sound-local/", publisher: "Discover Discomfort", publishedAt: "2019-05-07", updatedAt: "2021-09-16", accessedAt: "2026-09-27" },
    { id: "dd-history", title: "History of the Hebrew Language", url: "https://discoverdiscomfort.com/history-of-hebrew-language/", publisher: "Discover Discomfort", publishedAt: "2019-04-15", updatedAt: "2020-11-03", accessedAt: "2026-09-27" },
    { id: "hebrew-wikipedia", title: "Hebrew language", url: "https://en.wikipedia.org/wiki/Hebrew_language", publisher: "Wikipedia", accessedAt: "2026-09-27" },
    { id: "revival-wikipedia", title: "Revival of the Hebrew language", url: "https://en.wikipedia.org/wiki/Revival_of_the_Hebrew_language", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "modern-grammar-wikipedia", title: "Modern Hebrew grammar", url: "https://en.wikipedia.org/wiki/Modern_Hebrew_grammar", publisher: "Wikipedia", accessedAt: "2026-07-10" },
    { id: "academy-home", title: "The Academy of the Hebrew Language", url: "https://eng.hebrew-academy.org.il/", publisher: "Academy of the Hebrew Language", accessedAt: "2026-07-10" },
    { id: "academy-terms", title: "Academy terminology database", url: "https://terms.hebrew-academy.org.il/", publisher: "Academy of the Hebrew Language", accessedAt: "2026-09-27" },
    { id: "academy-history", title: "Our History", url: "https://eng.hebrew-academy.org.il/about-us/our-history/", publisher: "Academy of the Hebrew Language", accessedAt: "2026-09-27" },
    { id: "academy-ages", title: "Hebrew through the Ages", url: "https://eng.hebrew-academy.org.il/overview-of-hebrew/hebrew-through-the-ages/", publisher: "Academy of the Hebrew Language", accessedAt: "2026-09-27" },
    { id: "academy-orthography", title: "Orthography", url: "https://eng.hebrew-academy.org.il/our-work/language-decisions/orthography/", publisher: "Academy of the Hebrew Language", publishedAt: "2024-01-24", accessedAt: "2026-09-27" },
    { id: "academy-transliteration", title: "Transliteration", url: "https://eng.hebrew-academy.org.il/our-work/language-decisions/transliteration/", publisher: "Academy of the Hebrew Language", publishedAt: "2024-01-24", accessedAt: "2026-07-10" },
    { id: "academy-dictionary", title: "Historical Dictionary Project", url: "https://eng.hebrew-academy.org.il/our-work/historical-dictionary-project/", publisher: "Academy of the Hebrew Language", accessedAt: "2026-09-27" },
    { id: "pealim-bira", title: "Pealim dictionary entries for בירה", url: "https://www.pealim.com/search/?from-nav=1&q=%D7%91%D7%99%D7%A8%D7%94", publisher: "Pealim", accessedAt: "2026-09-27" },
    { id: "pealim-home", title: "Hebrew Verb Tables", url: "https://www.pealim.com/", publisher: "Pealim", accessedAt: "2026-09-27" },
    { id: "pealim-davka", title: "דווקא — dictionary entry", url: "https://www.pealim.com/dict/4641-davka/", publisher: "Pealim", accessedAt: "2026-09-27" },
    { id: "pealim-chaval", title: "חבל — what a pity", url: "https://www.pealim.com/dict/5334-chaval/", publisher: "Pealim", accessedAt: "2026-09-27" },
    { id: "pealim-chevel", title: "חבל — rope", url: "https://www.pealim.com/dict/8532-chevel/", publisher: "Pealim", accessedAt: "2026-09-27" },
    { id: "wiktionary-firgun", title: "פרגון", url: "https://he.wiktionary.org/wiki/%D7%A4%D7%A8%D7%92%D7%95%D7%9F", publisher: "Wiktionary", accessedAt: "2026-09-27" },
    { id: "milog-takhles", title: "תכלס", url: "https://milog.co.il/%D7%AA%D7%9B%D7%9C%27%D7%A1", publisher: "Milog", accessedAt: "2026-09-27" },
    { id: "unicode", title: "The Unicode Standard, Chapter 9: Hebrew", url: "https://www.unicode.org/versions/Unicode16.0.0/core-spec/chapter-9/", publisher: "Unicode Consortium", updatedAt: "2024-09-10", accessedAt: "2026-07-10" },
    { id: "huji-department", title: "Department of Hebrew Language — About", url: "https://en.hebrew-language.huji.ac.il/about", publisher: "Hebrew University of Jerusalem", accessedAt: "2026-07-10" },
    { id: "huji-emergence", title: "The Emergence of Modern Hebrew as a Case-Study of Linguistic Discontinuity", url: "https://llcc.huji.ac.il/erc-0", publisher: "Hebrew University of Jerusalem", accessedAt: "2026-07-10" },
    { id: "knesset-law", title: "Basic-Law: Israel — The Nation State of the Jewish People", url: "https://main.knesset.gov.il/EN/activity/documents/BasicLawsPDF/BasicLawNationState.pdf", publisher: "The Knesset", publishedAt: "2018-07-19", accessedAt: "2026-09-27" },
    { id: "tau-education", title: "Asymmetries and inequalities in the teaching of Arabic and Hebrew in the Israeli educational system", url: "https://cris.tau.ac.il/en/publications/asymmetries-and-inequalities-in-the-teaching-of-arabic-and-hebrew-2/", publisher: "Tel Aviv University", publishedAt: "2016", accessedAt: "2026-09-27" },
    { id: "oxford-borrowing", title: "Hebrew borrowings in the Arabic speech of Palestinians in three refugee camps in the West Bank", url: "https://ora.ox.ac.uk/objects/uuid%3Af3ffd7ca-b907-4e74-b585-605d09be386f", publisher: "University of Oxford", accessedAt: "2026-09-27" },
    { id: "illinois-hebrew-catalog", title: "Hebrew, Modern and Classical — 2026–2027 Course Catalog", url: "https://catalog.illinois.edu/courses-of-instruction/hebr/", publisher: "University of Illinois Urbana-Champaign", accessedAt: "2026-09-27" },
    { id: "kan-media", title: "Kan public media", url: "https://www.kan.org.il/", publisher: "Kan Israeli Public Broadcasting", accessedAt: "2026-09-27" },
    { id: "oxford-yiddish", title: "The Hebrew Component", url: "https://academic.oup.com/book/26848/chapter-abstract/195880360", publisher: "Oxford University Press", publishedAt: "2015", accessedAt: "2026-09-27" },
    { id: "jewish-languages-ladino", title: "Judeo-Spanish/Judezmo/Ladino", url: "https://www.jewishlanguages.org/judeo-spanish-judezmo-ladino", publisher: "Jewish Languages", accessedAt: "2026-09-27" },
    { id: "ethiopian-israeli-study", title: "Examining the connection between identity and Hebrew linguistic skills among monolingual and bilingual preschool children of immigrants from Ethiopia and FSU", url: "https://education.biu.ac.il/en/node/12618", publisher: "Bar-Ilan University", accessedAt: "2026-09-27" },
    { id: "routledge-colloquial", title: "Colloquial Hebrew: The Complete Course for Beginners", url: "https://www.routledge.com/Colloquial-Hebrew-The-Complete-Course-for-Beginners/Lyttleton/p/book/9780415475273", publisher: "Routledge", accessedAt: "2026-09-27" },
    { id: "streetwise", title: "Streetwise Hebrew", url: "https://tlv1.fm/podcasts/streetwise-hebrew-show/", publisher: "TLV1", accessedAt: "2026-09-27" },
    { id: "ben-yehuda", title: "About Project Ben-Yehuda", url: "https://benyehuda.org/page/english", publisher: "Project Ben-Yehuda", accessedAt: "2026-09-27" }
  ],
  seo: {
    title: "Hebrew Language Guide: Modern Speech, Script, Grammar, and History",
    description: "Learn how Hebrew works across modern Israeli speech and its biblical, rabbinic, and medieval layers, with accurate examples, pronunciation, grammar, cultural context, resources, and sources."
  }
};
