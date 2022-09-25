export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '633030a0e811f75b2fe4bc82',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ox5d3qr1',
                  apiId: '51702a67-8ccb-4ed6-b4d5-dde2d25872ec'
                },
                {
                  buildHookId: '633030a1c9d6db627807c31e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ox92qodz',
                  apiId: '423e38ae-fc66-4b23-bb88-80f0aeb4712a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ktor-vi/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ox92qodz.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
