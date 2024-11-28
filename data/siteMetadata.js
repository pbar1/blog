/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'pbar.dev',
  author: 'Pierce Bartine',
  headerTitle: 'Pierce Bartine',
  description: "Pierce Bartine's personal blog",
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://pbar.dev',
  siteRepo: 'https://github.com/pbar1/blog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  mastodon: 'https://hachyderm.io/@pbar',
  github: 'https://github.com/pbar1',
  linkedin: 'https://www.linkedin.com/in/pbar',
  threads: 'https://www.threads.net/@pbar.c',
  locale: 'en-US',
  stickyNav: true,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`, // path to load documents to search
    },
  },
}

module.exports = siteMetadata
