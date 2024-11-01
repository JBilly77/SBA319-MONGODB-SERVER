import {Router} from 'express'
import Book from '../models/books.js';

//Creating an Express router
const bookRouter = new Router();

/**
 * POST Method to add books
  */
bookRouter.post("/", async (req, res, next) => {
    try {
      console.log(req.body);
  
      const newBook = await Book.create(req.body);
  
      if (newBook) {
        res.status(201).json({ books: newBook });
      } else {
        res.status(400).json({ message: "Error creating new book" });
      }
    } catch (error) {
      next(error);
    }
  });

//GET Request to all data
bookRouter.get('/', async (req, res, next) => {
  //res.send('Need to fetch the data');
  try {
   const books = await Book.find();
   if(books){
    res.json({books});  
   }else{
    res.json({message: "No books found!"});
   }

  } catch (error) {
    next(error)
  }
});

/**
 * GET Book by ID
  */
bookRouter.get("/:id", async (req, res, next) => {
  try {
    const bookId = await Book.findById(req.params.id);

    if (bookId) {
      res.json({ bookId });
    } else {
      res.json({ message: `No book found with this id: ${req.params.id}`});
    }
  } catch (error) {
    next(error);
  }
});

/**
 * PUT Request
 * @description Update a document by the id
 */
bookRouter.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updateBook = await Book.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (updateBook) {
      res.json({ updateBook });
    } else {
      res.json({ message: `Error updating this book: ${req.params.id}` });
    }
  } catch (error) {
    next(error);
  }
});
/**
 * DELETE
 */
bookRouter.delete("/:id", async (req, res, next) => {
  try {
    const deleteBook = await Book.findByIdAndDelete(req.params.id);

    if (deleteBook) {
        res.json({ message: `Book deleted: ${req.params.id}`, deleteBook });
    } else {
        res.json({message: `Error deleting this book: ${req.params.id}`})
    }

  } catch (error) {
    next(error);
  }
});

export default bookRouter;