import {
  FLIGHT_NUMBER_PATTERN,
  FlightService
} from "./chunk-3TSZTRA2.js";
import {
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-OEBDVQ23.js";
import {
  Component,
  Directive,
  ElementRef,
  HttpErrorResponse,
  Router,
  RouterLink,
  __commonJS,
  __toESM,
  catchError,
  computed,
  concatMap,
  forwardRef,
  from,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  switchMap,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-A7NZCF3Z.js";

// node_modules/flatpickr/dist/l10n/es.js
var require_es = __commonJS({
  "node_modules/flatpickr/dist/l10n/es.js"(exports, module) {
    "use strict";
    (function(global2, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global2 = typeof globalThis !== "undefined" ? globalThis : global2 || self, factory(global2.es = {}));
    })(exports, (function(exports2) {
      "use strict";
      var fp = typeof window !== "undefined" && window.flatpickr !== void 0 ? window.flatpickr : {
        l10ns: {}
      };
      var Spanish2 = {
        weekdays: {
          shorthand: ["Dom", "Lun", "Mar", "Mi\xE9", "Jue", "Vie", "S\xE1b"],
          longhand: [
            "Domingo",
            "Lunes",
            "Martes",
            "Mi\xE9rcoles",
            "Jueves",
            "Viernes",
            "S\xE1bado"
          ]
        },
        months: {
          shorthand: [
            "Ene",
            "Feb",
            "Mar",
            "Abr",
            "May",
            "Jun",
            "Jul",
            "Ago",
            "Sep",
            "Oct",
            "Nov",
            "Dic"
          ],
          longhand: [
            "Enero",
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre"
          ]
        },
        ordinal: function() {
          return "\xBA";
        },
        firstDayOfWeek: 1,
        rangeSeparator: " a ",
        time_24hr: true
      };
      fp.l10ns.es = Spanish2;
      var es = fp.l10ns;
      exports2.Spanish = Spanish2;
      exports2.default = es;
      Object.defineProperty(exports2, "__esModule", { value: true });
    }));
  }
});

// node_modules/saxen/dist/index.js
var fromCharCode = String.fromCharCode;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var ENTITY_PATTERN = /&#(\d+);|&#x([0-9a-f]+);|&(\w+);/ig;
var ENTITY_MAPPING = {
  "amp": "&",
  "apos": "'",
  "gt": ">",
  "lt": "<",
  "quot": '"'
};
Object.keys(ENTITY_MAPPING).forEach(function(k) {
  ENTITY_MAPPING[k.toUpperCase()] = ENTITY_MAPPING[k];
});
function replaceEntities(_, d, x2, z) {
  if (z) {
    if (hasOwnProperty.call(ENTITY_MAPPING, z)) {
      return ENTITY_MAPPING[z];
    } else {
      return "&" + z + ";";
    }
  }
  if (d) {
    return fromCharCode(d);
  }
  return fromCharCode(parseInt(x2, 16));
}
function decodeEntities(s) {
  if (s.length > 3 && s.indexOf("&") !== -1) {
    return s.replace(ENTITY_PATTERN, replaceEntities);
  }
  return s;
}
var NON_WHITESPACE_OUTSIDE_ROOT_NODE = "non-whitespace outside of root node";
function error(msg) {
  return new Error(msg);
}
function missingNamespaceForPrefix(prefix) {
  return "missing namespace for prefix <" + prefix + ">";
}
function getter(getFn) {
  return {
    "get": getFn,
    "enumerable": true
  };
}
function cloneNsMatrix(nsMatrix) {
  var clone = {}, key;
  for (key in nsMatrix) {
    clone[key] = nsMatrix[key];
  }
  return clone;
}
function uriPrefix(prefix) {
  return prefix + "$uri";
}
function buildNsMatrix(nsUriToPrefix) {
  var nsMatrix = {}, uri, prefix;
  for (uri in nsUriToPrefix) {
    prefix = nsUriToPrefix[uri];
    nsMatrix[prefix] = prefix;
    nsMatrix[uriPrefix(prefix)] = uri;
  }
  return nsMatrix;
}
function noopGetContext() {
  return { line: 0, column: 0 };
}
function throwFunc(err2) {
  throw err2;
}
function Parser(options) {
  if (!this) {
    return new Parser(options);
  }
  var proxy = options && options["proxy"];
  var onText, onOpenTag, onCloseTag, onCDATA, onError = throwFunc, onWarning, onComment, onQuestion, onAttention;
  var getContext = noopGetContext;
  var maybeNS = false;
  var isNamespace = false;
  var returnError = null;
  var parseStop = false;
  var nsUriToPrefix;
  function handleError(err2) {
    if (!(err2 instanceof Error)) {
      err2 = error(err2);
    }
    returnError = err2;
    onError(err2, getContext);
  }
  function handleWarning(err2) {
    if (!onWarning) {
      return;
    }
    if (!(err2 instanceof Error)) {
      err2 = error(err2);
    }
    onWarning(err2, getContext);
  }
  this["on"] = function(name, cb) {
    if (typeof cb !== "function") {
      throw error("required args <name, cb>");
    }
    switch (name) {
      case "openTag":
        onOpenTag = cb;
        break;
      case "text":
        onText = cb;
        break;
      case "closeTag":
        onCloseTag = cb;
        break;
      case "error":
        onError = cb;
        break;
      case "warn":
        onWarning = cb;
        break;
      case "cdata":
        onCDATA = cb;
        break;
      case "attention":
        onAttention = cb;
        break;
      // <!XXXXX zzzz="eeee">
      case "question":
        onQuestion = cb;
        break;
      // <? ....  ?>
      case "comment":
        onComment = cb;
        break;
      default:
        throw error("unsupported event: " + name);
    }
    return this;
  };
  this["ns"] = function(nsMap) {
    if (typeof nsMap === "undefined") {
      nsMap = {};
    }
    if (typeof nsMap !== "object") {
      throw error("required args <nsMap={}>");
    }
    var _nsUriToPrefix = {}, k;
    for (k in nsMap) {
      _nsUriToPrefix[k] = nsMap[k];
    }
    isNamespace = true;
    nsUriToPrefix = _nsUriToPrefix;
    return this;
  };
  this["parse"] = function(xml) {
    if (typeof xml !== "string") {
      throw error("required args <xml=string>");
    }
    returnError = null;
    parse(xml);
    getContext = noopGetContext;
    parseStop = false;
    return returnError;
  };
  this["stop"] = function() {
    parseStop = true;
  };
  function parse(xml) {
    var nsMatrixStack = isNamespace ? [] : null, nsMatrix = isNamespace ? buildNsMatrix(nsUriToPrefix) : null, _nsMatrix, nodeStack = [], anonymousNsCount = 0, tagStart = false, tagEnd = false, i2 = 0, j = 0, x2, y, q, w, v, xmlns, elementName, _elementName, elementProxy;
    var attrsString = "", attrsStart = 0, cachedAttrs;
    function getAttrs() {
      if (cachedAttrs !== null) {
        return cachedAttrs;
      }
      var nsUri, nsUriPrefix, nsName, defaultAlias = isNamespace && nsMatrix["xmlns"], attrList = isNamespace && maybeNS ? [] : null, i3 = attrsStart, s = attrsString, l = s.length, hasNewMatrix, newalias, value, alias, name, attrs = {}, seenAttrs = {}, skipAttr, w2, j2;
      parseAttr:
        for (; i3 < l; i3++) {
          skipAttr = false;
          w2 = s.charCodeAt(i3);
          if (w2 === 32 || w2 < 14 && w2 > 8) {
            continue;
          }
          if (w2 < 65 || w2 > 122 || w2 > 90 && w2 < 97) {
            if (w2 !== 95 && w2 !== 58) {
              handleWarning("illegal first char attribute name");
              skipAttr = true;
            }
          }
          for (j2 = i3 + 1; j2 < l; j2++) {
            w2 = s.charCodeAt(j2);
            if (w2 > 96 && w2 < 123 || w2 > 64 && w2 < 91 || w2 > 47 && w2 < 59 || w2 === 46 || // '.'
            w2 === 45 || // '-'
            w2 === 95) {
              continue;
            }
            if (w2 === 32 || w2 < 14 && w2 > 8) {
              handleWarning("missing attribute value");
              i3 = j2;
              continue parseAttr;
            }
            if (w2 === 61) {
              break;
            }
            handleWarning("illegal attribute name char");
            skipAttr = true;
          }
          name = s.substring(i3, j2);
          if (name === "xmlns:xmlns") {
            handleWarning("illegal declaration of xmlns");
            skipAttr = true;
          }
          w2 = s.charCodeAt(j2 + 1);
          if (w2 === 34) {
            j2 = s.indexOf('"', i3 = j2 + 2);
            if (j2 === -1) {
              j2 = s.indexOf("'", i3);
              if (j2 !== -1) {
                handleWarning("attribute value quote missmatch");
                skipAttr = true;
              }
            }
          } else if (w2 === 39) {
            j2 = s.indexOf("'", i3 = j2 + 2);
            if (j2 === -1) {
              j2 = s.indexOf('"', i3);
              if (j2 !== -1) {
                handleWarning("attribute value quote missmatch");
                skipAttr = true;
              }
            }
          } else {
            handleWarning("missing attribute value quotes");
            skipAttr = true;
            for (j2 = j2 + 1; j2 < l; j2++) {
              w2 = s.charCodeAt(j2 + 1);
              if (w2 === 32 || w2 < 14 && w2 > 8) {
                break;
              }
            }
          }
          if (j2 === -1) {
            handleWarning("missing closing quotes");
            j2 = l;
            skipAttr = true;
          }
          if (!skipAttr) {
            value = s.substring(i3, j2);
          }
          i3 = j2;
          for (; j2 + 1 < l; j2++) {
            w2 = s.charCodeAt(j2 + 1);
            if (w2 === 32 || w2 < 14 && w2 > 8) {
              break;
            }
            if (i3 === j2) {
              handleWarning("illegal character after attribute end");
              skipAttr = true;
            }
          }
          i3 = j2 + 1;
          if (skipAttr) {
            continue parseAttr;
          }
          if (name in seenAttrs) {
            handleWarning("attribute <" + name + "> already defined");
            continue;
          }
          seenAttrs[name] = true;
          if (!isNamespace) {
            attrs[name] = value;
            continue;
          }
          if (maybeNS) {
            newalias = name === "xmlns" ? "xmlns" : name.charCodeAt(0) === 120 && name.substr(0, 6) === "xmlns:" ? name.substr(6) : null;
            if (newalias !== null) {
              nsUri = decodeEntities(value);
              nsUriPrefix = uriPrefix(newalias);
              alias = nsUriToPrefix[nsUri];
              if (!alias) {
                if (newalias === "xmlns" || nsUriPrefix in nsMatrix && nsMatrix[nsUriPrefix] !== nsUri) {
                  do {
                    alias = "ns" + anonymousNsCount++;
                  } while (typeof nsMatrix[alias] !== "undefined");
                } else {
                  alias = newalias;
                }
                nsUriToPrefix[nsUri] = alias;
              }
              if (nsMatrix[newalias] !== alias) {
                if (!hasNewMatrix) {
                  nsMatrix = cloneNsMatrix(nsMatrix);
                  hasNewMatrix = true;
                }
                nsMatrix[newalias] = alias;
                if (newalias === "xmlns") {
                  nsMatrix[uriPrefix(alias)] = nsUri;
                  defaultAlias = alias;
                }
                nsMatrix[nsUriPrefix] = nsUri;
              }
              attrs[name] = value;
              continue;
            }
            attrList.push(name, value);
            continue;
          }
          w2 = name.indexOf(":");
          if (w2 === -1) {
            attrs[name] = value;
            continue;
          }
          if (!(nsName = nsMatrix[name.substring(0, w2)])) {
            handleWarning(missingNamespaceForPrefix(name.substring(0, w2)));
            continue;
          }
          name = defaultAlias === nsName ? name.substr(w2 + 1) : nsName + name.substr(w2);
          attrs[name] = value;
        }
      if (maybeNS) {
        for (i3 = 0, l = attrList.length; i3 < l; i3++) {
          name = attrList[i3++];
          value = attrList[i3];
          w2 = name.indexOf(":");
          if (w2 !== -1) {
            if (!(nsName = nsMatrix[name.substring(0, w2)])) {
              handleWarning(missingNamespaceForPrefix(name.substring(0, w2)));
              continue;
            }
            name = defaultAlias === nsName ? name.substr(w2 + 1) : nsName + name.substr(w2);
          }
          attrs[name] = value;
        }
      }
      return cachedAttrs = attrs;
    }
    function getParseContext() {
      var splitsRe = /(\r\n|\r|\n)/g;
      var line = 0;
      var column = 0;
      var startOfLine = 0;
      var endOfLine = j;
      var match;
      var data;
      while (i2 >= startOfLine) {
        match = splitsRe.exec(xml);
        if (!match) {
          break;
        }
        endOfLine = match[0].length + match.index;
        if (endOfLine > i2) {
          break;
        }
        line += 1;
        startOfLine = endOfLine;
      }
      if (i2 == -1) {
        column = endOfLine;
        data = xml.substring(j);
      } else if (j === 0) {
        data = xml.substring(j, i2);
      } else {
        column = i2 - startOfLine;
        data = j == -1 ? xml.substring(i2) : xml.substring(i2, j + 1);
      }
      return {
        "data": data,
        "line": line,
        "column": column
      };
    }
    getContext = getParseContext;
    if (proxy) {
      elementProxy = Object.create({}, {
        "name": getter(function() {
          return elementName;
        }),
        "originalName": getter(function() {
          return _elementName;
        }),
        "attrs": getter(getAttrs),
        "ns": getter(function() {
          return nsMatrix;
        })
      });
    }
    while (j !== -1) {
      if (xml.charCodeAt(j) === 60) {
        i2 = j;
      } else {
        i2 = xml.indexOf("<", j);
      }
      if (i2 === -1) {
        if (nodeStack.length) {
          return handleError("unexpected end of file");
        }
        if (j === 0) {
          return handleError("missing start tag");
        }
        if (j < xml.length) {
          if (xml.substring(j).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);
          }
        }
        return;
      }
      if (j !== i2) {
        if (nodeStack.length) {
          if (onText) {
            onText(xml.substring(j, i2), decodeEntities, getContext);
            if (parseStop) {
              return;
            }
          }
        } else {
          if (xml.substring(j, i2).trim()) {
            handleWarning(NON_WHITESPACE_OUTSIDE_ROOT_NODE);
            if (parseStop) {
              return;
            }
          }
        }
      }
      w = xml.charCodeAt(i2 + 1);
      if (w === 33) {
        q = xml.charCodeAt(i2 + 2);
        if (q === 91 && xml.substr(i2 + 3, 6) === "CDATA[") {
          j = xml.indexOf("]]>", i2);
          if (j === -1) {
            return handleError("unclosed cdata");
          }
          if (onCDATA) {
            onCDATA(xml.substring(i2 + 9, j), getContext);
            if (parseStop) {
              return;
            }
          }
          j += 3;
          continue;
        }
        if (q === 45 && xml.charCodeAt(i2 + 3) === 45) {
          j = xml.indexOf("-->", i2);
          if (j === -1) {
            return handleError("unclosed comment");
          }
          if (onComment) {
            onComment(xml.substring(i2 + 4, j), decodeEntities, getContext);
            if (parseStop) {
              return;
            }
          }
          j += 3;
          continue;
        }
      }
      if (w === 63) {
        j = xml.indexOf("?>", i2);
        if (j === -1) {
          return handleError("unclosed question");
        }
        if (onQuestion) {
          onQuestion(xml.substring(i2, j + 2), getContext);
          if (parseStop) {
            return;
          }
        }
        j += 2;
        continue;
      }
      for (x2 = i2 + 1; ; x2++) {
        v = xml.charCodeAt(x2);
        if (isNaN(v)) {
          j = -1;
          return handleError("unclosed tag");
        }
        if (v === 34) {
          q = xml.indexOf('"', x2 + 1);
          x2 = q !== -1 ? q : x2;
        } else if (v === 39) {
          q = xml.indexOf("'", x2 + 1);
          x2 = q !== -1 ? q : x2;
        } else if (v === 62) {
          j = x2;
          break;
        }
      }
      if (w === 33) {
        if (onAttention) {
          onAttention(xml.substring(i2, j + 1), decodeEntities, getContext);
          if (parseStop) {
            return;
          }
        }
        j += 1;
        continue;
      }
      cachedAttrs = {};
      if (w === 47) {
        tagStart = false;
        tagEnd = true;
        if (!nodeStack.length) {
          return handleError("missing open tag");
        }
        x2 = elementName = nodeStack.pop();
        q = i2 + 2 + x2.length;
        if (xml.substring(i2 + 2, q) !== x2) {
          return handleError("closing tag mismatch");
        }
        for (; q < j; q++) {
          w = xml.charCodeAt(q);
          if (w === 32 || w > 8 && w < 14) {
            continue;
          }
          return handleError("close tag");
        }
      } else {
        if (xml.charCodeAt(j - 1) === 47) {
          x2 = elementName = xml.substring(i2 + 1, j - 1);
          tagStart = true;
          tagEnd = true;
        } else {
          x2 = elementName = xml.substring(i2 + 1, j);
          tagStart = true;
          tagEnd = false;
        }
        if (!(w > 96 && w < 123 || w > 64 && w < 91 || w === 95 || w === 58)) {
          return handleError("illegal first char nodeName");
        }
        for (q = 1, y = x2.length; q < y; q++) {
          w = x2.charCodeAt(q);
          if (w > 96 && w < 123 || w > 64 && w < 91 || w > 47 && w < 59 || w === 45 || w === 95 || w == 46) {
            continue;
          }
          if (w === 32 || w < 14 && w > 8) {
            elementName = x2.substring(0, q);
            cachedAttrs = null;
            break;
          }
          return handleError("invalid nodeName");
        }
        if (!tagEnd) {
          nodeStack.push(elementName);
        }
      }
      if (isNamespace) {
        _nsMatrix = nsMatrix;
        if (tagStart) {
          if (!tagEnd) {
            nsMatrixStack.push(_nsMatrix);
          }
          if (cachedAttrs === null) {
            if (maybeNS = x2.indexOf("xmlns", q) !== -1) {
              attrsStart = q;
              attrsString = x2;
              getAttrs();
              maybeNS = false;
            }
          }
        }
        _elementName = elementName;
        w = elementName.indexOf(":");
        if (w !== -1) {
          xmlns = nsMatrix[elementName.substring(0, w)];
          if (!xmlns) {
            return handleError("missing namespace on <" + _elementName + ">");
          }
          elementName = elementName.substr(w + 1);
        } else {
          xmlns = nsMatrix["xmlns"];
        }
        if (xmlns) {
          elementName = xmlns + ":" + elementName;
        }
      }
      if (tagStart) {
        attrsStart = q;
        attrsString = x2;
        if (onOpenTag) {
          if (proxy) {
            onOpenTag(elementProxy, decodeEntities, tagEnd, getContext);
          } else {
            onOpenTag(elementName, getAttrs, decodeEntities, tagEnd, getContext);
          }
          if (parseStop) {
            return;
          }
        }
      }
      if (tagEnd) {
        if (onCloseTag) {
          onCloseTag(proxy ? elementProxy : elementName, decodeEntities, tagStart, getContext);
          if (parseStop) {
            return;
          }
        }
        if (isNamespace) {
          if (!tagStart) {
            nsMatrix = nsMatrixStack.pop();
          } else {
            nsMatrix = _nsMatrix;
          }
        }
      }
      j += 1;
    }
  }
}

// node_modules/read-excel-file/modules/xml/parseXmlStream.saxen.js
function parseXmlStream(xml, _ref) {
  var createInitialState = _ref.createInitialState, onOpenTag = _ref.onOpenTag, onCloseTag = _ref.onCloseTag, onText = _ref.onText;
  var TAG_NAME_PREFIX = /.+:/;
  function trimXmlnsPrefix(tagName) {
    return tagName.replace(TAG_NAME_PREFIX, "");
  }
  return new Promise(function(resolve, reject) {
    var errored = false;
    var xmlns = true;
    var state = createInitialState();
    var onerror = function onerror2(error2) {
      if (errored) {
        return;
      }
      errored = true;
      reject(error2);
    };
    var ontext = function ontext2(text) {
      if (onText) {
        onText(text, state);
      }
    };
    var onopentag = function onopentag2(element, decodeEntities2, selfClosing, getContext) {
      if (onOpenTag) {
        onOpenTag(xmlns ? trimXmlnsPrefix(element.originalName) : element.name, element.attrs, state);
      }
    };
    var onclosetag = function onclosetag2(element) {
      if (onCloseTag) {
        var tagName = xmlns ? trimXmlnsPrefix(element.originalName) : element.name;
        onCloseTag(tagName, state);
      }
    };
    var parser = new Parser({
      proxy: true
    });
    if (xmlns) {
      parser.ns();
    }
    parser.on("error", onerror);
    parser.on("text", ontext);
    parser.on("openTag", onopentag);
    parser.on("closeTag", onclosetag);
    parser.parse(xml);
    if (errored) {
      return;
    }
    resolve(state);
  });
}

// node_modules/fflate/esm/browser.js
var ch2 = {};
var wk = (function(c, id, msg, transfer, cb) {
  var w = new Worker(ch2[id] || (ch2[id] = URL.createObjectURL(new Blob([
    c + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'
  ], { type: "text/javascript" }))));
  w.onmessage = function(e) {
    var d = e.data, ed = d.$e$;
    if (ed) {
      var err2 = new Error(ed[0]);
      err2["code"] = ed[1];
      err2.stack = ed[2];
      cb(err2, null);
    } else
      cb(null, d);
  };
  w.postMessage(msg, transfer);
  return w;
});
var u8 = Uint8Array;
var u16 = Uint16Array;
var i32 = Int32Array;
var fleb = new u8([
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  0,
  1,
  1,
  1,
  1,
  2,
  2,
  2,
  2,
  3,
  3,
  3,
  3,
  4,
  4,
  4,
  4,
  5,
  5,
  5,
  5,
  0,
  /* unused */
  0,
  0,
  /* impossible */
  0
]);
var fdeb = new u8([
  0,
  0,
  0,
  0,
  1,
  1,
  2,
  2,
  3,
  3,
  4,
  4,
  5,
  5,
  6,
  6,
  7,
  7,
  8,
  8,
  9,
  9,
  10,
  10,
  11,
  11,
  12,
  12,
  13,
  13,
  /* unused */
  0,
  0
]);
var clim = new u8([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]);
var freb = function(eb, start) {
  var b = new u16(31);
  for (var i2 = 0; i2 < 31; ++i2) {
    b[i2] = start += 1 << eb[i2 - 1];
  }
  var r = new i32(b[30]);
  for (var i2 = 1; i2 < 30; ++i2) {
    for (var j = b[i2]; j < b[i2 + 1]; ++j) {
      r[j] = j - b[i2] << 5 | i2;
    }
  }
  return { b, r };
};
var _a = freb(fleb, 2);
var fl = _a.b;
var revfl = _a.r;
fl[28] = 258, revfl[258] = 28;
var _b = freb(fdeb, 0);
var fd = _b.b;
var revfd = _b.r;
var rev = new u16(32768);
for (i = 0; i < 32768; ++i) {
  x = (i & 43690) >> 1 | (i & 21845) << 1;
  x = (x & 52428) >> 2 | (x & 13107) << 2;
  x = (x & 61680) >> 4 | (x & 3855) << 4;
  rev[i] = ((x & 65280) >> 8 | (x & 255) << 8) >> 1;
}
var x;
var i;
var hMap = (function(cd, mb, r) {
  var s = cd.length;
  var i2 = 0;
  var l = new u16(mb);
  for (; i2 < s; ++i2) {
    if (cd[i2])
      ++l[cd[i2] - 1];
  }
  var le = new u16(mb);
  for (i2 = 1; i2 < mb; ++i2) {
    le[i2] = le[i2 - 1] + l[i2 - 1] << 1;
  }
  var co;
  if (r) {
    co = new u16(1 << mb);
    var rvb = 15 - mb;
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        var sv = i2 << 4 | cd[i2];
        var r_1 = mb - cd[i2];
        var v = le[cd[i2] - 1]++ << r_1;
        for (var m = v | (1 << r_1) - 1; v <= m; ++v) {
          co[rev[v] >> rvb] = sv;
        }
      }
    }
  } else {
    co = new u16(s);
    for (i2 = 0; i2 < s; ++i2) {
      if (cd[i2]) {
        co[i2] = rev[le[cd[i2] - 1]++] >> 15 - cd[i2];
      }
    }
  }
  return co;
});
var flt = new u8(288);
for (i = 0; i < 144; ++i)
  flt[i] = 8;
