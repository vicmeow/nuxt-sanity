module.exports = {
  title: 'Nuxt ️️❤️ Sanity',
  description: 'Get started with Nuxt and Sanity.',
  themeConfig: {
    repo: 'vicbergquist/nuxt-sanity',
    repoLabel: 'Contribute!',
    lastUpdated: 'Last Updated',
    editLinkText: 'Help us improve this page!',
    editLinks: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide'
      },
      {
        text: 'Sanity',
        link: 'https://www.sanity.io/docs'
      }
    ],
    displayAllHeaders: true,
    sidebar: [
      {
        title: 'Guide',
        path: '/',
        collapsable: false
      },
      {
        title: 'Usage',
        path: '/usage/',
        collapsable: false
      },
      {
        title: 'API Reference',
        path: '/api/',
        collapsable: false,
        sidebarDepth: 4
      }
    ]
  }
}