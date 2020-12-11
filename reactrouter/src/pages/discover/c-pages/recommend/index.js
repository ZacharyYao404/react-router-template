import React, { memo} from 'react';
import HYTopBanner from "./c-cpns/top-banner";
import {RecommendWrapper} from "./style"
function HYRecommend(props) {

    return (
        <RecommendWrapper>
           <HYTopBanner></HYTopBanner>
            </RecommendWrapper>
    )
}
export default memo(HYRecommend);


/*const mapStateToProps=state=>({
    topBanners:state.recommend.topBanners
});
const mapDispatchToProps=dispatch=>({
    getBanners:()=>{
        dispatch(getTopBannerAction())
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(memo(HYRecommend));
*/