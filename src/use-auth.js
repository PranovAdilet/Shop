import {useSelector} from "react-redux";

export const useAuth = () => {
    const {email, token, id} = useSelector(state => state.reducer.popup.user);
    return {
        isAuth: !!email,
        email,
        token,
        id
    }
}