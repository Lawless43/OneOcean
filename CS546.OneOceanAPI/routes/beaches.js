import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.render('search', { title: 'Find Beaches' });
});

router.get('/:id', (req, res) => {
  res.render('beaches/detail', { title: 'Beach Detail' });
});

router.post('/search', async (req, res) => {
  const { searchType, q } = req.query;
  const beaches = null;

  switch (searchType) {
    case 'name':
      beaches = await this.searchBeachesByName(q);
      res.render('beaches/search', { title: 'Find Beaches by Name', query: q, searchType: isName, beaches: beaches });
      break;
    case 'county':
      beaches = await this.searchBeachesByCounty(q);
      res.render('beaches/search', { title: 'Find Beaches by County', query: q, searchType: isCounty, beaches: beaches });
      break;
    case 'city':
      beaches = await this.searchBeachesByCity(q);
      res.render('beaches/search', { title: 'Find Beaches by City', query: q, searchType: isCity, beaches: beaches });
      break;
    default:
      res.status(400).json({ error: 'Invalid search type' });
  }
});

export default router;
