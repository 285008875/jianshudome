
import { fromJS } from 'immutable';
import { constants } from './index.js'
const defaultState = fromJS({

    title: '极致精简的webservice例子--Java版',
    content: '<img src="https://upload-images.jianshu.io/upload_images/14704495-75ccbdcf52c136d4?imageMogr2/auto-orient/strip%7CimageView2/2/w/640/format/webp" /><p>宋慧乔结婚一年多以来鲜有新闻流出，大多时间里，她都是和宋仲基两个人旅行，待在一起享受二人世界，事业上也都慢了下来。</p><p>然而最近，宋慧乔结束了假期，投入到了工作之中，剧中和老公的好朋友朴宝剑谈起了"姐弟恋"，剧外依然和老公热恋着。真是让人忍不住感慨，乔妹太幸福了吧，又"谈恋爱"了，剧里朴宝剑，剧外宋仲基！</p><p>而乔妹的婚后生活，更是强行给单身狗10000+的暴击。2018年9月，宋仲基登上韩国一家杂志的封面，接受采访时，记者提到"结婚之后就不能回到恋爱时那样了"的时候，他立马回应："我不认为我们的恋爱结束了。"对于许多人而言，婚姻是爱情的坟墓。意思是结婚之后的两个人，会因为各种琐事而消磨彼此的感情。会因为开始看见并认清对方的缺点而发生争吵。但真正的感情是不怕生活的消磨的，是不怕看见对方的缺点的。时间会告诉你答案，时间会留下岁月雕琢的痕迹。就像wuli宋仲基，不管是在婚前婚后都会主动买花给妻子，使生活充满浪漫。</p>'

});

export default (state = defaultState, action) => {
    // console.log(action)
    // immutable对象的set方法会结合之前immutable对象的值
    // 和设置的值，返回一个全新的对象
    switch (action.type) {
        case constants.CHANGE_DETAIL:
            return state.merge({
                title: action.title,
                content: action.content
            })
        default:
            return state;
    }
}  