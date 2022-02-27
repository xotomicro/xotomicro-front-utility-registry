#!/usr/bin

echo ""
echo "------ [ LINTING ] IN PROCESS! 🍎"
echo ""

eslint "**/*.{js,jsx,ts,tsx}" -f codeframe --ignore-path .eslintignore --fix --cache --cache-location 'node_modules/.cache/eslint/'

echo ""
echo "------- [ LINTING ] COMPLETED  ✅"
echo ""
