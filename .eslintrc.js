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
        /**
         * 禁止不需要的括号，例如 const i = (1 + 1)，但该规则存在的问题是会认为类两侧的圆括号也是不合法的
         * 例如: billId => (StringValidator.isBlank(billId) ? '否' : '是')
         */
        // 'no-extra-parens': 'error',
        /**
         * 禁止魔法值，该规则的主要问题是很多误报
         * 例如: offset / size + (offset % size === 0 ? 0 : 1)
         */
        'no-magic-numbers': 'off',

        //禁止使用 var，强制要求使用 const/let
        'no-var': 'error',
        //不使用未定义的变量
        'no-use-before-define': 'error',
        //不允许在循环中使用 await，请使用 Promise.all
        'no-await-in-loop': 'error',
        //不允许使用 return await，直接返回 Promise 就好
        'no-return-await': 'error',
        //禁止使用 new Function 创建函数
        'no-new-func': 'error',
        //禁止使用包装类 String, Number, Boolean
        'no-new-wrappers': 'error',
        //禁止把语句作为计算结果返回，请使用两条语句
        'no-return-assign': 'error',
        //禁止使用不应该的 concat 连接，字符串请使用 + 连接，数组则可以使用 [...arr1, ...arr2]
        'no-useless-concat': 'error',
        //禁止 yoda 比较，不要用 1 === i 而是用 i === 1 更加自然
        yoda: 'error',
        //禁止没有用的三元运算符，就算是 ⑨ 也知道这样做有问题 answer === 1 ? true : false
        'no-unneeded-ternary': 'error',
        //禁止无用的计算属性 const obj = { ['1']: 1 }
        'no-useless-computed-key': 'error',
        //如果可以使用解构，那就进行警告，例如 const name = user.name 就应该被替换为 const { name } = user，避免了重复声明，也能进行默认赋值等操作
        'prefer-destructuring': 'warn',
        //使用 rest 不定参数代替全局变量 arguments
        'prefer-rest-params': 'error',
        //使用扩展运算符代替 apply 调用
        'prefer-spread': 'error',
        //使用 Symbol 必须使用描述说明它要做什么
        'symbol-description': 'error',
        //如果可以使用反射，那就是用反射调用，Reflect 代替 delete 关键字删除对象属性
        'prefer-reflect': 'warn',
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
