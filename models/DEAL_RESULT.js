/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('DEAL_RESULT', {
		'Dt': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'USER_ID': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'StockCode': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'BS': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'Qty': {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		'Price': {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		'Name': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'InputDate': {
			type: DataTypes.DATE,
			allowNull: true
		},
		'PL': {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		'PL_YN': {
			type: DataTypes.CHAR,
			allowNull: true
		},
		'SEQ': {
			type: DataTypes.INTEGER,
			allowNull: true
		}
	}, {
		tableName: 'DEAL_RESULT',
		timestamps: false
	});
};
