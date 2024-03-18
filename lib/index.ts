import { Component } from 'systemic'
import { getClient } from 'configcat-node'
import type { IConfigCatClient } from 'configcat-node'

type Config = {
  key: string
}
export type ConfigCatClient = IConfigCatClient;

export default (): Component<ConfigCatClient, { config: Config }> => {
  let configcatClient: ConfigCatClient;
  return {
    start: async ({ config }) => {

      if (!config?.key) {
        throw new Error('config.key is required');
      }

      configcatClient = getClient(config.key)
      return configcatClient;
    },
    stop: async () => {
      if (configcatClient) {
        configcatClient.dispose();
      }
    },
  }
};

export const configCatMock = ({
  getValueAsync = jest.fn(),
  getAllKeysAsync = jest.fn(),
  getAllValuesAsync = jest.fn(),
  setDefaultUser = jest.fn(),
  clearDefaultUser = jest.fn(),
} = {}): Pick<ConfigCatClient, 'getValueAsync' | 'getAllKeysAsync' | 'getAllValuesAsync' | 'setDefaultUser' | 'clearDefaultUser'> => ({
  getValueAsync, getAllKeysAsync, getAllValuesAsync, setDefaultUser, clearDefaultUser
});