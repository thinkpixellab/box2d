#!/usr/bin/env ruby

unless defined?(PROJECT_ROOT)
   PROJECT_ROOT = File.dirname(__FILE__)
end

JS_PATH = File.join(PROJECT_ROOT, 'js')
CLOSURE_PATH = File.join('lib', 'closure-library', 'closure')
JAR_PATH = File.join(PROJECT_ROOT, 'vendor', 'closure_compiler', 'compiler.jar')
JS_DIRS = ['box2d', 'demo']

def calc_deps(compile = false)

  calcdeps_path = File.join(CLOSURE_PATH, 'bin', 'calcdeps.py')

  sys_command = "python #{calcdeps_path}"


  if(compile)
    # only relavant for list and script output
    app_path = File.join(JS_PATH, 'application.js')
    sys_command << " -i #{app_path}"

    output_path = File.join(JS_PATH, 'compiled.js');
    sys_command << " --output_mode compiled"

    sys_command << " --compiler_jar #{JAR_PATH}"

    files = []
    JS_DIRS.each do |files_dir|
      files_dir = File.join(JS_PATH, files_dir)
      files.concat(Dir["#{files_dir}/**/*.js"])
    end

    files.each do |js_file|
      sys_command << " --dep #{js_file}"
    end

    {
      'compilation_level' => 'ADVANCED_OPTIMIZATIONS',
      'manage_closure_dependencies' => 'true',
      'summary_detail_level' => '3',
      'debug' => 'true',
      'warning_level' => 'VERBOSE'
    }.each do |key, value|
      sys_command << " --compiler_flag --#{key}=#{value}"
    end
  else
    JS_DIRS.each do |files_dir|
      sys_command << " --path #{File.join(JS_PATH, files_dir)}"
    end

    sys_command << " --dep #{CLOSURE_PATH}"

    output_path = File.join(JS_PATH, 'deps.js')

    sys_command << " --output_mode deps"

  end

  sys_command << " --output_file=#{output_path}"

  puts sys_command
  `#{sys_command}`
end

calc_deps
