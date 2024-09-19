import { useState } from 'react'

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {

  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handleNext = () => {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  const handlePrevious = () => {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  const Button = ({ bgColor, text, emoji, onClick, children }) => {
    return (
      <button style={{ backgroundColor: bgColor, color: "#fff" }} onClick={onClick}>
        {children}
      </button>
    )
  }

  const StepMessage = ({ step, children }) => {
    return (
      <p className="message">
        Step {step}: {messages[step - 1]}
        {children}
      </p>
    )
  }

  return (
    <>
      <div>
        <button className="close" onClick={() => setIsOpen((is) => !is)}>
          &times;
        </button>
      </div>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          
          <StepMessage step={step}>
            {step === 3 && (
              <div className='buttons'>
                <Button bgColor="#0000ff" onClick={()=> alert('next feature... Online Job Application.')}>Learn how...</Button>
              </div>
            )}

          </StepMessage>
          
          <div className="buttons">
            <Button bgColor="#7950f2" onClick={handlePrevious}> Previous <span>👈</span> </Button>
            <Button bgColor="#7950f2" onClick={handleNext}> Next <span>👉</span> </Button>
          </div>
        </div>
      )
      }
    </>
  )
}

export default App
