import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../shared/baseUrl'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      await fetch(baseUrl + 'auth', {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(res => navigate('/detail'))
        .catch(err => console.error(err));
    } catch (error) {
      console.log('Error: ', error)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const onFinish = async (values) => {
    await fetch(baseUrl + 'users/login', {
      method: 'POST',
      credentials: "include",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      .then(res => res.json())
      .then(res => {
        if (res.message) navigate('/detail')})
      .catch(err => console.error(err));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;