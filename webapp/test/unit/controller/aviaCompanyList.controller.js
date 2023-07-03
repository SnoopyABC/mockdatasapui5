/*global QUnit*/

sap.ui.define([
	"mockdatatraining/controller/aviaCompanyList.controller"
], function (Controller) {
	"use strict";

	QUnit.module("aviaCompanyList Controller");

	QUnit.test("I should test the aviaCompanyList controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
