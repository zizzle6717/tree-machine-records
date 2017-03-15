'use strict';

const models = require('../../models');

// ContactList Route Configs
let contactLists = {
  get: (request, reply) => {
    models.ContactList.find({
        'where': {
          'id': request.params.id
        }
      })
      .then((contactList) => {
        if (contactList) {
          reply(contactList).code(200);
        } else {
          reply().code(404);
        }
      });
  },
  getAll: (request, reply) => {
    models.ContactList.findAll({
        'limit': 50
      })
      .then((contactLists) => {
        reply(contactLists).code(200);
      });
  },
  create: (request, reply) => {
    models.ContactList.create({
        'ArtistId': request.payload.ArtistId,
        'bandEmail': request.payload.bandEmail,
        'bandPhone': request.payload.bandPhone,
        'bandMailingAddress': request.payload.bandMailingAddress,
        'bookingManagerEmail': request.payload.bookingManagerEmail,
        'bookingManagerPhone': request.payload.bookingManagerPhone,
        'generalManagerEmail': request.payload.generalManagerEmail,
        'generalManagerPhone': request.payload.generalManagerPhone
      })
      .then((contactList) => {
        reply(contactList).code(200);
      });
  },
  update: (request, reply) => {
    models.File.find({
      'where': {
        'id': request.params.id
      }
    }).then((contactList) => {
      contactList.updateAttributes({
        'bandEmail': request.payload.bandEmail,
        'bandPhone': request.payload.bandPhone,
        'bandMailingAddress': request.payload.bandMailingAddress,
        'bookingManagerEmail': request.payload.bookingManagerEmail,
        'bookingManagerPhone': request.payload.bookingManagerPhone,
        'generalManagerEmail': request.payload.generalManagerEmail,
        'generalManagerPhone': request.payload.generalManagerPhone
      }).then((contactList) => {
				if (contactList) {
					reply(contactList).code(200);
				} else {
					reply().code(404);
				}
      });
    });
  },
  delete: (request, reply) => {
    models.ContactList.destroy({
        'where': {
          'id': request.params.id
        }
      })
      .then((contactList) => {
        if (contactList) {
          reply().code(200);
        } else {
          reply().code(404);
        }
      });
  }
};

module.exports = contactLists;
