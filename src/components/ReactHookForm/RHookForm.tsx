'use client';
import styles from './RHookForm.module.scss';
import { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Render } from '@/components/Render/Render';

export const ReactHookForm = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    setSuccess(true);
    console.log(getValues());
    reset();
  };

  return (
    <div className={styles.wrapper}>
      {success && <h1 className={styles.success}>SUCCESS!</h1>}
      <div className={styles['form-container']}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['form-field']}>
            <label className={styles.label}>Email</label>
            <input
              className={styles.input}
              {...register('email', {
                required: 'Email is required.',
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: 'Email is not valid.',
                },
              })}
            />
            {errors.email && (
              <p className={styles.errorMessage}>
                {errors.email.message?.toString()}
              </p>
            )}
          </div>
          <div className={styles['form-field']}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              className={styles.input}
              {...register('password', {
                required: 'Password is required.',
                minLength: {
                  value: 6,
                  message: 'Password should be at-least 6 characters.',
                },
              })}
            />
            {errors.password && (
              <p className={styles.errorMessage}>
                {errors.password.message?.toString()}
              </p>
            )}
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
