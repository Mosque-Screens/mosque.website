export default function MosqueBrandingCSS(props) {
  return (
    <style>{`
      .mosque-website__text--brand-color {
        color: ${props.data.brandColor}
      }
    `}</style>
  )
}