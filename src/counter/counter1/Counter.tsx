import React from "react";
import s from "./Counter.module.css"

export function Counter(){
    return(
        <div className={s.counter}>
            <Numbers/>
        </div>
    )
};

function Numbers(){
    return(
        <div></div>
    )
}