import { shallow } from '@jwp/ott-common/src/utils/compare';
import type { Content } from '@jwp/ott-common/types/config';
import { useConfigStore } from '@jwp/ott-common/src/stores/ConfigStore';
import { useTranslation } from 'react-i18next';
import { useAccountStore } from '@jwp/ott-common/src/stores/AccountStore';

import ShelfList from '../../containers/ShelfList/ShelfList';
import Button from '../../components/Button/Button';

import styles from './Home.module.scss';

const Home = () => {
  const { config } = useConfigStore(({ config, accessModel }) => ({ config, accessModel }), shallow);
  const content: Content[] = config?.content;
  const { t } = useTranslation('common');
  const isLoggedIn = useAccountStore(({ user }) => !!user);

  return (
    <>
      <h1 className="hideUntilFocus">{t('home')}</h1>

      {!isLoggedIn && (
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h2>Watch Your Favorite Concerts</h2>
              <h3>On Demand</h3>
              <p className={styles.tagline}>Great music lives here!</p>
              <ul className={styles.featuresList}>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  Exclusive concerts recorded live in 4K at Blue Frog Studios
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  Watch Live Streams and Premiers on any device.
                </li>
                <li>
                  <span className={styles.checkIcon}>✓</span>
                  Sign up to start your risk-free trial today. Cancel anytime.
                </li>
              </ul>
              <div className={styles.signupForm}>
                <Button label="Sign Up Now" color="primary" to="/pricing" />
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
