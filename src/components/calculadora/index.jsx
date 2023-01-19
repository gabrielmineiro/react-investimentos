import { Div, DivForm, DivRetorno, Span } from "./styled";

import { AiOutlineCalculator } from "react-icons/ai";

import axios from "axios";
import { useEffect, useState } from "react";

const Calculadora = () => {
  const [investimentos, setInvestimentos] = useState([]);

  const [valor, setValor] = useState(0);
  const [parcelas, setParcelas] = useState(0);
  const [mdr, setMdr] = useState(0);
  const [days, setDays] = useState(undefined);

  useEffect(() => {
    let dayNumberArray = [];
    let dayArray = [];
    if (days !== undefined) {
      dayArray = days.split(" ");
      dayArray.map((day) =>
        !isNaN(parseInt(day)) ? dayNumberArray.push(parseInt(day)) : day
      );
    }
    if (valor >= 1000 && parcelas > 0 && mdr < 100 && mdr >= 0) {
      axios({
        method: "post",
        url: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
        data: {
          amount: valor,
          installments: parcelas,
          mdr: mdr,
          days: days !== undefined ? dayNumberArray : [1, 15, 30, 90],
        },
      }).then((res) => setInvestimentos(res.data));
    } else {
      investimentos[1] = "...";
      investimentos[15] = "...";
      investimentos[30] = "...";
      investimentos[90] = "...";
    }
  }, [investimentos, parcelas, valor, mdr, days]);

  let arrayNumberDay = [];
  if (days) {
    let arrayDays = days.split(" ");
    arrayDays.map((day) =>
      !isNaN(parseInt(day)) ? arrayNumberDay.push(parseInt(day)) : day
    );
  }

  if (days?.length === 0) {
    setDays(undefined);
  }

  return (
    <Div>
      <DivForm>
        <p>
          <AiOutlineCalculator size={"30px"} />
          Simule sua Antecipação
        </p>

        <label htmlFor="valor">Informe o valor da venda *</label>
        <input
          type="text"
          name="valor"
          value={valor}
          onChange={(event) => {
            setValor(event.target.value);
          }}
        />
        {valor < 1000 ? (
          <Span>Valor deve ser maior ou igual a 1000</Span>
        ) : (
          <Span></Span>
        )}

        <label htmlFor="parcelas">Em quantas parcelas *</label>
        <input
          type="number"
          name="parcelas"
          value={parcelas}
          onChange={(event) => {
            setParcelas(event.target.value);
          }}
        />
        {parcelas < 1 ? (
          <Span>Mínimo de 1 parcela e máximo de 12</Span>
        ) : (
          <Span />
        )}

        <label htmlFor="MDR">Informe o percentual de MDR *</label>
        <input
          type="text"
          name="MDR"
          value={mdr}
          onChange={(event) => {
            setMdr(event.target.value);
          }}
          required
        />
        {mdr > 100 ? <Span>O valor máximo de MDR é 100</Span> : <Span />}

        <label htmlFor="days">Número de dias para recebimento</label>
        <input
          type="text"
          name="days"
          value={days}
          onChange={(event) => {
            setDays(event.target.value);
          }}
          placeholder="Separe os dias com espaço. Campo não
          obrigatório"
        />
      </DivForm>
      <DivRetorno>
        <div>
          <i className="title">Você receberá:</i>
          {days !== undefined ? (
            arrayNumberDay.map((day) => (
              <i>
                Em {day} dias:<b> R${investimentos[day]}</b>
              </i>
            ))
          ) : (
            <>
              <i>
                Amanhã:<b> R${investimentos[1]}</b>
              </i>
              <i>
                Em 15 dias:<b> R${investimentos[15]}</b>
              </i>
              <i>
                Em 30 dias:<b> R${investimentos[30]}</b>
              </i>
              <i>
                Em 90 dias:<b> R${investimentos[90]}</b>
              </i>
            </>
          )}
        </div>
      </DivRetorno>
    </Div>
  );
};

export default Calculadora;
