/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_reply', {
		'rno': {
			type: DataTypes.DOUBLE,
			allowNull: false,
			primaryKey: true
		},
		'bno': {
			type: DataTypes.DOUBLE,
			allowNull: false,
			references: {
				model: 'tbl_board',
				key: 'bno'
			}
		},
		'reply': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'replyer': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'replyDate': {
			type: DataTypes.DATEONLY,
			allowNull: true,
			defaultValue: '(getdate())'
		},
		'updateDate': {
			type: DataTypes.DATEONLY,
			allowNull: true,
			defaultValue: '(getdate())'
		}
	}, {
		tableName: 'tbl_reply',
		timestamps: false
	});
};
