export const Token = ({
  iconSrc,
  text,
  isActive,
}: {
  iconSrc: string
  text: string
  isActive: boolean
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img src={iconSrc} alt="Logo" className="h-20 sm:h-36" />
      <div className="text-lg sm:text-[2.75rem] sm:mt-5 text-black text-center font-medium">
        {text}
      </div>
      {isActive ? (
        <div className="rounded bg-green-200 px-4 text-lg sm:text-2xl font-medium leading-normal mt-4">
          Active
        </div>
      ) : (
        <div className="rounded bg-gray-200 px-4 text-lg sm:text-2xl font-medium leading-normal mt-4">
          Paused
        </div>
      )}
    </div>
  )
}
