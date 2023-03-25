import { Keyboard } from './components/Keyboard'
import { Screen } from './components/Screen'

export function App() {
  return (
    <div className='w-full h-full bg-black p-4'>
      <Screen></Screen>
      <Keyboard></Keyboard>
    </div>
  )
}
