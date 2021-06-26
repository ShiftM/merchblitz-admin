const prefix = '/push-notification';
export default [

  {
    path: prefix,
    name: 'push-notification-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Push Notification'
    }

  },
  {
    path: prefix+"/create",
    name: 'push-notification-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Push Notification'
    }

  }
];
