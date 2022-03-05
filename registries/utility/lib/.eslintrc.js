const off = "off"
const error = "error"
// const warn = process.argv.includes("--report-unused-disable-directives") ? error : "warn";

module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
        "plugin:@typescript-eslint/eslint-recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
        "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    ],
    parser: "@typescript-eslint/parser", // Specifies the ESLint parser
    env: {
        browser: true,
        es6: true,
        jest: true,
        node: true,
    },
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: "module", // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
            arrowFunctions: true,
        },
    },
    plugins: ["react", "@typescript-eslint", "prettier", "import"],
    settings: {
        react: {
            version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
    rules: {
        "prettier/prettier": [
            error,
            {
                endOfLine: "auto",
                usePrettierrc: true,
            },
        ],
        // Existing rules
        "comma-dangle": off, // https://eslint.org/docs/rules/comma-dangle
        "import/no-unresolved": error,
        "function-paren-newline": off, // https://eslint.org/docs/rules/function-paren-newline
        "global-require": off, // https://eslint.org/docs/rules/global-require
        "import/no-dynamic-require": off, // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
        "no-inner-declarations": off, // https://eslint.org/docs/rules/no-inner-declarations

        // New rules
        "class-methods-use-this": off,
        "import/extensions": off,
        "import/prefer-default-export": off,
        "@typescript-eslint/explicit-function-return-type": off,
        "@typescript-eslint/no-var-requires": off,
        "@typescript-eslint/explicit-module-boundary-types": off,
        "@typescript-eslint/no-unused-vars": off,
        "@typescript-eslint/no-explicit-any": off,
        "@typescript-eslint/ban-ts-comment": off,
        "@typescript-eslint/no-empty-interface": off,
        "@typescript-eslint/ban-types": off,
    },
}
