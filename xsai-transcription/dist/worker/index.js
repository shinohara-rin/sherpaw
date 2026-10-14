import { createOnlineRecognizer, initASRModule, timedTokens } from "@sherpaw/asr";
import { loadData } from "@sherpaw/preloader";

//#region rolldown:runtime
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function() {
	return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
	if (from && typeof from === "object" || typeof from === "function") for (var keys = __getOwnPropNames(from), i = 0, n = keys.length, key; i < n; i++) {
		key = keys[i];
		if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
			get: ((k) => from[k]).bind(null, key),
			enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
		});
	}
	return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
	value: mod,
	enumerable: true
}) : target, mod));

//#endregion
//#region ../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/constants.js
var require_constants = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/constants.js": ((exports, module) => {
	const WIN_SLASH = "\\\\/";
	const WIN_NO_SLASH = `[^${WIN_SLASH}]`;
	const DEFAULT_MAX_EXTGLOB_RECURSION = 0;
	/**
	* Posix glob regex
	*/
	const DOT_LITERAL = "\\.";
	const PLUS_LITERAL = "\\+";
	const QMARK_LITERAL = "\\?";
	const SLASH_LITERAL = "\\/";
	const ONE_CHAR = "(?=.)";
	const QMARK = "[^/]";
	const END_ANCHOR = `(?:${SLASH_LITERAL}|$)`;
	const START_ANCHOR = `(?:^|${SLASH_LITERAL})`;
	const DOTS_SLASH = `${DOT_LITERAL}{1,2}${END_ANCHOR}`;
	const POSIX_CHARS = {
		DOT_LITERAL,
		PLUS_LITERAL,
		QMARK_LITERAL,
		SLASH_LITERAL,
		ONE_CHAR,
		QMARK,
		END_ANCHOR,
		DOTS_SLASH,
		NO_DOT: `(?!${DOT_LITERAL})`,
		NO_DOTS: `(?!${START_ANCHOR}${DOTS_SLASH})`,
		NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}${END_ANCHOR})`,
		NO_DOTS_SLASH: `(?!${DOTS_SLASH})`,
		QMARK_NO_DOT: `[^.${SLASH_LITERAL}]`,
		STAR: `${QMARK}*?`,
		START_ANCHOR,
		SEP: "/"
	};
	/**
	* Windows glob regex
	*/
	const WINDOWS_CHARS = {
		...POSIX_CHARS,
		SLASH_LITERAL: `[${WIN_SLASH}]`,
		QMARK: WIN_NO_SLASH,
		STAR: `${WIN_NO_SLASH}*?`,
		DOTS_SLASH: `${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$)`,
		NO_DOT: `(?!${DOT_LITERAL})`,
		NO_DOTS: `(?!(?:^|[${WIN_SLASH}])${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
		NO_DOT_SLASH: `(?!${DOT_LITERAL}{0,1}(?:[${WIN_SLASH}]|$))`,
		NO_DOTS_SLASH: `(?!${DOT_LITERAL}{1,2}(?:[${WIN_SLASH}]|$))`,
		QMARK_NO_DOT: `[^.${WIN_SLASH}]`,
		START_ANCHOR: `(?:^|[${WIN_SLASH}])`,
		END_ANCHOR: `(?:[${WIN_SLASH}]|$)`,
		SEP: "\\"
	};
	/**
	* POSIX Bracket Regex
	*/
	const POSIX_REGEX_SOURCE$1 = {
		__proto__: null,
		alnum: "a-zA-Z0-9",
		alpha: "a-zA-Z",
		ascii: "\\x00-\\x7F",
		blank: " \\t",
		cntrl: "\\x00-\\x1F\\x7F",
		digit: "0-9",
		graph: "\\x21-\\x7E",
		lower: "a-z",
		print: "\\x20-\\x7E ",
		punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
		space: " \\t\\r\\n\\v\\f",
		upper: "A-Z",
		word: "A-Za-z0-9_",
		xdigit: "A-Fa-f0-9"
	};
	module.exports = {
		DEFAULT_MAX_EXTGLOB_RECURSION,
		MAX_LENGTH: 1024 * 64,
		POSIX_REGEX_SOURCE: POSIX_REGEX_SOURCE$1,
		REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
		REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
		REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
		REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
		REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
		REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
		REPLACEMENTS: {
			__proto__: null,
			"***": "*",
			"**/**": "**",
			"**/**/**": "**"
		},
		CHAR_0: 48,
		CHAR_9: 57,
		CHAR_UPPERCASE_A: 65,
		CHAR_LOWERCASE_A: 97,
		CHAR_UPPERCASE_Z: 90,
		CHAR_LOWERCASE_Z: 122,
		CHAR_LEFT_PARENTHESES: 40,
		CHAR_RIGHT_PARENTHESES: 41,
		CHAR_ASTERISK: 42,
		CHAR_AMPERSAND: 38,
		CHAR_AT: 64,
		CHAR_BACKWARD_SLASH: 92,
		CHAR_CARRIAGE_RETURN: 13,
		CHAR_CIRCUMFLEX_ACCENT: 94,
		CHAR_COLON: 58,
		CHAR_COMMA: 44,
		CHAR_DOT: 46,
		CHAR_DOUBLE_QUOTE: 34,
		CHAR_EQUAL: 61,
		CHAR_EXCLAMATION_MARK: 33,
		CHAR_FORM_FEED: 12,
		CHAR_FORWARD_SLASH: 47,
		CHAR_GRAVE_ACCENT: 96,
		CHAR_HASH: 35,
		CHAR_HYPHEN_MINUS: 45,
		CHAR_LEFT_ANGLE_BRACKET: 60,
		CHAR_LEFT_CURLY_BRACE: 123,
		CHAR_LEFT_SQUARE_BRACKET: 91,
		CHAR_LINE_FEED: 10,
		CHAR_NO_BREAK_SPACE: 160,
		CHAR_PERCENT: 37,
		CHAR_PLUS: 43,
		CHAR_QUESTION_MARK: 63,
		CHAR_RIGHT_ANGLE_BRACKET: 62,
		CHAR_RIGHT_CURLY_BRACE: 125,
		CHAR_RIGHT_SQUARE_BRACKET: 93,
		CHAR_SEMICOLON: 59,
		CHAR_SINGLE_QUOTE: 39,
		CHAR_SPACE: 32,
		CHAR_TAB: 9,
		CHAR_UNDERSCORE: 95,
		CHAR_VERTICAL_LINE: 124,
		CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
		extglobChars(chars) {
			return {
				"!": {
					type: "negate",
					open: "(?:(?!(?:",
					close: `))${chars.STAR})`
				},
				"?": {
					type: "qmark",
					open: "(?:",
					close: ")?"
				},
				"+": {
					type: "plus",
					open: "(?:",
					close: ")+"
				},
				"*": {
					type: "star",
					open: "(?:",
					close: ")*"
				},
				"@": {
					type: "at",
					open: "(?:",
					close: ")"
				}
			};
		},
		globChars(win32) {
			return win32 === true ? WINDOWS_CHARS : POSIX_CHARS;
		}
	};
}) });

//#endregion
//#region ../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/utils.js
var require_utils = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/utils.js": ((exports) => {
	const { REGEX_BACKSLASH, REGEX_REMOVE_BACKSLASH, REGEX_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_GLOBAL } = require_constants();
	exports.isObject = (val) => val !== null && typeof val === "object" && !Array.isArray(val);
	exports.hasRegexChars = (str) => REGEX_SPECIAL_CHARS.test(str);
	exports.isRegexChar = (str) => str.length === 1 && exports.hasRegexChars(str);
	exports.escapeRegex = (str) => str.replace(REGEX_SPECIAL_CHARS_GLOBAL, "\\$1");
	exports.toPosixSlashes = (str) => str.replace(REGEX_BACKSLASH, "/");
	exports.isWindows = () => {
		if (typeof navigator !== "undefined" && navigator.platform) {
			const platform = navigator.platform.toLowerCase();
			return platform === "win32" || platform === "windows";
		}
		if (typeof process !== "undefined" && process.platform) return process.platform === "win32";
		return false;
	};
	exports.removeBackslashes = (str) => {
		return str.replace(REGEX_REMOVE_BACKSLASH, (match) => {
			return match === "\\" ? "" : match;
		});
	};
	exports.escapeLast = (input, char, lastIdx) => {
		const idx = input.lastIndexOf(char, lastIdx);
		if (idx === -1) return input;
		if (input[idx - 1] === "\\") return exports.escapeLast(input, char, idx - 1);
		return `${input.slice(0, idx)}\\${input.slice(idx)}`;
	};
	exports.removePrefix = (input, state = {}) => {
		let output = input;
		if (output.startsWith("./")) {
			output = output.slice(2);
			state.prefix = "./";
		}
		return output;
	};
	exports.wrapOutput = (input, state = {}, options = {}) => {
		let output = `${options.contains ? "" : "^"}(?:${input})${options.contains ? "" : "$"}`;
		if (state.negated === true) output = `(?:^(?!${output}).*$)`;
		return output;
	};
	exports.basename = (path, { windows } = {}) => {
		const segs = path.split(windows ? /[\\/]/ : "/");
		const last = segs[segs.length - 1];
		if (last === "") return segs[segs.length - 2];
		return last;
	};
}) });

