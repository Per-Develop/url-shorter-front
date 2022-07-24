import Layout from '../components/Layout'

const AboutPage = () => (
  <Layout title="About | Url Shorter WebApp">
    <div className="flex min-h-screen justify-center items-center">
      <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="launcher"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Launcher group ❤️</div>
          <p className="text-grey-darker text-base">
            This is Launcher group project. We are using Next.js, TailwindCSS,
            and Firebase.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
