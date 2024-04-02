import { createSlice } from '@reduxjs/toolkit';

export const experienceSlice = createSlice({
    name: 'experience',
    initialState: {
        list: [
            {
                companyName: "Erpdaddy software solutions",
                id: 'ACD-23-24',
                positions: [
                    {
                        role: 'Frontend Developer Intern',
                    }
                ]
            }
        ]
    },
    reducers: {

    }
})

// export const { } = experienceSlice.actions;

export default experienceSlice.reducer;