//#endregion
//#region ../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/scan.js
var require_scan = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/scan.js": ((exports, module) => {
	const utils$3 = require_utils();
	const { CHAR_ASTERISK, CHAR_AT, CHAR_BACKWARD_SLASH, CHAR_COMMA, CHAR_DOT, CHAR_EXCLAMATION_MARK, CHAR_FORWARD_SLASH, CHAR_LEFT_CURLY_BRACE, CHAR_LEFT_PARENTHESES, CHAR_LEFT_SQUARE_BRACKET, CHAR_PLUS, CHAR_QUESTION_MARK, CHAR_RIGHT_CURLY_BRACE, CHAR_RIGHT_PARENTHESES, CHAR_RIGHT_SQUARE_BRACKET } = require_constants();
	const isPathSeparator = (code) => {
		return code === CHAR_FORWARD_SLASH || code === CHAR_BACKWARD_SLASH;
	};
	const depth = (token) => {
		if (token.isPrefix !== true) token.depth = token.isGlobstar ? Infinity : 1;
	};
	/**
	* Quickly scans a glob pattern and returns an object with a handful of
	* useful properties, like `isGlob`, `path` (the leading non-glob, if it exists),
	* `glob` (the actual pattern), `negated` (true if the path starts with `!` but not
	* with `!(`) and `negatedExtglob` (true if the path starts with `!(`).
	*
	* ```js
	* const pm = require('picomatch');
	* console.log(pm.scan('foo/bar/*.js'));
	* { isGlob: true, input: 'foo/bar/*.js', base: 'foo/bar', glob: '*.js' }
	* ```
	* @param {String} `str`
	* @param {Object} `options`
	* @return {Object} Returns an object with tokens and regex source string.
	* @api public
	*/
	const scan$1 = (input, options) => {
		const opts = options || {};
		const length = input.length - 1;
		const scanToEnd = opts.parts === true || opts.scanToEnd === true;
		const slashes = [];
		const tokens = [];
		const parts = [];
		let str = input;
		let index = -1;
		let start = 0;
		let lastIndex = 0;
		let isBrace = false;
		let isBracket = false;
		let isGlob = false;
		let isExtglob = false;
		let isGlobstar = false;
		let braceEscaped = false;
		let backslashes = false;
		let negated = false;
		let negatedExtglob = false;
		let finished = false;
		let braces = 0;
		let prev;
		let code;
		let token = {
			value: "",
			depth: 0,
			isGlob: false
		};
		const eos = () => index >= length;
		const peek = () => str.charCodeAt(index + 1);
		const advance = () => {
			prev = code;
			return str.charCodeAt(++index);
		};
		while (index < length) {
			code = advance();
			let next;
			if (code === CHAR_BACKWARD_SLASH) {
				backslashes = token.backslashes = true;
				code = advance();
				if (code === CHAR_LEFT_CURLY_BRACE) braceEscaped = true;
				continue;
			}
			if (braceEscaped === true || code === CHAR_LEFT_CURLY_BRACE) {
				braces++;
				while (eos() !== true && (code = advance())) {
					if (code === CHAR_BACKWARD_SLASH) {
						backslashes = token.backslashes = true;
						advance();
						continue;
					}
					if (code === CHAR_LEFT_CURLY_BRACE) {
						braces++;
						continue;
					}
					if (braceEscaped !== true && code === CHAR_DOT && (code = advance()) === CHAR_DOT) {
						isBrace = token.isBrace = true;
						isGlob = token.isGlob = true;
						finished = true;
						if (scanToEnd === true) continue;
						break;
					}
					if (braceEscaped !== true && code === CHAR_COMMA) {
						isBrace = token.isBrace = true;
						isGlob = token.isGlob = true;
						finished = true;
						if (scanToEnd === true) continue;
						break;
					}
					if (code === CHAR_RIGHT_CURLY_BRACE) {
						braces--;
						if (braces === 0) {
							braceEscaped = false;
							isBrace = token.isBrace = true;
							finished = true;
							break;
						}
					}
				}
				if (scanToEnd === true) continue;
				break;
			}
			if (code === CHAR_FORWARD_SLASH) {
				slashes.push(index);
				tokens.push(token);
				token = {
					value: "",
					depth: 0,
					isGlob: false
				};
				if (finished === true) continue;
				if (prev === CHAR_DOT && index === start + 1) {
					start += 2;
					continue;
				}
				lastIndex = index + 1;
				continue;
			}
			if (opts.noext !== true) {
				if ((code === CHAR_PLUS || code === CHAR_AT || code === CHAR_ASTERISK || code === CHAR_QUESTION_MARK || code === CHAR_EXCLAMATION_MARK) === true && peek() === CHAR_LEFT_PARENTHESES) {
					isGlob = token.isGlob = true;
					isExtglob = token.isExtglob = true;
					finished = true;
					if (code === CHAR_EXCLAMATION_MARK && index === start) negatedExtglob = true;
					if (scanToEnd === true) {
						while (eos() !== true && (code = advance())) {
							if (code === CHAR_BACKWARD_SLASH) {
								backslashes = token.backslashes = true;
								code = advance();
								continue;
							}
							if (code === CHAR_RIGHT_PARENTHESES) {
								isGlob = token.isGlob = true;
								finished = true;
								break;
							}
						}
						continue;
					}
					break;
				}
			}
			if (code === CHAR_ASTERISK) {
				if (prev === CHAR_ASTERISK) isGlobstar = token.isGlobstar = true;
				isGlob = token.isGlob = true;
				finished = true;
				if (scanToEnd === true) continue;
				break;
			}
			if (code === CHAR_QUESTION_MARK) {
				isGlob = token.isGlob = true;
				finished = true;
				if (scanToEnd === true) continue;
				break;
			}
			if (code === CHAR_LEFT_SQUARE_BRACKET) {
				while (eos() !== true && (next = advance())) {
					if (next === CHAR_BACKWARD_SLASH) {
						backslashes = token.backslashes = true;
						advance();
						continue;
					}
					if (next === CHAR_RIGHT_SQUARE_BRACKET) {
						isBracket = token.isBracket = true;
						isGlob = token.isGlob = true;
						finished = true;
						break;
					}
				}
				if (scanToEnd === true) continue;
				break;
			}
			if (opts.nonegate !== true && code === CHAR_EXCLAMATION_MARK && index === start) {
				negated = token.negated = true;
				start++;
				continue;
			}
			if (opts.noparen !== true && code === CHAR_LEFT_PARENTHESES) {
				isGlob = token.isGlob = true;
				if (scanToEnd === true) {
					while (eos() !== true && (code = advance())) {
						if (code === CHAR_LEFT_PARENTHESES) {
							backslashes = token.backslashes = true;
							code = advance();
							continue;
						}
						if (code === CHAR_RIGHT_PARENTHESES) {
							finished = true;
							break;
						}
					}
					continue;
				}
				break;
			}
			if (isGlob === true) {
				finished = true;
				if (scanToEnd === true) continue;
				break;
			}
		}
		if (opts.noext === true) {
			isExtglob = false;
			isGlob = false;
		}
		let base = str;
		let prefix = "";
		let glob = "";
		if (start > 0) {
			prefix = str.slice(0, start);
			str = str.slice(start);
			lastIndex -= start;
		}
		if (base && isGlob === true && lastIndex > 0) {
			base = str.slice(0, lastIndex);
			glob = str.slice(lastIndex);
		} else if (isGlob === true) {
			base = "";
			glob = str;
		} else base = str;
		if (base && base !== "" && base !== "/" && base !== str) {
			if (isPathSeparator(base.charCodeAt(base.length - 1))) base = base.slice(0, -1);
		}
		if (opts.unescape === true) {
			if (glob) glob = utils$3.removeBackslashes(glob);
			if (base && backslashes === true) base = utils$3.removeBackslashes(base);
		}
		const state = {
			prefix,
			input,
			start,
			base,
			glob,
			isBrace,
			isBracket,
			isGlob,
			isExtglob,
			isGlobstar,
			negated,
			negatedExtglob
		};
		if (opts.tokens === true) {
			state.maxDepth = 0;
			if (!isPathSeparator(code)) tokens.push(token);
			state.tokens = tokens;
		}
		if (opts.parts === true || opts.tokens === true) {
			let prevIndex;
			for (let idx = 0; idx < slashes.length; idx++) {
				const n = prevIndex ? prevIndex + 1 : start;
				const i = slashes[idx];
				const value = input.slice(n, i);
				if (opts.tokens) {
					if (idx === 0 && start !== 0) {
						tokens[idx].isPrefix = true;
						tokens[idx].value = prefix;
					} else tokens[idx].value = value;
					depth(tokens[idx]);
					state.maxDepth += tokens[idx].depth;
				}
				if (idx !== 0 || value !== "") parts.push(value);
				prevIndex = i;
			}
			if (prevIndex && prevIndex + 1 < input.length) {
				const value = input.slice(prevIndex + 1);
				parts.push(value);
				if (opts.tokens) {
					tokens[tokens.length - 1].value = value;
					depth(tokens[tokens.length - 1]);
					state.maxDepth += tokens[tokens.length - 1].depth;
				}
			}
			state.slashes = slashes;
			state.parts = parts;
		}
		return state;
	};
	module.exports = scan$1;
}) });

