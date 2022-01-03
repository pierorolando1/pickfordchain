import PageTemplate from "../components/utils/PageTemplate"
import Modal from 'react-modal'
import {useRecoilState} from "recoil"
import {importModal, newWalletModal} from "../recoil/atoms/modals"


export const WalletPage = () => {
  
  const [modal, setModal] = useRecoilState(importModal)
  const [createWallet, setCreateWallet] = useRecoilState(newWalletModal)

  return (
      <PageTemplate>
        <div className="flex flex-col max-w-6xl mx-auto">
          <h1 className="py-5 text-xl font-semibold text-gray-300">You don't have registered a Wallet</h1>
          
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="flex flex-col items-center justify-center w-full py-5 mx-2 rounded-lg bg-tokyo-800">
              <h1 className="text-xl font-semibold text-gray-50">I have a wallet and my password</h1>
              <h1 className="py-2 text-sm text-gray-500">Import your existing wallet using a Secret Recovery Phrase</h1>
              <button
                onClick={() => setModal(true)}
                className="px-4 py-2 mt-2 text-gray-100 bg-blue-500 rounded-3xl">Import wallet</button>
            </div>
            
            <div className="flex flex-col items-center justify-center w-full py-5 mx-2 rounded-lg bg-tokyo-800">
              <h1 className="text-xl font-semibold text-gray-50">I'm new in this</h1>
              <h1 className="py-2 text-sm text-gray-500">Import your existing wallet using a Secret Recovery Phrase</h1>
              <button
                onClick={() => setCreateWallet(true)}
                className="px-4 py-2 mt-2 text-gray-100 bg-blue-500 rounded-3xl">Create wallet</button>
            </div>
          </div>
        <ImportModal />
        <CreateModal />
        </div>
      </PageTemplate>
  )
}


const ImportModal = () => {
  const [modalIsOpen, setIsOpen] = useRecoilState(importModal)
  return (
    <Modal
      onRequestClose={() => setIsOpen(false)}
      isOpen={modalIsOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(27, 27, 39, 0.9)",
          width: "100%",
          height: "100%",
        },
      content: {
        overflow: "auto",
        border: "none",
        backgroundColor: "rgba(34, 36, 51,1)",
        width: "50%",
        height: "50%",
        margin: "auto",
        boxShadow: 'none'
      }
      }}>
    </Modal>

  )
}

const CreateModal = () => {

  const [modalIsOpen, setIsOpen] = useRecoilState(newWalletModal)
  return (
    <Modal
      onRequestClose={() => setIsOpen(false)}
      isOpen={modalIsOpen}
      style={{
        overlay: {
          backgroundColor: "rgba(27, 27, 39, 0.9)",
          width: "100%",
          height: "100%",
        },
      content: {
        overflow: "auto",
        border: "none",
        backgroundColor: "rgba(34, 36, 51,1)",
        width: "50%",
        height: "50%",
        margin: "auto",
        boxShadow: 'none'
      }
      }}
    >
      <h1>Create a new wallet</h1>
    </Modal>

  )
}




