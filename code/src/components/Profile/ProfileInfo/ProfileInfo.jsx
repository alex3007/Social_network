import React, {useState} from 'react';
import cls from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/myphoto.png';
import userMale from '../../../assets/images/male.png';
import userFemale from '../../../assets/images/female.png';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    };

    const UserImage = () => {
        if (isOwner) {
            return <img src={userPhoto} className={cls.mainPhoto} alt='avatar'/>
        } else if (profile.male) {
            return <img src={userMale} className={cls.mainPhoto} alt='avatar'/>
        } else {
            return <img src={userFemale} className={cls.mainPhoto} alt='avatar'/>
        }
    }

    return (
        <div className={cls.profileContainer}>
            <div className={cls.profile}>
                <div className={cls.profileImage}>
                    <UserImage/>
                </div>

                <div className={cls.profileDescription}>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>}
                </div>
                <div className={cls.profileStatus}>
                    <ProfileStatusWithHooks status={isOwner ? profile.status : status}
                                            updateStatus={updateStatus}/>
                </div>
            </div>
        </div>
    )
};

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div className={cls.profileForm}>
        <div className={cls.profileData}>
            <b>Full name:</b> {profile.fullName}
            <hr/>
        </div>
        <div className={cls.profileData}>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
            <hr/>
        </div>
        {profile.lookingForAJob &&
        <div className={cls.profileData}>
            <b>My professional skills:</b> {profile.scills}
            <hr/>
        </div>
        }
        <div className={cls.profileData}>
            <b>About me:</b> {profile.aboutMe}
            <hr/>
        </div>
        {isOwner && <div>
            <button className='button' onClick={goToEditMode}>Edit</button>
        </div>}
    </div>
};

export default ProfileInfo;