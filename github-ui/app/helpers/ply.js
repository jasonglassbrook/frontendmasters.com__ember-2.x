/******************************************************************************\
 * PLY
 \******************************************************************************/

export function spread(source, constructor = Object) {
  const result = constructor();
  for (let [key, value] in Object.entries(source)) {
    result[key] = value;
  }
  return result;
}

/*------------------------------------*/
