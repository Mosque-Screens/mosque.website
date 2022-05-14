export default function GoogleAnalytics() {
  return (<>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=G-MZ5SVK8ZJ7`}></script>
    <script
      dangerouslySetInnerHTML={{
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-MZ5SVK8ZJ7');
      `,
      }}
    />
    </>
  )
}
