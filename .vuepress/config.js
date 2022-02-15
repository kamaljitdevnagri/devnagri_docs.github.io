const base = process.env.GH ? '/vuepress/' : '/'

module.exports = {
  title: 'DEVNAGRI',
  description: 'We Celebrate INDIAN Languages',
  dest: 'vuepress',
  base,
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  serviceWorker: true,
  themeConfig: {
    logo: '/logo-dark.png',
    docsDir: '/',
    nav: [
      {
        text: 'Home',
        link: 'http://www.devnagri.com',
      },
      {
        text: 'Guide',
        link: '/guide/user.html',
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'User Guide',
          collapsable: false,
          children: [
            'user',
            'Glossary',
          ]
        },
        {
          title: 'Translator Guide',
          collapsable: false,
          children: [
            'Translator'
          ]
        },
        {
          title: 'Developer Guide',
          collapsable: false,
          children: [
            'Api'
          ]
        }
      ]
    }
  }
}
