/*global QUnit*/

sap.ui.define([
	"dev/citascambaceo/controller/CItasCambaceo.controller"
], function (Controller) {
	"use strict";

	QUnit.module("CItasCambaceo Controller");

	QUnit.test("I should test the CItasCambaceo controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
