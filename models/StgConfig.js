/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('StgConfig', {
		'StgCode': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'StgName': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'StockCode': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'StockName': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'Buy': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'Sell': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'BuyCount': {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		'SellCount': {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		'PL': {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		'UpdateDt': {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		'Run': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'OrderCount': {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		'CloseYn': {
			type: DataTypes.CHAR,
			allowNull: false
		},
		'Variability': {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		'Loss': {
			type: DataTypes.STRING,
			allowNull: true
		}
	}, {
		tableName: 'StgConfig',
		timestamps: false
	});
};
