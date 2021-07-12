const prefix = '/locations';
export default [
  {
    path: prefix,
    name: 'locations-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Locations'
    }

  },
  {
    path: prefix+"/create",
    name: 'locations-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Location'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'locations-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Update Locations'
    }

  },
];
