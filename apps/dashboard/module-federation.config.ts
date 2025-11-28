import { ModuleFederationConfig } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'dashboard',
  // Dynamic federation: remotes are registered at runtime from module-federation.manifest.json
  remotes: [],
};

export default config;
