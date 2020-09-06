import db from '@/lib/db'

export default async (req, res) => {
  const {
    method,
    body,
    query: { id },
  } = req
  if (method === 'POST') {
    const { title, items } = body
    await db.collection('lists').doc(id).update({
      title,
      items,
    })
    res.json({ message: 'list updated' })
  } else if (method === 'DELETE') {
    await db.collection('lists').doc(id).delete()
    res.json({ message: 'list deleted' })
  } else {
    const doc = await db.collection('lists').doc(id).get()
    const list = { id: doc.id, ...doc.data() }
    if (list.title && list.items) res.json(list)
    else res.json({ error: 'list does not exist' })
  }
}
