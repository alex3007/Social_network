import React, {useState} from 'react';
import cls from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/images/myphoto.jpg';
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    };

    return (
        <div className={cls.profileContainer}>
            <div className={cls.profile}>
                <div className={cls.profileImage}>
                    <img src={profile.photos.large || userPhoto} className={cls.mainPhoto} alt='avatar'/>
                    {isOwner && <div><input  className={cls.changeImage} type={"file"} onChange={onMainPhotoSelected}/>
                    <label className={cls.changeImageLabel}>Change image</label>
                    </div>}
                </div>
                <div className={cls.profileDescription}>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}/>}
                </div>
                <div className={cls.profileStatus}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
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
            <b>My professional skills:</b> {profile.lookingForAJobDescription}
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