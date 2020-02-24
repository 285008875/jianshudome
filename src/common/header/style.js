import styled from "styled-components";
import logo from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
    height:56px;
    position:relative;
    border-bottom:1px solid #f0f0f0;
    z-index:1
`
export const Logo = styled.a.attrs({
    href: '/'
})`
    position:absolute;
    top:0px;
    left:0px;
    display:block;
    width:100px;
    height:56px;
    background:url(${logo}) ;
    background-size:contain;
`

export const Nav = styled.div`
    width:960px;
    height:100%;
    padding-right:70px;
    boeder-sizing:border-box;
    margin:0 auto;
`

export const NavItem = styled.div`
    line-height:56px;
    padding:0px 15px;
    fony-size:17px;
    color:#333;
   &.left{
       float:left
   }
   &.right{
       float:right
       color:#969696
   }
   &.active{
       color:#ea6f5a;
   }
`
export const SearchWrapper = styled.div`
    position:relative;
    float:left;

    .zoom{
        position:absolute;
        right:1px;
        bottom:5px;
        width:30px;
        line-height:31px;
        border-radius:30px;
        text-align:center;
        &.focused{
            background:#777;
            color:#fff; 

        }
    }

`

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    .slide-enter{
        width:160px;
        transition:all 1s ease-out;
    }
    .slide-enter-active{
        width:240px;
    }
    .slide-exit{
        transition:all 1s ease-out;
    }
    .slide-exit-active{
        width:160px;
    }

    width:160px;
    height:38px;
    padding:0 30px 0 20px;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    border:none;
    outline:none;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    color:#666;
    &::placeholder{
        color:#999;s
    }
    &.focused{
        width:240px;
    }
`
export const SearchInfo = styled.div`
    position :absolute;
    left:10px;
    top:56px;
    width:220px;
    padding:0 20px;
    background:#fff;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
`
export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch = styled.span`
    float :right;
    font-size:12px;
    .spin{
        display:block;
        font-size:8px;
        margin-right:5px;
        float:left;
        transition:all .2s ease-in;
        transition-origin:center center;
    }

`
export const SearchInfoList = styled.span`
    overflow:hidden;
`
export const SearchInfoItem = styled.a`
    line-height:20px;
    display:block
    float:left;
    margin-right:10px;
    margin-bottom:10px;
    padding:0 5px;
    border:1px solid #ddd;
    color:#969696;
    border-radius:3px;
    font-size:12px;

`
export const Addtion = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`
export const Button = styled.div`
    float:right;
    margin-top:9px;
    margin-right:20px;
    padding:0 20px;
    line-height:38px;
    border-radius:19px;
    border:1px solid #ec6149;
    font-sizing:14px;
    &.reg{
        color:#ec6149
    }
    &.writting{
        color:#fff;
        background:#ec6149;
    }
`