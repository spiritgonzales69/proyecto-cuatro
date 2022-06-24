import images from './images';

const wines = [
  {
    title: 'Victora Oscura',
    price: 'MXN$ 28',
    tags: 'OS | Lata',
  },
  {
    title: 'Haineken Premium',
    price: 'MXN$ 20',
    tags: 'PRE | Lata',
  },
  {
    title: 'Dos XX Clara',
    price: 'MXN$ 22',
    tags: 'CL | Lata',
  },
  {
    title: 'Coca-Cola',
    price: 'MXN$ 18',
    tags: 'Un | 600 ml',
  },
  {
    title: 'Boing',
    price: 'MXN$ 11',
    tags: 'Un | 500 ml',
  },
];

const cocktails = [
  {
    title: 'Malteada Gansito',
    price: 'MXN$ 60',
    tags: 'Vaso | 12 onz',
  },
  {
    title: "Malteada Blue",
    price: 'MXN$ 65',
    tags: 'Vaso | 12 onz | Yogurt Natural',
  },
  {
    title: 'Malteada mazapan',
    price: 'MXN$ 69',
    tags: 'Vaso | 12 onz',
  },
  {
    title: 'Malteada cajeta',
    price: 'MXN$ 59',
    tags: 'Vaso | 12 onz',
  },
  {
    title: 'Malteada Oreo',
    price: 'MXN$ 58',
    tags: 'Vaso | 12 onz',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Barman',
    subtitle: 'La creatividad es fácil, lo difícil es tener la idea.',
  },
  {
    imgUrl: images.award01,
    title: 'Estrella En Ascenso',
    subtitle: 'La creatividad es fácil, lo difícil es tener la idea.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitalidad',
    subtitle: 'La creatividad es fácil, lo difícil es tener la idea.',
  },
  {
    imgUrl: images.award03,
    title: 'Chef Destacado',
    subtitle: 'La creatividad es fácil, lo difícil es tener la idea.',
  },
];

export default { wines, cocktails, awards };
