import React, { memo } from 'react';
import { NavLink } from "react-router-dom";
import {headerLinks} from "../../common/local-data"

import { HeaderWrapper,HeaderLeft,HeaderRight } from './style';
export default memo(function HYHeader() {
    const showSelectItem=(item,index)=>{
        if(index<3){
            return(
            <NavLink to={item.link}>{item.title}</NavLink>
            )
        }else{
        return<a href={item.link}>{item.title}</a>
        }
    }
    return (
        <HeaderWrapper>
            <div className="content wrap-v1">
                <HeaderLeft>
                    <a href="/#" className="logo"></a>
                    <div className="select-list">
                        {
                            headerLinks.map((item,index)=>{
                                return(
                                    <div key={item.title}>
                                        {showSelectItem(item,index)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </HeaderLeft>
                <HeaderRight>Right</HeaderRight>
            </div>
            <div className="divider"></div>
        </HeaderWrapper>
    )
})