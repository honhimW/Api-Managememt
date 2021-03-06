// Acorn: Copyright 2012 Marijn Haverbeke, MIT License
var mod$$inline_58 = function (a) {
  function b(a) {
    n = a || {};
    for (var b in Ua) Object.prototype.hasOwnProperty.call(n, b) || (n[b] = Ua[b]);
    wa = n.sourceFile || null
  }

  function c(a, b) {
    var c = Ab(k, a);
    b += " (" + c.line + ":" + c.column + ")";
    var d = new SyntaxError(b);
    d.pos = a;
    d.loc = c;
    d.raisedAt = f;
    throw d;
  }

  function d(a) {
    function b(a) {
      if (1 == a.length) return c += "return str === " + JSON.stringify(a[0]) + ";";
      c += "switch(str){";
      for (var va = 0; va < a.length; ++va) c += "case " + JSON.stringify(a[va]) + ":";
      c += "return true}return false;"
    }
    a = a.split(" ");
    var c =
      "",
      d = [],
      e = 0;
    a: for (; e < a.length; ++e) {
      for (var g = 0; g < d.length; ++g)
        if (d[g][0].length == a[e].length) {
          d[g].push(a[e]);
          continue a
        } d.push([a[e]])
    }
    if (3 < d.length) {
      d.sort(function (a, b) {
        return b.length - a.length
      });
      c += "switch(str.length){";
      for (e = 0; e < d.length; ++e) a = d[e], c += "case " + a[0].length + ":", b(a);
      c += "}"
    } else b(a);
    return new Function("str", c)
  }

  function e() {
    this.line = G;
    this.column = f - D
  }

  function g(a, b) {
    X = f;
    n.locations && (ia = new e);
    p = a;
    l();
    H = b;
    R = a.beforeExpr
  }

  function h() {
    for (var a = f, b = n.onComment && n.locations && new e,
        c = k.charCodeAt(f += 2); f < S && 10 !== c && 13 !== c && 8232 !== c && 8233 !== c;) ++f, c = k.charCodeAt(f);
    if (n.onComment) n.onComment(!1, k.slice(a + 2, f), a, f, b, n.locations && new e)
  }

  function l() {
    for (; f < S;) {
      var a = k.charCodeAt(f);
      if (32 === a) ++f;
      else if (13 === a) ++f, a = k.charCodeAt(f), 10 === a && ++f, n.locations && (++G, D = f);
      else if (10 === a || 8232 === a || 8233 === a) ++f, n.locations && (++G, D = f);
      else if (8 < a && 14 > a) ++f;
      else if (47 === a)
        if (a = k.charCodeAt(f + 1), 42 === a) {
          var a = n.onComment && n.locations && new e,
            b = f,
            d = k.indexOf("*/", f += 2); - 1 === d && c(f - 2, "Unterminated comment");
          f = d + 2;
          if (n.locations) {
            Y.lastIndex = b;
            for (var g = void 0;
              (g = Y.exec(k)) && g.index < f;) ++G, D = g.index + g[0].length
          }
          if (n.onComment) n.onComment(!0, k.slice(b + 2, d), b, f, a, n.locations && new e)
        } else if (47 === a) h();
      else break;
      else if (160 === a) ++f;
      else if (5760 <= a && Bb.test(String.fromCharCode(a))) ++f;
      else break
    }
  }

  function m(a) {
    switch (a) {
      case 46:
        return a = k.charCodeAt(f + 1), 48 <= a && 57 >= a ? a = P(!0) : (++f, a = g(xa)), a;
      case 40:
        return ++f, g(I);
      case 41:
        return ++f, g(E);
      case 59:
        return ++f, g(J);
      case 44:
        return ++f, g(L);
      case 91:
        return ++f, g(ja);
      case 93:
        return ++f, g(ka);
      case 123:
        return ++f, g(Z);
      case 125:
        return ++f, g(T);
      case 58:
        return ++f, g(aa);
      case 63:
        return ++f, g(ya);
      case 48:
        if (a = k.charCodeAt(f + 1), 120 === a || 88 === a) return f += 2, a = B(16), null == a && c(x + 2, "Expected hexadecimal number"), la(k.charCodeAt(f)) && c(f, "Identifier directly after number"), a = g(ba, a);
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return P(!1);
      case 34:
      case 39:
        a: {
          f++;
          for (var b = "";;) {
            f >= S && c(x, "Unterminated string constant");
            var d = k.charCodeAt(f);
            if (d === a) {
              ++f;
              a = g(da, b);
              break a
            }
            if (92 === d) {
              var d = k.charCodeAt(++f),
                e = /^[0-7]+/.exec(k.slice(f, f + 3));
              for (e && (e = e[0]); e && 255 < parseInt(e, 8);) e = e.slice(0, -1);
              "0" === e && (e = null);
              ++f;
              if (e) C && c(f - 2, "Octal literal in strict mode"), b += String.fromCharCode(parseInt(e, 8)), f += e.length - 1;
              else switch (d) {
                case 110:
                  b += "\n";
                  break;
                case 114:
                  b += "\r";
                  break;
                case 120:
                  b += String.fromCharCode(ma(2));
                  break;
                case 117:
                  b += String.fromCharCode(ma(4));
                  break;
                case 85:
                  b += String.fromCharCode(ma(8));
                  break;
                case 116:
                  b += "\t";
                  break;
                case 98:
                  b += "\b";
                  break;
                case 118:
                  b +=
                    "\x0B";
                  break;
                case 102:
                  b += "\f";
                  break;
                case 48:
                  b += "\x00";
                  break;
                case 13:
                  10 === k.charCodeAt(f) && ++f;
                case 10:
                  n.locations && (D = f, ++G);
                  break;
                default:
                  b += String.fromCharCode(d)
              }
            } else 13 !== d && 10 !== d && 8232 !== d && 8233 !== d || c(x, "Unterminated string constant"), b += String.fromCharCode(d), ++f
          }
        }
        return a;
      case 47:
        return a = k.charCodeAt(f + 1), R ? (++f, a = K()) : a = 61 === a ? t(U, 2) : t(za, 1), a;
      case 37:
      case 42:
        return a = k.charCodeAt(f + 1), a = 61 === a ? t(U, 2) : t(Cb, 1), a;
      case 124:
      case 38:
        return b = k.charCodeAt(f + 1), a = b === a ? t(124 === a ? Va : Wa, 2) : 61 ===
          b ? t(U, 2) : t(124 === a ? Db : Eb, 1), a;
      case 94:
        return a = k.charCodeAt(f + 1), a = 61 === a ? t(U, 2) : t(Fb, 1), a;
      case 43:
      case 45:
        return b = k.charCodeAt(f + 1), b === a ? 45 == b && 62 == k.charCodeAt(f + 2) && na.test(k.slice(M, f)) ? (f += 3, h(), l(), a = z()) : a = t(Gb, 2) : a = 61 === b ? t(U, 2) : t(Hb, 1), a;
      case 60:
      case 62:
        return b = k.charCodeAt(f + 1), d = 1, b === a ? (d = 62 === a && 62 === k.charCodeAt(f + 2) ? 3 : 2, a = 61 === k.charCodeAt(f + d) ? t(U, d + 1) : t(Ib, d)) : 33 == b && 60 == a && 45 == k.charCodeAt(f + 2) && 45 == k.charCodeAt(f + 3) ? (f += 4, h(), l(), a = z()) : (61 === b && (d = 61 === k.charCodeAt(f + 2) ? 3 : 2),
          a = t(Jb, d)), a;
      case 61:
      case 33:
        return b = k.charCodeAt(f + 1), a = 61 === b ? t(Kb, 61 === k.charCodeAt(f + 2) ? 3 : 2) : t(61 === a ? Aa : Xa, 1), a;
      case 126:
        return t(Xa, 1)
    }
    return !1
  }

  function z(a) {
    a ? f = x + 1 : x = f;
    n.locations && (oa = new e);
    if (a) return K();
    if (f >= S) return g(pa);
    var b = k.charCodeAt(f);
    if (la(b) || 92 === b) return Ya();
    a = m(b);
    if (!1 === a) {
      b = String.fromCharCode(b);
      if ("\\" === b || Za.test(b)) return Ya();
      c(f, "Unexpected character '" + b + "'")
    }
    return a
  }

  function t(a, b) {
    var c = k.slice(f, f + b);
    f += b;
    g(a, c)
  }

  function K() {
    for (var a, b, d = f;;) {
      f >= S && c(d,
        "Unterminated regular expression");
      var e = k.charAt(f);
      na.test(e) && c(d, "Unterminated regular expression");
      if (a) a = !1;
      else {
        if ("[" === e) b = !0;
        else if ("]" === e && b) b = !1;
        else if ("/" === e && !b) break;
        a = "\\" === e
      }++f
    }
    a = k.slice(d, f);
    ++f;
    (b = $a()) && !/^[gmsiy]*$/.test(b) && c(d, "Invalid regexp flag");
    return g(Ba, new RegExp(a, b))
  }

  function B(a, b) {
    for (var c = f, d = 0, e = 0, g = null == b ? Infinity : b; e < g; ++e) {
      var h = k.charCodeAt(f),
        h = 97 <= h ? h - 97 + 10 : 65 <= h ? h - 65 + 10 : 48 <= h && 57 >= h ? h - 48 : Infinity;
      if (h >= a) break;
      ++f;
      d = d * a + h
    }
    return f === c || null != b &&
      f - c !== b ? null : d
  }

  function P(a) {
    var b = f,
      d = !1,
      e = 48 === k.charCodeAt(f);
    a || null !== B(10) || c(b, "Invalid number");
    46 === k.charCodeAt(f) && (++f, B(10), d = !0);
    a = k.charCodeAt(f);
    if (69 === a || 101 === a) a = k.charCodeAt(++f), 43 !== a && 45 !== a || ++f, null === B(10) && c(b, "Invalid number"), d = !0;
    la(k.charCodeAt(f)) && c(f, "Identifier directly after number");
    a = k.slice(b, f);
    var h;
    d ? h = parseFloat(a) : e && 1 !== a.length ? /[89]/.test(a) || C ? c(b, "Invalid number") : h = parseInt(a, 8) : h = parseInt(a, 10);
    return g(ba, h)
  }

  function ma(a) {
    a = B(16, a);
    null === a && c(x,
      "Bad character escape sequence");
    return a
  }

  function $a() {
    ca = !1;
    for (var a, b = !0, d = f;;) {
      var e = k.charCodeAt(f);
      if (ab(e)) ca && (a += k.charAt(f)), ++f;
      else if (92 === e) {
        ca || (a = k.slice(d, f));
        ca = !0;
        117 != k.charCodeAt(++f) && c(f, "Expecting Unicode escape sequence \\uXXXX");
        ++f;
        var e = ma(4),
          g = String.fromCharCode(e);
        g || c(f - 1, "Invalid Unicode escape");
        (b ? la(e) : ab(e)) || c(f - 4, "Invalid Unicode escape");
        a += g
      } else break;
      b = !1
    }
    return ca ? a : k.slice(d, f)
  }

  function Ya() {
    var a = $a(),
      b = V;
    ca || (Lb(a) ? b = Ca[a] : (n.forbidReserved && (3 === n.ecmaVersion ?
      Mb : Nb)(a) || C && bb(a)) && c(x, "The keyword '" + a + "' is reserved"));
    return g(b, a)
  }

  function r() {
    Da = x;
    M = X;
    Ea = ia;
    z()
  }

  function Fa(a) {
    C = a;
    f = M;
    if (n.locations)
      for (; f < D;) D = k.lastIndexOf("\n", D - 2) + 1, --G;
    l();
    z()
  }

  function cb() {
    this.type = null;
    this.start = x;
    this.end = null
  }

  function db() {
    this.start = oa;
    this.end = null;
    null !== wa && (this.source = wa)
  }

  function y() {
    var a = new cb;
    n.locations && (a.loc = new db);
    n.directSourceFile && (a.sourceFile = n.directSourceFile);
    n.ranges && (a.range = [x, 0]);
    return a
  }

  function Q(a) {
    var b = new cb;
    b.start = a.start;
    n.locations && (b.loc = new db, b.loc.start = a.loc.start);
    n.ranges && (b.range = [a.range[0], 0]);
    return b
  }

  function q(a, b) {
    a.type = b;
    a.end = M;
    n.locations && (a.loc.end = Ea);
    n.ranges && (a.range[1] = M);
    return a
  }

  function Ga(a) {
    return 5 <= n.ecmaVersion && "ExpressionStatement" === a.type && "Literal" === a.expression.type && "use strict" === a.expression.value
  }

  function u(a) {
    if (p === a) return r(), !0
  }

  function qa() {
    return !n.strictSemicolons && (p === pa || p === T || na.test(k.slice(M, x)))
  }

  function W() {
    u(J) || qa() || N()
  }

  function v(a) {
    p === a ? r() : N()
  }

  function N() {
    c(x, "Unexpected token")
  }

  function ra(a) {
    "Identifier" !== a.type && "MemberExpression" !== a.type && c(a.start, "Assigning to rvalue");
    C && "Identifier" === a.type && sa(a.name) && c(a.start, "Assigning to " + a.name + " in strict mode")
  }

  function F() {
    (p === za || p === U && "/=" == H) && z(!0);
    var a = p,
      b = y();
    switch (a) {
      case Ha:
      case eb:
        r();
        var d = a === Ha;
        u(J) || qa() ? b.label = null : p !== V ? N() : (b.label = O(), W());
        for (var e = 0; e < w.length; ++e) {
          var g = w[e];
          if (null == b.label || g.name === b.label.name) {
            if (null != g.kind && (d || "loop" === g.kind)) break;
            if (b.label && d) break
          }
        }
        e === w.length && c(b.start, "Unsyntactic " + a.keyword);
        return q(b, d ? "BreakStatement" : "ContinueStatement");
      case fb:
        return r(), W(), q(b, "DebuggerStatement");
      case gb:
        return r(), w.push(Ia), b.body = F(), w.pop(), v(Ja), b.test = ea(), W(), q(b, "DoWhileStatement");
      case hb:
        r();
        w.push(Ia);
        v(I);
        if (p === J) return Ka(b, null);
        if (p === La) return a = y(), r(), ib(a, !0), q(a, "VariableDeclaration"), 1 === a.declarations.length && u(ta) ? jb(b, a) : Ka(b, a);
        a = A(!1, !0);
        return u(ta) ? (ra(a), jb(b, a)) : Ka(b, a);
      case Ma:
        return r(), Na(b,
          !0);
      case kb:
        return r(), b.test = ea(), b.consequent = F(), b.alternate = u(lb) ? F() : null, q(b, "IfStatement");
      case mb:
        return fa || c(x, "'return' outside of function"), r(), u(J) || qa() ? b.argument = null : (b.argument = A(), W()), q(b, "ReturnStatement");
      case Oa:
        r();
        b.discriminant = ea();
        b.cases = [];
        v(Z);
        for (w.push(Ob); p != T;) p === Pa || p === nb ? (a = p === Pa, e && q(e, "SwitchCase"), b.cases.push(e = y()), e.consequent = [], r(), a ? e.test = A() : (d && c(Da, "Multiple default clauses"), d = !0, e.test = null), v(aa)) : (e || N(), e.consequent.push(F()));
        e && q(e, "SwitchCase");
        r();
        w.pop();
        return q(b, "SwitchStatement");
      case ob:
        return r(), na.test(k.slice(M, x)) && c(M, "Illegal newline after throw"), b.argument = A(), W(), q(b, "ThrowStatement");
      case pb:
        return r(), b.block = ga(), b.handler = null, p === qb && (a = y(), r(), v(I), a.param = O(), C && sa(a.param.name) && c(a.param.start, "Binding " + a.param.name + " in strict mode"), v(E), a.guard = null, a.body = ga(), b.handler = q(a, "CatchClause")), b.guardedHandlers = rb, b.finalizer = u(sb) ? ga() : null, b.handler || b.finalizer || c(b.start, "Missing catch or finally clause"),
          q(b, "TryStatement");
      case La:
        return r(), ib(b), W(), q(b, "VariableDeclaration");
      case Ja:
        return r(), b.test = ea(), w.push(Ia), b.body = F(), w.pop(), q(b, "WhileStatement");
      case tb:
        return C && c(x, "'with' in strict mode"), r(), b.object = ea(), b.body = F(), q(b, "WithStatement");
      case Z:
        return ga();
      case J:
        return r(), q(b, "EmptyStatement");
      default:
        d = H;
        g = A();
        if (a === V && "Identifier" === g.type && u(aa)) {
          for (e = 0; e < w.length; ++e) w[e].name === d && c(g.start, "Label '" + d + "' is already declared");
          a = p.isLoop ? "loop" : p === Oa ? "switch" : null;
          w.push({
            name: d,
            kind: a
          });
          b.body = F();
          w.pop();
          b.label = g;
          return q(b, "LabeledStatement")
        }
        b.expression = g;
        W();
        return q(b, "ExpressionStatement")
    }
  }

  function ea() {
    v(I);
    var a = A();
    v(E);
    return a
  }

  function ga(a) {
    var b = y(),
      c = !0,
      d = !1,
      e;
    b.body = [];
    for (v(Z); !u(T);) {
      var g = F();
      b.body.push(g);
      c && a && Ga(g) && (e = d, Fa(d = !0));
      c = !1
    }
    d && !e && Fa(!1);
    return q(b, "BlockStatement")
  }

  function Ka(a, b) {
    a.init = b;
    v(J);
    a.test = p === J ? null : A();
    v(J);
    a.update = p === E ? null : A();
    v(E);
    a.body = F();
    w.pop();
    return q(a, "ForStatement")
  }

  function jb(a, b) {
    a.left = b;
    a.right = A();
    v(E);
    a.body = F();
    w.pop();
    return q(a, "ForInStatement")
  }

  function ib(a, b) {
    a.declarations = [];
    for (a.kind = "var";;) {
      var d = y();
      d.id = O();
      C && sa(d.id.name) && c(d.id.start, "Binding " + d.id.name + " in strict mode");
      d.init = u(Aa) ? A(!0, b) : null;
      a.declarations.push(q(d, "VariableDeclarator"));
      if (!u(L)) break
    }
    return a
  }

  function A(a, b) {
    var c = Qa(b);
    if (!a && p === L) {
      var d = Q(c);
      for (d.expressions = [c]; u(L);) d.expressions.push(Qa(b));
      return q(d, "SequenceExpression")
    }
    return c
  }

  function Qa(a) {
    var b;
    b = a;
    var c;
    c = b;
    c = Ra(Sa(), -1, c);
    if (u(ya)) {
      var d =
        Q(c);
      d.test = c;
      d.consequent = A(!0);
      v(aa);
      d.alternate = A(!0, b);
      b = q(d, "ConditionalExpression")
    } else b = c;
    return p.isAssign ? (c = Q(b), c.operator = H, c.left = b, r(), c.right = Qa(a), ra(b), q(c, "AssignmentExpression")) : b
  }

  function Ra(a, b, c) {
    var d = p.binop;
    if (null != d && (!c || p !== ta) && d > b) {
      var e = Q(a);
      e.left = a;
      e.operator = H;
      a = p;
      r();
      e.right = Ra(Sa(), d, c);
      d = q(e, a === Va || a === Wa ? "LogicalExpression" : "BinaryExpression");
      return Ra(d, b, c)
    }
    return a
  }

  function Sa() {
    if (p.prefix) {
      var a = y(),
        b = p.isUpdate;
      a.operator = H;
      R = a.prefix = !0;
      r();
      a.argument =
        Sa();
      b ? ra(a.argument) : C && "delete" === a.operator && "Identifier" === a.argument.type && c(a.start, "Deleting local variable in strict mode");
      return q(a, b ? "UpdateExpression" : "UnaryExpression")
    }
    for (b = ha(ua()); p.postfix && !qa();) a = Q(b), a.operator = H, a.prefix = !1, a.argument = b, ra(b), r(), b = q(a, "UpdateExpression");
    return b
  }

  function ha(a, b) {
    if (u(xa)) {
      var c = Q(a);
      c.object = a;
      c.property = O(!0);
      c.computed = !1;
      return ha(q(c, "MemberExpression"), b)
    }
    return u(ja) ? (c = Q(a), c.object = a, c.property = A(), c.computed = !0, v(ka), ha(q(c, "MemberExpression"),
      b)) : !b && u(I) ? (c = Q(a), c.callee = a, c.arguments = Ta(E, !1), ha(q(c, "CallExpression"), b)) : a
  }

  function ua() {
    switch (p) {
      case ub:
        var a = y();
        r();
        return q(a, "ThisExpression");
      case V:
        return O();
      case ba:
      case da:
      case Ba:
        return a = y(), a.value = H, a.raw = k.slice(x, X), r(), q(a, "Literal");
      case vb:
      case wb:
      case xb:
        return a = y(), a.value = p.atomValue, a.raw = p.keyword, r(), q(a, "Literal");
      case I:
        var a = oa,
          b = x;
        r();
        var d = A();
        d.start = b;
        d.end = X;
        n.locations && (d.loc.start = a, d.loc.end = ia);
        n.ranges && (d.range = [b, X]);
        v(E);
        return d;
      case ja:
        return a =
          y(), r(), a.elements = Ta(ka, !0, !0), q(a, "ArrayExpression");
      case Z:
        a = y();
        b = !0;
        d = !1;
        a.properties = [];
        for (r(); !u(T);) {
          if (b) b = !1;
          else if (v(L), n.allowTrailingCommas && u(T)) break;
          var e = {
              key: p === ba || p === da ? ua() : O(!0)
            },
            g = !1,
            h;
          u(aa) ? (e.value = A(!0), h = e.kind = "init") : 5 <= n.ecmaVersion && "Identifier" === e.key.type && ("get" === e.key.name || "set" === e.key.name) ? (g = d = !0, h = e.kind = e.key.name, e.key = p === ba || p === da ? ua() : O(!0), p !== I && N(), e.value = Na(y(), !1)) : N();
          if ("Identifier" === e.key.type && (C || d))
            for (var f = 0; f < a.properties.length; ++f) {
              var l =
                a.properties[f];
              if (l.key.name === e.key.name) {
                var m = h == l.kind || g && "init" === l.kind || "init" === h && ("get" === l.kind || "set" === l.kind);
                m && !C && "init" === h && "init" === l.kind && (m = !1);
                m && c(e.key.start, "Redefinition of property")
              }
            }
          a.properties.push(e)
        }
        return a = q(a, "ObjectExpression");
      case Ma:
        return a = y(), r(), Na(a, !1);
      case yb:
        return a = y(), r(), a.callee = ha(ua(), !0), u(I) ? a.arguments = Ta(E, !1) : a.arguments = rb, a = q(a, "NewExpression");
      default:
        N()
    }
  }

  function Na(a, b) {
    p === V ? a.id = O() : b ? N() : a.id = null;
    a.params = [];
    var d = !0;
    for (v(I); !u(E);) d ?
      d = !1 : v(L), a.params.push(O());
    var d = fa,
      e = w;
    fa = !0;
    w = [];
    a.body = ga(!0);
    fa = d;
    w = e;
    if (C || a.body.body.length && Ga(a.body.body[0]))
      for (d = a.id ? -1 : 0; d < a.params.length; ++d)
        if (e = 0 > d ? a.id : a.params[d], (bb(e.name) || sa(e.name)) && c(e.start, "Defining '" + e.name + "' in strict mode"), 0 <= d)
          for (var g = 0; g < d; ++g) e.name === a.params[g].name && c(e.start, "Argument name clash in strict mode");
    return q(a, b ? "FunctionDeclaration" : "FunctionExpression")
  }

  function Ta(a, b, c) {
    for (var d = [], e = !0; !u(a);) {
      if (e) e = !1;
      else if (v(L), b && n.allowTrailingCommas &&
        u(a)) break;
      c && p === L ? d.push(null) : d.push(A(!0))
    }
    return d
  }

  function O(a) {
    var b = y();
    b.name = p === V ? H : a && !n.forbidReserved && p.keyword || N();
    R = !1;
    r();
    return q(b, "Identifier")
  }
  a.version = "0.4.1";
  var n, k, S, wa;
  a.parse = function (a, c) {
    k = String(a);
    S = k.length;
    b(c);
    G = 1;
    f = D = 0;
    R = !0;
    l();
    var d, g = n.program;
    Da = M = f;
    n.locations && (Ea = new e);
    fa = C = null;
    w = [];
    z();
    d = g || y();
    var h = !0;
    g || (d.body = []);
    for (; p !== pa;) g = F(), d.body.push(g), h && Ga(g) && Fa(!0), h = !1;
    return d = q(d, "Program")
  };
  var Ua = a.defaultOptions = {
      ecmaVersion: 5,
      strictSemicolons: !1,
      allowTrailingCommas: !0,
      forbidReserved: !1,
      locations: !1,
      onComment: null,
      ranges: !1,
      program: null,
      sourceFile: null,
      directSourceFile: null
    },
    Ab = a.getLineInfo = function (a, b) {
      for (var c = 1, d = 0;;) {
        Y.lastIndex = d;
        var e = Y.exec(a);
        if (e && e.index < b) ++c, d = e.index + e[0].length;
        else break
      }
      return {
        line: c,
        column: b - d
      }
    };
  a.tokenize = function (a, c) {
    function d(a) {
      z(a);
      e.start = x;
      e.end = X;
      e.startLoc = oa;
      e.endLoc = ia;
      e.type = p;
      e.value = H;
      return e
    }
    k = String(a);
    S = k.length;
    b(c);
    G = 1;
    f = D = 0;
    R = !0;
    l();
    var e = {};
    d.jumpTo = function (a, b) {
      f = a;
      if (n.locations) {
        G =
          1;
        D = Y.lastIndex = 0;
        for (var c;
          (c = Y.exec(k)) && c.index < a;) ++G, D = c.index + c[0].length
      }
      R = b;
      l()
    };
    return d
  };
  var f, x, X, oa, ia, p, H, R, G, D, Da, M, Ea, fa, w, C, rb = [],
    ba = {
      type: "num"
    },
    Ba = {
      type: "regexp"
    },
    da = {
      type: "string"
    },
    V = {
      type: "name"
    },
    pa = {
      type: "eof"
    },
    Ha = {
      keyword: "break"
    },
    Pa = {
      keyword: "case",
      beforeExpr: !0
    },
    qb = {
      keyword: "catch"
    },
    eb = {
      keyword: "continue"
    },
    fb = {
      keyword: "debugger"
    },
    nb = {
      keyword: "default"
    },
    gb = {
      keyword: "do",
      isLoop: !0
    },
    lb = {
      keyword: "else",
      beforeExpr: !0
    },
    sb = {
      keyword: "finally"
    },
    hb = {
      keyword: "for",
      isLoop: !0
    },
    Ma = {
      keyword: "function"
    },
    kb = {
      keyword: "if"
    },
    mb = {
      keyword: "return",
      beforeExpr: !0
    },
    Oa = {
      keyword: "switch"
    },
    ob = {
      keyword: "throw",
      beforeExpr: !0
    },
    pb = {
      keyword: "try"
    },
    La = {
      keyword: "var"
    },
    Ja = {
      keyword: "while",
      isLoop: !0
    },
    tb = {
      keyword: "with"
    },
    yb = {
      keyword: "new",
      beforeExpr: !0
    },
    ub = {
      keyword: "this"
    },
    vb = {
      keyword: "null",
      atomValue: null
    },
    wb = {
      keyword: "true",
      atomValue: !0
    },
    xb = {
      keyword: "false",
      atomValue: !1
    },
    ta = {
      keyword: "in",
      binop: 7,
      beforeExpr: !0
    },
    Ca = {
      "break": Ha,
      "case": Pa,
      "catch": qb,
      "continue": eb,
      "debugger": fb,
      "default": nb,
      "do": gb,
      "else": lb,
      "finally": sb,
      "for": hb,
      "function": Ma,
      "if": kb,
      "return": mb,
      "switch": Oa,
      "throw": ob,
      "try": pb,
      "var": La,
      "while": Ja,
      "with": tb,
      "null": vb,
      "true": wb,
      "false": xb,
      "new": yb,
      "in": ta,
      "instanceof": {
        keyword: "instanceof",
        binop: 7,
        beforeExpr: !0
      },
      "this": ub,
      "typeof": {
        keyword: "typeof",
        prefix: !0,
        beforeExpr: !0
      },
      "void": {
        keyword: "void",
        prefix: !0,
        beforeExpr: !0
      },
      "delete": {
        keyword: "delete",
        prefix: !0,
        beforeExpr: !0
      }
    },
    ja = {
      type: "[",
      beforeExpr: !0
    },
    ka = {
      type: "]"
    },
    Z = {
      type: "{",
      beforeExpr: !0
    },
    T = {
      type: "}"
    },
    I = {
      type: "(",
      beforeExpr: !0
    },
    E = {
      type: ")"
    },
    L = {
      type: ",",
      beforeExpr: !0
    },
    J = {
      type: ";",
      beforeExpr: !0
    },
    aa = {
      type: ":",
      beforeExpr: !0
    },
    xa = {
      type: "."
    },
    ya = {
      type: "?",
      beforeExpr: !0
    },
    za = {
      binop: 10,
      beforeExpr: !0
    },
    Aa = {
      isAssign: !0,
      beforeExpr: !0
    },
    U = {
      isAssign: !0,
      beforeExpr: !0
    },
    Gb = {
      postfix: !0,
      prefix: !0,
      isUpdate: !0
    },
    Xa = {
      prefix: !0,
      beforeExpr: !0
    },
    Va = {
      binop: 1,
      beforeExpr: !0
    },
    Wa = {
      binop: 2,
      beforeExpr: !0
    },
    Db = {
      binop: 3,
      beforeExpr: !0
    },
    Fb = {
      binop: 4,
      beforeExpr: !0
    },
    Eb = {
      binop: 5,
      beforeExpr: !0
    },
    Kb = {
      binop: 6,
      beforeExpr: !0
    },
    Jb = {
      binop: 7,
      beforeExpr: !0
    },
    Ib = {
      binop: 8,
      beforeExpr: !0
    },
    Hb = {
      binop: 9,
      prefix: !0,
      beforeExpr: !0
    },
    Cb = {
      binop: 10,
      beforeExpr: !0
    };
  a.tokTypes = {
    bracketL: ja,
    bracketR: ka,
    braceL: Z,
    braceR: T,
    parenL: I,
    parenR: E,
    comma: L,
    semi: J,
    colon: aa,
    dot: xa,
    question: ya,
    slash: za,
    eq: Aa,
    name: V,
    eof: pa,
    num: ba,
    regexp: Ba,
    string: da
  };
  for (var zb in Ca) a.tokTypes["_" + zb] = Ca[zb];
  var Mb = d("abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile"),
    Nb = d("class enum extends super const export import"),
    bb = d("implements interface let package private protected public static yield"),
    sa = d("eval arguments"),
    Lb = d("break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this"),
    Bb = /[\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
    Za = RegExp("[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc]"),
    Pb = RegExp("[\u00aa\u00b5\u00ba\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f]"),
    na = /[\n\r\u2028\u2029]/,
    Y = /\r\n|[\n\r\u2028\u2029]/g,
    la = a.isIdentifierStart = function (a) {
      return 65 > a ? 36 === a : 91 > a ? !0 : 97 > a ? 95 === a : 123 > a ? !0 : 170 <= a && Za.test(String.fromCharCode(a))
    },
    ab = a.isIdentifierChar = function (a) {
      return 48 > a ? 36 === a : 58 > a ? !0 : 65 > a ? !1 : 91 > a ? !0 : 97 > a ? 95 === a : 123 > a ? !0 : 170 <= a && Pb.test(String.fromCharCode(a))
    },
    ca, Ia = {
      kind: "loop"
    },
    Ob = {
      kind: "switch"
    }
};
"object" == typeof exports && "object" == typeof module ? mod$$inline_58(exports) : "function" == typeof define && define.amd ? define(["exports"], mod$$inline_58) : mod$$inline_58(this.acorn || (this.acorn = {}));
// JS-Interpreter: Copyright 2013 Google LLC, Apache 2.0
function u(a, b) {
  "string" === typeof a && (a = acorn.parse(a, ha));
  this.Ha = a.constructor;
  var c = new this.Ha({
    options: {}
  });
  for (d in a) c[d] = "body" === d ? a[d].slice() : a[d];
  this.fa = c;
  this.kb = b;
  this.wa = !1;
  this.U = [];
  this.Sa = 0;
  this.pb = Object.create(null);
  var d = /^step([A-Z]\w*)$/;
  var e, g;
  for (g in this) "function" === typeof this[g] && (e = g.match(d)) && (this.pb[e[1]] = this[g].bind(this));
  this.M = ia(this, this.fa, null);
  this.Da = this.M.object;
  this.fa = acorn.parse(this.U.join("\n"), ha);
  this.U = void 0;
  ra(this.fa, void 0, void 0);
  e = new v(this.fa,
    this.M);
  e.done = !1;
  this.j = [e];
  this.nb();
  this.value = void 0;
  this.fa = c;
  e = new v(this.fa, this.M);
  e.done = !1;
  this.j.length = 0;
  this.j[0] = e;
  this.stateStack = this.j
}
var ha = {
    Ca: 5
  },
  ya = {
    configurable: !0,
    enumerable: !0,
    writable: !1
  },
  B = {
    configurable: !0,
    enumerable: !1,
    writable: !0
  },
  E = {
    configurable: !0,
    enumerable: !1,
    writable: !1
  },
  za = {
    configurable: !1,
    enumerable: !0,
    writable: !0
  },
  Aa = {
    STEP_ERROR: !0
  },
  Ba = {
    SCOPE_REFERENCE: !0
  },
  Ia = {
    VALUE_IN_DESCRIPTOR: !0
  },
  Ja = {
    REGEXP_TIMEOUT: !0
  },
  Ka = [],
  La = null,
  Ma = ["onmessage = function(e) {", "var result;", "var data = e.data;", "switch (data[0]) {", "case 'split':", "result = data[1].split(data[2], data[3]);", "break;", "case 'match':", "result = data[1].match(data[2]);",
    "break;", "case 'search':", "result = data[1].search(data[2]);", "break;", "case 'replace':", "result = data[1].replace(data[2], data[3]);", "break;", "case 'exec':", "var regexp = data[1];", "regexp.lastIndex = data[2];", "result = [regexp.exec(data[3]), data[1].lastIndex];", "break;", "default:", "throw 'Unknown RegExp operation: ' + data[0];", "}", "postMessage(result);", "};"
  ];

function Na(a) {
  var b = a >>> 0;
  return b === Number(a) ? b : NaN
}

function Oa(a) {
  var b = a >>> 0;
  return String(b) === String(a) && 4294967295 !== b ? b : NaN
}

function ra(a, b, c) {
  b ? a.start = b : delete a.start;
  c ? a.end = c : delete a.end;
  for (var d in a)
    if (a.hasOwnProperty(d)) {
      var e = a[d];
      e && "object" === typeof e && ra(e, b, c)
    }
}
u.prototype.REGEXP_MODE = 2;
u.prototype.REGEXP_THREAD_TIMEOUT = 1E3;
q = u.prototype;
q.I = !1;
q.ya = !1;
q.ub = function (a) {
  var b = this.j[0];
  if (!b || "Program" !== b.node.type) throw Error("Expecting original AST to start with a Program node.");
  "string" === typeof a && (a = acorn.parse(a, ha));
  if (!a || "Program" !== a.type) throw Error("Expecting new AST to start with a Program node.");
  Pa(this, a, b.scope);
  Array.prototype.push.apply(b.node.body, a.body);
  b.done = !1
};
q.step = function () {
  var a = this.j;
  do {
    var b = a[a.length - 1];
    if (!b) return !1;
    var c = b.node,
      d = c.type;
    if ("Program" === d && b.done) return !1;
    if (this.wa) break;
    try {
      var e = this.pb[d](a, b, c)
    } catch (g) {
      if (g !== Aa) throw g;
    }
    e && a.push(e);
    if (this.I) throw Error("Getter not supported in this context");
    if (this.ya) throw Error("Setter not supported in this context");
  } while (!c.end);
  return !0
};
q.nb = function () {
  for (; !this.wa && this.step(););
  return this.wa
};

function Qa(a, b) {
  a.setProperty(b, "NaN", NaN, ya);
  a.setProperty(b, "Infinity", Infinity, ya);
  a.setProperty(b, "undefined", void 0, ya);
  a.setProperty(b, "window", b, ya);
  a.setProperty(b, "this", b, ya);
  a.setProperty(b, "self", b);
  a.B = new F(null);
  a.W = new F(a.B);
  db(a, b);
  eb(a, b);
  b.la = a.B;
  a.setProperty(b, "constructor", a.m, B);
  Fb(a, b);
  Gb(a, b);
  Hb(a, b);
  Ib(a, b);
  Jb(a, b);
  Kb(a, b);
  Lb(a, b);
  Mb(a, b);
  Nb(a, b);
  var c = a.b(function () {
    throw EvalError("Can't happen");
  }, !1);
  c.eval = !0;
  a.setProperty(b, "eval", c);
  a.setProperty(b, "parseInt", a.b(parseInt,
    !1));
  a.setProperty(b, "parseFloat", a.b(parseFloat, !1));
  a.setProperty(b, "isNaN", a.b(isNaN, !1));
  a.setProperty(b, "isFinite", a.b(isFinite, !1));
  c = [
    [escape, "escape"],
    [unescape, "unescape"],
    [decodeURI, "decodeURI"],
    [decodeURIComponent, "decodeURIComponent"],
    [encodeURI, "encodeURI"],
    [encodeURIComponent, "encodeURIComponent"]
  ];
  for (var d = 0; d < c.length; d++) a.setProperty(b, c[d][1], a.b(function (e) {
    return function (g) {
      try {
        return e(g)
      } catch (n) {
        I(a, a.rb, n.message)
      }
    }
  }(c[d][0]), !1), B);
  a.OBJECT = a.m;
  a.OBJECT_PROTO = a.B;
  a.FUNCTION =
    a.H;
  a.FUNCTION_PROTO = a.W;
  a.ARRAY = a.l;
  a.ARRAY_PROTO = a.za;
  a.REGEXP = a.C;
  a.REGEXP_PROTO = a.Aa;
  a.DATE = a.R;
  a.DATE_PROTO = a.Za;
  a.kb && a.kb(a, b)
}

function db(a, b) {
  function c(g) {
    if (!(g instanceof F || Ob(a).P))
      if (void 0 === g || null === g) g = a.Da;
      else {
        var n = a.h(Pb(a, g));
        n.data = g;
        g = n
      } return g
  }
  var d = /^[A-Za-z_$][\w$]*$/;
  var e = function (g) {
    var n = arguments.length ? String(arguments[arguments.length - 1]) : "",
      p = Array.prototype.slice.call(arguments, 0, -1).join(",").trim();
    if (p) {
      p = p.split(/\s*,\s*/);
      for (var z = 0; z < p.length; z++) {
        var A = p[z];
        d.test(A) || I(a, a.da, "Invalid function argument: " + A)
      }
      p = p.join(", ")
    }
    try {
      var C = acorn.parse("(function(" + p + ") {" + n + "})", ha)
    } catch (ja) {
      I(a,
        a.da, "Invalid code: " + ja.message)
    }
    1 !== C.body.length && I(a, a.da, "Invalid code in function body.");
    return xc(a, C.body[0].expression, a.M)
  };
  a.H = a.b(e, !0);
  a.setProperty(b, "Function", a.H);
  a.setProperty(a.H, "prototype", a.W, B);
  a.setProperty(a.W, "constructor", a.H, B);
  a.W.Ga = function () {};
  a.W.Ga.id = a.Sa++;
  a.setProperty(a.W, "length", 0, E);
  e = function (g, n) {
    var p = a.j[a.j.length - 1];
    p.Z = this;
    p.G = c(g);
    p.A = [];
    null !== n && void 0 !== n && (n instanceof F ? p.A = yc(a, n) : I(a, a.g, "CreateListFromArrayLike called on non-object"));
    p.Ra = !1
  };
  N(a, a.H, "apply", e);
  e = function (g) {
    var n = a.j[a.j.length - 1];
    n.Z = this;
    n.G = c(g);
    n.A = [];
    for (var p = 1; p < arguments.length; p++) n.A.push(arguments[p]);
    n.Ra = !1
  };
  N(a, a.H, "call", e);
  a.U.push("Object.defineProperty(Function.prototype, 'bind',", "{configurable: true, writable: true, value:", "function(oThis) {", "if (typeof this !== 'function') {", "throw TypeError('What is trying to be bound is not callable');", "}", "var aArgs   = Array.prototype.slice.call(arguments, 1),", "fToBind = this,", "fNOP    = function() {},",
    "fBound  = function() {", "return fToBind.apply(this instanceof fNOP", "? this", ": oThis,", "aArgs.concat(Array.prototype.slice.call(arguments)));", "};", "if (this.prototype) {", "fNOP.prototype = this.prototype;", "}", "fBound.prototype = new fNOP();", "return fBound;", "}", "});", "");
  e = function () {
    return String(this)
  };
  N(a, a.H, "toString", e);
  a.setProperty(a.H, "toString", a.b(e, !1), B);
  e = function () {
    return this.valueOf()
  };
  N(a, a.H, "valueOf", e);
  a.setProperty(a.H, "valueOf", a.b(e, !1), B)
}

function eb(a, b) {
  function c(e) {
    void 0 !== e && null !== e || I(a, a.g, "Cannot convert '" + e + "' to object")
  }
  var d = function (e) {
    if (void 0 === e || null === e) return zc(a) ? this : a.h(a.B);
    if (!(e instanceof F)) {
      var g = a.h(Pb(a, e));
      g.data = e;
      return g
    }
    return e
  };
  a.m = a.b(d, !0);
  a.setProperty(a.m, "prototype", a.B, B);
  a.setProperty(a.B, "constructor", a.m, B);
  a.setProperty(b, "Object", a.m);
  d = function (e) {
    c(e);
    return T(a, Object.getOwnPropertyNames(e instanceof F ? e.a : e))
  };
  a.setProperty(a.m, "getOwnPropertyNames", a.b(d, !1), B);
  d = function (e) {
    c(e);
    e instanceof F && (e = e.a);
    return T(a, Object.keys(e))
  };
  a.setProperty(a.m, "keys", a.b(d, !1), B);
  d = function (e) {
    if (null === e) return a.h(null);
    e instanceof F || I(a, a.g, "Object prototype may only be an Object or null");
    return a.h(e)
  };
  a.setProperty(a.m, "create", a.b(d, !1), B);
  a.U.push("(function() {", "var create_ = Object.create;", "Object.create = function(proto, props) {", "var obj = create_(proto);", "props && Object.defineProperties(obj, props);", "return obj;", "};", "})();", "");
  d = function (e, g, n) {
    g = String(g);
    e instanceof
    F || I(a, a.g, "Object.defineProperty called on non-object");
    n instanceof F || I(a, a.g, "Property description must be an object");
    !e.a[g] && e.preventExtensions && I(a, a.g, "Can't define property '" + g + "', object is not extensible");
    a.setProperty(e, g, Ia, n.a);
    return e
  };
  a.setProperty(a.m, "defineProperty", a.b(d, !1), B);
  a.U.push("(function() {", "var defineProperty_ = Object.defineProperty;", "Object.defineProperty = function(obj, prop, d1) {", "var d2 = {};", "if ('configurable' in d1) d2.configurable = d1.configurable;",
    "if ('enumerable' in d1) d2.enumerable = d1.enumerable;", "if ('writable' in d1) d2.writable = d1.writable;", "if ('value' in d1) d2.value = d1.value;", "if ('get' in d1) d2.get = d1.get;", "if ('set' in d1) d2.set = d1.set;", "return defineProperty_(obj, prop, d2);", "};", "})();", "Object.defineProperty(Object, 'defineProperties',", "{configurable: true, writable: true, value:", "function(obj, props) {", "var keys = Object.keys(props);", "for (var i = 0; i < keys.length; i++) {", "Object.defineProperty(obj, keys[i], props[keys[i]]);",
    "}", "return obj;", "}", "});", "");
  d = function (e, g) {
    e instanceof F || I(a, a.g, "Object.getOwnPropertyDescriptor called on non-object");
    g = String(g);
    if (g in e.a) {
      var n = Object.getOwnPropertyDescriptor(e.a, g),
        p = e.L[g],
        z = e.O[g],
        A = a.h(a.B);
      p || z ? (a.setProperty(A, "get", p), a.setProperty(A, "set", z)) : (a.setProperty(A, "value", n.value), a.setProperty(A, "writable", n.writable));
      a.setProperty(A, "configurable", n.configurable);
      a.setProperty(A, "enumerable", n.enumerable);
      return A
    }
  };
  a.setProperty(a.m, "getOwnPropertyDescriptor",
    a.b(d, !1), B);
  d = function (e) {
    c(e);
    return Pb(a, e)
  };
  a.setProperty(a.m, "getPrototypeOf", a.b(d, !1), B);
  d = function (e) {
    return !!e && !e.preventExtensions
  };
  a.setProperty(a.m, "isExtensible", a.b(d, !1), B);
  d = function (e) {
    e instanceof F && (e.preventExtensions = !0);
    return e
  };
  a.setProperty(a.m, "preventExtensions", a.b(d, !1), B);
  N(a, a.m, "toString", F.prototype.toString);
  N(a, a.m, "toLocaleString", F.prototype.toString);
  N(a, a.m, "valueOf", F.prototype.valueOf);
  d = function (e) {
    c(this);
    return this instanceof F ? String(e) in this.a : this.hasOwnProperty(e)
  };
  N(a, a.m, "hasOwnProperty", d);
  d = function (e) {
    c(this);
    return this instanceof F ? Object.prototype.propertyIsEnumerable.call(this.a, e) : this.propertyIsEnumerable(e)
  };
  N(a, a.m, "propertyIsEnumerable", d);
  d = function (e) {
    for (;;) {
      e = Pb(a, e);
      if (!e) return !1;
      if (e === this) return !0
    }
  };
  N(a, a.m, "isPrototypeOf", d)
}

function Fb(a, b) {
  var c = function (d) {
    var e = zc(a) ? this : Ac(a),
      g = arguments[0];
    if (1 === arguments.length && "number" === typeof g) isNaN(Na(g)) && I(a, a.$a, "Invalid array length"), e.a.length = g;
    else {
      for (g = 0; g < arguments.length; g++) e.a[g] = arguments[g];
      e.a.length = g
    }
    return e
  };
  a.l = a.b(c, !0);
  a.za = a.l.a.prototype;
  a.setProperty(b, "Array", a.l);
  c = function (d) {
    return d && "Array" === d.F
  };
  a.setProperty(a.l, "isArray", a.b(c, !1), B);
  a.setProperty(a.za, "length", 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  });
  a.za.F = "Array";
  N(a, a.l, "pop",
    function () {
      return Array.prototype.pop.call(this.a)
    });
  c = function (d) {
    return Array.prototype.push.apply(this.a, arguments)
  };
  N(a, a.l, "push", c);
  N(a, a.l, "shift", function () {
    return Array.prototype.shift.call(this.a)
  });
  c = function (d) {
    return Array.prototype.unshift.apply(this.a, arguments)
  };
  N(a, a.l, "unshift", c);
  N(a, a.l, "reverse", function () {
    Array.prototype.reverse.call(this.a);
    return this
  });
  c = function (d, e) {
    var g = Array.prototype.splice.apply(this.a, arguments);
    return T(a, g)
  };
  N(a, a.l, "splice", c);
  c = function (d, e) {
    return T(a,
      Array.prototype.slice.call(this.a, d, e))
  };
  N(a, a.l, "slice", c);
  c = function (d) {
    return Array.prototype.join.call(this.a, d)
  };
  N(a, a.l, "join", c);
  c = function (d) {
    for (var e = [], g = 0, n = a.u(this, "length"), p = 0; p < n; p++) {
      if (Bc(a, this, p)) {
        var z = a.u(this, p);
        e[g] = z
      }
      g++
    }
    for (p = 0; p < arguments.length; p++)
      if (n = arguments[p], U(a, n, a.l)) {
        z = a.u(n, "length");
        for (var A = 0; A < z; A++) Bc(a, n, A) && (e[g] = a.u(n, A)), g++
      } else e[g] = n;
    return T(a, e)
  };
  N(a, a.l, "concat", c);
  c = function (d, e) {
    return Array.prototype.indexOf.apply(this.a, arguments)
  };
  N(a, a.l,
    "indexOf", c);
  c = function (d, e) {
    return Array.prototype.lastIndexOf.apply(this.a, arguments)
  };
  N(a, a.l, "lastIndexOf", c);
  N(a, a.l, "sort", function () {
    Array.prototype.sort.call(this.a);
    return this
  });
  a.U.push("Object.defineProperty(Array.prototype, 'every',", "{configurable: true, writable: true, value:", "function(callbackfn, thisArg) {", "if (!this || typeof callbackfn !== 'function') throw TypeError();", "var T, k;", "var O = Object(this);", "var len = O.length >>> 0;", "if (arguments.length > 1) T = thisArg;", "k = 0;",
    "while (k < len) {", "if (k in O && !callbackfn.call(T, O[k], k, O)) return false;", "k++;", "}", "return true;", "}", "});", "Object.defineProperty(Array.prototype, 'filter',", "{configurable: true, writable: true, value:", "function(fun/*, thisArg*/) {", "if (this === void 0 || this === null || typeof fun !== 'function') throw TypeError();", "var t = Object(this);", "var len = t.length >>> 0;", "var res = [];", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in t) {",
    "var val = t[i];", "if (fun.call(thisArg, val, i, t)) res.push(val);", "}", "}", "return res;", "}", "});", "Object.defineProperty(Array.prototype, 'forEach',", "{configurable: true, writable: true, value:", "function(callback, thisArg) {", "if (!this || typeof callback !== 'function') throw TypeError();", "var T, k;", "var O = Object(this);", "var len = O.length >>> 0;", "if (arguments.length > 1) T = thisArg;", "k = 0;", "while (k < len) {", "if (k in O) callback.call(T, O[k], k, O);", "k++;", "}", "}", "});", "Object.defineProperty(Array.prototype, 'map',",
    "{configurable: true, writable: true, value:", "function(callback, thisArg) {", "if (!this || typeof callback !== 'function') new TypeError;", "var T, A, k;", "var O = Object(this);", "var len = O.length >>> 0;", "if (arguments.length > 1) T = thisArg;", "A = new Array(len);", "k = 0;", "while (k < len) {", "if (k in O) A[k] = callback.call(T, O[k], k, O);", "k++;", "}", "return A;", "}", "});", "Object.defineProperty(Array.prototype, 'reduce',", "{configurable: true, writable: true, value:", "function(callback /*, initialValue*/) {",
    "if (!this || typeof callback !== 'function') throw TypeError();", "var t = Object(this), len = t.length >>> 0, k = 0, value;", "if (arguments.length === 2) {", "value = arguments[1];", "} else {", "while (k < len && !(k in t)) k++;", "if (k >= len) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = t[k++];", "}", "for (; k < len; k++) {", "if (k in t) value = callback(value, t[k], k, t);", "}", "return value;", "}", "});", "Object.defineProperty(Array.prototype, 'reduceRight',",
    "{configurable: true, writable: true, value:", "function(callback /*, initialValue*/) {", "if (null === this || 'undefined' === typeof this || 'function' !== typeof callback) throw TypeError();", "var t = Object(this), len = t.length >>> 0, k = len - 1, value;", "if (arguments.length >= 2) {", "value = arguments[1];", "} else {", "while (k >= 0 && !(k in t)) k--;", "if (k < 0) {", "throw TypeError('Reduce of empty array with no initial value');", "}", "value = t[k--];", "}", "for (; k >= 0; k--) {", "if (k in t) value = callback(value, t[k], k, t);",
    "}", "return value;", "}", "});", "Object.defineProperty(Array.prototype, 'some',", "{configurable: true, writable: true, value:", "function(fun/*, thisArg*/) {", "if (!this || typeof fun !== 'function') throw TypeError();", "var t = Object(this);", "var len = t.length >>> 0;", "var thisArg = arguments.length >= 2 ? arguments[1] : void 0;", "for (var i = 0; i < len; i++) {", "if (i in t && fun.call(thisArg, t[i], i, t)) {", "return true;", "}", "}", "return false;", "}", "});", "(function() {", "var sort_ = Array.prototype.sort;",
    "Array.prototype.sort = function(opt_comp) {", "if (typeof opt_comp !== 'function') {", "return sort_.call(this);", "}", "for (var i = 0; i < this.length; i++) {", "var changes = 0;", "for (var j = 0; j < this.length - i - 1; j++) {", "if (opt_comp(this[j], this[j + 1]) > 0) {", "var swap = this[j];", "this[j] = this[j + 1];", "this[j + 1] = swap;", "changes++;", "}", "}", "if (!changes) break;", "}", "return this;", "};", "})();", "Object.defineProperty(Array.prototype, 'toLocaleString',", "{configurable: true, writable: true, value:",
    "function() {", "var out = [];", "for (var i = 0; i < this.length; i++) {", "out[i] = (this[i] === null || this[i] === undefined) ? '' : this[i].toLocaleString();", "}", "return out.join(',');", "}", "});", "")
}

