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
//#region ../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/constants.js
var require_constants = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/constants.js": ((exports, module) => {
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
//#region ../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/utils.js
var require_utils = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/utils.js": ((exports) => {
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
//#region ../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/scan.js
var require_scan = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/scan.js": ((exports, module) => {
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
		const scanToEnd = opts.parts === true || opts.tokens === true || opts.scanToEnd === true;
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
						let parens = 0;
						while (eos() !== true && (code = advance())) {
							if (code === CHAR_BACKWARD_SLASH) {
								backslashes = token.backslashes = true;
								advance();
								continue;
							}
							if (code === CHAR_LEFT_PARENTHESES) {
								parens++;
								continue;
							}
							if (code === CHAR_RIGHT_PARENTHESES && --parens === 0) {
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
					let parens = 1;
					while (eos() !== true && (code = advance())) {
						if (code === CHAR_BACKWARD_SLASH) {
							backslashes = token.backslashes = true;
							advance();
							continue;
						}
						if (code === CHAR_LEFT_PARENTHESES) {
							parens++;
							continue;
						}
						if (code === CHAR_RIGHT_PARENTHESES && --parens === 0) {
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
				const n$1 = prevIndex !== void 0 ? prevIndex + 1 : start;
				const i = slashes[idx];
				const value$1 = input.slice(n$1, i);
				if (opts.tokens) {
					if (idx === 0 && start !== 0) {
						tokens[idx].isPrefix = true;
						tokens[idx].value = prefix;
					} else tokens[idx].value = value$1;
					depth(tokens[idx]);
					state.maxDepth += tokens[idx].depth;
				}
				if (i >= start) {
					parts.push(value$1);
					prevIndex = i;
				}
			}
			const n = prevIndex !== void 0 ? prevIndex + 1 : start;
			const value = input.slice(n);
			parts.push(value);
			if (opts.tokens && prevIndex && prevIndex + 1 < input.length) {
				tokens[tokens.length - 1].value = value;
				depth(tokens[tokens.length - 1]);
				state.maxDepth += tokens[tokens.length - 1].depth;
			}
			state.slashes = slashes;
			state.parts = parts;
		}
		return state;
	};
	module.exports = scan$1;
}) });

