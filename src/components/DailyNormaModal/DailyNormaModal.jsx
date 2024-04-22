import React from 'react';
import { useState, useEffect } from 'react';
import css from './DailyNormaModal.module.css';
import { useDispatch } from 'react-redux';
import { updateWaterRateThunk } from '../../redux/userInfo/userInfoOperations';

const DailyNormaModal = ({ onClose }) => {
  const [mass, setMass] = useState('');
  const [time, setTime] = useState('');
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState(0);
  const [gender, setGender] = useState('woman');

  const dispatch = useDispatch();

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const onChangeMass = (event) => {
    setMass(event.currentTarget.value);
  };

  const onChangeTime = (event) => {
    setTime(event.currentTarget.value);
  };

  const onChangeAmount = (event) => {
    setAmount(event.currentTarget.value);
    setResult(event.currentTarget.value);
  };

  useEffect(() => {
    if (gender === 'woman') {
      setResult(mass * 0.03 + time * 0.4);
    } else {
      setResult(mass * 0.04 + time * 0.6);
    }
  }, [gender, mass, time]);

  const handleSubmit = ({ result }) => {
    dispatch(updateWaterRateThunk(result));
    onClose();
  };

  return (
    <div className={css.container}>
      <div className={css.title}>
        <h2 className={css.titleText}>My daily norma</h2>
      </div>

      <div className={css.genderListFormula}>
        <ul className={css.listFormula}>
          <li className={css.itemFormula}>
            <p className={css.textFormula}>
              For girl:
              <span className={css.formula}>V=(M*0,03) + (T*0,4)</span>
            </p>
          </li>
          <li className={css.itemFormula}>
            <p className={css.textFormula}>
              For man:
              <span className={css.formula}>V=(M*0,04) + (T*0,6)</span>
            </p>
          </li>
        </ul>
      </div>

      <div className={css.volumeWater}>
        <p className={css.volumeWaterText}>
          <span className={css.volumeWaterSymbol}>*</span> V is the volume of
          the water norm in liters per day, M is your body weight, T is the time
          of active sports, or another type of activity commensurate in terms of
          loads (in the absence of these, you must set 0)
        </p>
      </div>

      <div className={css.calc}>
        <h3 className={css.calcRateTitle}>Calculate your rate:</h3>
      </div>
      <div className={css.calcRateForm}>
        <label className={css.genderBtn}>
          <input
            type="radio"
            className={css.radioBtnGroup}
            name="radio-buttons-group"
            value="woman"
            checked={gender === 'woman'}
            onChange={handleGenderChange}
          />
          <span className={css.radioBtnGroupText}>For woman</span>
        </label>
        <label className={css.genderBtn}>
          <input
            type="radio"
            className={css.radioBtnGroup}
            name="radio-buttons-group"
            value="man"
            checked={gender === 'man'}
            onChange={handleGenderChange}
          />
          <span className={css.radioBtnGroupText}>For man</span>
        </label>
      </div>

      <div className={css.weight}>
        <label>
          <p className={css.weightKilogramsText}>Your weight in kilograms:</p>
          <input
            type="text"
            className={css.weightKilogramsInput}
            name="mass"
            placeholder="0"
            value={mass}
            onChange={onChangeMass}
          ></input>
        </label>
      </div>

      <div className={css.time}>
        <label>
          <p className={css.timeHoursText}>
            The time of active participation in sports or other activities with
            a high physical. load in hours:
          </p>
          <input
            type="text"
            className={css.timeHoursInput}
            name="time"
            placeholder="0"
            value={time}
            onChange={onChangeTime}
          ></input>
        </label>
      </div>

      <div className={css.calcAmount}>
        <p className={css.amountWaterText}>
          The required amount of water in liters per day:
        </p>
        <span className={css.amount}>{result} L </span>
      </div>

      <div className={css.normaWaterDrink}>
        <p className={css.normaWaterDrinkText}>
          Write down how much water you will drink:
        </p>
        <input
          type="text"
          className={css.normaWaterDrinkInput}
          name="waterVolume"
          placeholder={result}
          min="0"
          max="15"
          value={amount}
          onChange={onChangeAmount}
          required
        ></input>
      </div>
      <div className={css.saveBtn}>
        <button
          type="submit"
          className={css.normaModalBtn}
          aria-label="click to save"
          onClick={() => handleSubmit(result)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default DailyNormaModal;
