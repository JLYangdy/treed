
module.exports = {
  'cut': {
    insert: 'ctrl+x',
    normal: 'd d, shift+d, ctrl+x',
    visual: 'd, shift+d, ctrl+x',
  },
  'copy': {
    insert: 'ctrl+c',
    normal: 'y y, shift+y, ctrl+c',
    visual: 'y, shift+y, ctrl+c',
  },
  'paste': {
    insert: 'ctrl+v',
    normal: 'p, ctrl+v',
    visual: 'p, ctrl+v',
  },
  'paste above': {
    normal: 'shift+p, ctrl+shift+v',
  },

  // switch modes
  'visual mode': {
    normal: 'v, shift+v',
  },
  'normal mode': {
    insert: 'escape',
    visual: 'escape',
  },
  // switch to insert mode
  'edit': {
    normal: 'return, a, shift+a, f2',
  },
  'edit start': {
    normal: 'i, shift+i',
  },
  'change': {
    normal: 'c c, shift+c',
    visual: 'c, shift+c',
  },

  'toggle selection edge': {
    visual: 'o, shift+o',
  },

  'create after': {
    normal: 'o',
  },
  'create before': {
    normal: 'shift+o',
  },


  // cursor movement
  'go to first sibling': {
    normal: '[',
    visual: '[',
  },
  'go to last sibling': {
    normal: ']',
    visual: ']',
  },
  'go to bottom': {
    normal: 'shift+g',
  },
  'got to top': {
    normal: 'g g',
  },
  'go up': {
    normal: 'up, k',
  },
  'go down': {
    normal: 'down, j',
  },

  // TODO allow visual mode to span parents/children?
  'go left': {
    normal: 'left, h',
  },
  'go right': {
    normal: 'right, l',
  },
  'go to next sibling': {
    normal: 'alt+j, alt+down',
    visual: 'down, j',
  },
  'go to previous sibling': {
    normal: 'alt+k, alt+up',
    visual: 'up, k',
  },

  // move stuff
  'indent': {
    normal: 'tab, shift+alt+l, shift+alt+right',
    visual: 'tab, shift+alt+l, shift+alt+right',
  },
  'dedent': {
    normal: 'shift+tab, shift+alt+h, shift+alt+left',
    visual: 'shift+tab, shift+alt+h, shift+alt+left',
  },

  'move down': {
    normal: 'shift+alt+j, shift+alt+down',
    visual: 'shift+alt+j, shift+alt+down',
  },
  'move up': {
    normal: 'shift+alt+k, shift+alt+up',
    visual: 'shift+alt+k, shift+alt+up',
  },

  'move to first sibling': {
    normal: 'ctrl+shift+[',
    visual: 'ctrl+shift+[',
  },
  'move to last sibling': {
    normal: 'ctrl+shift+]',
    visual: 'ctrl+shift+]',
  },

}
