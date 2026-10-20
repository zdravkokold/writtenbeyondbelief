import { useEffect, useState } from "react";
import { X } from "lucide-react";

export type CampaignModalConfig = {
  /** A unique name makes the dismissal setting independent per campaign. */
  id: string;
  image: string;
  imageAlt: string;
  startsAt: string;
  endsAt: string;
};

function isCampaignActive({ startsAt, endsAt }: CampaignModalConfig, now = Date.now()) {
  return now >= new Date(startsAt).getTime() && now < new Date(endsAt).getTime();
}

/**
 * Time-bound promotional modal. To reuse it, pass a new image and date range.
 * It intentionally starts hidden during SSR and decides in the browser so an
 * expired campaign cannot appear after its configured end time.
 */
export function CampaignModal({ campaign }: { campaign: CampaignModalConfig }) {
  const [isOpen, setIsOpen] = useState(false);
  const storageKey = `wbb-campaign-dismissed:${campaign.id}`;

  useEffect(() => {
    const updateVisibility = () => {
      const dismissed = window.localStorage.getItem(storageKey) === "true";
      setIsOpen(isCampaignActive(campaign) && !dismissed);
    };

    updateVisibility();
    const timeout = window.setTimeout(
      updateVisibility,
      Math.max(0, new Date(campaign.endsAt).getTime() - Date.now()),
    );
    return () => window.clearTimeout(timeout);
  }, [campaign, storageKey]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  const dismiss = () => {
    window.localStorage.setItem(storageKey, "true");
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[color:rgba(28,22,37,0.74)] p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Free online introductory sessions"
    >
      <div className="relative max-h-[calc(100svh-2rem)] w-full max-w-md overflow-y-auto rounded-[1.25rem] bg-[var(--background)] shadow-[0_25px_80px_rgba(12,8,19,0.5)] sm:max-w-lg md:max-w-xl">
        <button
          type="button"
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--background)]/95 text-[var(--brand-purple)] shadow-md transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[var(--gold)] focus-visible:outline-none"
          aria-label="Close announcement"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>

        <img src={campaign.image} alt={campaign.imageAlt} className="block h-auto w-full" />
      </div>
    </div>
  );
}
