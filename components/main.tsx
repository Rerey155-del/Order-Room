import React from 'react'
import Card from './card'

const Main = () => {
  return (
    <div className="container max-w-screen-xl py-6 pb-20 mx-auto">
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Main
