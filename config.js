const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'http://einstein.br/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://leunardo.dev/einstein/Logo-Albert-Einstein.svg',
    logoLink: 'https://www.einstein.br/',
    title:
      // "<img class='img-responsive' src='https://leunardo.dev/einstein/Logo-Albert-Einstein.svg' alt='Einstein Logo' />",
      '',
    githubUrl: 'https://github.com/LeuAlmeida/schedule-telecoms-einstein',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/twitter-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='https://graphql-engine-cdn.hasura.io/learn-hasura/assets/homepage/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: ['/index', '/Telecoms', '/PowerBI'],
    collapsedNav: ['/Telecoms', '/PowerBI'],
    links: [],
    frontline: false,
    ignoreIndex: false,
    title: "portal<div class='greenCircle'></div>empresas",
  },
  siteMetadata: {
    title: 'Telecoms Schedule API - HIAE',
    description:
      'The purpose of this API is, through jobs scheduled by node-cron, to consult the database and save the respective data consulted in Serasa/Boa Vista SCPC for credit/debit invoices.',
    ogImage: null,
    docsLocation: 'https://github.com/LeuAlmeida/schedule-telecoms-einstein/tree/master/content',
    favicon: 'https://www.einstein.br/PortalAssets/images/einstein.ico',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Documentação - Portal Empresas',
      short_name: 'DocsPortal',
      start_url: '/',
      background_color: '#0E2A6B',
      theme_color: '#0E2A6B',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
