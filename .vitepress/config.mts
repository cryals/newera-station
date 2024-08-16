import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NEWERA STSTION",
  description: "Space Station 14 Project",
  lang: 'ru-RU',
  boolean: true,
  srcDir: './docs',
   base: '/newera-station/',
  head: [['link', { rel: 'icon', href: 'newera.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'База Знаний', link: '/main' },
      { text: 'SUNRISE WIKIPEDIA', link: 'https://wiki.sunrise14.top/' }
    ],

    sidebar: [
      {
        text: 'Space Station 14',
        items: [
          { text: 'Начать Игру', link: '/quick-starts' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/newera-station' }
    ]
  }
})
