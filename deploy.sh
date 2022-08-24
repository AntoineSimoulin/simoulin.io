#!/bin/sh

mkdir ./.cache
origin=$(git remote get-url origin)
echo "Cloning $origin into ./.cache/"
git clone $origin ./.cache/ >/dev/null 2>&1
git -C ./.cache/ fetch >/dev/null 2>&1
echo "Fetching origin"
git -C ./.cache/ checkout gh-pages >/dev/null 2>&1
echo "Removing files"
rm -Rf ./.cache/* >/dev/null 2>&1
echo "Copying files"
cp -R dist/* ./.cache
# echo "Adding submodules"
# git -C ./.cache/ submodule add https://github.com/hakimel/reveal.js.git slides/lecture_1
# git -C ./.cache/ submodule add https://github.com/hakimel/reveal.js.git slides/lecture_2
# git -C ./.cache/ submodule add https://github.com/hakimel/reveal.js.git slides/lecture_3
# git -C ./.cache/ submodule add https://github.com/hakimel/reveal.js.git slides/lecture_4
git -C ./.cache/ add --all
git -C ./.cache/ commit -am "Updates"
git -C ./.cache/ push
rm -rf ./.cache
