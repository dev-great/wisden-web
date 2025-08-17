declare module 'sticky-js' {
  export interface StickyOptions {
    topSpacing?: number;
    bottomSpacing?: number;
    stickyClass?: string;
    wrapperClassName?: string;
    center?: boolean;
    getWidthFrom?: string;
    widthFromWrapper?: boolean;
    responsiveWidth?: boolean;
    zIndex?: number;
    // add other known options here if needed
    [key: string]: unknown;
  }

  export default class Sticky {
    constructor(selector: string, options?: StickyOptions);
    update(): void;
    destroy(): void;
  }
}
