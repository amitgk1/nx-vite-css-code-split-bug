import { Suspense, lazy } from 'react';
import styles from './pub.module.css';

// LAZY LOADING
const IsEven = lazy(() => import('@nx-test/is-even'));

export function Pub() {
  return (
    <div className={styles.container}>
      <h1>Welcome to Pub!</h1>
      <Suspense fallback={<div>loading...</div>}>
      <IsEven num={37}/>
      </Suspense>
    </div>
  );
}

export default Pub;
