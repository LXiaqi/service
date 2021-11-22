import React from "react";
import { Modal,Form,Select,Input } from 'antd';
import { addStatements } from './../../api/speech'
import './add.less'
const { TextArea } = Input;
class AddLanguage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            logType:true,
            Contents:'',
            UseStatuz:'',
            Types:''
        }
    }
    render() {
       const handleOk = () => {
            addStatements(this).then(() => {
                this.props.setAddType(3)
            })
        }
        const handleCancel = () => {
            this.props.setAddType(3)
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
            <Modal className='modal' title="新增语句" okText='确定' cancelText='取消' visible={this.state.logType} onOk={handleOk} onCancel={handleCancel}>
                <Form className='form'>
                    <Form.Item className='formItem'  label="选择类型：">
                        <Select className='itemSelect'  defaultValue="全部" onChange={selectType}>
                            {typeList.map(item => {
                                return <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item label="选择状态：" className='formItem' >
                        <Select  defaultValue="全部" className='itemSelect' onChange={selectStyle}>
                            {styleList.map(item => {
                                return <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>
                            })}
                        </Select>
                    </Form.Item>
                    <Form.Item label="输入内容：" onChange={getContent}>
                        <TextArea rows={4} />
                    </Form.Item>
                </Form>
          </Modal>
        )
    }
}
export default AddLanguage