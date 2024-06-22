"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pxPar = pxPar;
exports.px_par = px_par;
/** Calculates a % based child size based on the pixel measurements of it's parent's width. */
function pxPar(
/** The width of the container - this should be in pixels. */
containerWidth, 
/** The width of the child - this should be in pixels. */
childWidth, 
/** Any extra measurements to add or remove from the calculation.  */
extraPx) {
    return `calc( ( (100% / ${containerWidth}) * ${childWidth} ) + ${extraPx || "0px"} )`;
}
/** Calculates a % based child size based on the pixel measurements of it's parent's width. */
function px_par(
/** The width of the container - this should be in pixels. */
containerWidth, 
/** The width of the child - this should be in pixels. */
childWidth, 
/** Any extra measurements to add or remove from the calculation.  */
extraPx) {
    return `calc( ( (100% / ${containerWidth}) * ${childWidth} ) + ${extraPx || "0px"} )`;
}
