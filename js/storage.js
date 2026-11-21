import { createStopwatch } from './stopwatch.js';

// Keep the same key and data shape so existing saved timers still load.
const STORAGE_KEY = 'two-stopwatches-v1';
const TIMER_COUNT = 2;

function isValidTimer(timer) {
  return timer && typeof timer.name === 'string' &&
    Number.isFinite(timer.elapsed) && timer.elapsed >= 0 &&
    (timer.startedAt === null ||
      (Number.isFinite(timer.startedAt) && timer.startedAt >= 0));
}

export function loadTimers(onError) {
  const defaults = Array.from({ length: TIMER_COUNT }, (_, index) => createStopwatch(index));
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!Array.isArray(saved) || saved.length !== TIMER_COUNT) return defaults;
    return saved.map((timer, index) => isValidTimer(timer)
      ? { name: timer.name.slice(0, 60), elapsed: timer.elapsed, startedAt: timer.startedAt }
      : defaults[index]);
  } catch {
    onError();
    return defaults;
  }
}

export function saveTimers(timers, onError) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timers));
  } catch {
    onError();
  }
}
