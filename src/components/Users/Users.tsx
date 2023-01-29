import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css';

function Users(props: UsersPropsType) {
    if (props.users.length===0){
        props.setUsers([
            {
                id: 1,
                photoURL: "https://cdnn21.img.ria.ru/images/103116/49/1031164918_0:0:2000:1126_1920x0_80_0_0_7b75a3ebf8021ae0790a915cfe76e0d0.jpg",
                followed: false,
                fullname: "Marsel",
                status: "wanted",
                location: {
                    country: "Bahamas",
                    city: "Nassau"
                }
            },
            {
                id: 2,
                photoURL: "https://cdnn21.img.ria.ru/images/103116/49/1031164918_0:0:2000:1126_1920x0_80_0_0_7b75a3ebf8021ae0790a915cfe76e0d0.jpg",
                followed: false,
                fullname: "Murdon",
                status: "wanted",
                location: {
                    country: "Bahamas",
                    city: "Nassau"
                }
            },
            {
                id: 3,
                photoURL: "https://cdnn21.img.ria.ru/images/103116/49/1031164918_0:0:2000:1126_1920x0_80_0_0_7b75a3ebf8021ae0790a915cfe76e0d0.jpg",
                followed: true,
                fullname: "Black eye",
                status: "free",
                location: {
                    country: "Galapagos",
                    city: "Tortuga"
                }
            },

        ])
    }

    return (<>
            <div>
                {props.users.map(el =>
                    <div key={el.id} className={styles.wrapper}>
                        <div className={styles.avatar_item}>
                            <img src={el.photoURL} alt="" className={styles.avatar_photo}/>
                            {
                                el.followed
                                    ?
                                    <button className={styles.button_follow} onClick={()=>props.unfollow(el.id)}>
                                        Unfollow
                                    </button>
                                    :
                                    <button className={styles.button_follow} onClick={()=>props.follow(el.id)}>
                                        Follow
                                    </button>
                            }
                        </div>
                        <div className={styles.info}>
                            <div className={styles.info_item}>
                                <div>{el.fullname}</div>
                                <div>{el.status}</div>
                            </div>
                            <div className={styles.info_item}>
                                <div>{el.location.country}</div>
                                <div>{el.location.city}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <button>Show more</button>
        </>

    );
}

export default Users;