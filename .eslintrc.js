module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": [
        "./src/node_modules/eslint-config-google/index.js"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018
    },
    "rules": {
        "indent": ["error", 4, { "SwitchCase": 1 }],
        "camelcase": "off",
        "object-curly-spacing": ["error", "always"],
        "brace-style": ["error", "stroustrup"],
        "max-len": ["error", { "code": 120 }],
        "operator-linebreak": ["error", "before"],
        "no-console": ["error", { allow: ["warn", "error"] }],
    }
};