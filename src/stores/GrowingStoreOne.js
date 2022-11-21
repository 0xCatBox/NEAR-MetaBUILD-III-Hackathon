import create from 'zustand';

const useGrowingStoreOne = create(set => ({
    MushOneEXP: 0,
    MushOneStatus: -1,
    MushOneType: -1,
    MushOneActive: 0,
    setMushOneActive: () => set(state => ({MushOneActive: 1-state.MushOneActive })),
    SetMushOneEXP: () => set(state => ({MushOneEXP: state.MushOneEXP + 1})),
    SetMushOneStatus: () => set(state => ({MushOneStatus: state.MushOneStatus + 1})),
    SetMushOneType: (MushOneType) => set({MushOneType}),    
    InitMushOneEXP: () => set(() => ({MushOneEXP: 0})),
    InitMushOneStatus: () => set(() => ({MushOneStatus: -1})),
}))

export default useGrowingStoreOne;