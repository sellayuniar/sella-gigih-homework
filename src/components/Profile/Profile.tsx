import styles from './profile.module.css';
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { setUserID, setUserDisplayName } from "../../redux/userSlice";
import { RootState } from "../../store";
import { fetchUser } from "../../libs/fetchUser";

const Profile = () => {
    const accessToken = useAppSelector((state: RootState) => state.accessToken.value);
    const userDisplayName = useAppSelector((state: RootState) => state.user.displayName);
    const dispatch = useAppDispatch();

    useEffect(() => {
        accessToken !== undefined && (
            fetchUser(accessToken).then(res => {
                dispatch(setUserID(res.id));
                dispatch(setUserDisplayName(res.display_name));
            }));
            
    }, [accessToken, dispatch]);
    console.log(userDisplayName);
    
   
    return (
        <div className={styles.profile}>
            <h1>My Profile</h1>
            <h1>{userDisplayName}</h1>
            
        </div>
    )

}

export default Profile;