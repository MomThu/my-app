import { Button } from 'antd'
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1>This is home screen</h1>
      <div>
        <Link to="/login">
          <Button>Login</Button>
        </Link>
      </div>
      <div>
        <Link to="/detail">
          <Button>Go to app</Button>
        </Link>
      </div>
    </>
  )
}
