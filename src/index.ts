/** Calculates a % based child size based on the pixel measurements of it's parent's width. */
export function pxPar(
  /** The width of the container - this should be in pixels. */
  containerWidth: number,
  /** The width of the child - this should be in pixels. */
  childWidth: number,
  /** Any extra measurements to add or remove from the calculation.  */
  extraPx?: string
) {
  return `calc( ( (100% / ${containerWidth}) * ${childWidth} ) + ${
    extraPx || "0px"
  } )`;
}

/** Calculates a % based child size based on the pixel measurements of it's parent's width. */
export function px_par(
  /** The width of the container - this should be in pixels. */
  containerWidth: number,
  /** The width of the child - this should be in pixels. */
  childWidth: number,
  /** Any extra measurements to add or remove from the calculation.  */
  extraPx?: string
) {
  return `calc( ( (100% / ${containerWidth}) * ${childWidth} ) + ${
    extraPx || "0px"
  } )`;
}
