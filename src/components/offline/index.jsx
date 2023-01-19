import { Div, H1 } from "./styled";
import { VscDebugDisconnect } from "react-icons/vsc";

const Offline = () => {
  return (
    <>
      <H1>
        Ops... Parece que você está desconectado <VscDebugDisconnect />
      </H1>
      <Div>
        <img
          src="https://purepng.com/public/uploads/medium/purepng.com-astronautastronautcosmonauttrainedtrainedspaceflightpilotspace-travelerspersonscientist-1421526662194ybaur.png"
          alt=""
        />
      </Div>
    </>
  );
};

export default Offline;
