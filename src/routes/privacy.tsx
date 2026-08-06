import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/PageShell";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy & Cookie Policy — Written Beyond Belief" },
      {
        name: "description",
        content:
          "How Written Beyond Belief collects, uses and protects your personal information, and how cookies are used on this website.",
      },
      { property: "og:title", content: "Privacy & Cookie Policy — Written Beyond Belief" },
      {
        property: "og:description",
        content: "How your personal information and cookies are handled on this website.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <PageShell title="Privacy & Cookie Policy" intro="Last updated: 28 July 2026">
      <h2>Privacy Policy</h2>
      <p>
        Welcome to Written Beyond Belief. Your privacy is important to us. This Privacy
        Policy explains how your personal information is collected, used and protected
        when you visit this website or contact us.
      </p>

      <h3>Who We Are</h3>
      <p>Written Beyond Belief is operated in the United Kingdom.</p>
      <p>
        If you have any questions about this Privacy Policy or how your personal
        information is handled, please contact:{" "}
        <a href="mailto:Maggie@writtenbeyondbelief.com" className="text-primary">
          Maggie@writtenbeyondbelief.com
        </a>
      </p>

      <h3>Information We Collect</h3>
      <p>Depending on how you interact with the website, we may collect:</p>
      <ul>
        <li>Your name.</li>
        <li>Your email address.</li>
        <li>Your telephone number (if you choose to provide it).</li>
        <li>Any information you include in your enquiry or message.</li>
        <li>
          Technical information such as your IP address, browser type, device
          information and pages visited.
        </li>
        <li>
          Website usage information collected through cookies and Google Analytics
          (where you have given your consent).
        </li>
      </ul>

      <h3>How We Use Your Information</h3>
      <p>We use your information to:</p>
      <ul>
        <li>Respond to your enquiries.</li>
        <li>Arrange and manage healing sessions or yoga services.</li>
        <li>Communicate with you regarding your enquiry.</li>
        <li>Improve the website and user experience.</li>
        <li>Comply with our legal obligations.</li>
      </ul>
      <p>We do not sell or rent your personal information to third parties.</p>

      <h3>Legal Basis for Processing</h3>
      <p>
        Under UK GDPR, we process your personal information on one or more of the
        following legal bases:
      </p>
      <ul>
        <li>Your consent.</li>
        <li>Taking steps at your request before entering into an agreement.</li>
        <li>
          Legitimate interests in operating and improving our website and services.
        </li>
        <li>Compliance with legal obligations.</li>
      </ul>

      <h3>Google Analytics</h3>
      <p>
        We may use Google Analytics to understand how visitors use our website. Google
        Analytics collects information such as pages visited, time spent on the website
        and general device information. Where required by law, Analytics cookies will
        only be used after you have given your consent through our cookie banner.
      </p>

      <h3>Data Sharing</h3>
      <p>
        Your information may be processed by trusted service providers who help us
        operate our website and Google Analytics. These providers process personal
        information in accordance with their own privacy policies and applicable data
        protection law.
      </p>

      <h3>Changes to This Privacy Policy</h3>
      <p>
        This Privacy Policy may be updated from time to time. Any changes will be
        published on this page with the revised "Last updated" date.
      </p>

      <h2>Cookie Policy</h2>
      <p>
        This website uses cookies to ensure it functions correctly and to improve your
        browsing experience.
      </p>

      <h3>What Are Cookies?</h3>
      <p>
        Cookies are small text files stored on your device when you visit a website.
        They help websites remember information about your visit and improve
        performance and functionality.
      </p>

      <h3>Types of Cookies We Use</h3>
      <p>
        <strong>Essential Cookies.</strong> These cookies are necessary for the
        operation of the website. They cannot be disabled through our website because
        they are required for basic functionality.
      </p>
      <p>
        <strong>Analytics Cookies.</strong> With your permission, we use Google
        Analytics to understand how visitors use the website. These cookies help us
        improve the website by collecting anonymous information about visitor activity.
        Analytics cookies will only be placed on your device after you have given your
        consent.
      </p>

      <h3>Managing Cookies</h3>
      <p>
        When you first visit our website, you will be given the option to accept or
        reject non-essential cookies. You can also manage or delete cookies at any time
        through your web browser settings. Please note that disabling essential cookies
        may affect the functionality of the website.
      </p>

      <h3>Third-Party Cookies</h3>
      <p>
        Some cookies may be provided by trusted third-party services, including Google
        Analytics, where enabled.
      </p>

      <h3>Changes to This Cookie Policy</h3>
      <p>
        We may update this Cookie Policy from time to time. Any changes will be
        published on this page with the revised "Last updated" date.
      </p>
      <p>
        If you have any questions about this Cookie Policy, please contact:{" "}
        <a href="mailto:Maggie@writtenbeyondbelief.com" className="text-primary">
          Maggie@writtenbeyondbelief.com
        </a>
      </p>
    </PageShell>
  );
}
