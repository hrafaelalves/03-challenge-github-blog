import { Building2, SquareArrowOutUpRight, Users } from "lucide-react"
import { ProfileContainer, ProfileContent, ProfileDescription, ProfileDetails, GithubDetails } from "./styles"
import { Github } from "../../../../components/Icons/Github"
import { useUser } from "../../../../hooks/use-user"

export const Profile = () => {
  const { data } = useUser("hrafaelalves");

  return (
    <ProfileContainer>
      <img src={data?.avatar_url} alt="" />

      <ProfileContent>
        <ProfileDetails>
          <h1>{data?.name}</h1>

          <a href={data?.html_url}>GITHUB <SquareArrowOutUpRight /> </a>
        </ProfileDetails>

        <ProfileDescription>{data?.bio}</ProfileDescription>

        <GithubDetails>
          <li><Github />{data?.login}</li>
          <li><Building2 /> {data?.company}</li>
          <li><Users /> {data?.followers} seguidores</li>
        </GithubDetails>
      </ProfileContent>
    </ProfileContainer>
  )
}
