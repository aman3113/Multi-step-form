import { createSlice } from "@reduxjs/toolkit";

const planSlice = createSlice({
  name: "plan slice",
  initialState: {
    isChecked: false,
    selectedPlan: "arcade",
    selectedAddOn: 1,
    monthlyPlan: {
      arcade: 9,
      advanced: 12,
      pro: 15,
    },
    yearlyPlan: {
      arcade: 90,
      advanced: 120,
      pro: 150,
    },
    monthlyAddOns: {
      game: 1,
      storage: 2,
      profile: 2,
    },
    yearlyAddOns: {
      game: 10,
      storage: 20,
      profile: 20,
    },
  },
  reducers: {
    handlePlan(state) {
      state.isChecked = !state.isChecked;
    },
    setSelectedPlan(state, actions) {
      state.selectedPlan = actions.payload;
    },
    setSelectedAddOn(state, actions) {
      state.selectedAddOn = actions.payload;
    },
  },
});

export const { handlePlan, setSelectedPlan, setSelectedAddOn } =
  planSlice.actions;
export default planSlice;
