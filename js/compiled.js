// Input 0
function $JSCompiler_emptyFn$$() {
  return function() {
  }
}
function $JSCompiler_get$$($JSCompiler_get_name$$) {
  return function() {
    return this[$JSCompiler_get_name$$]
  }
}
function $JSCompiler_returnArg$$($JSCompiler_returnArg_value$$) {
  return function() {
    return $JSCompiler_returnArg_value$$
  }
}
var $a$$;
// Input 1
function $goog$inherits$$($childCtor$$, $parentCtor$$) {
  function $tempCtor$$() {
  }
  $tempCtor$$.prototype = $parentCtor$$.prototype;
  $childCtor$$.$superClass_$ = $parentCtor$$.prototype;
  $childCtor$$.prototype = new $tempCtor$$
}
;
// Input 2
function $b2Bound$$() {
}
$b2Bound$$.prototype = {$IsLower$:function $$b2Bound$$$$$IsLower$$() {
  return(this.value & 1) == 0
}, $IsUpper$:function $$b2Bound$$$$$IsUpper$$() {
  return(this.value & 1) == 1
}, $Swap$:function $$b2Bound$$$$$Swap$$($b$$) {
  var $tempValue$$ = this.value, $tempProxyId$$ = this.$proxyId$, $tempStabbingCount$$ = this.$stabbingCount$;
  this.value = $b$$.value;
  this.$proxyId$ = $b$$.$proxyId$;
  this.$stabbingCount$ = $b$$.$stabbingCount$;
  $b$$.value = $tempValue$$;
  $b$$.$proxyId$ = $tempProxyId$$;
  $b$$.$stabbingCount$ = $tempStabbingCount$$
}, value:0, $proxyId$:0, $stabbingCount$:0};
// Input 3
function $b2BoundValues$$() {
  this.$lowerValues$ = [0, 0];
  this.$upperValues$ = [0, 0]
}
;
// Input 4
function $b2BufferedPair$$() {
}
$b2BufferedPair$$.prototype = {$proxyId1$:0, $proxyId2$:0};
// Input 5
// Input 6
function $b2PairCallback$$() {
}
$b2PairCallback$$.prototype.$PairAdded$ = $JSCompiler_returnArg$$(null);
$b2PairCallback$$.prototype.$PairRemoved$ = $JSCompiler_emptyFn$$();
// Input 7
function $Features$$() {
}
$Features$$.prototype = {$_referenceFace$:0, $_incidentEdge$:0, $_incidentVertex$:0, $_flip$:0, $_m_id$:null};
// Input 8
function $b2ContactID$$() {
  this.$features$ = new $Features$$;
  this.$features$.$_m_id$ = this
}
$b2ContactID$$.prototype = {$Set$:function $$b2ContactID$$$$$Set$$($id$$1$$) {
  this.$set_key$($id$$1$$.$_key$)
}, $Copy$:function $$b2ContactID$$$$$Copy$$() {
  var $id$$2$$ = new $b2ContactID$$;
  $id$$2$$.$set_key$(this.$_key$);
  return $id$$2$$
}, $set_key$:function $$b2ContactID$$$$$set_key$$($value$$16$$) {
  this.$_key$ = $value$$16$$;
  this.$features$.$_referenceFace$ = this.$_key$ & 255;
  this.$features$.$_incidentEdge$ = (this.$_key$ & 65280) >> 8 & 255;
  this.$features$.$_incidentVertex$ = (this.$_key$ & 16711680) >> 16 & 255;
  this.$features$.$_flip$ = (this.$_key$ & 4278190080) >> 24 & 255
}, $features$:new $Features$$, $_key$:0};
// Input 9
function $b2ShapeDef$$() {
  this.type = $b2Shape$e_unknownShape$$;
  this.$userData$ = null;
  this.$localPosition$ = new $b2Vec2$$(0, 0);
  this.$localRotation$ = 0;
  this.$friction$ = 0.2;
  this.$density$ = this.$restitution$ = 0;
  this.$categoryBits$ = 1;
  this.$maskBits$ = 65535;
  this.$groupIndex$ = 0
}
$a$$ = $b2ShapeDef$$.prototype;
$a$$.type = 0;
$a$$.$userData$ = null;
$a$$.$localPosition$ = null;
$a$$.$localRotation$ = null;
$a$$.$friction$ = null;
$a$$.$restitution$ = null;
$a$$.$density$ = null;
$a$$.$categoryBits$ = 0;
$a$$.$maskBits$ = 0;
$a$$.$groupIndex$ = 0;
// Input 10
var $b2Settings$b2_pi$$ = Math.PI, $b2Settings$b2_angularSlop$$ = 2 / 180 * $b2Settings$b2_pi$$, $b2Settings$b2_maxAngularCorrection$$ = 8 / 180 * $b2Settings$b2_pi$$, $b2Settings$b2_angularSleepTolerance$$ = 2 / 180 / 1;
// Input 11
function $b2Pair$$() {
}
$b2Pair$$.prototype = {$SetBuffered$:function $$b2Pair$$$$$SetBuffered$$() {
  this.status |= $b2Pair$e_pairBuffered$$
}, $ClearBuffered$:function $$b2Pair$$$$$ClearBuffered$$() {
  this.status &= ~$b2Pair$e_pairBuffered$$
}, $IsBuffered$:function $$b2Pair$$$$$IsBuffered$$() {
  return(this.status & $b2Pair$e_pairBuffered$$) == $b2Pair$e_pairBuffered$$
}, $SetRemoved$:function $$b2Pair$$$$$SetRemoved$$() {
  this.status |= $b2Pair$e_pairRemoved$$
}, $ClearRemoved$:function $$b2Pair$$$$$ClearRemoved$$() {
  this.status &= ~$b2Pair$e_pairRemoved$$
}, $IsRemoved$:function $$b2Pair$$$$$IsRemoved$$() {
  return(this.status & $b2Pair$e_pairRemoved$$) == $b2Pair$e_pairRemoved$$
}, $SetFinal$:function $$b2Pair$$$$$SetFinal$$() {
  this.status |= $b2Pair$e_pairFinal$$
}, $IsFinal$:function $$b2Pair$$$$$IsFinal$$() {
  return(this.status & $b2Pair$e_pairFinal$$) == $b2Pair$e_pairFinal$$
}, $userData$:null, $proxyId1$:0, $proxyId2$:0, next:0, status:0};
var $b2Pair$e_pairBuffered$$ = 1, $b2Pair$e_pairRemoved$$ = 2, $b2Pair$e_pairFinal$$ = 4;
// Input 12
function $b2PairManager$$() {
  var $i$$6$$ = 0;
  this.$m_hashTable$ = Array(8192);
  for($i$$6$$ = 0;$i$$6$$ < 8192;++$i$$6$$) {
    this.$m_hashTable$[$i$$6$$] = 65535
  }
  this.$m_pairs$ = Array(8192);
  for($i$$6$$ = 0;$i$$6$$ < 8192;++$i$$6$$) {
    this.$m_pairs$[$i$$6$$] = new $b2Pair$$
  }
  this.$m_pairBuffer$ = Array(8192);
  for($i$$6$$ = 0;$i$$6$$ < 8192;++$i$$6$$) {
    this.$m_pairBuffer$[$i$$6$$] = new $b2BufferedPair$$
  }
  for($i$$6$$ = 0;$i$$6$$ < 8192;++$i$$6$$) {
    this.$m_pairs$[$i$$6$$].$proxyId1$ = 65535;
    this.$m_pairs$[$i$$6$$].$proxyId2$ = 65535;
    this.$m_pairs$[$i$$6$$].$userData$ = null;
    this.$m_pairs$[$i$$6$$].status = 0;
    this.$m_pairs$[$i$$6$$].next = $i$$6$$ + 1
  }
  this.$m_pairs$[8191].next = 65535;
  this.$m_pairCount$ = 0
}
$b2PairManager$$.prototype = {$Initialize$:function $$b2PairManager$$$$$Initialize$$($broadPhase$$, $callback$$22$$) {
  this.$m_broadPhase$ = $broadPhase$$;
  this.$m_callback$ = $callback$$22$$
}, $AddBufferedPair$:function $$b2PairManager$$$$$AddBufferedPair$$($proxyId1$$, $proxyId2$$) {
  var $pair$$ = this.$AddPair$($proxyId1$$, $proxyId2$$);
  if($pair$$.$IsBuffered$() == false) {
    $pair$$.$SetBuffered$();
    this.$m_pairBuffer$[this.$m_pairBufferCount$].$proxyId1$ = $pair$$.$proxyId1$;
    this.$m_pairBuffer$[this.$m_pairBufferCount$].$proxyId2$ = $pair$$.$proxyId2$;
    ++this.$m_pairBufferCount$
  }
  $pair$$.$ClearRemoved$()
}, $RemoveBufferedPair$:function $$b2PairManager$$$$$RemoveBufferedPair$$($proxyId1$$1$$, $proxyId2$$1$$) {
  var $pair$$1$$ = this.$Find$($proxyId1$$1$$, $proxyId2$$1$$);
  if($pair$$1$$ != null) {
    if($pair$$1$$.$IsBuffered$() == false) {
      $pair$$1$$.$SetBuffered$();
      this.$m_pairBuffer$[this.$m_pairBufferCount$].$proxyId1$ = $pair$$1$$.$proxyId1$;
      this.$m_pairBuffer$[this.$m_pairBufferCount$].$proxyId2$ = $pair$$1$$.$proxyId2$;
      ++this.$m_pairBufferCount$
    }
    $pair$$1$$.$SetRemoved$()
  }
}, $Commit$:function $$b2PairManager$$$$$Commit$$() {
  var $i$$7$$ = 0, $removeCount$$ = 0, $proxies$$ = this.$m_broadPhase$.$m_proxyPool$;
  for($i$$7$$ = 0;$i$$7$$ < this.$m_pairBufferCount$;++$i$$7$$) {
    var $pair$$2$$ = this.$Find$(this.$m_pairBuffer$[$i$$7$$].$proxyId1$, this.$m_pairBuffer$[$i$$7$$].$proxyId2$);
    $pair$$2$$.$ClearBuffered$();
    var $proxy1$$ = $proxies$$[$pair$$2$$.$proxyId1$], $proxy2$$ = $proxies$$[$pair$$2$$.$proxyId2$];
    if($pair$$2$$.$IsRemoved$()) {
      $pair$$2$$.$IsFinal$() == true && this.$m_callback$.$PairRemoved$($proxy1$$.$userData$, $proxy2$$.$userData$, $pair$$2$$.$userData$);
      this.$m_pairBuffer$[$removeCount$$].$proxyId1$ = $pair$$2$$.$proxyId1$;
      this.$m_pairBuffer$[$removeCount$$].$proxyId2$ = $pair$$2$$.$proxyId2$;
      ++$removeCount$$
    }else {
      if($pair$$2$$.$IsFinal$() == false) {
        $pair$$2$$.$userData$ = this.$m_callback$.$PairAdded$($proxy1$$.$userData$, $proxy2$$.$userData$);
        $pair$$2$$.$SetFinal$()
      }
    }
  }
  for($i$$7$$ = 0;$i$$7$$ < $removeCount$$;++$i$$7$$) {
    this.$RemovePair$(this.$m_pairBuffer$[$i$$7$$].$proxyId1$, this.$m_pairBuffer$[$i$$7$$].$proxyId2$)
  }
  this.$m_pairBufferCount$ = 0
}, $AddPair$:function $$b2PairManager$$$$$AddPair$$($proxyId1$$2$$, $proxyId2$$2$$) {
  if($proxyId1$$2$$ > $proxyId2$$2$$) {
    var $hash_temp$$ = $proxyId1$$2$$;
    $proxyId1$$2$$ = $proxyId2$$2$$;
    $proxyId2$$2$$ = $hash_temp$$
  }
  $hash_temp$$ = $b2PairManager$Hash$$($proxyId1$$2$$, $proxyId2$$2$$) & 8191;
  var $pair$$3$$ = $pair$$3$$ = this.$FindHash$($proxyId1$$2$$, $proxyId2$$2$$, $hash_temp$$);
  if($pair$$3$$ != null) {
    return $pair$$3$$
  }
  var $pIndex$$ = this.$m_freePair$;
  $pair$$3$$ = this.$m_pairs$[$pIndex$$];
  this.$m_freePair$ = $pair$$3$$.next;
  $pair$$3$$.$proxyId1$ = $proxyId1$$2$$;
  $pair$$3$$.$proxyId2$ = $proxyId2$$2$$;
  $pair$$3$$.status = 0;
  $pair$$3$$.$userData$ = null;
  $pair$$3$$.next = this.$m_hashTable$[$hash_temp$$];
  this.$m_hashTable$[$hash_temp$$] = $pIndex$$;
  ++this.$m_pairCount$;
  return $pair$$3$$
}, $RemovePair$:function $$b2PairManager$$$$$RemovePair$$($proxyId1$$3$$, $proxyId2$$3$$) {
  if($proxyId1$$3$$ > $proxyId2$$3$$) {
    var $index$$34_temp$$1$$ = $proxyId1$$3$$;
    $proxyId1$$3$$ = $proxyId2$$3$$;
    $proxyId2$$3$$ = $index$$34_temp$$1$$
  }
  for(var $hash$$1_pair$$4$$ = $b2PairManager$Hash$$($proxyId1$$3$$, $proxyId2$$3$$) & 8191, $node$$2_userData$$ = this.$m_hashTable$[$hash$$1_pair$$4$$], $pNode$$ = null;$node$$2_userData$$ != 65535;) {
    if(this.$m_pairs$[$node$$2_userData$$].$proxyId1$ == $proxyId1$$3$$ && this.$m_pairs$[$node$$2_userData$$].$proxyId2$ == $proxyId2$$3$$) {
      $index$$34_temp$$1$$ = $node$$2_userData$$;
      if($pNode$$) {
        $pNode$$.next = this.$m_pairs$[$node$$2_userData$$].next
      }else {
        this.$m_hashTable$[$hash$$1_pair$$4$$] = this.$m_pairs$[$node$$2_userData$$].next
      }
      $hash$$1_pair$$4$$ = this.$m_pairs$[$index$$34_temp$$1$$];
      $node$$2_userData$$ = $hash$$1_pair$$4$$.$userData$;
      $hash$$1_pair$$4$$.next = this.$m_freePair$;
      $hash$$1_pair$$4$$.$proxyId1$ = 65535;
      $hash$$1_pair$$4$$.$proxyId2$ = 65535;
      $hash$$1_pair$$4$$.$userData$ = null;
      $hash$$1_pair$$4$$.status = 0;
      this.$m_freePair$ = $index$$34_temp$$1$$;
      --this.$m_pairCount$;
      return $node$$2_userData$$
    }else {
      $pNode$$ = this.$m_pairs$[$node$$2_userData$$];
      $node$$2_userData$$ = $pNode$$.next
    }
  }
  return null
}, $Find$:function $$b2PairManager$$$$$Find$$($proxyId1$$4$$, $proxyId2$$4$$) {
  if($proxyId1$$4$$ > $proxyId2$$4$$) {
    var $temp$$2$$ = $proxyId1$$4$$;
    $proxyId1$$4$$ = $proxyId2$$4$$;
    $proxyId2$$4$$ = $temp$$2$$
  }
  return this.$FindHash$($proxyId1$$4$$, $proxyId2$$4$$, $b2PairManager$Hash$$($proxyId1$$4$$, $proxyId2$$4$$) & 8191)
}, $FindHash$:function $$b2PairManager$$$$$FindHash$$($proxyId1$$5$$, $proxyId2$$5$$, $hash$$3_index$$35$$) {
  for($hash$$3_index$$35$$ = this.$m_hashTable$[$hash$$3_index$$35$$];$hash$$3_index$$35$$ != 65535 && (this.$m_pairs$[$hash$$3_index$$35$$].$proxyId1$ == $proxyId1$$5$$ && this.$m_pairs$[$hash$$3_index$$35$$].$proxyId2$ == $proxyId2$$5$$) == false;) {
    $hash$$3_index$$35$$ = this.$m_pairs$[$hash$$3_index$$35$$].next
  }
  if($hash$$3_index$$35$$ == 65535) {
    return null
  }
  return this.$m_pairs$[$hash$$3_index$$35$$]
}, $m_broadPhase$:null, $m_callback$:null, $m_pairs$:null, $m_freePair$:0, $m_pairCount$:0, $m_pairBuffer$:null, $m_pairBufferCount$:0, $m_hashTable$:null};
function $b2PairManager$Hash$$($proxyId1$$6$$, $proxyId2$$6$$) {
  var $key$$9$$ = $proxyId2$$6$$ << 16 & 4294901760 | $proxyId1$$6$$;
  $key$$9$$ = ~$key$$9$$ + ($key$$9$$ << 15 & 4294934528);
  $key$$9$$ ^= $key$$9$$ >> 12 & 1048575;
  $key$$9$$ += $key$$9$$ << 2 & 4294967292;
  $key$$9$$ ^= $key$$9$$ >> 4 & 268435455;
  $key$$9$$ *= 2057;
  $key$$9$$ ^= $key$$9$$ >> 16 & 65535;
  return $key$$9$$
}
;
// Input 13
function $b2Proxy$$() {
  this.$lowerBounds$ = [0, 0];
  this.$upperBounds$ = [0, 0]
}
$b2Proxy$$.prototype = {$GetNext$:function $$b2Proxy$$$$$GetNext$$() {
  return this.$lowerBounds$[0]
}, $SetNext$:function $$b2Proxy$$$$$SetNext$$($next$$) {
  this.$lowerBounds$[0] = $next$$
}, $IsValid$:function $$b2Proxy$$$$$IsValid$$() {
  return this.$overlapCount$ != 65535
}, $lowerBounds$:[0, 0], $upperBounds$:[0, 0], $overlapCount$:0, timeStamp:0, $userData$:null};
// Input 14
function $b2Mat22$$($angle$$1_s$$2$$, $c_c1$$, $c2$$) {
  if($angle$$1_s$$2$$ == null) {
    $angle$$1_s$$2$$ = 0
  }
  this.$col1$ = new $b2Vec2$$;
  this.$col2$ = new $b2Vec2$$;
  if($c_c1$$ != null && $c2$$ != null) {
    $JSCompiler_StaticMethods_SetV$$(this.$col1$, $c_c1$$);
    $JSCompiler_StaticMethods_SetV$$(this.$col2$, $c2$$)
  }else {
    $c_c1$$ = Math.cos($angle$$1_s$$2$$);
    $angle$$1_s$$2$$ = Math.sin($angle$$1_s$$2$$);
    this.$col1$.x = $c_c1$$;
    this.$col2$.x = -$angle$$1_s$$2$$;
    this.$col1$.y = $angle$$1_s$$2$$;
    this.$col2$.y = $c_c1$$
  }
}
$a$$ = $b2Mat22$$.prototype;
$a$$.$Set$ = function $$a$$$$Set$$($angle$$2_s$$3$$) {
  var $c$$1$$ = Math.cos($angle$$2_s$$3$$);
  $angle$$2_s$$3$$ = Math.sin($angle$$2_s$$3$$);
  this.$col1$.x = $c$$1$$;
  this.$col2$.x = -$angle$$2_s$$3$$;
  this.$col1$.y = $angle$$2_s$$3$$;
  this.$col2$.y = $c$$1$$
};
$a$$.$Copy$ = function $$a$$$$Copy$$() {
  return new $b2Mat22$$(0, this.$col1$, this.$col2$)
};
function $JSCompiler_StaticMethods_SetM$$($JSCompiler_StaticMethods_SetM$self$$, $m$$) {
  $JSCompiler_StaticMethods_SetV$$($JSCompiler_StaticMethods_SetM$self$$.$col1$, $m$$.$col1$);
  $JSCompiler_StaticMethods_SetV$$($JSCompiler_StaticMethods_SetM$self$$.$col2$, $m$$.$col2$)
}
function $JSCompiler_StaticMethods_AddM$$($JSCompiler_StaticMethods_AddM$self$$, $m$$1$$) {
  $JSCompiler_StaticMethods_AddM$self$$.$col1$.x += $m$$1$$.$col1$.x;
  $JSCompiler_StaticMethods_AddM$self$$.$col1$.y += $m$$1$$.$col1$.y;
  $JSCompiler_StaticMethods_AddM$self$$.$col2$.x += $m$$1$$.$col2$.x;
  $JSCompiler_StaticMethods_AddM$self$$.$col2$.y += $m$$1$$.$col2$.y
}
$a$$.$SetZero$ = function $$a$$$$SetZero$$() {
  this.$col1$.x = 0;
  this.$col2$.x = 0;
  this.$col1$.y = 0;
  this.$col2$.y = 0
};
function $JSCompiler_StaticMethods_Invert$$($JSCompiler_StaticMethods_Invert$self$$, $out$$) {
  var $a$$1$$ = $JSCompiler_StaticMethods_Invert$self$$.$col1$.x, $b$$1$$ = $JSCompiler_StaticMethods_Invert$self$$.$col2$.x, $c$$2$$ = $JSCompiler_StaticMethods_Invert$self$$.$col1$.y, $d$$ = $JSCompiler_StaticMethods_Invert$self$$.$col2$.y, $det$$ = $a$$1$$ * $d$$ - $b$$1$$ * $c$$2$$;
  $det$$ = 1 / $det$$;
  $out$$.$col1$.x = $det$$ * $d$$;
  $out$$.$col2$.x = -$det$$ * $b$$1$$;
  $out$$.$col1$.y = -$det$$ * $c$$2$$;
  $out$$.$col2$.y = $det$$ * $a$$1$$;
  return $out$$
}
$a$$.$Solve$ = function $$a$$$$Solve$$($out$$1$$, $bX$$1$$, $bY$$1$$) {
  var $a11$$ = this.$col1$.x, $a12$$ = this.$col2$.x, $a21$$ = this.$col1$.y, $a22$$ = this.$col2$.y, $det$$1$$ = $a11$$ * $a22$$ - $a12$$ * $a21$$;
  $det$$1$$ = 1 / $det$$1$$;
  $out$$1$$.x = $det$$1$$ * ($a22$$ * $bX$$1$$ - $a12$$ * $bY$$1$$);
  $out$$1$$.y = $det$$1$$ * ($a11$$ * $bY$$1$$ - $a21$$ * $bX$$1$$);
  return $out$$1$$
};
$a$$.$Abs$ = function $$a$$$$Abs$$() {
  this.$col1$.$Abs$();
  this.$col2$.$Abs$()
};
// Input 15
function $b2Math$b2Dot$$($a$$2$$, $b$$2$$) {
  return $a$$2$$.x * $b$$2$$.x + $a$$2$$.y * $b$$2$$.y
}
function $b2Math$b2MulMV$$($A$$, $v$$1$$) {
  return new $b2Vec2$$($A$$.$col1$.x * $v$$1$$.x + $A$$.$col2$.x * $v$$1$$.y, $A$$.$col1$.y * $v$$1$$.x + $A$$.$col2$.y * $v$$1$$.y)
}
function $b2Math$AddVV$$($a$$6$$, $b$$4$$) {
  return new $b2Vec2$$($a$$6$$.x + $b$$4$$.x, $a$$6$$.y + $b$$4$$.y)
}
function $b2Math$SubtractVV$$($a$$7$$, $b$$5$$) {
  return new $b2Vec2$$($a$$7$$.x - $b$$5$$.x, $a$$7$$.y - $b$$5$$.y)
}
function $b2Math$b2Abs$$($a$$9$$) {
  return $a$$9$$ > 0 ? $a$$9$$ : -$a$$9$$
}
function $b2Math$b2Max$$($a$$13$$, $b$$9$$) {
  return $a$$13$$ > $b$$9$$ ? $a$$13$$ : $b$$9$$
}
function $b2Math$b2Clamp$$($a$$15$$, $low$$, $high$$) {
  return $b2Math$b2Max$$($low$$, $a$$15$$ < $high$$ ? $a$$15$$ : $high$$)
}
;
// Input 16
function $b2Vec2$$($x_$$, $y_$$) {
  if($x_$$ === undefined) {
    $x_$$ = 0
  }
  this.x = $x_$$;
  if($y_$$ === undefined) {
    $y_$$ = 0
  }
  this.y = $y_$$
}
$a$$ = $b2Vec2$$.prototype;
$a$$.$SetZero$ = function $$a$$$$SetZero$$() {
  this.y = this.x = 0
};
$a$$.$Set$ = function $$a$$$$Set$$($x_$$1$$, $y_$$1$$) {
  this.x = $x_$$1$$;
  this.y = $y_$$1$$
};
function $JSCompiler_StaticMethods_SetV$$($JSCompiler_StaticMethods_SetV$self$$, $v$$3$$) {
  $JSCompiler_StaticMethods_SetV$self$$.x = $v$$3$$.x;
  $JSCompiler_StaticMethods_SetV$self$$.y = $v$$3$$.y
}
$a$$.$Copy$ = function $$a$$$$Copy$$() {
  return new $b2Vec2$$(this.x, this.y)
};
function $JSCompiler_StaticMethods_Add$$($JSCompiler_StaticMethods_Add$self$$, $v$$4$$) {
  $JSCompiler_StaticMethods_Add$self$$.x += $v$$4$$.x;
  $JSCompiler_StaticMethods_Add$self$$.y += $v$$4$$.y
}
function $JSCompiler_StaticMethods_Multiply$$($JSCompiler_StaticMethods_Multiply$self$$, $a$$18$$) {
  $JSCompiler_StaticMethods_Multiply$self$$.x *= $a$$18$$;
  $JSCompiler_StaticMethods_Multiply$self$$.y *= $a$$18$$
}
function $JSCompiler_StaticMethods_MulM$$($JSCompiler_StaticMethods_MulM$self$$, $A$$6$$) {
  var $tX$$ = $JSCompiler_StaticMethods_MulM$self$$.x;
  $JSCompiler_StaticMethods_MulM$self$$.x = $A$$6$$.$col1$.x * $tX$$ + $A$$6$$.$col2$.x * $JSCompiler_StaticMethods_MulM$self$$.y;
  $JSCompiler_StaticMethods_MulM$self$$.y = $A$$6$$.$col1$.y * $tX$$ + $A$$6$$.$col2$.y * $JSCompiler_StaticMethods_MulM$self$$.y
}
$a$$.$Abs$ = function $$a$$$$Abs$$() {
  this.x = Math.abs(this.x);
  this.y = Math.abs(this.y)
};
function $JSCompiler_StaticMethods_Length$$($JSCompiler_StaticMethods_Length$self$$) {
  return Math.sqrt($JSCompiler_StaticMethods_Length$self$$.x * $JSCompiler_StaticMethods_Length$self$$.x + $JSCompiler_StaticMethods_Length$self$$.y * $JSCompiler_StaticMethods_Length$self$$.y)
}
$a$$.$IsValid$ = function $$a$$$$IsValid$$() {
  return isFinite(this.x) && isFinite(this.y)
};
// Input 17
function $b2AABB$$() {
  this.$minVertex$ = new $b2Vec2$$;
  this.$maxVertex$ = new $b2Vec2$$
}
$b2AABB$$.prototype.$IsValid$ = function $$b2AABB$$$$$IsValid$$() {
  var $dX$$1_valid$$ = this.$maxVertex$.x, $dY$$1$$ = this.$maxVertex$.y;
  $dX$$1_valid$$ = this.$maxVertex$.x;
  $dY$$1$$ = this.$maxVertex$.y;
  $dX$$1_valid$$ -= this.$minVertex$.x;
  $dY$$1$$ -= this.$minVertex$.y;
  return $dX$$1_valid$$ = ($dX$$1_valid$$ = $dX$$1_valid$$ >= 0 && $dY$$1$$ >= 0) && this.$minVertex$.$IsValid$() && this.$maxVertex$.$IsValid$()
};
// Input 18
function $b2BroadPhase$$($worldAABB$$, $callback$$23$$) {
  this.$m_pairManager$ = new $b2PairManager$$;
  this.$m_proxyPool$ = Array(8192);
  this.$m_bounds$ = Array(2048);
  this.$m_queryResults$ = Array(1024);
  this.$m_quantizationFactor$ = new $b2Vec2$$;
  var $dX$$2_i$$8$$ = 0;
  this.$m_pairManager$.$Initialize$(this, $callback$$23$$);
  this.$m_worldAABB$ = $worldAABB$$;
  for($dX$$2_i$$8$$ = this.$m_proxyCount$ = 0;$dX$$2_i$$8$$ < 1024;$dX$$2_i$$8$$++) {
    this.$m_queryResults$[$dX$$2_i$$8$$] = 0
  }
  this.$m_bounds$ = Array(2);
  for($dX$$2_i$$8$$ = 0;$dX$$2_i$$8$$ < 2;$dX$$2_i$$8$$++) {
    this.$m_bounds$[$dX$$2_i$$8$$] = Array(2048);
    for(var $dY$$2_j$$1_tProxy$$ = 0;$dY$$2_j$$1_tProxy$$ < 2048;$dY$$2_j$$1_tProxy$$++) {
      this.$m_bounds$[$dX$$2_i$$8$$][$dY$$2_j$$1_tProxy$$] = new $b2Bound$$
    }
  }
  $dX$$2_i$$8$$ = $worldAABB$$.$maxVertex$.x;
  $dY$$2_j$$1_tProxy$$ = $worldAABB$$.$maxVertex$.y;
  $dX$$2_i$$8$$ -= $worldAABB$$.$minVertex$.x;
  $dY$$2_j$$1_tProxy$$ -= $worldAABB$$.$minVertex$.y;
  this.$m_quantizationFactor$.x = 65535 / $dX$$2_i$$8$$;
  this.$m_quantizationFactor$.y = 65535 / $dY$$2_j$$1_tProxy$$;
  for($dX$$2_i$$8$$ = 0;$dX$$2_i$$8$$ < 1023;++$dX$$2_i$$8$$) {
    $dY$$2_j$$1_tProxy$$ = new $b2Proxy$$;
    this.$m_proxyPool$[$dX$$2_i$$8$$] = $dY$$2_j$$1_tProxy$$;
    $dY$$2_j$$1_tProxy$$.$SetNext$($dX$$2_i$$8$$ + 1);
    $dY$$2_j$$1_tProxy$$.timeStamp = 0;
    $dY$$2_j$$1_tProxy$$.$overlapCount$ = 65535;
    $dY$$2_j$$1_tProxy$$.$userData$ = null
  }
  $dY$$2_j$$1_tProxy$$ = new $b2Proxy$$;
  this.$m_proxyPool$[1023] = $dY$$2_j$$1_tProxy$$;
  $dY$$2_j$$1_tProxy$$.$SetNext$(65535);
  $dY$$2_j$$1_tProxy$$.timeStamp = 0;
  $dY$$2_j$$1_tProxy$$.$overlapCount$ = 65535;
  $dY$$2_j$$1_tProxy$$.$userData$ = null;
  this.$m_freeProxy$ = 0;
  this.$m_timeStamp$ = 1;
  this.$m_queryResultCount$ = 0
}
$b2BroadPhase$$.prototype = {$InRange$:function $$b2BroadPhase$$$$$InRange$$($aabb$$) {
  var $dX$$3$$, $dY$$3$$, $d2X$$, $d2Y$$;
  $dX$$3$$ = $aabb$$.$minVertex$.x;
  $dY$$3$$ = $aabb$$.$minVertex$.y;
  $dX$$3$$ -= this.$m_worldAABB$.$maxVertex$.x;
  $dY$$3$$ -= this.$m_worldAABB$.$maxVertex$.y;
  $d2X$$ = this.$m_worldAABB$.$minVertex$.x;
  $d2Y$$ = this.$m_worldAABB$.$minVertex$.y;
  $d2X$$ -= $aabb$$.$maxVertex$.x;
  $d2Y$$ -= $aabb$$.$maxVertex$.y;
  $dX$$3$$ = $b2Math$b2Max$$($dX$$3$$, $d2X$$);
  $dY$$3$$ = $b2Math$b2Max$$($dY$$3$$, $d2Y$$);
  return $b2Math$b2Max$$($dX$$3$$, $dY$$3$$) < 0
}, $CreateProxy$:function $$b2BroadPhase$$$$$CreateProxy$$($aabb$$1$$, $userData$$1$$) {
  var $index$$36_tArr$$ = 0, $boundCount_i$$9_proxy$$, $proxyId$$1$$ = this.$m_freeProxy$;
  $boundCount_i$$9_proxy$$ = this.$m_proxyPool$[$proxyId$$1$$];
  this.$m_freeProxy$ = $boundCount_i$$9_proxy$$.$GetNext$();
  $boundCount_i$$9_proxy$$.$overlapCount$ = 0;
  $boundCount_i$$9_proxy$$.$userData$ = $userData$$1$$;
  $boundCount_i$$9_proxy$$ = 2 * this.$m_proxyCount$;
  var $lowerValues$$ = [], $upperValues$$ = [];
  this.$ComputeBounds$($lowerValues$$, $upperValues$$, $aabb$$1$$);
  for(var $axis$$ = 0;$axis$$ < 2;++$axis$$) {
    var $bounds$$ = this.$m_bounds$[$axis$$], $lowerIndex_lowerIndexOut_proxy2$$1$$ = 0, $upperIndex_upperIndexOut$$ = 0;
    $lowerIndex_lowerIndexOut_proxy2$$1$$ = [$lowerIndex_lowerIndexOut_proxy2$$1$$];
    $upperIndex_upperIndexOut$$ = [$upperIndex_upperIndexOut$$];
    this.$Query$($lowerIndex_lowerIndexOut_proxy2$$1$$, $upperIndex_upperIndexOut$$, $lowerValues$$[$axis$$], $upperValues$$[$axis$$], $bounds$$, $boundCount_i$$9_proxy$$, $axis$$);
    $lowerIndex_lowerIndexOut_proxy2$$1$$ = $lowerIndex_lowerIndexOut_proxy2$$1$$[0];
    $upperIndex_upperIndexOut$$ = $upperIndex_upperIndexOut$$[0];
    $index$$36_tArr$$ = [];
    var $j$$2$$ = 0, $tEnd$$ = $boundCount_i$$9_proxy$$ - $upperIndex_upperIndexOut$$, $tBound1$$, $tBound2$$;
    for($j$$2$$ = 0;$j$$2$$ < $tEnd$$;$j$$2$$++) {
      $index$$36_tArr$$[$j$$2$$] = new $b2Bound$$;
      $tBound1$$ = $index$$36_tArr$$[$j$$2$$];
      $tBound2$$ = $bounds$$[$upperIndex_upperIndexOut$$ + $j$$2$$];
      $tBound1$$.value = $tBound2$$.value;
      $tBound1$$.$proxyId$ = $tBound2$$.$proxyId$;
      $tBound1$$.$stabbingCount$ = $tBound2$$.$stabbingCount$
    }
    $tEnd$$ = $index$$36_tArr$$.length;
    var $tIndex$$ = $upperIndex_upperIndexOut$$ + 2;
    for($j$$2$$ = 0;$j$$2$$ < $tEnd$$;$j$$2$$++) {
      $tBound2$$ = $index$$36_tArr$$[$j$$2$$];
      $tBound1$$ = $bounds$$[$tIndex$$ + $j$$2$$];
      $tBound1$$.value = $tBound2$$.value;
      $tBound1$$.$proxyId$ = $tBound2$$.$proxyId$;
      $tBound1$$.$stabbingCount$ = $tBound2$$.$stabbingCount$
    }
    $index$$36_tArr$$ = [];
    $tEnd$$ = $upperIndex_upperIndexOut$$ - $lowerIndex_lowerIndexOut_proxy2$$1$$;
    for($j$$2$$ = 0;$j$$2$$ < $tEnd$$;$j$$2$$++) {
      $index$$36_tArr$$[$j$$2$$] = new $b2Bound$$;
      $tBound1$$ = $index$$36_tArr$$[$j$$2$$];
      $tBound2$$ = $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$ + $j$$2$$];
      $tBound1$$.value = $tBound2$$.value;
      $tBound1$$.$proxyId$ = $tBound2$$.$proxyId$;
      $tBound1$$.$stabbingCount$ = $tBound2$$.$stabbingCount$
    }
    $tEnd$$ = $index$$36_tArr$$.length;
    $tIndex$$ = $lowerIndex_lowerIndexOut_proxy2$$1$$ + 1;
    for($j$$2$$ = 0;$j$$2$$ < $tEnd$$;$j$$2$$++) {
      $tBound2$$ = $index$$36_tArr$$[$j$$2$$];
      $tBound1$$ = $bounds$$[$tIndex$$ + $j$$2$$];
      $tBound1$$.value = $tBound2$$.value;
      $tBound1$$.$proxyId$ = $tBound2$$.$proxyId$;
      $tBound1$$.$stabbingCount$ = $tBound2$$.$stabbingCount$
    }
    ++$upperIndex_upperIndexOut$$;
    $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$].value = $lowerValues$$[$axis$$];
    $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$].$proxyId$ = $proxyId$$1$$;
    $bounds$$[$upperIndex_upperIndexOut$$].value = $upperValues$$[$axis$$];
    $bounds$$[$upperIndex_upperIndexOut$$].$proxyId$ = $proxyId$$1$$;
    $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$].$stabbingCount$ = $lowerIndex_lowerIndexOut_proxy2$$1$$ == 0 ? 0 : $bounds$$[$lowerIndex_lowerIndexOut_proxy2$$1$$ - 1].$stabbingCount$;
    $bounds$$[$upperIndex_upperIndexOut$$].$stabbingCount$ = $bounds$$[$upperIndex_upperIndexOut$$ - 1].$stabbingCount$;
    for($index$$36_tArr$$ = $lowerIndex_lowerIndexOut_proxy2$$1$$;$index$$36_tArr$$ < $upperIndex_upperIndexOut$$;++$index$$36_tArr$$) {
      $bounds$$[$index$$36_tArr$$].$stabbingCount$++
    }
    for($index$$36_tArr$$ = $lowerIndex_lowerIndexOut_proxy2$$1$$;$index$$36_tArr$$ < $boundCount_i$$9_proxy$$ + 2;++$index$$36_tArr$$) {
      $lowerIndex_lowerIndexOut_proxy2$$1$$ = this.$m_proxyPool$[$bounds$$[$index$$36_tArr$$].$proxyId$];
      if($bounds$$[$index$$36_tArr$$].$IsLower$()) {
        $lowerIndex_lowerIndexOut_proxy2$$1$$.$lowerBounds$[$axis$$] = $index$$36_tArr$$
      }else {
        $lowerIndex_lowerIndexOut_proxy2$$1$$.$upperBounds$[$axis$$] = $index$$36_tArr$$
      }
    }
  }
  ++this.$m_proxyCount$;
  for($boundCount_i$$9_proxy$$ = 0;$boundCount_i$$9_proxy$$ < this.$m_queryResultCount$;++$boundCount_i$$9_proxy$$) {
    this.$m_pairManager$.$AddBufferedPair$($proxyId$$1$$, this.$m_queryResults$[$boundCount_i$$9_proxy$$])
  }
  this.$m_pairManager$.$Commit$();
  this.$m_queryResultCount$ = 0;
  this.$IncrementTimeStamp$();
  return $proxyId$$1$$
}, $DestroyProxy$:function $$b2BroadPhase$$$$$DestroyProxy$$($proxyId$$2$$) {
  for(var $proxy$$1$$ = this.$m_proxyPool$[$proxyId$$2$$], $boundCount$$1_i$$10$$ = 2 * this.$m_proxyCount$, $axis$$1$$ = 0;$axis$$1$$ < 2;++$axis$$1$$) {
    var $bounds$$1$$ = this.$m_bounds$[$axis$$1$$], $index2_lowerIndex$$1$$ = $proxy$$1$$.$lowerBounds$[$axis$$1$$], $upperIndex$$1$$ = $proxy$$1$$.$upperBounds$[$axis$$1$$], $lowerValue$$ = $bounds$$1$$[$index2_lowerIndex$$1$$].value, $upperValue$$ = $bounds$$1$$[$upperIndex$$1$$].value, $index$$37_tArr$$1$$ = [], $j$$3_proxy2$$2$$ = 0, $tEnd$$1$$ = $upperIndex$$1$$ - $index2_lowerIndex$$1$$ - 1, $tBound1$$1$$, $tBound2$$1$$;
    for($j$$3_proxy2$$2$$ = 0;$j$$3_proxy2$$2$$ < $tEnd$$1$$;$j$$3_proxy2$$2$$++) {
      $index$$37_tArr$$1$$[$j$$3_proxy2$$2$$] = new $b2Bound$$;
      $tBound1$$1$$ = $index$$37_tArr$$1$$[$j$$3_proxy2$$2$$];
      $tBound2$$1$$ = $bounds$$1$$[$index2_lowerIndex$$1$$ + 1 + $j$$3_proxy2$$2$$];
      $tBound1$$1$$.value = $tBound2$$1$$.value;
      $tBound1$$1$$.$proxyId$ = $tBound2$$1$$.$proxyId$;
      $tBound1$$1$$.$stabbingCount$ = $tBound2$$1$$.$stabbingCount$
    }
    $tEnd$$1$$ = $index$$37_tArr$$1$$.length;
    var $tIndex$$1$$ = $index2_lowerIndex$$1$$;
    for($j$$3_proxy2$$2$$ = 0;$j$$3_proxy2$$2$$ < $tEnd$$1$$;$j$$3_proxy2$$2$$++) {
      $tBound2$$1$$ = $index$$37_tArr$$1$$[$j$$3_proxy2$$2$$];
      $tBound1$$1$$ = $bounds$$1$$[$tIndex$$1$$ + $j$$3_proxy2$$2$$];
      $tBound1$$1$$.value = $tBound2$$1$$.value;
      $tBound1$$1$$.$proxyId$ = $tBound2$$1$$.$proxyId$;
      $tBound1$$1$$.$stabbingCount$ = $tBound2$$1$$.$stabbingCount$
    }
    $index$$37_tArr$$1$$ = [];
    $tEnd$$1$$ = $boundCount$$1_i$$10$$ - $upperIndex$$1$$ - 1;
    for($j$$3_proxy2$$2$$ = 0;$j$$3_proxy2$$2$$ < $tEnd$$1$$;$j$$3_proxy2$$2$$++) {
      $index$$37_tArr$$1$$[$j$$3_proxy2$$2$$] = new $b2Bound$$;
      $tBound1$$1$$ = $index$$37_tArr$$1$$[$j$$3_proxy2$$2$$];
      $tBound2$$1$$ = $bounds$$1$$[$upperIndex$$1$$ + 1 + $j$$3_proxy2$$2$$];
      $tBound1$$1$$.value = $tBound2$$1$$.value;
      $tBound1$$1$$.$proxyId$ = $tBound2$$1$$.$proxyId$;
      $tBound1$$1$$.$stabbingCount$ = $tBound2$$1$$.$stabbingCount$
    }
    $tEnd$$1$$ = $index$$37_tArr$$1$$.length;
    $tIndex$$1$$ = $upperIndex$$1$$ - 1;
    for($j$$3_proxy2$$2$$ = 0;$j$$3_proxy2$$2$$ < $tEnd$$1$$;$j$$3_proxy2$$2$$++) {
      $tBound2$$1$$ = $index$$37_tArr$$1$$[$j$$3_proxy2$$2$$];
      $tBound1$$1$$ = $bounds$$1$$[$tIndex$$1$$ + $j$$3_proxy2$$2$$];
      $tBound1$$1$$.value = $tBound2$$1$$.value;
      $tBound1$$1$$.$proxyId$ = $tBound2$$1$$.$proxyId$;
      $tBound1$$1$$.$stabbingCount$ = $tBound2$$1$$.$stabbingCount$
    }
    $tEnd$$1$$ = $boundCount$$1_i$$10$$ - 2;
    for($index$$37_tArr$$1$$ = $index2_lowerIndex$$1$$;$index$$37_tArr$$1$$ < $tEnd$$1$$;++$index$$37_tArr$$1$$) {
      $j$$3_proxy2$$2$$ = this.$m_proxyPool$[$bounds$$1$$[$index$$37_tArr$$1$$].$proxyId$];
      if($bounds$$1$$[$index$$37_tArr$$1$$].$IsLower$()) {
        $j$$3_proxy2$$2$$.$lowerBounds$[$axis$$1$$] = $index$$37_tArr$$1$$
      }else {
        $j$$3_proxy2$$2$$.$upperBounds$[$axis$$1$$] = $index$$37_tArr$$1$$
      }
    }
    $tEnd$$1$$ = $upperIndex$$1$$ - 1;
    for($index2_lowerIndex$$1$$ = $index2_lowerIndex$$1$$;$index2_lowerIndex$$1$$ < $tEnd$$1$$;++$index2_lowerIndex$$1$$) {
      $bounds$$1$$[$index2_lowerIndex$$1$$].$stabbingCount$--
    }
    this.$Query$([0], [0], $lowerValue$$, $upperValue$$, $bounds$$1$$, $boundCount$$1_i$$10$$ - 2, $axis$$1$$)
  }
  for($boundCount$$1_i$$10$$ = 0;$boundCount$$1_i$$10$$ < this.$m_queryResultCount$;++$boundCount$$1_i$$10$$) {
    this.$m_pairManager$.$RemoveBufferedPair$($proxyId$$2$$, this.$m_queryResults$[$boundCount$$1_i$$10$$])
  }
  this.$m_pairManager$.$Commit$();
  this.$m_queryResultCount$ = 0;
  this.$IncrementTimeStamp$();
  $proxy$$1$$.$userData$ = null;
  $proxy$$1$$.$overlapCount$ = 65535;
  $proxy$$1$$.$lowerBounds$[0] = 65535;
  $proxy$$1$$.$lowerBounds$[1] = 65535;
  $proxy$$1$$.$upperBounds$[0] = 65535;
  $proxy$$1$$.$upperBounds$[1] = 65535;
  $proxy$$1$$.$SetNext$(this.$m_freeProxy$);
  this.$m_freeProxy$ = $proxyId$$2$$;
  --this.$m_proxyCount$
}, $MoveProxy$:function $$b2BroadPhase$$$$$MoveProxy$$($proxyId$$3$$, $aabb$$2$$) {
  var $axis$$2$$ = 0, $index$$38$$ = 0, $bound$$, $nextBound_prevBound$$, $nextProxyId_prevProxyId$$ = 0, $nextProxy_prevProxy$$;
  if(!($proxyId$$3$$ == 65535 || 1024 <= $proxyId$$3$$)) {
    if($aabb$$2$$.$IsValid$() != false) {
      var $boundCount$$2$$ = 2 * this.$m_proxyCount$, $proxy$$2$$ = this.$m_proxyPool$[$proxyId$$3$$], $newValues$$ = new $b2BoundValues$$;
      this.$ComputeBounds$($newValues$$.$lowerValues$, $newValues$$.$upperValues$, $aabb$$2$$);
      var $oldValues$$ = new $b2BoundValues$$;
      for($axis$$2$$ = 0;$axis$$2$$ < 2;++$axis$$2$$) {
        $oldValues$$.$lowerValues$[$axis$$2$$] = this.$m_bounds$[$axis$$2$$][$proxy$$2$$.$lowerBounds$[$axis$$2$$]].value;
        $oldValues$$.$upperValues$[$axis$$2$$] = this.$m_bounds$[$axis$$2$$][$proxy$$2$$.$upperBounds$[$axis$$2$$]].value
      }
      for($axis$$2$$ = 0;$axis$$2$$ < 2;++$axis$$2$$) {
        var $bounds$$2$$ = this.$m_bounds$[$axis$$2$$], $lowerIndex$$2$$ = $proxy$$2$$.$lowerBounds$[$axis$$2$$], $upperIndex$$2$$ = $proxy$$2$$.$upperBounds$[$axis$$2$$], $lowerValue$$1$$ = $newValues$$.$lowerValues$[$axis$$2$$], $upperValue$$1$$ = $newValues$$.$upperValues$[$axis$$2$$], $deltaLower$$ = $lowerValue$$1$$ - $bounds$$2$$[$lowerIndex$$2$$].value, $deltaUpper$$ = $upperValue$$1$$ - $bounds$$2$$[$upperIndex$$2$$].value;
        $bounds$$2$$[$lowerIndex$$2$$].value = $lowerValue$$1$$;
        $bounds$$2$$[$upperIndex$$2$$].value = $upperValue$$1$$;
        if($deltaLower$$ < 0) {
          for($index$$38$$ = $lowerIndex$$2$$;$index$$38$$ > 0 && $lowerValue$$1$$ < $bounds$$2$$[$index$$38$$ - 1].value;) {
            $bound$$ = $bounds$$2$$[$index$$38$$];
            $nextBound_prevBound$$ = $bounds$$2$$[$index$$38$$ - 1];
            $nextProxyId_prevProxyId$$ = $nextBound_prevBound$$.$proxyId$;
            $nextProxy_prevProxy$$ = this.$m_proxyPool$[$nextBound_prevBound$$.$proxyId$];
            $nextBound_prevBound$$.$stabbingCount$++;
            if($nextBound_prevBound$$.$IsUpper$() == true) {
              this.$TestOverlap$($newValues$$, $nextProxy_prevProxy$$) && this.$m_pairManager$.$AddBufferedPair$($proxyId$$3$$, $nextProxyId_prevProxyId$$);
              $nextProxy_prevProxy$$.$upperBounds$[$axis$$2$$]++;
              $bound$$.$stabbingCount$++
            }else {
              $nextProxy_prevProxy$$.$lowerBounds$[$axis$$2$$]++;
              $bound$$.$stabbingCount$--
            }
            $proxy$$2$$.$lowerBounds$[$axis$$2$$]--;
            $bound$$.$Swap$($nextBound_prevBound$$);
            --$index$$38$$
          }
        }
        if($deltaUpper$$ > 0) {
          for($index$$38$$ = $upperIndex$$2$$;$index$$38$$ < $boundCount$$2$$ - 1 && $bounds$$2$$[$index$$38$$ + 1].value <= $upperValue$$1$$;) {
            $bound$$ = $bounds$$2$$[$index$$38$$];
            $nextBound_prevBound$$ = $bounds$$2$$[$index$$38$$ + 1];
            $nextProxyId_prevProxyId$$ = $nextBound_prevBound$$.$proxyId$;
            $nextProxy_prevProxy$$ = this.$m_proxyPool$[$nextProxyId_prevProxyId$$];
            $nextBound_prevBound$$.$stabbingCount$++;
            if($nextBound_prevBound$$.$IsLower$() == true) {
              this.$TestOverlap$($newValues$$, $nextProxy_prevProxy$$) && this.$m_pairManager$.$AddBufferedPair$($proxyId$$3$$, $nextProxyId_prevProxyId$$);
              $nextProxy_prevProxy$$.$lowerBounds$[$axis$$2$$]--;
              $bound$$.$stabbingCount$++
            }else {
              $nextProxy_prevProxy$$.$upperBounds$[$axis$$2$$]--;
              $bound$$.$stabbingCount$--
            }
            $proxy$$2$$.$upperBounds$[$axis$$2$$]++;
            $bound$$.$Swap$($nextBound_prevBound$$);
            $index$$38$$++
          }
        }
        if($deltaLower$$ > 0) {
          for($index$$38$$ = $lowerIndex$$2$$;$index$$38$$ < $boundCount$$2$$ - 1 && $bounds$$2$$[$index$$38$$ + 1].value <= $lowerValue$$1$$;) {
            $bound$$ = $bounds$$2$$[$index$$38$$];
            $nextBound_prevBound$$ = $bounds$$2$$[$index$$38$$ + 1];
            $nextProxyId_prevProxyId$$ = $nextBound_prevBound$$.$proxyId$;
            $nextProxy_prevProxy$$ = this.$m_proxyPool$[$nextProxyId_prevProxyId$$];
            $nextBound_prevBound$$.$stabbingCount$--;
            if($nextBound_prevBound$$.$IsUpper$()) {
              this.$TestOverlap$($oldValues$$, $nextProxy_prevProxy$$) && this.$m_pairManager$.$RemoveBufferedPair$($proxyId$$3$$, $nextProxyId_prevProxyId$$);
              $nextProxy_prevProxy$$.$upperBounds$[$axis$$2$$]--;
              $bound$$.$stabbingCount$--
            }else {
              $nextProxy_prevProxy$$.$lowerBounds$[$axis$$2$$]--;
              $bound$$.$stabbingCount$++
            }
            $proxy$$2$$.$lowerBounds$[$axis$$2$$]++;
            $bound$$.$Swap$($nextBound_prevBound$$);
            $index$$38$$++
          }
        }
        if($deltaUpper$$ < 0) {
          for($index$$38$$ = $upperIndex$$2$$;$index$$38$$ > 0 && $upperValue$$1$$ < $bounds$$2$$[$index$$38$$ - 1].value;) {
            $bound$$ = $bounds$$2$$[$index$$38$$];
            $nextBound_prevBound$$ = $bounds$$2$$[$index$$38$$ - 1];
            $nextProxyId_prevProxyId$$ = $nextBound_prevBound$$.$proxyId$;
            $nextProxy_prevProxy$$ = this.$m_proxyPool$[$nextProxyId_prevProxyId$$];
            $nextBound_prevBound$$.$stabbingCount$--;
            if($nextBound_prevBound$$.$IsLower$() == true) {
              this.$TestOverlap$($oldValues$$, $nextProxy_prevProxy$$) && this.$m_pairManager$.$RemoveBufferedPair$($proxyId$$3$$, $nextProxyId_prevProxyId$$);
              $nextProxy_prevProxy$$.$lowerBounds$[$axis$$2$$]++;
              $bound$$.$stabbingCount$--
            }else {
              $nextProxy_prevProxy$$.$upperBounds$[$axis$$2$$]++;
              $bound$$.$stabbingCount$++
            }
            $proxy$$2$$.$upperBounds$[$axis$$2$$]--;
            $bound$$.$Swap$($nextBound_prevBound$$);
            $index$$38$$--
          }
        }
      }
    }
  }
}, $Commit$:function $$b2BroadPhase$$$$$Commit$$() {
  this.$m_pairManager$.$Commit$()
}, $QueryAABB$:function $$b2BroadPhase$$$$$QueryAABB$$($aabb$$3_lowerIndexOut$$1$$, $userData$$2$$, $maxCount$$) {
  var $count$$3_lowerValues$$1$$ = [], $i$$11_upperValues$$1$$ = [];
  this.$ComputeBounds$($count$$3_lowerValues$$1$$, $i$$11_upperValues$$1$$, $aabb$$3_lowerIndexOut$$1$$);
  $aabb$$3_lowerIndexOut$$1$$ = [0];
  var $upperIndexOut$$1$$ = [0];
  this.$Query$($aabb$$3_lowerIndexOut$$1$$, $upperIndexOut$$1$$, $count$$3_lowerValues$$1$$[0], $i$$11_upperValues$$1$$[0], this.$m_bounds$[0], 2 * this.$m_proxyCount$, 0);
  this.$Query$($aabb$$3_lowerIndexOut$$1$$, $upperIndexOut$$1$$, $count$$3_lowerValues$$1$$[1], $i$$11_upperValues$$1$$[1], this.$m_bounds$[1], 2 * this.$m_proxyCount$, 1);
  for($i$$11_upperValues$$1$$ = $count$$3_lowerValues$$1$$ = 0;$i$$11_upperValues$$1$$ < this.$m_queryResultCount$ && $count$$3_lowerValues$$1$$ < $maxCount$$;++$i$$11_upperValues$$1$$, ++$count$$3_lowerValues$$1$$) {
    $userData$$2$$[$i$$11_upperValues$$1$$] = this.$m_proxyPool$[this.$m_queryResults$[$i$$11_upperValues$$1$$]].$userData$
  }
  this.$m_queryResultCount$ = 0;
  this.$IncrementTimeStamp$();
  return $count$$3_lowerValues$$1$$
}, $ComputeBounds$:function $$b2BroadPhase$$$$$ComputeBounds$$($lowerValues$$2$$, $upperValues$$2$$, $aabb$$4_maxVertexY$$) {
  var $minVertexX$$ = $aabb$$4_maxVertexY$$.$minVertex$.x, $minVertexY$$ = $aabb$$4_maxVertexY$$.$minVertex$.y;
  $minVertexX$$ = $minVertexX$$ < this.$m_worldAABB$.$maxVertex$.x ? $minVertexX$$ : this.$m_worldAABB$.$maxVertex$.x;
  $minVertexY$$ = $minVertexY$$ < this.$m_worldAABB$.$maxVertex$.y ? $minVertexY$$ : this.$m_worldAABB$.$maxVertex$.y;
  $minVertexX$$ = $b2Math$b2Max$$($minVertexX$$, this.$m_worldAABB$.$minVertex$.x);
  $minVertexY$$ = $b2Math$b2Max$$($minVertexY$$, this.$m_worldAABB$.$minVertex$.y);
  var $maxVertexX$$ = $aabb$$4_maxVertexY$$.$maxVertex$.x;
  $aabb$$4_maxVertexY$$ = $aabb$$4_maxVertexY$$.$maxVertex$.y;
  $maxVertexX$$ = $maxVertexX$$ < this.$m_worldAABB$.$maxVertex$.x ? $maxVertexX$$ : this.$m_worldAABB$.$maxVertex$.x;
  $aabb$$4_maxVertexY$$ = $aabb$$4_maxVertexY$$ < this.$m_worldAABB$.$maxVertex$.y ? $aabb$$4_maxVertexY$$ : this.$m_worldAABB$.$maxVertex$.y;
  $maxVertexX$$ = $b2Math$b2Max$$($maxVertexX$$, this.$m_worldAABB$.$minVertex$.x);
  $aabb$$4_maxVertexY$$ = $b2Math$b2Max$$($aabb$$4_maxVertexY$$, this.$m_worldAABB$.$minVertex$.y);
  $lowerValues$$2$$[0] = this.$m_quantizationFactor$.x * ($minVertexX$$ - this.$m_worldAABB$.$minVertex$.x) & 65534;
  $upperValues$$2$$[0] = this.$m_quantizationFactor$.x * ($maxVertexX$$ - this.$m_worldAABB$.$minVertex$.x) & 65535 | 1;
  $lowerValues$$2$$[1] = this.$m_quantizationFactor$.y * ($minVertexY$$ - this.$m_worldAABB$.$minVertex$.y) & 65534;
  $upperValues$$2$$[1] = this.$m_quantizationFactor$.y * ($aabb$$4_maxVertexY$$ - this.$m_worldAABB$.$minVertex$.y) & 65535 | 1
}, $TestOverlap$:function $$b2BroadPhase$$$$$TestOverlap$$($b$$14$$, $p$$) {
  for(var $axis$$5$$ = 0;$axis$$5$$ < 2;++$axis$$5$$) {
    var $bounds$$5$$ = this.$m_bounds$[$axis$$5$$];
    if($b$$14$$.$lowerValues$[$axis$$5$$] > $bounds$$5$$[$p$$.$upperBounds$[$axis$$5$$]].value) {
      return false
    }
    if($b$$14$$.$upperValues$[$axis$$5$$] < $bounds$$5$$[$p$$.$lowerBounds$[$axis$$5$$]].value) {
      return false
    }
  }
  return true
}, $Query$:function $$b2BroadPhase$$$$$Query$$($lowerQueryOut$$, $upperQueryOut$$, $lowerQuery_lowerValue$$2$$, $upperQuery_upperValue$$2$$, $bounds$$6$$, $boundCount$$4_i$$13_j$$4$$, $axis$$6$$) {
  $lowerQuery_lowerValue$$2$$ = $b2BroadPhase$BinarySearch$$($bounds$$6$$, $boundCount$$4_i$$13_j$$4$$, $lowerQuery_lowerValue$$2$$);
  $upperQuery_upperValue$$2$$ = $b2BroadPhase$BinarySearch$$($bounds$$6$$, $boundCount$$4_i$$13_j$$4$$, $upperQuery_upperValue$$2$$);
  for($boundCount$$4_i$$13_j$$4$$ = $lowerQuery_lowerValue$$2$$;$boundCount$$4_i$$13_j$$4$$ < $upperQuery_upperValue$$2$$;++$boundCount$$4_i$$13_j$$4$$) {
    $bounds$$6$$[$boundCount$$4_i$$13_j$$4$$].$IsLower$() && this.$IncrementOverlapCount$($bounds$$6$$[$boundCount$$4_i$$13_j$$4$$].$proxyId$)
  }
  if($lowerQuery_lowerValue$$2$$ > 0) {
    $boundCount$$4_i$$13_j$$4$$ = $lowerQuery_lowerValue$$2$$ - 1;
    for(var $s$$9$$ = $bounds$$6$$[$boundCount$$4_i$$13_j$$4$$].$stabbingCount$;$s$$9$$;) {
      if($bounds$$6$$[$boundCount$$4_i$$13_j$$4$$].$IsLower$()) {
        if($lowerQuery_lowerValue$$2$$ <= this.$m_proxyPool$[$bounds$$6$$[$boundCount$$4_i$$13_j$$4$$].$proxyId$].$upperBounds$[$axis$$6$$]) {
          this.$IncrementOverlapCount$($bounds$$6$$[$boundCount$$4_i$$13_j$$4$$].$proxyId$);
          --$s$$9$$
        }
      }
      --$boundCount$$4_i$$13_j$$4$$
    }
  }
  $lowerQueryOut$$[0] = $lowerQuery_lowerValue$$2$$;
  $upperQueryOut$$[0] = $upperQuery_upperValue$$2$$
}, $IncrementOverlapCount$:function $$b2BroadPhase$$$$$IncrementOverlapCount$$($proxyId$$4$$) {
  var $proxy$$5$$ = this.$m_proxyPool$[$proxyId$$4$$];
  if($proxy$$5$$.timeStamp < this.$m_timeStamp$) {
    $proxy$$5$$.timeStamp = this.$m_timeStamp$;
    $proxy$$5$$.$overlapCount$ = 1
  }else {
    $proxy$$5$$.$overlapCount$ = 2;
    this.$m_queryResults$[this.$m_queryResultCount$] = $proxyId$$4$$;
    ++this.$m_queryResultCount$
  }
}, $IncrementTimeStamp$:function $$b2BroadPhase$$$$$IncrementTimeStamp$$() {
  if(this.$m_timeStamp$ == 65535) {
    for(var $i$$14$$ = 0;$i$$14$$ < 1024;++$i$$14$$) {
      this.$m_proxyPool$[$i$$14$$].timeStamp = 0
    }
    this.$m_timeStamp$ = 1
  }else {
    ++this.$m_timeStamp$
  }
}, $m_pairManager$:new $b2PairManager$$, $m_proxyPool$:Array(8192), $m_freeProxy$:0, $m_bounds$:Array(2048), $m_queryResults$:Array(1024), $m_queryResultCount$:0, $m_worldAABB$:null, $m_quantizationFactor$:new $b2Vec2$$, $m_proxyCount$:0, $m_timeStamp$:0};
function $b2BroadPhase$BinarySearch$$($bounds$$7$$, $count$$4_high$$2$$, $value$$17$$) {
  var $low$$2$$ = 0;
  for($count$$4_high$$2$$ = $count$$4_high$$2$$ - 1;$low$$2$$ <= $count$$4_high$$2$$;) {
    var $mid$$ = Math.floor(($low$$2$$ + $count$$4_high$$2$$) / 2);
    if($bounds$$7$$[$mid$$].value > $value$$17$$) {
      $count$$4_high$$2$$ = $mid$$ - 1
    }else {
      if($bounds$$7$$[$mid$$].value < $value$$17$$) {
        $low$$2$$ = $mid$$ + 1
      }else {
        return $mid$$
      }
    }
  }
  return $low$$2$$
}
;
// Input 19
function $b2ContactPoint$$() {
  this.position = new $b2Vec2$$;
  this.id = new $b2ContactID$$
}
$b2ContactPoint$$.prototype = {$separation$:null, $normalImpulse$:null, $tangentImpulse$:null};
// Input 20
function $b2Manifold$$() {
  this.$points$ = Array(2);
  for(var $i$$15$$ = 0;$i$$15$$ < 2;$i$$15$$++) {
    this.$points$[$i$$15$$] = new $b2ContactPoint$$
  }
  this.$normal$ = new $b2Vec2$$
}
$b2Manifold$$.prototype = {$points$:null, $normal$:null, $pointCount$:0};
// Input 21
function $b2OBB$$() {
  this.$R$ = new $b2Mat22$$;
  this.$center$ = new $b2Vec2$$;
  this.$extents$ = new $b2Vec2$$
}
;
// Input 22
function $ClipVertex$$() {
  this.$v$ = new $b2Vec2$$;
  this.id = new $b2ContactID$$
}
;
// Input 23
function $b2Collision$ClipSegmentToLine$$($vOut$$, $vIn$$, $distance1_interp_normal$$, $offset$$10_tVec$$) {
  var $numOut$$ = 0, $vIn0$$ = $vIn$$[0].$v$, $vIn1$$ = $vIn$$[1].$v$, $distance0$$ = $b2Math$b2Dot$$($distance1_interp_normal$$, $vIn$$[0].$v$) - $offset$$10_tVec$$;
  $distance1_interp_normal$$ = $b2Math$b2Dot$$($distance1_interp_normal$$, $vIn$$[1].$v$) - $offset$$10_tVec$$;
  if($distance0$$ <= 0) {
    $vOut$$[$numOut$$++] = $vIn$$[0]
  }
  if($distance1_interp_normal$$ <= 0) {
    $vOut$$[$numOut$$++] = $vIn$$[1]
  }
  if($distance0$$ * $distance1_interp_normal$$ < 0) {
    $distance1_interp_normal$$ = $distance0$$ / ($distance0$$ - $distance1_interp_normal$$);
    $offset$$10_tVec$$ = $vOut$$[$numOut$$].$v$;
    $offset$$10_tVec$$.x = $vIn0$$.x + $distance1_interp_normal$$ * ($vIn1$$.x - $vIn0$$.x);
    $offset$$10_tVec$$.y = $vIn0$$.y + $distance1_interp_normal$$ * ($vIn1$$.y - $vIn0$$.y);
    $vOut$$[$numOut$$].id = $distance0$$ > 0 ? $vIn$$[0].id : $vIn$$[1].id;
    ++$numOut$$
  }
  return $numOut$$
}
function $b2Collision$EdgeSeparation$$($poly1_v1Y$$, $edge1_v2X$$, $poly2_v2Y$$) {
  var $vert1s$$ = $poly1_v1Y$$.$m_vertices$, $count2_v1X$$ = $poly2_v2Y$$.$m_vertexCount$, $vert2s$$ = $poly2_v2Y$$.$m_vertices$, $normalX$$ = $poly1_v1Y$$.$m_normals$[$edge1_v2X$$].x, $normalY$$ = $poly1_v1Y$$.$m_normals$[$edge1_v2X$$].y, $tX$$4_vertexIndex2$$ = $normalX$$, $minDot_tMat$$ = $poly1_v1Y$$.$m_R$;
  $normalX$$ = $minDot_tMat$$.$col1$.x * $tX$$4_vertexIndex2$$ + $minDot_tMat$$.$col2$.x * $normalY$$;
  $normalY$$ = $minDot_tMat$$.$col1$.y * $tX$$4_vertexIndex2$$ + $minDot_tMat$$.$col2$.y * $normalY$$;
  var $normalLocal2X$$ = $normalX$$, $normalLocal2Y$$ = $normalY$$;
  $minDot_tMat$$ = $poly2_v2Y$$.$m_R$;
  $tX$$4_vertexIndex2$$ = $normalLocal2X$$ * $minDot_tMat$$.$col1$.x + $normalLocal2Y$$ * $minDot_tMat$$.$col1$.y;
  $normalLocal2Y$$ = $normalLocal2X$$ * $minDot_tMat$$.$col2$.x + $normalLocal2Y$$ * $minDot_tMat$$.$col2$.y;
  $normalLocal2X$$ = $tX$$4_vertexIndex2$$;
  $tX$$4_vertexIndex2$$ = 0;
  $minDot_tMat$$ = Number.MAX_VALUE;
  for(var $i$$16$$ = 0;$i$$16$$ < $count2_v1X$$;++$i$$16$$) {
    var $dot_tVec$$1$$ = $vert2s$$[$i$$16$$];
    $dot_tVec$$1$$ = $dot_tVec$$1$$.x * $normalLocal2X$$ + $dot_tVec$$1$$.y * $normalLocal2Y$$;
    if($dot_tVec$$1$$ < $minDot_tMat$$) {
      $minDot_tMat$$ = $dot_tVec$$1$$;
      $tX$$4_vertexIndex2$$ = $i$$16$$
    }
  }
  $minDot_tMat$$ = $poly1_v1Y$$.$m_R$;
  $count2_v1X$$ = $poly1_v1Y$$.$m_position$.x + ($minDot_tMat$$.$col1$.x * $vert1s$$[$edge1_v2X$$].x + $minDot_tMat$$.$col2$.x * $vert1s$$[$edge1_v2X$$].y);
  $poly1_v1Y$$ = $poly1_v1Y$$.$m_position$.y + ($minDot_tMat$$.$col1$.y * $vert1s$$[$edge1_v2X$$].x + $minDot_tMat$$.$col2$.y * $vert1s$$[$edge1_v2X$$].y);
  $minDot_tMat$$ = $poly2_v2Y$$.$m_R$;
  $edge1_v2X$$ = $poly2_v2Y$$.$m_position$.x + ($minDot_tMat$$.$col1$.x * $vert2s$$[$tX$$4_vertexIndex2$$].x + $minDot_tMat$$.$col2$.x * $vert2s$$[$tX$$4_vertexIndex2$$].y);
  $poly2_v2Y$$ = $poly2_v2Y$$.$m_position$.y + ($minDot_tMat$$.$col1$.y * $vert2s$$[$tX$$4_vertexIndex2$$].x + $minDot_tMat$$.$col2$.y * $vert2s$$[$tX$$4_vertexIndex2$$].y);
  $edge1_v2X$$ -= $count2_v1X$$;
  $poly2_v2Y$$ -= $poly1_v1Y$$;
  return $edge1_v2X$$ * $normalX$$ + $poly2_v2Y$$ * $normalY$$
}
function $b2Collision$FindMaxSeparation$$($edgeIndex$$, $poly1$$1$$, $poly2$$1$$, $conservative$$) {
  var $count1$$ = $poly1$$1$$.$m_vertexCount$, $dX$$4_edge$$ = $poly2$$1$$.$m_position$.x - $poly1$$1$$.$m_position$.x, $bestEdge_dLocal1Y_dY$$4$$ = $poly2$$1$$.$m_position$.y - $poly1$$1$$.$m_position$.y, $dLocal1X_s$$10$$ = $dX$$4_edge$$ * $poly1$$1$$.$m_R$.$col1$.x + $bestEdge_dLocal1Y_dY$$4$$ * $poly1$$1$$.$m_R$.$col1$.y;
  $bestEdge_dLocal1Y_dY$$4$$ = $dX$$4_edge$$ * $poly1$$1$$.$m_R$.$col2$.x + $bestEdge_dLocal1Y_dY$$4$$ * $poly1$$1$$.$m_R$.$col2$.y;
  $dX$$4_edge$$ = 0;
  for(var $increment_maxDot$$ = -Number.MAX_VALUE, $bestSeparation_i$$17_prevEdge$$ = 0;$bestSeparation_i$$17_prevEdge$$ < $count1$$;++$bestSeparation_i$$17_prevEdge$$) {
    var $dot$$1_sPrev$$ = $poly1$$1$$.$m_normals$[$bestSeparation_i$$17_prevEdge$$].x * $dLocal1X_s$$10$$ + $poly1$$1$$.$m_normals$[$bestSeparation_i$$17_prevEdge$$].y * $bestEdge_dLocal1Y_dY$$4$$;
    if($dot$$1_sPrev$$ > $increment_maxDot$$) {
      $increment_maxDot$$ = $dot$$1_sPrev$$;
      $dX$$4_edge$$ = $bestSeparation_i$$17_prevEdge$$
    }
  }
  $dLocal1X_s$$10$$ = $b2Collision$EdgeSeparation$$($poly1$$1$$, $dX$$4_edge$$, $poly2$$1$$);
  if($dLocal1X_s$$10$$ > 0 && $conservative$$ == false) {
    return $dLocal1X_s$$10$$
  }
  $bestSeparation_i$$17_prevEdge$$ = $dX$$4_edge$$ - 1 >= 0 ? $dX$$4_edge$$ - 1 : $count1$$ - 1;
  $dot$$1_sPrev$$ = $b2Collision$EdgeSeparation$$($poly1$$1$$, $bestSeparation_i$$17_prevEdge$$, $poly2$$1$$);
  if($dot$$1_sPrev$$ > 0 && $conservative$$ == false) {
    return $dot$$1_sPrev$$
  }
  var $nextEdge$$ = $dX$$4_edge$$ + 1 < $count1$$ ? $dX$$4_edge$$ + 1 : 0, $sNext$$ = $b2Collision$EdgeSeparation$$($poly1$$1$$, $nextEdge$$, $poly2$$1$$);
  if($sNext$$ > 0 && $conservative$$ == false) {
    return $sNext$$
  }
  $increment_maxDot$$ = $bestEdge_dLocal1Y_dY$$4$$ = 0;
  if($dot$$1_sPrev$$ > $dLocal1X_s$$10$$ && $dot$$1_sPrev$$ > $sNext$$) {
    $increment_maxDot$$ = -1;
    $bestEdge_dLocal1Y_dY$$4$$ = $bestSeparation_i$$17_prevEdge$$;
    $bestSeparation_i$$17_prevEdge$$ = $dot$$1_sPrev$$
  }else {
    if($sNext$$ > $dLocal1X_s$$10$$) {
      $increment_maxDot$$ = 1;
      $bestEdge_dLocal1Y_dY$$4$$ = $nextEdge$$;
      $bestSeparation_i$$17_prevEdge$$ = $sNext$$
    }else {
      $edgeIndex$$[0] = $dX$$4_edge$$;
      return $dLocal1X_s$$10$$
    }
  }
  for(;;) {
    $dX$$4_edge$$ = $increment_maxDot$$ == -1 ? $bestEdge_dLocal1Y_dY$$4$$ - 1 >= 0 ? $bestEdge_dLocal1Y_dY$$4$$ - 1 : $count1$$ - 1 : $bestEdge_dLocal1Y_dY$$4$$ + 1 < $count1$$ ? $bestEdge_dLocal1Y_dY$$4$$ + 1 : 0;
    $dLocal1X_s$$10$$ = $b2Collision$EdgeSeparation$$($poly1$$1$$, $dX$$4_edge$$, $poly2$$1$$);
    if($dLocal1X_s$$10$$ > 0 && $conservative$$ == false) {
      return $dLocal1X_s$$10$$
    }
    if($dLocal1X_s$$10$$ > $bestSeparation_i$$17_prevEdge$$) {
      $bestEdge_dLocal1Y_dY$$4$$ = $dX$$4_edge$$;
      $bestSeparation_i$$17_prevEdge$$ = $dLocal1X_s$$10$$
    }else {
      break
    }
  }
  $edgeIndex$$[0] = $bestEdge_dLocal1Y_dY$$4$$;
  return $bestSeparation_i$$17_prevEdge$$
}
var $b2Collision$b2CollidePolyTempVec$$ = new $b2Vec2$$;
// Input 24
function $b2BoxDef$$() {
  this.type = $b2Shape$e_unknownShape$$;
  this.$userData$ = null;
  this.$localPosition$ = new $b2Vec2$$(0, 0);
  this.$localRotation$ = 0;
  this.$friction$ = 0.2;
  this.$density$ = this.$restitution$ = 0;
  this.$categoryBits$ = 1;
  this.$maskBits$ = 65535;
  this.$groupIndex$ = 0;
  this.type = $b2Shape$e_boxShape$$;
  this.$extents$ = new $b2Vec2$$(1, 1)
}
$goog$inherits$$($b2BoxDef$$, $b2ShapeDef$$);
// Input 25
function $b2MassData$$() {
  this.$center$ = new $b2Vec2$$(0, 0)
}
$b2MassData$$.prototype = {$mass$:0, $center$:new $b2Vec2$$(0, 0), $I$:0};
// Input 26
function $b2Shape$$($def$$, $body$$1$$) {
  this.$m_R$ = new $b2Mat22$$;
  this.$m_position$ = new $b2Vec2$$;
  this.$m_userData$ = $def$$.$userData$;
  this.$m_friction$ = $def$$.$friction$;
  this.$m_restitution$ = $def$$.$restitution$;
  this.$m_body$ = $body$$1$$;
  this.$m_proxyId$ = 65535;
  this.$m_maxRadius$ = 0;
  this.$m_categoryBits$ = $def$$.$categoryBits$;
  this.$m_maskBits$ = $def$$.$maskBits$;
  this.$m_groupIndex$ = $def$$.$groupIndex$
}
$b2Shape$$.prototype = {$ResetProxy$:$JSCompiler_emptyFn$$(), $GetNext$:$JSCompiler_get$$("$m_next$"), $DestroyProxy$:function $$b2Shape$$$$$DestroyProxy$$() {
  if(this.$m_proxyId$ != 65535) {
    this.$m_body$.$m_world$.$m_broadPhase$.$DestroyProxy$(this.$m_proxyId$);
    this.$m_proxyId$ = 65535
  }
}, $Synchronize$:$JSCompiler_emptyFn$$(), $m_next$:null, $m_R$:new $b2Mat22$$, $m_position$:new $b2Vec2$$, $m_type$:0, $m_userData$:null, $m_body$:null, $m_friction$:null, $m_restitution$:null, $m_maxRadius$:null, $m_proxyId$:0, $m_categoryBits$:0, $m_maskBits$:0, $m_groupIndex$:0};
var $b2Shape$e_unknownShape$$ = -1, $b2Shape$e_boxShape$$ = 1;
// Input 27
function $b2CircleDef$$() {
  this.type = $b2Shape$e_unknownShape$$;
  this.$userData$ = null;
  this.$localPosition$ = new $b2Vec2$$(0, 0);
  this.$localRotation$ = 0;
  this.$friction$ = 0.2;
  this.$density$ = this.$restitution$ = 0;
  this.$categoryBits$ = 1;
  this.$maskBits$ = 65535;
  this.type = this.$groupIndex$ = 0;
  this.$radius$ = 1
}
$goog$inherits$$($b2CircleDef$$, $b2ShapeDef$$);
// Input 28
function $b2CircleShape$$($aabb$$5_def$$1_rX$$1$$, $body$$2_broadPhase$$2_rY$$1$$, $localCenter$$) {
  this.$m_R$ = new $b2Mat22$$;
  this.$m_position$ = new $b2Vec2$$;
  this.$m_userData$ = $aabb$$5_def$$1_rX$$1$$.$userData$;
  this.$m_friction$ = $aabb$$5_def$$1_rX$$1$$.$friction$;
  this.$m_restitution$ = $aabb$$5_def$$1_rX$$1$$.$restitution$;
  this.$m_body$ = $body$$2_broadPhase$$2_rY$$1$$;
  this.$m_proxyId$ = 65535;
  this.$m_maxRadius$ = 0;
  this.$m_categoryBits$ = $aabb$$5_def$$1_rX$$1$$.$categoryBits$;
  this.$m_maskBits$ = $aabb$$5_def$$1_rX$$1$$.$maskBits$;
  this.$m_groupIndex$ = $aabb$$5_def$$1_rX$$1$$.$groupIndex$;
  this.$m_localPosition$ = new $b2Vec2$$;
  this.$m_localPosition$.$Set$($aabb$$5_def$$1_rX$$1$$.$localPosition$.x - $localCenter$$.x, $aabb$$5_def$$1_rX$$1$$.$localPosition$.y - $localCenter$$.y);
  this.$m_type$ = 0;
  this.$m_radius$ = $aabb$$5_def$$1_rX$$1$$.$radius$;
  $JSCompiler_StaticMethods_SetM$$(this.$m_R$, this.$m_body$.$m_R$);
  $aabb$$5_def$$1_rX$$1$$ = this.$m_R$.$col1$.x * this.$m_localPosition$.x + this.$m_R$.$col2$.x * this.$m_localPosition$.y;
  $body$$2_broadPhase$$2_rY$$1$$ = this.$m_R$.$col1$.y * this.$m_localPosition$.x + this.$m_R$.$col2$.y * this.$m_localPosition$.y;
  this.$m_position$.x = this.$m_body$.$m_position$.x + $aabb$$5_def$$1_rX$$1$$;
  this.$m_position$.y = this.$m_body$.$m_position$.y + $body$$2_broadPhase$$2_rY$$1$$;
  this.$m_maxRadius$ = Math.sqrt($aabb$$5_def$$1_rX$$1$$ * $aabb$$5_def$$1_rX$$1$$ + $body$$2_broadPhase$$2_rY$$1$$ * $body$$2_broadPhase$$2_rY$$1$$) + this.$m_radius$;
  $aabb$$5_def$$1_rX$$1$$ = new $b2AABB$$;
  $aabb$$5_def$$1_rX$$1$$.$minVertex$.$Set$(this.$m_position$.x - this.$m_radius$, this.$m_position$.y - this.$m_radius$);
  $aabb$$5_def$$1_rX$$1$$.$maxVertex$.$Set$(this.$m_position$.x + this.$m_radius$, this.$m_position$.y + this.$m_radius$);
  $body$$2_broadPhase$$2_rY$$1$$ = this.$m_body$.$m_world$.$m_broadPhase$;
  this.$m_proxyId$ = $body$$2_broadPhase$$2_rY$$1$$.$InRange$($aabb$$5_def$$1_rX$$1$$) ? $body$$2_broadPhase$$2_rY$$1$$.$CreateProxy$($aabb$$5_def$$1_rX$$1$$, this) : 65535;
  this.$m_proxyId$ == 65535 && this.$m_body$.$Freeze$()
}
$goog$inherits$$($b2CircleShape$$, $b2Shape$$);
$b2CircleShape$$.prototype.$Synchronize$ = function $$b2CircleShape$$$$$Synchronize$$($broadPhase$$3_lowerX_position1$$1$$, $R1$$1_lowerY$$, $p1X$$1_position2$$1_upperX$$, $R2$$1_aabb$$6_p1Y$$1$$) {
  $JSCompiler_StaticMethods_SetM$$(this.$m_R$, $R2$$1_aabb$$6_p1Y$$1$$);
  this.$m_position$.x = $R2$$1_aabb$$6_p1Y$$1$$.$col1$.x * this.$m_localPosition$.x + $R2$$1_aabb$$6_p1Y$$1$$.$col2$.x * this.$m_localPosition$.y + $p1X$$1_position2$$1_upperX$$.x;
  this.$m_position$.y = $R2$$1_aabb$$6_p1Y$$1$$.$col1$.y * this.$m_localPosition$.x + $R2$$1_aabb$$6_p1Y$$1$$.$col2$.y * this.$m_localPosition$.y + $p1X$$1_position2$$1_upperX$$.y;
  if(this.$m_proxyId$ != 65535) {
    $p1X$$1_position2$$1_upperX$$ = $broadPhase$$3_lowerX_position1$$1$$.x + ($R1$$1_lowerY$$.$col1$.x * this.$m_localPosition$.x + $R1$$1_lowerY$$.$col2$.x * this.$m_localPosition$.y);
    $R2$$1_aabb$$6_p1Y$$1$$ = $broadPhase$$3_lowerX_position1$$1$$.y + ($R1$$1_lowerY$$.$col1$.y * this.$m_localPosition$.x + $R1$$1_lowerY$$.$col2$.y * this.$m_localPosition$.y);
    $broadPhase$$3_lowerX_position1$$1$$ = Math.min($p1X$$1_position2$$1_upperX$$, this.$m_position$.x);
    $R1$$1_lowerY$$ = Math.min($R2$$1_aabb$$6_p1Y$$1$$, this.$m_position$.y);
    $p1X$$1_position2$$1_upperX$$ = Math.max($p1X$$1_position2$$1_upperX$$, this.$m_position$.x);
    var $upperY$$ = Math.max($R2$$1_aabb$$6_p1Y$$1$$, this.$m_position$.y);
    $R2$$1_aabb$$6_p1Y$$1$$ = new $b2AABB$$;
    $R2$$1_aabb$$6_p1Y$$1$$.$minVertex$.$Set$($broadPhase$$3_lowerX_position1$$1$$ - this.$m_radius$, $R1$$1_lowerY$$ - this.$m_radius$);
    $R2$$1_aabb$$6_p1Y$$1$$.$maxVertex$.$Set$($p1X$$1_position2$$1_upperX$$ + this.$m_radius$, $upperY$$ + this.$m_radius$);
    $broadPhase$$3_lowerX_position1$$1$$ = this.$m_body$.$m_world$.$m_broadPhase$;
    $broadPhase$$3_lowerX_position1$$1$$.$InRange$($R2$$1_aabb$$6_p1Y$$1$$) ? $broadPhase$$3_lowerX_position1$$1$$.$MoveProxy$(this.$m_proxyId$, $R2$$1_aabb$$6_p1Y$$1$$) : this.$m_body$.$Freeze$()
  }
};
$b2CircleShape$$.prototype.$ResetProxy$ = function $$b2CircleShape$$$$$ResetProxy$$($broadPhase$$4$$) {
  if(this.$m_proxyId$ != 65535) {
    $broadPhase$$4$$.$DestroyProxy$(this.$m_proxyId$);
    var $aabb$$7$$ = new $b2AABB$$;
    $aabb$$7$$.$minVertex$.$Set$(this.$m_position$.x - this.$m_radius$, this.$m_position$.y - this.$m_radius$);
    $aabb$$7$$.$maxVertex$.$Set$(this.$m_position$.x + this.$m_radius$, this.$m_position$.y + this.$m_radius$);
    this.$m_proxyId$ = $broadPhase$$4$$.$InRange$($aabb$$7$$) ? $broadPhase$$4$$.$CreateProxy$($aabb$$7$$, this) : 65535;
    this.$m_proxyId$ == 65535 && this.$m_body$.$Freeze$()
  }
};
// Input 29
function $b2PolyDef$$() {
  this.type = $b2Shape$e_unknownShape$$;
  this.$userData$ = null;
  this.$localPosition$ = new $b2Vec2$$(0, 0);
  this.$localRotation$ = 0;
  this.$friction$ = 0.2;
  this.$density$ = this.$restitution$ = 0;
  this.$categoryBits$ = 1;
  this.$maskBits$ = 65535;
  this.$groupIndex$ = 0;
  this.$vertices$ = Array(8);
  this.type = 2;
  for(var $i$$23$$ = this.$vertexCount$ = 0;$i$$23$$ < 8;$i$$23$$++) {
    this.$vertices$[$i$$23$$] = new $b2Vec2$$
  }
}
$goog$inherits$$($b2PolyDef$$, $b2ShapeDef$$);
// Input 30
function $b2PolyShape$$($def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$, $aabb$$8_body$$3$$, $hX_maxVertexX$$1_newOrigin_uX$$) {
  this.$m_R$ = new $b2Mat22$$;
  this.$m_position$ = new $b2Vec2$$;
  this.$m_userData$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$userData$;
  this.$m_friction$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$friction$;
  this.$m_restitution$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$restitution$;
  this.$m_body$ = $aabb$$8_body$$3$$;
  this.$m_proxyId$ = 65535;
  this.$m_maxRadius$ = 0;
  this.$m_categoryBits$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$categoryBits$;
  this.$m_maskBits$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$maskBits$;
  this.$m_groupIndex$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$groupIndex$;
  this.$syncAABB$ = new $b2AABB$$;
  this.$syncMat$ = new $b2Mat22$$;
  this.$m_localCentroid$ = new $b2Vec2$$;
  this.$m_localOBB$ = new $b2OBB$$;
  var $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ = 0, $count$$inline_16_hY_maxVertexY$$1_uY$$;
  $aabb$$8_body$$3$$ = new $b2AABB$$;
  this.$m_vertices$ = Array(8);
  this.$m_coreVertices$ = Array(8);
  this.$m_normals$ = Array(8);
  this.$m_type$ = 2;
  var $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = new $b2Mat22$$($def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$localRotation$);
  if($def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.type == $b2Shape$e_boxShape$$) {
    this.$m_localCentroid$.x = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$localPosition$.x - $hX_maxVertexX$$1_newOrigin_uX$$.x;
    this.$m_localCentroid$.y = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$localPosition$.y - $hX_maxVertexX$$1_newOrigin_uX$$.y;
    this.$m_vertexCount$ = 4;
    $hX_maxVertexX$$1_newOrigin_uX$$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$extents$.x;
    $count$$inline_16_hY_maxVertexY$$1_uY$$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$extents$.y;
    $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ = Math.max(0, $hX_maxVertexX$$1_newOrigin_uX$$ - 0.3);
    var $cX$$inline_18_centroidX_hcY_v$$6$$ = Math.max(0, $count$$inline_16_hY_maxVertexY$$1_uY$$ - 0.3);
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = this.$m_vertices$[0] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $count$$inline_16_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $count$$inline_16_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = this.$m_vertices$[1] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * -$hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $count$$inline_16_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * -$hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $count$$inline_16_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = this.$m_vertices$[2] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * -$hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * -$count$$inline_16_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * -$hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * -$count$$inline_16_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = this.$m_vertices$[3] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * -$count$$inline_16_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * -$count$$inline_16_hY_maxVertexY$$1_uY$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = this.$m_coreVertices$[0] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $cX$$inline_18_centroidX_hcY_v$$6$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $cX$$inline_18_centroidX_hcY_v$$6$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = this.$m_coreVertices$[1] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * -$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $cX$$inline_18_centroidX_hcY_v$$6$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * -$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $cX$$inline_18_centroidX_hcY_v$$6$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = this.$m_coreVertices$[2] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * -$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * -$cX$$inline_18_centroidX_hcY_v$$6$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * -$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * -$cX$$inline_18_centroidX_hcY_v$$6$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = this.$m_coreVertices$[3] = new $b2Vec2$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * -$cX$$inline_18_centroidX_hcY_v$$6$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.y = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * -$cX$$inline_18_centroidX_hcY_v$$6$$
  }else {
    this.$m_vertexCount$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$vertexCount$;
    $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$vertices$;
    $count$$inline_16_hY_maxVertexY$$1_uY$$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$vertexCount$;
    for(var $cY$$inline_19_centroidY$$ = $cX$$inline_18_centroidX_hcY_v$$6$$ = 0, $area$$inline_20_length$$5$$ = 0, $inv3$$inline_21$$ = 1 / 3, $i$$inline_22$$ = 0;$i$$inline_22$$ < $count$$inline_16_hY_maxVertexY$$1_uY$$;++$i$$inline_22$$) {
      var $p2X$$inline_23$$ = $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$[$i$$inline_22$$].x, $p2Y$$inline_24$$ = $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$[$i$$inline_22$$].y, $p3X$$inline_25$$ = $i$$inline_22$$ + 1 < $count$$inline_16_hY_maxVertexY$$1_uY$$ ? $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$[$i$$inline_22$$ + 1].x : $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$[0].x, 
      $p3Y$$inline_26$$ = $i$$inline_22$$ + 1 < $count$$inline_16_hY_maxVertexY$$1_uY$$ ? $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$[$i$$inline_22$$ + 1].y : $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$[0].y, $triangleArea$$inline_27$$ = 0.5 * (($p2X$$inline_23$$ - 0) * ($p3Y$$inline_26$$ - 0) - ($p2Y$$inline_24$$ - 0) * ($p3X$$inline_25$$ - 0));
      $area$$inline_20_length$$5$$ += $triangleArea$$inline_27$$;
      $cX$$inline_18_centroidX_hcY_v$$6$$ += $triangleArea$$inline_27$$ * $inv3$$inline_21$$ * (0 + $p2X$$inline_23$$ + $p3X$$inline_25$$);
      $cY$$inline_19_centroidY$$ += $triangleArea$$inline_27$$ * $inv3$$inline_21$$ * (0 + $p2Y$$inline_24$$ + $p3Y$$inline_26$$)
    }
    $cX$$inline_18_centroidX_hcY_v$$6$$ *= 1 / $area$$inline_20_length$$5$$;
    $cY$$inline_19_centroidY$$ *= 1 / $area$$inline_20_length$$5$$;
    $b2PolyShape$tempVec$$.$Set$($cX$$inline_18_centroidX_hcY_v$$6$$, $cY$$inline_19_centroidY$$);
    $cX$$inline_18_centroidX_hcY_v$$6$$ = $b2PolyShape$tempVec$$.x;
    $cY$$inline_19_centroidY$$ = $b2PolyShape$tempVec$$.y;
    this.$m_localCentroid$.x = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$localPosition$.x + ($JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $cX$$inline_18_centroidX_hcY_v$$6$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $cY$$inline_19_centroidY$$) - $hX_maxVertexX$$1_newOrigin_uX$$.x;
    this.$m_localCentroid$.y = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$localPosition$.y + ($JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $cX$$inline_18_centroidX_hcY_v$$6$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $cY$$inline_19_centroidY$$) - $hX_maxVertexX$$1_newOrigin_uX$$.y;
    for($JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ = 0;$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ < this.$m_vertexCount$;++$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$) {
      this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$] = new $b2Vec2$$;
      this.$m_coreVertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$] = new $b2Vec2$$;
      $hX_maxVertexX$$1_newOrigin_uX$$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].x - $cX$$inline_18_centroidX_hcY_v$$6$$;
      $count$$inline_16_hY_maxVertexY$$1_uY$$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$.$vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].y - $cY$$inline_19_centroidY$$;
      this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.x * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.x * $count$$inline_16_hY_maxVertexY$$1_uY$$;
      this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].y = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col1$.y * $hX_maxVertexX$$1_newOrigin_uX$$ + $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$col2$.y * $count$$inline_16_hY_maxVertexY$$1_uY$$;
      $hX_maxVertexX$$1_newOrigin_uX$$ = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].x;
      $count$$inline_16_hY_maxVertexY$$1_uY$$ = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].y;
      $area$$inline_20_length$$5$$ = Math.sqrt($hX_maxVertexX$$1_newOrigin_uX$$ * $hX_maxVertexX$$1_newOrigin_uX$$ + $count$$inline_16_hY_maxVertexY$$1_uY$$ * $count$$inline_16_hY_maxVertexY$$1_uY$$);
      if($area$$inline_20_length$$5$$ > Number.MIN_VALUE) {
        $hX_maxVertexX$$1_newOrigin_uX$$ *= 1 / $area$$inline_20_length$$5$$;
        $count$$inline_16_hY_maxVertexY$$1_uY$$ *= 1 / $area$$inline_20_length$$5$$
      }
      this.$m_coreVertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].x = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].x - 0.3 * $hX_maxVertexX$$1_newOrigin_uX$$;
      this.$m_coreVertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].y = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].y - 0.3 * $count$$inline_16_hY_maxVertexY$$1_uY$$
    }
  }
  $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = Number.MAX_VALUE;
  $hX_maxVertexX$$1_newOrigin_uX$$ = -Number.MAX_VALUE;
  $count$$inline_16_hY_maxVertexY$$1_uY$$ = -Number.MAX_VALUE;
  for($JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ = this.$m_maxRadius$ = 0;$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ < this.$m_vertexCount$;++$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$) {
    $cX$$inline_18_centroidX_hcY_v$$6$$ = this.$m_vertices$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$];
    $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = Math.min($JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$, $cX$$inline_18_centroidX_hcY_v$$6$$.x);
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = Math.min($def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$, $cX$$inline_18_centroidX_hcY_v$$6$$.y);
    $hX_maxVertexX$$1_newOrigin_uX$$ = Math.max($hX_maxVertexX$$1_newOrigin_uX$$, $cX$$inline_18_centroidX_hcY_v$$6$$.x);
    $count$$inline_16_hY_maxVertexY$$1_uY$$ = Math.max($count$$inline_16_hY_maxVertexY$$1_uY$$, $cX$$inline_18_centroidX_hcY_v$$6$$.y);
    this.$m_maxRadius$ = Math.max(this.$m_maxRadius$, $JSCompiler_StaticMethods_Length$$($cX$$inline_18_centroidX_hcY_v$$6$$))
  }
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ = this.$m_localOBB$.$R$;
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$.$col1$.x = 1;
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$.$col2$.x = 0;
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$.$col1$.y = 0;
  $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$.$col2$.y = 1;
  this.$m_localOBB$.$center$.$Set$(($JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ + $hX_maxVertexX$$1_newOrigin_uX$$) * 0.5, ($def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ + $count$$inline_16_hY_maxVertexY$$1_uY$$) * 0.5);
  this.$m_localOBB$.$extents$.$Set$(($hX_maxVertexX$$1_newOrigin_uX$$ - $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$) * 0.5, ($count$$inline_16_hY_maxVertexY$$1_uY$$ - $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$) * 0.5);
  for($JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = 0;$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ < this.$m_vertexCount$;++$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$) {
    this.$m_normals$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$] = new $b2Vec2$$;
    $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$;
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + 1 < this.$m_vertexCount$ ? $JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ + 1 : 0;
    this.$m_normals$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].x = this.$m_vertices$[$def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$].y - this.$m_vertices$[$JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$].y;
    this.$m_normals$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$].y = -(this.$m_vertices$[$def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$].x - this.$m_vertices$[$JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$].x);
    $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = this.$m_normals$[$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$];
    $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = $JSCompiler_StaticMethods_Length$$($JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$);
    if(!($def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ < Number.MIN_VALUE)) {
      $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = 1 / $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$;
      $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.x *= $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$;
      $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.y *= $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$
    }
  }
  for($JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ = 0;$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$ < this.$m_vertexCount$;++$JSCompiler_StaticMethods_SetIdentity$self$$inline_30_hcX_i$$25_vs$$inline_15$$) {
  }
  $JSCompiler_StaticMethods_SetM$$(this.$m_R$, this.$m_body$.$m_R$);
  this.$m_position$.x = this.$m_body$.$m_position$.x + (this.$m_R$.$col1$.x * this.$m_localCentroid$.x + this.$m_R$.$col2$.x * this.$m_localCentroid$.y);
  this.$m_position$.y = this.$m_body$.$m_position$.y + (this.$m_R$.$col1$.y * this.$m_localCentroid$.x + this.$m_R$.$col2$.y * this.$m_localCentroid$.y);
  $b2PolyShape$tAbsR$$.$col1$.x = this.$m_R$.$col1$.x * this.$m_localOBB$.$R$.$col1$.x + this.$m_R$.$col2$.x * this.$m_localOBB$.$R$.$col1$.y;
  $b2PolyShape$tAbsR$$.$col1$.y = this.$m_R$.$col1$.y * this.$m_localOBB$.$R$.$col1$.x + this.$m_R$.$col2$.y * this.$m_localOBB$.$R$.$col1$.y;
  $b2PolyShape$tAbsR$$.$col2$.x = this.$m_R$.$col1$.x * this.$m_localOBB$.$R$.$col2$.x + this.$m_R$.$col2$.x * this.$m_localOBB$.$R$.$col2$.y;
  $b2PolyShape$tAbsR$$.$col2$.y = this.$m_R$.$col1$.y * this.$m_localOBB$.$R$.$col2$.x + this.$m_R$.$col2$.y * this.$m_localOBB$.$R$.$col2$.y;
  $b2PolyShape$tAbsR$$.$Abs$();
  $hX_maxVertexX$$1_newOrigin_uX$$ = $b2PolyShape$tAbsR$$.$col1$.x * this.$m_localOBB$.$extents$.x + $b2PolyShape$tAbsR$$.$col2$.x * this.$m_localOBB$.$extents$.y;
  $count$$inline_16_hY_maxVertexY$$1_uY$$ = $b2PolyShape$tAbsR$$.$col1$.y * this.$m_localOBB$.$extents$.x + $b2PolyShape$tAbsR$$.$col2$.y * this.$m_localOBB$.$extents$.y;
  $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = this.$m_position$.x + (this.$m_R$.$col1$.x * this.$m_localOBB$.$center$.x + this.$m_R$.$col2$.x * this.$m_localOBB$.$center$.y);
  $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ = this.$m_position$.y + (this.$m_R$.$col1$.y * this.$m_localOBB$.$center$.x + this.$m_R$.$col2$.y * this.$m_localOBB$.$center$.y);
  $aabb$$8_body$$3$$.$minVertex$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ - $hX_maxVertexX$$1_newOrigin_uX$$;
  $aabb$$8_body$$3$$.$minVertex$.y = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ - $count$$inline_16_hY_maxVertexY$$1_uY$$;
  $aabb$$8_body$$3$$.$maxVertex$.x = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ + $hX_maxVertexX$$1_newOrigin_uX$$;
  $aabb$$8_body$$3$$.$maxVertex$.y = $def$$2_i2$$1_invLength$$inline_37_length$$inline_36_minVertexY$$1_positionY_tVec$$6$$ + $count$$inline_16_hY_maxVertexY$$1_uY$$;
  $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$ = this.$m_body$.$m_world$.$m_broadPhase$;
  this.$m_proxyId$ = $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$InRange$($aabb$$8_body$$3$$) ? $JSCompiler_StaticMethods_Normalize$self$$inline_35_broadPhase$$5_i1$$1_localR_minVertexX$$1_positionX$$.$CreateProxy$($aabb$$8_body$$3$$, this) : 65535;
  this.$m_proxyId$ == 65535 && this.$m_body$.$Freeze$()
}
$goog$inherits$$($b2PolyShape$$, $b2Shape$$);
$b2PolyShape$$.prototype.$syncAABB$ = new $b2AABB$$;
$b2PolyShape$$.prototype.$syncMat$ = new $b2Mat22$$;
$b2PolyShape$$.prototype.$Synchronize$ = function $$b2PolyShape$$$$$Synchronize$$($centerY_position1$$2$$, $R1$$2$$, $broadPhase$$6_position2$$2$$, $R2$$2$$) {
  $JSCompiler_StaticMethods_SetM$$(this.$m_R$, $R2$$2$$);
  this.$m_position$.x = this.$m_body$.$m_position$.x + ($R2$$2$$.$col1$.x * this.$m_localCentroid$.x + $R2$$2$$.$col2$.x * this.$m_localCentroid$.y);
  this.$m_position$.y = this.$m_body$.$m_position$.y + ($R2$$2$$.$col1$.y * this.$m_localCentroid$.x + $R2$$2$$.$col2$.y * this.$m_localCentroid$.y);
  if(this.$m_proxyId$ != 65535) {
    var $hX$$1_v1$$, $hY$$1_v2$$;
    $hX$$1_v1$$ = $R1$$2$$.$col1$;
    $hY$$1_v2$$ = $R1$$2$$.$col2$;
    var $centerX_v3$$ = this.$m_localOBB$.$R$.$col1$, $v4$$ = this.$m_localOBB$.$R$.$col2$;
    this.$syncMat$.$col1$.x = $hX$$1_v1$$.x * $centerX_v3$$.x + $hY$$1_v2$$.x * $centerX_v3$$.y;
    this.$syncMat$.$col1$.y = $hX$$1_v1$$.y * $centerX_v3$$.x + $hY$$1_v2$$.y * $centerX_v3$$.y;
    this.$syncMat$.$col2$.x = $hX$$1_v1$$.x * $v4$$.x + $hY$$1_v2$$.x * $v4$$.y;
    this.$syncMat$.$col2$.y = $hX$$1_v1$$.y * $v4$$.x + $hY$$1_v2$$.y * $v4$$.y;
    this.$syncMat$.$Abs$();
    $hX$$1_v1$$ = this.$m_localCentroid$.x + this.$m_localOBB$.$center$.x;
    $hY$$1_v2$$ = this.$m_localCentroid$.y + this.$m_localOBB$.$center$.y;
    $centerX_v3$$ = $centerY_position1$$2$$.x + ($R1$$2$$.$col1$.x * $hX$$1_v1$$ + $R1$$2$$.$col2$.x * $hY$$1_v2$$);
    $centerY_position1$$2$$ = $centerY_position1$$2$$.y + ($R1$$2$$.$col1$.y * $hX$$1_v1$$ + $R1$$2$$.$col2$.y * $hY$$1_v2$$);
    $hX$$1_v1$$ = this.$syncMat$.$col1$.x * this.$m_localOBB$.$extents$.x + this.$syncMat$.$col2$.x * this.$m_localOBB$.$extents$.y;
    $hY$$1_v2$$ = this.$syncMat$.$col1$.y * this.$m_localOBB$.$extents$.x + this.$syncMat$.$col2$.y * this.$m_localOBB$.$extents$.y;
    this.$syncAABB$.$minVertex$.x = $centerX_v3$$ - $hX$$1_v1$$;
    this.$syncAABB$.$minVertex$.y = $centerY_position1$$2$$ - $hY$$1_v2$$;
    this.$syncAABB$.$maxVertex$.x = $centerX_v3$$ + $hX$$1_v1$$;
    this.$syncAABB$.$maxVertex$.y = $centerY_position1$$2$$ + $hY$$1_v2$$;
    $hX$$1_v1$$ = $R2$$2$$.$col1$;
    $hY$$1_v2$$ = $R2$$2$$.$col2$;
    $centerX_v3$$ = this.$m_localOBB$.$R$.$col1$;
    $v4$$ = this.$m_localOBB$.$R$.$col2$;
    this.$syncMat$.$col1$.x = $hX$$1_v1$$.x * $centerX_v3$$.x + $hY$$1_v2$$.x * $centerX_v3$$.y;
    this.$syncMat$.$col1$.y = $hX$$1_v1$$.y * $centerX_v3$$.x + $hY$$1_v2$$.y * $centerX_v3$$.y;
    this.$syncMat$.$col2$.x = $hX$$1_v1$$.x * $v4$$.x + $hY$$1_v2$$.x * $v4$$.y;
    this.$syncMat$.$col2$.y = $hX$$1_v1$$.y * $v4$$.x + $hY$$1_v2$$.y * $v4$$.y;
    this.$syncMat$.$Abs$();
    $hX$$1_v1$$ = this.$m_localCentroid$.x + this.$m_localOBB$.$center$.x;
    $hY$$1_v2$$ = this.$m_localCentroid$.y + this.$m_localOBB$.$center$.y;
    $centerX_v3$$ = $broadPhase$$6_position2$$2$$.x + ($R2$$2$$.$col1$.x * $hX$$1_v1$$ + $R2$$2$$.$col2$.x * $hY$$1_v2$$);
    $centerY_position1$$2$$ = $broadPhase$$6_position2$$2$$.y + ($R2$$2$$.$col1$.y * $hX$$1_v1$$ + $R2$$2$$.$col2$.y * $hY$$1_v2$$);
    $hX$$1_v1$$ = this.$syncMat$.$col1$.x * this.$m_localOBB$.$extents$.x + this.$syncMat$.$col2$.x * this.$m_localOBB$.$extents$.y;
    $hY$$1_v2$$ = this.$syncMat$.$col1$.y * this.$m_localOBB$.$extents$.x + this.$syncMat$.$col2$.y * this.$m_localOBB$.$extents$.y;
    this.$syncAABB$.$minVertex$.x = Math.min(this.$syncAABB$.$minVertex$.x, $centerX_v3$$ - $hX$$1_v1$$);
    this.$syncAABB$.$minVertex$.y = Math.min(this.$syncAABB$.$minVertex$.y, $centerY_position1$$2$$ - $hY$$1_v2$$);
    this.$syncAABB$.$maxVertex$.x = Math.max(this.$syncAABB$.$maxVertex$.x, $centerX_v3$$ + $hX$$1_v1$$);
    this.$syncAABB$.$maxVertex$.y = Math.max(this.$syncAABB$.$maxVertex$.y, $centerY_position1$$2$$ + $hY$$1_v2$$);
    $broadPhase$$6_position2$$2$$ = this.$m_body$.$m_world$.$m_broadPhase$;
    $broadPhase$$6_position2$$2$$.$InRange$(this.$syncAABB$) ? $broadPhase$$6_position2$$2$$.$MoveProxy$(this.$m_proxyId$, this.$syncAABB$) : this.$m_body$.$Freeze$()
  }
};
$b2PolyShape$$.prototype.$ResetProxy$ = function $$b2PolyShape$$$$$ResetProxy$$($broadPhase$$7$$) {
  if(this.$m_proxyId$ != 65535) {
    $broadPhase$$7$$.$DestroyProxy$(this.$m_proxyId$);
    var $R$$3_absR_h$$4$$ = new $b2Mat22$$(0, $b2Math$b2MulMV$$(this.$m_R$, this.$m_localOBB$.$R$.$col1$), $b2Math$b2MulMV$$(this.$m_R$, this.$m_localOBB$.$R$.$col2$));
    $R$$3_absR_h$$4$$ = new $b2Mat22$$(0, new $b2Vec2$$($b2Math$b2Abs$$($R$$3_absR_h$$4$$.$col1$.x), $b2Math$b2Abs$$($R$$3_absR_h$$4$$.$col1$.y)), new $b2Vec2$$($b2Math$b2Abs$$($R$$3_absR_h$$4$$.$col2$.x), $b2Math$b2Abs$$($R$$3_absR_h$$4$$.$col2$.y)));
    $R$$3_absR_h$$4$$ = $b2Math$b2MulMV$$($R$$3_absR_h$$4$$, this.$m_localOBB$.$extents$);
    var $position$$3$$ = $b2Math$b2MulMV$$(this.$m_R$, this.$m_localOBB$.$center$);
    $JSCompiler_StaticMethods_Add$$($position$$3$$, this.$m_position$);
    var $aabb$$9$$ = new $b2AABB$$;
    $JSCompiler_StaticMethods_SetV$$($aabb$$9$$.$minVertex$, $position$$3$$);
    var $JSCompiler_StaticMethods_Subtract$self$$inline_41$$ = $aabb$$9$$.$minVertex$;
    $JSCompiler_StaticMethods_Subtract$self$$inline_41$$.x -= $R$$3_absR_h$$4$$.x;
    $JSCompiler_StaticMethods_Subtract$self$$inline_41$$.y -= $R$$3_absR_h$$4$$.y;
    $JSCompiler_StaticMethods_SetV$$($aabb$$9$$.$maxVertex$, $position$$3$$);
    $JSCompiler_StaticMethods_Add$$($aabb$$9$$.$maxVertex$, $R$$3_absR_h$$4$$);
    this.$m_proxyId$ = $broadPhase$$7$$.$InRange$($aabb$$9$$) ? $broadPhase$$7$$.$CreateProxy$($aabb$$9$$, this) : 65535;
    this.$m_proxyId$ == 65535 && this.$m_body$.$Freeze$()
  }
};
var $b2PolyShape$tempVec$$ = new $b2Vec2$$, $b2PolyShape$tAbsR$$ = new $b2Mat22$$;
// Input 31
// Input 32
function $b2Body$$($bd$$, $world$$1$$) {
  this.$sMat0$ = new $b2Mat22$$;
  this.$m_position$ = new $b2Vec2$$;
  this.$m_R$ = new $b2Mat22$$(0);
  this.$m_position0$ = new $b2Vec2$$;
  var $i$$28$$ = 0, $r_sd$$1$$, $def$$inline_52_massData$$2_shape$$1$$;
  this.$m_flags$ = 0;
  $JSCompiler_StaticMethods_SetV$$(this.$m_position$, $bd$$.position);
  this.$m_rotation$ = $bd$$.rotation;
  this.$m_R$.$Set$(this.$m_rotation$);
  $JSCompiler_StaticMethods_SetV$$(this.$m_position0$, this.$m_position$);
  this.$m_rotation0$ = this.$m_rotation$;
  this.$m_world$ = $world$$1$$;
  this.$m_linearDamping$ = $b2Math$b2Clamp$$(1 - $bd$$.$linearDamping$, 0, 1);
  this.$m_angularDamping$ = $b2Math$b2Clamp$$(1 - $bd$$.$angularDamping$, 0, 1);
  this.$m_force$ = new $b2Vec2$$(0, 0);
  this.$m_mass$ = this.$m_torque$ = 0;
  var $center$$inline_54_massDatas$$ = Array(64);
  for($i$$28$$ = 0;$i$$28$$ < 64;$i$$28$$++) {
    $center$$inline_54_massDatas$$[$i$$28$$] = new $b2MassData$$
  }
  this.$m_shapeCount$ = 0;
  this.$m_center$ = new $b2Vec2$$(0, 0);
  for($i$$28$$ = 0;$i$$28$$ < 64;++$i$$28$$) {
    $r_sd$$1$$ = $bd$$.$shapes$[$i$$28$$];
    if($r_sd$$1$$ == null) {
      break
    }
    $def$$inline_52_massData$$2_shape$$1$$ = $center$$inline_54_massDatas$$[$i$$28$$];
    var $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$ = $r_sd$$1$$, $massData$$inline_412_massData$$inline_47$$ = $def$$inline_52_massData$$2_shape$$1$$;
    $massData$$inline_412_massData$$inline_47$$.$center$ = new $b2Vec2$$(0, 0);
    if($JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$density$ == 0) {
      $massData$$inline_412_massData$$inline_47$$.$mass$ = 0;
      $massData$$inline_412_massData$$inline_47$$.$center$.$Set$(0, 0);
      $massData$$inline_412_massData$$inline_47$$.$I$ = 0
    }
    switch($JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.type) {
      case 0:
        $massData$$inline_412_massData$$inline_47$$.$mass$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$density$ * $b2Settings$b2_pi$$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$radius$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$radius$;
        $massData$$inline_412_massData$$inline_47$$.$center$.$Set$(0, 0);
        $massData$$inline_412_massData$$inline_47$$.$I$ = 0.5 * $massData$$inline_412_massData$$inline_47$$.$mass$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$radius$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$radius$;
        break;
      case $b2Shape$e_boxShape$$:
        $massData$$inline_412_massData$$inline_47$$.$mass$ = 4 * $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$density$ * $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$extents$.x * $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$extents$.y;
        $massData$$inline_412_massData$$inline_47$$.$center$.$Set$(0, 0);
        $massData$$inline_412_massData$$inline_47$$.$I$ = $massData$$inline_412_massData$$inline_47$$.$mass$ / 3 * $b2Math$b2Dot$$($JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$extents$, $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$extents$);
        break;
      case 2:
        $massData$$inline_412_massData$$inline_47$$ = $massData$$inline_412_massData$$inline_47$$;
        var $vs$$inline_413$$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$vertices$, $count$$inline_414$$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$vertexCount$;
        $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$.$density$;
        var $center$$inline_416$$ = new $b2Vec2$$;
        $center$$inline_416$$.$SetZero$();
        for(var $area$$inline_417$$ = 0, $I$$inline_418$$ = 0, $pRef$$inline_419$$ = new $b2Vec2$$(0, 0), $inv3$$inline_420$$ = 1 / 3, $i$$inline_421$$ = 0;$i$$inline_421$$ < $count$$inline_414$$;++$i$$inline_421$$) {
          var $p1$$inline_422_py$$inline_431$$ = $pRef$$inline_419$$, $p2$$inline_423_px$$inline_430$$ = $vs$$inline_413$$[$i$$inline_421$$], $ex1$$inline_432_p3$$inline_424$$ = $i$$inline_421$$ + 1 < $count$$inline_414$$ ? $vs$$inline_413$$[$i$$inline_421$$ + 1] : $vs$$inline_413$$[0], $e1$$inline_425_ey1$$inline_433$$ = $b2Math$SubtractVV$$($p2$$inline_423_px$$inline_430$$, $p1$$inline_422_py$$inline_431$$), $e2$$inline_426_ey2$$inline_435$$ = $b2Math$SubtractVV$$($ex1$$inline_432_p3$$inline_424$$, 
          $p1$$inline_422_py$$inline_431$$), $D$$inline_427$$ = $e1$$inline_425_ey1$$inline_433$$.x * $e2$$inline_426_ey2$$inline_435$$.y - $e1$$inline_425_ey1$$inline_433$$.y * $e2$$inline_426_ey2$$inline_435$$.x, $ex2$$inline_434_triangleArea$$inline_428$$ = 0.5 * $D$$inline_427$$;
          $area$$inline_417$$ += $ex2$$inline_434_triangleArea$$inline_428$$;
          var $tVec$$inline_429$$ = new $b2Vec2$$;
          $JSCompiler_StaticMethods_SetV$$($tVec$$inline_429$$, $p1$$inline_422_py$$inline_431$$);
          $JSCompiler_StaticMethods_Add$$($tVec$$inline_429$$, $p2$$inline_423_px$$inline_430$$);
          $JSCompiler_StaticMethods_Add$$($tVec$$inline_429$$, $ex1$$inline_432_p3$$inline_424$$);
          $JSCompiler_StaticMethods_Multiply$$($tVec$$inline_429$$, $inv3$$inline_420$$ * $ex2$$inline_434_triangleArea$$inline_428$$);
          $JSCompiler_StaticMethods_Add$$($center$$inline_416$$, $tVec$$inline_429$$);
          $p2$$inline_423_px$$inline_430$$ = $p1$$inline_422_py$$inline_431$$.x;
          $p1$$inline_422_py$$inline_431$$ = $p1$$inline_422_py$$inline_431$$.y;
          $ex1$$inline_432_p3$$inline_424$$ = $e1$$inline_425_ey1$$inline_433$$.x;
          $e1$$inline_425_ey1$$inline_433$$ = $e1$$inline_425_ey1$$inline_433$$.y;
          $ex2$$inline_434_triangleArea$$inline_428$$ = $e2$$inline_426_ey2$$inline_435$$.x;
          $e2$$inline_426_ey2$$inline_435$$ = $e2$$inline_426_ey2$$inline_435$$.y;
          $I$$inline_418$$ += $D$$inline_427$$ * ($inv3$$inline_420$$ * (0.25 * ($ex1$$inline_432_p3$$inline_424$$ * $ex1$$inline_432_p3$$inline_424$$ + $ex2$$inline_434_triangleArea$$inline_428$$ * $ex1$$inline_432_p3$$inline_424$$ + $ex2$$inline_434_triangleArea$$inline_428$$ * $ex2$$inline_434_triangleArea$$inline_428$$) + ($p2$$inline_423_px$$inline_430$$ * $ex1$$inline_432_p3$$inline_424$$ + $p2$$inline_423_px$$inline_430$$ * $ex2$$inline_434_triangleArea$$inline_428$$)) + 0.5 * $p2$$inline_423_px$$inline_430$$ * 
          $p2$$inline_423_px$$inline_430$$ + ($inv3$$inline_420$$ * (0.25 * ($e1$$inline_425_ey1$$inline_433$$ * $e1$$inline_425_ey1$$inline_433$$ + $e2$$inline_426_ey2$$inline_435$$ * $e1$$inline_425_ey1$$inline_433$$ + $e2$$inline_426_ey2$$inline_435$$ * $e2$$inline_426_ey2$$inline_435$$) + ($p1$$inline_422_py$$inline_431$$ * $e1$$inline_425_ey1$$inline_433$$ + $p1$$inline_422_py$$inline_431$$ * $e2$$inline_426_ey2$$inline_435$$)) + 0.5 * $p1$$inline_422_py$$inline_431$$ * $p1$$inline_422_py$$inline_431$$))
        }
        $massData$$inline_412_massData$$inline_47$$.$mass$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$ * $area$$inline_417$$;
        $JSCompiler_StaticMethods_Multiply$$($center$$inline_416$$, 1 / $area$$inline_417$$);
        $massData$$inline_412_massData$$inline_47$$.$center$ = $center$$inline_416$$;
        $I$$inline_418$$ = $JSCompiler_StaticMethods_ComputeMass$self$$inline_46_rho$$inline_415$$ * ($I$$inline_418$$ - $area$$inline_417$$ * $b2Math$b2Dot$$($center$$inline_416$$, $center$$inline_416$$));
        $massData$$inline_412_massData$$inline_47$$.$I$ = $I$$inline_418$$;
        break;
      default:
        $massData$$inline_412_massData$$inline_47$$.$mass$ = 0;
        $massData$$inline_412_massData$$inline_47$$.$center$.$Set$(0, 0);
        $massData$$inline_412_massData$$inline_47$$.$I$ = 0;
        break
    }
    this.$m_mass$ += $def$$inline_52_massData$$2_shape$$1$$.$mass$;
    this.$m_center$.x += $def$$inline_52_massData$$2_shape$$1$$.$mass$ * ($r_sd$$1$$.$localPosition$.x + $def$$inline_52_massData$$2_shape$$1$$.$center$.x);
    this.$m_center$.y += $def$$inline_52_massData$$2_shape$$1$$.$mass$ * ($r_sd$$1$$.$localPosition$.y + $def$$inline_52_massData$$2_shape$$1$$.$center$.y);
    ++this.$m_shapeCount$
  }
  if(this.$m_mass$ > 0) {
    $JSCompiler_StaticMethods_Multiply$$(this.$m_center$, 1 / this.$m_mass$);
    $JSCompiler_StaticMethods_Add$$(this.$m_position$, $b2Math$b2MulMV$$(this.$m_R$, this.$m_center$))
  }else {
    this.$m_flags$ |= $b2Body$e_staticFlag$$
  }
  for($i$$28$$ = this.$m_I$ = 0;$i$$28$$ < this.$m_shapeCount$;++$i$$28$$) {
    $r_sd$$1$$ = $bd$$.$shapes$[$i$$28$$];
    $def$$inline_52_massData$$2_shape$$1$$ = $center$$inline_54_massDatas$$[$i$$28$$];
    this.$m_I$ += $def$$inline_52_massData$$2_shape$$1$$.$I$;
    $r_sd$$1$$ = $b2Math$SubtractVV$$($b2Math$AddVV$$($r_sd$$1$$.$localPosition$, $def$$inline_52_massData$$2_shape$$1$$.$center$), this.$m_center$);
    this.$m_I$ += $def$$inline_52_massData$$2_shape$$1$$.$mass$ * $b2Math$b2Dot$$($r_sd$$1$$, $r_sd$$1$$)
  }
  this.$m_invMass$ = this.$m_mass$ > 0 ? 1 / this.$m_mass$ : 0;
  if(this.$m_I$ > 0 && $bd$$.$preventRotation$ == false) {
    this.$m_invI$ = 1 / this.$m_I$
  }else {
    this.$m_invI$ = this.$m_I$ = 0
  }
  this.$m_linearVelocity$ = $b2Math$AddVV$$($bd$$.$linearVelocity$, new $b2Vec2$$(-$bd$$.$angularVelocity$ * this.$m_center$.y, $bd$$.$angularVelocity$ * this.$m_center$.x));
  this.$m_angularVelocity$ = $bd$$.$angularVelocity$;
  this.$m_shapeList$ = this.$m_next$ = this.$m_prev$ = this.$m_contactList$ = this.$m_jointList$ = null;
  for($i$$28$$ = 0;$i$$28$$ < this.$m_shapeCount$;++$i$$28$$) {
    $r_sd$$1$$ = $bd$$.$shapes$[$i$$28$$];
    a: {
      $def$$inline_52_massData$$2_shape$$1$$ = $r_sd$$1$$;
      $center$$inline_54_massDatas$$ = this.$m_center$;
      switch($def$$inline_52_massData$$2_shape$$1$$.type) {
        case 0:
          $def$$inline_52_massData$$2_shape$$1$$ = new $b2CircleShape$$($def$$inline_52_massData$$2_shape$$1$$, this, $center$$inline_54_massDatas$$);
          break a;
        case $b2Shape$e_boxShape$$:
        ;
        case 2:
          $def$$inline_52_massData$$2_shape$$1$$ = new $b2PolyShape$$($def$$inline_52_massData$$2_shape$$1$$, this, $center$$inline_54_massDatas$$);
          break a
      }
      $def$$inline_52_massData$$2_shape$$1$$ = null
    }
    $def$$inline_52_massData$$2_shape$$1$$.$m_next$ = this.$m_shapeList$;
    this.$m_shapeList$ = $def$$inline_52_massData$$2_shape$$1$$
  }
  this.$m_sleepTime$ = 0;
  if($bd$$.$allowSleep$) {
    this.$m_flags$ |= $b2Body$e_allowSleepFlag$$
  }
  if($bd$$.$isSleeping$) {
    this.$m_flags$ |= $b2Body$e_sleepFlag$$
  }
  if(this.$m_flags$ & $b2Body$e_sleepFlag$$ || this.$m_invMass$ == 0) {
    this.$m_linearVelocity$.$Set$(0, 0);
    this.$m_angularVelocity$ = 0
  }
  this.$m_userData$ = $bd$$.$userData$
}
$b2Body$$.prototype = {$IsStatic$:function $$b2Body$$$$$IsStatic$$() {
  return(this.$m_flags$ & $b2Body$e_staticFlag$$) == $b2Body$e_staticFlag$$
}, $IsFrozen$:function $$b2Body$$$$$IsFrozen$$() {
  return(this.$m_flags$ & $b2Body$e_frozenFlag$$) == $b2Body$e_frozenFlag$$
}, $IsSleeping$:function $$b2Body$$$$$IsSleeping$$() {
  return(this.$m_flags$ & $b2Body$e_sleepFlag$$) == $b2Body$e_sleepFlag$$
}, $WakeUp$:function $$b2Body$$$$$WakeUp$$() {
  this.$m_flags$ &= ~$b2Body$e_sleepFlag$$;
  this.$m_sleepTime$ = 0
}, $GetNext$:$JSCompiler_get$$("$m_next$"), $Destroy$:function $$b2Body$$$$$Destroy$$() {
  for(var $s$$14$$ = this.$m_shapeList$;$s$$14$$;) {
    var $s0$$ = $s$$14$$;
    $s$$14$$ = $s$$14$$.$m_next$;
    $s0$$.$m_proxyId$ != 65535 && $s0$$.$m_body$.$m_world$.$m_broadPhase$.$DestroyProxy$($s0$$.$m_proxyId$)
  }
}, $sMat0$:new $b2Mat22$$, $SynchronizeShapes$:function $$b2Body$$$$$SynchronizeShapes$$() {
  this.$sMat0$.$Set$(this.$m_rotation0$);
  for(var $s$$15$$ = this.$m_shapeList$;$s$$15$$ != null;$s$$15$$ = $s$$15$$.$m_next$) {
    $s$$15$$.$Synchronize$(this.$m_position0$, this.$sMat0$, this.$m_position$, this.$m_R$)
  }
}, $IsConnected$:function $$b2Body$$$$$IsConnected$$($other$$4$$) {
  for(var $jn$$ = this.$m_jointList$;$jn$$ != null;$jn$$ = $jn$$.next) {
    if($jn$$.$other$ == $other$$4$$) {
      return $jn$$.$joint$.$m_collideConnected$ == false
    }
  }
  return false
}, $Freeze$:function $$b2Body$$$$$Freeze$$() {
  this.$m_flags$ |= $b2Body$e_frozenFlag$$;
  this.$m_linearVelocity$.$SetZero$();
  this.$m_angularVelocity$ = 0;
  for(var $s$$17$$ = this.$m_shapeList$;$s$$17$$ != null;$s$$17$$ = $s$$17$$.$m_next$) {
    $s$$17$$.$DestroyProxy$()
  }
}, $m_flags$:0, $m_position$:new $b2Vec2$$, $m_rotation$:null, $m_R$:new $b2Mat22$$(0), $m_position0$:new $b2Vec2$$, $m_rotation0$:null, $m_linearVelocity$:null, $m_angularVelocity$:null, $m_force$:null, $m_torque$:null, $m_center$:null, $m_world$:null, $m_prev$:null, $m_next$:null, $m_shapeList$:null, $m_shapeCount$:0, $m_jointList$:null, $m_contactList$:null, $m_mass$:null, $m_invMass$:null, $m_I$:null, $m_invI$:null, $m_linearDamping$:null, $m_angularDamping$:null, $m_sleepTime$:null, $m_userData$:null};
var $b2Body$e_staticFlag$$ = 1, $b2Body$e_frozenFlag$$ = 2, $b2Body$e_sleepFlag$$ = 8, $b2Body$e_allowSleepFlag$$ = 16;
// Input 33
function $b2BodyDef$$() {
  this.$shapes$ = [];
  this.$userData$ = null;
  for(var $i$$29$$ = 0;$i$$29$$ < 64;$i$$29$$++) {
    this.$shapes$[$i$$29$$] = null
  }
  this.position = new $b2Vec2$$(0, 0);
  this.rotation = 0;
  this.$linearVelocity$ = new $b2Vec2$$(0, 0);
  this.$angularDamping$ = this.$linearDamping$ = this.$angularVelocity$ = 0;
  this.$allowSleep$ = true;
  this.$preventRotation$ = this.$isSleeping$ = false
}
$b2BodyDef$$.prototype = {$userData$:null, $shapes$:[], position:null, rotation:null, $linearVelocity$:null, $angularVelocity$:null, $linearDamping$:null, $angularDamping$:null, $allowSleep$:null, $isSleeping$:null, $preventRotation$:null, $AddShape$:function $$b2BodyDef$$$$$AddShape$$($shape$$2$$) {
  for(var $i$$30$$ = 0;$i$$30$$ < 64;++$i$$30$$) {
    if(this.$shapes$[$i$$30$$] == null) {
      this.$shapes$[$i$$30$$] = $shape$$2$$;
      break
    }
  }
}};
// Input 34
var $b2CollisionFilter$b2_defaultFilter$$ = new ($JSCompiler_emptyFn$$());
// Input 35
function $b2TimeStep$$() {
}
$b2TimeStep$$.prototype = {$dt$:null, $inv_dt$:null, $iterations$:0};
// Input 36
// Input 37
function $b2ContactConstraintPoint$$() {
  this.$localAnchor1$ = new $b2Vec2$$;
  this.$localAnchor2$ = new $b2Vec2$$
}
$b2ContactConstraintPoint$$.prototype = {$normalImpulse$:null, $tangentImpulse$:null, $positionImpulse$:null, $normalMass$:null, $tangentMass$:null, $separation$:null, $velocityBias$:null};
// Input 38
function $b2ContactConstraint$$() {
  this.$normal$ = new $b2Vec2$$;
  this.$points$ = Array(2);
  for(var $i$$31$$ = 0;$i$$31$$ < 2;$i$$31$$++) {
    this.$points$[$i$$31$$] = new $b2ContactConstraintPoint$$
  }
}
$b2ContactConstraint$$.prototype = {$manifold$:null, $body1$:null, $body2$:null, $friction$:null, $restitution$:null, $pointCount$:0};
// Input 39
function $b2ContactNode$$() {
}
$b2ContactNode$$.prototype = {$other$:null, $contact$:null, $prev$:null, next:null};
// Input 40
function $b2ContactRegister$$() {
}
$b2ContactRegister$$.prototype = {$createFcn$:null, $destroyFcn$:null, $primary$:null};
// Input 41
function $b2Contact$$($s1$$, $s2$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$ || !$s2$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$;
    this.$m_shape2$ = $s2$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null
  }
}
$b2Contact$$.prototype = {$GetManifolds$:$JSCompiler_returnArg$$(null), $GetNext$:$JSCompiler_get$$("$m_next$"), $Evaluate$:$JSCompiler_emptyFn$$(), $m_flags$:0, $m_prev$:null, $m_next$:null, $m_node1$:new $b2ContactNode$$, $m_node2$:new $b2ContactNode$$, $m_shape1$:null, $m_shape2$:null, $m_manifoldCount$:0, $m_friction$:null, $m_restitution$:null};
// Input 42
function $b2CircleContact$$($s1$$1$$, $s2$$1$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$1$$ || !$s2$$1$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$1$$;
    this.$m_shape2$ = $s2$$1$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null;
    this.$m_manifold$ = [new $b2Manifold$$];
    this.$m_manifold$[0].$pointCount$ = 0;
    this.$m_manifold$[0].$points$[0].$normalImpulse$ = 0;
    this.$m_manifold$[0].$points$[0].$tangentImpulse$ = 0
  }
}
Object.extend($b2CircleContact$$.prototype, $b2Contact$$.prototype);
Object.extend($b2CircleContact$$.prototype, {$Evaluate$:function() {
  var $manifold$$inline_71$$ = this.$m_manifold$[0], $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$ = this.$m_shape1$, $circle2$$inline_73$$ = this.$m_shape2$;
  $manifold$$inline_71$$.$pointCount$ = 0;
  var $dX$$inline_75_tPoint$$inline_82$$ = $circle2$$inline_73$$.$m_position$.x - $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$.$m_position$.x, $dY$$inline_76$$ = $circle2$$inline_73$$.$m_position$.y - $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$.$m_position$.y, $distSqr$$inline_77_separation$$inline_79$$ = $dX$$inline_75_tPoint$$inline_82$$ * $dX$$inline_75_tPoint$$inline_82$$ + $dY$$inline_76$$ * $dY$$inline_76$$;
  $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$ = $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$.$m_radius$ + $circle2$$inline_73$$.$m_radius$;
  if(!($distSqr$$inline_77_separation$$inline_79$$ > $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$ * $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$ && 1)) {
    if($distSqr$$inline_77_separation$$inline_79$$ < Number.MIN_VALUE) {
      $distSqr$$inline_77_separation$$inline_79$$ = -$a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$;
      $manifold$$inline_71$$.$normal$.$Set$(0, 1)
    }else {
      var $dist$$inline_80$$ = Math.sqrt($distSqr$$inline_77_separation$$inline_79$$);
      $distSqr$$inline_77_separation$$inline_79$$ = $dist$$inline_80$$ - $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$;
      $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$ = 1 / $dist$$inline_80$$;
      $manifold$$inline_71$$.$normal$.x = $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$ * $dX$$inline_75_tPoint$$inline_82$$;
      $manifold$$inline_71$$.$normal$.y = $a$$inline_81_circle1$$inline_72_radiusSum$$inline_78$$ * $dY$$inline_76$$
    }
    $manifold$$inline_71$$.$pointCount$ = 1;
    $dX$$inline_75_tPoint$$inline_82$$ = $manifold$$inline_71$$.$points$[0];
    $dX$$inline_75_tPoint$$inline_82$$.id.$set_key$(0);
    $dX$$inline_75_tPoint$$inline_82$$.$separation$ = $distSqr$$inline_77_separation$$inline_79$$;
    $dX$$inline_75_tPoint$$inline_82$$.position.x = $circle2$$inline_73$$.$m_position$.x - $circle2$$inline_73$$.$m_radius$ * $manifold$$inline_71$$.$normal$.x;
    $dX$$inline_75_tPoint$$inline_82$$.position.y = $circle2$$inline_73$$.$m_position$.y - $circle2$$inline_73$$.$m_radius$ * $manifold$$inline_71$$.$normal$.y
  }
  this.$m_manifoldCount$ = this.$m_manifold$[0].$pointCount$ > 0 ? 1 : 0
}, $GetManifolds$:$JSCompiler_get$$("$m_manifold$"), $m_manifold$:[new $b2Manifold$$]});
function $b2CircleContact$Create$$($shape1$$2$$, $shape2$$2$$) {
  return new $b2CircleContact$$($shape1$$2$$, $shape2$$2$$)
}
function $b2CircleContact$Destroy$$() {
}
;
// Input 43
function $b2ContactSolver$$($contacts$$, $contactCount$$, $allocator$$2_i$$32$$) {
  this.$m_constraints$ = [];
  this.$m_allocator$ = $allocator$$2_i$$32$$;
  $allocator$$2_i$$32$$ = 0;
  var $r1Sqr_tVec$$8$$, $r2Sqr_tMat$$4$$;
  for($allocator$$2_i$$32$$ = this.$m_constraintCount$ = 0;$allocator$$2_i$$32$$ < $contactCount$$;++$allocator$$2_i$$32$$) {
    this.$m_constraintCount$ += $contacts$$[$allocator$$2_i$$32$$].$m_manifoldCount$
  }
  for($allocator$$2_i$$32$$ = 0;$allocator$$2_i$$32$$ < this.$m_constraintCount$;$allocator$$2_i$$32$$++) {
    this.$m_constraints$[$allocator$$2_i$$32$$] = new $b2ContactConstraint$$
  }
  var $count$$7$$ = 0;
  for($allocator$$2_i$$32$$ = 0;$allocator$$2_i$$32$$ < $contactCount$$;++$allocator$$2_i$$32$$) {
    var $contact$$1_restitution$$ = $contacts$$[$allocator$$2_i$$32$$], $b1$$ = $contact$$1_restitution$$.$m_shape1$.$m_body$, $b2$$ = $contact$$1_restitution$$.$m_shape2$.$m_body$, $manifoldCount$$ = $contact$$1_restitution$$.$m_manifoldCount$, $manifolds$$ = $contact$$1_restitution$$.$GetManifolds$(), $friction$$ = $contact$$1_restitution$$.$m_friction$;
    $contact$$1_restitution$$ = $contact$$1_restitution$$.$m_restitution$;
    for(var $v1X$$1$$ = $b1$$.$m_linearVelocity$.x, $v1Y$$1$$ = $b1$$.$m_linearVelocity$.y, $v2X$$1$$ = $b2$$.$m_linearVelocity$.x, $v2Y$$1$$ = $b2$$.$m_linearVelocity$.y, $w1$$1$$ = $b1$$.$m_angularVelocity$, $w2$$1$$ = $b2$$.$m_angularVelocity$, $j$$5$$ = 0;$j$$5$$ < $manifoldCount$$;++$j$$5$$) {
      var $manifold$$3$$ = $manifolds$$[$j$$5$$], $normalX$$1$$ = $manifold$$3$$.$normal$.x, $normalY$$1$$ = $manifold$$3$$.$normal$.y, $c$$6$$ = this.$m_constraints$[$count$$7$$];
      $c$$6$$.$body1$ = $b1$$;
      $c$$6$$.$body2$ = $b2$$;
      $c$$6$$.$manifold$ = $manifold$$3$$;
      $c$$6$$.$normal$.x = $normalX$$1$$;
      $c$$6$$.$normal$.y = $normalY$$1$$;
      $c$$6$$.$pointCount$ = $manifold$$3$$.$pointCount$;
      $c$$6$$.$friction$ = $friction$$;
      $c$$6$$.$restitution$ = $contact$$1_restitution$$;
      for(var $k$$ = 0;$k$$ < $c$$6$$.$pointCount$;++$k$$) {
        var $cp$$1_r2Y$$ = $manifold$$3$$.$points$[$k$$], $ccp$$ = $c$$6$$.$points$[$k$$];
        $ccp$$.$normalImpulse$ = $cp$$1_r2Y$$.$normalImpulse$;
        $ccp$$.$tangentImpulse$ = $cp$$1_r2Y$$.$tangentImpulse$;
        $ccp$$.$separation$ = $cp$$1_r2Y$$.$separation$;
        var $r1X_vRel$$ = $cp$$1_r2Y$$.position.x - $b1$$.$m_position$.x, $r1Y$$ = $cp$$1_r2Y$$.position.y - $b1$$.$m_position$.y, $r2X$$ = $cp$$1_r2Y$$.position.x - $b2$$.$m_position$.x;
        $cp$$1_r2Y$$ = $cp$$1_r2Y$$.position.y - $b2$$.$m_position$.y;
        $r1Sqr_tVec$$8$$ = $ccp$$.$localAnchor1$;
        $r2Sqr_tMat$$4$$ = $b1$$.$m_R$;
        $r1Sqr_tVec$$8$$.x = $r1X_vRel$$ * $r2Sqr_tMat$$4$$.$col1$.x + $r1Y$$ * $r2Sqr_tMat$$4$$.$col1$.y;
        $r1Sqr_tVec$$8$$.y = $r1X_vRel$$ * $r2Sqr_tMat$$4$$.$col2$.x + $r1Y$$ * $r2Sqr_tMat$$4$$.$col2$.y;
        $r1Sqr_tVec$$8$$ = $ccp$$.$localAnchor2$;
        $r2Sqr_tMat$$4$$ = $b2$$.$m_R$;
        $r1Sqr_tVec$$8$$.x = $r2X$$ * $r2Sqr_tMat$$4$$.$col1$.x + $cp$$1_r2Y$$ * $r2Sqr_tMat$$4$$.$col1$.y;
        $r1Sqr_tVec$$8$$.y = $r2X$$ * $r2Sqr_tMat$$4$$.$col2$.x + $cp$$1_r2Y$$ * $r2Sqr_tMat$$4$$.$col2$.y;
        $r1Sqr_tVec$$8$$ = $r1X_vRel$$ * $r1X_vRel$$ + $r1Y$$ * $r1Y$$;
        $r2Sqr_tMat$$4$$ = $r2X$$ * $r2X$$ + $cp$$1_r2Y$$ * $cp$$1_r2Y$$;
        var $rn1_rt1$$ = $r1X_vRel$$ * $normalX$$1$$ + $r1Y$$ * $normalY$$1$$, $rn2_rt2_tangentX$$ = $r2X$$ * $normalX$$1$$ + $cp$$1_r2Y$$ * $normalY$$1$$, $kNormal_kTangent_tangentY$$ = $b1$$.$m_invMass$ + $b2$$.$m_invMass$;
        $kNormal_kTangent_tangentY$$ += $b1$$.$m_invI$ * ($r1Sqr_tVec$$8$$ - $rn1_rt1$$ * $rn1_rt1$$) + $b2$$.$m_invI$ * ($r2Sqr_tMat$$4$$ - $rn2_rt2_tangentX$$ * $rn2_rt2_tangentX$$);
        $ccp$$.$normalMass$ = 1 / $kNormal_kTangent_tangentY$$;
        $rn2_rt2_tangentX$$ = $normalY$$1$$;
        $kNormal_kTangent_tangentY$$ = -$normalX$$1$$;
        $rn1_rt1$$ = $r1X_vRel$$ * $rn2_rt2_tangentX$$ + $r1Y$$ * $kNormal_kTangent_tangentY$$;
        $rn2_rt2_tangentX$$ = $r2X$$ * $rn2_rt2_tangentX$$ + $cp$$1_r2Y$$ * $kNormal_kTangent_tangentY$$;
        $kNormal_kTangent_tangentY$$ = $b1$$.$m_invMass$ + $b2$$.$m_invMass$;
        $kNormal_kTangent_tangentY$$ += $b1$$.$m_invI$ * ($r1Sqr_tVec$$8$$ - $rn1_rt1$$ * $rn1_rt1$$) + $b2$$.$m_invI$ * ($r2Sqr_tMat$$4$$ - $rn2_rt2_tangentX$$ * $rn2_rt2_tangentX$$);
        $ccp$$.$tangentMass$ = 1 / $kNormal_kTangent_tangentY$$;
        $ccp$$.$velocityBias$ = 0;
        if($ccp$$.$separation$ > 0) {
          $ccp$$.$velocityBias$ = -60 * $ccp$$.$separation$
        }
        $r1X_vRel$$ = $c$$6$$.$normal$.x * ($v2X$$1$$ + -$w2$$1$$ * $cp$$1_r2Y$$ - $v1X$$1$$ - -$w1$$1$$ * $r1Y$$) + $c$$6$$.$normal$.y * ($v2Y$$1$$ + $w2$$1$$ * $r2X$$ - $v1Y$$1$$ - $w1$$1$$ * $r1X_vRel$$);
        if($r1X_vRel$$ < -30) {
          $ccp$$.$velocityBias$ += -$c$$6$$.$restitution$ * $r1X_vRel$$
        }
      }
      ++$count$$7$$
    }
  }
}
$b2ContactSolver$$.prototype = {$PreSolve$:function $$b2ContactSolver$$$$$PreSolve$$() {
  for(var $r2Y$$1_tVec$$9$$, $tMat$$5$$, $i$$33$$ = 0;$i$$33$$ < this.$m_constraintCount$;++$i$$33$$) {
    var $c$$7$$ = this.$m_constraints$[$i$$33$$], $b1$$1_ccp2$$ = $c$$7$$.$body1$, $b2$$1$$ = $c$$7$$.$body2$, $invMass1$$ = $b1$$1_ccp2$$.$m_invMass$, $invI1$$ = $b1$$1_ccp2$$.$m_invI$, $invMass2$$ = $b2$$1$$.$m_invMass$, $invI2$$ = $b2$$1$$.$m_invI$, $normalX$$2$$ = $c$$7$$.$normal$.x, $normalY$$2$$ = $c$$7$$.$normal$.y, $tangentX$$1$$ = $normalY$$2$$, $tangentY$$1$$ = -$normalX$$2$$, $j$$6$$ = 0, $tCount$$ = 0;
    if($b2World$s_enableWarmStarting$$) {
      $tCount$$ = $c$$7$$.$pointCount$;
      for($j$$6$$ = 0;$j$$6$$ < $tCount$$;++$j$$6$$) {
        var $ccp$$1$$ = $c$$7$$.$points$[$j$$6$$], $PX$$ = $ccp$$1$$.$normalImpulse$ * $normalX$$2$$ + $ccp$$1$$.$tangentImpulse$ * $tangentX$$1$$, $PY$$ = $ccp$$1$$.$normalImpulse$ * $normalY$$2$$ + $ccp$$1$$.$tangentImpulse$ * $tangentY$$1$$;
        $tMat$$5$$ = $b1$$1_ccp2$$.$m_R$;
        $r2Y$$1_tVec$$9$$ = $ccp$$1$$.$localAnchor1$;
        var $r1X$$1$$ = $tMat$$5$$.$col1$.x * $r2Y$$1_tVec$$9$$.x + $tMat$$5$$.$col2$.x * $r2Y$$1_tVec$$9$$.y, $r1Y$$1$$ = $tMat$$5$$.$col1$.y * $r2Y$$1_tVec$$9$$.x + $tMat$$5$$.$col2$.y * $r2Y$$1_tVec$$9$$.y;
        $tMat$$5$$ = $b2$$1$$.$m_R$;
        $r2Y$$1_tVec$$9$$ = $ccp$$1$$.$localAnchor2$;
        var $r2X$$1$$ = $tMat$$5$$.$col1$.x * $r2Y$$1_tVec$$9$$.x + $tMat$$5$$.$col2$.x * $r2Y$$1_tVec$$9$$.y;
        $r2Y$$1_tVec$$9$$ = $tMat$$5$$.$col1$.y * $r2Y$$1_tVec$$9$$.x + $tMat$$5$$.$col2$.y * $r2Y$$1_tVec$$9$$.y;
        $b1$$1_ccp2$$.$m_angularVelocity$ -= $invI1$$ * ($r1X$$1$$ * $PY$$ - $r1Y$$1$$ * $PX$$);
        $b1$$1_ccp2$$.$m_linearVelocity$.x -= $invMass1$$ * $PX$$;
        $b1$$1_ccp2$$.$m_linearVelocity$.y -= $invMass1$$ * $PY$$;
        $b2$$1$$.$m_angularVelocity$ += $invI2$$ * ($r2X$$1$$ * $PY$$ - $r2Y$$1_tVec$$9$$ * $PX$$);
        $b2$$1$$.$m_linearVelocity$.x += $invMass2$$ * $PX$$;
        $b2$$1$$.$m_linearVelocity$.y += $invMass2$$ * $PY$$;
        $ccp$$1$$.$positionImpulse$ = 0
      }
    }else {
      $tCount$$ = $c$$7$$.$pointCount$;
      for($j$$6$$ = 0;$j$$6$$ < $tCount$$;++$j$$6$$) {
        $b1$$1_ccp2$$ = $c$$7$$.$points$[$j$$6$$];
        $b1$$1_ccp2$$.$normalImpulse$ = 0;
        $b1$$1_ccp2$$.$tangentImpulse$ = 0;
        $b1$$1_ccp2$$.$positionImpulse$ = 0
      }
    }
  }
}, $SolveVelocityConstraints$:function $$b2ContactSolver$$$$$SolveVelocityConstraints$$() {
  for(var $j$$7$$ = 0, $ccp$$2$$, $r1X$$2$$, $r1Y$$2$$, $r2X$$2$$, $r2Y$$2_tMat$$6$$, $PY$$1_dvX$$1_lambda$$2_tVec$$10$$, $dvY$$1_maxFriction_newImpulse$$, $PX$$1$$, $i$$34$$ = 0;$i$$34$$ < this.$m_constraintCount$;++$i$$34$$) {
    var $c$$8$$ = this.$m_constraints$[$i$$34$$], $b1$$2$$ = $c$$8$$.$body1$, $b2$$2$$ = $c$$8$$.$body2$, $b1_angularVelocity$$ = $b1$$2$$.$m_angularVelocity$, $b1_linearVelocity$$ = $b1$$2$$.$m_linearVelocity$, $b2_angularVelocity$$ = $b2$$2$$.$m_angularVelocity$, $b2_linearVelocity$$ = $b2$$2$$.$m_linearVelocity$, $invMass1$$1$$ = $b1$$2$$.$m_invMass$, $invI1$$1$$ = $b1$$2$$.$m_invI$, $invMass2$$1$$ = $b2$$2$$.$m_invMass$, $invI2$$1$$ = $b2$$2$$.$m_invI$, $normalX$$3$$ = $c$$8$$.$normal$.x, $normalY$$3$$ = 
    $c$$8$$.$normal$.y, $tangentX$$2$$ = $normalY$$3$$, $tangentY$$2$$ = -$normalX$$3$$, $tCount$$1$$ = $c$$8$$.$pointCount$;
    for($j$$7$$ = 0;$j$$7$$ < $tCount$$1$$;++$j$$7$$) {
      $ccp$$2$$ = $c$$8$$.$points$[$j$$7$$];
      $r2Y$$2_tMat$$6$$ = $b1$$2$$.$m_R$;
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = $ccp$$2$$.$localAnchor1$;
      $r1X$$2$$ = $r2Y$$2_tMat$$6$$.$col1$.x * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$.x + $r2Y$$2_tMat$$6$$.$col2$.x * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$.y;
      $r1Y$$2$$ = $r2Y$$2_tMat$$6$$.$col1$.y * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$.x + $r2Y$$2_tMat$$6$$.$col2$.y * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$.y;
      $r2Y$$2_tMat$$6$$ = $b2$$2$$.$m_R$;
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = $ccp$$2$$.$localAnchor2$;
      $r2X$$2$$ = $r2Y$$2_tMat$$6$$.$col1$.x * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$.x + $r2Y$$2_tMat$$6$$.$col2$.x * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$.y;
      $r2Y$$2_tMat$$6$$ = $r2Y$$2_tMat$$6$$.$col1$.y * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$.x + $r2Y$$2_tMat$$6$$.$col2$.y * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$.y;
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = $b2_linearVelocity$$.x + -$b2_angularVelocity$$ * $r2Y$$2_tMat$$6$$ - $b1_linearVelocity$$.x - -$b1_angularVelocity$$ * $r1Y$$2$$;
      $dvY$$1_maxFriction_newImpulse$$ = $b2_linearVelocity$$.y + $b2_angularVelocity$$ * $r2X$$2$$ - $b1_linearVelocity$$.y - $b1_angularVelocity$$ * $r1X$$2$$;
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = -$ccp$$2$$.$normalMass$ * ($PY$$1_dvX$$1_lambda$$2_tVec$$10$$ * $normalX$$3$$ + $dvY$$1_maxFriction_newImpulse$$ * $normalY$$3$$ - $ccp$$2$$.$velocityBias$);
      $dvY$$1_maxFriction_newImpulse$$ = $b2Math$b2Max$$($ccp$$2$$.$normalImpulse$ + $PY$$1_dvX$$1_lambda$$2_tVec$$10$$, 0);
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = $dvY$$1_maxFriction_newImpulse$$ - $ccp$$2$$.$normalImpulse$;
      $PX$$1$$ = $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ * $normalX$$3$$;
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ * $normalY$$3$$;
      $b1_linearVelocity$$.x -= $invMass1$$1$$ * $PX$$1$$;
      $b1_linearVelocity$$.y -= $invMass1$$1$$ * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$;
      $b1_angularVelocity$$ -= $invI1$$1$$ * ($r1X$$2$$ * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ - $r1Y$$2$$ * $PX$$1$$);
      $b2_linearVelocity$$.x += $invMass2$$1$$ * $PX$$1$$;
      $b2_linearVelocity$$.y += $invMass2$$1$$ * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$;
      $b2_angularVelocity$$ += $invI2$$1$$ * ($r2X$$2$$ * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ - $r2Y$$2_tMat$$6$$ * $PX$$1$$);
      $ccp$$2$$.$normalImpulse$ = $dvY$$1_maxFriction_newImpulse$$;
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = $b2_linearVelocity$$.x + -$b2_angularVelocity$$ * $r2Y$$2_tMat$$6$$ - $b1_linearVelocity$$.x - -$b1_angularVelocity$$ * $r1Y$$2$$;
      $dvY$$1_maxFriction_newImpulse$$ = $b2_linearVelocity$$.y + $b2_angularVelocity$$ * $r2X$$2$$ - $b1_linearVelocity$$.y - $b1_angularVelocity$$ * $r1X$$2$$;
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = $ccp$$2$$.$tangentMass$ * -($PY$$1_dvX$$1_lambda$$2_tVec$$10$$ * $tangentX$$2$$ + $dvY$$1_maxFriction_newImpulse$$ * $tangentY$$2$$);
      $dvY$$1_maxFriction_newImpulse$$ = $c$$8$$.$friction$ * $ccp$$2$$.$normalImpulse$;
      $dvY$$1_maxFriction_newImpulse$$ = $b2Math$b2Clamp$$($ccp$$2$$.$tangentImpulse$ + $PY$$1_dvX$$1_lambda$$2_tVec$$10$$, -$dvY$$1_maxFriction_newImpulse$$, $dvY$$1_maxFriction_newImpulse$$);
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = $dvY$$1_maxFriction_newImpulse$$ - $ccp$$2$$.$tangentImpulse$;
      $PX$$1$$ = $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ * $tangentX$$2$$;
      $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ = $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ * $tangentY$$2$$;
      $b1_linearVelocity$$.x -= $invMass1$$1$$ * $PX$$1$$;
      $b1_linearVelocity$$.y -= $invMass1$$1$$ * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$;
      $b1_angularVelocity$$ -= $invI1$$1$$ * ($r1X$$2$$ * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ - $r1Y$$2$$ * $PX$$1$$);
      $b2_linearVelocity$$.x += $invMass2$$1$$ * $PX$$1$$;
      $b2_linearVelocity$$.y += $invMass2$$1$$ * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$;
      $b2_angularVelocity$$ += $invI2$$1$$ * ($r2X$$2$$ * $PY$$1_dvX$$1_lambda$$2_tVec$$10$$ - $r2Y$$2_tMat$$6$$ * $PX$$1$$);
      $ccp$$2$$.$tangentImpulse$ = $dvY$$1_maxFriction_newImpulse$$
    }
    $b1$$2$$.$m_angularVelocity$ = $b1_angularVelocity$$;
    $b2$$2$$.$m_angularVelocity$ = $b2_angularVelocity$$
  }
}, $SolvePositionConstraints$:function $$b2ContactSolver$$$$$SolvePositionConstraints$$($beta$$) {
  for(var $minSeparation$$ = 0, $r2Y$$3_tMat$$7$$, $dImpulse_impulseY_separation$$4_tVec$$11$$, $i$$35$$ = 0;$i$$35$$ < this.$m_constraintCount$;++$i$$35$$) {
    for(var $c$$9$$ = this.$m_constraints$[$i$$35$$], $b1$$3$$ = $c$$9$$.$body1$, $b2$$3$$ = $c$$9$$.$body2$, $b1_position$$ = $b1$$3$$.$m_position$, $b1_rotation$$ = $b1$$3$$.$m_rotation$, $b2_position$$ = $b2$$3$$.$m_position$, $b2_rotation$$ = $b2$$3$$.$m_rotation$, $invMass1$$2$$ = $b1$$3$$.$m_invMass$, $invI1$$2$$ = $b1$$3$$.$m_invI$, $invMass2$$2$$ = $b2$$3$$.$m_invMass$, $invI2$$2$$ = $b2$$3$$.$m_invI$, $normalX$$4$$ = $c$$9$$.$normal$.x, $normalY$$4$$ = $c$$9$$.$normal$.y, $tCount$$2$$ = 
    $c$$9$$.$pointCount$, $j$$8$$ = 0;$j$$8$$ < $tCount$$2$$;++$j$$8$$) {
      var $ccp$$3_impulseX$$ = $c$$9$$.$points$[$j$$8$$];
      $r2Y$$3_tMat$$7$$ = $b1$$3$$.$m_R$;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = $ccp$$3_impulseX$$.$localAnchor1$;
      var $r1X$$3$$ = $r2Y$$3_tMat$$7$$.$col1$.x * $dImpulse_impulseY_separation$$4_tVec$$11$$.x + $r2Y$$3_tMat$$7$$.$col2$.x * $dImpulse_impulseY_separation$$4_tVec$$11$$.y, $r1Y$$3$$ = $r2Y$$3_tMat$$7$$.$col1$.y * $dImpulse_impulseY_separation$$4_tVec$$11$$.x + $r2Y$$3_tMat$$7$$.$col2$.y * $dImpulse_impulseY_separation$$4_tVec$$11$$.y;
      $r2Y$$3_tMat$$7$$ = $b2$$3$$.$m_R$;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = $ccp$$3_impulseX$$.$localAnchor2$;
      var $r2X$$3$$ = $r2Y$$3_tMat$$7$$.$col1$.x * $dImpulse_impulseY_separation$$4_tVec$$11$$.x + $r2Y$$3_tMat$$7$$.$col2$.x * $dImpulse_impulseY_separation$$4_tVec$$11$$.y;
      $r2Y$$3_tMat$$7$$ = $r2Y$$3_tMat$$7$$.$col1$.y * $dImpulse_impulseY_separation$$4_tVec$$11$$.x + $r2Y$$3_tMat$$7$$.$col2$.y * $dImpulse_impulseY_separation$$4_tVec$$11$$.y;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = ($b2_position$$.x + $r2X$$3$$ - ($b1_position$$.x + $r1X$$3$$)) * $normalX$$4$$ + ($b2_position$$.y + $r2Y$$3_tMat$$7$$ - ($b1_position$$.y + $r1Y$$3$$)) * $normalY$$4$$ + $ccp$$3_impulseX$$.$separation$;
      $minSeparation$$ = $minSeparation$$ < $dImpulse_impulseY_separation$$4_tVec$$11$$ ? $minSeparation$$ : $dImpulse_impulseY_separation$$4_tVec$$11$$;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = -$ccp$$3_impulseX$$.$normalMass$ * $beta$$ * $b2Math$b2Clamp$$($dImpulse_impulseY_separation$$4_tVec$$11$$ + 0.15, -6, 0);
      var $impulse0$$ = $ccp$$3_impulseX$$.$positionImpulse$;
      $ccp$$3_impulseX$$.$positionImpulse$ = $b2Math$b2Max$$($impulse0$$ + $dImpulse_impulseY_separation$$4_tVec$$11$$, 0);
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = $ccp$$3_impulseX$$.$positionImpulse$ - $impulse0$$;
      $ccp$$3_impulseX$$ = $dImpulse_impulseY_separation$$4_tVec$$11$$ * $normalX$$4$$;
      $dImpulse_impulseY_separation$$4_tVec$$11$$ = $dImpulse_impulseY_separation$$4_tVec$$11$$ * $normalY$$4$$;
      $b1_position$$.x -= $invMass1$$2$$ * $ccp$$3_impulseX$$;
      $b1_position$$.y -= $invMass1$$2$$ * $dImpulse_impulseY_separation$$4_tVec$$11$$;
      $b1_rotation$$ -= $invI1$$2$$ * ($r1X$$3$$ * $dImpulse_impulseY_separation$$4_tVec$$11$$ - $r1Y$$3$$ * $ccp$$3_impulseX$$);
      $b1$$3$$.$m_R$.$Set$($b1_rotation$$);
      $b2_position$$.x += $invMass2$$2$$ * $ccp$$3_impulseX$$;
      $b2_position$$.y += $invMass2$$2$$ * $dImpulse_impulseY_separation$$4_tVec$$11$$;
      $b2_rotation$$ += $invI2$$2$$ * ($r2X$$3$$ * $dImpulse_impulseY_separation$$4_tVec$$11$$ - $r2Y$$3_tMat$$7$$ * $ccp$$3_impulseX$$);
      $b2$$3$$.$m_R$.$Set$($b2_rotation$$)
    }
    $b1$$3$$.$m_rotation$ = $b1_rotation$$;
    $b2$$3$$.$m_rotation$ = $b2_rotation$$
  }
  return $minSeparation$$ >= -0.15
}, $PostSolve$:function $$b2ContactSolver$$$$$PostSolve$$() {
  for(var $i$$36$$ = 0;$i$$36$$ < this.$m_constraintCount$;++$i$$36$$) {
    for(var $c$$10$$ = this.$m_constraints$[$i$$36$$], $m$$2$$ = $c$$10$$.$manifold$, $j$$9$$ = 0;$j$$9$$ < $c$$10$$.$pointCount$;++$j$$9$$) {
      var $mPoint$$ = $m$$2$$.$points$[$j$$9$$], $cPoint$$ = $c$$10$$.$points$[$j$$9$$];
      $mPoint$$.$normalImpulse$ = $cPoint$$.$normalImpulse$;
      $mPoint$$.$tangentImpulse$ = $cPoint$$.$tangentImpulse$
    }
  }
}, $m_allocator$:null, $m_constraints$:[], $m_constraintCount$:0};
// Input 44
function $b2Island$$($bodyCapacity$$, $contactCapacity$$, $jointCapacity$$, $allocator$$3$$) {
  var $i$$37$$ = 0;
  this.$m_bodyCapacity$ = $bodyCapacity$$;
  this.$m_contactCapacity$ = $contactCapacity$$;
  this.$m_jointCapacity$ = $jointCapacity$$;
  this.$m_jointCount$ = this.$m_contactCount$ = this.$m_bodyCount$ = 0;
  this.$m_bodies$ = Array($bodyCapacity$$);
  for($i$$37$$ = 0;$i$$37$$ < $bodyCapacity$$;$i$$37$$++) {
    this.$m_bodies$[$i$$37$$] = null
  }
  this.$m_contacts$ = Array($contactCapacity$$);
  for($i$$37$$ = 0;$i$$37$$ < $contactCapacity$$;$i$$37$$++) {
    this.$m_contacts$[$i$$37$$] = null
  }
  this.$m_joints$ = Array($jointCapacity$$);
  for($i$$37$$ = 0;$i$$37$$ < $jointCapacity$$;$i$$37$$++) {
    this.$m_joints$[$i$$37$$] = null
  }
  this.$m_allocator$ = $allocator$$3$$
}
$b2Island$$.prototype = {$Clear$:function $$b2Island$$$$$Clear$$() {
  this.$m_jointCount$ = this.$m_contactCount$ = this.$m_bodyCount$ = 0
}, $Solve$:function $$b2Island$$$$$Solve$$($step$$, $gravity$$) {
  var $i$$38$$ = 0, $b$$16_contactsOkay_j$$10$$;
  for($i$$38$$ = 0;$i$$38$$ < this.$m_bodyCount$;++$i$$38$$) {
    $b$$16_contactsOkay_j$$10$$ = this.$m_bodies$[$i$$38$$];
    if($b$$16_contactsOkay_j$$10$$.$m_invMass$ != 0) {
      $JSCompiler_StaticMethods_Add$$($b$$16_contactsOkay_j$$10$$.$m_linearVelocity$, new $b2Vec2$$($step$$.$dt$ * $b2Math$AddVV$$($gravity$$, new $b2Vec2$$($b$$16_contactsOkay_j$$10$$.$m_invMass$ * $b$$16_contactsOkay_j$$10$$.$m_force$.x, $b$$16_contactsOkay_j$$10$$.$m_invMass$ * $b$$16_contactsOkay_j$$10$$.$m_force$.y)).x, $step$$.$dt$ * $b2Math$AddVV$$($gravity$$, new $b2Vec2$$($b$$16_contactsOkay_j$$10$$.$m_invMass$ * $b$$16_contactsOkay_j$$10$$.$m_force$.x, $b$$16_contactsOkay_j$$10$$.$m_invMass$ * 
      $b$$16_contactsOkay_j$$10$$.$m_force$.y)).y));
      $b$$16_contactsOkay_j$$10$$.$m_angularVelocity$ += $step$$.$dt$ * $b$$16_contactsOkay_j$$10$$.$m_invI$ * $b$$16_contactsOkay_j$$10$$.$m_torque$;
      $JSCompiler_StaticMethods_Multiply$$($b$$16_contactsOkay_j$$10$$.$m_linearVelocity$, $b$$16_contactsOkay_j$$10$$.$m_linearDamping$);
      $b$$16_contactsOkay_j$$10$$.$m_angularVelocity$ *= $b$$16_contactsOkay_j$$10$$.$m_angularDamping$;
      $JSCompiler_StaticMethods_SetV$$($b$$16_contactsOkay_j$$10$$.$m_position0$, $b$$16_contactsOkay_j$$10$$.$m_position$);
      $b$$16_contactsOkay_j$$10$$.$m_rotation0$ = $b$$16_contactsOkay_j$$10$$.$m_rotation$
    }
  }
  var $contactSolver$$ = new $b2ContactSolver$$(this.$m_contacts$, this.$m_contactCount$, this.$m_allocator$);
  $contactSolver$$.$PreSolve$();
  for($i$$38$$ = 0;$i$$38$$ < this.$m_jointCount$;++$i$$38$$) {
    this.$m_joints$[$i$$38$$].$PrepareVelocitySolver$()
  }
  for($i$$38$$ = 0;$i$$38$$ < $step$$.$iterations$;++$i$$38$$) {
    $contactSolver$$.$SolveVelocityConstraints$();
    for($b$$16_contactsOkay_j$$10$$ = 0;$b$$16_contactsOkay_j$$10$$ < this.$m_jointCount$;++$b$$16_contactsOkay_j$$10$$) {
      this.$m_joints$[$b$$16_contactsOkay_j$$10$$].$SolveVelocityConstraints$($step$$)
    }
  }
  for($i$$38$$ = 0;$i$$38$$ < this.$m_bodyCount$;++$i$$38$$) {
    $b$$16_contactsOkay_j$$10$$ = this.$m_bodies$[$i$$38$$];
    if($b$$16_contactsOkay_j$$10$$.$m_invMass$ != 0) {
      $b$$16_contactsOkay_j$$10$$.$m_position$.x += $step$$.$dt$ * $b$$16_contactsOkay_j$$10$$.$m_linearVelocity$.x;
      $b$$16_contactsOkay_j$$10$$.$m_position$.y += $step$$.$dt$ * $b$$16_contactsOkay_j$$10$$.$m_linearVelocity$.y;
      $b$$16_contactsOkay_j$$10$$.$m_rotation$ += $step$$.$dt$ * $b$$16_contactsOkay_j$$10$$.$m_angularVelocity$;
      $b$$16_contactsOkay_j$$10$$.$m_R$.$Set$($b$$16_contactsOkay_j$$10$$.$m_rotation$)
    }
  }
  for($i$$38$$ = 0;$i$$38$$ < this.$m_jointCount$;++$i$$38$$) {
  }
  if($b2World$s_enablePositionCorrection$$) {
    for($b2Island$m_positionIterationCount$$ = 0;$b2Island$m_positionIterationCount$$ < $step$$.$iterations$;++$b2Island$m_positionIterationCount$$) {
      $b$$16_contactsOkay_j$$10$$ = $contactSolver$$.$SolvePositionConstraints$(0.2);
      var $jointsOkay$$ = true;
      for($i$$38$$ = 0;$i$$38$$ < this.$m_jointCount$;++$i$$38$$) {
        var $jointOkay$$ = this.$m_joints$[$i$$38$$].$SolvePositionConstraints$();
        $jointsOkay$$ = $jointsOkay$$ && $jointOkay$$
      }
      if($b$$16_contactsOkay_j$$10$$ && $jointsOkay$$) {
        break
      }
    }
  }
  $contactSolver$$.$PostSolve$();
  for($i$$38$$ = 0;$i$$38$$ < this.$m_bodyCount$;++$i$$38$$) {
    $b$$16_contactsOkay_j$$10$$ = this.$m_bodies$[$i$$38$$];
    if($b$$16_contactsOkay_j$$10$$.$m_invMass$ != 0) {
      $b$$16_contactsOkay_j$$10$$.$m_R$.$Set$($b$$16_contactsOkay_j$$10$$.$m_rotation$);
      $b$$16_contactsOkay_j$$10$$.$SynchronizeShapes$();
      $b$$16_contactsOkay_j$$10$$.$m_force$.$Set$(0, 0);
      $b$$16_contactsOkay_j$$10$$.$m_torque$ = 0
    }
  }
}, $UpdateSleep$:function $$b2Island$$$$$UpdateSleep$$($dt$$) {
  var $i$$39$$ = 0, $b$$17$$, $minSleepTime$$ = Number.MAX_VALUE, $angTolSqr$$ = $b2Settings$b2_angularSleepTolerance$$ * $b2Settings$b2_angularSleepTolerance$$;
  for($i$$39$$ = 0;$i$$39$$ < this.$m_bodyCount$;++$i$$39$$) {
    $b$$17$$ = this.$m_bodies$[$i$$39$$];
    if($b$$17$$.$m_invMass$ != 0) {
      if(($b$$17$$.$m_flags$ & $b2Body$e_allowSleepFlag$$) == 0) {
        $minSleepTime$$ = $b$$17$$.$m_sleepTime$ = 0
      }
      if(($b$$17$$.$m_flags$ & $b2Body$e_allowSleepFlag$$) == 0 || $b$$17$$.$m_angularVelocity$ * $b$$17$$.$m_angularVelocity$ > $angTolSqr$$ || $b2Math$b2Dot$$($b$$17$$.$m_linearVelocity$, $b$$17$$.$m_linearVelocity$) > 0.09) {
        $minSleepTime$$ = $b$$17$$.$m_sleepTime$ = 0
      }else {
        $b$$17$$.$m_sleepTime$ += $dt$$;
        $minSleepTime$$ = $minSleepTime$$ < $b$$17$$.$m_sleepTime$ ? $minSleepTime$$ : $b$$17$$.$m_sleepTime$
      }
    }
  }
  if($minSleepTime$$ >= 0.5) {
    for($i$$39$$ = 0;$i$$39$$ < this.$m_bodyCount$;++$i$$39$$) {
      $b$$17$$ = this.$m_bodies$[$i$$39$$];
      $b$$17$$.$m_flags$ |= $b2Body$e_sleepFlag$$
    }
  }
}, $AddBody$:function $$b2Island$$$$$AddBody$$($body$$6$$) {
  this.$m_bodies$[this.$m_bodyCount$++] = $body$$6$$
}, $AddContact$:function $$b2Island$$$$$AddContact$$($contact$$2$$) {
  this.$m_contacts$[this.$m_contactCount$++] = $contact$$2$$
}, $AddJoint$:function $$b2Island$$$$$AddJoint$$($joint$$1$$) {
  this.$m_joints$[this.$m_jointCount$++] = $joint$$1$$
}, $m_allocator$:null, $m_bodies$:null, $m_contacts$:null, $m_joints$:null, $m_bodyCount$:0, $m_jointCount$:0, $m_contactCount$:0, $m_bodyCapacity$:0, $m_contactCapacity$:0, $m_jointCapacity$:0};
var $b2Island$m_positionIterationCount$$ = 0;
// Input 45
function $b2NullContact$$($s1$$2$$, $s2$$2$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$2$$ || !$s2$$2$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$2$$;
    this.$m_shape2$ = $s2$$2$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null
  }
}
Object.extend($b2NullContact$$.prototype, $b2Contact$$.prototype);
Object.extend($b2NullContact$$.prototype, {$Evaluate$:$JSCompiler_emptyFn$$(), $GetManifolds$:$JSCompiler_returnArg$$(null)});
// Input 46
function $b2PolyAndCircleContact$$($s1$$3$$, $s2$$3$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$3$$ || !$s2$$3$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$3$$;
    this.$m_shape2$ = $s2$$3$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null;
    this.$m_manifold$ = [new $b2Manifold$$];
    if(this.$m_shape1$.$m_type$ != 2) {
      throw"Assert Failed!";
    }
    if(this.$m_shape2$.$m_type$ != 0) {
      throw"Assert Failed!";
    }
    this.$m_manifold$[0].$pointCount$ = 0;
    this.$m_manifold$[0].$points$[0].$normalImpulse$ = 0;
    this.$m_manifold$[0].$points$[0].$tangentImpulse$ = 0
  }
}
Object.extend($b2PolyAndCircleContact$$.prototype, $b2Contact$$.prototype);
Object.extend($b2PolyAndCircleContact$$.prototype, {$Evaluate$:function() {
  a: {
    var $manifold$$inline_115$$ = this.$m_manifold$[0], $dist$$inline_125_pY$$inline_139_poly$$inline_116$$ = this.$m_shape1$, $circle$$inline_117$$ = this.$m_shape2$;
    $manifold$$inline_115$$.$pointCount$ = 0;
    var $i$$inline_129_tPoint$$inline_118$$, $dX$$inline_119_xLocalX$$inline_121$$, $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$;
    $dX$$inline_119_xLocalX$$inline_121$$ = $circle$$inline_117$$.$m_position$.x - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_position$.x;
    $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ = $circle$$inline_117$$.$m_position$.y - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_position$.y;
    var $tMat$$inline_123$$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_R$, $radius$$inline_128_tX$$inline_124$$ = $dX$$inline_119_xLocalX$$inline_121$$ * $tMat$$inline_123$$.$col1$.x + $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ * $tMat$$inline_123$$.$col1$.y;
    $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ = $dX$$inline_119_xLocalX$$inline_121$$ * $tMat$$inline_123$$.$col2$.x + $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ * $tMat$$inline_123$$.$col2$.y;
    $dX$$inline_119_xLocalX$$inline_121$$ = $radius$$inline_128_tX$$inline_124$$;
    var $normalIndex$$inline_126_vertIndex1$$inline_132$$ = 0, $separation$$inline_127_vertIndex2$$inline_133$$ = -Number.MAX_VALUE;
    $radius$$inline_128_tX$$inline_124$$ = $circle$$inline_117$$.$m_radius$;
    for($i$$inline_129_tPoint$$inline_118$$ = 0;$i$$inline_129_tPoint$$inline_118$$ < $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertexCount$;++$i$$inline_129_tPoint$$inline_118$$) {
      var $eY$$inline_135_s$$inline_130$$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_normals$[$i$$inline_129_tPoint$$inline_118$$].x * ($dX$$inline_119_xLocalX$$inline_121$$ - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$i$$inline_129_tPoint$$inline_118$$].x) + $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_normals$[$i$$inline_129_tPoint$$inline_118$$].y * ($dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$i$$inline_129_tPoint$$inline_118$$].y);
      if($eY$$inline_135_s$$inline_130$$ > $radius$$inline_128_tX$$inline_124$$) {
        break a
      }
      if($eY$$inline_135_s$$inline_130$$ > $separation$$inline_127_vertIndex2$$inline_133$$) {
        $separation$$inline_127_vertIndex2$$inline_133$$ = $eY$$inline_135_s$$inline_130$$;
        $normalIndex$$inline_126_vertIndex1$$inline_132$$ = $i$$inline_129_tPoint$$inline_118$$
      }
    }
    if($separation$$inline_127_vertIndex2$$inline_133$$ < Number.MIN_VALUE) {
      $manifold$$inline_115$$.$pointCount$ = 1;
      $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_normals$[$normalIndex$$inline_126_vertIndex1$$inline_132$$];
      $manifold$$inline_115$$.$normal$.x = $tMat$$inline_123$$.$col1$.x * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$.x + $tMat$$inline_123$$.$col2$.x * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$.y;
      $manifold$$inline_115$$.$normal$.y = $tMat$$inline_123$$.$col1$.y * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$.x + $tMat$$inline_123$$.$col2$.y * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$.y;
      $i$$inline_129_tPoint$$inline_118$$ = $manifold$$inline_115$$.$points$[0];
      $i$$inline_129_tPoint$$inline_118$$.id.$features$.$incidentEdge$ = $normalIndex$$inline_126_vertIndex1$$inline_132$$;
      $i$$inline_129_tPoint$$inline_118$$.id.$features$.$incidentVertex$ = 255;
      $i$$inline_129_tPoint$$inline_118$$.id.$features$.$referenceFace$ = 255;
      $i$$inline_129_tPoint$$inline_118$$.id.$features$.$flip$ = 0;
      $i$$inline_129_tPoint$$inline_118$$.position.x = $circle$$inline_117$$.$m_position$.x - $radius$$inline_128_tX$$inline_124$$ * $manifold$$inline_115$$.$normal$.x;
      $i$$inline_129_tPoint$$inline_118$$.position.y = $circle$$inline_117$$.$m_position$.y - $radius$$inline_128_tX$$inline_124$$ * $manifold$$inline_115$$.$normal$.y;
      $i$$inline_129_tPoint$$inline_118$$.$separation$ = $separation$$inline_127_vertIndex2$$inline_133$$ - $radius$$inline_128_tX$$inline_124$$
    }else {
      $normalIndex$$inline_126_vertIndex1$$inline_132$$ = $normalIndex$$inline_126_vertIndex1$$inline_132$$;
      $separation$$inline_127_vertIndex2$$inline_133$$ = $normalIndex$$inline_126_vertIndex1$$inline_132$$ + 1 < $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertexCount$ ? $normalIndex$$inline_126_vertIndex1$$inline_132$$ + 1 : 0;
      var $eX$$inline_134_pX$$inline_138$$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$separation$$inline_127_vertIndex2$$inline_133$$].x - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].x;
      $eY$$inline_135_s$$inline_130$$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$separation$$inline_127_vertIndex2$$inline_133$$].y - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].y;
      var $length$$inline_136$$ = Math.sqrt($eX$$inline_134_pX$$inline_138$$ * $eX$$inline_134_pX$$inline_138$$ + $eY$$inline_135_s$$inline_130$$ * $eY$$inline_135_s$$inline_130$$);
      $eX$$inline_134_pX$$inline_138$$ /= $length$$inline_136$$;
      $eY$$inline_135_s$$inline_130$$ /= $length$$inline_136$$;
      if($length$$inline_136$$ < Number.MIN_VALUE) {
        $dX$$inline_119_xLocalX$$inline_121$$ = $dX$$inline_119_xLocalX$$inline_121$$ - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].x;
        $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ = $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].y;
        $dist$$inline_125_pY$$inline_139_poly$$inline_116$$ = Math.sqrt($dX$$inline_119_xLocalX$$inline_121$$ * $dX$$inline_119_xLocalX$$inline_121$$ + $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$);
        $dX$$inline_119_xLocalX$$inline_121$$ /= $dist$$inline_125_pY$$inline_139_poly$$inline_116$$;
        $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ /= $dist$$inline_125_pY$$inline_139_poly$$inline_116$$;
        if(!($dist$$inline_125_pY$$inline_139_poly$$inline_116$$ > $radius$$inline_128_tX$$inline_124$$)) {
          $manifold$$inline_115$$.$pointCount$ = 1;
          $manifold$$inline_115$$.$normal$.$Set$($tMat$$inline_123$$.$col1$.x * $dX$$inline_119_xLocalX$$inline_121$$ + $tMat$$inline_123$$.$col2$.x * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$, $tMat$$inline_123$$.$col1$.y * $dX$$inline_119_xLocalX$$inline_121$$ + $tMat$$inline_123$$.$col2$.y * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$);
          $i$$inline_129_tPoint$$inline_118$$ = $manifold$$inline_115$$.$points$[0];
          $i$$inline_129_tPoint$$inline_118$$.id.$features$.$incidentEdge$ = 255;
          $i$$inline_129_tPoint$$inline_118$$.id.$features$.$incidentVertex$ = $normalIndex$$inline_126_vertIndex1$$inline_132$$;
          $i$$inline_129_tPoint$$inline_118$$.id.$features$.$referenceFace$ = 255;
          $i$$inline_129_tPoint$$inline_118$$.id.$features$.$flip$ = 0;
          $i$$inline_129_tPoint$$inline_118$$.position.x = $circle$$inline_117$$.$m_position$.x - $radius$$inline_128_tX$$inline_124$$ * $manifold$$inline_115$$.$normal$.x;
          $i$$inline_129_tPoint$$inline_118$$.position.y = $circle$$inline_117$$.$m_position$.y - $radius$$inline_128_tX$$inline_124$$ * $manifold$$inline_115$$.$normal$.y;
          $i$$inline_129_tPoint$$inline_118$$.$separation$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$ - $radius$$inline_128_tX$$inline_124$$
        }
      }else {
        var $u$$inline_137$$ = ($dX$$inline_119_xLocalX$$inline_121$$ - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].x) * $eX$$inline_134_pX$$inline_138$$ + ($dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].y) * $eY$$inline_135_s$$inline_130$$;
        $i$$inline_129_tPoint$$inline_118$$ = $manifold$$inline_115$$.$points$[0];
        $i$$inline_129_tPoint$$inline_118$$.id.$features$.$incidentEdge$ = 255;
        $i$$inline_129_tPoint$$inline_118$$.id.$features$.$incidentVertex$ = 255;
        $i$$inline_129_tPoint$$inline_118$$.id.$features$.$referenceFace$ = 255;
        $i$$inline_129_tPoint$$inline_118$$.id.$features$.$flip$ = 0;
        if($u$$inline_137$$ <= 0) {
          $eX$$inline_134_pX$$inline_138$$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].x;
          $dist$$inline_125_pY$$inline_139_poly$$inline_116$$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].y;
          $i$$inline_129_tPoint$$inline_118$$.id.$features$.$incidentVertex$ = $normalIndex$$inline_126_vertIndex1$$inline_132$$
        }else {
          if($u$$inline_137$$ >= $length$$inline_136$$) {
            $eX$$inline_134_pX$$inline_138$$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$separation$$inline_127_vertIndex2$$inline_133$$].x;
            $dist$$inline_125_pY$$inline_139_poly$$inline_116$$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$separation$$inline_127_vertIndex2$$inline_133$$].y;
            $i$$inline_129_tPoint$$inline_118$$.id.$features$.$incidentVertex$ = $separation$$inline_127_vertIndex2$$inline_133$$
          }else {
            $eX$$inline_134_pX$$inline_138$$ = $eX$$inline_134_pX$$inline_138$$ * $u$$inline_137$$ + $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].x;
            $dist$$inline_125_pY$$inline_139_poly$$inline_116$$ = $eY$$inline_135_s$$inline_130$$ * $u$$inline_137$$ + $dist$$inline_125_pY$$inline_139_poly$$inline_116$$.$m_vertices$[$normalIndex$$inline_126_vertIndex1$$inline_132$$].y;
            $i$$inline_129_tPoint$$inline_118$$.id.$features$.$incidentEdge$ = $normalIndex$$inline_126_vertIndex1$$inline_132$$
          }
        }
        $dX$$inline_119_xLocalX$$inline_121$$ = $dX$$inline_119_xLocalX$$inline_121$$ - $eX$$inline_134_pX$$inline_138$$;
        $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ = $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ - $dist$$inline_125_pY$$inline_139_poly$$inline_116$$;
        $dist$$inline_125_pY$$inline_139_poly$$inline_116$$ = Math.sqrt($dX$$inline_119_xLocalX$$inline_121$$ * $dX$$inline_119_xLocalX$$inline_121$$ + $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$);
        $dX$$inline_119_xLocalX$$inline_121$$ /= $dist$$inline_125_pY$$inline_139_poly$$inline_116$$;
        $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$ /= $dist$$inline_125_pY$$inline_139_poly$$inline_116$$;
        if(!($dist$$inline_125_pY$$inline_139_poly$$inline_116$$ > $radius$$inline_128_tX$$inline_124$$)) {
          $manifold$$inline_115$$.$pointCount$ = 1;
          $manifold$$inline_115$$.$normal$.$Set$($tMat$$inline_123$$.$col1$.x * $dX$$inline_119_xLocalX$$inline_121$$ + $tMat$$inline_123$$.$col2$.x * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$, $tMat$$inline_123$$.$col1$.y * $dX$$inline_119_xLocalX$$inline_121$$ + $tMat$$inline_123$$.$col2$.y * $dY$$inline_120_tVec$$inline_131_xLocalY$$inline_122$$);
          $i$$inline_129_tPoint$$inline_118$$.position.x = $circle$$inline_117$$.$m_position$.x - $radius$$inline_128_tX$$inline_124$$ * $manifold$$inline_115$$.$normal$.x;
          $i$$inline_129_tPoint$$inline_118$$.position.y = $circle$$inline_117$$.$m_position$.y - $radius$$inline_128_tX$$inline_124$$ * $manifold$$inline_115$$.$normal$.y;
          $i$$inline_129_tPoint$$inline_118$$.$separation$ = $dist$$inline_125_pY$$inline_139_poly$$inline_116$$ - $radius$$inline_128_tX$$inline_124$$
        }
      }
    }
  }
  this.$m_manifoldCount$ = this.$m_manifold$[0].$pointCount$ > 0 ? 1 : 0
}, $GetManifolds$:$JSCompiler_get$$("$m_manifold$"), $m_manifold$:[new $b2Manifold$$]});
function $b2PolyAndCircleContact$Create$$($shape1$$3$$, $shape2$$3$$) {
  return new $b2PolyAndCircleContact$$($shape1$$3$$, $shape2$$3$$)
}
function $b2PolyAndCircleContact$Destroy$$() {
}
;
// Input 47
function $b2PolyContact$$($s1$$4$$, $s2$$4$$) {
  this.$m_node1$ = new $b2ContactNode$$;
  this.$m_node2$ = new $b2ContactNode$$;
  this.$m_flags$ = 0;
  if(!$s1$$4$$ || !$s2$$4$$) {
    this.$m_shape2$ = this.$m_shape1$ = null
  }else {
    this.$m_shape1$ = $s1$$4$$;
    this.$m_shape2$ = $s2$$4$$;
    this.$m_manifoldCount$ = 0;
    this.$m_friction$ = Math.sqrt(this.$m_shape1$.$m_friction$ * this.$m_shape2$.$m_friction$);
    this.$m_restitution$ = $b2Math$b2Max$$(this.$m_shape1$.$m_restitution$, this.$m_shape2$.$m_restitution$);
    this.$m_next$ = this.$m_prev$ = null;
    this.$m_node1$.$contact$ = null;
    this.$m_node1$.$prev$ = null;
    this.$m_node1$.next = null;
    this.$m_node1$.$other$ = null;
    this.$m_node2$.$contact$ = null;
    this.$m_node2$.$prev$ = null;
    this.$m_node2$.next = null;
    this.$m_node2$.$other$ = null;
    this.$m0$ = new $b2Manifold$$;
    this.$m_manifold$ = [new $b2Manifold$$];
    this.$m_manifold$[0].$pointCount$ = 0
  }
}
$goog$inherits$$($b2PolyContact$$, $b2Contact$$);
$b2PolyContact$$.prototype.$Evaluate$ = function $$b2PolyContact$$$$$Evaluate$$() {
  for(var $tMani$$ = this.$m_manifold$[0], $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$ = this.$m0$.$points$, $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$ = 0;$i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$ < $tMani$$.$pointCount$;$i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$++) {
    var $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$ = $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$[$i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$], $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ = $tMani$$.$points$[$i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$];
    $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$normalImpulse$ = $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$.$normalImpulse$;
    $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$tangentImpulse$ = $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$.$tangentImpulse$;
    $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.id = $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$.id.$Copy$()
  }
  this.$m0$.$pointCount$ = $tMani$$.$pointCount$;
  $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$ = this.$m_shape1$;
  var $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ = this.$m_shape2$;
  var $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ = $tMani$$.$pointCount$ = 0;
  $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$ = [$cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$];
  $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$ = $b2Collision$FindMaxSeparation$$($edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$, $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$, $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$, false);
  $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ = $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$[0];
  if(!($cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$ > 0 && 1)) {
    var $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ = 0;
    $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$ = [$edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$];
    var $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ = $b2Collision$FindMaxSeparation$$($edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$, $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$, $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$, false);
    $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ = $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$[0];
    if(!($clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ > 0 && 1)) {
      $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$ = $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ = 0;
      if($clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ > 0.98 * $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$ + 0.0010) {
        $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$ = $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$;
        $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ = $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$;
        $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ = $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$;
        $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$ = 1
      }else {
        $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$ = $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$;
        $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ = $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$;
        $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ = $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$;
        $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$ = 0
      }
      $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$ = [new $ClipVertex$$, new $ClipVertex$$];
      $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ = $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$;
      $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ = $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$;
      var $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_vertices$;
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ = $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.$m_vertexCount$;
      $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ = $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.$m_vertices$;
      var $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$[$edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ + 1 == $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_vertexCount$ ? 0 : $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ + 
      1], $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.x, $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ = $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.y;
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$[$edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$];
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ -= $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.x;
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ -= $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.y;
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$;
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ = -$cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$;
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = 1 / Math.sqrt($normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ * $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ + $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ * 
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$);
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ *= $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$;
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ *= $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$;
      var $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$ = $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$;
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$;
      $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_R$;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.x * $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ + $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.x * $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$;
      $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.y * $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ + $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.y * $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$;
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ = $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$;
      $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.$m_R$;
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ * $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.x + $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ * $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.y;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ * $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.x + $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ * $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.y;
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ = $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$;
      $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = 0;
      for(var $minDot$$inline_483$$ = Number.MAX_VALUE, $i$$inline_484$$ = 0;$i$$inline_484$$ < $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$;++$i$$inline_484$$) {
        var $i1$$inline_485$$ = $i$$inline_484$$, $i2$$inline_486$$ = $i$$inline_484$$ + 1 < $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ ? $i$$inline_484$$ + 1 : 0;
        $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$[$i2$$inline_486$$];
        var $normal2Local2X$$inline_487$$ = $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.x, $normal2Local2Y$$inline_488$$ = $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.y;
        $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$[$i1$$inline_485$$];
        $normal2Local2X$$inline_487$$ -= $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.x;
        $normal2Local2Y$$inline_488$$ -= $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.y;
        $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $normal2Local2X$$inline_487$$;
        $normal2Local2X$$inline_487$$ = $normal2Local2Y$$inline_488$$;
        $normal2Local2Y$$inline_488$$ = -$cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$;
        $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = 1 / Math.sqrt($normal2Local2X$$inline_487$$ * $normal2Local2X$$inline_487$$ + $normal2Local2Y$$inline_488$$ * $normal2Local2Y$$inline_488$$);
        $normal2Local2X$$inline_487$$ *= $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$;
        $normal2Local2Y$$inline_488$$ *= $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$;
        $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $normal2Local2X$$inline_487$$ * $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ + $normal2Local2Y$$inline_488$$ * $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$;
        if($cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ < $minDot$$inline_483$$) {
          $minDot$$inline_483$$ = $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$;
          $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = $i1$$inline_485$$;
          $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$ = $i2$$inline_486$$
        }
      }
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ = $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$[0];
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$.$v$;
      $JSCompiler_StaticMethods_SetV$$($cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$, $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$[$np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$]);
      $JSCompiler_StaticMethods_MulM$$($cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$, $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.$m_R$);
      $JSCompiler_StaticMethods_Add$$($cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$, $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.$m_position$);
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$.id.$features$.$referenceFace$ = $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$;
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$.id.$features$.$incidentEdge$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$;
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$.id.$features$.$incidentVertex$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$;
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ = $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$[1];
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$.$v$;
      $JSCompiler_StaticMethods_SetV$$($cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$, $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$[$normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$]);
      $JSCompiler_StaticMethods_MulM$$($cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$, $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.$m_R$);
      $JSCompiler_StaticMethods_Add$$($cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$, $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.$m_position$);
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$.id.$features$.$referenceFace$ = $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$;
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$.id.$features$.$incidentEdge$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$;
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$.id.$features$.$incidentVertex$ = $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$;
      $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ = $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_vertices$;
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$[$edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$];
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ = $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ + 1 < $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_vertexCount$ ? $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$[$edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ + 1] : $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$[0];
      $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ = $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$.x - $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.x;
      $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ = $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$.y - $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.y;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$;
      $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_R$;
      $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.x * $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ + $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.x * $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$;
      $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.y * $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ + $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.y * $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$;
      $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ = 1 / Math.sqrt($cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ * $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ + $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ * $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$);
      $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ *= $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$;
      $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ *= $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$;
      $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ = $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$;
      $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ = $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$;
      $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ = $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$;
      $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ = -$normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$;
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ = $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.x;
      $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$ = $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.y;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$;
      $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_R$;
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.x * $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ + $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.x * $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$;
      $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.y * $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ + $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.y * $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$;
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ += $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_position$.x;
      $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$ += $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_position$.y;
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$.x;
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ = $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$.y;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$;
      $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_R$;
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.x * $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ + $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.x * $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$;
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ = $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col1$.y * $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ + $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$.$col2$.y * $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$;
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ += $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_position$.x;
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ += $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$m_position$.y;
      $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$ = $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ * $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ + $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ * $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$;
      $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$ = -($cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ * $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ + $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ * $normal1Y$$inline_477_v11Y$$inline_208_vertex22$$inline_482$$);
      $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ * $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ + $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ * $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$;
      $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$ = [new $ClipVertex$$, new $ClipVertex$$];
      $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$ = [new $ClipVertex$$, new $ClipVertex$$];
      $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = 0;
      $b2Collision$b2CollidePolyTempVec$$.$Set$(-$cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$, -$edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$);
      $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = $b2Collision$ClipSegmentToLine$$($clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$, $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$, $b2Collision$b2CollidePolyTempVec$$, $normal1Local1X$$inline_472_normal1Local2Y$$inline_480_normal1X$$inline_476_sideOffset1$$inline_212_tX$$inline_202$$);
      if(!($np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ < 2)) {
        $b2Collision$b2CollidePolyTempVec$$.$Set$($cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$, $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$);
        $np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ = $b2Collision$ClipSegmentToLine$$($clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$, $clipPoints1$$inline_214_normal1Local1Y$$inline_473_normal1Local2X$$inline_479_v12$$inline_199_v12Y$$inline_210$$, $b2Collision$b2CollidePolyTempVec$$, $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$);
        if(!($np$$inline_216_tMat$$inline_203_tMat$$inline_478_vert1s$$inline_468_vertex21$$inline_481$$ < 2)) {
          $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$ ? $tMani$$.$normal$.$Set$(-$edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$, -$edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$) : $tMani$$.$normal$.$Set$($edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$, $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$);
          for($cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ = $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$ = 0;$cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ < 2;++$cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$) {
            $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ = $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$[$cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$].$v$;
            $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ = $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ * $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$.x + $edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ * $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$.y - 
            $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$;
            if($edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$ <= 0) {
              $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$ = $tMani$$.$points$[$i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$];
              $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.$separation$ = $edgeB$$inline_189_separation$$inline_220_sideNormalY$$inline_201_tVec$$inline_219_vert2s$$inline_470$$;
              $JSCompiler_StaticMethods_SetV$$($cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.position, $clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$[$cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$].$v$);
              $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.id.$Set$($clipPoints2$$inline_215_count2$$inline_469_poly2$$inline_193_separationB$$inline_191_tClip$$inline_490_v11X$$inline_207$$[$cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$].id);
              $cp$$inline_221_dot$$inline_489_invLength$$inline_475_sideOffset2$$inline_213_tVec$$inline_471_tX$$inline_474_v11$$inline_198_v12X$$inline_209$$.id.$features$.$flip$ = $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$;
              ++$i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$
            }
          }
          $tMani$$.$pointCount$ = $i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$
        }
      }
    }
  }
  if($tMani$$.$pointCount$ > 0) {
    $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$ = [false, false];
    for($i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$ = 0;$i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$ < $tMani$$.$pointCount$;++$i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$) {
      $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$ = $tMani$$.$points$[$i$$40_incidentEdge$$inline_196_k$$1_pointCount$$inline_217_polyA$$inline_183$$];
      $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$normalImpulse$ = 0;
      $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$tangentImpulse$ = 0;
      $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$ = $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.id.key;
      for($edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ = 0;$edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$ < this.$m0$.$pointCount$;++$edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$) {
        if($edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$[$edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$] != true) {
          $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$ = this.$m0$.$points$[$edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$];
          if($cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.id.key == $edge1$$inline_194_frontNormalX$$inline_205_idKey_invLength$$inline_204_tPoint0$$) {
            $edgeAOut$$inline_187_edgeBOut$$inline_190_flip$$inline_195_match_tPoints$$[$edge1$$inline_466_frontNormalY$$inline_206_j$$11_polyB$$inline_184_vert1s$$inline_197$$] = true;
            $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$normalImpulse$ = $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.$normalImpulse$;
            $cp$$2_frontOffset$$inline_211_poly1$$inline_192_separationA$$inline_188_tPoint$$2$$.$tangentImpulse$ = $cp0_edgeA$$inline_186_i$$inline_218_poly2$$inline_467_sideNormalX$$inline_200$$.$tangentImpulse$;
            break
          }
        }
      }
    }
    this.$m_manifoldCount$ = 1
  }else {
    this.$m_manifoldCount$ = 0
  }
};
$b2PolyContact$$.prototype.$GetManifolds$ = $JSCompiler_get$$("$m_manifold$");
function $b2PolyContact$Create$$($shape1$$4$$, $shape2$$4$$) {
  return new $b2PolyContact$$($shape1$$4$$, $shape2$$4$$)
}
function $b2PolyContact$Destroy$$() {
}
;
// Input 48
function $b2ContactFactory$_AddType$$($createFcn$$1$$, $destroyFcn$$1$$, $type1$$2$$, $type2$$2$$) {
  $b2ContactFactory$s_registers$$[$type1$$2$$][$type2$$2$$].$createFcn$ = $createFcn$$1$$;
  $b2ContactFactory$s_registers$$[$type1$$2$$][$type2$$2$$].$destroyFcn$ = $destroyFcn$$1$$;
  $b2ContactFactory$s_registers$$[$type1$$2$$][$type2$$2$$].$primary$ = true;
  if($type1$$2$$ != $type2$$2$$) {
    $b2ContactFactory$s_registers$$[$type2$$2$$][$type1$$2$$].$createFcn$ = $createFcn$$1$$;
    $b2ContactFactory$s_registers$$[$type2$$2$$][$type1$$2$$].$destroyFcn$ = $destroyFcn$$1$$;
    $b2ContactFactory$s_registers$$[$type2$$2$$][$type1$$2$$].$primary$ = false
  }
}
var $b2ContactFactory$s_registers$$ = null, $b2ContactFactory$s_initialized$$ = false;
// Input 49
function $b2ContactManager$$() {
  this.$m_nullContact$ = new $b2NullContact$$;
  this.$m_world$ = null;
  this.$m_destroyImmediate$ = false
}
$goog$inherits$$($b2ContactManager$$, $b2PairCallback$$);
$b2ContactManager$$.prototype.$PairAdded$ = function $$b2ContactManager$$$$$PairAdded$$($proxyUserData1$$2$$, $proxyUserData2$$2$$) {
  var $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$ = $proxyUserData1$$2$$, $i$$inline_247_shape2$$6_shape2$$inline_241$$ = $proxyUserData2$$2$$, $JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$ = $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_body$, $allocator$$inline_242_body2_m$$inline_248_tempShape$$ = $i$$inline_247_shape2$$6_shape2$$inline_241$$.$m_body$;
  if($JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$.$IsStatic$() && $allocator$$inline_242_body2_m$$inline_248_tempShape$$.$IsStatic$()) {
    return this.$m_nullContact$
  }
  if($c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_body$ == $i$$inline_247_shape2$$6_shape2$$inline_241$$.$m_body$) {
    return this.$m_nullContact$
  }
  if($allocator$$inline_242_body2_m$$inline_248_tempShape$$.$IsConnected$($JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$)) {
    return this.$m_nullContact$
  }
  if($JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$ = this.$m_world$.$m_filter$ != null) {
    $JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$ = ($c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_groupIndex$ == $i$$inline_247_shape2$$6_shape2$$inline_241$$.$m_groupIndex$ && $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_groupIndex$ != 0 ? $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_groupIndex$ > 0 : ($c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_maskBits$ & $i$$inline_247_shape2$$6_shape2$$inline_241$$.$m_categoryBits$) != 
    0 && ($c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_categoryBits$ & $i$$inline_247_shape2$$6_shape2$$inline_241$$.$m_maskBits$) != 0) == false
  }
  if($JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$) {
    return this.$m_nullContact$
  }
  if($allocator$$inline_242_body2_m$$inline_248_tempShape$$.$m_invMass$ == 0) {
    $allocator$$inline_242_body2_m$$inline_248_tempShape$$ = $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$;
    $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$ = $i$$inline_247_shape2$$6_shape2$$inline_241$$;
    $i$$inline_247_shape2$$6_shape2$$inline_241$$ = $allocator$$inline_242_body2_m$$inline_248_tempShape$$
  }
  $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$ = $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$;
  $i$$inline_247_shape2$$6_shape2$$inline_241$$ = $i$$inline_247_shape2$$6_shape2$$inline_241$$;
  $allocator$$inline_242_body2_m$$inline_248_tempShape$$ = this.$m_world$.$m_blockAllocator$;
  if($b2ContactFactory$s_initialized$$ == false) {
    $b2ContactFactory$s_registers$$ = Array(4);
    for($JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$ = 0;$JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$ < 4;$JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$++) {
      $b2ContactFactory$s_registers$$[$JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$] = Array(4);
      for(var $j$$inline_495_type2$$inline_244$$ = 0;$j$$inline_495_type2$$inline_244$$ < 4;$j$$inline_495_type2$$inline_244$$++) {
        $b2ContactFactory$s_registers$$[$JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$][$j$$inline_495_type2$$inline_244$$] = new $b2ContactRegister$$
      }
    }
    $b2ContactFactory$_AddType$$($b2CircleContact$Create$$, $b2CircleContact$Destroy$$, 0, 0);
    $b2ContactFactory$_AddType$$($b2PolyAndCircleContact$Create$$, $b2PolyAndCircleContact$Destroy$$, 2, 0);
    $b2ContactFactory$_AddType$$($b2PolyContact$Create$$, $b2PolyContact$Destroy$$, 2, 2);
    $b2ContactFactory$s_initialized$$ = true
  }
  $JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$ = $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_type$;
  $j$$inline_495_type2$$inline_244$$ = $i$$inline_247_shape2$$6_shape2$$inline_241$$.$m_type$;
  var $createFcn$$inline_245$$ = $b2ContactFactory$s_registers$$[$JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$][$j$$inline_495_type2$$inline_244$$].$createFcn$;
  if($createFcn$$inline_245$$) {
    if($b2ContactFactory$s_registers$$[$JSCompiler_temp$$1_body1_i$$inline_494_type1$$inline_243$$][$j$$inline_495_type2$$inline_244$$].$primary$) {
      $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$ = $createFcn$$inline_245$$($c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$, $i$$inline_247_shape2$$6_shape2$$inline_241$$, $allocator$$inline_242_body2_m$$inline_248_tempShape$$)
    }else {
      $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$ = $createFcn$$inline_245$$($i$$inline_247_shape2$$6_shape2$$inline_241$$, $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$, $allocator$$inline_242_body2_m$$inline_248_tempShape$$);
      for($i$$inline_247_shape2$$6_shape2$$inline_241$$ = 0;$i$$inline_247_shape2$$6_shape2$$inline_241$$ < $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_manifoldCount$;++$i$$inline_247_shape2$$6_shape2$$inline_241$$) {
        $allocator$$inline_242_body2_m$$inline_248_tempShape$$ = $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$GetManifolds$()[$i$$inline_247_shape2$$6_shape2$$inline_241$$];
        $allocator$$inline_242_body2_m$$inline_248_tempShape$$.$normal$ = new $b2Vec2$$(-$allocator$$inline_242_body2_m$$inline_248_tempShape$$.$normal$.x, -$allocator$$inline_242_body2_m$$inline_248_tempShape$$.$normal$.y)
      }
      $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$ = $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$
    }
  }else {
    $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$ = null
  }
  if($c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$ == null) {
    return this.$m_nullContact$
  }else {
    $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_prev$ = null;
    $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$.$m_next$ = this.$m_world$.$m_contactList$;
    if(this.$m_world$.$m_contactList$ != null) {
      this.$m_world$.$m_contactList$.$m_prev$ = $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$
    }
    this.$m_world$.$m_contactList$ = $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$;
    this.$m_world$.$m_contactCount$++
  }
  return $c$$inline_246_contact$$6_shape1$$6_shape1$$inline_240$$
};
$b2ContactManager$$.prototype.$PairRemoved$ = function $$b2ContactManager$$$$$PairRemoved$$($proxyUserData1$$3$$, $proxyUserData2$$3$$, $pairUserData$$1$$) {
  if($pairUserData$$1$$ != null) {
    if($pairUserData$$1$$ != this.$m_nullContact$) {
      if(this.$m_destroyImmediate$ == true) {
        $JSCompiler_StaticMethods_DestroyContact$$(this, $pairUserData$$1$$)
      }else {
        $pairUserData$$1$$.$m_flags$ |= 2
      }
    }
  }
};
function $JSCompiler_StaticMethods_DestroyContact$$($JSCompiler_StaticMethods_DestroyContact$self$$, $c$$13$$) {
  if($c$$13$$.$m_prev$) {
    $c$$13$$.$m_prev$.$m_next$ = $c$$13$$.$m_next$
  }
  if($c$$13$$.$m_next$) {
    $c$$13$$.$m_next$.$m_prev$ = $c$$13$$.$m_prev$
  }
  if($c$$13$$ == $JSCompiler_StaticMethods_DestroyContact$self$$.$m_world$.$m_contactList$) {
    $JSCompiler_StaticMethods_DestroyContact$self$$.$m_world$.$m_contactList$ = $c$$13$$.$m_next$
  }
  if($c$$13$$.$m_manifoldCount$ > 0) {
    var $allocator$$inline_254_body1$$1$$ = $c$$13$$.$m_shape1$.$m_body$, $body2$$1_destroyFcn$$inline_255$$ = $c$$13$$.$m_shape2$.$m_body$, $node1$$ = $c$$13$$.$m_node1$, $node2$$ = $c$$13$$.$m_node2$;
    $allocator$$inline_254_body1$$1$$.$WakeUp$();
    $body2$$1_destroyFcn$$inline_255$$.$WakeUp$();
    if($node1$$.$prev$) {
      $node1$$.$prev$.next = $node1$$.next
    }
    if($node1$$.next) {
      $node1$$.next.$prev$ = $node1$$.$prev$
    }
    if($node1$$ == $allocator$$inline_254_body1$$1$$.$m_contactList$) {
      $allocator$$inline_254_body1$$1$$.$m_contactList$ = $node1$$.next
    }
    $node1$$.$prev$ = null;
    $node1$$.next = null;
    if($node2$$.$prev$) {
      $node2$$.$prev$.next = $node2$$.next
    }
    if($node2$$.next) {
      $node2$$.next.$prev$ = $node2$$.$prev$
    }
    if($node2$$ == $body2$$1_destroyFcn$$inline_255$$.$m_contactList$) {
      $body2$$1_destroyFcn$$inline_255$$.$m_contactList$ = $node2$$.next
    }
    $node2$$.$prev$ = null;
    $node2$$.next = null
  }
  $allocator$$inline_254_body1$$1$$ = $JSCompiler_StaticMethods_DestroyContact$self$$.$m_world$.$m_blockAllocator$;
  if($c$$13$$.$m_manifoldCount$ > 0) {
    $c$$13$$.$m_shape1$.$m_body$.$WakeUp$();
    $c$$13$$.$m_shape2$.$m_body$.$WakeUp$()
  }
  $body2$$1_destroyFcn$$inline_255$$ = $b2ContactFactory$s_registers$$[$c$$13$$.$m_shape1$.$m_type$][$c$$13$$.$m_shape2$.$m_type$].$destroyFcn$;
  $body2$$1_destroyFcn$$inline_255$$($c$$13$$, $allocator$$inline_254_body1$$1$$);
  --$JSCompiler_StaticMethods_DestroyContact$self$$.$m_world$.$m_contactCount$
}
$b2ContactManager$$.prototype.$m_nullContact$ = new $b2NullContact$$;
$b2ContactManager$$.prototype.$m_destroyImmediate$ = null;
// Input 50
function $b2Jacobian$$() {
  this.$linear1$ = new $b2Vec2$$;
  this.$linear2$ = new $b2Vec2$$
}
$b2Jacobian$$.prototype = {$linear1$:new $b2Vec2$$, $angular1$:null, $linear2$:new $b2Vec2$$, $angular2$:null, $SetZero$:function $$b2Jacobian$$$$$SetZero$$() {
  this.$linear1$.$SetZero$();
  this.$angular1$ = 0;
  this.$linear2$.$SetZero$();
  this.$angular2$ = 0
}, $Set$:function $$b2Jacobian$$$$$Set$$($x1$$3$$, $a1$$, $x2$$1$$, $a2$$) {
  $JSCompiler_StaticMethods_SetV$$(this.$linear1$, $x1$$3$$);
  this.$angular1$ = $a1$$;
  $JSCompiler_StaticMethods_SetV$$(this.$linear2$, $x2$$1$$);
  this.$angular2$ = $a2$$
}, $Compute$:function $$b2Jacobian$$$$$Compute$$($x1$$4$$, $a1$$1$$, $x2$$2$$, $a2$$1$$) {
  return this.$linear1$.x * $x1$$4$$.x + this.$linear1$.y * $x1$$4$$.y + this.$angular1$ * $a1$$1$$ + (this.$linear2$.x * $x2$$2$$.x + this.$linear2$.y * $x2$$2$$.y) + this.$angular2$ * $a2$$1$$
}};
// Input 51
function $b2JointNode$$() {
}
$b2JointNode$$.prototype = {$other$:null, $joint$:null, $prev$:null, next:null};
// Input 52
function $b2Joint$$($def$$4$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$4$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$4$$.$body1$;
  this.$m_body2$ = $def$$4$$.$body2$;
  this.$m_collideConnected$ = $def$$4$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$4$$.$userData$
}
$b2Joint$$.prototype = {$GetAnchor1$:$JSCompiler_returnArg$$(null), $GetAnchor2$:$JSCompiler_returnArg$$(null), $GetReactionForce$:$JSCompiler_returnArg$$(null), $GetReactionTorque$:$JSCompiler_returnArg$$(0), $GetNext$:$JSCompiler_get$$("$m_next$"), $PrepareVelocitySolver$:$JSCompiler_emptyFn$$(), $SolveVelocityConstraints$:$JSCompiler_emptyFn$$(), $SolvePositionConstraints$:$JSCompiler_returnArg$$(false), $m_type$:0, $m_prev$:null, $m_next$:null, $m_node1$:new $b2JointNode$$, $m_node2$:new $b2JointNode$$, 
$m_body1$:null, $m_body2$:null, $m_islandFlag$:null, $m_collideConnected$:null, $m_userData$:null};
// Input 53
function $b2DistanceJoint$$($def$$5$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$5$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$5$$.$body1$;
  this.$m_body2$ = $def$$5$$.$body2$;
  this.$m_collideConnected$ = $def$$5$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$5$$.$userData$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_u$ = new $b2Vec2$$;
  var $tMat$$8$$, $tX$$9$$, $tY$$1$$;
  $tMat$$8$$ = this.$m_body1$.$m_R$;
  $tX$$9$$ = $def$$5$$.$anchorPoint1$.x - this.$m_body1$.$m_position$.x;
  $tY$$1$$ = $def$$5$$.$anchorPoint1$.y - this.$m_body1$.$m_position$.y;
  this.$m_localAnchor1$.x = $tX$$9$$ * $tMat$$8$$.$col1$.x + $tY$$1$$ * $tMat$$8$$.$col1$.y;
  this.$m_localAnchor1$.y = $tX$$9$$ * $tMat$$8$$.$col2$.x + $tY$$1$$ * $tMat$$8$$.$col2$.y;
  $tMat$$8$$ = this.$m_body2$.$m_R$;
  $tX$$9$$ = $def$$5$$.$anchorPoint2$.x - this.$m_body2$.$m_position$.x;
  $tY$$1$$ = $def$$5$$.$anchorPoint2$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor2$.x = $tX$$9$$ * $tMat$$8$$.$col1$.x + $tY$$1$$ * $tMat$$8$$.$col1$.y;
  this.$m_localAnchor2$.y = $tX$$9$$ * $tMat$$8$$.$col2$.x + $tY$$1$$ * $tMat$$8$$.$col2$.y;
  $tX$$9$$ = $def$$5$$.$anchorPoint2$.x - $def$$5$$.$anchorPoint1$.x;
  $tY$$1$$ = $def$$5$$.$anchorPoint2$.y - $def$$5$$.$anchorPoint1$.y;
  this.$m_length$ = Math.sqrt($tX$$9$$ * $tX$$9$$ + $tY$$1$$ * $tY$$1$$);
  this.$m_impulse$ = 0
}
Object.extend($b2DistanceJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2DistanceJoint$$.prototype, {$PrepareVelocitySolver$:function() {
  var $r2Y$$4_tMat$$9$$;
  $r2Y$$4_tMat$$9$$ = this.$m_body1$.$m_R$;
  var $r1X$$4$$ = $r2Y$$4_tMat$$9$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$4_tMat$$9$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$4$$ = $r2Y$$4_tMat$$9$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$4_tMat$$9$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$4_tMat$$9$$ = this.$m_body2$.$m_R$;
  var $r2X$$4$$ = $r2Y$$4_tMat$$9$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$4_tMat$$9$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$4_tMat$$9$$ = $r2Y$$4_tMat$$9$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$4_tMat$$9$$.$col2$.y * this.$m_localAnchor2$.y;
  this.$m_u$.x = this.$m_body2$.$m_position$.x + $r2X$$4$$ - this.$m_body1$.$m_position$.x - $r1X$$4$$;
  this.$m_u$.y = this.$m_body2$.$m_position$.y + $r2Y$$4_tMat$$9$$ - this.$m_body1$.$m_position$.y - $r1Y$$4$$;
  var $PX$$2_cr1u_length$$6$$ = Math.sqrt(this.$m_u$.x * this.$m_u$.x + this.$m_u$.y * this.$m_u$.y);
  $PX$$2_cr1u_length$$6$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u$, 1 / $PX$$2_cr1u_length$$6$$) : this.$m_u$.$SetZero$();
  $PX$$2_cr1u_length$$6$$ = $r1X$$4$$ * this.$m_u$.y - $r1Y$$4$$ * this.$m_u$.x;
  var $PY$$2_cr2u$$ = $r2X$$4$$ * this.$m_u$.y - $r2Y$$4_tMat$$9$$ * this.$m_u$.x;
  this.$m_mass$ = this.$m_body1$.$m_invMass$ + this.$m_body1$.$m_invI$ * $PX$$2_cr1u_length$$6$$ * $PX$$2_cr1u_length$$6$$ + this.$m_body2$.$m_invMass$ + this.$m_body2$.$m_invI$ * $PY$$2_cr2u$$ * $PY$$2_cr2u$$;
  this.$m_mass$ = 1 / this.$m_mass$;
  if($b2World$s_enableWarmStarting$$) {
    $PX$$2_cr1u_length$$6$$ = this.$m_impulse$ * this.$m_u$.x;
    $PY$$2_cr2u$$ = this.$m_impulse$ * this.$m_u$.y;
    this.$m_body1$.$m_linearVelocity$.x -= this.$m_body1$.$m_invMass$ * $PX$$2_cr1u_length$$6$$;
    this.$m_body1$.$m_linearVelocity$.y -= this.$m_body1$.$m_invMass$ * $PY$$2_cr2u$$;
    this.$m_body1$.$m_angularVelocity$ -= this.$m_body1$.$m_invI$ * ($r1X$$4$$ * $PY$$2_cr2u$$ - $r1Y$$4$$ * $PX$$2_cr1u_length$$6$$);
    this.$m_body2$.$m_linearVelocity$.x += this.$m_body2$.$m_invMass$ * $PX$$2_cr1u_length$$6$$;
    this.$m_body2$.$m_linearVelocity$.y += this.$m_body2$.$m_invMass$ * $PY$$2_cr2u$$;
    this.$m_body2$.$m_angularVelocity$ += this.$m_body2$.$m_invI$ * ($r2X$$4$$ * $PY$$2_cr2u$$ - $r2Y$$4_tMat$$9$$ * $PX$$2_cr1u_length$$6$$)
  }else {
    this.$m_impulse$ = 0
  }
}, $SolveVelocityConstraints$:function() {
  var $r2Y$$5_tMat$$10$$;
  $r2Y$$5_tMat$$10$$ = this.$m_body1$.$m_R$;
  var $r1X$$5$$ = $r2Y$$5_tMat$$10$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$5_tMat$$10$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$5$$ = $r2Y$$5_tMat$$10$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$5_tMat$$10$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$5_tMat$$10$$ = this.$m_body2$.$m_R$;
  var $r2X$$5$$ = $r2Y$$5_tMat$$10$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$5_tMat$$10$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$5_tMat$$10$$ = $r2Y$$5_tMat$$10$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$5_tMat$$10$$.$col2$.y * this.$m_localAnchor2$.y;
  var $PY$$3_impulse$$1$$ = -this.$m_mass$ * (this.$m_u$.x * (this.$m_body2$.$m_linearVelocity$.x + -this.$m_body2$.$m_angularVelocity$ * $r2Y$$5_tMat$$10$$ - (this.$m_body1$.$m_linearVelocity$.x + -this.$m_body1$.$m_angularVelocity$ * $r1Y$$5$$)) + this.$m_u$.y * (this.$m_body2$.$m_linearVelocity$.y + this.$m_body2$.$m_angularVelocity$ * $r2X$$5$$ - (this.$m_body1$.$m_linearVelocity$.y + this.$m_body1$.$m_angularVelocity$ * $r1X$$5$$)));
  this.$m_impulse$ += $PY$$3_impulse$$1$$;
  var $PX$$3$$ = $PY$$3_impulse$$1$$ * this.$m_u$.x;
  $PY$$3_impulse$$1$$ = $PY$$3_impulse$$1$$ * this.$m_u$.y;
  this.$m_body1$.$m_linearVelocity$.x -= this.$m_body1$.$m_invMass$ * $PX$$3$$;
  this.$m_body1$.$m_linearVelocity$.y -= this.$m_body1$.$m_invMass$ * $PY$$3_impulse$$1$$;
  this.$m_body1$.$m_angularVelocity$ -= this.$m_body1$.$m_invI$ * ($r1X$$5$$ * $PY$$3_impulse$$1$$ - $r1Y$$5$$ * $PX$$3$$);
  this.$m_body2$.$m_linearVelocity$.x += this.$m_body2$.$m_invMass$ * $PX$$3$$;
  this.$m_body2$.$m_linearVelocity$.y += this.$m_body2$.$m_invMass$ * $PY$$3_impulse$$1$$;
  this.$m_body2$.$m_angularVelocity$ += this.$m_body2$.$m_invI$ * ($r2X$$5$$ * $PY$$3_impulse$$1$$ - $r2Y$$5_tMat$$10$$ * $PX$$3$$)
}, $SolvePositionConstraints$:function() {
  var $r2Y$$6_tMat$$11$$;
  $r2Y$$6_tMat$$11$$ = this.$m_body1$.$m_R$;
  var $r1X$$6$$ = $r2Y$$6_tMat$$11$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$6_tMat$$11$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$6$$ = $r2Y$$6_tMat$$11$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$6_tMat$$11$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$6_tMat$$11$$ = this.$m_body2$.$m_R$;
  var $r2X$$6$$ = $r2Y$$6_tMat$$11$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$6_tMat$$11$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$6_tMat$$11$$ = $r2Y$$6_tMat$$11$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$6_tMat$$11$$.$col2$.y * this.$m_localAnchor2$.y;
  var $PX$$4_dX$$10$$ = this.$m_body2$.$m_position$.x + $r2X$$6$$ - this.$m_body1$.$m_position$.x - $r1X$$6$$, $PY$$4_dY$$10$$ = this.$m_body2$.$m_position$.y + $r2Y$$6_tMat$$11$$ - this.$m_body1$.$m_position$.y - $r1Y$$6$$, $C$$4_length$$7$$ = Math.sqrt($PX$$4_dX$$10$$ * $PX$$4_dX$$10$$ + $PY$$4_dY$$10$$ * $PY$$4_dY$$10$$);
  $PX$$4_dX$$10$$ /= $C$$4_length$$7$$;
  $PY$$4_dY$$10$$ /= $C$$4_length$$7$$;
  $C$$4_length$$7$$ = $C$$4_length$$7$$ - this.$m_length$;
  $C$$4_length$$7$$ = $b2Math$b2Clamp$$($C$$4_length$$7$$, -6, 6);
  var $impulse$$2$$ = -this.$m_mass$ * $C$$4_length$$7$$;
  this.$m_u$.$Set$($PX$$4_dX$$10$$, $PY$$4_dY$$10$$);
  $PX$$4_dX$$10$$ = $impulse$$2$$ * this.$m_u$.x;
  $PY$$4_dY$$10$$ = $impulse$$2$$ * this.$m_u$.y;
  this.$m_body1$.$m_position$.x -= this.$m_body1$.$m_invMass$ * $PX$$4_dX$$10$$;
  this.$m_body1$.$m_position$.y -= this.$m_body1$.$m_invMass$ * $PY$$4_dY$$10$$;
  this.$m_body1$.$m_rotation$ -= this.$m_body1$.$m_invI$ * ($r1X$$6$$ * $PY$$4_dY$$10$$ - $r1Y$$6$$ * $PX$$4_dX$$10$$);
  this.$m_body2$.$m_position$.x += this.$m_body2$.$m_invMass$ * $PX$$4_dX$$10$$;
  this.$m_body2$.$m_position$.y += this.$m_body2$.$m_invMass$ * $PY$$4_dY$$10$$;
  this.$m_body2$.$m_rotation$ += this.$m_body2$.$m_invI$ * ($r2X$$6$$ * $PY$$4_dY$$10$$ - $r2Y$$6_tMat$$11$$ * $PX$$4_dX$$10$$);
  this.$m_body1$.$m_R$.$Set$(this.$m_body1$.$m_rotation$);
  this.$m_body2$.$m_R$.$Set$(this.$m_body2$.$m_rotation$);
  return $b2Math$b2Abs$$($C$$4_length$$7$$) < 0.15
}, $GetAnchor1$:function() {
  return $b2Math$AddVV$$(this.$m_body1$.$m_position$, $b2Math$b2MulMV$$(this.$m_body1$.$m_R$, this.$m_localAnchor1$))
}, $GetAnchor2$:function() {
  return $b2Math$AddVV$$(this.$m_body2$.$m_position$, $b2Math$b2MulMV$$(this.$m_body2$.$m_R$, this.$m_localAnchor2$))
}, $GetReactionForce$:function($invTimeStep$$2$$) {
  var $F$$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$($F$$, this.$m_u$);
  $JSCompiler_StaticMethods_Multiply$$($F$$, this.$m_impulse$ * $invTimeStep$$2$$);
  return $F$$
}, $GetReactionTorque$:$JSCompiler_returnArg$$(0), $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_u$:new $b2Vec2$$, $m_impulse$:null, $m_mass$:null, $m_length$:null});
// Input 54
function $b2GearJoint$$($def$$6$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$6$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$6$$.$body1$;
  this.$m_body2$ = $def$$6$$.$body2$;
  this.$m_collideConnected$ = $def$$6$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$6$$.$userData$;
  this.$m_groundAnchor1$ = new $b2Vec2$$;
  this.$m_groundAnchor2$ = new $b2Vec2$$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_J$ = new $b2Jacobian$$;
  this.$m_prismatic2$ = this.$m_revolute2$ = this.$m_prismatic1$ = this.$m_revolute1$ = null;
  var $coordinate1$$, $coordinate2$$;
  this.$m_ground1$ = $def$$6$$.$joint1$.$m_body1$;
  this.$m_body1$ = $def$$6$$.$joint1$.$m_body2$;
  if($def$$6$$.$joint1$.$m_type$ == 1) {
    this.$m_revolute1$ = $def$$6$$.$joint1$;
    $JSCompiler_StaticMethods_SetV$$(this.$m_groundAnchor1$, this.$m_revolute1$.$m_localAnchor1$);
    $JSCompiler_StaticMethods_SetV$$(this.$m_localAnchor1$, this.$m_revolute1$.$m_localAnchor2$);
    $coordinate1$$ = this.$m_revolute1$.$GetJointAngle$()
  }else {
    this.$m_prismatic1$ = $def$$6$$.$joint1$;
    $JSCompiler_StaticMethods_SetV$$(this.$m_groundAnchor1$, this.$m_prismatic1$.$m_localAnchor1$);
    $JSCompiler_StaticMethods_SetV$$(this.$m_localAnchor1$, this.$m_prismatic1$.$m_localAnchor2$);
    $coordinate1$$ = this.$m_prismatic1$.$GetJointTranslation$()
  }
  this.$m_ground2$ = $def$$6$$.$joint2$.$m_body1$;
  this.$m_body2$ = $def$$6$$.$joint2$.$m_body2$;
  if($def$$6$$.$joint2$.$m_type$ == 1) {
    this.$m_revolute2$ = $def$$6$$.$joint2$;
    $JSCompiler_StaticMethods_SetV$$(this.$m_groundAnchor2$, this.$m_revolute2$.$m_localAnchor1$);
    $JSCompiler_StaticMethods_SetV$$(this.$m_localAnchor2$, this.$m_revolute2$.$m_localAnchor2$);
    $coordinate2$$ = this.$m_revolute2$.$GetJointAngle$()
  }else {
    this.$m_prismatic2$ = $def$$6$$.$joint2$;
    $JSCompiler_StaticMethods_SetV$$(this.$m_groundAnchor2$, this.$m_prismatic2$.$m_localAnchor1$);
    $JSCompiler_StaticMethods_SetV$$(this.$m_localAnchor2$, this.$m_prismatic2$.$m_localAnchor2$);
    $coordinate2$$ = this.$m_prismatic2$.$GetJointTranslation$()
  }
  this.$m_ratio$ = $def$$6$$.$ratio$;
  this.$m_constant$ = $coordinate1$$ + this.$m_ratio$ * $coordinate2$$;
  this.$m_impulse$ = 0
}
Object.extend($b2GearJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2GearJoint$$.prototype, {$GetAnchor1$:function() {
  var $tMat$$12$$ = this.$m_body1$.$m_R$;
  return new $b2Vec2$$(this.$m_body1$.$m_position$.x + ($tMat$$12$$.$col1$.x * this.$m_localAnchor1$.x + $tMat$$12$$.$col2$.x * this.$m_localAnchor1$.y), this.$m_body1$.$m_position$.y + ($tMat$$12$$.$col1$.y * this.$m_localAnchor1$.x + $tMat$$12$$.$col2$.y * this.$m_localAnchor1$.y))
}, $GetAnchor2$:function() {
  var $tMat$$13$$ = this.$m_body2$.$m_R$;
  return new $b2Vec2$$(this.$m_body2$.$m_position$.x + ($tMat$$13$$.$col1$.x * this.$m_localAnchor2$.x + $tMat$$13$$.$col2$.x * this.$m_localAnchor2$.y), this.$m_body2$.$m_position$.y + ($tMat$$13$$.$col1$.y * this.$m_localAnchor2$.x + $tMat$$13$$.$col2$.y * this.$m_localAnchor2$.y))
}, $GetReactionForce$:function() {
  return new $b2Vec2$$
}, $GetReactionTorque$:$JSCompiler_returnArg$$(0), $GetRatio$:$JSCompiler_get$$("$m_ratio$"), $PrepareVelocitySolver$:function() {
  var $g1_ugX$$ = this.$m_ground1$, $g2$$ = this.$m_ground2$, $b1$$4$$ = this.$m_body1$, $b2$$4$$ = this.$m_body2$, $tVec$$12_ugY$$, $crug_rX$$2$$, $rY$$2_tMat$$14$$, $K$$ = 0;
  this.$m_J$.$SetZero$();
  if(this.$m_revolute1$) {
    this.$m_J$.$angular1$ = -1;
    $K$$ += $b1$$4$$.$m_invI$
  }else {
    $rY$$2_tMat$$14$$ = $g1_ugX$$.$m_R$;
    $tVec$$12_ugY$$ = this.$m_prismatic1$.$m_localXAxis1$;
    $g1_ugX$$ = $rY$$2_tMat$$14$$.$col1$.x * $tVec$$12_ugY$$.x + $rY$$2_tMat$$14$$.$col2$.x * $tVec$$12_ugY$$.y;
    $tVec$$12_ugY$$ = $rY$$2_tMat$$14$$.$col1$.y * $tVec$$12_ugY$$.x + $rY$$2_tMat$$14$$.$col2$.y * $tVec$$12_ugY$$.y;
    $rY$$2_tMat$$14$$ = $b1$$4$$.$m_R$;
    $crug_rX$$2$$ = $rY$$2_tMat$$14$$.$col1$.x * this.$m_localAnchor1$.x + $rY$$2_tMat$$14$$.$col2$.x * this.$m_localAnchor1$.y;
    $rY$$2_tMat$$14$$ = $rY$$2_tMat$$14$$.$col1$.y * this.$m_localAnchor1$.x + $rY$$2_tMat$$14$$.$col2$.y * this.$m_localAnchor1$.y;
    $crug_rX$$2$$ = $crug_rX$$2$$ * $tVec$$12_ugY$$ - $rY$$2_tMat$$14$$ * $g1_ugX$$;
    this.$m_J$.$linear1$.$Set$(-$g1_ugX$$, -$tVec$$12_ugY$$);
    this.$m_J$.$angular1$ = -$crug_rX$$2$$;
    $K$$ += $b1$$4$$.$m_invMass$ + $b1$$4$$.$m_invI$ * $crug_rX$$2$$ * $crug_rX$$2$$
  }
  if(this.$m_revolute2$) {
    this.$m_J$.$angular2$ = -this.$m_ratio$;
    $K$$ += this.$m_ratio$ * this.$m_ratio$ * $b2$$4$$.$m_invI$
  }else {
    $rY$$2_tMat$$14$$ = $g2$$.$m_R$;
    $tVec$$12_ugY$$ = this.$m_prismatic2$.$m_localXAxis1$;
    $g1_ugX$$ = $rY$$2_tMat$$14$$.$col1$.x * $tVec$$12_ugY$$.x + $rY$$2_tMat$$14$$.$col2$.x * $tVec$$12_ugY$$.y;
    $tVec$$12_ugY$$ = $rY$$2_tMat$$14$$.$col1$.y * $tVec$$12_ugY$$.x + $rY$$2_tMat$$14$$.$col2$.y * $tVec$$12_ugY$$.y;
    $rY$$2_tMat$$14$$ = $b2$$4$$.$m_R$;
    $crug_rX$$2$$ = $rY$$2_tMat$$14$$.$col1$.x * this.$m_localAnchor2$.x + $rY$$2_tMat$$14$$.$col2$.x * this.$m_localAnchor2$.y;
    $rY$$2_tMat$$14$$ = $rY$$2_tMat$$14$$.$col1$.y * this.$m_localAnchor2$.x + $rY$$2_tMat$$14$$.$col2$.y * this.$m_localAnchor2$.y;
    $crug_rX$$2$$ = $crug_rX$$2$$ * $tVec$$12_ugY$$ - $rY$$2_tMat$$14$$ * $g1_ugX$$;
    this.$m_J$.$linear2$.$Set$(-this.$m_ratio$ * $g1_ugX$$, -this.$m_ratio$ * $tVec$$12_ugY$$);
    this.$m_J$.$angular2$ = -this.$m_ratio$ * $crug_rX$$2$$;
    $K$$ += this.$m_ratio$ * this.$m_ratio$ * ($b2$$4$$.$m_invMass$ + $b2$$4$$.$m_invI$ * $crug_rX$$2$$ * $crug_rX$$2$$)
  }
  this.$m_mass$ = 1 / $K$$;
  $b1$$4$$.$m_linearVelocity$.x += $b1$$4$$.$m_invMass$ * this.$m_impulse$ * this.$m_J$.$linear1$.x;
  $b1$$4$$.$m_linearVelocity$.y += $b1$$4$$.$m_invMass$ * this.$m_impulse$ * this.$m_J$.$linear1$.y;
  $b1$$4$$.$m_angularVelocity$ += $b1$$4$$.$m_invI$ * this.$m_impulse$ * this.$m_J$.$angular1$;
  $b2$$4$$.$m_linearVelocity$.x += $b2$$4$$.$m_invMass$ * this.$m_impulse$ * this.$m_J$.$linear2$.x;
  $b2$$4$$.$m_linearVelocity$.y += $b2$$4$$.$m_invMass$ * this.$m_impulse$ * this.$m_J$.$linear2$.y;
  $b2$$4$$.$m_angularVelocity$ += $b2$$4$$.$m_invI$ * this.$m_impulse$ * this.$m_J$.$angular2$
}, $SolveVelocityConstraints$:function() {
  var $b1$$5$$ = this.$m_body1$, $b2$$5$$ = this.$m_body2$, $impulse$$3$$ = -this.$m_mass$ * this.$m_J$.$Compute$($b1$$5$$.$m_linearVelocity$, $b1$$5$$.$m_angularVelocity$, $b2$$5$$.$m_linearVelocity$, $b2$$5$$.$m_angularVelocity$);
  this.$m_impulse$ += $impulse$$3$$;
  $b1$$5$$.$m_linearVelocity$.x += $b1$$5$$.$m_invMass$ * $impulse$$3$$ * this.$m_J$.$linear1$.x;
  $b1$$5$$.$m_linearVelocity$.y += $b1$$5$$.$m_invMass$ * $impulse$$3$$ * this.$m_J$.$linear1$.y;
  $b1$$5$$.$m_angularVelocity$ += $b1$$5$$.$m_invI$ * $impulse$$3$$ * this.$m_J$.$angular1$;
  $b2$$5$$.$m_linearVelocity$.x += $b2$$5$$.$m_invMass$ * $impulse$$3$$ * this.$m_J$.$linear2$.x;
  $b2$$5$$.$m_linearVelocity$.y += $b2$$5$$.$m_invMass$ * $impulse$$3$$ * this.$m_J$.$linear2$.y;
  $b2$$5$$.$m_angularVelocity$ += $b2$$5$$.$m_invI$ * $impulse$$3$$ * this.$m_J$.$angular2$
}, $SolvePositionConstraints$:function() {
  var $b1$$6$$ = this.$m_body1$, $b2$$6$$ = this.$m_body2$, $impulse$$4$$ = -this.$m_mass$ * (this.$m_constant$ - ((this.$m_revolute1$ ? this.$m_revolute1$.$GetJointAngle$() : this.$m_prismatic1$.$GetJointTranslation$()) + this.$m_ratio$ * (this.$m_revolute2$ ? this.$m_revolute2$.$GetJointAngle$() : this.$m_prismatic2$.$GetJointTranslation$())));
  $b1$$6$$.$m_position$.x += $b1$$6$$.$m_invMass$ * $impulse$$4$$ * this.$m_J$.$linear1$.x;
  $b1$$6$$.$m_position$.y += $b1$$6$$.$m_invMass$ * $impulse$$4$$ * this.$m_J$.$linear1$.y;
  $b1$$6$$.$m_rotation$ += $b1$$6$$.$m_invI$ * $impulse$$4$$ * this.$m_J$.$angular1$;
  $b2$$6$$.$m_position$.x += $b2$$6$$.$m_invMass$ * $impulse$$4$$ * this.$m_J$.$linear2$.x;
  $b2$$6$$.$m_position$.y += $b2$$6$$.$m_invMass$ * $impulse$$4$$ * this.$m_J$.$linear2$.y;
  $b2$$6$$.$m_rotation$ += $b2$$6$$.$m_invI$ * $impulse$$4$$ * this.$m_J$.$angular2$;
  $b1$$6$$.$m_R$.$Set$($b1$$6$$.$m_rotation$);
  $b2$$6$$.$m_R$.$Set$($b2$$6$$.$m_rotation$);
  return true
}, $m_ground1$:null, $m_ground2$:null, $m_revolute1$:null, $m_prismatic1$:null, $m_revolute2$:null, $m_prismatic2$:null, $m_groundAnchor1$:new $b2Vec2$$, $m_groundAnchor2$:new $b2Vec2$$, $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_J$:new $b2Jacobian$$, $m_constant$:null, $m_ratio$:null, $m_mass$:null, $m_impulse$:null});
// Input 55
function $b2JointDef$$() {
  this.type = 0;
  this.$body2$ = this.$body1$ = this.$userData$ = null;
  this.$collideConnected$ = false
}
$b2JointDef$$.prototype = {type:0, $userData$:null, $body1$:null, $body2$:null, $collideConnected$:null};
// Input 56
function $b2MouseJoint$$($def$$7$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$7$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$7$$.$body1$;
  this.$m_body2$ = $def$$7$$.$body2$;
  this.$m_collideConnected$ = $def$$7$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$7$$.$userData$;
  this.$K$ = new $b2Mat22$$;
  this.$K1$ = new $b2Mat22$$;
  this.$K2$ = new $b2Mat22$$;
  this.$m_localAnchor$ = new $b2Vec2$$;
  this.$m_target$ = new $b2Vec2$$;
  this.$m_impulse$ = new $b2Vec2$$;
  this.$m_ptpMass$ = new $b2Mat22$$;
  this.$m_C$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$(this.$m_target$, $def$$7$$.target);
  var $d$$2_tX$$10$$ = this.$m_target$.x - this.$m_body2$.$m_position$.x, $k$$2_mass_tY$$2$$ = this.$m_target$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor$.x = $d$$2_tX$$10$$ * this.$m_body2$.$m_R$.$col1$.x + $k$$2_mass_tY$$2$$ * this.$m_body2$.$m_R$.$col1$.y;
  this.$m_localAnchor$.y = $d$$2_tX$$10$$ * this.$m_body2$.$m_R$.$col2$.x + $k$$2_mass_tY$$2$$ * this.$m_body2$.$m_R$.$col2$.y;
  this.$m_maxForce$ = $def$$7$$.$maxForce$;
  this.$m_impulse$.$SetZero$();
  $k$$2_mass_tY$$2$$ = this.$m_body2$.$m_mass$;
  var $omega$$ = 2 * $b2Settings$b2_pi$$ * $def$$7$$.$frequencyHz$;
  $d$$2_tX$$10$$ = 2 * $k$$2_mass_tY$$2$$ * $def$$7$$.$dampingRatio$ * $omega$$;
  $k$$2_mass_tY$$2$$ = $k$$2_mass_tY$$2$$ * $omega$$ * $omega$$;
  this.$m_gamma$ = 1 / ($d$$2_tX$$10$$ + $def$$7$$.$timeStep$ * $k$$2_mass_tY$$2$$);
  this.$m_beta$ = $def$$7$$.$timeStep$ * $k$$2_mass_tY$$2$$ / ($d$$2_tX$$10$$ + $def$$7$$.$timeStep$ * $k$$2_mass_tY$$2$$)
}
Object.extend($b2MouseJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2MouseJoint$$.prototype, {$GetAnchor1$:$JSCompiler_get$$("$m_target$"), $GetAnchor2$:function() {
  var $tVec$$13$$ = $b2Math$b2MulMV$$(this.$m_body2$.$m_R$, this.$m_localAnchor$);
  $JSCompiler_StaticMethods_Add$$($tVec$$13$$, this.$m_body2$.$m_position$);
  return $tVec$$13$$
}, $GetReactionForce$:function($invTimeStep$$6$$) {
  var $F$$1$$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$($F$$1$$, this.$m_impulse$);
  $JSCompiler_StaticMethods_Multiply$$($F$$1$$, $invTimeStep$$6$$);
  return $F$$1$$
}, $GetReactionTorque$:$JSCompiler_returnArg$$(0), $SetTarget$:function($target$$13$$) {
  this.$m_body2$.$WakeUp$();
  this.$m_target$ = $target$$13$$
}, $K$:new $b2Mat22$$, $K1$:new $b2Mat22$$, $K2$:new $b2Mat22$$, $PrepareVelocitySolver$:function() {
  var $b$$18$$ = this.$m_body2$, $rY$$3_tMat$$15$$;
  $rY$$3_tMat$$15$$ = $b$$18$$.$m_R$;
  var $rX$$3$$ = $rY$$3_tMat$$15$$.$col1$.x * this.$m_localAnchor$.x + $rY$$3_tMat$$15$$.$col2$.x * this.$m_localAnchor$.y;
  $rY$$3_tMat$$15$$ = $rY$$3_tMat$$15$$.$col1$.y * this.$m_localAnchor$.x + $rY$$3_tMat$$15$$.$col2$.y * this.$m_localAnchor$.y;
  var $invMass$$ = $b$$18$$.$m_invMass$, $invI$$ = $b$$18$$.$m_invI$;
  this.$K1$.$col1$.x = $invMass$$;
  this.$K1$.$col2$.x = 0;
  this.$K1$.$col1$.y = 0;
  this.$K1$.$col2$.y = $invMass$$;
  this.$K2$.$col1$.x = $invI$$ * $rY$$3_tMat$$15$$ * $rY$$3_tMat$$15$$;
  this.$K2$.$col2$.x = -$invI$$ * $rX$$3$$ * $rY$$3_tMat$$15$$;
  this.$K2$.$col1$.y = -$invI$$ * $rX$$3$$ * $rY$$3_tMat$$15$$;
  this.$K2$.$col2$.y = $invI$$ * $rX$$3$$ * $rX$$3$$;
  $JSCompiler_StaticMethods_SetM$$(this.$K$, this.$K1$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K2$);
  this.$K$.$col1$.x += this.$m_gamma$;
  this.$K$.$col2$.y += this.$m_gamma$;
  $JSCompiler_StaticMethods_Invert$$(this.$K$, this.$m_ptpMass$);
  this.$m_C$.x = $b$$18$$.$m_position$.x + $rX$$3$$ - this.$m_target$.x;
  this.$m_C$.y = $b$$18$$.$m_position$.y + $rY$$3_tMat$$15$$ - this.$m_target$.y;
  $b$$18$$.$m_angularVelocity$ *= 0.98;
  var $PX$$5$$ = this.$m_impulse$.x, $PY$$5$$ = this.$m_impulse$.y;
  $b$$18$$.$m_linearVelocity$.x += $invMass$$ * $PX$$5$$;
  $b$$18$$.$m_linearVelocity$.y += $invMass$$ * $PY$$5$$;
  $b$$18$$.$m_angularVelocity$ += $invI$$ * ($rX$$3$$ * $PY$$5$$ - $rY$$3_tMat$$15$$ * $PX$$5$$)
}, $SolveVelocityConstraints$:function($step$$4$$) {
  var $body$$7$$ = this.$m_body2$, $oldImpulseX_tMat$$16$$;
  $oldImpulseX_tMat$$16$$ = $body$$7$$.$m_R$;
  var $rX$$4$$ = $oldImpulseX_tMat$$16$$.$col1$.x * this.$m_localAnchor$.x + $oldImpulseX_tMat$$16$$.$col2$.x * this.$m_localAnchor$.y, $rY$$4$$ = $oldImpulseX_tMat$$16$$.$col1$.y * this.$m_localAnchor$.x + $oldImpulseX_tMat$$16$$.$col2$.y * this.$m_localAnchor$.y, $CdotX_oldImpulseY_tX$$11$$ = $body$$7$$.$m_linearVelocity$.x + -$body$$7$$.$m_angularVelocity$ * $rY$$4$$, $CdotY_impulseX$$1_length$$8$$ = $body$$7$$.$m_linearVelocity$.y + $body$$7$$.$m_angularVelocity$ * $rX$$4$$;
  $oldImpulseX_tMat$$16$$ = this.$m_ptpMass$;
  $CdotX_oldImpulseY_tX$$11$$ = $CdotX_oldImpulseY_tX$$11$$ + this.$m_beta$ * $step$$4$$.$inv_dt$ * this.$m_C$.x + this.$m_gamma$ * this.$m_impulse$.x;
  var $impulseY$$1_tY$$3$$ = $CdotY_impulseX$$1_length$$8$$ + this.$m_beta$ * $step$$4$$.$inv_dt$ * this.$m_C$.y + this.$m_gamma$ * this.$m_impulse$.y;
  $CdotY_impulseX$$1_length$$8$$ = -($oldImpulseX_tMat$$16$$.$col1$.x * $CdotX_oldImpulseY_tX$$11$$ + $oldImpulseX_tMat$$16$$.$col2$.x * $impulseY$$1_tY$$3$$);
  $impulseY$$1_tY$$3$$ = -($oldImpulseX_tMat$$16$$.$col1$.y * $CdotX_oldImpulseY_tX$$11$$ + $oldImpulseX_tMat$$16$$.$col2$.y * $impulseY$$1_tY$$3$$);
  $oldImpulseX_tMat$$16$$ = this.$m_impulse$.x;
  $CdotX_oldImpulseY_tX$$11$$ = this.$m_impulse$.y;
  this.$m_impulse$.x += $CdotY_impulseX$$1_length$$8$$;
  this.$m_impulse$.y += $impulseY$$1_tY$$3$$;
  $CdotY_impulseX$$1_length$$8$$ = $JSCompiler_StaticMethods_Length$$(this.$m_impulse$);
  $CdotY_impulseX$$1_length$$8$$ > $step$$4$$.$dt$ * this.$m_maxForce$ && $JSCompiler_StaticMethods_Multiply$$(this.$m_impulse$, $step$$4$$.$dt$ * this.$m_maxForce$ / $CdotY_impulseX$$1_length$$8$$);
  $CdotY_impulseX$$1_length$$8$$ = this.$m_impulse$.x - $oldImpulseX_tMat$$16$$;
  $impulseY$$1_tY$$3$$ = this.$m_impulse$.y - $CdotX_oldImpulseY_tX$$11$$;
  $body$$7$$.$m_linearVelocity$.x += $body$$7$$.$m_invMass$ * $CdotY_impulseX$$1_length$$8$$;
  $body$$7$$.$m_linearVelocity$.y += $body$$7$$.$m_invMass$ * $impulseY$$1_tY$$3$$;
  $body$$7$$.$m_angularVelocity$ += $body$$7$$.$m_invI$ * ($rX$$4$$ * $impulseY$$1_tY$$3$$ - $rY$$4$$ * $CdotY_impulseX$$1_length$$8$$)
}, $SolvePositionConstraints$:$JSCompiler_returnArg$$(true), $m_localAnchor$:new $b2Vec2$$, $m_target$:new $b2Vec2$$, $m_impulse$:new $b2Vec2$$, $m_ptpMass$:new $b2Mat22$$, $m_C$:new $b2Vec2$$, $m_maxForce$:null, $m_beta$:null, $m_gamma$:null});
// Input 57
function $b2PrismaticJoint$$($def$$8$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$8$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$8$$.$body1$;
  this.$m_body2$ = $def$$8$$.$body2$;
  this.$m_collideConnected$ = $def$$8$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$8$$.$userData$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_localXAxis1$ = new $b2Vec2$$;
  this.$m_localYAxis1$ = new $b2Vec2$$;
  this.$m_linearJacobian$ = new $b2Jacobian$$;
  this.$m_motorJacobian$ = new $b2Jacobian$$;
  var $tMat$$17$$, $tX$$12$$, $tY$$4$$;
  $tMat$$17$$ = this.$m_body1$.$m_R$;
  $tX$$12$$ = $def$$8$$.$anchorPoint$.x - this.$m_body1$.$m_position$.x;
  $tY$$4$$ = $def$$8$$.$anchorPoint$.y - this.$m_body1$.$m_position$.y;
  this.$m_localAnchor1$.$Set$($tX$$12$$ * $tMat$$17$$.$col1$.x + $tY$$4$$ * $tMat$$17$$.$col1$.y, $tX$$12$$ * $tMat$$17$$.$col2$.x + $tY$$4$$ * $tMat$$17$$.$col2$.y);
  $tMat$$17$$ = this.$m_body2$.$m_R$;
  $tX$$12$$ = $def$$8$$.$anchorPoint$.x - this.$m_body2$.$m_position$.x;
  $tY$$4$$ = $def$$8$$.$anchorPoint$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor2$.$Set$($tX$$12$$ * $tMat$$17$$.$col1$.x + $tY$$4$$ * $tMat$$17$$.$col1$.y, $tX$$12$$ * $tMat$$17$$.$col2$.x + $tY$$4$$ * $tMat$$17$$.$col2$.y);
  $tMat$$17$$ = this.$m_body1$.$m_R$;
  $tX$$12$$ = $def$$8$$.axis.x;
  $tY$$4$$ = $def$$8$$.axis.y;
  this.$m_localXAxis1$.$Set$($tX$$12$$ * $tMat$$17$$.$col1$.x + $tY$$4$$ * $tMat$$17$$.$col1$.y, $tX$$12$$ * $tMat$$17$$.$col2$.x + $tY$$4$$ * $tMat$$17$$.$col2$.y);
  this.$m_localYAxis1$.x = -this.$m_localXAxis1$.y;
  this.$m_localYAxis1$.y = this.$m_localXAxis1$.x;
  this.$m_initialAngle$ = this.$m_body2$.$m_rotation$ - this.$m_body1$.$m_rotation$;
  this.$m_linearJacobian$.$SetZero$();
  this.$m_angularImpulse$ = this.$m_angularMass$ = this.$m_linearImpulse$ = this.$m_linearMass$ = 0;
  this.$m_motorJacobian$.$SetZero$();
  this.$m_limitPositionImpulse$ = this.$m_limitImpulse$ = this.$m_motorImpulse$ = this.$m_motorMass$ = 0;
  this.$m_lowerTranslation$ = $def$$8$$.$lowerTranslation$;
  this.$m_upperTranslation$ = $def$$8$$.$upperTranslation$;
  this.$m_maxMotorForce$ = $def$$8$$.$motorForce$;
  this.$m_motorSpeed$ = $def$$8$$.$motorSpeed$;
  this.$m_enableLimit$ = $def$$8$$.$enableLimit$;
  this.$m_enableMotor$ = $def$$8$$.$enableMotor$
}
Object.extend($b2PrismaticJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2PrismaticJoint$$.prototype, {$GetAnchor1$:function() {
  var $b1$$7$$ = this.$m_body1$, $tVec$$14$$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$($tVec$$14$$, this.$m_localAnchor1$);
  $JSCompiler_StaticMethods_MulM$$($tVec$$14$$, $b1$$7$$.$m_R$);
  $JSCompiler_StaticMethods_Add$$($tVec$$14$$, $b1$$7$$.$m_position$);
  return $tVec$$14$$
}, $GetAnchor2$:function() {
  var $b2$$7$$ = this.$m_body2$, $tVec$$15$$ = new $b2Vec2$$;
  $JSCompiler_StaticMethods_SetV$$($tVec$$15$$, this.$m_localAnchor2$);
  $JSCompiler_StaticMethods_MulM$$($tVec$$15$$, $b2$$7$$.$m_R$);
  $JSCompiler_StaticMethods_Add$$($tVec$$15$$, $b2$$7$$.$m_position$);
  return $tVec$$15$$
}, $GetJointTranslation$:function() {
  var $b1$$8$$ = this.$m_body1$, $b2$$8_dY$$11$$ = this.$m_body2$, $tMat$$18$$;
  $tMat$$18$$ = $b1$$8$$.$m_R$;
  var $dX$$11_r1X$$7$$ = $tMat$$18$$.$col1$.x * this.$m_localAnchor1$.x + $tMat$$18$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$7$$ = $tMat$$18$$.$col1$.y * this.$m_localAnchor1$.x + $tMat$$18$$.$col2$.y * this.$m_localAnchor1$.y;
  $tMat$$18$$ = $b2$$8_dY$$11$$.$m_R$;
  $dX$$11_r1X$$7$$ = $b2$$8_dY$$11$$.$m_position$.x + ($tMat$$18$$.$col1$.x * this.$m_localAnchor2$.x + $tMat$$18$$.$col2$.x * this.$m_localAnchor2$.y) - ($b1$$8$$.$m_position$.x + $dX$$11_r1X$$7$$);
  $b2$$8_dY$$11$$ = $b2$$8_dY$$11$$.$m_position$.y + ($tMat$$18$$.$col1$.y * this.$m_localAnchor2$.x + $tMat$$18$$.$col2$.y * this.$m_localAnchor2$.y) - ($b1$$8$$.$m_position$.y + $r1Y$$7$$);
  $tMat$$18$$ = $b1$$8$$.$m_R$;
  return($tMat$$18$$.$col1$.x * this.$m_localXAxis1$.x + $tMat$$18$$.$col2$.x * this.$m_localXAxis1$.y) * $dX$$11_r1X$$7$$ + ($tMat$$18$$.$col1$.y * this.$m_localXAxis1$.x + $tMat$$18$$.$col2$.y * this.$m_localXAxis1$.y) * $b2$$8_dY$$11$$
}, $GetJointSpeed$:function() {
  var $b1$$9_w1$$2$$ = this.$m_body1$, $b2$$9_w2$$2$$ = this.$m_body2$, $ax1Y$$1_tMat$$19$$;
  $ax1Y$$1_tMat$$19$$ = $b1$$9_w1$$2$$.$m_R$;
  var $r1X$$8$$ = $ax1Y$$1_tMat$$19$$.$col1$.x * this.$m_localAnchor1$.x + $ax1Y$$1_tMat$$19$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$8$$ = $ax1Y$$1_tMat$$19$$.$col1$.y * this.$m_localAnchor1$.x + $ax1Y$$1_tMat$$19$$.$col2$.y * this.$m_localAnchor1$.y;
  $ax1Y$$1_tMat$$19$$ = $b2$$9_w2$$2$$.$m_R$;
  var $r2X$$8$$ = $ax1Y$$1_tMat$$19$$.$col1$.x * this.$m_localAnchor2$.x + $ax1Y$$1_tMat$$19$$.$col2$.x * this.$m_localAnchor2$.y, $r2Y$$8$$ = $ax1Y$$1_tMat$$19$$.$col1$.y * this.$m_localAnchor2$.x + $ax1Y$$1_tMat$$19$$.$col2$.y * this.$m_localAnchor2$.y, $dX$$12$$ = $b2$$9_w2$$2$$.$m_position$.x + $r2X$$8$$ - ($b1$$9_w1$$2$$.$m_position$.x + $r1X$$8$$), $dY$$12$$ = $b2$$9_w2$$2$$.$m_position$.y + $r2Y$$8$$ - ($b1$$9_w1$$2$$.$m_position$.y + $r1Y$$8$$);
  $ax1Y$$1_tMat$$19$$ = $b1$$9_w1$$2$$.$m_R$;
  var $ax1X$$1$$ = $ax1Y$$1_tMat$$19$$.$col1$.x * this.$m_localXAxis1$.x + $ax1Y$$1_tMat$$19$$.$col2$.x * this.$m_localXAxis1$.y;
  $ax1Y$$1_tMat$$19$$ = $ax1Y$$1_tMat$$19$$.$col1$.y * this.$m_localXAxis1$.x + $ax1Y$$1_tMat$$19$$.$col2$.y * this.$m_localXAxis1$.y;
  var $v1$$1$$ = $b1$$9_w1$$2$$.$m_linearVelocity$, $v2$$1$$ = $b2$$9_w2$$2$$.$m_linearVelocity$;
  $b1$$9_w1$$2$$ = $b1$$9_w1$$2$$.$m_angularVelocity$;
  $b2$$9_w2$$2$$ = $b2$$9_w2$$2$$.$m_angularVelocity$;
  return $dX$$12$$ * -$b1$$9_w1$$2$$ * $ax1Y$$1_tMat$$19$$ + $dY$$12$$ * $b1$$9_w1$$2$$ * $ax1X$$1$$ + ($ax1X$$1$$ * ($v2$$1$$.x + -$b2$$9_w2$$2$$ * $r2Y$$8$$ - $v1$$1$$.x - -$b1$$9_w1$$2$$ * $r1Y$$8$$) + $ax1Y$$1_tMat$$19$$ * ($v2$$1$$.y + $b2$$9_w2$$2$$ * $r2X$$8$$ - $v1$$1$$.y - $b1$$9_w1$$2$$ * $r1X$$8$$))
}, $GetMotorForce$:function($invTimeStep$$8$$) {
  return $invTimeStep$$8$$ * this.$m_motorImpulse$
}, $SetMotorSpeed$:function($speed$$1$$) {
  this.$m_motorSpeed$ = $speed$$1$$
}, $SetMotorForce$:function($force$$1$$) {
  this.$m_maxMotorForce$ = $force$$1$$
}, $GetReactionForce$:function($invTimeStep$$9_tImp$$) {
  $invTimeStep$$9_tImp$$ = $invTimeStep$$9_tImp$$ * this.$m_limitImpulse$;
  var $tMat$$20$$;
  $tMat$$20$$ = this.$m_body1$.$m_R$;
  return new $b2Vec2$$($invTimeStep$$9_tImp$$ * ($tMat$$20$$.$col1$.x * this.$m_localXAxis1$.x + $tMat$$20$$.$col2$.x * this.$m_localXAxis1$.y) + $invTimeStep$$9_tImp$$ * ($tMat$$20$$.$col1$.x * this.$m_localYAxis1$.x + $tMat$$20$$.$col2$.x * this.$m_localYAxis1$.y), $invTimeStep$$9_tImp$$ * ($tMat$$20$$.$col1$.y * this.$m_localXAxis1$.x + $tMat$$20$$.$col2$.y * this.$m_localXAxis1$.y) + $invTimeStep$$9_tImp$$ * ($tMat$$20$$.$col1$.y * this.$m_localYAxis1$.x + $tMat$$20$$.$col2$.y * this.$m_localYAxis1$.y))
}, $GetReactionTorque$:function($invTimeStep$$10$$) {
  return $invTimeStep$$10$$ * this.$m_angularImpulse$
}, $PrepareVelocitySolver$:function() {
  var $b1$$10$$ = this.$m_body1$, $b2$$10$$ = this.$m_body2$, $ax1Y$$3_ay1Y$$1_tMat$$21$$;
  $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $b1$$10$$.$m_R$;
  var $P1Y_jointTranslation_r1X$$9$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.x * this.$m_localAnchor1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.x * this.$m_localAnchor1$.y, $P2X_r1Y$$9$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.y * this.$m_localAnchor1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.y * this.$m_localAnchor1$.y;
  $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $b2$$10$$.$m_R$;
  var $P2Y_r2X$$9$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.x * this.$m_localAnchor2$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.x * this.$m_localAnchor2$.y, $L1_r2Y$$9$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.y * this.$m_localAnchor2$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.y * this.$m_localAnchor2$.y, $invMass1$$3$$ = $b1$$10$$.$m_invMass$, $invMass2$$3$$ = $b2$$10$$.$m_invMass$, $invI1$$3$$ = $b1$$10$$.$m_invI$, $invI2$$3$$ = $b2$$10$$.$m_invI$;
  $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $b1$$10$$.$m_R$;
  var $ax1X$$3_ay1X$$1$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.x * this.$m_localYAxis1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.x * this.$m_localYAxis1$.y;
  $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.y * this.$m_localYAxis1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.y * this.$m_localYAxis1$.y;
  var $L2_eX$$1$$ = $b2$$10$$.$m_position$.x + $P2Y_r2X$$9$$ - $b1$$10$$.$m_position$.x, $eY$$1$$ = $b2$$10$$.$m_position$.y + $L1_r2Y$$9$$ - $b1$$10$$.$m_position$.y;
  this.$m_linearJacobian$.$linear1$.x = -$ax1X$$3_ay1X$$1$$;
  this.$m_linearJacobian$.$linear1$.y = -$ax1Y$$3_ay1Y$$1_tMat$$21$$;
  this.$m_linearJacobian$.$linear2$.x = $ax1X$$3_ay1X$$1$$;
  this.$m_linearJacobian$.$linear2$.y = $ax1Y$$3_ay1Y$$1_tMat$$21$$;
  this.$m_linearJacobian$.$angular1$ = -($L2_eX$$1$$ * $ax1Y$$3_ay1Y$$1_tMat$$21$$ - $eY$$1$$ * $ax1X$$3_ay1X$$1$$);
  this.$m_linearJacobian$.$angular2$ = $P2Y_r2X$$9$$ * $ax1Y$$3_ay1Y$$1_tMat$$21$$ - $L1_r2Y$$9$$ * $ax1X$$3_ay1X$$1$$;
  this.$m_linearMass$ = $invMass1$$3$$ + $invI1$$3$$ * this.$m_linearJacobian$.$angular1$ * this.$m_linearJacobian$.$angular1$ + $invMass2$$3$$ + $invI2$$3$$ * this.$m_linearJacobian$.$angular2$ * this.$m_linearJacobian$.$angular2$;
  this.$m_linearMass$ = 1 / this.$m_linearMass$;
  this.$m_angularMass$ = 1 / ($invI1$$3$$ + $invI2$$3$$);
  if(this.$m_enableLimit$ || this.$m_enableMotor$) {
    $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $b1$$10$$.$m_R$;
    $ax1X$$3_ay1X$$1$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.x * this.$m_localXAxis1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.x * this.$m_localXAxis1$.y;
    $ax1Y$$3_ay1Y$$1_tMat$$21$$ = $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col1$.y * this.$m_localXAxis1$.x + $ax1Y$$3_ay1Y$$1_tMat$$21$$.$col2$.y * this.$m_localXAxis1$.y;
    this.$m_motorJacobian$.$linear1$.x = -$ax1X$$3_ay1X$$1$$;
    this.$m_motorJacobian$.$linear1$.y = -$ax1Y$$3_ay1Y$$1_tMat$$21$$;
    this.$m_motorJacobian$.$linear2$.x = $ax1X$$3_ay1X$$1$$;
    this.$m_motorJacobian$.$linear2$.y = $ax1Y$$3_ay1Y$$1_tMat$$21$$;
    this.$m_motorJacobian$.$angular1$ = -($L2_eX$$1$$ * $ax1Y$$3_ay1Y$$1_tMat$$21$$ - $eY$$1$$ * $ax1X$$3_ay1X$$1$$);
    this.$m_motorJacobian$.$angular2$ = $P2Y_r2X$$9$$ * $ax1Y$$3_ay1Y$$1_tMat$$21$$ - $L1_r2Y$$9$$ * $ax1X$$3_ay1X$$1$$;
    this.$m_motorMass$ = $invMass1$$3$$ + $invI1$$3$$ * this.$m_motorJacobian$.$angular1$ * this.$m_motorJacobian$.$angular1$ + $invMass2$$3$$ + $invI2$$3$$ * this.$m_motorJacobian$.$angular2$ * this.$m_motorJacobian$.$angular2$;
    this.$m_motorMass$ = 1 / this.$m_motorMass$;
    if(this.$m_enableLimit$) {
      $P1Y_jointTranslation_r1X$$9$$ = $ax1X$$3_ay1X$$1$$ * ($L2_eX$$1$$ - $P1Y_jointTranslation_r1X$$9$$) + $ax1Y$$3_ay1Y$$1_tMat$$21$$ * ($eY$$1$$ - $P2X_r1Y$$9$$);
      if($b2Math$b2Abs$$(this.$m_upperTranslation$ - this.$m_lowerTranslation$) < 0.3) {
        this.$m_limitState$ = 3
      }else {
        if($P1Y_jointTranslation_r1X$$9$$ <= this.$m_lowerTranslation$) {
          if(this.$m_limitState$ != 1) {
            this.$m_limitImpulse$ = 0
          }
          this.$m_limitState$ = 1
        }else {
          if($P1Y_jointTranslation_r1X$$9$$ >= this.$m_upperTranslation$) {
            if(this.$m_limitState$ != 2) {
              this.$m_limitImpulse$ = 0
            }
            this.$m_limitState$ = 2
          }else {
            this.$m_limitImpulse$ = this.$m_limitState$ = 0
          }
        }
      }
    }
  }
  if(this.$m_enableMotor$ == false) {
    this.$m_motorImpulse$ = 0
  }
  if(this.$m_enableLimit$ == false) {
    this.$m_limitImpulse$ = 0
  }
  if($b2World$s_enableWarmStarting$$) {
    $P1Y_jointTranslation_r1X$$9$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$linear1$.y + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$linear1$.y;
    $P2X_r1Y$$9$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$linear2$.x + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$linear2$.x;
    $P2Y_r2X$$9$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$linear2$.y + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$linear2$.y;
    $L1_r2Y$$9$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$angular1$ - this.$m_angularImpulse$ + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$angular1$;
    $L2_eX$$1$$ = this.$m_linearImpulse$ * this.$m_linearJacobian$.$angular2$ + this.$m_angularImpulse$ + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$angular2$;
    $b1$$10$$.$m_linearVelocity$.x += $invMass1$$3$$ * (this.$m_linearImpulse$ * this.$m_linearJacobian$.$linear1$.x + (this.$m_motorImpulse$ + this.$m_limitImpulse$) * this.$m_motorJacobian$.$linear1$.x);
    $b1$$10$$.$m_linearVelocity$.y += $invMass1$$3$$ * $P1Y_jointTranslation_r1X$$9$$;
    $b1$$10$$.$m_angularVelocity$ += $invI1$$3$$ * $L1_r2Y$$9$$;
    $b2$$10$$.$m_linearVelocity$.x += $invMass2$$3$$ * $P2X_r1Y$$9$$;
    $b2$$10$$.$m_linearVelocity$.y += $invMass2$$3$$ * $P2Y_r2X$$9$$;
    $b2$$10$$.$m_angularVelocity$ += $invI2$$3$$ * $L2_eX$$1$$
  }else {
    this.$m_motorImpulse$ = this.$m_limitImpulse$ = this.$m_angularImpulse$ = this.$m_linearImpulse$ = 0
  }
  this.$m_limitPositionImpulse$ = 0
}, $SolveVelocityConstraints$:function($oldLimitImpulse_step$$5$$) {
  var $b1$$11$$ = this.$m_body1$, $b2$$11$$ = this.$m_body2$, $invMass1$$4$$ = $b1$$11$$.$m_invMass$, $invMass2$$4$$ = $b2$$11$$.$m_invMass$, $invI1$$4$$ = $b1$$11$$.$m_invI$, $invI2$$4$$ = $b2$$11$$.$m_invI$, $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = -this.$m_linearMass$ * this.$m_linearJacobian$.$Compute$($b1$$11$$.$m_linearVelocity$, $b1$$11$$.$m_angularVelocity$, $b2$$11$$.$m_linearVelocity$, $b2$$11$$.$m_angularVelocity$);
  this.$m_linearImpulse$ += $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$;
  $b1$$11$$.$m_linearVelocity$.x += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$linear1$.x;
  $b1$$11$$.$m_linearVelocity$.y += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$linear1$.y;
  $b1$$11$$.$m_angularVelocity$ += $invI1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$angular1$;
  $b2$$11$$.$m_linearVelocity$.x += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$linear2$.x;
  $b2$$11$$.$m_linearVelocity$.y += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$linear2$.y;
  $b2$$11$$.$m_angularVelocity$ += $invI2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_linearJacobian$.$angular2$;
  $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = -this.$m_angularMass$ * ($b2$$11$$.$m_angularVelocity$ - $b1$$11$$.$m_angularVelocity$);
  this.$m_angularImpulse$ += $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$;
  $b1$$11$$.$m_angularVelocity$ -= $invI1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$;
  $b2$$11$$.$m_angularVelocity$ += $invI2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$;
  if(this.$m_enableMotor$ && this.$m_limitState$ != 3) {
    $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = -this.$m_motorMass$ * (this.$m_motorJacobian$.$Compute$($b1$$11$$.$m_linearVelocity$, $b1$$11$$.$m_angularVelocity$, $b2$$11$$.$m_linearVelocity$, $b2$$11$$.$m_angularVelocity$) - this.$m_motorSpeed$);
    var $oldMotorImpulse$$ = this.$m_motorImpulse$;
    this.$m_motorImpulse$ = $b2Math$b2Clamp$$(this.$m_motorImpulse$ + $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$, -$oldLimitImpulse_step$$5$$.$dt$ * this.$m_maxMotorForce$, $oldLimitImpulse_step$$5$$.$dt$ * this.$m_maxMotorForce$);
    $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = this.$m_motorImpulse$ - $oldMotorImpulse$$;
    $b1$$11$$.$m_linearVelocity$.x += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear1$.x;
    $b1$$11$$.$m_linearVelocity$.y += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear1$.y;
    $b1$$11$$.$m_angularVelocity$ += $invI1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$angular1$;
    $b2$$11$$.$m_linearVelocity$.x += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear2$.x;
    $b2$$11$$.$m_linearVelocity$.y += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear2$.y;
    $b2$$11$$.$m_angularVelocity$ += $invI2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$angular2$
  }
  if(this.$m_enableLimit$ && this.$m_limitState$ != 0) {
    $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = -this.$m_motorMass$ * this.$m_motorJacobian$.$Compute$($b1$$11$$.$m_linearVelocity$, $b1$$11$$.$m_angularVelocity$, $b2$$11$$.$m_linearVelocity$, $b2$$11$$.$m_angularVelocity$);
    if(this.$m_limitState$ == 3) {
      this.$m_limitImpulse$ += $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$
    }else {
      if(this.$m_limitState$ == 1) {
        $oldLimitImpulse_step$$5$$ = this.$m_limitImpulse$;
        this.$m_limitImpulse$ = $b2Math$b2Max$$(this.$m_limitImpulse$ + $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$, 0);
        $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = this.$m_limitImpulse$ - $oldLimitImpulse_step$$5$$
      }else {
        if(this.$m_limitState$ == 2) {
          $oldLimitImpulse_step$$5$$ = this.$m_limitImpulse$;
          this.$m_limitImpulse$ = this.$m_limitImpulse$ + $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ < 0 ? this.$m_limitImpulse$ + $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ : 0;
          $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ = this.$m_limitImpulse$ - $oldLimitImpulse_step$$5$$
        }
      }
    }
    $b1$$11$$.$m_linearVelocity$.x += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear1$.x;
    $b1$$11$$.$m_linearVelocity$.y += $invMass1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear1$.y;
    $b1$$11$$.$m_angularVelocity$ += $invI1$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$angular1$;
    $b2$$11$$.$m_linearVelocity$.x += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear2$.x;
    $b2$$11$$.$m_linearVelocity$.y += $invMass2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$linear2$.y;
    $b2$$11$$.$m_angularVelocity$ += $invI2$$4$$ * $angularImpulse_limitImpulse_linearImpulse_motorImpulse$$ * this.$m_motorJacobian$.$angular2$
  }
}, $SolvePositionConstraints$:function() {
  var $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$, $angularC_linearImpulse$$1_oldLimitImpulse$$1$$, $b1$$12$$ = this.$m_body1$, $b2$$12$$ = this.$m_body2$, $invMass1$$5$$ = $b1$$12$$.$m_invMass$, $invMass2$$5$$ = $b2$$12$$.$m_invMass$, $invI1$$5$$ = $b1$$12$$.$m_invI$, $invI2$$5$$ = $b2$$12$$.$m_invI$, $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b1$$12$$.$m_R$;
  var $dY$$14_p1X$$5_r1X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localAnchor1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localAnchor1$.y, $p1Y$$5_r1Y$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localAnchor1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localAnchor1$.y;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b2$$12$$.$m_R$;
  $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localAnchor2$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localAnchor2$.y;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localAnchor2$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localAnchor2$.y;
  $dY$$14_p1X$$5_r1X$$10$$ = $b1$$12$$.$m_position$.x + $dY$$14_p1X$$5_r1X$$10$$;
  $p1Y$$5_r1Y$$10$$ = $b1$$12$$.$m_position$.y + $p1Y$$5_r1Y$$10$$;
  $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2$$12$$.$m_position$.x + $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b2$$12$$.$m_position$.y + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$;
  $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ - $dY$$14_p1X$$5_r1X$$10$$;
  $dY$$14_p1X$$5_r1X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ - $p1Y$$5_r1Y$$10$$;
  $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b1$$12$$.$m_R$;
  var $linearC_positionError$$ = ($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localYAxis1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localYAxis1$.y) * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ + ($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localYAxis1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localYAxis1$.y) * $dY$$14_p1X$$5_r1X$$10$$;
  $linearC_positionError$$ = $b2Math$b2Clamp$$($linearC_positionError$$, -6, 6);
  $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = -this.$m_linearMass$ * $linearC_positionError$$;
  $b1$$12$$.$m_position$.x += $invMass1$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$linear1$.x;
  $b1$$12$$.$m_position$.y += $invMass1$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$linear1$.y;
  $b1$$12$$.$m_rotation$ += $invI1$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$angular1$;
  $b2$$12$$.$m_position$.x += $invMass2$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$linear2$.x;
  $b2$$12$$.$m_position$.y += $invMass2$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$linear2$.y;
  $b2$$12$$.$m_rotation$ += $invI2$$5$$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ * this.$m_linearJacobian$.$angular2$;
  $linearC_positionError$$ = $b2Math$b2Abs$$($linearC_positionError$$);
  $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = $b2$$12$$.$m_rotation$ - $b1$$12$$.$m_rotation$ - this.$m_initialAngle$;
  $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = $b2Math$b2Clamp$$($angularC_linearImpulse$$1_oldLimitImpulse$$1$$, -$b2Settings$b2_maxAngularCorrection$$, $b2Settings$b2_maxAngularCorrection$$);
  var $angularError_angularImpulse$$1$$ = -this.$m_angularMass$ * $angularC_linearImpulse$$1_oldLimitImpulse$$1$$;
  $b1$$12$$.$m_rotation$ -= $b1$$12$$.$m_invI$ * $angularError_angularImpulse$$1$$;
  $b1$$12$$.$m_R$.$Set$($b1$$12$$.$m_rotation$);
  $b2$$12$$.$m_rotation$ += $b2$$12$$.$m_invI$ * $angularError_angularImpulse$$1$$;
  $b2$$12$$.$m_R$.$Set$($b2$$12$$.$m_rotation$);
  $angularError_angularImpulse$$1$$ = $b2Math$b2Abs$$($angularC_linearImpulse$$1_oldLimitImpulse$$1$$);
  if(this.$m_enableLimit$ && this.$m_limitState$ != 0) {
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b1$$12$$.$m_R$;
    $dY$$14_p1X$$5_r1X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localAnchor1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localAnchor1$.y;
    $p1Y$$5_r1Y$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localAnchor1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localAnchor1$.y;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b2$$12$$.$m_R$;
    $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localAnchor2$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localAnchor2$.y;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localAnchor2$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localAnchor2$.y;
    $dY$$14_p1X$$5_r1X$$10$$ = $b1$$12$$.$m_position$.x + $dY$$14_p1X$$5_r1X$$10$$;
    $p1Y$$5_r1Y$$10$$ = $b1$$12$$.$m_position$.y + $p1Y$$5_r1Y$$10$$;
    $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2$$12$$.$m_position$.x + $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b2$$12$$.$m_position$.y + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$;
    $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ - $dY$$14_p1X$$5_r1X$$10$$;
    $dY$$14_p1X$$5_r1X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ - $p1Y$$5_r1Y$$10$$;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = $b1$$12$$.$m_R$;
    $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ = ($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.x * this.$m_localXAxis1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.x * this.$m_localXAxis1$.y) * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ + ($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col1$.y * this.$m_localXAxis1$.x + $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$.$col2$.y * this.$m_localXAxis1$.y) * $dY$$14_p1X$$5_r1X$$10$$;
    $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = 0;
    if(this.$m_limitState$ == 3) {
      $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2Math$b2Clamp$$($p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$, -6, 6);
      $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = -this.$m_motorMass$ * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
      $linearC_positionError$$ = $b2Math$b2Max$$($linearC_positionError$$, $b2Math$b2Abs$$($angularC_linearImpulse$$1_oldLimitImpulse$$1$$))
    }else {
      if(this.$m_limitState$ == 1) {
        $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ - this.$m_lowerTranslation$;
        $linearC_positionError$$ = $b2Math$b2Max$$($linearC_positionError$$, -$dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$);
        $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2Math$b2Clamp$$($dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ + 0.15, -6, 0);
        $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = -this.$m_motorMass$ * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
        $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = this.$m_limitPositionImpulse$;
        this.$m_limitPositionImpulse$ = $b2Math$b2Max$$(this.$m_limitPositionImpulse$ + $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$, 0);
        $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = this.$m_limitPositionImpulse$ - $angularC_linearImpulse$$1_oldLimitImpulse$$1$$
      }else {
        if(this.$m_limitState$ == 2) {
          $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $p2Y$$4_r2Y$$10_tMat$$22_translation$$1$$ - this.$m_upperTranslation$;
          $linearC_positionError$$ = $b2Math$b2Max$$($linearC_positionError$$, $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$);
          $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = $b2Math$b2Clamp$$($dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ - 0.15, 0, 6);
          $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = -this.$m_motorMass$ * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$;
          $angularC_linearImpulse$$1_oldLimitImpulse$$1$$ = this.$m_limitPositionImpulse$;
          this.$m_limitPositionImpulse$ = this.$m_limitPositionImpulse$ + $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ < 0 ? this.$m_limitPositionImpulse$ + $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ : 0;
          $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ = this.$m_limitPositionImpulse$ - $angularC_linearImpulse$$1_oldLimitImpulse$$1$$
        }
      }
    }
    $b1$$12$$.$m_position$.x += $invMass1$$5$$ * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$linear1$.x;
    $b1$$12$$.$m_position$.y += $invMass1$$5$$ * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$linear1$.y;
    $b1$$12$$.$m_rotation$ += $invI1$$5$$ * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$angular1$;
    $b1$$12$$.$m_R$.$Set$($b1$$12$$.$m_rotation$);
    $b2$$12$$.$m_position$.x += $invMass2$$5$$ * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$linear2$.x;
    $b2$$12$$.$m_position$.y += $invMass2$$5$$ * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$linear2$.y;
    $b2$$12$$.$m_rotation$ += $invI2$$5$$ * $dX$$14_limitC_limitImpulse$$1_p2X$$4_r2X$$10$$ * this.$m_motorJacobian$.$angular2$;
    $b2$$12$$.$m_R$.$Set$($b2$$12$$.$m_rotation$)
  }
  return $linearC_positionError$$ <= 0.15 && $angularError_angularImpulse$$1$$ <= $b2Settings$b2_angularSlop$$
}, $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_localXAxis1$:new $b2Vec2$$, $m_localYAxis1$:new $b2Vec2$$, $m_initialAngle$:null, $m_linearJacobian$:new $b2Jacobian$$, $m_linearMass$:null, $m_linearImpulse$:null, $m_angularMass$:null, $m_angularImpulse$:null, $m_motorJacobian$:new $b2Jacobian$$, $m_motorMass$:null, $m_motorImpulse$:null, $m_limitImpulse$:null, $m_limitPositionImpulse$:null, $m_lowerTranslation$:null, $m_upperTranslation$:null, $m_maxMotorForce$:null, $m_motorSpeed$:null, 
$m_enableLimit$:null, $m_enableMotor$:null, $m_limitState$:0});
// Input 58
function $b2PrismaticJointDef$$() {
  this.type = 0;
  this.$body2$ = this.$body1$ = this.$userData$ = null;
  this.$collideConnected$ = false;
  this.type = 2;
  this.$anchorPoint$ = new $b2Vec2$$(0, 0);
  this.axis = new $b2Vec2$$(0, 0);
  this.$motorSpeed$ = this.$motorForce$ = this.$upperTranslation$ = this.$lowerTranslation$ = 0;
  this.$enableMotor$ = this.$enableLimit$ = false
}
Object.extend($b2PrismaticJointDef$$.prototype, $b2JointDef$$.prototype);
Object.extend($b2PrismaticJointDef$$.prototype, {$anchorPoint$:null, axis:null, $lowerTranslation$:null, $upperTranslation$:null, $motorForce$:null, $motorSpeed$:null, $enableLimit$:null, $enableMotor$:null});
// Input 59
function $b2PulleyJoint$$($def$$9$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$9$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$9$$.$body1$;
  this.$m_body2$ = $def$$9$$.$body2$;
  this.$m_collideConnected$ = $def$$9$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$9$$.$userData$;
  this.$m_groundAnchor1$ = new $b2Vec2$$;
  this.$m_groundAnchor2$ = new $b2Vec2$$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_u1$ = new $b2Vec2$$;
  this.$m_u2$ = new $b2Vec2$$;
  var $d1Len_tMat$$23$$, $d2Len_length2_tX$$13$$, $length1_tY$$5$$;
  this.$m_ground$ = this.$m_body1$.$m_world$.$m_groundBody$;
  this.$m_groundAnchor1$.x = $def$$9$$.$groundPoint1$.x - this.$m_ground$.$m_position$.x;
  this.$m_groundAnchor1$.y = $def$$9$$.$groundPoint1$.y - this.$m_ground$.$m_position$.y;
  this.$m_groundAnchor2$.x = $def$$9$$.$groundPoint2$.x - this.$m_ground$.$m_position$.x;
  this.$m_groundAnchor2$.y = $def$$9$$.$groundPoint2$.y - this.$m_ground$.$m_position$.y;
  $d1Len_tMat$$23$$ = this.$m_body1$.$m_R$;
  $d2Len_length2_tX$$13$$ = $def$$9$$.$anchorPoint1$.x - this.$m_body1$.$m_position$.x;
  $length1_tY$$5$$ = $def$$9$$.$anchorPoint1$.y - this.$m_body1$.$m_position$.y;
  this.$m_localAnchor1$.x = $d2Len_length2_tX$$13$$ * $d1Len_tMat$$23$$.$col1$.x + $length1_tY$$5$$ * $d1Len_tMat$$23$$.$col1$.y;
  this.$m_localAnchor1$.y = $d2Len_length2_tX$$13$$ * $d1Len_tMat$$23$$.$col2$.x + $length1_tY$$5$$ * $d1Len_tMat$$23$$.$col2$.y;
  $d1Len_tMat$$23$$ = this.$m_body2$.$m_R$;
  $d2Len_length2_tX$$13$$ = $def$$9$$.$anchorPoint2$.x - this.$m_body2$.$m_position$.x;
  $length1_tY$$5$$ = $def$$9$$.$anchorPoint2$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor2$.x = $d2Len_length2_tX$$13$$ * $d1Len_tMat$$23$$.$col1$.x + $length1_tY$$5$$ * $d1Len_tMat$$23$$.$col1$.y;
  this.$m_localAnchor2$.y = $d2Len_length2_tX$$13$$ * $d1Len_tMat$$23$$.$col2$.x + $length1_tY$$5$$ * $d1Len_tMat$$23$$.$col2$.y;
  this.$m_ratio$ = $def$$9$$.$ratio$;
  $d2Len_length2_tX$$13$$ = $def$$9$$.$groundPoint1$.x - $def$$9$$.$anchorPoint1$.x;
  $length1_tY$$5$$ = $def$$9$$.$groundPoint1$.y - $def$$9$$.$anchorPoint1$.y;
  $d1Len_tMat$$23$$ = Math.sqrt($d2Len_length2_tX$$13$$ * $d2Len_length2_tX$$13$$ + $length1_tY$$5$$ * $length1_tY$$5$$);
  $d2Len_length2_tX$$13$$ = $def$$9$$.$groundPoint2$.x - $def$$9$$.$anchorPoint2$.x;
  $length1_tY$$5$$ = $def$$9$$.$groundPoint2$.y - $def$$9$$.$anchorPoint2$.y;
  $d2Len_length2_tX$$13$$ = Math.sqrt($d2Len_length2_tX$$13$$ * $d2Len_length2_tX$$13$$ + $length1_tY$$5$$ * $length1_tY$$5$$);
  $length1_tY$$5$$ = $b2Math$b2Max$$(0.5 * $b2PulleyJoint$b2_minPulleyLength$$, $d1Len_tMat$$23$$);
  $d2Len_length2_tX$$13$$ = $b2Math$b2Max$$(0.5 * $b2PulleyJoint$b2_minPulleyLength$$, $d2Len_length2_tX$$13$$);
  this.$m_constant$ = $length1_tY$$5$$ + this.$m_ratio$ * $d2Len_length2_tX$$13$$;
  this.$m_maxLength1$ = $b2Math$b2Clamp$$($def$$9$$.$maxLength1$, $length1_tY$$5$$, this.$m_constant$ - this.$m_ratio$ * $b2PulleyJoint$b2_minPulleyLength$$);
  this.$m_maxLength2$ = $b2Math$b2Clamp$$($def$$9$$.$maxLength2$, $d2Len_length2_tX$$13$$, (this.$m_constant$ - $b2PulleyJoint$b2_minPulleyLength$$) / this.$m_ratio$);
  this.$m_limitImpulse2$ = this.$m_limitImpulse1$ = this.$m_pulleyImpulse$ = 0
}
Object.extend($b2PulleyJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2PulleyJoint$$.prototype, {$GetAnchor1$:function() {
  var $tMat$$24$$ = this.$m_body1$.$m_R$;
  return new $b2Vec2$$(this.$m_body1$.$m_position$.x + ($tMat$$24$$.$col1$.x * this.$m_localAnchor1$.x + $tMat$$24$$.$col2$.x * this.$m_localAnchor1$.y), this.$m_body1$.$m_position$.y + ($tMat$$24$$.$col1$.y * this.$m_localAnchor1$.x + $tMat$$24$$.$col2$.y * this.$m_localAnchor1$.y))
}, $GetAnchor2$:function() {
  var $tMat$$25$$ = this.$m_body2$.$m_R$;
  return new $b2Vec2$$(this.$m_body2$.$m_position$.x + ($tMat$$25$$.$col1$.x * this.$m_localAnchor2$.x + $tMat$$25$$.$col2$.x * this.$m_localAnchor2$.y), this.$m_body2$.$m_position$.y + ($tMat$$25$$.$col1$.y * this.$m_localAnchor2$.x + $tMat$$25$$.$col2$.y * this.$m_localAnchor2$.y))
}, $GetGroundPoint1$:function() {
  return new $b2Vec2$$(this.$m_ground$.$m_position$.x + this.$m_groundAnchor1$.x, this.$m_ground$.$m_position$.y + this.$m_groundAnchor1$.y)
}, $GetGroundPoint2$:function() {
  return new $b2Vec2$$(this.$m_ground$.$m_position$.x + this.$m_groundAnchor2$.x, this.$m_ground$.$m_position$.y + this.$m_groundAnchor2$.y)
}, $GetReactionForce$:function() {
  return new $b2Vec2$$
}, $GetReactionTorque$:$JSCompiler_returnArg$$(0), $GetLength1$:function() {
  var $dY$$15_tMat$$26$$;
  $dY$$15_tMat$$26$$ = this.$m_body1$.$m_R$;
  var $dX$$15$$ = this.$m_body1$.$m_position$.x + ($dY$$15_tMat$$26$$.$col1$.x * this.$m_localAnchor1$.x + $dY$$15_tMat$$26$$.$col2$.x * this.$m_localAnchor1$.y) - (this.$m_ground$.$m_position$.x + this.$m_groundAnchor1$.x);
  $dY$$15_tMat$$26$$ = this.$m_body1$.$m_position$.y + ($dY$$15_tMat$$26$$.$col1$.y * this.$m_localAnchor1$.x + $dY$$15_tMat$$26$$.$col2$.y * this.$m_localAnchor1$.y) - (this.$m_ground$.$m_position$.y + this.$m_groundAnchor1$.y);
  return Math.sqrt($dX$$15$$ * $dX$$15$$ + $dY$$15_tMat$$26$$ * $dY$$15_tMat$$26$$)
}, $GetLength2$:function() {
  var $dY$$16_tMat$$27$$;
  $dY$$16_tMat$$27$$ = this.$m_body2$.$m_R$;
  var $dX$$16$$ = this.$m_body2$.$m_position$.x + ($dY$$16_tMat$$27$$.$col1$.x * this.$m_localAnchor2$.x + $dY$$16_tMat$$27$$.$col2$.x * this.$m_localAnchor2$.y) - (this.$m_ground$.$m_position$.x + this.$m_groundAnchor2$.x);
  $dY$$16_tMat$$27$$ = this.$m_body2$.$m_position$.y + ($dY$$16_tMat$$27$$.$col1$.y * this.$m_localAnchor2$.x + $dY$$16_tMat$$27$$.$col2$.y * this.$m_localAnchor2$.y) - (this.$m_ground$.$m_position$.y + this.$m_groundAnchor2$.y);
  return Math.sqrt($dX$$16$$ * $dX$$16$$ + $dY$$16_tMat$$27$$ * $dY$$16_tMat$$27$$)
}, $GetRatio$:$JSCompiler_get$$("$m_ratio$"), $PrepareVelocitySolver$:function() {
  var $b1$$13$$ = this.$m_body1$, $b2$$13$$ = this.$m_body2$, $r2Y$$11_tMat$$28$$;
  $r2Y$$11_tMat$$28$$ = $b1$$13$$.$m_R$;
  var $r1X$$11$$ = $r2Y$$11_tMat$$28$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$11_tMat$$28$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$11$$ = $r2Y$$11_tMat$$28$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$11_tMat$$28$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$11_tMat$$28$$ = $b2$$13$$.$m_R$;
  var $r2X$$11$$ = $r2Y$$11_tMat$$28$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$11_tMat$$28$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$11_tMat$$28$$ = $r2Y$$11_tMat$$28$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$11_tMat$$28$$.$col2$.y * this.$m_localAnchor2$.y;
  var $P1X$$1_cr1u1_length1$$1_p2X$$5$$ = $b2$$13$$.$m_position$.x + $r2X$$11$$, $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ = $b2$$13$$.$m_position$.y + $r2Y$$11_tMat$$28$$, $P2X$$1_s2X$$ = this.$m_ground$.$m_position$.x + this.$m_groundAnchor2$.x, $P2Y$$1_s2Y$$ = this.$m_ground$.$m_position$.y + this.$m_groundAnchor2$.y;
  this.$m_u1$.$Set$($b1$$13$$.$m_position$.x + $r1X$$11$$ - (this.$m_ground$.$m_position$.x + this.$m_groundAnchor1$.x), $b1$$13$$.$m_position$.y + $r1Y$$11$$ - (this.$m_ground$.$m_position$.y + this.$m_groundAnchor1$.y));
  this.$m_u2$.$Set$($P1X$$1_cr1u1_length1$$1_p2X$$5$$ - $P2X$$1_s2X$$, $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ - $P2Y$$1_s2Y$$);
  $P1X$$1_cr1u1_length1$$1_p2X$$5$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u1$);
  $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u2$);
  $P1X$$1_cr1u1_length1$$1_p2X$$5$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u1$, 1 / $P1X$$1_cr1u1_length1$$1_p2X$$5$$) : this.$m_u1$.$SetZero$();
  $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u2$, 1 / $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$) : this.$m_u2$.$SetZero$();
  if($P1X$$1_cr1u1_length1$$1_p2X$$5$$ < this.$m_maxLength1$) {
    this.$m_limitImpulse1$ = this.$m_limitState1$ = 0
  }else {
    this.$m_limitState1$ = 2;
    this.$m_limitPositionImpulse1$ = 0
  }
  if($P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ < this.$m_maxLength2$) {
    this.$m_limitImpulse2$ = this.$m_limitState2$ = 0
  }else {
    this.$m_limitState2$ = 2;
    this.$m_limitPositionImpulse2$ = 0
  }
  $P1X$$1_cr1u1_length1$$1_p2X$$5$$ = $r1X$$11$$ * this.$m_u1$.y - $r1Y$$11$$ * this.$m_u1$.x;
  $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ = $r2X$$11$$ * this.$m_u2$.y - $r2Y$$11_tMat$$28$$ * this.$m_u2$.x;
  this.$m_limitMass1$ = $b1$$13$$.$m_invMass$ + $b1$$13$$.$m_invI$ * $P1X$$1_cr1u1_length1$$1_p2X$$5$$ * $P1X$$1_cr1u1_length1$$1_p2X$$5$$;
  this.$m_limitMass2$ = $b2$$13$$.$m_invMass$ + $b2$$13$$.$m_invI$ * $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ * $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$;
  this.$m_pulleyMass$ = this.$m_limitMass1$ + this.$m_ratio$ * this.$m_ratio$ * this.$m_limitMass2$;
  this.$m_limitMass1$ = 1 / this.$m_limitMass1$;
  this.$m_limitMass2$ = 1 / this.$m_limitMass2$;
  this.$m_pulleyMass$ = 1 / this.$m_pulleyMass$;
  $P1X$$1_cr1u1_length1$$1_p2X$$5$$ = (-this.$m_pulleyImpulse$ - this.$m_limitImpulse1$) * this.$m_u1$.x;
  $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ = (-this.$m_pulleyImpulse$ - this.$m_limitImpulse1$) * this.$m_u1$.y;
  $P2X$$1_s2X$$ = (-this.$m_ratio$ * this.$m_pulleyImpulse$ - this.$m_limitImpulse2$) * this.$m_u2$.x;
  $P2Y$$1_s2Y$$ = (-this.$m_ratio$ * this.$m_pulleyImpulse$ - this.$m_limitImpulse2$) * this.$m_u2$.y;
  $b1$$13$$.$m_linearVelocity$.x += $b1$$13$$.$m_invMass$ * $P1X$$1_cr1u1_length1$$1_p2X$$5$$;
  $b1$$13$$.$m_linearVelocity$.y += $b1$$13$$.$m_invMass$ * $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$;
  $b1$$13$$.$m_angularVelocity$ += $b1$$13$$.$m_invI$ * ($r1X$$11$$ * $P1Y$$1_cr2u2_length2$$1_p2Y$$5$$ - $r1Y$$11$$ * $P1X$$1_cr1u1_length1$$1_p2X$$5$$);
  $b2$$13$$.$m_linearVelocity$.x += $b2$$13$$.$m_invMass$ * $P2X$$1_s2X$$;
  $b2$$13$$.$m_linearVelocity$.y += $b2$$13$$.$m_invMass$ * $P2Y$$1_s2Y$$;
  $b2$$13$$.$m_angularVelocity$ += $b2$$13$$.$m_invI$ * ($r2X$$11$$ * $P2Y$$1_s2Y$$ - $r2Y$$11_tMat$$28$$ * $P2X$$1_s2X$$)
}, $SolveVelocityConstraints$:function() {
  var $b1$$14$$ = this.$m_body1$, $b2$$14$$ = this.$m_body2$, $r2Y$$12_tMat$$29$$;
  $r2Y$$12_tMat$$29$$ = $b1$$14$$.$m_R$;
  var $r1X$$12$$ = $r2Y$$12_tMat$$29$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$12_tMat$$29$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$12$$ = $r2Y$$12_tMat$$29$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$12_tMat$$29$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$12_tMat$$29$$ = $b2$$14$$.$m_R$;
  var $r2X$$12$$ = $r2Y$$12_tMat$$29$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$12_tMat$$29$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$12_tMat$$29$$ = $r2Y$$12_tMat$$29$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$12_tMat$$29$$.$col2$.y * this.$m_localAnchor2$.y;
  var $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$, $P1Y$$2_v1Y$$3$$, $P2X$$2_v2X$$3$$, $P2Y$$2_impulse$$5_v2Y$$3$$;
  $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = $b1$$14$$.$m_linearVelocity$.x + -$b1$$14$$.$m_angularVelocity$ * $r1Y$$12$$;
  $P1Y$$2_v1Y$$3$$ = $b1$$14$$.$m_linearVelocity$.y + $b1$$14$$.$m_angularVelocity$ * $r1X$$12$$;
  $P2X$$2_v2X$$3$$ = $b2$$14$$.$m_linearVelocity$.x + -$b2$$14$$.$m_angularVelocity$ * $r2Y$$12_tMat$$29$$;
  $P2Y$$2_impulse$$5_v2Y$$3$$ = $b2$$14$$.$m_linearVelocity$.y + $b2$$14$$.$m_angularVelocity$ * $r2X$$12$$;
  $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -(this.$m_u1$.x * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ + this.$m_u1$.y * $P1Y$$2_v1Y$$3$$) - this.$m_ratio$ * (this.$m_u2$.x * $P2X$$2_v2X$$3$$ + this.$m_u2$.y * $P2Y$$2_impulse$$5_v2Y$$3$$);
  $P2Y$$2_impulse$$5_v2Y$$3$$ = -this.$m_pulleyMass$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
  this.$m_pulleyImpulse$ += $P2Y$$2_impulse$$5_v2Y$$3$$;
  $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u1$.x;
  $P1Y$$2_v1Y$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u1$.y;
  $P2X$$2_v2X$$3$$ = -this.$m_ratio$ * $P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u2$.x;
  $P2Y$$2_impulse$$5_v2Y$$3$$ = -this.$m_ratio$ * $P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u2$.y;
  $b1$$14$$.$m_linearVelocity$.x += $b1$$14$$.$m_invMass$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
  $b1$$14$$.$m_linearVelocity$.y += $b1$$14$$.$m_invMass$ * $P1Y$$2_v1Y$$3$$;
  $b1$$14$$.$m_angularVelocity$ += $b1$$14$$.$m_invI$ * ($r1X$$12$$ * $P1Y$$2_v1Y$$3$$ - $r1Y$$12$$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$);
  $b2$$14$$.$m_linearVelocity$.x += $b2$$14$$.$m_invMass$ * $P2X$$2_v2X$$3$$;
  $b2$$14$$.$m_linearVelocity$.y += $b2$$14$$.$m_invMass$ * $P2Y$$2_impulse$$5_v2Y$$3$$;
  $b2$$14$$.$m_angularVelocity$ += $b2$$14$$.$m_invI$ * ($r2X$$12$$ * $P2Y$$2_impulse$$5_v2Y$$3$$ - $r2Y$$12_tMat$$29$$ * $P2X$$2_v2X$$3$$);
  if(this.$m_limitState1$ == 2) {
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = $b1$$14$$.$m_linearVelocity$.x + -$b1$$14$$.$m_angularVelocity$ * $r1Y$$12$$;
    $P1Y$$2_v1Y$$3$$ = $b1$$14$$.$m_linearVelocity$.y + $b1$$14$$.$m_angularVelocity$ * $r1X$$12$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -(this.$m_u1$.x * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ + this.$m_u1$.y * $P1Y$$2_v1Y$$3$$);
    $P2Y$$2_impulse$$5_v2Y$$3$$ = -this.$m_limitMass1$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = this.$m_limitImpulse1$;
    this.$m_limitImpulse1$ = $b2Math$b2Max$$(0, this.$m_limitImpulse1$ + $P2Y$$2_impulse$$5_v2Y$$3$$);
    $P2Y$$2_impulse$$5_v2Y$$3$$ = this.$m_limitImpulse1$ - $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u1$.x;
    $P1Y$$2_v1Y$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u1$.y;
    $b1$$14$$.$m_linearVelocity$.x += $b1$$14$$.$m_invMass$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $b1$$14$$.$m_linearVelocity$.y += $b1$$14$$.$m_invMass$ * $P1Y$$2_v1Y$$3$$;
    $b1$$14$$.$m_angularVelocity$ += $b1$$14$$.$m_invI$ * ($r1X$$12$$ * $P1Y$$2_v1Y$$3$$ - $r1Y$$12$$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$)
  }
  if(this.$m_limitState2$ == 2) {
    $P2X$$2_v2X$$3$$ = $b2$$14$$.$m_linearVelocity$.x + -$b2$$14$$.$m_angularVelocity$ * $r2Y$$12_tMat$$29$$;
    $P2Y$$2_impulse$$5_v2Y$$3$$ = $b2$$14$$.$m_linearVelocity$.y + $b2$$14$$.$m_angularVelocity$ * $r2X$$12$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = -(this.$m_u2$.x * $P2X$$2_v2X$$3$$ + this.$m_u2$.y * $P2Y$$2_impulse$$5_v2Y$$3$$);
    $P2Y$$2_impulse$$5_v2Y$$3$$ = -this.$m_limitMass2$ * $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$ = this.$m_limitImpulse2$;
    this.$m_limitImpulse2$ = $b2Math$b2Max$$(0, this.$m_limitImpulse2$ + $P2Y$$2_impulse$$5_v2Y$$3$$);
    $P2Y$$2_impulse$$5_v2Y$$3$$ = this.$m_limitImpulse2$ - $Cdot$$2_P1X$$2_oldLimitImpulse$$2_v1X$$3$$;
    $P2X$$2_v2X$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u2$.x;
    $P2Y$$2_impulse$$5_v2Y$$3$$ = -$P2Y$$2_impulse$$5_v2Y$$3$$ * this.$m_u2$.y;
    $b2$$14$$.$m_linearVelocity$.x += $b2$$14$$.$m_invMass$ * $P2X$$2_v2X$$3$$;
    $b2$$14$$.$m_linearVelocity$.y += $b2$$14$$.$m_invMass$ * $P2Y$$2_impulse$$5_v2Y$$3$$;
    $b2$$14$$.$m_angularVelocity$ += $b2$$14$$.$m_invI$ * ($r2X$$12$$ * $P2Y$$2_impulse$$5_v2Y$$3$$ - $r2Y$$12_tMat$$29$$ * $P2X$$2_v2X$$3$$)
  }
}, $SolvePositionConstraints$:function() {
  var $b1$$15$$ = this.$m_body1$, $b2$$15$$ = this.$m_body2$, $r2Y$$13_tMat$$30$$, $oldLimitPositionImpulse_s1X$$1$$ = this.$m_ground$.$m_position$.x + this.$m_groundAnchor1$.x, $s1Y$$1$$ = this.$m_ground$.$m_position$.y + this.$m_groundAnchor1$.y, $s2X$$1$$ = this.$m_ground$.$m_position$.x + this.$m_groundAnchor2$.x, $s2Y$$1$$ = this.$m_ground$.$m_position$.y + this.$m_groundAnchor2$.y, $r1X$$13$$, $r1Y$$13$$, $r2X$$13$$, $C$$6_length1$$2_p1X$$7$$, $length2$$2_p1Y$$7$$, $p2X$$6$$, $impulse$$6_p2Y$$6$$, 
  $linearError$$1$$ = 0;
  $r2Y$$13_tMat$$30$$ = $b1$$15$$.$m_R$;
  $r1X$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$13_tMat$$30$$.$col2$.x * this.$m_localAnchor1$.y;
  $r1Y$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$13_tMat$$30$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$13_tMat$$30$$ = $b2$$15$$.$m_R$;
  $r2X$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$13_tMat$$30$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$13_tMat$$30$$ = $r2Y$$13_tMat$$30$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$13_tMat$$30$$.$col2$.y * this.$m_localAnchor2$.y;
  $C$$6_length1$$2_p1X$$7$$ = $b1$$15$$.$m_position$.x + $r1X$$13$$;
  $length2$$2_p1Y$$7$$ = $b1$$15$$.$m_position$.y + $r1Y$$13$$;
  $p2X$$6$$ = $b2$$15$$.$m_position$.x + $r2X$$13$$;
  $impulse$$6_p2Y$$6$$ = $b2$$15$$.$m_position$.y + $r2Y$$13_tMat$$30$$;
  this.$m_u1$.$Set$($C$$6_length1$$2_p1X$$7$$ - $oldLimitPositionImpulse_s1X$$1$$, $length2$$2_p1Y$$7$$ - $s1Y$$1$$);
  this.$m_u2$.$Set$($p2X$$6$$ - $s2X$$1$$, $impulse$$6_p2Y$$6$$ - $s2Y$$1$$);
  $C$$6_length1$$2_p1X$$7$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u1$);
  $length2$$2_p1Y$$7$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u2$);
  $C$$6_length1$$2_p1X$$7$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u1$, 1 / $C$$6_length1$$2_p1X$$7$$) : this.$m_u1$.$SetZero$();
  $length2$$2_p1Y$$7$$ > 0.15 ? $JSCompiler_StaticMethods_Multiply$$(this.$m_u2$, 1 / $length2$$2_p1Y$$7$$) : this.$m_u2$.$SetZero$();
  $C$$6_length1$$2_p1X$$7$$ = this.$m_constant$ - $C$$6_length1$$2_p1X$$7$$ - this.$m_ratio$ * $length2$$2_p1Y$$7$$;
  $linearError$$1$$ = $b2Math$b2Max$$($linearError$$1$$, Math.abs($C$$6_length1$$2_p1X$$7$$));
  $C$$6_length1$$2_p1X$$7$$ = $b2Math$b2Clamp$$($C$$6_length1$$2_p1X$$7$$, -6, 6);
  $impulse$$6_p2Y$$6$$ = -this.$m_pulleyMass$ * $C$$6_length1$$2_p1X$$7$$;
  $C$$6_length1$$2_p1X$$7$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u1$.x;
  $length2$$2_p1Y$$7$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u1$.y;
  $p2X$$6$$ = -this.$m_ratio$ * $impulse$$6_p2Y$$6$$ * this.$m_u2$.x;
  $impulse$$6_p2Y$$6$$ = -this.$m_ratio$ * $impulse$$6_p2Y$$6$$ * this.$m_u2$.y;
  $b1$$15$$.$m_position$.x += $b1$$15$$.$m_invMass$ * $C$$6_length1$$2_p1X$$7$$;
  $b1$$15$$.$m_position$.y += $b1$$15$$.$m_invMass$ * $length2$$2_p1Y$$7$$;
  $b1$$15$$.$m_rotation$ += $b1$$15$$.$m_invI$ * ($r1X$$13$$ * $length2$$2_p1Y$$7$$ - $r1Y$$13$$ * $C$$6_length1$$2_p1X$$7$$);
  $b2$$15$$.$m_position$.x += $b2$$15$$.$m_invMass$ * $p2X$$6$$;
  $b2$$15$$.$m_position$.y += $b2$$15$$.$m_invMass$ * $impulse$$6_p2Y$$6$$;
  $b2$$15$$.$m_rotation$ += $b2$$15$$.$m_invI$ * ($r2X$$13$$ * $impulse$$6_p2Y$$6$$ - $r2Y$$13_tMat$$30$$ * $p2X$$6$$);
  $b1$$15$$.$m_R$.$Set$($b1$$15$$.$m_rotation$);
  $b2$$15$$.$m_R$.$Set$($b2$$15$$.$m_rotation$);
  if(this.$m_limitState1$ == 2) {
    $r2Y$$13_tMat$$30$$ = $b1$$15$$.$m_R$;
    $r1X$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$13_tMat$$30$$.$col2$.x * this.$m_localAnchor1$.y;
    $r1Y$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$13_tMat$$30$$.$col2$.y * this.$m_localAnchor1$.y;
    $C$$6_length1$$2_p1X$$7$$ = $b1$$15$$.$m_position$.x + $r1X$$13$$;
    $length2$$2_p1Y$$7$$ = $b1$$15$$.$m_position$.y + $r1Y$$13$$;
    this.$m_u1$.$Set$($C$$6_length1$$2_p1X$$7$$ - $oldLimitPositionImpulse_s1X$$1$$, $length2$$2_p1Y$$7$$ - $s1Y$$1$$);
    $C$$6_length1$$2_p1X$$7$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u1$);
    if($C$$6_length1$$2_p1X$$7$$ > 0.15) {
      this.$m_u1$.x *= 1 / $C$$6_length1$$2_p1X$$7$$;
      this.$m_u1$.y *= 1 / $C$$6_length1$$2_p1X$$7$$
    }else {
      this.$m_u1$.$SetZero$()
    }
    $C$$6_length1$$2_p1X$$7$$ = this.$m_maxLength1$ - $C$$6_length1$$2_p1X$$7$$;
    $linearError$$1$$ = $b2Math$b2Max$$($linearError$$1$$, -$C$$6_length1$$2_p1X$$7$$);
    $C$$6_length1$$2_p1X$$7$$ = $b2Math$b2Clamp$$($C$$6_length1$$2_p1X$$7$$ + 0.15, -6, 0);
    $impulse$$6_p2Y$$6$$ = -this.$m_limitMass1$ * $C$$6_length1$$2_p1X$$7$$;
    $oldLimitPositionImpulse_s1X$$1$$ = this.$m_limitPositionImpulse1$;
    this.$m_limitPositionImpulse1$ = $b2Math$b2Max$$(0, this.$m_limitPositionImpulse1$ + $impulse$$6_p2Y$$6$$);
    $impulse$$6_p2Y$$6$$ = this.$m_limitPositionImpulse1$ - $oldLimitPositionImpulse_s1X$$1$$;
    $C$$6_length1$$2_p1X$$7$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u1$.x;
    $length2$$2_p1Y$$7$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u1$.y;
    $b1$$15$$.$m_position$.x += $b1$$15$$.$m_invMass$ * $C$$6_length1$$2_p1X$$7$$;
    $b1$$15$$.$m_position$.y += $b1$$15$$.$m_invMass$ * $length2$$2_p1Y$$7$$;
    $b1$$15$$.$m_rotation$ += $b1$$15$$.$m_invI$ * ($r1X$$13$$ * $length2$$2_p1Y$$7$$ - $r1Y$$13$$ * $C$$6_length1$$2_p1X$$7$$);
    $b1$$15$$.$m_R$.$Set$($b1$$15$$.$m_rotation$)
  }
  if(this.$m_limitState2$ == 2) {
    $r2Y$$13_tMat$$30$$ = $b2$$15$$.$m_R$;
    $r2X$$13$$ = $r2Y$$13_tMat$$30$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$13_tMat$$30$$.$col2$.x * this.$m_localAnchor2$.y;
    $r2Y$$13_tMat$$30$$ = $r2Y$$13_tMat$$30$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$13_tMat$$30$$.$col2$.y * this.$m_localAnchor2$.y;
    $p2X$$6$$ = $b2$$15$$.$m_position$.x + $r2X$$13$$;
    $impulse$$6_p2Y$$6$$ = $b2$$15$$.$m_position$.y + $r2Y$$13_tMat$$30$$;
    this.$m_u2$.$Set$($p2X$$6$$ - $s2X$$1$$, $impulse$$6_p2Y$$6$$ - $s2Y$$1$$);
    $length2$$2_p1Y$$7$$ = $JSCompiler_StaticMethods_Length$$(this.$m_u2$);
    if($length2$$2_p1Y$$7$$ > 0.15) {
      this.$m_u2$.x *= 1 / $length2$$2_p1Y$$7$$;
      this.$m_u2$.y *= 1 / $length2$$2_p1Y$$7$$
    }else {
      this.$m_u2$.$SetZero$()
    }
    $C$$6_length1$$2_p1X$$7$$ = this.$m_maxLength2$ - $length2$$2_p1Y$$7$$;
    $linearError$$1$$ = $b2Math$b2Max$$($linearError$$1$$, -$C$$6_length1$$2_p1X$$7$$);
    $C$$6_length1$$2_p1X$$7$$ = $b2Math$b2Clamp$$($C$$6_length1$$2_p1X$$7$$ + 0.15, -6, 0);
    $impulse$$6_p2Y$$6$$ = -this.$m_limitMass2$ * $C$$6_length1$$2_p1X$$7$$;
    $oldLimitPositionImpulse_s1X$$1$$ = this.$m_limitPositionImpulse2$;
    this.$m_limitPositionImpulse2$ = $b2Math$b2Max$$(0, this.$m_limitPositionImpulse2$ + $impulse$$6_p2Y$$6$$);
    $impulse$$6_p2Y$$6$$ = this.$m_limitPositionImpulse2$ - $oldLimitPositionImpulse_s1X$$1$$;
    $p2X$$6$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u2$.x;
    $impulse$$6_p2Y$$6$$ = -$impulse$$6_p2Y$$6$$ * this.$m_u2$.y;
    $b2$$15$$.$m_position$.x += $b2$$15$$.$m_invMass$ * $p2X$$6$$;
    $b2$$15$$.$m_position$.y += $b2$$15$$.$m_invMass$ * $impulse$$6_p2Y$$6$$;
    $b2$$15$$.$m_rotation$ += $b2$$15$$.$m_invI$ * ($r2X$$13$$ * $impulse$$6_p2Y$$6$$ - $r2Y$$13_tMat$$30$$ * $p2X$$6$$);
    $b2$$15$$.$m_R$.$Set$($b2$$15$$.$m_rotation$)
  }
  return $linearError$$1$$ < 0.15
}, $m_ground$:null, $m_groundAnchor1$:new $b2Vec2$$, $m_groundAnchor2$:new $b2Vec2$$, $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_u1$:new $b2Vec2$$, $m_u2$:new $b2Vec2$$, $m_constant$:null, $m_ratio$:null, $m_maxLength1$:null, $m_maxLength2$:null, $m_pulleyMass$:null, $m_limitMass1$:null, $m_limitMass2$:null, $m_pulleyImpulse$:null, $m_limitImpulse1$:null, $m_limitImpulse2$:null, $m_limitPositionImpulse1$:null, $m_limitPositionImpulse2$:null, $m_limitState1$:0, $m_limitState2$:0});
var $b2PulleyJoint$b2_minPulleyLength$$ = 30;
// Input 60
function $b2RevoluteJoint$$($def$$10$$) {
  this.$m_node1$ = new $b2JointNode$$;
  this.$m_node2$ = new $b2JointNode$$;
  this.$m_type$ = $def$$10$$.type;
  this.$m_next$ = this.$m_prev$ = null;
  this.$m_body1$ = $def$$10$$.$body1$;
  this.$m_body2$ = $def$$10$$.$body2$;
  this.$m_collideConnected$ = $def$$10$$.$collideConnected$;
  this.$m_islandFlag$ = false;
  this.$m_userData$ = $def$$10$$.$userData$;
  this.$K$ = new $b2Mat22$$;
  this.$K1$ = new $b2Mat22$$;
  this.$K2$ = new $b2Mat22$$;
  this.$K3$ = new $b2Mat22$$;
  this.$m_localAnchor1$ = new $b2Vec2$$;
  this.$m_localAnchor2$ = new $b2Vec2$$;
  this.$m_ptpImpulse$ = new $b2Vec2$$;
  this.$m_ptpMass$ = new $b2Mat22$$;
  var $tMat$$31$$, $tX$$14$$, $tY$$6$$;
  $tMat$$31$$ = this.$m_body1$.$m_R$;
  $tX$$14$$ = $def$$10$$.$anchorPoint$.x - this.$m_body1$.$m_position$.x;
  $tY$$6$$ = $def$$10$$.$anchorPoint$.y - this.$m_body1$.$m_position$.y;
  this.$m_localAnchor1$.x = $tX$$14$$ * $tMat$$31$$.$col1$.x + $tY$$6$$ * $tMat$$31$$.$col1$.y;
  this.$m_localAnchor1$.y = $tX$$14$$ * $tMat$$31$$.$col2$.x + $tY$$6$$ * $tMat$$31$$.$col2$.y;
  $tMat$$31$$ = this.$m_body2$.$m_R$;
  $tX$$14$$ = $def$$10$$.$anchorPoint$.x - this.$m_body2$.$m_position$.x;
  $tY$$6$$ = $def$$10$$.$anchorPoint$.y - this.$m_body2$.$m_position$.y;
  this.$m_localAnchor2$.x = $tX$$14$$ * $tMat$$31$$.$col1$.x + $tY$$6$$ * $tMat$$31$$.$col1$.y;
  this.$m_localAnchor2$.y = $tX$$14$$ * $tMat$$31$$.$col2$.x + $tY$$6$$ * $tMat$$31$$.$col2$.y;
  this.$m_intialAngle$ = this.$m_body2$.$m_rotation$ - this.$m_body1$.$m_rotation$;
  this.$m_ptpImpulse$.$Set$(0, 0);
  this.$m_limitPositionImpulse$ = this.$m_limitImpulse$ = this.$m_motorImpulse$ = 0;
  this.$m_lowerAngle$ = $def$$10$$.$lowerAngle$;
  this.$m_upperAngle$ = $def$$10$$.$upperAngle$;
  this.$m_maxMotorTorque$ = $def$$10$$.$motorTorque$;
  this.$m_motorSpeed$ = $def$$10$$.$motorSpeed$;
  this.$m_enableLimit$ = $def$$10$$.$enableLimit$;
  this.$m_enableMotor$ = $def$$10$$.$enableMotor$
}
Object.extend($b2RevoluteJoint$$.prototype, $b2Joint$$.prototype);
Object.extend($b2RevoluteJoint$$.prototype, {$GetAnchor1$:function() {
  var $tMat$$32$$ = this.$m_body1$.$m_R$;
  return new $b2Vec2$$(this.$m_body1$.$m_position$.x + ($tMat$$32$$.$col1$.x * this.$m_localAnchor1$.x + $tMat$$32$$.$col2$.x * this.$m_localAnchor1$.y), this.$m_body1$.$m_position$.y + ($tMat$$32$$.$col1$.y * this.$m_localAnchor1$.x + $tMat$$32$$.$col2$.y * this.$m_localAnchor1$.y))
}, $GetAnchor2$:function() {
  var $tMat$$33$$ = this.$m_body2$.$m_R$;
  return new $b2Vec2$$(this.$m_body2$.$m_position$.x + ($tMat$$33$$.$col1$.x * this.$m_localAnchor2$.x + $tMat$$33$$.$col2$.x * this.$m_localAnchor2$.y), this.$m_body2$.$m_position$.y + ($tMat$$33$$.$col1$.y * this.$m_localAnchor2$.x + $tMat$$33$$.$col2$.y * this.$m_localAnchor2$.y))
}, $GetJointAngle$:function() {
  return this.$m_body2$.$m_rotation$ - this.$m_body1$.$m_rotation$
}, $GetJointSpeed$:function() {
  return this.$m_body2$.$m_angularVelocity$ - this.$m_body1$.$m_angularVelocity$
}, $GetMotorTorque$:function($invTimeStep$$13$$) {
  return $invTimeStep$$13$$ * this.$m_motorImpulse$
}, $SetMotorSpeed$:function($speed$$2$$) {
  this.$m_motorSpeed$ = $speed$$2$$
}, $SetMotorTorque$:function($torque$$1$$) {
  this.$m_maxMotorTorque$ = $torque$$1$$
}, $GetReactionForce$:function($invTimeStep$$14$$) {
  var $tVec$$16$$ = this.$m_ptpImpulse$.$Copy$();
  $JSCompiler_StaticMethods_Multiply$$($tVec$$16$$, $invTimeStep$$14$$);
  return $tVec$$16$$
}, $GetReactionTorque$:function($invTimeStep$$15$$) {
  return $invTimeStep$$15$$ * this.$m_limitImpulse$
}, $K$:new $b2Mat22$$, $K1$:new $b2Mat22$$, $K2$:new $b2Mat22$$, $K3$:new $b2Mat22$$, $PrepareVelocitySolver$:function() {
  var $b1$$16$$ = this.$m_body1$, $b2$$16$$ = this.$m_body2$, $r2Y$$14_tMat$$34$$;
  $r2Y$$14_tMat$$34$$ = $b1$$16$$.$m_R$;
  var $r1X$$14$$ = $r2Y$$14_tMat$$34$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$14_tMat$$34$$.$col2$.x * this.$m_localAnchor1$.y, $r1Y$$14$$ = $r2Y$$14_tMat$$34$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$14_tMat$$34$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$14_tMat$$34$$ = $b2$$16$$.$m_R$;
  var $r2X$$14$$ = $r2Y$$14_tMat$$34$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$14_tMat$$34$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$14_tMat$$34$$ = $r2Y$$14_tMat$$34$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$14_tMat$$34$$.$col2$.y * this.$m_localAnchor2$.y;
  var $invMass1$$6$$ = $b1$$16$$.$m_invMass$, $invMass2$$6$$ = $b2$$16$$.$m_invMass$, $invI1$$6$$ = $b1$$16$$.$m_invI$, $invI2$$6$$ = $b2$$16$$.$m_invI$;
  this.$K1$.$col1$.x = $invMass1$$6$$ + $invMass2$$6$$;
  this.$K1$.$col2$.x = 0;
  this.$K1$.$col1$.y = 0;
  this.$K1$.$col2$.y = $invMass1$$6$$ + $invMass2$$6$$;
  this.$K2$.$col1$.x = $invI1$$6$$ * $r1Y$$14$$ * $r1Y$$14$$;
  this.$K2$.$col2$.x = -$invI1$$6$$ * $r1X$$14$$ * $r1Y$$14$$;
  this.$K2$.$col1$.y = -$invI1$$6$$ * $r1X$$14$$ * $r1Y$$14$$;
  this.$K2$.$col2$.y = $invI1$$6$$ * $r1X$$14$$ * $r1X$$14$$;
  this.$K3$.$col1$.x = $invI2$$6$$ * $r2Y$$14_tMat$$34$$ * $r2Y$$14_tMat$$34$$;
  this.$K3$.$col2$.x = -$invI2$$6$$ * $r2X$$14$$ * $r2Y$$14_tMat$$34$$;
  this.$K3$.$col1$.y = -$invI2$$6$$ * $r2X$$14$$ * $r2Y$$14_tMat$$34$$;
  this.$K3$.$col2$.y = $invI2$$6$$ * $r2X$$14$$ * $r2X$$14$$;
  $JSCompiler_StaticMethods_SetM$$(this.$K$, this.$K1$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K2$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K3$);
  $JSCompiler_StaticMethods_Invert$$(this.$K$, this.$m_ptpMass$);
  this.$m_motorMass$ = 1 / ($invI1$$6$$ + $invI2$$6$$);
  if(this.$m_enableMotor$ == false) {
    this.$m_motorImpulse$ = 0
  }
  if(this.$m_enableLimit$) {
    var $jointAngle$$ = $b2$$16$$.$m_rotation$ - $b1$$16$$.$m_rotation$ - this.$m_intialAngle$;
    if($b2Math$b2Abs$$(this.$m_upperAngle$ - this.$m_lowerAngle$) < 2 * $b2Settings$b2_angularSlop$$) {
      this.$m_limitState$ = 3
    }else {
      if($jointAngle$$ <= this.$m_lowerAngle$) {
        if(this.$m_limitState$ != 1) {
          this.$m_limitImpulse$ = 0
        }
        this.$m_limitState$ = 1
      }else {
        if($jointAngle$$ >= this.$m_upperAngle$) {
          if(this.$m_limitState$ != 2) {
            this.$m_limitImpulse$ = 0
          }
          this.$m_limitState$ = 2
        }else {
          this.$m_limitImpulse$ = this.$m_limitState$ = 0
        }
      }
    }
  }else {
    this.$m_limitImpulse$ = 0
  }
  if($b2World$s_enableWarmStarting$$) {
    $b1$$16$$.$m_linearVelocity$.x -= $invMass1$$6$$ * this.$m_ptpImpulse$.x;
    $b1$$16$$.$m_linearVelocity$.y -= $invMass1$$6$$ * this.$m_ptpImpulse$.y;
    $b1$$16$$.$m_angularVelocity$ -= $invI1$$6$$ * ($r1X$$14$$ * this.$m_ptpImpulse$.y - $r1Y$$14$$ * this.$m_ptpImpulse$.x + this.$m_motorImpulse$ + this.$m_limitImpulse$);
    $b2$$16$$.$m_linearVelocity$.x += $invMass2$$6$$ * this.$m_ptpImpulse$.x;
    $b2$$16$$.$m_linearVelocity$.y += $invMass2$$6$$ * this.$m_ptpImpulse$.y;
    $b2$$16$$.$m_angularVelocity$ += $invI2$$6$$ * ($r2X$$14$$ * this.$m_ptpImpulse$.y - $r2Y$$14_tMat$$34$$ * this.$m_ptpImpulse$.x + this.$m_motorImpulse$ + this.$m_limitImpulse$)
  }else {
    this.$m_ptpImpulse$.$SetZero$();
    this.$m_limitImpulse$ = this.$m_motorImpulse$ = 0
  }
  this.$m_limitPositionImpulse$ = 0
}, $SolveVelocityConstraints$:function($oldLimitImpulse$$3_step$$7$$) {
  var $b1$$17$$ = this.$m_body1$, $b2$$17$$ = this.$m_body2$, $r2Y$$15_tMat$$35$$;
  $r2Y$$15_tMat$$35$$ = $b1$$17$$.$m_R$;
  var $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = $r2Y$$15_tMat$$35$$.$col1$.x * this.$m_localAnchor1$.x + $r2Y$$15_tMat$$35$$.$col2$.x * this.$m_localAnchor1$.y, $oldMotorImpulse$$1_r1Y$$15$$ = $r2Y$$15_tMat$$35$$.$col1$.y * this.$m_localAnchor1$.x + $r2Y$$15_tMat$$35$$.$col2$.y * this.$m_localAnchor1$.y;
  $r2Y$$15_tMat$$35$$ = $b2$$17$$.$m_R$;
  var $r2X$$15$$ = $r2Y$$15_tMat$$35$$.$col1$.x * this.$m_localAnchor2$.x + $r2Y$$15_tMat$$35$$.$col2$.x * this.$m_localAnchor2$.y;
  $r2Y$$15_tMat$$35$$ = $r2Y$$15_tMat$$35$$.$col1$.y * this.$m_localAnchor2$.x + $r2Y$$15_tMat$$35$$.$col2$.y * this.$m_localAnchor2$.y;
  var $ptpCdotX_ptpImpulseY$$ = $b2$$17$$.$m_linearVelocity$.x + -$b2$$17$$.$m_angularVelocity$ * $r2Y$$15_tMat$$35$$ - $b1$$17$$.$m_linearVelocity$.x - -$b1$$17$$.$m_angularVelocity$ * $oldMotorImpulse$$1_r1Y$$15$$, $ptpCdotY$$ = $b2$$17$$.$m_linearVelocity$.y + $b2$$17$$.$m_angularVelocity$ * $r2X$$15$$ - $b1$$17$$.$m_linearVelocity$.y - $b1$$17$$.$m_angularVelocity$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$, $ptpImpulseX$$ = -(this.$m_ptpMass$.$col1$.x * $ptpCdotX_ptpImpulseY$$ + this.$m_ptpMass$.$col2$.x * 
  $ptpCdotY$$);
  $ptpCdotX_ptpImpulseY$$ = -(this.$m_ptpMass$.$col1$.y * $ptpCdotX_ptpImpulseY$$ + this.$m_ptpMass$.$col2$.y * $ptpCdotY$$);
  this.$m_ptpImpulse$.x += $ptpImpulseX$$;
  this.$m_ptpImpulse$.y += $ptpCdotX_ptpImpulseY$$;
  $b1$$17$$.$m_linearVelocity$.x -= $b1$$17$$.$m_invMass$ * $ptpImpulseX$$;
  $b1$$17$$.$m_linearVelocity$.y -= $b1$$17$$.$m_invMass$ * $ptpCdotX_ptpImpulseY$$;
  $b1$$17$$.$m_angularVelocity$ -= $b1$$17$$.$m_invI$ * ($limitImpulse$$2_motorImpulse$$1_r1X$$15$$ * $ptpCdotX_ptpImpulseY$$ - $oldMotorImpulse$$1_r1Y$$15$$ * $ptpImpulseX$$);
  $b2$$17$$.$m_linearVelocity$.x += $b2$$17$$.$m_invMass$ * $ptpImpulseX$$;
  $b2$$17$$.$m_linearVelocity$.y += $b2$$17$$.$m_invMass$ * $ptpCdotX_ptpImpulseY$$;
  $b2$$17$$.$m_angularVelocity$ += $b2$$17$$.$m_invI$ * ($r2X$$15$$ * $ptpCdotX_ptpImpulseY$$ - $r2Y$$15_tMat$$35$$ * $ptpImpulseX$$);
  if(this.$m_enableMotor$ && this.$m_limitState$ != 3) {
    $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = -this.$m_motorMass$ * ($b2$$17$$.$m_angularVelocity$ - $b1$$17$$.$m_angularVelocity$ - this.$m_motorSpeed$);
    $oldMotorImpulse$$1_r1Y$$15$$ = this.$m_motorImpulse$;
    this.$m_motorImpulse$ = $b2Math$b2Clamp$$(this.$m_motorImpulse$ + $limitImpulse$$2_motorImpulse$$1_r1X$$15$$, -$oldLimitImpulse$$3_step$$7$$.$dt$ * this.$m_maxMotorTorque$, $oldLimitImpulse$$3_step$$7$$.$dt$ * this.$m_maxMotorTorque$);
    $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = this.$m_motorImpulse$ - $oldMotorImpulse$$1_r1Y$$15$$;
    $b1$$17$$.$m_angularVelocity$ -= $b1$$17$$.$m_invI$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$;
    $b2$$17$$.$m_angularVelocity$ += $b2$$17$$.$m_invI$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$
  }
  if(this.$m_enableLimit$ && this.$m_limitState$ != 0) {
    $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = -this.$m_motorMass$ * ($b2$$17$$.$m_angularVelocity$ - $b1$$17$$.$m_angularVelocity$);
    if(this.$m_limitState$ == 3) {
      this.$m_limitImpulse$ += $limitImpulse$$2_motorImpulse$$1_r1X$$15$$
    }else {
      if(this.$m_limitState$ == 1) {
        $oldLimitImpulse$$3_step$$7$$ = this.$m_limitImpulse$;
        this.$m_limitImpulse$ = $b2Math$b2Max$$(this.$m_limitImpulse$ + $limitImpulse$$2_motorImpulse$$1_r1X$$15$$, 0);
        $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = this.$m_limitImpulse$ - $oldLimitImpulse$$3_step$$7$$
      }else {
        if(this.$m_limitState$ == 2) {
          $oldLimitImpulse$$3_step$$7$$ = this.$m_limitImpulse$;
          this.$m_limitImpulse$ = this.$m_limitImpulse$ + $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ < 0 ? this.$m_limitImpulse$ + $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ : 0;
          $limitImpulse$$2_motorImpulse$$1_r1X$$15$$ = this.$m_limitImpulse$ - $oldLimitImpulse$$3_step$$7$$
        }
      }
    }
    $b1$$17$$.$m_angularVelocity$ -= $b1$$17$$.$m_invI$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$;
    $b2$$17$$.$m_angularVelocity$ += $b2$$17$$.$m_invI$ * $limitImpulse$$2_motorImpulse$$1_r1X$$15$$
  }
}, $SolvePositionConstraints$:function() {
  var $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$, $b1$$18$$ = this.$m_body1$, $b2$$18$$ = this.$m_body2$, $positionError$$1_tMat$$36$$ = 0;
  $positionError$$1_tMat$$36$$ = $b1$$18$$.$m_R$;
  var $angularError$$1_r1X$$16$$ = $positionError$$1_tMat$$36$$.$col1$.x * this.$m_localAnchor1$.x + $positionError$$1_tMat$$36$$.$col2$.x * this.$m_localAnchor1$.y, $limitImpulse$$3_r1Y$$16$$ = $positionError$$1_tMat$$36$$.$col1$.y * this.$m_localAnchor1$.x + $positionError$$1_tMat$$36$$.$col2$.y * this.$m_localAnchor1$.y;
  $positionError$$1_tMat$$36$$ = $b2$$18$$.$m_R$;
  $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $positionError$$1_tMat$$36$$.$col1$.x * this.$m_localAnchor2$.x + $positionError$$1_tMat$$36$$.$col2$.x * this.$m_localAnchor2$.y;
  var $r2Y$$16$$ = $positionError$$1_tMat$$36$$.$col1$.y * this.$m_localAnchor2$.x + $positionError$$1_tMat$$36$$.$col2$.y * this.$m_localAnchor2$.y, $impulseX$$2_ptpCX$$ = $b2$$18$$.$m_position$.x + $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ - ($b1$$18$$.$m_position$.x + $angularError$$1_r1X$$16$$), $impulseY$$2_ptpCY$$ = $b2$$18$$.$m_position$.y + $r2Y$$16$$ - ($b1$$18$$.$m_position$.y + $limitImpulse$$3_r1Y$$16$$);
  $positionError$$1_tMat$$36$$ = Math.sqrt($impulseX$$2_ptpCX$$ * $impulseX$$2_ptpCX$$ + $impulseY$$2_ptpCY$$ * $impulseY$$2_ptpCY$$);
  var $invMass1$$7$$ = $b1$$18$$.$m_invMass$, $invMass2$$7$$ = $b2$$18$$.$m_invMass$, $invI1$$7$$ = $b1$$18$$.$m_invI$, $invI2$$7$$ = $b2$$18$$.$m_invI$;
  this.$K1$.$col1$.x = $invMass1$$7$$ + $invMass2$$7$$;
  this.$K1$.$col2$.x = 0;
  this.$K1$.$col1$.y = 0;
  this.$K1$.$col2$.y = $invMass1$$7$$ + $invMass2$$7$$;
  this.$K2$.$col1$.x = $invI1$$7$$ * $limitImpulse$$3_r1Y$$16$$ * $limitImpulse$$3_r1Y$$16$$;
  this.$K2$.$col2$.x = -$invI1$$7$$ * $angularError$$1_r1X$$16$$ * $limitImpulse$$3_r1Y$$16$$;
  this.$K2$.$col1$.y = -$invI1$$7$$ * $angularError$$1_r1X$$16$$ * $limitImpulse$$3_r1Y$$16$$;
  this.$K2$.$col2$.y = $invI1$$7$$ * $angularError$$1_r1X$$16$$ * $angularError$$1_r1X$$16$$;
  this.$K3$.$col1$.x = $invI2$$7$$ * $r2Y$$16$$ * $r2Y$$16$$;
  this.$K3$.$col2$.x = -$invI2$$7$$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ * $r2Y$$16$$;
  this.$K3$.$col1$.y = -$invI2$$7$$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ * $r2Y$$16$$;
  this.$K3$.$col2$.y = $invI2$$7$$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$;
  $JSCompiler_StaticMethods_SetM$$(this.$K$, this.$K1$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K2$);
  $JSCompiler_StaticMethods_AddM$$(this.$K$, this.$K3$);
  this.$K$.$Solve$($b2RevoluteJoint$tImpulse$$, -$impulseX$$2_ptpCX$$, -$impulseY$$2_ptpCY$$);
  $impulseX$$2_ptpCX$$ = $b2RevoluteJoint$tImpulse$$.x;
  $impulseY$$2_ptpCY$$ = $b2RevoluteJoint$tImpulse$$.y;
  $b1$$18$$.$m_position$.x -= $b1$$18$$.$m_invMass$ * $impulseX$$2_ptpCX$$;
  $b1$$18$$.$m_position$.y -= $b1$$18$$.$m_invMass$ * $impulseY$$2_ptpCY$$;
  $b1$$18$$.$m_rotation$ -= $b1$$18$$.$m_invI$ * ($angularError$$1_r1X$$16$$ * $impulseY$$2_ptpCY$$ - $limitImpulse$$3_r1Y$$16$$ * $impulseX$$2_ptpCX$$);
  $b1$$18$$.$m_R$.$Set$($b1$$18$$.$m_rotation$);
  $b2$$18$$.$m_position$.x += $b2$$18$$.$m_invMass$ * $impulseX$$2_ptpCX$$;
  $b2$$18$$.$m_position$.y += $b2$$18$$.$m_invMass$ * $impulseY$$2_ptpCY$$;
  $b2$$18$$.$m_rotation$ += $b2$$18$$.$m_invI$ * ($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ * $impulseY$$2_ptpCY$$ - $r2Y$$16$$ * $impulseX$$2_ptpCX$$);
  $b2$$18$$.$m_R$.$Set$($b2$$18$$.$m_rotation$);
  $angularError$$1_r1X$$16$$ = 0;
  if(this.$m_enableLimit$ && this.$m_limitState$ != 0) {
    $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $b2$$18$$.$m_rotation$ - $b1$$18$$.$m_rotation$ - this.$m_intialAngle$;
    $limitImpulse$$3_r1Y$$16$$ = 0;
    if(this.$m_limitState$ == 3) {
      $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $b2Math$b2Clamp$$($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$, -$b2Settings$b2_maxAngularCorrection$$, $b2Settings$b2_maxAngularCorrection$$);
      $limitImpulse$$3_r1Y$$16$$ = -this.$m_motorMass$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$;
      $angularError$$1_r1X$$16$$ = $b2Math$b2Abs$$($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$)
    }else {
      if(this.$m_limitState$ == 1) {
        $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ - this.$m_lowerAngle$;
        $angularError$$1_r1X$$16$$ = $b2Math$b2Max$$(0, -$angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$);
        $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $b2Math$b2Clamp$$($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ + $b2Settings$b2_angularSlop$$, -$b2Settings$b2_maxAngularCorrection$$, 0);
        $limitImpulse$$3_r1Y$$16$$ = -this.$m_motorMass$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$;
        $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = this.$m_limitPositionImpulse$;
        this.$m_limitPositionImpulse$ = $b2Math$b2Max$$(this.$m_limitPositionImpulse$ + $limitImpulse$$3_r1Y$$16$$, 0);
        $limitImpulse$$3_r1Y$$16$$ = this.$m_limitPositionImpulse$ - $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$
      }else {
        if(this.$m_limitState$ == 2) {
          $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ - this.$m_upperAngle$;
          $angularError$$1_r1X$$16$$ = $b2Math$b2Max$$(0, $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$);
          $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = $b2Math$b2Clamp$$($angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ - $b2Settings$b2_angularSlop$$, 0, $b2Settings$b2_maxAngularCorrection$$);
          $limitImpulse$$3_r1Y$$16$$ = -this.$m_motorMass$ * $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$;
          $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$ = this.$m_limitPositionImpulse$;
          this.$m_limitPositionImpulse$ = this.$m_limitPositionImpulse$ + $limitImpulse$$3_r1Y$$16$$ < 0 ? this.$m_limitPositionImpulse$ + $limitImpulse$$3_r1Y$$16$$ : 0;
          $limitImpulse$$3_r1Y$$16$$ = this.$m_limitPositionImpulse$ - $angle$$3_limitC$$1_oldLimitImpulse$$4_r2X$$16$$
        }
      }
    }
    $b1$$18$$.$m_rotation$ -= $b1$$18$$.$m_invI$ * $limitImpulse$$3_r1Y$$16$$;
    $b1$$18$$.$m_R$.$Set$($b1$$18$$.$m_rotation$);
    $b2$$18$$.$m_rotation$ += $b2$$18$$.$m_invI$ * $limitImpulse$$3_r1Y$$16$$;
    $b2$$18$$.$m_R$.$Set$($b2$$18$$.$m_rotation$)
  }
  return $positionError$$1_tMat$$36$$ <= 0.15 && $angularError$$1_r1X$$16$$ <= $b2Settings$b2_angularSlop$$
}, $m_localAnchor1$:new $b2Vec2$$, $m_localAnchor2$:new $b2Vec2$$, $m_ptpImpulse$:new $b2Vec2$$, $m_motorImpulse$:null, $m_limitImpulse$:null, $m_limitPositionImpulse$:null, $m_ptpMass$:new $b2Mat22$$, $m_motorMass$:null, $m_intialAngle$:null, $m_lowerAngle$:null, $m_upperAngle$:null, $m_maxMotorTorque$:null, $m_motorSpeed$:null, $m_enableLimit$:null, $m_enableMotor$:null, $m_limitState$:0});
var $b2RevoluteJoint$tImpulse$$ = new $b2Vec2$$;
// Input 61
// Input 62
function $b2World$$($worldAABB$$1$$, $gravity$$1$$, $doSleep$$) {
  this.$step$ = new $b2TimeStep$$;
  this.$m_contactManager$ = new $b2ContactManager$$;
  this.$m_listener$ = null;
  this.$m_filter$ = $b2CollisionFilter$b2_defaultFilter$$;
  this.$m_jointList$ = this.$m_contactList$ = this.$m_bodyList$ = null;
  this.$m_jointCount$ = this.$m_contactCount$ = this.$m_bodyCount$ = 0;
  this.$m_bodyDestroyList$ = null;
  this.$m_allowSleep$ = $doSleep$$;
  this.$m_gravity$ = $gravity$$1$$;
  this.$m_contactManager$.$m_world$ = this;
  this.$m_broadPhase$ = new $b2BroadPhase$$($worldAABB$$1$$, this.$m_contactManager$);
  this.$m_groundBody$ = this.$CreateBody$(new $b2BodyDef$$)
}
$b2World$$.prototype = {$CreateBody$:function $$b2World$$$$$CreateBody$$($b$$19_def$$12$$) {
  $b$$19_def$$12$$ = new $b2Body$$($b$$19_def$$12$$, this);
  $b$$19_def$$12$$.$m_prev$ = null;
  if($b$$19_def$$12$$.$m_next$ = this.$m_bodyList$) {
    this.$m_bodyList$.$m_prev$ = $b$$19_def$$12$$
  }
  this.$m_bodyList$ = $b$$19_def$$12$$;
  ++this.$m_bodyCount$;
  return $b$$19_def$$12$$
}, $DestroyBody$:function $$b2World$$$$$DestroyBody$$($b$$20$$) {
  if(!($b$$20$$.$m_flags$ & 32)) {
    if($b$$20$$.$m_prev$) {
      $b$$20$$.$m_prev$.$m_next$ = $b$$20$$.$m_next$
    }
    if($b$$20$$.$m_next$) {
      $b$$20$$.$m_next$.$m_prev$ = $b$$20$$.$m_prev$
    }
    if($b$$20$$ == this.$m_bodyList$) {
      this.$m_bodyList$ = $b$$20$$.$m_next$
    }
    $b$$20$$.$m_flags$ |= 32;
    --this.$m_bodyCount$;
    $b$$20$$.$m_prev$ = null;
    $b$$20$$.$m_next$ = this.$m_bodyDestroyList$;
    this.$m_bodyDestroyList$ = $b$$20$$
  }
}, $CleanBodyList$:function $$b2World$$$$$CleanBodyList$$() {
  this.$m_contactManager$.$m_destroyImmediate$ = true;
  for(var $b$$21$$ = this.$m_bodyDestroyList$;$b$$21$$;) {
    var $b0$$ = $b$$21$$;
    $b$$21$$ = $b$$21$$.$m_next$;
    for(var $jn$$1$$ = $b0$$.$m_jointList$;$jn$$1$$;) {
      var $jn0$$ = $jn$$1$$;
      $jn$$1$$ = $jn$$1$$.next;
      this.$DestroyJoint$($jn0$$.$joint$)
    }
    $b0$$.$Destroy$()
  }
  this.$m_bodyDestroyList$ = null;
  this.$m_contactManager$.$m_destroyImmediate$ = false
}, $CreateJoint$:function $$b2World$$$$$CreateJoint$$($def$$13_s$$18$$) {
  var $j$$13_joint$$inline_260$$;
  $j$$13_joint$$inline_260$$ = null;
  switch($def$$13_s$$18$$.type) {
    case 3:
      $j$$13_joint$$inline_260$$ = new $b2DistanceJoint$$($def$$13_s$$18$$);
      break;
    case 5:
      $j$$13_joint$$inline_260$$ = new $b2MouseJoint$$($def$$13_s$$18$$);
      break;
    case 2:
      $j$$13_joint$$inline_260$$ = new $b2PrismaticJoint$$($def$$13_s$$18$$);
      break;
    case 1:
      $j$$13_joint$$inline_260$$ = new $b2RevoluteJoint$$($def$$13_s$$18$$);
      break;
    case 4:
      $j$$13_joint$$inline_260$$ = new $b2PulleyJoint$$($def$$13_s$$18$$);
      break;
    case 6:
      $j$$13_joint$$inline_260$$ = new $b2GearJoint$$($def$$13_s$$18$$);
      break;
    default:
      break
  }
  $j$$13_joint$$inline_260$$ = $j$$13_joint$$inline_260$$;
  $j$$13_joint$$inline_260$$.$m_prev$ = null;
  if($j$$13_joint$$inline_260$$.$m_next$ = this.$m_jointList$) {
    this.$m_jointList$.$m_prev$ = $j$$13_joint$$inline_260$$
  }
  this.$m_jointList$ = $j$$13_joint$$inline_260$$;
  ++this.$m_jointCount$;
  $j$$13_joint$$inline_260$$.$m_node1$.$joint$ = $j$$13_joint$$inline_260$$;
  $j$$13_joint$$inline_260$$.$m_node1$.$other$ = $j$$13_joint$$inline_260$$.$m_body2$;
  $j$$13_joint$$inline_260$$.$m_node1$.$prev$ = null;
  if($j$$13_joint$$inline_260$$.$m_node1$.next = $j$$13_joint$$inline_260$$.$m_body1$.$m_jointList$) {
    $j$$13_joint$$inline_260$$.$m_body1$.$m_jointList$.$prev$ = $j$$13_joint$$inline_260$$.$m_node1$
  }
  $j$$13_joint$$inline_260$$.$m_body1$.$m_jointList$ = $j$$13_joint$$inline_260$$.$m_node1$;
  $j$$13_joint$$inline_260$$.$m_node2$.$joint$ = $j$$13_joint$$inline_260$$;
  $j$$13_joint$$inline_260$$.$m_node2$.$other$ = $j$$13_joint$$inline_260$$.$m_body1$;
  $j$$13_joint$$inline_260$$.$m_node2$.$prev$ = null;
  if($j$$13_joint$$inline_260$$.$m_node2$.next = $j$$13_joint$$inline_260$$.$m_body2$.$m_jointList$) {
    $j$$13_joint$$inline_260$$.$m_body2$.$m_jointList$.$prev$ = $j$$13_joint$$inline_260$$.$m_node2$
  }
  $j$$13_joint$$inline_260$$.$m_body2$.$m_jointList$ = $j$$13_joint$$inline_260$$.$m_node2$;
  if($def$$13_s$$18$$.$collideConnected$ == false) {
    for($def$$13_s$$18$$ = ($def$$13_s$$18$$.$body1$.$m_shapeCount$ < $def$$13_s$$18$$.$body2$.$m_shapeCount$ ? $def$$13_s$$18$$.$body1$ : $def$$13_s$$18$$.$body2$).$m_shapeList$;$def$$13_s$$18$$;$def$$13_s$$18$$ = $def$$13_s$$18$$.$m_next$) {
      $def$$13_s$$18$$.$ResetProxy$(this.$m_broadPhase$)
    }
  }
  return $j$$13_joint$$inline_260$$
}, $DestroyJoint$:function $$b2World$$$$$DestroyJoint$$($j$$14_s$$19$$) {
  var $collideConnected$$ = $j$$14_s$$19$$.$m_collideConnected$;
  if($j$$14_s$$19$$.$m_prev$) {
    $j$$14_s$$19$$.$m_prev$.$m_next$ = $j$$14_s$$19$$.$m_next$
  }
  if($j$$14_s$$19$$.$m_next$) {
    $j$$14_s$$19$$.$m_next$.$m_prev$ = $j$$14_s$$19$$.$m_prev$
  }
  if($j$$14_s$$19$$ == this.$m_jointList$) {
    this.$m_jointList$ = $j$$14_s$$19$$.$m_next$
  }
  var $body1$$3$$ = $j$$14_s$$19$$.$m_body1$, $body2$$3$$ = $j$$14_s$$19$$.$m_body2$;
  $body1$$3$$.$WakeUp$();
  $body2$$3$$.$WakeUp$();
  if($j$$14_s$$19$$.$m_node1$.$prev$) {
    $j$$14_s$$19$$.$m_node1$.$prev$.next = $j$$14_s$$19$$.$m_node1$.next
  }
  if($j$$14_s$$19$$.$m_node1$.next) {
    $j$$14_s$$19$$.$m_node1$.next.$prev$ = $j$$14_s$$19$$.$m_node1$.$prev$
  }
  if($j$$14_s$$19$$.$m_node1$ == $body1$$3$$.$m_jointList$) {
    $body1$$3$$.$m_jointList$ = $j$$14_s$$19$$.$m_node1$.next
  }
  $j$$14_s$$19$$.$m_node1$.$prev$ = null;
  $j$$14_s$$19$$.$m_node1$.next = null;
  if($j$$14_s$$19$$.$m_node2$.$prev$) {
    $j$$14_s$$19$$.$m_node2$.$prev$.next = $j$$14_s$$19$$.$m_node2$.next
  }
  if($j$$14_s$$19$$.$m_node2$.next) {
    $j$$14_s$$19$$.$m_node2$.next.$prev$ = $j$$14_s$$19$$.$m_node2$.$prev$
  }
  if($j$$14_s$$19$$.$m_node2$ == $body2$$3$$.$m_jointList$) {
    $body2$$3$$.$m_jointList$ = $j$$14_s$$19$$.$m_node2$.next
  }
  $j$$14_s$$19$$.$m_node2$.$prev$ = null;
  $j$$14_s$$19$$.$m_node2$.next = null;
  --this.$m_jointCount$;
  if($collideConnected$$ == false) {
    for($j$$14_s$$19$$ = ($body1$$3$$.$m_shapeCount$ < $body2$$3$$.$m_shapeCount$ ? $body1$$3$$ : $body2$$3$$).$m_shapeList$;$j$$14_s$$19$$;$j$$14_s$$19$$ = $j$$14_s$$19$$.$m_next$) {
      $j$$14_s$$19$$.$ResetProxy$(this.$m_broadPhase$)
    }
  }
}, $step$:new $b2TimeStep$$, $Step$:function $$b2World$$$$$Step$$($dt$$1$$, $iterations$$) {
  var $b$$24_jn$$2_node1$$inline_281$$, $i$$43_node2$$inline_282_other$$5$$;
  this.$step$.$dt$ = $dt$$1$$;
  this.$step$.$iterations$ = $iterations$$;
  this.$step$.$inv_dt$ = $dt$$1$$ > 0 ? 1 / $dt$$1$$ : 0;
  this.$m_positionIterationCount$ = 0;
  for(var $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$ = this.$m_contactManager$, $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_world$.$m_contactList$;$body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ != null;) {
    var $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ = $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$;
    $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$.$m_next$;
    $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$.$m_flags$ & 2 && $JSCompiler_StaticMethods_DestroyContact$$($JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$, $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$)
  }
  this.$CleanBodyList$();
  for($JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$ = this.$m_contactManager$.$m_world$.$m_contactList$;$JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$ != null;$JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_next$) {
    if(!($JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_shape1$.$m_body$.$IsSleeping$() && $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_shape2$.$m_body$.$IsSleeping$())) {
      $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_manifoldCount$;
      $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$Evaluate$();
      $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_manifoldCount$;
      if($body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ == 0 && $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ > 0) {
        $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_shape1$.$m_body$;
        $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_shape2$.$m_body$;
        $b$$24_jn$$2_node1$$inline_281$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_node1$;
        $i$$43_node2$$inline_282_other$$5$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_node2$;
        $b$$24_jn$$2_node1$$inline_281$$.$contact$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$;
        $b$$24_jn$$2_node1$$inline_281$$.$other$ = $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$;
        $b$$24_jn$$2_node1$$inline_281$$.$prev$ = null;
        $b$$24_jn$$2_node1$$inline_281$$.next = $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$.$m_contactList$;
        if($b$$24_jn$$2_node1$$inline_281$$.next != null) {
          $b$$24_jn$$2_node1$$inline_281$$.next.$prev$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_node1$
        }
        $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$.$m_contactList$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_node1$;
        $i$$43_node2$$inline_282_other$$5$$.$contact$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$;
        $i$$43_node2$$inline_282_other$$5$$.$other$ = $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$;
        $i$$43_node2$$inline_282_other$$5$$.$prev$ = null;
        $i$$43_node2$$inline_282_other$$5$$.next = $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$.$m_contactList$;
        if($i$$43_node2$$inline_282_other$$5$$.next != null) {
          $i$$43_node2$$inline_282_other$$5$$.next.$prev$ = $i$$43_node2$$inline_282_other$$5$$
        }
        $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$.$m_contactList$ = $i$$43_node2$$inline_282_other$$5$$
      }else {
        if($body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ > 0 && $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ == 0) {
          $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_shape1$.$m_body$;
          $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_shape2$.$m_body$;
          $b$$24_jn$$2_node1$$inline_281$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_node1$;
          $i$$43_node2$$inline_282_other$$5$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_node2$;
          if($b$$24_jn$$2_node1$$inline_281$$.$prev$) {
            $b$$24_jn$$2_node1$$inline_281$$.$prev$.next = $b$$24_jn$$2_node1$$inline_281$$.next
          }
          if($b$$24_jn$$2_node1$$inline_281$$.next) {
            $b$$24_jn$$2_node1$$inline_281$$.next.$prev$ = $b$$24_jn$$2_node1$$inline_281$$.$prev$
          }
          if($b$$24_jn$$2_node1$$inline_281$$ == $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$.$m_contactList$) {
            $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$.$m_contactList$ = $b$$24_jn$$2_node1$$inline_281$$.next
          }
          $b$$24_jn$$2_node1$$inline_281$$.$prev$ = null;
          $b$$24_jn$$2_node1$$inline_281$$.next = null;
          if($i$$43_node2$$inline_282_other$$5$$.$prev$) {
            $i$$43_node2$$inline_282_other$$5$$.$prev$.next = $i$$43_node2$$inline_282_other$$5$$.next
          }
          if($i$$43_node2$$inline_282_other$$5$$.next) {
            $i$$43_node2$$inline_282_other$$5$$.next.$prev$ = $i$$43_node2$$inline_282_other$$5$$.$prev$
          }
          if($i$$43_node2$$inline_282_other$$5$$ == $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$.$m_contactList$) {
            $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$.$m_contactList$ = $i$$43_node2$$inline_282_other$$5$$.next
          }
          $i$$43_node2$$inline_282_other$$5$$.$prev$ = null;
          $i$$43_node2$$inline_282_other$$5$$.next = null
        }
      }
    }
  }
  $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$ = new $b2Island$$(this.$m_bodyCount$, this.$m_contactCount$, this.$m_jointCount$, this.$m_stackAllocator$);
  for($b$$24_jn$$2_node1$$inline_281$$ = this.$m_bodyList$;$b$$24_jn$$2_node1$$inline_281$$ != null;$b$$24_jn$$2_node1$$inline_281$$ = $b$$24_jn$$2_node1$$inline_281$$.$m_next$) {
    $b$$24_jn$$2_node1$$inline_281$$.$m_flags$ &= -5
  }
  for($body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = this.$m_contactList$;$body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ != null;$body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$.$m_next$) {
    $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$.$m_flags$ &= -2
  }
  for($body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = this.$m_jointList$;$body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ != null;$body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$.$m_next$) {
    $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$.$m_islandFlag$ = false
  }
  $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$ = Array(this.$m_bodyCount$);
  for($body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ = 0;$body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ < this.$m_bodyCount$;$body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$++) {
    $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$[$body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$] = null
  }
  for($body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ = this.$m_bodyList$;$body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ != null;$body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$ = $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$.$m_next$) {
    if(!($body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$.$m_flags$ & ($b2Body$e_staticFlag$$ | 4 | $b2Body$e_sleepFlag$$ | $b2Body$e_frozenFlag$$))) {
      $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$Clear$();
      var $stackCount$$ = 0;
      $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$[$stackCount$$++] = $body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$;
      for($body2$$inline_280_c0$$inline_268_k$$3_newCount$$inline_285_seed$$.$m_flags$ |= 4;$stackCount$$ > 0;) {
        $b$$24_jn$$2_node1$$inline_281$$ = $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$[--$stackCount$$];
        $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$AddBody$($b$$24_jn$$2_node1$$inline_281$$);
        $b$$24_jn$$2_node1$$inline_281$$.$m_flags$ &= ~$b2Body$e_sleepFlag$$;
        if(!($b$$24_jn$$2_node1$$inline_281$$.$m_flags$ & $b2Body$e_staticFlag$$)) {
          for(var $cn$$ = $b$$24_jn$$2_node1$$inline_281$$.$m_contactList$;$cn$$ != null;$cn$$ = $cn$$.next) {
            if(!($cn$$.$contact$.$m_flags$ & 1)) {
              $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$AddContact$($cn$$.$contact$);
              $cn$$.$contact$.$m_flags$ |= 1;
              $i$$43_node2$$inline_282_other$$5$$ = $cn$$.$other$;
              if(!($i$$43_node2$$inline_282_other$$5$$.$m_flags$ & 4)) {
                $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$[$stackCount$$++] = $i$$43_node2$$inline_282_other$$5$$;
                $i$$43_node2$$inline_282_other$$5$$.$m_flags$ |= 4
              }
            }
          }
          for($b$$24_jn$$2_node1$$inline_281$$ = $b$$24_jn$$2_node1$$inline_281$$.$m_jointList$;$b$$24_jn$$2_node1$$inline_281$$ != null;$b$$24_jn$$2_node1$$inline_281$$ = $b$$24_jn$$2_node1$$inline_281$$.next) {
            if($b$$24_jn$$2_node1$$inline_281$$.$joint$.$m_islandFlag$ != true) {
              $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$AddJoint$($b$$24_jn$$2_node1$$inline_281$$.$joint$);
              $b$$24_jn$$2_node1$$inline_281$$.$joint$.$m_islandFlag$ = true;
              $i$$43_node2$$inline_282_other$$5$$ = $b$$24_jn$$2_node1$$inline_281$$.$other$;
              if(!($i$$43_node2$$inline_282_other$$5$$.$m_flags$ & 4)) {
                $body1$$inline_279_c$$16_c$$inline_267_j$$15_oldCount$$inline_284_stack$$[$stackCount$$++] = $i$$43_node2$$inline_282_other$$5$$;
                $i$$43_node2$$inline_282_other$$5$$.$m_flags$ |= 4
              }
            }
          }
        }
      }
      $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$Solve$(this.$step$, this.$m_gravity$);
      this.$m_positionIterationCount$ = $b2Math$b2Max$$(this.$m_positionIterationCount$, $b2Island$m_positionIterationCount$$);
      this.$m_allowSleep$ && $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$UpdateSleep$($dt$$1$$);
      for($i$$43_node2$$inline_282_other$$5$$ = 0;$i$$43_node2$$inline_282_other$$5$$ < $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_bodyCount$;++$i$$43_node2$$inline_282_other$$5$$) {
        $b$$24_jn$$2_node1$$inline_281$$ = $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_bodies$[$i$$43_node2$$inline_282_other$$5$$];
        if($b$$24_jn$$2_node1$$inline_281$$.$m_flags$ & $b2Body$e_staticFlag$$) {
          $b$$24_jn$$2_node1$$inline_281$$.$m_flags$ &= -5
        }
        if($b$$24_jn$$2_node1$$inline_281$$.$IsFrozen$() && this.$m_listener$) {
          if(this.$m_listener$.$NotifyBoundaryViolated$($b$$24_jn$$2_node1$$inline_281$$) == 1) {
            this.$DestroyBody$($b$$24_jn$$2_node1$$inline_281$$);
            $JSCompiler_StaticMethods_CleanContactList$self$$inline_266_c$$inline_283_island$$.$m_bodies$[$i$$43_node2$$inline_282_other$$5$$] = null
          }
        }
      }
    }
  }
  this.$m_broadPhase$.$Commit$()
}, $Query$:function $$b2World$$$$$Query$$($aabb$$10_count$$8$$, $shapes$$, $i$$44_maxCount$$1$$) {
  var $results$$ = [];
  $aabb$$10_count$$8$$ = this.$m_broadPhase$.$QueryAABB$($aabb$$10_count$$8$$, $results$$, $i$$44_maxCount$$1$$);
  for($i$$44_maxCount$$1$$ = 0;$i$$44_maxCount$$1$$ < $aabb$$10_count$$8$$;++$i$$44_maxCount$$1$$) {
    $shapes$$[$i$$44_maxCount$$1$$] = $results$$[$i$$44_maxCount$$1$$]
  }
  return $aabb$$10_count$$8$$
}, $m_blockAllocator$:null, $m_stackAllocator$:null, $m_broadPhase$:null, $m_contactManager$:new $b2ContactManager$$, $m_bodyList$:null, $m_contactList$:null, $m_jointList$:null, $m_bodyCount$:0, $m_contactCount$:0, $m_jointCount$:0, $m_bodyDestroyList$:null, $m_gravity$:null, $m_allowSleep$:null, $m_groundBody$:null, $m_listener$:null, $m_filter$:null, $m_positionIterationCount$:0};
var $b2World$s_enablePositionCorrection$$ = 1, $b2World$s_enableWarmStarting$$ = 1;
// Input 63
function $b2RevoluteJointDef$$() {
  this.type = 0;
  this.$body2$ = this.$body1$ = this.$userData$ = null;
  this.$collideConnected$ = false;
  this.type = 1;
  this.$anchorPoint$ = new $b2Vec2$$(0, 0);
  this.$motorSpeed$ = this.$motorTorque$ = this.$upperAngle$ = this.$lowerAngle$ = 0;
  this.$enableMotor$ = this.$enableLimit$ = false
}
Object.extend($b2RevoluteJointDef$$.prototype, $b2JointDef$$.prototype);
Object.extend($b2RevoluteJointDef$$.prototype, {$anchorPoint$:null, $lowerAngle$:null, $upperAngle$:null, $motorTorque$:null, $motorSpeed$:null, $enableLimit$:null, $enableMotor$:null});
// Input 64
function $demoDraw$drawWorld$$($world$$2$$, $context$$1$$) {
  for(var $b$$25_j$$16$$ = $world$$2$$.$m_jointList$;$b$$25_j$$16$$;$b$$25_j$$16$$ = $b$$25_j$$16$$.$m_next$) {
    var $s$$20_world$$inline_296$$ = $world$$2$$, $context$$inline_316_joint$$inline_297$$ = $b$$25_j$$16$$, $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$ = $context$$1$$, $b1$$inline_299_pos$$inline_317_tV$$inline_321$$ = $context$$inline_316_joint$$inline_297$$.$m_body1$, $b2$$inline_300_i$$inline_322_r$$inline_318$$ = $context$$inline_316_joint$$inline_297$$.$m_body2$, $v$$inline_323_x1$$inline_301$$ = $b1$$inline_299_pos$$inline_317_tV$$inline_321$$.$m_position$, $x2$$inline_302$$ = 
    $b2$$inline_300_i$$inline_322_r$$inline_318$$.$m_position$, $p1$$inline_303$$ = $context$$inline_316_joint$$inline_297$$.$GetAnchor1$(), $p2$$inline_304$$ = $context$$inline_316_joint$$inline_297$$.$GetAnchor2$();
    $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.strokeStyle = "#00eeee";
    $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.beginPath();
    switch($context$$inline_316_joint$$inline_297$$.$m_type$) {
      case 3:
        $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.moveTo($p1$$inline_303$$.x, $p1$$inline_303$$.y);
        $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.lineTo($p2$$inline_304$$.x, $p2$$inline_304$$.y);
        break;
      case 4:
        break;
      default:
        if($b1$$inline_299_pos$$inline_317_tV$$inline_321$$ == $s$$20_world$$inline_296$$.$m_groundBody$) {
          $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.moveTo($p1$$inline_303$$.x, $p1$$inline_303$$.y);
          $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.lineTo($x2$$inline_302$$.x, $x2$$inline_302$$.y)
        }else {
          if($b2$$inline_300_i$$inline_322_r$$inline_318$$ == $s$$20_world$$inline_296$$.$m_groundBody$) {
            $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.moveTo($p1$$inline_303$$.x, $p1$$inline_303$$.y);
            $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.lineTo($v$$inline_323_x1$$inline_301$$.x, $v$$inline_323_x1$$inline_301$$.y)
          }else {
            $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.moveTo($v$$inline_323_x1$$inline_301$$.x, $v$$inline_323_x1$$inline_301$$.y);
            $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.lineTo($p1$$inline_303$$.x, $p1$$inline_303$$.y);
            $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.lineTo($x2$$inline_302$$.x, $x2$$inline_302$$.y);
            $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.lineTo($p2$$inline_304$$.x, $p2$$inline_304$$.y)
          }
        }
        break
    }
    $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.stroke()
  }
  for($b$$25_j$$16$$ = $world$$2$$.$m_bodyList$;$b$$25_j$$16$$;$b$$25_j$$16$$ = $b$$25_j$$16$$.$m_next$) {
    for($s$$20_world$$inline_296$$ = $b$$25_j$$16$$.$m_shapeList$;$s$$20_world$$inline_296$$ != null;$s$$20_world$$inline_296$$ = $s$$20_world$$inline_296$$.$GetNext$()) {
      $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$ = $s$$20_world$$inline_296$$;
      $context$$inline_316_joint$$inline_297$$ = $context$$1$$;
      $context$$inline_316_joint$$inline_297$$.strokeStyle = "#ffffff";
      $context$$inline_316_joint$$inline_297$$.beginPath();
      switch($ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_type$) {
        case 0:
          $b1$$inline_299_pos$$inline_317_tV$$inline_321$$ = $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_position$;
          $b2$$inline_300_i$$inline_322_r$$inline_318$$ = $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_radius$;
          $context$$inline_316_joint$$inline_297$$.arc($ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_position$.x, $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_position$.y, $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_radius$, 0, 2 * Math.PI, false);
          $context$$inline_316_joint$$inline_297$$.moveTo($b1$$inline_299_pos$$inline_317_tV$$inline_321$$.x, $b1$$inline_299_pos$$inline_317_tV$$inline_321$$.y);
          $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$ = $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_R$.$col1$;
          $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$ = new $b2Vec2$$($b1$$inline_299_pos$$inline_317_tV$$inline_321$$.x + $b2$$inline_300_i$$inline_322_r$$inline_318$$ * $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.x, $b1$$inline_299_pos$$inline_317_tV$$inline_321$$.y + $b2$$inline_300_i$$inline_322_r$$inline_318$$ * $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.y);
          $context$$inline_316_joint$$inline_297$$.lineTo($ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.x, $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.y);
          break;
        case 2:
          $b1$$inline_299_pos$$inline_317_tV$$inline_321$$ = $b2Math$AddVV$$($ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_position$, $b2Math$b2MulMV$$($ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_R$, $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_vertices$[0]));
          $context$$inline_316_joint$$inline_297$$.moveTo($b1$$inline_299_pos$$inline_317_tV$$inline_321$$.x, $b1$$inline_299_pos$$inline_317_tV$$inline_321$$.y);
          for($b2$$inline_300_i$$inline_322_r$$inline_318$$ = 0;$b2$$inline_300_i$$inline_322_r$$inline_318$$ < $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_vertexCount$;$b2$$inline_300_i$$inline_322_r$$inline_318$$++) {
            $v$$inline_323_x1$$inline_301$$ = $b2Math$AddVV$$($ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_position$, $b2Math$b2MulMV$$($ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_R$, $ax$$inline_319_context$$inline_298_pos2$$inline_320_shape$$inline_315$$.$m_vertices$[$b2$$inline_300_i$$inline_322_r$$inline_318$$]));
            $context$$inline_316_joint$$inline_297$$.lineTo($v$$inline_323_x1$$inline_301$$.x, $v$$inline_323_x1$$inline_301$$.y)
          }
          $context$$inline_316_joint$$inline_297$$.lineTo($b1$$inline_299_pos$$inline_317_tV$$inline_321$$.x, $b1$$inline_299_pos$$inline_317_tV$$inline_321$$.y);
          break
      }
      $context$$inline_316_joint$$inline_297$$.stroke()
    }
  }
}
;
// Input 65
function $demos$compound$$($world$$4$$) {
  var $i$$46$$;
  for($i$$46$$ = 1;$i$$46$$ <= 4;$i$$46$$++) {
    var $world$$inline_335_world$$inline_352$$ = $world$$4$$, $x$$inline_336_x$$inline_353$$ = 150 + 3 * Math.random(), $y$$inline_337_y$$inline_354$$ = 40 * $i$$46$$, $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$ = [[-30, 0], [30, 0], [0, 15]], $ballSd1$$inline_355_polySd1$$inline_339$$ = new $b2PolyDef$$;
    $ballSd1$$inline_355_polySd1$$inline_339$$.$vertexCount$ = $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.length;
    var $i$$inline_340$$ = void 0;
    for($i$$inline_340$$ = 0;$i$$inline_340$$ < $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.length;$i$$inline_340$$++) {
      $ballSd1$$inline_355_polySd1$$inline_339$$.$vertices$[$i$$inline_340$$].$Set$($R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$[$i$$inline_340$$][0], $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$[$i$$inline_340$$][1])
    }
    $ballSd1$$inline_355_polySd1$$inline_339$$.$localRotation$ = 0.3524 * Math.PI;
    var $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$ = new $b2Mat22$$($ballSd1$$inline_355_polySd1$$inline_339$$.$localRotation$);
    $ballSd1$$inline_355_polySd1$$inline_339$$.$localPosition$ = $b2Math$b2MulMV$$($R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$, new $b2Vec2$$(30, 0));
    $ballSd1$$inline_355_polySd1$$inline_339$$.$density$ = 1;
    $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$ = new $b2PolyDef$$;
    $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$.$vertexCount$ = $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.length;
    for($i$$inline_340$$ = 0;$i$$inline_340$$ < $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.length;$i$$inline_340$$++) {
      $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$.$vertices$[$i$$inline_340$$].$Set$($R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$[$i$$inline_340$$][0], $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$[$i$$inline_340$$][1])
    }
    $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$.$localRotation$ = -0.3524 * Math.PI;
    $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$ = new $b2Mat22$$($R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$.$localRotation$);
    $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$.$localPosition$ = $b2Math$b2MulMV$$($R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$, new $b2Vec2$$(-30, 0));
    $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$ = new $b2BodyDef$$;
    $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.$AddShape$($ballSd1$$inline_355_polySd1$$inline_339$$);
    $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.$AddShape$($R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$);
    $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.position.$Set$($x$$inline_336_x$$inline_353$$, $y$$inline_337_y$$inline_354$$);
    $world$$inline_335_world$$inline_352$$.$CreateBody$($R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$)
  }
  for($i$$46$$ = 1;$i$$46$$ <= 4;$i$$46$$++) {
    $world$$inline_335_world$$inline_352$$ = $world$$4$$;
    $x$$inline_336_x$$inline_353$$ = 350 + 3 * Math.random();
    $y$$inline_337_y$$inline_354$$ = 45 * $i$$46$$;
    $ballSd1$$inline_355_polySd1$$inline_339$$ = new $b2CircleDef$$;
    $ballSd1$$inline_355_polySd1$$inline_339$$.$density$ = 1;
    $ballSd1$$inline_355_polySd1$$inline_339$$.$radius$ = 20;
    $ballSd1$$inline_355_polySd1$$inline_339$$.$restitution$ = 0.2;
    $ballSd1$$inline_355_polySd1$$inline_339$$.$localPosition$.$Set$(-20, 0);
    $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$ = new $b2CircleDef$$;
    $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$.$density$ = 1;
    $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$.$radius$ = 20;
    $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$.$restitution$ = 0.2;
    $R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$.$localPosition$.$Set$(20, 0);
    $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$ = new $b2BodyDef$$;
    $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.$AddShape$($ballSd1$$inline_355_polySd1$$inline_339$$);
    $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.$AddShape$($R1$$inline_341_ballSd2$$inline_356_polySd2$$inline_342$$);
    $R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$.position.$Set$($x$$inline_336_x$$inline_353$$, $y$$inline_337_y$$inline_354$$);
    $world$$inline_335_world$$inline_352$$.$CreateBody$($R2$$inline_343_ballBd$$inline_357_points$$inline_338_polyBd$$inline_344$$)
  }
}
;
// Input 66
function $demos$crank$$($world$$7$$) {
  var $ground$$ = $world$$7$$.$m_groundBody$, $sd$$2$$ = new $b2BoxDef$$;
  $sd$$2$$.$extents$.$Set$(5, 25);
  $sd$$2$$.$density$ = 1;
  var $bd$$2$$ = new $b2BodyDef$$;
  $bd$$2$$.$AddShape$($sd$$2$$);
  var $pjd_rjd$$ = new $b2RevoluteJointDef$$, $prevBody$$ = $ground$$;
  $bd$$2$$.position.$Set$(250, 210);
  var $body$$8$$ = $world$$7$$.$CreateBody$($bd$$2$$);
  $pjd_rjd$$.$anchorPoint$.$Set$(250, 235);
  $pjd_rjd$$.$body1$ = $prevBody$$;
  $pjd_rjd$$.$body2$ = $body$$8$$;
  $pjd_rjd$$.$motorSpeed$ = -1 * Math.PI;
  $pjd_rjd$$.$motorTorque$ = 5E8;
  $pjd_rjd$$.$enableMotor$ = true;
  $world$$7$$.$CreateJoint$($pjd_rjd$$);
  $prevBody$$ = $body$$8$$;
  $sd$$2$$.$extents$.$Set$(5, 45);
  $bd$$2$$.position.$Set$(250, 140);
  $body$$8$$ = $world$$7$$.$CreateBody$($bd$$2$$);
  $pjd_rjd$$.$anchorPoint$.$Set$(250, 185);
  $pjd_rjd$$.$body1$ = $prevBody$$;
  $pjd_rjd$$.$body2$ = $body$$8$$;
  $pjd_rjd$$.$enableMotor$ = false;
  $world$$7$$.$CreateJoint$($pjd_rjd$$);
  $prevBody$$ = $body$$8$$;
  $sd$$2$$.$extents$.$Set$(20, 20);
  $bd$$2$$.position.$Set$(250, 95);
  $body$$8$$ = $world$$7$$.$CreateBody$($bd$$2$$);
  $pjd_rjd$$.$anchorPoint$.$Set$(250, 95);
  $pjd_rjd$$.$body1$ = $prevBody$$;
  $pjd_rjd$$.$body2$ = $body$$8$$;
  $world$$7$$.$CreateJoint$($pjd_rjd$$);
  $pjd_rjd$$ = new $b2PrismaticJointDef$$;
  $pjd_rjd$$.$anchorPoint$.$Set$(250, 95);
  $pjd_rjd$$.$body1$ = $ground$$;
  $pjd_rjd$$.$body2$ = $body$$8$$;
  $pjd_rjd$$.axis.$Set$(0, 1);
  $pjd_rjd$$.$motorSpeed$ = 0;
  $pjd_rjd$$.$motorForce$ = 1E5;
  $pjd_rjd$$.$enableMotor$ = true;
  $world$$7$$.$CreateJoint$($pjd_rjd$$);
  $sd$$2$$.$density$ = 2;
  $bd$$2$$.position.$Set$(250, 10);
  $world$$7$$.$CreateBody$($bd$$2$$)
}
;
// Input 67
function $demos$pendulum$$($world$$8$$) {
  var $i$$48$$, $ground$$1$$ = $world$$8$$.$m_groundBody$, $jointDef$$ = new $b2RevoluteJointDef$$;
  for($i$$48$$ = 0;$i$$48$$ < 4;$i$$48$$++) {
    $jointDef$$.$anchorPoint$.$Set$(250 + 40 * $i$$48$$, 50);
    $jointDef$$.$body1$ = $ground$$1$$;
    $jointDef$$.$body2$ = $createBall$$($world$$8$$, 250 + 40 * $i$$48$$, 200);
    $world$$8$$.$CreateJoint$($jointDef$$)
  }
  $jointDef$$.$anchorPoint$.$Set$(210, 50);
  $jointDef$$.$body1$ = $ground$$1$$;
  $jointDef$$.$body2$ = $createBall$$($world$$8$$, 60, 50);
  $world$$8$$.$CreateJoint$($jointDef$$)
}
;
// Input 68
function $demos$stack$$($world$$9$$) {
  var $i$$49_sd$$3$$ = new $b2BoxDef$$, $bd$$3$$ = new $b2BodyDef$$;
  $bd$$3$$.$AddShape$($i$$49_sd$$3$$);
  $i$$49_sd$$3$$.$density$ = 1;
  $i$$49_sd$$3$$.$friction$ = 0.5;
  $i$$49_sd$$3$$.$extents$.$Set$(10, 10);
  for($i$$49_sd$$3$$ = 0;$i$$49_sd$$3$$ < 8;$i$$49_sd$$3$$++) {
    $bd$$3$$.position.$Set$(250 - Math.random() * 2 - 1, 245 - $i$$49_sd$$3$$ * 22);
    $world$$9$$.$CreateBody$($bd$$3$$)
  }
  for($i$$49_sd$$3$$ = 0;$i$$49_sd$$3$$ < 8;$i$$49_sd$$3$$++) {
    $bd$$3$$.position.$Set$(150 - Math.random() * 5 + $i$$49_sd$$3$$, 245 - $i$$49_sd$$3$$ * 22);
    $world$$9$$.$CreateBody$($bd$$3$$)
  }
  for($i$$49_sd$$3$$ = 0;$i$$49_sd$$3$$ < 8;$i$$49_sd$$3$$++) {
    $bd$$3$$.position.$Set$(350 + Math.random() * 5 - $i$$49_sd$$3$$, 245 - $i$$49_sd$$3$$ * 22);
    $world$$9$$.$CreateBody$($bd$$3$$)
  }
}
;
// Input 69
function $demos$top$$($world$$10$$) {
  var $ballSd$$inline_371_jointDef$$1$$ = new $b2CircleDef$$;
  $ballSd$$inline_371_jointDef$$1$$.$radius$ = 50;
  $ballSd$$inline_371_jointDef$$1$$.$restitution$ = 0.2;
  var $ballBd$$inline_372_pendulum_seesaw$$ = new $b2BodyDef$$;
  $ballBd$$inline_372_pendulum_seesaw$$.$AddShape$($ballSd$$inline_371_jointDef$$1$$);
  $ballBd$$inline_372_pendulum_seesaw$$.position.$Set$(350, 100);
  $world$$10$$.$CreateBody$($ballBd$$inline_372_pendulum_seesaw$$);
  $demos$top$createPoly$$($world$$10$$, 100, 100, [[0, 0], [10, 30], [-10, 30]], true);
  $demos$top$createPoly$$($world$$10$$, 150, 150, [[0, 0], [10, 30], [-10, 30]], true);
  $ballBd$$inline_372_pendulum_seesaw$$ = $createBox$$($world$$10$$, 150, 100, 20, 20, false);
  $ballSd$$inline_371_jointDef$$1$$ = new $b2RevoluteJointDef$$;
  $ballSd$$inline_371_jointDef$$1$$.$body1$ = $ballBd$$inline_372_pendulum_seesaw$$;
  $ballSd$$inline_371_jointDef$$1$$.$body2$ = $world$$10$$.$m_groundBody$;
  $ballSd$$inline_371_jointDef$$1$$.$anchorPoint$ = $ballBd$$inline_372_pendulum_seesaw$$.$m_position$;
  $world$$10$$.$CreateJoint$($ballSd$$inline_371_jointDef$$1$$);
  $ballBd$$inline_372_pendulum_seesaw$$ = $demos$top$createPoly$$($world$$10$$, 300, 200, [[0, 0], [100, 30], [-100, 30]]);
  $ballSd$$inline_371_jointDef$$1$$.$body1$ = $ballBd$$inline_372_pendulum_seesaw$$;
  $ballSd$$inline_371_jointDef$$1$$.$anchorPoint$ = $ballBd$$inline_372_pendulum_seesaw$$.$m_position$;
  $world$$10$$.$CreateJoint$($ballSd$$inline_371_jointDef$$1$$)
}
function $demos$top$createPoly$$($world$$12$$, $x$$47$$, $y$$26$$, $points$$5_polyBd$$1$$, $fixed$$1_i$$50$$) {
  var $polySd$$ = new $b2PolyDef$$;
  if(!$fixed$$1_i$$50$$) {
    $polySd$$.$density$ = 1
  }
  $polySd$$.$vertexCount$ = $points$$5_polyBd$$1$$.length;
  for($fixed$$1_i$$50$$ = 0;$fixed$$1_i$$50$$ < $points$$5_polyBd$$1$$.length;$fixed$$1_i$$50$$++) {
    $polySd$$.$vertices$[$fixed$$1_i$$50$$].$Set$($points$$5_polyBd$$1$$[$fixed$$1_i$$50$$][0], $points$$5_polyBd$$1$$[$fixed$$1_i$$50$$][1])
  }
  $points$$5_polyBd$$1$$ = new $b2BodyDef$$;
  $points$$5_polyBd$$1$$.$AddShape$($polySd$$);
  $points$$5_polyBd$$1$$.position.$Set$($x$$47$$, $y$$26$$);
  return $world$$12$$.$CreateBody$($points$$5_polyBd$$1$$)
}
;
// Input 70
function $demo$$($canvas$$) {
  this.$m_initId$ = 0;
  this.$m_demos$ = [];
  this.$m_demos$.push($demos$compound$$);
  this.$m_demos$.push($demos$crank$$);
  this.$m_demos$.push($demos$stack$$);
  this.$m_demos$.push($demos$pendulum$$);
  this.$m_demos$.push($demos$top$$);
  this.$ctx$ = $canvas$$.getContext("2d");
  $canvasWidth$$ = $canvas$$.$getLayout$().$get$("width");
  $canvasHeight$$ = $canvas$$.$getLayout$().$get$("height");
  var $_this$$ = this;
  Event.$observe$($canvas$$, "click", function($e$$) {
    Math.random() < 0.5 ? $createBall$$($_this$$.$world$, $e$$.offsetX, $e$$.offsetY, 10) : $createBox$$($_this$$.$world$, $e$$.offsetX, $e$$.offsetY, 10, 10, false)
  });
  Event.$observe$($canvas$$, "contextmenu", function($e$$1$$) {
    $e$$1$$.preventDefault && $e$$1$$.preventDefault();
    $JSCompiler_StaticMethods__setupWorld$$($_this$$, -1);
    return false
  });
  $JSCompiler_StaticMethods__setupWorld$$(this);
  this.$world$.$Step$(1 / 60, 1);
  this.$ctx$.clearRect(0, 0, $canvasWidth$$, $canvasHeight$$);
  $demoDraw$drawWorld$$(this.$world$, this.$ctx$);
  setTimeout("_demo._step(0)", 10)
}
var $canvasWidth$$, $canvasHeight$$;
function $JSCompiler_StaticMethods__setupWorld$$($JSCompiler_StaticMethods__setupWorld$self$$, $demoId$$) {
  $demoId$$ || ($demoId$$ = 0);
  var $world$$inline_386_worldAABB$$inline_385$$ = new $b2AABB$$;
  $world$$inline_386_worldAABB$$inline_385$$.$minVertex$.$Set$(-1000, -1000);
  $world$$inline_386_worldAABB$$inline_385$$.$maxVertex$.$Set$(1E3, 1E3);
  $world$$inline_386_worldAABB$$inline_385$$ = new $b2World$$($world$$inline_386_worldAABB$$inline_385$$, new $b2Vec2$$(0, 300), true);
  var $groundSd$$inline_501$$ = new $b2BoxDef$$;
  $groundSd$$inline_501$$.$extents$.$Set$(1E3, 50);
  $groundSd$$inline_501$$.$restitution$ = 0.2;
  var $groundBd$$inline_502$$ = new $b2BodyDef$$;
  $groundBd$$inline_502$$.$AddShape$($groundSd$$inline_501$$);
  $groundBd$$inline_502$$.position.$Set$(-500, 340);
  $world$$inline_386_worldAABB$$inline_385$$.$CreateBody$($groundBd$$inline_502$$);
  $createBox$$($world$$inline_386_worldAABB$$inline_385$$, 0, 125, 10, 250);
  $createBox$$($world$$inline_386_worldAABB$$inline_385$$, 500, 125, 10, 250);
  $JSCompiler_StaticMethods__setupWorld$self$$.$world$ = $world$$inline_386_worldAABB$$inline_385$$;
  $JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$ += $demoId$$;
  $JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$ %= $JSCompiler_StaticMethods__setupWorld$self$$.$m_demos$.length;
  if(!isNaN($JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$)) {
    if($JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$ < 0) {
      $JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$ = $JSCompiler_StaticMethods__setupWorld$self$$.$m_demos$.length + $JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$
    }
    $JSCompiler_StaticMethods__setupWorld$self$$.$m_demos$[$JSCompiler_StaticMethods__setupWorld$self$$.$m_initId$]($JSCompiler_StaticMethods__setupWorld$self$$.$world$)
  }
}
function $createBall$$($world$$15$$, $x$$48$$, $y$$27$$, $ballBd$$2_radius$$3$$) {
  $ballBd$$2_radius$$3$$ || ($ballBd$$2_radius$$3$$ = 20);
  var $ballSd$$1$$ = new $b2CircleDef$$;
  $ballSd$$1$$.$density$ = 1;
  $ballSd$$1$$.$radius$ = $ballBd$$2_radius$$3$$;
  $ballSd$$1$$.$restitution$ = 1;
  $ballSd$$1$$.$friction$ = 0;
  $ballBd$$2_radius$$3$$ = new $b2BodyDef$$;
  $ballBd$$2_radius$$3$$.$AddShape$($ballSd$$1$$);
  $ballBd$$2_radius$$3$$.position.$Set$($x$$48$$, $y$$27$$);
  return $world$$15$$.$CreateBody$($ballBd$$2_radius$$3$$)
}
function $createBox$$($world$$16$$, $x$$49$$, $y$$28$$, $boxBd_width$$3$$, $height$$3$$, $fixed$$2$$) {
  if(typeof $fixed$$2$$ == "undefined") {
    $fixed$$2$$ = true
  }
  var $boxSd$$ = new $b2BoxDef$$;
  if(!$fixed$$2$$) {
    $boxSd$$.$density$ = 1
  }
  $boxSd$$.$extents$.$Set$($boxBd_width$$3$$, $height$$3$$);
  $boxBd_width$$3$$ = new $b2BodyDef$$;
  $boxBd_width$$3$$.$AddShape$($boxSd$$);
  $boxBd_width$$3$$.position.$Set$($x$$49$$, $y$$28$$);
  return $world$$16$$.$CreateBody$($boxBd_width$$3$$)
}
;
// Input 71
Event.$observe$(window, "load", function() {
  new $demo$$(document.getElementsByTagName("canvas")[0])
});
