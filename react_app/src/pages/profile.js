import { useSelector, useDispatch } from "react-redux";
import {SHOW_AGE} from '../store/profile/types';

export const Profile = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    return (
        <>
        <h2>Страница профиля</h2>
        <h3>Показывать возраст: {profile?.show_age ? 'Да' : 'Нет'}</h3>
        <button
            onClick={() => dispatch({type: SHOW_AGE})}
        >Показывать возраст</button>
        </>
    )
}