//#endregion
//#region ../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/parse.js
var require_parse = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/parse.js": ((exports, module) => {
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
	const buildCharClassStar = (chars) => {
		return `${chars.length === 1 ? utils$2.escapeRegex(chars[0]) : `[${chars.map((ch) => utils$2.escapeRegex(ch)).join("")}]`}*`;
	};
	const getStarExtglobSequenceChars = (pattern) => {
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
		return chars;
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
		const safeChars = [];
		let sawStarSequence = false;
		let combinable = true;
		for (const branch of branches) {
			const chars = getStarExtglobSequenceChars(branch);
			if (chars) {
				sawStarSequence = true;
				safeChars.push(...chars);
				continue;
			}
			const literal = normalizeSimpleBranch(branch);
			if (literal && literal.length === 1) {
				safeChars.push(literal);
				continue;
			}
			combinable = false;
			if (repeatedExtglobRecursion(branch) > max) return { risky: true };
		}
		if (sawStarSequence) return combinable ? {
			risky: true,
			safeOutput: buildCharClassStar([...new Set(safeChars)])
		} : { risky: true };
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
				const isEnd = eos() || state.parens > 0 && rest === ")".repeat(state.parens) && !extglobs.some((extglob) => extglob.type === "negate");
				if (prior.type === "bos" && eos()) {
					prev.type = "globstar";
					prev.value += value;
					prev.output = globstar(opts);
					state.output = prev.output;
					state.globstar = true;
					consume(value);
					continue;
				}
				if (prior.type === "slash" && prior.prev.type !== "bos" && !afterStar && isEnd) {
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
//#region ../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/picomatch.js
var require_picomatch$1 = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/lib/picomatch.js": ((exports, module) => {
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
	*
	* // For environments without `node.js`, `picomatch/posix` provides you a dependency-free matcher, without automatic OS detection.
	* const picomatch = require('picomatch/posix');
	* // the same API, defaulting to posix paths
	* const isMatch = picomatch('a/*');
	* console.log(isMatch('a\\b')); //=> false
	* console.log(isMatch('a/b')); //=> true
	*
	* // you can still configure the matcher function to accept windows paths
	* const isMatch = picomatch('a/*', { options: windows });
	* console.log(isMatch('a\\b')); //=> true
	* console.log(isMatch('a/b')); //=> true
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
	picomatch$1.matchBase = (input, glob, options, posix = options && options.windows) => {
		return (glob instanceof RegExp ? glob : picomatch$1.makeRe(glob, options)).test(utils$1.basename(input, { windows: posix }));
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
//#region ../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/index.js
var require_picomatch = /* @__PURE__ */ __commonJS({ "../../node_modules/.pnpm/picomatch@4.0.7/node_modules/picomatch/index.js": ((exports, module) => {
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
//#region ../../node_modules/.pnpm/nanoid@6.0.1/node_modules/nanoid/non-secure/index.js
var import_picomatch = /* @__PURE__ */ __toESM(require_picomatch(), 1);
let customAlphabet = (alphabet, defaultSize = 21) => {
	return (size = defaultSize) => {
		let id = "";
		let i = size | 0;
		while (i-- > 0) id += alphabet[Math.random() * alphabet.length | 0];
		return id;
	};
};

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.1/node_modules/@moeru/eventa/dist/context-Do0TNnqd.mjs
function nanoid() {
	return customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", 16)();
}
function defineInboundEventa(id) {
	return {
		...defineEventa(id),
		_flowDirection: "inbound"
	};
}
function defineOutboundEventa(id) {
	return {
		...defineEventa(id),
		_flowDirection: "outbound"
	};
}
function defineEventa(id, options) {
	if (!id) id = nanoid();
	const eventaObj = {
		id: options?.inheritFrom?.id || id,
		type: options?.inheritFrom?.type || "event"
	};
	const metadata = options?.inheritFrom?.metadata || options?.metadata;
	if (metadata) eventaObj.metadata = metadata;
	const invokeMetadata = options?.inheritFrom?.invokeMetadata || options?.invokeMetadata;
	if (invokeMetadata) eventaObj.invokeMetadata = invokeMetadata;
	return eventaObj;
}
function and(...matchExpression) {
	return {
		id: nanoid(),
		type: "matchExpression",
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
		type: "matchExpression",
		matcher
	};
}
const dispatchByEventa = /* @__PURE__ */ new WeakMap();
function createEventaInner(eventa, hopsRemaining) {
	return {
		deliveryId: nanoid(),
		hopsRemaining,
		eventa
	};
}
/**
* Associates forwarding state with an Eventa without changing the object shape
* observed by business listeners or serialized by unrelated consumers.
* `previousContext` exists only for one local Channel hop and is never sent
* across a transport.
*/
function setEventaInner(eventa, inner, previousContext) {
	dispatchByEventa.set(eventa, {
		inner,
		previousContext
	});
	return eventa;
}
/** Returns the forwarding state associated with one Context dispatch. */
function getEventaInner(eventa) {
	return dispatchByEventa.get(eventa)?.inner;
}
/** Returns the preceding Context for a local Channel hop, when one exists. */
function getPreviousContext(eventa) {
	return dispatchByEventa.get(eventa)?.previousContext;
}
/** Checks the complete transport-neutral Eventa delivery shape. */
function isEventaInner(value) {
	if (typeof value !== "object" || value === null) return false;
	const inner = value;
	return typeof inner.deliveryId === "string" && inner.deliveryId.length > 0 && Number.isSafeInteger(inner.hopsRemaining) && (inner.hopsRemaining ?? -1) >= 0 && typeof inner.eventa === "object" && inner.eventa !== null && typeof inner.eventa.id === "string";
}
const defaultRoutingOptions = {
	recentDeliveryLimit: 1e4,
	recentDeliveryTtl: 300 * 1e3,
	initialHops: 32
};
function resolveRoutingOptions(options) {
	const resolved = {
		...defaultRoutingOptions,
		...options
	};
	if (!Number.isSafeInteger(resolved.recentDeliveryLimit) || resolved.recentDeliveryLimit < 1) throw new RangeError("recentDeliveryLimit must be a positive safe integer.");
	if (!Number.isFinite(resolved.recentDeliveryTtl) || resolved.recentDeliveryTtl <= 0) throw new RangeError("recentDeliveryTtl must be a positive finite number.");
	if (!Number.isSafeInteger(resolved.initialHops) || resolved.initialHops < 0) throw new RangeError("initialHops must be a non-negative safe integer.");
	return resolved;
}
/**
* Creates an Eventa subscription and routing context.
*
* The context associates one delivery identity with each emitted Eventa before
* dispatch. Forwarding listeners preserve that identity when they emit into
* another Context. Recent IDs are bounded by both retention time and capacity;
* concurrent emit calls are intentionally unordered.
*/
function createContext$1(options = {}) {
	const listeners = /* @__PURE__ */ new Map();
	const onceListeners = /* @__PURE__ */ new Map();
	const matchExpressions = /* @__PURE__ */ new Map();
	const matchExpressionListeners = /* @__PURE__ */ new Map();
	const matchExpressionOnceListeners = /* @__PURE__ */ new Map();
	const lifetimeController = new AbortController();
	const recentDeliveries = /* @__PURE__ */ new Map();
	const routingOptions = resolveRoutingOptions(options.routing);
	function hasSeen(deliveryId) {
		const now = Date.now();
		for (const [knownDeliveryId, expiresAt$1] of recentDeliveries) {
			if (expiresAt$1 > now) break;
			recentDeliveries.delete(knownDeliveryId);
		}
		const expiresAt = recentDeliveries.get(deliveryId);
		if (typeof expiresAt === "number" && expiresAt > now) return true;
		recentDeliveries.delete(deliveryId);
		recentDeliveries.set(deliveryId, now + routingOptions.recentDeliveryTtl);
		while (recentDeliveries.size > routingOptions.recentDeliveryLimit) {
			const oldestDeliveryId = recentDeliveries.keys().next().value;
			if (typeof oldestDeliveryId !== "string") break;
			recentDeliveries.delete(oldestDeliveryId);
		}
		return false;
	}
	function dispatch(event, localOptions) {
		const pending = [];
		function track(result) {
			if (typeof result === "object" && result !== null && "then" in result && typeof result.then === "function") pending.push(result);
		}
		function call(listener) {
			try {
				track(listener(event, localOptions));
			} catch (error) {
				pending.push(Promise.reject(error));
			}
		}
		for (const listener of listeners.get(event.id) || []) call(listener);
		for (const onceListener of onceListeners.get(event.id) || []) {
			call(onceListener);
			onceListeners.get(event.id)?.delete(onceListener);
		}
		for (const matchExpression of matchExpressions.values()) {
			if (!matchExpression.matcher || !matchExpression.matcher(event)) continue;
			for (const listener of matchExpressionListeners.get(matchExpression.id) || []) call(listener);
			for (const onceListener of matchExpressionOnceListeners.get(matchExpression.id) || []) {
				call(onceListener);
				matchExpressionOnceListeners.get(matchExpression.id)?.delete(onceListener);
			}
		}
		return Promise.all(pending).then(() => void 0);
	}
	function accept(inner, localOptions, previousContext) {
		if (hasSeen(inner.deliveryId)) return Promise.resolve();
		const pending = [];
		if (inner.hopsRemaining === 0) try {
			routingOptions.onDiagnostic?.({
				kind: "hops-exhausted",
				inner
			});
		} catch (error) {
			pending.push(Promise.reject(error));
		}
		else setEventaInner(inner.eventa, {
			...inner,
			hopsRemaining: inner.hopsRemaining - 1
		}, previousContext);
		pending.push(dispatch(inner.eventa, localOptions));
		return Promise.all(pending).then(() => void 0);
	}
	function emit(event, payload, localOptions) {
		const emittedEvent = {
			...event,
			body: payload
		};
		const existingInner = getEventaInner(event);
		const previousContext = getPreviousContext(event);
		return accept(existingInner ? {
			...existingInner,
			eventa: emittedEvent
		} : createEventaInner(emittedEvent, routingOptions.initialHops), localOptions, previousContext);
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
			if (eventOrMatchExpression.type === "event") {
				const event = eventOrMatchExpression;
				if (!listeners.has(event.id)) listeners.set(event.id, /* @__PURE__ */ new Set());
				listeners.get(event.id)?.add(handler);
				return () => listeners.get(event.id)?.delete(handler);
			}
			if (eventOrMatchExpression.type === "matchExpression") {
				const matchExpression = eventOrMatchExpression;
				matchExpressions.set(matchExpression.id, matchExpression);
				if (!matchExpressionListeners.has(matchExpression.id)) matchExpressionListeners.set(matchExpression.id, /* @__PURE__ */ new Set());
				matchExpressionListeners.get(matchExpression.id)?.add(handler);
				return () => matchExpressionListeners.get(matchExpression.id)?.delete(handler);
			}
			return () => void 0;
		},
		once(eventOrMatchExpression, handler) {
			if (eventOrMatchExpression.type === "event") {
				const event = eventOrMatchExpression;
				if (!onceListeners.has(event.id)) onceListeners.set(event.id, /* @__PURE__ */ new Set());
				onceListeners.get(event.id)?.add(handler);
				return () => onceListeners.get(event.id)?.delete(handler);
			}
			if (eventOrMatchExpression.type === "matchExpression") {
				const matchExpression = eventOrMatchExpression;
				matchExpressions.set(matchExpression.id, matchExpression);
				if (!matchExpressionOnceListeners.has(matchExpression.id)) matchExpressionOnceListeners.set(matchExpression.id, /* @__PURE__ */ new Set());
				matchExpressionOnceListeners.get(matchExpression.id)?.add(handler);
				return () => matchExpressionOnceListeners.get(matchExpression.id)?.delete(handler);
			}
			return () => void 0;
		},
		off(eventOrMatchExpression, handler) {
			switch (eventOrMatchExpression.type) {
				case "event":
					if (handler !== void 0) {
						listeners.get(eventOrMatchExpression.id)?.delete(handler);
						onceListeners.get(eventOrMatchExpression.id)?.delete(handler);
						break;
					}
					listeners.delete(eventOrMatchExpression.id);
					onceListeners.delete(eventOrMatchExpression.id);
					break;
				case "matchExpression":
					if (handler !== void 0) {
						matchExpressionListeners.get(eventOrMatchExpression.id)?.delete(handler);
						matchExpressionOnceListeners.get(eventOrMatchExpression.id)?.delete(handler);
						break;
					}
					matchExpressionListeners.delete(eventOrMatchExpression.id);
					matchExpressionOnceListeners.delete(eventOrMatchExpression.id);
					break;
			}
		},
		signal: lifetimeController.signal,
		abort(reason) {
			if (!lifetimeController.signal.aborted) lifetimeController.abort(reason);
		}
	};
}

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.1/node_modules/@moeru/eventa/dist/internal-CpuCilTX.mjs
const legacyInitialHops = 32;
function isLegacyAdapterValue(value) {
	if (typeof value !== "object" || value === null) return false;
	const legacy = value;
	return typeof legacy.id === "string" && legacy.id.length > 0 && typeof legacy.type === "string" && typeof legacy.payload === "object" && legacy.payload !== null && typeof legacy.payload.id === "string" && legacy.payload.id === legacy.type;
}
/** Adds the beta.13 fields without changing the EventaInner fields. */
function createAdapterInner(inner) {
	return {
		...inner,
		id: inner.deliveryId,
		type: inner.eventa.id,
		payload: inner.eventa,
		timestamp: Date.now()
	};
}
/**
* Creates the outbound transport value for an Eventa dispatched by Context.
* Returns `undefined` after the delivery has exhausted its hop budget.
*/
function createOutboundInner(eventa) {
	const inner = getEventaInner(eventa);
	if (!inner) return;
	return createAdapterInner({
		...inner,
		eventa: {
			...inner.eventa,
			...defineOutboundEventa(inner.eventa.id)
		}
	});
}
/**
* Validates a transport value and restores its Eventa as inbound. The hidden
* association lets the following `ctx.emit(...)` preserve the delivery ID.
*/
function restoreInner$1(value) {
	let inner;
	if (isEventaInner(value)) inner = value;
	else if (isLegacyAdapterValue(value)) inner = {
		deliveryId: value.id,
		hopsRemaining: legacyInitialHops,
		eventa: value.payload
	};
	else throw new TypeError("Invalid EventaInner.");
	const restored = {
		...inner,
		eventa: {
			...inner.eventa,
			...defineInboundEventa(inner.eventa.id)
		}
	};
	setEventaInner(restored.eventa, restored);
	return restored;
}

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.1/node_modules/@moeru/eventa/dist/errors-B--PnHjv.mjs
/**
* Coerce whatever a transport hands us — an `Error`, a browser `ErrorEvent`, a
* `MessageEvent`, or some host-specific object — into a real `Error`, without
* losing the original message/stack.
*
* `ErrorEvent` is referenced defensively because it does not exist in every
* runtime that uses these adapters (e.g. Node's worker_threads).
*/
function toError(input, fallbackMessage) {
	if (input instanceof Error) return input;
	if (typeof ErrorEvent !== "undefined" && input instanceof ErrorEvent) {
		if (input.error instanceof Error) return input.error;
		if (typeof input.message === "string" && input.message) return new Error(input.message);
	}
	if (input != null && typeof input === "object") {
		const candidate = input;
		if (candidate.error instanceof Error) return candidate.error;
		if (typeof candidate.message === "string" && candidate.message) return new Error(candidate.message);
	}
	return new Error(fallbackMessage);
}

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.1/node_modules/@moeru/eventa/dist/invoke-shared-DIUqKwUl.mjs
function defineInvokeEventa(tag, options) {
	if (!tag) tag = nanoid();
	return {
		sendEvent: {
			...defineEventa(`${tag}-send`, {
				metadata: options?.metadata,
				invokeMetadata: options?.invokeMetadata
			}),
			invokeType: 0
		},
		sendEventError: {
			...defineEventa(`${tag}-send-error`, {
				metadata: options?.metadata,
				invokeMetadata: options?.invokeMetadata
			}),
			invokeType: 1
		},
		sendEventStreamEnd: {
			...defineEventa(`${tag}-send-stream-end`, {
				metadata: options?.metadata,
				invokeMetadata: options?.invokeMetadata
			}),
			invokeType: 2
		},
		sendEventAbort: {
			...defineEventa(`${tag}-send-abort`, {
				metadata: options?.metadata,
				invokeMetadata: options?.invokeMetadata
			}),
			invokeType: 3
		},
		receiveEvent: {
			...defineEventa(`${tag}-receive`, {
				metadata: options?.metadata,
				invokeMetadata: options?.invokeMetadata
			}),
			invokeType: 4
		},
		receiveEventError: {
			...defineEventa(`${tag}-receive-error`, {
				metadata: options?.metadata,
				invokeMetadata: options?.invokeMetadata
			}),
			invokeType: 5
		},
		receiveEventStreamEnd: {
			...defineEventa(`${tag}-receive-stream-end`, {
				metadata: options?.metadata,
				invokeMetadata: options?.invokeMetadata
			}),
			invokeType: 6
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
	return event.invokeType === 4 || event.invokeType === 5 || event.invokeType === 6;
}

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.1/node_modules/@moeru/eventa/dist/invoke-BPvOIpeR.mjs
function createAbortError(reason) {
	if (reason instanceof Error && reason.name === "AbortError") return reason;
	if (typeof DOMException !== "undefined") try {
		return new DOMException(reason ? String(reason) : "Aborted", "AbortError");
	} catch {}
	const error = reason instanceof Error ? reason : new Error(reason ? String(reason) : "Aborted");
	error.name = "AbortError";
	return error;
}
/**
* Owns request reconstruction and cancellation correlation for one handler.
*
* Cancellation is allowed to arrive before request data. A bounded tombstone
* keeps that reason until the first request frame materializes exactly one
* handler invocation; later frames for the cancelled invocation are ignored.
*/
var InvokeState = class {
	contextSignal;
	abortControllers = /* @__PURE__ */ new Map();
	abortReasons = /* @__PURE__ */ new Map();
	materializedInvocations = /* @__PURE__ */ new Set();
	streamControllers = /* @__PURE__ */ new Map();
	/**
	* Propagates the owning context lifetime into active invocation state.
	*
	* Triggering workflow:
	*
	* {@link AbortController.abort}
	*   -> {@link AbortSignal.addEventListener}
	*     -> `abort`
	*       -> {@link InvokeState.onContextAbort}
	*
	* Upstream:
	* - {@link AbortController.abort}
	*
	* Downstream:
	* - {@link AbortController.abort}
	* - {@link ReadableStreamDefaultController.error}
	*/
	onContextAbort = () => {
		for (const controller of this.abortControllers.values()) this.scheduleAbort(controller, this.contextSignal.reason);
		for (const controller of this.streamControllers.values()) controller.error(createAbortError(this.contextSignal.reason));
		this.streamControllers.clear();
	};
	constructor(contextSignal) {
		this.contextSignal = contextSignal;
		if (contextSignal.aborted) {
			this.onContextAbort();
			return;
		}
		contextSignal.addEventListener("abort", this.onContextAbort, { once: true });
	}
	shouldIgnoreFrame(invokeId) {
		return this.contextSignal.aborted || this.abortReasons.has(invokeId) && this.materializedInvocations.has(invokeId);
	}
	materialize(invokeId) {
		const controller = new AbortController();
		this.abortControllers.set(invokeId, controller);
		this.materializedInvocations.add(invokeId);
		if (this.contextSignal.aborted) this.scheduleAbort(controller, this.contextSignal.reason);
		if (this.abortReasons.has(invokeId)) this.scheduleAbort(controller, this.abortReasons.get(invokeId));
		return controller;
	}
	openRequestStream(invokeId) {
		const existing = this.streamControllers.get(invokeId);
		if (existing) return { controller: existing };
		let controller;
		const stream = new ReadableStream({ start(value) {
			controller = value;
		} });
		this.streamControllers.set(invokeId, controller);
		return {
			controller,
			stream
		};
	}
	pushRequestChunk(invokeId, controller, value) {
		if (this.errorCancelledStream(invokeId, controller)) return false;
		controller.enqueue(value);
		return true;
	}
	endRequestStream(invokeId, controller) {
		if (this.errorCancelledStream(invokeId, controller)) return false;
		controller.close();
		this.streamControllers.delete(invokeId);
		return true;
	}
	errorRequestStream(invokeId, controller, error) {
		controller.error(error);
		this.streamControllers.delete(invokeId);
	}
	rememberAbort(invokeId, reason) {
		this.abortReasons.delete(invokeId);
		this.abortReasons.set(invokeId, reason);
		while (this.abortReasons.size > 1e4) {
			const oldestInvokeId = this.abortReasons.keys().next().value;
			if (typeof oldestInvokeId !== "string") break;
			this.abortReasons.delete(oldestInvokeId);
			this.materializedInvocations.delete(oldestInvokeId);
		}
		const abortController = this.abortControllers.get(invokeId);
		if (abortController) this.scheduleAbort(abortController, reason);
		const streamController = this.streamControllers.get(invokeId);
		if (streamController) {
			streamController.error(createAbortError(reason));
			this.streamControllers.delete(invokeId);
		}
	}
	complete(invokeId) {
		this.abortControllers.delete(invokeId);
		if (this.abortReasons.has(invokeId)) {
			this.streamControllers.delete(invokeId);
			return;
		}
		this.materializedInvocations.delete(invokeId);
	}
	dispose() {
		this.contextSignal.removeEventListener("abort", this.onContextAbort);
	}
	errorCancelledStream(invokeId, controller) {
		if (this.contextSignal.aborted) {
			controller.error(createAbortError(this.contextSignal.reason));
			this.streamControllers.delete(invokeId);
			return true;
		}
		if (!this.abortReasons.has(invokeId)) return false;
		controller.error(createAbortError(this.abortReasons.get(invokeId)));
		this.streamControllers.delete(invokeId);
		return true;
	}
	scheduleAbort(controller, reason) {
		if (typeof queueMicrotask === "function") {
			queueMicrotask(() => controller.abort(reason));
			return;
		}
		Promise.resolve().then(() => controller.abort(reason));
	}
};
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
* Triggering workflow:
*
* {@link defineInvoke}
*   -> {@link EventContext.on}
*     -> `sendEvent` / `sendEventError` / `sendEventStreamEnd` / `sendEventAbort`
*       -> {@link defineInvokeHandler}
*
* Upstream:
* - {@link defineInvoke}
*
* Downstream:
* - {@link EventContext.emit}
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
* @returns A disposer that removes protocol listeners and registry ownership. Active handlers keep running; their request streams and abort controllers remain valid until those handlers settle.
*/
function defineInvokeHandler(ctx, event, handler) {
	if (!ctx.invokeHandlers) ctx.invokeHandlers = /* @__PURE__ */ new Map();
	const handlerRegistry = ctx.invokeHandlers;
	let registeredHandlers = handlerRegistry.get(event.sendEvent.id);
	if (!registeredHandlers) {
		registeredHandlers = /* @__PURE__ */ new Map();
		handlerRegistry.set(event.sendEvent.id, registeredHandlers);
	}
	const handlers = registeredHandlers;
	function removeHandler(internalHandler$1) {
		ctx.off(event.sendEvent, internalHandler$1.onSend);
		ctx.off(event.sendEventError, internalHandler$1.onSendError);
		ctx.off(event.sendEventStreamEnd, internalHandler$1.onSendStreamEnd);
		ctx.off(event.sendEventAbort, internalHandler$1.onSendAbort);
		internalHandler$1.cleanup();
		handlers.delete(handler);
		if (handlers.size === 0 && handlerRegistry.get(event.sendEvent.id) === handlers) handlerRegistry.delete(event.sendEvent.id);
	}
	const existingHandler = handlers.get(handler);
	if (existingHandler) return () => removeHandler(existingHandler);
	const requestState = new InvokeState(ctx.signal);
	const handleInvoke = async (invokeId, payload, options) => {
		const abortController = requestState.materialize(invokeId);
		const handlerOptions = options ? {
			...options,
			abortController
		} : { abortController };
		try {
			const response = await handler(payload, handlerOptions);
			await ctx.emit({
				...defineEventa(`${event.receiveEvent.id}-${invokeId}`),
				invokeType: event.receiveEvent.invokeType
			}, {
				invokeId,
				content: response
			}, options);
		} catch (error) {
			try {
				await ctx.emit({
					...defineEventa(`${event.receiveEventError.id}-${invokeId}`),
					invokeType: event.receiveEventError.invokeType
				}, {
					invokeId,
					content: { error }
				}, options);
			} catch {}
		} finally {
			requestState.complete(invokeId);
		}
	};
	const onSend = async (payload, options) => {
		if (!payload.body) return;
		if (!payload.body.invokeId) return;
		const invokeId = payload.body.invokeId;
		if (requestState.shouldIgnoreFrame(invokeId)) return;
		if (payload.body.isReqStream) {
			const { controller, stream } = requestState.openRequestStream(invokeId);
			if (stream) handleInvoke(invokeId, stream, options);
			requestState.pushRequestChunk(invokeId, controller, payload.body.content);
			return;
		}
		handleInvoke(invokeId, payload.body?.content, options);
	};
	const onSendStreamEnd = (payload, options) => {
		if (!payload.body) return;
		if (!payload.body.invokeId) return;
		const invokeId = payload.body.invokeId;
		if (requestState.shouldIgnoreFrame(invokeId)) return;
		const { controller, stream } = requestState.openRequestStream(invokeId);
		if (stream) handleInvoke(invokeId, stream, options);
		requestState.endRequestStream(invokeId, controller);
	};
	const onSendError = (payload, options) => {
		if (!payload.body?.invokeId) return;
		const invokeId = payload.body.invokeId;
		if (requestState.shouldIgnoreFrame(invokeId)) return;
		const { controller, stream } = requestState.openRequestStream(invokeId);
		if (stream) handleInvoke(invokeId, stream, options);
		requestState.errorRequestStream(invokeId, controller, payload.body.content);
	};
	const onSendAbort = (payload, _options) => {
		if (!payload.body) return;
		if (!payload.body.invokeId) return;
		const invokeId = payload.body.invokeId;
		requestState.rememberAbort(invokeId, payload.body.content);
	};
	const cleanup = () => {
		requestState.dispose();
	};
	const internalHandler = {
		onSend,
		onSendError,
		onSendStreamEnd,
		onSendAbort,
		cleanup
	};
	handlers.set(handler, internalHandler);
	ctx.on(event.sendEvent, internalHandler.onSend);
	ctx.on(event.sendEventError, internalHandler.onSendError);
	ctx.on(event.sendEventStreamEnd, internalHandler.onSendStreamEnd);
	ctx.on(event.sendEventAbort, internalHandler.onSendAbort);
	return () => removeHandler(internalHandler);
}

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.1/node_modules/@moeru/eventa/dist/internal-7rfJhNPU.mjs
function isWorkerEventa(event) {
	return typeof event === "object" && "_workerTransfer" in event && typeof event._workerTransfer === "boolean" && event._workerTransfer === true;
}
/**
* Emitted by the worker adapters whenever a worker fails: an inbound message
* fails to parse (`kind: 'parse'`, non-fatal), the worker hits a fatal
* `error` (`kind: 'fatal'`), or a message can't be deserialized
* (`kind: 'messageerror'`). Has a stable id so it can be subscribed to across
* module boundaries.
*/
const workerErrorEvent = defineEventa("eventa:worker:error");
function normalizeOnListenerParameters(event, options) {
	let eventPayload = event.body;
	let transfer;
	if (isExtendableInvokeResponseLike(event)) {
		if (event.body.content.invokeResponse?.transfer != null) transfer = event.body.content.invokeResponse.transfer;
		eventPayload = {
			...event.body,
			content: event.body.content.response
		};
	} else if (isWorkerEventa(event)) {
		transfer = event.body?.transfer;
		eventPayload = event.body?.message;
	}
	if (typeof options !== "undefined" && options != null && typeof options === "object" && "transfer" in options) {
		if (Array.isArray(options.transfer)) transfer = options.transfer;
	}
	return {
		body: eventPayload,
		transfer
	};
}
/**
* Creates the worker wire value without mutating the context-owned inner value.
* Transfer metadata is removed from the Eventa body because the worker API
* carries the transfer list out of band in `postMessage` options.
*/
function createWorkerInnerEventa(inner, options) {
	const clonedBody = typeof inner.eventa.body === "object" && inner.eventa.body !== null ? { ...inner.eventa.body } : inner.eventa.body;
	const eventa = {
		...inner.eventa,
		body: clonedBody
	};
	const { body, transfer } = normalizeOnListenerParameters(eventa, options);
	return {
		inner: createAdapterInner({
			...inner,
			eventa: {
				...eventa,
				body
			}
		}),
		transfer
	};
}
/** Restores the public worker-event body shape after transport deserialization. */
function restoreInner(value) {
	const inner = restoreInner$1(value);
	if (!isWorkerEventa(inner.eventa)) return inner;
	return restoreInner$1({
		...inner,
		eventa: {
			...inner.eventa,
			body: { message: inner.eventa.body }
		}
	});
}

//#endregion
//#region ../../node_modules/.pnpm/@moeru+eventa@1.0.1/node_modules/@moeru/eventa/dist/adapters/webworkers/worker/index.mjs
function createContext(options) {
	const messagePort = options?.messagePort ?? self;
	const ctx = createContext$1(options?.context);
	const stopSending = ctx.on(and(matchBy((event) => !("_flowDirection" in event) || !event._flowDirection || event._flowDirection === "outbound"), matchBy("*")), (event, emitOptions) => {
		const inner = createOutboundInner(event);
		if (!inner) return;
		const outgoing = createWorkerInnerEventa(inner, emitOptions);
		if (outgoing.transfer != null) {
			messagePort.postMessage(outgoing.inner, { transfer: outgoing.transfer });
			return;
		}
		messagePort.postMessage(outgoing.inner);
	});
	messagePort.onmessage = (event) => {
		try {
			const inner = restoreInner(event.data);
			ctx.emit(inner.eventa, inner.eventa.body, { raw: { event } }).catch((emitError) => console.error("Failed to emit WebWorker message:", emitError));
		} catch (error) {
			console.error("Failed to parse WebWorker message:", error);
			ctx.emit(workerErrorEvent, {
				kind: "parse",
				error: toError(error, "eventa: webworker message parse error")
			}, { raw: { event } }).catch((emitError) => console.error("Failed to emit WebWorker parse error:", emitError));
		}
	};
	messagePort.onerror = (event) => {
		const error = toError(event, "eventa: invoke cancelled, webworker self error");
		stopSending();
		ctx.abort(error);
		ctx.emit(workerErrorEvent, {
			kind: "fatal",
			error
		}, { raw: { error: event } }).catch((emitError) => console.error("Failed to emit WebWorker error:", emitError));
	};
	return { context: ctx };
}

//#endregion
//#region src/keywords.ts
function readTokens(text) {
	const tokens = /* @__PURE__ */ new Set();
	const ids = /* @__PURE__ */ new Set();
	for (const line of text.split(/\r?\n/u)) {
		const trimmed = line.trim();
		if (!trimmed) continue;
		const match = /^(\S+)\s+(\d+)$/u.exec(trimmed);
		if (!match) throw new Error("Expected a token followed by an integer ID");
		const [, token, rawId] = match;
		const id = Number(rawId);
		if (id > 2147483647) throw new Error(`Token ID exceeds int32 range: ${rawId}`);
		if (tokens.has(token) || ids.has(id)) throw new Error(`Duplicate token or ID: ${token} ${rawId}`);
		tokens.add(token);
		ids.add(id);
	}
	if (!tokens.size) throw new Error("Model tokens file is empty");
	return tokens;
}
function validateSettings(score, threshold) {
	const minFloat = 2 ** -126;
	if (!Number.isFinite(score) || score > 34028234663852886e22 || score < minFloat) throw new RangeError("score must be a positive finite float32 value");
	if (!Number.isFinite(threshold) || threshold < minFloat || threshold > 1) throw new RangeError("threshold must be in (0, 1]");
}
function encodeKeywords(entries, vocabulary) {
	if (!Array.isArray(entries)) throw new TypeError("keywords must be an array");
	const labels = /* @__PURE__ */ new Map();
	const sequences = /* @__PURE__ */ new Set();
	return {
		text: Array.from(entries, (entry, index) => {
			if (!entry || typeof entry.label !== "string" || !entry.label.trim()) throw new TypeError("Each keyword requires a nonempty label");
			if (!Array.isArray(entry.matches) || !entry.matches.length) throw new TypeError("Each keyword requires at least one match");
			const defaultScore = entry.score === void 0 ? 1 : entry.score;
			const defaultThreshold = entry.threshold === void 0 ? .25 : entry.threshold;
			validateSettings(defaultScore, defaultThreshold);
			let id = `sherpaw_${index}`;
			while (vocabulary.has(`@${id}`)) id += "_";
			labels.set(id, entry.label);
			return Array.from(entry.matches, (match) => {
				if (!match || !Array.isArray(match.tokens) || !match.tokens.length) throw new TypeError("Each match requires at least one token");
				for (const token of match.tokens) if (typeof token !== "string" || !token || /[\s\0]/u.test(token) || !vocabulary.has(token)) throw new Error(`Invalid or unknown keyword token: ${String(token)}`);
				const sequence = match.tokens.join(" ");
				if (sequences.has(sequence)) throw new Error("Duplicate keyword token sequence");
				sequences.add(sequence);
				const score = match.score === void 0 ? defaultScore : match.score;
				const threshold = match.threshold === void 0 ? defaultThreshold : match.threshold;
				validateSettings(score, threshold);
				const scoreField = `:${score}`;
				const thresholdField = `#${threshold}`;
				if (vocabulary.has(scoreField) || vocabulary.has(thresholdField)) throw new Error("Keyword settings conflict with model token syntax");
				return `${sequence} ${scoreField} ${thresholdField} @${id}`;
			}).join("\n");
		}).join("\n"),
		labels
	};
}

//#endregion
//#region src/spotter.ts
function validateSearchBeam(value) {
	if (!Number.isInteger(value) || value < 1 || value > 2147483647) throw new RangeError("maxActivePaths must be a positive int32 integer");
}
/** Owns the native detector, stream and temporary allocations, but not model files. */
function createKeywordSpotter(module$1, config) {
	let maxActivePaths = config.maxActivePaths ?? 4;
	validateSearchBeam(maxActivePaths);
	const paths = [
		config.model.encoder,
		config.model.decoder,
		config.model.joiner,
		config.model.tokens
	];
	for (const path of paths) {
		if (typeof path !== "string" || !path.trim() || path.includes("\0")) throw new TypeError("Model paths must be nonempty strings without NUL");
		if (!module$1.FS.analyzePath(path).exists || !module$1.FS.isFile(module$1.FS.stat(path).mode) || !module$1.FS.stat(path).size) throw new Error(`Model file is not loaded or is empty: ${path}`);
	}
	const vocabulary = readTokens(module$1.FS.readFile(paths[3], { encoding: "utf8" }));
	const initial = encodeKeywords(config.keywords, vocabulary);
	if (!initial.labels.size) throw new Error("Initial keywords must contain at least one entry");
	function release(state) {
		if (!state) return;
		module$1._SherpaOnnxDestroyOnlineStream(state.stream);
		module$1._SherpaOnnxDestroyKeywordSpotter(state.spotter);
	}
	function create(encoded, searchBeam) {
		const pointers = [];
		let spotter = 0;
		try {
			for (const text of [...paths, encoded.text]) {
				const size = module$1.lengthBytesUTF8(text) + 1;
				const ptr = module$1._malloc(size);
				if (!ptr) throw new Error("Unable to allocate KWS configuration");
				pointers.push(ptr);
				module$1.stringToUTF8(text, ptr, size);
			}
			spotter = module$1._SherpawCreateKeywordSpotter(pointers[0], pointers[1], pointers[2], pointers[3], pointers[4], searchBeam);
			if (!spotter) throw new Error("Unable to create keyword spotter; check the KWS transducer model");
			const stream = module$1._SherpaOnnxCreateKeywordStream(spotter);
			if (!stream) throw new Error("Unable to create keyword stream");
			return {
				spotter,
				stream,
				labels: encoded.labels
			};
		} catch (error) {
			if (spotter) module$1._SherpaOnnxDestroyKeywordSpotter(spotter);
			throw error;
		} finally {
			for (const ptr of pointers) module$1._free(ptr);
		}
	}
	let current = create(initial, maxActivePaths);
	let disposed = false;
	let queue = Promise.resolve();
	function requireLive() {
		if (disposed) throw new Error("Keyword spotter has been disposed");
	}
	return {
		setKeywords(entries, options) {
			const requestedSearchBeam = options?.maxActivePaths;
			let encoded;
			try {
				requireLive();
				if (requestedSearchBeam !== void 0) validateSearchBeam(requestedSearchBeam);
				encoded = encodeKeywords(entries, vocabulary);
			} catch (error) {
				return Promise.reject(error);
			}
			const update = queue.then(() => {
				requireLive();
				const searchBeam = requestedSearchBeam ?? maxActivePaths;
				const next = encoded.labels.size ? create(encoded, searchBeam) : void 0;
				const previous = current;
				current = next;
				maxActivePaths = searchBeam;
				release(previous);
			});
			queue = update.catch(() => {});
			return update;
		},
		processAudio(samples, sampleRate) {
			requireLive();
			if (!Number.isInteger(sampleRate) || sampleRate < 8e3 || sampleRate > 192e3) throw new RangeError("sampleRate must be an integer between 8000 and 192000 Hz");
			if (!(samples instanceof Float32Array)) throw new TypeError("samples must be a Float32Array");
			for (const sample of samples) if (!Number.isFinite(sample) || Math.abs(sample) > 1) throw new RangeError("PCM samples must be finite and between -1 and 1");
			if (!current || !samples.length) return [];
			if (current.sampleRate !== void 0 && current.sampleRate !== sampleRate) throw new RangeError("sampleRate must stay constant within an audio stream");
			const { spotter, stream, labels } = current;
			const ptr = module$1._malloc(samples.byteLength);
			if (!ptr) throw new Error("Unable to allocate KWS audio buffer");
			try {
				module$1.HEAPF32.set(samples, ptr / 4);
				module$1._SherpaOnnxOnlineStreamAcceptWaveform(stream, sampleRate, ptr, samples.length);
				current.sampleRate = sampleRate;
			} finally {
				module$1._free(ptr);
			}
			const detections = [];
			while (module$1._SherpaOnnxIsKeywordStreamReady(spotter, stream)) {
				module$1._SherpaOnnxDecodeKeywordStream(spotter, stream);
				const resultPtr = module$1._SherpaOnnxGetKeywordResult(spotter, stream);
				if (!resultPtr) throw new Error("Unable to read keyword result");
				try {
					const keyword = module$1.UTF8ToString(module$1._SherpawKeywordResultKeyword(resultPtr));
					if (keyword) {
						const label = labels.get(keyword);
						if (label === void 0) throw new Error(`Unexpected keyword identifier: ${keyword}`);
						const count = module$1._SherpawKeywordResultCount(resultPtr);
						const tokens = [];
						const timestamps = [];
						for (let i = 0; i < count; i++) {
							tokens.push(module$1.UTF8ToString(module$1._SherpawKeywordResultToken(resultPtr, i)));
							timestamps.push(module$1._SherpawKeywordResultTimestamp(resultPtr, i));
						}
						detections.push({
							label,
							startTime: module$1._SherpawKeywordResultStartTime(resultPtr),
							timestamps,
							tokens
						});
						module$1._SherpaOnnxResetKeywordStream(spotter, stream);
					}
				} finally {
					module$1._SherpaOnnxDestroyKeywordResult(resultPtr);
				}
			}
			return detections;
		},
		reset() {
			requireLive();
			if (!current) return;
			const stream = module$1._SherpaOnnxCreateKeywordStream(current.spotter);
			if (!stream) throw new Error("Unable to create keyword stream");
			module$1._SherpaOnnxDestroyOnlineStream(current.stream);
			current.stream = stream;
			current.sampleRate = void 0;
		},
		dispose() {
			if (disposed) return;
			disposed = true;
			release(current);
			current = void 0;
		}
	};
}

//#endregion
//#region src/prebuilt/kws.js
async function Module(moduleArg = {}) {
	var moduleRtn;
	var Module$1 = moduleArg;
	var ENVIRONMENT_IS_WEB = !!globalThis.window;
	var ENVIRONMENT_IS_WORKER = !!globalThis.WorkerGlobalScope;
	var ENVIRONMENT_IS_NODE = globalThis.process?.versions?.node && globalThis.process?.type != "renderer";
	if (ENVIRONMENT_IS_NODE) {
		const { createRequire } = await import(/* webpackIgnore: true */ /* @vite-ignore */ "node:module");
		var require$1 = createRequire(import.meta.url);
	}
	var thisProgram = "./this.program";
	var quit_ = (status, toThrow) => {
		throw toThrow;
	};
	var _scriptName = import.meta.url;
	var scriptDirectory = "";
	function locateFile(path) {
		if (Module$1["locateFile"]) return Module$1["locateFile"](path, scriptDirectory);
		return scriptDirectory + path;
	}
	var readAsync, readBinary;
	if (ENVIRONMENT_IS_NODE) {
		var fs = require$1("fs");
		if (_scriptName.startsWith("file:")) scriptDirectory = require$1("path").dirname(require$1("url").fileURLToPath(_scriptName)) + "/";
		readBinary = (filename) => {
			filename = isFileURI(filename) ? new URL(filename) : filename;
			return fs.readFileSync(filename);
		};
		readAsync = async (filename, binary = true) => {
			filename = isFileURI(filename) ? new URL(filename) : filename;
			return fs.readFileSync(filename, binary ? void 0 : "utf8");
		};
		if (process.argv.length > 1) thisProgram = process.argv[1].replace(/\\/g, "/");
		process.argv.slice(2);
		quit_ = (status, toThrow) => {
			process.exitCode = status;
			throw toThrow;
		};
	} else if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
		try {
			scriptDirectory = new URL(".", _scriptName).href;
		} catch {}
		if (ENVIRONMENT_IS_WORKER) readBinary = (url) => {
			var xhr = new XMLHttpRequest();
			xhr.open("GET", url, false);
			xhr.responseType = "arraybuffer";
			xhr.send(null);
			return new Uint8Array(xhr.response);
		};
		readAsync = async (url) => {
			if (isFileURI(url)) return new Promise((resolve, reject) => {
				var xhr = new XMLHttpRequest();
				xhr.open("GET", url, true);
				xhr.responseType = "arraybuffer";
				xhr.onload = () => {
					if (xhr.status == 200 || xhr.status == 0 && xhr.response) {
						resolve(xhr.response);
						return;
					}
					reject(xhr.status);
				};
				xhr.onerror = reject;
				xhr.send(null);
			});
			var response = await fetch(url, { credentials: "same-origin" });
			if (response.ok) return response.arrayBuffer();
			throw new Error(response.status + " : " + response.url);
		};
	}
	var out = console.log.bind(console);
	var err = console.error.bind(console);
	var wasmBinary;
	var ABORT = false;
	var isFileURI = (filename) => filename.startsWith("file://");
	var readyPromiseResolve, readyPromiseReject, HEAP8, HEAPU8, HEAP16, HEAP32, HEAPU32, HEAPF64, HEAP64;
	var runtimeInitialized = false;
	function updateMemoryViews() {
		var b = wasmMemory.buffer;
		HEAP8 = new Int8Array(b);
		HEAP16 = new Int16Array(b);
		Module$1["HEAPU8"] = HEAPU8 = new Uint8Array(b);
		new Uint16Array(b);
		HEAP32 = new Int32Array(b);
		HEAPU32 = new Uint32Array(b);
		Module$1["HEAPF32"] = new Float32Array(b);
		HEAPF64 = new Float64Array(b);
		HEAP64 = new BigInt64Array(b);
		new BigUint64Array(b);
	}
	function preRun() {
		if (Module$1["preRun"]) {
			if (typeof Module$1["preRun"] == "function") Module$1["preRun"] = [Module$1["preRun"]];
			while (Module$1["preRun"].length) addOnPreRun(Module$1["preRun"].shift());
		}
		callRuntimeCallbacks(onPreRuns);
	}
	function initRuntime() {
		runtimeInitialized = true;
		if (!Module$1["noFSInit"] && !FS.initialized) FS.init();
		TTY.init();
		wasmExports["P"]();
		FS.ignorePermissions = false;
	}
	function postRun() {
		if (Module$1["postRun"]) {
			if (typeof Module$1["postRun"] == "function") Module$1["postRun"] = [Module$1["postRun"]];
			while (Module$1["postRun"].length) addOnPostRun(Module$1["postRun"].shift());
		}
		callRuntimeCallbacks(onPostRuns);
	}
	function abort(what) {
		Module$1["onAbort"]?.(what);
		what = "Aborted(" + what + ")";
		err(what);
		ABORT = true;
		what += ". Build with -sASSERTIONS for more info.";
		var e = new WebAssembly.RuntimeError(what);
		readyPromiseReject?.(e);
		throw e;
	}
	var wasmBinaryFile;
	function findWasmBinary() {
		if (Module$1["locateFile"]) return locateFile("kws.wasm");
		return new URL("./prebuilt/kws.wasm", import.meta.url).href;
	}
	function getBinarySync(file) {
		if (file == wasmBinaryFile && wasmBinary) return new Uint8Array(wasmBinary);
		if (readBinary) return readBinary(file);
		throw "both async and sync fetching of the wasm failed";
	}
	async function getWasmBinary(binaryFile) {
		if (!wasmBinary) try {
			var response = await readAsync(binaryFile);
			return new Uint8Array(response);
		} catch {}
		return getBinarySync(binaryFile);
	}
	async function instantiateArrayBuffer(binaryFile, imports) {
		try {
			var binary = await getWasmBinary(binaryFile);
			return await WebAssembly.instantiate(binary, imports);
		} catch (reason) {
			err(`failed to asynchronously prepare wasm: ${reason}`);
			abort(reason);
		}
	}
	async function instantiateAsync(binary, binaryFile, imports) {
		if (!binary && !isFileURI(binaryFile) && !ENVIRONMENT_IS_NODE) try {
			var response = fetch(binaryFile, { credentials: "same-origin" });
			return await WebAssembly.instantiateStreaming(response, imports);
		} catch (reason) {
			err(`wasm streaming compile failed: ${reason}`);
			err("falling back to ArrayBuffer instantiation");
		}
		return instantiateArrayBuffer(binaryFile, imports);
	}
	function getWasmImports() {
		return { a: wasmImports };
	}
	async function createWasm() {
		function receiveInstance(instance, module$1) {
			wasmExports = instance.exports;
			assignWasmExports(wasmExports);
			updateMemoryViews();
			return wasmExports;
		}
		function receiveInstantiationResult(result) {
			return receiveInstance(result["instance"]);
		}
		var info = getWasmImports();
		if (Module$1["instantiateWasm"]) return new Promise((resolve, reject) => {
			Module$1["instantiateWasm"](info, (inst, mod) => {
				resolve(receiveInstance(inst, mod));
			});
		});
		wasmBinaryFile ??= findWasmBinary();
		return receiveInstantiationResult(await instantiateAsync(wasmBinary, wasmBinaryFile, info));
	}
	class ExitStatus {
		name = "ExitStatus";
		constructor(status) {
			this.message = `Program terminated with exit(${status})`;
			this.status = status;
		}
	}
	var callRuntimeCallbacks = (callbacks) => {
		while (callbacks.length > 0) callbacks.shift()(Module$1);
	};
	var onPostRuns = [];
	var addOnPostRun = (cb) => onPostRuns.push(cb);
	var onPreRuns = [];
	var addOnPreRun = (cb) => onPreRuns.push(cb);
	var noExitRuntime = true;
	class ExceptionInfo {
		constructor(excPtr) {
			this.excPtr = excPtr;
			this.ptr = excPtr - 24;
		}
		set_type(type) {
			HEAPU32[this.ptr + 4 >> 2] = type;
		}
		get_type() {
			return HEAPU32[this.ptr + 4 >> 2];
		}
		set_destructor(destructor) {
			HEAPU32[this.ptr + 8 >> 2] = destructor;
		}
		get_destructor() {
			return HEAPU32[this.ptr + 8 >> 2];
		}
		set_caught(caught) {
			caught = caught ? 1 : 0;
			HEAP8[this.ptr + 12] = caught;
		}
		get_caught() {
			return HEAP8[this.ptr + 12] != 0;
		}
		set_rethrown(rethrown) {
			rethrown = rethrown ? 1 : 0;
			HEAP8[this.ptr + 13] = rethrown;
		}
		get_rethrown() {
			return HEAP8[this.ptr + 13] != 0;
		}
		init(type, destructor) {
			this.set_adjusted_ptr(0);
			this.set_type(type);
			this.set_destructor(destructor);
		}
		set_adjusted_ptr(adjustedPtr) {
			HEAPU32[this.ptr + 16 >> 2] = adjustedPtr;
		}
		get_adjusted_ptr() {
			return HEAPU32[this.ptr + 16 >> 2];
		}
	}
	var exceptionLast = 0;
	var uncaughtExceptionCount = 0;
	var ___cxa_throw = (ptr, type, destructor) => {
		new ExceptionInfo(ptr).init(type, destructor);
		exceptionLast = ptr;
		uncaughtExceptionCount++;
		throw exceptionLast;
	};
	var syscallGetVarargI = () => {
		var ret = HEAP32[+SYSCALLS.varargs >> 2];
		SYSCALLS.varargs += 4;
		return ret;
	};
	var syscallGetVarargP = syscallGetVarargI;
	var PATH = {
		isAbs: (path) => path.charAt(0) === "/",
		splitPath: (filename) => {
			return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(filename).slice(1);
		},
		normalizeArray: (parts, allowAboveRoot) => {
			var up = 0;
			for (var i = parts.length - 1; i >= 0; i--) {
				var last = parts[i];
				if (last === ".") parts.splice(i, 1);
				else if (last === "..") {
					parts.splice(i, 1);
					up++;
				} else if (up) {
					parts.splice(i, 1);
					up--;
				}
			}
			if (allowAboveRoot) for (; up; up--) parts.unshift("..");
			return parts;
		},
		normalize: (path) => {
			var isAbsolute = PATH.isAbs(path), trailingSlash = path.slice(-1) === "/";
			path = PATH.normalizeArray(path.split("/").filter((p) => !!p), !isAbsolute).join("/");
			if (!path && !isAbsolute) path = ".";
			if (path && trailingSlash) path += "/";
			return (isAbsolute ? "/" : "") + path;
		},
		dirname: (path) => {
			var result = PATH.splitPath(path), root = result[0], dir = result[1];
			if (!root && !dir) return ".";
			if (dir) dir = dir.slice(0, -1);
			return root + dir;
		},
		basename: (path) => path && path.match(/([^\/]+|\/)\/*$/)[1],
		join: (...paths) => PATH.normalize(paths.join("/")),
		join2: (l, r) => PATH.normalize(l + "/" + r)
	};
	var initRandomFill = () => {
		if (ENVIRONMENT_IS_NODE) {
			var nodeCrypto = require$1("crypto");
			return (view) => nodeCrypto.randomFillSync(view);
		}
		return (view) => crypto.getRandomValues(view);
	};
	var randomFill = (view) => {
		(randomFill = initRandomFill())(view);
	};
	var PATH_FS = {
		resolve: (...args) => {
			var resolvedPath = "", resolvedAbsolute = false;
			for (var i = args.length - 1; i >= -1 && !resolvedAbsolute; i--) {
				var path = i >= 0 ? args[i] : FS.cwd();
				if (typeof path != "string") throw new TypeError("Arguments to path.resolve must be strings");
				else if (!path) return "";
				resolvedPath = path + "/" + resolvedPath;
				resolvedAbsolute = PATH.isAbs(path);
			}
			resolvedPath = PATH.normalizeArray(resolvedPath.split("/").filter((p) => !!p), !resolvedAbsolute).join("/");
			return (resolvedAbsolute ? "/" : "") + resolvedPath || ".";
		},
		relative: (from, to) => {
			from = PATH_FS.resolve(from).slice(1);
			to = PATH_FS.resolve(to).slice(1);
			function trim(arr) {
				var start = 0;
				for (; start < arr.length; start++) if (arr[start] !== "") break;
				var end = arr.length - 1;
				for (; end >= 0; end--) if (arr[end] !== "") break;
				if (start > end) return [];
				return arr.slice(start, end - start + 1);
			}
			var fromParts = trim(from.split("/"));
			var toParts = trim(to.split("/"));
			var length = Math.min(fromParts.length, toParts.length);
			var samePartsLength = length;
			for (var i = 0; i < length; i++) if (fromParts[i] !== toParts[i]) {
				samePartsLength = i;
				break;
			}
			var outputParts = [];
			for (var i = samePartsLength; i < fromParts.length; i++) outputParts.push("..");
			outputParts = outputParts.concat(toParts.slice(samePartsLength));
			return outputParts.join("/");
		}
	};
	var UTF8Decoder = globalThis.TextDecoder && new TextDecoder();
	var findStringEnd = (heapOrArray, idx, maxBytesToRead, ignoreNul) => {
		var maxIdx = idx + maxBytesToRead;
		if (ignoreNul) return maxIdx;
		while (heapOrArray[idx] && !(idx >= maxIdx)) ++idx;
		return idx;
	};
	var UTF8ArrayToString = (heapOrArray, idx = 0, maxBytesToRead, ignoreNul) => {
		var endPtr = findStringEnd(heapOrArray, idx, maxBytesToRead, ignoreNul);
		if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
		var str = "";
		while (idx < endPtr) {
			var u0 = heapOrArray[idx++];
			if (!(u0 & 128)) {
				str += String.fromCharCode(u0);
				continue;
			}
			var u1 = heapOrArray[idx++] & 63;
			if ((u0 & 224) == 192) {
				str += String.fromCharCode((u0 & 31) << 6 | u1);
				continue;
			}
			var u2 = heapOrArray[idx++] & 63;
			if ((u0 & 240) == 224) u0 = (u0 & 15) << 12 | u1 << 6 | u2;
			else u0 = (u0 & 7) << 18 | u1 << 12 | u2 << 6 | heapOrArray[idx++] & 63;
			if (u0 < 65536) str += String.fromCharCode(u0);
			else {
				var ch = u0 - 65536;
				str += String.fromCharCode(55296 | ch >> 10, 56320 | ch & 1023);
			}
		}
		return str;
	};
	var FS_stdin_getChar_buffer = [];
	var lengthBytesUTF8 = (str) => {
		var len = 0;
		for (var i = 0; i < str.length; ++i) {
			var c = str.charCodeAt(i);
			if (c <= 127) len++;
			else if (c <= 2047) len += 2;
			else if (c >= 55296 && c <= 57343) {
				len += 4;
				++i;
			} else len += 3;
		}
		return len;
	};
	var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
		if (!(maxBytesToWrite > 0)) return 0;
		var startIdx = outIdx;
		var endIdx = outIdx + maxBytesToWrite - 1;
		for (var i = 0; i < str.length; ++i) {
			var u = str.codePointAt(i);
			if (u <= 127) {
				if (outIdx >= endIdx) break;
				heap[outIdx++] = u;
			} else if (u <= 2047) {
				if (outIdx + 1 >= endIdx) break;
				heap[outIdx++] = 192 | u >> 6;
				heap[outIdx++] = 128 | u & 63;
			} else if (u <= 65535) {
				if (outIdx + 2 >= endIdx) break;
				heap[outIdx++] = 224 | u >> 12;
				heap[outIdx++] = 128 | u >> 6 & 63;
				heap[outIdx++] = 128 | u & 63;
			} else {
				if (outIdx + 3 >= endIdx) break;
				heap[outIdx++] = 240 | u >> 18;
				heap[outIdx++] = 128 | u >> 12 & 63;
				heap[outIdx++] = 128 | u >> 6 & 63;
				heap[outIdx++] = 128 | u & 63;
				i++;
			}
		}
		heap[outIdx] = 0;
		return outIdx - startIdx;
	};
	var intArrayFromString = (stringy, dontAddNull, length) => {
		var len = length > 0 ? length : lengthBytesUTF8(stringy) + 1;
		var u8array = new Array(len);
		var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
		if (dontAddNull) u8array.length = numBytesWritten;
		return u8array;
	};
	var FS_stdin_getChar = () => {
		if (!FS_stdin_getChar_buffer.length) {
			var result = null;
			if (ENVIRONMENT_IS_NODE) {
				var BUFSIZE = 256;
				var buf = Buffer.alloc(BUFSIZE);
				var bytesRead = 0;
				var fd = process.stdin.fd;
				try {
					bytesRead = fs.readSync(fd, buf, 0, BUFSIZE);
				} catch (e) {
					if (e.toString().includes("EOF")) bytesRead = 0;
					else throw e;
				}
				if (bytesRead > 0) result = buf.slice(0, bytesRead).toString("utf-8");
			} else if (globalThis.window?.prompt) {
				result = window.prompt("Input: ");
				if (result !== null) result += "\n";
			}
			if (!result) return null;
			FS_stdin_getChar_buffer = intArrayFromString(result, true);
		}
		return FS_stdin_getChar_buffer.shift();
	};
	var TTY = {
		ttys: [],
		init() {},
		shutdown() {},
		register(dev, ops) {
			TTY.ttys[dev] = {
				input: [],
				output: [],
				ops
			};
			FS.registerDevice(dev, TTY.stream_ops);
		},
		stream_ops: {
			open(stream) {
				var tty = TTY.ttys[stream.node.rdev];
				if (!tty) throw new FS.ErrnoError(43);
				stream.tty = tty;
				stream.seekable = false;
			},
			close(stream) {
				stream.tty.ops.fsync(stream.tty);
			},
			fsync(stream) {
				stream.tty.ops.fsync(stream.tty);
			},
			read(stream, buffer, offset, length, pos) {
				if (!stream.tty || !stream.tty.ops.get_char) throw new FS.ErrnoError(60);
				var bytesRead = 0;
				for (var i = 0; i < length; i++) {
					var result;
					try {
						result = stream.tty.ops.get_char(stream.tty);
					} catch (e) {
						throw new FS.ErrnoError(29);
					}
					if (result === void 0 && bytesRead === 0) throw new FS.ErrnoError(6);
					if (result === null || result === void 0) break;
					bytesRead++;
					buffer[offset + i] = result;
				}
				if (bytesRead) stream.node.atime = Date.now();
				return bytesRead;
			},
			write(stream, buffer, offset, length, pos) {
				if (!stream.tty || !stream.tty.ops.put_char) throw new FS.ErrnoError(60);
				try {
					for (var i = 0; i < length; i++) stream.tty.ops.put_char(stream.tty, buffer[offset + i]);
				} catch (e) {
					throw new FS.ErrnoError(29);
				}
				if (length) stream.node.mtime = stream.node.ctime = Date.now();
				return i;
			}
		},
		default_tty_ops: {
			get_char(tty) {
				return FS_stdin_getChar();
			},
			put_char(tty, val) {
				if (val === null || val === 10) {
					out(UTF8ArrayToString(tty.output));
					tty.output = [];
				} else if (val != 0) tty.output.push(val);
			},
			fsync(tty) {
				if (tty.output?.length > 0) {
					out(UTF8ArrayToString(tty.output));
					tty.output = [];
				}
			},
			ioctl_tcgets(tty) {
				return {
					c_iflag: 25856,
					c_oflag: 5,
					c_cflag: 191,
					c_lflag: 35387,
					c_cc: [
						3,
						28,
						127,
						21,
						4,
						0,
						1,
						0,
						17,
						19,
						26,
						0,
						18,
						15,
						23,
						22,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0,
						0
					]
				};
			},
			ioctl_tcsets(tty, optional_actions, data) {
				return 0;
			},
			ioctl_tiocgwinsz(tty) {
				return [24, 80];
			}
		},
		default_tty1_ops: {
			put_char(tty, val) {
				if (val === null || val === 10) {
					err(UTF8ArrayToString(tty.output));
					tty.output = [];
				} else if (val != 0) tty.output.push(val);
			},
			fsync(tty) {
				if (tty.output?.length > 0) {
					err(UTF8ArrayToString(tty.output));
					tty.output = [];
				}
			}
		}
	};
	var zeroMemory = (ptr, size) => HEAPU8.fill(0, ptr, ptr + size);
	var alignMemory = (size, alignment) => Math.ceil(size / alignment) * alignment;
	var mmapAlloc = (size) => {
		size = alignMemory(size, 65536);
		var ptr = _emscripten_builtin_memalign(65536, size);
		if (ptr) zeroMemory(ptr, size);
		return ptr;
	};
	var MEMFS = {
		ops_table: null,
		mount(mount) {
			return MEMFS.createNode(null, "/", 16895, 0);
		},
		createNode(parent, name, mode, dev) {
			if (FS.isBlkdev(mode) || FS.isFIFO(mode)) throw new FS.ErrnoError(63);
			MEMFS.ops_table ||= {
				dir: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr,
						lookup: MEMFS.node_ops.lookup,
						mknod: MEMFS.node_ops.mknod,
						rename: MEMFS.node_ops.rename,
						unlink: MEMFS.node_ops.unlink,
						rmdir: MEMFS.node_ops.rmdir,
						readdir: MEMFS.node_ops.readdir,
						symlink: MEMFS.node_ops.symlink
					},
					stream: { llseek: MEMFS.stream_ops.llseek }
				},
				file: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr
					},
					stream: {
						llseek: MEMFS.stream_ops.llseek,
						read: MEMFS.stream_ops.read,
						write: MEMFS.stream_ops.write,
						mmap: MEMFS.stream_ops.mmap,
						msync: MEMFS.stream_ops.msync
					}
				},
				link: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr,
						readlink: MEMFS.node_ops.readlink
					},
					stream: {}
				},
				chrdev: {
					node: {
						getattr: MEMFS.node_ops.getattr,
						setattr: MEMFS.node_ops.setattr
					},
					stream: FS.chrdev_stream_ops
				}
			};
			var node = FS.createNode(parent, name, mode, dev);
			if (FS.isDir(node.mode)) {
				node.node_ops = MEMFS.ops_table.dir.node;
				node.stream_ops = MEMFS.ops_table.dir.stream;
				node.contents = {};
			} else if (FS.isFile(node.mode)) {
				node.node_ops = MEMFS.ops_table.file.node;
				node.stream_ops = MEMFS.ops_table.file.stream;
				node.usedBytes = 0;
				node.contents = null;
			} else if (FS.isLink(node.mode)) {
				node.node_ops = MEMFS.ops_table.link.node;
				node.stream_ops = MEMFS.ops_table.link.stream;
			} else if (FS.isChrdev(node.mode)) {
				node.node_ops = MEMFS.ops_table.chrdev.node;
				node.stream_ops = MEMFS.ops_table.chrdev.stream;
			}
			node.atime = node.mtime = node.ctime = Date.now();
			if (parent) {
				parent.contents[name] = node;
				parent.atime = parent.mtime = parent.ctime = node.atime;
			}
			return node;
		},
		getFileDataAsTypedArray(node) {
			if (!node.contents) return new Uint8Array(0);
			if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes);
			return new Uint8Array(node.contents);
		},
		expandFileStorage(node, newCapacity) {
			var prevCapacity = node.contents ? node.contents.length : 0;
			if (prevCapacity >= newCapacity) return;
			newCapacity = Math.max(newCapacity, prevCapacity * (prevCapacity < 1024 * 1024 ? 2 : 1.125) >>> 0);
			if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256);
			var oldContents = node.contents;
			node.contents = new Uint8Array(newCapacity);
			if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0);
		},
		resizeFileStorage(node, newSize) {
			if (node.usedBytes == newSize) return;
			if (newSize == 0) {
				node.contents = null;
				node.usedBytes = 0;
			} else {
				var oldContents = node.contents;
				node.contents = new Uint8Array(newSize);
				if (oldContents) node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes)));
				node.usedBytes = newSize;
			}
		},
		node_ops: {
			getattr(node) {
				var attr = {};
				attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
				attr.ino = node.id;
				attr.mode = node.mode;
				attr.nlink = 1;
				attr.uid = 0;
				attr.gid = 0;
				attr.rdev = node.rdev;
				if (FS.isDir(node.mode)) attr.size = 4096;
				else if (FS.isFile(node.mode)) attr.size = node.usedBytes;
				else if (FS.isLink(node.mode)) attr.size = node.link.length;
				else attr.size = 0;
				attr.atime = new Date(node.atime);
				attr.mtime = new Date(node.mtime);
				attr.ctime = new Date(node.ctime);
				attr.blksize = 4096;
				attr.blocks = Math.ceil(attr.size / attr.blksize);
				return attr;
			},
			setattr(node, attr) {
				for (const key of [
					"mode",
					"atime",
					"mtime",
					"ctime"
				]) if (attr[key] != null) node[key] = attr[key];
				if (attr.size !== void 0) MEMFS.resizeFileStorage(node, attr.size);
			},
			lookup(parent, name) {
				if (!MEMFS.doesNotExistError) {
					MEMFS.doesNotExistError = new FS.ErrnoError(44);
					MEMFS.doesNotExistError.stack = "<generic error, no stack>";
				}
				throw MEMFS.doesNotExistError;
			},
			mknod(parent, name, mode, dev) {
				return MEMFS.createNode(parent, name, mode, dev);
			},
			rename(old_node, new_dir, new_name) {
				var new_node;
				try {
					new_node = FS.lookupNode(new_dir, new_name);
				} catch (e) {}
				if (new_node) {
					if (FS.isDir(old_node.mode)) for (var i in new_node.contents) throw new FS.ErrnoError(55);
					FS.hashRemoveNode(new_node);
				}
				delete old_node.parent.contents[old_node.name];
				new_dir.contents[new_name] = old_node;
				old_node.name = new_name;
				new_dir.ctime = new_dir.mtime = old_node.parent.ctime = old_node.parent.mtime = Date.now();
			},
			unlink(parent, name) {
				delete parent.contents[name];
				parent.ctime = parent.mtime = Date.now();
			},
			rmdir(parent, name) {
				for (var i in FS.lookupNode(parent, name).contents) throw new FS.ErrnoError(55);
				delete parent.contents[name];
				parent.ctime = parent.mtime = Date.now();
			},
			readdir(node) {
				return [
					".",
					"..",
					...Object.keys(node.contents)
				];
			},
			symlink(parent, newname, oldpath) {
				var node = MEMFS.createNode(parent, newname, 41471, 0);
				node.link = oldpath;
				return node;
			},
			readlink(node) {
				if (!FS.isLink(node.mode)) throw new FS.ErrnoError(28);
				return node.link;
			}
		},
		stream_ops: {
			read(stream, buffer, offset, length, position) {
				var contents = stream.node.contents;
				if (position >= stream.node.usedBytes) return 0;
				var size = Math.min(stream.node.usedBytes - position, length);
				if (size > 8 && contents.subarray) buffer.set(contents.subarray(position, position + size), offset);
				else for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
				return size;
			},
			write(stream, buffer, offset, length, position, canOwn) {
				if (buffer.buffer === HEAP8.buffer) canOwn = false;
				if (!length) return 0;
				var node = stream.node;
				node.mtime = node.ctime = Date.now();
				if (buffer.subarray && (!node.contents || node.contents.subarray)) {
					if (canOwn) {
						node.contents = buffer.subarray(offset, offset + length);
						node.usedBytes = length;
						return length;
					} else if (node.usedBytes === 0 && position === 0) {
						node.contents = buffer.slice(offset, offset + length);
						node.usedBytes = length;
						return length;
					} else if (position + length <= node.usedBytes) {
						node.contents.set(buffer.subarray(offset, offset + length), position);
						return length;
					}
				}
				MEMFS.expandFileStorage(node, position + length);
				if (node.contents.subarray && buffer.subarray) node.contents.set(buffer.subarray(offset, offset + length), position);
				else for (var i = 0; i < length; i++) node.contents[position + i] = buffer[offset + i];
				node.usedBytes = Math.max(node.usedBytes, position + length);
				return length;
			},
			llseek(stream, offset, whence) {
				var position = offset;
				if (whence === 1) position += stream.position;
				else if (whence === 2) {
					if (FS.isFile(stream.node.mode)) position += stream.node.usedBytes;
				}
				if (position < 0) throw new FS.ErrnoError(28);
				return position;
			},
			mmap(stream, length, position, prot, flags) {
				if (!FS.isFile(stream.node.mode)) throw new FS.ErrnoError(43);
				var ptr;
				var allocated;
				var contents = stream.node.contents;
				if (!(flags & 2) && contents && contents.buffer === HEAP8.buffer) {
					allocated = false;
					ptr = contents.byteOffset;
				} else {
					allocated = true;
					ptr = mmapAlloc(length);
					if (!ptr) throw new FS.ErrnoError(48);
					if (contents) {
						if (position > 0 || position + length < contents.length) if (contents.subarray) contents = contents.subarray(position, position + length);
						else contents = Array.prototype.slice.call(contents, position, position + length);
						HEAP8.set(contents, ptr);
					}
				}
				return {
					ptr,
					allocated
				};
			},
			msync(stream, buffer, offset, length, mmapFlags) {
				MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
				return 0;
			}
		}
	};
	var FS_modeStringToFlags = (str) => {
		var flags = {
			r: 0,
			"r+": 2,
			w: 577,
			"w+": 578,
			a: 1089,
			"a+": 1090
		}[str];
		if (typeof flags == "undefined") throw new Error(`Unknown file open mode: ${str}`);
		return flags;
	};
	var FS_getMode = (canRead, canWrite) => {
		var mode = 0;
		if (canRead) mode |= 365;
		if (canWrite) mode |= 146;
		return mode;
	};
	var asyncLoad = async (url) => {
		var arrayBuffer = await readAsync(url);
		return new Uint8Array(arrayBuffer);
	};
	var FS_createDataFile = (...args) => FS.createDataFile(...args);
	var getUniqueRunDependency = (id) => id;
	var runDependencies = 0;
	var dependenciesFulfilled = null;
	var removeRunDependency = (id) => {
		runDependencies--;
		Module$1["monitorRunDependencies"]?.(runDependencies);
		if (runDependencies == 0) {
			if (dependenciesFulfilled) {
				var callback = dependenciesFulfilled;
				dependenciesFulfilled = null;
				callback();
			}
		}
	};
	var addRunDependency = (id) => {
		runDependencies++;
		Module$1["monitorRunDependencies"]?.(runDependencies);
	};
	var preloadPlugins = [];
	var FS_handledByPreloadPlugin = async (byteArray, fullname) => {
		if (typeof Browser != "undefined") Browser.init();
		for (var plugin of preloadPlugins) if (plugin["canHandle"](fullname)) return plugin["handle"](byteArray, fullname);
		return byteArray;
	};
	var FS_preloadFile = async (parent, name, url, canRead, canWrite, dontCreateFile, canOwn, preFinish) => {
		var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
		var dep = getUniqueRunDependency(`cp ${fullname}`);
		addRunDependency(dep);
		try {
			var byteArray = url;
			if (typeof url == "string") byteArray = await asyncLoad(url);
			byteArray = await FS_handledByPreloadPlugin(byteArray, fullname);
			preFinish?.();
			if (!dontCreateFile) FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
		} finally {
			removeRunDependency(dep);
		}
	};
	var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
		FS_preloadFile(parent, name, url, canRead, canWrite, dontCreateFile, canOwn, preFinish).then(onload).catch(onerror);
	};
	var FS = {
		root: null,
		mounts: [],
		devices: {},
		streams: [],
		nextInode: 1,
		nameTable: null,
		currentPath: "/",
		initialized: false,
		ignorePermissions: true,
		filesystems: null,
		syncFSRequests: 0,
		readFiles: {},
		ErrnoError: class {
			name = "ErrnoError";
			constructor(errno) {
				this.errno = errno;
			}
		},
		FSStream: class {
			shared = {};
			get object() {
				return this.node;
			}
			set object(val) {
				this.node = val;
			}
			get isRead() {
				return (this.flags & 2097155) !== 1;
			}
			get isWrite() {
				return (this.flags & 2097155) !== 0;
			}
			get isAppend() {
				return this.flags & 1024;
			}
			get flags() {
				return this.shared.flags;
			}
			set flags(val) {
				this.shared.flags = val;
			}
			get position() {
				return this.shared.position;
			}
			set position(val) {
				this.shared.position = val;
			}
		},
		FSNode: class {
			node_ops = {};
			stream_ops = {};
			readMode = 365;
			writeMode = 146;
			mounted = null;
			constructor(parent, name, mode, rdev) {
				if (!parent) parent = this;
				this.parent = parent;
				this.mount = parent.mount;
				this.id = FS.nextInode++;
				this.name = name;
				this.mode = mode;
				this.rdev = rdev;
				this.atime = this.mtime = this.ctime = Date.now();
			}
			get read() {
				return (this.mode & this.readMode) === this.readMode;
			}
			set read(val) {
				val ? this.mode |= this.readMode : this.mode &= ~this.readMode;
			}
			get write() {
				return (this.mode & this.writeMode) === this.writeMode;
			}
			set write(val) {
				val ? this.mode |= this.writeMode : this.mode &= ~this.writeMode;
			}
			get isFolder() {
				return FS.isDir(this.mode);
			}
			get isDevice() {
				return FS.isChrdev(this.mode);
			}
		},
		lookupPath(path, opts = {}) {
			if (!path) throw new FS.ErrnoError(44);
			opts.follow_mount ??= true;
			if (!PATH.isAbs(path)) path = FS.cwd() + "/" + path;
			linkloop: for (var nlinks = 0; nlinks < 40; nlinks++) {
				var parts = path.split("/").filter((p) => !!p);
				var current = FS.root;
				var current_path = "/";
				for (var i = 0; i < parts.length; i++) {
					var islast = i === parts.length - 1;
					if (islast && opts.parent) break;
					if (parts[i] === ".") continue;
					if (parts[i] === "..") {
						current_path = PATH.dirname(current_path);
						if (FS.isRoot(current)) {
							path = current_path + "/" + parts.slice(i + 1).join("/");
							nlinks--;
							continue linkloop;
						} else current = current.parent;
						continue;
					}
					current_path = PATH.join2(current_path, parts[i]);
					try {
						current = FS.lookupNode(current, parts[i]);
					} catch (e) {
						if (e?.errno === 44 && islast && opts.noent_okay) return { path: current_path };
						throw e;
					}
					if (FS.isMountpoint(current) && (!islast || opts.follow_mount)) current = current.mounted.root;
					if (FS.isLink(current.mode) && (!islast || opts.follow)) {
						if (!current.node_ops.readlink) throw new FS.ErrnoError(52);
						var link = current.node_ops.readlink(current);
						if (!PATH.isAbs(link)) link = PATH.dirname(current_path) + "/" + link;
						path = link + "/" + parts.slice(i + 1).join("/");
						continue linkloop;
					}
				}
				return {
					path: current_path,
					node: current
				};
			}
			throw new FS.ErrnoError(32);
		},
		getPath(node) {
			var path;
			while (true) {
				if (FS.isRoot(node)) {
					var mount = node.mount.mountpoint;
					if (!path) return mount;
					return mount[mount.length - 1] !== "/" ? `${mount}/${path}` : mount + path;
				}
				path = path ? `${node.name}/${path}` : node.name;
				node = node.parent;
			}
		},
		hashName(parentid, name) {
			var hash = 0;
			for (var i = 0; i < name.length; i++) hash = (hash << 5) - hash + name.charCodeAt(i) | 0;
			return (parentid + hash >>> 0) % FS.nameTable.length;
		},
		hashAddNode(node) {
			var hash = FS.hashName(node.parent.id, node.name);
			node.name_next = FS.nameTable[hash];
			FS.nameTable[hash] = node;
		},
		hashRemoveNode(node) {
			var hash = FS.hashName(node.parent.id, node.name);
			if (FS.nameTable[hash] === node) FS.nameTable[hash] = node.name_next;
			else {
				var current = FS.nameTable[hash];
				while (current) {
					if (current.name_next === node) {
						current.name_next = node.name_next;
						break;
					}
					current = current.name_next;
				}
			}
		},
		lookupNode(parent, name) {
			var errCode = FS.mayLookup(parent);
			if (errCode) throw new FS.ErrnoError(errCode);
			var hash = FS.hashName(parent.id, name);
			for (var node = FS.nameTable[hash]; node; node = node.name_next) {
				var nodeName = node.name;
				if (node.parent.id === parent.id && nodeName === name) return node;
			}
			return FS.lookup(parent, name);
		},
		createNode(parent, name, mode, rdev) {
			var node = new FS.FSNode(parent, name, mode, rdev);
			FS.hashAddNode(node);
			return node;
		},
		destroyNode(node) {
			FS.hashRemoveNode(node);
		},
		isRoot(node) {
			return node === node.parent;
		},
		isMountpoint(node) {
			return !!node.mounted;
		},
		isFile(mode) {
			return (mode & 61440) === 32768;
		},
		isDir(mode) {
			return (mode & 61440) === 16384;
		},
		isLink(mode) {
			return (mode & 61440) === 40960;
		},
		isChrdev(mode) {
			return (mode & 61440) === 8192;
		},
		isBlkdev(mode) {
			return (mode & 61440) === 24576;
		},
		isFIFO(mode) {
			return (mode & 61440) === 4096;
		},
		isSocket(mode) {
			return (mode & 49152) === 49152;
		},
		flagsToPermissionString(flag) {
			var perms = [
				"r",
				"w",
				"rw"
			][flag & 3];
			if (flag & 512) perms += "w";
			return perms;
		},
		nodePermissions(node, perms) {
			if (FS.ignorePermissions) return 0;
			if (perms.includes("r") && !(node.mode & 292)) return 2;
			else if (perms.includes("w") && !(node.mode & 146)) return 2;
			else if (perms.includes("x") && !(node.mode & 73)) return 2;
			return 0;
		},
		mayLookup(dir) {
			if (!FS.isDir(dir.mode)) return 54;
			var errCode = FS.nodePermissions(dir, "x");
			if (errCode) return errCode;
			if (!dir.node_ops.lookup) return 2;
			return 0;
		},
		mayCreate(dir, name) {
			if (!FS.isDir(dir.mode)) return 54;
			try {
				FS.lookupNode(dir, name);
				return 20;
			} catch (e) {}
			return FS.nodePermissions(dir, "wx");
		},
		mayDelete(dir, name, isdir) {
			var node;
			try {
				node = FS.lookupNode(dir, name);
			} catch (e) {
				return e.errno;
			}
			var errCode = FS.nodePermissions(dir, "wx");
			if (errCode) return errCode;
			if (isdir) {
				if (!FS.isDir(node.mode)) return 54;
				if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) return 10;
			} else if (FS.isDir(node.mode)) return 31;
			return 0;
		},
		mayOpen(node, flags) {
			if (!node) return 44;
			if (FS.isLink(node.mode)) return 32;
			else if (FS.isDir(node.mode)) {
				if (FS.flagsToPermissionString(flags) !== "r" || flags & 576) return 31;
			}
			return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
		},
		checkOpExists(op, err$1) {
			if (!op) throw new FS.ErrnoError(err$1);
			return op;
		},
		MAX_OPEN_FDS: 4096,
		nextfd() {
			for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) if (!FS.streams[fd]) return fd;
			throw new FS.ErrnoError(33);
		},
		getStreamChecked(fd) {
			var stream = FS.getStream(fd);
			if (!stream) throw new FS.ErrnoError(8);
			return stream;
		},
		getStream: (fd) => FS.streams[fd],
		createStream(stream, fd = -1) {
			stream = Object.assign(new FS.FSStream(), stream);
			if (fd == -1) fd = FS.nextfd();
			stream.fd = fd;
			FS.streams[fd] = stream;
			return stream;
		},
		closeStream(fd) {
			FS.streams[fd] = null;
		},
		dupStream(origStream, fd = -1) {
			var stream = FS.createStream(origStream, fd);
			stream.stream_ops?.dup?.(stream);
			return stream;
		},
		doSetAttr(stream, node, attr) {
			var setattr = stream?.stream_ops.setattr;
			var arg = setattr ? stream : node;
			setattr ??= node.node_ops.setattr;
			FS.checkOpExists(setattr, 63);
			setattr(arg, attr);
		},
		chrdev_stream_ops: {
			open(stream) {
				stream.stream_ops = FS.getDevice(stream.node.rdev).stream_ops;
				stream.stream_ops.open?.(stream);
			},
			llseek() {
				throw new FS.ErrnoError(70);
			}
		},
		major: (dev) => dev >> 8,
		minor: (dev) => dev & 255,
		makedev: (ma, mi) => ma << 8 | mi,
		registerDevice(dev, ops) {
			FS.devices[dev] = { stream_ops: ops };
		},
		getDevice: (dev) => FS.devices[dev],
		getMounts(mount) {
			var mounts = [];
			var check = [mount];
			while (check.length) {
				var m = check.pop();
				mounts.push(m);
				check.push(...m.mounts);
			}
			return mounts;
		},
		syncfs(populate, callback) {
			if (typeof populate == "function") {
				callback = populate;
				populate = false;
			}
			FS.syncFSRequests++;
			if (FS.syncFSRequests > 1) err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
			var mounts = FS.getMounts(FS.root.mount);
			var completed = 0;
			function doCallback(errCode) {
				FS.syncFSRequests--;
				return callback(errCode);
			}
			function done(errCode) {
				if (errCode) {
					if (!done.errored) {
						done.errored = true;
						return doCallback(errCode);
					}
					return;
				}
				if (++completed >= mounts.length) doCallback(null);
			}
			for (var mount of mounts) if (mount.type.syncfs) mount.type.syncfs(mount, populate, done);
			else done(null);
		},
		mount(type, opts, mountpoint) {
			var root = mountpoint === "/";
			var pseudo = !mountpoint;
			var node;
			if (root && FS.root) throw new FS.ErrnoError(10);
			else if (!root && !pseudo) {
				var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
				mountpoint = lookup.path;
				node = lookup.node;
				if (FS.isMountpoint(node)) throw new FS.ErrnoError(10);
				if (!FS.isDir(node.mode)) throw new FS.ErrnoError(54);
			}
			var mount = {
				type,
				opts,
				mountpoint,
				mounts: []
			};
			var mountRoot = type.mount(mount);
			mountRoot.mount = mount;
			mount.root = mountRoot;
			if (root) FS.root = mountRoot;
			else if (node) {
				node.mounted = mount;
				if (node.mount) node.mount.mounts.push(mount);
			}
			return mountRoot;
		},
		unmount(mountpoint) {
			var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
			if (!FS.isMountpoint(lookup.node)) throw new FS.ErrnoError(28);
			var node = lookup.node;
			var mount = node.mounted;
			var mounts = FS.getMounts(mount);
			for (var [hash, current] of Object.entries(FS.nameTable)) while (current) {
				var next = current.name_next;
				if (mounts.includes(current.mount)) FS.destroyNode(current);
				current = next;
			}
			node.mounted = null;
			var idx = node.mount.mounts.indexOf(mount);
			node.mount.mounts.splice(idx, 1);
		},
		lookup(parent, name) {
			return parent.node_ops.lookup(parent, name);
		},
		mknod(path, mode, dev) {
			var parent = FS.lookupPath(path, { parent: true }).node;
			var name = PATH.basename(path);
			if (!name) throw new FS.ErrnoError(28);
			if (name === "." || name === "..") throw new FS.ErrnoError(20);
			var errCode = FS.mayCreate(parent, name);
			if (errCode) throw new FS.ErrnoError(errCode);
			if (!parent.node_ops.mknod) throw new FS.ErrnoError(63);
			return parent.node_ops.mknod(parent, name, mode, dev);
		},
		statfs(path) {
			return FS.statfsNode(FS.lookupPath(path, { follow: true }).node);
		},
		statfsStream(stream) {
			return FS.statfsNode(stream.node);
		},
		statfsNode(node) {
			var rtn = {
				bsize: 4096,
				frsize: 4096,
				blocks: 1e6,
				bfree: 5e5,
				bavail: 5e5,
				files: FS.nextInode,
				ffree: FS.nextInode - 1,
				fsid: 42,
				flags: 2,
				namelen: 255
			};
			if (node.node_ops.statfs) Object.assign(rtn, node.node_ops.statfs(node.mount.opts.root));
			return rtn;
		},
		create(path, mode = 438) {
			mode &= 4095;
			mode |= 32768;
			return FS.mknod(path, mode, 0);
		},
		mkdir(path, mode = 511) {
			mode &= 1023;
			mode |= 16384;
			return FS.mknod(path, mode, 0);
		},
		mkdirTree(path, mode) {
			var dirs = path.split("/");
			var d = "";
			for (var dir of dirs) {
				if (!dir) continue;
				if (d || PATH.isAbs(path)) d += "/";
				d += dir;
				try {
					FS.mkdir(d, mode);
				} catch (e) {
					if (e.errno != 20) throw e;
				}
			}
		},
		mkdev(path, mode, dev) {
			if (typeof dev == "undefined") {
				dev = mode;
				mode = 438;
			}
			mode |= 8192;
			return FS.mknod(path, mode, dev);
		},
		symlink(oldpath, newpath) {
			if (!PATH_FS.resolve(oldpath)) throw new FS.ErrnoError(44);
			var parent = FS.lookupPath(newpath, { parent: true }).node;
			if (!parent) throw new FS.ErrnoError(44);
			var newname = PATH.basename(newpath);
			var errCode = FS.mayCreate(parent, newname);
			if (errCode) throw new FS.ErrnoError(errCode);
			if (!parent.node_ops.symlink) throw new FS.ErrnoError(63);
			return parent.node_ops.symlink(parent, newname, oldpath);
		},
		rename(old_path, new_path) {
			var old_dirname = PATH.dirname(old_path);
			var new_dirname = PATH.dirname(new_path);
			var old_name = PATH.basename(old_path);
			var new_name = PATH.basename(new_path);
			var lookup = FS.lookupPath(old_path, { parent: true }), old_dir = lookup.node, new_dir;
			lookup = FS.lookupPath(new_path, { parent: true });
			new_dir = lookup.node;
			if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
			if (old_dir.mount !== new_dir.mount) throw new FS.ErrnoError(75);
			var old_node = FS.lookupNode(old_dir, old_name);
			var relative = PATH_FS.relative(old_path, new_dirname);
			if (relative.charAt(0) !== ".") throw new FS.ErrnoError(28);
			relative = PATH_FS.relative(new_path, old_dirname);
			if (relative.charAt(0) !== ".") throw new FS.ErrnoError(55);
			var new_node;
			try {
				new_node = FS.lookupNode(new_dir, new_name);
			} catch (e) {}
			if (old_node === new_node) return;
			var isdir = FS.isDir(old_node.mode);
			var errCode = FS.mayDelete(old_dir, old_name, isdir);
			if (errCode) throw new FS.ErrnoError(errCode);
			errCode = new_node ? FS.mayDelete(new_dir, new_name, isdir) : FS.mayCreate(new_dir, new_name);
			if (errCode) throw new FS.ErrnoError(errCode);
			if (!old_dir.node_ops.rename) throw new FS.ErrnoError(63);
			if (FS.isMountpoint(old_node) || new_node && FS.isMountpoint(new_node)) throw new FS.ErrnoError(10);
			if (new_dir !== old_dir) {
				errCode = FS.nodePermissions(old_dir, "w");
				if (errCode) throw new FS.ErrnoError(errCode);
			}
			FS.hashRemoveNode(old_node);
			try {
				old_dir.node_ops.rename(old_node, new_dir, new_name);
				old_node.parent = new_dir;
			} catch (e) {
				throw e;
			} finally {
				FS.hashAddNode(old_node);
			}
		},
		rmdir(path) {
			var parent = FS.lookupPath(path, { parent: true }).node;
			var name = PATH.basename(path);
			var node = FS.lookupNode(parent, name);
			var errCode = FS.mayDelete(parent, name, true);
			if (errCode) throw new FS.ErrnoError(errCode);
			if (!parent.node_ops.rmdir) throw new FS.ErrnoError(63);
			if (FS.isMountpoint(node)) throw new FS.ErrnoError(10);
			parent.node_ops.rmdir(parent, name);
			FS.destroyNode(node);
		},
		readdir(path) {
			var node = FS.lookupPath(path, { follow: true }).node;
			return FS.checkOpExists(node.node_ops.readdir, 54)(node);
		},
		unlink(path) {
			var parent = FS.lookupPath(path, { parent: true }).node;
			if (!parent) throw new FS.ErrnoError(44);
			var name = PATH.basename(path);
			var node = FS.lookupNode(parent, name);
			var errCode = FS.mayDelete(parent, name, false);
			if (errCode) throw new FS.ErrnoError(errCode);
			if (!parent.node_ops.unlink) throw new FS.ErrnoError(63);
			if (FS.isMountpoint(node)) throw new FS.ErrnoError(10);
			parent.node_ops.unlink(parent, name);
			FS.destroyNode(node);
		},
		readlink(path) {
			var link = FS.lookupPath(path).node;
			if (!link) throw new FS.ErrnoError(44);
			if (!link.node_ops.readlink) throw new FS.ErrnoError(28);
			return link.node_ops.readlink(link);
		},
		stat(path, dontFollow) {
			var node = FS.lookupPath(path, { follow: !dontFollow }).node;
			return FS.checkOpExists(node.node_ops.getattr, 63)(node);
		},
		fstat(fd) {
			var stream = FS.getStreamChecked(fd);
			var node = stream.node;
			var getattr = stream.stream_ops.getattr;
			var arg = getattr ? stream : node;
			getattr ??= node.node_ops.getattr;
			FS.checkOpExists(getattr, 63);
			return getattr(arg);
		},
		lstat(path) {
			return FS.stat(path, true);
		},
		doChmod(stream, node, mode, dontFollow) {
			FS.doSetAttr(stream, node, {
				mode: mode & 4095 | node.mode & -4096,
				ctime: Date.now(),
				dontFollow
			});
		},
		chmod(path, mode, dontFollow) {
			var node;
			if (typeof path == "string") node = FS.lookupPath(path, { follow: !dontFollow }).node;
			else node = path;
			FS.doChmod(null, node, mode, dontFollow);
		},
		lchmod(path, mode) {
			FS.chmod(path, mode, true);
		},
		fchmod(fd, mode) {
			var stream = FS.getStreamChecked(fd);
			FS.doChmod(stream, stream.node, mode, false);
		},
		doChown(stream, node, dontFollow) {
			FS.doSetAttr(stream, node, {
				timestamp: Date.now(),
				dontFollow
			});
		},
		chown(path, uid, gid, dontFollow) {
			var node;
			if (typeof path == "string") node = FS.lookupPath(path, { follow: !dontFollow }).node;
			else node = path;
			FS.doChown(null, node, dontFollow);
		},
		lchown(path, uid, gid) {
			FS.chown(path, uid, gid, true);
		},
		fchown(fd, uid, gid) {
			var stream = FS.getStreamChecked(fd);
			FS.doChown(stream, stream.node, false);
		},
		doTruncate(stream, node, len) {
			if (FS.isDir(node.mode)) throw new FS.ErrnoError(31);
			if (!FS.isFile(node.mode)) throw new FS.ErrnoError(28);
			var errCode = FS.nodePermissions(node, "w");
			if (errCode) throw new FS.ErrnoError(errCode);
			FS.doSetAttr(stream, node, {
				size: len,
				timestamp: Date.now()
			});
		},
		truncate(path, len) {
			if (len < 0) throw new FS.ErrnoError(28);
			var node;
			if (typeof path == "string") node = FS.lookupPath(path, { follow: true }).node;
			else node = path;
			FS.doTruncate(null, node, len);
		},
		ftruncate(fd, len) {
			var stream = FS.getStreamChecked(fd);
			if (len < 0 || (stream.flags & 2097155) === 0) throw new FS.ErrnoError(28);
			FS.doTruncate(stream, stream.node, len);
		},
		utime(path, atime, mtime) {
			var node = FS.lookupPath(path, { follow: true }).node;
			FS.checkOpExists(node.node_ops.setattr, 63)(node, {
				atime,
				mtime
			});
		},
		open(path, flags, mode = 438) {
			if (path === "") throw new FS.ErrnoError(44);
			flags = typeof flags == "string" ? FS_modeStringToFlags(flags) : flags;
			if (flags & 64) mode = mode & 4095 | 32768;
			else mode = 0;
			var node;
			var isDirPath;
			if (typeof path == "object") node = path;
			else {
				isDirPath = path.endsWith("/");
				var lookup = FS.lookupPath(path, {
					follow: !(flags & 131072),
					noent_okay: true
				});
				node = lookup.node;
				path = lookup.path;
			}
			var created = false;
			if (flags & 64) if (node) {
				if (flags & 128) throw new FS.ErrnoError(20);
			} else if (isDirPath) throw new FS.ErrnoError(31);
			else {
				node = FS.mknod(path, mode | 511, 0);
				created = true;
			}
			if (!node) throw new FS.ErrnoError(44);
			if (FS.isChrdev(node.mode)) flags &= -513;
			if (flags & 65536 && !FS.isDir(node.mode)) throw new FS.ErrnoError(54);
			if (!created) {
				var errCode = FS.mayOpen(node, flags);
				if (errCode) throw new FS.ErrnoError(errCode);
			}
			if (flags & 512 && !created) FS.truncate(node, 0);
			flags &= -131713;
			var stream = FS.createStream({
				node,
				path: FS.getPath(node),
				flags,
				seekable: true,
				position: 0,
				stream_ops: node.stream_ops,
				ungotten: [],
				error: false
			});
			if (stream.stream_ops.open) stream.stream_ops.open(stream);
			if (created) FS.chmod(node, mode & 511);
			if (Module$1["logReadFiles"] && !(flags & 1)) {
				if (!(path in FS.readFiles)) FS.readFiles[path] = 1;
			}
			return stream;
		},
		close(stream) {
			if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
			if (stream.getdents) stream.getdents = null;
			try {
				if (stream.stream_ops.close) stream.stream_ops.close(stream);
			} catch (e) {
				throw e;
			} finally {
				FS.closeStream(stream.fd);
			}
			stream.fd = null;
		},
		isClosed(stream) {
			return stream.fd === null;
		},
		llseek(stream, offset, whence) {
			if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
			if (!stream.seekable || !stream.stream_ops.llseek) throw new FS.ErrnoError(70);
			if (whence != 0 && whence != 1 && whence != 2) throw new FS.ErrnoError(28);
			stream.position = stream.stream_ops.llseek(stream, offset, whence);
			stream.ungotten = [];
			return stream.position;
		},
		read(stream, buffer, offset, length, position) {
			if (length < 0 || position < 0) throw new FS.ErrnoError(28);
			if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
			if ((stream.flags & 2097155) === 1) throw new FS.ErrnoError(8);
			if (FS.isDir(stream.node.mode)) throw new FS.ErrnoError(31);
			if (!stream.stream_ops.read) throw new FS.ErrnoError(28);
			var seeking = typeof position != "undefined";
			if (!seeking) position = stream.position;
			else if (!stream.seekable) throw new FS.ErrnoError(70);
			var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
			if (!seeking) stream.position += bytesRead;
			return bytesRead;
		},
		write(stream, buffer, offset, length, position, canOwn) {
			if (length < 0 || position < 0) throw new FS.ErrnoError(28);
			if (FS.isClosed(stream)) throw new FS.ErrnoError(8);
			if ((stream.flags & 2097155) === 0) throw new FS.ErrnoError(8);
			if (FS.isDir(stream.node.mode)) throw new FS.ErrnoError(31);
			if (!stream.stream_ops.write) throw new FS.ErrnoError(28);
			if (stream.seekable && stream.flags & 1024) FS.llseek(stream, 0, 2);
			var seeking = typeof position != "undefined";
			if (!seeking) position = stream.position;
			else if (!stream.seekable) throw new FS.ErrnoError(70);
			var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
			if (!seeking) stream.position += bytesWritten;
			return bytesWritten;
		},
		mmap(stream, length, position, prot, flags) {
			if ((prot & 2) !== 0 && (flags & 2) === 0 && (stream.flags & 2097155) !== 2) throw new FS.ErrnoError(2);
			if ((stream.flags & 2097155) === 1) throw new FS.ErrnoError(2);
			if (!stream.stream_ops.mmap) throw new FS.ErrnoError(43);
			if (!length) throw new FS.ErrnoError(28);
			return stream.stream_ops.mmap(stream, length, position, prot, flags);
		},
		msync(stream, buffer, offset, length, mmapFlags) {
			if (!stream.stream_ops.msync) return 0;
			return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
		},
		ioctl(stream, cmd, arg) {
			if (!stream.stream_ops.ioctl) throw new FS.ErrnoError(59);
			return stream.stream_ops.ioctl(stream, cmd, arg);
		},
		readFile(path, opts = {}) {
			opts.flags = opts.flags || 0;
			opts.encoding = opts.encoding || "binary";
			if (opts.encoding !== "utf8" && opts.encoding !== "binary") abort(`Invalid encoding type "${opts.encoding}"`);
			var stream = FS.open(path, opts.flags);
			var length = FS.stat(path).size;
			var buf = new Uint8Array(length);
			FS.read(stream, buf, 0, length, 0);
			if (opts.encoding === "utf8") buf = UTF8ArrayToString(buf);
			FS.close(stream);
			return buf;
		},
		writeFile(path, data, opts = {}) {
			opts.flags = opts.flags || 577;
			var stream = FS.open(path, opts.flags, opts.mode);
			if (typeof data == "string") data = new Uint8Array(intArrayFromString(data, true));
			if (ArrayBuffer.isView(data)) FS.write(stream, data, 0, data.byteLength, void 0, opts.canOwn);
			else abort("Unsupported data type");
			FS.close(stream);
		},
		cwd: () => FS.currentPath,
		chdir(path) {
			var lookup = FS.lookupPath(path, { follow: true });
			if (lookup.node === null) throw new FS.ErrnoError(44);
			if (!FS.isDir(lookup.node.mode)) throw new FS.ErrnoError(54);
			var errCode = FS.nodePermissions(lookup.node, "x");
			if (errCode) throw new FS.ErrnoError(errCode);
			FS.currentPath = lookup.path;
		},
		createDefaultDirectories() {
			FS.mkdir("/tmp");
			FS.mkdir("/home");
			FS.mkdir("/home/web_user");
		},
		createDefaultDevices() {
			FS.mkdir("/dev");
			FS.registerDevice(FS.makedev(1, 3), {
				read: () => 0,
				write: (stream, buffer, offset, length, pos) => length,
				llseek: () => 0
			});
			FS.mkdev("/dev/null", FS.makedev(1, 3));
			TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
			TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
			FS.mkdev("/dev/tty", FS.makedev(5, 0));
			FS.mkdev("/dev/tty1", FS.makedev(6, 0));
			var randomBuffer = new Uint8Array(1024), randomLeft = 0;
			var randomByte = () => {
				if (randomLeft === 0) {
					randomFill(randomBuffer);
					randomLeft = randomBuffer.byteLength;
				}
				return randomBuffer[--randomLeft];
			};
			FS.createDevice("/dev", "random", randomByte);
			FS.createDevice("/dev", "urandom", randomByte);
			FS.mkdir("/dev/shm");
			FS.mkdir("/dev/shm/tmp");
		},
		createSpecialDirectories() {
			FS.mkdir("/proc");
			var proc_self = FS.mkdir("/proc/self");
			FS.mkdir("/proc/self/fd");
			FS.mount({ mount() {
				var node = FS.createNode(proc_self, "fd", 16895, 73);
				node.stream_ops = { llseek: MEMFS.stream_ops.llseek };
				node.node_ops = {
					lookup(parent, name) {
						var fd = +name;
						var stream = FS.getStreamChecked(fd);
						var ret = {
							parent: null,
							mount: { mountpoint: "fake" },
							node_ops: { readlink: () => stream.path },
							id: fd + 1
						};
						ret.parent = ret;
						return ret;
					},
					readdir() {
						return Array.from(FS.streams.entries()).filter(([k, v]) => v).map(([k, v]) => k.toString());
					}
				};
				return node;
			} }, {}, "/proc/self/fd");
		},
		createStandardStreams(input, output, error) {
			if (input) FS.createDevice("/dev", "stdin", input);
			else FS.symlink("/dev/tty", "/dev/stdin");
			if (output) FS.createDevice("/dev", "stdout", null, output);
			else FS.symlink("/dev/tty", "/dev/stdout");
			if (error) FS.createDevice("/dev", "stderr", null, error);
			else FS.symlink("/dev/tty1", "/dev/stderr");
			FS.open("/dev/stdin", 0);
			FS.open("/dev/stdout", 1);
			FS.open("/dev/stderr", 1);
		},
		staticInit() {
			FS.nameTable = new Array(4096);
			FS.mount(MEMFS, {}, "/");
			FS.createDefaultDirectories();
			FS.createDefaultDevices();
			FS.createSpecialDirectories();
			FS.filesystems = { MEMFS };
		},
		init(input, output, error) {
			FS.initialized = true;
			input ??= Module$1["stdin"];
			output ??= Module$1["stdout"];
			error ??= Module$1["stderr"];
			FS.createStandardStreams(input, output, error);
		},
		quit() {
			FS.initialized = false;
			for (var stream of FS.streams) if (stream) FS.close(stream);
		},
		findObject(path, dontResolveLastLink) {
			var ret = FS.analyzePath(path, dontResolveLastLink);
			if (!ret.exists) return null;
			return ret.object;
		},
		analyzePath(path, dontResolveLastLink) {
			try {
				var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
				path = lookup.path;
			} catch (e) {}
			var ret = {
				isRoot: false,
				exists: false,
				error: 0,
				name: null,
				path: null,
				object: null,
				parentExists: false,
				parentPath: null,
				parentObject: null
			};
			try {
				var lookup = FS.lookupPath(path, { parent: true });
				ret.parentExists = true;
				ret.parentPath = lookup.path;
				ret.parentObject = lookup.node;
				ret.name = PATH.basename(path);
				lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
				ret.exists = true;
				ret.path = lookup.path;
				ret.object = lookup.node;
				ret.name = lookup.node.name;
				ret.isRoot = lookup.path === "/";
			} catch (e) {
				ret.error = e.errno;
			}
			return ret;
		},
		createPath(parent, path, canRead, canWrite) {
			parent = typeof parent == "string" ? parent : FS.getPath(parent);
			var parts = path.split("/").reverse();
			while (parts.length) {
				var part = parts.pop();
				if (!part) continue;
				var current = PATH.join2(parent, part);
				try {
					FS.mkdir(current);
				} catch (e) {
					if (e.errno != 20) throw e;
				}
				parent = current;
			}
			return current;
		},
		createFile(parent, name, properties, canRead, canWrite) {
			var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
			var mode = FS_getMode(canRead, canWrite);
			return FS.create(path, mode);
		},
		createDataFile(parent, name, data, canRead, canWrite, canOwn) {
			var path = name;
			if (parent) {
				parent = typeof parent == "string" ? parent : FS.getPath(parent);
				path = name ? PATH.join2(parent, name) : parent;
			}
			var mode = FS_getMode(canRead, canWrite);
			var node = FS.create(path, mode);
			if (data) {
				if (typeof data == "string") {
					var arr = new Array(data.length);
					for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
					data = arr;
				}
				FS.chmod(node, mode | 146);
				var stream = FS.open(node, 577);
				FS.write(stream, data, 0, data.length, 0, canOwn);
				FS.close(stream);
				FS.chmod(node, mode);
			}
		},
		createDevice(parent, name, input, output) {
			var path = PATH.join2(typeof parent == "string" ? parent : FS.getPath(parent), name);
			var mode = FS_getMode(!!input, !!output);
			FS.createDevice.major ??= 64;
			var dev = FS.makedev(FS.createDevice.major++, 0);
			FS.registerDevice(dev, {
				open(stream) {
					stream.seekable = false;
				},
				close(stream) {
					if (output?.buffer?.length) output(10);
				},
				read(stream, buffer, offset, length, pos) {
					var bytesRead = 0;
					for (var i = 0; i < length; i++) {
						var result;
						try {
							result = input();
						} catch (e) {
							throw new FS.ErrnoError(29);
						}
						if (result === void 0 && bytesRead === 0) throw new FS.ErrnoError(6);
						if (result === null || result === void 0) break;
						bytesRead++;
						buffer[offset + i] = result;
					}
					if (bytesRead) stream.node.atime = Date.now();
					return bytesRead;
				},
				write(stream, buffer, offset, length, pos) {
					for (var i = 0; i < length; i++) try {
						output(buffer[offset + i]);
					} catch (e) {
						throw new FS.ErrnoError(29);
					}
					if (length) stream.node.mtime = stream.node.ctime = Date.now();
					return i;
				}
			});
			return FS.mkdev(path, mode, dev);
		},
		forceLoadFile(obj) {
			if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
			if (globalThis.XMLHttpRequest) abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
			else try {
				obj.contents = readBinary(obj.url);
			} catch (e) {
				throw new FS.ErrnoError(29);
			}
		},
		createLazyFile(parent, name, url, canRead, canWrite) {
			class LazyUint8Array {
				lengthKnown = false;
				chunks = [];
				get(idx) {
					if (idx > this.length - 1 || idx < 0) return;
					var chunkOffset = idx % this.chunkSize;
					var chunkNum = idx / this.chunkSize | 0;
					return this.getter(chunkNum)[chunkOffset];
				}
				setDataGetter(getter) {
					this.getter = getter;
				}
				cacheLength() {
					var xhr = new XMLHttpRequest();
					xhr.open("HEAD", url, false);
					xhr.send(null);
					if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) abort("Couldn't load " + url + ". Status: " + xhr.status);
					var datalength = Number(xhr.getResponseHeader("Content-length"));
					var header;
					var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
					var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
					var chunkSize = 1024 * 1024;
					if (!hasByteServing) chunkSize = datalength;
					var doXHR = (from, to) => {
						if (from > to) abort("invalid range (" + from + ", " + to + ") or no bytes requested!");
						if (to > datalength - 1) abort("only " + datalength + " bytes available! programmer error!");
						var xhr$1 = new XMLHttpRequest();
						xhr$1.open("GET", url, false);
						if (datalength !== chunkSize) xhr$1.setRequestHeader("Range", "bytes=" + from + "-" + to);
						xhr$1.responseType = "arraybuffer";
						if (xhr$1.overrideMimeType) xhr$1.overrideMimeType("text/plain; charset=x-user-defined");
						xhr$1.send(null);
						if (!(xhr$1.status >= 200 && xhr$1.status < 300 || xhr$1.status === 304)) abort("Couldn't load " + url + ". Status: " + xhr$1.status);
						if (xhr$1.response !== void 0) return new Uint8Array(xhr$1.response || []);
						return intArrayFromString(xhr$1.responseText || "", true);
					};
					var lazyArray = this;
					lazyArray.setDataGetter((chunkNum) => {
						var start = chunkNum * chunkSize;
						var end = (chunkNum + 1) * chunkSize - 1;
						end = Math.min(end, datalength - 1);
						if (typeof lazyArray.chunks[chunkNum] == "undefined") lazyArray.chunks[chunkNum] = doXHR(start, end);
						if (typeof lazyArray.chunks[chunkNum] == "undefined") abort("doXHR failed!");
						return lazyArray.chunks[chunkNum];
					});
					if (usesGzip || !datalength) {
						chunkSize = datalength = 1;
						datalength = this.getter(0).length;
						chunkSize = datalength;
						out("LazyFiles on gzip forces download of the whole file when length is accessed");
					}
					this._length = datalength;
					this._chunkSize = chunkSize;
					this.lengthKnown = true;
				}
				get length() {
					if (!this.lengthKnown) this.cacheLength();
					return this._length;
				}
				get chunkSize() {
					if (!this.lengthKnown) this.cacheLength();
					return this._chunkSize;
				}
			}
			if (globalThis.XMLHttpRequest) {
				if (!ENVIRONMENT_IS_WORKER) abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");
				var properties = {
					isDevice: false,
					contents: new LazyUint8Array()
				};
			} else var properties = {
				isDevice: false,
				url
			};
			var node = FS.createFile(parent, name, properties, canRead, canWrite);
			if (properties.contents) node.contents = properties.contents;
			else if (properties.url) {
				node.contents = null;
				node.url = properties.url;
			}
			Object.defineProperties(node, { usedBytes: { get: function() {
				return this.contents.length;
			} } });
			var stream_ops = {};
			for (const [key, fn] of Object.entries(node.stream_ops)) stream_ops[key] = (...args) => {
				FS.forceLoadFile(node);
				return fn(...args);
			};
			function writeChunks(stream, buffer, offset, length, position) {
				var contents = stream.node.contents;
				if (position >= contents.length) return 0;
				var size = Math.min(contents.length - position, length);
				if (contents.slice) for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
				else for (var i = 0; i < size; i++) buffer[offset + i] = contents.get(position + i);
				return size;
			}
			stream_ops.read = (stream, buffer, offset, length, position) => {
				FS.forceLoadFile(node);
				return writeChunks(stream, buffer, offset, length, position);
			};
			stream_ops.mmap = (stream, length, position, prot, flags) => {
				FS.forceLoadFile(node);
				var ptr = mmapAlloc(length);
				if (!ptr) throw new FS.ErrnoError(48);
				writeChunks(stream, HEAP8, ptr, length, position);
				return {
					ptr,
					allocated: true
				};
			};
			node.stream_ops = stream_ops;
			return node;
		}
	};
	var UTF8ToString = (ptr, maxBytesToRead, ignoreNul) => ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead, ignoreNul) : "";
	var SYSCALLS = {
		calculateAt(dirfd, path, allowEmpty) {
			if (PATH.isAbs(path)) return path;
			var dir;
			if (dirfd === -100) dir = FS.cwd();
			else dir = SYSCALLS.getStreamFromFD(dirfd).path;
			if (path.length == 0) {
				if (!allowEmpty) throw new FS.ErrnoError(44);
				return dir;
			}
			return dir + "/" + path;
		},
		writeStat(buf, stat) {
			HEAPU32[buf >> 2] = stat.dev;
			HEAPU32[buf + 4 >> 2] = stat.mode;
			HEAPU32[buf + 8 >> 2] = stat.nlink;
			HEAPU32[buf + 12 >> 2] = stat.uid;
			HEAPU32[buf + 16 >> 2] = stat.gid;
			HEAPU32[buf + 20 >> 2] = stat.rdev;
			HEAP64[buf + 24 >> 3] = BigInt(stat.size);
			HEAP32[buf + 32 >> 2] = 4096;
			HEAP32[buf + 36 >> 2] = stat.blocks;
			var atime = stat.atime.getTime();
			var mtime = stat.mtime.getTime();
			var ctime = stat.ctime.getTime();
			HEAP64[buf + 40 >> 3] = BigInt(Math.floor(atime / 1e3));
			HEAPU32[buf + 48 >> 2] = atime % 1e3 * 1e3 * 1e3;
			HEAP64[buf + 56 >> 3] = BigInt(Math.floor(mtime / 1e3));
			HEAPU32[buf + 64 >> 2] = mtime % 1e3 * 1e3 * 1e3;
			HEAP64[buf + 72 >> 3] = BigInt(Math.floor(ctime / 1e3));
			HEAPU32[buf + 80 >> 2] = ctime % 1e3 * 1e3 * 1e3;
			HEAP64[buf + 88 >> 3] = BigInt(stat.ino);
			return 0;
		},
		writeStatFs(buf, stats) {
			HEAPU32[buf + 4 >> 2] = stats.bsize;
			HEAPU32[buf + 60 >> 2] = stats.bsize;
			HEAP64[buf + 8 >> 3] = BigInt(stats.blocks);
			HEAP64[buf + 16 >> 3] = BigInt(stats.bfree);
			HEAP64[buf + 24 >> 3] = BigInt(stats.bavail);
			HEAP64[buf + 32 >> 3] = BigInt(stats.files);
			HEAP64[buf + 40 >> 3] = BigInt(stats.ffree);
			HEAPU32[buf + 48 >> 2] = stats.fsid;
			HEAPU32[buf + 64 >> 2] = stats.flags;
			HEAPU32[buf + 56 >> 2] = stats.namelen;
		},
		doMsync(addr, stream, len, flags, offset) {
			if (!FS.isFile(stream.node.mode)) throw new FS.ErrnoError(43);
			if (flags & 2) return 0;
			var buffer = HEAPU8.slice(addr, addr + len);
			FS.msync(stream, buffer, offset, len, flags);
		},
		getStreamFromFD(fd) {
			return FS.getStreamChecked(fd);
		},
		varargs: void 0,
		getStr(ptr) {
			return UTF8ToString(ptr);
		}
	};
	function ___syscall_fcntl64(fd, cmd, varargs) {
		SYSCALLS.varargs = varargs;
		try {
			var stream = SYSCALLS.getStreamFromFD(fd);
			switch (cmd) {
				case 0:
					var arg = syscallGetVarargI();
					if (arg < 0) return -28;
					while (FS.streams[arg]) arg++;
					return FS.dupStream(stream, arg).fd;
				case 1:
				case 2: return 0;
				case 3: return stream.flags;
				case 4:
					var arg = syscallGetVarargI();
					stream.flags |= arg;
					return 0;
				case 12:
					var arg = syscallGetVarargP();
					var offset = 0;
					HEAP16[arg + offset >> 1] = 2;
					return 0;
				case 13:
				case 14: return 0;
			}
			return -28;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_fstat64(fd, buf) {
		try {
			return SYSCALLS.writeStat(buf, FS.fstat(fd));
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	var stringToUTF8 = (str, outPtr, maxBytesToWrite) => stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
	function ___syscall_getcwd(buf, size) {
		try {
			if (size === 0) return -28;
			var cwd = FS.cwd();
			var cwdLengthInBytes = lengthBytesUTF8(cwd) + 1;
			if (size < cwdLengthInBytes) return -68;
			stringToUTF8(cwd, buf, size);
			return cwdLengthInBytes;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_getdents64(fd, dirp, count) {
		try {
			var stream = SYSCALLS.getStreamFromFD(fd);
			stream.getdents ||= FS.readdir(stream.path);
			var struct_size = 280;
			var pos = 0;
			var off = FS.llseek(stream, 0, 1);
			var startIdx = Math.floor(off / struct_size);
			var endIdx = Math.min(stream.getdents.length, startIdx + Math.floor(count / struct_size));
			for (var idx = startIdx; idx < endIdx; idx++) {
				var id;
				var type;
				var name = stream.getdents[idx];
				if (name === ".") {
					id = stream.node.id;
					type = 4;
				} else if (name === "..") {
					id = FS.lookupPath(stream.path, { parent: true }).node.id;
					type = 4;
				} else {
					var child;
					try {
						child = FS.lookupNode(stream.node, name);
					} catch (e) {
						if (e?.errno === 28) continue;
						throw e;
					}
					id = child.id;
					type = FS.isChrdev(child.mode) ? 2 : FS.isDir(child.mode) ? 4 : FS.isLink(child.mode) ? 10 : 8;
				}
				HEAP64[dirp + pos >> 3] = BigInt(id);
				HEAP64[dirp + pos + 8 >> 3] = BigInt((idx + 1) * struct_size);
				HEAP16[dirp + pos + 16 >> 1] = 280;
				HEAP8[dirp + pos + 18] = type;
				stringToUTF8(name, dirp + pos + 19, 256);
				pos += struct_size;
			}
			FS.llseek(stream, idx * struct_size, 0);
			return pos;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_ioctl(fd, op, varargs) {
		SYSCALLS.varargs = varargs;
		try {
			var stream = SYSCALLS.getStreamFromFD(fd);
			switch (op) {
				case 21509:
					if (!stream.tty) return -59;
					return 0;
				case 21505:
					if (!stream.tty) return -59;
					if (stream.tty.ops.ioctl_tcgets) {
						var termios = stream.tty.ops.ioctl_tcgets(stream);
						var argp = syscallGetVarargP();
						HEAP32[argp >> 2] = termios.c_iflag || 0;
						HEAP32[argp + 4 >> 2] = termios.c_oflag || 0;
						HEAP32[argp + 8 >> 2] = termios.c_cflag || 0;
						HEAP32[argp + 12 >> 2] = termios.c_lflag || 0;
						for (var i = 0; i < 32; i++) HEAP8[argp + i + 17] = termios.c_cc[i] || 0;
						return 0;
					}
					return 0;
				case 21510:
				case 21511:
				case 21512:
					if (!stream.tty) return -59;
					return 0;
				case 21506:
				case 21507:
				case 21508:
					if (!stream.tty) return -59;
					if (stream.tty.ops.ioctl_tcsets) {
						var argp = syscallGetVarargP();
						var c_iflag = HEAP32[argp >> 2];
						var c_oflag = HEAP32[argp + 4 >> 2];
						var c_cflag = HEAP32[argp + 8 >> 2];
						var c_lflag = HEAP32[argp + 12 >> 2];
						var c_cc = [];
						for (var i = 0; i < 32; i++) c_cc.push(HEAP8[argp + i + 17]);
						return stream.tty.ops.ioctl_tcsets(stream.tty, op, {
							c_iflag,
							c_oflag,
							c_cflag,
							c_lflag,
							c_cc
						});
					}
					return 0;
				case 21519:
					if (!stream.tty) return -59;
					var argp = syscallGetVarargP();
					HEAP32[argp >> 2] = 0;
					return 0;
				case 21520:
					if (!stream.tty) return -59;
					return -28;
				case 21537:
				case 21531:
					var argp = syscallGetVarargP();
					return FS.ioctl(stream, op, argp);
				case 21523:
					if (!stream.tty) return -59;
					if (stream.tty.ops.ioctl_tiocgwinsz) {
						var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
						var argp = syscallGetVarargP();
						HEAP16[argp >> 1] = winsize[0];
						HEAP16[argp + 2 >> 1] = winsize[1];
					}
					return 0;
				case 21524:
					if (!stream.tty) return -59;
					return 0;
				case 21515:
					if (!stream.tty) return -59;
					return 0;
				default: return -28;
			}
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_lstat64(path, buf) {
		try {
			path = SYSCALLS.getStr(path);
			return SYSCALLS.writeStat(buf, FS.lstat(path));
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_mkdirat(dirfd, path, mode) {
		try {
			path = SYSCALLS.getStr(path);
			path = SYSCALLS.calculateAt(dirfd, path);
			FS.mkdir(path, mode, 0);
			return 0;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_newfstatat(dirfd, path, buf, flags) {
		try {
			path = SYSCALLS.getStr(path);
			var nofollow = flags & 256;
			var allowEmpty = flags & 4096;
			flags = flags & -6401;
			path = SYSCALLS.calculateAt(dirfd, path, allowEmpty);
			return SYSCALLS.writeStat(buf, nofollow ? FS.lstat(path) : FS.stat(path));
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_openat(dirfd, path, flags, varargs) {
		SYSCALLS.varargs = varargs;
		try {
			path = SYSCALLS.getStr(path);
			path = SYSCALLS.calculateAt(dirfd, path);
			var mode = varargs ? syscallGetVarargI() : 0;
			return FS.open(path, flags, mode).fd;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_readlinkat(dirfd, path, buf, bufsize) {
		try {
			path = SYSCALLS.getStr(path);
			path = SYSCALLS.calculateAt(dirfd, path);
			if (bufsize <= 0) return -28;
			var ret = FS.readlink(path);
			var len = Math.min(bufsize, lengthBytesUTF8(ret));
			var endChar = HEAP8[buf + len];
			stringToUTF8(ret, buf, bufsize + 1);
			HEAP8[buf + len] = endChar;
			return len;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_rmdir(path) {
		try {
			path = SYSCALLS.getStr(path);
			FS.rmdir(path);
			return 0;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_stat64(path, buf) {
		try {
			path = SYSCALLS.getStr(path);
			return SYSCALLS.writeStat(buf, FS.stat(path));
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function ___syscall_unlinkat(dirfd, path, flags) {
		try {
			path = SYSCALLS.getStr(path);
			path = SYSCALLS.calculateAt(dirfd, path);
			if (!flags) FS.unlink(path);
			else if (flags === 512) FS.rmdir(path);
			else return -28;
			return 0;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	var __abort_js = () => abort("");
	var INT53_MAX = 9007199254740992;
	var INT53_MIN = -9007199254740992;
	var bigintToI53Checked = (num) => num < INT53_MIN || num > INT53_MAX ? NaN : Number(num);
	function __gmtime_js(time, tmPtr) {
		time = bigintToI53Checked(time);
		var date = /* @__PURE__ */ new Date(time * 1e3);
		HEAP32[tmPtr >> 2] = date.getUTCSeconds();
		HEAP32[tmPtr + 4 >> 2] = date.getUTCMinutes();
		HEAP32[tmPtr + 8 >> 2] = date.getUTCHours();
		HEAP32[tmPtr + 12 >> 2] = date.getUTCDate();
		HEAP32[tmPtr + 16 >> 2] = date.getUTCMonth();
		HEAP32[tmPtr + 20 >> 2] = date.getUTCFullYear() - 1900;
		HEAP32[tmPtr + 24 >> 2] = date.getUTCDay();
		var start = Date.UTC(date.getUTCFullYear(), 0, 1, 0, 0, 0, 0);
		var yday = (date.getTime() - start) / (1e3 * 60 * 60 * 24) | 0;
		HEAP32[tmPtr + 28 >> 2] = yday;
	}
	var isLeapYear = (year) => year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
	var MONTH_DAYS_LEAP_CUMULATIVE = [
		0,
		31,
		60,
		91,
		121,
		152,
		182,
		213,
		244,
		274,
		305,
		335
	];
	var MONTH_DAYS_REGULAR_CUMULATIVE = [
		0,
		31,
		59,
		90,
		120,
		151,
		181,
		212,
		243,
		273,
		304,
		334
	];
	var ydayFromDate = (date) => {
		return (isLeapYear(date.getFullYear()) ? MONTH_DAYS_LEAP_CUMULATIVE : MONTH_DAYS_REGULAR_CUMULATIVE)[date.getMonth()] + date.getDate() - 1;
	};
	function __localtime_js(time, tmPtr) {
		time = bigintToI53Checked(time);
		var date = /* @__PURE__ */ new Date(time * 1e3);
		HEAP32[tmPtr >> 2] = date.getSeconds();
		HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
		HEAP32[tmPtr + 8 >> 2] = date.getHours();
		HEAP32[tmPtr + 12 >> 2] = date.getDate();
		HEAP32[tmPtr + 16 >> 2] = date.getMonth();
		HEAP32[tmPtr + 20 >> 2] = date.getFullYear() - 1900;
		HEAP32[tmPtr + 24 >> 2] = date.getDay();
		var yday = ydayFromDate(date) | 0;
		HEAP32[tmPtr + 28 >> 2] = yday;
		HEAP32[tmPtr + 36 >> 2] = -(date.getTimezoneOffset() * 60);
		var start = new Date(date.getFullYear(), 0, 1);
		var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
		var winterOffset = start.getTimezoneOffset();
		var dst = (summerOffset != winterOffset && date.getTimezoneOffset() == Math.min(winterOffset, summerOffset)) | 0;
		HEAP32[tmPtr + 32 >> 2] = dst;
	}
	var __mktime_js = function(tmPtr) {
		var ret = (() => {
			var date = new Date(HEAP32[tmPtr + 20 >> 2] + 1900, HEAP32[tmPtr + 16 >> 2], HEAP32[tmPtr + 12 >> 2], HEAP32[tmPtr + 8 >> 2], HEAP32[tmPtr + 4 >> 2], HEAP32[tmPtr >> 2], 0);
			var dst = HEAP32[tmPtr + 32 >> 2];
			var guessedOffset = date.getTimezoneOffset();
			var start = new Date(date.getFullYear(), 0, 1);
			var summerOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
			var winterOffset = start.getTimezoneOffset();
			var dstOffset = Math.min(winterOffset, summerOffset);
			if (dst < 0) HEAP32[tmPtr + 32 >> 2] = Number(summerOffset != winterOffset && dstOffset == guessedOffset);
			else if (dst > 0 != (dstOffset == guessedOffset)) {
				var trueOffset = dst > 0 ? dstOffset : Math.max(winterOffset, summerOffset);
				date.setTime(date.getTime() + (trueOffset - guessedOffset) * 6e4);
			}
			HEAP32[tmPtr + 24 >> 2] = date.getDay();
			var yday = ydayFromDate(date) | 0;
			HEAP32[tmPtr + 28 >> 2] = yday;
			HEAP32[tmPtr >> 2] = date.getSeconds();
			HEAP32[tmPtr + 4 >> 2] = date.getMinutes();
			HEAP32[tmPtr + 8 >> 2] = date.getHours();
			HEAP32[tmPtr + 12 >> 2] = date.getDate();
			HEAP32[tmPtr + 16 >> 2] = date.getMonth();
			HEAP32[tmPtr + 20 >> 2] = date.getYear();
			var timeMs = date.getTime();
			if (isNaN(timeMs)) return -1;
			return timeMs / 1e3;
		})();
		return BigInt(ret);
	};
	function __mmap_js(len, prot, flags, fd, offset, allocated, addr) {
		offset = bigintToI53Checked(offset);
		try {
			var stream = SYSCALLS.getStreamFromFD(fd);
			var res = FS.mmap(stream, len, offset, prot, flags);
			var ptr = res.ptr;
			HEAP32[allocated >> 2] = res.allocated;
			HEAPU32[addr >> 2] = ptr;
			return 0;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	function __munmap_js(addr, len, prot, flags, fd, offset) {
		offset = bigintToI53Checked(offset);
		try {
			var stream = SYSCALLS.getStreamFromFD(fd);
			if (prot & 2) SYSCALLS.doMsync(addr, stream, len, flags, offset);
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return -e.errno;
		}
	}
	var __tzset_js = (timezone, daylight, std_name, dst_name) => {
		var currentYear = (/* @__PURE__ */ new Date()).getFullYear();
		var winter = new Date(currentYear, 0, 1);
		var summer = new Date(currentYear, 6, 1);
		var winterOffset = winter.getTimezoneOffset();
		var summerOffset = summer.getTimezoneOffset();
		var stdTimezoneOffset = Math.max(winterOffset, summerOffset);
		HEAPU32[timezone >> 2] = stdTimezoneOffset * 60;
		HEAP32[daylight >> 2] = Number(winterOffset != summerOffset);
		var extractZone = (timezoneOffset) => {
			var sign = timezoneOffset >= 0 ? "-" : "+";
			var absOffset = Math.abs(timezoneOffset);
			return `UTC${sign}${String(Math.floor(absOffset / 60)).padStart(2, "0")}${String(absOffset % 60).padStart(2, "0")}`;
		};
		var winterName = extractZone(winterOffset);
		var summerName = extractZone(summerOffset);
		if (summerOffset < winterOffset) {
			stringToUTF8(winterName, std_name, 17);
			stringToUTF8(summerName, dst_name, 17);
		} else {
			stringToUTF8(winterName, dst_name, 17);
			stringToUTF8(summerName, std_name, 17);
		}
	};
	var _emscripten_get_now = () => performance.now();
	var _emscripten_date_now = () => Date.now();
	var nowIsMonotonic = 1;
	var checkWasiClock = (clock_id) => clock_id >= 0 && clock_id <= 3;
	function _clock_time_get(clk_id, ignored_precision, ptime) {
		ignored_precision = bigintToI53Checked(ignored_precision);
		if (!checkWasiClock(clk_id)) return 28;
		var now;
		if (clk_id === 0) now = _emscripten_date_now();
		else if (nowIsMonotonic) now = _emscripten_get_now();
		else return 52;
		var nsec = Math.round(now * 1e3 * 1e3);
		HEAP64[ptime >> 3] = BigInt(nsec);
		return 0;
	}
	var readEmAsmArgsArray = [];
	var readEmAsmArgs = (sigPtr, buf) => {
		readEmAsmArgsArray.length = 0;
		var ch;
		while (ch = HEAPU8[sigPtr++]) {
			var wide = ch != 105;
			wide &= ch != 112;
			buf += wide && buf % 8 ? 4 : 0;
			readEmAsmArgsArray.push(ch == 112 ? HEAPU32[buf >> 2] : ch == 106 ? HEAP64[buf >> 3] : ch == 105 ? HEAP32[buf >> 2] : HEAPF64[buf >> 3]);
			buf += wide ? 8 : 4;
		}
		return readEmAsmArgsArray;
	};
	var runEmAsmFunction = (code, sigPtr, argbuf) => {
		var args = readEmAsmArgs(sigPtr, argbuf);
		return ASM_CONSTS[code](...args);
	};
	var _emscripten_asm_const_int = (code, sigPtr, argbuf) => runEmAsmFunction(code, sigPtr, argbuf);
	var _emscripten_errn = (str, len) => err(UTF8ToString(str, len));
	var getHeapMax = () => 2147483648;
	var _emscripten_get_heap_max = () => getHeapMax();
	var UNWIND_CACHE = {};
	var stringToNewUTF8 = (str) => {
		var size = lengthBytesUTF8(str) + 1;
		var ret = _malloc(size);
		if (ret) stringToUTF8(str, ret, size);
		return ret;
	};
	var convertFrameToPC = (frame) => {
		var match;
		if (match = /\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(frame)) return +match[1];
		else if (match = /:(\d+):\d+(?:\)|$)/.exec(frame)) return 2147483648 | +match[1];
		return 0;
	};
	var saveInUnwindCache = (callstack) => {
		for (var line of callstack) {
			var pc = convertFrameToPC(line);
			if (pc) UNWIND_CACHE[pc] = line;
		}
	};
	var jsStackTrace = () => (/* @__PURE__ */ new Error()).stack.toString();
	var _emscripten_stack_snapshot = () => {
		var callstack = jsStackTrace().split("\n");
		if (callstack[0] == "Error") callstack.shift();
		saveInUnwindCache(callstack);
		UNWIND_CACHE.last_addr = convertFrameToPC(callstack[3]);
		UNWIND_CACHE.last_stack = callstack;
		return UNWIND_CACHE.last_addr;
	};
	var _emscripten_pc_get_function = (pc) => {
		var frame = UNWIND_CACHE[pc];
		if (!frame) return 0;
		var name;
		var match;
		if (match = /^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(frame)) name = match[1];
		else if (match = /^\s+at (.*) \(.*\)$/.exec(frame)) name = match[1];
		else if (match = /^(.+?)@/.exec(frame)) name = match[1];
		else return 0;
		_free(_emscripten_pc_get_function.ret ?? 0);
		_emscripten_pc_get_function.ret = stringToNewUTF8(name);
		return _emscripten_pc_get_function.ret;
	};
	var growMemory = (size) => {
		var pages = (size - wasmMemory.buffer.byteLength + 65535) / 65536 | 0;
		try {
			wasmMemory.grow(pages);
			updateMemoryViews();
			return 1;
		} catch (e) {}
	};
	var _emscripten_resize_heap = (requestedSize) => {
		var oldSize = HEAPU8.length;
		requestedSize >>>= 0;
		var maxHeapSize = getHeapMax();
		if (requestedSize > maxHeapSize) return false;
		for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
			var overGrownHeapSize = oldSize * (1 + .2 / cutDown);
			overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296);
			if (growMemory(Math.min(maxHeapSize, alignMemory(Math.max(requestedSize, overGrownHeapSize), 65536)))) return true;
		}
		return false;
	};
	var _emscripten_stack_unwind_buffer = (addr, buffer, count) => {
		var stack;
		if (UNWIND_CACHE.last_addr == addr) stack = UNWIND_CACHE.last_stack;
		else {
			stack = jsStackTrace().split("\n");
			if (stack[0] == "Error") stack.shift();
			saveInUnwindCache(stack);
		}
		var offset = 3;
		while (stack[offset] && convertFrameToPC(stack[offset]) != addr) ++offset;
		for (var i = 0; i < count && stack[i + offset]; ++i) HEAP32[buffer + i * 4 >> 2] = convertFrameToPC(stack[i + offset]);
		return i;
	};
	var ENV = {};
	var getExecutableName = () => thisProgram || "./this.program";
	var getEnvStrings = () => {
		if (!getEnvStrings.strings) {
			var env = {
				USER: "web_user",
				LOGNAME: "web_user",
				PATH: "/",
				PWD: "/",
				HOME: "/home/web_user",
				LANG: (globalThis.navigator?.language ?? "C").replace("-", "_") + ".UTF-8",
				_: getExecutableName()
			};
			for (var x in ENV) if (ENV[x] === void 0) delete env[x];
			else env[x] = ENV[x];
			var strings = [];
			for (var x in env) strings.push(`${x}=${env[x]}`);
			getEnvStrings.strings = strings;
		}
		return getEnvStrings.strings;
	};
	var _environ_get = (__environ, environ_buf) => {
		var bufSize = 0;
		var envp = 0;
		for (var string of getEnvStrings()) {
			var ptr = environ_buf + bufSize;
			HEAPU32[__environ + envp >> 2] = ptr;
			bufSize += stringToUTF8(string, ptr, Infinity) + 1;
			envp += 4;
		}
		return 0;
	};
	var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
		var strings = getEnvStrings();
		HEAPU32[penviron_count >> 2] = strings.length;
		var bufSize = 0;
		for (var string of strings) bufSize += lengthBytesUTF8(string) + 1;
		HEAPU32[penviron_buf_size >> 2] = bufSize;
		return 0;
	};
	var runtimeKeepaliveCounter = 0;
	var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
	var _proc_exit = (code) => {
		if (!keepRuntimeAlive()) {
			Module$1["onExit"]?.(code);
			ABORT = true;
		}
		quit_(code, new ExitStatus(code));
	};
	var exitJS = (status, implicit) => {
		_proc_exit(status);
	};
	var _exit = exitJS;
	function _fd_close(fd) {
		try {
			var stream = SYSCALLS.getStreamFromFD(fd);
			FS.close(stream);
			return 0;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return e.errno;
		}
	}
	var doReadv = (stream, iov, iovcnt, offset) => {
		var ret = 0;
		for (var i = 0; i < iovcnt; i++) {
			var ptr = HEAPU32[iov >> 2];
			var len = HEAPU32[iov + 4 >> 2];
			iov += 8;
			var curr = FS.read(stream, HEAP8, ptr, len, offset);
			if (curr < 0) return -1;
			ret += curr;
			if (curr < len) break;
			if (typeof offset != "undefined") offset += curr;
		}
		return ret;
	};
	function _fd_read(fd, iov, iovcnt, pnum) {
		try {
			var num = doReadv(SYSCALLS.getStreamFromFD(fd), iov, iovcnt);
			HEAPU32[pnum >> 2] = num;
			return 0;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return e.errno;
		}
	}
	function _fd_seek(fd, offset, whence, newOffset) {
		offset = bigintToI53Checked(offset);
		try {
			if (isNaN(offset)) return 61;
			var stream = SYSCALLS.getStreamFromFD(fd);
			FS.llseek(stream, offset, whence);
			HEAP64[newOffset >> 3] = BigInt(stream.position);
			if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null;
			return 0;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return e.errno;
		}
	}
	var doWritev = (stream, iov, iovcnt, offset) => {
		var ret = 0;
		for (var i = 0; i < iovcnt; i++) {
			var ptr = HEAPU32[iov >> 2];
			var len = HEAPU32[iov + 4 >> 2];
			iov += 8;
			var curr = FS.write(stream, HEAP8, ptr, len, offset);
			if (curr < 0) return -1;
			ret += curr;
			if (curr < len) break;
			if (typeof offset != "undefined") offset += curr;
		}
		return ret;
	};
	function _fd_write(fd, iov, iovcnt, pnum) {
		try {
			var num = doWritev(SYSCALLS.getStreamFromFD(fd), iov, iovcnt);
			HEAPU32[pnum >> 2] = num;
			return 0;
		} catch (e) {
			if (typeof FS == "undefined" || !(e.name === "ErrnoError")) throw e;
			return e.errno;
		}
	}
	var FS_createPath = (...args) => FS.createPath(...args);
	var FS_unlink = (...args) => FS.unlink(...args);
	var FS_createLazyFile = (...args) => FS.createLazyFile(...args);
	var FS_createDevice = (...args) => FS.createDevice(...args);
	FS.createPreloadedFile = FS_createPreloadedFile;
	FS.preloadFile = FS_preloadFile;
	FS.staticInit();
	if (Module$1["noExitRuntime"]) noExitRuntime = Module$1["noExitRuntime"];
	if (Module$1["preloadPlugins"]) preloadPlugins = Module$1["preloadPlugins"];
	if (Module$1["print"]) out = Module$1["print"];
	if (Module$1["printErr"]) err = Module$1["printErr"];
	if (Module$1["wasmBinary"]) wasmBinary = Module$1["wasmBinary"];
	if (Module$1["arguments"]) Module$1["arguments"];
	if (Module$1["thisProgram"]) thisProgram = Module$1["thisProgram"];
	if (Module$1["preInit"]) {
		if (typeof Module$1["preInit"] == "function") Module$1["preInit"] = [Module$1["preInit"]];
		while (Module$1["preInit"].length > 0) Module$1["preInit"].shift()();
	}
	Module$1["addRunDependency"] = addRunDependency;
	Module$1["removeRunDependency"] = removeRunDependency;
	Module$1["UTF8ToString"] = UTF8ToString;
	Module$1["stringToUTF8"] = stringToUTF8;
	Module$1["lengthBytesUTF8"] = lengthBytesUTF8;
	Module$1["FS_preloadFile"] = FS_preloadFile;
	Module$1["FS_unlink"] = FS_unlink;
	Module$1["FS_createPath"] = FS_createPath;
	Module$1["FS_createDevice"] = FS_createDevice;
	Module$1["FS"] = FS;
	Module$1["FS_createDataFile"] = FS_createDataFile;
	Module$1["FS_createLazyFile"] = FS_createLazyFile;
	var ASM_CONSTS = {
		1119608: () => typeof wasmOffsetConverter !== "undefined",
		1119665: ($0, $1, $2, $3, $4) => {
			if (typeof Module$1 == "undefined" || !Module$1.MountedFiles) return 1;
			let fileName = UTF8ToString(Number($0 >>> 0));
			if (fileName.startsWith("./")) fileName = fileName.substring(2);
			const fileData = Module$1.MountedFiles.get(fileName);
			if (!fileData) return 2;
			const offset = Number($1 >>> 0);
			const length = Number($2 >>> 0);
			const dataIdOrBuffer = Number($3 >>> 0);
			const loadType = $4;
			if (offset + length > fileData.byteLength) return 3;
			try {
				const data = fileData.subarray(offset, offset + length);
				switch (loadType) {
					case 0:
						HEAPU8.set(data, dataIdOrBuffer);
						break;
					case 1:
						if (Module$1.webgpuUploadExternalBuffer) Module$1.webgpuUploadExternalBuffer(dataIdOrBuffer, data);
						else Module$1.jsepUploadExternalBuffer(dataIdOrBuffer, data);
						break;
					default: return 4;
				}
				return 0;
			} catch {
				return 4;
			}
		}
	};
	function HaveOffsetConverter() {
		return typeof wasmOffsetConverter !== "undefined";
	}
	var _free, _malloc, _emscripten_builtin_memalign, wasmMemory;
	function assignWasmExports(wasmExports$1) {
		Module$1["_CopyHeap"] = wasmExports$1["Q"];
		Module$1["_SherpawCreateKeywordSpotter"] = wasmExports$1["R"];
		Module$1["_SherpawKeywordResultKeyword"] = wasmExports$1["S"];
		Module$1["_SherpawKeywordResultCount"] = wasmExports$1["T"];
		Module$1["_SherpawKeywordResultToken"] = wasmExports$1["U"];
		Module$1["_SherpawKeywordResultTimestamp"] = wasmExports$1["V"];
		Module$1["_SherpawKeywordResultStartTime"] = wasmExports$1["W"];
		Module$1["_SherpaOnnxDestroyOnlineStream"] = wasmExports$1["X"];
		Module$1["_SherpaOnnxOnlineStreamAcceptWaveform"] = wasmExports$1["Y"];
		Module$1["_SherpaOnnxDestroyKeywordSpotter"] = wasmExports$1["Z"];
		Module$1["_SherpaOnnxCreateKeywordStream"] = wasmExports$1["_"];
		Module$1["_SherpaOnnxIsKeywordStreamReady"] = wasmExports$1["$"];
		Module$1["_SherpaOnnxDecodeKeywordStream"] = wasmExports$1["aa"];
		Module$1["_SherpaOnnxResetKeywordStream"] = wasmExports$1["ba"];
		Module$1["_SherpaOnnxGetKeywordResult"] = wasmExports$1["ca"];
		Module$1["_SherpaOnnxDestroyKeywordResult"] = wasmExports$1["da"];
		_free = Module$1["_free"] = wasmExports$1["ea"];
		_malloc = Module$1["_malloc"] = wasmExports$1["fa"];
		_emscripten_builtin_memalign = wasmExports$1["ga"];
		wasmMemory = wasmExports$1["O"];
		wasmExports$1["__indirect_function_table"];
	}
	var wasmImports = {
		n: HaveOffsetConverter,
		a: ___cxa_throw,
		b: ___syscall_fcntl64,
		J: ___syscall_fstat64,
		u: ___syscall_getcwd,
		v: ___syscall_getdents64,
		K: ___syscall_ioctl,
		G: ___syscall_lstat64,
		C: ___syscall_mkdirat,
		H: ___syscall_newfstatat,
		j: ___syscall_openat,
		t: ___syscall_readlinkat,
		r: ___syscall_rmdir,
		I: ___syscall_stat64,
		s: ___syscall_unlinkat,
		N: __abort_js,
		y: __gmtime_js,
		A: __localtime_js,
		B: __mktime_js,
		w: __mmap_js,
		x: __munmap_js,
		l: __tzset_js,
		M: _clock_time_get,
		g: _emscripten_asm_const_int,
		L: _emscripten_date_now,
		h: _emscripten_errn,
		q: _emscripten_get_heap_max,
		c: _emscripten_get_now,
		m: _emscripten_pc_get_function,
		p: _emscripten_resize_heap,
		z: _emscripten_stack_snapshot,
		o: _emscripten_stack_unwind_buffer,
		E: _environ_get,
		F: _environ_sizes_get,
		f: _exit,
		d: _fd_close,
		i: _fd_read,
		D: _fd_seek,
		e: _fd_write,
		k: _proc_exit
	};
	function run() {
		if (runDependencies > 0) {
			dependenciesFulfilled = run;
			return;
		}
		preRun();
		if (runDependencies > 0) {
			dependenciesFulfilled = run;
			return;
		}
		function doRun() {
			Module$1["calledRun"] = true;
			if (ABORT) return;
			initRuntime();
			readyPromiseResolve?.(Module$1);
			Module$1["onRuntimeInitialized"]?.();
			postRun();
		}
		if (Module$1["setStatus"]) {
			Module$1["setStatus"]("Running...");
			setTimeout(() => {
				setTimeout(() => Module$1["setStatus"](""), 1);
				doRun();
			}, 1);
		} else doRun();
	}
	var wasmExports = await createWasm();
	run();
	if (runtimeInitialized) moduleRtn = Module$1;
	else moduleRtn = new Promise((resolve, reject) => {
		readyPromiseResolve = resolve;
		readyPromiseReject = reject;
	});
	return moduleRtn;
}
var kws_default = Module;

//#endregion
//#region src/wasm.ts
async function initKWSModule() {
	const wasmUrl = new URL("./prebuilt/kws.wasm", import.meta.url).toString();
	return kws_default({ locateFile: () => wasmUrl });
}

//#endregion
//#region src/worker/events.ts
const initialize = defineInvokeEventa("sherpaw:kws:initialize");
const setKeywords = defineInvokeEventa("sherpaw:kws:keywords");
const processAudio = defineInvokeEventa("sherpaw:kws:audio");
const reset = defineInvokeEventa("sherpaw:kws:reset");

//#endregion
//#region src/worker/runtime.ts
/** Loads one detector and preserves invocation order across Eventa handlers. */
function registerWorkerHandlers(context$1) {
	let spotter;
	let queue = Promise.resolve();
	function enqueue(operation) {
		const result = queue.then(operation);
		queue = result.then(() => {}, () => {});
		return result;
	}
	/** Triggering workflow: events.initialize -> defineInvokeHandler -> enqueue -> initialize mounts the model and creates the SDK detector. */
	async function initialize$1(config) {
		const module$1 = await initKWSModule();
		const model = config.model.paths ?? {
			encoder: "encoder.onnx",
			decoder: "decoder.onnx",
			joiner: "joiner.onnx",
			tokens: "tokens.txt"
		};
		loadData({
			module: module$1,
			data: config.model.data,
			metadata: config.model.metadata
		});
		spotter = createKeywordSpotter(module$1, {
			model,
			keywords: config.keywords,
			maxActivePaths: config.maxActivePaths
		});
	}
	defineInvokeHandler(context$1, initialize, (config) => enqueue(() => initialize$1(config)));
	/** Triggering workflow: events.setKeywords -> defineInvokeHandler -> enqueue -> spotter.setKeywords replaces the vocabulary and search settings. */
	defineInvokeHandler(context$1, setKeywords, ({ keywords, options }) => enqueue(() => spotter.setKeywords(keywords, options)));
	/** Triggering workflow: events.processAudio -> defineInvokeHandler -> enqueue -> spotter.processAudio -> detections returned by Eventa. */
	defineInvokeHandler(context$1, processAudio, ({ samples, sampleRate }) => enqueue(() => spotter.processAudio(samples, sampleRate)));
	/** Triggering workflow: events.reset -> defineInvokeHandler -> enqueue -> spotter.reset starts a fresh audio stream. */
	defineInvokeHandler(context$1, reset, () => enqueue(() => spotter.reset()));
}

//#endregion
//#region src/web/entry.ts
const { context } = createContext();
registerWorkerHandlers(context);

//#endregion