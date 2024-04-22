import styled from 'styled-components';


export const AddFormStyles=styled.div` margin: auto;
text-align: center;

// min-width: 300px;
.header {
    font-family: 'Roboto';
    font-size: 26px;
    line-height: 32px;
    margin-bottom: 16px;
    text-align: start;

    color: var(--primery-color-black);
}

.container-edit-drink {
    display: flex;
    padding: 14px 24px;
    justify-content: center;
    align-items: center;
    background-color: var(--secondary-color-2);
    column-gap: 12px;
    border-radius: 10px;
}

.result {
    font-weight: 600;

    color: var(--primery-color-black);
}

.edit-ml-value {
    color: var(--primary-color);
    margin-right: 16px;
}

.edit-time-value {
    color: var(--primery-color-black);
}

.edit-second-header {
    margin-bottom: 16px;
    text-align: start;

    color: var(--primery-color-black)
    ;
}

.drink-icon {
    width: 36px;
    height: 36px;
}

.add-second-header {
    font-family: 'Roboto';
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
    text-align: start;

    color: var(--primery-color-black)

    ;
}

.string {
    text-align: start;
    margin-bottom: 12px;

    color: var(--primery-color-black)

    ;
}

.edit-water-form {
    margin-top: 20px;
}

.step-input {
    width: 194px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;

    button {
        padding: 8px 16px;
        cursor: pointer;
        font-size: 16px;

        background-color: var(--primery-color-black)

        ;
        color: var(--primary-color);

        border: var(--secondary-color-lightblue);
        border-radius: 50%;
        width: 44px;
        height: 44px;
        box-shadow: 0px 2px 4px 0px rgba(64, 123, 255, 0.2);
    }
}

.water-amount {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d7e3ff;
    color: var(--primary-color);
    border-radius: 40px;
    width: 92px;
    height: 36px;
    font-weight: 600;
}

.select-container {
    display: flex;
    flex-direction: column;
}

input {
    color: var(--primery-color-black);
    border: 1px solid #d7e3ff;
    padding: 12px;
    font-size: 16px;
    margin-bottom: 10px;
    border-radius: 10px;

    background-color: var(--primery-color-white);
}

select {
    color: var(--primery-color-black);
    border-color: #d7e3ff;
    appearance: none;
    padding: 12px;
    font-size: 16px;
    margin-bottom: 24px;
    border-radius: 10px;
    background-position: calc(100% - 12px) center;
    background-size: 15px,
    15px;

    background-color: var(--primery-color-white);
}

.resultInfo {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    gap: 16px;
}

select:focus {
    outline: none;
}

input:focus {
    outline: none;
}

.input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 24px;
}

button {
    width: 100%;
    padding: 12px 24px;
    background-color: #007bff;
    color: var(--primary-button-text-color);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

@media screen and (max-width: 767px) {
    max-width: 400px;

    input,
    .header {
        width: 100%;
    }

    .container-edit-drink {
        width: 100%;
    }
}

@media screen and (min-width: 768px) and (max-width: 1439px) {
    select {
        width: 100%;
    }

    .resultInfo {
        display: flex;

        flex-direction: row;

        gap: 24px;

        width: 256px;

        margin-left: auto;
    }

    button {
        width: 160px;
    }

    width: 704px;
}

@media screen and (min-width: 768px) {
    // input,
    // select {
    //   width: 544px;
    // }

    .resultInfo {
        display: flex;
        flex-direction: row;
    }

    .container-edit-drink {
        width: 254px;
    }
}

@media screen and (min-width: 1440px) {
    .resultInfo {
        display: flex;

        flex-direction: row;

        gap: 24px;

        width: 256px;

        margin-left: auto;
    }

    button {
        width: 160px;
    }

    width: 592px;
}

`;