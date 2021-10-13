import { postConstants } from '../_constants';
const initialState = {
    loading: false,
    post:[],
    search:null,
    subbredit:null,
  }
export function post(state = initialState, action) {
    switch (action.type) {
        case postConstants.GETALL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case postConstants.GETALL_SUCCESS:
            return {
                ...state,
                post: state.post.concat(action.post.data.children)
            };
        case postConstants.GETSEARCH_SUCCESS:
            return {
                ...state,
                search: action.post.data
            };
        case postConstants.SET_SUBBREDIT:
            localStorage.setItem('subbredit',JSON.stringify(action.items.data))
            return {
                ...state,
                subbredit: JSON.parse(localStorage.getItem('subbredit'))
            };
        case postConstants.GETALL_FAILURE:
            return {
                ...state,
                error: action.error
            };
        default:
            return state
    }
}