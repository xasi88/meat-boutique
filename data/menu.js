// Всё содержимое каталога. Чтобы поменять цену или товар, правьте только этот файл.
// unit: "kg" - продаётся на вес, шаг 0,5 кг; "pcs" - поштучно (пачка, набор).
// badge: подпись на фото. soldOut: true - товар виден, но заказать нельзя.
// real: true - цена с ценника в их Instagram (сторис весны-лета 2026 или пост). Без real цена примерная: уточнить у владельца.
// Фото без своего снимка: img/placeholder.webp (логотип на бордовом).

window.SHOP = {
  name: "Мясной бутик",
  slogan: "Мясо со стилем",
  place: "Грозный",
  address: "Грозный, ул. Айдамирова, 96",
  phone: "79637016060",
  phoneText: "8 (963) 701-60-60",
  instagram: "meat_boutiqque",
  freeFrom: 10000, // бесплатная доставка от этой суммы
  deliveryArea: "по Грозному",
  demo: true, // показывает плашку «Демо, часть цен примерная»
};

const PH = "img/placeholder.webp";

window.MENU = [
  {
    id: "beef",
    title: "Говядина",
    note: "Свежее мясо каждый день. Разделаем под ваш рецепт.",
    items: [
      { id: "ribeye", name: "Рибай без кости", desc: "Мраморная говядина для стейков. Режем на стейки нужной толщины.", price: 1980, real: true, unit: "kg", img: "img/steaks.webp", badge: "Для стейков" },
      { id: "striploin", name: "Стриплойн", desc: "Тонкий край. Нежные стейки с полоской жира.", price: 1900, unit: "kg", img: "img/striploin.webp" },
      { id: "langet", name: "Лангет", desc: "Идеально для мяса по-французски.", price: 1020, real: true, unit: "kg", img: "img/langet.webp" },
      { id: "myakot", name: "Мякоть для жарки", desc: "Чистая мякоть без костей. Жарить кусочками или целиком.", price: 940, real: true, unit: "kg", img: "img/beef3.webp" },
      { id: "gulyash", name: "Гуляш", desc: "Говядина, нарезанная для тушения.", price: 1000, real: true, unit: "kg", img: PH },
      { id: "lopatka", name: "Подлопатка", desc: "Универсальная часть: тушить, запекать, крутить фарш.", price: 800, real: true, unit: "kg", img: PH },
      { id: "ossobuco", name: "Оссобуко", desc: "Голяшка на кости поперечным срезом. Для долгого тушения. На фото готовое блюдо.", price: 900, unit: "kg", img: "img/ossobuco.webp" },
      { id: "ribs", name: "Рёбра говяжьи", desc: "Мясистые рёбра для духовки и казана.", price: 850, unit: "kg", img: PH },
    ],
  },
  {
    id: "lamb",
    title: "Баранина",
    note: "Части под шашлык, казан и духовку.",
    items: [
      { id: "lamb-shashlik", name: "Баранина для шашлыка", desc: "Отличная часть для бараньего шашлыка. Нарежем кусками.", price: 1100, unit: "kg", img: PH },
      { id: "lamb-rack", name: "Каре ягнёнка", desc: "Рёбрышки на кости для гриля и духовки.", price: 1600, unit: "kg", img: PH },
      { id: "lamb-bone", name: "Баранина на кости", desc: "Для шурпы, казана и запекания.", price: 950, unit: "kg", img: PH },
    ],
  },
  {
    id: "chicken",
    title: "Курица",
    note: "",
    items: [
      { id: "fillet", name: "Куриное филе", desc: "Грудка без кожи и костей.", price: 450, unit: "kg", img: PH },
      { id: "thigh", name: "Бедро куриное", desc: "Сочное мясо для гриля и духовки.", price: 380, unit: "kg", img: PH },
    ],
  },
  {
    id: "semi",
    title: "Фарш и полуфабрикаты",
    note: "Фарш нежирный или жирный: по вашему желанию.",
    items: [
      { id: "farsh", name: "Фарш говяжий", desc: "Сделаем нежирный или жирный по вашему желанию. Напишите в пожеланиях.", price: 900, unit: "kg", img: "img/farsh.webp", badge: "Под заказ" },
      { id: "lulya", name: "Люля-кебаб", desc: "Перед этими люля ещё никто не устоял.", price: 1100, unit: "kg", img: "img/lulya.webp" },
      { id: "sausages", name: "Колбаски для жарки", desc: "Новинка бутика. Цена за пачку.", price: 1150, real: true, unit: "pcs", unitName: "пачка", img: "img/sausages.webp", badge: "Новинка" },
      { id: "pelmeni", name: "Цветные пельмени", desc: "Пельмени для поднятия настроения.", price: 700, unit: "pcs", unitName: "пачка", img: "img/pelmeni.webp" },
      { id: "manty", name: "Манты", desc: "Домашние манты.", price: 650, unit: "pcs", unitName: "пачка", img: PH },
      { id: "cutlets", name: "Котлеты в панировке", desc: "Замороженные. Пожарить на сковороде.", price: 600, unit: "pcs", unitName: "пачка", img: PH },
    ],
  },
  {
    id: "dried",
    title: "Сушёное мясо и колбасы",
    note: "Новые поступления смотрите в нашем Instagram.",
    items: [
      { id: "dried-bone", name: "Сушёное мясо на кости", desc: "Традиционное сушёное мясо. Для жижиг-галнаш и в дорогу.", price: 2500, unit: "kg", img: "img/dried-bone.webp" },
      { id: "kurdyuk", name: "Курдюк, нарезка", desc: "Легендарный курдюк снова с нами. Нарезка в вакууме.", price: 900, unit: "pcs", unitName: "пачка", img: "img/dried-pack.webp" },
      { id: "dried-sausage", name: "Сушёная колбаса", desc: "Домашняя сушёная колбаса.", price: 2200, unit: "kg", img: PH },
    ],
  },
  {
    id: "gifts",
    title: "Подарки",
    note: "Помогаем дарить положительные эмоции.",
    items: [
      { id: "gift", name: "Мясная корзина в подарок", desc: "Мясо, колбасы и деликатесы в красивой корзине. Состав и бюджет обсуждаем при заказе.", price: 7000, unit: "pcs", unitName: "набор", img: "img/gift.webp", badge: "Подарок" },
    ],
  },
];

// Блок «Почему у нас»: только то, что бутик сам пишет о себе в Instagram.
window.PERKS = [
  ["Свежее мясо каждый день", "Новые поступления говядины, баранины и курицы."],
  ["Разделка под ваш рецепт", "Стейки, гуляш, фарш нежирный или жирный: как вам нужно."],
  ["Бесплатная доставка", "По Грозному при заказе от 10 000 ₽."],
  ["Маринуем и готовим", "Мясо в маринаде, люля-кебаб и полуфабрикаты."],
];
