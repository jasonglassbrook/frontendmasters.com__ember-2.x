/******************************************************************************\
 * TYPICAL
 \******************************************************************************/

const _PRIMITIVE_TYPEOFS = new Set([
  "boolean",
  "number",
  "bigint",
  "string",
  "symbol",
  "undefined",
]);

const _PRIMITIVE_VALUES = new Set([undefined, null]);

const _PRIMITIVE_WRAPPER_OBJECTS = new Set([Boolean, Number, String, Symbol]);

/**************************************\
 * PRIMITIVE TESTS
 \**************************************/

/*------------------------------------*\
 * NULLISHNESS TESTS
\*------------------------------------*/

export function isUndefined(x) {
  return x === undefined;
}

export function isntUndefined(x) {
  return !isUndefined(x);
}

/*------------------------------------*/

export function isNull(x) {
  return x === null;
}

export function isntNull(x) {
  return !isNull(x);
}

/*------------------------------------*/

export function isDefined(x) {
  return isntUndefined(x);
}

export function isntDefined(x) {
  return isUndefined(x);
}

/*------------------------------------*/

export function isNullish(x) {
  return isUndefined(x) || isNull(x);
}

export function isntNullish(x) {
  return !isNullish(x);
}

/*------------------------------------*\
 * GENERAL PRIMITIVE TESTS
\*------------------------------------*/

export function isPrimitive(x) {
  return _PRIMITIVE_VALUES.has(x) || _PRIMITIVE_TYPEOFS.has(typeof x);
}

export function isntPrimitive(x) {
  return !isPrimitive(x);
}

/*------------------------------------*\
 * SPECIAL PRIMITIVE TESTS
\*------------------------------------*/

export function isBoolean(x) {
  return typeof x === "boolean";
}

export function isntBoolean(x) {
  return !isBoolean(x);
}

/*------------------------------------*/

export function isNumber(x) {
  return typeof x === "number";
}

export function isntNumber(x) {
  return !isNumber(x);
}

/*------------------------------------*/

export function isBigInt(x) {
  return typeof x === "bigint";
}

export function isntBigInt(x) {
  return !isBigInt(x);
}

/*------------------------------------*/

export function isString(x) {
  return typeof x === "string";
}

export function isntString(x) {
  return !isString(x);
}

/*------------------------------------*/

export function isSymbol(x) {
  return typeof x === "symbol";
}

export function isntSymbol(x) {
  return !isSymbol(x);
}

/**************************************\
 * OBJECT TESTS
 \**************************************/

/*------------------------------------*\
 * GENERAL OBJECT TESTS
\*------------------------------------*/

export function isObject(x) {
  return x instanceof Object;
}

export function isntObject(x) {
  return !isObject(x);
}

/*------------------------------------*\
 * PRIMITIVE WRAPPER OBJECT TESTS
\*------------------------------------*/

export function isPrimitiveWrapperObject(x) {
  for (let wrapper of _PRIMITIVE_WRAPPER_OBJECTS) {
    if (x instanceof wrapper) {
      return true;
    }
  }
  return false;
}

export function isntPrimitiveWrapperObject(x) {
  return !isPrimitiveWrapperObject(x);
}

/*------------------------------------*/

export function isBooleanObject(x) {
  return x instanceof Boolean;
}

export function isntBooleanObject(x) {
  return !isBooleanObject(x);
}

/*------------------------------------*/

export function isNumberObject(x) {
  return x instanceof Number;
}

export function isntNumberObject(x) {
  return !isNumberObject(x);
}

/*------------------------------------*/

export function isStringObject(x) {
  return x instanceof String;
}

export function isntStringObject(x) {
  return !isStringObject(x);
}

/*------------------------------------*/

export function isSymbolObject(x) {
  return x instanceof Symbol;
}

export function isntSymbolObject(x) {
  return !isSymbolObject(x);
}

/*------------------------------------*\
 * CONTAINER OBJECT TESTS
\*------------------------------------*/

export function isArray(x) {
  return Array.isArray(x);
}

export function isntArray(x) {
  return !isArray(x);
}

/*------------------------------------*/

export function isSet(x) {
  return x instanceof Set;
}

export function isntSet(x) {
  return !isSet(x);
}

/*------------------------------------*/

export function isMap(x) {
  return x instanceof Map;
}

export function isntMap(x) {
  return !isMap(x);
}

/*------------------------------------*/

export function isWeakSet(x) {
  return x instanceof WeakSet;
}

export function isntWeakSet(x) {
  return !isWeakSet(x);
}

/*------------------------------------*/

export function isWeakMap(x) {
  return x instanceof WeakMap;
}

export function isntWeakMap(x) {
  return !isWeakMap(x);
}

/*------------------------------------*/
