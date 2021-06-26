const prefix = '/subscription-plans';
export default [
  {
    path: prefix,
    name: 'subscription-plan-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Subscription Plan'
    }

  },
  {
    path: prefix+"/create",
    name: 'subscription-plan-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Subscription Plan'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'subscription-plan-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Subscription Plan'
    }

  },
];
