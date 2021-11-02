import {request} from './request';

export const getGistsApi = () => request.get("/gists");