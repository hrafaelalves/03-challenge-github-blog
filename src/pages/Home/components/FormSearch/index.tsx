import { InputSearch, PublicationsContainer } from "./styles"

export const FormSearch = () => {
  return (
    <>
      <PublicationsContainer>
        <h3>Publicações</h3>

        <span>6 publicações</span>
      </PublicationsContainer>

      <InputSearch>
        <input type="text" placeholder="Buscar conteúdo" />
      </InputSearch>
    </>
  )
}
