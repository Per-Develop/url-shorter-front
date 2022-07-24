import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Url Shorter WebApp">
    <div className="flex h-96 justify-center items-center">
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <h1>Hello Dear </h1>
        <p>
          This is Url Shorter WebApp.
        </p>
      </div>
    </div>

  </Layout>
)

export default IndexPage