//#endregion
//#region ../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/parse.js
var require_parse = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/parse.js": ((exports, module) => {
	const constants$1 = require_constants();
	const utils$2 = require_utils();
	/**
	* Constants
	*/
	const { MAX_LENGTH, POSIX_REGEX_SOURCE, REGEX_NON_SPECIAL_CHARS, REGEX_SPECIAL_CHARS_BACKREF, REPLACEMENTS } = constants$1;
	/**
	* Helpers
	*/
	const expandRange = (args, options) => {
		if (typeof options.expandRange === "function") return options.expandRange(...args, options);
		args.sort();
		const value = `[${args.join("-")}]`;
		try {
			new RegExp(value);
		} catch (ex) {
			return args.map((v) => utils$2.escapeRegex(v)).join("..");
		}
		return value;
	};
	/**
	* Create the message for a syntax error
	*/
	const syntaxError = (type, char) => {
		return `Missing ${type}: "${char}" - use "\\\\${char}" to match literal characters`;
	};
	const splitTopLevel = (input) => {
		const parts = [];
		let bracket = 0;
		let paren = 0;
		let quote = 0;
		let value = "";
		let escaped = false;
		for (const ch of input) {
			if (escaped === true) {
				value += ch;
				escaped = false;
				continue;
			}
			if (ch === "\\") {
				value += ch;
				escaped = true;
				continue;
			}
			if (ch === "\"") {
				quote = quote === 1 ? 0 : 1;
				value += ch;
				continue;
			}
			if (quote === 0) {
				if (ch === "[") bracket++;
				else if (ch === "]" && bracket > 0) bracket--;
				else if (bracket === 0) {
					if (ch === "(") paren++;
					else if (ch === ")" && paren > 0) paren--;
					else if (ch === "|" && paren === 0) {
						parts.push(value);
						value = "";
						continue;
					}
				}
			}
			value += ch;
		}
		parts.push(value);
		return parts;
	};
	const isPlainBranch = (branch) => {
		let escaped = false;
		for (const ch of branch) {
			if (escaped === true) {
				escaped = false;
				continue;
			}
			if (ch === "\\") {
				escaped = true;
				continue;
			}
			if (/[?*+@!()[\]{}]/.test(ch)) return false;
		}
		return true;
	};
	const normalizeSimpleBranch = (branch) => {
		let value = branch.trim();
		let changed = true;
		while (changed === true) {
			changed = false;
			if (/^@\([^\\()[\]{}|]+\)$/.test(value)) {
				value = value.slice(2, -1);
				changed = true;
			}
		}
		if (!isPlainBranch(value)) return;
		return value.replace(/\\(.)/g, "$1");
	};
	const hasRepeatedCharPrefixOverlap = (branches) => {
		const values = branches.map(normalizeSimpleBranch).filter(Boolean);
		for (let i = 0; i < values.length; i++) for (let j = i + 1; j < values.length; j++) {
			const a = values[i];
			const b = values[j];
			const char = a[0];
			if (!char || a !== char.repeat(a.length) || b !== char.repeat(b.length)) continue;
			if (a === b || a.startsWith(b) || b.startsWith(a)) return true;
		}
		return false;
	};
	const parseRepeatedExtglob = (pattern, requireEnd = true) => {
		if (pattern[0] !== "+" && pattern[0] !== "*" || pattern[1] !== "(") return;
		let bracket = 0;
		let paren = 0;
		let quote = 0;
		let escaped = false;
		for (let i = 1; i < pattern.length; i++) {
			const ch = pattern[i];
			if (escaped === true) {
				escaped = false;
				continue;
			}
			if (ch === "\\") {
				escaped = true;
				continue;
			}
			if (ch === "\"") {
				quote = quote === 1 ? 0 : 1;
				continue;
			}
			if (quote === 1) continue;
			if (ch === "[") {
				bracket++;
				continue;
			}
			if (ch === "]" && bracket > 0) {
				bracket--;
				continue;
			}
			if (bracket > 0) continue;
			if (ch === "(") {
				paren++;
				continue;
			}
			if (ch === ")") {
				paren--;
				if (paren === 0) {
					if (requireEnd === true && i !== pattern.length - 1) return;
					return {
						type: pattern[0],
						body: pattern.slice(2, i),
						end: i
					};
				}
			}
		}
	};
	const getStarExtglobSequenceOutput = (pattern) => {
		let index = 0;
		const chars = [];
		while (index < pattern.length) {
			const match = parseRepeatedExtglob(pattern.slice(index), false);
			if (!match || match.type !== "*") return;
			const branches = splitTopLevel(match.body).map((branch$1) => branch$1.trim());
			if (branches.length !== 1) return;
			const branch = normalizeSimpleBranch(branches[0]);
			if (!branch || branch.length !== 1) return;
			chars.push(branch);
			index += match.end + 1;
		}
		if (chars.length < 1) return;
		return `${chars.length === 1 ? utils$2.escapeRegex(chars[0]) : `[${chars.map((ch) => utils$2.escapeRegex(ch)).join("")}]`}*`;
	};
	const repeatedExtglobRecursion = (pattern) => {
		let depth$1 = 0;
		let value = pattern.trim();
		let match = parseRepeatedExtglob(value);
		while (match) {
			depth$1++;
			value = match.body.trim();
			match = parseRepeatedExtglob(value);
		}
		return depth$1;
	};
	const analyzeRepeatedExtglob = (body, options) => {
		if (options.maxExtglobRecursion === false) return { risky: false };
		const max = typeof options.maxExtglobRecursion === "number" ? options.maxExtglobRecursion : constants$1.DEFAULT_MAX_EXTGLOB_RECURSION;
		const branches = splitTopLevel(body).map((branch) => branch.trim());
		if (branches.length > 1) {
			if (branches.some((branch) => branch === "") || branches.some((branch) => /^[*?]+$/.test(branch)) || hasRepeatedCharPrefixOverlap(branches)) return { risky: true };
		}
		for (const branch of branches) {
			const safeOutput = getStarExtglobSequenceOutput(branch);
			if (safeOutput) return {
				risky: true,
				safeOutput
			};
			if (repeatedExtglobRecursion(branch) > max) return { risky: true };
		}
		return { risky: false };
	};
	/**
	* Parse the given input string.
	* @param {String} input
	* @param {Object} options
	* @return {Object}
	*/
	const parse$1 = (input, options) => {
		if (typeof input !== "string") throw new TypeError("Expected a string");
		input = REPLACEMENTS[input] || input;
		const opts = { ...options };
		const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
		let len = input.length;
		if (len > max) throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
		const bos = {
			type: "bos",
			value: "",
			output: opts.prepend || ""
		};
		const tokens = [bos];
		const capture = opts.capture ? "" : "?:";
		const PLATFORM_CHARS = constants$1.globChars(opts.windows);
		const EXTGLOB_CHARS = constants$1.extglobChars(PLATFORM_CHARS);
		const { DOT_LITERAL: DOT_LITERAL$1, PLUS_LITERAL: PLUS_LITERAL$1, SLASH_LITERAL: SLASH_LITERAL$1, ONE_CHAR: ONE_CHAR$1, DOTS_SLASH: DOTS_SLASH$1, NO_DOT, NO_DOT_SLASH, NO_DOTS_SLASH, QMARK: QMARK$1, QMARK_NO_DOT, STAR, START_ANCHOR: START_ANCHOR$1 } = PLATFORM_CHARS;
		const globstar = (opts$1) => {
			return `(${capture}(?:(?!${START_ANCHOR$1}${opts$1.dot ? DOTS_SLASH$1 : DOT_LITERAL$1}).)*?)`;
		};
		const nodot = opts.dot ? "" : NO_DOT;
		const qmarkNoDot = opts.dot ? QMARK$1 : QMARK_NO_DOT;
		let star = opts.bash === true ? globstar(opts) : STAR;
		if (opts.capture) star = `(${star})`;
		if (typeof opts.noext === "boolean") opts.noextglob = opts.noext;
		const state = {
			input,
			index: -1,
			start: 0,
			dot: opts.dot === true,
			consumed: "",
			output: "",
			prefix: "",
			backtrack: false,
			negated: false,
			brackets: 0,
			braces: 0,
			parens: 0,
			quotes: 0,
			globstar: false,
			tokens
		};
		input = utils$2.removePrefix(input, state);
		len = input.length;
		const extglobs = [];
		const braces = [];
		const stack = [];
		let prev = bos;
		let value;
		/**
		* Tokenizing helpers
		*/
		const eos = () => state.index === len - 1;
		const peek = state.peek = (n = 1) => input[state.index + n];
		const advance = state.advance = () => input[++state.index] || "";
		const remaining = () => input.slice(state.index + 1);
		const consume = (value$1 = "", num = 0) => {
			state.consumed += value$1;
			state.index += num;
		};
		const append = (token) => {
			state.output += token.output != null ? token.output : token.value;
			consume(token.value);
		};
		const negate = () => {
			let count = 1;
			while (peek() === "!" && (peek(2) !== "(" || peek(3) === "?")) {
				advance();
				state.start++;
				count++;
			}
			if (count % 2 === 0) return false;
			state.negated = true;
			state.start++;
			return true;
		};
		const increment = (type) => {
			state[type]++;
			stack.push(type);
		};
		const decrement = (type) => {
			state[type]--;
			stack.pop();
		};
		/**
		* Push tokens onto the tokens array. This helper speeds up
		* tokenizing by 1) helping us avoid backtracking as much as possible,
		* and 2) helping us avoid creating extra tokens when consecutive
		* characters are plain text. This improves performance and simplifies
		* lookbehinds.
		*/
		const push = (tok) => {
			if (prev.type === "globstar") {
				const isBrace = state.braces > 0 && (tok.type === "comma" || tok.type === "brace");
				const isExtglob = tok.extglob === true || extglobs.length && (tok.type === "pipe" || tok.type === "paren");
				if (tok.type !== "slash" && tok.type !== "paren" && !isBrace && !isExtglob) {
					state.output = state.output.slice(0, -prev.output.length);
					prev.type = "star";
					prev.value = "*";
					prev.output = star;
					state.output += prev.output;
				}
			}
			if (extglobs.length && tok.type !== "paren") extglobs[extglobs.length - 1].inner += tok.value;
			if (tok.value || tok.output) append(tok);
			if (prev && prev.type === "text" && tok.type === "text") {
				prev.output = (prev.output || prev.value) + tok.value;
				prev.value += tok.value;
				return;
			}
			tok.prev = prev;
			tokens.push(tok);
			prev = tok;
		};
		const extglobOpen = (type, value$1) => {
			const token = {
				...EXTGLOB_CHARS[value$1],
				conditions: 1,
				inner: ""
			};
			token.prev = prev;
			token.parens = state.parens;
			token.output = state.output;
			token.startIndex = state.index;
			token.tokensIndex = tokens.length;
			const output = (opts.capture ? "(" : "") + token.open;
			increment("parens");
			push({
				type,
				value: value$1,
				output: state.output ? "" : ONE_CHAR$1
			});
			push({
				type: "paren",
				extglob: true,
				value: advance(),
				output
			});
			extglobs.push(token);
		};
		const extglobClose = (token) => {
			const literal = input.slice(token.startIndex, state.index + 1);
			const analysis = analyzeRepeatedExtglob(input.slice(token.startIndex + 2, state.index), opts);
			if ((token.type === "plus" || token.type === "star") && analysis.risky) {
				const safeOutput = analysis.safeOutput ? (token.output ? "" : ONE_CHAR$1) + (opts.capture ? `(${analysis.safeOutput})` : analysis.safeOutput) : void 0;
				const open = tokens[token.tokensIndex];
				open.type = "text";
				open.value = literal;
				open.output = safeOutput || utils$2.escapeRegex(literal);
				for (let i = token.tokensIndex + 1; i < tokens.length; i++) {
					tokens[i].value = "";
					tokens[i].output = "";
					delete tokens[i].suffix;
				}
				state.output = token.output + open.output;
				state.backtrack = true;
				push({
					type: "paren",
					extglob: true,
					value,
					output: ""
				});
				decrement("parens");
				return;
			}
			let output = token.close + (opts.capture ? ")" : "");
			let rest;
			if (token.type === "negate") {
				let extglobStar = star;
				if (token.inner && token.inner.length > 1 && token.inner.includes("/")) extglobStar = globstar(opts);
				if (extglobStar !== star || eos() || /^\)+$/.test(remaining())) output = token.close = `)$))${extglobStar}`;
				if (token.inner.includes("*") && (rest = remaining()) && /^\.[^\\/.]+$/.test(rest)) output = token.close = `)${parse$1(rest, {
					...options,
					fastpaths: false
				}).output})${extglobStar})`;
				if (token.prev.type === "bos") state.negatedExtglob = true;
			}
			push({
				type: "paren",
				extglob: true,
				value,
				output
			});
			decrement("parens");
		};
		/**
		* Fast paths
		*/
		if (opts.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(input)) {
			let backslashes = false;
			let output = input.replace(REGEX_SPECIAL_CHARS_BACKREF, (m, esc, chars, first, rest, index) => {
				if (first === "\\") {
					backslashes = true;
					return m;
				}
				if (first === "?") {
					if (esc) return esc + first + (rest ? QMARK$1.repeat(rest.length) : "");
					if (index === 0) return qmarkNoDot + (rest ? QMARK$1.repeat(rest.length) : "");
					return QMARK$1.repeat(chars.length);
				}
				if (first === ".") return DOT_LITERAL$1.repeat(chars.length);
				if (first === "*") {
					if (esc) return esc + first + (rest ? star : "");
					return star;
				}
				return esc ? m : `\\${m}`;
			});
			if (backslashes === true) if (opts.unescape === true) output = output.replace(/\\/g, "");
			else output = output.replace(/\\+/g, (m) => {
				return m.length % 2 === 0 ? "\\\\" : m ? "\\" : "";
			});
			if (output === input && opts.contains === true) {
				state.output = input;
				return state;
			}
			state.output = utils$2.wrapOutput(output, state, options);
			return state;
		}
		/**
		* Tokenize input until we reach end-of-string
		*/
		while (!eos()) {
			value = advance();
			if (value === "\0") continue;
			/**
			* Escaped characters
			*/
			if (value === "\\") {
				const next = peek();
				if (next === "/" && opts.bash !== true) continue;
				if (next === "." || next === ";") continue;
				if (!next) {
					value += "\\";
					push({
						type: "text",
						value
					});
					continue;
				}
				const match = /^\\+/.exec(remaining());
				let slashes = 0;
				if (match && match[0].length > 2) {
					slashes = match[0].length;
					state.index += slashes;
					if (slashes % 2 !== 0) value += "\\";
				}
				if (opts.unescape === true) value = advance();
				else value += advance();
				if (state.brackets === 0) {
					push({
						type: "text",
						value
					});
					continue;
				}
			}
			/**
			* If we're inside a regex character class, continue
			* until we reach the closing bracket.
			*/
			if (state.brackets > 0 && (value !== "]" || prev.value === "[" || prev.value === "[^")) {
				if (opts.posix !== false && value === ":") {
					const inner = prev.value.slice(1);
					if (inner.includes("[")) {
						prev.posix = true;
						if (inner.includes(":")) {
							const idx = prev.value.lastIndexOf("[");
							const pre = prev.value.slice(0, idx);
							const posix = POSIX_REGEX_SOURCE[prev.value.slice(idx + 2)];
							if (posix) {
								prev.value = pre + posix;
								state.backtrack = true;
								advance();
								if (!bos.output && tokens.indexOf(prev) === 1) bos.output = ONE_CHAR$1;
								continue;
							}
						}
					}
				}
				if (value === "[" && peek() !== ":" || value === "-" && peek() === "]") value = `\\${value}`;
				if (value === "]" && (prev.value === "[" || prev.value === "[^")) value = `\\${value}`;
				if (opts.posix === true && value === "!" && prev.value === "[") value = "^";
				prev.value += value;
				append({ value });
				continue;
			}
			/**
			* If we're inside a quoted string, continue
			* until we reach the closing double quote.
			*/
			if (state.quotes === 1 && value !== "\"") {
				value = utils$2.escapeRegex(value);
				prev.value += value;
				append({ value });
				continue;
			}
			/**
			* Double quotes
			*/
			if (value === "\"") {
				state.quotes = state.quotes === 1 ? 0 : 1;
				if (opts.keepQuotes === true) push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Parentheses
			*/
			if (value === "(") {
				increment("parens");
				push({
					type: "paren",
					value
				});
				continue;
			}
			if (value === ")") {
				if (state.parens === 0 && opts.strictBrackets === true) throw new SyntaxError(syntaxError("opening", "("));
				const extglob = extglobs[extglobs.length - 1];
				if (extglob && state.parens === extglob.parens + 1) {
					extglobClose(extglobs.pop());
					continue;
				}
				push({
					type: "paren",
					value,
					output: state.parens ? ")" : "\\)"
				});
				decrement("parens");
				continue;
			}
			/**
			* Square brackets
			*/
			if (value === "[") {
				if (opts.nobracket === true || !remaining().includes("]")) {
					if (opts.nobracket !== true && opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
					value = `\\${value}`;
				} else increment("brackets");
				push({
					type: "bracket",
					value
				});
				continue;
			}
			if (value === "]") {
				if (opts.nobracket === true || prev && prev.type === "bracket" && prev.value.length === 1) {
					push({
						type: "text",
						value,
						output: `\\${value}`
					});
					continue;
				}
				if (state.brackets === 0) {
					if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("opening", "["));
					push({
						type: "text",
						value,
						output: `\\${value}`
					});
					continue;
				}
				decrement("brackets");
				const prevValue = prev.value.slice(1);
				if (prev.posix !== true && prevValue[0] === "^" && !prevValue.includes("/")) value = `/${value}`;
				prev.value += value;
				append({ value });
				if (opts.literalBrackets === false || utils$2.hasRegexChars(prevValue)) continue;
				const escaped = utils$2.escapeRegex(prev.value);
				state.output = state.output.slice(0, -prev.value.length);
				if (opts.literalBrackets === true) {
					state.output += escaped;
					prev.value = escaped;
					continue;
				}
				prev.value = `(${capture}${escaped}|${prev.value})`;
				state.output += prev.value;
				continue;
			}
			/**
			* Braces
			*/
			if (value === "{" && opts.nobrace !== true) {
				increment("braces");
				const open = {
					type: "brace",
					value,
					output: "(",
					outputIndex: state.output.length,
					tokensIndex: state.tokens.length
				};
				braces.push(open);
				push(open);
				continue;
			}
			if (value === "}") {
				const brace = braces[braces.length - 1];
				if (opts.nobrace === true || !brace) {
					push({
						type: "text",
						value,
						output: value
					});
					continue;
				}
				let output = ")";
				if (brace.dots === true) {
					const arr = tokens.slice();
					const range = [];
					for (let i = arr.length - 1; i >= 0; i--) {
						tokens.pop();
						if (arr[i].type === "brace") break;
						if (arr[i].type !== "dots") range.unshift(arr[i].value);
					}
					output = expandRange(range, opts);
					state.backtrack = true;
				}
				if (brace.comma !== true && brace.dots !== true) {
					const out = state.output.slice(0, brace.outputIndex);
					const toks = state.tokens.slice(brace.tokensIndex);
					brace.value = brace.output = "\\{";
					value = output = "\\}";
					state.output = out;
					for (const t of toks) state.output += t.output || t.value;
				}
				push({
					type: "brace",
					value,
					output
				});
				decrement("braces");
				braces.pop();
				continue;
			}
			/**
			* Pipes
			*/
			if (value === "|") {
				if (extglobs.length > 0) extglobs[extglobs.length - 1].conditions++;
				push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Commas
			*/
			if (value === ",") {
				let output = value;
				const brace = braces[braces.length - 1];
				if (brace && stack[stack.length - 1] === "braces") {
					brace.comma = true;
					output = "|";
				}
				push({
					type: "comma",
					value,
					output
				});
				continue;
			}
			/**
			* Slashes
			*/
			if (value === "/") {
				if (prev.type === "dot" && state.index === state.start + 1) {
					state.start = state.index + 1;
					state.consumed = "";
					state.output = "";
					tokens.pop();
					prev = bos;
					continue;
				}
				push({
					type: "slash",
					value,
					output: SLASH_LITERAL$1
				});
				continue;
			}
			/**
			* Dots
			*/
			if (value === ".") {
				if (state.braces > 0 && prev.type === "dot") {
					if (prev.value === ".") prev.output = DOT_LITERAL$1;
					const brace = braces[braces.length - 1];
					prev.type = "dots";
					prev.output += value;
					prev.value += value;
					brace.dots = true;
					continue;
				}
				if (state.braces + state.parens === 0 && prev.type !== "bos" && prev.type !== "slash") {
					push({
						type: "text",
						value,
						output: DOT_LITERAL$1
					});
					continue;
				}
				push({
					type: "dot",
					value,
					output: DOT_LITERAL$1
				});
				continue;
			}
			/**
			* Question marks
			*/
			if (value === "?") {
				if (!(prev && prev.value === "(") && opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
					extglobOpen("qmark", value);
					continue;
				}
				if (prev && prev.type === "paren") {
					const next = peek();
					let output = value;
					if (prev.value === "(" && !/[!=<:]/.test(next) || next === "<" && !/<([!=]|\w+>)/.test(remaining())) output = `\\${value}`;
					push({
						type: "text",
						value,
						output
					});
					continue;
				}
				if (opts.dot !== true && (prev.type === "slash" || prev.type === "bos")) {
					push({
						type: "qmark",
						value,
						output: QMARK_NO_DOT
					});
					continue;
				}
				push({
					type: "qmark",
					value,
					output: QMARK$1
				});
				continue;
			}
			/**
			* Exclamation
			*/
			if (value === "!") {
				if (opts.noextglob !== true && peek() === "(") {
					if (peek(2) !== "?" || !/[!=<:]/.test(peek(3))) {
						extglobOpen("negate", value);
						continue;
					}
				}
				if (opts.nonegate !== true && state.index === 0) {
					negate();
					continue;
				}
			}
			/**
			* Plus
			*/
			if (value === "+") {
				if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
					extglobOpen("plus", value);
					continue;
				}
				if (prev && prev.value === "(" || opts.regex === false) {
					push({
						type: "plus",
						value,
						output: PLUS_LITERAL$1
					});
					continue;
				}
				if (prev && (prev.type === "bracket" || prev.type === "paren" || prev.type === "brace") || state.parens > 0) {
					push({
						type: "plus",
						value
					});
					continue;
				}
				push({
					type: "plus",
					value: PLUS_LITERAL$1
				});
				continue;
			}
			/**
			* Plain text
			*/
			if (value === "@") {
				if (opts.noextglob !== true && peek() === "(" && peek(2) !== "?") {
					push({
						type: "at",
						extglob: true,
						value,
						output: ""
					});
					continue;
				}
				push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Plain text
			*/
			if (value !== "*") {
				if (value === "$" || value === "^") value = `\\${value}`;
				const match = REGEX_NON_SPECIAL_CHARS.exec(remaining());
				if (match) {
					value += match[0];
					state.index += match[0].length;
				}
				push({
					type: "text",
					value
				});
				continue;
			}
			/**
			* Stars
			*/
			if (prev && (prev.type === "globstar" || prev.star === true)) {
				prev.type = "star";
				prev.star = true;
				prev.value += value;
				prev.output = star;
				state.backtrack = true;
				state.globstar = true;
				consume(value);
				continue;
			}
			let rest = remaining();
			if (opts.noextglob !== true && /^\([^?]/.test(rest)) {
				extglobOpen("star", value);
				continue;
			}
			if (prev.type === "star") {
				if (opts.noglobstar === true) {
					consume(value);
					continue;
				}
				const prior = prev.prev;
				const before = prior.prev;
				const isStart = prior.type === "slash" || prior.type === "bos";
				const afterStar = before && (before.type === "star" || before.type === "globstar");
				if (opts.bash === true && (!isStart || rest[0] && rest[0] !== "/")) {
					push({
						type: "star",
						value,
						output: ""
					});
					continue;
				}
				const isBrace = state.braces > 0 && (prior.type === "comma" || prior.type === "brace");
				const isExtglob = extglobs.length && (prior.type === "pipe" || prior.type === "paren");
				if (!isStart && prior.type !== "paren" && !isBrace && !isExtglob) {
					push({
						type: "star",
						value,
						output: ""
					});
					continue;
				}
				while (rest.slice(0, 3) === "/**") {
					const after = input[state.index + 4];
					if (after && after !== "/") break;
					rest = rest.slice(3);
					consume("/**", 3);
				}
				if (prior.type === "bos" && eos()) {
					prev.type = "globstar";
					prev.value += value;
					prev.output = globstar(opts);
					state.output = prev.output;
					state.globstar = true;
					consume(value);
					continue;
				}
				if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && eos()) {
					state.output = state.output.slice(0, -(prior.output + prev.output).length);
					prior.output = `(?:${prior.output}`;
					prev.type = "globstar";
					prev.output = globstar(opts) + (opts.strictSlashes ? ")" : "|$)");
					prev.value += value;
					state.globstar = true;
					state.output += prior.output + prev.output;
					consume(value);
					continue;
				}
				if (prior.type === "slash" && prior.prev.type !== "bos" && rest[0] === "/") {
					const end = rest[1] !== void 0 ? "|$" : "";
					state.output = state.output.slice(0, -(prior.output + prev.output).length);
					prior.output = `(?:${prior.output}`;
					prev.type = "globstar";
					prev.output = `${globstar(opts)}${SLASH_LITERAL$1}|${SLASH_LITERAL$1}${end})`;
					prev.value += value;
					state.output += prior.output + prev.output;
					state.globstar = true;
					consume(value + advance());
					push({
						type: "slash",
						value: "/",
						output: ""
					});
					continue;
				}
				if (prior.type === "bos" && rest[0] === "/") {
					prev.type = "globstar";
					prev.value += value;
					prev.output = `(?:^|${SLASH_LITERAL$1}|${globstar(opts)}${SLASH_LITERAL$1})`;
					state.output = prev.output;
					state.globstar = true;
					consume(value + advance());
					push({
						type: "slash",
						value: "/",
						output: ""
					});
					continue;
				}
				state.output = state.output.slice(0, -prev.output.length);
				prev.type = "globstar";
				prev.output = globstar(opts);
				prev.value += value;
				state.output += prev.output;
				state.globstar = true;
				consume(value);
				continue;
			}
			const token = {
				type: "star",
				value,
				output: star
			};
			if (opts.bash === true) {
				token.output = ".*?";
				if (prev.type === "bos" || prev.type === "slash") token.output = nodot + token.output;
				push(token);
				continue;
			}
			if (prev && (prev.type === "bracket" || prev.type === "paren") && opts.regex === true) {
				token.output = value;
				push(token);
				continue;
			}
			if (state.index === state.start || prev.type === "slash" || prev.type === "dot") {
				if (prev.type === "dot") {
					state.output += NO_DOT_SLASH;
					prev.output += NO_DOT_SLASH;
				} else if (opts.dot === true) {
					state.output += NO_DOTS_SLASH;
					prev.output += NO_DOTS_SLASH;
				} else {
					state.output += nodot;
					prev.output += nodot;
				}
				if (peek() !== "*") {
					state.output += ONE_CHAR$1;
					prev.output += ONE_CHAR$1;
				}
			}
			push(token);
		}
		while (state.brackets > 0) {
			if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
			state.output = utils$2.escapeLast(state.output, "[");
			decrement("brackets");
		}
		while (state.parens > 0) {
			if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
			state.output = utils$2.escapeLast(state.output, "(");
			decrement("parens");
		}
		while (state.braces > 0) {
			if (opts.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
			state.output = utils$2.escapeLast(state.output, "{");
			decrement("braces");
		}
		if (opts.strictSlashes !== true && (prev.type === "star" || prev.type === "bracket")) push({
			type: "maybe_slash",
			value: "",
			output: `${SLASH_LITERAL$1}?`
		});
		if (state.backtrack === true) {
			state.output = "";
			for (const token of state.tokens) {
				state.output += token.output != null ? token.output : token.value;
				if (token.suffix) state.output += token.suffix;
			}
		}
		return state;
	};
	/**
	* Fast paths for creating regular expressions for common glob patterns.
	* This can significantly speed up processing and has very little downside
	* impact when none of the fast paths match.
	*/
	parse$1.fastpaths = (input, options) => {
		const opts = { ...options };
		const max = typeof opts.maxLength === "number" ? Math.min(MAX_LENGTH, opts.maxLength) : MAX_LENGTH;
		const len = input.length;
		if (len > max) throw new SyntaxError(`Input length: ${len}, exceeds maximum allowed length: ${max}`);
		input = REPLACEMENTS[input] || input;
		const { DOT_LITERAL: DOT_LITERAL$1, SLASH_LITERAL: SLASH_LITERAL$1, ONE_CHAR: ONE_CHAR$1, DOTS_SLASH: DOTS_SLASH$1, NO_DOT, NO_DOTS, NO_DOTS_SLASH, STAR, START_ANCHOR: START_ANCHOR$1 } = constants$1.globChars(opts.windows);
		const nodot = opts.dot ? NO_DOTS : NO_DOT;
		const slashDot = opts.dot ? NO_DOTS_SLASH : NO_DOT;
		const capture = opts.capture ? "" : "?:";
		const state = {
			negated: false,
			prefix: ""
		};
		let star = opts.bash === true ? ".*?" : STAR;
		if (opts.capture) star = `(${star})`;
		const globstar = (opts$1) => {
			if (opts$1.noglobstar === true) return star;
			return `(${capture}(?:(?!${START_ANCHOR$1}${opts$1.dot ? DOTS_SLASH$1 : DOT_LITERAL$1}).)*?)`;
		};
		const create = (str) => {
			switch (str) {
				case "*": return `${nodot}${ONE_CHAR$1}${star}`;
				case ".*": return `${DOT_LITERAL$1}${ONE_CHAR$1}${star}`;
				case "*.*": return `${nodot}${star}${DOT_LITERAL$1}${ONE_CHAR$1}${star}`;
				case "*/*": return `${nodot}${star}${SLASH_LITERAL$1}${ONE_CHAR$1}${slashDot}${star}`;
				case "**": return nodot + globstar(opts);
				case "**/*": return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL$1})?${slashDot}${ONE_CHAR$1}${star}`;
				case "**/*.*": return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL$1})?${slashDot}${star}${DOT_LITERAL$1}${ONE_CHAR$1}${star}`;
				case "**/.*": return `(?:${nodot}${globstar(opts)}${SLASH_LITERAL$1})?${DOT_LITERAL$1}${ONE_CHAR$1}${star}`;
				default: {
					const match = /^(.*?)\.(\w+)$/.exec(str);
					if (!match) return;
					const source$1 = create(match[1]);
					if (!source$1) return;
					return source$1 + DOT_LITERAL$1 + match[2];
				}
			}
		};
		let source = create(utils$2.removePrefix(input, state));
		if (source && opts.strictSlashes !== true) source += `${SLASH_LITERAL$1}?`;
		return source;
	};
	module.exports = parse$1;
}) });

