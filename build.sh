#!/bin/sh

sprocketize -C js all.files.js > js/all.js
java -jar vendor/closure_compiler/compiler.jar --js js/all.js --js_output_file js/all.compiled.js --compilation_level SIMPLE_OPTIMIZATIONS --summary_detail_level 3
