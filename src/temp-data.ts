export type Event = {
  id: number;
  description: string;
  date: number;
};

export type Period = {
  id: number;
  startDate: number;
  endDate: number;
  title: string;
  events: Event[];
};

export const data: Period[] = [
  {
    id: 1,
    startDate: 1987,
    endDate: 1991,
    title: "История",
    events: [
      { id: 1, date: 1987, description: 'Июль 1987 год - Начало политики "перестройки" в СССР.' },
      {
        id: 2,
        date: 1988,
        description: "14 мая 1988 года - начало вывода советских войск из Афганистана.",
      },
      {
        id: 3,
        date: 1989,
        description:
          "2 декабря 1989 года - встреча Горбачева М.С. и Дж.Буша (старшего) на о. Мальта.",
      },
      {
        id: 4,
        date: 1990,
        description:
          '13 августа 1990 года - Указ "О восстановлении прав всех жертв политических репрессий 20-50-х годов".',
      },
      {
        id: 5,
        date: 1991,
        description:
          "8 декабря 1991 года - Подписание Беловежских соглашений о ликвидации СССР и создании СНГ.",
      },
    ],
  },
  {
    id: 2,
    startDate: 1992,
    endDate: 1997,
    title: "Наука",
    events: [
      {
        id: 1,
        date: 1992,
        description:
          "1992 год был объявлен Организацией Объединённых Наций Международным годом космоса",
      },
      {
        id: 2,
        date: 1993,
        description:
          "24 февраля — японцем Юкихиро Мацумото был задуман новый и перспективный язык программирования «Ruby».",
      },
      {
        id: 3,
        date: 1994,
        description:
          "8 января — с космодрома Байконур осуществлён запуск российского пилотируемого космического корабля Союз ТМ-18.",
      },
      {
        id: 4,
        date: 1995,
        description: "24 августа — выпуск в свет операционной системы Windows 95.",
      },
      {
        id: 5,
        date: 1996,
        description:
          "30 января — японским астрономом-любителем Юдзи Хякутакэ (яп. 百武裕司) открыта долгопериодическая комета C/1996 B2 (Хякутакэ).",
      },
    ],
  },
  {
    id: 3,
    startDate: 1998,
    endDate: 2002,
    title: "Кино",
    events: [
      {
        id: 1,
        date: 1998,
        description:
          "День независимости.Independence Day, 145 мин.США • фантастика  Режиссёр: Роланд Эммерих.В ролях: Уилл Смит, Джефф Голдблюм",
      },
      {
        id: 2,
        date: 1999,
        description:
          "Брат. 100 мин.Россия • драма  Режиссёр: Алексей Балабанов.В ролях: Сергей Бодров мл., Виктор Сухоруков",
      },
      {
        id: 3,
        date: 2000,
        description:
          "Шоу Трумана.The Truman Show. 103 мин.США • драма  Режиссёр: Питер Уир.В ролях: Джим Керри, Лора Линни",
      },
      {
        id: 4,
        date: 2001,
        description: `Гарри Поттер и философский камень.Harry Potter and the Sorcerer's Stone, 2001, 152 мин.Великобритания • фэнтези  Режиссёр: Крис Коламбус.В ролях: Дэниэл Рэдклифф, Руперт Гринт`,
      },
      {
        id: 5,
        date: 2002,
        description:
          "Поймай меня, если сможешь.Catch Me If You Can.2002, 141 мин.США • криминал  Режиссёр: Стивен Спилберг.В ролях: Леонардо ДиКаприо, Том Хэнкс",
      },
    ],
  },
  {
    id: 4,
    startDate: 2003,
    endDate: 2010,
    title: "Литература",
    events: [
      {
        id: 1,
        date: 2003,
        description: "Дублинская литературная премия — Орхан Памук, роман «Меня зовут Красный»",
      },
      {
        id: 2,
        date: 2005,
        description:
          "Премия Александра Солженицына — критик Игорь Золотусский, «за масштабность художественно-критических исследований современной словесности и глубинное постижение гения и судьбы Гоголя; за верность, в независимом поиске, традициям и нравственному достоинству русской литературы»",
      },
      {
        id: 3,
        date: 2008,
        description:
          "Нобелевская премия по литературе — Жан-Мари Гюстав Леклезио, «За то, что Леклезио пишет „о новых направлениях, поэтических приключениях, чувственных восторгах“, он — „исследователь человечества вне пределов правящей цивилизации“»",
      },
    ],
  },
  {
    id: 5,
    startDate: 2011,
    endDate: 2015,
    title: "Технологии",
    events: [
      { id: 1, date: 2011, description: "ГЛОНАСС накрыл всю планету" },
      {
        id: 2,
        date: 2012,
        description: "2012 г. является запуск операционной системы Microsoft Windows 8",
      },
      {
        id: 3,
        date: 2014,
        description:
          "5 января — группа астрофизиков обнаружила тройную систему звёзд PSR J0337+1715, строение которой позволяет с высокой точностью проверить сильный принцип эквивалентности Общей теории относительности Эйнштейна",
      },
      {
        id: 4,
        date: 2015,
        description:
          "14 марта — хирурги в Южно-Африканской Республике провели первую в мире успешную операцию по пересадке пениса",
      },
    ],
  },
  {
    id: 6,
    startDate: 2016,
    endDate: 2022,
    title: "События",
    events: [
      {
        id: 1,
        date: 2016,
        description: "С космодрома «Восточный» успешно запустили первую ракету.",
      },
      {
        id: 2,
        date: 2018,
        description:
          "после завершения ЧМ-2018 состоялось одно из главных событий года в сфере политики – в столице Финляндии Хельсинки президент России Владимир Путин встретился со своим американским коллегой Дональдом Трампом",
      },
      { id: 3, date: 2019, description: "Запуск железнодорожного сообщения через Крымский мост" },
      {
        id: 4,
        date: 2020,
        description: "Год пандемии и локдаунов.Коронавирусная инфекция (COVID-19)",
      },
      { id: 5, date: 2021, description: "штурма Капитолии США 6 января" },
      { id: 6, date: 2022, description: "Спецоперация на Украине" },
    ],
  },
];
