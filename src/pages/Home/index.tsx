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

import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

import { useForm } from 'react-hook-form'

const newCycleFormSchema = z.object({
  task: z.string().min(1, 'informe a tarefa'),
  minutesAmount: z.number().min(5).max(60),
})

type NewCycleformDAta = z.infer<typeof newCycleFormSchema>

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleformDAta>({
    resolver: zodResolver(newCycleFormSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  function handleSubmitButton(data: any) {
    console.log(data)
    reset()
  }

  const task = watch('task')
  const isSubmitDisable = !task

  return (
    <HomeContainer>
      <form action="" onSubmit={handleSubmit(handleSubmitButton)}>
        <FormContainer>
          <label htmlFor=""> vou trabalhar em </label>
          <TaskInput
            id="text"
            placeholder="Dê um nome para sua tarefa"
            {...register('task')}
          />
          <label htmlFor="">durante</label>
          <MinutesAmountInput
            placeholder="00"
            type="number"
            step={5}
            min={5}
            max={60}
            id="minutosAmount"
            {...register('minutesAmount', { valueAsNumber: true })}
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

        <StartCountdowButton type="submit" disabled={isSubmitDisable}>
          <Play size={24} />
          Começar
        </StartCountdowButton>
      </form>
    </HomeContainer>
  )
}
