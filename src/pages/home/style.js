import styled from "styled-components";

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;

`

export const HomeLeft = styled.div`
    float :left;
    margin-left:15px;
    width:625px;
    padding-top:15px;
    
    .banner-img{
        width:625px;
        height:270px;
    }
`

export const HomeRight = styled.div`
    float :right;
    padding-top:15px;
    width:280px;
    ${'' /* background:blue; */}
    height:228px;
`
export const TopicWrapper = styled.div`
    padding :20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc  ;
`
export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    margin-left:18px;
    height:32px;
    line-height:32px;
    font-size:14px;
    padding-right:10px;
    color:#000;
    border:1px solid #dcdcdcs;
    border-radius:4px;
    margin-bottom:10px;
    .top-pic{
        width:32px;
        display:block;
        float:left;
        right:32px;
        padding-right:10px;  
    }
`
export const ListItem = styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #f0f0f0;
    .pic{
        width:125px;
        display:block;
        float:right;
        height:100px;
        border-radius:10px; 
    } 
`

export const ListInfo = styled.div`
    width:500px;
    float:left;
    .title{
        line-height:27px;
        font-size:18px;
        font-weight:bold;
        color:#333;
    }
    .desc{
        line-height:24px;
        font-size:13px;
        color:#999;

    }
`
export const RecommendWrapper = styled.div`
    margin:0 0;
    width:280px;
`
export const RecommendItem = styled.a`
    height:50px;
    display:block;
    width:280px;
    margin-bottom:5px;
    background:url(${(props) => props.imgUrl});
    background-size:contain;
`

export const LoadMore = styled.div`
    height:35px;
    display:block;
    width:100%;
    margin:20px 0;
    padding-top:20px;
    background:#a5a5a5;
    border-size:border-box;
    text-align:center;
    border-radius:20px;
    color:#fff;
`
export const BackTop = styled.div`
    width:60px;
    height:60px;
    position:fixed;
    right:80px;
    bottom:50px;
    line-height:60px;
    text-align:center;
    border:1px solid #ccc;
    font-size:14px;

`
