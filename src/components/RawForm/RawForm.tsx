'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './RawForm.module.scss';
import { Render } from '@/components/Render/Render';

type Data = {
  email: string;
  password: string;
};

export const RawForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (email && password) {
      console.log('Success');
    } else {
      console.log('fill all field');
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles['form-container']}>
        <form onSubmit={handleSubmit}>
          <div className={styles['form-field']}>
            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={styles.input}
            />
          </div>
          <div className={styles['form-field']}>
            <label htmlFor="password" className={styles.label}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>
            Login
          </button>
        </form>
      </div>
      <div className={styles.render}>
        <Render />
      </div>
    </div>
  );
};
