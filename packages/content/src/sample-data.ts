import type { LanguageGuide } from "./types.js";

export const swahiliGuide: LanguageGuide = {
  slug: "swahili",
  name: "Swahili",
  autonym: "Kiswahili",
  status: "published",
  publishedAt: "2026-07-08",
  summary:
    "A learner-oriented guide to Swahili pronunciation, grammar, where it is spoken, useful resources, related languages, and starter phrases.",
  hero: {
    imageAlt: "Illustrated East African coastal scene with a dhow near historic buildings.",
    callToActionLabel: "Start learning Swahili"
  },
  learnerOverview:
    "Swahili is a widely spoken East African language with a regular sound system, a Latin-based writing system, and a grammar that rewards pattern recognition. Learners often notice that pronunciation is approachable, verbs are systematic, and noun classes become easier once they are treated as a core organizing feature rather than as exceptions.",
  pronunciation: {
    overview:
      "Swahili spelling is close to pronunciation. Most letters have stable values, stress usually falls on the second-to-last syllable, and long vowel contrasts are not phonemic in standard learner materials.",
    script: "Latin alphabet with a few digraphs and apostrophe-marked combinations in some teaching materials.",
    vowels: "a, e, i, o, u. Each vowel is pronounced clearly and consistently.",
    consonants:
      "Most consonants are familiar to English speakers. Sounds such as ng' and ny need focused listening practice.",
    sampleWord: {
      original: "habari",
      transliteration: "ha-BA-ri",
      translation: "news; used in greetings"
    }
  },
  grammar: {
    overview:
      "Swahili grammar is highly patterned. Nouns belong to classes, verbs carry subject and tense information in prefixes, and the default word order is subject-verb-object.",
    topics: [
      {
        title: "Noun classes",
        body: "Nouns are grouped into classes that affect agreement with adjectives, verbs, and pronouns.",
        example: "mtu / watu",
        exampleTranslation: "person / people"
      },
      {
        title: "Verb prefixes",
        body: "Verbs use prefixes for subject and tense before the root meaning.",
        example: "ni-na-soma",
        exampleTranslation: "I am reading"
      },
      {
        title: "Word order",
        body: "The usual order is subject, verb, then object.",
        example: "Mimi ninasoma kitabu.",
        exampleTranslation: "I am reading a book."
      },
      {
        title: "Negation",
        body: "Negative forms often use ha- or si- patterns around the verb structure.",
        example: "Si-elewi.",
        exampleTranslation: "I do not understand."
      }
    ]
  },
  whereSpoken: {
    overview:
      "Swahili is a major language of East Africa and a lingua franca across coastal and inland communities.",
    mapImageAlt: "Map highlighting East African regions where Swahili is widely used.",
    regions: [
      { place: "Tanzania", note: "National language and everyday lingua franca." },
      { place: "Kenya", note: "Widely used along the coast and in urban life." },
      { place: "Uganda", note: "Used in education, public life, and regional communication." },
      { place: "Democratic Republic of the Congo", note: "Common in the east." },
      { place: "Zanzibar", note: "A major cultural and historical center for Swahili." }
    ]
  },
  learningDifficulty:
    "For English speakers, Swahili is often friendlier than its unfamiliar noun-class system first suggests. Pronunciation is consistent, spelling is transparent, and everyday phrases are accessible early. The main work is learning agreement patterns and building comfort with verb prefixes.",
  culturalNotes:
    "Swahili carries centuries of coastal East African history, including Bantu roots and long contact with Arabic, Persian, Portuguese, German, English, and regional languages.",
  resources: [
    {
      type: "course",
      title: "Language Transfer Swahili",
      url: "https://www.languagetransfer.org/swahili",
      level: "beginner",
      description: "Audio lessons that explain Swahili structure in a learner-friendly sequence."
    },
    {
      type: "dictionary",
      title: "Kamusi Project",
      url: "https://kamusi.org/",
      level: "all",
      description: "Dictionary and lexical resources for Swahili and other languages."
    },
    {
      type: "video",
      title: "SwahiliPod101",
      url: "https://www.youtube.com/@SwahiliPod101",
      level: "beginner",
      description: "Video lessons, listening practice, and phrase-based learning."
    },
    {
      type: "book",
      title: "Simplified Swahili",
      level: "beginner",
      description: "A classic grammar-oriented course book for structured study."
    },
    {
      type: "community",
      title: "Language exchange partners",
      level: "all",
      description: "Conversation practice helps turn regular patterns into automatic speech."
    }
  ],
  relatedLanguages: [
    {
      name: "Shona",
      relationship: "Bantu language",
      explanation: "Shares broad Niger-Congo and Bantu family relationships, though not mutual intelligibility."
    },
    {
      name: "Zulu",
      relationship: "Bantu language",
      explanation: "A southern Bantu language with noun-class agreement, useful for comparing family traits."
    },
    {
      name: "Chichewa",
      relationship: "Bantu language",
      explanation: "Another Bantu language with class agreement and related structural patterns."
    },
    {
      name: "Gikuyu",
      relationship: "Bantu language of Kenya",
      explanation: "Geographically closer than many southern Bantu languages and useful for regional comparison."
    }
  ],
  phrases: [
    { original: "Hujambo?", translation: "Hello?" },
    { original: "Habari nzuri.", translation: "I am fine." },
    { original: "Asante.", translation: "Thank you." },
    { original: "Tafadhali.", translation: "Please." },
    { original: "Karibu.", translation: "Welcome." },
    { original: "Ndiyo.", translation: "Yes." },
    { original: "Hapana.", translation: "No." },
    { original: "Samahani.", translation: "Sorry; excuse me." },
    { original: "Sikuelewa.", translation: "I did not understand." },
    { original: "Unaweza kunisaidia?", translation: "Can you help me?" },
    { original: "Jina langu ni ...", translation: "My name is ..." },
    { original: "Kwa heri.", translation: "Goodbye." }
  ],
  sources: [
    {
      title: "Swahili language",
      publisher: "Encyclopaedia Britannica",
      url: "https://www.britannica.com/topic/Swahili-language"
    },
    {
      title: "Swahili",
      publisher: "Ethnologue",
      url: "https://www.ethnologue.com/language/swh/"
    },
    {
      title: "Swahili language",
      publisher: "Omniglot",
      url: "https://www.omniglot.com/writing/swahili.htm"
    },
    {
      title: "Tanzania Institute of Swahili Research",
      publisher: "University of Dar es Salaam",
      url: "https://www.udsm.ac.tz/web/index.php/institutes/takriri"
    }
  ],
  seo: {
    title: "Swahili Language Guide for Learners",
    description:
      "Learn what Swahili is like: pronunciation, script, grammar, where it is spoken, related languages, resources, and useful starter phrases."
  }
};

export const sampleGuides: LanguageGuide[] = [swahiliGuide];
