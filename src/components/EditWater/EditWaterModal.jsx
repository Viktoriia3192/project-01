import { useEffect, useState } from 'react';
// import Modal from '../Modal/Modal';
import sprite from '../../images/sprite.svg';
import css from './EditWater.module.css';
import { GrAdd } from 'react-icons/gr';
import { useDispatch } from 'react-redux';
import { updateWaterThunk } from '../../redux/waterData/waterOperations';
import Modal from '../Modal/Modal';

export default function EditWaterModal() {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [time, setTime] = useState('00:00');
  const [amount, setAmount] = useState(0);
  const [waterValue, setWaterValue] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    setWaterValue(amount);
  }, [amount]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const waterVolume = event.currentTarget.water.value;
    const time = event.currentTarget.time.value;

    const formData = {
      waterVolume,
      time,
    };

    handleUpdateWater(formData);
    event.currentTarget.reset();
  };

  const handleUpdateWater = (formData) => {
    const newWater = {
      ...formData,
      id: Math.random().toString(),
    };

    dispatch(updateWaterThunk(newWater));
  };

  const incrementAmount = () => {
    setAmount((prevAmount) => prevAmount + 5);
  };

  const decrementAmount = () => {
    if (amount >= 5) {
      setAmount((prevAmount) => prevAmount - 5);
    }
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const generateOptions = () => {
    let options = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 5) {
        let formattedHour = hour.toString().padStart(2, '0');
        let formattedMinute = minute.toString().padStart(2, '0');
        options.push(`${formattedHour}:${formattedMinute}`);
      }
    }
    return options;
  };
  return (
    <>
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div className={css.edit_water_modal}>
          <h2 className={css.title}>Edit the entered amount of water</h2>
          <div className={css.info}>
            <span>
              <svg className={css.glass_icon}>
                <use xlinkHref={`${sprite}#icon-glass`} />
              </svg>
            </span>
            <p className={css.water_info}>{waterValue} ml</p>
            <p className={css.water_info_time}>{time} AM</p>
          </div>
          <p className={css.correct_title}>Correct entered data:</p>
          <p className={css.correct_subtitle}>Amount of water:</p>
          <div className={css.count_water}>
            <button className={css.count_button} onClick={decrementAmount}>
              <svg className={css.count_icon}>
                <use xlinkHref={`${sprite}#icon-minus-small`} />
              </svg>
            </button>
            <p className={css.amount_water}>
              <span>{waterValue}</span> ml
            </p>
            <button className={css.count_button} onClick={incrementAmount}>
              <GrAdd className={css.plus_icon} />
            </button>
          </div>
          <p className={css.recording_time}>Recording time:</p>
          <form name="water_value" onSubmit={handleFormSubmit}>
            <select
              className={css.custom_select}
              name={time}
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
              <p className={css.water}>{waterValue}ml</p>
              <button className={css.button_save} type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}
