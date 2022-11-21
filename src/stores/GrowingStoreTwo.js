import create from 'zustand';

const useGrowingStoreTwo = create(set => ({
    
    // EXP: Experiment Point(0~10)
    // Status: -1: none, 0: spore, 1: growing, 2: adult
    // Type: Spore type(0~4)

    MushTwoEXP: 0,
    MushTwoStatus: -1,
    MushTwoType: -1,
    MushTwoActive: 0,
    setMushTwoActive: () => set(state => ({MushTwoActive: 1-state.MushTwoActive})),
    SetMushTwoEXP: () => set(state => ({MushTwoEXP: state.MushTwoEXP + 1})),
    SetMushTwoStatus: () => set(state => ({MushTwoStatus: state.MushTwoStatus + 1})),
    SetMushTwoType: (MushTwoType) => set({MushTwoType}),    
    InitMushTwoEXP: () => set(() => ({MushTwoEXP: 0})),
    InitMushTwoStatus: () => set(() => ({MushTwoStatus: -1})),
}))

export default useGrowingStoreTwo;