/**
 * Created by linxin on 2017/3/11.
 */
export default {
    getEventList(states) {
        return states.event;
    },
    getToDo(states){
        return states.event.filter(function (d) {
            if (d.type === 1) {
                return d;
            }
        });
    },
    getDone(states){
        return states.event.filter(function (d) {
            if (d.type === 2) {    // type == 2表示已完成
                return d;          // 返回已完成的事件
            }
        });
    },
    getCancel(states){
        return states.event.filter(function (d) {
            if (d.type === 3) {
                return d;
            }
        });
    }
};