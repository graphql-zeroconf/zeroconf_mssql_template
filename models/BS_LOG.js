/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('BS_LOG', {
		'BS': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'INPUT_DATE': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'PRICE': {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		'USER_ID': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'STOCK_CODE': {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'BS_LOG',
		timestamps: false
	});
};
