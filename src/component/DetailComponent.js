import { Button, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { baseUrl } from '../shared/baseUrl'
import { useNavigate } from "react-router-dom";


export default function Detail() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      await fetch(baseUrl + 'auth', {
        credentials: 'include'
      })
        .then(res => res.json())
        .catch(err => navigate('/login'));
    } catch (error) {
      console.log('Error: ', error) 
    } finally { // rwa
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const logout = async () => { 
    setLoading(true);
    try {
      await fetch(baseUrl + 'users/logout', {
        credentials: 'include'
      })
        .then(res => res.json())
        .then(res => navigate('/login'))
        .catch(err => navigate('/login'));
    } catch (error) {
      console.log('Error: ', error)
    } finally {
      setLoading(false);
    }
  }
  return (
    loading ? <Spin/> : <div>
      <h1>Welcome to my app</h1>
      <Button onClick={() => logout()}>Log out</Button>
    </div>
  )
}