var i;
for (i = 144; i < 256; ++i)
  flt[i] = 9;
var i;
for (i = 256; i < 280; ++i)
  flt[i] = 7;
var i;
for (i = 280; i < 288; ++i)
  flt[i] = 8;
var i;
var fdt = new u8(32);
for (i = 0; i < 32; ++i)
  fdt[i] = 5;
var i;
var flrm = /* @__PURE__ */ hMap(flt, 9, 1);
var fdrm = /* @__PURE__ */ hMap(fdt, 5, 1);
var max = function(a) {
  var m = a[0];
  for (var i2 = 1; i2 < a.length; ++i2) {
    if (a[i2] > m)
      m = a[i2];
  }
  return m;
};
var bits = function(d, p, m) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8) >> (p & 7) & m;
};
var bits16 = function(d, p) {
  var o = p / 8 | 0;
  return (d[o] | d[o + 1] << 8 | d[o + 2] << 16) >> (p & 7);
};
var shft = function(p) {
  return (p + 7) / 8 | 0;
};
var slc = function(v, s, e) {
  if (s == null || s < 0)
    s = 0;
  if (e == null || e > v.length)
    e = v.length;
  return new u8(v.subarray(s, e));
};
var ec = [
  "unexpected EOF",
  "invalid block type",
  "invalid length/literal",
  "invalid distance",
  "stream finished",
  "no stream handler",
  ,
  // determined by compression function
  "no callback",
  "invalid UTF-8 data",
  "extra field too long",
  "date not in range 1980-2099",
  "filename too long",
  "stream finishing",
  "invalid zip data"
  // determined by unknown compression method
];
var err = function(ind, msg, nt) {
  var e = new Error(msg || ec[ind]);
  e.code = ind;
  if (Error.captureStackTrace)
    Error.captureStackTrace(e, err);
  if (!nt)
    throw e;
  return e;
};
var inflt = function(dat, st, buf, dict) {
  var sl = dat.length, dl = dict ? dict.length : 0;
  if (!sl || st.f && !st.l)
    return buf || new u8(0);
  var noBuf = !buf;
  var resize = noBuf || st.i != 2;
  var noSt = st.i;
  if (noBuf)
    buf = new u8(sl * 3);
  var cbuf = function(l2) {
    var bl = buf.length;
    if (l2 > bl) {
      var nbuf = new u8(Math.max(bl * 2, l2));
      nbuf.set(buf);
      buf = nbuf;
    }
  };
  var final = st.f || 0, pos = st.p || 0, bt = st.b || 0, lm = st.l, dm = st.d, lbt = st.m, dbt = st.n;
  var tbts = sl * 8;
  do {
    if (!lm) {
      final = bits(dat, pos, 1);
      var type = bits(dat, pos + 1, 3);
      pos += 3;
      if (!type) {
        var s = shft(pos) + 4, l = dat[s - 4] | dat[s - 3] << 8, t = s + l;
        if (t > sl) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + l);
        buf.set(dat.subarray(s, t), bt);
        st.b = bt += l, st.p = pos = t * 8, st.f = final;
        continue;
      } else if (type == 1)
        lm = flrm, dm = fdrm, lbt = 9, dbt = 5;
      else if (type == 2) {
        var hLit = bits(dat, pos, 31) + 257, hcLen = bits(dat, pos + 10, 15) + 4;
        var tl = hLit + bits(dat, pos + 5, 31) + 1;
        pos += 14;
        var ldt = new u8(tl);
        var clt = new u8(19);
        for (var i2 = 0; i2 < hcLen; ++i2) {
          clt[clim[i2]] = bits(dat, pos + i2 * 3, 7);
        }
        pos += hcLen * 3;
        var clb = max(clt), clbmsk = (1 << clb) - 1;
        var clm = hMap(clt, clb, 1);
        for (var i2 = 0; i2 < tl; ) {
          var r = clm[bits(dat, pos, clbmsk)];
          pos += r & 15;
          var s = r >> 4;
          if (s < 16) {
            ldt[i2++] = s;
          } else {
            var c = 0, n = 0;
            if (s == 16)
              n = 3 + bits(dat, pos, 3), pos += 2, c = ldt[i2 - 1];
            else if (s == 17)
              n = 3 + bits(dat, pos, 7), pos += 3;
            else if (s == 18)
              n = 11 + bits(dat, pos, 127), pos += 7;
            while (n--)
              ldt[i2++] = c;
          }
        }
        var lt = ldt.subarray(0, hLit), dt = ldt.subarray(hLit);
        lbt = max(lt);
        dbt = max(dt);
        lm = hMap(lt, lbt, 1);
        dm = hMap(dt, dbt, 1);
      } else
        err(1);
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
    }
    if (resize)
      cbuf(bt + 131072);
    var lms = (1 << lbt) - 1, dms = (1 << dbt) - 1;
    var lpos = pos;
    for (; ; lpos = pos) {
      var c = lm[bits16(dat, pos) & lms], sym = c >> 4;
      pos += c & 15;
      if (pos > tbts) {
        if (noSt)
          err(0);
        break;
      }
      if (!c)
        err(2);
      if (sym < 256)
        buf[bt++] = sym;
      else if (sym == 256) {
        lpos = pos, lm = null;
        break;
      } else {
        var add = sym - 254;
        if (sym > 264) {
          var i2 = sym - 257, b = fleb[i2];
          add = bits(dat, pos, (1 << b) - 1) + fl[i2];
          pos += b;
        }
        var d = dm[bits16(dat, pos) & dms], dsym = d >> 4;
        if (!d)
          err(3);
        pos += d & 15;
        var dt = fd[dsym];
        if (dsym > 3) {
          var b = fdeb[dsym];
          dt += bits16(dat, pos) & (1 << b) - 1, pos += b;
        }
        if (pos > tbts) {
          if (noSt)
            err(0);
          break;
        }
        if (resize)
          cbuf(bt + 131072);
        var end = bt + add;
        if (bt < dt) {
          var shift = dl - dt, dend = Math.min(dt, end);
          if (shift + bt < 0)
            err(3);
          for (; bt < dend; ++bt)
            buf[bt] = dict[shift + bt];
        }
        for (; bt < end; ++bt)
          buf[bt] = buf[bt - dt];
      }
    }
    st.l = lm, st.p = lpos, st.b = bt, st.f = final;
    if (lm)
      final = 1, st.m = lbt, st.d = dm, st.n = dbt;
  } while (!final);
  return bt != buf.length && noBuf ? slc(buf, 0, bt) : buf.subarray(0, bt);
};
var et = /* @__PURE__ */ new u8(0);
var mrg = function(a, b) {
  var o = {};
  for (var k in a)
    o[k] = a[k];
  for (var k in b)
    o[k] = b[k];
  return o;
};
var wcln = function(fn, fnStr, td2) {
  var dt = fn();
  var st = fn.toString();
  var ks = st.slice(st.indexOf("[") + 1, st.lastIndexOf("]")).replace(/\s+/g, "").split(",");
  for (var i2 = 0; i2 < dt.length; ++i2) {
    var v = dt[i2], k = ks[i2];
    if (typeof v == "function") {
      fnStr += ";" + k + "=";
      var st_1 = v.toString();
      if (v.prototype) {
        if (st_1.indexOf("[native code]") != -1) {
          var spInd = st_1.indexOf(" ", 8) + 1;
          fnStr += st_1.slice(spInd, st_1.indexOf("(", spInd));
        } else {
          fnStr += st_1;
          for (var t in v.prototype)
            fnStr += ";" + k + ".prototype." + t + "=" + v.prototype[t].toString();
        }
      } else
        fnStr += st_1;
    } else
      td2[k] = v;
  }
  return fnStr;
};
var ch = [];
var cbfs = function(v) {
  var tl = [];
  for (var k in v) {
    if (v[k].buffer) {
      tl.push((v[k] = new v[k].constructor(v[k])).buffer);
    }
  }
  return tl;
};
var wrkr = function(fns, init, id, cb) {
  if (!ch[id]) {
    var fnStr = "", td_1 = {}, m = fns.length - 1;
    for (var i2 = 0; i2 < m; ++i2)
      fnStr = wcln(fns[i2], fnStr, td_1);
    ch[id] = { c: wcln(fns[m], fnStr, td_1), e: td_1 };
  }
  var td2 = mrg({}, ch[id].e);
  return wk(ch[id].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + init.toString() + "}", id, td2, cbfs(td2), cb);
};
var bInflt = function() {
  return [u8, u16, i32, fleb, fdeb, clim, fl, fd, flrm, fdrm, rev, ec, hMap, max, bits, bits16, shft, slc, err, inflt, inflateSync, pbf, gopt];
};
var pbf = function(msg) {
  return postMessage(msg, [msg.buffer]);
};
var gopt = function(o) {
  return o && {
    out: o.size && new u8(o.size),
    dictionary: o.dictionary
  };
};
var cbify = function(dat, opts, fns, init, id, cb) {
  var w = wrkr(fns, init, id, function(err2, dat2) {
    w.terminate();
    cb(err2, dat2);
  });
  w.postMessage([dat, opts], opts.consume ? [dat.buffer] : []);
  return function() {
    w.terminate();
  };
};
var b2 = function(d, b) {
  return d[b] | d[b + 1] << 8;
};
var b4 = function(d, b) {
  return (d[b] | d[b + 1] << 8 | d[b + 2] << 16 | d[b + 3] << 24) >>> 0;
};
var b8 = function(d, b) {
  return b4(d, b) + b4(d, b + 4) * 4294967296;
};
function inflate(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  return cbify(data, opts, [
    bInflt
  ], function(ev) {
    return pbf(inflateSync(ev.data[0], gopt(ev.data[1])));
  }, 1, cb);
}
function inflateSync(data, opts) {
  return inflt(data, { i: 2 }, opts && opts.out, opts && opts.dictionary);
}
var td = typeof TextDecoder != "undefined" && /* @__PURE__ */ new TextDecoder();
var tds = 0;
try {
  td.decode(et, { stream: true });
  tds = 1;
} catch (e) {
}
var dutf8 = function(d) {
  for (var r = "", i2 = 0; ; ) {
    var c = d[i2++];
    var eb = (c > 127) + (c > 223) + (c > 239);
    if (i2 + eb > d.length)
      return { s: r, r: slc(d, i2 - 1) };
    if (!eb)
      r += String.fromCharCode(c);
    else if (eb == 3) {
      c = ((c & 15) << 18 | (d[i2++] & 63) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63) - 65536, r += String.fromCharCode(55296 | c >> 10, 56320 | c & 1023);
    } else if (eb & 1)
      r += String.fromCharCode((c & 31) << 6 | d[i2++] & 63);
    else
      r += String.fromCharCode((c & 15) << 12 | (d[i2++] & 63) << 6 | d[i2++] & 63);
  }
};
function strFromU8(dat, latin1) {
  if (latin1) {
    var r = "";
    for (var i2 = 0; i2 < dat.length; i2 += 16384)
      r += String.fromCharCode.apply(null, dat.subarray(i2, i2 + 16384));
    return r;
  } else if (td) {
    return td.decode(dat);
  } else {
    var _a2 = dutf8(dat), s = _a2.s, r = _a2.r;
    if (r.length)
      err(8);
    return s;
  }
}
var slzh = function(d, b) {
  return b + 30 + b2(d, b + 26) + b2(d, b + 28);
};
var zh = function(d, b, z) {
  var fnl = b2(d, b + 28), efl = b2(d, b + 30), fn = strFromU8(d.subarray(b + 46, b + 46 + fnl), !(b2(d, b + 8) & 2048)), es = b + 46 + fnl;
  var _a2 = z64hs(d, es, efl, z, b4(d, b + 20), b4(d, b + 24), b4(d, b + 42)), sc = _a2[0], su = _a2[1], off = _a2[2];
  return [b2(d, b + 10), sc, su, fn, es + efl + b2(d, b + 32), off];
};
var z64hs = function(d, b, l, z, sc, su, off) {
  var nsc = sc == 4294967295, nsu = su == 4294967295, noff = off == 4294967295, e = b + l;
  var nf = nsc + nsu + noff;
  if (z && nf) {
    for (; b + 4 < e; b += 4 + b2(d, b + 2)) {
      if (b2(d, b) == 1) {
        return [
          nsc ? b8(d, b + 4 + 8 * nsu) : sc,
          nsu ? b8(d, b + 4) : su,
          noff ? b8(d, b + 4 + 8 * (nsu + nsc)) : off,
          1
        ];
      }
    }
    if (z < 2)
      err(13);
  }
  return [sc, su, off, 0];
};
var mt = typeof queueMicrotask == "function" ? queueMicrotask : typeof setTimeout == "function" ? setTimeout : function(fn) {
  fn();
};
function unzip(data, opts, cb) {
  if (!cb)
    cb = opts, opts = {};
  if (typeof cb != "function")
    err(7);
  var term = [];
  var tAll = function() {
    for (var i3 = 0; i3 < term.length; ++i3)
      term[i3]();
  };
  var files = {};
  var cbd = function(a, b) {
    mt(function() {
      cb(a, b);
    });
  };
  mt(function() {
    cbd = cb;
  });
  var e = data.length - 22;
  for (; b4(data, e) != 101010256; --e) {
    if (!e || data.length - e > 65558) {
      cbd(err(13, 0, 1), null);
      return tAll;
    }
  }
  ;
  var lft = b2(data, e + 8);
  if (lft) {
    var c = lft;
    var o = b4(data, e + 16);
    var z = b4(data, e - 20) == 117853008;
    if (z) {
      var ze = b4(data, e - 12);
      z = b4(data, ze) == 101075792;
      if (z) {
        c = lft = b4(data, ze + 32);
        o = b4(data, ze + 48);
      }
    }
    var fltr = opts && opts.filter;
    var _loop_3 = function(i3) {
      var _a2 = zh(data, o, z), c_1 = _a2[0], sc = _a2[1], su = _a2[2], fn = _a2[3], no = _a2[4], off = _a2[5], b = slzh(data, off);
      o = no;
      var cbl = function(e2, d) {
        if (e2) {
          tAll();
          cbd(e2, null);
        } else {
          if (d)
            files[fn] = d;
          if (!--lft)
            cbd(null, files);
        }
      };
      if (!fltr || fltr({
        name: fn,
        size: sc,
        originalSize: su,
        compression: c_1
      })) {
        if (!c_1)
          cbl(null, slc(data, b, b + sc));
        else if (c_1 == 8) {
          var infl = data.subarray(b, b + sc);
          if (su < 524288 || sc > 0.8 * su) {
            try {
              cbl(null, inflateSync(infl, { out: new u8(su) }));
            } catch (e2) {
              cbl(e2, null);
            }
          } else
            term.push(inflate(infl, { size: su }, cbl));
        } else
          cbl(err(14, "unknown compression type " + c_1, 1), null);
      } else
        cbl(null, null);
    };
    for (var i2 = 0; i2 < c; ++i2) {
      _loop_3(i2);
    }
  } else
    cbd(null, {});
  return tAll;
}

// node_modules/read-excel-file/modules/zip/unzipFromArrayBuffer.js
function unzipFromArrayBuffer(input, options) {
  return unzipFromArrayBufferUsingFunction(input, options, unzipAsync, true);
}
function unzipFromArrayBufferUsingFunction(input) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _filter = _ref.filter;
  var unzip2 = arguments.length > 2 ? arguments[2] : void 0;
  var isAsync = arguments.length > 3 ? arguments[3] : void 0;
  return unzip2(new Uint8Array(input), {
    // Ignore certain types of files.
    filter: function filter(file) {
      if (_filter) {
        return _filter({
          path: file.name
        });
      }
      return true;
    }
  });
}
function unzipAsync(archive) {
  return new Promise(function(resolve, reject) {
    unzip(archive, function(error2, files) {
      if (error2) {
        reject(error2);
      } else {
        resolve(files);
      }
    });
  });
}

// node_modules/read-excel-file/modules/utility/checkpoint.js
var latestCheckpointTimestamp;
function checkpoint(name) {
  var now = Date.now();
  var shouldOutputLog = typeof global !== "undefined" ? Boolean(global.READ_EXCEL_FILE_CHECKPOINTS) : typeof window !== "undefined" ? Boolean(window.READ_EXCEL_FILE_CHECKPOINTS) : false;
  if (shouldOutputLog) {
    if (latestCheckpointTimestamp) {
      console.log("  -", now - latestCheckpointTimestamp, "ms");
    }
    console.log("*", name);
  }
  latestCheckpointTimestamp = now;
}
function resetCheckpoint() {
  latestCheckpointTimestamp = void 0;
}

// node_modules/read-excel-file/modules/export/convertValuesFromUint8ArraysToStrings.js
function convertValuesFromUint8ArraysToStrings(entries) {
  checkpoint("convert files to strings");
  var convertedEntries = {};
  for (var _i = 0, _Object$keys = Object.keys(entries); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    convertedEntries[key] = strFromU8(entries[key]);
  }
  return convertedEntries;
}

// node_modules/read-excel-file/modules/export/filterZipArchiveEntry.js
function filterZipArchiveEntry(_ref) {
  var path = _ref.path;
  return path.endsWith(".xml") || path.endsWith(".xml.rels");
}

// node_modules/read-excel-file/modules/export/unpackXlsxFileBrowser.js
function unpackXlsxFile(input) {
  resetCheckpoint();
  checkpoint("unpack files");
  if (input instanceof File || input instanceof Blob) {
    return input.arrayBuffer().then(getResultFromArrayBuffer);
  }
  return Promise.resolve(input).then(getResultFromArrayBuffer);
}
function getResultFromArrayBuffer(arrayBuffer) {
  return unzipFromArrayBuffer(arrayBuffer, {
    filter: filterZipArchiveEntry
  }).then(convertValuesFromUint8ArraysToStrings);
}

// node_modules/read-excel-file/modules/xlsx/parseSpreadsheetInfo.js
function parseSpreadsheetInfo(content, parseXmlStream2) {
  return parseXmlStream2(content, {
    createInitialState: createInitialStateInWorkbookXml,
    onOpenTag: onOpenTagInWorkbookXml
  }).then(function(state) {
    return {
      epoch1904: state.workbookPr ? state.workbookPr.epoch1904 : false,
      sheets: state.sheets
    };
  });
}
function createInitialStateInWorkbookXml() {
  return {
    workbookPr: void 0,
    sheets: []
  };
}
function onOpenTagInWorkbookXml(tagName, attributes, state) {
  if (tagName === "workbookPr") {
    if (!state.workbookPr) {
      state.workbookPr = {
        epoch1904: attributes.date1904 === "1"
      };
    }
  } else if (tagName === "sheet") {
    if (attributes.name) {
      state.sheets.push({
        // `sheetId` attribute value is an arbitrary, `1`-based unique positive integer
        // assigned to a worksheet, typically starting at `1` for the first sheet.
        //  Deleting and adding new sheets might cause the sheetId values to become non-sequential.
        // For example, `sheetId`s could be `1`, `2`, `4`, if sheet `3` was deleted.
        id: Number(attributes.sheetId),
        name: attributes.name,
        relationId: attributes["r:id"]
      });
    }
  }
}

// node_modules/read-excel-file/modules/xlsx/parseFilePaths.js
function parseFilePaths(content, parseXmlStream2) {
  return parseXmlStream2(content, {
    createInitialState: createInitialStateInWorkbookRelationships,
    onOpenTag: onOpenTagInWorkbookRelationships
  }).then(function(state) {
    return state;
  });
}
function createInitialStateInWorkbookRelationships() {
  return {
    sheets: {},
    sharedStrings: void 0,
    styles: void 0
  };
}
function onOpenTagInWorkbookRelationships(tagName, attributes, state) {
  if (tagName === "Relationship") {
    addFilePathForRelation(state, attributes.Id, attributes.Type, attributes.Target);
  }
}
function addFilePathForRelation(state, id, type, target) {
  switch (type) {
    case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles":
      state.styles = getFilePathFromRelationTarget(target);
      break;
    case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings":
      state.sharedStrings = getFilePathFromRelationTarget(target);
      break;
    case "http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet":
      state.sheets[id] = getFilePathFromRelationTarget(target);
      break;
  }
}
function getFilePathFromRelationTarget(path) {
  if (path[0] === "/") {
    return path.slice("/".length);
  }
  return "xl/" + path;
}

// node_modules/read-excel-file/modules/xlsx/parseStyles.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
var _excluded = ["xfId"];
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function parseStyles(content, parseXmlStream2) {
  return parseXmlStream2(content, {
    createInitialState: createInitialStateInStyles,
    onOpenTag: onOpenTagInStyles,
    onCloseTag: onCloseTagInStyles
  }).then(function(state) {
    return state.styles.map(function(style) {
      if (style.xfId) {
        var xfId = style.xfId, styleProperties = _objectWithoutProperties(style, _excluded);
        return _objectSpread(_objectSpread({}, state.baseStyles[xfId]), styleProperties);
      } else {
        return style;
      }
    });
  });
}
function createInitialStateInStyles() {
  return {
    numberFormats: {},
    baseStyles: [],
    // The first `164` elements of the `styles` array are going to be `undefined`
    // because those represent the built-in "default" styles in `.xlsx` specification.
    // These "default" styles have IDs from `0` to `163`, i.e. according to their index.
    styles: [],
    cellStyleXfs: false,
    cellXfs: false
  };
}
function onOpenTagInStyles(tagName, attributes, state) {
  if (tagName === "numFmt") {
    state.numberFormats[attributes.numFmtId] = {
      id: Number(attributes.numFmtId),
      template: attributes.formatCode
    };
  } else if (tagName === "cellStyleXfs") {
    state.cellStyleXfs = true;
  } else if (tagName === "cellXfs") {
    state.cellXfs = true;
  } else if (tagName === "xf") {
    if (state.cellStyleXfs) {
      state.baseStyles.push(parseCellStyle(attributes));
    } else if (state.cellXfs) {
      var style = parseCellStyle(attributes, state.numberFormats);
      if (attributes.xfId) {
        style.xfId = Number(attributes.xfId);
      }
      state.styles.push(style);
    }
  }
}
function onCloseTagInStyles(tagName, state) {
  if (tagName === "cellStyleXfs") {
    state.cellStyleXfs = false;
  } else if (tagName === "cellXfs") {
    state.cellXfs = false;
  }
}
function parseCellStyle(attributes, numberFormats) {
  var style = {};
  var numFmtId = attributes.numFmtId;
  if (numFmtId) {
    if (numberFormats && numberFormats[numFmtId]) {
      style.numberFormat = numberFormats[numFmtId];
    } else {
      style.numberFormat = {
        id: Number(numFmtId)
      };
    }
  }
  return style;
}

