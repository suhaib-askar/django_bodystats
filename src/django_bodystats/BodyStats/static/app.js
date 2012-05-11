/**
 * Weight Definitions
 */
console.log('Starting app.js');
Ext.Loader.setConfig({
	enabled : true,
	disableCaching : true
});

Ext.application({
	name : 'BodyStats',
	appFolder : 'static/app',
	id: 'bodystats',
	models : [
		'BodyStats.model.CurrentUser', 
		'BodyStats.model.Weight', 
		'BodyStats.model.BloodPressure'
	],
	stores : ['BodyStats.store.CurrentUser', 'BodyStats.store.Weight', 'BodyStats.store.BloodPressure'],
	controllers : [
		'BodyStats.controller.Header', 
		'BodyStats.controller.UserAction',
		'BodyStats.controller.Weight', 
		'BodyStats.controller.BloodPressure'
	],
	launch : function() {
		console.log('Starting app.launch');
		Ext.create('Ext.container.Viewport', {
			alias : 'viewport',
			layout: 'border',
			padding: '2%',
			items : [{
				xtype: 'headerpanel',
				region: 'north'
			}, {
				xtype : 'panel',
				region: 'center',
				layout : 'accordion',
				items : [{
					xtype: 'panel',
					title: 'User Actions',
					layout: 'accordion',
					items: [{
						xtype: 'loginpanel'
					}, {
						xtype: 'logoutpanel'
					}, {
						xtype: 'registrationpanel'
					}]
				}, {
					xtype : 'weightentrypanel'
				}, {
					xtype : 'panel',
					title : 'Weight Chart',
					layout : 'fit',
					items : [{
						xtype : 'weightchart'
					}]
				}, {
					xtype : 'bloodpressureentrypanel'
				}, {
					xtype : 'panel',
					title : 'Blood Pressure Chart',
					layout : 'fit',
					items : [{
						xtype : 'bloodpressurechart'
					}]
				}]
			}, {
				xtype: 'panel',
				region: 'south',
				html: '&copy 2012, Justin Chudgar'
			}]
		});
	}
});
