import styles from './StepIndicator.module.scss';

const StepIndicator = ({ currentStep, steps }: { currentStep: number; steps: { id: string; label: string }[] }) => {
  return (
    <div className={styles.container}>
      {steps.map((step, index) => (
        <div key={step.id} className={styles.stepWrapper}>
          <div className={`${styles.step} ${currentStep >= index + 1 ? styles.active : ''}`}>
            <span className={styles.number}>{index + 1}</span>
            <span className={styles.label}>{step.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepIndicator;
