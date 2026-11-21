// Timer state and operations. No browser or page dependencies.
export function createStopwatch(index) {
  return { name: `Stopwatch ${index + 1}`, elapsed: 0, startedAt: null };
}

export function getElapsedTime(timer, now = Date.now()) {
  return timer.elapsed + (timer.startedAt === null ? 0 : Math.max(0, now - timer.startedAt));
}

export function toggleStopwatch(timer, now = Date.now()) {
  if (timer.startedAt === null) {
    timer.startedAt = now;
  } else {
    timer.elapsed = getElapsedTime(timer, now);
    timer.startedAt = null;
  }
}

export function resetStopwatch(timer) {
  timer.elapsed = 0;
  timer.startedAt = null;
}
