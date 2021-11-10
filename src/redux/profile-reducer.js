const SET_STATE = 'SET_STATE';
const USER_FOLLOW = 'USER_FOLLOW';
const USER_UNFOLLOW = 'USER_UNFOLLOW';


let initialState = {
    userProfileList: [
        {
            id: 1, followed: false,
            avatarURL: 'https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png',
            fullName: { name: 'Diman', surname: 'noBilan' },
            location: { city: 'Kazan', country: 'Russia' },
            headMessage: 'Hello world'
        },
        {
            id: 2, followed: false,
            avatarURL: 'https://sun9-13.userapi.com/c626223/v626223284/40262/QLGVsFMkyNs.jpg',
            fullName: { name: 'Anonim', surname: 'Nemo' },
            location: { city: 'Moscow', country: 'Russia' },
            headMessage: 'Nobody can find me'
        },
        {
            id: 3, followed: true,
            avatarURL: 'https://cs13.pikabu.ru/avatars/2976/x2976495-1653151219.png',
            fullName: { name: 'Alisa', surname: 'Selezneva' },
            location: { city: 'Minsk', country: 'Belarus' },
            headMessage: 'Let me free universe'
        }
    ],
    newID: 4
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE: {
            return {
                ...state,
                userProfileList: [...state.userProfileList, ...action.userProfileList]
            }
        }
        case USER_FOLLOW: {
            // debugger
            return {
                ...state,
                userProfileList: state.userProfileList.map((user) => {
                    if (user.id === action.userID) {
                        return { ...user, followed: true }
                    }
                    return user;
                }),
            }
        }
        case USER_UNFOLLOW: {
            // debugger
            return {
                ...state,
                userProfileList: state.userProfileList.map((user) => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                }),
            }
        }
        default:
            return state
    }
}

export default profileReducer;
export const userFollowAC = (userID) => ({ type: USER_FOLLOW, userID });
export const userUnfollowAC = (userID) => ({ type: USER_UNFOLLOW, userID });