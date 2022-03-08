import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const DEFAULT_TITLE = 'autodraft'

const Page = ({ title = DEFAULT_TITLE, children }) => {
  const { pathname } = useRouter()
  return (
    <div className='flex min-h-screen flex-col bg-skin-background text-skin-base'>
      <Head>
        <link rel='manifest' href='/manifest.json' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='msapplication-starturl' content='/' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta charSet='utf-8' />
        <meta name='description' content='autodraft' />
        <meta name='theme-color' content='#3b5998' />
        <link rel='shortcut icon' href='/favicon.png' />
        <link rel='apple-touch-icon' sizes='57x57' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/icon.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/icon.png' />
        <title>
          {title === DEFAULT_TITLE ? title : `${title} - ${DEFAULT_TITLE}`}
        </title>
      </Head>
      <header className='items-center border-skin-foreground md:flex md:border-b md:px-4 md:py-2'>
        <h1 className='text-center text-3xl font-extrabold leading-9 tracking-tight text-skin-base sm:text-4xl sm:leading-10 md:text-left'>
          {pathname === '/' ? (
            <span>{DEFAULT_TITLE}</span>
          ) : (
            <Link href='/'>
              <a>{DEFAULT_TITLE}</a>
            </Link>
          )}
        </h1>
      </header>
      {children}
    </div>
  )
}

export default Page
