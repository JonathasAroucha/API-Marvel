import React, { useEffect, useState } from "react"
import { FiChevronDown } from 'react-icons/fi'
import { useCallback } from "react/cjs/react.development"
import api from "../../services/api"
import SearchInput from '../../SearchInput'
import { Container, CardList, Card, ButtonMore, Title } from "./styles"

const Characters = () => {
    const [text, setText] = useState([])
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        if (text) {
            api
                .get(`characters/${text}`)
                .then((response) => setCharacters(response.data.data.results))
                .catch((err) => {
                    console.error("ops! ocorreu um erro" + err)
                })
        }

    }, [text])

    const handleMore = useCallback(async () => {
        try {
            const offset = characters.length
            const response = await api.get('characters', {
                params: {
                    offset,
                }
            })
            setCharacters([...characters, ...response.data.data.results])

        } catch (err) {
            console.log(err)
        }
    }, [characters])

    return (
        <Container>

            <Title><h1>Marvel characters</h1><SearchInput value={text} onChange={(search) => setText(search)} /></Title>
            <CardList>
                {characters.map(character => {
                    return (
                        <Card key={character.id} thumbnail={character.thumbnail}>
                            <div id='img' />
                            <h2>{character.name}</h2>
                            {/* <p>{character.description}</p> */}
                            <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt="Imagem" />

                        </Card>
                    )
                })
                }
            </CardList>
            <ButtonMore onClick={handleMore}>
                <FiChevronDown size={20} />
                Mais
                <FiChevronDown size={20} />
            </ButtonMore>
        </Container>
    )
}

export default Characters