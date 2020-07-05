/**  time:2020/4/3
 *   作者:农村的师傅
 *   功能:
 */
import typescript from 'rollup-plugin-typescript2'
import json from 'rollup-plugin-json'
import { resolve } from 'path'
import { name } from './package.json'

export default {
    // 入口文件
    input: resolve(__dirname, 'src/index.ts'),
    output: {
        // 打包名称
        name,
        // 文件顶部信息
        banner: '#!/usr/bin/env node',
        file: resolve(__dirname, `bin/cli-template.js`),
        format: 'cjs',
    },
    plugins: [
        typescript(),
        json({
            include: ['src/**', 'package.json'],
        }),
    ],
}
