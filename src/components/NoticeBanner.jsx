import { siteConfig } from '../data/siteConfig';
import './NoticeBanner.css';

export default function NoticeBanner() {
  return (
    <aside className="notice" role="note">
      <strong>Notice:</strong> {siteConfig.notice}
    </aside>
  );
}
