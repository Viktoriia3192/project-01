import { useState } from 'react';
import { FormikContext, useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import css from './SettingModal.module.css';
import Modal from '../Modal/Modal';
import { selectAuthUserData } from '../../redux/auth/authSelectors';
// import { refreshUserThunk } from '../../redux/auth/authOperations';

export default function SettingModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuthUserData);
  const { email, avatarURL, gender, name } = user;

  // https://project01-water-backend.onrender.com/api/users/current
  // http://localhost:3030/api/users/current

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('Email is required')
      .email('Invalid email address'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password is too long')
      .required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: email || '',
      name: name || '',
      gender: gender || '',
      oldPassword: '',
      password: '',
      repeatPassword: '',
    },
    onSubmit: (values, actions) => {
      console.log(values);
      console.log(actions);
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <FormikContext.Provider value={formik}>
          <form
            className={css.form}
            onSubmit={handleFormSubmit}
            noValidate
            autoComplete="off"
          >
            <h2>Setting</h2>

            <label htmlFor="avatarURL">Your photo</label>
            <img
              src={avatarURL || ''}
              alt="user avatar"
              height={80}
              width={80}
            />
            <input
              id="avatarURL"
              name="avatarURL"
              type="file"
              onChange={formik.handleChange}
              value={formik.values.avatarURL}
            />

            <h3>Your gender identity</h3>

            <div>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                checked={formik.values.gender === 'female'}
                onChange={formik.handleChange}
              />
              <label htmlFor="female">Woman</label>
            </div>

            <div>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                checked={formik.values.gender === 'male'}
                onChange={formik.handleChange}
              />
              <label htmlFor="male">Man</label>
            </div>

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            {formik.errors.email ? (
              <div className={css.error}>Error</div>
            ) : null}

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            {formik.errors.email ? (
              <div className={css.error}>Error</div>
            ) : null}

            <h3>Password</h3>

            <label htmlFor="oldPassword">Outdated password:</label>
            <input
              id="oldPassword"
              name="oldPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.oldPassword}
            />

            <label htmlFor="password">New Password:</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />

            <label htmlFor="repeatPassword">Repeat new password:</label>
            <input
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
            />

            <button type="submit">Submit</button>
          </form>
        </FormikContext.Provider>
      </Modal>
    </>
  );
}
