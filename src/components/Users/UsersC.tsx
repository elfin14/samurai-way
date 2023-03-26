import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from './users.module.css';
import axios from "axios";
import avatarDefault from "./../../assets/img/userDefault.png"

class UsersC extends React.Component<UsersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return <div>
            <div className={styles.wrapButtonPage}>
                {pages.length < 10 ? pages.map(p => {
                        return <span className={this.props.currentPage === p ? styles.selectedPage : styles.buttonPage}
                                     onClick={(e) => {
                                         this.onPageChange(p)
                                     }}>
                        {p}
                    </span>
                    })
                    : pages.slice(0, 10).map(p => {
                        return <span className={this.props.currentPage === p ? styles.selectedPage : styles.buttonPage}
                                     onClick={(e) => {
                                         this.onPageChange(p)
                                     }}>
                        {p}
                    </span>
                    })}
                {pages.length < 10 ? "":<span>...</span>}
            </div>
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

    }
}
export default UsersC;