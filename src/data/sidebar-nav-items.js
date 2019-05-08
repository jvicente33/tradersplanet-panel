export default function() {
  return [
    {
      title: 'Estadísticas',
      to: {
        name: 'blog-overview'
      },
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ''
    },
    {
      title: 'Publicaciones',
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: {
        name: 'blog-posts'
      }
    },
    {
      title: 'Nueva publicación',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: {
        name: 'add-new-post'
      }
    },
    {
      title: 'Nueva educación',
      htmlBefore: '<i class="material-icons">book</i>',
      to: {
        name: 'add-new-education'
      }
    }
  ];
}
