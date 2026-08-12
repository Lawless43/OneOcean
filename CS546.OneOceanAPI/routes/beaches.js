import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {

  const { searchType, q } = req.query;

  switch (searchType) {
    case 'name':
      const beaches = await this.searchBeachesByName(q);
      res.render('beaches/search', { title: 'Find Beaches by Name', query: q, searchType: isName, beaches: beaches });
      break;
    case 'county':
      const beaches = await this.searchBeachesByCounty(q);
      res.render('beaches/search', { title: 'Find Beaches by County', query: q, searchType: isCounty, beaches: beaches });
      break;
    case 'city':
      const beaches = await this.searchBeachesByCity(q);
      res.render('beaches/search', { title: 'Find Beaches by City', query: q, searchType: isCity, beaches: beaches });
      break;
    default:
      res.status(400).json({ error: 'Invalid search type' });
  }
});

router.get('/:id', (req, res) => {
  res.render('beaches/detail', { title: 'Beach Detail' });
});

export default router;
