import type { NextPage } from 'next'
import Layout from '@components/Layout'
import LoginPageModule from '@modules/AuthPageModule/LoginModule'

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <LoginPageModule />
    </Layout>
  )
}

export default LoginPage
