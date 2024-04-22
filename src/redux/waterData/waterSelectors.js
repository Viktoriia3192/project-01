export const selectTodayWater = (state) => state.waterData.todayWater;
export const selectMonthWater = (state) => state.waterData.monthWater;
export const selectWaterDataIsLoading = (state) => state.waterData.isLoading;
export const selectWaterDataError = (state) => state.waterData.error;

export const getIsAddingDrink = state => state.water.isAddDrinkLoading;
export const getIsEditingDrink = state => state.water.isEditingDrink;