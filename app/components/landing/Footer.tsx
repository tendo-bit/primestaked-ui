import { ReactNode } from 'react'
import { Segment } from './Segment'

import twitterSrc from '~/assets/landing/twitter.svg'
import docsSrc from '~/assets/landing/docs.svg'
import supportSrc from '~/assets/landing/support.svg'

export const Footer = () => {
  return (
    <Segment
      hasGradientBg={true}
      width={'large'}
      alignCenter={true}
    >
      <div className="flex flex-row items-center justify-center py-24">
        <FooterIcon 
          icon={twitterSrc}
          title="Twitter"
          imgSize={32}
          iconLink="https://twitter.com/PrimeStaked"
        />
        <FooterIcon 
          icon={docsSrc}
          title="Docs"
          imgSize={36}
          iconLink="https://docs.primestaked.com"
        />
        <FooterIcon 
          icon={supportSrc}
          title="Contact Support"
          imgSize={39}
          iconLink="mailto:support@primestaked.com"
        />
      </div>
    </Segment>
  )
}

const FooterIcon = ({
  icon,
  title,
  iconLink,
  imgSize
}: {
  icon: string,
  title: string,
  iconLink: string,
  imgSize: number
}) => {
  return (
    <a href={iconLink} title={title} className="flex flex-col justify-center items-center hover:bg-gray-750 bg-gray-850 mx-5 w-[60px] h-[60px] rounded-full">
      <img className="m-auto" alt={title} src={icon} height={imgSize || 40} width={imgSize || 40} />
    </a>
  )
}