// node_modules/read-excel-file/modules/xlsx/parseSharedString.js
function createInitialStateInSharedString() {
  return {
    t: false,
    r: false,
    rPh: false,
    string: ""
  };
}
function onOpenTagInSharedString(tagName, attributes, state) {
  if (tagName === "t") {
    state.t = true;
  } else if (tagName === "r") {
    state.r = true;
  } else if (tagName === "rPh") {
    state.rPh = true;
  }
}
function onCloseTagInSharedString(tagName, state) {
  if (tagName === "t") {
    state.t = false;
  } else if (tagName === "r") {
    state.r = false;
  } else if (tagName === "rPh") {
    state.rPh = false;
  }
}
function onTextInSharedString(text, state) {
  if (state.rPh) {
  } else if (state.t) {
    if (state.r) {
      state.string += text;
    } else {
      state.string = text;
    }
  }
}

// node_modules/read-excel-file/modules/xlsx/parseSharedStrings.js
function parseSharedStrings(content, parseXmlStream2) {
  return parseXmlStream2(content, {
    createInitialState: createInitialStateInSharedStrings,
    onOpenTag: onOpenTagInSharedStrings,
    onCloseTag: onCloseTagInSharedStrings,
    onText: onTextInSharedStrings
  }).then(function(state) {
    return state.strings;
  });
}
function createInitialStateInSharedStrings() {
  return {
    si: void 0,
    strings: []
  };
}
function onOpenTagInSharedStrings(tagName, attributes, state) {
  if (tagName === "si") {
    state.si = createInitialStateInSharedString();
  } else if (state.si) {
    onOpenTagInSharedString(tagName, attributes, state.si);
  }
}
function onCloseTagInSharedStrings(tagName, state) {
  if (tagName === "si") {
    state.strings.push(state.si.string);
    state.si = void 0;
  } else if (state.si) {
    onCloseTagInSharedString(tagName, state.si);
  }
}
function onTextInSharedStrings(text, state) {
  if (state.si) {
    onTextInSharedString(text, state.si);
  }
}

// node_modules/read-excel-file/modules/xlsx/parseExcelDate.js
function parseExcelDate(excelSerialDate, options) {
  if (options && options.epoch1904) {
    excelSerialDate += (1904 - 1900) * DAYS_IN_YEAR + JANUARY_0TH_1900_DAY + ERRONEOUS_FEBRUARY_29_1990_DAY;
  }
  var daysBeforeUnixEpoch = JANUARY_0TH_1900_DAY + ERRONEOUS_FEBRUARY_29_1990_DAY + (1970 - 1900) * DAYS_IN_YEAR + NUMBER_OF_LEAP_YEARS_BETWEEN_1900_AND_1970;
  return new Date(Math.floor((excelSerialDate - daysBeforeUnixEpoch) * DAY));
}
var NUMBER_OF_LEAP_YEARS_BETWEEN_1900_AND_1970 = 17;
var JANUARY_0TH_1900_DAY = 1;
var ERRONEOUS_FEBRUARY_29_1990_DAY = 1;
var DAY = 24 * 60 * 60 * 1e3;
var DAYS_IN_YEAR = 365;

// node_modules/read-excel-file/modules/xlsx/parseNumber.js
function parseNumber(stringifiedNumber) {
  var parsedNumber = Number(stringifiedNumber);
  if (isNaN(parsedNumber)) {
    throw new Error("Couldn't parse number: ".concat(stringifiedNumber));
  }
  return parsedNumber;
}

