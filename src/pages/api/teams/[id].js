import db from '@/lib/db'

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req
  if (method === 'POST') {
    // TODO
    const { players, irPlayers, transactions } = body
    await db.collection('teams').doc(id).update({
      players,
      irPlayers,
      transactions,
    })
    res.json({ message: 'team updated' })
  } else if (method === 'DELETE') {
    await db.collection('teams').doc(id).delete()
    res.json({ message: 'team deleted' })
  } else {
    const doc = await db.collection('teams').doc(id).get()
    const team = { id: doc.id, ...doc.data() }
    if (team.name) res.json(team)
    else res.json({ error: 'team does not exist' })
  }
}
