import React, { useState } from "react";
import Input from "./components/Input"; // visor/input
import Button from "./components/Button"; // botões
import { Container, Content, Row } from "./styles"; // estilos

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false); // Estado para controle de expansão

  // Função de limpar
  const handleOnClear = () => {
    setCurrentNumber("0");
    setFirstNumber(null);
    setOperation(null);
  };

  // Inserção de números
  const handleAddNumber = (num) => {
    setCurrentNumber((prev) =>
      prev === "0" ? String(num) : `${prev}${num}`
    );
  };

  // Função de igual/resultado
  const handleEquals = () => {
    if (firstNumber !== null && operation !== null) {
      switch (operation) {
        case "+":
          setCurrentNumber(String(Number(firstNumber) + Number(currentNumber)));
          break;
        case "-":
          setCurrentNumber(String(Number(firstNumber) - Number(currentNumber)));
          break;
        case "*":
          setCurrentNumber(String(Number(firstNumber) * Number(currentNumber)));
          break;
        case "/":
          setCurrentNumber(String(Number(firstNumber) / Number(currentNumber)));
          break;
        case "^": // Adicionando a operação de potência
          setCurrentNumber(String(Math.pow(Number(firstNumber), Number(currentNumber))));
          break;
        default:
          break;
      }
      setFirstNumber(null);
      setOperation(null);
    }
  };

  // Operações básicas
  const handleOperation = (op) => {
    if (firstNumber === null) {
      setFirstNumber(currentNumber);
      setCurrentNumber("0");
    }
    setOperation(op);
  };

  // Alternar exibição das funcionalidades avançadas
  const toggleAdvanced = () => {
    setShowAdvanced(!showAdvanced);
  };

  // Funções matemáticas avançadas
  const handleAdvancedOperation = (func) => {
    let result;
    switch (func) {
      case "sin":
        result = Math.sin(Number(currentNumber));
        break;
      case "cos":
        result = Math.cos(Number(currentNumber));
        break;
      case "tan":
        result = Math.tan(Number(currentNumber));
        break;
      case "sqrt":
        result = Math.sqrt(Number(currentNumber));
        break;
      default:
        break;
    }
    setCurrentNumber(String(result));
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
  
        {/* Botão para expandir funcionalidades */}
        <Row>
          <Button label="C" onClick={handleOnClear} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="*" onClick={() => handleOperation("*")} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")} />
          <Button label="8" onClick={() => handleAddNumber("8")} />
          <Button label="9" onClick={() => handleAddNumber("9")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")} />
          <Button label="5" onClick={() => handleAddNumber("5")} />
          <Button label="6" onClick={() => handleAddNumber("6")} />
          <Button label="-" onClick={() => handleOperation("-")} />
  
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")} />
          <Button label="2" onClick={() => handleAddNumber("2")} />
          <Button label="3" onClick={() => handleAddNumber("3")} />        
            <Button label="=" onClick={handleEquals} />
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("0")} />
          <Button label="," onClick={() => handleAddNumber(",")} />
          <Button
            label={showAdvanced ? "Close" : "More"}
            onClick={toggleAdvanced}
          />
        </Row>
      
        {/* Funcionalidades avançadas visíveis apenas quando expandido */}
        {showAdvanced && (
          <>
            <Row>
              <Button label="√" onClick={() => handleAdvancedOperation("sqrt")} />
              <Button label="^" onClick={() => handleOperation("^")} /> {/* Botão de potência */}
            </Row>
            <Row>
              <Button label="sin" onClick={() => handleAdvancedOperation("sin")} />
              <Button label="cos" onClick={() => handleAdvancedOperation("cos")} />
              <Button label="tan" onClick={() => handleAdvancedOperation("tan")} />
            </Row>
          </>
        )}
      </Content>
    </Container>
  );
};

export default App;
