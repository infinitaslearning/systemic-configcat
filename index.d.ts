import { Component } from 'systemic';
import * as configcat from 'configcat-node';
declare type Config = {
    key: string;
};
declare type ConfigCatClient = ReturnType<typeof configcat.createClient>;
declare const _default: () => Component<ConfigCatClient, {
    config: Config;
}>;
export default _default;
