import React from "react";
import { Modal,Form,Select,Input } from 'antd';
import { editStatements } from './../../api/speech'
import './add.less'
const { TextArea } = Input;
class AddLanguage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logType:true,
            Contents:props.data.Contents,
            UseStatuz:props.data.UseStatuz,
            Types:props.data.Types,
            Id:props.data.Id
        }
    }
    componentDidMount() {
    //     console.log(this.props.data.Contents);
    //    this.setState({
    //         Contents:this.props.data.Contents
    //    })
    }
    render() {
       const handleOk = () => {
        editStatements(this).then(() => {
                this.props.setEditType(3)
            })
        }
        const handleCancel = () => {
            this.props.setEditType(3)
        }
        // 获取选中的类型
        const selectType = (e) => {
           this.setState({
                Types:e
           })
        }
        // 获取选中的状态
        const selectStyle = (e) => {
            this.setState({
                UseStatuz:e
            })
        }
        //获取输入内容
        const getContent = (e) => {
            this.setState({
                Contents:e.target.value
            })
        }
        const  typeList =  [{
            value: 0,
            label: '问候语'
          }, {
            value: 1,
            label: '企业快捷语'
          }, {
            value: 2,
            label: '个人快捷语'
          }, {
            value: 3,
            label: '自动回复'
          }];// 类型列表
        const styleList = [{
            value: 0,
            label: '未使用'
          }, {
            value: 1,
            label: '使用中'
          }];//状态列表
        
        return(
            <Modal className='modal' title="编辑语句" okText='确定' cancelText='取消' visible={this.state.logType} onOk={handleOk} onCancel={handleCancel}>
                <Form className='form'>
                    <Form.Item className='formItem'  label="选择类型：">
                        <Select className='itemSelect'  defaultValue={this.state.Types} onChange={selectType} >
                            {typeList.map(item => {
                                return <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item label="选择状态：" className='formItem' >
                        <Select  defaultValue={this.state.UseStatuz} className='itemSelect' onChange={selectStyle}>
                            {styleList.map(item => {
                                return <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item label="输入内容：">
                        <TextArea  onChange={getContent} value={this.state.Contents} rows={4} />
                    </Form.Item>
                </Form>
          </Modal>
        )
    }
}
export default AddLanguage