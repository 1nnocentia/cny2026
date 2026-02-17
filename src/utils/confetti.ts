import confetti from 'canvas-confetti';

export const triggerSlytherinConfetti = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  const colors = ['#44624A', '#AAAAAA', '#D32F2F', '#FFD700'];

  (function frame() {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};