function Gb(a, b) {
  var c = function (e) {
    e = arguments.length ? String(e) : "";
    return zc(a) ? (this.data = e, this) : e
  };
  a.w = a.b(c, !0);
  a.setProperty(b, "String", a.w);
  a.setProperty(a.w, "fromCharCode", a.b(String.fromCharCode, !1), B);
  c = "charAt charCodeAt concat indexOf lastIndexOf slice substr substring toLocaleLowerCase toLocaleUpperCase toLowerCase toUpperCase trim".split(" ");
  for (var d = 0; d < c.length; d++) N(a, a.w, c[d], String.prototype[c[d]]);
  c = function (e, g, n) {
    g = g ? a.J(g) : void 0;
    n = n ? a.J(n) : void 0;
    return String(this).localeCompare(e,
      g, n)
  };
  N(a, a.w, "localeCompare", c);
  c = function (e, g, n) {
    var p = String(this);
    g = g ? Number(g) : void 0;
    if (U(a, e, a.C) && (e = e.data, Cc(a, e, n), 2 === a.REGEXP_MODE)) {
      if (La) e = Dc(a, "string.split(separator, limit)", {
        string: p,
        separator: e,
        limit: g
      }, e, n), e !== Ja && n(T(a, e));
      else {
        var z = a.X(),
          A = Uc(a, e, z, n);
        z.onmessage = function (C) {
          clearTimeout(A);
          n(T(a, C.data))
        };
        z.postMessage(["split", p, e, g])
      }
      return
    }
    e = p.split(e, g);
    n(T(a, e))
  };
  Vc(a, a.w, "split", c);
  c = function (e, g) {
    var n = String(this);
    e = U(a, e, a.C) ? e.data : new RegExp(e);
    Cc(a, e, g);
    if (2 ===
      a.REGEXP_MODE)
      if (La) n = Dc(a, "string.match(regexp)", {
        string: n,
        regexp: e
      }, e, g), n !== Ja && g(n && T(a, n));
      else {
        var p = a.X(),
          z = Uc(a, e, p, g);
        p.onmessage = function (A) {
          clearTimeout(z);
          g(A.data && T(a, A.data))
        };
        p.postMessage(["match", n, e])
      }
    else n = n.match(e), g(n && T(a, n))
  };
  Vc(a, a.w, "match", c);
  c = function (e, g) {
    var n = String(this);
    e = U(a, e, a.C) ? e.data : new RegExp(e);
    Cc(a, e, g);
    if (2 === a.REGEXP_MODE)
      if (La) n = Dc(a, "string.search(regexp)", {
        string: n,
        regexp: e
      }, e, g), n !== Ja && g(n);
      else {
        var p = a.X(),
          z = Uc(a, e, p, g);
        p.onmessage = function (A) {
          clearTimeout(z);
          g(A.data)
        };
        p.postMessage(["search", n, e])
      }
    else g(n.search(e))
  };
  Vc(a, a.w, "search", c);
  c = function (e, g, n) {
    var p = String(this);
    g = String(g);
    if (U(a, e, a.C) && (e = e.data, Cc(a, e, n), 2 === a.REGEXP_MODE)) {
      if (La) e = Dc(a, "string.replace(substr, newSubstr)", {
        string: p,
        substr: e,
        newSubstr: g
      }, e, n), e !== Ja && n(e);
      else {
        var z = a.X(),
          A = Uc(a, e, z, n);
        z.onmessage = function (C) {
          clearTimeout(A);
          n(C.data)
        };
        z.postMessage(["replace", p, e, g])
      }
      return
    }
    n(p.replace(e, g))
  };
  Vc(a, a.w, "replace", c);
  a.U.push("(function() {", "var replace_ = String.prototype.replace;",
    "String.prototype.replace = function(substr, newSubstr) {", "if (typeof newSubstr !== 'function') {", "return replace_.call(this, substr, newSubstr);", "}", "var str = this;", "if (substr instanceof RegExp) {", "var subs = [];", "var m = substr.exec(str);", "while (m) {", "m.push(m.index, str);", "var inject = newSubstr.apply(null, m);", "subs.push([m.index, m[0].length, inject]);", "m = substr.global ? substr.exec(str) : null;", "}", "for (var i = subs.length - 1; i >= 0; i--) {", "str = str.substring(0, subs[i][0]) + subs[i][2] + str.substring(subs[i][0] + subs[i][1]);",
    "}", "} else {", "var i = str.indexOf(substr);", "if (i !== -1) {", "var inject = newSubstr(str.substr(i, substr.length), i, str);", "str = str.substring(0, i) + inject + str.substring(i + substr.length);", "}", "}", "return str;", "};", "})();", "")
}

