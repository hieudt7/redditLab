import { postConstants } from '../_constants';
import { postService } from '../_services';
import { alertActions } from './';
import { history } from '../_helpers';

export const postActions = {
    search,
    setSubbredit,
    getBest,
    getHot,
};


function search(key) {
    return dispatch => {
        dispatch(request());

        postService.getData('/api/subreddit_autocomplete_v2.json?query=' + key+'&limit=5')
            .then(
                post => dispatch(success(post)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: postConstants.GETSEARCH_REQUEST } }
    function success(post) {
        return { type: postConstants.GETSEARCH_SUCCESS, post }
    }
    function failure(error) {
        return { type: postConstants.GETSEARCH_FAILURE, error }
    }
}
function setSubbredit(items) {
    return dispatch => {
        dispatch(success(items))
    };

    function success(items) {
        return { type: postConstants.SET_SUBBREDIT, items }
    }
}
function getBest(key, count, limit) {
    return dispatch => {
        dispatch(request());

        postService.getData('/r/subreddit/best.json?sr_detail=' + key + '&count=' + count + '&limit=' + limit)
            .then(
                post => dispatch(success(post)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: postConstants.GETALL_REQUEST } }
    function success(post) {
        return { type: postConstants.GETALL_SUCCESS, post }
    }
    function failure(error) {
        return { type: postConstants.GETALL_FAILURE, error }
    }
}
function getHot(key, count, limit) {
    return dispatch => {
        dispatch(request());
        postService.getData('/r/subreddit/hot.json?sr_detail=' + key + '&count=' + count + '&limit=' + limit)
            .then(
                post => dispatch(success(post)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: postConstants.GETALL_REQUEST } }
    function success(post) {
        return { type: postConstants.GETALL_SUCCESS, post }
    }
    function failure(error) {
        return { type: postConstants.GETALL_FAILURE, error }
    }
}
