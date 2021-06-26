const prefix = '/quest';
export default [

  {
    path: prefix,
    name: 'quest-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Recently Added Quest'
    }

  },
  {
    path: prefix+"/:id/details",
    name: 'quest-details',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Quest Details'
    }

  },
];
