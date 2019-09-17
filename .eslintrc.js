module.exports = {
    "extends": ["standard", "plugin:jest/recommended"],
    parserOptions: {
        sourceType: 'module',
        "ecmaVersion": 6,

    },
    rules: {
        'generator-star-spacing': 'off',
        'space-before-function-paren': ["error", "never"],
        'indent': 'off',
        "semi": [0],

    }

};
