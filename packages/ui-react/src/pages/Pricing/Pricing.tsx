'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';

import styles from './Pricing.module.scss';

const PricingComponent = () => {
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
            <span className={styles.price}>£6.99</span>
            <span className={styles.period}>/month</span>
          </div>

          <button className={styles.monthlyButton}>Start streaming for free</button>
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
            <span className={styles.price}>£49.99</span>
            <span className={styles.period}>/year</span>
          </div>

          <button className={styles.annualButton}>Start streaming for free</button>
        </div>
      </div>
    </div>
  );
};

export default PricingComponent;
