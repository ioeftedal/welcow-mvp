
export interface LyingTimeAndCollision {
  id: number;
  lie_t: number;
  collision: string;
  herdId: string;
}

export function defaultLyingTimeAndCollision(): LyingTimeAndCollision {
  return {
    id: 0, // Default value for auto-incremented ID
    lie_t: 0.0,
    collision: '',
    herdId: ''
  };
}
