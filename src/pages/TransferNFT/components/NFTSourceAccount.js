import React, {useState} from 'react';
import Styles from './NFTSourceAccount.module.css';
import CardWrap from "../../../UIElemnts/CardWrap";
import {Image} from "react-bootstrap";
import userAvatar from '../../../assets/images/userAvatar.svg';
import user1 from '../../../assets/images/users/u1.svg';
import user2 from '../../../assets/images/users/u2.svg';
import user3 from '../../../assets/images/users/u3.svg';
import user4 from '../../../assets/images/users/u4.svg';
import user5 from '../../../assets/images/users/u5.svg';
import checkmarkicon from "../../../assets/images/checkmark.svg";

const NFTSourceAccount = () => {
    const usersObject = [
        {
            id: 1,
            userAvatar: user1,
            userText: "Treasure one"
        },
        {
            id: 2,
            userAvatar: user2,
            userText: "Day on kdjhf"
        },
        {
            id: 3,
            userAvatar: user3,
            userText: "Treasuor.dpsl"
        },
        {
            id: 4,
            userAvatar: user4,
            userText: "Day one9999"
        },
        {
            id: 5,
            userAvatar: user5,
            userText: "Treasurkdhni"
        },
    ]

    const [users, setUsers] = useState({
        activeMark: null,
        allUsers: usersObject
    });

    const toggleCheck = (index) => {
        setUsers({...users, activeMark: users.allUsers[index]});
    };

    const toggleCheckMark = (index) => {
        if(users.allUsers[index] === users.activeMark){
            return users.activeMark = true;
        }
    }


    return (
        <CardWrap className={`${Styles.responsiveSrcAcc}`}>
            <div className={`${Styles.srcAcc} d-flex align-items-center`}>
                <span>NFTs on </span>
                <div className={`${Styles.user} d-flex align-items-center ml-2`}>
                    <Image src={userAvatar}/>
                    <span className="name ml-2">Alice_Stash</span>
                </div>
            </div>

            <div className="d-flex align-items-center flex-wrap">
                {users.allUsers.map((user, index) => (
                    <div className={Styles.userItem} key={index} onClick={() => toggleCheck(index)}>
                        <div
                            className={`${Styles.userThumb} d-flex align-items-center justify-content-center`}
                        >
                            <Image src={user.userAvatar} fluid/>
                            <button className={Styles.infoBtn}> i</button>
                            {toggleCheckMark(index) && (
                                <div className={Styles.chekMark}>
                                    <Image src={checkmarkicon} fluid/>
                                </div>
                            )}
                        </div>
                        <p>{user.userText}</p>
                    </div>
                ))}
            </div>
        </CardWrap>
    );
};

export default NFTSourceAccount;
