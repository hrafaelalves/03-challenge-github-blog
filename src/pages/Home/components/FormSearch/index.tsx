import { InputSearch, PublicationsContainer } from "./styles"
import { ChangeEvent } from "react";

interface FormSearchProps {
  onSearch: (search: string) => void;
  total_posts: number;
  search: string
}

export const FormSearch = ({ onSearch, total_posts, search }: FormSearchProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearch(value)
  }

  return (
    <>
      <PublicationsContainer>
        <h3>Publicações</h3>

        <span>{total_posts} publicações</span>
      </PublicationsContainer>

      <InputSearch>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={handleChange}
        />
      </InputSearch>
    </>
  )
}
