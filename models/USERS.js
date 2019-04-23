/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('USERS', {
		'USER_ID': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'ACCOUNT_ID': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'ACCOUNT_PWD': {
			type: DataTypes.STRING,
			allowNull: false
		},
		'USE_YN': {
			type: DataTypes.CHAR,
			allowNull: false
		}
	}, {
		tableName: 'USERS',
		timestamps: false
	});
};
