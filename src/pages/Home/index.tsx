import { DefaultContainer } from "../../styles/global"
import { ContentContainer } from "./styles"
import { Card } from "../Post/Card"
import { Profile } from "./components/Profile"
import { FormSearch } from "./components/FormSearch"

export const Home = () => {
  return (
    <DefaultContainer>
      <Profile />

      <FormSearch />

      <ContentContainer>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </ContentContainer>
    </DefaultContainer>
  )
}
