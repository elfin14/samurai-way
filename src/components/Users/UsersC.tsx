import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css';
import axios from "axios";
import avatarDefault from "./../../assets/img/userDefault.png"

class UsersC extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        return <div>
            <div>
                {this.props.users.map(el =>
                    <div key={el.id} className={styles.wrapper}>
                        <div className={styles.avatar_item}>
                            <img src={el.photos.small !== null ? el.photos.small : avatarDefault} alt=""
                                 className={styles.avatar_photo}/>
                            {
                                el.followed
                                    ?
                                    <button className={styles.button_follow} onClick={() => this.props.unfollow(el.id)}>
                                        Unfollow
                                    </button>
                                    :
                                    <button className={styles.button_follow} onClick={() => this.props.follow(el.id)}>
                                        Follow
                                    </button>
                            }
                        </div>
                        <div className={styles.info}>
                            <div className={styles.info_item}>
                                <div>{el.name}</div>
                                <div>{el.status}</div>
                            </div>
                            <div className={styles.info_item}>
                                <div>{"el.location.country"}</div>
                                <div>{"el.location.city"}</div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
            <button>Show more</button>
        </div>
            ;
    }
}

export default UsersC;