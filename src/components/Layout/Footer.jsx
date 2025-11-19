import Navigation from "./Navigation"

function Footer() {
  return (
    <>
      <footer className="footer">

        {/* LEFT SIDE — BADGE */}
        <div
          className="footer-badge"
          dangerouslySetInnerHTML={{
            __html: `
<blockquote class="badgr-badge" style="font-family: Helvetica, Roboto, 'Segoe UI', Calibri, sans-serif; margin: 0;">
  <a href="https://badges.parchment.com/public/assertions/cHTluLnRReCBj_tsny_BNA">
    <img width="120" height="120" src="https://badges.parchment.com/public/assertions/cHTluLnRReCBj_tsny_BNA/image">
  </a>

  <p style="margin: 4px 0; font-size: 14px; font-weight: 600;">
    UCF SplitStack Software Development Program: Frontend Track
  </p>

  <p style="margin: 0; font-size: 12px;">
    <strong>Awarded:</strong> 11/19/2025
  </p>

  <p style="margin: 0; font-size: 12px;">
    <strong>Awarded To:</strong> Francis Spitzock
  </p>

  <p style="margin: 8px 0 0 0;">
    <a target="_blank"
      href="https://badgecheck.io?url=https%3A%2F%2Fbadges.parchment.com%2Fpublic%2Fassertions%2FcHTluLnRReCBj_tsny_BNA&amp;identity__email=fspitzock%40yahoo.com"
      style="font-size: 12px; font-weight: bold; border: 1px solid black; padding: 4px 10px; border-radius: 4px; text-decoration: none; color: black;">
      VERIFY
    </a>
  </p>
</blockquote>
            `,
          }}
        ></div>

        {/* RIGHT SIDE CONTENT */}
        <div className="footer-center">

          <p>Frank Spitzock Portfolio</p>

          <p>Quick Links</p>
          <div className="navFoot">
            <Navigation />
          </div>

          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Frank Spitzock. All rights reserved.
          </p>

        </div>

        {/* Badge Script */}
        <script async src="https://ucf.badges.parchment.com/assets/widgets.bundle.js"></script>

      </footer>
    </>
  );
}

export default Footer;
