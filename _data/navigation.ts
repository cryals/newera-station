// _data/navigation.ts
export const nav = [
    { text: 'Главная', link: '/' },
    { text: 'База Знаний', link: '/main' },
    { text: 'SUNRISE WIKIPEDIA', link: 'https://wiki.sunrise14.top/' }
  ];
  
  export const sidebar = [
    {
      text: 'Space Station 14',
      items: [
        { text: 'Начать Игру', link: '/quick-starts' },
        {
          text: 'Ресурсы',
          collapsed: true,
          items: []
        },
        {
          text: 'Основы',
          collapsed: true,
          items: []
        },
        {
          text: 'Предметы',
          collapsed: true,
          items: []
        },
        {
          text: 'Ведомственные СРП',
          collapsed: true,
          items: [{ text: 'СРП командования', link: '/department/command' },]
        },
        {
          text: 'Сервис',
          collapsed: true,
          items: []
        },
        {
          text: 'Медицина',
          collapsed: true,
          items: []
        },
        {
          text: 'Снабжение',
          collapsed: true,
          items: []
        },
        {
          text: 'Инженерия',
          collapsed: true,
          items: []
        },
        {
          text: 'Наука',
          collapsed: true,
          items: []
        },
        {
          text: 'Безопасность',
          collapsed: true,
          items: [{ text: 'Корпоративный Закон', link: '/security/corp-laws' },]
        },
        {
          text: 'Игровые механики',
          collapsed: true,
          items: []
        }
      ]
    }
  ];
  