import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions and Refund Policy — Written Beyond Belief" },
      {
        name: "description",
        content:
          "The terms governing use of the Written Beyond Belief website and services, together with the refund and cancellation policy.",
      },
      { property: "og:title", content: "Terms & Conditions and Refund Policy" },
      {
        property: "og:description",
        content:
          "Terms governing use of this website and services, plus the refund and cancellation policy.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <PageShell
      title="Terms & Conditions and Refund Policy"
      intro="Last updated: 28 July 2026"
    >
      <h3>1. Introduction</h3>
      <p>
        Welcome to Written Beyond Belief. By accessing and using this website, you agree
        to be bound by these Terms and Conditions. If you do not agree with any part of
        these Terms, please do not use this website.
      </p>

      <h3>2. About Us</h3>
      <p>
        Written Beyond Belief is a UK-based business offering healing sessions,
        yoga-related services and wellbeing information. For any questions regarding
        these Terms, please contact:{" "}
        <a href="mailto:Maggie@writtenbeyondbelief.com" className="text-primary">
          Maggie@writtenbeyondbelief.com
        </a>
      </p>

      <h3>3. Use of This Website</h3>
      <p>
        You agree to use this website only for lawful purposes and in a way that does
        not infringe the rights of others or interfere with their use and enjoyment of
        the website. You must not:
      </p>
      <ul>
        <li>Use this website for any unlawful or fraudulent purpose.</li>
        <li>Attempt to gain unauthorised access to the website or its systems.</li>
        <li>
          Copy, reproduce or distribute website content without prior written
          permission, except for your own personal, non-commercial use.
        </li>
      </ul>

      <h3>4. Intellectual Property</h3>
      <p>
        Unless otherwise stated, all content on this website, including text, images,
        logos, graphics and other materials, is the property of Written Beyond Belief
        and is protected by copyright and other intellectual property laws. You may not
        reproduce, modify or distribute any content without prior written permission.
      </p>

      <h3>5. Healing Sessions and Wellbeing Information</h3>
      <p>
        The information provided on this website is intended for general educational and
        wellbeing purposes only. Healing sessions and yoga services are complementary
        practices designed to support relaxation, personal wellbeing and self-awareness.
        They are not intended to diagnose, treat, cure or prevent any medical or
        psychological condition.
      </p>
      <p>
        Nothing on this website should be considered medical, psychological or
        professional healthcare advice. If you have concerns about your physical or
        mental health, you should seek advice from an appropriately qualified healthcare
        professional. You should never delay seeking medical advice because of
        information found on this website.
      </p>

      <h3>6. Booking Enquiries</h3>
      <p>
        Submitting an enquiry through this website does not create a contract for
        services. Appointments are confirmed only after communication between you and
        Written Beyond Belief.
      </p>
      <p>
        Payment arrangements, cancellation terms and any additional information relating
        to appointments will be provided separately where applicable.
      </p>

      <h3>7. Links to Other Websites</h3>
      <p>
        This website may contain links to third-party websites for your convenience.
        Written Beyond Belief has no control over those websites and accepts no
        responsibility for their content, availability or privacy practices.
      </p>

      <h3>8. Limitation of Liability</h3>
      <p>
        While reasonable efforts are made to ensure that the information on this website
        is accurate and up to date, no guarantees are made regarding its completeness,
        accuracy or reliability. To the fullest extent permitted by law, Written Beyond
        Belief shall not be liable for any loss or damage arising from the use of, or
        inability to use, this website or reliance on its content. Nothing in these
        Terms excludes or limits liability where such exclusion would be unlawful under
        UK law.
      </p>

      <h3>9. Privacy and Cookies</h3>
      <p>
        Your use of this website is also governed by our Privacy Policy and Cookie
        Policy.
      </p>

      <h3>10. Changes to These Terms</h3>
      <p>
        These Terms and Conditions may be updated from time to time. Any changes will be
        published on this page together with the updated revision date.
      </p>

      <h3>11. Governing Law</h3>
      <p>
        These Terms and Conditions are governed by the laws of England and Wales. Any
        disputes arising in connection with these Terms shall be subject to the
        exclusive jurisdiction of the courts of England and Wales.
      </p>

      <h3>12. Contact</h3>
      <p>
        If you have any questions regarding these Terms and Conditions, please contact:{" "}
        <a href="mailto:Maggie@writtenbeyondbelief.com" className="text-primary">
          Maggie@writtenbeyondbelief.com
        </a>
      </p>

      <h2>Refund Policy</h2>
      <p>Payments for booked sessions are non-refundable.</p>
      <p>
        If you need to cancel or reschedule your appointment, please provide at least 48
        hours' notice. With sufficient notice, your session may be rescheduled to a
        mutually convenient time.
      </p>
      <p>
        Cancellations made with less than 48 hours' notice, or failure to attend a
        scheduled session, are non-refundable.
      </p>
      <p>
        If I need to cancel your appointment due to unforeseen circumstances, you will
        be offered either a full refund or the opportunity to reschedule your session.
      </p>
      <p>If you have any questions before booking, please feel free to get in touch.</p>
    </PageShell>
  );
}
