import { Building2, SquareArrowOutUpRight, Users } from "lucide-react"
import { DefaultContainer } from "../../styles/global"
import { ContentContainer, FormSearch, ProfileContainer, ProfileDetails, ProfileContent, PublicationsContainer, SocialLinks, ProfileDescription } from "./styles"
import { Github } from "../../components/Icons/Github"
import { Card } from "../Post/Card"

export const Home = () => {
  return (
    <DefaultContainer>
      <ProfileContainer>
        <img src="https://github.com/hrafaelalves.png" alt="" />

        <ProfileContent>
          <ProfileDetails>
            <h1>Hugo Rafael Alves</h1>

            <a href="https://github.com/hrafaelalves">GITHUB <SquareArrowOutUpRight /> </a>
          </ProfileDetails>

          <ProfileDescription>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</ProfileDescription>

          <SocialLinks>
            <a href="http://"><Github />hrafaelalves</a>
            <a href="http://"><Building2 /> Ab Inbev</a>
            <a href="http://"><Users /> 8 seguidores</a>
          </SocialLinks>
        </ProfileContent>
      </ProfileContainer>

      <PublicationsContainer>
        <h3>Publicações</h3>

        <span>6 publicações</span>
      </PublicationsContainer>

      <FormSearch>
        <input type="text" placeholder="Buscar conteúdo" />
      </FormSearch>

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
