import { DefaultContainer } from "../../styles/global"
import { ContentContainer, FormSearch, ProfileContainer, ProfileDetails, PublicationsContainer, SocialLinks } from "./styles"

export const Home = () => {
  return (
    <DefaultContainer>
      <ProfileContainer>
        <img src="https://github.com/hrafaelalves.png" alt="" />

        <ProfileDetails>
          <div>
            <h1>Hugo Rafael Alves</h1>

            <a href="http://">GITHUB</a>
          </div>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

          <SocialLinks>
            <a href="http://">hrafaelalves</a>
            <a href="http://">hrafaelalves</a>
            <a href="http://">hrafaelalves</a>
          </SocialLinks>
        </ProfileDetails>
      </ProfileContainer>

      <PublicationsContainer>
        <h3>Publicações</h3>

        <span>6 publicações</span>
      </PublicationsContainer>

      <FormSearch>
        <input type="text" placeholder="Buscar conteúdo" />
      </FormSearch>

      <ContentContainer>
        <div>card</div>
        <div>card</div>
      </ContentContainer>
    </DefaultContainer>
  )
}
