import { useCallback, useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getGists, gistsSelector } from "../store/gists";


export function GistsPage() {

	const dispatch = useDispatch();
	const { gistError, gistPending, gists } = useSelector(gistsSelector);

	useEffect(() => {
		if (!gists.length) {
			dispatch(getGists());
            //dispatch(getGistsStart()) 
            
		}
	}, [dispatch, gists]);


	if (gistPending) {
		return <h1>Pending ...</h1>;
	}
	if (gistError) {
        console.log('if gistError')
		return (
            <>
            <h1>Error</h1>
            </>    
        )
	}


	return (
		<div>
			<h1>Gists</h1>
			{gists?.map((gist) => (
				<h2 key={gist.url}>{gist.url}</h2>
			))}
		</div>
	);
}
