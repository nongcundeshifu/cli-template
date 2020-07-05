module.exports = {
    '{src,tests}/**/*.{ts,js}': [
        'eslint --fix',
        'prettier-eslint --ignore-path .eslintignore --write',
        'git add',
    ],
}
