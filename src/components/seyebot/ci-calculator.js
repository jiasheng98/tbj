import * as React from 'react';

import VariablesForm from '../../components/seyebot/variables-form';
import CompoundInterestChart from '../../components/seyebot/ci-chart';

import defaultState from '../../components/seyebot/default-state';
import styles from '../styles/ci-calculator.module.css';

const CICalculator = () => {
  const [state, setState] = React.useState(defaultState);

  return (
    <div className={styles['ci-container']} id="annualCompoundCalculator">
      {/* <h1 className={styles['text-center']}>
        We believe in sustainability.
      </h1> */}
      <hr className={styles['hr']} />
      <VariablesForm onUpdate={variables => setState(variables)} />
      <hr className={styles['hr']} />
      <CompoundInterestChart {...state} />
    </div>
  );
};

export default CICalculator;
