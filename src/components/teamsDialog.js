import { Dialog } from '@headlessui/react'

export default function TeamsDialog({ isOpen, setIsOpen, drafted, teams }) {
  const draftedReversed = [...drafted].reverse()
  const league = draftedReversed.reduce((finalTeams, player, index) => {
    const round = Math.ceil((index + 1) / teams)
    const teamIndex =
      round % 2 === 1 ? index % teams : teams - 1 - (index % teams)
    if (finalTeams[teamIndex]) {
      finalTeams[teamIndex].push(
        `${index + 1} ${player} (${round}-${(index % teams) + 1})`
      )
    } else {
      finalTeams[teamIndex] = [
        `${index + 1} ${player} (${round}-${(index % teams) + 1})`,
      ]
    }
    return finalTeams
  }, [])

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className='fixed inset-0 z-10 overflow-y-auto'
    >
      <div className='flex min-h-screen items-center justify-center'>
        <Dialog.Overlay className='fixed inset-0 bg-black opacity-30' />

        <div className='relative mx-auto rounded bg-white p-4'>
          <button
            type='button'
            onClick={() => setIsOpen(false)}
            className='absolute right-4 h-6 w-6'
          >
            &times;
          </button>
          <Dialog.Title>{teams} Teams</Dialog.Title>
          <ul className='grid grid-cols-2 gap-4 md:grid-cols-3'>
            {league.map((team, index) => (
              <li key={index}>
                <h2>Team {index + 1}</h2>
                <ul>
                  {team.map((player, pIndex) => (
                    <li key={pIndex}>{player}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Dialog>
  )
}
