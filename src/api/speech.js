import http from '../untils/request'
export async function speechList(that) {
    const res = await http.get('/Greetings/GetPageData?start='+ that.state.page + '&length=' + that.state.pageSize +'&types='+ that.state.type + '&useStatuz='+that.state.status)
    return res;
}