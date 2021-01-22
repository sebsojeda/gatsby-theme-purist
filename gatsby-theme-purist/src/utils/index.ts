function copyToClipboard(text: string) {
  const textarea = document.createElement('textarea');

  textarea.value = text;
  textarea.style.position = 'absolute';
  textarea.style.left = '-9999px';

  document.body.appendChild(textarea);

  textarea.select();
  document.execCommand('copy');

  document.body.removeChild(textarea);
}

function searchStore(query: string, limit: number) {
  let index: any, store: any;
  let results = [];

  if (typeof window !== 'undefined') {
    index = window.__FLEXSEARCH__.en.index;
    store = window.__FLEXSEARCH__.en.store;
  }

  if (!!query) {
    let ids: any[] = [];

    Object.keys(index).forEach((idx) =>
      ids.push(...index[idx].values.search(query, limit)),
    );
    results = store
      .filter((node: any) =>
        ids.includes(node.id) && !node.node.draft ? node : null,
      )
      .map((node: any) => node.node);
  }

  return results;
}

function calculateLinesToHighlight(meta: string) {
  const regex = /{([\d,-]+)}/;

  if (!regex.test(meta)) {
    return () => false;
  }

  const lineNumbers = parseRange(regex.exec(meta)[1]);
  return (index: number) => lineNumbers.includes(index + 1);
}

function parseRange(input: string) {
  let results: number[] = [];
  let match: RegExpMatchArray;

  for (let str of input.split(',').map((str) => str.trim())) {
    if (/^\d+$/.test(str)) {
      results.push(parseInt(str, 10));
    } else if ((match = str.match(/^(\d+)(-)(\d+)$/))) {
      let from = parseInt(match[1], 10);
      let to = parseInt(match[3], 10);

      const increment = from < to ? 1 : -1;
      to += increment;

      for (let i = from; i !== to; i += increment) {
        results.push(i);
      }
    }
  }

  return results;
}

function kebabCase(input) {
  return input.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
}

export {
  copyToClipboard,
  searchStore,
  calculateLinesToHighlight,
  parseRange,
  kebabCase,
};
