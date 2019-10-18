const INITIAL_STATE = {
    currentUser: null
}

//We will be using the ES6 Syntac to set a default value, so if ever the developer doesn't specify the state, it will fall back and takes the INITIAL_STATE
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

//WE NEED TO KNOW THAT EVERY SINGLE REDUCER GETS ALL THE ACTIONS THAT ARE FIRED, EVEN IF THOSE ACTIONS ARE NOT RELATED TO THAT REDUCER AND THIS IS THE ACTUAL REASON OF WHY WE NEED A DEFAULT CASE, BECAUSE IF THE ACTION.TYPE DOESN'T MATCH WE WANT TO RETURN THE CURRENT_STATE

export default userReducer;