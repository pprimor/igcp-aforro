var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../src/data/_meta.json
var meta_default = {
  euribor: {
    lastRefreshedAt: "2026-05-10T10:07:38Z",
    source: "Deutsche Bundesbank time-series (BBIG1) \u2014 EMMI EURIBOR\xAE 3-month daily fixings",
    sourceUrl: "https://api.statistiken.bundesbank.de/rest/download/BBIG1/D.D0.EUR.MMKT.EURIBOR.M03.BID._Z?format=csv&lang=en",
    seriesId: "BBIG1.D.D0.EUR.MMKT.EURIBOR.M03.BID._Z",
    upstreamLastUpdate: "2026-05-08 12:58:53",
    earliestObservation: "1999-01-04",
    latestObservation: "2026-05-07",
    observationCount: 7001,
    license: "EMMI EURIBOR\xAE data redistributed by Deutsche Bundesbank under non-commercial terms; commercial use requires an EMMI licence (https://www.emmi-benchmarks.eu/terms-of-use)."
  },
  euribor12m: {
    lastRefreshedAt: "2026-05-10T10:07:38Z",
    source: "Deutsche Bundesbank time-series (BBIG1) \u2014 EMMI EURIBOR\xAE 12-month daily fixings",
    sourceUrl: "https://api.statistiken.bundesbank.de/rest/download/BBIG1/D.D0.EUR.MMKT.EURIBOR.M12.BID._Z?format=csv&lang=en",
    seriesId: "BBIG1.D.D0.EUR.MMKT.EURIBOR.M12.BID._Z",
    upstreamLastUpdate: "2026-05-08 12:58:53",
    earliestObservation: "1999-01-04",
    latestObservation: "2026-05-07",
    observationCount: 7001,
    license: "EMMI EURIBOR\xAE data redistributed by Deutsche Bundesbank under non-commercial terms; commercial use requires an EMMI licence (https://www.emmi-benchmarks.eu/terms-of-use)."
  }
};

// ../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});

// ../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/util.js
var util;
(function(util2) {
  util2.assertEqual = (_) => {
  };
  function assertIs(_arg) {
  }
  __name(assertIs, "assertIs");
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  __name(assertNever, "assertNever");
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  __name(joinValues, "joinValues");
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = /* @__PURE__ */ __name((data) => {
  const t = typeof data;
  switch (t) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, "getParsedType");

// ../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = /* @__PURE__ */ __name((obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
}, "quotelessJson");
var ZodError = class _ZodError extends Error {
  static {
    __name(this, "ZodError");
  }
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = /* @__PURE__ */ __name((error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < issue.path.length) {
            const el = issue.path[i];
            const terminal = i === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    }, "processError");
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// ../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/locales/en.js
var errorMap = /* @__PURE__ */ __name((issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
}, "errorMap");
var en_default = errorMap;

// ../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
__name(setErrorMap, "setErrorMap");
function getErrorMap() {
  return overrideErrorMap;
}
__name(getErrorMap, "getErrorMap");

// ../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/parseUtil.js
var makeIssue = /* @__PURE__ */ __name((params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m) => !!m).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
}, "makeIssue");
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
__name(addIssueToContext, "addIssueToContext");
var ParseStatus = class _ParseStatus {
  static {
    __name(this, "ParseStatus");
  }
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = /* @__PURE__ */ __name((value) => ({ status: "dirty", value }), "DIRTY");
var OK = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
var isAborted = /* @__PURE__ */ __name((x) => x.status === "aborted", "isAborted");
var isDirty = /* @__PURE__ */ __name((x) => x.status === "dirty", "isDirty");
var isValid = /* @__PURE__ */ __name((x) => x.status === "valid", "isValid");
var isAsync = /* @__PURE__ */ __name((x) => typeof Promise !== "undefined" && x instanceof Promise, "isAsync");

// ../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/helpers/errorUtil.js
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// ../node_modules/.pnpm/zod@3.25.76/node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  static {
    __name(this, "ParseInputLazyPath");
  }
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = /* @__PURE__ */ __name((ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
}, "handleResult");
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = /* @__PURE__ */ __name((iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  }, "customMap");
  return { errorMap: customMap, description };
}
__name(processCreateParams, "processCreateParams");
var ZodType = class {
  static {
    __name(this, "ZodType");
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = /* @__PURE__ */ __name((val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    }, "getIssueProperties");
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = /* @__PURE__ */ __name(() => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      }), "setError");
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: /* @__PURE__ */ __name((data) => this["~validate"](data), "validate")
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
__name(timeRegexSource, "timeRegexSource");
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
__name(timeRegex, "timeRegex");
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
__name(datetimeRegex, "datetimeRegex");
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
__name(isValidIP, "isValidIP");
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
__name(isValidJWT, "isValidJWT");
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
__name(isValidCidr, "isValidCidr");
var ZodString = class _ZodString extends ZodType {
  static {
    __name(this, "ZodString");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
__name(floatSafeRemainder, "floatSafeRemainder");
var ZodNumber = class _ZodNumber extends ZodType {
  static {
    __name(this, "ZodNumber");
  }
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  static {
    __name(this, "ZodBigInt");
  }
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  static {
    __name(this, "ZodBoolean");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  static {
    __name(this, "ZodDate");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  static {
    __name(this, "ZodSymbol");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  static {
    __name(this, "ZodUndefined");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  static {
    __name(this, "ZodNull");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  static {
    __name(this, "ZodAny");
  }
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  static {
    __name(this, "ZodUnknown");
  }
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  static {
    __name(this, "ZodNever");
  }
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  static {
    __name(this, "ZodVoid");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  static {
    __name(this, "ZodArray");
  }
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
__name(deepPartialify, "deepPartialify");
var ZodObject = class _ZodObject extends ZodType {
  static {
    __name(this, "ZodObject");
  }
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: /* @__PURE__ */ __name((issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }, "errorMap")
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => ({
        ...this._def.shape(),
        ...augmentation
      }), "shape")
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: /* @__PURE__ */ __name(() => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }), "shape"),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => shape, "shape")
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => shape, "shape")
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: /* @__PURE__ */ __name(() => shape, "shape"),
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: /* @__PURE__ */ __name(() => shape, "shape"),
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  static {
    __name(this, "ZodUnion");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    __name(handleResults, "handleResults");
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = /* @__PURE__ */ __name((type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
}, "getDiscriminator");
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  static {
    __name(this, "ZodDiscriminatedUnion");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a, b) {
  const aType = getParsedType(a);
  const bType = getParsedType(b);
  if (a === b) {
    return { valid: true, data: a };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b);
    const sharedKeys = util.objectKeys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a.length !== b.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a === +b) {
    return { valid: true, data: a };
  } else {
    return { valid: false };
  }
}
__name(mergeValues, "mergeValues");
var ZodIntersection = class extends ZodType {
  static {
    __name(this, "ZodIntersection");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    }, "handleParsed");
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  static {
    __name(this, "ZodTuple");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  static {
    __name(this, "ZodRecord");
  }
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  static {
    __name(this, "ZodMap");
  }
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  static {
    __name(this, "ZodSet");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    __name(finalizeSet, "finalizeSet");
    const elements = [...ctx.data.values()].map((item, i) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  static {
    __name(this, "ZodFunction");
  }
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    __name(makeArgsIssue, "makeArgsIssue");
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    __name(makeReturnsIssue, "makeReturnsIssue");
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  static {
    __name(this, "ZodLazy");
  }
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  static {
    __name(this, "ZodLiteral");
  }
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
__name(createZodEnum, "createZodEnum");
var ZodEnum = class _ZodEnum extends ZodType {
  static {
    __name(this, "ZodEnum");
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  static {
    __name(this, "ZodNativeEnum");
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  static {
    __name(this, "ZodPromise");
  }
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  static {
    __name(this, "ZodEffects");
  }
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: /* @__PURE__ */ __name((arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      }, "addIssue"),
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = /* @__PURE__ */ __name((acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      }, "executeRefinement");
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  static {
    __name(this, "ZodOptional");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  static {
    __name(this, "ZodNullable");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  static {
    __name(this, "ZodDefault");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  static {
    __name(this, "ZodCatch");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  static {
    __name(this, "ZodNaN");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = /* @__PURE__ */ Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  static {
    __name(this, "ZodBranded");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  static {
    __name(this, "ZodPipeline");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = /* @__PURE__ */ __name(async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }, "handleAsync");
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a, b) {
    return new _ZodPipeline({
      in: a,
      out: b,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  static {
    __name(this, "ZodReadonly");
  }
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = /* @__PURE__ */ __name((data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    }, "freeze");
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p2 = typeof p === "string" ? { message: p } : p;
  return p2;
}
__name(cleanParams, "cleanParams");
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r = check(data);
      if (r instanceof Promise) {
        return r.then((r2) => {
          if (!r2) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
__name(custom, "custom");
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = /* @__PURE__ */ __name((cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), "instanceOfType");
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = /* @__PURE__ */ __name(() => stringType().optional(), "ostring");
var onumber = /* @__PURE__ */ __name(() => numberType().optional(), "onumber");
var oboolean = /* @__PURE__ */ __name(() => booleanType().optional(), "oboolean");
var coerce = {
  string: /* @__PURE__ */ __name(((arg) => ZodString.create({ ...arg, coerce: true })), "string"),
  number: /* @__PURE__ */ __name(((arg) => ZodNumber.create({ ...arg, coerce: true })), "number"),
  boolean: /* @__PURE__ */ __name(((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  })), "boolean"),
  bigint: /* @__PURE__ */ __name(((arg) => ZodBigInt.create({ ...arg, coerce: true })), "bigint"),
  date: /* @__PURE__ */ __name(((arg) => ZodDate.create({ ...arg, coerce: true })), "date")
};
var NEVER = INVALID;

// ../src/core/dateMath.ts
var MS_PER_DAY = 864e5;
function pad2(n) {
  return n < 10 ? `0${n}` : String(n);
}
__name(pad2, "pad2");
function todayIsoUtc() {
  const now = /* @__PURE__ */ new Date();
  return `${now.getUTCFullYear()}-${pad2(now.getUTCMonth() + 1)}-${pad2(now.getUTCDate())}`;
}
__name(todayIsoUtc, "todayIsoUtc");
function parseIsoDateParts(date) {
  const [y, m, d] = date.split("-").map(Number);
  return { year: y, month: m, day: d };
}
__name(parseIsoDateParts, "parseIsoDateParts");
function parseIsoMonthParts(month) {
  const [y, m] = month.split("-").map(Number);
  return { year: y, month: m };
}
__name(parseIsoMonthParts, "parseIsoMonthParts");
function formatIsoMonth(year, month) {
  return `${year}-${pad2(month)}`;
}
__name(formatIsoMonth, "formatIsoMonth");
function enumerateMonths(from, to) {
  const start = parseIsoMonthParts(from);
  const end = parseIsoMonthParts(to);
  const months = [];
  let y = start.year;
  let m = start.month;
  while (y < end.year || y === end.year && m <= end.month) {
    months.push(formatIsoMonth(y, m));
    m += 1;
    if (m > 12) {
      m = 1;
      y += 1;
    }
  }
  return months;
}
__name(enumerateMonths, "enumerateMonths");
function shiftMonths(date, months) {
  const { year, month, day } = parseIsoDateParts(date);
  const totalM0 = month - 1 + months;
  let newY = year + Math.floor(totalM0 / 12);
  let newM = (totalM0 % 12 + 12) % 12 + 1;
  const lastDayOfTarget = new Date(Date.UTC(newY, newM, 0)).getUTCDate();
  if (day <= lastDayOfTarget) {
    return `${newY}-${pad2(newM)}-${pad2(day)}`;
  }
  newM += 1;
  if (newM > 12) {
    newM = 1;
    newY += 1;
  }
  return `${newY}-${pad2(newM)}-01`;
}
__name(shiftMonths, "shiftMonths");
function floorYearsBetween(from, to) {
  const f = parseIsoDateParts(from);
  const t = parseIsoDateParts(to);
  let years = t.year - f.year;
  if (t.month < f.month || t.month === f.month && t.day < f.day) {
    years -= 1;
  }
  return Math.max(0, years);
}
__name(floorYearsBetween, "floorYearsBetween");
function daysBetween(from, to) {
  const f = parseIsoDateParts(from);
  const t = parseIsoDateParts(to);
  const fromMs = Date.UTC(f.year, f.month - 1, f.day);
  const toMs = Date.UTC(t.year, t.month - 1, t.day);
  return Math.round((toMs - fromMs) / MS_PER_DAY);
}
__name(daysBetween, "daysBetween");

// ../src/core/series.ts
var SERIE_C_PREMIUM_TIER_MODERNIZATION = "2009-03-01";
var SERIE_C_LEGACY_PREMIUM_TIERS = [
  { fromYear: 1, toYear: 1, ratePct: "0.00" },
  { fromYear: 2, toYear: 2, ratePct: "0.25" },
  { fromYear: 3, toYear: 3, ratePct: "0.50" },
  { fromYear: 4, toYear: 7, ratePct: "0.75" },
  { fromYear: 8, toYear: 8, ratePct: "1.00" },
  { fromYear: 9, toYear: 9, ratePct: "1.50" },
  { fromYear: 10, toYear: 10, ratePct: "2.50" }
];
var SERIE_C_PREMIUM_TIERS = [
  { fromYear: 1, toYear: 1, ratePct: "0.00" },
  { fromYear: 2, toYear: 2, ratePct: "0.50" },
  { fromYear: 3, toYear: 3, ratePct: "0.75" },
  { fromYear: 4, toYear: 7, ratePct: "1.00" },
  { fromYear: 8, toYear: 8, ratePct: "1.25" },
  { fromYear: 9, toYear: 9, ratePct: "1.50" },
  { fromYear: 10, toYear: 10, ratePct: "2.50" }
];
var SERIE_B_PREMIUM_TIERS = [
  { fromYear: 1, toYear: 1, ratePct: "0.00" },
  { fromYear: 2, toYear: 2, ratePct: "0.25" },
  { fromYear: 3, toYear: 3, ratePct: "0.50" },
  { fromYear: 4, toYear: 4, ratePct: "0.75" },
  { fromYear: 5, toYear: 5, ratePct: "1.00" },
  { fromYear: 6, toYear: 6, ratePct: "1.25" },
  { fromYear: 7, toYear: 7, ratePct: "1.50" },
  { fromYear: 8, toYear: 8, ratePct: "1.75" },
  { fromYear: 9, toYear: 9999, ratePct: "2.00" }
];
var SERIE_B_METADATA = {
  code: "B",
  name: "S\xE9rie B",
  minimumHoldingMonths: 3,
  maturityYears: null,
  ratesJsonMaxContractYears: 50,
  subscriptionStartDate: "1986-07-01",
  subscriptionEndDate: "2008-01-25",
  minUnits: 100,
  maxUnits: 25e4,
  baseRateClampMinPct: "0",
  baseRateClampMaxPct: "100",
  baseRateSpreadPct: "0",
  baseRateDecimals: 3,
  unitQuoteDecimals: 5,
  euribor3mAveragingDays: 20,
  capitalizationFrequency: "quarterly",
  defaultIrsRate: "0.28",
  premiumTiers: SERIE_B_PREMIUM_TIERS
};
var SERIE_C_METADATA = {
  code: "C",
  name: "S\xE9rie C",
  minimumHoldingMonths: 3,
  maturityYears: 10,
  subscriptionStartDate: "2008-01-26",
  subscriptionEndDate: "2015-01-31",
  minUnits: 100,
  maxUnits: 25e4,
  baseRateClampMinPct: "0",
  baseRateClampMaxPct: "100",
  baseRateSpreadPct: "0",
  baseRateEuriborMultiplierPct: "0.85",
  baseRatePostMeanOffsets: [
    { effectiveFromMonth: "2008-01", offsetPct: "-0.25" },
    { effectiveFromMonth: "2009-03", offsetPct: "0.25" }
  ],
  baseRateDecimals: 3,
  unitQuoteDecimals: 5,
  euribor3mAveragingDays: 10,
  capitalizationFrequency: "quarterly",
  defaultIrsRate: "0.28",
  premiumTiers: SERIE_C_PREMIUM_TIERS,
  premiumTiersLegacy: SERIE_C_LEGACY_PREMIUM_TIERS,
  premiumTierModernizationDate: SERIE_C_PREMIUM_TIER_MODERNIZATION
};
var SERIE_D_PREMIUM_TIERS = [
  { fromYear: 1, toYear: 1, ratePct: "0.00" },
  { fromYear: 2, toYear: 5, ratePct: "0.50" },
  { fromYear: 6, toYear: 10, ratePct: "1.00" }
];
var SERIE_D_METADATA = {
  code: "D",
  name: "S\xE9rie D",
  minimumHoldingMonths: 3,
  maturityYears: 10,
  subscriptionStartDate: "2015-02-01",
  subscriptionEndDate: "2017-10-31",
  minUnits: 100,
  maxUnits: 25e4,
  baseRateClampMinPct: "0",
  baseRateClampMaxPct: "3.5",
  baseRateSpreadPct: "1",
  baseRateDecimals: 3,
  unitQuoteDecimals: 5,
  euribor3mAveragingDays: 10,
  capitalizationFrequency: "quarterly",
  defaultIrsRate: "0.28",
  premiumTiers: SERIE_D_PREMIUM_TIERS
};
var SERIE_F_PREMIUM_TIERS = [
  { fromYear: 1, toYear: 1, ratePct: "0.00" },
  { fromYear: 2, toYear: 5, ratePct: "0.25" },
  { fromYear: 6, toYear: 9, ratePct: "0.50" },
  { fromYear: 10, toYear: 11, ratePct: "1.00" },
  { fromYear: 12, toYear: 13, ratePct: "1.50" },
  { fromYear: 14, toYear: 15, ratePct: "1.75" }
];
var SERIE_F_METADATA = {
  code: "F",
  name: "S\xE9rie F",
  minimumHoldingMonths: 3,
  maturityYears: 15,
  subscriptionStartDate: "2023-06-01",
  minUnits: 100,
  maxUnits: 1e5,
  baseRateClampMinPct: "0",
  baseRateClampMaxPct: "2.5",
  baseRateSpreadPct: "0",
  baseRateDecimals: 3,
  unitQuoteDecimals: 5,
  euribor3mAveragingDays: 10,
  capitalizationFrequency: "quarterly",
  defaultIrsRate: "0.28",
  premiumTiers: SERIE_F_PREMIUM_TIERS
};
var SERIE_E_PREMIUM_TIERS = [
  { fromYear: 1, toYear: 1, ratePct: "0.00" },
  { fromYear: 2, toYear: 5, ratePct: "0.50" },
  { fromYear: 6, toYear: 10, ratePct: "1.00" }
];
var SERIE_E_METADATA = {
  code: "E",
  name: "S\xE9rie E",
  minimumHoldingMonths: 3,
  maturityYears: 10,
  subscriptionStartDate: "2017-11-01",
  subscriptionEndDate: "2023-06-01",
  minUnits: 100,
  maxUnits: 25e4,
  baseRateClampMinPct: "0",
  baseRateClampMaxPct: "3.5",
  baseRateSpreadPct: "1",
  baseRateDecimals: 3,
  unitQuoteDecimals: 5,
  euribor3mAveragingDays: 10,
  capitalizationFrequency: "quarterly",
  defaultIrsRate: "0.28",
  premiumTiers: SERIE_E_PREMIUM_TIERS
};
var SERIES_REGISTRY = {
  B: SERIE_B_METADATA,
  C: SERIE_C_METADATA,
  D: SERIE_D_METADATA,
  E: SERIE_E_METADATA,
  F: SERIE_F_METADATA
};
function getSeries(code) {
  const metadata = SERIES_REGISTRY[code];
  if (!metadata) {
    throw new Error(`Unknown series code: ${String(code)}`);
  }
  return metadata;
}
__name(getSeries, "getSeries");
function premiumTiersForQuarter(series, quarterStartDate) {
  if (series.premiumTiersLegacy && series.premiumTierModernizationDate && quarterStartDate !== void 0 && quarterStartDate < series.premiumTierModernizationDate) {
    return series.premiumTiersLegacy;
  }
  return series.premiumTiers;
}
__name(premiumTiersForQuarter, "premiumTiersForQuarter");
function premiumTierForYear(series, contractYear, quarterStartDate) {
  const tiers = premiumTiersForQuarter(series, quarterStartDate);
  for (const tier of tiers) {
    if (contractYear >= tier.fromYear && contractYear <= tier.toYear) {
      return tier;
    }
  }
  throw new Error(
    `No premium tier defined for year ${contractYear} of ${series.name} (supported range 1..${series.maturityYears ?? "\u221E"})`
  );
}
__name(premiumTierForYear, "premiumTierForYear");

// ../src/types/schemas.ts
var ISO_DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
var ISO_MONTH_REGEX = /^\d{4}-\d{2}$/;
var isoDateSchema = external_exports.string().regex(ISO_DATE_REGEX, "Expected date in YYYY-MM-DD format").refine((value) => !Number.isNaN(Date.parse(`${value}T00:00:00Z`)), {
  message: "Invalid calendar date"
});
var isoMonthSchema = external_exports.string().regex(ISO_MONTH_REGEX, "Expected month in YYYY-MM format");
var seriesCodeSchema = external_exports.enum(["B", "C", "D", "E", "F"]);
function refineSubscriptionWindow(ctx, series, subscriptionDate, pathPrefix = []) {
  const metadata = getSeries(series);
  if (subscriptionDate < metadata.subscriptionStartDate) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: `subscriptionDate must be on or after ${metadata.subscriptionStartDate} (${metadata.name} subscription start)`,
      path: [...pathPrefix, "subscriptionDate"]
    });
  }
  if (metadata.subscriptionEndDate && subscriptionDate > metadata.subscriptionEndDate) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: `subscriptionDate must be on or before ${metadata.subscriptionEndDate} (${metadata.name} subscriptions closed)`,
      path: [...pathPrefix, "subscriptionDate"]
    });
  }
}
__name(refineSubscriptionWindow, "refineSubscriptionWindow");
var portfolioSubscriptionSchema = external_exports.object({
  series: seriesCodeSchema,
  subscriptionDate: isoDateSchema,
  units: external_exports.number().int("units must be an integer"),
  irsRate: external_exports.number().min(0, "irsRate must be >= 0").max(1, "irsRate must be <= 1").optional()
});
var simulateInputSchema = external_exports.object({
  series: seriesCodeSchema,
  subscriptionDate: isoDateSchema,
  units: external_exports.number().int("units must be an integer"),
  asOfDate: isoDateSchema.optional(),
  includeSchedule: external_exports.boolean().optional(),
  irsRate: external_exports.number().min(0, "irsRate must be >= 0").max(1, "irsRate must be <= 1").optional()
}).superRefine((data, ctx) => {
  refineSubscriptionWindow(ctx, data.series, data.subscriptionDate);
  const metadata = getSeries(data.series);
  if (data.units < metadata.minUnits) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: `units must be >= ${metadata.minUnits}`,
      path: ["units"]
    });
  }
  if (data.units > metadata.maxUnits) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: `units must be <= ${metadata.maxUnits.toLocaleString("en-US")}`,
      path: ["units"]
    });
  }
}).refine((data) => !data.asOfDate || data.asOfDate >= data.subscriptionDate, {
  message: "asOfDate must be on or after subscriptionDate",
  path: ["asOfDate"]
});
var cohortRateInputSchema = external_exports.object({
  series: seriesCodeSchema,
  subscriptionDate: isoDateSchema,
  asOfDate: isoDateSchema.optional()
}).superRefine((data, ctx) => {
  refineSubscriptionWindow(ctx, data.series, data.subscriptionDate);
}).refine((data) => !data.asOfDate || data.asOfDate >= data.subscriptionDate, {
  message: "asOfDate must be on or after subscriptionDate",
  path: ["asOfDate"]
});
var redemptionInputSchema = external_exports.object({
  series: seriesCodeSchema,
  subscriptionDate: isoDateSchema,
  units: external_exports.number().int("units must be an integer"),
  redemptionDate: isoDateSchema,
  unitsToRedeem: external_exports.number().int("unitsToRedeem must be an integer").optional(),
  irsRate: external_exports.number().min(0, "irsRate must be >= 0").max(1, "irsRate must be <= 1").optional()
}).superRefine((data, ctx) => {
  refineSubscriptionWindow(ctx, data.series, data.subscriptionDate);
  const metadata = getSeries(data.series);
  if (data.units < metadata.minUnits) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: `units must be >= ${metadata.minUnits}`,
      path: ["units"]
    });
  }
  if (data.units > metadata.maxUnits) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: `units must be <= ${metadata.maxUnits.toLocaleString("en-US")}`,
      path: ["units"]
    });
  }
  const unitsToRedeem = data.unitsToRedeem ?? data.units;
  if (unitsToRedeem < 1 || unitsToRedeem > data.units) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: `unitsToRedeem must be in [1, ${data.units}]`,
      path: ["unitsToRedeem"]
    });
  }
  const earliestRedemptionDate = shiftMonths(
    data.subscriptionDate,
    metadata.minimumHoldingMonths
  );
  if (data.redemptionDate < earliestRedemptionDate) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: `redemptionDate must be on or after ${earliestRedemptionDate} (${metadata.minimumHoldingMonths}-month minimum holding)`,
      path: ["redemptionDate"]
    });
  }
  if (metadata.maturityYears !== null) {
    const maturityDate = shiftMonths(data.subscriptionDate, metadata.maturityYears * 12);
    if (data.redemptionDate >= maturityDate) {
      ctx.addIssue({
        code: external_exports.ZodIssueCode.custom,
        message: "redemptionDate is on or after maturity; use simulate() for matured payouts",
        path: ["redemptionDate"]
      });
    }
  }
  const remainingUnits = data.units - unitsToRedeem;
  if (remainingUnits !== 0 && remainingUnits < metadata.minUnits) {
    ctx.addIssue({
      code: external_exports.ZodIssueCode.custom,
      message: `remaining balance after partial redemption must be 0 or at least ${metadata.minUnits}`,
      path: ["unitsToRedeem"]
    });
  }
});
var currentRateInputSchema = external_exports.object({
  series: seriesCodeSchema.optional(),
  asOfDate: isoDateSchema.optional()
});
var rateTableInputSchema = external_exports.object({
  series: seriesCodeSchema.optional(),
  fromMonth: isoMonthSchema,
  toMonth: isoMonthSchema
}).refine((data) => data.fromMonth <= data.toMonth, {
  message: "fromMonth must be on or before toMonth",
  path: ["toMonth"]
});
var simulatePortfolioInputSchema = external_exports.object({
  subscriptions: external_exports.array(portfolioSubscriptionSchema).min(1, "subscriptions must contain at least one entry"),
  asOfDate: isoDateSchema.optional(),
  includeSchedule: external_exports.boolean().optional()
}).superRefine((data, ctx) => {
  const runningUnitsBySeries = { B: 0, C: 0, D: 0, E: 0, F: 0 };
  for (const [index, subscription] of data.subscriptions.entries()) {
    const itemPath = ["subscriptions", index];
    const metadata = getSeries(subscription.series);
    const hasWindowError = subscription.subscriptionDate < metadata.subscriptionStartDate || metadata.subscriptionEndDate !== void 0 && subscription.subscriptionDate > metadata.subscriptionEndDate;
    const hasUnitsError = subscription.units < metadata.minUnits || subscription.units > metadata.maxUnits;
    refineSubscriptionWindow(ctx, subscription.series, subscription.subscriptionDate, itemPath);
    if (subscription.units < metadata.minUnits) {
      ctx.addIssue({
        code: external_exports.ZodIssueCode.custom,
        message: `units must be >= ${metadata.minUnits}`,
        path: [...itemPath, "units"]
      });
    }
    if (subscription.units > metadata.maxUnits) {
      ctx.addIssue({
        code: external_exports.ZodIssueCode.custom,
        message: `units must be <= ${metadata.maxUnits.toLocaleString("en-US")}`,
        path: [...itemPath, "units"]
      });
    }
    if (data.asOfDate && data.asOfDate < subscription.subscriptionDate) {
      ctx.addIssue({
        code: external_exports.ZodIssueCode.custom,
        message: `asOfDate must be on or after subscriptions[${index}].subscriptionDate`,
        path: ["asOfDate"]
      });
    }
    if (hasWindowError || hasUnitsError) {
      continue;
    }
    runningUnitsBySeries[subscription.series] += subscription.units;
    if (runningUnitsBySeries[subscription.series] > metadata.maxUnits) {
      const totalUnits = runningUnitsBySeries[subscription.series];
      ctx.addIssue({
        code: external_exports.ZodIssueCode.custom,
        message: `sum of ${metadata.name} units (${totalUnits}) exceeds the per-Conta-Aforro cap of ${metadata.maxUnits}`,
        path: [...itemPath, "units"]
      });
    }
  }
});
var taxYearSchema = external_exports.number().int("taxYear must be an integer").min(1990, "taxYear must be >= 1990").max(2100, "taxYear must be <= 2100");

// ../src/data/euribor12m.json
var euribor12m_default = [
  { date: "1999-01-04", ratePct: 3.209 },
  { date: "1999-01-05", ratePct: 3.187 },
  { date: "1999-01-06", ratePct: 3.176 },
  { date: "1999-01-07", ratePct: 3.158 },
  { date: "1999-01-08", ratePct: 3.139 },
  { date: "1999-01-11", ratePct: 3.126 },
  { date: "1999-01-12", ratePct: 3.122 },
  { date: "1999-01-13", ratePct: 3.107 },
  { date: "1999-01-14", ratePct: 3.083 },
  { date: "1999-01-15", ratePct: 3.044 },
  { date: "1999-01-18", ratePct: 3.021 },
  { date: "1999-01-19", ratePct: 2.984 },
  { date: "1999-01-20", ratePct: 2.985 },
  { date: "1999-01-21", ratePct: 2.99 },
  { date: "1999-01-22", ratePct: 2.99 },
  { date: "1999-01-25", ratePct: 2.981 },
  { date: "1999-01-26", ratePct: 2.984 },
  { date: "1999-01-27", ratePct: 2.986 },
  { date: "1999-01-28", ratePct: 2.981 },
  { date: "1999-01-29", ratePct: 2.981 },
  { date: "1999-02-01", ratePct: 2.988 },
  { date: "1999-02-02", ratePct: 3.004 },
  { date: "1999-02-03", ratePct: 3.012 },
  { date: "1999-02-04", ratePct: 3.02 },
  { date: "1999-02-05", ratePct: 3.026 },
  { date: "1999-02-08", ratePct: 3.036 },
  { date: "1999-02-09", ratePct: 3.041 },
  { date: "1999-02-10", ratePct: 3.039 },
  { date: "1999-02-11", ratePct: 3.041 },
  { date: "1999-02-12", ratePct: 3.039 },
  { date: "1999-02-15", ratePct: 3.041 },
  { date: "1999-02-16", ratePct: 3.038 },
  { date: "1999-02-17", ratePct: 3.034 },
  { date: "1999-02-18", ratePct: 3.031 },
  { date: "1999-02-19", ratePct: 3.03 },
  { date: "1999-02-22", ratePct: 3.025 },
  { date: "1999-02-23", ratePct: 3.023 },
  { date: "1999-02-24", ratePct: 3.023 },
  { date: "1999-02-25", ratePct: 3.036 },
  { date: "1999-02-26", ratePct: 3.071 },
  { date: "1999-03-01", ratePct: 3.079 },
  { date: "1999-03-02", ratePct: 3.148 },
  { date: "1999-03-03", ratePct: 3.146 },
  { date: "1999-03-04", ratePct: 3.151 },
  { date: "1999-03-05", ratePct: 3.13 },
  { date: "1999-03-08", ratePct: 3.097 },
  { date: "1999-03-09", ratePct: 3.084 },
  { date: "1999-03-10", ratePct: 3.078 },
  { date: "1999-03-11", ratePct: 3.072 },
  { date: "1999-03-12", ratePct: 3.029 },
  { date: "1999-03-15", ratePct: 3.026 },
  { date: "1999-03-16", ratePct: 3.027 },
  { date: "1999-03-17", ratePct: 3.027 },
  { date: "1999-03-18", ratePct: 3.019 },
  { date: "1999-03-19", ratePct: 3.012 },
  { date: "1999-03-22", ratePct: 3.009 },
  { date: "1999-03-23", ratePct: 3.011 },
  { date: "1999-03-24", ratePct: 3.01 },
  { date: "1999-03-25", ratePct: 2.992 },
  { date: "1999-03-26", ratePct: 2.985 },
  { date: "1999-03-29", ratePct: 2.985 },
  { date: "1999-03-30", ratePct: 2.978 },
  { date: "1999-03-31", ratePct: 2.967 },
  { date: "1999-04-01", ratePct: 2.939 },
  { date: "1999-04-02", ratePct: 2.932 },
  { date: "1999-04-05", ratePct: 2.93 },
  { date: "1999-04-06", ratePct: 2.907 },
  { date: "1999-04-07", ratePct: 2.903 },
  { date: "1999-04-08", ratePct: 2.899 },
  { date: "1999-04-09", ratePct: 2.719 },
  { date: "1999-04-12", ratePct: 2.715 },
  { date: "1999-04-13", ratePct: 2.713 },
  { date: "1999-04-14", ratePct: 2.709 },
  { date: "1999-04-15", ratePct: 2.707 },
  { date: "1999-04-16", ratePct: 2.71 },
  { date: "1999-04-19", ratePct: 2.707 },
  { date: "1999-04-20", ratePct: 2.7 },
  { date: "1999-04-21", ratePct: 2.692 },
  { date: "1999-04-22", ratePct: 2.685 },
  { date: "1999-04-23", ratePct: 2.683 },
  { date: "1999-04-26", ratePct: 2.681 },
  { date: "1999-04-27", ratePct: 2.677 },
  { date: "1999-04-28", ratePct: 2.678 },
  { date: "1999-04-29", ratePct: 2.678 },
  { date: "1999-04-30", ratePct: 2.676 },
  { date: "1999-05-03", ratePct: 2.68 },
  { date: "1999-05-04", ratePct: 2.68 },
  { date: "1999-05-05", ratePct: 2.684 },
  { date: "1999-05-06", ratePct: 2.683 },
  { date: "1999-05-07", ratePct: 2.691 },
  { date: "1999-05-10", ratePct: 2.691 },
  { date: "1999-05-11", ratePct: 2.688 },
  { date: "1999-05-12", ratePct: 2.686 },
  { date: "1999-05-13", ratePct: 2.68 },
  { date: "1999-05-14", ratePct: 2.668 },
  { date: "1999-05-17", ratePct: 2.678 },
  { date: "1999-05-18", ratePct: 2.677 },
  { date: "1999-05-19", ratePct: 2.688 },
  { date: "1999-05-20", ratePct: 2.688 },
  { date: "1999-05-21", ratePct: 2.686 },
  { date: "1999-05-24", ratePct: 2.682 },
  { date: "1999-05-25", ratePct: 2.679 },
  { date: "1999-05-26", ratePct: 2.678 },
  { date: "1999-05-27", ratePct: 2.678 },
  { date: "1999-05-28", ratePct: 2.685 },
  { date: "1999-05-31", ratePct: 2.687 },
  { date: "1999-06-01", ratePct: 2.735 },
  { date: "1999-06-02", ratePct: 2.812 },
  { date: "1999-06-03", ratePct: 2.784 },
  { date: "1999-06-04", ratePct: 2.795 },
  { date: "1999-06-07", ratePct: 2.805 },
  { date: "1999-06-08", ratePct: 2.784 },
  { date: "1999-06-09", ratePct: 2.781 },
  { date: "1999-06-10", ratePct: 2.794 },
  { date: "1999-06-11", ratePct: 2.831 },
  { date: "1999-06-14", ratePct: 2.836 },
  { date: "1999-06-15", ratePct: 2.838 },
  { date: "1999-06-16", ratePct: 2.838 },
  { date: "1999-06-17", ratePct: 2.834 },
  { date: "1999-06-18", ratePct: 2.819 },
  { date: "1999-06-21", ratePct: 2.817 },
  { date: "1999-06-22", ratePct: 2.842 },
  { date: "1999-06-23", ratePct: 2.856 },
  { date: "1999-06-24", ratePct: 2.878 },
  { date: "1999-06-25", ratePct: 2.928 },
  { date: "1999-06-28", ratePct: 2.928 },
  { date: "1999-06-29", ratePct: 2.927 },
  { date: "1999-06-30", ratePct: 2.936 },
  { date: "1999-07-01", ratePct: 2.91 },
  { date: "1999-07-02", ratePct: 2.956 },
  { date: "1999-07-05", ratePct: 2.956 },
  { date: "1999-07-06", ratePct: 2.971 },
  { date: "1999-07-07", ratePct: 2.976 },
  { date: "1999-07-08", ratePct: 2.983 },
  { date: "1999-07-09", ratePct: 2.991 },
  { date: "1999-07-12", ratePct: 2.997 },
  { date: "1999-07-13", ratePct: 2.994 },
  { date: "1999-07-14", ratePct: 2.977 },
  { date: "1999-07-15", ratePct: 2.964 },
  { date: "1999-07-16", ratePct: 3.069 },
  { date: "1999-07-19", ratePct: 3.091 },
  { date: "1999-07-20", ratePct: 3.094 },
  { date: "1999-07-21", ratePct: 3.075 },
  { date: "1999-07-22", ratePct: 3.05 },
  { date: "1999-07-23", ratePct: 3.09 },
  { date: "1999-07-26", ratePct: 3.094 },
  { date: "1999-07-27", ratePct: 3.093 },
  { date: "1999-07-28", ratePct: 3.095 },
  { date: "1999-07-29", ratePct: 3.104 },
  { date: "1999-07-30", ratePct: 3.13 },
  { date: "1999-08-02", ratePct: 3.188 },
  { date: "1999-08-03", ratePct: 3.233 },
  { date: "1999-08-04", ratePct: 3.225 },
  { date: "1999-08-05", ratePct: 3.229 },
  { date: "1999-08-06", ratePct: 3.238 },
  { date: "1999-08-09", ratePct: 3.301 },
  { date: "1999-08-10", ratePct: 3.314 },
  { date: "1999-08-11", ratePct: 3.294 },
  { date: "1999-08-12", ratePct: 3.277 },
  { date: "1999-08-13", ratePct: 3.28 },
  { date: "1999-08-16", ratePct: 3.27 },
  { date: "1999-08-17", ratePct: 3.268 },
  { date: "1999-08-18", ratePct: 3.205 },
  { date: "1999-08-19", ratePct: 3.198 },
  { date: "1999-08-20", ratePct: 3.189 },
  { date: "1999-08-23", ratePct: 3.18 },
  { date: "1999-08-24", ratePct: 3.186 },
  { date: "1999-08-25", ratePct: 3.188 },
  { date: "1999-08-26", ratePct: 3.186 },
  { date: "1999-08-27", ratePct: 3.235 },
  { date: "1999-08-30", ratePct: 3.255 },
  { date: "1999-08-31", ratePct: 3.281 },
  { date: "1999-09-01", ratePct: 3.284 },
  { date: "1999-09-02", ratePct: 3.288 },
  { date: "1999-09-03", ratePct: 3.288 },
  { date: "1999-09-06", ratePct: 3.242 },
  { date: "1999-09-07", ratePct: 3.247 },
  { date: "1999-09-08", ratePct: 3.278 },
  { date: "1999-09-09", ratePct: 3.291 },
  { date: "1999-09-10", ratePct: 3.308 },
  { date: "1999-09-13", ratePct: 3.314 },
  { date: "1999-09-14", ratePct: 3.321 },
  { date: "1999-09-15", ratePct: 3.327 },
  { date: "1999-09-16", ratePct: 3.32 },
  { date: "1999-09-17", ratePct: 3.31 },
  { date: "1999-09-20", ratePct: 3.295 },
  { date: "1999-09-21", ratePct: 3.305 },
  { date: "1999-09-22", ratePct: 3.312 },
  { date: "1999-09-23", ratePct: 3.319 },
  { date: "1999-09-24", ratePct: 3.293 },
  { date: "1999-09-27", ratePct: 3.283 },
  { date: "1999-09-28", ratePct: 3.312 },
  { date: "1999-09-29", ratePct: 3.34 },
  { date: "1999-09-30", ratePct: 3.348 },
  { date: "1999-10-01", ratePct: 3.401 },
  { date: "1999-10-04", ratePct: 3.541 },
  { date: "1999-10-05", ratePct: 3.561 },
  { date: "1999-10-06", ratePct: 3.605 },
  { date: "1999-10-07", ratePct: 3.617 },
  { date: "1999-10-08", ratePct: 3.558 },
  { date: "1999-10-11", ratePct: 3.581 },
  { date: "1999-10-12", ratePct: 3.618 },
  { date: "1999-10-13", ratePct: 3.682 },
  { date: "1999-10-14", ratePct: 3.714 },
  { date: "1999-10-15", ratePct: 3.755 },
  { date: "1999-10-18", ratePct: 3.739 },
  { date: "1999-10-19", ratePct: 3.738 },
  { date: "1999-10-20", ratePct: 3.772 },
  { date: "1999-10-21", ratePct: 3.793 },
  { date: "1999-10-22", ratePct: 3.77 },
  { date: "1999-10-25", ratePct: 3.757 },
  { date: "1999-10-26", ratePct: 3.802 },
  { date: "1999-10-27", ratePct: 3.817 },
  { date: "1999-10-28", ratePct: 3.787 },
  { date: "1999-10-29", ratePct: 3.749 },
  { date: "1999-11-01", ratePct: 3.756 },
  { date: "1999-11-02", ratePct: 3.773 },
  { date: "1999-11-03", ratePct: 3.765 },
  { date: "1999-11-04", ratePct: 3.746 },
  { date: "1999-11-05", ratePct: 3.713 },
  { date: "1999-11-08", ratePct: 3.659 },
  { date: "1999-11-09", ratePct: 3.585 },
  { date: "1999-11-10", ratePct: 3.601 },
  { date: "1999-11-11", ratePct: 3.619 },
  { date: "1999-11-12", ratePct: 3.606 },
  { date: "1999-11-15", ratePct: 3.596 },
  { date: "1999-11-16", ratePct: 3.6 },
  { date: "1999-11-17", ratePct: 3.607 },
  { date: "1999-11-18", ratePct: 3.646 },
  { date: "1999-11-19", ratePct: 3.661 },
  { date: "1999-11-22", ratePct: 3.703 },
  { date: "1999-11-23", ratePct: 3.729 },
  { date: "1999-11-24", ratePct: 3.723 },
  { date: "1999-11-25", ratePct: 3.728 },
  { date: "1999-11-26", ratePct: 3.779 },
  { date: "1999-11-29", ratePct: 3.78 },
  { date: "1999-11-30", ratePct: 3.788 },
  { date: "1999-12-01", ratePct: 3.763 },
  { date: "1999-12-02", ratePct: 3.766 },
  { date: "1999-12-03", ratePct: 3.78 },
  { date: "1999-12-06", ratePct: 3.777 },
  { date: "1999-12-07", ratePct: 3.773 },
  { date: "1999-12-08", ratePct: 3.774 },
  { date: "1999-12-09", ratePct: 3.776 },
  { date: "1999-12-10", ratePct: 3.773 },
  { date: "1999-12-13", ratePct: 3.772 },
  { date: "1999-12-14", ratePct: 3.784 },
  { date: "1999-12-15", ratePct: 3.797 },
  { date: "1999-12-16", ratePct: 3.814 },
  { date: "1999-12-17", ratePct: 3.89 },
  { date: "1999-12-20", ratePct: 3.891 },
  { date: "1999-12-21", ratePct: 3.895 },
  { date: "1999-12-22", ratePct: 3.885 },
  { date: "1999-12-23", ratePct: 3.879 },
  { date: "1999-12-24", ratePct: 3.879 },
  { date: "1999-12-27", ratePct: 3.881 },
  { date: "1999-12-28", ratePct: 3.881 },
  { date: "1999-12-29", ratePct: 3.873 },
  { date: "1999-12-30", ratePct: 3.876 },
  { date: "2000-01-03", ratePct: 3.885 },
  { date: "2000-01-04", ratePct: 3.952 },
  { date: "2000-01-05", ratePct: 3.955 },
  { date: "2000-01-06", ratePct: 3.953 },
  { date: "2000-01-07", ratePct: 3.941 },
  { date: "2000-01-10", ratePct: 3.914 },
  { date: "2000-01-11", ratePct: 3.913 },
  { date: "2000-01-12", ratePct: 3.948 },
  { date: "2000-01-13", ratePct: 3.946 },
  { date: "2000-01-14", ratePct: 3.932 },
  { date: "2000-01-17", ratePct: 3.921 },
  { date: "2000-01-18", ratePct: 3.925 },
  { date: "2000-01-19", ratePct: 3.939 },
  { date: "2000-01-20", ratePct: 3.93 },
  { date: "2000-01-21", ratePct: 3.921 },
  { date: "2000-01-24", ratePct: 3.934 },
  { date: "2000-01-25", ratePct: 3.935 },
  { date: "2000-01-26", ratePct: 3.948 },
  { date: "2000-01-27", ratePct: 4.017 },
  { date: "2000-01-28", ratePct: 4.062 },
  { date: "2000-01-31", ratePct: 4.068 },
  { date: "2000-02-01", ratePct: 4.079 },
  { date: "2000-02-02", ratePct: 4.064 },
  { date: "2000-02-03", ratePct: 4.065 },
  { date: "2000-02-04", ratePct: 4.049 },
  { date: "2000-02-07", ratePct: 4.061 },
  { date: "2000-02-08", ratePct: 4.08 },
  { date: "2000-02-09", ratePct: 4.073 },
  { date: "2000-02-10", ratePct: 4.076 },
  { date: "2000-02-11", ratePct: 4.083 },
  { date: "2000-02-14", ratePct: 4.083 },
  { date: "2000-02-15", ratePct: 4.081 },
  { date: "2000-02-16", ratePct: 4.086 },
  { date: "2000-02-17", ratePct: 4.096 },
  { date: "2000-02-18", ratePct: 4.157 },
  { date: "2000-02-21", ratePct: 4.208 },
  { date: "2000-02-22", ratePct: 4.206 },
  { date: "2000-02-23", ratePct: 4.192 },
  { date: "2000-02-24", ratePct: 4.177 },
  { date: "2000-02-25", ratePct: 4.113 },
  { date: "2000-02-28", ratePct: 4.155 },
  { date: "2000-02-29", ratePct: 4.156 },
  { date: "2000-03-01", ratePct: 4.165 },
  { date: "2000-03-02", ratePct: 4.191 },
  { date: "2000-03-03", ratePct: 4.196 },
  { date: "2000-03-06", ratePct: 4.215 },
  { date: "2000-03-07", ratePct: 4.219 },
  { date: "2000-03-08", ratePct: 4.248 },
  { date: "2000-03-09", ratePct: 4.272 },
  { date: "2000-03-10", ratePct: 4.261 },
  { date: "2000-03-13", ratePct: 4.301 },
  { date: "2000-03-14", ratePct: 4.306 },
  { date: "2000-03-15", ratePct: 4.317 },
  { date: "2000-03-16", ratePct: 4.327 },
  { date: "2000-03-17", ratePct: 4.287 },
  { date: "2000-03-20", ratePct: 4.27 },
  { date: "2000-03-21", ratePct: 4.254 },
  { date: "2000-03-22", ratePct: 4.257 },
  { date: "2000-03-23", ratePct: 4.256 },
  { date: "2000-03-24", ratePct: 4.262 },
  { date: "2000-03-27", ratePct: 4.305 },
  { date: "2000-03-28", ratePct: 4.306 },
  { date: "2000-03-29", ratePct: 4.308 },
  { date: "2000-03-30", ratePct: 4.326 },
  { date: "2000-03-31", ratePct: 4.303 },
  { date: "2000-04-03", ratePct: 4.304 },
  { date: "2000-04-04", ratePct: 4.301 },
  { date: "2000-04-05", ratePct: 4.285 },
  { date: "2000-04-06", ratePct: 4.261 },
  { date: "2000-04-07", ratePct: 4.295 },
  { date: "2000-04-10", ratePct: 4.305 },
  { date: "2000-04-11", ratePct: 4.316 },
  { date: "2000-04-12", ratePct: 4.337 },
  { date: "2000-04-13", ratePct: 4.348 },
  { date: "2000-04-14", ratePct: 4.342 },
  { date: "2000-04-17", ratePct: 4.329 },
  { date: "2000-04-18", ratePct: 4.358 },
  { date: "2000-04-19", ratePct: 4.375 },
  { date: "2000-04-20", ratePct: 4.391 },
  { date: "2000-04-25", ratePct: 4.456 },
  { date: "2000-04-26", ratePct: 4.506 },
  { date: "2000-04-27", ratePct: 4.487 },
  { date: "2000-04-28", ratePct: 4.565 },
  { date: "2000-05-02", ratePct: 4.573 },
  { date: "2000-05-03", ratePct: 4.673 },
  { date: "2000-05-04", ratePct: 4.752 },
  { date: "2000-05-05", ratePct: 4.783 },
  { date: "2000-05-08", ratePct: 4.759 },
  { date: "2000-05-09", ratePct: 4.756 },
  { date: "2000-05-10", ratePct: 4.726 },
  { date: "2000-05-11", ratePct: 4.725 },
  { date: "2000-05-12", ratePct: 4.839 },
  { date: "2000-05-15", ratePct: 4.842 },
  { date: "2000-05-16", ratePct: 4.832 },
  { date: "2000-05-17", ratePct: 4.939 },
  { date: "2000-05-18", ratePct: 4.986 },
  { date: "2000-05-19", ratePct: 4.975 },
  { date: "2000-05-22", ratePct: 5.001 },
  { date: "2000-05-23", ratePct: 4.972 },
  { date: "2000-05-24", ratePct: 4.942 },
  { date: "2000-05-25", ratePct: 4.928 },
  { date: "2000-05-26", ratePct: 4.897 },
  { date: "2000-05-29", ratePct: 4.89 },
  { date: "2000-05-30", ratePct: 4.892 },
  { date: "2000-05-31", ratePct: 4.985 },
  { date: "2000-06-01", ratePct: 4.983 },
  { date: "2000-06-02", ratePct: 4.96 },
  { date: "2000-06-05", ratePct: 4.88 },
  { date: "2000-06-06", ratePct: 4.875 },
  { date: "2000-06-07", ratePct: 4.844 },
  { date: "2000-06-08", ratePct: 4.844 },
  { date: "2000-06-09", ratePct: 5.038 },
  { date: "2000-06-12", ratePct: 5.013 },
  { date: "2000-06-13", ratePct: 4.998 },
  { date: "2000-06-14", ratePct: 4.969 },
  { date: "2000-06-15", ratePct: 4.941 },
  { date: "2000-06-16", ratePct: 4.915 },
  { date: "2000-06-19", ratePct: 4.89 },
  { date: "2000-06-20", ratePct: 4.925 },
  { date: "2000-06-21", ratePct: 4.98 },
  { date: "2000-06-22", ratePct: 4.988 },
  { date: "2000-06-23", ratePct: 5.007 },
  { date: "2000-06-26", ratePct: 5.035 },
  { date: "2000-06-27", ratePct: 5.036 },
  { date: "2000-06-28", ratePct: 5.025 },
  { date: "2000-06-29", ratePct: 5.045 },
  { date: "2000-06-30", ratePct: 5.037 },
  { date: "2000-07-03", ratePct: 5.041 },
  { date: "2000-07-04", ratePct: 5.041 },
  { date: "2000-07-05", ratePct: 5.042 },
  { date: "2000-07-06", ratePct: 5.005 },
  { date: "2000-07-07", ratePct: 5.031 },
  { date: "2000-07-10", ratePct: 5.026 },
  { date: "2000-07-11", ratePct: 5.031 },
  { date: "2000-07-12", ratePct: 5.044 },
  { date: "2000-07-13", ratePct: 5.084 },
  { date: "2000-07-14", ratePct: 5.106 },
  { date: "2000-07-17", ratePct: 5.138 },
  { date: "2000-07-18", ratePct: 5.134 },
  { date: "2000-07-19", ratePct: 5.198 },
  { date: "2000-07-20", ratePct: 5.195 },
  { date: "2000-07-21", ratePct: 5.142 },
  { date: "2000-07-24", ratePct: 5.149 },
  { date: "2000-07-25", ratePct: 5.149 },
  { date: "2000-07-26", ratePct: 5.146 },
  { date: "2000-07-27", ratePct: 5.153 },
  { date: "2000-07-28", ratePct: 5.174 },
  { date: "2000-07-31", ratePct: 5.177 },
  { date: "2000-08-01", ratePct: 5.164 },
  { date: "2000-08-02", ratePct: 5.161 },
  { date: "2000-08-03", ratePct: 5.169 },
  { date: "2000-08-04", ratePct: 5.166 },
  { date: "2000-08-07", ratePct: 5.143 },
  { date: "2000-08-08", ratePct: 5.126 },
  { date: "2000-08-09", ratePct: 5.138 },
  { date: "2000-08-10", ratePct: 5.145 },
  { date: "2000-08-11", ratePct: 5.188 },
  { date: "2000-08-14", ratePct: 5.25 },
  { date: "2000-08-15", ratePct: 5.252 },
  { date: "2000-08-16", ratePct: 5.29 },
  { date: "2000-08-17", ratePct: 5.306 },
  { date: "2000-08-18", ratePct: 5.29 },
  { date: "2000-08-21", ratePct: 5.32 },
  { date: "2000-08-22", ratePct: 5.337 },
  { date: "2000-08-23", ratePct: 5.325 },
  { date: "2000-08-24", ratePct: 5.299 },
  { date: "2000-08-25", ratePct: 5.328 },
  { date: "2000-08-28", ratePct: 5.341 },
  { date: "2000-08-29", ratePct: 5.339 },
  { date: "2000-08-30", ratePct: 5.324 },
  { date: "2000-08-31", ratePct: 5.313 },
  { date: "2000-09-01", ratePct: 5.261 },
  { date: "2000-09-04", ratePct: 5.213 },
  { date: "2000-09-05", ratePct: 5.233 },
  { date: "2000-09-06", ratePct: 5.272 },
  { date: "2000-09-07", ratePct: 5.328 },
  { date: "2000-09-08", ratePct: 5.293 },
  { date: "2000-09-11", ratePct: 5.293 },
  { date: "2000-09-12", ratePct: 5.289 },
  { date: "2000-09-13", ratePct: 5.258 },
  { date: "2000-09-14", ratePct: 5.241 },
  { date: "2000-09-15", ratePct: 5.202 },
  { date: "2000-09-18", ratePct: 5.208 },
  { date: "2000-09-19", ratePct: 5.172 },
  { date: "2000-09-20", ratePct: 5.168 },
  { date: "2000-09-21", ratePct: 5.148 },
  { date: "2000-09-22", ratePct: 5.118 },
  { date: "2000-09-25", ratePct: 5.141 },
  { date: "2000-09-26", ratePct: 5.189 },
  { date: "2000-09-27", ratePct: 5.182 },
  { date: "2000-09-28", ratePct: 5.2 },
  { date: "2000-09-29", ratePct: 5.195 },
  { date: "2000-10-02", ratePct: 5.173 },
  { date: "2000-10-03", ratePct: 5.159 },
  { date: "2000-10-04", ratePct: 5.155 },
  { date: "2000-10-05", ratePct: 5.172 },
  { date: "2000-10-06", ratePct: 5.214 },
  { date: "2000-10-09", ratePct: 5.212 },
  { date: "2000-10-10", ratePct: 5.205 },
  { date: "2000-10-11", ratePct: 5.188 },
  { date: "2000-10-12", ratePct: 5.185 },
  { date: "2000-10-13", ratePct: 5.145 },
  { date: "2000-10-16", ratePct: 5.194 },
  { date: "2000-10-17", ratePct: 5.201 },
  { date: "2000-10-18", ratePct: 5.189 },
  { date: "2000-10-19", ratePct: 5.209 },
  { date: "2000-10-20", ratePct: 5.225 },
  { date: "2000-10-23", ratePct: 5.237 },
  { date: "2000-10-24", ratePct: 5.28 },
  { date: "2000-10-25", ratePct: 5.288 },
  { date: "2000-10-26", ratePct: 5.305 },
  { date: "2000-10-27", ratePct: 5.29 },
  { date: "2000-10-30", ratePct: 5.288 },
  { date: "2000-10-31", ratePct: 5.291 },
  { date: "2000-11-01", ratePct: 5.272 },
  { date: "2000-11-02", ratePct: 5.252 },
  { date: "2000-11-03", ratePct: 5.251 },
  { date: "2000-11-06", ratePct: 5.246 },
  { date: "2000-11-07", ratePct: 5.245 },
  { date: "2000-11-08", ratePct: 5.254 },
  { date: "2000-11-09", ratePct: 5.253 },
  { date: "2000-11-10", ratePct: 5.223 },
  { date: "2000-11-13", ratePct: 5.201 },
  { date: "2000-11-14", ratePct: 5.188 },
  { date: "2000-11-15", ratePct: 5.179 },
  { date: "2000-11-16", ratePct: 5.166 },
  { date: "2000-11-17", ratePct: 5.15 },
  { date: "2000-11-20", ratePct: 5.151 },
  { date: "2000-11-21", ratePct: 5.161 },
  { date: "2000-11-22", ratePct: 5.168 },
  { date: "2000-11-23", ratePct: 5.167 },
  { date: "2000-11-24", ratePct: 5.167 },
  { date: "2000-11-27", ratePct: 5.171 },
  { date: "2000-11-28", ratePct: 5.165 },
  { date: "2000-11-29", ratePct: 5.131 },
  { date: "2000-11-30", ratePct: 5.091 },
  { date: "2000-12-01", ratePct: 5.054 },
  { date: "2000-12-04", ratePct: 5.042 },
  { date: "2000-12-05", ratePct: 5.025 },
  { date: "2000-12-06", ratePct: 4.931 },
  { date: "2000-12-07", ratePct: 4.907 },
  { date: "2000-12-08", ratePct: 4.911 },
  { date: "2000-12-11", ratePct: 4.941 },
  { date: "2000-12-12", ratePct: 4.951 },
  { date: "2000-12-13", ratePct: 4.942 },
  { date: "2000-12-14", ratePct: 4.886 },
  { date: "2000-12-15", ratePct: 4.876 },
  { date: "2000-12-18", ratePct: 4.851 },
  { date: "2000-12-19", ratePct: 4.833 },
  { date: "2000-12-20", ratePct: 4.802 },
  { date: "2000-12-21", ratePct: 4.767 },
  { date: "2000-12-22", ratePct: 4.765 },
  { date: "2000-12-27", ratePct: 4.755 },
  { date: "2000-12-28", ratePct: 4.75 },
  { date: "2000-12-29", ratePct: 4.749 },
  { date: "2001-01-02", ratePct: 4.692 },
  { date: "2001-01-03", ratePct: 4.619 },
  { date: "2001-01-04", ratePct: 4.526 },
  { date: "2001-01-05", ratePct: 4.458 },
  { date: "2001-01-08", ratePct: 4.451 },
  { date: "2001-01-09", ratePct: 4.493 },
  { date: "2001-01-10", ratePct: 4.577 },
  { date: "2001-01-11", ratePct: 4.602 },
  { date: "2001-01-12", ratePct: 4.598 },
  { date: "2001-01-15", ratePct: 4.643 },
  { date: "2001-01-16", ratePct: 4.588 },
  { date: "2001-01-17", ratePct: 4.606 },
  { date: "2001-01-18", ratePct: 4.563 },
  { date: "2001-01-19", ratePct: 4.539 },
  { date: "2001-01-22", ratePct: 4.541 },
  { date: "2001-01-23", ratePct: 4.543 },
  { date: "2001-01-24", ratePct: 4.586 },
  { date: "2001-01-25", ratePct: 4.614 },
  { date: "2001-01-26", ratePct: 4.615 },
  { date: "2001-01-29", ratePct: 4.62 },
  { date: "2001-01-30", ratePct: 4.613 },
  { date: "2001-01-31", ratePct: 4.533 },
  { date: "2001-02-01", ratePct: 4.505 },
  { date: "2001-02-02", ratePct: 4.544 },
  { date: "2001-02-05", ratePct: 4.546 },
  { date: "2001-02-06", ratePct: 4.544 },
  { date: "2001-02-07", ratePct: 4.551 },
  { date: "2001-02-08", ratePct: 4.554 },
  { date: "2001-02-09", ratePct: 4.591 },
  { date: "2001-02-12", ratePct: 4.564 },
  { date: "2001-02-13", ratePct: 4.565 },
  { date: "2001-02-14", ratePct: 4.575 },
  { date: "2001-02-15", ratePct: 4.608 },
  { date: "2001-02-16", ratePct: 4.618 },
  { date: "2001-02-19", ratePct: 4.613 },
  { date: "2001-02-20", ratePct: 4.626 },
  { date: "2001-02-21", ratePct: 4.644 },
  { date: "2001-02-22", ratePct: 4.683 },
  { date: "2001-02-23", ratePct: 4.691 },
  { date: "2001-02-26", ratePct: 4.649 },
  { date: "2001-02-27", ratePct: 4.616 },
  { date: "2001-02-28", ratePct: 4.539 },
  { date: "2001-03-01", ratePct: 4.532 },
  { date: "2001-03-02", ratePct: 4.563 },
  { date: "2001-03-05", ratePct: 4.585 },
  { date: "2001-03-06", ratePct: 4.609 },
  { date: "2001-03-07", ratePct: 4.58 },
  { date: "2001-03-08", ratePct: 4.569 },
  { date: "2001-03-09", ratePct: 4.567 },
  { date: "2001-03-12", ratePct: 4.576 },
  { date: "2001-03-13", ratePct: 4.553 },
  { date: "2001-03-14", ratePct: 4.568 },
  { date: "2001-03-15", ratePct: 4.511 },
  { date: "2001-03-16", ratePct: 4.495 },
  { date: "2001-03-19", ratePct: 4.487 },
  { date: "2001-03-20", ratePct: 4.483 },
  { date: "2001-03-21", ratePct: 4.447 },
  { date: "2001-03-22", ratePct: 4.348 },
  { date: "2001-03-23", ratePct: 4.317 },
  { date: "2001-03-26", ratePct: 4.315 },
  { date: "2001-03-27", ratePct: 4.301 },
  { date: "2001-03-28", ratePct: 4.329 },
  { date: "2001-03-29", ratePct: 4.307 },
  { date: "2001-03-30", ratePct: 4.322 },
  { date: "2001-04-02", ratePct: 4.314 },
  { date: "2001-04-03", ratePct: 4.348 },
  { date: "2001-04-04", ratePct: 4.304 },
  { date: "2001-04-05", ratePct: 4.339 },
  { date: "2001-04-06", ratePct: 4.351 },
  { date: "2001-04-09", ratePct: 4.297 },
  { date: "2001-04-10", ratePct: 4.291 },
  { date: "2001-04-11", ratePct: 4.337 },
  { date: "2001-04-12", ratePct: 4.536 },
  { date: "2001-04-17", ratePct: 4.578 },
  { date: "2001-04-18", ratePct: 4.626 },
  { date: "2001-04-19", ratePct: 4.479 },
  { date: "2001-04-20", ratePct: 4.591 },
  { date: "2001-04-23", ratePct: 4.579 },
  { date: "2001-04-24", ratePct: 4.642 },
  { date: "2001-04-25", ratePct: 4.639 },
  { date: "2001-04-26", ratePct: 4.62 },
  { date: "2001-04-27", ratePct: 4.577 },
  { date: "2001-04-30", ratePct: 4.692 },
  { date: "2001-05-02", ratePct: 4.728 },
  { date: "2001-05-03", ratePct: 4.729 },
  { date: "2001-05-04", ratePct: 4.687 },
  { date: "2001-05-07", ratePct: 4.665 },
  { date: "2001-05-08", ratePct: 4.636 },
  { date: "2001-05-09", ratePct: 4.631 },
  { date: "2001-05-10", ratePct: 4.576 },
  { date: "2001-05-11", ratePct: 4.391 },
  { date: "2001-05-14", ratePct: 4.446 },
  { date: "2001-05-15", ratePct: 4.433 },
  { date: "2001-05-16", ratePct: 4.424 },
  { date: "2001-05-17", ratePct: 4.442 },
  { date: "2001-05-18", ratePct: 4.44 },
  { date: "2001-05-21", ratePct: 4.491 },
  { date: "2001-05-22", ratePct: 4.458 },
  { date: "2001-05-23", ratePct: 4.505 },
  { date: "2001-05-24", ratePct: 4.485 },
  { date: "2001-05-25", ratePct: 4.479 },
  { date: "2001-05-28", ratePct: 4.475 },
  { date: "2001-05-29", ratePct: 4.456 },
  { date: "2001-05-30", ratePct: 4.439 },
  { date: "2001-05-31", ratePct: 4.434 },
  { date: "2001-06-01", ratePct: 4.396 },
  { date: "2001-06-04", ratePct: 4.359 },
  { date: "2001-06-05", ratePct: 4.349 },
  { date: "2001-06-06", ratePct: 4.304 },
  { date: "2001-06-07", ratePct: 4.307 },
  { date: "2001-06-08", ratePct: 4.321 },
  { date: "2001-06-11", ratePct: 4.315 },
  { date: "2001-06-12", ratePct: 4.318 },
  { date: "2001-06-13", ratePct: 4.385 },
  { date: "2001-06-14", ratePct: 4.379 },
  { date: "2001-06-15", ratePct: 4.347 },
  { date: "2001-06-18", ratePct: 4.334 },
  { date: "2001-06-19", ratePct: 4.326 },
  { date: "2001-06-20", ratePct: 4.302 },
  { date: "2001-06-21", ratePct: 4.269 },
  { date: "2001-06-22", ratePct: 4.262 },
  { date: "2001-06-25", ratePct: 4.245 },
  { date: "2001-06-26", ratePct: 4.231 },
  { date: "2001-06-27", ratePct: 4.26 },
  { date: "2001-06-28", ratePct: 4.236 },
  { date: "2001-06-29", ratePct: 4.317 },
  { date: "2001-07-02", ratePct: 4.305 },
  { date: "2001-07-03", ratePct: 4.284 },
  { date: "2001-07-04", ratePct: 4.37 },
  { date: "2001-07-05", ratePct: 4.349 },
  { date: "2001-07-06", ratePct: 4.375 },
  { date: "2001-07-09", ratePct: 4.349 },
  { date: "2001-07-10", ratePct: 4.367 },
  { date: "2001-07-11", ratePct: 4.317 },
  { date: "2001-07-12", ratePct: 4.337 },
  { date: "2001-07-13", ratePct: 4.325 },
  { date: "2001-07-16", ratePct: 4.327 },
  { date: "2001-07-17", ratePct: 4.32 },
  { date: "2001-07-18", ratePct: 4.321 },
  { date: "2001-07-19", ratePct: 4.283 },
  { date: "2001-07-20", ratePct: 4.309 },
  { date: "2001-07-23", ratePct: 4.294 },
  { date: "2001-07-24", ratePct: 4.283 },
  { date: "2001-07-25", ratePct: 4.291 },
  { date: "2001-07-26", ratePct: 4.299 },
  { date: "2001-07-27", ratePct: 4.268 },
  { date: "2001-07-30", ratePct: 4.241 },
  { date: "2001-07-31", ratePct: 4.226 },
  { date: "2001-08-01", ratePct: 4.215 },
  { date: "2001-08-02", ratePct: 4.207 },
  { date: "2001-08-03", ratePct: 4.229 },
  { date: "2001-08-06", ratePct: 4.189 },
  { date: "2001-08-07", ratePct: 4.188 },
  { date: "2001-08-08", ratePct: 4.21 },
  { date: "2001-08-09", ratePct: 4.156 },
  { date: "2001-08-10", ratePct: 4.123 },
  { date: "2001-08-13", ratePct: 4.091 },
  { date: "2001-08-14", ratePct: 4.099 },
  { date: "2001-08-15", ratePct: 4.086 },
  { date: "2001-08-16", ratePct: 4.077 },
  { date: "2001-08-17", ratePct: 4.078 },
  { date: "2001-08-20", ratePct: 4.047 },
  { date: "2001-08-21", ratePct: 4.046 },
  { date: "2001-08-22", ratePct: 4.043 },
  { date: "2001-08-23", ratePct: 4.07 },
  { date: "2001-08-24", ratePct: 4.087 },
  { date: "2001-08-27", ratePct: 4.105 },
  { date: "2001-08-28", ratePct: 4.079 },
  { date: "2001-08-29", ratePct: 4.03 },
  { date: "2001-08-30", ratePct: 4.043 },
  { date: "2001-08-31", ratePct: 3.975 },
  { date: "2001-09-03", ratePct: 3.976 },
  { date: "2001-09-04", ratePct: 4.005 },
  { date: "2001-09-05", ratePct: 4.078 },
  { date: "2001-09-06", ratePct: 4.089 },
  { date: "2001-09-07", ratePct: 4.023 },
  { date: "2001-09-10", ratePct: 3.966 },
  { date: "2001-09-11", ratePct: 3.997 },
  { date: "2001-09-12", ratePct: 3.883 },
  { date: "2001-09-13", ratePct: 3.886 },
  { date: "2001-09-14", ratePct: 3.828 },
  { date: "2001-09-17", ratePct: 3.799 },
  { date: "2001-09-18", ratePct: 3.59 },
  { date: "2001-09-19", ratePct: 3.597 },
  { date: "2001-09-20", ratePct: 3.567 },
  { date: "2001-09-21", ratePct: 3.552 },
  { date: "2001-09-24", ratePct: 3.545 },
  { date: "2001-09-25", ratePct: 3.518 },
  { date: "2001-09-26", ratePct: 3.509 },
  { date: "2001-09-27", ratePct: 3.495 },
  { date: "2001-09-28", ratePct: 3.496 },
  { date: "2001-10-01", ratePct: 3.493 },
  { date: "2001-10-02", ratePct: 3.477 },
  { date: "2001-10-03", ratePct: 3.404 },
  { date: "2001-10-04", ratePct: 3.392 },
  { date: "2001-10-05", ratePct: 3.345 },
  { date: "2001-10-08", ratePct: 3.347 },
  { date: "2001-10-09", ratePct: 3.372 },
  { date: "2001-10-10", ratePct: 3.41 },
  { date: "2001-10-11", ratePct: 3.417 },
  { date: "2001-10-12", ratePct: 3.466 },
  { date: "2001-10-15", ratePct: 3.427 },
  { date: "2001-10-16", ratePct: 3.405 },
  { date: "2001-10-17", ratePct: 3.408 },
  { date: "2001-10-18", ratePct: 3.399 },
  { date: "2001-10-19", ratePct: 3.353 },
  { date: "2001-10-22", ratePct: 3.333 },
  { date: "2001-10-23", ratePct: 3.34 },
  { date: "2001-10-24", ratePct: 3.343 },
  { date: "2001-10-25", ratePct: 3.326 },
  { date: "2001-10-26", ratePct: 3.324 },
  { date: "2001-10-29", ratePct: 3.282 },
  { date: "2001-10-30", ratePct: 3.232 },
  { date: "2001-10-31", ratePct: 3.201 },
  { date: "2001-11-01", ratePct: 3.193 },
  { date: "2001-11-02", ratePct: 3.179 },
  { date: "2001-11-05", ratePct: 3.165 },
  { date: "2001-11-06", ratePct: 3.111 },
  { date: "2001-11-07", ratePct: 3.043 },
  { date: "2001-11-08", ratePct: 2.994 },
  { date: "2001-11-09", ratePct: 3.02 },
  { date: "2001-11-12", ratePct: 3.056 },
  { date: "2001-11-13", ratePct: 3.063 },
  { date: "2001-11-14", ratePct: 3.105 },
  { date: "2001-11-15", ratePct: 3.214 },
  { date: "2001-11-16", ratePct: 3.328 },
  { date: "2001-11-19", ratePct: 3.315 },
  { date: "2001-11-20", ratePct: 3.238 },
  { date: "2001-11-21", ratePct: 3.265 },
  { date: "2001-11-22", ratePct: 3.343 },
  { date: "2001-11-23", ratePct: 3.318 },
  { date: "2001-11-26", ratePct: 3.302 },
  { date: "2001-11-27", ratePct: 3.309 },
  { date: "2001-11-28", ratePct: 3.307 },
  { date: "2001-11-29", ratePct: 3.268 },
  { date: "2001-11-30", ratePct: 3.217 },
  { date: "2001-12-03", ratePct: 3.183 },
  { date: "2001-12-04", ratePct: 3.187 },
  { date: "2001-12-05", ratePct: 3.194 },
  { date: "2001-12-06", ratePct: 3.341 },
  { date: "2001-12-07", ratePct: 3.378 },
  { date: "2001-12-10", ratePct: 3.363 },
  { date: "2001-12-11", ratePct: 3.304 },
  { date: "2001-12-12", ratePct: 3.297 },
  { date: "2001-12-13", ratePct: 3.236 },
  { date: "2001-12-14", ratePct: 3.291 },
  { date: "2001-12-17", ratePct: 3.334 },
  { date: "2001-12-18", ratePct: 3.343 },
  { date: "2001-12-19", ratePct: 3.303 },
  { date: "2001-12-20", ratePct: 3.299 },
  { date: "2001-12-21", ratePct: 3.302 },
  { date: "2001-12-24", ratePct: 3.32 },
  { date: "2001-12-27", ratePct: 3.349 },
  { date: "2001-12-28", ratePct: 3.341 },
  { date: "2002-01-02", ratePct: 3.312 },
  { date: "2002-01-03", ratePct: 3.337 },
  { date: "2002-01-04", ratePct: 3.367 },
  { date: "2002-01-07", ratePct: 3.415 },
  { date: "2002-01-08", ratePct: 3.373 },
  { date: "2002-01-09", ratePct: 3.42 },
  { date: "2002-01-10", ratePct: 3.45 },
  { date: "2002-01-11", ratePct: 3.501 },
  { date: "2002-01-14", ratePct: 3.42 },
  { date: "2002-01-15", ratePct: 3.444 },
  { date: "2002-01-16", ratePct: 3.449 },
  { date: "2002-01-17", ratePct: 3.47 },
  { date: "2002-01-18", ratePct: 3.475 },
  { date: "2002-01-21", ratePct: 3.486 },
  { date: "2002-01-22", ratePct: 3.519 },
  { date: "2002-01-23", ratePct: 3.558 },
  { date: "2002-01-24", ratePct: 3.563 },
  { date: "2002-01-25", ratePct: 3.61 },
  { date: "2002-01-28", ratePct: 3.649 },
  { date: "2002-01-29", ratePct: 3.616 },
  { date: "2002-01-30", ratePct: 3.572 },
  { date: "2002-01-31", ratePct: 3.624 },
  { date: "2002-02-01", ratePct: 3.633 },
  { date: "2002-02-04", ratePct: 3.575 },
  { date: "2002-02-05", ratePct: 3.541 },
  { date: "2002-02-06", ratePct: 3.528 },
  { date: "2002-02-07", ratePct: 3.515 },
  { date: "2002-02-08", ratePct: 3.572 },
  { date: "2002-02-11", ratePct: 3.589 },
  { date: "2002-02-12", ratePct: 3.564 },
  { date: "2002-02-13", ratePct: 3.625 },
  { date: "2002-02-14", ratePct: 3.622 },
  { date: "2002-02-15", ratePct: 3.603 },
  { date: "2002-02-18", ratePct: 3.594 },
  { date: "2002-02-19", ratePct: 3.588 },
  { date: "2002-02-20", ratePct: 3.618 },
  { date: "2002-02-21", ratePct: 3.632 },
  { date: "2002-02-22", ratePct: 3.594 },
  { date: "2002-02-25", ratePct: 3.598 },
  { date: "2002-02-26", ratePct: 3.633 },
  { date: "2002-02-27", ratePct: 3.636 },
  { date: "2002-02-28", ratePct: 3.613 },
  { date: "2002-03-01", ratePct: 3.617 },
  { date: "2002-03-04", ratePct: 3.674 },
  { date: "2002-03-05", ratePct: 3.676 },
  { date: "2002-03-06", ratePct: 3.708 },
  { date: "2002-03-07", ratePct: 3.714 },
  { date: "2002-03-08", ratePct: 3.774 },
  { date: "2002-03-11", ratePct: 3.774 },
  { date: "2002-03-12", ratePct: 3.774 },
  { date: "2002-03-13", ratePct: 3.8 },
  { date: "2002-03-14", ratePct: 3.781 },
  { date: "2002-03-15", ratePct: 3.837 },
  { date: "2002-03-18", ratePct: 3.841 },
  { date: "2002-03-19", ratePct: 3.844 },
  { date: "2002-03-20", ratePct: 3.835 },
  { date: "2002-03-21", ratePct: 3.893 },
  { date: "2002-03-22", ratePct: 3.902 },
  { date: "2002-03-25", ratePct: 3.971 },
  { date: "2002-03-26", ratePct: 3.986 },
  { date: "2002-03-27", ratePct: 3.957 },
  { date: "2002-03-28", ratePct: 3.953 },
  { date: "2002-04-02", ratePct: 3.994 },
  { date: "2002-04-03", ratePct: 3.961 },
  { date: "2002-04-04", ratePct: 3.941 },
  { date: "2002-04-05", ratePct: 3.935 },
  { date: "2002-04-08", ratePct: 3.891 },
  { date: "2002-04-09", ratePct: 3.908 },
  { date: "2002-04-10", ratePct: 3.865 },
  { date: "2002-04-11", ratePct: 3.898 },
  { date: "2002-04-12", ratePct: 3.884 },
  { date: "2002-04-15", ratePct: 3.843 },
  { date: "2002-04-16", ratePct: 3.842 },
  { date: "2002-04-17", ratePct: 3.883 },
  { date: "2002-04-18", ratePct: 3.869 },
  { date: "2002-04-19", ratePct: 3.846 },
  { date: "2002-04-22", ratePct: 3.832 },
  { date: "2002-04-23", ratePct: 3.8 },
  { date: "2002-04-24", ratePct: 3.823 },
  { date: "2002-04-25", ratePct: 3.766 },
  { date: "2002-04-26", ratePct: 3.773 },
  { date: "2002-04-29", ratePct: 3.752 },
  { date: "2002-04-30", ratePct: 3.759 },
  { date: "2002-05-02", ratePct: 3.771 },
  { date: "2002-05-03", ratePct: 3.881 },
  { date: "2002-05-06", ratePct: 3.831 },
  { date: "2002-05-07", ratePct: 3.803 },
  { date: "2002-05-08", ratePct: 3.839 },
  { date: "2002-05-09", ratePct: 3.904 },
  { date: "2002-05-10", ratePct: 3.902 },
  { date: "2002-05-13", ratePct: 3.924 },
  { date: "2002-05-14", ratePct: 4.027 },
  { date: "2002-05-15", ratePct: 4.041 },
  { date: "2002-05-16", ratePct: 4.044 },
  { date: "2002-05-17", ratePct: 4.101 },
  { date: "2002-05-20", ratePct: 4.09 },
  { date: "2002-05-21", ratePct: 4.085 },
  { date: "2002-05-22", ratePct: 3.971 },
  { date: "2002-05-23", ratePct: 3.992 },
  { date: "2002-05-24", ratePct: 3.983 },
  { date: "2002-05-27", ratePct: 4.001 },
  { date: "2002-05-28", ratePct: 4.041 },
  { date: "2002-05-29", ratePct: 4.012 },
  { date: "2002-05-30", ratePct: 3.974 },
  { date: "2002-05-31", ratePct: 3.963 },
  { date: "2002-06-03", ratePct: 3.999 },
  { date: "2002-06-04", ratePct: 3.958 },
  { date: "2002-06-05", ratePct: 3.954 },
  { date: "2002-06-06", ratePct: 3.953 },
  { date: "2002-06-07", ratePct: 3.92 },
  { date: "2002-06-10", ratePct: 3.945 },
  { date: "2002-06-11", ratePct: 3.925 },
  { date: "2002-06-12", ratePct: 3.909 },
  { date: "2002-06-13", ratePct: 3.937 },
  { date: "2002-06-14", ratePct: 3.863 },
  { date: "2002-06-17", ratePct: 3.836 },
  { date: "2002-06-18", ratePct: 3.852 },
  { date: "2002-06-19", ratePct: 3.834 },
  { date: "2002-06-20", ratePct: 3.833 },
  { date: "2002-06-21", ratePct: 3.817 },
  { date: "2002-06-24", ratePct: 3.807 },
  { date: "2002-06-25", ratePct: 3.787 },
  { date: "2002-06-26", ratePct: 3.719 },
  { date: "2002-06-27", ratePct: 3.762 },
  { date: "2002-06-28", ratePct: 3.765 },
  { date: "2002-07-01", ratePct: 3.723 },
  { date: "2002-07-02", ratePct: 3.724 },
  { date: "2002-07-03", ratePct: 3.708 },
  { date: "2002-07-04", ratePct: 3.737 },
  { date: "2002-07-05", ratePct: 3.755 },
  { date: "2002-07-08", ratePct: 3.753 },
  { date: "2002-07-09", ratePct: 3.759 },
  { date: "2002-07-10", ratePct: 3.72 },
  { date: "2002-07-11", ratePct: 3.675 },
  { date: "2002-07-12", ratePct: 3.684 },
  { date: "2002-07-15", ratePct: 3.641 },
  { date: "2002-07-16", ratePct: 3.618 },
  { date: "2002-07-17", ratePct: 3.658 },
  { date: "2002-07-18", ratePct: 3.685 },
  { date: "2002-07-19", ratePct: 3.62 },
  { date: "2002-07-22", ratePct: 3.59 },
  { date: "2002-07-23", ratePct: 3.611 },
  { date: "2002-07-24", ratePct: 3.522 },
  { date: "2002-07-25", ratePct: 3.536 },
  { date: "2002-07-26", ratePct: 3.509 },
  { date: "2002-07-29", ratePct: 3.501 },
  { date: "2002-07-30", ratePct: 3.563 },
  { date: "2002-07-31", ratePct: 3.539 },
  { date: "2002-08-01", ratePct: 3.479 },
  { date: "2002-08-02", ratePct: 3.438 },
  { date: "2002-08-05", ratePct: 3.351 },
  { date: "2002-08-06", ratePct: 3.363 },
  { date: "2002-08-07", ratePct: 3.418 },
  { date: "2002-08-08", ratePct: 3.35 },
  { date: "2002-08-09", ratePct: 3.39 },
  { date: "2002-08-12", ratePct: 3.388 },
  { date: "2002-08-13", ratePct: 3.383 },
  { date: "2002-08-14", ratePct: 3.33 },
  { date: "2002-08-15", ratePct: 3.387 },
  { date: "2002-08-16", ratePct: 3.502 },
  { date: "2002-08-19", ratePct: 3.497 },
  { date: "2002-08-20", ratePct: 3.49 },
  { date: "2002-08-21", ratePct: 3.498 },
  { date: "2002-08-22", ratePct: 3.556 },
  { date: "2002-08-23", ratePct: 3.529 },
  { date: "2002-08-26", ratePct: 3.524 },
  { date: "2002-08-27", ratePct: 3.511 },
  { date: "2002-08-28", ratePct: 3.49 },
  { date: "2002-08-29", ratePct: 3.414 },
  { date: "2002-08-30", ratePct: 3.401 },
  { date: "2002-09-02", ratePct: 3.365 },
  { date: "2002-09-03", ratePct: 3.339 },
  { date: "2002-09-04", ratePct: 3.293 },
  { date: "2002-09-05", ratePct: 3.233 },
  { date: "2002-09-06", ratePct: 3.223 },
  { date: "2002-09-09", ratePct: 3.296 },
  { date: "2002-09-10", ratePct: 3.314 },
  { date: "2002-09-11", ratePct: 3.33 },
  { date: "2002-09-12", ratePct: 3.329 },
  { date: "2002-09-13", ratePct: 3.244 },
  { date: "2002-09-16", ratePct: 3.253 },
  { date: "2002-09-17", ratePct: 3.255 },
  { date: "2002-09-18", ratePct: 3.198 },
  { date: "2002-09-19", ratePct: 3.207 },
  { date: "2002-09-20", ratePct: 3.177 },
  { date: "2002-09-23", ratePct: 3.172 },
  { date: "2002-09-24", ratePct: 3.155 },
  { date: "2002-09-25", ratePct: 3.136 },
  { date: "2002-09-26", ratePct: 3.169 },
  { date: "2002-09-27", ratePct: 3.164 },
  { date: "2002-09-30", ratePct: 3.113 },
  { date: "2002-10-01", ratePct: 3.062 },
  { date: "2002-10-02", ratePct: 3.113 },
  { date: "2002-10-03", ratePct: 3.058 },
  { date: "2002-10-04", ratePct: 3.052 },
  { date: "2002-10-07", ratePct: 3.001 },
  { date: "2002-10-08", ratePct: 3.061 },
  { date: "2002-10-09", ratePct: 3.044 },
  { date: "2002-10-10", ratePct: 3.042 },
  { date: "2002-10-11", ratePct: 3.147 },
  { date: "2002-10-14", ratePct: 3.165 },
  { date: "2002-10-15", ratePct: 3.203 },
  { date: "2002-10-16", ratePct: 3.23 },
  { date: "2002-10-17", ratePct: 3.315 },
  { date: "2002-10-18", ratePct: 3.175 },
  { date: "2002-10-21", ratePct: 3.145 },
  { date: "2002-10-22", ratePct: 3.168 },
  { date: "2002-10-23", ratePct: 3.158 },
  { date: "2002-10-24", ratePct: 3.124 },
  { date: "2002-10-25", ratePct: 3.148 },
  { date: "2002-10-28", ratePct: 3.145 },
  { date: "2002-10-29", ratePct: 3.123 },
  { date: "2002-10-30", ratePct: 3.092 },
  { date: "2002-10-31", ratePct: 3.125 },
  { date: "2002-11-01", ratePct: 3.069 },
  { date: "2002-11-04", ratePct: 3.099 },
  { date: "2002-11-05", ratePct: 3.072 },
  { date: "2002-11-06", ratePct: 3.112 },
  { date: "2002-11-07", ratePct: 3.078 },
  { date: "2002-11-08", ratePct: 3.05 },
  { date: "2002-11-11", ratePct: 3.007 },
  { date: "2002-11-12", ratePct: 2.992 },
  { date: "2002-11-13", ratePct: 2.981 },
  { date: "2002-11-14", ratePct: 2.965 },
  { date: "2002-11-15", ratePct: 3.007 },
  { date: "2002-11-18", ratePct: 2.985 },
  { date: "2002-11-19", ratePct: 2.977 },
  { date: "2002-11-20", ratePct: 2.971 },
  { date: "2002-11-21", ratePct: 2.969 },
  { date: "2002-11-22", ratePct: 2.973 },
  { date: "2002-11-25", ratePct: 3.017 },
  { date: "2002-11-26", ratePct: 3.007 },
  { date: "2002-11-27", ratePct: 2.986 },
  { date: "2002-11-28", ratePct: 3.031 },
  { date: "2002-11-29", ratePct: 3.017 },
  { date: "2002-12-02", ratePct: 3.01 },
  { date: "2002-12-03", ratePct: 2.993 },
  { date: "2002-12-04", ratePct: 2.976 },
  { date: "2002-12-05", ratePct: 2.967 },
  { date: "2002-12-06", ratePct: 2.946 },
  { date: "2002-12-09", ratePct: 2.918 },
  { date: "2002-12-10", ratePct: 2.887 },
  { date: "2002-12-11", ratePct: 2.895 },
  { date: "2002-12-12", ratePct: 2.879 },
  { date: "2002-12-13", ratePct: 2.849 },
  { date: "2002-12-16", ratePct: 2.854 },
  { date: "2002-12-17", ratePct: 2.858 },
  { date: "2002-12-18", ratePct: 2.835 },
  { date: "2002-12-19", ratePct: 2.829 },
  { date: "2002-12-20", ratePct: 2.822 },
  { date: "2002-12-23", ratePct: 2.82 },
  { date: "2002-12-24", ratePct: 2.819 },
  { date: "2002-12-27", ratePct: 2.779 },
  { date: "2002-12-30", ratePct: 2.746 },
  { date: "2002-12-31", ratePct: 2.749 },
  { date: "2003-01-02", ratePct: 2.734 },
  { date: "2003-01-03", ratePct: 2.797 },
  { date: "2003-01-06", ratePct: 2.777 },
  { date: "2003-01-07", ratePct: 2.752 },
  { date: "2003-01-08", ratePct: 2.731 },
  { date: "2003-01-09", ratePct: 2.699 },
  { date: "2003-01-10", ratePct: 2.73 },
  { date: "2003-01-13", ratePct: 2.722 },
  { date: "2003-01-14", ratePct: 2.722 },
  { date: "2003-01-15", ratePct: 2.723 },
  { date: "2003-01-16", ratePct: 2.722 },
  { date: "2003-01-17", ratePct: 2.719 },
  { date: "2003-01-20", ratePct: 2.705 },
  { date: "2003-01-21", ratePct: 2.702 },
  { date: "2003-01-22", ratePct: 2.685 },
  { date: "2003-01-23", ratePct: 2.683 },
  { date: "2003-01-24", ratePct: 2.66 },
  { date: "2003-01-27", ratePct: 2.645 },
  { date: "2003-01-28", ratePct: 2.666 },
  { date: "2003-01-29", ratePct: 2.638 },
  { date: "2003-01-30", ratePct: 2.652 },
  { date: "2003-01-31", ratePct: 2.636 },
  { date: "2003-02-03", ratePct: 2.658 },
  { date: "2003-02-04", ratePct: 2.644 },
  { date: "2003-02-05", ratePct: 2.609 },
  { date: "2003-02-06", ratePct: 2.624 },
  { date: "2003-02-07", ratePct: 2.558 },
  { date: "2003-02-10", ratePct: 2.533 },
  { date: "2003-02-11", ratePct: 2.546 },
  { date: "2003-02-12", ratePct: 2.513 },
  { date: "2003-02-13", ratePct: 2.485 },
  { date: "2003-02-14", ratePct: 2.489 },
  { date: "2003-02-17", ratePct: 2.518 },
  { date: "2003-02-18", ratePct: 2.499 },
  { date: "2003-02-19", ratePct: 2.499 },
  { date: "2003-02-20", ratePct: 2.474 },
  { date: "2003-02-21", ratePct: 2.474 },
  { date: "2003-02-24", ratePct: 2.399 },
  { date: "2003-02-25", ratePct: 2.38 },
  { date: "2003-02-26", ratePct: 2.383 },
  { date: "2003-02-27", ratePct: 2.374 },
  { date: "2003-02-28", ratePct: 2.412 },
  { date: "2003-03-03", ratePct: 2.36 },
  { date: "2003-03-04", ratePct: 2.343 },
  { date: "2003-03-05", ratePct: 2.344 },
  { date: "2003-03-06", ratePct: 2.353 },
  { date: "2003-03-07", ratePct: 2.354 },
  { date: "2003-03-10", ratePct: 2.336 },
  { date: "2003-03-11", ratePct: 2.335 },
  { date: "2003-03-12", ratePct: 2.347 },
  { date: "2003-03-13", ratePct: 2.381 },
  { date: "2003-03-14", ratePct: 2.471 },
  { date: "2003-03-17", ratePct: 2.429 },
  { date: "2003-03-18", ratePct: 2.499 },
  { date: "2003-03-19", ratePct: 2.464 },
  { date: "2003-03-20", ratePct: 2.474 },
  { date: "2003-03-21", ratePct: 2.461 },
  { date: "2003-03-24", ratePct: 2.473 },
  { date: "2003-03-25", ratePct: 2.455 },
  { date: "2003-03-26", ratePct: 2.468 },
  { date: "2003-03-27", ratePct: 2.447 },
  { date: "2003-03-28", ratePct: 2.447 },
  { date: "2003-03-31", ratePct: 2.394 },
  { date: "2003-04-01", ratePct: 2.373 },
  { date: "2003-04-02", ratePct: 2.395 },
  { date: "2003-04-03", ratePct: 2.391 },
  { date: "2003-04-04", ratePct: 2.409 },
  { date: "2003-04-07", ratePct: 2.455 },
  { date: "2003-04-08", ratePct: 2.443 },
  { date: "2003-04-09", ratePct: 2.419 },
  { date: "2003-04-10", ratePct: 2.403 },
  { date: "2003-04-11", ratePct: 2.433 },
  { date: "2003-04-14", ratePct: 2.508 },
  { date: "2003-04-15", ratePct: 2.542 },
  { date: "2003-04-16", ratePct: 2.539 },
  { date: "2003-04-17", ratePct: 2.505 },
  { date: "2003-04-22", ratePct: 2.491 },
  { date: "2003-04-23", ratePct: 2.48 },
  { date: "2003-04-24", ratePct: 2.461 },
  { date: "2003-04-25", ratePct: 2.435 },
  { date: "2003-04-28", ratePct: 2.409 },
  { date: "2003-04-29", ratePct: 2.425 },
  { date: "2003-04-30", ratePct: 2.423 },
  { date: "2003-05-02", ratePct: 2.355 },
  { date: "2003-05-05", ratePct: 2.383 },
  { date: "2003-05-06", ratePct: 2.362 },
  { date: "2003-05-07", ratePct: 2.326 },
  { date: "2003-05-08", ratePct: 2.303 },
  { date: "2003-05-09", ratePct: 2.346 },
  { date: "2003-05-12", ratePct: 2.305 },
  { date: "2003-05-13", ratePct: 2.31 },
  { date: "2003-05-14", ratePct: 2.276 },
  { date: "2003-05-15", ratePct: 2.264 },
  { date: "2003-05-16", ratePct: 2.255 },
  { date: "2003-05-19", ratePct: 2.207 },
  { date: "2003-05-20", ratePct: 2.222 },
  { date: "2003-05-21", ratePct: 2.197 },
  { date: "2003-05-22", ratePct: 2.201 },
  { date: "2003-05-23", ratePct: 2.186 },
  { date: "2003-05-26", ratePct: 2.168 },
  { date: "2003-05-27", ratePct: 2.138 },
  { date: "2003-05-28", ratePct: 2.17 },
  { date: "2003-05-29", ratePct: 2.178 },
  { date: "2003-05-30", ratePct: 2.142 },
  { date: "2003-06-02", ratePct: 2.151 },
  { date: "2003-06-03", ratePct: 2.122 },
  { date: "2003-06-04", ratePct: 2.081 },
  { date: "2003-06-05", ratePct: 2.077 },
  { date: "2003-06-06", ratePct: 2.009 },
  { date: "2003-06-09", ratePct: 2.016 },
  { date: "2003-06-10", ratePct: 2.007 },
  { date: "2003-06-11", ratePct: 1.959 },
  { date: "2003-06-12", ratePct: 1.959 },
  { date: "2003-06-13", ratePct: 1.944 },
  { date: "2003-06-16", ratePct: 1.929 },
  { date: "2003-06-17", ratePct: 1.965 },
  { date: "2003-06-18", ratePct: 1.991 },
  { date: "2003-06-19", ratePct: 1.987 },
  { date: "2003-06-20", ratePct: 1.976 },
  { date: "2003-06-23", ratePct: 1.993 },
  { date: "2003-06-24", ratePct: 1.989 },
  { date: "2003-06-25", ratePct: 1.975 },
  { date: "2003-06-26", ratePct: 2.024 },
  { date: "2003-06-27", ratePct: 2.073 },
  { date: "2003-06-30", ratePct: 2.06 },
  { date: "2003-07-01", ratePct: 2.021 },
  { date: "2003-07-02", ratePct: 2.035 },
  { date: "2003-07-03", ratePct: 2.047 },
  { date: "2003-07-04", ratePct: 2.037 },
  { date: "2003-07-07", ratePct: 2.036 },
  { date: "2003-07-08", ratePct: 2.057 },
  { date: "2003-07-09", ratePct: 2.042 },
  { date: "2003-07-10", ratePct: 2.047 },
  { date: "2003-07-11", ratePct: 2.047 },
  { date: "2003-07-14", ratePct: 2.044 },
  { date: "2003-07-15", ratePct: 2.051 },
  { date: "2003-07-16", ratePct: 2.115 },
  { date: "2003-07-17", ratePct: 2.098 },
  { date: "2003-07-18", ratePct: 2.104 },
  { date: "2003-07-21", ratePct: 2.115 },
  { date: "2003-07-22", ratePct: 2.124 },
  { date: "2003-07-23", ratePct: 2.108 },
  { date: "2003-07-24", ratePct: 2.08 },
  { date: "2003-07-25", ratePct: 2.101 },
  { date: "2003-07-28", ratePct: 2.098 },
  { date: "2003-07-29", ratePct: 2.106 },
  { date: "2003-07-30", ratePct: 2.125 },
  { date: "2003-07-31", ratePct: 2.112 },
  { date: "2003-08-01", ratePct: 2.232 },
  { date: "2003-08-04", ratePct: 2.279 },
  { date: "2003-08-05", ratePct: 2.263 },
  { date: "2003-08-06", ratePct: 2.269 },
  { date: "2003-08-07", ratePct: 2.25 },
  { date: "2003-08-08", ratePct: 2.218 },
  { date: "2003-08-11", ratePct: 2.225 },
  { date: "2003-08-12", ratePct: 2.244 },
  { date: "2003-08-13", ratePct: 2.253 },
  { date: "2003-08-14", ratePct: 2.273 },
  { date: "2003-08-15", ratePct: 2.278 },
  { date: "2003-08-18", ratePct: 2.28 },
  { date: "2003-08-19", ratePct: 2.305 },
  { date: "2003-08-20", ratePct: 2.269 },
  { date: "2003-08-21", ratePct: 2.3 },
  { date: "2003-08-22", ratePct: 2.305 },
  { date: "2003-08-25", ratePct: 2.307 },
  { date: "2003-08-26", ratePct: 2.321 },
  { date: "2003-08-27", ratePct: 2.328 },
  { date: "2003-08-28", ratePct: 2.337 },
  { date: "2003-08-29", ratePct: 2.315 },
  { date: "2003-09-01", ratePct: 2.314 },
  { date: "2003-09-02", ratePct: 2.356 },
  { date: "2003-09-03", ratePct: 2.384 },
  { date: "2003-09-04", ratePct: 2.369 },
  { date: "2003-09-05", ratePct: 2.339 },
  { date: "2003-09-08", ratePct: 2.29 },
  { date: "2003-09-09", ratePct: 2.289 },
  { date: "2003-09-10", ratePct: 2.276 },
  { date: "2003-09-11", ratePct: 2.269 },
  { date: "2003-09-12", ratePct: 2.3 },
  { date: "2003-09-15", ratePct: 2.261 },
  { date: "2003-09-16", ratePct: 2.258 },
  { date: "2003-09-17", ratePct: 2.256 },
  { date: "2003-09-18", ratePct: 2.247 },
  { date: "2003-09-19", ratePct: 2.241 },
  { date: "2003-09-22", ratePct: 2.189 },
  { date: "2003-09-23", ratePct: 2.185 },
  { date: "2003-09-24", ratePct: 2.203 },
  { date: "2003-09-25", ratePct: 2.174 },
  { date: "2003-09-26", ratePct: 2.172 },
  { date: "2003-09-29", ratePct: 2.165 },
  { date: "2003-09-30", ratePct: 2.13 },
  { date: "2003-10-01", ratePct: 2.117 },
  { date: "2003-10-02", ratePct: 2.132 },
  { date: "2003-10-03", ratePct: 2.213 },
  { date: "2003-10-06", ratePct: 2.267 },
  { date: "2003-10-07", ratePct: 2.239 },
  { date: "2003-10-08", ratePct: 2.246 },
  { date: "2003-10-09", ratePct: 2.235 },
  { date: "2003-10-10", ratePct: 2.278 },
  { date: "2003-10-13", ratePct: 2.283 },
  { date: "2003-10-14", ratePct: 2.31 },
  { date: "2003-10-15", ratePct: 2.308 },
  { date: "2003-10-16", ratePct: 2.338 },
  { date: "2003-10-17", ratePct: 2.372 },
  { date: "2003-10-20", ratePct: 2.376 },
  { date: "2003-10-21", ratePct: 2.362 },
  { date: "2003-10-22", ratePct: 2.349 },
  { date: "2003-10-23", ratePct: 2.305 },
  { date: "2003-10-24", ratePct: 2.354 },
  { date: "2003-10-27", ratePct: 2.369 },
  { date: "2003-10-28", ratePct: 2.384 },
  { date: "2003-10-29", ratePct: 2.354 },
  { date: "2003-10-30", ratePct: 2.381 },
  { date: "2003-10-31", ratePct: 2.386 },
  { date: "2003-11-03", ratePct: 2.391 },
  { date: "2003-11-04", ratePct: 2.413 },
  { date: "2003-11-05", ratePct: 2.419 },
  { date: "2003-11-06", ratePct: 2.437 },
  { date: "2003-11-07", ratePct: 2.459 },
  { date: "2003-11-10", ratePct: 2.483 },
  { date: "2003-11-11", ratePct: 2.474 },
  { date: "2003-11-12", ratePct: 2.48 },
  { date: "2003-11-13", ratePct: 2.463 },
  { date: "2003-11-14", ratePct: 2.401 },
  { date: "2003-11-17", ratePct: 2.345 },
  { date: "2003-11-18", ratePct: 2.371 },
  { date: "2003-11-19", ratePct: 2.316 },
  { date: "2003-11-20", ratePct: 2.329 },
  { date: "2003-11-21", ratePct: 2.337 },
  { date: "2003-11-24", ratePct: 2.355 },
  { date: "2003-11-25", ratePct: 2.402 },
  { date: "2003-11-26", ratePct: 2.407 },
  { date: "2003-11-27", ratePct: 2.455 },
  { date: "2003-11-28", ratePct: 2.47 },
  { date: "2003-12-01", ratePct: 2.503 },
  { date: "2003-12-02", ratePct: 2.503 },
  { date: "2003-12-03", ratePct: 2.483 },
  { date: "2003-12-04", ratePct: 2.488 },
  { date: "2003-12-05", ratePct: 2.444 },
  { date: "2003-12-08", ratePct: 2.385 },
  { date: "2003-12-09", ratePct: 2.382 },
  { date: "2003-12-10", ratePct: 2.41 },
  { date: "2003-12-11", ratePct: 2.415 },
  { date: "2003-12-12", ratePct: 2.373 },
  { date: "2003-12-15", ratePct: 2.371 },
  { date: "2003-12-16", ratePct: 2.353 },
  { date: "2003-12-17", ratePct: 2.349 },
  { date: "2003-12-18", ratePct: 2.312 },
  { date: "2003-12-19", ratePct: 2.322 },
  { date: "2003-12-22", ratePct: 2.326 },
  { date: "2003-12-23", ratePct: 2.327 },
  { date: "2003-12-24", ratePct: 2.33 },
  { date: "2003-12-29", ratePct: 2.304 },
  { date: "2003-12-30", ratePct: 2.311 },
  { date: "2003-12-31", ratePct: 2.305 },
  { date: "2004-01-02", ratePct: 2.275 },
  { date: "2004-01-05", ratePct: 2.302 },
  { date: "2004-01-06", ratePct: 2.285 },
  { date: "2004-01-07", ratePct: 2.269 },
  { date: "2004-01-08", ratePct: 2.258 },
  { date: "2004-01-09", ratePct: 2.237 },
  { date: "2004-01-12", ratePct: 2.17 },
  { date: "2004-01-13", ratePct: 2.189 },
  { date: "2004-01-14", ratePct: 2.194 },
  { date: "2004-01-15", ratePct: 2.202 },
  { date: "2004-01-16", ratePct: 2.19 },
  { date: "2004-01-19", ratePct: 2.207 },
  { date: "2004-01-20", ratePct: 2.201 },
  { date: "2004-01-21", ratePct: 2.168 },
  { date: "2004-01-22", ratePct: 2.175 },
  { date: "2004-01-23", ratePct: 2.159 },
  { date: "2004-01-26", ratePct: 2.173 },
  { date: "2004-01-27", ratePct: 2.203 },
  { date: "2004-01-28", ratePct: 2.183 },
  { date: "2004-01-29", ratePct: 2.239 },
  { date: "2004-01-30", ratePct: 2.263 },
  { date: "2004-02-02", ratePct: 2.251 },
  { date: "2004-02-03", ratePct: 2.218 },
  { date: "2004-02-04", ratePct: 2.203 },
  { date: "2004-02-05", ratePct: 2.205 },
  { date: "2004-02-06", ratePct: 2.212 },
  { date: "2004-02-09", ratePct: 2.163 },
  { date: "2004-02-10", ratePct: 2.149 },
  { date: "2004-02-11", ratePct: 2.187 },
  { date: "2004-02-12", ratePct: 2.15 },
  { date: "2004-02-13", ratePct: 2.147 },
  { date: "2004-02-16", ratePct: 2.149 },
  { date: "2004-02-17", ratePct: 2.138 },
  { date: "2004-02-18", ratePct: 2.113 },
  { date: "2004-02-19", ratePct: 2.149 },
  { date: "2004-02-20", ratePct: 2.159 },
  { date: "2004-02-23", ratePct: 2.186 },
  { date: "2004-02-24", ratePct: 2.157 },
  { date: "2004-02-25", ratePct: 2.138 },
  { date: "2004-02-26", ratePct: 2.101 },
  { date: "2004-02-27", ratePct: 2.086 },
  { date: "2004-03-01", ratePct: 2.092 },
  { date: "2004-03-02", ratePct: 2.119 },
  { date: "2004-03-03", ratePct: 2.157 },
  { date: "2004-03-04", ratePct: 2.151 },
  { date: "2004-03-05", ratePct: 2.156 },
  { date: "2004-03-08", ratePct: 2.072 },
  { date: "2004-03-09", ratePct: 2.079 },
  { date: "2004-03-10", ratePct: 2.084 },
  { date: "2004-03-11", ratePct: 2.091 },
  { date: "2004-03-12", ratePct: 2.068 },
  { date: "2004-03-15", ratePct: 2.076 },
  { date: "2004-03-16", ratePct: 2.078 },
  { date: "2004-03-17", ratePct: 2.07 },
  { date: "2004-03-18", ratePct: 2.042 },
  { date: "2004-03-19", ratePct: 2.04 },
  { date: "2004-03-22", ratePct: 2.025 },
  { date: "2004-03-23", ratePct: 2.027 },
  { date: "2004-03-24", ratePct: 2.019 },
  { date: "2004-03-25", ratePct: 1.963 },
  { date: "2004-03-26", ratePct: 1.947 },
  { date: "2004-03-29", ratePct: 1.96 },
  { date: "2004-03-30", ratePct: 1.967 },
  { date: "2004-03-31", ratePct: 1.983 },
  { date: "2004-04-01", ratePct: 1.978 },
  { date: "2004-04-02", ratePct: 2.07 },
  { date: "2004-04-05", ratePct: 2.161 },
  { date: "2004-04-06", ratePct: 2.133 },
  { date: "2004-04-07", ratePct: 2.113 },
  { date: "2004-04-08", ratePct: 2.119 },
  { date: "2004-04-13", ratePct: 2.143 },
  { date: "2004-04-14", ratePct: 2.165 },
  { date: "2004-04-15", ratePct: 2.172 },
  { date: "2004-04-16", ratePct: 2.171 },
  { date: "2004-04-19", ratePct: 2.154 },
  { date: "2004-04-20", ratePct: 2.177 },
  { date: "2004-04-21", ratePct: 2.201 },
  { date: "2004-04-22", ratePct: 2.189 },
  { date: "2004-04-23", ratePct: 2.169 },
  { date: "2004-04-26", ratePct: 2.226 },
  { date: "2004-04-27", ratePct: 2.209 },
  { date: "2004-04-28", ratePct: 2.214 },
  { date: "2004-04-29", ratePct: 2.25 },
  { date: "2004-04-30", ratePct: 2.239 },
  { date: "2004-05-03", ratePct: 2.23 },
  { date: "2004-05-04", ratePct: 2.223 },
  { date: "2004-05-05", ratePct: 2.21 },
  { date: "2004-05-06", ratePct: 2.222 },
  { date: "2004-05-07", ratePct: 2.274 },
  { date: "2004-05-10", ratePct: 2.313 },
  { date: "2004-05-11", ratePct: 2.319 },
  { date: "2004-05-12", ratePct: 2.309 },
  { date: "2004-05-13", ratePct: 2.335 },
  { date: "2004-05-14", ratePct: 2.356 },
  { date: "2004-05-17", ratePct: 2.292 },
  { date: "2004-05-18", ratePct: 2.308 },
  { date: "2004-05-19", ratePct: 2.321 },
  { date: "2004-05-20", ratePct: 2.333 },
  { date: "2004-05-21", ratePct: 2.313 },
  { date: "2004-05-24", ratePct: 2.344 },
  { date: "2004-05-25", ratePct: 2.323 },
  { date: "2004-05-26", ratePct: 2.324 },
  { date: "2004-05-27", ratePct: 2.304 },
  { date: "2004-05-28", ratePct: 2.286 },
  { date: "2004-05-31", ratePct: 2.307 },
  { date: "2004-06-01", ratePct: 2.332 },
  { date: "2004-06-02", ratePct: 2.337 },
  { date: "2004-06-03", ratePct: 2.366 },
  { date: "2004-06-04", ratePct: 2.361 },
  { date: "2004-06-07", ratePct: 2.363 },
  { date: "2004-06-08", ratePct: 2.351 },
  { date: "2004-06-09", ratePct: 2.352 },
  { date: "2004-06-10", ratePct: 2.386 },
  { date: "2004-06-11", ratePct: 2.426 },
  { date: "2004-06-14", ratePct: 2.471 },
  { date: "2004-06-15", ratePct: 2.479 },
  { date: "2004-06-16", ratePct: 2.404 },
  { date: "2004-06-17", ratePct: 2.463 },
  { date: "2004-06-18", ratePct: 2.445 },
  { date: "2004-06-21", ratePct: 2.448 },
  { date: "2004-06-22", ratePct: 2.438 },
  { date: "2004-06-23", ratePct: 2.439 },
  { date: "2004-06-24", ratePct: 2.413 },
  { date: "2004-06-25", ratePct: 2.384 },
  { date: "2004-06-28", ratePct: 2.387 },
  { date: "2004-06-29", ratePct: 2.426 },
  { date: "2004-06-30", ratePct: 2.426 },
  { date: "2004-07-01", ratePct: 2.387 },
  { date: "2004-07-02", ratePct: 2.366 },
  { date: "2004-07-05", ratePct: 2.339 },
  { date: "2004-07-06", ratePct: 2.335 },
  { date: "2004-07-07", ratePct: 2.343 },
  { date: "2004-07-08", ratePct: 2.33 },
  { date: "2004-07-09", ratePct: 2.331 },
  { date: "2004-07-12", ratePct: 2.332 },
  { date: "2004-07-13", ratePct: 2.348 },
  { date: "2004-07-14", ratePct: 2.348 },
  { date: "2004-07-15", ratePct: 2.357 },
  { date: "2004-07-16", ratePct: 2.36 },
  { date: "2004-07-19", ratePct: 2.321 },
  { date: "2004-07-20", ratePct: 2.32 },
  { date: "2004-07-21", ratePct: 2.365 },
  { date: "2004-07-22", ratePct: 2.378 },
  { date: "2004-07-23", ratePct: 2.38 },
  { date: "2004-07-26", ratePct: 2.382 },
  { date: "2004-07-27", ratePct: 2.404 },
  { date: "2004-07-28", ratePct: 2.418 },
  { date: "2004-07-29", ratePct: 2.412 },
  { date: "2004-07-30", ratePct: 2.387 },
  { date: "2004-08-02", ratePct: 2.353 },
  { date: "2004-08-03", ratePct: 2.363 },
  { date: "2004-08-04", ratePct: 2.348 },
  { date: "2004-08-05", ratePct: 2.344 },
  { date: "2004-08-06", ratePct: 2.322 },
  { date: "2004-08-09", ratePct: 2.28 },
  { date: "2004-08-10", ratePct: 2.284 },
  { date: "2004-08-11", ratePct: 2.298 },
  { date: "2004-08-12", ratePct: 2.295 },
  { date: "2004-08-13", ratePct: 2.276 },
  { date: "2004-08-16", ratePct: 2.268 },
  { date: "2004-08-17", ratePct: 2.282 },
  { date: "2004-08-18", ratePct: 2.272 },
  { date: "2004-08-19", ratePct: 2.285 },
  { date: "2004-08-20", ratePct: 2.27 },
  { date: "2004-08-23", ratePct: 2.285 },
  { date: "2004-08-24", ratePct: 2.315 },
  { date: "2004-08-25", ratePct: 2.308 },
  { date: "2004-08-26", ratePct: 2.306 },
  { date: "2004-08-27", ratePct: 2.29 },
  { date: "2004-08-30", ratePct: 2.304 },
  { date: "2004-08-31", ratePct: 2.296 },
  { date: "2004-09-01", ratePct: 2.275 },
  { date: "2004-09-02", ratePct: 2.284 },
  { date: "2004-09-03", ratePct: 2.347 },
  { date: "2004-09-06", ratePct: 2.399 },
  { date: "2004-09-07", ratePct: 2.388 },
  { date: "2004-09-08", ratePct: 2.427 },
  { date: "2004-09-09", ratePct: 2.395 },
  { date: "2004-09-10", ratePct: 2.384 },
  { date: "2004-09-13", ratePct: 2.405 },
  { date: "2004-09-14", ratePct: 2.394 },
  { date: "2004-09-15", ratePct: 2.388 },
  { date: "2004-09-16", ratePct: 2.404 },
  { date: "2004-09-17", ratePct: 2.372 },
  { date: "2004-09-20", ratePct: 2.385 },
  { date: "2004-09-21", ratePct: 2.388 },
  { date: "2004-09-22", ratePct: 2.387 },
  { date: "2004-09-23", ratePct: 2.37 },
  { date: "2004-09-24", ratePct: 2.377 },
  { date: "2004-09-27", ratePct: 2.379 },
  { date: "2004-09-28", ratePct: 2.37 },
  { date: "2004-09-29", ratePct: 2.385 },
  { date: "2004-09-30", ratePct: 2.392 },
  { date: "2004-10-01", ratePct: 2.372 },
  { date: "2004-10-04", ratePct: 2.377 },
  { date: "2004-10-05", ratePct: 2.385 },
  { date: "2004-10-06", ratePct: 2.378 },
  { date: "2004-10-07", ratePct: 2.388 },
  { date: "2004-10-08", ratePct: 2.355 },
  { date: "2004-10-11", ratePct: 2.324 },
  { date: "2004-10-12", ratePct: 2.314 },
  { date: "2004-10-13", ratePct: 2.317 },
  { date: "2004-10-14", ratePct: 2.301 },
  { date: "2004-10-15", ratePct: 2.3 },
  { date: "2004-10-18", ratePct: 2.282 },
  { date: "2004-10-19", ratePct: 2.29 },
  { date: "2004-10-20", ratePct: 2.273 },
  { date: "2004-10-21", ratePct: 2.272 },
  { date: "2004-10-22", ratePct: 2.285 },
  { date: "2004-10-25", ratePct: 2.265 },
  { date: "2004-10-26", ratePct: 2.265 },
  { date: "2004-10-27", ratePct: 2.28 },
  { date: "2004-10-28", ratePct: 2.308 },
  { date: "2004-10-29", ratePct: 2.307 },
  { date: "2004-11-01", ratePct: 2.3 },
  { date: "2004-11-02", ratePct: 2.314 },
  { date: "2004-11-03", ratePct: 2.338 },
  { date: "2004-11-04", ratePct: 2.317 },
  { date: "2004-11-05", ratePct: 2.323 },
  { date: "2004-11-08", ratePct: 2.386 },
  { date: "2004-11-09", ratePct: 2.38 },
  { date: "2004-11-10", ratePct: 2.366 },
  { date: "2004-11-11", ratePct: 2.347 },
  { date: "2004-11-12", ratePct: 2.314 },
  { date: "2004-11-15", ratePct: 2.305 },
  { date: "2004-11-16", ratePct: 2.329 },
  { date: "2004-11-17", ratePct: 2.333 },
  { date: "2004-11-18", ratePct: 2.327 },
  { date: "2004-11-19", ratePct: 2.346 },
  { date: "2004-11-22", ratePct: 2.339 },
  { date: "2004-11-23", ratePct: 2.34 },
  { date: "2004-11-24", ratePct: 2.324 },
  { date: "2004-11-25", ratePct: 2.303 },
  { date: "2004-11-26", ratePct: 2.296 },
  { date: "2004-11-29", ratePct: 2.294 },
  { date: "2004-11-30", ratePct: 2.302 },
  { date: "2004-12-01", ratePct: 2.278 },
  { date: "2004-12-02", ratePct: 2.265 },
  { date: "2004-12-03", ratePct: 2.326 },
  { date: "2004-12-06", ratePct: 2.261 },
  { date: "2004-12-07", ratePct: 2.254 },
  { date: "2004-12-08", ratePct: 2.261 },
  { date: "2004-12-09", ratePct: 2.26 },
  { date: "2004-12-10", ratePct: 2.269 },
  { date: "2004-12-13", ratePct: 2.266 },
  { date: "2004-12-14", ratePct: 2.263 },
  { date: "2004-12-15", ratePct: 2.264 },
  { date: "2004-12-16", ratePct: 2.266 },
  { date: "2004-12-17", ratePct: 2.307 },
  { date: "2004-12-20", ratePct: 2.312 },
  { date: "2004-12-21", ratePct: 2.315 },
  { date: "2004-12-22", ratePct: 2.344 },
  { date: "2004-12-23", ratePct: 2.34 },
  { date: "2004-12-24", ratePct: 2.33 },
  { date: "2004-12-27", ratePct: 2.326 },
  { date: "2004-12-28", ratePct: 2.334 },
  { date: "2004-12-29", ratePct: 2.366 },
  { date: "2004-12-30", ratePct: 2.361 },
  { date: "2004-12-31", ratePct: 2.356 },
  { date: "2005-01-03", ratePct: 2.343 },
  { date: "2005-01-04", ratePct: 2.351 },
  { date: "2005-01-05", ratePct: 2.362 },
  { date: "2005-01-06", ratePct: 2.356 },
  { date: "2005-01-07", ratePct: 2.315 },
  { date: "2005-01-10", ratePct: 2.326 },
  { date: "2005-01-11", ratePct: 2.31 },
  { date: "2005-01-12", ratePct: 2.326 },
  { date: "2005-01-13", ratePct: 2.329 },
  { date: "2005-01-14", ratePct: 2.296 },
  { date: "2005-01-17", ratePct: 2.288 },
  { date: "2005-01-18", ratePct: 2.295 },
  { date: "2005-01-19", ratePct: 2.288 },
  { date: "2005-01-20", ratePct: 2.297 },
  { date: "2005-01-21", ratePct: 2.306 },
  { date: "2005-01-24", ratePct: 2.287 },
  { date: "2005-01-25", ratePct: 2.287 },
  { date: "2005-01-26", ratePct: 2.29 },
  { date: "2005-01-27", ratePct: 2.31 },
  { date: "2005-01-28", ratePct: 2.305 },
  { date: "2005-01-31", ratePct: 2.287 },
  { date: "2005-02-01", ratePct: 2.288 },
  { date: "2005-02-02", ratePct: 2.285 },
  { date: "2005-02-03", ratePct: 2.315 },
  { date: "2005-02-04", ratePct: 2.315 },
  { date: "2005-02-07", ratePct: 2.304 },
  { date: "2005-02-08", ratePct: 2.315 },
  { date: "2005-02-09", ratePct: 2.301 },
  { date: "2005-02-10", ratePct: 2.284 },
  { date: "2005-02-11", ratePct: 2.281 },
  { date: "2005-02-14", ratePct: 2.287 },
  { date: "2005-02-15", ratePct: 2.3 },
  { date: "2005-02-16", ratePct: 2.301 },
  { date: "2005-02-17", ratePct: 2.315 },
  { date: "2005-02-18", ratePct: 2.308 },
  { date: "2005-02-21", ratePct: 2.333 },
  { date: "2005-02-22", ratePct: 2.326 },
  { date: "2005-02-23", ratePct: 2.331 },
  { date: "2005-02-24", ratePct: 2.335 },
  { date: "2005-02-25", ratePct: 2.341 },
  { date: "2005-02-28", ratePct: 2.335 },
  { date: "2005-03-01", ratePct: 2.344 },
  { date: "2005-03-02", ratePct: 2.337 },
  { date: "2005-03-03", ratePct: 2.336 },
  { date: "2005-03-04", ratePct: 2.323 },
  { date: "2005-03-07", ratePct: 2.293 },
  { date: "2005-03-08", ratePct: 2.285 },
  { date: "2005-03-09", ratePct: 2.284 },
  { date: "2005-03-10", ratePct: 2.306 },
  { date: "2005-03-11", ratePct: 2.306 },
  { date: "2005-03-14", ratePct: 2.308 },
  { date: "2005-03-15", ratePct: 2.308 },
  { date: "2005-03-16", ratePct: 2.305 },
  { date: "2005-03-17", ratePct: 2.328 },
  { date: "2005-03-18", ratePct: 2.334 },
  { date: "2005-03-21", ratePct: 2.356 },
  { date: "2005-03-22", ratePct: 2.363 },
  { date: "2005-03-23", ratePct: 2.395 },
  { date: "2005-03-24", ratePct: 2.384 },
  { date: "2005-03-29", ratePct: 2.393 },
  { date: "2005-03-30", ratePct: 2.383 },
  { date: "2005-03-31", ratePct: 2.359 },
  { date: "2005-04-01", ratePct: 2.335 },
  { date: "2005-04-04", ratePct: 2.322 },
  { date: "2005-04-05", ratePct: 2.327 },
  { date: "2005-04-06", ratePct: 2.319 },
  { date: "2005-04-07", ratePct: 2.311 },
  { date: "2005-04-08", ratePct: 2.299 },
  { date: "2005-04-11", ratePct: 2.286 },
  { date: "2005-04-12", ratePct: 2.284 },
  { date: "2005-04-13", ratePct: 2.279 },
  { date: "2005-04-14", ratePct: 2.272 },
  { date: "2005-04-15", ratePct: 2.252 },
  { date: "2005-04-18", ratePct: 2.231 },
  { date: "2005-04-19", ratePct: 2.246 },
  { date: "2005-04-20", ratePct: 2.239 },
  { date: "2005-04-21", ratePct: 2.231 },
  { date: "2005-04-22", ratePct: 2.236 },
  { date: "2005-04-25", ratePct: 2.226 },
  { date: "2005-04-26", ratePct: 2.227 },
  { date: "2005-04-27", ratePct: 2.229 },
  { date: "2005-04-28", ratePct: 2.211 },
  { date: "2005-04-29", ratePct: 2.205 },
  { date: "2005-05-02", ratePct: 2.202 },
  { date: "2005-05-03", ratePct: 2.197 },
  { date: "2005-05-04", ratePct: 2.184 },
  { date: "2005-05-05", ratePct: 2.193 },
  { date: "2005-05-06", ratePct: 2.186 },
  { date: "2005-05-09", ratePct: 2.204 },
  { date: "2005-05-10", ratePct: 2.192 },
  { date: "2005-05-11", ratePct: 2.184 },
  { date: "2005-05-12", ratePct: 2.194 },
  { date: "2005-05-13", ratePct: 2.193 },
  { date: "2005-05-16", ratePct: 2.2 },
  { date: "2005-05-17", ratePct: 2.201 },
  { date: "2005-05-18", ratePct: 2.2 },
  { date: "2005-05-19", ratePct: 2.199 },
  { date: "2005-05-20", ratePct: 2.212 },
  { date: "2005-05-23", ratePct: 2.229 },
  { date: "2005-05-24", ratePct: 2.204 },
  { date: "2005-05-25", ratePct: 2.184 },
  { date: "2005-05-26", ratePct: 2.174 },
  { date: "2005-05-27", ratePct: 2.174 },
  { date: "2005-05-30", ratePct: 2.173 },
  { date: "2005-05-31", ratePct: 2.173 },
  { date: "2005-06-01", ratePct: 2.14 },
  { date: "2005-06-02", ratePct: 2.123 },
  { date: "2005-06-03", ratePct: 2.126 },
  { date: "2005-06-06", ratePct: 2.125 },
  { date: "2005-06-07", ratePct: 2.121 },
  { date: "2005-06-08", ratePct: 2.101 },
  { date: "2005-06-09", ratePct: 2.104 },
  { date: "2005-06-10", ratePct: 2.104 },
  { date: "2005-06-13", ratePct: 2.101 },
  { date: "2005-06-14", ratePct: 2.105 },
  { date: "2005-06-15", ratePct: 2.11 },
  { date: "2005-06-16", ratePct: 2.153 },
  { date: "2005-06-17", ratePct: 2.136 },
  { date: "2005-06-20", ratePct: 2.137 },
  { date: "2005-06-21", ratePct: 2.092 },
  { date: "2005-06-22", ratePct: 2.065 },
  { date: "2005-06-23", ratePct: 2.057 },
  { date: "2005-06-24", ratePct: 2.059 },
  { date: "2005-06-27", ratePct: 2.068 },
  { date: "2005-06-28", ratePct: 2.068 },
  { date: "2005-06-29", ratePct: 2.085 },
  { date: "2005-06-30", ratePct: 2.082 },
  { date: "2005-07-01", ratePct: 2.091 },
  { date: "2005-07-04", ratePct: 2.121 },
  { date: "2005-07-05", ratePct: 2.145 },
  { date: "2005-07-06", ratePct: 2.145 },
  { date: "2005-07-07", ratePct: 2.142 },
  { date: "2005-07-08", ratePct: 2.14 },
  { date: "2005-07-11", ratePct: 2.152 },
  { date: "2005-07-12", ratePct: 2.164 },
  { date: "2005-07-13", ratePct: 2.174 },
  { date: "2005-07-14", ratePct: 2.177 },
  { date: "2005-07-15", ratePct: 2.192 },
  { date: "2005-07-18", ratePct: 2.185 },
  { date: "2005-07-19", ratePct: 2.193 },
  { date: "2005-07-20", ratePct: 2.192 },
  { date: "2005-07-21", ratePct: 2.185 },
  { date: "2005-07-22", ratePct: 2.187 },
  { date: "2005-07-25", ratePct: 2.183 },
  { date: "2005-07-26", ratePct: 2.185 },
  { date: "2005-07-27", ratePct: 2.187 },
  { date: "2005-07-28", ratePct: 2.193 },
  { date: "2005-07-29", ratePct: 2.195 },
  { date: "2005-08-01", ratePct: 2.221 },
  { date: "2005-08-02", ratePct: 2.222 },
  { date: "2005-08-03", ratePct: 2.236 },
  { date: "2005-08-04", ratePct: 2.233 },
  { date: "2005-08-05", ratePct: 2.241 },
  { date: "2005-08-08", ratePct: 2.255 },
  { date: "2005-08-09", ratePct: 2.262 },
  { date: "2005-08-10", ratePct: 2.258 },
  { date: "2005-08-11", ratePct: 2.263 },
  { date: "2005-08-12", ratePct: 2.24 },
  { date: "2005-08-15", ratePct: 2.228 },
  { date: "2005-08-16", ratePct: 2.226 },
  { date: "2005-08-17", ratePct: 2.205 },
  { date: "2005-08-18", ratePct: 2.196 },
  { date: "2005-08-19", ratePct: 2.188 },
  { date: "2005-08-22", ratePct: 2.194 },
  { date: "2005-08-23", ratePct: 2.193 },
  { date: "2005-08-24", ratePct: 2.204 },
  { date: "2005-08-25", ratePct: 2.214 },
  { date: "2005-08-26", ratePct: 2.205 },
  { date: "2005-08-29", ratePct: 2.209 },
  { date: "2005-08-30", ratePct: 2.224 },
  { date: "2005-08-31", ratePct: 2.209 },
  { date: "2005-09-01", ratePct: 2.197 },
  { date: "2005-09-02", ratePct: 2.154 },
  { date: "2005-09-05", ratePct: 2.154 },
  { date: "2005-09-06", ratePct: 2.174 },
  { date: "2005-09-07", ratePct: 2.178 },
  { date: "2005-09-08", ratePct: 2.179 },
  { date: "2005-09-09", ratePct: 2.188 },
  { date: "2005-09-12", ratePct: 2.204 },
  { date: "2005-09-13", ratePct: 2.223 },
  { date: "2005-09-14", ratePct: 2.218 },
  { date: "2005-09-15", ratePct: 2.231 },
  { date: "2005-09-16", ratePct: 2.234 },
  { date: "2005-09-19", ratePct: 2.229 },
  { date: "2005-09-20", ratePct: 2.221 },
  { date: "2005-09-21", ratePct: 2.221 },
  { date: "2005-09-22", ratePct: 2.205 },
  { date: "2005-09-23", ratePct: 2.216 },
  { date: "2005-09-26", ratePct: 2.256 },
  { date: "2005-09-27", ratePct: 2.266 },
  { date: "2005-09-28", ratePct: 2.276 },
  { date: "2005-09-29", ratePct: 2.283 },
  { date: "2005-09-30", ratePct: 2.322 },
  { date: "2005-10-03", ratePct: 2.334 },
  { date: "2005-10-04", ratePct: 2.338 },
  { date: "2005-10-05", ratePct: 2.334 },
  { date: "2005-10-06", ratePct: 2.337 },
  { date: "2005-10-07", ratePct: 2.384 },
  { date: "2005-10-10", ratePct: 2.379 },
  { date: "2005-10-11", ratePct: 2.39 },
  { date: "2005-10-12", ratePct: 2.386 },
  { date: "2005-10-13", ratePct: 2.385 },
  { date: "2005-10-14", ratePct: 2.385 },
  { date: "2005-10-17", ratePct: 2.409 },
  { date: "2005-10-18", ratePct: 2.424 },
  { date: "2005-10-19", ratePct: 2.416 },
  { date: "2005-10-20", ratePct: 2.415 },
  { date: "2005-10-21", ratePct: 2.428 },
  { date: "2005-10-24", ratePct: 2.421 },
  { date: "2005-10-25", ratePct: 2.432 },
  { date: "2005-10-26", ratePct: 2.489 },
  { date: "2005-10-27", ratePct: 2.505 },
  { date: "2005-10-28", ratePct: 2.542 },
  { date: "2005-10-31", ratePct: 2.552 },
  { date: "2005-11-01", ratePct: 2.551 },
  { date: "2005-11-02", ratePct: 2.57 },
  { date: "2005-11-03", ratePct: 2.6 },
  { date: "2005-11-04", ratePct: 2.605 },
  { date: "2005-11-07", ratePct: 2.639 },
  { date: "2005-11-08", ratePct: 2.683 },
  { date: "2005-11-09", ratePct: 2.652 },
  { date: "2005-11-10", ratePct: 2.683 },
  { date: "2005-11-11", ratePct: 2.675 },
  { date: "2005-11-14", ratePct: 2.674 },
  { date: "2005-11-15", ratePct: 2.703 },
  { date: "2005-11-16", ratePct: 2.684 },
  { date: "2005-11-17", ratePct: 2.668 },
  { date: "2005-11-18", ratePct: 2.681 },
  { date: "2005-11-21", ratePct: 2.783 },
  { date: "2005-11-22", ratePct: 2.76 },
  { date: "2005-11-23", ratePct: 2.745 },
  { date: "2005-11-24", ratePct: 2.734 },
  { date: "2005-11-25", ratePct: 2.712 },
  { date: "2005-11-28", ratePct: 2.744 },
  { date: "2005-11-29", ratePct: 2.745 },
  { date: "2005-11-30", ratePct: 2.765 },
  { date: "2005-12-01", ratePct: 2.756 },
  { date: "2005-12-02", ratePct: 2.704 },
  { date: "2005-12-05", ratePct: 2.713 },
  { date: "2005-12-06", ratePct: 2.714 },
  { date: "2005-12-07", ratePct: 2.708 },
  { date: "2005-12-08", ratePct: 2.709 },
  { date: "2005-12-09", ratePct: 2.746 },
  { date: "2005-12-12", ratePct: 2.768 },
  { date: "2005-12-13", ratePct: 2.769 },
  { date: "2005-12-14", ratePct: 2.777 },
  { date: "2005-12-15", ratePct: 2.786 },
  { date: "2005-12-16", ratePct: 2.794 },
  { date: "2005-12-19", ratePct: 2.796 },
  { date: "2005-12-20", ratePct: 2.815 },
  { date: "2005-12-21", ratePct: 2.833 },
  { date: "2005-12-22", ratePct: 2.852 },
  { date: "2005-12-23", ratePct: 2.843 },
  { date: "2005-12-27", ratePct: 2.845 },
  { date: "2005-12-28", ratePct: 2.841 },
  { date: "2005-12-29", ratePct: 2.836 },
  { date: "2005-12-30", ratePct: 2.844 },
  { date: "2006-01-02", ratePct: 2.855 },
  { date: "2006-01-03", ratePct: 2.861 },
  { date: "2006-01-04", ratePct: 2.829 },
  { date: "2006-01-05", ratePct: 2.79 },
  { date: "2006-01-06", ratePct: 2.773 },
  { date: "2006-01-09", ratePct: 2.771 },
  { date: "2006-01-10", ratePct: 2.806 },
  { date: "2006-01-11", ratePct: 2.832 },
  { date: "2006-01-12", ratePct: 2.847 },
  { date: "2006-01-13", ratePct: 2.818 },
  { date: "2006-01-16", ratePct: 2.816 },
  { date: "2006-01-17", ratePct: 2.805 },
  { date: "2006-01-18", ratePct: 2.782 },
  { date: "2006-01-19", ratePct: 2.83 },
  { date: "2006-01-20", ratePct: 2.839 },
  { date: "2006-01-23", ratePct: 2.838 },
  { date: "2006-01-24", ratePct: 2.853 },
  { date: "2006-01-25", ratePct: 2.864 },
  { date: "2006-01-26", ratePct: 2.86 },
  { date: "2006-01-27", ratePct: 2.874 },
  { date: "2006-01-30", ratePct: 2.89 },
  { date: "2006-01-31", ratePct: 2.903 },
  { date: "2006-02-01", ratePct: 2.9 },
  { date: "2006-02-02", ratePct: 2.916 },
  { date: "2006-02-03", ratePct: 2.914 },
  { date: "2006-02-06", ratePct: 2.909 },
  { date: "2006-02-07", ratePct: 2.908 },
  { date: "2006-02-08", ratePct: 2.906 },
  { date: "2006-02-09", ratePct: 2.913 },
  { date: "2006-02-10", ratePct: 2.901 },
  { date: "2006-02-13", ratePct: 2.907 },
  { date: "2006-02-14", ratePct: 2.899 },
  { date: "2006-02-15", ratePct: 2.897 },
  { date: "2006-02-16", ratePct: 2.905 },
  { date: "2006-02-17", ratePct: 2.895 },
  { date: "2006-02-20", ratePct: 2.88 },
  { date: "2006-02-21", ratePct: 2.881 },
  { date: "2006-02-22", ratePct: 2.912 },
  { date: "2006-02-23", ratePct: 2.938 },
  { date: "2006-02-24", ratePct: 2.956 },
  { date: "2006-02-27", ratePct: 2.965 },
  { date: "2006-02-28", ratePct: 2.981 },
  { date: "2006-03-01", ratePct: 2.991 },
  { date: "2006-03-02", ratePct: 2.995 },
  { date: "2006-03-03", ratePct: 3.045 },
  { date: "2006-03-06", ratePct: 3.048 },
  { date: "2006-03-07", ratePct: 3.061 },
  { date: "2006-03-08", ratePct: 3.056 },
  { date: "2006-03-09", ratePct: 3.065 },
  { date: "2006-03-10", ratePct: 3.07 },
  { date: "2006-03-13", ratePct: 3.085 },
  { date: "2006-03-14", ratePct: 3.092 },
  { date: "2006-03-15", ratePct: 3.087 },
  { date: "2006-03-16", ratePct: 3.093 },
  { date: "2006-03-17", ratePct: 3.095 },
  { date: "2006-03-20", ratePct: 3.134 },
  { date: "2006-03-21", ratePct: 3.138 },
  { date: "2006-03-22", ratePct: 3.137 },
  { date: "2006-03-23", ratePct: 3.129 },
  { date: "2006-03-24", ratePct: 3.135 },
  { date: "2006-03-27", ratePct: 3.119 },
  { date: "2006-03-28", ratePct: 3.171 },
  { date: "2006-03-29", ratePct: 3.215 },
  { date: "2006-03-30", ratePct: 3.229 },
  { date: "2006-03-31", ratePct: 3.233 },
  { date: "2006-04-03", ratePct: 3.254 },
  { date: "2006-04-04", ratePct: 3.264 },
  { date: "2006-04-05", ratePct: 3.26 },
  { date: "2006-04-06", ratePct: 3.26 },
  { date: "2006-04-07", ratePct: 3.159 },
  { date: "2006-04-10", ratePct: 3.171 },
  { date: "2006-04-11", ratePct: 3.171 },
  { date: "2006-04-12", ratePct: 3.173 },
  { date: "2006-04-13", ratePct: 3.185 },
  { date: "2006-04-18", ratePct: 3.194 },
  { date: "2006-04-19", ratePct: 3.185 },
  { date: "2006-04-20", ratePct: 3.2 },
  { date: "2006-04-21", ratePct: 3.198 },
  { date: "2006-04-24", ratePct: 3.19 },
  { date: "2006-04-25", ratePct: 3.221 },
  { date: "2006-04-26", ratePct: 3.277 },
  { date: "2006-04-27", ratePct: 3.306 },
  { date: "2006-04-28", ratePct: 3.318 },
  { date: "2006-05-02", ratePct: 3.314 },
  { date: "2006-05-03", ratePct: 3.317 },
  { date: "2006-05-04", ratePct: 3.301 },
  { date: "2006-05-05", ratePct: 3.321 },
  { date: "2006-05-08", ratePct: 3.313 },
  { date: "2006-05-09", ratePct: 3.332 },
  { date: "2006-05-10", ratePct: 3.352 },
  { date: "2006-05-11", ratePct: 3.344 },
  { date: "2006-05-12", ratePct: 3.364 },
  { date: "2006-05-15", ratePct: 3.319 },
  { date: "2006-05-16", ratePct: 3.301 },
  { date: "2006-05-17", ratePct: 3.293 },
  { date: "2006-05-18", ratePct: 3.3 },
  { date: "2006-05-19", ratePct: 3.304 },
  { date: "2006-05-22", ratePct: 3.284 },
  { date: "2006-05-23", ratePct: 3.285 },
  { date: "2006-05-24", ratePct: 3.288 },
  { date: "2006-05-25", ratePct: 3.272 },
  { date: "2006-05-26", ratePct: 3.278 },
  { date: "2006-05-29", ratePct: 3.286 },
  { date: "2006-05-30", ratePct: 3.291 },
  { date: "2006-05-31", ratePct: 3.313 },
  { date: "2006-06-01", ratePct: 3.369 },
  { date: "2006-06-02", ratePct: 3.368 },
  { date: "2006-06-05", ratePct: 3.357 },
  { date: "2006-06-06", ratePct: 3.396 },
  { date: "2006-06-07", ratePct: 3.397 },
  { date: "2006-06-08", ratePct: 3.386 },
  { date: "2006-06-09", ratePct: 3.336 },
  { date: "2006-06-12", ratePct: 3.326 },
  { date: "2006-06-13", ratePct: 3.294 },
  { date: "2006-06-14", ratePct: 3.324 },
  { date: "2006-06-15", ratePct: 3.349 },
  { date: "2006-06-16", ratePct: 3.354 },
  { date: "2006-06-19", ratePct: 3.37 },
  { date: "2006-06-20", ratePct: 3.377 },
  { date: "2006-06-21", ratePct: 3.416 },
  { date: "2006-06-22", ratePct: 3.427 },
  { date: "2006-06-23", ratePct: 3.437 },
  { date: "2006-06-26", ratePct: 3.458 },
  { date: "2006-06-27", ratePct: 3.52 },
  { date: "2006-06-28", ratePct: 3.521 },
  { date: "2006-06-29", ratePct: 3.518 },
  { date: "2006-06-30", ratePct: 3.512 },
  { date: "2006-07-03", ratePct: 3.507 },
  { date: "2006-07-04", ratePct: 3.506 },
  { date: "2006-07-05", ratePct: 3.532 },
  { date: "2006-07-06", ratePct: 3.542 },
  { date: "2006-07-07", ratePct: 3.559 },
  { date: "2006-07-10", ratePct: 3.561 },
  { date: "2006-07-11", ratePct: 3.552 },
  { date: "2006-07-12", ratePct: 3.564 },
  { date: "2006-07-13", ratePct: 3.551 },
  { date: "2006-07-14", ratePct: 3.525 },
  { date: "2006-07-17", ratePct: 3.511 },
  { date: "2006-07-18", ratePct: 3.526 },
  { date: "2006-07-19", ratePct: 3.555 },
  { date: "2006-07-20", ratePct: 3.551 },
  { date: "2006-07-21", ratePct: 3.531 },
  { date: "2006-07-24", ratePct: 3.537 },
  { date: "2006-07-25", ratePct: 3.525 },
  { date: "2006-07-26", ratePct: 3.544 },
  { date: "2006-07-27", ratePct: 3.535 },
  { date: "2006-07-28", ratePct: 3.551 },
  { date: "2006-07-31", ratePct: 3.546 },
  { date: "2006-08-01", ratePct: 3.542 },
  { date: "2006-08-02", ratePct: 3.534 },
  { date: "2006-08-03", ratePct: 3.546 },
  { date: "2006-08-04", ratePct: 3.603 },
  { date: "2006-08-07", ratePct: 3.589 },
  { date: "2006-08-08", ratePct: 3.589 },
  { date: "2006-08-09", ratePct: 3.599 },
  { date: "2006-08-10", ratePct: 3.588 },
  { date: "2006-08-11", ratePct: 3.619 },
  { date: "2006-08-14", ratePct: 3.651 },
  { date: "2006-08-15", ratePct: 3.657 },
  { date: "2006-08-16", ratePct: 3.657 },
  { date: "2006-08-17", ratePct: 3.659 },
  { date: "2006-08-18", ratePct: 3.675 },
  { date: "2006-08-21", ratePct: 3.657 },
  { date: "2006-08-22", ratePct: 3.657 },
  { date: "2006-08-23", ratePct: 3.608 },
  { date: "2006-08-24", ratePct: 3.633 },
  { date: "2006-08-25", ratePct: 3.611 },
  { date: "2006-08-28", ratePct: 3.605 },
  { date: "2006-08-29", ratePct: 3.624 },
  { date: "2006-08-30", ratePct: 3.62 },
  { date: "2006-08-31", ratePct: 3.625 },
  { date: "2006-09-01", ratePct: 3.636 },
  { date: "2006-09-04", ratePct: 3.649 },
  { date: "2006-09-05", ratePct: 3.661 },
  { date: "2006-09-06", ratePct: 3.685 },
  { date: "2006-09-07", ratePct: 3.704 },
  { date: "2006-09-08", ratePct: 3.703 },
  { date: "2006-09-11", ratePct: 3.73 },
  { date: "2006-09-12", ratePct: 3.755 },
  { date: "2006-09-13", ratePct: 3.746 },
  { date: "2006-09-14", ratePct: 3.751 },
  { date: "2006-09-15", ratePct: 3.758 },
  { date: "2006-09-18", ratePct: 3.756 },
  { date: "2006-09-19", ratePct: 3.765 },
  { date: "2006-09-20", ratePct: 3.751 },
  { date: "2006-09-21", ratePct: 3.763 },
  { date: "2006-09-22", ratePct: 3.725 },
  { date: "2006-09-25", ratePct: 3.671 },
  { date: "2006-09-26", ratePct: 3.676 },
  { date: "2006-09-27", ratePct: 3.706 },
  { date: "2006-09-28", ratePct: 3.715 },
  { date: "2006-09-29", ratePct: 3.716 },
  { date: "2006-10-02", ratePct: 3.748 },
  { date: "2006-10-03", ratePct: 3.735 },
  { date: "2006-10-04", ratePct: 3.757 },
  { date: "2006-10-05", ratePct: 3.745 },
  { date: "2006-10-06", ratePct: 3.725 },
  { date: "2006-10-09", ratePct: 3.762 },
  { date: "2006-10-10", ratePct: 3.772 },
  { date: "2006-10-11", ratePct: 3.793 },
  { date: "2006-10-12", ratePct: 3.812 },
  { date: "2006-10-13", ratePct: 3.794 },
  { date: "2006-10-16", ratePct: 3.801 },
  { date: "2006-10-17", ratePct: 3.796 },
  { date: "2006-10-18", ratePct: 3.801 },
  { date: "2006-10-19", ratePct: 3.787 },
  { date: "2006-10-20", ratePct: 3.795 },
  { date: "2006-10-23", ratePct: 3.825 },
  { date: "2006-10-24", ratePct: 3.835 },
  { date: "2006-10-25", ratePct: 3.855 },
  { date: "2006-10-26", ratePct: 3.861 },
  { date: "2006-10-27", ratePct: 3.866 },
  { date: "2006-10-30", ratePct: 3.856 },
  { date: "2006-10-31", ratePct: 3.861 },
  { date: "2006-11-01", ratePct: 3.832 },
  { date: "2006-11-02", ratePct: 3.828 },
  { date: "2006-11-03", ratePct: 3.84 },
  { date: "2006-11-06", ratePct: 3.879 },
  { date: "2006-11-07", ratePct: 3.881 },
  { date: "2006-11-08", ratePct: 3.878 },
  { date: "2006-11-09", ratePct: 3.909 },
  { date: "2006-11-10", ratePct: 3.877 },
  { date: "2006-11-13", ratePct: 3.857 },
  { date: "2006-11-14", ratePct: 3.885 },
  { date: "2006-11-15", ratePct: 3.875 },
  { date: "2006-11-16", ratePct: 3.884 },
  { date: "2006-11-17", ratePct: 3.894 },
  { date: "2006-11-20", ratePct: 3.851 },
  { date: "2006-11-21", ratePct: 3.841 },
  { date: "2006-11-22", ratePct: 3.854 },
  { date: "2006-11-23", ratePct: 3.87 },
  { date: "2006-11-24", ratePct: 3.859 },
  { date: "2006-11-27", ratePct: 3.859 },
  { date: "2006-11-28", ratePct: 3.845 },
  { date: "2006-11-29", ratePct: 3.844 },
  { date: "2006-11-30", ratePct: 3.859 },
  { date: "2006-12-01", ratePct: 3.851 },
  { date: "2006-12-04", ratePct: 3.804 },
  { date: "2006-12-05", ratePct: 3.816 },
  { date: "2006-12-06", ratePct: 3.832 },
  { date: "2006-12-07", ratePct: 3.841 },
  { date: "2006-12-08", ratePct: 3.884 },
  { date: "2006-12-11", ratePct: 3.897 },
  { date: "2006-12-12", ratePct: 3.9 },
  { date: "2006-12-13", ratePct: 3.901 },
  { date: "2006-12-14", ratePct: 3.924 },
  { date: "2006-12-15", ratePct: 3.939 },
  { date: "2006-12-18", ratePct: 3.942 },
  { date: "2006-12-19", ratePct: 3.962 },
  { date: "2006-12-20", ratePct: 3.971 },
  { date: "2006-12-21", ratePct: 3.989 },
  { date: "2006-12-22", ratePct: 3.991 },
  { date: "2006-12-27", ratePct: 4.003 },
  { date: "2006-12-28", ratePct: 4.022 },
  { date: "2006-12-29", ratePct: 4.028 },
  { date: "2007-01-02", ratePct: 4.03 },
  { date: "2007-01-03", ratePct: 4.029 },
  { date: "2007-01-04", ratePct: 4.03 },
  { date: "2007-01-05", ratePct: 4.024 },
  { date: "2007-01-08", ratePct: 4.047 },
  { date: "2007-01-09", ratePct: 4.051 },
  { date: "2007-01-10", ratePct: 4.063 },
  { date: "2007-01-11", ratePct: 4.078 },
  { date: "2007-01-12", ratePct: 4.052 },
  { date: "2007-01-15", ratePct: 4.062 },
  { date: "2007-01-16", ratePct: 4.062 },
  { date: "2007-01-17", ratePct: 4.058 },
  { date: "2007-01-18", ratePct: 4.075 },
  { date: "2007-01-19", ratePct: 4.072 },
  { date: "2007-01-22", ratePct: 4.08 },
  { date: "2007-01-23", ratePct: 4.074 },
  { date: "2007-01-24", ratePct: 4.076 },
  { date: "2007-01-25", ratePct: 4.079 },
  { date: "2007-01-26", ratePct: 4.09 },
  { date: "2007-01-29", ratePct: 4.092 },
  { date: "2007-01-30", ratePct: 4.096 },
  { date: "2007-01-31", ratePct: 4.097 },
  { date: "2007-02-01", ratePct: 4.08 },
  { date: "2007-02-02", ratePct: 4.089 },
  { date: "2007-02-05", ratePct: 4.054 },
  { date: "2007-02-06", ratePct: 4.056 },
  { date: "2007-02-07", ratePct: 4.065 },
  { date: "2007-02-08", ratePct: 4.078 },
  { date: "2007-02-09", ratePct: 4.1 },
  { date: "2007-02-12", ratePct: 4.093 },
  { date: "2007-02-13", ratePct: 4.099 },
  { date: "2007-02-14", ratePct: 4.107 },
  { date: "2007-02-15", ratePct: 4.101 },
  { date: "2007-02-16", ratePct: 4.089 },
  { date: "2007-02-19", ratePct: 4.115 },
  { date: "2007-02-20", ratePct: 4.122 },
  { date: "2007-02-21", ratePct: 4.112 },
  { date: "2007-02-22", ratePct: 4.116 },
  { date: "2007-02-23", ratePct: 4.123 },
  { date: "2007-02-26", ratePct: 4.111 },
  { date: "2007-02-27", ratePct: 4.103 },
  { date: "2007-02-28", ratePct: 4.058 },
  { date: "2007-03-01", ratePct: 4.077 },
  { date: "2007-03-02", ratePct: 4.05 },
  { date: "2007-03-05", ratePct: 3.995 },
  { date: "2007-03-06", ratePct: 4.041 },
  { date: "2007-03-07", ratePct: 4.052 },
  { date: "2007-03-08", ratePct: 4.065 },
  { date: "2007-03-09", ratePct: 4.09 },
  { date: "2007-03-12", ratePct: 4.117 },
  { date: "2007-03-13", ratePct: 4.105 },
  { date: "2007-03-14", ratePct: 4.086 },
  { date: "2007-03-15", ratePct: 4.113 },
  { date: "2007-03-16", ratePct: 4.105 },
  { date: "2007-03-19", ratePct: 4.126 },
  { date: "2007-03-20", ratePct: 4.133 },
  { date: "2007-03-21", ratePct: 4.126 },
  { date: "2007-03-22", ratePct: 4.122 },
  { date: "2007-03-23", ratePct: 4.124 },
  { date: "2007-03-26", ratePct: 4.139 },
  { date: "2007-03-27", ratePct: 4.154 },
  { date: "2007-03-28", ratePct: 4.157 },
  { date: "2007-03-29", ratePct: 4.168 },
  { date: "2007-03-30", ratePct: 4.177 },
  { date: "2007-04-02", ratePct: 4.193 },
  { date: "2007-04-03", ratePct: 4.205 },
  { date: "2007-04-04", ratePct: 4.203 },
  { date: "2007-04-05", ratePct: 4.211 },
  { date: "2007-04-10", ratePct: 4.232 },
  { date: "2007-04-11", ratePct: 4.237 },
  { date: "2007-04-12", ratePct: 4.252 },
  { date: "2007-04-13", ratePct: 4.259 },
  { date: "2007-04-16", ratePct: 4.271 },
  { date: "2007-04-17", ratePct: 4.267 },
  { date: "2007-04-18", ratePct: 4.257 },
  { date: "2007-04-19", ratePct: 4.257 },
  { date: "2007-04-20", ratePct: 4.276 },
  { date: "2007-04-23", ratePct: 4.267 },
  { date: "2007-04-24", ratePct: 4.266 },
  { date: "2007-04-25", ratePct: 4.274 },
  { date: "2007-04-26", ratePct: 4.283 },
  { date: "2007-04-27", ratePct: 4.293 },
  { date: "2007-04-30", ratePct: 4.298 },
  { date: "2007-05-02", ratePct: 4.306 },
  { date: "2007-05-03", ratePct: 4.317 },
  { date: "2007-05-04", ratePct: 4.32 },
  { date: "2007-05-07", ratePct: 4.326 },
  { date: "2007-05-08", ratePct: 4.323 },
  { date: "2007-05-09", ratePct: 4.323 },
  { date: "2007-05-10", ratePct: 4.328 },
  { date: "2007-05-11", ratePct: 4.305 },
  { date: "2007-05-14", ratePct: 4.331 },
  { date: "2007-05-15", ratePct: 4.345 },
  { date: "2007-05-16", ratePct: 4.368 },
  { date: "2007-05-17", ratePct: 4.392 },
  { date: "2007-05-18", ratePct: 4.4 },
  { date: "2007-05-21", ratePct: 4.401 },
  { date: "2007-05-22", ratePct: 4.401 },
  { date: "2007-05-23", ratePct: 4.422 },
  { date: "2007-05-24", ratePct: 4.413 },
  { date: "2007-05-25", ratePct: 4.416 },
  { date: "2007-05-28", ratePct: 4.434 },
  { date: "2007-05-29", ratePct: 4.444 },
  { date: "2007-05-30", ratePct: 4.439 },
  { date: "2007-05-31", ratePct: 4.455 },
  { date: "2007-06-01", ratePct: 4.466 },
  { date: "2007-06-04", ratePct: 4.485 },
  { date: "2007-06-05", ratePct: 4.486 },
  { date: "2007-06-06", ratePct: 4.493 },
  { date: "2007-06-07", ratePct: 4.49 },
  { date: "2007-06-08", ratePct: 4.496 },
  { date: "2007-06-11", ratePct: 4.494 },
  { date: "2007-06-12", ratePct: 4.499 },
  { date: "2007-06-13", ratePct: 4.523 },
  { date: "2007-06-14", ratePct: 4.51 },
  { date: "2007-06-15", ratePct: 4.519 },
  { date: "2007-06-18", ratePct: 4.517 },
  { date: "2007-06-19", ratePct: 4.519 },
  { date: "2007-06-20", ratePct: 4.497 },
  { date: "2007-06-21", ratePct: 4.534 },
  { date: "2007-06-22", ratePct: 4.518 },
  { date: "2007-06-25", ratePct: 4.504 },
  { date: "2007-06-26", ratePct: 4.507 },
  { date: "2007-06-27", ratePct: 4.505 },
  { date: "2007-06-28", ratePct: 4.525 },
  { date: "2007-06-29", ratePct: 4.528 },
  { date: "2007-07-02", ratePct: 4.524 },
  { date: "2007-07-03", ratePct: 4.526 },
  { date: "2007-07-04", ratePct: 4.541 },
  { date: "2007-07-05", ratePct: 4.563 },
  { date: "2007-07-06", ratePct: 4.58 },
  { date: "2007-07-09", ratePct: 4.582 },
  { date: "2007-07-10", ratePct: 4.577 },
  { date: "2007-07-11", ratePct: 4.554 },
  { date: "2007-07-12", ratePct: 4.582 },
  { date: "2007-07-13", ratePct: 4.594 },
  { date: "2007-07-16", ratePct: 4.588 },
  { date: "2007-07-17", ratePct: 4.577 },
  { date: "2007-07-18", ratePct: 4.583 },
  { date: "2007-07-19", ratePct: 4.591 },
  { date: "2007-07-20", ratePct: 4.587 },
  { date: "2007-07-23", ratePct: 4.557 },
  { date: "2007-07-24", ratePct: 4.574 },
  { date: "2007-07-25", ratePct: 4.564 },
  { date: "2007-07-26", ratePct: 4.573 },
  { date: "2007-07-27", ratePct: 4.526 },
  { date: "2007-07-30", ratePct: 4.524 },
  { date: "2007-07-31", ratePct: 4.537 },
  { date: "2007-08-01", ratePct: 4.522 },
  { date: "2007-08-02", ratePct: 4.565 },
  { date: "2007-08-03", ratePct: 4.59 },
  { date: "2007-08-06", ratePct: 4.551 },
  { date: "2007-08-07", ratePct: 4.583 },
  { date: "2007-08-08", ratePct: 4.602 },
  { date: "2007-08-09", ratePct: 4.635 },
  { date: "2007-08-10", ratePct: 4.633 },
  { date: "2007-08-13", ratePct: 4.645 },
  { date: "2007-08-14", ratePct: 4.647 },
  { date: "2007-08-15", ratePct: 4.632 },
  { date: "2007-08-16", ratePct: 4.645 },
  { date: "2007-08-17", ratePct: 4.656 },
  { date: "2007-08-20", ratePct: 4.67 },
  { date: "2007-08-21", ratePct: 4.676 },
  { date: "2007-08-22", ratePct: 4.714 },
  { date: "2007-08-23", ratePct: 4.791 },
  { date: "2007-08-24", ratePct: 4.78 },
  { date: "2007-08-27", ratePct: 4.764 },
  { date: "2007-08-28", ratePct: 4.745 },
  { date: "2007-08-29", ratePct: 4.742 },
  { date: "2007-08-30", ratePct: 4.757 },
  { date: "2007-08-31", ratePct: 4.781 },
  { date: "2007-09-03", ratePct: 4.783 },
  { date: "2007-09-04", ratePct: 4.792 },
  { date: "2007-09-05", ratePct: 4.807 },
  { date: "2007-09-06", ratePct: 4.781 },
  { date: "2007-09-07", ratePct: 4.763 },
  { date: "2007-09-10", ratePct: 4.713 },
  { date: "2007-09-11", ratePct: 4.71 },
  { date: "2007-09-12", ratePct: 4.715 },
  { date: "2007-09-13", ratePct: 4.699 },
  { date: "2007-09-14", ratePct: 4.696 },
  { date: "2007-09-17", ratePct: 4.685 },
  { date: "2007-09-18", ratePct: 4.696 },
  { date: "2007-09-19", ratePct: 4.689 },
  { date: "2007-09-20", ratePct: 4.682 },
  { date: "2007-09-21", ratePct: 4.694 },
  { date: "2007-09-24", ratePct: 4.701 },
  { date: "2007-09-25", ratePct: 4.705 },
  { date: "2007-09-26", ratePct: 4.713 },
  { date: "2007-09-27", ratePct: 4.74 },
  { date: "2007-09-28", ratePct: 4.726 },
  { date: "2007-10-01", ratePct: 4.716 },
  { date: "2007-10-02", ratePct: 4.72 },
  { date: "2007-10-03", ratePct: 4.708 },
  { date: "2007-10-04", ratePct: 4.704 },
  { date: "2007-10-05", ratePct: 4.683 },
  { date: "2007-10-08", ratePct: 4.699 },
  { date: "2007-10-09", ratePct: 4.692 },
  { date: "2007-10-10", ratePct: 4.689 },
  { date: "2007-10-11", ratePct: 4.687 },
  { date: "2007-10-12", ratePct: 4.647 },
  { date: "2007-10-15", ratePct: 4.674 },
  { date: "2007-10-16", ratePct: 4.657 },
  { date: "2007-10-17", ratePct: 4.661 },
  { date: "2007-10-18", ratePct: 4.652 },
  { date: "2007-10-19", ratePct: 4.628 },
  { date: "2007-10-22", ratePct: 4.595 },
  { date: "2007-10-23", ratePct: 4.592 },
  { date: "2007-10-24", ratePct: 4.574 },
  { date: "2007-10-25", ratePct: 4.564 },
  { date: "2007-10-26", ratePct: 4.562 },
  { date: "2007-10-29", ratePct: 4.575 },
  { date: "2007-10-30", ratePct: 4.595 },
  { date: "2007-10-31", ratePct: 4.599 },
  { date: "2007-11-01", ratePct: 4.63 },
  { date: "2007-11-02", ratePct: 4.608 },
  { date: "2007-11-05", ratePct: 4.601 },
  { date: "2007-11-06", ratePct: 4.606 },
  { date: "2007-11-07", ratePct: 4.599 },
  { date: "2007-11-08", ratePct: 4.581 },
  { date: "2007-11-09", ratePct: 4.57 },
  { date: "2007-11-12", ratePct: 4.556 },
  { date: "2007-11-13", ratePct: 4.559 },
  { date: "2007-11-14", ratePct: 4.574 },
  { date: "2007-11-15", ratePct: 4.577 },
  { date: "2007-11-16", ratePct: 4.576 },
  { date: "2007-11-19", ratePct: 4.597 },
  { date: "2007-11-20", ratePct: 4.595 },
  { date: "2007-11-21", ratePct: 4.606 },
  { date: "2007-11-22", ratePct: 4.62 },
  { date: "2007-11-23", ratePct: 4.618 },
  { date: "2007-11-26", ratePct: 4.629 },
  { date: "2007-11-27", ratePct: 4.626 },
  { date: "2007-11-28", ratePct: 4.653 },
  { date: "2007-11-29", ratePct: 4.686 },
  { date: "2007-11-30", ratePct: 4.692 },
  { date: "2007-12-03", ratePct: 4.711 },
  { date: "2007-12-04", ratePct: 4.724 },
  { date: "2007-12-05", ratePct: 4.723 },
  { date: "2007-12-06", ratePct: 4.718 },
  { date: "2007-12-07", ratePct: 4.769 },
  { date: "2007-12-10", ratePct: 4.815 },
  { date: "2007-12-11", ratePct: 4.847 },
  { date: "2007-12-12", ratePct: 4.867 },
  { date: "2007-12-13", ratePct: 4.862 },
  { date: "2007-12-14", ratePct: 4.88 },
  { date: "2007-12-17", ratePct: 4.885 },
  { date: "2007-12-18", ratePct: 4.827 },
  { date: "2007-12-19", ratePct: 4.813 },
  { date: "2007-12-20", ratePct: 4.791 },
  { date: "2007-12-21", ratePct: 4.777 },
  { date: "2007-12-24", ratePct: 4.772 },
  { date: "2007-12-27", ratePct: 4.786 },
  { date: "2007-12-28", ratePct: 4.754 },
  { date: "2007-12-31", ratePct: 4.745 },
  { date: "2008-01-02", ratePct: 4.733 },
  { date: "2008-01-03", ratePct: 4.697 },
  { date: "2008-01-04", ratePct: 4.672 },
  { date: "2008-01-07", ratePct: 4.656 },
  { date: "2008-01-08", ratePct: 4.657 },
  { date: "2008-01-09", ratePct: 4.651 },
  { date: "2008-01-10", ratePct: 4.646 },
  { date: "2008-01-11", ratePct: 4.649 },
  { date: "2008-01-14", ratePct: 4.595 },
  { date: "2008-01-15", ratePct: 4.581 },
  { date: "2008-01-16", ratePct: 4.515 },
  { date: "2008-01-17", ratePct: 4.451 },
  { date: "2008-01-18", ratePct: 4.421 },
  { date: "2008-01-21", ratePct: 4.381 },
  { date: "2008-01-22", ratePct: 4.305 },
  { date: "2008-01-23", ratePct: 4.287 },
  { date: "2008-01-24", ratePct: 4.303 },
  { date: "2008-01-25", ratePct: 4.387 },
  { date: "2008-01-28", ratePct: 4.339 },
  { date: "2008-01-29", ratePct: 4.36 },
  { date: "2008-01-30", ratePct: 4.355 },
  { date: "2008-01-31", ratePct: 4.316 },
  { date: "2008-02-01", ratePct: 4.33 },
  { date: "2008-02-04", ratePct: 4.344 },
  { date: "2008-02-05", ratePct: 4.344 },
  { date: "2008-02-06", ratePct: 4.324 },
  { date: "2008-02-07", ratePct: 4.332 },
  { date: "2008-02-08", ratePct: 4.29 },
  { date: "2008-02-11", ratePct: 4.299 },
  { date: "2008-02-12", ratePct: 4.299 },
  { date: "2008-02-13", ratePct: 4.327 },
  { date: "2008-02-14", ratePct: 4.327 },
  { date: "2008-02-15", ratePct: 4.347 },
  { date: "2008-02-18", ratePct: 4.355 },
  { date: "2008-02-19", ratePct: 4.353 },
  { date: "2008-02-20", ratePct: 4.372 },
  { date: "2008-02-21", ratePct: 4.378 },
  { date: "2008-02-22", ratePct: 4.367 },
  { date: "2008-02-25", ratePct: 4.382 },
  { date: "2008-02-26", ratePct: 4.394 },
  { date: "2008-02-27", ratePct: 4.39 },
  { date: "2008-02-28", ratePct: 4.39 },
  { date: "2008-02-29", ratePct: 4.382 },
  { date: "2008-03-03", ratePct: 4.379 },
  { date: "2008-03-04", ratePct: 4.394 },
  { date: "2008-03-05", ratePct: 4.404 },
  { date: "2008-03-06", ratePct: 4.435 },
  { date: "2008-03-07", ratePct: 4.491 },
  { date: "2008-03-10", ratePct: 4.545 },
  { date: "2008-03-11", ratePct: 4.555 },
  { date: "2008-03-12", ratePct: 4.588 },
  { date: "2008-03-13", ratePct: 4.583 },
  { date: "2008-03-14", ratePct: 4.607 },
  { date: "2008-03-17", ratePct: 4.631 },
  { date: "2008-03-18", ratePct: 4.647 },
  { date: "2008-03-19", ratePct: 4.654 },
  { date: "2008-03-20", ratePct: 4.675 },
  { date: "2008-03-25", ratePct: 4.712 },
  { date: "2008-03-26", ratePct: 4.719 },
  { date: "2008-03-27", ratePct: 4.731 },
  { date: "2008-03-28", ratePct: 4.736 },
  { date: "2008-03-31", ratePct: 4.725 },
  { date: "2008-04-01", ratePct: 4.735 },
  { date: "2008-04-02", ratePct: 4.743 },
  { date: "2008-04-03", ratePct: 4.751 },
  { date: "2008-04-04", ratePct: 4.751 },
  { date: "2008-04-07", ratePct: 4.75 },
  { date: "2008-04-08", ratePct: 4.75 },
  { date: "2008-04-09", ratePct: 4.749 },
  { date: "2008-04-10", ratePct: 4.748 },
  { date: "2008-04-11", ratePct: 4.756 },
  { date: "2008-04-14", ratePct: 4.762 },
  { date: "2008-04-15", ratePct: 4.772 },
  { date: "2008-04-16", ratePct: 4.78 },
  { date: "2008-04-17", ratePct: 4.796 },
  { date: "2008-04-18", ratePct: 4.802 },
  { date: "2008-04-21", ratePct: 4.825 },
  { date: "2008-04-22", ratePct: 4.853 },
  { date: "2008-04-23", ratePct: 4.933 },
  { date: "2008-04-24", ratePct: 4.935 },
  { date: "2008-04-25", ratePct: 4.964 },
  { date: "2008-04-28", ratePct: 4.963 },
  { date: "2008-04-29", ratePct: 4.965 },
  { date: "2008-04-30", ratePct: 4.955 },
  { date: "2008-05-02", ratePct: 4.952 },
  { date: "2008-05-05", ratePct: 4.958 },
  { date: "2008-05-06", ratePct: 4.956 },
  { date: "2008-05-07", ratePct: 4.96 },
  { date: "2008-05-08", ratePct: 4.953 },
  { date: "2008-05-09", ratePct: 4.941 },
  { date: "2008-05-12", ratePct: 4.948 },
  { date: "2008-05-13", ratePct: 4.95 },
  { date: "2008-05-14", ratePct: 4.971 },
  { date: "2008-05-15", ratePct: 4.989 },
  { date: "2008-05-16", ratePct: 4.988 },
  { date: "2008-05-19", ratePct: 4.982 },
  { date: "2008-05-20", ratePct: 4.987 },
  { date: "2008-05-21", ratePct: 4.999 },
  { date: "2008-05-22", ratePct: 5 },
  { date: "2008-05-23", ratePct: 5.028 },
  { date: "2008-05-26", ratePct: 5.045 },
  { date: "2008-05-27", ratePct: 5.05 },
  { date: "2008-05-28", ratePct: 5.053 },
  { date: "2008-05-29", ratePct: 5.063 },
  { date: "2008-05-30", ratePct: 5.097 },
  { date: "2008-06-02", ratePct: 5.097 },
  { date: "2008-06-03", ratePct: 5.093 },
  { date: "2008-06-04", ratePct: 5.107 },
  { date: "2008-06-05", ratePct: 5.125 },
  { date: "2008-06-06", ratePct: 5.418 },
  { date: "2008-06-09", ratePct: 5.429 },
  { date: "2008-06-10", ratePct: 5.432 },
  { date: "2008-06-11", ratePct: 5.417 },
  { date: "2008-06-12", ratePct: 5.425 },
  { date: "2008-06-13", ratePct: 5.439 },
  { date: "2008-06-16", ratePct: 5.436 },
  { date: "2008-06-17", ratePct: 5.434 },
  { date: "2008-06-18", ratePct: 5.427 },
  { date: "2008-06-19", ratePct: 5.43 },
  { date: "2008-06-20", ratePct: 5.429 },
  { date: "2008-06-23", ratePct: 5.419 },
  { date: "2008-06-24", ratePct: 5.422 },
  { date: "2008-06-25", ratePct: 5.418 },
  { date: "2008-06-26", ratePct: 5.408 },
  { date: "2008-06-27", ratePct: 5.382 },
  { date: "2008-06-30", ratePct: 5.39 },
  { date: "2008-07-01", ratePct: 5.418 },
  { date: "2008-07-02", ratePct: 5.417 },
  { date: "2008-07-03", ratePct: 5.432 },
  { date: "2008-07-04", ratePct: 5.395 },
  { date: "2008-07-07", ratePct: 5.393 },
  { date: "2008-07-08", ratePct: 5.379 },
  { date: "2008-07-09", ratePct: 5.396 },
  { date: "2008-07-10", ratePct: 5.384 },
  { date: "2008-07-11", ratePct: 5.388 },
  { date: "2008-07-14", ratePct: 5.384 },
  { date: "2008-07-15", ratePct: 5.374 },
  { date: "2008-07-16", ratePct: 5.369 },
  { date: "2008-07-17", ratePct: 5.377 },
  { date: "2008-07-18", ratePct: 5.375 },
  { date: "2008-07-21", ratePct: 5.413 },
  { date: "2008-07-22", ratePct: 5.418 },
  { date: "2008-07-23", ratePct: 5.432 },
  { date: "2008-07-24", ratePct: 5.409 },
  { date: "2008-07-25", ratePct: 5.387 },
  { date: "2008-07-28", ratePct: 5.389 },
  { date: "2008-07-29", ratePct: 5.38 },
  { date: "2008-07-30", ratePct: 5.369 },
  { date: "2008-07-31", ratePct: 5.366 },
  { date: "2008-08-01", ratePct: 5.357 },
  { date: "2008-08-04", ratePct: 5.359 },
  { date: "2008-08-05", ratePct: 5.355 },
  { date: "2008-08-06", ratePct: 5.354 },
  { date: "2008-08-07", ratePct: 5.35 },
  { date: "2008-08-08", ratePct: 5.313 },
  { date: "2008-08-11", ratePct: 5.313 },
  { date: "2008-08-12", ratePct: 5.314 },
  { date: "2008-08-13", ratePct: 5.311 },
  { date: "2008-08-14", ratePct: 5.307 },
  { date: "2008-08-15", ratePct: 5.308 },
  { date: "2008-08-18", ratePct: 5.304 },
  { date: "2008-08-19", ratePct: 5.301 },
  { date: "2008-08-20", ratePct: 5.314 },
  { date: "2008-08-21", ratePct: 5.306 },
  { date: "2008-08-22", ratePct: 5.321 },
  { date: "2008-08-25", ratePct: 5.319 },
  { date: "2008-08-26", ratePct: 5.308 },
  { date: "2008-08-27", ratePct: 5.306 },
  { date: "2008-08-28", ratePct: 5.329 },
  { date: "2008-08-29", ratePct: 5.335 },
  { date: "2008-09-01", ratePct: 5.325 },
  { date: "2008-09-02", ratePct: 5.33 },
  { date: "2008-09-03", ratePct: 5.323 },
  { date: "2008-09-04", ratePct: 5.334 },
  { date: "2008-09-05", ratePct: 5.322 },
  { date: "2008-09-08", ratePct: 5.337 },
  { date: "2008-09-09", ratePct: 5.337 },
  { date: "2008-09-10", ratePct: 5.336 },
  { date: "2008-09-11", ratePct: 5.337 },
  { date: "2008-09-12", ratePct: 5.341 },
  { date: "2008-09-15", ratePct: 5.341 },
  { date: "2008-09-16", ratePct: 5.34 },
  { date: "2008-09-17", ratePct: 5.363 },
  { date: "2008-09-18", ratePct: 5.386 },
  { date: "2008-09-19", ratePct: 5.41 },
  { date: "2008-09-22", ratePct: 5.44 },
  { date: "2008-09-23", ratePct: 5.45 },
  { date: "2008-09-24", ratePct: 5.467 },
  { date: "2008-09-25", ratePct: 5.484 },
  { date: "2008-09-26", ratePct: 5.471 },
  { date: "2008-09-29", ratePct: 5.477 },
  { date: "2008-09-30", ratePct: 5.495 },
  { date: "2008-10-01", ratePct: 5.505 },
  { date: "2008-10-02", ratePct: 5.526 },
  { date: "2008-10-03", ratePct: 5.493 },
  { date: "2008-10-06", ratePct: 5.482 },
  { date: "2008-10-07", ratePct: 5.493 },
  { date: "2008-10-08", ratePct: 5.486 },
  { date: "2008-10-09", ratePct: 5.512 },
  { date: "2008-10-10", ratePct: 5.489 },
  { date: "2008-10-13", ratePct: 5.425 },
  { date: "2008-10-14", ratePct: 5.358 },
  { date: "2008-10-15", ratePct: 5.312 },
  { date: "2008-10-16", ratePct: 5.248 },
  { date: "2008-10-17", ratePct: 5.202 },
  { date: "2008-10-20", ratePct: 5.146 },
  { date: "2008-10-21", ratePct: 5.112 },
  { date: "2008-10-22", ratePct: 5.079 },
  { date: "2008-10-23", ratePct: 5.06 },
  { date: "2008-10-24", ratePct: 5.035 },
  { date: "2008-10-27", ratePct: 5.02 },
  { date: "2008-10-28", ratePct: 4.986 },
  { date: "2008-10-29", ratePct: 4.95 },
  { date: "2008-10-30", ratePct: 4.916 },
  { date: "2008-10-31", ratePct: 4.865 },
  { date: "2008-11-03", ratePct: 4.845 },
  { date: "2008-11-04", ratePct: 4.808 },
  { date: "2008-11-05", ratePct: 4.764 },
  { date: "2008-11-06", ratePct: 4.701 },
  { date: "2008-11-07", ratePct: 4.596 },
  { date: "2008-11-10", ratePct: 4.532 },
  { date: "2008-11-11", ratePct: 4.458 },
  { date: "2008-11-12", ratePct: 4.412 },
  { date: "2008-11-13", ratePct: 4.37 },
  { date: "2008-11-14", ratePct: 4.355 },
  { date: "2008-11-17", ratePct: 4.322 },
  { date: "2008-11-18", ratePct: 4.271 },
  { date: "2008-11-19", ratePct: 4.219 },
  { date: "2008-11-20", ratePct: 4.171 },
  { date: "2008-11-21", ratePct: 4.123 },
  { date: "2008-11-24", ratePct: 4.077 },
  { date: "2008-11-25", ratePct: 4.051 },
  { date: "2008-11-26", ratePct: 4.004 },
  { date: "2008-11-27", ratePct: 3.978 },
  { date: "2008-11-28", ratePct: 3.951 },
  { date: "2008-12-01", ratePct: 3.921 },
  { date: "2008-12-02", ratePct: 3.896 },
  { date: "2008-12-03", ratePct: 3.853 },
  { date: "2008-12-04", ratePct: 3.777 },
  { date: "2008-12-05", ratePct: 3.7 },
  { date: "2008-12-08", ratePct: 3.661 },
  { date: "2008-12-09", ratePct: 3.61 },
  { date: "2008-12-10", ratePct: 3.563 },
  { date: "2008-12-11", ratePct: 3.513 },
  { date: "2008-12-12", ratePct: 3.47 },
  { date: "2008-12-15", ratePct: 3.431 },
  { date: "2008-12-16", ratePct: 3.395 },
  { date: "2008-12-17", ratePct: 3.333 },
  { date: "2008-12-18", ratePct: 3.29 },
  { date: "2008-12-19", ratePct: 3.257 },
  { date: "2008-12-22", ratePct: 3.227 },
  { date: "2008-12-23", ratePct: 3.185 },
  { date: "2008-12-24", ratePct: 3.15 },
  { date: "2008-12-29", ratePct: 3.126 },
  { date: "2008-12-30", ratePct: 3.085 },
  { date: "2008-12-31", ratePct: 3.049 },
  { date: "2009-01-02", ratePct: 3.025 },
  { date: "2009-01-05", ratePct: 2.995 },
  { date: "2009-01-06", ratePct: 2.959 },
  { date: "2009-01-07", ratePct: 2.924 },
  { date: "2009-01-08", ratePct: 2.882 },
  { date: "2009-01-09", ratePct: 2.834 },
  { date: "2009-01-12", ratePct: 2.782 },
  { date: "2009-01-13", ratePct: 2.738 },
  { date: "2009-01-14", ratePct: 2.7 },
  { date: "2009-01-15", ratePct: 2.651 },
  { date: "2009-01-16", ratePct: 2.615 },
  { date: "2009-01-19", ratePct: 2.572 },
  { date: "2009-01-20", ratePct: 2.531 },
  { date: "2009-01-21", ratePct: 2.474 },
  { date: "2009-01-22", ratePct: 2.426 },
  { date: "2009-01-23", ratePct: 2.379 },
  { date: "2009-01-26", ratePct: 2.347 },
  { date: "2009-01-27", ratePct: 2.335 },
  { date: "2009-01-28", ratePct: 2.318 },
  { date: "2009-01-29", ratePct: 2.294 },
  { date: "2009-01-30", ratePct: 2.273 },
  { date: "2009-02-02", ratePct: 2.259 },
  { date: "2009-02-03", ratePct: 2.246 },
  { date: "2009-02-04", ratePct: 2.236 },
  { date: "2009-02-05", ratePct: 2.223 },
  { date: "2009-02-06", ratePct: 2.209 },
  { date: "2009-02-09", ratePct: 2.192 },
  { date: "2009-02-10", ratePct: 2.177 },
  { date: "2009-02-11", ratePct: 2.165 },
  { date: "2009-02-12", ratePct: 2.146 },
  { date: "2009-02-13", ratePct: 2.133 },
  { date: "2009-02-16", ratePct: 2.118 },
  { date: "2009-02-17", ratePct: 2.096 },
  { date: "2009-02-18", ratePct: 2.083 },
  { date: "2009-02-19", ratePct: 2.085 },
  { date: "2009-02-20", ratePct: 2.074 },
  { date: "2009-02-23", ratePct: 2.074 },
  { date: "2009-02-24", ratePct: 2.062 },
  { date: "2009-02-25", ratePct: 2.054 },
  { date: "2009-02-26", ratePct: 2.043 },
  { date: "2009-02-27", ratePct: 2.033 },
  { date: "2009-03-02", ratePct: 2.025 },
  { date: "2009-03-03", ratePct: 2.006 },
  { date: "2009-03-04", ratePct: 1.993 },
  { date: "2009-03-05", ratePct: 1.981 },
  { date: "2009-03-06", ratePct: 1.957 },
  { date: "2009-03-09", ratePct: 1.947 },
  { date: "2009-03-10", ratePct: 1.939 },
  { date: "2009-03-11", ratePct: 1.932 },
  { date: "2009-03-12", ratePct: 1.931 },
  { date: "2009-03-13", ratePct: 1.923 },
  { date: "2009-03-16", ratePct: 1.919 },
  { date: "2009-03-17", ratePct: 1.909 },
  { date: "2009-03-18", ratePct: 1.901 },
  { date: "2009-03-19", ratePct: 1.877 },
  { date: "2009-03-20", ratePct: 1.866 },
  { date: "2009-03-23", ratePct: 1.857 },
  { date: "2009-03-24", ratePct: 1.857 },
  { date: "2009-03-25", ratePct: 1.853 },
  { date: "2009-03-26", ratePct: 1.849 },
  { date: "2009-03-27", ratePct: 1.838 },
  { date: "2009-03-30", ratePct: 1.824 },
  { date: "2009-03-31", ratePct: 1.812 },
  { date: "2009-04-01", ratePct: 1.801 },
  { date: "2009-04-02", ratePct: 1.791 },
  { date: "2009-04-03", ratePct: 1.804 },
  { date: "2009-04-06", ratePct: 1.802 },
  { date: "2009-04-07", ratePct: 1.796 },
  { date: "2009-04-08", ratePct: 1.785 },
  { date: "2009-04-09", ratePct: 1.782 },
  { date: "2009-04-14", ratePct: 1.774 },
  { date: "2009-04-15", ratePct: 1.768 },
  { date: "2009-04-16", ratePct: 1.762 },
  { date: "2009-04-17", ratePct: 1.761 },
  { date: "2009-04-20", ratePct: 1.768 },
  { date: "2009-04-21", ratePct: 1.768 },
  { date: "2009-04-22", ratePct: 1.766 },
  { date: "2009-04-23", ratePct: 1.769 },
  { date: "2009-04-24", ratePct: 1.764 },
  { date: "2009-04-27", ratePct: 1.754 },
  { date: "2009-04-28", ratePct: 1.743 },
  { date: "2009-04-29", ratePct: 1.734 },
  { date: "2009-04-30", ratePct: 1.728 },
  { date: "2009-05-04", ratePct: 1.718 },
  { date: "2009-05-05", ratePct: 1.71 },
  { date: "2009-05-06", ratePct: 1.704 },
  { date: "2009-05-07", ratePct: 1.699 },
  { date: "2009-05-08", ratePct: 1.676 },
  { date: "2009-05-11", ratePct: 1.655 },
  { date: "2009-05-12", ratePct: 1.647 },
  { date: "2009-05-13", ratePct: 1.636 },
  { date: "2009-05-14", ratePct: 1.623 },
  { date: "2009-05-15", ratePct: 1.61 },
  { date: "2009-05-18", ratePct: 1.602 },
  { date: "2009-05-19", ratePct: 1.595 },
  { date: "2009-05-20", ratePct: 1.606 },
  { date: "2009-05-21", ratePct: 1.613 },
  { date: "2009-05-22", ratePct: 1.622 },
  { date: "2009-05-25", ratePct: 1.631 },
  { date: "2009-05-26", ratePct: 1.632 },
  { date: "2009-05-27", ratePct: 1.638 },
  { date: "2009-05-28", ratePct: 1.641 },
  { date: "2009-05-29", ratePct: 1.631 },
  { date: "2009-06-01", ratePct: 1.626 },
  { date: "2009-06-02", ratePct: 1.624 },
  { date: "2009-06-03", ratePct: 1.615 },
  { date: "2009-06-04", ratePct: 1.621 },
  { date: "2009-06-05", ratePct: 1.643 },
  { date: "2009-06-08", ratePct: 1.672 },
  { date: "2009-06-09", ratePct: 1.675 },
  { date: "2009-06-10", ratePct: 1.672 },
  { date: "2009-06-11", ratePct: 1.666 },
  { date: "2009-06-12", ratePct: 1.659 },
  { date: "2009-06-15", ratePct: 1.649 },
  { date: "2009-06-16", ratePct: 1.638 },
  { date: "2009-06-17", ratePct: 1.629 },
  { date: "2009-06-18", ratePct: 1.619 },
  { date: "2009-06-19", ratePct: 1.609 },
  { date: "2009-06-22", ratePct: 1.597 },
  { date: "2009-06-23", ratePct: 1.585 },
  { date: "2009-06-24", ratePct: 1.57 },
  { date: "2009-06-25", ratePct: 1.532 },
  { date: "2009-06-26", ratePct: 1.515 },
  { date: "2009-06-29", ratePct: 1.51 },
  { date: "2009-06-30", ratePct: 1.504 },
  { date: "2009-07-01", ratePct: 1.497 },
  { date: "2009-07-02", ratePct: 1.486 },
  { date: "2009-07-03", ratePct: 1.468 },
  { date: "2009-07-06", ratePct: 1.456 },
  { date: "2009-07-07", ratePct: 1.452 },
  { date: "2009-07-08", ratePct: 1.44 },
  { date: "2009-07-09", ratePct: 1.436 },
  { date: "2009-07-10", ratePct: 1.433 },
  { date: "2009-07-13", ratePct: 1.426 },
  { date: "2009-07-14", ratePct: 1.419 },
  { date: "2009-07-15", ratePct: 1.413 },
  { date: "2009-07-16", ratePct: 1.409 },
  { date: "2009-07-17", ratePct: 1.395 },
  { date: "2009-07-20", ratePct: 1.389 },
  { date: "2009-07-21", ratePct: 1.382 },
  { date: "2009-07-22", ratePct: 1.381 },
  { date: "2009-07-23", ratePct: 1.379 },
  { date: "2009-07-24", ratePct: 1.378 },
  { date: "2009-07-27", ratePct: 1.377 },
  { date: "2009-07-28", ratePct: 1.373 },
  { date: "2009-07-29", ratePct: 1.367 },
  { date: "2009-07-30", ratePct: 1.364 },
  { date: "2009-07-31", ratePct: 1.355 },
  { date: "2009-08-03", ratePct: 1.346 },
  { date: "2009-08-04", ratePct: 1.344 },
  { date: "2009-08-05", ratePct: 1.345 },
  { date: "2009-08-06", ratePct: 1.346 },
  { date: "2009-08-07", ratePct: 1.348 },
  { date: "2009-08-10", ratePct: 1.354 },
  { date: "2009-08-11", ratePct: 1.353 },
  { date: "2009-08-12", ratePct: 1.35 },
  { date: "2009-08-13", ratePct: 1.344 },
  { date: "2009-08-14", ratePct: 1.342 },
  { date: "2009-08-17", ratePct: 1.335 },
  { date: "2009-08-18", ratePct: 1.334 },
  { date: "2009-08-19", ratePct: 1.33 },
  { date: "2009-08-20", ratePct: 1.328 },
  { date: "2009-08-21", ratePct: 1.324 },
  { date: "2009-08-24", ratePct: 1.326 },
  { date: "2009-08-25", ratePct: 1.322 },
  { date: "2009-08-26", ratePct: 1.319 },
  { date: "2009-08-27", ratePct: 1.315 },
  { date: "2009-08-28", ratePct: 1.311 },
  { date: "2009-08-31", ratePct: 1.304 },
  { date: "2009-09-01", ratePct: 1.302 },
  { date: "2009-09-02", ratePct: 1.3 },
  { date: "2009-09-03", ratePct: 1.298 },
  { date: "2009-09-04", ratePct: 1.29 },
  { date: "2009-09-07", ratePct: 1.283 },
  { date: "2009-09-08", ratePct: 1.274 },
  { date: "2009-09-09", ratePct: 1.267 },
  { date: "2009-09-10", ratePct: 1.261 },
  { date: "2009-09-11", ratePct: 1.258 },
  { date: "2009-09-14", ratePct: 1.255 },
  { date: "2009-09-15", ratePct: 1.256 },
  { date: "2009-09-16", ratePct: 1.252 },
  { date: "2009-09-17", ratePct: 1.256 },
  { date: "2009-09-18", ratePct: 1.254 },
  { date: "2009-09-21", ratePct: 1.252 },
  { date: "2009-09-22", ratePct: 1.251 },
  { date: "2009-09-23", ratePct: 1.247 },
  { date: "2009-09-24", ratePct: 1.242 },
  { date: "2009-09-25", ratePct: 1.238 },
  { date: "2009-09-28", ratePct: 1.235 },
  { date: "2009-09-29", ratePct: 1.236 },
  { date: "2009-09-30", ratePct: 1.236 },
  { date: "2009-10-01", ratePct: 1.237 },
  { date: "2009-10-02", ratePct: 1.235 },
  { date: "2009-10-05", ratePct: 1.23 },
  { date: "2009-10-06", ratePct: 1.229 },
  { date: "2009-10-07", ratePct: 1.225 },
  { date: "2009-10-08", ratePct: 1.229 },
  { date: "2009-10-09", ratePct: 1.238 },
  { date: "2009-10-12", ratePct: 1.247 },
  { date: "2009-10-13", ratePct: 1.247 },
  { date: "2009-10-14", ratePct: 1.243 },
  { date: "2009-10-15", ratePct: 1.247 },
  { date: "2009-10-16", ratePct: 1.251 },
  { date: "2009-10-19", ratePct: 1.258 },
  { date: "2009-10-20", ratePct: 1.254 },
  { date: "2009-10-21", ratePct: 1.254 },
  { date: "2009-10-22", ratePct: 1.253 },
  { date: "2009-10-23", ratePct: 1.254 },
  { date: "2009-10-26", ratePct: 1.251 },
  { date: "2009-10-27", ratePct: 1.246 },
  { date: "2009-10-28", ratePct: 1.238 },
  { date: "2009-10-29", ratePct: 1.235 },
  { date: "2009-10-30", ratePct: 1.237 },
  { date: "2009-11-02", ratePct: 1.237 },
  { date: "2009-11-03", ratePct: 1.236 },
  { date: "2009-11-04", ratePct: 1.238 },
  { date: "2009-11-05", ratePct: 1.237 },
  { date: "2009-11-06", ratePct: 1.236 },
  { date: "2009-11-09", ratePct: 1.231 },
  { date: "2009-11-10", ratePct: 1.229 },
  { date: "2009-11-11", ratePct: 1.23 },
  { date: "2009-11-12", ratePct: 1.226 },
  { date: "2009-11-13", ratePct: 1.224 },
  { date: "2009-11-16", ratePct: 1.222 },
  { date: "2009-11-17", ratePct: 1.223 },
  { date: "2009-11-18", ratePct: 1.224 },
  { date: "2009-11-19", ratePct: 1.224 },
  { date: "2009-11-20", ratePct: 1.224 },
  { date: "2009-11-23", ratePct: 1.233 },
  { date: "2009-11-24", ratePct: 1.231 },
  { date: "2009-11-25", ratePct: 1.235 },
  { date: "2009-11-26", ratePct: 1.236 },
  { date: "2009-11-27", ratePct: 1.232 },
  { date: "2009-11-30", ratePct: 1.234 },
  { date: "2009-12-01", ratePct: 1.236 },
  { date: "2009-12-02", ratePct: 1.235 },
  { date: "2009-12-03", ratePct: 1.241 },
  { date: "2009-12-04", ratePct: 1.239 },
  { date: "2009-12-07", ratePct: 1.245 },
  { date: "2009-12-08", ratePct: 1.242 },
  { date: "2009-12-09", ratePct: 1.242 },
  { date: "2009-12-10", ratePct: 1.243 },
  { date: "2009-12-11", ratePct: 1.245 },
  { date: "2009-12-14", ratePct: 1.247 },
  { date: "2009-12-15", ratePct: 1.248 },
  { date: "2009-12-16", ratePct: 1.246 },
  { date: "2009-12-17", ratePct: 1.242 },
  { date: "2009-12-18", ratePct: 1.24 },
  { date: "2009-12-21", ratePct: 1.24 },
  { date: "2009-12-22", ratePct: 1.241 },
  { date: "2009-12-23", ratePct: 1.239 },
  { date: "2009-12-24", ratePct: 1.241 },
  { date: "2009-12-28", ratePct: 1.241 },
  { date: "2009-12-29", ratePct: 1.245 },
  { date: "2009-12-30", ratePct: 1.247 },
  { date: "2009-12-31", ratePct: 1.248 },
  { date: "2010-01-04", ratePct: 1.251 },
  { date: "2010-01-05", ratePct: 1.249 },
  { date: "2010-01-06", ratePct: 1.246 },
  { date: "2010-01-07", ratePct: 1.243 },
  { date: "2010-01-08", ratePct: 1.242 },
  { date: "2010-01-11", ratePct: 1.239 },
  { date: "2010-01-12", ratePct: 1.236 },
  { date: "2010-01-13", ratePct: 1.236 },
  { date: "2010-01-14", ratePct: 1.235 },
  { date: "2010-01-15", ratePct: 1.228 },
  { date: "2010-01-18", ratePct: 1.225 },
  { date: "2010-01-19", ratePct: 1.227 },
  { date: "2010-01-20", ratePct: 1.226 },
  { date: "2010-01-21", ratePct: 1.225 },
  { date: "2010-01-22", ratePct: 1.222 },
  { date: "2010-01-25", ratePct: 1.222 },
  { date: "2010-01-26", ratePct: 1.22 },
  { date: "2010-01-27", ratePct: 1.22 },
  { date: "2010-01-28", ratePct: 1.226 },
  { date: "2010-01-29", ratePct: 1.225 },
  { date: "2010-02-01", ratePct: 1.226 },
  { date: "2010-02-02", ratePct: 1.228 },
  { date: "2010-02-03", ratePct: 1.228 },
  { date: "2010-02-04", ratePct: 1.228 },
  { date: "2010-02-05", ratePct: 1.222 },
  { date: "2010-02-08", ratePct: 1.222 },
  { date: "2010-02-09", ratePct: 1.227 },
  { date: "2010-02-10", ratePct: 1.227 },
  { date: "2010-02-11", ratePct: 1.229 },
  { date: "2010-02-12", ratePct: 1.228 },
  { date: "2010-02-15", ratePct: 1.224 },
  { date: "2010-02-16", ratePct: 1.224 },
  { date: "2010-02-17", ratePct: 1.225 },
  { date: "2010-02-18", ratePct: 1.224 },
  { date: "2010-02-19", ratePct: 1.227 },
  { date: "2010-02-22", ratePct: 1.228 },
  { date: "2010-02-23", ratePct: 1.228 },
  { date: "2010-02-24", ratePct: 1.226 },
  { date: "2010-02-25", ratePct: 1.218 },
  { date: "2010-02-26", ratePct: 1.215 },
  { date: "2010-03-01", ratePct: 1.216 },
  { date: "2010-03-02", ratePct: 1.215 },
  { date: "2010-03-03", ratePct: 1.214 },
  { date: "2010-03-04", ratePct: 1.218 },
  { date: "2010-03-05", ratePct: 1.216 },
  { date: "2010-03-08", ratePct: 1.218 },
  { date: "2010-03-09", ratePct: 1.216 },
  { date: "2010-03-10", ratePct: 1.216 },
  { date: "2010-03-11", ratePct: 1.218 },
  { date: "2010-03-12", ratePct: 1.221 },
  { date: "2010-03-15", ratePct: 1.219 },
  { date: "2010-03-16", ratePct: 1.217 },
  { date: "2010-03-17", ratePct: 1.215 },
  { date: "2010-03-18", ratePct: 1.214 },
  { date: "2010-03-19", ratePct: 1.214 },
  { date: "2010-03-22", ratePct: 1.214 },
  { date: "2010-03-23", ratePct: 1.213 },
  { date: "2010-03-24", ratePct: 1.212 },
  { date: "2010-03-25", ratePct: 1.212 },
  { date: "2010-03-26", ratePct: 1.214 },
  { date: "2010-03-29", ratePct: 1.213 },
  { date: "2010-03-30", ratePct: 1.211 },
  { date: "2010-03-31", ratePct: 1.212 },
  { date: "2010-04-01", ratePct: 1.214 },
  { date: "2010-04-06", ratePct: 1.222 },
  { date: "2010-04-07", ratePct: 1.223 },
  { date: "2010-04-08", ratePct: 1.221 },
  { date: "2010-04-09", ratePct: 1.221 },
  { date: "2010-04-12", ratePct: 1.224 },
  { date: "2010-04-13", ratePct: 1.226 },
  { date: "2010-04-14", ratePct: 1.226 },
  { date: "2010-04-15", ratePct: 1.225 },
  { date: "2010-04-16", ratePct: 1.224 },
  { date: "2010-04-19", ratePct: 1.221 },
  { date: "2010-04-20", ratePct: 1.222 },
  { date: "2010-04-21", ratePct: 1.222 },
  { date: "2010-04-22", ratePct: 1.223 },
  { date: "2010-04-23", ratePct: 1.226 },
  { date: "2010-04-26", ratePct: 1.228 },
  { date: "2010-04-27", ratePct: 1.228 },
  { date: "2010-04-28", ratePct: 1.235 },
  { date: "2010-04-29", ratePct: 1.236 },
  { date: "2010-04-30", ratePct: 1.236 },
  { date: "2010-05-03", ratePct: 1.239 },
  { date: "2010-05-04", ratePct: 1.24 },
  { date: "2010-05-05", ratePct: 1.242 },
  { date: "2010-05-06", ratePct: 1.242 },
  { date: "2010-05-07", ratePct: 1.249 },
  { date: "2010-05-10", ratePct: 1.245 },
  { date: "2010-05-11", ratePct: 1.244 },
  { date: "2010-05-12", ratePct: 1.244 },
  { date: "2010-05-13", ratePct: 1.243 },
  { date: "2010-05-14", ratePct: 1.242 },
  { date: "2010-05-17", ratePct: 1.246 },
  { date: "2010-05-18", ratePct: 1.247 },
  { date: "2010-05-19", ratePct: 1.249 },
  { date: "2010-05-20", ratePct: 1.253 },
  { date: "2010-05-21", ratePct: 1.257 },
  { date: "2010-05-24", ratePct: 1.259 },
  { date: "2010-05-25", ratePct: 1.262 },
  { date: "2010-05-26", ratePct: 1.258 },
  { date: "2010-05-27", ratePct: 1.257 },
  { date: "2010-05-28", ratePct: 1.258 },
  { date: "2010-05-31", ratePct: 1.26 },
  { date: "2010-06-01", ratePct: 1.262 },
  { date: "2010-06-02", ratePct: 1.266 },
  { date: "2010-06-03", ratePct: 1.268 },
  { date: "2010-06-04", ratePct: 1.268 },
  { date: "2010-06-07", ratePct: 1.268 },
  { date: "2010-06-08", ratePct: 1.268 },
  { date: "2010-06-09", ratePct: 1.269 },
  { date: "2010-06-10", ratePct: 1.27 },
  { date: "2010-06-11", ratePct: 1.271 },
  { date: "2010-06-14", ratePct: 1.273 },
  { date: "2010-06-15", ratePct: 1.276 },
  { date: "2010-06-16", ratePct: 1.278 },
  { date: "2010-06-17", ratePct: 1.281 },
  { date: "2010-06-18", ratePct: 1.285 },
  { date: "2010-06-21", ratePct: 1.289 },
  { date: "2010-06-22", ratePct: 1.292 },
  { date: "2010-06-23", ratePct: 1.296 },
  { date: "2010-06-24", ratePct: 1.296 },
  { date: "2010-06-25", ratePct: 1.298 },
  { date: "2010-06-28", ratePct: 1.303 },
  { date: "2010-06-29", ratePct: 1.306 },
  { date: "2010-06-30", ratePct: 1.306 },
  { date: "2010-07-01", ratePct: 1.32 },
  { date: "2010-07-02", ratePct: 1.329 },
  { date: "2010-07-05", ratePct: 1.329 },
  { date: "2010-07-06", ratePct: 1.331 },
  { date: "2010-07-07", ratePct: 1.334 },
  { date: "2010-07-08", ratePct: 1.34 },
  { date: "2010-07-09", ratePct: 1.351 },
  { date: "2010-07-12", ratePct: 1.356 },
  { date: "2010-07-13", ratePct: 1.358 },
  { date: "2010-07-14", ratePct: 1.363 },
  { date: "2010-07-15", ratePct: 1.369 },
  { date: "2010-07-16", ratePct: 1.38 },
  { date: "2010-07-19", ratePct: 1.39 },
  { date: "2010-07-20", ratePct: 1.393 },
  { date: "2010-07-21", ratePct: 1.398 },
  { date: "2010-07-22", ratePct: 1.399 },
  { date: "2010-07-23", ratePct: 1.402 },
  { date: "2010-07-26", ratePct: 1.407 },
  { date: "2010-07-27", ratePct: 1.413 },
  { date: "2010-07-28", ratePct: 1.416 },
  { date: "2010-07-29", ratePct: 1.419 },
  { date: "2010-07-30", ratePct: 1.417 },
  { date: "2010-08-02", ratePct: 1.418 },
  { date: "2010-08-03", ratePct: 1.419 },
  { date: "2010-08-04", ratePct: 1.421 },
  { date: "2010-08-05", ratePct: 1.425 },
  { date: "2010-08-06", ratePct: 1.428 },
  { date: "2010-08-09", ratePct: 1.427 },
  { date: "2010-08-10", ratePct: 1.428 },
  { date: "2010-08-11", ratePct: 1.427 },
  { date: "2010-08-12", ratePct: 1.423 },
  { date: "2010-08-13", ratePct: 1.423 },
  { date: "2010-08-16", ratePct: 1.421 },
  { date: "2010-08-17", ratePct: 1.421 },
  { date: "2010-08-18", ratePct: 1.423 },
  { date: "2010-08-19", ratePct: 1.424 },
  { date: "2010-08-20", ratePct: 1.42 },
  { date: "2010-08-23", ratePct: 1.418 },
  { date: "2010-08-24", ratePct: 1.417 },
  { date: "2010-08-25", ratePct: 1.417 },
  { date: "2010-08-26", ratePct: 1.417 },
  { date: "2010-08-27", ratePct: 1.417 },
  { date: "2010-08-30", ratePct: 1.415 },
  { date: "2010-08-31", ratePct: 1.414 },
  { date: "2010-09-01", ratePct: 1.411 },
  { date: "2010-09-02", ratePct: 1.413 },
  { date: "2010-09-03", ratePct: 1.414 },
  { date: "2010-09-06", ratePct: 1.413 },
  { date: "2010-09-07", ratePct: 1.412 },
  { date: "2010-09-08", ratePct: 1.413 },
  { date: "2010-09-09", ratePct: 1.415 },
  { date: "2010-09-10", ratePct: 1.418 },
  { date: "2010-09-13", ratePct: 1.42 },
  { date: "2010-09-14", ratePct: 1.419 },
  { date: "2010-09-15", ratePct: 1.422 },
  { date: "2010-09-16", ratePct: 1.425 },
  { date: "2010-09-17", ratePct: 1.427 },
  { date: "2010-09-20", ratePct: 1.427 },
  { date: "2010-09-21", ratePct: 1.428 },
  { date: "2010-09-22", ratePct: 1.425 },
  { date: "2010-09-23", ratePct: 1.422 },
  { date: "2010-09-24", ratePct: 1.422 },
  { date: "2010-09-27", ratePct: 1.422 },
  { date: "2010-09-28", ratePct: 1.424 },
  { date: "2010-09-29", ratePct: 1.425 },
  { date: "2010-09-30", ratePct: 1.433 },
  { date: "2010-10-01", ratePct: 1.464 },
  { date: "2010-10-04", ratePct: 1.468 },
  { date: "2010-10-05", ratePct: 1.468 },
  { date: "2010-10-06", ratePct: 1.468 },
  { date: "2010-10-07", ratePct: 1.472 },
  { date: "2010-10-08", ratePct: 1.473 },
  { date: "2010-10-11", ratePct: 1.474 },
  { date: "2010-10-12", ratePct: 1.475 },
  { date: "2010-10-13", ratePct: 1.48 },
  { date: "2010-10-14", ratePct: 1.48 },
  { date: "2010-10-15", ratePct: 1.486 },
  { date: "2010-10-18", ratePct: 1.492 },
  { date: "2010-10-19", ratePct: 1.499 },
  { date: "2010-10-20", ratePct: 1.506 },
  { date: "2010-10-21", ratePct: 1.514 },
  { date: "2010-10-22", ratePct: 1.519 },
  { date: "2010-10-25", ratePct: 1.521 },
  { date: "2010-10-26", ratePct: 1.529 },
  { date: "2010-10-27", ratePct: 1.537 },
  { date: "2010-10-28", ratePct: 1.538 },
  { date: "2010-10-29", ratePct: 1.54 },
  { date: "2010-11-01", ratePct: 1.54 },
  { date: "2010-11-02", ratePct: 1.542 },
  { date: "2010-11-03", ratePct: 1.544 },
  { date: "2010-11-04", ratePct: 1.544 },
  { date: "2010-11-05", ratePct: 1.543 },
  { date: "2010-11-08", ratePct: 1.545 },
  { date: "2010-11-09", ratePct: 1.546 },
  { date: "2010-11-10", ratePct: 1.546 },
  { date: "2010-11-11", ratePct: 1.546 },
  { date: "2010-11-12", ratePct: 1.546 },
  { date: "2010-11-15", ratePct: 1.546 },
  { date: "2010-11-16", ratePct: 1.545 },
  { date: "2010-11-17", ratePct: 1.544 },
  { date: "2010-11-18", ratePct: 1.541 },
  { date: "2010-11-19", ratePct: 1.54 },
  { date: "2010-11-22", ratePct: 1.54 },
  { date: "2010-11-23", ratePct: 1.536 },
  { date: "2010-11-24", ratePct: 1.531 },
  { date: "2010-11-25", ratePct: 1.533 },
  { date: "2010-11-26", ratePct: 1.531 },
  { date: "2010-11-29", ratePct: 1.532 },
  { date: "2010-11-30", ratePct: 1.53 },
  { date: "2010-12-01", ratePct: 1.528 },
  { date: "2010-12-02", ratePct: 1.528 },
  { date: "2010-12-03", ratePct: 1.526 },
  { date: "2010-12-06", ratePct: 1.524 },
  { date: "2010-12-07", ratePct: 1.525 },
  { date: "2010-12-08", ratePct: 1.526 },
  { date: "2010-12-09", ratePct: 1.528 },
  { date: "2010-12-10", ratePct: 1.53 },
  { date: "2010-12-13", ratePct: 1.533 },
  { date: "2010-12-14", ratePct: 1.53 },
  { date: "2010-12-15", ratePct: 1.531 },
  { date: "2010-12-16", ratePct: 1.533 },
  { date: "2010-12-17", ratePct: 1.533 },
  { date: "2010-12-20", ratePct: 1.533 },
  { date: "2010-12-21", ratePct: 1.533 },
  { date: "2010-12-22", ratePct: 1.534 },
  { date: "2010-12-23", ratePct: 1.526 },
  { date: "2010-12-24", ratePct: 1.521 },
  { date: "2010-12-27", ratePct: 1.52 },
  { date: "2010-12-28", ratePct: 1.519 },
  { date: "2010-12-29", ratePct: 1.517 },
  { date: "2010-12-30", ratePct: 1.514 },
  { date: "2010-12-31", ratePct: 1.507 },
  { date: "2011-01-03", ratePct: 1.504 },
  { date: "2011-01-04", ratePct: 1.504 },
  { date: "2011-01-05", ratePct: 1.504 },
  { date: "2011-01-06", ratePct: 1.506 },
  { date: "2011-01-07", ratePct: 1.505 },
  { date: "2011-01-10", ratePct: 1.506 },
  { date: "2011-01-11", ratePct: 1.505 },
  { date: "2011-01-12", ratePct: 1.508 },
  { date: "2011-01-13", ratePct: 1.513 },
  { date: "2011-01-14", ratePct: 1.536 },
  { date: "2011-01-17", ratePct: 1.544 },
  { date: "2011-01-18", ratePct: 1.552 },
  { date: "2011-01-19", ratePct: 1.556 },
  { date: "2011-01-20", ratePct: 1.562 },
  { date: "2011-01-21", ratePct: 1.578 },
  { date: "2011-01-24", ratePct: 1.586 },
  { date: "2011-01-25", ratePct: 1.591 },
  { date: "2011-01-26", ratePct: 1.605 },
  { date: "2011-01-27", ratePct: 1.615 },
  { date: "2011-01-28", ratePct: 1.625 },
  { date: "2011-01-31", ratePct: 1.644 },
  { date: "2011-02-01", ratePct: 1.66 },
  { date: "2011-02-02", ratePct: 1.666 },
  { date: "2011-02-03", ratePct: 1.678 },
  { date: "2011-02-04", ratePct: 1.682 },
  { date: "2011-02-07", ratePct: 1.684 },
  { date: "2011-02-08", ratePct: 1.683 },
  { date: "2011-02-09", ratePct: 1.7 },
  { date: "2011-02-10", ratePct: 1.708 },
  { date: "2011-02-11", ratePct: 1.714 },
  { date: "2011-02-14", ratePct: 1.716 },
  { date: "2011-02-15", ratePct: 1.72 },
  { date: "2011-02-16", ratePct: 1.725 },
  { date: "2011-02-17", ratePct: 1.721 },
  { date: "2011-02-18", ratePct: 1.721 },
  { date: "2011-02-21", ratePct: 1.731 },
  { date: "2011-02-22", ratePct: 1.739 },
  { date: "2011-02-23", ratePct: 1.748 },
  { date: "2011-02-24", ratePct: 1.752 },
  { date: "2011-02-25", ratePct: 1.765 },
  { date: "2011-02-28", ratePct: 1.767 },
  { date: "2011-03-01", ratePct: 1.773 },
  { date: "2011-03-02", ratePct: 1.775 },
  { date: "2011-03-03", ratePct: 1.78 },
  { date: "2011-03-04", ratePct: 1.924 },
  { date: "2011-03-07", ratePct: 1.938 },
  { date: "2011-03-08", ratePct: 1.946 },
  { date: "2011-03-09", ratePct: 1.95 },
  { date: "2011-03-10", ratePct: 1.949 },
  { date: "2011-03-11", ratePct: 1.944 },
  { date: "2011-03-14", ratePct: 1.94 },
  { date: "2011-03-15", ratePct: 1.913 },
  { date: "2011-03-16", ratePct: 1.915 },
  { date: "2011-03-17", ratePct: 1.913 },
  { date: "2011-03-18", ratePct: 1.916 },
  { date: "2011-03-21", ratePct: 1.93 },
  { date: "2011-03-22", ratePct: 1.945 },
  { date: "2011-03-23", ratePct: 1.949 },
  { date: "2011-03-24", ratePct: 1.953 },
  { date: "2011-03-25", ratePct: 1.962 },
  { date: "2011-03-28", ratePct: 1.971 },
  { date: "2011-03-29", ratePct: 1.98 },
  { date: "2011-03-30", ratePct: 1.992 },
  { date: "2011-03-31", ratePct: 1.996 },
  { date: "2011-04-01", ratePct: 2.013 },
  { date: "2011-04-04", ratePct: 2.021 },
  { date: "2011-04-05", ratePct: 2.025 },
  { date: "2011-04-06", ratePct: 2.033 },
  { date: "2011-04-07", ratePct: 2.042 },
  { date: "2011-04-08", ratePct: 2.057 },
  { date: "2011-04-11", ratePct: 2.083 },
  { date: "2011-04-12", ratePct: 2.093 },
  { date: "2011-04-13", ratePct: 2.099 },
  { date: "2011-04-14", ratePct: 2.102 },
  { date: "2011-04-15", ratePct: 2.104 },
  { date: "2011-04-18", ratePct: 2.106 },
  { date: "2011-04-19", ratePct: 2.108 },
  { date: "2011-04-20", ratePct: 2.118 },
  { date: "2011-04-21", ratePct: 2.126 },
  { date: "2011-04-26", ratePct: 2.118 },
  { date: "2011-04-27", ratePct: 2.118 },
  { date: "2011-04-28", ratePct: 2.128 },
  { date: "2011-04-29", ratePct: 2.132 },
  { date: "2011-05-02", ratePct: 2.139 },
  { date: "2011-05-03", ratePct: 2.143 },
  { date: "2011-05-04", ratePct: 2.157 },
  { date: "2011-05-05", ratePct: 2.173 },
  { date: "2011-05-06", ratePct: 2.152 },
  { date: "2011-05-09", ratePct: 2.151 },
  { date: "2011-05-10", ratePct: 2.15 },
  { date: "2011-05-11", ratePct: 2.141 },
  { date: "2011-05-12", ratePct: 2.136 },
  { date: "2011-05-13", ratePct: 2.141 },
  { date: "2011-05-16", ratePct: 2.145 },
  { date: "2011-05-17", ratePct: 2.149 },
  { date: "2011-05-18", ratePct: 2.153 },
  { date: "2011-05-19", ratePct: 2.157 },
  { date: "2011-05-20", ratePct: 2.159 },
  { date: "2011-05-23", ratePct: 2.15 },
  { date: "2011-05-24", ratePct: 2.15 },
  { date: "2011-05-25", ratePct: 2.144 },
  { date: "2011-05-26", ratePct: 2.142 },
  { date: "2011-05-27", ratePct: 2.135 },
  { date: "2011-05-30", ratePct: 2.132 },
  { date: "2011-05-31", ratePct: 2.138 },
  { date: "2011-06-01", ratePct: 2.137 },
  { date: "2011-06-02", ratePct: 2.137 },
  { date: "2011-06-03", ratePct: 2.139 },
  { date: "2011-06-06", ratePct: 2.14 },
  { date: "2011-06-07", ratePct: 2.141 },
  { date: "2011-06-08", ratePct: 2.151 },
  { date: "2011-06-09", ratePct: 2.157 },
  { date: "2011-06-10", ratePct: 2.145 },
  { date: "2011-06-13", ratePct: 2.139 },
  { date: "2011-06-14", ratePct: 2.137 },
  { date: "2011-06-15", ratePct: 2.141 },
  { date: "2011-06-16", ratePct: 2.14 },
  { date: "2011-06-17", ratePct: 2.142 },
  { date: "2011-06-20", ratePct: 2.144 },
  { date: "2011-06-21", ratePct: 2.146 },
  { date: "2011-06-22", ratePct: 2.148 },
  { date: "2011-06-23", ratePct: 2.147 },
  { date: "2011-06-24", ratePct: 2.145 },
  { date: "2011-06-27", ratePct: 2.14 },
  { date: "2011-06-28", ratePct: 2.143 },
  { date: "2011-06-29", ratePct: 2.15 },
  { date: "2011-06-30", ratePct: 2.162 },
  { date: "2011-07-01", ratePct: 2.172 },
  { date: "2011-07-04", ratePct: 2.18 },
  { date: "2011-07-05", ratePct: 2.187 },
  { date: "2011-07-06", ratePct: 2.189 },
  { date: "2011-07-07", ratePct: 2.195 },
  { date: "2011-07-08", ratePct: 2.201 },
  { date: "2011-07-11", ratePct: 2.195 },
  { date: "2011-07-12", ratePct: 2.178 },
  { date: "2011-07-13", ratePct: 2.177 },
  { date: "2011-07-14", ratePct: 2.176 },
  { date: "2011-07-15", ratePct: 2.171 },
  { date: "2011-07-18", ratePct: 2.169 },
  { date: "2011-07-19", ratePct: 2.169 },
  { date: "2011-07-20", ratePct: 2.17 },
  { date: "2011-07-21", ratePct: 2.177 },
  { date: "2011-07-22", ratePct: 2.192 },
  { date: "2011-07-25", ratePct: 2.193 },
  { date: "2011-07-26", ratePct: 2.194 },
  { date: "2011-07-27", ratePct: 2.19 },
  { date: "2011-07-28", ratePct: 2.183 },
  { date: "2011-07-29", ratePct: 2.178 },
  { date: "2011-08-01", ratePct: 2.177 },
  { date: "2011-08-02", ratePct: 2.175 },
  { date: "2011-08-03", ratePct: 2.172 },
  { date: "2011-08-04", ratePct: 2.173 },
  { date: "2011-08-05", ratePct: 2.106 },
  { date: "2011-08-08", ratePct: 2.102 },
  { date: "2011-08-09", ratePct: 2.086 },
  { date: "2011-08-10", ratePct: 2.083 },
  { date: "2011-08-11", ratePct: 2.063 },
  { date: "2011-08-12", ratePct: 2.067 },
  { date: "2011-08-15", ratePct: 2.078 },
  { date: "2011-08-16", ratePct: 2.08 },
  { date: "2011-08-17", ratePct: 2.078 },
  { date: "2011-08-18", ratePct: 2.073 },
  { date: "2011-08-19", ratePct: 2.066 },
  { date: "2011-08-22", ratePct: 2.07 },
  { date: "2011-08-23", ratePct: 2.075 },
  { date: "2011-08-24", ratePct: 2.079 },
  { date: "2011-08-25", ratePct: 2.085 },
  { date: "2011-08-26", ratePct: 2.083 },
  { date: "2011-08-29", ratePct: 2.084 },
  { date: "2011-08-30", ratePct: 2.085 },
  { date: "2011-08-31", ratePct: 2.089 },
  { date: "2011-09-01", ratePct: 2.089 },
  { date: "2011-09-02", ratePct: 2.083 },
  { date: "2011-09-05", ratePct: 2.071 },
  { date: "2011-09-06", ratePct: 2.066 },
  { date: "2011-09-07", ratePct: 2.067 },
  { date: "2011-09-08", ratePct: 2.067 },
  { date: "2011-09-09", ratePct: 2.059 },
  { date: "2011-09-12", ratePct: 2.051 },
  { date: "2011-09-13", ratePct: 2.052 },
  { date: "2011-09-14", ratePct: 2.058 },
  { date: "2011-09-15", ratePct: 2.066 },
  { date: "2011-09-16", ratePct: 2.068 },
  { date: "2011-09-19", ratePct: 2.064 },
  { date: "2011-09-20", ratePct: 2.065 },
  { date: "2011-09-21", ratePct: 2.065 },
  { date: "2011-09-22", ratePct: 2.06 },
  { date: "2011-09-23", ratePct: 2.06 },
  { date: "2011-09-26", ratePct: 2.057 },
  { date: "2011-09-27", ratePct: 2.064 },
  { date: "2011-09-28", ratePct: 2.075 },
  { date: "2011-09-29", ratePct: 2.081 },
  { date: "2011-09-30", ratePct: 2.084 },
  { date: "2011-10-03", ratePct: 2.085 },
  { date: "2011-10-04", ratePct: 2.083 },
  { date: "2011-10-05", ratePct: 2.083 },
  { date: "2011-10-06", ratePct: 2.082 },
  { date: "2011-10-07", ratePct: 2.1 },
  { date: "2011-10-10", ratePct: 2.102 },
  { date: "2011-10-11", ratePct: 2.106 },
  { date: "2011-10-12", ratePct: 2.109 },
  { date: "2011-10-13", ratePct: 2.111 },
  { date: "2011-10-14", ratePct: 2.115 },
  { date: "2011-10-17", ratePct: 2.122 },
  { date: "2011-10-18", ratePct: 2.117 },
  { date: "2011-10-19", ratePct: 2.122 },
  { date: "2011-10-20", ratePct: 2.123 },
  { date: "2011-10-21", ratePct: 2.122 },
  { date: "2011-10-24", ratePct: 2.121 },
  { date: "2011-10-25", ratePct: 2.124 },
  { date: "2011-10-26", ratePct: 2.117 },
  { date: "2011-10-27", ratePct: 2.119 },
  { date: "2011-10-28", ratePct: 2.129 },
  { date: "2011-10-31", ratePct: 2.121 },
  { date: "2011-11-01", ratePct: 2.111 },
  { date: "2011-11-02", ratePct: 2.109 },
  { date: "2011-11-03", ratePct: 2.105 },
  { date: "2011-11-04", ratePct: 2.044 },
  { date: "2011-11-07", ratePct: 2.039 },
  { date: "2011-11-08", ratePct: 2.04 },
  { date: "2011-11-09", ratePct: 2.036 },
  { date: "2011-11-10", ratePct: 2.033 },
  { date: "2011-11-11", ratePct: 2.032 },
  { date: "2011-11-14", ratePct: 2.026 },
  { date: "2011-11-15", ratePct: 2.022 },
  { date: "2011-11-16", ratePct: 2.021 },
  { date: "2011-11-17", ratePct: 2.024 },
  { date: "2011-11-18", ratePct: 2.031 },
  { date: "2011-11-21", ratePct: 2.029 },
  { date: "2011-11-22", ratePct: 2.03 },
  { date: "2011-11-23", ratePct: 2.033 },
  { date: "2011-11-24", ratePct: 2.038 },
  { date: "2011-11-25", ratePct: 2.042 },
  { date: "2011-11-28", ratePct: 2.044 },
  { date: "2011-11-29", ratePct: 2.042 },
  { date: "2011-11-30", ratePct: 2.035 },
  { date: "2011-12-01", ratePct: 2.03 },
  { date: "2011-12-02", ratePct: 2.033 },
  { date: "2011-12-05", ratePct: 2.036 },
  { date: "2011-12-06", ratePct: 2.04 },
  { date: "2011-12-07", ratePct: 2.039 },
  { date: "2011-12-08", ratePct: 2.034 },
  { date: "2011-12-09", ratePct: 2.012 },
  { date: "2011-12-12", ratePct: 2.008 },
  { date: "2011-12-13", ratePct: 2.008 },
  { date: "2011-12-14", ratePct: 2.005 },
  { date: "2011-12-15", ratePct: 2.001 },
  { date: "2011-12-16", ratePct: 2.001 },
  { date: "2011-12-19", ratePct: 2.002 },
  { date: "2011-12-20", ratePct: 2 },
  { date: "2011-12-21", ratePct: 1.997 },
  { date: "2011-12-22", ratePct: 1.995 },
  { date: "2011-12-23", ratePct: 1.988 },
  { date: "2011-12-27", ratePct: 1.976 },
  { date: "2011-12-28", ratePct: 1.967 },
  { date: "2011-12-29", ratePct: 1.955 },
  { date: "2011-12-30", ratePct: 1.947 },
  { date: "2012-01-02", ratePct: 1.937 },
  { date: "2012-01-03", ratePct: 1.93 },
  { date: "2012-01-04", ratePct: 1.918 },
  { date: "2012-01-05", ratePct: 1.903 },
  { date: "2012-01-06", ratePct: 1.89 },
  { date: "2012-01-09", ratePct: 1.882 },
  { date: "2012-01-10", ratePct: 1.875 },
  { date: "2012-01-11", ratePct: 1.868 },
  { date: "2012-01-12", ratePct: 1.856 },
  { date: "2012-01-13", ratePct: 1.842 },
  { date: "2012-01-16", ratePct: 1.832 },
  { date: "2012-01-17", ratePct: 1.826 },
  { date: "2012-01-18", ratePct: 1.818 },
  { date: "2012-01-19", ratePct: 1.812 },
  { date: "2012-01-20", ratePct: 1.804 },
  { date: "2012-01-23", ratePct: 1.793 },
  { date: "2012-01-24", ratePct: 1.784 },
  { date: "2012-01-25", ratePct: 1.779 },
  { date: "2012-01-26", ratePct: 1.773 },
  { date: "2012-01-27", ratePct: 1.768 },
  { date: "2012-01-30", ratePct: 1.762 },
  { date: "2012-01-31", ratePct: 1.754 },
  { date: "2012-02-01", ratePct: 1.745 },
  { date: "2012-02-02", ratePct: 1.737 },
  { date: "2012-02-03", ratePct: 1.732 },
  { date: "2012-02-06", ratePct: 1.725 },
  { date: "2012-02-07", ratePct: 1.717 },
  { date: "2012-02-08", ratePct: 1.71 },
  { date: "2012-02-09", ratePct: 1.702 },
  { date: "2012-02-10", ratePct: 1.697 },
  { date: "2012-02-13", ratePct: 1.691 },
  { date: "2012-02-14", ratePct: 1.684 },
  { date: "2012-02-15", ratePct: 1.675 },
  { date: "2012-02-16", ratePct: 1.669 },
  { date: "2012-02-17", ratePct: 1.664 },
  { date: "2012-02-20", ratePct: 1.658 },
  { date: "2012-02-21", ratePct: 1.652 },
  { date: "2012-02-22", ratePct: 1.648 },
  { date: "2012-02-23", ratePct: 1.642 },
  { date: "2012-02-24", ratePct: 1.636 },
  { date: "2012-02-27", ratePct: 1.627 },
  { date: "2012-02-28", ratePct: 1.62 },
  { date: "2012-02-29", ratePct: 1.614 },
  { date: "2012-03-01", ratePct: 1.599 },
  { date: "2012-03-02", ratePct: 1.584 },
  { date: "2012-03-05", ratePct: 1.572 },
  { date: "2012-03-06", ratePct: 1.561 },
  { date: "2012-03-07", ratePct: 1.552 },
  { date: "2012-03-08", ratePct: 1.544 },
  { date: "2012-03-09", ratePct: 1.535 },
  { date: "2012-03-12", ratePct: 1.527 },
  { date: "2012-03-13", ratePct: 1.519 },
  { date: "2012-03-14", ratePct: 1.513 },
  { date: "2012-03-15", ratePct: 1.505 },
  { date: "2012-03-16", ratePct: 1.495 },
  { date: "2012-03-19", ratePct: 1.485 },
  { date: "2012-03-20", ratePct: 1.474 },
  { date: "2012-03-21", ratePct: 1.464 },
  { date: "2012-03-22", ratePct: 1.455 },
  { date: "2012-03-23", ratePct: 1.448 },
  { date: "2012-03-26", ratePct: 1.44 },
  { date: "2012-03-27", ratePct: 1.433 },
  { date: "2012-03-28", ratePct: 1.426 },
  { date: "2012-03-29", ratePct: 1.42 },
  { date: "2012-03-30", ratePct: 1.416 },
  { date: "2012-04-02", ratePct: 1.41 },
  { date: "2012-04-03", ratePct: 1.407 },
  { date: "2012-04-04", ratePct: 1.405 },
  { date: "2012-04-05", ratePct: 1.402 },
  { date: "2012-04-10", ratePct: 1.398 },
  { date: "2012-04-11", ratePct: 1.393 },
  { date: "2012-04-12", ratePct: 1.387 },
  { date: "2012-04-13", ratePct: 1.381 },
  { date: "2012-04-16", ratePct: 1.375 },
  { date: "2012-04-17", ratePct: 1.372 },
  { date: "2012-04-18", ratePct: 1.364 },
  { date: "2012-04-19", ratePct: 1.357 },
  { date: "2012-04-20", ratePct: 1.352 },
  { date: "2012-04-23", ratePct: 1.348 },
  { date: "2012-04-24", ratePct: 1.342 },
  { date: "2012-04-25", ratePct: 1.335 },
  { date: "2012-04-26", ratePct: 1.329 },
  { date: "2012-04-27", ratePct: 1.321 },
  { date: "2012-04-30", ratePct: 1.311 },
  { date: "2012-05-02", ratePct: 1.303 },
  { date: "2012-05-03", ratePct: 1.295 },
  { date: "2012-05-04", ratePct: 1.288 },
  { date: "2012-05-07", ratePct: 1.284 },
  { date: "2012-05-08", ratePct: 1.281 },
  { date: "2012-05-09", ratePct: 1.277 },
  { date: "2012-05-10", ratePct: 1.276 },
  { date: "2012-05-11", ratePct: 1.276 },
  { date: "2012-05-14", ratePct: 1.276 },
  { date: "2012-05-15", ratePct: 1.272 },
  { date: "2012-05-16", ratePct: 1.268 },
  { date: "2012-05-17", ratePct: 1.267 },
  { date: "2012-05-18", ratePct: 1.265 },
  { date: "2012-05-21", ratePct: 1.264 },
  { date: "2012-05-22", ratePct: 1.259 },
  { date: "2012-05-23", ratePct: 1.255 },
  { date: "2012-05-24", ratePct: 1.25 },
  { date: "2012-05-25", ratePct: 1.246 },
  { date: "2012-05-28", ratePct: 1.242 },
  { date: "2012-05-29", ratePct: 1.24 },
  { date: "2012-05-30", ratePct: 1.237 },
  { date: "2012-05-31", ratePct: 1.232 },
  { date: "2012-06-01", ratePct: 1.228 },
  { date: "2012-06-04", ratePct: 1.224 },
  { date: "2012-06-05", ratePct: 1.223 },
  { date: "2012-06-06", ratePct: 1.221 },
  { date: "2012-06-07", ratePct: 1.223 },
  { date: "2012-06-08", ratePct: 1.222 },
  { date: "2012-06-11", ratePct: 1.222 },
  { date: "2012-06-12", ratePct: 1.223 },
  { date: "2012-06-13", ratePct: 1.224 },
  { date: "2012-06-14", ratePct: 1.226 },
  { date: "2012-06-15", ratePct: 1.226 },
  { date: "2012-06-18", ratePct: 1.221 },
  { date: "2012-06-19", ratePct: 1.214 },
  { date: "2012-06-20", ratePct: 1.214 },
  { date: "2012-06-21", ratePct: 1.214 },
  { date: "2012-06-22", ratePct: 1.212 },
  { date: "2012-06-25", ratePct: 1.212 },
  { date: "2012-06-26", ratePct: 1.213 },
  { date: "2012-06-27", ratePct: 1.212 },
  { date: "2012-06-28", ratePct: 1.213 },
  { date: "2012-06-29", ratePct: 1.213 },
  { date: "2012-07-02", ratePct: 1.213 },
  { date: "2012-07-03", ratePct: 1.21 },
  { date: "2012-07-04", ratePct: 1.206 },
  { date: "2012-07-05", ratePct: 1.202 },
  { date: "2012-07-06", ratePct: 1.118 },
  { date: "2012-07-09", ratePct: 1.104 },
  { date: "2012-07-10", ratePct: 1.095 },
  { date: "2012-07-11", ratePct: 1.084 },
  { date: "2012-07-12", ratePct: 1.066 },
  { date: "2012-07-13", ratePct: 1.054 },
  { date: "2012-07-16", ratePct: 1.044 },
  { date: "2012-07-17", ratePct: 1.036 },
  { date: "2012-07-18", ratePct: 1.03 },
  { date: "2012-07-19", ratePct: 1.021 },
  { date: "2012-07-20", ratePct: 1.011 },
  { date: "2012-07-23", ratePct: 1 },
  { date: "2012-07-24", ratePct: 0.994 },
  { date: "2012-07-25", ratePct: 0.989 },
  { date: "2012-07-26", ratePct: 0.983 },
  { date: "2012-07-27", ratePct: 0.976 },
  { date: "2012-07-30", ratePct: 0.956 },
  { date: "2012-07-31", ratePct: 0.946 },
  { date: "2012-08-01", ratePct: 0.937 },
  { date: "2012-08-02", ratePct: 0.929 },
  { date: "2012-08-03", ratePct: 0.93 },
  { date: "2012-08-06", ratePct: 0.927 },
  { date: "2012-08-07", ratePct: 0.922 },
  { date: "2012-08-08", ratePct: 0.918 },
  { date: "2012-08-09", ratePct: 0.91 },
  { date: "2012-08-10", ratePct: 0.903 },
  { date: "2012-08-13", ratePct: 0.897 },
  { date: "2012-08-14", ratePct: 0.893 },
  { date: "2012-08-15", ratePct: 0.887 },
  { date: "2012-08-16", ratePct: 0.882 },
  { date: "2012-08-17", ratePct: 0.875 },
  { date: "2012-08-20", ratePct: 0.867 },
  { date: "2012-08-21", ratePct: 0.86 },
  { date: "2012-08-22", ratePct: 0.852 },
  { date: "2012-08-23", ratePct: 0.844 },
  { date: "2012-08-24", ratePct: 0.836 },
  { date: "2012-08-27", ratePct: 0.832 },
  { date: "2012-08-28", ratePct: 0.825 },
  { date: "2012-08-29", ratePct: 0.819 },
  { date: "2012-08-30", ratePct: 0.812 },
  { date: "2012-08-31", ratePct: 0.805 },
  { date: "2012-09-03", ratePct: 0.798 },
  { date: "2012-09-04", ratePct: 0.791 },
  { date: "2012-09-05", ratePct: 0.782 },
  { date: "2012-09-06", ratePct: 0.776 },
  { date: "2012-09-07", ratePct: 0.773 },
  { date: "2012-09-10", ratePct: 0.766 },
  { date: "2012-09-11", ratePct: 0.759 },
  { date: "2012-09-12", ratePct: 0.753 },
  { date: "2012-09-13", ratePct: 0.75 },
  { date: "2012-09-14", ratePct: 0.746 },
  { date: "2012-09-17", ratePct: 0.742 },
  { date: "2012-09-18", ratePct: 0.735 },
  { date: "2012-09-19", ratePct: 0.728 },
  { date: "2012-09-20", ratePct: 0.719 },
  { date: "2012-09-21", ratePct: 0.711 },
  { date: "2012-09-24", ratePct: 0.703 },
  { date: "2012-09-25", ratePct: 0.697 },
  { date: "2012-09-26", ratePct: 0.694 },
  { date: "2012-09-27", ratePct: 0.69 },
  { date: "2012-09-28", ratePct: 0.684 },
  { date: "2012-10-01", ratePct: 0.685 },
  { date: "2012-10-02", ratePct: 0.681 },
  { date: "2012-10-03", ratePct: 0.677 },
  { date: "2012-10-04", ratePct: 0.675 },
  { date: "2012-10-05", ratePct: 0.67 },
  { date: "2012-10-08", ratePct: 0.666 },
  { date: "2012-10-09", ratePct: 0.662 },
  { date: "2012-10-10", ratePct: 0.659 },
  { date: "2012-10-11", ratePct: 0.655 },
  { date: "2012-10-12", ratePct: 0.654 },
  { date: "2012-10-15", ratePct: 0.652 },
  { date: "2012-10-16", ratePct: 0.651 },
  { date: "2012-10-17", ratePct: 0.648 },
  { date: "2012-10-18", ratePct: 0.643 },
  { date: "2012-10-19", ratePct: 0.641 },
  { date: "2012-10-22", ratePct: 0.64 },
  { date: "2012-10-23", ratePct: 0.638 },
  { date: "2012-10-24", ratePct: 0.634 },
  { date: "2012-10-25", ratePct: 0.631 },
  { date: "2012-10-26", ratePct: 0.627 },
  { date: "2012-10-29", ratePct: 0.624 },
  { date: "2012-10-30", ratePct: 0.621 },
  { date: "2012-10-31", ratePct: 0.618 },
  { date: "2012-11-01", ratePct: 0.615 },
  { date: "2012-11-02", ratePct: 0.611 },
  { date: "2012-11-05", ratePct: 0.607 },
  { date: "2012-11-06", ratePct: 0.602 },
  { date: "2012-11-07", ratePct: 0.597 },
  { date: "2012-11-08", ratePct: 0.592 },
  { date: "2012-11-09", ratePct: 0.589 },
  { date: "2012-11-12", ratePct: 0.587 },
  { date: "2012-11-13", ratePct: 0.586 },
  { date: "2012-11-14", ratePct: 0.585 },
  { date: "2012-11-15", ratePct: 0.584 },
  { date: "2012-11-16", ratePct: 0.583 },
  { date: "2012-11-19", ratePct: 0.582 },
  { date: "2012-11-20", ratePct: 0.582 },
  { date: "2012-11-21", ratePct: 0.582 },
  { date: "2012-11-22", ratePct: 0.581 },
  { date: "2012-11-23", ratePct: 0.581 },
  { date: "2012-11-26", ratePct: 0.58 },
  { date: "2012-11-27", ratePct: 0.58 },
  { date: "2012-11-28", ratePct: 0.578 },
  { date: "2012-11-29", ratePct: 0.576 },
  { date: "2012-11-30", ratePct: 0.574 },
  { date: "2012-12-03", ratePct: 0.574 },
  { date: "2012-12-04", ratePct: 0.574 },
  { date: "2012-12-05", ratePct: 0.573 },
  { date: "2012-12-06", ratePct: 0.57 },
  { date: "2012-12-07", ratePct: 0.558 },
  { date: "2012-12-10", ratePct: 0.547 },
  { date: "2012-12-11", ratePct: 0.54 },
  { date: "2012-12-12", ratePct: 0.54 },
  { date: "2012-12-13", ratePct: 0.539 },
  { date: "2012-12-14", ratePct: 0.537 },
  { date: "2012-12-17", ratePct: 0.539 },
  { date: "2012-12-18", ratePct: 0.54 },
  { date: "2012-12-19", ratePct: 0.542 },
  { date: "2012-12-20", ratePct: 0.543 },
  { date: "2012-12-21", ratePct: 0.543 },
  { date: "2012-12-24", ratePct: 0.544 },
  { date: "2012-12-27", ratePct: 0.543 },
  { date: "2012-12-28", ratePct: 0.543 },
  { date: "2012-12-31", ratePct: 0.542 },
  { date: "2013-01-02", ratePct: 0.543 },
  { date: "2013-01-03", ratePct: 0.544 },
  { date: "2013-01-04", ratePct: 0.549 },
  { date: "2013-01-07", ratePct: 0.55 },
  { date: "2013-01-08", ratePct: 0.551 },
  { date: "2013-01-09", ratePct: 0.551 },
  { date: "2013-01-10", ratePct: 0.55 },
  { date: "2013-01-11", ratePct: 0.559 },
  { date: "2013-01-14", ratePct: 0.566 },
  { date: "2013-01-15", ratePct: 0.57 },
  { date: "2013-01-16", ratePct: 0.57 },
  { date: "2013-01-17", ratePct: 0.574 },
  { date: "2013-01-18", ratePct: 0.587 },
  { date: "2013-01-21", ratePct: 0.587 },
  { date: "2013-01-22", ratePct: 0.586 },
  { date: "2013-01-23", ratePct: 0.586 },
  { date: "2013-01-24", ratePct: 0.585 },
  { date: "2013-01-25", ratePct: 0.59 },
  { date: "2013-01-28", ratePct: 0.609 },
  { date: "2013-01-29", ratePct: 0.611 },
  { date: "2013-01-30", ratePct: 0.619 },
  { date: "2013-01-31", ratePct: 0.62 },
  { date: "2013-02-01", ratePct: 0.622 },
  { date: "2013-02-04", ratePct: 0.621 },
  { date: "2013-02-05", ratePct: 0.618 },
  { date: "2013-02-06", ratePct: 0.616 },
  { date: "2013-02-07", ratePct: 0.617 },
  { date: "2013-02-08", ratePct: 0.609 },
  { date: "2013-02-11", ratePct: 0.606 },
  { date: "2013-02-12", ratePct: 0.604 },
  { date: "2013-02-13", ratePct: 0.602 },
  { date: "2013-02-14", ratePct: 0.598 },
  { date: "2013-02-15", ratePct: 0.593 },
  { date: "2013-02-18", ratePct: 0.589 },
  { date: "2013-02-19", ratePct: 0.586 },
  { date: "2013-02-20", ratePct: 0.585 },
  { date: "2013-02-21", ratePct: 0.583 },
  { date: "2013-02-22", ratePct: 0.581 },
  { date: "2013-02-25", ratePct: 0.571 },
  { date: "2013-02-26", ratePct: 0.565 },
  { date: "2013-02-27", ratePct: 0.56 },
  { date: "2013-02-28", ratePct: 0.557 },
  { date: "2013-03-01", ratePct: 0.549 },
  { date: "2013-03-04", ratePct: 0.544 },
  { date: "2013-03-05", ratePct: 0.543 },
  { date: "2013-03-06", ratePct: 0.54 },
  { date: "2013-03-07", ratePct: 0.538 },
  { date: "2013-03-08", ratePct: 0.541 },
  { date: "2013-03-11", ratePct: 0.542 },
  { date: "2013-03-12", ratePct: 0.543 },
  { date: "2013-03-13", ratePct: 0.542 },
  { date: "2013-03-14", ratePct: 0.544 },
  { date: "2013-03-15", ratePct: 0.543 },
  { date: "2013-03-18", ratePct: 0.543 },
  { date: "2013-03-19", ratePct: 0.545 },
  { date: "2013-03-20", ratePct: 0.551 },
  { date: "2013-03-21", ratePct: 0.55 },
  { date: "2013-03-22", ratePct: 0.553 },
  { date: "2013-03-25", ratePct: 0.549 },
  { date: "2013-03-26", ratePct: 0.547 },
  { date: "2013-03-27", ratePct: 0.545 },
  { date: "2013-03-28", ratePct: 0.547 },
  { date: "2013-04-02", ratePct: 0.544 },
  { date: "2013-04-03", ratePct: 0.54 },
  { date: "2013-04-04", ratePct: 0.54 },
  { date: "2013-04-05", ratePct: 0.534 },
  { date: "2013-04-08", ratePct: 0.534 },
  { date: "2013-04-09", ratePct: 0.536 },
  { date: "2013-04-10", ratePct: 0.537 },
  { date: "2013-04-11", ratePct: 0.536 },
  { date: "2013-04-12", ratePct: 0.534 },
  { date: "2013-04-15", ratePct: 0.533 },
  { date: "2013-04-16", ratePct: 0.53 },
  { date: "2013-04-17", ratePct: 0.531 },
  { date: "2013-04-18", ratePct: 0.526 },
  { date: "2013-04-19", ratePct: 0.526 },
  { date: "2013-04-22", ratePct: 0.525 },
  { date: "2013-04-23", ratePct: 0.52 },
  { date: "2013-04-24", ratePct: 0.518 },
  { date: "2013-04-25", ratePct: 0.515 },
  { date: "2013-04-26", ratePct: 0.515 },
  { date: "2013-04-29", ratePct: 0.513 },
  { date: "2013-04-30", ratePct: 0.51 },
  { date: "2013-05-02", ratePct: 0.51 },
  { date: "2013-05-03", ratePct: 0.493 },
  { date: "2013-05-06", ratePct: 0.49 },
  { date: "2013-05-07", ratePct: 0.49 },
  { date: "2013-05-08", ratePct: 0.491 },
  { date: "2013-05-09", ratePct: 0.488 },
  { date: "2013-05-10", ratePct: 0.489 },
  { date: "2013-05-13", ratePct: 0.49 },
  { date: "2013-05-14", ratePct: 0.491 },
  { date: "2013-05-15", ratePct: 0.491 },
  { date: "2013-05-16", ratePct: 0.486 },
  { date: "2013-05-17", ratePct: 0.479 },
  { date: "2013-05-20", ratePct: 0.477 },
  { date: "2013-05-21", ratePct: 0.475 },
  { date: "2013-05-22", ratePct: 0.475 },
  { date: "2013-05-23", ratePct: 0.473 },
  { date: "2013-05-24", ratePct: 0.474 },
  { date: "2013-05-27", ratePct: 0.474 },
  { date: "2013-05-28", ratePct: 0.473 },
  { date: "2013-05-29", ratePct: 0.476 },
  { date: "2013-05-30", ratePct: 0.48 },
  { date: "2013-05-31", ratePct: 0.478 },
  { date: "2013-06-03", ratePct: 0.478 },
  { date: "2013-06-04", ratePct: 0.482 },
  { date: "2013-06-05", ratePct: 0.481 },
  { date: "2013-06-06", ratePct: 0.48 },
  { date: "2013-06-07", ratePct: 0.49 },
  { date: "2013-06-10", ratePct: 0.495 },
  { date: "2013-06-11", ratePct: 0.502 },
  { date: "2013-06-12", ratePct: 0.504 },
  { date: "2013-06-13", ratePct: 0.504 },
  { date: "2013-06-14", ratePct: 0.504 },
  { date: "2013-06-17", ratePct: 0.501 },
  { date: "2013-06-18", ratePct: 0.503 },
  { date: "2013-06-19", ratePct: 0.506 },
  { date: "2013-06-20", ratePct: 0.516 },
  { date: "2013-06-21", ratePct: 0.524 },
  { date: "2013-06-24", ratePct: 0.535 },
  { date: "2013-06-25", ratePct: 0.541 },
  { date: "2013-06-26", ratePct: 0.539 },
  { date: "2013-06-27", ratePct: 0.529 },
  { date: "2013-06-28", ratePct: 0.527 },
  { date: "2013-07-01", ratePct: 0.534 },
  { date: "2013-07-02", ratePct: 0.534 },
  { date: "2013-07-03", ratePct: 0.534 },
  { date: "2013-07-04", ratePct: 0.534 },
  { date: "2013-07-05", ratePct: 0.519 },
  { date: "2013-07-08", ratePct: 0.513 },
  { date: "2013-07-09", ratePct: 0.51 },
  { date: "2013-07-10", ratePct: 0.512 },
  { date: "2013-07-11", ratePct: 0.517 },
  { date: "2013-07-12", ratePct: 0.519 },
  { date: "2013-07-15", ratePct: 0.522 },
  { date: "2013-07-16", ratePct: 0.522 },
  { date: "2013-07-17", ratePct: 0.521 },
  { date: "2013-07-18", ratePct: 0.515 },
  { date: "2013-07-19", ratePct: 0.515 },
  { date: "2013-07-22", ratePct: 0.52 },
  { date: "2013-07-23", ratePct: 0.53 },
  { date: "2013-07-24", ratePct: 0.535 },
  { date: "2013-07-25", ratePct: 0.537 },
  { date: "2013-07-26", ratePct: 0.535 },
  { date: "2013-07-29", ratePct: 0.535 },
  { date: "2013-07-30", ratePct: 0.535 },
  { date: "2013-07-31", ratePct: 0.536 },
  { date: "2013-08-01", ratePct: 0.531 },
  { date: "2013-08-02", ratePct: 0.536 },
  { date: "2013-08-05", ratePct: 0.535 },
  { date: "2013-08-06", ratePct: 0.536 },
  { date: "2013-08-07", ratePct: 0.536 },
  { date: "2013-08-08", ratePct: 0.537 },
  { date: "2013-08-09", ratePct: 0.538 },
  { date: "2013-08-12", ratePct: 0.536 },
  { date: "2013-08-13", ratePct: 0.537 },
  { date: "2013-08-14", ratePct: 0.544 },
  { date: "2013-08-15", ratePct: 0.543 },
  { date: "2013-08-16", ratePct: 0.546 },
  { date: "2013-08-19", ratePct: 0.545 },
  { date: "2013-08-20", ratePct: 0.544 },
  { date: "2013-08-21", ratePct: 0.544 },
  { date: "2013-08-22", ratePct: 0.549 },
  { date: "2013-08-23", ratePct: 0.552 },
  { date: "2013-08-26", ratePct: 0.553 },
  { date: "2013-08-27", ratePct: 0.55 },
  { date: "2013-08-28", ratePct: 0.547 },
  { date: "2013-08-29", ratePct: 0.547 },
  { date: "2013-08-30", ratePct: 0.545 },
  { date: "2013-09-02", ratePct: 0.55 },
  { date: "2013-09-03", ratePct: 0.548 },
  { date: "2013-09-04", ratePct: 0.549 },
  { date: "2013-09-05", ratePct: 0.551 },
  { date: "2013-09-06", ratePct: 0.551 },
  { date: "2013-09-09", ratePct: 0.547 },
  { date: "2013-09-10", ratePct: 0.549 },
  { date: "2013-09-11", ratePct: 0.55 },
  { date: "2013-09-12", ratePct: 0.547 },
  { date: "2013-09-13", ratePct: 0.548 },
  { date: "2013-09-16", ratePct: 0.542 },
  { date: "2013-09-17", ratePct: 0.542 },
  { date: "2013-09-18", ratePct: 0.543 },
  { date: "2013-09-19", ratePct: 0.537 },
  { date: "2013-09-20", ratePct: 0.536 },
  { date: "2013-09-23", ratePct: 0.538 },
  { date: "2013-09-24", ratePct: 0.534 },
  { date: "2013-09-25", ratePct: 0.536 },
  { date: "2013-09-26", ratePct: 0.537 },
  { date: "2013-09-27", ratePct: 0.538 },
  { date: "2013-09-30", ratePct: 0.539 },
  { date: "2013-10-01", ratePct: 0.537 },
  { date: "2013-10-02", ratePct: 0.536 },
  { date: "2013-10-03", ratePct: 0.537 },
  { date: "2013-10-04", ratePct: 0.537 },
  { date: "2013-10-07", ratePct: 0.536 },
  { date: "2013-10-08", ratePct: 0.539 },
  { date: "2013-10-09", ratePct: 0.54 },
  { date: "2013-10-10", ratePct: 0.541 },
  { date: "2013-10-11", ratePct: 0.54 },
  { date: "2013-10-14", ratePct: 0.541 },
  { date: "2013-10-15", ratePct: 0.54 },
  { date: "2013-10-16", ratePct: 0.541 },
  { date: "2013-10-17", ratePct: 0.538 },
  { date: "2013-10-18", ratePct: 0.537 },
  { date: "2013-10-21", ratePct: 0.538 },
  { date: "2013-10-22", ratePct: 0.539 },
  { date: "2013-10-23", ratePct: 0.537 },
  { date: "2013-10-24", ratePct: 0.542 },
  { date: "2013-10-25", ratePct: 0.547 },
  { date: "2013-10-28", ratePct: 0.553 },
  { date: "2013-10-29", ratePct: 0.55 },
  { date: "2013-10-30", ratePct: 0.548 },
  { date: "2013-10-31", ratePct: 0.548 },
  { date: "2013-11-01", ratePct: 0.533 },
  { date: "2013-11-04", ratePct: 0.532 },
  { date: "2013-11-05", ratePct: 0.534 },
  { date: "2013-11-06", ratePct: 0.535 },
  { date: "2013-11-07", ratePct: 0.534 },
  { date: "2013-11-08", ratePct: 0.506 },
  { date: "2013-11-11", ratePct: 0.502 },
  { date: "2013-11-12", ratePct: 0.501 },
  { date: "2013-11-13", ratePct: 0.5 },
  { date: "2013-11-14", ratePct: 0.496 },
  { date: "2013-11-15", ratePct: 0.496 },
  { date: "2013-11-18", ratePct: 0.497 },
  { date: "2013-11-19", ratePct: 0.496 },
  { date: "2013-11-20", ratePct: 0.495 },
  { date: "2013-11-21", ratePct: 0.489 },
  { date: "2013-11-22", ratePct: 0.492 },
  { date: "2013-11-25", ratePct: 0.498 },
  { date: "2013-11-26", ratePct: 0.5 },
  { date: "2013-11-27", ratePct: 0.497 },
  { date: "2013-11-28", ratePct: 0.5 },
  { date: "2013-11-29", ratePct: 0.501 },
  { date: "2013-12-02", ratePct: 0.502 },
  { date: "2013-12-03", ratePct: 0.503 },
  { date: "2013-12-04", ratePct: 0.504 },
  { date: "2013-12-05", ratePct: 0.507 },
  { date: "2013-12-06", ratePct: 0.519 },
  { date: "2013-12-09", ratePct: 0.527 },
  { date: "2013-12-10", ratePct: 0.533 },
  { date: "2013-12-11", ratePct: 0.54 },
  { date: "2013-12-12", ratePct: 0.549 },
  { date: "2013-12-13", ratePct: 0.556 },
  { date: "2013-12-16", ratePct: 0.563 },
  { date: "2013-12-17", ratePct: 0.567 },
  { date: "2013-12-18", ratePct: 0.565 },
  { date: "2013-12-19", ratePct: 0.558 },
  { date: "2013-12-20", ratePct: 0.559 },
  { date: "2013-12-23", ratePct: 0.562 },
  { date: "2013-12-24", ratePct: 0.56 },
  { date: "2013-12-27", ratePct: 0.562 },
  { date: "2013-12-30", ratePct: 0.558 },
  { date: "2013-12-31", ratePct: 0.556 },
  { date: "2014-01-02", ratePct: 0.555 },
  { date: "2014-01-03", ratePct: 0.551 },
  { date: "2014-01-06", ratePct: 0.55 },
  { date: "2014-01-07", ratePct: 0.55 },
  { date: "2014-01-08", ratePct: 0.552 },
  { date: "2014-01-09", ratePct: 0.557 },
  { date: "2014-01-10", ratePct: 0.557 },
  { date: "2014-01-13", ratePct: 0.557 },
  { date: "2014-01-14", ratePct: 0.557 },
  { date: "2014-01-15", ratePct: 0.565 },
  { date: "2014-01-16", ratePct: 0.572 },
  { date: "2014-01-17", ratePct: 0.571 },
  { date: "2014-01-20", ratePct: 0.57 },
  { date: "2014-01-21", ratePct: 0.571 },
  { date: "2014-01-22", ratePct: 0.57 },
  { date: "2014-01-23", ratePct: 0.57 },
  { date: "2014-01-24", ratePct: 0.567 },
  { date: "2014-01-27", ratePct: 0.569 },
  { date: "2014-01-28", ratePct: 0.569 },
  { date: "2014-01-29", ratePct: 0.566 },
  { date: "2014-01-30", ratePct: 0.562 },
  { date: "2014-01-31", ratePct: 0.559 },
  { date: "2014-02-03", ratePct: 0.549 },
  { date: "2014-02-04", ratePct: 0.548 },
  { date: "2014-02-05", ratePct: 0.548 },
  { date: "2014-02-06", ratePct: 0.547 },
  { date: "2014-02-07", ratePct: 0.552 },
  { date: "2014-02-10", ratePct: 0.551 },
  { date: "2014-02-11", ratePct: 0.554 },
  { date: "2014-02-12", ratePct: 0.552 },
  { date: "2014-02-13", ratePct: 0.547 },
  { date: "2014-02-14", ratePct: 0.548 },
  { date: "2014-02-17", ratePct: 0.547 },
  { date: "2014-02-18", ratePct: 0.547 },
  { date: "2014-02-19", ratePct: 0.547 },
  { date: "2014-02-20", ratePct: 0.545 },
  { date: "2014-02-21", ratePct: 0.547 },
  { date: "2014-02-24", ratePct: 0.549 },
  { date: "2014-02-25", ratePct: 0.553 },
  { date: "2014-02-26", ratePct: 0.551 },
  { date: "2014-02-27", ratePct: 0.549 },
  { date: "2014-02-28", ratePct: 0.549 },
  { date: "2014-03-03", ratePct: 0.554 },
  { date: "2014-03-04", ratePct: 0.552 },
  { date: "2014-03-05", ratePct: 0.551 },
  { date: "2014-03-06", ratePct: 0.551 },
  { date: "2014-03-07", ratePct: 0.567 },
  { date: "2014-03-10", ratePct: 0.578 },
  { date: "2014-03-11", ratePct: 0.575 },
  { date: "2014-03-12", ratePct: 0.574 },
  { date: "2014-03-13", ratePct: 0.573 },
  { date: "2014-03-14", ratePct: 0.57 },
  { date: "2014-03-17", ratePct: 0.576 },
  { date: "2014-03-18", ratePct: 0.582 },
  { date: "2014-03-19", ratePct: 0.585 },
  { date: "2014-03-20", ratePct: 0.591 },
  { date: "2014-03-21", ratePct: 0.593 },
  { date: "2014-03-24", ratePct: 0.6 },
  { date: "2014-03-25", ratePct: 0.598 },
  { date: "2014-03-26", ratePct: 0.591 },
  { date: "2014-03-27", ratePct: 0.587 },
  { date: "2014-03-28", ratePct: 0.585 },
  { date: "2014-03-31", ratePct: 0.59 },
  { date: "2014-04-01", ratePct: 0.591 },
  { date: "2014-04-02", ratePct: 0.599 },
  { date: "2014-04-03", ratePct: 0.6 },
  { date: "2014-04-04", ratePct: 0.603 },
  { date: "2014-04-07", ratePct: 0.6 },
  { date: "2014-04-08", ratePct: 0.599 },
  { date: "2014-04-09", ratePct: 0.599 },
  { date: "2014-04-10", ratePct: 0.599 },
  { date: "2014-04-11", ratePct: 0.601 },
  { date: "2014-04-14", ratePct: 0.599 },
  { date: "2014-04-15", ratePct: 0.598 },
  { date: "2014-04-16", ratePct: 0.598 },
  { date: "2014-04-17", ratePct: 0.599 },
  { date: "2014-04-22", ratePct: 0.603 },
  { date: "2014-04-23", ratePct: 0.606 },
  { date: "2014-04-24", ratePct: 0.611 },
  { date: "2014-04-25", ratePct: 0.619 },
  { date: "2014-04-28", ratePct: 0.62 },
  { date: "2014-04-29", ratePct: 0.621 },
  { date: "2014-04-30", ratePct: 0.614 },
  { date: "2014-05-02", ratePct: 0.612 },
  { date: "2014-05-05", ratePct: 0.613 },
  { date: "2014-05-06", ratePct: 0.613 },
  { date: "2014-05-07", ratePct: 0.614 },
  { date: "2014-05-08", ratePct: 0.617 },
  { date: "2014-05-09", ratePct: 0.606 },
  { date: "2014-05-12", ratePct: 0.607 },
  { date: "2014-05-13", ratePct: 0.605 },
  { date: "2014-05-14", ratePct: 0.596 },
  { date: "2014-05-15", ratePct: 0.587 },
  { date: "2014-05-16", ratePct: 0.586 },
  { date: "2014-05-19", ratePct: 0.586 },
  { date: "2014-05-20", ratePct: 0.585 },
  { date: "2014-05-21", ratePct: 0.583 },
  { date: "2014-05-22", ratePct: 0.583 },
  { date: "2014-05-23", ratePct: 0.578 },
  { date: "2014-05-26", ratePct: 0.576 },
  { date: "2014-05-27", ratePct: 0.573 },
  { date: "2014-05-28", ratePct: 0.574 },
  { date: "2014-05-29", ratePct: 0.572 },
  { date: "2014-05-30", ratePct: 0.572 },
  { date: "2014-06-02", ratePct: 0.569 },
  { date: "2014-06-03", ratePct: 0.567 },
  { date: "2014-06-04", ratePct: 0.562 },
  { date: "2014-06-05", ratePct: 0.552 },
  { date: "2014-06-06", ratePct: 0.533 },
  { date: "2014-06-09", ratePct: 0.529 },
  { date: "2014-06-10", ratePct: 0.528 },
  { date: "2014-06-11", ratePct: 0.525 },
  { date: "2014-06-12", ratePct: 0.511 },
  { date: "2014-06-13", ratePct: 0.507 },
  { date: "2014-06-16", ratePct: 0.496 },
  { date: "2014-06-17", ratePct: 0.491 },
  { date: "2014-06-18", ratePct: 0.49 },
  { date: "2014-06-19", ratePct: 0.489 },
  { date: "2014-06-20", ratePct: 0.489 },
  { date: "2014-06-23", ratePct: 0.489 },
  { date: "2014-06-24", ratePct: 0.489 },
  { date: "2014-06-25", ratePct: 0.487 },
  { date: "2014-06-26", ratePct: 0.488 },
  { date: "2014-06-27", ratePct: 0.488 },
  { date: "2014-06-30", ratePct: 0.488 },
  { date: "2014-07-01", ratePct: 0.488 },
  { date: "2014-07-02", ratePct: 0.487 },
  { date: "2014-07-03", ratePct: 0.488 },
  { date: "2014-07-04", ratePct: 0.486 },
  { date: "2014-07-07", ratePct: 0.486 },
  { date: "2014-07-08", ratePct: 0.486 },
  { date: "2014-07-09", ratePct: 0.487 },
  { date: "2014-07-10", ratePct: 0.487 },
  { date: "2014-07-11", ratePct: 0.487 },
  { date: "2014-07-14", ratePct: 0.488 },
  { date: "2014-07-15", ratePct: 0.487 },
  { date: "2014-07-16", ratePct: 0.486 },
  { date: "2014-07-17", ratePct: 0.486 },
  { date: "2014-07-18", ratePct: 0.485 },
  { date: "2014-07-21", ratePct: 0.486 },
  { date: "2014-07-22", ratePct: 0.488 },
  { date: "2014-07-23", ratePct: 0.489 },
  { date: "2014-07-24", ratePct: 0.49 },
  { date: "2014-07-25", ratePct: 0.49 },
  { date: "2014-07-28", ratePct: 0.489 },
  { date: "2014-07-29", ratePct: 0.489 },
  { date: "2014-07-30", ratePct: 0.489 },
  { date: "2014-07-31", ratePct: 0.489 },
  { date: "2014-08-01", ratePct: 0.489 },
  { date: "2014-08-04", ratePct: 0.488 },
  { date: "2014-08-05", ratePct: 0.488 },
  { date: "2014-08-06", ratePct: 0.487 },
  { date: "2014-08-07", ratePct: 0.484 },
  { date: "2014-08-08", ratePct: 0.482 },
  { date: "2014-08-11", ratePct: 0.482 },
  { date: "2014-08-12", ratePct: 0.479 },
  { date: "2014-08-13", ratePct: 0.479 },
  { date: "2014-08-14", ratePct: 0.478 },
  { date: "2014-08-15", ratePct: 0.477 },
  { date: "2014-08-18", ratePct: 0.474 },
  { date: "2014-08-19", ratePct: 0.469 },
  { date: "2014-08-20", ratePct: 0.466 },
  { date: "2014-08-21", ratePct: 0.464 },
  { date: "2014-08-22", ratePct: 0.463 },
  { date: "2014-08-25", ratePct: 0.448 },
  { date: "2014-08-26", ratePct: 0.443 },
  { date: "2014-08-27", ratePct: 0.439 },
  { date: "2014-08-28", ratePct: 0.438 },
  { date: "2014-08-29", ratePct: 0.434 },
  { date: "2014-09-01", ratePct: 0.428 },
  { date: "2014-09-02", ratePct: 0.42 },
  { date: "2014-09-03", ratePct: 0.419 },
  { date: "2014-09-04", ratePct: 0.418 },
  { date: "2014-09-05", ratePct: 0.374 },
  { date: "2014-09-08", ratePct: 0.366 },
  { date: "2014-09-09", ratePct: 0.36 },
  { date: "2014-09-10", ratePct: 0.357 },
  { date: "2014-09-11", ratePct: 0.352 },
  { date: "2014-09-12", ratePct: 0.349 },
  { date: "2014-09-15", ratePct: 0.349 },
  { date: "2014-09-16", ratePct: 0.346 },
  { date: "2014-09-17", ratePct: 0.347 },
  { date: "2014-09-18", ratePct: 0.347 },
  { date: "2014-09-19", ratePct: 0.347 },
  { date: "2014-09-22", ratePct: 0.345 },
  { date: "2014-09-23", ratePct: 0.343 },
  { date: "2014-09-24", ratePct: 0.344 },
  { date: "2014-09-25", ratePct: 0.342 },
  { date: "2014-09-26", ratePct: 0.341 },
  { date: "2014-09-29", ratePct: 0.339 },
  { date: "2014-09-30", ratePct: 0.338 },
  { date: "2014-10-01", ratePct: 0.338 },
  { date: "2014-10-02", ratePct: 0.334 },
  { date: "2014-10-03", ratePct: 0.335 },
  { date: "2014-10-06", ratePct: 0.334 },
  { date: "2014-10-07", ratePct: 0.333 },
  { date: "2014-10-08", ratePct: 0.333 },
  { date: "2014-10-09", ratePct: 0.332 },
  { date: "2014-10-10", ratePct: 0.333 },
  { date: "2014-10-13", ratePct: 0.336 },
  { date: "2014-10-14", ratePct: 0.34 },
  { date: "2014-10-15", ratePct: 0.338 },
  { date: "2014-10-16", ratePct: 0.339 },
  { date: "2014-10-17", ratePct: 0.34 },
  { date: "2014-10-20", ratePct: 0.337 },
  { date: "2014-10-21", ratePct: 0.339 },
  { date: "2014-10-22", ratePct: 0.341 },
  { date: "2014-10-23", ratePct: 0.341 },
  { date: "2014-10-24", ratePct: 0.341 },
  { date: "2014-10-27", ratePct: 0.341 },
  { date: "2014-10-28", ratePct: 0.34 },
  { date: "2014-10-29", ratePct: 0.34 },
  { date: "2014-10-30", ratePct: 0.34 },
  { date: "2014-10-31", ratePct: 0.34 },
  { date: "2014-11-03", ratePct: 0.339 },
  { date: "2014-11-04", ratePct: 0.338 },
  { date: "2014-11-05", ratePct: 0.337 },
  { date: "2014-11-06", ratePct: 0.337 },
  { date: "2014-11-07", ratePct: 0.336 },
  { date: "2014-11-10", ratePct: 0.336 },
  { date: "2014-11-11", ratePct: 0.336 },
  { date: "2014-11-12", ratePct: 0.336 },
  { date: "2014-11-13", ratePct: 0.334 },
  { date: "2014-11-14", ratePct: 0.333 },
  { date: "2014-11-17", ratePct: 0.332 },
  { date: "2014-11-18", ratePct: 0.334 },
  { date: "2014-11-19", ratePct: 0.336 },
  { date: "2014-11-20", ratePct: 0.336 },
  { date: "2014-11-21", ratePct: 0.334 },
  { date: "2014-11-24", ratePct: 0.332 },
  { date: "2014-11-25", ratePct: 0.332 },
  { date: "2014-11-26", ratePct: 0.334 },
  { date: "2014-11-27", ratePct: 0.331 },
  { date: "2014-11-28", ratePct: 0.331 },
  { date: "2014-12-01", ratePct: 0.33 },
  { date: "2014-12-02", ratePct: 0.331 },
  { date: "2014-12-03", ratePct: 0.328 },
  { date: "2014-12-04", ratePct: 0.328 },
  { date: "2014-12-05", ratePct: 0.329 },
  { date: "2014-12-08", ratePct: 0.329 },
  { date: "2014-12-09", ratePct: 0.329 },
  { date: "2014-12-10", ratePct: 0.328 },
  { date: "2014-12-11", ratePct: 0.328 },
  { date: "2014-12-12", ratePct: 0.329 },
  { date: "2014-12-15", ratePct: 0.329 },
  { date: "2014-12-16", ratePct: 0.329 },
  { date: "2014-12-17", ratePct: 0.33 },
  { date: "2014-12-18", ratePct: 0.328 },
  { date: "2014-12-19", ratePct: 0.329 },
  { date: "2014-12-22", ratePct: 0.329 },
  { date: "2014-12-23", ratePct: 0.328 },
  { date: "2014-12-24", ratePct: 0.328 },
  { date: "2014-12-29", ratePct: 0.328 },
  { date: "2014-12-30", ratePct: 0.327 },
  { date: "2014-12-31", ratePct: 0.325 },
  { date: "2015-01-02", ratePct: 0.323 },
  { date: "2015-01-05", ratePct: 0.321 },
  { date: "2015-01-06", ratePct: 0.319 },
  { date: "2015-01-07", ratePct: 0.319 },
  { date: "2015-01-08", ratePct: 0.319 },
  { date: "2015-01-09", ratePct: 0.318 },
  { date: "2015-01-12", ratePct: 0.317 },
  { date: "2015-01-13", ratePct: 0.318 },
  { date: "2015-01-14", ratePct: 0.315 },
  { date: "2015-01-15", ratePct: 0.313 },
  { date: "2015-01-16", ratePct: 0.299 },
  { date: "2015-01-19", ratePct: 0.289 },
  { date: "2015-01-20", ratePct: 0.284 },
  { date: "2015-01-21", ratePct: 0.283 },
  { date: "2015-01-22", ratePct: 0.282 },
  { date: "2015-01-23", ratePct: 0.275 },
  { date: "2015-01-26", ratePct: 0.277 },
  { date: "2015-01-27", ratePct: 0.277 },
  { date: "2015-01-28", ratePct: 0.273 },
  { date: "2015-01-29", ratePct: 0.271 },
  { date: "2015-01-30", ratePct: 0.27 },
  { date: "2015-02-02", ratePct: 0.271 },
  { date: "2015-02-03", ratePct: 0.266 },
  { date: "2015-02-04", ratePct: 0.263 },
  { date: "2015-02-05", ratePct: 0.262 },
  { date: "2015-02-06", ratePct: 0.261 },
  { date: "2015-02-09", ratePct: 0.261 },
  { date: "2015-02-10", ratePct: 0.262 },
  { date: "2015-02-11", ratePct: 0.26 },
  { date: "2015-02-12", ratePct: 0.26 },
  { date: "2015-02-13", ratePct: 0.259 },
  { date: "2015-02-16", ratePct: 0.258 },
  { date: "2015-02-17", ratePct: 0.258 },
  { date: "2015-02-18", ratePct: 0.255 },
  { date: "2015-02-19", ratePct: 0.252 },
  { date: "2015-02-20", ratePct: 0.25 },
  { date: "2015-02-23", ratePct: 0.246 },
  { date: "2015-02-24", ratePct: 0.245 },
  { date: "2015-02-25", ratePct: 0.241 },
  { date: "2015-02-26", ratePct: 0.238 },
  { date: "2015-02-27", ratePct: 0.233 },
  { date: "2015-03-02", ratePct: 0.23 },
  { date: "2015-03-03", ratePct: 0.228 },
  { date: "2015-03-04", ratePct: 0.227 },
  { date: "2015-03-05", ratePct: 0.226 },
  { date: "2015-03-06", ratePct: 0.225 },
  { date: "2015-03-09", ratePct: 0.222 },
  { date: "2015-03-10", ratePct: 0.219 },
  { date: "2015-03-11", ratePct: 0.217 },
  { date: "2015-03-12", ratePct: 0.215 },
  { date: "2015-03-13", ratePct: 0.214 },
  { date: "2015-03-16", ratePct: 0.212 },
  { date: "2015-03-17", ratePct: 0.209 },
  { date: "2015-03-18", ratePct: 0.212 },
  { date: "2015-03-19", ratePct: 0.209 },
  { date: "2015-03-20", ratePct: 0.205 },
  { date: "2015-03-23", ratePct: 0.203 },
  { date: "2015-03-24", ratePct: 0.202 },
  { date: "2015-03-25", ratePct: 0.201 },
  { date: "2015-03-26", ratePct: 0.201 },
  { date: "2015-03-27", ratePct: 0.199 },
  { date: "2015-03-30", ratePct: 0.198 },
  { date: "2015-03-31", ratePct: 0.198 },
  { date: "2015-04-01", ratePct: 0.196 },
  { date: "2015-04-02", ratePct: 0.195 },
  { date: "2015-04-07", ratePct: 0.195 },
  { date: "2015-04-08", ratePct: 0.191 },
  { date: "2015-04-09", ratePct: 0.19 },
  { date: "2015-04-10", ratePct: 0.188 },
  { date: "2015-04-13", ratePct: 0.187 },
  { date: "2015-04-14", ratePct: 0.183 },
  { date: "2015-04-15", ratePct: 0.18 },
  { date: "2015-04-16", ratePct: 0.178 },
  { date: "2015-04-17", ratePct: 0.177 },
  { date: "2015-04-20", ratePct: 0.176 },
  { date: "2015-04-21", ratePct: 0.176 },
  { date: "2015-04-22", ratePct: 0.175 },
  { date: "2015-04-23", ratePct: 0.173 },
  { date: "2015-04-24", ratePct: 0.172 },
  { date: "2015-04-27", ratePct: 0.171 },
  { date: "2015-04-28", ratePct: 0.168 },
  { date: "2015-04-29", ratePct: 0.167 },
  { date: "2015-04-30", ratePct: 0.171 },
  { date: "2015-05-04", ratePct: 0.17 },
  { date: "2015-05-05", ratePct: 0.167 },
  { date: "2015-05-06", ratePct: 0.169 },
  { date: "2015-05-07", ratePct: 0.169 },
  { date: "2015-05-08", ratePct: 0.169 },
  { date: "2015-05-11", ratePct: 0.168 },
  { date: "2015-05-12", ratePct: 0.169 },
  { date: "2015-05-13", ratePct: 0.169 },
  { date: "2015-05-14", ratePct: 0.168 },
  { date: "2015-05-15", ratePct: 0.167 },
  { date: "2015-05-18", ratePct: 0.168 },
  { date: "2015-05-19", ratePct: 0.164 },
  { date: "2015-05-20", ratePct: 0.162 },
  { date: "2015-05-21", ratePct: 0.162 },
  { date: "2015-05-22", ratePct: 0.162 },
  { date: "2015-05-25", ratePct: 0.163 },
  { date: "2015-05-26", ratePct: 0.161 },
  { date: "2015-05-27", ratePct: 0.16 },
  { date: "2015-05-28", ratePct: 0.159 },
  { date: "2015-05-29", ratePct: 0.16 },
  { date: "2015-06-01", ratePct: 0.161 },
  { date: "2015-06-02", ratePct: 0.158 },
  { date: "2015-06-03", ratePct: 0.16 },
  { date: "2015-06-04", ratePct: 0.162 },
  { date: "2015-06-05", ratePct: 0.161 },
  { date: "2015-06-08", ratePct: 0.163 },
  { date: "2015-06-09", ratePct: 0.163 },
  { date: "2015-06-10", ratePct: 0.166 },
  { date: "2015-06-11", ratePct: 0.161 },
  { date: "2015-06-12", ratePct: 0.163 },
  { date: "2015-06-15", ratePct: 0.164 },
  { date: "2015-06-16", ratePct: 0.166 },
  { date: "2015-06-17", ratePct: 0.166 },
  { date: "2015-06-18", ratePct: 0.166 },
  { date: "2015-06-19", ratePct: 0.166 },
  { date: "2015-06-22", ratePct: 0.164 },
  { date: "2015-06-23", ratePct: 0.163 },
  { date: "2015-06-24", ratePct: 0.163 },
  { date: "2015-06-25", ratePct: 0.162 },
  { date: "2015-06-26", ratePct: 0.162 },
  { date: "2015-06-29", ratePct: 0.163 },
  { date: "2015-06-30", ratePct: 0.164 },
  { date: "2015-07-01", ratePct: 0.164 },
  { date: "2015-07-02", ratePct: 0.163 },
  { date: "2015-07-03", ratePct: 0.163 },
  { date: "2015-07-06", ratePct: 0.164 },
  { date: "2015-07-07", ratePct: 0.164 },
  { date: "2015-07-08", ratePct: 0.164 },
  { date: "2015-07-09", ratePct: 0.163 },
  { date: "2015-07-10", ratePct: 0.164 },
  { date: "2015-07-13", ratePct: 0.166 },
  { date: "2015-07-14", ratePct: 0.168 },
  { date: "2015-07-15", ratePct: 0.169 },
  { date: "2015-07-16", ratePct: 0.169 },
  { date: "2015-07-17", ratePct: 0.17 },
  { date: "2015-07-20", ratePct: 0.171 },
  { date: "2015-07-21", ratePct: 0.17 },
  { date: "2015-07-22", ratePct: 0.171 },
  { date: "2015-07-23", ratePct: 0.171 },
  { date: "2015-07-24", ratePct: 0.17 },
  { date: "2015-07-27", ratePct: 0.169 },
  { date: "2015-07-28", ratePct: 0.169 },
  { date: "2015-07-29", ratePct: 0.169 },
  { date: "2015-07-30", ratePct: 0.169 },
  { date: "2015-07-31", ratePct: 0.167 },
  { date: "2015-08-03", ratePct: 0.166 },
  { date: "2015-08-04", ratePct: 0.164 },
  { date: "2015-08-05", ratePct: 0.163 },
  { date: "2015-08-06", ratePct: 0.163 },
  { date: "2015-08-07", ratePct: 0.163 },
  { date: "2015-08-10", ratePct: 0.162 },
  { date: "2015-08-11", ratePct: 0.162 },
  { date: "2015-08-12", ratePct: 0.161 },
  { date: "2015-08-13", ratePct: 0.161 },
  { date: "2015-08-14", ratePct: 0.161 },
  { date: "2015-08-17", ratePct: 0.161 },
  { date: "2015-08-18", ratePct: 0.159 },
  { date: "2015-08-19", ratePct: 0.16 },
  { date: "2015-08-20", ratePct: 0.159 },
  { date: "2015-08-21", ratePct: 0.16 },
  { date: "2015-08-24", ratePct: 0.16 },
  { date: "2015-08-25", ratePct: 0.161 },
  { date: "2015-08-26", ratePct: 0.16 },
  { date: "2015-08-27", ratePct: 0.16 },
  { date: "2015-08-28", ratePct: 0.161 },
  { date: "2015-08-31", ratePct: 0.16 },
  { date: "2015-09-01", ratePct: 0.161 },
  { date: "2015-09-02", ratePct: 0.16 },
  { date: "2015-09-03", ratePct: 0.161 },
  { date: "2015-09-04", ratePct: 0.158 },
  { date: "2015-09-07", ratePct: 0.158 },
  { date: "2015-09-08", ratePct: 0.158 },
  { date: "2015-09-09", ratePct: 0.158 },
  { date: "2015-09-10", ratePct: 0.157 },
  { date: "2015-09-11", ratePct: 0.157 },
  { date: "2015-09-14", ratePct: 0.157 },
  { date: "2015-09-15", ratePct: 0.155 },
  { date: "2015-09-16", ratePct: 0.156 },
  { date: "2015-09-17", ratePct: 0.156 },
  { date: "2015-09-18", ratePct: 0.154 },
  { date: "2015-09-21", ratePct: 0.152 },
  { date: "2015-09-22", ratePct: 0.15 },
  { date: "2015-09-23", ratePct: 0.147 },
  { date: "2015-09-24", ratePct: 0.148 },
  { date: "2015-09-25", ratePct: 0.146 },
  { date: "2015-09-28", ratePct: 0.145 },
  { date: "2015-09-29", ratePct: 0.143 },
  { date: "2015-09-30", ratePct: 0.142 },
  { date: "2015-10-01", ratePct: 0.14 },
  { date: "2015-10-02", ratePct: 0.139 },
  { date: "2015-10-05", ratePct: 0.137 },
  { date: "2015-10-06", ratePct: 0.139 },
  { date: "2015-10-07", ratePct: 0.14 },
  { date: "2015-10-08", ratePct: 0.139 },
  { date: "2015-10-09", ratePct: 0.139 },
  { date: "2015-10-12", ratePct: 0.139 },
  { date: "2015-10-13", ratePct: 0.139 },
  { date: "2015-10-14", ratePct: 0.137 },
  { date: "2015-10-15", ratePct: 0.134 },
  { date: "2015-10-16", ratePct: 0.129 },
  { date: "2015-10-19", ratePct: 0.128 },
  { date: "2015-10-20", ratePct: 0.129 },
  { date: "2015-10-21", ratePct: 0.13 },
  { date: "2015-10-22", ratePct: 0.129 },
  { date: "2015-10-23", ratePct: 0.114 },
  { date: "2015-10-26", ratePct: 0.11 },
  { date: "2015-10-27", ratePct: 0.108 },
  { date: "2015-10-28", ratePct: 0.104 },
  { date: "2015-10-29", ratePct: 0.104 },
  { date: "2015-10-30", ratePct: 0.107 },
  { date: "2015-11-02", ratePct: 0.109 },
  { date: "2015-11-03", ratePct: 0.106 },
  { date: "2015-11-04", ratePct: 0.101 },
  { date: "2015-11-05", ratePct: 0.098 },
  { date: "2015-11-06", ratePct: 0.096 },
  { date: "2015-11-09", ratePct: 0.101 },
  { date: "2015-11-10", ratePct: 0.091 },
  { date: "2015-11-11", ratePct: 0.089 },
  { date: "2015-11-12", ratePct: 0.084 },
  { date: "2015-11-13", ratePct: 0.082 },
  { date: "2015-11-16", ratePct: 0.077 },
  { date: "2015-11-17", ratePct: 0.076 },
  { date: "2015-11-18", ratePct: 0.076 },
  { date: "2015-11-19", ratePct: 0.074 },
  { date: "2015-11-20", ratePct: 0.068 },
  { date: "2015-11-23", ratePct: 0.062 },
  { date: "2015-11-24", ratePct: 0.058 },
  { date: "2015-11-25", ratePct: 0.06 },
  { date: "2015-11-26", ratePct: 0.053 },
  { date: "2015-11-27", ratePct: 0.048 },
  { date: "2015-11-30", ratePct: 0.048 },
  { date: "2015-12-01", ratePct: 0.045 },
  { date: "2015-12-02", ratePct: 0.043 },
  { date: "2015-12-03", ratePct: 0.039 },
  { date: "2015-12-04", ratePct: 0.068 },
  { date: "2015-12-07", ratePct: 0.066 },
  { date: "2015-12-08", ratePct: 0.067 },
  { date: "2015-12-09", ratePct: 0.066 },
  { date: "2015-12-10", ratePct: 0.064 },
  { date: "2015-12-11", ratePct: 0.063 },
  { date: "2015-12-14", ratePct: 0.06 },
  { date: "2015-12-15", ratePct: 0.06 },
  { date: "2015-12-16", ratePct: 0.059 },
  { date: "2015-12-17", ratePct: 0.059 },
  { date: "2015-12-18", ratePct: 0.058 },
  { date: "2015-12-21", ratePct: 0.061 },
  { date: "2015-12-22", ratePct: 0.06 },
  { date: "2015-12-23", ratePct: 0.061 },
  { date: "2015-12-24", ratePct: 0.06 },
  { date: "2015-12-28", ratePct: 0.06 },
  { date: "2015-12-29", ratePct: 0.058 },
  { date: "2015-12-30", ratePct: 0.059 },
  { date: "2015-12-31", ratePct: 0.06 },
  { date: "2016-01-04", ratePct: 0.058 },
  { date: "2016-01-05", ratePct: 0.059 },
  { date: "2016-01-06", ratePct: 0.056 },
  { date: "2016-01-07", ratePct: 0.051 },
  { date: "2016-01-08", ratePct: 0.051 },
  { date: "2016-01-11", ratePct: 0.05 },
  { date: "2016-01-12", ratePct: 0.048 },
  { date: "2016-01-13", ratePct: 0.049 },
  { date: "2016-01-14", ratePct: 0.048 },
  { date: "2016-01-15", ratePct: 0.049 },
  { date: "2016-01-18", ratePct: 0.049 },
  { date: "2016-01-19", ratePct: 0.048 },
  { date: "2016-01-20", ratePct: 0.045 },
  { date: "2016-01-21", ratePct: 0.042 },
  { date: "2016-01-22", ratePct: 0.032 },
  { date: "2016-01-25", ratePct: 0.028 },
  { date: "2016-01-26", ratePct: 0.025 },
  { date: "2016-01-27", ratePct: 0.022 },
  { date: "2016-01-28", ratePct: 0.022 },
  { date: "2016-01-29", ratePct: 0.015 },
  { date: "2016-02-01", ratePct: 0.01 },
  { date: "2016-02-02", ratePct: 9e-3 },
  { date: "2016-02-03", ratePct: 8e-3 },
  { date: "2016-02-04", ratePct: 2e-3 },
  { date: "2016-02-05", ratePct: -2e-3 },
  { date: "2016-02-08", ratePct: -5e-3 },
  { date: "2016-02-09", ratePct: -4e-3 },
  { date: "2016-02-10", ratePct: -1e-3 },
  { date: "2016-02-11", ratePct: -6e-3 },
  { date: "2016-02-12", ratePct: -9e-3 },
  { date: "2016-02-15", ratePct: -8e-3 },
  { date: "2016-02-16", ratePct: -0.012 },
  { date: "2016-02-17", ratePct: -0.011 },
  { date: "2016-02-18", ratePct: -0.014 },
  { date: "2016-02-19", ratePct: -0.017 },
  { date: "2016-02-22", ratePct: -0.018 },
  { date: "2016-02-23", ratePct: -0.016 },
  { date: "2016-02-24", ratePct: -0.015 },
  { date: "2016-02-25", ratePct: -0.015 },
  { date: "2016-02-26", ratePct: -0.017 },
  { date: "2016-02-29", ratePct: -0.024 },
  { date: "2016-03-01", ratePct: -0.026 },
  { date: "2016-03-02", ratePct: -0.024 },
  { date: "2016-03-03", ratePct: -0.025 },
  { date: "2016-03-04", ratePct: -0.028 },
  { date: "2016-03-07", ratePct: -0.024 },
  { date: "2016-03-08", ratePct: -0.025 },
  { date: "2016-03-09", ratePct: -0.023 },
  { date: "2016-03-10", ratePct: -0.025 },
  { date: "2016-03-11", ratePct: -9e-3 },
  { date: "2016-03-14", ratePct: -8e-3 },
  { date: "2016-03-15", ratePct: -6e-3 },
  { date: "2016-03-16", ratePct: -4e-3 },
  { date: "2016-03-17", ratePct: -3e-3 },
  { date: "2016-03-18", ratePct: -3e-3 },
  { date: "2016-03-21", ratePct: -2e-3 },
  { date: "2016-03-22", ratePct: -2e-3 },
  { date: "2016-03-23", ratePct: -3e-3 },
  { date: "2016-03-24", ratePct: -5e-3 },
  { date: "2016-03-29", ratePct: -6e-3 },
  { date: "2016-03-30", ratePct: -4e-3 },
  { date: "2016-03-31", ratePct: -5e-3 },
  { date: "2016-04-01", ratePct: -2e-3 },
  { date: "2016-04-04", ratePct: -1e-3 },
  { date: "2016-04-05", ratePct: -4e-3 },
  { date: "2016-04-06", ratePct: -5e-3 },
  { date: "2016-04-07", ratePct: -7e-3 },
  { date: "2016-04-08", ratePct: -0.01 },
  { date: "2016-04-11", ratePct: -0.011 },
  { date: "2016-04-12", ratePct: -0.012 },
  { date: "2016-04-13", ratePct: -0.013 },
  { date: "2016-04-14", ratePct: -0.011 },
  { date: "2016-04-15", ratePct: -0.011 },
  { date: "2016-04-18", ratePct: -0.012 },
  { date: "2016-04-19", ratePct: -0.011 },
  { date: "2016-04-20", ratePct: -0.011 },
  { date: "2016-04-21", ratePct: -0.011 },
  { date: "2016-04-22", ratePct: -0.011 },
  { date: "2016-04-25", ratePct: -0.013 },
  { date: "2016-04-26", ratePct: -0.014 },
  { date: "2016-04-27", ratePct: -0.011 },
  { date: "2016-04-28", ratePct: -0.012 },
  { date: "2016-04-29", ratePct: -0.012 },
  { date: "2016-05-02", ratePct: -0.012 },
  { date: "2016-05-03", ratePct: -0.012 },
  { date: "2016-05-04", ratePct: -0.012 },
  { date: "2016-05-05", ratePct: -0.013 },
  { date: "2016-05-06", ratePct: -0.013 },
  { date: "2016-05-09", ratePct: -0.014 },
  { date: "2016-05-10", ratePct: -0.013 },
  { date: "2016-05-11", ratePct: -0.012 },
  { date: "2016-05-12", ratePct: -0.012 },
  { date: "2016-05-13", ratePct: -0.012 },
  { date: "2016-05-16", ratePct: -0.012 },
  { date: "2016-05-17", ratePct: -0.011 },
  { date: "2016-05-18", ratePct: -0.011 },
  { date: "2016-05-19", ratePct: -0.011 },
  { date: "2016-05-20", ratePct: -0.011 },
  { date: "2016-05-23", ratePct: -0.012 },
  { date: "2016-05-24", ratePct: -0.012 },
  { date: "2016-05-25", ratePct: -0.013 },
  { date: "2016-05-26", ratePct: -0.014 },
  { date: "2016-05-27", ratePct: -0.015 },
  { date: "2016-05-30", ratePct: -0.015 },
  { date: "2016-05-31", ratePct: -0.015 },
  { date: "2016-06-01", ratePct: -0.018 },
  { date: "2016-06-02", ratePct: -0.017 },
  { date: "2016-06-03", ratePct: -0.016 },
  { date: "2016-06-06", ratePct: -0.018 },
  { date: "2016-06-07", ratePct: -0.018 },
  { date: "2016-06-08", ratePct: -0.018 },
  { date: "2016-06-09", ratePct: -0.018 },
  { date: "2016-06-10", ratePct: -0.018 },
  { date: "2016-06-13", ratePct: -0.02 },
  { date: "2016-06-14", ratePct: -0.021 },
  { date: "2016-06-15", ratePct: -0.021 },
  { date: "2016-06-16", ratePct: -0.026 },
  { date: "2016-06-17", ratePct: -0.026 },
  { date: "2016-06-20", ratePct: -0.028 },
  { date: "2016-06-21", ratePct: -0.029 },
  { date: "2016-06-22", ratePct: -0.029 },
  { date: "2016-06-23", ratePct: -0.029 },
  { date: "2016-06-24", ratePct: -0.047 },
  { date: "2016-06-27", ratePct: -0.048 },
  { date: "2016-06-28", ratePct: -0.049 },
  { date: "2016-06-29", ratePct: -0.051 },
  { date: "2016-06-30", ratePct: -0.051 },
  { date: "2016-07-01", ratePct: -0.052 },
  { date: "2016-07-04", ratePct: -0.055 },
  { date: "2016-07-05", ratePct: -0.059 },
  { date: "2016-07-06", ratePct: -0.062 },
  { date: "2016-07-07", ratePct: -0.063 },
  { date: "2016-07-08", ratePct: -0.059 },
  { date: "2016-07-11", ratePct: -0.063 },
  { date: "2016-07-12", ratePct: -0.061 },
  { date: "2016-07-13", ratePct: -0.061 },
  { date: "2016-07-14", ratePct: -0.061 },
  { date: "2016-07-15", ratePct: -0.057 },
  { date: "2016-07-18", ratePct: -0.061 },
  { date: "2016-07-19", ratePct: -0.059 },
  { date: "2016-07-20", ratePct: -0.056 },
  { date: "2016-07-21", ratePct: -0.054 },
  { date: "2016-07-22", ratePct: -0.05 },
  { date: "2016-07-25", ratePct: -0.049 },
  { date: "2016-07-26", ratePct: -0.048 },
  { date: "2016-07-27", ratePct: -0.049 },
  { date: "2016-07-28", ratePct: -0.049 },
  { date: "2016-07-29", ratePct: -0.049 },
  { date: "2016-08-01", ratePct: -0.048 },
  { date: "2016-08-02", ratePct: -0.048 },
  { date: "2016-08-03", ratePct: -0.047 },
  { date: "2016-08-04", ratePct: -0.045 },
  { date: "2016-08-05", ratePct: -0.047 },
  { date: "2016-08-08", ratePct: -0.046 },
  { date: "2016-08-09", ratePct: -0.047 },
  { date: "2016-08-10", ratePct: -0.048 },
  { date: "2016-08-11", ratePct: -0.049 },
  { date: "2016-08-12", ratePct: -0.049 },
  { date: "2016-08-15", ratePct: -0.05 },
  { date: "2016-08-16", ratePct: -0.05 },
  { date: "2016-08-17", ratePct: -0.049 },
  { date: "2016-08-18", ratePct: -0.048 },
  { date: "2016-08-19", ratePct: -0.047 },
  { date: "2016-08-22", ratePct: -0.046 },
  { date: "2016-08-23", ratePct: -0.047 },
  { date: "2016-08-24", ratePct: -0.048 },
  { date: "2016-08-25", ratePct: -0.049 },
  { date: "2016-08-26", ratePct: -0.05 },
  { date: "2016-08-29", ratePct: -0.05 },
  { date: "2016-08-30", ratePct: -0.051 },
  { date: "2016-08-31", ratePct: -0.052 },
  { date: "2016-09-01", ratePct: -0.051 },
  { date: "2016-09-02", ratePct: -0.052 },
  { date: "2016-09-05", ratePct: -0.052 },
  { date: "2016-09-06", ratePct: -0.054 },
  { date: "2016-09-07", ratePct: -0.059 },
  { date: "2016-09-08", ratePct: -0.06 },
  { date: "2016-09-09", ratePct: -0.057 },
  { date: "2016-09-12", ratePct: -0.057 },
  { date: "2016-09-13", ratePct: -0.055 },
  { date: "2016-09-14", ratePct: -0.054 },
  { date: "2016-09-15", ratePct: -0.053 },
  { date: "2016-09-16", ratePct: -0.054 },
  { date: "2016-09-19", ratePct: -0.056 },
  { date: "2016-09-20", ratePct: -0.057 },
  { date: "2016-09-21", ratePct: -0.058 },
  { date: "2016-09-22", ratePct: -0.059 },
  { date: "2016-09-23", ratePct: -0.059 },
  { date: "2016-09-26", ratePct: -0.06 },
  { date: "2016-09-27", ratePct: -0.06 },
  { date: "2016-09-28", ratePct: -0.061 },
  { date: "2016-09-29", ratePct: -0.064 },
  { date: "2016-09-30", ratePct: -0.064 },
  { date: "2016-10-03", ratePct: -0.064 },
  { date: "2016-10-04", ratePct: -0.064 },
  { date: "2016-10-05", ratePct: -0.064 },
  { date: "2016-10-06", ratePct: -0.064 },
  { date: "2016-10-07", ratePct: -0.063 },
  { date: "2016-10-10", ratePct: -0.064 },
  { date: "2016-10-11", ratePct: -0.066 },
  { date: "2016-10-12", ratePct: -0.069 },
  { date: "2016-10-13", ratePct: -0.071 },
  { date: "2016-10-14", ratePct: -0.072 },
  { date: "2016-10-17", ratePct: -0.071 },
  { date: "2016-10-18", ratePct: -0.073 },
  { date: "2016-10-19", ratePct: -0.073 },
  { date: "2016-10-20", ratePct: -0.073 },
  { date: "2016-10-21", ratePct: -0.074 },
  { date: "2016-10-24", ratePct: -0.07 },
  { date: "2016-10-25", ratePct: -0.071 },
  { date: "2016-10-26", ratePct: -0.07 },
  { date: "2016-10-27", ratePct: -0.07 },
  { date: "2016-10-28", ratePct: -0.069 },
  { date: "2016-10-31", ratePct: -0.069 },
  { date: "2016-11-01", ratePct: -0.069 },
  { date: "2016-11-02", ratePct: -0.071 },
  { date: "2016-11-03", ratePct: -0.071 },
  { date: "2016-11-04", ratePct: -0.071 },
  { date: "2016-11-07", ratePct: -0.07 },
  { date: "2016-11-08", ratePct: -0.07 },
  { date: "2016-11-09", ratePct: -0.07 },
  { date: "2016-11-10", ratePct: -0.071 },
  { date: "2016-11-11", ratePct: -0.069 },
  { date: "2016-11-14", ratePct: -0.07 },
  { date: "2016-11-15", ratePct: -0.071 },
  { date: "2016-11-16", ratePct: -0.073 },
  { date: "2016-11-17", ratePct: -0.075 },
  { date: "2016-11-18", ratePct: -0.077 },
  { date: "2016-11-21", ratePct: -0.078 },
  { date: "2016-11-22", ratePct: -0.079 },
  { date: "2016-11-23", ratePct: -0.078 },
  { date: "2016-11-24", ratePct: -0.079 },
  { date: "2016-11-25", ratePct: -0.079 },
  { date: "2016-11-28", ratePct: -0.079 },
  { date: "2016-11-29", ratePct: -0.079 },
  { date: "2016-11-30", ratePct: -0.08 },
  { date: "2016-12-01", ratePct: -0.079 },
  { date: "2016-12-02", ratePct: -0.076 },
  { date: "2016-12-05", ratePct: -0.078 },
  { date: "2016-12-06", ratePct: -0.079 },
  { date: "2016-12-07", ratePct: -0.078 },
  { date: "2016-12-08", ratePct: -0.078 },
  { date: "2016-12-09", ratePct: -0.081 },
  { date: "2016-12-12", ratePct: -0.081 },
  { date: "2016-12-13", ratePct: -0.081 },
  { date: "2016-12-14", ratePct: -0.082 },
  { date: "2016-12-15", ratePct: -0.081 },
  { date: "2016-12-16", ratePct: -0.081 },
  { date: "2016-12-19", ratePct: -0.081 },
  { date: "2016-12-20", ratePct: -0.081 },
  { date: "2016-12-21", ratePct: -0.082 },
  { date: "2016-12-22", ratePct: -0.082 },
  { date: "2016-12-23", ratePct: -0.082 },
  { date: "2016-12-27", ratePct: -0.081 },
  { date: "2016-12-28", ratePct: -0.082 },
  { date: "2016-12-29", ratePct: -0.081 },
  { date: "2016-12-30", ratePct: -0.082 },
  { date: "2017-01-02", ratePct: -0.083 },
  { date: "2017-01-03", ratePct: -0.084 },
  { date: "2017-01-04", ratePct: -0.085 },
  { date: "2017-01-05", ratePct: -0.085 },
  { date: "2017-01-06", ratePct: -0.087 },
  { date: "2017-01-09", ratePct: -0.088 },
  { date: "2017-01-10", ratePct: -0.09 },
  { date: "2017-01-11", ratePct: -0.091 },
  { date: "2017-01-12", ratePct: -0.093 },
  { date: "2017-01-13", ratePct: -0.094 },
  { date: "2017-01-16", ratePct: -0.095 },
  { date: "2017-01-17", ratePct: -0.098 },
  { date: "2017-01-18", ratePct: -0.099 },
  { date: "2017-01-19", ratePct: -0.1 },
  { date: "2017-01-20", ratePct: -0.1 },
  { date: "2017-01-23", ratePct: -0.101 },
  { date: "2017-01-24", ratePct: -0.101 },
  { date: "2017-01-25", ratePct: -0.101 },
  { date: "2017-01-26", ratePct: -0.102 },
  { date: "2017-01-27", ratePct: -0.101 },
  { date: "2017-01-30", ratePct: -0.1 },
  { date: "2017-01-31", ratePct: -0.101 },
  { date: "2017-02-01", ratePct: -0.103 },
  { date: "2017-02-02", ratePct: -0.102 },
  { date: "2017-02-03", ratePct: -0.101 },
  { date: "2017-02-06", ratePct: -0.101 },
  { date: "2017-02-07", ratePct: -0.101 },
  { date: "2017-02-08", ratePct: -0.101 },
  { date: "2017-02-09", ratePct: -0.101 },
  { date: "2017-02-10", ratePct: -0.101 },
  { date: "2017-02-13", ratePct: -0.102 },
  { date: "2017-02-14", ratePct: -0.104 },
  { date: "2017-02-15", ratePct: -0.104 },
  { date: "2017-02-16", ratePct: -0.106 },
  { date: "2017-02-17", ratePct: -0.109 },
  { date: "2017-02-20", ratePct: -0.109 },
  { date: "2017-02-21", ratePct: -0.111 },
  { date: "2017-02-22", ratePct: -0.111 },
  { date: "2017-02-23", ratePct: -0.111 },
  { date: "2017-02-24", ratePct: -0.113 },
  { date: "2017-02-27", ratePct: -0.113 },
  { date: "2017-02-28", ratePct: -0.114 },
  { date: "2017-03-01", ratePct: -0.114 },
  { date: "2017-03-02", ratePct: -0.114 },
  { date: "2017-03-03", ratePct: -0.113 },
  { date: "2017-03-06", ratePct: -0.111 },
  { date: "2017-03-07", ratePct: -0.111 },
  { date: "2017-03-08", ratePct: -0.111 },
  { date: "2017-03-09", ratePct: -0.111 },
  { date: "2017-03-10", ratePct: -0.109 },
  { date: "2017-03-13", ratePct: -0.108 },
  { date: "2017-03-14", ratePct: -0.108 },
  { date: "2017-03-15", ratePct: -0.11 },
  { date: "2017-03-16", ratePct: -0.111 },
  { date: "2017-03-17", ratePct: -0.109 },
  { date: "2017-03-20", ratePct: -0.109 },
  { date: "2017-03-21", ratePct: -0.106 },
  { date: "2017-03-22", ratePct: -0.106 },
  { date: "2017-03-23", ratePct: -0.107 },
  { date: "2017-03-24", ratePct: -0.107 },
  { date: "2017-03-27", ratePct: -0.109 },
  { date: "2017-03-28", ratePct: -0.11 },
  { date: "2017-03-29", ratePct: -0.109 },
  { date: "2017-03-30", ratePct: -0.109 },
  { date: "2017-03-31", ratePct: -0.109 },
  { date: "2017-04-03", ratePct: -0.111 },
  { date: "2017-04-04", ratePct: -0.111 },
  { date: "2017-04-05", ratePct: -0.114 },
  { date: "2017-04-06", ratePct: -0.115 },
  { date: "2017-04-07", ratePct: -0.116 },
  { date: "2017-04-10", ratePct: -0.118 },
  { date: "2017-04-11", ratePct: -0.119 },
  { date: "2017-04-12", ratePct: -0.12 },
  { date: "2017-04-13", ratePct: -0.12 },
  { date: "2017-04-17", ratePct: -0.189 },
  { date: "2017-04-18", ratePct: -0.122 },
  { date: "2017-04-19", ratePct: -0.123 },
  { date: "2017-04-20", ratePct: -0.124 },
  { date: "2017-04-21", ratePct: -0.124 },
  { date: "2017-04-24", ratePct: -0.121 },
  { date: "2017-04-25", ratePct: -0.121 },
  { date: "2017-04-26", ratePct: -0.121 },
  { date: "2017-04-27", ratePct: -0.121 },
  { date: "2017-04-28", ratePct: -0.121 },
  { date: "2017-05-02", ratePct: -0.121 },
  { date: "2017-05-03", ratePct: -0.125 },
  { date: "2017-05-04", ratePct: -0.126 },
  { date: "2017-05-05", ratePct: -0.124 },
  { date: "2017-05-08", ratePct: -0.124 },
  { date: "2017-05-09", ratePct: -0.123 },
  { date: "2017-05-10", ratePct: -0.124 },
  { date: "2017-05-11", ratePct: -0.124 },
  { date: "2017-05-12", ratePct: -0.127 },
  { date: "2017-05-15", ratePct: -0.127 },
  { date: "2017-05-16", ratePct: -0.128 },
  { date: "2017-05-17", ratePct: -0.129 },
  { date: "2017-05-18", ratePct: -0.129 },
  { date: "2017-05-19", ratePct: -0.129 },
  { date: "2017-05-22", ratePct: -0.129 },
  { date: "2017-05-23", ratePct: -0.129 },
  { date: "2017-05-24", ratePct: -0.129 },
  { date: "2017-05-25", ratePct: -0.129 },
  { date: "2017-05-26", ratePct: -0.13 },
  { date: "2017-05-29", ratePct: -0.131 },
  { date: "2017-05-30", ratePct: -0.131 },
  { date: "2017-05-31", ratePct: -0.131 },
  { date: "2017-06-01", ratePct: -0.131 },
  { date: "2017-06-02", ratePct: -0.131 },
  { date: "2017-06-05", ratePct: -0.131 },
  { date: "2017-06-06", ratePct: -0.133 },
  { date: "2017-06-07", ratePct: -0.134 },
  { date: "2017-06-08", ratePct: -0.134 },
  { date: "2017-06-09", ratePct: -0.14 },
  { date: "2017-06-12", ratePct: -0.147 },
  { date: "2017-06-13", ratePct: -0.149 },
  { date: "2017-06-14", ratePct: -0.152 },
  { date: "2017-06-15", ratePct: -0.152 },
  { date: "2017-06-16", ratePct: -0.154 },
  { date: "2017-06-19", ratePct: -0.156 },
  { date: "2017-06-20", ratePct: -0.159 },
  { date: "2017-06-21", ratePct: -0.161 },
  { date: "2017-06-22", ratePct: -0.161 },
  { date: "2017-06-23", ratePct: -0.163 },
  { date: "2017-06-26", ratePct: -0.161 },
  { date: "2017-06-27", ratePct: -0.161 },
  { date: "2017-06-28", ratePct: -0.158 },
  { date: "2017-06-29", ratePct: -0.156 },
  { date: "2017-06-30", ratePct: -0.156 },
  { date: "2017-07-03", ratePct: -0.157 },
  { date: "2017-07-04", ratePct: -0.159 },
  { date: "2017-07-05", ratePct: -0.16 },
  { date: "2017-07-06", ratePct: -0.161 },
  { date: "2017-07-07", ratePct: -0.161 },
  { date: "2017-07-10", ratePct: -0.156 },
  { date: "2017-07-11", ratePct: -0.155 },
  { date: "2017-07-12", ratePct: -0.154 },
  { date: "2017-07-13", ratePct: -0.151 },
  { date: "2017-07-14", ratePct: -0.151 },
  { date: "2017-07-17", ratePct: -0.151 },
  { date: "2017-07-18", ratePct: -0.151 },
  { date: "2017-07-19", ratePct: -0.151 },
  { date: "2017-07-20", ratePct: -0.151 },
  { date: "2017-07-21", ratePct: -0.152 },
  { date: "2017-07-24", ratePct: -0.153 },
  { date: "2017-07-25", ratePct: -0.153 },
  { date: "2017-07-26", ratePct: -0.153 },
  { date: "2017-07-27", ratePct: -0.153 },
  { date: "2017-07-28", ratePct: -0.152 },
  { date: "2017-07-31", ratePct: -0.151 },
  { date: "2017-08-01", ratePct: -0.151 },
  { date: "2017-08-02", ratePct: -0.153 },
  { date: "2017-08-03", ratePct: -0.152 },
  { date: "2017-08-04", ratePct: -0.151 },
  { date: "2017-08-07", ratePct: -0.152 },
  { date: "2017-08-08", ratePct: -0.152 },
  { date: "2017-08-09", ratePct: -0.153 },
  { date: "2017-08-10", ratePct: -0.154 },
  { date: "2017-08-11", ratePct: -0.156 },
  { date: "2017-08-14", ratePct: -0.158 },
  { date: "2017-08-15", ratePct: -0.157 },
  { date: "2017-08-16", ratePct: -0.157 },
  { date: "2017-08-17", ratePct: -0.158 },
  { date: "2017-08-18", ratePct: -0.158 },
  { date: "2017-08-21", ratePct: -0.158 },
  { date: "2017-08-22", ratePct: -0.158 },
  { date: "2017-08-23", ratePct: -0.159 },
  { date: "2017-08-24", ratePct: -0.159 },
  { date: "2017-08-25", ratePct: -0.159 },
  { date: "2017-08-28", ratePct: -0.159 },
  { date: "2017-08-29", ratePct: -0.16 },
  { date: "2017-08-30", ratePct: -0.161 },
  { date: "2017-08-31", ratePct: -0.161 },
  { date: "2017-09-01", ratePct: -0.161 },
  { date: "2017-09-04", ratePct: -0.161 },
  { date: "2017-09-05", ratePct: -0.161 },
  { date: "2017-09-06", ratePct: -0.163 },
  { date: "2017-09-07", ratePct: -0.162 },
  { date: "2017-09-08", ratePct: -0.166 },
  { date: "2017-09-11", ratePct: -0.168 },
  { date: "2017-09-12", ratePct: -0.169 },
  { date: "2017-09-13", ratePct: -0.169 },
  { date: "2017-09-14", ratePct: -0.171 },
  { date: "2017-09-15", ratePct: -0.171 },
  { date: "2017-09-18", ratePct: -0.171 },
  { date: "2017-09-19", ratePct: -0.171 },
  { date: "2017-09-20", ratePct: -0.171 },
  { date: "2017-09-21", ratePct: -0.171 },
  { date: "2017-09-22", ratePct: -0.171 },
  { date: "2017-09-25", ratePct: -0.171 },
  { date: "2017-09-26", ratePct: -0.171 },
  { date: "2017-09-27", ratePct: -0.171 },
  { date: "2017-09-28", ratePct: -0.172 },
  { date: "2017-09-29", ratePct: -0.172 },
  { date: "2017-10-02", ratePct: -0.172 },
  { date: "2017-10-03", ratePct: -0.171 },
  { date: "2017-10-04", ratePct: -0.168 },
  { date: "2017-10-05", ratePct: -0.171 },
  { date: "2017-10-06", ratePct: -0.173 },
  { date: "2017-10-09", ratePct: -0.176 },
  { date: "2017-10-10", ratePct: -0.181 },
  { date: "2017-10-11", ratePct: -0.181 },
  { date: "2017-10-12", ratePct: -0.181 },
  { date: "2017-10-13", ratePct: -0.181 },
  { date: "2017-10-16", ratePct: -0.182 },
  { date: "2017-10-17", ratePct: -0.183 },
  { date: "2017-10-18", ratePct: -0.183 },
  { date: "2017-10-19", ratePct: -0.183 },
  { date: "2017-10-20", ratePct: -0.183 },
  { date: "2017-10-23", ratePct: -0.183 },
  { date: "2017-10-24", ratePct: -0.183 },
  { date: "2017-10-25", ratePct: -0.183 },
  { date: "2017-10-26", ratePct: -0.183 },
  { date: "2017-10-27", ratePct: -0.184 },
  { date: "2017-10-30", ratePct: -0.185 },
  { date: "2017-10-31", ratePct: -0.185 },
  { date: "2017-11-01", ratePct: -0.187 },
  { date: "2017-11-02", ratePct: -0.189 },
  { date: "2017-11-03", ratePct: -0.191 },
  { date: "2017-11-06", ratePct: -0.191 },
  { date: "2017-11-07", ratePct: -0.19 },
  { date: "2017-11-08", ratePct: -0.191 },
  { date: "2017-11-09", ratePct: -0.191 },
  { date: "2017-11-10", ratePct: -0.191 },
  { date: "2017-11-13", ratePct: -0.191 },
  { date: "2017-11-14", ratePct: -0.191 },
  { date: "2017-11-15", ratePct: -0.192 },
  { date: "2017-11-16", ratePct: -0.192 },
  { date: "2017-11-17", ratePct: -0.192 },
  { date: "2017-11-20", ratePct: -0.187 },
  { date: "2017-11-21", ratePct: -0.186 },
  { date: "2017-11-22", ratePct: -0.186 },
  { date: "2017-11-23", ratePct: -0.186 },
  { date: "2017-11-24", ratePct: -0.186 },
  { date: "2017-11-27", ratePct: -0.186 },
  { date: "2017-11-28", ratePct: -0.186 },
  { date: "2017-11-29", ratePct: -0.187 },
  { date: "2017-11-30", ratePct: -0.188 },
  { date: "2017-12-01", ratePct: -0.188 },
  { date: "2017-12-04", ratePct: -0.19 },
  { date: "2017-12-05", ratePct: -0.191 },
  { date: "2017-12-06", ratePct: -0.191 },
  { date: "2017-12-07", ratePct: -0.19 },
  { date: "2017-12-08", ratePct: -0.191 },
  { date: "2017-12-11", ratePct: -0.191 },
  { date: "2017-12-12", ratePct: -0.191 },
  { date: "2017-12-13", ratePct: -0.191 },
  { date: "2017-12-14", ratePct: -0.192 },
  { date: "2017-12-15", ratePct: -0.193 },
  { date: "2017-12-18", ratePct: -0.194 },
  { date: "2017-12-19", ratePct: -0.194 },
  { date: "2017-12-20", ratePct: -0.188 },
  { date: "2017-12-21", ratePct: -0.186 },
  { date: "2017-12-22", ratePct: -0.186 },
  { date: "2017-12-27", ratePct: -0.186 },
  { date: "2017-12-28", ratePct: -0.186 },
  { date: "2017-12-29", ratePct: -0.186 },
  { date: "2018-01-02", ratePct: -0.186 },
  { date: "2018-01-03", ratePct: -0.187 },
  { date: "2018-01-04", ratePct: -0.187 },
  { date: "2018-01-05", ratePct: -0.187 },
  { date: "2018-01-08", ratePct: -0.187 },
  { date: "2018-01-09", ratePct: -0.187 },
  { date: "2018-01-10", ratePct: -0.186 },
  { date: "2018-01-11", ratePct: -0.188 },
  { date: "2018-01-12", ratePct: -0.186 },
  { date: "2018-01-15", ratePct: -0.187 },
  { date: "2018-01-16", ratePct: -0.186 },
  { date: "2018-01-17", ratePct: -0.186 },
  { date: "2018-01-18", ratePct: -0.191 },
  { date: "2018-01-19", ratePct: -0.191 },
  { date: "2018-01-22", ratePct: -0.191 },
  { date: "2018-01-23", ratePct: -0.191 },
  { date: "2018-01-24", ratePct: -0.192 },
  { date: "2018-01-25", ratePct: -0.191 },
  { date: "2018-01-26", ratePct: -0.191 },
  { date: "2018-01-29", ratePct: -0.191 },
  { date: "2018-01-30", ratePct: -0.191 },
  { date: "2018-01-31", ratePct: -0.191 },
  { date: "2018-02-01", ratePct: -0.191 },
  { date: "2018-02-02", ratePct: -0.191 },
  { date: "2018-02-05", ratePct: -0.191 },
  { date: "2018-02-06", ratePct: -0.191 },
  { date: "2018-02-07", ratePct: -0.191 },
  { date: "2018-02-08", ratePct: -0.191 },
  { date: "2018-02-09", ratePct: -0.191 },
  { date: "2018-02-12", ratePct: -0.191 },
  { date: "2018-02-13", ratePct: -0.191 },
  { date: "2018-02-14", ratePct: -0.192 },
  { date: "2018-02-15", ratePct: -0.191 },
  { date: "2018-02-16", ratePct: -0.192 },
  { date: "2018-02-19", ratePct: -0.193 },
  { date: "2018-02-20", ratePct: -0.193 },
  { date: "2018-02-21", ratePct: -0.191 },
  { date: "2018-02-22", ratePct: -0.191 },
  { date: "2018-02-23", ratePct: -0.191 },
  { date: "2018-02-26", ratePct: -0.19 },
  { date: "2018-02-27", ratePct: -0.191 },
  { date: "2018-02-28", ratePct: -0.191 },
  { date: "2018-03-01", ratePct: -0.191 },
  { date: "2018-03-02", ratePct: -0.191 },
  { date: "2018-03-05", ratePct: -0.191 },
  { date: "2018-03-06", ratePct: -0.191 },
  { date: "2018-03-07", ratePct: -0.191 },
  { date: "2018-03-08", ratePct: -0.191 },
  { date: "2018-03-09", ratePct: -0.191 },
  { date: "2018-03-12", ratePct: -0.191 },
  { date: "2018-03-13", ratePct: -0.191 },
  { date: "2018-03-14", ratePct: -0.191 },
  { date: "2018-03-15", ratePct: -0.191 },
  { date: "2018-03-16", ratePct: -0.192 },
  { date: "2018-03-19", ratePct: -0.192 },
  { date: "2018-03-20", ratePct: -0.191 },
  { date: "2018-03-21", ratePct: -0.191 },
  { date: "2018-03-22", ratePct: -0.191 },
  { date: "2018-03-23", ratePct: -0.19 },
  { date: "2018-03-26", ratePct: -0.191 },
  { date: "2018-03-27", ratePct: -0.191 },
  { date: "2018-03-28", ratePct: -0.191 },
  { date: "2018-03-29", ratePct: -0.19 },
  { date: "2018-04-03", ratePct: -0.19 },
  { date: "2018-04-04", ratePct: -0.19 },
  { date: "2018-04-05", ratePct: -0.191 },
  { date: "2018-04-06", ratePct: -0.191 },
  { date: "2018-04-09", ratePct: -0.191 },
  { date: "2018-04-10", ratePct: -0.191 },
  { date: "2018-04-11", ratePct: -0.19 },
  { date: "2018-04-12", ratePct: -0.191 },
  { date: "2018-04-13", ratePct: -0.19 },
  { date: "2018-04-16", ratePct: -0.189 },
  { date: "2018-04-17", ratePct: -0.189 },
  { date: "2018-04-18", ratePct: -0.189 },
  { date: "2018-04-19", ratePct: -0.189 },
  { date: "2018-04-20", ratePct: -0.189 },
  { date: "2018-04-23", ratePct: -0.189 },
  { date: "2018-04-24", ratePct: -0.189 },
  { date: "2018-04-25", ratePct: -0.189 },
  { date: "2018-04-26", ratePct: -0.189 },
  { date: "2018-04-27", ratePct: -0.189 },
  { date: "2018-04-30", ratePct: -0.189 },
  { date: "2018-05-02", ratePct: -0.189 },
  { date: "2018-05-03", ratePct: -0.189 },
  { date: "2018-05-04", ratePct: -0.19 },
  { date: "2018-05-07", ratePct: -0.189 },
  { date: "2018-05-08", ratePct: -0.189 },
  { date: "2018-05-09", ratePct: -0.189 },
  { date: "2018-05-10", ratePct: -0.189 },
  { date: "2018-05-11", ratePct: -0.189 },
  { date: "2018-05-14", ratePct: -0.19 },
  { date: "2018-05-15", ratePct: -0.188 },
  { date: "2018-05-16", ratePct: -0.188 },
  { date: "2018-05-17", ratePct: -0.188 },
  { date: "2018-05-18", ratePct: -0.189 },
  { date: "2018-05-21", ratePct: -0.187 },
  { date: "2018-05-22", ratePct: -0.189 },
  { date: "2018-05-23", ratePct: -0.189 },
  { date: "2018-05-24", ratePct: -0.187 },
  { date: "2018-05-25", ratePct: -0.188 },
  { date: "2018-05-28", ratePct: -0.186 },
  { date: "2018-05-29", ratePct: -0.186 },
  { date: "2018-05-30", ratePct: -0.184 },
  { date: "2018-05-31", ratePct: -0.184 },
  { date: "2018-06-01", ratePct: -0.184 },
  { date: "2018-06-04", ratePct: -0.184 },
  { date: "2018-06-05", ratePct: -0.182 },
  { date: "2018-06-06", ratePct: -0.18 },
  { date: "2018-06-07", ratePct: -0.18 },
  { date: "2018-06-08", ratePct: -0.18 },
  { date: "2018-06-11", ratePct: -0.181 },
  { date: "2018-06-12", ratePct: -0.181 },
  { date: "2018-06-13", ratePct: -0.181 },
  { date: "2018-06-14", ratePct: -0.181 },
  { date: "2018-06-15", ratePct: -0.183 },
  { date: "2018-06-18", ratePct: -0.184 },
  { date: "2018-06-19", ratePct: -0.181 },
  { date: "2018-06-20", ratePct: -0.182 },
  { date: "2018-06-21", ratePct: -0.182 },
  { date: "2018-06-22", ratePct: -0.18 },
  { date: "2018-06-25", ratePct: -0.181 },
  { date: "2018-06-26", ratePct: -0.181 },
  { date: "2018-06-27", ratePct: -0.181 },
  { date: "2018-06-28", ratePct: -0.181 },
  { date: "2018-06-29", ratePct: -0.181 },
  { date: "2018-07-02", ratePct: -0.181 },
  { date: "2018-07-03", ratePct: -0.181 },
  { date: "2018-07-04", ratePct: -0.181 },
  { date: "2018-07-05", ratePct: -0.181 },
  { date: "2018-07-06", ratePct: -0.181 },
  { date: "2018-07-09", ratePct: -0.181 },
  { date: "2018-07-10", ratePct: -0.18 },
  { date: "2018-07-11", ratePct: -0.179 },
  { date: "2018-07-12", ratePct: -0.179 },
  { date: "2018-07-13", ratePct: -0.179 },
  { date: "2018-07-16", ratePct: -0.179 },
  { date: "2018-07-17", ratePct: -0.179 },
  { date: "2018-07-18", ratePct: -0.179 },
  { date: "2018-07-19", ratePct: -0.179 },
  { date: "2018-07-20", ratePct: -0.179 },
  { date: "2018-07-23", ratePct: -0.179 },
  { date: "2018-07-24", ratePct: -0.179 },
  { date: "2018-07-25", ratePct: -0.179 },
  { date: "2018-07-26", ratePct: -0.179 },
  { date: "2018-07-27", ratePct: -0.179 },
  { date: "2018-07-30", ratePct: -0.179 },
  { date: "2018-07-31", ratePct: -0.178 },
  { date: "2018-08-01", ratePct: -0.177 },
  { date: "2018-08-02", ratePct: -0.176 },
  { date: "2018-08-03", ratePct: -0.176 },
  { date: "2018-08-06", ratePct: -0.176 },
  { date: "2018-08-07", ratePct: -0.176 },
  { date: "2018-08-08", ratePct: -0.176 },
  { date: "2018-08-09", ratePct: -0.173 },
  { date: "2018-08-10", ratePct: -0.169 },
  { date: "2018-08-13", ratePct: -0.166 },
  { date: "2018-08-14", ratePct: -0.166 },
  { date: "2018-08-15", ratePct: -0.166 },
  { date: "2018-08-16", ratePct: -0.166 },
  { date: "2018-08-17", ratePct: -0.167 },
  { date: "2018-08-20", ratePct: -0.167 },
  { date: "2018-08-21", ratePct: -0.167 },
  { date: "2018-08-22", ratePct: -0.167 },
  { date: "2018-08-23", ratePct: -0.167 },
  { date: "2018-08-24", ratePct: -0.166 },
  { date: "2018-08-27", ratePct: -0.166 },
  { date: "2018-08-28", ratePct: -0.166 },
  { date: "2018-08-29", ratePct: -0.165 },
  { date: "2018-08-30", ratePct: -0.166 },
  { date: "2018-08-31", ratePct: -0.166 },
  { date: "2018-09-03", ratePct: -0.166 },
  { date: "2018-09-04", ratePct: -0.166 },
  { date: "2018-09-05", ratePct: -0.167 },
  { date: "2018-09-06", ratePct: -0.167 },
  { date: "2018-09-07", ratePct: -0.167 },
  { date: "2018-09-10", ratePct: -0.167 },
  { date: "2018-09-11", ratePct: -0.166 },
  { date: "2018-09-12", ratePct: -0.166 },
  { date: "2018-09-13", ratePct: -0.168 },
  { date: "2018-09-14", ratePct: -0.168 },
  { date: "2018-09-17", ratePct: -0.169 },
  { date: "2018-09-18", ratePct: -0.168 },
  { date: "2018-09-19", ratePct: -0.167 },
  { date: "2018-09-20", ratePct: -0.168 },
  { date: "2018-09-21", ratePct: -0.168 },
  { date: "2018-09-24", ratePct: -0.167 },
  { date: "2018-09-25", ratePct: -0.165 },
  { date: "2018-09-26", ratePct: -0.164 },
  { date: "2018-09-27", ratePct: -0.161 },
  { date: "2018-09-28", ratePct: -0.159 },
  { date: "2018-10-01", ratePct: -0.158 },
  { date: "2018-10-02", ratePct: -0.157 },
  { date: "2018-10-03", ratePct: -0.157 },
  { date: "2018-10-04", ratePct: -0.159 },
  { date: "2018-10-05", ratePct: -0.158 },
  { date: "2018-10-08", ratePct: -0.158 },
  { date: "2018-10-09", ratePct: -0.156 },
  { date: "2018-10-10", ratePct: -0.156 },
  { date: "2018-10-11", ratePct: -0.156 },
  { date: "2018-10-12", ratePct: -0.157 },
  { date: "2018-10-15", ratePct: -0.156 },
  { date: "2018-10-16", ratePct: -0.156 },
  { date: "2018-10-17", ratePct: -0.156 },
  { date: "2018-10-18", ratePct: -0.155 },
  { date: "2018-10-19", ratePct: -0.154 },
  { date: "2018-10-22", ratePct: -0.151 },
  { date: "2018-10-23", ratePct: -0.149 },
  { date: "2018-10-24", ratePct: -0.147 },
  { date: "2018-10-25", ratePct: -0.147 },
  { date: "2018-10-26", ratePct: -0.148 },
  { date: "2018-10-29", ratePct: -0.149 },
  { date: "2018-10-30", ratePct: -0.149 },
  { date: "2018-10-31", ratePct: -0.149 },
  { date: "2018-11-01", ratePct: -0.148 },
  { date: "2018-11-02", ratePct: -0.148 },
  { date: "2018-11-05", ratePct: -0.148 },
  { date: "2018-11-06", ratePct: -0.149 },
  { date: "2018-11-07", ratePct: -0.149 },
  { date: "2018-11-08", ratePct: -0.148 },
  { date: "2018-11-09", ratePct: -0.148 },
  { date: "2018-11-12", ratePct: -0.148 },
  { date: "2018-11-13", ratePct: -0.147 },
  { date: "2018-11-14", ratePct: -0.147 },
  { date: "2018-11-15", ratePct: -0.147 },
  { date: "2018-11-16", ratePct: -0.147 },
  { date: "2018-11-19", ratePct: -0.148 },
  { date: "2018-11-20", ratePct: -0.148 },
  { date: "2018-11-21", ratePct: -0.148 },
  { date: "2018-11-22", ratePct: -0.148 },
  { date: "2018-11-23", ratePct: -0.147 },
  { date: "2018-11-26", ratePct: -0.146 },
  { date: "2018-11-27", ratePct: -0.146 },
  { date: "2018-11-28", ratePct: -0.146 },
  { date: "2018-11-29", ratePct: -0.146 },
  { date: "2018-11-30", ratePct: -0.146 },
  { date: "2018-12-03", ratePct: -0.143 },
  { date: "2018-12-04", ratePct: -0.142 },
  { date: "2018-12-05", ratePct: -0.141 },
  { date: "2018-12-06", ratePct: -0.14 },
  { date: "2018-12-07", ratePct: -0.137 },
  { date: "2018-12-10", ratePct: -0.134 },
  { date: "2018-12-11", ratePct: -0.131 },
  { date: "2018-12-12", ratePct: -0.131 },
  { date: "2018-12-13", ratePct: -0.129 },
  { date: "2018-12-14", ratePct: -0.128 },
  { date: "2018-12-17", ratePct: -0.127 },
  { date: "2018-12-18", ratePct: -0.125 },
  { date: "2018-12-19", ratePct: -0.124 },
  { date: "2018-12-20", ratePct: -0.121 },
  { date: "2018-12-21", ratePct: -0.119 },
  { date: "2018-12-24", ratePct: -0.118 },
  { date: "2018-12-27", ratePct: -0.119 },
  { date: "2018-12-28", ratePct: -0.119 },
  { date: "2018-12-31", ratePct: -0.117 },
  { date: "2019-01-02", ratePct: -0.121 },
  { date: "2019-01-03", ratePct: -0.119 },
  { date: "2019-01-04", ratePct: -0.119 },
  { date: "2019-01-07", ratePct: -0.119 },
  { date: "2019-01-08", ratePct: -0.118 },
  { date: "2019-01-09", ratePct: -0.118 },
  { date: "2019-01-10", ratePct: -0.118 },
  { date: "2019-01-11", ratePct: -0.117 },
  { date: "2019-01-14", ratePct: -0.118 },
  { date: "2019-01-15", ratePct: -0.117 },
  { date: "2019-01-16", ratePct: -0.117 },
  { date: "2019-01-17", ratePct: -0.118 },
  { date: "2019-01-18", ratePct: -0.116 },
  { date: "2019-01-21", ratePct: -0.115 },
  { date: "2019-01-22", ratePct: -0.115 },
  { date: "2019-01-23", ratePct: -0.116 },
  { date: "2019-01-24", ratePct: -0.115 },
  { date: "2019-01-25", ratePct: -0.114 },
  { date: "2019-01-28", ratePct: -0.112 },
  { date: "2019-01-29", ratePct: -0.109 },
  { date: "2019-01-30", ratePct: -0.109 },
  { date: "2019-01-31", ratePct: -0.109 },
  { date: "2019-02-01", ratePct: -0.11 },
  { date: "2019-02-04", ratePct: -0.109 },
  { date: "2019-02-05", ratePct: -0.109 },
  { date: "2019-02-06", ratePct: -0.108 },
  { date: "2019-02-07", ratePct: -0.108 },
  { date: "2019-02-08", ratePct: -0.109 },
  { date: "2019-02-11", ratePct: -0.109 },
  { date: "2019-02-12", ratePct: -0.11 },
  { date: "2019-02-13", ratePct: -0.108 },
  { date: "2019-02-14", ratePct: -0.108 },
  { date: "2019-02-15", ratePct: -0.108 },
  { date: "2019-02-18", ratePct: -0.108 },
  { date: "2019-02-19", ratePct: -0.108 },
  { date: "2019-02-20", ratePct: -0.108 },
  { date: "2019-02-21", ratePct: -0.108 },
  { date: "2019-02-22", ratePct: -0.108 },
  { date: "2019-02-25", ratePct: -0.108 },
  { date: "2019-02-26", ratePct: -0.108 },
  { date: "2019-02-27", ratePct: -0.108 },
  { date: "2019-02-28", ratePct: -0.108 },
  { date: "2019-03-01", ratePct: -0.108 },
  { date: "2019-03-04", ratePct: -0.108 },
  { date: "2019-03-05", ratePct: -0.108 },
  { date: "2019-03-06", ratePct: -0.108 },
  { date: "2019-03-07", ratePct: -0.108 },
  { date: "2019-03-08", ratePct: -0.109 },
  { date: "2019-03-11", ratePct: -0.108 },
  { date: "2019-03-12", ratePct: -0.108 },
  { date: "2019-03-13", ratePct: -0.109 },
  { date: "2019-03-14", ratePct: -0.109 },
  { date: "2019-03-15", ratePct: -0.109 },
  { date: "2019-03-18", ratePct: -0.109 },
  { date: "2019-03-19", ratePct: -0.109 },
  { date: "2019-03-20", ratePct: -0.109 },
  { date: "2019-03-21", ratePct: -0.108 },
  { date: "2019-03-22", ratePct: -0.108 },
  { date: "2019-03-25", ratePct: -0.108 },
  { date: "2019-03-26", ratePct: -0.108 },
  { date: "2019-03-27", ratePct: -0.109 },
  { date: "2019-03-28", ratePct: -0.112 },
  { date: "2019-03-29", ratePct: -0.112 },
  { date: "2019-04-01", ratePct: -0.112 },
  { date: "2019-04-02", ratePct: -0.112 },
  { date: "2019-04-03", ratePct: -0.112 },
  { date: "2019-04-04", ratePct: -0.112 },
  { date: "2019-04-05", ratePct: -0.112 },
  { date: "2019-04-08", ratePct: -0.112 },
  { date: "2019-04-09", ratePct: -0.112 },
  { date: "2019-04-10", ratePct: -0.112 },
  { date: "2019-04-11", ratePct: -0.112 },
  { date: "2019-04-12", ratePct: -0.112 },
  { date: "2019-04-15", ratePct: -0.111 },
  { date: "2019-04-16", ratePct: -0.112 },
  { date: "2019-04-17", ratePct: -0.112 },
  { date: "2019-04-18", ratePct: -0.112 },
  { date: "2019-04-23", ratePct: -0.112 },
  { date: "2019-04-24", ratePct: -0.112 },
  { date: "2019-04-25", ratePct: -0.112 },
  { date: "2019-04-26", ratePct: -0.113 },
  { date: "2019-04-29", ratePct: -0.114 },
  { date: "2019-04-30", ratePct: -0.114 },
  { date: "2019-05-02", ratePct: -0.114 },
  { date: "2019-05-03", ratePct: -0.114 },
  { date: "2019-05-06", ratePct: -0.114 },
  { date: "2019-05-07", ratePct: -0.115 },
  { date: "2019-05-08", ratePct: -0.117 },
  { date: "2019-05-09", ratePct: -0.118 },
  { date: "2019-05-10", ratePct: -0.118 },
  { date: "2019-05-13", ratePct: -0.118 },
  { date: "2019-05-14", ratePct: -0.121 },
  { date: "2019-05-15", ratePct: -0.125 },
  { date: "2019-05-16", ratePct: -0.128 },
  { date: "2019-05-17", ratePct: -0.133 },
  { date: "2019-05-20", ratePct: -0.135 },
  { date: "2019-05-21", ratePct: -0.145 },
  { date: "2019-05-22", ratePct: -0.145 },
  { date: "2019-05-23", ratePct: -0.148 },
  { date: "2019-05-24", ratePct: -0.148 },
  { date: "2019-05-27", ratePct: -0.148 },
  { date: "2019-05-28", ratePct: -0.153 },
  { date: "2019-05-29", ratePct: -0.158 },
  { date: "2019-05-30", ratePct: -0.163 },
  { date: "2019-05-31", ratePct: -0.168 },
  { date: "2019-06-03", ratePct: -0.175 },
  { date: "2019-06-04", ratePct: -0.177 },
  { date: "2019-06-05", ratePct: -0.177 },
  { date: "2019-06-06", ratePct: -0.183 },
  { date: "2019-06-07", ratePct: -0.175 },
  { date: "2019-06-10", ratePct: -0.178 },
  { date: "2019-06-11", ratePct: -0.178 },
  { date: "2019-06-12", ratePct: -0.173 },
  { date: "2019-06-13", ratePct: -0.168 },
  { date: "2019-06-14", ratePct: -0.171 },
  { date: "2019-06-17", ratePct: -0.177 },
  { date: "2019-06-18", ratePct: -0.184 },
  { date: "2019-06-19", ratePct: -0.208 },
  { date: "2019-06-20", ratePct: -0.211 },
  { date: "2019-06-21", ratePct: -0.212 },
  { date: "2019-06-24", ratePct: -0.21 },
  { date: "2019-06-25", ratePct: -0.21 },
  { date: "2019-06-26", ratePct: -0.211 },
  { date: "2019-06-27", ratePct: -0.213 },
  { date: "2019-06-28", ratePct: -0.214 },
  { date: "2019-07-01", ratePct: -0.217 },
  { date: "2019-07-02", ratePct: -0.233 },
  { date: "2019-07-03", ratePct: -0.243 },
  { date: "2019-07-04", ratePct: -0.258 },
  { date: "2019-07-05", ratePct: -0.268 },
  { date: "2019-07-08", ratePct: -0.258 },
  { date: "2019-07-09", ratePct: -0.258 },
  { date: "2019-07-10", ratePct: -0.253 },
  { date: "2019-07-11", ratePct: -0.277 },
  { date: "2019-07-12", ratePct: -0.28 },
  { date: "2019-07-15", ratePct: -0.287 },
  { date: "2019-07-16", ratePct: -0.286 },
  { date: "2019-07-17", ratePct: -0.298 },
  { date: "2019-07-18", ratePct: -0.303 },
  { date: "2019-07-19", ratePct: -0.308 },
  { date: "2019-07-22", ratePct: -0.307 },
  { date: "2019-07-23", ratePct: -0.311 },
  { date: "2019-07-24", ratePct: -0.321 },
  { date: "2019-07-25", ratePct: -0.318 },
  { date: "2019-07-26", ratePct: -0.314 },
  { date: "2019-07-29", ratePct: -0.314 },
  { date: "2019-07-30", ratePct: -0.301 },
  { date: "2019-07-31", ratePct: -0.303 },
  { date: "2019-08-01", ratePct: -0.3 },
  { date: "2019-08-02", ratePct: -0.304 },
  { date: "2019-08-05", ratePct: -0.308 },
  { date: "2019-08-06", ratePct: -0.319 },
  { date: "2019-08-07", ratePct: -0.322 },
  { date: "2019-08-08", ratePct: -0.339 },
  { date: "2019-08-09", ratePct: -0.343 },
  { date: "2019-08-12", ratePct: -0.352 },
  { date: "2019-08-13", ratePct: -0.357 },
  { date: "2019-08-14", ratePct: -0.35 },
  { date: "2019-08-15", ratePct: -0.353 },
  { date: "2019-08-16", ratePct: -0.385 },
  { date: "2019-08-19", ratePct: -0.398 },
  { date: "2019-08-20", ratePct: -0.395 },
  { date: "2019-08-21", ratePct: -0.399 },
  { date: "2019-08-22", ratePct: -0.386 },
  { date: "2019-08-23", ratePct: -0.358 },
  { date: "2019-08-26", ratePct: -0.364 },
  { date: "2019-08-27", ratePct: -0.369 },
  { date: "2019-08-28", ratePct: -0.379 },
  { date: "2019-08-29", ratePct: -0.375 },
  { date: "2019-08-30", ratePct: -0.383 },
  { date: "2019-09-02", ratePct: -0.384 },
  { date: "2019-09-03", ratePct: -0.385 },
  { date: "2019-09-04", ratePct: -0.379 },
  { date: "2019-09-05", ratePct: -0.373 },
  { date: "2019-09-06", ratePct: -0.358 },
  { date: "2019-09-09", ratePct: -0.36 },
  { date: "2019-09-10", ratePct: -0.37 },
  { date: "2019-09-11", ratePct: -0.373 },
  { date: "2019-09-12", ratePct: -0.373 },
  { date: "2019-09-13", ratePct: -0.325 },
  { date: "2019-09-16", ratePct: -0.309 },
  { date: "2019-09-17", ratePct: -0.304 },
  { date: "2019-09-18", ratePct: -0.306 },
  { date: "2019-09-19", ratePct: -0.303 },
  { date: "2019-09-20", ratePct: -0.298 },
  { date: "2019-09-23", ratePct: -0.302 },
  { date: "2019-09-24", ratePct: -0.316 },
  { date: "2019-09-25", ratePct: -0.325 },
  { date: "2019-09-26", ratePct: -0.324 },
  { date: "2019-09-27", ratePct: -0.325 },
  { date: "2019-09-30", ratePct: -0.33 },
  { date: "2019-10-01", ratePct: -0.33 },
  { date: "2019-10-02", ratePct: -0.323 },
  { date: "2019-10-03", ratePct: -0.328 },
  { date: "2019-10-04", ratePct: -0.336 },
  { date: "2019-10-07", ratePct: -0.336 },
  { date: "2019-10-08", ratePct: -0.33 },
  { date: "2019-10-09", ratePct: -0.333 },
  { date: "2019-10-10", ratePct: -0.326 },
  { date: "2019-10-11", ratePct: -0.303 },
  { date: "2019-10-14", ratePct: -0.301 },
  { date: "2019-10-15", ratePct: -0.303 },
  { date: "2019-10-16", ratePct: -0.299 },
  { date: "2019-10-17", ratePct: -0.294 },
  { date: "2019-10-18", ratePct: -0.298 },
  { date: "2019-10-21", ratePct: -0.294 },
  { date: "2019-10-22", ratePct: -0.284 },
  { date: "2019-10-23", ratePct: -0.288 },
  { date: "2019-10-24", ratePct: -0.288 },
  { date: "2019-10-25", ratePct: -0.293 },
  { date: "2019-10-28", ratePct: -0.281 },
  { date: "2019-10-29", ratePct: -0.28 },
  { date: "2019-10-30", ratePct: -0.276 },
  { date: "2019-10-31", ratePct: -0.273 },
  { date: "2019-11-01", ratePct: -0.281 },
  { date: "2019-11-04", ratePct: -0.276 },
  { date: "2019-11-05", ratePct: -0.278 },
  { date: "2019-11-06", ratePct: -0.269 },
  { date: "2019-11-07", ratePct: -0.27 },
  { date: "2019-11-08", ratePct: -0.262 },
  { date: "2019-11-11", ratePct: -0.263 },
  { date: "2019-11-12", ratePct: -0.255 },
  { date: "2019-11-13", ratePct: -0.261 },
  { date: "2019-11-14", ratePct: -0.266 },
  { date: "2019-11-15", ratePct: -0.269 },
  { date: "2019-11-18", ratePct: -0.267 },
  { date: "2019-11-19", ratePct: -0.271 },
  { date: "2019-11-20", ratePct: -0.273 },
  { date: "2019-11-21", ratePct: -0.28 },
  { date: "2019-11-22", ratePct: -0.277 },
  { date: "2019-11-25", ratePct: -0.28 },
  { date: "2019-11-26", ratePct: -0.279 },
  { date: "2019-11-27", ratePct: -0.278 },
  { date: "2019-11-28", ratePct: -0.283 },
  { date: "2019-11-29", ratePct: -0.273 },
  { date: "2019-12-02", ratePct: -0.27 },
  { date: "2019-12-03", ratePct: -0.263 },
  { date: "2019-12-04", ratePct: -0.267 },
  { date: "2019-12-05", ratePct: -0.269 },
  { date: "2019-12-06", ratePct: -0.269 },
  { date: "2019-12-09", ratePct: -0.277 },
  { date: "2019-12-10", ratePct: -0.269 },
  { date: "2019-12-11", ratePct: -0.272 },
  { date: "2019-12-12", ratePct: -0.266 },
  { date: "2019-12-13", ratePct: -0.263 },
  { date: "2019-12-16", ratePct: -0.262 },
  { date: "2019-12-17", ratePct: -0.263 },
  { date: "2019-12-18", ratePct: -0.269 },
  { date: "2019-12-19", ratePct: -0.262 },
  { date: "2019-12-20", ratePct: -0.253 },
  { date: "2019-12-23", ratePct: -0.25 },
  { date: "2019-12-24", ratePct: -0.248 },
  { date: "2019-12-27", ratePct: -0.247 },
  { date: "2019-12-30", ratePct: -0.24 },
  { date: "2019-12-31", ratePct: -0.249 },
  { date: "2020-01-02", ratePct: -0.248 },
  { date: "2020-01-03", ratePct: -0.238 },
  { date: "2020-01-06", ratePct: -0.248 },
  { date: "2020-01-07", ratePct: -0.248 },
  { date: "2020-01-08", ratePct: -0.251 },
  { date: "2020-01-09", ratePct: -0.26 },
  { date: "2020-01-10", ratePct: -0.253 },
  { date: "2020-01-13", ratePct: -0.246 },
  { date: "2020-01-14", ratePct: -0.243 },
  { date: "2020-01-15", ratePct: -0.252 },
  { date: "2020-01-16", ratePct: -0.251 },
  { date: "2020-01-17", ratePct: -0.242 },
  { date: "2020-01-20", ratePct: -0.244 },
  { date: "2020-01-21", ratePct: -0.243 },
  { date: "2020-01-22", ratePct: -0.242 },
  { date: "2020-01-23", ratePct: -0.247 },
  { date: "2020-01-24", ratePct: -0.258 },
  { date: "2020-01-27", ratePct: -0.26 },
  { date: "2020-01-28", ratePct: -0.27 },
  { date: "2020-01-29", ratePct: -0.269 },
  { date: "2020-01-30", ratePct: -0.278 },
  { date: "2020-01-31", ratePct: -0.284 },
  { date: "2020-02-03", ratePct: -0.29 },
  { date: "2020-02-04", ratePct: -0.288 },
  { date: "2020-02-05", ratePct: -0.278 },
  { date: "2020-02-06", ratePct: -0.27 },
  { date: "2020-02-07", ratePct: -0.269 },
  { date: "2020-02-10", ratePct: -0.269 },
  { date: "2020-02-11", ratePct: -0.276 },
  { date: "2020-02-12", ratePct: -0.288 },
  { date: "2020-02-13", ratePct: -0.287 },
  { date: "2020-02-14", ratePct: -0.293 },
  { date: "2020-02-17", ratePct: -0.294 },
  { date: "2020-02-18", ratePct: -0.292 },
  { date: "2020-02-19", ratePct: -0.288 },
  { date: "2020-02-20", ratePct: -0.294 },
  { date: "2020-02-21", ratePct: -0.287 },
  { date: "2020-02-24", ratePct: -0.284 },
  { date: "2020-02-25", ratePct: -0.295 },
  { date: "2020-02-26", ratePct: -0.306 },
  { date: "2020-02-27", ratePct: -0.303 },
  { date: "2020-02-28", ratePct: -0.311 },
  { date: "2020-03-02", ratePct: -0.327 },
  { date: "2020-03-03", ratePct: -0.362 },
  { date: "2020-03-04", ratePct: -0.359 },
  { date: "2020-03-05", ratePct: -0.362 },
  { date: "2020-03-06", ratePct: -0.348 },
  { date: "2020-03-09", ratePct: -0.352 },
  { date: "2020-03-10", ratePct: -0.358 },
  { date: "2020-03-11", ratePct: -0.339 },
  { date: "2020-03-12", ratePct: -0.368 },
  { date: "2020-03-13", ratePct: -0.287 },
  { date: "2020-03-16", ratePct: -0.268 },
  { date: "2020-03-17", ratePct: -0.263 },
  { date: "2020-03-18", ratePct: -0.253 },
  { date: "2020-03-19", ratePct: -0.221 },
  { date: "2020-03-20", ratePct: -0.186 },
  { date: "2020-03-23", ratePct: -0.191 },
  { date: "2020-03-24", ratePct: -0.189 },
  { date: "2020-03-25", ratePct: -0.176 },
  { date: "2020-03-26", ratePct: -0.148 },
  { date: "2020-03-27", ratePct: -0.153 },
  { date: "2020-03-30", ratePct: -0.163 },
  { date: "2020-03-31", ratePct: -0.171 },
  { date: "2020-04-01", ratePct: -0.168 },
  { date: "2020-04-02", ratePct: -0.153 },
  { date: "2020-04-03", ratePct: -0.149 },
  { date: "2020-04-06", ratePct: -0.134 },
  { date: "2020-04-07", ratePct: -0.122 },
  { date: "2020-04-08", ratePct: -0.09 },
  { date: "2020-04-09", ratePct: -0.087 },
  { date: "2020-04-14", ratePct: -0.105 },
  { date: "2020-04-15", ratePct: -0.11 },
  { date: "2020-04-16", ratePct: -0.098 },
  { date: "2020-04-17", ratePct: -0.105 },
  { date: "2020-04-20", ratePct: -0.091 },
  { date: "2020-04-21", ratePct: -0.078 },
  { date: "2020-04-22", ratePct: -0.053 },
  { date: "2020-04-23", ratePct: -0.066 },
  { date: "2020-04-24", ratePct: -0.083 },
  { date: "2020-04-27", ratePct: -0.109 },
  { date: "2020-04-28", ratePct: -0.114 },
  { date: "2020-04-29", ratePct: -0.131 },
  { date: "2020-04-30", ratePct: -0.118 },
  { date: "2020-05-04", ratePct: -0.108 },
  { date: "2020-05-05", ratePct: -0.108 },
  { date: "2020-05-06", ratePct: -0.088 },
  { date: "2020-05-07", ratePct: -0.078 },
  { date: "2020-05-08", ratePct: -0.075 },
  { date: "2020-05-11", ratePct: -0.085 },
  { date: "2020-05-12", ratePct: -0.073 },
  { date: "2020-05-13", ratePct: -0.068 },
  { date: "2020-05-14", ratePct: -0.078 },
  { date: "2020-05-15", ratePct: -0.078 },
  { date: "2020-05-18", ratePct: -0.084 },
  { date: "2020-05-19", ratePct: -0.075 },
  { date: "2020-05-20", ratePct: -0.058 },
  { date: "2020-05-21", ratePct: -0.078 },
  { date: "2020-05-22", ratePct: -0.093 },
  { date: "2020-05-25", ratePct: -0.083 },
  { date: "2020-05-26", ratePct: -0.078 },
  { date: "2020-05-27", ratePct: -0.076 },
  { date: "2020-05-28", ratePct: -0.078 },
  { date: "2020-05-29", ratePct: -0.085 },
  { date: "2020-06-01", ratePct: -0.103 },
  { date: "2020-06-02", ratePct: -0.107 },
  { date: "2020-06-03", ratePct: -0.105 },
  { date: "2020-06-04", ratePct: -0.112 },
  { date: "2020-06-05", ratePct: -0.12 },
  { date: "2020-06-08", ratePct: -0.12 },
  { date: "2020-06-09", ratePct: -0.133 },
  { date: "2020-06-10", ratePct: -0.118 },
  { date: "2020-06-11", ratePct: -0.118 },
  { date: "2020-06-12", ratePct: -0.124 },
  { date: "2020-06-15", ratePct: -0.135 },
  { date: "2020-06-16", ratePct: -0.135 },
  { date: "2020-06-17", ratePct: -0.13 },
  { date: "2020-06-18", ratePct: -0.147 },
  { date: "2020-06-19", ratePct: -0.169 },
  { date: "2020-06-22", ratePct: -0.179 },
  { date: "2020-06-23", ratePct: -0.188 },
  { date: "2020-06-24", ratePct: -0.184 },
  { date: "2020-06-25", ratePct: -0.188 },
  { date: "2020-06-26", ratePct: -0.199 },
  { date: "2020-06-29", ratePct: -0.205 },
  { date: "2020-06-30", ratePct: -0.225 },
  { date: "2020-07-01", ratePct: -0.233 },
  { date: "2020-07-02", ratePct: -0.237 },
  { date: "2020-07-03", ratePct: -0.238 },
  { date: "2020-07-06", ratePct: -0.243 },
  { date: "2020-07-07", ratePct: -0.258 },
  { date: "2020-07-08", ratePct: -0.263 },
  { date: "2020-07-09", ratePct: -0.263 },
  { date: "2020-07-10", ratePct: -0.284 },
  { date: "2020-07-13", ratePct: -0.28 },
  { date: "2020-07-14", ratePct: -0.271 },
  { date: "2020-07-15", ratePct: -0.273 },
  { date: "2020-07-16", ratePct: -0.282 },
  { date: "2020-07-17", ratePct: -0.29 },
  { date: "2020-07-20", ratePct: -0.279 },
  { date: "2020-07-21", ratePct: -0.28 },
  { date: "2020-07-22", ratePct: -0.283 },
  { date: "2020-07-23", ratePct: -0.286 },
  { date: "2020-07-24", ratePct: -0.292 },
  { date: "2020-07-27", ratePct: -0.288 },
  { date: "2020-07-28", ratePct: -0.307 },
  { date: "2020-07-29", ratePct: -0.323 },
  { date: "2020-07-30", ratePct: -0.328 },
  { date: "2020-07-31", ratePct: -0.333 },
  { date: "2020-08-03", ratePct: -0.336 },
  { date: "2020-08-04", ratePct: -0.338 },
  { date: "2020-08-05", ratePct: -0.344 },
  { date: "2020-08-06", ratePct: -0.34 },
  { date: "2020-08-07", ratePct: -0.35 },
  { date: "2020-08-10", ratePct: -0.35 },
  { date: "2020-08-11", ratePct: -0.356 },
  { date: "2020-08-12", ratePct: -0.353 },
  { date: "2020-08-13", ratePct: -0.351 },
  { date: "2020-08-14", ratePct: -0.353 },
  { date: "2020-08-17", ratePct: -0.355 },
  { date: "2020-08-18", ratePct: -0.365 },
  { date: "2020-08-19", ratePct: -0.366 },
  { date: "2020-08-20", ratePct: -0.372 },
  { date: "2020-08-21", ratePct: -0.376 },
  { date: "2020-08-24", ratePct: -0.377 },
  { date: "2020-08-25", ratePct: -0.373 },
  { date: "2020-08-26", ratePct: -0.366 },
  { date: "2020-08-27", ratePct: -0.364 },
  { date: "2020-08-28", ratePct: -0.369 },
  { date: "2020-08-31", ratePct: -0.383 },
  { date: "2020-09-01", ratePct: -0.373 },
  { date: "2020-09-02", ratePct: -0.389 },
  { date: "2020-09-03", ratePct: -0.394 },
  { date: "2020-09-04", ratePct: -0.401 },
  { date: "2020-09-07", ratePct: -0.401 },
  { date: "2020-09-08", ratePct: -0.402 },
  { date: "2020-09-09", ratePct: -0.408 },
  { date: "2020-09-10", ratePct: -0.401 },
  { date: "2020-09-11", ratePct: -0.395 },
  { date: "2020-09-14", ratePct: -0.403 },
  { date: "2020-09-15", ratePct: -0.415 },
  { date: "2020-09-16", ratePct: -0.419 },
  { date: "2020-09-17", ratePct: -0.423 },
  { date: "2020-09-18", ratePct: -0.429 },
  { date: "2020-09-21", ratePct: -0.433 },
  { date: "2020-09-22", ratePct: -0.438 },
  { date: "2020-09-23", ratePct: -0.431 },
  { date: "2020-09-24", ratePct: -0.433 },
  { date: "2020-09-25", ratePct: -0.433 },
  { date: "2020-09-28", ratePct: -0.427 },
  { date: "2020-09-29", ratePct: -0.43 },
  { date: "2020-09-30", ratePct: -0.443 },
  { date: "2020-10-01", ratePct: -0.442 },
  { date: "2020-10-02", ratePct: -0.449 },
  { date: "2020-10-05", ratePct: -0.458 },
  { date: "2020-10-06", ratePct: -0.46 },
  { date: "2020-10-07", ratePct: -0.463 },
  { date: "2020-10-08", ratePct: -0.455 },
  { date: "2020-10-09", ratePct: -0.463 },
  { date: "2020-10-12", ratePct: -0.468 },
  { date: "2020-10-13", ratePct: -0.467 },
  { date: "2020-10-14", ratePct: -0.468 },
  { date: "2020-10-15", ratePct: -0.472 },
  { date: "2020-10-16", ratePct: -0.468 },
  { date: "2020-10-19", ratePct: -0.47 },
  { date: "2020-10-20", ratePct: -0.473 },
  { date: "2020-10-21", ratePct: -0.471 },
  { date: "2020-10-22", ratePct: -0.467 },
  { date: "2020-10-23", ratePct: -0.464 },
  { date: "2020-10-26", ratePct: -0.463 },
  { date: "2020-10-27", ratePct: -0.465 },
  { date: "2020-10-28", ratePct: -0.475 },
  { date: "2020-10-29", ratePct: -0.482 },
  { date: "2020-10-30", ratePct: -0.489 },
  { date: "2020-11-02", ratePct: -0.486 },
  { date: "2020-11-03", ratePct: -0.486 },
  { date: "2020-11-04", ratePct: -0.486 },
  { date: "2020-11-05", ratePct: -0.483 },
  { date: "2020-11-06", ratePct: -0.483 },
  { date: "2020-11-09", ratePct: -0.483 },
  { date: "2020-11-10", ratePct: -0.472 },
  { date: "2020-11-11", ratePct: -0.473 },
  { date: "2020-11-12", ratePct: -0.468 },
  { date: "2020-11-13", ratePct: -0.469 },
  { date: "2020-11-16", ratePct: -0.476 },
  { date: "2020-11-17", ratePct: -0.474 },
  { date: "2020-11-18", ratePct: -0.483 },
  { date: "2020-11-19", ratePct: -0.483 },
  { date: "2020-11-20", ratePct: -0.483 },
  { date: "2020-11-23", ratePct: -0.484 },
  { date: "2020-11-24", ratePct: -0.482 },
  { date: "2020-11-25", ratePct: -0.482 },
  { date: "2020-11-26", ratePct: -0.483 },
  { date: "2020-11-27", ratePct: -0.487 },
  { date: "2020-11-30", ratePct: -0.487 },
  { date: "2020-12-01", ratePct: -0.487 },
  { date: "2020-12-02", ratePct: -0.486 },
  { date: "2020-12-03", ratePct: -0.488 },
  { date: "2020-12-04", ratePct: -0.49 },
  { date: "2020-12-07", ratePct: -0.499 },
  { date: "2020-12-08", ratePct: -0.504 },
  { date: "2020-12-09", ratePct: -0.507 },
  { date: "2020-12-10", ratePct: -0.504 },
  { date: "2020-12-11", ratePct: -0.499 },
  { date: "2020-12-14", ratePct: -0.505 },
  { date: "2020-12-15", ratePct: -0.503 },
  { date: "2020-12-16", ratePct: -0.499 },
  { date: "2020-12-17", ratePct: -0.495 },
  { date: "2020-12-18", ratePct: -0.498 },
  { date: "2020-12-21", ratePct: -0.492 },
  { date: "2020-12-22", ratePct: -0.493 },
  { date: "2020-12-23", ratePct: -0.495 },
  { date: "2020-12-24", ratePct: -0.494 },
  { date: "2020-12-28", ratePct: -0.495 },
  { date: "2020-12-29", ratePct: -0.495 },
  { date: "2020-12-30", ratePct: -0.499 },
  { date: "2020-12-31", ratePct: -0.499 },
  { date: "2021-01-04", ratePct: -0.502 },
  { date: "2021-01-05", ratePct: -0.503 },
  { date: "2021-01-06", ratePct: -0.509 },
  { date: "2021-01-07", ratePct: -0.509 },
  { date: "2021-01-08", ratePct: -0.51 },
  { date: "2021-01-11", ratePct: -0.503 },
  { date: "2021-01-12", ratePct: -0.506 },
  { date: "2021-01-13", ratePct: -0.498 },
  { date: "2021-01-14", ratePct: -0.505 },
  { date: "2021-01-15", ratePct: -0.508 },
  { date: "2021-01-18", ratePct: -0.503 },
  { date: "2021-01-19", ratePct: -0.502 },
  { date: "2021-01-20", ratePct: -0.506 },
  { date: "2021-01-21", ratePct: -0.505 },
  { date: "2021-01-22", ratePct: -0.498 },
  { date: "2021-01-25", ratePct: -0.493 },
  { date: "2021-01-26", ratePct: -0.504 },
  { date: "2021-01-27", ratePct: -0.505 },
  { date: "2021-01-28", ratePct: -0.513 },
  { date: "2021-01-29", ratePct: -0.512 },
  { date: "2021-02-01", ratePct: -0.511 },
  { date: "2021-02-02", ratePct: -0.515 },
  { date: "2021-02-03", ratePct: -0.507 },
  { date: "2021-02-04", ratePct: -0.508 },
  { date: "2021-02-05", ratePct: -0.504 },
  { date: "2021-02-08", ratePct: -0.503 },
  { date: "2021-02-09", ratePct: -0.503 },
  { date: "2021-02-10", ratePct: -0.503 },
  { date: "2021-02-11", ratePct: -0.502 },
  { date: "2021-02-12", ratePct: -0.502 },
  { date: "2021-02-15", ratePct: -0.505 },
  { date: "2021-02-16", ratePct: -0.5 },
  { date: "2021-02-17", ratePct: -0.498 },
  { date: "2021-02-18", ratePct: -0.498 },
  { date: "2021-02-19", ratePct: -0.494 },
  { date: "2021-02-22", ratePct: -0.494 },
  { date: "2021-02-23", ratePct: -0.496 },
  { date: "2021-02-24", ratePct: -0.494 },
  { date: "2021-02-25", ratePct: -0.497 },
  { date: "2021-02-26", ratePct: -0.483 },
  { date: "2021-03-01", ratePct: -0.478 },
  { date: "2021-03-02", ratePct: -0.488 },
  { date: "2021-03-03", ratePct: -0.482 },
  { date: "2021-03-04", ratePct: -0.486 },
  { date: "2021-03-05", ratePct: -0.487 },
  { date: "2021-03-08", ratePct: -0.483 },
  { date: "2021-03-09", ratePct: -0.488 },
  { date: "2021-03-10", ratePct: -0.487 },
  { date: "2021-03-11", ratePct: -0.486 },
  { date: "2021-03-12", ratePct: -0.483 },
  { date: "2021-03-15", ratePct: -0.482 },
  { date: "2021-03-16", ratePct: -0.491 },
  { date: "2021-03-17", ratePct: -0.485 },
  { date: "2021-03-18", ratePct: -0.487 },
  { date: "2021-03-19", ratePct: -0.483 },
  { date: "2021-03-22", ratePct: -0.491 },
  { date: "2021-03-23", ratePct: -0.493 },
  { date: "2021-03-24", ratePct: -0.493 },
  { date: "2021-03-25", ratePct: -0.487 },
  { date: "2021-03-26", ratePct: -0.489 },
  { date: "2021-03-29", ratePct: -0.488 },
  { date: "2021-03-30", ratePct: -0.494 },
  { date: "2021-03-31", ratePct: -0.484 },
  { date: "2021-04-01", ratePct: -0.488 },
  { date: "2021-04-06", ratePct: -0.496 },
  { date: "2021-04-07", ratePct: -0.492 },
  { date: "2021-04-08", ratePct: -0.493 },
  { date: "2021-04-09", ratePct: -0.497 },
  { date: "2021-04-12", ratePct: -0.49 },
  { date: "2021-04-13", ratePct: -0.493 },
  { date: "2021-04-14", ratePct: -0.482 },
  { date: "2021-04-15", ratePct: -0.478 },
  { date: "2021-04-16", ratePct: -0.478 },
  { date: "2021-04-19", ratePct: -0.478 },
  { date: "2021-04-20", ratePct: -0.473 },
  { date: "2021-04-21", ratePct: -0.476 },
  { date: "2021-04-22", ratePct: -0.476 },
  { date: "2021-04-23", ratePct: -0.476 },
  { date: "2021-04-26", ratePct: -0.477 },
  { date: "2021-04-27", ratePct: -0.484 },
  { date: "2021-04-28", ratePct: -0.483 },
  { date: "2021-04-29", ratePct: -0.479 },
  { date: "2021-04-30", ratePct: -0.481 },
  { date: "2021-05-03", ratePct: -0.486 },
  { date: "2021-05-04", ratePct: -0.483 },
  { date: "2021-05-05", ratePct: -0.483 },
  { date: "2021-05-06", ratePct: -0.483 },
  { date: "2021-05-07", ratePct: -0.483 },
  { date: "2021-05-10", ratePct: -0.482 },
  { date: "2021-05-11", ratePct: -0.481 },
  { date: "2021-05-12", ratePct: -0.48 },
  { date: "2021-05-13", ratePct: -0.482 },
  { date: "2021-05-14", ratePct: -0.478 },
  { date: "2021-05-17", ratePct: -0.478 },
  { date: "2021-05-18", ratePct: -0.476 },
  { date: "2021-05-19", ratePct: -0.479 },
  { date: "2021-05-20", ratePct: -0.482 },
  { date: "2021-05-21", ratePct: -0.479 },
  { date: "2021-05-24", ratePct: -0.478 },
  { date: "2021-05-25", ratePct: -0.476 },
  { date: "2021-05-26", ratePct: -0.48 },
  { date: "2021-05-27", ratePct: -0.48 },
  { date: "2021-05-28", ratePct: -0.481 },
  { date: "2021-05-31", ratePct: -0.483 },
  { date: "2021-06-01", ratePct: -0.487 },
  { date: "2021-06-02", ratePct: -0.485 },
  { date: "2021-06-03", ratePct: -0.485 },
  { date: "2021-06-04", ratePct: -0.486 },
  { date: "2021-06-07", ratePct: -0.486 },
  { date: "2021-06-08", ratePct: -0.488 },
  { date: "2021-06-09", ratePct: -0.485 },
  { date: "2021-06-10", ratePct: -0.488 },
  { date: "2021-06-11", ratePct: -0.489 },
  { date: "2021-06-14", ratePct: -0.488 },
  { date: "2021-06-15", ratePct: -0.488 },
  { date: "2021-06-16", ratePct: -0.485 },
  { date: "2021-06-17", ratePct: -0.486 },
  { date: "2021-06-18", ratePct: -0.485 },
  { date: "2021-06-21", ratePct: -0.48 },
  { date: "2021-06-22", ratePct: -0.477 },
  { date: "2021-06-23", ratePct: -0.478 },
  { date: "2021-06-24", ratePct: -0.478 },
  { date: "2021-06-25", ratePct: -0.478 },
  { date: "2021-06-28", ratePct: -0.48 },
  { date: "2021-06-29", ratePct: -0.48 },
  { date: "2021-06-30", ratePct: -0.483 },
  { date: "2021-07-01", ratePct: -0.485 },
  { date: "2021-07-02", ratePct: -0.485 },
  { date: "2021-07-05", ratePct: -0.488 },
  { date: "2021-07-06", ratePct: -0.489 },
  { date: "2021-07-07", ratePct: -0.491 },
  { date: "2021-07-08", ratePct: -0.493 },
  { date: "2021-07-09", ratePct: -0.494 },
  { date: "2021-07-12", ratePct: -0.493 },
  { date: "2021-07-13", ratePct: -0.49 },
  { date: "2021-07-14", ratePct: -0.488 },
  { date: "2021-07-15", ratePct: -0.487 },
  { date: "2021-07-16", ratePct: -0.488 },
  { date: "2021-07-19", ratePct: -0.488 },
  { date: "2021-07-20", ratePct: -0.486 },
  { date: "2021-07-21", ratePct: -0.484 },
  { date: "2021-07-22", ratePct: -0.485 },
  { date: "2021-07-23", ratePct: -0.493 },
  { date: "2021-07-26", ratePct: -0.493 },
  { date: "2021-07-27", ratePct: -0.494 },
  { date: "2021-07-28", ratePct: -0.498 },
  { date: "2021-07-29", ratePct: -0.502 },
  { date: "2021-07-30", ratePct: -0.502 },
  { date: "2021-08-02", ratePct: -0.502 },
  { date: "2021-08-03", ratePct: -0.505 },
  { date: "2021-08-04", ratePct: -0.502 },
  { date: "2021-08-05", ratePct: -0.504 },
  { date: "2021-08-06", ratePct: -0.501 },
  { date: "2021-08-09", ratePct: -0.502 },
  { date: "2021-08-10", ratePct: -0.498 },
  { date: "2021-08-11", ratePct: -0.498 },
  { date: "2021-08-12", ratePct: -0.497 },
  { date: "2021-08-13", ratePct: -0.496 },
  { date: "2021-08-16", ratePct: -0.493 },
  { date: "2021-08-17", ratePct: -0.491 },
  { date: "2021-08-18", ratePct: -0.493 },
  { date: "2021-08-19", ratePct: -0.494 },
  { date: "2021-08-20", ratePct: -0.494 },
  { date: "2021-08-23", ratePct: -0.494 },
  { date: "2021-08-24", ratePct: -0.495 },
  { date: "2021-08-25", ratePct: -0.498 },
  { date: "2021-08-26", ratePct: -0.501 },
  { date: "2021-08-27", ratePct: -0.502 },
  { date: "2021-08-30", ratePct: -0.5 },
  { date: "2021-08-31", ratePct: -0.501 },
  { date: "2021-09-01", ratePct: -0.496 },
  { date: "2021-09-02", ratePct: -0.499 },
  { date: "2021-09-03", ratePct: -0.5 },
  { date: "2021-09-06", ratePct: -0.5 },
  { date: "2021-09-07", ratePct: -0.496 },
  { date: "2021-09-08", ratePct: -0.494 },
  { date: "2021-09-09", ratePct: -0.489 },
  { date: "2021-09-10", ratePct: -0.495 },
  { date: "2021-09-13", ratePct: -0.489 },
  { date: "2021-09-14", ratePct: -0.488 },
  { date: "2021-09-15", ratePct: -0.488 },
  { date: "2021-09-16", ratePct: -0.493 },
  { date: "2021-09-17", ratePct: -0.49 },
  { date: "2021-09-20", ratePct: -0.489 },
  { date: "2021-09-21", ratePct: -0.497 },
  { date: "2021-09-22", ratePct: -0.491 },
  { date: "2021-09-23", ratePct: -0.495 },
  { date: "2021-09-24", ratePct: -0.488 },
  { date: "2021-09-27", ratePct: -0.486 },
  { date: "2021-09-28", ratePct: -0.489 },
  { date: "2021-09-29", ratePct: -0.491 },
  { date: "2021-09-30", ratePct: -0.488 },
  { date: "2021-10-01", ratePct: -0.488 },
  { date: "2021-10-04", ratePct: -0.488 },
  { date: "2021-10-05", ratePct: -0.491 },
  { date: "2021-10-06", ratePct: -0.487 },
  { date: "2021-10-07", ratePct: -0.482 },
  { date: "2021-10-08", ratePct: -0.482 },
  { date: "2021-10-11", ratePct: -0.48 },
  { date: "2021-10-12", ratePct: -0.476 },
  { date: "2021-10-13", ratePct: -0.473 },
  { date: "2021-10-14", ratePct: -0.473 },
  { date: "2021-10-15", ratePct: -0.483 },
  { date: "2021-10-18", ratePct: -0.48 },
  { date: "2021-10-19", ratePct: -0.467 },
  { date: "2021-10-20", ratePct: -0.468 },
  { date: "2021-10-21", ratePct: -0.477 },
  { date: "2021-10-22", ratePct: -0.471 },
  { date: "2021-10-25", ratePct: -0.471 },
  { date: "2021-10-26", ratePct: -0.474 },
  { date: "2021-10-27", ratePct: -0.473 },
  { date: "2021-10-28", ratePct: -0.473 },
  { date: "2021-10-29", ratePct: -0.455 },
  { date: "2021-11-01", ratePct: -0.443 },
  { date: "2021-11-02", ratePct: -0.461 },
  { date: "2021-11-03", ratePct: -0.482 },
  { date: "2021-11-04", ratePct: -0.478 },
  { date: "2021-11-05", ratePct: -0.495 },
  { date: "2021-11-08", ratePct: -0.501 },
  { date: "2021-11-09", ratePct: -0.498 },
  { date: "2021-11-10", ratePct: -0.496 },
  { date: "2021-11-11", ratePct: -0.478 },
  { date: "2021-11-12", ratePct: -0.473 },
  { date: "2021-11-15", ratePct: -0.48 },
  { date: "2021-11-16", ratePct: -0.484 },
  { date: "2021-11-17", ratePct: -0.489 },
  { date: "2021-11-18", ratePct: -0.488 },
  { date: "2021-11-19", ratePct: -0.49 },
  { date: "2021-11-22", ratePct: -0.495 },
  { date: "2021-11-23", ratePct: -0.491 },
  { date: "2021-11-24", ratePct: -0.491 },
  { date: "2021-11-25", ratePct: -0.498 },
  { date: "2021-11-26", ratePct: -0.494 },
  { date: "2021-11-29", ratePct: -0.504 },
  { date: "2021-11-30", ratePct: -0.505 },
  { date: "2021-12-01", ratePct: -0.505 },
  { date: "2021-12-02", ratePct: -0.498 },
  { date: "2021-12-03", ratePct: -0.5 },
  { date: "2021-12-06", ratePct: -0.499 },
  { date: "2021-12-07", ratePct: -0.499 },
  { date: "2021-12-08", ratePct: -0.498 },
  { date: "2021-12-09", ratePct: -0.497 },
  { date: "2021-12-10", ratePct: -0.498 },
  { date: "2021-12-13", ratePct: -0.504 },
  { date: "2021-12-14", ratePct: -0.508 },
  { date: "2021-12-15", ratePct: -0.508 },
  { date: "2021-12-16", ratePct: -0.508 },
  { date: "2021-12-17", ratePct: -0.511 },
  { date: "2021-12-20", ratePct: -0.518 },
  { date: "2021-12-21", ratePct: -0.515 },
  { date: "2021-12-22", ratePct: -0.505 },
  { date: "2021-12-23", ratePct: -0.499 },
  { date: "2021-12-24", ratePct: -0.494 },
  { date: "2021-12-27", ratePct: -0.495 },
  { date: "2021-12-28", ratePct: -0.495 },
  { date: "2021-12-29", ratePct: -0.492 },
  { date: "2021-12-30", ratePct: -0.498 },
  { date: "2021-12-31", ratePct: -0.501 },
  { date: "2022-01-03", ratePct: -0.499 },
  { date: "2022-01-04", ratePct: -0.498 },
  { date: "2022-01-05", ratePct: -0.5 },
  { date: "2022-01-06", ratePct: -0.496 },
  { date: "2022-01-07", ratePct: -0.493 },
  { date: "2022-01-10", ratePct: -0.489 },
  { date: "2022-01-11", ratePct: -0.49 },
  { date: "2022-01-12", ratePct: -0.475 },
  { date: "2022-01-13", ratePct: -0.483 },
  { date: "2022-01-14", ratePct: -0.483 },
  { date: "2022-01-17", ratePct: -0.47 },
  { date: "2022-01-18", ratePct: -0.468 },
  { date: "2022-01-19", ratePct: -0.468 },
  { date: "2022-01-20", ratePct: -0.46 },
  { date: "2022-01-21", ratePct: -0.462 },
  { date: "2022-01-24", ratePct: -0.463 },
  { date: "2022-01-25", ratePct: -0.467 },
  { date: "2022-01-26", ratePct: -0.468 },
  { date: "2022-01-27", ratePct: -0.466 },
  { date: "2022-01-28", ratePct: -0.459 },
  { date: "2022-01-31", ratePct: -0.453 },
  { date: "2022-02-01", ratePct: -0.431 },
  { date: "2022-02-02", ratePct: -0.429 },
  { date: "2022-02-03", ratePct: -0.423 },
  { date: "2022-02-04", ratePct: -0.346 },
  { date: "2022-02-07", ratePct: -0.31 },
  { date: "2022-02-08", ratePct: -0.313 },
  { date: "2022-02-09", ratePct: -0.313 },
  { date: "2022-02-10", ratePct: -0.325 },
  { date: "2022-02-11", ratePct: -0.298 },
  { date: "2022-02-14", ratePct: -0.283 },
  { date: "2022-02-15", ratePct: -0.285 },
  { date: "2022-02-16", ratePct: -0.286 },
  { date: "2022-02-17", ratePct: -0.313 },
  { date: "2022-02-18", ratePct: -0.329 },
  { date: "2022-02-21", ratePct: -0.332 },
  { date: "2022-02-22", ratePct: -0.337 },
  { date: "2022-02-23", ratePct: -0.332 },
  { date: "2022-02-24", ratePct: -0.323 },
  { date: "2022-02-25", ratePct: -0.348 },
  { date: "2022-02-28", ratePct: -0.349 },
  { date: "2022-03-01", ratePct: -0.363 },
  { date: "2022-03-02", ratePct: -0.398 },
  { date: "2022-03-03", ratePct: -0.377 },
  { date: "2022-03-04", ratePct: -0.359 },
  { date: "2022-03-07", ratePct: -0.352 },
  { date: "2022-03-08", ratePct: -0.328 },
  { date: "2022-03-09", ratePct: -0.308 },
  { date: "2022-03-10", ratePct: -0.293 },
  { date: "2022-03-11", ratePct: -0.268 },
  { date: "2022-03-14", ratePct: -0.258 },
  { date: "2022-03-15", ratePct: -0.237 },
  { date: "2022-03-16", ratePct: -0.232 },
  { date: "2022-03-17", ratePct: -0.216 },
  { date: "2022-03-18", ratePct: -0.207 },
  { date: "2022-03-21", ratePct: -0.203 },
  { date: "2022-03-22", ratePct: -0.186 },
  { date: "2022-03-23", ratePct: -0.165 },
  { date: "2022-03-24", ratePct: -0.16 },
  { date: "2022-03-25", ratePct: -0.142 },
  { date: "2022-03-28", ratePct: -0.127 },
  { date: "2022-03-29", ratePct: -0.105 },
  { date: "2022-03-30", ratePct: -0.103 },
  { date: "2022-03-31", ratePct: -0.073 },
  { date: "2022-04-01", ratePct: -0.086 },
  { date: "2022-04-04", ratePct: -0.083 },
  { date: "2022-04-05", ratePct: -0.093 },
  { date: "2022-04-06", ratePct: -0.063 },
  { date: "2022-04-07", ratePct: -0.058 },
  { date: "2022-04-08", ratePct: -0.048 },
  { date: "2022-04-11", ratePct: -0.03 },
  { date: "2022-04-12", ratePct: 5e-3 },
  { date: "2022-04-13", ratePct: -0.014 },
  { date: "2022-04-14", ratePct: 3e-3 },
  { date: "2022-04-19", ratePct: -0.01 },
  { date: "2022-04-20", ratePct: -0.014 },
  { date: "2022-04-21", ratePct: 0.017 },
  { date: "2022-04-22", ratePct: 0.084 },
  { date: "2022-04-25", ratePct: 0.134 },
  { date: "2022-04-26", ratePct: 0.111 },
  { date: "2022-04-27", ratePct: 0.109 },
  { date: "2022-04-28", ratePct: 0.118 },
  { date: "2022-04-29", ratePct: 0.166 },
  { date: "2022-05-02", ratePct: 0.213 },
  { date: "2022-05-03", ratePct: 0.225 },
  { date: "2022-05-04", ratePct: 0.234 },
  { date: "2022-05-05", ratePct: 0.253 },
  { date: "2022-05-06", ratePct: 0.246 },
  { date: "2022-05-09", ratePct: 0.263 },
  { date: "2022-05-10", ratePct: 0.236 },
  { date: "2022-05-11", ratePct: 0.227 },
  { date: "2022-05-12", ratePct: 0.23 },
  { date: "2022-05-13", ratePct: 0.182 },
  { date: "2022-05-16", ratePct: 0.206 },
  { date: "2022-05-17", ratePct: 0.24 },
  { date: "2022-05-18", ratePct: 0.313 },
  { date: "2022-05-19", ratePct: 0.344 },
  { date: "2022-05-20", ratePct: 0.353 },
  { date: "2022-05-23", ratePct: 0.348 },
  { date: "2022-05-24", ratePct: 0.364 },
  { date: "2022-05-25", ratePct: 0.359 },
  { date: "2022-05-26", ratePct: 0.36 },
  { date: "2022-05-27", ratePct: 0.358 },
  { date: "2022-05-30", ratePct: 0.361 },
  { date: "2022-05-31", ratePct: 0.39 },
  { date: "2022-06-01", ratePct: 0.417 },
  { date: "2022-06-02", ratePct: 0.45 },
  { date: "2022-06-03", ratePct: 0.486 },
  { date: "2022-06-06", ratePct: 0.521 },
  { date: "2022-06-07", ratePct: 0.561 },
  { date: "2022-06-08", ratePct: 0.569 },
  { date: "2022-06-09", ratePct: 0.614 },
  { date: "2022-06-10", ratePct: 0.68 },
  { date: "2022-06-13", ratePct: 0.792 },
  { date: "2022-06-14", ratePct: 0.957 },
  { date: "2022-06-15", ratePct: 1.067 },
  { date: "2022-06-16", ratePct: 1.058 },
  { date: "2022-06-17", ratePct: 1.124 },
  { date: "2022-06-20", ratePct: 1.091 },
  { date: "2022-06-21", ratePct: 1.115 },
  { date: "2022-06-22", ratePct: 1.108 },
  { date: "2022-06-23", ratePct: 1.089 },
  { date: "2022-06-24", ratePct: 0.975 },
  { date: "2022-06-27", ratePct: 0.948 },
  { date: "2022-06-28", ratePct: 1.022 },
  { date: "2022-06-29", ratePct: 1.068 },
  { date: "2022-06-30", ratePct: 1.037 },
  { date: "2022-07-01", ratePct: 0.961 },
  { date: "2022-07-04", ratePct: 0.897 },
  { date: "2022-07-05", ratePct: 0.939 },
  { date: "2022-07-06", ratePct: 0.839 },
  { date: "2022-07-07", ratePct: 0.821 },
  { date: "2022-07-08", ratePct: 0.972 },
  { date: "2022-07-11", ratePct: 0.969 },
  { date: "2022-07-12", ratePct: 0.926 },
  { date: "2022-07-13", ratePct: 0.865 },
  { date: "2022-07-14", ratePct: 0.952 },
  { date: "2022-07-15", ratePct: 1.057 },
  { date: "2022-07-18", ratePct: 1.015 },
  { date: "2022-07-19", ratePct: 1.052 },
  { date: "2022-07-20", ratePct: 1.164 },
  { date: "2022-07-21", ratePct: 1.142 },
  { date: "2022-07-22", ratePct: 1.2 },
  { date: "2022-07-25", ratePct: 1.04 },
  { date: "2022-07-26", ratePct: 1.033 },
  { date: "2022-07-27", ratePct: 1.013 },
  { date: "2022-07-28", ratePct: 1.044 },
  { date: "2022-07-29", ratePct: 0.921 },
  { date: "2022-08-01", ratePct: 0.942 },
  { date: "2022-08-02", ratePct: 0.926 },
  { date: "2022-08-03", ratePct: 0.963 },
  { date: "2022-08-04", ratePct: 1.014 },
  { date: "2022-08-05", ratePct: 1.023 },
  { date: "2022-08-08", ratePct: 1.11 },
  { date: "2022-08-09", ratePct: 1.113 },
  { date: "2022-08-10", ratePct: 1.152 },
  { date: "2022-08-11", ratePct: 1.141 },
  { date: "2022-08-12", ratePct: 1.163 },
  { date: "2022-08-15", ratePct: 1.158 },
  { date: "2022-08-16", ratePct: 1.118 },
  { date: "2022-08-17", ratePct: 1.146 },
  { date: "2022-08-18", ratePct: 1.229 },
  { date: "2022-08-19", ratePct: 1.258 },
  { date: "2022-08-22", ratePct: 1.344 },
  { date: "2022-08-23", ratePct: 1.398 },
  { date: "2022-08-24", ratePct: 1.427 },
  { date: "2022-08-25", ratePct: 1.483 },
  { date: "2022-08-26", ratePct: 1.482 },
  { date: "2022-08-29", ratePct: 1.612 },
  { date: "2022-08-30", ratePct: 1.758 },
  { date: "2022-08-31", ratePct: 1.778 },
  { date: "2022-09-01", ratePct: 1.851 },
  { date: "2022-09-02", ratePct: 1.896 },
  { date: "2022-09-05", ratePct: 1.874 },
  { date: "2022-09-06", ratePct: 1.921 },
  { date: "2022-09-07", ratePct: 1.913 },
  { date: "2022-09-08", ratePct: 1.903 },
  { date: "2022-09-09", ratePct: 2.015 },
  { date: "2022-09-12", ratePct: 2.075 },
  { date: "2022-09-13", ratePct: 2.102 },
  { date: "2022-09-14", ratePct: 2.156 },
  { date: "2022-09-15", ratePct: 2.223 },
  { date: "2022-09-16", ratePct: 2.263 },
  { date: "2022-09-19", ratePct: 2.295 },
  { date: "2022-09-20", ratePct: 2.338 },
  { date: "2022-09-21", ratePct: 2.416 },
  { date: "2022-09-22", ratePct: 2.442 },
  { date: "2022-09-23", ratePct: 2.5 },
  { date: "2022-09-26", ratePct: 2.563 },
  { date: "2022-09-27", ratePct: 2.625 },
  { date: "2022-09-28", ratePct: 2.621 },
  { date: "2022-09-29", ratePct: 2.578 },
  { date: "2022-09-30", ratePct: 2.556 },
  { date: "2022-10-03", ratePct: 2.5 },
  { date: "2022-10-04", ratePct: 2.41 },
  { date: "2022-10-05", ratePct: 2.363 },
  { date: "2022-10-06", ratePct: 2.47 },
  { date: "2022-10-07", ratePct: 2.552 },
  { date: "2022-10-10", ratePct: 2.639 },
  { date: "2022-10-11", ratePct: 2.693 },
  { date: "2022-10-12", ratePct: 2.659 },
  { date: "2022-10-13", ratePct: 2.661 },
  { date: "2022-10-14", ratePct: 2.677 },
  { date: "2022-10-17", ratePct: 2.679 },
  { date: "2022-10-18", ratePct: 2.698 },
  { date: "2022-10-19", ratePct: 2.684 },
  { date: "2022-10-20", ratePct: 2.733 },
  { date: "2022-10-21", ratePct: 2.778 },
  { date: "2022-10-24", ratePct: 2.738 },
  { date: "2022-10-25", ratePct: 2.725 },
  { date: "2022-10-26", ratePct: 2.69 },
  { date: "2022-10-27", ratePct: 2.671 },
  { date: "2022-10-28", ratePct: 2.567 },
  { date: "2022-10-31", ratePct: 2.63 },
  { date: "2022-11-01", ratePct: 2.686 },
  { date: "2022-11-02", ratePct: 2.673 },
  { date: "2022-11-03", ratePct: 2.735 },
  { date: "2022-11-04", ratePct: 2.794 },
  { date: "2022-11-07", ratePct: 2.82 },
  { date: "2022-11-08", ratePct: 2.846 },
  { date: "2022-11-09", ratePct: 2.874 },
  { date: "2022-11-10", ratePct: 2.862 },
  { date: "2022-11-11", ratePct: 2.811 },
  { date: "2022-11-14", ratePct: 2.867 },
  { date: "2022-11-15", ratePct: 2.852 },
  { date: "2022-11-16", ratePct: 2.843 },
  { date: "2022-11-17", ratePct: 2.834 },
  { date: "2022-11-18", ratePct: 2.837 },
  { date: "2022-11-21", ratePct: 2.835 },
  { date: "2022-11-22", ratePct: 2.847 },
  { date: "2022-11-23", ratePct: 2.854 },
  { date: "2022-11-24", ratePct: 2.879 },
  { date: "2022-11-25", ratePct: 2.86 },
  { date: "2022-11-28", ratePct: 2.892 },
  { date: "2022-11-29", ratePct: 2.892 },
  { date: "2022-11-30", ratePct: 2.83 },
  { date: "2022-12-01", ratePct: 2.842 },
  { date: "2022-12-02", ratePct: 2.811 },
  { date: "2022-12-05", ratePct: 2.841 },
  { date: "2022-12-06", ratePct: 2.87 },
  { date: "2022-12-07", ratePct: 2.864 },
  { date: "2022-12-08", ratePct: 2.858 },
  { date: "2022-12-09", ratePct: 2.861 },
  { date: "2022-12-12", ratePct: 2.88 },
  { date: "2022-12-13", ratePct: 2.873 },
  { date: "2022-12-14", ratePct: 2.871 },
  { date: "2022-12-15", ratePct: 2.867 },
  { date: "2022-12-16", ratePct: 2.993 },
  { date: "2022-12-19", ratePct: 3.057 },
  { date: "2022-12-20", ratePct: 3.118 },
  { date: "2022-12-21", ratePct: 3.176 },
  { date: "2022-12-22", ratePct: 3.192 },
  { date: "2022-12-23", ratePct: 3.238 },
  { date: "2022-12-27", ratePct: 3.265 },
  { date: "2022-12-28", ratePct: 3.325 },
  { date: "2022-12-29", ratePct: 3.288 },
  { date: "2022-12-30", ratePct: 3.291 },
  { date: "2023-01-02", ratePct: 3.316 },
  { date: "2023-01-03", ratePct: 3.321 },
  { date: "2023-01-04", ratePct: 3.312 },
  { date: "2023-01-05", ratePct: 3.303 },
  { date: "2023-01-06", ratePct: 3.328 },
  { date: "2023-01-09", ratePct: 3.328 },
  { date: "2023-01-10", ratePct: 3.338 },
  { date: "2023-01-11", ratePct: 3.37 },
  { date: "2023-01-12", ratePct: 3.325 },
  { date: "2023-01-13", ratePct: 3.315 },
  { date: "2023-01-16", ratePct: 3.332 },
  { date: "2023-01-17", ratePct: 3.339 },
  { date: "2023-01-18", ratePct: 3.311 },
  { date: "2023-01-19", ratePct: 3.3 },
  { date: "2023-01-20", ratePct: 3.327 },
  { date: "2023-01-23", ratePct: 3.345 },
  { date: "2023-01-24", ratePct: 3.353 },
  { date: "2023-01-25", ratePct: 3.363 },
  { date: "2023-01-26", ratePct: 3.352 },
  { date: "2023-01-27", ratePct: 3.356 },
  { date: "2023-01-30", ratePct: 3.368 },
  { date: "2023-01-31", ratePct: 3.413 },
  { date: "2023-02-01", ratePct: 3.414 },
  { date: "2023-02-02", ratePct: 3.446 },
  { date: "2023-02-03", ratePct: 3.374 },
  { date: "2023-02-06", ratePct: 3.401 },
  { date: "2023-02-07", ratePct: 3.435 },
  { date: "2023-02-08", ratePct: 3.451 },
  { date: "2023-02-09", ratePct: 3.486 },
  { date: "2023-02-10", ratePct: 3.465 },
  { date: "2023-02-13", ratePct: 3.51 },
  { date: "2023-02-14", ratePct: 3.518 },
  { date: "2023-02-15", ratePct: 3.542 },
  { date: "2023-02-16", ratePct: 3.567 },
  { date: "2023-02-17", ratePct: 3.572 },
  { date: "2023-02-20", ratePct: 3.579 },
  { date: "2023-02-21", ratePct: 3.578 },
  { date: "2023-02-22", ratePct: 3.625 },
  { date: "2023-02-23", ratePct: 3.642 },
  { date: "2023-02-24", ratePct: 3.662 },
  { date: "2023-02-27", ratePct: 3.68 },
  { date: "2023-02-28", ratePct: 3.725 },
  { date: "2023-03-01", ratePct: 3.745 },
  { date: "2023-03-02", ratePct: 3.821 },
  { date: "2023-03-03", ratePct: 3.826 },
  { date: "2023-03-06", ratePct: 3.859 },
  { date: "2023-03-07", ratePct: 3.908 },
  { date: "2023-03-08", ratePct: 3.944 },
  { date: "2023-03-09", ratePct: 3.978 },
  { date: "2023-03-10", ratePct: 3.953 },
  { date: "2023-03-13", ratePct: 3.858 },
  { date: "2023-03-14", ratePct: 3.509 },
  { date: "2023-03-15", ratePct: 3.662 },
  { date: "2023-03-16", ratePct: 3.359 },
  { date: "2023-03-17", ratePct: 3.38 },
  { date: "2023-03-20", ratePct: 3.395 },
  { date: "2023-03-21", ratePct: 3.322 },
  { date: "2023-03-22", ratePct: 3.468 },
  { date: "2023-03-23", ratePct: 3.578 },
  { date: "2023-03-24", ratePct: 3.533 },
  { date: "2023-03-27", ratePct: 3.469 },
  { date: "2023-03-28", ratePct: 3.542 },
  { date: "2023-03-29", ratePct: 3.573 },
  { date: "2023-03-30", ratePct: 3.568 },
  { date: "2023-03-31", ratePct: 3.622 },
  { date: "2023-04-03", ratePct: 3.651 },
  { date: "2023-04-04", ratePct: 3.638 },
  { date: "2023-04-05", ratePct: 3.628 },
  { date: "2023-04-06", ratePct: 3.578 },
  { date: "2023-04-11", ratePct: 3.582 },
  { date: "2023-04-12", ratePct: 3.654 },
  { date: "2023-04-13", ratePct: 3.718 },
  { date: "2023-04-14", ratePct: 3.723 },
  { date: "2023-04-17", ratePct: 3.764 },
  { date: "2023-04-18", ratePct: 3.793 },
  { date: "2023-04-19", ratePct: 3.825 },
  { date: "2023-04-20", ratePct: 3.855 },
  { date: "2023-04-21", ratePct: 3.854 },
  { date: "2023-04-24", ratePct: 3.865 },
  { date: "2023-04-25", ratePct: 3.9 },
  { date: "2023-04-26", ratePct: 3.858 },
  { date: "2023-04-27", ratePct: 3.852 },
  { date: "2023-04-28", ratePct: 3.88 },
  { date: "2023-05-02", ratePct: 3.822 },
  { date: "2023-05-03", ratePct: 3.843 },
  { date: "2023-05-04", ratePct: 3.843 },
  { date: "2023-05-05", ratePct: 3.77 },
  { date: "2023-05-08", ratePct: 3.79 },
  { date: "2023-05-09", ratePct: 3.804 },
  { date: "2023-05-10", ratePct: 3.808 },
  { date: "2023-05-11", ratePct: 3.795 },
  { date: "2023-05-12", ratePct: 3.799 },
  { date: "2023-05-15", ratePct: 3.805 },
  { date: "2023-05-16", ratePct: 3.807 },
  { date: "2023-05-17", ratePct: 3.834 },
  { date: "2023-05-18", ratePct: 3.858 },
  { date: "2023-05-19", ratePct: 3.878 },
  { date: "2023-05-22", ratePct: 3.893 },
  { date: "2023-05-23", ratePct: 3.904 },
  { date: "2023-05-24", ratePct: 3.932 },
  { date: "2023-05-25", ratePct: 3.943 },
  { date: "2023-05-26", ratePct: 3.955 },
  { date: "2023-05-29", ratePct: 3.982 },
  { date: "2023-05-30", ratePct: 3.965 },
  { date: "2023-05-31", ratePct: 3.939 },
  { date: "2023-06-01", ratePct: 3.875 },
  { date: "2023-06-02", ratePct: 3.875 },
  { date: "2023-06-05", ratePct: 3.884 },
  { date: "2023-06-06", ratePct: 3.914 },
  { date: "2023-06-07", ratePct: 3.923 },
  { date: "2023-06-08", ratePct: 3.936 },
  { date: "2023-06-09", ratePct: 3.928 },
  { date: "2023-06-12", ratePct: 3.938 },
  { date: "2023-06-13", ratePct: 3.942 },
  { date: "2023-06-14", ratePct: 3.944 },
  { date: "2023-06-15", ratePct: 3.965 },
  { date: "2023-06-16", ratePct: 4.02 },
  { date: "2023-06-19", ratePct: 4.046 },
  { date: "2023-06-20", ratePct: 4.082 },
  { date: "2023-06-21", ratePct: 4.088 },
  { date: "2023-06-22", ratePct: 4.111 },
  { date: "2023-06-23", ratePct: 4.147 },
  { date: "2023-06-26", ratePct: 4.092 },
  { date: "2023-06-27", ratePct: 4.094 },
  { date: "2023-06-28", ratePct: 4.119 },
  { date: "2023-06-29", ratePct: 4.103 },
  { date: "2023-06-30", ratePct: 4.134 },
  { date: "2023-07-03", ratePct: 4.145 },
  { date: "2023-07-04", ratePct: 4.164 },
  { date: "2023-07-05", ratePct: 4.165 },
  { date: "2023-07-06", ratePct: 4.155 },
  { date: "2023-07-07", ratePct: 4.193 },
  { date: "2023-07-10", ratePct: 4.19 },
  { date: "2023-07-11", ratePct: 4.184 },
  { date: "2023-07-12", ratePct: 4.191 },
  { date: "2023-07-13", ratePct: 4.174 },
  { date: "2023-07-14", ratePct: 4.134 },
  { date: "2023-07-17", ratePct: 4.15 },
  { date: "2023-07-18", ratePct: 4.16 },
  { date: "2023-07-19", ratePct: 4.121 },
  { date: "2023-07-20", ratePct: 4.141 },
  { date: "2023-07-21", ratePct: 4.162 },
  { date: "2023-07-24", ratePct: 4.158 },
  { date: "2023-07-25", ratePct: 4.114 },
  { date: "2023-07-26", ratePct: 4.114 },
  { date: "2023-07-27", ratePct: 4.14 },
  { date: "2023-07-28", ratePct: 4.111 },
  { date: "2023-07-31", ratePct: 4.064 },
  { date: "2023-08-01", ratePct: 4.076 },
  { date: "2023-08-02", ratePct: 4.081 },
  { date: "2023-08-03", ratePct: 4.052 },
  { date: "2023-08-04", ratePct: 4.045 },
  { date: "2023-08-07", ratePct: 4.055 },
  { date: "2023-08-08", ratePct: 4.065 },
  { date: "2023-08-09", ratePct: 4.053 },
  { date: "2023-08-10", ratePct: 4.052 },
  { date: "2023-08-11", ratePct: 4.056 },
  { date: "2023-08-14", ratePct: 4.076 },
  { date: "2023-08-15", ratePct: 4.091 },
  { date: "2023-08-16", ratePct: 4.116 },
  { date: "2023-08-17", ratePct: 4.095 },
  { date: "2023-08-18", ratePct: 4.091 },
  { date: "2023-08-21", ratePct: 4.082 },
  { date: "2023-08-22", ratePct: 4.106 },
  { date: "2023-08-23", ratePct: 4.082 },
  { date: "2023-08-24", ratePct: 4.048 },
  { date: "2023-08-25", ratePct: 4.045 },
  { date: "2023-08-28", ratePct: 4.07 },
  { date: "2023-08-29", ratePct: 4.074 },
  { date: "2023-08-30", ratePct: 4.065 },
  { date: "2023-08-31", ratePct: 4.102 },
  { date: "2023-09-01", ratePct: 4.055 },
  { date: "2023-09-04", ratePct: 4.049 },
  { date: "2023-09-05", ratePct: 4.068 },
  { date: "2023-09-06", ratePct: 4.051 },
  { date: "2023-09-07", ratePct: 4.078 },
  { date: "2023-09-08", ratePct: 4.086 },
  { date: "2023-09-11", ratePct: 4.081 },
  { date: "2023-09-12", ratePct: 4.103 },
  { date: "2023-09-13", ratePct: 4.112 },
  { date: "2023-09-14", ratePct: 4.159 },
  { date: "2023-09-15", ratePct: 4.169 },
  { date: "2023-09-18", ratePct: 4.191 },
  { date: "2023-09-19", ratePct: 4.216 },
  { date: "2023-09-20", ratePct: 4.222 },
  { date: "2023-09-21", ratePct: 4.224 },
  { date: "2023-09-22", ratePct: 4.213 },
  { date: "2023-09-25", ratePct: 4.208 },
  { date: "2023-09-26", ratePct: 4.199 },
  { date: "2023-09-27", ratePct: 4.2 },
  { date: "2023-09-28", ratePct: 4.221 },
  { date: "2023-09-29", ratePct: 4.228 },
  { date: "2023-10-02", ratePct: 4.198 },
  { date: "2023-10-03", ratePct: 4.208 },
  { date: "2023-10-04", ratePct: 4.212 },
  { date: "2023-10-05", ratePct: 4.212 },
  { date: "2023-10-06", ratePct: 4.194 },
  { date: "2023-10-09", ratePct: 4.187 },
  { date: "2023-10-10", ratePct: 4.155 },
  { date: "2023-10-11", ratePct: 4.145 },
  { date: "2023-10-12", ratePct: 4.162 },
  { date: "2023-10-13", ratePct: 4.171 },
  { date: "2023-10-16", ratePct: 4.172 },
  { date: "2023-10-17", ratePct: 4.16 },
  { date: "2023-10-18", ratePct: 4.196 },
  { date: "2023-10-19", ratePct: 4.184 },
  { date: "2023-10-20", ratePct: 4.185 },
  { date: "2023-10-23", ratePct: 4.145 },
  { date: "2023-10-24", ratePct: 4.154 },
  { date: "2023-10-25", ratePct: 4.118 },
  { date: "2023-10-26", ratePct: 4.128 },
  { date: "2023-10-27", ratePct: 4.104 },
  { date: "2023-10-30", ratePct: 4.078 },
  { date: "2023-10-31", ratePct: 4.052 },
  { date: "2023-11-01", ratePct: 4.044 },
  { date: "2023-11-02", ratePct: 4.012 },
  { date: "2023-11-03", ratePct: 4.004 },
  { date: "2023-11-06", ratePct: 4.022 },
  { date: "2023-11-07", ratePct: 4.028 },
  { date: "2023-11-08", ratePct: 4.027 },
  { date: "2023-11-09", ratePct: 4.028 },
  { date: "2023-11-10", ratePct: 4.04 },
  { date: "2023-11-13", ratePct: 4.04 },
  { date: "2023-11-14", ratePct: 4.064 },
  { date: "2023-11-15", ratePct: 4.028 },
  { date: "2023-11-16", ratePct: 4.033 },
  { date: "2023-11-17", ratePct: 3.991 },
  { date: "2023-11-20", ratePct: 4.015 },
  { date: "2023-11-21", ratePct: 4.023 },
  { date: "2023-11-22", ratePct: 4.016 },
  { date: "2023-11-23", ratePct: 4.034 },
  { date: "2023-11-24", ratePct: 4.056 },
  { date: "2023-11-27", ratePct: 4.057 },
  { date: "2023-11-28", ratePct: 4.015 },
  { date: "2023-11-29", ratePct: 3.983 },
  { date: "2023-11-30", ratePct: 3.926 },
  { date: "2023-12-01", ratePct: 3.902 },
  { date: "2023-12-04", ratePct: 3.794 },
  { date: "2023-12-05", ratePct: 3.785 },
  { date: "2023-12-06", ratePct: 3.728 },
  { date: "2023-12-07", ratePct: 3.727 },
  { date: "2023-12-08", ratePct: 3.725 },
  { date: "2023-12-11", ratePct: 3.751 },
  { date: "2023-12-12", ratePct: 3.754 },
  { date: "2023-12-13", ratePct: 3.758 },
  { date: "2023-12-14", ratePct: 3.719 },
  { date: "2023-12-15", ratePct: 3.644 },
  { date: "2023-12-18", ratePct: 3.613 },
  { date: "2023-12-19", ratePct: 3.635 },
  { date: "2023-12-20", ratePct: 3.602 },
  { date: "2023-12-21", ratePct: 3.582 },
  { date: "2023-12-22", ratePct: 3.581 },
  { date: "2023-12-27", ratePct: 3.554 },
  { date: "2023-12-28", ratePct: 3.536 },
  { date: "2023-12-29", ratePct: 3.513 },
  { date: "2024-01-02", ratePct: 3.532 },
  { date: "2024-01-03", ratePct: 3.545 },
  { date: "2024-01-04", ratePct: 3.544 },
  { date: "2024-01-05", ratePct: 3.584 },
  { date: "2024-01-08", ratePct: 3.616 },
  { date: "2024-01-09", ratePct: 3.601 },
  { date: "2024-01-10", ratePct: 3.635 },
  { date: "2024-01-11", ratePct: 3.654 },
  { date: "2024-01-12", ratePct: 3.636 },
  { date: "2024-01-15", ratePct: 3.57 },
  { date: "2024-01-16", ratePct: 3.596 },
  { date: "2024-01-17", ratePct: 3.596 },
  { date: "2024-01-18", ratePct: 3.66 },
  { date: "2024-01-19", ratePct: 3.655 },
  { date: "2024-01-22", ratePct: 3.672 },
  { date: "2024-01-23", ratePct: 3.665 },
  { date: "2024-01-24", ratePct: 3.676 },
  { date: "2024-01-25", ratePct: 3.662 },
  { date: "2024-01-26", ratePct: 3.597 },
  { date: "2024-01-29", ratePct: 3.582 },
  { date: "2024-01-30", ratePct: 3.553 },
  { date: "2024-01-31", ratePct: 3.572 },
  { date: "2024-02-01", ratePct: 3.505 },
  { date: "2024-02-02", ratePct: 3.537 },
  { date: "2024-02-05", ratePct: 3.633 },
  { date: "2024-02-06", ratePct: 3.667 },
  { date: "2024-02-07", ratePct: 3.656 },
  { date: "2024-02-08", ratePct: 3.64 },
  { date: "2024-02-09", ratePct: 3.658 },
  { date: "2024-02-12", ratePct: 3.678 },
  { date: "2024-02-13", ratePct: 3.655 },
  { date: "2024-02-14", ratePct: 3.692 },
  { date: "2024-02-15", ratePct: 3.662 },
  { date: "2024-02-16", ratePct: 3.648 },
  { date: "2024-02-19", ratePct: 3.67 },
  { date: "2024-02-20", ratePct: 3.686 },
  { date: "2024-02-21", ratePct: 3.695 },
  { date: "2024-02-22", ratePct: 3.697 },
  { date: "2024-02-23", ratePct: 3.738 },
  { date: "2024-02-26", ratePct: 3.732 },
  { date: "2024-02-27", ratePct: 3.735 },
  { date: "2024-02-28", ratePct: 3.748 },
  { date: "2024-02-29", ratePct: 3.749 },
  { date: "2024-03-01", ratePct: 3.744 },
  { date: "2024-03-04", ratePct: 3.732 },
  { date: "2024-03-05", ratePct: 3.751 },
  { date: "2024-03-06", ratePct: 3.748 },
  { date: "2024-03-07", ratePct: 3.746 },
  { date: "2024-03-08", ratePct: 3.745 },
  { date: "2024-03-11", ratePct: 3.703 },
  { date: "2024-03-12", ratePct: 3.712 },
  { date: "2024-03-13", ratePct: 3.702 },
  { date: "2024-03-14", ratePct: 3.701 },
  { date: "2024-03-15", ratePct: 3.709 },
  { date: "2024-03-18", ratePct: 3.75 },
  { date: "2024-03-19", ratePct: 3.756 },
  { date: "2024-03-20", ratePct: 3.755 },
  { date: "2024-03-21", ratePct: 3.735 },
  { date: "2024-03-22", ratePct: 3.682 },
  { date: "2024-03-25", ratePct: 3.658 },
  { date: "2024-03-26", ratePct: 3.675 },
  { date: "2024-03-27", ratePct: 3.684 },
  { date: "2024-03-28", ratePct: 3.669 },
  { date: "2024-04-02", ratePct: 3.664 },
  { date: "2024-04-03", ratePct: 3.648 },
  { date: "2024-04-04", ratePct: 3.663 },
  { date: "2024-04-05", ratePct: 3.656 },
  { date: "2024-04-08", ratePct: 3.673 },
  { date: "2024-04-09", ratePct: 3.695 },
  { date: "2024-04-10", ratePct: 3.689 },
  { date: "2024-04-11", ratePct: 3.729 },
  { date: "2024-04-12", ratePct: 3.748 },
  { date: "2024-04-15", ratePct: 3.693 },
  { date: "2024-04-16", ratePct: 3.702 },
  { date: "2024-04-17", ratePct: 3.72 },
  { date: "2024-04-18", ratePct: 3.731 },
  { date: "2024-04-19", ratePct: 3.732 },
  { date: "2024-04-22", ratePct: 3.734 },
  { date: "2024-04-23", ratePct: 3.718 },
  { date: "2024-04-24", ratePct: 3.701 },
  { date: "2024-04-25", ratePct: 3.728 },
  { date: "2024-04-26", ratePct: 3.724 },
  { date: "2024-04-29", ratePct: 3.726 },
  { date: "2024-04-30", ratePct: 3.696 },
  { date: "2024-05-02", ratePct: 3.728 },
  { date: "2024-05-03", ratePct: 3.693 },
  { date: "2024-05-06", ratePct: 3.658 },
  { date: "2024-05-07", ratePct: 3.647 },
  { date: "2024-05-08", ratePct: 3.642 },
  { date: "2024-05-09", ratePct: 3.628 },
  { date: "2024-05-10", ratePct: 3.629 },
  { date: "2024-05-13", ratePct: 3.654 },
  { date: "2024-05-14", ratePct: 3.638 },
  { date: "2024-05-15", ratePct: 3.679 },
  { date: "2024-05-16", ratePct: 3.65 },
  { date: "2024-05-17", ratePct: 3.645 },
  { date: "2024-05-20", ratePct: 3.673 },
  { date: "2024-05-21", ratePct: 3.68 },
  { date: "2024-05-22", ratePct: 3.67 },
  { date: "2024-05-23", ratePct: 3.702 },
  { date: "2024-05-24", ratePct: 3.729 },
  { date: "2024-05-27", ratePct: 3.74 },
  { date: "2024-05-28", ratePct: 3.722 },
  { date: "2024-05-29", ratePct: 3.716 },
  { date: "2024-05-30", ratePct: 3.729 },
  { date: "2024-05-31", ratePct: 3.711 },
  { date: "2024-06-03", ratePct: 3.722 },
  { date: "2024-06-04", ratePct: 3.715 },
  { date: "2024-06-05", ratePct: 3.69 },
  { date: "2024-06-06", ratePct: 3.684 },
  { date: "2024-06-07", ratePct: 3.701 },
  { date: "2024-06-10", ratePct: 3.725 },
  { date: "2024-06-11", ratePct: 3.728 },
  { date: "2024-06-12", ratePct: 3.719 },
  { date: "2024-06-13", ratePct: 3.678 },
  { date: "2024-06-14", ratePct: 3.672 },
  { date: "2024-06-17", ratePct: 3.628 },
  { date: "2024-06-18", ratePct: 3.6 },
  { date: "2024-06-19", ratePct: 3.613 },
  { date: "2024-06-20", ratePct: 3.608 },
  { date: "2024-06-21", ratePct: 3.622 },
  { date: "2024-06-24", ratePct: 3.58 },
  { date: "2024-06-25", ratePct: 3.578 },
  { date: "2024-06-26", ratePct: 3.576 },
  { date: "2024-06-27", ratePct: 3.575 },
  { date: "2024-06-28", ratePct: 3.578 },
  { date: "2024-07-01", ratePct: 3.567 },
  { date: "2024-07-02", ratePct: 3.589 },
  { date: "2024-07-03", ratePct: 3.596 },
  { date: "2024-07-04", ratePct: 3.592 },
  { date: "2024-07-05", ratePct: 3.588 },
  { date: "2024-07-08", ratePct: 3.599 },
  { date: "2024-07-09", ratePct: 3.593 },
  { date: "2024-07-10", ratePct: 3.602 },
  { date: "2024-07-11", ratePct: 3.595 },
  { date: "2024-07-12", ratePct: 3.564 },
  { date: "2024-07-15", ratePct: 3.522 },
  { date: "2024-07-16", ratePct: 3.506 },
  { date: "2024-07-17", ratePct: 3.503 },
  { date: "2024-07-18", ratePct: 3.503 },
  { date: "2024-07-19", ratePct: 3.502 },
  { date: "2024-07-22", ratePct: 3.511 },
  { date: "2024-07-23", ratePct: 3.508 },
  { date: "2024-07-24", ratePct: 3.528 },
  { date: "2024-07-25", ratePct: 3.481 },
  { date: "2024-07-26", ratePct: 3.426 },
  { date: "2024-07-29", ratePct: 3.425 },
  { date: "2024-07-30", ratePct: 3.406 },
  { date: "2024-07-31", ratePct: 3.39 },
  { date: "2024-08-01", ratePct: 3.349 },
  { date: "2024-08-02", ratePct: 3.32 },
  { date: "2024-08-05", ratePct: 3.238 },
  { date: "2024-08-06", ratePct: 3.138 },
  { date: "2024-08-07", ratePct: 3.192 },
  { date: "2024-08-08", ratePct: 3.202 },
  { date: "2024-08-09", ratePct: 3.176 },
  { date: "2024-08-12", ratePct: 3.191 },
  { date: "2024-08-13", ratePct: 3.18 },
  { date: "2024-08-14", ratePct: 3.148 },
  { date: "2024-08-15", ratePct: 3.117 },
  { date: "2024-08-16", ratePct: 3.139 },
  { date: "2024-08-19", ratePct: 3.183 },
  { date: "2024-08-20", ratePct: 3.159 },
  { date: "2024-08-21", ratePct: 3.162 },
  { date: "2024-08-22", ratePct: 3.133 },
  { date: "2024-08-23", ratePct: 3.102 },
  { date: "2024-08-26", ratePct: 3.116 },
  { date: "2024-08-27", ratePct: 3.095 },
  { date: "2024-08-28", ratePct: 3.119 },
  { date: "2024-08-29", ratePct: 3.108 },
  { date: "2024-08-30", ratePct: 3.088 },
  { date: "2024-09-02", ratePct: 3.072 },
  { date: "2024-09-03", ratePct: 3.113 },
  { date: "2024-09-04", ratePct: 3.094 },
  { date: "2024-09-05", ratePct: 3.053 },
  { date: "2024-09-06", ratePct: 3.025 },
  { date: "2024-09-09", ratePct: 2.986 },
  { date: "2024-09-10", ratePct: 2.97 },
  { date: "2024-09-11", ratePct: 2.96 },
  { date: "2024-09-12", ratePct: 2.929 },
  { date: "2024-09-13", ratePct: 2.948 },
  { date: "2024-09-16", ratePct: 2.975 },
  { date: "2024-09-17", ratePct: 2.948 },
  { date: "2024-09-18", ratePct: 2.921 },
  { date: "2024-09-19", ratePct: 2.936 },
  { date: "2024-09-20", ratePct: 2.918 },
  { date: "2024-09-23", ratePct: 2.902 },
  { date: "2024-09-24", ratePct: 2.858 },
  { date: "2024-09-25", ratePct: 2.776 },
  { date: "2024-09-26", ratePct: 2.755 },
  { date: "2024-09-27", ratePct: 2.771 },
  { date: "2024-09-30", ratePct: 2.747 },
  { date: "2024-10-01", ratePct: 2.749 },
  { date: "2024-10-02", ratePct: 2.745 },
  { date: "2024-10-03", ratePct: 2.712 },
  { date: "2024-10-04", ratePct: 2.688 },
  { date: "2024-10-07", ratePct: 2.712 },
  { date: "2024-10-08", ratePct: 2.798 },
  { date: "2024-10-09", ratePct: 2.792 },
  { date: "2024-10-10", ratePct: 2.791 },
  { date: "2024-10-11", ratePct: 2.822 },
  { date: "2024-10-14", ratePct: 2.799 },
  { date: "2024-10-15", ratePct: 2.766 },
  { date: "2024-10-16", ratePct: 2.743 },
  { date: "2024-10-17", ratePct: 2.717 },
  { date: "2024-10-18", ratePct: 2.709 },
  { date: "2024-10-21", ratePct: 2.63 },
  { date: "2024-10-22", ratePct: 2.622 },
  { date: "2024-10-23", ratePct: 2.674 },
  { date: "2024-10-24", ratePct: 2.614 },
  { date: "2024-10-25", ratePct: 2.565 },
  { date: "2024-10-28", ratePct: 2.58 },
  { date: "2024-10-29", ratePct: 2.577 },
  { date: "2024-10-30", ratePct: 2.548 },
  { date: "2024-10-31", ratePct: 2.547 },
  { date: "2024-11-01", ratePct: 2.629 },
  { date: "2024-11-04", ratePct: 2.619 },
  { date: "2024-11-05", ratePct: 2.63 },
  { date: "2024-11-06", ratePct: 2.642 },
  { date: "2024-11-07", ratePct: 2.563 },
  { date: "2024-11-08", ratePct: 2.534 },
  { date: "2024-11-11", ratePct: 2.528 },
  { date: "2024-11-12", ratePct: 2.502 },
  { date: "2024-11-13", ratePct: 2.495 },
  { date: "2024-11-14", ratePct: 2.494 },
  { date: "2024-11-15", ratePct: 2.475 },
  { date: "2024-11-18", ratePct: 2.432 },
  { date: "2024-11-19", ratePct: 2.448 },
  { date: "2024-11-20", ratePct: 2.465 },
  { date: "2024-11-21", ratePct: 2.491 },
  { date: "2024-11-22", ratePct: 2.489 },
  { date: "2024-11-25", ratePct: 2.416 },
  { date: "2024-11-26", ratePct: 2.393 },
  { date: "2024-11-27", ratePct: 2.448 },
  { date: "2024-11-28", ratePct: 2.463 },
  { date: "2024-11-29", ratePct: 2.461 },
  { date: "2024-12-02", ratePct: 2.431 },
  { date: "2024-12-03", ratePct: 2.356 },
  { date: "2024-12-04", ratePct: 2.348 },
  { date: "2024-12-05", ratePct: 2.388 },
  { date: "2024-12-06", ratePct: 2.399 },
  { date: "2024-12-09", ratePct: 2.45 },
  { date: "2024-12-10", ratePct: 2.439 },
  { date: "2024-12-11", ratePct: 2.429 },
  { date: "2024-12-12", ratePct: 2.421 },
  { date: "2024-12-13", ratePct: 2.405 },
  { date: "2024-12-16", ratePct: 2.443 },
  { date: "2024-12-17", ratePct: 2.474 },
  { date: "2024-12-18", ratePct: 2.474 },
  { date: "2024-12-19", ratePct: 2.469 },
  { date: "2024-12-20", ratePct: 2.484 },
  { date: "2024-12-23", ratePct: 2.461 },
  { date: "2024-12-24", ratePct: 2.471 },
  { date: "2024-12-27", ratePct: 2.465 },
  { date: "2024-12-30", ratePct: 2.454 },
  { date: "2024-12-31", ratePct: 2.46 },
  { date: "2025-01-02", ratePct: 2.448 },
  { date: "2025-01-03", ratePct: 2.448 },
  { date: "2025-01-06", ratePct: 2.487 },
  { date: "2025-01-07", ratePct: 2.556 },
  { date: "2025-01-08", ratePct: 2.561 },
  { date: "2025-01-09", ratePct: 2.553 },
  { date: "2025-01-10", ratePct: 2.564 },
  { date: "2025-01-13", ratePct: 2.576 },
  { date: "2025-01-14", ratePct: 2.612 },
  { date: "2025-01-15", ratePct: 2.559 },
  { date: "2025-01-16", ratePct: 2.563 },
  { date: "2025-01-17", ratePct: 2.524 },
  { date: "2025-01-20", ratePct: 2.483 },
  { date: "2025-01-21", ratePct: 2.489 },
  { date: "2025-01-22", ratePct: 2.493 },
  { date: "2025-01-23", ratePct: 2.493 },
  { date: "2025-01-24", ratePct: 2.499 },
  { date: "2025-01-27", ratePct: 2.528 },
  { date: "2025-01-28", ratePct: 2.534 },
  { date: "2025-01-29", ratePct: 2.535 },
  { date: "2025-01-30", ratePct: 2.531 },
  { date: "2025-01-31", ratePct: 2.519 },
  { date: "2025-02-03", ratePct: 2.436 },
  { date: "2025-02-04", ratePct: 2.35 },
  { date: "2025-02-05", ratePct: 2.369 },
  { date: "2025-02-06", ratePct: 2.354 },
  { date: "2025-02-07", ratePct: 2.384 },
  { date: "2025-02-10", ratePct: 2.372 },
  { date: "2025-02-11", ratePct: 2.374 },
  { date: "2025-02-12", ratePct: 2.37 },
  { date: "2025-02-13", ratePct: 2.417 },
  { date: "2025-02-14", ratePct: 2.438 },
  { date: "2025-02-17", ratePct: 2.424 },
  { date: "2025-02-18", ratePct: 2.444 },
  { date: "2025-02-19", ratePct: 2.447 },
  { date: "2025-02-20", ratePct: 2.446 },
  { date: "2025-02-21", ratePct: 2.463 },
  { date: "2025-02-24", ratePct: 2.431 },
  { date: "2025-02-25", ratePct: 2.417 },
  { date: "2025-02-26", ratePct: 2.4 },
  { date: "2025-02-27", ratePct: 2.409 },
  { date: "2025-02-28", ratePct: 2.394 },
  { date: "2025-03-03", ratePct: 2.365 },
  { date: "2025-03-04", ratePct: 2.381 },
  { date: "2025-03-05", ratePct: 2.392 },
  { date: "2025-03-06", ratePct: 2.448 },
  { date: "2025-03-07", ratePct: 2.481 },
  { date: "2025-03-10", ratePct: 2.461 },
  { date: "2025-03-11", ratePct: 2.449 },
  { date: "2025-03-12", ratePct: 2.431 },
  { date: "2025-03-13", ratePct: 2.451 },
  { date: "2025-03-14", ratePct: 2.451 },
  { date: "2025-03-17", ratePct: 2.439 },
  { date: "2025-03-18", ratePct: 2.416 },
  { date: "2025-03-19", ratePct: 2.406 },
  { date: "2025-03-20", ratePct: 2.379 },
  { date: "2025-03-21", ratePct: 2.371 },
  { date: "2025-03-24", ratePct: 2.366 },
  { date: "2025-03-25", ratePct: 2.354 },
  { date: "2025-03-26", ratePct: 2.346 },
  { date: "2025-03-27", ratePct: 2.349 },
  { date: "2025-03-28", ratePct: 2.324 },
  { date: "2025-03-31", ratePct: 2.306 },
  { date: "2025-04-01", ratePct: 2.277 },
  { date: "2025-04-02", ratePct: 2.326 },
  { date: "2025-04-03", ratePct: 2.311 },
  { date: "2025-04-04", ratePct: 2.235 },
  { date: "2025-04-07", ratePct: 2.21 },
  { date: "2025-04-08", ratePct: 2.107 },
  { date: "2025-04-09", ratePct: 2.156 },
  { date: "2025-04-10", ratePct: 2.099 },
  { date: "2025-04-11", ratePct: 2.167 },
  { date: "2025-04-14", ratePct: 2.126 },
  { date: "2025-04-15", ratePct: 2.126 },
  { date: "2025-04-16", ratePct: 2.132 },
  { date: "2025-04-17", ratePct: 2.104 },
  { date: "2025-04-22", ratePct: 2.128 },
  { date: "2025-04-23", ratePct: 2.022 },
  { date: "2025-04-24", ratePct: 2.069 },
  { date: "2025-04-25", ratePct: 2.082 },
  { date: "2025-04-28", ratePct: 2.066 },
  { date: "2025-04-29", ratePct: 2.076 },
  { date: "2025-04-30", ratePct: 2.049 },
  { date: "2025-05-02", ratePct: 2.045 },
  { date: "2025-05-05", ratePct: 2.039 },
  { date: "2025-05-06", ratePct: 2.045 },
  { date: "2025-05-07", ratePct: 2.039 },
  { date: "2025-05-08", ratePct: 2.036 },
  { date: "2025-05-09", ratePct: 2.024 },
  { date: "2025-05-12", ratePct: 2.067 },
  { date: "2025-05-13", ratePct: 2.107 },
  { date: "2025-05-14", ratePct: 2.16 },
  { date: "2025-05-15", ratePct: 2.161 },
  { date: "2025-05-16", ratePct: 2.142 },
  { date: "2025-05-19", ratePct: 2.094 },
  { date: "2025-05-20", ratePct: 2.095 },
  { date: "2025-05-21", ratePct: 2.084 },
  { date: "2025-05-22", ratePct: 2.104 },
  { date: "2025-05-23", ratePct: 2.096 },
  { date: "2025-05-26", ratePct: 2.082 },
  { date: "2025-05-27", ratePct: 2.056 },
  { date: "2025-05-28", ratePct: 2.056 },
  { date: "2025-05-29", ratePct: 2.07 },
  { date: "2025-05-30", ratePct: 2.09 },
  { date: "2025-06-02", ratePct: 2.057 },
  { date: "2025-06-03", ratePct: 2.07 },
  { date: "2025-06-04", ratePct: 2.051 },
  { date: "2025-06-05", ratePct: 2.044 },
  { date: "2025-06-06", ratePct: 2.041 },
  { date: "2025-06-09", ratePct: 2.088 },
  { date: "2025-06-10", ratePct: 2.086 },
  { date: "2025-06-11", ratePct: 2.09 },
  { date: "2025-06-12", ratePct: 2.09 },
  { date: "2025-06-13", ratePct: 2.084 },
  { date: "2025-06-16", ratePct: 2.084 },
  { date: "2025-06-17", ratePct: 2.111 },
  { date: "2025-06-18", ratePct: 2.099 },
  { date: "2025-06-19", ratePct: 2.109 },
  { date: "2025-06-20", ratePct: 2.101 },
  { date: "2025-06-23", ratePct: 2.093 },
  { date: "2025-06-24", ratePct: 2.11 },
  { date: "2025-06-25", ratePct: 2.084 },
  { date: "2025-06-26", ratePct: 2.073 },
  { date: "2025-06-27", ratePct: 2.062 },
  { date: "2025-06-30", ratePct: 2.072 },
  { date: "2025-07-01", ratePct: 2.07 },
  { date: "2025-07-02", ratePct: 2.055 },
  { date: "2025-07-03", ratePct: 2.062 },
  { date: "2025-07-04", ratePct: 2.066 },
  { date: "2025-07-07", ratePct: 2.044 },
  { date: "2025-07-08", ratePct: 2.049 },
  { date: "2025-07-09", ratePct: 2.083 },
  { date: "2025-07-10", ratePct: 2.089 },
  { date: "2025-07-11", ratePct: 2.089 },
  { date: "2025-07-14", ratePct: 2.114 },
  { date: "2025-07-15", ratePct: 2.108 },
  { date: "2025-07-16", ratePct: 2.089 },
  { date: "2025-07-17", ratePct: 2.087 },
  { date: "2025-07-18", ratePct: 2.065 },
  { date: "2025-07-21", ratePct: 2.078 },
  { date: "2025-07-22", ratePct: 2.05 },
  { date: "2025-07-23", ratePct: 2.038 },
  { date: "2025-07-24", ratePct: 2.036 },
  { date: "2025-07-25", ratePct: 2.058 },
  { date: "2025-07-28", ratePct: 2.131 },
  { date: "2025-07-29", ratePct: 2.116 },
  { date: "2025-07-30", ratePct: 2.116 },
  { date: "2025-07-31", ratePct: 2.126 },
  { date: "2025-08-01", ratePct: 2.147 },
  { date: "2025-08-04", ratePct: 2.156 },
  { date: "2025-08-05", ratePct: 2.129 },
  { date: "2025-08-06", ratePct: 2.118 },
  { date: "2025-08-07", ratePct: 2.122 },
  { date: "2025-08-08", ratePct: 2.121 },
  { date: "2025-08-11", ratePct: 2.132 },
  { date: "2025-08-12", ratePct: 2.142 },
  { date: "2025-08-13", ratePct: 2.136 },
  { date: "2025-08-14", ratePct: 2.116 },
  { date: "2025-08-15", ratePct: 2.092 },
  { date: "2025-08-18", ratePct: 2.084 },
  { date: "2025-08-19", ratePct: 2.081 },
  { date: "2025-08-20", ratePct: 2.084 },
  { date: "2025-08-21", ratePct: 2.084 },
  { date: "2025-08-22", ratePct: 2.084 },
  { date: "2025-08-25", ratePct: 2.113 },
  { date: "2025-08-26", ratePct: 2.116 },
  { date: "2025-08-27", ratePct: 2.101 },
  { date: "2025-08-28", ratePct: 2.115 },
  { date: "2025-08-29", ratePct: 2.119 },
  { date: "2025-09-01", ratePct: 2.148 },
  { date: "2025-09-02", ratePct: 2.162 },
  { date: "2025-09-03", ratePct: 2.191 },
  { date: "2025-09-04", ratePct: 2.19 },
  { date: "2025-09-05", ratePct: 2.178 },
  { date: "2025-09-08", ratePct: 2.184 },
  { date: "2025-09-09", ratePct: 2.169 },
  { date: "2025-09-10", ratePct: 2.16 },
  { date: "2025-09-11", ratePct: 2.168 },
  { date: "2025-09-12", ratePct: 2.167 },
  { date: "2025-09-15", ratePct: 2.183 },
  { date: "2025-09-16", ratePct: 2.165 },
  { date: "2025-09-17", ratePct: 2.164 },
  { date: "2025-09-18", ratePct: 2.16 },
  { date: "2025-09-19", ratePct: 2.154 },
  { date: "2025-09-22", ratePct: 2.159 },
  { date: "2025-09-23", ratePct: 2.16 },
  { date: "2025-09-24", ratePct: 2.171 },
  { date: "2025-09-25", ratePct: 2.179 },
  { date: "2025-09-26", ratePct: 2.179 },
  { date: "2025-09-29", ratePct: 2.189 },
  { date: "2025-09-30", ratePct: 2.193 },
  { date: "2025-10-01", ratePct: 2.204 },
  { date: "2025-10-02", ratePct: 2.224 },
  { date: "2025-10-03", ratePct: 2.224 },
  { date: "2025-10-06", ratePct: 2.226 },
  { date: "2025-10-07", ratePct: 2.223 },
  { date: "2025-10-08", ratePct: 2.216 },
  { date: "2025-10-09", ratePct: 2.209 },
  { date: "2025-10-10", ratePct: 2.202 },
  { date: "2025-10-13", ratePct: 2.201 },
  { date: "2025-10-14", ratePct: 2.182 },
  { date: "2025-10-15", ratePct: 2.163 },
  { date: "2025-10-16", ratePct: 2.166 },
  { date: "2025-10-17", ratePct: 2.164 },
  { date: "2025-10-20", ratePct: 2.139 },
  { date: "2025-10-21", ratePct: 2.157 },
  { date: "2025-10-22", ratePct: 2.156 },
  { date: "2025-10-23", ratePct: 2.156 },
  { date: "2025-10-24", ratePct: 2.159 },
  { date: "2025-10-27", ratePct: 2.175 },
  { date: "2025-10-28", ratePct: 2.195 },
  { date: "2025-10-29", ratePct: 2.185 },
  { date: "2025-10-30", ratePct: 2.186 },
  { date: "2025-10-31", ratePct: 2.196 },
  { date: "2025-11-03", ratePct: 2.199 },
  { date: "2025-11-04", ratePct: 2.206 },
  { date: "2025-11-05", ratePct: 2.212 },
  { date: "2025-11-06", ratePct: 2.211 },
  { date: "2025-11-07", ratePct: 2.212 },
  { date: "2025-11-10", ratePct: 2.211 },
  { date: "2025-11-11", ratePct: 2.216 },
  { date: "2025-11-12", ratePct: 2.224 },
  { date: "2025-11-13", ratePct: 2.234 },
  { date: "2025-11-14", ratePct: 2.235 },
  { date: "2025-11-17", ratePct: 2.235 },
  { date: "2025-11-18", ratePct: 2.233 },
  { date: "2025-11-19", ratePct: 2.229 },
  { date: "2025-11-20", ratePct: 2.221 },
  { date: "2025-11-21", ratePct: 2.22 },
  { date: "2025-11-24", ratePct: 2.209 },
  { date: "2025-11-25", ratePct: 2.206 },
  { date: "2025-11-26", ratePct: 2.206 },
  { date: "2025-11-27", ratePct: 2.21 },
  { date: "2025-11-28", ratePct: 2.209 },
  { date: "2025-12-01", ratePct: 2.227 },
  { date: "2025-12-02", ratePct: 2.244 },
  { date: "2025-12-03", ratePct: 2.251 },
  { date: "2025-12-04", ratePct: 2.254 },
  { date: "2025-12-05", ratePct: 2.254 },
  { date: "2025-12-08", ratePct: 2.246 },
  { date: "2025-12-09", ratePct: 2.268 },
  { date: "2025-12-10", ratePct: 2.284 },
  { date: "2025-12-11", ratePct: 2.298 },
  { date: "2025-12-12", ratePct: 2.294 },
  { date: "2025-12-15", ratePct: 2.31 },
  { date: "2025-12-16", ratePct: 2.315 },
  { date: "2025-12-17", ratePct: 2.291 },
  { date: "2025-12-18", ratePct: 2.264 },
  { date: "2025-12-19", ratePct: 2.266 },
  { date: "2025-12-22", ratePct: 2.269 },
  { date: "2025-12-23", ratePct: 2.265 },
  { date: "2025-12-24", ratePct: 2.259 },
  { date: "2025-12-29", ratePct: 2.258 },
  { date: "2025-12-30", ratePct: 2.25 },
  { date: "2025-12-31", ratePct: 2.243 },
  { date: "2026-01-02", ratePct: 2.245 },
  { date: "2026-01-05", ratePct: 2.255 },
  { date: "2026-01-06", ratePct: 2.261 },
  { date: "2026-01-07", ratePct: 2.259 },
  { date: "2026-01-08", ratePct: 2.247 },
  { date: "2026-01-09", ratePct: 2.251 },
  { date: "2026-01-12", ratePct: 2.249 },
  { date: "2026-01-13", ratePct: 2.25 },
  { date: "2026-01-14", ratePct: 2.251 },
  { date: "2026-01-15", ratePct: 2.253 },
  { date: "2026-01-16", ratePct: 2.248 },
  { date: "2026-01-19", ratePct: 2.259 },
  { date: "2026-01-20", ratePct: 2.236 },
  { date: "2026-01-21", ratePct: 2.228 },
  { date: "2026-01-22", ratePct: 2.216 },
  { date: "2026-01-23", ratePct: 2.243 },
  { date: "2026-01-26", ratePct: 2.247 },
  { date: "2026-01-27", ratePct: 2.249 },
  { date: "2026-01-28", ratePct: 2.246 },
  { date: "2026-01-29", ratePct: 2.228 },
  { date: "2026-01-30", ratePct: 2.226 },
  { date: "2026-02-02", ratePct: 2.218 },
  { date: "2026-02-03", ratePct: 2.225 },
  { date: "2026-02-04", ratePct: 2.234 },
  { date: "2026-02-05", ratePct: 2.225 },
  { date: "2026-02-06", ratePct: 2.227 },
  { date: "2026-02-09", ratePct: 2.222 },
  { date: "2026-02-10", ratePct: 2.227 },
  { date: "2026-02-11", ratePct: 2.231 },
  { date: "2026-02-12", ratePct: 2.246 },
  { date: "2026-02-13", ratePct: 2.248 },
  { date: "2026-02-16", ratePct: 2.236 },
  { date: "2026-02-17", ratePct: 2.216 },
  { date: "2026-02-18", ratePct: 2.198 },
  { date: "2026-02-19", ratePct: 2.198 },
  { date: "2026-02-20", ratePct: 2.205 },
  { date: "2026-02-23", ratePct: 2.205 },
  { date: "2026-02-24", ratePct: 2.206 },
  { date: "2026-02-25", ratePct: 2.208 },
  { date: "2026-02-26", ratePct: 2.217 },
  { date: "2026-02-27", ratePct: 2.222 },
  { date: "2026-03-02", ratePct: 2.229 },
  { date: "2026-03-03", ratePct: 2.232 },
  { date: "2026-03-04", ratePct: 2.307 },
  { date: "2026-03-05", ratePct: 2.316 },
  { date: "2026-03-06", ratePct: 2.323 },
  { date: "2026-03-09", ratePct: 2.367 },
  { date: "2026-03-10", ratePct: 2.552 },
  { date: "2026-03-11", ratePct: 2.369 },
  { date: "2026-03-12", ratePct: 2.456 },
  { date: "2026-03-13", ratePct: 2.522 },
  { date: "2026-03-16", ratePct: 2.54 },
  { date: "2026-03-17", ratePct: 2.547 },
  { date: "2026-03-18", ratePct: 2.528 },
  { date: "2026-03-19", ratePct: 2.524 },
  { date: "2026-03-20", ratePct: 2.658 },
  { date: "2026-03-23", ratePct: 2.74 },
  { date: "2026-03-24", ratePct: 2.929 },
  { date: "2026-03-25", ratePct: 2.812 },
  { date: "2026-03-26", ratePct: 2.82 },
  { date: "2026-03-27", ratePct: 2.86 },
  { date: "2026-03-30", ratePct: 2.932 },
  { date: "2026-03-31", ratePct: 2.87 },
  { date: "2026-04-01", ratePct: 2.845 },
  { date: "2026-04-02", ratePct: 2.799 },
  { date: "2026-04-07", ratePct: 2.872 },
  { date: "2026-04-08", ratePct: 2.86 },
  { date: "2026-04-09", ratePct: 2.68 },
  { date: "2026-04-10", ratePct: 2.715 },
  { date: "2026-04-13", ratePct: 2.708 },
  { date: "2026-04-14", ratePct: 2.767 },
  { date: "2026-04-15", ratePct: 2.756 },
  { date: "2026-04-16", ratePct: 2.723 },
  { date: "2026-04-17", ratePct: 2.685 },
  { date: "2026-04-20", ratePct: 2.702 },
  { date: "2026-04-21", ratePct: 2.655 },
  { date: "2026-04-22", ratePct: 2.64 },
  { date: "2026-04-23", ratePct: 2.687 },
  { date: "2026-04-24", ratePct: 2.735 },
  { date: "2026-04-27", ratePct: 2.763 },
  { date: "2026-04-28", ratePct: 2.731 },
  { date: "2026-04-29", ratePct: 2.765 },
  { date: "2026-04-30", ratePct: 2.848 },
  { date: "2026-05-04", ratePct: 2.883 },
  { date: "2026-05-05", ratePct: 2.837 },
  { date: "2026-05-06", ratePct: 2.867 },
  { date: "2026-05-07", ratePct: 2.795 }
];

// ../src/data/euribor3m.json
var euribor3m_default = [
  { date: "1999-01-04", ratePct: 3.234 },
  { date: "1999-01-05", ratePct: 3.222 },
  { date: "1999-01-06", ratePct: 3.214 },
  { date: "1999-01-07", ratePct: 3.206 },
  { date: "1999-01-08", ratePct: 3.196 },
  { date: "1999-01-11", ratePct: 3.193 },
  { date: "1999-01-12", ratePct: 3.19 },
  { date: "1999-01-13", ratePct: 3.183 },
  { date: "1999-01-14", ratePct: 3.163 },
  { date: "1999-01-15", ratePct: 3.134 },
  { date: "1999-01-18", ratePct: 3.102 },
  { date: "1999-01-19", ratePct: 3.056 },
  { date: "1999-01-20", ratePct: 3.054 },
  { date: "1999-01-21", ratePct: 3.056 },
  { date: "1999-01-22", ratePct: 3.059 },
  { date: "1999-01-25", ratePct: 3.069 },
  { date: "1999-01-26", ratePct: 3.08 },
  { date: "1999-01-27", ratePct: 3.08 },
  { date: "1999-01-28", ratePct: 3.077 },
  { date: "1999-01-29", ratePct: 3.074 },
  { date: "1999-02-01", ratePct: 3.078 },
  { date: "1999-02-02", ratePct: 3.091 },
  { date: "1999-02-03", ratePct: 3.098 },
  { date: "1999-02-04", ratePct: 3.105 },
  { date: "1999-02-05", ratePct: 3.107 },
  { date: "1999-02-08", ratePct: 3.113 },
  { date: "1999-02-09", ratePct: 3.112 },
  { date: "1999-02-10", ratePct: 3.109 },
  { date: "1999-02-11", ratePct: 3.106 },
  { date: "1999-02-12", ratePct: 3.1 },
  { date: "1999-02-15", ratePct: 3.099 },
  { date: "1999-02-16", ratePct: 3.092 },
  { date: "1999-02-17", ratePct: 3.086 },
  { date: "1999-02-18", ratePct: 3.079 },
  { date: "1999-02-19", ratePct: 3.077 },
  { date: "1999-02-22", ratePct: 3.075 },
  { date: "1999-02-23", ratePct: 3.076 },
  { date: "1999-02-24", ratePct: 3.079 },
  { date: "1999-02-25", ratePct: 3.087 },
  { date: "1999-02-26", ratePct: 3.098 },
  { date: "1999-03-01", ratePct: 3.099 },
  { date: "1999-03-02", ratePct: 3.115 },
  { date: "1999-03-03", ratePct: 3.112 },
  { date: "1999-03-04", ratePct: 3.111 },
  { date: "1999-03-05", ratePct: 3.104 },
  { date: "1999-03-08", ratePct: 3.093 },
  { date: "1999-03-09", ratePct: 3.087 },
  { date: "1999-03-10", ratePct: 3.081 },
  { date: "1999-03-11", ratePct: 3.074 },
  { date: "1999-03-12", ratePct: 3.047 },
  { date: "1999-03-15", ratePct: 3.039 },
  { date: "1999-03-16", ratePct: 3.036 },
  { date: "1999-03-17", ratePct: 3.038 },
  { date: "1999-03-18", ratePct: 3.032 },
  { date: "1999-03-19", ratePct: 3.027 },
  { date: "1999-03-22", ratePct: 3.02 },
  { date: "1999-03-23", ratePct: 3.019 },
  { date: "1999-03-24", ratePct: 3.014 },
  { date: "1999-03-25", ratePct: 2.998 },
  { date: "1999-03-26", ratePct: 2.991 },
  { date: "1999-03-29", ratePct: 2.985 },
  { date: "1999-03-30", ratePct: 2.981 },
  { date: "1999-03-31", ratePct: 2.971 },
  { date: "1999-04-01", ratePct: 2.942 },
  { date: "1999-04-02", ratePct: 2.929 },
  { date: "1999-04-05", ratePct: 2.929 },
  { date: "1999-04-06", ratePct: 2.905 },
  { date: "1999-04-07", ratePct: 2.9 },
  { date: "1999-04-08", ratePct: 2.895 },
  { date: "1999-04-09", ratePct: 2.66 },
  { date: "1999-04-12", ratePct: 2.661 },
  { date: "1999-04-13", ratePct: 2.651 },
  { date: "1999-04-14", ratePct: 2.637 },
  { date: "1999-04-15", ratePct: 2.628 },
  { date: "1999-04-16", ratePct: 2.626 },
  { date: "1999-04-19", ratePct: 2.621 },
  { date: "1999-04-20", ratePct: 2.61 },
  { date: "1999-04-21", ratePct: 2.601 },
  { date: "1999-04-22", ratePct: 2.596 },
  { date: "1999-04-23", ratePct: 2.594 },
  { date: "1999-04-26", ratePct: 2.591 },
  { date: "1999-04-27", ratePct: 2.59 },
  { date: "1999-04-28", ratePct: 2.588 },
  { date: "1999-04-29", ratePct: 2.585 },
  { date: "1999-04-30", ratePct: 2.583 },
  { date: "1999-05-03", ratePct: 2.583 },
  { date: "1999-05-04", ratePct: 2.581 },
  { date: "1999-05-05", ratePct: 2.581 },
  { date: "1999-05-06", ratePct: 2.579 },
  { date: "1999-05-07", ratePct: 2.581 },
  { date: "1999-05-10", ratePct: 2.582 },
  { date: "1999-05-11", ratePct: 2.579 },
  { date: "1999-05-12", ratePct: 2.578 },
  { date: "1999-05-13", ratePct: 2.577 },
  { date: "1999-05-14", ratePct: 2.57 },
  { date: "1999-05-17", ratePct: 2.575 },
  { date: "1999-05-18", ratePct: 2.576 },
  { date: "1999-05-19", ratePct: 2.583 },
  { date: "1999-05-20", ratePct: 2.584 },
  { date: "1999-05-21", ratePct: 2.581 },
  { date: "1999-05-24", ratePct: 2.579 },
  { date: "1999-05-25", ratePct: 2.579 },
  { date: "1999-05-26", ratePct: 2.577 },
  { date: "1999-05-27", ratePct: 2.577 },
  { date: "1999-05-28", ratePct: 2.578 },
  { date: "1999-05-31", ratePct: 2.578 },
  { date: "1999-06-01", ratePct: 2.585 },
  { date: "1999-06-02", ratePct: 2.601 },
  { date: "1999-06-03", ratePct: 2.597 },
  { date: "1999-06-04", ratePct: 2.597 },
  { date: "1999-06-07", ratePct: 2.602 },
  { date: "1999-06-08", ratePct: 2.6 },
  { date: "1999-06-09", ratePct: 2.603 },
  { date: "1999-06-10", ratePct: 2.605 },
  { date: "1999-06-11", ratePct: 2.619 },
  { date: "1999-06-14", ratePct: 2.623 },
  { date: "1999-06-15", ratePct: 2.625 },
  { date: "1999-06-16", ratePct: 2.628 },
  { date: "1999-06-17", ratePct: 2.632 },
  { date: "1999-06-18", ratePct: 2.632 },
  { date: "1999-06-21", ratePct: 2.637 },
  { date: "1999-06-22", ratePct: 2.645 },
  { date: "1999-06-23", ratePct: 2.647 },
  { date: "1999-06-24", ratePct: 2.649 },
  { date: "1999-06-25", ratePct: 2.66 },
  { date: "1999-06-28", ratePct: 2.664 },
  { date: "1999-06-29", ratePct: 2.667 },
  { date: "1999-06-30", ratePct: 2.669 },
  { date: "1999-07-01", ratePct: 2.655 },
  { date: "1999-07-02", ratePct: 2.663 },
  { date: "1999-07-05", ratePct: 2.662 },
  { date: "1999-07-06", ratePct: 2.663 },
  { date: "1999-07-07", ratePct: 2.663 },
  { date: "1999-07-08", ratePct: 2.664 },
  { date: "1999-07-09", ratePct: 2.665 },
  { date: "1999-07-12", ratePct: 2.665 },
  { date: "1999-07-13", ratePct: 2.666 },
  { date: "1999-07-14", ratePct: 2.664 },
  { date: "1999-07-15", ratePct: 2.663 },
  { date: "1999-07-16", ratePct: 2.693 },
  { date: "1999-07-19", ratePct: 2.699 },
  { date: "1999-07-20", ratePct: 2.703 },
  { date: "1999-07-21", ratePct: 2.697 },
  { date: "1999-07-22", ratePct: 2.681 },
  { date: "1999-07-23", ratePct: 2.685 },
  { date: "1999-07-26", ratePct: 2.685 },
  { date: "1999-07-27", ratePct: 2.685 },
  { date: "1999-07-28", ratePct: 2.685 },
  { date: "1999-07-29", ratePct: 2.686 },
  { date: "1999-07-30", ratePct: 2.69 },
  { date: "1999-08-02", ratePct: 2.697 },
  { date: "1999-08-03", ratePct: 2.705 },
  { date: "1999-08-04", ratePct: 2.702 },
  { date: "1999-08-05", ratePct: 2.701 },
  { date: "1999-08-06", ratePct: 2.699 },
  { date: "1999-08-09", ratePct: 2.703 },
  { date: "1999-08-10", ratePct: 2.704 },
  { date: "1999-08-11", ratePct: 2.703 },
  { date: "1999-08-12", ratePct: 2.703 },
  { date: "1999-08-13", ratePct: 2.704 },
  { date: "1999-08-16", ratePct: 2.704 },
  { date: "1999-08-17", ratePct: 2.702 },
  { date: "1999-08-18", ratePct: 2.678 },
  { date: "1999-08-19", ratePct: 2.677 },
  { date: "1999-08-20", ratePct: 2.684 },
  { date: "1999-08-23", ratePct: 2.684 },
  { date: "1999-08-24", ratePct: 2.686 },
  { date: "1999-08-25", ratePct: 2.686 },
  { date: "1999-08-26", ratePct: 2.686 },
  { date: "1999-08-27", ratePct: 2.691 },
  { date: "1999-08-30", ratePct: 2.695 },
  { date: "1999-08-31", ratePct: 2.697 },
  { date: "1999-09-01", ratePct: 2.699 },
  { date: "1999-09-02", ratePct: 2.698 },
  { date: "1999-09-03", ratePct: 2.696 },
  { date: "1999-09-06", ratePct: 2.69 },
  { date: "1999-09-07", ratePct: 2.688 },
  { date: "1999-09-08", ratePct: 2.687 },
  { date: "1999-09-09", ratePct: 2.689 },
  { date: "1999-09-10", ratePct: 2.692 },
  { date: "1999-09-13", ratePct: 2.693 },
  { date: "1999-09-14", ratePct: 2.69 },
  { date: "1999-09-15", ratePct: 2.69 },
  { date: "1999-09-16", ratePct: 2.69 },
  { date: "1999-09-17", ratePct: 2.687 },
  { date: "1999-09-20", ratePct: 2.681 },
  { date: "1999-09-21", ratePct: 2.684 },
  { date: "1999-09-22", ratePct: 2.687 },
  { date: "1999-09-23", ratePct: 2.698 },
  { date: "1999-09-24", ratePct: 2.69 },
  { date: "1999-09-27", ratePct: 2.69 },
  { date: "1999-09-28", ratePct: 2.698 },
  { date: "1999-09-29", ratePct: 3.084 },
  { date: "1999-09-30", ratePct: 3.086 },
  { date: "1999-10-01", ratePct: 3.126 },
  { date: "1999-10-04", ratePct: 3.225 },
  { date: "1999-10-05", ratePct: 3.252 },
  { date: "1999-10-06", ratePct: 3.292 },
  { date: "1999-10-07", ratePct: 3.317 },
  { date: "1999-10-08", ratePct: 3.263 },
  { date: "1999-10-11", ratePct: 3.277 },
  { date: "1999-10-12", ratePct: 3.298 },
  { date: "1999-10-13", ratePct: 3.358 },
  { date: "1999-10-14", ratePct: 3.379 },
  { date: "1999-10-15", ratePct: 3.429 },
  { date: "1999-10-18", ratePct: 3.433 },
  { date: "1999-10-19", ratePct: 3.429 },
  { date: "1999-10-20", ratePct: 3.45 },
  { date: "1999-10-21", ratePct: 3.474 },
  { date: "1999-10-22", ratePct: 3.457 },
  { date: "1999-10-25", ratePct: 3.451 },
  { date: "1999-10-26", ratePct: 3.485 },
  { date: "1999-10-27", ratePct: 3.501 },
  { date: "1999-10-28", ratePct: 3.502 },
  { date: "1999-10-29", ratePct: 3.491 },
  { date: "1999-11-01", ratePct: 3.501 },
  { date: "1999-11-02", ratePct: 3.528 },
  { date: "1999-11-03", ratePct: 3.531 },
  { date: "1999-11-04", ratePct: 3.517 },
  { date: "1999-11-05", ratePct: 3.505 },
  { date: "1999-11-08", ratePct: 3.492 },
  { date: "1999-11-09", ratePct: 3.461 },
  { date: "1999-11-10", ratePct: 3.461 },
  { date: "1999-11-11", ratePct: 3.462 },
  { date: "1999-11-12", ratePct: 3.452 },
  { date: "1999-11-15", ratePct: 3.449 },
  { date: "1999-11-16", ratePct: 3.449 },
  { date: "1999-11-17", ratePct: 3.449 },
  { date: "1999-11-18", ratePct: 3.45 },
  { date: "1999-11-19", ratePct: 3.45 },
  { date: "1999-11-22", ratePct: 3.453 },
  { date: "1999-11-23", ratePct: 3.451 },
  { date: "1999-11-24", ratePct: 3.446 },
  { date: "1999-11-25", ratePct: 3.444 },
  { date: "1999-11-26", ratePct: 3.445 },
  { date: "1999-11-29", ratePct: 3.445 },
  { date: "1999-11-30", ratePct: 3.448 },
  { date: "1999-12-01", ratePct: 3.45 },
  { date: "1999-12-02", ratePct: 3.451 },
  { date: "1999-12-03", ratePct: 3.454 },
  { date: "1999-12-06", ratePct: 3.459 },
  { date: "1999-12-07", ratePct: 3.461 },
  { date: "1999-12-08", ratePct: 3.461 },
  { date: "1999-12-09", ratePct: 3.461 },
  { date: "1999-12-10", ratePct: 3.457 },
  { date: "1999-12-13", ratePct: 3.455 },
  { date: "1999-12-14", ratePct: 3.456 },
  { date: "1999-12-15", ratePct: 3.456 },
  { date: "1999-12-16", ratePct: 3.458 },
  { date: "1999-12-17", ratePct: 3.465 },
  { date: "1999-12-20", ratePct: 3.466 },
  { date: "1999-12-21", ratePct: 3.466 },
  { date: "1999-12-22", ratePct: 3.458 },
  { date: "1999-12-23", ratePct: 3.447 },
  { date: "1999-12-24", ratePct: 3.449 },
  { date: "1999-12-27", ratePct: 3.45 },
  { date: "1999-12-28", ratePct: 3.449 },
  { date: "1999-12-29", ratePct: 3.345 },
  { date: "1999-12-30", ratePct: 3.339 },
  { date: "2000-01-03", ratePct: 3.338 },
  { date: "2000-01-04", ratePct: 3.343 },
  { date: "2000-01-05", ratePct: 3.341 },
  { date: "2000-01-06", ratePct: 3.331 },
  { date: "2000-01-07", ratePct: 3.322 },
  { date: "2000-01-10", ratePct: 3.317 },
  { date: "2000-01-11", ratePct: 3.315 },
  { date: "2000-01-12", ratePct: 3.322 },
  { date: "2000-01-13", ratePct: 3.322 },
  { date: "2000-01-14", ratePct: 3.321 },
  { date: "2000-01-17", ratePct: 3.316 },
  { date: "2000-01-18", ratePct: 3.313 },
  { date: "2000-01-19", ratePct: 3.308 },
  { date: "2000-01-20", ratePct: 3.31 },
  { date: "2000-01-21", ratePct: 3.31 },
  { date: "2000-01-24", ratePct: 3.317 },
  { date: "2000-01-25", ratePct: 3.322 },
  { date: "2000-01-26", ratePct: 3.332 },
  { date: "2000-01-27", ratePct: 3.428 },
  { date: "2000-01-28", ratePct: 3.486 },
  { date: "2000-01-31", ratePct: 3.492 },
  { date: "2000-02-01", ratePct: 3.496 },
  { date: "2000-02-02", ratePct: 3.489 },
  { date: "2000-02-03", ratePct: 3.498 },
  { date: "2000-02-04", ratePct: 3.493 },
  { date: "2000-02-07", ratePct: 3.496 },
  { date: "2000-02-08", ratePct: 3.496 },
  { date: "2000-02-09", ratePct: 3.492 },
  { date: "2000-02-10", ratePct: 3.487 },
  { date: "2000-02-11", ratePct: 3.491 },
  { date: "2000-02-14", ratePct: 3.49 },
  { date: "2000-02-15", ratePct: 3.487 },
  { date: "2000-02-16", ratePct: 3.488 },
  { date: "2000-02-17", ratePct: 3.489 },
  { date: "2000-02-18", ratePct: 3.531 },
  { date: "2000-02-21", ratePct: 3.612 },
  { date: "2000-02-22", ratePct: 3.625 },
  { date: "2000-02-23", ratePct: 3.632 },
  { date: "2000-02-24", ratePct: 3.632 },
  { date: "2000-02-25", ratePct: 3.598 },
  { date: "2000-02-28", ratePct: 3.616 },
  { date: "2000-02-29", ratePct: 3.634 },
  { date: "2000-03-01", ratePct: 3.633 },
  { date: "2000-03-02", ratePct: 3.642 },
  { date: "2000-03-03", ratePct: 3.632 },
  { date: "2000-03-06", ratePct: 3.64 },
  { date: "2000-03-07", ratePct: 3.646 },
  { date: "2000-03-08", ratePct: 3.669 },
  { date: "2000-03-09", ratePct: 3.714 },
  { date: "2000-03-10", ratePct: 3.736 },
  { date: "2000-03-13", ratePct: 3.779 },
  { date: "2000-03-14", ratePct: 3.786 },
  { date: "2000-03-15", ratePct: 3.794 },
  { date: "2000-03-16", ratePct: 3.805 },
  { date: "2000-03-17", ratePct: 3.771 },
  { date: "2000-03-20", ratePct: 3.769 },
  { date: "2000-03-21", ratePct: 3.766 },
  { date: "2000-03-22", ratePct: 3.766 },
  { date: "2000-03-23", ratePct: 3.767 },
  { date: "2000-03-24", ratePct: 3.772 },
  { date: "2000-03-27", ratePct: 3.797 },
  { date: "2000-03-28", ratePct: 3.812 },
  { date: "2000-03-29", ratePct: 3.821 },
  { date: "2000-03-30", ratePct: 3.834 },
  { date: "2000-03-31", ratePct: 3.831 },
  { date: "2000-04-03", ratePct: 3.833 },
  { date: "2000-04-04", ratePct: 3.834 },
  { date: "2000-04-05", ratePct: 3.832 },
  { date: "2000-04-06", ratePct: 3.834 },
  { date: "2000-04-07", ratePct: 3.861 },
  { date: "2000-04-10", ratePct: 3.876 },
  { date: "2000-04-11", ratePct: 3.901 },
  { date: "2000-04-12", ratePct: 3.917 },
  { date: "2000-04-13", ratePct: 3.923 },
  { date: "2000-04-14", ratePct: 3.92 },
  { date: "2000-04-17", ratePct: 3.918 },
  { date: "2000-04-18", ratePct: 3.937 },
  { date: "2000-04-19", ratePct: 3.948 },
  { date: "2000-04-20", ratePct: 3.963 },
  { date: "2000-04-25", ratePct: 3.998 },
  { date: "2000-04-26", ratePct: 4.036 },
  { date: "2000-04-27", ratePct: 4.03 },
  { date: "2000-04-28", ratePct: 4.094 },
  { date: "2000-05-02", ratePct: 4.104 },
  { date: "2000-05-03", ratePct: 4.183 },
  { date: "2000-05-04", ratePct: 4.289 },
  { date: "2000-05-05", ratePct: 4.323 },
  { date: "2000-05-08", ratePct: 4.314 },
  { date: "2000-05-09", ratePct: 4.319 },
  { date: "2000-05-10", ratePct: 4.303 },
  { date: "2000-05-11", ratePct: 4.288 },
  { date: "2000-05-12", ratePct: 4.328 },
  { date: "2000-05-15", ratePct: 4.329 },
  { date: "2000-05-16", ratePct: 4.336 },
  { date: "2000-05-17", ratePct: 4.432 },
  { date: "2000-05-18", ratePct: 4.476 },
  { date: "2000-05-19", ratePct: 4.461 },
  { date: "2000-05-22", ratePct: 4.481 },
  { date: "2000-05-23", ratePct: 4.471 },
  { date: "2000-05-24", ratePct: 4.448 },
  { date: "2000-05-25", ratePct: 4.428 },
  { date: "2000-05-26", ratePct: 4.401 },
  { date: "2000-05-29", ratePct: 4.397 },
  { date: "2000-05-30", ratePct: 4.401 },
  { date: "2000-05-31", ratePct: 4.453 },
  { date: "2000-06-01", ratePct: 4.467 },
  { date: "2000-06-02", ratePct: 4.465 },
  { date: "2000-06-05", ratePct: 4.427 },
  { date: "2000-06-06", ratePct: 4.428 },
  { date: "2000-06-07", ratePct: 4.412 },
  { date: "2000-06-08", ratePct: 4.416 },
  { date: "2000-06-09", ratePct: 4.552 },
  { date: "2000-06-12", ratePct: 4.549 },
  { date: "2000-06-13", ratePct: 4.548 },
  { date: "2000-06-14", ratePct: 4.534 },
  { date: "2000-06-15", ratePct: 4.506 },
  { date: "2000-06-16", ratePct: 4.476 },
  { date: "2000-06-19", ratePct: 4.47 },
  { date: "2000-06-20", ratePct: 4.486 },
  { date: "2000-06-21", ratePct: 4.518 },
  { date: "2000-06-22", ratePct: 4.518 },
  { date: "2000-06-23", ratePct: 4.529 },
  { date: "2000-06-26", ratePct: 4.544 },
  { date: "2000-06-27", ratePct: 4.551 },
  { date: "2000-06-28", ratePct: 4.547 },
  { date: "2000-06-29", ratePct: 4.548 },
  { date: "2000-06-30", ratePct: 4.547 },
  { date: "2000-07-03", ratePct: 4.551 },
  { date: "2000-07-04", ratePct: 4.547 },
  { date: "2000-07-05", ratePct: 4.544 },
  { date: "2000-07-06", ratePct: 4.535 },
  { date: "2000-07-07", ratePct: 4.538 },
  { date: "2000-07-10", ratePct: 4.537 },
  { date: "2000-07-11", ratePct: 4.539 },
  { date: "2000-07-12", ratePct: 4.541 },
  { date: "2000-07-13", ratePct: 4.548 },
  { date: "2000-07-14", ratePct: 4.558 },
  { date: "2000-07-17", ratePct: 4.562 },
  { date: "2000-07-18", ratePct: 4.566 },
  { date: "2000-07-19", ratePct: 4.625 },
  { date: "2000-07-20", ratePct: 4.636 },
  { date: "2000-07-21", ratePct: 4.624 },
  { date: "2000-07-24", ratePct: 4.624 },
  { date: "2000-07-25", ratePct: 4.626 },
  { date: "2000-07-26", ratePct: 4.631 },
  { date: "2000-07-27", ratePct: 4.63 },
  { date: "2000-07-28", ratePct: 4.638 },
  { date: "2000-07-31", ratePct: 4.641 },
  { date: "2000-08-01", ratePct: 4.636 },
  { date: "2000-08-02", ratePct: 4.639 },
  { date: "2000-08-03", ratePct: 4.642 },
  { date: "2000-08-04", ratePct: 4.644 },
  { date: "2000-08-07", ratePct: 4.639 },
  { date: "2000-08-08", ratePct: 4.637 },
  { date: "2000-08-09", ratePct: 4.644 },
  { date: "2000-08-10", ratePct: 4.648 },
  { date: "2000-08-11", ratePct: 4.711 },
  { date: "2000-08-14", ratePct: 4.784 },
  { date: "2000-08-15", ratePct: 4.786 },
  { date: "2000-08-16", ratePct: 4.824 },
  { date: "2000-08-17", ratePct: 4.841 },
  { date: "2000-08-18", ratePct: 4.832 },
  { date: "2000-08-21", ratePct: 4.844 },
  { date: "2000-08-22", ratePct: 4.871 },
  { date: "2000-08-23", ratePct: 4.87 },
  { date: "2000-08-24", ratePct: 4.864 },
  { date: "2000-08-25", ratePct: 4.902 },
  { date: "2000-08-28", ratePct: 4.919 },
  { date: "2000-08-29", ratePct: 4.915 },
  { date: "2000-08-30", ratePct: 4.893 },
  { date: "2000-08-31", ratePct: 4.888 },
  { date: "2000-09-01", ratePct: 4.829 },
  { date: "2000-09-04", ratePct: 4.816 },
  { date: "2000-09-05", ratePct: 4.824 },
  { date: "2000-09-06", ratePct: 4.833 },
  { date: "2000-09-07", ratePct: 4.87 },
  { date: "2000-09-08", ratePct: 4.86 },
  { date: "2000-09-11", ratePct: 4.863 },
  { date: "2000-09-12", ratePct: 4.861 },
  { date: "2000-09-13", ratePct: 4.846 },
  { date: "2000-09-14", ratePct: 4.831 },
  { date: "2000-09-15", ratePct: 4.809 },
  { date: "2000-09-18", ratePct: 4.816 },
  { date: "2000-09-19", ratePct: 4.816 },
  { date: "2000-09-20", ratePct: 4.818 },
  { date: "2000-09-21", ratePct: 4.815 },
  { date: "2000-09-22", ratePct: 4.811 },
  { date: "2000-09-25", ratePct: 4.827 },
  { date: "2000-09-26", ratePct: 4.884 },
  { date: "2000-09-27", ratePct: 4.885 },
  { date: "2000-09-28", ratePct: 4.999 },
  { date: "2000-09-29", ratePct: 4.996 },
  { date: "2000-10-02", ratePct: 4.991 },
  { date: "2000-10-03", ratePct: 4.985 },
  { date: "2000-10-04", ratePct: 4.981 },
  { date: "2000-10-05", ratePct: 4.981 },
  { date: "2000-10-06", ratePct: 5.021 },
  { date: "2000-10-09", ratePct: 5.02 },
  { date: "2000-10-10", ratePct: 5.016 },
  { date: "2000-10-11", ratePct: 5.007 },
  { date: "2000-10-12", ratePct: 5.007 },
  { date: "2000-10-13", ratePct: 4.99 },
  { date: "2000-10-16", ratePct: 5.009 },
  { date: "2000-10-17", ratePct: 5.018 },
  { date: "2000-10-18", ratePct: 5.016 },
  { date: "2000-10-19", ratePct: 5.025 },
  { date: "2000-10-20", ratePct: 5.039 },
  { date: "2000-10-23", ratePct: 5.064 },
  { date: "2000-10-24", ratePct: 5.1 },
  { date: "2000-10-25", ratePct: 5.103 },
  { date: "2000-10-26", ratePct: 5.125 },
  { date: "2000-10-27", ratePct: 5.132 },
  { date: "2000-10-30", ratePct: 5.138 },
  { date: "2000-10-31", ratePct: 5.14 },
  { date: "2000-11-01", ratePct: 5.137 },
  { date: "2000-11-02", ratePct: 5.125 },
  { date: "2000-11-03", ratePct: 5.125 },
  { date: "2000-11-06", ratePct: 5.122 },
  { date: "2000-11-07", ratePct: 5.119 },
  { date: "2000-11-08", ratePct: 5.122 },
  { date: "2000-11-09", ratePct: 5.123 },
  { date: "2000-11-10", ratePct: 5.112 },
  { date: "2000-11-13", ratePct: 5.106 },
  { date: "2000-11-14", ratePct: 5.094 },
  { date: "2000-11-15", ratePct: 5.085 },
  { date: "2000-11-16", ratePct: 5.078 },
  { date: "2000-11-17", ratePct: 5.062 },
  { date: "2000-11-20", ratePct: 5.061 },
  { date: "2000-11-21", ratePct: 5.07 },
  { date: "2000-11-22", ratePct: 5.072 },
  { date: "2000-11-23", ratePct: 5.07 },
  { date: "2000-11-24", ratePct: 5.071 },
  { date: "2000-11-27", ratePct: 5.075 },
  { date: "2000-11-28", ratePct: 5.074 },
  { date: "2000-11-29", ratePct: 5.069 },
  { date: "2000-11-30", ratePct: 5.051 },
  { date: "2000-12-01", ratePct: 5.021 },
  { date: "2000-12-04", ratePct: 5.012 },
  { date: "2000-12-05", ratePct: 5.006 },
  { date: "2000-12-06", ratePct: 4.972 },
  { date: "2000-12-07", ratePct: 4.956 },
  { date: "2000-12-08", ratePct: 4.956 },
  { date: "2000-12-11", ratePct: 4.967 },
  { date: "2000-12-12", ratePct: 4.967 },
  { date: "2000-12-13", ratePct: 4.966 },
  { date: "2000-12-14", ratePct: 4.953 },
  { date: "2000-12-15", ratePct: 4.949 },
  { date: "2000-12-18", ratePct: 4.933 },
  { date: "2000-12-19", ratePct: 4.916 },
  { date: "2000-12-20", ratePct: 4.905 },
  { date: "2000-12-21", ratePct: 4.892 },
  { date: "2000-12-22", ratePct: 4.879 },
  { date: "2000-12-27", ratePct: 4.88 },
  { date: "2000-12-28", ratePct: 4.859 },
  { date: "2000-12-29", ratePct: 4.855 },
  { date: "2001-01-02", ratePct: 4.844 },
  { date: "2001-01-03", ratePct: 4.806 },
  { date: "2001-01-04", ratePct: 4.741 },
  { date: "2001-01-05", ratePct: 4.701 },
  { date: "2001-01-08", ratePct: 4.687 },
  { date: "2001-01-09", ratePct: 4.711 },
  { date: "2001-01-10", ratePct: 4.775 },
  { date: "2001-01-11", ratePct: 4.797 },
  { date: "2001-01-12", ratePct: 4.8 },
  { date: "2001-01-15", ratePct: 4.815 },
  { date: "2001-01-16", ratePct: 4.801 },
  { date: "2001-01-17", ratePct: 4.795 },
  { date: "2001-01-18", ratePct: 4.778 },
  { date: "2001-01-19", ratePct: 4.763 },
  { date: "2001-01-22", ratePct: 4.757 },
  { date: "2001-01-23", ratePct: 4.756 },
  { date: "2001-01-24", ratePct: 4.767 },
  { date: "2001-01-25", ratePct: 4.768 },
  { date: "2001-01-26", ratePct: 4.784 },
  { date: "2001-01-29", ratePct: 4.785 },
  { date: "2001-01-30", ratePct: 4.781 },
  { date: "2001-01-31", ratePct: 4.744 },
  { date: "2001-02-01", ratePct: 4.714 },
  { date: "2001-02-02", ratePct: 4.724 },
  { date: "2001-02-05", ratePct: 4.728 },
  { date: "2001-02-06", ratePct: 4.725 },
  { date: "2001-02-07", ratePct: 4.727 },
  { date: "2001-02-08", ratePct: 4.731 },
  { date: "2001-02-09", ratePct: 4.734 },
  { date: "2001-02-12", ratePct: 4.734 },
  { date: "2001-02-13", ratePct: 4.733 },
  { date: "2001-02-14", ratePct: 4.743 },
  { date: "2001-02-15", ratePct: 4.747 },
  { date: "2001-02-16", ratePct: 4.752 },
  { date: "2001-02-19", ratePct: 4.759 },
  { date: "2001-02-20", ratePct: 4.779 },
  { date: "2001-02-21", ratePct: 4.789 },
  { date: "2001-02-22", ratePct: 4.798 },
  { date: "2001-02-23", ratePct: 4.807 },
  { date: "2001-02-26", ratePct: 4.811 },
  { date: "2001-02-27", ratePct: 4.81 },
  { date: "2001-02-28", ratePct: 4.771 },
  { date: "2001-03-01", ratePct: 4.756 },
  { date: "2001-03-02", ratePct: 4.761 },
  { date: "2001-03-05", ratePct: 4.761 },
  { date: "2001-03-06", ratePct: 4.771 },
  { date: "2001-03-07", ratePct: 4.776 },
  { date: "2001-03-08", ratePct: 4.778 },
  { date: "2001-03-09", ratePct: 4.782 },
  { date: "2001-03-12", ratePct: 4.784 },
  { date: "2001-03-13", ratePct: 4.783 },
  { date: "2001-03-14", ratePct: 4.784 },
  { date: "2001-03-15", ratePct: 4.767 },
  { date: "2001-03-16", ratePct: 4.769 },
  { date: "2001-03-19", ratePct: 4.769 },
  { date: "2001-03-20", ratePct: 4.766 },
  { date: "2001-03-21", ratePct: 4.753 },
  { date: "2001-03-22", ratePct: 4.649 },
  { date: "2001-03-23", ratePct: 4.574 },
  { date: "2001-03-26", ratePct: 4.566 },
  { date: "2001-03-27", ratePct: 4.56 },
  { date: "2001-03-28", ratePct: 4.566 },
  { date: "2001-03-29", ratePct: 4.554 },
  { date: "2001-03-30", ratePct: 4.561 },
  { date: "2001-04-02", ratePct: 4.571 },
  { date: "2001-04-03", ratePct: 4.586 },
  { date: "2001-04-04", ratePct: 4.572 },
  { date: "2001-04-05", ratePct: 4.573 },
  { date: "2001-04-06", ratePct: 4.574 },
  { date: "2001-04-09", ratePct: 4.559 },
  { date: "2001-04-10", ratePct: 4.554 },
  { date: "2001-04-11", ratePct: 4.583 },
  { date: "2001-04-12", ratePct: 4.742 },
  { date: "2001-04-17", ratePct: 4.765 },
  { date: "2001-04-18", ratePct: 4.779 },
  { date: "2001-04-19", ratePct: 4.677 },
  { date: "2001-04-20", ratePct: 4.765 },
  { date: "2001-04-23", ratePct: 4.754 },
  { date: "2001-04-24", ratePct: 4.773 },
  { date: "2001-04-25", ratePct: 4.78 },
  { date: "2001-04-26", ratePct: 4.779 },
  { date: "2001-04-27", ratePct: 4.77 },
  { date: "2001-04-30", ratePct: 4.802 },
  { date: "2001-05-02", ratePct: 4.817 },
  { date: "2001-05-03", ratePct: 4.82 },
  { date: "2001-05-04", ratePct: 4.814 },
  { date: "2001-05-07", ratePct: 4.804 },
  { date: "2001-05-08", ratePct: 4.801 },
  { date: "2001-05-09", ratePct: 4.793 },
  { date: "2001-05-10", ratePct: 4.766 },
  { date: "2001-05-11", ratePct: 4.563 },
  { date: "2001-05-14", ratePct: 4.572 },
  { date: "2001-05-15", ratePct: 4.572 },
  { date: "2001-05-16", ratePct: 4.567 },
  { date: "2001-05-17", ratePct: 4.564 },
  { date: "2001-05-18", ratePct: 4.557 },
  { date: "2001-05-21", ratePct: 4.557 },
  { date: "2001-05-22", ratePct: 4.555 },
  { date: "2001-05-23", ratePct: 4.563 },
  { date: "2001-05-24", ratePct: 4.559 },
  { date: "2001-05-25", ratePct: 4.564 },
  { date: "2001-05-28", ratePct: 4.564 },
  { date: "2001-05-29", ratePct: 4.56 },
  { date: "2001-05-30", ratePct: 4.544 },
  { date: "2001-05-31", ratePct: 4.531 },
  { date: "2001-06-01", ratePct: 4.513 },
  { date: "2001-06-04", ratePct: 4.496 },
  { date: "2001-06-05", ratePct: 4.486 },
  { date: "2001-06-06", ratePct: 4.449 },
  { date: "2001-06-07", ratePct: 4.433 },
  { date: "2001-06-08", ratePct: 4.451 },
  { date: "2001-06-11", ratePct: 4.451 },
  { date: "2001-06-12", ratePct: 4.449 },
  { date: "2001-06-13", ratePct: 4.47 },
  { date: "2001-06-14", ratePct: 4.474 },
  { date: "2001-06-15", ratePct: 4.465 },
  { date: "2001-06-18", ratePct: 4.464 },
  { date: "2001-06-19", ratePct: 4.462 },
  { date: "2001-06-20", ratePct: 4.452 },
  { date: "2001-06-21", ratePct: 4.433 },
  { date: "2001-06-22", ratePct: 4.433 },
  { date: "2001-06-25", ratePct: 4.432 },
  { date: "2001-06-26", ratePct: 4.426 },
  { date: "2001-06-27", ratePct: 4.435 },
  { date: "2001-06-28", ratePct: 4.41 },
  { date: "2001-06-29", ratePct: 4.441 },
  { date: "2001-07-02", ratePct: 4.435 },
  { date: "2001-07-03", ratePct: 4.416 },
  { date: "2001-07-04", ratePct: 4.448 },
  { date: "2001-07-05", ratePct: 4.446 },
  { date: "2001-07-06", ratePct: 4.471 },
  { date: "2001-07-09", ratePct: 4.482 },
  { date: "2001-07-10", ratePct: 4.499 },
  { date: "2001-07-11", ratePct: 4.487 },
  { date: "2001-07-12", ratePct: 4.487 },
  { date: "2001-07-13", ratePct: 4.484 },
  { date: "2001-07-16", ratePct: 4.486 },
  { date: "2001-07-17", ratePct: 4.483 },
  { date: "2001-07-18", ratePct: 4.483 },
  { date: "2001-07-19", ratePct: 4.466 },
  { date: "2001-07-20", ratePct: 4.475 },
  { date: "2001-07-23", ratePct: 4.474 },
  { date: "2001-07-24", ratePct: 4.469 },
  { date: "2001-07-25", ratePct: 4.466 },
  { date: "2001-07-26", ratePct: 4.464 },
  { date: "2001-07-27", ratePct: 4.457 },
  { date: "2001-07-30", ratePct: 4.455 },
  { date: "2001-07-31", ratePct: 4.444 },
  { date: "2001-08-01", ratePct: 4.429 },
  { date: "2001-08-02", ratePct: 4.415 },
  { date: "2001-08-03", ratePct: 4.433 },
  { date: "2001-08-06", ratePct: 4.425 },
  { date: "2001-08-07", ratePct: 4.425 },
  { date: "2001-08-08", ratePct: 4.431 },
  { date: "2001-08-09", ratePct: 4.41 },
  { date: "2001-08-10", ratePct: 4.382 },
  { date: "2001-08-13", ratePct: 4.362 },
  { date: "2001-08-14", ratePct: 4.36 },
  { date: "2001-08-15", ratePct: 4.357 },
  { date: "2001-08-16", ratePct: 4.346 },
  { date: "2001-08-17", ratePct: 4.345 },
  { date: "2001-08-20", ratePct: 4.335 },
  { date: "2001-08-21", ratePct: 4.325 },
  { date: "2001-08-22", ratePct: 4.308 },
  { date: "2001-08-23", ratePct: 4.313 },
  { date: "2001-08-24", ratePct: 4.311 },
  { date: "2001-08-27", ratePct: 4.315 },
  { date: "2001-08-28", ratePct: 4.305 },
  { date: "2001-08-29", ratePct: 4.27 },
  { date: "2001-08-30", ratePct: 4.276 },
  { date: "2001-08-31", ratePct: 4.253 },
  { date: "2001-09-03", ratePct: 4.254 },
  { date: "2001-09-04", ratePct: 4.258 },
  { date: "2001-09-05", ratePct: 4.276 },
  { date: "2001-09-06", ratePct: 4.279 },
  { date: "2001-09-07", ratePct: 4.264 },
  { date: "2001-09-10", ratePct: 4.242 },
  { date: "2001-09-11", ratePct: 4.242 },
  { date: "2001-09-12", ratePct: 4.176 },
  { date: "2001-09-13", ratePct: 4.165 },
  { date: "2001-09-14", ratePct: 4.16 },
  { date: "2001-09-17", ratePct: 4.137 },
  { date: "2001-09-18", ratePct: 3.779 },
  { date: "2001-09-19", ratePct: 3.76 },
  { date: "2001-09-20", ratePct: 3.701 },
  { date: "2001-09-21", ratePct: 3.69 },
  { date: "2001-09-24", ratePct: 3.661 },
  { date: "2001-09-25", ratePct: 3.654 },
  { date: "2001-09-26", ratePct: 3.648 },
  { date: "2001-09-27", ratePct: 3.655 },
  { date: "2001-09-28", ratePct: 3.656 },
  { date: "2001-10-01", ratePct: 3.656 },
  { date: "2001-10-02", ratePct: 3.651 },
  { date: "2001-10-03", ratePct: 3.622 },
  { date: "2001-10-04", ratePct: 3.598 },
  { date: "2001-10-05", ratePct: 3.558 },
  { date: "2001-10-08", ratePct: 3.557 },
  { date: "2001-10-09", ratePct: 3.582 },
  { date: "2001-10-10", ratePct: 3.624 },
  { date: "2001-10-11", ratePct: 3.614 },
  { date: "2001-10-12", ratePct: 3.656 },
  { date: "2001-10-15", ratePct: 3.636 },
  { date: "2001-10-16", ratePct: 3.626 },
  { date: "2001-10-17", ratePct: 3.645 },
  { date: "2001-10-18", ratePct: 3.633 },
  { date: "2001-10-19", ratePct: 3.607 },
  { date: "2001-10-22", ratePct: 3.58 },
  { date: "2001-10-23", ratePct: 3.579 },
  { date: "2001-10-24", ratePct: 3.575 },
  { date: "2001-10-25", ratePct: 3.563 },
  { date: "2001-10-26", ratePct: 3.579 },
  { date: "2001-10-29", ratePct: 3.576 },
  { date: "2001-10-30", ratePct: 3.558 },
  { date: "2001-10-31", ratePct: 3.522 },
  { date: "2001-11-01", ratePct: 3.512 },
  { date: "2001-11-02", ratePct: 3.499 },
  { date: "2001-11-05", ratePct: 3.491 },
  { date: "2001-11-06", ratePct: 3.467 },
  { date: "2001-11-07", ratePct: 3.371 },
  { date: "2001-11-08", ratePct: 3.324 },
  { date: "2001-11-09", ratePct: 3.342 },
  { date: "2001-11-12", ratePct: 3.35 },
  { date: "2001-11-13", ratePct: 3.351 },
  { date: "2001-11-14", ratePct: 3.338 },
  { date: "2001-11-15", ratePct: 3.359 },
  { date: "2001-11-16", ratePct: 3.383 },
  { date: "2001-11-19", ratePct: 3.373 },
  { date: "2001-11-20", ratePct: 3.349 },
  { date: "2001-11-21", ratePct: 3.363 },
  { date: "2001-11-22", ratePct: 3.38 },
  { date: "2001-11-23", ratePct: 3.375 },
  { date: "2001-11-26", ratePct: 3.369 },
  { date: "2001-11-27", ratePct: 3.377 },
  { date: "2001-11-28", ratePct: 3.376 },
  { date: "2001-11-29", ratePct: 3.376 },
  { date: "2001-11-30", ratePct: 3.36 },
  { date: "2001-12-03", ratePct: 3.346 },
  { date: "2001-12-04", ratePct: 3.348 },
  { date: "2001-12-05", ratePct: 3.348 },
  { date: "2001-12-06", ratePct: 3.364 },
  { date: "2001-12-07", ratePct: 3.37 },
  { date: "2001-12-10", ratePct: 3.36 },
  { date: "2001-12-11", ratePct: 3.351 },
  { date: "2001-12-12", ratePct: 3.351 },
  { date: "2001-12-13", ratePct: 3.342 },
  { date: "2001-12-14", ratePct: 3.346 },
  { date: "2001-12-17", ratePct: 3.349 },
  { date: "2001-12-18", ratePct: 3.35 },
  { date: "2001-12-19", ratePct: 3.348 },
  { date: "2001-12-20", ratePct: 3.343 },
  { date: "2001-12-21", ratePct: 3.339 },
  { date: "2001-12-24", ratePct: 3.34 },
  { date: "2001-12-27", ratePct: 3.319 },
  { date: "2001-12-28", ratePct: 3.294 },
  { date: "2002-01-02", ratePct: 3.279 },
  { date: "2002-01-03", ratePct: 3.272 },
  { date: "2002-01-04", ratePct: 3.292 },
  { date: "2002-01-07", ratePct: 3.312 },
  { date: "2002-01-08", ratePct: 3.311 },
  { date: "2002-01-09", ratePct: 3.325 },
  { date: "2002-01-10", ratePct: 3.338 },
  { date: "2002-01-11", ratePct: 3.345 },
  { date: "2002-01-14", ratePct: 3.331 },
  { date: "2002-01-15", ratePct: 3.329 },
  { date: "2002-01-16", ratePct: 3.335 },
  { date: "2002-01-17", ratePct: 3.344 },
  { date: "2002-01-18", ratePct: 3.345 },
  { date: "2002-01-21", ratePct: 3.346 },
  { date: "2002-01-22", ratePct: 3.349 },
  { date: "2002-01-23", ratePct: 3.361 },
  { date: "2002-01-24", ratePct: 3.369 },
  { date: "2002-01-25", ratePct: 3.378 },
  { date: "2002-01-28", ratePct: 3.381 },
  { date: "2002-01-29", ratePct: 3.378 },
  { date: "2002-01-30", ratePct: 3.362 },
  { date: "2002-01-31", ratePct: 3.371 },
  { date: "2002-02-01", ratePct: 3.375 },
  { date: "2002-02-04", ratePct: 3.364 },
  { date: "2002-02-05", ratePct: 3.357 },
  { date: "2002-02-06", ratePct: 3.353 },
  { date: "2002-02-07", ratePct: 3.347 },
  { date: "2002-02-08", ratePct: 3.353 },
  { date: "2002-02-11", ratePct: 3.354 },
  { date: "2002-02-12", ratePct: 3.352 },
  { date: "2002-02-13", ratePct: 3.358 },
  { date: "2002-02-14", ratePct: 3.358 },
  { date: "2002-02-15", ratePct: 3.354 },
  { date: "2002-02-18", ratePct: 3.352 },
  { date: "2002-02-19", ratePct: 3.352 },
  { date: "2002-02-20", ratePct: 3.352 },
  { date: "2002-02-21", ratePct: 3.354 },
  { date: "2002-02-22", ratePct: 3.355 },
  { date: "2002-02-25", ratePct: 3.354 },
  { date: "2002-02-26", ratePct: 3.365 },
  { date: "2002-02-27", ratePct: 3.367 },
  { date: "2002-02-28", ratePct: 3.366 },
  { date: "2002-03-01", ratePct: 3.367 },
  { date: "2002-03-04", ratePct: 3.37 },
  { date: "2002-03-05", ratePct: 3.369 },
  { date: "2002-03-06", ratePct: 3.369 },
  { date: "2002-03-07", ratePct: 3.368 },
  { date: "2002-03-08", ratePct: 3.374 },
  { date: "2002-03-11", ratePct: 3.374 },
  { date: "2002-03-12", ratePct: 3.374 },
  { date: "2002-03-13", ratePct: 3.374 },
  { date: "2002-03-14", ratePct: 3.379 },
  { date: "2002-03-15", ratePct: 3.381 },
  { date: "2002-03-18", ratePct: 3.381 },
  { date: "2002-03-19", ratePct: 3.382 },
  { date: "2002-03-20", ratePct: 3.382 },
  { date: "2002-03-21", ratePct: 3.393 },
  { date: "2002-03-22", ratePct: 3.401 },
  { date: "2002-03-25", ratePct: 3.428 },
  { date: "2002-03-26", ratePct: 3.452 },
  { date: "2002-03-27", ratePct: 3.45 },
  { date: "2002-03-28", ratePct: 3.448 },
  { date: "2002-04-02", ratePct: 3.446 },
  { date: "2002-04-03", ratePct: 3.441 },
  { date: "2002-04-04", ratePct: 3.435 },
  { date: "2002-04-05", ratePct: 3.43 },
  { date: "2002-04-08", ratePct: 3.422 },
  { date: "2002-04-09", ratePct: 3.426 },
  { date: "2002-04-10", ratePct: 3.413 },
  { date: "2002-04-11", ratePct: 3.414 },
  { date: "2002-04-12", ratePct: 3.411 },
  { date: "2002-04-15", ratePct: 3.408 },
  { date: "2002-04-16", ratePct: 3.399 },
  { date: "2002-04-17", ratePct: 3.395 },
  { date: "2002-04-18", ratePct: 3.393 },
  { date: "2002-04-19", ratePct: 3.388 },
  { date: "2002-04-22", ratePct: 3.389 },
  { date: "2002-04-23", ratePct: 3.392 },
  { date: "2002-04-24", ratePct: 3.393 },
  { date: "2002-04-25", ratePct: 3.387 },
  { date: "2002-04-26", ratePct: 3.392 },
  { date: "2002-04-29", ratePct: 3.386 },
  { date: "2002-04-30", ratePct: 3.385 },
  { date: "2002-05-02", ratePct: 3.383 },
  { date: "2002-05-03", ratePct: 3.417 },
  { date: "2002-05-06", ratePct: 3.416 },
  { date: "2002-05-07", ratePct: 3.414 },
  { date: "2002-05-08", ratePct: 3.417 },
  { date: "2002-05-09", ratePct: 3.428 },
  { date: "2002-05-10", ratePct: 3.427 },
  { date: "2002-05-13", ratePct: 3.43 },
  { date: "2002-05-14", ratePct: 3.474 },
  { date: "2002-05-15", ratePct: 3.498 },
  { date: "2002-05-16", ratePct: 3.497 },
  { date: "2002-05-17", ratePct: 3.526 },
  { date: "2002-05-20", ratePct: 3.524 },
  { date: "2002-05-21", ratePct: 3.524 },
  { date: "2002-05-22", ratePct: 3.487 },
  { date: "2002-05-23", ratePct: 3.483 },
  { date: "2002-05-24", ratePct: 3.483 },
  { date: "2002-05-27", ratePct: 3.482 },
  { date: "2002-05-28", ratePct: 3.497 },
  { date: "2002-05-29", ratePct: 3.497 },
  { date: "2002-05-30", ratePct: 3.488 },
  { date: "2002-05-31", ratePct: 3.485 },
  { date: "2002-06-03", ratePct: 3.483 },
  { date: "2002-06-04", ratePct: 3.475 },
  { date: "2002-06-05", ratePct: 3.473 },
  { date: "2002-06-06", ratePct: 3.475 },
  { date: "2002-06-07", ratePct: 3.466 },
  { date: "2002-06-10", ratePct: 3.469 },
  { date: "2002-06-11", ratePct: 3.466 },
  { date: "2002-06-12", ratePct: 3.466 },
  { date: "2002-06-13", ratePct: 3.47 },
  { date: "2002-06-14", ratePct: 3.468 },
  { date: "2002-06-17", ratePct: 3.465 },
  { date: "2002-06-18", ratePct: 3.465 },
  { date: "2002-06-19", ratePct: 3.467 },
  { date: "2002-06-20", ratePct: 3.467 },
  { date: "2002-06-21", ratePct: 3.467 },
  { date: "2002-06-24", ratePct: 3.463 },
  { date: "2002-06-25", ratePct: 3.461 },
  { date: "2002-06-26", ratePct: 3.433 },
  { date: "2002-06-27", ratePct: 3.44 },
  { date: "2002-06-28", ratePct: 3.441 },
  { date: "2002-07-01", ratePct: 3.438 },
  { date: "2002-07-02", ratePct: 3.437 },
  { date: "2002-07-03", ratePct: 3.431 },
  { date: "2002-07-04", ratePct: 3.438 },
  { date: "2002-07-05", ratePct: 3.439 },
  { date: "2002-07-08", ratePct: 3.438 },
  { date: "2002-07-09", ratePct: 3.435 },
  { date: "2002-07-10", ratePct: 3.424 },
  { date: "2002-07-11", ratePct: 3.414 },
  { date: "2002-07-12", ratePct: 3.413 },
  { date: "2002-07-15", ratePct: 3.413 },
  { date: "2002-07-16", ratePct: 3.414 },
  { date: "2002-07-17", ratePct: 3.407 },
  { date: "2002-07-18", ratePct: 3.405 },
  { date: "2002-07-19", ratePct: 3.403 },
  { date: "2002-07-22", ratePct: 3.401 },
  { date: "2002-07-23", ratePct: 3.402 },
  { date: "2002-07-24", ratePct: 3.383 },
  { date: "2002-07-25", ratePct: 3.386 },
  { date: "2002-07-26", ratePct: 3.381 },
  { date: "2002-07-29", ratePct: 3.373 },
  { date: "2002-07-30", ratePct: 3.378 },
  { date: "2002-07-31", ratePct: 3.377 },
  { date: "2002-08-01", ratePct: 3.371 },
  { date: "2002-08-02", ratePct: 3.361 },
  { date: "2002-08-05", ratePct: 3.347 },
  { date: "2002-08-06", ratePct: 3.329 },
  { date: "2002-08-07", ratePct: 3.338 },
  { date: "2002-08-08", ratePct: 3.336 },
  { date: "2002-08-09", ratePct: 3.342 },
  { date: "2002-08-12", ratePct: 3.34 },
  { date: "2002-08-13", ratePct: 3.34 },
  { date: "2002-08-14", ratePct: 3.326 },
  { date: "2002-08-15", ratePct: 3.338 },
  { date: "2002-08-16", ratePct: 3.351 },
  { date: "2002-08-19", ratePct: 3.36 },
  { date: "2002-08-20", ratePct: 3.353 },
  { date: "2002-08-21", ratePct: 3.353 },
  { date: "2002-08-22", ratePct: 3.369 },
  { date: "2002-08-23", ratePct: 3.368 },
  { date: "2002-08-26", ratePct: 3.368 },
  { date: "2002-08-27", ratePct: 3.367 },
  { date: "2002-08-28", ratePct: 3.367 },
  { date: "2002-08-29", ratePct: 3.36 },
  { date: "2002-08-30", ratePct: 3.358 },
  { date: "2002-09-02", ratePct: 3.351 },
  { date: "2002-09-03", ratePct: 3.341 },
  { date: "2002-09-04", ratePct: 3.326 },
  { date: "2002-09-05", ratePct: 3.314 },
  { date: "2002-09-06", ratePct: 3.306 },
  { date: "2002-09-09", ratePct: 3.316 },
  { date: "2002-09-10", ratePct: 3.317 },
  { date: "2002-09-11", ratePct: 3.315 },
  { date: "2002-09-12", ratePct: 3.315 },
  { date: "2002-09-13", ratePct: 3.312 },
  { date: "2002-09-16", ratePct: 3.313 },
  { date: "2002-09-17", ratePct: 3.314 },
  { date: "2002-09-18", ratePct: 3.308 },
  { date: "2002-09-19", ratePct: 3.307 },
  { date: "2002-09-20", ratePct: 3.3 },
  { date: "2002-09-23", ratePct: 3.297 },
  { date: "2002-09-24", ratePct: 3.292 },
  { date: "2002-09-25", ratePct: 3.287 },
  { date: "2002-09-26", ratePct: 3.288 },
  { date: "2002-09-27", ratePct: 3.297 },
  { date: "2002-09-30", ratePct: 3.297 },
  { date: "2002-10-01", ratePct: 3.279 },
  { date: "2002-10-02", ratePct: 3.283 },
  { date: "2002-10-03", ratePct: 3.265 },
  { date: "2002-10-04", ratePct: 3.254 },
  { date: "2002-10-07", ratePct: 3.211 },
  { date: "2002-10-08", ratePct: 3.228 },
  { date: "2002-10-09", ratePct: 3.23 },
  { date: "2002-10-10", ratePct: 3.226 },
  { date: "2002-10-11", ratePct: 3.259 },
  { date: "2002-10-14", ratePct: 3.274 },
  { date: "2002-10-15", ratePct: 3.281 },
  { date: "2002-10-16", ratePct: 3.301 },
  { date: "2002-10-17", ratePct: 3.313 },
  { date: "2002-10-18", ratePct: 3.292 },
  { date: "2002-10-21", ratePct: 3.263 },
  { date: "2002-10-22", ratePct: 3.258 },
  { date: "2002-10-23", ratePct: 3.25 },
  { date: "2002-10-24", ratePct: 3.24 },
  { date: "2002-10-25", ratePct: 3.253 },
  { date: "2002-10-28", ratePct: 3.267 },
  { date: "2002-10-29", ratePct: 3.272 },
  { date: "2002-10-30", ratePct: 3.251 },
  { date: "2002-10-31", ratePct: 3.259 },
  { date: "2002-11-01", ratePct: 3.236 },
  { date: "2002-11-04", ratePct: 3.233 },
  { date: "2002-11-05", ratePct: 3.212 },
  { date: "2002-11-06", ratePct: 3.214 },
  { date: "2002-11-07", ratePct: 3.136 },
  { date: "2002-11-08", ratePct: 3.209 },
  { date: "2002-11-11", ratePct: 3.187 },
  { date: "2002-11-12", ratePct: 3.174 },
  { date: "2002-11-13", ratePct: 3.143 },
  { date: "2002-11-14", ratePct: 3.124 },
  { date: "2002-11-15", ratePct: 3.124 },
  { date: "2002-11-18", ratePct: 3.1 },
  { date: "2002-11-19", ratePct: 3.092 },
  { date: "2002-11-20", ratePct: 3.079 },
  { date: "2002-11-21", ratePct: 3.045 },
  { date: "2002-11-22", ratePct: 3.043 },
  { date: "2002-11-25", ratePct: 3.053 },
  { date: "2002-11-26", ratePct: 3.054 },
  { date: "2002-11-27", ratePct: 3.047 },
  { date: "2002-11-28", ratePct: 3.055 },
  { date: "2002-11-29", ratePct: 3.047 },
  { date: "2002-12-02", ratePct: 3.036 },
  { date: "2002-12-03", ratePct: 3.026 },
  { date: "2002-12-04", ratePct: 2.989 },
  { date: "2002-12-05", ratePct: 2.967 },
  { date: "2002-12-06", ratePct: 2.916 },
  { date: "2002-12-09", ratePct: 2.916 },
  { date: "2002-12-10", ratePct: 2.918 },
  { date: "2002-12-11", ratePct: 2.923 },
  { date: "2002-12-12", ratePct: 2.93 },
  { date: "2002-12-13", ratePct: 2.939 },
  { date: "2002-12-16", ratePct: 2.942 },
  { date: "2002-12-17", ratePct: 2.941 },
  { date: "2002-12-18", ratePct: 2.94 },
  { date: "2002-12-19", ratePct: 2.939 },
  { date: "2002-12-20", ratePct: 2.943 },
  { date: "2002-12-23", ratePct: 2.949 },
  { date: "2002-12-24", ratePct: 2.945 },
  { date: "2002-12-27", ratePct: 2.93 },
  { date: "2002-12-30", ratePct: 2.867 },
  { date: "2002-12-31", ratePct: 2.865 },
  { date: "2003-01-02", ratePct: 2.861 },
  { date: "2003-01-03", ratePct: 2.863 },
  { date: "2003-01-06", ratePct: 2.86 },
  { date: "2003-01-07", ratePct: 2.859 },
  { date: "2003-01-08", ratePct: 2.853 },
  { date: "2003-01-09", ratePct: 2.834 },
  { date: "2003-01-10", ratePct: 2.836 },
  { date: "2003-01-13", ratePct: 2.829 },
  { date: "2003-01-14", ratePct: 2.829 },
  { date: "2003-01-15", ratePct: 2.829 },
  { date: "2003-01-16", ratePct: 2.828 },
  { date: "2003-01-17", ratePct: 2.83 },
  { date: "2003-01-20", ratePct: 2.828 },
  { date: "2003-01-21", ratePct: 2.831 },
  { date: "2003-01-22", ratePct: 2.825 },
  { date: "2003-01-23", ratePct: 2.823 },
  { date: "2003-01-24", ratePct: 2.819 },
  { date: "2003-01-27", ratePct: 2.814 },
  { date: "2003-01-28", ratePct: 2.818 },
  { date: "2003-01-29", ratePct: 2.813 },
  { date: "2003-01-30", ratePct: 2.811 },
  { date: "2003-01-31", ratePct: 2.807 },
  { date: "2003-02-03", ratePct: 2.807 },
  { date: "2003-02-04", ratePct: 2.805 },
  { date: "2003-02-05", ratePct: 2.795 },
  { date: "2003-02-06", ratePct: 2.79 },
  { date: "2003-02-07", ratePct: 2.763 },
  { date: "2003-02-10", ratePct: 2.74 },
  { date: "2003-02-11", ratePct: 2.741 },
  { date: "2003-02-12", ratePct: 2.728 },
  { date: "2003-02-13", ratePct: 2.707 },
  { date: "2003-02-14", ratePct: 2.687 },
  { date: "2003-02-17", ratePct: 2.693 },
  { date: "2003-02-18", ratePct: 2.689 },
  { date: "2003-02-19", ratePct: 2.687 },
  { date: "2003-02-20", ratePct: 2.679 },
  { date: "2003-02-21", ratePct: 2.679 },
  { date: "2003-02-24", ratePct: 2.592 },
  { date: "2003-02-25", ratePct: 2.571 },
  { date: "2003-02-26", ratePct: 2.545 },
  { date: "2003-02-27", ratePct: 2.518 },
  { date: "2003-02-28", ratePct: 2.533 },
  { date: "2003-03-03", ratePct: 2.503 },
  { date: "2003-03-04", ratePct: 2.492 },
  { date: "2003-03-05", ratePct: 2.477 },
  { date: "2003-03-06", ratePct: 2.461 },
  { date: "2003-03-07", ratePct: 2.528 },
  { date: "2003-03-10", ratePct: 2.537 },
  { date: "2003-03-11", ratePct: 2.54 },
  { date: "2003-03-12", ratePct: 2.538 },
  { date: "2003-03-13", ratePct: 2.545 },
  { date: "2003-03-14", ratePct: 2.567 },
  { date: "2003-03-17", ratePct: 2.561 },
  { date: "2003-03-18", ratePct: 2.576 },
  { date: "2003-03-19", ratePct: 2.562 },
  { date: "2003-03-20", ratePct: 2.544 },
  { date: "2003-03-21", ratePct: 2.537 },
  { date: "2003-03-24", ratePct: 2.529 },
  { date: "2003-03-25", ratePct: 2.528 },
  { date: "2003-03-26", ratePct: 2.527 },
  { date: "2003-03-27", ratePct: 2.526 },
  { date: "2003-03-28", ratePct: 2.529 },
  { date: "2003-03-31", ratePct: 2.522 },
  { date: "2003-04-01", ratePct: 2.514 },
  { date: "2003-04-02", ratePct: 2.505 },
  { date: "2003-04-03", ratePct: 2.502 },
  { date: "2003-04-04", ratePct: 2.517 },
  { date: "2003-04-07", ratePct: 2.528 },
  { date: "2003-04-08", ratePct: 2.527 },
  { date: "2003-04-09", ratePct: 2.523 },
  { date: "2003-04-10", ratePct: 2.519 },
  { date: "2003-04-11", ratePct: 2.522 },
  { date: "2003-04-14", ratePct: 2.545 },
  { date: "2003-04-15", ratePct: 2.555 },
  { date: "2003-04-16", ratePct: 2.561 },
  { date: "2003-04-17", ratePct: 2.556 },
  { date: "2003-04-22", ratePct: 2.552 },
  { date: "2003-04-23", ratePct: 2.552 },
  { date: "2003-04-24", ratePct: 2.552 },
  { date: "2003-04-25", ratePct: 2.543 },
  { date: "2003-04-28", ratePct: 2.533 },
  { date: "2003-04-29", ratePct: 2.531 },
  { date: "2003-04-30", ratePct: 2.53 },
  { date: "2003-05-02", ratePct: 2.504 },
  { date: "2003-05-05", ratePct: 2.503 },
  { date: "2003-05-06", ratePct: 2.502 },
  { date: "2003-05-07", ratePct: 2.476 },
  { date: "2003-05-08", ratePct: 2.455 },
  { date: "2003-05-09", ratePct: 2.473 },
  { date: "2003-05-12", ratePct: 2.467 },
  { date: "2003-05-13", ratePct: 2.464 },
  { date: "2003-05-14", ratePct: 2.43 },
  { date: "2003-05-15", ratePct: 2.422 },
  { date: "2003-05-16", ratePct: 2.408 },
  { date: "2003-05-19", ratePct: 2.381 },
  { date: "2003-05-20", ratePct: 2.374 },
  { date: "2003-05-21", ratePct: 2.365 },
  { date: "2003-05-22", ratePct: 2.358 },
  { date: "2003-05-23", ratePct: 2.345 },
  { date: "2003-05-26", ratePct: 2.321 },
  { date: "2003-05-27", ratePct: 2.305 },
  { date: "2003-05-28", ratePct: 2.294 },
  { date: "2003-05-29", ratePct: 2.292 },
  { date: "2003-05-30", ratePct: 2.272 },
  { date: "2003-06-02", ratePct: 2.258 },
  { date: "2003-06-03", ratePct: 2.235 },
  { date: "2003-06-04", ratePct: 2.185 },
  { date: "2003-06-05", ratePct: 2.171 },
  { date: "2003-06-06", ratePct: 2.147 },
  { date: "2003-06-09", ratePct: 2.134 },
  { date: "2003-06-10", ratePct: 2.133 },
  { date: "2003-06-11", ratePct: 2.123 },
  { date: "2003-06-12", ratePct: 2.124 },
  { date: "2003-06-13", ratePct: 2.125 },
  { date: "2003-06-16", ratePct: 2.129 },
  { date: "2003-06-17", ratePct: 2.137 },
  { date: "2003-06-18", ratePct: 2.141 },
  { date: "2003-06-19", ratePct: 2.142 },
  { date: "2003-06-20", ratePct: 2.142 },
  { date: "2003-06-23", ratePct: 2.143 },
  { date: "2003-06-24", ratePct: 2.146 },
  { date: "2003-06-25", ratePct: 2.139 },
  { date: "2003-06-26", ratePct: 2.14 },
  { date: "2003-06-27", ratePct: 2.148 },
  { date: "2003-06-30", ratePct: 2.147 },
  { date: "2003-07-01", ratePct: 2.145 },
  { date: "2003-07-02", ratePct: 2.142 },
  { date: "2003-07-03", ratePct: 2.142 },
  { date: "2003-07-04", ratePct: 2.14 },
  { date: "2003-07-07", ratePct: 2.136 },
  { date: "2003-07-08", ratePct: 2.134 },
  { date: "2003-07-09", ratePct: 2.131 },
  { date: "2003-07-10", ratePct: 2.135 },
  { date: "2003-07-11", ratePct: 2.129 },
  { date: "2003-07-14", ratePct: 2.129 },
  { date: "2003-07-15", ratePct: 2.129 },
  { date: "2003-07-16", ratePct: 2.133 },
  { date: "2003-07-17", ratePct: 2.13 },
  { date: "2003-07-18", ratePct: 2.128 },
  { date: "2003-07-21", ratePct: 2.127 },
  { date: "2003-07-22", ratePct: 2.133 },
  { date: "2003-07-23", ratePct: 2.126 },
  { date: "2003-07-24", ratePct: 2.122 },
  { date: "2003-07-25", ratePct: 2.12 },
  { date: "2003-07-28", ratePct: 2.119 },
  { date: "2003-07-29", ratePct: 2.119 },
  { date: "2003-07-30", ratePct: 2.121 },
  { date: "2003-07-31", ratePct: 2.121 },
  { date: "2003-08-01", ratePct: 2.129 },
  { date: "2003-08-04", ratePct: 2.139 },
  { date: "2003-08-05", ratePct: 2.138 },
  { date: "2003-08-06", ratePct: 2.136 },
  { date: "2003-08-07", ratePct: 2.136 },
  { date: "2003-08-08", ratePct: 2.135 },
  { date: "2003-08-11", ratePct: 2.135 },
  { date: "2003-08-12", ratePct: 2.136 },
  { date: "2003-08-13", ratePct: 2.135 },
  { date: "2003-08-14", ratePct: 2.138 },
  { date: "2003-08-15", ratePct: 2.138 },
  { date: "2003-08-18", ratePct: 2.137 },
  { date: "2003-08-19", ratePct: 2.139 },
  { date: "2003-08-20", ratePct: 2.137 },
  { date: "2003-08-21", ratePct: 2.141 },
  { date: "2003-08-22", ratePct: 2.147 },
  { date: "2003-08-25", ratePct: 2.147 },
  { date: "2003-08-26", ratePct: 2.149 },
  { date: "2003-08-27", ratePct: 2.154 },
  { date: "2003-08-28", ratePct: 2.151 },
  { date: "2003-08-29", ratePct: 2.152 },
  { date: "2003-09-01", ratePct: 2.151 },
  { date: "2003-09-02", ratePct: 2.153 },
  { date: "2003-09-03", ratePct: 2.16 },
  { date: "2003-09-04", ratePct: 2.161 },
  { date: "2003-09-05", ratePct: 2.159 },
  { date: "2003-09-08", ratePct: 2.157 },
  { date: "2003-09-09", ratePct: 2.153 },
  { date: "2003-09-10", ratePct: 2.152 },
  { date: "2003-09-11", ratePct: 2.152 },
  { date: "2003-09-12", ratePct: 2.152 },
  { date: "2003-09-15", ratePct: 2.151 },
  { date: "2003-09-16", ratePct: 2.15 },
  { date: "2003-09-17", ratePct: 2.151 },
  { date: "2003-09-18", ratePct: 2.15 },
  { date: "2003-09-19", ratePct: 2.149 },
  { date: "2003-09-22", ratePct: 2.141 },
  { date: "2003-09-23", ratePct: 2.138 },
  { date: "2003-09-24", ratePct: 2.135 },
  { date: "2003-09-25", ratePct: 2.133 },
  { date: "2003-09-26", ratePct: 2.132 },
  { date: "2003-09-29", ratePct: 2.133 },
  { date: "2003-09-30", ratePct: 2.128 },
  { date: "2003-10-01", ratePct: 2.121 },
  { date: "2003-10-02", ratePct: 2.122 },
  { date: "2003-10-03", ratePct: 2.127 },
  { date: "2003-10-06", ratePct: 2.145 },
  { date: "2003-10-07", ratePct: 2.138 },
  { date: "2003-10-08", ratePct: 2.134 },
  { date: "2003-10-09", ratePct: 2.133 },
  { date: "2003-10-10", ratePct: 2.135 },
  { date: "2003-10-13", ratePct: 2.136 },
  { date: "2003-10-14", ratePct: 2.138 },
  { date: "2003-10-15", ratePct: 2.142 },
  { date: "2003-10-16", ratePct: 2.14 },
  { date: "2003-10-17", ratePct: 2.152 },
  { date: "2003-10-20", ratePct: 2.152 },
  { date: "2003-10-21", ratePct: 2.151 },
  { date: "2003-10-22", ratePct: 2.152 },
  { date: "2003-10-23", ratePct: 2.15 },
  { date: "2003-10-24", ratePct: 2.151 },
  { date: "2003-10-27", ratePct: 2.156 },
  { date: "2003-10-28", ratePct: 2.154 },
  { date: "2003-10-29", ratePct: 2.153 },
  { date: "2003-10-30", ratePct: 2.159 },
  { date: "2003-10-31", ratePct: 2.161 },
  { date: "2003-11-03", ratePct: 2.163 },
  { date: "2003-11-04", ratePct: 2.163 },
  { date: "2003-11-05", ratePct: 2.164 },
  { date: "2003-11-06", ratePct: 2.165 },
  { date: "2003-11-07", ratePct: 2.169 },
  { date: "2003-11-10", ratePct: 2.171 },
  { date: "2003-11-11", ratePct: 2.171 },
  { date: "2003-11-12", ratePct: 2.171 },
  { date: "2003-11-13", ratePct: 2.171 },
  { date: "2003-11-14", ratePct: 2.161 },
  { date: "2003-11-17", ratePct: 2.154 },
  { date: "2003-11-18", ratePct: 2.153 },
  { date: "2003-11-19", ratePct: 2.147 },
  { date: "2003-11-20", ratePct: 2.151 },
  { date: "2003-11-21", ratePct: 2.147 },
  { date: "2003-11-24", ratePct: 2.146 },
  { date: "2003-11-25", ratePct: 2.152 },
  { date: "2003-11-26", ratePct: 2.153 },
  { date: "2003-11-27", ratePct: 2.155 },
  { date: "2003-11-28", ratePct: 2.154 },
  { date: "2003-12-01", ratePct: 2.16 },
  { date: "2003-12-02", ratePct: 2.159 },
  { date: "2003-12-03", ratePct: 2.159 },
  { date: "2003-12-04", ratePct: 2.159 },
  { date: "2003-12-05", ratePct: 2.154 },
  { date: "2003-12-08", ratePct: 2.152 },
  { date: "2003-12-09", ratePct: 2.149 },
  { date: "2003-12-10", ratePct: 2.149 },
  { date: "2003-12-11", ratePct: 2.15 },
  { date: "2003-12-12", ratePct: 2.148 },
  { date: "2003-12-15", ratePct: 2.146 },
  { date: "2003-12-16", ratePct: 2.145 },
  { date: "2003-12-17", ratePct: 2.144 },
  { date: "2003-12-18", ratePct: 2.141 },
  { date: "2003-12-19", ratePct: 2.142 },
  { date: "2003-12-22", ratePct: 2.14 },
  { date: "2003-12-23", ratePct: 2.142 },
  { date: "2003-12-24", ratePct: 2.142 },
  { date: "2003-12-29", ratePct: 2.142 },
  { date: "2003-12-30", ratePct: 2.126 },
  { date: "2003-12-31", ratePct: 2.124 },
  { date: "2004-01-02", ratePct: 2.12 },
  { date: "2004-01-05", ratePct: 2.114 },
  { date: "2004-01-06", ratePct: 2.113 },
  { date: "2004-01-07", ratePct: 2.104 },
  { date: "2004-01-08", ratePct: 2.103 },
  { date: "2004-01-09", ratePct: 2.102 },
  { date: "2004-01-12", ratePct: 2.095 },
  { date: "2004-01-13", ratePct: 2.092 },
  { date: "2004-01-14", ratePct: 2.086 },
  { date: "2004-01-15", ratePct: 2.08 },
  { date: "2004-01-16", ratePct: 2.076 },
  { date: "2004-01-19", ratePct: 2.077 },
  { date: "2004-01-20", ratePct: 2.08 },
  { date: "2004-01-21", ratePct: 2.075 },
  { date: "2004-01-22", ratePct: 2.075 },
  { date: "2004-01-23", ratePct: 2.073 },
  { date: "2004-01-26", ratePct: 2.074 },
  { date: "2004-01-27", ratePct: 2.078 },
  { date: "2004-01-28", ratePct: 2.078 },
  { date: "2004-01-29", ratePct: 2.091 },
  { date: "2004-01-30", ratePct: 2.093 },
  { date: "2004-02-02", ratePct: 2.091 },
  { date: "2004-02-03", ratePct: 2.089 },
  { date: "2004-02-04", ratePct: 2.085 },
  { date: "2004-02-05", ratePct: 2.083 },
  { date: "2004-02-06", ratePct: 2.08 },
  { date: "2004-02-09", ratePct: 2.074 },
  { date: "2004-02-10", ratePct: 2.07 },
  { date: "2004-02-11", ratePct: 2.074 },
  { date: "2004-02-12", ratePct: 2.067 },
  { date: "2004-02-13", ratePct: 2.067 },
  { date: "2004-02-16", ratePct: 2.065 },
  { date: "2004-02-17", ratePct: 2.066 },
  { date: "2004-02-18", ratePct: 2.055 },
  { date: "2004-02-19", ratePct: 2.06 },
  { date: "2004-02-20", ratePct: 2.061 },
  { date: "2004-02-23", ratePct: 2.073 },
  { date: "2004-02-24", ratePct: 2.076 },
  { date: "2004-02-25", ratePct: 2.07 },
  { date: "2004-02-26", ratePct: 2.053 },
  { date: "2004-02-27", ratePct: 2.052 },
  { date: "2004-03-01", ratePct: 2.047 },
  { date: "2004-03-02", ratePct: 2.052 },
  { date: "2004-03-03", ratePct: 2.057 },
  { date: "2004-03-04", ratePct: 2.054 },
  { date: "2004-03-05", ratePct: 2.061 },
  { date: "2004-03-08", ratePct: 2.052 },
  { date: "2004-03-09", ratePct: 2.052 },
  { date: "2004-03-10", ratePct: 2.054 },
  { date: "2004-03-11", ratePct: 2.058 },
  { date: "2004-03-12", ratePct: 2.053 },
  { date: "2004-03-15", ratePct: 2.052 },
  { date: "2004-03-16", ratePct: 2.053 },
  { date: "2004-03-17", ratePct: 2.052 },
  { date: "2004-03-18", ratePct: 2.04 },
  { date: "2004-03-19", ratePct: 2.034 },
  { date: "2004-03-22", ratePct: 2.025 },
  { date: "2004-03-23", ratePct: 2.021 },
  { date: "2004-03-24", ratePct: 2.017 },
  { date: "2004-03-25", ratePct: 1.989 },
  { date: "2004-03-26", ratePct: 1.967 },
  { date: "2004-03-29", ratePct: 1.957 },
  { date: "2004-03-30", ratePct: 1.958 },
  { date: "2004-03-31", ratePct: 1.958 },
  { date: "2004-04-01", ratePct: 1.96 },
  { date: "2004-04-02", ratePct: 2.025 },
  { date: "2004-04-05", ratePct: 2.054 },
  { date: "2004-04-06", ratePct: 2.051 },
  { date: "2004-04-07", ratePct: 2.038 },
  { date: "2004-04-08", ratePct: 2.036 },
  { date: "2004-04-13", ratePct: 2.038 },
  { date: "2004-04-14", ratePct: 2.048 },
  { date: "2004-04-15", ratePct: 2.051 },
  { date: "2004-04-16", ratePct: 2.053 },
  { date: "2004-04-19", ratePct: 2.052 },
  { date: "2004-04-20", ratePct: 2.052 },
  { date: "2004-04-21", ratePct: 2.066 },
  { date: "2004-04-22", ratePct: 2.059 },
  { date: "2004-04-23", ratePct: 2.056 },
  { date: "2004-04-26", ratePct: 2.064 },
  { date: "2004-04-27", ratePct: 2.063 },
  { date: "2004-04-28", ratePct: 2.064 },
  { date: "2004-04-29", ratePct: 2.072 },
  { date: "2004-04-30", ratePct: 2.073 },
  { date: "2004-05-03", ratePct: 2.072 },
  { date: "2004-05-04", ratePct: 2.073 },
  { date: "2004-05-05", ratePct: 2.072 },
  { date: "2004-05-06", ratePct: 2.074 },
  { date: "2004-05-07", ratePct: 2.081 },
  { date: "2004-05-10", ratePct: 2.086 },
  { date: "2004-05-11", ratePct: 2.085 },
  { date: "2004-05-12", ratePct: 2.084 },
  { date: "2004-05-13", ratePct: 2.093 },
  { date: "2004-05-14", ratePct: 2.094 },
  { date: "2004-05-17", ratePct: 2.09 },
  { date: "2004-05-18", ratePct: 2.091 },
  { date: "2004-05-19", ratePct: 2.091 },
  { date: "2004-05-20", ratePct: 2.091 },
  { date: "2004-05-21", ratePct: 2.09 },
  { date: "2004-05-24", ratePct: 2.093 },
  { date: "2004-05-25", ratePct: 2.092 },
  { date: "2004-05-26", ratePct: 2.09 },
  { date: "2004-05-27", ratePct: 2.087 },
  { date: "2004-05-28", ratePct: 2.087 },
  { date: "2004-05-31", ratePct: 2.087 },
  { date: "2004-06-01", ratePct: 2.087 },
  { date: "2004-06-02", ratePct: 2.089 },
  { date: "2004-06-03", ratePct: 2.096 },
  { date: "2004-06-04", ratePct: 2.101 },
  { date: "2004-06-07", ratePct: 2.102 },
  { date: "2004-06-08", ratePct: 2.102 },
  { date: "2004-06-09", ratePct: 2.103 },
  { date: "2004-06-10", ratePct: 2.109 },
  { date: "2004-06-11", ratePct: 2.112 },
  { date: "2004-06-14", ratePct: 2.115 },
  { date: "2004-06-15", ratePct: 2.121 },
  { date: "2004-06-16", ratePct: 2.119 },
  { date: "2004-06-17", ratePct: 2.122 },
  { date: "2004-06-18", ratePct: 2.123 },
  { date: "2004-06-21", ratePct: 2.124 },
  { date: "2004-06-22", ratePct: 2.123 },
  { date: "2004-06-23", ratePct: 2.123 },
  { date: "2004-06-24", ratePct: 2.122 },
  { date: "2004-06-25", ratePct: 2.122 },
  { date: "2004-06-28", ratePct: 2.121 },
  { date: "2004-06-29", ratePct: 2.123 },
  { date: "2004-06-30", ratePct: 2.12 },
  { date: "2004-07-01", ratePct: 2.116 },
  { date: "2004-07-02", ratePct: 2.116 },
  { date: "2004-07-05", ratePct: 2.114 },
  { date: "2004-07-06", ratePct: 2.115 },
  { date: "2004-07-07", ratePct: 2.114 },
  { date: "2004-07-08", ratePct: 2.114 },
  { date: "2004-07-09", ratePct: 2.114 },
  { date: "2004-07-12", ratePct: 2.114 },
  { date: "2004-07-13", ratePct: 2.115 },
  { date: "2004-07-14", ratePct: 2.115 },
  { date: "2004-07-15", ratePct: 2.115 },
  { date: "2004-07-16", ratePct: 2.115 },
  { date: "2004-07-19", ratePct: 2.115 },
  { date: "2004-07-20", ratePct: 2.115 },
  { date: "2004-07-21", ratePct: 2.12 },
  { date: "2004-07-22", ratePct: 2.12 },
  { date: "2004-07-23", ratePct: 2.12 },
  { date: "2004-07-26", ratePct: 2.117 },
  { date: "2004-07-27", ratePct: 2.117 },
  { date: "2004-07-28", ratePct: 2.118 },
  { date: "2004-07-29", ratePct: 2.118 },
  { date: "2004-07-30", ratePct: 2.116 },
  { date: "2004-08-02", ratePct: 2.115 },
  { date: "2004-08-03", ratePct: 2.116 },
  { date: "2004-08-04", ratePct: 2.116 },
  { date: "2004-08-05", ratePct: 2.116 },
  { date: "2004-08-06", ratePct: 2.115 },
  { date: "2004-08-09", ratePct: 2.112 },
  { date: "2004-08-10", ratePct: 2.112 },
  { date: "2004-08-11", ratePct: 2.113 },
  { date: "2004-08-12", ratePct: 2.114 },
  { date: "2004-08-13", ratePct: 2.112 },
  { date: "2004-08-16", ratePct: 2.113 },
  { date: "2004-08-17", ratePct: 2.113 },
  { date: "2004-08-18", ratePct: 2.114 },
  { date: "2004-08-19", ratePct: 2.114 },
  { date: "2004-08-20", ratePct: 2.114 },
  { date: "2004-08-23", ratePct: 2.114 },
  { date: "2004-08-24", ratePct: 2.115 },
  { date: "2004-08-25", ratePct: 2.115 },
  { date: "2004-08-26", ratePct: 2.116 },
  { date: "2004-08-27", ratePct: 2.115 },
  { date: "2004-08-30", ratePct: 2.115 },
  { date: "2004-08-31", ratePct: 2.115 },
  { date: "2004-09-01", ratePct: 2.115 },
  { date: "2004-09-02", ratePct: 2.111 },
  { date: "2004-09-03", ratePct: 2.114 },
  { date: "2004-09-06", ratePct: 2.116 },
  { date: "2004-09-07", ratePct: 2.116 },
  { date: "2004-09-08", ratePct: 2.115 },
  { date: "2004-09-09", ratePct: 2.116 },
  { date: "2004-09-10", ratePct: 2.116 },
  { date: "2004-09-13", ratePct: 2.116 },
  { date: "2004-09-14", ratePct: 2.116 },
  { date: "2004-09-15", ratePct: 2.116 },
  { date: "2004-09-16", ratePct: 2.116 },
  { date: "2004-09-17", ratePct: 2.116 },
  { date: "2004-09-20", ratePct: 2.115 },
  { date: "2004-09-21", ratePct: 2.116 },
  { date: "2004-09-22", ratePct: 2.116 },
  { date: "2004-09-23", ratePct: 2.116 },
  { date: "2004-09-24", ratePct: 2.116 },
  { date: "2004-09-27", ratePct: 2.116 },
  { date: "2004-09-28", ratePct: 2.116 },
  { date: "2004-09-29", ratePct: 2.149 },
  { date: "2004-09-30", ratePct: 2.15 },
  { date: "2004-10-01", ratePct: 2.148 },
  { date: "2004-10-04", ratePct: 2.149 },
  { date: "2004-10-05", ratePct: 2.149 },
  { date: "2004-10-06", ratePct: 2.15 },
  { date: "2004-10-07", ratePct: 2.15 },
  { date: "2004-10-08", ratePct: 2.149 },
  { date: "2004-10-11", ratePct: 2.146 },
  { date: "2004-10-12", ratePct: 2.146 },
  { date: "2004-10-13", ratePct: 2.148 },
  { date: "2004-10-14", ratePct: 2.147 },
  { date: "2004-10-15", ratePct: 2.146 },
  { date: "2004-10-18", ratePct: 2.145 },
  { date: "2004-10-19", ratePct: 2.144 },
  { date: "2004-10-20", ratePct: 2.144 },
  { date: "2004-10-21", ratePct: 2.145 },
  { date: "2004-10-22", ratePct: 2.145 },
  { date: "2004-10-25", ratePct: 2.145 },
  { date: "2004-10-26", ratePct: 2.147 },
  { date: "2004-10-27", ratePct: 2.146 },
  { date: "2004-10-28", ratePct: 2.152 },
  { date: "2004-10-29", ratePct: 2.153 },
  { date: "2004-11-01", ratePct: 2.152 },
  { date: "2004-11-02", ratePct: 2.153 },
  { date: "2004-11-03", ratePct: 2.158 },
  { date: "2004-11-04", ratePct: 2.161 },
  { date: "2004-11-05", ratePct: 2.161 },
  { date: "2004-11-08", ratePct: 2.169 },
  { date: "2004-11-09", ratePct: 2.17 },
  { date: "2004-11-10", ratePct: 2.171 },
  { date: "2004-11-11", ratePct: 2.172 },
  { date: "2004-11-12", ratePct: 2.172 },
  { date: "2004-11-15", ratePct: 2.173 },
  { date: "2004-11-16", ratePct: 2.174 },
  { date: "2004-11-17", ratePct: 2.174 },
  { date: "2004-11-18", ratePct: 2.176 },
  { date: "2004-11-19", ratePct: 2.176 },
  { date: "2004-11-22", ratePct: 2.177 },
  { date: "2004-11-23", ratePct: 2.177 },
  { date: "2004-11-24", ratePct: 2.176 },
  { date: "2004-11-25", ratePct: 2.176 },
  { date: "2004-11-26", ratePct: 2.177 },
  { date: "2004-11-29", ratePct: 2.176 },
  { date: "2004-11-30", ratePct: 2.176 },
  { date: "2004-12-01", ratePct: 2.174 },
  { date: "2004-12-02", ratePct: 2.172 },
  { date: "2004-12-03", ratePct: 2.174 },
  { date: "2004-12-06", ratePct: 2.17 },
  { date: "2004-12-07", ratePct: 2.171 },
  { date: "2004-12-08", ratePct: 2.17 },
  { date: "2004-12-09", ratePct: 2.17 },
  { date: "2004-12-10", ratePct: 2.173 },
  { date: "2004-12-13", ratePct: 2.174 },
  { date: "2004-12-14", ratePct: 2.175 },
  { date: "2004-12-15", ratePct: 2.175 },
  { date: "2004-12-16", ratePct: 2.175 },
  { date: "2004-12-17", ratePct: 2.175 },
  { date: "2004-12-20", ratePct: 2.177 },
  { date: "2004-12-21", ratePct: 2.176 },
  { date: "2004-12-22", ratePct: 2.176 },
  { date: "2004-12-23", ratePct: 2.178 },
  { date: "2004-12-24", ratePct: 2.178 },
  { date: "2004-12-27", ratePct: 2.178 },
  { date: "2004-12-28", ratePct: 2.179 },
  { date: "2004-12-29", ratePct: 2.18 },
  { date: "2004-12-30", ratePct: 2.158 },
  { date: "2004-12-31", ratePct: 2.155 },
  { date: "2005-01-03", ratePct: 2.154 },
  { date: "2005-01-04", ratePct: 2.151 },
  { date: "2005-01-05", ratePct: 2.151 },
  { date: "2005-01-06", ratePct: 2.15 },
  { date: "2005-01-07", ratePct: 2.146 },
  { date: "2005-01-10", ratePct: 2.146 },
  { date: "2005-01-11", ratePct: 2.146 },
  { date: "2005-01-12", ratePct: 2.145 },
  { date: "2005-01-13", ratePct: 2.144 },
  { date: "2005-01-14", ratePct: 2.144 },
  { date: "2005-01-17", ratePct: 2.143 },
  { date: "2005-01-18", ratePct: 2.144 },
  { date: "2005-01-19", ratePct: 2.143 },
  { date: "2005-01-20", ratePct: 2.144 },
  { date: "2005-01-21", ratePct: 2.143 },
  { date: "2005-01-24", ratePct: 2.143 },
  { date: "2005-01-25", ratePct: 2.144 },
  { date: "2005-01-26", ratePct: 2.143 },
  { date: "2005-01-27", ratePct: 2.144 },
  { date: "2005-01-28", ratePct: 2.144 },
  { date: "2005-01-31", ratePct: 2.142 },
  { date: "2005-02-01", ratePct: 2.142 },
  { date: "2005-02-02", ratePct: 2.141 },
  { date: "2005-02-03", ratePct: 2.144 },
  { date: "2005-02-04", ratePct: 2.142 },
  { date: "2005-02-07", ratePct: 2.142 },
  { date: "2005-02-08", ratePct: 2.141 },
  { date: "2005-02-09", ratePct: 2.142 },
  { date: "2005-02-10", ratePct: 2.14 },
  { date: "2005-02-11", ratePct: 2.14 },
  { date: "2005-02-14", ratePct: 2.139 },
  { date: "2005-02-15", ratePct: 2.136 },
  { date: "2005-02-16", ratePct: 2.135 },
  { date: "2005-02-17", ratePct: 2.135 },
  { date: "2005-02-18", ratePct: 2.135 },
  { date: "2005-02-21", ratePct: 2.135 },
  { date: "2005-02-22", ratePct: 2.135 },
  { date: "2005-02-23", ratePct: 2.135 },
  { date: "2005-02-24", ratePct: 2.136 },
  { date: "2005-02-25", ratePct: 2.136 },
  { date: "2005-02-28", ratePct: 2.136 },
  { date: "2005-03-01", ratePct: 2.136 },
  { date: "2005-03-02", ratePct: 2.135 },
  { date: "2005-03-03", ratePct: 2.135 },
  { date: "2005-03-04", ratePct: 2.134 },
  { date: "2005-03-07", ratePct: 2.133 },
  { date: "2005-03-08", ratePct: 2.134 },
  { date: "2005-03-09", ratePct: 2.134 },
  { date: "2005-03-10", ratePct: 2.134 },
  { date: "2005-03-11", ratePct: 2.135 },
  { date: "2005-03-14", ratePct: 2.135 },
  { date: "2005-03-15", ratePct: 2.135 },
  { date: "2005-03-16", ratePct: 2.135 },
  { date: "2005-03-17", ratePct: 2.136 },
  { date: "2005-03-18", ratePct: 2.135 },
  { date: "2005-03-21", ratePct: 2.135 },
  { date: "2005-03-22", ratePct: 2.138 },
  { date: "2005-03-23", ratePct: 2.142 },
  { date: "2005-03-24", ratePct: 2.143 },
  { date: "2005-03-29", ratePct: 2.144 },
  { date: "2005-03-30", ratePct: 2.146 },
  { date: "2005-03-31", ratePct: 2.147 },
  { date: "2005-04-01", ratePct: 2.147 },
  { date: "2005-04-04", ratePct: 2.147 },
  { date: "2005-04-05", ratePct: 2.147 },
  { date: "2005-04-06", ratePct: 2.148 },
  { date: "2005-04-07", ratePct: 2.146 },
  { date: "2005-04-08", ratePct: 2.144 },
  { date: "2005-04-11", ratePct: 2.142 },
  { date: "2005-04-12", ratePct: 2.14 },
  { date: "2005-04-13", ratePct: 2.138 },
  { date: "2005-04-14", ratePct: 2.137 },
  { date: "2005-04-15", ratePct: 2.136 },
  { date: "2005-04-18", ratePct: 2.134 },
  { date: "2005-04-19", ratePct: 2.134 },
  { date: "2005-04-20", ratePct: 2.135 },
  { date: "2005-04-21", ratePct: 2.133 },
  { date: "2005-04-22", ratePct: 2.133 },
  { date: "2005-04-25", ratePct: 2.129 },
  { date: "2005-04-26", ratePct: 2.129 },
  { date: "2005-04-27", ratePct: 2.129 },
  { date: "2005-04-28", ratePct: 2.128 },
  { date: "2005-04-29", ratePct: 2.126 },
  { date: "2005-05-02", ratePct: 2.126 },
  { date: "2005-05-03", ratePct: 2.126 },
  { date: "2005-05-04", ratePct: 2.125 },
  { date: "2005-05-05", ratePct: 2.126 },
  { date: "2005-05-06", ratePct: 2.125 },
  { date: "2005-05-09", ratePct: 2.128 },
  { date: "2005-05-10", ratePct: 2.125 },
  { date: "2005-05-11", ratePct: 2.125 },
  { date: "2005-05-12", ratePct: 2.126 },
  { date: "2005-05-13", ratePct: 2.125 },
  { date: "2005-05-16", ratePct: 2.126 },
  { date: "2005-05-17", ratePct: 2.126 },
  { date: "2005-05-18", ratePct: 2.126 },
  { date: "2005-05-19", ratePct: 2.125 },
  { date: "2005-05-20", ratePct: 2.126 },
  { date: "2005-05-23", ratePct: 2.126 },
  { date: "2005-05-24", ratePct: 2.126 },
  { date: "2005-05-25", ratePct: 2.125 },
  { date: "2005-05-26", ratePct: 2.125 },
  { date: "2005-05-27", ratePct: 2.125 },
  { date: "2005-05-30", ratePct: 2.124 },
  { date: "2005-05-31", ratePct: 2.127 },
  { date: "2005-06-01", ratePct: 2.124 },
  { date: "2005-06-02", ratePct: 2.115 },
  { date: "2005-06-03", ratePct: 2.115 },
  { date: "2005-06-06", ratePct: 2.116 },
  { date: "2005-06-07", ratePct: 2.116 },
  { date: "2005-06-08", ratePct: 2.113 },
  { date: "2005-06-09", ratePct: 2.113 },
  { date: "2005-06-10", ratePct: 2.114 },
  { date: "2005-06-13", ratePct: 2.111 },
  { date: "2005-06-14", ratePct: 2.111 },
  { date: "2005-06-15", ratePct: 2.112 },
  { date: "2005-06-16", ratePct: 2.116 },
  { date: "2005-06-17", ratePct: 2.116 },
  { date: "2005-06-20", ratePct: 2.116 },
  { date: "2005-06-21", ratePct: 2.108 },
  { date: "2005-06-22", ratePct: 2.104 },
  { date: "2005-06-23", ratePct: 2.102 },
  { date: "2005-06-24", ratePct: 2.104 },
  { date: "2005-06-27", ratePct: 2.104 },
  { date: "2005-06-28", ratePct: 2.103 },
  { date: "2005-06-29", ratePct: 2.104 },
  { date: "2005-06-30", ratePct: 2.106 },
  { date: "2005-07-01", ratePct: 2.107 },
  { date: "2005-07-04", ratePct: 2.111 },
  { date: "2005-07-05", ratePct: 2.114 },
  { date: "2005-07-06", ratePct: 2.115 },
  { date: "2005-07-07", ratePct: 2.114 },
  { date: "2005-07-08", ratePct: 2.114 },
  { date: "2005-07-11", ratePct: 2.115 },
  { date: "2005-07-12", ratePct: 2.117 },
  { date: "2005-07-13", ratePct: 2.119 },
  { date: "2005-07-14", ratePct: 2.119 },
  { date: "2005-07-15", ratePct: 2.122 },
  { date: "2005-07-18", ratePct: 2.123 },
  { date: "2005-07-19", ratePct: 2.123 },
  { date: "2005-07-20", ratePct: 2.124 },
  { date: "2005-07-21", ratePct: 2.123 },
  { date: "2005-07-22", ratePct: 2.124 },
  { date: "2005-07-25", ratePct: 2.124 },
  { date: "2005-07-26", ratePct: 2.125 },
  { date: "2005-07-27", ratePct: 2.126 },
  { date: "2005-07-28", ratePct: 2.124 },
  { date: "2005-07-29", ratePct: 2.125 },
  { date: "2005-08-01", ratePct: 2.126 },
  { date: "2005-08-02", ratePct: 2.127 },
  { date: "2005-08-03", ratePct: 2.131 },
  { date: "2005-08-04", ratePct: 2.131 },
  { date: "2005-08-05", ratePct: 2.132 },
  { date: "2005-08-08", ratePct: 2.133 },
  { date: "2005-08-09", ratePct: 2.134 },
  { date: "2005-08-10", ratePct: 2.134 },
  { date: "2005-08-11", ratePct: 2.134 },
  { date: "2005-08-12", ratePct: 2.134 },
  { date: "2005-08-15", ratePct: 2.135 },
  { date: "2005-08-16", ratePct: 2.135 },
  { date: "2005-08-17", ratePct: 2.134 },
  { date: "2005-08-18", ratePct: 2.132 },
  { date: "2005-08-19", ratePct: 2.132 },
  { date: "2005-08-22", ratePct: 2.132 },
  { date: "2005-08-23", ratePct: 2.133 },
  { date: "2005-08-24", ratePct: 2.132 },
  { date: "2005-08-25", ratePct: 2.133 },
  { date: "2005-08-26", ratePct: 2.132 },
  { date: "2005-08-29", ratePct: 2.133 },
  { date: "2005-08-30", ratePct: 2.134 },
  { date: "2005-08-31", ratePct: 2.134 },
  { date: "2005-09-01", ratePct: 2.133 },
  { date: "2005-09-02", ratePct: 2.13 },
  { date: "2005-09-05", ratePct: 2.131 },
  { date: "2005-09-06", ratePct: 2.132 },
  { date: "2005-09-07", ratePct: 2.134 },
  { date: "2005-09-08", ratePct: 2.134 },
  { date: "2005-09-09", ratePct: 2.134 },
  { date: "2005-09-12", ratePct: 2.134 },
  { date: "2005-09-13", ratePct: 2.136 },
  { date: "2005-09-14", ratePct: 2.135 },
  { date: "2005-09-15", ratePct: 2.136 },
  { date: "2005-09-16", ratePct: 2.136 },
  { date: "2005-09-19", ratePct: 2.136 },
  { date: "2005-09-20", ratePct: 2.136 },
  { date: "2005-09-21", ratePct: 2.136 },
  { date: "2005-09-22", ratePct: 2.135 },
  { date: "2005-09-23", ratePct: 2.136 },
  { date: "2005-09-26", ratePct: 2.141 },
  { date: "2005-09-27", ratePct: 2.144 },
  { date: "2005-09-28", ratePct: 2.146 },
  { date: "2005-09-29", ratePct: 2.17 },
  { date: "2005-09-30", ratePct: 2.176 },
  { date: "2005-10-03", ratePct: 2.178 },
  { date: "2005-10-04", ratePct: 2.181 },
  { date: "2005-10-05", ratePct: 2.183 },
  { date: "2005-10-06", ratePct: 2.183 },
  { date: "2005-10-07", ratePct: 2.192 },
  { date: "2005-10-10", ratePct: 2.191 },
  { date: "2005-10-11", ratePct: 2.192 },
  { date: "2005-10-12", ratePct: 2.186 },
  { date: "2005-10-13", ratePct: 2.185 },
  { date: "2005-10-14", ratePct: 2.185 },
  { date: "2005-10-17", ratePct: 2.187 },
  { date: "2005-10-18", ratePct: 2.188 },
  { date: "2005-10-19", ratePct: 2.188 },
  { date: "2005-10-20", ratePct: 2.187 },
  { date: "2005-10-21", ratePct: 2.186 },
  { date: "2005-10-24", ratePct: 2.185 },
  { date: "2005-10-25", ratePct: 2.186 },
  { date: "2005-10-26", ratePct: 2.209 },
  { date: "2005-10-27", ratePct: 2.24 },
  { date: "2005-10-28", ratePct: 2.254 },
  { date: "2005-10-31", ratePct: 2.263 },
  { date: "2005-11-01", ratePct: 2.264 },
  { date: "2005-11-02", ratePct: 2.264 },
  { date: "2005-11-03", ratePct: 2.273 },
  { date: "2005-11-04", ratePct: 2.265 },
  { date: "2005-11-07", ratePct: 2.274 },
  { date: "2005-11-08", ratePct: 2.297 },
  { date: "2005-11-09", ratePct: 2.305 },
  { date: "2005-11-10", ratePct: 2.324 },
  { date: "2005-11-11", ratePct: 2.321 },
  { date: "2005-11-14", ratePct: 2.323 },
  { date: "2005-11-15", ratePct: 2.35 },
  { date: "2005-11-16", ratePct: 2.35 },
  { date: "2005-11-17", ratePct: 2.35 },
  { date: "2005-11-18", ratePct: 2.353 },
  { date: "2005-11-21", ratePct: 2.439 },
  { date: "2005-11-22", ratePct: 2.437 },
  { date: "2005-11-23", ratePct: 2.443 },
  { date: "2005-11-24", ratePct: 2.45 },
  { date: "2005-11-25", ratePct: 2.45 },
  { date: "2005-11-28", ratePct: 2.461 },
  { date: "2005-11-29", ratePct: 2.473 },
  { date: "2005-11-30", ratePct: 2.473 },
  { date: "2005-12-01", ratePct: 2.474 },
  { date: "2005-12-02", ratePct: 2.452 },
  { date: "2005-12-05", ratePct: 2.452 },
  { date: "2005-12-06", ratePct: 2.453 },
  { date: "2005-12-07", ratePct: 2.452 },
  { date: "2005-12-08", ratePct: 2.452 },
  { date: "2005-12-09", ratePct: 2.454 },
  { date: "2005-12-12", ratePct: 2.454 },
  { date: "2005-12-13", ratePct: 2.456 },
  { date: "2005-12-14", ratePct: 2.463 },
  { date: "2005-12-15", ratePct: 2.475 },
  { date: "2005-12-16", ratePct: 2.481 },
  { date: "2005-12-19", ratePct: 2.486 },
  { date: "2005-12-20", ratePct: 2.489 },
  { date: "2005-12-21", ratePct: 2.49 },
  { date: "2005-12-22", ratePct: 2.494 },
  { date: "2005-12-23", ratePct: 2.495 },
  { date: "2005-12-27", ratePct: 2.491 },
  { date: "2005-12-28", ratePct: 2.492 },
  { date: "2005-12-29", ratePct: 2.487 },
  { date: "2005-12-30", ratePct: 2.488 },
  { date: "2006-01-02", ratePct: 2.488 },
  { date: "2006-01-03", ratePct: 2.489 },
  { date: "2006-01-04", ratePct: 2.489 },
  { date: "2006-01-05", ratePct: 2.49 },
  { date: "2006-01-06", ratePct: 2.491 },
  { date: "2006-01-09", ratePct: 2.492 },
  { date: "2006-01-10", ratePct: 2.495 },
  { date: "2006-01-11", ratePct: 2.502 },
  { date: "2006-01-12", ratePct: 2.514 },
  { date: "2006-01-13", ratePct: 2.507 },
  { date: "2006-01-16", ratePct: 2.508 },
  { date: "2006-01-17", ratePct: 2.508 },
  { date: "2006-01-18", ratePct: 2.505 },
  { date: "2006-01-19", ratePct: 2.516 },
  { date: "2006-01-20", ratePct: 2.52 },
  { date: "2006-01-23", ratePct: 2.524 },
  { date: "2006-01-24", ratePct: 2.527 },
  { date: "2006-01-25", ratePct: 2.533 },
  { date: "2006-01-26", ratePct: 2.534 },
  { date: "2006-01-27", ratePct: 2.536 },
  { date: "2006-01-30", ratePct: 2.542 },
  { date: "2006-01-31", ratePct: 2.547 },
  { date: "2006-02-01", ratePct: 2.554 },
  { date: "2006-02-02", ratePct: 2.563 },
  { date: "2006-02-03", ratePct: 2.57 },
  { date: "2006-02-06", ratePct: 2.57 },
  { date: "2006-02-07", ratePct: 2.569 },
  { date: "2006-02-08", ratePct: 2.575 },
  { date: "2006-02-09", ratePct: 2.585 },
  { date: "2006-02-10", ratePct: 2.592 },
  { date: "2006-02-13", ratePct: 2.594 },
  { date: "2006-02-14", ratePct: 2.596 },
  { date: "2006-02-15", ratePct: 2.597 },
  { date: "2006-02-16", ratePct: 2.604 },
  { date: "2006-02-17", ratePct: 2.608 },
  { date: "2006-02-20", ratePct: 2.609 },
  { date: "2006-02-21", ratePct: 2.612 },
  { date: "2006-02-22", ratePct: 2.616 },
  { date: "2006-02-23", ratePct: 2.628 },
  { date: "2006-02-24", ratePct: 2.644 },
  { date: "2006-02-27", ratePct: 2.657 },
  { date: "2006-02-28", ratePct: 2.664 },
  { date: "2006-03-01", ratePct: 2.666 },
  { date: "2006-03-02", ratePct: 2.674 },
  { date: "2006-03-03", ratePct: 2.684 },
  { date: "2006-03-06", ratePct: 2.688 },
  { date: "2006-03-07", ratePct: 2.692 },
  { date: "2006-03-08", ratePct: 2.694 },
  { date: "2006-03-09", ratePct: 2.695 },
  { date: "2006-03-10", ratePct: 2.698 },
  { date: "2006-03-13", ratePct: 2.701 },
  { date: "2006-03-14", ratePct: 2.704 },
  { date: "2006-03-15", ratePct: 2.703 },
  { date: "2006-03-16", ratePct: 2.704 },
  { date: "2006-03-17", ratePct: 2.705 },
  { date: "2006-03-20", ratePct: 2.723 },
  { date: "2006-03-21", ratePct: 2.728 },
  { date: "2006-03-22", ratePct: 2.737 },
  { date: "2006-03-23", ratePct: 2.739 },
  { date: "2006-03-24", ratePct: 2.741 },
  { date: "2006-03-27", ratePct: 2.745 },
  { date: "2006-03-28", ratePct: 2.772 },
  { date: "2006-03-29", ratePct: 2.797 },
  { date: "2006-03-30", ratePct: 2.814 },
  { date: "2006-03-31", ratePct: 2.816 },
  { date: "2006-04-03", ratePct: 2.818 },
  { date: "2006-04-04", ratePct: 2.822 },
  { date: "2006-04-05", ratePct: 2.824 },
  { date: "2006-04-06", ratePct: 2.831 },
  { date: "2006-04-07", ratePct: 2.764 },
  { date: "2006-04-10", ratePct: 2.763 },
  { date: "2006-04-11", ratePct: 2.762 },
  { date: "2006-04-12", ratePct: 2.764 },
  { date: "2006-04-13", ratePct: 2.765 },
  { date: "2006-04-18", ratePct: 2.769 },
  { date: "2006-04-19", ratePct: 2.77 },
  { date: "2006-04-20", ratePct: 2.776 },
  { date: "2006-04-21", ratePct: 2.779 },
  { date: "2006-04-24", ratePct: 2.783 },
  { date: "2006-04-25", ratePct: 2.79 },
  { date: "2006-04-26", ratePct: 2.824 },
  { date: "2006-04-27", ratePct: 2.832 },
  { date: "2006-04-28", ratePct: 2.852 },
  { date: "2006-05-02", ratePct: 2.86 },
  { date: "2006-05-03", ratePct: 2.865 },
  { date: "2006-05-04", ratePct: 2.855 },
  { date: "2006-05-05", ratePct: 2.859 },
  { date: "2006-05-08", ratePct: 2.866 },
  { date: "2006-05-09", ratePct: 2.872 },
  { date: "2006-05-10", ratePct: 2.877 },
  { date: "2006-05-11", ratePct: 2.879 },
  { date: "2006-05-12", ratePct: 2.885 },
  { date: "2006-05-15", ratePct: 2.884 },
  { date: "2006-05-16", ratePct: 2.883 },
  { date: "2006-05-17", ratePct: 2.884 },
  { date: "2006-05-18", ratePct: 2.893 },
  { date: "2006-05-19", ratePct: 2.896 },
  { date: "2006-05-22", ratePct: 2.901 },
  { date: "2006-05-23", ratePct: 2.904 },
  { date: "2006-05-24", ratePct: 2.905 },
  { date: "2006-05-25", ratePct: 2.91 },
  { date: "2006-05-26", ratePct: 2.913 },
  { date: "2006-05-29", ratePct: 2.919 },
  { date: "2006-05-30", ratePct: 2.922 },
  { date: "2006-05-31", ratePct: 2.926 },
  { date: "2006-06-01", ratePct: 2.944 },
  { date: "2006-06-02", ratePct: 2.95 },
  { date: "2006-06-05", ratePct: 2.957 },
  { date: "2006-06-06", ratePct: 2.969 },
  { date: "2006-06-07", ratePct: 2.974 },
  { date: "2006-06-08", ratePct: 2.99 },
  { date: "2006-06-09", ratePct: 2.953 },
  { date: "2006-06-12", ratePct: 2.953 },
  { date: "2006-06-13", ratePct: 2.959 },
  { date: "2006-06-14", ratePct: 2.961 },
  { date: "2006-06-15", ratePct: 2.963 },
  { date: "2006-06-16", ratePct: 2.966 },
  { date: "2006-06-19", ratePct: 2.973 },
  { date: "2006-06-20", ratePct: 2.976 },
  { date: "2006-06-21", ratePct: 2.985 },
  { date: "2006-06-22", ratePct: 2.993 },
  { date: "2006-06-23", ratePct: 2.997 },
  { date: "2006-06-26", ratePct: 3.001 },
  { date: "2006-06-27", ratePct: 3.041 },
  { date: "2006-06-28", ratePct: 3.061 },
  { date: "2006-06-29", ratePct: 3.063 },
  { date: "2006-06-30", ratePct: 3.056 },
  { date: "2006-07-03", ratePct: 3.055 },
  { date: "2006-07-04", ratePct: 3.055 },
  { date: "2006-07-05", ratePct: 3.06 },
  { date: "2006-07-06", ratePct: 3.062 },
  { date: "2006-07-07", ratePct: 3.075 },
  { date: "2006-07-10", ratePct: 3.079 },
  { date: "2006-07-11", ratePct: 3.079 },
  { date: "2006-07-12", ratePct: 3.083 },
  { date: "2006-07-13", ratePct: 3.09 },
  { date: "2006-07-14", ratePct: 3.092 },
  { date: "2006-07-17", ratePct: 3.1 },
  { date: "2006-07-18", ratePct: 3.104 },
  { date: "2006-07-19", ratePct: 3.114 },
  { date: "2006-07-20", ratePct: 3.117 },
  { date: "2006-07-21", ratePct: 3.124 },
  { date: "2006-07-24", ratePct: 3.126 },
  { date: "2006-07-25", ratePct: 3.134 },
  { date: "2006-07-26", ratePct: 3.141 },
  { date: "2006-07-27", ratePct: 3.146 },
  { date: "2006-07-28", ratePct: 3.149 },
  { date: "2006-07-31", ratePct: 3.161 },
  { date: "2006-08-01", ratePct: 3.17 },
  { date: "2006-08-02", ratePct: 3.178 },
  { date: "2006-08-03", ratePct: 3.185 },
  { date: "2006-08-04", ratePct: 3.201 },
  { date: "2006-08-07", ratePct: 3.204 },
  { date: "2006-08-08", ratePct: 3.207 },
  { date: "2006-08-09", ratePct: 3.21 },
  { date: "2006-08-10", ratePct: 3.215 },
  { date: "2006-08-11", ratePct: 3.217 },
  { date: "2006-08-14", ratePct: 3.219 },
  { date: "2006-08-15", ratePct: 3.22 },
  { date: "2006-08-16", ratePct: 3.227 },
  { date: "2006-08-17", ratePct: 3.234 },
  { date: "2006-08-18", ratePct: 3.236 },
  { date: "2006-08-21", ratePct: 3.244 },
  { date: "2006-08-22", ratePct: 3.249 },
  { date: "2006-08-23", ratePct: 3.253 },
  { date: "2006-08-24", ratePct: 3.254 },
  { date: "2006-08-25", ratePct: 3.255 },
  { date: "2006-08-28", ratePct: 3.254 },
  { date: "2006-08-29", ratePct: 3.257 },
  { date: "2006-08-30", ratePct: 3.256 },
  { date: "2006-08-31", ratePct: 3.264 },
  { date: "2006-09-01", ratePct: 3.267 },
  { date: "2006-09-04", ratePct: 3.271 },
  { date: "2006-09-05", ratePct: 3.275 },
  { date: "2006-09-06", ratePct: 3.289 },
  { date: "2006-09-07", ratePct: 3.294 },
  { date: "2006-09-08", ratePct: 3.301 },
  { date: "2006-09-11", ratePct: 3.305 },
  { date: "2006-09-12", ratePct: 3.315 },
  { date: "2006-09-13", ratePct: 3.321 },
  { date: "2006-09-14", ratePct: 3.333 },
  { date: "2006-09-15", ratePct: 3.335 },
  { date: "2006-09-18", ratePct: 3.34 },
  { date: "2006-09-19", ratePct: 3.349 },
  { date: "2006-09-20", ratePct: 3.352 },
  { date: "2006-09-21", ratePct: 3.372 },
  { date: "2006-09-22", ratePct: 3.376 },
  { date: "2006-09-25", ratePct: 3.374 },
  { date: "2006-09-26", ratePct: 3.368 },
  { date: "2006-09-27", ratePct: 3.376 },
  { date: "2006-09-28", ratePct: 3.413 },
  { date: "2006-09-29", ratePct: 3.417 },
  { date: "2006-10-02", ratePct: 3.424 },
  { date: "2006-10-03", ratePct: 3.435 },
  { date: "2006-10-04", ratePct: 3.453 },
  { date: "2006-10-05", ratePct: 3.464 },
  { date: "2006-10-06", ratePct: 3.464 },
  { date: "2006-10-09", ratePct: 3.47 },
  { date: "2006-10-10", ratePct: 3.479 },
  { date: "2006-10-11", ratePct: 3.487 },
  { date: "2006-10-12", ratePct: 3.494 },
  { date: "2006-10-13", ratePct: 3.499 },
  { date: "2006-10-16", ratePct: 3.502 },
  { date: "2006-10-17", ratePct: 3.503 },
  { date: "2006-10-18", ratePct: 3.511 },
  { date: "2006-10-19", ratePct: 3.519 },
  { date: "2006-10-20", ratePct: 3.521 },
  { date: "2006-10-23", ratePct: 3.526 },
  { date: "2006-10-24", ratePct: 3.528 },
  { date: "2006-10-25", ratePct: 3.538 },
  { date: "2006-10-26", ratePct: 3.548 },
  { date: "2006-10-27", ratePct: 3.554 },
  { date: "2006-10-30", ratePct: 3.561 },
  { date: "2006-10-31", ratePct: 3.564 },
  { date: "2006-11-01", ratePct: 3.563 },
  { date: "2006-11-02", ratePct: 3.566 },
  { date: "2006-11-03", ratePct: 3.566 },
  { date: "2006-11-06", ratePct: 3.569 },
  { date: "2006-11-07", ratePct: 3.575 },
  { date: "2006-11-08", ratePct: 3.577 },
  { date: "2006-11-09", ratePct: 3.584 },
  { date: "2006-11-10", ratePct: 3.585 },
  { date: "2006-11-13", ratePct: 3.587 },
  { date: "2006-11-14", ratePct: 3.593 },
  { date: "2006-11-15", ratePct: 3.595 },
  { date: "2006-11-16", ratePct: 3.598 },
  { date: "2006-11-17", ratePct: 3.604 },
  { date: "2006-11-20", ratePct: 3.603 },
  { date: "2006-11-21", ratePct: 3.604 },
  { date: "2006-11-22", ratePct: 3.613 },
  { date: "2006-11-23", ratePct: 3.618 },
  { date: "2006-11-24", ratePct: 3.624 },
  { date: "2006-11-27", ratePct: 3.625 },
  { date: "2006-11-28", ratePct: 3.626 },
  { date: "2006-11-29", ratePct: 3.627 },
  { date: "2006-11-30", ratePct: 3.636 },
  { date: "2006-12-01", ratePct: 3.638 },
  { date: "2006-12-04", ratePct: 3.639 },
  { date: "2006-12-05", ratePct: 3.643 },
  { date: "2006-12-06", ratePct: 3.653 },
  { date: "2006-12-07", ratePct: 3.662 },
  { date: "2006-12-08", ratePct: 3.669 },
  { date: "2006-12-11", ratePct: 3.673 },
  { date: "2006-12-12", ratePct: 3.674 },
  { date: "2006-12-13", ratePct: 3.674 },
  { date: "2006-12-14", ratePct: 3.679 },
  { date: "2006-12-15", ratePct: 3.686 },
  { date: "2006-12-18", ratePct: 3.699 },
  { date: "2006-12-19", ratePct: 3.704 },
  { date: "2006-12-20", ratePct: 3.707 },
  { date: "2006-12-21", ratePct: 3.714 },
  { date: "2006-12-22", ratePct: 3.716 },
  { date: "2006-12-27", ratePct: 3.722 },
  { date: "2006-12-28", ratePct: 3.723 },
  { date: "2006-12-29", ratePct: 3.725 },
  { date: "2007-01-02", ratePct: 3.725 },
  { date: "2007-01-03", ratePct: 3.726 },
  { date: "2007-01-04", ratePct: 3.734 },
  { date: "2007-01-05", ratePct: 3.735 },
  { date: "2007-01-08", ratePct: 3.738 },
  { date: "2007-01-09", ratePct: 3.742 },
  { date: "2007-01-10", ratePct: 3.745 },
  { date: "2007-01-11", ratePct: 3.757 },
  { date: "2007-01-12", ratePct: 3.745 },
  { date: "2007-01-15", ratePct: 3.746 },
  { date: "2007-01-16", ratePct: 3.746 },
  { date: "2007-01-17", ratePct: 3.747 },
  { date: "2007-01-18", ratePct: 3.754 },
  { date: "2007-01-19", ratePct: 3.754 },
  { date: "2007-01-22", ratePct: 3.755 },
  { date: "2007-01-23", ratePct: 3.757 },
  { date: "2007-01-24", ratePct: 3.756 },
  { date: "2007-01-25", ratePct: 3.769 },
  { date: "2007-01-26", ratePct: 3.772 },
  { date: "2007-01-29", ratePct: 3.775 },
  { date: "2007-01-30", ratePct: 3.781 },
  { date: "2007-01-31", ratePct: 3.782 },
  { date: "2007-02-01", ratePct: 3.785 },
  { date: "2007-02-02", ratePct: 3.788 },
  { date: "2007-02-05", ratePct: 3.78 },
  { date: "2007-02-06", ratePct: 3.784 },
  { date: "2007-02-07", ratePct: 3.786 },
  { date: "2007-02-08", ratePct: 3.803 },
  { date: "2007-02-09", ratePct: 3.806 },
  { date: "2007-02-12", ratePct: 3.809 },
  { date: "2007-02-13", ratePct: 3.814 },
  { date: "2007-02-14", ratePct: 3.815 },
  { date: "2007-02-15", ratePct: 3.825 },
  { date: "2007-02-16", ratePct: 3.826 },
  { date: "2007-02-19", ratePct: 3.831 },
  { date: "2007-02-20", ratePct: 3.833 },
  { date: "2007-02-21", ratePct: 3.835 },
  { date: "2007-02-22", ratePct: 3.843 },
  { date: "2007-02-23", ratePct: 3.846 },
  { date: "2007-02-26", ratePct: 3.853 },
  { date: "2007-02-27", ratePct: 3.854 },
  { date: "2007-02-28", ratePct: 3.848 },
  { date: "2007-03-01", ratePct: 3.856 },
  { date: "2007-03-02", ratePct: 3.859 },
  { date: "2007-03-05", ratePct: 3.86 },
  { date: "2007-03-06", ratePct: 3.866 },
  { date: "2007-03-07", ratePct: 3.868 },
  { date: "2007-03-08", ratePct: 3.878 },
  { date: "2007-03-09", ratePct: 3.885 },
  { date: "2007-03-12", ratePct: 3.889 },
  { date: "2007-03-13", ratePct: 3.889 },
  { date: "2007-03-14", ratePct: 3.893 },
  { date: "2007-03-15", ratePct: 3.896 },
  { date: "2007-03-16", ratePct: 3.896 },
  { date: "2007-03-19", ratePct: 3.892 },
  { date: "2007-03-20", ratePct: 3.895 },
  { date: "2007-03-21", ratePct: 3.897 },
  { date: "2007-03-22", ratePct: 3.902 },
  { date: "2007-03-23", ratePct: 3.904 },
  { date: "2007-03-26", ratePct: 3.906 },
  { date: "2007-03-27", ratePct: 3.909 },
  { date: "2007-03-28", ratePct: 3.914 },
  { date: "2007-03-29", ratePct: 3.922 },
  { date: "2007-03-30", ratePct: 3.924 },
  { date: "2007-04-02", ratePct: 3.927 },
  { date: "2007-04-03", ratePct: 3.936 },
  { date: "2007-04-04", ratePct: 3.944 },
  { date: "2007-04-05", ratePct: 3.946 },
  { date: "2007-04-10", ratePct: 3.955 },
  { date: "2007-04-11", ratePct: 3.958 },
  { date: "2007-04-12", ratePct: 3.968 },
  { date: "2007-04-13", ratePct: 3.97 },
  { date: "2007-04-16", ratePct: 3.975 },
  { date: "2007-04-17", ratePct: 3.978 },
  { date: "2007-04-18", ratePct: 3.979 },
  { date: "2007-04-19", ratePct: 3.985 },
  { date: "2007-04-20", ratePct: 3.988 },
  { date: "2007-04-23", ratePct: 3.992 },
  { date: "2007-04-24", ratePct: 3.995 },
  { date: "2007-04-25", ratePct: 3.999 },
  { date: "2007-04-26", ratePct: 4.005 },
  { date: "2007-04-27", ratePct: 4.013 },
  { date: "2007-04-30", ratePct: 4.017 },
  { date: "2007-05-02", ratePct: 4.023 },
  { date: "2007-05-03", ratePct: 4.034 },
  { date: "2007-05-04", ratePct: 4.036 },
  { date: "2007-05-07", ratePct: 4.038 },
  { date: "2007-05-08", ratePct: 4.043 },
  { date: "2007-05-09", ratePct: 4.046 },
  { date: "2007-05-10", ratePct: 4.055 },
  { date: "2007-05-11", ratePct: 4.061 },
  { date: "2007-05-14", ratePct: 4.063 },
  { date: "2007-05-15", ratePct: 4.066 },
  { date: "2007-05-16", ratePct: 4.067 },
  { date: "2007-05-17", ratePct: 4.073 },
  { date: "2007-05-18", ratePct: 4.077 },
  { date: "2007-05-21", ratePct: 4.078 },
  { date: "2007-05-22", ratePct: 4.08 },
  { date: "2007-05-23", ratePct: 4.086 },
  { date: "2007-05-24", ratePct: 4.095 },
  { date: "2007-05-25", ratePct: 4.098 },
  { date: "2007-05-28", ratePct: 4.107 },
  { date: "2007-05-29", ratePct: 4.109 },
  { date: "2007-05-30", ratePct: 4.113 },
  { date: "2007-05-31", ratePct: 4.122 },
  { date: "2007-06-01", ratePct: 4.124 },
  { date: "2007-06-04", ratePct: 4.125 },
  { date: "2007-06-05", ratePct: 4.126 },
  { date: "2007-06-06", ratePct: 4.126 },
  { date: "2007-06-07", ratePct: 4.135 },
  { date: "2007-06-08", ratePct: 4.138 },
  { date: "2007-06-11", ratePct: 4.14 },
  { date: "2007-06-12", ratePct: 4.142 },
  { date: "2007-06-13", ratePct: 4.145 },
  { date: "2007-06-14", ratePct: 4.147 },
  { date: "2007-06-15", ratePct: 4.148 },
  { date: "2007-06-18", ratePct: 4.148 },
  { date: "2007-06-19", ratePct: 4.153 },
  { date: "2007-06-20", ratePct: 4.155 },
  { date: "2007-06-21", ratePct: 4.159 },
  { date: "2007-06-22", ratePct: 4.16 },
  { date: "2007-06-25", ratePct: 4.159 },
  { date: "2007-06-26", ratePct: 4.162 },
  { date: "2007-06-27", ratePct: 4.164 },
  { date: "2007-06-28", ratePct: 4.172 },
  { date: "2007-06-29", ratePct: 4.175 },
  { date: "2007-07-02", ratePct: 4.176 },
  { date: "2007-07-03", ratePct: 4.182 },
  { date: "2007-07-04", ratePct: 4.183 },
  { date: "2007-07-05", ratePct: 4.19 },
  { date: "2007-07-06", ratePct: 4.196 },
  { date: "2007-07-09", ratePct: 4.197 },
  { date: "2007-07-10", ratePct: 4.197 },
  { date: "2007-07-11", ratePct: 4.201 },
  { date: "2007-07-12", ratePct: 4.209 },
  { date: "2007-07-13", ratePct: 4.214 },
  { date: "2007-07-16", ratePct: 4.215 },
  { date: "2007-07-17", ratePct: 4.215 },
  { date: "2007-07-18", ratePct: 4.221 },
  { date: "2007-07-19", ratePct: 4.226 },
  { date: "2007-07-20", ratePct: 4.228 },
  { date: "2007-07-23", ratePct: 4.229 },
  { date: "2007-07-24", ratePct: 4.235 },
  { date: "2007-07-25", ratePct: 4.239 },
  { date: "2007-07-26", ratePct: 4.245 },
  { date: "2007-07-27", ratePct: 4.246 },
  { date: "2007-07-30", ratePct: 4.252 },
  { date: "2007-07-31", ratePct: 4.26 },
  { date: "2007-08-01", ratePct: 4.264 },
  { date: "2007-08-02", ratePct: 4.281 },
  { date: "2007-08-03", ratePct: 4.296 },
  { date: "2007-08-06", ratePct: 4.309 },
  { date: "2007-08-07", ratePct: 4.328 },
  { date: "2007-08-08", ratePct: 4.352 },
  { date: "2007-08-09", ratePct: 4.399 },
  { date: "2007-08-10", ratePct: 4.451 },
  { date: "2007-08-13", ratePct: 4.506 },
  { date: "2007-08-14", ratePct: 4.519 },
  { date: "2007-08-15", ratePct: 4.525 },
  { date: "2007-08-16", ratePct: 4.574 },
  { date: "2007-08-17", ratePct: 4.645 },
  { date: "2007-08-20", ratePct: 4.656 },
  { date: "2007-08-21", ratePct: 4.664 },
  { date: "2007-08-22", ratePct: 4.676 },
  { date: "2007-08-23", ratePct: 4.711 },
  { date: "2007-08-24", ratePct: 4.721 },
  { date: "2007-08-27", ratePct: 4.728 },
  { date: "2007-08-28", ratePct: 4.717 },
  { date: "2007-08-29", ratePct: 4.722 },
  { date: "2007-08-30", ratePct: 4.724 },
  { date: "2007-08-31", ratePct: 4.735 },
  { date: "2007-09-03", ratePct: 4.741 },
  { date: "2007-09-04", ratePct: 4.745 },
  { date: "2007-09-05", ratePct: 4.755 },
  { date: "2007-09-06", ratePct: 4.755 },
  { date: "2007-09-07", ratePct: 4.752 },
  { date: "2007-09-10", ratePct: 4.748 },
  { date: "2007-09-11", ratePct: 4.75 },
  { date: "2007-09-12", ratePct: 4.75 },
  { date: "2007-09-13", ratePct: 4.73 },
  { date: "2007-09-14", ratePct: 4.724 },
  { date: "2007-09-17", ratePct: 4.729 },
  { date: "2007-09-18", ratePct: 4.731 },
  { date: "2007-09-19", ratePct: 4.723 },
  { date: "2007-09-20", ratePct: 4.726 },
  { date: "2007-09-21", ratePct: 4.723 },
  { date: "2007-09-24", ratePct: 4.723 },
  { date: "2007-09-25", ratePct: 4.725 },
  { date: "2007-09-26", ratePct: 4.726 },
  { date: "2007-09-27", ratePct: 4.786 },
  { date: "2007-09-28", ratePct: 4.792 },
  { date: "2007-10-01", ratePct: 4.791 },
  { date: "2007-10-02", ratePct: 4.795 },
  { date: "2007-10-03", ratePct: 4.79 },
  { date: "2007-10-04", ratePct: 4.785 },
  { date: "2007-10-05", ratePct: 4.775 },
  { date: "2007-10-08", ratePct: 4.767 },
  { date: "2007-10-09", ratePct: 4.754 },
  { date: "2007-10-10", ratePct: 4.749 },
  { date: "2007-10-11", ratePct: 4.732 },
  { date: "2007-10-12", ratePct: 4.691 },
  { date: "2007-10-15", ratePct: 4.659 },
  { date: "2007-10-16", ratePct: 4.655 },
  { date: "2007-10-17", ratePct: 4.655 },
  { date: "2007-10-18", ratePct: 4.653 },
  { date: "2007-10-19", ratePct: 4.637 },
  { date: "2007-10-22", ratePct: 4.632 },
  { date: "2007-10-23", ratePct: 4.63 },
  { date: "2007-10-24", ratePct: 4.626 },
  { date: "2007-10-25", ratePct: 4.613 },
  { date: "2007-10-26", ratePct: 4.605 },
  { date: "2007-10-29", ratePct: 4.606 },
  { date: "2007-10-30", ratePct: 4.607 },
  { date: "2007-10-31", ratePct: 4.603 },
  { date: "2007-11-01", ratePct: 4.598 },
  { date: "2007-11-02", ratePct: 4.591 },
  { date: "2007-11-05", ratePct: 4.59 },
  { date: "2007-11-06", ratePct: 4.589 },
  { date: "2007-11-07", ratePct: 4.589 },
  { date: "2007-11-08", ratePct: 4.579 },
  { date: "2007-11-09", ratePct: 4.579 },
  { date: "2007-11-12", ratePct: 4.574 },
  { date: "2007-11-13", ratePct: 4.575 },
  { date: "2007-11-14", ratePct: 4.576 },
  { date: "2007-11-15", ratePct: 4.58 },
  { date: "2007-11-16", ratePct: 4.584 },
  { date: "2007-11-19", ratePct: 4.619 },
  { date: "2007-11-20", ratePct: 4.636 },
  { date: "2007-11-21", ratePct: 4.654 },
  { date: "2007-11-22", ratePct: 4.677 },
  { date: "2007-11-23", ratePct: 4.697 },
  { date: "2007-11-26", ratePct: 4.713 },
  { date: "2007-11-27", ratePct: 4.719 },
  { date: "2007-11-28", ratePct: 4.743 },
  { date: "2007-11-29", ratePct: 4.776 },
  { date: "2007-11-30", ratePct: 4.81 },
  { date: "2007-12-03", ratePct: 4.839 },
  { date: "2007-12-04", ratePct: 4.858 },
  { date: "2007-12-05", ratePct: 4.871 },
  { date: "2007-12-06", ratePct: 4.884 },
  { date: "2007-12-07", ratePct: 4.891 },
  { date: "2007-12-10", ratePct: 4.902 },
  { date: "2007-12-11", ratePct: 4.927 },
  { date: "2007-12-12", ratePct: 4.953 },
  { date: "2007-12-13", ratePct: 4.948 },
  { date: "2007-12-14", ratePct: 4.941 },
  { date: "2007-12-17", ratePct: 4.949 },
  { date: "2007-12-18", ratePct: 4.876 },
  { date: "2007-12-19", ratePct: 4.812 },
  { date: "2007-12-20", ratePct: 4.79 },
  { date: "2007-12-21", ratePct: 4.774 },
  { date: "2007-12-24", ratePct: 4.765 },
  { date: "2007-12-27", ratePct: 4.765 },
  { date: "2007-12-28", ratePct: 4.69 },
  { date: "2007-12-31", ratePct: 4.684 },
  { date: "2008-01-02", ratePct: 4.665 },
  { date: "2008-01-03", ratePct: 4.644 },
  { date: "2008-01-04", ratePct: 4.63 },
  { date: "2008-01-07", ratePct: 4.616 },
  { date: "2008-01-08", ratePct: 4.598 },
  { date: "2008-01-09", ratePct: 4.597 },
  { date: "2008-01-10", ratePct: 4.591 },
  { date: "2008-01-11", ratePct: 4.576 },
  { date: "2008-01-14", ratePct: 4.558 },
  { date: "2008-01-15", ratePct: 4.541 },
  { date: "2008-01-16", ratePct: 4.509 },
  { date: "2008-01-17", ratePct: 4.446 },
  { date: "2008-01-18", ratePct: 4.411 },
  { date: "2008-01-21", ratePct: 4.393 },
  { date: "2008-01-22", ratePct: 4.33 },
  { date: "2008-01-23", ratePct: 4.288 },
  { date: "2008-01-24", ratePct: 4.302 },
  { date: "2008-01-25", ratePct: 4.383 },
  { date: "2008-01-28", ratePct: 4.378 },
  { date: "2008-01-29", ratePct: 4.383 },
  { date: "2008-01-30", ratePct: 4.381 },
  { date: "2008-01-31", ratePct: 4.374 },
  { date: "2008-02-01", ratePct: 4.367 },
  { date: "2008-02-04", ratePct: 4.368 },
  { date: "2008-02-05", ratePct: 4.372 },
  { date: "2008-02-06", ratePct: 4.359 },
  { date: "2008-02-07", ratePct: 4.353 },
  { date: "2008-02-08", ratePct: 4.331 },
  { date: "2008-02-11", ratePct: 4.334 },
  { date: "2008-02-12", ratePct: 4.334 },
  { date: "2008-02-13", ratePct: 4.34 },
  { date: "2008-02-14", ratePct: 4.342 },
  { date: "2008-02-15", ratePct: 4.355 },
  { date: "2008-02-18", ratePct: 4.358 },
  { date: "2008-02-19", ratePct: 4.36 },
  { date: "2008-02-20", ratePct: 4.366 },
  { date: "2008-02-21", ratePct: 4.373 },
  { date: "2008-02-22", ratePct: 4.374 },
  { date: "2008-02-25", ratePct: 4.379 },
  { date: "2008-02-26", ratePct: 4.382 },
  { date: "2008-02-27", ratePct: 4.386 },
  { date: "2008-02-28", ratePct: 4.387 },
  { date: "2008-02-29", ratePct: 4.384 },
  { date: "2008-03-03", ratePct: 4.383 },
  { date: "2008-03-04", ratePct: 4.391 },
  { date: "2008-03-05", ratePct: 4.401 },
  { date: "2008-03-06", ratePct: 4.429 },
  { date: "2008-03-07", ratePct: 4.497 },
  { date: "2008-03-10", ratePct: 4.558 },
  { date: "2008-03-11", ratePct: 4.597 },
  { date: "2008-03-12", ratePct: 4.605 },
  { date: "2008-03-13", ratePct: 4.606 },
  { date: "2008-03-14", ratePct: 4.617 },
  { date: "2008-03-17", ratePct: 4.652 },
  { date: "2008-03-18", ratePct: 4.654 },
  { date: "2008-03-19", ratePct: 4.664 },
  { date: "2008-03-20", ratePct: 4.674 },
  { date: "2008-03-25", ratePct: 4.699 },
  { date: "2008-03-26", ratePct: 4.718 },
  { date: "2008-03-27", ratePct: 4.728 },
  { date: "2008-03-28", ratePct: 4.731 },
  { date: "2008-03-31", ratePct: 4.727 },
  { date: "2008-04-01", ratePct: 4.731 },
  { date: "2008-04-02", ratePct: 4.736 },
  { date: "2008-04-03", ratePct: 4.741 },
  { date: "2008-04-04", ratePct: 4.741 },
  { date: "2008-04-07", ratePct: 4.742 },
  { date: "2008-04-08", ratePct: 4.742 },
  { date: "2008-04-09", ratePct: 4.744 },
  { date: "2008-04-10", ratePct: 4.744 },
  { date: "2008-04-11", ratePct: 4.747 },
  { date: "2008-04-14", ratePct: 4.753 },
  { date: "2008-04-15", ratePct: 4.764 },
  { date: "2008-04-16", ratePct: 4.774 },
  { date: "2008-04-17", ratePct: 4.784 },
  { date: "2008-04-18", ratePct: 4.794 },
  { date: "2008-04-21", ratePct: 4.805 },
  { date: "2008-04-22", ratePct: 4.82 },
  { date: "2008-04-23", ratePct: 4.829 },
  { date: "2008-04-24", ratePct: 4.837 },
  { date: "2008-04-25", ratePct: 4.847 },
  { date: "2008-04-28", ratePct: 4.848 },
  { date: "2008-04-29", ratePct: 4.857 },
  { date: "2008-04-30", ratePct: 4.857 },
  { date: "2008-05-02", ratePct: 4.855 },
  { date: "2008-05-05", ratePct: 4.857 },
  { date: "2008-05-06", ratePct: 4.857 },
  { date: "2008-05-07", ratePct: 4.856 },
  { date: "2008-05-08", ratePct: 4.855 },
  { date: "2008-05-09", ratePct: 4.855 },
  { date: "2008-05-12", ratePct: 4.857 },
  { date: "2008-05-13", ratePct: 4.856 },
  { date: "2008-05-14", ratePct: 4.859 },
  { date: "2008-05-15", ratePct: 4.86 },
  { date: "2008-05-16", ratePct: 4.859 },
  { date: "2008-05-19", ratePct: 4.858 },
  { date: "2008-05-20", ratePct: 4.856 },
  { date: "2008-05-21", ratePct: 4.858 },
  { date: "2008-05-22", ratePct: 4.855 },
  { date: "2008-05-23", ratePct: 4.857 },
  { date: "2008-05-26", ratePct: 4.857 },
  { date: "2008-05-27", ratePct: 4.857 },
  { date: "2008-05-28", ratePct: 4.857 },
  { date: "2008-05-29", ratePct: 4.86 },
  { date: "2008-05-30", ratePct: 4.864 },
  { date: "2008-06-02", ratePct: 4.865 },
  { date: "2008-06-03", ratePct: 4.864 },
  { date: "2008-06-04", ratePct: 4.864 },
  { date: "2008-06-05", ratePct: 4.866 },
  { date: "2008-06-06", ratePct: 4.967 },
  { date: "2008-06-09", ratePct: 4.961 },
  { date: "2008-06-10", ratePct: 4.96 },
  { date: "2008-06-11", ratePct: 4.959 },
  { date: "2008-06-12", ratePct: 4.958 },
  { date: "2008-06-13", ratePct: 4.961 },
  { date: "2008-06-16", ratePct: 4.96 },
  { date: "2008-06-17", ratePct: 4.961 },
  { date: "2008-06-18", ratePct: 4.962 },
  { date: "2008-06-19", ratePct: 4.961 },
  { date: "2008-06-20", ratePct: 4.959 },
  { date: "2008-06-23", ratePct: 4.958 },
  { date: "2008-06-24", ratePct: 4.958 },
  { date: "2008-06-25", ratePct: 4.958 },
  { date: "2008-06-26", ratePct: 4.955 },
  { date: "2008-06-27", ratePct: 4.947 },
  { date: "2008-06-30", ratePct: 4.947 },
  { date: "2008-07-01", ratePct: 4.955 },
  { date: "2008-07-02", ratePct: 4.956 },
  { date: "2008-07-03", ratePct: 4.966 },
  { date: "2008-07-04", ratePct: 4.959 },
  { date: "2008-07-07", ratePct: 4.96 },
  { date: "2008-07-08", ratePct: 4.962 },
  { date: "2008-07-09", ratePct: 4.962 },
  { date: "2008-07-10", ratePct: 4.963 },
  { date: "2008-07-11", ratePct: 4.963 },
  { date: "2008-07-14", ratePct: 4.962 },
  { date: "2008-07-15", ratePct: 4.961 },
  { date: "2008-07-16", ratePct: 4.957 },
  { date: "2008-07-17", ratePct: 4.958 },
  { date: "2008-07-18", ratePct: 4.957 },
  { date: "2008-07-21", ratePct: 4.96 },
  { date: "2008-07-22", ratePct: 4.961 },
  { date: "2008-07-23", ratePct: 4.963 },
  { date: "2008-07-24", ratePct: 4.962 },
  { date: "2008-07-25", ratePct: 4.962 },
  { date: "2008-07-28", ratePct: 4.962 },
  { date: "2008-07-29", ratePct: 4.961 },
  { date: "2008-07-30", ratePct: 4.963 },
  { date: "2008-07-31", ratePct: 4.968 },
  { date: "2008-08-01", ratePct: 4.968 },
  { date: "2008-08-04", ratePct: 4.97 },
  { date: "2008-08-05", ratePct: 4.968 },
  { date: "2008-08-06", ratePct: 4.967 },
  { date: "2008-08-07", ratePct: 4.968 },
  { date: "2008-08-08", ratePct: 4.966 },
  { date: "2008-08-11", ratePct: 4.965 },
  { date: "2008-08-12", ratePct: 4.966 },
  { date: "2008-08-13", ratePct: 4.965 },
  { date: "2008-08-14", ratePct: 4.964 },
  { date: "2008-08-15", ratePct: 4.966 },
  { date: "2008-08-18", ratePct: 4.963 },
  { date: "2008-08-19", ratePct: 4.963 },
  { date: "2008-08-20", ratePct: 4.964 },
  { date: "2008-08-21", ratePct: 4.963 },
  { date: "2008-08-22", ratePct: 4.964 },
  { date: "2008-08-25", ratePct: 4.965 },
  { date: "2008-08-26", ratePct: 4.965 },
  { date: "2008-08-27", ratePct: 4.964 },
  { date: "2008-08-28", ratePct: 4.962 },
  { date: "2008-08-29", ratePct: 4.963 },
  { date: "2008-09-01", ratePct: 4.961 },
  { date: "2008-09-02", ratePct: 4.961 },
  { date: "2008-09-03", ratePct: 4.96 },
  { date: "2008-09-04", ratePct: 4.961 },
  { date: "2008-09-05", ratePct: 4.96 },
  { date: "2008-09-08", ratePct: 4.959 },
  { date: "2008-09-09", ratePct: 4.958 },
  { date: "2008-09-10", ratePct: 4.959 },
  { date: "2008-09-11", ratePct: 4.958 },
  { date: "2008-09-12", ratePct: 4.958 },
  { date: "2008-09-15", ratePct: 4.964 },
  { date: "2008-09-16", ratePct: 4.969 },
  { date: "2008-09-17", ratePct: 4.973 },
  { date: "2008-09-18", ratePct: 4.991 },
  { date: "2008-09-19", ratePct: 5.005 },
  { date: "2008-09-22", ratePct: 5.029 },
  { date: "2008-09-23", ratePct: 5.055 },
  { date: "2008-09-24", ratePct: 5.066 },
  { date: "2008-09-25", ratePct: 5.119 },
  { date: "2008-09-26", ratePct: 5.142 },
  { date: "2008-09-29", ratePct: 5.237 },
  { date: "2008-09-30", ratePct: 5.277 },
  { date: "2008-10-01", ratePct: 5.291 },
  { date: "2008-10-02", ratePct: 5.33 },
  { date: "2008-10-03", ratePct: 5.339 },
  { date: "2008-10-06", ratePct: 5.345 },
  { date: "2008-10-07", ratePct: 5.377 },
  { date: "2008-10-08", ratePct: 5.393 },
  { date: "2008-10-09", ratePct: 5.393 },
  { date: "2008-10-10", ratePct: 5.381 },
  { date: "2008-10-13", ratePct: 5.318 },
  { date: "2008-10-14", ratePct: 5.235 },
  { date: "2008-10-15", ratePct: 5.168 },
  { date: "2008-10-16", ratePct: 5.09 },
  { date: "2008-10-17", ratePct: 5.045 },
  { date: "2008-10-20", ratePct: 5 },
  { date: "2008-10-21", ratePct: 4.968 },
  { date: "2008-10-22", ratePct: 4.936 },
  { date: "2008-10-23", ratePct: 4.921 },
  { date: "2008-10-24", ratePct: 4.918 },
  { date: "2008-10-27", ratePct: 4.912 },
  { date: "2008-10-28", ratePct: 4.86 },
  { date: "2008-10-29", ratePct: 4.827 },
  { date: "2008-10-30", ratePct: 4.794 },
  { date: "2008-10-31", ratePct: 4.76 },
  { date: "2008-11-03", ratePct: 4.733 },
  { date: "2008-11-04", ratePct: 4.7 },
  { date: "2008-11-05", ratePct: 4.663 },
  { date: "2008-11-06", ratePct: 4.592 },
  { date: "2008-11-07", ratePct: 4.474 },
  { date: "2008-11-10", ratePct: 4.406 },
  { date: "2008-11-11", ratePct: 4.343 },
  { date: "2008-11-12", ratePct: 4.286 },
  { date: "2008-11-13", ratePct: 4.245 },
  { date: "2008-11-14", ratePct: 4.223 },
  { date: "2008-11-17", ratePct: 4.191 },
  { date: "2008-11-18", ratePct: 4.153 },
  { date: "2008-11-19", ratePct: 4.12 },
  { date: "2008-11-20", ratePct: 4.076 },
  { date: "2008-11-21", ratePct: 4.021 },
  { date: "2008-11-24", ratePct: 3.97 },
  { date: "2008-11-25", ratePct: 3.937 },
  { date: "2008-11-26", ratePct: 3.901 },
  { date: "2008-11-27", ratePct: 3.879 },
  { date: "2008-11-28", ratePct: 3.853 },
  { date: "2008-12-01", ratePct: 3.816 },
  { date: "2008-12-02", ratePct: 3.786 },
  { date: "2008-12-03", ratePct: 3.743 },
  { date: "2008-12-04", ratePct: 3.669 },
  { date: "2008-12-05", ratePct: 3.563 },
  { date: "2008-12-08", ratePct: 3.488 },
  { date: "2008-12-09", ratePct: 3.428 },
  { date: "2008-12-10", ratePct: 3.376 },
  { date: "2008-12-11", ratePct: 3.329 },
  { date: "2008-12-12", ratePct: 3.282 },
  { date: "2008-12-15", ratePct: 3.243 },
  { date: "2008-12-16", ratePct: 3.204 },
  { date: "2008-12-17", ratePct: 3.155 },
  { date: "2008-12-18", ratePct: 3.125 },
  { date: "2008-12-19", ratePct: 3.082 },
  { date: "2008-12-22", ratePct: 3.053 },
  { date: "2008-12-23", ratePct: 3.019 },
  { date: "2008-12-24", ratePct: 2.991 },
  { date: "2008-12-29", ratePct: 2.973 },
  { date: "2008-12-30", ratePct: 2.928 },
  { date: "2008-12-31", ratePct: 2.892 },
  { date: "2009-01-02", ratePct: 2.859 },
  { date: "2009-01-05", ratePct: 2.822 },
  { date: "2009-01-06", ratePct: 2.797 },
  { date: "2009-01-07", ratePct: 2.762 },
  { date: "2009-01-08", ratePct: 2.729 },
  { date: "2009-01-09", ratePct: 2.692 },
  { date: "2009-01-12", ratePct: 2.653 },
  { date: "2009-01-13", ratePct: 2.612 },
  { date: "2009-01-14", ratePct: 2.572 },
  { date: "2009-01-15", ratePct: 2.51 },
  { date: "2009-01-16", ratePct: 2.453 },
  { date: "2009-01-19", ratePct: 2.41 },
  { date: "2009-01-20", ratePct: 2.37 },
  { date: "2009-01-21", ratePct: 2.312 },
  { date: "2009-01-22", ratePct: 2.254 },
  { date: "2009-01-23", ratePct: 2.199 },
  { date: "2009-01-26", ratePct: 2.149 },
  { date: "2009-01-27", ratePct: 2.13 },
  { date: "2009-01-28", ratePct: 2.115 },
  { date: "2009-01-29", ratePct: 2.101 },
  { date: "2009-01-30", ratePct: 2.086 },
  { date: "2009-02-02", ratePct: 2.077 },
  { date: "2009-02-03", ratePct: 2.064 },
  { date: "2009-02-04", ratePct: 2.053 },
  { date: "2009-02-05", ratePct: 2.039 },
  { date: "2009-02-06", ratePct: 2.022 },
  { date: "2009-02-09", ratePct: 2.005 },
  { date: "2009-02-10", ratePct: 1.989 },
  { date: "2009-02-11", ratePct: 1.975 },
  { date: "2009-02-12", ratePct: 1.959 },
  { date: "2009-02-13", ratePct: 1.943 },
  { date: "2009-02-16", ratePct: 1.927 },
  { date: "2009-02-17", ratePct: 1.912 },
  { date: "2009-02-18", ratePct: 1.9 },
  { date: "2009-02-19", ratePct: 1.888 },
  { date: "2009-02-20", ratePct: 1.875 },
  { date: "2009-02-23", ratePct: 1.867 },
  { date: "2009-02-24", ratePct: 1.858 },
  { date: "2009-02-25", ratePct: 1.848 },
  { date: "2009-02-26", ratePct: 1.835 },
  { date: "2009-02-27", ratePct: 1.825 },
  { date: "2009-03-02", ratePct: 1.811 },
  { date: "2009-03-03", ratePct: 1.799 },
  { date: "2009-03-04", ratePct: 1.778 },
  { date: "2009-03-05", ratePct: 1.757 },
  { date: "2009-03-06", ratePct: 1.726 },
  { date: "2009-03-09", ratePct: 1.703 },
  { date: "2009-03-10", ratePct: 1.687 },
  { date: "2009-03-11", ratePct: 1.663 },
  { date: "2009-03-12", ratePct: 1.65 },
  { date: "2009-03-13", ratePct: 1.64 },
  { date: "2009-03-16", ratePct: 1.629 },
  { date: "2009-03-17", ratePct: 1.614 },
  { date: "2009-03-18", ratePct: 1.602 },
  { date: "2009-03-19", ratePct: 1.584 },
  { date: "2009-03-20", ratePct: 1.574 },
  { date: "2009-03-23", ratePct: 1.56 },
  { date: "2009-03-24", ratePct: 1.556 },
  { date: "2009-03-25", ratePct: 1.548 },
  { date: "2009-03-26", ratePct: 1.538 },
  { date: "2009-03-27", ratePct: 1.531 },
  { date: "2009-03-30", ratePct: 1.52 },
  { date: "2009-03-31", ratePct: 1.51 },
  { date: "2009-04-01", ratePct: 1.498 },
  { date: "2009-04-02", ratePct: 1.483 },
  { date: "2009-04-03", ratePct: 1.479 },
  { date: "2009-04-06", ratePct: 1.466 },
  { date: "2009-04-07", ratePct: 1.453 },
  { date: "2009-04-08", ratePct: 1.445 },
  { date: "2009-04-09", ratePct: 1.435 },
  { date: "2009-04-14", ratePct: 1.423 },
  { date: "2009-04-15", ratePct: 1.415 },
  { date: "2009-04-16", ratePct: 1.41 },
  { date: "2009-04-17", ratePct: 1.405 },
  { date: "2009-04-20", ratePct: 1.405 },
  { date: "2009-04-21", ratePct: 1.405 },
  { date: "2009-04-22", ratePct: 1.405 },
  { date: "2009-04-23", ratePct: 1.406 },
  { date: "2009-04-24", ratePct: 1.4 },
  { date: "2009-04-27", ratePct: 1.392 },
  { date: "2009-04-28", ratePct: 1.384 },
  { date: "2009-04-29", ratePct: 1.372 },
  { date: "2009-04-30", ratePct: 1.365 },
  { date: "2009-05-04", ratePct: 1.354 },
  { date: "2009-05-05", ratePct: 1.344 },
  { date: "2009-05-06", ratePct: 1.334 },
  { date: "2009-05-07", ratePct: 1.327 },
  { date: "2009-05-08", ratePct: 1.313 },
  { date: "2009-05-11", ratePct: 1.299 },
  { date: "2009-05-12", ratePct: 1.291 },
  { date: "2009-05-13", ratePct: 1.281 },
  { date: "2009-05-14", ratePct: 1.266 },
  { date: "2009-05-15", ratePct: 1.25 },
  { date: "2009-05-18", ratePct: 1.244 },
  { date: "2009-05-19", ratePct: 1.237 },
  { date: "2009-05-20", ratePct: 1.244 },
  { date: "2009-05-21", ratePct: 1.252 },
  { date: "2009-05-22", ratePct: 1.259 },
  { date: "2009-05-25", ratePct: 1.264 },
  { date: "2009-05-26", ratePct: 1.266 },
  { date: "2009-05-27", ratePct: 1.27 },
  { date: "2009-05-28", ratePct: 1.27 },
  { date: "2009-05-29", ratePct: 1.269 },
  { date: "2009-06-01", ratePct: 1.266 },
  { date: "2009-06-02", ratePct: 1.262 },
  { date: "2009-06-03", ratePct: 1.26 },
  { date: "2009-06-04", ratePct: 1.26 },
  { date: "2009-06-05", ratePct: 1.268 },
  { date: "2009-06-08", ratePct: 1.281 },
  { date: "2009-06-09", ratePct: 1.286 },
  { date: "2009-06-10", ratePct: 1.283 },
  { date: "2009-06-11", ratePct: 1.277 },
  { date: "2009-06-12", ratePct: 1.268 },
  { date: "2009-06-15", ratePct: 1.26 },
  { date: "2009-06-16", ratePct: 1.252 },
  { date: "2009-06-17", ratePct: 1.244 },
  { date: "2009-06-18", ratePct: 1.235 },
  { date: "2009-06-19", ratePct: 1.224 },
  { date: "2009-06-22", ratePct: 1.215 },
  { date: "2009-06-23", ratePct: 1.206 },
  { date: "2009-06-24", ratePct: 1.195 },
  { date: "2009-06-25", ratePct: 1.145 },
  { date: "2009-06-26", ratePct: 1.12 },
  { date: "2009-06-29", ratePct: 1.108 },
  { date: "2009-06-30", ratePct: 1.099 },
  { date: "2009-07-01", ratePct: 1.085 },
  { date: "2009-07-02", ratePct: 1.072 },
  { date: "2009-07-03", ratePct: 1.059 },
  { date: "2009-07-06", ratePct: 1.048 },
  { date: "2009-07-07", ratePct: 1.044 },
  { date: "2009-07-08", ratePct: 1.029 },
  { date: "2009-07-09", ratePct: 1.018 },
  { date: "2009-07-10", ratePct: 1.007 },
  { date: "2009-07-13", ratePct: 0.996 },
  { date: "2009-07-14", ratePct: 0.985 },
  { date: "2009-07-15", ratePct: 0.979 },
  { date: "2009-07-16", ratePct: 0.969 },
  { date: "2009-07-17", ratePct: 0.954 },
  { date: "2009-07-20", ratePct: 0.944 },
  { date: "2009-07-21", ratePct: 0.937 },
  { date: "2009-07-22", ratePct: 0.933 },
  { date: "2009-07-23", ratePct: 0.927 },
  { date: "2009-07-24", ratePct: 0.921 },
  { date: "2009-07-27", ratePct: 0.914 },
  { date: "2009-07-28", ratePct: 0.908 },
  { date: "2009-07-29", ratePct: 0.903 },
  { date: "2009-07-30", ratePct: 0.899 },
  { date: "2009-07-31", ratePct: 0.893 },
  { date: "2009-08-03", ratePct: 0.886 },
  { date: "2009-08-04", ratePct: 0.884 },
  { date: "2009-08-05", ratePct: 0.884 },
  { date: "2009-08-06", ratePct: 0.883 },
  { date: "2009-08-07", ratePct: 0.881 },
  { date: "2009-08-10", ratePct: 0.884 },
  { date: "2009-08-11", ratePct: 0.883 },
  { date: "2009-08-12", ratePct: 0.879 },
  { date: "2009-08-13", ratePct: 0.873 },
  { date: "2009-08-14", ratePct: 0.869 },
  { date: "2009-08-17", ratePct: 0.861 },
  { date: "2009-08-18", ratePct: 0.859 },
  { date: "2009-08-19", ratePct: 0.854 },
  { date: "2009-08-20", ratePct: 0.851 },
  { date: "2009-08-21", ratePct: 0.849 },
  { date: "2009-08-24", ratePct: 0.843 },
  { date: "2009-08-25", ratePct: 0.838 },
  { date: "2009-08-26", ratePct: 0.834 },
  { date: "2009-08-27", ratePct: 0.829 },
  { date: "2009-08-28", ratePct: 0.825 },
  { date: "2009-08-31", ratePct: 0.821 },
  { date: "2009-09-01", ratePct: 0.819 },
  { date: "2009-09-02", ratePct: 0.813 },
  { date: "2009-09-03", ratePct: 0.809 },
  { date: "2009-09-04", ratePct: 0.803 },
  { date: "2009-09-07", ratePct: 0.797 },
  { date: "2009-09-08", ratePct: 0.788 },
  { date: "2009-09-09", ratePct: 0.781 },
  { date: "2009-09-10", ratePct: 0.778 },
  { date: "2009-09-11", ratePct: 0.773 },
  { date: "2009-09-14", ratePct: 0.771 },
  { date: "2009-09-15", ratePct: 0.77 },
  { date: "2009-09-16", ratePct: 0.768 },
  { date: "2009-09-17", ratePct: 0.766 },
  { date: "2009-09-18", ratePct: 0.762 },
  { date: "2009-09-21", ratePct: 0.758 },
  { date: "2009-09-22", ratePct: 0.755 },
  { date: "2009-09-23", ratePct: 0.749 },
  { date: "2009-09-24", ratePct: 0.743 },
  { date: "2009-09-25", ratePct: 0.741 },
  { date: "2009-09-28", ratePct: 0.739 },
  { date: "2009-09-29", ratePct: 0.75 },
  { date: "2009-09-30", ratePct: 0.753 },
  { date: "2009-10-01", ratePct: 0.754 },
  { date: "2009-10-02", ratePct: 0.752 },
  { date: "2009-10-05", ratePct: 0.746 },
  { date: "2009-10-06", ratePct: 0.744 },
  { date: "2009-10-07", ratePct: 0.74 },
  { date: "2009-10-08", ratePct: 0.741 },
  { date: "2009-10-09", ratePct: 0.743 },
  { date: "2009-10-12", ratePct: 0.743 },
  { date: "2009-10-13", ratePct: 0.742 },
  { date: "2009-10-14", ratePct: 0.742 },
  { date: "2009-10-15", ratePct: 0.74 },
  { date: "2009-10-16", ratePct: 0.739 },
  { date: "2009-10-19", ratePct: 0.739 },
  { date: "2009-10-20", ratePct: 0.737 },
  { date: "2009-10-21", ratePct: 0.735 },
  { date: "2009-10-22", ratePct: 0.733 },
  { date: "2009-10-23", ratePct: 0.73 },
  { date: "2009-10-26", ratePct: 0.731 },
  { date: "2009-10-27", ratePct: 0.728 },
  { date: "2009-10-28", ratePct: 0.724 },
  { date: "2009-10-29", ratePct: 0.722 },
  { date: "2009-10-30", ratePct: 0.72 },
  { date: "2009-11-02", ratePct: 0.722 },
  { date: "2009-11-03", ratePct: 0.72 },
  { date: "2009-11-04", ratePct: 0.719 },
  { date: "2009-11-05", ratePct: 0.716 },
  { date: "2009-11-06", ratePct: 0.716 },
  { date: "2009-11-09", ratePct: 0.715 },
  { date: "2009-11-10", ratePct: 0.715 },
  { date: "2009-11-11", ratePct: 0.715 },
  { date: "2009-11-12", ratePct: 0.714 },
  { date: "2009-11-13", ratePct: 0.714 },
  { date: "2009-11-16", ratePct: 0.714 },
  { date: "2009-11-17", ratePct: 0.715 },
  { date: "2009-11-18", ratePct: 0.715 },
  { date: "2009-11-19", ratePct: 0.715 },
  { date: "2009-11-20", ratePct: 0.714 },
  { date: "2009-11-23", ratePct: 0.715 },
  { date: "2009-11-24", ratePct: 0.716 },
  { date: "2009-11-25", ratePct: 0.716 },
  { date: "2009-11-26", ratePct: 0.717 },
  { date: "2009-11-27", ratePct: 0.718 },
  { date: "2009-11-30", ratePct: 0.719 },
  { date: "2009-12-01", ratePct: 0.72 },
  { date: "2009-12-02", ratePct: 0.721 },
  { date: "2009-12-03", ratePct: 0.72 },
  { date: "2009-12-04", ratePct: 0.718 },
  { date: "2009-12-07", ratePct: 0.717 },
  { date: "2009-12-08", ratePct: 0.716 },
  { date: "2009-12-09", ratePct: 0.715 },
  { date: "2009-12-10", ratePct: 0.714 },
  { date: "2009-12-11", ratePct: 0.714 },
  { date: "2009-12-14", ratePct: 0.715 },
  { date: "2009-12-15", ratePct: 0.715 },
  { date: "2009-12-16", ratePct: 0.715 },
  { date: "2009-12-17", ratePct: 0.712 },
  { date: "2009-12-18", ratePct: 0.71 },
  { date: "2009-12-21", ratePct: 0.709 },
  { date: "2009-12-22", ratePct: 0.708 },
  { date: "2009-12-23", ratePct: 0.706 },
  { date: "2009-12-24", ratePct: 0.707 },
  { date: "2009-12-28", ratePct: 0.706 },
  { date: "2009-12-29", ratePct: 0.707 },
  { date: "2009-12-30", ratePct: 0.7 },
  { date: "2009-12-31", ratePct: 0.7 },
  { date: "2010-01-04", ratePct: 0.7 },
  { date: "2010-01-05", ratePct: 0.699 },
  { date: "2010-01-06", ratePct: 0.694 },
  { date: "2010-01-07", ratePct: 0.692 },
  { date: "2010-01-08", ratePct: 0.691 },
  { date: "2010-01-11", ratePct: 0.689 },
  { date: "2010-01-12", ratePct: 0.685 },
  { date: "2010-01-13", ratePct: 0.684 },
  { date: "2010-01-14", ratePct: 0.682 },
  { date: "2010-01-15", ratePct: 0.68 },
  { date: "2010-01-18", ratePct: 0.677 },
  { date: "2010-01-19", ratePct: 0.675 },
  { date: "2010-01-20", ratePct: 0.674 },
  { date: "2010-01-21", ratePct: 0.672 },
  { date: "2010-01-22", ratePct: 0.67 },
  { date: "2010-01-25", ratePct: 0.669 },
  { date: "2010-01-26", ratePct: 0.667 },
  { date: "2010-01-27", ratePct: 0.665 },
  { date: "2010-01-28", ratePct: 0.665 },
  { date: "2010-01-29", ratePct: 0.665 },
  { date: "2010-02-01", ratePct: 0.665 },
  { date: "2010-02-02", ratePct: 0.665 },
  { date: "2010-02-03", ratePct: 0.665 },
  { date: "2010-02-04", ratePct: 0.665 },
  { date: "2010-02-05", ratePct: 0.663 },
  { date: "2010-02-08", ratePct: 0.661 },
  { date: "2010-02-09", ratePct: 0.661 },
  { date: "2010-02-10", ratePct: 0.662 },
  { date: "2010-02-11", ratePct: 0.662 },
  { date: "2010-02-12", ratePct: 0.663 },
  { date: "2010-02-15", ratePct: 0.661 },
  { date: "2010-02-16", ratePct: 0.663 },
  { date: "2010-02-17", ratePct: 0.662 },
  { date: "2010-02-18", ratePct: 0.66 },
  { date: "2010-02-19", ratePct: 0.661 },
  { date: "2010-02-22", ratePct: 0.661 },
  { date: "2010-02-23", ratePct: 0.661 },
  { date: "2010-02-24", ratePct: 0.659 },
  { date: "2010-02-25", ratePct: 0.658 },
  { date: "2010-02-26", ratePct: 0.656 },
  { date: "2010-03-01", ratePct: 0.655 },
  { date: "2010-03-02", ratePct: 0.655 },
  { date: "2010-03-03", ratePct: 0.655 },
  { date: "2010-03-04", ratePct: 0.654 },
  { date: "2010-03-05", ratePct: 0.653 },
  { date: "2010-03-08", ratePct: 0.652 },
  { date: "2010-03-09", ratePct: 0.652 },
  { date: "2010-03-10", ratePct: 0.651 },
  { date: "2010-03-11", ratePct: 0.65 },
  { date: "2010-03-12", ratePct: 0.649 },
  { date: "2010-03-15", ratePct: 0.646 },
  { date: "2010-03-16", ratePct: 0.646 },
  { date: "2010-03-17", ratePct: 0.644 },
  { date: "2010-03-18", ratePct: 0.643 },
  { date: "2010-03-19", ratePct: 0.642 },
  { date: "2010-03-22", ratePct: 0.639 },
  { date: "2010-03-23", ratePct: 0.637 },
  { date: "2010-03-24", ratePct: 0.636 },
  { date: "2010-03-25", ratePct: 0.635 },
  { date: "2010-03-26", ratePct: 0.636 },
  { date: "2010-03-29", ratePct: 0.635 },
  { date: "2010-03-30", ratePct: 0.635 },
  { date: "2010-03-31", ratePct: 0.634 },
  { date: "2010-04-01", ratePct: 0.635 },
  { date: "2010-04-06", ratePct: 0.638 },
  { date: "2010-04-07", ratePct: 0.639 },
  { date: "2010-04-08", ratePct: 0.64 },
  { date: "2010-04-09", ratePct: 0.641 },
  { date: "2010-04-12", ratePct: 0.642 },
  { date: "2010-04-13", ratePct: 0.644 },
  { date: "2010-04-14", ratePct: 0.644 },
  { date: "2010-04-15", ratePct: 0.644 },
  { date: "2010-04-16", ratePct: 0.644 },
  { date: "2010-04-19", ratePct: 0.643 },
  { date: "2010-04-20", ratePct: 0.642 },
  { date: "2010-04-21", ratePct: 0.642 },
  { date: "2010-04-22", ratePct: 0.644 },
  { date: "2010-04-23", ratePct: 0.645 },
  { date: "2010-04-26", ratePct: 0.645 },
  { date: "2010-04-27", ratePct: 0.646 },
  { date: "2010-04-28", ratePct: 0.654 },
  { date: "2010-04-29", ratePct: 0.659 },
  { date: "2010-04-30", ratePct: 0.663 },
  { date: "2010-05-03", ratePct: 0.665 },
  { date: "2010-05-04", ratePct: 0.668 },
  { date: "2010-05-05", ratePct: 0.672 },
  { date: "2010-05-06", ratePct: 0.677 },
  { date: "2010-05-07", ratePct: 0.682 },
  { date: "2010-05-10", ratePct: 0.682 },
  { date: "2010-05-11", ratePct: 0.682 },
  { date: "2010-05-12", ratePct: 0.682 },
  { date: "2010-05-13", ratePct: 0.683 },
  { date: "2010-05-14", ratePct: 0.684 },
  { date: "2010-05-17", ratePct: 0.685 },
  { date: "2010-05-18", ratePct: 0.688 },
  { date: "2010-05-19", ratePct: 0.69 },
  { date: "2010-05-20", ratePct: 0.692 },
  { date: "2010-05-21", ratePct: 0.695 },
  { date: "2010-05-24", ratePct: 0.697 },
  { date: "2010-05-25", ratePct: 0.697 },
  { date: "2010-05-26", ratePct: 0.697 },
  { date: "2010-05-27", ratePct: 0.699 },
  { date: "2010-05-28", ratePct: 0.699 },
  { date: "2010-05-31", ratePct: 0.701 },
  { date: "2010-06-01", ratePct: 0.702 },
  { date: "2010-06-02", ratePct: 0.704 },
  { date: "2010-06-03", ratePct: 0.706 },
  { date: "2010-06-04", ratePct: 0.707 },
  { date: "2010-06-07", ratePct: 0.711 },
  { date: "2010-06-08", ratePct: 0.713 },
  { date: "2010-06-09", ratePct: 0.715 },
  { date: "2010-06-10", ratePct: 0.718 },
  { date: "2010-06-11", ratePct: 0.719 },
  { date: "2010-06-14", ratePct: 0.72 },
  { date: "2010-06-15", ratePct: 0.723 },
  { date: "2010-06-16", ratePct: 0.727 },
  { date: "2010-06-17", ratePct: 0.729 },
  { date: "2010-06-18", ratePct: 0.732 },
  { date: "2010-06-21", ratePct: 0.733 },
  { date: "2010-06-22", ratePct: 0.737 },
  { date: "2010-06-23", ratePct: 0.739 },
  { date: "2010-06-24", ratePct: 0.742 },
  { date: "2010-06-25", ratePct: 0.748 },
  { date: "2010-06-28", ratePct: 0.754 },
  { date: "2010-06-29", ratePct: 0.761 },
  { date: "2010-06-30", ratePct: 0.767 },
  { date: "2010-07-01", ratePct: 0.782 },
  { date: "2010-07-02", ratePct: 0.79 },
  { date: "2010-07-05", ratePct: 0.793 },
  { date: "2010-07-06", ratePct: 0.797 },
  { date: "2010-07-07", ratePct: 0.802 },
  { date: "2010-07-08", ratePct: 0.81 },
  { date: "2010-07-09", ratePct: 0.822 },
  { date: "2010-07-12", ratePct: 0.827 },
  { date: "2010-07-13", ratePct: 0.835 },
  { date: "2010-07-14", ratePct: 0.84 },
  { date: "2010-07-15", ratePct: 0.846 },
  { date: "2010-07-16", ratePct: 0.861 },
  { date: "2010-07-19", ratePct: 0.87 },
  { date: "2010-07-20", ratePct: 0.876 },
  { date: "2010-07-21", ratePct: 0.881 },
  { date: "2010-07-22", ratePct: 0.884 },
  { date: "2010-07-23", ratePct: 0.885 },
  { date: "2010-07-26", ratePct: 0.889 },
  { date: "2010-07-27", ratePct: 0.893 },
  { date: "2010-07-28", ratePct: 0.896 },
  { date: "2010-07-29", ratePct: 0.899 },
  { date: "2010-07-30", ratePct: 0.896 },
  { date: "2010-08-02", ratePct: 0.898 },
  { date: "2010-08-03", ratePct: 0.899 },
  { date: "2010-08-04", ratePct: 0.9 },
  { date: "2010-08-05", ratePct: 0.904 },
  { date: "2010-08-06", ratePct: 0.905 },
  { date: "2010-08-09", ratePct: 0.904 },
  { date: "2010-08-10", ratePct: 0.904 },
  { date: "2010-08-11", ratePct: 0.903 },
  { date: "2010-08-12", ratePct: 0.899 },
  { date: "2010-08-13", ratePct: 0.898 },
  { date: "2010-08-16", ratePct: 0.896 },
  { date: "2010-08-17", ratePct: 0.895 },
  { date: "2010-08-18", ratePct: 0.894 },
  { date: "2010-08-19", ratePct: 0.891 },
  { date: "2010-08-20", ratePct: 0.89 },
  { date: "2010-08-23", ratePct: 0.891 },
  { date: "2010-08-24", ratePct: 0.889 },
  { date: "2010-08-25", ratePct: 0.89 },
  { date: "2010-08-26", ratePct: 0.889 },
  { date: "2010-08-27", ratePct: 0.888 },
  { date: "2010-08-30", ratePct: 0.888 },
  { date: "2010-08-31", ratePct: 0.886 },
  { date: "2010-09-01", ratePct: 0.886 },
  { date: "2010-09-02", ratePct: 0.884 },
  { date: "2010-09-03", ratePct: 0.883 },
  { date: "2010-09-06", ratePct: 0.882 },
  { date: "2010-09-07", ratePct: 0.881 },
  { date: "2010-09-08", ratePct: 0.88 },
  { date: "2010-09-09", ratePct: 0.879 },
  { date: "2010-09-10", ratePct: 0.878 },
  { date: "2010-09-13", ratePct: 0.879 },
  { date: "2010-09-14", ratePct: 0.877 },
  { date: "2010-09-15", ratePct: 0.876 },
  { date: "2010-09-16", ratePct: 0.879 },
  { date: "2010-09-17", ratePct: 0.879 },
  { date: "2010-09-20", ratePct: 0.876 },
  { date: "2010-09-21", ratePct: 0.879 },
  { date: "2010-09-22", ratePct: 0.879 },
  { date: "2010-09-23", ratePct: 0.878 },
  { date: "2010-09-24", ratePct: 0.879 },
  { date: "2010-09-27", ratePct: 0.879 },
  { date: "2010-09-28", ratePct: 0.88 },
  { date: "2010-09-29", ratePct: 0.886 },
  { date: "2010-09-30", ratePct: 0.892 },
  { date: "2010-10-01", ratePct: 0.942 },
  { date: "2010-10-04", ratePct: 0.953 },
  { date: "2010-10-05", ratePct: 0.956 },
  { date: "2010-10-06", ratePct: 0.959 },
  { date: "2010-10-07", ratePct: 0.965 },
  { date: "2010-10-08", ratePct: 0.972 },
  { date: "2010-10-11", ratePct: 0.977 },
  { date: "2010-10-12", ratePct: 0.982 },
  { date: "2010-10-13", ratePct: 0.985 },
  { date: "2010-10-14", ratePct: 0.987 },
  { date: "2010-10-15", ratePct: 0.993 },
  { date: "2010-10-18", ratePct: 1 },
  { date: "2010-10-19", ratePct: 1.008 },
  { date: "2010-10-20", ratePct: 1.016 },
  { date: "2010-10-21", ratePct: 1.025 },
  { date: "2010-10-22", ratePct: 1.029 },
  { date: "2010-10-25", ratePct: 1.032 },
  { date: "2010-10-26", ratePct: 1.037 },
  { date: "2010-10-27", ratePct: 1.043 },
  { date: "2010-10-28", ratePct: 1.045 },
  { date: "2010-10-29", ratePct: 1.045 },
  { date: "2010-11-01", ratePct: 1.046 },
  { date: "2010-11-02", ratePct: 1.047 },
  { date: "2010-11-03", ratePct: 1.049 },
  { date: "2010-11-04", ratePct: 1.05 },
  { date: "2010-11-05", ratePct: 1.05 },
  { date: "2010-11-08", ratePct: 1.05 },
  { date: "2010-11-09", ratePct: 1.049 },
  { date: "2010-11-10", ratePct: 1.048 },
  { date: "2010-11-11", ratePct: 1.05 },
  { date: "2010-11-12", ratePct: 1.049 },
  { date: "2010-11-15", ratePct: 1.048 },
  { date: "2010-11-16", ratePct: 1.046 },
  { date: "2010-11-17", ratePct: 1.044 },
  { date: "2010-11-18", ratePct: 1.041 },
  { date: "2010-11-19", ratePct: 1.04 },
  { date: "2010-11-22", ratePct: 1.039 },
  { date: "2010-11-23", ratePct: 1.035 },
  { date: "2010-11-24", ratePct: 1.03 },
  { date: "2010-11-25", ratePct: 1.031 },
  { date: "2010-11-26", ratePct: 1.028 },
  { date: "2010-11-29", ratePct: 1.027 },
  { date: "2010-11-30", ratePct: 1.028 },
  { date: "2010-12-01", ratePct: 1.026 },
  { date: "2010-12-02", ratePct: 1.027 },
  { date: "2010-12-03", ratePct: 1.027 },
  { date: "2010-12-06", ratePct: 1.028 },
  { date: "2010-12-07", ratePct: 1.029 },
  { date: "2010-12-08", ratePct: 1.029 },
  { date: "2010-12-09", ratePct: 1.029 },
  { date: "2010-12-10", ratePct: 1.028 },
  { date: "2010-12-13", ratePct: 1.026 },
  { date: "2010-12-14", ratePct: 1.026 },
  { date: "2010-12-15", ratePct: 1.025 },
  { date: "2010-12-16", ratePct: 1.024 },
  { date: "2010-12-17", ratePct: 1.023 },
  { date: "2010-12-20", ratePct: 1.022 },
  { date: "2010-12-21", ratePct: 1.022 },
  { date: "2010-12-22", ratePct: 1.021 },
  { date: "2010-12-23", ratePct: 1.015 },
  { date: "2010-12-24", ratePct: 1.014 },
  { date: "2010-12-27", ratePct: 1.014 },
  { date: "2010-12-28", ratePct: 1.014 },
  { date: "2010-12-29", ratePct: 1.013 },
  { date: "2010-12-30", ratePct: 1.01 },
  { date: "2010-12-31", ratePct: 1.006 },
  { date: "2011-01-03", ratePct: 1.001 },
  { date: "2011-01-04", ratePct: 0.999 },
  { date: "2011-01-05", ratePct: 0.998 },
  { date: "2011-01-06", ratePct: 0.997 },
  { date: "2011-01-07", ratePct: 0.997 },
  { date: "2011-01-10", ratePct: 0.995 },
  { date: "2011-01-11", ratePct: 0.995 },
  { date: "2011-01-12", ratePct: 0.995 },
  { date: "2011-01-13", ratePct: 0.998 },
  { date: "2011-01-14", ratePct: 1.006 },
  { date: "2011-01-17", ratePct: 1.009 },
  { date: "2011-01-18", ratePct: 1.012 },
  { date: "2011-01-19", ratePct: 1.014 },
  { date: "2011-01-20", ratePct: 1.016 },
  { date: "2011-01-21", ratePct: 1.025 },
  { date: "2011-01-24", ratePct: 1.029 },
  { date: "2011-01-25", ratePct: 1.031 },
  { date: "2011-01-26", ratePct: 1.051 },
  { date: "2011-01-27", ratePct: 1.057 },
  { date: "2011-01-28", ratePct: 1.063 },
  { date: "2011-01-31", ratePct: 1.074 },
  { date: "2011-02-01", ratePct: 1.082 },
  { date: "2011-02-02", ratePct: 1.083 },
  { date: "2011-02-03", ratePct: 1.087 },
  { date: "2011-02-04", ratePct: 1.088 },
  { date: "2011-02-07", ratePct: 1.084 },
  { date: "2011-02-08", ratePct: 1.079 },
  { date: "2011-02-09", ratePct: 1.089 },
  { date: "2011-02-10", ratePct: 1.094 },
  { date: "2011-02-11", ratePct: 1.093 },
  { date: "2011-02-14", ratePct: 1.091 },
  { date: "2011-02-15", ratePct: 1.09 },
  { date: "2011-02-16", ratePct: 1.089 },
  { date: "2011-02-17", ratePct: 1.086 },
  { date: "2011-02-18", ratePct: 1.078 },
  { date: "2011-02-21", ratePct: 1.079 },
  { date: "2011-02-22", ratePct: 1.082 },
  { date: "2011-02-23", ratePct: 1.087 },
  { date: "2011-02-24", ratePct: 1.088 },
  { date: "2011-02-25", ratePct: 1.092 },
  { date: "2011-02-28", ratePct: 1.094 },
  { date: "2011-03-01", ratePct: 1.096 },
  { date: "2011-03-02", ratePct: 1.095 },
  { date: "2011-03-03", ratePct: 1.098 },
  { date: "2011-03-04", ratePct: 1.162 },
  { date: "2011-03-07", ratePct: 1.172 },
  { date: "2011-03-08", ratePct: 1.18 },
  { date: "2011-03-09", ratePct: 1.179 },
  { date: "2011-03-10", ratePct: 1.175 },
  { date: "2011-03-11", ratePct: 1.173 },
  { date: "2011-03-14", ratePct: 1.174 },
  { date: "2011-03-15", ratePct: 1.167 },
  { date: "2011-03-16", ratePct: 1.17 },
  { date: "2011-03-17", ratePct: 1.17 },
  { date: "2011-03-18", ratePct: 1.172 },
  { date: "2011-03-21", ratePct: 1.179 },
  { date: "2011-03-22", ratePct: 1.185 },
  { date: "2011-03-23", ratePct: 1.191 },
  { date: "2011-03-24", ratePct: 1.197 },
  { date: "2011-03-25", ratePct: 1.203 },
  { date: "2011-03-28", ratePct: 1.21 },
  { date: "2011-03-29", ratePct: 1.219 },
  { date: "2011-03-30", ratePct: 1.231 },
  { date: "2011-03-31", ratePct: 1.239 },
  { date: "2011-04-01", ratePct: 1.249 },
  { date: "2011-04-04", ratePct: 1.255 },
  { date: "2011-04-05", ratePct: 1.262 },
  { date: "2011-04-06", ratePct: 1.269 },
  { date: "2011-04-07", ratePct: 1.28 },
  { date: "2011-04-08", ratePct: 1.294 },
  { date: "2011-04-11", ratePct: 1.311 },
  { date: "2011-04-12", ratePct: 1.32 },
  { date: "2011-04-13", ratePct: 1.327 },
  { date: "2011-04-14", ratePct: 1.332 },
  { date: "2011-04-15", ratePct: 1.332 },
  { date: "2011-04-18", ratePct: 1.338 },
  { date: "2011-04-19", ratePct: 1.343 },
  { date: "2011-04-20", ratePct: 1.349 },
  { date: "2011-04-21", ratePct: 1.356 },
  { date: "2011-04-26", ratePct: 1.361 },
  { date: "2011-04-27", ratePct: 1.365 },
  { date: "2011-04-28", ratePct: 1.375 },
  { date: "2011-04-29", ratePct: 1.385 },
  { date: "2011-05-02", ratePct: 1.395 },
  { date: "2011-05-03", ratePct: 1.402 },
  { date: "2011-05-04", ratePct: 1.415 },
  { date: "2011-05-05", ratePct: 1.424 },
  { date: "2011-05-06", ratePct: 1.419 },
  { date: "2011-05-09", ratePct: 1.423 },
  { date: "2011-05-10", ratePct: 1.426 },
  { date: "2011-05-11", ratePct: 1.42 },
  { date: "2011-05-12", ratePct: 1.42 },
  { date: "2011-05-13", ratePct: 1.425 },
  { date: "2011-05-16", ratePct: 1.426 },
  { date: "2011-05-17", ratePct: 1.428 },
  { date: "2011-05-18", ratePct: 1.431 },
  { date: "2011-05-19", ratePct: 1.434 },
  { date: "2011-05-20", ratePct: 1.435 },
  { date: "2011-05-23", ratePct: 1.434 },
  { date: "2011-05-24", ratePct: 1.434 },
  { date: "2011-05-25", ratePct: 1.435 },
  { date: "2011-05-26", ratePct: 1.433 },
  { date: "2011-05-27", ratePct: 1.43 },
  { date: "2011-05-30", ratePct: 1.43 },
  { date: "2011-05-31", ratePct: 1.433 },
  { date: "2011-06-01", ratePct: 1.434 },
  { date: "2011-06-02", ratePct: 1.435 },
  { date: "2011-06-03", ratePct: 1.436 },
  { date: "2011-06-06", ratePct: 1.438 },
  { date: "2011-06-07", ratePct: 1.443 },
  { date: "2011-06-08", ratePct: 1.452 },
  { date: "2011-06-09", ratePct: 1.464 },
  { date: "2011-06-10", ratePct: 1.469 },
  { date: "2011-06-13", ratePct: 1.471 },
  { date: "2011-06-14", ratePct: 1.477 },
  { date: "2011-06-15", ratePct: 1.485 },
  { date: "2011-06-16", ratePct: 1.494 },
  { date: "2011-06-17", ratePct: 1.502 },
  { date: "2011-06-20", ratePct: 1.51 },
  { date: "2011-06-21", ratePct: 1.52 },
  { date: "2011-06-22", ratePct: 1.526 },
  { date: "2011-06-23", ratePct: 1.526 },
  { date: "2011-06-24", ratePct: 1.528 },
  { date: "2011-06-27", ratePct: 1.524 },
  { date: "2011-06-28", ratePct: 1.531 },
  { date: "2011-06-29", ratePct: 1.537 },
  { date: "2011-06-30", ratePct: 1.547 },
  { date: "2011-07-01", ratePct: 1.556 },
  { date: "2011-07-04", ratePct: 1.563 },
  { date: "2011-07-05", ratePct: 1.568 },
  { date: "2011-07-06", ratePct: 1.569 },
  { date: "2011-07-07", ratePct: 1.583 },
  { date: "2011-07-08", ratePct: 1.593 },
  { date: "2011-07-11", ratePct: 1.601 },
  { date: "2011-07-12", ratePct: 1.599 },
  { date: "2011-07-13", ratePct: 1.605 },
  { date: "2011-07-14", ratePct: 1.606 },
  { date: "2011-07-15", ratePct: 1.608 },
  { date: "2011-07-18", ratePct: 1.608 },
  { date: "2011-07-19", ratePct: 1.609 },
  { date: "2011-07-20", ratePct: 1.604 },
  { date: "2011-07-21", ratePct: 1.608 },
  { date: "2011-07-22", ratePct: 1.611 },
  { date: "2011-07-25", ratePct: 1.613 },
  { date: "2011-07-26", ratePct: 1.615 },
  { date: "2011-07-27", ratePct: 1.612 },
  { date: "2011-07-28", ratePct: 1.61 },
  { date: "2011-07-29", ratePct: 1.609 },
  { date: "2011-08-01", ratePct: 1.609 },
  { date: "2011-08-02", ratePct: 1.605 },
  { date: "2011-08-03", ratePct: 1.601 },
  { date: "2011-08-04", ratePct: 1.602 },
  { date: "2011-08-05", ratePct: 1.564 },
  { date: "2011-08-08", ratePct: 1.56 },
  { date: "2011-08-09", ratePct: 1.555 },
  { date: "2011-08-10", ratePct: 1.545 },
  { date: "2011-08-11", ratePct: 1.535 },
  { date: "2011-08-12", ratePct: 1.535 },
  { date: "2011-08-15", ratePct: 1.538 },
  { date: "2011-08-16", ratePct: 1.536 },
  { date: "2011-08-17", ratePct: 1.535 },
  { date: "2011-08-18", ratePct: 1.535 },
  { date: "2011-08-19", ratePct: 1.533 },
  { date: "2011-08-22", ratePct: 1.534 },
  { date: "2011-08-23", ratePct: 1.536 },
  { date: "2011-08-24", ratePct: 1.539 },
  { date: "2011-08-25", ratePct: 1.539 },
  { date: "2011-08-26", ratePct: 1.54 },
  { date: "2011-08-29", ratePct: 1.54 },
  { date: "2011-08-30", ratePct: 1.54 },
  { date: "2011-08-31", ratePct: 1.542 },
  { date: "2011-09-01", ratePct: 1.543 },
  { date: "2011-09-02", ratePct: 1.541 },
  { date: "2011-09-05", ratePct: 1.537 },
  { date: "2011-09-06", ratePct: 1.534 },
  { date: "2011-09-07", ratePct: 1.532 },
  { date: "2011-09-08", ratePct: 1.532 },
  { date: "2011-09-09", ratePct: 1.53 },
  { date: "2011-09-12", ratePct: 1.527 },
  { date: "2011-09-13", ratePct: 1.528 },
  { date: "2011-09-14", ratePct: 1.529 },
  { date: "2011-09-15", ratePct: 1.531 },
  { date: "2011-09-16", ratePct: 1.535 },
  { date: "2011-09-19", ratePct: 1.536 },
  { date: "2011-09-20", ratePct: 1.537 },
  { date: "2011-09-21", ratePct: 1.537 },
  { date: "2011-09-22", ratePct: 1.536 },
  { date: "2011-09-23", ratePct: 1.537 },
  { date: "2011-09-26", ratePct: 1.535 },
  { date: "2011-09-27", ratePct: 1.537 },
  { date: "2011-09-28", ratePct: 1.544 },
  { date: "2011-09-29", ratePct: 1.55 },
  { date: "2011-09-30", ratePct: 1.554 },
  { date: "2011-10-03", ratePct: 1.557 },
  { date: "2011-10-04", ratePct: 1.557 },
  { date: "2011-10-05", ratePct: 1.558 },
  { date: "2011-10-06", ratePct: 1.556 },
  { date: "2011-10-07", ratePct: 1.566 },
  { date: "2011-10-10", ratePct: 1.567 },
  { date: "2011-10-11", ratePct: 1.57 },
  { date: "2011-10-12", ratePct: 1.571 },
  { date: "2011-10-13", ratePct: 1.572 },
  { date: "2011-10-14", ratePct: 1.574 },
  { date: "2011-10-17", ratePct: 1.578 },
  { date: "2011-10-18", ratePct: 1.579 },
  { date: "2011-10-19", ratePct: 1.582 },
  { date: "2011-10-20", ratePct: 1.584 },
  { date: "2011-10-21", ratePct: 1.585 },
  { date: "2011-10-24", ratePct: 1.588 },
  { date: "2011-10-25", ratePct: 1.588 },
  { date: "2011-10-26", ratePct: 1.588 },
  { date: "2011-10-27", ratePct: 1.59 },
  { date: "2011-10-28", ratePct: 1.592 },
  { date: "2011-10-31", ratePct: 1.591 },
  { date: "2011-11-01", ratePct: 1.585 },
  { date: "2011-11-02", ratePct: 1.584 },
  { date: "2011-11-03", ratePct: 1.58 },
  { date: "2011-11-04", ratePct: 1.488 },
  { date: "2011-11-07", ratePct: 1.476 },
  { date: "2011-11-08", ratePct: 1.474 },
  { date: "2011-11-09", ratePct: 1.47 },
  { date: "2011-11-10", ratePct: 1.464 },
  { date: "2011-11-11", ratePct: 1.462 },
  { date: "2011-11-14", ratePct: 1.459 },
  { date: "2011-11-15", ratePct: 1.457 },
  { date: "2011-11-16", ratePct: 1.458 },
  { date: "2011-11-17", ratePct: 1.46 },
  { date: "2011-11-18", ratePct: 1.465 },
  { date: "2011-11-21", ratePct: 1.467 },
  { date: "2011-11-22", ratePct: 1.467 },
  { date: "2011-11-23", ratePct: 1.471 },
  { date: "2011-11-24", ratePct: 1.474 },
  { date: "2011-11-25", ratePct: 1.475 },
  { date: "2011-11-28", ratePct: 1.477 },
  { date: "2011-11-29", ratePct: 1.477 },
  { date: "2011-11-30", ratePct: 1.473 },
  { date: "2011-12-01", ratePct: 1.469 },
  { date: "2011-12-02", ratePct: 1.469 },
  { date: "2011-12-05", ratePct: 1.47 },
  { date: "2011-12-06", ratePct: 1.472 },
  { date: "2011-12-07", ratePct: 1.472 },
  { date: "2011-12-08", ratePct: 1.47 },
  { date: "2011-12-09", ratePct: 1.437 },
  { date: "2011-12-12", ratePct: 1.43 },
  { date: "2011-12-13", ratePct: 1.426 },
  { date: "2011-12-14", ratePct: 1.423 },
  { date: "2011-12-15", ratePct: 1.419 },
  { date: "2011-12-16", ratePct: 1.417 },
  { date: "2011-12-19", ratePct: 1.418 },
  { date: "2011-12-20", ratePct: 1.418 },
  { date: "2011-12-21", ratePct: 1.416 },
  { date: "2011-12-22", ratePct: 1.41 },
  { date: "2011-12-23", ratePct: 1.404 },
  { date: "2011-12-27", ratePct: 1.396 },
  { date: "2011-12-28", ratePct: 1.387 },
  { date: "2011-12-29", ratePct: 1.369 },
  { date: "2011-12-30", ratePct: 1.356 },
  { date: "2012-01-02", ratePct: 1.343 },
  { date: "2012-01-03", ratePct: 1.333 },
  { date: "2012-01-04", ratePct: 1.319 },
  { date: "2012-01-05", ratePct: 1.303 },
  { date: "2012-01-06", ratePct: 1.288 },
  { date: "2012-01-09", ratePct: 1.276 },
  { date: "2012-01-10", ratePct: 1.267 },
  { date: "2012-01-11", ratePct: 1.257 },
  { date: "2012-01-12", ratePct: 1.245 },
  { date: "2012-01-13", ratePct: 1.231 },
  { date: "2012-01-16", ratePct: 1.222 },
  { date: "2012-01-17", ratePct: 1.213 },
  { date: "2012-01-18", ratePct: 1.204 },
  { date: "2012-01-19", ratePct: 1.195 },
  { date: "2012-01-20", ratePct: 1.182 },
  { date: "2012-01-23", ratePct: 1.168 },
  { date: "2012-01-24", ratePct: 1.158 },
  { date: "2012-01-25", ratePct: 1.149 },
  { date: "2012-01-26", ratePct: 1.142 },
  { date: "2012-01-27", ratePct: 1.138 },
  { date: "2012-01-30", ratePct: 1.131 },
  { date: "2012-01-31", ratePct: 1.125 },
  { date: "2012-02-01", ratePct: 1.115 },
  { date: "2012-02-02", ratePct: 1.108 },
  { date: "2012-02-03", ratePct: 1.102 },
  { date: "2012-02-06", ratePct: 1.094 },
  { date: "2012-02-07", ratePct: 1.086 },
  { date: "2012-02-08", ratePct: 1.077 },
  { date: "2012-02-09", ratePct: 1.07 },
  { date: "2012-02-10", ratePct: 1.063 },
  { date: "2012-02-13", ratePct: 1.057 },
  { date: "2012-02-14", ratePct: 1.051 },
  { date: "2012-02-15", ratePct: 1.045 },
  { date: "2012-02-16", ratePct: 1.041 },
  { date: "2012-02-17", ratePct: 1.036 },
  { date: "2012-02-20", ratePct: 1.031 },
  { date: "2012-02-21", ratePct: 1.026 },
  { date: "2012-02-22", ratePct: 1.021 },
  { date: "2012-02-23", ratePct: 1.014 },
  { date: "2012-02-24", ratePct: 1.006 },
  { date: "2012-02-27", ratePct: 0.997 },
  { date: "2012-02-28", ratePct: 0.991 },
  { date: "2012-02-29", ratePct: 0.983 },
  { date: "2012-03-01", ratePct: 0.967 },
  { date: "2012-03-02", ratePct: 0.948 },
  { date: "2012-03-05", ratePct: 0.934 },
  { date: "2012-03-06", ratePct: 0.92 },
  { date: "2012-03-07", ratePct: 0.911 },
  { date: "2012-03-08", ratePct: 0.902 },
  { date: "2012-03-09", ratePct: 0.894 },
  { date: "2012-03-12", ratePct: 0.884 },
  { date: "2012-03-13", ratePct: 0.876 },
  { date: "2012-03-14", ratePct: 0.871 },
  { date: "2012-03-15", ratePct: 0.862 },
  { date: "2012-03-16", ratePct: 0.853 },
  { date: "2012-03-19", ratePct: 0.842 },
  { date: "2012-03-20", ratePct: 0.832 },
  { date: "2012-03-21", ratePct: 0.824 },
  { date: "2012-03-22", ratePct: 0.817 },
  { date: "2012-03-23", ratePct: 0.808 },
  { date: "2012-03-26", ratePct: 0.8 },
  { date: "2012-03-27", ratePct: 0.794 },
  { date: "2012-03-28", ratePct: 0.787 },
  { date: "2012-03-29", ratePct: 0.783 },
  { date: "2012-03-30", ratePct: 0.777 },
  { date: "2012-04-02", ratePct: 0.771 },
  { date: "2012-04-03", ratePct: 0.77 },
  { date: "2012-04-04", ratePct: 0.768 },
  { date: "2012-04-05", ratePct: 0.766 },
  { date: "2012-04-10", ratePct: 0.764 },
  { date: "2012-04-11", ratePct: 0.76 },
  { date: "2012-04-12", ratePct: 0.757 },
  { date: "2012-04-13", ratePct: 0.753 },
  { date: "2012-04-16", ratePct: 0.75 },
  { date: "2012-04-17", ratePct: 0.746 },
  { date: "2012-04-18", ratePct: 0.741 },
  { date: "2012-04-19", ratePct: 0.737 },
  { date: "2012-04-20", ratePct: 0.734 },
  { date: "2012-04-23", ratePct: 0.731 },
  { date: "2012-04-24", ratePct: 0.727 },
  { date: "2012-04-25", ratePct: 0.724 },
  { date: "2012-04-26", ratePct: 0.72 },
  { date: "2012-04-27", ratePct: 0.715 },
  { date: "2012-04-30", ratePct: 0.708 },
  { date: "2012-05-02", ratePct: 0.704 },
  { date: "2012-05-03", ratePct: 0.7 },
  { date: "2012-05-04", ratePct: 0.697 },
  { date: "2012-05-07", ratePct: 0.693 },
  { date: "2012-05-08", ratePct: 0.692 },
  { date: "2012-05-09", ratePct: 0.691 },
  { date: "2012-05-10", ratePct: 0.69 },
  { date: "2012-05-11", ratePct: 0.69 },
  { date: "2012-05-14", ratePct: 0.689 },
  { date: "2012-05-15", ratePct: 0.687 },
  { date: "2012-05-16", ratePct: 0.685 },
  { date: "2012-05-17", ratePct: 0.686 },
  { date: "2012-05-18", ratePct: 0.684 },
  { date: "2012-05-21", ratePct: 0.682 },
  { date: "2012-05-22", ratePct: 0.681 },
  { date: "2012-05-23", ratePct: 0.68 },
  { date: "2012-05-24", ratePct: 0.677 },
  { date: "2012-05-25", ratePct: 0.675 },
  { date: "2012-05-28", ratePct: 0.673 },
  { date: "2012-05-29", ratePct: 0.673 },
  { date: "2012-05-30", ratePct: 0.671 },
  { date: "2012-05-31", ratePct: 0.668 },
  { date: "2012-06-01", ratePct: 0.665 },
  { date: "2012-06-04", ratePct: 0.664 },
  { date: "2012-06-05", ratePct: 0.663 },
  { date: "2012-06-06", ratePct: 0.663 },
  { date: "2012-06-07", ratePct: 0.663 },
  { date: "2012-06-08", ratePct: 0.663 },
  { date: "2012-06-11", ratePct: 0.661 },
  { date: "2012-06-12", ratePct: 0.661 },
  { date: "2012-06-13", ratePct: 0.662 },
  { date: "2012-06-14", ratePct: 0.663 },
  { date: "2012-06-15", ratePct: 0.662 },
  { date: "2012-06-18", ratePct: 0.659 },
  { date: "2012-06-19", ratePct: 0.657 },
  { date: "2012-06-20", ratePct: 0.657 },
  { date: "2012-06-21", ratePct: 0.655 },
  { date: "2012-06-22", ratePct: 0.654 },
  { date: "2012-06-25", ratePct: 0.653 },
  { date: "2012-06-26", ratePct: 0.653 },
  { date: "2012-06-27", ratePct: 0.652 },
  { date: "2012-06-28", ratePct: 0.653 },
  { date: "2012-06-29", ratePct: 0.653 },
  { date: "2012-07-02", ratePct: 0.652 },
  { date: "2012-07-03", ratePct: 0.65 },
  { date: "2012-07-04", ratePct: 0.645 },
  { date: "2012-07-05", ratePct: 0.641 },
  { date: "2012-07-06", ratePct: 0.549 },
  { date: "2012-07-09", ratePct: 0.531 },
  { date: "2012-07-10", ratePct: 0.521 },
  { date: "2012-07-11", ratePct: 0.512 },
  { date: "2012-07-12", ratePct: 0.497 },
  { date: "2012-07-13", ratePct: 0.486 },
  { date: "2012-07-16", ratePct: 0.477 },
  { date: "2012-07-17", ratePct: 0.47 },
  { date: "2012-07-18", ratePct: 0.464 },
  { date: "2012-07-19", ratePct: 0.458 },
  { date: "2012-07-20", ratePct: 0.451 },
  { date: "2012-07-23", ratePct: 0.442 },
  { date: "2012-07-24", ratePct: 0.435 },
  { date: "2012-07-25", ratePct: 0.427 },
  { date: "2012-07-26", ratePct: 0.422 },
  { date: "2012-07-27", ratePct: 0.415 },
  { date: "2012-07-30", ratePct: 0.401 },
  { date: "2012-07-31", ratePct: 0.389 },
  { date: "2012-08-01", ratePct: 0.381 },
  { date: "2012-08-02", ratePct: 0.375 },
  { date: "2012-08-03", ratePct: 0.375 },
  { date: "2012-08-06", ratePct: 0.374 },
  { date: "2012-08-07", ratePct: 0.37 },
  { date: "2012-08-08", ratePct: 0.366 },
  { date: "2012-08-09", ratePct: 0.36 },
  { date: "2012-08-10", ratePct: 0.353 },
  { date: "2012-08-13", ratePct: 0.349 },
  { date: "2012-08-14", ratePct: 0.345 },
  { date: "2012-08-15", ratePct: 0.341 },
  { date: "2012-08-16", ratePct: 0.339 },
  { date: "2012-08-17", ratePct: 0.334 },
  { date: "2012-08-20", ratePct: 0.325 },
  { date: "2012-08-21", ratePct: 0.318 },
  { date: "2012-08-22", ratePct: 0.31 },
  { date: "2012-08-23", ratePct: 0.303 },
  { date: "2012-08-24", ratePct: 0.295 },
  { date: "2012-08-27", ratePct: 0.293 },
  { date: "2012-08-28", ratePct: 0.29 },
  { date: "2012-08-29", ratePct: 0.288 },
  { date: "2012-08-30", ratePct: 0.283 },
  { date: "2012-08-31", ratePct: 0.278 },
  { date: "2012-09-03", ratePct: 0.276 },
  { date: "2012-09-04", ratePct: 0.273 },
  { date: "2012-09-05", ratePct: 0.269 },
  { date: "2012-09-06", ratePct: 0.266 },
  { date: "2012-09-07", ratePct: 0.265 },
  { date: "2012-09-10", ratePct: 0.261 },
  { date: "2012-09-11", ratePct: 0.258 },
  { date: "2012-09-12", ratePct: 0.255 },
  { date: "2012-09-13", ratePct: 0.252 },
  { date: "2012-09-14", ratePct: 0.25 },
  { date: "2012-09-17", ratePct: 0.248 },
  { date: "2012-09-18", ratePct: 0.244 },
  { date: "2012-09-19", ratePct: 0.238 },
  { date: "2012-09-20", ratePct: 0.233 },
  { date: "2012-09-21", ratePct: 0.228 },
  { date: "2012-09-24", ratePct: 0.225 },
  { date: "2012-09-25", ratePct: 0.222 },
  { date: "2012-09-26", ratePct: 0.222 },
  { date: "2012-09-27", ratePct: 0.221 },
  { date: "2012-09-28", ratePct: 0.22 },
  { date: "2012-10-01", ratePct: 0.223 },
  { date: "2012-10-02", ratePct: 0.22 },
  { date: "2012-10-03", ratePct: 0.218 },
  { date: "2012-10-04", ratePct: 0.216 },
  { date: "2012-10-05", ratePct: 0.215 },
  { date: "2012-10-08", ratePct: 0.214 },
  { date: "2012-10-09", ratePct: 0.212 },
  { date: "2012-10-10", ratePct: 0.211 },
  { date: "2012-10-11", ratePct: 0.21 },
  { date: "2012-10-12", ratePct: 0.21 },
  { date: "2012-10-15", ratePct: 0.209 },
  { date: "2012-10-16", ratePct: 0.208 },
  { date: "2012-10-17", ratePct: 0.207 },
  { date: "2012-10-18", ratePct: 0.205 },
  { date: "2012-10-19", ratePct: 0.204 },
  { date: "2012-10-22", ratePct: 0.204 },
  { date: "2012-10-23", ratePct: 0.203 },
  { date: "2012-10-24", ratePct: 0.202 },
  { date: "2012-10-25", ratePct: 0.201 },
  { date: "2012-10-26", ratePct: 0.199 },
  { date: "2012-10-29", ratePct: 0.196 },
  { date: "2012-10-30", ratePct: 0.198 },
  { date: "2012-10-31", ratePct: 0.197 },
  { date: "2012-11-01", ratePct: 0.197 },
  { date: "2012-11-02", ratePct: 0.197 },
  { date: "2012-11-05", ratePct: 0.196 },
  { date: "2012-11-06", ratePct: 0.196 },
  { date: "2012-11-07", ratePct: 0.196 },
  { date: "2012-11-08", ratePct: 0.194 },
  { date: "2012-11-09", ratePct: 0.193 },
  { date: "2012-11-12", ratePct: 0.192 },
  { date: "2012-11-13", ratePct: 0.192 },
  { date: "2012-11-14", ratePct: 0.191 },
  { date: "2012-11-15", ratePct: 0.191 },
  { date: "2012-11-16", ratePct: 0.191 },
  { date: "2012-11-19", ratePct: 0.191 },
  { date: "2012-11-20", ratePct: 0.19 },
  { date: "2012-11-21", ratePct: 0.19 },
  { date: "2012-11-22", ratePct: 0.19 },
  { date: "2012-11-23", ratePct: 0.19 },
  { date: "2012-11-26", ratePct: 0.189 },
  { date: "2012-11-27", ratePct: 0.189 },
  { date: "2012-11-28", ratePct: 0.188 },
  { date: "2012-11-29", ratePct: 0.19 },
  { date: "2012-11-30", ratePct: 0.191 },
  { date: "2012-12-03", ratePct: 0.19 },
  { date: "2012-12-04", ratePct: 0.191 },
  { date: "2012-12-05", ratePct: 0.19 },
  { date: "2012-12-06", ratePct: 0.19 },
  { date: "2012-12-07", ratePct: 0.187 },
  { date: "2012-12-10", ratePct: 0.183 },
  { date: "2012-12-11", ratePct: 0.181 },
  { date: "2012-12-12", ratePct: 0.183 },
  { date: "2012-12-13", ratePct: 0.183 },
  { date: "2012-12-14", ratePct: 0.184 },
  { date: "2012-12-17", ratePct: 0.184 },
  { date: "2012-12-18", ratePct: 0.184 },
  { date: "2012-12-19", ratePct: 0.183 },
  { date: "2012-12-20", ratePct: 0.183 },
  { date: "2012-12-21", ratePct: 0.184 },
  { date: "2012-12-24", ratePct: 0.186 },
  { date: "2012-12-27", ratePct: 0.185 },
  { date: "2012-12-28", ratePct: 0.186 },
  { date: "2012-12-31", ratePct: 0.187 },
  { date: "2013-01-02", ratePct: 0.188 },
  { date: "2013-01-03", ratePct: 0.189 },
  { date: "2013-01-04", ratePct: 0.191 },
  { date: "2013-01-07", ratePct: 0.192 },
  { date: "2013-01-08", ratePct: 0.192 },
  { date: "2013-01-09", ratePct: 0.192 },
  { date: "2013-01-10", ratePct: 0.19 },
  { date: "2013-01-11", ratePct: 0.195 },
  { date: "2013-01-14", ratePct: 0.199 },
  { date: "2013-01-15", ratePct: 0.202 },
  { date: "2013-01-16", ratePct: 0.201 },
  { date: "2013-01-17", ratePct: 0.204 },
  { date: "2013-01-18", ratePct: 0.209 },
  { date: "2013-01-21", ratePct: 0.209 },
  { date: "2013-01-22", ratePct: 0.209 },
  { date: "2013-01-23", ratePct: 0.209 },
  { date: "2013-01-24", ratePct: 0.211 },
  { date: "2013-01-25", ratePct: 0.214 },
  { date: "2013-01-28", ratePct: 0.224 },
  { date: "2013-01-29", ratePct: 0.226 },
  { date: "2013-01-30", ratePct: 0.23 },
  { date: "2013-01-31", ratePct: 0.232 },
  { date: "2013-02-01", ratePct: 0.234 },
  { date: "2013-02-04", ratePct: 0.233 },
  { date: "2013-02-05", ratePct: 0.233 },
  { date: "2013-02-06", ratePct: 0.233 },
  { date: "2013-02-07", ratePct: 0.232 },
  { date: "2013-02-08", ratePct: 0.227 },
  { date: "2013-02-11", ratePct: 0.227 },
  { date: "2013-02-12", ratePct: 0.226 },
  { date: "2013-02-13", ratePct: 0.226 },
  { date: "2013-02-14", ratePct: 0.226 },
  { date: "2013-02-15", ratePct: 0.225 },
  { date: "2013-02-18", ratePct: 0.223 },
  { date: "2013-02-19", ratePct: 0.221 },
  { date: "2013-02-20", ratePct: 0.221 },
  { date: "2013-02-21", ratePct: 0.22 },
  { date: "2013-02-22", ratePct: 0.218 },
  { date: "2013-02-25", ratePct: 0.213 },
  { date: "2013-02-26", ratePct: 0.21 },
  { date: "2013-02-27", ratePct: 0.21 },
  { date: "2013-02-28", ratePct: 0.209 },
  { date: "2013-03-01", ratePct: 0.206 },
  { date: "2013-03-04", ratePct: 0.202 },
  { date: "2013-03-05", ratePct: 0.2 },
  { date: "2013-03-06", ratePct: 0.2 },
  { date: "2013-03-07", ratePct: 0.2 },
  { date: "2013-03-08", ratePct: 0.201 },
  { date: "2013-03-11", ratePct: 0.201 },
  { date: "2013-03-12", ratePct: 0.201 },
  { date: "2013-03-13", ratePct: 0.203 },
  { date: "2013-03-14", ratePct: 0.204 },
  { date: "2013-03-15", ratePct: 0.204 },
  { date: "2013-03-18", ratePct: 0.206 },
  { date: "2013-03-19", ratePct: 0.207 },
  { date: "2013-03-20", ratePct: 0.21 },
  { date: "2013-03-21", ratePct: 0.211 },
  { date: "2013-03-22", ratePct: 0.215 },
  { date: "2013-03-25", ratePct: 0.214 },
  { date: "2013-03-26", ratePct: 0.213 },
  { date: "2013-03-27", ratePct: 0.212 },
  { date: "2013-03-28", ratePct: 0.211 },
  { date: "2013-04-02", ratePct: 0.21 },
  { date: "2013-04-03", ratePct: 0.21 },
  { date: "2013-04-04", ratePct: 0.21 },
  { date: "2013-04-05", ratePct: 0.21 },
  { date: "2013-04-08", ratePct: 0.21 },
  { date: "2013-04-09", ratePct: 0.211 },
  { date: "2013-04-10", ratePct: 0.211 },
  { date: "2013-04-11", ratePct: 0.211 },
  { date: "2013-04-12", ratePct: 0.21 },
  { date: "2013-04-15", ratePct: 0.21 },
  { date: "2013-04-16", ratePct: 0.21 },
  { date: "2013-04-17", ratePct: 0.21 },
  { date: "2013-04-18", ratePct: 0.208 },
  { date: "2013-04-19", ratePct: 0.208 },
  { date: "2013-04-22", ratePct: 0.208 },
  { date: "2013-04-23", ratePct: 0.207 },
  { date: "2013-04-24", ratePct: 0.206 },
  { date: "2013-04-25", ratePct: 0.206 },
  { date: "2013-04-26", ratePct: 0.207 },
  { date: "2013-04-29", ratePct: 0.207 },
  { date: "2013-04-30", ratePct: 0.207 },
  { date: "2013-05-02", ratePct: 0.207 },
  { date: "2013-05-03", ratePct: 0.201 },
  { date: "2013-05-06", ratePct: 0.202 },
  { date: "2013-05-07", ratePct: 0.202 },
  { date: "2013-05-08", ratePct: 0.203 },
  { date: "2013-05-09", ratePct: 0.203 },
  { date: "2013-05-10", ratePct: 0.203 },
  { date: "2013-05-13", ratePct: 0.203 },
  { date: "2013-05-14", ratePct: 0.203 },
  { date: "2013-05-15", ratePct: 0.203 },
  { date: "2013-05-16", ratePct: 0.202 },
  { date: "2013-05-17", ratePct: 0.2 },
  { date: "2013-05-20", ratePct: 0.199 },
  { date: "2013-05-21", ratePct: 0.198 },
  { date: "2013-05-22", ratePct: 0.199 },
  { date: "2013-05-23", ratePct: 0.199 },
  { date: "2013-05-24", ratePct: 0.2 },
  { date: "2013-05-27", ratePct: 0.201 },
  { date: "2013-05-28", ratePct: 0.199 },
  { date: "2013-05-29", ratePct: 0.2 },
  { date: "2013-05-30", ratePct: 0.2 },
  { date: "2013-05-31", ratePct: 0.2 },
  { date: "2013-06-03", ratePct: 0.2 },
  { date: "2013-06-04", ratePct: 0.2 },
  { date: "2013-06-05", ratePct: 0.2 },
  { date: "2013-06-06", ratePct: 0.2 },
  { date: "2013-06-07", ratePct: 0.203 },
  { date: "2013-06-10", ratePct: 0.204 },
  { date: "2013-06-11", ratePct: 0.205 },
  { date: "2013-06-12", ratePct: 0.208 },
  { date: "2013-06-13", ratePct: 0.209 },
  { date: "2013-06-14", ratePct: 0.209 },
  { date: "2013-06-17", ratePct: 0.21 },
  { date: "2013-06-18", ratePct: 0.21 },
  { date: "2013-06-19", ratePct: 0.212 },
  { date: "2013-06-20", ratePct: 0.214 },
  { date: "2013-06-21", ratePct: 0.216 },
  { date: "2013-06-24", ratePct: 0.221 },
  { date: "2013-06-25", ratePct: 0.225 },
  { date: "2013-06-26", ratePct: 0.222 },
  { date: "2013-06-27", ratePct: 0.219 },
  { date: "2013-06-28", ratePct: 0.218 },
  { date: "2013-07-01", ratePct: 0.222 },
  { date: "2013-07-02", ratePct: 0.221 },
  { date: "2013-07-03", ratePct: 0.222 },
  { date: "2013-07-04", ratePct: 0.222 },
  { date: "2013-07-05", ratePct: 0.217 },
  { date: "2013-07-08", ratePct: 0.217 },
  { date: "2013-07-09", ratePct: 0.217 },
  { date: "2013-07-10", ratePct: 0.217 },
  { date: "2013-07-11", ratePct: 0.218 },
  { date: "2013-07-12", ratePct: 0.22 },
  { date: "2013-07-15", ratePct: 0.219 },
  { date: "2013-07-16", ratePct: 0.219 },
  { date: "2013-07-17", ratePct: 0.22 },
  { date: "2013-07-18", ratePct: 0.22 },
  { date: "2013-07-19", ratePct: 0.22 },
  { date: "2013-07-22", ratePct: 0.221 },
  { date: "2013-07-23", ratePct: 0.224 },
  { date: "2013-07-24", ratePct: 0.225 },
  { date: "2013-07-25", ratePct: 0.225 },
  { date: "2013-07-26", ratePct: 0.226 },
  { date: "2013-07-29", ratePct: 0.226 },
  { date: "2013-07-30", ratePct: 0.227 },
  { date: "2013-07-31", ratePct: 0.228 },
  { date: "2013-08-01", ratePct: 0.228 },
  { date: "2013-08-02", ratePct: 0.228 },
  { date: "2013-08-05", ratePct: 0.227 },
  { date: "2013-08-06", ratePct: 0.228 },
  { date: "2013-08-07", ratePct: 0.227 },
  { date: "2013-08-08", ratePct: 0.227 },
  { date: "2013-08-09", ratePct: 0.227 },
  { date: "2013-08-12", ratePct: 0.226 },
  { date: "2013-08-13", ratePct: 0.225 },
  { date: "2013-08-14", ratePct: 0.226 },
  { date: "2013-08-15", ratePct: 0.226 },
  { date: "2013-08-16", ratePct: 0.226 },
  { date: "2013-08-19", ratePct: 0.226 },
  { date: "2013-08-20", ratePct: 0.225 },
  { date: "2013-08-21", ratePct: 0.224 },
  { date: "2013-08-22", ratePct: 0.224 },
  { date: "2013-08-23", ratePct: 0.225 },
  { date: "2013-08-26", ratePct: 0.225 },
  { date: "2013-08-27", ratePct: 0.225 },
  { date: "2013-08-28", ratePct: 0.225 },
  { date: "2013-08-29", ratePct: 0.225 },
  { date: "2013-08-30", ratePct: 0.224 },
  { date: "2013-09-02", ratePct: 0.225 },
  { date: "2013-09-03", ratePct: 0.225 },
  { date: "2013-09-04", ratePct: 0.225 },
  { date: "2013-09-05", ratePct: 0.225 },
  { date: "2013-09-06", ratePct: 0.225 },
  { date: "2013-09-09", ratePct: 0.225 },
  { date: "2013-09-10", ratePct: 0.225 },
  { date: "2013-09-11", ratePct: 0.224 },
  { date: "2013-09-12", ratePct: 0.224 },
  { date: "2013-09-13", ratePct: 0.223 },
  { date: "2013-09-16", ratePct: 0.223 },
  { date: "2013-09-17", ratePct: 0.222 },
  { date: "2013-09-18", ratePct: 0.222 },
  { date: "2013-09-19", ratePct: 0.221 },
  { date: "2013-09-20", ratePct: 0.221 },
  { date: "2013-09-23", ratePct: 0.221 },
  { date: "2013-09-24", ratePct: 0.221 },
  { date: "2013-09-25", ratePct: 0.221 },
  { date: "2013-09-26", ratePct: 0.221 },
  { date: "2013-09-27", ratePct: 0.224 },
  { date: "2013-09-30", ratePct: 0.225 },
  { date: "2013-10-01", ratePct: 0.225 },
  { date: "2013-10-02", ratePct: 0.225 },
  { date: "2013-10-03", ratePct: 0.224 },
  { date: "2013-10-04", ratePct: 0.225 },
  { date: "2013-10-07", ratePct: 0.225 },
  { date: "2013-10-08", ratePct: 0.227 },
  { date: "2013-10-09", ratePct: 0.228 },
  { date: "2013-10-10", ratePct: 0.227 },
  { date: "2013-10-11", ratePct: 0.227 },
  { date: "2013-10-14", ratePct: 0.227 },
  { date: "2013-10-15", ratePct: 0.225 },
  { date: "2013-10-16", ratePct: 0.225 },
  { date: "2013-10-17", ratePct: 0.224 },
  { date: "2013-10-18", ratePct: 0.224 },
  { date: "2013-10-21", ratePct: 0.223 },
  { date: "2013-10-22", ratePct: 0.223 },
  { date: "2013-10-23", ratePct: 0.222 },
  { date: "2013-10-24", ratePct: 0.225 },
  { date: "2013-10-25", ratePct: 0.228 },
  { date: "2013-10-28", ratePct: 0.229 },
  { date: "2013-10-29", ratePct: 0.228 },
  { date: "2013-10-30", ratePct: 0.228 },
  { date: "2013-10-31", ratePct: 0.23 },
  { date: "2013-11-01", ratePct: 0.226 },
  { date: "2013-11-04", ratePct: 0.227 },
  { date: "2013-11-05", ratePct: 0.227 },
  { date: "2013-11-06", ratePct: 0.228 },
  { date: "2013-11-07", ratePct: 0.228 },
  { date: "2013-11-08", ratePct: 0.217 },
  { date: "2013-11-11", ratePct: 0.218 },
  { date: "2013-11-12", ratePct: 0.218 },
  { date: "2013-11-13", ratePct: 0.218 },
  { date: "2013-11-14", ratePct: 0.217 },
  { date: "2013-11-15", ratePct: 0.218 },
  { date: "2013-11-18", ratePct: 0.218 },
  { date: "2013-11-19", ratePct: 0.218 },
  { date: "2013-11-20", ratePct: 0.219 },
  { date: "2013-11-21", ratePct: 0.217 },
  { date: "2013-11-22", ratePct: 0.223 },
  { date: "2013-11-25", ratePct: 0.227 },
  { date: "2013-11-26", ratePct: 0.23 },
  { date: "2013-11-27", ratePct: 0.23 },
  { date: "2013-11-28", ratePct: 0.233 },
  { date: "2013-11-29", ratePct: 0.234 },
  { date: "2013-12-02", ratePct: 0.236 },
  { date: "2013-12-03", ratePct: 0.239 },
  { date: "2013-12-04", ratePct: 0.239 },
  { date: "2013-12-05", ratePct: 0.24 },
  { date: "2013-12-06", ratePct: 0.248 },
  { date: "2013-12-09", ratePct: 0.255 },
  { date: "2013-12-10", ratePct: 0.26 },
  { date: "2013-12-11", ratePct: 0.267 },
  { date: "2013-12-12", ratePct: 0.277 },
  { date: "2013-12-13", ratePct: 0.282 },
  { date: "2013-12-16", ratePct: 0.29 },
  { date: "2013-12-17", ratePct: 0.298 },
  { date: "2013-12-18", ratePct: 0.298 },
  { date: "2013-12-19", ratePct: 0.293 },
  { date: "2013-12-20", ratePct: 0.292 },
  { date: "2013-12-23", ratePct: 0.294 },
  { date: "2013-12-24", ratePct: 0.294 },
  { date: "2013-12-27", ratePct: 0.293 },
  { date: "2013-12-30", ratePct: 0.288 },
  { date: "2013-12-31", ratePct: 0.287 },
  { date: "2014-01-02", ratePct: 0.284 },
  { date: "2014-01-03", ratePct: 0.28 },
  { date: "2014-01-06", ratePct: 0.28 },
  { date: "2014-01-07", ratePct: 0.28 },
  { date: "2014-01-08", ratePct: 0.281 },
  { date: "2014-01-09", ratePct: 0.282 },
  { date: "2014-01-10", ratePct: 0.282 },
  { date: "2014-01-13", ratePct: 0.282 },
  { date: "2014-01-14", ratePct: 0.282 },
  { date: "2014-01-15", ratePct: 0.29 },
  { date: "2014-01-16", ratePct: 0.3 },
  { date: "2014-01-17", ratePct: 0.302 },
  { date: "2014-01-20", ratePct: 0.302 },
  { date: "2014-01-21", ratePct: 0.302 },
  { date: "2014-01-22", ratePct: 0.301 },
  { date: "2014-01-23", ratePct: 0.3 },
  { date: "2014-01-24", ratePct: 0.3 },
  { date: "2014-01-27", ratePct: 0.3 },
  { date: "2014-01-28", ratePct: 0.301 },
  { date: "2014-01-29", ratePct: 0.3 },
  { date: "2014-01-30", ratePct: 0.298 },
  { date: "2014-01-31", ratePct: 0.296 },
  { date: "2014-02-03", ratePct: 0.29 },
  { date: "2014-02-04", ratePct: 0.288 },
  { date: "2014-02-05", ratePct: 0.287 },
  { date: "2014-02-06", ratePct: 0.286 },
  { date: "2014-02-07", ratePct: 0.291 },
  { date: "2014-02-10", ratePct: 0.291 },
  { date: "2014-02-11", ratePct: 0.291 },
  { date: "2014-02-12", ratePct: 0.291 },
  { date: "2014-02-13", ratePct: 0.288 },
  { date: "2014-02-14", ratePct: 0.287 },
  { date: "2014-02-17", ratePct: 0.287 },
  { date: "2014-02-18", ratePct: 0.288 },
  { date: "2014-02-19", ratePct: 0.287 },
  { date: "2014-02-20", ratePct: 0.286 },
  { date: "2014-02-21", ratePct: 0.287 },
  { date: "2014-02-24", ratePct: 0.288 },
  { date: "2014-02-25", ratePct: 0.289 },
  { date: "2014-02-26", ratePct: 0.288 },
  { date: "2014-02-27", ratePct: 0.286 },
  { date: "2014-02-28", ratePct: 0.286 },
  { date: "2014-03-03", ratePct: 0.288 },
  { date: "2014-03-04", ratePct: 0.287 },
  { date: "2014-03-05", ratePct: 0.286 },
  { date: "2014-03-06", ratePct: 0.287 },
  { date: "2014-03-07", ratePct: 0.299 },
  { date: "2014-03-10", ratePct: 0.307 },
  { date: "2014-03-11", ratePct: 0.304 },
  { date: "2014-03-12", ratePct: 0.304 },
  { date: "2014-03-13", ratePct: 0.304 },
  { date: "2014-03-14", ratePct: 0.303 },
  { date: "2014-03-17", ratePct: 0.305 },
  { date: "2014-03-18", ratePct: 0.309 },
  { date: "2014-03-19", ratePct: 0.312 },
  { date: "2014-03-20", ratePct: 0.313 },
  { date: "2014-03-21", ratePct: 0.315 },
  { date: "2014-03-24", ratePct: 0.32 },
  { date: "2014-03-25", ratePct: 0.318 },
  { date: "2014-03-26", ratePct: 0.315 },
  { date: "2014-03-27", ratePct: 0.313 },
  { date: "2014-03-28", ratePct: 0.31 },
  { date: "2014-03-31", ratePct: 0.313 },
  { date: "2014-04-01", ratePct: 0.313 },
  { date: "2014-04-02", ratePct: 0.319 },
  { date: "2014-04-03", ratePct: 0.319 },
  { date: "2014-04-04", ratePct: 0.325 },
  { date: "2014-04-07", ratePct: 0.327 },
  { date: "2014-04-08", ratePct: 0.327 },
  { date: "2014-04-09", ratePct: 0.327 },
  { date: "2014-04-10", ratePct: 0.327 },
  { date: "2014-04-11", ratePct: 0.328 },
  { date: "2014-04-14", ratePct: 0.328 },
  { date: "2014-04-15", ratePct: 0.327 },
  { date: "2014-04-16", ratePct: 0.327 },
  { date: "2014-04-17", ratePct: 0.328 },
  { date: "2014-04-22", ratePct: 0.329 },
  { date: "2014-04-23", ratePct: 0.332 },
  { date: "2014-04-24", ratePct: 0.337 },
  { date: "2014-04-25", ratePct: 0.344 },
  { date: "2014-04-28", ratePct: 0.345 },
  { date: "2014-04-29", ratePct: 0.347 },
  { date: "2014-04-30", ratePct: 0.339 },
  { date: "2014-05-02", ratePct: 0.336 },
  { date: "2014-05-05", ratePct: 0.336 },
  { date: "2014-05-06", ratePct: 0.337 },
  { date: "2014-05-07", ratePct: 0.338 },
  { date: "2014-05-08", ratePct: 0.338 },
  { date: "2014-05-09", ratePct: 0.336 },
  { date: "2014-05-12", ratePct: 0.335 },
  { date: "2014-05-13", ratePct: 0.335 },
  { date: "2014-05-14", ratePct: 0.328 },
  { date: "2014-05-15", ratePct: 0.321 },
  { date: "2014-05-16", ratePct: 0.318 },
  { date: "2014-05-19", ratePct: 0.318 },
  { date: "2014-05-20", ratePct: 0.318 },
  { date: "2014-05-21", ratePct: 0.319 },
  { date: "2014-05-22", ratePct: 0.318 },
  { date: "2014-05-23", ratePct: 0.317 },
  { date: "2014-05-26", ratePct: 0.317 },
  { date: "2014-05-27", ratePct: 0.316 },
  { date: "2014-05-28", ratePct: 0.314 },
  { date: "2014-05-29", ratePct: 0.31 },
  { date: "2014-05-30", ratePct: 0.311 },
  { date: "2014-06-02", ratePct: 0.309 },
  { date: "2014-06-03", ratePct: 0.307 },
  { date: "2014-06-04", ratePct: 0.301 },
  { date: "2014-06-05", ratePct: 0.292 },
  { date: "2014-06-06", ratePct: 0.267 },
  { date: "2014-06-09", ratePct: 0.264 },
  { date: "2014-06-10", ratePct: 0.263 },
  { date: "2014-06-11", ratePct: 0.258 },
  { date: "2014-06-12", ratePct: 0.242 },
  { date: "2014-06-13", ratePct: 0.234 },
  { date: "2014-06-16", ratePct: 0.223 },
  { date: "2014-06-17", ratePct: 0.217 },
  { date: "2014-06-18", ratePct: 0.216 },
  { date: "2014-06-19", ratePct: 0.212 },
  { date: "2014-06-20", ratePct: 0.212 },
  { date: "2014-06-23", ratePct: 0.211 },
  { date: "2014-06-24", ratePct: 0.211 },
  { date: "2014-06-25", ratePct: 0.208 },
  { date: "2014-06-26", ratePct: 0.209 },
  { date: "2014-06-27", ratePct: 0.207 },
  { date: "2014-06-30", ratePct: 0.207 },
  { date: "2014-07-01", ratePct: 0.206 },
  { date: "2014-07-02", ratePct: 0.205 },
  { date: "2014-07-03", ratePct: 0.206 },
  { date: "2014-07-04", ratePct: 0.204 },
  { date: "2014-07-07", ratePct: 0.203 },
  { date: "2014-07-08", ratePct: 0.203 },
  { date: "2014-07-09", ratePct: 0.203 },
  { date: "2014-07-10", ratePct: 0.202 },
  { date: "2014-07-11", ratePct: 0.203 },
  { date: "2014-07-14", ratePct: 0.203 },
  { date: "2014-07-15", ratePct: 0.202 },
  { date: "2014-07-16", ratePct: 0.201 },
  { date: "2014-07-17", ratePct: 0.201 },
  { date: "2014-07-18", ratePct: 0.202 },
  { date: "2014-07-21", ratePct: 0.204 },
  { date: "2014-07-22", ratePct: 0.206 },
  { date: "2014-07-23", ratePct: 0.208 },
  { date: "2014-07-24", ratePct: 0.209 },
  { date: "2014-07-25", ratePct: 0.209 },
  { date: "2014-07-28", ratePct: 0.209 },
  { date: "2014-07-29", ratePct: 0.209 },
  { date: "2014-07-30", ratePct: 0.209 },
  { date: "2014-07-31", ratePct: 0.209 },
  { date: "2014-08-01", ratePct: 0.208 },
  { date: "2014-08-04", ratePct: 0.208 },
  { date: "2014-08-05", ratePct: 0.207 },
  { date: "2014-08-06", ratePct: 0.206 },
  { date: "2014-08-07", ratePct: 0.205 },
  { date: "2014-08-08", ratePct: 0.203 },
  { date: "2014-08-11", ratePct: 0.202 },
  { date: "2014-08-12", ratePct: 0.201 },
  { date: "2014-08-13", ratePct: 0.199 },
  { date: "2014-08-14", ratePct: 0.198 },
  { date: "2014-08-15", ratePct: 0.197 },
  { date: "2014-08-18", ratePct: 0.196 },
  { date: "2014-08-19", ratePct: 0.191 },
  { date: "2014-08-20", ratePct: 0.187 },
  { date: "2014-08-21", ratePct: 0.186 },
  { date: "2014-08-22", ratePct: 0.183 },
  { date: "2014-08-25", ratePct: 0.175 },
  { date: "2014-08-26", ratePct: 0.171 },
  { date: "2014-08-27", ratePct: 0.17 },
  { date: "2014-08-28", ratePct: 0.167 },
  { date: "2014-08-29", ratePct: 0.163 },
  { date: "2014-09-01", ratePct: 0.159 },
  { date: "2014-09-02", ratePct: 0.152 },
  { date: "2014-09-03", ratePct: 0.15 },
  { date: "2014-09-04", ratePct: 0.149 },
  { date: "2014-09-05", ratePct: 0.104 },
  { date: "2014-09-08", ratePct: 0.094 },
  { date: "2014-09-09", ratePct: 0.089 },
  { date: "2014-09-10", ratePct: 0.087 },
  { date: "2014-09-11", ratePct: 0.084 },
  { date: "2014-09-12", ratePct: 0.082 },
  { date: "2014-09-15", ratePct: 0.081 },
  { date: "2014-09-16", ratePct: 0.081 },
  { date: "2014-09-17", ratePct: 0.082 },
  { date: "2014-09-18", ratePct: 0.082 },
  { date: "2014-09-19", ratePct: 0.083 },
  { date: "2014-09-22", ratePct: 0.082 },
  { date: "2014-09-23", ratePct: 0.082 },
  { date: "2014-09-24", ratePct: 0.083 },
  { date: "2014-09-25", ratePct: 0.082 },
  { date: "2014-09-26", ratePct: 0.082 },
  { date: "2014-09-29", ratePct: 0.083 },
  { date: "2014-09-30", ratePct: 0.083 },
  { date: "2014-10-01", ratePct: 0.082 },
  { date: "2014-10-02", ratePct: 0.081 },
  { date: "2014-10-03", ratePct: 0.081 },
  { date: "2014-10-06", ratePct: 0.079 },
  { date: "2014-10-07", ratePct: 0.079 },
  { date: "2014-10-08", ratePct: 0.08 },
  { date: "2014-10-09", ratePct: 0.079 },
  { date: "2014-10-10", ratePct: 0.079 },
  { date: "2014-10-13", ratePct: 0.082 },
  { date: "2014-10-14", ratePct: 0.082 },
  { date: "2014-10-15", ratePct: 0.081 },
  { date: "2014-10-16", ratePct: 0.081 },
  { date: "2014-10-17", ratePct: 0.081 },
  { date: "2014-10-20", ratePct: 0.081 },
  { date: "2014-10-21", ratePct: 0.082 },
  { date: "2014-10-22", ratePct: 0.084 },
  { date: "2014-10-23", ratePct: 0.085 },
  { date: "2014-10-24", ratePct: 0.085 },
  { date: "2014-10-27", ratePct: 0.088 },
  { date: "2014-10-28", ratePct: 0.088 },
  { date: "2014-10-29", ratePct: 0.088 },
  { date: "2014-10-30", ratePct: 0.086 },
  { date: "2014-10-31", ratePct: 0.086 },
  { date: "2014-11-03", ratePct: 0.085 },
  { date: "2014-11-04", ratePct: 0.084 },
  { date: "2014-11-05", ratePct: 0.081 },
  { date: "2014-11-06", ratePct: 0.081 },
  { date: "2014-11-07", ratePct: 0.08 },
  { date: "2014-11-10", ratePct: 0.08 },
  { date: "2014-11-11", ratePct: 0.079 },
  { date: "2014-11-12", ratePct: 0.079 },
  { date: "2014-11-13", ratePct: 0.078 },
  { date: "2014-11-14", ratePct: 0.079 },
  { date: "2014-11-17", ratePct: 0.08 },
  { date: "2014-11-18", ratePct: 0.081 },
  { date: "2014-11-19", ratePct: 0.081 },
  { date: "2014-11-20", ratePct: 0.081 },
  { date: "2014-11-21", ratePct: 0.081 },
  { date: "2014-11-24", ratePct: 0.081 },
  { date: "2014-11-25", ratePct: 0.081 },
  { date: "2014-11-26", ratePct: 0.082 },
  { date: "2014-11-27", ratePct: 0.082 },
  { date: "2014-11-28", ratePct: 0.082 },
  { date: "2014-12-01", ratePct: 0.082 },
  { date: "2014-12-02", ratePct: 0.081 },
  { date: "2014-12-03", ratePct: 0.081 },
  { date: "2014-12-04", ratePct: 0.082 },
  { date: "2014-12-05", ratePct: 0.082 },
  { date: "2014-12-08", ratePct: 0.082 },
  { date: "2014-12-09", ratePct: 0.082 },
  { date: "2014-12-10", ratePct: 0.083 },
  { date: "2014-12-11", ratePct: 0.082 },
  { date: "2014-12-12", ratePct: 0.082 },
  { date: "2014-12-15", ratePct: 0.082 },
  { date: "2014-12-16", ratePct: 0.082 },
  { date: "2014-12-17", ratePct: 0.081 },
  { date: "2014-12-18", ratePct: 0.079 },
  { date: "2014-12-19", ratePct: 0.081 },
  { date: "2014-12-22", ratePct: 0.081 },
  { date: "2014-12-23", ratePct: 0.079 },
  { date: "2014-12-24", ratePct: 0.08 },
  { date: "2014-12-29", ratePct: 0.079 },
  { date: "2014-12-30", ratePct: 0.078 },
  { date: "2014-12-31", ratePct: 0.078 },
  { date: "2015-01-02", ratePct: 0.076 },
  { date: "2015-01-05", ratePct: 0.075 },
  { date: "2015-01-06", ratePct: 0.073 },
  { date: "2015-01-07", ratePct: 0.07 },
  { date: "2015-01-08", ratePct: 0.07 },
  { date: "2015-01-09", ratePct: 0.07 },
  { date: "2015-01-12", ratePct: 0.071 },
  { date: "2015-01-13", ratePct: 0.071 },
  { date: "2015-01-14", ratePct: 0.069 },
  { date: "2015-01-15", ratePct: 0.069 },
  { date: "2015-01-16", ratePct: 0.06 },
  { date: "2015-01-19", ratePct: 0.056 },
  { date: "2015-01-20", ratePct: 0.055 },
  { date: "2015-01-21", ratePct: 0.055 },
  { date: "2015-01-22", ratePct: 0.055 },
  { date: "2015-01-23", ratePct: 0.053 },
  { date: "2015-01-26", ratePct: 0.054 },
  { date: "2015-01-27", ratePct: 0.055 },
  { date: "2015-01-28", ratePct: 0.053 },
  { date: "2015-01-29", ratePct: 0.052 },
  { date: "2015-01-30", ratePct: 0.054 },
  { date: "2015-02-02", ratePct: 0.055 },
  { date: "2015-02-03", ratePct: 0.055 },
  { date: "2015-02-04", ratePct: 0.055 },
  { date: "2015-02-05", ratePct: 0.051 },
  { date: "2015-02-06", ratePct: 0.053 },
  { date: "2015-02-09", ratePct: 0.051 },
  { date: "2015-02-10", ratePct: 0.05 },
  { date: "2015-02-11", ratePct: 0.049 },
  { date: "2015-02-12", ratePct: 0.048 },
  { date: "2015-02-13", ratePct: 0.048 },
  { date: "2015-02-16", ratePct: 0.048 },
  { date: "2015-02-17", ratePct: 0.047 },
  { date: "2015-02-18", ratePct: 0.048 },
  { date: "2015-02-19", ratePct: 0.048 },
  { date: "2015-02-20", ratePct: 0.048 },
  { date: "2015-02-23", ratePct: 0.045 },
  { date: "2015-02-24", ratePct: 0.044 },
  { date: "2015-02-25", ratePct: 0.042 },
  { date: "2015-02-26", ratePct: 0.04 },
  { date: "2015-02-27", ratePct: 0.039 },
  { date: "2015-03-02", ratePct: 0.039 },
  { date: "2015-03-03", ratePct: 0.038 },
  { date: "2015-03-04", ratePct: 0.038 },
  { date: "2015-03-05", ratePct: 0.036 },
  { date: "2015-03-06", ratePct: 0.036 },
  { date: "2015-03-09", ratePct: 0.035 },
  { date: "2015-03-10", ratePct: 0.032 },
  { date: "2015-03-11", ratePct: 0.029 },
  { date: "2015-03-12", ratePct: 0.027 },
  { date: "2015-03-13", ratePct: 0.025 },
  { date: "2015-03-16", ratePct: 0.025 },
  { date: "2015-03-17", ratePct: 0.025 },
  { date: "2015-03-18", ratePct: 0.025 },
  { date: "2015-03-19", ratePct: 0.024 },
  { date: "2015-03-20", ratePct: 0.021 },
  { date: "2015-03-23", ratePct: 0.022 },
  { date: "2015-03-24", ratePct: 0.021 },
  { date: "2015-03-25", ratePct: 0.021 },
  { date: "2015-03-26", ratePct: 0.021 },
  { date: "2015-03-27", ratePct: 0.021 },
  { date: "2015-03-30", ratePct: 0.018 },
  { date: "2015-03-31", ratePct: 0.019 },
  { date: "2015-04-01", ratePct: 0.018 },
  { date: "2015-04-02", ratePct: 0.018 },
  { date: "2015-04-07", ratePct: 0.016 },
  { date: "2015-04-08", ratePct: 0.014 },
  { date: "2015-04-09", ratePct: 0.012 },
  { date: "2015-04-10", ratePct: 0.012 },
  { date: "2015-04-13", ratePct: 0.011 },
  { date: "2015-04-14", ratePct: 8e-3 },
  { date: "2015-04-15", ratePct: 4e-3 },
  { date: "2015-04-16", ratePct: 2e-3 },
  { date: "2015-04-17", ratePct: 1e-3 },
  { date: "2015-04-20", ratePct: 1e-3 },
  { date: "2015-04-21", ratePct: -1e-3 },
  { date: "2015-04-22", ratePct: -2e-3 },
  { date: "2015-04-23", ratePct: -2e-3 },
  { date: "2015-04-24", ratePct: -1e-3 },
  { date: "2015-04-27", ratePct: -2e-3 },
  { date: "2015-04-28", ratePct: -5e-3 },
  { date: "2015-04-29", ratePct: -5e-3 },
  { date: "2015-04-30", ratePct: -5e-3 },
  { date: "2015-05-04", ratePct: -7e-3 },
  { date: "2015-05-05", ratePct: -8e-3 },
  { date: "2015-05-06", ratePct: -8e-3 },
  { date: "2015-05-07", ratePct: -9e-3 },
  { date: "2015-05-08", ratePct: -9e-3 },
  { date: "2015-05-11", ratePct: -9e-3 },
  { date: "2015-05-12", ratePct: -9e-3 },
  { date: "2015-05-13", ratePct: -9e-3 },
  { date: "2015-05-14", ratePct: -9e-3 },
  { date: "2015-05-15", ratePct: -0.01 },
  { date: "2015-05-18", ratePct: -0.011 },
  { date: "2015-05-19", ratePct: -0.012 },
  { date: "2015-05-20", ratePct: -0.012 },
  { date: "2015-05-21", ratePct: -0.012 },
  { date: "2015-05-22", ratePct: -0.012 },
  { date: "2015-05-25", ratePct: -0.012 },
  { date: "2015-05-26", ratePct: -0.013 },
  { date: "2015-05-27", ratePct: -0.013 },
  { date: "2015-05-28", ratePct: -0.013 },
  { date: "2015-05-29", ratePct: -0.012 },
  { date: "2015-06-01", ratePct: -0.013 },
  { date: "2015-06-02", ratePct: -0.013 },
  { date: "2015-06-03", ratePct: -0.014 },
  { date: "2015-06-04", ratePct: -0.013 },
  { date: "2015-06-05", ratePct: -0.013 },
  { date: "2015-06-08", ratePct: -0.013 },
  { date: "2015-06-09", ratePct: -0.013 },
  { date: "2015-06-10", ratePct: -0.014 },
  { date: "2015-06-11", ratePct: -0.014 },
  { date: "2015-06-12", ratePct: -0.014 },
  { date: "2015-06-15", ratePct: -0.014 },
  { date: "2015-06-16", ratePct: -0.014 },
  { date: "2015-06-17", ratePct: -0.014 },
  { date: "2015-06-18", ratePct: -0.014 },
  { date: "2015-06-19", ratePct: -0.014 },
  { date: "2015-06-22", ratePct: -0.014 },
  { date: "2015-06-23", ratePct: -0.014 },
  { date: "2015-06-24", ratePct: -0.014 },
  { date: "2015-06-25", ratePct: -0.015 },
  { date: "2015-06-26", ratePct: -0.015 },
  { date: "2015-06-29", ratePct: -0.016 },
  { date: "2015-06-30", ratePct: -0.014 },
  { date: "2015-07-01", ratePct: -0.014 },
  { date: "2015-07-02", ratePct: -0.015 },
  { date: "2015-07-03", ratePct: -0.015 },
  { date: "2015-07-06", ratePct: -0.016 },
  { date: "2015-07-07", ratePct: -0.018 },
  { date: "2015-07-08", ratePct: -0.018 },
  { date: "2015-07-09", ratePct: -0.018 },
  { date: "2015-07-10", ratePct: -0.018 },
  { date: "2015-07-13", ratePct: -0.019 },
  { date: "2015-07-14", ratePct: -0.019 },
  { date: "2015-07-15", ratePct: -0.019 },
  { date: "2015-07-16", ratePct: -0.019 },
  { date: "2015-07-17", ratePct: -0.019 },
  { date: "2015-07-20", ratePct: -0.019 },
  { date: "2015-07-21", ratePct: -0.019 },
  { date: "2015-07-22", ratePct: -0.019 },
  { date: "2015-07-23", ratePct: -0.019 },
  { date: "2015-07-24", ratePct: -0.019 },
  { date: "2015-07-27", ratePct: -0.02 },
  { date: "2015-07-28", ratePct: -0.021 },
  { date: "2015-07-29", ratePct: -0.022 },
  { date: "2015-07-30", ratePct: -0.023 },
  { date: "2015-07-31", ratePct: -0.023 },
  { date: "2015-08-03", ratePct: -0.023 },
  { date: "2015-08-04", ratePct: -0.023 },
  { date: "2015-08-05", ratePct: -0.024 },
  { date: "2015-08-06", ratePct: -0.024 },
  { date: "2015-08-07", ratePct: -0.024 },
  { date: "2015-08-10", ratePct: -0.024 },
  { date: "2015-08-11", ratePct: -0.024 },
  { date: "2015-08-12", ratePct: -0.024 },
  { date: "2015-08-13", ratePct: -0.024 },
  { date: "2015-08-14", ratePct: -0.025 },
  { date: "2015-08-17", ratePct: -0.027 },
  { date: "2015-08-18", ratePct: -0.028 },
  { date: "2015-08-19", ratePct: -0.029 },
  { date: "2015-08-20", ratePct: -0.03 },
  { date: "2015-08-21", ratePct: -0.031 },
  { date: "2015-08-24", ratePct: -0.032 },
  { date: "2015-08-25", ratePct: -0.033 },
  { date: "2015-08-26", ratePct: -0.033 },
  { date: "2015-08-27", ratePct: -0.033 },
  { date: "2015-08-28", ratePct: -0.033 },
  { date: "2015-08-31", ratePct: -0.033 },
  { date: "2015-09-01", ratePct: -0.033 },
  { date: "2015-09-02", ratePct: -0.033 },
  { date: "2015-09-03", ratePct: -0.033 },
  { date: "2015-09-04", ratePct: -0.034 },
  { date: "2015-09-07", ratePct: -0.034 },
  { date: "2015-09-08", ratePct: -0.035 },
  { date: "2015-09-09", ratePct: -0.035 },
  { date: "2015-09-10", ratePct: -0.036 },
  { date: "2015-09-11", ratePct: -0.038 },
  { date: "2015-09-14", ratePct: -0.038 },
  { date: "2015-09-15", ratePct: -0.036 },
  { date: "2015-09-16", ratePct: -0.037 },
  { date: "2015-09-17", ratePct: -0.037 },
  { date: "2015-09-18", ratePct: -0.037 },
  { date: "2015-09-21", ratePct: -0.038 },
  { date: "2015-09-22", ratePct: -0.039 },
  { date: "2015-09-23", ratePct: -0.039 },
  { date: "2015-09-24", ratePct: -0.04 },
  { date: "2015-09-25", ratePct: -0.041 },
  { date: "2015-09-28", ratePct: -0.041 },
  { date: "2015-09-29", ratePct: -0.041 },
  { date: "2015-09-30", ratePct: -0.04 },
  { date: "2015-10-01", ratePct: -0.043 },
  { date: "2015-10-02", ratePct: -0.044 },
  { date: "2015-10-05", ratePct: -0.046 },
  { date: "2015-10-06", ratePct: -0.046 },
  { date: "2015-10-07", ratePct: -0.046 },
  { date: "2015-10-08", ratePct: -0.048 },
  { date: "2015-10-09", ratePct: -0.049 },
  { date: "2015-10-12", ratePct: -0.049 },
  { date: "2015-10-13", ratePct: -0.049 },
  { date: "2015-10-14", ratePct: -0.049 },
  { date: "2015-10-15", ratePct: -0.052 },
  { date: "2015-10-16", ratePct: -0.051 },
  { date: "2015-10-19", ratePct: -0.054 },
  { date: "2015-10-20", ratePct: -0.053 },
  { date: "2015-10-21", ratePct: -0.053 },
  { date: "2015-10-22", ratePct: -0.053 },
  { date: "2015-10-23", ratePct: -0.061 },
  { date: "2015-10-26", ratePct: -0.064 },
  { date: "2015-10-27", ratePct: -0.066 },
  { date: "2015-10-28", ratePct: -0.067 },
  { date: "2015-10-29", ratePct: -0.068 },
  { date: "2015-10-30", ratePct: -0.068 },
  { date: "2015-11-02", ratePct: -0.066 },
  { date: "2015-11-03", ratePct: -0.069 },
  { date: "2015-11-04", ratePct: -0.069 },
  { date: "2015-11-05", ratePct: -0.071 },
  { date: "2015-11-06", ratePct: -0.073 },
  { date: "2015-11-09", ratePct: -0.073 },
  { date: "2015-11-10", ratePct: -0.077 },
  { date: "2015-11-11", ratePct: -0.079 },
  { date: "2015-11-12", ratePct: -0.081 },
  { date: "2015-11-13", ratePct: -0.083 },
  { date: "2015-11-16", ratePct: -0.086 },
  { date: "2015-11-17", ratePct: -0.091 },
  { date: "2015-11-18", ratePct: -0.092 },
  { date: "2015-11-19", ratePct: -0.092 },
  { date: "2015-11-20", ratePct: -0.095 },
  { date: "2015-11-23", ratePct: -0.099 },
  { date: "2015-11-24", ratePct: -0.104 },
  { date: "2015-11-25", ratePct: -0.104 },
  { date: "2015-11-26", ratePct: -0.109 },
  { date: "2015-11-27", ratePct: -0.113 },
  { date: "2015-11-30", ratePct: -0.114 },
  { date: "2015-12-01", ratePct: -0.116 },
  { date: "2015-12-02", ratePct: -0.118 },
  { date: "2015-12-03", ratePct: -0.124 },
  { date: "2015-12-04", ratePct: -0.113 },
  { date: "2015-12-07", ratePct: -0.113 },
  { date: "2015-12-08", ratePct: -0.116 },
  { date: "2015-12-09", ratePct: -0.119 },
  { date: "2015-12-10", ratePct: -0.125 },
  { date: "2015-12-11", ratePct: -0.128 },
  { date: "2015-12-14", ratePct: -0.129 },
  { date: "2015-12-15", ratePct: -0.132 },
  { date: "2015-12-16", ratePct: -0.133 },
  { date: "2015-12-17", ratePct: -0.133 },
  { date: "2015-12-18", ratePct: -0.131 },
  { date: "2015-12-21", ratePct: -0.13 },
  { date: "2015-12-22", ratePct: -0.131 },
  { date: "2015-12-23", ratePct: -0.131 },
  { date: "2015-12-24", ratePct: -0.131 },
  { date: "2015-12-28", ratePct: -0.131 },
  { date: "2015-12-29", ratePct: -0.132 },
  { date: "2015-12-30", ratePct: -0.132 },
  { date: "2015-12-31", ratePct: -0.131 },
  { date: "2016-01-04", ratePct: -0.132 },
  { date: "2016-01-05", ratePct: -0.133 },
  { date: "2016-01-06", ratePct: -0.136 },
  { date: "2016-01-07", ratePct: -0.142 },
  { date: "2016-01-08", ratePct: -0.143 },
  { date: "2016-01-11", ratePct: -0.143 },
  { date: "2016-01-12", ratePct: -0.144 },
  { date: "2016-01-13", ratePct: -0.144 },
  { date: "2016-01-14", ratePct: -0.143 },
  { date: "2016-01-15", ratePct: -0.142 },
  { date: "2016-01-18", ratePct: -0.142 },
  { date: "2016-01-19", ratePct: -0.143 },
  { date: "2016-01-20", ratePct: -0.144 },
  { date: "2016-01-21", ratePct: -0.146 },
  { date: "2016-01-22", ratePct: -0.152 },
  { date: "2016-01-25", ratePct: -0.155 },
  { date: "2016-01-26", ratePct: -0.158 },
  { date: "2016-01-27", ratePct: -0.159 },
  { date: "2016-01-28", ratePct: -0.16 },
  { date: "2016-01-29", ratePct: -0.162 },
  { date: "2016-02-01", ratePct: -0.162 },
  { date: "2016-02-02", ratePct: -0.161 },
  { date: "2016-02-03", ratePct: -0.162 },
  { date: "2016-02-04", ratePct: -0.166 },
  { date: "2016-02-05", ratePct: -0.167 },
  { date: "2016-02-08", ratePct: -0.169 },
  { date: "2016-02-09", ratePct: -0.171 },
  { date: "2016-02-10", ratePct: -0.175 },
  { date: "2016-02-11", ratePct: -0.179 },
  { date: "2016-02-12", ratePct: -0.183 },
  { date: "2016-02-15", ratePct: -0.183 },
  { date: "2016-02-16", ratePct: -0.187 },
  { date: "2016-02-17", ratePct: -0.189 },
  { date: "2016-02-18", ratePct: -0.195 },
  { date: "2016-02-19", ratePct: -0.198 },
  { date: "2016-02-22", ratePct: -0.199 },
  { date: "2016-02-23", ratePct: -0.2 },
  { date: "2016-02-24", ratePct: -0.201 },
  { date: "2016-02-25", ratePct: -0.201 },
  { date: "2016-02-26", ratePct: -0.202 },
  { date: "2016-02-29", ratePct: -0.205 },
  { date: "2016-03-01", ratePct: -0.207 },
  { date: "2016-03-02", ratePct: -0.208 },
  { date: "2016-03-03", ratePct: -0.213 },
  { date: "2016-03-04", ratePct: -0.215 },
  { date: "2016-03-07", ratePct: -0.216 },
  { date: "2016-03-08", ratePct: -0.221 },
  { date: "2016-03-09", ratePct: -0.224 },
  { date: "2016-03-10", ratePct: -0.229 },
  { date: "2016-03-11", ratePct: -0.225 },
  { date: "2016-03-14", ratePct: -0.226 },
  { date: "2016-03-15", ratePct: -0.227 },
  { date: "2016-03-16", ratePct: -0.23 },
  { date: "2016-03-17", ratePct: -0.234 },
  { date: "2016-03-18", ratePct: -0.235 },
  { date: "2016-03-21", ratePct: -0.238 },
  { date: "2016-03-22", ratePct: -0.239 },
  { date: "2016-03-23", ratePct: -0.241 },
  { date: "2016-03-24", ratePct: -0.242 },
  { date: "2016-03-29", ratePct: -0.242 },
  { date: "2016-03-30", ratePct: -0.243 },
  { date: "2016-03-31", ratePct: -0.244 },
  { date: "2016-04-01", ratePct: -0.245 },
  { date: "2016-04-04", ratePct: -0.246 },
  { date: "2016-04-05", ratePct: -0.248 },
  { date: "2016-04-06", ratePct: -0.248 },
  { date: "2016-04-07", ratePct: -0.247 },
  { date: "2016-04-08", ratePct: -0.248 },
  { date: "2016-04-11", ratePct: -0.251 },
  { date: "2016-04-12", ratePct: -0.249 },
  { date: "2016-04-13", ratePct: -0.249 },
  { date: "2016-04-14", ratePct: -0.251 },
  { date: "2016-04-15", ratePct: -0.249 },
  { date: "2016-04-18", ratePct: -0.249 },
  { date: "2016-04-19", ratePct: -0.25 },
  { date: "2016-04-20", ratePct: -0.249 },
  { date: "2016-04-21", ratePct: -0.249 },
  { date: "2016-04-22", ratePct: -0.249 },
  { date: "2016-04-25", ratePct: -0.25 },
  { date: "2016-04-26", ratePct: -0.252 },
  { date: "2016-04-27", ratePct: -0.251 },
  { date: "2016-04-28", ratePct: -0.252 },
  { date: "2016-04-29", ratePct: -0.251 },
  { date: "2016-05-02", ratePct: -0.25 },
  { date: "2016-05-03", ratePct: -0.251 },
  { date: "2016-05-04", ratePct: -0.253 },
  { date: "2016-05-05", ratePct: -0.255 },
  { date: "2016-05-06", ratePct: -0.256 },
  { date: "2016-05-09", ratePct: -0.258 },
  { date: "2016-05-10", ratePct: -0.26 },
  { date: "2016-05-11", ratePct: -0.259 },
  { date: "2016-05-12", ratePct: -0.258 },
  { date: "2016-05-13", ratePct: -0.257 },
  { date: "2016-05-16", ratePct: -0.257 },
  { date: "2016-05-17", ratePct: -0.257 },
  { date: "2016-05-18", ratePct: -0.257 },
  { date: "2016-05-19", ratePct: -0.258 },
  { date: "2016-05-20", ratePct: -0.258 },
  { date: "2016-05-23", ratePct: -0.258 },
  { date: "2016-05-24", ratePct: -0.258 },
  { date: "2016-05-25", ratePct: -0.258 },
  { date: "2016-05-26", ratePct: -0.258 },
  { date: "2016-05-27", ratePct: -0.26 },
  { date: "2016-05-30", ratePct: -0.261 },
  { date: "2016-05-31", ratePct: -0.261 },
  { date: "2016-06-01", ratePct: -0.261 },
  { date: "2016-06-02", ratePct: -0.262 },
  { date: "2016-06-03", ratePct: -0.261 },
  { date: "2016-06-06", ratePct: -0.262 },
  { date: "2016-06-07", ratePct: -0.261 },
  { date: "2016-06-08", ratePct: -0.264 },
  { date: "2016-06-09", ratePct: -0.262 },
  { date: "2016-06-10", ratePct: -0.263 },
  { date: "2016-06-13", ratePct: -0.263 },
  { date: "2016-06-14", ratePct: -0.262 },
  { date: "2016-06-15", ratePct: -0.262 },
  { date: "2016-06-16", ratePct: -0.264 },
  { date: "2016-06-17", ratePct: -0.265 },
  { date: "2016-06-20", ratePct: -0.266 },
  { date: "2016-06-21", ratePct: -0.266 },
  { date: "2016-06-22", ratePct: -0.268 },
  { date: "2016-06-23", ratePct: -0.269 },
  { date: "2016-06-24", ratePct: -0.281 },
  { date: "2016-06-27", ratePct: -0.283 },
  { date: "2016-06-28", ratePct: -0.281 },
  { date: "2016-06-29", ratePct: -0.282 },
  { date: "2016-06-30", ratePct: -0.286 },
  { date: "2016-07-01", ratePct: -0.29 },
  { date: "2016-07-04", ratePct: -0.291 },
  { date: "2016-07-05", ratePct: -0.292 },
  { date: "2016-07-06", ratePct: -0.293 },
  { date: "2016-07-07", ratePct: -0.293 },
  { date: "2016-07-08", ratePct: -0.293 },
  { date: "2016-07-11", ratePct: -0.292 },
  { date: "2016-07-12", ratePct: -0.291 },
  { date: "2016-07-13", ratePct: -0.295 },
  { date: "2016-07-14", ratePct: -0.295 },
  { date: "2016-07-15", ratePct: -0.293 },
  { date: "2016-07-18", ratePct: -0.295 },
  { date: "2016-07-19", ratePct: -0.295 },
  { date: "2016-07-20", ratePct: -0.297 },
  { date: "2016-07-21", ratePct: -0.297 },
  { date: "2016-07-22", ratePct: -0.297 },
  { date: "2016-07-25", ratePct: -0.297 },
  { date: "2016-07-26", ratePct: -0.298 },
  { date: "2016-07-27", ratePct: -0.298 },
  { date: "2016-07-28", ratePct: -0.296 },
  { date: "2016-07-29", ratePct: -0.297 },
  { date: "2016-08-01", ratePct: -0.297 },
  { date: "2016-08-02", ratePct: -0.298 },
  { date: "2016-08-03", ratePct: -0.299 },
  { date: "2016-08-04", ratePct: -0.298 },
  { date: "2016-08-05", ratePct: -0.298 },
  { date: "2016-08-08", ratePct: -0.298 },
  { date: "2016-08-09", ratePct: -0.298 },
  { date: "2016-08-10", ratePct: -0.297 },
  { date: "2016-08-11", ratePct: -0.299 },
  { date: "2016-08-12", ratePct: -0.299 },
  { date: "2016-08-15", ratePct: -0.298 },
  { date: "2016-08-16", ratePct: -0.299 },
  { date: "2016-08-17", ratePct: -0.298 },
  { date: "2016-08-18", ratePct: -0.299 },
  { date: "2016-08-19", ratePct: -0.298 },
  { date: "2016-08-22", ratePct: -0.299 },
  { date: "2016-08-23", ratePct: -0.298 },
  { date: "2016-08-24", ratePct: -0.298 },
  { date: "2016-08-25", ratePct: -0.298 },
  { date: "2016-08-26", ratePct: -0.298 },
  { date: "2016-08-29", ratePct: -0.297 },
  { date: "2016-08-30", ratePct: -0.299 },
  { date: "2016-08-31", ratePct: -0.299 },
  { date: "2016-09-01", ratePct: -0.299 },
  { date: "2016-09-02", ratePct: -0.301 },
  { date: "2016-09-05", ratePct: -0.301 },
  { date: "2016-09-06", ratePct: -0.303 },
  { date: "2016-09-07", ratePct: -0.303 },
  { date: "2016-09-08", ratePct: -0.304 },
  { date: "2016-09-09", ratePct: -0.301 },
  { date: "2016-09-12", ratePct: -0.303 },
  { date: "2016-09-13", ratePct: -0.302 },
  { date: "2016-09-14", ratePct: -0.303 },
  { date: "2016-09-15", ratePct: -0.301 },
  { date: "2016-09-16", ratePct: -0.301 },
  { date: "2016-09-19", ratePct: -0.301 },
  { date: "2016-09-20", ratePct: -0.301 },
  { date: "2016-09-21", ratePct: -0.301 },
  { date: "2016-09-22", ratePct: -0.301 },
  { date: "2016-09-23", ratePct: -0.302 },
  { date: "2016-09-26", ratePct: -0.303 },
  { date: "2016-09-27", ratePct: -0.301 },
  { date: "2016-09-28", ratePct: -0.302 },
  { date: "2016-09-29", ratePct: -0.301 },
  { date: "2016-09-30", ratePct: -0.301 },
  { date: "2016-10-03", ratePct: -0.301 },
  { date: "2016-10-04", ratePct: -0.301 },
  { date: "2016-10-05", ratePct: -0.302 },
  { date: "2016-10-06", ratePct: -0.304 },
  { date: "2016-10-07", ratePct: -0.304 },
  { date: "2016-10-10", ratePct: -0.305 },
  { date: "2016-10-11", ratePct: -0.306 },
  { date: "2016-10-12", ratePct: -0.309 },
  { date: "2016-10-13", ratePct: -0.311 },
  { date: "2016-10-14", ratePct: -0.311 },
  { date: "2016-10-17", ratePct: -0.311 },
  { date: "2016-10-18", ratePct: -0.312 },
  { date: "2016-10-19", ratePct: -0.313 },
  { date: "2016-10-20", ratePct: -0.313 },
  { date: "2016-10-21", ratePct: -0.312 },
  { date: "2016-10-24", ratePct: -0.311 },
  { date: "2016-10-25", ratePct: -0.312 },
  { date: "2016-10-26", ratePct: -0.313 },
  { date: "2016-10-27", ratePct: -0.312 },
  { date: "2016-10-28", ratePct: -0.313 },
  { date: "2016-10-31", ratePct: -0.313 },
  { date: "2016-11-01", ratePct: -0.313 },
  { date: "2016-11-02", ratePct: -0.313 },
  { date: "2016-11-03", ratePct: -0.313 },
  { date: "2016-11-04", ratePct: -0.312 },
  { date: "2016-11-07", ratePct: -0.312 },
  { date: "2016-11-08", ratePct: -0.312 },
  { date: "2016-11-09", ratePct: -0.312 },
  { date: "2016-11-10", ratePct: -0.312 },
  { date: "2016-11-11", ratePct: -0.312 },
  { date: "2016-11-14", ratePct: -0.312 },
  { date: "2016-11-15", ratePct: -0.312 },
  { date: "2016-11-16", ratePct: -0.311 },
  { date: "2016-11-17", ratePct: -0.312 },
  { date: "2016-11-18", ratePct: -0.313 },
  { date: "2016-11-21", ratePct: -0.312 },
  { date: "2016-11-22", ratePct: -0.313 },
  { date: "2016-11-23", ratePct: -0.313 },
  { date: "2016-11-24", ratePct: -0.314 },
  { date: "2016-11-25", ratePct: -0.314 },
  { date: "2016-11-28", ratePct: -0.314 },
  { date: "2016-11-29", ratePct: -0.314 },
  { date: "2016-11-30", ratePct: -0.314 },
  { date: "2016-12-01", ratePct: -0.313 },
  { date: "2016-12-02", ratePct: -0.313 },
  { date: "2016-12-05", ratePct: -0.313 },
  { date: "2016-12-06", ratePct: -0.315 },
  { date: "2016-12-07", ratePct: -0.316 },
  { date: "2016-12-08", ratePct: -0.318 },
  { date: "2016-12-09", ratePct: -0.316 },
  { date: "2016-12-12", ratePct: -0.316 },
  { date: "2016-12-13", ratePct: -0.316 },
  { date: "2016-12-14", ratePct: -0.316 },
  { date: "2016-12-15", ratePct: -0.316 },
  { date: "2016-12-16", ratePct: -0.314 },
  { date: "2016-12-19", ratePct: -0.313 },
  { date: "2016-12-20", ratePct: -0.313 },
  { date: "2016-12-21", ratePct: -0.315 },
  { date: "2016-12-22", ratePct: -0.316 },
  { date: "2016-12-23", ratePct: -0.317 },
  { date: "2016-12-27", ratePct: -0.318 },
  { date: "2016-12-28", ratePct: -0.319 },
  { date: "2016-12-29", ratePct: -0.319 },
  { date: "2016-12-30", ratePct: -0.319 },
  { date: "2017-01-02", ratePct: -0.318 },
  { date: "2017-01-03", ratePct: -0.319 },
  { date: "2017-01-04", ratePct: -0.32 },
  { date: "2017-01-05", ratePct: -0.321 },
  { date: "2017-01-06", ratePct: -0.321 },
  { date: "2017-01-09", ratePct: -0.322 },
  { date: "2017-01-10", ratePct: -0.324 },
  { date: "2017-01-11", ratePct: -0.326 },
  { date: "2017-01-12", ratePct: -0.327 },
  { date: "2017-01-13", ratePct: -0.327 },
  { date: "2017-01-16", ratePct: -0.328 },
  { date: "2017-01-17", ratePct: -0.329 },
  { date: "2017-01-18", ratePct: -0.329 },
  { date: "2017-01-19", ratePct: -0.329 },
  { date: "2017-01-20", ratePct: -0.328 },
  { date: "2017-01-23", ratePct: -0.327 },
  { date: "2017-01-24", ratePct: -0.328 },
  { date: "2017-01-25", ratePct: -0.328 },
  { date: "2017-01-26", ratePct: -0.328 },
  { date: "2017-01-27", ratePct: -0.328 },
  { date: "2017-01-30", ratePct: -0.328 },
  { date: "2017-01-31", ratePct: -0.327 },
  { date: "2017-02-01", ratePct: -0.328 },
  { date: "2017-02-02", ratePct: -0.328 },
  { date: "2017-02-03", ratePct: -0.328 },
  { date: "2017-02-06", ratePct: -0.328 },
  { date: "2017-02-07", ratePct: -0.328 },
  { date: "2017-02-08", ratePct: -0.328 },
  { date: "2017-02-09", ratePct: -0.328 },
  { date: "2017-02-10", ratePct: -0.329 },
  { date: "2017-02-13", ratePct: -0.329 },
  { date: "2017-02-14", ratePct: -0.328 },
  { date: "2017-02-15", ratePct: -0.328 },
  { date: "2017-02-16", ratePct: -0.328 },
  { date: "2017-02-17", ratePct: -0.329 },
  { date: "2017-02-20", ratePct: -0.329 },
  { date: "2017-02-21", ratePct: -0.329 },
  { date: "2017-02-22", ratePct: -0.33 },
  { date: "2017-02-23", ratePct: -0.329 },
  { date: "2017-02-24", ratePct: -0.329 },
  { date: "2017-02-27", ratePct: -0.329 },
  { date: "2017-02-28", ratePct: -0.33 },
  { date: "2017-03-01", ratePct: -0.329 },
  { date: "2017-03-02", ratePct: -0.329 },
  { date: "2017-03-03", ratePct: -0.329 },
  { date: "2017-03-06", ratePct: -0.329 },
  { date: "2017-03-07", ratePct: -0.328 },
  { date: "2017-03-08", ratePct: -0.329 },
  { date: "2017-03-09", ratePct: -0.329 },
  { date: "2017-03-10", ratePct: -0.329 },
  { date: "2017-03-13", ratePct: -0.33 },
  { date: "2017-03-14", ratePct: -0.33 },
  { date: "2017-03-15", ratePct: -0.329 },
  { date: "2017-03-16", ratePct: -0.329 },
  { date: "2017-03-17", ratePct: -0.329 },
  { date: "2017-03-20", ratePct: -0.329 },
  { date: "2017-03-21", ratePct: -0.329 },
  { date: "2017-03-22", ratePct: -0.33 },
  { date: "2017-03-23", ratePct: -0.33 },
  { date: "2017-03-24", ratePct: -0.33 },
  { date: "2017-03-27", ratePct: -0.33 },
  { date: "2017-03-28", ratePct: -0.33 },
  { date: "2017-03-29", ratePct: -0.33 },
  { date: "2017-03-30", ratePct: -0.33 },
  { date: "2017-03-31", ratePct: -0.329 },
  { date: "2017-04-03", ratePct: -0.33 },
  { date: "2017-04-04", ratePct: -0.33 },
  { date: "2017-04-05", ratePct: -0.329 },
  { date: "2017-04-06", ratePct: -0.33 },
  { date: "2017-04-07", ratePct: -0.33 },
  { date: "2017-04-10", ratePct: -0.332 },
  { date: "2017-04-11", ratePct: -0.332 },
  { date: "2017-04-12", ratePct: -0.332 },
  { date: "2017-04-13", ratePct: -0.331 },
  { date: "2017-04-17", ratePct: -0.328 },
  { date: "2017-04-18", ratePct: -0.331 },
  { date: "2017-04-19", ratePct: -0.332 },
  { date: "2017-04-20", ratePct: -0.332 },
  { date: "2017-04-21", ratePct: -0.331 },
  { date: "2017-04-24", ratePct: -0.329 },
  { date: "2017-04-25", ratePct: -0.329 },
  { date: "2017-04-26", ratePct: -0.329 },
  { date: "2017-04-27", ratePct: -0.329 },
  { date: "2017-04-28", ratePct: -0.329 },
  { date: "2017-05-02", ratePct: -0.329 },
  { date: "2017-05-03", ratePct: -0.329 },
  { date: "2017-05-04", ratePct: -0.329 },
  { date: "2017-05-05", ratePct: -0.329 },
  { date: "2017-05-08", ratePct: -0.329 },
  { date: "2017-05-09", ratePct: -0.329 },
  { date: "2017-05-10", ratePct: -0.329 },
  { date: "2017-05-11", ratePct: -0.329 },
  { date: "2017-05-12", ratePct: -0.329 },
  { date: "2017-05-15", ratePct: -0.33 },
  { date: "2017-05-16", ratePct: -0.331 },
  { date: "2017-05-17", ratePct: -0.331 },
  { date: "2017-05-18", ratePct: -0.331 },
  { date: "2017-05-19", ratePct: -0.331 },
  { date: "2017-05-22", ratePct: -0.329 },
  { date: "2017-05-23", ratePct: -0.33 },
  { date: "2017-05-24", ratePct: -0.329 },
  { date: "2017-05-25", ratePct: -0.329 },
  { date: "2017-05-26", ratePct: -0.329 },
  { date: "2017-05-29", ratePct: -0.329 },
  { date: "2017-05-30", ratePct: -0.329 },
  { date: "2017-05-31", ratePct: -0.329 },
  { date: "2017-06-01", ratePct: -0.329 },
  { date: "2017-06-02", ratePct: -0.329 },
  { date: "2017-06-05", ratePct: -0.329 },
  { date: "2017-06-06", ratePct: -0.329 },
  { date: "2017-06-07", ratePct: -0.329 },
  { date: "2017-06-08", ratePct: -0.33 },
  { date: "2017-06-09", ratePct: -0.331 },
  { date: "2017-06-12", ratePct: -0.331 },
  { date: "2017-06-13", ratePct: -0.331 },
  { date: "2017-06-14", ratePct: -0.331 },
  { date: "2017-06-15", ratePct: -0.329 },
  { date: "2017-06-16", ratePct: -0.329 },
  { date: "2017-06-19", ratePct: -0.329 },
  { date: "2017-06-20", ratePct: -0.329 },
  { date: "2017-06-21", ratePct: -0.329 },
  { date: "2017-06-22", ratePct: -0.33 },
  { date: "2017-06-23", ratePct: -0.331 },
  { date: "2017-06-26", ratePct: -0.331 },
  { date: "2017-06-27", ratePct: -0.331 },
  { date: "2017-06-28", ratePct: -0.331 },
  { date: "2017-06-29", ratePct: -0.331 },
  { date: "2017-06-30", ratePct: -0.331 },
  { date: "2017-07-03", ratePct: -0.331 },
  { date: "2017-07-04", ratePct: -0.329 },
  { date: "2017-07-05", ratePct: -0.331 },
  { date: "2017-07-06", ratePct: -0.33 },
  { date: "2017-07-07", ratePct: -0.331 },
  { date: "2017-07-10", ratePct: -0.331 },
  { date: "2017-07-11", ratePct: -0.331 },
  { date: "2017-07-12", ratePct: -0.331 },
  { date: "2017-07-13", ratePct: -0.331 },
  { date: "2017-07-14", ratePct: -0.331 },
  { date: "2017-07-17", ratePct: -0.33 },
  { date: "2017-07-18", ratePct: -0.331 },
  { date: "2017-07-19", ratePct: -0.332 },
  { date: "2017-07-20", ratePct: -0.332 },
  { date: "2017-07-21", ratePct: -0.331 },
  { date: "2017-07-24", ratePct: -0.329 },
  { date: "2017-07-25", ratePct: -0.329 },
  { date: "2017-07-26", ratePct: -0.33 },
  { date: "2017-07-27", ratePct: -0.329 },
  { date: "2017-07-28", ratePct: -0.329 },
  { date: "2017-07-31", ratePct: -0.33 },
  { date: "2017-08-01", ratePct: -0.331 },
  { date: "2017-08-02", ratePct: -0.331 },
  { date: "2017-08-03", ratePct: -0.329 },
  { date: "2017-08-04", ratePct: -0.329 },
  { date: "2017-08-07", ratePct: -0.328 },
  { date: "2017-08-08", ratePct: -0.328 },
  { date: "2017-08-09", ratePct: -0.328 },
  { date: "2017-08-10", ratePct: -0.329 },
  { date: "2017-08-11", ratePct: -0.329 },
  { date: "2017-08-14", ratePct: -0.329 },
  { date: "2017-08-15", ratePct: -0.329 },
  { date: "2017-08-16", ratePct: -0.329 },
  { date: "2017-08-17", ratePct: -0.329 },
  { date: "2017-08-18", ratePct: -0.329 },
  { date: "2017-08-21", ratePct: -0.329 },
  { date: "2017-08-22", ratePct: -0.328 },
  { date: "2017-08-23", ratePct: -0.329 },
  { date: "2017-08-24", ratePct: -0.329 },
  { date: "2017-08-25", ratePct: -0.329 },
  { date: "2017-08-28", ratePct: -0.329 },
  { date: "2017-08-29", ratePct: -0.33 },
  { date: "2017-08-30", ratePct: -0.33 },
  { date: "2017-08-31", ratePct: -0.329 },
  { date: "2017-09-01", ratePct: -0.329 },
  { date: "2017-09-04", ratePct: -0.329 },
  { date: "2017-09-05", ratePct: -0.329 },
  { date: "2017-09-06", ratePct: -0.329 },
  { date: "2017-09-07", ratePct: -0.33 },
  { date: "2017-09-08", ratePct: -0.331 },
  { date: "2017-09-11", ratePct: -0.331 },
  { date: "2017-09-12", ratePct: -0.33 },
  { date: "2017-09-13", ratePct: -0.329 },
  { date: "2017-09-14", ratePct: -0.329 },
  { date: "2017-09-15", ratePct: -0.329 },
  { date: "2017-09-18", ratePct: -0.329 },
  { date: "2017-09-19", ratePct: -0.33 },
  { date: "2017-09-20", ratePct: -0.329 },
  { date: "2017-09-21", ratePct: -0.33 },
  { date: "2017-09-22", ratePct: -0.329 },
  { date: "2017-09-25", ratePct: -0.329 },
  { date: "2017-09-26", ratePct: -0.329 },
  { date: "2017-09-27", ratePct: -0.329 },
  { date: "2017-09-28", ratePct: -0.329 },
  { date: "2017-09-29", ratePct: -0.329 },
  { date: "2017-10-02", ratePct: -0.329 },
  { date: "2017-10-03", ratePct: -0.33 },
  { date: "2017-10-04", ratePct: -0.329 },
  { date: "2017-10-05", ratePct: -0.329 },
  { date: "2017-10-06", ratePct: -0.329 },
  { date: "2017-10-09", ratePct: -0.329 },
  { date: "2017-10-10", ratePct: -0.329 },
  { date: "2017-10-11", ratePct: -0.329 },
  { date: "2017-10-12", ratePct: -0.329 },
  { date: "2017-10-13", ratePct: -0.329 },
  { date: "2017-10-16", ratePct: -0.329 },
  { date: "2017-10-17", ratePct: -0.329 },
  { date: "2017-10-18", ratePct: -0.329 },
  { date: "2017-10-19", ratePct: -0.329 },
  { date: "2017-10-20", ratePct: -0.329 },
  { date: "2017-10-23", ratePct: -0.329 },
  { date: "2017-10-24", ratePct: -0.33 },
  { date: "2017-10-25", ratePct: -0.331 },
  { date: "2017-10-26", ratePct: -0.331 },
  { date: "2017-10-27", ratePct: -0.331 },
  { date: "2017-10-30", ratePct: -0.331 },
  { date: "2017-10-31", ratePct: -0.331 },
  { date: "2017-11-01", ratePct: -0.329 },
  { date: "2017-11-02", ratePct: -0.329 },
  { date: "2017-11-03", ratePct: -0.329 },
  { date: "2017-11-06", ratePct: -0.329 },
  { date: "2017-11-07", ratePct: -0.329 },
  { date: "2017-11-08", ratePct: -0.329 },
  { date: "2017-11-09", ratePct: -0.329 },
  { date: "2017-11-10", ratePct: -0.329 },
  { date: "2017-11-13", ratePct: -0.329 },
  { date: "2017-11-14", ratePct: -0.329 },
  { date: "2017-11-15", ratePct: -0.329 },
  { date: "2017-11-16", ratePct: -0.329 },
  { date: "2017-11-17", ratePct: -0.329 },
  { date: "2017-11-20", ratePct: -0.329 },
  { date: "2017-11-21", ratePct: -0.329 },
  { date: "2017-11-22", ratePct: -0.329 },
  { date: "2017-11-23", ratePct: -0.329 },
  { date: "2017-11-24", ratePct: -0.329 },
  { date: "2017-11-27", ratePct: -0.329 },
  { date: "2017-11-28", ratePct: -0.329 },
  { date: "2017-11-29", ratePct: -0.329 },
  { date: "2017-11-30", ratePct: -0.329 },
  { date: "2017-12-01", ratePct: -0.326 },
  { date: "2017-12-04", ratePct: -0.326 },
  { date: "2017-12-05", ratePct: -0.326 },
  { date: "2017-12-06", ratePct: -0.326 },
  { date: "2017-12-07", ratePct: -0.325 },
  { date: "2017-12-08", ratePct: -0.326 },
  { date: "2017-12-11", ratePct: -0.327 },
  { date: "2017-12-12", ratePct: -0.327 },
  { date: "2017-12-13", ratePct: -0.329 },
  { date: "2017-12-14", ratePct: -0.331 },
  { date: "2017-12-15", ratePct: -0.329 },
  { date: "2017-12-18", ratePct: -0.329 },
  { date: "2017-12-19", ratePct: -0.329 },
  { date: "2017-12-20", ratePct: -0.329 },
  { date: "2017-12-21", ratePct: -0.329 },
  { date: "2017-12-22", ratePct: -0.329 },
  { date: "2017-12-27", ratePct: -0.329 },
  { date: "2017-12-28", ratePct: -0.329 },
  { date: "2017-12-29", ratePct: -0.329 },
  { date: "2018-01-02", ratePct: -0.329 },
  { date: "2018-01-03", ratePct: -0.329 },
  { date: "2018-01-04", ratePct: -0.329 },
  { date: "2018-01-05", ratePct: -0.329 },
  { date: "2018-01-08", ratePct: -0.329 },
  { date: "2018-01-09", ratePct: -0.329 },
  { date: "2018-01-10", ratePct: -0.329 },
  { date: "2018-01-11", ratePct: -0.329 },
  { date: "2018-01-12", ratePct: -0.329 },
  { date: "2018-01-15", ratePct: -0.329 },
  { date: "2018-01-16", ratePct: -0.329 },
  { date: "2018-01-17", ratePct: -0.328 },
  { date: "2018-01-18", ratePct: -0.328 },
  { date: "2018-01-19", ratePct: -0.328 },
  { date: "2018-01-22", ratePct: -0.328 },
  { date: "2018-01-23", ratePct: -0.328 },
  { date: "2018-01-24", ratePct: -0.328 },
  { date: "2018-01-25", ratePct: -0.327 },
  { date: "2018-01-26", ratePct: -0.328 },
  { date: "2018-01-29", ratePct: -0.328 },
  { date: "2018-01-30", ratePct: -0.328 },
  { date: "2018-01-31", ratePct: -0.328 },
  { date: "2018-02-01", ratePct: -0.328 },
  { date: "2018-02-02", ratePct: -0.329 },
  { date: "2018-02-05", ratePct: -0.329 },
  { date: "2018-02-06", ratePct: -0.329 },
  { date: "2018-02-07", ratePct: -0.329 },
  { date: "2018-02-08", ratePct: -0.329 },
  { date: "2018-02-09", ratePct: -0.329 },
  { date: "2018-02-12", ratePct: -0.329 },
  { date: "2018-02-13", ratePct: -0.329 },
  { date: "2018-02-14", ratePct: -0.328 },
  { date: "2018-02-15", ratePct: -0.328 },
  { date: "2018-02-16", ratePct: -0.328 },
  { date: "2018-02-19", ratePct: -0.329 },
  { date: "2018-02-20", ratePct: -0.329 },
  { date: "2018-02-21", ratePct: -0.329 },
  { date: "2018-02-22", ratePct: -0.328 },
  { date: "2018-02-23", ratePct: -0.328 },
  { date: "2018-02-26", ratePct: -0.328 },
  { date: "2018-02-27", ratePct: -0.328 },
  { date: "2018-02-28", ratePct: -0.327 },
  { date: "2018-03-01", ratePct: -0.327 },
  { date: "2018-03-02", ratePct: -0.327 },
  { date: "2018-03-05", ratePct: -0.327 },
  { date: "2018-03-06", ratePct: -0.327 },
  { date: "2018-03-07", ratePct: -0.327 },
  { date: "2018-03-08", ratePct: -0.327 },
  { date: "2018-03-09", ratePct: -0.327 },
  { date: "2018-03-12", ratePct: -0.327 },
  { date: "2018-03-13", ratePct: -0.327 },
  { date: "2018-03-14", ratePct: -0.327 },
  { date: "2018-03-15", ratePct: -0.328 },
  { date: "2018-03-16", ratePct: -0.328 },
  { date: "2018-03-19", ratePct: -0.329 },
  { date: "2018-03-20", ratePct: -0.329 },
  { date: "2018-03-21", ratePct: -0.329 },
  { date: "2018-03-22", ratePct: -0.329 },
  { date: "2018-03-23", ratePct: -0.329 },
  { date: "2018-03-26", ratePct: -0.329 },
  { date: "2018-03-27", ratePct: -0.329 },
  { date: "2018-03-28", ratePct: -0.329 },
  { date: "2018-03-29", ratePct: -0.328 },
  { date: "2018-04-03", ratePct: -0.328 },
  { date: "2018-04-04", ratePct: -0.328 },
  { date: "2018-04-05", ratePct: -0.328 },
  { date: "2018-04-06", ratePct: -0.329 },
  { date: "2018-04-09", ratePct: -0.329 },
  { date: "2018-04-10", ratePct: -0.329 },
  { date: "2018-04-11", ratePct: -0.329 },
  { date: "2018-04-12", ratePct: -0.329 },
  { date: "2018-04-13", ratePct: -0.329 },
  { date: "2018-04-16", ratePct: -0.329 },
  { date: "2018-04-17", ratePct: -0.328 },
  { date: "2018-04-18", ratePct: -0.328 },
  { date: "2018-04-19", ratePct: -0.328 },
  { date: "2018-04-20", ratePct: -0.328 },
  { date: "2018-04-23", ratePct: -0.328 },
  { date: "2018-04-24", ratePct: -0.328 },
  { date: "2018-04-25", ratePct: -0.328 },
  { date: "2018-04-26", ratePct: -0.328 },
  { date: "2018-04-27", ratePct: -0.329 },
  { date: "2018-04-30", ratePct: -0.329 },
  { date: "2018-05-02", ratePct: -0.329 },
  { date: "2018-05-03", ratePct: -0.328 },
  { date: "2018-05-04", ratePct: -0.328 },
  { date: "2018-05-07", ratePct: -0.328 },
  { date: "2018-05-08", ratePct: -0.328 },
  { date: "2018-05-09", ratePct: -0.327 },
  { date: "2018-05-10", ratePct: -0.326 },
  { date: "2018-05-11", ratePct: -0.327 },
  { date: "2018-05-14", ratePct: -0.326 },
  { date: "2018-05-15", ratePct: -0.326 },
  { date: "2018-05-16", ratePct: -0.326 },
  { date: "2018-05-17", ratePct: -0.326 },
  { date: "2018-05-18", ratePct: -0.326 },
  { date: "2018-05-21", ratePct: -0.325 },
  { date: "2018-05-22", ratePct: -0.324 },
  { date: "2018-05-23", ratePct: -0.323 },
  { date: "2018-05-24", ratePct: -0.324 },
  { date: "2018-05-25", ratePct: -0.323 },
  { date: "2018-05-28", ratePct: -0.322 },
  { date: "2018-05-29", ratePct: -0.321 },
  { date: "2018-05-30", ratePct: -0.321 },
  { date: "2018-05-31", ratePct: -0.321 },
  { date: "2018-06-01", ratePct: -0.321 },
  { date: "2018-06-04", ratePct: -0.321 },
  { date: "2018-06-05", ratePct: -0.322 },
  { date: "2018-06-06", ratePct: -0.321 },
  { date: "2018-06-07", ratePct: -0.321 },
  { date: "2018-06-08", ratePct: -0.321 },
  { date: "2018-06-11", ratePct: -0.321 },
  { date: "2018-06-12", ratePct: -0.321 },
  { date: "2018-06-13", ratePct: -0.321 },
  { date: "2018-06-14", ratePct: -0.321 },
  { date: "2018-06-15", ratePct: -0.321 },
  { date: "2018-06-18", ratePct: -0.323 },
  { date: "2018-06-19", ratePct: -0.323 },
  { date: "2018-06-20", ratePct: -0.323 },
  { date: "2018-06-21", ratePct: -0.323 },
  { date: "2018-06-22", ratePct: -0.323 },
  { date: "2018-06-25", ratePct: -0.324 },
  { date: "2018-06-26", ratePct: -0.323 },
  { date: "2018-06-27", ratePct: -0.324 },
  { date: "2018-06-28", ratePct: -0.324 },
  { date: "2018-06-29", ratePct: -0.321 },
  { date: "2018-07-02", ratePct: -0.321 },
  { date: "2018-07-03", ratePct: -0.321 },
  { date: "2018-07-04", ratePct: -0.321 },
  { date: "2018-07-05", ratePct: -0.321 },
  { date: "2018-07-06", ratePct: -0.321 },
  { date: "2018-07-09", ratePct: -0.321 },
  { date: "2018-07-10", ratePct: -0.321 },
  { date: "2018-07-11", ratePct: -0.321 },
  { date: "2018-07-12", ratePct: -0.321 },
  { date: "2018-07-13", ratePct: -0.321 },
  { date: "2018-07-16", ratePct: -0.321 },
  { date: "2018-07-17", ratePct: -0.321 },
  { date: "2018-07-18", ratePct: -0.321 },
  { date: "2018-07-19", ratePct: -0.321 },
  { date: "2018-07-20", ratePct: -0.321 },
  { date: "2018-07-23", ratePct: -0.321 },
  { date: "2018-07-24", ratePct: -0.321 },
  { date: "2018-07-25", ratePct: -0.321 },
  { date: "2018-07-26", ratePct: -0.32 },
  { date: "2018-07-27", ratePct: -0.32 },
  { date: "2018-07-30", ratePct: -0.319 },
  { date: "2018-07-31", ratePct: -0.319 },
  { date: "2018-08-01", ratePct: -0.319 },
  { date: "2018-08-02", ratePct: -0.319 },
  { date: "2018-08-03", ratePct: -0.319 },
  { date: "2018-08-06", ratePct: -0.319 },
  { date: "2018-08-07", ratePct: -0.319 },
  { date: "2018-08-08", ratePct: -0.319 },
  { date: "2018-08-09", ratePct: -0.319 },
  { date: "2018-08-10", ratePct: -0.319 },
  { date: "2018-08-13", ratePct: -0.319 },
  { date: "2018-08-14", ratePct: -0.319 },
  { date: "2018-08-15", ratePct: -0.319 },
  { date: "2018-08-16", ratePct: -0.319 },
  { date: "2018-08-17", ratePct: -0.319 },
  { date: "2018-08-20", ratePct: -0.319 },
  { date: "2018-08-21", ratePct: -0.319 },
  { date: "2018-08-22", ratePct: -0.319 },
  { date: "2018-08-23", ratePct: -0.319 },
  { date: "2018-08-24", ratePct: -0.319 },
  { date: "2018-08-27", ratePct: -0.319 },
  { date: "2018-08-28", ratePct: -0.319 },
  { date: "2018-08-29", ratePct: -0.319 },
  { date: "2018-08-30", ratePct: -0.319 },
  { date: "2018-08-31", ratePct: -0.319 },
  { date: "2018-09-03", ratePct: -0.319 },
  { date: "2018-09-04", ratePct: -0.319 },
  { date: "2018-09-05", ratePct: -0.319 },
  { date: "2018-09-06", ratePct: -0.319 },
  { date: "2018-09-07", ratePct: -0.319 },
  { date: "2018-09-10", ratePct: -0.319 },
  { date: "2018-09-11", ratePct: -0.319 },
  { date: "2018-09-12", ratePct: -0.319 },
  { date: "2018-09-13", ratePct: -0.319 },
  { date: "2018-09-14", ratePct: -0.319 },
  { date: "2018-09-17", ratePct: -0.319 },
  { date: "2018-09-18", ratePct: -0.319 },
  { date: "2018-09-19", ratePct: -0.318 },
  { date: "2018-09-20", ratePct: -0.319 },
  { date: "2018-09-21", ratePct: -0.319 },
  { date: "2018-09-24", ratePct: -0.319 },
  { date: "2018-09-25", ratePct: -0.319 },
  { date: "2018-09-26", ratePct: -0.319 },
  { date: "2018-09-27", ratePct: -0.318 },
  { date: "2018-09-28", ratePct: -0.318 },
  { date: "2018-10-01", ratePct: -0.317 },
  { date: "2018-10-02", ratePct: -0.318 },
  { date: "2018-10-03", ratePct: -0.318 },
  { date: "2018-10-04", ratePct: -0.318 },
  { date: "2018-10-05", ratePct: -0.318 },
  { date: "2018-10-08", ratePct: -0.318 },
  { date: "2018-10-09", ratePct: -0.318 },
  { date: "2018-10-10", ratePct: -0.318 },
  { date: "2018-10-11", ratePct: -0.318 },
  { date: "2018-10-12", ratePct: -0.318 },
  { date: "2018-10-15", ratePct: -0.318 },
  { date: "2018-10-16", ratePct: -0.318 },
  { date: "2018-10-17", ratePct: -0.318 },
  { date: "2018-10-18", ratePct: -0.317 },
  { date: "2018-10-19", ratePct: -0.317 },
  { date: "2018-10-22", ratePct: -0.317 },
  { date: "2018-10-23", ratePct: -0.317 },
  { date: "2018-10-24", ratePct: -0.317 },
  { date: "2018-10-25", ratePct: -0.317 },
  { date: "2018-10-26", ratePct: -0.318 },
  { date: "2018-10-29", ratePct: -0.318 },
  { date: "2018-10-30", ratePct: -0.318 },
  { date: "2018-10-31", ratePct: -0.318 },
  { date: "2018-11-01", ratePct: -0.318 },
  { date: "2018-11-02", ratePct: -0.318 },
  { date: "2018-11-05", ratePct: -0.318 },
  { date: "2018-11-06", ratePct: -0.317 },
  { date: "2018-11-07", ratePct: -0.317 },
  { date: "2018-11-08", ratePct: -0.316 },
  { date: "2018-11-09", ratePct: -0.316 },
  { date: "2018-11-12", ratePct: -0.316 },
  { date: "2018-11-13", ratePct: -0.316 },
  { date: "2018-11-14", ratePct: -0.316 },
  { date: "2018-11-15", ratePct: -0.316 },
  { date: "2018-11-16", ratePct: -0.316 },
  { date: "2018-11-19", ratePct: -0.316 },
  { date: "2018-11-20", ratePct: -0.316 },
  { date: "2018-11-21", ratePct: -0.316 },
  { date: "2018-11-22", ratePct: -0.316 },
  { date: "2018-11-23", ratePct: -0.316 },
  { date: "2018-11-26", ratePct: -0.316 },
  { date: "2018-11-27", ratePct: -0.316 },
  { date: "2018-11-28", ratePct: -0.316 },
  { date: "2018-11-29", ratePct: -0.316 },
  { date: "2018-11-30", ratePct: -0.316 },
  { date: "2018-12-03", ratePct: -0.316 },
  { date: "2018-12-04", ratePct: -0.316 },
  { date: "2018-12-05", ratePct: -0.316 },
  { date: "2018-12-06", ratePct: -0.315 },
  { date: "2018-12-07", ratePct: -0.315 },
  { date: "2018-12-10", ratePct: -0.314 },
  { date: "2018-12-11", ratePct: -0.312 },
  { date: "2018-12-12", ratePct: -0.312 },
  { date: "2018-12-13", ratePct: -0.311 },
  { date: "2018-12-14", ratePct: -0.311 },
  { date: "2018-12-17", ratePct: -0.311 },
  { date: "2018-12-18", ratePct: -0.311 },
  { date: "2018-12-19", ratePct: -0.309 },
  { date: "2018-12-20", ratePct: -0.31 },
  { date: "2018-12-21", ratePct: -0.31 },
  { date: "2018-12-24", ratePct: -0.309 },
  { date: "2018-12-27", ratePct: -0.309 },
  { date: "2018-12-28", ratePct: -0.31 },
  { date: "2018-12-31", ratePct: -0.309 },
  { date: "2019-01-02", ratePct: -0.31 },
  { date: "2019-01-03", ratePct: -0.309 },
  { date: "2019-01-04", ratePct: -0.309 },
  { date: "2019-01-07", ratePct: -0.31 },
  { date: "2019-01-08", ratePct: -0.308 },
  { date: "2019-01-09", ratePct: -0.308 },
  { date: "2019-01-10", ratePct: -0.308 },
  { date: "2019-01-11", ratePct: -0.308 },
  { date: "2019-01-14", ratePct: -0.308 },
  { date: "2019-01-15", ratePct: -0.308 },
  { date: "2019-01-16", ratePct: -0.308 },
  { date: "2019-01-17", ratePct: -0.308 },
  { date: "2019-01-18", ratePct: -0.308 },
  { date: "2019-01-21", ratePct: -0.308 },
  { date: "2019-01-22", ratePct: -0.308 },
  { date: "2019-01-23", ratePct: -0.308 },
  { date: "2019-01-24", ratePct: -0.306 },
  { date: "2019-01-25", ratePct: -0.307 },
  { date: "2019-01-28", ratePct: -0.307 },
  { date: "2019-01-29", ratePct: -0.306 },
  { date: "2019-01-30", ratePct: -0.308 },
  { date: "2019-01-31", ratePct: -0.308 },
  { date: "2019-02-01", ratePct: -0.308 },
  { date: "2019-02-04", ratePct: -0.307 },
  { date: "2019-02-05", ratePct: -0.308 },
  { date: "2019-02-06", ratePct: -0.308 },
  { date: "2019-02-07", ratePct: -0.308 },
  { date: "2019-02-08", ratePct: -0.308 },
  { date: "2019-02-11", ratePct: -0.308 },
  { date: "2019-02-12", ratePct: -0.308 },
  { date: "2019-02-13", ratePct: -0.308 },
  { date: "2019-02-14", ratePct: -0.308 },
  { date: "2019-02-15", ratePct: -0.308 },
  { date: "2019-02-18", ratePct: -0.308 },
  { date: "2019-02-19", ratePct: -0.308 },
  { date: "2019-02-20", ratePct: -0.308 },
  { date: "2019-02-21", ratePct: -0.31 },
  { date: "2019-02-22", ratePct: -0.31 },
  { date: "2019-02-25", ratePct: -0.309 },
  { date: "2019-02-26", ratePct: -0.31 },
  { date: "2019-02-27", ratePct: -0.31 },
  { date: "2019-02-28", ratePct: -0.309 },
  { date: "2019-03-01", ratePct: -0.31 },
  { date: "2019-03-04", ratePct: -0.309 },
  { date: "2019-03-05", ratePct: -0.308 },
  { date: "2019-03-06", ratePct: -0.308 },
  { date: "2019-03-07", ratePct: -0.308 },
  { date: "2019-03-08", ratePct: -0.308 },
  { date: "2019-03-11", ratePct: -0.308 },
  { date: "2019-03-12", ratePct: -0.309 },
  { date: "2019-03-13", ratePct: -0.31 },
  { date: "2019-03-14", ratePct: -0.309 },
  { date: "2019-03-15", ratePct: -0.309 },
  { date: "2019-03-18", ratePct: -0.31 },
  { date: "2019-03-19", ratePct: -0.31 },
  { date: "2019-03-20", ratePct: -0.309 },
  { date: "2019-03-21", ratePct: -0.309 },
  { date: "2019-03-22", ratePct: -0.309 },
  { date: "2019-03-25", ratePct: -0.31 },
  { date: "2019-03-26", ratePct: -0.309 },
  { date: "2019-03-27", ratePct: -0.309 },
  { date: "2019-03-28", ratePct: -0.311 },
  { date: "2019-03-29", ratePct: -0.311 },
  { date: "2019-04-01", ratePct: -0.31 },
  { date: "2019-04-02", ratePct: -0.311 },
  { date: "2019-04-03", ratePct: -0.31 },
  { date: "2019-04-04", ratePct: -0.31 },
  { date: "2019-04-05", ratePct: -0.31 },
  { date: "2019-04-08", ratePct: -0.31 },
  { date: "2019-04-09", ratePct: -0.31 },
  { date: "2019-04-10", ratePct: -0.31 },
  { date: "2019-04-11", ratePct: -0.31 },
  { date: "2019-04-12", ratePct: -0.31 },
  { date: "2019-04-15", ratePct: -0.31 },
  { date: "2019-04-16", ratePct: -0.31 },
  { date: "2019-04-17", ratePct: -0.311 },
  { date: "2019-04-18", ratePct: -0.311 },
  { date: "2019-04-23", ratePct: -0.311 },
  { date: "2019-04-24", ratePct: -0.312 },
  { date: "2019-04-25", ratePct: -0.312 },
  { date: "2019-04-26", ratePct: -0.31 },
  { date: "2019-04-29", ratePct: -0.311 },
  { date: "2019-04-30", ratePct: -0.31 },
  { date: "2019-05-02", ratePct: -0.309 },
  { date: "2019-05-03", ratePct: -0.309 },
  { date: "2019-05-06", ratePct: -0.308 },
  { date: "2019-05-07", ratePct: -0.308 },
  { date: "2019-05-08", ratePct: -0.308 },
  { date: "2019-05-09", ratePct: -0.308 },
  { date: "2019-05-10", ratePct: -0.309 },
  { date: "2019-05-13", ratePct: -0.311 },
  { date: "2019-05-14", ratePct: -0.311 },
  { date: "2019-05-15", ratePct: -0.311 },
  { date: "2019-05-16", ratePct: -0.312 },
  { date: "2019-05-17", ratePct: -0.313 },
  { date: "2019-05-20", ratePct: -0.314 },
  { date: "2019-05-21", ratePct: -0.313 },
  { date: "2019-05-22", ratePct: -0.311 },
  { date: "2019-05-23", ratePct: -0.31 },
  { date: "2019-05-24", ratePct: -0.311 },
  { date: "2019-05-27", ratePct: -0.311 },
  { date: "2019-05-28", ratePct: -0.315 },
  { date: "2019-05-29", ratePct: -0.317 },
  { date: "2019-05-30", ratePct: -0.32 },
  { date: "2019-05-31", ratePct: -0.322 },
  { date: "2019-06-03", ratePct: -0.323 },
  { date: "2019-06-04", ratePct: -0.322 },
  { date: "2019-06-05", ratePct: -0.32 },
  { date: "2019-06-06", ratePct: -0.323 },
  { date: "2019-06-07", ratePct: -0.319 },
  { date: "2019-06-10", ratePct: -0.318 },
  { date: "2019-06-11", ratePct: -0.319 },
  { date: "2019-06-12", ratePct: -0.318 },
  { date: "2019-06-13", ratePct: -0.318 },
  { date: "2019-06-14", ratePct: -0.318 },
  { date: "2019-06-17", ratePct: -0.32 },
  { date: "2019-06-18", ratePct: -0.322 },
  { date: "2019-06-19", ratePct: -0.336 },
  { date: "2019-06-20", ratePct: -0.338 },
  { date: "2019-06-21", ratePct: -0.344 },
  { date: "2019-06-24", ratePct: -0.343 },
  { date: "2019-06-25", ratePct: -0.345 },
  { date: "2019-06-26", ratePct: -0.343 },
  { date: "2019-06-27", ratePct: -0.344 },
  { date: "2019-06-28", ratePct: -0.345 },
  { date: "2019-07-01", ratePct: -0.346 },
  { date: "2019-07-02", ratePct: -0.351 },
  { date: "2019-07-03", ratePct: -0.353 },
  { date: "2019-07-04", ratePct: -0.354 },
  { date: "2019-07-05", ratePct: -0.36 },
  { date: "2019-07-08", ratePct: -0.356 },
  { date: "2019-07-09", ratePct: -0.358 },
  { date: "2019-07-10", ratePct: -0.358 },
  { date: "2019-07-11", ratePct: -0.364 },
  { date: "2019-07-12", ratePct: -0.363 },
  { date: "2019-07-15", ratePct: -0.363 },
  { date: "2019-07-16", ratePct: -0.367 },
  { date: "2019-07-17", ratePct: -0.369 },
  { date: "2019-07-18", ratePct: -0.37 },
  { date: "2019-07-19", ratePct: -0.375 },
  { date: "2019-07-22", ratePct: -0.374 },
  { date: "2019-07-23", ratePct: -0.373 },
  { date: "2019-07-24", ratePct: -0.376 },
  { date: "2019-07-25", ratePct: -0.378 },
  { date: "2019-07-26", ratePct: -0.368 },
  { date: "2019-07-29", ratePct: -0.367 },
  { date: "2019-07-30", ratePct: -0.374 },
  { date: "2019-07-31", ratePct: -0.375 },
  { date: "2019-08-01", ratePct: -0.377 },
  { date: "2019-08-02", ratePct: -0.38 },
  { date: "2019-08-05", ratePct: -0.384 },
  { date: "2019-08-06", ratePct: -0.389 },
  { date: "2019-08-07", ratePct: -0.39 },
  { date: "2019-08-08", ratePct: -0.398 },
  { date: "2019-08-09", ratePct: -0.404 },
  { date: "2019-08-12", ratePct: -0.4 },
  { date: "2019-08-13", ratePct: -0.402 },
  { date: "2019-08-14", ratePct: -0.406 },
  { date: "2019-08-15", ratePct: -0.404 },
  { date: "2019-08-16", ratePct: -0.42 },
  { date: "2019-08-19", ratePct: -0.422 },
  { date: "2019-08-20", ratePct: -0.421 },
  { date: "2019-08-21", ratePct: -0.423 },
  { date: "2019-08-22", ratePct: -0.418 },
  { date: "2019-08-23", ratePct: -0.412 },
  { date: "2019-08-26", ratePct: -0.418 },
  { date: "2019-08-27", ratePct: -0.418 },
  { date: "2019-08-28", ratePct: -0.422 },
  { date: "2019-08-29", ratePct: -0.428 },
  { date: "2019-08-30", ratePct: -0.433 },
  { date: "2019-09-02", ratePct: -0.436 },
  { date: "2019-09-03", ratePct: -0.448 },
  { date: "2019-09-04", ratePct: -0.443 },
  { date: "2019-09-05", ratePct: -0.441 },
  { date: "2019-09-06", ratePct: -0.437 },
  { date: "2019-09-09", ratePct: -0.433 },
  { date: "2019-09-10", ratePct: -0.435 },
  { date: "2019-09-11", ratePct: -0.43 },
  { date: "2019-09-12", ratePct: -0.433 },
  { date: "2019-09-13", ratePct: -0.4 },
  { date: "2019-09-16", ratePct: -0.394 },
  { date: "2019-09-17", ratePct: -0.398 },
  { date: "2019-09-18", ratePct: -0.396 },
  { date: "2019-09-19", ratePct: -0.396 },
  { date: "2019-09-20", ratePct: -0.393 },
  { date: "2019-09-23", ratePct: -0.4 },
  { date: "2019-09-24", ratePct: -0.403 },
  { date: "2019-09-25", ratePct: -0.41 },
  { date: "2019-09-26", ratePct: -0.413 },
  { date: "2019-09-27", ratePct: -0.412 },
  { date: "2019-09-30", ratePct: -0.418 },
  { date: "2019-10-01", ratePct: -0.428 },
  { date: "2019-10-02", ratePct: -0.425 },
  { date: "2019-10-03", ratePct: -0.425 },
  { date: "2019-10-04", ratePct: -0.423 },
  { date: "2019-10-07", ratePct: -0.423 },
  { date: "2019-10-08", ratePct: -0.417 },
  { date: "2019-10-09", ratePct: -0.418 },
  { date: "2019-10-10", ratePct: -0.418 },
  { date: "2019-10-11", ratePct: -0.418 },
  { date: "2019-10-14", ratePct: -0.416 },
  { date: "2019-10-15", ratePct: -0.418 },
  { date: "2019-10-16", ratePct: -0.41 },
  { date: "2019-10-17", ratePct: -0.41 },
  { date: "2019-10-18", ratePct: -0.407 },
  { date: "2019-10-21", ratePct: -0.408 },
  { date: "2019-10-22", ratePct: -0.404 },
  { date: "2019-10-23", ratePct: -0.402 },
  { date: "2019-10-24", ratePct: -0.404 },
  { date: "2019-10-25", ratePct: -0.413 },
  { date: "2019-10-28", ratePct: -0.409 },
  { date: "2019-10-29", ratePct: -0.405 },
  { date: "2019-10-30", ratePct: -0.401 },
  { date: "2019-10-31", ratePct: -0.394 },
  { date: "2019-11-01", ratePct: -0.399 },
  { date: "2019-11-04", ratePct: -0.398 },
  { date: "2019-11-05", ratePct: -0.403 },
  { date: "2019-11-06", ratePct: -0.406 },
  { date: "2019-11-07", ratePct: -0.4 },
  { date: "2019-11-08", ratePct: -0.395 },
  { date: "2019-11-11", ratePct: -0.394 },
  { date: "2019-11-12", ratePct: -0.398 },
  { date: "2019-11-13", ratePct: -0.402 },
  { date: "2019-11-14", ratePct: -0.399 },
  { date: "2019-11-15", ratePct: -0.404 },
  { date: "2019-11-18", ratePct: -0.403 },
  { date: "2019-11-19", ratePct: -0.408 },
  { date: "2019-11-20", ratePct: -0.406 },
  { date: "2019-11-21", ratePct: -0.408 },
  { date: "2019-11-22", ratePct: -0.403 },
  { date: "2019-11-25", ratePct: -0.404 },
  { date: "2019-11-26", ratePct: -0.399 },
  { date: "2019-11-27", ratePct: -0.4 },
  { date: "2019-11-28", ratePct: -0.397 },
  { date: "2019-11-29", ratePct: -0.401 },
  { date: "2019-12-02", ratePct: -0.4 },
  { date: "2019-12-03", ratePct: -0.397 },
  { date: "2019-12-04", ratePct: -0.393 },
  { date: "2019-12-05", ratePct: -0.395 },
  { date: "2019-12-06", ratePct: -0.393 },
  { date: "2019-12-09", ratePct: -0.392 },
  { date: "2019-12-10", ratePct: -0.393 },
  { date: "2019-12-11", ratePct: -0.393 },
  { date: "2019-12-12", ratePct: -0.395 },
  { date: "2019-12-13", ratePct: -0.4 },
  { date: "2019-12-16", ratePct: -0.396 },
  { date: "2019-12-17", ratePct: -0.4 },
  { date: "2019-12-18", ratePct: -0.403 },
  { date: "2019-12-19", ratePct: -0.398 },
  { date: "2019-12-20", ratePct: -0.388 },
  { date: "2019-12-23", ratePct: -0.399 },
  { date: "2019-12-24", ratePct: -0.398 },
  { date: "2019-12-27", ratePct: -0.39 },
  { date: "2019-12-30", ratePct: -0.388 },
  { date: "2019-12-31", ratePct: -0.383 },
  { date: "2020-01-02", ratePct: -0.379 },
  { date: "2020-01-03", ratePct: -0.384 },
  { date: "2020-01-06", ratePct: -0.385 },
  { date: "2020-01-07", ratePct: -0.387 },
  { date: "2020-01-08", ratePct: -0.39 },
  { date: "2020-01-09", ratePct: -0.393 },
  { date: "2020-01-10", ratePct: -0.395 },
  { date: "2020-01-13", ratePct: -0.389 },
  { date: "2020-01-14", ratePct: -0.391 },
  { date: "2020-01-15", ratePct: -0.393 },
  { date: "2020-01-16", ratePct: -0.393 },
  { date: "2020-01-17", ratePct: -0.391 },
  { date: "2020-01-20", ratePct: -0.392 },
  { date: "2020-01-21", ratePct: -0.392 },
  { date: "2020-01-22", ratePct: -0.39 },
  { date: "2020-01-23", ratePct: -0.386 },
  { date: "2020-01-24", ratePct: -0.386 },
  { date: "2020-01-27", ratePct: -0.398 },
  { date: "2020-01-28", ratePct: -0.401 },
  { date: "2020-01-29", ratePct: -0.399 },
  { date: "2020-01-30", ratePct: -0.398 },
  { date: "2020-01-31", ratePct: -0.393 },
  { date: "2020-02-03", ratePct: -0.393 },
  { date: "2020-02-04", ratePct: -0.396 },
  { date: "2020-02-05", ratePct: -0.4 },
  { date: "2020-02-06", ratePct: -0.399 },
  { date: "2020-02-07", ratePct: -0.4 },
  { date: "2020-02-10", ratePct: -0.397 },
  { date: "2020-02-11", ratePct: -0.409 },
  { date: "2020-02-12", ratePct: -0.413 },
  { date: "2020-02-13", ratePct: -0.411 },
  { date: "2020-02-14", ratePct: -0.413 },
  { date: "2020-02-17", ratePct: -0.413 },
  { date: "2020-02-18", ratePct: -0.403 },
  { date: "2020-02-19", ratePct: -0.402 },
  { date: "2020-02-20", ratePct: -0.41 },
  { date: "2020-02-21", ratePct: -0.415 },
  { date: "2020-02-24", ratePct: -0.414 },
  { date: "2020-02-25", ratePct: -0.417 },
  { date: "2020-02-26", ratePct: -0.423 },
  { date: "2020-02-27", ratePct: -0.425 },
  { date: "2020-02-28", ratePct: -0.424 },
  { date: "2020-03-02", ratePct: -0.434 },
  { date: "2020-03-03", ratePct: -0.463 },
  { date: "2020-03-04", ratePct: -0.468 },
  { date: "2020-03-05", ratePct: -0.469 },
  { date: "2020-03-06", ratePct: -0.473 },
  { date: "2020-03-09", ratePct: -0.468 },
  { date: "2020-03-10", ratePct: -0.482 },
  { date: "2020-03-11", ratePct: -0.473 },
  { date: "2020-03-12", ratePct: -0.489 },
  { date: "2020-03-13", ratePct: -0.428 },
  { date: "2020-03-16", ratePct: -0.41 },
  { date: "2020-03-17", ratePct: -0.408 },
  { date: "2020-03-18", ratePct: -0.408 },
  { date: "2020-03-19", ratePct: -0.393 },
  { date: "2020-03-20", ratePct: -0.371 },
  { date: "2020-03-23", ratePct: -0.369 },
  { date: "2020-03-24", ratePct: -0.373 },
  { date: "2020-03-25", ratePct: -0.369 },
  { date: "2020-03-26", ratePct: -0.349 },
  { date: "2020-03-27", ratePct: -0.353 },
  { date: "2020-03-30", ratePct: -0.353 },
  { date: "2020-03-31", ratePct: -0.363 },
  { date: "2020-04-01", ratePct: -0.343 },
  { date: "2020-04-02", ratePct: -0.336 },
  { date: "2020-04-03", ratePct: -0.341 },
  { date: "2020-04-06", ratePct: -0.318 },
  { date: "2020-04-07", ratePct: -0.293 },
  { date: "2020-04-08", ratePct: -0.254 },
  { date: "2020-04-09", ratePct: -0.22 },
  { date: "2020-04-14", ratePct: -0.248 },
  { date: "2020-04-15", ratePct: -0.25 },
  { date: "2020-04-16", ratePct: -0.224 },
  { date: "2020-04-17", ratePct: -0.243 },
  { date: "2020-04-20", ratePct: -0.246 },
  { date: "2020-04-21", ratePct: -0.233 },
  { date: "2020-04-22", ratePct: -0.19 },
  { date: "2020-04-23", ratePct: -0.161 },
  { date: "2020-04-24", ratePct: -0.192 },
  { date: "2020-04-27", ratePct: -0.223 },
  { date: "2020-04-28", ratePct: -0.232 },
  { date: "2020-04-29", ratePct: -0.261 },
  { date: "2020-04-30", ratePct: -0.273 },
  { date: "2020-05-04", ratePct: -0.286 },
  { date: "2020-05-05", ratePct: -0.297 },
  { date: "2020-05-06", ratePct: -0.266 },
  { date: "2020-05-07", ratePct: -0.258 },
  { date: "2020-05-08", ratePct: -0.246 },
  { date: "2020-05-11", ratePct: -0.258 },
  { date: "2020-05-12", ratePct: -0.245 },
  { date: "2020-05-13", ratePct: -0.253 },
  { date: "2020-05-14", ratePct: -0.262 },
  { date: "2020-05-15", ratePct: -0.266 },
  { date: "2020-05-18", ratePct: -0.276 },
  { date: "2020-05-19", ratePct: -0.259 },
  { date: "2020-05-20", ratePct: -0.28 },
  { date: "2020-05-21", ratePct: -0.282 },
  { date: "2020-05-22", ratePct: -0.279 },
  { date: "2020-05-25", ratePct: -0.275 },
  { date: "2020-05-26", ratePct: -0.274 },
  { date: "2020-05-27", ratePct: -0.28 },
  { date: "2020-05-28", ratePct: -0.29 },
  { date: "2020-05-29", ratePct: -0.307 },
  { date: "2020-06-01", ratePct: -0.325 },
  { date: "2020-06-02", ratePct: -0.33 },
  { date: "2020-06-03", ratePct: -0.342 },
  { date: "2020-06-04", ratePct: -0.352 },
  { date: "2020-06-05", ratePct: -0.353 },
  { date: "2020-06-08", ratePct: -0.365 },
  { date: "2020-06-09", ratePct: -0.364 },
  { date: "2020-06-10", ratePct: -0.351 },
  { date: "2020-06-11", ratePct: -0.358 },
  { date: "2020-06-12", ratePct: -0.366 },
  { date: "2020-06-15", ratePct: -0.355 },
  { date: "2020-06-16", ratePct: -0.372 },
  { date: "2020-06-17", ratePct: -0.396 },
  { date: "2020-06-18", ratePct: -0.389 },
  { date: "2020-06-19", ratePct: -0.407 },
  { date: "2020-06-22", ratePct: -0.4 },
  { date: "2020-06-23", ratePct: -0.409 },
  { date: "2020-06-24", ratePct: -0.398 },
  { date: "2020-06-25", ratePct: -0.402 },
  { date: "2020-06-26", ratePct: -0.403 },
  { date: "2020-06-29", ratePct: -0.413 },
  { date: "2020-06-30", ratePct: -0.422 },
  { date: "2020-07-01", ratePct: -0.417 },
  { date: "2020-07-02", ratePct: -0.429 },
  { date: "2020-07-03", ratePct: -0.435 },
  { date: "2020-07-06", ratePct: -0.441 },
  { date: "2020-07-07", ratePct: -0.436 },
  { date: "2020-07-08", ratePct: -0.433 },
  { date: "2020-07-09", ratePct: -0.438 },
  { date: "2020-07-10", ratePct: -0.44 },
  { date: "2020-07-13", ratePct: -0.435 },
  { date: "2020-07-14", ratePct: -0.433 },
  { date: "2020-07-15", ratePct: -0.443 },
  { date: "2020-07-16", ratePct: -0.449 },
  { date: "2020-07-17", ratePct: -0.443 },
  { date: "2020-07-20", ratePct: -0.443 },
  { date: "2020-07-21", ratePct: -0.452 },
  { date: "2020-07-22", ratePct: -0.454 },
  { date: "2020-07-23", ratePct: -0.453 },
  { date: "2020-07-24", ratePct: -0.448 },
  { date: "2020-07-27", ratePct: -0.457 },
  { date: "2020-07-28", ratePct: -0.454 },
  { date: "2020-07-29", ratePct: -0.458 },
  { date: "2020-07-30", ratePct: -0.461 },
  { date: "2020-07-31", ratePct: -0.463 },
  { date: "2020-08-03", ratePct: -0.469 },
  { date: "2020-08-04", ratePct: -0.472 },
  { date: "2020-08-05", ratePct: -0.467 },
  { date: "2020-08-06", ratePct: -0.474 },
  { date: "2020-08-07", ratePct: -0.478 },
  { date: "2020-08-10", ratePct: -0.478 },
  { date: "2020-08-11", ratePct: -0.482 },
  { date: "2020-08-12", ratePct: -0.486 },
  { date: "2020-08-13", ratePct: -0.481 },
  { date: "2020-08-14", ratePct: -0.482 },
  { date: "2020-08-17", ratePct: -0.48 },
  { date: "2020-08-18", ratePct: -0.483 },
  { date: "2020-08-19", ratePct: -0.488 },
  { date: "2020-08-20", ratePct: -0.491 },
  { date: "2020-08-21", ratePct: -0.487 },
  { date: "2020-08-24", ratePct: -0.488 },
  { date: "2020-08-25", ratePct: -0.481 },
  { date: "2020-08-26", ratePct: -0.476 },
  { date: "2020-08-27", ratePct: -0.477 },
  { date: "2020-08-28", ratePct: -0.477 },
  { date: "2020-08-31", ratePct: -0.477 },
  { date: "2020-09-01", ratePct: -0.478 },
  { date: "2020-09-02", ratePct: -0.478 },
  { date: "2020-09-03", ratePct: -0.48 },
  { date: "2020-09-04", ratePct: -0.483 },
  { date: "2020-09-07", ratePct: -0.487 },
  { date: "2020-09-08", ratePct: -0.488 },
  { date: "2020-09-09", ratePct: -0.493 },
  { date: "2020-09-10", ratePct: -0.488 },
  { date: "2020-09-11", ratePct: -0.484 },
  { date: "2020-09-14", ratePct: -0.484 },
  { date: "2020-09-15", ratePct: -0.485 },
  { date: "2020-09-16", ratePct: -0.487 },
  { date: "2020-09-17", ratePct: -0.501 },
  { date: "2020-09-18", ratePct: -0.504 },
  { date: "2020-09-21", ratePct: -0.508 },
  { date: "2020-09-22", ratePct: -0.508 },
  { date: "2020-09-23", ratePct: -0.498 },
  { date: "2020-09-24", ratePct: -0.493 },
  { date: "2020-09-25", ratePct: -0.498 },
  { date: "2020-09-28", ratePct: -0.493 },
  { date: "2020-09-29", ratePct: -0.494 },
  { date: "2020-09-30", ratePct: -0.498 },
  { date: "2020-10-01", ratePct: -0.498 },
  { date: "2020-10-02", ratePct: -0.505 },
  { date: "2020-10-05", ratePct: -0.509 },
  { date: "2020-10-06", ratePct: -0.505 },
  { date: "2020-10-07", ratePct: -0.508 },
  { date: "2020-10-08", ratePct: -0.506 },
  { date: "2020-10-09", ratePct: -0.509 },
  { date: "2020-10-12", ratePct: -0.511 },
  { date: "2020-10-13", ratePct: -0.508 },
  { date: "2020-10-14", ratePct: -0.511 },
  { date: "2020-10-15", ratePct: -0.507 },
  { date: "2020-10-16", ratePct: -0.509 },
  { date: "2020-10-19", ratePct: -0.509 },
  { date: "2020-10-20", ratePct: -0.507 },
  { date: "2020-10-21", ratePct: -0.507 },
  { date: "2020-10-22", ratePct: -0.511 },
  { date: "2020-10-23", ratePct: -0.512 },
  { date: "2020-10-26", ratePct: -0.509 },
  { date: "2020-10-27", ratePct: -0.51 },
  { date: "2020-10-28", ratePct: -0.512 },
  { date: "2020-10-29", ratePct: -0.515 },
  { date: "2020-10-30", ratePct: -0.523 },
  { date: "2020-11-02", ratePct: -0.52 },
  { date: "2020-11-03", ratePct: -0.52 },
  { date: "2020-11-04", ratePct: -0.517 },
  { date: "2020-11-05", ratePct: -0.517 },
  { date: "2020-11-06", ratePct: -0.513 },
  { date: "2020-11-09", ratePct: -0.516 },
  { date: "2020-11-10", ratePct: -0.51 },
  { date: "2020-11-11", ratePct: -0.518 },
  { date: "2020-11-12", ratePct: -0.513 },
  { date: "2020-11-13", ratePct: -0.514 },
  { date: "2020-11-16", ratePct: -0.522 },
  { date: "2020-11-17", ratePct: -0.522 },
  { date: "2020-11-18", ratePct: -0.527 },
  { date: "2020-11-19", ratePct: -0.527 },
  { date: "2020-11-20", ratePct: -0.528 },
  { date: "2020-11-23", ratePct: -0.523 },
  { date: "2020-11-24", ratePct: -0.523 },
  { date: "2020-11-25", ratePct: -0.526 },
  { date: "2020-11-26", ratePct: -0.528 },
  { date: "2020-11-27", ratePct: -0.528 },
  { date: "2020-11-30", ratePct: -0.526 },
  { date: "2020-12-01", ratePct: -0.526 },
  { date: "2020-12-02", ratePct: -0.524 },
  { date: "2020-12-03", ratePct: -0.527 },
  { date: "2020-12-04", ratePct: -0.532 },
  { date: "2020-12-07", ratePct: -0.534 },
  { date: "2020-12-08", ratePct: -0.536 },
  { date: "2020-12-09", ratePct: -0.545 },
  { date: "2020-12-10", ratePct: -0.546 },
  { date: "2020-12-11", ratePct: -0.543 },
  { date: "2020-12-14", ratePct: -0.543 },
  { date: "2020-12-15", ratePct: -0.544 },
  { date: "2020-12-16", ratePct: -0.54 },
  { date: "2020-12-17", ratePct: -0.541 },
  { date: "2020-12-18", ratePct: -0.537 },
  { date: "2020-12-21", ratePct: -0.532 },
  { date: "2020-12-22", ratePct: -0.539 },
  { date: "2020-12-23", ratePct: -0.541 },
  { date: "2020-12-24", ratePct: -0.542 },
  { date: "2020-12-28", ratePct: -0.542 },
  { date: "2020-12-29", ratePct: -0.538 },
  { date: "2020-12-30", ratePct: -0.541 },
  { date: "2020-12-31", ratePct: -0.545 },
  { date: "2021-01-04", ratePct: -0.546 },
  { date: "2021-01-05", ratePct: -0.552 },
  { date: "2021-01-06", ratePct: -0.556 },
  { date: "2021-01-07", ratePct: -0.554 },
  { date: "2021-01-08", ratePct: -0.55 },
  { date: "2021-01-11", ratePct: -0.545 },
  { date: "2021-01-12", ratePct: -0.549 },
  { date: "2021-01-13", ratePct: -0.545 },
  { date: "2021-01-14", ratePct: -0.55 },
  { date: "2021-01-15", ratePct: -0.552 },
  { date: "2021-01-18", ratePct: -0.553 },
  { date: "2021-01-19", ratePct: -0.548 },
  { date: "2021-01-20", ratePct: -0.543 },
  { date: "2021-01-21", ratePct: -0.543 },
  { date: "2021-01-22", ratePct: -0.54 },
  { date: "2021-01-25", ratePct: -0.543 },
  { date: "2021-01-26", ratePct: -0.539 },
  { date: "2021-01-27", ratePct: -0.543 },
  { date: "2021-01-28", ratePct: -0.544 },
  { date: "2021-01-29", ratePct: -0.548 },
  { date: "2021-02-01", ratePct: -0.543 },
  { date: "2021-02-02", ratePct: -0.54 },
  { date: "2021-02-03", ratePct: -0.545 },
  { date: "2021-02-04", ratePct: -0.543 },
  { date: "2021-02-05", ratePct: -0.535 },
  { date: "2021-02-08", ratePct: -0.536 },
  { date: "2021-02-09", ratePct: -0.54 },
  { date: "2021-02-10", ratePct: -0.541 },
  { date: "2021-02-11", ratePct: -0.541 },
  { date: "2021-02-12", ratePct: -0.547 },
  { date: "2021-02-15", ratePct: -0.547 },
  { date: "2021-02-16", ratePct: -0.543 },
  { date: "2021-02-17", ratePct: -0.545 },
  { date: "2021-02-18", ratePct: -0.543 },
  { date: "2021-02-19", ratePct: -0.543 },
  { date: "2021-02-22", ratePct: -0.543 },
  { date: "2021-02-23", ratePct: -0.54 },
  { date: "2021-02-24", ratePct: -0.539 },
  { date: "2021-02-25", ratePct: -0.538 },
  { date: "2021-02-26", ratePct: -0.53 },
  { date: "2021-03-01", ratePct: -0.533 },
  { date: "2021-03-02", ratePct: -0.54 },
  { date: "2021-03-03", ratePct: -0.546 },
  { date: "2021-03-04", ratePct: -0.541 },
  { date: "2021-03-05", ratePct: -0.537 },
  { date: "2021-03-08", ratePct: -0.537 },
  { date: "2021-03-09", ratePct: -0.54 },
  { date: "2021-03-10", ratePct: -0.543 },
  { date: "2021-03-11", ratePct: -0.542 },
  { date: "2021-03-12", ratePct: -0.539 },
  { date: "2021-03-15", ratePct: -0.538 },
  { date: "2021-03-16", ratePct: -0.542 },
  { date: "2021-03-17", ratePct: -0.543 },
  { date: "2021-03-18", ratePct: -0.54 },
  { date: "2021-03-19", ratePct: -0.539 },
  { date: "2021-03-22", ratePct: -0.538 },
  { date: "2021-03-23", ratePct: -0.537 },
  { date: "2021-03-24", ratePct: -0.535 },
  { date: "2021-03-25", ratePct: -0.538 },
  { date: "2021-03-26", ratePct: -0.537 },
  { date: "2021-03-29", ratePct: -0.536 },
  { date: "2021-03-30", ratePct: -0.54 },
  { date: "2021-03-31", ratePct: -0.538 },
  { date: "2021-04-01", ratePct: -0.538 },
  { date: "2021-04-06", ratePct: -0.538 },
  { date: "2021-04-07", ratePct: -0.543 },
  { date: "2021-04-08", ratePct: -0.545 },
  { date: "2021-04-09", ratePct: -0.544 },
  { date: "2021-04-12", ratePct: -0.538 },
  { date: "2021-04-13", ratePct: -0.538 },
  { date: "2021-04-14", ratePct: -0.538 },
  { date: "2021-04-15", ratePct: -0.537 },
  { date: "2021-04-16", ratePct: -0.538 },
  { date: "2021-04-19", ratePct: -0.537 },
  { date: "2021-04-20", ratePct: -0.538 },
  { date: "2021-04-21", ratePct: -0.535 },
  { date: "2021-04-22", ratePct: -0.539 },
  { date: "2021-04-23", ratePct: -0.539 },
  { date: "2021-04-26", ratePct: -0.538 },
  { date: "2021-04-27", ratePct: -0.535 },
  { date: "2021-04-28", ratePct: -0.534 },
  { date: "2021-04-29", ratePct: -0.536 },
  { date: "2021-04-30", ratePct: -0.535 },
  { date: "2021-05-03", ratePct: -0.535 },
  { date: "2021-05-04", ratePct: -0.535 },
  { date: "2021-05-05", ratePct: -0.531 },
  { date: "2021-05-06", ratePct: -0.532 },
  { date: "2021-05-07", ratePct: -0.529 },
  { date: "2021-05-10", ratePct: -0.533 },
  { date: "2021-05-11", ratePct: -0.533 },
  { date: "2021-05-12", ratePct: -0.539 },
  { date: "2021-05-13", ratePct: -0.541 },
  { date: "2021-05-14", ratePct: -0.549 },
  { date: "2021-05-17", ratePct: -0.548 },
  { date: "2021-05-18", ratePct: -0.553 },
  { date: "2021-05-19", ratePct: -0.552 },
  { date: "2021-05-20", ratePct: -0.545 },
  { date: "2021-05-21", ratePct: -0.543 },
  { date: "2021-05-24", ratePct: -0.542 },
  { date: "2021-05-25", ratePct: -0.538 },
  { date: "2021-05-26", ratePct: -0.537 },
  { date: "2021-05-27", ratePct: -0.54 },
  { date: "2021-05-28", ratePct: -0.543 },
  { date: "2021-05-31", ratePct: -0.544 },
  { date: "2021-06-01", ratePct: -0.545 },
  { date: "2021-06-02", ratePct: -0.543 },
  { date: "2021-06-03", ratePct: -0.542 },
  { date: "2021-06-04", ratePct: -0.546 },
  { date: "2021-06-07", ratePct: -0.546 },
  { date: "2021-06-08", ratePct: -0.543 },
  { date: "2021-06-09", ratePct: -0.542 },
  { date: "2021-06-10", ratePct: -0.545 },
  { date: "2021-06-11", ratePct: -0.548 },
  { date: "2021-06-14", ratePct: -0.546 },
  { date: "2021-06-15", ratePct: -0.542 },
  { date: "2021-06-16", ratePct: -0.547 },
  { date: "2021-06-17", ratePct: -0.543 },
  { date: "2021-06-18", ratePct: -0.544 },
  { date: "2021-06-21", ratePct: -0.542 },
  { date: "2021-06-22", ratePct: -0.54 },
  { date: "2021-06-23", ratePct: -0.538 },
  { date: "2021-06-24", ratePct: -0.538 },
  { date: "2021-06-25", ratePct: -0.538 },
  { date: "2021-06-28", ratePct: -0.543 },
  { date: "2021-06-29", ratePct: -0.541 },
  { date: "2021-06-30", ratePct: -0.542 },
  { date: "2021-07-01", ratePct: -0.54 },
  { date: "2021-07-02", ratePct: -0.546 },
  { date: "2021-07-05", ratePct: -0.542 },
  { date: "2021-07-06", ratePct: -0.539 },
  { date: "2021-07-07", ratePct: -0.547 },
  { date: "2021-07-08", ratePct: -0.546 },
  { date: "2021-07-09", ratePct: -0.543 },
  { date: "2021-07-12", ratePct: -0.543 },
  { date: "2021-07-13", ratePct: -0.546 },
  { date: "2021-07-14", ratePct: -0.546 },
  { date: "2021-07-15", ratePct: -0.548 },
  { date: "2021-07-16", ratePct: -0.548 },
  { date: "2021-07-19", ratePct: -0.548 },
  { date: "2021-07-20", ratePct: -0.543 },
  { date: "2021-07-21", ratePct: -0.546 },
  { date: "2021-07-22", ratePct: -0.549 },
  { date: "2021-07-23", ratePct: -0.544 },
  { date: "2021-07-26", ratePct: -0.544 },
  { date: "2021-07-27", ratePct: -0.543 },
  { date: "2021-07-28", ratePct: -0.547 },
  { date: "2021-07-29", ratePct: -0.544 },
  { date: "2021-07-30", ratePct: -0.544 },
  { date: "2021-08-02", ratePct: -0.543 },
  { date: "2021-08-03", ratePct: -0.545 },
  { date: "2021-08-04", ratePct: -0.543 },
  { date: "2021-08-05", ratePct: -0.54 },
  { date: "2021-08-06", ratePct: -0.541 },
  { date: "2021-08-09", ratePct: -0.543 },
  { date: "2021-08-10", ratePct: -0.547 },
  { date: "2021-08-11", ratePct: -0.549 },
  { date: "2021-08-12", ratePct: -0.553 },
  { date: "2021-08-13", ratePct: -0.552 },
  { date: "2021-08-16", ratePct: -0.55 },
  { date: "2021-08-17", ratePct: -0.55 },
  { date: "2021-08-18", ratePct: -0.548 },
  { date: "2021-08-19", ratePct: -0.55 },
  { date: "2021-08-20", ratePct: -0.548 },
  { date: "2021-08-23", ratePct: -0.549 },
  { date: "2021-08-24", ratePct: -0.549 },
  { date: "2021-08-25", ratePct: -0.55 },
  { date: "2021-08-26", ratePct: -0.55 },
  { date: "2021-08-27", ratePct: -0.55 },
  { date: "2021-08-30", ratePct: -0.549 },
  { date: "2021-08-31", ratePct: -0.548 },
  { date: "2021-09-01", ratePct: -0.55 },
  { date: "2021-09-02", ratePct: -0.551 },
  { date: "2021-09-03", ratePct: -0.548 },
  { date: "2021-09-06", ratePct: -0.549 },
  { date: "2021-09-07", ratePct: -0.543 },
  { date: "2021-09-08", ratePct: -0.541 },
  { date: "2021-09-09", ratePct: -0.543 },
  { date: "2021-09-10", ratePct: -0.544 },
  { date: "2021-09-13", ratePct: -0.544 },
  { date: "2021-09-14", ratePct: -0.548 },
  { date: "2021-09-15", ratePct: -0.543 },
  { date: "2021-09-16", ratePct: -0.545 },
  { date: "2021-09-17", ratePct: -0.548 },
  { date: "2021-09-20", ratePct: -0.545 },
  { date: "2021-09-21", ratePct: -0.546 },
  { date: "2021-09-22", ratePct: -0.544 },
  { date: "2021-09-23", ratePct: -0.543 },
  { date: "2021-09-24", ratePct: -0.543 },
  { date: "2021-09-27", ratePct: -0.542 },
  { date: "2021-09-28", ratePct: -0.543 },
  { date: "2021-09-29", ratePct: -0.543 },
  { date: "2021-09-30", ratePct: -0.545 },
  { date: "2021-10-01", ratePct: -0.547 },
  { date: "2021-10-04", ratePct: -0.548 },
  { date: "2021-10-05", ratePct: -0.551 },
  { date: "2021-10-06", ratePct: -0.551 },
  { date: "2021-10-07", ratePct: -0.547 },
  { date: "2021-10-08", ratePct: -0.548 },
  { date: "2021-10-11", ratePct: -0.551 },
  { date: "2021-10-12", ratePct: -0.552 },
  { date: "2021-10-13", ratePct: -0.548 },
  { date: "2021-10-14", ratePct: -0.551 },
  { date: "2021-10-15", ratePct: -0.548 },
  { date: "2021-10-18", ratePct: -0.548 },
  { date: "2021-10-19", ratePct: -0.548 },
  { date: "2021-10-20", ratePct: -0.547 },
  { date: "2021-10-21", ratePct: -0.548 },
  { date: "2021-10-22", ratePct: -0.549 },
  { date: "2021-10-25", ratePct: -0.548 },
  { date: "2021-10-26", ratePct: -0.55 },
  { date: "2021-10-27", ratePct: -0.556 },
  { date: "2021-10-28", ratePct: -0.557 },
  { date: "2021-10-29", ratePct: -0.553 },
  { date: "2021-11-01", ratePct: -0.558 },
  { date: "2021-11-02", ratePct: -0.567 },
  { date: "2021-11-03", ratePct: -0.573 },
  { date: "2021-11-04", ratePct: -0.568 },
  { date: "2021-11-05", ratePct: -0.567 },
  { date: "2021-11-08", ratePct: -0.572 },
  { date: "2021-11-09", ratePct: -0.565 },
  { date: "2021-11-10", ratePct: -0.569 },
  { date: "2021-11-11", ratePct: -0.563 },
  { date: "2021-11-12", ratePct: -0.562 },
  { date: "2021-11-15", ratePct: -0.561 },
  { date: "2021-11-16", ratePct: -0.558 },
  { date: "2021-11-17", ratePct: -0.567 },
  { date: "2021-11-18", ratePct: -0.564 },
  { date: "2021-11-19", ratePct: -0.559 },
  { date: "2021-11-22", ratePct: -0.564 },
  { date: "2021-11-23", ratePct: -0.572 },
  { date: "2021-11-24", ratePct: -0.583 },
  { date: "2021-11-25", ratePct: -0.575 },
  { date: "2021-11-26", ratePct: -0.572 },
  { date: "2021-11-29", ratePct: -0.57 },
  { date: "2021-11-30", ratePct: -0.573 },
  { date: "2021-12-01", ratePct: -0.572 },
  { date: "2021-12-02", ratePct: -0.565 },
  { date: "2021-12-03", ratePct: -0.563 },
  { date: "2021-12-06", ratePct: -0.562 },
  { date: "2021-12-07", ratePct: -0.565 },
  { date: "2021-12-08", ratePct: -0.574 },
  { date: "2021-12-09", ratePct: -0.585 },
  { date: "2021-12-10", ratePct: -0.588 },
  { date: "2021-12-13", ratePct: -0.603 },
  { date: "2021-12-14", ratePct: -0.605 },
  { date: "2021-12-15", ratePct: -0.602 },
  { date: "2021-12-16", ratePct: -0.589 },
  { date: "2021-12-17", ratePct: -0.581 },
  { date: "2021-12-20", ratePct: -0.588 },
  { date: "2021-12-21", ratePct: -0.588 },
  { date: "2021-12-22", ratePct: -0.591 },
  { date: "2021-12-23", ratePct: -0.588 },
  { date: "2021-12-24", ratePct: -0.587 },
  { date: "2021-12-27", ratePct: -0.59 },
  { date: "2021-12-28", ratePct: -0.583 },
  { date: "2021-12-29", ratePct: -0.571 },
  { date: "2021-12-30", ratePct: -0.573 },
  { date: "2021-12-31", ratePct: -0.572 },
  { date: "2022-01-03", ratePct: -0.57 },
  { date: "2022-01-04", ratePct: -0.565 },
  { date: "2022-01-05", ratePct: -0.576 },
  { date: "2022-01-06", ratePct: -0.574 },
  { date: "2022-01-07", ratePct: -0.576 },
  { date: "2022-01-10", ratePct: -0.57 },
  { date: "2022-01-11", ratePct: -0.564 },
  { date: "2022-01-12", ratePct: -0.563 },
  { date: "2022-01-13", ratePct: -0.563 },
  { date: "2022-01-14", ratePct: -0.568 },
  { date: "2022-01-17", ratePct: -0.56 },
  { date: "2022-01-18", ratePct: -0.558 },
  { date: "2022-01-19", ratePct: -0.557 },
  { date: "2022-01-20", ratePct: -0.553 },
  { date: "2022-01-21", ratePct: -0.552 },
  { date: "2022-01-24", ratePct: -0.543 },
  { date: "2022-01-25", ratePct: -0.548 },
  { date: "2022-01-26", ratePct: -0.554 },
  { date: "2022-01-27", ratePct: -0.547 },
  { date: "2022-01-28", ratePct: -0.55 },
  { date: "2022-01-31", ratePct: -0.552 },
  { date: "2022-02-01", ratePct: -0.547 },
  { date: "2022-02-02", ratePct: -0.547 },
  { date: "2022-02-03", ratePct: -0.551 },
  { date: "2022-02-04", ratePct: -0.548 },
  { date: "2022-02-07", ratePct: -0.53 },
  { date: "2022-02-08", ratePct: -0.538 },
  { date: "2022-02-09", ratePct: -0.523 },
  { date: "2022-02-10", ratePct: -0.528 },
  { date: "2022-02-11", ratePct: -0.523 },
  { date: "2022-02-14", ratePct: -0.516 },
  { date: "2022-02-15", ratePct: -0.523 },
  { date: "2022-02-16", ratePct: -0.524 },
  { date: "2022-02-17", ratePct: -0.529 },
  { date: "2022-02-18", ratePct: -0.528 },
  { date: "2022-02-21", ratePct: -0.527 },
  { date: "2022-02-22", ratePct: -0.528 },
  { date: "2022-02-23", ratePct: -0.529 },
  { date: "2022-02-24", ratePct: -0.53 },
  { date: "2022-02-25", ratePct: -0.528 },
  { date: "2022-02-28", ratePct: -0.533 },
  { date: "2022-03-01", ratePct: -0.534 },
  { date: "2022-03-02", ratePct: -0.532 },
  { date: "2022-03-03", ratePct: -0.526 },
  { date: "2022-03-04", ratePct: -0.52 },
  { date: "2022-03-07", ratePct: -0.498 },
  { date: "2022-03-08", ratePct: -0.499 },
  { date: "2022-03-09", ratePct: -0.491 },
  { date: "2022-03-10", ratePct: -0.505 },
  { date: "2022-03-11", ratePct: -0.502 },
  { date: "2022-03-14", ratePct: -0.5 },
  { date: "2022-03-15", ratePct: -0.502 },
  { date: "2022-03-16", ratePct: -0.488 },
  { date: "2022-03-17", ratePct: -0.493 },
  { date: "2022-03-18", ratePct: -0.487 },
  { date: "2022-03-21", ratePct: -0.494 },
  { date: "2022-03-22", ratePct: -0.499 },
  { date: "2022-03-23", ratePct: -0.493 },
  { date: "2022-03-24", ratePct: -0.483 },
  { date: "2022-03-25", ratePct: -0.477 },
  { date: "2022-03-28", ratePct: -0.477 },
  { date: "2022-03-29", ratePct: -0.473 },
  { date: "2022-03-30", ratePct: -0.464 },
  { date: "2022-03-31", ratePct: -0.458 },
  { date: "2022-04-01", ratePct: -0.461 },
  { date: "2022-04-04", ratePct: -0.447 },
  { date: "2022-04-05", ratePct: -0.467 },
  { date: "2022-04-06", ratePct: -0.463 },
  { date: "2022-04-07", ratePct: -0.465 },
  { date: "2022-04-08", ratePct: -0.449 },
  { date: "2022-04-11", ratePct: -0.435 },
  { date: "2022-04-12", ratePct: -0.433 },
  { date: "2022-04-13", ratePct: -0.448 },
  { date: "2022-04-14", ratePct: -0.452 },
  { date: "2022-04-19", ratePct: -0.468 },
  { date: "2022-04-20", ratePct: -0.475 },
  { date: "2022-04-21", ratePct: -0.463 },
  { date: "2022-04-22", ratePct: -0.427 },
  { date: "2022-04-25", ratePct: -0.415 },
  { date: "2022-04-26", ratePct: -0.43 },
  { date: "2022-04-27", ratePct: -0.445 },
  { date: "2022-04-28", ratePct: -0.438 },
  { date: "2022-04-29", ratePct: -0.429 },
  { date: "2022-05-02", ratePct: -0.416 },
  { date: "2022-05-03", ratePct: -0.425 },
  { date: "2022-05-04", ratePct: -0.427 },
  { date: "2022-05-05", ratePct: -0.421 },
  { date: "2022-05-06", ratePct: -0.426 },
  { date: "2022-05-09", ratePct: -0.402 },
  { date: "2022-05-10", ratePct: -0.417 },
  { date: "2022-05-11", ratePct: -0.414 },
  { date: "2022-05-12", ratePct: -0.406 },
  { date: "2022-05-13", ratePct: -0.403 },
  { date: "2022-05-16", ratePct: -0.403 },
  { date: "2022-05-17", ratePct: -0.38 },
  { date: "2022-05-18", ratePct: -0.368 },
  { date: "2022-05-19", ratePct: -0.348 },
  { date: "2022-05-20", ratePct: -0.348 },
  { date: "2022-05-23", ratePct: -0.363 },
  { date: "2022-05-24", ratePct: -0.356 },
  { date: "2022-05-25", ratePct: -0.351 },
  { date: "2022-05-26", ratePct: -0.352 },
  { date: "2022-05-27", ratePct: -0.368 },
  { date: "2022-05-30", ratePct: -0.354 },
  { date: "2022-05-31", ratePct: -0.338 },
  { date: "2022-06-01", ratePct: -0.335 },
  { date: "2022-06-02", ratePct: -0.327 },
  { date: "2022-06-03", ratePct: -0.328 },
  { date: "2022-06-06", ratePct: -0.314 },
  { date: "2022-06-07", ratePct: -0.298 },
  { date: "2022-06-08", ratePct: -0.302 },
  { date: "2022-06-09", ratePct: -0.282 },
  { date: "2022-06-10", ratePct: -0.298 },
  { date: "2022-06-13", ratePct: -0.281 },
  { date: "2022-06-14", ratePct: -0.243 },
  { date: "2022-06-15", ratePct: -0.182 },
  { date: "2022-06-16", ratePct: -0.172 },
  { date: "2022-06-17", ratePct: -0.169 },
  { date: "2022-06-20", ratePct: -0.178 },
  { date: "2022-06-21", ratePct: -0.163 },
  { date: "2022-06-22", ratePct: -0.172 },
  { date: "2022-06-23", ratePct: -0.186 },
  { date: "2022-06-24", ratePct: -0.218 },
  { date: "2022-06-27", ratePct: -0.218 },
  { date: "2022-06-28", ratePct: -0.211 },
  { date: "2022-06-29", ratePct: -0.191 },
  { date: "2022-06-30", ratePct: -0.195 },
  { date: "2022-07-01", ratePct: -0.176 },
  { date: "2022-07-04", ratePct: -0.165 },
  { date: "2022-07-05", ratePct: -0.145 },
  { date: "2022-07-06", ratePct: -0.152 },
  { date: "2022-07-07", ratePct: -0.141 },
  { date: "2022-07-08", ratePct: -0.087 },
  { date: "2022-07-11", ratePct: -0.07 },
  { date: "2022-07-12", ratePct: -0.058 },
  { date: "2022-07-13", ratePct: -0.052 },
  { date: "2022-07-14", ratePct: 2e-3 },
  { date: "2022-07-15", ratePct: 0.072 },
  { date: "2022-07-18", ratePct: 0.047 },
  { date: "2022-07-19", ratePct: 0.042 },
  { date: "2022-07-20", ratePct: 0.125 },
  { date: "2022-07-21", ratePct: 0.145 },
  { date: "2022-07-22", ratePct: 0.2 },
  { date: "2022-07-25", ratePct: 0.233 },
  { date: "2022-07-26", ratePct: 0.212 },
  { date: "2022-07-27", ratePct: 0.238 },
  { date: "2022-07-28", ratePct: 0.267 },
  { date: "2022-07-29", ratePct: 0.232 },
  { date: "2022-08-01", ratePct: 0.246 },
  { date: "2022-08-02", ratePct: 0.26 },
  { date: "2022-08-03", ratePct: 0.252 },
  { date: "2022-08-04", ratePct: 0.269 },
  { date: "2022-08-05", ratePct: 0.277 },
  { date: "2022-08-08", ratePct: 0.301 },
  { date: "2022-08-09", ratePct: 0.321 },
  { date: "2022-08-10", ratePct: 0.325 },
  { date: "2022-08-11", ratePct: 0.321 },
  { date: "2022-08-12", ratePct: 0.333 },
  { date: "2022-08-15", ratePct: 0.339 },
  { date: "2022-08-16", ratePct: 0.333 },
  { date: "2022-08-17", ratePct: 0.351 },
  { date: "2022-08-18", ratePct: 0.391 },
  { date: "2022-08-19", ratePct: 0.43 },
  { date: "2022-08-22", ratePct: 0.453 },
  { date: "2022-08-23", ratePct: 0.468 },
  { date: "2022-08-24", ratePct: 0.493 },
  { date: "2022-08-25", ratePct: 0.518 },
  { date: "2022-08-26", ratePct: 0.542 },
  { date: "2022-08-29", ratePct: 0.582 },
  { date: "2022-08-30", ratePct: 0.62 },
  { date: "2022-08-31", ratePct: 0.654 },
  { date: "2022-09-01", ratePct: 0.712 },
  { date: "2022-09-02", ratePct: 0.763 },
  { date: "2022-09-05", ratePct: 0.783 },
  { date: "2022-09-06", ratePct: 0.816 },
  { date: "2022-09-07", ratePct: 0.822 },
  { date: "2022-09-08", ratePct: 0.836 },
  { date: "2022-09-09", ratePct: 0.934 },
  { date: "2022-09-12", ratePct: 0.988 },
  { date: "2022-09-13", ratePct: 1 },
  { date: "2022-09-14", ratePct: 1.013 },
  { date: "2022-09-15", ratePct: 1.03 },
  { date: "2022-09-16", ratePct: 1.063 },
  { date: "2022-09-19", ratePct: 1.066 },
  { date: "2022-09-20", ratePct: 1.1 },
  { date: "2022-09-21", ratePct: 1.118 },
  { date: "2022-09-22", ratePct: 1.12 },
  { date: "2022-09-23", ratePct: 1.153 },
  { date: "2022-09-26", ratePct: 1.168 },
  { date: "2022-09-27", ratePct: 1.228 },
  { date: "2022-09-28", ratePct: 1.193 },
  { date: "2022-09-29", ratePct: 1.16 },
  { date: "2022-09-30", ratePct: 1.173 },
  { date: "2022-10-03", ratePct: 1.185 },
  { date: "2022-10-04", ratePct: 1.173 },
  { date: "2022-10-05", ratePct: 1.2 },
  { date: "2022-10-06", ratePct: 1.248 },
  { date: "2022-10-07", ratePct: 1.288 },
  { date: "2022-10-10", ratePct: 1.319 },
  { date: "2022-10-11", ratePct: 1.34 },
  { date: "2022-10-12", ratePct: 1.363 },
  { date: "2022-10-13", ratePct: 1.378 },
  { date: "2022-10-14", ratePct: 1.403 },
  { date: "2022-10-17", ratePct: 1.458 },
  { date: "2022-10-18", ratePct: 1.456 },
  { date: "2022-10-19", ratePct: 1.462 },
  { date: "2022-10-20", ratePct: 1.502 },
  { date: "2022-10-21", ratePct: 1.543 },
  { date: "2022-10-24", ratePct: 1.558 },
  { date: "2022-10-25", ratePct: 1.577 },
  { date: "2022-10-26", ratePct: 1.578 },
  { date: "2022-10-27", ratePct: 1.605 },
  { date: "2022-10-28", ratePct: 1.641 },
  { date: "2022-10-31", ratePct: 1.704 },
  { date: "2022-11-01", ratePct: 1.737 },
  { date: "2022-11-02", ratePct: 1.726 },
  { date: "2022-11-03", ratePct: 1.732 },
  { date: "2022-11-04", ratePct: 1.734 },
  { date: "2022-11-07", ratePct: 1.742 },
  { date: "2022-11-08", ratePct: 1.791 },
  { date: "2022-11-09", ratePct: 1.802 },
  { date: "2022-11-10", ratePct: 1.798 },
  { date: "2022-11-11", ratePct: 1.762 },
  { date: "2022-11-14", ratePct: 1.791 },
  { date: "2022-11-15", ratePct: 1.795 },
  { date: "2022-11-16", ratePct: 1.803 },
  { date: "2022-11-17", ratePct: 1.802 },
  { date: "2022-11-18", ratePct: 1.821 },
  { date: "2022-11-21", ratePct: 1.817 },
  { date: "2022-11-22", ratePct: 1.863 },
  { date: "2022-11-23", ratePct: 1.898 },
  { date: "2022-11-24", ratePct: 1.908 },
  { date: "2022-11-25", ratePct: 1.922 },
  { date: "2022-11-28", ratePct: 1.954 },
  { date: "2022-11-29", ratePct: 1.984 },
  { date: "2022-11-30", ratePct: 1.973 },
  { date: "2022-12-01", ratePct: 1.972 },
  { date: "2022-12-02", ratePct: 1.975 },
  { date: "2022-12-05", ratePct: 1.975 },
  { date: "2022-12-06", ratePct: 1.993 },
  { date: "2022-12-07", ratePct: 1.977 },
  { date: "2022-12-08", ratePct: 1.99 },
  { date: "2022-12-09", ratePct: 2.005 },
  { date: "2022-12-12", ratePct: 2.052 },
  { date: "2022-12-13", ratePct: 2.046 },
  { date: "2022-12-14", ratePct: 2.081 },
  { date: "2022-12-15", ratePct: 2.062 },
  { date: "2022-12-16", ratePct: 2.047 },
  { date: "2022-12-19", ratePct: 2.063 },
  { date: "2022-12-20", ratePct: 2.081 },
  { date: "2022-12-21", ratePct: 2.102 },
  { date: "2022-12-22", ratePct: 2.125 },
  { date: "2022-12-23", ratePct: 2.141 },
  { date: "2022-12-27", ratePct: 2.128 },
  { date: "2022-12-28", ratePct: 2.202 },
  { date: "2022-12-29", ratePct: 2.184 },
  { date: "2022-12-30", ratePct: 2.132 },
  { date: "2023-01-02", ratePct: 2.162 },
  { date: "2023-01-03", ratePct: 2.172 },
  { date: "2023-01-04", ratePct: 2.17 },
  { date: "2023-01-05", ratePct: 2.178 },
  { date: "2023-01-06", ratePct: 2.254 },
  { date: "2023-01-09", ratePct: 2.27 },
  { date: "2023-01-10", ratePct: 2.284 },
  { date: "2023-01-11", ratePct: 2.298 },
  { date: "2023-01-12", ratePct: 2.288 },
  { date: "2023-01-13", ratePct: 2.328 },
  { date: "2023-01-16", ratePct: 2.334 },
  { date: "2023-01-17", ratePct: 2.335 },
  { date: "2023-01-18", ratePct: 2.342 },
  { date: "2023-01-19", ratePct: 2.393 },
  { date: "2023-01-20", ratePct: 2.417 },
  { date: "2023-01-23", ratePct: 2.449 },
  { date: "2023-01-24", ratePct: 2.501 },
  { date: "2023-01-25", ratePct: 2.458 },
  { date: "2023-01-26", ratePct: 2.468 },
  { date: "2023-01-27", ratePct: 2.492 },
  { date: "2023-01-30", ratePct: 2.482 },
  { date: "2023-01-31", ratePct: 2.512 },
  { date: "2023-02-01", ratePct: 2.483 },
  { date: "2023-02-02", ratePct: 2.54 },
  { date: "2023-02-03", ratePct: 2.545 },
  { date: "2023-02-06", ratePct: 2.565 },
  { date: "2023-02-07", ratePct: 2.602 },
  { date: "2023-02-08", ratePct: 2.608 },
  { date: "2023-02-09", ratePct: 2.607 },
  { date: "2023-02-10", ratePct: 2.621 },
  { date: "2023-02-13", ratePct: 2.654 },
  { date: "2023-02-14", ratePct: 2.66 },
  { date: "2023-02-15", ratePct: 2.682 },
  { date: "2023-02-16", ratePct: 2.703 },
  { date: "2023-02-17", ratePct: 2.667 },
  { date: "2023-02-20", ratePct: 2.654 },
  { date: "2023-02-21", ratePct: 2.682 },
  { date: "2023-02-22", ratePct: 2.683 },
  { date: "2023-02-23", ratePct: 2.693 },
  { date: "2023-02-24", ratePct: 2.698 },
  { date: "2023-02-27", ratePct: 2.716 },
  { date: "2023-02-28", ratePct: 2.744 },
  { date: "2023-03-01", ratePct: 2.783 },
  { date: "2023-03-02", ratePct: 2.801 },
  { date: "2023-03-03", ratePct: 2.849 },
  { date: "2023-03-06", ratePct: 2.875 },
  { date: "2023-03-07", ratePct: 2.92 },
  { date: "2023-03-08", ratePct: 2.944 },
  { date: "2023-03-09", ratePct: 2.948 },
  { date: "2023-03-10", ratePct: 2.978 },
  { date: "2023-03-13", ratePct: 2.957 },
  { date: "2023-03-14", ratePct: 2.753 },
  { date: "2023-03-15", ratePct: 2.815 },
  { date: "2023-03-16", ratePct: 2.646 },
  { date: "2023-03-17", ratePct: 2.75 },
  { date: "2023-03-20", ratePct: 2.892 },
  { date: "2023-03-21", ratePct: 2.908 },
  { date: "2023-03-22", ratePct: 3.002 },
  { date: "2023-03-23", ratePct: 2.99 },
  { date: "2023-03-24", ratePct: 3.025 },
  { date: "2023-03-27", ratePct: 3.012 },
  { date: "2023-03-28", ratePct: 2.99 },
  { date: "2023-03-29", ratePct: 3.015 },
  { date: "2023-03-30", ratePct: 3.052 },
  { date: "2023-03-31", ratePct: 3.038 },
  { date: "2023-04-03", ratePct: 3.053 },
  { date: "2023-04-04", ratePct: 3.052 },
  { date: "2023-04-05", ratePct: 3.055 },
  { date: "2023-04-06", ratePct: 3.075 },
  { date: "2023-04-11", ratePct: 3.108 },
  { date: "2023-04-12", ratePct: 3.126 },
  { date: "2023-04-13", ratePct: 3.177 },
  { date: "2023-04-14", ratePct: 3.175 },
  { date: "2023-04-17", ratePct: 3.219 },
  { date: "2023-04-18", ratePct: 3.2 },
  { date: "2023-04-19", ratePct: 3.205 },
  { date: "2023-04-20", ratePct: 3.211 },
  { date: "2023-04-21", ratePct: 3.261 },
  { date: "2023-04-24", ratePct: 3.288 },
  { date: "2023-04-25", ratePct: 3.268 },
  { date: "2023-04-26", ratePct: 3.242 },
  { date: "2023-04-27", ratePct: 3.25 },
  { date: "2023-04-28", ratePct: 3.265 },
  { date: "2023-05-02", ratePct: 3.274 },
  { date: "2023-05-03", ratePct: 3.275 },
  { date: "2023-05-04", ratePct: 3.281 },
  { date: "2023-05-05", ratePct: 3.28 },
  { date: "2023-05-08", ratePct: 3.312 },
  { date: "2023-05-09", ratePct: 3.27 },
  { date: "2023-05-10", ratePct: 3.301 },
  { date: "2023-05-11", ratePct: 3.323 },
  { date: "2023-05-12", ratePct: 3.348 },
  { date: "2023-05-15", ratePct: 3.358 },
  { date: "2023-05-16", ratePct: 3.382 },
  { date: "2023-05-17", ratePct: 3.388 },
  { date: "2023-05-18", ratePct: 3.383 },
  { date: "2023-05-19", ratePct: 3.415 },
  { date: "2023-05-22", ratePct: 3.412 },
  { date: "2023-05-23", ratePct: 3.422 },
  { date: "2023-05-24", ratePct: 3.415 },
  { date: "2023-05-25", ratePct: 3.457 },
  { date: "2023-05-26", ratePct: 3.462 },
  { date: "2023-05-29", ratePct: 3.483 },
  { date: "2023-05-30", ratePct: 3.474 },
  { date: "2023-05-31", ratePct: 3.463 },
  { date: "2023-06-01", ratePct: 3.462 },
  { date: "2023-06-02", ratePct: 3.49 },
  { date: "2023-06-05", ratePct: 3.493 },
  { date: "2023-06-06", ratePct: 3.476 },
  { date: "2023-06-07", ratePct: 3.459 },
  { date: "2023-06-08", ratePct: 3.486 },
  { date: "2023-06-09", ratePct: 3.469 },
  { date: "2023-06-12", ratePct: 3.478 },
  { date: "2023-06-13", ratePct: 3.526 },
  { date: "2023-06-14", ratePct: 3.522 },
  { date: "2023-06-15", ratePct: 3.547 },
  { date: "2023-06-16", ratePct: 3.572 },
  { date: "2023-06-19", ratePct: 3.551 },
  { date: "2023-06-20", ratePct: 3.587 },
  { date: "2023-06-21", ratePct: 3.568 },
  { date: "2023-06-22", ratePct: 3.6 },
  { date: "2023-06-23", ratePct: 3.61 },
  { date: "2023-06-26", ratePct: 3.577 },
  { date: "2023-06-27", ratePct: 3.554 },
  { date: "2023-06-28", ratePct: 3.598 },
  { date: "2023-06-29", ratePct: 3.587 },
  { date: "2023-06-30", ratePct: 3.577 },
  { date: "2023-07-03", ratePct: 3.597 },
  { date: "2023-07-04", ratePct: 3.613 },
  { date: "2023-07-05", ratePct: 3.589 },
  { date: "2023-07-06", ratePct: 3.612 },
  { date: "2023-07-07", ratePct: 3.64 },
  { date: "2023-07-10", ratePct: 3.661 },
  { date: "2023-07-11", ratePct: 3.672 },
  { date: "2023-07-12", ratePct: 3.657 },
  { date: "2023-07-13", ratePct: 3.663 },
  { date: "2023-07-14", ratePct: 3.66 },
  { date: "2023-07-17", ratePct: 3.685 },
  { date: "2023-07-18", ratePct: 3.705 },
  { date: "2023-07-19", ratePct: 3.646 },
  { date: "2023-07-20", ratePct: 3.698 },
  { date: "2023-07-21", ratePct: 3.721 },
  { date: "2023-07-24", ratePct: 3.716 },
  { date: "2023-07-25", ratePct: 3.705 },
  { date: "2023-07-26", ratePct: 3.714 },
  { date: "2023-07-27", ratePct: 3.714 },
  { date: "2023-07-28", ratePct: 3.725 },
  { date: "2023-07-31", ratePct: 3.715 },
  { date: "2023-08-01", ratePct: 3.723 },
  { date: "2023-08-02", ratePct: 3.733 },
  { date: "2023-08-03", ratePct: 3.722 },
  { date: "2023-08-04", ratePct: 3.743 },
  { date: "2023-08-07", ratePct: 3.754 },
  { date: "2023-08-08", ratePct: 3.765 },
  { date: "2023-08-09", ratePct: 3.759 },
  { date: "2023-08-10", ratePct: 3.788 },
  { date: "2023-08-11", ratePct: 3.781 },
  { date: "2023-08-14", ratePct: 3.799 },
  { date: "2023-08-15", ratePct: 3.787 },
  { date: "2023-08-16", ratePct: 3.798 },
  { date: "2023-08-17", ratePct: 3.815 },
  { date: "2023-08-18", ratePct: 3.816 },
  { date: "2023-08-21", ratePct: 3.806 },
  { date: "2023-08-22", ratePct: 3.808 },
  { date: "2023-08-23", ratePct: 3.826 },
  { date: "2023-08-24", ratePct: 3.784 },
  { date: "2023-08-25", ratePct: 3.788 },
  { date: "2023-08-28", ratePct: 3.771 },
  { date: "2023-08-29", ratePct: 3.783 },
  { date: "2023-08-30", ratePct: 3.803 },
  { date: "2023-08-31", ratePct: 3.795 },
  { date: "2023-09-01", ratePct: 3.77 },
  { date: "2023-09-04", ratePct: 3.798 },
  { date: "2023-09-05", ratePct: 3.802 },
  { date: "2023-09-06", ratePct: 3.795 },
  { date: "2023-09-07", ratePct: 3.799 },
  { date: "2023-09-08", ratePct: 3.8 },
  { date: "2023-09-11", ratePct: 3.822 },
  { date: "2023-09-12", ratePct: 3.824 },
  { date: "2023-09-13", ratePct: 3.845 },
  { date: "2023-09-14", ratePct: 3.867 },
  { date: "2023-09-15", ratePct: 3.878 },
  { date: "2023-09-18", ratePct: 3.903 },
  { date: "2023-09-19", ratePct: 3.934 },
  { date: "2023-09-20", ratePct: 3.934 },
  { date: "2023-09-21", ratePct: 3.955 },
  { date: "2023-09-22", ratePct: 3.958 },
  { date: "2023-09-25", ratePct: 3.977 },
  { date: "2023-09-26", ratePct: 3.941 },
  { date: "2023-09-27", ratePct: 3.972 },
  { date: "2023-09-28", ratePct: 3.955 },
  { date: "2023-09-29", ratePct: 3.952 },
  { date: "2023-10-02", ratePct: 3.951 },
  { date: "2023-10-03", ratePct: 3.964 },
  { date: "2023-10-04", ratePct: 3.962 },
  { date: "2023-10-05", ratePct: 3.972 },
  { date: "2023-10-06", ratePct: 3.983 },
  { date: "2023-10-09", ratePct: 3.98 },
  { date: "2023-10-10", ratePct: 3.988 },
  { date: "2023-10-11", ratePct: 3.952 },
  { date: "2023-10-12", ratePct: 3.965 },
  { date: "2023-10-13", ratePct: 3.985 },
  { date: "2023-10-16", ratePct: 3.975 },
  { date: "2023-10-17", ratePct: 3.972 },
  { date: "2023-10-18", ratePct: 3.993 },
  { date: "2023-10-19", ratePct: 4.002 },
  { date: "2023-10-20", ratePct: 3.969 },
  { date: "2023-10-23", ratePct: 3.956 },
  { date: "2023-10-24", ratePct: 3.941 },
  { date: "2023-10-25", ratePct: 3.938 },
  { date: "2023-10-26", ratePct: 3.952 },
  { date: "2023-10-27", ratePct: 3.948 },
  { date: "2023-10-30", ratePct: 3.968 },
  { date: "2023-10-31", ratePct: 3.972 },
  { date: "2023-11-01", ratePct: 3.953 },
  { date: "2023-11-02", ratePct: 3.974 },
  { date: "2023-11-03", ratePct: 3.956 },
  { date: "2023-11-06", ratePct: 3.963 },
  { date: "2023-11-07", ratePct: 3.966 },
  { date: "2023-11-08", ratePct: 3.973 },
  { date: "2023-11-09", ratePct: 3.987 },
  { date: "2023-11-10", ratePct: 3.992 },
  { date: "2023-11-13", ratePct: 4.002 },
  { date: "2023-11-14", ratePct: 3.997 },
  { date: "2023-11-15", ratePct: 3.994 },
  { date: "2023-11-16", ratePct: 4.002 },
  { date: "2023-11-17", ratePct: 3.984 },
  { date: "2023-11-20", ratePct: 3.962 },
  { date: "2023-11-21", ratePct: 3.973 },
  { date: "2023-11-22", ratePct: 3.962 },
  { date: "2023-11-23", ratePct: 3.956 },
  { date: "2023-11-24", ratePct: 3.935 },
  { date: "2023-11-27", ratePct: 3.951 },
  { date: "2023-11-28", ratePct: 3.955 },
  { date: "2023-11-29", ratePct: 3.975 },
  { date: "2023-11-30", ratePct: 3.964 },
  { date: "2023-12-01", ratePct: 3.96 },
  { date: "2023-12-04", ratePct: 3.962 },
  { date: "2023-12-05", ratePct: 3.958 },
  { date: "2023-12-06", ratePct: 3.95 },
  { date: "2023-12-07", ratePct: 3.969 },
  { date: "2023-12-08", ratePct: 3.95 },
  { date: "2023-12-11", ratePct: 3.958 },
  { date: "2023-12-12", ratePct: 3.928 },
  { date: "2023-12-13", ratePct: 3.925 },
  { date: "2023-12-14", ratePct: 3.932 },
  { date: "2023-12-15", ratePct: 3.92 },
  { date: "2023-12-18", ratePct: 3.938 },
  { date: "2023-12-19", ratePct: 3.923 },
  { date: "2023-12-20", ratePct: 3.916 },
  { date: "2023-12-21", ratePct: 3.916 },
  { date: "2023-12-22", ratePct: 3.931 },
  { date: "2023-12-27", ratePct: 3.925 },
  { date: "2023-12-28", ratePct: 3.893 },
  { date: "2023-12-29", ratePct: 3.909 },
  { date: "2024-01-02", ratePct: 3.905 },
  { date: "2024-01-03", ratePct: 3.929 },
  { date: "2024-01-04", ratePct: 3.922 },
  { date: "2024-01-05", ratePct: 3.936 },
  { date: "2024-01-08", ratePct: 3.925 },
  { date: "2024-01-09", ratePct: 3.928 },
  { date: "2024-01-10", ratePct: 3.936 },
  { date: "2024-01-11", ratePct: 3.942 },
  { date: "2024-01-12", ratePct: 3.932 },
  { date: "2024-01-15", ratePct: 3.928 },
  { date: "2024-01-16", ratePct: 3.894 },
  { date: "2024-01-17", ratePct: 3.903 },
  { date: "2024-01-18", ratePct: 3.97 },
  { date: "2024-01-19", ratePct: 3.958 },
  { date: "2024-01-22", ratePct: 3.945 },
  { date: "2024-01-23", ratePct: 3.948 },
  { date: "2024-01-24", ratePct: 3.929 },
  { date: "2024-01-25", ratePct: 3.925 },
  { date: "2024-01-26", ratePct: 3.887 },
  { date: "2024-01-29", ratePct: 3.912 },
  { date: "2024-01-30", ratePct: 3.897 },
  { date: "2024-01-31", ratePct: 3.905 },
  { date: "2024-02-01", ratePct: 3.884 },
  { date: "2024-02-02", ratePct: 3.9 },
  { date: "2024-02-05", ratePct: 3.922 },
  { date: "2024-02-06", ratePct: 3.932 },
  { date: "2024-02-07", ratePct: 3.895 },
  { date: "2024-02-08", ratePct: 3.898 },
  { date: "2024-02-09", ratePct: 3.891 },
  { date: "2024-02-12", ratePct: 3.912 },
  { date: "2024-02-13", ratePct: 3.901 },
  { date: "2024-02-14", ratePct: 3.922 },
  { date: "2024-02-15", ratePct: 3.915 },
  { date: "2024-02-16", ratePct: 3.933 },
  { date: "2024-02-19", ratePct: 3.932 },
  { date: "2024-02-20", ratePct: 3.943 },
  { date: "2024-02-21", ratePct: 3.946 },
  { date: "2024-02-22", ratePct: 3.945 },
  { date: "2024-02-23", ratePct: 3.933 },
  { date: "2024-02-26", ratePct: 3.952 },
  { date: "2024-02-27", ratePct: 3.952 },
  { date: "2024-02-28", ratePct: 3.942 },
  { date: "2024-02-29", ratePct: 3.937 },
  { date: "2024-03-01", ratePct: 3.938 },
  { date: "2024-03-04", ratePct: 3.932 },
  { date: "2024-03-05", ratePct: 3.926 },
  { date: "2024-03-06", ratePct: 3.942 },
  { date: "2024-03-07", ratePct: 3.929 },
  { date: "2024-03-08", ratePct: 3.94 },
  { date: "2024-03-11", ratePct: 3.928 },
  { date: "2024-03-12", ratePct: 3.929 },
  { date: "2024-03-13", ratePct: 3.94 },
  { date: "2024-03-14", ratePct: 3.928 },
  { date: "2024-03-15", ratePct: 3.928 },
  { date: "2024-03-18", ratePct: 3.928 },
  { date: "2024-03-19", ratePct: 3.935 },
  { date: "2024-03-20", ratePct: 3.922 },
  { date: "2024-03-21", ratePct: 3.926 },
  { date: "2024-03-22", ratePct: 3.903 },
  { date: "2024-03-25", ratePct: 3.886 },
  { date: "2024-03-26", ratePct: 3.902 },
  { date: "2024-03-27", ratePct: 3.908 },
  { date: "2024-03-28", ratePct: 3.892 },
  { date: "2024-04-02", ratePct: 3.883 },
  { date: "2024-04-03", ratePct: 3.857 },
  { date: "2024-04-04", ratePct: 3.891 },
  { date: "2024-04-05", ratePct: 3.885 },
  { date: "2024-04-08", ratePct: 3.902 },
  { date: "2024-04-09", ratePct: 3.916 },
  { date: "2024-04-10", ratePct: 3.912 },
  { date: "2024-04-11", ratePct: 3.906 },
  { date: "2024-04-12", ratePct: 3.923 },
  { date: "2024-04-15", ratePct: 3.888 },
  { date: "2024-04-16", ratePct: 3.904 },
  { date: "2024-04-17", ratePct: 3.895 },
  { date: "2024-04-18", ratePct: 3.897 },
  { date: "2024-04-19", ratePct: 3.892 },
  { date: "2024-04-22", ratePct: 3.891 },
  { date: "2024-04-23", ratePct: 3.882 },
  { date: "2024-04-24", ratePct: 3.879 },
  { date: "2024-04-25", ratePct: 3.864 },
  { date: "2024-04-26", ratePct: 3.865 },
  { date: "2024-04-29", ratePct: 3.835 },
  { date: "2024-04-30", ratePct: 3.825 },
  { date: "2024-05-02", ratePct: 3.853 },
  { date: "2024-05-03", ratePct: 3.827 },
  { date: "2024-05-06", ratePct: 3.824 },
  { date: "2024-05-07", ratePct: 3.788 },
  { date: "2024-05-08", ratePct: 3.814 },
  { date: "2024-05-09", ratePct: 3.806 },
  { date: "2024-05-10", ratePct: 3.818 },
  { date: "2024-05-13", ratePct: 3.828 },
  { date: "2024-05-14", ratePct: 3.824 },
  { date: "2024-05-15", ratePct: 3.816 },
  { date: "2024-05-16", ratePct: 3.826 },
  { date: "2024-05-17", ratePct: 3.83 },
  { date: "2024-05-20", ratePct: 3.822 },
  { date: "2024-05-21", ratePct: 3.823 },
  { date: "2024-05-22", ratePct: 3.819 },
  { date: "2024-05-23", ratePct: 3.801 },
  { date: "2024-05-24", ratePct: 3.808 },
  { date: "2024-05-27", ratePct: 3.8 },
  { date: "2024-05-28", ratePct: 3.785 },
  { date: "2024-05-29", ratePct: 3.794 },
  { date: "2024-05-30", ratePct: 3.788 },
  { date: "2024-05-31", ratePct: 3.785 },
  { date: "2024-06-03", ratePct: 3.782 },
  { date: "2024-06-04", ratePct: 3.772 },
  { date: "2024-06-05", ratePct: 3.752 },
  { date: "2024-06-06", ratePct: 3.755 },
  { date: "2024-06-07", ratePct: 3.759 },
  { date: "2024-06-10", ratePct: 3.743 },
  { date: "2024-06-11", ratePct: 3.739 },
  { date: "2024-06-12", ratePct: 3.72 },
  { date: "2024-06-13", ratePct: 3.719 },
  { date: "2024-06-14", ratePct: 3.715 },
  { date: "2024-06-17", ratePct: 3.711 },
  { date: "2024-06-18", ratePct: 3.717 },
  { date: "2024-06-19", ratePct: 3.712 },
  { date: "2024-06-20", ratePct: 3.7 },
  { date: "2024-06-21", ratePct: 3.686 },
  { date: "2024-06-24", ratePct: 3.682 },
  { date: "2024-06-25", ratePct: 3.698 },
  { date: "2024-06-26", ratePct: 3.722 },
  { date: "2024-06-27", ratePct: 3.695 },
  { date: "2024-06-28", ratePct: 3.711 },
  { date: "2024-07-01", ratePct: 3.709 },
  { date: "2024-07-02", ratePct: 3.714 },
  { date: "2024-07-03", ratePct: 3.705 },
  { date: "2024-07-04", ratePct: 3.708 },
  { date: "2024-07-05", ratePct: 3.712 },
  { date: "2024-07-08", ratePct: 3.699 },
  { date: "2024-07-09", ratePct: 3.708 },
  { date: "2024-07-10", ratePct: 3.704 },
  { date: "2024-07-11", ratePct: 3.685 },
  { date: "2024-07-12", ratePct: 3.664 },
  { date: "2024-07-15", ratePct: 3.662 },
  { date: "2024-07-16", ratePct: 3.674 },
  { date: "2024-07-17", ratePct: 3.678 },
  { date: "2024-07-18", ratePct: 3.688 },
  { date: "2024-07-19", ratePct: 3.698 },
  { date: "2024-07-22", ratePct: 3.705 },
  { date: "2024-07-23", ratePct: 3.685 },
  { date: "2024-07-24", ratePct: 3.698 },
  { date: "2024-07-25", ratePct: 3.686 },
  { date: "2024-07-26", ratePct: 3.655 },
  { date: "2024-07-29", ratePct: 3.636 },
  { date: "2024-07-30", ratePct: 3.631 },
  { date: "2024-07-31", ratePct: 3.647 },
  { date: "2024-08-01", ratePct: 3.638 },
  { date: "2024-08-02", ratePct: 3.623 },
  { date: "2024-08-05", ratePct: 3.584 },
  { date: "2024-08-06", ratePct: 3.523 },
  { date: "2024-08-07", ratePct: 3.569 },
  { date: "2024-08-08", ratePct: 3.577 },
  { date: "2024-08-09", ratePct: 3.557 },
  { date: "2024-08-12", ratePct: 3.548 },
  { date: "2024-08-13", ratePct: 3.542 },
  { date: "2024-08-14", ratePct: 3.542 },
  { date: "2024-08-15", ratePct: 3.549 },
  { date: "2024-08-16", ratePct: 3.56 },
  { date: "2024-08-19", ratePct: 3.551 },
  { date: "2024-08-20", ratePct: 3.538 },
  { date: "2024-08-21", ratePct: 3.542 },
  { date: "2024-08-22", ratePct: 3.541 },
  { date: "2024-08-23", ratePct: 3.525 },
  { date: "2024-08-26", ratePct: 3.523 },
  { date: "2024-08-27", ratePct: 3.515 },
  { date: "2024-08-28", ratePct: 3.505 },
  { date: "2024-08-29", ratePct: 3.505 },
  { date: "2024-08-30", ratePct: 3.49 },
  { date: "2024-09-02", ratePct: 3.469 },
  { date: "2024-09-03", ratePct: 3.458 },
  { date: "2024-09-04", ratePct: 3.449 },
  { date: "2024-09-05", ratePct: 3.47 },
  { date: "2024-09-06", ratePct: 3.468 },
  { date: "2024-09-09", ratePct: 3.462 },
  { date: "2024-09-10", ratePct: 3.46 },
  { date: "2024-09-11", ratePct: 3.467 },
  { date: "2024-09-12", ratePct: 3.481 },
  { date: "2024-09-13", ratePct: 3.472 },
  { date: "2024-09-16", ratePct: 3.488 },
  { date: "2024-09-17", ratePct: 3.48 },
  { date: "2024-09-18", ratePct: 3.458 },
  { date: "2024-09-19", ratePct: 3.455 },
  { date: "2024-09-20", ratePct: 3.436 },
  { date: "2024-09-23", ratePct: 3.431 },
  { date: "2024-09-24", ratePct: 3.402 },
  { date: "2024-09-25", ratePct: 3.352 },
  { date: "2024-09-26", ratePct: 3.345 },
  { date: "2024-09-27", ratePct: 3.326 },
  { date: "2024-09-30", ratePct: 3.279 },
  { date: "2024-10-01", ratePct: 3.252 },
  { date: "2024-10-02", ratePct: 3.246 },
  { date: "2024-10-03", ratePct: 3.238 },
  { date: "2024-10-04", ratePct: 3.25 },
  { date: "2024-10-07", ratePct: 3.268 },
  { date: "2024-10-08", ratePct: 3.265 },
  { date: "2024-10-09", ratePct: 3.223 },
  { date: "2024-10-10", ratePct: 3.184 },
  { date: "2024-10-11", ratePct: 3.179 },
  { date: "2024-10-14", ratePct: 3.205 },
  { date: "2024-10-15", ratePct: 3.215 },
  { date: "2024-10-16", ratePct: 3.208 },
  { date: "2024-10-17", ratePct: 3.219 },
  { date: "2024-10-18", ratePct: 3.201 },
  { date: "2024-10-21", ratePct: 3.138 },
  { date: "2024-10-22", ratePct: 3.098 },
  { date: "2024-10-23", ratePct: 3.086 },
  { date: "2024-10-24", ratePct: 3.072 },
  { date: "2024-10-25", ratePct: 3.059 },
  { date: "2024-10-28", ratePct: 3.052 },
  { date: "2024-10-29", ratePct: 3.056 },
  { date: "2024-10-30", ratePct: 3.056 },
  { date: "2024-10-31", ratePct: 3.062 },
  { date: "2024-11-01", ratePct: 3.085 },
  { date: "2024-11-04", ratePct: 3.075 },
  { date: "2024-11-05", ratePct: 3.057 },
  { date: "2024-11-06", ratePct: 3.049 },
  { date: "2024-11-07", ratePct: 3.032 },
  { date: "2024-11-08", ratePct: 3.032 },
  { date: "2024-11-11", ratePct: 3.04 },
  { date: "2024-11-12", ratePct: 3.034 },
  { date: "2024-11-13", ratePct: 3.023 },
  { date: "2024-11-14", ratePct: 3.005 },
  { date: "2024-11-15", ratePct: 2.998 },
  { date: "2024-11-18", ratePct: 3.004 },
  { date: "2024-11-19", ratePct: 3.013 },
  { date: "2024-11-20", ratePct: 3 },
  { date: "2024-11-21", ratePct: 3.005 },
  { date: "2024-11-22", ratePct: 3.022 },
  { date: "2024-11-25", ratePct: 2.985 },
  { date: "2024-11-26", ratePct: 2.898 },
  { date: "2024-11-27", ratePct: 2.912 },
  { date: "2024-11-28", ratePct: 2.939 },
  { date: "2024-11-29", ratePct: 2.934 },
  { date: "2024-12-02", ratePct: 2.924 },
  { date: "2024-12-03", ratePct: 2.879 },
  { date: "2024-12-04", ratePct: 2.877 },
  { date: "2024-12-05", ratePct: 2.881 },
  { date: "2024-12-06", ratePct: 2.868 },
  { date: "2024-12-09", ratePct: 2.862 },
  { date: "2024-12-10", ratePct: 2.872 },
  { date: "2024-12-11", ratePct: 2.888 },
  { date: "2024-12-12", ratePct: 2.886 },
  { date: "2024-12-13", ratePct: 2.843 },
  { date: "2024-12-16", ratePct: 2.863 },
  { date: "2024-12-17", ratePct: 2.865 },
  { date: "2024-12-18", ratePct: 2.852 },
  { date: "2024-12-19", ratePct: 2.839 },
  { date: "2024-12-20", ratePct: 2.772 },
  { date: "2024-12-23", ratePct: 2.731 },
  { date: "2024-12-24", ratePct: 2.715 },
  { date: "2024-12-27", ratePct: 2.683 },
  { date: "2024-12-30", ratePct: 2.678 },
  { date: "2024-12-31", ratePct: 2.714 },
  { date: "2025-01-02", ratePct: 2.736 },
  { date: "2025-01-03", ratePct: 2.731 },
  { date: "2025-01-06", ratePct: 2.757 },
  { date: "2025-01-07", ratePct: 2.785 },
  { date: "2025-01-08", ratePct: 2.782 },
  { date: "2025-01-09", ratePct: 2.789 },
  { date: "2025-01-10", ratePct: 2.766 },
  { date: "2025-01-13", ratePct: 2.785 },
  { date: "2025-01-14", ratePct: 2.761 },
  { date: "2025-01-15", ratePct: 2.748 },
  { date: "2025-01-16", ratePct: 2.744 },
  { date: "2025-01-17", ratePct: 2.704 },
  { date: "2025-01-20", ratePct: 2.677 },
  { date: "2025-01-21", ratePct: 2.681 },
  { date: "2025-01-22", ratePct: 2.671 },
  { date: "2025-01-23", ratePct: 2.673 },
  { date: "2025-01-24", ratePct: 2.641 },
  { date: "2025-01-27", ratePct: 2.641 },
  { date: "2025-01-28", ratePct: 2.615 },
  { date: "2025-01-29", ratePct: 2.612 },
  { date: "2025-01-30", ratePct: 2.606 },
  { date: "2025-01-31", ratePct: 2.589 },
  { date: "2025-02-03", ratePct: 2.562 },
  { date: "2025-02-04", ratePct: 2.541 },
  { date: "2025-02-05", ratePct: 2.529 },
  { date: "2025-02-06", ratePct: 2.535 },
  { date: "2025-02-07", ratePct: 2.527 },
  { date: "2025-02-10", ratePct: 2.526 },
  { date: "2025-02-11", ratePct: 2.539 },
  { date: "2025-02-12", ratePct: 2.553 },
  { date: "2025-02-13", ratePct: 2.556 },
  { date: "2025-02-14", ratePct: 2.522 },
  { date: "2025-02-17", ratePct: 2.51 },
  { date: "2025-02-18", ratePct: 2.516 },
  { date: "2025-02-19", ratePct: 2.529 },
  { date: "2025-02-20", ratePct: 2.534 },
  { date: "2025-02-21", ratePct: 2.521 },
  { date: "2025-02-24", ratePct: 2.521 },
  { date: "2025-02-25", ratePct: 2.53 },
  { date: "2025-02-26", ratePct: 2.499 },
  { date: "2025-02-27", ratePct: 2.485 },
  { date: "2025-02-28", ratePct: 2.464 },
  { date: "2025-03-03", ratePct: 2.464 },
  { date: "2025-03-04", ratePct: 2.491 },
  { date: "2025-03-05", ratePct: 2.504 },
  { date: "2025-03-06", ratePct: 2.511 },
  { date: "2025-03-07", ratePct: 2.529 },
  { date: "2025-03-10", ratePct: 2.547 },
  { date: "2025-03-11", ratePct: 2.553 },
  { date: "2025-03-12", ratePct: 2.527 },
  { date: "2025-03-13", ratePct: 2.501 },
  { date: "2025-03-14", ratePct: 2.478 },
  { date: "2025-03-17", ratePct: 2.456 },
  { date: "2025-03-18", ratePct: 2.426 },
  { date: "2025-03-19", ratePct: 2.411 },
  { date: "2025-03-20", ratePct: 2.387 },
  { date: "2025-03-21", ratePct: 2.386 },
  { date: "2025-03-24", ratePct: 2.367 },
  { date: "2025-03-25", ratePct: 2.365 },
  { date: "2025-03-26", ratePct: 2.369 },
  { date: "2025-03-27", ratePct: 2.355 },
  { date: "2025-03-28", ratePct: 2.328 },
  { date: "2025-03-31", ratePct: 2.336 },
  { date: "2025-04-01", ratePct: 2.324 },
  { date: "2025-04-02", ratePct: 2.356 },
  { date: "2025-04-03", ratePct: 2.349 },
  { date: "2025-04-04", ratePct: 2.323 },
  { date: "2025-04-07", ratePct: 2.362 },
  { date: "2025-04-08", ratePct: 2.293 },
  { date: "2025-04-09", ratePct: 2.301 },
  { date: "2025-04-10", ratePct: 2.265 },
  { date: "2025-04-11", ratePct: 2.279 },
  { date: "2025-04-14", ratePct: 2.252 },
  { date: "2025-04-15", ratePct: 2.263 },
  { date: "2025-04-16", ratePct: 2.236 },
  { date: "2025-04-17", ratePct: 2.183 },
  { date: "2025-04-22", ratePct: 2.191 },
  { date: "2025-04-23", ratePct: 2.158 },
  { date: "2025-04-24", ratePct: 2.161 },
  { date: "2025-04-25", ratePct: 2.174 },
  { date: "2025-04-28", ratePct: 2.186 },
  { date: "2025-04-29", ratePct: 2.176 },
  { date: "2025-04-30", ratePct: 2.156 },
  { date: "2025-05-02", ratePct: 2.142 },
  { date: "2025-05-05", ratePct: 2.151 },
  { date: "2025-05-06", ratePct: 2.143 },
  { date: "2025-05-07", ratePct: 2.15 },
  { date: "2025-05-08", ratePct: 2.138 },
  { date: "2025-05-09", ratePct: 2.124 },
  { date: "2025-05-12", ratePct: 2.139 },
  { date: "2025-05-13", ratePct: 2.143 },
  { date: "2025-05-14", ratePct: 2.142 },
  { date: "2025-05-15", ratePct: 2.127 },
  { date: "2025-05-16", ratePct: 2.101 },
  { date: "2025-05-19", ratePct: 2.075 },
  { date: "2025-05-20", ratePct: 2.06 },
  { date: "2025-05-21", ratePct: 2.046 },
  { date: "2025-05-22", ratePct: 2.049 },
  { date: "2025-05-23", ratePct: 2.04 },
  { date: "2025-05-26", ratePct: 2.039 },
  { date: "2025-05-27", ratePct: 2.021 },
  { date: "2025-05-28", ratePct: 2.011 },
  { date: "2025-05-29", ratePct: 1.996 },
  { date: "2025-05-30", ratePct: 1.995 },
  { date: "2025-06-02", ratePct: 1.979 },
  { date: "2025-06-03", ratePct: 1.971 },
  { date: "2025-06-04", ratePct: 1.96 },
  { date: "2025-06-05", ratePct: 1.954 },
  { date: "2025-06-06", ratePct: 1.959 },
  { date: "2025-06-09", ratePct: 1.955 },
  { date: "2025-06-10", ratePct: 1.954 },
  { date: "2025-06-11", ratePct: 1.953 },
  { date: "2025-06-12", ratePct: 1.975 },
  { date: "2025-06-13", ratePct: 2.004 },
  { date: "2025-06-16", ratePct: 2.001 },
  { date: "2025-06-17", ratePct: 2.023 },
  { date: "2025-06-18", ratePct: 2.014 },
  { date: "2025-06-19", ratePct: 2.036 },
  { date: "2025-06-20", ratePct: 2.034 },
  { date: "2025-06-23", ratePct: 2.031 },
  { date: "2025-06-24", ratePct: 1.997 },
  { date: "2025-06-25", ratePct: 1.993 },
  { date: "2025-06-26", ratePct: 1.98 },
  { date: "2025-06-27", ratePct: 1.939 },
  { date: "2025-06-30", ratePct: 1.944 },
  { date: "2025-07-01", ratePct: 1.961 },
  { date: "2025-07-02", ratePct: 1.958 },
  { date: "2025-07-03", ratePct: 1.937 },
  { date: "2025-07-04", ratePct: 1.979 },
  { date: "2025-07-07", ratePct: 1.944 },
  { date: "2025-07-08", ratePct: 1.948 },
  { date: "2025-07-09", ratePct: 1.969 },
  { date: "2025-07-10", ratePct: 2.001 },
  { date: "2025-07-11", ratePct: 2.026 },
  { date: "2025-07-14", ratePct: 2.041 },
  { date: "2025-07-15", ratePct: 2.042 },
  { date: "2025-07-16", ratePct: 2.021 },
  { date: "2025-07-17", ratePct: 2.024 },
  { date: "2025-07-18", ratePct: 1.995 },
  { date: "2025-07-21", ratePct: 1.971 },
  { date: "2025-07-22", ratePct: 1.944 },
  { date: "2025-07-23", ratePct: 1.939 },
  { date: "2025-07-24", ratePct: 1.948 },
  { date: "2025-07-25", ratePct: 1.971 },
  { date: "2025-07-28", ratePct: 2.016 },
  { date: "2025-07-29", ratePct: 2.026 },
  { date: "2025-07-30", ratePct: 2.017 },
  { date: "2025-07-31", ratePct: 2.008 },
  { date: "2025-08-01", ratePct: 1.994 },
  { date: "2025-08-04", ratePct: 1.994 },
  { date: "2025-08-05", ratePct: 1.973 },
  { date: "2025-08-06", ratePct: 1.984 },
  { date: "2025-08-07", ratePct: 2.003 },
  { date: "2025-08-08", ratePct: 2.019 },
  { date: "2025-08-11", ratePct: 2.029 },
  { date: "2025-08-12", ratePct: 2.029 },
  { date: "2025-08-13", ratePct: 2.036 },
  { date: "2025-08-14", ratePct: 2.034 },
  { date: "2025-08-15", ratePct: 2.026 },
  { date: "2025-08-18", ratePct: 2.028 },
  { date: "2025-08-19", ratePct: 2.034 },
  { date: "2025-08-20", ratePct: 2.034 },
  { date: "2025-08-21", ratePct: 2.026 },
  { date: "2025-08-22", ratePct: 2.017 },
  { date: "2025-08-25", ratePct: 2.021 },
  { date: "2025-08-26", ratePct: 2.022 },
  { date: "2025-08-27", ratePct: 2.032 },
  { date: "2025-08-28", ratePct: 2.047 },
  { date: "2025-08-29", ratePct: 2.061 },
  { date: "2025-09-01", ratePct: 2.074 },
  { date: "2025-09-02", ratePct: 2.075 },
  { date: "2025-09-03", ratePct: 2.076 },
  { date: "2025-09-04", ratePct: 2.078 },
  { date: "2025-09-05", ratePct: 2.053 },
  { date: "2025-09-08", ratePct: 2.034 },
  { date: "2025-09-09", ratePct: 2.029 },
  { date: "2025-09-10", ratePct: 2.029 },
  { date: "2025-09-11", ratePct: 2.014 },
  { date: "2025-09-12", ratePct: 2 },
  { date: "2025-09-15", ratePct: 2.033 },
  { date: "2025-09-16", ratePct: 2.015 },
  { date: "2025-09-17", ratePct: 2.024 },
  { date: "2025-09-18", ratePct: 2.029 },
  { date: "2025-09-19", ratePct: 2.016 },
  { date: "2025-09-22", ratePct: 2.004 },
  { date: "2025-09-23", ratePct: 1.996 },
  { date: "2025-09-24", ratePct: 1.993 },
  { date: "2025-09-25", ratePct: 1.98 },
  { date: "2025-09-26", ratePct: 2 },
  { date: "2025-09-29", ratePct: 2.016 },
  { date: "2025-09-30", ratePct: 2.032 },
  { date: "2025-10-01", ratePct: 2.017 },
  { date: "2025-10-02", ratePct: 2 },
  { date: "2025-10-03", ratePct: 2.02 },
  { date: "2025-10-06", ratePct: 2.026 },
  { date: "2025-10-07", ratePct: 2.029 },
  { date: "2025-10-08", ratePct: 2.019 },
  { date: "2025-10-09", ratePct: 2.025 },
  { date: "2025-10-10", ratePct: 2.009 },
  { date: "2025-10-13", ratePct: 2.026 },
  { date: "2025-10-14", ratePct: 2.021 },
  { date: "2025-10-15", ratePct: 2.016 },
  { date: "2025-10-16", ratePct: 2.004 },
  { date: "2025-10-17", ratePct: 2.01 },
  { date: "2025-10-20", ratePct: 2.015 },
  { date: "2025-10-21", ratePct: 2.038 },
  { date: "2025-10-22", ratePct: 2.066 },
  { date: "2025-10-23", ratePct: 2.065 },
  { date: "2025-10-24", ratePct: 2.072 },
  { date: "2025-10-27", ratePct: 2.084 },
  { date: "2025-10-28", ratePct: 2.074 },
  { date: "2025-10-29", ratePct: 2.066 },
  { date: "2025-10-30", ratePct: 2.05 },
  { date: "2025-10-31", ratePct: 2.04 },
  { date: "2025-11-03", ratePct: 2.023 },
  { date: "2025-11-04", ratePct: 2.014 },
  { date: "2025-11-05", ratePct: 1.99 },
  { date: "2025-11-06", ratePct: 1.998 },
  { date: "2025-11-07", ratePct: 2.009 },
  { date: "2025-11-10", ratePct: 2.005 },
  { date: "2025-11-11", ratePct: 2.032 },
  { date: "2025-11-12", ratePct: 2.048 },
  { date: "2025-11-13", ratePct: 2.064 },
  { date: "2025-11-14", ratePct: 2.069 },
  { date: "2025-11-17", ratePct: 2.048 },
  { date: "2025-11-18", ratePct: 2.051 },
  { date: "2025-11-19", ratePct: 2.066 },
  { date: "2025-11-20", ratePct: 2.054 },
  { date: "2025-11-21", ratePct: 2.047 },
  { date: "2025-11-24", ratePct: 2.059 },
  { date: "2025-11-25", ratePct: 2.066 },
  { date: "2025-11-26", ratePct: 2.069 },
  { date: "2025-11-27", ratePct: 2.061 },
  { date: "2025-11-28", ratePct: 2.06 },
  { date: "2025-12-01", ratePct: 2.06 },
  { date: "2025-12-02", ratePct: 2.043 },
  { date: "2025-12-03", ratePct: 2.029 },
  { date: "2025-12-04", ratePct: 2.055 },
  { date: "2025-12-05", ratePct: 2.075 },
  { date: "2025-12-08", ratePct: 2.069 },
  { date: "2025-12-09", ratePct: 2.088 },
  { date: "2025-12-10", ratePct: 2.082 },
  { date: "2025-12-11", ratePct: 2.1 },
  { date: "2025-12-12", ratePct: 2.082 },
  { date: "2025-12-15", ratePct: 2.072 },
  { date: "2025-12-16", ratePct: 2.057 },
  { date: "2025-12-17", ratePct: 2.049 },
  { date: "2025-12-18", ratePct: 2.035 },
  { date: "2025-12-19", ratePct: 2.002 },
  { date: "2025-12-22", ratePct: 2.022 },
  { date: "2025-12-23", ratePct: 2.018 },
  { date: "2025-12-24", ratePct: 2.018 },
  { date: "2025-12-29", ratePct: 2.019 },
  { date: "2025-12-30", ratePct: 2.016 },
  { date: "2025-12-31", ratePct: 2.026 },
  { date: "2026-01-02", ratePct: 2.029 },
  { date: "2026-01-05", ratePct: 2.034 },
  { date: "2026-01-06", ratePct: 2.026 },
  { date: "2026-01-07", ratePct: 2.032 },
  { date: "2026-01-08", ratePct: 2.031 },
  { date: "2026-01-09", ratePct: 2.019 },
  { date: "2026-01-12", ratePct: 2.02 },
  { date: "2026-01-13", ratePct: 2.016 },
  { date: "2026-01-14", ratePct: 2.016 },
  { date: "2026-01-15", ratePct: 2.026 },
  { date: "2026-01-16", ratePct: 2.033 },
  { date: "2026-01-19", ratePct: 2.029 },
  { date: "2026-01-20", ratePct: 2.027 },
  { date: "2026-01-21", ratePct: 2.034 },
  { date: "2026-01-22", ratePct: 2.03 },
  { date: "2026-01-23", ratePct: 2.038 },
  { date: "2026-01-26", ratePct: 2.038 },
  { date: "2026-01-27", ratePct: 2.039 },
  { date: "2026-01-28", ratePct: 2.026 },
  { date: "2026-01-29", ratePct: 2.02 },
  { date: "2026-01-30", ratePct: 2.031 },
  { date: "2026-02-02", ratePct: 2.022 },
  { date: "2026-02-03", ratePct: 2.029 },
  { date: "2026-02-04", ratePct: 2.04 },
  { date: "2026-02-05", ratePct: 2.02 },
  { date: "2026-02-06", ratePct: 1.999 },
  { date: "2026-02-09", ratePct: 1.982 },
  { date: "2026-02-10", ratePct: 1.981 },
  { date: "2026-02-11", ratePct: 1.994 },
  { date: "2026-02-12", ratePct: 1.984 },
  { date: "2026-02-13", ratePct: 1.999 },
  { date: "2026-02-16", ratePct: 1.999 },
  { date: "2026-02-17", ratePct: 2.011 },
  { date: "2026-02-18", ratePct: 2.006 },
  { date: "2026-02-19", ratePct: 2.024 },
  { date: "2026-02-20", ratePct: 2.024 },
  { date: "2026-02-23", ratePct: 2.034 },
  { date: "2026-02-24", ratePct: 2.041 },
  { date: "2026-02-25", ratePct: 2.011 },
  { date: "2026-02-26", ratePct: 2.013 },
  { date: "2026-02-27", ratePct: 2.013 },
  { date: "2026-03-02", ratePct: 2.026 },
  { date: "2026-03-03", ratePct: 2.035 },
  { date: "2026-03-04", ratePct: 2.056 },
  { date: "2026-03-05", ratePct: 2.046 },
  { date: "2026-03-06", ratePct: 2.049 },
  { date: "2026-03-09", ratePct: 2.078 },
  { date: "2026-03-10", ratePct: 2.138 },
  { date: "2026-03-11", ratePct: 2.122 },
  { date: "2026-03-12", ratePct: 2.15 },
  { date: "2026-03-13", ratePct: 2.157 },
  { date: "2026-03-16", ratePct: 2.157 },
  { date: "2026-03-17", ratePct: 2.148 },
  { date: "2026-03-18", ratePct: 2.121 },
  { date: "2026-03-19", ratePct: 2.108 },
  { date: "2026-03-20", ratePct: 2.111 },
  { date: "2026-03-23", ratePct: 2.129 },
  { date: "2026-03-24", ratePct: 2.178 },
  { date: "2026-03-25", ratePct: 2.135 },
  { date: "2026-03-26", ratePct: 2.135 },
  { date: "2026-03-27", ratePct: 2.127 },
  { date: "2026-03-30", ratePct: 2.122 },
  { date: "2026-03-31", ratePct: 2.079 },
  { date: "2026-04-01", ratePct: 2.075 },
  { date: "2026-04-02", ratePct: 2.103 },
  { date: "2026-04-07", ratePct: 2.17 },
  { date: "2026-04-08", ratePct: 2.162 },
  { date: "2026-04-09", ratePct: 2.15 },
  { date: "2026-04-10", ratePct: 2.198 },
  { date: "2026-04-13", ratePct: 2.204 },
  { date: "2026-04-14", ratePct: 2.243 },
  { date: "2026-04-15", ratePct: 2.24 },
  { date: "2026-04-16", ratePct: 2.238 },
  { date: "2026-04-17", ratePct: 2.204 },
  { date: "2026-04-20", ratePct: 2.194 },
  { date: "2026-04-21", ratePct: 2.168 },
  { date: "2026-04-22", ratePct: 2.161 },
  { date: "2026-04-23", ratePct: 2.165 },
  { date: "2026-04-24", ratePct: 2.163 },
  { date: "2026-04-27", ratePct: 2.17 },
  { date: "2026-04-28", ratePct: 2.15 },
  { date: "2026-04-29", ratePct: 2.149 },
  { date: "2026-04-30", ratePct: 2.199 },
  { date: "2026-05-04", ratePct: 2.2 },
  { date: "2026-05-05", ratePct: 2.218 },
  { date: "2026-05-06", ratePct: 2.24 },
  { date: "2026-05-07", ratePct: 2.248 }
];

// ../src/core/calendar.ts
var MS_PER_DAY2 = 864e5;
var FIXED_TARGET2_HOLIDAYS = [
  { month: 1, day: 1 },
  { month: 5, day: 1 },
  { month: 12, day: 25 },
  { month: 12, day: 26 }
];
var ISO_DATE_REGEX2 = /^\d{4}-\d{2}-\d{2}$/;
function pad22(n) {
  return n < 10 ? `0${n}` : String(n);
}
__name(pad22, "pad2");
function toIsoDate(date) {
  return `${date.getUTCFullYear()}-${pad22(date.getUTCMonth() + 1)}-${pad22(date.getUTCDate())}`;
}
__name(toIsoDate, "toIsoDate");
function fromIsoDate(date) {
  if (!ISO_DATE_REGEX2.test(date)) {
    throw new Error(`Invalid ISO date: "${date}"; expected YYYY-MM-DD`);
  }
  const parsed = /* @__PURE__ */ new Date(`${date}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    throw new Error(`Invalid calendar date: "${date}"`);
  }
  return parsed;
}
__name(fromIsoDate, "fromIsoDate");
function easterSunday(year) {
  if (!Number.isInteger(year)) {
    throw new Error(`Invalid year: ${year}`);
  }
  const a = year % 19;
  const b = Math.floor(year / 100);
  const c = year % 100;
  const d = Math.floor(b / 4);
  const e = b % 4;
  const f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3);
  const h = (19 * a + b - d - g + 15) % 30;
  const i = Math.floor(c / 4);
  const k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7;
  const m = Math.floor((a + 11 * h + 22 * l) / 451);
  const numerator = h + l - 7 * m + 114;
  const month = Math.floor(numerator / 31);
  const day = numerator % 31 + 1;
  return `${year}-${pad22(month)}-${pad22(day)}`;
}
__name(easterSunday, "easterSunday");
var holidayCache = /* @__PURE__ */ new Map();
function target2Holidays(year) {
  const cached = holidayCache.get(year);
  if (cached) {
    return cached;
  }
  const easter = fromIsoDate(easterSunday(year));
  const goodFriday = new Date(easter.getTime() - 2 * MS_PER_DAY2);
  const easterMonday = new Date(easter.getTime() + 1 * MS_PER_DAY2);
  const holidays = /* @__PURE__ */ new Set();
  holidays.add(toIsoDate(goodFriday));
  holidays.add(toIsoDate(easterMonday));
  for (const { month, day } of FIXED_TARGET2_HOLIDAYS) {
    holidays.add(`${year}-${pad22(month)}-${pad22(day)}`);
  }
  holidayCache.set(year, holidays);
  return holidays;
}
__name(target2Holidays, "target2Holidays");
function isTarget2BusinessDay(date) {
  const parsed = fromIsoDate(date);
  const weekday = parsed.getUTCDay();
  if (weekday === 0 || weekday === 6) {
    return false;
  }
  return !target2Holidays(parsed.getUTCFullYear()).has(date);
}
__name(isTarget2BusinessDay, "isTarget2BusinessDay");
function previousBusinessDay(date) {
  let cursor = new Date(fromIsoDate(date).getTime() - MS_PER_DAY2);
  for (let i = 0; i < 14; i++) {
    const iso = toIsoDate(cursor);
    if (isTarget2BusinessDay(iso)) {
      return iso;
    }
    cursor = new Date(cursor.getTime() - MS_PER_DAY2);
  }
  throw new Error(`Could not find a TARGET2 business day within 14 days before ${date}`);
}
__name(previousBusinessDay, "previousBusinessDay");
function antepenultimateBusinessDay(year, month) {
  if (!Number.isInteger(year)) {
    throw new Error(`Invalid year: ${year}`);
  }
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(`Invalid month: ${month}; expected an integer in 1..12`);
  }
  let cursor = new Date(Date.UTC(year, month, 0));
  let businessDayCount = 0;
  for (let i = 0; i < 31; i++) {
    const iso = toIsoDate(cursor);
    if (isTarget2BusinessDay(iso)) {
      businessDayCount++;
      if (businessDayCount === 3) {
        return iso;
      }
    }
    cursor = new Date(cursor.getTime() - MS_PER_DAY2);
  }
  throw new Error(`Could not find antepenultimate TARGET2 business day for ${year}-${pad22(month)}`);
}
__name(antepenultimateBusinessDay, "antepenultimateBusinessDay");

// ../node_modules/.pnpm/big.js@6.2.2/node_modules/big.js/big.mjs
var DP = 20;
var RM = 1;
var MAX_DP = 1e6;
var MAX_POWER = 1e6;
var NE = -7;
var PE = 21;
var STRICT = false;
var NAME = "[big.js] ";
var INVALID2 = NAME + "Invalid ";
var INVALID_DP = INVALID2 + "decimal places";
var INVALID_RM = INVALID2 + "rounding mode";
var DIV_BY_ZERO = NAME + "Division by zero";
var P = {};
var UNDEFINED = void 0;
var NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function _Big_() {
  function Big2(n) {
    var x = this;
    if (!(x instanceof Big2)) return n === UNDEFINED ? _Big_() : new Big2(n);
    if (n instanceof Big2) {
      x.s = n.s;
      x.e = n.e;
      x.c = n.c.slice();
    } else {
      if (typeof n !== "string") {
        if (Big2.strict === true && typeof n !== "bigint") {
          throw TypeError(INVALID2 + "value");
        }
        n = n === 0 && 1 / n < 0 ? "-0" : String(n);
      }
      parse(x, n);
    }
    x.constructor = Big2;
  }
  __name(Big2, "Big");
  Big2.prototype = P;
  Big2.DP = DP;
  Big2.RM = RM;
  Big2.NE = NE;
  Big2.PE = PE;
  Big2.strict = STRICT;
  Big2.roundDown = 0;
  Big2.roundHalfUp = 1;
  Big2.roundHalfEven = 2;
  Big2.roundUp = 3;
  return Big2;
}
__name(_Big_, "_Big_");
function parse(x, n) {
  var e, i, nl;
  if (!NUMERIC.test(n)) {
    throw Error(INVALID2 + "number");
  }
  x.s = n.charAt(0) == "-" ? (n = n.slice(1), -1) : 1;
  if ((e = n.indexOf(".")) > -1) n = n.replace(".", "");
  if ((i = n.search(/e/i)) > 0) {
    if (e < 0) e = i;
    e += +n.slice(i + 1);
    n = n.substring(0, i);
  } else if (e < 0) {
    e = n.length;
  }
  nl = n.length;
  for (i = 0; i < nl && n.charAt(i) == "0"; ) ++i;
  if (i == nl) {
    x.c = [x.e = 0];
  } else {
    for (; nl > 0 && n.charAt(--nl) == "0"; ) ;
    x.e = e - i - 1;
    x.c = [];
    for (e = 0; i <= nl; ) x.c[e++] = +n.charAt(i++);
  }
  return x;
}
__name(parse, "parse");
function round(x, sd, rm, more) {
  var xc = x.c;
  if (rm === UNDEFINED) rm = x.constructor.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }
  if (sd < 1) {
    more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
    xc.length = 1;
    if (more) {
      x.e = x.e - sd + 1;
      xc[0] = 1;
    } else {
      xc[0] = x.e = 0;
    }
  } else if (sd < xc.length) {
    more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);
    xc.length = sd;
    if (more) {
      for (; ++xc[--sd] > 9; ) {
        xc[sd] = 0;
        if (sd === 0) {
          ++x.e;
          xc.unshift(1);
          break;
        }
      }
    }
    for (sd = xc.length; !xc[--sd]; ) xc.pop();
  }
  return x;
}
__name(round, "round");
function stringify(x, doExponential, isNonzero) {
  var e = x.e, s = x.c.join(""), n = s.length;
  if (doExponential) {
    s = s.charAt(0) + (n > 1 ? "." + s.slice(1) : "") + (e < 0 ? "e" : "e+") + e;
  } else if (e < 0) {
    for (; ++e; ) s = "0" + s;
    s = "0." + s;
  } else if (e > 0) {
    if (++e > n) {
      for (e -= n; e--; ) s += "0";
    } else if (e < n) {
      s = s.slice(0, e) + "." + s.slice(e);
    }
  } else if (n > 1) {
    s = s.charAt(0) + "." + s.slice(1);
  }
  return x.s < 0 && isNonzero ? "-" + s : s;
}
__name(stringify, "stringify");
P.abs = function() {
  var x = new this.constructor(this);
  x.s = 1;
  return x;
};
P.cmp = function(y) {
  var isneg, x = this, xc = x.c, yc = (y = new x.constructor(y)).c, i = x.s, j = y.s, k = x.e, l = y.e;
  if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;
  if (i != j) return i;
  isneg = i < 0;
  if (k != l) return k > l ^ isneg ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;
  for (i = -1; ++i < j; ) {
    if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
  }
  return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
P.div = function(y) {
  var x = this, Big2 = x.constructor, a = x.c, b = (y = new Big2(y)).c, k = x.s == y.s ? 1 : -1, dp = Big2.DP;
  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  if (!b[0]) {
    throw Error(DIV_BY_ZERO);
  }
  if (!a[0]) {
    y.s = k;
    y.c = [y.e = 0];
    return y;
  }
  var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), rl = r.length, q = y, qc = q.c = [], qi = 0, p = dp + (q.e = x.e - y.e) + 1;
  q.s = k;
  k = p < 0 ? 0 : p;
  bz.unshift(0);
  for (; rl++ < bl; ) r.push(0);
  do {
    for (n = 0; n < 10; n++) {
      if (bl != (rl = r.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl; ) {
          if (b[ri] != r[ri]) {
            cmp = b[ri] > r[ri] ? 1 : -1;
            break;
          }
        }
      }
      if (cmp < 0) {
        for (bt = rl == bl ? b : bz; rl; ) {
          if (r[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r[--ri]; ) r[ri] = 9;
            --r[ri];
            r[rl] += 10;
          }
          r[rl] -= bt[rl];
        }
        for (; !r[0]; ) r.shift();
      } else {
        break;
      }
    }
    qc[qi++] = cmp ? n : ++n;
    if (r[0] && cmp) r[rl] = a[ai] || 0;
    else r = [a[ai]];
  } while ((ai++ < al || r[0] !== UNDEFINED) && k--);
  if (!qc[0] && qi != 1) {
    qc.shift();
    q.e--;
    p--;
  }
  if (qi > p) round(q, p, Big2.RM, r[0] !== UNDEFINED);
  return q;
};
P.eq = function(y) {
  return this.cmp(y) === 0;
};
P.gt = function(y) {
  return this.cmp(y) > 0;
};
P.gte = function(y) {
  return this.cmp(y) > -1;
};
P.lt = function(y) {
  return this.cmp(y) < 0;
};
P.lte = function(y) {
  return this.cmp(y) < 1;
};
P.minus = P.sub = function(y) {
  var i, j, t, xlty, x = this, Big2 = x.constructor, a = x.s, b = (y = new Big2(y)).s;
  if (a != b) {
    y.s = -b;
    return x.plus(y);
  }
  var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
  if (!xc[0] || !yc[0]) {
    if (yc[0]) {
      y.s = -b;
    } else if (xc[0]) {
      y = new Big2(x);
    } else {
      y.s = 1;
    }
    return y;
  }
  if (a = xe - ye) {
    if (xlty = a < 0) {
      a = -a;
      t = xc;
    } else {
      ye = xe;
      t = yc;
    }
    t.reverse();
    for (b = a; b--; ) t.push(0);
    t.reverse();
  } else {
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;
    for (a = b = 0; b < j; b++) {
      if (xc[b] != yc[b]) {
        xlty = xc[b] < yc[b];
        break;
      }
    }
  }
  if (xlty) {
    t = xc;
    xc = yc;
    yc = t;
    y.s = -y.s;
  }
  if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--; ) xc[i++] = 0;
  for (b = i; j > a; ) {
    if (xc[--j] < yc[j]) {
      for (i = j; i && !xc[--i]; ) xc[i] = 9;
      --xc[i];
      xc[j] += 10;
    }
    xc[j] -= yc[j];
  }
  for (; xc[--b] === 0; ) xc.pop();
  for (; xc[0] === 0; ) {
    xc.shift();
    --ye;
  }
  if (!xc[0]) {
    y.s = 1;
    xc = [ye = 0];
  }
  y.c = xc;
  y.e = ye;
  return y;
};
P.mod = function(y) {
  var ygtx, x = this, Big2 = x.constructor, a = x.s, b = (y = new Big2(y)).s;
  if (!y.c[0]) {
    throw Error(DIV_BY_ZERO);
  }
  x.s = y.s = 1;
  ygtx = y.cmp(x) == 1;
  x.s = a;
  y.s = b;
  if (ygtx) return new Big2(x);
  a = Big2.DP;
  b = Big2.RM;
  Big2.DP = Big2.RM = 0;
  x = x.div(y);
  Big2.DP = a;
  Big2.RM = b;
  return this.minus(x.times(y));
};
P.neg = function() {
  var x = new this.constructor(this);
  x.s = -x.s;
  return x;
};
P.plus = P.add = function(y) {
  var e, k, t, x = this, Big2 = x.constructor;
  y = new Big2(y);
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
  if (!xc[0] || !yc[0]) {
    if (!yc[0]) {
      if (xc[0]) {
        y = new Big2(x);
      } else {
        y.s = x.s;
      }
    }
    return y;
  }
  xc = xc.slice();
  if (e = xe - ye) {
    if (e > 0) {
      ye = xe;
      t = yc;
    } else {
      e = -e;
      t = xc;
    }
    t.reverse();
    for (; e--; ) t.push(0);
    t.reverse();
  }
  if (xc.length - yc.length < 0) {
    t = yc;
    yc = xc;
    xc = t;
  }
  e = yc.length;
  for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;
  if (k) {
    xc.unshift(k);
    ++ye;
  }
  for (e = xc.length; xc[--e] === 0; ) xc.pop();
  y.c = xc;
  y.e = ye;
  return y;
};
P.pow = function(n) {
  var x = this, one = new x.constructor("1"), y = one, isneg = n < 0;
  if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
    throw Error(INVALID2 + "exponent");
  }
  if (isneg) n = -n;
  for (; ; ) {
    if (n & 1) y = y.times(x);
    n >>= 1;
    if (!n) break;
    x = x.times(x);
  }
  return isneg ? one.div(y) : y;
};
P.prec = function(sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID2 + "precision");
  }
  return round(new this.constructor(this), sd, rm);
};
P.round = function(dp, rm) {
  if (dp === UNDEFINED) dp = 0;
  else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};
P.sqrt = function() {
  var r, c, t, x = this, Big2 = x.constructor, s = x.s, e = x.e, half = new Big2("0.5");
  if (!x.c[0]) return new Big2(x);
  if (s < 0) {
    throw Error(NAME + "No square root");
  }
  s = Math.sqrt(+stringify(x, true, true));
  if (s === 0 || s === 1 / 0) {
    c = x.c.join("");
    if (!(c.length + e & 1)) c += "0";
    s = Math.sqrt(c);
    e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
    r = new Big2((s == 1 / 0 ? "5e" : (s = s.toExponential()).slice(0, s.indexOf("e") + 1)) + e);
  } else {
    r = new Big2(s + "");
  }
  e = r.e + (Big2.DP += 4);
  do {
    t = r;
    r = half.times(t.plus(x.div(t)));
  } while (t.c.slice(0, e).join("") !== r.c.slice(0, e).join(""));
  return round(r, (Big2.DP -= 4) + r.e + 1, Big2.RM);
};
P.times = P.mul = function(y) {
  var c, x = this, Big2 = x.constructor, xc = x.c, yc = (y = new Big2(y)).c, a = xc.length, b = yc.length, i = x.e, j = y.e;
  y.s = x.s == y.s ? 1 : -1;
  if (!xc[0] || !yc[0]) {
    y.c = [y.e = 0];
    return y;
  }
  y.e = i + j;
  if (a < b) {
    c = xc;
    xc = yc;
    yc = c;
    j = a;
    a = b;
    b = j;
  }
  for (c = new Array(j = a + b); j--; ) c[j] = 0;
  for (i = b; i--; ) {
    b = 0;
    for (j = a + i; j > i; ) {
      b = c[j] + yc[i] * xc[j - i - 1] + b;
      c[j--] = b % 10;
      b = b / 10 | 0;
    }
    c[j] = b;
  }
  if (b) ++y.e;
  else c.shift();
  for (i = c.length; !c[--i]; ) c.pop();
  y.c = c;
  return y;
};
P.toExponential = function(dp, rm) {
  var x = this, n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), ++dp, rm);
    for (; x.c.length < dp; ) x.c.push(0);
  }
  return stringify(x, true, !!n);
};
P.toFixed = function(dp, rm) {
  var x = this, n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), dp + x.e + 1, rm);
    for (dp = dp + x.e + 1; x.c.length < dp; ) x.c.push(0);
  }
  return stringify(x, false, !!n);
};
P[/* @__PURE__ */ Symbol.for("nodejs.util.inspect.custom")] = P.toJSON = P.toString = function() {
  var x = this, Big2 = x.constructor;
  return stringify(x, x.e <= Big2.NE || x.e >= Big2.PE, !!x.c[0]);
};
P.toNumber = function() {
  var n = +stringify(this, true, true);
  if (this.constructor.strict === true && !this.eq(n.toString())) {
    throw Error(NAME + "Imprecise conversion");
  }
  return n;
};
P.toPrecision = function(sd, rm) {
  var x = this, Big2 = x.constructor, n = x.c[0];
  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID2 + "precision");
    }
    x = round(new Big2(x), sd, rm);
    for (; x.c.length < sd; ) x.c.push(0);
  }
  return stringify(x, sd <= x.e || x.e <= Big2.NE || x.e >= Big2.PE, !!n);
};
P.valueOf = function() {
  var x = this, Big2 = x.constructor;
  if (Big2.strict === true) {
    throw Error(NAME + "valueOf disallowed");
  }
  return stringify(x, x.e <= Big2.NE || x.e >= Big2.PE, true);
};
var Big = _Big_();
var big_default = Big;

// ../src/core/money.ts
var ROUND_HALF_EVEN = 2;
var CENT_DECIMALS = 2;
var PERCENT_DECIMALS = 3;
var RATE_DECIMALS = 5;
var HUNDRED = new big_default(100);
var ZERO = new big_default(0);
function toBig(value) {
  if (value instanceof big_default) {
    return value;
  }
  if (typeof value === "number") {
    if (!Number.isFinite(value)) {
      throw new Error(`Cannot convert non-finite number to Big: ${value}`);
    }
    return new big_default(value);
  }
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed === "") {
      throw new Error("Cannot convert empty string to Big");
    }
    try {
      return new big_default(trimmed);
    } catch {
      throw new Error(`Invalid decimal string: "${value}"`);
    }
  }
  throw new Error(`Unsupported value for Big: ${typeof value}`);
}
__name(toBig, "toBig");
function quantize(value, decimals) {
  return toBig(value).round(decimals, ROUND_HALF_EVEN);
}
__name(quantize, "quantize");
function quantizeCents(value) {
  return quantize(value, CENT_DECIMALS);
}
__name(quantizeCents, "quantizeCents");
function percentToRate(percent) {
  return toBig(percent).div(HUNDRED);
}
__name(percentToRate, "percentToRate");
function formatDecimal(value, decimals) {
  return toBig(value).toFixed(decimals, ROUND_HALF_EVEN);
}
__name(formatDecimal, "formatDecimal");
function formatCents(value) {
  return formatDecimal(value, CENT_DECIMALS);
}
__name(formatCents, "formatCents");
function formatPercent(value, decimals = PERCENT_DECIMALS) {
  return formatDecimal(value, decimals);
}
__name(formatPercent, "formatPercent");
function formatRate(value, decimals = RATE_DECIMALS) {
  return formatDecimal(value, decimals);
}
__name(formatRate, "formatRate");

// ../src/core/tba.ts
var MOVING_AVERAGE_DAYS = 20;
function previousMonth(year, month) {
  if (month === 1) {
    return { year: year - 1, month: 12 };
  }
  return { year, month: month - 1 };
}
__name(previousMonth, "previousMonth");
function findLastIndexAtOrBefore(observations, cutoff) {
  let lo = 0;
  let hi = observations.length - 1;
  let result = -1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const entry = observations[mid];
    if (entry !== void 0 && entry.date <= cutoff) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
}
__name(findLastIndexAtOrBefore, "findLastIndexAtOrBefore");
function movingAveragePct(observations, endDate, strictWindowEnd, label, targetMonth) {
  const lastIdx = findLastIndexAtOrBefore(observations, endDate);
  const lastSeen = lastIdx >= 0 ? observations[lastIdx]?.date : void 0;
  if (strictWindowEnd && lastSeen !== endDate) {
    throw new Error(
      `Insufficient EURIBOR data for TBA in ${targetMonth}: need a fixing on ${endDate} for ${label} but the latest observation on or before that date is ${lastSeen ?? "none"}`
    );
  }
  if (lastIdx < MOVING_AVERAGE_DAYS - 1) {
    throw new Error(
      `Insufficient EURIBOR data for TBA in ${targetMonth}: ${label} requires ${MOVING_AVERAGE_DAYS} observations on or before ${endDate} but only ${lastIdx + 1} are available`
    );
  }
  const window = observations.slice(lastIdx - MOVING_AVERAGE_DAYS + 1, lastIdx + 1);
  let sum = new big_default(0);
  for (const row of window) {
    sum = sum.plus(toBig(row.ratePct));
  }
  return { avg: sum.div(MOVING_AVERAGE_DAYS), window };
}
__name(movingAveragePct, "movingAveragePct");
function computeTba(year, month, options) {
  const { year: fixingYear, month: fixingMonth } = previousMonth(year, month);
  const fixingDate = antepenultimateBusinessDay(fixingYear, fixingMonth);
  const maEndDate = fixingDate;
  const targetMonth = formatIsoMonth(year, month);
  const strict = options.strictWindowEnd ?? true;
  const l3 = movingAveragePct(options.observations3m, maEndDate, strict, "EURIBOR 3M", targetMonth);
  const l12 = movingAveragePct(
    options.observations12m,
    maEndDate,
    strict,
    "EURIBOR 12M",
    targetMonth
  );
  const tbaRaw = toBig("0.52").times(l3.avg).plus(toBig("0.47").times(l12.avg)).minus(toBig("0.12"));
  const tbaRounded = tbaRaw.round(3, ROUND_HALF_EVEN);
  return {
    maEndDate,
    l3Window: l3.window,
    l12Window: l12.window,
    l3MovingAveragePct: formatPercent(l3.avg, 3),
    l12MovingAveragePct: formatPercent(l12.avg, 3),
    rawTbaPct: tbaRaw.toString(),
    tbaPct: formatPercent(tbaRounded, 3)
  };
}
__name(computeTba, "computeTba");

// ../src/core/baseRate.ts
var DEFAULT_SERIES = "F";
var BUNDLED_OBSERVATIONS = euribor3m_default.map((row) => ({
  date: row.date,
  ratePct: String(row.ratePct)
}));
var BUNDLED_OBSERVATIONS_12M = euribor12m_default.map((row) => ({
  date: row.date,
  ratePct: String(row.ratePct)
}));
function previousMonth2(year, month) {
  if (month === 1) {
    return { year: year - 1, month: 12 };
  }
  return { year, month: month - 1 };
}
__name(previousMonth2, "previousMonth");
function postMeanOffsetPct(series, targetMonth) {
  const schedule = series.baseRatePostMeanOffsets;
  if (schedule && schedule.length > 0) {
    let picked = schedule[0];
    if (!picked) {
      throw new Error(`${series.name}: baseRatePostMeanOffsets is empty`);
    }
    for (const row of schedule) {
      if (targetMonth >= row.effectiveFromMonth) {
        picked = row;
      }
    }
    return picked.offsetPct;
  }
  return series.baseRateSpreadPct;
}
__name(postMeanOffsetPct, "postMeanOffsetPct");
function findLastIndexAtOrBefore2(observations, cutoff) {
  let lo = 0;
  let hi = observations.length - 1;
  let result = -1;
  while (lo <= hi) {
    const mid = lo + hi >>> 1;
    const entry = observations[mid];
    if (entry !== void 0 && entry.date <= cutoff) {
      result = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return result;
}
__name(findLastIndexAtOrBefore2, "findLastIndexAtOrBefore");
function computeSerieBBaseRate(year, month, series, options) {
  const obs3m = options.observations ?? BUNDLED_OBSERVATIONS;
  const obs12m = options.observations12m ?? BUNDLED_OBSERVATIONS_12M;
  const { year: fixingYear, month: fixingMonth } = previousMonth2(year, month);
  const fixingDate = antepenultimateBusinessDay(fixingYear, fixingMonth);
  if (fixingDate < series.subscriptionStartDate) {
    const targetMonth = `${year}-${String(month).padStart(2, "0")}`;
    throw new Error(
      `No base rate available for ${targetMonth}: fixing date ${fixingDate} precedes ${series.name} subscription start ${series.subscriptionStartDate}`
    );
  }
  const tba = computeTba(year, month, {
    observations3m: obs3m,
    observations12m: obs12m,
    strictWindowEnd: options.strictWindowEnd
  });
  const tbaBig = toBig(tba.tbaPct);
  const preClamp = tbaBig.times(toBig("0.6")).round(series.baseRateDecimals, ROUND_HALF_EVEN);
  const min = toBig(series.baseRateClampMinPct);
  const max = toBig(series.baseRateClampMaxPct);
  let clamped = false;
  let final = preClamp;
  if (final.lt(min)) {
    final = min;
    clamped = true;
  } else if (final.gt(max)) {
    final = max;
    clamped = true;
  }
  let l3Sum = new big_default(0);
  for (const e of tba.l3Window) {
    l3Sum = l3Sum.plus(toBig(e.ratePct));
  }
  const l3RawAvg = l3Sum.div(tba.l3Window.length);
  return {
    year,
    month,
    fixingDate,
    observations: tba.l3Window,
    rawAveragePct: l3RawAvg.toString(),
    roundedAveragePct: tba.tbaPct,
    roundedPlusSpreadPct: formatPercent(preClamp, series.baseRateDecimals),
    basePct: formatPercent(final, series.baseRateDecimals),
    clamped,
    serieB: {
      maEndDate: tba.maEndDate,
      l3MovingAveragePct: tba.l3MovingAveragePct,
      l12MovingAveragePct: tba.l12MovingAveragePct,
      tbaPct: tba.tbaPct
    }
  };
}
__name(computeSerieBBaseRate, "computeSerieBBaseRate");
function computeBaseRate(year, month, options = {}) {
  if (!Number.isInteger(year)) {
    throw new Error(`Invalid year: ${year}`);
  }
  if (!Number.isInteger(month) || month < 1 || month > 12) {
    throw new Error(`Invalid month: ${month}; expected an integer in 1..12`);
  }
  const series = options.series ?? getSeries(DEFAULT_SERIES);
  if (series.code === "B") {
    return computeSerieBBaseRate(year, month, series, options);
  }
  const observations = options.observations ?? BUNDLED_OBSERVATIONS;
  const windowSize = series.euribor3mAveragingDays;
  const { year: fixingYear, month: fixingMonth } = previousMonth2(year, month);
  const fixingDate = antepenultimateBusinessDay(fixingYear, fixingMonth);
  if (fixingDate < series.subscriptionStartDate) {
    const targetMonth2 = `${year}-${String(month).padStart(2, "0")}`;
    throw new Error(
      `No base rate available for ${targetMonth2}: fixing date ${fixingDate} precedes ${series.name} subscription start ${series.subscriptionStartDate}`
    );
  }
  const windowEndDate = previousBusinessDay(fixingDate);
  const lastWindowIndex = findLastIndexAtOrBefore2(observations, windowEndDate);
  const lastSeen = lastWindowIndex >= 0 ? observations[lastWindowIndex]?.date : void 0;
  const strictWindowEnd = options.strictWindowEnd ?? true;
  if (strictWindowEnd && lastSeen !== windowEndDate) {
    const targetMonth2 = `${year}-${String(month).padStart(2, "0")}`;
    throw new Error(
      `Insufficient Euribor 3M data to compute base rate for ${targetMonth2}: need a fixing on ${windowEndDate} (last TARGET2 day before fixing ${fixingDate}) but the latest observation on or before that date is ${lastSeen ?? "none"}`
    );
  }
  if (lastWindowIndex < windowSize - 1) {
    const targetMonth2 = `${year}-${String(month).padStart(2, "0")}`;
    throw new Error(
      `Insufficient Euribor 3M data to compute base rate for ${targetMonth2}: fixing date ${fixingDate} requires ${windowSize} observations on or before ${windowEndDate} but only ${lastWindowIndex + 1} are available in the bundled dataset`
    );
  }
  const window = observations.slice(lastWindowIndex - windowSize + 1, lastWindowIndex + 1);
  let sum = new big_default(0);
  for (const entry of window) {
    sum = sum.plus(toBig(entry.ratePct));
  }
  const rawAverage = sum.div(windowSize);
  const rounded = rawAverage.round(series.baseRateDecimals, ROUND_HALF_EVEN);
  const mult = toBig(series.baseRateEuriborMultiplierPct ?? "1");
  const targetMonth = formatIsoMonth(year, month);
  const offset = toBig(postMeanOffsetPct(series, targetMonth));
  const scaledPreRound = rounded.times(mult).plus(offset);
  const usesPiecewiseOffsets = series.baseRatePostMeanOffsets !== void 0 && series.baseRatePostMeanOffsets.length > 0;
  const preClamp = usesPiecewiseOffsets || !mult.eq(1) ? scaledPreRound.round(series.baseRateDecimals, ROUND_HALF_EVEN) : scaledPreRound;
  const min = toBig(series.baseRateClampMinPct);
  const max = toBig(series.baseRateClampMaxPct);
  let clamped = false;
  let final = preClamp;
  if (final.lt(min)) {
    final = min;
    clamped = true;
  } else if (final.gt(max)) {
    final = max;
    clamped = true;
  }
  return {
    year,
    month,
    fixingDate,
    observations: window,
    rawAveragePct: rawAverage.toString(),
    roundedAveragePct: formatPercent(rounded, series.baseRateDecimals),
    roundedPlusSpreadPct: formatPercent(preClamp, series.baseRateDecimals),
    basePct: formatPercent(final, series.baseRateDecimals),
    clamped
  };
}
__name(computeBaseRate, "computeBaseRate");

// ../src/core/calculator.ts
var MAX_PERPETUAL_QUARTERS = 2e3;
function rateForQuarter(series, subscriptionDate, quarterStart, options) {
  const { year, month } = parseIsoDateParts(quarterStart);
  const base = computeBaseRate(year, month, { ...options, series });
  const yearsSince = floorYearsBetween(subscriptionDate, quarterStart);
  const tier = premiumTierForYear(series, yearsSince + 1, quarterStart);
  const annualPct = toBig(base.basePct).plus(toBig(tier.ratePct));
  const annualRate = percentToRate(annualPct);
  const quarterlyRate = annualRate.div(4);
  return { annualPct, annualRate, quarterlyRate, tier };
}
__name(rateForQuarter, "rateForQuarter");
function simulate(input, options = {}) {
  const parsed = simulateInputSchema.parse(input);
  const series = getSeries(parsed.series);
  const subscriptionDate = parsed.subscriptionDate;
  const asOfDate = parsed.asOfDate ?? todayIsoUtc();
  const includeSchedule = parsed.includeSchedule === true;
  const irsRate = parsed.irsRate ?? Number(series.defaultIrsRate);
  const irsRateBig = toBig(irsRate);
  const principal = toBig(parsed.units);
  const maturityDate = series.maturityYears === null ? null : shiftMonths(subscriptionDate, series.maturityYears * 12);
  const maxQuarters = series.maturityYears === null ? MAX_PERPETUAL_QUARTERS : series.maturityYears * 4;
  let unitQuote = new big_default(1);
  let totalInterestGross = new big_default(0);
  let totalInterestNet = new big_default(0);
  let totalIrsWithheld = new big_default(0);
  const schedule = [];
  let quarterIndex = 0;
  while (quarterIndex < maxQuarters) {
    const quarterStart = shiftMonths(subscriptionDate, quarterIndex * 3);
    const quarterEnd = shiftMonths(subscriptionDate, (quarterIndex + 1) * 3);
    if (quarterEnd > asOfDate) {
      break;
    }
    if (maturityDate !== null && quarterEnd > maturityDate) {
      break;
    }
    const { annualRate, quarterlyRate, tier } = rateForQuarter(
      series,
      subscriptionDate,
      quarterStart,
      options
    );
    const grossPerUnit = unitQuote.times(quarterlyRate);
    const netPerUnit = grossPerUnit.times(new big_default(1).minus(irsRateBig));
    const nextUnitQuote = unitQuote.plus(netPerUnit).round(series.unitQuoteDecimals, ROUND_HALF_EVEN);
    const interestGross = quantizeCents(grossPerUnit.times(principal));
    const irs = quantizeCents(interestGross.times(irsRateBig));
    const interestNet = interestGross.minus(irs);
    totalInterestGross = totalInterestGross.plus(interestGross);
    totalInterestNet = totalInterestNet.plus(interestNet);
    totalIrsWithheld = totalIrsWithheld.plus(irs);
    unitQuote = nextUnitQuote;
    if (includeSchedule) {
      schedule.push({
        quarterEndDate: quarterEnd,
        annualRate: formatRate(annualRate),
        quarterlyRate: formatRate(quarterlyRate),
        interestGross: formatCents(interestGross),
        irsWithheld: formatCents(irs),
        interestNet: formatCents(interestNet),
        balanceAfter: formatCents(quantizeCents(unitQuote.times(principal))),
        unitQuoteAfter: formatDecimal(unitQuote, series.unitQuoteDecimals),
        premiumTier: tier
      });
    }
    quarterIndex += 1;
  }
  const matured = maturityDate !== null && asOfDate >= maturityDate;
  let accruedGross = new big_default(0);
  if (!matured && quarterIndex < maxQuarters) {
    const quarterStart = shiftMonths(subscriptionDate, quarterIndex * 3);
    const quarterEnd = shiftMonths(subscriptionDate, (quarterIndex + 1) * 3);
    const totalDays = daysBetween(quarterStart, quarterEnd);
    const elapsedDays = daysBetween(quarterStart, asOfDate);
    if (totalDays > 0 && elapsedDays > 0 && elapsedDays < totalDays) {
      const { quarterlyRate } = rateForQuarter(series, subscriptionDate, quarterStart, options);
      const fraction = toBig(elapsedDays).div(totalDays);
      accruedGross = unitQuote.times(quarterlyRate).times(fraction).times(principal);
    }
  }
  const currentValueGross = principal.plus(totalInterestGross);
  const currentValueNet = quantizeCents(unitQuote.times(principal));
  const result = {
    series: series.code,
    subscriptionDate,
    asOfDate,
    units: parsed.units,
    irsRate: formatDecimal(irsRateBig, 4),
    currentValueGross: formatCents(currentValueGross),
    currentUnitQuote: formatDecimal(unitQuote, series.unitQuoteDecimals),
    currentValueNet: formatCents(currentValueNet),
    totalInterestGross: formatCents(totalInterestGross),
    totalInterestNet: formatCents(totalInterestNet),
    totalIrsWithheld: formatCents(totalIrsWithheld),
    matured,
    maturityDate,
    accruedSinceLastCapitalization: formatCents(accruedGross),
    seriesMetadata: series,
    ...includeSchedule ? { schedule } : {}
  };
  return result;
}
__name(simulate, "simulate");

// ../src/core/portfolio.ts
var SERIES_ORDER = ["B", "C", "D", "E", "F"];
function simulatePortfolio(input, options = {}) {
  const parsed = simulatePortfolioInputSchema.parse(input);
  const asOfDate = parsed.asOfDate ?? todayIsoUtc();
  const includeSchedule = parsed.includeSchedule === true;
  const cohorts = parsed.subscriptions.map(
    (subscription) => simulate(
      {
        series: subscription.series,
        subscriptionDate: subscription.subscriptionDate,
        units: subscription.units,
        asOfDate,
        includeSchedule,
        ...subscription.irsRate !== void 0 ? { irsRate: subscription.irsRate } : {}
      },
      options
    )
  );
  const totals = cohorts.reduce(
    (acc, cohort) => ({
      totalUnits: acc.totalUnits + cohort.units,
      totalValueGross: acc.totalValueGross.plus(toBig(cohort.currentValueGross)),
      totalValueNet: acc.totalValueNet.plus(toBig(cohort.currentValueNet)),
      totalInterestGross: acc.totalInterestGross.plus(toBig(cohort.totalInterestGross)),
      totalInterestNet: acc.totalInterestNet.plus(toBig(cohort.totalInterestNet)),
      totalIrsWithheld: acc.totalIrsWithheld.plus(toBig(cohort.totalIrsWithheld)),
      totalAccruedGross: acc.totalAccruedGross.plus(toBig(cohort.accruedSinceLastCapitalization))
    }),
    {
      totalUnits: 0,
      totalValueGross: toBig(0),
      totalValueNet: toBig(0),
      totalInterestGross: toBig(0),
      totalInterestNet: toBig(0),
      totalIrsWithheld: toBig(0),
      totalAccruedGross: toBig(0)
    }
  );
  const bySeriesAccumulator = {
    B: {
      units: 0,
      cohortCount: 0,
      valueNet: toBig(0),
      interestNet: toBig(0),
      irsWithheld: toBig(0)
    },
    C: {
      units: 0,
      cohortCount: 0,
      valueNet: toBig(0),
      interestNet: toBig(0),
      irsWithheld: toBig(0)
    },
    D: {
      units: 0,
      cohortCount: 0,
      valueNet: toBig(0),
      interestNet: toBig(0),
      irsWithheld: toBig(0)
    },
    E: {
      units: 0,
      cohortCount: 0,
      valueNet: toBig(0),
      interestNet: toBig(0),
      irsWithheld: toBig(0)
    },
    F: {
      units: 0,
      cohortCount: 0,
      valueNet: toBig(0),
      interestNet: toBig(0),
      irsWithheld: toBig(0)
    }
  };
  for (const cohort of cohorts) {
    const slot = bySeriesAccumulator[cohort.series];
    slot.units += cohort.units;
    slot.cohortCount += 1;
    slot.valueNet = slot.valueNet.plus(toBig(cohort.currentValueNet));
    slot.interestNet = slot.interestNet.plus(toBig(cohort.totalInterestNet));
    slot.irsWithheld = slot.irsWithheld.plus(toBig(cohort.totalIrsWithheld));
  }
  const bySeries = SERIES_ORDER.flatMap((series) => {
    const slot = bySeriesAccumulator[series];
    if (slot.cohortCount === 0) return [];
    return [
      {
        series,
        units: slot.units,
        cohortCount: slot.cohortCount,
        valueNet: formatCents(slot.valueNet),
        interestNet: formatCents(slot.interestNet),
        irsWithheld: formatCents(slot.irsWithheld)
      }
    ];
  });
  const allMatured = cohorts.every((cohort) => cohort.matured);
  const anyMatured = cohorts.some((cohort) => cohort.matured);
  return {
    asOfDate,
    totalUnits: totals.totalUnits,
    totalValueGross: formatCents(totals.totalValueGross),
    totalValueNet: formatCents(totals.totalValueNet),
    totalInterestGross: formatCents(totals.totalInterestGross),
    totalInterestNet: formatCents(totals.totalInterestNet),
    totalIrsWithheld: formatCents(totals.totalIrsWithheld),
    totalAccruedGross: formatCents(totals.totalAccruedGross),
    allMatured,
    anyMatured,
    bySeries,
    cohorts
  };
}
__name(simulatePortfolio, "simulatePortfolio");

// ../src/core/redemption.ts
function simulateRedemption(input, options = {}) {
  const parsed = redemptionInputSchema.parse(input);
  const series = getSeries(parsed.series);
  const unitsToRedeem = parsed.unitsToRedeem ?? parsed.units;
  const remainingUnits = parsed.units - unitsToRedeem;
  const earliestRedemptionDate = shiftMonths(parsed.subscriptionDate, series.minimumHoldingMonths);
  const simulation = simulate(
    {
      series: parsed.series,
      subscriptionDate: parsed.subscriptionDate,
      units: parsed.units,
      asOfDate: parsed.redemptionDate,
      includeSchedule: true,
      ...parsed.irsRate !== void 0 ? { irsRate: parsed.irsRate } : {}
    },
    options
  );
  const unitQuoteAtRedemption = simulation.currentUnitQuote;
  const redemptionValue = quantizeCents(toBig(unitsToRedeem).times(unitQuoteAtRedemption));
  const remainingValueAtRedemption = quantizeCents(
    toBig(remainingUnits).times(unitQuoteAtRedemption)
  );
  const forfeitedAccruedGross = toBig(simulation.accruedSinceLastCapitalization).times(
    toBig(unitsToRedeem).div(parsed.units)
  );
  return {
    series: parsed.series,
    subscriptionDate: parsed.subscriptionDate,
    redemptionDate: parsed.redemptionDate,
    units: parsed.units,
    unitsToRedeem,
    unitQuoteAtRedemption,
    redemptionValue: formatCents(redemptionValue),
    remainingUnits,
    remainingValueAtRedemption: formatCents(remainingValueAtRedemption),
    forfeitedAccruedGross: formatCents(forfeitedAccruedGross),
    earliestRedemptionDate,
    simulation
  };
}
__name(simulateRedemption, "simulateRedemption");

// ../src/core/taxYear.ts
var ZERO_CENTS = formatCents(0);
function taxYearFromQuarterEnd(quarterEndDate) {
  return Number(quarterEndDate.slice(0, 4));
}
__name(taxYearFromQuarterEnd, "taxYearFromQuarterEnd");
function emptyRollup(taxYear) {
  return {
    taxYear,
    interestGross: ZERO_CENTS,
    irsWithheld: ZERO_CENTS,
    interestNet: ZERO_CENTS,
    capitalizationCount: 0
  };
}
__name(emptyRollup, "emptyRollup");
function accumulateRow(acc, row) {
  acc.interestGross = acc.interestGross.plus(toBig(row.interestGross));
  acc.irsWithheld = acc.irsWithheld.plus(toBig(row.irsWithheld));
  acc.interestNet = acc.interestNet.plus(toBig(row.interestNet));
  acc.count += 1;
}
__name(accumulateRow, "accumulateRow");
function finalizeRollup(taxYear, acc) {
  return {
    taxYear,
    interestGross: formatCents(acc.interestGross),
    irsWithheld: formatCents(acc.irsWithheld),
    interestNet: formatCents(acc.interestNet),
    capitalizationCount: acc.count
  };
}
__name(finalizeRollup, "finalizeRollup");
function requireSchedule(result) {
  if (!result.schedule || result.schedule.length === 0) {
    throw new Error(
      "rollupTaxYears requires a non-empty schedule; run simulate with includeSchedule: true"
    );
  }
  return result.schedule;
}
__name(requireSchedule, "requireSchedule");
function rollupTaxYearsFromSchedule(schedule) {
  if (schedule.length === 0) {
    return [];
  }
  const byYear = /* @__PURE__ */ new Map();
  for (const row of schedule) {
    const year = taxYearFromQuarterEnd(row.quarterEndDate);
    let acc = byYear.get(year);
    if (!acc) {
      acc = {
        interestGross: toBig(0),
        irsWithheld: toBig(0),
        interestNet: toBig(0),
        count: 0
      };
      byYear.set(year, acc);
    }
    accumulateRow(acc, row);
  }
  return [...byYear.entries()].sort(([a], [b]) => a - b).map(([taxYear, acc]) => finalizeRollup(taxYear, acc));
}
__name(rollupTaxYearsFromSchedule, "rollupTaxYearsFromSchedule");
function getTaxYearRollupFromSchedule(schedule, taxYear) {
  const match = rollupTaxYearsFromSchedule(schedule).find((rollup) => rollup.taxYear === taxYear);
  return match ?? emptyRollup(taxYear);
}
__name(getTaxYearRollupFromSchedule, "getTaxYearRollupFromSchedule");
function rollupTaxYears(result) {
  return rollupTaxYearsFromSchedule(requireSchedule(result));
}
__name(rollupTaxYears, "rollupTaxYears");
function getTaxYearRollup(result, taxYear) {
  return getTaxYearRollupFromSchedule(requireSchedule(result), taxYear);
}
__name(getTaxYearRollup, "getTaxYearRollup");
function rollupTaxYearsFromPortfolio(portfolio) {
  const byYear = /* @__PURE__ */ new Map();
  for (const cohort of portfolio.cohorts) {
    if (!cohort.schedule) {
      continue;
    }
    for (const rollup of rollupTaxYearsFromSchedule(cohort.schedule)) {
      let acc = byYear.get(rollup.taxYear);
      if (!acc) {
        acc = {
          interestGross: toBig(0),
          irsWithheld: toBig(0),
          interestNet: toBig(0),
          count: 0
        };
        byYear.set(rollup.taxYear, acc);
      }
      acc.interestGross = acc.interestGross.plus(toBig(rollup.interestGross));
      acc.irsWithheld = acc.irsWithheld.plus(toBig(rollup.irsWithheld));
      acc.interestNet = acc.interestNet.plus(toBig(rollup.interestNet));
      acc.count += rollup.capitalizationCount;
    }
  }
  return [...byYear.entries()].sort(([a], [b]) => a - b).map(([taxYear, acc]) => finalizeRollup(taxYear, acc));
}
__name(rollupTaxYearsFromPortfolio, "rollupTaxYearsFromPortfolio");

// ../src/core/rates.ts
var DEFAULT_SERIES2 = "F";
function quartersElapsed(subscriptionDate, asOfDate) {
  if (asOfDate <= subscriptionDate) {
    return 0;
  }
  const sub = parseIsoDateParts(subscriptionDate);
  const at = parseIsoDateParts(asOfDate);
  let monthsDiff = (at.year - sub.year) * 12 + (at.month - sub.month);
  if (at.day < sub.day) {
    monthsDiff -= 1;
  }
  return Math.max(0, Math.floor(monthsDiff / 3));
}
__name(quartersElapsed, "quartersElapsed");
function toMonthlyBaseRate(series, year, month, options) {
  const result = computeBaseRate(year, month, { ...options, series });
  return {
    series: series.code,
    month: formatIsoMonth(year, month),
    fixingDate: result.fixingDate,
    basePct: result.basePct
  };
}
__name(toMonthlyBaseRate, "toMonthlyBaseRate");
function getCurrentRate(input = {}, options = {}) {
  const parsed = currentRateInputSchema.parse(input);
  const series = getSeries(parsed.series ?? DEFAULT_SERIES2);
  const asOf = parsed.asOfDate ?? todayIsoUtc();
  const { year, month } = parseIsoDateParts(asOf);
  return toMonthlyBaseRate(series, year, month, options);
}
__name(getCurrentRate, "getCurrentRate");
function getRateForCohort(input, options = {}) {
  const parsed = cohortRateInputSchema.parse(input);
  const series = getSeries(parsed.series);
  const asOf = parsed.asOfDate ?? todayIsoUtc();
  const quarterIndex = quartersElapsed(parsed.subscriptionDate, asOf);
  const quarterStartDate = shiftMonths(parsed.subscriptionDate, quarterIndex * 3);
  const quarterEndDate = shiftMonths(parsed.subscriptionDate, (quarterIndex + 1) * 3);
  const yearsSinceSubscription = floorYearsBetween(parsed.subscriptionDate, quarterStartDate);
  if (series.maturityYears !== null && yearsSinceSubscription >= series.maturityYears) {
    throw new Error(
      `Cohort subscribed on ${parsed.subscriptionDate} has matured by ${quarterStartDate} (${series.name} maturity is ${series.maturityYears} years)`
    );
  }
  const { year, month } = parseIsoDateParts(quarterStartDate);
  const base = computeBaseRate(year, month, { ...options, series });
  const premiumTier = premiumTierForYear(series, yearsSinceSubscription + 1, quarterStartDate);
  const annualPct = toBig(base.basePct).plus(toBig(premiumTier.ratePct));
  return {
    series: series.code,
    subscriptionDate: parsed.subscriptionDate,
    asOfDate: asOf,
    quarterStartDate,
    quarterEndDate,
    quarterIndex,
    yearsSinceSubscription,
    baseRatePct: base.basePct,
    premiumTier,
    annualRatePct: formatPercent(annualPct, series.baseRateDecimals)
  };
}
__name(getRateForCohort, "getRateForCohort");
function getRateTable(input, options = {}) {
  const parsed = rateTableInputSchema.parse(input);
  const series = getSeries(parsed.series ?? DEFAULT_SERIES2);
  const months = enumerateMonths(parsed.fromMonth, parsed.toMonth);
  const rates = [];
  for (const m of months) {
    const { year, month } = parseIsoMonthParts(m);
    try {
      rates.push(toMonthlyBaseRate(series, year, month, options));
    } catch {
    }
  }
  return rates;
}
__name(getRateTable, "getRateTable");

// ../src/safe.ts
function toRuntimeFailure(e) {
  if (e instanceof Error) {
    return { ok: false, kind: "runtime", message: e.message, cause: e.cause };
  }
  return { ok: false, kind: "runtime", message: String(e) };
}
__name(toRuntimeFailure, "toRuntimeFailure");
function safeSimulate(input, options = {}) {
  const parsed = simulateInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: "validation", error: parsed.error };
  }
  try {
    return { ok: true, value: simulate(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
__name(safeSimulate, "safeSimulate");
function safeSimulatePortfolio(input, options = {}) {
  const parsed = simulatePortfolioInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: "validation", error: parsed.error };
  }
  try {
    return {
      ok: true,
      value: simulatePortfolio(parsed.data, options)
    };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
__name(safeSimulatePortfolio, "safeSimulatePortfolio");
function safeSimulateRedemption(input, options = {}) {
  const parsed = redemptionInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: "validation", error: parsed.error };
  }
  try {
    return { ok: true, value: simulateRedemption(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
__name(safeSimulateRedemption, "safeSimulateRedemption");
function safeGetCurrentRate(input = {}, options = {}) {
  const parsed = currentRateInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: "validation", error: parsed.error };
  }
  try {
    return { ok: true, value: getCurrentRate(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
__name(safeGetCurrentRate, "safeGetCurrentRate");
function safeGetRateForCohort(input, options = {}) {
  const parsed = cohortRateInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: "validation", error: parsed.error };
  }
  try {
    return { ok: true, value: getRateForCohort(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
__name(safeGetRateForCohort, "safeGetRateForCohort");
function safeGetRateTable(input, options = {}) {
  const parsed = rateTableInputSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, kind: "validation", error: parsed.error };
  }
  try {
    return { ok: true, value: getRateTable(parsed.data, options) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
__name(safeGetRateTable, "safeGetRateTable");
function isSimulateResult(value) {
  return typeof value === "object" && value !== null && "series" in value && "subscriptionDate" in value && "schedule" in value;
}
__name(isSimulateResult, "isSimulateResult");
function isPortfolioResult(value) {
  return typeof value === "object" && value !== null && "cohorts" in value && Array.isArray(value.cohorts);
}
__name(isPortfolioResult, "isPortfolioResult");
function safeRollupTaxYears(result) {
  if (!isSimulateResult(result)) {
    return { ok: false, kind: "runtime", message: "Expected a SimulateResult object" };
  }
  try {
    return { ok: true, value: rollupTaxYears(result) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
__name(safeRollupTaxYears, "safeRollupTaxYears");
function safeGetTaxYearRollup(result, taxYear) {
  const yearParsed = taxYearSchema.safeParse(taxYear);
  if (!yearParsed.success) {
    return { ok: false, kind: "validation", error: yearParsed.error };
  }
  if (!isSimulateResult(result)) {
    return { ok: false, kind: "runtime", message: "Expected a SimulateResult object" };
  }
  try {
    return { ok: true, value: getTaxYearRollup(result, yearParsed.data) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
__name(safeGetTaxYearRollup, "safeGetTaxYearRollup");
function safeRollupTaxYearsFromPortfolio(portfolio) {
  if (!isPortfolioResult(portfolio)) {
    return { ok: false, kind: "runtime", message: "Expected a PortfolioResult object" };
  }
  try {
    return { ok: true, value: rollupTaxYearsFromPortfolio(portfolio) };
  } catch (e) {
    return toRuntimeFailure(e);
  }
}
__name(safeRollupTaxYearsFromPortfolio, "safeRollupTaxYearsFromPortfolio");

// ../src/index.ts
var VERSION = "2026.513.0";

// ../src/api/handlers.ts
var HANDLER_VERSION = VERSION;
var API_DISCLAIMER = "calculator-quality estimate; not official IGCP; not tax advice";
function getHealth() {
  return {
    version: HANDLER_VERSION,
    status: "ok",
    euriborMeta: meta_default
  };
}
__name(getHealth, "getHealth");
function toApiJsonBody(result) {
  if (result.ok) {
    return { ok: true, value: result.value };
  }
  if (result.kind === "validation") {
    return {
      ok: false,
      kind: "validation",
      error: { issues: result.error.issues }
    };
  }
  return { ok: false, kind: "runtime", message: result.message };
}
__name(toApiJsonBody, "toApiJsonBody");
function apiHttpStatus(result) {
  if (result.ok) return 200;
  if (result.kind === "validation") return 400;
  return 422;
}
__name(apiHttpStatus, "apiHttpStatus");
function handleGetTaxYearRollupFromBody(body) {
  if (typeof body !== "object" || body === null) {
    return {
      ok: false,
      kind: "runtime",
      message: "Expected JSON object with result and taxYear"
    };
  }
  const { result, taxYear } = body;
  return safeGetTaxYearRollup(result, taxYear);
}
__name(handleGetTaxYearRollupFromBody, "handleGetTaxYearRollupFromBody");

// ../src/api/router.ts
var DISCLAIMER_HEADER = "X-IGCP-Aforro-Disclaimer";
var POST_ROUTES = {
  "/v1/simulate": safeSimulate,
  "/v1/portfolio": safeSimulatePortfolio,
  "/v1/redeem": safeSimulateRedemption,
  "/v1/rates/current": safeGetCurrentRate,
  "/v1/rates/cohort": safeGetRateForCohort,
  "/v1/rates/table": safeGetRateTable,
  "/v1/tax-year/rollup": safeRollupTaxYears,
  "/v1/tax-year/rollup-portfolio": safeRollupTaxYearsFromPortfolio,
  "/v1/tax-year/get": handleGetTaxYearRollupFromBody
};
function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}
__name(corsHeaders, "corsHeaders");
function baseHeaders(extra) {
  return new Headers({
    ...corsHeaders(),
    [DISCLAIMER_HEADER]: API_DISCLAIMER,
    "Content-Type": "application/json; charset=utf-8",
    ...extra
  });
}
__name(baseHeaders, "baseHeaders");
function jsonResponse(body, status, extra) {
  return new Response(JSON.stringify(body), {
    status,
    headers: baseHeaders(extra)
  });
}
__name(jsonResponse, "jsonResponse");
function safeResultResponse(result) {
  return jsonResponse(toApiJsonBody(result), apiHttpStatus(result));
}
__name(safeResultResponse, "safeResultResponse");
async function readJsonBody(request) {
  const text = await request.text();
  if (text.trim() === "") {
    return {};
  }
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}
__name(readJsonBody, "readJsonBody");
async function handleRequest(request) {
  const url = new URL(request.url);
  const { pathname } = url;
  const method = request.method.toUpperCase();
  if (method === "OPTIONS" && pathname.startsWith("/v1/")) {
    return new Response(null, {
      status: 204,
      headers: baseHeaders()
    });
  }
  if (pathname === "/health" && method === "GET") {
    return jsonResponse(getHealth(), 200);
  }
  if (pathname.startsWith("/v1/")) {
    if (method !== "POST") {
      return jsonResponse({ error: "Method Not Allowed" }, 405);
    }
    const handler = POST_ROUTES[pathname];
    if (!handler) {
      return jsonResponse({ error: "Not Found" }, 404);
    }
    const body = await readJsonBody(request);
    if (body === null) {
      return jsonResponse(
        {
          ok: false,
          kind: "validation",
          error: { issues: [{ message: "Invalid JSON body" }] }
        },
        400
      );
    }
    return safeResultResponse(handler(body));
  }
  if (pathname === "/health") {
    return jsonResponse({ error: "Method Not Allowed" }, 405);
  }
  return jsonResponse({ error: "Not Found" }, 404);
}
__name(handleRequest, "handleRequest");

// src/index.ts
var src_default = {
  fetch(request) {
    return handleRequest(request);
  }
};

// ../node_modules/.pnpm/wrangler@4.92.0_@cloudflare+workers-types@4.20260515.1/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../node_modules/.pnpm/wrangler@4.92.0_@cloudflare+workers-types@4.20260515.1/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-JDvSbO/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../node_modules/.pnpm/wrangler@4.92.0_@cloudflare+workers-types@4.20260515.1/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-JDvSbO/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
