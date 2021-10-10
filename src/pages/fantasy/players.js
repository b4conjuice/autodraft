import Link from 'next/link'
import { useRouter } from 'next/router'

import Page from '@/components/page'
import Main from '@/components/main'
import nav from '@/lib/nav'
import players from '@/lib/espnRank'

const Players = () => {
  const { pathname } = useRouter()
  return (
    <Page title='teams'>
      <Main className='px-2 md:px-0'>
        <div className='mx-auto space-y-2 md:max-w-screen-md'>
          <nav className='px-2 text-md'>
            <ul className='flex justify-center space-x-3'>
              {nav.map(({ url, text }) => (
                <li
                  key={url}
                  className={
                    pathname.includes(url) ? 'border-b-2 border-blue-700' : ''
                  }
                >
                  {pathname === url ? (
                    <span>{text}</span>
                  ) : (
                    <Link href={url}>
                      <a className='text-skin-link-accent hover:text-skin-link-accent-hover'>
                        {text}
                      </a>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <ul>
            {players.map(({ name, team, position }, index) => (
              <li key={name}>
                {index + 1} {name} {team} {position.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </Page>
  )
}
export default Players
