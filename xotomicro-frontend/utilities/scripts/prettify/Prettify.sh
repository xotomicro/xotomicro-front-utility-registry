#!/usr/bin

echo ""
echo "------ [ PRETTIFY ] IN PROCESS! :)"
echo ""

prettier "**/*.{js,jsx,ts,tsx,json,scss,css}" -f codeframe --ignore-path /.gitignore --write

echo ""
echo "------- [ PRETTIFY ] COMPLETED ✅"
echo ""
