export default function initDrummersController(db) {
  const oneDrummer = (req, res) => {
    db.Drummer.findOne({
      where: {
        id: req.params.id,
      },
    })
      .then((drummer) => {
        res.render('drummers/oneDrummer', { drummer });
      })
      .catch((error) => console.log('error', error));
  };

  const allDrummers = (req, res) => {
    db.Drummer.findAll()
      .then((drummers) => {
        res.render('drummers/all-drummers', { drummers });
      })
      .catch((error) => console.log('error', error));
  };

  return {
    oneDrummer, allDrummers,
  };
}
