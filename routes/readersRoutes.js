import {Router} from 'express'
import Readers from '../models/readers.js';
import readers from '../models/readers.js';


//Creating an Express router
const readersRouter = new Router();

/**
 * POST Method to add readers
  */
readersRouter.post("/", async (req, res, next) => {
    try {
      console.log(req.body);
  
      const newReader = await Readers.create(req.body);
  
      if (newReader) {
        res.status(201).json({ readers: newReader });
      } else {
        res.status(400).json({ message: "Error creating a new reader" });
      }
    } catch (error) {
      next(error);
    }
  });

//GET Request to all data
readersRouter.get('/', async (req, res, next) => {
  //res.send('Need to fetch the data');
  try {
   const readers = await Readers.find();
   if(readers){
    res.json({readers});  
   }else{
    res.json({message: "No reader found!"});
   }

  } catch (error) {
    next(error)
  }
});

/**
 * GET Readers by email
  */
readersRouter.get("/:email", async (req, res, next) => {
  try {
    const readerEmail = await Readers.findById(req.params.email);

    if (readerEmail) {
      res.json({ readerEmail });
    } else {
      res.json({ message: `No reader found with this email: ${req.params.email}`});
    }
  } catch (error) {
    next(error);
  }
});

/**
 * DELETE Reader by email
 */
readersRouter.delete("/:email", async (req, res, next) => {
    try {
      const deleteReader = await Book.findByIdAndDelete(req.params.email);
  
      if (deleteReader) {
          res.json({ message: `Reader deleted: ${req.params.email}`, deleteReader });
      } else {
          res.json({message: `Error deleting this reader: ${req.params.email}`})
      }
  
    } catch (error) {
      next(error);
    }
  });

export default readersRouter;