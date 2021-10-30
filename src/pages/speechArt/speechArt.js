import React from "react";
import  './speechArt.less'
import { Select,Button,Card,Tag,Table } from 'antd';
import { speechList } from './../../api/speech'
import untils from '../../utils/pagination'
const { Option } = Select;
class SpeechArt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          type:'',
          status:'',
          page:1,
          pageSize:10,
          list:'',
          loading:true,
          pagination:{}
        }
    }
    componentDidMount() {
        this.request()
    };
    // 列表请求
    request = () => {
        this.setState({
            loading:true
        })
        speechList(this).then(res => {
            this.setState({
                list:res.data,
                loading:false,
                
            })
        })
    };
    //选择器的change事件（状态和类型）
    TypeChange = (e) => {
        this.setState({
            type:e
        },() =>{
            this.request()
        })
    };
    StatusChange = (e) =>{
        this.setState({
            status:e
        },()=>{
            this.request()
        })
    };
    render() {
        const optionType =[
        {
            value:'',
            title:'全部'
        },{
            value:0,
            title:'问候语'
        },{
            value:1,
            title:'企业快捷语'
        },{
            value:2,
            title:'个人快捷语'
        },{
            value:3,
            title:'自动回复'
        }];
        const optionStatus = [
        {
            value:'',
            title:'全部'
        }, 
        {
            value:0,
            title:'未使用'
        },{
            value:1,
            title:'使用中'
        },]
        const columns = [
            {
                align: 'center',
                title: '内容',
                dataIndex: 'Contents',
                width: 400,
            },
            {
                align: 'center',
                title: '类型',
                dataIndex: 'Types',
                width: 80,
                render: (e) => <Tag>{e === 0 ? '问候语' : e === 1 ? '企业快捷语' : e === 2 ? '个人快捷语' :'自动回复'}</Tag>
            },
            {
                align: 'center',
                title: '状态',
                dataIndex: 'UseStatuz',
                width: 80,
                render: (e) => <Tag>{e === 0 ? '未使用' : '使用中'}</Tag>
            },
            {
                align: 'center',
                title: '创建人',
                dataIndex: 'CreateUser',
                width: 80,
            },
            {
                align: 'center',
                title: '操作',
                width: 120,
                render: (val,item) => <div>
                   <Button  type="primary"  className="btn_right blue" size="small">编辑</Button>
                    <Button type="primary" danger className="btn_right" size="small">删除</Button>
                </div>
            },
        ];
        return(
            <div className='speech'>
                <Card className='search'>
                    <Select defaultValue="全部" className='select' onChange={this.TypeChange} >
                        {optionType.map(item => {
                            return <Option key={item.value} value={item.value}>{item.title}</Option>
                        })}
                    </Select>
                    <Select defaultValue="全部" className='select' onChange={this.StatusChange} >
                        {optionStatus.map(item => {
                            return <Option key={item.value} value={item.value}>{item.title}</Option>
                        })}
                    </Select>
                    <Button className='btn green' type="dashed">新增</Button>
                </Card>
                <Card>
                    <Table  pagination={this.state.pagination} rowKey={row => row.Id} columns={columns} dataSource={this.state.list} loading={this.state.loading} ></Table>
                </Card>
            </div>
        )
    }
}
export default SpeechArt;