//#endregion
//#region ../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/picomatch.js
var require_picomatch$1 = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/lib/picomatch.js": ((exports, module) => {
	const scan = require_scan();
	const parse = require_parse();
	const utils$1 = require_utils();
	const constants = require_constants();
	const isObject = (val) => val && typeof val === "object" && !Array.isArray(val);
	/**
	* Creates a matcher function from one or more glob patterns. The
	* returned function takes a string to match as its first argument,
	* and returns true if the string is a match. The returned matcher
	* function also takes a boolean as the second argument that, when true,
	* returns an object with additional information.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch(glob[, options]);
	*
	* const isMatch = picomatch('*.!(*a)');
	* console.log(isMatch('a.a')); //=> false
	* console.log(isMatch('a.b')); //=> true
	* ```
	* @name picomatch
	* @param {String|Array} `globs` One or more glob patterns.
	* @param {Object=} `options`
	* @return {Function=} Returns a matcher function.
	* @api public
	*/
	const picomatch$1 = (glob, options, returnState = false) => {
		if (Array.isArray(glob)) {
			const fns = glob.map((input) => picomatch$1(input, options, returnState));
			const arrayMatcher = (str) => {
				for (const isMatch of fns) {
					const state$1 = isMatch(str);
					if (state$1) return state$1;
				}
				return false;
			};
			return arrayMatcher;
		}
		const isState = isObject(glob) && glob.tokens && glob.input;
		if (glob === "" || typeof glob !== "string" && !isState) throw new TypeError("Expected pattern to be a non-empty string");
		const opts = options || {};
		const posix = opts.windows;
		const regex = isState ? picomatch$1.compileRe(glob, options) : picomatch$1.makeRe(glob, options, false, true);
		const state = regex.state;
		delete regex.state;
		let isIgnored = () => false;
		if (opts.ignore) {
			const ignoreOpts = {
				...options,
				ignore: null,
				onMatch: null,
				onResult: null
			};
			isIgnored = picomatch$1(opts.ignore, ignoreOpts, returnState);
		}
		const matcher = (input, returnObject = false) => {
			const { isMatch, match, output } = picomatch$1.test(input, regex, options, {
				glob,
				posix
			});
			const result = {
				glob,
				state,
				regex,
				posix,
				input,
				output,
				match,
				isMatch
			};
			if (typeof opts.onResult === "function") opts.onResult(result);
			if (isMatch === false) {
				result.isMatch = false;
				return returnObject ? result : false;
			}
			if (isIgnored(input)) {
				if (typeof opts.onIgnore === "function") opts.onIgnore(result);
				result.isMatch = false;
				return returnObject ? result : false;
			}
			if (typeof opts.onMatch === "function") opts.onMatch(result);
			return returnObject ? result : true;
		};
		if (returnState) matcher.state = state;
		return matcher;
	};
	/**
	* Test `input` with the given `regex`. This is used by the main
	* `picomatch()` function to test the input string.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.test(input, regex[, options]);
	*
	* console.log(picomatch.test('foo/bar', /^(?:([^/]*?)\/([^/]*?))$/));
	* // { isMatch: true, match: [ 'foo/', 'foo', 'bar' ], output: 'foo/bar' }
	* ```
	* @param {String} `input` String to test.
	* @param {RegExp} `regex`
	* @return {Object} Returns an object with matching info.
	* @api public
	*/
	picomatch$1.test = (input, regex, options, { glob, posix } = {}) => {
		if (typeof input !== "string") throw new TypeError("Expected input to be a string");
		if (input === "") return {
			isMatch: false,
			output: ""
		};
		const opts = options || {};
		const format = opts.format || (posix ? utils$1.toPosixSlashes : null);
		let match = input === glob;
		let output = match && format ? format(input) : input;
		if (match === false) {
			output = format ? format(input) : input;
			match = output === glob;
		}
		if (match === false || opts.capture === true) if (opts.matchBase === true || opts.basename === true) match = picomatch$1.matchBase(input, regex, options, posix);
		else match = regex.exec(output);
		return {
			isMatch: Boolean(match),
			match,
			output
		};
	};
	/**
	* Match the basename of a filepath.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.matchBase(input, glob[, options]);
	* console.log(picomatch.matchBase('foo/bar.js', '*.js'); // true
	* ```
	* @param {String} `input` String to test.
	* @param {RegExp|String} `glob` Glob pattern or regex created by [.makeRe](#makeRe).
	* @return {Boolean}
	* @api public
	*/
	picomatch$1.matchBase = (input, glob, options) => {
		return (glob instanceof RegExp ? glob : picomatch$1.makeRe(glob, options)).test(utils$1.basename(input));
	};
	/**
	* Returns true if **any** of the given glob `patterns` match the specified `string`.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.isMatch(string, patterns[, options]);
	*
	* console.log(picomatch.isMatch('a.a', ['b.*', '*.a'])); //=> true
	* console.log(picomatch.isMatch('a.a', 'b.*')); //=> false
	* ```
	* @param {String|Array} str The string to test.
	* @param {String|Array} patterns One or more glob patterns to use for matching.
	* @param {Object} [options] See available [options](#options).
	* @return {Boolean} Returns true if any patterns match `str`
	* @api public
	*/
	picomatch$1.isMatch = (str, patterns, options) => picomatch$1(patterns, options)(str);
	/**
	* Parse a glob pattern to create the source string for a regular
	* expression.
	*
	* ```js
	* const picomatch = require('picomatch');
	* const result = picomatch.parse(pattern[, options]);
	* ```
	* @param {String} `pattern`
	* @param {Object} `options`
	* @return {Object} Returns an object with useful properties and output to be used as a regex source string.
	* @api public
	*/
	picomatch$1.parse = (pattern, options) => {
		if (Array.isArray(pattern)) return pattern.map((p) => picomatch$1.parse(p, options));
		return parse(pattern, {
			...options,
			fastpaths: false
		});
	};
	/**
	* Scan a glob pattern to separate the pattern into segments.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.scan(input[, options]);
	*
	* const result = picomatch.scan('!./foo/*.js');
	* console.log(result);
	* { prefix: '!./',
	*   input: '!./foo/*.js',
	*   start: 3,
	*   base: 'foo',
	*   glob: '*.js',
	*   isBrace: false,
	*   isBracket: false,
	*   isGlob: true,
	*   isExtglob: false,
	*   isGlobstar: false,
	*   negated: true }
	* ```
	* @param {String} `input` Glob pattern to scan.
	* @param {Object} `options`
	* @return {Object} Returns an object with
	* @api public
	*/
	picomatch$1.scan = (input, options) => scan(input, options);
	/**
	* Compile a regular expression from the `state` object returned by the
	* [parse()](#parse) method.
	*
	* ```js
	* const picomatch = require('picomatch');
	* const state = picomatch.parse('*.js');
	* // picomatch.compileRe(state[, options]);
	*
	* console.log(picomatch.compileRe(state));
	* //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	* ```
	* @param {Object} `state`
	* @param {Object} `options`
	* @param {Boolean} `returnOutput` Intended for implementors, this argument allows you to return the raw output from the parser.
	* @param {Boolean} `returnState` Adds the state to a `state` property on the returned regex. Useful for implementors and debugging.
	* @return {RegExp}
	* @api public
	*/
	picomatch$1.compileRe = (state, options, returnOutput = false, returnState = false) => {
		if (returnOutput === true) return state.output;
		const opts = options || {};
		const prepend = opts.contains ? "" : "^";
		const append = opts.contains ? "" : "$";
		let source = `${prepend}(?:${state.output})${append}`;
		if (state && state.negated === true) source = `^(?!${source}).*$`;
		const regex = picomatch$1.toRegex(source, options);
		if (returnState === true) regex.state = state;
		return regex;
	};
	/**
	* Create a regular expression from a parsed glob pattern.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.makeRe(state[, options]);
	*
	* const result = picomatch.makeRe('*.js');
	* console.log(result);
	* //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	* ```
	* @param {String} `state` The object returned from the `.parse` method.
	* @param {Object} `options`
	* @param {Boolean} `returnOutput` Implementors may use this argument to return the compiled output, instead of a regular expression. This is not exposed on the options to prevent end-users from mutating the result.
	* @param {Boolean} `returnState` Implementors may use this argument to return the state from the parsed glob with the returned regular expression.
	* @return {RegExp} Returns a regex created from the given pattern.
	* @api public
	*/
	picomatch$1.makeRe = (input, options = {}, returnOutput = false, returnState = false) => {
		if (!input || typeof input !== "string") throw new TypeError("Expected a non-empty string");
		let parsed = {
			negated: false,
			fastpaths: true
		};
		if (options.fastpaths !== false && (input[0] === "." || input[0] === "*")) parsed.output = parse.fastpaths(input, options);
		if (!parsed.output) parsed = parse(input, options);
		return picomatch$1.compileRe(parsed, options, returnOutput, returnState);
	};
	/**
	* Create a regular expression from the given regex source string.
	*
	* ```js
	* const picomatch = require('picomatch');
	* // picomatch.toRegex(source[, options]);
	*
	* const { output } = picomatch.parse('*.js');
	* console.log(picomatch.toRegex(output));
	* //=> /^(?:(?!\.)(?=.)[^/]*?\.js)$/
	* ```
	* @param {String} `source` Regular expression source string.
	* @param {Object} `options`
	* @return {RegExp}
	* @api public
	*/
	picomatch$1.toRegex = (source, options) => {
		try {
			const opts = options || {};
			return new RegExp(source, opts.flags || (opts.nocase ? "i" : ""));
		} catch (err) {
			if (options && options.debug === true) throw err;
			return /$^/;
		}
	};
	/**
	* Picomatch constants.
	* @return {Object}
	*/
	picomatch$1.constants = constants;
	/**
	* Expose "picomatch"
	*/
	module.exports = picomatch$1;
}) });

