import {
	GET_GISTS_START,
	GET_GISTS_SUCCESS,
	GET_GISTS_ERROR,
} from "../gists/types";
import { getGistsStart, getGistsSucess, getGistsError } from "../gists";
import { getGistsApi } from "../../api";

export const getGistsMiddlewareFunc = (store) => (next) => (action) => {
	//console.log("get-gists-middleware");

	const getG = async (dispatch, getState) => {
		try {
			//store.dispatch(getGistsStart());

			const { data } = await getGistsApi();
                console.log('after data')

			store.dispatch(getGistsSucess(data));
		} catch {
			store.dispatch(getGistsError("get gists error"));
		}
	};

	if (action.type === GET_GISTS_START) {
        console.log('get-gists if')
		getG();
	}

	return next(action);
};
