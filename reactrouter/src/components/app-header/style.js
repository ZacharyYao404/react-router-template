import styled from "styled-components";

export const HeaderWrapper = styled.div`
height:75px;
font-size:14px;
color:#fff;
background-color:#242424;

.content{
    height:70px;
    background-color:blue;
    display:flex;
    justify-content:space-between;
}
.divider{
    height:5px;
    background-color:#c20c0c;
}
`
export const HeaderLeft = styled.div`
display:flex;
.logo{
  display:block;
  width:176px;
  height:69px;
}
`
export const HeaderRight= styled.div`
display:flex;
align-items:center;
`