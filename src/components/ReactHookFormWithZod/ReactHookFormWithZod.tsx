'use client';
import styles from './ReactHookFormWithZod.module.scss';
import { useEffect, useRef, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Render } from '@/components/Render/Render';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

export const ReactHookFormWithZod = () => {
  const SignUpSchema = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(3)
      .max(20)
      .refine(
        (value) => /^[a-zA-Z]+[-'s]?[a-zA-Z ]+$/.test(value),
        'Name should contain only alphabets',
      ),
  });
  type SignUpSchemaType = z.infer<typeof SignUpSchema>;

  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

  const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => {
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
            <input className={styles.input} {...register('email')} />
            {errors.email && (
              <p className={styles.errorMessage}>{errors.email.message}</p>
            )}
          </div>
          <div className={styles['form-field']}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              className={styles.input}
              {...register('password')}
            />
            {errors.password && (
              <p className={styles.errorMessage}>{errors.password.message}</p>
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
