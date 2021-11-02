import { useSelector, useDispatch } from "react-redux";
import {toggle_show_age} from '../store/profile';

export const Profile = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    return (
        <>
        <h2>Страница профиля</h2>
        <h3>Показывать возраст: {profile?.show_age ? 'Да' : 'Нет'}</h3>
        <button
            onClick={() => dispatch(toggle_show_age())}
        >Показывать возраст</button>
        </>
    )
}