function Hb(a, b) {
  a.Ya = a.b(function (c) {
    c = !!c;
    return zc(a) ? (this.data = c, this) : c
  }, !0);
  a.setProperty(b, "Boolean", a.Ya)
}

function Ib(a, b) {
  var c = function (e) {
    e = arguments.length ? Number(e) : 0;
    return zc(a) ? (this.data = e, this) : e
  };
  a.S = a.b(c, !0);
  a.setProperty(b, "Number", a.S);
  c = ["MAX_VALUE", "MIN_VALUE", "NaN", "NEGATIVE_INFINITY", "POSITIVE_INFINITY"];
  for (var d = 0; d < c.length; d++) a.setProperty(a.S, c[d], Number[c[d]], E);
  c = function (e) {
    try {
      return Number(this).toExponential(e)
    } catch (g) {
      I(a, a.v, g.message)
    }
  };
  N(a, a.S, "toExponential", c);
  c = function (e) {
    try {
      return Number(this).toFixed(e)
    } catch (g) {
      I(a, a.v, g.message)
    }
  };
  N(a, a.S, "toFixed", c);
  c = function (e) {
    try {
      return Number(this).toPrecision(e)
    } catch (g) {
      I(a,
        a.v, g.message)
    }
  };
  N(a, a.S, "toPrecision", c);
  c = function (e) {
    try {
      return Number(this).toString(e)
    } catch (g) {
      I(a, a.v, g.message)
    }
  };
  N(a, a.S, "toString", c);
  c = function (e, g) {
    e = e ? a.J(e) : void 0;
    g = g ? a.J(g) : void 0;
    return Number(this).toLocaleString(e, g)
  };
  N(a, a.S, "toLocaleString", c)
}

