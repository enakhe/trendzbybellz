import { Fragment } from "react"
import DefaultHeader from "../../components/Headers/DefaultHeader"
import Showcase from "../../components/Showcase/Showcase"
import ButtomNav from "../../components/Headers/ButtomNav"
import Collections from "../../components/Collections/Collections"
import DefaultFooter from "../../components/Footer/DefaultFooter"

const Home = () => {
  return (
    <Fragment>
      <DefaultHeader />
      <ButtomNav />
      <Showcase />
      <Collections />
      <DefaultFooter />
    </Fragment>
  )
}

export default Home
