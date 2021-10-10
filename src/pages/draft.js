import { useState } from 'react'
import { TrashIcon } from '@heroicons/react/solid'

import Page from '@/components/page'
import Layout from '@/components/layout'
import Main from '@/components/main'
import Dnd from '@/components/dnd'
import useLocalStorage from '@/lib/useLocalStorage'
import espnRank from '@/lib/espnRank'
import hashtagRank from '@/lib/hashtagRank'

const PlusMinus = ({ index }) => {
  const index2 = espnRank.findIndex(p => p.name === hashtagRank[index]?.name)
  return (
    <td className={`p-2 ${index2 > index ? 'bg-blue-700' : 'bg-red-700'}`}>{`${
      index2 > index ? '+' : ''
    }${index2 - index} (${index + 1})`}</td>
  )
}

const Draft = () => {
  const [drafted, setDrafted] = useLocalStorage('draft', [])
  const draft = name => {
    const newDrafted = [...drafted]
    newDrafted.push(name)
    setDrafted(newDrafted)
  }
  return (
    <Page>
      <Layout todaysGames={false}>
        <Main className='px-2 space-y-2 md:mx-auto'>
          <div className='flex'>
            <div className='w-[350px]'>
              <h2 className='flex p-2 space-x-4'>
                <span>draft</span>
                <button
                  type='button'
                  onClick={() => {
                    setDrafted([])
                  }}
                >
                  <TrashIcon className='w-6 h-6' />
                </button>
              </h2>
              <Dnd
                items={drafted}
                reorderItems={newDrafted => {
                  setDrafted(newDrafted)
                }}
                deleteItem={index => {
                  const newDrafted = [...drafted]
                  newDrafted.splice(index, 1)
                  setDrafted(newDrafted)
                }}
              />
            </div>
            <table>
              <thead>
                <tr>
                  <td className='p-2'>#</td>
                  <td className='p-2'>espn</td>
                  <td className='p-2'>hashtag</td>
                  <td className='p-2'>+/-</td>
                </tr>
              </thead>
              <tbody>
                {espnRank.map(({ name, position }, index) => (
                  <tr key={name} className='odd:bg-skin-foreground-alt'>
                    <td className='p-2'>{index + 1}</td>
                    <td
                      className={`p-2 ${
                        drafted.some(p => p === name) ? 'opacity-25' : ''
                      }`}
                    >
                      <button
                        type='button'
                        className='disabled:pointer-events-none'
                        onClick={() => draft(name)}
                        disabled={drafted.some(p => p === name)}
                      >
                        {name}
                      </button>
                    </td>
                    <td
                      className={`p-2 ${
                        drafted.some(p => p === hashtagRank[index]?.name)
                          ? 'opacity-25'
                          : ''
                      }`}
                    >
                      <button
                        type='button'
                        className='disabled:pointer-events-none'
                        onClick={() => draft(hashtagRank[index].name)}
                        disabled={drafted.some(
                          p => p === hashtagRank[index]?.name
                        )}
                      >
                        {hashtagRank[index]?.name}
                      </button>
                    </td>
                    <PlusMinus index={index} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Main>
      </Layout>
    </Page>
  )
}

export default Draft