// node_modules/read-excel-file/modules/xlsx/isDateFormat.js
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i2 = 0;
    return function() {
      if (i2 >= o.length) return { done: true };
      return { done: false, value: o[i2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
var DATE_FORMAT_SPECIFIC_LOCALE_PREFIX = /^\[\$-[^\]]+\]/;
var DATE_FORMAT_ALLOW_ANY_OTHER_TEXT_SUFFIX = /;@$/;
var CACHE = {};
function isDateFormatCached(template) {
  if (template in CACHE) {
    return CACHE[template];
  }
  var result = isDateFormat(template);
  CACHE[template] = result;
  return result;
}
function isDateFormat(template) {
  template = template.toLowerCase();
  template = template.replace(DATE_FORMAT_SPECIFIC_LOCALE_PREFIX, "");
  template = template.replace(DATE_FORMAT_ALLOW_ANY_OTHER_TEXT_SUFFIX, "");
  var tokens = template.split(/\W+/);
  if (tokens.length < 0) {
    return false;
  }
  for (var _iterator = _createForOfIteratorHelperLoose(tokens), _step; !(_step = _iterator()).done; ) {
    var token = _step.value;
    if (DATE_TEMPLATE_TOKENS.indexOf(token) < 0) {
      return false;
    }
  }
  return true;
}
var DATE_TEMPLATE_TOKENS = [
  // Seconds (min two digits). Example: "05".
  "ss",
  // Minutes (min two digits). Example: "05". Could also be "Months". Weird.
  "mm",
  // Hours. Example: "1".
  "h",
  // Hours (min two digits). Example: "01".
  "hh",
  // "AM" part of "AM/PM". Lowercased just in case.
  "am",
  // "PM" part of "AM/PM". Lowercased just in case.
  "pm",
  // Day. Example: "1"
  "d",
  // Day (min two digits). Example: "01"
  "dd",
  // Month (numeric). Example: "1".
  "m",
  // Month (numeric, min two digits). Example: "01". Could also be "Minutes". Weird.
  "mm",
  // Month (shortened month name). Example: "Jan".
  "mmm",
  // Month (full month name). Example: "January".
  "mmmm",
  // Two-digit year. Example: "20".
  "yy",
  // Full year. Example: "2020".
  "yyyy",
  // I don't have any idea what "e" means.
  // It's used in "built-in" XLSX formats:
  // * 27 '[$-404]e/m/d';
  // * 36 '[$-404]e/m/d';
  // * 50 '[$-404]e/m/d';
  // * 57 '[$-404]e/m/d';
  "e"
];

// node_modules/read-excel-file/modules/xlsx/isDateFormatStyle.js
function isDateFormatStyle(styleId, styles, options) {
  if (styleId !== void 0) {
    var style = styles[styleId];
    if (!style) {
      throw new Error("Cell style not found: ".concat(styleId));
    }
    if (!style.numberFormat) {
      return false;
    }
    if (
      // Whether it's a "number format" that's conventionally used for storing date timestamps.
      BUILT_IN_DATE_FORMAT_IDS.indexOf(style.numberFormat.id) >= 0 || // Whether it's a "number format" that uses a "formatting template"
      // that the developer is certain is a date formatting template.
      options.dateFormat && style.numberFormat.template === options.dateFormat || // Whether the "smart formatting template" feature is not disabled
      // and it has detected that it's a date formatting template by looking at it.
      options.smartDateParser !== false && style.numberFormat.template && isDateFormatCached(style.numberFormat.template)
    ) {
      return true;
    }
  }
}
var LOCALE_INDEPENDENT_BUILT_IN_DATE_FORMAT_IDS = [
  14,
  // mm-dd-yy
  15,
  // d-mmm-yy
  16,
  // d-mmm
  17,
  // mmm-yy
  18,
  // h:mm AM/PM
  19,
  // h:mm:ss AM/PM
  20,
  // h:mm
  21,
  // h:mm:ss
  22,
  // m/d/yy h:mm
  45,
  // mm:ss
  46,
  // [h]:mm:ss
  47
  // mmss.0
];
var MAINLAND_CHINESE_OR_TAIWANESE_LOCALE_BUILT_IN_DATE_FORMAT_IDS = [
  27,
  // [$-404]e/m/d OR yyyy"年"m"月"
  28,
  // [$-404]e"年"m"月"d"日" OR m"月"d"日"
  29,
  // [$-404]e"年"m"月"d"日" OR m"月"d"日"
  30,
  // m/d/yy OR m-d-yy
  31,
  // yyyy"年"m"月"d"日" OR yyyy"年"m"月"d"日"
  32,
  // hh"時"mm"分" OR h"时"mm"分"
  33,
  // hh"時"mm"分"ss"秒" OR h"时"mm"分"ss"秒"
  34,
  // 上午/下午hh"時"mm"分" OR 上午/下午h"时"mm"分"
  35,
  // 上午/下午hh"時"mm"分"ss"秒" OR 上午/下午h"时"mm"分"ss"秒"
  36,
  // [$-404]e/m/d OR yyyy"年"m"月"
  50,
  // [$-404]e/m/d OR yyyy"年"m"月"
  51,
  // [$-404]e"年"m"月"d"日" OR m"月"d"日"
  52,
  // 上午/下午hh"時"mm"分" OR yyyy"年"m"月"
  53,
  // 上午/下午hh"時"mm"分"ss"秒" OR m"月"d"日"
  54,
  // [$-404]e"年"m"月"d"日" OR m"月"d"日"
  55,
  // 上午/下午hh"時"mm"分" OR 上午/下午h"时"mm"分"
  56,
  // 上午/下午hh"時"mm"分"ss"秒" OR 上午/下午h"时"mm"分"ss"秒"
  57,
  // [$-404]e/m/d OR yyyy"年"m"月"
  58
  // [$-404]e"年"m"月"d"日" OR m"月"d"日"
];
var JAPANESE_OR_KOREAN_LOCALE_BUILT_IN_DATE_FORMAT_IDS = [
  27,
  // [$-411]ge.m.d OR yyyy"年" mm"月" dd"日"
  28,
  // [$-411]ggge"年"m"月"d"日" OR mm-dd
  29,
  // [$-411]ggge"年"m"月"d"日" OR mm-dd
  30,
  // m/d/yy OR mm-dd-yy
  31,
  // yyyy"年"m"月"d"日" OR yyyy"년" mm"월" dd"일"
  32,
  // h"時"mm"分" OR h"시" mm"분"
  33,
  // h"時"mm"分"ss"秒" OR h"시" mm"분" ss"초"
  34,
  // yyyy"年"m"月" OR yyyy-mm-dd
  35,
  // m"月"d"日" OR yyyy-mm-dd
  36,
  // [$-411]ge.m.d OR yyyy"年" mm"月" dd"日"
  50,
  // [$-411]ge.m.d OR yyyy"年" mm"月" dd"日"
  51,
  // [$-411]ggge"年"m"月"d"日" OR mm-dd
  52,
  // yyyy"年"m"月" OR yyyy-mm-dd
  53,
  // m"月"d"日" OR yyyy-mm-dd
  54,
  // [$-411]ggge"年"m"月"d"日" OR mm-dd
  55,
  // yyyy"年"m"月" OR yyyy-mm-dd
  56,
  // m"月"d"日" OR yyyy-mm-dd
  57,
  // [$-411]ge.m.d OR yyyy"年" mm"月" dd"日"
  58
  // [$-411]ggge"年"m"月"d"日" OR mm-dd
];
var THAI_LOCALE_BUILT_IN_DATE_FORMAT_IDS = [
  71,
  // ว/ด/ปปปป
  72,
  // ว-ดดด-ปป
  73,
  // ว-ดดด
  74,
  // ดดด-ปป
  75,
  // ช:นน
  76,
  // ช:นน:ทท
  77,
  // ว/ด/ปปปป ช:นน
  78,
  // นน:ทท
  79,
  // [ช]:นน:ทท
  80,
  // นน:ทท.0
  81
  // d/m/bb
];
var BUILT_IN_DATE_FORMAT_IDS = LOCALE_INDEPENDENT_BUILT_IN_DATE_FORMAT_IDS.concat(
  // Add Mainland Chinese or Taiwanese date format IDs that haven't already been added.
  MAINLAND_CHINESE_OR_TAIWANESE_LOCALE_BUILT_IN_DATE_FORMAT_IDS
).concat(
  // Add Japanese or Korean date format IDs that haven't already been added.
  JAPANESE_OR_KOREAN_LOCALE_BUILT_IN_DATE_FORMAT_IDS.filter(function(numberFormatId) {
    return MAINLAND_CHINESE_OR_TAIWANESE_LOCALE_BUILT_IN_DATE_FORMAT_IDS.indexOf(numberFormatId) < 0;
  })
).concat(
  // Add Thai date format IDs that haven't already been added.
  THAI_LOCALE_BUILT_IN_DATE_FORMAT_IDS.filter(function(numberFormatId) {
    return MAINLAND_CHINESE_OR_TAIWANESE_LOCALE_BUILT_IN_DATE_FORMAT_IDS.indexOf(numberFormatId) < 0;
  }).filter(function(numberFormatId) {
    return JAPANESE_OR_KOREAN_LOCALE_BUILT_IN_DATE_FORMAT_IDS.indexOf(numberFormatId) < 0;
  })
);

// node_modules/read-excel-file/modules/xlsx/parseCellValue.js
function parseCellValue(value, type, _ref) {
  var inlineString = _ref.inlineString, styleId = _ref.styleId, styles = _ref.styles, sharedStrings = _ref.sharedStrings, epoch1904 = _ref.epoch1904, options = _ref.options;
  if (!type) {
    type = "n";
  }
  switch (type) {
    // XLSX tends to store all strings as "shared" (indexed) ones
    // using "s" cell type (for saving on strage space).
    // "str" cell type is then generally only used for storing
    // formula-pre-calculated cell values.
    case "str":
      value = parseString(value, options);
      break;
    // Sometimes, XLSX stores strings as "inline" strings rather than "shared" (indexed) ones.
    // Perhaps the specification doesn't force it to use one or another.
    // Example: `<sheetData><row r="1"><c r="A1" s="1" t="inlineStr"><is><t>Test 123</t></is></c></row></sheetData>`.
    case "inlineStr":
      value = inlineString;
      if (value === void 0) {
        throw new Error(`Couldn't read "inline string" cell value`);
      }
      value = parseString(value, options);
      break;
    // XLSX tends to store string values as "shared" (indexed) ones.
    // "Shared" strings is a way for an Excel editor to reduce
    // the file size by storing "commonly used" strings in a dictionary
    // and then referring to such strings by their index in that dictionary.
    // Example: `<sheetData><row r="1"><c r="A1" s="1" t="s"><v>0</v></c></row></sheetData>`.
    case "s":
      var sharedStringIndex = Number(value);
      if (isNaN(sharedStringIndex)) {
        throw new Error('Invalid "shared" string index: '.concat(value));
      }
      if (sharedStringIndex >= sharedStrings.length) {
        throw new Error('An out-of-bounds "shared" string index: '.concat(value));
      }
      value = sharedStrings[sharedStringIndex];
      value = parseString(value, options);
      break;
    // Boolean (TRUE/FALSE) values are stored as either "1" or "0"
    // in cells of type "b".
    case "b":
      if (value === "1") {
        value = true;
      } else if (value === "0") {
        value = false;
      } else {
        throw new Error('Unsupported "boolean" cell value: '.concat(value));
      }
      break;
    // XLSX specification seems to support cells of type "z":
    // blank "stub" cells that should be ignored by data processing utilities.
    case "z":
      value = void 0;
      break;
    // XLSX specification also defines cells of type "e" containing a numeric "error" code.
    // It's not clear what that means though.
    // They also wrote: "and `w` property stores its common name".
    // It's unclear what they meant by that.
    case "e":
      value = decodeError(value);
      break;
    // XLSX supports date cells of type "d", though seems like it (almost?) never
    // uses it for storing dates, preferring "n" numeric timestamp cells instead.
    // The value of a "d" cell is supposedly a string in "ISO 8601" format.
    // I haven't seen an XLSX file having such cells.
    // Example: `<sheetData><row r="1"><c r="A1" s="1" t="d"><v>2021-06-10T00:47:45.700Z</v></c></row></sheetData>`.
    case "d":
      if (value === void 0) {
        break;
      }
      var parsedDate = new Date(value);
      if (isNaN(parsedDate.valueOf())) {
        throw new Error('Unsupported "date" cell value: '.concat(value));
      }
      value = parsedDate;
      break;
    // Numeric cells have type "n".
    case "n":
      if (value === void 0) {
        break;
      }
      if (styleId && isDateFormatStyle(styleId, styles, options)) {
        value = parseNumber(value);
        value = parseExcelDate(value, {
          epoch1904
        });
      } else {
        value = (options.parseNumber || parseNumber)(value);
      }
      break;
    default:
      throw new TypeError("Cell type not supported: ".concat(type));
  }
  if (value === void 0) {
    value = null;
  }
  return value;
}
function decodeError(errorCode) {
  switch (errorCode) {
    case 0:
      return "#NULL!";
    case 7:
      return "#DIV/0!";
    case 15:
      return "#VALUE!";
    case 23:
      return "#REF!";
    case 29:
      return "#NAME?";
    case 36:
      return "#NUM!";
    case 42:
      return "#N/A";
    case 43:
      return "#GETTING_DATA";
    default:
      return "#ERROR_".concat(errorCode);
  }
}
function parseString(value, options) {
  if (options.trim !== false) {
    value = value.trim();
  }
  if (value === "") {
    value = void 0;
  }
  return value;
}

// node_modules/read-excel-file/modules/xlsx/parseCellAddress.js
function _slicedToArray(arr, i2) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i2) || _unsupportedIterableToArray2(arr, i2) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray2(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray2(o, minLen);
}
function _arrayLikeToArray2(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i2, u, a = [], f = true, o = false;
    try {
      if (i2 = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
function parseCellAddress(coordinatesString) {
  var _coordinatesString$sp = coordinatesString.split(/(\d+)/), _coordinatesString$sp2 = _slicedToArray(_coordinatesString$sp, 2), column = _coordinatesString$sp2[0], row = _coordinatesString$sp2[1];
  return [
    // Row number (starting at `1`).
    Number(row),
    // Column number (starting at `1`).
    // It's not clear if the `column` part could ever be non-trimmed,
    // but this `.trim()` call was already here when I copied this code from somewhere.
    getColumnNumberFromColumnLetters(column.trim())
  ];
}
var LETTERS = ["", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
function getColumnNumberFromColumnLetters(columnLetters) {
  var n = 0;
  var i2 = 0;
  while (i2 < columnLetters.length) {
    n *= 26;
    n += LETTERS.indexOf(columnLetters[i2]);
    i2++;
  }
  return n;
}

// node_modules/read-excel-file/modules/xlsx/parseCell.js
function _slicedToArray2(arr, i2) {
  return _arrayWithHoles2(arr) || _iterableToArrayLimit2(arr, i2) || _unsupportedIterableToArray3(arr, i2) || _nonIterableRest2();
}
function _nonIterableRest2() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray3(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray3(o, minLen);
}
function _arrayLikeToArray3(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function _iterableToArrayLimit2(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i2, u, a = [], f = true, o = false;
    try {
      if (i2 = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles2(arr) {
  if (Array.isArray(arr)) return arr;
}
function parseCell(attributes, value, inlineString, sharedStrings, styles, epoch1904, options) {
  var _parseCellAddress = parseCellAddress(attributes.r), _parseCellAddress2 = _slicedToArray2(_parseCellAddress, 2), row = _parseCellAddress2[0], column = _parseCellAddress2[1];
  var type = attributes.t;
  var styleId = attributes.s ? Number(attributes.s) : void 0;
  return {
    row,
    column,
    value: parseCellValue(value, type, {
      inlineString,
      styleId,
      styles,
      sharedStrings,
      epoch1904,
      options
    })
  };
}
function createInitialStateInCell() {
  return {
    v: false,
    is: false,
    t: false,
    r: false,
    rPh: false,
    value: void 0,
    inlineString: void 0,
    attributes: void 0
  };
}
function onOpenTagInCell(tagName, attributes, state) {
  if (tagName === "v") {
    state.v = true;
  } else if (tagName === "is") {
    state.is = true;
    state.inlineString = "";
  } else if (tagName === "t") {
    state.t = true;
  } else if (tagName === "r") {
    state.r = true;
  } else if (tagName === "rPh") {
    state.rPh = true;
  }
}
function onCloseTagInCell(tagName, state) {
  if (tagName === "v") {
    state.v = false;
  } else if (tagName === "is") {
    state.is = false;
  } else if (tagName === "t") {
    state.t = false;
  } else if (tagName === "r") {
    state.r = false;
  } else if (tagName === "rPh") {
    state.rPh = false;
  }
}
function onTextInCell(text, state) {
  if (state.v) {
    state.value = text;
  } else if (state.is) {
    if (state.rPh) {
    } else if (state.t) {
      if (state.r) {
        state.inlineString += text;
      } else {
        state.inlineString = text;
      }
    }
  }
}

// node_modules/read-excel-file/modules/xlsx/parseSheetData.js
function parseSheetData(state, sharedStrings, styles, epoch1904, options) {
  return state.cells.map(function(_ref) {
    var attributes = _ref.attributes, value = _ref.value, inlineString = _ref.inlineString;
    return parseCell(attributes, value, inlineString, sharedStrings, styles, epoch1904, options);
  });
}
function createInitialStateInSheetData() {
  return {
    c: void 0,
    cells: []
  };
}
function onOpenTagInSheetData(tagName, attributes, state) {
  if (tagName === "c") {
    state.c = createInitialStateInCell();
    state.c.attributes = attributes;
  } else if (state.c) {
    onOpenTagInCell(tagName, attributes, state.c);
  }
}
function onCloseTagInSheetData(tagName, state) {
  if (tagName === "c") {
    state.cells.push({
      attributes: state.c.attributes,
      value: state.c.value,
      inlineString: state.c.inlineString
    });
    state.c = void 0;
  } else if (state.c) {
    onCloseTagInCell(tagName, state.c);
  }
}
function onTextInSheetData(text, state) {
  if (state.c) {
    onTextInCell(text, state.c);
  }
}

// node_modules/read-excel-file/modules/xlsx/reconstructSheetDimensionsFromSheetCells.js
function reconstructSheetDimensionsFromSheetCells(cells) {
  var comparator = function comparator2(a, b) {
    return a - b;
  };
  var allRows = cells.map(function(cell) {
    return cell.row;
  }).sort(comparator);
  var allCols = cells.map(function(cell) {
    return cell.column;
  }).sort(comparator);
  var minRow = allRows[0];
  var maxRow = allRows[allRows.length - 1];
  var minCol = allCols[0];
  var maxCol = allCols[allCols.length - 1];
  return [{
    row: minRow,
    column: minCol
  }, {
    row: maxRow,
    column: maxCol
  }];
}

// node_modules/read-excel-file/modules/xlsx/dropEmptyRows.js
function _createForOfIteratorHelperLoose2(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray4(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i2 = 0;
    return function() {
      if (i2 >= o.length) return { done: true };
      return { done: false, value: o[i2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray4(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray4(o, minLen);
}
function _arrayLikeToArray4(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function dropEmptyRows(data) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, rowIndexSourceMap = _ref.rowIndexSourceMap, _ref$accessor = _ref.accessor, accessor = _ref$accessor === void 0 ? function(_) {
    return _;
  } : _ref$accessor, onlyTrimAtTheEnd = _ref.onlyTrimAtTheEnd;
  var i2 = data.length - 1;
  while (i2 >= 0) {
    var empty = true;
    for (var _iterator = _createForOfIteratorHelperLoose2(data[i2]), _step; !(_step = _iterator()).done; ) {
      var cell = _step.value;
      if (accessor(cell) !== null) {
        empty = false;
        break;
      }
    }
    if (empty) {
      data.splice(i2, 1);
      if (rowIndexSourceMap) {
        rowIndexSourceMap.splice(i2, 1);
      }
    } else if (onlyTrimAtTheEnd) {
      break;
    }
    i2--;
  }
  return data;
}

// node_modules/read-excel-file/modules/xlsx/dropEmptyColumns.js
function _createForOfIteratorHelperLoose3(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray5(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i2 = 0;
    return function() {
      if (i2 >= o.length) return { done: true };
      return { done: false, value: o[i2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray5(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray5(o, minLen);
}
function _arrayLikeToArray5(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function dropEmptyColumns(data) {
  var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, _ref$accessor = _ref.accessor, accessor = _ref$accessor === void 0 ? function(_) {
    return _;
  } : _ref$accessor, onlyTrimAtTheEnd = _ref.onlyTrimAtTheEnd;
  var i2 = data[0].length - 1;
  while (i2 >= 0) {
    var empty = true;
    for (var _iterator = _createForOfIteratorHelperLoose3(data), _step; !(_step = _iterator()).done; ) {
      var row = _step.value;
      if (accessor(row[i2]) !== null) {
        empty = false;
        break;
      }
    }
    if (empty) {
      var j = 0;
      while (j < data.length) {
        data[j].splice(i2, 1);
        j++;
      }
    } else if (onlyTrimAtTheEnd) {
      break;
    }
    i2--;
  }
  return data;
}

// node_modules/read-excel-file/modules/xlsx/convertCellsToData2dArray.js
function _createForOfIteratorHelperLoose4(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray6(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i2 = 0;
    return function() {
      if (i2 >= o.length) return { done: true };
      return { done: false, value: o[i2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray3(arr, i2) {
  return _arrayWithHoles3(arr) || _iterableToArrayLimit3(arr, i2) || _unsupportedIterableToArray6(arr, i2) || _nonIterableRest3();
}
function _nonIterableRest3() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray6(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray6(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray6(o, minLen);
}
function _arrayLikeToArray6(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function _iterableToArrayLimit3(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i2, u, a = [], f = true, o = false;
    try {
      if (i2 = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles3(arr) {
  if (Array.isArray(arr)) return arr;
}
function convertCellsToData2dArray(cells, dimensions) {
  if (cells.length === 0) {
    return [];
  }
  var _dimensions = _slicedToArray3(dimensions, 2), leftTop = _dimensions[0], rightBottom = _dimensions[1];
  var colsCount = rightBottom.column;
  var rowsCount = rightBottom.row;
  var data = new Array(rowsCount);
  var i2 = 0;
  while (i2 < rowsCount) {
    data[i2] = new Array(colsCount);
    var j = 0;
    while (j < colsCount) {
      data[i2][j] = null;
      j++;
    }
    i2++;
  }
  for (var _iterator = _createForOfIteratorHelperLoose4(cells), _step; !(_step = _iterator()).done; ) {
    var cell = _step.value;
    var rowIndex = cell.row - 1;
    var columnIndex = cell.column - 1;
    if (columnIndex < colsCount && rowIndex < rowsCount) {
      data[rowIndex][columnIndex] = cell.value;
    }
  }
  data = dropEmptyRows(
    dropEmptyColumns(data, {
      onlyTrimAtTheEnd: true
    }),
    {
      onlyTrimAtTheEnd: true
    }
    // { onlyTrimAtTheEnd: true, rowIndexSourceMap: options.rowIndexSourceMap }
  );
  return data;
}

// node_modules/read-excel-file/modules/xlsx/parseSheet.js
function _slicedToArray4(arr, i2) {
  return _arrayWithHoles4(arr) || _iterableToArrayLimit4(arr, i2) || _unsupportedIterableToArray7(arr, i2) || _nonIterableRest4();
}
function _nonIterableRest4() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray7(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray7(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray7(o, minLen);
}
function _arrayLikeToArray7(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function _iterableToArrayLimit4(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i2, u, a = [], f = true, o = false;
    try {
      if (i2 = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i2.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles4(arr) {
  if (Array.isArray(arr)) return arr;
}
function parseSheet(content, parseXmlStream2, _ref) {
  var sharedStrings = _ref.sharedStrings, styles = _ref.styles, epoch1904 = _ref.epoch1904, options = _ref.options;
  var getSheetData = function getSheetData2(state) {
    var cells = parseSheetData(state.sheetData, sharedStrings, styles, epoch1904, options);
    var dimensions = state.dimension ? parseSheetDimensionRef(state.dimension) : reconstructSheetDimensionsFromSheetCells(cells);
    return convertCellsToData2dArray(cells, dimensions);
  };
  return parseXmlStream2(content, {
    createInitialState: createInitialStateInSheet,
    onOpenTag: onOpenTagInSheet,
    onCloseTag: onCloseTagInSheet,
    onText: onTextInSheet
  }).then(function(state) {
    return getSheetData(state);
  });
}
function createInitialStateInSheet() {
  return {
    dimension: void 0,
    sheetData: void 0
  };
}
function onOpenTagInSheet(tagName, attributes, state) {
  if (tagName === "dimension") {
    state.dimension = attributes.ref;
  } else if (tagName === "sheetData") {
    state.sheetData = createInitialStateInSheetData();
  } else if (state.sheetData) {
    onOpenTagInSheetData(tagName, attributes, state.sheetData);
  }
}
function onCloseTagInSheet(tagName, state) {
  if (state.sheetData) {
    onCloseTagInSheetData(tagName, state.sheetData);
  }
}
function onTextInSheet(text, state) {
  if (state.sheetData) {
    onTextInSheetData(text, state.sheetData);
  }
}
function parseSheetDimensionRef(ref) {
  var dimensions = ref.split(":").map(parseCellAddress).map(function(_ref2) {
    var _ref3 = _slicedToArray4(_ref2, 2), row = _ref3[0], column = _ref3[1];
    return {
      row,
      column
    };
  });
  if (dimensions.length === 1) {
    dimensions = [dimensions[0], dimensions[0]];
  }
  return dimensions;
}

// node_modules/read-excel-file/modules/utility/isPromise.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
function isPromise(anything) {
  return _typeof2(anything) === "object" && typeof anything.then === "function";
}

// node_modules/read-excel-file/modules/xlsx/parseSpreadsheetContents.js
var _excluded2 = ["parseNumber"];
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
function _createForOfIteratorHelperLoose5(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);
  if (Array.isArray(o) || (it = _unsupportedIterableToArray8(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i2 = 0;
    return function() {
      if (i2 >= o.length) return { done: true };
      return { done: false, value: o[i2++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray8(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray8(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray8(o, minLen);
}
function _arrayLikeToArray8(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++) arr2[i2] = arr[i2];
  return arr2;
}
function _objectWithoutProperties2(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose2(source, excluded);
  var key, i2;
  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
    for (i2 = 0; i2 < sourceSymbolKeys.length; i2++) {
      key = sourceSymbolKeys[i2];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }
  return target;
}
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i2;
  for (i2 = 0; i2 < sourceKeys.length; i2++) {
    key = sourceKeys[i2];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty2(obj, key, value) {
  key = _toPropertyKey2(key);
  if (key in obj) {
    Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPropertyKey2(arg) {
  var key = _toPrimitive2(arg, "string");
  return _typeof3(key) === "symbol" ? key : String(key);
}
function _toPrimitive2(input, hint) {
  if (_typeof3(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== void 0) {
    var res = prim.call(input, hint || "default");
    if (_typeof3(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function parseSpreadsheetContents(parseXmlStream2, contents) {
  var options = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  checkpoint("parse spreadsheet info and file paths");
  return readFiles(getXmlFilesAtFixedPaths(), contents, parseXmlStream2).then(function(_ref) {
    var spreadsheetInfo = _ref.spreadsheetInfo, filePaths = _ref.filePaths;
    checkpoint('parse "shared strings" and "styles"');
    return readFiles(getXmlFilesAtNonFixedPaths(filePaths), contents, parseXmlStream2).then(function(_ref2) {
      var sharedStrings = _ref2.sharedStrings, styles = _ref2.styles;
      var sheetRelationIdsToRead = options.sheets ? options.sheets.map(function(sheet) {
        return getSheetRelationId(sheet, spreadsheetInfo.sheets);
      }) : spreadsheetInfo.sheets.map(function(_) {
        return _.relationId;
      });
      checkpoint("parse sheet".concat(sheetRelationIdsToRead.length === 1 ? "" : "s", " data"));
      return readFiles(getSheetDataXmlFiles(filePaths, sheetRelationIdsToRead, {
        sharedStrings,
        styles,
        epoch1904: spreadsheetInfo.epoch1904,
        options
      }), contents, parseXmlStream2).then(function(sheetsData) {
        checkpoint("end");
        return sheetRelationIdsToRead.map(function(sheetRelationId) {
          return {
            sheet: getSheetNameByRelationId(sheetRelationId, spreadsheetInfo.sheets),
            data: sheetsData[sheetRelationId]
          };
        });
      });
    });
  });
}
function parseSpreadsheetContentsInWorker(createWorkerFunction2, parseXmlStream2, contents, options) {
  if (!(options && options.parseNumber)) {
    options = _objectSpread2(_objectSpread2({}, options), {}, {
      parseNumber
    });
  }
  if (!createWorkerFunction2) {
    return parseSpreadsheetContents(parseXmlStream2, contents, options);
  }
  var _options = options, parseNumber2 = _options.parseNumber, optionsJson = _objectWithoutProperties2(_options, _excluded2);
  var workerFn = createWorkerFunction2(function(data) {
    var options2 = _objectSpread2(_objectSpread2({}, data.optionsJson), {}, {
      parseNumber: parseNumber2
    });
    return parseSpreadsheetContents(parseXmlStream2, data.contents, options2);
  });
  workerFn.addDependencies(
    // Any "outside" dependencies that're referenced in the function (below).
    function() {
      return [
        parseXmlStream2,
        parseNumber2,
        parseSpreadsheetContents,
        getSheetRelationId,
        getSheetNameByRelationId,
        getXmlFilesAtFixedPaths,
        getXmlFilesAtNonFixedPaths,
        getSheetDataXmlFiles,
        readFiles,
        checkpoint,
        latestCheckpointTimestamp,
        isPromise
        // parseSheet,
        //
        // This is not the full list by any means. There's more. Quite a lot more of them.
        // It started looking a bit too much so I stopped adding the dependencies here.
        // Now I understand why `fflate`'s source code is all written in a single
        // multi-thousand-line `index.ts` file. The thing is, once one starts splitting
        // the code into modules, they'd have to manually export any top-level variables
        // or functions from those modules and import them here in order to specify them
        // in the list of dependencies. And even if doing so for every top-level variable
        // or function in every imported module doesn't seem like an impossible task,
        // imagine someone refactoring the code later and extracting new top-level
        // variables or functions. Without 100% code coverage requirement, it won't be caught
        // at build time and can only be caught in production, which isn't ideal to say the least.
        // So it seems like users of this package will have to just deal with the "blocking"
        // nature of the sheet data parser, because I won't follow into `fflate`'s steps
        // and rewrite this package as a single `index.js` file.
        // Users of this package will have to manually put their code in a worker
        // in case they'd prefer it to run in a separate thread to prevent "blocking"
        // the main thread when parsing sheet data.
      ];
    }
  );
  return workerFn.callOnce({
    optionsJson,
    contents
  });
}
function getSheetRelationId(sheet, sheets) {
  if (typeof sheet === "string") {
    for (var _iterator = _createForOfIteratorHelperLoose5(sheets), _step; !(_step = _iterator()).done; ) {
      var _sheet = _step.value;
      if (_sheet.name === sheet) {
        return _sheet.relationId;
      }
    }
    throw new Error('Sheet "'.concat(sheet, '" not found. Available sheets: ').concat(sheets.map(function(_ref3) {
      var name = _ref3.name;
      return '"'.concat(name, '"');
    }).join(", ")));
  } else {
    if (sheet <= sheets.length) {
      return sheets[sheet - 1].relationId;
    }
    throw new Error("Sheet number out of bounds: ".concat(sheet, ". Available sheets count: ").concat(sheets.length));
  }
}
function getSheetNameByRelationId(sheetRelationId, sheets) {
  for (var _iterator2 = _createForOfIteratorHelperLoose5(sheets), _step2; !(_step2 = _iterator2()).done; ) {
    var sheet = _step2.value;
    if (sheet.relationId === sheetRelationId) {
      return sheet.name;
    }
  }
  throw new Error("Sheet relation ID not found: ".concat(sheetRelationId));
}
function getXmlFilesAtFixedPaths() {
  return {
    // Read the paths to certain files inside the `.xlsx` file, which is itself just a `.zip` archive.
    // These paths aren't standardized between different spreadsheet editors.
    // https://github.com/tidyverse/readxl/issues/104
    "xl/_rels/workbook.xml.rels": {
      name: "filePaths",
      parse: parseFilePaths
    },
    // General info on the spreadsheet.
    "xl/workbook.xml": {
      name: "spreadsheetInfo",
      parse: parseSpreadsheetInfo
    }
  };
}
function getXmlFilesAtNonFixedPaths(filePaths) {
  var _ref4;
  return _ref4 = {}, _defineProperty2(_ref4, filePaths.sharedStrings || "xl/sharedStrings.xml", {
    name: "sharedStrings",
    // `parseSharedStrings()` returns a `Promise`.
    parse: parseSharedStrings,
    // It seems that "sharedStrings.xml" is not required to exist.
    // For example, that could be the case when a spreadsheet doesn't contain any strings.
    // https://github.com/catamphetamine/read-excel-file/issues/85
    fallback: []
  }), _defineProperty2(_ref4, filePaths.styles || "xl/styles.xml", {
    name: "styles",
    parse: parseStyles,
    fallback: {}
  }), _ref4;
}
function getSheetDataXmlFiles(filePaths, sheetRelationIdsToRead, sheetDataParserParameters) {
  return Object.keys(filePaths.sheets).filter(function(sheetRelationId) {
    return sheetRelationIdsToRead.includes(sheetRelationId);
  }).reduce(function(filesInfo, sheetRelationId) {
    return _objectSpread2(_objectSpread2({}, filesInfo), {}, _defineProperty2({}, filePaths.sheets[sheetRelationId], {
      name: sheetRelationId,
      // `parseSheet()` returns a `Promise`.
      parse: function parse(content, parseXmlStream2) {
        return parseSheet(content, parseXmlStream2, sheetDataParserParameters);
      }
    }));
  }, {});
}
function readFiles(filesInfo, contents, parseXmlStream2) {
  var results = {};
  var _loop = function _loop3() {
    var filePath = _Object$keys[_i];
    var fileInfo = filesInfo[filePath];
    results[fileInfo.name] = contents[filePath] === void 0 ? fileInfo.fallback === void 0 ? (function() {
      throw new Error('"'.concat(filePath, '" file not found inside the `.xlsx` file'));
    })() : fileInfo.fallback : fileInfo.parse(contents[filePath], parseXmlStream2);
  };
  for (var _i = 0, _Object$keys = Object.keys(filesInfo); _i < _Object$keys.length; _i++) {
    _loop();
  }
  var promises = [];
  var _loop2 = function _loop22() {
    var name = _Object$keys2[_i2];
    if (isPromise(results[name])) {
      promises.push(results[name].then(function(result) {
        results[name] = result;
      }));
    }
  };
  for (var _i2 = 0, _Object$keys2 = Object.keys(results); _i2 < _Object$keys2.length; _i2++) {
    _loop2();
  }
  if (promises.length > 0) {
    return Promise.all(promises).then(function() {
      return results;
    });
  }
  return results;
}

// node_modules/read-excel-file/modules/export/readXlsxFileBrowser.js
var createWorkerFunction = void 0;
function readXlsxFile(input, options) {
  return unpackXlsxFile(input).then(function(contents) {
    return parseSpreadsheetContentsInWorker(createWorkerFunction, parseXmlStream, contents, options);
  });
}

// node_modules/flatpickr/dist/esm/types/options.js
var HOOKS = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
];
var defaults = {
  _disable: [],
  allowInput: false,
  allowInvalidPreload: false,
  altFormat: "F j, Y",
  altInput: false,
  altInputClass: "form-control input",
  animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: true,
  clickOpens: true,
  closeOnSelect: true,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: false,
  enableSeconds: false,
  enableTime: false,
  errorHandler: function(err2) {
    return typeof console !== "undefined" && console.warn(err2);
  },
  getWeek: function(givenDate) {
    var date = new Date(givenDate.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    var week1 = new Date(date.getFullYear(), 0, 4);
    return 1 + Math.round(((date.getTime() - week1.getTime()) / 864e5 - 3 + (week1.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: false,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: false,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: false,
  showMonths: 1,
  static: false,
  time_24hr: false,
  weekNumbers: false,
  wrap: false
};

// node_modules/flatpickr/dist/esm/l10n/default.js
var english = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(nth) {
    var s = nth % 100;
    if (s > 3 && s < 21)
      return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: false
};
var default_default = english;

// node_modules/flatpickr/dist/esm/utils/index.js
var pad = function(number, length) {
  if (length === void 0) {
    length = 2;
  }
  return ("000" + number).slice(length * -1);
};
var int = function(bool) {
  return bool === true ? 1 : 0;
};
function debounce(fn, wait) {
  var t;
  return function() {
    var _this = this;
    var args = arguments;
    clearTimeout(t);
    t = setTimeout(function() {
      return fn.apply(_this, args);
    }, wait);
  };
}
var arrayify = function(obj) {
  return obj instanceof Array ? obj : [obj];
};

// node_modules/flatpickr/dist/esm/utils/dom.js
function toggleClass(elem, className, bool) {
  if (bool === true)
    return elem.classList.add(className);
  elem.classList.remove(className);
}
function createElement(tag, className, content) {
  var e = window.document.createElement(tag);
  className = className || "";
  content = content || "";
  e.className = className;
  if (content !== void 0)
    e.textContent = content;
  return e;
}
function clearNode(node) {
  while (node.firstChild)
    node.removeChild(node.firstChild);
}
function findParent(node, condition) {
  if (condition(node))
    return node;
  else if (node.parentNode)
    return findParent(node.parentNode, condition);
  return void 0;
}
function createNumberInput(inputClassName, opts) {
  var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1) {
    numInput.type = "number";
  } else {
    numInput.type = "text";
    numInput.pattern = "\\d*";
  }
  if (opts !== void 0)
    for (var key in opts)
      numInput.setAttribute(key, opts[key]);
  wrapper.appendChild(numInput);
  wrapper.appendChild(arrowUp);
  wrapper.appendChild(arrowDown);
  return wrapper;
}
function getEventTarget(event) {
  try {
    if (typeof event.composedPath === "function") {
      var path = event.composedPath();
      return path[0];
    }
    return event.target;
  } catch (error2) {
    return event.target;
  }
}

// node_modules/flatpickr/dist/esm/utils/formatting.js
var doNothing = function() {
  return void 0;
};
var monthToStr = function(monthNumber, shorthand, locale) {
  return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber];
};
var revFormat = {
  D: doNothing,
  F: function(dateObj, monthName, locale) {
    dateObj.setMonth(locale.months.longhand.indexOf(monthName));
  },
  G: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  H: function(dateObj, hour) {
    dateObj.setHours(parseFloat(hour));
  },
  J: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  K: function(dateObj, amPM, locale) {
    dateObj.setHours(dateObj.getHours() % 12 + 12 * int(new RegExp(locale.amPM[1], "i").test(amPM)));
  },
  M: function(dateObj, shortMonth, locale) {
    dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
  },
  S: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  U: function(_, unixSeconds) {
    return new Date(parseFloat(unixSeconds) * 1e3);
  },
  W: function(dateObj, weekNum, locale) {
    var weekNumber = parseInt(weekNum);
    var date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
    return date;
  },
  Y: function(dateObj, year) {
    dateObj.setFullYear(parseFloat(year));
  },
  Z: function(_, ISODate) {
    return new Date(ISODate);
  },
  d: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  h: function(dateObj, hour) {
    dateObj.setHours((dateObj.getHours() >= 12 ? 12 : 0) + parseFloat(hour));
  },
  i: function(dateObj, minutes) {
    dateObj.setMinutes(parseFloat(minutes));
  },
  j: function(dateObj, day) {
    dateObj.setDate(parseFloat(day));
  },
  l: doNothing,
  m: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  n: function(dateObj, month) {
    dateObj.setMonth(parseFloat(month) - 1);
  },
  s: function(dateObj, seconds) {
    dateObj.setSeconds(parseFloat(seconds));
  },
  u: function(_, unixMillSeconds) {
    return new Date(parseFloat(unixMillSeconds));
  },
  w: doNothing,
  y: function(dateObj, year) {
    dateObj.setFullYear(2e3 + parseFloat(year));
  }
};
var tokenRegex = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
};
var formats = {
  Z: function(date) {
    return date.toISOString();
  },
  D: function(date, locale, options) {
    return locale.weekdays.shorthand[formats.w(date, locale, options)];
  },
  F: function(date, locale, options) {
    return monthToStr(formats.n(date, locale, options) - 1, false, locale);
  },
  G: function(date, locale, options) {
    return pad(formats.h(date, locale, options));
  },
  H: function(date) {
    return pad(date.getHours());
  },
  J: function(date, locale) {
    return locale.ordinal !== void 0 ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
  },
  K: function(date, locale) {
    return locale.amPM[int(date.getHours() > 11)];
  },
  M: function(date, locale) {
    return monthToStr(date.getMonth(), true, locale);
  },
  S: function(date) {
    return pad(date.getSeconds());
  },
  U: function(date) {
    return date.getTime() / 1e3;
  },
  W: function(date, _, options) {
    return options.getWeek(date);
  },
  Y: function(date) {
    return pad(date.getFullYear(), 4);
  },
  d: function(date) {
    return pad(date.getDate());
  },
  h: function(date) {
    return date.getHours() % 12 ? date.getHours() % 12 : 12;
  },
  i: function(date) {
    return pad(date.getMinutes());
  },
  j: function(date) {
    return date.getDate();
  },
  l: function(date, locale) {
    return locale.weekdays.longhand[date.getDay()];
  },
  m: function(date) {
    return pad(date.getMonth() + 1);
  },
  n: function(date) {
    return date.getMonth() + 1;
  },
  s: function(date) {
    return date.getSeconds();
  },
  u: function(date) {
    return date.getTime();
  },
  w: function(date) {
    return date.getDay();
  },
  y: function(date) {
    return String(date.getFullYear()).substring(2);
  }
};

// node_modules/flatpickr/dist/esm/utils/dates.js
var createDateFormatter = function(_a2) {
  var _b2 = _a2.config, config = _b2 === void 0 ? defaults : _b2, _c = _a2.l10n, l10n = _c === void 0 ? english : _c, _d = _a2.isMobile, isMobile = _d === void 0 ? false : _d;
  return function(dateObj, frmt, overrideLocale) {
    var locale = overrideLocale || l10n;
    if (config.formatDate !== void 0 && !isMobile) {
      return config.formatDate(dateObj, frmt, locale);
    }
    return frmt.split("").map(function(c, i2, arr) {
      return formats[c] && arr[i2 - 1] !== "\\" ? formats[c](dateObj, locale, config) : c !== "\\" ? c : "";
    }).join("");
  };
};
var createDateParser = function(_a2) {
  var _b2 = _a2.config, config = _b2 === void 0 ? defaults : _b2, _c = _a2.l10n, l10n = _c === void 0 ? english : _c;
  return function(date, givenFormat, timeless, customLocale) {
    if (date !== 0 && !date)
      return void 0;
    var locale = customLocale || l10n;
    var parsedDate;
    var dateOrig = date;
    if (date instanceof Date)
      parsedDate = new Date(date.getTime());
    else if (typeof date !== "string" && date.toFixed !== void 0)
      parsedDate = new Date(date);
    else if (typeof date === "string") {
      var format = givenFormat || (config || defaults).dateFormat;
      var datestr = String(date).trim();
      if (datestr === "today") {
        parsedDate = /* @__PURE__ */ new Date();
        timeless = true;
      } else if (config && config.parseDate) {
        parsedDate = config.parseDate(date, format);
      } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) {
        parsedDate = new Date(date);
      } else {
        var matched = void 0, ops = [];
        for (var i2 = 0, matchIndex = 0, regexStr = ""; i2 < format.length; i2++) {
          var token = format[i2];
          var isBackSlash = token === "\\";
          var escaped = format[i2 - 1] === "\\" || isBackSlash;
          if (tokenRegex[token] && !escaped) {
            regexStr += tokenRegex[token];
            var match = new RegExp(regexStr).exec(date);
            if (match && (matched = true)) {
              ops[token !== "Y" ? "push" : "unshift"]({
                fn: revFormat[token],
                val: match[++matchIndex]
              });
            }
          } else if (!isBackSlash)
            regexStr += ".";
        }
        parsedDate = !config || !config.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0));
        ops.forEach(function(_a3) {
          var fn = _a3.fn, val = _a3.val;
          return parsedDate = fn(parsedDate, val, locale) || parsedDate;
        });
        parsedDate = matched ? parsedDate : void 0;
      }
    }
    if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
      config.errorHandler(new Error("Invalid date provided: " + dateOrig));
      return void 0;
    }
    if (timeless === true)
      parsedDate.setHours(0, 0, 0, 0);
    return parsedDate;
  };
};
function compareDates(date1, date2, timeless) {
  if (timeless === void 0) {
    timeless = true;
  }
  if (timeless !== false) {
    return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
  }
  return date1.getTime() - date2.getTime();
}
var isBetween = function(ts, ts1, ts2) {
  return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
var calculateSecondsSinceMidnight = function(hours, minutes, seconds) {
  return hours * 3600 + minutes * 60 + seconds;
};
var parseSeconds = function(secondsSinceMidnight) {
  var hours = Math.floor(secondsSinceMidnight / 3600), minutes = (secondsSinceMidnight - hours * 3600) / 60;
  return [hours, minutes, secondsSinceMidnight - hours * 3600 - minutes * 60];
};
var duration = {
  DAY: 864e5
};
function getDefaultHours(config) {
  var hours = config.defaultHour;
  var minutes = config.defaultMinute;
  var seconds = config.defaultSeconds;
  if (config.minDate !== void 0) {
    var minHour = config.minDate.getHours();
    var minMinutes = config.minDate.getMinutes();
    var minSeconds = config.minDate.getSeconds();
    if (hours < minHour) {
      hours = minHour;
    }
    if (hours === minHour && minutes < minMinutes) {
      minutes = minMinutes;
    }
    if (hours === minHour && minutes === minMinutes && seconds < minSeconds)
      seconds = config.minDate.getSeconds();
  }
  if (config.maxDate !== void 0) {
    var maxHr = config.maxDate.getHours();
    var maxMinutes = config.maxDate.getMinutes();
    hours = Math.min(hours, maxHr);
    if (hours === maxHr)
      minutes = Math.min(maxMinutes, minutes);
    if (hours === maxHr && minutes === maxMinutes)
      seconds = config.maxDate.getSeconds();
  }
  return { hours, minutes, seconds };
}

// node_modules/flatpickr/dist/esm/utils/polyfills.js
if (typeof Object.assign !== "function") {
  Object.assign = function(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
      args[_i - 1] = arguments[_i];
    }
    if (!target) {
      throw TypeError("Cannot convert undefined or null to object");
    }
    var _loop_1 = function(source2) {
      if (source2) {
        Object.keys(source2).forEach(function(key) {
          return target[key] = source2[key];
        });
      }
    };
    for (var _a2 = 0, args_1 = args; _a2 < args_1.length; _a2++) {
      var source = args_1[_a2];
      _loop_1(source);
    }
    return target;
  };
}

// node_modules/flatpickr/dist/esm/index.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i2 = 1, n = arguments.length; i2 < n; i2++) {
      s = arguments[i2];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
        t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __spreadArrays = function() {
  for (var s = 0, i2 = 0, il = arguments.length; i2 < il; i2++) s += arguments[i2].length;
  for (var r = Array(s), k = 0, i2 = 0; i2 < il; i2++)
    for (var a = arguments[i2], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
};
var DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element, instanceConfig) {
  var self2 = {
    config: __assign(__assign({}, defaults), flatpickr.defaultConfig),
    l10n: default_default
  };
  self2.parseDate = createDateParser({ config: self2.config, l10n: self2.l10n });
  self2._handlers = [];
  self2.pluginElements = [];
  self2.loadedPlugins = [];
  self2._bind = bind;
  self2._setHoursFromDate = setHoursFromDate;
  self2._positionCalendar = positionCalendar;
  self2.changeMonth = changeMonth;
  self2.changeYear = changeYear;
  self2.clear = clear;
  self2.close = close;
  self2.onMouseOver = onMouseOver;
  self2._createElement = createElement;
  self2.createDay = createDay;
  self2.destroy = destroy;
  self2.isEnabled = isEnabled;
  self2.jumpToDate = jumpToDate;
  self2.updateValue = updateValue;
  self2.open = open;
  self2.redraw = redraw;
  self2.set = set;
  self2.setDate = setDate;
  self2.toggle = toggle;
  function setupHelperFunctions() {
    self2.utils = {
      getDaysInMonth: function(month, yr) {
        if (month === void 0) {
          month = self2.currentMonth;
        }
        if (yr === void 0) {
          yr = self2.currentYear;
        }
        if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0))
          return 29;
        return self2.l10n.daysInMonth[month];
      }
    };
  }
  function init() {
    self2.element = self2.input = element;
    self2.isOpen = false;
    parseConfig();
    setupLocale();
    setupInputs();
    setupDates();
    setupHelperFunctions();
    if (!self2.isMobile)
      build();
    bindEvents();
    if (self2.selectedDates.length || self2.config.noCalendar) {
      if (self2.config.enableTime) {
        setHoursFromDate(self2.config.noCalendar ? self2.latestSelectedDateObj : void 0);
      }
      updateValue(false);
    }
    setCalendarWidth();
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (!self2.isMobile && isSafari) {
      positionCalendar();
    }
    triggerEvent("onReady");
  }
  function getClosestActiveElement() {
    var _a2;
    return ((_a2 = self2.calendarContainer) === null || _a2 === void 0 ? void 0 : _a2.getRootNode()).activeElement || document.activeElement;
  }
  function bindToInstance(fn) {
    return fn.bind(self2);
  }
  function setCalendarWidth() {
    var config = self2.config;
    if (config.weekNumbers === false && config.showMonths === 1) {
      return;
    } else if (config.noCalendar !== true) {
      window.requestAnimationFrame(function() {
        if (self2.calendarContainer !== void 0) {
          self2.calendarContainer.style.visibility = "hidden";
          self2.calendarContainer.style.display = "block";
        }
        if (self2.daysContainer !== void 0) {
          var daysWidth = (self2.days.offsetWidth + 1) * config.showMonths;
          self2.daysContainer.style.width = daysWidth + "px";
          self2.calendarContainer.style.width = daysWidth + (self2.weekWrapper !== void 0 ? self2.weekWrapper.offsetWidth : 0) + "px";
          self2.calendarContainer.style.removeProperty("visibility");
          self2.calendarContainer.style.removeProperty("display");
        }
      });
    }
  }
  function updateTime(e) {
    if (self2.selectedDates.length === 0) {
      var defaultDate = self2.config.minDate === void 0 || compareDates(/* @__PURE__ */ new Date(), self2.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(self2.config.minDate.getTime());
      var defaults2 = getDefaultHours(self2.config);
      defaultDate.setHours(defaults2.hours, defaults2.minutes, defaults2.seconds, defaultDate.getMilliseconds());
      self2.selectedDates = [defaultDate];
      self2.latestSelectedDateObj = defaultDate;
    }
    if (e !== void 0 && e.type !== "blur") {
      timeWrapper(e);
    }
    var prevValue = self2._input.value;
    setHoursFromInputs();
    updateValue();
    if (self2._input.value !== prevValue) {
      self2._debouncedChange();
    }
  }
  function ampm2military(hour, amPM) {
    return hour % 12 + 12 * int(amPM === self2.l10n.amPM[1]);
  }
  function military2ampm(hour) {
    switch (hour % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return hour % 12;
    }
  }
  function setHoursFromInputs() {
    if (self2.hourElement === void 0 || self2.minuteElement === void 0)
      return;
    var hours = (parseInt(self2.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self2.minuteElement.value, 10) || 0) % 60, seconds = self2.secondElement !== void 0 ? (parseInt(self2.secondElement.value, 10) || 0) % 60 : 0;
    if (self2.amPM !== void 0) {
      hours = ampm2military(hours, self2.amPM.textContent);
    }
    var limitMinHours = self2.config.minTime !== void 0 || self2.config.minDate && self2.minDateHasTime && self2.latestSelectedDateObj && compareDates(self2.latestSelectedDateObj, self2.config.minDate, true) === 0;
    var limitMaxHours = self2.config.maxTime !== void 0 || self2.config.maxDate && self2.maxDateHasTime && self2.latestSelectedDateObj && compareDates(self2.latestSelectedDateObj, self2.config.maxDate, true) === 0;
    if (self2.config.maxTime !== void 0 && self2.config.minTime !== void 0 && self2.config.minTime > self2.config.maxTime) {
      var minBound = calculateSecondsSinceMidnight(self2.config.minTime.getHours(), self2.config.minTime.getMinutes(), self2.config.minTime.getSeconds());
      var maxBound = calculateSecondsSinceMidnight(self2.config.maxTime.getHours(), self2.config.maxTime.getMinutes(), self2.config.maxTime.getSeconds());
      var currentTime = calculateSecondsSinceMidnight(hours, minutes, seconds);
      if (currentTime > maxBound && currentTime < minBound) {
        var result = parseSeconds(minBound);
        hours = result[0];
        minutes = result[1];
        seconds = result[2];
      }
    } else {
      if (limitMaxHours) {
        var maxTime = self2.config.maxTime !== void 0 ? self2.config.maxTime : self2.config.maxDate;
        hours = Math.min(hours, maxTime.getHours());
        if (hours === maxTime.getHours())
          minutes = Math.min(minutes, maxTime.getMinutes());
        if (minutes === maxTime.getMinutes())
          seconds = Math.min(seconds, maxTime.getSeconds());
      }
      if (limitMinHours) {
        var minTime = self2.config.minTime !== void 0 ? self2.config.minTime : self2.config.minDate;
        hours = Math.max(hours, minTime.getHours());
        if (hours === minTime.getHours() && minutes < minTime.getMinutes())
          minutes = minTime.getMinutes();
        if (minutes === minTime.getMinutes())
          seconds = Math.max(seconds, minTime.getSeconds());
      }
    }
    setHours(hours, minutes, seconds);
  }
  function setHoursFromDate(dateObj) {
    var date = dateObj || self2.latestSelectedDateObj;
    if (date && date instanceof Date) {
      setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
  }
  function setHours(hours, minutes, seconds) {
    if (self2.latestSelectedDateObj !== void 0) {
      self2.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
    }
    if (!self2.hourElement || !self2.minuteElement || self2.isMobile)
      return;
    self2.hourElement.value = pad(!self2.config.time_24hr ? (12 + hours) % 12 + 12 * int(hours % 12 === 0) : hours);
    self2.minuteElement.value = pad(minutes);
    if (self2.amPM !== void 0)
      self2.amPM.textContent = self2.l10n.amPM[int(hours >= 12)];
    if (self2.secondElement !== void 0)
      self2.secondElement.value = pad(seconds);
  }
  function onYearInput(event) {
    var eventTarget = getEventTarget(event);
    var year = parseInt(eventTarget.value) + (event.delta || 0);
    if (year / 1e3 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) {
      changeYear(year);
    }
  }
  function bind(element2, event, handler, options) {
    if (event instanceof Array)
      return event.forEach(function(ev) {
        return bind(element2, ev, handler, options);
      });
    if (element2 instanceof Array)
      return element2.forEach(function(el) {
        return bind(el, event, handler, options);
      });
    element2.addEventListener(event, handler, options);
    self2._handlers.push({
      remove: function() {
        return element2.removeEventListener(event, handler, options);
      }
    });
  }
  function triggerChange() {
    triggerEvent("onChange");
  }
  function bindEvents() {
    if (self2.config.wrap) {
      ["open", "close", "toggle", "clear"].forEach(function(evt) {
        Array.prototype.forEach.call(self2.element.querySelectorAll("[data-" + evt + "]"), function(el) {
          return bind(el, "click", self2[evt]);
        });
      });
    }
    if (self2.isMobile) {
      setupMobile();
      return;
    }
    var debouncedResize = debounce(onResize, 50);
    self2._debouncedChange = debounce(triggerChange, DEBOUNCED_CHANGE_MS);
    if (self2.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent))
      bind(self2.daysContainer, "mouseover", function(e) {
        if (self2.config.mode === "range")
          onMouseOver(getEventTarget(e));
      });
    bind(self2._input, "keydown", onKeyDown);
    if (self2.calendarContainer !== void 0) {
      bind(self2.calendarContainer, "keydown", onKeyDown);
    }
    if (!self2.config.inline && !self2.config.static)
      bind(window, "resize", debouncedResize);
    if (window.ontouchstart !== void 0)
      bind(window.document, "touchstart", documentClick);
    else
      bind(window.document, "mousedown", documentClick);
    bind(window.document, "focus", documentClick, { capture: true });
    if (self2.config.clickOpens === true) {
      bind(self2._input, "focus", self2.open);
      bind(self2._input, "click", self2.open);
    }
    if (self2.daysContainer !== void 0) {
      bind(self2.monthNav, "click", onMonthNavClick);
      bind(self2.monthNav, ["keyup", "increment"], onYearInput);
      bind(self2.daysContainer, "click", selectDate);
    }
    if (self2.timeContainer !== void 0 && self2.minuteElement !== void 0 && self2.hourElement !== void 0) {
      var selText = function(e) {
        return getEventTarget(e).select();
      };
      bind(self2.timeContainer, ["increment"], updateTime);
      bind(self2.timeContainer, "blur", updateTime, { capture: true });
      bind(self2.timeContainer, "click", timeIncrement);
      bind([self2.hourElement, self2.minuteElement], ["focus", "click"], selText);
      if (self2.secondElement !== void 0)
        bind(self2.secondElement, "focus", function() {
          return self2.secondElement && self2.secondElement.select();
        });
      if (self2.amPM !== void 0) {
        bind(self2.amPM, "click", function(e) {
          updateTime(e);
        });
      }
    }
    if (self2.config.allowInput) {
      bind(self2._input, "blur", onBlur);
    }
  }
  function jumpToDate(jumpDate, triggerChange2) {
    var jumpTo = jumpDate !== void 0 ? self2.parseDate(jumpDate) : self2.latestSelectedDateObj || (self2.config.minDate && self2.config.minDate > self2.now ? self2.config.minDate : self2.config.maxDate && self2.config.maxDate < self2.now ? self2.config.maxDate : self2.now);
    var oldYear = self2.currentYear;
    var oldMonth = self2.currentMonth;
    try {
      if (jumpTo !== void 0) {
        self2.currentYear = jumpTo.getFullYear();
        self2.currentMonth = jumpTo.getMonth();
      }
    } catch (e) {
      e.message = "Invalid date supplied: " + jumpTo;
      self2.config.errorHandler(e);
    }
    if (triggerChange2 && self2.currentYear !== oldYear) {
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    if (triggerChange2 && (self2.currentYear !== oldYear || self2.currentMonth !== oldMonth)) {
      triggerEvent("onMonthChange");
    }
    self2.redraw();
  }
  function timeIncrement(e) {
    var eventTarget = getEventTarget(e);
    if (~eventTarget.className.indexOf("arrow"))
      incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
  }
  function incrementNumInput(e, delta, inputElem) {
    var target = e && getEventTarget(e);
    var input = inputElem || target && target.parentNode && target.parentNode.firstChild;
    var event = createEvent("increment");
    event.delta = delta;
    input && input.dispatchEvent(event);
  }
  function build() {
    var fragment = window.document.createDocumentFragment();
    self2.calendarContainer = createElement("div", "flatpickr-calendar");
    self2.calendarContainer.tabIndex = -1;
    if (!self2.config.noCalendar) {
      fragment.appendChild(buildMonthNav());
      self2.innerContainer = createElement("div", "flatpickr-innerContainer");
      if (self2.config.weekNumbers) {
        var _a2 = buildWeeks(), weekWrapper = _a2.weekWrapper, weekNumbers = _a2.weekNumbers;
        self2.innerContainer.appendChild(weekWrapper);
        self2.weekNumbers = weekNumbers;
        self2.weekWrapper = weekWrapper;
      }
      self2.rContainer = createElement("div", "flatpickr-rContainer");
      self2.rContainer.appendChild(buildWeekdays());
      if (!self2.daysContainer) {
        self2.daysContainer = createElement("div", "flatpickr-days");
        self2.daysContainer.tabIndex = -1;
      }
      buildDays();
      self2.rContainer.appendChild(self2.daysContainer);
      self2.innerContainer.appendChild(self2.rContainer);
      fragment.appendChild(self2.innerContainer);
    }
    if (self2.config.enableTime) {
      fragment.appendChild(buildTime());
    }
    toggleClass(self2.calendarContainer, "rangeMode", self2.config.mode === "range");
    toggleClass(self2.calendarContainer, "animate", self2.config.animate === true);
    toggleClass(self2.calendarContainer, "multiMonth", self2.config.showMonths > 1);
    self2.calendarContainer.appendChild(fragment);
    var customAppend = self2.config.appendTo !== void 0 && self2.config.appendTo.nodeType !== void 0;
    if (self2.config.inline || self2.config.static) {
      self2.calendarContainer.classList.add(self2.config.inline ? "inline" : "static");
      if (self2.config.inline) {
        if (!customAppend && self2.element.parentNode)
          self2.element.parentNode.insertBefore(self2.calendarContainer, self2._input.nextSibling);
        else if (self2.config.appendTo !== void 0)
          self2.config.appendTo.appendChild(self2.calendarContainer);
      }
      if (self2.config.static) {
        var wrapper = createElement("div", "flatpickr-wrapper");
        if (self2.element.parentNode)
          self2.element.parentNode.insertBefore(wrapper, self2.element);
        wrapper.appendChild(self2.element);
        if (self2.altInput)
          wrapper.appendChild(self2.altInput);
        wrapper.appendChild(self2.calendarContainer);
      }
    }
    if (!self2.config.static && !self2.config.inline)
      (self2.config.appendTo !== void 0 ? self2.config.appendTo : window.document.body).appendChild(self2.calendarContainer);
  }
  function createDay(className, date, _dayNumber, i2) {
    var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", className, date.getDate().toString());
    dayElement.dateObj = date;
    dayElement.$i = i2;
    dayElement.setAttribute("aria-label", self2.formatDate(date, self2.config.ariaDateFormat));
    if (className.indexOf("hidden") === -1 && compareDates(date, self2.now) === 0) {
      self2.todayDateElem = dayElement;
      dayElement.classList.add("today");
      dayElement.setAttribute("aria-current", "date");
    }
    if (dateIsEnabled) {
      dayElement.tabIndex = -1;
      if (isDateSelected(date)) {
        dayElement.classList.add("selected");
        self2.selectedDateElem = dayElement;
        if (self2.config.mode === "range") {
          toggleClass(dayElement, "startRange", self2.selectedDates[0] && compareDates(date, self2.selectedDates[0], true) === 0);
          toggleClass(dayElement, "endRange", self2.selectedDates[1] && compareDates(date, self2.selectedDates[1], true) === 0);
          if (className === "nextMonthDay")
            dayElement.classList.add("inRange");
        }
      }
    } else {
      dayElement.classList.add("flatpickr-disabled");
    }
    if (self2.config.mode === "range") {
      if (isDateInRange(date) && !isDateSelected(date))
        dayElement.classList.add("inRange");
    }
    if (self2.weekNumbers && self2.config.showMonths === 1 && className !== "prevMonthDay" && i2 % 7 === 6) {
      self2.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self2.config.getWeek(date) + "</span>");
    }
    triggerEvent("onDayCreate", dayElement);
    return dayElement;
  }
  function focusOnDayElem(targetNode) {
    targetNode.focus();
    if (self2.config.mode === "range")
      onMouseOver(targetNode);
  }
  function getFirstAvailableDay(delta) {
    var startMonth = delta > 0 ? 0 : self2.config.showMonths - 1;
    var endMonth = delta > 0 ? self2.config.showMonths : -1;
    for (var m = startMonth; m != endMonth; m += delta) {
      var month = self2.daysContainer.children[m];
      var startIndex = delta > 0 ? 0 : month.children.length - 1;
      var endIndex = delta > 0 ? month.children.length : -1;
      for (var i2 = startIndex; i2 != endIndex; i2 += delta) {
        var c = month.children[i2];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj))
          return c;
      }
    }
    return void 0;
  }
  function getNextAvailableDay(current, delta) {
    var givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self2.currentMonth;
    var endMonth = delta > 0 ? self2.config.showMonths : -1;
    var loopDelta = delta > 0 ? 1 : -1;
    for (var m = givenMonth - self2.currentMonth; m != endMonth; m += loopDelta) {
      var month = self2.daysContainer.children[m];
      var startIndex = givenMonth - self2.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
      var numMonthDays = month.children.length;
      for (var i2 = startIndex; i2 >= 0 && i2 < numMonthDays && i2 != (delta > 0 ? numMonthDays : -1); i2 += loopDelta) {
        var c = month.children[i2];
        if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i2) >= Math.abs(delta))
          return focusOnDayElem(c);
      }
    }
    self2.changeMonth(loopDelta);
    focusOnDay(getFirstAvailableDay(loopDelta), 0);
    return void 0;
  }
  function focusOnDay(current, offset) {
    var activeElement = getClosestActiveElement();
    var dayFocused = isInView(activeElement || document.body);
    var startElem = current !== void 0 ? current : dayFocused ? activeElement : self2.selectedDateElem !== void 0 && isInView(self2.selectedDateElem) ? self2.selectedDateElem : self2.todayDateElem !== void 0 && isInView(self2.todayDateElem) ? self2.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
    if (startElem === void 0) {
      self2._input.focus();
    } else if (!dayFocused) {
      focusOnDayElem(startElem);
    } else {
      getNextAvailableDay(startElem, offset);
    }
  }
  function buildMonthDays(year, month) {
    var firstOfMonth = (new Date(year, month, 1).getDay() - self2.l10n.firstDayOfWeek + 7) % 7;
    var prevMonthDays = self2.utils.getDaysInMonth((month - 1 + 12) % 12, year);
    var daysInMonth = self2.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self2.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
    var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
    for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
    }
    for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day", new Date(year, month, dayNumber), dayNumber, dayIndex));
    }
    for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self2.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++) {
      days.appendChild(createDay("flatpickr-day " + nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
    }
    var dayContainer = createElement("div", "dayContainer");
    dayContainer.appendChild(days);
    return dayContainer;
  }
  function buildDays() {
    if (self2.daysContainer === void 0) {
      return;
    }
    clearNode(self2.daysContainer);
    if (self2.weekNumbers)
      clearNode(self2.weekNumbers);
    var frag = document.createDocumentFragment();
    for (var i2 = 0; i2 < self2.config.showMonths; i2++) {
      var d = new Date(self2.currentYear, self2.currentMonth, 1);
      d.setMonth(self2.currentMonth + i2);
      frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
    }
    self2.daysContainer.appendChild(frag);
    self2.days = self2.daysContainer.firstChild;
    if (self2.config.mode === "range" && self2.selectedDates.length === 1) {
      onMouseOver();
    }
  }
  function buildMonthSwitch() {
    if (self2.config.showMonths > 1 || self2.config.monthSelectorType !== "dropdown")
      return;
    var shouldBuildMonth = function(month2) {
      if (self2.config.minDate !== void 0 && self2.currentYear === self2.config.minDate.getFullYear() && month2 < self2.config.minDate.getMonth()) {
        return false;
      }
      return !(self2.config.maxDate !== void 0 && self2.currentYear === self2.config.maxDate.getFullYear() && month2 > self2.config.maxDate.getMonth());
    };
    self2.monthsDropdownContainer.tabIndex = -1;
    self2.monthsDropdownContainer.innerHTML = "";
    for (var i2 = 0; i2 < 12; i2++) {
      if (!shouldBuildMonth(i2))
        continue;
      var month = createElement("option", "flatpickr-monthDropdown-month");
      month.value = new Date(self2.currentYear, i2).getMonth().toString();
      month.textContent = monthToStr(i2, self2.config.shorthandCurrentMonth, self2.l10n);
      month.tabIndex = -1;
      if (self2.currentMonth === i2) {
        month.selected = true;
      }
      self2.monthsDropdownContainer.appendChild(month);
    }
  }
  function buildMonth() {
    var container = createElement("div", "flatpickr-month");
    var monthNavFragment = window.document.createDocumentFragment();
    var monthElement;
    if (self2.config.showMonths > 1 || self2.config.monthSelectorType === "static") {
      monthElement = createElement("span", "cur-month");
    } else {
      self2.monthsDropdownContainer = createElement("select", "flatpickr-monthDropdown-months");
      self2.monthsDropdownContainer.setAttribute("aria-label", self2.l10n.monthAriaLabel);
      bind(self2.monthsDropdownContainer, "change", function(e) {
        var target = getEventTarget(e);
        var selectedMonth = parseInt(target.value, 10);
        self2.changeMonth(selectedMonth - self2.currentMonth);
        triggerEvent("onMonthChange");
      });
      buildMonthSwitch();
      monthElement = self2.monthsDropdownContainer;
    }
    var yearInput = createNumberInput("cur-year", { tabindex: "-1" });
    var yearElement = yearInput.getElementsByTagName("input")[0];
    yearElement.setAttribute("aria-label", self2.l10n.yearAriaLabel);
    if (self2.config.minDate) {
      yearElement.setAttribute("min", self2.config.minDate.getFullYear().toString());
    }
    if (self2.config.maxDate) {
      yearElement.setAttribute("max", self2.config.maxDate.getFullYear().toString());
      yearElement.disabled = !!self2.config.minDate && self2.config.minDate.getFullYear() === self2.config.maxDate.getFullYear();
    }
    var currentMonth = createElement("div", "flatpickr-current-month");
    currentMonth.appendChild(monthElement);
    currentMonth.appendChild(yearInput);
    monthNavFragment.appendChild(currentMonth);
    container.appendChild(monthNavFragment);
    return {
      container,
      yearElement,
      monthElement
    };
  }
  function buildMonths() {
    clearNode(self2.monthNav);
    self2.monthNav.appendChild(self2.prevMonthNav);
    if (self2.config.showMonths) {
      self2.yearElements = [];
      self2.monthElements = [];
    }
    for (var m = self2.config.showMonths; m--; ) {
      var month = buildMonth();
      self2.yearElements.push(month.yearElement);
      self2.monthElements.push(month.monthElement);
      self2.monthNav.appendChild(month.container);
    }
    self2.monthNav.appendChild(self2.nextMonthNav);
  }
  function buildMonthNav() {
    self2.monthNav = createElement("div", "flatpickr-months");
    self2.yearElements = [];
    self2.monthElements = [];
    self2.prevMonthNav = createElement("span", "flatpickr-prev-month");
    self2.prevMonthNav.innerHTML = self2.config.prevArrow;
    self2.nextMonthNav = createElement("span", "flatpickr-next-month");
    self2.nextMonthNav.innerHTML = self2.config.nextArrow;
    buildMonths();
    Object.defineProperty(self2, "_hidePrevMonthArrow", {
      get: function() {
        return self2.__hidePrevMonthArrow;
      },
      set: function(bool) {
        if (self2.__hidePrevMonthArrow !== bool) {
          toggleClass(self2.prevMonthNav, "flatpickr-disabled", bool);
          self2.__hidePrevMonthArrow = bool;
        }
      }
    });
    Object.defineProperty(self2, "_hideNextMonthArrow", {
      get: function() {
        return self2.__hideNextMonthArrow;
      },
      set: function(bool) {
        if (self2.__hideNextMonthArrow !== bool) {
          toggleClass(self2.nextMonthNav, "flatpickr-disabled", bool);
          self2.__hideNextMonthArrow = bool;
        }
      }
    });
    self2.currentYearElement = self2.yearElements[0];
    updateNavigationCurrentMonth();
    return self2.monthNav;
  }
  function buildTime() {
    self2.calendarContainer.classList.add("hasTime");
    if (self2.config.noCalendar)
      self2.calendarContainer.classList.add("noCalendar");
    var defaults2 = getDefaultHours(self2.config);
    self2.timeContainer = createElement("div", "flatpickr-time");
    self2.timeContainer.tabIndex = -1;
    var separator = createElement("span", "flatpickr-time-separator", ":");
    var hourInput = createNumberInput("flatpickr-hour", {
      "aria-label": self2.l10n.hourAriaLabel
    });
    self2.hourElement = hourInput.getElementsByTagName("input")[0];
    var minuteInput = createNumberInput("flatpickr-minute", {
      "aria-label": self2.l10n.minuteAriaLabel
    });
    self2.minuteElement = minuteInput.getElementsByTagName("input")[0];
    self2.hourElement.tabIndex = self2.minuteElement.tabIndex = -1;
    self2.hourElement.value = pad(self2.latestSelectedDateObj ? self2.latestSelectedDateObj.getHours() : self2.config.time_24hr ? defaults2.hours : military2ampm(defaults2.hours));
    self2.minuteElement.value = pad(self2.latestSelectedDateObj ? self2.latestSelectedDateObj.getMinutes() : defaults2.minutes);
    self2.hourElement.setAttribute("step", self2.config.hourIncrement.toString());
    self2.minuteElement.setAttribute("step", self2.config.minuteIncrement.toString());
    self2.hourElement.setAttribute("min", self2.config.time_24hr ? "0" : "1");
    self2.hourElement.setAttribute("max", self2.config.time_24hr ? "23" : "12");
    self2.hourElement.setAttribute("maxlength", "2");
    self2.minuteElement.setAttribute("min", "0");
    self2.minuteElement.setAttribute("max", "59");
    self2.minuteElement.setAttribute("maxlength", "2");
    self2.timeContainer.appendChild(hourInput);
    self2.timeContainer.appendChild(separator);
    self2.timeContainer.appendChild(minuteInput);
    if (self2.config.time_24hr)
      self2.timeContainer.classList.add("time24hr");
    if (self2.config.enableSeconds) {
      self2.timeContainer.classList.add("hasSeconds");
      var secondInput = createNumberInput("flatpickr-second");
      self2.secondElement = secondInput.getElementsByTagName("input")[0];
      self2.secondElement.value = pad(self2.latestSelectedDateObj ? self2.latestSelectedDateObj.getSeconds() : defaults2.seconds);
      self2.secondElement.setAttribute("step", self2.minuteElement.getAttribute("step"));
      self2.secondElement.setAttribute("min", "0");
      self2.secondElement.setAttribute("max", "59");
      self2.secondElement.setAttribute("maxlength", "2");
      self2.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
      self2.timeContainer.appendChild(secondInput);
    }
    if (!self2.config.time_24hr) {
      self2.amPM = createElement("span", "flatpickr-am-pm", self2.l10n.amPM[int((self2.latestSelectedDateObj ? self2.hourElement.value : self2.config.defaultHour) > 11)]);
      self2.amPM.title = self2.l10n.toggleTitle;
      self2.amPM.tabIndex = -1;
      self2.timeContainer.appendChild(self2.amPM);
    }
    return self2.timeContainer;
  }
  function buildWeekdays() {
    if (!self2.weekdayContainer)
      self2.weekdayContainer = createElement("div", "flatpickr-weekdays");
    else
      clearNode(self2.weekdayContainer);
    for (var i2 = self2.config.showMonths; i2--; ) {
      var container = createElement("div", "flatpickr-weekdaycontainer");
      self2.weekdayContainer.appendChild(container);
    }
    updateWeekdays();
    return self2.weekdayContainer;
  }
  function updateWeekdays() {
    if (!self2.weekdayContainer) {
      return;
    }
    var firstDayOfWeek = self2.l10n.firstDayOfWeek;
    var weekdays = __spreadArrays(self2.l10n.weekdays.shorthand);
    if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
      weekdays = __spreadArrays(weekdays.splice(firstDayOfWeek, weekdays.length), weekdays.splice(0, firstDayOfWeek));
    }
    for (var i2 = self2.config.showMonths; i2--; ) {
      self2.weekdayContainer.children[i2].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + weekdays.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      ";
    }
  }
  function buildWeeks() {
    self2.calendarContainer.classList.add("hasWeeks");
    var weekWrapper = createElement("div", "flatpickr-weekwrapper");
    weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self2.l10n.weekAbbreviation));
    var weekNumbers = createElement("div", "flatpickr-weeks");
    weekWrapper.appendChild(weekNumbers);
    return {
      weekWrapper,
      weekNumbers
    };
  }
  function changeMonth(value, isOffset) {
    if (isOffset === void 0) {
      isOffset = true;
    }
    var delta = isOffset ? value : value - self2.currentMonth;
    if (delta < 0 && self2._hidePrevMonthArrow === true || delta > 0 && self2._hideNextMonthArrow === true)
      return;
    self2.currentMonth += delta;
    if (self2.currentMonth < 0 || self2.currentMonth > 11) {
      self2.currentYear += self2.currentMonth > 11 ? 1 : -1;
      self2.currentMonth = (self2.currentMonth + 12) % 12;
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
    buildDays();
    triggerEvent("onMonthChange");
    updateNavigationCurrentMonth();
  }
  function clear(triggerChangeEvent, toInitial) {
    if (triggerChangeEvent === void 0) {
      triggerChangeEvent = true;
    }
    if (toInitial === void 0) {
      toInitial = true;
    }
    self2.input.value = "";
    if (self2.altInput !== void 0)
      self2.altInput.value = "";
    if (self2.mobileInput !== void 0)
      self2.mobileInput.value = "";
    self2.selectedDates = [];
    self2.latestSelectedDateObj = void 0;
    if (toInitial === true) {
      self2.currentYear = self2._initialDate.getFullYear();
      self2.currentMonth = self2._initialDate.getMonth();
    }
    if (self2.config.enableTime === true) {
      var _a2 = getDefaultHours(self2.config), hours = _a2.hours, minutes = _a2.minutes, seconds = _a2.seconds;
      setHours(hours, minutes, seconds);
    }
    self2.redraw();
    if (triggerChangeEvent)
      triggerEvent("onChange");
  }
  function close() {
    self2.isOpen = false;
    if (!self2.isMobile) {
      if (self2.calendarContainer !== void 0) {
        self2.calendarContainer.classList.remove("open");
      }
      if (self2._input !== void 0) {
        self2._input.classList.remove("active");
      }
    }
    triggerEvent("onClose");
  }
  function destroy() {
    if (self2.config !== void 0)
      triggerEvent("onDestroy");
    for (var i2 = self2._handlers.length; i2--; ) {
      self2._handlers[i2].remove();
    }
    self2._handlers = [];
    if (self2.mobileInput) {
      if (self2.mobileInput.parentNode)
        self2.mobileInput.parentNode.removeChild(self2.mobileInput);
      self2.mobileInput = void 0;
    } else if (self2.calendarContainer && self2.calendarContainer.parentNode) {
      if (self2.config.static && self2.calendarContainer.parentNode) {
        var wrapper = self2.calendarContainer.parentNode;
        wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
        if (wrapper.parentNode) {
          while (wrapper.firstChild)
            wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
          wrapper.parentNode.removeChild(wrapper);
        }
      } else
        self2.calendarContainer.parentNode.removeChild(self2.calendarContainer);
    }
    if (self2.altInput) {
      self2.input.type = "text";
      if (self2.altInput.parentNode)
        self2.altInput.parentNode.removeChild(self2.altInput);
      delete self2.altInput;
    }
    if (self2.input) {
      self2.input.type = self2.input._type;
      self2.input.classList.remove("flatpickr-input");
      self2.input.removeAttribute("readonly");
    }
    [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(k) {
      try {
        delete self2[k];
      } catch (_) {
      }
    });
  }
  function isCalendarElem(elem) {
    return self2.calendarContainer.contains(elem);
  }
  function documentClick(e) {
    if (self2.isOpen && !self2.config.inline) {
      var eventTarget_1 = getEventTarget(e);
      var isCalendarElement = isCalendarElem(eventTarget_1);
      var isInput = eventTarget_1 === self2.input || eventTarget_1 === self2.altInput || self2.element.contains(eventTarget_1) || e.path && e.path.indexOf && (~e.path.indexOf(self2.input) || ~e.path.indexOf(self2.altInput));
      var lostFocus = !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
      var isIgnored = !self2.config.ignoredFocusElements.some(function(elem) {
        return elem.contains(eventTarget_1);
      });
      if (lostFocus && isIgnored) {
        if (self2.config.allowInput) {
          self2.setDate(self2._input.value, false, self2.config.altInput ? self2.config.altFormat : self2.config.dateFormat);
        }
        if (self2.timeContainer !== void 0 && self2.minuteElement !== void 0 && self2.hourElement !== void 0 && self2.input.value !== "" && self2.input.value !== void 0) {
          updateTime();
        }
        self2.close();
        if (self2.config && self2.config.mode === "range" && self2.selectedDates.length === 1)
          self2.clear(false);
      }
    }
  }
  function changeYear(newYear) {
    if (!newYear || self2.config.minDate && newYear < self2.config.minDate.getFullYear() || self2.config.maxDate && newYear > self2.config.maxDate.getFullYear())
      return;
    var newYearNum = newYear, isNewYear = self2.currentYear !== newYearNum;
    self2.currentYear = newYearNum || self2.currentYear;
    if (self2.config.maxDate && self2.currentYear === self2.config.maxDate.getFullYear()) {
      self2.currentMonth = Math.min(self2.config.maxDate.getMonth(), self2.currentMonth);
    } else if (self2.config.minDate && self2.currentYear === self2.config.minDate.getFullYear()) {
      self2.currentMonth = Math.max(self2.config.minDate.getMonth(), self2.currentMonth);
    }
    if (isNewYear) {
      self2.redraw();
      triggerEvent("onYearChange");
      buildMonthSwitch();
    }
  }
  function isEnabled(date, timeless) {
    var _a2;
    if (timeless === void 0) {
      timeless = true;
    }
    var dateToCheck = self2.parseDate(date, void 0, timeless);
    if (self2.config.minDate && dateToCheck && compareDates(dateToCheck, self2.config.minDate, timeless !== void 0 ? timeless : !self2.minDateHasTime) < 0 || self2.config.maxDate && dateToCheck && compareDates(dateToCheck, self2.config.maxDate, timeless !== void 0 ? timeless : !self2.maxDateHasTime) > 0)
      return false;
    if (!self2.config.enable && self2.config.disable.length === 0)
      return true;
    if (dateToCheck === void 0)
      return false;
    var bool = !!self2.config.enable, array = (_a2 = self2.config.enable) !== null && _a2 !== void 0 ? _a2 : self2.config.disable;
    for (var i2 = 0, d = void 0; i2 < array.length; i2++) {
      d = array[i2];
      if (typeof d === "function" && d(dateToCheck))
        return bool;
      else if (d instanceof Date && dateToCheck !== void 0 && d.getTime() === dateToCheck.getTime())
        return bool;
      else if (typeof d === "string") {
        var parsed = self2.parseDate(d, void 0, true);
        return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
      } else if (typeof d === "object" && dateToCheck !== void 0 && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime())
        return bool;
    }
    return !bool;
  }
  function isInView(elem) {
    if (self2.daysContainer !== void 0)
      return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self2.daysContainer.contains(elem);
    return false;
  }
  function onBlur(e) {
    var isInput = e.target === self2._input;
    var valueChanged = self2._input.value.trimEnd() !== getDateStr();
    if (isInput && valueChanged && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) {
      self2.setDate(self2._input.value, true, e.target === self2.altInput ? self2.config.altFormat : self2.config.dateFormat);
    }
  }
  function onKeyDown(e) {
    var eventTarget = getEventTarget(e);
    var isInput = self2.config.wrap ? element.contains(eventTarget) : eventTarget === self2._input;
    var allowInput = self2.config.allowInput;
    var allowKeydown = self2.isOpen && (!allowInput || !isInput);
    var allowInlineKeydown = self2.config.inline && isInput && !allowInput;
    if (e.keyCode === 13 && isInput) {
      if (allowInput) {
        self2.setDate(self2._input.value, true, eventTarget === self2.altInput ? self2.config.altFormat : self2.config.dateFormat);
        self2.close();
        return eventTarget.blur();
      } else {
        self2.open();
      }
    } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
      var isTimeObj = !!self2.timeContainer && self2.timeContainer.contains(eventTarget);
      switch (e.keyCode) {
        case 13:
          if (isTimeObj) {
            e.preventDefault();
            updateTime();
            focusAndClose();
          } else
            selectDate(e);
          break;
        case 27:
          e.preventDefault();
          focusAndClose();
          break;
        case 8:
        case 46:
          if (isInput && !self2.config.allowInput) {
            e.preventDefault();
            self2.clear();
          }
          break;
        case 37:
        case 39:
          if (!isTimeObj && !isInput) {
            e.preventDefault();
            var activeElement = getClosestActiveElement();
            if (self2.daysContainer !== void 0 && (allowInput === false || activeElement && isInView(activeElement))) {
              var delta_1 = e.keyCode === 39 ? 1 : -1;
              if (!e.ctrlKey)
                focusOnDay(void 0, delta_1);
              else {
                e.stopPropagation();
                changeMonth(delta_1);
                focusOnDay(getFirstAvailableDay(1), 0);
              }
            }
          } else if (self2.hourElement)
            self2.hourElement.focus();
          break;
        case 38:
        case 40:
          e.preventDefault();
          var delta = e.keyCode === 40 ? 1 : -1;
          if (self2.daysContainer && eventTarget.$i !== void 0 || eventTarget === self2.input || eventTarget === self2.altInput) {
            if (e.ctrlKey) {
              e.stopPropagation();
              changeYear(self2.currentYear - delta);
              focusOnDay(getFirstAvailableDay(1), 0);
            } else if (!isTimeObj)
              focusOnDay(void 0, delta * 7);
          } else if (eventTarget === self2.currentYearElement) {
            changeYear(self2.currentYear - delta);
          } else if (self2.config.enableTime) {
            if (!isTimeObj && self2.hourElement)
              self2.hourElement.focus();
            updateTime(e);
            self2._debouncedChange();
          }
          break;
        case 9:
          if (isTimeObj) {
            var elems = [
              self2.hourElement,
              self2.minuteElement,
              self2.secondElement,
              self2.amPM
            ].concat(self2.pluginElements).filter(function(x2) {
              return x2;
            });
            var i2 = elems.indexOf(eventTarget);
            if (i2 !== -1) {
              var target = elems[i2 + (e.shiftKey ? -1 : 1)];
              e.preventDefault();
              (target || self2._input).focus();
            }
          } else if (!self2.config.noCalendar && self2.daysContainer && self2.daysContainer.contains(eventTarget) && e.shiftKey) {
            e.preventDefault();
            self2._input.focus();
          }
          break;
        default:
          break;
      }
    }
    if (self2.amPM !== void 0 && eventTarget === self2.amPM) {
      switch (e.key) {
        case self2.l10n.amPM[0].charAt(0):
        case self2.l10n.amPM[0].charAt(0).toLowerCase():
          self2.amPM.textContent = self2.l10n.amPM[0];
          setHoursFromInputs();
          updateValue();
          break;
        case self2.l10n.amPM[1].charAt(0):
        case self2.l10n.amPM[1].charAt(0).toLowerCase():
          self2.amPM.textContent = self2.l10n.amPM[1];
          setHoursFromInputs();
          updateValue();
          break;
      }
    }
    if (isInput || isCalendarElem(eventTarget)) {
      triggerEvent("onKeyDown", e);
    }
  }
  function onMouseOver(elem, cellClass) {
    if (cellClass === void 0) {
      cellClass = "flatpickr-day";
    }
    if (self2.selectedDates.length !== 1 || elem && (!elem.classList.contains(cellClass) || elem.classList.contains("flatpickr-disabled")))
      return;
    var hoverDate = elem ? elem.dateObj.getTime() : self2.days.firstElementChild.dateObj.getTime(), initialDate = self2.parseDate(self2.selectedDates[0], void 0, true).getTime(), rangeStartDate = Math.min(hoverDate, self2.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self2.selectedDates[0].getTime());
    var containsDisabled = false;
    var minRange = 0, maxRange = 0;
    for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
      if (!isEnabled(new Date(t), true)) {
        containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
        if (t < initialDate && (!minRange || t > minRange))
          minRange = t;
        else if (t > initialDate && (!maxRange || t < maxRange))
          maxRange = t;
      }
    }
    var hoverableCells = Array.from(self2.rContainer.querySelectorAll("*:nth-child(-n+" + self2.config.showMonths + ") > ." + cellClass));
    hoverableCells.forEach(function(dayElem) {
      var date = dayElem.dateObj;
      var timestamp = date.getTime();
      var outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
      if (outOfRange) {
        dayElem.classList.add("notAllowed");
        ["inRange", "startRange", "endRange"].forEach(function(c) {
          dayElem.classList.remove(c);
        });
        return;
      } else if (containsDisabled && !outOfRange)
        return;
      ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(c) {
        dayElem.classList.remove(c);
      });
      if (elem !== void 0) {
        elem.classList.add(hoverDate <= self2.selectedDates[0].getTime() ? "startRange" : "endRange");
        if (initialDate < hoverDate && timestamp === initialDate)
          dayElem.classList.add("startRange");
        else if (initialDate > hoverDate && timestamp === initialDate)
          dayElem.classList.add("endRange");
        if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && isBetween(timestamp, initialDate, hoverDate))
          dayElem.classList.add("inRange");
      }
    });
  }
  function onResize() {
    if (self2.isOpen && !self2.config.static && !self2.config.inline)
      positionCalendar();
  }
  function open(e, positionElement) {
    if (positionElement === void 0) {
      positionElement = self2._positionElement;
    }
    if (self2.isMobile === true) {
      if (e) {
        e.preventDefault();
        var eventTarget = getEventTarget(e);
        if (eventTarget) {
          eventTarget.blur();
        }
      }
      if (self2.mobileInput !== void 0) {
        self2.mobileInput.focus();
        self2.mobileInput.click();
      }
      triggerEvent("onOpen");
      return;
    } else if (self2._input.disabled || self2.config.inline) {
      return;
    }
    var wasOpen = self2.isOpen;
    self2.isOpen = true;
    if (!wasOpen) {
      self2.calendarContainer.classList.add("open");
      self2._input.classList.add("active");
      triggerEvent("onOpen");
      positionCalendar(positionElement);
    }
    if (self2.config.enableTime === true && self2.config.noCalendar === true) {
      if (self2.config.allowInput === false && (e === void 0 || !self2.timeContainer.contains(e.relatedTarget))) {
        setTimeout(function() {
          return self2.hourElement.select();
        }, 50);
      }
    }
  }
  function minMaxDateSetter(type) {
    return function(date) {
      var dateObj = self2.config["_" + type + "Date"] = self2.parseDate(date, self2.config.dateFormat);
      var inverseDateObj = self2.config["_" + (type === "min" ? "max" : "min") + "Date"];
      if (dateObj !== void 0) {
        self2[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
      }
      if (self2.selectedDates) {
        self2.selectedDates = self2.selectedDates.filter(function(d) {
          return isEnabled(d);
        });
        if (!self2.selectedDates.length && type === "min")
          setHoursFromDate(dateObj);
        updateValue();
      }
      if (self2.daysContainer) {
        redraw();
        if (dateObj !== void 0)
          self2.currentYearElement[type] = dateObj.getFullYear().toString();
        else
          self2.currentYearElement.removeAttribute(type);
        self2.currentYearElement.disabled = !!inverseDateObj && dateObj !== void 0 && inverseDateObj.getFullYear() === dateObj.getFullYear();
      }
    };
  }
  function parseConfig() {
    var boolOpts = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ];
    var userConfig = __assign(__assign({}, JSON.parse(JSON.stringify(element.dataset || {}))), instanceConfig);
    var formats2 = {};
    self2.config.parseDate = userConfig.parseDate;
    self2.config.formatDate = userConfig.formatDate;
    Object.defineProperty(self2.config, "enable", {
      get: function() {
        return self2.config._enable;
      },
      set: function(dates) {
        self2.config._enable = parseDateRules(dates);
      }
    });
    Object.defineProperty(self2.config, "disable", {
      get: function() {
        return self2.config._disable;
      },
      set: function(dates) {
        self2.config._disable = parseDateRules(dates);
      }
    });
    var timeMode = userConfig.mode === "time";
    if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
      var defaultDateFormat = flatpickr.defaultConfig.dateFormat || defaults.dateFormat;
      formats2.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
    }
    if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
      var defaultAltFormat = flatpickr.defaultConfig.altFormat || defaults.altFormat;
      formats2.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(self2.config, "minDate", {
      get: function() {
        return self2.config._minDate;
      },
      set: minMaxDateSetter("min")
    });
    Object.defineProperty(self2.config, "maxDate", {
      get: function() {
        return self2.config._maxDate;
      },
      set: minMaxDateSetter("max")
    });
    var minMaxTimeSetter = function(type) {
      return function(val) {
        self2.config[type === "min" ? "_minTime" : "_maxTime"] = self2.parseDate(val, "H:i:S");
      };
    };
    Object.defineProperty(self2.config, "minTime", {
      get: function() {
        return self2.config._minTime;
      },
      set: minMaxTimeSetter("min")
    });
    Object.defineProperty(self2.config, "maxTime", {
      get: function() {
        return self2.config._maxTime;
      },
      set: minMaxTimeSetter("max")
    });
    if (userConfig.mode === "time") {
      self2.config.noCalendar = true;
      self2.config.enableTime = true;
    }
    Object.assign(self2.config, formats2, userConfig);
    for (var i2 = 0; i2 < boolOpts.length; i2++)
      self2.config[boolOpts[i2]] = self2.config[boolOpts[i2]] === true || self2.config[boolOpts[i2]] === "true";
    HOOKS.filter(function(hook) {
      return self2.config[hook] !== void 0;
    }).forEach(function(hook) {
      self2.config[hook] = arrayify(self2.config[hook] || []).map(bindToInstance);
    });
    self2.isMobile = !self2.config.disableMobile && !self2.config.inline && self2.config.mode === "single" && !self2.config.disable.length && !self2.config.enable && !self2.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var i2 = 0; i2 < self2.config.plugins.length; i2++) {
      var pluginConf = self2.config.plugins[i2](self2) || {};
      for (var key in pluginConf) {
        if (HOOKS.indexOf(key) > -1) {
          self2.config[key] = arrayify(pluginConf[key]).map(bindToInstance).concat(self2.config[key]);
        } else if (typeof userConfig[key] === "undefined")
          self2.config[key] = pluginConf[key];
      }
    }
    if (!userConfig.altInputClass) {
      self2.config.altInputClass = getInputElem().className + " " + self2.config.altInputClass;
    }
    triggerEvent("onParseConfig");
  }
  function getInputElem() {
    return self2.config.wrap ? element.querySelector("[data-input]") : element;
  }
  function setupLocale() {
    if (typeof self2.config.locale !== "object" && typeof flatpickr.l10ns[self2.config.locale] === "undefined")
      self2.config.errorHandler(new Error("flatpickr: invalid locale " + self2.config.locale));
    self2.l10n = __assign(__assign({}, flatpickr.l10ns.default), typeof self2.config.locale === "object" ? self2.config.locale : self2.config.locale !== "default" ? flatpickr.l10ns[self2.config.locale] : void 0);
    tokenRegex.D = "(" + self2.l10n.weekdays.shorthand.join("|") + ")";
    tokenRegex.l = "(" + self2.l10n.weekdays.longhand.join("|") + ")";
    tokenRegex.M = "(" + self2.l10n.months.shorthand.join("|") + ")";
    tokenRegex.F = "(" + self2.l10n.months.longhand.join("|") + ")";
    tokenRegex.K = "(" + self2.l10n.amPM[0] + "|" + self2.l10n.amPM[1] + "|" + self2.l10n.amPM[0].toLowerCase() + "|" + self2.l10n.amPM[1].toLowerCase() + ")";
    var userConfig = __assign(__assign({}, instanceConfig), JSON.parse(JSON.stringify(element.dataset || {})));
    if (userConfig.time_24hr === void 0 && flatpickr.defaultConfig.time_24hr === void 0) {
      self2.config.time_24hr = self2.l10n.time_24hr;
    }
    self2.formatDate = createDateFormatter(self2);
    self2.parseDate = createDateParser({ config: self2.config, l10n: self2.l10n });
  }
  function positionCalendar(customPositionElement) {
    if (typeof self2.config.position === "function") {
      return void self2.config.position(self2, customPositionElement);
    }
    if (self2.calendarContainer === void 0)
      return;
    triggerEvent("onPreCalendarPosition");
    var positionElement = customPositionElement || self2._positionElement;
    var calendarHeight = Array.prototype.reduce.call(self2.calendarContainer.children, (function(acc, child) {
      return acc + child.offsetHeight;
    }), 0), calendarWidth = self2.calendarContainer.offsetWidth, configPos = self2.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
    var top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
    toggleClass(self2.calendarContainer, "arrowTop", !showOnTop);
    toggleClass(self2.calendarContainer, "arrowBottom", showOnTop);
    if (self2.config.inline)
      return;
    var left = window.pageXOffset + inputBounds.left;
    var isCenter = false;
    var isRight = false;
    if (configPosHorizontal === "center") {
      left -= (calendarWidth - inputBounds.width) / 2;
      isCenter = true;
    } else if (configPosHorizontal === "right") {
      left -= calendarWidth - inputBounds.width;
      isRight = true;
    }
    toggleClass(self2.calendarContainer, "arrowLeft", !isCenter && !isRight);
    toggleClass(self2.calendarContainer, "arrowCenter", isCenter);
    toggleClass(self2.calendarContainer, "arrowRight", isRight);
    var right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
    var rightMost = left + calendarWidth > window.document.body.offsetWidth;
    var centerMost = right + calendarWidth > window.document.body.offsetWidth;
    toggleClass(self2.calendarContainer, "rightMost", rightMost);
    if (self2.config.static)
      return;
    self2.calendarContainer.style.top = top + "px";
    if (!rightMost) {
      self2.calendarContainer.style.left = left + "px";
      self2.calendarContainer.style.right = "auto";
    } else if (!centerMost) {
      self2.calendarContainer.style.left = "auto";
      self2.calendarContainer.style.right = right + "px";
    } else {
      var doc = getDocumentStyleSheet();
      if (doc === void 0)
        return;
      var bodyWidth = window.document.body.offsetWidth;
      var centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
      var centerBefore = ".flatpickr-calendar.centerMost:before";
      var centerAfter = ".flatpickr-calendar.centerMost:after";
      var centerIndex = doc.cssRules.length;
      var centerStyle = "{left:" + inputBounds.left + "px;right:auto;}";
      toggleClass(self2.calendarContainer, "rightMost", false);
      toggleClass(self2.calendarContainer, "centerMost", true);
      doc.insertRule(centerBefore + "," + centerAfter + centerStyle, centerIndex);
      self2.calendarContainer.style.left = centerLeft + "px";
      self2.calendarContainer.style.right = "auto";
    }
  }
  function getDocumentStyleSheet() {
    var editableSheet = null;
    for (var i2 = 0; i2 < document.styleSheets.length; i2++) {
      var sheet = document.styleSheets[i2];
      if (!sheet.cssRules)
        continue;
      try {
        sheet.cssRules;
      } catch (err2) {
        continue;
      }
      editableSheet = sheet;
      break;
    }
    return editableSheet != null ? editableSheet : createStyleSheet();
  }
  function createStyleSheet() {
    var style = document.createElement("style");
    document.head.appendChild(style);
    return style.sheet;
  }
  function redraw() {
    if (self2.config.noCalendar || self2.isMobile)
      return;
    buildMonthSwitch();
    updateNavigationCurrentMonth();
    buildDays();
  }
  function focusAndClose() {
    self2._input.focus();
    if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0) {
      setTimeout(self2.close, 0);
    } else {
      self2.close();
    }
  }
  function selectDate(e) {
    e.preventDefault();
    e.stopPropagation();
    var isSelectable = function(day) {
      return day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed");
    };
    var t = findParent(getEventTarget(e), isSelectable);
    if (t === void 0)
      return;
    var target = t;
    var selectedDate = self2.latestSelectedDateObj = new Date(target.dateObj.getTime());
    var shouldChangeMonth = (selectedDate.getMonth() < self2.currentMonth || selectedDate.getMonth() > self2.currentMonth + self2.config.showMonths - 1) && self2.config.mode !== "range";
    self2.selectedDateElem = target;
    if (self2.config.mode === "single")
      self2.selectedDates = [selectedDate];
    else if (self2.config.mode === "multiple") {
      var selectedIndex = isDateSelected(selectedDate);
      if (selectedIndex)
        self2.selectedDates.splice(parseInt(selectedIndex), 1);
      else
        self2.selectedDates.push(selectedDate);
    } else if (self2.config.mode === "range") {
      if (self2.selectedDates.length === 2) {
        self2.clear(false, false);
      }
      self2.latestSelectedDateObj = selectedDate;
      self2.selectedDates.push(selectedDate);
      if (compareDates(selectedDate, self2.selectedDates[0], true) !== 0)
        self2.selectedDates.sort(function(a, b) {
          return a.getTime() - b.getTime();
        });
    }
    setHoursFromInputs();
    if (shouldChangeMonth) {
      var isNewYear = self2.currentYear !== selectedDate.getFullYear();
      self2.currentYear = selectedDate.getFullYear();
      self2.currentMonth = selectedDate.getMonth();
      if (isNewYear) {
        triggerEvent("onYearChange");
        buildMonthSwitch();
      }
      triggerEvent("onMonthChange");
    }
    updateNavigationCurrentMonth();
    buildDays();
    updateValue();
    if (!shouldChangeMonth && self2.config.mode !== "range" && self2.config.showMonths === 1)
      focusOnDayElem(target);
    else if (self2.selectedDateElem !== void 0 && self2.hourElement === void 0) {
      self2.selectedDateElem && self2.selectedDateElem.focus();
    }
    if (self2.hourElement !== void 0)
      self2.hourElement !== void 0 && self2.hourElement.focus();
    if (self2.config.closeOnSelect) {
      var single = self2.config.mode === "single" && !self2.config.enableTime;
      var range = self2.config.mode === "range" && self2.selectedDates.length === 2 && !self2.config.enableTime;
      if (single || range) {
        focusAndClose();
      }
    }
    triggerChange();
  }
  var CALLBACKS = {
    locale: [setupLocale, updateWeekdays],
    showMonths: [buildMonths, setCalendarWidth, buildWeekdays],
    minDate: [jumpToDate],
    maxDate: [jumpToDate],
    positionElement: [updatePositionElement],
    clickOpens: [
      function() {
        if (self2.config.clickOpens === true) {
          bind(self2._input, "focus", self2.open);
          bind(self2._input, "click", self2.open);
        } else {
          self2._input.removeEventListener("focus", self2.open);
          self2._input.removeEventListener("click", self2.open);
        }
      }
    ]
  };
  function set(option, value) {
    if (option !== null && typeof option === "object") {
      Object.assign(self2.config, option);
      for (var key in option) {
        if (CALLBACKS[key] !== void 0)
          CALLBACKS[key].forEach(function(x2) {
            return x2();
          });
      }
    } else {
      self2.config[option] = value;
      if (CALLBACKS[option] !== void 0)
        CALLBACKS[option].forEach(function(x2) {
          return x2();
        });
      else if (HOOKS.indexOf(option) > -1)
        self2.config[option] = arrayify(value);
    }
    self2.redraw();
    updateValue(true);
  }
  function setSelectedDate(inputDate, format) {
    var dates = [];
    if (inputDate instanceof Array)
      dates = inputDate.map(function(d) {
        return self2.parseDate(d, format);
      });
    else if (inputDate instanceof Date || typeof inputDate === "number")
      dates = [self2.parseDate(inputDate, format)];
    else if (typeof inputDate === "string") {
      switch (self2.config.mode) {
        case "single":
        case "time":
          dates = [self2.parseDate(inputDate, format)];
          break;
        case "multiple":
          dates = inputDate.split(self2.config.conjunction).map(function(date) {
            return self2.parseDate(date, format);
          });
          break;
        case "range":
          dates = inputDate.split(self2.l10n.rangeSeparator).map(function(date) {
            return self2.parseDate(date, format);
          });
          break;
        default:
          break;
      }
    } else
      self2.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(inputDate)));
    self2.selectedDates = self2.config.allowInvalidPreload ? dates : dates.filter(function(d) {
      return d instanceof Date && isEnabled(d, false);
    });
    if (self2.config.mode === "range")
      self2.selectedDates.sort(function(a, b) {
        return a.getTime() - b.getTime();
      });
  }
  function setDate(date, triggerChange2, format) {
    if (triggerChange2 === void 0) {
      triggerChange2 = false;
    }
    if (format === void 0) {
      format = self2.config.dateFormat;
    }
    if (date !== 0 && !date || date instanceof Array && date.length === 0)
      return self2.clear(triggerChange2);
    setSelectedDate(date, format);
    self2.latestSelectedDateObj = self2.selectedDates[self2.selectedDates.length - 1];
    self2.redraw();
    jumpToDate(void 0, triggerChange2);
    setHoursFromDate();
    if (self2.selectedDates.length === 0) {
      self2.clear(false);
    }
    updateValue(triggerChange2);
    if (triggerChange2)
      triggerEvent("onChange");
  }
  function parseDateRules(arr) {
    return arr.slice().map(function(rule) {
      if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) {
        return self2.parseDate(rule, void 0, true);
      } else if (rule && typeof rule === "object" && rule.from && rule.to)
        return {
          from: self2.parseDate(rule.from, void 0),
          to: self2.parseDate(rule.to, void 0)
        };
      return rule;
    }).filter(function(x2) {
      return x2;
    });
  }
  function setupDates() {
    self2.selectedDates = [];
    self2.now = self2.parseDate(self2.config.now) || /* @__PURE__ */ new Date();
    var preloadedDate = self2.config.defaultDate || ((self2.input.nodeName === "INPUT" || self2.input.nodeName === "TEXTAREA") && self2.input.placeholder && self2.input.value === self2.input.placeholder ? null : self2.input.value);
    if (preloadedDate)
      setSelectedDate(preloadedDate, self2.config.dateFormat);
    self2._initialDate = self2.selectedDates.length > 0 ? self2.selectedDates[0] : self2.config.minDate && self2.config.minDate.getTime() > self2.now.getTime() ? self2.config.minDate : self2.config.maxDate && self2.config.maxDate.getTime() < self2.now.getTime() ? self2.config.maxDate : self2.now;
    self2.currentYear = self2._initialDate.getFullYear();
    self2.currentMonth = self2._initialDate.getMonth();
    if (self2.selectedDates.length > 0)
      self2.latestSelectedDateObj = self2.selectedDates[0];
    if (self2.config.minTime !== void 0)
      self2.config.minTime = self2.parseDate(self2.config.minTime, "H:i");
    if (self2.config.maxTime !== void 0)
      self2.config.maxTime = self2.parseDate(self2.config.maxTime, "H:i");
    self2.minDateHasTime = !!self2.config.minDate && (self2.config.minDate.getHours() > 0 || self2.config.minDate.getMinutes() > 0 || self2.config.minDate.getSeconds() > 0);
    self2.maxDateHasTime = !!self2.config.maxDate && (self2.config.maxDate.getHours() > 0 || self2.config.maxDate.getMinutes() > 0 || self2.config.maxDate.getSeconds() > 0);
  }
  function setupInputs() {
    self2.input = getInputElem();
    if (!self2.input) {
      self2.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    self2.input._type = self2.input.type;
    self2.input.type = "text";
    self2.input.classList.add("flatpickr-input");
    self2._input = self2.input;
    if (self2.config.altInput) {
      self2.altInput = createElement(self2.input.nodeName, self2.config.altInputClass);
      self2._input = self2.altInput;
      self2.altInput.placeholder = self2.input.placeholder;
      self2.altInput.disabled = self2.input.disabled;
      self2.altInput.required = self2.input.required;
      self2.altInput.tabIndex = self2.input.tabIndex;
      self2.altInput.type = "text";
      self2.input.setAttribute("type", "hidden");
      if (!self2.config.static && self2.input.parentNode)
        self2.input.parentNode.insertBefore(self2.altInput, self2.input.nextSibling);
    }
    if (!self2.config.allowInput)
      self2._input.setAttribute("readonly", "readonly");
    updatePositionElement();
  }
  function updatePositionElement() {
    self2._positionElement = self2.config.positionElement || self2._input;
  }
  function setupMobile() {
    var inputType = self2.config.enableTime ? self2.config.noCalendar ? "time" : "datetime-local" : "date";
    self2.mobileInput = createElement("input", self2.input.className + " flatpickr-mobile");
    self2.mobileInput.tabIndex = 1;
    self2.mobileInput.type = inputType;
    self2.mobileInput.disabled = self2.input.disabled;
    self2.mobileInput.required = self2.input.required;
    self2.mobileInput.placeholder = self2.input.placeholder;
    self2.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
    if (self2.selectedDates.length > 0) {
      self2.mobileInput.defaultValue = self2.mobileInput.value = self2.formatDate(self2.selectedDates[0], self2.mobileFormatStr);
    }
    if (self2.config.minDate)
      self2.mobileInput.min = self2.formatDate(self2.config.minDate, "Y-m-d");
    if (self2.config.maxDate)
      self2.mobileInput.max = self2.formatDate(self2.config.maxDate, "Y-m-d");
    if (self2.input.getAttribute("step"))
      self2.mobileInput.step = String(self2.input.getAttribute("step"));
    self2.input.type = "hidden";
    if (self2.altInput !== void 0)
      self2.altInput.type = "hidden";
    try {
      if (self2.input.parentNode)
        self2.input.parentNode.insertBefore(self2.mobileInput, self2.input.nextSibling);
    } catch (_a2) {
    }
    bind(self2.mobileInput, "change", function(e) {
      self2.setDate(getEventTarget(e).value, false, self2.mobileFormatStr);
      triggerEvent("onChange");
      triggerEvent("onClose");
    });
  }
  function toggle(e) {
    if (self2.isOpen === true)
      return self2.close();
    self2.open(e);
  }
  function triggerEvent(event, data) {
    if (self2.config === void 0)
      return;
    var hooks = self2.config[event];
    if (hooks !== void 0 && hooks.length > 0) {
      for (var i2 = 0; hooks[i2] && i2 < hooks.length; i2++)
        hooks[i2](self2.selectedDates, self2.input.value, self2, data);
    }
    if (event === "onChange") {
      self2.input.dispatchEvent(createEvent("change"));
      self2.input.dispatchEvent(createEvent("input"));
    }
  }
  function createEvent(name) {
    var e = document.createEvent("Event");
    e.initEvent(name, true, true);
    return e;
  }
  function isDateSelected(date) {
    for (var i2 = 0; i2 < self2.selectedDates.length; i2++) {
      var selectedDate = self2.selectedDates[i2];
      if (selectedDate instanceof Date && compareDates(selectedDate, date) === 0)
        return "" + i2;
    }
    return false;
  }
  function isDateInRange(date) {
    if (self2.config.mode !== "range" || self2.selectedDates.length < 2)
      return false;
    return compareDates(date, self2.selectedDates[0]) >= 0 && compareDates(date, self2.selectedDates[1]) <= 0;
  }
  function updateNavigationCurrentMonth() {
    if (self2.config.noCalendar || self2.isMobile || !self2.monthNav)
      return;
    self2.yearElements.forEach(function(yearElement, i2) {
      var d = new Date(self2.currentYear, self2.currentMonth, 1);
      d.setMonth(self2.currentMonth + i2);
      if (self2.config.showMonths > 1 || self2.config.monthSelectorType === "static") {
        self2.monthElements[i2].textContent = monthToStr(d.getMonth(), self2.config.shorthandCurrentMonth, self2.l10n) + " ";
      } else {
        self2.monthsDropdownContainer.value = d.getMonth().toString();
      }
      yearElement.value = d.getFullYear().toString();
    });
    self2._hidePrevMonthArrow = self2.config.minDate !== void 0 && (self2.currentYear === self2.config.minDate.getFullYear() ? self2.currentMonth <= self2.config.minDate.getMonth() : self2.currentYear < self2.config.minDate.getFullYear());
    self2._hideNextMonthArrow = self2.config.maxDate !== void 0 && (self2.currentYear === self2.config.maxDate.getFullYear() ? self2.currentMonth + 1 > self2.config.maxDate.getMonth() : self2.currentYear > self2.config.maxDate.getFullYear());
  }
  function getDateStr(specificFormat) {
    var format = specificFormat || (self2.config.altInput ? self2.config.altFormat : self2.config.dateFormat);
    return self2.selectedDates.map(function(dObj) {
      return self2.formatDate(dObj, format);
    }).filter(function(d, i2, arr) {
      return self2.config.mode !== "range" || self2.config.enableTime || arr.indexOf(d) === i2;
    }).join(self2.config.mode !== "range" ? self2.config.conjunction : self2.l10n.rangeSeparator);
  }
  function updateValue(triggerChange2) {
    if (triggerChange2 === void 0) {
      triggerChange2 = true;
    }
    if (self2.mobileInput !== void 0 && self2.mobileFormatStr) {
      self2.mobileInput.value = self2.latestSelectedDateObj !== void 0 ? self2.formatDate(self2.latestSelectedDateObj, self2.mobileFormatStr) : "";
    }
    self2.input.value = getDateStr(self2.config.dateFormat);
    if (self2.altInput !== void 0) {
      self2.altInput.value = getDateStr(self2.config.altFormat);
    }
    if (triggerChange2 !== false)
      triggerEvent("onValueUpdate");
  }
  function onMonthNavClick(e) {
    var eventTarget = getEventTarget(e);
    var isPrevMonth = self2.prevMonthNav.contains(eventTarget);
    var isNextMonth = self2.nextMonthNav.contains(eventTarget);
    if (isPrevMonth || isNextMonth) {
      changeMonth(isPrevMonth ? -1 : 1);
    } else if (self2.yearElements.indexOf(eventTarget) >= 0) {
      eventTarget.select();
    } else if (eventTarget.classList.contains("arrowUp")) {
      self2.changeYear(self2.currentYear + 1);
    } else if (eventTarget.classList.contains("arrowDown")) {
      self2.changeYear(self2.currentYear - 1);
    }
  }
  function timeWrapper(e) {
    e.preventDefault();
    var isKeyDown = e.type === "keydown", eventTarget = getEventTarget(e), input = eventTarget;
    if (self2.amPM !== void 0 && eventTarget === self2.amPM) {
      self2.amPM.textContent = self2.l10n.amPM[int(self2.amPM.textContent === self2.l10n.amPM[0])];
    }
    var min = parseFloat(input.getAttribute("min")), max2 = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
    var newValue = curValue + step * delta;
    if (typeof input.value !== "undefined" && input.value.length === 2) {
      var isHourElem = input === self2.hourElement, isMinuteElem = input === self2.minuteElement;
      if (newValue < min) {
        newValue = max2 + newValue + int(!isHourElem) + (int(isHourElem) && int(!self2.amPM));
        if (isMinuteElem)
          incrementNumInput(void 0, -1, self2.hourElement);
      } else if (newValue > max2) {
        newValue = input === self2.hourElement ? newValue - max2 - int(!self2.amPM) : min;
        if (isMinuteElem)
          incrementNumInput(void 0, 1, self2.hourElement);
      }
      if (self2.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) {
        self2.amPM.textContent = self2.l10n.amPM[int(self2.amPM.textContent === self2.l10n.amPM[0])];
      }
      input.value = pad(newValue);
    }
  }
  init();
  return self2;
}
function _flatpickr(nodeList, config) {
  var nodes = Array.prototype.slice.call(nodeList).filter(function(x2) {
    return x2 instanceof HTMLElement;
  });
  var instances = [];
  for (var i2 = 0; i2 < nodes.length; i2++) {
    var node = nodes[i2];
    try {
      if (node.getAttribute("data-fp-omit") !== null)
        continue;
      if (node._flatpickr !== void 0) {
        node._flatpickr.destroy();
        node._flatpickr = void 0;
      }
      node._flatpickr = FlatpickrInstance(node, config || {});
      instances.push(node._flatpickr);
    } catch (e) {
      console.error(e);
    }
  }
  return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
  HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
  HTMLElement.prototype.flatpickr = function(config) {
    return _flatpickr([this], config);
  };
}
var flatpickr = function(selector, config) {
  if (typeof selector === "string") {
    return _flatpickr(window.document.querySelectorAll(selector), config);
  } else if (selector instanceof Node) {
    return _flatpickr([selector], config);
  } else {
    return _flatpickr(selector, config);
  }
};
flatpickr.defaultConfig = {};
flatpickr.l10ns = {
  en: __assign({}, default_default),
  default: __assign({}, default_default)
};
flatpickr.localize = function(l10n) {
  flatpickr.l10ns.default = __assign(__assign({}, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = function(config) {
  flatpickr.defaultConfig = __assign(__assign({}, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = createDateParser({});
flatpickr.formatDate = createDateFormatter({});
flatpickr.compareDates = compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") {
  jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
  };
}
Date.prototype.fp_incr = function(days) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") {
  window.flatpickr = flatpickr;
}
var esm_default = flatpickr;

// src/app/shared/directives/flatpickr-datetime.directive.ts
var import_es = __toESM(require_es());
var FlatpickrDatetimeDirective = class _FlatpickrDatetimeDirective {
  host = inject(ElementRef);
  instance = null;
  onChange = () => {
  };
  onTouched = () => {
  };
  ngOnInit() {
    this.instance = esm_default(this.host.nativeElement, {
      locale: import_es.Spanish,
      enableTime: true,
      time_24hr: true,
      dateFormat: "j \\d\\e F \\d\\e Y, H:i",
      onChange: (selectedDates) => {
        this.onChange(selectedDates[0] ?? null);
        this.onTouched();
      }
    });
  }
  ngOnDestroy() {
    this.instance?.destroy();
  }
  writeValue(value) {
    this.instance?.setDate(value ?? "", false);
  }
  registerOnChange(fn) {
    this.onChange = fn;
  }
  registerOnTouched(fn) {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.host.nativeElement.disabled = isDisabled;
    this.instance?.set("clickOpens", !isDisabled);
  }
  static \u0275fac = function FlatpickrDatetimeDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FlatpickrDatetimeDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FlatpickrDatetimeDirective, selectors: [["", "appFlatpickrDatetime", ""]], features: [\u0275\u0275ProvidersFeature([
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _FlatpickrDatetimeDirective),
      multi: true
    }
  ])] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlatpickrDatetimeDirective, [{
    type: Directive,
    args: [{
      selector: "[appFlatpickrDatetime]",
      standalone: true,
      providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: forwardRef(() => FlatpickrDatetimeDirective),
          multi: true
        }
      ]
    }]
  }], null, null);
})();

// src/app/features/vuelo-ingreso/vuelo-ingreso.component.ts
var _forTrack0 = ($index, $item) => $item.flightNumber + "-" + $index;
function VueloIngresoComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1, "Debe iniciar con LA o UC seguido de 2 a 4 digitos.");
    \u0275\u0275elementEnd();
  }
}
function VueloIngresoComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Prefijo valido. Ya puede ingresar el ETA.");
    \u0275\u0275elementEnd();
  }
}
function VueloIngresoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1, "Se habilita al validar el numero de vuelo.");
    \u0275\u0275elementEnd();
  }
}
function VueloIngresoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage());
  }
}
function VueloIngresoComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
function VueloIngresoComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "span", 26);
    \u0275\u0275text(2, " Leyendo archivo... ");
    \u0275\u0275elementEnd();
  }
}
function VueloIngresoComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.importError());
  }
}
function VueloIngresoComponent_Conditional_42_For_2_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 26);
  }
}
function VueloIngresoComponent_Conditional_42_For_2_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "Registrado");
    \u0275\u0275elementEnd();
  }
}
function VueloIngresoComponent_Conditional_42_For_2_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const result_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("title", result_r2.message);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", result_r2.message || "Error", " ");
  }
}
function VueloIngresoComponent_Conditional_42_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 27)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, VueloIngresoComponent_Conditional_42_For_2_Case_3_Template, 1, 0, "span", 26)(4, VueloIngresoComponent_Conditional_42_For_2_Case_4_Template, 2, 0, "span", 28)(5, VueloIngresoComponent_Conditional_42_For_2_Case_5_Template, 2, 2, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_13_0;
    const result_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(result_r2.flightNumber);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = result_r2.status) === "pending" ? 3 : tmp_13_0 === "ok" ? 4 : tmp_13_0 === "error" ? 5 : -1);
  }
}
function VueloIngresoComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 25);
    \u0275\u0275repeaterCreate(1, VueloIngresoComponent_Conditional_42_For_2_Template, 6, 2, "li", 27, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx);
  }
}
var FLIGHT_COLUMN_ALIASES = ["numerodevuelo", "nvuelo", "nrovuelo", "vuelo", "flightnumber", "numero"];
var ETA_COLUMN_ALIASES = [
  "eta",
  "horaestimadadellegada",
  "horaestimada",
  "fechaeta",
  "fechayhoraeta",
  "fechahoraeta"
];
function normalizeHeader(value) {
  return String(value ?? "").normalize("NFD").toLowerCase().replace(/[^a-z0-9]/g, "");
}
var VueloIngresoComponent = class _VueloIngresoComponent {
  flightService = inject(FlightService);
  router = inject(Router);
  form = new FormGroup({
    flightNumber: new FormControl("", {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(FLIGHT_NUMBER_PATTERN)]
    }),
    eta: new FormControl(null, { validators: [Validators.required] })
  });
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = signal(null, ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  importing = signal(false, ...ngDevMode ? [{ debugName: "importing" }] : (
    /* istanbul ignore next */
    []
  ));
  importError = signal(null, ...ngDevMode ? [{ debugName: "importError" }] : (
    /* istanbul ignore next */
    []
  ));
  importResults = signal(null, ...ngDevMode ? [{ debugName: "importResults" }] : (
    /* istanbul ignore next */
    []
  ));
  prefixValid = computed(() => {
    const raw = this.form.controls.flightNumber.value ?? "";
    return FLIGHT_NUMBER_PATTERN.test(raw.trim().toUpperCase());
  }, ...ngDevMode ? [{ debugName: "prefixValid" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.form.controls.eta.disable();
    this.form.controls.flightNumber.valueChanges.subscribe((value) => {
      const upper = (value ?? "").toUpperCase();
      if (upper !== value) {
        this.form.controls.flightNumber.setValue(upper, { emitEvent: false });
      }
      if (FLIGHT_NUMBER_PATTERN.test(upper.trim())) {
        this.form.controls.eta.enable({ emitEvent: false });
      } else {
        this.form.controls.eta.disable({ emitEvent: false });
      }
    });
  }
  cancel() {
    this.router.navigateByUrl("/torre-control");
  }
  submit() {
    if (this.form.invalid || this.submitting()) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting.set(true);
    this.errorMessage.set(null);
    const { flightNumber, eta } = this.form.getRawValue();
    const etaIso = eta.toISOString();
    this.flightService.createFlight(flightNumber).pipe(switchMap((created) => this.flightService.setEta(created.id, etaIso))).subscribe({
      next: () => this.router.navigateByUrl("/torre-control"),
      error: (err2) => {
        this.submitting.set(false);
        console.error("Error al registrar vuelo:", err2);
        this.errorMessage.set(this.extractErrorMessage(err2));
      }
    });
  }
  async onFileSelected(event) {
    const input = event.target;
    const file = input.files?.[0] ?? null;
    input.value = "";
    if (!file) {
      return;
    }
    this.importing.set(true);
    this.importError.set(null);
    this.importResults.set(null);
    let rows;
    try {
      const sheets = await readXlsxFile(file);
      rows = sheets[0]?.data ?? [];
    } catch (err2) {
      console.error("Error al leer el archivo Excel:", err2);
      this.importError.set("No se pudo leer el archivo. Verifique que sea un Excel (.xlsx) valido.");
      this.importing.set(false);
      return;
    }
    const parsedRows = this.parseImportRows(rows);
    if (parsedRows === null) {
      this.importError.set('No se encontraron las columnas "Numero de vuelo" y "ETA" en la primera fila del archivo.');
      this.importing.set(false);
      return;
    }
    if (parsedRows.length === 0) {
      this.importError.set("El archivo no tiene filas validas para importar.");
      this.importing.set(false);
      return;
    }
    this.processImportRows(parsedRows);
  }
  parseImportRows(rows) {
    if (rows.length < 2) {
      return [];
    }
    const header = rows[0].map((cell) => normalizeHeader(cell));
    const flightIdx = header.findIndex((h) => FLIGHT_COLUMN_ALIASES.includes(h));
    const etaIdx = header.findIndex((h) => ETA_COLUMN_ALIASES.includes(h));
    if (flightIdx === -1 || etaIdx === -1) {
      return null;
    }
    const parsed = [];
    for (const row of rows.slice(1)) {
      const rawFlight = row[flightIdx];
      const rawEta = row[etaIdx];
      if (rawFlight == null || rawEta == null) {
        continue;
      }
      const flightNumber = String(rawFlight).trim().toUpperCase();
      if (!FLIGHT_NUMBER_PATTERN.test(flightNumber)) {
        continue;
      }
      const eta = rawEta instanceof Date ? rawEta : new Date(String(rawEta));
      if (Number.isNaN(eta.getTime())) {
        continue;
      }
      parsed.push({ flightNumber, eta });
    }
    return parsed;
  }
  processImportRows(rows) {
    this.importResults.set(rows.map((row) => ({ flightNumber: row.flightNumber, status: "pending" })));
    from(rows).pipe(concatMap((row, index) => this.flightService.createFlight(row.flightNumber).pipe(switchMap((created) => this.flightService.setEta(created.id, row.eta.toISOString())), map(() => ({ index, ok: true, message: void 0 })), catchError((err2) => of({ index, ok: false, message: this.extractErrorMessage(err2) }))))).subscribe({
      next: ({ index, ok, message }) => {
        const updated = [...this.importResults() ?? []];
        updated[index] = {
          flightNumber: rows[index].flightNumber,
          status: ok ? "ok" : "error",
          message
        };
        this.importResults.set(updated);
      },
      complete: () => this.importing.set(false)
    });
  }
  extractErrorMessage(err2) {
    if (err2 instanceof HttpErrorResponse) {
      if (err2.status === 0) {
        return "No se pudo conectar con el servidor. Verifique que el backend este activo y accesible.";
      }
      if (typeof err2.error?.message === "string") {
        return err2.error.message;
      }
      if (typeof err2.error === "string" && err2.error.trim()) {
        return err2.error;
      }
      if (err2.status === 409) {
        return "Ese numero de vuelo ya esta registrado.";
      }
      return `No se pudo registrar el vuelo (error ${err2.status}).`;
    }
    return "No se pudo registrar el vuelo";
  }
  static \u0275fac = function VueloIngresoComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VueloIngresoComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VueloIngresoComponent, selectors: [["app-vuelo-ingreso"]], decls: 43, vars: 18, consts: [[1, "container", "py-4", 2, "max-width", "560px"], ["routerLink", "/torre-control", 1, "text-body-secondary", "small", "d-inline-flex", "align-items-center", "mb-3"], [1, "bi", "bi-arrow-left", "me-1"], [1, "card", "fade-in", "p-4", "p-md-5"], [1, "h4", "mb-1"], [1, "text-body-secondary", "small", "mb-4"], ["novalidate", "", 3, "ngSubmit", "formGroup"], [1, "mb-4"], ["for", "flightNumber", 1, "form-label", "fw-semibold"], ["id", "flightNumber", "type", "text", "placeholder", "Ej. LA2045", "formControlName", "flightNumber", "autocomplete", "off", 1, "form-control", "form-control-lg", "text-uppercase"], [1, "invalid-feedback"], [1, "valid-feedback"], ["for", "eta", 1, "form-label", "fw-semibold"], ["id", "eta", "type", "text", "readonly", "", "autocomplete", "off", "placeholder", "Seleccione fecha y hora", "formControlName", "eta", "appFlatpickrDatetime", "", 1, "form-control", "form-control-lg"], [1, "form-text"], [1, "alert", "alert-danger", "py-2", "small"], [1, "d-flex", "gap-2"], ["type", "button", 1, "btn", "btn-outline-secondary", "btn-action", "flex-fill", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", "btn-action", "flex-fill", 3, "disabled"], [1, "spinner-border", "spinner-border-sm", "me-2"], [1, "card", "fade-in", "p-4", "p-md-5", "mt-4"], [1, "h5", "mb-1"], [1, "text-body-secondary", "small", "mb-3"], ["type", "file", "accept", ".xlsx", 1, "form-control", "mb-3", 3, "change", "disabled"], [1, "d-flex", "align-items-center", "gap-2", "text-body-secondary", "small", "mb-3"], [1, "list-group"], [1, "spinner-border", "spinner-border-sm"], [1, "list-group-item", "d-flex", "justify-content-between", "align-items-center", "gap-2"], [1, "badge", "text-bg-success"], [1, "badge", "text-bg-danger", "text-truncate", 2, "max-width", "220px", 3, "title"]], template: function VueloIngresoComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "a", 1);
      \u0275\u0275element(2, "i", 2);
      \u0275\u0275text(3, "Volver a Torre de Control ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 3)(5, "h1", 4);
      \u0275\u0275text(6, "Registrar vuelo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 5);
      \u0275\u0275text(8, " Ingrese el numero de vuelo (debe iniciar con ");
      \u0275\u0275elementStart(9, "strong");
      \u0275\u0275text(10, "LA");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " o ");
      \u0275\u0275elementStart(12, "strong");
      \u0275\u0275text(13, "UC");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, ") para habilitar el registro de la Hora Estimada de Llegada (ETA). ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "form", 6);
      \u0275\u0275listener("ngSubmit", function VueloIngresoComponent_Template_form_ngSubmit_15_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(16, "div", 7)(17, "label", 8);
      \u0275\u0275text(18, "Numero de vuelo");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 9);
      \u0275\u0275conditionalCreate(20, VueloIngresoComponent_Conditional_20_Template, 2, 0, "div", 10);
      \u0275\u0275conditionalCreate(21, VueloIngresoComponent_Conditional_21_Template, 2, 0, "div", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 7)(23, "label", 12);
      \u0275\u0275text(24, "Hora Estimada de Llegada (ETA)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(25, "input", 13);
      \u0275\u0275conditionalCreate(26, VueloIngresoComponent_Conditional_26_Template, 2, 0, "div", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(27, VueloIngresoComponent_Conditional_27_Template, 2, 1, "div", 15);
      \u0275\u0275elementStart(28, "div", 16)(29, "button", 17);
      \u0275\u0275listener("click", function VueloIngresoComponent_Template_button_click_29_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(30, " Cancelar ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 18);
      \u0275\u0275conditionalCreate(32, VueloIngresoComponent_Conditional_32_Template, 1, 0, "span", 19);
      \u0275\u0275text(33, " Registrar vuelo ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(34, "div", 20)(35, "h2", 21);
      \u0275\u0275text(36, "Importar vuelos desde Excel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 22);
      \u0275\u0275text(38, ' El archivo (.xlsx) debe tener una fila de encabezados con una columna de numero de vuelo (ej. "Numero de vuelo") y una columna de ETA (ej. "ETA") con la fecha y hora estimada de llegada. ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "input", 23);
      \u0275\u0275listener("change", function VueloIngresoComponent_Template_input_change_39_listener($event) {
        return ctx.onFileSelected($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, VueloIngresoComponent_Conditional_40_Template, 3, 0, "div", 24);
      \u0275\u0275conditionalCreate(41, VueloIngresoComponent_Conditional_41_Template, 2, 1, "div", 15);
      \u0275\u0275conditionalCreate(42, VueloIngresoComponent_Conditional_42_Template, 3, 0, "ul", 25);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_14_0;
      \u0275\u0275advance(15);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.form.controls.flightNumber.touched && ctx.form.controls.flightNumber.invalid)("is-valid", ctx.prefixValid());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.form.controls.flightNumber.touched && ctx.form.controls.flightNumber.invalid ? 20 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.prefixValid() ? 21 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", ctx.form.controls.eta.touched && ctx.form.controls.eta.invalid && !ctx.form.controls.eta.disabled);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.prefixValid() ? 26 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.errorMessage() ? 27 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.submitting());
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.form.invalid || ctx.submitting());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitting() ? 32 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.importing());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.importing() && !ctx.importResults() ? 40 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.importError() ? 41 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_14_0 = ctx.importResults()) ? 42 : -1, tmp_14_0);
    }
  }, dependencies: [ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, RouterLink, FlatpickrDatetimeDirective], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=vuelo-ingreso.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VueloIngresoComponent, [{
    type: Component,
    args: [{ selector: "app-vuelo-ingreso", standalone: true, imports: [ReactiveFormsModule, RouterLink, FlatpickrDatetimeDirective], template: `<div class="container py-4" style="max-width: 560px;">
  <a routerLink="/torre-control" class="text-body-secondary small d-inline-flex align-items-center mb-3">
    <i class="bi bi-arrow-left me-1"></i>Volver a Torre de Control
  </a>

  <div class="card fade-in p-4 p-md-5">
    <h1 class="h4 mb-1">Registrar vuelo</h1>
    <p class="text-body-secondary small mb-4">
      Ingrese el numero de vuelo (debe iniciar con <strong>LA</strong> o <strong>UC</strong>) para
      habilitar el registro de la Hora Estimada de Llegada (ETA).
    </p>

    <form [formGroup]="form" (ngSubmit)="submit()" novalidate>
      <div class="mb-4">
        <label for="flightNumber" class="form-label fw-semibold">Numero de vuelo</label>
        <input
          id="flightNumber"
          type="text"
          class="form-control form-control-lg text-uppercase"
          placeholder="Ej. LA2045"
          formControlName="flightNumber"
          [class.is-invalid]="form.controls.flightNumber.touched && form.controls.flightNumber.invalid"
          [class.is-valid]="prefixValid()"
          autocomplete="off"
        />
        @if (form.controls.flightNumber.touched && form.controls.flightNumber.invalid) {
          <div class="invalid-feedback">Debe iniciar con LA o UC seguido de 2 a 4 digitos.</div>
        }
        @if (prefixValid()) {
          <div class="valid-feedback">Prefijo valido. Ya puede ingresar el ETA.</div>
        }
      </div>

      <div class="mb-4">
        <label for="eta" class="form-label fw-semibold">Hora Estimada de Llegada (ETA)</label>
        <input
          id="eta"
          type="text"
          readonly
          autocomplete="off"
          placeholder="Seleccione fecha y hora"
          class="form-control form-control-lg"
          formControlName="eta"
          appFlatpickrDatetime
          [class.is-invalid]="form.controls.eta.touched && form.controls.eta.invalid && !form.controls.eta.disabled"
        />
        @if (!prefixValid()) {
          <div class="form-text">Se habilita al validar el numero de vuelo.</div>
        }
      </div>

      @if (errorMessage()) {
        <div class="alert alert-danger py-2 small">{{ errorMessage() }}</div>
      }

      <div class="d-flex gap-2">
        <button
          type="button"
          class="btn btn-outline-secondary btn-action flex-fill"
          [disabled]="submitting()"
          (click)="cancel()"
        >
          Cancelar
        </button>
        <button type="submit" class="btn btn-primary btn-action flex-fill" [disabled]="form.invalid || submitting()">
          @if (submitting()) {
            <span class="spinner-border spinner-border-sm me-2"></span>
          }
          Registrar vuelo
        </button>
      </div>
    </form>
  </div>

  <div class="card fade-in p-4 p-md-5 mt-4">
    <h2 class="h5 mb-1">Importar vuelos desde Excel</h2>
    <p class="text-body-secondary small mb-3">
      El archivo (.xlsx) debe tener una fila de encabezados con una columna de numero de vuelo
      (ej. "Numero de vuelo") y una columna de ETA (ej. "ETA") con la fecha y hora estimada de llegada.
    </p>

    <input
      type="file"
      accept=".xlsx"
      class="form-control mb-3"
      [disabled]="importing()"
      (change)="onFileSelected($event)"
    />

    @if (importing() && !importResults()) {
      <div class="d-flex align-items-center gap-2 text-body-secondary small mb-3">
        <span class="spinner-border spinner-border-sm"></span>
        Leyendo archivo...
      </div>
    }

    @if (importError()) {
      <div class="alert alert-danger py-2 small">{{ importError() }}</div>
    }

    @if (importResults(); as results) {
      <ul class="list-group">
        @for (result of results; track result.flightNumber + '-' + $index) {
          <li class="list-group-item d-flex justify-content-between align-items-center gap-2">
            <span>{{ result.flightNumber }}</span>
            @switch (result.status) {
              @case ('pending') {
                <span class="spinner-border spinner-border-sm"></span>
              }
              @case ('ok') {
                <span class="badge text-bg-success">Registrado</span>
              }
              @case ('error') {
                <span class="badge text-bg-danger text-truncate" style="max-width: 220px;" [title]="result.message">
                  {{ result.message || 'Error' }}
                </span>
              }
            }
          </li>
        }
      </ul>
    }
  </div>
</div>
`, styles: ["/* src/app/features/vuelo-ingreso/vuelo-ingreso.component.css */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=vuelo-ingreso.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VueloIngresoComponent, { className: "VueloIngresoComponent", filePath: "src/app/features/vuelo-ingreso/vuelo-ingreso.component.ts", lineNumber: 49 });
})();
export {
  VueloIngresoComponent
};
//# sourceMappingURL=chunk-R6CJGPE7.js.map
