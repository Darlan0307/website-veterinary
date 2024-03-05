import HeaderApp from "./Header/HeaderApp"
import Rodape from "./Rodape"
import SectionForm from "./SectionForm"
import SectionSkills from "./SectionSkills"
import SectionTestimony from "./SectionTestimony"
import SectionServices from "./sectionServices"

const WebSite = () => {
  return (
    <>
      <HeaderApp/>
      <SectionServices/>
      <SectionSkills/>
      <SectionTestimony/>
      <SectionForm/>
      <Rodape/>
    </>
  )
}

export default WebSite