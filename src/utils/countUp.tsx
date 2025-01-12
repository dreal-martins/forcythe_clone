export const countUp = (
  start: number,
  end: number,
  duration: number,
  callback: (value: number) => void
) => {
  const range = end - start;
  let startTime: number | null = null;

  const step = (timestamp: number) => {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    const value = Math.floor(progress * range + start);
    callback(value);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};
