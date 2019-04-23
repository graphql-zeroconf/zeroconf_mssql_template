/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('USER_MASTER', {
		'ID': {
			type: DataTypes.STRING,
			allowNull: false,
			primaryKey: true
		},
		'NAME': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'PASSWORD': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'ACCOUNT_NO': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'ACCOUNT_PWD': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'USE_START_DT': {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		'USE_END_DT': {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		'USE_YN': {
			type: DataTypes.CHAR,
			allowNull: false,
			defaultValue: 'Y'
		},
		'MOBILE_PHONE': {
			type: DataTypes.STRING,
			allowNull: true
		},
		'INPUT_DATE': {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '(getdate())'
		}
	}, {
		tableName: 'USER_MASTER',
		timestamps: false
	});
};
