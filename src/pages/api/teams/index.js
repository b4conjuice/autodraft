import db from '@/lib/db'

export default async (req, res) => {
  const { method, body } = req
  if (method === 'POST') {
    const { name, teams, rounds, order, ir, slots } = body
    const team = await db.collection('teams').add({
      name,
      teams,
      rounds,
      order,
      irCount: ir,
      slots,
      players: [...Array(rounds).keys()].map(() => ''),
      irPlayers: [...Array(ir).keys()].map(() => ''),
      transactions: [],
    })
    res.json({ id: team.id })
  } else {
    const snapshot = await db.collection('teams').get()
    const teams = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    res.json(teams)
  }
}
