module.exports = {
  title: 'Nuxt ️️+ Sanity',
  description: 'Easily integrate Sanity in your Nuxt.js project.',
  themeConfig: {
    repo: 'vicbergquist/nuxt-sanity',
    repoLabel: 'Contribute!',
    lastUpdated: 'Last Updated',
    editLinkText: 'Help us improve this page!',
    editLinks: true,
    nav: [
      {
        text: 'Sanity',
        link: 'https://www.sanity.io/'
      },
      {
        text: 'Official Docs',
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