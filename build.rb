#!/usr/bin/env ruby

def enum_sprocket_file(file_path)
  files = []
  
  dir_path = File.dirname(file_path)
  lines = IO.readlines(file_path)
  lines.each do |line|
    result = process_line(line)
    if(result)
      result = File.join(dir_path, "#{result}.js")
      files.concat enum_sprocket_file(result)
    else
      files << file_path
      break
    end
  end
  
  return files
end

def process_line(line)
  result = line.match(/\/\/= require <(.*)>/)
  if(result)
    return result[1]
  else
    return nil
  end
end

files = enum_sprocket_file('js/all.files.js')

sys_call = "java -jar vendor/closure_compiler/compiler.jar"

files.each { |file| sys_call << " --js #{file}"}

sys_call << " --js_output_file js/all.compiled.js --compilation_level SIMPLE_OPTIMIZATIONS  --summary_detail_level 3"

`#{sys_call}`
