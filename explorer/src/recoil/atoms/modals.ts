import {atom} from "recoil";
import {IMPORTMODAL, NEWWALLETMODAL} from "../keys";

export const importModal = atom({
  key: IMPORTMODAL,
  default: false
})

export const newWalletModal = atom({
  key: NEWWALLETMODAL, 
  default: false
})
