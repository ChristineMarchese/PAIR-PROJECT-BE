

const checkName = (req, res, next) => {
  if(req.body.name) {
     next()
  } else {
    res.status(400).json( { error: 'Name is required'})
  }
}

const checkCurrency = (req, res, next) => {
     if(req.body.currency) {
     next()
     } else {
      res.status(400).json( { error: 'Currency is required'})
     }
}

const checkBoolean = (req, res, next) => {
   const isFav = req.body.is_capital
   if(typeof isFav === 'boolean')  {
     next()
   } else {
    res.status(400).json( { error: "is_capital must be a boolean" } )
   }
}



module.exports = { checkName, checkCurrency, checkBoolean }