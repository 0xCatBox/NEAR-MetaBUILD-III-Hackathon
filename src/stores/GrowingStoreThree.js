import create from 'zustand';

const useGrowingStoreThree = create(set => ({
    
    // EXP: Experiment Point(0~10)
    // Status: -1: none, 0: spore, 1: growing, 2: adult
    // Type: Spore type(0~4)

    MushThreeEXP: 0,
    MushThreeStatus: -1,
    MushThreeType: -1,
    MushThreeActive: 0,
    setMushThreeActive: () => set(state => ({MushThreeActive: 1- state.MushThreeActive})),
    SetMushThreeEXP: () => set(state => ({MushThreeEXP: state.MushThreeEXP + 1})),
    SetMushThreeStatus: () => set(state => ({MushThreeStatus: state.MushThreeStatus + 1})),
    SetMushThreeType: (MushThreeType) => set({MushThreeType}),    
    InitMushThreeEXP: () => set(() => ({MushThreeEXP: 0})),
    InitMushThreeStatus: () => set(() => ({MushThreeStatus: -1})),
}))

export default useGrowingStoreThree;