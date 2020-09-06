import db from '@/lib/db'

export default async (req, res) => {
  const { method, body } = req
  if (method === 'POST') {
    const list = await db.collection('lists').add(body)
    res.json({ id: list.id })
  } else {
    const snapshot = await db.collection('lists').get()
    const lists = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }))
    res.json(lists)
  }
}
