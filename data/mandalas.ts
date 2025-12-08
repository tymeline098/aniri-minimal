// Aniri's Mandala Collection with spiritual meanings and stories

export interface Mandala {
  id: string;
  number: number;
  title: string;
  titleRu: string;
  meaning: string;
  meaningRu: string;
  description: string;
  descriptionRu: string;
  color: string; // dominant color for UI
  category: 'spiritual' | 'prosperity' | 'health' | 'relationships' | 'growth' | 'wisdom';
  imageUrl: string;
  tags: string[];
  createdYear: number;
  printPrice: number; // in USD
  available: boolean;
}

export const MANDALAS: Mandala[] = [
  {
    id: 'mandala-001',
    number: 1,
    title: 'Revival',
    titleRu: 'Возрождение',
    meaning: 'Renewal and fresh beginnings',
    meaningRu: 'Возобновление и новые начинания',
    description: 'This mandala represents the energy of spring and rebirth. It invites you to release the past and embrace new opportunities with an open heart.',
    descriptionRu: 'Этот мандала представляет энергию весны и возрождения. Он приглашает вас отпустить прошлое и принять новые возможности с открытым сердцем.',
    color: '#E8D4A8',
    category: 'growth',
    imageUrl: '/images/mandalas/001 Revival.webp',
    tags: ['renewal', 'new beginning', 'spring', 'rebirth'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
  {
    id: 'mandala-002',
    number: 2,
    title: 'Enlightenment',
    titleRu: 'Просвещение',
    meaning: 'Spiritual awakening and clarity',
    meaningRu: 'Духовное пробуждение и ясность',
    description: 'Seek clarity in confusion. This mandala illuminates the path to understanding and higher consciousness.',
    descriptionRu: 'Ищите ясность в смешении. Этот мандала освещает путь к пониманию и высшему сознанию.',
    color: '#F5D76E',
    category: 'wisdom',
    imageUrl: '/images/mandalas/002 Enlightenment.webp',
    tags: ['enlightenment', 'clarity', 'wisdom', 'consciousness'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
  {
    id: 'mandala-003',
    number: 3,
    title: 'Happy Chance',
    titleRu: 'Счастливый Случай',
    meaning: 'Fortune and serendipity',
    meaningRu: 'Удача и совпадение',
    description: 'Open yourself to the gifts of fate. This mandala attracts fortunate circumstances and unexpected blessings.',
    descriptionRu: 'Откройтесь подаркам судьбы. Этот мандала привлекает счастливые обстоятельства и неожиданные благословения.',
    color: '#D4AF8C',
    category: 'prosperity',
    imageUrl: '/images/mandalas/003 Happy Chance.webp',
    tags: ['luck', 'fortune', 'serendipity', 'blessings'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
  {
    id: 'mandala-004',
    number: 4,
    title: 'Ancestral Luck',
    titleRu: 'Родовая Удача',
    meaning: 'Connection to ancestral wisdom',
    meaningRu: 'Связь с мудростью предков',
    description: 'Honor your lineage and inherit the strength of those who came before. This mandala opens channels of ancestral support.',
    descriptionRu: 'Почтите вашу родословную и унаследуйте силу тех, кто был прежде. Этот мандала открывает каналы поддержки предков.',
    color: '#C2985F',
    category: 'spiritual',
    imageUrl: '/images/mandalas/004 Ancestral Luck.webp',
    tags: ['ancestors', 'heritage', 'family', 'lineage'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
  {
    id: 'mandala-005',
    number: 5,
    title: 'Harmony',
    titleRu: 'Гармония',
    meaning: 'Balance and inner peace',
    meaningRu: 'Баланс и внутренний мир',
    description: 'Find equilibrium in all aspects of life. This mandala brings peace to the mind, body, and spirit.',
    descriptionRu: 'Найдите равновесие во всех аспектах жизни. Этот мандала приносит мир уму, телу и духу.',
    color: '#A8D5BA',
    category: 'health',
    imageUrl: '/images/mandalas/005 Harmony.webp',
    tags: ['balance', 'peace', 'harmony', 'equilibrium'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
  {
    id: 'mandala-006',
    number: 6,
    title: 'Happiness in Your Hands',
    titleRu: 'Счастье в Твоих Руках',
    meaning: 'Personal power and manifestation',
    meaningRu: 'Личная сила и проявление',
    description: 'You hold the power to create your reality. This mandala reminds you of your ability to shape your destiny.',
    descriptionRu: 'Вы обладаете властью создавать свою реальность. Этот мандала напоминает вам о вашей способности формировать свою судьбу.',
    color: '#F5B4A8',
    category: 'growth',
    imageUrl: '/images/mandalas/006 Happiness In your Hands.webp',
    tags: ['power', 'manifestation', 'control', 'agency'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
  {
    id: 'mandala-007',
    number: 7,
    title: 'Money Fortune',
    titleRu: 'Денежная Удача',
    meaning: 'Abundance and prosperity flow',
    meaningRu: 'Изобилие и поток процветания',
    description: 'Attract financial blessings and material abundance. This mandala opens pathways to wealth.',
    descriptionRu: 'Привлеките финансовые благословения и материальное изобилие. Этот мандала открывает пути к богатству.',
    color: '#D4AF37',
    category: 'prosperity',
    imageUrl: '/images/mandalas/007 Money Fortune.webp',
    tags: ['money', 'wealth', 'abundance', 'prosperity'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
  {
    id: 'mandala-008',
    number: 8,
    title: 'Money and Success',
    titleRu: 'Деньги и Успех',
    meaning: 'Achievement and financial growth',
    meaningRu: 'Достижение и финансовый рост',
    description: 'This mandala amplifies your efforts toward success. It supports both financial growth and personal achievement.',
    descriptionRu: 'Этот мандала усиливает ваши усилия к успеху. Он поддерживает как финансовый рост, так и личные достижения.',
    color: '#C9A961',
    category: 'prosperity',
    imageUrl: '/images/mandalas/008 Money and Success.webp',
    tags: ['success', 'achievement', 'financial', 'growth'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
  {
    id: 'mandala-009',
    number: 9,
    title: 'Solid Health',
    titleRu: 'Крепкое Здоровье',
    meaning: 'Vitality and wellness',
    meaningRu: 'Жизненная сила и благополучие',
    description: 'Nurture your physical body and energetic health. This mandala promotes healing and strong vitality.',
    descriptionRu: 'Заботьтесь о своем физическом теле и энергетическом здоровье. Этот мандала способствует исцелению и сильной жизненной силе.',
    color: '#8FBC8F',
    category: 'health',
    imageUrl: '/images/mandalas/009 Solid Health.webp',
    tags: ['health', 'vitality', 'wellness', 'healing'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
  {
    id: 'mandala-010',
    number: 10,
    title: 'Wisdom',
    titleRu: 'Мудрость',
    meaning: 'Inner knowing and truth',
    meaningRu: 'Внутреннее знание и истина',
    description: 'Connect with your inner wisdom and intuition. This mandala opens channels to deeper understanding.',
    descriptionRu: 'Соедините себя со своей внутренней мудростью и интуицией. Этот мандала открывает каналы более глубокого понимания.',
    color: '#B8860B',
    category: 'wisdom',
    imageUrl: '/images/mandalas/010 Wisdom.webp',
    tags: ['wisdom', 'intuition', 'knowledge', 'truth'],
    createdYear: 2023,
    printPrice: 24.99,
    available: true,
  },
];

// Mandala titles mapping for files 11-63
const mandalaTitles: { [key: number]: string } = {
  11: 'Support of the Elements',
  12: 'Journey into Self',
  13: 'Rejuvenation',
  14: 'Abundance',
  15: 'Secret to Success',
  16: 'Eldorado',
  17: 'Time Connection',
  18: 'Taste of Newness',
  19: 'Happiness Knot',
  20: 'Fragile Ice',
  21: 'New Opportunities',
  22: 'Multilayered',
  23: 'Flexibility',
  24: 'Flexibility',
  25: 'Crystallisation of Wishes',
  26: 'Awaiting Changes',
  27: 'Seedlings of Happiness',
  28: 'Smile of Fortune',
  29: 'Whirlpool',
  30: "Sun's Blessing",
  31: 'Redefining Gold',
  32: 'Treasure of Experience',
  33: 'Soul Connections',
  34: 'Out of Sight',
  35: 'Rethinking',
  36: 'Good Sign',
  37: 'Possibilities',
  38: 'All is Possible',
  // 39-63 don't have titles in filenames
};

// Add remaining mandalas (011-063)
const generateRemainingMandalas = (): Mandala[] => {
  const remaining = [];
  const categories: Array<'spiritual' | 'prosperity' | 'health' | 'relationships' | 'growth' | 'wisdom'> = [
    'spiritual', 'prosperity', 'health', 'relationships', 'growth', 'wisdom'
  ];
  const colors = [
    '#E8D4A8', '#F5D76E', '#D4AF8C', '#C2985F', '#A8D5BA',
    '#F5B4A8', '#D4AF37', '#C9A961', '#8FBC8F', '#B8860B',
    '#D7CCCF', '#6B4423', '#9B7C5A', '#A68064', '#8B6914'
  ];

  for (let i = 11; i <= 63; i++) {
    const paddedNum = String(i).padStart(3, '0');
    const title = mandalaTitles[i] || `Mandala ${i}`;
    // Build the filename based on what's actually in the Web folder
    const filename = mandalaTitles[i] 
      ? `/images/mandalas/${paddedNum} ${mandalaTitles[i]}.webp`
      : `/images/mandalas/${paddedNum}.webp`;
    
    remaining.push({
      id: `mandala-${paddedNum}`,
      number: i,
      title: title,
      titleRu: `Мандала ${i}`,
      meaning: 'Spiritual transformation',
      meaningRu: 'Духовная трансформация',
      description: `This mandala embodies the energy of transformation and divine purpose. Meditate with it to unlock your unique gifts.`,
      descriptionRu: `Этот мандала воплощает энергию трансформации и божественной цели. Медитируйте с ним, чтобы раскрыть свои уникальные дары.`,
      color: colors[i % colors.length],
      category: categories[i % categories.length],
      imageUrl: filename,
      tags: ['transformation', 'spiritual', 'divine', 'purpose'],
      createdYear: 2023 + Math.floor(i / 20),
      printPrice: 24.99,
      available: true,
    });
  }

  return remaining;
};

export const ALL_MANDALAS: Mandala[] = [...MANDALAS, ...generateRemainingMandalas()];

export const getMandalaByCategoryfilter = (category: string): Mandala[] => {
  return ALL_MANDALAS.filter(m => m.category === category);
};

export const searchMandalas = (query: string): Mandala[] => {
  const q = query.toLowerCase();
  return ALL_MANDALAS.filter(m =>
    m.title.toLowerCase().includes(q) ||
    m.meaning.toLowerCase().includes(q) ||
    m.tags.some(t => t.toLowerCase().includes(q))
  );
};
