import React, { memo, useEffect,useState,useCallback } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { getTopBannerAction } from "../../store/actionCreators";
import { Carousel } from 'antd';
import {
    BannerWrapper,
    BannerLeft,
    BannerRight,
    BannerControl
} from "./style";
export default memo(function HYTopBanner() {
   const[currentIndex,setCurrentIndex]=useState(0);

    const { topBanners } = useSelector(state => ({
        topBanners: state.getIn(["recommend", "topBanners"])
    }));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch])

    const afterChange=useCallback(
        (from,to) => {
            onChange()
        },
        [],
    )
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
   
    const contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    const bannerChange=useCallback(
        (from,to) => {
            setCurrentIndex(to)
        },
        [],
    )
    return (
        <BannerWrapper>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel afterChange={onChange} beforeChange={bannerChange}>
                        {
                            topBanners.map((item, index) => {
                                return (
                                    <div key={item.imageUrl}>
                                      <img className="image" src={item.imageUrl} alt={item.typeTitle}/>
                                    </div>
                                )
                            })
                        }
                    </Carousel>
                </BannerLeft>
                <BannerRight></BannerRight>
            </div>
        </BannerWrapper>
    )
})
