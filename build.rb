#!/usr/bin/env ruby

unless defined?(PROJECT_ROOT)
   PROJECT_ROOT = File.dirname(__FILE__)
end

def calc_deps(compile = false)
  js_path = File.join(PROJECT_ROOT, 'js')
  closure_path = File.join('lib', 'closure-library', 'closure')

  calcdeps_path = File.join(closure_path, 'bin', 'calcdeps.py')

  sys_command = "python #{calcdeps_path}"

  js_dirs = ['box2d', 'demo']

  if(compile)
    # only relavant for list and script output
    app_path = File.join(js_path, 'application.js')
    sys_command << " -i #{app_path}"

    output_path = File.join(js_path, 'compiled.js');
    sys_command << " --output_mode compiled"

    jar_path = File.join(PROJECT_ROOT, 'vendor', 'closure_compiler', 'compiler.jar')
    sys_command << " --compiler_jar #{jar_path}"

    files = []
    js_dirs.each do |files_dir|
      files_dir = File.join(js_path, files_dir)
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
    js_dirs.each do |files_dir|
      sys_command << " --path #{File.join(js_path, files_dir)}"
    end

    sys_command << " --dep #{closure_path}"

    output_path = File.join(js_path, 'deps.js')

    sys_command << " --output_mode deps"

  end

  sys_command << " --output_file=#{output_path}"

  puts sys_command
  `#{sys_command}`
end

calc_deps
