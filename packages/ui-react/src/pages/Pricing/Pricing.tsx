'use client';

import { Check } from 'lucide-react';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useOffers from '@jwp/ott-hooks-react/src/useOffers';

import Button from '../../components/Button/Button';

import styles from './Pricing.module.scss';

const PricingComponent = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const { subscriptionOffers } = useOffers();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>
        Choose a plan to begin your <span className={styles.italic}>free trial</span>
        <br />
        and start watching.
      </h1>

      <div className={styles.plansContainer}>
        <div className={`${styles.planCard}`}>
          <h2 className={styles.planTitle}>Monthly</h2>

          <ul className={styles.featuresList}>
            <li>
              <Check className={styles.checkIcon} />
              <span>Stream exclusive concerts from the comfort of your home. Watch on your favorite device.</span>
            </li>
            <li>
              <Check className={styles.checkIcon} />
              <span>Start your 7 day free trial</span>
            </li>
            <li>
              <Check className={styles.checkIcon} />
              <span>If you cancel during your trial, there will be no charge!</span>
            </li>
            <li>
              <Check className={styles.checkIcon} />
              <span>After your free trial:</span>
            </li>
          </ul>

          <div className={styles.priceContainer}>
            <span className={styles.price}>{subscriptionOffers?.[0]?.customerPriceInclTax}</span>
            <span className={styles.period}>/{subscriptionOffers?.[0]?.period}</span>
          </div>

          <Link className={styles.monthlyButton} to={`${pathname}/?u=create-account`}>
            Start watching for free
          </Link>
        </div>

        <div className={`${styles.planCard} ${styles.annualPlan}`}>
          <div className={styles.saveBadge}>Save 40%</div>
          <h2 className={styles.planTitle}>Annually</h2>

          <ul className={styles.featuresList}>
            <li>
              <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
              <span>Stream exclusive concerts from the comfort of your home. Watch on your favorite device.</span>
            </li>
            <li>
              <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
              <span>Start your 7 day free trial</span>
            </li>
            <li>
              <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
              <span>If you cancel during your trial, there will be no charge!</span>
            </li>
            <li>
              <Check className={`${styles.checkIcon} ${styles.annualCheck}`} />
              <span>After your free trial (yearly payment):</span>
            </li>
          </ul>

          <div className={styles.priceContainer}>
            <span className={styles.price}>{subscriptionOffers?.[1]?.customerPriceInclTax}</span>
            <span className={styles.period}>/{subscriptionOffers?.[1]?.period}</span>
          </div>

          <Link className={styles.annualButton} to={`${pathname}/?u=create-account`}>
            Start watching for free
          </Link>
        </div>
      </div>
      <div className={styles.textBlock}>
        <h1 className={styles.heading}>Take your concert viewing experience to the next level</h1>
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
        <Button label="Sign Up Now" color="primary" to={`${pathname}/?u=create-account`} />
      </div>
    </div>
  );
};

export default PricingComponent;
