import create from 'zustand';

const useGrowingStoreFour = create(set => ({
    
    // EXP: Experiment Point(0~10)
    // Status: -1: none, 0: spore, 1: growing, 2: adult
    // Type: Spore type(0~4)

    MushFourEXP: 0,
    MushFourStatus: -1,
    MushFourType: -1,
    MushFourActive: 0,
    setMushFourActive: () => set(state => ({MushFourActive: 1- state.MushFourActive})),
    SetMushFourEXP: () => set(state => ({MushFourEXP: state.MushFourEXP + 1})),
    SetMushFourStatus: () => set(state => ({MushFourStatus: state.MushFourStatus + 1})),
    SetMushFourType: (MushFourType) => set({MushFourType}),    
    InitMushFourEXP: () => set(() => ({MushFourEXP: 0})),
    InitMushFourStatus: () => set(() => ({MushFourStatus: -1})),
}))

export default useGrowingStoreFour;