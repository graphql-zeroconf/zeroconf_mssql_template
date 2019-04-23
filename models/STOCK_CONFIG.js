/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('STOCK_CONFIG', {
		'StockCode': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'StockName': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'OrderQty': {
			type: DataTypes.INTEGER,
			allowNull: false
		},
		'StartDt': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'EndDt': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'LoscutPoint': {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		'StopProfitPoint': {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		'TotalProfitUsd': {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		'UseYn': {
			type: DataTypes.CHAR,
			allowNull: false
		},
		'RealDeal': {
			type: DataTypes.CHAR,
			allowNull: false
		},
		'UserId': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'StartTime': {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		'EndTime': {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		'OpntOutTime': {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		'MinValue': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'DailyPLTick': {
			type: DataTypes.FLOAT,
			allowNull: true
		},
		'DailyLoscutTick': {
			type: DataTypes.FLOAT,
			allowNull: true
		}
	}, {
		tableName: 'STOCK_CONFIG',
		timestamps: false
	});
};
