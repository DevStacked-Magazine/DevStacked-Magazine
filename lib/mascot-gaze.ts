export type PointerPoint = {
  x: number;
  y: number;
};

export type MascotBounds = {
  left: number;
  top: number;
  width: number;
  height: number;
};

export type GazeTarget = {
  x: number;
  y: number;
  rotate: number;
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export function gazeFromPointer(
  pointer: PointerPoint,
  bounds: MascotBounds,
  maxOffset = 18,
  maxRotation = 4,
): GazeTarget {
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;
  const halfWidth = Math.max(bounds.width / 2, 1);
  const halfHeight = Math.max(bounds.height / 2, 1);
  const normalizedX = clamp((pointer.x - centerX) / halfWidth, -1, 1);
  const normalizedY = clamp((pointer.y - centerY) / halfHeight, -1, 1);

  return {
    x: normalizedX * maxOffset,
    y: normalizedY * maxOffset,
    rotate: normalizedX * maxRotation,
  };
}
