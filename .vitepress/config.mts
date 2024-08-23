import { defineConfig } from 'vitepress';
import { telegram } from './support/icons.ts';
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NEWERA STATION",
  description: "Space Station 14 Project",
  lang: 'ru-RU',
  srcDir: './docs',
  base: '/newera-station/',
  head: [['link', { rel: 'icon', href: '/newera-station/newera.png' }]],
  themeConfig: {
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'База Знаний', link: '/main' },
      { text: 'SUNRISE WIKIPEDIA', link: 'https://wiki.sunrise14.top/' }
    ],
    sidebar: [
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
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/newera-station' },
      { icon: { svg: telegram }, link: 'https://t.me/NEWERA_OFF' },
      { icon: 'github', link: 'https://github.com/cryals/newera-station' },
    ]
  },
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    }
  }
});
