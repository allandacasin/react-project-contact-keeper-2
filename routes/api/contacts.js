const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const {check, validationResult} = require('express-validator');
const Contact = require('../../models/Contact');

// @route   Add api/contacts
// @desc    Add contact
// @access  Private
router.post('/', 
  
  [auth,

    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Please Enter a valid email.').isEmail(),
    check('type', 'Type is required.').not().isEmpty()
    
  ],

  async(req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){

      return res.status(400).json({errors: errors.array() })
    }

    const {name, email, phone, type} = req.body;

    try {

      const newContact = new Contact({

        user: req.user.id,
        name: name,
        email: email,
        phone: phone,
        type: type

      })

      const contact = await newContact.save();

      res.json(contact);
      
    } catch (err) {
      
      console.error(err.message);
      res.status(500).send('Server Error.');

    }


  }

)


// @route   Get api/contacts
// @desc    Get All contacts
// @access  Private
router.get('/', auth, async(req, res) => {

  try {

    const contacts = await Contact.find({user: req.user.id }).sort({date: -1});

    res.json(contacts);


  } catch (err) {
    
    console.error(err.message);
    res.status(500).send('Server Error.');

  }

})


// @route   Put api/contacts
// @desc    Update contacts
// @access  Private

router.put('/:contactId', 
  
  [auth,

    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Please Enter a valid email.').isEmail(),
    check('type', 'Type is required.').not().isEmpty()
    
  ],

  async(req, res) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){

      return res.status(400).json({errors: errors.array() })
    }

    const {name, email, phone, type} = req.body;

    try {

      //get contact
      let contact = await Contact.findById(req.params.contactId);

      if(!contact) {
        return res.status(400).json({msg: 'Contact Not Found.'});
      }

      //compare contact.user vs. req.user._id
      if(contact.user != req.user.id) {

        return res.status(400).json({msg: 'Authorization failed.'});
      }


      contact = await Contact.findByIdAndUpdate(
        req.params.contactId,
        { $set: { name: name, email: email, phone: phone, type: type } },
        { new: true}
        );

      res.json(contact);
      
    } catch (err) {

      if(err.kind == 'ObjectId') {
        return res.status(400).json({msg: 'Contact Not Found.'});
      }
      
      console.error(err.message);
      res.status(500).send('Server Error.');

    }


  }

)


// @route   Delete api/contacts
// @desc    Delete contact
// @access  Private

router.delete('/:contactId', auth,

  async(req, res) => {

    try {

      //get contact
      let contact = await Contact.findById(req.params.contactId);

      if(!contact) {
        return res.status(400).json({msg: 'Contact Not Found.'});
      }

      //compare contact.user vs. req.user._id
      if(contact.user != req.user.id) {

        return res.status(400).json({msg: 'Authorization failed.'});
      }


      await Contact.findByIdAndDelete(req.params.contactId);

      res.json({msg: 'Contact Deleted.'})
      
    } catch (err) {

      if(err.kind == 'ObjectId') {
        return res.status(400).json({msg: 'Contact Not Found.'});
      }
      
      console.error(err.message);
      res.status(500).send('Server Error.');

    }


  }

)






module.exports = router;
