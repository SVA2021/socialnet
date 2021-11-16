const SET_STATE = 'SET_STATE';
const USER_FOLLOW = 'USER_FOLLOW';
const USER_UNFOLLOW = 'USER_UNFOLLOW';
// const SET_USER_BASE = 'SET_USER_BASE';
const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';


let initialState = {
    //get from server
    items: [],
    totalCount: 15,
    //set by user
    pageLimit: 5, // now fixed
    activePage: 1,
    isLoad: true 
}; 
/* old config
        {
            id: 1, followed: false,
            avatarURL: 'https://cs13.pikabu.ru/avatars/3425/x3425772-1402976383.png',
            fullName: { name: 'Diman', surname: 'noBilan' },
            location: { city: 'Kazan', country: 'Russia' },
            headMessage: 'Hello world'
        }
    ]
};

// ///////////////////////////////
new config

{
    "items": [
        {
            "name": "NatalliaLanina",
            "id": 20801,
            "uniqueUrlName": null,
            "photos": {
                "small": null,
                "large": null
            },
            "status": null,
            "followed": false
        },
    ],
    "totalCount": 15827,
    "error": null
}
*/
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_STATE: {
            //debugger
            return {
                ...state,
                items: 
               [...state.items, ...action.items],
               //totalCount: action.totalCount,
               isLoad: false
            }
        }
        case USER_FOLLOW: {
            // debugger
            return {
                ...state,
                items: state.items.map((user) => {
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
                items: state.items.map((user) => {
                    if (user.id === action.userID) {
                        return { ...user, followed: false }
                    }
                    return user;
                }),
            }
        }
        case SET_ACTIVE_PAGE: {
            // debugger
            return {
                ...state,
                items: [],//need to clear state and render new users list
                activePage: action.activePage,
                isLoad: true
            }
        }
        default:
            return state
    }
}

export default usersReducer;
export const userFollow = (userID) => ({ type: USER_FOLLOW, userID });
export const userUnfollow = (userID) => ({ type: USER_UNFOLLOW, userID });
export const setState = (items) => ({ type: SET_STATE, items });
// export const setUserBase = (userSetup) => ({ type: SET_USER_BASE, userSetup });//userSetup is object with userTotal and pageLimit keys
export const setActivePage = (activePage) => ({ type: SET_ACTIVE_PAGE, activePage });