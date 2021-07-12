const prefix = '/apps';
export default [
  {
    path: prefix,
    name: 'apps-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Apps'
    }

  },
];
