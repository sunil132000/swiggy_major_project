

import { useContext } from "react";
import { URL_IMG } from "../Contants";
import UserContext from "../Utilis/userContext";

export const Cart = (props) => {
    const { user } = useContext(UserContext);

    return (

        <>


            <div className="p-2 py-4 bg-lime-300 border-2 border-rose-600 m-2">
                // <img alt="cart" src={URL_IMG
                    + props?.restaurant?.info?.cloudinaryImageId} />
                <h1> {props?.restaurant?.info?.name}</h1>
                <h1>{props?.restaurant?.info?.locality}</h1>
                <h1>{props?.restaurant?.info?.avgRating}</h1>
                <h1>{user.name}</h1>
            </div >


        </>
    )
}