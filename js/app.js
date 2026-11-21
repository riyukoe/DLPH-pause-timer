import { getElapsedTime, toggleStopwatch, resetStopwatch } from './stopwatch.js';
import { loadTimers, saveTimers } from './storage.js';
import { createTimerView, showStorageWarning } from './view.js';

// The entry point connects state, persistence, and page controls.
const timers = loadTimers(showStorageWarning);
const cards = [...document.querySelectorAll('.timer')];
const save = () => saveTimers(timers, showStorageWarning);

const views = cards.map((card, index) => {
  const timer = timers[index];
  const view = createTimerView(card, timer, {
    onRename(name) {
      timer.name = name;
      save();
    },
    onToggle() {
      toggleStopwatch(timer);
      save();
      update();
    },
    onReset() {
      resetStopwatch(timer);
      save();
      update();
    },
  });

  function update() {
    view.renderControls();
    view.renderTime(getElapsedTime(timer));
  }

  update();
  return view;
});

function render() {
  const now = Date.now();
  views.forEach((view, index) => view.renderTime(getElapsedTime(timers[index], now)));
  requestAnimationFrame(render);
}

render();
