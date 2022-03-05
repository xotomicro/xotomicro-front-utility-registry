#!/usr/bin

echo ""
echo "------ [ STYLELINT ] IN PROCESS! :)"
echo ""

stylelint "**/*.scss" --config .stylelintrc.js --cache --cache-location 'node_modules/.cache/stylelint/' --fix

echo ""
echo "------- [ STYLELINT ] COMPLETED ✅"
echo ""
