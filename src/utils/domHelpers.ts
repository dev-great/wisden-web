// Type-safe DOM Helpers for React + TypeScript

export const isVariableDefined = (el: HTMLElement | null | undefined): boolean => {
  return el !== undefined && el !== null;
};

export const addClass = (el: HTMLElement | string | null, className: string): void => {
  const element = typeof el === "string" ? document.querySelector<HTMLElement>(el) : el;
  if (isVariableDefined(element) && className) {
    element!.classList.add(className);
  }
};

export const removeClass = (el: HTMLElement | string | null, className: string): void => {
  const element = typeof el === "string" ? document.querySelector<HTMLElement>(el) : el;
  if (isVariableDefined(element) && className) {
    element!.classList.remove(className);
  }
};

export const toggleClass = (el: HTMLElement | string | null, className: string): void => {
  const element = typeof el === "string" ? document.querySelector<HTMLElement>(el) : el;
  if (isVariableDefined(element) && className) {
    element!.classList.toggle(className);
  }
};

export const getCssVariableValue = (variable: string): string => {
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable);
  return value.trim();
};

type VendorHTMLElement = HTMLElement & {
  webkitMatchesSelector?: (selectors: string) => boolean;
  mozMatchesSelector?: (selectors: string) => boolean;
  msMatchesSelector?: (selectors: string) => boolean;
};

export const getParents = (
  el: HTMLElement,
  selector?: string,
  filter?: string
): HTMLElement[] => {
  const element = el as VendorHTMLElement;

  const matchesSelector =
    element.matches ||
    element.webkitMatchesSelector ||
    element.mozMatchesSelector ||
    element.msMatchesSelector;

  if (!matchesSelector) {
    return [];
  }

  const result: HTMLElement[] = [];
  let parent = element.parentElement;

  while (parent && !(selector && matchesSelector.call(parent, selector))) {
    if (!filter) {
      result.push(parent);
    } else if (matchesSelector.call(parent, filter)) {
      result.push(parent);
    }
    parent = parent.parentElement;
  }

  return result;
};

export const getNextSiblings = (
  el: HTMLElement,
  selector?: string,
  filter?: (el: HTMLElement) => boolean
): HTMLElement[] | HTMLElement => {
  const element = el as VendorHTMLElement;

  const matchesSelector =
    element.matches ||
    element.webkitMatchesSelector ||
    element.mozMatchesSelector ||
    element.msMatchesSelector;

  if (!matchesSelector) {
    return [];
  }

  const sibs: HTMLElement[] = [];
  let nextElem = element.parentNode?.firstChild as HTMLElement | null;

  while (nextElem) {
    if (
      nextElem.nodeType !== 3 && // not a text node
      nextElem !== element &&
      nextElem === element.nextElementSibling
    ) {
      if (!filter || filter(element)) {
        if (selector) {
          if (matchesSelector.call(nextElem as HTMLElement, selector)) {
            return nextElem;
          }
        } else {
          sibs.push(nextElem);
        }
        el = nextElem;
      }
    }
    nextElem = nextElem.nextSibling as HTMLElement | null;
  }

  return sibs;
};

export const removeAllClass = (selectors: string, className: string): void => {
  document.querySelectorAll<HTMLElement>(selectors).forEach((element) => {
    element.classList.remove(className);
  });
};

export const on = (
  selectors: string | HTMLElement,
  type: string,
  listener: EventListenerOrEventListenerObject
): void => {
  document.addEventListener("DOMContentLoaded", () => {
    let element: HTMLElement | null = null;

    if (typeof selectors === "string") {
      element = document.querySelector(selectors);
    } else {
      element = selectors;
    }

    if (element) {
      element.addEventListener(type, listener);
    }
  });
};

export const onAll = (selector: string, type: string, listener: EventListener): void => {
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll<HTMLElement>(selector).forEach((element) => {
      if (type.includes(",")) {
        type.split(",").forEach((t) => {
          element.addEventListener(t, listener);
        });
      } else {
        element.addEventListener(type, listener);
      }
    });
  });
};

export const select = (selector: string): HTMLElement | null => {
  return document.querySelector<HTMLElement>(selector);
};

export const selectAll = (selector: string): NodeListOf<HTMLElement> => {
  return document.querySelectorAll<HTMLElement>(selector);
};
