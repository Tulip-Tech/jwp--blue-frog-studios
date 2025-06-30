import { shallow } from '@jwp/ott-common/src/utils/compare';
import type { Content } from '@jwp/ott-common/types/config';
import { useConfigStore } from '@jwp/ott-common/src/stores/ConfigStore';
import { useTranslation } from 'react-i18next';
import { useAccountStore } from '@jwp/ott-common/src/stores/AccountStore';
import { Helmet } from 'react-helmet';
import React from 'react';

import ShelfList from '../../containers/ShelfList/ShelfList';
import Button from '../../components/Button/Button';

import styles from './Home.module.scss';

const Home = () => {
  const { config } = useConfigStore(({ config, accessModel }) => ({ config, accessModel }), shallow);
  const content: Content[] = config?.content;
  const { t } = useTranslation('common');
  const isLoggedIn = useAccountStore(({ user }) => !!user);

  const pageTitle = 'Stream 4K Concerts Online | Blue Frog Studios';
  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="twitter:title" content={pageTitle} />
      </Helmet>

      <h1 className="hideUntilFocus">{t('home')}</h1>

      {!isLoggedIn && (
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h2>Watch Exclusive Full Concerts</h2>
              <h3>Free for 7 Days</h3>
              <p className={styles.tagline}>
                <strong>World-class concerts - stream anywhere, anytime.</strong>
              </p>
              <ul className={styles.featuresList}>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <strong>New shows every week. &nbsp;</strong>
                  <span>From rising stars to music legends.</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <strong>Full-length concerts.&nbsp;</strong>
                  <span>No clips. No filters. Just real performances.</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <strong> Risk-free trial.&nbsp;</strong>
                  <span>7 days free. Cancel anytime - no commitment.</span>
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  <strong>Shot in 4K with multi-track audio.&nbsp;</strong>
                  <span>Studio-quality sound and visuals.</span>
                </li>
              </ul>

              <div className={styles.signupForm}>
                <Button label="Start Your Free 7-Day Trial" color="primary" to="/pricing" />
              </div>
              <div style={{ marginTop: '2rem' }}>
                <span style={{ marginRight: '-.7rem' }}>Already a member? </span>
                <Button label="Sign in here." color="primary" variant="text" to="/?u=login" />
              </div>
            </div>
          </div>
        </section>
      )}

      <ShelfList rows={content} />
    </>
  );
};

export default Home;
