const onClick = async () => {
    if (status === "recording") {
      return
    }
  
    // Clear the error when recording again
    setError("")
    await startRecording()
  
    // Trigger the animation to start
    setEndTime(Date.now() + RECORD_DURATION)
  
    await new Promise(resolve => {
      setTimeout(resolve, RECORD_DURATION)
    })
  
    stopRecording()
}

export default onClick