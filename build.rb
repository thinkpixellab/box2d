#!/usr/bin/env ruby

unless defined?(PROJECT_ROOT)
   PROJECT_ROOT = File.dirname(__FILE__)
end

JS_PATH = File.join(PROJECT_ROOT, 'js')
CLOSURE_PATH = File.join('lib', 'closure-library', 'closure')
JAR_PATH = File.join(PROJECT_ROOT, 'vendor', 'closure_compiler', 'compiler.jar')
JS_FILE_DIRS = ['box2d', 'demo']

def make_deps

  calcdeps_path = File.join(CLOSURE_PATH, 'bin', 'calcdeps.py')

  sys_command = "python #{calcdeps_path}"

  JS_FILE_DIRS.each do |files_dir|
    sys_command << " --path #{File.join(JS_PATH, files_dir)}"
  end

  sys_command << " --dep #{CLOSURE_PATH}"

  output_path = File.join(JS_PATH, 'deps.js')

  sys_command << " --output_mode deps"
  sys_command << " --output_file=#{output_path}"

  puts sys_command
  `#{sys_command}`
end

def init_compile
  output_path = File.join(JS_PATH, 'compiled.js')

  files = []
  files << 'js/application.js'
  JS_FILE_DIRS.each do |js_dir|
    js_dir = File.join(JS_PATH, js_dir)
    files.concat(Dir["#{js_dir}/**/*.js"])
  end

  files << "lib/closure-library/closure/goog/base.js"

  compile(output_path, files)
end

def compile(output_file, js_file_paths)
  sys_command = "java -jar #{JAR_PATH}"

  js_file_paths.each do |file|
    sys_command << " --js #{file}"
  end

  sys_command << " --js_output_file #{output_file} --compilation_level ADVANCED_OPTIMIZATIONS --summary_detail_level 3 --debug true --warning_level VERBOSE --manage_closure_dependencies true"
  #sys_command << " --js_output_file #{output_file}"

  # look at tree
  # sys_command << "  --js_output_file #{compiled_output_path}.tree --compilation_level ADVANCED_OPTIMIZATIONS --print_tree true"

  # easy way to see help
  # sys_command = "java -jar #{JAR_PATH} --help"

  puts sys_command.inspect
  `#{sys_command}`
end


make_deps
