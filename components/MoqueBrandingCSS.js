export default function MosqueBrandingCSS(props) {
  return (
    <style>{`
      .mosque-website__text--brand {
        color: ${props.data.branding.primary_color};
      }

      .mosque-website__cta-button--brand {
        background-color: ${props.data.branding.primary_color};
        background: ${props.data.branding.primary_color};
        border-color: ${props.data.branding.primary_color};
      }
    `}</style>
  )
}