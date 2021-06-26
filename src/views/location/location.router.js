const prefix = '/location';
export default [

  {
    path: prefix+"/city-options",
    name: 'city-index',
    component: () => import('./city-option/index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Location'
    }
  },
  {
    path: prefix+"/city-options/create",
    name: 'city-create',
    component: () => import('./city-option/form.component.vue'),
    meta: {
      title: 'Add City Option'
    }
  },
  {
    path: prefix+"/city-options/:id/edit",
    name: 'city-edit',
    component: () => import('./city-option/form.component.vue'),
    meta: {
      title: 'Update City Option'
    }
  },
  {
    path: prefix+"/province-options",
    name: 'province-index',
    component: () => import('./province-option/index.component.vue'),
    meta: {
      title: 'Province Option'
    }
  },
  {
    path: prefix+"/province-options/create",
    name: 'province-create',
    component: () => import('./province-option/form.component.vue'),
    meta: {
      title: 'Add Province Option'
    }
  },
  {
    path: prefix+"/province-options/edit",
    name: 'province-edit',
    component: () => import('./province-option/form.component.vue'),
    meta: {
      title: 'Update Province Option'
    }
  },
  {
    path: prefix+"/region-options",
    name: 'region-index',
    component: () => import('./region-option/index.component.vue'),
    meta: {
      title: 'Region Option'
    }
  },
  {
    path: prefix+"/region-options/create",
    name: 'region-create',
    component: () => import('./region-option/form.component.vue'),
    meta: {
      title: 'Add Region Option'
    }
  },
  {
    path: prefix+"/region-options/edit",
    name: 'region-edit',
    component: () => import('./region-option/form.component.vue'),
    meta: {
      title: 'Update Region Option'
    }
  },
  {
    path: prefix+"/country-options",
    name: 'country-index',
    component: () => import('./country-option/index.component.vue'),
    meta: {
      title: 'Country Option'
    }
  },
  {
    path: prefix+"/country-options/create",
    name: 'country-create',
    component: () => import('./country-option/form.component.vue'),
    meta: {
      title: 'Add Country Option'
    }
  },
  {
    path: prefix+"/country-options/edit",
    name: 'country-edit',
    component: () => import('./country-option/form.component.vue'),
    meta: {
      title: 'Update Country Option'
    }
  },
];