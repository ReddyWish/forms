import styles from './Render.module.scss';
import { useEffect, useRef } from 'react';

export const Render = () => {
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current += 1;
  });
  return (
    <div className={styles.render}>
      Component Rendered: {renderCount.current} times
    </div>
  );
};
