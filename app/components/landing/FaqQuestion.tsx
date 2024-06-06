export const FaqQuestion = ({
  question,
  answer
}: {
  question: string,
  answer: string
}) => {
  return (
    <>
      <div className="text-off-black font-medium text-2xl md:text-5xl mt-16 text-left w-full">
        {question}
      </div>
      <div className="text-off-black font-medium tracking-[0.125px] text-sm md:text-2.66xl mt-8 text-left w-full leading-relaxed font-heading">
        {answer}
      </div>
    </>
  )
}
