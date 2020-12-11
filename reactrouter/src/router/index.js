import React from "react";
import { Redirect } from "react-router-dom";
import HYDiscover from "../pages/discover/index.js";
import HYMine from "../pages/mine/index.js";
import HYFriend from "../pages/friend/index.js";
import HYRecommend from "../pages/discover/c-pages/recommend/index";
import HYRanking from "../pages/discover/c-pages/ranking/index";
import HYDjradio from "../pages/discover/c-pages/djradio/index";
import HYAlbum from "../pages/discover/c-pages/album/index";
import HYArtist from "../pages/discover/c-pages/artist/index"

const routes = [
    {
        path: "/",
        exact:true,
        render:()=>(
            <Redirect to="/discover"/>
        )
    },
    {
        path: '/discover',
        component: HYDiscover,
        routes:[
            {
                path:"/discover",
                exact:true,
               render:()=>(
                   <Redirect to={"/discover/recommend"}/>
               )
            },
            {
                path:"/discover/recommend",
                component:HYRecommend
            },
            {
                path:"/discover/ranking",
                component:HYRanking
            },
            {
                path:"/discover/djradio",
                component:HYDjradio
            },
            {
                path:"/discover/artist",
                component:HYArtist
            },
            {
                path:"/discover/album",
                component:HYAlbum
            }
        ]

    },
    {
        path: "/mine",
        component: HYMine
    },
    {
        path: "/friend",
        component: HYFriend
    },


];
export default routes;