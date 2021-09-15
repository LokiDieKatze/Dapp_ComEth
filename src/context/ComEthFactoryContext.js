import React, { createContext, useContext } from "react";
import { useContract } from "web3-hooks";
import {
  ComEthFactoryAdress,
  ComEthFactoryAbi,
} from "../contracts/comEthFactory";

export const ComEthFactoryContext = createContext(null);

export const useComEthFactory = () => {
  const comEthFactoryContext = useContext(ComEthFactoryContext);
  if (comEthFactoryContext === undefined) {
    throw new Error(
      `It seems that you are trying to use ComEthFactoryContext outside of its provider`
    );
  }
  return comEthFactoryContext;
};

export const ComEthFactoryContextProvider = ({ children }) => {
  const comEthFactory = useContract(ComEthFactoryAdress, ComEthFactoryAbi);
  return (
    <ComEthFactoryContext.Provider value={comEthFactory}>
      {children}
    </ComEthFactoryContext.Provider>
  );
};
