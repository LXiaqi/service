import React from "react";
import  './speechArt.less'
import { Select,Button,Card,Tag,Table,Popconfirm  } from 'antd';
import { speechList,delStatements } from './../../api/speech'
import pageinations from '../../untils/pagination'
import AddLanguage from './addLanguage'
import EditLanguage from './editLanguage'
const { Option } = Select;
class SpeechArt extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          type:'',
          status:'',
          list:[],
          loading:true,
          pagination:{},
          page:1,
          pageSize:10,
          addType:0,
          editinfo:{}
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
                pagination: pageinations(res, (current,size) => {
                    this.setState({
                        page:current,
                        pageSize:size
                    },()=>{
                        this.request();
                    })
                   
                })
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
    // 删除语句
    del(id) {
        delStatements(id).then(() => {
            this.request()
        })
    };
    // 新增语句
    addStatement =() =>{
        console.log('新增');
        this.setState({
            addType:1
        })
    };
    // 编辑语句
    edit(row) {
        this.setState({
            addType:2,
            editinfo:row
        })
    }
    //新增完毕关闭模态框
    setAddType = (e) => {
        this.setState({
            addType:e
        })
        this.request()
    };
    setEditType = (e) => {
        this.setState({
            addType:e
        })
        this.request()
    }
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
                   <Button  type="primary"  className="btn_right blue" size="small" onClick={() => this.edit(item)}>编辑</Button>
                   <Popconfirm title="是否删除该语句" okText="是" cancelText="否" onConfirm={() => this.del(item.Id)}>
                            <Button  type="primary" danger className="btn_right" size="small">删除</Button>
                    </Popconfirm>
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
                    <Button className='btn green' type="dashed" onClick={this.addStatement}>新增</Button>
                </Card>
                <Card>
                    <Table scroll={{ y: 600 }}  pagination={this.state.pagination} rowKey={row => row.Id} columns={columns} dataSource={this.state.list} loading={this.state.loading} ></Table>
                </Card>
                {this.state.addType === 1 ? <AddLanguage setAddType={this.setAddType}  /> : this.state.addType === 2 ? <EditLanguage setEditType={this.setEditType} data={this.state.editinfo} /> : null }
            </div>
        )
    }
}
export default SpeechArt;