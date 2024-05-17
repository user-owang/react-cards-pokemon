import React, { useState } from "react";

const useFlip = () => {
  const [isFacingUp, setIsUp] = useState(true)
  const flipCard = () => {
    setIsUp(!isFacingUp)
  }
  return [isFacingUp, flipCard]
}

export default useFlip