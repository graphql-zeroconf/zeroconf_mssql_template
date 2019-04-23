/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_board', {
		'bno': {
			type: DataTypes.DOUBLE,
			allowNull: false,
			primaryKey: true
		},
		'title': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'content': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'writer': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'regdate': {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '(getdate())'
		},
		'updatedate': {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: '(getdate())'
		}
	}, {
		tableName: 'tbl_board',
		timestamps: false
	});
};
