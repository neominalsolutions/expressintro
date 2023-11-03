const { ObjectId } = require('mongodb');
const { EntitySchema } = require('typeorm');

const PersonEntity = new EntitySchema({
	name: 'person', // entity name
	tableName: 'persons', // mongodb de collection s takısı kullanalım
	columns: {
		id: { primary: true, objectId: ObjectId }, // mongodb de pk id alanları ObjectId tanımlanmalıdır
		name: {
			type: 'string',
		},
		friends: {
			type: 'array',
		},
		profile: {
			type: 'json',
		},
	},
});

module.exports = PersonEntity;