function Jb(a, b) {
  var c = function (g, n) {
    if (!zc(a)) return Date();
    var p = [null].concat(Array.from(arguments));
    this.data = new(Function.prototype.bind.apply(Date, p));
    return this
  };
  a.R = a.b(c, !0);
  a.Za = a.R.a.prototype;
  a.setProperty(b, "Date", a.R);
  a.setProperty(a.R, "now", a.b(Date.now, !1), B);
  a.setProperty(a.R, "parse", a.b(Date.parse, !1), B);
  a.setProperty(a.R, "UTC", a.b(Date.UTC, !1), B);
  for (var d = "getDate getDay getFullYear getHours getMilliseconds getMinutes getMonth getSeconds getTime getTimezoneOffset getUTCDate getUTCDay getUTCFullYear getUTCHours getUTCMilliseconds getUTCMinutes getUTCMonth getUTCSeconds getYear setDate setFullYear setHours setMilliseconds setMinutes setMonth setSeconds setTime setUTCDate setUTCFullYear setUTCHours setUTCMilliseconds setUTCMinutes setUTCMonth setUTCSeconds setYear toDateString toISOString toJSON toGMTString toLocaleDateString toLocaleString toLocaleTimeString toTimeString toUTCString".split(" "),
      e = 0; e < d.length; e++) c = function (g) {
    return function (n) {
      for (var p = [], z = 0; z < arguments.length; z++) p[z] = a.J(arguments[z]);
      return this.data[g].apply(this.data, p)
    }
  }(d[e]), N(a, a.R, d[e], c)
}

