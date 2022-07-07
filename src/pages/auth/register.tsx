import type { NextPage } from 'next'
import Layout from '@components/Layout'
import RegisterPageModule from '@modules/AuthPageModule/RegisterModule'

const RegisterPage: NextPage = () => {
  return (
    <Layout>
      <RegisterPageModule />
    </Layout>
  )
}

export default RegisterPage
