import { Play } from 'phosphor-react'
import {
  CountContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdowButton,
  TaskInput,
} from './style'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor=""> vou trabalhar em </label>
          <TaskInput id="text" placeholder="Dê um nome para sua tarefa" />
          <label htmlFor="">durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="number"
            step={5}
            min={5}
            max={60}
            id="minutosAmount"
          />
          <span>minutos.</span>
        </FormContainer>

        <CountContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountContainer>

        <StartCountdowButton type="submit" disabled>
          <Play size={24} />
          Começar
        </StartCountdowButton>
      </form>
    </HomeContainer>
  )
}
