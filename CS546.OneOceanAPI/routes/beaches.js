import { Router } from 'express';
import beachData from '../data/beaches.js';
const router = Router();

router.get('/', (req, res) => {
  res.render('beaches/search', { title: 'Find Beaches' });
});

router.get('/search', async (req, res) => {
  const { searchType, q } = req.query;

  if (!searchType || !q) {
    return res.render('beaches/search', { title: 'Find Beaches' });
  }

  let beaches = [];

  try {
    switch (searchType) {
      case 'name':
        beaches = await searchBeachesByName(q);
        return res.render('beaches/search', { title: 'Find Beaches by Name', query: q, searchType: 'Name', beaches });
      case 'county':
        beaches = await searchBeachesByCounty(q);
        return res.render('beaches/search', { title: 'Find Beaches by County', query: q, searchType: 'County', beaches });
      case 'city':
        beaches = await searchBeachesByCity(q);
        return res.render('beaches/search', { title: 'Find Beaches by City', query: q, searchType: 'City', beaches });
      default:
        return res.status(400).json({ error: 'Invalid search type' });
    }
  } catch (e) {
    return res.status(500).json({ error: 'Search failed' });
  }
});

router.post('/search', async (req, res) => {
  const searchType = req.body.searchType || req.query.searchType;
  const q = req.body.q || req.query.q;

  if (!searchType || !q) {
    return res.render('beaches/search', { title: 'Find Beaches' });
  }

  let beaches = [];

  try {
    switch (searchType) {
      case 'name':
        beaches = await searchBeachesByName(q);
        return res.render('beaches/search', { title: 'Find Beaches by Name', query: q, searchType: 'Name', beaches });
      case 'county':
        beaches = await searchBeachesByCounty(q);
        return res.render('beaches/search', { title: 'Find Beaches by County', query: q, searchType: 'County', beaches });
      case 'city':
        beaches = await searchBeachesByCity(q);
        return res.render('beaches/search', { title: 'Find Beaches by City', query: q, searchType: 'City', beaches });
      default:
        return res.status(400).json({ error: 'Invalid search type' });
    }
  } catch (e) {
    return res.status(500).json({ error: 'Search failed' });
  }
});

router.get('/:id', (req, res) => {
  res.render('beaches/detail', { title: 'Beach Detail' });
});

export default router;
