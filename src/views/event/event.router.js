const prefix = '/events';
export default [

  {
    path: prefix,
    name: 'event-index',
    component: () => import('./index.component.vue'),
    meta: {
      level: 'parent',
      title: 'Events'
    }

  },
  {
    path: prefix+"/create",
    name: 'event-create',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Add Event'
    }

  },
  {
    path: prefix+"/:id/edit",
    name: 'event-edit',
    component: () => import('./form.component.vue'),
    meta: {
      title: 'Edit Event'
    }

  },
  {
    path: prefix+"/:id/assign-booth",
    name: 'event-assign-booth',
    component: () => import('./assign.component.vue'),
    meta: {
      title: 'Assign Booth'
    }

  },
  {
    path: prefix+"/:id/assign-company",
    name: 'event-assign-company',
    component: () => import('./assign-company.component.vue'), 
    meta: {
      title: 'Assign Company'
    }

  },
  {
    path: prefix+"/code/view/:id",
    name: 'event-qr-code',
    component: () => import('./qr.component.vue'),
    meta: {
      title: 'QR CODE'
    }

  },
];