function Kb(a, b) {
  var c = function (d, e) {
    var g = zc(a) ? this : a.h(a.Aa);
    d = d ? String(d) : "";
    e = e ? String(e) : "";
    Wc(a, g, new RegExp(d, e));
    return g
  };
  a.C = a.b(c, !0);
  a.Aa = a.C.a.prototype;
  a.setProperty(b, "RegExp", a.C);
  a.setProperty(a.C.a.prototype, "global", void 0, E);
  a.setProperty(a.C.a.prototype, "ignoreCase", void 0, E);
  a.setProperty(a.C.a.prototype, "multiline", void 0, E);
  a.setProperty(a.C.a.prototype, "source", "(?:)", E);
  a.U.push("Object.defineProperty(RegExp.prototype, 'test',", "{configurable: true, writable: true, value:",
    "function(str) {", "return String(str).search(this) !== -1", "}", "});");
  c = function (d, e) {
    function g(C) {
      if (C) {
        var ja = T(a, C);
        a.setProperty(ja, "index", C.index);
        a.setProperty(ja, "input", C.input);
        return ja
      }
      return null
    }
    var n = this.data;
    d = String(d);
    n.lastIndex = Number(a.u(this, "lastIndex"));
    Cc(a, n, e);
    if (2 === a.REGEXP_MODE)
      if (La) {
        var p = Dc(a, "regexp.exec(string)", {
          string: d,
          regexp: n
        }, n, e);
        p !== Ja && (a.setProperty(this, "lastIndex", n.lastIndex), e(g(p)))
      } else {
        p = a.X();
        var z = Uc(a, n, p, e),
          A = this;
        p.onmessage = function (C) {
          clearTimeout(z);
          a.setProperty(A, "lastIndex", C.data[1]);
          e(g(C.data[0]))
        };
        p.postMessage(["exec", n, n.lastIndex, d])
      }
    else p = n.exec(d), a.setProperty(this, "lastIndex", n.lastIndex), e(g(p))
  };
  Vc(a, a.C, "exec", c)
}

function Lb(a, b) {
  function c(d) {
    var e = a.b(function (g) {
      var n = zc(a) ? this : a.ma(e);
      g && a.setProperty(n, "message", String(g), B);
      return n
    }, !0);
    a.setProperty(e, "prototype", a.ma(a.v), B);
    a.setProperty(e.a.prototype, "name", d, B);
    a.setProperty(b, d, e);
    return e
  }
  a.v = a.b(function (d) {
    var e = zc(a) ? this : a.ma(a.v);
    d && a.setProperty(e, "message", String(d), B);
    return e
  }, !0);
  a.setProperty(b, "Error", a.v);
  a.setProperty(a.v.a.prototype, "message", "", B);
  a.setProperty(a.v.a.prototype, "name", "Error", B);
  c("EvalError");
  a.$a = c("RangeError");
  a.ab = c("ReferenceError");
  a.da = c("SyntaxError");
  a.g = c("TypeError");
  a.rb = c("URIError")
}

