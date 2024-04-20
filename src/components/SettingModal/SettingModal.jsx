import { useState } from 'react';
import { FormikContext, useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import css from './SettingModal.module.css';
import Modal from '../Modal/Modal';
import { selectAuthUserData } from '../../redux/auth/authSelectors';
import {
  userInfoThunk,
  userAvatarThunk,
} from '../../redux/userInfo/userInfoOperations';

export default function SettingModal() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuthUserData);
  const { email, avatarURL, gender, name } = user;
  screen;
  // https://project01-water-backend.onrender.com/api/users/current
  // http://localhost:3030/api/users/current

  const avatarHandleChange = async (e) => {
    const file = e.target.files[0];

    await dispatch(userAvatarThunk(file));
    setIsModalOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address'),
    name: Yup.string(),
    gender: Yup.string(),
    oldPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password is too long'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password is too long'),
    repeatPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password is too long'),
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
    onSubmit: (values) => {
      console.log(values);
      const updateUserInfo = {};

      const {
        name,
        gender,
        email,
        // password,
        // oldPassword,
      } = formik.values;

      if (name.trim() !== '') {
        updateUserInfo.name = name;
      }

      if (gender.trim() !== '') {
        updateUserInfo.gender = gender;
      }

      if (email.trim() !== '') {
        updateUserInfo.email = email;
      }

      console.log(updateUserInfo);
      dispatch(userInfoThunk(updateUserInfo));
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
              onChange={avatarHandleChange}
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
