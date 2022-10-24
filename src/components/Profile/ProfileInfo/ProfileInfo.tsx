import React from 'react';
import styles from './profileInfo.module.css'
function ProfileInfo() {
    const Label = (props: any) => {
        return (
            <div className={styles.content__labelText}>{props.info}</div>
        )
    }
    const Text =(props: any) => {
        return (
            <div className={styles.content__infoText}>{props.info}</div>
        )
    }
    return (<>
            <div className={styles.content}>
                <div className={styles.content__personal}>
                    <div className={styles.content__avatar}>
                        <img src='http://paraparabellum.ru/wp-content/uploads/2018/12/Kuda-ischezli-somalijjskie-piraty5.jpg'
                             className={styles.content__avatarImg} alt="Foto"/>
                    </div>
                    <div className={styles.content__label}>
                        <Label info='Name:'/>
                        <Label info='Date of Birthday:'/>
                        <Label info='City:'/>
                        <Label info='Education:'/>
                        <Label info='Favorite weapon:'/>
                    </div>
                    <div className={styles.content__info}>
                        <div className={styles.content__infoName}>
                            Mgamu Numinok
                        </div>
                        <Text info='no one knows'/>
                        <Text info='Brunumbu'/>
                        <Text info="Brunumbu's school"/>
                        <Text info='AK-47'/>
                    </div>
                </div>
            </div>;
        </>

    );
}
export default ProfileInfo;