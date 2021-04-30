

export const googleSignReducer = (state, action) => {
    switch (action.type) {
        case 'GOOGLE_SIGN': 
            return {
                ...state,
                googleToken : action.payload
            }
    }
} 