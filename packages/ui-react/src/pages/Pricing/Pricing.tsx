import { Check } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useOffers from '@jwp/ott-hooks-react/src/useOffers';
import usePlaylist from '@jwp/ott-hooks-react/src/usePlaylist';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { getOfferPrice } from '@jwp/ott-common/src/utils/offers';

import Button from '../../components/Button/Button';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';

import styles from './Pricing.module.scss';

const PricingComponent = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { subscriptionOffers } = useOffers();
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly');

  // const { isFetching, error, data } = usePlaylist('BYkbUKPm', {}, true, true, 'playlist');

  // const { t } = useTranslation('error');

  // if (isFetching) {
  //   return <Loading />;
  // }

  // if (error || !data) {
  //   return <ErrorPage title={t('playlist_not_found')} />;
  // }

  // if (data.playlist.length === 0) {
  //   return <ErrorPage title={t('empty_shelves_heading')} message={t('empty_shelves_description')} />;
  // }

  return (
    <>
      {' '}
      {/* <Helmet>
        <script id="CookieDeclaration" src="https://consent.cookiebot.com/603d6ef7-9d8b-408a-81cb-0af069643a8e/cd.js" type="text/javascript" async></script>
      </Helmet> */}
      <div className={styles.container}>
        <h1 className={styles.heading}>
          Start your 7-day <span className={styles.italic}>free trial</span> today!
        </h1>
        <h1 className={styles.subHeading}>Watch your favorite concerts anytime, anywhere.</h1>

        <div className={styles.plansContainer}>
          <div
            className={`${styles.planCard} ${selectedPlan === 'monthly' ? styles.selectedPlan : styles.annualPlan}`}
            onClick={() => setSelectedPlan('monthly')}
          >
            <h2 className={styles.planTitle}>Monthly</h2>

            <ul className={styles.featuresList}>
              <li>
                <Check className={styles.checkIcon} />
                <span>Stream on-demand, on any device.</span>
              </li>
              <li>
                <Check className={styles.checkIcon} />
                <span>Cancel anytime during your trial - no charges, no hassle.</span>
              </li>
              <li>
                <Check className={styles.checkIcon} />
                <span>Love it? Keep watching after your free trial for just:</span>
              </li>
            </ul>

            <div className={styles.priceContainer}>
              <span className={styles.price}>
                {(subscriptionOffers && subscriptionOffers?.[0]?.offerCurrency) || ''}
                {subscriptionOffers?.[0]?.customerPriceInclTax || '0.00'}
              </span>
              <span className={styles.period}>/{subscriptionOffers?.[0]?.period || 'month'}</span>
            </div>

            <Link className={selectedPlan === 'monthly' ? styles.monthlyButton : styles.annualButton} to={`${pathname}/?u=create-account`}>
              Get Started
            </Link>
          </div>

          <div
            className={`${styles.planCard} ${selectedPlan === 'annual' ? styles.selectedPlan : styles.annualPlan}`}
            onClick={() => setSelectedPlan('annual')}
          >
            <div className={styles.saveBadge}>Save 16%</div>
            <h2 className={styles.planTitle}>Annual</h2>
            <ul className={styles.featuresList}>
              <li>
                <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
                <span>Stream on-demand, on any device.</span>
              </li>
              <li>
                <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
                <span>Cancel anytime during your trial - no charges, no hassle.</span>
              </li>
              <li>
                <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
                <span>Love it? Keep watching after your free trial for just:</span>
              </li>
            </ul>
            <div className={styles.priceContainer}>
              <span className={styles.price}>
                {(subscriptionOffers && subscriptionOffers?.[1]?.offerCurrency) || ''} {subscriptionOffers?.[1]?.customerPriceInclTax || '0.00'}
              </span>
              <span className={styles.period}>/{(subscriptionOffers && subscriptionOffers?.[1]?.period) || 'year'}</span>
            </div>
            <Link className={selectedPlan === 'annual' ? styles.monthlyButton : styles.annualButton} to={`${pathname}/?u=create-account`}>
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.textBlock}>
          <h1 className={styles.heading} style={{ marginBottom: '3rem' }}>
            Take your concert viewing experience to the next level
          </h1>
          {/* <PlaylistGrid data={data as Playlist} isLoading={isFetching} /> */}

          <ul className={styles.featuresList}>
            <li>
              <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
              <span>BlueFrog+ makes watching your favorite concerts on demand easier than ever.</span>
            </li>
            <li>
              <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
              <span>Enjoy a sleek interface filled with features like pre-built genre playlists and advanced search options.</span>
            </li>
            <li>
              <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
              <span>With over 100 concerts available and new premieres or live streams added weekly, there&apos;s always something new to explore.</span>
            </li>
            <li>
              <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
              <span>
                Each concert is filmed in stunning 4K resolution with multi-tracked sound, performed before an intimate audience of just 100 people, in the
                state-of-the-art{' '}
                <a href="https://bluefrogstudios.ca/" target="_blank" rel="noreferrer" style={{ color: '#36C5F2' }}>
                  Blue Frog Studios.
                </a>
              </span>
            </li>
          </ul>
          <Button label="Get Started" color="primary" to={`${pathname}/?u=create-account`} />
        </div>
      </div>
    </>
  );
};

export default PricingComponent;
