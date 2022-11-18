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
                  buildHookId: '6377dc541f7d121537d042ce',
                  title: 'Sanity Studio',
                  name: 'sanity-skate-studio',
                  apiId: 'ff0bfb2f-98a3-42ac-9d50-20b28a19e07b'
                },
                {
                  buildHookId: '6377dc541645e027928bf3e1',
                  title: 'Portfolio Website',
                  name: 'sanity-skate',
                  apiId: 'e762abd9-8e9b-488e-ba00-bbdb99975e56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/accipitero/sanity-skate',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-skate.netlify.app',
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
