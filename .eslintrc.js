module.exports = {
    root: true,
    //环境
    env: {
        commonjs: true,
        es6: true,
        node: true,
    },

    extends: [
        'plugin:@typescript-eslint/recommended',
        //避免与 prettier 冲突
        'plugin:prettier/recommended',
    ],

    rules: {
        // 自行覆盖规则
    },

    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],

    // 指定需要进行校验的目录
    overrides: [
        {
            files: ['src/**/*.{ts,js}', 'tests/**/*.{ts,js}'],
        },
    ],
}
