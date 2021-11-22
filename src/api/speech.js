import http from '../untils/request'
import { message} from 'antd';
// 获取语句列表
export async function speechList(that) {
    const res = await http.get('/Greetings/GetPageData?start='+ that.state.page + '&length=' + that.state.pageSize +'&types='+ that.state.type + '&useStatuz='+that.state.status)
    return res;
}
// 删除语句
export async function delStatements(id) {
    let data = {
        Ids:[id]
    }
    const res = await http.post('/Greetings/BatchDel',data)
    if(res.result === 0) {
      message.success(res.msg);
        return res;
    } else {
      message.warning(res.msg);
      return res
    }
}
// 新增语句
export async function addStatements(that) {
  let data = {
    Contents:that.state.Contents,
    UseStatuz:that.state.UseStatuz,
    Types:that.state.Types
  }
  const res = await http.post('/Greetings/Add',data)
  if(res.result === 0) {
    message.success(res.msg);
      return res;
  } else {
    message.warning(res.msg);
    return res
  }
}
// 编辑语句
export async function editStatements(that) {
  let data = {
    Id:that.state.Id,
    Contents:that.state.Contents,
    UseStatuz:that.state.UseStatuz,
    Types:that.state.Types
  }
  const res = await http.post('/Greetings/Update',data)
  if(res.result === 0) {
    message.success(res.msg);
      return res;
  } else {
    message.warning(res.msg);
    return res
  }
}