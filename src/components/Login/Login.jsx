import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import 'antd/dist/antd.css'
import './Login.styl'

const FormItem = Form.Item

class LoginForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div className='Login'>
        <Form onSubmit={this.handleSubmit} className='login-form'>
          <FormItem>
            {getFieldDecorator('userName', {
              rules: [ { required: true, message: 'Please input your username!' } ]
            })(
              <Input prefix={<Icon type='user' style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder='' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [ { required: true, message: 'Please input your Password!' } ]
            })(
              <Input prefix={<Icon type='lock' style={{ color: 'rgba(0,0,0,.25)' }} />} type='password' placeholder='' />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className='login-form-forgot' href=''>Forgot password</a>
            <Button type='' htmlType='submit' className='login-form-button'>
              Log in
            </Button>
            Or <a href=''>register now!</a>
          </FormItem>
        </Form>
      </div>
    )
  }
}
const Login = Form.create()(LoginForm)

export default Login
