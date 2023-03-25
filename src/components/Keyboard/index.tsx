import { Button } from '../Button'

export function Keyboard() {
  return (
    <div className='pb-7 gap-2 h-[calc(65%-1rem)] grid grid-cols-4 grid-rows-5'>
      <Button>AC</Button>
      <Button>&laquo;</Button>
      <Button>%</Button>
      <Button>&divide;</Button>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button>&times;</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>&minus;</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>+</Button>
      <Button className='bg-slate-400 pl-[calc(50%-(50%/2)-4px)] rounded-full grid col-span-2 justify-start content-center'>
        0
      </Button>
      <Button>,</Button>
      <Button>=</Button>
    </div>
  )
}
