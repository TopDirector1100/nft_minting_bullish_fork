import { Link } from "react-router-dom"
import Layout from "../../components/layout"
import Introduction from "components/introduction"
import Club from "components/club"
import "./style.scss"
import Toolbar from "components/toolbar"
import Roadmap from "components/roadmap"
import FAQ from "components/faq"

const Home = () => {
  return (
    <Layout>
      <Introduction />
      <Club />
      <div className="big-img"></div>
      <Toolbar />
      <Roadmap />
      <FAQ />
    </Layout>
  )
}

export default Home
