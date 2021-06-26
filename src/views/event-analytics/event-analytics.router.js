const prefix = '/event-analytics';
export default [

  {
    path: prefix+"/quest-viewed-or-finished",
    name: 'reports-index',
    component: () => import('./quest-viewed-or-finished/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Event Analytics'
    }
  },
  {
    path: prefix+"/user-checked-in-and-interest-button",
    name: 'reports-index',
    component: () => import('./user-checked-in-and-interest-button/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Event Analytics'
    }

  },
];
