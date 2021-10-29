import { getGistsStart, getGistsSucess, getGistsError } from "./actions";

export const getGists = () => async (dispatch, _, api) => {
	try {
		dispatch(getGistsStart());

		const { data } = await api.getGistsApi();

		dispatch(getGistsSucess(data));
	} catch {
		dispatch(getGistsError("get gists error"));
	}
};
