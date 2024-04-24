import { useEffect, useState } from 'react';
import sprite from '../../images/sprite.svg';
import { GrAdd } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import {
  addWaterThunk,
  todayThunk,
} from '../../redux/waterData/waterOperations';
import css from './AddWater.module.css';

export default function AddWaterModal({ onClose }) {
  const [time, setTime] = useState('00:00');
  const [waterValue, setWaterValue] = useState(250);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todayThunk());
  }, [dispatch]);

  const incrementWater = () => {
    setWaterValue((prev) => prev + 50);
  };
  const decrementWater = () => {
    setWaterValue((prev) => (prev > 0 ? prev - 50 : 0));
  };
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
  const generateOptions = () => {
    let options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        let formattedHour = hour.toString().padStart(2, '0');
        let formattedMinute = minute.toString().padStart(2, '0').padEnd(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;

    const newNote = {
      waterVolume: waterValue,
      date: formattedDate,
    };
    await dispatch(addWaterThunk(newNote));
    // await dispatch(todayThunk());
    onClose();
  };

  return (
    <>
      <div className={css.add_water_modal}>
        <h2 className={css.title}>Add Water</h2>
        <p className={css.value}>Choose a value:</p>
        <p className={css.title2}>Amount of water:</p>
        <div className={css.count_water}>
          <button className={css.count_button} onClick={decrementWater}>
            <svg className={css.count_icon}>
              <use xlinkHref={`${sprite}#icon-minus-small`} />
            </svg>
          </button>
          <p className={css.amount_water}>{waterValue} ml</p>
          <button className={css.count_button} onClick={incrementWater}>
            <GrAdd className={css.plus_icon} />
          </button>
        </div>
        <p className={css.recording_time}>Recording time:</p>
        <form name="water_value" onSubmit={handleSave}>
          <select
            className={css.custom_select}
            name="time"
            value={time}
            onChange={handleTimeChange}
          >
            {generateOptions().map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          <p className={css.water_value_title}>
            Enter the value of the water used:
          </p>
          <input
            className={css.water_value}
            type="number"
            name="water"
            min="0"
            value={waterValue}
            onChange={(e) => setWaterValue(e.target.value)}
          />
          <div className={css.water_value_button_send}>
            <p className={css.water}>{waterValue} ml</p>
            <button className={css.button_save} type="submit">
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
