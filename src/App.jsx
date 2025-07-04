import { useState } from 'react'
import Button from './components/Button'
import PowerIcon from './components/PowerIcon'
import DPad from './components/DPad'

export default function App() {
  return (
    <>
      <Button label="A" size="medium"/>
      <Button label="B" size="medium"/>
      <Button icon={PowerIcon} size="small"/>
      <Button size="small"/>
      <Button size="small"/>
      <DPad />
    </>
  )  
}