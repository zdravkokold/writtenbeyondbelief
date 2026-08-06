import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Before Your Session — Client Disclaimer & Informed Consent" },
      {
        name: "description",
        content:
          "Important information to read before your healing session with Written Beyond Belief, including consent, medical responsibility and confidentiality.",
      },
      { property: "og:title", content: "Before Your Session — Client Disclaimer" },
      {
        property: "og:description",
        content: "Important information to read before your healing session.",
      },
    ],
  }),
  component: Disclaimer,
});

function Disclaimer() {
  return (
    <PageShell
      title="Before your session"
      intro="Client Disclaimer & Informed Consent · Last updated: 28 July 2026"
    >
      <h3>Welcome</h3>
      <p>
        Thank you for choosing Written Beyond Belief. It is an honour to support you on
        your personal wellbeing journey.
      </p>
      <p>
        Please read the following information carefully before participating in a
        healing session. By booking or attending a session, you confirm that you have
        read, understood and agree to the following.
      </p>

      <h3>Nature of the Sessions</h3>
      <p>
        Healing sessions offered by Written Beyond Belief are complementary wellbeing
        practices intended to support relaxation, self-awareness, personal growth and
        emotional wellbeing.
      </p>
      <p>
        These sessions are not intended to diagnose, treat, cure or prevent any medical
        or psychological condition, nor are they a substitute for professional medical,
        psychiatric or psychological care.
      </p>

      <h3>Medical Responsibility</h3>
      <p>You understand and agree that:</p>
      <ul>
        <li>You are responsible for your own health and wellbeing.</li>
        <li>
          You will consult an appropriately qualified healthcare professional for any
          medical or mental health concerns.
        </li>
        <li>
          You will continue any prescribed medical treatment unless advised otherwise by
          your healthcare provider.
        </li>
        <li>
          If you are pregnant, have a serious medical condition or are receiving
          treatment for a physical or mental health condition, you will inform Written
          Beyond Belief before your session.
        </li>
      </ul>

      <h3>Results</h3>
      <p>
        Every individual is unique. While many clients find healing sessions beneficial,
        no specific outcome or result can be guaranteed.
      </p>

      <h3>Confidentiality</h3>
      <p>
        Your privacy is respected. Information shared during your session will be
        treated confidentially unless disclosure is required by law or where there is a
        serious concern about your safety or the safety of another person.
      </p>

      <h3>Client Responsibility</h3>
      <p>
        Healing is a collaborative process. You remain responsible for your own
        decisions, actions and wellbeing before, during and after your session. Any
        choices you make following a session are entirely your own responsibility.
      </p>

      <h3>Cancellations</h3>
      <p>
        If you are unable to attend your appointment, please provide as much notice as
        possible so that your session may be rearranged. Any cancellation policy will be
        communicated at the time of booking.
      </p>
      <p>
        Refund eligibility is linked to the cancellation policy and is outlined in the
        Refund Policy provided at the time of booking. Please refer to the Refund Policy
        for full details regarding cancellations, rescheduling, and any applicable
        refunds.
      </p>

      <h3>Consent</h3>
      <p>
        By booking or attending a session with Written Beyond Belief, you confirm that:
      </p>
      <ul>
        <li>You have read and understood this Disclaimer and Informed Consent.</li>
        <li>You understand the nature of the services being offered.</li>
        <li>
          You understand that these services are complementary and are not medical
          treatment.
        </li>
        <li>You voluntarily choose to participate.</li>
        <li>
          You are at least 18 years of age, or you have the consent of a parent or legal
          guardian if under 18.
        </li>
      </ul>

      <p>
        If you have any questions before your session, please feel free to contact:{" "}
        <a href="mailto:Maggie@writtenbeyondbelief.com" className="text-primary">
          Maggie@writtenbeyondbelief.com
        </a>
      </p>
      <p>
        Thank you for placing your trust in Written Beyond Belief. I look forward to
        supporting you with compassion, presence and respect.
      </p>
    </PageShell>
  );
}
