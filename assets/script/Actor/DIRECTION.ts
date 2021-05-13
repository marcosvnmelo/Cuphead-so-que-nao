export const DIRECTIONS = {
  UP: { x: 0, y: 1 },
  DOWN: { x: 0, y: -1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
} as const;

interface DIRECTION {
  x: number;
  y: number;
}

export default DIRECTION;
