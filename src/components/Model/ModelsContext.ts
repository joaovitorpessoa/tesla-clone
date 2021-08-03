import React, { createContext } from "react";

// Tipagem do argumento dos callbacks do context
export interface CarModel {
  modelName: string;
  overlayNode: React.ReactNode;
  sectionRef: React.RefObject<HTMLElement>;
}

// Tipagem do objeto do contexto
interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>;
  registeredModels: CarModel[];
  registerModel: (model: CarModel) => void;
  unregisterModel: (modelName: string) => void;
  getModelByName: (modelName: string) => CarModel | null;
}

// P/ o TS compilar com um objeto vazio, é preciso passá-lo com o "{} as <tipagem>"
export default createContext<ModelsContext>({} as ModelsContext);
