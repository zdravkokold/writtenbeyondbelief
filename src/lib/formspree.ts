/**
 * Public Formspree form already used by the contact page.
 * The form id is not a secret — Formspree forms are submitted from the browser.
 */
export const FORMSPREE_FORM_ID = "mljrbqol";

export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

/** Tell Maggie someone downloaded the meditation, without blocking the download. */
export function notifyMeditationDownload() {
  const downloadedAt = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "full",
    timeStyle: "long",
    timeZone: "Europe/London",
  }).format(new Date());

  void fetch(FORMSPREE_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      _subject: "Meditation download",
      event: "Meditation download",
      file: "Inner Light Meditation",
      date: downloadedAt,
      message: `Event: Meditation download\nFile: Inner Light Meditation\nDate and time: ${downloadedAt}`,
    }),
    keepalive: true,
  }).catch(() => {
    // The MP3 should still download if the notification cannot be sent.
  });
}