function Mb(a, b) {
  var c = a.h(a.B);
  a.setProperty(b, "Math", c);
  for (var d = "E LN2 LN10 LOG2E LOG10E PI SQRT1_2 SQRT2".split(" "), e = 0; e < d.length; e++) a.setProperty(c, d[e], Math[d[e]], E);
  d = "abs acos asin atan atan2 ceil cos exp floor log max min pow random round sin sqrt tan".split(" ");
  for (e = 0; e < d.length; e++) a.setProperty(c, d[e], a.b(Math[d[e]], !1), B)
}

function Nb(a, b) {
  function c(e) {
    try {
      var g = JSON.parse(String(e))
    } catch (n) {
      I(a, a.da, n.message)
    }
    return a.ua(g)
  }
  var d = a.h(a.B);
  a.setProperty(b, "JSON", d);
  a.setProperty(d, "parse", a.b(c, !1));
  c = function (e, g, n) {
    g && "Function" === g.F ? I(a, a.g, "Function replacer on JSON.stringify not supported") : g && "Array" === g.F ? (g = yc(a, g), g = g.filter(function (z) {
      return "string" === typeof z || "number" === typeof z
    })) : g = null;
    "string" !== typeof n && "number" !== typeof n && (n = void 0);
    e = a.J(e);
    try {
      var p = JSON.stringify(e, g, n)
    } catch (z) {
      I(a, a.g,
        z.message)
    }
    return p
  };
  a.setProperty(d, "stringify", a.b(c, !1))
}

function U(a, b, c) {
  if (null === b || void 0 === b || !c) return !1;
  c = c.a.prototype;
  if (b === c) return !0;
  for (b = Pb(a, b); b;) {
    if (b === c) return !0;
    b = b.la
  }
  return !1
}

function Wc(a, b, c) {
  b.data = new RegExp(c.source, c.flags);
  a.setProperty(b, "lastIndex", c.lastIndex, B);
  a.setProperty(b, "source", c.source, E);
  a.setProperty(b, "global", c.global, E);
  a.setProperty(b, "ignoreCase", c.ignoreCase, E);
  a.setProperty(b, "multiline", c.multiline, E)
}
q.X = function () {
  var a = this.X.vb;
  a || (a = new Blob([Ma.join("\n")], {
    type: "application/javascript"
  }), this.X.vb = a);
  return new Worker(URL.createObjectURL(a))
};

function Dc(a, b, c, d, e) {
  var g = {
    timeout: a.REGEXP_THREAD_TIMEOUT
  };
  try {
    return La.runInNewContext(b, c, g)
  } catch (n) {
    e(null), I(a, a.v, "RegExp Timeout: " + d)
  }
  return Ja
}

function Cc(a, b, c) {
  if (0 === a.REGEXP_MODE) var d = !1;
  else if (1 === a.REGEXP_MODE) d = !0;
  else if (La) d = !0;
  else if ("function" === typeof Worker && "function" === typeof URL) d = !0;
  else if ("function" === typeof require) {
    try {
      La = require("vm")
    } catch (e) {}
    d = !!La
  } else d = !1;
  d || (c(null), I(a, a.v, "Regular expressions not supported: " + b))
}

function Uc(a, b, c, d) {
  return setTimeout(function () {
    c.terminate();
    d(null);
    try {
      I(a, a.v, "RegExp Timeout: " + b)
    } catch (e) {}
  }, a.REGEXP_THREAD_TIMEOUT)
}
q.ma = function (a) {
  return this.h(a && a.a.prototype)
};
q.h = function (a) {
  if ("object" !== typeof a) throw Error("Non object prototype");
  a = new F(a);
  U(this, a, this.v) && (a.F = "Error");
  return a
};

function Ac(a) {
  var b = a.h(a.za);
  a.setProperty(b, "length", 0, {
    configurable: !1,
    enumerable: !1,
    writable: !0
  });
  b.F = "Array";
  return b
}

function Xc(a, b, c) {
  var d = a.h(a.W);
  c ? (c = a.h(a.B), a.setProperty(d, "prototype", c, B), a.setProperty(c, "constructor", d, B)) : d.Hb = !0;
  a.setProperty(d, "length", b, E);
  d.F = "Function";
  return d
}

function xc(a, b, c) {
  a = Xc(a, b.params.length, !0);
  a.va = c;
  a.node = b;
  return a
}
q.b = function (a, b) {
  var c = Xc(this, a.length, b);
  c.Ga = a;
  a.id = this.Sa++;
  return c
};
q.eb = function (a) {
  var b = Xc(this, a.length, !0);
  b.Ma = a;
  a.id = this.Sa++;
  return b
};
q.ua = function (a) {
  if (a instanceof F) throw Error("Object is already pseudo");
  if ("object" !== typeof a && "function" !== typeof a || null === a) return a;
  if (a instanceof RegExp) {
    var b = this.h(this.Aa);
    Wc(this, b, a);
    return b
  }
  if (a instanceof Date) return b = this.h(this.Za), b.data = new Date(a.valueOf()), b;
  if ("function" === typeof a) {
    var c = this;
    return this.b(function () {
      var e = Array.prototype.slice.call(arguments).map(function (g) {
        return c.J(g)
      });
      e = a.apply(c, e);
      return c.ua(e)
    }, !!Object.getOwnPropertyDescriptor(a, "prototype"))
  }
  if (Array.isArray(a)) {
    b =
      Ac(this);
    for (var d = 0; d < a.length; d++) d in a && this.setProperty(b, d, this.ua(a[d]));
    return b
  }
  b = this.h(this.B);
  for (d in a) this.setProperty(b, d, this.ua(a[d]));
  return b
};
q.J = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a || null === a) return a;
  if (!(a instanceof F)) throw Error("Object is not pseudo");
  if (U(this, a, this.C)) {
    var c = new RegExp(a.data.source, a.data.flags);
    c.lastIndex = a.data.lastIndex;
    return c
  }
  if (U(this, a, this.R)) return new Date(a.data.valueOf());
  c = b || {
    Va: [],
    Fa: []
  };
  var d = c.Va.indexOf(a);
  if (-1 !== d) return c.Fa[d];
  c.Va.push(a);
  if (U(this, a, this.l)) {
    var e = [];
    c.Fa.push(e);
    var g = this.u(a, "length");
    for (d = 0; d < g; d++) Bc(this, a, d) && (e[d] = this.J(this.u(a, d), c))
  } else
    for (g in e = {}, c.Fa.push(e), a.a) "__proto__" !== g && (d = a.a[g], e[g] = this.J(d, c));
  c.Va.pop();
  c.Fa.pop();
  return e
};

function T(a, b) {
  for (var c = Ac(a), d = Object.getOwnPropertyNames(b), e = 0; e < d.length; e++) a.setProperty(c, d[e], b[d[e]]);
  return c
}

function yc(a, b) {
  var c = [],
    d;
  for (d in b.a) c[d] = a.u(b, d);
  c.length = Na(a.u(b, "length")) || 0;
  return c
}

function Pb(a, b) {
  switch (typeof b) {
    case "number":
      return a.S.a.prototype;
    case "boolean":
      return a.Ya.a.prototype;
    case "string":
      return a.w.a.prototype
  }
  return b ? b.la : null
}
q.u = function (a, b) {
  if (this.I) throw Error("Getter not supported in that context");
  b = String(b);
  void 0 !== a && null !== a || I(this, this.g, "Cannot read property '" + b + "' of " + a);
  if ("object" === typeof a && !(a instanceof F)) throw TypeError("Expecting native value or pseudo object");
  if ("length" === b) {
    if (U(this, a, this.w)) return String(a).length
  } else if (64 > b.charCodeAt(0) && U(this, a, this.w)) {
    var c = Oa(b);
    if (!isNaN(c) && c < String(a).length) return String(a)[c]
  }
  do
    if (a.a && b in a.a) return (c = a.L[b]) ? (this.I = !0, c) : a.a[b]; while (a =
    Pb(this, a))
};

function Bc(a, b, c) {
  if (!(b instanceof F)) throw TypeError("Primitive data type has no properties");
  c = String(c);
  if ("length" === c && U(a, b, a.w)) return !0;
  if (U(a, b, a.w)) {
    var d = Oa(c);
    if (!isNaN(d) && d < String(b).length) return !0
  }
  do
    if (b.a && c in b.a) return !0; while (b = Pb(a, b));
  return !1
}
q.setProperty = function (a, b, c, d) {
  if (this.ya) throw Error("Setter not supported in that context");
  b = String(b);
  void 0 !== a && null !== a || I(this, this.g, "Cannot set property '" + b + "' of " + a);
  if ("object" === typeof a && !(a instanceof F)) throw TypeError("Expecting native value or pseudo object");
  d && ("get" in d || "set" in d) && ("value" in d || "writable" in d) && I(this, this.g, "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute");
  var e = !this.j || Ob(this).P;
  if (a instanceof F) {
    if (U(this,
        a, this.w)) {
      var g = Oa(b);
      if ("length" === b || !isNaN(g) && g < String(a).length) {
        e && I(this, this.g, "Cannot assign to read only property '" + b + "' of String '" + a.data + "'");
        return
      }
    }
    if ("Array" === a.F)
      if (g = a.a.length, "length" === b) {
        if (d) {
          if (!("value" in d)) return;
          c = d.value
        }
        c = Na(c);
        isNaN(c) && I(this, this.$a, "Invalid array length");
        if (c < g)
          for (n in a.a) {
            var n = Oa(n);
            !isNaN(n) && c <= n && delete a.a[n]
          }
      } else isNaN(n = Oa(b)) || (a.a.length = Math.max(g, n + 1));
    if (!a.preventExtensions || b in a.a)
      if (d) {
        "get" in d && (d.get ? a.L[b] = d.get : delete a.L[b]);
        "set" in d && (d.set ? a.O[b] = d.set : delete a.O[b]);
        e = {};
        "configurable" in d && (e.configurable = d.configurable);
        "enumerable" in d && (e.enumerable = d.enumerable);
        "writable" in d && (e.writable = d.writable, delete a.L[b], delete a.O[b]);
        "value" in d ? (e.value = d.value, delete a.L[b], delete a.O[b]) : c !== Ia && (e.value = c, delete a.L[b], delete a.O[b]);
        try {
          Object.defineProperty(a.a, b, e)
        } catch (p) {
          I(this, this.g, "Cannot redefine property: " + b)
        }
      } else {
        if (c === Ia) throw ReferenceError("Value not specified.");
        for (d = a; !(b in d.a);)
          if (d = Pb(this,
              d), !d) {
            d = a;
            break
          } if (d.O && d.O[b]) return this.ya = !0, d.O[b];
        if (d.L && d.L[b]) e && I(this, this.g, "Cannot set property '" + b + "' of object '" + a + "' which only has a getter");
        else try {
          a.a[b] = c
        } catch (p) {
          e && I(this, this.g, "Cannot assign to read only property '" + b + "' of object '" + a + "'")
        }
      }
    else e && I(this, this.g, "Can't add property '" + b + "', object is not extensible")
  } else e && I(this, this.g, "Can't create property '" + b + "' on '" + a + "'")
};

function N(a, b, c, d) {
  a.setProperty(b.a.prototype, c, a.b(d, !1), B)
}

function Vc(a, b, c, d) {
  a.setProperty(b.a.prototype, c, a.eb(d), B)
}

function Ob(a) {
  a = a.j[a.j.length - 1].scope;
  if (!a) throw Error("No scope found.");
  return a
}

function ia(a, b, c) {
  var d = !1;
  if (c && c.P) d = !0;
  else {
    var e = b.body && b.body[0];
    e && e.qa && "Literal" === e.qa.type && "use strict" === e.qa.value && (d = !0)
  }
  e = a.h(null);
  d = new Yc(c, d, e);
  c || Qa(a, d.object);
  Pa(a, b, d);
  return d
}

function Zc(a, b, c) {
  if (!b) throw Error("parentScope required");
  a = c || a.h(null);
  return new Yc(b, b.P, a)
}

function $c(a, b) {
  for (var c = Ob(a); c && c !== a.M;) {
    if (b in c.object.a) return c.object.a[b];
    c = c.va
  }
  if (c === a.M && Bc(a, c.object, b)) return a.u(c.object, b);
  c = a.j[a.j.length - 1].node;
  "UnaryExpression" === c.type && "typeof" === c.operator || I(a, a.ab, b + " is not defined")
}

