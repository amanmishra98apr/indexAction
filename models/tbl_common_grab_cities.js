/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('tbl_common_grab_cities', {
		'id': {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			primaryKey: true,
			comment: "null",
			autoIncrement: true
		},
		'name': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'pin_start': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'pin_end': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'branch_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'active': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'ip_allowed': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'allowed_ips': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'global_allowed_time': {
			type: DataTypes.DATE,
			allowNull: true,
			comment: "null"
		},
		'auto_shutdown': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'auto_shutdown_milk_run': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'auto_shutdown_milk_run_threshold': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'auto_shutdown_threshold': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'non_exp_auto_shutdown_flag': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'auto_shutdown_force_setting': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'auto_shutdown_non_exp_starttime': {
			type: DataTypes.TIME,
			allowNull: true,
			comment: "null"
		},
		'lat': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'long': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'get_order_flag': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'get_order_total_count': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'single_merchant_order': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'multiple_merchant_order': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'get_order_force_setting': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'master_menu_id': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'force_menu_setting': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'get_order_radius': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'payout_status': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'payout_status_msg': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		},
		'min_withdraw': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'max_withdraw': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'max_daily_withdraw': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'max_monthly_withdraw': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'payout_force_setting': {
			type: DataTypes.INTEGER,
			allowNull: true,
			comment: "null"
		},
		'fssai_licence': {
			type: DataTypes.STRING,
			allowNull: true,
			comment: "null"
		}
	}, {timestamps: false,
		tableName: 'tbl_common_grab_cities'
		
	});
};
