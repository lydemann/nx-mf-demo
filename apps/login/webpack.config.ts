import {
  NxModuleFederationPlugin,
  NxModuleFederationDevServerPlugin,
} from '@nx/module-federation/angular';
import config from './module-federation.config';

export default {
  plugins: [
    new NxModuleFederationPlugin(
      { config },
      {
        dts: false,
      }
    ),
    new NxModuleFederationDevServerPlugin({ config }),
  ],
};
