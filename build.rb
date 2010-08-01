#!/usr/bin/env ruby

unless defined?(PROJECT_ROOT)
   PROJECT_ROOT = File.dirname(__FILE__)
end

JS_PATH = File.join(PROJECT_ROOT, 'js')
CLOSURE_PATH = File.join('lib', 'closure-library', 'closure')
JAR_PATH = File.join(PROJECT_ROOT, 'vendor', 'closure_compiler', 'compiler.jar')
JS_FILE_DIRS = ['box2d', 'demo'].collect{ |dir| File.join(JS_PATH, dir)}

def make_deps

  calcdeps_path = File.join(CLOSURE_PATH, 'bin', 'calcdeps.py')

  sys_command = "python #{calcdeps_path}"

  JS_FILE_DIRS.each do |files_dir|
    sys_command << " --path #{files_dir}"
  end

  sys_command << " --path #{File.join(JS_PATH, 'application.js')}"

  sys_command << " --dep #{CLOSURE_PATH}"

  output_path = File.join(JS_PATH, 'deps.js')

  sys_command << " --output_mode deps"
  sys_command << " --output_file=#{output_path}"

  return sys_command
end

def compile
  output_path = File.join(JS_PATH, 'compiled.js')

  files = []
  goog_js_dir = File.join(CLOSURE_PATH, 'goog')
  files.concat Dir["#{goog_js_dir}/**/*.js"].select{ |file| !file.include? 'demos' }

  JS_FILE_DIRS.each do |js_dir|
    files.concat(Dir["#{js_dir}/**/*.js"])
  end

  files << 'js/application.js'

  return create_compile(output_path, files)
end

def create_compile(output_file, js_file_paths)
  sys_command = "java -jar #{JAR_PATH}"

  js_file_paths.each do |file|
    sys_command << " --js #{file}"
  end

  sys_command << " --js_output_file #{output_file}"
  sys_command << " --compilation_level ADVANCED_OPTIMIZATIONS"
  sys_command << " --summary_detail_level 3"
  sys_command << " --debug true"
  sys_command << " --warning_level VERBOSE"
  sys_command << " --manage_closure_dependencies true"
  sys_command << " --jscomp_dev_mode EVERY_PASS"

  sys_command << " --formatting PRETTY_PRINT"
  sys_command << " --formatting PRINT_INPUT_DELIMITER"

  return sys_command
end

def show_help
  # easy way to see help
  return "java -jar #{JAR_PATH} --help"
end

command = compile

puts command.inspect
exec command
