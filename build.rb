#!/usr/bin/env ruby

unless defined?(PROJECT_ROOT)
   PROJECT_ROOT = File.dirname(__FILE__)
end

def calc_deps
  js_path = File.join(PROJECT_ROOT, 'js')
  closure_path = File.join('lib', 'closure-library','closure')

  calcdeps_path = File.join(closure_path,'bin','calcdeps.py')

  sys_command = "python #{calcdeps_path}"

  sys_command << " -d #{closure_path} -o deps"

  app_path = File.join(js_path, 'application.js')
  sys_command << " -i #{app_path}"

  output_path = File.join(js_path, 'deps.js')

  ['box2d','demo'].each do |files_dir|
    sys_command << " -p #{File.join(js_path, files_dir)}"
  end

  sys_command << " --output_file=#{output_path}"

  #python path-to-closure-library/closure/bin/calcdeps.py -i path-to-your-src/requirements.js -o deps -d path-to-closure-library/closure/ -p path-to-your-src/ --output_file=path-to-your-src/deps.js

  puts sys_command
  `#{sys_command}`
end

calc_deps
