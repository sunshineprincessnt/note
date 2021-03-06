/**
 * Created by linxin on 2017/1/11.
 */
export default {
    addevent: ({commit}, param) => commit('ADDEVENT', {items: param}),
    // 移至已完成
    eventdone: ({commit}, param) => commit('EVENTDONE', {id: param}),
    eventtodo: ({commit}, param) => commit('EVENTTODO', {id: param}),
    eventcancel: ({commit}, param) => commit('EVENTCANCEL', {id: param}),
    clearevent: ({commit}) => commit('CLEAREVENT'),
    // 删除
    delevent: ({commit}, param) => commit('DELEVENT', param),
    editevent: ({commit}, param) => commit('EDITEVENT', param),
    uploadevent: ({commit}, param) => commit('UPLOADEVENT', param)
}