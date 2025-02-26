import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Isupabase Flex",
  description: "Isupabase Flex",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Brief',
        items: [
          { text: 'Quick Start', link: '/quickstart' },
          { text: 'Something Different', link: '/different' },
          { text: 'Customize Your Provider', link: '/provider' }
        ]
      },
      {
        text: 'Detailed',
        items: [
          { text: 'Config', link: '/config' },
          { text: 'Using Rls and Cls in code', link: '/using-rls-and-cls-in-code' },
          { text: 'Content Not Yet Implemented', link: '/content-not-yet-implemented' },
          { text: 'Limitations', link: '/limitations' }
        ]
      }

    ],
    search:{
      provider:"local",
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yanfeiwuji/isupabase-flex' }
    ]
  }
})
