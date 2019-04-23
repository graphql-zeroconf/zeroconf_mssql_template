/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('PRODUCT', {
		'ID': {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		'NAME': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'TICK_SIZE': {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '((0))'
		},
		'TICK_VALUE': {
			type: DataTypes.FLOAT,
			allowNull: false
		},
		'LOSCUT_TICK': {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '((0))'
		},
		'STOP_PROFIT_TICK': {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '((0))'
		},
		'DAILY_LOSCUT_TICK': {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '((0))'
		},
		'DAILY_STOP_PROFIT_TICK': {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '((0))'
		},
		'DEAL_START_TIME': {
			type: DataTypes.TIME,
			allowNull: false
		},
		'DEAL_END_TIME': {
			type: DataTypes.TIME,
			allowNull: false
		},
		'DAILY_OPNT_OUT': {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: 'Y'
		},
		'KAKAO_MSG_SEND': {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: 'N'
		},
		'AVG_INCOME_TICK': {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '((40))'
		},
		'SNG_INCOME_TICK': {
			type: DataTypes.FLOAT,
			allowNull: false,
			defaultValue: '((40))'
		}
	}, {
		tableName: 'PRODUCT',
		timestamps: false
	});
};
