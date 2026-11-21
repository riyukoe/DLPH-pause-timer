// All page element selection, input events, and display formatting live here.
function formatTime(milliseconds) {
  const hundredths = Math.floor(milliseconds / 10);
  const pad = value => String(value).padStart(2, '0');
  return `${pad(Math.floor(hundredths / 360000))}:${pad(Math.floor(hundredths / 6000) % 60)}:${pad(Math.floor(hundredths / 100) % 60)}.${pad(hundredths % 100)}`;
}

export function showStorageWarning() {
  document.querySelector('#storage-warning').hidden = false;
}

export function createTimerView(card, timer, handlers) {
  const nameInput = card.querySelector('input');
  const status = card.querySelector('.status');
  const toggleButton = card.querySelector('.toggle');
  const resetButton = card.querySelector('.reset');
  const timeOutput = card.querySelector('.time');

  nameInput.value = timer.name;
  nameInput.addEventListener('input', () => handlers.onRename(nameInput.value));
  toggleButton.addEventListener('click', handlers.onToggle);
  resetButton.addEventListener('click', handlers.onReset);

  return {
    renderControls() {
      const running = timer.startedAt !== null;
      card.classList.toggle('running', running);
      status.textContent = running ? 'Running' : timer.elapsed > 0 ? 'Paused' : 'Ready';
      toggleButton.textContent = running ? 'Pause' : timer.elapsed > 0 ? 'Resume' : 'Start';
      resetButton.disabled = !running && timer.elapsed === 0;
    },
    renderTime(milliseconds) {
      timeOutput.textContent = formatTime(milliseconds);
    },
  };
}
