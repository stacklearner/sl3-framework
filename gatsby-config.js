module.exports = {
	siteMetadata: {
		siteTitle: `SL3 Framework - Code For Brain`,
		defaultTitle: `SL3 Framework - Code For Brain`,
		siteTitleShort: `SL3 Framework`,
		siteDescription: `SL3 Framework - Stack Learner Language Learning Framework which will force to you think like a computer scientist.`,
		siteUrl: `https://sl3.app`,
		siteAuthor: `@stacklearner`,
		siteImage: `/banner.png`,
		siteLanguage: `en`,
		themeColor: `#7159c1`,
		basePath: `/`,
		footer: `Powered By Stack Learner`,
	},
	plugins: [
		{
			resolve: `@rocketseat/gatsby-theme-docs`,
			options: {
				configPath: `src/config`,
				docsPath: `src/docs`,
				githubUrl: `https://github.com/rocketseat/gatsby-themes`,
				baseDir: `examples/gatsby-theme-docs`,
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Rocketseat Gatsby Themes`,
				short_name: `RS Gatsby Themes`,
				start_url: `/`,
				background_color: `#ffffff`,
				display: `standalone`,
				icon: `static/favicon.png`,
			},
		},
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// trackingId: ``,
			},
		},
		{
			resolve: `gatsby-plugin-canonical-urls`,
			options: {
				siteUrl: `https://sl3.app`,
			},
		},
		`gatsby-plugin-offline`,
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				custom: {
					families: ['Kohinoor', 'Roboto'],
					urls: ['/fonts/fonts.css'],
				},
			},
		},
		{
			resolve: `gatsby-remark-responsive-iframe`,
			options: {
				wrapperStyle: `margin-bottom: 1.0725rem`,
			},
		},
	],
	pathPrefix: '/sl3-framework',
};
