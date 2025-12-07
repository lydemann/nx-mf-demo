import { Route } from '@angular/router';
import { loadRemote } from '@module-federation/enhanced/runtime';

export const appRoutes: Route[] = [
  {
    path: 'login',
    loadChildren: () =>
      loadRemote<typeof import('login/Routes')>('login/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
  {
    path: 'remote',
    loadChildren: () =>
      loadRemote<typeof import('remote/Routes')>('remote/Routes').then(
        (m) => m!.remoteRoutes
      ),
  },
];
