export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5d9722a23e22e7c15c50e2b9',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-d53rsr5t',
                  apiId: '3435d62b-3f16-4ad6-8ae0-0ae1f798d0a5'
                },
                {
                  buildHookId: '5d9722a2b2952d6fa4cbc010',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-wdohwzss',
                  apiId: 'cfc1c08b-22fe-41cc-a944-4408cd95ff56'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DanteZii/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-wdohwzss.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
