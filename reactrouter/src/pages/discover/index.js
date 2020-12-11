import React, { memo,useEffect } from 'react';
import {renderRoutes} from "react-router-config";
import {NavLink} from "react-router-dom";
import {discoverMenu} from "../../common/local-data";
import request from "../../services/request";


export default memo(function HYDiscover(props) {
   useEffect(() => {
       request({
           url:"/banner"
       }).then(res=>{
           console.log(res);
       })
   }, [])

    const {route} =props;
    return (
        <div className="">
            {
                discoverMenu.map((item,index)=>{
                    return(
                        <div className="item" key={item.title}>
                            <NavLink to={item.link}>{item.title}</NavLink>
                        </div>
                    )
                })
            }
            {renderRoutes(route.routes)}
        </div>
    )
})