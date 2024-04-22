import { FormikContext, useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import css from './SettingModal.module.css';
import Modal from '../Modal/Modal';
import { selectAuthUserData } from '../../redux/auth/authSelectors';
import {
  userInfoThunk,
  userAvatarThunk,
} from '../../redux/userInfo/userInfoOperations';

// const testUser = {
//   token:
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MjVhMDE2NjBmMjcyY2M4ZDMwZWU3ZiIsImlhdCI6MTcxMzc0MTg0N30.UPeK_rPUxPAKcy7Je9-ACJ6uM49HQczRhS8_0Po1wVQ',
//   user: {
//     _id: '6625a01660f272cc8d30ee7f',
//     email: 'test-setting-modal@mail.com',
//     name: 'User',
//     gender: null,
//     waterRate: 2000,
//     avatarURL: '//www.gravatar.com/avatar/759547a9c2c5213af970762f8e9786ae',
//   },
// };

export default function SettingModal({ isOpen, setIsSettingOpen }) {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuthUserData);
  // const { user } = testUser;
  const { email, avatarURL, gender, name } = user;

  const avatarHandleChange = async (e) => {
    const file = e.target.files[0];

    await dispatch(userAvatarThunk(file));
    setIsSettingOpen(false);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = await formik.validateForm();
    if (Object.keys(errors).length === 0) {
      formik.handleSubmit();
    }
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        'Invalid email address'
      )
      .required(),
    name: yup
      .string()
      .required()
      .min(3, 'Name must be at least 3 characters')
      .max(32, 'Name is too long'),
    gender: yup
      .string()
      .oneOf(['male', 'female'], 'Gender must be either male or female'),
    oldPassword: yup
      .string()
      .test(
        'isOldPasswordRequired',
        'Please fill in old password',
        function (value) {
          return !this.parent.password || value;
        }
      )
      .min(8, 'Password must be at least 8 characters')
      .max(64, 'Password is too long'),
    password: yup
      .string()
      .test(
        'isPasswordRequired',
        'Please fill in new password',
        function (value) {
          return !this.parent.oldPassword || value;
        }
      )
      .test(
        'isSamePassword',
        'This is your old password, create a new password',
        function (value) {
          return this.parent.oldPassword !== value || !value;
        }
      )
      .min(8, 'Password must be at least 8 characters')
      .max(64),
    repeatPassword: yup
      .string()
      .test('passwords-match', 'The passwords do not match', function (value) {
        return this.parent.password === value;
      }),
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
    onSubmit: async (values) => {
      console.log(values);
      const updateUserInfo = {};

      const { name, gender, email, password, oldPassword } = formik.values;

      if (name.trim() !== '') {
        updateUserInfo.name = name;
      }

      if (gender.trim() !== '') {
        updateUserInfo.gender = gender;
      }

      if (email.trim() !== '') {
        updateUserInfo.email = email;
      }

      if (oldPassword.trim() !== '') {
        updateUserInfo.oldPassword = oldPassword;
      }

      if (password.trim() !== '') {
        updateUserInfo.password = password;
      }

      console.log(updateUserInfo);
      setIsSettingOpen(false);
      await dispatch(userInfoThunk(updateUserInfo));
    },
    validationSchema: validationSchema,
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={() => setIsSettingOpen(false)}>
        <FormikContext.Provider value={formik}>
          <form
            className={css.form}
            onSubmit={handleFormSubmit}
            noValidate
            autoComplete="off"
          >
            <h2 className={css.title}>Setting</h2>

            <h3 className={css.subtitle_photo}>Your photo</h3>

            <div className={css.avatar_conteiner}>
              <img
                className={css.avatar}
                src={avatarURL || ''}
                alt="user avatar"
                height={80}
                width={80}
              />
              <input
                className={css.input_avatar}
                id="avatarURL"
                name="avatarURL"
                type="file"
                accept="image/*,.png,.jpg"
                onChange={avatarHandleChange}
              />
              <label className={css.photo_lable} htmlFor="avatarURL">
                Upload a photo
              </label>
            </div>

            <h3 className={css.subtitle_gender}>Your gender identity</h3>

            <div className={css.gender_conteiner}>
              <div className={css.gender_wraper}>
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

              <div className={css.gender_wraper}>
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
            </div>

            <label className={css.name_lable} htmlFor="name">
              Your name
            </label>
            <input
              className={css.input_field}
              id="name"
              name="name"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            {formik.errors.name ? (
              <div className={css.error}>{formik.errors.name}</div>
            ) : null}

            <label className={css.email_lable} htmlFor="email">
              E-mail
            </label>
            <input
              className={css.input_field}
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />

            {formik.errors.email ? (
              <div className={css.error}>{formik.errors.email}</div>
            ) : null}

            <h3 className={css.subtitle_password}>Password</h3>

            <label className={css.lable_password} htmlFor="oldPassword">
              Outdated password:
            </label>
            <input
              className={css.input_field}
              id="oldPassword"
              name="oldPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.oldPassword}
              placeholder="Password"
            />

            {formik.errors.oldPassword ? (
              <div className={css.error}>{formik.errors.oldPassword}</div>
            ) : null}

            <label className={css.lable_password} htmlFor="password">
              New Password:
            </label>
            <input
              className={css.input_field}
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
            />

            {formik.errors.password ? (
              <div className={css.error}>{formik.errors.password}</div>
            ) : null}

            <label className={css.lable_password} htmlFor="repeatPassword">
              Repeat new password:
            </label>
            <input
              className={css.input_field}
              id="repeatPassword"
              name="repeatPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.repeatPassword}
              placeholder="Password"
            />

            {formik.errors.repeatPassword ? (
              <div className={css.error}>{formik.errors.repeatPassword}</div>
            ) : null}

            <button className={css.save_btn} type="submit">
              Save
            </button>
          </form>
        </FormikContext.Provider>
      </Modal>
    </>
  );
}
