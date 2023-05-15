// it isn't necessary to actually publish this lib to an npm-repo we can just simulate the problem like so
import { Pub } from '../../../../dist/packages/pub';
import '../../../../dist/packages/pub/index.css';
// import '../../../../dist/packages/pub/index2.css';  // uncomment to see the background-color change


import styles from './app.module.css';

import NxWelcome from './nx-welcome';

export function App() {
  return (
    <div className={styles.app}>
      <Pub />
      <NxWelcome title="test"/>
    </div>
  );
}

export default App;
