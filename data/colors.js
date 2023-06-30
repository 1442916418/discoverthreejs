/**
 * CSS 全部147 个颜色关键字及对应颜色值
 * {@link https://www.zhangxinxu.com/wordpress/2010/08/css3%E4%B8%8B%E7%9A%84147%E4%B8%AA%E9%A2%9C%E8%89%B2%E5%90%8D%E7%A7%B0%E5%8F%8A%E5%AF%B9%E5%BA%94%E9%A2%9C%E8%89%B2%E5%80%BC/}
 */
const COLORS = Object.freeze({
  aliceblue: {
    name: 'aliceblue',
    hex: '#f0f8ff',
    percent: 'rgb(94.1%, 96.9%, 100%)',
    integer: 'rgb(240, 248, 255)'
  },
  antiquewhite: {
    name: 'antiquewhite',
    hex: '#faebd7',
    percent: 'rgb(98%, 92.2%, 84.3%)',
    integer: 'rgb(250, 235, 215)'
  },
  aqua: {
    name: 'aqua',
    hex: '#00ffff',
    percent: 'rgb(0%, 100%, 100%)',
    integer: 'rgb(0, 255, 255)'
  },
  aquamarine: {
    name: 'aquamarine',
    hex: '#7fffd4',
    percent: 'rgb(49.8%, 100%, 83.1%)',
    integer: 'rgb(127, 255, 212)'
  },
  azure: {
    name: 'azure',
    hex: '#f0ffff',
    percent: 'rgb(94.1%, 100%, 100%)',
    integer: 'rgb(240, 255, 255)'
  },
  beige: {
    name: 'beige',
    hex: '#f5f5dc',
    percent: 'rgb(96.1%, 96.1%, 86.3%)',
    integer: 'rgb(245, 245, 220)'
  },
  bisque: {
    name: 'bisque',
    hex: '#ffe4c4',
    percent: 'rgb(100%, 89.4%, 76.9%)',
    integer: 'rgb(255, 228, 196)'
  },
  black: {
    name: 'black',
    hex: '#000000',
    percent: 'rgb(0%, 0%, 0%)',
    integer: 'rgb(0, 0, 0)'
  },
  blanchedalmond: {
    name: 'blanchedalmond',
    hex: '#ffebcd',
    percent: 'rgb(100%, 92.2%, 80.4%)',
    integer: 'rgb(255, 235, 205)'
  },
  blue: {
    name: 'blue',
    hex: '#0000ff',
    percent: 'rgb(0%, 0%, 100%)',
    integer: 'rgb(0, 0, 255)'
  },
  blueviolet: {
    name: 'blueviolet',
    hex: '#8a2be2',
    percent: 'rgb(54.1%, 16.9%, 88.6%)',
    integer: 'rgb(138, 43, 226)'
  },
  brown: {
    name: 'brown',
    hex: '#a52a2a',
    percent: 'rgb(64.7%, 16.5%, 16.5%)',
    integer: 'rgb(165, 42, 42)'
  },
  burlywood: {
    name: 'burlywood',
    hex: '#deb887',
    percent: 'rgb(87.1%, 72.2%, 52.9%)',
    integer: 'rgb(222, 184, 135)'
  },
  cadetblue: {
    name: 'cadetblue',
    hex: '#5f9ea0',
    percent: 'rgb(37.3%, 62%, 62.7%)',
    integer: 'rgb(95, 158, 160)'
  },
  chartreuse: {
    name: 'chartreuse',
    hex: '#7fff00',
    percent: 'rgb(49.8%, 100%, 0%)',
    integer: 'rgb(127, 255, 0)'
  },
  chocolate: {
    name: 'chocolate',
    hex: '#d2691e',
    percent: 'rgb(82.4%, 41.1%, 11.8%)',
    integer: 'rgb(210, 105, 30)'
  },
  coral: {
    name: 'coral',
    hex: '#ff7f50',
    percent: 'rgb(100%, 49.8%, 31.4%)',
    integer: 'rgb(255, 127, 80)'
  },
  cornflowerblue: {
    name: 'cornflowerblue',
    hex: '#6495ed',
    percent: 'rgb(39.2%, 58.4%, 92.9%)',
    integer: 'rgb(100, 149, 237)'
  },
  cornsilk: {
    name: 'cornsilk',
    hex: '#fff8dc',
    percent: 'rgb(100%, 97.3%, 86.3%)',
    integer: 'rgb(255, 248, 220)'
  },
  crimson: {
    name: 'crimson',
    hex: '#dc143c',
    percent: 'rgb(86.3%, 7.8%, 23.5%)',
    integer: 'rgb(220, 20, 60)'
  },
  cyan: {
    name: 'cyan',
    hex: '#00ffff',
    percent: 'rgb(0%, 100%, 100%)',
    integer: 'rgb(0, 255, 255)'
  },
  darkblue: {
    name: 'darkblue',
    hex: '#00008b',
    percent: 'rgb(0%, 0%, 54.5%)',
    integer: 'rgb(0, 0, 139)'
  },
  darkcyan: {
    name: 'darkcyan',
    hex: '#008b8b',
    percent: 'rgb(0%, 54.5%, 54.5%)',
    integer: 'rgb(0, 139, 139)'
  },
  darkgoldenrod: {
    name: 'darkgoldenrod',
    hex: '#b8860b',
    percent: 'rgb(72.2%, 52.5%, 4.3%)',
    integer: 'rgb(184, 134, 11)'
  },
  darkgray: {
    name: 'darkgray',
    hex: '#a9a9a9',
    percent: 'rgb(66.3%, 66.3%, 66.3%)',
    integer: 'rgb(169, 169, 169)'
  },
  darkgreen: {
    name: 'darkgreen',
    hex: '#006400',
    percent: 'rgb(0%, 39.2%, 0%)',
    integer: 'rgb(0, 100, 0)'
  },
  darkgrey: {
    name: 'darkgrey',
    hex: '#a9a9a9',
    percent: 'rgb(66.3%, 66.3%, 66.3%)',
    integer: 'rgb(169, 169, 169)'
  },
  darkkhaki: {
    name: 'darkkhaki',
    hex: '#bdb76b',
    percent: 'rgb(74.1%, 71.8%, 42%)',
    integer: 'rgb(189, 183, 107)'
  },
  darkmagenta: {
    name: 'darkmagenta',
    hex: '#8b008b',
    percent: 'rgb(54.5%, 0%, 54.5%)',
    integer: 'rgb(139, 0, 139)'
  },
  darkolivegreen: {
    name: 'darkolivegreen',
    hex: '#556b2f',
    percent: 'rgb(33.3%, 42%, 18.4%)',
    integer: 'rgb(85, 107, 47)'
  },
  darkorange: {
    name: 'darkorange',
    hex: '#ff8c00',
    percent: 'rgb(100%, 54.9%, 0%)',
    integer: 'rgb(255, 140, 0)'
  },
  darkorchid: {
    name: 'darkorchid',
    hex: '#9932cc',
    percent: 'rgb(60%, 19.6%, 80%)',
    integer: 'rgb(153, 50, 204)'
  },
  darkred: {
    name: 'darkred',
    hex: '#8b0000',
    percent: 'rgb(54.5%, 0%, 0%)',
    integer: 'rgb(139, 0, 0)'
  },
  darksalmon: {
    name: 'darksalmon',
    hex: '#e9967a',
    percent: 'rgb(91.4%, 58.8%, 47.8%)',
    integer: 'rgb(233, 150, 122)'
  },
  darkseagreen: {
    name: 'darkseagreen',
    hex: '#8fbc8f',
    percent: 'rgb(56.1%, 73.7%, 56.1%)',
    integer: 'rgb(143, 188, 143)'
  },
  darkslateblue: {
    name: 'darkslateblue',
    hex: '#483d8b',
    percent: 'rgb(28.2%, 23.9%, 54.5%)',
    integer: 'rgb(72, 61, 139)'
  },
  darkslategray: {
    name: 'darkslategray',
    hex: '#2f4f4f',
    percent: 'rgb(18.4%, 31%, 31%)',
    integer: 'rgb(47, 79, 79)'
  },
  darkslategrey: {
    name: 'darkslategrey',
    hex: '#2f4f4f',
    percent: 'rgb(18.4%, 31%, 31%)',
    integer: 'rgb(47, 79, 79)'
  },
  darkturquoise: {
    name: 'darkturquoise',
    hex: '#00ced1',
    percent: 'rgb(0%, 80.8%, 82%)',
    integer: 'rgb(0, 206, 209)'
  },
  darkviolet: {
    name: 'darkviolet',
    hex: '#9400d3',
    percent: 'rgb(58%, 0%, 82.7%)',
    integer: 'rgb(148, 0, 211)'
  },
  deeppink: {
    name: 'deeppink',
    hex: '#ff1493',
    percent: 'rgb(100%, 7.8%, 57.6%)',
    integer: 'rgb(255, 20, 147)'
  },
  deepskyblue: {
    name: 'deepskyblue',
    hex: '#00bfff',
    percent: 'rgb(0%, 74.9%, 100%)',
    integer: 'rgb(0, 191, 255)'
  },
  dimgray: {
    name: 'dimgray',
    hex: '#696969',
    percent: 'rgb(41.1%, 41.1%, 41.1%)',
    integer: 'rgb(105, 105, 105)'
  },
  dimgrey: {
    name: 'dimgrey',
    hex: '#696969',
    percent: 'rgb(41.1%, 41.1%, 41.1%)',
    integer: 'rgb(105, 105, 105)'
  },
  dodgerblue: {
    name: 'dodgerblue',
    hex: '#1e90ff',
    percent: 'rgb(11.8%, 56.5%, 100%)',
    integer: 'rgb(30, 144, 255)'
  },
  firebrick: {
    name: 'firebrick',
    hex: '#b22222',
    percent: 'rgb(69.8%, 13.3%, 13.3%)',
    integer: 'rgb(178, 34, 34)'
  },
  floralwhite: {
    name: 'floralwhite',
    hex: '#fffaf0',
    percent: 'rgb(100%, 98%, 94.1%)',
    integer: 'rgb(255, 250, 240)'
  },
  forestgreen: {
    name: 'forestgreen',
    hex: '#228b22',
    percent: 'rgb(13.3%, 54.5%, 13.3%)',
    integer: 'rgb(34, 139, 34)'
  },
  fuchsia: {
    name: 'fuchsia',
    hex: '#ff00ff',
    percent: 'rgb(100%, 0%, 100%)',
    integer: 'rgb(255, 0, 255)'
  },
  gainsboro: {
    name: 'gainsboro',
    hex: '#dcdcdc',
    percent: 'rgb(86.3%, 86.3%, 86.3%)',
    integer: 'rgb(220, 220, 220)'
  },
  ghostwhite: {
    name: 'ghostwhite',
    hex: '#f8f8ff',
    percent: 'rgb(97.3%, 97.3%, 100%)',
    integer: 'rgb(248, 248, 255)'
  },
  gold: {
    name: 'gold',
    hex: '#ffd700',
    percent: 'rgb(100%, 84.3%, 0%)',
    integer: 'rgb(255, 215, 0)'
  },
  goldenrod: {
    name: 'goldenrod',
    hex: '#daa520',
    percent: 'rgb(85.5%, 64.7%, 12.5%)',
    integer: 'rgb(218, 165, 32)'
  },
  gray: {
    name: 'gray',
    hex: '#808080',
    percent: 'rgb(50.2%, 50.2%, 50.2%)',
    integer: 'rgb(128, 128, 128)'
  },
  green: {
    name: 'green',
    hex: '#008000',
    percent: 'rgb(0%, 50.2%, 0%)',
    integer: 'rgb(0, 128, 0)'
  },
  greenyellow: {
    name: 'greenyellow',
    hex: '#adff2f',
    percent: 'rgb(67.8%, 100%, 18.4%)',
    integer: 'rgb(173, 255, 47)'
  },
  grey: {
    name: 'grey',
    hex: '#808080',
    percent: 'rgb(50.2%, 50.2%, 50.2%)',
    integer: 'rgb(128, 128, 128)'
  },
  honeydew: {
    name: 'honeydew',
    hex: '#f0fff0',
    percent: 'rgb(94.1%, 100%, 94.1%)',
    integer: 'rgb(240, 255, 240)'
  },
  hotpink: {
    name: 'hotpink',
    hex: '#ff69b4',
    percent: 'rgb(100%, 41.1%, 70.6%)',
    integer: 'rgb(255, 105, 180)'
  },
  indianred: {
    name: 'indianred',
    hex: '#cd5c5c',
    percent: 'rgb(80.4%, 36%, 36%)',
    integer: 'rgb(205, 92, 92)'
  },
  indigo: {
    name: 'indigo',
    hex: '#4b0082',
    percent: 'rgb(29.4%, 0%, 51%)',
    integer: 'rgb(75, 0, 130)'
  },
  ivory: {
    name: 'ivory',
    hex: '#fffff0',
    percent: 'rgb(100%, 100%, 94.1%)',
    integer: 'rgb(255, 255, 240)'
  },
  khaki: {
    name: 'khaki',
    hex: '#f0e68c',
    percent: 'rgb(94.1%, 90.2%, 54.9%)',
    integer: 'rgb(240, 230, 140)'
  },
  lavender: {
    name: 'lavender',
    hex: '#e6e6fa',
    percent: 'rgb(90.2%, 90.2%, 98%)',
    integer: 'rgb(230, 230, 250)'
  },
  lavenderblush: {
    name: 'lavenderblush',
    hex: '#fff0f5',
    percent: 'rgb(100%, 94.1%, 96.1%)',
    integer: 'rgb(255, 240, 245)'
  },
  lawngreen: {
    name: 'lawngreen',
    hex: '#7cfc00',
    percent: 'rgb(48.6%, 98.8%, 0%)',
    integer: 'rgb(124, 252, 0)'
  },
  lemonchiffon: {
    name: 'lemonchiffon',
    hex: '#fffacd',
    percent: 'rgb(100%, 98%, 80.4%)',
    integer: 'rgb(255, 250, 205)'
  },
  lightblue: {
    name: 'lightblue',
    hex: '#add8e6',
    percent: 'rgb(67.8%, 84.7%, 90.2%)',
    integer: 'rgb(173, 216, 230)'
  },
  lightcoral: {
    name: 'lightcoral',
    hex: '#f08080',
    percent: 'rgb(94.1%, 50.2%, 50.2%)',
    integer: 'rgb(240, 128, 128)'
  },
  lightcyan: {
    name: 'lightcyan',
    hex: '#e0ffff',
    percent: 'rgb(87.8%, 100%, 100%)',
    integer: 'rgb(224, 255, 255)'
  },
  lightgoldenrodyellow: {
    name: 'lightgoldenrodyellow',
    hex: '#fafad2',
    percent: 'rgb(98%, 98%, 82.4%)',
    integer: 'rgb(250, 250, 210)'
  },
  lightgray: {
    name: 'lightgray',
    hex: '#d3d3d3',
    percent: 'rgb(82.7%, 82.7%, 82.7%)',
    integer: 'rgb(211, 211, 211)'
  },
  lightgreen: {
    name: 'lightgreen',
    hex: '#90ee90',
    percent: 'rgb(56.5%, 93.3%, 56.5%)',
    integer: 'rgb(144, 238, 144)'
  },
  lightgrey: {
    name: 'lightgrey',
    hex: '#d3d3d3',
    percent: 'rgb(82.7%, 82.7%, 82.7%)',
    integer: 'rgb(211, 211, 211)'
  },
  lightpink: {
    name: 'lightpink',
    hex: '#ffb6c1',
    percent: 'rgb(100%, 71.4%, 75.7%)',
    integer: 'rgb(255, 182, 193)'
  },
  lightsalmon: {
    name: 'lightsalmon',
    hex: '#ffa07a',
    percent: 'rgb(100%, 62.7%, 47.8%)',
    integer: 'rgb(255, 160, 122)'
  },
  lightseagreen: {
    name: 'lightseagreen',
    hex: '#20b2aa',
    percent: 'rgb(12.5%, 69.8%, 66.7%)',
    integer: 'rgb(32, 178, 170)'
  },
  lightskyblue: {
    name: 'lightskyblue',
    hex: '#87cefa',
    percent: 'rgb(52.9%, 80.8%, 98%)',
    integer: 'rgb(135, 206, 250)'
  },
  lightslategray: {
    name: 'lightslategray',
    hex: '#778899',
    percent: 'rgb(46.7%, 53.3%, 60%)',
    integer: 'rgb(119, 136, 153)'
  },
  lightslategrey: {
    name: 'lightslategrey',
    hex: '#778899',
    percent: 'rgb(46.7%, 53.3%, 60%)',
    integer: 'rgb(119, 136, 153)'
  },
  lightsteelblue: {
    name: 'lightsteelblue',
    hex: '#b0c4de',
    percent: 'rgb(69%, 76.9%, 87.1%)',
    integer: 'rgb(176, 196, 222)'
  },
  lightyellow: {
    name: 'lightyellow',
    hex: '#ffffe0',
    percent: 'rgb(100%, 100%, 87.8%)',
    integer: 'rgb(255, 255, 224)'
  },
  lime: {
    name: 'lime',
    hex: '#00ff00',
    percent: 'rgb(0%, 100%, 0%)',
    integer: 'rgb(0, 255, 0)'
  },
  limegreen: {
    name: 'limegreen',
    hex: '#32cd32',
    percent: 'rgb(19.6%, 80.4%, 19.6%)',
    integer: 'rgb(50, 205, 50)'
  },
  linen: {
    name: 'linen',
    hex: '#faf0e6',
    percent: 'rgb(98%, 94.1%, 90.2%)',
    integer: 'rgb(250, 240, 230)'
  },
  magenta: {
    name: 'magenta',
    hex: '#ff00ff',
    percent: 'rgb(100%, 0%, 100%)',
    integer: 'rgb(255, 0, 255)'
  },
  maroon: {
    name: 'maroon',
    hex: '#800000',
    percent: 'rgb(50.2%, 0%, 0%)',
    integer: 'rgb(128, 0, 0)'
  },
  mediumaquamarine: {
    name: 'mediumaquamarine',
    hex: '#66cdaa',
    percent: 'rgb(40%, 80.4%, 66.7%)',
    integer: 'rgb(102, 205, 170)'
  },
  mediumblue: {
    name: 'mediumblue',
    hex: '#0000cd',
    percent: 'rgb(0%, 0%, 80.4%)',
    integer: 'rgb(0, 0, 205)'
  },
  mediumorchid: {
    name: 'mediumorchid',
    hex: '#ba55d3',
    percent: 'rgb(72.9%, 33.3%, 82.7%)',
    integer: 'rgb(186, 85, 211)'
  },
  mediumpurple: {
    name: 'mediumpurple',
    hex: '#9370db',
    percent: 'rgb(57.6%, 43.9%, 85.9%)',
    integer: 'rgb(147, 112, 219)'
  },
  mediumseagreen: {
    name: 'mediumseagreen',
    hex: '#3cb371',
    percent: 'rgb(23.5%, 70.2%, 44.3%)',
    integer: 'rgb(60, 179, 113)'
  },
  mediumslateblue: {
    name: 'mediumslateblue',
    hex: '#7b68ee',
    percent: 'rgb(48.2%, 40.8%, 93.3%)',
    integer: 'rgb(123, 104, 238)'
  },
  mediumspringgreen: {
    name: 'mediumspringgreen',
    hex: '#00fa9a',
    percent: 'rgb(0%, 98%, 60.4%)',
    integer: 'rgb(0, 250, 154)'
  },
  mediumturquoise: {
    name: 'mediumturquoise',
    hex: '#48d1cc',
    percent: 'rgb(28.2%, 82%, 80%)',
    integer: 'rgb(72, 209, 204)'
  },
  mediumvioletred: {
    name: 'mediumvioletred',
    hex: '#c71585',
    percent: 'rgb(78%, 8.2%, 52.2%)',
    integer: 'rgb(199, 21, 133)'
  },
  midnightblue: {
    name: 'midnightblue',
    hex: '#191970',
    percent: 'rgb(9.8%, 9.8%, 43.9%)',
    integer: 'rgb(25, 25, 112)'
  },
  mintcream: {
    name: 'mintcream',
    hex: '#f5fffa',
    percent: 'rgb(96.1%, 100%, 98%)',
    integer: 'rgb(245, 255, 250)'
  },
  mistyrose: {
    name: 'mistyrose',
    hex: '#ffe4e1',
    percent: 'rgb(100%, 89.4%, 88.2%)',
    integer: 'rgb(255, 228, 225)'
  },
  moccasin: {
    name: 'moccasin',
    hex: '#ffe4b5',
    percent: 'rgb(100%, 89.4%, 71%)',
    integer: 'rgb(255, 228, 181)'
  },
  navajowhite: {
    name: 'navajowhite',
    hex: '#ffdead',
    percent: 'rgb(100%, 87.1%, 67.8%)',
    integer: 'rgb(255, 222, 173)'
  },
  navy: {
    name: 'navy',
    hex: '#000080',
    percent: 'rgb(0%, 0%, 50.2%)',
    integer: 'rgb(0, 0, 128)'
  },
  oldlace: {
    name: 'oldlace',
    hex: '#fdf5e6',
    percent: 'rgb(99.2%, 96.1%, 90.2%)',
    integer: 'rgb(253, 245, 230)'
  },
  olive: {
    name: 'olive',
    hex: '#808000',
    percent: 'rgb(50.2%, 50.2%, 0%)',
    integer: 'rgb(128, 128, 0)'
  },
  olivedrab: {
    name: 'olivedrab',
    hex: '#6b8e23',
    percent: 'rgb(42%, 55.7%, 13.7%)',
    integer: 'rgb(107, 142, 35)'
  },
  orange: {
    name: 'orange',
    hex: '#ffa500',
    percent: 'rgb(100%, 64.7%, 0%)',
    integer: 'rgb(255, 165, 0)'
  },
  orangered: {
    name: 'orangered',
    hex: '#ff4500',
    percent: 'rgb(100%, 27.1%, 0%)',
    integer: 'rgb(255, 69, 0)'
  },
  orchid: {
    name: 'orchid',
    hex: '#da70d6',
    percent: 'rgb(85.5%, 43.9%, 83.9%)',
    integer: 'rgb(218, 112, 214)'
  },
  palegoldenrod: {
    name: 'palegoldenrod',
    hex: '#eee8aa',
    percent: 'rgb(93.3%, 91%, 66.7%)',
    integer: 'rgb(238, 232, 170)'
  },
  palegreen: {
    name: 'palegreen',
    hex: '#98fb98',
    percent: 'rgb(59.6%, 98.4%, 59.6%)',
    integer: 'rgb(152, 251, 152)'
  },
  paleturquoise: {
    name: 'paleturquoise',
    hex: '#afeeee',
    percent: 'rgb(68.6%, 93.3%, 93.3%)',
    integer: 'rgb(175, 238, 238)'
  },
  palevioletred: {
    name: 'palevioletred',
    hex: '#db7093',
    percent: 'rgb(85.9%, 43.9%, 57.6%)',
    integer: 'rgb(219, 112, 147)'
  },
  papayawhip: {
    name: 'papayawhip',
    hex: '#ffefd5',
    percent: 'rgb(100%, 93.7%, 83.5%)',
    integer: 'rgb(255, 239, 213)'
  },
  peachpuff: {
    name: 'peachpuff',
    hex: '#ffdab9',
    percent: 'rgb(100%, 85.5%, 72.5%)',
    integer: 'rgb(255, 218, 185)'
  },
  peru: {
    name: 'peru',
    hex: '#cd853f',
    percent: 'rgb(80.4%, 52.2%, 24.7%)',
    integer: 'rgb(205, 133, 63)'
  },
  pink: {
    name: 'pink',
    hex: '#ffc0cb',
    percent: 'rgb(100%, 75.3%, 79.6%)',
    integer: 'rgb(255, 192, 203)'
  },
  plum: {
    name: 'plum',
    hex: '#dda0dd',
    percent: 'rgb(86.7%, 62.7%, 86.7%)',
    integer: 'rgb(221, 160, 221)'
  },
  powderblue: {
    name: 'powderblue',
    hex: '#b0e0e6',
    percent: 'rgb(69%, 87.8%, 90.2%)',
    integer: 'rgb(176, 224, 230)'
  },
  purple: {
    name: 'purple',
    hex: '#800080',
    percent: 'rgb(50.2%, 0%, 50.2%)',
    integer: 'rgb(128, 0, 128)'
  },
  red: {
    name: 'red',
    hex: '#ff0000',
    percent: 'rgb(100%, 0%, 0%)',
    integer: 'rgb(255, 0, 0)'
  },
  rosybrown: {
    name: 'rosybrown',
    hex: '#bc8f8f',
    percent: 'rgb(73.7%, 56.1%, 56.1%)',
    integer: 'rgb(188, 143, 143)'
  },
  royalblue: {
    name: 'royalblue',
    hex: '#4169e1',
    percent: 'rgb(25.5%, 41.1%, 100%)',
    integer: 'rgb(65, 105, 225)'
  },
  saddlebrown: {
    name: 'saddlebrown',
    hex: '#8b4513',
    percent: 'rgb(54.5%, 27.1%, 7.5%)',
    integer: 'rgb(139, 69, 19)'
  },
  salmon: {
    name: 'salmon',
    hex: '#fa8072',
    percent: 'rgb(98%, 50.2%, 44.7%)',
    integer: 'rgb(250, 128, 114)'
  },
  sandybrown: {
    name: 'sandybrown',
    hex: '#f4a460',
    percent: 'rgb(95.7%, 64.3%, 37.6%)',
    integer: 'rgb(244, 164, 96)'
  },
  seagreen: {
    name: 'seagreen',
    hex: '#2e8b57',
    percent: 'rgb(18%, 54.5%, 34.1%)',
    integer: 'rgb(46, 139, 87)'
  },
  seashell: {
    name: 'seashell',
    hex: '#fff5ee',
    percent: 'rgb(100%, 96.1%, 93.3%)',
    integer: 'rgb(255, 245, 238)'
  },
  sienna: {
    name: 'sienna',
    hex: '#a0522d',
    percent: 'rgb(62.7%, 32.2%, 17.6%)',
    integer: 'rgb(160, 82, 45)'
  },
  silver: {
    name: 'silver',
    hex: '#c0c0c0',
    percent: 'rgb(75.3%, 75.3%, 75.3%)',
    integer: 'rgb(192, 192, 192)'
  },
  skyblue: {
    name: 'skyblue',
    hex: '#87ceeb',
    percent: 'rgb(52.9%, 80.8%, 92.2%)',
    integer: 'rgb(135, 206, 235)'
  },
  slateblue: {
    name: 'slateblue',
    hex: '#6a5acd',
    percent: 'rgb(41.6%, 35.3%, 80.4%)',
    integer: 'rgb(106, 90, 205)'
  },
  slategray: {
    name: 'slategray',
    hex: '#708090',
    percent: 'rgb(43.9%, 50.2%, 56.5%)',
    integer: 'rgb(112, 128, 144)'
  },
  slategrey: {
    name: 'slategrey',
    hex: '#708090',
    percent: 'rgb(43.9%, 50.2%, 56.5%)',
    integer: 'rgb(112, 128, 144)'
  },
  snow: {
    name: 'snow',
    hex: '#fffafa',
    percent: 'rgb(100%, 98%, 98%)',
    integer: 'rgb(255, 250, 250)'
  },
  springgreen: {
    name: 'springgreen',
    hex: '#00ff7f',
    percent: 'rgb(0%, 100%, 49.8%)',
    integer: 'rgb(0, 255, 127)'
  },
  steelblue: {
    name: 'steelblue',
    hex: '#4682b4',
    percent: 'rgb(27.5%, 51%, 70.6%)',
    integer: 'rgb(70, 130, 180)'
  },
  tan: {
    name: 'tan',
    hex: '#d2b48c',
    percent: 'rgb(82.4%, 70.6%, 54.9%)',
    integer: 'rgb(210, 180, 140)'
  },
  teal: {
    name: 'teal',
    hex: '#008080',
    percent: 'rgb(0%, 50.2%, 50.2%)',
    integer: 'rgb(0, 128, 128)'
  },
  thistle: {
    name: 'thistle',
    hex: '#d8bfd8',
    percent: 'rgb(84.7%, 74.9%, 84.7%)',
    integer: 'rgb(216, 191, 216)'
  },
  tomato: {
    name: 'tomato',
    hex: '#ff6347',
    percent: 'rgb(100%, 38.8%%, 27.8%)',
    integer: 'rgb(255, 99, 71)'
  },
  turquoise: {
    name: 'turquoise',
    hex: '#40e0d0',
    percent: 'rgb(25.1%, 87.7%, 81.6%)',
    integer: 'rgb(64, 224, 208)'
  },
  violet: {
    name: 'violet',
    hex: '#ee82ee',
    percent: 'rgb(93.3%, 51%, 93.3%)',
    integer: 'rgb(238, 130, 238)'
  },
  wheat: {
    name: 'wheat',
    hex: '#f5deb3',
    percent: 'rgb(96.1%, 87.1%, 70.2%)',
    integer: 'rgb(245, 222, 179)'
  },
  white: {
    name: 'white',
    hex: '#ffffff',
    percent: 'rgb(100%, 100%, 100%)',
    integer: 'rgb(255, 255, 255)'
  },
  whitesmoke: {
    name: 'whitesmoke',
    hex: '#f5f5f5',
    percent: 'rgb(96.1%, 96.1%, 96.1%)',
    integer: 'rgb(245, 245, 245)'
  },
  yellow: {
    name: 'yellow',
    hex: '#ffff00',
    percent: 'rgb(100%, 100%, 0%)',
    integer: 'rgb(255, 255, 0)'
  },
  yellowgreen: {
    name: 'yellowgreen',
    hex: '#9acd32',
    percent: 'rgb(60.4%, 80.4%, 19.6%)',
    integer: 'rgb(154, 205, 50)'
  }
})