//#endregion
//#region ../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/index.js
var require_picomatch = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.4/node_modules/picomatch/index.js": ((exports, module) => {
	const pico = require_picomatch$1();
	const utils = require_utils();
	function picomatch(glob, options, returnState = false) {
		if (options && (options.windows === null || options.windows === void 0)) options = {
			...options,
			windows: utils.isWindows()
		};
		return pico(glob, options, returnState);
	}
	Object.assign(picomatch, pico);
	module.exports = picomatch;
}) });

//#endregion
//#region ../../node_modules/.pnpm/nanoid@5.1.6/node_modules/nanoid/index.browser.js
var import_picomatch = /* @__PURE__ */ __toESM(require_picomatch(), 1);
let random = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
let customRandom = (alphabet, defaultSize, getRandom) => {
	let mask = (2 << Math.log2(alphabet.length - 1)) - 1;
	let step = -~(1.6 * mask * defaultSize / alphabet.length);
	return (size = defaultSize) => {
		let id = "";
		while (true) {
			let bytes = getRandom(step);
			let j = step | 0;
			while (j--) {
				id += alphabet[bytes[j] & mask] || "";
				if (id.length >= size) return id;
			}
		}
	};
};
let customAlphabet = (alphabet, size = 21) => customRandom(alphabet, size | 0, random);

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.0-beta.1/node_modules/@moeru/eventa/dist/context-ex8urwfs.mjs
function nanoid() {
	return customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 16)();
}
let EventaType = /* @__PURE__ */ function(EventaType$1) {
	EventaType$1["Event"] = "event";
	EventaType$1["MatchExpression"] = "matchExpression";
	return EventaType$1;
}({});
let EventaFlowDirection = /* @__PURE__ */ function(EventaFlowDirection$1) {
	EventaFlowDirection$1["Inbound"] = "inbound";
	EventaFlowDirection$1["Outbound"] = "outbound";
	return EventaFlowDirection$1;
}({});
function defineInboundEventa(id) {
	return {
		...defineEventa(id),
		_flowDirection: EventaFlowDirection.Inbound
	};
}
function defineOutboundEventa(id) {
	return {
		...defineEventa(id),
		_flowDirection: EventaFlowDirection.Outbound
	};
}
function defineEventa(id) {
	if (!id) id = nanoid();
	return {
		id,
		type: EventaType.Event
	};
}
function and(...matchExpression) {
	return {
		id: nanoid(),
		type: EventaType.MatchExpression,
		matcher: (event) => {
			return matchExpression.every((m) => m.matcher ? m.matcher(event) : false);
		}
	};
}
function matchBy(matchExpressionPossibleValues, inverted) {
	const id = nanoid();
	let matcher = () => false;
	if (typeof matchExpressionPossibleValues === "string") matcher = (eventa) => {
		return (0, import_picomatch.default)(matchExpressionPossibleValues)(eventa.id);
	};
	else if (typeof matchExpressionPossibleValues === "object") {
		if ("ids" in matchExpressionPossibleValues) matcher = (event) => {
			if (inverted) return !matchExpressionPossibleValues.ids.includes(event.id);
			return matchExpressionPossibleValues.ids.includes(event.id);
		};
		else if ("eventa" in matchExpressionPossibleValues) matcher = (event) => {
			if (inverted) return !matchExpressionPossibleValues.eventa.some((e) => e.id === event.id);
			return matchExpressionPossibleValues.eventa.some((e) => e.id === event.id);
		};
		else if ("types" in matchExpressionPossibleValues) matcher = (event) => {
			if (typeof event.type === "undefined") return false;
			if (inverted) return !matchExpressionPossibleValues.types.includes(event.type);
			return matchExpressionPossibleValues.types.includes(event.type);
		};
	} else if (matchExpressionPossibleValues instanceof RegExp) matcher = (event) => {
		if (inverted) return !matchExpressionPossibleValues.test(event.id);
		return matchExpressionPossibleValues.test(event.id);
	};
	else if (typeof matchExpressionPossibleValues === "function") matcher = matchExpressionPossibleValues;
	return {
		id,
		type: EventaType.MatchExpression,
		matcher
	};
}
function createContext$1(props = {}) {
	const listeners = /* @__PURE__ */ new Map();
	const onceListeners = /* @__PURE__ */ new Map();
	const matchExpressions = /* @__PURE__ */ new Map();
	const matchExpressionListeners = /* @__PURE__ */ new Map();
	const matchExpressionOnceListeners = /* @__PURE__ */ new Map();
	const hooks = props.adapter?.(emit).hooks;
	function emit(event, payload, options) {
		const emittingPayload = {
			...event,
			body: payload
		};
		for (const listener of listeners.get(event.id) || []) {
			listener(emittingPayload, options);
			hooks?.onReceived?.(event.id, emittingPayload);
		}
		for (const onceListener of onceListeners.get(event.id) || []) {
			onceListener(emittingPayload, options);
			hooks?.onReceived?.(event.id, emittingPayload);
			onceListeners.get(event.id)?.delete(onceListener);
		}
		for (const matchExpression of matchExpressions.values()) if (matchExpression.matcher) {
			if (!matchExpression.matcher(emittingPayload)) continue;
			for (const listener of matchExpressionListeners.get(matchExpression.id) || []) {
				listener(emittingPayload, options);
				hooks?.onReceived?.(matchExpression.id, emittingPayload);
			}
			for (const onceListener of matchExpressionOnceListeners.get(matchExpression.id) || []) {
				onceListener(emittingPayload, options);
				hooks?.onReceived?.(matchExpression.id, emittingPayload);
				matchExpressionOnceListeners.get(matchExpression.id)?.delete(onceListener);
			}
		}
		hooks?.onSent(event.id, emittingPayload, options);
	}
	return {
		get listeners() {
			return listeners;
		},
		get onceListeners() {
			return onceListeners;
		},
		emit,
		on(eventOrMatchExpression, handler) {
			if (eventOrMatchExpression.type === EventaType.Event) {
				const event = eventOrMatchExpression;
				if (!listeners.has(event.id)) listeners.set(event.id, /* @__PURE__ */ new Set());
				listeners.get(event.id)?.add(handler);
				return () => listeners.get(event.id)?.delete(handler);
			}
			if (eventOrMatchExpression.type === EventaType.MatchExpression) {
				const matchExpression = eventOrMatchExpression;
				if (!matchExpressions.has(matchExpression.id)) matchExpressions.set(matchExpression.id, matchExpression);
				if (!matchExpressionListeners.has(matchExpression.id)) matchExpressionListeners.set(matchExpression.id, /* @__PURE__ */ new Set());
				matchExpressionListeners.get(matchExpression.id)?.add(handler);
				return () => matchExpressionListeners.get(matchExpression.id)?.delete(handler);
			}
			return () => void 0;
		},
		once(eventOrMatchExpression, handler) {
			if (eventOrMatchExpression.type === EventaType.Event) {
				const event = eventOrMatchExpression;
				if (!onceListeners.has(event.id)) onceListeners.set(event.id, /* @__PURE__ */ new Set());
				onceListeners.get(event.id)?.add(handler);
				return () => onceListeners.get(event.id)?.delete(handler);
			}
			if (eventOrMatchExpression.type === EventaType.MatchExpression) {
				const matchExpression = eventOrMatchExpression;
				if (!matchExpressions.has(matchExpression.id)) matchExpressions.set(matchExpression.id, matchExpression);
				if (!matchExpressionListeners.has(matchExpression.id)) matchExpressionListeners.set(matchExpression.id, /* @__PURE__ */ new Set());
				matchExpressionOnceListeners.get(matchExpression.id)?.add(handler);
				return () => matchExpressionOnceListeners.get(matchExpression.id)?.delete(handler);
			}
			return () => void 0;
		},
		off(eventOrMatchExpression, handler) {
			switch (eventOrMatchExpression.type) {
				case EventaType.Event:
					if (handler !== void 0) {
						listeners.get(eventOrMatchExpression.id)?.delete(handler);
						onceListeners.get(eventOrMatchExpression.id)?.delete(handler);
						break;
					}
					listeners.delete(eventOrMatchExpression.id);
					onceListeners.delete(eventOrMatchExpression.id);
					break;
				case EventaType.MatchExpression:
					if (handler !== void 0) {
						matchExpressionListeners.get(eventOrMatchExpression.id)?.delete(handler);
						matchExpressionOnceListeners.get(eventOrMatchExpression.id)?.delete(handler);
						break;
					}
					matchExpressionListeners.delete(eventOrMatchExpression.id);
					matchExpressionOnceListeners.delete(eventOrMatchExpression.id);
					break;
			}
		}
	};
}

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.0-beta.1/node_modules/@moeru/eventa/dist/src-DZ7si0kE.mjs
/**
* Register a fatal event/match expression that should terminate pending invokes.
* Adapters call this to wire their error events (e.g. worker error) into invoke.
*/
function registerInvokeAbortEventListeners(ctx, eventOrMatch) {
	const extensions = ctx.extensions ?? {};
	const internal = extensions.__internal ?? {};
	const invokeInternal = internal.invoke ?? {};
	const abortOnEvents = Array.isArray(invokeInternal.abortOnEvents) ? invokeInternal.abortOnEvents : [];
	if (!abortOnEvents.includes(eventOrMatch)) abortOnEvents.push(eventOrMatch);
	invokeInternal.abortOnEvents = abortOnEvents;
	internal.invoke = invokeInternal;
	extensions.__internal = internal;
	ctx.extensions = extensions;
	return invokeInternal;
}
let InvokeEventType = /* @__PURE__ */ function(InvokeEventType$1) {
	InvokeEventType$1[InvokeEventType$1["SendEvent"] = 0] = "SendEvent";
	InvokeEventType$1[InvokeEventType$1["SendEventError"] = 1] = "SendEventError";
	InvokeEventType$1[InvokeEventType$1["SendEventStreamEnd"] = 2] = "SendEventStreamEnd";
	InvokeEventType$1[InvokeEventType$1["SendEventAbort"] = 3] = "SendEventAbort";
	InvokeEventType$1[InvokeEventType$1["ReceiveEvent"] = 4] = "ReceiveEvent";
	InvokeEventType$1[InvokeEventType$1["ReceiveEventError"] = 5] = "ReceiveEventError";
	InvokeEventType$1[InvokeEventType$1["ReceiveEventStreamEnd"] = 6] = "ReceiveEventStreamEnd";
	return InvokeEventType$1;
}({});
function defineInvokeEventa(tag) {
	if (!tag) tag = nanoid();
	return {
		sendEvent: {
			...defineEventa(`${tag}-send`),
			invokeType: InvokeEventType.SendEvent
		},
		sendEventError: {
			...defineEventa(`${tag}-send-error`),
			invokeType: InvokeEventType.SendEventError
		},
		sendEventStreamEnd: {
			...defineEventa(`${tag}-send-stream-end`),
			invokeType: InvokeEventType.SendEventStreamEnd
		},
		sendEventAbort: {
			...defineEventa(`${tag}-send-abort`),
			invokeType: InvokeEventType.SendEventAbort
		},
		receiveEvent: {
			...defineEventa(`${tag}-receive`),
			invokeType: InvokeEventType.ReceiveEvent
		},
		receiveEventError: {
			...defineEventa(`${tag}-receive-error`),
			invokeType: InvokeEventType.ReceiveEventError
		},
		receiveEventStreamEnd: {
			...defineEventa(`${tag}-receive-stream-end`),
			invokeType: InvokeEventType.ReceiveEventStreamEnd
		}
	};
}
function isInvokeEventa(event) {
	if (typeof event !== "object") return false;
	if ("invokeType" in event) return true;
	return false;
}
function isReceiveEvent(event) {
	if (!isInvokeEventa(event)) return false;
	return event.invokeType === InvokeEventType.ReceiveEvent || event.invokeType === InvokeEventType.ReceiveEventError || event.invokeType === InvokeEventType.ReceiveEventStreamEnd;
}
function createAbortError(reason) {
	if (reason instanceof Error && reason.name === "AbortError") return reason;
	if (typeof DOMException !== "undefined") try {
		return new DOMException(reason ? String(reason) : "Aborted", "AbortError");
	} catch {}
	const error = reason instanceof Error ? reason : new Error(reason ? String(reason) : "Aborted");
	error.name = "AbortError";
	return error;
}
function isExtendableInvokeResponseLike(value) {
	if (!isReceiveEvent(value)) return false;
	return typeof value.body?.content === "object" && value.body?.content != null && "response" in value.body.content && (!("invokeResponse" in value.body.content) || "invokeResponse" in value.body.content && (typeof value.body.content.invokeResponse === "object" || typeof value.body.content.invokeResponse === "undefined"));
}
/**
* Define a unary invoke handler (server side).
*
* The handler can accept a unary or streaming request; it must return
* a single response (or an extendable response envelope).
*
* @example
* ```ts
* const events = defineInvokeEventa<{ id: string }, { name: string }>()
*
* defineInvokeHandler(serverCtx, events, ({ name }) => ({
*   id: `user-${name}`,
* }))
* ```
*
* @param ctx Event context on the handler/server side.
* @param event Invoke event definition created by `defineInvokeEventa`.
* @param handler Handler that returns a response (or response + metadata).
*/
function defineInvokeHandler(ctx, event, handler) {
	if (!ctx.invokeHandlers) ctx.invokeHandlers = /* @__PURE__ */ new Map();
	let handlers = ctx.invokeHandlers?.get(event.sendEvent.id);
	if (!handlers) {
		handlers = /* @__PURE__ */ new Map();
		ctx.invokeHandlers?.set(event.sendEvent.id, handlers);
	}
	let internalHandler = handlers.get(handler);
	if (!internalHandler) {
		const streamStates = /* @__PURE__ */ new Map();
		const abortControllers = /* @__PURE__ */ new Map();
		const abortReasons = /* @__PURE__ */ new Map();
		const scheduleAbort = (controller, reason) => {
			if (typeof queueMicrotask !== "undefined") {
				queueMicrotask(() => controller.abort(reason));
				return;
			}
			Promise.resolve().then(() => controller.abort(reason));
		};
		const handleInvoke = async (invokeId, payload, options) => {
			const abortController = new AbortController();
			abortControllers.set(invokeId, abortController);
			if (abortReasons.has(invokeId)) scheduleAbort(abortController, abortReasons.get(invokeId));
			const handlerOptions = options ? {
				...options,
				abortController
			} : { abortController };
			try {
				const response = await handler(payload, handlerOptions);
				ctx.emit({
					...defineEventa(`${event.receiveEvent.id}-${invokeId}`),
					invokeType: event.receiveEvent.invokeType
				}, {
					invokeId,
					content: response
				}, options);
			} catch (error) {
				ctx.emit({
					...defineEventa(`${event.receiveEventError.id}-${invokeId}`),
					invokeType: event.receiveEventError.invokeType
				}, {
					invokeId,
					content: { error }
				}, options);
			} finally {
				abortControllers.delete(invokeId);
				abortReasons.delete(invokeId);
			}
		};
		const onSend = async (payload, options) => {
			if (!payload.body) return;
			if (!payload.body.invokeId) return;
			const invokeId = payload.body.invokeId;
			if (payload.body.isReqStream) {
				let controller = streamStates.get(invokeId);
				if (!controller) {
					let localController;
					const reqStream = new ReadableStream({ start(c) {
						localController = c;
					} });
					controller = localController;
					streamStates.set(invokeId, controller);
					handleInvoke(invokeId, reqStream, options);
				}
				controller.enqueue(payload.body.content);
				return;
			}
			handleInvoke(invokeId, payload.body?.content, options);
		};
		const onSendStreamEnd = (payload, options) => {
			if (!payload.body) return;
			if (!payload.body.invokeId) return;
			const invokeId = payload.body.invokeId;
			let controller = streamStates.get(invokeId);
			if (!controller) {
				let localController;
				const reqStream = new ReadableStream({ start(c) {
					localController = c;
				} });
				controller = localController;
				streamStates.set(invokeId, controller);
				handleInvoke(invokeId, reqStream, options);
			}
			controller.close();
			streamStates.delete(invokeId);
		};
		const onSendAbort = (payload, options) => {
			if (!payload.body) return;
			if (!payload.body.invokeId) return;
			const invokeId = payload.body.invokeId;
			const reason = payload.body.content;
			const abortController = abortControllers.get(invokeId);
			if (!abortController) {
				abortReasons.set(invokeId, reason);
				let streamController$1 = streamStates.get(invokeId);
				if (!streamController$1) {
					let localController;
					const reqStream = new ReadableStream({ start(c) {
						localController = c;
					} });
					streamController$1 = localController;
					streamStates.set(invokeId, streamController$1);
					handleInvoke(invokeId, reqStream, options);
				}
				streamController$1.error(createAbortError(reason));
				streamStates.delete(invokeId);
				return;
			}
			scheduleAbort(abortController, reason);
			const streamController = streamStates.get(invokeId);
			if (streamController) {
				streamController.error(createAbortError(reason));
				streamStates.delete(invokeId);
			}
		};
		internalHandler = {
			onSend,
			onSendStreamEnd,
			onSendAbort
		};
		handlers.set(handler, internalHandler);
		ctx.on(event.sendEvent, internalHandler.onSend);
		ctx.on(event.sendEventStreamEnd, internalHandler.onSendStreamEnd);
		ctx.on(event.sendEventAbort, internalHandler.onSendAbort);
	}
	return () => {
		ctx.off(event.sendEvent, internalHandler.onSend);
		ctx.off(event.sendEventStreamEnd, internalHandler.onSendStreamEnd);
		ctx.off(event.sendEventAbort, internalHandler.onSendAbort);
	};
}

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.0-beta.1/node_modules/@moeru/eventa/dist/shared-BdqIf6iZ.mjs
function generateWorkerPayload(type, payload) {
	return {
		id: nanoid(),
		type,
		payload
	};
}
function parseWorkerPayload(data) {
	return data;
}
function isWorkerEventa(event) {
	return typeof event === "object" && "_workerTransfer" in event && typeof event._workerTransfer === "boolean" && event._workerTransfer === true;
}
const workerErrorEvent = defineEventa();
defineEventa();
function normalizeOnListenerParameters(event, options) {
	let eventPayload = event.body;
	let transfer;
	if (isExtendableInvokeResponseLike(event)) {
		if (event.body.content.invokeResponse?.transfer != null) {
			transfer = event.body.content.invokeResponse.transfer;
			delete event.body.content.invokeResponse;
		}
		eventPayload = {
			...event.body,
			content: event.body.content.response
		};
		delete eventPayload.content.response;
	} else if (isWorkerEventa(event)) {
		transfer = event.body?.transfer;
		delete event.body?.transfer;
		eventPayload = event.body?.message;
		delete event.body?.message;
	}
	if (typeof options !== "undefined" && options != null && typeof options === "object" && "transfer" in options) {
		if (Array.isArray(options.transfer)) transfer = options.transfer;
	}
	return {
		body: eventPayload,
		transfer
	};
}

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.0-beta.1/node_modules/@moeru/eventa/dist/adapters/webworkers/worker/index.mjs
function createContext(options) {
	const { messagePort = self } = options || {};
	const ctx = createContext$1();
	registerInvokeAbortEventListeners(ctx, workerErrorEvent);
	ctx.on(and(matchBy((e) => e._flowDirection === EventaFlowDirection.Outbound || !e._flowDirection), matchBy("*")), (event, options$1) => {
		const { body, transfer } = normalizeOnListenerParameters(event, options$1);
		const data = generateWorkerPayload(event.id, {
			...defineOutboundEventa(event.type),
			...event,
			body
		});
		if (transfer != null) {
			messagePort.postMessage(data, { transfer });
			return;
		}
		messagePort.postMessage(data);
	});
	self.onerror = (error) => {
		ctx.emit(workerErrorEvent, { error }, { raw: { error } });
	};
	self.onmessage = (event) => {
		try {
			const { type, payload } = parseWorkerPayload(event.data);
			if (!isWorkerEventa(payload)) ctx.emit(defineInboundEventa(type), payload.body, { raw: { event } });
			else ctx.emit(defineInboundEventa(type), { message: payload.body }, { raw: { event } });
		} catch (error) {
			console.error("Failed to parse WebWorker message:", error);
			ctx.emit(workerErrorEvent, { error }, { raw: { event } });
		}
	};
	return { context: ctx };
}

