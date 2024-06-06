import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { ArrowUpRight, CheckCircle, Close, Spinner } from './Icons'
import { Link } from '@remix-run/react'

export function Modal({
  isOpen,
  setIsOpen,
  title,
  txLink,
  status,
  description,
  buttonText,
  buttonHref,
  modalButtonAction,
  modalButtonDisabled,
}: {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  txLink?: string
  title: string
  status: string
  description?: string
  buttonText?: string
  buttonHref?: string
  modalButtonAction?: () => void
  modalButtonDisabled: boolean
}) {
  // Disable auto-close for now
  // useEffect(() => {
  //   if (status === 'success' || status === 'error') {
  //     const t = setTimeout(() => {
  //       setIsOpen(false)
  //     }, 3000)
  //     return () => clearTimeout(t)
  //   }
  // }, [status, setIsOpen])

  return (
    // Use the `Transition` component at the root level
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-gray-bg1 p-6 text-left align-middle shadow-xl transition-all">
                <button
                  className="absolute top-4 right-6 text-grey-500 hover:text-black"
                  onClick={() => setIsOpen(false)}
                >
                  <Close />
                </button>
                <div className="flex flex-col items-center">
                  <div className="text-red-500 my-8">
                    {status === 'loading' ? (
                      <Spinner size={42} />
                    ) : status === 'error' ? (
                      <Close size={42} />
                    ) : (
                      <CheckCircle size={42} />
                    )}
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900 mb-8"
                  >
                    {title}
                  </Dialog.Title>
                  {description && (
                    <p className="text-gray-500 mb-8 break-all">
                      {description}
                    </p>
                  )}

                  {buttonText && buttonHref && (
                    <div className={`${
                        modalButtonDisabled ? 'btn-disabled' : 'btn'} px-7 py-3 mb-8 text-lg text-center hover:cursor-pointer`}>
                      <Link to={buttonHref}>{buttonText}</Link>
                    </div>
                  )}

                  {buttonText && modalButtonAction && (
                    <button
                      className={`${
                        modalButtonDisabled ? 'btn-disabled' : 'btn'
                      } px-7 py-3 mb-8 text-lg text-center`}
                      onClick={modalButtonAction}
                    >
                      {buttonText}
                    </button>
                  )}
                  

                  {txLink && (
                    <div className="mb-8">
                      <a
                        href={txLink}
                        rel="noreferrer"
                        target="_blank"
                        className="flex items-center gap-2 text-red-500"
                      >
                        View transaction
                        <ArrowUpRight size={10} className="mt-1" />
                      </a>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
