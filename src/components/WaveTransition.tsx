/**
 * Smooth wave sitting on the bottom of the hero photo.
 * Simple single-wave, no gradient haze — clean and proven.
 */
export function WaveTransition() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 leading-[0]" aria-hidden>
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="block h-[5.5rem] w-full md:h-32 lg:h-36"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,64 C180,108 360,20 540,56 C720,92 900,16 1080,60 C1260,104 1380,36 1440,52 L1440,120 L0,120 Z"
          fill="var(--background)"
        />
      </svg>
    </div>
  );
}
