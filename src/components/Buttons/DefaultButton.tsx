import { Fragment } from "react"

interface DefaultButtonProps {
  type: string
  text: string
  bgColor: string
  textColor: string
  hoverColor: string
  isDisabled: boolean
}

const DefaultButton = ({
  type,
  text,
  bgColor,
  hoverColor,
  textColor,
  isDisabled,
}: DefaultButtonProps) => {
  return (
    <Fragment>
      <button
        type="button"
        text={text}
        className={`rounded-sm bg-[${bgColor}] text-[${textColor}] hover:bg-[${hoverColor}] font-medium text-sm px-5 py-2.5`}
        disabled={isDisabled}
      >
        {text}
      </button>
    </Fragment>
  )
}

export default DefaultButton
