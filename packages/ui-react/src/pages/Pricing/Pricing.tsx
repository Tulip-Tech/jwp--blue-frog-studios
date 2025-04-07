import { Check } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useOffers from '@jwp/ott-hooks-react/src/useOffers';
import usePlaylist from '@jwp/ott-hooks-react/src/usePlaylist';
import { useTranslation } from 'react-i18next';
import type { Playlist } from 'packages/common/types/playlist';
import { Helmet } from 'react-helmet';

import Button from '../../components/Button/Button';
import Loading from '../Loading/Loading';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import PlaylistGrid from '../ScreenRouting/playlistScreens/PlaylistGrid/PlaylistGrid';

import styles from './Pricing.module.scss';

export const getCurrencySign = (offerCurrency: string): string => {
  switch (offerCurrency.trim().toUpperCase()) {
    case 'USD':
      return '$';
    case 'EUR':
      return '€';
    default:
      return '';
  }
};

const PricingComponent = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { subscriptionOffers } = useOffers();
  const { monthlySubscription, annualSubscription } = useMemo(() => {
    return {
      monthlySubscription: subscriptionOffers?.find((s) => s.period === 'month'),
      annualSubscription: subscriptionOffers?.find((s) => s.period === 'year'),
    };
  }, [subscriptionOffers]);

  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'annual'>('monthly');

  const { isFetching, error, data } = usePlaylist('zXN6g4vD', {}, true, true, 'playlist');

  const { t } = useTranslation(['error', 'common']);

  if (isFetching) {
    return <Loading />;
  }

  if (error || !data) {
    return <ErrorPage title={t('playlist_not_found')} />;
  }

  if (data.playlist.length === 0) {
    return <ErrorPage title={t('empty_shelves_heading')} message={t('empty_shelves_description')} />;
  }

  const pageTitle = 'Subscription Pricing - ' + t('common:default_site_name');

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta property="og:title" content={pageTitle} />
        <meta name="twitter:title" content={pageTitle} />
      </Helmet>
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
                <span className={styles.price}></span>
                {monthlySubscription?.offerCurrency || ''} {getCurrencySign(monthlySubscription?.offerCurrency || '')}
                {monthlySubscription?.customerPriceInclTax || '0.00'}
              </span>
              <span className={styles.period}>/{monthlySubscription?.period || 'month'}</span>
            </div>

            <Link className={selectedPlan === 'monthly' ? styles.monthlyButton : styles.annualButton} to={`${pathname}/?u=create-account`}>
              Get Started
            </Link>
          </div>

          <div
            className={`${styles.planCard} ${selectedPlan === 'annual' ? styles.selectedPlan : styles.annualPlan}`}
            onClick={() => setSelectedPlan('annual')}
          >
            <div className={styles.saveBadge}>Best Deal</div>
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
                {annualSubscription?.offerCurrency || ''} {getCurrencySign(annualSubscription?.offerCurrency || '')}
                {annualSubscription?.customerPriceInclTax || '0.00'}
              </span>
              <span className={styles.period}>/{annualSubscription?.period || 'year'}</span>
            </div>
            <Link className={selectedPlan === 'annual' ? styles.monthlyButton : styles.annualButton} to={`${pathname}/?u=create-account`}>
              Get Started
            </Link>
          </div>
        </div>
        <div className={styles.textBlock}>
          <div className={styles.content}>
            <h1 className={styles.heading} style={{ margin: '2rem 0', fontSize: '2.7rem' }}>
              Take your concert viewing experience to the next level
            </h1>
            <div style={{ marginBottom: '0.5rem' }}>
              <PlaylistGrid
                data={
                  {
                    ...data,
                    customPage: true,
                  } as Playlist
                }
                isLoading={isFetching}
              />
            </div>

            <ul className={styles.featuresList}>
              <li>
                <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
                <span>
                  <strong>Filmed in stunning 4K video</strong> with our award-winning recording studio sound.
                </span>
              </li>
              <li>
                <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
                <span>
                  <strong>
                    Recorded live at{' '}
                    <a
                      href="https://bluefrogstudios.ca/?utm_source=bluefrogplus&utm_medium=referral&utm_campaign=pricing-page"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Blue Frog Studios
                    </a>{' '}
                  </strong>{' '}
                  in front of an intimate 100-person audience.
                </span>
              </li>
              <li>
                <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
                <span>
                  <strong>Stream on demand anytime</strong> with a clean, easy-to-use interface.
                </span>
              </li>
              <li>
                <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
                <span>
                  <strong>Browse by genre</strong> with curated playlists and advanced searching.
                </span>
              </li>
              <li>
                <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
                <span>
                  <strong>100+ concerts available</strong> with new live streams and premieres added every week.
                </span>
              </li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'start', padding: '0 35px' }}>
              <Button label="Get Started" color="primary" to={`${pathname}/?u=create-account`} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingComponent;
