import type { NextPage } from 'next'
import Layout from '@components/Layout'
import HomePageModule from '@modules/HomePageModule'

const HomePage: NextPage = () => {
  return (
    <Layout>
      <HomePageModule />
    </Layout>
  )
}

export default HomePage
