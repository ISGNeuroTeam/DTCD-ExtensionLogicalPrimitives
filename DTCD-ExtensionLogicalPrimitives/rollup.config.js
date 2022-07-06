import { nodeResolve } from '@rollup/plugin-node-resolve';
import img from '@rollup/plugin-image';
import json from '@rollup/plugin-json';
import { version } from './package.json';

const watch = Boolean(process.env.ROLLUP_WATCH);

const pluginName = 'ExtensionLogicalPrimitives';

const output = watch
  ? `./../../DTCD/server/plugins/DTCD-${pluginName}_${version}/${pluginName}.js`
  : `./build/${pluginName}.js`;

const plugins = [json(), nodeResolve(), img()];

export default {
  input: `./src/${pluginName}.js`,
  output: {
    file: output,
    format: 'esm',
    sourcemap: false,
  },
  watch: {
    include: ['./src/**/*'],
  },
  plugins,
};
