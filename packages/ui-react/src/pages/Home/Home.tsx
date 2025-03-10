import { shallow } from '@jwp/ott-common/src/utils/compare';
import type { Content } from '@jwp/ott-common/types/config';
import { useConfigStore } from '@jwp/ott-common/src/stores/ConfigStore';
import { useTranslation } from 'react-i18next';

import ShelfList from '../../containers/ShelfList/ShelfList';
import Button from '../../components/Button/Button';

import styles from './Home.module.scss';
const Home = () => {
  const { config } = useConfigStore(({ config, accessModel }) => ({ config, accessModel }), shallow);
  const content: Content[] = config?.content;
  const { t } = useTranslation('common');

  return (
    <>
      <h1 className="hideUntilFocus">{t('home')}</h1>

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
              Sign Up Now
              <Button label="Sign Up" color="primary" to="/?u=create-account" />
            </div>
          </div>
        </div>
      </section>

      <ShelfList rows={content} />
    </>
  );
};

export default Home;