function ad(a, b, c) {
  for (var d = Ob(a), e = d.P; d && d !== a.M;) {
    if (b in d.object.a) {
      d.object.a[b] = c;
      return
    }
    d = d.va
  }
  if (d === a.M && (!e || Bc(a, d.object, b))) return a.setProperty(d.object, b, c);
  I(a, a.ab, b + " is not defined")
}

function Pa(a, b, c) {
  if ("VariableDeclaration" === b.type)
    for (var d = 0; d < b.declarations.length; d++) a.setProperty(c.object, b.declarations[d].id.name, void 0, za);
  else {
    if ("FunctionDeclaration" === b.type) {
      a.setProperty(c.object, b.id.name, xc(a, b, c), za);
      return
    }
    if ("FunctionExpression" === b.type || "ExpressionStatement" === b.type) return
  }
  var e = b.constructor,
    g;
  for (g in b) {
    var n = b[g];
    if (n && "object" === typeof n)
      if (Array.isArray(n))
        for (d = 0; d < n.length; d++) n[d] && n[d].constructor === e && Pa(a, n[d], c);
      else n.constructor === e && Pa(a,
        n, c)
  }
}

function zc(a) {
  return a.j[a.j.length - 1].isConstructor
}

function bd(a, b) {
  return b[0] === Ba ? $c(a, b[1]) : a.u(b[0], b[1])
}

function cd(a, b, c) {
  return b[0] === Ba ? ad(a, b[1], c) : a.setProperty(b[0], b[1], c)
}

function I(a, b, c) {
  void 0 !== c && (b = a.ma(b), a.setProperty(b, "message", c, B));
  dd(a, 4, b, void 0);
  throw Aa;
}

function dd(a, b, c, d) {
  if (0 === b) throw TypeError("Should not unwind for NORMAL completions");
  var e = a.j;
  a: for (; 0 < e.length; e.pop()) {
    var g = e[e.length - 1];
    switch (g.node.type) {
      case "TryStatement":
        g.T = {
          type: b,
          value: c,
          label: d
        };
        return;
      case "CallExpression":
      case "NewExpression":
        if (3 === b) {
          g.value = c;
          return
        }
        if (4 !== b) throw Error("Unsynatctic break/continue not rejected by Acorn");
        break;
      case "Program":
        g.done = !0;
        break a
    }
    if (1 === b) {
      if (d ? g.labels && -1 !== g.labels.indexOf(d) : g.N || g.Jb) {
        e.pop();
        return
      }
    } else if (2 === b && (d ? g.labels &&
        -1 !== g.labels.indexOf(d) : g.N)) return
  }
  U(a, c, a.v) ? (b = {
    EvalError: EvalError,
    RangeError: RangeError,
    ReferenceError: ReferenceError,
    SyntaxError: SyntaxError,
    TypeError: TypeError,
    URIError: URIError
  }, d = String(a.u(c, "name")), a = a.u(c, "message").valueOf(), a = (b[d] || Error)(a)) : a = String(c);
  throw a;
}

function ed(a, b, c) {
  if (!a.I) throw Error("Unexpected call to createGetter");
  a.I = !1;
  c = Array.isArray(c) ? c[0] : c;
  var d = new a.Ha({
    options: {}
  });
  d.type = "CallExpression";
  a = new v(d, a.j[a.j.length - 1].scope);
  a.ha = !0;
  a.G = c;
  a.Z = b;
  a.Qa = !0;
  a.A = [];
  return a
}

function fd(a, b, c, d) {
  if (!a.ya) throw Error("Unexpected call to createSetter");
  a.ya = !1;
  c = Array.isArray(c) ? c[0] : a.Da;
  var e = new a.Ha({
    options: {}
  });
  e.type = "CallExpression";
  a = new v(e, a.j[a.j.length - 1].scope);
  a.ha = !0;
  a.G = c;
  a.Z = b;
  a.Qa = !0;
  a.A = [d];
  return a
}

function v(a, b) {
  this.node = a;
  this.scope = b
}

function Yc(a, b, c) {
  this.va = a;
  this.P = b;
  this.object = c
}

