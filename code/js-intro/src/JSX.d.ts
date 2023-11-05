declare namespace JSX {
  export interface IntrinsicElements {
    // for any intrinsic element name, we accept any attributes
    [elemName: string]: object;
  }
}
