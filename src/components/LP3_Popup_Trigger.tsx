import React from 'react'
import EN_LP3_Popup from './EN_LP3_Popup'
import ES_LP3_Popup from './ES_LP3_Popup'
import VN_LP3_Popup from './VN_LP3_Popup'

type Locale = 'en' | 'es' | 'vn'

type Props = {
  locale: Locale                   // which popup to show
  guideUrl: string                 // e.g. "/en/guide"
  redirectUrl?: string             // e.g. "https://apply.interlink.edu/en"
  tag?: string                     // Mailchimp tag override
}

export default function LP3_Popup_Trigger({ locale, guideUrl, redirectUrl, tag }: Props) {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const handler = (e: Event) => {
      const target = e.target as HTMLElement | null
      const trigger = target?.closest('[data-open-optin]')
      if (trigger) {
        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [])

  const commonProps = {
    open,
    onClose: () => setOpen(false),
    guideUrl,
    redirectUrl,
    tag,
  }

  if (locale === 'es') {
    return <ES_LP3_Popup {...commonProps} />
  }
  if (locale === 'vn') {
    return <VN_LP3_Popup {...commonProps} />
  }
  return <EN_LP3_Popup {...commonProps} />
}
