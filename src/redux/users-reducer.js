const SET_STATE = 'SET_STATE';
const USER_FOLLOW = 'USER_FOLLOW';
const USER_UNFOLLOW = 'USER_UNFOLLOW';
const SET_USER_BASE = 'SET_USER_BASE';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';


let initialState = {
    userList: [],
    userTotal: 0,
    pageLimit: 10,
    activePage: 1,
    isLoad: false 
}; 
/*
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
    ]
};
*/
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE: {
            //debugger
            return {
                ...state,
               userList: 
               [...state.userList, ...action.userList],
               isLoad: false
            }
        }
        case USER_FOLLOW: {
            // debugger
            return {
                ...state,
                userList: state.userList.map((user) => {
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
                userList: state.userList.map((user) => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                }),
            }
        }
        case SET_USER_BASE: {
            return {
                ...state,
                userTotal: action.userSetup.userTotal,
                pageLimit: action.userSetup.pageLimit,
                isLoad: true
            }
        }
        case SET_ACTIVE_PAGE: {
            return {
                ...state,
                userList: [],//need to clear state and render new users list
                activePage: action.activePage,
                isLoad: true
            }
        }
        default:
            return state
    }
}

export default usersReducer;
export const userFollowAC = (userID) => ({ type: USER_FOLLOW, userID });
export const userUnfollowAC = (userID) => ({ type: USER_UNFOLLOW, userID });
export const setStateAC = (userList) => ({ type: SET_STATE, userList });
export const setUserBaseAC = (userSetup) => ({ type: SET_USER_BASE, userSetup });//userSetup is object with userTotal and pageLimit keys
export const setActivePageAC = (activePage) => ({ type: SET_ACTIVE_PAGE, activePage });