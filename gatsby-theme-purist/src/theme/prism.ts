export default {
  light: {
    highlight: {
      backgroundColor: 'hsl(225deg, 25%, 93%)',
      borderColor: '#bf00b8',
    },
    plain: {
      backgroundColor: 'hsl(225deg, 25%, 97%)',
      text: '#2a2a2a',
    },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: {
          color: '#467790',
        },
      },
      {
        types: ['number', 'boolean'],
        style: {
          color: '#bf00b8',
        },
      },
      {
        types: ['string', 'keyword', 'operator'],
        style: {
          color: '#651fff',
        },
      },
      {
        types: ['property', 'tag'],
        style: {
          color: '#da0079',
        },
      },
      {
        types: ['function', 'builtin'],
        style: {
          color: '#3d5afe',
        },
      },
      {
        types: ['regex'],
        style: {
          color: '#3600d6',
        },
      },
      {
        types: ['deleted'],
        style: {
          color: 'rgb(255, 85, 85)',
        },
      },
      {
        types: ['attr-name'],
        style: {
          color: '#aa00ff',
        },
      },
    ],
  },
  dark: {
    highlight: {
      backgroundColor: 'hsl(210deg, 30%, 18%)',
      borderColor: '#ffd600',
    },
    plain: {
      backgroundColor: 'hsl(210deg, 30%, 12%)',
      text: '#fff',
    },
    styles: [
      {
        types: ['comment', 'prolog', 'doctype', 'cdata'],
        style: {
          color: '#6c8998',
        },
      },
      {
        types: ['number', 'boolean'],
        style: {
          color: '#ffd600',
        },
      },
      {
        types: ['string', 'keyword', 'operator'],
        style: {
          color: 'rgb(155, 109, 255)',
        },
      },
      {
        types: ['property', 'tag'],
        style: {
          color: '#ff39a8',
        },
      },
      {
        types: ['function', 'builtin'],
        style: {
          color: 'rgb(0, 190, 255)',
        },
      },
      {
        types: ['regex'],
        style: {
          color: '#ffd700',
        },
      },
      {
        types: ['deleted'],
        style: {
          color: '#ff5555',
        },
      },
      {
        types: ['attr-name'],
        style: {
          color: '#c653ff',
        },
      },
    ],
  },
};
