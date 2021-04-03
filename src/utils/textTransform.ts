export const unCamelCase = (str: string): string =>
  `${str.replace(/([A-Z])/g, (word, idx) =>
    idx === 0 ? word.toUpperCase() : ` ${word.toLowerCase()}`,
  )}`;

export const capitalizeFirstLetter = (str: string): string =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

export const concatString = (str: string, char: string = ''): string =>
  str.replace(/\s/g, char);

export const transformLinkToTitle = (str: string): string =>
  str.slice(1, str.length).replace(/-/g, ' ');
