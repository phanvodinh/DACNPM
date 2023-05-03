import React, { useContext, useState } from "react";
import Add from "../img/img.png";
import { db } from "../firebase";
import {collection, getDocs, query, where} from "firebase/firestore";

const Search = () => {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(false);

    const handleSearch = async () => {
        const q = query(
            collection(db, "users"),
            where("displayName", "==", username)
        );

        try {
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                setUser(doc.data());
            });
        } catch (err) {
            setErr(true);
        }
    };

    const handleKey = (e) => {
        e.code === "Enter" && handleSearch();
    };
    return(
      <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder="tìm kiếm người dùng"
                       onKeyDown={handleKey}
                       onChange={(e) => setUsername(e.target.value)}
                       value={username}/>
            </div>
          {err && <span>Không tìm thấy người dùng!</span>}
          {user && (
            <div className="userChat">
                <img src={user.photoURL} alt=""/>
                <div className="userChatInfo">
                    <span>{user.displayName}</span>
                </div>
            </div>
          )}
      </div>
  );
};

export default Search;