//#endregion
//#region src/events.ts
const streamTranscriptionEvent = defineEventa("sherpaw:stream-transcription:event");
const streamTranscriptionInitInvoke = defineInvokeEventa("sherpaw:stream-transcription:init");
const streamTranscriptionPushInvoke = defineInvokeEventa("sherpaw:stream-transcription:push");
const streamTranscriptionFinishInvoke = defineInvokeEventa("sherpaw:stream-transcription:finish");
const streamTranscriptionResetInvoke = defineInvokeEventa("sherpaw:stream-transcription:reset");
const streamTranscriptionDisposeInvoke = defineInvokeEventa("sherpaw:stream-transcription:dispose");

//#endregion
//#region src/session.ts
const DEFAULT_SAMPLE_RATE = 16e3;
function extractText(result) {
	if (!result || typeof result !== "object") return "";
	const text = result.text;
	return typeof text === "string" ? text : "";
}
var StreamingTranscriptionSession = class {
	eventContext = createContext$1();
	recognizer;
	stream;
	sampleRate;
	sentenceIndex = 1;
	currentText = "";
	started = false;
	constructor(module$1, options) {
		this.recognizer = createOnlineRecognizer(module$1, options?.recognizerConfig);
		this.stream = this.recognizer.createStream();
		this.sampleRate = options?.sampleRate ?? DEFAULT_SAMPLE_RATE;
	}
	on(type, handler) {
		return this.eventContext.on(streamTranscriptionEvent, ({ body }) => {
			if (body.type === type) handler(body);
		});
	}
	pushAudio(samples, options) {
		const sampleRate = options?.sampleRate ?? this.sampleRate;
		this.stream.acceptWaveform(sampleRate, samples);
		while (this.recognizer.isReady(this.stream)) this.recognizer.decode(this.stream);
		const result = this.recognizer.getResult(this.stream);
		const text = extractText(result);
		const isEndpoint = this.recognizer.isEndpoint(this.stream);
		this.emitProgress(text, result);
		if (isEndpoint) {
			this.recognizer.reset(this.stream);
			this.currentText = "";
			this.sentenceIndex++;
		}
		return {
			text,
			isEndpoint
		};
	}
	finish() {
		this.stream.inputFinished();
		while (this.recognizer.isReady(this.stream)) this.recognizer.decode(this.stream);
		const result = this.recognizer.getResult(this.stream);
		const text = extractText(result);
		this.emitProgress(text, result);
		if (this.started) this.eventContext.emit(streamTranscriptionEvent, { type: "transcription.completed" });
		const sentenceCount = text.length > 0 ? this.sentenceIndex : Math.max(0, this.sentenceIndex - 1);
		this.reset();
		return {
			text,
			sentenceCount
		};
	}
	reset() {
		this.recognizer.reset(this.stream);
		this.currentText = "";
		this.sentenceIndex = 1;
		this.started = false;
	}
	dispose() {
		this.stream.free();
		this.recognizer.free();
		this.eventContext.off(streamTranscriptionEvent);
	}
	emitProgress(text, result) {
		if (!this.started) {
			this.started = true;
			this.eventContext.emit(streamTranscriptionEvent, { type: "transcription.started" });
		}
		if (text.length === 0 || text === this.currentText) return;
		this.eventContext.emit(streamTranscriptionEvent, {
			type: "transcription.partial",
			index: this.sentenceIndex,
			text,
			tokens: timedTokens(result)
		});
		this.currentText = text;
	}
};

