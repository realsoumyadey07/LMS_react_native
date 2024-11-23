"use client"
import React, { FC } from "react"
import Heading from "./utils/Heading"
interface Props {

}

const Page: FC<Props> = (props) => {
  return (
    <div>
      <Heading
        title="Youdemy"
        description="Youdemy is a platform for students to learn and get help from teachers."
        keywords="Programming, Java, Python, Javascript, C++, React"
      />
    </div>
  )
}

export default Page