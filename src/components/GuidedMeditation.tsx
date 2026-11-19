import { useState, useRef } from "react";
import { CirclePause, CirclePlay } from "lucide-react";
import { Glyph } from "@/components/Glyph";
import { notifyMeditationDownload } from "@/lib/formspree";
import meditationSrc from "@/assets/inner light meditation.mp3";

const DOWNLOAD_FILENAME = "inner-light-meditation.mp3";

export function GuidedMeditation() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      void audio.play();
    } else {
      audio.pause();
    }
  }

  return (
    <section className="relative px-6 pb-16 md:pb-24" aria-labelledby="guided-meditation-heading">
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <div className="mb-8 flex h-40 w-40 items-center justify-center rounded-[1.35rem] bg-white p-4 shadow-[0_12px_32px_-20px_rgba(60,50,30,0.55)] md:h-44 md:w-44">
          <Glyph
            name="seed-of-life"
            plain
            opacity={1}
            className="h-full w-full object-contain"
          />
        </div>

        <h2
          id="guided-meditation-heading"
          className="font-display text-3xl text-primary md:text-[2.65rem] md:leading-tight"
        >
          A Little Energy Treasure for You
        </h2>

        <p className="font-display mt-3 text-lg text-[var(--gold)] italic md:text-xl">
          A guided meditation to embrace your inner light
        </p>

        <button
          type="button"
          onClick={togglePlayback}
          aria-controls="inner-light-audio"
          aria-pressed={playing}
          className="mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base tracking-wide text-primary-foreground transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none"
        >
          {playing ? (
            <CirclePause className="h-5 w-5" aria-hidden />
          ) : (
            <CirclePlay className="h-5 w-5" aria-hidden />
          )}
          {playing ? "Pause the meditation" : "Listen to the meditation"}
        </button>

        <audio
          id="inner-light-audio"
          ref={audioRef}
          src={meditationSrc}
          controls
          preload="metadata"
          playsInline
          aria-label="Inner Light guided meditation"
          className="mt-4 w-full accent-primary"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)}
        >
          Your browser does not support audio playback. You can download the meditation instead.
        </audio>

        <a
          href={meditationSrc}
          download={DOWNLOAD_FILENAME}
          onClick={notifyMeditationDownload}
          className="mt-6 inline-flex items-center gap-2 text-base text-foreground/80 underline-offset-4 transition-opacity hover:opacity-70 hover:underline focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:outline-none"
        >
          <span aria-hidden>↓</span>
          Download the meditation (MP3)
        </a>

        <div className="mt-8 h-px w-full bg-[var(--gold)]/55" aria-hidden />

        <p className="mt-6 text-sm text-muted-foreground">
          Music lovingly provided by{" "}
          <a
            href="https://www.musicofwisdom.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-[var(--gold)]/70 underline-offset-4 transition-colors hover:text-foreground"
          >
            Music of Wisdom
            <span aria-hidden> ↗</span>
          </a>
        </p>
      </div>
    </section>
  );
}
