#!/usr/bin/env python

import os
from _tools.ClosureShared import Closure

js_path = "js"
js_dirs = map(lambda dir: os.path.join(js_path, dir), ['box2d','demo'])
application_js_path = os.path.join(js_path, 'application.js')

closure = Closure(
  application_js_path = application_js_path,
  closure_dependencies = js_dirs + [application_js_path],
  deps_js_path = os.path.join(js_path, "deps.js"),
  compiled_js_path = os.path.join(js_path, "compiled.js"),
  extern_dir = os.path.join(js_path, 'externs')
)

closure.build()