function F(a) {
  this.L = Object.create(null);
  this.O = Object.create(null);
  this.a = Object.create(null);
  this.la = a
}
q = F.prototype;
q.la = null;
q.F = "Object";
q.data = null;
q.toString = function () {
  if (!(this instanceof F)) return String(this);
  if ("Array" === this.F) {
    var a = Ka;
    a.push(this);
    try {
      for (var b = [], c = 0; c < this.a.length; c++) {
        var d = this.a[c];
        b[c] = d instanceof F && -1 !== a.indexOf(d) ? "..." : d
      }
    } finally {
      a.pop()
    }
    return b.join(",")
  }
  if ("Error" === this.F) {
    a = Ka;
    if (-1 !== a.indexOf(this)) return "[object Error]";
    d = this;
    do
      if ("name" in d.a) {
        b = d.a.name;
        break
      } while (d = d.la);
    d = this;
    do
      if ("message" in d.a) {
        c = d.a.message;
        break
      } while (d = d.la);
    a.push(this);
    try {
      b = b && String(b), c = c && String(c)
    } finally {
      a.pop()
    }
    return c ?
      b + ": " + c : String(b)
  }
  return null !== this.data ? String(this.data) : "[object " + this.F + "]"
};
q.valueOf = function () {
  return void 0 === this.data || null === this.data || this.data instanceof RegExp ? this : this.data instanceof Date ? this.data.valueOf() : this.data
};
u.prototype.stepArrayExpression = function (a, b, c) {
  c = c.elements;
  var d = b.o || 0;
  b.Ba ? (this.setProperty(b.Ba, d, b.value), d++) : (b.Ba = Ac(this), b.Ba.a.length = c.length);
  for (; d < c.length;) {
    if (c[d]) return b.o = d, new v(c[d], b.scope);
    d++
  }
  a.pop();
  a[a.length - 1].value = b.Ba
};
u.prototype.stepAssignmentExpression = function (a, b, c) {
  if (!b.Y) return b.Y = !0, b = new v(c.left, b.scope), b.ga = !0, b;
  if (!b.pa) {
    b.ra || (b.ra = b.value);
    b.na && (b.$ = b.value);
    if (!b.na && "=" !== c.operator && (a = bd(this, b.ra), b.$ = a, this.I)) return b.na = !0, ed(this, a, b.ra);
    b.pa = !0;
    return new v(c.right, b.scope)
  }
  if (b.ia) a.pop(), a[a.length - 1].value = b.Wa;
  else {
    var d = b.$,
      e = b.value;
    switch (c.operator) {
      case "=":
        d = e;
        break;
      case "+=":
        d += e;
        break;
      case "-=":
        d -= e;
        break;
      case "*=":
        d *= e;
        break;
      case "/=":
        d /= e;
        break;
      case "%=":
        d %= e;
        break;
      case "<<=":
        d <<=
          e;
        break;
      case ">>=":
        d >>= e;
        break;
      case ">>>=":
        d >>>= e;
        break;
      case "&=":
        d &= e;
        break;
      case "^=":
        d ^= e;
        break;
      case "|=":
        d |= e;
        break;
      default:
        throw SyntaxError("Unknown assignment expression: " + c.operator);
    }
    if (c = cd(this, b.ra, d)) return b.ia = !0, b.Wa = d, fd(this, c, b.ra, d);
    a.pop();
    a[a.length - 1].value = d
  }
};
u.prototype.stepBinaryExpression = function (a, b, c) {
  if (!b.Y) return b.Y = !0, new v(c.left, b.scope);
  if (!b.pa) return b.pa = !0, b.$ = b.value, new v(c.right, b.scope);
  a.pop();
  var d = b.$;
  b = b.value;
  switch (c.operator) {
    case "==":
      c = d == b;
      break;
    case "!=":
      c = d != b;
      break;
    case "===":
      c = d === b;
      break;
    case "!==":
      c = d !== b;
      break;
    case ">":
      c = d > b;
      break;
    case ">=":
      c = d >= b;
      break;
    case "<":
      c = d < b;
      break;
    case "<=":
      c = d <= b;
      break;
    case "+":
      c = d + b;
      break;
    case "-":
      c = d - b;
      break;
    case "*":
      c = d * b;
      break;
    case "/":
      c = d / b;
      break;
    case "%":
      c = d % b;
      break;
    case "&":
      c = d &
        b;
      break;
    case "|":
      c = d | b;
      break;
    case "^":
      c = d ^ b;
      break;
    case "<<":
      c = d << b;
      break;
    case ">>":
      c = d >> b;
      break;
    case ">>>":
      c = d >>> b;
      break;
    case "in":
      b instanceof F || I(this, this.g, "'in' expects an object, not '" + b + "'");
      c = Bc(this, b, d);
      break;
    case "instanceof":
      U(this, b, this.H) || I(this, this.g, "Right-hand side of instanceof is not an object");
      c = d instanceof F ? U(this, d, b) : !1;
      break;
    default:
      throw SyntaxError("Unknown binary operator: " + c.operator);
  }
  a[a.length - 1].value = c
};
u.prototype.stepBlockStatement = function (a, b, c) {
  var d = b.o || 0;
  if (c = c.body[d]) return b.o = d + 1, new v(c, b.scope);
  a.pop()
};
u.prototype.stepBreakStatement = function (a, b, c) {
  dd(this, 1, void 0, c.label && c.label.name)
};
u.prototype.stepCallExpression = function (a, b, c) {
  if (!b.ha) {
    b.ha = 1;
    var d = new v(c.callee, b.scope);
    d.ga = !0;
    return d
  }
  if (1 === b.ha) {
    b.ha = 2;
    d = b.value;
    if (Array.isArray(d)) {
      if (b.Z = bd(this, d), d[0] === Ba ? b.yb = "eval" === d[1] : b.G = d[0], d = b.Z, this.I) return b.ha = 1, ed(this, d, b.value)
    } else b.Z = d;
    b.A = [];
    b.o = 0
  }
  d = b.Z;
  if (!b.Qa) {
    0 !== b.o && b.A.push(b.value);
    if (c.arguments[b.o]) return new v(c.arguments[b.o++], b.scope);
    if ("NewExpression" === c.type) {
      d.Hb && I(this, this.g, d + " is not a constructor");
      if (d === this.l) b.G = Ac(this);
      else {
        var e =
          d.a.prototype;
        if ("object" !== typeof e || null === e) e = this.B;
        b.G = this.h(e)
      }
      b.isConstructor = !0
    } else void 0 === b.G && (b.G = b.scope.P ? void 0 : this.Da);
    b.Qa = !0
  }
  if (b.Ra) a.pop(), a[a.length - 1].value = b.isConstructor && "object" !== typeof b.value ? b.G : b.value;
  else {
    b.Ra = !0;
    d instanceof F || I(this, this.g, d + " is not a function");
    if (a = d.node) {
      c = ia(this, a.body, d.va);
      for (var g = 0; g < a.params.length; g++) this.setProperty(c.object, a.params[g].name, b.A.length > g ? b.A[g] : void 0);
      e = Ac(this);
      for (g = 0; g < b.A.length; g++) this.setProperty(e,
        g, b.A[g]);
      this.setProperty(c.object, "arguments", e);
      (g = a.id && a.id.name) && this.setProperty(c.object, g, d);
      this.setProperty(c.object, "this", b.G, ya);
      b.value = void 0;
      return new v(a.body, c)
    }
    if (d.eval)
      if (d = b.A[0], "string" !== typeof d) b.value = d;
      else {
        try {
          g = acorn.parse(String(d), ha)
        } catch (p) {
          I(this, this.da, "Invalid code: " + p.message)
        }
        d = new this.Ha({
          options: {}
        });
        d.type = "EvalProgram_";
        d.body = g.body;
        ra(d, c.start, c.end);
        c = b.yb ? b.scope : this.M;
        c.P ? c = ia(this, g, c) : Pa(this, g, c);
        this.value = void 0;
        return new v(d, c)
      }
    else if (d.Ga) b.value =
      d.Ga.apply(b.G, b.A);
    else if (d.Ma) {
      var n = this;
      g = d.Ma.length - 1;
      g = b.A.concat(Array(g)).slice(0, g);
      g.push(function (p) {
        b.value = p;
        n.wa = !1
      });
      this.wa = !0;
      d.Ma.apply(b.G, g)
    } else I(this, this.g, d.F + " is not callable")
  }
};
u.prototype.stepCatchClause = function (a, b, c) {
  if (b.K) a.pop();
  else return b.K = !0, a = Zc(this, b.scope), this.setProperty(a.object, c.param.name, b.Qb), new v(c.body, a)
};
u.prototype.stepConditionalExpression = function (a, b, c) {
  var d = b.ba || 0;
  if (0 === d) return b.ba = 1, new v(c.test, b.scope);
  if (1 === d) {
    b.ba = 2;
    if ((d = !!b.value) && c.consequent) return new v(c.consequent, b.scope);
    if (!d && c.alternate) return new v(c.alternate, b.scope);
    this.value = void 0
  }
  a.pop();
  "ConditionalExpression" === c.type && (a[a.length - 1].value = b.value)
};
u.prototype.stepContinueStatement = function (a, b, c) {
  dd(this, 2, void 0, c.label && c.label.name)
};
u.prototype.stepDebuggerStatement = function (a) {
  a.pop()
};
u.prototype.stepDoWhileStatement = function (a, b, c) {
  "DoWhileStatement" === c.type && void 0 === b.V && (b.value = !0, b.V = !0);
  if (!b.V) return b.V = !0, new v(c.test, b.scope);
  if (!b.value) a.pop();
  else if (c.body) return b.V = !1, b.N = !0, new v(c.body, b.scope)
};
u.prototype.stepEmptyStatement = function (a) {
  a.pop()
};
u.prototype.stepEvalProgram_ = function (a, b, c) {
  var d = b.o || 0;
  if (c = c.body[d]) return b.o = d + 1, new v(c, b.scope);
  a.pop();
  a[a.length - 1].value = this.value
};
u.prototype.stepExpressionStatement = function (a, b, c) {
  if (!b.K) return b.K = !0, new v(c.expression, b.scope);
  a.pop();
  this.value = b.value
};
u.prototype.stepForInStatement = function (a, b, c) {
  if (!b.Db && (b.Db = !0, c.left.declarations && c.left.declarations[0].init)) return b.scope.P && I(this, this.da, "for-in loop variable declaration may not have an initializer."), new v(c.left, b.scope);
  if (!b.oa) return b.oa = !0, b.ca || (b.ca = b.value), new v(c.right, b.scope);
  b.N || (b.N = !0, b.i = b.value, b.Xa = Object.create(null));
  if (void 0 === b.Ea) a: for (;;) {
    if (b.i instanceof F)
      for (b.ka || (b.ka = Object.getOwnPropertyNames(b.i.a));;) {
        var d = b.ka.shift();
        if (void 0 === d) break;
        if (Object.prototype.hasOwnProperty.call(b.i.a,
            d) && !b.Xa[d] && (b.Xa[d] = !0, Object.prototype.propertyIsEnumerable.call(b.i.a, d))) {
          b.Ea = d;
          break a
        }
      } else if (null !== b.i && void 0 !== b.i)
        for (b.ka || (b.ka = Object.getOwnPropertyNames(b.i));;) {
          d = b.ka.shift();
          if (void 0 === d) break;
          b.Xa[d] = !0;
          if (Object.prototype.propertyIsEnumerable.call(b.i, d)) {
            b.Ea = d;
            break a
          }
        }
    b.i = Pb(this, b.i);
    b.ka = null;
    if (null === b.i) {
      a.pop();
      return
    }
  }
  if (!b.hb)
    if (b.hb = !0, a = c.left, "VariableDeclaration" === a.type) b.ca = [Ba, a.declarations[0].id.name];
    else return b.ca = null, b = new v(a, b.scope), b.ga = !0, b;
  b.ca || (b.ca = b.value);
  if (!b.ia && (b.ia = !0, a = b.Ea, d = cd(this, b.ca, a))) return fd(this, d, b.ca, a);
  b.Ea = void 0;
  b.hb = !1;
  b.ia = !1;
  if (c.body) return new v(c.body, b.scope)
};
u.prototype.stepForStatement = function (a, b, c) {
  var d = b.ba || 0;
  if (0 === d) {
    if (b.ba = 1, c.init) return new v(c.init, b.scope)
  } else if (1 === d) {
    if (b.ba = 2, c.test) return new v(c.test, b.scope)
  } else if (2 === d)
    if (b.ba = 3, c.test && !b.value) a.pop();
    else return b.N = !0, new v(c.body, b.scope);
  else if (3 === d && (b.ba = 1, c.update)) return new v(c.update, b.scope)
};
u.prototype.stepFunctionDeclaration = function (a) {
  a.pop()
};
u.prototype.stepFunctionExpression = function (a, b, c) {
  a.pop();
  a[a.length - 1].value = xc(this, c, b.scope)
};
u.prototype.stepIdentifier = function (a, b, c) {
  a.pop();
  if (b.ga) a[a.length - 1].value = [Ba, c.name];
  else {
    var d = $c(this, c.name);
    if (this.I) {
      for (a = b.scope; !Bc(this, a, c.name);) a = a.va;
      return ed(this, d, this.Da)
    }
    a[a.length - 1].value = d
  }
};
u.prototype.stepIfStatement = u.prototype.stepConditionalExpression;
u.prototype.stepLabeledStatement = function (a, b, c) {
  a.pop();
  a = b.labels || [];
  a.push(c.label.name);
  b = new v(c.body, b.scope);
  b.labels = a;
  return b
};
u.prototype.stepLiteral = function (a, b, c) {
  a.pop();
  b = c.value;
  b instanceof RegExp && (c = this.h(this.Aa), Wc(this, c, b), b = c);
  a[a.length - 1].value = b
};
u.prototype.stepLogicalExpression = function (a, b, c) {
  if ("&&" !== c.operator && "||" !== c.operator) throw SyntaxError("Unknown logical operator: " + c.operator);
  if (!b.Y) return b.Y = !0, new v(c.left, b.scope);
  if (b.pa) a.pop(), a[a.length - 1].value = b.value;
  else if ("&&" === c.operator && !b.value || "||" === c.operator && b.value) a.pop(), a[a.length - 1].value = b.value;
  else return b.pa = !0, new v(c.right, b.scope)
};
u.prototype.stepMemberExpression = function (a, b, c) {
  if (!b.oa) return b.oa = !0, new v(c.object, b.scope);
  if (c.computed)
    if (b.Eb) c = b.value;
    else return b.i = b.value, b.Eb = !0, new v(c.property, b.scope);
  else b.i = b.value, c = c.property.name;
  a.pop();
  if (b.ga) a[a.length - 1].value = [b.i, c];
  else {
    c = this.u(b.i, c);
    if (this.I) return ed(this, c, b.i);
    a[a.length - 1].value = c
  }
};
u.prototype.stepNewExpression = u.prototype.stepCallExpression;
u.prototype.stepObjectExpression = function (a, b, c) {
  var d = b.o || 0,
    e = c.properties[d];
  if (b.i) {
    var g = e.key;
    if ("Identifier" === g.type) var n = g.name;
    else if ("Literal" === g.type) n = g.value;
    else throw SyntaxError("Unknown object structure: " + g.type);
    b.xa[n] || (b.xa[n] = {});
    b.xa[n][e.kind] = b.value;
    b.o = ++d;
    e = c.properties[d]
  } else b.i = this.h(this.B), b.xa = Object.create(null);
  if (e) return new v(e.value, b.scope);
  for (g in b.xa) c = b.xa[g], "get" in c || "set" in c ? this.setProperty(b.i, g, Ia, {
    configurable: !0,
    enumerable: !0,
    get: c.get,
    set: c.set
  }) : this.setProperty(b.i, g, c.init);
  a.pop();
  a[a.length - 1].value = b.i
};
u.prototype.stepProgram = function (a, b, c) {
  if (a = c.body.shift()) return b.done = !1, new v(a, b.scope);
  b.done = !0
};
u.prototype.stepReturnStatement = function (a, b, c) {
  if (c.argument && !b.K) return b.K = !0, new v(c.argument, b.scope);
  dd(this, 3, b.value, void 0)
};
u.prototype.stepSequenceExpression = function (a, b, c) {
  var d = b.o || 0;
  if (c = c.expressions[d]) return b.o = d + 1, new v(c, b.scope);
  a.pop();
  a[a.length - 1].value = b.value
};
u.prototype.stepSwitchStatement = function (a, b, c) {
  if (!b.V) return b.V = 1, new v(c.discriminant, b.scope);
  1 === b.V && (b.V = 2, b.Pb = b.value, b.Pa = -1);
  for (;;) {
    var d = b.Ta || 0,
      e = c.cases[d];
    if (b.ta || !e || e.test)
      if (e || b.ta || -1 === b.Pa)
        if (e) {
          if (!b.ta && !b.qb && e.test) return b.qb = !0, new v(e.test, b.scope);
          if (b.ta || b.value === b.Pb) {
            b.ta = !0;
            var g = b.o || 0;
            if (e.consequent[g]) return b.Jb = !0, b.o = g + 1, new v(e.consequent[g], b.scope)
          }
          b.qb = !1;
          b.o = 0;
          b.Ta = d + 1
        } else {
          a.pop();
          break
        }
    else b.ta = !0, b.Ta = b.Pa;
    else b.Pa = d, b.Ta = d + 1
  }
};
u.prototype.stepThisExpression = function (a) {
  a.pop();
  a[a.length - 1].value = $c(this, "this")
};
u.prototype.stepThrowStatement = function (a, b, c) {
  if (b.K) I(this, b.value);
  else return b.K = !0, new v(c.argument, b.scope)
};
u.prototype.stepTryStatement = function (a, b, c) {
  if (!b.zb) return b.zb = !0, new v(c.block, b.scope);
  if (b.T && 4 === b.T.type && !b.Cb && c.handler) return b.Cb = !0, a = new v(c.handler, b.scope), a.Qb = b.T.value, b.T = void 0, a;
  if (!b.Bb && c.finalizer) return b.Bb = !0, new v(c.finalizer, b.scope);
  a.pop();
  b.T && dd(this, b.T.type, b.T.value, b.T.label)
};
u.prototype.stepUnaryExpression = function (a, b, c) {
  if (!b.K) return b.K = !0, a = new v(c.argument, b.scope), a.ga = "delete" === c.operator, a;
  a.pop();
  var d = b.value;
  if ("-" === c.operator) d = -d;
  else if ("+" === c.operator) d = +d;
  else if ("!" === c.operator) d = !d;
  else if ("~" === c.operator) d = ~d;
  else if ("delete" === c.operator) {
    c = !0;
    if (Array.isArray(d)) {
      var e = d[0];
      e === Ba && (e = b.scope);
      d = String(d[1]);
      try {
        delete e.a[d]
      } catch (g) {
        b.scope.P ? I(this, this.g, "Cannot delete property '" + d + "' of '" + e + "'") : c = !1
      }
    }
    d = c
  } else if ("typeof" === c.operator) d =
    d && "Function" === d.F ? "function" : typeof d;
  else if ("void" === c.operator) d = void 0;
  else throw SyntaxError("Unknown unary operator: " + c.operator);
  a[a.length - 1].value = d
};
u.prototype.stepUpdateExpression = function (a, b, c) {
  if (!b.Y) return b.Y = !0, a = new v(c.argument, b.scope), a.ga = !0, a;
  b.sa || (b.sa = b.value);
  b.na && (b.$ = b.value);
  if (!b.na) {
    var d = bd(this, b.sa);
    b.$ = d;
    if (this.I) return b.na = !0, ed(this, d, b.sa)
  }
  if (b.ia) a.pop(), a[a.length - 1].value = b.Wa;
  else {
    d = Number(b.$);
    if ("++" === c.operator) var e = d + 1;
    else if ("--" === c.operator) e = d - 1;
    else throw SyntaxError("Unknown update expression: " + c.operator);
    c = c.prefix ? e : d;
    if (d = cd(this, b.sa, e)) return b.ia = !0, b.Wa = c, fd(this, d, b.sa, e);
    a.pop();
    a[a.length -
      1].value = c
  }
};
u.prototype.stepVariableDeclaration = function (a, b, c) {
  c = c.declarations;
  var d = b.o || 0,
    e = c[d];
  b.lb && e && (ad(this, e.id.name, b.value), b.lb = !1, e = c[++d]);
  for (; e;) {
    if (e.init) return b.o = d, b.lb = !0, new v(e.init, b.scope);
    e = c[++d]
  }
  a.pop()
};
u.prototype.stepWithStatement = function (a, b, c) {
  if (b.oa)
    if (b.Ab) a.pop();
    else return b.Ab = !0, a = Zc(this, b.scope, b.value), new v(c.body, a);
  else return b.oa = !0, new v(c.object, b.scope)
};
u.prototype.stepWhileStatement = u.prototype.stepDoWhileStatement;
this.Interpreter = u;
u.prototype.step = u.prototype.step;
u.prototype.run = u.prototype.nb;
u.prototype.appendCode = u.prototype.ub;
u.prototype.createObject = u.prototype.ma;
u.prototype.createObjectProto = u.prototype.h;
u.prototype.createAsyncFunction = u.prototype.eb;
u.prototype.createNativeFunction = u.prototype.b;
u.prototype.getProperty = u.prototype.u;
u.prototype.setProperty = u.prototype.setProperty;
u.prototype.nativeToPseudo = u.prototype.ua;
u.prototype.pseudoToNative = u.prototype.J;
u.prototype.createPrimitive = function (a) {
  return a
};
