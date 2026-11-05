import { siteConfig } from '../data/siteConfig';
import './Footer.css';

export default function Footer() {
  return (
    <>
      {/* <div className="footer-art" aria-hidden="true"><div /></div> */}
      <footer className="footer">
        <div className="container footer__inner">
          <strong>{siteConfig.siteName}</strong>
          <span>{siteConfig.handbookTitle}</span>
          <a href={siteConfig.discordUrl} target="_blank" rel="noopener noreferrer">Join our Discord</a>
          <span>Follow the rules and respect the community. A fair server is built by every player.</span>
          <span>© {siteConfig.copyrightYear} {siteConfig.siteName}. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
