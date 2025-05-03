import React, { useState } from 'react';
import { Facebook, Instagram, Loader, Twitter, Youtube } from 'lucide-react';
import { useConfigStore } from '@jwp/ott-common/src/stores/ConfigStore';
import { shallow } from '@jwp/ott-common/src/utils/compare';

import Link from '../Link/Link';

import styles from './Footer.module.scss';
import CustomPopover from './Popover';

type Props = {
  text: string;
};

const Footer: React.FC<Props> = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState<boolean | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append('EMAIL', email);
    formData.append('tags', '21');

    try {
      await fetch('https://bluefrogstudios.us5.list-manage.com/subscribe/post?u=db6aa24436dd305543368e54b&id=5e457a6032&f_id=00d4ede0f0', {
        method: 'POST',
        mode: 'no-cors',
        body: formData,
      });
      setIsSuccess(true);
      setMessage('🎉 Successfully subscribed!');
      setEmail('');
      setIsPopoverOpen(true);
      setTimeout(() => {
        setIsPopoverOpen(false);
        setTimeout(() => setIsSuccess(null), 300);
      }, 5000);
    } catch (error) {
      setIsSuccess(false);
      setMessage('❌ Subscription failed. Please try again.');
      setIsPopoverOpen(true);
    } finally {
      setLoading(false);

      setTimeout(() => {
        setIsPopoverOpen(false);
        setTimeout(() => setIsSuccess(null), 300);
      }, 5000);
    }
  };

  const { config } = useConfigStore(
    ({ config, accessModel, supportedLanguages }) => ({
      config,
      accessModel,
      supportedLanguages,
    }),
    shallow,
  );
  const { assets } = config;
  const banner = assets.banner || '';

  return (
    <div style={{ position: 'relative' }}>
      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <h2 className={styles.heading}>GET ON THE VIP LIST!</h2>
          <p className={styles.description}>Be the first to be notified about upcoming shows, live streams, concerts on-demand, and exclusive offers.</p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <input
              type="email"
              name="EMAIL"
              className={styles.input}
              placeholder="email@example.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className={styles.button}>
              {loading ? <Loader className={styles.loader} size={20} /> : 'Subscribe'}
            </button>
          </form>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>MENU</h3>
            <ul className={styles.menuList}>
              <li>
                <Link target="_blank" href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link target="_blank" href="/p/2hxmUxJ9/upcoming">
                  Upcoming
                </Link>
              </li>
              <li>
                <Link target="_blank" href="/p/EAkmWTzM/all-concerts">
                  All Concerts
                </Link>
              </li>
              <li>
                <Link target="_blank" href="/p/BYkbUKPm/free-clips">
                  Free Clips
                </Link>
              </li>
              <li>
                <Link target="_blank" href="/pricing">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="https://bluefrogstudios.ca/" target="_blank">
                  Blue Frog Studios
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" target="_blank">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-use" target="_blank">
                  Terms Of Use
                </Link>
              </li>

              <li>
                <Link href="https://bluefrogstudios.ca/pages/streaming-help" target="_blank">
                  Add Support
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>CONTACT</h3>
            <div className={styles.address}>
              <p>1328 Johnson Road</p>
              <p>White Rock, British Columbia</p>
              <p>V4B 3Z2 Canada</p>
            </div>
            <Link href="https://bluefrogstudios.ca" target="_blank">
              <img src="/images/bfs-logo.png" alt="Bluefrog Studios Logo" width={'auto'} height="auto" />
            </Link>
          </div>

          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>SOCIAL</h3>
            <div className={styles.socialIcons}>
              <Link target="_blank" href="https://www.facebook.com/BlueFrogLive" className={styles.socialIcon}>
                <Facebook size={18} />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/bluefrogstudios" className={styles.socialIcon}>
                <Instagram size={18} />
              </Link>
              <Link target="_blank" href="https://x.com/bluefroglive" className={styles.socialIcon}>
                <Twitter size={18} />
              </Link>
              <Link target="_blank" href="https://www.youtube.com/@bluefrogstudios" className={styles.socialIcon}>
                <Youtube size={18} />
              </Link>
            </div>
            {/* <button className={styles.followButton}>
              <span className={styles.heartIcon}>
                <Heart size={14} />
              </span>
              Follow on shop
            </button> */}
          </div>

          <div className={styles.logoSection}>
            <Link className={styles.logo} href="/">
              <img src={banner} alt="BLUEFROG+ Logo" width={'280px'} height={'auto'} />
            </Link>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.text}>© {new Date().getFullYear()}, Blue Frog Studios / BlueFrog+</div>
          <img src={'/images/Canada_White.png'} alt="BLUEFROG+ Logo" width={'120px'} height={'auto'} />
        </div>
      </footer>
      {isPopoverOpen && <CustomPopover message={message} isSuccess={isSuccess} onClose={() => setIsPopoverOpen(false)} />}
    </div>
  );
};

export default Footer;
