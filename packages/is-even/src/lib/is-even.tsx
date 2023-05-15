import { isEven } from './utils/is-even';
import styles from './is-even.module.css';

export interface IsEvenProps {
  num: number
}

export function IsEven({num}: IsEvenProps) {
  return (
    <div className={styles.container}>
      <h1>Welcome to IsEven!</h1>
      <span>The number {num} is {!isEven(num) && "not"} even</span>
    </div>
  );
}

export default IsEven;
