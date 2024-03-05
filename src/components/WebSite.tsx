import HeaderApp from "./Header/HeaderApp"
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
    </>
  )
}

export default WebSite