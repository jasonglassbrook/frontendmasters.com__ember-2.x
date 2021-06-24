/******************************************************************************\
 * DATETIME
 \******************************************************************************/

import { spread } from "./ply";
import { isString } from "./typical";

/*------------------------------------*/

export function injectDatetimeRecordInClone(source, datelike, prefix, suffix) {
  return injectDatetimeRecord(spread(source), datelike, prefix, suffix);
}

export function injectDatetimeRecord(target, datelike, prefix, suffix) {
  const record = asDatetimeRecord(datelike);

  prefix = isString(prefix) ? prefix : "";
  suffix = isString(suffix) ? suffix : "";

  for (let key in record) {
    target[`${prefix}${key}${suffix}`] = record[key];
  }

  return target;
}

/*------------------------------------*/

export function asDatetimeRecord(datelike) {
  const date = new Date(datelike);

  return {
    datetime: asDatetimeString(date),
    date: asDateString(date),
    time: asTimeString(date),
  };
}

export function asDatetimeString(date) {
  return date.toLocaleString();
}

export function asDateString(date) {
  return date.toLocaleDateString();
}

export function asTimeString(date) {
  return date.toLocaleTimeString();
}

/*------------------------------------*/
