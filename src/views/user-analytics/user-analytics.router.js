const prefix = '/user-analytics';
export default [

  {
    path: prefix+"/user-list",
    name: 'user-analytics-index',
    component: () => import('./user-list/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'User Analytics'
    }
  },
  {
    path: prefix+"/users-by-quest",
    name: 'users-by-quest-index',
    component: () => import('./users-by-quest/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'User Analytics'
    }
  },
  {
    path: prefix+"/users-by-demographics",
    name: 'users-by-demographics-index',
    component: () => import('./users-by-demographics/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'User Analytics'
    }
  },
  {
    path: prefix+"/users-by-location",
    name: 'users-by-location-index',
    component: () => import('./users-by-location/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'User Analytics'
    }
  },
];
