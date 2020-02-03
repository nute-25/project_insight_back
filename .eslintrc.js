module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "./src/node_modules/eslint-config-google"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", 4],
        "camelcase": "off",
        "object-curly-spacing": ["error","always"],
        "brace-style": ["error", "stroustrup"]
    }
};