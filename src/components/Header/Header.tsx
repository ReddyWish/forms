import Link from 'next/link';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.header}>
      <Link href="/simple-form">Simple Form</Link>
      <Link href="/react-hook-form">React Hook Form</Link>
      <Link href="/zod-validation">React Hook Form&Zod</Link>
    </div>
  );
};
