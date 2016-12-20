'use strict';

const models = require('../../models');
const fs = require('fs-extra');
const env = require('../../config/envVariables.js');
const Boom = require('boom');


// File Upload Route Configs
let files = {
	add: (req, res) => {
		models.File.create({
				ArtistId: req.payload.ArtistId,
				identifier: req.payload.identifier,
				name: req.payload.name,
				size: req.payload.size,
				type: req.payload.type
            })
            .then((file) => {
				res(file).code(200);
			});
    },
	getAll: (req, res) => {
        models.File.findAll(
			{
				limit: 50
			}
		)
        .then((files) => {
	    	res(files).code(200);
		});
    },
    create: (request, reply) => {
        let data = request.payload;
        if (data.file) {
            let name = Date.now() + '-' + data.file.hapi.filename;
            let path = __dirname + '/' + request.params.path + '/' + name;
            let file = fs.createWriteStream(path);

            file.on('error', (err) => {
                console.error(err);
            });

            data.file.pipe(file);

            data.file.on('end', (err) => {
                let response = {
					file: {
						name: name,
						size: request.params.size,
						type: data.file.hapi.headers['content-type']
					},
                    headers: data.file.hapi.headers,
                    status: 200,
                    statusText: 'File uploaded successfully!'
                };
                reply(JSON.stringify(response));
            });
        }
        else {
            let response = {
                filename: data.file.hapi.filename,
                headers: data.file.hapi.headers,
                status: 400,
                statusText: 'There was an error uploading your file. Max sure the dimensions are 800px by 530px.'
            };
            reply(JSON.stringify(response));
        }
    },
	delete: (req, res) => {
        models.File.destroy({
                where: {
                    id: req.params.id
                }
            })
            .then((file) => {
                if (file) {
                    res().code(200);
                }
                else {
                    res().code(404);
                }
            });
    }
};

module.exports = files;
