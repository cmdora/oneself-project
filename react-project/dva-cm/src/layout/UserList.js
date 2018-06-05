import React, {Component} from 'react'
import { Table, Button, Popconfirm, Modal, Form, Input } from 'antd';
import { connect } from 'dva';
const FormItem = Form.Item

const CollectionCreateForm = Form.create()(
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, message, flag, onEdit } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Create a new collection"
          okText="Create"
          onCancel={onCancel}
          onOk={flag == '' ? onCreate : onEdit}
        >
          <Form layout="vertical">
            <FormItem label="Name">
              {getFieldDecorator('name', {
                initialValue: message.name || '',
                rules: [{ required: true, message: 'Please input the title of collection!' }],
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="Age">
              {getFieldDecorator('age', {
                initialValue:message.age || ''
              })(<Input type="textarea" />)}
            </FormItem>
            <FormItem label="Address">
              {getFieldDecorator('address', {
                initialValue: message.address || ''
              })(<Input type="textarea" />)}
            </FormItem>
          </Form>
        </Modal>
      );
    }
  }
);

class UserList extends Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '30%'
    }, {
      title: 'age',
      dataIndex: 'age',
    }, {
      title: 'address',
      dataIndex: 'address',
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.state.dataSource.length > 1 ?
          (
            <div>
              <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(record.key)}>
                <a href="javascript:;">Delete</a>
              </Popconfirm>
              <span title="Sure to edit?" onClick={() => {
                this.setState({
                  visible: !this.state.visible
                })
                this.setState({
                  flag: 'ok',
                  message: Object.assign({}, this.state.message, record)
                })
              }}>
                <a href="javascript:;">Edit</a>
              </span>
            </div>
          ) : null
        );
      },
    }];

    this.state = {
      dataSource: [{
        key: '0',
        name: 'Edward King 0',
        age: '32',
        address: 'London, Park Lane no. 0',
      }, {
        key: '1',
        name: 'Edward King 1',
        age: '320938024',
        address: 'London, Park Lane no. 1',
      }],
      message: {
        key: null,
        name: '',
        age: '',
        address: ''
      },
      count: 2,
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      flag: ''
    };
  }
  onCellChange = (key, dataIndex) => {
    return (value) => {
      const dataSource = [...this.state.dataSource];
      const target = dataSource.find(item => item.key === key);
      if (target) {
        target[dataIndex] = value;
        this.setState({ dataSource });
      }
    };
  }
  onDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleCreate = () => {
    let { dataSource, message } = this.state
    const form = this.formRef.props.form;
    let arr = []

    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      values = Object.assign({}, values, {
        key: (this.state.dataSource.length + 1) + ''
      })
      console.log('Received values of form: ', values);
      arr.push(values)

      this.setState({
        dataSource: this.state.dataSource.concat(arr)
      }, () => {
        console.log(this.state.dataSource)
      })
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  handleEdit = () => {
    let { dataSource, message, records } = this.state
    const form = this.formRef.props.form;
    let arr = []

    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      values = Object.assign({}, message, values)
      if (message.key == values.key) {
        var newData = dataSource.map((item) => {
          if (item.key == message.key) {
            return values;
          } else {
            return item;
          }
        });


        this.setState({
          dataSource: newData,
          flag: ''
        })
      }
      form.resetFields();
      this.setState({ visible: false });
    });
  }
  render() {
    const { dataSource, visible, confirmLoading, ModalText, message, flag } = this.state;
    const columns = this.columns;
    return (
      <div>
        {/*<Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>*/}
        <Button type="primary" onClick={this.showModal}>添加内容</Button>
        <Table bordered dataSource={dataSource} columns={columns} />
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          onEdit={this.handleEdit}
          message={message}
          flag={flag}
        />
      </div>
    );
  }
}

export default UserList