//#endregion
//#region src/stream-transcription/resolve.ts
function isBlobLike(value) {
	return typeof Blob !== "undefined" && value instanceof Blob;
}
function isArrayBufferLike(value) {
	return value instanceof ArrayBuffer;
}
function isUint8Array(value) {
	return value instanceof Uint8Array;
}
function isRemoteUrlSource(value) {
	return !!value && typeof value === "object" && value.kind === "remote-url" && "url" in value;
}
function resolveFetch(fetcher) {
	const target = fetcher ?? globalThis.fetch;
	if (!target) throw new TypeError("fetch is required to resolve remote model sources.");
	return target;
}
async function fetchRemote(remote, fetcher) {
	const response = await resolveFetch(fetcher)(remote.url, remote.init);
	if (!response.ok) throw new Error(`Failed to fetch remote model source: ${response.status} ${response.statusText}`.trim());
	return response;
}
async function resolveBinary(source, fetcher) {
	if (isArrayBufferLike(source)) return source;
	if (isUint8Array(source)) {
		const copy = new Uint8Array(source.byteLength);
		copy.set(source);
		return copy.buffer;
	}
	if (isBlobLike(source)) return await source.arrayBuffer();
	if (isRemoteUrlSource(source)) return await (await fetchRemote(source, fetcher)).arrayBuffer();
	throw new TypeError("Unsupported binary source.");
}
async function resolveMetadata(source, fetcher) {
	if (typeof source === "string") return JSON.parse(source);
	if (isBlobLike(source)) {
		const text = await source.text();
		return JSON.parse(text);
	}
	if (isArrayBufferLike(source) || isUint8Array(source)) {
		const text = new TextDecoder().decode(await resolveBinary(source, fetcher));
		return JSON.parse(text);
	}
	if (isRemoteUrlSource(source)) {
		const text = await (await fetchRemote(source, fetcher)).text();
		return JSON.parse(text);
	}
	return source;
}

