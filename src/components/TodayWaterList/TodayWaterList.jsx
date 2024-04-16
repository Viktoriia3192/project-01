import { useSelector } from 'react-redux';
import s from './TodayWaterList.module.css';
import sprite from '../../images/sprite.svg';

import { selectTodayWater } from '../../redux/waterData/waterSelectors';

const TodayWaterList = () => {
  const todayWaterPortions = useSelector(selectTodayWater);

  const handleAddPortion = () => {
    // toggleModal(<AddWaterModal />);
  };
  const handleEditPortion = (waterId) => {
    // toggleModal(<DeleteEntryModal waterId={waterId} />);
  };
  const handleDeletePortion = (data) => {
    // toggleModal(<EditAmountModal data={data} />);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Today</h2>
      <div className={s.todayBox}>
        <table className={s.waterTable}>
          <tbody>
            {todayWaterPortions
              .toSorted(
                (a, b) =>
                  new Date(a.date).getTime() - new Date(b.date).getTime()
              )
              .map((data) => (
                <tr key={data._id} className={s.tRow}>
                  <td>
                    <svg className={s.glassSvg}>
                      <use href={`${sprite}#icon-glass`}></use>
                    </svg>
                  </td>
                  <td>{data.waterVolume} ml</td>
                  <td>
                    {new Intl.DateTimeFormat('en', {
                      hour: 'numeric',
                      minute: 'numeric',
                      hour12: true,
                    }).format(new Date(data.date))}
                  </td>
                  <td>
                    <button
                      type="button"
                      aria-label="Edit button"
                      onClick={() => handleEditPortion(data)}
                    >
                      <svg className={s.editSvg}>
                        <use href={`${sprite}#icon-pencil`}></use>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      aria-label="Delete button"
                      onClick={() => handleDeletePortion(data._id)}
                    >
                      <svg className={s.editSvg}>
                        <use href={`${sprite}#icon-trash`}></use>
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <button type="submit" onClick={handleAddPortion}>
          <svg className={s.plusSvg}>
            <use href={`${sprite}#icon-plus-small`}></use>
          </svg>
          Add water
        </button>
      </div>
    </div>
  );
};

export default TodayWaterList;
