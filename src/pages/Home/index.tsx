import { DefaultContainer } from "../../styles/global"
import { Profile } from "./components/Profile"
import { FormSearch } from "./components/FormSearch"
import { IssuesList } from "./components/IssuesList"
import { IssuesProvider } from "../../contexts/IssuesContext"

export const Home = () => {
  return (
    <DefaultContainer>
      <IssuesProvider>
        <Profile />
        <FormSearch />
        <IssuesList />
      </IssuesProvider>
    </DefaultContainer>
  )
}
