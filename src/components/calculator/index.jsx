import { Div, DivForm, DivReturn, Span } from "./styled";

import { AiOutlineCalculator } from "react-icons/ai";

import axios from "axios";
import { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Calculator = () => {
  const [investments, setInvestiments] = useState([]);

  const [value, setValue] = useState(0);
  const [installments, setInstallments] = useState(0);
  const [mdr, setMdr] = useState(0);
  const [days, setDays] = useState(undefined);

  const error = (message) => {
    toast.error(`${message}`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    let dayNumberArray = [];
    let dayArray = [];
    if (days !== undefined) {
      dayArray = days.split(" ");
      dayArray.map((day) =>
        !isNaN(parseInt(day)) ? dayNumberArray.push(parseInt(day)) : day
      );
    }
    if (value >= 1000 && installments > 0 && mdr < 100 && mdr >= 0) {
      axios({
        method: "post",
        url: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
        data: {
          amount: value,
          installments: installments,
          mdr: mdr,
          days: days !== undefined ? dayNumberArray : [1, 15, 30, 90],
        },
      }).then((res) => setInvestiments(res.data));
    } else {
      investments[1] = "...";
      investments[15] = "...";
      investments[30] = "...";
      investments[90] = "...";
    }
  }, [investments, installments, value, mdr, days]);

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
        <ToastContainer />
        <p>
          <AiOutlineCalculator size={"30px"} />
          Simule sua Antecipação
        </p>

        <label htmlFor="valor">Informe o valor da venda *</label>
        <input
          type="text"
          name="valor"
          value={value}
          onChange={(event) => {
            setValue(event.target.value);
          }}
        />
        {value < 1000 ? (
          <>
            <Span>Valor deve ser maior ou igual a 1000</Span>
          </>
        ) : (
          <Span></Span>
        )}

        <label htmlFor="parcelas">Em quantas parcelas *</label>
        <input
          type="number"
          name="parcelas"
          value={installments}
          onChange={(event) => {
            setInstallments(event.target.value);
          }}
        />
        {installments > 12 ? (
          <>
            {error("O número máximo de parcelas é 12")}
            <Span>Mínimo de 1 parcela e máximo de 12</Span>
          </>
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
        {mdr > 100 ? (
          <>
            {error("O máximo de mdr é 100")}
            <Span>O valor máximo de MDR é 100</Span>
          </>
        ) : (
          <Span />
        )}

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
      <DivReturn>
        <div>
          <i className="title">Você receberá:</i>
          {days !== undefined ? (
            arrayNumberDay.map((day) => (
              <i>
                Em {day} dias:<b> R${investments[day]}</b>
              </i>
            ))
          ) : (
            <>
              <i>
                Amanhã:<b> R${investments[1]}</b>
              </i>
              <i>
                Em 15 dias:<b> R${investments[15]}</b>
              </i>
              <i>
                Em 30 dias:<b> R${investments[30]}</b>
              </i>
              <i>
                Em 90 dias:<b> R${investments[90]}</b>
              </i>
            </>
          )}
        </div>
      </DivReturn>
    </Div>
  );
};

export default Calculator;
