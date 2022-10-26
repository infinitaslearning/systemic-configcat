import { Component } from 'systemic'
import * as configcat from 'configcat-node'

type Config = {
  key: string
}
type ConfigCatClient = ReturnType<typeof configcat.createClient>

export default (): Component<ConfigCatClient, { config: Config }> => {
  let configcatClient: ConfigCatClient;
  return {
    start: async ({ config }) => {

      if (!config || !config.key) {
        throw new Error('config.key is required');
      }

      configcatClient = configcat.createClient(config.key)
      return configcatClient;
    },
    stop: async () => {
      configcatClient.dispose();
    },
  }
};
