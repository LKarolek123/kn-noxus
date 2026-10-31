// Logo złożone z pikseli z poziomymi pasami gradientu (w duchu banera Omarchy).
const FONT = {
  N: ['#....#', '##...#', '###..#', '#.##.#', '#..###', '#...##', '#....#'],
  O: ['.####.', '##..##', '#....#', '#....#', '#....#', '##..##', '.####.'],
  X: ['#....#', '##..##', '.####.', '..##..', '.####.', '##..##', '#....#'],
  U: ['#....#', '#....#', '#....#', '#....#', '#....#', '##..##', '.####.'],
  S: ['.#####', '##....', '##....', '.####.', '....##', '....##', '#####.'],
  K: ['#...##', '#..##.', '#.##..', '###...', '#.##..', '#..##.', '#...##'],
  ' ': ['...', '...', '...', '...', '...', '...', '...'],
}
const ROWS = ['#fcd9c8', '#f8c0a6', '#f2a587', '#e08a6b', '#b8664c', '#8a4b38', '#5c3428']

export default function PixelLogo({ text = 'NOXUS', className = '' }) {
  const rects = []
  let x = 0
  for (const ch of text) {
    const g = FONT[ch] || FONT[' ']
    g.forEach((row, y) =>
      [...row].forEach((c, dx) => {
        if (c === '#') rects.push(<rect key={`${x + dx}-${y}`} x={x + dx} y={y} width="0.92" height="0.92" fill={ROWS[y]} />)
      }),
    )
    x += g[0].length + 1
  }
  return (
    <svg
      className={`pixel-logo ${className}`}
      viewBox={`0 0 ${x - 1} 7`}
      shapeRendering="crispEdges"
      role="img"
      aria-label={text}
    >
      {rects}
    </svg>
  )
}