//#endregion
//#region src/core.ts
async function initTranscriptionModule() {
	return await initASRModule();
}
async function loadModelFiles(module$1, sources) {
	loadData({
		module: module$1,
		metadata: await resolveMetadata(sources.metadata),
		data: await resolveBinary(sources.data)
	});
}
function createSession(module$1, options) {
	return new StreamingTranscriptionSession(module$1, options);
}

//#endregion
//#region src/worker/index.ts
const { context } = createContext();
let moduleRef = null;
let sessionRef = null;
let unsubscribeHandlers = [];
function clearBinds() {
	for (const unsubscribe of unsubscribeHandlers) unsubscribe();
	unsubscribeHandlers = [];
}
function subscribeSessionEvents(emit) {
	if (!sessionRef) return [];
	const eventTypes = [
		"transcription.started",
		"transcription.partial",
		"transcription.completed"
	];
	const subscriptions = [];
	for (const type of eventTypes) subscriptions.push(sessionRef.on(type, emit));
	return subscriptions;
}
function bindEvents() {
	clearBinds();
	unsubscribeHandlers = subscribeSessionEvents((event) => {
		context.emit(streamTranscriptionEvent, event);
	});
}
function isPushPayload(value) {
	if (!value || typeof value !== "object") return false;
	const payload = value;
	if (!Array.isArray(payload.samples) || !payload.samples.every((sample) => typeof sample === "number")) return false;
	return payload.sampleRate === void 0 || typeof payload.sampleRate === "number";
}
async function runCommand(command, payload) {
	switch (command) {
		case "load": {
			const model = payload;
			moduleRef = model.module ?? moduleRef ?? await initTranscriptionModule();
			await loadModelFiles(moduleRef, {
				metadata: model.metadata,
				data: model.data
			});
			if (sessionRef) {
				sessionRef.dispose();
				clearBinds();
			}
			sessionRef = createSession(moduleRef, {
				sampleRate: model.sampleRate,
				recognizerConfig: model.recognizerConfig
			});
			bindEvents();
			return;
		}
		case "push": {
			if (!sessionRef) throw new Error("Session not initialized.");
			if (!isPushPayload(payload)) throw new TypeError("Invalid push invoke payload.");
			const samples = new Float32Array(payload.samples);
			return sessionRef.pushAudio(samples, { sampleRate: payload.sampleRate });
		}
		case "finish":
			if (!sessionRef) throw new Error("Session not initialized.");
			return sessionRef.finish();
		case "reset":
			if (!sessionRef) throw new Error("Session not initialized.");
			sessionRef.reset();
			return;
		case "dispose":
			if (sessionRef) {
				sessionRef.dispose();
				sessionRef = null;
			}
			clearBinds();
			return;
	}
}
defineInvokeHandler(context, streamTranscriptionInitInvoke, async (payload) => {
	await runCommand("load", payload);
});
defineInvokeHandler(context, streamTranscriptionPushInvoke, async (payload) => {
	return await runCommand("push", payload);
});
defineInvokeHandler(context, streamTranscriptionFinishInvoke, async () => {
	return await runCommand("finish", void 0);
});
defineInvokeHandler(context, streamTranscriptionResetInvoke, async () => {
	await runCommand("reset", void 0);
});
defineInvokeHandler(context, streamTranscriptionDisposeInvoke, async () => {
	await runCommand("dispose", void 0);
});

//#endregion